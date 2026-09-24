# Keşif Raporu: 06_izin_yonetimi_ve_hakedis

**Modül Adı:** 06_izin_yonetimi_ve_hakedis  
**İnceleme Tarihi:** 2026-09-24  
**Kaynak Dosyalar:**
- `ui/controllers/izin/izin_list_controller.py`
- `ui/controllers/izin/izin_talep_controller.py`
- `ui/controllers/izin/izin_hakedis_controller.py`
- `ui/controllers/izin/izin_turleri_controller.py`
- `ui/pages/izin/izin_listesi_page.ui`
- `ui/pages/izin/izin_talep_dialog.ui`
- `ui/pages/izin/izin_hakedis_page.ui`
- `ui/pages/izin/izin_turleri_page.ui`
- `app/services/personel/izin_service.py`
- `app/domain/izin/izin_kural_motoru.py`
- `app/domain/izin/policies.py`
- `app/infrastructure/db/repositories/izin_repository.py`
- `web_portal/src/routes/izin.routes.ts`

---

## A. Modülün Özeti ve Temel İş Akışları (Kod Kanıtlı)

1. **İzin Talebi Oluşturma ve Doğrulama Sihirbazı (Wizard):**
   - İki adımlı sihirbaz yapısı (`izin_talep_dialog.ui`: 1. İzin Bilgileri, 2. Belgeler).
   - Tarih seçildiğinde `_calculate_days()` fonksiyonu izin türünün özelliklerine göre (`hafta_sonu_dahil`, `resmi_tatil_dahil`) net iş günü süresini hesaplar.
   - İzin şekli (Tam Gün, Yarım Gün = 0.5 gün, Saatlik) seçimine göre saat aralığı (`HH:mm`) veya gün hesabı dinamik güncellenir.
   - Personel seçildiğinde sağ taraftaki panelde (`_refresh_kalan_hak_panel`) personelin o yıla ait hakedilen, devreden, kullanılan ve kalan Yıllık İzin ile Şua İzni sayaçları anlık gösterilir.
   - Talep kaydedilmeden önce `check_overlap` ile personelin mevcut onaylı/bekleyen izinleriyle çakışma ve aktif nöbet çizelgesinde görevi olup olmadığı (`RED-IZN-02`) denetlenir.

2. **İzin Listesi, Yetkilendirme ve Onay Döngüsü:**
   - Çoklu durum akışı: `Beklemede`, `Birim Onaylı`, `Ön Onaylı`, `Resmi Onay Bekliyor`, `Onaylandı`, `Resmi Onaylı`, `Reddedildi`, `İptal`, `Mesai Borcuna Aktarıldı`.
   - Onay yetkisi (`_can_approve_or_reject`): Yalnızca Admin, Yönetici veya ilgili departmanın amiri / sorumlusu (`is_personel_any_department_supervisor`) izin onaylayabilir ve reddedebilir.
   - `approve_request`: İzin onaylandığı anda personelin `izin_haklari` tablosundaki `kullanilan_gun` bakiyesinden talep süresi otomatik düşülür (`_apply_request_hak_usage_delta`).
   - `reject_request`: Red gerekçesi zorunludur (`QInputDialog.getMultiLineText`).
   - `cancel_request`: Onaylı bir izin iptal edildiğinde düşülen bakiye personele otomatik iade edilir (`delta_sign=-1`).
   - `delete_request`: Onaylanmış (`Onaylandı`, `Resmi Onaylı`) izinler doğrudan **silinemez**; sistem önce iznin iptal edilmesini şart koşar.

