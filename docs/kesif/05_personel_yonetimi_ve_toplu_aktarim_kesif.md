# 05. Personel Yönetimi ve Toplu Aktarım — Teknik Keşif Raporu

**Modül Kodu:** `05_personel_yonetimi_ve_toplu_aktarim`  
**İlgili UI Dosyaları:** `ui/pages/personel/personel_listesi_page.ui`, `ui/pages/personel/personel_detay_page.ui`, `ui/pages/personel/personel_ekle_dialog.ui`, `ui/pages/personel/isten_ayrilis_dialog.ui`, `ui/pages/admin/system/import_page.ui`  
**İlgili Python Controller ve Servisleri:** `ui/controllers/personel/personel_list_controller.py`, `ui/controllers/personel/personel_detail_controller.py`, `ui/controllers/personel/personel_add_controller.py`, `ui/controllers/personel/_personel_form_base.py`, `ui/controllers/admin/system/import_controller.py`, `app/services/personel/personel_service.py`  
**Web Portal Karşılığı:** `web_portal/src/routes/personel.routes.ts`, `web_portal/src/routes/profile.routes.ts`  
**Tarih:** 2026-09-24  
**Durum:** Keşif Tamamlandı / Kullanıcı Onayı Bekleniyor  

---

## A. Modülün Özeti ve Görevleri

Bu modül; radyoloji, nükleer tıp ve radyasyon onkolojisi departmanlarındaki sağlık çalışanlarının özlük kartlarını, lisans kotalarını, çalışma kısıtlarını (gebelik, emzirme), şifreli evrak kasasını, Excel tabanlı toplu veri transferini ve kurumdan ayrılış halinde mevzuat gereği 30 yıl saklanması zorunlu KVKK arşiv paketini yönetir.

### Temel İş Akışları:
1. **Personel Listesi ve Canlı Operasyon Kokpiti:**
   - 10 sütunlu tablo; TC ve Soyad sütunları gizlenerek Ad sütununda baş harflerden oluşan avatar, tam ad ve sicil no kombine edilir (`PersonelAvatarDelegate`).
   - Durum ve Hizmet Tipi sütunlarında renkli rozetler (badge) gösterilir (`BadgeDelegate`).
   - Canlı KPI sayaçları: Toplam Personel, Aktif Çalışan, Radyasyon Görevlisi (RGS) ve Geçici/Stajyer.
   - Sayfalama kontrolü (50, 100, 200, 500, Tümü; varsayılan 100).
   - Dinamik filtreler (Durum, Departman, Hizmet Sınıfı, Doz Kategorisi) ve debounced (gecikmeli) arama kutusu.
   - Kurumsal antetli rapor motoru ile yazdırma (`btnPrint`) ve PDF dışa aktarım (`btnExportPdf`).
2. **5 Adımlı Yeni Personel Ekleme Sihirbazı:**
   - **Adım 1 (Kimlik):** TC Kimlik (11 hane validator + blur anında mükerrerlik sorgusu), Ad, Soyad, Cinsiyet, Medeni Hal, Doğum Tarihi/Yeri, Anne/Baba Adı, Kan Grubu, Fotoğraf yükleme (cinsiyete göre akıllı varsayılan avatar).
   - **Adım 2 (İletişim):** Telefon maskesi `(999) 999-99-99`, e-posta formatı, İl/İlçe autocomplete, Acil Durum Yakınları listesi.
   - **Adım 3 (Özlük):** Sicil No (otomatik büyük harf), Hizmet Sınıfı, Departman, Unvan, Görev Yeri (serbest metin veya alt departman), İşe Giriş Tarihi, Durum.
   - **Adım 4 (Eğitim):** Mezuniyetler, okullar, bölümler ve NDK/TAEK Radyasyon Güvenliği eğitim sertifikaları.
   - **Adım 5 (Belgeler):** AES-256 Fernet şifreli evrak kasasına yükleme (Diploma, Nüfus Cüzdanı, İSG Raporu vb.).
   - **Lisans Denetimi:** Aktif personel eklenirken `license_service.check_personel_limit()` kotayı denetler; aşımda kayıt engellenir.
   - **Otomatik Kullanıcı Hesabı:** Sistem parolası politikasına uygun (min 16 karakter, karmaşık) hesap oluşturulur.
   - **Evrensel Onay Kuyruğu:** Ekleyen kullanıcının rolü onay gerektiriyorsa (`onay_gerektirir=1`), kayıt doğrudan yazılmaz; `degisiklik_talepleri` kuyruğuna düşer.
