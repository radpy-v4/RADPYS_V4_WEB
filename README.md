# RADPYS V4 — Kurumsal Web & Dokümantasyon Portalı

**RADPYS V4** (Radyoloji, Radyasyon Güvenliği ve Departman Yönetim Sistemi) resmi tanıtım, **23 entegre modül** vitrini, sürüm notları (changelog), teknik dokümantasyon, lisanslama ve demo talep portalıdır.

* **Canlı Site:** [https://radpys.com.tr](https://radpys.com.tr)
* **Güncel Sürüm:** `v4.0.5.7` (`V4.0.5` Serisi)
* **Mimari:** Merkezi Veri Katmanlı (`Single Source of Truth`) HTML5 / Tailwind CSS / Vanilla JS — GitHub & Cloudflare Pages CDN altyapısı üzerinde çalışır.

---

## 🩺 RADPYS V4 Nedir?

**RADPYS V4**, hastaneler, radyoloji klinikleri, nükleer tıp ve radyasyon onkolojisi merkezleri için sağlık fizikçileri ve yazılım mühendisleri tarafından geliştirilmiş **23 modüllü entegre radyoloji departmanı ve radyasyon güvenliği yönetim platformudur**.

### 🌟 Öne Çıkan Yetenekler

* **🤖 Otomatik Nöbet Solver Motoru:** Yasal çalışma kısıtları, nöbet ertesi dinlenme kuralları, adalet katsayıları ve personel mazeretlerini matematiksel optimizasyonla çözerek adil aylık çizelgeler üretir.
* **☢️ Dozimetre Takibi & Yasal Bildirim:** TENMAK ve RADAT verilerini otomatik aktarır; doz aşımı durumunda NDK mevzuatına uygun resmi **RD.F43** inceleme tutanağını tek tıkla hazırlar.
* **🛡️ RKE Koruyucu Ekipman (DIN 6857-1):** Kurşun önlük, tiroid ve gonad koruyucuların yıllık skopi muayenelerini, QR barkod pasaportlarını ve HEK/imha süreçlerini kayıt altına alır.
* **⏳ Fiili Hizmet (FHZ) & Şua İzni Takibi:** 5510 sayılı Kanun md. 40 kapsamında net fiili hizmet saatlerini ve devretmeyen 30 günlük yasal şua izinlerini otomatik hesaplar.
* **🗺️ Ortam Dozu & İnteraktif Mimari Kroki:** Kat planı ve departman krokileri üzerinde radyasyon alanlarının canlı doz haritasını ve kapı QR pasaportlarını üretir.
* **📊 Rapor & Tutanak Merkezi (Modül 23):** 14 resmi kurumsal tutanak şablonu, 5 adımlı Tutanak Sihirbazı, SHA-256 doğrulama mührü ve Denetim Paketi (ZIP) üretimi sunar.
* **🔒 NDK, SKS 6.1 ve KVKK 6698 Uyum:** AES-256-GCM şifrelemeli veri kasası, Merkezi Onaylar & Diff View (`Four-Eyes Principle`), denetime hazır İOBS/DÖF modülleri ve hibrit (Masaüstü + Web Portalı/PWA) kullanım desteği sağlar.

---

## 🚀 Yerelde Çalıştırma

Font, stil ve canlı `fetch` kaynaklarının (`version.json`, `update.md`) düzgün yüklenmesi için yerel bir HTTP sunucusu ile açın:

```bash
# Python ile:
python -m http.server 8000

# veya Node.js ile:
npx serve .
```

Tarayıcıdan **`http://localhost:8000`** adresine gidin.

---

## 📁 Proje Dosya Yapısı

```text
RADPYS_V4_WEB/
├── index.html               → Ana Sayfa (Hero ekran vitrini, 23 modül bento ızgarası, mevzuat, SSS)
├── moduller.html            → 23 Entegre Modülün detaylı incelemesi ve gelecek modüller
├── fiyatlandirma.html       → Lisans paketleri, özellik matrisi ve fiyatlandırma SSS
├── changelog.html           → Dinamik Sürüm Notları (update.md canlı ayrıştırıcı ve seri filtreleri)
├── gelistirme-planlari.html → Ürün yol haritası (Dalga 1-3, Faz 01-08) ve teknoloji sütunları
├── dokumanlar.html          → Teknik dokümantasyon ve kullanım kılavuzu merkezi
├── kaynaklar.html           → Mevzuat rehberleri ve teknik blog yazıları
├── referanslar.html         → Referans kurumlar, istatistikler ve kullanıcı görüşleri
├── hakkimizda.html          → Mimari katmanlar, kurumsal vizyon ve değerler
├── iletisim.html            → İletişim bilgileri, interaktif harita ve demo talep formu
├── gizlilik.html            → KVKK aydınlatma metni ve gizlilik politikası
│
├── version.json             → Masaüstü uygulaması ve web sitesi canlı sürüm kaynağı
├── update.md                → Tüm sürümlerin resmi Markdown sürüm notları kaynağı
├── sitemap.xml & robots.txt → Arama motoru indeksleme ve site haritası dosyaları
│
├── assets/
│   ├── css/tokens.css       → Tasarım sistemi, renk paleti, tipografi ve cam efektleri
│   └── js/
│       ├── data.js          → Merkezi Veri & Sayfa İçeriği Katmanı (Single Source of Truth)
│       └── layout.js        → Ortak üst menü, alt bilgi ve canlı sürüm/DOM bağlayıcı
│
├── scripts/
│   └── sync-release.js      → Tek komutla sürüm senkronizasyonu ve bütünlük doğrulama betiği
│
├── help/                    → 23 modülün detaylı HTML kullanım kılavuzları ve ekran görüntüleri
└── images/                  → Logolar, ikonlar ve kurumsal marka görselleri
```

---

## 🚢 Yayınlama (Cloudflare Pages & GitHub)

Proje GitHub deposuna bağlı **Cloudflare Pages** üzerinde yayınlanmaktadır:

1. Değişiklikler `main` dalına (`branch`) gönderildiğinde (`git push`),
2. Cloudflare Pages otomatik olarak yeni dağıtımı oluşturur ve **`https://radpys.com.tr`** üzerinde yayına alır.
