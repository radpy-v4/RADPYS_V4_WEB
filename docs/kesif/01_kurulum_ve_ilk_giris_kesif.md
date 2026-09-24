# 01_kurulum_ve_ilk_giris — Teknik Keşif ve 5N1K Analiz Raporu

- **Modül Kodu ve Adı:** `01_kurulum_ve_ilk_giris` (Kurulum, Başlatma, İlk Giriş ve Sistem Altyapısı)
- **Modül Karmaşıklık Seviyesi (Tier):** TIER 2 (Operasyonel İş Akışı & Güvenlik Doğrulaması)
- **Taranan Arayüz Dosyaları:**
  - `ui/pages/login_page.ui`
  - `ui/pages/auth_password_change_dialog.ui`
  - `ui/pages/command_palette_dialog.ui`
  - `ui/pages/notification_dialog.ui`
  - `ui/pages/notification_item.ui`
  - `ui/pages/about_dialog.ui`
  - `web_portal/src/components/LoginScreen.tsx`
- **Taranan Controller ve Servis Kodları:**
  - `main.pyw` (Bootstrap, Tekillik Mutex'i, PostgreSQL UAC Servis Kontrolü, DB Şema & Tohum Başlatıcı)
  - `ui/controllers/login_controller.py` (Kimlik Doğrulama, Beni Hatırla, Lisans Kilidi, Zorunlu Şifre Yönlendiricisi)
  - `ui/controllers/auth_password_change_dialog.py` (Forced / Forgot Şifre Güncelleme Diyaloğu)
  - `ui/widgets/command_palette_dialog.py` (Ctrl+K Evrensel Navigasyon & Canlı Personel Arama Motoru)
  - `ui/widgets/notification_dialog.py` (Bildirim Merkezi, Nöbet Devir Onay Köprüsü, Animasyonlu Açılış)
  - `ui/widgets/about_dialog.py` (Cihaz Kimliği / Machine ID, Ed25519 Lisans Aktivasyonu, Log ZIP Paketi)
  - `app/services/system/license_service.py` (Machine ID, Ed25519, 30 Günlük Trial, Saat Geriye Alma Koruması, Kademeli 15g/3g Uyarılar, Paket Limitleri)
  - `app/services/auth/security.py` (Parola Politikası, Zayıf Parola Denetimi, Karmaşıklık Kuralları)
  - `app/services/auth/user_service.py` & `app/services/auth/auth_service.py`
- **Taranan DB Tabloları ve Sistem Meta Anahtarları:**
  - `kullanicilar` (`id`, `kullanici_adi`, `sifre_hash`, `email`, `rol_id`, `personel_id`, `aktif`, `ilk_giris`, `son_giris_tarihi`)
  - `bildirimler` (`id`, `kullanici_id`, `baslik`, `icerik`, `bildirim_tipi`, `iliskili_id`, `okundu`, `olusturma_tarihi`)
  - `sistem_ayarlari` (veya `_meta`: `license_key`, `installation_date`, `last_seen_date`, `demo_mode`)
- **Analiz Tarihi:** 2026-09-23

---

## 1. Arayüz Mimarisi ve Bileşen Envanteri

### A. Giriş Penceresi (`login_page.ui` & `LoginController`)
- **Kullanıcı Adı Kutusu (`usernameInput` - QLineEdit):** Giriş yapılacak kullanıcı hesabı.
- **Şifre Kutusu (`passwordInput` - QLineEdit):** Maskeli şifre girişi.
- **Şifreyi Göster Onay Kutusu (`showPasswordCheckBox` - QCheckBox):** Şifreyi açık metin veya yıldızlı gösterme toggle'ı.
- **Beni Hatırla Onay Kutusu (`rememberCheckBox` - QCheckBox):** Kullanıcı adını yerel `QSettings` deposuna kaydeder.
- **Giriş Yap Butonu (`loginButton` - QPushButton):** Doğrulama sürecini başlatır (Default Enter tetiklemeli).
- **Şifremi Unuttum Butonu (`forgotButton` - QPushButton):** E-posta ile parola sıfırlama penceresini açar.
- **Kurumsal Bilgi Etiketleri (`titleLabel`, `subtitleLabel`, `footerLabel`):** Sürüm ve telif bilgisi.
- **Hayalet/Kopuk Etiket (`label`):** Kodda `if hasattr(self, "label"): self.label.hide()` ile zorla gizlenen atıl bileşen.

### B. Zorunlu / Sıfırlama Şifre Diyaloğu (`auth_password_change_dialog.ui` & `AuthPasswordChangeDialog`)
- **Bilgilendirme Metni (`infoLabel` - QLabel):** "İlk Giriş - Şifre Değiştirme Zorunludur" veya "Şifremi Unuttum".
- **Kullanıcı Adı (`usernameInput` - QLineEdit):** Yalnızca `forgot` modunda görünür.
- **E-posta Adresi (`emailInput` - QLineEdit):** Yalnızca `forgot` modunda görünür.
- **Yeni Şifre (`newPasswordInput` - QLineEdit):** Maskeli yeni parola alanı.
- **Şifre Tekrar (`confirmPasswordInput` - QLineEdit):** Maskeli doğrulama alanı.
- **Şifreleri Göster (`showPasswordCheckBox` - QCheckBox):** Her iki şifreyi açık metne çevirir.
- **Güvenlik Politikası Notu (`policyLabel` - QLabel):** Sistem ayarlarındaki minimum uzunluk ve karakter kurallarını dinamik gösterir.
- **Kaydet / Şifreyi Sıfırla Butonu (`saveButton` - QPushButton):** Doğrulama ve kaydetme aksiyonu.
- **İptal Butonu (`cancelButton` - QPushButton):** Pencereyi kapatır (`forced` modunda giriş engellenir).

### C. Evrensel Komut Paleti (`command_palette_dialog.ui` & `CommandPaletteDialog` - Ctrl+K)
- **Arama Çubuğu (`searchInput` - QLineEdit):** Sayfa adı, modül, hızlı işlem veya personel adı/TC araması.
- **Sonuç Listesi (`resultsList` - QListWidget):** Kategorize edilmiş (Navigasyon, Hızlı İşlem, Personel) tıklanabilir komutlar.
- **Yardım İpucu (`helpLabel` - QLabel):** Klavye ok tuşları, Enter ve Esc kullanım yönergesi.

### D. Bildirim Paneli (`notification_dialog.ui`, `notification_item.ui` & `NotificationDialog`)
- **Başlık Çubuğu (`lblTitle` - QLabel) & Temizle Butonu (`clear_all_btn` - QPushButton):** Tüm bildirimleri silme.
- **Kaydırılabilir Liste Alanı (`ScrollArea` - QScrollArea):** Kullanıcıya özel bildirim kartları.
- **Boş Durum Göstergesi (`empty_widget`, `empty_text`):** Bildirim bulunmadığında kurumsal dürüst boş durum.
- **Bildirim Kartı (`NotificationItemWidget`):** Başlık, açıklama, tarih, okunmamış mavi noktası (`unread_dot`), silme butonu (`delete_btn`) ve doğrudan modüle/aksiyona yönlendiren tıklama tetikleyicisi (Örn: Nöbet Devir Talebini Kabul/Red diyalogu).

### E. Lisans ve Sistem Hakkında Penceresi (`about_dialog.ui` & `HakkindaDialog`)
- **Uygulama Kimliği (`about_app_name`, `about_version`, `lbllogo`):** Dinamik sürüm (`version.json`) ve antet logosu.
- **Sistem Platform Künyesi:** OS, Python 3.14, PySide6, PostgreSQL açık kaynak lisans bildirimleri.
- **Lisans ve Aktivasyon Kartı:**
  - Lisans Durumu (`status_lbl`): Demo sürümü (kalan gün) veya Lisanslı Paket (bitiş tarihi).
  - Cihaz Kimliği (`mac_lbl`): Donanıma özgü `RP-XXXX-XXXX-XXXX-XXXX` kimlik kodu.
  - Kopyala Butonu (`btn_copy`): Cihaz kimliğini panoya kopyalar ("Kopyalandı" geri bildirimi).
  - Lisans Anahtarı Kutusu (`key_input`): `LK-AS-[PAKET]-[SURE]-[IMZA]` formatında anahtar girişi.
  - Lisansı Aktifleştir Butonu (`btn_verify`): Ed25519 asimetrik imza doğrulayıcı.
- **Destek Paketi (Log) Oluştur Butonu (`btn_zip`):** Masaüstüne `radpys_destek_log.zip` (app.log, errors.log, sync.log) üretir.

---

## 2. 5N1K Kural ve Ayar Çözümleme Matrisi

| NE? (Bileşen & Ayar) | NEDEN? (Gerekçe / Amaç) | NEREDE? (UI - Controller - DB - Motor) | NASIL? (Formül / Çalışma Mantığı) | NE ZAMAN? (Tetiklenme Anı) | KİM? (Yetkili & Hedef Kitle) | DURUM |
|---|---|---|---|---|---|---|
| **Tekil Uygulama Kilidi** (`Single Instance Mutex`) | DB çakışmasını ve mükerrer pencere açılmasını engellemek. | • **UI:** Yok (Sistem)<br>• **Ctrl:** `main.pyw:136`<br>• **OS:** Mutex `RADPYS_V4_MAIN_APP_MUTEX` | Mutex alınamazsa var olan pencere win32 `ShowWindow(SW_RESTORE)` ile öne getirilir, kopya kapanır. | Masaüstü kısayoluna çift tıklandığında. | Tüm kullanıcılar. | **Eksiksiz & Aktif** |
| **PostgreSQL Servis Kontrolü & UAC** | Veritabanı motoru çalışmadan uygulamanın çökmesini engellemek. | • **UI:** `main.pyw:382`<br>• **Ctrl:** `app/db/engine_manager.py`<br>• **DB:** `app/db/database.py` | Bağlantı yoksa UAC ile servisi başlatma, `services.msc` açma veya yeniden deneme sunulur. | Başlangıçta veritabanı soketi açılamadığında. | Kurulum personeli, Admin. | **Eksiksiz & Aktif** |
| **Beni Hatırla** (`rememberCheckBox`) | Her seferinde kullanıcı adı yazma zahmetini ortadan kaldırmak. | • **UI:** `login_page.ui:1230`<br>• **Ctrl:** `login_controller.py:59`<br>• **Ayar:** `QSettings("RADPYS", "RADPYS_V4")` | İşaretliyse kullanıcı adını şifresiz yerel ayarlara yazar. Parola ASLA kaydedilmez; açılışta imleç doğrudan şifre kutusuna gider. | Giriş butonuna basıldığında. | Tüm kullanıcılar. | **Eksiksiz & Aktif** |
| **Şifreyi Göster** (`showPasswordCheckBox`) | Parola yazarken yazım hatalarını anında görebilmek. | • **UI:** `login_page.ui:1222`<br>• **Ctrl:** `login_controller.py:105` | `QLineEdit.EchoMode.Password` ile `EchoMode.Normal` arasında geçiş yapar. | Kutu işaretlendiğinde. | Tüm kullanıcılar. | **Eksiksiz & Aktif** |
| **Lisans Kilidi & Yönetici Modu** (`is_license_expired`) | Lisanssız / süresi dolmuş yazılım kullanımını engellemek. | • **UI:** `login_page.ui`<br>• **Ctrl:** `login_controller.py:167`<br>• **Motor:** `license_service.py:346` | Süre dolmuşsa normal kullanıcı engellenir; Admin için `license_locked=True` yapılıp sadece aktivasyon ekranı açılır. | Giriş Yap butonuna tıklandığında. | Normal kullanıcı (Engellenir), Admin (Kısıtlı açılır). | **Eksiksiz & Aktif** |
| **Zorunlu İlk Giriş Şifre Değişimi** (`ilk_giris`) | Varsayılan geçici şifreyle sistemde kalınmasını engellemek. | • **UI:** `auth_password_change_dialog.ui`<br>• **Ctrl:** `login_controller.py:194`<br>• **DB:** `kullanicilar.ilk_giris` | `ilk_giris == 1` ise diyalog zorunlu açılır. İptal edilirse oturum açılmaz; şifre güncellenince `ilk_giris = 0` yapılır. | Başarılı ilk oturum doğrulamasında. | İlk kez giriş yapan tüm personel. | **Eksiksiz & Aktif** |
| **Parola Karmaşıklık Doğrulaması** (`validate_password_policy`) | Zayıf ve tahmin edilebilir şifreleri önlemek. | • **UI:** `auth_password_change_dialog.ui:933`<br>• **Ctrl:** `auth_password_change_dialog.py:76`<br>• **Motor:** `security.py:126` | Min. 8 karakter (ayarlanabilir), büyük harf, küçük harf, rakam, özel karakter, kullanıcı adından farklı olma ve zayıf şifre kara liste denetimi. | Yeni şifre kaydedilirken. | Tüm personel. | **Eksiksiz & Aktif** |
| **Şifremi Unuttum** (`reset_password_via_email`) | E-posta teyidiyle şifreyi güvenle sıfırlamak. | • **UI:** `login_page.ui:1246`<br>• **Ctrl:** `auth_password_change_dialog.py:144`<br>• **DB:** `kullanicilar.email` | Kullanıcı adı ile sistemdeki kayıtlı e-posta eşleşirse yeni şifre atanır. | Şifremi Unuttum tıklandığında. | E-postası kayıtlı personel. | **Eksiksiz & Aktif** |
| **Evrensel Arama Komut Paleti** (`Ctrl+K`) | Menülerde kaybolmadan sayfa, işlem veya personele gitmek. | • **UI:** `command_palette_dialog.ui`<br>• **Ctrl:** `command_palette_dialog.py:304`<br>• **DB:** `personeller` | `Ctrl+K` ile açılır; min. 2 karakterde canlı personel araması yapar, yetkili olunan modülleri listeler. | `Ctrl+K` tuş kombinasyonunda. | Tüm kullanıcılar. | **Eksiksiz & Aktif** |
| **Okunmamış Bildirim Rozeti & Paneli** | Önemli sistem alarmlarını anında hissettirmek. | • **UI:** `notification_dialog.ui`<br>• **Ctrl:** `app_controller.py:1623`<br>• **DB:** `bildirimler` | Okunmamış bildirim varsa zil ikonu maviye döner ve sayı yazar. Tıklandığında panel animasyonla açılır. | Yeni bildirim düştüğünde. | Hedef kullanıcı. | **Eksiksiz & Aktif** |
| **Bildirim Üzerinden Nöbet Devir Onayı** | Nöbet devirlerini menüye girmeden 5 saniyede onaylamak. | • **UI:** `notification_item.ui`<br>• **Ctrl:** `notification_dialog.py:118`<br>• **Motor:** `NobetService` | Nöbet devir bildirimi tıklandığında "Kabul / Red" sorulur; evet denirse amir onayına iletilir. | Nöbet devir bildirimi tıklandığında. | Nöbeti devralacak personel. | **Eksiksiz & Aktif** |
| **Cihaz Kimliği (Machine ID) Üretimi** | Lisansı fiziksel sunucuya/bilgisayara bağlamak. | • **UI:** `about_dialog.ui:180`<br>• **Ctrl:** `about_dialog.py:160`<br>• **Motor:** `license_service.py:56` | Ağ kartı donanım UUID (`uuid.getnode()`) SHA-256 ile özetlenip `RP-XXXX-XXXX-XXXX-XXXX` formatında üretilir. | Hakkında/Lisans açıldığında. | Tüm kullanıcılar. | **Eksiksiz & Aktif** |
| **Ed25519 Asimetrik Lisans Aktivasyonu** | Kriptografik anahtarla kurum lisansını etkinleştirmek. | • **UI:** `about_dialog.ui:204`<br>• **Ctrl:** `about_dialog.py:223`<br>• **Motor:** `license_service.py:70` | `LK-AS-...` anahtarı üretici açık anahtarı ve cihaz kimliği ile doğrulanır; veritabanına meta kaydedilir. | Lisansı Aktifleştir tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Destek Paketi (Log ZIP) Oluşturma** | Hata anında teknik ekibe logları tek tıkla iletmek. | • **UI:** `about_dialog.ui:401`<br>• **Ctrl:** `about_dialog.py:249`<br>• **FS:** `logs/` | `app.log`, `errors.log`, `sync.log` dosyalarını masaüstünde `radpys_destek_log.zip` olarak paketler. | Destek Paketi butonuna tıklandığında. | Tüm kullanıcılar. | **Eksiksiz & Aktif** |
| **Giriş Ekranı Atıl Etiketi** (`label`) | Kodda gizlenen gereksiz XML bileşeni. | • **UI:** `login_page.ui`<br>• **Ctrl:** `login_controller.py:83-84` | `self.label.hide()` ile zorla gizlenmektedir. İşlevsizdir. | Form başlatılırken. | Yok. | ❌ **HAYALET BİLEŞEN (KOPUK)** |

---

## 3. Koddaki Mantık, Kısıtlar ve QMessageBox Validasyonları

### A. Yasal Süreler, Eşikler ve Zaman Aşımları
- **30 Günlük Deneme Süresi (Trial):** Lisanssız kurulumlarda sistem 30 gün boyunca çalışır. `license_service.py:316 (TRIAL_DAYS = 30)`.
- **Sistem Saati Manipülasyon Kontrolü (Clock Tamper):** Windows Registry (`Software\RADPYS\Trial\LastSeen`) ve DB meta (`last_seen_date`) kontrol edilir. Sistem saati 5 dakikadan fazla geriye alınmışsa lisans hemen sıfırlanır (`remaining = 0`).
- **Kademeli Lisans Erken Uyarısı:**
  - **15 Gün ve Daha Az:** Sarı renkli `WARNING` uyarısı.
  - **3 Gün ve Daha Az:** Kırmızı renkli `CRITICAL` erken uyarı.
  - **0 Gün (Doldu):** `EXPIRED`. Normal kullanıcı girişi tamamen durdurulur; Admin kullanıcısı sadece lisans aktivasyon ekranına yönlendirilir.
- **Parola Güvenlik Politikası Eşikleri:**
  - Minimum Uzunluk: Varsayılan 8 karakter (`sifre_min_uzunluk`). Yöneticiler sistem ayarlarından bu değeri değiştirebilir.
  - Büyük Harf: En az 1 adet (`require_upper = True`).
  - Küçük Harf: En az 1 adet (`require_lower = True`).
  - Rakam: En az 1 adet (`require_digit = True`).
  - Özel Karakter: En az 1 adet (`require_special = True`).
  - Kara Liste: Yaygın zayıf parolalar (`123456`, `password`, `admin` vb.) doğrudan reddedilir.
  - Parola kullanıcı adıyla aynı olamaz.
- **Tekrarlayan Enter Tuşu Filtresi (Debounce):** `GlobalEnterDebounceFilter` ile diyalog kapandıktan sonra 150 ms boyunca mükerrer Enter basışları yutulur (İstem dışı çift onay engellenir).

### B. Karşılaşılan Kritik QMessageBox İkazları
1. **Eksik Giriş Bilgisi:**
   - *Başlık:* `Eksik Bilgi`
   - *Metin:* `"Kullanıcı adı ve şifre zorunludur."`
2. **Hatalı Giriş:**
   - *Başlık:* `Giriş Başarısız`
   - *Metin:* `"Kullanıcı adı veya şifre hatalı."` (veya `auth_service` mesajı)
3. **Lisans Süresi Dolumu (Normal Kullanıcı):**
   - *Başlık:* `Lisans Süresi Doldu`
   - *Metin:* `"Kurum lisans süresi dolmuştur.\n\nSisteme giriş yapabilmek ve lisansı yenilemek için lütfen Sistem Yöneticinize (Admin) başvurunuz."`
4. **Lisans Süresi Dolumu (Admin Kullanıcı):**
   - *Başlık:* `Yönetici Lisans Girişi`
   - *Metin:* `"Kurum lisans süresi dolmuştur.\n\nUygulama yalnızca Lisans Yönetimi modunda açılacaktır. Lütfen yeni lisans anahtarınızı giriniz."`
5. **Şifre Uyuşmazlığı:**
   - *Başlık:* `Uyuşmazlık`
   - *Metin:* `"Girdiğiniz yeni şifreler birbiriyle uyuşmuyor."`
6. **PostgreSQL Veritabanı Bağlantı Hatası:**
   - *Başlık:* `RADPYS V4 — Veritabanı Bağlantı Hatası`
   - *Aksiyonlar:* `[Servisi Yönetici Olarak Başlat (UAC)]`, `[Yeniden Dene]`, `[Hizmetleri Aç (services.msc)]`, `[Kapat]`
7. **Destek Log ZIP Başarılı:**
   - *Başlık:* `Başarılı`
   - *Metin:* `"Destek log paketi başarıyla Masaüstünüze kaydedildi:\n...\radpys_destek_log.zip"`

---

## 4. Saha Teyit Soruları ve Kullanıcı Kararları

- **Soru 1 (Lisans Kilit Mantığı):** Koddaki kural gereği lisans süresi bittiğinde normal kullanıcılar tamamen bloke edilirken Admin kullanıcısına sadece Lisans Aktivasyon diyalogu açılmaktadır. Bu davranış sahada onaylanan standart akış mıdır?  
  ➔ **Karar:** **EVET (ONAYLANDI).** Lisans süresi bittiğinde normal kullanıcı girişi durdurulur; sistem yöneticisi (admin) sadece lisans yenileme ekranına alınır.
- **Soru 2 (İlk Giriş Şifre Değişimi Zorunluluğu):** İlk girişte (`ilk_giris = 1`) veya şifre süresi dolduğunda şifre değiştirilmeden pencere kapatılırsa kullanıcının sisteme girişi iptal edilmektedir. Bu güvenlik kilidi kılavuzda "Tavizsiz Güvenlik İlkesi" olarak vurgulanmalı mıdır?  
  ➔ **Karar:** **GEREK YOK.** Abartılı güvenlik sloganlarına gerek yoktur; geçici şifrenin ilk girişte değiştirilmesi gerektiği standart operasyonel bir adım olarak kılavuza yazılacaktır.
- **Soru 3 (Parola Karmaşıklık Eşikleri):** Varsayılan olarak en az 8 karakter, 1 büyük harf, 1 küçük harf, 1 rakam, 1 özel karakter, kullanıcı adından farklı olma ve zayıf şifre kara liste engeli mevcuttur. Kurumunuz bu kuralları standart olarak mı kullanmaktadır?  
  ➔ **Karar:** **VARSAYILAN AYAR.** 8 karakter ve karmaşıklık kuralları sistem varsayılanı (default) olarak gelmektedir; kurum amiri/yöneticisi bu kuralları Program Ayarları üzerinden esnetebilir veya sıkılaştırabilir.
- **Soru 4 (Şifremi Unuttum E-posta Şartı):** Şifre sıfırlama işlemi yalnızca sistemde kayıtlı e-posta adresi ile kullanıcı adının birebir eşleşmesi durumunda çalışmaktadır. E-postası olmayan personelin amirine başvurması gerektiği kılavuzda belirtilsin mi?  
  ➔ **Karar:** **EVET (ONAYLANDI).** E-postası sisteme tanımlı olmayan personelin birim amirine/yöneticisine başvurması gerektiği operasyonel reçetede yer alacaktır.
- **Soru 5 (Destek Paketi):** "Destek Paketi (Log) Oluştur" butonunun masaüstüne `radpys_destek_log.zip` oluşturduğu ve teknik destek için bunun mail atılması gerektiği kılavuza eklensin mi?  
  ➔ **Karar:** **EVET (ONAYLANDI).** Masaüstüne oluşturulan `radpys_destek_log.zip` paketinin teknik destek için `radpys.iletisim@gmail.com` adresine gönderileceği operasyonel adımlara yazılacaktır.

---

## 5. Hibrit Platform Durumu (Masaüstü & Web Portalı)

- **🖥️ Masaüstü Ekranları (`PySide6`):**
  - `ui/pages/login_page.ui` (Giriş)
  - `ui/pages/auth_password_change_dialog.ui` (Şifre Değişimi & Sıfırlama)
  - `ui/pages/command_palette_dialog.ui` (Ctrl+K Komut Paleti)
  - `ui/pages/notification_dialog.ui` & `notification_item.ui` (Bildirim Merkezi)
  - `ui/pages/about_dialog.ui` (Lisans, Cihaz Kimliği, Ed25519 Aktivasyonu, Log Paketi)
- **📱 Web Portalı & PWA (`React / Vite / Tailwind`):**
  - `web_portal/src/components/LoginScreen.tsx` (Kullanıcı adı/şifre girişi, ilk girişte zorunlu şifre değiştirme `/api/auth/change-password`, açık/koyu tema toggle).
  - *Fark Notu:* Web portalında Command Palette (Ctrl+K) veya Hakkında/Lisans aktivasyon ekranı bulunmaz; bu özellikler yalnızca Masaüstü yönetim uygulamasına aittir.

---

## 6. Hedefli Ekran Görüntüsü Listesi (assets/img Taraması)

`docs/help/assets/img/` klasörü taranmış ve modül için gerekli olan ekran görüntüleri tespit edilmiştir:

1. **Giriş Ekranı:**
   - **Dosya Yolu:** `docs/help/assets/img/01_login_page.png` (Mevcut ve hazır)
   - **Hedef Gösterim:** Kullanıcı adı, şifre, Beni Hatırla, Şifreyi Göster ve Şifremi Unuttum butonları.
2. **İlk Giriş / Zorunlu Şifre Değiştirme:**
   - **Dosya Yolu:** `docs/help/assets/img/01_auth_password_change_dialog.png` (Mevcut ve hazır)
   - **Hedef Gösterim:** Parola politikası uyarıları, yeni şifre ve şifre tekrar kutuları.
3. **Lisans, Cihaz Kimliği ve Aktivasyon Penceresi:**
   - **Dosya Yolu:** `docs/help/assets/img/01_about_dialog.png` (Mevcut ve hazır)
   - **Hedef Gösterim:** Cihaz Kimliği (Machine ID), Kopyala butonu, Lisans Anahtarı girişi ve Destek Paketi oluşturma.
4. **Evrensel Arama (Ctrl+K) ve Bildirim Merkezi:**
   - **Dosya Yolu:** `docs/help/assets/img/01_komut_paleti_ve_bildirim.png` (Mevcut ve hazır)
   - **Hedef Gösterim:** Ctrl+K hızlı arama penceresi ve sağ üst bildirim rozeti/açılır paneli.
