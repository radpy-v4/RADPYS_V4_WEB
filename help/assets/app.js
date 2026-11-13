/**
 * RADPYS V4 - Profesyonel Çevrimdışı & Web Yardım Portalı İstemci Motoru
 * ======================================================================
 * - %100 Çevrimdışı Uyumluluk (file:/// ve http://)
 * - Merkezi Sürüm Rozeti, Sol Modül Menüsü ve Otomatik Sağ İçindekiler (TOC)
 * - Ana Sayfa Canlı Modül Filtreleme + Anlık Arama Modalı (Ctrl+K, Türkçe Duyarlı)
 * - Dinamik Mermaid Şema Çizimi & Ekran Görüntüsü Tam Ekran Büyütme (Lightbox)
 */

(function () {
  "use strict";

  let currentVersion = "4.0.5.22";

  const MODULE_NAV_ITEMS = [
    {
      "num": "01",
      "title": "Kurulum & İlk Giriş",
      "url": "01_kurulum_ve_ilk_giris.html"
    },
    {
      "num": "02",
      "title": "Kullanıcı & Rol Yönetimi",
      "url": "02_kullanici_ve_rol_yonetimi.html"
    },
    {
      "num": "03",
      "title": "Sistem Ayarları & Tanımlar",
      "url": "03_sistem_ayarlari_ve_tanimlamalar.html"
    },
    {
      "num": "04",
      "title": "Veritabanı Bakım & Kasa",
      "url": "04_veritabani_bakim_ve_guvenlik.html"
    },
    {
      "num": "05",
      "title": "Personel & Excel Aktarım",
      "url": "05_personel_yonetimi_ve_toplu_aktarim.html"
    },
    {
      "num": "06",
      "title": "İzin Yönetimi & Şua",
      "url": "06_izin_yonetimi_ve_hakedis.html"
    },
    {
      "num": "07",
      "title": "Nöbet Ayarları & Kısıtlar",
      "url": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html",
      "children": [
        {
          "num": "07.1",
          "title": "Temel Ayarlar & Standartlar",
          "url": "07_1_temel_ayarlar_ve_calisma_standartlari.html"
        },
        {
          "num": "07.2",
          "title": "Birim Kuralları & Slotlar",
          "url": "07_2_birim_kurallari_ve_slot_yonetimi.html"
        },
        {
          "num": "07.3",
          "title": "Gelişmiş Kısıtlar & Adalet",
          "url": "07_3_gelismis_kisitlar_ve_adalet_agirliklari.html"
        },
        {
          "num": "07.4",
          "title": "Sağlık & Yasal Kısıtlar",
          "url": "07_4_personel_ozel_saglik_ve_yasal_kisitlar.html"
        },
        {
          "num": "07.5",
          "title": "Personel Talepleri & Onay",
          "url": "07_5_personel_talepleri_ve_onay_yonetimi.html"
        }
      ]
    },
    {
      "num": "08",
      "title": "Nöbet Hazırlık & Solver",
      "url": "08_nobet_hazirlik_ve_solver_motoru.html"
    },
    {
      "num": "09",
      "title": "Nöbet Devir & İkame",
      "url": "09_nobet_devir_ikame_ve_acil_mazeret.html"
    },
    {
      "num": "10",
      "title": "Nöbet Borç & Fazla Mesai",
      "url": "10_nobet_borc_alacak_ve_fazla_mesai.html"
    },
    {
      "num": "11",
      "title": "Fiili Hizmet (FHZ) & Şua",
      "url": "11_fiili_hizmet_ve_sua_hesaplama.html"
    },
    {
      "num": "12",
      "title": "Dozimetre & RD.F43",
      "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html"
    },
    {
      "num": "13",
      "title": "Sağlık Muayeneleri",
      "url": "13_saglik_muayeneleri_ve_periyodik_takip.html"
    },
    {
      "num": "14",
      "title": "Ortam Dozu & Kroki",
      "url": "14_ortam_dozu_ve_kroki_haritasi.html"
    },
    {
      "num": "15",
      "title": "Olay Bildirimi & DÖF",
      "url": "15_olay_bildirimi_ve_dof_capa.html"
    },
    {
      "num": "16",
      "title": "RGS / RSO Görevlendirme",
      "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html"
    },
    {
      "num": "17",
      "title": "Hizmet İçi Eğitim & LMS",
      "url": "17_hizmet_ici_egitim_ve_online_sinav.html"
    },
    {
      "num": "18",
      "title": "Tıbbi Cihaz & NDK Lisans",
      "url": "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html"
    },
    {
      "num": "19",
      "title": "Cihaz Arıza & QA/QC",
      "url": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html"
    },
    {
      "num": "20",
      "title": "Koruyucu Ekipman (RKE)",
      "url": "20_rke_koruyucu_ekipman_ve_din6857.html"
    },
    {
      "num": "21",
      "title": "Merkezi Onaylar",
      "url": "21_merkezi_onaylar.html"
    },
    {
      "num": "22",
      "title": "Web Portal & Dashboard",
      "url": "22_web_portal_ve_dashboardlar.html"
    },
    {
      "num": "23",
      "title": "Rapor & Tutanak Merkezi",
      "url": "23_rapor_tutanak_merkezi.html"
    }
  ];

  function normalizeTr(str) {
    if (!str) return "";
    return String(str)
      .toLocaleLowerCase("tr-TR")
      .replace(/ı/g, "i")
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c");
  }

  function getCurrentFileName() {
    const raw = (window.location.pathname || "").split(/[\\/]/).pop() || "";
    try {
      return decodeURIComponent(raw) || "index.html";
    } catch (e) {
      return raw || "index.html";
    }
  }

  // ─── 1. KALICI KOYU KLİNİK TEMA (Permanent Clinical Dark Mode) ───────────
  const htmlEl = document.documentElement;
  htmlEl.classList.add("dark");
  try {
    localStorage.setItem("radpys_help_theme", "dark");
  } catch (e) {}

  // ─── 1.5 MERKEZİ SÜRÜM, ÜST BAR VE SOL/SAĞ MENÜ YÖNETİMİ ─────────────────
  function applyVersionText(ver) {
    currentVersion = ver;
    document.querySelectorAll("header a[href='index.html'] span.font-mono").forEach(badge => {
      badge.textContent = "v" + ver;
    });
    document.querySelectorAll("footer p").forEach(p => {
      if (p.textContent.includes("RADPYS V4.2")) {
        p.textContent = p.textContent.replace("RADPYS V4.2", `RADPYS V4 (v${ver})`);
      }
    });
  }

  function setupHeaderAndVersion() {
    applyVersionText(currentVersion);

    // Web ortamında (http/https) çalışıyorsa "../version.json" ile canlı senkronize ol
    // ve üst bara "← Ana Siteye Dön" butonu ekle
    if (window.location.protocol === "http:" || window.location.protocol === "https:") {
      fetch("../version.json", { cache: "no-store" })
        .then(r => (r.ok ? r.json() : null))
        .then(data => {
          if (data && data.version) {
            applyVersionText(String(data.version).replace(/^v/i, ""));
          }
        })
        .catch(() => {});

      const headerActions = document.querySelector("header .max-w-\\[1720px\\] > div:last-child");
      if (headerActions && !headerActions.querySelector("[data-back-to-main-site]")) {
        const backBtn = document.createElement("a");
        backBtn.href = "../index.html";
        backBtn.setAttribute("data-back-to-main-site", "true");
        backBtn.className = "inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition";
        backBtn.innerHTML = `
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          <span>Ana Siteye Dön</span>
        `;
        headerActions.insertBefore(backBtn, headerActions.firstChild);
      }
    }
  }

  function setupSidebarNavigation() {
    const sidebar = document.getElementById("sidebarNav");
    if (!sidebar) return;

    const currentFile = getCurrentFileName();
    if (sidebar.getAttribute("data-nav-built") === currentFile) return;

    const isIndexPage = currentFile === "index.html" || document.getElementById("moduleCardsContainer");

    if (isIndexPage) {
      // Ana sayfada Bölüm 1..6 bağlantılarının tam olduğundan emin ol
      const nav = sidebar.querySelector("nav");
      if (nav && !nav.querySelector("a[href='#bolum-6']")) {
        const b5 = nav.querySelector("a[href='#bolum-5'] span:last-child");
        if (b5) b5.textContent = "Bölüm 5: Cihaz & RKE Envanteri";
        const b6Link = document.createElement("a");
        b6Link.href = "#bolum-6";
        b6Link.className = "flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition";
        b6Link.innerHTML = `
          <span class="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0"></span>
          <span>Bölüm 6: Merkezi Onaylar & Web Portal</span>
        `;
        nav.appendChild(b6Link);
      }
      sidebar.setAttribute("data-nav-built", currentFile);
      return;
    }

    // Modül detay sayfalarında sol menüyü merkezi MODULE_NAV_ITEMS dizisinden oluştur
    let nav = sidebar.querySelector("nav");
    if (!nav) {
      sidebar.innerHTML = `
        <div class="mb-4"><span class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3">${MODULE_NAV_ITEMS.length} Modül Rehberi</span></div>
        <nav class="space-y-1 text-sm font-medium"></nav>`;
      nav = sidebar.querySelector("nav");
    }
    if (!nav) return;

    const isMod07Group = currentFile.startsWith("07_");
    let html = "";

    for (const item of MODULE_NAV_ITEMS) {
      const isActive = currentFile === item.url;
      if (isActive) {
        html += `
          <a href="${item.url}" data-active-nav="true" class="flex items-center justify-between px-3 py-2.5 rounded-xl bg-cyan-50 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300 font-semibold border-l-4 border-cyan-500">
            <div class="flex items-center gap-2.5">
              <span class="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold">${item.num}</span>
              <span>${item.title}</span>
            </div>
            <span class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          </a>`;
      } else {
        html += `
          <a href="${item.url}" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <span class="font-mono text-xs opacity-60">${item.num}</span>
            <span>${item.title}</span>
          </a>`;
      }

      if (item.children && isMod07Group) {
        html += `<div class="pl-5 space-y-1 border-l border-slate-200 dark:border-slate-800 ml-2 my-2">`;
        for (const sub of item.children) {
          const isSubActive = currentFile === sub.url;
          html += `
            <a href="${sub.url}" ${isSubActive ? 'data-active-nav="true"' : ""} class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs ${isSubActive
              ? "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 font-bold border border-cyan-300 dark:border-cyan-700/50"
              : "text-slate-500 dark:text-slate-400 hover:text-white hover:bg-slate-800/60"} transition">
              <span class="font-mono text-[10px] opacity-75">${sub.num}</span>
              <span class="truncate">${sub.title}</span>
            </a>`;
        }
        html += `</div>`;
      }
    }

    nav.innerHTML = html;
    sidebar.setAttribute("data-nav-built", currentFile);

    const activeEl = nav.querySelector("[data-active-nav='true']");
    if (activeEl) {
      setTimeout(() => {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }, 80);
    }
  }

  function setupOnPageToc() {
    const tocNav = document.getElementById("onPageToc");
    const mainEl = document.querySelector("main");
    if (!tocNav || !mainEl) return;

    const sections = Array.from(mainEl.querySelectorAll("section[id]"));
    if (sections.length === 0) return;

    const tocItems = [];
    sections.forEach(sec => {
      const id = sec.getAttribute("id");
      if (!id || id === "overview" || id === "genel-bakis") return;
      const heading = sec.querySelector("h2, h3, h1");
      if (!heading) return;
      const cleanTitle = heading.textContent
        .replace(/\s+/g, " ")
        .replace(/^\d+\.\s*/, "")
        .trim();
      if (cleanTitle) {
        tocItems.push({ id, title: cleanTitle, el: sec });
      }
    });

    if (tocItems.length === 0) return;

    tocNav.innerHTML = tocItems.map(item => `
      <a href="#${item.id}" data-toc-link="${item.id}"
         class="block py-1 pl-2.5 border-l-2 border-transparent text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-400 transition leading-snug">
        ${escapeHtml(item.title)}
      </a>
    `).join("");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute("id");
            tocNav.querySelectorAll("[data-toc-link]").forEach(link => {
              if (link.dataset.tocLink === activeId) {
                link.className = "block py-1 pl-2.5 border-l-2 border-cyan-400 text-xs font-bold text-cyan-400 transition leading-snug";
              } else {
                link.className = "block py-1 pl-2.5 border-l-2 border-transparent text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-400 transition leading-snug";
              }
            });
          }
        });
      }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

      tocItems.forEach(item => observer.observe(item.el));
    }
  }

  // ─── 2. MERMAID İŞ AKIŞI DİYAGRAMI MOTORU ─────────────────────────────────
  let originalMermaidSources = new Map();

  if (typeof mermaid !== "undefined") {
    try {
      mermaid.initialize({ startOnLoad: false });
    } catch (e) {}
  }

  function renderMermaidDiagrams() {
    if (typeof mermaid === "undefined") return;

    const isDark = htmlEl.classList.contains("dark");
    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? "dark" : "neutral",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        fontSize: 15,
        securityLevel: "loose",
        themeVariables: {
          fontSize: "15px",
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          lineColor: isDark ? "#64748b" : "#94a3b8"
        },
        flowchart: {
          useMaxWidth: false,
          htmlLabels: true,
          curve: "basis",
          padding: 15,
          nodeSpacing: 40,
          rankSpacing: 45
        }
      });

      const nodes = Array.from(document.querySelectorAll(".mermaid"));
      if (nodes.length === 0) return;

      nodes.forEach((node, idx) => {
        node.style.whiteSpace = "normal";
        if (!originalMermaidSources.has(idx)) {
          originalMermaidSources.set(idx, node.textContent.trim());
        } else {
          node.removeAttribute("data-processed");
          node.textContent = originalMermaidSources.get(idx);
        }
      });

      mermaid.run({ nodes: nodes }).then(() => {
        nodes.forEach(node => {
          node.classList.remove("opacity-0");
          node.classList.add("opacity-100");
          const svg = node.querySelector("svg");
          if (svg) {
            svg.style.maxWidth = "100%";
            svg.style.height = "auto";
            svg.style.display = "block";
            svg.style.margin = "0 auto";
          }
          attachInteractiveDiagramControls(node);
        });
      }).catch(err => {
        console.warn("Mermaid şema çizim uyarısı:", err);
        nodes.forEach(node => {
          node.classList.remove("opacity-0");
          node.classList.add("opacity-100");
          attachInteractiveDiagramControls(node);
        });
      });
    } catch (e) {
      console.warn("Mermaid başlatılamadı:", e);
      document.querySelectorAll(".mermaid").forEach(node => {
        node.classList.remove("opacity-0");
        node.classList.add("opacity-100");
      });
    }
  }

  // ─── 2.5 ETKİLEŞİMLİ ZOOM, PAN & TAM EKRAN KONTROLCÜSÜ ────────────────────
  function attachInteractiveDiagramControls(mermaidNode) {
    const svg = mermaidNode.querySelector("svg");
    if (!svg) return;

    const isDark = htmlEl.classList.contains("dark");
    const card = mermaidNode.closest(".rounded-2xl") || mermaidNode.parentElement;
    if (!card) return;
    card.classList.add("relative");

    card.querySelector(".mermaid-toolbar")?.remove();
    card.querySelector(".mermaid-hint")?.remove();

    mermaidNode.style.cursor = "grab";
    mermaidNode.style.userSelect = "none";
    mermaidNode.style.overflow = "hidden";
    mermaidNode.style.position = "relative";
    mermaidNode.style.height = "520px";
    mermaidNode.style.minHeight = "480px";
    mermaidNode.style.display = "flex";
    mermaidNode.style.alignItems = "center";
    mermaidNode.style.justifyContent = "center";
    mermaidNode.style.width = "100%";
    mermaidNode.style.background = isDark
      ? "radial-gradient(circle, rgba(51, 65, 85, 0.4) 1px, transparent 1px) 0 0 / 20px 20px, #0f172a"
      : "radial-gradient(circle, rgba(203, 213, 225, 0.6) 1px, transparent 1px) 0 0 / 20px 20px, #f8fafc";
    mermaidNode.style.borderRadius = "1rem";

    svg.style.maxWidth = "92%";
    svg.style.maxHeight = "90%";
    svg.style.width = "auto";
    svg.style.height = "auto";
    svg.style.display = "block";
    svg.style.margin = "auto";
    svg.style.transformOrigin = "center center";
    svg.style.transition = "transform 0.1s ease-out";

    const toolbar = document.createElement("div");
    toolbar.className = "mermaid-toolbar absolute top-3 right-3 z-20 flex items-center gap-1 p-1 rounded-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg";
    toolbar.innerHTML = `
      <button type="button" class="btn-zoom-in p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-cyan-600 transition" title="Yakınlaştır (+)">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
      </button>
      <span class="zoom-level text-[11px] font-mono font-bold px-1.5 text-slate-700 dark:text-slate-200 min-w-[42px] text-center select-none">100%</span>
      <button type="button" class="btn-zoom-out p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-cyan-600 transition" title="Uzaklaştır (-)">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
      </button>
      <div class="w-px h-4 bg-slate-200 dark:bg-slate-700"></div>
      <button type="button" class="btn-zoom-reset p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-cyan-600 transition" title="Sıfırla (100%)">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
      </button>
      <button type="button" class="btn-zoom-fs p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-cyan-600 transition" title="Tam Ekran İncele">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
      </button>
    `;
    card.appendChild(toolbar);

    const hint = document.createElement("div");
    hint.className = "mermaid-hint absolute bottom-3 left-3 z-10 pointer-events-none flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-white/85 dark:bg-slate-900/85 px-2.5 py-1 rounded-lg border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs shadow-xs";
    hint.innerHTML = `
      <svg class="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/></svg>
      <span>Fareyle tut & sürükle &bull; Tekerlekle yakınlaştır</span>
    `;
    card.appendChild(hint);

    let scale = 1.0;
    let translateX = 0;
    let translateY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    const zoomLabel = toolbar.querySelector(".zoom-level");
    const container = mermaidNode;

    function update() {
      svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      if (zoomLabel) zoomLabel.textContent = `${Math.round(scale * 100)}%`;
    }

    toolbar.querySelector(".btn-zoom-in")?.addEventListener("click", () => {
      scale = Math.min(scale + 0.25, 4.0);
      update();
    });

    toolbar.querySelector(".btn-zoom-out")?.addEventListener("click", () => {
      scale = Math.max(scale - 0.25, 0.4);
      update();
    });

    toolbar.querySelector(".btn-zoom-reset")?.addEventListener("click", () => {
      scale = 1.0;
      translateX = 0;
      translateY = 0;
      update();
    });

    toolbar.querySelector(".btn-zoom-fs")?.addEventListener("click", () => {
      openDiagramModal(svg);
    });

    container.addEventListener("mousedown", (e) => {
      if (e.target.closest(".mermaid-toolbar")) return;
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      container.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      svg.style.transition = "none";
      update();
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        container.style.cursor = "grab";
        svg.style.transition = "transform 0.1s ease-out";
      }
    });

    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.15 : -0.15;
      scale = Math.max(0.4, Math.min(4.0, scale + delta));
      update();
    }, { passive: false });
  }

  function openDiagramModal(sourceSvg) {
    let modal = document.getElementById("radpysDiagramModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "radpysDiagramModal";
      modal.className = "fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col p-4 sm:p-6 transition-opacity animate-in fade-in duration-150";
      modal.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-slate-700 text-white">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span class="font-bold text-sm sm:text-base">Tam Ekran Süreç & Karar Şeması</span>
          </div>
          <div class="flex items-center gap-2">
            <button id="modalZoomIn" class="px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition">Büyüt (+)</button>
            <button id="modalZoomOut" class="px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition">Küçült (-)</button>
            <button id="modalZoomReset" class="px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition">Sıfırla (100%)</button>
            <button id="modalCloseBtn" class="ml-2 px-3 py-1.5 text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition">✕ Kapat (ESC)</button>
          </div>
        </div>
        <div id="modalDiagramViewport" class="flex-1 overflow-hidden relative flex items-center justify-center cursor-grab select-none p-4">
          <div id="modalSvgContainer" class="transition-transform duration-100 flex items-center justify-center w-full max-w-5xl"></div>
        </div>
      `;
      document.body.appendChild(modal);

      const close = () => modal.classList.add("hidden");
      modal.querySelector("#modalCloseBtn")?.addEventListener("click", close);
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) close();
      });
    }

    modal.classList.remove("hidden");
    const container = modal.querySelector("#modalSvgContainer");
    container.innerHTML = sourceSvg.outerHTML;
    const modalSvg = container.querySelector("svg");
    if (modalSvg) {
      modalSvg.style.maxWidth = "100%";
      modalSvg.style.height = "auto";
      modalSvg.style.width = "100%";
    }

    let mScale = 1.35;
    let mX = 0;
    let mY = 0;
    let mDragging = false;
    let mStartX = 0;
    let mStartY = 0;

    function updateModal() {
      container.style.transform = `translate(${mX}px, ${mY}px) scale(${mScale})`;
    }
    updateModal();

    modal.querySelector("#modalZoomIn").onclick = () => { mScale = Math.min(mScale + 0.25, 4.0); updateModal(); };
    modal.querySelector("#modalZoomOut").onclick = () => { mScale = Math.max(mScale - 0.25, 0.4); updateModal(); };
    modal.querySelector("#modalZoomReset").onclick = () => { mScale = 1.0; mX = 0; mY = 0; updateModal(); };

    const vp = modal.querySelector("#modalDiagramViewport");
    vp.onmousedown = (e) => {
      mDragging = true;
      mStartX = e.clientX - mX;
      mStartY = e.clientY - mY;
      vp.style.cursor = "grabbing";
    };
    window.addEventListener("mousemove", (e) => {
      if (!mDragging) return;
      mX = e.clientX - mStartX;
      mY = e.clientY - mStartY;
      updateModal();
    });
    window.addEventListener("mouseup", () => {
      if (mDragging) {
        mDragging = false;
        vp.style.cursor = "grab";
      }
    });
  }

  // ─── 2.8 EKRAN GÖRÜNTÜLERİ TAM EKRAN BÜYÜTME (LIGHTBOX) ──────────────────
  function setupImageLightbox() {
    const images = document.querySelectorAll("main figure img, main section img");
    if (images.length === 0) return;

    images.forEach(img => {
      img.classList.add("cursor-zoom-in", "transition-transform", "duration-200", "hover:scale-[1.01]");
      img.title = "Tam ekran incelemek için tıklayın";
      img.addEventListener("click", () => {
        openImageLightbox(img.src, img.alt || "RADPYS V4 Ekran Görüntüsü");
      });
    });
  }

  function openImageLightbox(src, caption) {
    let lb = document.getElementById("radpysImageLightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.id = "radpysImageLightbox";
      lb.className = "fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col p-4 sm:p-6";
      lb.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-slate-800 text-white">
          <div class="flex items-center gap-2 truncate pr-4">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0"></span>
            <span id="lbCaption" class="font-bold text-xs sm:text-sm truncate"></span>
          </div>
          <button id="lbCloseBtn" class="px-3 py-1.5 text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition shrink-0">✕ Kapat (ESC)</button>
        </div>
        <div id="lbBackdrop" class="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6">
          <img id="lbImage" src="" alt="" class="max-w-full max-h-[85vh] object-contain rounded-xl border border-slate-700 shadow-2xl" />
        </div>
      `;
      document.body.appendChild(lb);
      const close = () => lb.classList.add("hidden");
      lb.querySelector("#lbCloseBtn").addEventListener("click", close);
      lb.querySelector("#lbBackdrop").addEventListener("click", (e) => {
        if (e.target.id === "lbBackdrop") close();
      });
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !lb.classList.contains("hidden")) close();
      });
    }
    lb.querySelector("#lbImage").src = src;
    lb.querySelector("#lbImage").alt = caption;
    lb.querySelector("#lbCaption").textContent = caption;
    lb.classList.remove("hidden");
  }

  // ─── 3. ANA SAYFA CANLI MODÜL FİLTRELEME & ÇEVRİMDIŞI ARAMA MODALI (Ctrl+K) ─
  let openSearchModalFn = null;

  function setupIndexModuleFilter() {
    const heroInput = document.getElementById("heroFilterInput");
    const topInput = document.getElementById("moduleFilterInput");
    const cardsContainer = document.getElementById("moduleCardsContainer");
    const noResultsMsg = document.getElementById("noResultsMsg");

    if (!cardsContainer) return;

    const sections = Array.from(cardsContainer.querySelectorAll(".module-section"));

    function filterCards(rawQuery, sourceInput) {
      if (sourceInput === heroInput && topInput) topInput.value = rawQuery;
      if (sourceInput === topInput && heroInput) heroInput.value = rawQuery;

      const q = normalizeTr(rawQuery.trim());
      let totalVisibleCards = 0;

      sections.forEach(sec => {
        const cards = Array.from(sec.querySelectorAll(".module-card"));
        let visibleInSec = 0;

        cards.forEach(card => {
          const text = normalizeTr((card.getAttribute("data-search") || "") + " " + card.textContent);
          if (!q || text.includes(q)) {
            card.classList.remove("hidden");
            visibleInSec++;
            totalVisibleCards++;
          } else {
            card.classList.add("hidden");
          }
        });

        if (visibleInSec > 0) {
          sec.classList.remove("hidden");
        } else {
          sec.classList.add("hidden");
        }
      });

      if (noResultsMsg) {
        if (totalVisibleCards === 0) {
          noResultsMsg.classList.remove("hidden");
        } else {
          noResultsMsg.classList.add("hidden");
        }
      }
    }

    [heroInput, topInput].forEach(inp => {
      if (!inp) return;
      inp.addEventListener("input", (e) => filterCards(e.target.value, inp));
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && inp.value.trim().length >= 2 && openSearchModalFn) {
          e.preventDefault();
          openSearchModalFn(inp.value.trim());
        }
      });
    });
  }

  function setupSearchModal() {
    if (!document.getElementById("radpysSearchModal")) {
      const modalHtml = `
      <div id="radpysSearchModal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4 transition-opacity">
        <style>
          #radpysSearchModal mark { background: rgba(34, 211, 238, 0.14); color: #67e8f9; padding: 0 3px; border-radius: 4px; font-weight: 600; }
          #radpysSearchModal p mark { background: rgba(34, 211, 238, 0.09); color: #a5f3fc; padding: 0 2px; font-weight: 500; }
        </style>
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150">
          <!-- Arama Başlığı & Input -->
          <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input 
              id="radpysSearchInput" 
              type="text" 
              placeholder="Dokümanda ara... (Örn: şifre, dozimetre, 130 saat, NDK lisansı, RKE)" 
              class="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-base focus:outline-hidden"
              autocomplete="off"
            >
            <button id="closeSearchModalBtn" class="text-xs px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700">ESC</button>
          </div>
          <!-- Sonuç Listesi -->
          <div id="radpysSearchResults" class="overflow-y-auto p-3 space-y-1 divide-y divide-slate-100 dark:divide-slate-800/60 custom-scrollbar">
            <div class="py-8 text-center text-sm text-slate-400">Aramak istediğiniz terimi yazmaya başlayın...</div>
          </div>
          <!-- Modal Alt Bilgi -->
          <div class="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
            <span>23 Modül Tam Metin İndeksi</span>
            <span><kbd class="font-mono bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">ESC</kbd> ile kapat</span>
          </div>
        </div>
      </div>`;
      document.body.insertAdjacentHTML("beforeend", modalHtml);
    }

    const modal = document.getElementById("radpysSearchModal");
    const input = document.getElementById("radpysSearchInput");
    const resultsContainer = document.getElementById("radpysSearchResults");
    const closeBtn = document.getElementById("closeSearchModalBtn");

    function openSearch(initialQuery) {
      if (!modal) return;
      modal.classList.remove("hidden");
      const q = typeof initialQuery === "string" ? initialQuery : "";
      input.value = q;
      renderSearchResults(q);
      setTimeout(() => input.focus(), 50);
    }

    openSearchModalFn = openSearch;

    function closeSearch() {
      if (!modal) return;
      modal.classList.add("hidden");
    }

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (modal.classList.contains("hidden")) {
          openSearch("");
        } else {
          closeSearch();
        }
      } else if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeSearch();
      }
    });

    closeBtn?.addEventListener("click", closeSearch);
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) closeSearch();
    });

    document.querySelectorAll(".quick-search-trigger, [placeholder*='Dokümanda ara']").forEach(el => {
      if (el.id === "radpysSearchInput") return;
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openSearch("");
      });
      el.addEventListener("focus", (e) => {
        e.preventDefault();
        openSearch("");
      });
    });

    input?.addEventListener("input", (e) => {
      renderSearchResults(e.target.value.trim());
    });

    function renderSearchResults(query) {
      if (!resultsContainer) return;
      const index = window.RADPYS_SEARCH_INDEX || [];
      const tokens = normalizeTr(query).split(/\s+/).filter(Boolean);

      if (!query || query.length < 2 || tokens.length === 0) {
        resultsContainer.innerHTML = `
          <div class="py-8 text-center text-sm text-slate-400">
            Aramak istediğiniz terimi yazın (en az 2 karakter)...
          </div>`;
        return;
      }

      const foldCode = (s) => s.replace(/([a-zğıüşöç])\.([a-zğıüşöç0-9])/gi, "$1$2").replace(/-/g, "");
      const hasTok = (rawNorm, foldedNorm, tok, tokFold) =>
        rawNorm.includes(tok) || (tokFold !== "" && foldedNorm.includes(tokFold));

      const scored = [];
      for (const item of index) {
        const mod = item.module || item.category || "Modül Rehberi";
        const baseDesc = item.desc || item.summary || "";
        const titleNorm = normalizeTr(item.title || "");
        const modNorm = normalizeTr(mod);
        const descNorm = normalizeTr(baseDesc);
        const headNorm = normalizeTr((item.headings || []).join(" "));
        const contentNorm = normalizeTr(item.content || "");

        const titleFold = foldCode(titleNorm);
        const modFold = foldCode(modNorm);
        const descFold = foldCode(descNorm);
        const headFold = foldCode(headNorm);
        const contentFold = foldCode(contentNorm);

        let allMatch = true;
        let score = item.id ? 0 : 2;
        for (const tok of tokens) {
          const tokFold = foldCode(tok);
          const inTitle = hasTok(titleNorm, titleFold, tok, tokFold);
          const inModHead = hasTok(modNorm, modFold, tok, tokFold) || hasTok(headNorm, headFold, tok, tokFold);
          const inDesc = hasTok(descNorm, descFold, tok, tokFold);
          const inContent = hasTok(contentNorm, contentFold, tok, tokFold);

          if (!inTitle && !inModHead && !inDesc && !inContent) {
            allMatch = false;
            break;
          }
          if (inTitle) score += 30;
          if (inModHead) score += 12;
          if (inDesc) score += 8;
          if (inContent) score += 3;
        }
        if (allMatch) {
          scored.push({ item, mod, baseDesc, titleNorm, titleFold, descNorm, descFold, score });
        }
      }

      scored.sort((a, b) => b.score - a.score);
      const matches = scored.slice(0, 25);

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div class="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
            "<strong>${escapeHtml(query)}</strong>" terimiyle eşleşen sonuç bulunamadı.
          </div>`;
        return;
      }

      resultsContainer.innerHTML = matches.map(({ item, mod, baseDesc, titleNorm, titleFold, descNorm, descFold }) => {
        const metaCovered = tokens.every(tok => {
          const tokFold = foldCode(tok);
          return hasTok(titleNorm, titleFold, tok, tokFold) || hasTok(descNorm, descFold, tok, tokFold);
        });
        const snippet = (!metaCovered && item.content)
          ? buildContextSnippet(item.content, query) || baseDesc
          : baseDesc;

        return `
        <a href="${escapeHtml(item.url)}" class="block p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group">
          <div class="flex items-center justify-between text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
            <span>${escapeHtml(mod)}</span>
            ${item.id ? `<span class="font-mono text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300">#${escapeHtml(item.id)}</span>` : ""}
          </div>
          <div class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            ${highlightText(item.title, query)}
          </div>
          ${snippet ? `<p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${highlightText(snippet, query)}</p>` : ""}
        </a>`;
      }).join("");
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function buildTrQueryRegex(query) {
    const trMap = {
      i: "[iİıI]", ı: "[iİıI]", İ: "[iİıI]", I: "[iİıI]",
      g: "[gğGĞ]", ğ: "[gğGĞ]", G: "[gğGĞ]", Ğ: "[gğGĞ]",
      u: "[uüUÜ]", ü: "[uüUÜ]", U: "[uüUÜ]", Ü: "[uüUÜ]",
      s: "[sşSŞ]", ş: "[sşSŞ]", S: "[sşSŞ]", Ş: "[sşSŞ]",
      o: "[oöOÖ]", ö: "[oöOÖ]", O: "[oöOÖ]", Ö: "[oöOÖ]",
      c: "[cçCÇ]", ç: "[cçCÇ]", C: "[cçCÇ]", Ç: "[cçCÇ]"
    };
    const tokens = Array.from(new Set(String(query || "").trim().split(/\s+/).filter(Boolean)))
      .sort((a, b) => b.length - a.length);
    if (tokens.length === 0) return null;
    const patterns = tokens.map(tok => {
      const isCodeToken = /^[a-z0-9ığüşöç.-]+$/i.test(tok) && /[a-zığüşöç]/i.test(tok) && /\d/.test(tok) && tok.length >= 4;
      const chars = Array.from(isCodeToken ? tok.replace(/[.-]/g, "") : tok);
      const mapped = chars.map(ch => trMap[ch] || ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      return mapped.join(isCodeToken ? "[.\\-]?" : "");
    });
    try {
      return new RegExp(`(${patterns.join("|")})`, "gi");
    } catch (e) {
      return null;
    }
  }

  function buildContextSnippet(content, query) {
    const text = String(content || "");
    if (!text) return "";
    const regex = buildTrQueryRegex(query);
    if (!regex) return text.slice(0, 160);
    const hit = regex.exec(text);
    const hitIdx = hit ? hit.index : 0;
    const start = Math.max(0, hitIdx - 50);
    const end = Math.min(text.length, start + 165);
    const prefix = start > 0 ? "…" : "";
    const suffix = end < text.length ? "…" : "";
    return `${prefix}${text.slice(start, end).trim()}${suffix}`;
  }

  function highlightText(text, query) {
    if (!text) return "";
    const cleanText = String(text).replace(/[\u0001\u0002]/g, "");
    const regex = buildTrQueryRegex(query);
    if (!regex) return escapeHtml(cleanText);
    const marked = cleanText.replace(regex, "\u0001$1\u0002");
    return escapeHtml(marked)
      .replace(/\u0001/g, '<mark class="bg-cyan-500/10 text-cyan-300 px-1 rounded">')
      .replace(/\u0002/g, "</mark>");
  }

  // ─── 4. MOBİL MENÜ ÇEKMECESİ ───────────────────────────────────────────────
  function setupMobileMenu() {
    const btn = document.getElementById("mobileMenuBtn");
    const sidebar = document.getElementById("sidebarNav");
    if (btn && sidebar) {
      btn.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
      });
    }
  }

  // ─── 5. BAŞLATMA (Bootstrap) ──────────────────────────────────────────────
  if (document.getElementById("sidebarNav")) {
    setupSidebarNavigation();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupHeaderAndVersion();
    setupSidebarNavigation();
    setupOnPageToc();
    setupMobileMenu();
    setupSearchModal();
    setupIndexModuleFilter();
    renderMermaidDiagrams();
    setupImageLightbox();
  });
})();
