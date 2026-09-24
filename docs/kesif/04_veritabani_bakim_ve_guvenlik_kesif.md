# 04_veritabani_bakim_ve_guvenlik — Teknik Keşif ve 5N1K Analiz Raporu

- **Modül Kodu ve Adı:** `04_veritabani_bakim_ve_guvenlik` (Veritabanı Bakım ve Yedekleme, PostgreSQL Motor Optimizasyonu, KVKK/NDK Kriptografik Denetim İzi, Sistem ve Etkileşim Günlükleri, Sistem Çökme ve Arıza Raporlama)
- **Modül Karmaşıklık Seviyesi (Tier):** TIER 2 (Operasyonel İş Akışı & Kritik Sistem Güvenliği Altyapısı — Sudo Şifre Doğrulamalı, Şifreli Arşivleme ve Geri Yükleme, Motor Bakımı ve Sıfırlama)
- **Taranan Arayüz Dosyaları:**
  - `ui/pages/admin/system/db_maintenance_page.ui` (Veritabanı ve Dosya Yedekleme, VACUUM, REINDEX, Sistem Tanısı ve Sıfırlama)
  - `ui/pages/admin/system/log_viewer_page.ui` (Tarihsel Sistem Günlükleri: app.log, sync.log, errors.log, ui.log)
  - `ui/pages/admin/system/interaction_log_viewer_page.ui` (Kullanıcı Tıklama, Seçim, Ekran ve Aksiyon Zaman Çizelgesi: interaction_audit.jsonl)
  - `ui/pages/crash_dialog.ui` (Beklenmeyen Sistem Hatası ve Traceback Raporlama Penceresi)
- **Taranan Controller ve Servis Kodları:**
  - `ui/controllers/admin/system/db_maintenance_controller.py` (`DBMaintenanceController`, `BackupWorker`, `ConfirmResetDialog`, `encrypt_data`, `decrypt_data`)
  - `ui/controllers/admin/system/log_kayitlari_controller.py` (`LogKayitlariController` — 3 sekmeli birleşik log merkezi)
  - `ui/controllers/admin/system/log_viewer_controller.py` (`LogViewerController`, `LogSyntaxHighlighter`)
  - `ui/controllers/admin/system/interaction_log_viewer.py` (`InteractionLogViewerController`, `JsonDetailDialog`)
  - `ui/controllers/admin/system/audit_log_viewer_controller.py` (`AuditLogViewerController`, `AuditDetailDialog`)
  - `ui/controllers/admin/system/diagnostics_dialog_controller.py` (`DiagnosticsDialogController` — Sistem Tanı ve Otomatik Onarım Sihirbazı)
  - `ui/widgets/crash_dialog.py` (`CrashDialog` — Global excepthook çökme penceresi)
  - `app/services/system/db_maintenance_service.py` (`DBMaintenanceService` — VACUUM ANALYZE, REINDEX SCHEMA, TRUNCATE CASCADE Reset)
  - `app/services/system/diagnostics_service.py` (`DiagnosticsService` — Şema anomali taraması ve otomatik onarım)
  - `app/utils/audit_logger.py` (`log_audit`, `verify_audit_integrity` — SHA-256 kriptografik denetim zinciri)
  - `main.pyw` (`handle_exception` — Global Qt çökme yakalama mekanizması)
- **Taranan DB Tabloları ve Dosya Yapısı:**
  - `TRANSACTIONAL_TABLES` (Sıfırlanan 48 adet işlem ve hareket tablosu: personeller, nobet_cizelgesi, personel_dozimetre, personel_izinler, rke_envanter, cihazlar, stored_files vb.)
  - `PRESERVED_TABLES` (Sıfırlamada mutlak korunan 32 adet referans/ayar tablosu: roller, program_ayarlari, departmanlar, unvanlar, tatil_takvimi vb.)
  - `kullanicilar` tablosu (`admin` kullanıcısı korunur; diğer hesaplar silinir)
  - `data/backups/` (`*.dump`, `*.zip`, `*.sql`, `*.db` şifreli arşivler)
  - `logs/` (`app.log`, `errors.log`, `sync.log`, `ui.log`, `interaction_audit.jsonl`, `kvkk_audit.jsonl`)
