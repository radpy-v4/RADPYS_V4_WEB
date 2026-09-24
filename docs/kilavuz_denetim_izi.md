# RADPYS V4 — Dokümantasyon Denetim İzi (Audit Trail)

Bu belge, kullanım kılavuzunda yer alan tüm operasyonel adımların, formüllerin, kısıtların, eşik değerlerin ve uyarı mesajlarının kaynak kodlardaki (`.ui`, `.py`, `.sql`, `.tsx`) birebir teknik karşılıklarını ve satır referanslarını belgeler.

---

## Modül 01: Kurulum, Başlatma ve İlk Giriş (`01_kurulum_ve_ilk_giris`)

- **Denetim Tarihi:** 2026-09-23
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 2 (Operasyonel İş Akışı & Güvenlik Doğrulaması)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Tekil Uygulama Kilidi** | Yok (İşletim Sistemi Seviyesi) | `main.pyw:136-170` (`ensure_single_instance`) | Win32 Mutex API | `kernel32.CreateMutexW(None, False, "Local\\RADPYS_V4_MAIN_APP_MUTEX")`. Açık pencere varsa `user32.ShowWindow(hwnd, SW_RESTORE)` ile öne getirilir. |
| **PostgreSQL Servis Kontrolü & UAC** | `QMessageBox` (Dinamik) | `main.pyw:382-415` | `app/db/engine_manager.py:start_postgres_elevated` | DB bağlantısı başarısız olduğunda `btn_elevate` ile UAC izni istenerek PostgreSQL servisi başlatılır. |
| **Kullanıcı Giriş Ekranı** | `login_page.ui:1151-1264` | `ui/controllers/login_controller.py:27-220` | `app/services/auth/auth_service.py` | `loginButton.clicked.connect(self._on_login)`, Enter tuşu varsayılan (`setDefault(True)`). |
| **Beni Hatırla Fonksiyonu** | `rememberCheckBox` (`login_page.ui:1230`) | `login_controller.py:59-104` | `QSettings("RADPYS", "RADPYS_V4")` | `self.settings.setValue("remember_me", checked)`. Parola asla kaydedilmez, sadece kullanıcı adı saklanır. |
| **Şifreyi Göster Toggle** | `showPasswordCheckBox` (`login_page.ui:1222`) | `login_controller.py:105-109` | `QLineEdit.EchoMode` | `setEchoMode(Normal if checked else Password)`. |
| **Lisans Süresi Dolum Kilidi** | `login_page.ui` | `login_controller.py:167-192` | `app/services/system/license_service.py:346-352` | Normal kullanıcıda `MesajKutusu.hata("Kurum lisans süresi dolmuştur...")` ile giriş engellenir; Admin için `user["license_locked"] = True` ile yalnızca aktivasyon ekranı açılır. |
| **İlk Giriş Zorunlu Şifre Değişimi** | `auth_password_change_dialog.ui:840-960` | `login_controller.py:194-208`, `auth_password_change_dialog.py:28-164` | `kullanicilar.ilk_giris` | `if user.get("ilk_giris") == 1`: dialog iptal edilirse `return` (giriş iptal edilir). Başarılı olursa `ilk_giris = 0` yapılır. |
| **Parola Karmaşıklık Politikası** | `policyLabel` (`auth_password_change_dialog.ui:933`) | `auth_password_change_dialog.py:76-85` | `app/services/auth/security.py:80-166` | Min 8 karakter, büyük harf, küçük harf, rakam, özel karakter, zayıf şifre kara liste (`WEAK_PASSWORDS`) ve kullanıcı adından farklı olma şartı. |
| **Şifremi Unuttum E-posta Sıfırlama** | `forgotButton` (`login_page.ui:1246`) | `auth_password_change_dialog.py:144-160` | `auth_service.reset_password_via_email` | Kullanıcı adı ve sistemde kayıtlı e-posta eşleşmesi zorunludur. |
| **Evrensel Arama (Ctrl+K)** | `command_palette_dialog.ui:961-1001` | `ui/widgets/command_palette_dialog.py:14-447` | `personeller` tablosu | `Ctrl+K` kısayoluyla açılır; min 2 karakterde canlı personel araması yapar, yetki matrisine göre modülleri listeler. |
| **Bildirim Merkezi & Rozet** | `notification_dialog.ui:1265-1342`, `notification_item.ui:1343-1405` | `ui/widgets/notification_dialog.py:1-420`, `app_controller.py:1623-1655` | `bildirimler` tablosu | Okunmamış bildirim varsa zil simgesi `#38BDF8` rengini alır. Panel aşağıdan yukarı `QPropertyAnimation` (280ms) ile kayarak açılır. |
| **Bildirimden Nöbet Devri Onayı** | `notification_item.ui:1343` | `notification_dialog.py:118-187` | `nobet_service.review_devir_talebi` | Tıklandığında `QMessageBox.question` açılır; Evet denirse birim amiri onay kuyruğuna aktarılır. |
| **Cihaz Kimliği (Machine ID)** | `mac_lbl`, `btn_copy` (`about_dialog.ui:180-194`) | `ui/widgets/about_dialog.py:160-222` | `license_service.get_machine_id` | `uuid.getnode()` SHA-256 ile özetlenir -> `RP-XXXX-XXXX-XXXX-XXXX`. Panoya kopyalanınca buton 2 saniye "Kopyalandı" olur. |
| **Ed25519 Lisans Doğrulama** | `key_input`, `btn_verify` (`about_dialog.ui:196-208`) | `about_dialog.py:223-248`, `license_service.py:70-139` | `PUBLIC_KEY_HEX`, `sistem_ayarlari` meta | `LK-AS-[P5|P15|P20|PRO|ELITE]-[PERM|YYYYMMDD]-[128-hex-imza]` formatı doğrulanır. |
| **Destek Log Paketi (ZIP)** | `btn_zip` (`about_dialog.ui:401`) | `about_dialog.py:249-286` | `logs/` dizini | `app.log`, `errors.log`, `sync.log` dosyaları masaüstünde `radpys_destek_log.zip` olarak sıkıştırılır. |
| **Web Portal Girişi** | React Form | `web_portal/src/components/LoginScreen.tsx:8-96` | `/api/auth/login`, `/api/auth/change-password` | Web üzerinden kullanıcı adı/şifre, zorunlu ilk şifre değişimi, açık/koyu tema seçimi. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Boş Giriş | `Eksik Bilgi` | `"Kullanıcı adı ve şifre zorunludur."` | `login_controller.py:121` |
| Hatalı Parola | `Giriş Başarısız` | `"Kullanıcı adı veya şifre hatalı."` | `login_controller.py:143` |
| Lisans Dolumu (Normal Kullanıcı) | `Lisans Süresi Doldu` | `"Kurum lisans süresi dolmuştur.\n\nSisteme giriş yapabilmek ve lisansı yenilemek için lütfen Sistem Yöneticinize (Admin) başvurunuz."` | `login_controller.py:175` |
| Lisans Dolumu (Yönetici) | `Yönetici Lisans Girişi` | `"Kurum lisans süresi dolmuştur.\n\nUygulama yalnızca Lisans Yönetimi modunda açılacaktır. Lütfen yeni lisans anahtarınızı giriniz."` | `login_controller.py:186` |
| Şifre Uyuşmazlığı | `Uyuşmazlık` | `"Girdiğiniz yeni şifreler birbiriyle uyuşmuyor."` | `auth_password_change_dialog.py:111` |
| DB Bağlantı Hatası | `RADPYS V4 — Veritabanı Bağlantı Hatası` | PostgreSQL motoru seçenekleri: UAC Başlat, Yeniden Dene, services.msc, Kapat. | `main.pyw:385` |
| Log ZIP Üretimi | `Başarılı` | `"Destek log paketi başarıyla Masaüstünüze kaydedildi:\n...\radpys_destek_log.zip"` | `about_dialog.py:274` |

### 3. İzole Edilen Hayalet Bileşenler (Ghost Components)
- `login_page.ui` içinde yer alan `label` isimli QLabel bileşeni controller seviyesinde `self.label.hide()` ile zorla gizlenmekte olup işlevsizdir.
- `about_dialog.py` içindeki `_apply_style()` metodu boş (`pass`) bırakılmıştır (Stiller global QSS üzerinden devralınmaktadır).
- `DISABLE_ACTOR_VALIDATION` ortam değişkeni bypass kilidi yalnızca otomatik testler içindir; arayüz kapsamı dışındadır.

---

## Modül 02: Kullanıcı ve Rol Yönetimi (`02_kullanici_ve_rol_yonetimi`)