3. **Şua İzni (Radyasyon Sağlık İzni) Motoru (RED-IZN-01):**
   - 3148 sayılı Kanun ve Sağlık Bakanlığı mevzuatı uyarınca yılda azami 30 gün (`MAX_YILLIK_SUA_GUN = 30`).
   - Her 50 fiili çalışma saatine 1 gün Şua izni hakedişi formülü (`SUA_SAAT_KATSAYISI = 50.0`, `ceil(saat / 50.0)`).
   - Şua izninde takvim günü esas alınır (`hafta_sonu_dahil = True`).
   - Cari yılda hak edilen Şua izni sonraki yıl kullanıma açılır.
   - **Şua Zamanaşımı Takibi (`chkSuaZamanasimi`):** 31 Aralık tarihine kadar kullanılmayan şua izinleri için risk durumu ve gün sayacı hesaplanır; ilgili yıl kilitlendiğinde hakediş değiştirilemez.

4. **Kalan Hak ve Hakediş Yönetimi (`IzinHakedisController`):**
   - Yıllık izin hakediş tablosu: Hak, Devir, Kullanılan, Dondurulan/Bloke, Kalan.
   - **Toplu Hesapla (`toplyHesaplaButton`):** Kurumdaki tüm aktif personelin hizmet yılı ve unvanına göre yıllık izin günlerini tek tıkla toplu olarak hesaplar ve kaydeder.
   - **Devir Aktarımı (`devir_aktarButton`):** Kaynak yıl tamamlandıktan sonra (`enforce_year_end`), kalan yıllık izinleri ayardaki üst sınırla (varsayılan 5 gün) hedef yıla devreder ve kaynak yılda devredilen miktarı dondurur.
   - Aylık Şua Hakediş sekmesi: Personelin fiili radyasyon çalışma saatlerine göre ay ay biriken şua hakediş dökümü. Buradaki işlem butonları (`suaAddButton` vb.) doğrudan Fiili Hizmet Modülü'ne (Modül 10) delege eder.

5. **KVKK Şifreli Evrak Kasası Entegrasyonu:**
   - İzin raporları ve mazeret belgeleri `stored_files` tablosunda 256-bit AES şifreleme ile saklanır.
   - Belge açılırken geçici güvenli dosya üretilir ve sistem görüntüleyicisi ile açılır; bellekten temizlenir.

6. **Web Portalı ile Hibrit Entegrasyon:**
   - Personel web portalından self-service olarak izin talep edebilir (`POST /api/izin/talep`).
   - Çakışma kontrolü backend'de gerçek zamanlı çalışır.
   - Personel izin belgesini resmi HBYS/EBYS'ye işlettiğinde web portalı üzerinden EBYS Belge No ve Tarihini sisteme girebilir (`POST /api/izin/hbys-kaydet`). İlk giriş doğrudan izni 'Resmi Onaylı' yapar; numara güncellemesi ise yönetici onay kuyruğuna yönlendirilir.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Kontrol / Bileşen) | NEDEN? (Kullanım Amacı) | NEREDE? (Ekran / Konum) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? | DURUM |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Metin Arama (`searchInput`)** | İzin kayıtlarını hızlıca bulmak | İzin Listesi & Hakediş üst barı | Ad, soyad, TC kimlik, sicil veya izin türüne göre gerçek zamanlı sorgular | Kayıt ararken | Tüm Kullanıcılar | Aktif |