- **Analiz Tarihi:** 2026-09-24

---

## A. Modülün Özeti ve Görevleri

Bu modül RADPYS'nin **veri güvenliği, felaket kurtarma (Disaster Recovery), PostgreSQL motor sağlığı ve denetlenebilirlik omurgasıdır**. Kod tabanından tespit edilen temel iş akışları şunlardır:

1. **Çift Kanallı Şifreli Yedekleme ve Geri Yükleme (`DBMaintenanceController` & `BackupWorker`):**
   - **Veritabanı Yedeği:** PostgreSQL `pg_dump -F c` komutuyla alınan binary veritabanı dökümü, sistem ayarlarındaki 256-bit anahtar (`guvenlik.yedek_sifreleme_anahtari`) ile PBKDF2 (SHA-256, 100.000 iterasyon) ve AES akış şifrelemesinden geçirilerek `data/backups/radpys_db_backup_{timestamp}.dump` olarak saklanır.
   - **Dosya Kasası Yedeği:** `data/uploads/` altındaki tüm personel belgeleri, sertifikalar ve taranmış evraklar zip arşivine dönüştürülüp aynı kriptografik yöntemle `data/backups/uploads_backup_{timestamp}.zip` olarak yedeklenir.
   - **Felaket Kurtarma (Restore):** Yedek geri yükleme işlemi, aktif veritabanının üzerine yazma riski taşıdığından çift onay ve yönetici şifre doğrulaması (**Sudo Mode**) gerektirir. Dosyalar çözülerek `pg_restore --clean --if-exists` ile veritabanına aktarılır ve sequence sayaçları otomatik eşitlenir.

2. **PostgreSQL Motor Optimizasyonu ve İndeksleme (`DBMaintenanceService`):**
   - **Boyut Optimize Et (VACUUM ANALYZE):** Arka planda `VACUUM ANALYZE` komutu koşturularak silinmiş satırların (dead tuples) bıraktığı boş alanlar işletim sistemine/motora geri kazandırılır ve sorgu planlayıcı istatistikleri güncellenir. İşlem öncesi ve sonrası veritabanı boyutu (`pg_size_pretty`) hesaplanıp raporlanır.
   - **İndeksleri Yenile (REINDEX):** Yoğun veri giriş ve silme işlemleri sonrasında bozulan veya şişen arama indeksleri, `REINDEX SCHEMA public` ile kilitlenmeden yeniden inşa edilir.
   - **İş Parçacığı Emniyeti:** Her iki bakım komutu da ana UI iş parçacığını dondurmamak için `run_with_progress` sarmalayıcısıyla arka planda yürütülür.

3. **Sistem Tanı, Hata Analizi ve Otomatik Onarım Sihirbazı (`DiagnosticsDialogController`):**
   - `btnIntegrity` butonuna tıklandığında bağımsız tanı paneli açılır.
   - Sistemde 5 kritik anomali taranır:
     1. SHA-256 Denetim İzi Zinciri Bütünlüğü,
     2. Bitiş tarihi başlangıç tarihinden küçük olan hatalı izin kayıtları,
     3. Personel kaydı silinmiş yetim (orphaned) nöbet kayıtları,
     4. Personeli bulunmayan yetim dozimetre ölçüm kayıtları,
     5. İsim/soyisim alanlarında temizlenmemiş baş-son boşluklar (untrimmed whitespace).
   - "Otomatik Düzelt & Onar" butonuyla Sudo şifresi girilerek bu veritabanı tutarsızlıkları tek tıkla şema seviyesinde düzeltilir.

4. **Tehlikeli Bölge ve Fabrika Ayarlarına Sıfırlama (`ConfirmResetDialog` & `reset_database`):**
   - Yalnızca `admin` / `superadmin` kullanıcısına açık olan bu özellik; kurum devri, test dönemi sonu veya yeni kurulumlarda kullanılır.
   - Güvenlik Protokolü:
     1. Rol denetimi (admin değilse anında engellenir ve audit loguna `blocked` düşülür),
     2. Güvenlik modalında büyük harflerle **"SIFIRLA"** yazma zorunluluğu,
     3. Sudo Mode ile yönetici şifresi doğrulaması.
   - `TRANSACTIONAL_TABLES` listesindeki 48 hareket tablosu `TRUNCATE CASCADE` ile temizlenir; tanımlar, roller, tatiller ve `admin` hesabı korunarak sequence sayaçları sıfırlanır.

