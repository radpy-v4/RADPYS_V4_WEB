# CHANGELOG

## [4.1.2.9] - 2026-09-09

### ☢️ Dozimetre Takip Sistemi, RDF-4.3 Doz Araştırma Formu, Cihaz & RKE İçe Aktarma, 40 Matbu Şablon & Yerel HTML Yardım Merkezi

#### 1. 🩻 Dozimetre Takip Sistemi & Resmi RD.F43 Doz Araştırma Formu (`DozimetreTakipController`)

- **Dozimetre Takip ve İnceleme Paneli:** `DozimetreTakipController`, `dozimetre_takip_main_tab.py` ve `dozimetre_import_controller.py` mimarisiyle dozimetre ölçümlerinin listelenmesi, kümülatif doz hesaplamaları ve birim bazlı radyasyon risk analizi devreye alındı.
- **Toplu Dozimetre İçe Aktarma Sihirbazı (`dozimetre_import_page.ui`):** Dozimetre laboratuvarlarından (TENMAK, RADAT vb.) gelen Excel raporlarının otomatik sütun eşleme ve geçerlilik denetimiyle sisteme aktarılması sağlandı.
- **Resmi RD.F43 Doz Araştırma Formu (`DozArastirmaFormController`):**
  - TAEK / TENMAK ve NDK resmi mevzuatına tam uyumlu 2 sayfalık matbu Doz Araştırma Formu (RDF-4.3) entegre edildi (`ui/pages/personel/doz_arastirma_form_dialog.ui`).
  - 10 iş günü yasal araştırma süresi sayacı (hafta sonlarını atlayan sayaç).
  - Doz Hızı ($\mu\text{Sv/sa}$) $\times$ Unutulma Süresi (saat) formülüyle tahmini doz hesaplama motoru.
  - `docxtpl` motoru ile kurum logoları ve çok satırlı başlıklar içeren resmi Word (`.docx`) belgesi üretimi (`tests/test_doz_arastirma_formu_rdf43.py`).

#### 2. 🔬 Tıbbi Cihaz Yönetimi, Tablo Arındırması (`V20260909_1`) & Excel İçe Aktarımı

- **Veritabanı Tablo Arındırma Migration'ı (`V20260909_1_cihaz_tablo_arindirma.py`):** `cihazlar` ve ilişkili tablolardaki mükerrer ve artık alanlar şemadan arındırıldı; `CihazRepository` ve `CihazService` sorguları normalize edilerek performans artışı sağlandı.
- **Toplu Cihaz Envanteri İçe Aktarım Servisi (`CihazImportService`):**
  - Excel listelerinden cihaz künyesi, NDK lisans numarası, marka/model, seri no ve oda bilgilerini içe aktaran servis mimarisi (`app/services/cihaz/cihaz_import_service.py`, `cihaz_mixin.py`).
  - Lookup tabanlı akıllı çözümleme ve mükerrer kayıt koruması.

#### 3. 🛡️ Koruyucu Ekipman (RKE) Envanteri, Kodlama Motoru & Zimmet Transferi

- **RKE Envanter Yönetim Servisi (`RkeService`):** Koruyucu ekipmanların periyodik muayene, sağlamlık, koşullu kullanım ve HEK durumlarının tek merkezden takibi (`app/services/rke/rke_service.py`).
- **Akıllı RKE Kod Üretici Motoru (`rke_kod_generator.py`):**
  - Standart kurumsal kod formülü: `[AnaBilimDali]-[Birim]-[Cins]-[SıraNo]` ve `RKE-[Cins]-[SıraNo]`.
  - Dinamik tanım öncelikli (Lookup-First) otomatik benzersiz kod üretimi.
- **RKE Zimmet Transferi & Hareket Takibi (`rke_zimmet_dialog.ui`, `rke_zimmet_dialog.py`):**
  - Ekipmanların personeller veya birimler arası teslim/tesellüm devir işlemlerinin denetim izi (`rke_zimmet_hareketleri`) ile kayıt altına alınması.
- **RKE Toplu İçe Aktarım Entegrasyonu (`rke_mixin.py`, `lookup_resolver_mixin.py`):**
  - Excel'den koruyucu donanım künyesi ve kalite kontrol muayene dökümlerinin otomatik eşleştirilerek aktarımı.

#### 4. 📑 40 Adet Kurumsal Matbu Rapor Şablonu & Genişletilmiş `ExportService`

- **40 Yeni Kurumsal Şablon (`data/templates/`):**
  - `cihaz_lisans_kalibrasyon`, `rke_muayene_cizelgesi`, `ortam_dozu_denetim`, `fiziksel_konum_envanter`, `doz_asimi_inceleme`, `dozimetre_kumulatif_sks`, `dozimetre_olcum_raporu`, `gebe_personel_doz_takip`, `fiili_hizmet_aylik_hakedis`, `nobet_hakedis`, `izin_bakiye_raporu`, `saglik_muayene_raporu`, `olay_bildirim_trend`, `radyoaktif_atik_envanter`, `rgk_karar_takip` vb.
  - Hem Word (`.docx` / Jinja2 / `docxtpl`) hem Excel (`.xlsx` / `openpyxl`) formatlarında hazır kurumsal şablon havuzu.
- **Merkezi Dışa Aktarım Servisi (`ExportService`):**
  - `app/services/system/export_service.py` modülü baştan sona yeniden yapılandırılarak tüm operasyonel modüller için yüksek kaliteli raporlama altyapısı sağlandı.

#### 5. 📚 CodeIgniter Stili Yerel HTML Bilgi ve Yardım Merkezi (`docs/help/`)

- **17 Modüler HTML Yardım Dokümanı:**
  - `01_kurulum.html` - `17_surum_notlari.html` ve `index.html`.
  - Sayfa içi gerçek zamanlı tam metin arama motoru (Ctrl+K entegrasyonu, arama indeksi).
  - CodeIgniter stili dikey akordeon navigasyon, genişletilebilir ve sürüklenebilir kenar çubuğu.
  - Mermaid.js operasyonel iş akışı diyagramları ve Sıkça Sorulan Sorular (`RADPYS_V4_sss.md`) çapraz bağlantıları.
- **Otomatik Dokümantasyon Derleyici (`scripts/build_help_site.py`):**
  - Markdown ana kullanım kılavuzunu (`RADPYS_V4_Kullanim_Kilavuzu.md`) statik HTML yardım merkezine dönüştüren derleme sistemi.

#### 6. 🚀 Master Dağıtım Orkestrasyonu (`deploy/publish_release.py`) & Cloudflare R2

- **Uçtan Uca Yayınlama Orkestratörü:**
  - Tek komutla sürüm doğrulama, policy denetimleri (`policy_checks.py`), şema bütünlük testleri, sürüm dosyaları senkronizasyonu, web portalı derleme ve Inno Setup kurulum paketi oluşturma.
- **Cloudflare R2 Dağıtım Entegrasyonu (`upload_to_r2.py`):**
  - Kurulum dosyası (`RADPYS_Setup_latest.exe`) ve sürüm manifest dosyasını Cloudflare R2 nesne depolama alanına yükleyen otomatik boru hattı.
- **Test İzolasyon Denetleyicisi (`scripts/lint_test_isolation.py`):**
  - Test süitinde ortam değişkeni ve dosya izolasyonunu denetleyen statik analiz aracı.
- **Web Portal Senkronizasyon Köprüsü (`scripts/sync_web_to_radpys_db.py`):**
  - Web portalından gelen olay bildirimleri ve nöbet devirlerini yerel veritabanına senkronize eden köprü betik.

#### 7. 🔑 Çevrimdışı Lisanslama & Faz 9 Test Bütünlüğü

- **Çevrimdışı Lisans Üretim Aracı (`tools/generate_license_keys.py`):**
  - Kurumsal lisans anahtarları ve aktivasyon kodları üretimi sağlayan güvenli yardımcı araç.
- **Faz 9 Test Paketi:**
  - `tests/test_cihaz_ui_and_notif.py`, `tests/test_doz_arastirma_formu_rdf43.py`, `tests/test_dozimetre_takip_controller_metrics.py`, `tests/test_import_lookup_resolver.py`, `tests/test_rke_kod_generator.py` ile yüksek test güvencesi.

---

## [4.1.2.8] - 2026-09-06

### 🏪 Nöbet Değişim Havuzu (Shift Marketplace), 36 Saat Güvenlik Kısıtları (TTL) & Web Portalı Pazaryeri Arayüzü

#### 1. 🌐 Nöbet Değişim Havuzu (Shift Marketplace) Mimarisi (`NobetHavuzService`)

- **Sıfır Telefon/WhatsApp Trafiği:** Nöbet değiştirmek isteyen personellerin bireysel arama ve ikna çabaları yerine nöbetlerini ortak dijital pazaryerine ("Nöbet Değişim Havuzu") ilan olarak açabilmesi sağlandı.
- **İlan Türleri:** "Açık Devir (Karşılıksız)" ve "Karşılıklı Takas" opsiyonları tanımlandı.
- **İlk Gelen Talip Kilidi (First-Come First-Served):** Bir personel ilana talip olduğunda ilan durumu `HAVUZDA` -> `TEKLIF_GELDI` seviyesine yükseltilerek diğer personellere kilitlenir.
- **Teklif Reddi Döngüsü:** İlan sahibi gelen talibi/teklifi reddederse ilan silinmez; 36 saatlik süre kısıtı dolana kadar havuzda yeni taliplere açık kalmaya devam eder (`durum = HAVUZDA`).