| **İzin Türü Filtresi (`izinTuruFilter`)** | İzin tipine göre listelemek | İzin Listesi filtre paneli | `list_types()` verisini çeker; seçilen türe göre SQL filtreler | Belirli izin incelenirken | Tüm Kullanıcılar | Aktif |
| **Durum Filtresi (`durumuFilter`)** | Onay aşamasına göre ayırmak | İzin Listesi filtre paneli | 9 onay statüsüne göre dinamik filtre uygular | Bekleyen/onaylı izinleri ayırırken | Tüm Kullanıcılar | Aktif |
| **Görev Yeri Filtresi (`departmanFilter`)** | Birim bazlı izinleri süzmek | İzin Listesi filtre paneli | Departman ve alt birim hiyerarşisine göre filtreler | Birim izinleri kontrolünde | Tüm Kullanıcılar | Aktif |
| **Tarih Aralığı Filtresi (`dateFilterEnable`, `baslangicFilter`, `bitisFilter`)** | Dönemsel izinleri görmek | İzin Listesi filtre paneli | Yıl başı ve sonuna göre başlangıç aralığı uygular | Aylık/yıllık planlamada | Tüm Kullanıcılar | Aktif |
| **Şua Zamanaşımı Filtresi (`chkSuaZamanasimi`)** | Yanma riski olan şua izinlerini bulmak | İzin Hakediş ekranı | 31.12 tarihine kalan gün ile kalan şua iznini karşılaştırır; kritik personeli listeler | Yıl sonu yaklaştığında (Eylül-Aralık) | Yönetici / RGS / İK | Aktif |
| **Sadece Kalanı Olan / Negatif Kalan Filtreleri** | Bakiye anomalilerini tespit etmek | İzin Hakediş ekranı | `kalan_gun > 0` veya `kalan_gun < 0` sorgusu koşturur | Bakiye denetiminde | Yönetici / İK | Aktif |
| **Yeni İzin Ekle (`addButton`)** | Yeni izin talebi başlatmak | İzin Listesi işlem barı | 2 adımlı `IzinTalepController` sihirbazını açar | Personel izin alacağı zaman | Yazma yetkilisi / Personel | Aktif |
| **Detay / Düzenle (`detailButton`)** | İzin ayrıntısını incelemek | İzin Listesi / Satır çift tık | Seçili iznin formunu açar; onaylı ise salt okunur sunar | Talep incelenirken | Okuma yetkilisi | Aktif |
| **İzin Onayla (`approveButton`)** | İzni resmi olarak kabul etmek | İzin Listesi işlem barı | `approve_request` çalıştırır; bakiyeden düşer, durumu 'Onaylandı' yapar | Yönetici/Amir onayında | Admin / Birim Amiri | Aktif |
| **İzin Reddet (`rejectButton`)** | İzni gerekçeli reddetmek | İzin Listesi işlem barı | Gerekçe modalı açar; nedeni `red_nedeni` alanına yazar, durumu 'Reddedildi' yapar | İzin uygun görülmediğinde | Admin / Birim Amiri | Aktif |
| **İzin İptal Et (`cancelButton`)** | Onaylı veya bekleyen izni iptal etmek | İzin Listesi işlem barı | Durumu 'İptal' yapar; onaylı iznin düşülen gününü personelin bakiyesine iade eder | İzin kullanılmayacaksa | Güncelleme yetkilisi | Aktif |
| **İzin Sil (`deleteButton`)** | Hatalı kaydı temizlemek | İzin Listesi işlem barı | Onaylanmamış kayıtları fiziksel siler; onaylı kayıtlarda iptal zorunluluğu verir | Hatalı talep girildiğinde | Silme yetkilisi | Aktif |
| **Kalan Hak / Hakediş Sayfası (`hakedisButton`)** | Personel izin haklarını yönetmek | İzin Listesi işlem barı | `IzinHakedisController` penceresini öne getirir/açar | Yıllık hak planlamasında | Yönetici / İK | Aktif |
| **Toplu Hesapla (`toplyHesaplaButton`)** | Yıllık izinleri tek tıkla yüklemek | İzin Hakediş işlem barı | Aktif personellerin kıdem ve unvanına göre yıllık haklarını otomatik hesaplar | Yıl başında / yeni dönemde | Yönetici / İK | Aktif |
| **Devir Aktar (`devirAktarButton`)** | Kalan izinleri yeni yıla devretmek | İzin Hakediş işlem barı | Biten yılın kalan haklarını tavan sınırı (5 gün) ile yeni yıla aktarır | Yıl bitiminde (Ocak ayı) | Yönetici / İK | Aktif |
| **Hakediş Düzenle (`editButton`)** | Personel bakiyesini manuel düzeltmek | İzin Hakediş / Satır çift tık | `_HakedisDuzenleDialog` açar; hak, devir, kullanılan, dondurulan günleri günceller | Yasal intibak/düzeltmede | Güncelleme yetkilisi | Aktif |
| **Belge Ekle/Gör/Sil (`belgeEkleButton` vb.)** | Sağlık raporu veya izin evrakı eklemek | İzin Talep Sihirbazı 2. Sekme | Dosyayı AES-256 ile şifreleyip evrak kasasına bağlar; çift tıkla açar | Raporlu/mazeretli izinlerde | Talep eden / Yönetici | Aktif |
| **Dışa Aktar (`exportButton` / `btnExport`)** | Listeyi Excel raporu almak | İzin Listesi & Hakediş ekranı | Filtrelenmiş tüm kayıtları biçimlendirilmiş Excel dosyasına kaydeder | Denetim ve resmi raporlamada | Yetkili Kullanıcılar | Aktif |
| **Şua İşlem Butonları (`suaAddButton` vb.)** | Fiili hizmet şua sayfasına yönlendirmek | İzin Hakediş - Şua sekmesi | `_show_sua_info_msg` ile Modül 10 (Fiili Hizmet) sayfasına köprü kurar | Aylık şua hakedişi gerektiğinde | Yönetici / RGS | Aktif Köprü |