5. **Merkezi Log ve Kriptografik Denetim Merkezi (`LogKayitlariController`):**
   - `btnLogKayitlari` tıklandığında 3 sekmeli birleşik merkez açılır:
     - **Sekme 1 (Tarihsel Sistem Günlükleri):** `app.log`, `sync.log`, `errors.log`, `ui.log` dosyalarını okur; seviye (INFO, WARNING, ERROR), arama (350ms debounce) ve tarih-saat aralığına göre filtreler. Hata satırlarını sözdizimi renklendirmesiyle (Syntax Highlighter) gösterir.
     - **Sekme 2 (Kullanıcı Etkileşim Günlüğü):** Kullanıcıların ekranda tıkladığı butonları, girdiği metinleri, açtığı ekranları ve aldığı hata mesajlarını `interaction_audit.jsonl` üzerinden kronolojik olarak listeler; satıra çift tıklandığında ham JSON modalı açar.
     - **Sekme 3 (KVKK / NDK Denetim İzi):** Sistemdeki her kritik eylemin SHA-256 hash zincirini (`prev_hash` -> `current_hash`) doğrular; tahrifat varsa canlı kırmızı ikaz verir.

6. **Global Çökme ve Traceback Yakalayıcı (`CrashDialog`):**
   - Uygulama genelinde yakalanmamış bir Python istisnası (`UnhandledException`) oluştuğunda `sys.excepthook` devreye girerek uygulamayı kapatmak yerine koyu temalı `CrashDialog` penceresini açar.
   - Kullanıcı tek tıkla teknik traceback dökümünü panoya kopyalayabilir veya doğrudan `radpys.iletisim@gmail.com` adresine önceden formatlanmış e-posta raporu gönderebilir.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Gerekçe / Amaç) | NEREDE? (UI - Controller - DB - Servis) | NASIL? (Formül / Çalışma Mantığı) | NE ZAMAN? (Tetiklenme Anı) | KİM? (Etkilenen Kitle) | DURUM |
