# 02_kullanici_ve_rol_yonetimi — Teknik Keşif ve 5N1K Analiz Raporu

- **Modül Kodu ve Adı:** `02_kullanici_ve_rol_yonetimi` (Kullanıcı Hesapları, Sistem Rolleri, Modül Yetki Matrisi ve Güvenlik Doğrulaması)
- **Modül Karmaşıklık Seviyesi (Tier):** TIER 2 (Operasyonel İş Akışı, RBAC Yetki Matrisi & Güvenlik Doğrulaması)
- **Taranan Arayüz Dosyaları:**
  - `ui/pages/admin/user/kullanici_yonetim_main.ui` (Sekmeli Ana Taşıyıcı Pencere)
  - `ui/pages/admin/user/kullanici_yonetim_page.ui` (Kullanıcı Yönetim Listesi ve Eylemler)
  - `ui/pages/admin/user/kullanici_form_dialog.ui` (Kullanıcı Ekle/Düzenle Form Diyaloğu)
  - `ui/pages/admin/user/roller_page.ui` (Sistem Rolleri Listesi ve İşlemler Menüsü)
  - `ui/pages/admin/user/rol_ekle_dialog.ui` (Rol Ekle/Düzenle Form Diyaloğu)
  - `ui/pages/admin/user/role_copy_dialog.ui` (Rol Klonlama / Kopyalama Diyaloğu)
  - `ui/pages/admin/user/role_comparison_dialog.ui` (Roller Arası Yetki Karşılaştırma Diyaloğu)
  - `ui/pages/admin/user/role_users_dialog.ui` (Role Bağlı Kullanıcılar Listeleme Diyaloğu)
  - `ui/pages/admin/user/modul_yetkileri_page.ui` (Matris Yetki ve Kapsam Dağıtım Ekranı)
  - `ui/pages/admin/user/module_management_page.ui` (Sistem Modülleri Tanımlama ve Sıralama Diyaloğu)
  - `ui/pages/admin/system/sudo_dialog.ui` (Kritik İşlemler İçin Yönetici Şifre Teyidi - Sudo Mode)
- **Taranan Controller ve Servis Kodları:**
  - `ui/controllers/admin/user/user_management_main_controller.py` (Kullanıcı, Rol ve Yetki sekmelerinin RBAC erişim kontrolüyle entegrasyonu)
  - `ui/controllers/admin/user/users_controller.py` (Kullanıcı filtreleme, toplu aktif/pasif, hesap kilidi açma, context menu, Sudo korumalı silme)
  - `ui/controllers/admin/user/user_form_controller.py` (Kullanıcı hesabı oluşturma, inline doğrulama, personel bağlama, şifre politikası)
  - `ui/controllers/admin/user/roles_controller.py` (Rol CRUD, korumalı rol kalkanı, çoklu seçim, rol klonlama köprüsü)
  - `ui/controllers/admin/user/role_form_controller.py` (Rol tanımlama, admin kilitleri, onay_gerektirir ve kapsam belirleme)
  - `ui/controllers/admin/user/role_copy_dialog_controller.py` (Mevcut yetkilerle yeni rol türetme)
  - `ui/controllers/admin/user/role_comparison_controller.py` (İki rolün yetki ve kapsam farklarını semantik renkle görselleştirme)
  - `ui/controllers/admin/user/role_users_dialog_controller.py` (Role bağlı personelleri denetleme)
  - `ui/controllers/admin/user/permissions_controller.py` (Okuma-Yazma-Güncelleme-Silme bağımlılık motoru, Miras/Own/Dept/All kapsam radyoları, hazır şablonlar, canlı karşılaştırma)
  - `ui/controllers/admin/user/module_management_controller.py` (Sistem modüllerini yönetme)
  - `ui/controllers/admin/system/sudo_dialog_controller.py` (Kritik işlemlerde aktif kullanıcı parola teyidi)
  - `app/services/auth/user_service.py` & `app/infrastructure/db/repositories/user_repository.py`
  - `app/services/auth/role_service.py` & `app/infrastructure/db/repositories/role_repository.py`
  - `app/services/auth/permission_service.py` & `app/infrastructure/db/repositories/permission_repository.py`
  - `app/services/system/module_service.py`