---

## C. Mantık ve Kısıt Soruları (Kılavuza İşlenecek Kurallar)

1. **Şua İzni Devri ve Yıl Sonu Zamanaşımı Kuralı:**
   - *Mevzuat Kuralı:* Radyasyon Güvenliği mevzuatına göre radyasyon çalışanlarının 30 günlük Şua izninin cari takvim yılı içinde (en geç 31 Aralık) kullanılması esastır; bir sonraki yıla **devredilemez**.
   - *Sistem İşleyişi:* `chkSuaZamanasimi` filtresi 31 Aralık öncesinde kalan şua günlerini tarar ve yöneticilere erken uyarı verir. İlgili yıl fiili hizmet kilitleri kapatıldığında şua hakedişi kilitlenir. Kılavuzda bu yasal ayrım vurgulanacaktır.

2. **Onaylanmış İzinlerin Silinmesi Emniyet Kilidi:**
   - *Mevzuat ve Denetim İzi Kuralı:* Onaylanmış ve personelin hakediş bakiyesinden düşülmüş bir izin doğrudan silinemez. Silinmeye çalışıldığında sistem: *"Onaylanmış izin talebi silinemez. Lütfen önce talebi iptal ediniz."* uyarısı verir. İptal işlemi yapıldığında hakediş bakiyesine iade matematiksel olarak işletilir, ardından denetim kaydı korunarak silme yapılabilir.

3. **Yıllık İzin Devir Tavanı ve Kaynak Yıl Tamamlanma Şartı:**
   - Devir aktarımı (`devir_aktar`) yalnızca tamamlanmış geçmiş yıllar için çalıştırılabilir. Devam eden cari yıl bitmeden devir yapılması sistemce engellenir (`kaynak_yil >= mevcut_yil` kontrolü).
   - Devir miktarı kurum ayarlarındaki tavan gün (varsayılan 5 gün) ile sınırlandırılır; kalan fazlalık bakiye dondurulur/yanar.

4. **Web Portalı EBYS / HBYS Evrak Kaydı Onay Hiyerarşisi:**
   - Personel web portalı üzerinden onaylanmış iznine ilk kez EBYS/HBYS evrak no ve tarihi girdiğinde sistem izin kaydını doğrudan **"Resmi Onaylı"** statüsüne yükseltir (yönetici onayına gerek kalmaz).
   - Ancak daha önce kaydedilmiş bir evrak numarası değiştirilmek istendiğinde sistem suiistimali önlemek için bunu **"Değişiklik Talebi"** olarak Yönetici Onay Masasına yönlendirir.

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

