# CHANGELOG

Tüm önemli değişiklikler bu dosyada kayıt altına alınacaktır.

## [4.1.2] - 2026-08-25

### Koruyucu Donanım (RKE) ve KKD Yönetim Merkezi, DIN 6857-1 Kalite Kontrol Muayenesi ve Akıllı Kodlama Motoru

- **Radyasyon Koruyucu Ekipman (RKE) & KKD Yönetim Merkezi:** `rke_envanter`, `rke_muayeneler` ve `rke_zimmet_hareketleri` tabloları ile kurşun önlük, tiroid, gonad, gözlük, eldiven ve paravan donanımlarının tam envanter takibi.
- **Akıllı Kodlama Motoru (`RkeKodGenerator`):** Departman ve ekipman türü tanımları öncelikli dinamik `RKE-[Tür]-[SıraNo]` (örn: `RKE-O-001`) ve `[AnaBilimDali]-[Birim]-[Tür]-[SıraNo]` kurumsal tekil kod üretimi.
- **DIN 6857-1 / IEC 61331-3 Skopi Muayene & Otomatik Karar Motoru:** Skopi/Floroskopi altında yapılan kalite kontrol testinde hasar bölgesi (Kritik/Non-Kritik) ve kusur alanına ($mm^2$) göre anlık `KULLANIMA_UYGUN`, `SARTLI_KULLANIM` veya `HEK_HURDAYA_AYIR` kararı üretimi.
- **Canlı KPI Kartları & QR Etiketler:** Muayenesi yaklaşanlar (≤30 gün), süresi dolanlar ve hurdaya ayrılanlar için anlık KPI kartları; 2D QR etiket yazdırma ve Excel/CSV toplu içe aktarma sihirbazları.

## [4.1.0] - 2026-08-22

### Tıbbi Cihaz Envanteri, NDK Lisans Takibi, 2D QR Etiketleme ve Mobil QR Hızlı Arıza Portalı

- **Tıbbi Cihaz Envanteri & 3'lü Hızlı Filtre:** `Tümü`, `Radyasyonlu (X-Ray)`, `Radyasyonsuz (MR/USG)` hızlı filtreleri, NDK lisansı, marka/model, seri no, tüp seri no ve garanti takibi.
- **Dinamik Yerel IP Algılamalı 2D QR Karekod Etiket Üretim Modülü (`CihazQrDialog`):** Cihazın üzerine yapıştırılacak karekod etiket üretimi ve yazdırma.
- **Web & Mobil Portal Entegre Hızlı Arıza Bildirimi (`CihazArizaView`):** Sahada telefon kamerasıyla QR okutulduğunda cihaz seçili arıza formunun açılması; biyomedikal teknik servis müdahale ve parça değişim takibi.
- **NDK Resmi Denetim Çizelgesi:** Sağlık Bakanlığı ve NDK resmi denetimlerine sunulan standart formatlı Excel denetim çizelgesi çıktısı.

## [4.0.2] - 2026-08-20

### Radyasyon Ortam Dozu Ölçümleri, İnteraktif Mimari Plan Krokisi ve SKS 6.1 Alan İzleme Sistemi

- **Masaüstü & Web İnteraktif Mimari Plan Krokisi:** Vektörel PDF ve PNG kat planlarında donanım hızlandırmalı sınırsız Zoom ve Pan desteği.
- **Mimari Plan Canlı Pinleri & Doz Girişi:** *Denetimli Alan*, *Gözetimli Alan* ve *Halka Açık Alan* eşiklerine sahip çift katmanlı parlayan canlı pinler; haritadan tek tıkla dedektör ($\mu Sv/h$) doz girişi.
- **SKS 6.1 SRG11.02 Resmi Excel Denetim Raporu:** Sağlık Bakanlığı kalite denetimlerine hazır tek tıkla resmi Excel rapor üretimi.
- **Web Portalı & Mobil Alan İzleme (`OrtamDozuView.tsx`):** Sahada tablet ve telefondan krokileri canlı izleme ve ölçüm kaydetme.

## [4.0.1] - 2026-08-18

### Hizmet İçi Eğitim Kataloğu, Çoktan Seçmeli Soru Bankası ve Online Sınav Motoru (LMS)

- **Zorunlu Periyodik Eğitim Kataloğu:** Video/PDF materyal yükleme ve departman personellerine toplu eğitim atama.
- **Sınav Soruları Havuzu (Soru Bankası):** Çoktan seçmeli A/B/C/D soru bankası, eğitimden kopyalama ve Excel'den soru aktarma.
- **Web Portalı Online Sınav Motoru:** Personellerin web ve mobilden doküman çalışıp sınava girmesi (%70 baraj), otomatik puanlama ve sertifikasyon.
- **Departman Eğitim Uyum Matrisi (Compliance Matrix):** Yasal geçerlilik süreleri ve teftiş denetim listeleri.

## [4.0.0] - 2026-08-16

### PostgreSQL 14+/16 Kurumsal Veritabanı Mimarisi, PWA Web Portalı, Evrensel Onay Diff View ve KVKK Kasası

