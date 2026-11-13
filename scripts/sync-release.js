#!/usr/bin/env node
/**
 * RADPYS V4 — Tek Komutla Sürüm, Dokümantasyon & Arama İndeksi Senkronizasyon Betiği (sync-release.js)
 *
 * Kullanım:
 *   node scripts/sync-release.js           # Senkronize et (yalnızca değişen dosyaları yazar)
 *   node scripts/sync-release.js --verify  # Tüm sayfaları, help/ dokümanlarını, görselleri ve linkleri doğrula
 *
 * Görevleri:
 *   1. version.json ve update.md dosyalarını okur.
 *   2. update.md içerisindeki toplam bölüm sayısını (örn. 74) ve en güncel sürümü tespit eder.
 *   3. update.md içerisinde version.json'dan daha yeni bir sürüm varsa version.json'ı da günceller.
 *   4. assets/js/content/site-config.js içindeki VERSION_INFO nesnesini senkronize eder.
 *   5. changelog.html içindeki gömülü <script id="update-fallback-data"> bloğunu,
 *      SEO meta etiketlerini ve hero sayaçlarını otomatik günceller.
 *   6. index.html, moduller.html, fiyatlandirma.html, gizlilik.html ve README.md içindeki sürüm metinlerini günceller.
 *   7. help/src/*.md kaynaklarını scripts/build-help.js ile derler ve help/assets/app.js sürümünü günceller.
 *   8. help/*.html dosyalarını tarayarak help/assets/search_index.js çevrimdışı arama indeksini
 *      (sayfa + alt bölüm #anchor derin bağlantılarıyla birlikte) otomatik üretir.
 *   9. sitemap.xml içerisindeki <lastmod> tarihlerini günceller ve tüm URL'lerin varlığını doğrular.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HELP_DIR = path.join(ROOT, 'help');
const HELP_SRC_DIR = path.join(HELP_DIR, 'src');
const VERSION_JSON_PATH = path.join(ROOT, 'version.json');
const UPDATE_MD_PATH = path.join(ROOT, 'update.md');
const CONTENT_DIR = path.join(ROOT, 'assets', 'js', 'content');
const SITE_CONFIG_JS_PATH = path.join(CONTENT_DIR, 'site-config.js');
const CONTENT_FILES = ['site-config.js', 'modules.js', 'pricing.js', 'blog.js', 'pages.js'];
const CHANGELOG_HTML_PATH = path.join(ROOT, 'changelog.html');
const SITEMAP_XML_PATH = path.join(ROOT, 'sitemap.xml');
const HELP_APP_JS_PATH = path.join(HELP_DIR, 'assets', 'app.js');
const HELP_SEARCH_INDEX_PATH = path.join(HELP_DIR, 'assets', 'search_index.js');

function compareVersions(a, b) {
  const pa = String(a).replace(/^v/i, '').split('.').map(Number);
  const pb = String(b).replace(/^v/i, '').split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const na = pa[i] || 0;
    const nb = pb[i] || 0;
    if (na !== nb) return na - nb;
  }
  return 0;
}

function writeIfChanged(filePath, newContent, label) {
  const oldContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  if (oldContent.replace(/\r\n/g, '\n') === newContent.replace(/\r\n/g, '\n')) {
    console.log(`[sync-release] ✓ Güncel: ${label}`);
    return false;
  }
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`[sync-release] ↻ Güncellendi: ${label}`);
  return true;
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&quot;/g, '"')
    .replace(/&bull;/g, '•')
    .replace(/&rarr;/g, '→')
    .replace(/&larr;/g, '←')
    .replace(/&ge;/g, '≥')
    .replace(/&le;/g, '≤')
    .replace(/\s+/g, ' ')
    .trim();
}

function getModuleCategory(fileName) {
  const prefix = parseInt(fileName.slice(0, 2), 10);
  if (prefix >= 1 && prefix <= 4) return '1. Sistem, Kurulum & Güvenlik';
  if (prefix >= 5 && prefix <= 6) return '2. İnsan Kaynakları & İzin';
  if (prefix >= 7 && prefix <= 11) return '3. Akıllı Nöbet & Mesai';
  if (prefix >= 12 && prefix <= 17) return '4. Radyasyon Güvenliği & Eğitim';
  if (prefix >= 18 && prefix <= 20) return '5. Cihaz, Kalite (QC) & RKE';
  return '6. Dijital Dönüşüm, Onay & Rapor';
}

function buildHelpSearchIndex() {
  if (!fs.existsSync(HELP_DIR)) return;
  const htmlFiles = fs.readdirSync(HELP_DIR)
    .filter(f => f.endsWith('.html') && f !== 'index.html')
    .sort();

  const indexEntries = [];

  for (const file of htmlFiles) {
    const fullPath = path.join(HELP_DIR, file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const mainMatch = raw.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    const mainHtml = mainMatch ? mainMatch[1] : raw;

    const h1Match = mainHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const pageTitle = h1Match ? stripTags(h1Match[1]) : file.replace('.html', '');
    const category = getModuleCategory(file);

    // İlk açıklama paragrafı
    const pMatch = mainHtml.match(/<h1[\s\S]*?<\/h1>[\s\S]*?<p\b[^>]*>([\s\S]*?)<\/p>/i);
    const summary = pMatch ? stripTags(pMatch[1]).slice(0, 260) : pageTitle;

    // Tüm h2 ve h3 başlıkları
    const headings = [];
    const hRegex = /<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi;
    let hm;
    while ((hm = hRegex.exec(mainHtml)) !== null) {
      const hText = stripTags(hm[1]);
      if (hText) headings.push(hText);
    }

    const fullText = stripTags(mainHtml);

    // 1. Ana modül kaydı
    indexEntries.push({
      id: '',
      module: category,
      title: pageTitle,
      desc: summary,
      headings: headings.slice(0, 25),
      content: fullText.slice(0, 6000),
      url: file
    });

    // 2. Sayfa içi <section id="..."> derin bağlantı kayıtları
    const secRegex = /<section\s+[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/gi;
    let sm;
    while ((sm = secRegex.exec(mainHtml)) !== null) {
      const secId = sm[1];
      const secInner = sm[2];
      const secH2Match = secInner.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/i);
      if (!secH2Match) continue;
      const secTitle = stripTags(secH2Match[1]);
      if (!secTitle || secTitle.length < 3) continue;

      const secText = stripTags(secInner);
      indexEntries.push({
        id: secId,
        module: `${category} › Bölüm`,
        title: `${secTitle} — ${pageTitle.split(/[:—]/)[0].trim()}`,
        desc: secText.slice(0, 220),
        headings: [secTitle, pageTitle],
        content: secText.slice(0, 2500),
        url: `${file}#${secId}`
      });
    }
  }

  const output = `// RADPYS V4 — Otomatik Üretilen Çevrimdışı Arama İndeksi (sync-release.js tarafından güncellenir)\nwindow.RADPYS_SEARCH_INDEX = ${JSON.stringify(indexEntries, null, 2)};\n`;
  writeIfChanged(HELP_SEARCH_INDEX_PATH, output, `help/assets/search_index.js (${indexEntries.length} arama kaydı)`);
}

function syncHelpFiles(version) {
  if (!fs.existsSync(HELP_DIR)) return;

  // 1. help/assets/app.js içindeki currentVersion değerini güncelle
  if (fs.existsSync(HELP_APP_JS_PATH)) {
    const appJs = fs.readFileSync(HELP_APP_JS_PATH, 'utf8');
    const updatedAppJs = appJs.replace(
      /let currentVersion = "[^"]+";/,
      `let currentVersion = "${version}";`
    );
    writeIfChanged(HELP_APP_JS_PATH, updatedAppJs, `help/assets/app.js (v${version})`);
  }

  // 2. help/src/*.md kaynaklarını build-help.js ile derle
  const { buildHelp } = require('./build-help');
  buildHelp(version);
}

function verifyIntegrity(version, sectionCount) {
  console.log('\n--- RADPYS V4 Bütünlük ve Merkezileştirme Doğrulaması ---');
  let errors = 0;

  global.window = {};
  for (const f of CONTENT_FILES) {
    const fp = path.join(CONTENT_DIR, f);
    if (!fs.existsSync(fp)) {
      console.error(`  ✗ Eksik veri modülü: assets/js/content/${f}`);
      errors++;
    } else {
      delete require.cache[require.resolve(fp)];
      require(fp);
    }
  }
  const R = global.window.RADPYS || {};

  // 1. Modül sayısı ve dosya varlığı kontrolü
  const mods = Array.isArray(R.MODULES) ? R.MODULES : [];
  const modStat = R.STATS ? R.STATS.modules : undefined;
  console.log(`• Toplam Modül Sayısı: ${mods.length} (STATS.modules: ${modStat})`);
  if (mods.length !== 23 || modStat !== 23) {
    console.error('  ✗ HATA: Modül sayısı 23 olmalı!');
    errors++;
  }

  for (const m of mods) {
    const imgPath = path.join(ROOT, m.img);
    const guidePath = path.join(ROOT, 'help', m.guideFile);
    if (!fs.existsSync(imgPath)) {
      console.error(`  ✗ Eksik modül görseli [${m.n}]: ${m.img}`);
      errors++;
    }
    if (!fs.existsSync(guidePath)) {
      console.error(`  ✗ Eksik modül rehber dosyası [${m.n}]: help/${m.guideFile}`);
      errors++;
    }
  }
  if (errors === 0) {
    console.log('• 23 modülün tamamının görsel (help/assets/img/*) ve rehber (help/*.html) dosyaları doğrulandı.');
  }

  // 2. Kök HTML sayfalarında eski sürüm, eski data.js veya modül sayısı kalıntısı kontrolü
  const rootHtmlFiles = [
    'index.html',
    'moduller.html',
    'fiyatlandirma.html',
    'gelistirme-planlari.html',
    'hakkimizda.html',
    'referanslar.html',
    'kaynaklar.html',
    'iletisim.html',
    'changelog.html',
    'gizlilik.html'
  ];

  for (const file of rootHtmlFiles) {
    const p = path.join(ROOT, file);
    const content = fs.readFileSync(p, 'utf8');
    if (!content.includes('assets/js/content/site-config.js')) {
      console.error(`  ✗ ${file} içinde assets/js/content/site-config.js yüklenmiyor!`);
      errors++;
    }
    if (content.includes('assets/js/data.js')) {
      console.error(`  ✗ ${file} içinde eski assets/js/data.js referansı kaldı!`);
      errors++;
    }
    if (/2[12]\s+(?:Entegre\s+)?Modül/i.test(content)) {
      console.error(`  ✗ ${file} içinde eski modül sayısı (21/22 Modül) bulundu!`);
      errors++;
    }
    if (/RADPYS\s+V3/i.test(content)) {
      console.error(`  ✗ ${file} içinde eski 'RADPYS V3' ibaresi bulundu!`);
      errors++;
    }
  }
  console.log(`• ${rootHtmlFiles.length} kök HTML sayfası tarandı — Hata sayısı: ${errors}`);

  // 2b. help/src/_catalog.json ve tüm Markdown kaynak dosyaları kontrolü
  const catalogPath = path.join(HELP_SRC_DIR, '_catalog.json');
  if (!fs.existsSync(catalogPath)) {
    console.error('  ✗ Eksik yardım kataloğu: help/src/_catalog.json');
    errors++;
  } else {
    const cat = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    const guides = cat.guides || [];
    for (const g of guides) {
      if (!fs.existsSync(path.join(HELP_SRC_DIR, `${g.slug}.md`))) {
        console.error(`  ✗ Eksik yardım kaynağı: help/src/${g.slug}.md`);
        errors++;
      }
    }
    console.log(`• help/src/_catalog.json ve ${guides.length} Markdown kaynak dosyası doğrulandı.`);
  }

  // 3. help/*.html kırık link, kırık görsel, ham LaTeX ve ham mermaid fence kontrolü
  const helpHtmlFiles = fs.readdirSync(HELP_DIR).filter(f => f.endsWith('.html'));
  let helpImgCount = 0;
  for (const file of helpHtmlFiles) {
    const html = fs.readFileSync(path.join(HELP_DIR, file), 'utf8');
    if (/\$[^$\n]{1,60}\$|\\text\{|\{mm\}\^/.test(html)) {
      console.error(`  ✗ Ham LaTeX kalıntısı [help/${file}]`);
      errors++;
    }
    if (html.includes('```mermaid')) {
      console.error(`  ✗ Derlenmemiş \`\`\`mermaid bloğu [help/${file}]`);
      errors++;
    }
    const imgRe = /<img[^>]+src="([^"]+)"/g;
    let m;
    while ((m = imgRe.exec(html)) !== null) {
      const src = m[1];
      if (/^(https?:|data:)/i.test(src)) continue;
      helpImgCount++;
      const decoded = decodeURIComponent(src);
      const targetPath = path.resolve(HELP_DIR, decoded);
      if (!fs.existsSync(targetPath)) {
        console.error(`  ✗ Kırık görsel [help/${file}]: ${src}`);
        errors++;
      }
    }
    const hrefRe = /<a[^>]+href="([^"]+)"/g;
    while ((m = hrefRe.exec(html)) !== null) {
      const href = m[1];
      if (/^(https?:|mailto:|tel:|#|javascript:)/i.test(href)) continue;
      const cleanHref = href.split('#')[0].split('?')[0];
      if (!cleanHref) continue;
      const targetPath = path.resolve(HELP_DIR, cleanHref);
      if (!fs.existsSync(targetPath)) {
        console.error(`  ✗ Kırık link [help/${file}]: ${href}`);
        errors++;
      }
    }
  }
  console.log(`• ${helpHtmlFiles.length} help/*.html sayfası ve ${helpImgCount} ekran görüntüsü doğrulandı.`);

  // 4. sitemap.xml URL doğrulaması
  if (fs.existsSync(SITEMAP_XML_PATH)) {
    const sitemap = fs.readFileSync(SITEMAP_XML_PATH, 'utf8');
    const locRe = /<loc>https:\/\/radpys\.com\.tr\/([^<]*)<\/loc>/g;
    let lm;
    let locCount = 0;
    while ((lm = locRe.exec(sitemap)) !== null) {
      locCount++;
      const rel = lm[1] || 'index.html';
      const target = path.join(ROOT, rel);
      if (!fs.existsSync(target)) {
        console.error(`  ✗ sitemap.xml içinde var olmayan dosya: ${rel}`);
        errors++;
      }
    }
    console.log(`• sitemap.xml içerisindeki ${locCount} URL doğrulandı.`);
  }

  if (errors > 0) process.exit(1);
}

function main() {
  const isVerifyOnly = process.argv.includes('--verify');

  if (!fs.existsSync(VERSION_JSON_PATH)) {
    console.error('HATA: version.json bulunamadı:', VERSION_JSON_PATH);
    process.exit(1);
  }
  if (!fs.existsSync(UPDATE_MD_PATH)) {
    console.error('HATA: update.md bulunamadı:', UPDATE_MD_PATH);
    process.exit(1);
  }

  const versionData = JSON.parse(fs.readFileSync(VERSION_JSON_PATH, 'utf8'));
  const rawMd = fs.readFileSync(UPDATE_MD_PATH, 'utf8');
  const cleanMd = rawMd.replace(/\r\n/g, '\n');

  // update.md bölüm sayısını ve en üstteki sürümü bul
  const sectionHeaders = cleanMd
    .split(/\n(?=##\s+)/)
    .map(p => p.trim())
    .filter(p => p.startsWith('## '));

  const sectionCount = sectionHeaders.length;

  let mdLatestVersion = null;
  if (sectionHeaders.length > 0) {
    const firstHeader = sectionHeaders[0].split('\n')[0];
    const verMatch = firstHeader.match(/V?(4\.\d+\.\d+\.\d+)/i);
    if (verMatch) {
      mdLatestVersion = verMatch[1];
    }
  }

  // Eğer update.md'deki en üst sürüm version.json'dan daha yeniyse version.json'ı da güncelle
  if (!isVerifyOnly && mdLatestVersion && compareVersions(mdLatestVersion, versionData.version) > 0) {
    console.log(`[sync-release] update.md içinde daha yeni sürüm tespit edildi: ${mdLatestVersion} (eski: ${versionData.version})`);
    versionData.version = mdLatestVersion;
    versionData.release_date = new Date().toISOString().slice(0, 10);
    if (versionData.download_url) {
      versionData.download_url = versionData.download_url.replace(/v4\.\d+\.\d+\.\d+/i, 'v' + mdLatestVersion);
    }
    writeIfChanged(VERSION_JSON_PATH, JSON.stringify(versionData, null, 4) + '\n', `version.json (v${versionData.version})`);
  }

  const version = versionData.version;
  const series = 'V' + version.split('.').slice(0, 3).join('.');
  const releaseDate = versionData.release_date || new Date().toISOString().slice(0, 10);
  const downloadUrl = versionData.download_url || '';

  if (!isVerifyOnly) {
    // 1. assets/js/content/site-config.js güncelle
    if (fs.existsSync(SITE_CONFIG_JS_PATH)) {
      const siteConfigJs = fs.readFileSync(SITE_CONFIG_JS_PATH, 'utf8');
      const versionInfoRegex = /const VERSION_INFO = \{[\s\S]*?\};/;
      const newVersionInfoBlock = `const VERSION_INFO = {
            "version": "${version}",
            "series": "${series}",
            "release_date": "${releaseDate}",
            "download_url": "${downloadUrl}",
            "changelog_sections": ${sectionCount}
    };`;
      if (versionInfoRegex.test(siteConfigJs)) {
        const updatedSiteConfigJs = siteConfigJs.replace(versionInfoRegex, newVersionInfoBlock);
        writeIfChanged(SITE_CONFIG_JS_PATH, updatedSiteConfigJs, `assets/js/content/site-config.js (v${version}, ${sectionCount} bölüm)`);
      }
    }

    // 2. changelog.html güncelle
    if (fs.existsSync(CHANGELOG_HTML_PATH)) {
      let clHtml = fs.readFileSync(CHANGELOG_HTML_PATH, 'utf8');
      const safeMd = cleanMd.replace(/<\/script>/gi, '<\\/script>');
      const fallbackRegex = /(<script id="update-fallback-data" type="text\/markdown">)[\s\S]*?(<\/script>)/;
      if (fallbackRegex.test(clHtml)) {
        clHtml = clHtml.replace(fallbackRegex, `$1\n${safeMd}\n    $2`);
      }

      clHtml = clHtml
        .replace(/<head\b[\s\S]*?<\/head>/i, head =>
          head
            .replace(/\(v4\.\d+\.\d+(?:\.\d+)?\)/gi, `(v${version})`)
            .replace(/RADPYS V4\.\d+\.\d+(?:\.\d+)?/gi, `RADPYS V${version}`)
        )
        .replace(/V4\.0\.0\.0'dan V4\.\d+\.\d+\.\d+'[a-zğüşıöç]+ kadar tüm\s*\d+\s*bölüm/gi,
          `V4.0.0.0'dan V${version}'ye kadar tüm ${sectionCount} bölüm`)
        .replace(/V4\.0\.0\.0'dan V4\.\d+\.\d+\.\d+'[a-zğüşıöç]+ kadar tüm\s*\d+\s*sürüm/gi,
          `V4.0.0.0'dan V${version}'ye kadar tüm ${sectionCount} sürüm`)
        .replace(/<title>Sürüm Notları \(Changelog\) — RADPYS V4 \(V4\.0\.0\.0 – V4\.\d+\.\d+\.\d+\)<\/title>/i,
          `<title>Sürüm Notları (Changelog) — RADPYS V4 (V4.0.0.0 – V${version})</title>`)
        .replace(/(id="cl-hero-count"[^>]*>\s*)\d+\s*Temel Bölüm/i,
          `$1${sectionCount} Temel Bölüm`)
        .replace(/(id="cl-hero-version"[^>]*>\s*)v4\.\d+\.\d+\.\d+\s*Güncel Sürüm/i,
          `$1v${version} Güncel Sürüm`)
        .replace(/data-cat="all">Tümü \(\d+\)<\/button>/i,
          `data-cat="all">Tümü (${sectionCount})</button>`);

      writeIfChanged(CHANGELOG_HTML_PATH, clHtml, `changelog.html (${sectionCount} bölüm)`);
    }

    // 3. index.html, moduller.html, fiyatlandirma.html, gizlilik.html ve README.md statik sürüm yedeklerini güncelle
    const seoFiles = ['index.html', 'moduller.html', 'fiyatlandirma.html', 'gizlilik.html'];
    for (const file of seoFiles) {
      const filePath = path.join(ROOT, file);
      if (!fs.existsSync(filePath)) continue;
      const html = fs.readFileSync(filePath, 'utf8');
      const updated = html
        .replace(/"softwareVersion":\s*"4\.\d+\.\d+\.\d+"/g, `"softwareVersion": "${version}"`)
        .replace(/(data-radpys-version="v">)v4\.\d+\.\d+\.\d+(<\/span>)/g, `$1v${version}$2`)
        .replace(/(data-radpys-version="V">)V4\.\d+\.\d+\.\d+(<\/span>)/g, `$1V${version}$2`)
        .replace(/(data-radpys-version="Sürüm: \{v\}">\s*)Sürüm:\s*4\.\d+\.\d+\.\d+(\s*<\/span>)/g, `$1Sürüm: ${version}$2`);
      writeIfChanged(filePath, updated, `${file} (SEO v${version})`);
    }

    const readmePath = path.join(ROOT, 'README.md');
    if (fs.existsSync(readmePath)) {
      const readme = fs.readFileSync(readmePath, 'utf8');
      const updatedReadme = readme.replace(
        /(\*\s*\*\*Güncel Sürüm:\*\*\s*`)v4\.\d+\.\d+\.\d+(`\s*\(`)V4\.\d+\.\d+(`\s*Serisi\))/,
        `$1v${version}$2${series}$3`
      );
      writeIfChanged(readmePath, updatedReadme, `README.md (v${version})`);
    }

    // 4. help/ dosyalarını ve search_index.js arama indeksini senkronize et
    syncHelpFiles(version);
    buildHelpSearchIndex();

    // 5. sitemap.xml <lastmod> tarihlerini güncelle
    if (fs.existsSync(SITEMAP_XML_PATH)) {
      const sitemap = fs.readFileSync(SITEMAP_XML_PATH, 'utf8');
      const updatedSitemap = sitemap.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${releaseDate}</lastmod>`);
      writeIfChanged(SITEMAP_XML_PATH, updatedSitemap, `sitemap.xml (lastmod: ${releaseDate})`);
    }
  }

  verifyIntegrity(version, sectionCount);
  console.log(`\n✅ Senkronizasyon ve doğrulama tamamlandı: RADPYS v${version} (${series}) | ${sectionCount} Changelog Bölümü`);
}

main();
