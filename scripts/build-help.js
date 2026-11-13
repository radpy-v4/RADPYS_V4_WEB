#!/usr/bin/env node
/**
 * RADPYS V4 — Çevrimdışı & Web Yardım Portalı Derleyicisi (build-help.js)
 *
 * Kaynaklar:
 *   help/src/_catalog.json  -> Bölüm hiyerarşisi, modül kartları, gezinme sırası
 *   help/src/<slug>.md      -> Sade Markdown + yapılandırılmış bloklar (---json frontmatter)
 *
 * Çıktılar:
 *   help/index.html         -> 23 modüllük yardım portalı ana sayfası
 *   help/<slug>.html        -> 28 modül ve alt-kılavuz HTML sayfası (%100 file:/// uyumlu)
 *
 * Kullanım:
 *   node scripts/build-help.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HELP_DIR = path.join(ROOT, 'help');
const SRC_DIR = path.join(HELP_DIR, 'src');
const CATALOG_PATH = path.join(SRC_DIR, '_catalog.json');
const VERSION_JSON_PATH = path.join(ROOT, 'version.json');

const SVG_ARROW_RIGHT = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>';
const SVG_CHEVRON_DOWN = '<svg class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>';
const SVG_INFO = '<svg class="w-4 h-4 text-cyan-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
const SVG_LIGHTNING = '<svg class="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>';
const SVG_WARN = '<svg class="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>';
const SVG_CLOCK = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';

const TONE_BADGE = {
  cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700/50',
  emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  amber: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
  rose: 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60',
  red: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border border-red-200 dark:border-red-800',
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60',
  indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800',
  slate: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
};

const TONE_TEXT = {
  cyan: 'text-cyan-600 dark:text-cyan-400',
  emerald: 'text-emerald-600 dark:text-emerald-400',
  amber: 'text-amber-600 dark:text-amber-400',
  rose: 'text-rose-600 dark:text-rose-400',
  red: 'text-red-600 dark:text-red-400',
  blue: 'text-blue-600 dark:text-blue-400',
  purple: 'text-purple-600 dark:text-purple-400',
  indigo: 'text-indigo-600 dark:text-indigo-400',
  slate: 'text-slate-700 dark:text-slate-200'
};

const TONE_LABEL = {
  cyan: 'text-cyan-600 dark:text-cyan-400',
  emerald: 'text-emerald-600 dark:text-emerald-400',
  amber: 'text-amber-500',
  rose: 'text-rose-500',
  red: 'text-red-500',
  blue: 'text-blue-600 dark:text-blue-400',
  purple: 'text-purple-500',
  indigo: 'text-indigo-500',
  slate: 'text-slate-400'
};

const TONE_CARD_BORDER = {
  emerald: 'border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20',
  amber: 'border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20',
  red: 'border-red-200 dark:border-red-800/60 bg-red-50/40 dark:bg-red-950/20',
  rose: 'border-rose-200 dark:border-rose-900/50 bg-rose-50/40 dark:bg-rose-950/20',
  cyan: 'border-cyan-200 dark:border-cyan-800/60 bg-cyan-50/40 dark:bg-cyan-950/20',
  blue: 'border-blue-200 dark:border-blue-800/60 bg-blue-50/40 dark:bg-blue-950/20',
  purple: 'border-purple-200 dark:border-purple-800/60 bg-purple-50/40 dark:bg-purple-950/20',
  default: 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
};

function escHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function stripTags(html) {
  return String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugifyTr(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'bolum';
}

function writeIfChanged(filePath, newContent, label) {
  const oldContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  if (oldContent.replace(/\r\n/g, '\n') === newContent.replace(/\r\n/g, '\n')) {
    return false;
  }
  fs.writeFileSync(filePath, newContent, 'utf8');
  if (label) console.log(`[build-help] ↻ Güncellendi: ${label}`);
  return true;
}

/** Inline Markdown formatting while preserving explicit inline HTML like <strong>, <sub>, <code>, <span> */
function renderInline(text) {
  if (!text) return '';
  const codeTokens = [];
  let s = String(text).replace(/`([^`]+)`/g, (_, code) => {
    const idx = codeTokens.length;
    codeTokens.push(`<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 text-xs font-mono">${escHtml(code)}</code>`);
    return `\u0000CODE${idx}\u0000`;
  });

  // Markdown links [label](url)
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    return `<a href="${escHtml(url)}" class="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">${label}</a>`;
  });

  // Bold + italic
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[\s(>])\*([^*\n]+)\*(?=[\s.,;:)!?<]|$)/g, '$1<em>$2</em>');

  return s.replace(/\u0000CODE(\d+)\u0000/g, (_, idx) => codeTokens[Number(idx)]);
}

function renderFigureFromMd(altSpec, src, caption) {
  const parts = altSpec.split('|').map(p => p.trim());
  const alt = parts[0] || 'RADPYS Ekran Görüntüsü';
  const loc = parts[1] || '';
  const badge = parts[2] || '';
  const tone = (parts[3] && TONE_BADGE[parts[3].trim()]) ? parts[3].trim() : 'cyan';

  const headerHtml = (loc || badge) ? `
    <div class="p-4 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 text-sm">
      <span class="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
        ${loc ? `<span>Ekran Konumu:</span> <strong class="text-slate-900 dark:text-white font-bold">${renderInline(loc)}</strong>` : escHtml(alt)}
      </span>
      ${badge ? `<span class="text-xs font-semibold px-3 py-1 rounded-full ${TONE_BADGE[tone]}">${escHtml(badge)}</span>` : ''}
    </div>` : '';

  const capHtml = caption ? `
    <figcaption class="p-4 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
      ${SVG_INFO}
      <span>${renderInline(caption)}</span>
    </figcaption>` : '';

  return `<figure class="my-6 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900">${headerHtml}
  <div class="p-6 flex justify-center bg-slate-950/20 dark:bg-black/30">
    <img src="${escHtml(src)}" alt="${escHtml(alt)}" class="rounded-2xl border border-slate-300 dark:border-slate-700 max-h-[500px] object-contain shadow-lg">
  </div>${capHtml}
</figure>`;
}