- **PostgreSQL 14+/16 Kurumsal Mimarisi (`psycopg3`):** Çok kullanıcılı, yüksek eşzamanlılıklı ve ACID uyumlu ilişkisel veritabanı motoruna geçiş.
- **Mobil Ana Ekrana Yüklenebilir (Installable) PWA Web Portalı:** React + Vite + Tailwind mimarisiyle mobil uygulama benzeri çalışma deneyimi.
- **Görsel Diff Destekli Evrensel Onay Sistemi:** 5 onay kategorisi (İzinler, Nöbet Devirleri, Nöbet İstekleri, Nöbet Planları, Veri Değişiklikleri) ve eski/yeni verileri yan yana kıyaslayan onay paneli.
- **KVKK AES-256 Fernet Şifreli Evrak Kasası (`stored_files`):** Belgelerin PostgreSQL veritabanında şifreli depolanması ve KVKK Madde 11 Kişisel Veri İhraç Paketi (ZIP).

## [3.8.6.2] - 2026-08-10

### PySide6/PyQt Regresyon Test Düzeltmeleri, Türkçe Karakter Lookup Normalizasyonu ve Qt Asenkron Zamanlayıcı Güvenliği

#### PySide6 Sinyal, Slot & Import Düzeltmeleri

- **`QAction` İçe Aktarım Standartlaştırması:** `tests/test_pyside_buttons_regression.py` dosyasındaki hatalı `from PySide6.QtWidgets import QAction` içe aktarımı, PySide6 standartlarına uygun olarak `from PySide6.QtGui import QAction` şeklinde güncellendi.
- **Subwindow Ertelenmiş Silme (`deleteLater`) Test Uyumu:** `test_app_controller_subwindow_destroyed_connection` testinde `deleteLater()` çağrısı sonrası `destroyed` sinyalinin anında yakalanabilmesi için `QCoreApplication.sendPostedEvents(None, QEvent.Type.DeferredDelete)` işleyicisi eklendi.

#### Türkçe Karakterli Departman & Görev Yeri Eşleştirme (Lookup Normalizasyonu)

- **ASCII Dönüşüm Mantığı:** Excel aktarım işlemlerinde Türkçe karakterli departman/unvan isimlerinin (`Başhemşirelik` vb.) ASCII karşılıkları (`BASHEMSIRELIK`) ile hatasız eşleşebilmesi için `_clean_for_lookup_match` metodu ve `tests/test_import_department_resolution.py` testindeki dönüşüm haritası `ÇĞİÖŞÜçğıöşü` -> `cgiosucgiosu` ASCII normalizasyonuna kavuşturuldu.

#### Headless CI & Test Altyapısı İyileştirmeleri

- **Fallback `qtbot` Fixture'ı (`conftest.py`):** `pytest-qt` kütüphanesinin yüklü olmadığı headless CI/CD ortamlarında buton ve arayüz regresyon testlerinin toplanırken (`collection phase`) `fixture 'qtbot' not found` hatası vermesini engellemek üzere `tests/conftest.py` dosyasına dinamik fallback `qtbot` fixture'ı yerleştirildi.

#### Qt C++ Nesne Yaşam Döngüsü & Asenkron `QTimer` Güvenliği

- **Silinmiş C++ Nesne Koruması:** Diyalogların ve pencere bileşenlerinin kapatılmasından sonra çalışan asenkron `QTimer.singleShot` zamanlayıcılarının silinmiş C++ nesnelerine erişip `RuntimeError` (`libshiboken: Internal C++ object already deleted`) üretmesini önlemek için `TemplatesController`, `RoleFormController`, `UserFormController` ve `AuthPasswordChangeDialog` sınıflarına `shiboken6.isValid(self)` denetimleri ve `RuntimeError` istisna yakalayıcıları eklendi.

## [3.4.0] - 2026-07-21

### Demo Modu, Veritabanı Şifreleme ve Lisans Aktivasyonu Entegrasyonu

#### SQLCipher Veritabanı Şifrelemesi & Otomatik Geçiş (Auto-Migration)
- **Dosya Düzeyinde AES-256 Şifreleme:** `sqlcipher3` kütüphanesi entegre edilerek `radpys.db` veritabanı dosya düzeyinde AES-256 standardıyla şifrelendi. Şifresiz SQLite okuyucularla dosyanın açılması engellendi.
- **Düz Metin DB Otomatik Geçişi:** Mevcut şifresiz veritabanlarının, ilk açılışta veriler kaybolmadan arka planda otomatik olarak şifreli formata dönüştürülmesi (auto-migration) sağlandı.

#### Demo Sürüm Kısıtlamaları & Süre Aşımı Kontrolü
- **Zaman Kısıtı:** Kurulumdan itibaren 30 gün deneme süresi sınırı getirildi. 30 gün dolduğunda uygulama uyarı vererek açılışta kendini kapatır.
- **Kayıt ve Plan Sınırları:** Maksimum **15 aktif personel** ve **3 nöbet planı** limiti eklendi.
- **Toplu İthalat Denetimleri:** Excel/CSV üzerinden yapılan toplu personel ve nöbet (shift) ithalatlarında da 15 personel ve 3 nöbet planı limiti tam olarak denetlenmektedir.