| Özellik / İşlem | Masaüstü Arayüzü (`ui/controllers/izin/`) | Web Portalı (`web_portal/routes/izin.routes.ts`) | Senkronizasyon Durumu |
| :--- | :--- | :--- | :--- |
| **İzin Talep Etme** | `IzinTalepController` (2 adımlı wizard, bakiye paneli) | `POST /api/izin/talep` (hızlı talep formu) | Canlı PostgreSQL üzerinden anında ortak tabloya (`personel_izinler`) yazılır. |
| **Çakışma Kontrolü** | `check_overlap` & Nöbet çakışma denetimi | SQL tabanlı aktif çakışma kontrolü | Her iki platformda da mükerrer ve nöbetle çakışan izinler engellenir. |
| **İzin Onay / Red** | `approveButton`, `rejectButton` (Toplu onay destekli) | Yönetici Onay Merkezi / Bildirimler | Ortak `personel_izinler` tablosunda durum senkronizedir. |
| **EBYS Evrak No Girişi** | İzin detay formu üzerinden | `POST /api/izin/hbys-kaydet` | Web portalında girilen evrak no masaüstünde anında görünür. |
| **Kalan Hak / Hakediş** | `IzinHakedisController` (Detaylı bakiye, devir, toplu hesap) | Profil > İzin Özeti (`GET /api/profile`) | Ortak `izin_haklari` tablosundan beslenir. |
| **İzin Türleri Yönetimi** | `IzinTurleriController` (Tür ekleme, max gün, tatil dahil) | Salt okunur API | Tanımlamalar masaüstünden yönetilir, web portala yansır. |

---

## E. Hedefli Ekran Görüntüsü Referansları

Kılavuz için `docs/help/assets/img/` dizininde hazır bulunan şu 2 kritik ekran görüntüsü kullanılacaktır:
1. **İzin Listesi ve Filtreleme Ekranı:** `assets/img/izin_list.png`  
   *(Üst arama, durum ve tür filtreleri, izin tablosu, onay/red/iptal butonları ve sayaç kartları)*
2. **Yeni İzin Talebi ve Bakiye Kontrol Sihirbazı:** `assets/img/izin_talep.png`  
   *(İzin formu, 2 adımlı sihirbaz, personelin Yıllık ve Şua kalan hak paneli, gün/saat hesabı)*

---

## F. Kullanıcı Kararları ve Nihai Kılavuz Esasları

Kullanıcı ile yapılan istişare sonucunda onaylanan kurallar ve kılavuz rehber ilkeleri:

1. **Şua İzni Hakediş ve Kullanım Prensibi (RED-IZN-01):**
   - Şua izni fiilen radyasyon alanında çalışılarak kazanılan yasal bir sağlık hakkıdır. Personelin cari yılda çalıştığı fiili radyasyon süresi (her 50 saat için 1 gün, tavan 30 gün) gelecek takvim yılında hak olarak kullandırılır.
   - Kullanılmayan şua izinleri 31 Aralık itibarıyla zaman aşımına uğrar, bir sonraki yıla kesinlikle devredilemez.
2. **Yıllık İzin Devir Kuralları:**
   - Devir aktarımı (`devir_aktar`) yalnızca tamamlanmış geçmiş yıllar için uygulanır; devam eden cari yıl içinde devir yapılması engellenir.
   - Devir miktarı kurum parametresinde belirlenen tavan gün (varsayılan en fazla 5 gün) kadardır; tavanı aşan bakiye dondurulur/yanar.
3. **Web Portalı EBYS / HBYS Evrak Kaydı:**
   - Personel web portalı üzerinden onaylı iznine ilk kez EBYS evrak no girdiğinde izin statüsü doğrudan **Resmi Onaylı** olur. Sonradan yapılan evrak no güncellemeleri yönetici onayına yönlendirilir. Kılavuzda bu süreç yer alacak, ilerleyen sürümlerde kontrol/denetim mekanizması gözetilecektir.
4. **Onaylı İzin Silme Yasağı ve Bakiye İadesi:**
   - Denetim izi ve yasal şeffaflık gereği onaylanmış veya resmi onaylı izin kayıtları tablodan silinemez. İptal işlemi yapılmalı, bu sayede bakiye personelin hakkına otomatik ve güvenli şekilde iade edilmelidir.