const STANDALONE_IMG_RE = /^!\[((?:[^\]\n]|\](?!\())+)\]\(([^\s)]+)(?:\s+"([^"]*)")?\)$/;

/** Expand embedded Markdown (mermaid fences, standalone images, pipe tables) inside raw HTML blocks */
function expandMarkdownEmbedsInHtml(html) {
  const lines = String(html || '').replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (/^```mermaid\s*$/i.test(trimmed)) {
      const code = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        code.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;
      out.push(`<div class="mermaid text-sm">\n${code.join('\n').trim()}\n</div>`);
      continue;
    }

    const imgM = trimmed.match(STANDALONE_IMG_RE);
    if (imgM) {
      out.push(renderFigureFromMd(imgM[1], imgM[2], imgM[3] || ''));
      i++;
      continue;
    }

    if (trimmed.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(lines[i + 1])) {
      const headerLine = lines[i];
      i += 2;
      const bodyLines = [];
      while (i < lines.length && lines[i].trim() && lines[i].includes('|')) {
        bodyLines.push(lines[i]);
        i++;
      }
      out.push(renderPipeTable(headerLine, bodyLines));
      continue;
    }

    out.push(lines[i]);
    i++;
  }

  return out.join('\n');
}

function parsePipeRow(line) {
  let trimmed = line.trim();
  if (trimmed.startsWith('|')) trimmed = trimmed.slice(1);
  if (trimmed.endsWith('|') && !trimmed.endsWith('\\|')) trimmed = trimmed.slice(0, -1);
  const cells = [];
  let cur = '';
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === '\\' && trimmed[i + 1] === '|') {
      cur += '|';
      i++;
    } else if (trimmed[i] === '|') {
      cells.push(cur.trim());
      cur = '';
    } else {
      cur += trimmed[i];
    }
  }
  cells.push(cur.trim());
  return cells;
}

function renderPipeTable(headerLine, bodyLines) {
  const headers = parsePipeRow(headerLine);
  const rows = bodyLines.map(parsePipeRow);

  const thead = `<thead>
      <tr class="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 uppercase text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400">
        ${headers.map(h => `<th class="py-3.5 px-4">${renderInline(h)}</th>`).join('\n        ')}
      </tr>
    </thead>`;

  const tbody = `<tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium text-slate-600 dark:text-slate-300">
      ${rows.map(cells => `<tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
        ${cells.map((c, idx) => `<td class="py-3.5 px-4${idx === 0 ? ' font-semibold text-slate-900 dark:text-white' : ''}">${renderInline(c)}</td>`).join('\n        ')}
      </tr>`).join('\n      ')}
    </tbody>`;

  return `<div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 custom-scrollbar shadow-sm my-4">
  <table class="w-full text-left border-collapse text-xs sm:text-sm">
    ${thead}
    ${tbody}
  </table>
</div>`;
}

function renderCallout(type, title, bodyLines) {
  const styles = {
    INFO: 'bg-cyan-50/80 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/60 text-cyan-950 dark:text-cyan-200',
    WARNING: 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-200',
    DANGER: 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200',
    SUCCESS: 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
  };
  const iconBox = {
    INFO: 'bg-cyan-600 text-white',
    WARNING: 'bg-amber-600 text-white',
    DANGER: 'bg-rose-600 text-white',
    SUCCESS: 'bg-emerald-600 text-white'
  };
  const t = styles[type] ? type : 'INFO';
  const bodyHtml = bodyLines
    .map(l => l.trim())
    .filter(Boolean)
    .map(l => `<p>${renderInline(l)}</p>`)
    .join('\n    ');

  return `<div class="p-5 rounded-2xl border ${styles[t]} flex items-start gap-3.5 my-4">
  <div class="p-2 rounded-xl ${iconBox[t]} shrink-0 mt-0.5">${t === 'WARNING' || t === 'DANGER' ? SVG_WARN.replace('text-amber-600 ', '') : SVG_INFO.replace('text-cyan-600 ', '')}</div>
  <div class="space-y-1 text-sm leading-relaxed">
    ${title ? `<strong class="font-bold block">${renderInline(title)}</strong>` : ''}
    ${bodyHtml}
  </div>
</div>`;
}

function renderSubguides(catalog) {
  const subs = catalog.guides.filter(g => g.parentSlug === '07_nobet_ayarlari_ve_kisit_hiyerarsisi');
  const cards = subs.map((s, i) => `
    <a href="${escHtml(s.slug)}.html" class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-cyan-500 transition group${i === subs.length - 1 ? ' sm:col-span-2 lg:col-span-2' : ''}">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">${escHtml(s.num)}</span>
        <span class="text-xs text-cyan-600 dark:text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">İncele →</span>
      </div>
      <h3 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">${escHtml(s.hubTitle || s.navTitle)}</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${escHtml(s.hubDesc || '')}</p>
    </a>`).join('\n');

  return `<div class="space-y-4">
  <div>
    <h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
      <span>Modül 07 Özel Ayar ve Yönetim Kılavuzları</span>
    </h2>
    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
      Onlarca karmaşık parametreyi kolayca yönetebilmeniz için her ayar sekmesi bağımsız 5N1K kılavuzuna ayrılmıştır:
    </p>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">${cards}
  </div>
</div>`;
}

function renderRecipeContainer(argsStr, lines) {
  const [titleRaw, badgeRaw] = argsStr.split('|').map(x => x.trim());
  const title = titleRaw || 'Kısa Reçete (20 Saniye Kuralı)';
  const badge = badgeRaw || '20 SANİYELİK AKIŞ';

  const metrics = [];
  const cards = [];
  const prose = [];
  let curCard = null;

  for (const raw of lines) {
    const t = raw.trim();
    const metricMatch = t.match(/^-\s*\[metric\]\s*(.+)$/i);
    if (metricMatch) {
      const [label, val, tone] = metricMatch[1].split('|').map(x => x.trim());
      metrics.push({ label, val, tone: (tone && TONE_TEXT[tone]) ? tone : 'cyan' });
      continue;
    }
    const h3Match = t.match(/^###\s+(.+)$/);
    if (h3Match) {
      const [cTitle, cTone] = h3Match[1].split('|').map(x => x.trim());
      curCard = { title: cTitle, tone: (cTone && TONE_TEXT[cTone]) ? cTone : 'cyan', body: [] };
      cards.push(curCard);
      continue;
    }
    if (curCard) {
      if (t) curCard.body.push(t);
    } else if (t) {
      prose.push(t);
    }
  }

  const proseHtml = prose.length
    ? `<p class="text-sm text-slate-700 dark:text-slate-200 mb-5 leading-relaxed">${prose.map(renderInline).join('<br>\n    ')}</p>`
    : '';

  const cardsHtml = cards.length ? `
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 text-xs sm:text-sm">
    ${cards.map(c => `<div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
      <span class="font-bold ${TONE_TEXT[c.tone]} uppercase tracking-wider text-[11px] block">${renderInline(c.title)}</span>
      <p class="text-slate-700 dark:text-slate-200 font-medium leading-relaxed">${c.body.map(renderInline).join('<br>')}</p>
    </div>`).join('\n    ')}
  </div>` : '';

  const metricsHtml = metrics.length ? `
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-cyan-200/60 dark:border-cyan-800/40">
    ${metrics.map(m => `<div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
      <span class="text-xs text-slate-400 block uppercase font-bold tracking-wider mb-1">${escHtml(m.label)}</span>
      <span class="text-sm sm:text-base font-black ${TONE_TEXT[m.tone]} font-mono">${renderInline(m.val)}</span>
    </div>`).join('\n    ')}
  </div>` : '';

  return `<div class="p-6 sm:p-7 rounded-3xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200/90 dark:border-cyan-800/60 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
    <div class="flex items-center gap-2.5 text-cyan-900 dark:text-cyan-200 font-bold text-sm sm:text-base">
      ${SVG_LIGHTNING}
      <span>${renderInline(title)}</span>
    </div>
    <span class="text-xs font-mono px-2.5 py-1 rounded bg-cyan-200/80 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300 font-bold">${escHtml(badge)}</span>
  </div>
  ${proseHtml}${cardsHtml}${metricsHtml}
</div>`;
}

function renderMythContainer(argsStr, lines) {
  const title = argsStr.trim() || 'Kritik Sahada Yanlış Bilinen Kural (Mit Avcısı)';
  const pairs = [];
  let cur = null;
  let mode = null;

  for (const raw of lines) {
    const t = raw.trim();
    if (/^###\s*Yanlış/i.test(t)) {
      if (!cur || cur.real.length > 0) {
        cur = { wrongLabel: t.replace(/^###\s*/, ''), wrong: [], realLabel: 'Gerçek Sistem Mantığı:', real: [] };
        pairs.push(cur);
      } else {
        cur.wrongLabel = t.replace(/^###\s*/, '');
      }
      mode = 'wrong';
    } else if (/^###\s*Gerçek/i.test(t)) {
      if (!cur) {
        cur = { wrongLabel: 'Yanlış Algı:', wrong: [], realLabel: t.replace(/^###\s*/, ''), real: [] };
        pairs.push(cur);
      } else {
        cur.realLabel = t.replace(/^###\s*/, '');
      }
      mode = 'real';
    } else if (t && cur && mode) {
      cur[mode].push(t);
    }
  }

  const pairsHtml = pairs.map(p => `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3 text-sm">
    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/50 text-rose-900 dark:text-rose-200 leading-relaxed">
      <span class="font-bold block mb-1">${renderInline(p.wrongLabel)}</span>
      <div>${p.wrong.map(renderInline).join('<br>')}</div>
    </div>
    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200 leading-relaxed">
      <span class="font-bold block mb-1">${renderInline(p.realLabel)}</span>
      <div>${p.real.map(renderInline).join('<br>')}</div>
    </div>
  </div>`).join('\n  ');

  return `<div class="p-6 rounded-3xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 shadow-sm">
  <div class="flex items-center gap-2.5 text-amber-800 dark:text-amber-300 font-bold text-sm sm:text-base mb-3">
    ${SVG_WARN}
    <span>${renderInline(title)}</span>
  </div>
  ${pairsHtml}
</div>`;
}

function renderStepsContainer(lines) {
  const items = [];
  let cur = null;
  for (const raw of lines) {
    const t = raw.trim();
    const h = t.match(/^###\s+(.+)$/);
    if (h) {
      cur = { title: h[1], body: [] };
      items.push(cur);
    } else if (cur) {
      cur.body.push(raw);
    }
  }

  return `<div class="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
  ${items.map(it => `<div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
    <strong class="text-slate-900 dark:text-white text-base block mb-2">${renderInline(it.title)}</strong>
    ${renderMarkdownBlocks(it.body.join('\n').trim())}
  </div>`).join('\n  ')}
</div>`;
}

function renderFaqContainer(lines) {
  const items = [];
  let cur = null;
  for (const raw of lines) {
    const t = raw.trim();
    const h = t.match(/^###\s+(.+)$/);
    if (h) {
      cur = { q: h[1], a: [] };
      items.push(cur);
    } else if (cur) {
      cur.a.push(raw);
    }
  }

  return `<div class="space-y-3" id="faqAccordion">
  ${items.map(it => `<details class="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
    <summary class="font-bold text-slate-900 dark:text-white text-sm sm:text-base cursor-pointer flex items-center justify-between">
      <span>${renderInline(it.q)}</span>
      ${SVG_CHEVRON_DOWN}
    </summary>
    <div class="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3 space-y-2">
      ${renderMarkdownBlocks(it.a.join('\n').trim())}
    </div>
  </details>`).join('\n  ')}
</div>`;
}

function renderCardsContainer(argsStr, lines) {
  const colsMatch = argsStr.match(/cols=(\d)/);
  const cols = colsMatch ? colsMatch[1] : '3';
  const gridClass = cols === '2'
    ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
    : 'grid grid-cols-1 md:grid-cols-3 gap-4';

  const cards = [];
  let cur = null;
  for (const raw of lines) {
    const t = raw.trim();
    const h = t.match(/^###\s+(.+)$/);
    if (h) {
      const [title, badge, tone] = h[1].split('|').map(x => x.trim());
      cur = { title, badge: badge || '', tone: (tone && TONE_CARD_BORDER[tone]) ? tone : 'default', body: [] };
      cards.push(cur);
    } else if (cur) {
      cur.body.push(raw);
    }
  }

  return `<div class="${gridClass} my-4">
  ${cards.map(c => `<div class="p-4 sm:p-5 rounded-2xl border ${TONE_CARD_BORDER[c.tone]} shadow-xs space-y-2">
    <div class="flex items-center justify-between gap-2">
      <strong class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">${renderInline(c.title)}</strong>
      ${c.badge ? `<span class="text-[11px] font-mono px-2 py-0.5 rounded font-semibold ${TONE_BADGE[c.tone] || TONE_BADGE.slate}">${escHtml(c.badge)}</span>` : ''}
    </div>
    <div class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
      ${renderMarkdownBlocks(c.body.join('\n').trim())}
    </div>
  </div>`).join('\n  ')}
</div>`;
}

function renderMarkdownBlocks(src) {
  if (!src || !src.trim()) return '';
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // 1. Container directive :::type ... :::
    const dirStart = trimmed.match(/^:::([a-z]+)(?:\s+(.*))?$/i);
    if (dirStart) {
      const type = dirStart[1].toLowerCase();
      const args = (dirStart[2] || '').trim();
      const inner = [];
      let depth = 1;
      i++;
      while (i < lines.length) {
        const curT = lines[i].trim();
        if (/^:::[a-z]+/i.test(curT)) depth++;
        else if (curT === ':::') {
          depth--;
          if (depth === 0) {
            i++;
            break;
          }
        }
        inner.push(lines[i]);
        i++;
      }
      if (type === 'subguides') out.push('<!-- SUBGUIDES_PLACEHOLDER -->');
      else if (type === 'recipe') out.push(renderRecipeContainer(args, inner));
      else if (type === 'myth' || type === 'myths') out.push(renderMythContainer(args, inner));
      else if (type === 'steps') out.push(renderStepsContainer(inner));
      else if (type === 'faq') out.push(renderFaqContainer(inner));
      else if (type === 'cards') out.push(renderCardsContainer(args, inner));
      else out.push(renderMarkdownBlocks(inner.join('\n')));
      continue;
    }

    // 2. Fenced code / Mermaid block
    const fenceMatch = trimmed.match(/^(`{3,})([a-z0-9_-]*)$/i);
    if (fenceMatch) {
      const fence = fenceMatch[1];
      const lang = (fenceMatch[2] || '').toLowerCase();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith(fence)) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;
      const body = codeLines.join('\n').trim();
      if (lang === 'mermaid') {
        out.push(`<div class="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-x-auto my-4">\n  <div class="mermaid text-sm">\n${body}\n  </div>\n</div>`);
      } else {
        out.push(`<pre class="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs overflow-x-auto my-3"><code>${escHtml(body)}</code></pre>`);
      }
      continue;
    }

    // 3. Standalone Screenshot Image
    const imgMatch = trimmed.match(STANDALONE_IMG_RE);
    if (imgMatch) {
      out.push(renderFigureFromMd(imgMatch[1], imgMatch[2], imgMatch[3] || ''));
      i++;
      continue;
    }

    // 4. Callout / Blockquote (> [!INFO] ...)
    if (trimmed.startsWith('>')) {
      const bqLines = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        bqLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      const first = bqLines[0] || '';
      const alertMatch = first.match(/^\[!(INFO|WARNING|DANGER|SUCCESS)\]\s*(.*)$/i);
      if (alertMatch) {
        out.push(renderCallout(alertMatch[1].toUpperCase(), alertMatch[2], bqLines.slice(1)));
      } else {
        out.push(`<p class="text-sm text-slate-500 dark:text-slate-400 italic mb-4">${bqLines.map(renderInline).join(' ')}</p>`);
      }
      continue;
    }

    // 5. GFM Pipe Table
    if (trimmed.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(lines[i + 1])) {
      const headerLine = lines[i];
      i += 2;
      const bodyLines = [];
      while (i < lines.length && lines[i].trim() && lines[i].includes('|')) {
        bodyLines.push(lines[i]);
        i++;
      }
      out.push(renderPipeTable(headerLine, bodyLines));
      continue;
    }

    // 6. H3 / H4 headings
    const hMatch = trimmed.match(/^(#{3,4})\s+(.+)$/);
    if (hMatch) {
      const tag = hMatch[1].length === 3 ? 'h3' : 'h4';
      const cls = tag === 'h3'
        ? 'text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-5 mb-2'
        : 'text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-4 mb-1.5';
      out.push(`<${tag} class="${cls}">${renderInline(hMatch[2].trim())}</${tag}>`);
      i++;
      continue;
    }

    // 7. Raw HTML block passthrough (balances outer block tag so even multi-paragraph HTML works cleanly)
    if (trimmed.startsWith('<')) {
      const tagMatch = trimmed.match(/^<(div|section|figure|details|table|ul|ol|blockquote|aside|header|footer|nav|article)\b/i);
      const htmlLines = [];
      if (tagMatch) {
        const tagName = tagMatch[1].toLowerCase();
        const openRe = new RegExp(`<${tagName}\\b`, 'gi');
        const closeRe = new RegExp(`</${tagName}\\b`, 'gi');
        let depth = 0;
        while (i < lines.length) {
          const cur = lines[i];
          htmlLines.push(cur);
          depth += (cur.match(openRe) || []).length;
          depth -= (cur.match(closeRe) || []).length;
          i++;
          if (depth <= 0 && cur.trim() !== '') break;
        }
      } else {
        while (i < lines.length && lines[i].trim() !== '') {
          htmlLines.push(lines[i]);
          i++;
        }
      }
      out.push(expandMarkdownEmbedsInHtml(htmlLines.join('\n')));
      continue;
    }

    // 8. Unordered list (supports 2-space indented nested list)
    if (/^-\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && (/^\s*-\s+/.test(lines[i]) || (items.length > 0 && /^\s{2,}\S/.test(lines[i])))) {
        const cur = lines[i];
        if (/^-\s+/.test(cur.trim()) && cur.search(/\S/) === 0) {
          items.push({ text: cur.trim().replace(/^-\s+/, ''), sub: [] });
        } else if (items.length > 0) {
          const t = cur.trim();
          if (t.startsWith('- ')) items[items.length - 1].sub.push(t.slice(2));
          else items[items.length - 1].text += ' ' + t;
        }
        i++;
      }
      out.push(`<ul class="list-disc list-inside space-y-1.5 text-sm text-slate-600 dark:text-slate-300 my-2">\n  ${items.map(it => {
        const subHtml = it.sub.length ? `\n    <ul class="list-disc list-inside pl-5 mt-1 space-y-1 text-xs">\n      ${it.sub.map(s => `<li>${renderInline(s)}</li>`).join('\n      ')}\n    </ul>` : '';
        return `<li>${renderInline(it.text)}${subHtml}</li>`;
      }).join('\n  ')}\n</ul>`);
      continue;
    }

    // 9. Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && (/^\s*\d+\.\s+/.test(lines[i]) || (items.length > 0 && /^\s{2,}-\s+/.test(lines[i])))) {
        const cur = lines[i];
        if (/^\d+\.\s+/.test(cur.trim()) && cur.search(/\S/) === 0) {
          items.push({ text: cur.trim().replace(/^\d+\.\s+/, ''), sub: [] });
        } else if (items.length > 0 && cur.trim().startsWith('- ')) {
          items[items.length - 1].sub.push(cur.trim().slice(2));
        }
        i++;
      }
      out.push(`<ol class="list-decimal list-inside space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-2 my-2">\n  ${items.map(it => {
        const subHtml = it.sub.length ? `\n    <ul class="list-disc list-inside pl-5 mt-1 space-y-1 text-xs">\n      ${it.sub.map(s => `<li>${renderInline(s)}</li>`).join('\n      ')}\n    </ul>` : '';
        return `<li>${renderInline(it.text)}${subHtml}</li>`;
      }).join('\n  ')}\n</ol>`);
      continue;
    }

    // 10. Paragraph (collect consecutive non-special lines)
    const pLines = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t || /^(#{2,4}\s+|:::|`{3,}|>|\s*-\s+|\s*\d+\.\s+|<)/.test(lines[i]) || STANDALONE_IMG_RE.test(t)) break;
      if (t.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}:?/.test(lines[i + 1])) break;
      pLines.push(t);
      i++;
    }
    if (pLines.length > 0) {
      out.push(`<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${renderInline(pLines.join(' '))}</p>`);
    } else {
      i++;
    }
  }

  return out.join('\n\n');
}

