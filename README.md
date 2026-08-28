# RADPYS V4 — Web Tanıtım & Bilgi Portalı (Statik Site)

Bu repo, **RADPYS V4** (Radyasyon Çalışanları ve Departman Yönetim Sistemi) resmi tanıtım, dokümantasyon, sürüm güncellemeleri ve indirme sitesidir. Backend gerektirmeyen, hızlı ve SEO uyumlu saf HTML/CSS/JS mimarisinde çalışır.

## Klasör Yapısı

```
RADPYS_V4_WEB/
├── index.html              → Ana Sayfa
├── moduller.html           → V4 Modülleri (Cihaz, RKE DIN 6857-1, LMS, Ortam Dozu, vb.)
├── fiyatlandirma.html      → Fiyatlandırma + SSS
├── referanslar.html        → Referanslar ve Kullanıcı Yorumları
├── kaynaklar.html          → Blog ve Bilgi Merkezi
├── dokumanlar.html         → Kurulum, Veritabanı ve Kullanım Kılavuzları
├── changelog.html          → Sürüm Tarihçesi & Sürüm Notları (Timeline)
├── hakkimizda.html         → Hakkımızda
├── iletisim.html           → İletişim Formu & Destek Kanalları
├── version.json            → Canlı Otomatik Güncelleme JSON API
├── sitemap.xml & robots.txt→ Arama Motoru İndeksleme Dosyaları
└── assets/
    ├── css/tokens.css      → Tasarım Sistemi (Renk, Tipografi, Cam efekti)
    └── js/
        ├── tailwind.config.js  → Tailwind CDN yapılandırması
        ├── data.js             → Dinamik veriler (Blog, Testimonial, İstatistikler)
        └── layout.js           → Global Navbar, Footer, Bildirim ve Gezinme Sistemi
```

## GitHub Pages & Barındırma

Repo adresi: `https://github.com/radpy-v4/RADPYS_V4_WEB.git`

1. Repo → **Settings → Pages → Source: `main` branch, root (`/`)**
2. Özel alan adı (Custom Domain): `www.radpys.com.tr` (veya `radpy-v4.github.io/RADPYS_V4_WEB/`)


### Yöntem 2: Mevcut Repo İçinde

1. `static-site/` klasörünü olduğu gibi push edin
2. Settings → Pages → Source: `main`, folder: `/static-site`
3. Yayında olur

## Yerelde Test Etme

Direkt `index.html` dosyasına çift tıklamak **çalışmaz** (fontshare CDN, marquee vs. çalışmaz). Basit bir sunucu çalıştırın:

```bash
cd static-site
python3 -m http.server 8000
# veya
npx serve .
```

Sonra tarayıcıda `http://localhost:8000` açın.

## İçerik Güncellemek

- **Blog yazısı eklemek/çıkarmak:** `assets/js/data.js` içindeki `BLOG_POSTS` dizisine obje ekleyin. Yeni yazı otomatik olarak listede ve `?slug=...` URL'iyle detayda görünür.
- **Testimonial eklemek:** Aynı dosyadaki `TESTIMONIALS` dizisi.
- **Menü linki değiştirmek:** `assets/js/layout.js` dosyasının en üstündeki `NAV_LINKS` dizisi. Bir yerden değişince tüm sayfalarda değişir.
- **Renkler:** `assets/css/tokens.css` — dosyanın başındaki `:root` değişkenleri.
- **Fiyatlandırma tablosu / SSS:** `fiyatlandirma.html` dosyasının içindeki `TIERS`, `ROWS`, `FAQ` dizileri.
- **Dokümantasyon:** `dokumanlar.html` dosyasında `<article class="prose-doc">` içindeki bölümler. Yeni bölüm eklemek için `<h2 id="...">` başlığı + sidebar'a `<a href="#...">` linki ekleyin — aktif başlık otomatik takip edilir.
- **Yeni sürüm eklemek (changelog):** `changelog.html` içindeki `RELEASES` dizisinin en başına yeni obje ekleyin. `type` değerleri: `new`, `improved`, `fixed`, `breaking`. İlk sürüm otomatik "Son sürüm" etiketi alır.

## İletişim Formu

Form gönderildiğinde, kullanıcının e-posta uygulaması bilgiler önceden doldurulmuş şekilde `mailto:radpys.iletisim@gmail.com` ile açılır. Gerçek bir backend'e gönderim isterseniz, `iletisim.html` sonundaki submit handler'ı [Formspree](https://formspree.io) veya [Getform](https://getform.io) gibi ücretsiz form servisleriyle değiştirebilirsiniz — kod içinde tek satırlık değişiklik yeterli.

## Neler Kullanılıyor?

- **Tailwind CSS (Play CDN)** — Utility class'lar için
- **Fontshare** — Clash Display + Manrope + JetBrains Mono
- **Vanilla JS** — Framework yok, sıfır build adımı
- Tüm görseller Unsplash/Pexels CDN'inden çekiliyor — kendi ekran görüntülerinizi eklemek için `assets/js/data.js` ve HTML dosyalarındaki `img src` değerlerini değiştirin.

## Görsel Değişiklikler İçin İpuçları

- Neon rengini değiştirmek: `tokens.css` içinde `--neon-teal` ve `--neon-cyan`
- Font ailesini değiştirmek: `index.html` (+ diğer sayfaların) `<head>` içindeki fontshare linkini + `tokens.css` içindeki `font-family` değerlerini güncelleyin

Kolay gelsin!
