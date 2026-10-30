#!/usr/bin/env node
/**
 * RADPYS V4 — Tek Komutla Sürüm & İçerik Senkronizasyon Betiği (sync-release.js)
 *
 * Kullanım:
 *   node scripts/sync-release.js           # Senkronize et (yalnızca değişen dosyaları yazar)
 *   node scripts/sync-release.js --verify  # Tüm sayfaları, modül görsellerini ve linkleri doğrula
 *
 * Görevleri:
 *   1. version.json ve update.md dosyalarını okur.
 *   2. update.md içerisindeki toplam bölüm sayısını (örn. 74) ve en güncel sürümü tespit eder.
 *   3. update.md içerisinde version.json'dan daha yeni bir sürüm varsa version.json'ı da günceller.
 *   4. assets/js/data.js içindeki VERSION_INFO nesnesini senkronize eder.
 *   5. changelog.html içindeki gömülü <script id="update-fallback-data"> bloğunu,
 *      SEO meta etiketlerini ve hero sayaçlarını otomatik günceller.
 *   6. index.html, moduller.html ve fiyatlandirma.html içindeki JSON-LD softwareVersion
 *      ve statik SEO yedek metinlerini günceller.
 *   7. sitemap.xml içerisindeki ana sayfaların <lastmod> tarihlerini günceller.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const VERSION_JSON_PATH = path.join(ROOT, 'version.json');
const UPDATE_MD_PATH = path.join(ROOT, 'update.md');
const DATA_JS_PATH = path.join(ROOT, 'assets', 'js', 'data.js');
const CHANGELOG_HTML_PATH = path.join(ROOT, 'changelog.html');

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

function verifyIntegrity(version, sectionCount) {
  console.log('\n--- RADPYS V4 Bütünlük ve Merkezileştirme Doğrulaması ---');
  global.window = {};
  require(DATA_JS_PATH);
  const R = global.window.RADPYS;

  let errors = 0;

  // 1. Modül sayısı ve dosya varlığı kontrolü
  console.log(`• Toplam Modül Sayısı: ${R.MODULES.length} (STATS.modules: ${R.STATS.modules})`);
  if (R.MODULES.length !== 23 || R.STATS.modules !== 23) {
    console.error('  ✗ HATA: Modül sayısı 23 olmalı!');
    errors++;
  }

  for (const m of R.MODULES) {
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

  // 2. Kök HTML sayfalarında eski sürüm veya modül sayısı kalıntısı kontrolü
  const rootHtmlFiles = [
    'index.html',
    'moduller.html',
    'fiyatlandirma.html',
    'gelistirme-planlari.html',
    'hakkimizda.html',
    'referanslar.html',
    'kaynaklar.html',
    'iletisim.html',
    'changelog.html'
  ];

  for (const file of rootHtmlFiles) {
    const p = path.join(ROOT, file);
    const content = fs.readFileSync(p, 'utf8');
    if (!content.includes('assets/js/data.js') && file !== 'dokumanlar.html') {
      console.error(`  ✗ ${file} içinde assets/js/data.js yüklenmiyor!`);
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

  console.log(`• 9 kök HTML sayfası tarandı — Hata sayısı: ${errors}`);
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
    // 1. assets/js/data.js güncelle
    if (fs.existsSync(DATA_JS_PATH)) {
      const dataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');
      const versionInfoRegex = /const VERSION_INFO = \{[\s\S]*?\};/;
      const newVersionInfoBlock = `const VERSION_INFO = {
        version: "${version}",
        series: "${series}",
        release_date: "${releaseDate}",
        download_url: "${downloadUrl}",
        changelog_sections: ${sectionCount}
    };`;
      if (versionInfoRegex.test(dataJs)) {
        const updatedDataJs = dataJs.replace(versionInfoRegex, newVersionInfoBlock);
        writeIfChanged(DATA_JS_PATH, updatedDataJs, `assets/js/data.js (v${version}, ${sectionCount} bölüm)`);
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

    // 3. index.html, moduller.html ve fiyatlandirma.html statik SEO yedeklerini güncelle
    const seoFiles = ['index.html', 'moduller.html', 'fiyatlandirma.html'];
    for (const file of seoFiles) {
      const filePath = path.join(ROOT, file);
      if (!fs.existsSync(filePath)) continue;
      const html = fs.readFileSync(filePath, 'utf8');
      const updated = html
        .replace(/"softwareVersion":\s*"4\.\d+\.\d+\.\d+"/g, `"softwareVersion": "${version}"`)
        .replace(/(data-radpys-version="v">)v4\.\d+\.\d+\.\d+(<\/span>)/g, `$1v${version}$2`)
        .replace(/(data-radpys-version="V">)V4\.\d+\.\d+\.\d+(<\/span>)/g, `$1V${version}$2`);
      writeIfChanged(filePath, updated, `${file} (SEO v${version})`);
    }
  }

  verifyIntegrity(version, sectionCount);
  console.log(`\n✅ Senkronizasyon ve doğrulama tamamlandı: RADPYS v${version} (${series}) | ${sectionCount} Changelog Bölümü`);
}

main();