3. **Personel Detay Kartı (10 Sekmeli Özlük Kokpiti):**
   - Sol navigasyondan erişilen 10 kategori: Genel & İletişim, Kurumsal Bilgiler, Eğitim Kayıtları, İzin Bilgileri, Sağlık Muayeneleri, Dozimetre Takip, Personel Belgeleri, Nöbet Geçmişi, Değişiklik Geçmişi (Audit Trail) ve İşten Ayrılış.
   - Form kirlilik takibi (`_setup_dirty_tracking`): Kaydedilmemiş değişiklik varsa çıkışta onay kutusu çıkar.
4. **Merkezi Toplu Veri Aktarım Sihirbazı (Import Wizard):**
   - 1. Dosya Seçimi (.xlsx/.xls/.csv sürükle-bırak) ve İçe Aktarma Modu (16 farklı mod).
   - 2. Kolon Eşleme (Alias akıllı kolon eşleştirme).
   - 3. Tanımsız Değer Çözümleme (Lookup Resolver): Sistemde olmayan departman, unvan vb. verileri eşleştirme veya tek tıkla ekleme.
   - 4. Önizleme ve Dry-Run Validasyon (Geçerli/Mükerrer/Hatalı badge'leri, hücre içi canlı düzenleme, çakışma stratejisi: `Mükerrerleri Güncelle` vs `Atla`).
   - 5. Asenkron Aktarım Worker'ı, Hata Raporu ve Otomatik Üretilen Kullanıcı Giriş Kimlikleri (`tblCredentialsLog`, panoya kopyalama ve TXT indirme).
5. **İşten Ayrılış ve Yasal KVKK Arşivleme:**
   - Personel ayrılış tarihi, sebebi ve notları kaydedilir.
   - **Mevzuat Kilitleri:**
     - Personelin üzerinde zimmetli kurşun koruyucu donanım (RKE) varsa pasife alınamaz (`RED-AYRILIS-RKE-ZIMMET`).
     - Personelin teslim edilmemiş aktif dozimetresi varsa onay uyarısı verilir (`RED-AYRILIS-DOZIMETRE-IADE`).
     - Personel aktif Radyasyon Güvenliği Sorumlusu (RGS) ise görevlendirmesi otomatik sonlandırılır (`RED-AYRILIS-RGS-ACTIVE`).
   - **KVKK & Radyasyon Arşiv Paketi (`kvkk_arsiv_{tc}.zip`):** NDK Madde 19 / EURATOM gereği 30 yıl saklanması gereken dozimetre geçmişi, İSG 30 yıl sağlık muayeneleri, 10 yıl eğitim/özlük evrakları ve KVKK Madde 11 veri iade paketi tek tıkla şifreli ZIP olarak dışa aktarılır.
6. **Gebelik Bildirimi ve Nöbet Muafiyet Otomasyonu:**
   - Kadın personel için gebelik kaydı girildiğinde fazla mesai saati sıfırlanır, `nobet_cizelgesi` üzerindeki tüm gece nöbetleri (>= 16:00 veya < 06:00) otomatik iptal edilir.
   - Doğum kaydedildiğinde 1 yıllık yasal süt izni / emzirme kısıtı otomatik başlatılır.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Ekran Kontrolü / Fonksiyon) | NEDEN? (Kullanım Amacı) | NEREDE? (Ekran Konumu) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Hangi Durumda) | KİM? (Yetkili Kitle) | DURUM (Kod Karşılığı) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Personel Tablosu** (`personelTable`) | Personel listesini avatar, sicil, unvan ve durum rozetleriyle izlemek. | Personel Listesi Ana Gövde | Sütun bazlı sıralanabilir; çift tıklama ile detay kartını, sağ tıklama ile bağlam menüsünü açar. | Liste açıldığında veya arama yapıldığında. | Tüm Yetkili Kullanıcılar | `PersonelListController.personelTable` |
