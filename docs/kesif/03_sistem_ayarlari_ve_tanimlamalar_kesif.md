# 03_sistem_ayarlari_ve_tanimlamalar — Teknik Keşif ve 5N1K Analiz Raporu

- **Modül Kodu ve Adı:** `03_sistem_ayarlari_ve_tanimlamalar` (Sistem Parametreleri, Kurum Başlık ve Çift Logo Antet Yönetimi, data/templates Şablon Merkezi, Departman Hiyerarşisi, Unvanlar, Tatil Takvimi ve Kategori Sorumluları)
- **Modül Karmaşıklık Seviyesi (Tier):** TIER 1 / TIER 2 Hibrit (Tanım/CRUD + Hiyerarşik Bağımlılık Doğrulama ve Canlı Şablon Önizleme)
- **Taranan Arayüz Dosyaları:**
  - `ui/pages/admin/system/system_management_page.ui` (Sol Gezinim Ağacı ve Dinamik Sayfa Yığını - QStackedWidget)
  - `ui/pages/admin/setting/program_settings_page.ui` (Genel, Güvenlik, Dozimetre, İzin, Fiili Hizmet Parametreleri Yönetim Tablosu)
  - `ui/pages/admin/system/templates_page.ui` (Kurum Başlıkları, Çift Logo Antet Yönetimi, Canlı Önizleme ve data/templates Şablon Merkezi)
  - `ui/pages/admin/setting/lookup/lookup_departman.ui` (Hiyerarşik Departman Tanımları, Birim Sorumlusu ve Kat Planı/Kroki Eşleme)
  - `ui/pages/admin/setting/lookup/lookup_unvan.ui` (Unvan ve Hizmet Sınıfları, Radyasyon Görevlisi ve Nöbet Varsayılanları)
  - `ui/pages/admin/setting/lookup/lookup_tatil.ui` (Resmi/Dini/İdari Tatil Takvimi, 0.5 Gün Yarım Gün Eşikleri ve Yıl Filtresi)
  - `ui/pages/admin/setting/lookup/lookup_kategori_sorumlulari.ui` (Anabilim Dalı ve Hizmet Sınıfı Bazlı Sorumlu Amir Atamaları)