function parseFrontmatterAndBody(mdContent) {
  const clean = mdContent.replace(/\r\n/g, '\n');
  const m = clean.match(/^---json\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!m) {
    throw new Error('Markdown dosyasında ---json ... --- frontmatter bulunamadı!');
  }
  const meta = JSON.parse(m[1]);
  return { meta, body: m[2] };
}

function splitSections(body) {
  const lines = body.split('\n');
  const preSections = [];
  const sections = [];
  let cur = null;

  let inFence = false;
  for (const line of lines) {
    if (/^`{3,}/.test(line.trim())) inFence = !inFence;
    if (!inFence) {
      const secMatch = line.match(/^##\s+(.+?)(?:\s+\{#([a-z0-9_-]+)\})?\s*$/i);
      if (secMatch) {
        const title = secMatch[1].trim();
        const rawId = secMatch[2] || slugifyTr(title);
        cur = { id: rawId === 'no-id' ? null : rawId, title, lines: [] };
        sections.push(cur);
        continue;
      }
    }
    if (cur) cur.lines.push(line);
    else preSections.push(line);
  }

  return { preBody: preSections.join('\n').trim(), sections };
}

function syncAppJsNav(catalog) {
  const appJsPath = path.join(HELP_DIR, 'assets', 'app.js');
  if (!fs.existsSync(appJsPath)) return false;
  const mains = catalog.guides.filter(g => !g.parentSlug);
  const navItems = mains.map(g => {
    const subs = catalog.guides.filter(s => s.parentSlug === g.slug);
    const item = { num: g.num, title: g.navTitle, url: `${g.slug}.html` };
    if (subs.length > 0) {
      item.children = subs.map(s => ({ num: s.num, title: s.navTitle, url: `${s.slug}.html` }));
    }
    return item;
  });
  const serialized = 'const MODULE_NAV_ITEMS = ' + JSON.stringify(navItems, null, 2).replace(/\n/g, '\n  ') + ';';
  const raw = fs.readFileSync(appJsPath, 'utf8');
  const navRe = /const MODULE_NAV_ITEMS = \[[\s\S]*?\n  \];/;
  if (!navRe.test(raw)) {
    throw new Error('help/assets/app.js içinde MODULE_NAV_ITEMS bloğu bulunamadı!');
  }
  const updated = raw.replace(navRe, serialized);
  return writeIfChanged(appJsPath, updated, 'help/assets/app.js (MODULE_NAV_ITEMS)');
}

function renderOverviewSection(meta, guide, preHtml) {
  const overviewId = meta.overviewId || 'overview';
  const badgesHtml = (meta.badges || []).map(b => {
    const toneCls = TONE_BADGE[b.tone] || TONE_BADGE.cyan;
    return `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${toneCls}">${renderInline(b.text)}</span>`;
  }).join('\n        ');

  const kpisHtml = (meta.kpis && meta.kpis.length) ? `
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
      ${meta.kpis.map(k => `<div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
        <span class="text-xs font-semibold uppercase tracking-wider ${TONE_LABEL[k.tone] || 'text-cyan-500'} font-mono">${escHtml(k.label)}</span>
        <div class="text-2xl font-black text-slate-900 dark:text-white font-mono">${renderInline(k.value)}</div>
        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${renderInline(k.desc)}</p>
      </div>`).join('\n      ')}
    </div>` : '';

  if (meta.heroStyle === 'gradient') {
    return `<section id="${escHtml(overviewId)}" class="mb-10 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white shadow-xl border border-slate-700/50">
  <div class="max-w-4xl space-y-4">
    <div class="flex flex-wrap items-center gap-2.5">${badgesHtml}</div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">${renderInline(meta.h1)}</h1>
    <p class="text-base sm:text-lg text-slate-300 leading-relaxed">${renderInline(meta.lead)}</p>
    ${meta.readingTime ? `<div class="text-xs font-mono text-slate-400 flex items-center gap-1.5">${SVG_CLOCK} Tahmini Okuma: ${escHtml(meta.readingTime)}</div>` : ''}
    ${meta.legalNote ? `<div class="mt-3 text-xs sm:text-sm text-slate-300">${meta.legalNote}</div>` : ''}
  </div>
  ${kpisHtml}
  ${preHtml ? `<div class="mt-6">${preHtml}</div>` : ''}
</section>`;
  }

  return `<section id="${escHtml(overviewId)}" class="mb-10 border-b border-slate-200 dark:border-slate-800 pb-6">
  <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
    <div class="flex flex-wrap items-center gap-2.5">${badgesHtml}</div>
    ${meta.readingTime ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${SVG_CLOCK} Tahmini Okuma: ${escHtml(meta.readingTime)}</span>` : ''}
  </div>
  <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
    ${renderInline(meta.h1)}
  </h1>
  <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
    ${renderInline(meta.lead)}
  </p>
  ${meta.legalNote ? `<div class="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">${meta.legalNote}</div>` : ''}
  ${kpisHtml}
  ${preHtml ? `<div class="mt-6">${preHtml}</div>` : ''}
