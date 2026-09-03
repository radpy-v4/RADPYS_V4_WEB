# RADPYS V4 — Master Geliştirme Planları ve Ar-Ge Yol Haritası (Master Roadmap)

Bu dosya, RADPYS V4 ve V5 vizyonu için hazırlanan kurumsal geliştirme planlarını, altyapısı hazır hızlı kazanımları ve Ar-Ge yol haritasını içerir.

---

### 📑 3 Ana Dalga ve 8 Fazlık Master Yol Haritası

#### 🌊 DALGA 1: Altyapısı Hazır Hızlı Kazanımlar (Öncelikli)

1. **Faz 1: Saha / Tablet QR-Barkod Muayene & Hızlı Envanter Asistanı (RKE & Cihaz/Ortam)**
   * Medikal Fizikçiler için tablette QR/Barkod okutma, skopi altında önlük kusurunu interaktif krokide işaretleme, fotoğraf ekleme ve sahadan anlık veri senkronizasyonu.
2. **Faz 2: Google TimesFM (Time Series Foundation Model) ile Yapay Zekalı Doz Trend Tahmini & Klinik Rotasyon**
   * 1 trilyon veriyle önceden eğitilmiş transformer mimarisiyle sıfır eğitimle (zero-shot) 6 ay önceden 20 mSv limit aşımı uyarısı, çok değişkenli risk analizi ve radyasyonsuz birimlere akıllı rotasyon önerisi.
3. **Faz 3: NDK & SKS "Otomatik Denetim Simülatörü" ve Uygunsuzluk Risk Karnesi**
   * Tek tıkla tüm kurumu tarayarak süresi dolan lisans, eksik kalibrasyon, muayenesiz kurşun önlük, eksik şua izni ve kaza bildirimlerini analiz eden 100 puan üzerinden resmi denetim karnesi ve hazırlık raporu motoru.

#### 🌊 DALGA 2: Kurumsal İletişim, Etkileşimli Onay ve Klinik Veri Entegrasyonu

1. **Faz 4: E-Posta & SMS Bildirim, Tebligat, Kanal Ayrıştırmalı OTP ve Magic-Link Onay Sistemi**
   * Kademeli onay (Seviye 1, 2, 3), SMS OTP doğrulaması, NDK kaza ve doz aşımı için zorunlu paralel SMS fail-safe, token korumalı PDF/ICS indirme (`download_tokens`) ve kurumsal DMZ/Proxy mimarisi.
2. **Faz 5: PACS / DICOM RDSR Doz Akış Köprüsü (C-STORE SCP)**
   * Hastane PACS sunucusundan BT, Anjiyografi ve Mamografi cihazlarının DICOM RDSR (Radiation Dose Structured Report) paketlerini otomatik dinleyen ve CTDIvol, DLP, DAP metriklerini personel/hekimle eşleştiren arka plan servisi.

#### 🌊 DALGA 3: İleri Seviye IoT, Edge AI ve Klinik Optimizasyon

1. **Faz 6: IoT Gerçek Zamanlı Ortam Dedektör Telemetrisi & Mimari Canlı Isı Haritası**
   * Wi-Fi/Zigbee/MQTT kablosuz alan radyasyon monitörlerinden gelen anlık µSv/h akışını interaktif krokide IDW ısı haritası ve eşik aşımı sesli/görsel flaş alarmlarıyla sunma.
2. **Faz 7: Edge AI / Görüntü İşleme ile Odaya Girişte RKE & Dozimetre Güvenlik Kontrolü**
   * Skopi ve Anjiyo oda girişlerindeki kamera/tablet ile personelin kurşun önlük, tiroid koruyucu ve yakasında dozimetre bulunup bulunmadığını 0.2 saniyede denetleyen hafif YOLOv8 modeli.
3. **Faz 8: Hasta Kümülatif Doz Takibi, Ulusal DRL Optimizasyonu & Kestirimci Tüp Ömrü Tahmini**
   * Hastanın farklı modalitelerdeki kümülatif dozu, ulusal DRL (Diagnostik Referans Seviyeleri) karşılaştırması ve TimesFM ile cihaz X-ışını tüpü yıpranma zamanını öngören kestirimci bakım motoru.

---

👉 **Tüm detaylı teknik şartname, DDL şemaları, dosya matrisi ve mimari tasarım için:**  
[docs/Gelistirme_Planlari.md](file:///c:/Users/user/Desktop/RADPYS/RADPYS_V4/docs/Gelistirme_Planlari.md) dosyasını inceleyiniz.