- **Taranan Controller ve Servis Kodları:**
  - `ui/controllers/admin/system/system_management_controller.py` (Entegre sol gezinim ağacı `navTree`, yetki bazlı menü budama, dinamik widget önbellekleme)
  - `ui/controllers/admin/system/program_settings_controller.py` (Kategori filtreleme, dil dinamik yükleme, logo içe aktarma, fiili hizmet kritik uyarıları, doğrulama)
  - `ui/controllers/admin/system/templates_controller.py` (Jinja2/docxtpl şablon yer tutucu köprüsü `{{BASLIK_1}}`, `{{BASLIK_2}}`, `{{LOGO_1}}`, `{{LOGO_2}}`, canlı antet önizleme, şablon açma ve sıfırlama)
  - `ui/controllers/admin/system/lookup_controller.py` (Departman hiyerarşisi, döngüsel üst birim engeli, unvanlar, tatil takvimi ve kategori sorumlusu yönetimi)
  - `app/services/system/settings_service.py` & `app/infrastructure/db/repositories/settings_repository.py`
  - `app/services/system/lookup_service.py` & `app/infrastructure/db/repositories/lookup_repository.py`
  - `web_portal/src/routes/lookup.routes.ts` & `web_portal/src/services/lookup.service.ts` (Web Portal salt okunur referans veri API'si)
- **Taranan DB Tabloları:**
  - `ayarlar` (`kategori`, `anahtar`, `deger`, `aciklama`, `guncelleme`)
  - `departmanlar` (`id`, `departman_adi`, `departman_kodu`, `ust_id`, `aciklama`, `radyasyonlu_alan`, `nobet`, `aktif`, `sorumlu_personel_id`, `kroki_id`, `kroki_pos_x`, `kroki_pos_y`, `kroki_oda_kodu`)
  - `unvanlar` (`id`, `unvan_adi`, `unvan_kodu`, `kategori`, `aktif`, `radyasyon_gorevlisi_mi`, `kisa_unvan_kodu`, `hizmet_sinifi`, `nobet_tutabilir_varsayilan`)
  - `tatiller` (`id`, `tarih`, `tatil_adi`, `tur`, `tatil_gun_sayisi`, `aktif`, `aciklama`)
  - `kategori_sorumlulari` (`id`, `departman_id`, `hizmet_tipi`, `sorumlu_personel_id`, `aktif`)
  - `krokiler` (`id`, `kroki_adi`, `dosya_yolu`, `bina`, `kat`, `aktif`)
- **Analiz Tarihi:** 2026-09-24

---

## A. Modülün Özeti ve Görevleri

Bu modül RADPYS'nin **omurga yapılandırma ve kurumsal kimlik merkezidir**. Arka planda şu temel iş akışlarını yürütmektedir:

1. **Entegre Gezinim Ağacı ve RBAC Yetki Budama (`SystemManagementController`):**
   - Sol taraftaki ağaç menüsü (`navTree`), giriş yapan kullanıcının `ModuleCode.AYARLAR` ve `ModuleCode.TANIMLAMALAR` yetkilerini denetler; yetkisiz olunan menü dallarını tamamen gizler.
   - Sayfa geçişlerinde bileşenleri bellek önbelleğinde tutarak sekmeler arası veri kaybını önler.

2. **Program Çalışma Parametreleri Yönetimi (`ProgramSettingsController`):**
   - Genel, güvenlik, dozimetre, izin ve fiili hizmet kategorilerindeki anahtar-değer parametrelerini yönetir.
   - Sistem dilini (`genel.dil`) değiştirdiğinde çalışma zamanında arayüz çeviri motorunu (`translation_service`) anında tetikler.
   - Fiili hizmet hesaplama yöntemi değiştirildiğinde geçmiş puantaj bütünlüğünün bozulmaması için yöneticiye kritik onay sorar.
   - Ham `rapor` kategorisini ve `_aktif` ikiz parametrelerini bu ekrandan gizleyerek doğrudan şablon merkezine delege eder.

3. **Kurumsal Antet, Çift Logo ve data/templates Şablon Yönetimi (`TemplatesController`):**
   - Kurumun resmi yazışma ve matbu raporlarında kullanılacak `{{BASLIK_1}}`, `{{BASLIK_2}}`, `{{LOGO_1}}` ve `{{LOGO_2}}` değişkenlerini yönetir.
   - Seçilen kurum logolarını otomatik olarak `resources/icons` kaynak dizinine kopyalar ve veritabanına bağıl yol kaydeder.
   - Ekranda sağ tarafta birebir canlı antet önizleme paneli (`previewFrame`) sunar (100x100 logo, 14pt ortalanmış başlıklar).
   - Sistemdeki Word (.docx) ve Excel (.xlsx) rapor şablonlarını varsayılan masaüstü uygulamasında açma (`btnOpenTemplate`) veya kurumsal varsayılana sıfırlama/yeniden üretme (`btnRegenerateTemplate`) imkanı sağlar.

4. **Hiyerarşik Departman ve Kat Planı / Kroki Eşleştirme (`LookupController - mode='departments'`):**
   - Anabilim Dalı -> Bilim Dalı / Ünite -> Oda/Mahalle hiyerarşisini kurar.
   - Bir departmanın kendi kendisinin veya kendi alt dalının üst departmanı seçilmesini engelleyen döngü önleme algoritması (`_is_descendant_department`) çalıştırır.
   - Departman silme işlemi yasaktır; yalnızca pasife alınabilir. Ancak departmana bağlı personel veya aktif alt departman varsa pasife alma kesinlikle engellenir.
   - Departmanı mimari kat planına (`krokiler`) ve oda/mahalle koduna bağlama imkanı tanır; doğrudan arayüzden yeni kat planı (PDF/PNG/JPG) yükletir.

5. **Unvan ve Hizmet Sınıfları Tanımlama (`LookupController - mode='titles'`):**
   - 2-20 karakterlik standart kod formatı (`_LOOKUP_KOD_PATTERN`: büyük harf, rakam, alt çizgi) ile unvan tanımlar.
   - Unvan bazında "Radyasyon Görevlisi" ve "Varsayılan Olarak Nöbet Tutabilir" bayraklarını yönetir. Bu bayraklar personel kartı açılırken otomatik miras alınır.

6. **Resmi, Dini ve İdari Tatil Takvimi (`LookupController - mode='holidays'`):**
   - Yıl bazında filtrelenebilir resmi tatil ajandası sunar.
   - Arefe günleri ve yarım günlük idari izinler için 0.5 adımlı gün sayısı (`tatil_gun_sayisi`: 0.5, 1.0, 1.5...) validasyonu yürütür.
   - Nöbet solver motoru ve izin hakediş hesaplayıcıları resmi tatil günlerini doğrudan bu tablodan okur.

7. **Anabilim Dalı Kategori Sorumluları (`LookupController - mode='kategori_sorumlulari'`):**
   - Kategori sorumlusunun yalnızca Anabilim Dalı (üst departmanı olmayan / `ust_id IS NULL`) düzeyinde tanımlanabilmesini şart koşan kurumsal kuralı yürütür.
   - Birim ve hizmet sınıfı (Örn: Radyoloji Anabilim Dalı - Tekniker Hizmet Sınıfı) bazında sorumlu personel atar; mükerrer atamaları engeller.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Amaç & Gerekçe) | NEREDE? (UI - Ctrl - DB - Motor) | NASIL? (Formül / Çalışma Mantığı) | NE ZAMAN? (Tetiklenme Anı) | KİM? (Yetkili Rol) | DURUM |