</section>`;
}

function renderHtmlShell({ title, version, isIndex, searchPlaceholder, searchInputId, headerActionHtml, sidebarHeaderHtml, sidebarBodyHtml, sidebarExtraHtml, mainHtml, rightTocHtml, footerHtml }) {
  const asideInner = isIndex
    ? `\n      ${sidebarHeaderHtml}\n      <nav class="space-y-1 text-sm font-medium">\n        ${sidebarBodyHtml}\n      </nav>\n      ${sidebarExtraHtml || ''}\n    `
    : '';
  return `<!DOCTYPE html>
<html lang="tr" class="scroll-smooth dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escHtml(title)}</title>
  <link rel="stylesheet" href="assets/tailwind.min.css">
  <script src="assets/mermaid.min.js"></script>
  <style>
    pre, code { font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.35); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(148, 163, 184, 0.6); }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 antialiased font-sans transition-colors duration-200 min-h-screen flex flex-col">

  <!-- TOP HEADER NAVBAR -->
  <header class="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
    <div class="max-w-[1720px] w-full mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <button id="mobileMenuBtn" class="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Menüyü Aç/Kapat">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <a href="index.html" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              RADPYS <span class="text-xs px-2 py-0.5 rounded font-mono font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700/50">v${escHtml(version)}</span>
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${isIndex ? 'Kullanım Kılavuzu &amp; Bilgi Portalı' : 'Kullanım Kılavuzu &amp; Karar Destek Portalı'}</span>
          </div>
        </a>
      </div>

      <div class="flex-1 max-w-xl hidden md:block">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <input
            type="text"
            ${searchInputId ? `id="${searchInputId}"` : 'readonly'}
            placeholder="${escHtml(searchPlaceholder)}"
            class="w-full pl-10 pr-14 py-2 text-sm bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-slate-100 placeholder-slate-400 transition${isIndex ? '' : ' cursor-pointer'}"
          >
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <kbd class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 font-semibold">Ctrl+K</kbd>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        ${headerActionHtml}
      </div>
    </div>
  </header>

  <!-- MAIN CONTAINER -->
  <div class="flex-1 max-w-[1720px] w-full mx-auto px-4 sm:px-6 lg:px-10 flex gap-8">
    <aside id="sidebarNav" class="w-72 shrink-0 fixed inset-y-0 left-0 z-30 pt-20 pb-8 px-4 bg-white/95 dark:bg-slate-900/95 lg:bg-transparent lg:dark:bg-transparent border-r border-slate-200 dark:border-slate-800 lg:border-none lg:static lg:block transform -translate-x-full lg:translate-x-0 transition-transform duration-200 overflow-y-auto custom-scrollbar">${asideInner}</aside>

    <main class="flex-1 min-w-0 py-8">
      ${mainHtml}
    </main>

    ${rightTocHtml}
  </div>

  ${footerHtml}

  <script src="assets/search_index.js"></script>
  <script src="assets/app.js"></script>