#### Çevrimdışı (Offline) Lisans Aktivasyonu
- **Cihaz Kimliği (Machine ID):** Her bilgisayarın MAC/UUID bilgisine özel benzersiz cihaz kimliği (`RP-XXXX-XXXX-XXXX-XXXX`) üreten algoritma eklendi.
- **Lisans Doğrulama:** Cihaz kimliğine özel üretilen Lisans Anahtarları (`LK-XXXX-XXXX-XXXX-XXXX`) için yerel (offline) doğrulama sistemi eklendi.
- **Hakkında Aktivasyon Kartı:** Hakkında (`HakkindaDialog`) ekranına cihaz kimliğini kopyalama, lisans anahtarı giriş alanı ve lisansı aktifleştirme arayüzü entegre edildi. Doğrulama yapıldığında kilitler otomatik olarak açılır ve program Tam Sürüm olarak çalışır.

#### Asenkron Güncelleme Desteği (Update Checker)
- **Otomatik Sürüm Kontrolü & Sürüm Ayrıştırma (Split Updates):** Web sitenizdeki `version.json` dosyasını arka planda asenkron sorgulayan mekanizma kuruldu. Demo kullanıcılarının kritik yama düzeltmelerinden mahrum kalmaması amacıyla, güncelleme sorgusu lisans durumuna göre bölünmüştür. Demo kullanıcıları yalnızca `latest_demo_version` (kritik düzeltme) güncellemelerini alırken, Tam Sürüm kullanıcıları tüm yeni özellikleri (`version` alanı üzerinden) alabilmektedir.
- **Durum Çubuğu Bildirimi:** Yeni sürüm tespit edildiğinde durum çubuğunda (Status Bar) yeşil renkli, tıklanabilir indirme butonu belirmesi sağlandı.
- **Kayıpsız Kurulum (Inno Setup):** Güncellemelerde kullanıcının veritabanını (`radpys.db`) koruyan `radpys_installer.iss` paketleyici şablonu oluşturuldu.

## [3.3.0] - 2026-07-20

### Rapor Modülü Genişletme ve Dinamik Şablon Altyapısı

#### Dinamik Şablon ve Konum Eşleme (Dynamic Header Mapping)
- **Hatalı/Sabit Konum Sorununun Giderilmesi (Excel):** Şablon dosyasındaki (`.xlsx`) başlık satırını (row = `{{VERI}}` satırının bir üstü) okuyup normalize ederek veriyi otomatik olarak doğru başlığın altına eşleyen akıllı eşleme sistemi geliştirildi. Kullanıcı şablonda sütun sırasını değiştirse, bazı sütunları çıkarsa veya yeni veriler eklese dahi kod değişikliği yapılmasına gerek kalmaz; veriler otomatik olarak doğru sütuna yazılır.
- **Şablon Bozulmalarının Engellenmesi:** Şablon dosyalarını fiziksel olarak manipüle edip bozan eski yıkıcı "Güncelle" butonları ve kodları tamamen kaldırıldı; şablonlar salt-okunur kaynak haline getirildi.
- **Sütun Sıralama Arayüzünün Sadeleştirilmesi:** Şablon Ayarları ekranında karmaşıklık yaratan Yukarı/Aşağı sütun taşıma butonları (`btnMoveUp`, `btnMoveDown`) ve slot metotları `templates_page.ui` ve `templates_controller.py` dosyalarından tamamen silindi.
- **Çoklu Sayfa Şablon Kirliliği Düzeltildi (Bug Fix):** Nöbet Planı ve Hakediş dökümlerinde, ikinci sayfa kopyalanırken ilk sayfanın verilerinin yeni sayfaya taşması hatası giderildi. Sayfalar doldurulmadan önce boş şablondan klonlanıp oluşturulacak şekilde revize edildi.

#### Uzmanlık Rapor Alanlarının Genişletilmesi (Tüm Tablo Sütunları)
Rapordaki kısıtlamalar kaldırılarak veritabanındaki tüm anlamlı sütunlar dışa aktarıma dahil edildi:
- **Sağlık Muayene Raporu:** Göz, Dahiliye, Dermatoloji muayene tarihleri ile muayene onay durumları eklenerek toplam **22** sütuna genişletildi.
- **Eğitim Durum Raporu:** Eğitim onay durumu (`onay_durumu`) kolonu eklenmiş ve subquery filtresi kaldırılarak onay bekleyen veya reddedilen tüm eğitimlerin dökümde listelenmesi sağlandı.
- **Dozimetre Ölçüm Raporu:** Laboratuvara gönderim/sonuç geliş tarihleri, limit aşımı tipi, bildirim durumu ve rapor no gibi alanlarla toplam **21** sütuna genişletildi.
- **İzin Bakiye Raporu:** Yıllık ve Şua izinleri için devir ve dondurulan gün kırılımları da eklenerek toplam **14** sütuna çıkarıldı (ayrıca Şua izin kodu `"SUA"` yerine veritabanı ile tam uyumlu `"SHUA"` olarak düzeltildi).