- **Taranan DB Tabloları:**
  - `kullanicilar` (`id`, `kullanici_adi`, `ad_soyad`, `email`, `rol_id`, `personel_id`, `sifre_hash`, `aktif`, `yanlis_giris`, `kilitli_kadar`, `son_giris`, `sifre_degisim`, `ilk_giris`)
  - `roller` (`id`, `rol_adi`, `aciklama`, `aktif`, `onay_gerektirir`, `kapsam`, `olusturma_tarihi`)
  - `rol_modul_yetkileri` (`id`, `rol_id`, `modul_kodu`, `okuma`, `yazma`, `guncelleme`, `silme`, `kapsam`)
  - `moduller` (`id`, `modul_kodu`, `modul_adi`, `sira_no`, `aktif`, `aciklama`, `olusturma_tarihi`)
  - `kullanici_durum_gecmisi` (Aktif/pasif ve kilit açma denetim izi)
- **Analiz Tarihi:** 2026-09-23

---

## 1. Arayüz Mimarisi ve Bileşen Envanteri

### A. Ana Taşıyıcı Pencere (`kullanici_yonetim_main.ui` & `UserManagementMainController`)
- **Sekme Taşıyıcı (`tabWidget` - QTabWidget):**
  - **Sekme 1 (`tab`):** Kullanıcı İşlemleri (`ModuleCode.KULLANICI`).
  - **Sekme 2 (`tab_2`):** Sistem Rolleri (`ModuleCode.ROLLER`).
  - **Sekme 3 (`tab_3`):** Modül Yetkileri (`ModuleCode.YETKILER`).
- **Dinamik Sekme İzin Kilidi (`_apply_tab_permissions`):** Giriş yapan kullanıcının yetki matrisinde ilgili modül kodu yoksa sekme tamamen gizlenir (`setTabVisible(idx, False)`). Kullanıcı doğrudan yetkili olduğu ilk sekmeye yönlendirilir.

### B. Kullanıcı Yönetim Sekmesi (`kullanici_yonetim_page.ui` & `UsersController`)
- **Başlık (`titleLabel` - QLabel):** "Sistem Kullanıcıları".
- **Yeni Kullanıcı Butonu (`addButton` - QPushButton):** Yeni hesap tanımlama diyaloğunu açar.
- **Canlı Arama Kutusu (`searchInput` - QLineEdit):** Kullanıcı adı veya ad soyad alanında dinamik filtreleme (Debounce gecikmeli).
- **Durum Filtresi (`statusFilter` - QComboBox):** "Tüm Durumlar", "Aktif", "Pasif".
- **Rol Filtresi (`cmbroller` - QComboBox):** "Tüm Roller" ve sistemdeki tüm aktif roller.
- **Düzenle Butonu (`editButton` - QPushButton):** Yalnızca tek bir satır seçiliyken aktif olur.
- **Aktif/Pasif Toggle Butonu (`toggleActiveButton` - QPushButton):** Seçime göre metni dinamik değişir ("Pasif Yap", "Aktif Yap", "Seçili Pasif Yap", "Seçili Aktif Yap", "Seçili Durumu Değiştir").
- **Kilidi Kaldır Butonu (`unlockButton` - QPushButton):** Yalnızca başarısız giriş denemesi aşılmış (`yanlis_giris > 0`) veya zaman kilitli (`kilitli_kadar > now()`) tek bir kullanıcı seçildiğinde aktifleşir.
- **Tümünü Seç (`selectAllButton` - QPushButton):** Listedeki tüm kayıtları seçer.
- **Seçimi Temizle (`clearSelectionButton` - QPushButton):** Tablo seçimini sıfırlar.
- **Excel'e Aktar Butonu (`excelButton` - QPushButton):** Filtrelenmiş listeyi Excel tablosuna döker.
- **Kullanıcı Tablosu (`usersTable` - QTableWidget):** 6 sütunlu veri tablosu:
  - Sütun 0: Kullanıcı Adı
  - Sütun 1: Ad Soyad
  - Sütun 2: Email
  - Sütun 3: Rol
  - Sütun 4: Aktif ("Evet" / "Hayır")
  - Sütun 5: Son Giriş (Biçimlendirilmiş tarih)
  - *Not:* Çift tıklama ile doğrudan düzenleme açılır.
- **Kayıt Sayacı (`countLabel` - QLabel):** "Toplam: X kullanıcı".
- **Boş Durum Rozeti (`_empty_state_label`):** Filtre sonucunda eşleşme yoksa kurumsal boş durum uyarısı gösterilir.