|---|---|---|---|---|---|---|
| **Veritabanı Yedekle** (`btnSaveBackup`) | Felaket anında veritabanını kurtarmak üzere tam döküm almak. | • **UI:** `db_maintenance_page.ui:115`<br>• **Ctrl:** `db_maintenance_controller.py:396`<br>• **Servis:** `BackupWorker`<br>• **FS:** `data/backups/radpys_db_backup_*.dump` | `pg_dump -F c` ile alınan dump, 256-bit PBKDF2/AES ile şifrelenip zaman damgasıyla diske yazılır. | Butona tıklandığında (arka plan iş parçacığı). | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Dosyaları Yedekle** (`btnSaveUploadsBackup`) | Yüklenen personel evrakları ve taranmış belgeleri arşivlemek. | • **UI:** `db_maintenance_page.ui:122`<br>• **Ctrl:** `db_maintenance_controller.py:400`<br>• **Servis:** `BackupWorker`<br>• **FS:** `data/backups/uploads_backup_*.zip` | `data/uploads/` dizini zip olarak sıkıştırılır, ardından 256-bit anahtarla şifrelenerek kaydedilir. | Butona tıklandığında (arka plan iş parçacığı). | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Yedekleri Yenile** (`btnRefresh`) | Yedek klasörüne dışarıdan atılan veya yeni üretilen dosyaları listelemek. | • **UI:** `db_maintenance_page.ui:129`<br>• **Ctrl:** `db_maintenance_controller.py:322` | `data/backups` dizinindeki `*.dump`, `*.sql`, `*.db`, `*.zip` dosyalarını tarar; boyut ve tarihi tabloya yazar. | Butona tıklandığında veya yedekleme bittiğinde. | Sistem Yöneticisi. | **Eksiksiz & Aktif** |
| **Yedeği Geri Yükle (Yükle)** (Tablo Aksiyonu) | Bozulma veya veri kaybı durumunda veritabanını/dosyaları eski duruma getirmek. | • **UI:** `tableBackups` hücresi<br>• **Ctrl:** `db_maintenance_controller.py:475`<br>• **Motor:** `pg_restore` | Çift onay + Sudo şifresi sonrası dosya deşifre edilir. Veritabanı ise `pg_restore --clean` çalıştırılır; zip ise `data/uploads` açılır. | Tablodaki "Yükle" butonuna tıklandığında. | Yalnızca Süper Yönetici (Sudo). | **Eksiksiz & Aktif** |
| **Yedeği Dışa Aktar** (Tablo Aksiyonu) | Şifreli yedeği harici diske veya USB belleğe kopyalamak. | • **UI:** `tableBackups` hücresi<br>• **Ctrl:** `db_maintenance_controller.py:603` | `QFileDialog.getSaveFileName` ile kullanıcının seçtiği harici hedefe `shutil.copy2` ile kopyalar. | Tablodaki "Dışa Aktar" butonuna tıklandığında. | Sistem Yöneticisi. | **Eksiksiz & Aktif** |
| **Yedeği Sil** (Tablo Aksiyonu) | Eski veya gereksiz yedekleri diskten temizlemek. | • **UI:** `tableBackups` hücresi<br>• **Ctrl:** `db_maintenance_controller.py:628` | Silme onayı + Sudo doğrulaması sonrasında `backup_path.unlink()` ile kalıcı olarak silinir. | Tablodaki "Sil" butonuna tıklandığında. | Yalnızca Süper Yönetici (Sudo). | **Eksiksiz & Aktif** |
| **Boyut Optimize Et (VACUUM)** (`btnVacuum`) | PostgreSQL veritabanındaki ölü satırları temizleyip boyutu küçültmek. | • **UI:** `db_maintenance_page.ui:180`<br>• **Ctrl:** `db_maintenance_controller.py:651`<br>• **Servis:** `DBMaintenanceService.vacuum_database` | Autocommit modunda `VACUUM ANALYZE` koşturur; işlem öncesi/sonrası boyut farkını kullanıcıya gösterir. | Butona tıklandığında (`run_with_progress`). | Sistem Yöneticisi. | **Eksiksiz & Aktif** |
| **Sistem Tanısı ve Bütünlük** (`btnIntegrity`) | Şema anomalilerini, yetim kayıtları ve kullanıcı form hatalarını tespit edip onarmak. | • **UI:** `db_maintenance_page.ui:207`<br>• **Ctrl:** `db_maintenance_controller.py:677`<br>• **Diyalog:** `DiagnosticsDialogController` | Şemadaki 5 anomaliyi tarar; raporda özetler. "Otomatik Düzelt" ile yetim nöbetleri siler, ad boşluklarını kırpar. | Butona tıklandığında açılan modal sihirbaz. | Sistem Yöneticisi (Sudo). | **Eksiksiz & Aktif** |
| **İndeksleri Yenile (REINDEX)** (`btnReindex`) | Şişen veya bozulan arama indekslerini optimize etmek. | • **UI:** `db_maintenance_page.ui:234`<br>• **Ctrl:** `db_maintenance_controller.py:705`<br>• **Servis:** `DBMaintenanceService.reindex_database` | Autocommit modunda `REINDEX SCHEMA public` çalıştırarak tüm indeksleri sıfırdan kurar. | Butona tıklandığında (`run_with_progress`). | Sistem Yöneticisi. | **Eksiksiz & Aktif** |
| **Veritabanını Sıfırla** (`btnResetDB`) | İşlem/hareket kayıtlarını temizleyip sistemi fabrika ayarlarına döndürmek. | • **UI:** `db_maintenance_page.ui:301`<br>• **Ctrl:** `db_maintenance_controller.py:726`<br>• **Servis:** `DBMaintenanceService.reset_database` | Rol kontrolü -> "SIFIRLA" metin onayı -> Sudo doğrulaması -> 48 tabloya `TRUNCATE CASCADE` -> Admin dışı kullanıcıları silme. | Tehlikeli bölgedeki butona tıklandığında. | Yalnızca Root/Admin (Sudo). | **Eksiksiz & Aktif** |
| **Şifresiz Veritabanı Dışa Aktar** (`btnExportUnencrypted`) | Şifreli veritabanını ham/şifresiz SQLite olarak dışa aktarmak (Eski SQLite kalıntısı). | • **UI:** `db_maintenance_page.ui` (Kaldırıldı)<br>• **Ctrl:** YOK<br>• **Servis:** YOK | PostgreSQL mimarisine ve veri güvenliğine aykırı olduğu için `db_maintenance_page.ui` dosyasından tamamen temizlendi. | - | - | 🗑️ **ARAYÜZDEN KALDIRILDI** |
| **Şifreleme Anahtar Kasası** (`btnKeyManager`) | 256-bit AES anahtarlarını görüntülemek ve enjekte etmek (Tasarım kalıntısı). | • **UI:** `db_maintenance_page.ui` (Kaldırıldı)<br>• **Ctrl:** YOK<br>• **Servis:** YOK | Anahtar doğrudan `ayarlar` tablosunda güvenle yönetildiği ve manuel müdahale veri kaybı riski taşıdığı için arayüzden temizlendi. | - | - | 🗑️ **ARAYÜZDEN KALDIRILDI** |
| **Tarihsel Log Görüntüleyici** (`LogViewerController`) | Uygulama, senkronizasyon ve hata loglarını canlı okuyup incelemek. | • **UI:** `log_viewer_page.ui:4`<br>• **Ctrl:** `log_viewer_controller.py:65`<br>• **FS:** `logs/*.log` | Açılır kutudan seçilen log dosyasının son X satırını okur, regex ve tarih filtresi uygular, syntax renklendirmesi yapar. | Log sekmesine girildiğinde veya Yenile'ye basıldığında. | Admin / Sistem Yöneticisi. | **Eksiksiz & Aktif** |
| **Log Seviye Filtresi** (`levelFilterCombo`) | Yalnızca belirli önemdeki kayıtları ekranda tutmak. | • **UI:** `log_viewer_page.ui:154`<br>• **Ctrl:** `log_viewer_controller.py:161` | Seçilen seviyeye göre (`INFO`, `WARNING`, `ERROR`) satırları filtreler. | Combo değiştiğinde veya önayar butonuna tıklandığında. | Sistem Yöneticisi. | **Eksiksiz & Aktif** |
| **Log Metni Kopyala** (`copyButton`) | Ekranda filtrelenmiş log metnini panoya aktarmak. | • **UI:** `log_viewer_page.ui:257`<br>• **Ctrl:** `log_viewer_controller.py:213` | Görüntülenen tüm metni işletim sistemi panosuna (`QApplication.clipboard`) kopyalar. `ModuleCode.RAPORLAR` okuma yetkisi şarttır. | Butona tıklandığında. | Rapor yetkisine sahip kullanıcı. | **Eksiksiz & Aktif** |
| **Kullanıcı Etkileşim Günlüğü** (`InteractionLogViewerController`) | Kullanıcıların arayüzde yaptığı aksiyonları zaman çizelgesinde denetlemek. | • **UI:** `interaction_log_viewer_page.ui:4`<br>• **Ctrl:** `interaction_log_viewer.py:486`<br>• **FS:** `logs/interaction_audit.jsonl` | Oturum, eylem türü (Buton, Ekran, Hata, Menü) ve serbest metin araması ile tabloyu doldurur. Satıra çift tıklandığında ham JSON açar. | İkinci sekmeye tıklandığında (lazy loading). | Sistem Yöneticisi. | **Eksiksiz & Aktif** |
| **Etkileşim Günlüğünü Temizle** (`clearButton`) | Şişen etkileşim loglarını son oturum hariç temizlemek. | • **UI:** `interaction_log_viewer_page.ui:233`<br>• **Ctrl:** `interaction_log_viewer.py:553` | Admin kontrolü -> Kullanıcı teyidi -> Sudo şifre teyidi -> Son aktif oturum ID'si dışındaki satırları dosyadan siler. | Butona tıklandığında. | Yalnızca Süper Yönetici (Sudo). | **Eksiksiz & Aktif** |
| **Geliştirici Analiz Araçları** (`btnAnalyze`, `btnFullReport`, `btnShowRaw`) | Arayüz kullanılabilirlik ve genel test raporu üretmek. | • **UI:** `interaction_log_viewer_page.ui:219-245`<br>• **Ctrl:** `interaction_log_viewer.py:544-549` | Controller'da `setVisible(False)` ile gizlenmiştir. Bu analizler bağımsız `tools/RADPYS_Master_Tool.py` üzerinde çalışır. | Ana ekranda kapalıdır (ShowRaw satıra çift tıkla açılır). | Geliştirici / Test Mühendisi. | 🔒 **KODLA GİZLENMİŞ ARAÇLAR** |
| **Kriptografik Denetim İzi** (`AuditLogViewerController`) | KVKK ve NDK zorunlu sistem denetim kayıtlarını hash zinciriyle doğrulamak. | • **UI:** Programatik Widget (3. Sekme)<br>• **Ctrl:** `audit_log_viewer_controller.py:88`<br>• **FS:** `logs/kvkk_audit.jsonl` | Her kaydın `current_hash` değerini `prev_hash` ve payload ile SHA-256 üzerinden tekrar hesaplar. Zincir kopmuşsa kırmızı alarm verir. | Üçüncü sekmeye geçildiğinde. | Sistem Yöneticisi / Denetçi. | **Eksiksiz & Aktif** |
| **Beklenmeyen Hata Diyaloğu** (`CrashDialog`) | Yakalanmamış sistem çökmelerinde hata detayını kullanıcıya sunup raporlatmak. | • **UI:** `crash_dialog.ui:4`<br>• **Ctrl:** `crash_dialog.py:10`<br>• **Hook:** `main.pyw:69` | `sys.excepthook` tetiklendiğinde modal olarak açılır. Traceback metnini kopyalatır veya mail istemcisine yönlendirir. | Sistemde unhandled exception oluştuğunda. | Hata ile karşılaşan tüm kullanıcılar. | **Eksiksiz & Aktif** |