|---|---|---|---|---|---|---|
| **Entegre Menü Yetki Budama** (`_build_navigation_tree`) | Yetkisiz personelin sistem ayarlarına ve tanımlama modüllerine erişmesini engellemek. | • **UI:** `system_management_page.ui`<br>• **Ctrl:** `system_management_controller.py:108`<br>• **Servis:** `PermissionService` | Menü öğesi için kullanıcının `okuma` izni yoksa ağaç düğümü oluşturulmaz; tüm alt öğeleri yetkisiz olan gruplar gizlenir. | Sistem Yönetimi ekranı ilk açıldığında. | Yetkili roller (Admin / Yönetici). | **Eksiksiz & Aktif** |
| **Dinamik Dil Değişimi** (`genel.dil`) | Uygulama çalışma dilini yeniden başlatmaya gerek kalmadan güncellemek. | • **UI:** `program_settings_page.ui`<br>• **Ctrl:** `program_settings_controller.py:419`<br>• **Servis:** `TranslationService` | `resources/langs/*.json` taranır. Dil seçilip kaydedildiğinde `translation_service.load_language(value)` ile arayüz dili anında güncellenir. | Dil ayarı güncellendiğinde. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Fiili Hizmet Kritik Yöntem Uyarısı** | Hesaplama yöntemi değiştiğinde geçmiş dönem puantajlarının tutarsızlaşmasını önlemek. | • **UI:** `program_settings_page.ui`<br>• **Ctrl:** `program_settings_controller.py:451`<br>• **DB:** `ayarlar(fiili_hizmet, hesaplama_kaynagi)` | Ayar 'hybrid', 'manual' veya 'nobet' olarak değiştirilmek istendiğinde `ask_confirm` ile geçmiş hakediş bütünlüğü ikazı verilir; onaylanmazsa iptal edilir. | Değer değiştirilip "Güncelle" tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Logo Otomatik Kaynak Kopyalama** (`_on_browse_clicked`) | Dış dizinlerdeki görsellerin silinmesi sonucu raporlarda kırık resim oluşmasını önlemek. | • **UI:** `program_settings_page.ui:171`<br>• **Ctrl:** `program_settings_controller.py:325`<br>• **Dizin:** `resources/icons/` | Seçilen dosya doğrulanır (`.png`, `.jpg`, `.jpeg`, `.bmp`, `.webp`, `.gif`), `resources/icons` içine kopyalanır, DB'ye yalnızca dosya adı kaydedilir. | Gözat butonundan logo seçildiğinde. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Çift Başlık ve Logo Antet Yönetimi** | Resmi raporlarda kurumsal kimlik standardı (Bakanlık + Hastane / Üniversite) sağlamak. | • **UI:** `templates_page.ui:183`<br>• **Ctrl:** `templates_controller.py:316`<br>• **DB:** `ayarlar(rapor, *)` | `txtBaslik1`, `txtBaslik2`, `logo_1_yolu`, `logo_2_yolu` ve bunlara bağlı `*_aktif` onay kutuları veritabanına yazılır. Raporlarda `docxtpl` ile basılır. | Kaydet butonuna tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Canlı Antet Önizlemesi** (`_update_preview`) | Raporu üretmeden önce antetin nasıl görüneceğini anında denetlemek. | • **UI:** `templates_page.ui:18`<br>• **Ctrl:** `templates_controller.py:338` | Metin kutusu veya onay kutusu her değiştiğinde sol logo (100x100), ortalı başlıklar (14pt Bold) ve sağ logo canlı olarak yeniden çizilir. | Formda herhangi bir tuşa veya onay kutusuna basıldığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Şablonu Varsayılan Uygulamada Açma** (`btnOpenTemplate`) | Word veya Excel şablon tasarımı üzerinde doğrudan masaüstü ofis araçlarıyla çalışabilmek. | • **UI:** `templates_page.ui:220`<br>• **Ctrl:** `templates_controller.py:137`<br>• **Dizin:** `data/templates/` | Seçilen şablonun tam yolu `QDesktopServices.openUrl` ile işletim sistemine iletilir ve MS Office/LibreOffice ile açılır. | "Aç" butonuna tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Şablon Orijinaline Sıfırlama** (`btnRegenerateTemplate`) | Bozulmuş veya hatalı düzenlenmiş şablonları fabrika ayarlarına döndürmek. | • **UI:** `templates_page.ui:230`<br>• **Ctrl:** `templates_controller.py:145`<br>• **Motor:** `template_updater.py` | `TEMPLATE_SPECS` sözlüğünden ilgili raporun fabrika tanımı okunur ve `update_excel_template` / `update_word_template` ile şablon sıfırdan üretilir. | "Yeniden Oluştur" butonuna basıldığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Standart Kod Biçimlendirme Kuralı** (`_LOOKUP_KOD_PATTERN`) | Raporlama, entegrasyon ve nöbet motorunda kodlama standardı sağlamak. | • **UI:** Tüm Kod giriş alanları<br>• **Ctrl:** `lookup_controller.py`<br>• **Servis:** `lookup_service.py:23` | `^[A-Z0-9_]{2,20}$` regex kuralı uygulanır. Küçük harfler otomatik büyütülür; 2 karakterden kısa veya 20 karakterden uzunsa hata verir. | Ekle/Güncelle butonuna basıldığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Döngüsel Departman Hiyerarşisi Engeli** (`_is_descendant_department`) | Sonsuz döngü ve organizasyon ağacı çökmesini engellemek. | • **UI:** `lookup_departman.ui:234`<br>• **Ctrl:** `lookup_controller.py`<br>• **Servis:** `lookup_service.py:667` | Bir departman kendisinin üst departmanı olamaz (`parent_id == department_id`). Ayrıca seçilen üst departman mevcut departmanın alt dallarında yer alamaz. | Departman kaydedilirken / güncellenirken. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Departman Pasife Alma Kalkanı** | Personeli veya alt birimi olan departmanın sistemden silinerek yetim kayıt kalmasını önlemek. | • **UI:** `lookup_departman.ui:328`<br>• **Ctrl:** `lookup_controller.py`<br>• **Servis:** `lookup_service.py:674` | Aktif bir departman pasife alınmak istendiğinde; bağlı personel sayısı > 0 veya aktif alt departman sayısı > 0 ise işlem mutlak olarak engellenir. | Pasif yapılıp Güncelle dendiğinde. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Kat Planı / Kroki Yükleme Köprüsü** (`depKrokiUploadBtn`) | Departmanı mimari kroki ve oda mahalle koduna bağlamak. | • **UI:** `lookup_departman.ui:266`<br>• **Ctrl:** `lookup_controller.py:823`<br>• **DB:** `krokiler`, `departmanlar.kroki_id` | Dosya seçici açılır (PDF, PNG, JPG), başlık sorulur, krokiler tablosuna kaydedilir ve anında açılır kutudan seçili hale getirilir. | "Yeni Yükle..." tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Tatil Takvimi 0.5 Gün Eşiği** (`holidayDayCountInput`) | Arefe ve yarım gün idari tatillerin puantajını doğru hesaplamak. | • **UI:** `lookup_tatil.ui:230`<br>• **Ctrl:** `lookup_controller.py:974`<br>• **Servis:** `lookup_service.py:1355` | Değer 0.5 ile 365 arasında olmalı ve mutlak olarak 0.5'in katları olmalıdır (`cift_kat == round(cift_kat)`). Aksi halde kayıt reddedilir. | Tatil kaydedilirken. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Tatil Takvimi Yıl Filtresi** (`holidayYearFilter`) | Geçmiş yılların tatil kalabalığı içinde cari yılı rahatça yönetmek. | • **UI:** `lookup_tatil.ui:27`<br>• **Ctrl:** `lookup_controller.py:587`<br>• **DB:** `tatiller.tarih` | DB'deki benzersiz yıllar taranır; "Tüm Yıllar" veya seçilen yıla göre `WHERE EXTRACT(YEAR FROM tarih) = ?` filtresi uygulanır. | Açılır kutudan yıl seçildiğinde. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Kategori Sorumlusu Anabilim Dalı Kuralı** | Alt bilim dallarına mükerrer/çelişkili yetki verilmesini önlemek. | • **UI:** `lookup_kategori_sorumlulari.ui`<br>• **Ctrl:** `lookup_controller.py:419`<br>• **Servis:** `lookup_service.py:1498` | Açılır kutuda yalnızca `ust_id IS NULL` olan Anabilim Dalları listelenir. Servis katmanında alt departman seçimi kesin olarak engellenir. | Sorumlu tanımlanırken. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Kategori Listesi Bileşeni** (`categoryList`) | Kodda atıl kalıp UI XML'inde yer almayan eski sol liste kontrolü. | • **UI:** `program_settings_page.ui`<br>• **Ctrl:** `program_settings_controller.py` | Kod tabanından tamamen temizlendi; kategori yönetimi `system_management_controller.py` ağacı ve form içi açılır kutu ile yürütülmektedir. | Sayfa yüklenirken. | Yok. | 🧹 **TEMİZLENDİ & KODDAN KALDIRILDI** |
| **Departman Sil Butonu** (`depDeleteButton`) | Arayüzde yer almayan silme butonu. | • **UI:** `lookup_departman.ui`<br>• **Ctrl:** `lookup_controller.py`<br>• **DB:** `departmanlar` | Departmanlar için UI'da sil butonu bilinçli olarak konulmamıştır; sadece pasife alma yöntemi uygulanır. | Yok. | Yok. | ℹ️ **MİMARİ GEREĞİ BULUNMAZ** |
| **Unvan Sil Butonu** (`titleDeleteButton`) | Arayüzde yer almayan silme butonu. | • **UI:** `lookup_unvan.ui`<br>• **Ctrl:** `lookup_controller.py`<br>• **DB:** `unvanlar` | Unvanlar için UI'da sil butonu bulunmaz; aktif/pasif toggle kullanılır. Backend'de unvan birleştirme (`merge_titles`) fonksiyonu mevcuttur. | Yok. | Yok. | ℹ️ **MİMARİ GEREĞİ BULUNMAZ** |

