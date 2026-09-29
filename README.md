# RADPYS V4 — Web Tanıtım Portalı

**RADPYS V4** (Radyoloji, Radyasyon Güvenliği ve Departman Yönetim Sistemi) resmi tanıtım, modül vitrini, lisanslama ve demo talep sitesidir.

* **Canlı Site:** [https://radpys.com.tr](https://radpys.com.tr)
* **Mimari:** Statik HTML5 / CSS3 / Vanilla JS (Backend gerektirmez, GitHub Pages üzerinde barınır).

---

## 🩺 RADPYS V4 Nedir?

**RADPYS V4**, hastaneler, radyoloji klinikleri, nükleer tıp ve radyasyon onkolojisi merkezleri için sağlık fizikçileri ve yazılım mühendisleri tarafından geliştirilmiş **entegre radyoloji departmanı ve radyasyon güvenliği yönetim platformudur**.

### 🌟 Öne Çıkan Yetenekler

* **🤖 Otomatik Nöbet Solver Motoru:** Yasal çalışma kısıtları, nöbet ertesi dinlenme kuralları, adalet katsayıları ve personel mazeretlerini matematiksel optimizasyonla çözerek adil aylık çizelgeler üretir.
* **☢️ Dozimetre Takibi & Yasal Bildirim:** TENMAK ve RADAT verilerini otomatik aktarır; doz aşımı durumunda NDK mevzuatına uygun resmi **RD.F43** inceleme tutanağını tek tıkla hazırlar.
* **🛡️ RKE Koruyucu Ekipman (DIN 6857-1):** Kurşun önlük, tiroid ve gonad koruyucuların yıllık skopi muayenelerini, QR barkod pasaportlarını ve HEK/imha süreçlerini kayıt altına alır.
* **⏳ Şua (Sağlık) İzni Takibi:** Devretmeyen 4 haftalık yasal şua izinlerinin yıl sonuna doğru zamanaşımına uğramasını önleyen kademeli erken uyarı bildirimleri sunar.
* **🗺️ Ortam Dozu & İnteraktif Mimari Kroki:** Kat planı ve departman krokileri üzerinde radyasyon alanlarının canlı doz haritasını ve kapı QR pasaportlarını üretir.
* **🔒 NDK, SKS 6.1 ve KVKK 6698 Uyum:** AES-256 şifrelemeli veri kasası, denetime hazır İOBS/DÖF modülleri ve hibrit (Masaüstü + Web Portalı/PWA) kullanım desteği sağlar.

---

## 🚀 Yerelde Çalıştırma

Font ve stil kaynaklarının düzgün yüklenmesi için basit bir yerel HTTP sunucusu ile açın:

```bash
# Python ile:
python -m http.server 8000

# veya Node.js ile:
npx serve .
```

Tarayıcıdan **`http://localhost:8000`** adresine gidin.

---

## 📁 Dosya Yapısı

```
RADPYS_V4_WEB/
├── index.html              → Ana Sayfa (Genel tanıtım, özellikler, SSS)
├── moduller.html           → 22 Modülün detaylı tanıtımı
├── fiyatlandirma.html      → Lisans paketleri ve karşılaştırma tablosu
├── referanslar.html        → Referanslar ve kullanıcı yorumları
├── kaynaklar.html          → Blog ve bilgilendirici içerikler
├── hakkimizda.html         → Ekip ve sağlık fiziği vizyonu
├── iletisim.html           → İletişim ve demo talep formu
├── gelistirme-planlari.html→ Sürüm yol haritası ve yenilikler
├── version.json            → Masaüstü uygulaması otomatik güncelleme dosyası
├── sitemap.xml & robots.txt→ Arama motoru indeksleme dosyaları
├── CNAME                   → radpys.com.tr alan adı yönlendirmesi
│
├── assets/                 → Tasarım, stiller ve dinamik veriler
│   ├── css/tokens.css      → Renk paleti, tipografi ve efektler
│   └── js/
│       ├── data.js         → Blog yazıları ve referans verileri
│       └── layout.js       → Ortak navbar, mobil menü ve footer
│
├── help/                   → Modül ekran görüntüleri ve kullanım kılavuzları
└── images/                 → Logolar, ikonlar ve marka görselleri
```

---

## ✍️ İçerik Nasıl Güncellenir?

* **Blog Yazısı Eklemek:** `assets/js/data.js` dosyasındaki `BLOG_POSTS` dizisine yeni bir kayıt ekleyin. Liste ve detay sayfasına otomatik yansır.
* **Müşteri Yorumu / Referans Eklemek:** `assets/js/data.js` içindeki `TESTIMONIALS` dizisine ekleyin.
* **Üst Menü / Linkleri Değiştirmek:** `assets/js/layout.js` başındaki `NAV_LINKS` dizisini güncelleyin; tüm sayfalarda anında güncellenir.
* **Fiyat veya Paket Değiştirmek:** `fiyatlandirma.html` dosyasındaki fiyat kartlarını düzenleyin.
* **İletişim E-postası:** Form gönderim adresini değiştirmek için `iletisim.html` içindeki form eylemini düzenleyin.
* **Yeni Sürüm Notu Eklemek:** `gelistirme-planlari.html` sayfasına yeni sürüm maddesini ekleyin.

---

## 🚢 Yayınlama (Deploy)

Site doğrudan GitHub Pages üzerinden yayınlanmaktadır:
1. Değişiklikleri `main` branch'ine push edin.
2. GitHub Pages otomatik olarak `radpys.com.tr` üzerinden yayına alır.