### C. Kullanıcı Ekle/Düzenle Diyaloğu (`kullanici_form_dialog.ui` & `UserFormController`)
- **Kullanıcı Adı (`usernameInput` - QLineEdit):** Zorunlu, 3-64 karakter, küçük harfe normalize edilir.
- **Ad Soyad (`adSoyadInput` - QLineEdit):** Personel adı ve soyadı (Türkçe baş harf büyütme).
- **E-posta (`emailInput` - QLineEdit):** Standart regex denetimli e-posta kutusu.
- **Rol Seçimi (`rolComboBox` - QComboBox):** Sistemdeki aktif roller listesi (Zorunlu).
- **Şifre Kutusu (`sifreInput` - QLineEdit):** Maskeli şifre. Yeni kullanıcıda zorunlu (min. 8 karakter), düzenlemede boş bırakılırsa eski şifre korunur.
- **Şifre Onayı (`sifreOnayInput` - QLineEdit):** Maskeli doğrulama alanı.
- **Personel Bağlantısı (`personelComboBox` - QComboBox):** Kullanıcıyı bir personele bağlama açılır kutusu ("Baglama" seçeneği ve otomatik tamamlama filtresi mevcuttur).
- **Aktiflik Onayı (`aktifCheckBox` - QCheckBox):** Hesabın aktif/pasif durumu.
- **Kaydet Butonu (`saveButton` - QPushButton) & İptal Butonu (`cancelButton` - QPushButton):** Form doğrulama ve kaydetme aksiyonu (Hata anında pencere sallanır - shake animasyonu).

### D. Sistem Rolleri Sekmesi (`roller_page.ui` & `RolesController`)
- **Yeni Rol Ekle Butonu (`addButton` - QPushButton):** Rol tanımlama diyaloğunu açar.
- **Arama Kutusu (`searchInput` - QLineEdit):** Rol adı ve açıklamasında arama.
- **Düzenle Butonu (`editButton` - QPushButton):** Seçili rolün formunu açar.
- **Aktif/Pasif Butonu (`toggleActiveButton` - QPushButton):** Seçili rolün durumunu değiştirir.
- **Sil Butonu (`deleteButton` - QPushButton):** Rolü siler (Bağlı kullanıcı varsa engellenir; Admin silinemez).
- **İşlemler Menüsü (`moreButton` - QPushButton & QMenu):**
  - `Seçileni Kopyala` (`actionCopy`): Seçili rolün yetkilerini kopyalayarak yeni rol türetir.
  - `Tümünü Seç` (`actionSelectAll`) & `Seçimi Temizle` (`actionClearSelection`).
  - `Seçili Aktif Yap` (`actionBulkActivate`) & `Seçili Pasif Yap` (`actionBulkDeactivate`).
  - `Excel'e Aktar` (`actionExcel`) & `İçe Aktar` (`actionImport`).
- **Roller Tablosu (`rollersTable` - QTableWidget):** 4 sütun: Rol Adı, Açıklama, Aktif, Oluşturma Tarihi.
- **Sağ Tık Bağlam Menüsü (Context Menu):** "Düzenle", "Aktif/Pasif Yap", "Rolü Kopyala", "Sil/Pasife Al", "Kullanıcıları Göster" (`RoleUsersDialogController`) ve "Yetkileri Aç" (`PermissionsController`).

### E. Rol Ekle/Düzenle Diyaloğu (`rol_ekle_dialog.ui` & `RoleFormController`)
- **Rol Adı (`rolAdiInput` - QLineEdit):** Zorunlu, 2-80 karakter. "Admin" rolü düzenlenirken bu kutu devre dışı bırakılır (`setEnabled(False)`).
- **Açıklama (`aciklamaInput` - QPlainTextEdit):** Rolün kurumsal görevi.
- **Kapsam (`kapsamComboBox` - QComboBox):** Rolün varsayılan veri erişim sınırı:
  - `Sadece Kendisi (own)`: Personel yalnızca kendi kayıtlarını görür/yönetir.
  - `Kendi Departmanı (department)`: Personel kendi birimindeki kayıtları görür/yönetir.
  - `Tümü (all)`: Tüm kurum verilerine erişim sağlar.
- **Onay Gerektirir (`onayGerektirirCheckBox` - QCheckBox):** İşaretliyse bu role sahip personelin yaptığı kritik işlemler (izin, nöbet, veri silme vb.) amir onay kuyruğuna yönlendirilir.
- **Aktiflik Durumu (`aktifCheckBox` - QCheckBox):** "Admin" rolünde kilitlidir (`setEnabled(False)`).

