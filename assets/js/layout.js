/* ==========================================================================
   RADPYS V4 — Static Site Runtime & Auto-Binder (vanilla JS)
   - Navbar + Footer injection (driven by window.RADPYS.SITE_CONFIG)
   - Live version.json loader & [data-radpys-*] automatic DOM binder
   - Active nav highlight & Mobile menu toggle
   - Scroll fade-in reveals & Toast helper
   ========================================================================== */

(function () {
  const DEFAULT_NAV_LINKS = [
    { href: "moduller.html", label: "Modüller" },
    { href: "gelistirme-planlari.html", label: "Yol Haritası" },
    { href: "fiyatlandirma.html", label: "Fiyatlandırma" },
    { href: "help/index.html", label: "Dokümanlar" },
    { href: "kaynaklar.html", label: "Kaynaklar" },
    { href: "hakkimizda.html", label: "Hakkımızda" },
    { href: "iletisim.html", label: "İletişim" },
  ];

  function getConfig() {
    const r = window.RADPYS || {};
    const vInfo = r.VERSION_INFO || {
      version: "4.0.5.7",
      series: "V4.0.5",
      release_date: "2026-04-19",
      download_url: "https://download.radpys.com.tr/releases/RADPYS_Setup_latest.exe",
    };
    const siteCfg = r.SITE_CONFIG || {};
    return {
      versionInfo: vInfo,
      navLinks: siteCfg.navLinks || DEFAULT_NAV_LINKS,
      downloadUrl: vInfo.download_url || siteCfg.downloadUrl || "https://download.radpys.com.tr/releases/RADPYS_Setup_latest.exe",
      moduleCount: (r.MODULES && r.MODULES.length) || (r.STATS && r.STATS.modules) || 23,
      socials: siteCfg.socials || {
        linkedin: "https://www.linkedin.com/in/cem-kara-633b11429",
        facebook: "https://www.facebook.com/profile.php?id=61593139902770",
        youtube: "https://www.youtube.com/@RADPYS_V4",
      },
    };
  }

  const currentPath = location.pathname.split("/").pop() || "index.html";

  function navMarkup() {
    const cfg = getConfig();
    const links = cfg.navLinks
      .map(
        (l) =>
          `<a href="${l.href}" class="nav-link text-sm text-slate-300 hover:text-white transition-colors ${
            currentPath === l.href || (l.href.includes("help") && location.pathname.includes("/help/"))
              ? "active text-white"
              : ""
          }">${l.label}</a>`
      )
      .join("");

    return `
        <nav id="topnav" class="fixed top-0 inset-x-0 z-50 transition-all duration-300">
          <div class="container-narrow h-16 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-2.5 group">
              <img src="images/logo.webp" data-radpys-logo alt="RADPYS Radyoloji Yönetim Sistemi Logo" loading="eager" fetchpriority="high" decoding="async" class="w-8 h-8 object-contain transition-transform group-hover:scale-105" width="32" height="32" />
              <span class="font-display text-lg font-bold tracking-wide">RADPYS<span class="text-neon-teal">.</span></span>
            </a>

            <div class="hidden lg:flex items-center gap-6">${links}</div>

            <div class="hidden lg:flex items-center gap-3">
              <a href="${cfg.downloadUrl}" data-radpys-download class="btn btn-outline">Demo İndir</a>
            </div>

            <button id="mobile-toggle" class="lg:hidden p-2" aria-label="Menü">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>

          <div id="mobile-menu" class="lg:hidden overflow-hidden max-h-0 transition-[max-height] duration-300 border-t border-white/5 bg-[#0a0f1e]/95 backdrop-blur-xl">
            <div class="px-6 py-5 flex flex-col gap-2">
              ${cfg.navLinks.map((l) => `<a href="${l.href}" class="py-2 text-slate-300 text-sm">${l.label}</a>`).join("")}
              <a href="${cfg.downloadUrl}" data-radpys-download class="btn btn-outline mt-3 justify-center">Demo İndir</a>
            </div>
          </div>
        </nav>
      `;
  }

  function footerMarkup() {
    const cfg = getConfig();
    return `
        <footer class="relative mt-24 border-t border-white/5" style="background:#070b16">
          <div class="container-narrow py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
            <div class="col-span-2">
              <a href="index.html" class="flex items-center gap-2.5 group">
                <img src="images/logo.webp" data-radpys-logo alt="RADPYS Radyoloji Yönetim Sistemi Logo" loading="lazy" decoding="async" class="w-8 h-8 object-contain transition-transform group-hover:scale-105" width="32" height="32" />
                <span class="font-display text-lg font-bold tracking-wide">RADPYS<span class="text-neon-teal">.</span></span>
              </a>
              <p class="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
                Radyasyon çalışanları & departman yönetim sistemi. Nöbet, dozimetre, izin, RKE DIN 6857-1, ortam dozu krokisi, resmi tutanaklar ve olay bildirimi süreçlerini KVKK uyumlu PostgreSQL altyapısıyla tek platformda toplar.
              </p>
              
              <!-- Sosyal Medya Profilleri -->
              <div class="mt-5 flex items-center gap-3">
                <a href="${cfg.socials.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="RADPYS LinkedIn Profili" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-teal-400/50 hover:bg-teal-500/10 flex items-center justify-center text-slate-300 hover:text-teal-300 transition-all">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="${cfg.socials.facebook}" target="_blank" rel="noopener noreferrer" aria-label="RADPYS Facebook Sayfası" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-teal-400/50 hover:bg-teal-500/10 flex items-center justify-center text-slate-300 hover:text-teal-300 transition-all">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="${cfg.socials.youtube}" target="_blank" rel="noopener noreferrer" aria-label="RADPYS YouTube Kanalı" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-teal-400/50 hover:bg-teal-500/10 flex items-center justify-center text-slate-300 hover:text-teal-300 transition-all">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>

              <p class="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-slate-500">© ${new Date().getFullYear()} RADPYS — Tüm hakları saklıdır · <span data-radpys-version="v{v}">v${cfg.versionInfo.version}</span></p>
            </div>
            <div>
              <h4 class="text-xs uppercase tracking-[0.2em] text-neon-teal font-mono">Ürün</h4>
              <ul class="mt-4 space-y-2 text-sm text-slate-300">
                <li><a href="moduller.html" class="hover:text-white">Modüller (<span data-radpys-module-count>${cfg.moduleCount}</span>)</a></li>
                <li><a href="gelistirme-planlari.html" class="hover:text-white">Ar-Ge & Yol Haritası</a></li>
                <li><a href="fiyatlandirma.html" class="hover:text-white">Fiyatlandırma</a></li>
                <li><a href="help/index.html" class="hover:text-white">Dokümanlar & Kılavuz</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-xs uppercase tracking-[0.2em] text-neon-teal font-mono">Kurumsal & Destek</h4>
              <ul class="mt-4 space-y-2 text-sm text-slate-300">
                <li><a href="hakkimizda.html" class="hover:text-white">Hakkımızda</a></li>
                <li><a href="changelog.html" class="hover:text-white">Sürüm Notları</a></li>
                <li><a href="kaynaklar.html" class="hover:text-white">Kaynaklar & Mevzuat</a></li>
                <li><a href="gizlilik.html" class="hover:text-white">Gizlilik & KVKK</a></li>
                <li><a href="iletisim.html" class="hover:text-white">İletişim & Demo</a></li>
              </ul>
            </div>
          </div>
          <div style="height:1px; width:100%; background:linear-gradient(90deg,transparent,rgba(20,184,166,0.4),transparent)"></div>
        </footer>
      `;
  }

  /* ----------------------------------------------------------------------
     Otomatik Sürüm & Modül Sayısı Bağlayıcı (Auto-Binder)
     ---------------------------------------------------------------------- */
  function applyRadpysBindings(root = document) {
    const cfg = getConfig();
    const rawVer = String(cfg.versionInfo.version || "4.0.5.7").replace(/^v/i, "");
    const parts = rawVer.split(".");
    const series = cfg.versionInfo.series || (parts.length >= 3 ? `V${parts[0]}.${parts[1]}.${parts[2]}` : `V${rawVer}`);
    const modCount = String(cfg.moduleCount || 23);

    (root || document).querySelectorAll("[data-radpys-version]").forEach((el) => {
      const tpl = el.getAttribute("data-radpys-version");
      if (tpl && tpl.includes("{v}")) {
        el.textContent = tpl.replace(/\{v\}/g, rawVer);
      } else {
        el.textContent = `v${rawVer}`;
      }
    });

    (root || document).querySelectorAll("[data-radpys-series]").forEach((el) => {
      const tpl = el.getAttribute("data-radpys-series");
      if (tpl && tpl.includes("{s}")) {
        el.textContent = tpl.replace(/\{s\}/g, series);
      } else {
        el.textContent = series;
      }
    });

    (root || document).querySelectorAll("[data-radpys-module-count]").forEach((el) => {
      const tpl = el.getAttribute("data-radpys-module-count");
      if (tpl && tpl.includes("{m}")) {
        el.textContent = tpl.replace(/\{m\}/g, modCount);
      } else {
        el.textContent = modCount;
      }
    });

    if (cfg.downloadUrl) {
      (root || document).querySelectorAll("[data-radpys-download]").forEach((el) => {
        el.setAttribute("href", cfg.downloadUrl);
      });
    }
  }

  window.applyRadpysBindings = applyRadpysBindings;

  async function syncVersionJson() {
    try {
      const res = await fetch("version.json", { cache: "no-store" });
      if (!res.ok) return;
      const vData = await res.json();
      if (!vData || !vData.version) return;

      const rawVer = String(vData.version).replace(/^v/i, "");
      const parts = rawVer.split(".");
      const series = parts.length >= 3 ? `V${parts[0]}.${parts[1]}.${parts[2]}` : `V${rawVer}`;

      window.RADPYS = window.RADPYS || {};
      window.RADPYS.VERSION_INFO = Object.assign({}, window.RADPYS.VERSION_INFO || {}, {
        version: rawVer,
        series: series,
        release_date: vData.release_date || "",
        download_url: vData.download_url || "https://download.radpys.com.tr/releases/RADPYS_Setup_latest.exe",
      });

      if (window.RADPYS.TIERS_DATA) {
        const eliteTier = window.RADPYS.TIERS_DATA.find((t) => t.id === "elite");
        if (eliteTier) {
          eliteTier.badge = `En Kapsamlı (v${rawVer})`;
        }
      }

      applyRadpysBindings(document);
      window.dispatchEvent(new CustomEvent("radpys:version-ready", { detail: window.RADPYS.VERSION_INFO }));
    } catch (e) {
      // Yerel file:// açılışlarında data.js içindeki varsayılan VERSION_INFO kullanılır
    }
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

    applyRadpysBindings(document);
    syncVersionJson();

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