---

## C. Mantık, Kısıtlar ve QMessageBox Validasyonları

1. **Fiili Hizmet Hesaplama Kaynağı Değişim Uyarısı (`program_settings_controller.py:452`):**
   - **Tetikleyici:** `fiili_hizmet.hesaplama_kaynagi` ayarı değiştirilip Güncelle tıklandığında.
   - **QMessageBox:** `ask_confirm(self, "Kritik Ayar Değişikliği", "Fiili hizmet hesaplama yöntemi değiştirildiğinde, daha önce yapılmış olan dönem hesaplamalarının bütünlüğü ve geçmiş hakedişler etkilenebilir.\n\nDevam etmek istediğinize emin misiniz?")`.
   - **Kural:** Kullanıcı "Hayır" derse işlem iptal edilir ve veritabanı güncellenmez.

2. **Mükerrer Ayar Anahtarı Engeli (`program_settings_controller.py:371`):**
   - **Tetikleyici:** Yeni ayar eklenirken mevcut bir kategori + anahtar kombinasyonu yazıldığında.
   - **QMessageBox:** `QMessageBox.warning(self, "Kayıt Hatası", "Bu kategori ve anahtara sahip bir ayar zaten mevcut. Lütfen güncellemek için listeden seçiniz.")`.

3. **Departman Kod ve Format Kuralları (`lookup_service.py:644, 650`):**
   - **Zorunluluk:** Departman adı ve departman kodu boş bırakılamaz.
   - **Format:** `_LOOKUP_KOD_PATTERN` (`^[A-Z0-9_]{2,20}$`) gereği yalnızca büyük harf, rakam ve alt çizgi girilebilir (2-20 karakter).
   - **Hata Mesajı:** `"Departman kodu formatı geçersiz. Sadece büyük harf, rakam ve alt çizgi (_) kullanın (2-20 karakter)."`.
   - **Benzersizlik:** Aynı kodda başka departman olamaz: `"Bu departman kodu zaten kullanılıyor: {code}"`.