### F. Rol Kopyalama Diyaloğu (`role_copy_dialog.ui` & `RoleCopyDialogController`)
- **Bilgi Etiketi (`infoLabel`):** "Kaynak rol: [Rol Adı]".
- **Yeni Rol Adı (`roleNameInput` - QLineEdit):** Otomatik `[Rol Adı]_kopya` olarak gelir, düzenlenebilir (2-80 karakter).
- **Açıklama (`descriptionInput` - QPlainTextEdit) & Aktiflik (`activeCheckBox` - QCheckBox).

### G. Role Bağlı Kullanıcılar Penceresi (`role_users_dialog.ui` & `RoleUsersDialogController`)
- **Özet Bilgisi (`summaryLabel`):** "Toplam: X kullanıcı".
- **Tablo (`usersTable`):** Kullanıcı Adı, Ad Soyad ve Durum ("Aktif" / "Pasif").

### H. Rol Karşılaştırma Penceresi (`role_comparison_dialog.ui` & `RoleComparisonController`)
- **Başlık (`lblTitle`):** "[Rol A] (Ekran Durumu) ile [Rol B] (Veritabanı Durumu) Yetki Farkları".
- **Tablo (`comparisonTable`):** 3 sütun: Modül Adı, Rol A Yetki & Kapsamı, Rol B Yetki & Kapsamı.
- **Semantik Vurgulama:** İki rol arasında yetki veya kapsam farkı olan tüm satırlar tema sistemine uygun olarak arka plan rengiyle vurgulanır (`permission_compare`).

### I. Modül Yetkileri Matrisi (`modul_yetkileri_page.ui` & `PermissionsController`)
- **Rol Seçimi (`rolComboBox` - QComboBox):** Yetkileri düzenlenecek aktif rol.
- **Karşılaştırma Seçimi (`compareRoleComboBox` & `compareButton` - QPushButton):** Seçili başka bir rol ile canlı yetki kıyaslaması başlatır. Farklı satırlar sarı/turuncu tonla işaretlenir ve diyalog açılır.
- **Karşılaştırmayı Temizle (`clearCompareButton` - QPushButton):** Vurguları sıfırlar.
- **Kaydedilmemiş Değişiklik Uyarısı (`unsavedLabel` - QLabel):** "Dikkat: X satırda kaydedilmemiş değişiklik" uyarısı.
- **Tümünü Temizle (`btnTumunuTemizle` - QPushButton):** Tüm modüllerin yetkilerini tek tıkla sıfırlar.
- **Hazır Şablonlar (`templateComboBox` & `applyTemplateButton`):**
  - `Sadece Okuma`: Tüm modüllerde Okuma=Açık, Yazma/Güncelleme/Silme=Kapalı, Kapsam=Miras.
  - `Operasyon`: Okuma, Yazma ve Güncelleme=Açık, Silme=Kapalı, Kapsam=Miras.
  - `Tam Yetki`: Dört yetki de açık, Kapsam=Miras.
- **Modül Yönetimi Butonu (`manageModulesButton` - QPushButton):** `ModuleManagementController` penceresini açar.
- **Yetki Matrisi Tablosu (`permissionsTable` - QTableWidget - 8 Sütun):**
  - Sütun 0: Modül Adı (ToolTip ile modül işlevi açıklaması).
  - Sütun 1: Okuma (Ortalanmış QCheckBox).
  - Sütun 2: Yazma (Ortalanmış QCheckBox).
  - Sütun 3: Güncelleme (Ortalanmış QCheckBox).
  - Sütun 4: Silme (Ortalanmış QCheckBox).
  - Sütun 5: Kapsam (Yetki Alanı) - 4'lü QRadioButton grubu: `Miras`, `Kendisi`, `Departman`, `Tümü`.
  - Sütun 6: Açıklama (Seçilen kapsama göre otomatik açıklama metni).
  - Sütun 7: Durum ("—" veya "Değiştirildi" etiketi).
- **Alt Butonlar:**
  - `Değişiklikleri Geri Al` (`cancelButton`): Yapılan değişiklikleri veritabanındaki haline döndürür.
  - `Kaydet` (`saveButton`): Değişiklikleri doğrular, denetim izine (audit log) yazar ve DB'ye işler.

### J. Modül Tanımlama ve Sıralama (`module_management_page.ui` & `ModuleManagementController`)
- Sistem modüllerinin kodlarını (`modul_kodu`), adlarını (`modul_adi`), menü sıra numaralarını (`sira_no`), aktiflik durumlarını ve açıklamalarını yönetir.

### K. Yönetici Güvenlik Doğrulaması (`sudo_dialog.ui` & `SudoDialogController`)
- Kritik kullanıcı silme/pasife alma işlemlerinde açılan güvenlik penceresidir. Aktif yöneticinin parolasını doğrulamadan işleme izin vermez.