| **Arama Kutusu** (`searchInput`) | Binlerce personel arasından anında arama yapmak. | Filtre Çubuğu | 300 ms gecikmeli (debounce) filtre tetikler; ad, soyad, TC, sicil ve telefon tarar. | Anlık veri aramalarında. | Tüm Kullanıcılar | `_search_timer` -> `_load_data` |
| **Durum Filtresi** (`durumFilter`) | Aktif, pasif, emekli veya istifa durumundaki personelleri ayıklamak. | Filtre Çubuğu | Varsayılan olarak "Aktif" açılır; seçildiğinde sayfayı sıfırlayıp yeniden yükler. | Durum bazlı incelemelerde. | Tüm Kullanıcılar | `durumFilter.currentIndexChanged` |
| **Departman & Hizmet Sınıfı Filtresi** | Belirli bir kliniğe veya meslek grubuna odaklanmak. | Filtre Çubuğu | Autocomplete ComboBox; seçilen departman veya hizmet sınıfına göre filtreler. | Klinik bazlı filtrelemede. | Tüm Kullanıcılar | `departmanFilter`, `hizmetSinifiFilter` |
| **KPI Sayaç Kartları** (`kpiContainer`) | Kurumdaki personel sayılarını ve radyasyon risk gruplarını özetlemek. | Ekranın Üst Kısmı | Toplam, Aktif, RGS ve Geçici sayılarını veritabanından çekip gösterir. | Her veri yüklemesinde güncellenir. | Tüm Kullanıcılar | `_apply_kpi_summary` |
| **Personel Ekle Butonu** (`addButton`) | Yeni personel özlük kaydı oluşturmak. | Üst Araç Çubuğu (Sol) | 5 adımlı sihirbaz diyaloğunu açar; lisans kotasını denetler. | Yeni personel işe başladığında. | Yalnızca Yönetici / İK | `addButton.clicked` -> `PersonelAddController` |
| **Ayrıntı / Düzenle Butonu** (`detailButton`) | Seçili personelin özlük kartını açıp düzenlemek. | Üst Araç Çubuğu | Tabloda satır seçildiğinde aktifleşir; 10 sekmeli detay kartını açar. | Personel bilgileri incelenirken. | Yetkili Roller | `detailButton.clicked` -> `PersonelDetailController` |
| **Toplu Import Butonu** (`bulkImportButton`) | Excel'den yüzlerce personeli tek seferde sisteme aktarmak. | Üst Araç Çubuğu | Merkezi içe aktarım sihirbazını "personel" modunda açar ve dosya seçiciyi başlatır. | Toplu veri girişinde / sistem kurulumunda. | Sistem Yöneticisi | `bulkImportButton.clicked` -> `open_import_page` |
| **Listeyi Yazdır Butonu** (`btnPrint`) | Filtrelenmiş personel listesini fiziki çıktıya göndermek. | Üst Araç Çubuğu | Kurumsal antetli HTML şablonu oluşturup sistem yazdırma penceresini açar. | Resmi denetim ve liste alımlarında. | İhracat Yetkisi Olanlar | `_on_print` |
| **PDF'e Aktar Butonu** (`btnExportPdf`) | Listeyi resmi PDF formatında kaydetmek. | Üst Araç Çubuğu | Rapor motoru (`report_engine`) üzerinden vektörel PDF dosyası üretir. | Rapor arşivlemede. | İhracat Yetkisi Olanlar | `_on_export_pdf` |
| **Yenile Butonu** (`refreshButton`) | Veritabanından güncel verileri çekmek. | Üst Araç Çubuğu | Arka plan iş parçacığıyla (`_PersonelDataLoaderWorker`) listeyi yeniler. | Harici değişikliklerin ardından. | Tüm Kullanıcılar | `refreshButton.clicked` -> `_load_data` |
| **Filtre Aç/Kapat Butonu** (`btnToggleFilters`) | Tablo alanını genişletmek için filtre alanını gizlemek. | Başlık Çubuğu | `filterFrame` görünürlüğünü toggle eder; durumunu hatırlar. | Ekran alanı daraldığında. | Tüm Kullanıcılar | `setup_filter_toggle` |
| **Pencere Kapat Butonu** (`btnScreenClose`) | Sekmeyi/pencereyi kapatmak. | Başlık Çubuğu (Sağ) | **HAYALET BİLEŞEN:** UI dosyasında mevcuttur ancak controller'da `clicked` sinyali bağlanmamıştır! | Pencere kapatılmak istendiğinde. | Tüm Kullanıcılar | ⚠️ **HAYALET BİLEŞEN** |
| **Sayfalama Kontrolleri** (`pageSizeCombo`, `nextPageButton` vb.) | Büyük veri setlerinde performans kaybını önlemek. | Tablo Altı | 50/100/200/500/Tümü seçenekleri; sayfa indeksine göre SQL LIMIT/OFFSET çalıştırır. | Çoklu sayfa gezintisinde. | Tüm Kullanıcılar | `_setup_pagination` |
| **İşten Ayrılış Kaydet** (`btnAyrilisKaydet`) | Personeli pasife/ayrılışa geçirmek. | Detay Kartı > İşten Ayrılış | RKE zimmet ve dozimetre kontrollerini doğrular; personeli pasife alır; RGS görevini kapatır. | Personel istifa, emeklilik vb. ayrılışında. | Süper Yönetici / İK | `_on_save_ayrilis` |
| **KVKK Arşiv İndir** (`btnKvkkExportZip`) | 30 yıllık mevzuat arşiv paketini indirmek. | Detay Kartı > İşten Ayrılış | Dozimetre, sağlık, eğitim ve özlük evraklarını toplayıp şifreli ZIP üretir. | İşten ayrılış anında veya teftişte. | Sistem Yöneticisi | `_on_export_kvkk_zip` |