4. **Departman Hiyerarşik Döngü Engeli (`lookup_service.py:663`):**
   - **Kural 1:** Bir departman kendisini üst departman olarak seçemez (`"Bir departman kendisinin ust departmani olamaz."`).
   - **Kural 2:** Seçilen üst departman, güncellenen departmanın alt hiyerarşik dallarında bulunamaz (`"Secilen ust departman bu departmanin alt agacinda yer aliyor; hiyerarside dongu olusturulamaz."`).

5. **Departman Pasife Alma Kısıtı (`lookup_service.py:674`):**
   - **Kural:** Eğer bir departmana bağlı en az 1 personel veya 1 aktif alt departman varsa pasife alınamaz.
   - **Hata Mesajı:** `"Bu departman pasife alinamaz: X personel kaydi, Y aktif alt departman. Once bagimliliklari kaldirin."`.

6. **Tatil Takvimi Validasyonları (`lookup_service.py:1330-1365`):**
   - **Tarih Kontrolü:** Geçersiz tarih girilemez (`"Gecerli bir tarih seciniz."`).
   - **Tür Sınırı:** Yalnızca `"Resmi"`, `"Dini"` veya `"Idari"` olabilir.
   - **Gün Sayısı Sınırı:** En az `0.5`, en fazla `365` gün olabilir. Mutlak olarak 0.5'in katı olmalıdır (Örn: 0.5, 1.0, 1.5, 2.0). Aksi halde: `"Tatil gun sayisi 0.5 adimlarla girilmelidir."`.
   - **Mükerrerlik:** Aynı tarih ve türde ikinci bir kayıt açılamaz: `"Ayni tarih ve tur icin baska bir tatil kaydi zaten var."`.
   - **Silme Onayı:** `ask_confirm(self, "Onay", "Secili tatil kaydini silmek istediginize emin misiniz?")`.