#### Yeni 5. Rapor Türü ve Şablonlar
- **Kimlik ve İletişim Bilgileri Raporu:** Personelin doğum tarihi/yeri, cinsiyeti, medeni hali, anne/baba adı, telefon/e-posta adresleri, il/ilçe bilgileri, işten çıkış tarihi/nedeni, nöbet ve fazla mesai durumlarını listeleyen yepyeni bir rapor türü sihirbaza eklendi.
- **Merkezi Şablonlar Dökümü:** Dökümü alınabilen tüm raporlar için örnek şablon dosyaları (`.xlsx` ve kurumsal temiz tasarımlı `.docx`) oluşturularak `data/templates/` dizinine yerleştirildi.

#### Altyapı, Performans ve Güvenlik Düzeltmeleri
- **4 Yeni Dinamik Sağlayıcı (FieldProvider):** İsteğe bağlı eklenebilen `calisma_kisiti_detay`, `belge_listesi`, `dozimetre_atama_detay` (SQL JOIN hatası ve olmayan boolean `aktif` filtresi giderildi) ve `izin_gecmisi_son` dynamic sağlayıcıları sisteme entegre edildi.
- **İşlem (Transaction) Atomikliği (Bug Fix):** `save_template_field_settings` metodunda `conn.execute` kullanılarak veritabanı silme ve ekleme işlemlerinin tam atomik (hata durumunda rollback olabilen) çalışması sağlandı.
- **SQLite Parametre Limiti Güvenliği:** 999 parametre limitini aşan dökümlerde SQLite'ın çökmesini engellemek için `_fetch_in_chunks` üzerinden parametreler 900'lük gruplar halinde parçalanıp çekilecek şekilde güncellendi.
- **Çift Çağrı Sütun Tekrarlama Engeli:** Aynı RaporPaketi ile birden fazla kez dışa aktarım tetiklendiğinde sütun tanımlarının mükerrer eklenmesi engellendi.
- **Zenginleştirici (Enrichment) Hata Güvenliği:** Dinamik alan zenginleştirme (`_enrich_optional_fields`) olası FieldProvider hatalarını yakalamak için try-except bloğu içine taşındı.

## [3.2.2] - 2026-07-19

### Nöbet Ayarları Senkronizasyon ve Kısıt UI Düzeltmeleri

#### Arayüz ve Form İyileştirmeleri

- **Ortak Onay Kutusu Veri Ezme Hatası Düzeltildi (Bug Fix):** Nöbet Genel Ayarları sekmesindeki "Kaydet" butonu tıklandığında, Birim Ayarları sekmesinde seçili olan birimin takvim kural onay kutuları (`weekendWorkCheck`, `holidayWorkCheck`, `combine24hCheck`) durumlarının global varsayılanların üzerine yazılması hatası giderildi. Bu onay kutuları genel sekmedeki kaydetme payload'undan çıkarıldı.
- **Birim Kuralları Özel Kaydetme Butonu:** Birim Kuralları sekmesine programatik olarak "Birim Kurallarını Kaydet" butonu (`btnSaveUnitRules`) eklendi. Stones koyu temasına uygun olarak stilize edilen bu buton sayesinde "Genel (Birim Bağımsız)" varsayılanları veya birime özel takvim kuralları artık bağımsız olarak tek bir sekmeden kaydedilebilmektedir.
- **Slot Kaydetme/Güncelleme Decoupling:** Birim slotu ekleme (`save_unit_slot`) ve güncelleme (`update_unit_slot`) metotlarında yer alan ve her slot işleminde genel parametrelerin de dolaylı yoldan kaydedilmesine yol açarak senkronizasyon hatalarına sebep olan `self.main._save_parameters()` tetikleyicileri kaldırıldı.
- **Kısıt Tipi Combobox Seçim Hatası Düzeltildi (Bug Fix):** Yasal Kısıtlar tablosundan bir kısıt seçildiğinde açılır kutudaki (`ruleTypeCombo`) değerin eşleşmeyerek boş kalması hatası giderildi. Form doldurulurken `kural_tipi_ui` yerine doğrudan veritabanındaki ham `kural_tipi` değeri kullanılarak tam eşleşme sağlandı.
- **Nöbet Taslak Yedeği Geri Yükleme Arayüzü:** Otomatik planlama öncesinde otomatik olarak alınan JSON yedeklerin (`data/backups/nobet/plan_{plan_id}_*.json`), çizelge detay ekranına eklenen **"Yedekten Taslak Yükle"** butonu (`btnRestoreBackup`) aracılığıyla kolayca geri yüklenebilmesi sağlandı.
- **Otomatik Yedek Temizliği:** Disk kirliliğini önlemek adına, bir nöbet planı **Yayınlandığında**, **Arşivlendiğinde** veya **Silindiğinde**, o plana ait geçmişte otomatik alınmış tüm geçici `.json` yedek dosyaları diskten otomatik olarak silinecek şekilde `nobet_plan_service.py` (`set_plan_status` ve `delete_plan` fonksiyonları) güncellendi.

## [3.2.1] - 2026-07-18

### Nöbet Talep Sistemi Refaktörü (Nöbet Yazma/Yazmama + Öncelik Entegrasyonu)

#### Algoritma ve Kısıt Motoru (Scheduler)