---

## C. Mantık, Kısıt Soruları ve Kesinleşen Kullanıcı Kararları

1. **Yedekleme ve Geri Yükleme Mantığı:**
   - **Şifreleme Standartı:** Yedekler `guvenlik.yedek_sifreleme_anahtari` anahtarı kullanılarak PBKDF2 (100.000 iterasyon) + AES akış şifrelemesi ile korunmaktadır.  
     ➔ **Karar / Onay:** Kılavuzda kırmızı uyarı kutusu (Warning) ile *"Yedekleme anahtarının güvenliği ve veritabanı ayarlarındaki anahtarın silinmemesi gerektiği, aksi takdirde eski şifreli arşivlerin açılamayacağı"* açıkça vurgulanacaktır.
   - **PostgreSQL Restore Sonrası Yeniden Başlatma:** Veritabanı geri yüklendikten sonra arayüz `QMessageBox.information` ile uygulamanın kapatılıp açılmasını önermektedir.  
     ➔ **Karar / Onay:** Kılavuzda *"Yedek yüklendikten sonra ekranların güncellenmesi ve sequence sayaçlarının tam oturması için programı derhal kapatıp açınız"* talimatı verilecektir.

2. **Veritabanı Sıfırlama (Fabrika Ayarları) Güvenlik Kilidi:**
   - Koddaki üç kademeli kilit:
     1. Rolün `admin` veya `superadmin` olması zorunluluğu,
     2. Diyalog kutusuna tam olarak büyük harflerle **"SIFIRLA"** yazılması,
     3. **Sudo Şifre Onayı** girilmesi.
     ➔ **Karar / Onay:** Bu üç aşamalı güvenlik prosedürü kılavuzda adım adım açıklanacak; sıfırlama anında işlem/hareket tabloları (`TRANSACTIONAL_TABLES`) silinirken; roller, program ayarları, departmanlar, unvanlar, tatil takvimi (`PRESERVED_TABLES`) ve `admin` hesabının mutlak olarak korunduğu net bir listeyle sunulacaktır.

