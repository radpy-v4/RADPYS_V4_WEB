# RADPYS V4 — Web Tanıtım & Dokümantasyon Portalı

Bu repo, **RADPYS V4** (Radyoloji, Radyasyon Güvenliği ve Departman Yönetim Sistemi) resmi kurumsal web sitesi, interaktif modül tanıtımları, klinik yardım dokümantasyonu ve lisanslama portalının kaynak kodlarını içerir. 

Backend bağımlılığı gerektirmeyen, yüksek performanslı, **Core Web Vitals** ve kurumsal **SEO** standartlarına tam uyumlu saf HTML5 / CSS3 / Vanilla JS mimarisinde çalışır.

---

## 🌐 Canlı Yayın & Domain Yapılandırması

* **Resmi Web Sitesi:** [https://radpys.com.tr](https://radpys.com.tr)
* **Barındırma:** GitHub Pages (`main` branch, root `/`)
* **Özel Domain (CNAME):** `radpys.com.tr`
* **Jekyll Koruması:** `.nojekyll` (özel dizin ve varlıkların filtrelenmesini önler)

---

## 📁 Proje Dizin Yapısı

```
RADPYS_V4_WEB/
├── index.html                  → Ana Sayfa (Hero LCP, 22 Modül Özeti, SSS, JSON-LD Schema)
├── moduller.html               → 22 Modül İnteraktif Vitrini (Kılavuz Linkleri & Özellikler)
├── fiyatlandirma.html          → Lisans Paketleri (Başlangıç, Standart, Pro, Elit) + SSS
├── referanslar.html            → Klinik Referanslar & Kullanıcı Deneyimleri
├── kaynaklar.html              → Radyoloji & Sağlık Fiziği Blogu / Bilgi Merkezi
├── hakkimizda.html             → Ekip, Misyon, Sağlık Fiziği Vizyonu
├── iletisim.html               → Demo Talebi, İletişim Kanalları & Organization Schema
├── gelistirme-planlari.html    → Yol Haritası, Sürüm Notları & Gelecek Özellikler
├── gizlilik.html               → Gizlilik Politikası (KVKK / Aydınlatma)
├── kullanim-sartlari.html      → Kullanım Şartları ve Lisans Koşulları
├── kvkk.html                   → KVKK 6698 Uyum Beyanı ve Veri Güvenliği
├── version.json                → Masaüstü Uygulaması Otomatik Güncelleme API'si
├── sitemap.xml                 → Arama Motoru Haritası (Tüm Statik & Rehber Sayfaları)
├── robots.txt                  → Arama Motoru İndeksleme ve Tarama Yönergeleri
├── CNAME                       → radpys.com.tr
│
├── assets/                     → Genel Tasarım Varlıkları
│   ├── css/
│   │   └── tokens.css          → Tasarım Sistemi Değişkenleri (Renk, Cam Efekti, Tipografi)
│   └── js/
│       ├── tailwind.config.js  → Tailwind CDN Tema ve Renk Yapılandırması
│       ├── data.js             → Blog ve İçerik Veri Modelleri
│       └── layout.js           → Global Navbar, Mobil Menü, Breadcrumbs ve Footer
│
├── help/                       → Ayrıntılı Modül Kullanım Kılavuzları & Yardım Merkezi
│   ├── index.html              → Yardım Merkezi Ana İndeksi
│   ├── 01_kurulum_ve_ilk_giris.html
│   ├── 02_kullanici_ve_rol_yonetimi.html
│   ├── 03_sistem_ayarlari_ve_tanimlamalar.html
│   ├── 04_veritabani_bakim_ve_guvenlik.html
│   ├── 05_personel_yonetimi_ve_toplu_aktarim.html
│   ├── 06_izin_yonetimi_ve_hakedis.html
│   ├── 07_nobet_ayarlari_ve_kisit_hiyerarsisi.html    (Hedef: Nöbet Planlama Yazılımı)
│   ├── 07_1_temel_ayarlar_ve_calisma_standartlari.html
│   ├── 07_2_birim_kurallari_ve_slot_yonetimi.html
│   ├── 07_3_gelismis_kisitlar_ve_adalet_agirliklari.html
│   ├── 07_4_personel_ozel_saglik_ve_yasal_kisitlar.html
│   ├── 07_5_personel_talepleri_ve_onay_yonetimi.html
│   ├── 08_nobet_hazirlik_ve_solver_motoru.html
│   ├── 09_nobet_devir_ikame_ve_acil_mazeret.html
│   ├── 12_dozimetre_takibi_ve_rdf43_arastirma.html     (Hedef: Dozimetre Takip Sistemi)
│   ├── 13_saglik_muayeneleri_ve_periyodik_takip.html
│   ├── 14_ortam_dozu_ve_kroki_haritasi.html
│   ├── 20_rke_koruyucu_ekipman_ve_din6857.html         (Hedef: RKE Muayene Yazılımı)
│   ├── 21_merkezi_onaylar_ve_rapor_merkezi.html
│   └── assets/img/             → Yazılıma Ait Gerçek Ekran Görüntüleri
│
└── images/                     → Logolar, Marka Varlıkları ve İkonlar
```

---

## 🔍 SEO ve Bilgi Mimarisi (IA) Mimarisi

Portal, teknik SEO ve klinik arama niyetine (Search Intent) göre sıfırdan optimize edilmiştir:

1. **Özgün Meta & Başlık Hiyerarşisi:**
   - Her statik sayfa için özgün `<title>`, `<meta description>`, `<h1>` ve Open Graph / Twitter Card etiketleri.
   - `canonical` ve `hreflang` (`tr` ve `x-default`) etiketleriyle indeksleme sinyalleri birleştirilmiştir.
   - Güncelliğini yitirmiş meta keywords etiketleri temizlenmiştir.

2. **Hedef Klinik Anahtar Kelime Kümeleri:**
   - *Radyoloji Yönetim Sistemi* → `index.html` & `moduller.html`
   - *Nöbet Planlama Yazılımı* → `help/07_nobet_ayarlari_ve_kisit_hiyerarsisi.html` & `help/08_nobet_hazirlik_ve_solver_motoru.html`
   - *Dozimetre Takip Sistemi* → `help/12_dozimetre_takibi_ve_rdf43_arastirma.html`
   - *RKE Muayene Yazılımı (DIN 6857-1)* → `help/20_rke_koruyucu_ekipman_ve_din6857.html`

3. **Çift Yönlü İç Linkleme & Yetim Sayfa Koruması:**
   - `moduller.html` üzerindeki her bir modül kartı, `help/` altındaki ilgili derinlemesine teknik rehbere doğrudan bağlanır.
   - Rehber sayfaları `Breadcrumb` ve "Tüm Modülleri İncele" navigasyonu ile ana vitrine geri bağlanır.

4. **Yapısal Veri (JSON-LD Schemas):**
   - **Ana Sayfa:** `SoftwareApplication`, `Organization`, `WebSite`, `FAQPage`
   - **Modüller:** `SoftwareApplication`, `BreadcrumbList`
   - **Fiyatlandırma:** `Product` + `AggregateOffer` (Başlangıç, Standart, Pro, Elit katmanları)
   - **İletişim:** `ContactPage`, `Organization` (Satış ve Destek için çift `ContactPoint`)
   - **Rehberler:** `TechArticle`, `BreadcrumbList`

---

## ⚡ Performans ve Core Web Vitals (CWV)

* **LCP (Largest Contentful Paint):** Ana sayfa hero ekran görüntüsü `loading="eager"`, `fetchpriority="high"`, `decoding="async"` ve açık `width="1200" height="675"` boyutlandırmasıyla servis edilir.
* **Görsel Tembel Yükleme (Lazy Loading):** Tüm alt sayfalar, blog listeleri ve `help/` altındaki onlarca arayüz ekran görüntüsü `loading="lazy"` ve `decoding="async"` ile gecikmeli yüklenerek ilk yükleme bant genişliğini korur.
* **CLS (Cumulative Layout Shift) Önleme:** Tüm logo, avatar ve görsel bileşenlerine sabit boyutlar atanmıştır.
* **Font Optimizasyonu:** Fontshare CDN bağlantıları `preconnect` ve `display=swap` direktifleriyle yapılandırılmıştır.

---

## 💻 Yerel Geliştirme ve Test

Statik sitenin CDN fontlarını, modülleri ve interaktif script'lerini doğru şekilde test etmek için basit bir yerel HTTP sunucusu çalıştırılması önerilir:

```bash
# Repo kök dizininde:
python -m http.server 8000
# veya
npx serve .
```

Ardından tarayıcınızda açın:
```
http://localhost:8000
```

---

## 🛠️ İçerik ve Veri Güncelleme Rehberi

* **Blog & Kaynaklar:** `assets/js/data.js` içindeki `BLOG_POSTS` dizisine yeni makale objesi ekleyin. Otomatik olarak listede ve slug tabanlı detay görünümünde yayınlanır.
* **Referanslar:** `assets/js/data.js` içindeki `TESTIMONIALS` dizisini güncelleyin.
* **Menü & Gezinim Linkleri:** `assets/js/layout.js` dosyasındaki `NAV_LINKS` dizisini güncelleyin. Değişiklik tüm siteye dinamik yansır.
* **Renk Paleti & Tasarım Belirteçleri:** `assets/css/tokens.css` içindeki `:root` CSS değişkenlerini (`--neon-teal`, `--neon-cyan`, `--bg-dark`, vb.) düzenleyin.
* **Yeni Sürüm (Changelog):** `gelistirme-planlari.html` içerisindeki sürüm kayıtlarına ekleme yapın.

---

## 📄 Lisans ve İletişim

© 2026 RADPYS Yazılım. Tüm hakları saklıdır.  
İletişim ve demo talepleri için: [radpys.com.tr/iletisim.html](https://radpys.com.tr/iletisim.html) veya `radpys.iletisim@gmail.com`.