---

## 2. 5N1K Kural ve Ayar Çözümleme Matrisi

| NE? (Bileşen & Ayar) | NEDEN? (Gerekçe / Amaç) | NEREDE? (UI - Controller - DB - Motor) | NASIL? (Formül / Çalışma Mantığı) | NE ZAMAN? (Tetiklenme Anı) | KİM? (Yetkili & Hedef Kitle) | DURUM |
|---|---|---|---|---|---|---|
| **Dinamik Sekme Görünürlüğü** (`_apply_tab_permissions`) | Yetkisiz kullanıcıların rol ve yetki matrisine erişmesini engellemek. | • **UI:** `kullanici_yonetim_main.ui`<br>• **Ctrl:** `user_management_main_controller.py:106`<br>• **Servis:** `PermissionService` | `tab_permissions[module_code]` false ise ilgili sekme gizlenir (`setTabVisible=False`). İlk izinli sekmeye odaklanır. | Ekran ilk açıldığında. | Yetkisiz roller gizlenir, yetkili roller görür. | **Eksiksiz & Aktif** |
| **Hesap Kilidi Açma** (`unlockButton`) | Hatalı şifre denemesiyle kilitlenen personelin hesabını açmak. | • **UI:** `kullanici_yonetim_page.ui`<br>• **Ctrl:** `users_controller.py:433`<br>• **DB:** `kullanicilar.yanlis_giris`, `kullanicilar.kilitli_kadar` | `yanlis_giris = 0` ve `kilitli_kadar = NULL` yapılır. Kilit durumu sıfırlanır, kullanıcı anında giriş yapabilir. | Kilitli kullanıcı seçilip "Kilidi Kaldır" tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Kullanıcı Silmede Sudo Doğrulaması** | Yetkisiz veya dalgınlıkla kullanıcı silinmesini engellemek. | • **UI:** `sudo_dialog.ui`<br>• **Ctrl:** `users_controller.py:398`<br>• **DB:** `kullanicilar.sifre_hash` | İşlemi yapan yöneticinin şifresi sorulur; şifre doğrulanmadan silme/pasife alma yürütülmez. | Kullanıcı silme tetiklendiğinde. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Kendi Hesabını ve Admin'i Koruma** | Sistemin yöneticisiz kalmasını ve intihar operasyonlarını engellemek. | • **UI:** Yok (Mantıksal Engel)<br>• **Ctrl:** `users_controller.py:295, 370`<br>• **DB:** `kullanicilar.id` | Aktif oturum kullanıcısı kendi hesabını pasife alamaz veya silemez. "Admin" kullanıcısı asla silinemez ve pasife alınamaz. | Pasife alma veya silme tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Kullanıcıyı Personele Bağlama** (`personelComboBox`) | Kullanıcı hesabı ile özlük/sağlık/dozimetre sicilini eşleştirmek. | • **UI:** `kullanici_form_dialog.ui:161`<br>• **Ctrl:** `user_form_controller.py:105`<br>• **DB:** `kullanicilar.personel_id` | Otomatik tamamlamalı açılır kutudan personel seçilir; bağlanırsa dozimetre, nöbet ve izin hakları kullanıcı hesabıyla eşleşir. | Kullanıcı eklenirken veya düzenlenirken. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Parola Güncelleme Koruması** (`sifreInput`) | Düzenleme sırasında mevcut parolayı korumak veya yenilemek. | • **UI:** `kullanici_form_dialog.ui:127`<br>• **Ctrl:** `user_form_controller.py:176`<br>• **Motor:** `validate_password_policy` | Düzenlemede boş bırakılırsa parola değişmez; yazılırsa min. 8 karakter ve şifre onay eşleşmesi zorunludur. | Form kaydedilirken. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Korumalı Sistem Rolleri Kalkanı** (`PROTECTED_SYSTEM_ROLES`) | Sistemin temel omurga rollerinin bozulmasını engellemek. | • **UI:** `rol_ekle_dialog.ui`<br>• **Ctrl:** `role_form_controller.py:71`<br>• **Motor:** `role_service.py:20` | "Admin" rolünün adı ve aktiflik durumu kilitlidir (`setEnabled(False)`). Admin rolü silinemez veya pasifleştirilemez. | Rol düzenleme formu açıldığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Kullanıcıya Bağlı Rolün Silinmesini Önleme** | Rol silindiğinde kullanıcıların sahipsiz/yetkisiz kalmasını önlemek. | • **UI:** `roller_page.ui`<br>• **Ctrl:** `roles_controller.py:363`<br>• **DB:** `kullanicilar.rol_id` | Role bağlı kullanıcı sayısı (`count_users_by_role`) sıfırdan büyükse silme reddedilir ("Bu role bağlı X kullanıcı var"). | Rol sil butonuna tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Rol Klonlama / Kopyalama** (`RoleCopyDialogController`) | Sıfırdan 20 modül yetkisi tanımlamak yerine hazır rolü çoğaltmak. | • **UI:** `role_copy_dialog.ui`<br>• **Ctrl:** `roles_controller.py:304`<br>• **Servis:** `copy_role_with_permissions` | Kaynak rolün tüm modül okuma/yazma/güncelleme/silme ve kapsam ayarları yeni role birebir kopyalanır. | İşlemler > Seçileni Kopyala tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Role Bağlı Kullanıcıları Listeleme** (`RoleUsersDialogController`) | Rolü düzenlemeden veya silmeden önce etkilenen personelleri görmek. | • **UI:** `role_users_dialog.ui`<br>• **Ctrl:** `roles_controller.py:206`<br>• **DB:** `kullanicilar` | Sağ tık > "Kullanıcıları Göster" seçildiğinde ilgili role atanmış personeller tablo halinde açılır. | Sağ tık menüsünden tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Okuma Yetkisi Bağımlılık Motoru** (`_enforce_permission_dependencies`) | Mantıksız yetki kombinasyonlarını (göremeyen ama yazan/silen) önlemek. | • **UI:** `modul_yetkileri_page.ui`<br>• **Ctrl:** `permissions_controller.py:367` | Yazma, Güncelleme veya Silme açıldığında **Okuma otomatik açılır**. Okuma kapatıldığında **Yazma/Güncelleme/Silme otomatik kapanır**. | Herhangi bir onay kutusu tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Modül Düzeyinde Kapsam Belirleme** (Scope Override) | Rolün genel kapsamını modül bazında özelleştirmek. | • **UI:** `modul_yetkileri_page.ui:216`<br>• **Ctrl:** `permissions_controller.py:223`<br>• **DB:** `rol_modul_yetkileri.kapsam` | Radyo düğmeleri: `Miras` (Rolün genel ayarı), `Kendisi (own)`, `Departman (department)`, `Tümü (all)`. | Kapsam radyo butonu seçildiğinde. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Hazır Yetki Şablonları** (`applyTemplateButton`) | Yetkilendirme sürecini saniyeler içinde tamamlamak. | • **UI:** `modul_yetkileri_page.ui:124`<br>• **Ctrl:** `permissions_controller.py:452` | "Sadece Okuma", "Operasyon" veya "Tam Yetki" şablonu seçilip uygulandığında tablodaki tüm modüller anında ayarlanır. | Şablon Uygula butonuna tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Roller Arası Canlı Karşılaştırma** (`compareButton`) | İki rolün yetki farklarını denetlemek. | • **UI:** `role_comparison_dialog.ui`<br>• **Ctrl:** `permissions_controller.py:504` | Seçilen ikinci rolün veritabanı durumu ile ekrandaki mevcut durum karşılaştırılır; farklı satırlar semantik renkle vurgulanır. | Karşılaştır butonuna tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Kullanıcı Silme ve Toplu Eylemler** | Toolbar'da buton olarak yer almayıp sağ tık bağlam menüsünde aktif olan eylemler. | • **UI:** `kullanici_yonetim_page.ui`<br>• **Ctrl:** `users_controller.py:461` | Silme ve toplu aktif/pasif/silme işlemleri tablo üzerinde sağ tık menüsünden güvenli diyalog ve sudo teyidiyle işletilir. | Sağ tık yapıldığında. | Sistem Yöneticisi. | **Eksiksiz & Aktif (Sağ Tık Menüsü)** |