3. **Hayalet Bileşenlerin Durumu (`btnExportUnencrypted` ve `btnKeyManager`):**
   - ➔ **Karar / Uygulama:** Her iki işlevsiz bileşen `db_maintenance_page.ui` XML dosyasından tamamen temizlendi; arayüz arındırıldı. Kılavuzda yer almayacaktır.

4. **Etkileşim Günlüğündeki Gizli Butonlar (`btnAnalyze`, `btnFullReport`):**
   - ➔ **Karar / Onay:** Kılavuzda bu geliştirici butonlarından bahsedilmeyecek; yalnızca Oturum Seçimi, İşlem Türü Filtresi, Arama, Sadece Hatalar ve Günlüğü Temizle (Sudo şifreli) alanları anlatılacaktır.

5. **Crash Dialog (Çökme Bildirimi):**
   - ➔ **Karar / Onay:** Beklenmeyen bir teknik hata durumunda açılan `CrashDialog` penceresinden traceback metnini kopyalama ve geliştirici ekibine (`radpys.iletisim@gmail.com`) önceden formatlanmış e-posta gönderme adımları acil durum prosedürü olarak kılavuza eklenecektir.

---

## D. Hibrit Arayüz Durumu

- 🖥️ **Masaüstü Ekranı (Desktop):**
  - `ui/pages/admin/system/db_maintenance_page.ui` -> `DBMaintenanceController` (Tam Fonksiyonel)
  - `ui/pages/admin/system/log_viewer_page.ui` -> `LogViewerController` (Tam Fonksiyonel)
  - `ui/pages/admin/system/interaction_log_viewer_page.ui` -> `InteractionLogViewerController` (Tam Fonksiyonel)
  - `ui/pages/crash_dialog.ui` -> `CrashDialog` (Tam Fonksiyonel)