</body>
</html>
`;
}

function buildPortalIndex(catalog, version) {
  const { portal, chapters, guides } = catalog;
  const navLinks = chapters.map(ch => `<a href="#${ch.id}" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <span class="w-2.5 h-2.5 rounded-full ${ch.dotClass} shrink-0"></span>
          <span>${escHtml(ch.sidebarLabel)}</span>
        </a>`).join('\n        ');

  const metricsHtml = `<div class="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 block mb-3">Hızlı Metrikler</span>
        <div class="space-y-2 text-xs px-3 text-slate-500 dark:text-slate-400">
          <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/50">
            <span>Toplam Modül:</span>
            <strong class="text-slate-800 dark:text-slate-200 font-mono text-sm">${guides.filter(g => !g.parentSlug).length}</strong>
          </div>
          <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/50">
            <span>Mevzuat Standardı:</span>
            <strong class="text-emerald-600 dark:text-emerald-400 font-semibold">${escHtml(portal.metricsStandard)}</strong>
          </div>
          <div class="flex justify-between py-1">
            <span>Şifreleme:</span>
            <strong class="text-cyan-600 dark:text-cyan-400 font-mono">${escHtml(portal.metricsCrypto)}</strong>
          </div>
        </div>
      </div>`;

  const sectionsHtml = chapters.map(ch => {
    const chGuides = guides.filter(g => !g.parentSlug && (g.indexChapterId || g.chapterId) === ch.id);
    const cardsHtml = chGuides.map(g => {
      const borderCls = g.cardHighlight ? 'border-2 border-cyan-500/70 shadow-md hover:shadow-xl' : 'border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md';
      const badgeTone = (g.statusBadge && g.statusBadge.tone) || 'emerald';
      const dotTone = badgeTone === 'rose' ? 'bg-rose-500' : 'bg-emerald-500';
      const badgeCls = badgeTone === 'rose'
        ? 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800'
        : 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800';
      const tagsHtml = (g.tags && g.tags.length) ? `
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${g.tags.map(t => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">${escHtml(t)}</span>`).join('\n            ')}
          </div>` : '';

      return `<div class="module-card group p-6 rounded-2xl bg-white dark:bg-slate-900 ${borderCls} transition-all flex flex-col justify-between" data-search="${escHtml(g.searchKeywords)}">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="font-mono text-sm font-bold px-2.5 py-1 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">${escHtml(g.num)}</span>
            <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${badgeCls} px-2.5 py-1 rounded-full border">
              <span class="w-2 h-2 rounded-full ${dotTone} animate-pulse"></span> ${escHtml((g.statusBadge && g.statusBadge.text) || 'Yayında & Güncel')}
            </span>
          </div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition mb-3">
            ${escHtml(g.cardTitle)}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ${g.cardDesc}
          </p>${tagsHtml}
        </div>
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <span class="text-xs text-slate-400 font-medium">${escHtml(g.footerLabel)}</span>
          <a href="${escHtml(g.slug)}.html" class="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline">
            <span>${escHtml(g.openLabel || 'Kılavuzu Aç')}</span>
            ${SVG_ARROW_RIGHT}
          </a>
        </div>
      </div>`;
    }).join('\n\n      ');

    return `<section id="${ch.id}" class="module-section">
    <div class="flex items-center justify-between pb-3 mb-5 border-b border-slate-200 dark:border-slate-800">
      <div>
        <span class="text-xs font-bold tracking-wider uppercase ${TONE_TEXT[ch.accentTone || 'cyan']}">${escHtml(ch.label)}</span>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">${escHtml(ch.title)}</h2>
      </div>
      <span class="text-xs sm:text-sm px-3 py-1 rounded-full font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">${chGuides.length} Modül</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      ${cardsHtml}
    </div>
  </section>`;
  }).join('\n\n');

  const mainHtml = `
      <section class="mb-10 p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-cyan-950/70 via-slate-900/90 to-slate-950 border border-cyan-800/40 shadow-2xl relative overflow-hidden">
        <div class="relative z-10 max-w-4xl">
          <div class="flex flex-wrap items-center gap-2.5 mb-4">
            <span class="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">${escHtml(portal.heroBadge1)}</span>
            <span class="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">${escHtml(portal.heroBadge2)}</span>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">${escHtml(portal.heroTitle)}</h1>
          <p class="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">${escHtml(portal.heroDesc)}</p>
          <div class="relative max-w-2xl">
            <input type="text" id="heroFilterInput" placeholder="Aramak istediğiniz modülü yazın... (Örn: 01, Nöbet, Dozimetre, Arıza, RKE, Sudo)" class="w-full pl-12 pr-4 py-3.5 text-sm bg-slate-900/90 border border-cyan-700/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-400 shadow-inner">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-cyan-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
          </div>
        </div>
      </section>

      <div id="moduleCardsContainer" class="space-y-12">
        ${sectionsHtml}
      </div>

      <div id="noResultsMsg" class="hidden p-10 rounded-2xl text-center border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 my-8">
        <span class="text-base font-semibold text-slate-700 dark:text-slate-300 block mb-1">Eşleşen modül bulunamadı</span>
        <span class="text-sm text-slate-400">Lütfen farklı bir anahtar kelime veya modül numarası deneyiniz.</span>
      </div>`;

  const footerHtml = `<footer class="border-t border-slate-200 dark:border-slate-800 py-8 bg-white dark:bg-slate-900 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-16">
    <div class="max-w-[1720px] mx-auto px-6 space-y-2">
      <p class="font-semibold text-slate-700 dark:text-slate-300">RADPYS V4 (v${escHtml(version)}) — Radyoloji Bilgi &amp; Radyasyon Güvenliği Yönetim Sistemi</p>
      <p>Sağlık Bakanlığı SKS 6.1, NDK Mevzuatı, DIN 6857-1 ve KVKK Standartları ile Uyumlu Olarak Korunmaktadır.</p>
    </div>
  </footer>`;

  return renderHtmlShell({
    title: portal.pageTitle,
    version,
    isIndex: true,
    searchPlaceholder: 'Modül veya özellik ara... (Örn: Nöbet, Dozimetre, RKE, İzin...)',
    searchInputId: 'moduleFilterInput',
    headerActionHtml: `<a href="01_kurulum_ve_ilk_giris.html" class="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white shadow-md shadow-cyan-600/25 transition"><span>İlk Rehber: 01. Giriş</span>${SVG_ARROW_RIGHT}</a>`,
    sidebarHeaderHtml: `<div class="mb-4"><span class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3">Rehber Bölümleri</span></div>`,
    sidebarBodyHtml: navLinks,
    sidebarExtraHtml: metricsHtml,
    mainHtml,
    rightTocHtml: '',
    footerHtml
  });
}