---

## 3. Koddaki Mantık, Kısıtlar ve QMessageBox Validasyonları

Kod tabanında tespit edilen kilit iş kuralları, eşikler ve kullanıcı uyarıları:

1. **Kullanıcı Hesabı Kilit Kuralları ve Açma (`users_controller.py:556`):**
   - **Kilitlenme Eşiği:** Yanlış giriş sayısı `yanlis_giris > 0` veya `kilitli_kadar` gelecekteki bir tarih ise kullanıcı kilitli kabul edilir.
   - **Kilit Açma Onayı:** `ask_confirm("Kilit Kaldır", "'{username}' kullanıcısının başarısız giriş denemelerini sıfırlamak ve kilidini açmak istiyor musunuz?")`.
   - **Sonuç:** Başarılı olursa Toast mesajı verilir ("'{username}' kullanıcısının kilidi kaldırıldı.").

2. **Kendi Kendini Pasife Alma veya Silme Engeli (`users_controller.py:295, 370`):**
   - Kullanıcı kendi açık oturumunun ID'sini seçip pasife almaya veya silmeye kalkışırsa:
     - `QMessageBox.warning(self, "Islem Engellendi", "Kendi hesabinizi pasife alamazsiniz.")`
     - `QMessageBox.warning(self, "Islem Engellendi", "Acik oturumu silemezsiniz.")`