7. **Kategori Sorumluları Kısıtları (`lookup_service.py:1484-1510`):**
   - **Anabilim Dalı Zorunluluğu:** Alt departman seçilemez (`"Kategori sorumlusu yalnızca Anabilim Dalı (üst düzey departman) için tanımlanabilir; seçilen departman bir alt birimdir."`).
   - **Tekillik:** Bir Anabilim Dalı ve hizmet sınıfı için yalnızca tek bir sorumlu atanabilir (`"Bu Anabilim Dalı ve hizmet tipi için zaten bir kategori sorumlusu tanımlanmış."`).
   - **Silme Onayı:** `ask_confirm(self, "Onay", "Seçili kategori sorumlusu kaydını silmek istediğinize emin misiniz?")`.

8. **Şablon Açma ve Yeniden Üretme Eşikleri (`templates_controller.py:141, 158`):**
   - Dosya seçilmeden "Aç" tıklandığında: `Toast.show_error("Lütfen açmak için tek bir şablon dosyası seçin.", self)`.
   - Tanımsız bir şablon için yeniden oluşturma tıklandığında: `Toast.show_error("'{spec_key}' için varsayılan şablon tanımı bulunamadı.", self)`.

## D. Kullanıcı Doğrulama ve Nihai Kararlar (5N1K Teyidi)