- **Nöbet Yazma (Mazeret) Talepleri Entegre Edildi:** Nöbet planlama motoruna (`nobet_scheduler.py`) onaylı `nobet_yazma` (nöbet yazılmasın) taleplerinin kontrolü eklendi. Strict (sert kısıtlar) aşamasında bu tarihlerde personele nöbet verilmesi engellenir.
- **Dinamik Kısıt Esnetme:** Kadro yetersizliği durumunda relaxed (fallback) aşamasında, önceliği `4` veya `5` (Çok Yüksek / Kritik) olan `nobet_yazma` talepleri kesinlikle korunurken, 1-3 öncelikli mazeretlerin gerekirse esnetilebilmesine izin verildi.
- **Nöbet Yazılma (İstek) Önceliklendirmesi:** Onaylı `nobet_yaz` (nöbet yazılsın) talebi olan personeller, planlama motorundaki aday sıralama aşamasında talep öncelik derecelerine göre (1-5, azalan sırada) en ön sıraya yerleştirilerek otomatik atamada önceliklendirildi.
- **Birleştirilmiş Nöbetlerde Mazeret/İstek Kontrolleri Eklendi (Bug Fix):** Algoritmanın 12 saatlik nöbetleri birleştirerek 24 saatlik nöbet olarak atadığı Phase 1 (Combined shifts) aşamasında approved `nobet_yazma` ve `nobet_yaz` kısıtlarının tamamen bypass edilmesine neden olan mantıksal hata giderildi. Artık birleştirilmiş nöbetler atanırken de mazeret ve istek kısıtları strict olarak uygulanmaktadır.
- **SQLite3 Row .get() AttributeError Hatası Düzeltildi (Bug Fix):** `get_sifting_request` fonksiyonunda veritabanından gelen `sqlite3.Row` nesnesi `dict(row)` olarak Python sözlüğüne dönüştürülerek, kısıt gevşetme (relaxed) ve sıralama (sort_key) aşamalarında yapılan `.get()` çağrılarının hata fırlatması engellendi.

#### Arayüz Sadeleştirmesi ve Veri Girişi

- **İstek Tipi Seçeneklerinin Temizlenmesi:** Ayarlar altındaki Personel İstekleri sekmesinden veritabanı validasyonuyla çelişen ve işlevsiz kalan "İzinli" ve "Kongre" tipleri kaldırıldı; geriye kalan 5 geçerli istek tipi ("Nöbet Yazılmasın", "Nöbet Yazılsın", "Eğitim", "Nöbet Muafiyeti", "Fazla Mesai Talebi") listelenecek şekilde form arayüzü sadeleştirildi.
- **Tarih Seçimi Otomasyonu:** "Belirli Bir Tarih Seç" onay kutusu gizlendi. Tarih gerektiren `nobet_yazma`/`nobet_yaz` tiplerinde tarih aralığı zorunlu kılınırken, tarih gerektirmeyen diğer tiplerde tarih giriş alanları otomatik gizlenecek şekilde form tasarımı dinamikleştirildi.
- **İstek Tipi Haritası Güncellendi (Temizlik):** `nobet_ayarlar_personel_istekleri_tab.py` üzerindeki `istek_tipi_map` haritasından veritabanında kaydı bulunmayan ve kaldırılan `izinli` ve `kongre` tipleri temizlendi.

#### Lite Sürüm Temizlik ve İyileştirmeler (Plan Uygulama Durum Raporu Düzeltmeleri)

- **Kod Kalıntıları Temizlendi:** `nobet_service.py` içerisindeki eski `list_nobet_agirliklari`, `upsert_nobet_agirliklari` ve `delete_nobet_agirliklari` facade metot köprüleri kaldırıldı.
- **Onay Bekleyen Görevler Temizliği:** `onay_bekleyen_gorevler_controller.py` içinden artık kullanılmayan `kalite_dokumanlari` ve `hizmet_ici_egitimler` sekmelerinin yükleme, yenileme ve isim harita referansları tamamen silindi.
- **Varsayılan Rol Yetkileri Düzenlendi:** `role_repository.py` içerisindeki default yetki tanımlarından yayından kaldırılan `kalite_dokumanlari` ve `hizmet_ici_egitim` izinleri çıkartılarak veritabanına gereksiz yetki satırı eklenmesi engellendi.
- **Admin Bypass Belge Referansı:** `nobet_devir_service.py` içindeki admin devir onay bypass kod bloğuna `Kullanim_Kilavuzu.md` referanslı tasarım kararı açıklama yorumu eklendi.

#### Lite Dönüşümü Sonrası Ölü Kod Kalıntıları Temizliği (Ölü Kod Raporu Kararları)

- **Nöbet İstekleri Onay Akışı Tamamen Kaldırıldı:** `nobet_plan_onizleme_controller.py` dosyasından onaylama/reddetme sağ-tık context menüsü ve ilişkili metotlar kaldırıldı. Ayrıca `nobet_settings_service.py` içerisinde programatik eklemelerde `onay_durumu` varsayılan değeri `"Beklemede"` yerine `"Onaylandi"` yapıldı.
- **Ayarlar Ekranından Ölü Kod Temizliği:** `nobet_ayarlar_personel_istekleri_tab.py` içindeki gizlenmiş olan `approve_request` ve `reject_request` metotları ile bunların `.clicked.connect` sinyal bağlantıları tamamen temizlendi.
- **Onay Bekleyen Görevler Ekranından Ölü Kod Temizliği:** `onay_bekleyen_gorevler_controller.py` içerisindeki gizlenen Nöbet İstekleri sekmesine ait `_load_nobet_istekleri`, `_on_istek_selection_changed`, `_approve_istek` ve `_reject_istek` metotları ve tüm sinyal bağlantıları silinerek gereksiz veritabanı sorguları kaldırıldı.
- **İngilizce Kullanım Kılavuzu Güncellendi:** `User_Guide_EN.md` dosyasından Hizmet İçi Eğitim (Section 12) ve Kalite Dokümanları (Section 13) modüllerini anlatan tüm kısımlar çıkarılarak renumbering yapıldı ve Türkçe kılavuzla bölüm uyumluluğu sağlandı.