#### 2. ⏱️ 36 Saat Güvenlik Kısıtı (TTL) & 48 Saat Erken Uyarı Sistemi

- **48 Saat Erken Bildirim:** Nöbete 48 saat kala henüz talip çıkmamış ilanlar için ilan sahibine *"İlanınıza henüz talip çıkmadı. Nöbete 48 saat kaldı"* push/sistem bildirimi gönderilir.
- **36 Saat TTL Otomatik İptali (`SURESI_DOLDU`):** Nöbete 36 saat kala talip bulunup devir onaylanmamışsa sistem ilanı otomatik olarak zaman aşımına uğratır ve iptal eder. Nöbet yükümlülüğü asıl personelde kalır; servisin açıkta kalması önlenir.
- **Arka Plan TTL Worker:** Sunucu tarafında periyodik çalışan zaman aşımı tarayıcısı (`runShiftPoolTtlWorker`) ile otomatik iptaller ve sistem bildirimleri tetiklenir.

#### 3. 🚨 36 Saat Altı Acil Mazeret Eskalasyonu & RADPYS Nöbet Oto-İkame Motoru

- **Acil Mazeret Başvurusu:** 36 saatten az süre kala gelişen kaza, hastalık veya acil mazeret durumlarında personel *"🚨 Acil Mazeret Bildir"* butonunu kullanarak mazeret türü, açıklaması ve resmi evrakını (sağlık raporu) sisteme yükler.
- **Yönetici Aksiyon Merkezi Entegrasyonu:** Mazeret bildirimi doğrudan İdari Sorumlu / Yönetici Aksiyon Merkezi ekranına acil kırmızı bayrakla düşer.
- **RADPYS Adalet Katsayılı Oto-İkame:** Yönetici onayıyla sistem, nöbet adalet katsayısı ve nöbet yükü en az olan personeli otomatik atar veya re'sen görevlendirme yapar.

#### 4. 🛡️ Aylık 48 Saat Kota & Fazla Mesai Taban Denetimi

- **Aylık 48 Saat Havuz Kotası:** Bir personelin bir takvim ayı içinde havuz üzerinden devredebileceği maksimum nöbet süresi **48 saat** ile sınırlandırılarak sistem suistimali engellendi.
- **Zorunlu Taban Mesai Koruması:** Bir personelin karşılıksız devir yapabilmesi için taban mesaisini (160 saat) doldurmuş olması (devir sonrası kalan süresi >= taban mesai) şart koşuldu. Taban mesaisi eksik kalacak personele sistem sadece "Karşılıklı Takas" türünde ilan izni verir.

#### 5. 💻 Web & Mobil Portalı Nöbet Pazaryeri (`ShiftPoolView.tsx` & Express REST API)

- **Pazaryeri Ekranı:** Canlı 🟢/🚩 yasal kısıt denetim rozetleri (11 Saat Dinlenme, 48 Saat Haftalık Sınır, Çakışma, 130 Saat Aylık Şua Limiti), 36 saat geri sayım sayacı ve aylık kota ilerleme çubuğu eklendi.
- **REST API Uç Noktaları:** `/api/nobet/havuz/liste`, `/api/nobet/havuz/ilan-ver`, `/api/nobet/havuz/talip-ol`, `/api/nobet/havuz/teklif-yanitla`, `/api/nobet/havuz/geri-cek`, `/api/nobet/havuz/acil-mazeret`, `/api/nobet/havuz/ozet` API'leri oluşturuldu.
- **Gezinme Entegrasyonu:** Web portalı sol kenar çubuğuna `shift_pool` (YENİ rozetli) sekmesi eklendi; `ShiftChangeForm.tsx` ekranına havuz yönlendirme duyuru kutusu yerleştirildi.

---

## [4.1.2.7] - 2026-09-06

### 🚀 Toplu Muayene Kokpiti, Harici Hekim Bireysel Zimmeti, 14 Donanım SVG Silüeti & Global QSS Temizliği

#### 1. ⚡ Toplu Muayene ve Kalite Kontrol Kokpiti (`RkeTopluMuayeneDialog`)

- **Seri Kalite Kontrol ve Muayene:** Onlarca koruyucu donanımın tek bir oturumda saniyeler içinde periyodik kontrolden geçirilmesini sağlayan Toplu Muayene Kokpiti devreye alındı.
- **Merkezi Üst Panel Kontrolü:** Muayene Tarihi, Muayene Dönemi, Toplu Muayene Kararı (*Tam Uygun / Şartlı Kullanım / HEK*), 5 maddelik Fiziki Muayene Kriterleri ve Ortak Açıklama üst panelden belirlenir; tablodaki tüm seçili ekipmanlara tek tıkla uygulanır.
- **Hücre İçi Girdi Sadeleştirmesi:** Tablo hücrelerindeki karmaşık combo ve metin kutuları kaldırılarak ekran hafifletildi; merkezi üst panel yönetimiyle sıfır hata ve maksimum işlem hızı sağlandı.

#### 2. 👨‍⚕️ Bireysel Zimmette Harici & Farklı Anabilim Dalı Personel Desteği

- **Yazılabilir ve Akıllı Tamamlamalı Personel Seçimi:** Ekle/Düzenle ve Zimmet Transfer diyaloglarındaki personel açılır kutuları düzenlenebilir (`editable=True`) yapıldı.
- **Harici Hekim / Cerrah Desteği:** Aktif personel listesinde yer almayan cerrahlar, profesörler veya farklı anabilim dallarındaki (Ortopedi, Beyin Cerrahi, Genel Cerrahi vb.) hekimlerin isim ve unvanları serbestçe yazılabilir (Örn: *Prof. Dr. Ahmet Yılmaz (Ortopedi AD)*).
- **Akıllı Tamamlama (`QCompleter`):** Listede kayıtlı personeller harf duyarsız aramayla anında filtrelenirken, harici isim girildiğinde `zimmetli_personel_id = NULL` ve `zimmetli_personel_ad_soyad` metniyle veritabanına ve transfer kütüğüne eksiksiz kaydedilir.
- **Envanter Arama Entegrasyonu:** RKE yönetim ana tablosundaki arama motoruna `zimmetli_personel_ad_soyad` filtresi eklenerek hekim adına göre hızlı sorgulama sağlandı.

#### 3. 🏢 Dinamik Departman & Alt Birim / Servis Hiyerarşisi

- **Radyasyon ve Görüntüleme Alanları Filtresi:** RKE kayıt formundaki departman listesi sadece radyasyonlu ve skopi/cerrahi alanlar (Radyoloji, Nükleer Tıp, Radyasyon Onkolojisi, Cerrahi, Ortopedi, Anestezi vb.) ile sınırlandırıldı.
- **Personel Modülü Standartı:** Personel modülü ile tam uyumlu dinamik "Üst Birim / Departman" ve "Alt Birim / Servis" hiyerarşisi uygulandı. Üst departman seçildiğinde ilgili alt servisler otomatik doldurulur ve serbest metin girişi desteklenir.

#### 4. 🎨 14 Farklı Donanım Türü İçin Genişletilmiş Vektörel SVG Silüet Havuzu

- **Eksiksiz Donanım Yelpazesi:** Önlük, yelek-etek, tiroid ve gonad koruyuculara ek olarak; **Bone (Ön/Arka), Kurşun Eldiven (Ön/Arka), Kurşun Gözlük (Ön/Arka), Masa Koruyucu Paravan (Ön/Arka), Mobil Paravan (Ön/Arka), Tavan Paravanı (Ön/Arka) ve Yüz Siperliği (Ön/Arka)** anatomik vektörel SVG silüetleri oluşturuldu.
- **Platformlar Arası Senkronizasyon:** Hem PySide6 masaüstü kroki tuvaline (`resources/silhouettes/rke/`) hem de web saha/tablet portalına (`web_portal/public/silhouettes/rke/`) aktarıldı.

#### 5. 🎨 Global QSS Standartı, Inline Stil Temizliği & Tabler SVG İkon Senkronizasyonu

- **Inline Style Yasağı:** Proje genelindeki `.ui` XML dosyalarındaki ve Python controller'larındaki hardcoded renk ve stiller temizlenerek merkezi QSS (`resources/dark_theme.qss`, `ui/theme.py`) tasarım sistemine tam uyum sağlandı.
- **Tabler SVG İkon Kütüphanesi:** Eksik olan `clipboard-check.svg`, `checks.svg`, `device-heart-monitor.svg`, `eye-check.svg` vb. ikonlar Tabler kaynaklarından `resources/icons/` altına kopyalandı, `resources.qrc` güncellenerek `resources_rc.py` derlendi.

---

## [4.1.2.6] - 2026-09-05

### ⚡ Sadeleştirilmiş Çift Modlu RKE Muayene Kokpiti (Görsel/Fiziki & Gömülü Skopi Krokisi)

#### 1. 🎛️ Tek Ekranda Çift Modlu Muayene Kokpiti (`RkeMuayeneDialog`)