3. **Admin Kullanıcısı ve Rolü Dokunulmazlığı:**
   - Admin kullanıcısı silinemez veya pasife alınamaz: `QMessageBox.warning(self, "Islem Engellendi", "Admin kullanicisi pasife alinamaz.")` / `"Admin kullanicisi silinemez."`.
   - Admin rolünün adı değiştirilemez ve pasife alınamaz (`rolAdiInput.setEnabled(False)`, `aktifCheckBox.setEnabled(False)`).
   - Admin rolü silinemez: `QMessageBox.warning(self, "İşlem Engellendi", "Admin rolü silinemez.")`.

4. **Kullanıcı Silmede Sudo Mode Teyidi (`users_controller.py:398`):**
   - Kullanıcı silme/pasife alma onaylandığında doğrudan işlem yapılmaz; `SudoDialogController` açılır.
   - Yönetici şifresini doğru girmedikçe silme işlemi iptal edilir ve audit loga `sudo_verification_failed` yazılır.

5. **Role Bağlı Kullanıcı Varken Rol Silme Yasağı (`roles_controller.py:363`):**
   - Eğer silinmek istenen role bağlı en az 1 kullanıcı varsa:
     `QMessageBox.warning(self, "Rol Kullanımda", "Bu role bağlı {user_count} kullanıcı var. Rolü silmek için önce kullanıcıların rollerini değiştiriniz.")`.

6. **Yetki Bağımlılık Matrisi Kuralı (`permissions_controller.py:367`):**
   - **İleriye Doğru Kural:** Bir modülde Yazma, Güncelleme veya Silme işaretlendiğinde, sistem mantıksal olarak Okuma yetkisini otomatik olarak açar.
   - **Geriye Doğru Kural:** Okuma yetkisinin işareti kaldırıldığında, okunamayan bir modülde işlem yapılamayacağı için Yazma, Güncelleme ve Silme yetkileri anında otomatik kapatılır.

7. **Kaydedilmemiş Değişiklikler Koruması (`permissions_controller.py:140`):**
   - Yetki matrisinde değişiklik yapılıp kaydedilmeden başka bir role geçilmek istenirse:
     `ask_confirm("Kaydedilmemiş Değişiklikler", "Kaydedilmemiş değişiklikler mevcut. Devam ederseniz bu değişiklikler kaybolacak.\n\nYine de devam etmek istiyor musunuz?")`.

8. **Parola ve Form Eşikleri (`user_form_controller.py:160, 177`):**
   - Kullanıcı adı: 3 - 64 karakter.
   - Rol seçimi: Zorunlu.
   - Parola: En az 8 karakter. Şifre ve şifre onayı birebir aynı olmalıdır.
   - E-posta: Format doğrulaması (RFC standart regex).
   - Hata durumunda form penceresi sallanır (shake animation) ve uyarı gösterilir.

---

## 4. Kullanıcı Doğrulama ve Nihai Kararlar (5N1K Teyidi)

Kullanıcı ile yapılan teyit görüşmesi sonucunda alınan nihai operasyonel kararlar:

- **Soru 1 (Kullanıcı Silme vs. Pasife Alma):**  
  ➔ **NİHAİ KARAR:** **KAYITLAR SİLİNMEZ, PASİFE ALINIR. ANCAK ARŞİVLEME SÖZ KONUSU DEĞİLDİR.** Arşivleme işlemi yalnızca personel işten ayrılışında özlük dosyası için yürütülür; kullanıcı hesapları silinmez, yalnızca `aktif = 0` (pasif) durumuna çekilir. Kılavuzda "arşivlenir" ifadesi kesinlikle kullanılmayacak, yalnızca "pasife alınır" denilecektir.