#### Sihirbaz Hızlı Talep Girişi

- **Hızlı Talep Ekleme Penceresi:** Nöbet planlama sihirbazı önizleme adımına koordinatörün sistemden çıkmadan hızlıca mazeret, istek veya fazla mesai limiti tanımlayabilmesini sağlayan "Hızlı Talep Ekle" butonu dynamically eklendi.
- **Entegre Talep Kaydı (`NobetHizliIstekDialog`):** Planlama sihirbazından eklenen isteklerin sadece bu plana uygun dönem içi tarihleri kabul etmesi ve eklenen tüm talepleri doğrudan **Onaylandı** statüsünde kaydetmesi sağlandı.
- **Arayüz/Denetleyici Ayrımı (UI Separation):** `NobetHizliIstekDialog` arayüz tasarımı, proje mimarisi standartlarına uygun olarak kod içerisinden arındırılarak `nobet_hizli_istek_dialog.ui` XML dosyasına taşındı. Denetleyici `nobet_hizli_istek_dialog.py` sadece bu arayüzün dinamik veri atamalarını ve sinyal/slot bağlantılarını yönetecek şekilde güncellendi.

## [3.2.0] - 2026-07-18

### Nöbet Modülü Bölüm 2 Refaktör ve Optimizasyonları

#### Arayüz ve Form İyileştirmeleri

- **Kısıt Hiyerarşisi Bilgi Etiketi:** `nobet_temel.ui`, `nobet_birim_kural.ui` ve `nobet_gelismis.ui` formlarının en üstüne kısıtların öncelik sırasını ("Birim Kuralları > Vardiya Kısıtları (Birim & Sınıf Bazlı) > Temel Ayarlar") gösteren bilgi etiketleri (`hierarchyLabel`) eklendi.
- **Yasal Kısıtlar Sekmesinin Yeniden Adlandırılması:** Arayüzde yer alan "Yasal Kısıtlar" etiketleri "Vardiya Kısıtları (Birim & Sınıf Bazlı)" olarak güncellendi ve bu tabın başlığı da buna göre değiştirildi.
- **Gün Kısıtı Combobox Entegrasyonu:** Birim Kuralları tabına `slotGunKisitiCombo` eklenerek, vardiya türlerinin her gün, hafta içi veya hafta sonu/tatil olarak çalıştırılabilmesi sağlandı.
- **Planlama Sonuç Bildirim Alanı:** Nöbet detay çizelgesinin alt kısmına otomatik planlama bittiğinde detaylı atanan/boş kalan slot özetini gösteren dinamik bir sonuç paneli (`schedulerResultLabel`) eklendi.

#### Algoritma ve Kısıt Motoru (Scheduler)

- **Optimistic Concurrency (İyimser Eşzamanlılık):** `set_plan_status` metodunda plan durumu güncellemelerine yarış durumlarını önlemek adına optimistic concurrency check (`onay_durumu IS ?`) eklendi.
- **Atıl Fazla Mesai Kodlarının Temizliği:** Fazla mesai politikaları backend ve veritabanı ayarlarından tamamen kaldırılarak sadece `personel_istek_max_saat` limitine odaklanıldı.
- **Optimizasyon İterasyon Sınırı Uyarısı:** Optimizasyon döngüsünün sessizce kesilmesini önlemek amacıyla `while ... else` yapısı eklenerek maksimum iterasyon limitine ulaşıldığında kullanıcıya uyarı iletilmesi sağlandı.

#### Hata Giderme

- **SQLite3 Row get() Hatası Giderildi:** Otomatik planlama sırasında departman ayarlarını okurken `sqlite3.Row` nesnesinde `.get()` çağrısı yapılmasından kaynaklanan `AttributeError` hatası, departman kaydının sözlüğe (`dict(dep_row)`) dönüştürülmesiyle giderildi.
- **Traceback Loglama Desteği:** `on_finished` slotlarında fırlatılan Exception nesnelerinin traceback çıktılarının log dosyalarına doğru biçimde aktarılması sağlandı (`exc_info=res`).

## [3.1.0] - 2026-07-18

### Nöbet Modülü Bölüm 1 İyileştirmeleri ve Form/Girdi Optimizasyonları

#### Arayüz ve Form Düzenlemeleri