function resolvePrevNext(catalog, guide) {
  const bySlug = new Map(catalog.guides.map(g => [g.slug, g]));
  const portalNode = { url: 'index.html', label: 'Tüm 23 Modül Portalı' };

  const formatNode = (slug) => {
    if (!slug || slug === 'index') return portalNode;
    const g = bySlug.get(slug);
    return g ? { url: `${g.slug}.html`, label: `${g.num}. ${g.navTitle}` } : portalNode;
  };

  if (guide.parentSlug) {
    const subs = catalog.guides.filter(g => g.parentSlug === guide.parentSlug);
    const idx = subs.findIndex(g => g.slug === guide.slug);
    const prev = idx > 0 ? subs[idx - 1].slug : guide.parentSlug;
    const next = idx < subs.length - 1 ? subs[idx + 1].slug : '08_nobet_hazirlik_ve_solver_motoru';
    return { prev: formatNode(prev), next: formatNode(next) };
  }

  const mains = catalog.guides.filter(g => !g.parentSlug);
  const idx = mains.findIndex(g => g.slug === guide.slug);
  const prev = idx > 0 ? mains[idx - 1].slug : 'index';
  const next = idx < mains.length - 1 ? mains[idx + 1].slug : 'index';
  return { prev: formatNode(prev), next: formatNode(next) };
}