Kullanıcı ile yapılan keşif ve teyit görüşmesi sonucunda alınan nihai operasyonel kararlar:

- **Soru 1 (Fiili Hizmet Hesaplama Kaynağı Değişimi):**  
  ➔ **NİHAİ KARAR: ONAYLANDI (DİKKAT / ÖNEMLİ PANELİ OLARAK EKLENECEK).** Fiili hizmet hesaplama yöntemi ('hybrid', 'manual', 'nobet') değiştirildiğinde geçmiş dönem puantajlarının ve SGK hakedişlerinin etkilenmemesi için bu değişikliğin yalnızca yeni takvim yılı/dönem başında yapılması gerektiği belirgin bir uyarı paneliyle kılavuza işlenecektir.
- **Soru 2 (Departman Silme Yasağı ve Personel Transferi Zorunluluğu):**  
  ➔ **NİHAİ KARAR: ONAYLANDI (OPERASYONEL KURAL OLARAK EKLENECEK).** Bir departmanın sistemde silinemeyeceği, kapatılmak istendiğinde pasife alınacağı ve bağlı aktif personel veya alt birim varsa pasife almanın engelleneceği kuralı netleştirilmiştir. Kılavuza "Bir birimi kapatmadan önce bağlı personellerin başka departmana transfer edilmesi zorunludur" operasyonel kuralı eklenecektir.
- **Soru 3 (Kategori Sorumluları Ekranı):**  
  ➔ **NİHAİ KARAR: ŞİMDİLİK KILAVUZA DAHİL EDİLMEYECEK (KAPSAM DIŞI / REVİZYON BEKLİYOR).** Kategori sorumluları yönetim sayfası yeniden gözden geçirileceğinden, nihai kılavuz sürümüne dahil edilmeyecek; kılavuz kapsamı Kurum Başlıkları/Logoları, Standart Şablonlar, Departman Hiyerarşisi, Unvanlar ve Tatil Takvimi üzerinde yoğunlaşacaktır.