- **Birim Kuralları UI Temizliği (`nobet_birim_kural.ui`):** Mükerrer kısıt girişlerini önlemek adına, `maxConsecutiveInput`, `minRestInput`, `dailyMaxHourInput`, `weekendMaxInput`, `countWeekendAsHolidayCheck`, `holidayPriorityInput`, `nightPriorityInput` ve bu alanların etiketleri fiziksel XML kodlarından tamamen silindi.
- **Fazla Mesai Politikası (`fm_off`):** Fazla mesai muafiyet seçeneği, Nöbet İstekleri tabından kalıcı olarak **Personel Kısıtları** sekmesine (`pcFMOff` checkbox'ı ile) taşındı. `personeller.fm_off` kolonuna doğrudan bağlanarak anlık güncelleme yapması sağlandı.
- **Kısıt Ağırlıkları Tabının Kaldırılması:** Ağırlık yönetimi sekmeleri ve sol menüdeki "Kısıt Ağırlıkları" seçeneği (`nobet_kisit_agirlik.ui` ve ilgili kontrolörler) tümüyle kaldırılarak sistem sadeleştirildi.
- **Arama/Filtreleme Özelliği:** Personel Talepleri ve Personel Kısıtları sekmelerindeki personel isim seçme kutuları (`prPersonCombo` ve `pcPersonCombo`) `setEditable(True)` yapıldı ve harf duyarsız arama moduna (`MatchContains`) geçirilerek filterlenebilir yapıldı.
- **Vardiya Otomatik Zaman/Süre Hesaplayıcı:** Vardiya tanımlama alanındaki Başlangıç Saati, Süre (Saat) ve Bitiş Saati kontrolleri birbirine akıllı sinyallerle bağlandı:
  - Başlangıç veya Süre değiştiğinde Bitiş Saati otomatik güncellenir.
  - Bitiş Saati değiştiğinde Süre otomatik hesaplanır (ertesi güne sarkan nöbet farkı da dahil).
  - Form verileri yüklenirken veya temizlenirken sonsuz tetikleme döngülerini önlemek adına kilit mekanizması eklendi.

#### Algoritma ve Kısıt Motoru (Scheduler) Entegrasyonları

- **Yaş/Kıdem Yasal Muafiyet Kapsamı (Seçenek B):** Nöbet Temel Ayarlar sekmesine yaş ve kıdem muafiyetinin kapsamını kontrol eden `exempNightCheck` (Gece Muafiyeti) ve `exempWeekendCheck` (Hafta Sonu Muafiyeti) kontrol kutuları yerleştirildi. Nöbet scheduler planlama motoru, bu personelleri tamamen planlamadan çıkarmak yerine, tercihlerine göre gece veya hafta sonu nöbetlerine atamayı engelleyecek ancak uygun hafta içi gündüz nöbetlerinde çalıştıracak şekilde revize edildi.
- **Tekil Kısıt Hiyerarşisi:** `nobet_scheduler.py` üzerindeki limit parametreleri için veritabanı kısıt tablosunu (`nobet_kisitlari`) birinci öncelik, departman ayarlarını ikinci öncelik ve global ayarları son çare fallback olarak okuyan 3-seviyeli dinamik öncelik mekanizması kuruldu.
- **Ayrı Hafta Sonu ve Bayram Kuralları:** Kısıt motorunda hafta sonu nöbetleri (HS) ve resmi bayram tatilleri birbirinden tamamen ayrı değerlendirilerek nöbetlerin hatalı atanması engellendi.

#### Veritabanı Değişiklikleri ve Seed Kayıtları

- **Şema Göçü (Migration):** `nobet_ayarlari` tablosuna `muafiyet_gece_mi` ve `muafiyet_haftasonu_mi` kolonları ekleyen migration dosyası oluşturuldu.
- **Kısıt Tohumları (Seeds):** Hafta Sonu Nöbet Dengesi (`hafta_sonu_dagilim` = 4) ve Bayram Nöbet Dengesi (`bayram_dagilim` = 2) yasal kısıt kuralları baseline şemaya ve mevcut aktif veritabanına varsayılan yasal kısıt olarak eklenerek otomatik aktifleştirildi.

## [3.0.0] - 2026-07-17

### RADPYS V3.0 Lite Scope Dönüşümü

Bu sürümle birlikte RADPYS, yerel/ağ paylaşımı ortamlarında (Dropbox, SMB, vb.) SQLite'ın çok kullanıcılı eşzamanlı yazma kısıtlamalarından kaynaklanan veri çakışmalarını önlemek amacıyla **Lite** kapsamına dönüştürülmüştür. Ağır eşzamanlı yük getiren portal modülleri kaldırılmış ve operasyonel iş akışları sadeleştirilmiştir.

#### Kaldırılan Modüller ve Arayüzler

- **Hizmet İçi Eğitim Portalı (LMS + Sınav Sistemi)**: Sınav atama, doküman okuma, PowerPoint/Video oynatıcılar ve otomatik sertifika üretici de dahil olmak üzere modüle ait tüm servis, repository, arayüz (.ui) ve denetleyici (controller) dosyaları tamamen kaldırıldı.
- **Kalite Dokümanları Okuma Portalı**: Doküman ekleme, okuma takibi, revizyon önerileri ve dahili PDF/Docx okuyucuları ile ilişkili tüm dosyalar temizlendi.
- **Görüntüleyici ve Medya Oynatıcılar**: PowerPoint sunum okuyucu (`pptx_viewer_dialog`), video oynatıcı (`video_viewer_dialog`), PDF okuyucu (`pdf_viewer_dialog`) ve Word okuyucu (`docx_viewer_dialog`) kaldırıldı.
- **Dashboard (Gösterge Paneli) Hub Temizliği**: Gösterge paneli hub yapısı güncellenerek Eğitim sekmesi, Eğitim Özet Gösterge Paneli ve bu panelin backend servis bağlantıları tamamen kaldırıldı. Sekmeler Genel Bakış, Nöbet ve Olaylar olarak yeniden yapılandırıldı.
- **Komut Paleti Güncellemesi**: Komut paletindeki kalite belgesi arama ve doğrudan belge açma eylemleri kaldırılarak olası SQLite kilitlenmeleri engellendi.

#### Sadeleştirilen İş Akışları

- **İzin Modülü**: Çok adımlı onay zinciri (Beklemede → Birim Onaylı → Onaylandı) devre dışı bırakıldı. Yeni izin talepleri doğrudan **Onaylandı** (`STATUS_ONAYLANDI`) durumunda kaydedilir. İzin listesi ekranındaki onaylama ve reddetme butonları gizlendi.
- **Nöbet Personel İstekleri**: Personel istek onay zinciri kaldırıldı. Girişi yapılan istekler doğrudan **Onaylandı** durumunda oluşturulur. İstek yönetimindeki onay/red butonları gizlendi. Personel profili altındaki Nöbet İstekleri sekmesi tamamen kaldırıldı.
- **Evrensel Onay Sistemi (Onay Bekleyen Görevler)**: İzinler, Nöbet İstekleri ve Veri Onay sekmeleri gizlendi. Merkezi onay panelinin varsayılan açılış sekmesi **Nöbet Devir** (index 1) olarak değiştirildi.

#### Veritabanı ve Şema Güncellemeleri

- `hizmet_ici_egitimler`, `personel_hizmet_ici_egitim_takip`, `hizmet_ici_egitim_sorulari`, `personel_hizmet_ici_egitim_gecmisi`, `kalite_dokumanlari`, `personel_kalite_okuma_takip` ve `kalite_dokuman_onerileri` tabloları ve bunlara ait tüm indeksler `schema.sql` baseline dosyasından tamamen çıkarıldı.
- Bildirim tipi kontrol kısıtından (CHECK constraint) `hizmet_ici_egitim` ve `kalite_dokumani` kaldırıldı.
- `schema.txt` yedek referans dosyası yeni SQL baseline şemasıyla senkronize edildi.
- Yerel `data/radpys.db` veritabanı sıfırlanarak temiz şema baseline dosyasından sıfırdan yeniden oluşturulması sağlandı.

#### Hata Giderme ve İyileştirmeler

- **Dil Dosyası Yükleme Sorunu**: `translation_service.py` içerisinde veritabanından dil tercihini sorgularken `settings_service` üzerindeki hatalı `get_string` çağrısı, doğru olan `get_setting` ile değiştirildi. Böylece arayüz dilinin İngilizce veya Türkçe olarak seçilmesinde oluşan sessiz çökme (hata yutma) giderildi.
- **Giriş Sayfası Yerelleştirmesi**: Giriş ekranı yapıcı metoduna dil çevirilerini uygulayan tetikleyici eklenerek, login penceresinin sistem ayarlarındaki dile göre otomatik olarak çevrilmesi (örneğin İngilizce) sağlandı.
- **Arayüz Kontrolü**: Arayüz şablonlarında (`app_window.ui`) yer alan ancak artık işlevsiz olan `btnHizmetIciEgitim`, `btnKaliteRead`, `btnEgitimYonetimi` butonları ana pencere yüklenirken programatik olarak gizlendi.
- **SideBar Başlık Yerelleştirmesi**: `SideBar` (`QToolBox`) altındaki sekme başlıklarının (PERSONEL, KALİTE YÖNETİMİ, YÖNETİM) dil dosyalarına göre değişmeme sorunu giderildi. `translation_service.py` içerisine hiyerarşik `QToolBox` tespiti ve `setItemText` çağrısı desteği eklenerek tab isimlerinin dinamik olarak tercüme edilmesi sağlandı. `en.json` ve `tr.json` dosyalarına ilgili sekmeler için (`page`, `page_2`, `page_3`) dil karşılıkları eklendi.
- **Form/Diyalog Başlıklarının Yerelleştirilmesi (setWindowTitle)**: Python denetleyicileri ve alt pencereler tarafından sert kodlanmış Türkçe karakter dizileriyle atanan pencere ve form başlıklarının (`setWindowTitle`) dil seçimine göre değişmeme sorunu giderildi. `main.pyw` dosyasında uygulama başlangıcında `QWidget.setWindowTitle` üzerine evrensel bir patch (monkey-patch) enjekte edilerek, atanan tüm başlıkların çalışma zamanında çeviri motorundan geçirilmesi sağlandı. Çeviri veritabanına (`translation_service.py`) 40'tan fazla ana form başlığı eklenerek dinamik dönüşüm sağlandı.
- **Dil Dosyaları Temizliği**: Artık kullanılmayan eğitim/kalite ekranlarının tüm çeviri anahtarları `en.json` ve `tr.json` dosyalarından tamamen kaldırıldı.
