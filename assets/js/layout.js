/* ==========================================================================
   RADPYS V4 — Static Site Runtime (vanilla JS)
   - Navbar + Footer injection
   - Active nav highlight
   - Mobile menu toggle
   - Scroll fade-in reveals
   - Toast helper
   - Marquee (via CSS)
   ========================================================================== */

(function () {
  const NAV_LINKS = [
    { href: "moduller.html", label: "Modüller" },
    { href: "fiyatlandirma.html", label: "Fiyatlandırma" },
    { href: "dokumanlar.html", label: "Dokümanlar" },
    { href: "kaynaklar.html", label: "Kaynaklar" },
    { href: "hakkimizda.html", label: "Hakkımızda" },
    { href: "iletisim.html", label: "İletişim" },
  ];

  const currentPath = location.pathname.split("/").pop() || "index.html";

  function navMarkup() {
    const links = NAV_LINKS.map(
      (l) =>
        `<a href="${l.href}" class="nav-link text-sm text-slate-300 hover:text-white transition-colors ${currentPath === l.href ? "active text-white" : ""
        }">${l.label}</a>`
    ).join("");

    return `
        <nav id="topnav" class="fixed top-0 inset-x-0 z-50 transition-all duration-300">
          <div class="container-narrow h-16 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-2.5 group">
              <img src="images/logo.webp" data-radpys-logo alt="RADPYS Logo" class="w-8 h-8 object-contain transition-transform group-hover:scale-105" width="32" height="32" />
              <span class="font-display text-lg font-bold tracking-wide">RADPYS<span class="text-neon-teal">.</span></span>
            </a>

            <div class="hidden lg:flex items-center gap-6">${links}</div>

            <div class="hidden lg:flex items-center gap-3">
              <a href="https://download.radpys.com.tr/releases/RADPYS_Setup_latest.exe" class="btn btn-outline">Demo İndir</a>
            </div>

            <button id="mobile-toggle" class="lg:hidden p-2" aria-label="Menü">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>

          <div id="mobile-menu" class="lg:hidden overflow-hidden max-h-0 transition-[max-height] duration-300 border-t border-white/5 bg-[#0a0f1e]/95 backdrop-blur-xl">
            <div class="px-6 py-5 flex flex-col gap-2">
              ${NAV_LINKS.map((l) => `<a href="${l.href}" class="py-2 text-slate-300 text-sm">${l.label}</a>`).join("")}
              <a href="https://download.radpys.com.tr/releases/RADPYS_Setup_latest.exe" class="btn btn-outline mt-3 justify-center">Demo İndir</a>
            </div>
          </div>
        </nav>
      `;
  }

  function footerMarkup() {
    return `
        <footer class="relative mt-24 border-t border-white/5" style="background:#070b16">
          <div class="container-narrow py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
            <div class="col-span-2">
              <a href="index.html" class="flex items-center gap-2.5 group">
                <img src="images/logo.webp" data-radpys-logo alt="RADPYS Logo" class="w-8 h-8 object-contain transition-transform group-hover:scale-105" width="32" height="32" />
                <span class="font-display text-lg font-bold tracking-wide">RADPYS<span class="text-neon-teal">.</span></span>
              </a>
              <p class="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
                Radyasyon çalışanları & departman yönetim sistemi. Nöbet, dozimetre, izin, RKE DIN 6857-1, ortam dozu krokisi ve olay bildirimi süreçlerini KVKK uyumlu PostgreSQL altyapısıyla tek platformda toplar.
              </p>
              <p class="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-slate-500">© ${new Date().getFullYear()} RADPYS — Tüm hakları saklıdır</p>
            </div>
            <div>
              <h4 class="text-xs uppercase tracking-[0.2em] text-neon-teal font-mono">Ürün</h4>
              <ul class="mt-4 space-y-2 text-sm text-slate-300">
                <li><a href="moduller.html" class="hover:text-white">Modüller</a></li>
                <li><a href="fiyatlandirma.html" class="hover:text-white">Fiyatlandırma</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-xs uppercase tracking-[0.2em] text-neon-teal font-mono">Şirket</h4>
              <ul class="mt-4 space-y-2 text-sm text-slate-300">
                <li><a href="hakkimizda.html" class="hover:text-white">Hakkımızda</a></li>
                <li><a href="dokumanlar.html" class="hover:text-white">Dokümanlar</a></li>
                <li><a href="changelog.html" class="hover:text-white">Sürüm Notları</a></li>
                <li><a href="kaynaklar.html" class="hover:text-white">Kaynaklar</a></li>
                <li><a href="iletisim.html" class="hover:text-white">İletişim</a></li>
              </ul>
            </div>
          </div>
          <div style="height:1px; width:100%; background:linear-gradient(90deg,transparent,rgba(20,184,166,0.4),transparent)"></div>
        </footer>
      `;
  }

  // Toast host + helper
  function ensureToastHost() {
    if (!document.getElementById("toast-host")) {
      const h = document.createElement("div");
      h.id = "toast-host";
      document.body.appendChild(h);
    }
  }
  window.showToast = function (msg, type = "success") {
    ensureToastHost();
    const el = document.createElement("div");
    el.className = "toast " + type;
    el.textContent = msg;
    document.getElementById("toast-host").appendChild(el);
    setTimeout(() => (el.style.opacity = "0"), 3200);
    setTimeout(() => el.remove(), 3800);
  };

  // Reveal on scroll
  let revealObserver = null;

  function initReveals(container = document) {
    const els = (container || document).querySelectorAll(".reveal:not(.is-visible)");
    if (!els.length) return;

    if ("IntersectionObserver" in window) {
      if (!revealObserver) {
        revealObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("is-visible");
                revealObserver.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
        );
      }
      els.forEach((el) => revealObserver.observe(el));
    } else {
      els.forEach((el) => el.classList.add("is-visible"));
    }
  }

  window.initReveals = initReveals;

  // Boot
  function boot() {
    const navHost = document.getElementById("site-nav");
    const footHost = document.getElementById("site-footer");
    if (navHost) navHost.outerHTML = navMarkup();
    if (footHost) footHost.outerHTML = footerMarkup();

    // Scrolled state
    const topnav = document.getElementById("topnav");
    const applyScroll = () => {
      if (!topnav) return;
      if (window.scrollY > 12) {
        topnav.style.background = "rgba(10,15,30,0.85)";
        topnav.style.backdropFilter = "blur(18px)";
        topnav.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
      } else {
        topnav.style.background = "transparent";
        topnav.style.backdropFilter = "none";
        topnav.style.borderBottom = "1px solid transparent";
      }
    };
    applyScroll();
    window.addEventListener("scroll", applyScroll, { passive: true });

    // Mobile menu toggle
    const toggle = document.getElementById("mobile-toggle");
    const menu = document.getElementById("mobile-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isOpen = menu.style.maxHeight && menu.style.maxHeight !== "0px";
        menu.style.maxHeight = isOpen ? "0px" : menu.scrollHeight + "px";
      });
    }

    initReveals();

    // Optimize logo client-side to 128x128 WebP data URL
    (function optimizeLogoImages() {
      const cached = sessionStorage.getItem("radpys_logo_128");
      if (cached) {
        document.querySelectorAll("img[data-radpys-logo]").forEach((img) => {
          img.src = cached;
        });
        return;
      }
      const rawImg = new Image();
      rawImg.crossOrigin = "anonymous";
      rawImg.onload = function () {
        const cvs = document.createElement("canvas");
        cvs.width = 128;
        cvs.height = 128;
        const ctx = cvs.getContext("2d");
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(rawImg, 0, 0, 128, 128);
        try {
          const webpData = cvs.toDataURL("image/webp", 0.88);
          sessionStorage.setItem("radpys_logo_128", webpData);
          document.querySelectorAll("img[data-radpys-logo]").forEach((img) => {
            img.src = webpData;
          });
        } catch (e) {}
      };
      rawImg.src = "images/logo.webp";
    })();

    if ("MutationObserver" in window) {
      const mutObserver = new MutationObserver(() => {
        initReveals();
      });
      mutObserver.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