---

## C. Mantık ve Kısıt Soruları (Kullanıcı Onayına Sunulacak Kararlar)

1. **Soru 1 (Hayalet Bileşen `btnScreenClose`):**  
   `personel_listesi_page.ui` başlık çubuğunda sağ üstte bulunan `btnScreenClose` (Pencereyi Kapat) butonu, `personel_list_controller.py` içinde hiçbir sinyale bağlanmamıştır (tıklanınca tepki vermez). Bu butonu `self.close()` fonksiyonuna bağlayarak çalışır hale getirelim mi, yoksa MDI sekmeli yapıda zaten sekme kapatma çarpısı bulunduğu için arayüzden kaldıralım mı?
2. **Soru 2 (Lisans Personel Kotası Uyarısı):**  
   Personel eklenirken ve toplu Excel aktarımında personelin durumu `Aktif` ise, sistem `license_service.check_personel_limit()` fonksiyonuyla kurumun lisanslı personel kotasını denetler. Kota dolmuşsa işlem engellenir. Bu katı lisans kısıtını kılavuzda bir "Dikkat / Uyarı Kutusu" olarak vurgulayalım mı?
3. **Soru 3 (İşten Ayrılışta RKE Zimmet ve Dozimetre Emniyet Kilidi):**  
   Personel işten ayrılışa geçirilirken üzerinde zimmetli kurşun ekipman (RKE) varsa sistem kesinlikle pasife almıyor (`RED-AYRILIS-RKE-ZIMMET`). Üzerinde teslim edilmemiş aktif dozimetre varsa sistem kullanıcıdan teyit onayı istiyor (`RED-AYRILIS-DOZIMETRE-IADE`). Bu iki nükleer mevzuat güvenlik kilidini kılavuzda "Mevzuat Zorunlulukları" tablosu olarak öne çıkaralım mı?
4. **Soru 4 (Gebelik & Gece Nöbeti / Emzirme Otomasyonu):**  
   Kadın personel gebelik bildirdiğinde, sistem çalışma kısıtı ekleyip fazla mesaisini sıfırlamakta ve nöbet çizelgesindeki tüm gece nöbetlerini otomatik iptal etmektedir. Doğum kaydedildiğinde ise 1 yıllık yasal süt izni kısıtı otomatik başlamaktadır. Bu otomasyonu kılavuzda "Sağlık Bakanlığı & NDK Korumalı Gebe/Emziren Personel Protokolü" olarak detaylandıralım mı?

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