function buildGuideHtml(catalog, guide, version) {
  const mdPath = path.join(SRC_DIR, `${guide.slug}.md`);
  if (!fs.existsSync(mdPath)) {
    throw new Error(`Eksik rehber kaynak dosyası: help/src/${guide.slug}.md`);
  }

  const { meta, body } = parseFrontmatterAndBody(fs.readFileSync(mdPath, 'utf8'));
  const { preBody, sections } = splitSections(body);
  const chapter = catalog.chapters.find(c => c.id === guide.chapterId);
  const { prev, next } = resolvePrevNext(catalog, guide);

  const preHtml = renderMarkdownBlocks(preBody).replace('<!-- SUBGUIDES_PLACEHOLDER -->', renderSubguides(catalog));
  const overviewHtml = renderOverviewSection(meta, guide, preHtml);

  const sectionBlocks = [];
  const tocItems = [];

  for (const sec of sections) {
    const innerHtml = renderMarkdownBlocks(sec.lines.join('\n')).replace('<!-- SUBGUIDES_PLACEHOLDER -->', renderSubguides(catalog));
    if (sec.id && sec.id !== 'overview' && sec.id !== 'genel-bakis' && sec.id !== 'hero') {
      tocItems.push({ id: sec.id, title: sec.title.replace(/^\d+\.\s*/, '') });
    }
    const idAttr = sec.id ? ` id="${escHtml(sec.id)}"` : '';
    sectionBlocks.push(`<section${idAttr} class="mb-12">
  <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-4">
    <span class="w-3 h-3 rounded bg-cyan-600 shrink-0"></span>
    <span>${renderInline(sec.title)}</span>
  </h2>
  ${innerHtml}
</section>`);
  }

  const parentGuide = guide.parentSlug ? catalog.guides.find(g => g.slug === guide.parentSlug) : null;
  const breadcrumbMiddle = parentGuide
    ? `<a href="${escHtml(parentGuide.slug)}.html" class="hover:text-cyan-600 transition">${escHtml(parentGuide.num)}. ${escHtml(parentGuide.navTitle)}</a>`
    : `<span>${escHtml(chapter ? chapter.breadcrumbLabel : 'Modül Rehberi')}</span>`;

  const breadcrumbHtml = `<nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
        <a href="index.html" class="hover:text-cyan-600 transition">Kılavuz Ana Sayfası</a>
        ${SVG_ARROW_RIGHT.replace('w-4 h-4', 'w-3.5 h-3.5 text-slate-400')}
        ${breadcrumbMiddle}
        ${SVG_ARROW_RIGHT.replace('w-4 h-4', 'w-3.5 h-3.5 text-slate-400')}
        <span class="text-cyan-600 dark:text-cyan-400 font-semibold">${escHtml(guide.num)}. ${escHtml(guide.navTitle)}</span>
      </nav>`;

  const prevNextHtml = `<footer class="pt-8 border-t border-slate-200 dark:border-slate-800">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="${escHtml(prev.url)}" class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-cyan-500 transition group">
            <span class="text-xs font-mono uppercase text-slate-400 block mb-1">← Önceki Doküman</span>
            <span class="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 transition">${escHtml(prev.label)}</span>
          </a>
          <a href="${escHtml(next.url)}" class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-cyan-500 transition text-right group">
            <span class="text-xs font-mono uppercase text-slate-400 block mb-1">Sonraki Doküman →</span>
            <span class="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 transition">${escHtml(next.label)}</span>
          </a>
        </div>
      </footer>`;

  const rightTocHtml = `<aside class="w-64 shrink-0 hidden xl:block py-8 pl-6 border-l border-slate-200 dark:border-slate-800">
      <div class="sticky top-24 space-y-4">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-3">Bu Sayfada</span>
        <nav class="space-y-2.5 text-sm" id="onPageToc">
          ${tocItems.map(it => `<a href="#${escHtml(it.id)}" data-toc-link="${escHtml(it.id)}" class="block py-1 pl-3 border-l-2 border-transparent text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition leading-snug">${escHtml(it.title)}</a>`).join('\n          ')}
        </nav>
      </div>
    </aside>`;

  const footerHtml = `<footer class="border-t border-slate-200 dark:border-slate-800 py-8 bg-white dark:bg-slate-900 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-16">
    <div class="max-w-[1720px] mx-auto px-6">
      <p>© 2024–2026 RADPYS Geliştirme Ekibi (v${escHtml(version)}) — Sağlık Bilgi Güvenliği &amp; KVKK Standartları ile Korunmaktadır.</p>
    </div>
  </footer>`;

  return renderHtmlShell({
    title: meta.pageTitle || `${guide.num}. ${guide.navTitle} — RADPYS v4 Kullanım Kılavuzu`,
    version,
    isIndex: false,
    searchPlaceholder: 'Dokümanda ara... (Ctrl+K ile hızlı arama)',
    searchInputId: '',
    headerActionHtml: `<a href="index.html" class="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition"><span>Tüm Modüller</span></a>`,
    mainHtml: `${breadcrumbHtml}\n\n${overviewHtml}\n\n${sectionBlocks.join('\n\n')}\n\n${prevNextHtml}`,
    rightTocHtml,
    footerHtml
  });
}

function buildHelp(versionOverride) {
  const versionData = JSON.parse(fs.readFileSync(VERSION_JSON_PATH, 'utf8'));
  const version = String(versionOverride || versionData.version).replace(/^v/i, '');
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));

  syncAppJsNav(catalog);

  let updated = 0;
  const indexHtml = buildPortalIndex(catalog, version);
  if (writeIfChanged(path.join(HELP_DIR, 'index.html'), indexHtml, 'help/index.html')) {
    updated++;
  }

  for (const guide of catalog.guides) {
    const html = buildGuideHtml(catalog, guide, version);
    if (writeIfChanged(path.join(HELP_DIR, `${guide.slug}.html`), html, `help/${guide.slug}.html`)) {
      updated++;
    }
  }

  console.log(`[build-help] ✓ ${catalog.guides.length + 1} help sayfası derlendi (güncellenen: ${updated}, v${version}).`);
  return { total: catalog.guides.length + 1, updated, catalog };
}

if (require.main === module) {
  buildHelp();
}

module.exports = { buildHelp, CATALOG_PATH, SRC_DIR };