- **Soru 2 (Silme İşlemi ve Sudo Mode):**  
  ➔ **NİHAİ KARAR:** **KULLANICI DÜZEYİNDE FİZİKSEL SİLME YOKTUR.** Sistemde fiziksel veri silme operasyonu bulunmamaktadır; silme butonu da gerçekte hesabı pasife alma fonksiyonunu yürütür. Kullanıcının kafasını karıştıracak karmaşık silme prosedürlerine kılavuzda yer verilmeyecektir.
- **Soru 3 (Miras Kapsamı Mantığı):**  
  ➔ **NİHAİ KARAR:** **EVET (BASİT VE YALIN ANLATIM).** Modül yetkileri matrisindeki `Miras` seçeneğinin, rolün genel veri erişim kapsamını devraldığı; istendiğinde modül bazında (Örn: Sadece Nöbet modülünde 'Kendi Departmanı') özelleştirilebileceği basit ve şematik bir akışla kılavuza yansıtılacaktır.
- **Soru 4 (Personel Bağlantısı Olmayan Hesaplar):**  
  ➔ **NİHAİ KARAR:** **EVET (KRİTİK UYARI OLARAK EKLENECEK).** Bir kullanıcı hesabı personel özlük kartına bağlanmadığında (seçenek: "Baglama"), bu hesap nöbet çizelgesinde veya dozimetre takip listesinde kesinlikle yer alamaz; yalnızca sisteme giriş yapabilen harici bir operatör/yönetici hesabı hüviyetinde kalır. Bu husus kılavuza belirgin bir "DİKKAT" kutusuyla işlenecektir.

---

## 5. Hibrit Platform Durumu (Masaüstü & Web Portalı)

- **🖥️ Masaüstü Ekranları (`PySide6`):**
  - `ui/pages/admin/user/kullanici_yonetim_main.ui` (Kullanıcı, Rol ve Yetki sekmeli ana pencere)
  - `ui/pages/admin/user/kullanici_yonetim_page.ui` (Kullanıcı Listesi, Arama, Filtreleme, Kilit Açma)
  - `ui/pages/admin/user/kullanici_form_dialog.ui` (Kullanıcı Ekle/Düzenle, Personel Bağlantısı)
  - `ui/pages/admin/user/roller_page.ui` (Sistem Rolleri, İşlemler Menüsü)
  - `ui/pages/admin/user/rol_ekle_dialog.ui` & `role_copy_dialog.ui` (Rol Tanımlama ve Klonlama)
  - `ui/pages/admin/user/role_comparison_dialog.ui` (Rol Karşılaştırma Matrisi)
  - `ui/pages/admin/user/role_users_dialog.ui` (Role Bağlı Kullanıcılar)
  - `ui/pages/admin/user/modul_yetkileri_page.ui` (Modül Yetki ve Kapsam Matrisi)
  - `ui/pages/admin/system/sudo_dialog.ui` (Yönetici Sudo Doğrulaması)
- **📱 Web Portalı & PWA (`React / Vite / Tailwind`):**
  - **Mevcut Değil:** Web portalında sistem yöneticisine ait Kullanıcı Yönetimi, Rol Tanımlama veya Yetki Matrisi ekranı **bulunmamaktadır**. Web portalı yalnızca normal personelin kendi profilini (`/api/profile`) görmesine ve şifresini değiştirmesine imkan tanır.
  - **Kılavuz Notu:** Kullanıcı ve rol yönetimi işlemleri yalnızca kurum içi Masaüstü İstemcisi üzerinden Sistem Yöneticisi (Admin) yetkisiyle gerçekleştirilebilir.

---

## 6. Hedefli Ekran Görüntüsü Listesi (assets/img Taraması)

`docs/help/assets/img/` klasörü taranmış ve modül için birebir hazır olan ekran görüntüleri tespit edilmiştir:

1. **Kullanıcı Yönetimi Listesi ve Eylemler:**
   - **Dosya Yolu:** `docs/help/assets/img/02_kullanici_yonetim_page.png` (Mevcut ve hazır)
   - **Hedef Gösterim:** Arama çubuğu, durum ve rol filtreleri, kullanıcı listesi tablosu, Düzenle, Aktif/Pasif, Kilidi Kaldır ve Excel butonları.
2. **Rol Modül Yetkileri ve Kapsam Matrisi:**
   - **Dosya Yolu:** `docs/help/assets/img/02_modul_yetkileri_page.png` (Mevcut ve hazır)
   - **Hedef Gösterim:** Rol seçimi, Okuma-Yazma-Güncelleme-Silme onay kutuları, 4'lü Kapsam (Miras, Kendisi, Departman, Tümü) seçimi, Şablon Uygula açılır kutusu ve Karşılaştır özelliği.