- **Diyalog İçinde Diyalog Karmaşasına Son:** Önceki çok adımlı akış (Diyalog -> Sekmeler -> Ayrı Kroki Pop-up'ı -> Aktar -> Fotoğraflar) tek ve modern bir arayüzde birleştirildi.
- **Çift Mod Seçici:**
  - **👁️ Görsel & Fiziki Muayene:** Sahada skopi çekilmeden yapılan periyodik fiziksel kontroller için 5 maddelik kontrol listesi (Dikiş/Kumaş, Askı/Toka, Kurşun Blok/Katlanma, Etiket/QR, Hijyen/Sıvı) ve *"⚡ Tüm Kriterleri Sağlam Olarak İşaretle"* kısayolu.
  - **🩻 Skopi / X-Işını (DIN 6857-1):** Gömülü vektörel SVG anatomi silüeti üzerinde doğrudan tıklayarak kusur ekleme, silme, yüz değiştirme (Ön/Arka) ve DIN 6857-1 kural motoru.
- **⚡ 1-Tıkla Kusursuz / Uygun Onayla (`btnHizliOnayla`):** Sağlam koruyucu donanımlar için tüm kontrolleri ve DIN kararını tek dokunuşla tamamlayan 5 saniyelik ultra hızlı kayıt akışı.

#### 2. 📱 Saha Web & Tablet Portalı Senkronizasyonu (`RkeView.tsx`)

- Web/tablet saha asistanına masaüstü ile birebir uyumlu çift mod seçici (Görsel & Fiziki vs Skopi Krokisi) ve hızlı fiziksel kontrol listesi eklendi.

---

## [4.1.2.5] - 2026-09-05

### 🩻 Saha / Tablet QR-Barkod Muayene Asistanı, İnteraktif RKE Kusur Haritası & Modüler Servis Mimarisi

#### 1. 🗺️ İnteraktif RKE Kusur Haritası & DIN 6857-1 Analitiği

- **Vektörel SVG Anatomi Silüetleri:** Kurşun palto/önlük, yelek-etek, tiroid koruyucu ve gonad koruyucu için anatomik ön ve arka yüzey silüetleri (`resources/silhouettes/`) entegre edildi.
- **Koordinat Bazlı Kusur İşaretleme:** Medikal fizikçilerin skopi altında tespit ettiği delik, çatlak, yıpranma, kurşun blok kayması ve askıda katlanma hasarlarını dokunarak veya fareyle silüet üzerinde hassas (x, y) koordinatlarıyla işaretlemesi sağlandı.
- **Otomatik DIN 6857-1 & SKS 6.1 Karar Motoru:** Kritik gonad/tiroid bölgesinde sıfır tolerans (derhal HEK/Hurda), non-kritik alanlarda toplam hasar alanına göre anlık `KULLANIMA_UYGUN` (≤ 5 mm²), `SARTLI_KULLANIM` (5–15 mm²) ve `HEK_HURDAYA_AYIR` (> 15 mm² veya delik) kararları canlı olarak hesaplanır.

#### 2. 📱 Saha ve Tablet Hızlı Muayene Web Portalı (`web_portal`)

- **Mobil & Tablet Saha Asistanı (`SahaLandingView.tsx`):** Medikal fizikçilerin sahada laptop taşımadan tablet veya telefon üzerinden hızlı QR barkod taramasıyla ekipman sorgulayabilmesi ve muayene formuna erişebilmesi sağlandı.
- **Web Tabanlı İnteraktif Kroki Canvas (`RkeKrokiCanvas.tsx`):** HTML5 Canvas üzerinde çoklu kusur ekleme, silme, kritik bölge bayraklama ve hasar alanı özelleştirme yetenekleri geliştirildi.
- **Hızlı Muayene Kayıt API (`server.ts`):** `/api/rke/sorgula`, `/api/rke/muayene-kaydet` ve `/api/rke/siluetler/:ad` REST API uç noktaları oluşturularak sahadan anlık kayıt ve merkezi senkronizasyon tamamlandı.

#### 3. 🖥️ PySide6 Masaüstü Kroki Diyaloğu & Muayene Entegrasyonu

- **Masaüstü Kroki Kontrolcüsü (`RkeKrokiController`):** `rke_kroki_isaretleme_dialog.ui` arayüzü ile SVG render motoru, kusur listesi tablosu ve DIN 6857-1 anlık karar analitik paneli birleştirildi.
- **Muayene Formu Entegrasyonu (`RkeMuayeneDialog`):** Muayene ekranına *"Kroki Üzerinde Kusur İşaretle"* butonu eklendi; krokide belirlenen hasar parametreleri ve kusur JSON haritası formdaki alanlara otomatik aktarılır.

#### 4. 🗄️ PostgreSQL Şema Genişletmesi & Migration (`V20260905_1_rke_kusur_haritasi`)

- **`rke_muayeneler` Tablosu Güncellemesi:** `kusur_haritasi_json`, `tablet_cihaz_bilgisi`, `muayene_konumu`, `kontrol_eden_arayuz` ve `onaylayan_arayuz` sütunları eklendi.
- **Yeni `rke_muayene_kusurlar` İlişkisel Tablosu:** Muayenede işaretlenen her bir kusurun yüzey (ÖN/ARKA), kusur tipi, x/y oranları, hasar alanı (mm²), kritik bölge durumu ve açıklaması ilişkisel tabloda saklanır.

#### 5. 📦 Servis Katmanı Modüler Mimarisi (`app/services/rke/`)

- **Servis Paket Konsolidasyonu:** Dağınık durumdaki RKE servisleri (`rke_service.py`, `rke_kod_generator.py`, `rke_import_service.py`, `rke_saha_service.py`) kanonik `app/services/rke/` paketine taşındı.
- **Geriye Dönük Uyumluluk Shim Katmanı:** Kök seviyedeki servis modülleri re-export shimleri ile korunarak projedeki tüm eski importlar güvenceye alındı.
- **`ServiceRegistry` Entegrasyonu:** `ServiceRegistry` içerisine `rke_service` ve `rke_saha_service` kaydedildi.

---

## [4.1.2.4] - 2026-08-27

### 🗺️ Mimari Kat Planı PDF Desteği, Cihaz Pin Kilitleme & Akıllı Breadcrumb Hızlı Geçiş Menüleri

#### 1. 📄 Mimari Kat Planı / Kroki PDF Desteği & Vektörel Rendering

- **Kayıpsız PDF Desteği (`pypdfium2`):** Ortam Ölçüm Krokileri ve Departman Kat Planları havuzuna PNG/JPG formatlarının yanı sıra standart mimari çizim formatı olan **`.pdf` dosyalarının doğrudan yüklenmesi** ve yüksek çözünürlüklü `QPixmap` olarak sahneye aktarılması sağlandı.
- **Dinamik Format Dönüştürme:** Çok sayfalı ve tek sayfalı PDF planlarının ilk sayfası otomatik işlenerek ölçeklenebilir vektörel netlikte tuvale yerleştirilir.

#### 2. 🩻 Cihaz Yönetimi Kat Planı Veri Yükleme & Kayıt Bütünlüğü

- **Sekme 4 Veri Onarımı (`_load_cihaz_data`):** Veritabanından gelen cihaz verilerindeki düz ve iç içe sözlük alanları (`kroki_id`, `pos_x`, `pos_y`, `kroki_oda_no`, `lisans_no`, `servis_firmasi`) tekilleştirildi; düzenleme modunda kat planı ve oda bilgisinin boş kalması sorunu giderildi.
- **Tip Güvenlikli ComboBox Eşleme (`_set_combo_by_data`):** Sayısal ID ve string veri dönüşümleri normalize edilerek açılır kutuların doğru indekste açılması sağlandı.
- **`QLineEdit` Setter Onarımı:** Lisans açıklama alanındaki metod çağrısı `.setText()` olarak düzeltildi.

#### 3. 🔒 Cihaz Kat Planı Pin Kilitleme / Taşıma Güvenlik Modu

- **Koruma Butonu (`btnCihazPinKilitle`):** Cihaz Ekle/Düzenle ekranındaki 4. Kat Planı araç çubuğuna pin kilitleme butonu entegre edildi (Açılışta varsayılan olarak **Kilitli** gelir).
- **Kaza Önleme Mekanizması:** Kilitli modda haritada serbestçe gezilirken (Zoom/Pan) pinin yanlışlıkla başka odalara sıçraması engellendi. Taşıma modu aktif edildiğinde pin fareyle serbestçe sürüklenip bırakılabilir.

#### 4. 🧭 Üst Araç Çubuğu Breadcrumb Yaşam Döngüsü & Otomatik Gizlenme

- **Ekran Kapanış Temizliği (`_update_app_title_from_subwindow`):** Açık olan tüm alt pencereler kapatıldığında üst breadcrumb navigasyonunun masaüstü arka planında asılı kalması önlendi; içerik sıfırlanıp bileşen otomatik olarak gizlenir (`setVisible(False)`).
- **İmha Olayı Bağlantısı:** Alt pencere kapatma/yok edilme (`subwin.destroyed`) sinyaline dinamik başlık ve breadcrumb güncelleme tetikleyicisi bağlandı.

#### 5. ⚡ Akıllı Breadcrumb Kategori Hızlı Geçiş Açılır Menüleri (Seçenek 3)

- **Hızlı Geçiş Açılır Menüleri (`QMenu`):** Breadcrumb üzerindeki üst modül kategorilerine (*Kalite Yönetimi*, *Cihaz Yönetimi*, *Personel Modülü*, *Nöbet Planları*, *İzin Modülü*, *Sistem Yönetimi*) tıklandığında ilgili kategorinin tüm alt ekranlarını listeleyen şık, karanlık tema uyumlu açılır menü eklendi.
- **Ana Sayfaya Dönüş:** Kök `RADPYS V4` öğesine tıklandığında açık tüm alt pencereler kapatılarak temiz karşılama ekranına dönülmesi sağlandı.

#### 6. 🌐 Web Portal Durum Çubuğu Hata İyileştirmesi

- `app_controller.py` içindeki eski tanımsız değişken referansları (`btn_sync`, `now_str`) temizlenerek Node.js Web Portal durum kontrolü stabilize edildi.

---

## [4.1.2.3] - 2026-08-26

### 📚 Tam Kapsam Docstring Denetimi (%100) & Operasyonel Kullanım Kılavuzu Kod Senkronizasyonu

#### 1. 🔍 %100 Docstring Kapsam Denetimi & AST Doğrulaması

- **1228 Hedef Fonksiyon, Sınıf ve Modül:** Projedeki tüm Python kaynak dosyaları (`app/`, `ui/`, `scratch/`, `scripts/`) PEP 257 ve Google Python Docstring standartlarında denetlendi; eksik/zayıf docstring sayısı **0'a indirildi (%100 kapsama)**.
- **AST Tarayıcıları & Raporlama:** `scripts/docstring_hierarchy_summary.py` ve `scripts/find_missing_docstrings.py` araçları Windows cp1254 terminal karakter kodlamasına dayanıklı hale getirildi.

#### 2. 📖 Kullanım Kılavuzu & SSS Dokümanı Kod Eşitlemesi (`RADPYS_V4_Kullanim_Kilavuzu.md` & `RADPYS_V4_sss.md`)

- **RADPYS Portal Launcher GUI Doğrulaması:** Web portalının başlatma ve durdurma süreçlerinin görsel `RADPYS_Portal_Launcher.exe` aracıyla (port 3000, LAN IP tespiti, `/api/health`, konsol logları) yönetildiği kılavuza işlendi.
- **2 Aşamalı Güvenlikli Veritabanı Sıfırlama:** Fabrika ayarlarına döndürme sürecinin çift kademeli güvenlik mekanizması (1. Aşama: `SIFIRLA` metin onayı, 2. Aşama: `Sudo Şifresi`) kılavuz ve SSS adımlarına aktarıldı.
- **Evrensel Onay Sistemi 4 Kategori Standardizasyonu:** `Onay Bekleyen Görevler` panelindeki aktif 4 kategori (*Nöbet Devirleri*, *Gebelik & İdari Aksiyonlar*, *Nöbet Planları*, *Veri Değişiklikleri*) arayüzle birebir eşitlendi.
- **PostgreSQL & KVKK AES-256 Evrak Kasası Uyumu:** `stored_files` tablosu, PostgreSQL `.dump` yedekleme mimarisi ve sıfırlama prosedürleri güncellendi.
- **Mevzuat & Hiyerarşi İyileştirmeleri:** Şua İzni (0-30 gün) birincil amacı pekiştirildi, SGK emeklilik ayrımı netleştirildi, alt başlık numaralandırmaları (`9.x`, `10.x`, `11.x`, `18.x`) ve tüm iç bağlantılar düzeltildi.

---

## [4.1.2.2] - 2026-08-25

### 🚀 Gelişmiş Otomasyon, Yasal Doz & Şua Uyum Motoru, Akıllı Nöbet İkamesi ve RKE Karar Motoru (Faz 1 - Faz 6)

#### 1. 📥 Toplu İçe Aktarma Akıllı Ön Doğrulama & Çakışma Yönetimi (Faz 1)

- **Dry-Run (Ön Doğrulama) Motoru (`BulkImportService.validate_batch`):** Excel/CSV içe aktarılmadan önce tüm satırları analiz eder; geçerli, mükerrer ve hatalı kayıtları belirler.
- **Akıllı Durum Rozetleri & Filtreleme:** Önizleme tablosunda `🟢 Geçerli`, `🟡 Mükerrer`, `🔴 Hatalı` durum rozetleri ve filtre butonları (`Tümü`, `Yalnızca Hatalılar`, `Yalnızca Mükerrerler`).
- **Hücre Üzerinde Anlık Düzenleme (In-Place Edit):** Hatalı satırların Excel'i yeniden yüklemeden doğrudan tablo üzerinde çift tıklanarak düzeltilebilmesi sağlandı.
- **Çakışma Stratejileri:** *"Mükerrerleri Güncelle (Merge)"* ve *"Mükerrerleri Atla (Skip)"* seçenekleri ile veritabanındaki mevcut kayıtların korunması veya zenginleştirilmesi.

#### 2. 📑 Resmi RD.F43 Doz Araştırma Formu & Dinamik Hesaplama Motoru (Faz 2)

- **Veritabanı Şeması & Migration (`V20260825_1_rdf43_doz_arastirma_formu.py` - v4.8.1.0):** `arastirma_formu` ve `kullanim_detay` tablolarına resmi RD.F43 alanları eklendi.
- **10 İş Günü Yasal Süre Motoru:** NDK 10 iş günü yasal araştırma süresini hafta sonlarını atlayarak hesaplayan rozet sistemi (`add_business_days`, `calculate_business_days_remaining`).
- **Dinamik Doz Hesaplama Sihirbazı:** Doz hızı ($\mu\text{Sv/sa}$) ve unutulma süresi üzerinden tahmini dozu otomatik hesaplayan formül motoru (`calculate_estimated_dose`).
- **Resmi RD.F43 Word Rapor Çıktısı (`ExportService.export_rd_f43_formu`):** NDK ve RADKOR standartlarında 2 sayfalık resmi araştırma formunun `docxtpl` ile dinamik üretilmesi.

#### 3. ⚡ Nöbet Çizelgesi Otomatik İkame Öneri Motoru (Faz 3)

- **Kural & Skorlama Motoru (`NobetCizelgeService.suggest_shift_substitutes`):**
  - İzinli, mazeretli, çakışan nöbeti olan veya 24 saat dinlenme kuralına uymayan personelleri otomatik eler.
  - Aylık hedef çalışma saat açığı, hafta sonu nöbet adaleti ve dinlenme sürelerine göre 0-100 arası uygunluk skoru hesaplar.
- **Sağ Tık Hızlı İkame Menüsü (`NobetCizelgeTableWidget` & `NobetPlanDetayController`):** Çizelge tablosunda boş bir slota sağ tıklandığında en uygun 3 adayı skor ve gerekçesiyle listeler, tek tıkla slota atar ve aylık saatleri günceller.
- **Manuel Form Entegrasyonu:** Nöbet kayıt diyalogunda *"⚡ Uygun İkame Öner"* butonuyla en uygun adayın tek tıkla forma doldurulması.

#### 4. ⏳ Şua İzni Zamanaşımı & Erken Uyarı Paneli (Faz 4)

- **Zamanaşımı Hesaplama Servisi (`IzinService.get_expiring_sua_leaves`):** 31 Aralık son kullanım tarihine göre kullanılmamış Şua izinlerini analiz eder (`expired`, `critical` - son 30 gün, `warning` - son 60 gün).
- **Hakediş Tablosu Rozetleri & Filtre:** Kalan günü olan Şua izinleri için erken uyarı rozetleri (`[⏳ 45g]`, `[🚨 15g]`, `[🚨 YANDI]`) ve *"⏳ Zamanaşımı Yaklaşan Şua İzinleri"* tek tık filtresi eklendi.

#### 5. 🔔 Kalite & Olay Bildirimi 2. Gün NDK Hatırlatıcısı (Faz 5)

- **Otomatik Alarm Motoru (`NotificationService.check_pending_ndk_incidents`):** 3 günlük yasal NDK bildirim süresinde 2. güne girildiğinde (`gecen_gun >= 2`) Admin ve Yönetici rollerine otomatik sistem bildirimi iletir.
- **Süre Aşımı Uyarısı:** 3 günü geçen vakalar için `🚨 NDK BİLDİRİM SÜRESİ DOLDU` alarmı üretir.

#### 6. 🦺 RKE Karar Motoru & Durum Senkronizasyonu (Faz 6)

- **Merkezi Kural Motoru (`RkeService.evaluate_rke_inspection_rules`):** DIN 6857-1, IEC 61331 ve SKS 6.1 standartlarına göre muayene kararlarını tekilleştirdi (Kritik Bölge Sıfır Tolerans $\rightarrow$ HEK, Non-Kritik $>15\text{ mm}^2 \rightarrow$ HEK, $\le 15\text{ mm}^2 \rightarrow$ Şartlı Kullanım, $<0.25\text{ mm Pb} \rightarrow$ Şartlı Kullanım).
- **Masaüstü ve Web API Senkronizasyonu:** Tüm platformlar aynı merkezi karar kuralları üzerinden çalıştırıldı.

---

## [4.1.2.1] - 2026-08-25

### 📊 Kurumsal Raporlama Sistemi, Dinamik Çok Satırlı Kurum Başlıkları & Şablon Yönetimi

#### 1. 📑 4 Yeni Kurumsal Rapor Kataloğu (`REPORT_REGISTRY` & `ReportEngine`)

- **Cihaz Lisans ve Kalibrasyon Takip Raporu (`cihaz_lisans_kalibrasyon`):** NDK lisans bitişleri, periyodik kalite kontrol (QC) ve kalibrasyon takip çizelgesi.
- **Radyasyon Koruyucu Ekipman (RKE) Muayene Çizelgesi (`rke_muayene_cizelgesi`):** DIN 6857-1 / SKS standartlarında kurşun önlük, tiroid ve koruyucu donanımların yıllık muayene ve sağlamlık dökümü.
- **Radyasyon Alanları Ortam Dozu Denetim Raporu (`ortam_dozu_denetim`):** Alan izleme, oda arka plan ve dedektör ölçümlerinin yasal sınır uygunluk denetim raporu.
- **Fiziksel Konum ve Oda Bazlı Envanter Raporu (`fiziksel_konum_envanter`):** Bina, kat ve oda bazında yerleşik cihaz, RKE ve görevli personel envanter dökümü.
- **Otomatik Şablon Senkronizasyonu (`template_updater.py`):** `data/templates/` altındaki 40 şablon (`.docx`, `.xlsx`) otomatik olarak güncellendi ve standartlaştırıldı.

#### 2. 🏛️ Dinamik Kurum Başlığı & Çift Logo Yönetimi (`TemplatesController` & `export_service.py`)

- **Dinamik Kurumsal Marka:** Sabit "Sağlık Bakanlığı" metinleri kaldırılarak veritabanı ayarlarından (`program_ayarlari`) gelen dinamik `BASLIK_1`, `BASLIK_2`, `LOGO_1` ve `LOGO_2` yapısına geçildi.
- **Kategori Bazlı Şablon Filtreleme (`cmbTemplateCategory`):** 40 şablonun kategoriye göre süzülmesi, ofis programında tek tıkla açılması (`Aç`) ve orijinal fabrika ayarlarına sıfırlanması (`Yeniden Oluştur`) sağlandı.
- **Sadeleştirilmiş Tek Merkezli Yönetim:** Kafa karıştıran şablon bazlı override kutuları kaldırılarak tek merkezli, pratik ve anlaşılır genel kurum ayarları mimarisine dönüştürüldü.

#### 3. ✍️ Çok Satırlı Başlık Desteği & Word XML `<w:br/>` Satır Kırılımı

- **Çok Satırlı Giriş Alanları (`QPlainTextEdit`):** `Kurum Başlık 1` ve `Kurum Başlık 2` kutularına Enter tuşuyla sınırsız alt satır (Üniversite / Fakülte / Anabilim Dalı) yazabilme desteği.
- **Word `docxtpl.Listing` Entegrasyonu:** Çok satırlı başlıklardaki `\n` satır kırılımlarının Word ve PDF çıktılarında gerçek XML `<w:br/>` olarak alt alta basılması sağlandı.

#### 4. 🐛 Hata Düzeltmeleri (Bug Fixes)

- **Olay Bildirim Servisi:** `list_olay_lookups` metot uyumsuzluğu giderildi.
- **Tablo Hücreleri Tip Güvenliği:** Tabloya aktarılan `datetime`/`date` nesneleri için güvenli string dönüştürücü (`_format_cell_text`) entegre edilerek `QTableWidgetItem` tip hatası çözüldü.

---

## [4.1.2.0] - 2026-08-23

### 🏥 RADPYS V4 Tıbbi Cihaz, Lisans, Arıza & Bakım ve Kalite Kontrol (QC) Modülü

#### 1. 🗄️ Veri Modeli ve Dinamik Tanımlamalar (Lookuplar)

- **Cihaz Tanımları (`cihaz_tanimlari`):** Marka (16), Kullanım Amacı (9), Cihaz Türü (13), Lisans Durumu (7), Görev/Ünvan (6), Anabilim Dalı (16) seed verileriyle tohumlandı.
- **Master-Detail Veritabanı Mimarisi:** 8 yeni ilişkisel tablo (`cihazlar`, `cihaz_lisanslari`, `cihaz_bakim_garanti`, `cihaz_konumlari`, `cihaz_dokumanlari`, `cihaz_arizalar`, `cihaz_kalite_kontrolleri`, `kurumsal_tesis_lisanslari`) oluşturuldu.
- **Akıllı Cihaz Kod Üretimi (`CihazKodGenerator`):** `[KAYNAK_GRUBU]-[BIRIM_KODU]-[TUR_KODU]-[SIRA_NO]` standardında (örn: `XRAY-ACL-ANJ-01`) otomatik sayaçlı kodlama.

#### 2. 📋 4 Bağımsız Masaüstü Yönetim Ekranı ve Alt Pencereler (MDI Subwindow)

- **Ekran 1: Cihaz & Lisans Envanteri (`CihazYonetimiController` & `cihaz_yonetimi_page.ui`):**
  - Gelişmiş filtreleme (Arama, Kaynak Grubu, Birim, Lisans Durumu, Cihaz Durumu).
  - 8 sütunlu ana envanter tablosu ve dinamik kalan lisans süresi alarm rozetleri (🟢 >60G, 🟡 16-60G, 🟠 0-15G, 🔴 Doldu).
  - 5 sekmeli alt Inspector çekmecesi (Genel Bilgiler, Lisans & Sorumlular, Garanti & Servis, Belgeler, Kroki Sabit Konum).
  - 5 sekmeli tam donanımlı cihaz ekleme/düzenleme formu (`CihazEkleDuzenleController` & `cihaz_ekle_duzenle_dialog.ui`).
  - KVKK Uyumlu Evrak Kasası (`stored_files`) Fernet AES-256 şifreli PDF ve kılavuz yükleme/önizleme.
- **Ekran 2: Arıza, Bakım & Teknik Servis Takibi (`CihazArizaController` & `cihaz_ariza_page.ui`):**
  - KPI Sayaçları (`[Toplam Arıza]`, `[🔴 Açık Arıza]`, `[🟡 Bekleyen]`, `[🟢 Çözülen]`, `[💰 Toplam Maliyet ₺]`).
  - Arıza bildirildiğinde cihaz durumunu otomatik `'Arizali'` statüsüne alma (`CihazArizaBildirDialogController`).
  - Teknik servis müdahalesi, değişen parçalar, X-ışını tüp değişimi ve maliyet ile arızayı kapatıp cihazı tekrar `'Aktif'` duruma döndürme (`CihazArizaCozDialogController`).
- **Ekran 3: Kalite Kontrol (QC) & Kalibrasyon Takibi (`CihazQcController` & `cihaz_qc_page.ui`):**
  - SKS 6.1 ve NDK standartlarında periyodik testler (Günlük, Aylık, Yıllık Kalibrasyon, Zırhlama, Dozimetrik Doğrulama).
  - Test geçerlilik süresi (ay) ve sonraki kontrol tarihine göre otomatik yaklaşan/dolan uyarıları.
  - PDF kalibrasyon raporu yükleme ve tek tıkla sistem varsayılan PDF görüntüleyicisinde açma.
- **Ekran 4: HEK & Hizmet Dışı Cihaz Arşivi (`CihazHekController` & `cihaz_hek_page.ui`):**
  - Ekonomik ömrünü tamamlayan veya devredilen cihazların arşiv sicili ve tek tıkla Hurda / Çıkış Tutanağı üretimi.
  - İhtiyaç halinde cihazı tek tıkla tekrar aktif envantere dahil etme (`reactivate_from_hek`).

#### 3. 📥 Excel İçe ve Dışa Aktarma Motoru (`CihazImportService`)

- Kurumsal envanter Excel şablonlarını esnek sütun eşleştirme ile okuyan, marka/tür/amaç lookuplarını dinamik çözen ve idempotent içe aktarma yapan servis.
- NDK Resmi Denetim Çizelgesi ve filtrelenmiş cihaz envanterini Excel formatında dışa aktarma.

#### 4. 🔔 Otomatik Bildirim & Erken Uyarı Entegrasyonu (`NotificationService`)

- Lisans bitimine 60, 30, 15 ve 0 gün kalan cihazlar için RKS personeline ve Adminlere otomatik bildirim gönderimi.
- Sonraki QC / Kalibrasyon tarihine <=30 gün kalan cihazlar için erken uyarı bildirimleri.
- Mükerrer bildirim engelleme koruması (aynı gün aynı cihaz için mükerrer uyarı üretilmez).

---

### ⚡ Cihaz Envanteri, NDK Lisansları, Kalite Kontrol (QC) ve Arıza & Bakım Yönetimi (Masaüstü UI & Servis Katmanı)

#### 📋 Masaüstü Cihaz & Lisans Yönetim Merkezi (`CihazYonetimiController` - `app_window.ui`)

- **6 Sekmeli Entegre Yönetim Mimarisi:**
  - **1. NDK Lisanslı Radyasyon Cihazları (`tabLisansli`):** Anabilim Dalı, Bina/Oda, NDK Lisans No, Cihaz Cinsi, Marka/Model, Seri No, RKS, Tesis Sorumlusu, Demirbaş No ve dinamik kademeli alarm rozetleri.
  - **2. MR & Ultrason Envanteri (`tabMrUsg`):** İyonlaştırıcı olmayan görüntüleme cihazları ve departman/demirbaş takibi.
  - **3. Kurumsal / Tesis Lisansları (`tabKurumsal`):** Tesis genelini kapsayan ana NDK yetkilendirme lisansı ve vize süreçleri.
  - **4. Kalite Kontrol (QC) & Kalibrasyon (`tabQc`):** SKS 6.1 ve NDK standartlarında periyodik testler (Günlük, Aylık, Yıllık Kalibrasyon, Zırhlama), sonraki test tarihine göre kalan gün uyarıları ve uygunluk kayıtları.
  - **5. Arıza & Bakım Takibi (`tabAriza`):** Otomatik arıza kodu (`ARZ-2026-001`), arıza bildiriminde cihaz statüsünün otomatik `'Arizali'` yapılması, teknik servis müdahale raporu, değişen parça, maliyet (₺) ve arıza çözüldüğünde cihazın otomatik `'Aktif'` duruma döndürülmesi.
  - **6. HEK & Arşiv (`tabHek`):** Hurdaya ayrılan veya devredilen cihazların arşiv sicili.
- **Dinamik Kademeli Erken Uyarı Rozetleri:**
  - 🟢 Normal (>60 Gün)
  - 🟡 Yaklaşıyor (16-60 Gün)
  - 🟠 Kritik (0-15 Gün)
  - 🔴 Süresi Dolan (<0 Gün)
  - 🟣 Başvuruda / Eksik Husus
- **Excel Entegrasyonu & Raporlama:**
  - Kurumsal `Lisanslı Cihazlar 2023 Dosyasının Kopyası.xlsx` 3 sayfasını (`LİSANSLI CİHAZLAR`, `ULTRASON ve MR`, `HEK ve DİĞER HUSUSLAR`) tek tıkla ve idempotent olarak veritabanına aktaran `CihazImportService`.
  - Tablolardaki filtrelenmiş verileri tek tıkla Excel'e aktaran `export_to_excel` mekanizması.
- **5 Adet Modern Dialog Penceresi:**
  - `cihaz_ekle_dialog.ui`: Cihaz künye tanımlama/düzenleme.
  - `cihaz_lisans_dialog.ui`: NDK lisans ve vize sürelerini güncelleme.
  - `cihaz_qc_dialog.ui`: Kalite kontrol & kalibrasyon test kaydı.
  - `cihaz_ariza_dialog.ui`: Arıza bildirimi açma ve aciliyet belirleme.
  - `cihaz_ariza_coz_dialog.ui`: Arıza çözümü, parça değişimi ve servis tutanağı.
- **Ana Gezinti (Sidebar):** Sol menüye `btnCihazYonetimi` butonu eklendi ve alt pencere (subwindow) mimarisine bağlandı.

#### 🗄️ PostgreSQL Veritabanı ve Servis Mimarisi

- **Migrationlar:** `V20260822_3_cihaz_lisans_ve_kalite_kontrol.py` (`v3.17.0`) ve `V20260822_4_cihaz_ariza_takibi.py` (`v3.18.0`).
- **Tablolar:** `cihazlar`, `cihaz_lisanslari`, `cihaz_kalite_kontrolleri`, `cihaz_arizalar`, `kurumsal_tesis_lisanslari`.
- **Servisler:** `CihazService`, `CihazLisansService`, `CihazKalibrasyonService`, `CihazArizaService`, `CihazImportService` ve `ServiceRegistry` entegrasyonu.
- **Testler:** `tests/test_cihaz_service.py` içinde 5 kapsamlı birim ve entegrasyon testi eklendi (%100 Başarılı).

---

## [4.0.2.0] - 2026-08-22

### ☢️ Radyasyon Ortam Dozu, İnteraktif Mimari Plan Krokisi ve SKS 6.1 Alan İzleme Sistemi (Masaüstü & Web Portal)

#### 📋 Masaüstü Ortam Dozu & Kroki Yönetim Merkezi (`OrtamDozuController` - `app_window.ui`)

- **Mimari Plan & Vektörel PDF / Resim Kroki Motoru:**
  - Tek sayfalı yüksek çözünürlüklü mimari plan PDF'leri ile PNG/JPG görsellerini `QGraphicsScene` üzerinde donanım hızlandırmalı olarak sunma.
  - Sınırsız fare tekerleği yakınlaştırması (Wheel Zoom), tuvali tut-sürükle (Pan/Drag) ve tek tıkla *"Ekrana Sığdır"* görünüm sıfırlama.
- **Canlı Pinleme, Taşıma ve Kilitleme:**
  - Plan üzerine sağ tıkla veya butonla yeni ölçüm noktası yerleştirme, sürükle-bırak ile oda koordinatını taşıma ve *"Pinleri Kilitle"* emniyeti.
  - Çift katmanlı parlayan halo (beacon) çemberleri ve koyu lacivert rozet kartları (`KOD • 0.5 µSv/h`).
- **Departman Koduna Duyarlı Otomatik Sayaçlı Nokta Kodu:**
  - Birim koduna göre otomatik artan kurumsal nokta kodu önerisi (Örn: `RAD_ACL_RNT_01`, `TEK_SOR_BT_01`, `RAD_XRAY_01`).
- **SKS 6.1 ve NDK Mevzuat Standartları:**
  - *Denetimli Alan*, *Gözetimli Alan* ve *Halka Açık Alan* için NDK standart uyarı (2.5 / 0.5 / 0.1 µSv/h) ve limit (10.0 / 2.5 / 0.5 µSv/h) eşikleri.
  - Periyodik ölçüm geçmişi, anlık eşik değerlendirmesi (Normal, Uyarı, Limit Aşımı) ve Sağlık Bakanlığı SKS denetimlerine uygun resmi Excel rapor dışa aktarımı (`export_sks_raporu_excel`).

#### 🌐 Web Portalı & Tablet/Mobil Canlı Harita Modülü (`OrtamDozuView.tsx` & `server.ts`)

- **Masaüstüyle %100 Pixel-Perfect Eşleşme:**
  - Görsel en-boy oranını (aspect ratio) koruyan tuval mimarisi sayesinde masaüstünde yerleştirilen pinlerin web planında tam aynı koordinata oturması.
- **Akıcı Fare Gezintisi (Pan & Drag & Wheel Zoom):**
  - Harita üzerinde farenin sol tuşuna basılı tutarak planı kaydırma (Pan/Drag), fare tekerleğiyle %50-%400 arası yakınlaşma ve dokunmatik mobil/tablet desteği.
- **Haritaya Tıklayarak Nokta Ekleme (`+ Yeni Nokta Ekle`):**
  - İşaretleme modu aktifken mimari plan üzerinde tıklanan yerin X/Y koordinatlarını otomatik yakalayan ve departman kodlu sayaçla nokta tanımlayan modal.
- **Pin Üzerinden Tek Tıkla Doz Kaydı:**
  - Haritadaki herhangi bir pine tıklayarak periyodik doz ölçümü girme; anında renk, rozet ve geçmiş tablosu senkronizasyonu.
- **RBAC Yetkilendirme:** Sadece yetkili personellerin (`admin`, `sorumlu`, `rks`, `rso`) erişebildiği güvenli REST API mimarisi.

---

## [4.0.1.0] - 2026-08-22

### 🎓 Hizmet İçi Eğitim, Soru Havuzu, Online Sınav Motoru (LMS) ve Uyum Takip Sistemi

#### 📋 Masaüstü Hizmet İçi Eğitim Yönetim Merkezi (`HizmetIciEgitimController`)

- **5 Kapsamlı Yönetim Sekmesi:**
  - **Eğitim Uyum Raporu (`tabUyum`):** Departman ve personel bazlı yasal eğitim geçerlilik durumları (Aktif, Süresi Yaklaşıyor, Süresi Doldu, Hiç Alınmamış), renkli durum rozetleri ve Excel denetim raporu çıktısı.
  - **Toplu Eğitim Atama (`tabAtama`):** Hedef eğitim, son tamamlama tarihi, birim ve hizmet türü filtreleriyle personellere tek tıkla toplu eğitim atama ve bildirim üretme.
  - **Tamamlama & Belge Girişi (`tabTamamlama`):** Sertifikasyon kayıtları ve KVKK Evrak Kasasında AES-256 Fernet ile şifrelenen resmi katılım belgeleri.
  - **Eğitim Kataloğu (`tabKatalog`):** Kurumsal eğitim türleri, kategori ilişkisi (Lookup), geçerlilik periyotları (ay), sınav baraj puanı (%) ve PDF/Video eğitim materyali yükleme.
  - **Sınav Soruları Havuzu (`tabSorular`):** Çoktan seçmeli (A, B, C, D) soru bankası, canlı kategori filtreleme, otomatik tamamlama (auto-complete) özellikli eğitim arama açılır kutusu.
- **Soru Yönetiminde Hızlı İşlemler:**
  - **Başka Eğitimden Kopyala... :** Mevcut bir eğitimin tüm soru havuzunu yeni eğitime saniyeler içinde aktarma (`copy_sorular_between_egitimler`).
  - **Excel Soru İçe Aktarım & Şablon:** Standart soru yükleme şablonu indirme ve Excel/CSV üzerinden toplu soru aktarımı (`export_soru_sablonu`, `import_sorular_from_file`).

#### 🌐 Web Portalı & Mobil LMS Online Sınav Motoru (Vue / React + PWA)

- **Personel Self-Servis Sınav Portalı (`TrainingModal.vue`):** Personellerin kendilerine atanan eğitimlerin PDF ve video materyallerini tarayıcı üzerinden inceleyip online sınava girebildiği kullanıcı dostu arayüz.
- **Sunucu Tarafı Puanlama & Otomasyon:** İstemciye doğru cevapları ifşa etmeyen güvenli puanlama motoru; baraj puanı geçildiğinde otomatik eğitim tamamlama ve Evrensel Onay Sistemi entegrasyonu.

#### ⚙️ Sistem Tanımları: Hizmet İçi Eğitim Kategorileri Modülü

- **Lookup Entegrasyonu:** Sol sistem tanımları menüsü altına *"Hizmet İçi Eğitim Kategorileri"* yönetim ekranı (`lookup_egitim_kategori.ui`) eklendi.

---

## [4.0.0.0] - 2026-08-21

### 🚀 RADPYS V4 Kurumsal Ana Sürüm: PostgreSQL 14+ Çok Kullanıcılı Mimari, Web Portal PWA, Evrensel Onay Sistemi ve KVKK AES-256 Şifreli Evrak Kasası

#### 🐘 PostgreSQL 14+/16 Kurumsal Veritabanı Mimarisine Geçiş (`psycopg3`)

- **İlişkisel & Eşzamanlı Veritabanı Motoru:** Tek kullanıcılı/yerel SQLite ve SQLCipher altyapısı tamamen kaldırılarak yerine kurumsal, ACID uyumlu, yüksek eşzamanlılık (concurrency) destekleyen **PostgreSQL 14+ (`psycopg3`)** mimarisi entegre edildi.
- **Transaction Sınırları & Havuzlama:** Tüm servis operasyonları `with self.db.transaction() as conn:` yapısıyla atomik hale getirildi; çoklu kullanıcı ortamında veri tutarlılığı güvenceye alındı.
- **SQL Uyumluluk ve Otomatik Adaptasyon (`adapt_sql`):** Standart `?` parametre placeholder'ları PostgreSQL uyumlu `%s` formatına otomatik dönüştürüldü; `datetime('now')` -> `CURRENT_TIMESTAMP` ve `LIMIT/OFFSET` sözdizimi uyarlandı.
- **Veritabanı Bakım Araçları:** PostgreSQL yerel `VACUUM ANALYZE`, `REINDEX DATABASE`, `pg_dump` ve `pg_restore` tam yedekleme/kurtarma mekanizmaları geliştirildi.

#### 🌐 Çok Platformlu Canlı Web Portalı (React + Vite + Tailwind + PWA)

- **Masaüstünden Bağımsız Web Erişimi:** Radyoloji teknisyenleri, hekimler ve idari personelin telefon, tablet veya bilgisayar tarayıcısından erişebildiği tam teşekküllü Web Portalı entegre edildi.
- **PWA (Progressive Web App) Desteği:** Masaüstü ve mobil cihazlarda ana ekrana yüklenebilir (Installable), çevrimdışı önbellek korumalı PWA mimarisi kuruldu.
- **Dinamik Profil ve Self-Servis:** Personelin kendi iletişim bilgilerini, acil durum yakınlarını, eğitim geçmişini, nöbet çizelgesini, izin bakiyelerini ve sağlık muayene takvimini canlı izleyebildiği profil merkezi tamamlandı.
- **Dinamik Eğitim & İzin Veri Akışı:** Sabit listeler kaldırılarak `egitim_turleri` ve `izin_haklari` tabloları üzerinden %100 canlı veritabanı entegrasyonu sağlandı.

#### 🛡️ Evrensel Onay Sistemi (Universal Approval Workflow)

- **Tüm Alt Tablolar Kapsama Alındı:** Personel özlük güncellemelerinin yanı sıra Evrak Kasası (`personel_belgeler`), Eğitimler (`personel_egitimler`), Sertifikalar (`personel_sertifikalar`), Önceki Hizmetler (`personel_hizmetler`), Çalışma Kısıtı/Muafiyetler (`personel_calisma_kisitlari`), Gebelik/Süt İzni (`personel_gebelik_takip`), Cihaz Zimmet (`personel_cihaz_zimmet`) ve RGS Görevlendirme talepleri tam onay motoruna bağlandı.
- **Silme Taleplerinin Onay Kuyruğuna Yönlendirilmesi:** Standart personelin Web Portaldan yaptığı eğitim, evrak veya sağlık muayenesi silme istekleri veritabanından doğrudan silinmeyip `islem_tipi = 'silme'` ile onay kuyruğuna alınır (`Silme Onayı Bekliyor`).
- **Görsel Diff & Karşılaştırma Diyaloğu (`DiffDialog`):** Masaüstü yönetim panelinde eski veri ile talep edilen yeni veriyi yan yana kıyaslayan, teknik DB kolonları yerine anlaşılır Türkçe etiketler (`FIELD_LABELS_TR`) içeren görsel diff penceresi geliştirildi.
- **Hedef Servis Otomasyonu:** Onaylanan talepler doğrudan ilgili domain servisi üzerinden yetkilendirilerek PostgreSQL hedef tablolarına atomik transaction ile işlenir.

#### 🔒 KVKK AES-256 Fernet Şifreli Evrak Kasası & Web Yükleme Köprüsü (`stored_files`)

- **Geçici Yükleme ➔ Şifreli Kasa Onay Köprüsü:** Web portaldan yüklenen evraklar geçici staging alanına kaydedilir; yönetici onayladığı anda dosya **AES-256 Fernet** ile şifrelenerek PostgreSQL `stored_files` tablosuna aktarılır ve `file-uuid` anahtarına dönüştürülür.
- **Tarayıcıda Doğrudan Açma (Inline Preview):** Belgeler indirilmek yerine `Content-Disposition: inline` ve uygun MIME tipleriyle tarayıcının yerleşik PDF/Resim görüntüleyicisinde doğrudan yeni sekmede açılır.
- **Yetki Bazlı Şifre Çözme & Görüntüleme:** Belgeler yalnızca oturum açmış ve yetkili aktörler tarafından çalışma zamanında anlık deşifre edilerek güvenle sunulur.

#### ⏱️ Web Portal Güvenli Oturum Yönetimi & URL Token Desteği

- **15 Dakikalık Oturum Kuralı:** Güvenlik standartlarına uygun 15 dakikalık oturum süresi yapılandırıldı; oturum süresi yalnızca kullanıcı tekrar giriş yaptığında güncellenir.
- **Kalıcı Oturum Depolama (`sessions.json`):** Sunucu kapansa veya yeniden başlasa dahi kullanıcıların aktif 15 dakikalık oturumları diskte korunur.
- **URL Query Token Yetkilendirmesi:** Yeni sekmede açılan belge linklerinde oturum kaybını önlemek için `?token=...` desteği entegre edildi.

#### 📊 Dinamik İzin Hakları & Gerçek Zamanlı Bakiye Hesaplama

- **Otomatik Bakiye Hesaplama Motoru:** Sahte placeholder değerler kaldırılarak, personelin hizmet yılına göre `izin_haklari` tablosundan hakedilen, devreden, kullanılan ve kalan izin günleri formülle anlık hesaplandı.
- **Şua & Radyasyon İzni Entegrasyonu:** Radyasyon çalışanlarının yasal yıllık 30 günlük şua izni hakları ve yıllık izinleri ayrıştırıldı.

#### 📄 docxtpl Jinja2 Kurumsal Matbu Evrak Motoru

- **Word (.docx) Rapor Şablonları:** Ham XML manipülasyonu yerine `docxtpl` (`python-docx-template`) kütüphanesi entegre edildi.
- **Dinamik Görsel & Veri Enjeksiyonu:** Kurum logoları `InlineImage` API'si ile şablonlara yerleştirilerek resmi radyasyon güvenliği tutanakları ve izin formları üretildi.

#### 🔐 Kademeli Lisans & Yönetici Modu

- **15 ve 3 Gün Erken Uyarı:** Lisans süresi dolumuna 15 gün ve 3 gün kala kademeli uyarı mekanizması eklendi.
- **Lisans Aşımında Yönetici Aktivasyon Ekranı:** Lisans bittiğinde normal personel kilitlenirken, yöneticiler doğrudan lisans aktivasyon ekranına yönlendirilir.

---

## [3.0.0.0 - 3.9.0.2] - 2026-07-17 / 2026-08-15

### 🏆 RADPYS V4 Kararlı Sürüm Serisi ve Evrimsel Gelişim (Lite Scope ➔ Kurumsal Web Entegrasyonu)

RADPYS V4 geliştirme döngüsü boyunca; yerel SQLite/SQLCipher mimarisinde yüksek kararlılık ve güvenlik sağlayan **Lite Dönüşümü**, kriptografik anahtar yönetimi, akıllı nöbet planlama algoritması, `docxtpl` kurumsal raporlama ve çok platformlu **Web Portalı & REST API** altyapısı tamamlanmıştır. Tüm bu geliştirmeler aşağıdaki 7 ana modüler çatı altında toplanmıştır:

---

#### 1. 🌐 Web Portalı, REST API Servisi ve PWA Altyapısı

- **Çok Kullanıcılı Web Mimarisi:** Masaüstü uygulamasından bağımsız çalışan, Express.js + React (Vite + TailwindCSS) mimarisinde Web Portalı (`web_portal`) geliştirildi. Yerel ağ (LAN/Wi-Fi), Cloudflare Tunnel, Nginx Reverse Proxy ve HTTPS arkasında dış internete açık çalışma desteği sağlandı.
- **Güvenli Oturum & Kalıcı Depolama:** 15 dakikalık oturum standardı getirildi; `data/sessions.json` ile sunucu yeniden başlasa bile aktif oturumların korunması sağlandı. Yeni sekmede belge açma için URL Query Token (`?token=...`) yetkilendirmesi eklendi.
- **İlk Giriş Şifre Yenileme:** İlk kez giriş yapan personel için (`ilkGiris === 1`) `/api/auth/change-password` endpoint'i ve özel ilk giriş şifre değiştirme ekranı kuruldu; şifreler `pbkdf2_sha256` standardında hash'lendi.
- **Saha Formları & Dinamik Kısıtlar:** Nöbet Devir Talebi (`ShiftChangeForm`), Anlık Olay & DÖF Bildirimi (`IncidentReportForm`) ve İstek & Mazeret (`PersonnelRequestForm`) formları entegre edildi. Haftalık ders günleri seçimi ve kısıt tipleri dinamikleştirildi.
- **Web GUI Launcher & Asenkron Servis:** Kullanıcıların terminal kullanmadan tek pencereden web sunucusunu yönetebildiği PySide6 GUI başlatıcı (`portal_launcher.py`, `RADPYS_Portal_Launcher.exe`), asenkron health-check pingleme ve Windows başlangıç entegrasyonu sağlandı.
- **Veri Klasörü & Thread-Safe Mutex:** Web verileri `web_portal/data/` altında toplandı; `saveDatabase` işlemlerine async mutex (`dbMutex`) ve atomik `.tmp` -> `.bak` dosya yazım koruması eklendi.

#### 2. 🔐 Kriptografik Güvenlik, Anahtar Kasası (Key Manager) ve SQLCipher Şifreleme

- **Dosya Düzeyinde AES-256 SQLCipher:** `radpys.db` veritabanı dosya düzeyinde 256-bit AES ile şifrelendi; düz metin SQLite veritabanlarından şifreli formata otomatik kayıpsız geçiş (auto-migration) sağlandı.
- **DPAPI Windows Oturum Kasası & Donanım Türetimi (`KeyManager`):** Şifreleme anahtarları Windows DPAPI ile korundu; Windows SID veya kullanıcı profili değişimlerinde donanım özetinden (`_derive_hardware_key`) anahtar üreterek çökmeyi önleyen otomatik kurtarma (self-healing) mimarisi kuruldu.
- **Grafiksel Anahtar Kasası (`KeyManagementDialog`):** Yöneticilerin 256-bit AES anahtarlarını yönetebildiği, Sudo doğrulamalı, metin yedeği (`radpys_encryption_keys.txt`) alabilen ve afet kurtarma anahtar enjeksiyonu yapabilen grafiksel kasa arayüzü geliştirildi.
- **Senkronize Çift DB Bakımı & Şifresiz İhraç:** `radpys.db` ve `files.db` veritabanlarında eşzamanlı çalışan bakım araçları (`VACUUM`, `INTEGRITY CHECK`, `REINDEX`) ile kurumdan ayrılma veya veri taşıma durumları için şifresiz ham SQLite ZIP ihraç paketi (`on_export_unencrypted`) geliştirildi.
- **Ed25519 Asimetrik Dijital İmzalı Lisanslama:** Simetrik SHA-256 tuz yapısı yerine Ed25519 açık anahtarlı asimetrik imza standardı (`LK-AS-...`), Cihaz Kimliği (`Machine ID: RP-XXXX-...`) üretimi ve bağımsız satıcı lisans jeneratörü kuruldu.

#### 3. 📅 Nöbet Motoru, Akıllı Zamanlayıcı (Scheduler) ve Yasal Kısıtlar

- **Tekil Kısıt Hiyerarşisi:** Kısıt öncelik sırası netleştirildi (*Birim Kuralları > Vardiya Kısıtları > Temel Ayarlar*). Hafta sonu ve resmi bayram nöbetleri birbirinden tamamen ayrı kurallarla değerlendirildi.
- **Kişiye Özel Yasal Muafiyet Otomasyonları:**
  - *Yasal Emzirme İzni:* İlk 6 ay (-3s), ikinci 6 ay (-1.5s) ve 2. yıl (gece nöbeti yasağı) olmak üzere 3 aşamalı otomatik kısıt zinciri.
  - *Gebelik Muafiyeti:* 24. haftadan itibaren gece nöbeti ve radyasyon alanı muafiyeti kısıtlaması.
  - *Sendika Muafiyeti:* Memur (haftalık 4s) ve İşçi (haftalık 2s) hizmet sınıflarına göre otomatik mesai saati indirimi.
  - *Yaş ve Kıdem Muafiyeti:* Gece veya hafta sonu muafiyet seçeneği.
- **Tekrarlayan Eğitim Kısıtı & Sömestr Revizyonu:** Personelin haftalık ders günleri (1..7) kısıt motoruna katı engelleme (strict exclusion) olarak bağlandı; sömestr ortası ders programı revizyonu (`NobetEgitimRevizyonDialog`) eklendi.
- **Fazla Mesai Limitlerinin Ayrıştırılması:** `fm_off` ve `personel_max_fazla_mesai_saat` limitleri yalnızca ilgili kısıt tiplerine bağlandı; gebelik/emzirme kurallarının fazla mesai hakkını ezmesi engellendi.
- **Çoklu Plan Yayını & Dinamik Devir:** Nöbet planları yayına alındığında tüm birimlerin planları (`schedule.json`) web portala ihraç edildi; devralan personelin yayındaki nöbetleri seçebilmesi sağlandı.

#### 4. 📄 Kurumsal Rapor Merkezi, docxtpl Jinja2 Word Şablonları ve Dinamik Eşleme

- **Dinamik Başlık & Konum Eşleme (Dynamic Header Mapping):** Excel şablonlarında (`.xlsx`) başlık satırı otomatik okunup normalize edilerek veri sütun sırasından bağımsız doğru başlığın altına dinamik yazıldı; şablon dosyaları salt-okunur güvenceye alındı.
- **`docxtpl` Jinja2 Word Şablon Motoru:** Ham XML manipülasyonu yerine `docxtpl` (`python-docx-template`) kütüphanesi entegre edildi; kurum logoları `InlineImage` API'si ile dinamik boyutlandırılarak şablonlara gömüldü.
- **5 Ana Kurumsal Rapor Kataloğu:** Genişletilmiş sütun tanımlarıyla *Sağlık Muayene (22 sütun)*, *Eğitim Durum*, *Dozimetre Ölçüm (21 sütun)*, *İzin Bakiye (14 sütun)* ve yeni *Kimlik & İletişim Bilgileri Raporu* tamamlandı.
- **KVKK Muafiyet Kapsamı (`KvkkExemptScope`):** Rapor çıktılarında yetkili personelin isim ve kimlik bilgilerinin sansürlenmesini önleyen güvenli bağlam ve tam audit log kaydı sağlandı.

#### 5. 🛡️ KVKK Özel Kategori Veri Güvenliği, Sağlık Muayene Revizyonu ve Çökme Raporlama

- **Sağlık Verileri KVKK Özel Kategori Güvenliği:** Cumhurbaşkanlığı Kararı 7077 uyarınca radyasyon çalışanları için yıllık 12 ay muayene periyodu sabitlendi. Muayene revizyon logları (`saglik_muayene_revizyon_log`), audit erişim takibi (`saglik_erisim_log`), Fernet şifreli evrak depolama ve yetkisiz rollere klinik tanı maskelemesi (`"—"`) uygulandı.
- **Etkileşim Günlüğünde KVKK Maskeleme:** `interaction_logger.py` günlüğünde hassas kişisel veriler yerine yalnızca karakter uzunlukları (`new_value_len`) ve doluluk durumları loglandı.
- **Global Çökme Yakalayıcı (`CrashDialog`):** `sys.excepthook` ile yakalanmamış hatalarda koyu tema uyumlu hata bildirim diyaloğu, hata izi kopyalama ve tek tıkla destek log paketi (`radpys_destek_log.zip`) üretimi sağlandı.

#### 6. 🎨 Arayüz Modernizasyonu, Dark Fusion Teması ve Tabler SVG İkon Standardı

- **Kurumsal İkon Standardı:** Arayüzlerdeki tüm emojiler temizlenerek 2.800+ parçalık Tabler Outline SVG vektörel ikon kütüphanesi PySide6 `QIcon` nesnelerine bağlandı.
- **Web Portalı Windows 11 Dark Fusion Teması:** Web portalındaki 12 dashboard bileşeni, form sihirbazları ve veri kartları mat/akrilik Dark Fusion (`bg-slate-900/95`) tasarımına dönüştürüldü; resmi kurum amblemleri entegre edildi.
- **UI/Controller Katman Ayrımı (`AGENTS.md`):** Controller dosyalarındaki tüm programatik UI kodları temizlenerek `.ui` (XML) şablonlarına aktarıldı.
- **4 Haneli Sürümleme:** Sürüm mimarisi `MAJOR.MINOR.PATCH.BUILD` (örn: `3.8.6.2`) standardına kavuşturuldu.

#### 7. ⚡ Performans, Eşzamanlılık ve Kararlılık İyileştirmeleri

- **Toplu İçe Aktarımda Deadlock Çözümü & 500x Hızlanma:** Veritabanı kilidi `threading.RLock()` yapıldı; 50'şerli transaction paketleme ve `QCoreApplication.processEvents` ile donmasız ve 500 kat daha hızlı Excel/CSV içe aktarımı sağlandı.
- **SQLite 999 Parametre Güvenliği:** Toplu sorgularda parametreler 900'lük gruplar halinde (`_fetch_in_chunks`) parçalanarak çökme riskleri ortadan kaldırıldı.
- **Lite Scope Dönüşümü:** SQLite'ın çok kullanıcılı ağ paylaşımlarındaki kilitlenme risklerini önlemek için ağır LMS ve doküman portalları ayıklanarak çekirdek operasyonel modüller maksimum kararlılığa ulaştırıldı.