- **Soru 4 (Şablon Orijinaline Sıfırlama ve Yedek Alma):**  
  ➔ **NİHAİ KARAR: ONAYLANDI (İPUCU KUTUSU EKLENECEK).** "Yeniden Oluştur" (Regenerate) butonunun kullanıcının Word/Excel üzerinde yaptığı özel şablon düzenlemelerini fabrika ayarlarına döndürdüğü belirtilecek; bu buton kullanılmadan önce `data/templates/` klasörünün yedeğinin alınması tavsiyesi kılavuzda vurgulanacaktır.

---

## E. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

- **🖥️ Masaüstü Ekranları (`PySide6`):**
  - `system_management_page.ui` (Sol gezinim ağacı ve dinamik sayfa alanı)
  - `program_settings_page.ui` (Genel parametreler, dil ve güvenlik ayarları tablosu)
  - `templates_page.ui` (Çift antet başlığı, logo seçimi, canlı önizleme ve Word/Excel şablon yönetim kokpiti)
  - `lookup_departman.ui` (Hiyerarşik departman, birim sorumlusu ve mimari kroki eşleme ekranı)
  - `lookup_unvan.ui` (Unvanlar, hizmet sınıfları, radyasyon ve nöbet varsayılanları)
  - `lookup_tatil.ui` (Resmi/Dini tatil takvimi, yıl filtreleme ve 0.5 gün eşikleri)
  - `lookup_kategori_sorumlulari.ui` (Anabilim Dalı düzeyinde sorumlu atama)

- **📱 Web Portalı & PWA (`React / Vite / Tailwind`):**
  - **CRUD Arayüzü Yoktur:** Web portalında sistem yöneticisine ait Sistem Ayarları, Şablon Düzenleme, Departman/Unvan CRUD veya Tatil Takvimi yönetim sayfası **bulunmamaktadır**.
  - **Salt Okunur (Read-Only) Tüketim:** Web portal backend'i (`web_portal/src/routes/lookup.routes.ts`), masaüstünden tanımlanan departman ve unvan listesini `GET /api/lookups` üzerinden salt okunur olarak çeker; bu veriler yalnızca nöbet havuzu, kullanıcı profili ve mobil arıza formundaki açılır kutularda gösterim amacıyla tüketilir.
  - **Kılavuz Notu:** Sistem yapılandırması, resmi tatil takvimi ve kurumsal antet/şablon yönetimi yalnızca kurum içi yetkili Masaüstü İstemcisi üzerinden gerçekleştirilebilir.

---

## F. Hedefli Ekran Görüntüsü Talebi

`docs/help/assets/img/` klasörü taranmış ve modül için doğrudan kullanıma hazır ekran görüntüleri tespit edilmiştir:

1. **Kurumsal Başlıklar, Çift Logo ve Canlı Antet Önizleme:**
   - **Dosya Yolu:** `docs/help/assets/img/03_templates_page.png` (Mevcut ve hazır)
   - **Alternatif/Detay Görseli:** `docs/help/assets/img/03_templates_page_01.png`
   - **Hedef Gösterim:** Kurum Başlık 1 ve 2 metin alanları, Logo 1 ve 2 dosya yolları, sağ taraftaki 100x100 logolu canlı antet önizleme paneli (`previewFrame`), şablon seçici açılır kutusu ve "Aç", "Yeniden Oluştur", "Klasörü Aç" butonları.

2. **Sistem Yönetimi Gezinim Ağacı ve Genel Parametreler:**
   - **Dosya Yolu:** `docs/help/assets/img/03_system_management_page.png` (Mevcut ve hazır)
   - **Hedef Gösterim:** Sol tarafta ağaç yapısındaki modül menüsü (`navTree`: Genel Ayarlar, Sistem Tanımları), sağ tarafta parametre tablosu (Kategori, Anahtar, Değer, Güncelleme) ve Ayar Detayı düzenleme paneli.

*(Destekleyici Görsel: Departman hiyerarşisi, birim sorumlusu ve kat planı eşlemesi için `docs/help/assets/img/03_lookup_departman.png` dosyası da arşivde hazır durumdadır).*
