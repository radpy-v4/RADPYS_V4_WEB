/**
 * RADPYS V4 - Profesyonel Çevrimdışı & Web Yardım Portalı İstemci Motoru
 * ======================================================================
 * - %100 Çevrimdışı Uyumluluk (file:/// ve http://)
 * - Anlık Arama Modalı (Ctrl+K)
 * - Açık / Koyu Tema Desteği & Kalıcı Bellek
 * - Dinamik Mermaid Şema Çizimi
 * - Mobil Yan Menü (Sidebar Drawer)
 */

(function () {
  "use strict";

  // ─── 1. KALICI KOYU KLİNİK TEMA (Permanent Clinical Dark Mode) ───────────
  const htmlEl = document.documentElement;
  htmlEl.classList.add("dark");
  try {
    localStorage.setItem("radpys_help_theme", "dark");
  } catch (e) {}

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
        // Fallback: hata olsa bile gizli kalmasın
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

    // Eski toolbar & hint varsa kaldır
    card.querySelector(".mermaid-toolbar")?.remove();
    card.querySelector(".mermaid-hint")?.remove();

    // Standart Tuval Görünümü (520px CAD / Dot-grid Klinik Viewport)
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

    // SVG İlk Yerleşim
    svg.style.maxWidth = "92%";
    svg.style.maxHeight = "90%";
    svg.style.width = "auto";
    svg.style.height = "auto";
    svg.style.display = "block";
    svg.style.margin = "auto";
    svg.style.transformOrigin = "center center";
    svg.style.transition = "transform 0.1s ease-out";

    // Sağ Üst Standart Araç Çubuğu
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

    // Sol Alt İpucu Rozeti
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

  // ─── 3. ÇEVRİMDIŞI ARAMA MODALI (Ctrl+K) ──────────────────────────────────
  function setupSearchModal() {
    // Arama modal HTML bileşenini dinamik ekle (sayfada yoksa)
    if (!document.getElementById("radpysSearchModal")) {
      const modalHtml = `
      <div id="radpysSearchModal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4 transition-opacity">
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

    function openSearch() {
      if (!modal) return;
      modal.classList.remove("hidden");
      input.value = "";
      renderSearchResults("");
      setTimeout(() => input.focus(), 50);
    }

    function closeSearch() {
      if (!modal) return;
      modal.classList.add("hidden");
    }

    // Tetikleyiciler
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (modal.classList.contains("hidden")) {
          openSearch();
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

    // Sayfa üzerindeki mevcut arama kutularına tıklandığında modalı aç
    document.querySelectorAll(".quick-search-trigger, [placeholder*='Dokümanda ara']").forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openSearch();
      });
      el.addEventListener("focus", (e) => {
        e.preventDefault();
        openSearch();
      });
    });

    input?.addEventListener("input", (e) => {
      renderSearchResults(e.target.value.trim());
    });

    function renderSearchResults(query) {
      if (!resultsContainer) return;
      const index = window.RADPYS_SEARCH_INDEX || [];

      if (!query || query.length < 2) {
        resultsContainer.innerHTML = `
          <div class="py-8 text-center text-sm text-slate-400">
            Aramak istediğiniz terimi yazın (en az 2 karakter)...
          </div>`;
        return;
      }

      const q = query.toLowerCase();
      const matches = [];

      for (const item of index) {
        const titleMatch = item.title && item.title.toLowerCase().includes(q);
        const descMatch = item.desc && item.desc.toLowerCase().includes(q);
        const moduleMatch = item.module && item.module.toLowerCase().includes(q);

        if (titleMatch || descMatch || moduleMatch) {
          matches.push(item);
          if (matches.length >= 20) break; // İlk 20 sonuç
        }
      }

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div class="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
            "<strong>${escapeHtml(query)}</strong>" terimiyle eşleşen sonuç bulunamadı.
          </div>`;
        return;
      }

      resultsContainer.innerHTML = matches.map(item => `
        <a href="${item.url}" class="block p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group">
          <div class="flex items-center justify-between text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
            <span>${escapeHtml(item.module || "Modül Rehberi")}</span>
            ${item.id ? `<span class="font-mono text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300">#${item.id}</span>` : ""}
          </div>
          <div class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            ${highlightText(item.title, query)}
          </div>
          ${item.desc ? `<p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${highlightText(item.desc, query)}</p>` : ""}
        </a>
      `).join("");
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function highlightText(text, query) {
    if (!text) return "";
    const safeText = escapeHtml(text);
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedQuery})`, "gi");
    return safeText.replace(regex, '<mark class="bg-cyan-200 dark:bg-cyan-900/80 text-cyan-950 dark:text-cyan-200 px-1 rounded-sm">$1</mark>');
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
  document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupSearchModal();
    renderMermaidDiagrams();
  });
})();