| Modül Fonksiyonu | Masaüstü İstemci (PySide6) | Web Portalı (React / Node.js) | Hibrit Mimari Notu |
| :--- | :--- | :--- | :--- |
| **Personel Listesi** | Tam yetkili tablo, sayfalama, filtreleme, yazdırma, PDF ihracı. | Yalnızca lookup (`GET /api/personel/list`) olarak servis edilir. | Liste yönetimi yalnızca masaüstünde açıktır. |
| **Yeni Personel / Düzenleme** | 5 adımlı sihirbaz, evrak kasası yükleme, lisans kotası kontrolü. | Web portalda yeni personel oluşturma ekranı yoktur. | İdari işlemler masaüstü ayrıcalığındadır. |
| **Toplu Excel İçe Aktarım** | 5 adımlı sihirbaz (Dry-Run, Lookup Resolver, kimlik dökümü). | Web portalda bulunmaz. | Büyük veri aktarımı masaüstü işlemidir. |
| **Gebelik Bildirimi** | Yönetici tarafından detay kartından girilebilir. | Personel kendi profilinden doktor raporuyla bildirebilir (`POST /api/personel/gebelik-bildirimi`). | **Tam Hibrit:** Saha personeli mobilden bildirir; onay kuyruğuna (`degisiklik_talepleri`) düşer; masaüstü yönetici onaylar. |
| **Profil & Özlük İnceleme** | 10 sekmeli tam teşekküllü personel detay kartı. | Personel kendi izin, nöbet ve dozimetre geçmişini görür (`GET /api/profile`). | Personel self-servis olarak mobilden kendi verisini izler. |
| **İşten Ayrılış & KVKK Arşivi** | Mevzuat kilitleri (RKE/Dozimetre) ve 30 yıllık ZIP ihracı. | Web portalda bulunmaz. | Yasal arşivleme masaüstü güvenli kasasında yapılır. |

---

## E. Hedefli Ekran Görüntüsü Talebi

Kılavuz için kullanıcıyı boğmadan en yüksek değeri sunacak 2 ekran görüntüsü planlanmıştır:
1. `assets/img/05_personel_yonetimi_ve_toplu_aktarim.png`:  
   **Personel Listesi Ana Ekranı** (Üst KPI kartları, arama ve filtreler, avatar/rozet delegeli personel tablosu).
2. `assets/img/05_personel_yonetimi_ve_toplu_aktarim_01.png`:  
   **Personel Detay Kartı** (10 sekmeli sol menü, özlük bilgileri veya İşten Ayrılış / KVKK Arşiv Kokpiti).

---

## F. Kullanıcı Tarafından Onaylanan Nihai Kararlar (Kılavuz ve Kod Güncelleme Notları)

1. **Karar 1 (Pencere Kapatma Butonu `btnScreenClose`):**  
   - **Kullanıcı Kararı:** *"1 bu buton global olarak bağlı kalsın"*  
   - **Teknik Aksiyon:** `ui/controllers/personel/personel_list_controller.py` içinde `self.btnScreenClose.clicked.connect(self.close)` bağlantısı yapılarak buton tam işlevsel hale getirildi. Artık hayalet bileşen değildir.
2. **Karar 2 (Lisans Kotası Vurgusu):**  
   - **Kullanıcı Kararı:** *"2 gerek yok"*  
   - **Teknik Aksiyon:** Lisans kotası için bağımsız ve büyük bir uyarı kutusu yerine, personel ekleme ve toplu aktarım işlem adımlarında doğal bir sistem kuralı ve hata mesajı olarak sade dille yer verilecek.
3. **Karar 3 (İşten Ayrılışta RKE Zimmet ve Dozimetre Emniyet Kilidi):**  
   - **Kullanıcı Kararı:** *"3 evet şimdilik böyle yaz orada düzeltme yapmak gerekebilir"*  
   - **Teknik Aksiyon:** Personelin üzerinde teslim edilmemiş koruyucu kurşun ekipman (RKE) varsa pasife alınamayacağı ve aktif dozimetre varsa sistemin onay uyarısı vereceği kuralı kılavuza işlendi. İleride operasyonel gereksinimlere göre esnetilebileceği notu düşüldü.
4. **Karar 4 (Gebelik & Gece Nöbeti / Emzirme Otomasyonu):**  
   - **Kullanıcı Kararı:** *"4 evet benzer şekilde"*  
   - **Teknik Aksiyon:** Sağlık Bakanlığı ve NDK mevzuatı gereği, gebelik bildirimi yapıldığında sistemin çalışma kısıtı eklemesi, gece nöbetlerini iptal etmesi ve doğum sonrası 1 yıllık emzirme kısıtını devreye alması kullanıcı odaklı süreç şeması ve kılavuz metinlerine eklendi.