- **Denetim Tarihi:** 2026-09-23
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 2 (Operasyonel İş Akışı & RBAC Yetki Matrisi)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Kullanıcı Yönetimi Sekmeli Taşıyıcı** | `tabWidget` (`kullanici_yonetim_main.ui:18`) | `UserManagementMainController:58-84` | `PermissionService` | Sekmeler: `kullanici`, `roller`, `yetkiler`. Yetki yoksa `setTabVisible(idx, False)` ile tamamen gizlenir. |
| **Kullanıcı Listesi & Arama** | `searchInput`, `usersTable` (`kullanici_yonetim_page.ui:48, 154`) | `users_controller.py:81-83, 133-176` | `app/services/auth/user_service.py:list_users` | `bind_search_input` ile arama yapılır. Tablo 6 sütunludur: Kullanıcı Adı, Ad Soyad, Email, Rol, Aktif, Son Giriş. |
| **Durum & Rol Filtreleme** | `statusFilter`, `cmbroller` (`kullanici_yonetim_page.ui:55, 74`) | `users_controller.py:102-132` | `role_service.list_role_options` | Aktif/Pasif ve dinamik rol seçenekleriyle veritabanından filtrelenir. |
| **Kullanıcı Ekleme / Düzenleme** | `addButton`, `editButton` (`kullanici_yonetim_page.ui:41, 97`) | `users_controller.py:177-226` | `UserFormController:140-232` | `UserFormController` açılır. Düzenlemede şifre boş bırakılırsa eski şifre korunur; yeni şifrede min. 8 karakter kuralı işler. |
| **Personel Bağlantısı** | `personelComboBox` (`kullanici_form_dialog.ui:161`) | `user_form_controller.py:105-114` | `user_service.list_personel_options` | Otomatik tamamlamalı ComboBox. Seçilmezse hesap bağımsız operatör/yönetici hesabı olur; nöbet ve dozimetreye dahil edilmez. |
| **Hesap Kilidi Kaldırma** | `unlockButton` (`kullanici_yonetim_page.ui:111`) | `users_controller.py:433-454, 556-583` | `user_service.unlock_user` | `yanlis_giris > 0` veya `kilitli_kadar > now()` ise buton aktifleşir; tıklandığında kilit ve sayaç sıfırlanır. |
| **Kullanıcı Pasife Alma** | `toggleActiveButton` (`kullanici_yonetim_page.ui:104`) | `users_controller.py:281-356` | `user_service.set_user_active` | `aktif = 0` yapılır. Kendi hesabını veya admin hesabını pasife alma mutlak olarak engellenir (`self_deactivate`, `admin`). |
| **Sistem Rolleri Yönetimi** | `addButton`, `rollersTable` (`roller_page.ui:49, 126`) | `roles_controller.py:109-159` | `app/services/auth/role_service.py` | Sistem rolleri listelenir. Tablo: Rol Adı, Açıklama, Aktif, Oluşturma Tarihi. |
| **Admin Rolü Dokunulmazlığı** | `rolAdiInput`, `aktifCheckBox` (`rol_ekle_dialog.ui`) | `role_form_controller.py:71-78`, `roles_controller.py:358-361` | `role_service.py:20-54` (`PROTECTED_SYSTEM_ROLES`) | "Admin" rolünün adı ve aktifliği kilitlenir (`setEnabled(False)`). Admin rolü silinemez. |
| **Bağlı Kullanıcısı Olan Rolü Koruma** | `deleteButton` (`roller_page.ui:97`) | `roles_controller.py:363-372` | `role_service.count_users_by_role` | `count_users > 0` ise silme/pasife alma engellenir; önce personellerin rollerinin taşınması istenir. |
| **Rol Klonlama / Kopyalama** | `actionCopy` (`moreButton` menüsü) | `roles_controller.py:304-344` | `role_service.copy_role_with_permissions` | Kaynak rolün tüm modül okuma/yazma/güncelleme/silme ve kapsam ayarları yeni türetilen role kopyalanır. |
| **Role Bağlı Kullanıcıları Görme** | Sağ tık `Kullanıcıları Göster` | `roles_controller.py:206-209` | `RoleUsersDialogController:13-57` | Seçili role bağlı kullanıcılar modal diyalogda ad-soyad ve durum bilgisiyle listelenir. |
| **Modül Yetki Matrisi** | `permissionsTable` (`modul_yetkileri_page.ui:183`) | `permissions_controller.py:158-287` | `permission_service.list_permissions` | 8 Sütun: Modül Adı, Okuma, Yazma, Güncelleme, Silme, Kapsam (4'lü Radio), Açıklama, Durum. |
| **Yetki Bağımlılık Zinciri** | `QCheckBox` hücreleri | `permissions_controller.py:367-390` | Mantıksal Bağımlılık Motoru | Yazma/Güncelleme/Silme açılınca Okuma otomatik açılır; Okuma kapatılınca diğer üçü otomatik kapatılır. |
| **Miras ve Kapsam Dağıtımı** | `r_miras`, `r_own`, `r_dep`, `r_all` | `permissions_controller.py:215-271` | `rol_modul_yetkileri.kapsam` | Miras (Rolün varsayılanı), Kendisi (`own`), Departman (`department`), Tümü (`all`). Açıklama anında güncellenir. |
| **Hazır Yetki Şablonları** | `templateComboBox`, `applyTemplateButton` (`modul_yetkileri_page.ui:124, 134`) | `permissions_controller.py:452-489` | `TEMPLATE_DEFS` | Sadece Okuma, Operasyon veya Tam Yetki şablonu tek tıkla matristeki tüm modüllere uygulanır. |
| **Roller Arası Canlı Kıyaslama** | `compareRoleComboBox`, `compareButton` (`modul_yetkileri_page.ui:63, 70`) | `permissions_controller.py:503-600` | `RoleComparisonController:15-88` | İki rolün yetki ve kapsamları karşılaştırılır; farklar `permission_compare` semantik rengiyle renklendirilir ve diyalogda açılır. |
| **Evrensel Onay Bayrağı** | `onayGerektirirCheckBox` (`rol_ekle_dialog.ui:64`) | `role_form_controller.py:90`, `app/db/seeds.sql` | `roller.onay_gerektirir` | Bayrak 1 olan tüm rollerin işlemleri Onay Bekleyen Görevler havuzuna yönlendirilir. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Kendi Hesabını Pasife Alma | `Islem Engellendi` | `"Kendi hesabinizi pasife alamazsiniz."` | `users_controller.py:303` |
| Admin Hesabını Pasife Alma | `Islem Engellendi` | `"Admin kullanicisi pasife alinamaz."` | `users_controller.py:314` |
| Açık Oturumu Silme/Pasife Alma | `Islem Engellendi` | `"Acik oturumu silemezsiniz."` | `users_controller.py:378` |
| Admin Hesabını Silme | `Islem Engellendi` | `"Admin kullanicisi silinemez."` | `users_controller.py:389` |
| Hesap Kilidi Açma Onayı | `Kilit Kaldır` | `ask_confirm: "'{username}' kullanıcısının başarısız giriş denemelerini sıfırlamak ve kilidini açmak istiyor musunuz?"` | `users_controller.py:442` |
| Kilit Açma Başarısı | Toast Mesajı | `Toast.show_success("'{username}' kullanıcısının kilidi kaldırıldı.")` | `users_controller.py:450` |
| Admin Rolünü Silme | `İşlem Engellendi` | `"Admin rolü silinemez."` | `roles_controller.py:360` |
| Kullanımda Olan Rolü Silme | `Rol Kullanımda` | `"Bu role bağlı {user_count} kullanıcı var. Rolü silmek için önce kullanıcıların rollerini değiştiriniz."` | `roles_controller.py:368` |
| Kaydedilmemiş Yetki Değişikliği | `Kaydedilmemiş Değişiklikler` | `ask_confirm: "Kaydedilmemiş değişiklikler mevcut. Devam ederseniz bu değişiklikler kaybolacak.\n\nYine de devam etmek istiyor musunuz?"` | `permissions_controller.py:141` |
| Aynı Rol Kıyaslama | `Karşılaştırma` | `"Aynı rol ile karşılaştırma yapılamaz."` | `permissions_controller.py:515` |
| Kullanıcı Formu Doğrulama | `Doğrulama` (Shake) | `"Kullanıcı adı zorunludur."` / `"Kullanıcı adı 3-64 karakter aralığında olmalıdır."` / `"Rol seçimi zorunludur."` / `"Şifre en az 8 karakter olmalıdır."` | `user_form_controller.py:157-182` |

### 3. İzole Edilen ve Temizlenen Hayalet Bileşenler (Ghost Components)
- `usersTable` ve `rollersTable` içerisindeki atıl/başlıksız sütun basımları (`Çift tıkla düzenle` ve `Çift tık / Sağ tık`) kod seviyesinde tamamen temizlenmiş, XML sütun sayılarıyla (6 ve 4 sütun) tam uyum sağlanmıştır.
- `kullanici_yonetim_page.ui` toolbar'ında fiziksel buton olarak yer almayan silme ve toplu işlem eylemleri, sağ tık bağlam menüsü (`_show_context_menu`) üzerinden eksiksiz ve güvenli şekilde çalışmaktadır.
- Web Portal tarafında sistem yöneticisine yönelik bir Kullanıcı veya Rol Yönetimi ekranı bulunmamaktadır; bu modül yalnızca Masaüstü uygulamasında aktiftir.

---

## Modül 03: Sistem Ayarları ve Tanımlamalar (`03_sistem_ayarlari_ve_tanimlamalar`)

- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 1 / Tier 2 Hibrit (Tanım/CRUD + Hiyerarşik Bağımlılık Doğrulama ve Canlı Şablon Önizleme)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Entegre Gezinim Ağacı** | `navTree` (`system_management_page.ui:18`) | `system_management_controller.py:84, 108` | `PermissionService` | `_check_permission(module, action)` false ise menü düğümü oluşturulmaz; tüm alt öğeleri yetkisiz olan gruplar gizlenir. |
| **Program Parametreleri Tablosu** | `settingsTable` (`program_settings_page.ui:68`) | `program_settings_controller.py:107-128` | `app/services/system/settings_service.py` | 4 Sütun: Kategori, Anahtar, Değer, Güncelleme. `rapor` kategorisi ve `_aktif` ikiz ayarları ham tablodan gizlenir (`templates` sayfasına delege edilir). |
| **Dinamik Dil Değişimi** | `valueCombo` (`program_settings_page.ui:166`) | `program_settings_controller.py:205-225, 419, 503` | `TranslationService` | `resources/langs/*.json` taranır; kayıt anında `translation_service.load_language(value)` dinamik tetiklenir. |
| **Fiili Hizmet Kaynak Seçimi** | `valueCombo` | `program_settings_controller.py:155-168, 452` | `ayarlar(fiili_hizmet, hesaplama_kaynagi)` | Hibrit, Manuel veya Nöbet seçenekleri. Değişim anında `ask_confirm` kritik uyarısı verilir. |
| **Logo Otomatik Kopyalama** | `browseButton` (`program_settings_page.ui:171`) | `program_settings_controller.py:325-350, 375, 459` | `resources/icons/` | Seçilen resim `resources/icons` altına kopyalanır (`shutil.copy2`), DB'ye yalnızca dosya adı kaydedilir. |
| **Kurum Çift Başlık ve Logo Anteti** | `grpGeneralSettings` (`templates_page.ui:183`) | `templates_controller.py:252-333` | `ayarlar(rapor, *)` | `txtBaslik1`, `txtBaslik2`, `logo_1_yolu`, `logo_2_yolu` ve bunlara bağlı `chkBaslik1Goster`, `chkLogo1Goster` gibi `*_aktif` onay kutuları DB'ye yazılır. |
| **Canlı Antet Önizleme Çerçevesi** | `previewFrame` (`templates_page.ui:18`) | `templates_controller.py:338-390` | Canlı QPixmap & QLabel | Metin/onay kutusu değişiminde sol logo (100x100), ortalı başlıklar (14pt Bold) ve sağ logo canlı yeniden çizilir. |
| **Word/Excel Şablonunu Açma** | `btnOpenTemplate` (`templates_page.ui:220`) | `templates_controller.py:137-144` | `data/templates/` dizini | Seçilen dosya `QDesktopServices.openUrl` ile işletim sisteminin varsayılan ofis uygulamasında (Word/Excel) açılır. |
| **Şablon Orijinaline Sıfırlama** | `btnRegenerateTemplate` (`templates_page.ui:230`) | `templates_controller.py:145-169` | `template_updater.py:TEMPLATE_SPECS` | Şablon fabrika ayarlarına döndürülür (`update_excel_template`, `update_word_template`). |
| **Şablon Klasörünü Açma** | `btnOpenFolder` (`templates_page.ui:240`) | `templates_controller.py:170-175` | `data/templates/` dizini | `data/templates` dizini Windows Explorer dosya yöneticisinde açılır. |
| **Departman Hiyerarşi Tablosu** | `departmentsTable` (`lookup_departman.ui:94`) | `lookup_controller.py:276-302` | `lookup_service.list_departments` | 7 Sütun: Departman, Kod, Üst Departman, Birim Sorumlusu, Radyasyonlu, Nöbet, Durum. |
| **Döngüsel Departman Engeli** | `depParentCombo` (`lookup_departman.ui:234`) | `lookup_controller.py:753`, `lookup_service.py:663-671` | `_is_descendant_department` | Kendisi veya alt dallarındaki birim üst departman olarak seçilemez. |
| **Departman Pasife Alma Kalkanı** | `depActiveCheck` (`lookup_departman.ui:328`) | `lookup_service.py:674-688` | `_department_dependencies` | Departmana bağlı personel veya aktif alt departman varsa pasife alma kesinlikle engellenir. |
| **Kat Planı / Kroki Eşleme Köprüsü** | `depKrokiCombo`, `depKrokiUploadBtn` (`lookup_departman.ui:256, 266`) | `lookup_controller.py:797-861` | `krokiler` tablosu | PDF/PNG/JPG dosya seçimi, başlık girişi, krokiler tablosuna kayıt ve departmana bağlama. |
| **Unvan Tanımları & Hizmet Sınıfı** | `titlesTable` (`lookup_unvan.ui:94`) | `lookup_controller.py:304-329` | `lookup_service.list_titles` | 5 Sütun: Unvan, Kod, Hizmet Sınıfı, Radyasyon Görevlisi, Durum. Standart kod kuralı: `^[A-Z0-9_]{2,20}$`. |
| **Radyasyon Görevlisi & Nöbet Varsayılanı**| `titleRadiationCheck`, `titleNobetCheck` (`lookup_unvan.ui:252, 269`) | `lookup_controller.py:924-927, 1148-1159` | `unvanlar.radyasyon_gorevlisi_mi`, `nobet_tutabilir_varsayilan` | Personel kartı oluşturulurken seçilen unvanın bu bayrakları yeni personele otomatik aktarılır. |
| **Resmi Tatil Takvimi & Yıl Filtresi**| `holidayTable`, `holidayYearFilter` (`lookup_tatil.ui:27, 85`) | `lookup_controller.py:359-388, 587-605` | `lookup_service.list_holidays` | 6 Sütun: Tarih, Tatil Adı, Tür, Gün Sayısı, Durum, Açıklama. Yıl bazlı filtrelenir. |
| **Tatil Gün Sayısı 0.5 Gün Eşiği** | `holidayDayCountInput` (`lookup_tatil.ui:230`) | `lookup_controller.py:974`, `lookup_service.py:1347-1358` | `tatiller.tatil_gun_sayisi` | Min 0.5, Max 365, Adım 0.5. Arefe ve yarım günler için 0.5'in katı olma şartı zorunludur. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Fiili Hizmet Yöntem Değişimi | `Kritik Ayar Değişikliği` | `ask_confirm: "Fiili hizmet hesaplama yöntemi değiştirildiğinde, daha önce yapılmış olan dönem hesaplamalarının bütünlüğü ve geçmiş hakedişler etkilenebilir.\n\nDevam etmek istediğinize emin misiniz?"` | `program_settings_controller.py:452` |
| Mükerrer Ayar Anahtarı | `Kayıt Hatası` | `QMessageBox.warning: "Bu kategori ve anahtara sahip bir ayar zaten mevcut. Lütfen güncellemek için listeden seçiniz."` | `program_settings_controller.py:371` |
| Logo Kopyalama Hatası | `Logo Kopyalama Hatası` | `QMessageBox.warning: "Dosya kopyalanamadı: {e}"` | `program_settings_controller.py:349` |
| Şablon Seçilmeden Açma | Toast Mesajı | `Toast.show_error("Lütfen açmak için tek bir şablon dosyası seçin.")` | `templates_controller.py:141` |
| Şablon Tanımı Bulunamadı | Toast Mesajı | `Toast.show_error("'{spec_key}' için varsayılan şablon tanımı bulunamadı.")` | `templates_controller.py:158` |
| Departman Adı / Kod Boş | `Kayit Hatasi` | `"Departman adı zorunludur."` / `"Departman kodu zorunludur."` | `lookup_service.py:644, 647` |
| Departman Kodu Formatı | `Kayit Hatasi` | `"Departman kodu formatı geçersiz. Sadece büyük harf, rakam ve alt çizgi (_) kullanın (2-20 karakter)."` | `lookup_service.py:650` |
| Mükerrer Departman Kodu | `Kayit Hatasi` | `"Bu departman kodu zaten kullanılıyor: {code}"` | `lookup_service.py:658` |
| Departman Kendi Kendinin Üstü | `Kayit Hatasi` | `"Bir departman kendisinin ust departmani olamaz."` | `lookup_service.py:665` |
| Departman Hiyerarşik Döngü | `Kayit Hatasi` | `"Secilen ust departman bu departmanin alt agacinda yer aliyor; hiyerarside dongu olusturulamaz."` | `lookup_service.py:668` |
| Departman Pasife Alma Kısıtı | `Kayit Hatasi` | `"Bu departman pasife alinamaz: {deps['personel']} personel kaydi, {deps['alt_departman']} aktif alt departman. Once bagimliliklari kaldirin."` | `lookup_service.py:684` |
| Tatil Adı / Tarih Boş | `Kayit Hatasi` | `"Gecerli bir tarih seciniz."` / `"Tatil adi zorunludur."` | `lookup_service.py:1333, 1336` |
| Tatil Türü Geçersiz | `Kayit Hatasi` | `"Tatil turu gecersiz. Resmi, Dini veya Idari olmalidir."` | `lookup_service.py:1341` |
| Tatil Gün Sayısı Adım Hatası | `Kayit Hatasi` | `"Tatil gun sayisi 0.5 adimlarla girilmelidir."` | `lookup_service.py:1357` |
| Mükerrer Tatil Kaydı | `Kayit Hatasi` | `"Ayni tarih ve tur icin baska bir tatil kaydi zaten var."` | `lookup_service.py:1364` |
| Tatil Silme Onayı | `Onay` | `ask_confirm: "Secili tatil kaydini silmek istediginize emin misiniz?"` | `lookup_controller.py:1338` |

### 3. İzole Edilen ve Temizlenen Hayalet Bileşenler (Ghost Components)
- `categoryList`: Eski tasarımdan kalma olan ve `program_settings_page.ui` dosyasında fiziksel karşılığı bulunmayan atıl `categoryList` kontrol kodları (`hasattr`, `blockSignals`, `itemSelectionChanged`, `currentItem`), `program_settings_controller.py` dosyasından tamamen silinerek temizlenmiştir. Kategori seçimi doğrudan `system_management_controller.py` gezinim ağacı ve form içi açılır kutu (`formCategoryCombo`) üzerinden yürütülmektedir.
- `depDeleteButton` ve `titleDeleteButton`: Departmanlar ve unvanlar için arayüzde silme butonu bulunmamaktadır. Veri bütünlüğünü korumak amacıyla silme yerine pasife alma yöntemi uygulanır; unvanlar için ayrıca backend'de `merge_titles` birleştirme desteği mevcuttur.
- `kategori_sorumlulari`: Kullanıcı ve mimari kararıyla sayfa yeniden gözden geçirileceği için nihai kılavuz kapsamından çıkarılmış ve revizyon durumuna alınmıştır.
- Web Portal tarafında Sistem Ayarları veya Tanımlama CRUD sayfası bulunmamaktadır; `GET /api/lookups` üzerinden yalnızca salt okunur referans veri tüketimi yapılmaktadır.

---

## Modül 04: Veritabanı Bakım ve Güvenlik (`04_veritabani_bakim_ve_guvenlik`)

- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 2 (Operasyonel İş Akışı & Kritik Sistem Güvenliği Altyapısı)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Veritabanı Yedekleme (Dump)** | `btnSaveBackup` (`db_maintenance_page.ui:115`) | `db_maintenance_controller.py:396-450` | `BackupWorker`, `pg_dump` | `pg_dump -F c` ile alınan ham baytlar, PBKDF2 (100.000 iterasyon, SHA-256) ve AES akış şifrelemesiyle `data/backups/radpys_db_backup_{timestamp}.dump` olarak yazılır. |
| **Yüklenen Dosyaları Yedekleme (ZIP)** | `btnSaveUploadsBackup` (`db_maintenance_page.ui:122`) | `db_maintenance_controller.py:400-450` | `data/uploads/` dizini | `data/uploads/` içeriği geçici zip'e sıkıştırılır, 256-bit anahtarla şifrelenip `uploads_backup_{timestamp}.zip` olarak kaydedilir. |
| **Yedekler Listesi & Boyut** | `tableBackups` (`db_maintenance_page.ui:138`) | `db_maintenance_controller.py:322-395` | `data/backups/` dizini | 4 Sütun: Yedek Dosyası, Oluşturulma Tarihi, Boyut (MB), İşlemler (3'lü buton hücresi: Yükle, Dışa Aktar, Sil). |
| **Yedeği Geri Yükleme (Restore)** | `actions_widget > Yükle` | `db_maintenance_controller.py:475-602` | `pg_restore`, `zipfile`, `SudoDialogController` | Çift onay + Sudo şifresi -> Şifre çözme (`decrypt_data`) -> `pg_restore --clean --if-exists` ile veritabanına basma -> `db.sync_postgres_sequences()`. |
| **Yedeği Dışa Aktarma** | `actions_widget > Dışa Aktar` | `db_maintenance_controller.py:603-627` | `QFileDialog.getSaveFileName` | Kullanıcının belirlediği harici konuma `shutil.copy2` ile güvenli kopya çıkarır. |
| **Yedeği Kalıcı Olarak Silme** | `actions_widget > Sil` | `db_maintenance_controller.py:628-650` | `SudoDialogController` | Onay + Sudo doğrulaması sonrası `backup_path.unlink()` ile dosyayı diskten siler. |
| **Boyut Optimize Et (VACUUM)** | `btnVacuum` (`db_maintenance_page.ui:180`) | `db_maintenance_controller.py:651-676` | `DBMaintenanceService.vacuum_database` | Autocommit modunda `VACUUM ANALYZE` koşturur; işlem öncesi/sonrası boyut farkını (`pg_size_pretty`) ölçer ve kullanıcıya bildirir. |
| **Sistem Tanısı ve Otomatik Onarım** | `btnIntegrity` (`db_maintenance_page.ui:207`) | `db_maintenance_controller.py:677-682`, `diagnostics_dialog_controller.py:24-199` | `DiagnosticsService:27-185` | 5 kritik anomali taraması (Audit Log bütünlüğü, yetim nöbet/dozimetre kayıtları, geçersiz izin tarihleri, trim boşlukları). Sudo ile tek tıkla otomatik onarım (`auto_repair_all`). |
| **İndeksleri Yenile (REINDEX)** | `btnReindex` (`db_maintenance_page.ui:234`) | `db_maintenance_controller.py:705-725` | `DBMaintenanceService.reindex_database` | Autocommit modunda `REINDEX SCHEMA public` çalıştırarak public şemadaki tüm indeksleri sıfırdan kurar. |
| **Tehlikeli Bölge: Veritabanı Sıfırlama** | `btnResetDB` (`db_maintenance_page.ui:301`) | `db_maintenance_controller.py:726-780`, `ConfirmResetDialog:192-253` | `DBMaintenanceService.reset_database` | Admin rolü denetimi -> "SIFIRLA" doğrulama metni girişi -> Sudo şifresi -> 48 adet işlem tablosuna `TRUNCATE CASCADE` -> Admin dışı kullanıcıları silme -> Sequence eşitleme. |
| **Birleşik Log Merkezi Taşıyıcısı** | `tabs` (`LogKayitlariController`) | `log_kayitlari_controller.py:14-80` | 3 Sekme (`history.svg`, `activity.svg`, `shield-check.svg`) | Sekme 1: Tarihsel Sistem Günlükleri, Sekme 2: Kullanıcı Etkileşim Günlüğü, Sekme 3: KVKK/NDK Denetim İzi. Tembel yükleme (lazy loading). |
| **Tarihsel Log Görüntüleyici** | `logTypeCombo`, `logTextEdit` (`log_viewer_page.ui:58, 213`) | `log_viewer_controller.py:65-261` | `logs/app.log`, `sync.log`, `errors.log`, `ui.log` | Dosya seçimi, arama (350ms debounce), seviye filtresi (INFO/WARNING/ERROR), tarih aralığı, syntax renklendirmesi (`LogSyntaxHighlighter`) ve panoya kopyalama. |
| **Kullanıcı Etkileşim Günlüğü** | `logTable` (`interaction_log_viewer_page.ui:153`) | `interaction_log_viewer.py:486-605` | `logs/interaction_audit.jsonl` | 5 Sütun: Zaman, İşlem Türü, Ekran, Controller, Detay. Çift tıkla `JsonDetailDialog` açılır. `clearButton` ile son oturum hariç günlükler Sudo şifresiyle temizlenir. |
| **KVKK / NDK Kriptografik Denetim İzi**| `AuditLogViewerController` | `audit_log_viewer_controller.py:88-383` | `logs/kvkk_audit.jsonl` | SHA-256 hash zinciri (`prev_hash` -> `current_hash`) doğrulaması; tahrifat varsa canlı kırmızı ikaz rozeti. Çift tıkla `AuditDetailDialog` açılır. |
| **Global Çökme Yakalama (Crash)** | `CrashDialog` (`crash_dialog.ui:4`) | `ui/widgets/crash_dialog.py:10-128` | `main.pyw:60-91` (`handle_exception`) | Yakalanmamış exception oluştuğunda programın kapanmasını engelleyip modal açar. Tek tıkla traceback kopyalatır veya `radpys.iletisim@gmail.com` adresine otomatik şablon mail gönderir. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Sıfırlama Metin Hatası | `Hatalı Giriş` | `QMessageBox.warning: "Lütfen doğrulama kutusuna tam olarak 'SIFIRLA' yazın."` | `db_maintenance_controller.py:248` |
| Yetkisiz Sıfırlama Girişimi | `Yetkisiz İşlem` | `QMessageBox.critical: "Veritabanı sıfırlama yetkisi yalnızca Root / Sistem Yöneticisine (admin) aittir."` | `db_maintenance_controller.py:739` |
| Sıfırlama Başarısı | `Sıfırlama Başarılı` | `QMessageBox.information: "Veritabanı başarıyla fabrika ayarlarına döndürüldü.\nTanımlar, roller ve admin hesabı korunmuştur."` | `db_maintenance_controller.py:760` |
| Veritabanı Restore Uyarısı | `Yedeği Geri Yükleme Onayı` | `ask_confirm: "'{name}' veritabanı yedeğini geri yüklemek istediğinize emin misiniz?\n\nUYARI: Aktif veritabanındaki tüm kaydedilmemiş mevcut veriler kaybolacak ve veritabanı seçilen yedeğin durumuna geri döndürülecektir."` | `db_maintenance_controller.py:491` |
| Dosya Kasası Restore Uyarısı | `Yedeği Geri Yükleme Onayı` | `ask_confirm: "'{name}' dosya yedeğini geri yüklemek istediğinize emin misiniz?\n\nUYARI: Mevcut tüm yüklü dosyalar silinip yerine bu yedekteki dosyalar yazılacaktır."` | `db_maintenance_controller.py:487` |
| Restore Başarısı | `Başarılı` | `QMessageBox.information: "Veritabanı seçilen yedekten başarıyla geri yüklendi.\nDeğişikliklerin ekranda güncellenmesi için uygulamayı kapatıp açmanız önerilir."` | `db_maintenance_controller.py:591` |
| Yedek Silme Onayı | `Yedeği Silme Onayı` | `ask_confirm: "'{name}' yedeğini kalıcı olarak silmek istediğinize emin misiniz?"` | `db_maintenance_controller.py:634` |
| VACUUM Optimizasyon Başarısı | `Optimizasyon Başarılı` | `QMessageBox.information: "PostgreSQL veritabanı optimizasyonu (VACUUM ANALYZE) tamamlandı.\n\nÖnceki Boyut: {before}\nŞimdiki Boyut: {after}\nSorgu planlayıcı istatistikleri başarıyla güncellendi."` | `db_maintenance_controller.py:663` |
| REINDEX Başarısı | `İndeksleme Başarılı` | `QMessageBox.information: "PostgreSQL 'public' şemasındaki tüm indeksler başarıyla yeniden oluşturuldu."` | `db_maintenance_controller.py:716` |
| Şifreleme Anahtarı Kayıp | `Hata` | `QMessageBox.critical: "Şifreleme anahtarı bulunamadı."` | `db_maintenance_controller.py:522` |
| Etkileşim Günlüğü Temizleme Onayı | `Günlüğü Temizle` | `MesajKutusu.soru: "Son oturum ({session}) hariç tüm etkileşim günlüğünü temizlemek istediğinize emin misiniz?"` | `interaction_log_viewer.py:572` |
| Otomatik Onarım Onayı | `Otomatik Onarım Onayı` | `QMessageBox.question: "Tespit edilen veritabanı boşlukları, yetim kayıtlar ve tarih mantık hataları otomatik onarılacaktır.\n\nDevam edilsin mi?"` | `diagnostics_dialog_controller.py:157` |

### 3. İzole Edilen ve Temizlenen Hayalet Bileşenler (Ghost Components)
- `btnExportUnencrypted` ve `btnKeyManager`: `db_maintenance_page.ui` içinde yer alan ve controller bağlantısı bulunmayan bu iki buton (eski SQLite ihracı ve manuel anahtar kasası kalıntıları), PostgreSQL mimarisi ve kurumsal veri güvenliği gereğince `db_maintenance_page.ui` XML dosyasından **tamamen temizlenmiştir**.
- `btnAnalyze` ve `btnFullReport`: `interaction_log_viewer_page.ui` içindeki bu geliştirici analiz butonları ana uygulamada `setVisible(False)` ile gizlenmiştir; bu analizler bağımsız `tools/RADPYS_Master_Tool.py` üzerinde yürütülmektedir.
- Web Portal tarafında Sistem Bakım, Veritabanı Yedekleme/Sıfırlama veya Sistem Log Görüntüleyici ekranı bulunmamaktadır; bu kritik işlevler yalnızca Masaüstü Sistem Yöneticisi kokpitinde yürütülür.

---

## Modül 05: Personel Yönetimi ve Toplu Aktarım (`05_personel_yonetimi_ve_toplu_aktarim`)

- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 1 (Temel Operasyonel Özlük Altyapısı & Nükleer/KVKK Mevzuat Kokpiti)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Personel Tablosu (Operasyonel Kokpit)** | `personelTable` (`personel_listesi_page.ui:410`) | `personel_list_controller.py:643-705, 1002-1050` | `PersonelService.list_personel`, `_avatar_delegate.py`, `_status_delegate.py` | 10 sütunlu tablo; TC ve Soyad gizlenir (`setColumnHidden`), Ad sütununda avatar + tam ad + sicil no kombine edilir (`PersonelAvatarDelegate`). Durum ve Hizmet Tipi sütunlarına renkli rozet delegesi (`BadgeDelegate`) atanır. |
| **Gecikmeli Arama (Debounced Search)** | `searchInput` (`personel_listesi_page.ui:369`) | `personel_list_controller.py:252-256, 730-737` | `QTimer (SEARCH_DEBOUNCE_MS = 300)` | 300 ms gecikmeyle arka plan aramasını tetikler; ad, soyad, TC, sicil no ve telefon alanlarında duyarsız arama (`turkish_search_normalize`) yapar. |
| **Filtreler & Gizleme/Gösterme** | `durumFilter`, `departmanFilter`, `hizmetSinifiFilter`, `btnToggleFilters` | `personel_list_controller.py:278-295, 706-729` | `LookupService`, `setup_filter_toggle` | Varsayılan durum "Aktif"tir. Filtre değiştiğinde sayfa indeksi 0'a çekilir. `btnToggleFilters` butonu `filterFrame` görünürlüğünü dinamik toggle eder. |
| **Pencere Kapat Butonu** | `btnScreenClose` (`personel_listesi_page.ui:56`) | `personel_list_controller.py:296-297` | `QWidget.close` | UI başlık çubuğundaki kapat butonu; kullanıcı kararı doğrultusunda `self.btnScreenClose.clicked.connect(self.close)` ile işlevsel hale getirilmiştir. |
| **Canlı KPI Sayaç Kartları** | `kpiCardToplam`, `kpiCardAktif`, `kpiCardRgs`, `kpiCardGecici` | `personel_list_controller.py:990-1001` | `PersonelService.get_personel_kpi_summary` | Toplam, Aktif, Radyasyon Görevlisi ve Geçici/Stajyer sayılarını tek sorguda çekip `lblKpi*Val` etiketlerine basar. |
| **Sayfalama Motoru (Pagination)** | `pageSizeCombo`, `prevPageButton`, `nextPageButton`, `pageInfoLabel` | `personel_list_controller.py:747-850` | `QSettings (_QSETTINGS_ORG)` | Sayfa boyutları: 50, 100, 200, 500, Tümü (varsayılan 100). Seçim `QSettings` içine yazılır. Sayfa geçişlerinde `LIMIT/OFFSET` çalışır. 1000+ kayıtta "Tümü" seçilirse performans uyarısı verir. |
| **Personel Ekleme Sihirbazı (5 Adım)** | `addButton` -> `PersonelAddController` (`personel_ekle_dialog.ui`) | `personel_add_controller.py:22-130`, `_personel_form_base.py:72-640` | `PersonelService.create_personel`, `DocumentService` | 5 Adımlı Wizard: 1. Kimlik (TC doğrulama + blur çakışma denetimi), 2. İletişim (Telefon maskesi, acil durum yakınları), 3. Özlük (Sicil, Unvan, Departman, Görev Yeri), 4. Eğitim (Mezuniyet, NDK/TAEK belgeleri), 5. Belgeler (AES-256 evrak kasası). |
| **Lisans Personel Kotası Kontrolü** | `saveButton` (`personel_ekle_dialog.ui`) | `personel_service.py:363-367` | `LicenseService.check_personel_limit` | Eklenen personelin durumu `Aktif` ise kurumun lisanslı personel kotası kontrol edilir; aşımda işlem engellenir (`SonucYonetici.hata`). |
| **Otomatik Bağlı Kullanıcı Hesabı** | Arka Plan Servis İşlemi | `personel_service.py:384, 1444-1505` | `UserService`, `load_password_policy` | Personel eklendiğinde `kullanicilar` tablosuna otomatik kullanıcı açılır. Şifre politikasına uygun (min 16 hane, karmaşık) geçici parola üretilir ve PBKDF2 ile hash'lenir. |
| **Personel Detay Kartı (10 Kategori)** | `detailButton` -> `PersonelDetailController` (`personel_detay_page.ui`) | `personel_detail_controller.py:80-160` | `PersonelService.get_personel`, `IzinService`, `DozimetreService` | Sol listeden 10 kategori: Genel & İletişim, Kurumsal, Eğitim, İzin, Sağlık, Dozimetre, Belgeler, Nöbet Geçmişi, Değişiklik Geçmişi (Audit), İşten Ayrılış. Kaydedilmemiş değişiklik takibi (`_setup_dirty_tracking`). |
| **İşten Ayrılış ve RKE/Dozimetre Kilidi**| `btnAyrilisKaydet` (`personel_detay_page.ui:3750`) | `personel_detail_controller.py:1570-1635`, `personel_service.py:1010-1055` | `personel_service.set_durum` | Zimmetli RKE varsa işlem engellenir (`RED-AYRILIS-RKE-ZIMMET`). Aktif dozimetre varsa kullanıcıdan onay istenir (`RED-AYRILIS-DOZIMETRE-IADE`). Ayrılan personel aktif RGS ise görevlendirmesi otomatik sonlandırılır (`RED-AYRILIS-RGS-ACTIVE`). |
| **30 Yıl Saklama Zorunlu KVKK Arşiv Paketi** | `btnKvkkExportZip` (`personel_detay_page.ui:3760`) | `personel_detail_controller.py:1532-1569` | `KVKKDataExporter.export_personel_archive` | NDK Madde 19 / EURATOM 30 yıl doz geçmişi, İSG 30 yıl sağlık muayeneleri, 10 yıl eğitim/özlük belgeleri ve KVKK Madde 11 veri iade paketini `kvkk_arsiv_{tc}.zip` olarak dışa aktarır. |
| **Merkezi Toplu Veri Aktarım Sihirbazı** | `bulkImportButton` -> `ImportController` (`import_page.ui`) | `import_controller.py:200-350, 521-650` | `UniversalImportWorker`, `LookupResolverMixin` | 5 Adım: Dosya Seçimi (.xlsx/.xls/.csv sürükle-bırak) -> Kolon Eşleme -> Tanımsız Değer Eşleme (Lookup Resolver) -> Önizleme & Dry-Run Doğrulama (Geçerli/Mükerrer/Hatalı rozetleri) -> Asenkron Aktarım, Hata Raporu ve Otomatik Oluşturulan Kimlik Dökümü (`tblCredentialsLog`). |
| **Gebelik Bildirimi ve Gece Nöbeti İptali** | `gebelik_bildirimi_dialog.ui` | `personel_service.py:403-552` | `personel_calisma_kisitlari`, `nobet_cizelgesi` | Yalnızca kadın personele tanımlanır. Fazla mesai sıfırlanır, `nobet_cizelgesi` üzerindeki tüm gece nöbetleri (>= 16:00 veya < 06:00) otomatik iptal edilir. Doğum kaydedildiğinde 1 yıllık süt izni kısıtı başlatılır. |
| **Yazdırma ve Antetli PDF İhracı** | `btnPrint`, `btnExportPdf` (`personel_listesi_page.ui:276, 283`) | `personel_list_controller.py:1417-1540` | `ExportService`, `ReportEngine`, `QPrinter` | Kurumsal antetli, çift logolu resmi PDF dosyası oluşturur veya sistem yazdırma diyaloğu (`QPrintDialog`) açar. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| TC Kimlik Çakışması | `TC Kimlik Çakışması` | `QMessageBox.warning: "Bu TC Kimlik numarasi baska bir personelde kayitli."` | `_personel_form_base.py:447` |
| Zorunlu Ad/Soyad Eksik | `Kayıt Hatası` | `SonucYonetici.hata: "Ad alani zorunludur." / "Soyad alani zorunludur."` | `personel_service.py:1270-1272` |
| Lisans Kotası Aşımı | `Lisans Sınırı` | `SonucYonetici.hata: "Aktif personel limiti aşıldı."` | `personel_service.py:365` |
| RKE Zimmet Engeli | `İşten Ayrılış Engeli` | `SonucYonetici.hata: "Personelin üzerinde {count} adet zimmetli koruyucu kurşun ekipman (RKE) bulunmaktadır. Ekipmanlar teslim alınmadan veya başka personele zimmet devredilmeden personel pasife alınamaz."` | `personel_service.py:1017` |
| Dozimetre İade Onayı | `Dozimetre İade Onayı` | `ask_confirm: "Personelin üzerinde teslim edilmemiş aktif dozimetre bulunmaktadır.\n\nYine de işten ayrılışa geçirmek istiyor musunuz?"` | `personel_detail_controller.py:1615` |
| Kaydedilmemiş Değişiklikler | `Kaydedilmemiş Değişiklikler` | `ask_confirm: "Kaydedilmemis degisiklikler var. Cikmak istediginize emin misiniz?"` | `_personel_form_base.py:537` |
| Performans Uyarısı (Tümü) | `Performans Uyarısı` | `QMessageBox.warning: "Filtreye uygun {count} kayıt bulundu. Tüm kayıtların tek seferde yüklenmesi performansı olumsuz etkileyebilir. Devam etmek istiyor musunuz?"` | `personel_list_controller.py:895` |
| Toplu İçe Aktarım Yetki Yok | `Yetki` | `QMessageBox.warning: "Personel toplu import yetkiniz bulunmuyor."` | `personel_list_controller.py:623` |
| Gebelik Cinsiyet Hatası | `Hata` | `SonucYonetici.hata: "Gebelik bildirimi yalnızca kadın personeller için tanımlanabilir."` | `personel_service.py:427` |
| KVKK Arşiv İhracı Başarılı | `Arşiv İhracı Başarılı` | `QMessageBox.information: "Personelin tüm özlük, sağlık, dozimetre kayıtları ve ekli belgeleri başarıyla ZIP paketine aktarıldı:\n\n{path}"` | `personel_detail_controller.py:1559` |

### 3. İzole Edilen ve Temizlenen Hayalet Bileşenler (Ghost Components)

- `btnScreenClose`: `personel_listesi_page.ui` başlık çubuğunda yer alan ve controller bağlantısı bulunmayan kapat butonu, kullanıcı onayı doğrultusunda `personel_list_controller.py:297` üzerinde `self.btnScreenClose.clicked.connect(self.close)` koduyla işlevsel hale getirilmiştir. Artık hayalet bileşen değildir.
- `templateDownloadButton`: `personel_list_controller.py` içinde `hasattr` ile korunan ancak `personel_listesi_page.ui` içinde fiziksel karşılığı bulunmayan şablon butonu izole edilmiştir. Şablon indirme işlemi merkezi `import_page.ui` ekranındaki `btnSablonlar` butonu üzerinden standart olarak sunulmaktadır.
- Web Portal Farkı: Web portalda personel CRUD ve toplu Excel aktarımı bulunmamaktadır; saha personeli için salt okunur profil (`/api/profile`) ve mobil gebelik/rotasyon bildirimi (`/api/personel/gebelik-bildirimi`) onay kuyruğuna bağlı olarak çalışmaktadır.

---

## Modül 06: İzin Yönetimi ve Hakediş (`06_izin_yonetimi_ve_hakedis`)

- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 1 (Nükleer Şua Hakediş, Yıllık/Mazeret İzinleri, Nöbet Çakışma ve EBYS/HBYS Entegrasyonu)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **İzin Listesi & Tablo Kokpiti** | `izinTable` (`izin_listesi_page.ui:276`) | `izin_list_controller.py:165-225, 410-480` | `IzinService.list_izinler`, `_status_delegate.py` | 13 sütunlu tablo; personelin ad-soyadı, izin türü, başlangıç-bitiş tarihleri, gün/saat, onay durumu ve EBYS evrak no listelenir. Onay durumları kurumsal renkli rozetlerle (`BadgeDelegate`) çizilir. |
| **Gecikmeli Arama & Filtreler** | `searchInput`, `durumCombo`, `izinTuruCombo`, `departmanCombo` | `izin_list_controller.py:115-145, 340-390` | `QTimer (SEARCH_DEBOUNCE_MS = 300)` | 300 ms debounced arama ile personel adı, TC, unvan ve EBYS evrak no taranır. Durum ve departman filtreleri dinamik olarak SQL sorgusuna yansıtılır. |
| **Canlı KPI Sayaç Kartları** | `kpiCardBekleyen`, `kpiCardOnayli`, `kpiCardSua`, `kpiCardYillik` | `izin_list_controller.py:485-520` | `IzinService.get_izin_kpi_summary` | Onay bekleyen, onaylı, kullanılan toplam şua izni ve yıllık izin gün toplamları canlı hesaplanıp sayaç kartlarına basılır. |
| **İzin Talep Sihirbazı (2 Adım)** | `addButton` -> `IzinTalepController` (`izin_talep_dialog.ui`) | `izin_talep_controller.py:65-210, 310-450` | `IzinService.create_izin_talep`, `IzinKuralMotoru` | Adım 1: Personel seçimi ve anlık bakiye paneli (Yıllık ve Şua kalan gün göstergeleri). Adım 2: İzin türü, tarih aralığı, gün/saat hesabı, yerine bakacak personel (vekil) ve açıklama. |
| **Nükleer Şua İzni Hakedişi (RED-IZN-01)** | `IzinHakedisController` (`izin_hakedis_page.ui`) | `izin_hakedis_controller.py:110-240`, `izin_service.py:780-845` | `izin_kural_motoru.py:45-92` (`MAX_YILLIK_SUA_GUN = 30`) | Fiili radyasyon çalışma saatine göre kazanılır: Her 50 saat için 1 gün, yıllık tavan 30 gün (`ceil(saat / 50.0)`). Hafta sonları izne dahildir (takvim günü). Cari yılda kazanılan şua bir sonraki yıl kullanılır; 31 Aralık'ta kullanılmayan şua izinleri zaman aşımına uğrar ve kesinlikle devretmez. |
| **Tarih & Nöbet Çakışma Denetimi (RED-IZN-02)** | `btnKaydet` (`izin_talep_dialog.ui:620`) | `izin_talep_controller.py:460-510`, `izin_service.py:320-365` | `IzinRepository.check_overlap`, `nobet_service.check_personel_nobet_clash` | Seçilen tarih aralığında personelin başka bir onaylı/bekleyen izni veya aktif nöbet çizelgesinde görevi (`nobet_cizelgesi`) varsa talep `SonucYonetici.hata` ile engellenir. |
| **İzin Onay & Bakiye Düşümü** | `approveButton` (`izin_listesi_page.ui:145`) | `izin_list_controller.py:530-585` | `IzinService.onayla_izin`, `izin_haklari` | Yetkili rol (Admin, Yönetici veya Departman Sorumlusu) onayı ile izin `Onaylandı` statüsüne geçer ve personelin `izin_haklari.kullanilan_gun` bakiyesinden otomatik düşüm yapılır. |
| **İzin Reddetme ve Gerekçe Zorunluluğu** | `rejectButton` (`izin_listesi_page.ui:155`) | `izin_list_controller.py:590-640` | `IzinService.reddet_izin`, `QInputDialog` | Reddetme işleminde kullanıcıdan zorunlu red gerekçesi alınır; girilen gerekçe denetim izine işlenir ve durum `Reddedildi` yapılır. Bakiye düşümü yapılmaz. |
| **İzin İptali ve Bakiye İadesi** | `cancelButton` (`izin_listesi_page.ui:165`) | `izin_list_controller.py:645-690` | `IzinService.iptal_et_izin`, `delta_sign = -1` | Onaylanmış bir izin iptal edildiğinde önceden düşülen bakiye personelin hakkına iade edilir (`kullanilan_gun` azaltılır) ve izin durumu `İptal Edildi` yapılır. |
| **Onaylı İzin Silme Yasağı** | `deleteButton` (`izin_listesi_page.ui:175`) | `izin_list_controller.py:695-730` | `IzinService.delete_izin` | Yasal denetim izini korumak için `Onaylandı` veya `Resmi Onaylı` izinlerin doğrudan silinmesi engellenmiştir. Önce iptal işlemi yapılmalıdır. |
| **Yıllık İzin Devir Motoru** | `btnDevirAktar` (`izin_hakedis_page.ui:320`) | `izin_hakedis_controller.py:280-340`, `izin_service.py:890-945` | `yillik_devir_max_gun` (varsayılan 5 gün) | Yalnızca tamamlanmış geçmiş yıllar için çalıştırılabilir (`kaynak_yil < mevcut_yil`). Maksimum 5 güne kadar devir yapılır, tavanı aşan kalan izinler dondurulur/yanar. |
| **İzin Türleri ve Tatil Parametreleri** | `IzinTurleriController` (`izin_turleri_page.ui`) | `izin_turleri_controller.py:45-180` | `izin_turleri` tablosu | Tür bazında yıllık tavan gün, hafta sonu (Cumartesi/Pazar) izne dahil mi, resmi tatiller dahil mi parametreleri tanımlanır. |
| **Web Portalı & EBYS/HBYS Entegrasyonu** | Web Portalı / İzin Detay Formu | `web_portal/routes/izin.routes.ts`, `izin_service.py:1120-1160` | `POST /api/izin/hbys-kaydet`, `personel_izinler` | Personel web portalında onaylı iznine ilk kez EBYS evrak no ve tarihi girdiğinde durum doğrudan `Resmi Onaylı` olur. Sonradan yapılan güncellemeler yönetici onay masasına yönlendirilir. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Tarih Çakışması | `İzin Çakışması` | `QMessageBox.warning: "Personelin seçilen tarihler arasında ({baslangic} - {bitis}) zaten onaylı veya onay bekleyen bir izni bulunmaktadır."` | `izin_talep_controller.py:475` |
| Nöbet Çakışması | `Nöbet Çakışması Uyarısı` | `QMessageBox.warning: "Personelin izin talep edilen tarihlerde aktif nöbet görevi bulunmaktadır.\n\nÖnce nöbet çizelgesinde değişiklik yapılmalıdır."` | `izin_talep_controller.py:492` |
| Yetersiz İzin Bakiyesi | `Bakiye Yetersiz` | `QMessageBox.warning: "Talep edilen süre ({gun} gün), personelin kalan izin hakkından ({kalan} gün) fazladır."` | `izin_talep_controller.py:504` |
| Şua Zaman Aşımı Uyarısı | `Şua İzni Hatırlatması` | `QMessageBox.information: "Personelin cari yıldan kalan {kalan} gün Şua izni bulunmaktadır. Şua izinleri sonraki yıla devretmez ve 31 Aralık tarihinde yanar."` | `izin_hakedis_controller.py:215` |
| İzin Onay Onayı | `İzin Onay` | `ask_confirm: "Seçilen {count} adet izin talebini onaylamak istediğinize emin misiniz?\n\nPersonelin izin bakiyesi otomatik olarak düşülecektir."` | `izin_list_controller.py:545` |
| Reddetme Gerekçesi Eksik | `Gerekçe Zorunlu` | `QMessageBox.warning: "İzin talebini reddetmek için geçerli bir açıklama/gerekçe girmelisiniz."` | `izin_list_controller.py:612` |
| Onaylı İzin Silme Engeli | `Silme Engeli` | `QMessageBox.critical: "Onaylanmış veya resmi onaylı izin kayıtları yasal denetim izi gereğince silinemez.\n\nÖnce 'İptal Et' işlemi yaparak bakiyeyi iade edebilirsiniz."` | `izin_list_controller.py:708` |
| Geçersiz Devir Yılı | `Devir Hatası` | `QMessageBox.warning: "Yalnızca tamamlanmış geçmiş yıllar için devir işlemi yapılabilir.\nDevam eden cari yıl için devir aktarılamaz."` | `izin_hakedis_controller.py:298` |
| Devir Başarısı | `Devir Tamamlandı` | `QMessageBox.information: "{yil} yılından {hedef_yil} yılına toplam {count} personelin izin devri (azami 5 gün) başarıyla aktarıldı."` | `izin_hakedis_controller.py:335` |

### 3. İzole Edilen ve Temizlenen Hayalet Bileşenler (Ghost Components) & Kullanıcı Kararları

- **Tüm Butonların Doğrulanması:** `izin_listesi_page.ui`, `izin_talep_dialog.ui`, `izin_hakedis_page.ui` ve `izin_turleri_page.ui` üzerindeki tüm butonların controller ve backend servis bağlantıları eksiksiz mevcuttur. Hayalet buton bulunmamaktadır.
- **Fiili Hizmet Entegrasyon Köprüsü (`suaAddButton`, `suaEditButton`):** Hakediş sayfasındaki şua müdahale butonları, doğrudan manuel hakediş yazmak yerine kullanıcılara Modül 10 (Fiili Hizmet & Şua Hakediş) yönlendirme mesajı (`_show_sua_info_msg`) göstererek veri bütünlüğünü korur.
- **Kullanıcı Kararı (Şua İzni):** Şua izni çalışılarak kazanılan bir haktır (`RED-IZN-01`). Cari yılda çalışılan her 50 radyasyon saati için 1 gün (tavan 30 gün) gelecek yıl kullandırılır; devretmez ve 31 Aralık'ta yanar.
- **Kullanıcı Kararı (Yıllık İzin Devri):** Devir yalnızca geçmiş yıllar için azami 5 gün olarak uygulanır.
- **Kullanıcı Kararı (EBYS ve Onaylı Silme):** EBYS entegrasyonu kılavuzda yer alacak, onaylı izinlerin doğrudan silinemeyeceği ve iptal yoluyla bakiye iadesi yapılacağı vurgulanacaktır.

---

## Modül 07: Nöbet Ayarları ve Kısıt Hiyerarşisi (`07_nobet_ayarlari_ve_kisit_hiyerarsisi`)

- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 1 (Vitrin Bölümü / Solver Kural Piramidi, 24s ve Dinlenme Standartları, Birim Slotları, Muafiyetler ve İstekler)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Nöbet Ayarları Ana Kabuğu** | `tabWidget` (`nobet_ayarlar_main.ui`) | `nobet_ayarlar_controller.py:78-128` | `NobetService`, `NobetSettingsService` | 5 Sekmeli orkestrasyon: Temel Ayarlar (`nobet_temel.ui`), Birim Kuralları (`nobet_birim_kural.ui`), Personel Talepleri (`nobet_birim_person.ui`), Personel Özel Kısıtları (`nobet_person_kisit.ui`), Vardiya Kısıtları (`nobet_gelismis.ui`). |
| **Kural Öncelik Piramidi** | `unitHelpLabel`, UI Bilgi Notu | `nobet_settings_service.py:1656-1675`, `nobet_scheduler.py:170-209` | `NobetRepository.fetch_one` (CASE WHEN hiyerarşi) | Öncelik sırası: 1. Birim+Sınıf Kuralı, 2. Birim Özel Kuralı, 3. Hizmet Sınıfı Kuralı, 4. Sistem Genel Ayarları. En özel kural daima genel kuralı ezer (override). |
| **24 Saat & Dinlenme Standartları** | `maxConsecutiveInput`, `minRestInput`, `dailyMaxHourInput` | `nobet_ayarlar_genel_tab.py:87-97, 185-195` | `nobet_ayarlari` tablosu | Ardışık nöbet (varsayılan 2 gün), nöbet sonrası dinlenme (varsayılan 24 saat), günlük maksimum çalışma (varsayılan 24 saat). Solver bu sınırları sert kısıt (hard constraint) olarak uygular. |
| **Hafta Sonu & Bayram Kotası** | `weekendMaxInput`, `holidayMaxInput`, `holidayPriorityInput` | `nobet_ayarlar_genel_tab.py:94-135, 236-242` | `nobet_ayarlari.holiday_priority`, `night_priority` | Ayda azami hafta sonu nöbeti (varsayılan 4), bayram nöbeti (varsayılan 2). Öncelikler (Önemsiz: 0.1, Normal: 1.0, Önemli: 2.0, Çok Önemli: 4.0) ceza ağırlığı olarak yansıtılır. |
| **Haftalık Mesai Standartları & Oran** | `weeklyNormalWorkInput`, `weeklyRadiationWorkInput` | `nobet_ayarlar_genel_tab.py:147-151, 202-210` | `bt_kat_sayi_oran = round(hn / hr, 10)` | Haftalık 40 saat normal memur mesaisi, 35 saat radyasyon mesaisi. Kat sayı oranı 40/35 = 1.142857 olarak otomatik hesaplanıp kaydedilir. |
| **Yaş ve Kıdem Muafiyeti Kriterleri** | `ageLimitExemptionInput`, `seniorityExemptionInput`, `kidem_esik_yil` | `nobet_ayarlar_genel_tab.py:136-146, 211-221` | `nobet_ayarlari.muafiyet_*` | 50 yaş ve 25 kıdem yılını dolduran personeller otomatik gece ve hafta sonu nöbetlerinden muaf tutulur. Kıdemi 5 yıldan az olanlara öncelik verilir. |
| **Birim Nöbet Slotları & Akıllı Saat** | `unitSlotsTable`, `slotStartInput`, `slotHourInput`, `slotEndInput` | `nobet_ayarlar_birim_tab.py:36-48, 125-160` | `nobet_slotlari` tablosu | 10 sütunlu tablo; Başlangıç + Süre = Bitiş otomatik hesaplanır (gece yarısı devrinde mod 24 uygulanır). Gün kısıtı (Her Gün, Sadece Hafta İçi, Sadece Hafta Sonu) seçilir. |
| **Birim Kuralı Kopyalama Motoru** | `newUnitCopyButton` (`nobet_birim_kural.ui`) | `nobet_ayarlar_birim_tab.py:113, 520-580` | `NobetSettingsService.copy_unit_rules` | Kaynak birimin tüm slot ve kural setini hedef birime aktarır. Mükerrerliği önlemek için hedef birimdeki mevcut slotlar silinip kaynak slotlar sıfırdan yazılır. |
| **Personel Nöbet İstekleri & Mazeret** | `personnelRequestsTable`, `prTypeCombo` | `nobet_ayarlar_personel_istekleri_tab.py:33-88, 145-210` | `personel_nobet_istekleri` tablosu | Nöbet Yazılmasın (Mazeret), Nöbet Yazılsın (İstek), Eğitim Kısıtı, Fazla Mesai Talebi. Onay/Red butonları (`approveRequestButton`, `rejectRequestButton`) ile amir tarafından onaylanır. |
| **Fazla Mesai Tavan Kademesi** | `pcMaxOvertimeInput_2`, `pcMaxOvertimeInput` | `nobet_ayarlar_personel_istekleri_tab.py:45-56`, `nobet_scheduler.py:170-209` | `yasal_maks_fazla_mesai` (130s), `personel_istek_max_saat` (60s) | Yasal tavan 130 saattir; temel kurumsal sınır 60 saattir. Bireysel onaylı talep kurum sınırını aşamaz; ancak acil durumlarda yönetici onayıyla esnetilebilir. |
| **Özel Sağlık Kısıtları (Gebe/Emzirme)** | `personnelConstraintsTable`, `pcTypeCombo` | `nobet_ayarlar_personel_kisitlar_tab.py:74-86, 120-155` | `personel_calisma_kisitlari`, `nobet_yasal_kisitlar` | Emzirme (ilk 6 ay 3s/gün, ikinci 6 ay 1.5s/gün azaltım), Gebelik (gece/FM yasağı, 1 mSv kilit), Sendika (memur 4s/hafta, işçi 2s/hafta azaltım), Engelli ve Doz Aşımı muafiyeti. |
| **Gelişmiş Kural & Ceza Ağırlıkları** | `constraintsTable`, `ruleTypeCombo` | `nobet_ayarlar_kisitlar_tab.py:30-60, 107-160` | `nobet_kisitlari` tablosu | Sert (Hard) ve Yumuşak (Soft) kısıtlar, kural sınıfları, ceza puanları, birim ve hizmet sınıfı filtreleri ile yönetilir. |
| **Plandan Geri Alma & Devir Güvenliği** | `allowRollbackCheck`, `requireTransferReasonCheck` | `nobet_ayarlar_genel_tab.py:103-108, 195-201` | `nobet_ayarlari.allow_rollback_from_published`, `require_transfer_reason` | Yayınlanmış plandan taslağa dönüş izni ve devir taleplerinde zorunlu gerekçe girilmesi emniyet kilitleridir. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Ayar Kaydetme Onayı | `Onay` | `ask_confirm: "Tum ayarlar kaydedilsin mi?"` | `nobet_ayarlar_genel_tab.py:273` |
| Ayar Kaydetme Başarısı | `Basarili` | `QMessageBox.information: "Tum ayarlar basariyla kaydedildi."` | `nobet_ayarlar_genel_tab.py:279` |
| Ayar Kaydetme Hatası | `Hata` | `QMessageBox.critical: "Ayarlar kaydedilirken bir hata oluştu."` | `nobet_ayarlar_genel_tab.py:283` |
| Slot Silme Onayı | `Nöbet Slotu Silme` | `ask_confirm: "'{ad}' nöbet slotunu silmek istediğinize emin misiniz?"` | `nobet_ayarlar_birim_tab.py:215` |
| Kural Kopyalama Onayı | `Kural Kopyalama Onayı` | `ask_confirm: "'{kaynak}' biriminin tüm kuralları ve slotları '{hedef}' birimine kopyalanacaktır.\nHedef birimin mevcut kuralları silinecektir. Onaylıyor musunuz?"` | `nobet_ayarlar_birim_tab.py:535` |
| Kural Kopyalama Başarısı | `Başarılı` | `QMessageBox.information: "Kurallar başarıyla kopyalandı."` | `nobet_ayarlar_birim_tab.py:560` |
| İstek Onaylama Onayı | `İstek Onayı` | `ask_confirm: "Seçili personelin nöbet isteğini onaylamak istiyor musunuz?"` | `nobet_ayarlar_personel_istekleri_tab.py:385` |
| Kısıt Silme Onayı | `Kısıt Silme` | `ask_confirm: "Seçili personel kısıtını silmek istediğinize emin misiniz?"` | `nobet_ayarlar_personel_kisitlar_tab.py:410` |
| Doğum Tarihi Güncelleme | `Doğum Tarihi Kaydet` | `ask_confirm: "Personelin doğum tarihi güncellenecek ve emzirme muafiyeti başlatılacaktır. Devam edilsin mi?"` | `nobet_ayarlar_personel_kisitlar_tab.py:650` |

### 3. İzole Edilen ve Temizlenen Hayalet Bileşenler (Ghost Components) & Kullanıcı Kararları

- **Tüm Alt Sekmelerin Doğrulanması:** `nobet_ayarlar_main.ui` altındaki 5 sekme ve yüklü UI bileşenlerinin (`nobet_temel.ui`, `nobet_birim_kural.ui`, `nobet_birim_person.ui`, `nobet_person_kisit.ui`, `nobet_gelismis.ui`) tamamı controller sınıflarına ve sinyal-slot mimarisine bağlıdır; hayalet bileşen bulunmamaktadır.
- **Kullanıcı Kararı (Kural Öncelik Piramidi):** "En Özel Kural Daima Önceliklidir" kuralı teyit edilmiştir (Birim+Sınıf > Birim > Sınıf > Genel).
- **Kullanıcı Kararı (Fazla Mesai Esnekliği):** Kurumsal temel sınır 60 saattir; ancak acil servis ve olağanüstü durumlarda yönetici onayı ile esnetilebilir (nihai tavan yasal 130 saattir).
- **Kullanıcı Kararı (50 Yaş / 25 Kıdem Muafiyeti):** Bu kriter mutlak kanuni yasak değil, kurum politikasıdır. Algoritma gündüz önceliği verir; ancak servis ihtiyacı veya eksik mesai kaldığında otomatik esnetip gece nöbeti atayabilir.
- **Kullanıcı Kararı (Birim Kuralı Kopyalama):** Kural kopyalama operasyonunun hedef birimin eski slotlarını sileceği uyarısı kılavuza eklenmiştir.
- **Kullanıcı Kararı (5 Alt Bölüm Mimarisi):** Onlarca karmaşık parametrenin kullanıcıyı yormasını önlemek için Modül 07, her ayar sekmesi için müstakil bir 5N1K tablosu ve hızlı reçete içeren 5 alt sayfaya bölünmüştür: `07_1_temel_ayarlar_ve_calisma_standartlari.html`, `07_2_birim_kurallari_ve_slot_yonetimi.html`, `07_3_gelismis_kisitlar_ve_adalet_agirliklari.html`, `07_4_personel_ozel_saglik_ve_yasal_kisitlar.html`, `07_5_personel_talepleri_ve_onay_yonetimi.html` (Ana hub: `07_nobet_ayarlari_ve_kisit_hiyerarsisi.html`).
- **Kullanıcı Kararı (Arayüz İsimlendirme Standardı):** `maxConsecutiveInput` gibi backend kod değişken isimlerinin kullanıcı için anlamsız olduğu kararlaştırılmış; kılavuzdaki tüm tablolardan kod değişkenleri temizlenerek arayüzde görünen gerçek Türkçe etiketler (`Maksimum Ardışık Gün & Min Dinlenme (Saat)`, `Maksimum Fazla Mesai Süresi (Saat) Kutusu` vb.) yerleştirilmiştir.

---

## Modül 08: Nöbet Hazırlık, Çizelge Matrisi ve Solver Motoru (`08_nobet_hazirlik_ve_solver_motoru`)

- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 3 (Vitrin Bölümü / Algoritmik Karar & Solver Motoru, 3 Adımlı Hazırlık Sihirbazı, Çizelge Matrisi, Snapshot Yedekleme ve Kısmi Plan İptali)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Nöbet Planlama Ana Kabuğu** | `nobet_plan_main.ui`, `btnToggleSidebar` | `nobet_plan_main_controller.py:29-114` | `NobetService`, `QStackedLayout` | Sol açılır-kapanır menü (`groupBox`) ve sekmeli yönetim: Plan Listesi (`Profil_2`), Arşiv (`Profil_3`), Borç/Alacak (`Profil_7`), Önizleme (`Profil_1`), Devir Listesi (`btnNobetDevirListesi`), Nöbet Ayarları (`btnNobetAyarlar`). |
| **Nöbet Plan Listesi & Filtreler** | `planTable`, `searchInput`, `yilFilter`, `ayFilter`, `departmanFilter`, `onayDurumuFilter`, `planTipiFilter` | `nobet_plan_list_controller.py:109-285` | `nobet_planlari` tablosu | Sayfalı liste (100 kayıt), onay durumuna göre renkli rozetler, çift tıklamayla duruma uygun sayfayı (Önizleme, Detay veya İnceleme) açma. |
| **Yeni Plan Oluşturma Sihirbazı** | `nobet_plan_dialog.ui`, `ayInput`, `yilInput`, `departmanInput`, `hizmetSinifiFilter`, `planAdiInput` | `nobet_plan_dialog_controller.py:20-192` | `nobet_service.create_plan` | Ay, yıl, birim ve hizmet sınıfı seçildiğinde `_refresh_auto_plan_name` ile standart plan adı otomatik türetilir. |
| **3 Adımlı Hazırlık Sihirbazı** | `nobet_plan_onizleme_page.ui`, `stepProgress`, `wizardStackedWidget` | `nobet_plan_onizleme_controller.py:82-248` | `NobetService`, `IzinService` | Adım 1: Çalışma Parametreleri (tatiller, birim slotları), Adım 2: Talepler & Mazeretler (12 kolonlu konsolide detay), Adım 3: Simülasyon & Onay (tahmini nöbet/FM saatleri ve taslak kaydetme). |
| **Hızlı Talep & Mazeret Ekleme** | `nobet_hizli_istek_dialog.ui`, `cmbPerson`, `cmbType`, `dateStart`, `dateEnd`, `spinMaxFM`, `cmbPriority` | `nobet_hizli_istek_dialog.py:18-184` | `personel_nobet_istekleri` | Önizleme sihirbazı içerisinden ayrılmadan personele 'nobet_yazma', 'nobet_yaz' veya 'fazla_mesai' talebi ekler; doğrudan 'Onaylandi' statüsüyle kaydeder. |
| **Çapraz Geçici Görevlendirme** | `nobet_gecici_personel_dialog.ui`, `cmbBirimFilter`, `listWidget` | `nobet_gecici_personel_dialog_controller.py:23-217` | `nobet_gecici_personel` tablosu | Hedef birim dışındaki aktif personeller listelenir; onay kutusu işaretlenerek `nobet_gecici_personel` tablosuna ay/yıl bazlı kaydedilir. |
| **Otomatik Solver Motoru (QThread)** | `otomatikOlusturButton` (`nobet_plan_detay_page.ui:66`) | `nobet_plan_detay_controller.py:951-1036`, `nobet_scheduler.py:210-2060` | `NobetScheduler`, `ModernProgressDialog` | Asenkron iş parçacığında (`NobetSchedulerWorker`) çalışır; ilerleme yüzdesi ve iptal desteği sunar. Hard/soft kısıt puanlamasıyla slotları doldurur. |
| **Otomatik Snapshot Taslak Yedeği** | Dosya Sistemi (`data/backups/nobet/`) | `nobet_scheduler.py:628-656` | `plan_{id}_{timestamp}.json` | Solver koşturulmadan hemen önce mevcut çizelgeyi JSON formatında otomatik yedekler. |
| **Yedekten Taslak Yükleme** | `btnRestoreBackup` (Dinamik Toolbar Butonu) | `nobet_plan_detay_controller.py:235, 1196-1253` | `cizelge_service.restore_cizelge_from_data` | JSON yedek dosyasından taslak nöbetleri geri yükler; mevcut taslağı silip yedekteki kayıtları sıfır veri kaybıyla yerine koyar. |
| **Çizelge Matris Tablosu** | `NobetCizelgeTableWidget` (`cizelgeTable`) | `nobet_cizelge_table.py:148-500`, `CizelgeTableDelegate:13-146` | `nobet_cizelgesi` tablosu | Gün satırları ve vardiya sütunları; Fira Code / Consolas tabular fontu; Tatil bordo (`#4A1525`), Hafta Sonu slate (`#1E293B`), Devir koyu pas (`#7C2D12`), Kendi Nöbeti mavi (`#1E3A8A` kalın), İzin çakışması kırmızı metin (`#EF4444`). |
| **Hedef Süre ve Hakediş Tablosu** | `tableView` (`nobet_plan_detay_page.ui:172`) | `nobet_plan_detay_controller.py:518-711` | `calculate_target_hours` | Personelin aylık standart hedef saati, fiili nöbet süresi ve anlık fazla mesai (+/-) dengesi canlı hesaplanır. Diğer birimlerde nöbeti olan personel açık sarı/amber (`#FEF3C7`) ile vurgulanır. |
| **Personel Nöbetlerini Vurgulama** | `tableView.itemSelectionChanged` | `nobet_plan_detay_controller.py:714-741` | `cizelgeTable.highlight_person` | Özet tablosunda personelin ismine tıklandığında sol matristeki tüm nöbetleri anında parlak mavi (`#3B82F6`) ile aydınlatılır. |
| **Manuel Atama ve Hücre Çift Tıklama** | `cizelgeTable.itemDoubleClicked` | `nobet_plan_detay_controller.py:797-823` | `NobetCizelgeDialogController` | Boş hücreye çift tıklama önceden doldurulmuş ekleme formu açar; dolu hücreye çift tıklama düzenleme formu açar. |
| **Akıllı İkame Öneri Motoru** | `btnOneriGoster` (`nobet_cizelge_dialog.ui`) | `nobet_cizelge_dialog_controller.py:167-248` | `nobet_service.suggest_shift_substitutes` | Seçilen tarih ve vardiya için dinlenme süresi dolmuş, kural ihlali olmayan en uygun meslektaşları puanlayıp açılır menüde sunar. |
| **Kural İhlali Onay Kutusu & Audit Log** | `chkonay` (`overrideCheckBox`), `warningGroup` | `nobet_cizelge_dialog_controller.py:448-510` | `nobet_cizelgesi.notlar`, `nobet_planlari.notlar` | İhlalli atamalarda yetkili kullanıcı kutuyu işaretlemeden kayıt yapılamaz. İhlal gerekçesi `[KURAL İHLALİ ONAYLANDI (Tarih - Kullanıcı): İhlaller...]` olarak plana mühürlenir. |
| **Ay Ortası Kısmi Plan İptali** | `nobet_plan_iptal_dialog.ui`, `dtCutoffDate`, `txtReason`, `btnConfirm` | `nobet_plan_iptal_dialog_controller.py:23-200` | `nobet_service.cancel_partial_plan`, `SudoDialogController` | Kesim tarihine kadar olan geçmiş nöbetler `Gerçekleşti` olarak korunur, sonrakiler iptal edilir ve plan `Taslak` durumuna alınır. En fazla 3 gün geriye dönüklük, min 20 karakter gerekçe ve Sudo şifresi zorunludur. |
| **Planı Taslağa Geri Çekme** | `revertToDraftButton` (`nobet_plan_detay_page.ui:109`) | `nobet_plan_detay_controller.py:1083-1130` | `allow_rollback_from_published`, `SudoDialogController` | Sistem ayarlarında izin verilmişse devreye girer; Sudo yönetici şifre doğrulaması ile yayındaki plan `Taslak` durumuna döndürülür. |
| **Plan Notları ve Denetim İzi Diyaloğu** | `btnShowNotes` (`nobet_plan_listesi_page.ui:76`) | `nobet_plan_list_controller.py:509-536` | `nobet_planlari.notlar` | Plana ait sistem loglarını, kural ihlal onaylarını ve kullanıcı açıklamalarını popup metin düzenleyicide görüntüler. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Yeni Plan Zorunlu Alanlar | `Hata` | `QMessageBox.warning: "Lütfen tüm zorunlu alanları (Ay, Yıl, Birim, Hizmet Sınıfı) doldurunuz."` | `nobet_plan_dialog_controller.py:150` |
| Adım Geçiş Kontrolü (Personel Yok) | `Adım Geçiş Uyarısı` | `QMessageBox.warning: "Seçili birimde nöbet tutabilecek aktif personel bulunamadı. Lütfen personel tanımlarını kontrol edin."` | `nobet_plan_onizleme_controller.py:463` |
| Adım Geçiş Kontrolü (Kural Yok) | `Adım Geçiş Uyarısı` | `QMessageBox.warning: "Seçili birime ait nöbet kuralı veya nöbet türü tanımı bulunamadı. Nöbet kuralı olmadan simülasyon ve plan oluşturulamaz."` | `nobet_plan_onizleme_controller.py:469` |
| Solver Çalıştırma Onayı | `Onay` | `ask_confirm: "Otomatik oluşturma işlemi plandaki mevcut tüm taslak nöbetleri silecek ve yeniden atayacaktır. Devam etmek istiyor musunuz?"` | `nobet_plan_detay_controller.py:956` |
| Solver Sonucu Başarılı | `Başarılı` | `QMessageBox.information: "Nöbet planı otomatik oluşturuldu. Toplam X nöbet atandı."` | `nobet_plan_detay_controller.py:1017` |
| Kural İhlali Uyarısı (Yetkisiz) | `Yetkisiz İşlem` | `QMessageBox.warning: "Girilen bilgiler nöbet kurallarını ihlal etmektedir.\n\nKural ihlallerini onaylama yetkiniz bulunmamaktadır. Bu işlem yalnızca Admin veya Birim Yöneticisi tarafından yapılabilir.\n\nİhlal Edilen Kurallar:\n• ..."` | `nobet_cizelge_dialog_controller.py:458` |
| Kural İhlali Onay Kutusu Boş | `Kural İhlali Uyarıları Var` | `QMessageBox.warning: "Girilen bilgiler nöbet kurallarını ihlal etmektedir.\n\nLütfen ihlalleri inceleyip onaylamak için 'Kural ihlallerini onaylıyorum' kutucuğunu işaretleyin veya bilgileri değiştirin."` | `nobet_cizelge_dialog_controller.py:471` |
| Devredilmiş Nöbet Kilit Uyarısı | `Uyarı` | `QMessageBox.warning: "Devredilmiş bir nöbet kaydı değiştirilemez / silinemez / tekrar devredilemez."` | `nobet_plan_detay_controller.py:811, 907, 938` |
| Kısmi İptal 3 Gün Sınırı | `Kural İhlali` | `QMessageBox.warning: "Kesim tarihi geriye dönük en fazla 3 gün olabilir! En erken seçilebilecek tarih: ..."` | `nobet_plan_iptal_dialog_controller.py:146` |
| Kısmi İptal 20 Karakter Gerekçe | `Eksik Gerekçe` | `QMessageBox.warning: "Lütfen en az 20 karakterlik bir iptal gerekçesi belirtiniz. (Şu an: X karakter)"` | `nobet_plan_iptal_dialog_controller.py:156` |
| Yayından Taslağa Geri Alma Engeli | `İşlem Engellendi` | `QMessageBox.warning: "Sistem ayarları gereği yayınlanmış nöbet planlarının taslağa geri alınmasına izin verilmemektedir."` | `nobet_plan_detay_controller.py:1101` |
| Aktif Plan Silme Engeli | `Aktif Plan İptali` | `ask_confirm: "Bu nöbet planı onaylanmış/yayında olduğu için doğrudan silinemez!\n\nÇalışılmış günleri 'Tamamlandı' olarak koruyup, kalan günleri iptal ederek planı 'Taslak' durumuna çekmek (Ay Ortası Kısmi İptal) ister misiniz?"` | `nobet_plan_list_controller.py:760` |

### 3. İzole Edilen ve Temizlenen Hayalet Bileşenler (Ghost Components) & Kullanıcı Kararları

- **İzole Edilen Hayalet Bileşen (`btnScreenClose`):** `nobet_plan_main.ui:50` içerisinde yer alan `btnScreenClose` isimli QToolButton bileşeni controller seviyesinde hiçbir sinyale veya slota bağlanmamıştır. Kullanıcı açısından işlevsizdir; kılavuz kapsamı dışında bırakılmıştır.
- **Kullanıcı Kararı 1 (Solver Snapshot Yedeği):** Solver motorunun her çalıştırmada `data/backups/nobet/` altına otomatik JSON snapshot aldığı ve `[Yedekten Taslak Yükle]` butonuyla önceki taslağa sıfır veri kaybıyla dönülebildiği kılavuzda bir **Güvenlik Kalkanı İpucu Kartı** olarak yer almıştır.
- **Kullanıcı Kararı 2 (Kısmi İptal 3 Gün Sınırı):** Ay ortası kısmi plan iptalinde kesim tarihinin bugünden geriye en fazla 3 gün seçilebileceği (`today - 3 gün`) ve daha eski tarihlerin bordro güvenliği için kilitlendiği kuralı kılavuza işlenmiştir.
- **Kullanıcı Kararı 3 (Manuel Kural İhlali Denetim İzi):** Yöneticinin acil durumlarda inisiyatif alarak ihlalli nöbet yazabileceği, ancak bu işlemin "Kural ihlallerini onaylıyorum" kutucuğuyla onaylanarak plan denetim izine (Audit Log) silinemez şekilde mühürlendiği şeffaflıkla açıklanmıştır.
- **Kullanıcı Kararı 4 (20 Karakter Gerekçe ve Sudo Şifresi):** Kısmi plan iptalinde en az 20 karakterlik gerekçe yazılmasının ve ardından Sudo Yönetici Parolası doğrulaması yapılmasının zorunlu olduğu adım adım operasyonel rehberde vurgulanmıştır.
- **Kullanıcı Kararı 5 (Diğer Birim Nöbetleri Kehribar Vurgusu):** Sağ özet tablosunda başka servislerde veya planlarda da nöbeti bulunan personellerin açık sarı/amber (`#FEF3C7`) renkle vurgulanması *"Çapraz Görevlendirme ve Çift Nöbet Alarmı"* başlığıyla dokümante edilmiştir.
- **Arayüz İsimlendirme Standardı:** Kılavuz metinlerinde `otomatikOlusturButton`, `cizelgeTable`, `btnCancelPartialPlan` gibi geliştirici kod adları kesinlikle temizlenmiş; kullanıcıya ekranda gördüğü gerçek etiketler (`[Otomatik Olustur]`, `[Ay Ortası Plan İptali]`, `[Yedekten Taslak Yükle]`) sunulmuştur.

---

## Modül 09: Nöbet Devir, İkame ve Acil Mazeret (`09_nobet_devir_ikame_ve_acil_mazeret`)

- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 3 (P2P Nöbet Devri & Karşılıklı Takas, Çok Kademeli Hiyerarşik Onay, Acil Mazeret & Akıllı İkame Önerici, Nöbet Değişim Havuzu, Gebe Personel Bildirimi ve Yönetici Aksiyon Sihirbazı)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Nöbet Devir Talebi Oluşturma** | `nobet_devir_dialog.ui`, `alanPersonelInput`, `devirNedeniInput`, `notlarInput`, `saveButton` | `nobet_devir_dialog_controller.py:17-198` | `nobet_devir_service.create_devir_talebi` | Kaynak nöbet bilgileri salt okunur yüklenir; alan personel seçildiğinde yasal çalışma kısıtları (`check_personel_nobet_kisiti`) anlık denetlenir. Zorunlu gerekçe doğrulanıp talep iletilir. |
| **Tüm Devir İşlemleri Listesi** | `nobet_devir_listesi_page.ui`, `tableDevirler`, `searchInput`, `cmbDepartman`, `cmbDurum` | `nobet_devir_list_controller.py:49-314` | `nobet_devirler` tablosu | 7 sütunlu sadeleştirilmiş salt-okunur tablo; Consolas tek aralıklı font ile hizalı tarih/durum gösterimi; alt özet sayacı (Toplam, Bekleyen, Onaylanan, Reddedilen). |
| **Doğal Dil Hikaye Paneli** | `panelDetay`, `txtHikaye`, `lblYoneticiNot`, `lblOnaylayanBilgi`, `btnPanelKapat` | `nobet_devir_list_controller.py:330-409` | `devir_service.get_devir_talebi` | Tabloda satır seçildiğinde sağ panel açılır; kimin hangi nöbeti kiminle değiştirdiği veya devrettiği doğal dille ("Ahmet, nöbetini Mehmet'e devretti") formatlanır. |
| **Çok Kademeli Hiyerarşik Onay** | Web Portal Onay Butonları & Bildirim Merkezi | `nobet_devir_service.py:373-580` | `nobet_devirler.onay_asamasi` | Sırasıyla `alan_personel` (Kabul/Red) ➔ `birim_sorumlusu` (Birim Onayı) ➔ `hizmet_sorumlusu` (Yönetici Onayı). Admin rolü acil durumlarda tek adımda nihai onayı vererek süreci tamamlayabilir. |
| **Acil Mazeret & Toplu İkame** | `nobet_acil_mazeret_dialog.ui`, `personelCombo`, `baslangicTarihiEdit`, `bitisTarihiEdit`, `btnHesapla`, `ikameTable` | `nobet_acil_mazeret_dialog_controller.py:22-210` | `NobetCizelgeService`, `NobetScheduler` | Personel ve tarih aralığı girilir; `[Hesapla]` ile etkilenen nöbetler bulunur; algoritma en yüksek uygunluk puanına sahip personelleri ikame açılır kutusunda önerir. |
| **Mazeret Geri Alma** | `gecmisTable`, `btnGeriAl` (`nobet_acil_mazeret_dialog.ui:Sekme 2`) | `nobet_acil_mazeret_dialog_controller.py:334-374` | `cizelge_service.geri_al_toplu_mazeret` | Seçilen mazeret işlemi geri alınır; ikame atanan nöbetler silinir ve mazeretli personelin orijinal nöbetleri eski haline döndürülür. |
| **Ders Programı Revizyonu** | `nobet_egitim_revizyon_dialog.ui`, `dateRevizyon`, `cbPzt`..`cbPzr`, `txtDesc`, `btnSave` | `nobet_egitim_revizyon_dialog.py:13-96` | `nobet_service.revise_personel_egitim_istegi` | Eski talep dondurulur; seçilen revizyon tarihinden itibaren işaretlenen haftalık ders günleri aktif edilerek yeni istek kaydı oluşturulur. |
| **Gebelik Bildirimi Dialogu** | `gebelik_bildirimi_dialog.ui`, `bildirimTarihiEdit`, `bitisTarihiEdit`, `tercihBirimCombo`, `btnSave` | `gebelik_bildirimi_dialog.py:18-84` | `personel_calisma_kisitlari`, `personeller` | Bildirim ve tahmini doğum tarihi kaydedilir; personelin gece nöbeti ve radyasyonlu alan çalışma kilitleri anında devreye girer. |
| **Yönetici Aksiyon Merkezi** | `yonetici_aksiyon_merkezi_dialog.ui`, `scrollLayout` | `yonetici_aksiyon_merkezi_dialog.py:25-246` | `personel_service.gebelik_toplu_aksiyon_uygula` | 3 adımlı sihirbaz: 1. Radyasyonsuz birime transfer, 2. Eski birimdeki boş nöbetlere ikame atanması, 3. Yeni birimde eksik mesai için gündüz vardiyaları planlama. |
| **Nöbet Değişim Havuzu** | Web Portal: `NobetDevirDashboard.tsx` | `nobet_havuz_service.py:19-250`, `nobet.routes.ts:85-300` | `nobet_degisim_havuzu` tablosu | Nöbet pazaryeri; aylık 48 saat havuza bırakma tavanı; nöbete 36 saat kala otomatik TTL zaman aşımı (`ZAMAN_ASIMI`). |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Gebe/Emziren Personele Devir Engeli | `Yasal Kısıt Engeli` | `QMessageBox.warning: "Personele ait aktif gebelik bildirimi bulunmaktadır. Yasal mevzuat ve NDK kuralları gereği gebe personele nöbet devredilemez."` | `nobet_devir_dialog_controller.py:163` |
| Sağlık Raporu Muafiyeti Engeli | `Yasal Kısıt Engeli` | `QMessageBox.warning: "Personele ait 657 SK m. 105 uyarınca aktif Sağlık Kurulu / Heyet Raporu nöbet muafiyeti bulunmaktadır. Nöbet devredilemez."` | `nobet_devir_service.py:171` |
| Farklı Hizmet Sınıfları Arası Devir Engeli | `Hata` | `SonucYonetici.hata: "Nöbet devri ve takası yalnızca aynı hizmet sınıfındaki meslektaşlar arasında yapılabilir. Farklı görev unvanlarına sahip personeller birbirinin nöbetini devralamaz."` | `nobet_devir_service.py:262` |
| Taban Mesai Karşılıksız Devredilemez | `Hata` | `SonucYonetici.hata: "Aylık zorunlu fiili çalışma süresi altındaki nöbetler tek yönlü devredilemez. Yalnızca fazla mesai kapsamındaki nöbetler devredilebilir. Lütfen 'Karşılıklı Takas' seçeneğini kullanınız."` | `nobet_devir_service.py:286` |
| Devir Gerekçesi Eksik | `Eksik Alan` | `QMessageBox.warning: "Nöbet devir/takas talebi için devir gerekçesi (nedeni) girilmesi zorunludur."` | `nobet_devir_dialog_controller.py:170` |
| Acil Mazeret Tarih Hatası | `Uyarı` | `QMessageBox.warning: "Başlangıç tarihi bitiş tarihinden sonra olamaz."` | `nobet_acil_mazeret_dialog_controller.py:145` |
| Acil Mazeret Yetkisiz İşlem | `Yetkisiz İşlem` | `QMessageBox.warning: "Acil mazeret ve ikame atama yetkiniz bulunmamaktadır. Bu işlem yalnızca yetkili kullanıcılar veya Sistem Yöneticisi tarafından yapılabilir."` | `nobet_acil_mazeret_dialog_controller.py:285` |
| Mazeret Geri Alma Teyidi | `Onay` | `QMessageBox.question: "Bu mazeret kaydını geri almak istediğinizden emin misiniz? İptal edilen nöbetler eski haline dönecek ve ikame nöbetler silinecektir."` | `nobet_acil_mazeret_dialog_controller.py:350` |
| Havuz Aylık Kotası Aşıldı | `Hata` | `SonucYonetici.hata: "Aylık havuz kotanız aşıldı! (Bu ay kullanılan: X sa, Eklenecek: Y sa, Maksimum Kota: 48.0 sa)"` | `nobet_havuz_service.py:120` |
| Havuz 36 Saat TTL Kuralı | `Hata` | `SonucYonetici.hata: "Nöbet saatine 36 saatten daha az kaldığı için havuz ilanı açılamaz."` | `nobet_havuz_service.py:98` |

### 3. İzole Edilen Hayalet Bileşenler & Kullanıcı Kararları

- **Hayalet Bileşen Taraması:** Modül 09 kapsamındaki arayüz dosyalarında (`nobet_devir_listesi_page.ui`, `nobet_devir_dialog.ui`, `nobet_acil_mazeret_dialog.ui`, `nobet_egitim_revizyon_dialog.ui`, `gebelik_bildirimi_dialog.ui`, `yonetici_aksiyon_merkezi_dialog.ui`) yer alan tüm butonlar, tablolar ve form elemanları ilgili controller sınıflarında aktif sinyal-slot bağlantılarına sahiptir; **hiçbir hayalet bileşen bulunmamaktadır**.
- **Kullanıcı Kararı 1 (Hizmet Sınıfı Eşitliği):** Nöbet devir ve takas işlemlerinin yalnızca aynı unvan ve hizmet sınıfındaki personeller arasında yapılabileceği kuralı teyit edilmiş ve kılavuza işlenmiştir.
- **Kullanıcı Kararı 2 (Tek Yönlü Devirde Fazla Mesai Şartı):** Personelin zorunlu taban mesaisini karşılıksız devredemeyeceği, yalnızca fazla mesai saatlerinin açık devredilebileceği kılavuzda vurgulanmıştır.
- **Kullanıcı Kararı 3 (36 Saatlik Havuz TTL ve İdari İnisiyatif):** Nöbete 36 saat kala havuz ilanının zaman aşımına uğradığı teyit edilmiştir. Ancak bu süreçte acil mazerete aktarımın otomatik işletilmeyeceği; personelin yöneticiye başvurusu ve amirin klinik zorunluluk tespit etmesi neticesinde yönetici inisiyatifiyle acil mazeret sürecinin başlatılacağı kuralı dondurulmuştur.
- **Kullanıcı Kararı 4 (Gebe Personel 3 Adımlı Aksiyon Sihirbazı):** Gebe personelin radyasyonsuz birime transferi, eski nöbetlerine ikame atanması ve eksik mesaisinin gündüz vardiyalarıyla dengelenmesi adımları kullanım kılavuzunda adım adım açıklanmıştır.
- **Kullanıcı Kararı 5 (Acil Mazeret Tek Tıkla Geri Alma):** Mazeret ve ikame kayıtlarının `[Geri Al]` butonu ile orijinal nöbetleri sıfır kayıpla kurtardığı kullanıcı rehberine eklenmiştir.

---

## 🔬 Modül 10: Nöbet Borç / Alacak ve Fazla Mesai Denetim İzi (Kod Doğrulama Raporu)

- **İlgili Kılavuz Bölümü:** `docs/kilavuz_guncel.md` -> Bölüm 10
- **Taranan UI Dosyaları:** `ui/pages/nobet/nobet_borc_alacak_page.ui`
- **Taranan Controller ve Dialog Kodları:** `ui/controllers/nobet/nobet_borc_alacak_controller.py` (`NobetBorcAlacakController`, `FMOdemeSecimDialog`)
- **Taranan Servis ve Domain Kodları:** `app/services/nobet/nobet_borc_alacak_service.py` (`NobetBorcAlacakService`), `app/domain/nobet/hedef_saat_hesaplayici.py` (`calculate_target_hours`, `calculate_hybrid_overtime`, `split_shift_holiday_hours`)
- **Taranan Veritabanı Tabloları:** `personel_nobet_borc_alacak`, `nobet_cizelgesi`, `nobet_planlari`, `personel_izinler`, `nobet_kisitlari`, `departmanlar`, `resmi_tatiller`
- **Taranan Web Portal Bileşenleri:** `web_portal/src/components/dashboards/NobetDashboard.tsx`, `web_portal/src/routes/dashboard/dashboard.nobet.routes.ts`
- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 3 (Algoritmik Karar / Mutemetlik Fazla Mesai, 35s/40s Çift Havuzlu Hibrit Denklik, Koruyucu Sağlık Kotası, 130s Yasal Tavan ve Sudo Kilit Güvenliği)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Dönem ve Birim Filtreleme** | `yilFilter`, `ayFilter`, `departmanFilter`, `hizmetFilter` | `nobet_borc_alacak_controller.py:234-257, 314-323` | `personel_nobet_borc_alacak(yil, ay)` | Yayınlanmış nöbet planı (`check_published_plan_exists`) ve aktif nöbetçi departmanlar taranır. |
| **Yasal Hedef & Kıstelyevm İndirimi** | `tableWidget` (Kolon 2: Yasal Hedef) | `nobet_borc_alacak_controller.py:485-500` | `hedef_saat_hesaplayici.py:calculate_hybrid_overtime` | Ay içi hafta içi iş günleri (35s veya 40s), resmi tatil ve yarım gün arife (13:00) günleri ile onaylı izin günleri zorunlu hedef saatten düşülür. |
| **Çift Havuzlu Fiili Mesai & Zengin Tooltip** | `tableWidget` (Kolon 3: Toplam Fiili) | `nobet_borc_alacak_controller.py:581-606` | `split_shift_holiday_hours` | Personelin kendi birimi, diğer birimleri, bayram mesaisi ve 35s radyasyonlu vs 40s genel alan fiili nöbetleri zengin HTML tooltip ile izah edilir. |
| **Önceki Devir ve Kümülatif Toplam** | `tableWidget` (Kolon 5, 6) | `nobet_borc_alacak_controller.py:629-645` | `NobetService.get_previous_month_carryover` | Önceki aydan devreden bakiye ve bu ayki net fark toplanır; artı bakiyeler `#22C55E` yeşil, borçlu bakiyeler `#EF4444` kırmızı renklendirilir (Consolas font). |
| **FM Ödeme Dağıtımı Modalı** | `FMOdemeSecimDialog`, `spin_odenen`, `btn_kota`, `btn_tamami` | `nobet_borc_alacak_controller.py:39-169, 722-740` | `YASAL_MAKS_FM_TAVANI = 130.0`, `KURUMSAL_FM_KOTASI = 60.0` | Satırda `[FM Öde]` tıklandığında açılır; 60s tükenmişlik önleme kotası veya 130s yasal tavanı seçtirir; sonraki aya devir anlık hesaplanır. |
| **Toplu Kota veya Devir Uygulama** | `bulkStatusCombo`, `btnApplyBulk` | `nobet_borc_alacak_controller.py:276-282, 1193-1262` | `personel_nobet_borc_alacak` | Seçili çoklu satırlara tek tıkla `kota_60`, `tam_ode` veya `devret` kurallarını uygular. |
| **Dönem Kilit Durumu ve Rozeti** | `lblLockStatus` | `nobet_borc_alacak_controller.py:779-800` | `has_fm_odendi`, `_sudo_unlocked` | FM Ödendi ise Tehlike (Kırmızı Kilit), Sudo açılmışsa Uyarı (Sarı Kilit Açık), Kayıtlı ise Bilgi (Mavi), Açık ise Başarı (Yeşil) durum token'ı basar. |
| **Sudo Yönetici Kilidi Açma** | `btnUnlock` | `nobet_borc_alacak_controller.py:776, 1264-1271` | `SudoDialogController` | Kilitli dönemde yalnızca yönetici şifre doğrulaması başarılı olursa `_sudo_unlocked = True` yapılır ve tablo kontrolleri aktifleştirilir. |
| **Toplu Karar Kaydetme** | `btnSaveAll` | `nobet_borc_alacak_controller.py:852-939` | `save_borc_alacak_records` | Yetki denetimi (`_has_permission('yazma')`) yapılır; tüm personellerin hedef, fiili, fark, ödenen, devreden saatleri ve durumları (`FMOdendi`, `SonrakiAyaEklendi`, vb.) transaction ile kaydedilir. |
| **Resmi Mutemetlik Bildirim Cetveli** | `btnPrintFm` (Yazdır / Excel / PDF) | `nobet_borc_alacak_controller.py:940-1191` | `ExportService`, `RaporPaketi`, `QPrintDialog` | 5 sütunlu resmi icmal dökümü (T.C. Kimlik No, Ad Soyad, Görev Yeri, Normal FM, Bayram FM) ve çift amir imza bloğuyla yazıcıya, Excel'e veya PDF'e aktarılır. |
| **Web Portalı Bakiye İzleme** | Web Portal: `NobetDashboard.tsx` (`activeTab === 'borc_alacak'`) | `NobetDashboard.tsx:2325-2385`, `dashboard.nobet.routes.ts:490-540` | `personel_nobet_borc_alacak`, `personel_izinler` | Web üzerinden salt-okunur denetim; "X Gün İzinli" rozeti, hedef saat, fiili saat ve fark saat izleme; Dashboard üzerinden tek tıkla Excel/PDF export. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Yayınlanmış Plan Yok | `lblLockStatus` / Durum | `lblLockStatus.setText("Seçili dönem için yayınlanmış nöbet planı bulunmamaktadır.")` | `nobet_borc_alacak_controller.py:338` |
| Kaydetme Yetkisiz İşlem | `Yetkisiz İşlem` | `QMessageBox.warning: "Borç/alacak ve fazla mesai kararlarını kaydetme yetkiniz bulunmamaktadır.\n\nBu işlem yalnızca yetkili kullanıcılar veya Sistem Yöneticisi tarafından yapılabilir."` | `nobet_borc_alacak_controller.py:856` |
| Kaydedilecek Kayıt Yok | `Bilgi` | `QMessageBox.information: "Kaydedilecek kayıt bulunamadı."` | `nobet_borc_alacak_controller.py:925` |
| Kayıt Başarılı | `Başarılı` | `QMessageBox.information: "Borç/alacak kayıtları başarıyla kaydedildi."` | `nobet_borc_alacak_controller.py:935` |
| Ödenecek FM Kaydı Yokken Yazdırma | `Bilgi` | `QMessageBox.information: "{ay} {yil} dönemi için ödenecek fazla mesai kaydı bulunamadı.\n\nÖnce personellerin 'Ödenecek Süre (Saat)' alanını belirleyip 'Değişiklikleri Kaydet' butonuna basınız."` | `nobet_borc_alacak_controller.py:965` |
| Toplu İşlem Seçilmedi | `Uyarı` | `QMessageBox.warning: "Lütfen toplu olarak uygulamak istediğiniz bir işlem seçiniz."` | `nobet_borc_alacak_controller.py:1196` |
| Toplu İşlem İçin Satır Seçilmedi | `Uyarı` | `QMessageBox.warning: "Toplu işlem uygulamak için tablodan en az bir satır seçmelisiniz."` | `nobet_borc_alacak_controller.py:1201` |
| Seçilenlerde Artı FM Yok | `Uyarı` | `QMessageBox.warning: "Seçilen personeller arasında artı fazla mesaisi bulunan personel bulunamadı."` | `nobet_borc_alacak_controller.py:1258` |
| Toplu Uygulama Başarılı | `Başarılı` | `QMessageBox.information: "Seçili {updated_count} personelin ödeme ve devir saatleri toplu olarak güncellendi.\n\nKaydetmek için 'Değişiklikleri Kaydet' butonuna basınız."` | `nobet_borc_alacak_controller.py:1250` |
| Sudo Kilidi Açıldı | `Başarılı` | `QMessageBox.information: "Dönem kilidi geçici olarak açıldı. Düzenleme yapabilirsiniz."` | `nobet_borc_alacak_controller.py:1270` |

### 3. İzole Edilen Hayalet Bileşenler & Kullanıcı Kararları

- **Hayalet Bileşen Taraması:** `nobet_borc_alacak_page.ui` dosyasında yer alan 11 bileşenin tamamı controller slotlarına ve iş mantığına eksiksiz bağlanmıştır; **hiçbir hayalet bileşen bulunmamaktadır**.
- **Kullanıcı Kararı 1 (130 Saat Yasal Mutlak Tavan):** Kümülatif fazla mesaisi ne kadar yüksek olursa olsun, mevzuat gereğince o ay için en fazla 130 saat ödeme yapılabileceği, kalan bakiyenin mecburi olarak devredeceği kuralı onaylanarak kılavuza işlenmiştir.
- **Kullanıcı Kararı 2 (60 Saat Kurumsal Koruyucu Sağlık Kotası):** **Kritik Saha Ayrımı:** 60 saatlik kota bir bütçe kısıtı değil; personelin aşırı çalışmasını sınırlandırarak fiziksel ve ruhsal sağlığını korumak ve mesleki tükenmişliği (burnout) engellemek amacıyla kurum tarafından konulmuş koruyucu bir iş sağlığı sınırıdır. Kılavuzda bu amaç açıkça vurgulanmıştır.
- **Kullanıcı Kararı 3 (Eksik Mesai / Borç Devri):** Kümülatif saati eksi olan personellerde ödeme seçeneğinin kilitlenerek borcun doğrudan sonraki aya devredilmesi kuralı teyit edilmiştir.
- **Kullanıcı Kararı 4 (Dönem Kilit ve Sudo Güvenliği):** Ödemesi kesinleşen dönemlerin yetkisiz manipülasyonunu engellemek amacıyla `FM Ödendi` kilidi ve `SudoDialogController` üzerinden yönetici şifresi doğrulaması zorunluluğu kılavuz adımlarına eklenmiştir.
- **Kullanıcı Kararı 5 (Bayram Mesaisi Ayrımı):** Arife saat 13:00 ve resmi tatil nöbetlerinin bordro cetvelinde ayrı bir sütun olarak mutemetliğe iletilmesi standardı tescil edilmiştir.

---

## 🔬 Modül 11: Fiili Hizmet ve Şua Hesaplama (FHZ) Denetim İzi (Kod Doğrulama Raporu)

- **İlgili Kılavuz Bölümü:** `docs/kilavuz_guncel.md` -> Bölüm 11
- **Taranan UI Dosyaları:** 
  - `ui/pages/fiili/fiili_hizmet_listesi_page.ui`
  - `ui/pages/fiili/fiili_hizmet_dagilim_tab.ui`
  - `ui/pages/fiili/fiili_hizmet_hesaplama_tab.ui`
  - `ui/pages/fiili/fiili_hizmet_rapor_tab.ui`
  - `ui/pages/fiili/fiili_hizmet_dagilim_dialog.ui`
  - `ui/pages/fiili/fhz_onaysiz_izin_uyari_dialog.ui`
- **Taranan Controller Kodları:**
  - `ui/controllers/fiili/fiili_hizmet_list_controller.py`
  - `ui/controllers/fiili/fiili_hizmet_dagilim_tab_controller.py`
  - `ui/controllers/fiili/fiili_hizmet_hesaplama_tab_controller.py`
  - `ui/controllers/fiili/fiili_hizmet_rapor_tab_controller.py`
  - `ui/controllers/fiili/fiili_hizmet_dagilim_dialog.py`
- **Taranan Servis ve Domain Kodları:**
  - `app/services/personel/fiili_hizmet_service.py` (`FiiliHizmetService`)
  - `app/domain/fiili_hizmet/policies.py`
  - `app/domain/fiili_hizmet/fhz_calculator.py`
- **Taranan Veritabanı Tabloları:**
  - `personel_fiili_gorev_dagilim`, `personel_fiili_hizmet_aylik`, `fiili_hizmet_donem_kilitleri`, `fiili_hizmet_yillik_kilitler`, `sua_hakedis`, `personel_sua_hakedis_aylik`
- **Taranan Web Portal Bileşenleri:**
  - `web_portal/src/components/dashboards/SuaDashboard.tsx`, `web_portal/src/routes/dashboard/dashboard.sua.routes.ts`
- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 3 (Algoritmik Karar / SGK 5510 Fiili Hizmet Zammı, Sağlık Bakanlığı Şua İzni Baremleri, 15-14 Bordro Döngüsü, Kademeli Kilit Güvenliği ve Onaysız İzin Bariyeri)

### 1. Dosya ve Bileşen İzlenebilirlik Matrisi

| Kılavuzdaki Başlık / İşlem | UI Dosyası ve Kontrol ID | Controller & Satır Referansı | DB / Model / Servis | Teknik Kanıt & Kod Özeti |
|---|---|---|---|---|
| **Sihirbaz Adım Göstergesi** | `step_progress` (`fiili_hizmet_listesi_page.ui`) | `fiili_hizmet_list_controller.py:84-118` | `StepProgressWidget` | 3 adımlı sihirbaz akışı; adım tıklandığında `mainTabs.setCurrentIndex` tetiklenir; dönem bilgileri senkronize edilir. |
| **Dönem Seçimi (15-14)** | `dagilimYilInput`, `dagilimAyFilter` | `fiili_hizmet_dagilim_tab_controller.py:85-112` | `personel_fiili_gorev_dagilim` | Varsayılan olarak her ayın 15'inden bir sonraki ayın 14'üne kadar olan döngü dinamik yüklenir; Genel Ayarlar'dan değiştirilebilir. |
| **Sadece Değişenler Filtresi** | `dagilimSadeceDegisenlerFilter` | `fiili_hizmet_dagilim_tab_controller.py:271-285` | `departman_id != default_departman_id` | Kadro yerinden farklı bir birimde görevlendirilen personeller filtrelenir ve tabloda kırmızı vurgulanır. |
| **Otomatik Görev Ata** | `btnGorevAdd` | `fiili_hizmet_dagilim_tab_controller.py:438-468` | `ensure_donem_gorev_dagilim_defaults` | Dönemdeki boşlukları personelin varsayılan birimi ve nöbet planıyla eşleştirerek otomatik taslak üretir. |
| **Onayla ve Hesaplamaya Geç** | `btnBulkApprove` | `fiili_hizmet_dagilim_tab_controller.py:470-515` | `onay_durumu = 'Onayli'` | Taslak görev dağılımlarını toplu onaylar ve sekmeyi 2. Adıma (`FiiliHizmetHesaplamaTab`) aktarır. |
| **Bireysel Görev Dağılımı Modalı** | `FiiliHizmetDagilimDialog` | `fiili_hizmet_dagilim_dialog.py:27-142` | `upsert_gorev_dagilim` | 0-24 saat aralığı, çakışma ve kilit kontrollerini denetler; bireysel görevleri kaydeder. |
| **Fiili Hizmet & Şua Hesaplayıcı** | `hesaplamaTableWidget` | `fiili_hizmet_hesaplama_tab_controller.py:312-425` | `fhz_calculator.py`, `calculate_sua` | Koşul A (7.0s) ve Koşul B (8.0s), resmi tatil ve onaylı izin düşümleri, 50 saate 1 gün ve yıllık azami 30 gün Şua tavanını uygular. |
| **Dönemi Kilitle / Aç** | `kilitButton` | `fiili_hizmet_hesaplama_tab_controller.py:558-615` | `fiili_hizmet_donem_kilitleri` | Bir önceki dönemin kilit durumunu denetler; boş dönem kilitlemesini engeller (RED-15) ve dönemi kilitler. |
| **Yıllık Kilidi Kapat / Aç** | `yillikKilitButton` | `fiili_hizmet_hesaplama_tab_controller.py:620-675` | `fiili_hizmet_yillik_kilitler` | Yalnızca Admin/Süpervizör yetkisiyle çalışır (RED-09); önceki yıl kontrolü yapar ve tüm yılı kalıcı dondurur. |
| **Dönem Hakediş Çıktısı (PDF/Excel)** | `btnExportPdf`, `btnExportExcel` | `fiili_hizmet_hesaplama_tab_controller.py:165-235` | `ExportService`, `report_engine` | 8 sütunlu aylık hakediş dökümünü PDF veya Excel olarak üretir; denetim izine mühürler. |
| **Onaysız İzin Güvenlik Uyarısı** | `FhzOnaysizIzinUyariDialog` | `fiili_hizmet_hesaplama_tab_controller.py:440-475` | `fhz_onaysiz_izin_uyari_dialog.ui` | Dönemde resmi onay almamış izinler varsa hesaplamayı durdurur ve uyarı verir. |
| **Puantaj Excel İndir** | `excelButton` | `fiili_hizmet_rapor_tab_controller.py:189-245` | `RaporTanimi`, `openpyxl` | Kimlik no, ad soyad, gün, izin, fiili saat, kümülatif saat ve Şua hakediş sütunlarını resmi formatta Excel'e döker. |
| **Web Portalı Şua Karnesi** | Web Portal: `SuaDashboard.tsx` | `SuaDashboard.tsx:45-180`, `dashboard.sua.routes.ts:30-95` | `personel_sua_hakedis_aylik` | Personel bazlı Şua karnesi (kazanım yılı, kullanım yılı, toplam fiili saat, hak edilen gün, bakiye) ve risk rozetleri (Kırmızı, Sarı, Yeşil). |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Sıralı Dönem Kilidi Hatası | `Kilit Hatası` | `QMessageBox.warning: "Bir önceki dönem ({prev_ay}/{prev_yil}) kilitlenmeden bu dönem kilitlenemez."` | `fiili_hizmet_hesaplama_tab_controller.py:575` |
| Boş Dönem Kilitleme Engeli | `Kilit Uyarısı` | `QMessageBox.warning: "Hesaplanmış veya kaydedilmiş veri bulunmayan boş bir dönem kilitlenemez. Lütfen önce hesaplama yapınız."` | `fiili_hizmet_hesaplama_tab_controller.py:582` |
| Yıllık Kilit Yetkisiz İşlem | `Yetkisiz İşlem` | `QMessageBox.warning: "Yıllık kilit açma ve kilitleme işlemleri yalnızca Yönetici (Admin) veya Süpervizör yetkisine sahip kullanıcılar tarafından yapılabilir."` | `fiili_hizmet_hesaplama_tab_controller.py:628` |
| Sıralı Yıl Kilidi Hatası | `Kilit Hatası` | `QMessageBox.warning: "Bir önceki yıl ({prev_yil}) kilitlenmeden bu yıl kilitlenemez."` | `fiili_hizmet_hesaplama_tab_controller.py:638` |
| Onaysız İzin Uyarısı | `Onaysız İzin Uyarısı` | `FhzOnaysizIzinUyariDialog: "Seçtiğiniz FHZ hesaplama döneminde henüz Resmi Onay verilmemiş (Ön Onaylı) izinler tespit edilmiştir..."` | `fiili_hizmet_hesaplama_tab_controller.py:445` |
| Görev Saati Sınırı (0-24s) | `Geçersiz Süre` | `QMessageBox.warning: "Çalışma saati 0-24 aralığında olmalıdır."` | `fiili_hizmet_dagilim_dialog.py:112` |
| Otomatik Görev Atama Başarısı | `Başarılı` | `QMessageBox.information: "Dönem görev dağılımı varsayılan birimlerle başarıyla dolduruldu."` | `fiili_hizmet_dagilim_tab_controller.py:465` |
| Toplu Dağıtım Onayı | `Başarılı` | `QMessageBox.information: "{count} personelin görev dağılımı onaylandı ve hesaplama ekranına aktarıldı."` | `fiili_hizmet_dagilim_tab_controller.py:512` |

### 3. İzole Edilen Hayalet Bileşenler & Kullanıcı Kararları (2026-09-24)

- **Gizlenmiş Yardımcı Butonlar Denetimi:** `.ui` dosyalarında yer alan ancak controller tarafından otomatik hesaplama/kayıt döngüsünü yürütmek için bilinçli olarak gizlenen (`hide()`) kontroller (`hesaplaButton`, `kaydetButton`, `raporOlusturButton`) işlevseldir. Modülde hiçbir kopuk **HAYALET BİLEŞEN** bulunmamaktadır.
- **Kullanıcı Kararı 1 (15-14 SGK Döngüsü ve Kurumsal Esneklik):** Sistem varsayılanı olarak 5510 Sayılı Kanun gereği 15-14 dönemi baz alınır; ancak kurumun bordro takvimine göre **Genel Ayarlar > Fiili Hizmet Ayarları** sekmesinden yetkili kullanıcı tarafından değiştirilebileceği teyit edilmiştir.
- **Kullanıcı Kararı 2 (50 Saate 1 Gün & 30 Gün Yasal Şua Tavanı):** Sağlık Bakanlığı baremleri gereğince her 50 fiili çalışma saatine 1 gün Şua İzni tahakkuk ettiği ve yıllık hak edişin azami 30 gün ile sınırlandırıldığı onaylanmıştır.
- **Kullanıcı Kararı 3 (Koşul A vs Koşul B):** Radyasyonlu alanda çalışan personel (Koşul A, 7.0 saat, Şua hakkı var) ile idari/destek personeli (Koşul B, 8.0 saat, Şua hakkı yok) ayrımı sahadaki uygulamayla tam uyumludur.
- **Kullanıcı Kararı 4 (Kademeli Sıralı Kilit Hiyerarşisi):** Önceki ay kilitlenmeden cari ayın kilitlenemeyeceği; yıl kilitlemenin ise yalnızca Admin/Süpervizör yetkisinde olduğu ve o yılın tüm hesaplamalarını dondurduğu tescil edilmiştir.
- **Kullanıcı Kararı 5 (Onaysız İzin Güvenlik Uyarısı):** Dönemde resmi onayı eksik izinler varsa hesaplamanın durdurulacağı, kullanıcının İzin Yönetimi ekranına manuel geçip onayları tamamlaması gerektiği teyit edilmiştir.



---

## Modül 12: Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması (12_dozimetre_takibi_ve_rdf43_arastirma)

### 1. Kod Doğrulama & İzlenebilirlik Matrisi

| Arayüz Bileşeni (UI Label) | UI Nesne Adı / Dosya | Controller / Kod Satırı | DB Tablo / Model / Servis | İş Kuralı ve Açıklama |
|---|---|---|---|---|
| **Dozimetre Takip Kokpiti** | `DozimetreTakipPage` (`dozimetre_takip_page.ui`) | `dozimetre_takip_controller.py:45-120` | `personel_dozimetre_olcum` | 4 adet özet KPI kartı (Aktif Dozimetre, Bu Dönem Okunan, İnceleme Eşiğindeki Kayıtlar, Yıllık Limiti Aşanlar) ve 2 ana sekme (Ölçümler / Aksiyonlar). |
| **Ölçüm Ekle Butonu** | `btnOlcumEkle` (`dozimetre_takip_page.ui`) | `dozimetre_takip_main_tab.py:112-145` | `DozimetreOlcumDialog` | Tekil ölçüm giriş modalını açar; T.C., dönem, dozimetre tipi ve Hp(10) dozunu alır. |
| **Laboratuvardan İçe Aktar** | `btnImport` (`dozimetre_takip_page.ui`) | `dozimetre_takip_main_tab.py:150-185` | `DozimetreImportDialog` | 3 adımlı içe aktarım sihirbazını başlatır (TENMAK, RADAT, Excel/CSV desteği). |
| **Dönem ve Tip Filtreleri** | `cmbDonemFilter`, `cmbTipFilter` | `dozimetre_takip_main_tab.py:210-250` | `DozimetreFilterService` | Ölçüm listesini yıl/dönem ve dozimetre türüne (Tüm Vücut, Yüzük, Göz Lensi, EPD) göre anında süzer. |
| **Alarm ve Eşik Renklendirmesi** | `tblOlcumler` | `dozimetre_takip_main_tab.py:280-340` | `doz_limit_checker.py` | Hp(10) değerine göre satır renklendirmesi (<1.0 Yeşil, 1-2 Sarı, 2-5 Turuncu, >=5 Kırmızı). |
| **İçe Aktarım Sihirbazı (3 Adım)** | `DozimetreImportDialog` (`dozimetre_import_page.ui`)| `dozimetre_import_controller.py:55-220` | `DozimetreImportService` | Adım 1: Sağlayıcı ve dosya seçimi; Adım 2: Eşleştirme ve doğrulama önizlemesi; Adım 3: Veritabanına aktarım ve alarm tetikleme. |
| **Aksiyon Başlat / Düzenle** | `btnAksiyonBaslat` | `dozimetre_aksiyonlar_tab.py:120-175` | `DozArastirmaFormDialog` | 2.0 mSv eşiği aşan kayıtlar için 4 adımlı resmi RD.F43 araştırma formu diyaloğunu başlatır. |
| **Yasal Süre Geri Sayımı** | `badgeYasalSure` | `dozimetre_aksiyonlar_tab.py:180-215` | `NDK 10 İş Günü Kuralı` | Bildirim tarihinden itibaren 10 iş günü geri sayım rozeti (Kalan > 3 sarı, <= 3 turuncu, aşımda kırmızı). |
| **RD.F43 Form Sihirbazı (4 Adım)**| `DozArastirmaFormDialog` (`doz_arastirma_form_dialog.ui`)| `doz_arastirma_form_controller.py:65-310`| `personel_doz_arastirma` | Adım 1: Personel/Görev; Adım 2: Olay/Koşullar; Adım 3: Maruziyet/Artefakt ve RKS Doz Hesabı; Adım 4: Karar ve İmzalar. |
| **RKS Doz Hesaplama Motoru** | `btnDozHesapla` | `doz_arastirma_form_controller.py:340-385`| `RksDozHesaplayici` | Tıbbi tetkik veya unutulma vakalarında şua süresi ve mesafeye göre net maruziyet dozunu hesaplar. |
| **Resmi RD.F43 Word İndir** | `btnRdf43WordIndir` | `doz_arastirma_form_controller.py:410-465`| `docxtpl`, Jinja2 Template | NDK standartlarında resmi RD.F43 araştırma tutanağını Word/PDF formatında üretir. |
| **Web Portalı Dozimetre Paneli**| Web Portal: `DozimetreDashboard.tsx` | `DozimetreDashboard.tsx:40-195` | `dashboard.dozimetre.routes.ts` | Personel radyal doz göstergesi (Radial Gauge), 12 aylık kümülatif trend çizgisi ve anomali uyarıları. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Eşik Aşımı Uyarısı | `Eşik Aşımı Uyarısı` | `QMessageBox.warning: "Personelin Hp(10) dozu ({doz} mSv) 2.0 mSv yasal inceleme eşiğini aşmaktadır. Resmi RD.F43 formu açılacaktır."` | `dozimetre_olcum_dialog.py:145` |
| Sağlayıcı Dosya Formatı Hatası | `Geçersiz Dosya Formatı` | `QMessageBox.critical: "Seçilen dosya geçerli bir {provider} dozimetre raporu yapısında değildir. Lütfen başlık sütunlarını kontrol ediniz."` | `dozimetre_import_controller.py:112` |
| Eşleşmeyen Personel Uyarısı | `Eşleştirme Uyarısı` | `QMessageBox.warning: "Dozimetre raporundaki {count} personelin T.C. Kimlik / Dozimetre No eşleşmesi bulunamadı. Bu satırlar atlanacaktır."` | `dozimetre_import_controller.py:168` |
| 10 İş Günü Yasal Süre Aşımı | `Yasal Süre Aşımı` | `QMessageBox.critical: "Bu vaka için NDK tarafından öngörülen 10 iş günlük resmi araştırma süresi aşılmıştır! Derhal form tanzim edilmelidir."` | `dozimetre_aksiyonlar_tab.py:195` |
| DÖF Numarası Zorunluluğu | `Eksik Bilgi` | `QMessageBox.warning: "Gerçek mesleki aşım durumlarında kurumsal DÖF takip numarası girilmesi zorunludur."` | `doz_arastirma_form_controller.py:275` |
| İçe Aktarım Başarılı | `İçe Aktarım Tamamlandı` | `QMessageBox.information: "{count} adet dozimetre ölçüm kaydı başarıyla veritabanına aktarıldı. {alarm_count} adet eşik aşımı tespit edildi."` | `dozimetre_import_controller.py:205` |

### 3. İzole Edilen Hayalet Bileşenler & Kullanıcı Kararları (2026-09-24)

- **Hayalet Bileşen Denetimi:** Modüldeki tüm buton ve kontroller (`btnOlcumEkle`, `btnImport`, `btnAksiyonBaslat`, `btnRdf43WordIndir`, `btnDozHesapla`) veritabanı servislerine ve resmi tutanak şablonlarına bağlıdır. Modülde hiçbir kopuk **HAYALET BİLEŞEN** bulunmamaktadır.
- **Kullanıcı Kararı 1 (NDK Yasal Doz Limitleri ve Güvenlik Blokajları):** Gebe çalışan için 1.0 mSv gebelik boyunca biriken doz tavanı, aylık 2.0 mSv inceleme eşiği, yıllık 20.0 mSv kümülatif çalışma blokajı ve 5 yıllık 100.0 mSv mevzuat baremleri eksiksiz onaylanmıştır.
- **Kullanıcı Kararı 2 (10 İş Günü Yasal Form Tanzim Süresi):** NDK mevzuatı gereği bildirim tarihinden itibaren 10 iş günü içinde resmi Doz Araştırma Formu (RD.F43) düzenlenmesi zorunluluğu ve renkli geri sayım sayacı teyit edilmiştir.
- **Kullanıcı Kararı 3 (Dozimetre Sağlayıcı Desteği ve Yazılım Destek Prosedürü):** TENMAK, RADAT ve Genel Excel formatlarının desteklendiği; kurumun çalıştığı sağlayıcı formatı farklı ise kullanıcıların örnek rapor ile yazılım destek ekibine başvuracağı ve sisteme ücretsiz entegrasyon yapılacağı teyit edilmiştir.
- **Kullanıcı Kararı 4 (Dozimetre Anomali Katsayısı ve Erken Uyarı):** Personelin ölçüm değerinin kendi geçmiş kişisel ortalamasını radikal biçimde aşması durumunun doğrudan anomali olarak listeleneceği ve erken uyarı tablosuna alınacağı onaylanmıştır.
- **Kullanıcı Kararı 5 (DÖF ve Tıbbi Tetkik / Unutulma Sahte Aşım Ayrımı):** Hastane içi tetkik veya odada unutulma durumlarının artefakt olarak belgelenip RKS doz hesabı yapılacağı; gerçek maruziyet durumunda ise kurumsal DÖF takip numarasının zorunlu tutulacağı tescil edilmiştir.
- **Kullanıcı Kararı 6 (Gerçek Ekran Görüntüleri Arşivi):** Kılavuz sayfalarında `docs/help/assets/img/` klasöründeki `12_` ön ekli tüm gerçek ekran görüntüleri (`12_1_dozimetre_list.png`, `12_2_dozimetre_olcum.png`, `12_dozimetre import.png`, `12_doz_arastirma_form_dialog.png`, `12_1_doz_arastirma_form_dialog.png`, `12_2_doz_arastirma_form_dialog.png`, `12_3_doz_arastirma_form_dialog.png`) kullanılacaktır.

---

## Modül 13: Sağlık Muayeneleri ve Periyodik Takip (13_saglik_muayeneleri_ve_periyodik_takip)

### 1. Kod Doğrulama & İzlenebilirlik Matrisi

| Arayüz Bileşeni (UI Label) | UI Nesne Adı / Dosya | Controller / Kod Satırı | DB Tablo / Model / Servis | İş Kuralı ve Açıklama |
|---|---|---|---|---|
| **Sağlık Muayene Listesi** | `SaglikMuayeneListesiPage` (`saglik_muayene_listesi_page.ui`) | `saglik_muayene_list_controller.py:30-100` | `personel_saglik_muayene` | 7 kolonlu tablo (Personel, Hizmet Sınıfı, Tür, Tarih, Uzmanlık Durumları, Sonraki Muayene, Genel Sonuç). |
| **Muayene Ekle Butonu** | `addButton` (`saglik_muayene_listesi_page.ui`) | `saglik_muayene_list_controller.py:404-414` | `SaglikMuayeneAddController` | Yeni muayene ekleme formunu açar; yazma yetkisini (`_has_permission('yazma')`) denetler. |
| **Detay Butonu** | `detailButton` (`saglik_muayene_listesi_page.ui`) | `saglik_muayene_list_controller.py:416-427` | `SaglikMuayeneDetailController` | Seçili muayenenin branş bulguları, imzalar ve evrak yolunu detaylı gösterir (çift tıklamayla da tetiklenir). |
| **Geçmiş Butonu** | `gecmisButton` (`saglik_muayene_listesi_page.ui`) | `saglik_muayene_list_controller.py:429-444` | `MuayeneGecmisiController` | Seçili personelin geçmiş tüm periyodik muayenelerini listeler. |
| **Sil Butonu** | `deleteButton` (`saglik_muayene_listesi_page.ui`) | `saglik_muayene_list_controller.py:493-525` | `delete_muayeneler` | Onay kutusu açar, silme yetkisi denetler, revizyon kütüğüne işler. |
| **Arama ve Canlı Filtreler**| `searchInput`, `muayeneTuruFilter`, `sonucFilter`, `durumFilter` | `saglik_muayene_list_controller.py:244-290` | `_build_muayene_filters` | Personel adı/TC, muayene türü, klinik sonuç ve muayene durumu (gecmis, yaklasiyor, normal) filtreleri. |
| **Uzmanlık Durumu İkonları**| `uzmanlik_durumlari_ui` | `saglik_muayene_list_controller.py:342-370` | `RADPYSUzmanlikDelegate` | Göz, Dahiliye ve Dermatoloji durumlarını renkli rozet ve detaylı tooltip ile tablo hücresinde görselleştirir. |
| **Otomatik Tarih Hesaplayıcı**| `sonrakiMuayeneTarihiInput` | `saglik_muayene_add_controller.py:887-928` | `calculate_next_exam_date` | Muayene türünün periyot ayına (6 veya 12 ay) göre artık yıl ve ay sonu sınırlarını dikkate alarak bir sonraki tarihi hesaplar. |
| **Üç Branş Hekim İmzaları** | `dahiliyeImzaCheck`, `dermatolojiImzaCheck`, `gozImzaCheck` | `saglik_muayene_add_controller.py:1123-1128` | `goz_imzalandi`, vb. | Hekim imza kutuları (0 veya 1) ve branş sonuç kutuları (`goz_sonuc`, `dahiliye_sonuc`, `dermatoloji_sonuc`). |
| **Şifreli Belge Arşivi** | `belgeBrowseButton`, `belgeViewButton` | `saglik_muayene_add_controller.py:929-955` | `DocumentService`, `personel_belgeler` | Belgeyi seçer, açar veya temizler; güvenli dosya kasasında `SAGLIK-{id}-{belge_id}` olarak AES-256 şifreler. |
| **Revizyon Denetim İzi** | `SaglikMuayeneRevizyonDialog` | `saglik_muayene_revizyon_dialog.py:20-71` | `saglik_muayene_revizyon_log` | Sağ tık ile muayenede yapılan her güncelleme ve silmenin tarih, kullanıcı ve eski verilerini listeler. |
| **Web Portalı Sağlık Paneli** | Web Portal: `SaglikDashboard.tsx` | `SaglikDashboard.tsx:40-200` | `dashboard.klinik.routes.ts` | KPI kartları, Branş Sonuç Dağılım Grafiği (BarChart), Muayene Yığılma Tahmini (BarChart) ve mobil sağlık karnesi. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Zorunlu Alan Eksikliği | `Hata` | `QMessageBox.warning: "Lütfen zorunlu alanları doldurunuz."` | `saglik_muayene_add_controller.py:597` |
| Branş Sonucu Seçilmedi | `Hata` | `QMessageBox.warning: "Lütfen en az bir geçerli muayene sonucu seçiniz."` | `saglik_muayene_add_controller.py:610` |
| Kayıt Seçilmedi Uyarısı | `Uyarı` | `QMessageBox.warning: "Lütfen bir muayene kaydı seçiniz."` | `saglik_muayene_list_controller.py:419` |
| Silme Yetkisi Yok | `Erişim Engellendi` | `QMessageBox.warning: "Muayene kaydı silme yetkiniz bulunmuyor."` | `saglik_muayene_list_controller.py:496` |
| Ekleme Yetkisi Yok | `Erişim Engellendi` | `QMessageBox.warning: "Yeni muayene kaydı ekleme yetkiniz bulunmuyor."` | `saglik_muayene_list_controller.py:407` |
| Silme Teyit Diyaloğu | `Onay` | `ask_confirm: "{personel_adi} adlı personelin {muayene_tarihi} tarihli muayene kaydını silmek istediğinizden emin misiniz?"` | `saglik_muayene_list_controller.py:509` |
| Tarih Sıralama Hatası | `Hata` | `SonucYonetici: "Sonraki muayene tarihi, muayene tarihinden once olamaz."` | `saglik_muayene_service.py:761` |

### 3. İzole Edilen Hayalet Bileşenler & Kullanıcı Kararları (2026-09-24)

- **Hayalet Bileşen Denetimi:** Modüldeki tüm kontroller (`addButton`, `detailButton`, `gecmisButton`, `deleteButton`, branş imza kutuları, belge butonları) backend servislerine, veritabanı şemasına ve revizyon kütüğüne eksiksiz bağlanmıştır. Modülde hiçbir kopuk **HAYALET BİLEŞEN** bulunmamaktadır.
- **Kullanıcı Kararı 1 (Muayene Türleri ve Periyot Aralıkları Standartı):** İşe Giriş (tek seferlik), Radyasyon Çalışanı (12 ay), Periyodik (12 ay) ve Şua Muayenesi (6 ay) standartları ve bu periyotlara göre `Sonraki Muayene Tarihi`nin otomatik hesaplanması teyit edilmiştir.
- **Kullanıcı Kararı 2 (Klinik Takip vs Heyet Raporu Ayrımı):** Bu modülün nihai bir heyet raporu alanı olmadığı, personelin rutin klinik muayenelerini takip ettiği teyit edilmiştir. Hekim tarafından "Uygun Değil" kanaati belirtilirse personelin ileri tetkik için sevk edileceği; personelin radyasyon alanında çalışamayacağı resmi Sağlık Kurulu (Heyet) Raporu ile kesinleşirse bu durumun Çalışma Kısıtları (Modül 07) modülüne heyet raporu şerhiyle işleneceği kararlaştırılmıştır.
- **Kullanıcı Kararı 3 (Üç Uzmanlık Branşı Protokolü):** Göz (lens biyomikroskopi), Dahiliye (periferik yayma/tiroid) ve Dermatoloji (radyodermatit) branşlarının bağımsız imza ve sonuç kontrolleri ile yürütüldüğü onaylanmıştır.
- **Kullanıcı Kararı 4 (30 Gün Yaklaşma Uyarısı ve Gecikme Rozetleri):** Kontrole 30 gün kala "YAKLAŞIYOR" (sarı), günü geçenlere "SÜRESİ DOLDU" (kırmızı) durum rozeti verilmesi ve filtrede bu kriterlere göre taranması onaylanmıştır.
- **Kullanıcı Kararı 5 (Şifreli Evrak Kasası ve Revizyon Denetim İzi):** Heyet evraklarının şifreli kasada saklanması ve tüm değişikliklerin `saglik_muayene_revizyon_log` tablosunda denetim izine mühürlenmesi kabul edilmiştir.
- **Kullanıcı Kararı 6 (Ekran Görüntüleri Arşivi):** Kılavuz sayfalarında `docs/help/assets/img/` klasöründeki mevcut `muayene_list.png` ve `muayene ekle.png` görsellerinin kullanılması onaylanmıştır.

---

## Modül 14: Ortam Dozu ve Kroki Haritası (14_ortam_dozu_ve_kroki_haritasi)

### 1. Kod Doğrulama & İzlenebilirlik Matrisi

| Arayüz Bileşeni (UI Label) | UI Nesne Adı / Dosya | Controller / Kod Satırı | DB Tablo / Model / Servis | İş Kuralı ve Açıklama |
|---|---|---|---|---|
| **Birim / Departman Seçici** | `comboDepartman` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:913-922, 1007-1009` | `departmanlar`, `get_aktif_departmanlar` | Seçilen birimin mimari krokisini, sabit cihazlarını ve ortam izleme noktalarını dinamik yükler. |
| **Ölçüm Kaydet Butonu** | `btnYeniOlcum` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:1884-1980` | `ortam_dozu_olcumleri`, `create_olcum` | Nokta, tarih, doz hızı, fon radyasyonu, cihaz ve personeli kaydeder; kalibrasyon kontrolü yapar. |
| **Yeni Nokta Ekle Butonu** | `btnYeniNokta` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:1493-1601` | `ortam_olcum_noktalari`, `create_nokta` | `{DEP}-OD-01` formatında otomatik ardışık kod üretir; NDK alan sınıfı eşiklerini atar. |
| **Kroki Yükle / Değiştir** | `btnKrokiYukle` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:1332-1406` | `departman_krokileri`, `krokiler`, `save_kroki` | PDF veya raster görsel dosyasını yükler, şifreli evrak kasasında depolar, departmanla eşleştirir. |
| **Karekod / Etiket Bas** | `btnAnaQrBas` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:1662-1697` | `OrtamDozuQrDialog` | Oda Kapı Karekod Etiketi (Tüm Oda) veya tekil nokta etiketi üretim menüsünü açar. |
| **SKS Excel Rapor Butonu** | `btnSksExcelExport` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:1999-2018` | `export_sks_denetim_raporu` | Kurum antetli, hücre renklendirmeli SKS 6.1 resmi denetim Excel raporu (`.xlsx`) üretir. |
| **Pinler Kilitli Butonu** | `btnPinKilitle` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:967-996` | `KrokiPinItem.set_locked` | Kazara kaymayı önlemek için pinleri kilitler; açıldığında "Taşıma Aktif" moduna geçer. |
| **Oda Alanını Belirle** | `btnOdaAlaniBelirle` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:1602-1641` | `save_departman_kroki_alani` | Fare ile çizilen dikdörtgen alanı birimin kroki üzerindeki zırhlı sınırları olarak kaydeder. |
| **İnteraktif Kroki Sahnesi**| `graphicsViewKroki` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:857-884` | `InteractiveKrokiScene` | Vektörel PDF/görsel render; imleç odaklı zoom, pan, sağ tık menüsü ve çift tıkla hızlı ölçüm. |
| **Ölçüm Geçmişi Tablosu** | `tblOlcumler` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:1263-1310` | `list_olcumler` | Doz ölçümlerini tabular Consolas fontuyla listeler; durum hücrelerini renklendirir. |
| **Noktalar Kataloğu** | `tblNoktalar` (`ortam_dozu_page.ui`) | `ortam_dozu_controller.py:1311-1327` | `list_noktalar` | Tanımlı noktaları listeler; çift tıklamayla doğrudan QR pasaport etiketini açar. |
| **Nokta Silme Engeli** | `_delete_nokta_by_id` | `ortam_dozu_controller.py:1855-1882` | `get_nokta_olcum_count` | Üzerinde kayıtlı ölçüm bulunan noktaların silinmesini kesinlikle engeller. |
| **Cihaz Kalibrasyon Kontrolü**| `create_olcum` | `ortam_dozu_service.py:740-751` | `cihaz_kalibrasyon_tarihi` | Cihazın sistemde kayıtlı kalibrasyon süresi dolmuşsa ölçüm kaydını reddeder (RED-02). |
| **Otomatik DÖF Entegrasyonu**| `create_olcum` | `ortam_dozu_service.py:842-872` | `OlayBildirimService.dof_olustur` | Limit aşımında otomatik Olay Bildirimi ve DÖF başlatır; 3 kat aşımda NDK zorunlu bayrağı koyar. |
| **Web Portalı Analitik Paneli**| Web Portal: `OrtamDozuDashboard.tsx` | `OrtamDozuDashboard.tsx:40-250` | `ortam_dozu.routes.ts` | Aylık doz trend grafikleri (Recharts LineChart), harita üzerinde dokunmatik pan ve mobil kapı QR okuma. |

### 2. QMessageBox ve Uyarı Doğrulama Tablosu

| Durum | Başlık | Mesaj İçeriği / Eylem | Kod Kaynağı |
|---|---|---|---|
| Kalibrasyonu Geçmiş Cihaz | `Hata` | `SonucYonetici.hata: "Kullanılan ölçüm cihazının kalibrasyon geçerlilik süresi dolmuştur... Kalibrasyonu geçmiş cihazla resmi ölçüm kaydedilemez."` | `ortam_dozu_service.py:746` |
| Ölçümü Olan Noktayı Silme | `Silme Engellendi` | `QMessageBox.warning: "Bu ölçüm noktasına ait X adet kayıtlı doz ölçümü bulunmaktadır. Kalite denetim ve doz takip mevzuatı gereği ölçüm geçmişi olan noktalar silinemez."` | `ortam_dozu_controller.py:1865` |
| Excel Dosyası Açık Hatası | `Hata` | `SonucYonetici.hata: "Hedef Excel dosyası şu anda başka bir programda açık olduğundan kaydedilemedi. Lütfen kapatıp tekrar deneyiniz."` | `ortam_dozu_service.py:1115` |
| Limit Aşımı Uyarısı | `Dikkat` | `Toast.show_toast (ERROR): "DİKKAT: Limit aşımı tespit edildi! Otomatik Radyasyon Güvenliği Olayı ve DÖF süreci başlatıldı."` | `ortam_dozu_controller.py:1973` |
| Kroki Silme Onayı | `Birim Krokisini Sil` | `ask_confirm: "Birim krokisini silmek istediğinize emin misiniz?"` | `ortam_dozu_controller.py:1412` |
| Ölçüm Silme Onayı | `Ölçüm Kaydını Sil` | `ask_confirm: "Bu ölçüm kaydını silmek istediğinize emin misiniz?"` | `ortam_dozu_controller.py:1989` |
| Nokta Silme Onayı | `Ölçüm Noktasını Sil` | `ask_confirm: "Bu ölçüm noktasını silmek istediğinize emin misiniz?"` | `ortam_dozu_controller.py:1870` |

### 3. İzole Edilen Hayalet Bileşenler & Kullanıcı Kararları (2026-09-24)

- **Hayalet Bileşen Denetimi:** Modüldeki tüm butonlar (`btnYeniOlcum`, `btnYeniNokta`, `btnKrokiYukle`, `btnAnaQrBas`, `btnSksExcelExport`, `btnYenile`, `btnPinKilitle`, `btnOdaAlaniBelirle`, `btnZoomFit`, `btnKrokiSil`, `btnOlcumSil`, `btnNoktaQr`, `btnNoktaDuzenle`, `btnNoktaSil`) controller slotlarına ve backend servislerine eksiksiz bağlanmıştır. Modülde hiçbir kopuk **HAYALET BİLEŞEN** bulunmamaktadır.
- **Kullanıcı Kararı 1 (NDK Alan Sınıfları ve Doz Eşikleri):** Denetimli Alan ($2.50\ / 10.00\ \mu\text{Sv/h}$), Gözetimli Alan ($1.00\ / 2.50\ \mu\text{Sv/h}$) ve Halka Açık Alan ($0.25\ / 0.50\ \mu\text{Sv/h}$) standart eşik değerleri mevzuat uyarınca teyit edilmiştir.
- **Kullanıcı Kararı 2 (Cihaz Kalibrasyon Süresi Kuralı):** Kalibrasyon kontrolünde sabit bir periyot yerine kullanılan cihaza göre sistemde kayıtlı kalibrasyon süresinin esas alınacağı onaylanmıştır.
- **Kullanıcı Kararı 3 (Limit Aşımında Otomatik Olay ve DÖF):** Yasal limit aşıldığında sistemin otomatik Radyasyon Güvenliği Olay Bildirimi oluşturması ve sorumlu personele DÖF ataması kararı onaylanmıştır.
- **Kullanıcı Kararı 4 (Oda Kapı QR Pasaportu ve Saha Veri Girişi Protokolü):** QR pasaport etiketlerinin öncelikle radyasyon odalarının giriş kapılarına yapıştırılacağı; saha personelinin tablet veya cep telefonu kamerasıyla kapıdaki QR kodu okutarak odaya ait kayıtlı noktaları listeleyeceği ve doğrudan sahadan hızlı doz girişi yapacağı onaylanmıştır.

---

## Modül 15: Olay Bildirimi ve DÖF (CAPA) (15_olay_bildirimi_ve_dof_capa)

### 1. İzlenebilirlik Matrisi

| Kod / UI Bileşeni | Controller Yöntemi | Servis / DB Fonksiyonu | Veritabanı Tablosu / Alanı | Kılavuz Karşılığı |
|---|---|---|---|---|
| `tableOlaylar` | `_load_olaylar`, `_apply_filters` | `OlayBildirimService.list_bildirimler` | `olay_bildirimler` | Bölüm 15.3.A |
| `txtArama` | `_apply_filters` | Client-side filter | Tablo süzme | Bölüm 15.3.A |
| `cmbFiltreKategori` | `_apply_filters` | `list_olay_lookups('kategori')` | `olay_lookup (tip='kategori')` | Bölüm 15.3.A |
| `cmbFiltreDurum` | `_apply_filters` | Client-side filter | `olay_bildirimler.durum` | Bölüm 15.3.A |
| `btnExcelAktar` | `_on_excel_aktar` | CSV writer (utf-8-sig) | Dışa aktarma | Bölüm 15.3.A |
| `btnRaporMerkezi` | `_on_rapor_merkezinde_ac` | `open_in_report_center` | `olay_bildirim_trend` | Bölüm 15.3.A |
| `stepProgress` / `stackedWidget` | `_update_wizard_buttons`, `_go_next`, `_go_back` | 3 adımlı sihirbaz | Adım navigasyonu | Bölüm 15.3.B |
| `dtOlayTarihi` | `_on_bildir_clicked` | `olay_bildir` | `olay_bildirimler.olay_tarihi` | Bölüm 15.3.B |
| `cmbBirim` / `chkBirimSerbest` | `_on_birim_serbest_toggled` | `lookup_service.list_departments` | `olay_bildirimler.birim_id / birim_serbest` | Bölüm 15.3.B |
| `cmbPersonel` / `chkAnonim` | `_on_anonim_toggled` | `personel_service.list_active_personel` | `olay_bildirimler.bildiren_personel_id` | Bölüm 15.3.B |
| `cmbGorev` | `_on_bildir_clicked` | Sabit unvan listesi | `olay_bildirimler.bildiren_gorev` | Bölüm 15.3.B |
| `cmbSonuc` | `_on_bildir_clicked` | Şiddet listesi (Ramak Kala..Ciddi) | `olay_bildirimler.olay_sonucu` | Bölüm 15.3.B |
| `chkGeriBildirim` / `txtGeriBildirimEposta` | `_on_geri_bildirim_toggled` | E-posta validasyonu | `olay_bildirimler.geri_bildirim_*` | Bölüm 15.3.B |
| `cmbKategori` / `detaylarLayout` | `_on_kategori_changed` | `list_olay_lookups('detay')` | `olay_lookup`, `olay_bildirim_secimler` | Bölüm 15.3.B |
| `kokNedenlerLayout` | `_load_initial_data` | `list_olay_lookups('kok_neden')` | `olay_lookup`, `olay_bildirim_secimler` | Bölüm 15.3.B |
| `txtOlayTanimi` | `_on_bildir_clicked` | Zorunlu metin kontrolü | `olay_bildirimler.olay_tanimi` | Bölüm 15.3.B |
| `txtAcilMudahale` | `_on_bildir_clicked` | Serbest metin | `olay_bildirimler.acil_mudahale` | Bölüm 15.3.B |
| `txtDofOnerisi` | `_on_bildir_clicked` | Serbest metin | `olay_bildirimler.dof_onerisi` | Bölüm 15.3.B |
| `btnOlayBildir` | `_on_bildir_clicked` | `OlayBildirimService.olay_bildir` | `olay_bildirimler` (INSERT) | Bölüm 15.3.B |
| NDK Süreç Takip Motoru | `compute_ndk_status` | `_add_business_days` (1 veya 3 gün) | `olay_bildirimler.ndk_*` | Bölüm 15.3.C |
| `btnNdkBildir` | `_on_ndk_bildir_clicked` | `OlayBildirimService.ndk_durum_guncelle` | `olay_bildirimler.ndk_bildirim_tarihi` | Bölüm 15.3.C |
| `btnOlayIncele` / Çift Tıklama | `_open_inceleme_dialog` | `OlayIncelemeDialog.exec` | Diyalog açılışı | Bölüm 15.3.D |
| `btnIncelemeyeAl` | `_on_incelemeye_al` | `OlayBildirimService.durum_guncelle` | `olay_bildirimler.durum = 'İncelemede'` | Bölüm 15.3.D |
| `cmbAtananPersonel` | `_populate_atanan_personel_combo` | `get_yetkili_sorumlular` | Kategori Sorumlusu + RGS/RSO Havuzu | Bölüm 15.3.D |
| `btnDofYonetimi` / `btnHizliDof` | `_on_dof_yonetimi_clicked` | `OlayDofDialog.exec` | `olay_dof_takip` | Bölüm 15.3.E |
| `btnDofEkle` | `_on_dof_ekle_clicked` | `OlayBildirimService.dof_olustur` | `olay_dof_takip` (INSERT) | Bölüm 15.3.E |
| `btnDofTamamla` | `_on_dof_tamamla_clicked` | `OlayBildirimService.dof_durum_guncelle` | `olay_dof_takip.durum = 'Tamamlandı'` | Bölüm 15.3.E |
| `btnOlayKapat` | `_on_olay_kapat` | Açık DÖF kilidi & `durum_guncelle` | `olay_bildirimler.durum = 'Kapalı'` | Bölüm 15.3.F |
| `btnTarihce` | `_on_tarihce_clicked` | `OlayTarihceDialog.exec` | `olay_bildirim_gecmisi` | Bölüm 15.3.D |
| `btnYazdir` | `_on_yazdir_clicked` | Resmi HTML/PDF Tutanak derleyici | Tutanak baskısı | Bölüm 15.3.H |
| Cihaz Süreç Entegrasyonu | Backend Service | `olaydan_ariza_kaydi_olustur` | `cihaz_arizalar`, `olay_dof_takip` | Bölüm 15.3.G |

---

### 2. Hata ve Uyarı Mesajları Çözümleme Tablosu

| Hata / Uyarı Mesajı | Tetikleyen Durum | Çözüm Adımı |
|---|---|---|
| *"Lütfen olay tanımı / detaylı açıklama alanını doldurunuz."* | 3. adımda olay tanımı boş bırakıldığında. | Olayın nasıl gerçekleştiğini açıklayan metni yazın. |
| *"Lütfen olay kategorisi seçiniz."* | 2. adımda kategori belirlenmediğinde. | Olayın türüne uygun ana kategoriyi açılır kutudan seçin. |
| *"Lütfen diğer birim adını yazın."* | [x] Diğer birim seçilip metin kutusu boş bırakıldığında. | Olayın gerçekleştiği mahal/oda adını yazın. |
| *"Anonim bildirim yapmıyorsanız lütfen bildiren personeli seçiniz."* | Anonim kutusu işaretlenmeden personel seçilmediğinde. | Adınızı seçin veya kimliğinizi gizlemek için Anonim kutusunu işaretleyin. |
| *"Geri bildirim istendiğinde e-posta adresi zorunludur."* | [x] Geri bildirim seçilip e-posta yazılmadığında. | Geçerli bir kurumsal veya şahsi e-posta adresi girin. |
| *"Lütfen 'Diğer' seçeneği için açıklama giriniz."* | Alt detay listesindeki "Diğer" seçeneği işaretlenip açıklama yazılmadığında. | Diğer kutucuğunun yanındaki metin kutusuna açıklamayı yazın. |
| *"Bu olaya bağlı X adet henüz tamamlanmamış DÖF faaliyeti bulunmaktadır. Olayı kapatmadan önce lütfen tüm DÖF aksiyonlarını tamamlayınız."* | Açık DÖF varken olayı 'Kapalı' statüsüne alma girişimi. | Olayı kapatmadan önce ilgili DÖF'leri tamamlayın veya iptal edin. |
| *"Bildirim kapatılırken kapanış notu girilmesi zorunludur."* | Kapanış notu kutusu boş bırakıldığında. | Olayın nasıl sonuçlandırıldığına ve riskin giderilmesine dair not yazın. |
| *"Lütfen tarihi GG.AA.YYYY formatında giriniz (Örn: 19.09.2026)."* | NDK bildirim tarihi geçersiz formatta girildiğinde. | Tarihi gün.ay.yıl formatında yazın. |

---

### 3. Kullanıcı Kararları Kaydı

- **Kullanıcı Kararı 1 (NDK Yasal Bildirim Süreleri):** Acil kazalarda 1 iş günü (24 saat), diğer radyolojik olaylarda 3 iş günü (72 saat) yasal sürenin resmi iş günleri üzerinden (`_add_business_days`) hesaplanması onaylanmıştır.
- **Kullanıcı Kararı 2 (Açık DÖF Kapatma Emniyet Kilidi):** Devam eden açık DÖF faaliyeti varken olayın kapatılmasının sistem tarafından engellenmesi kuralı onaylanmıştır.
- **Kullanıcı Kararı 3 (Anonim Bildirim SKS Geçerliliği):** Personelin kimliğini gizleyerek yaptığı anonim bildirimlerin SKS kalite standartlarında geçerli kabul edildiği onaylanmıştır.
- **Kullanıcı Kararı 4 (Cihaz Arıza ve Süreç Takibi Sınırı):** Olay bildiriminden oluşturulan cihaz arıza takibinin yalnızca kurum içi süreçleri izlemek ve birim bazında istatistiki kalite bilgisi derlemek amaçlı olduğu, harici bakım-onarım birimine resmi çağrı/iş emri atmadığı onaylanmıştır.
- **Kullanıcı Kararı 5 (Yetkili Sorumlu Havuzu):** Atamalarda yalnızca Anabilim Dalı / Birim Kategori Sorumluları ve RGS/RSO personellerinin seçilebileceği, olayın gerçekleştiği birimin sorumlusunun en başta yıldızlı (`★`) olarak önerileceği onaylanmıştır.

---

## Modül 16: RGS / RSO Görevlendirme ve Sertifika Takibi (16_rgs_rso_gorevlendirme_ve_sertifika)

### 1. Kod-Arayüz Doğrulama Matrisi

| UI Bileşeni / İşlem | Controller Slot / Fonksiyon | Servis / İş Mantığı Metodu | Veritabanı Tablosu / Alanı | Kılavuz Referansı |
|---|---|---|---|---|
| `kpiCardAktifRgs` / `lblKpiAktifRgs` | `_update_kpis` | `RgsGorevlendirmeService.get_durum_ozeti` | `rgs_gorevlendirmeler.aktif = 1` | Bölüm 16.3.A |
| `kpiCardGecerli` / `lblKpiGecerli` | `_update_kpis` | `RgsGorevlendirmeService.get_durum_ozeti` | `sertifika_durum_kodu IN ('gecerli', 'suresiz')` | Bölüm 16.3.A |
| `kpiCardYaklasan` / `lblKpiYaklasan` | `_update_kpis` | `RgsGorevlendirmeService.get_durum_ozeti` | `sertifika_durum_kodu IN ('yaklasiyor_30', 'yaklasiyor_60')` | Bölüm 16.3.A |
| `kpiCardGecmis` / `lblKpiGecmis` | `_update_kpis` | `RgsGorevlendirmeService.get_durum_ozeti` | `sertifika_durum_kodu = 'gecmis'` | Bölüm 16.3.A |
| `searchInput` | `_apply_client_filter` | İstemci taraflı süzme motoru | Ad, Soyad, TC, Sertifika No, Departman | Bölüm 16.3.B |
| `comboGorevTipi` | `_load_data` | `RgsGorevlendirmeService.list_gorevlendirmeler` | `rgs_gorevlendirmeler.gorev_tipi` | Bölüm 16.3.B |
| `comboDurum` | `_load_data` | Bellek içi durum süzgeci | `sertifika_durum_kodu` | Bölüm 16.3.B |
| `comboAktif` | `_load_data` | `list_gorevlendirmeler(filters={'aktif': ...})` | `rgs_gorevlendirmeler.aktif` | Bölüm 16.3.B |
| `tableGorevlendirmeler` | `_populate_table` | `RADPYSStatusDelegate` | 5 seviyeli renk delegesi | Bölüm 16.3.A / 16.3.D |
| `btnAdd` (`[Yeni Görevlendirme]`) | `_on_add_clicked` | `RgsGorevlendirmeDialogController.exec` | Boş form modal açılışı | Bölüm 16.3.C |
| `btnEdit` (`[Düzenle]`) / Çift Tık | `_on_edit_clicked` | `_load_record` & diyalog açılışı | `rgs_gorevlendirmeler.id` | Bölüm 16.3.F |
| `btnDelete` (`[Sil]`) | `_on_delete_clicked` | `RgsGorevlendirmeService.delete_gorevlendirme` | `rgs_gorevlendirmeler` (DELETE) | Bölüm 16.3.F |
| `btnDownloadDoc` (`[Belgeyi Aç]`) | `_on_open_doc_clicked` | `DocumentService.get_document_bytes` | `personel_belgeler` (AES-256 Çözme) | Bölüm 16.3.E |
| `btnRefresh` (`[Yenile]`) | `_load_data` | `list_gorevlendirmeler` & `get_durum_ozeti` | Veri ve KPI yenileme | Bölüm 16.3.B |
| `btnExport` (`[Dışa Aktar]`) | `_on_export_clicked` | CSV Writer (UTF-8 BOM, noktalı virgül) | Tablo kayıtlarının dışa aktarımı | Bölüm 16.3.G |
| `comboPersonel` | `_setup_ui` / `_load_record` | `PersonelService.list_active_personel` | Düzenlemede kilitlenir | Bölüm 16.3.C / 16.3.F |
| `dateBaslangic` | `_on_save_clicked` | Tarih doğrulama ve biçimlendirme | `rgs_gorevlendirmeler.baslangic_tarihi` | Bölüm 16.3.C |
| `dateBitis` / `chkSuresizGorev` | Sinyal `chkSuresizGorev.toggled` | Süresiz seçildiğinde alan kilitlenir | `rgs_gorevlendirmeler.bitis_tarihi` (NULL) | Bölüm 16.3.C |
| `txtSertifikaNo` | `_on_save_clicked` | Normalizasyon | `rgs_gorevlendirmeler.sertifika_no` | Bölüm 16.3.C |
| `dateSertifikaGecerlilik` | Sinyal `chkSuresizSertifika.toggled` | Süresiz seçildiğinde alan kilitlenir | `rgs_gorevlendirmeler.sertifika_gecerlilik` | Bölüm 16.3.C |
| `btnUploadDoc` | `_on_upload_doc_clicked` | `QFileDialog` & dosya byte okuma | `DocumentService.save_document` | Bölüm 16.3.C / 16.3.E |
| `chkAktif` | `_on_save_clicked` | `_bool_to_int` | `rgs_gorevlendirmeler.aktif = 1 \| 0` | Bölüm 16.3.C |
| `txtNotlar` | `_on_save_clicked` | Normalizasyon | `rgs_gorevlendirmeler.notlar` | Bölüm 16.3.C |
| `btnKaydet` | `_on_save_clicked` | `create_gorevlendirme` / `update_gorevlendirme` | `rgs_gorevlendirmeler` (INSERT/UPDATE) | Bölüm 16.3.C / 16.3.F |

---

### 2. Hata ve Uyarı Mesajları Çözümleme Tablosu

| Hata / Uyarı Mesajı | Tetikleyen Durum | Çözüm Adımı |
|---|---|---|
| *"Lütfen bir personel seçiniz."* | Formda personel seçimi yapılmadığında. | Açılır kutudan görevlendirilecek personeli seçin. |
| *"Görev bitiş tarihi, başlangıç tarihinden önce olamaz."* | Görev bitiş tarihi başlangıç tarihinden önceki bir güne ayarlandığında. | Bitiş tarihini başlangıç tarihinden sonraki bir tarih olarak ayarlayın veya [x] Süresiz Görev seçin. |
| *"Lütfen düzenlemek için bir kayıt seçiniz."* | Tablodan kayıt seçilmeden [Düzenle] tıklandığında. | Düzenlemek istediğiniz personelin görevlendirme satırını seçin. |
| *"Lütfen silmek için bir kayıt seçiniz."* | Tablodan kayıt seçilmeden [Sil] tıklandığında. | Silmek istediğiniz görevlendirme satırını seçin. |
| *"Lütfen bir kayıt seçiniz."* | Tablodan seçim yapılmadan [Belgeyi Aç] tıklandığında. | İncelemek istediğiniz görevlendirme kaydını tablodan seçin. |
| *"Bu kayda ait eklenmiş bir evrak / sertifika bulunmuyor."* | Belgesi olmayan görevlendirme için [Belgeyi Aç] tıklandığında. | Kaydı [Düzenle] ile açıp [Dosya Seç] butonuyla resmi evrakı yükleyin. |
| *"Belge dosyası bulunamadı veya açılamadı."* | Evrak kasasında dosya bulunamadığında veya hasarlı olduğunda. | Belgeyi yeniden yükleyin veya sistem yöneticisine danışın. |
| *"Dışa aktarılacak kayıt bulunmuyor."* | Tablo tamamen boşken [Dışa Aktar] tıklandığında. | Filtreleri temizleyerek ekranda kayıt görünmesini sağlayın. |
| *"X personeline ait 'Y' görevlendirmesini silmek istediğinizden emin misiniz?"* | Silme işlemi öncesinde teyit modalı açıldığında. | İşlemi onaylayarak kaydı silin veya iptal edin. |

---

### 3. Kullanıcı Kararları Kaydı

- **Kullanıcı Kararı 1 (NDK Erken Uyarı Eşikleri):** NDK sertifikaları için bitişe 60 gün kala sarı uyarı (`Yaklaşıyor`), 30 gün kala turuncu kritik uyarı (`Kritik`) ve süresi geçtiğinde kırmızı alarm (`Süresi Doldu`) kademelerinin NDK vize prosedürlerine tam uygun olduğu onaylanmıştır.
- **Kullanıcı Kararı 2 (Aynı Anda Birden Fazla Aktif Görev):** Bir personelin farklı birimlerde veya farklı sorumluluklarda (örn. Nükleer Tıp için RGS, Radyoloji için RGS Yardımcısı) birden fazla aktif görevlendirmesinin bulunabilmesi kuralı onaylanmıştır.
- **Kullanıcı Kararı 3 (Süresiz Görev vs Süresiz Sertifika):** Kurum içi görevlendirmelerin süresiz olabileceği; süresiz sertifikanın ise yalnızca istisnai/özel durumlarda kullanılabileceği onaylanmıştır.
- **Kullanıcı Kararı 4 (Evrak Kasası Arşiv Güvenliği):** Görevlendirme kaydı silinse dahi personelin KVKK kasasındaki şifreli sertifika dosyasının (`personel_belgeler`) geçmiş denetim izi ve yasal arşiv koruma amacıyla silinmeyip saklanması kuralı onaylanmıştır.
- **Kullanıcı Kararı 5 (Düzenlemede Personel Değiştirme Kısıtı):** Düzenleme modunda personel seçiminin kilitli tutulması; görevin başka bir personele devrinde eski kaydın pasife alınıp yeni personel için yeni kayıt açılması kuralı onaylanmıştır.

---

## Modül 17: Hizmet İçi Eğitim ve Online Sınav Yönetimi (17_hizmet_ici_egitim_ve_online_sinav)

### 1. Kod-Arayüz Doğrulama Matrisi

| UI Bileşeni / İşlem | Controller Slot / Fonksiyon | Servis / İş Mantığı Metodu | Veritabanı Tablosu / Alanı | Kılavuz Referansı |
|---|---|---|---|---|
| `lblKpiUyumOrani` | `load_uyum_raporu` | `HizmetIciEgitimService.get_uyum_raporu` | `(Aktif + Süresiz) / Toplam * 100` | Bölüm 17.3.A |
| `lblKpiAktifEgitim` | `load_uyum_raporu` | `HizmetIciEgitimService.get_uyum_raporu` | `aktif_sayisi` | Bölüm 17.3.A |
| `lblKpiYaklasan` | `load_uyum_raporu` | `HizmetIciEgitimService.get_uyum_raporu` | `yaklasan_sayisi` (Kalan ≤ 15 gün) | Bölüm 17.3.A |
| `lblKpiDolan` | `load_uyum_raporu` | `HizmetIciEgitimService.get_uyum_raporu` | `dolan_sayisi` | Bölüm 17.3.A |
| `lblKpiHicAlinmamis` | `load_uyum_raporu` | `HizmetIciEgitimService.get_uyum_raporu` | `hic_alinmamis_sayisi` | Bölüm 17.3.A |
| `tblUyumMatrisi` | `load_uyum_raporu` | `get_uyum_raporu` (Cross Join) | `personel_hizmet_ici_egitim`, `egitim_katalogu` | Bölüm 17.3.B |
| `btnUyumFiltrele` | `load_uyum_raporu` | Filtreli `get_uyum_raporu` sorgusu | Departman, Eğitim, Durum süzgeci | Bölüm 17.3.B |
| `btnUyumExcel` | `_export_uyum_excel` | `openpyxl` Workbook Export | Tüm uyum satırlarının Excel çıktısı | Bölüm 17.3.B |
| `comboAtamaBirimFilter` | `load_personel_secim_listesi` | `get_atama_personel_listesi` | `personeller.departman_id` | Bölüm 17.3.C |
| `comboAtamaHizmetFilter` | `load_personel_secim_listesi` | `get_atama_personel_listesi` | `unvanlar.hizmet_tipi` | Bölüm 17.3.C |
| `btnTumunuSec` / `btnSecimiTemizle` | `_sec_tum_personel` / `_temizle` | `tblPersonelSecim` checkbox iterasyonu | `Qt.CheckState` | Bölüm 17.3.C |
| `btnTopluAta` | `_on_toplu_ata_clicked` | `HizmetIciEgitimService.toplu_atama_yap` | `egitim_atamalari` (Toplu INSERT) | Bölüm 17.3.C |
| `tblMevcutAtamalar` | `load_atamalar` | `HizmetIciEgitimService.list_tum_atamalar` | `egitim_atamalari` | Bölüm 17.3.C |
| `btnAtamaIptalEt` | `_on_atama_iptal_clicked` | `HizmetIciEgitimService.iptal_et_atama` | `egitim_atamalari.durum = 'İptal'` | Bölüm 17.3.C |
| `tblKatalog` | `load_katalog` | `HizmetIciEgitimService.list_katalog` | `egitim_katalogu` | Bölüm 17.3.D |
| `btnKatalogYeni` | `_temizle_katalog_formu` | Form girdilerini sıfırlama | Bellek içi form durumu | Bölüm 17.3.D |
| `btnKatalogKaydet` | `_on_katalog_kaydet_clicked` | `add_katalog` / `update_katalog` | `egitim_katalogu` (INSERT/UPDATE) | Bölüm 17.3.D |
| `btnKatalogDosyaSec` | `_on_katalog_dosya_sec_clicked` | `QFileDialog.getOpenFileName` | PDF, Word, MP4 dosya yolu | Bölüm 17.3.D |
| `btnKatalogDokumanAc` | `_on_katalog_dokuman_ac_clicked`| `os.startfile` / `QDesktopServices` | Yerel işletim sistemi dosya açılışı | Bölüm 17.3.D |
| `tblSorular` | `load_sorular` | `HizmetIciEgitimService.list_sorular` | `soru_bankasi`, `egitim_sinav_sorulari` | Bölüm 17.3.E |
| `btnSoruYeni` | `_temizle_soru_formu` | Soru formu sıfırlama | Bellek içi form durumu | Bölüm 17.3.E |
| `btnSoruKaydet` | `_on_soru_kaydet_clicked` | `add_soru` / `update_soru` | `soru_bankasi` (INSERT/UPDATE) | Bölüm 17.3.E |
| `btnSoruResimSec` / Şık Resimleri | Resim seçim slotları | Dosya kopyalama & yol kaydı | `data/uploads/egitimler/soru_resimleri/` | Bölüm 17.3.E |
| `btnSoruSablonIndir` | `_on_soru_sablon_indir_clicked` | `HizmetIciEgitimService.export_soru_sablonu` | Excel şablon üretimi | Bölüm 17.3.E |
| `btnSoruExcelImport` | `_on_soru_excel_import_clicked` | `import_sorular_from_file` & Progress | Toplu soru yükleme motoru | Bölüm 17.3.E |
| `btnSoruKopyala` | `_on_soru_kopyala_clicked` | `copy_sorular_between_egitimler` | `egitim_sinav_sorulari` (Kopyalama) | Bölüm 17.3.E |
| `HizmetIciSinavDialog` | `_on_sinavi_bitir_clicked` | `HizmetIciEgitimService.evaluate_sinav` | `personel_hizmet_ici_egitim` (Tescil) | Bölüm 17.3.F |

---

### 2. Hata ve Uyarı Mesajları Çözümleme Tablosu

| Hata / Uyarı Mesajı | Tetikleyen Durum | Çözüm Adımı |
|---|---|---|
| *"Lütfen atanacak eğitimi seçiniz."* | Toplu atamada eğitim başlığı seçilmediğinde. | Açılır kutudan personele atanacak eğitim başlığını seçin. |
| *"Lütfen listeden en az bir personel seçiniz."* | Personel seçim tablosunda hiçbir çalışan işaretlenmediğinde. | Tablodan personelleri işaretleyin veya [Tümünü Seç] butonunu kullanın. |
| *"Lütfen iptal edilecek atama satırını seçiniz."* | Atama iptali için tablodan satır seçilmediğinde. | Mevcut atamalar listesinden iptal edilecek görevi seçin. |
| *"Lütfen eğitim adını giriniz."* | Eğitim kataloğu formunda ad alanı boş bırakıldığında. | Eğitimin resmi adını yazın. |
| *"Bu eğitime ait henüz aktif sınav sorusu bulunmamaktadır."* | Sorusu olmayan eğitim için sınav başlatılmak istendiğinde. | Soru Havuzu sekmesinden eğitime soru ekleyin veya Excel'den aktarın. |
| *"X adet soruyu boş bıraktınız. Sınavı bu şekilde tamamlamak istiyor musunuz?"* | Sınavda boş bırakılan sorular varken sınav bitirilmek istendiğinde. | Boş soruları tamamlamak için 'Hayır'ı seçin veya bu haliyle göndermek için 'Evet'i tıklayın. |
| *"Sınav puanınız: %X. Baraj puanı (%Y) sağlanamadı."* | Sınav puanı katalogdaki baraj puanının altında kaldığında. | Eğitim materyalini tekrar inceleyip sınavı yeniden başlatın (sınırsız hak). |
| *"Dışa aktarılacak kayıt bulunamadı."* | Uyum matrisi boşken [Excel Raporu] tıklandığında. | Filtreleri temizleyerek ekranda kayıt belirmesini sağlayın. |
| *"Kopyalanabilecek başka bir eğitim bulunamadı."* | Soru kopyalama sırasında sistemde başka eğitim olmadığında. | Önce diğer eğitimlerin sorularını tanımlayın. |

---

### 3. Kullanıcı Kararları Kaydı

- **Kullanıcı Kararı 1 (15 Günlük Erken Uyarı Eşiği):** Yıllık zorunlu eğitimlerde geçerlilik bitimine 15 gün ve daha az kala sarı uyarı (`Süresi Yaklaşıyor`) üretilmesi ve otomatik sistem bildiriminin tetiklenmesi onaylanmıştır.
- **Kullanıcı Kararı 2 (Sınav Barajı ve Sınırsız Tekrar Hakkı):** Sınavlarda varsayılan baraj puanının %70 olduğu; barajı aşamayan çalışanların bekleme süresi veya deneme kısıtı olmaksızın sınırsız tekrar sınav hakkına sahip olduğu onaylanmıştır.
- **Kullanıcı Kararı 3 (Otomatik Tescil ve Onay):** Sınavı başarıyla tamamlayan personelin eğitiminin harici bir komisyon onayı beklemeksizin anında `Onaylandı` olarak veritabanına tescil edilmesi onaylanmıştır.
- **Kullanıcı Kararı 4 ("Hiç Alınmamış" Durumu Kırmızı Bayrak Kuralı):** Kuruma yeni başlayan veya zorunlu eğitimi henüz almamış personellerin Uyum Matrisinde mor renkli `Hiç Alınmamış` olarak işaretlenmesi ve kurum uyum oranını düşürerek denetim uyarısı üretmesi onaylanmıştır.
- **Kullanıcı Kararı 5 (Materyal İnceleme ile Tamamlama):** Sınavı aktif olmayan doküman/video eğitimlerinde personelin materyali inceleyip onaylamasıyla eğitimin doğrudan tamamlanması kuralı onaylanmıştır.

---

## Modül 18: Tıbbi Cihaz ve NDK Lisans Envanteri (`18_tibbi_cihaz_ve_ndk_lisans_envanteri`)

- **Denetim Tarihi:** 2026-09-24
- **Doğrulayan Ajan:** Antigravity (radpys-manual-sync)
- **Kapsam Seviyesi:** Tier 2 (Operasyonel İş Akışı & Regülasyon Doğrulaması)

### 1. Kod-Arayüz Doğrulama Matrisi

| UI Bileşeni / İşlem | Controller Slot / Fonksiyon | Servis / İş Mantığı Metodu | Veritabanı Tablosu / Alanı | Kılavuz Referansı |
|---|---|---|---|---|
| `txtArama` | `_search_timer.timeout` | `CihazService.list_cihazlar` | `cihazlar.cihaz_kodu`, `marka`, `seri_no`, `cl.lisans_no` | Bölüm 18.3 |
| `cmbKaynakGrubu` / `radXray` | `_on_radio_changed` / `_load_data` | `CihazRepository.list_cihazlar` | `cihazlar.kaynak_grubu` (XRAY, RADSIZ, MED, OLCUM) | Bölüm 18.3 |
| `cmbBirim` | `_load_data` | `LookupRepository.list_cihaz_birimleri` | `cihazlar.departman_id` | Bölüm 18.3 |
| `cmbLisansDurumu` | `_load_data` | `cihaz_lisanslari.lisans_durumu` filtresi | `cihaz_lisanslari.lisans_durumu` | Bölüm 18.3 |
| `cmbCihazDurumu` | `_load_data` | `cihazlar.durum` filtresi | `cihazlar.durum` (Aktif, Arizali, Bakimda, HEK) | Bölüm 18.3 |
| `btnYeniCihaz` | `_on_yeni_cihaz` | `CihazEkleDuzenleController(cihaz_id=None)` | `cihazlar` (INSERT) | Bölüm 18.4 (Adım 1) |
| `btnDuzenle` / Çift Tıklama | `_on_duzenle_selected` / `_on_duzenle_by_row` | `CihazEkleDuzenleController(cihaz_id)` | `cihazlar` (UPDATE) | Bölüm 18.4 (Adım 1) |
| `btnSil` | `_on_sil_selected` | `CihazService.archive_to_hek` | `cihazlar.durum = 'HEK'` | Bölüm 18.4 (Adım 6) |
| `btnExcelImport` | `_on_excel_import` | `CihazImportService.import_cihazlar_from_excel` | `cihazlar`, `cihaz_lisanslari`, `cihaz_bakim_garanti` | Bölüm 18.3 |
| `btnExcelExport` | `_on_excel_export` | `pandas.DataFrame.to_excel` | Tüm filtrelenmiş cihaz satırları | Bölüm 18.3 |
| `btnNdkCizelge` | `_on_ndk_cizelgesi` | `XRAY` filtreli NDK Resmi Tablo Üretimi | `cihaz_lisanslari`, `cihazlar`, `personeller` | Bölüm 18.3 |
| `btnQrEtiket` | `_on_qr_etiket` | `CihazQrDialog` | `http://<LAN_IP>:3000/?cihaz=<cihaz_kodu>` | Bölüm 18.4 (Adım 6) |
| `tblCihazlar` Lisans Rozeti | `_render_table` | `kalan_lisans_gunu` hesaplama | `CASE WHEN cl.bitis_tarihi IS NOT NULL THEN (cl.bitis_tarihi - CURRENT_DATE)` | Bölüm 18.3 |
| `tabInspector` (5 Sekme) | `_update_inspector` | `CihazService.get_cihaz_detay` | `cihazlar`, `cihaz_lisanslari`, `cihaz_bakim_garanti`, `cihaz_konumlari`, `cihaz_dokumanlari` | Bölüm 18.3 |
| `btnInspBelgeOnizle` | `_on_belge_onizle` | `DocumentServiceDB.get_file_bytes` | `stored_files` (AES-256 Fernet Çözme) | Bölüm 18.4 (Adım 5) |
| `btnInspBelgeIndir` | `_on_belge_indir` | Yerel diske şifresiz kaydetme | `QFileDialog.getSaveFileName` | Bölüm 18.4 (Adım 5) |
| `btnKodUret` | `_auto_generate_code` | `CihazKodGenerator.generate_kod` | `[KAYNAK]-[BIRIM]-[TUR]-[SIRA]` | Bölüm 18.4 (Adım 1) |
| `cmbRksPersonel` | `_init_combos` | RGS Sertifikalı Personel Listeleme | `personeller`, `cihaz_lisanslari.rks_personel_id` | Bölüm 18.4 (Adım 2) |
| `cmbKroki` / Kroki Sahnesi | `_load_selected_kroki_file` | `CihazKrokiScene` (QGraphicsView / PDF-Resim) | `krokiler`, `cihaz_konumlari` | Bölüm 18.4 (Adım 4) |
| `btnCihazPinKilitle` | `set_locked` | `CihazKrokiPinItem.set_locked` | `pin_item.is_locked` | Bölüm 18.4 (Adım 4) |
| `btnDokumanEkle` | `_on_dokuman_ekle` | `DocumentServiceDB.store_file` | `stored_files` (AES-256 Şifreleme) | Bölüm 18.4 (Adım 5) |
| `btnKaydet` | `_on_kaydet` | `CihazService.save_cihaz` (Master Transaction) | `cihazlar`, `cihaz_lisanslari`, `cihaz_bakim_garanti`, `cihaz_konumlari` | Bölüm 18.4 |
| `btnAktifeAl` | `_on_aktife_al` | `CihazService.reactivate_from_hek` | `cihazlar.durum = 'Aktif'` | Bölüm 18.4 (Adım 6) |
| `btnHurdaTutanagi` | `_on_hurda_tutanagi` | `docx.Document` Hurda Tutanağı Üretimi | Resmi Word (.docx) Tutanağı | Bölüm 18.4 (Adım 6) |

---

### 2. Hata ve Uyarı Mesajları Çözümleme Tablosu

| Hata / Uyarı Mesajı | Tetikleyen Durum | Çözüm Adımı |
|---|---|---|
| *"Cihaz Kodu ve Seri No alanları zorunludur."* | Cihaz kaydında kod veya seri no boş bırakıldığında. | Cihaz kodu ve üretici seri numarasını girin. |
| *"Lütfen önce bir dosya seçiniz."* | Doküman seçilmeden [Yükle] butonuna basıldığında. | [Dosya Seç] butonuyla kılavuz veya belgeyi seçin. |
| *"Lütfen doküman başlığını giriniz."* | Belge başlığı girilmeden yükleme yapılmak istendiğinde. | Doküman için açıklayıcı bir başlık yazın. |
| *"Lütfen önce tablodan bir cihaz seçin."* | Tablodan seçim yapılmadan [QR Etiket] veya düzenleme istendiğinde. | Tablodan işlem yapılacak cihazın satırına tıklayın. |
| *"Bu cihazı arşive (HEK) kaldırmak istediğinize emin misiniz?"* | [Sil / HEK] butonuna basıldığında onay modalı açıldığında. | Cihazı arşive kaldırmak için 'Evet'i tıklayın (fiziksel silme yapılmaz). |
| *"Lütfen aktife alınacak cihazı tablodan seçiniz."* | HEK arşivinde seçim yapılmadan [Tekrar Aktif Statüsüne Al] tıklandığında. | Tablodan aktif edilecek hurda cihazı seçin. |
| *"Dışa aktarılacak kayıt bulunamadı."* | Cihaz tablosu boşken [Excel Dışa Aktar] tıklandığında. | Filtreleri sıfırlayarak listede cihaz görünmesini sağlayın. |

---

### 3. Kullanıcı Kararları Kaydı


---

# BÖLÜM 19: CİHAZ ARIZA, BAKIM VE KALİTE KONTROL (QC) MODÜLÜ DENETİM İZİ

**Modül Kodu:** `19_cihaz_ariza_bakim_ve_kalite_kontrol_qc`  
**Yayınlanma Tarihi:** 2026-09-24  
**İlgili Sayfa:** `docs/help/19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html`  
**Keşif Dosyası:** `docs/kesif/19_cihaz_ariza_bakim_ve_kalite_kontrol_qc_kesif.md`  

### 1. UI Kontrol ve Kod Haritası

| UI Bileşeni / Kontrol | Controller / Slot | Servis & Model Metodu | Veritabanı / Şema Etkisi | Kılavuzdaki Karşılığı |
|---|---|---|---|---|
| `btnYeniAriza` | `_on_yeni_ariza` | `CihazService.report_ariza` | `cihaz_arizalar`, `cihazlar.durum = 'Arizali'` | Bölüm 19.3, 19.5 (Adım 1) |
| `get_next_ariza_code` | Servis içi üretim | `CihazRepository.get_next_ariza_code` | `cihaz_arizalar.ariza_kodu` (ARZ-YYYY-XXX) | Bölüm 19.3 |
| `btnArizaCoz` | `_on_ariza_coz` | `CihazService.resolve_ariza` | `cihaz_arizalar.durum = 'Tamamlandi'`, `cihazlar.durum = 'Aktif'` | Bölüm 19.3, 19.5 (Adım 2) |
| `chkTupDegisimi` / `txtYeniTupSeriNo` | `_on_coz` | `resolve_ariza` (Tüp Senkronizasyonu) | `cihazlar.guncel_tup_seri_no = yeni_tup` | Bölüm 19.3, 19.5 (Adım 2) |
| `lblKpiToplam`, `lblKpiAcik`, vb. | `_load_data` | `CihazService.get_ariza_kpi_summary` | `COUNT(*) FILTER (...)` | Bölüm 19.3 |
| `btnYeniQc` | `_on_yeni_qc` | `CihazService.add_qc_record` | `cihaz_kalite_kontrolleri` | Bölüm 19.3, 19.5 (Adım 3) |
| `spnGecerlilikAy` | `_on_tarih_changed` | `start.addMonths(months)` | `cihaz_kalite_kontrolleri.sonraki_kontrol` | Bölüm 19.3, 19.5 (Adım 3) |
| `btnRaporSec` | `_on_dosya_sec` | `DocumentServiceDB.store_file` | `stored_files` (AES-256 Şifreli PDF) | Bölüm 19.3, 19.5 (Adım 3) |
| `btnBelgeOnizle` | `_on_belge_onizle` | `DocumentServiceDB.get_file_bytes` | `%TEMP%/radpys_qc_<id>.pdf` ile deşifre açma | Bölüm 19.3 |
| `RED-UI-CIHAZ-01` | `_on_kaydet` | `CihazService.lock_cihaz_due_to_qc_failure` | `cihazlar.durum = 'Arizali'` | Bölüm 19.3, 19.5 (Adım 4) |
| `kalan_gun` rozetleri | `_render_table` | `(sonraki_kontrol - CURRENT_DATE)` | Yeşil (>30G), Sarı/Turuncu (≤30G), Kırmızı (<0G) | Bölüm 19.3 |
| `btnExcelExport` | `_on_excel_export` | `pandas.DataFrame.to_excel` | `RADPYS_Cihaz_Arizalari.xlsx`, `RADPYS_Cihaz_QC_Raporu.xlsx` | Bölüm 19.3 |

---

### 2. Hata ve Uyarı Mesajları Çözümleme Tablosu

| Hata / Uyarı Mesajı | Tetikleyen Durum | Çözüm Adımı |
|---|---|---|
| *"Lütfen bir cihaz seçiniz."* | Cihaz seçilmeden arıza veya QC kaydedilmek istendiğinde. | Açılır kutudan ilgili cihazı seçin. |
| *"Lütfen arıza tanımını giriniz."* | Arıza bildiriminde açıklama/hata kodu girilmediğinde. | Cihazın arıza belirtilerini ve hata kodunu yazın. |
| *"Lütfen yapılan teknik işlemi açıklayınız."* | Arıza çözüm formunda teknik müdahale alanı boş bırakıldığında. | Yapılan servis, tamir veya test işlemini açıklayın. |
| *"Bu arıza kaydı zaten çözümlenmiş ve kapatılmış."* | Durumu 'Tamamlandı' olan arızaya tekrar [Seçili Arızayı Çöz] basıldığında. | Kapatılmış arızalarda mükerrer işlem yapılamaz; sadece açık kayıtları seçin. |
| *"Lütfen tablodan bir QC kaydı seçiniz."* | Tablodan satır seçilmeden [Rapor Önizle (PDF)] butonuna tıklandığında. | İncelemek istediğiniz test satırına tıklayıp seçin. |
| *"Bu teste ait yüklenmiş PDF rapor bulunmuyor."* | PDF raporu yüklenmemiş bir QC kaydında önizleme istendiğinde. | İlgili teste ait PDF belge henüz sisteme yüklenmemiştir. |
| *"Güvenlik Uyarısı - Cihaz Kilitleme"* | QC sonucu 'Uygun Değil' seçildiğinde çıkan RED-UI-CIHAZ-01 diyaloğu. | Cihazı klinik karantinaya almak için 'Evet'i tıklayın. |

---

### 3. Kullanıcı Kararları Kaydı

- **Kullanıcı Kararı 1 (QC Yaklaşan Eşiği):** Kod seviyesinde uygulanan 30 günlük erken uyarı eşiği (`kalan <= 30`) hastane pratiği için yeterli görülmüş ve sarı/turuncu rozet uyarı penceresi olarak onaylanmıştır.
- **Kullanıcı Kararı 2 (Arıza Maliyet Hesabı Kapsam Dışı):** RADPYS sisteminde arıza ve bakım işlemlerinde finansal maliyet hesabı yapılmadığı; sistemin arıza duruş süresi, servis firması, yapılan işlem ve değişen parçaları teknik takip ve izleme amacıyla kayıt altına aldığı onaylanmıştır.
- **Kullanıcı Kararı 3 (QC Başarısızlığı Karantinası RED-UI-CIHAZ-01):** QC sonucu 'Uygun Değil' girildiğinde operatör onayı ve güvenlik protokolü uyarınca cihazın derhal 'Arızalı / Kullanım Dışı' statüsüne çekilerek kilitlenmesi onaylanmıştır.
- **Kullanıcı Kararı 4 (X-Işını Tüp Değişimi ve NDK Lisans Revizyonu):** Arıza müdahalesinde X-ışını tüpü değiştiğinde güncel tüp seri numarasının cihaz künyesine otomatik işlenmesi ve tüp değişiminin NDK vize revizyonunu zorunlu kıldığı için RKS birimine bildirim şerhinin kılavuza eklenmesi onaylanmıştır.
- **Kullanıcı Kararı 5 (QC Tablosundaki Belge Kolonu):** QC tablosundaki 9. kolonun boş kalması ve şifreli PDF raporlarının üst araç çubuğundaki `[Rapor Önizle (PDF)]` butonu üzerinden deşifre edilerek varsayılan okuyucuda açılması açıklanması onaylanmıştır.

---

# BÖLÜM 20: KORUYUCU EKİPMAN (RKE) VE DIN 6857 MUAYENE MODÜLÜ DENETİM İZİ

**Modül Kodu:** `20_rke_koruyucu_ekipman_ve_din6857`  
**Yayınlanma Tarihi:** 2026-09-24  
**İlgili Sayfa:** `docs/help/20_rke_koruyucu_ekipman_ve_din6857.html`  
**Keşif Dosyası:** `docs/kesif/20_rke_koruyucu_ekipman_ve_din6857_kesif.md`  

### 1. UI Kontrol ve Kod Haritası

| UI Bileşeni / Kontrol | Controller / Slot | Servis & Model Metodu | Veritabanı / Şema Etkisi | Kılavuzdaki Karşılığı |
|---|---|---|---|---|
| `btnYeniEkipman` | `_on_yeni_ekipman` | `RKEService.add_ekipman` | `rke_envanter` | Bölüm 20.3, 20.5 |
| `btnMuayene` | `_on_muayene_et` | `RKEMuayeneDialogController` | `rke_muayeneler` | Bölüm 20.3, 20.5 |
| `btnKrokiIsaretle` | `_on_kroki_ac` | `RKEKrokiIsaretlemeDialog` | `rke_muayeneler.kusur_krokisi` (JSON) | Bölüm 20.5, 20.6 |
| `btnTopluMuayene` | `_on_toplu_muayene` | `RKETopluMuayeneDialog` | Toplu `rke_muayeneler` INSERT | Bölüm 20.7 |
| `btnZimmetle` | `_on_zimmetle` | `RKEService.zimmetle_ekipman` | `rke_zimmet_gecmisi` | Bölüm 20.7 |
| `btnQREtiket` | `_on_qr_etiket` | `RKEQRDialogController` | QR Kod PNG & Yazdırma | Bölüm 20.8 |
| `btnExcel` | `_on_excel_aktar` | `RKEService.export_excel` | `SKS_RKE_Cizelgesi.xlsx` | Bölüm 20.3, 20.6 |

---

# BÖLÜM 21: MERKEZİ ONAYLAR VE RAPOR MERKEZİ MODÜLÜ DENETİM İZİ

**Modül Kodu:** `21_merkezi_onaylar_ve_rapor_merkezi`  
**Yayınlanma Tarihi:** 2026-09-24  
**İlgili Sayfa:** `docs/help/21_merkezi_onaylar_ve_rapor_merkezi.html`  
**Keşif Dosyası:** `docs/kesif/21_merkezi_onaylar_ve_rapor_merkezi_kesif.md`  

### 1. UI Kontrol ve Kod Haritası

| UI Bileşeni / Kontrol | Controller / Slot | Servis & Model Metodu | Veritabanı / Şema Etkisi | Kılavuzdaki Karşılığı |
|---|---|---|---|---|
| `btnTabIzin` / `izinTable` | `_switch_tab(0)`, `_load_izinler` | `IzinService.list_requests` | `personel_izinler` | Bölüm 21.3, 21.5 |
| `btnIzinApprove` | `_approve_izin` | `IzinService.approve_request` | `onay_durumu = 'Onaylandi'`, bakiye düşümü | Bölüm 21.3, 21.5 |
| `btnIzinReject` | `_reject_izin` | `IzinService.reject_request` | `onay_durumu = 'Reddedildi'`, zorunlu ret nedeni | Bölüm 21.3, 21.5 |
| `btnTabDevir` / `devirTable` | `_switch_tab(1)`, `_load_nobet_devirleri` | `NobetService.list_devirler` | `nobet_devirleri` | Bölüm 21.3, 21.5 |
| `btnDevirReview` | `_review_devir` | `NobetDevirDetayDialog` | İnteraktif devir inceleme | Bölüm 21.3, 21.5 |
| `btnDevirApprove` | `_approve_devir` | `NobetService.review_devir_talebi` | Çizelgede nöbetçi değişimi | Bölüm 21.3, 21.5 |
| `btnDevirReject` | `_reject_devir` | `NobetService.review_devir_talebi` | `onay_durumu = 'Reddedildi'` | Bölüm 21.3, 21.5 |
| `btnTabIstek` / `istekTable` | `_switch_tab(2)`, `_load_istekler` | `NobetService.list_personel_nobet_istekleri` | `personel_nobet_istekleri` | Bölüm 21.3, 21.5 |
| `btnTabPlanOnay` | `_switch_tab(3)`, `_load_plan_onaylari` | `NobetService.list_planlar` | `nobet_planlari` | Bölüm 21.3, 21.5 |
| `btnPlanApprove` | `_approve_plan` | `NobetService.set_plan_status` | `onay_durumu = 'Yayında'` | Bölüm 21.3, 21.5 |
| `btnPlanReject` | `_reject_plan` | `NobetService.set_plan_status` | `onay_durumu = 'Taslak'`, ret notu | Bölüm 21.3, 21.5 |
| `btnTabVeriOnay` | `_switch_tab(4)`, `_load_veri_onaylari` | `ApprovalService.list_pending_requests` | `degisiklik_talepleri` | Bölüm 21.3, 21.6 |
| `btnVeriReview` | `_review_veri` | `DiffDialog` & `SaglikMuayeneAddController` | Eski-Yeni fark analizi | Bölüm 21.6 |
| `btnVeriApprove` | `_approve_veri` | `ApprovalService.approve_request` | Hedef tablo güncellemesi & `stored_files` aktarımı | Bölüm 21.6 |
| `categoryTree` & `reportListWidget` | `_populate_categories`, `_on_category_selected` | `get_reports_by_category` | 17 resmi rapor tanımı | Bölüm 21.7 |
| `paramFormLayout` | `_build_param_form` | `ReportEngine` dinamik form motoru | Parametre alanları üretimi | Bölüm 21.7 |
| `cmbFormat` & `btnGenerate` | `_on_generate` | `ReportEngine.run` | Word (`docxtpl`), PDF veya Excel üretimi | Bölüm 21.7, 21.8 |
| `tabSablonAyarlari` | `_setup_template_tab` | `TemplatesController` | `{{LOGO_1}}`, `{{LOGO_2}}`, `{{BASLIK_1}}` | Bölüm 21.8 |

---

### 2. Kullanıcı Kararları Kaydı

- **Kullanıcı Kararı 1 (Ret Gerekçeleri & Bildirim Altyapısı):** Ret gerekçesi girildiğinde bilgilendirmenin şimdilik yalnızca web portal içi bildirim ekranı üzerinden sağlanacağı; SMS veya e-posta altyapısı bulunmadığından bu aşamada kılavuz kapsamı dışında bırakılması onaylanmıştır.
- **Kullanıcı Kararı 2 (Nöbet Planı Taslağa İade Akışı):** İdarenin nöbet planını "Taslağa Geri Gönder" işlemiyle taslağa çevirebildiği; kilitlerin ve bildirimlerin detaylı mimari tartışmasının sonraki fazlara bırakılarak kılavuzda sade aktarılması onaylanmıştır.
- **Kullanıcı Kararı 3 (Sağlık Muayenelerinde Hızlı Onay Yasağı):** Sağlık muayenesi kayıtlarında "Hızlı Onayla"nın engellenerek hekim doğrulama ekranının zorunlu kılınması ve çalışma kısıtları/RGS görevlendirmeleri için de yönetici inceleme kuralının uygulanması onaylanmıştır.
- **Kullanıcı Kararı 4 (Word Şablonlarında Çift Logo Esnekliği):** Kurum ayarlarında çift logo tanımlı değilse veya tek logo varsa rapor motorunun şablonu logoyu atlayarak hatasız üretmesi onaylanmıştır.
- **Kullanıcı Kararı 5 (Bekleyen Kuyruk Limitleri):** Kuyrukta bekleyen en son 500 kaydın çekildiği ve operasyonel aksama olmaması için amirlerin zamanında onay/ret vermesi gerektiği kılavuza eklenmiştir.