- 📱 **Web & Mobil Portalı (`web_portal`):**
  - **Karşılık:** **YOK (Kapsam Dışı / Yalnızca Masaüstü)**
  - **Gerekçe:** PostgreSQL `pg_dump/pg_restore`, `VACUUM ANALYZE`, `REINDEX SCHEMA`, şema bütünlüğü, `TRUNCATE CASCADE` veritabanı sıfırlama, ham sistem logları ve işletim sistemi düzeyindeki çökme pencereleri kritik sistem altyapısıdır. Bu yetkiler yalnızca kurum içi ağda çalışan masaüstü yönetici kokpitine (`ui/controllers/admin/system/`) münhasırdır; web ve mobil portalda güvenlik gerekçesiyle hiçbir veritabanı bakım veya sıfırlama uç noktası (endpoint) açılmamıştır.

---

## E. Hedefli Ekran Görüntüsü Talebi

Kullanıcı kılavuzunda yer alacak en kritik pencereler:

1. **Pencere 1 — Veritabanı Bakım ve Yedekleme Ana Ekranı:**
   - **Dosya / Bileşen:** `ui/pages/admin/system/db_maintenance_page.ui` (`DBMaintenanceController`)
   - **Hedef Gösterim:** "Veritabanı Yedekle" ve "Dosyaları Yedekle" butonları, geçmiş yedekler tablosu (Yükle / Dışa Aktar / Sil aksiyonları), Sistem Bakım Araçları (VACUUM, Bütünlük Kontrolü, REINDEX) ve Tehlikeli Bölge (Veritabanını Sıfırla).

2. **Pencere 2 — Birleşik Log ve Denetim İzi Merkezi:**
   - **Dosya / Bileşen:** `ui/controllers/admin/system/log_kayitlari_controller.py` (`LogKayitlariController`)
   - **Hedef Gösterim:** 3 sekmeli yapı ("Tarihsel Sistem Günlükleri", "Kullanıcı Etkileşim Günlüğü", "KVKK / NDK Denetim İzi"), log seviye ve tarih filtreleri, renkli log sözdizimi ve SHA-256 kriptografik doğrulama durumu.
