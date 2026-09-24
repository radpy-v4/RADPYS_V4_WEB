# Keşif Raporu: Modül 19 — Cihaz Arıza, Bakım ve Kalite Kontrol (QC) Takibi (19_cihaz_ariza_bakim_ve_kalite_kontrol_qc)

**Tarih:** 2026-09-24  
**Karmaşıklık Seviyesi (Tier):** TIER 2 (Operasyonel İş Akışı & Güvenlik Kilitleri)  
**İncelenen Kod Tabanı:**
- UI Tasarım Dosyaları:
  - `ui/pages/cihaz/cihaz_ariza_page.ui` (Cihaz Arıza ve Onarım Ana Ekranı)
  - `ui/pages/cihaz/cihaz_ariza_bildir_dialog.ui` (Yeni Arıza Bildirim Diyaloğu)
  - `ui/pages/cihaz/cihaz_ariza_coz_dialog.ui` (Teknik Servis Müdahale & Çözüm Formu)
  - `ui/pages/cihaz/cihaz_qc_page.ui` (Cihaz Kalite Kontrol & Kalibrasyon Ana Ekranı)
  - `ui/pages/cihaz/cihaz_qc_dialog.ui` (Yeni QC / Kalibrasyon Kayıt Formu)
- Controller Dosyaları:
  - `ui/controllers/cihaz/cihaz_ariza_controller.py` (`CihazArizaController`, `CihazArizaBildirDialogController`, `CihazArizaCozDialogController`)
  - `ui/controllers/cihaz/cihaz_qc_controller.py` (`CihazQcController`, `CihazQcDialogController`)
  - `ui/controllers/cihaz/cihaz_bakim_controller.py` (`CihazBakimController` -> `CihazQcController` mirası)
  - `ui/controllers/app_controller.py` (`open_cihaz_ariza_page`, `open_cihaz_qc_page`)
- Servis Katmanı:
  - `app/services/cihaz/cihaz_service.py` (`report_ariza`, `resolve_ariza`, `list_arizalar`, `get_ariza_kpi_summary`, `add_qc_record`, `list_qc_records`, `get_qc_kpi_summary`, `lock_cihaz_due_to_qc_failure`, `get_kayitli_servis_firmalari`, `get_qc_yapan_kurumlar`, `get_aktif_personeller`)
  - `app/services/system/document_service_db.py` (KVKK Evrak Kasası AES-256 PDF QC Rapor Saklama)
  - `app/services/system/export_service.py`
- Veri Erişim Katmanı (Repository):
  - `app/infrastructure/db/repositories/cihaz_repository.py` (`list_arizalar`, `create_ariza`, `resolve_ariza`, `get_ariza_kpi_summary`, `list_qc_records`, `create_qc_record`, `get_qc_kpi_summary`, `get_next_ariza_code`, `update_cihaz_durum`)
- Veritabanı Tabloları:
  - `cihaz_arizalar` (Arıza kayıtları, müdahale, yedek parça, tüp değişimi, servis firması)
  - `cihaz_kalite_kontrolleri` (Periyodik QC, zırhlama, kalibrasyon, geçerlilik, test sonuçları)
  - `cihazlar` (Cihaz statüsü 'Aktif' / 'Arizali', güncel tüp seri numarası takibi)
  - `stored_files` (KVKK uyumlu AES-256 şifreli PDF kalite kontrol ve kalibrasyon raporları)
  - `personeller`, `departmanlar`
- Web Portal Entegrasyonları:
  - `web_portal/src/routes/cihaz.routes.ts` (`GET /api/arizalar`, `POST /api/arizalar`, `PUT /api/arizalar/:id/coz`)
  - `web_portal/src/components/CihazArizaView.tsx` (Mobil saha arıza bildirim konsolu, 6 semptom kategorisi, QR okuma, çözümleme akışı)

---

## A. Modülün Özeti ve Görevleri

**Cihaz Arıza, Bakım ve Kalite Kontrol (QC) Modülü**; radyoloji, nükleer tıp ve radyoterapi kliniklerinde kullanılan iyonlaştırıcı radyasyon yayan ve medikal görüntüleme cihazlarının teknik arıza bildirimlerini, bakım süreçlerini ve yasal kalite kontrol (QC) / kalibrasyon döngülerini entegre olarak yöneten operasyonel güvenlik sistemidir.

### Koddan Tespit Edilen Temel İş Akışları:

1. **Otomatik Cihaz Durum Senkronizasyonlu Arıza Bildirimi (`CihazArizaBildirDialogController`):**
   - Kullanıcı arızalanan cihazı seçer, aciliyet derecesini (*Düşük, Normal, Yüksek, Acil*) belirler, bildiren personeli seçip arıza tanımını girer.
   - Sistem arka planda `ARZ-YYYY-XXX` formatında benzersiz ardışık arıza takip kodu üretir (`get_next_ariza_code`).
   - Kayıt tamamlandığı anda cihazın envanterdeki ana durumu otomatik olarak `'Arizali'` statüsüne geçirilir (`cihazlar.durum = 'Arizali'`).

2. **Kapsamlı Teknik Servis Müdahalesi ve X-Işını Tüp Değişimi Çözümlemesi (`CihazArizaCozDialogController`):**
   - Açık arıza için servis firması (veya kurum içi biyomedikal/teknik birim), servis rapor no, yapılan teknik işlem ve değişen parçalar girilir.
   - **X-Işını Tüp Değişimi Entegrasyonu:** Eğer müdahalede X-ışını tüpü değiştirilmişse (`chkTupDegisimi` işaretlenip `txtYeniTupSeriNo` girildiğinde), sistem arızayı `'Tamamlandi'` olarak kapatırken eşzamanlı olarak cihazın künyesindeki `cihazlar.guncel_tup_seri_no` alanını otomatik olarak yeni seri numarasıyla günceller.
   - Arıza çözüldüğünde cihazın durumu tekrar otomatik olarak `'Aktif'` (Çalışıyor) durumuna döner.

3. **QC Test Takibi ve 3 Kademeli Renkli Erken Uyarı Matrisi (`CihazQcController`):**
   - Cihazların *Günlük QC, Aylık QC, Yıllık Kalibrasyon, Zırhlama Testi, Periyodik Bakım, Dozimetrik Doğrulama* testleri takip edilir.
   - Sonraki test tarihine kalan gün (`sonraki_kontrol - CURRENT_DATE`) hesaplanarak renk kodlaması yapılır:
     - **Kırmızı:** Süresi Dolan (< 0 gün / `abs(kalan)` gün geçti).
     - **Turuncu / Amber:** Yaklaşan (0 - 30 gün kaldı).
     - **Yeşil:** Geçerli (> 30 gün kaldı).
   - Test sonuçları renk kodları: Uygun (Yeşil), Şartlı Uygun (Turuncu), Uygun Değil (Kırmızı), İşlem Devam Ediyor (Gri).

4. **Klinik Güvenlik Emniyet Kilidi — QC Başarısızlığı Karantinası (RED-UI-CIHAZ-01):**
   - Yeni bir QC/kalibrasyon kaydı `'Uygun Değil'` veya `'Uygunsuz'` sonucuyla kaydedildiğinde sistem operatöre acil güvenlik uyarısı (`QMessageBox.warning`) açar:
     *"Kalite kontrol (QC) sonucu 'Uygun Değil' olarak kaydedildi. Radyasyon güvenliği protokolü gereği bu cihazı 'Arızalı / Kullanım Dışı' statüsüne alıp kilitlemek ister misiniz?"*
   - Operatör "Evet" dediğinde `lock_cihaz_due_to_qc_failure()` tetiklenerek cihaz `'Arizali'` durumuna çekilir ve notlarına test uygunsuzluk şerhi düşülür.

5. **KVKK Evrak Kasası Uyumlu PDF QC Rapor Arşivleme ve Önizleme:**
   - QC kaydı eklenirken PDF rapor dosyası seçildiğinde `DocumentServiceDB` üzerinden AES-256 Fernet ile şifrelenerek `stored_files` tablosunda saklanır.
   - Listeden satır seçilip `[Rapor Önizle (PDF)]` tıklandığında belge geçici belleğe deşifre edilip Windows varsayılan PDF okuyucusunda anında açılır.

6. **Web Portal Saha Mobil Arıza Bildirim Konsolu (`CihazArizaView.tsx`):**
   - Cihaz üzerindeki QR kod cep telefonu/tablet kamerasıyla taranarak cihaz künyesi, açık arıza geçmişi ve son QC durumu doğrudan ekrana gelir.
   - Sahadaki personelin teknik detayı hızlı raporlayabilmesi için 6 semptom kategorisi sunulur:
     1. *X-Işını & Jeneratör* (Şutlamıyor, HV arızası, tüp aşırı ısınma, kV/mA sapması, rotor sesi).
     2. *Dedektör & Görüntü* (Artefakt/çizgi, flat panel kalibrasyonu, kontrast kaybı, kablosuz bağlantı kopması).
     3. *Mekanik & Gantry & Masa* (Masa motoru takılması, gantry rotasyon hatası, kolimatör bıçakları, mekanik fren).
     4. *Konsol, Yazılım & PACS* (Konsol kilitlendi, DICOM aktarım hatası, worklist çekilemiyor, acil stop takılı).
     5. *Soğutma, Chiller & Güç* (Chiller yüksek sıcaklık, su pompası alarmı, UPS/şebeke faz hatası).
     6. *Diğer / Fiziksel / Donanım* (Kablo ezilmesi, ayak pedalı arızası, periyodik bakım talebi).

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Amaç) | NEREDE? (UI - Controller - DB - Model) | NASIL? (Formül / Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili / Etkilenen) | DURUM |
|---|---|---|---|---|---|---|
| **Yeni Arıza Bildir** (`btnYeniAriza`) | Arızalanan cihazı sisteme girip arıza kaydı açmak. | • **UI:** `cihaz_ariza_page.ui:304`<br>• **Ctrl:** `cihaz_ariza_controller.py:478`<br>• **Servis:** `cihaz_service.py:report_ariza`<br>• **DB:** `cihaz_arizalar` & `cihazlar` | Cihaz seçilir, aciliyet ve tanım girilir. Cihazın `durum` alanı otomatik `'Arizali'` yapılır. | Arıza tespit edildiğinde. | Radyoloji Teknikeri, Medikal Fizikçi, Hekim, Biyomedikal. | **Eksiksiz & Aktif** |
| **Arıza Kodu Üreteci** (`get_next_ariza_code`) | Standart ve mükerrersiz arıza referans no üretmek. | • **Ctrl:** `cihaz_ariza_controller.py`<br>• **Repo:** `cihaz_repository.py:968`<br>• **DB:** `cihaz_arizalar.ariza_kodu` | `ARZ-YYYY-XXX` şablonu (Örn: `ARZ-2026-001`). Mevcut yıldaki en büyük sıra + 1. | Yeni arıza kaydedilirken. | Sistem (Otomatik). | **Eksiksiz & Aktif** |
| **Seçili Arızayı Çöz** (`btnArizaCoz`) | Arızaya yapılan müdahaleyi girip kaydı kapatmak. | • **UI:** `cihaz_ariza_page.ui:314`<br>• **Ctrl:** `cihaz_ariza_controller.py:484`<br>• **Servis:** `cihaz_service.py:resolve_ariza`<br>• **DB:** `cihaz_arizalar` & `cihazlar` | Yapılan teknik işlem, servis firması, değişen parçalar girilir. Durum `'Tamamlandi'` olur, cihaz `'Aktif'`e döner. | Teknik servis işlemi bittiğinde. | Biyomedikal Mühendisi, RKS, Teknik Servis. | **Eksiksiz & Aktif** |
| **X-Işını Tüp Değişimi** (`chkTupDegisimi`) | Tüp değişiminde cihaz künyesindeki seri no'yu anında güncellemek. | • **UI:** `cihaz_ariza_coz_dialog.ui:141`<br>• **Ctrl:** `cihaz_ariza_controller.py:233`<br>• **Servis:** `cihaz_service.py:570`<br>• **DB:** `cihazlar.guncel_tup_seri_no` | Onay kutusu seçilip `txtYeniTupSeriNo` girildiğinde cihazın `guncel_tup_seri_no` alanı yeni değerle güncellenir. | Arıza çözüm formunda tüp değiştiğinde. | Biyomedikal / Servis Uzmanı. | **Eksiksiz & Aktif** |
| **Arıza KPI Sayaçları** (`lblKpiToplam`, `lblKpiAcik`, `lblKpiBekleyen`, `lblKpiCozulen`) | Anlık arıza yükünü ve durum dağılımını izlemek. | • **UI:** `cihaz_ariza_page.ui:90-296`<br>• **Ctrl:** `cihaz_ariza_controller.py:396`<br>• **Repo:** `cihaz_repository.py:804` | `COUNT(*) FILTER (WHERE durum = '...')` SQL agregasyonu ile hesaplanır. | Sayfa açıldığında veya filtre değiştiğinde. | Radyoloji Yönetimi, Başhekimlik. | **Eksiksiz & Aktif** |
| **Arıza Filtre Çubuğu** (`txtArama`, `cmbDurum`, `cmbOncelik`, `cmbBirim`) | Arıza kayıtları arasında hızlı filtreleme ve arama. | • **UI:** `cihaz_ariza_page.ui:350-430`<br>• **Ctrl:** `cihaz_ariza_controller.py:380`<br>• **Repo:** `cihaz_repository.py:658` | 300 ms debounce timer ile canlı SQL ILIKE araması ve indeksli filtreleme. | Kullanıcı yazdığında veya seçim yaptığında. | Tüm kullanıcılar. | **Eksiksiz & Aktif** |
| **Yeni QC Kaydı** (`btnYeniQc`) | Periyodik kalite kontrol veya kalibrasyon testi girmek. | • **UI:** `cihaz_qc_page.ui:304`<br>• **Ctrl:** `cihaz_qc_controller.py:463`<br>• **Servis:** `cihaz_service.py:add_qc_record`<br>• **DB:** `cihaz_kalite_kontrolleri` | Test türü, tarih, geçerlilik ayı seçilir; sonraki kontrol otomatik hesaplanır. | Test veya kalibrasyon yapıldığında. | Medikal Fizik Uzmanı, RKS, Kalibrasyon Kuruluşu. | **Eksiksiz & Aktif** |
| **Geçerlilik ve Bitiş Hesaplama** (`spnGecerlilikAy`) | Sonraki test tarihini hatasız belirlemek. | • **UI:** `cihaz_qc_dialog.ui:103`<br>• **Ctrl:** `cihaz_qc_controller.py:130`<br>• **DB:** `cihaz_kalite_kontrolleri.sonraki_kontrol` | `dtKontrolTarihi + spnGecerlilikAy (ay)` formülü ile `dtSonrakiKontrol` otomatik ayarlanır. | Kontrol tarihi veya geçerlilik ayı değiştiğinde. | Testi giren personel. | **Eksiksiz & Aktif** |
| **QC Başarısızlık Kilidi** (`RED-UI-CIHAZ-01`) | Standart dışı radyasyon yayan cihazın kullanımını engellemek. | • **Ctrl:** `cihaz_qc_controller.py:209`<br>• **Servis:** `cihaz_service.py:lock_cihaz_due_to_qc_failure`<br>• **DB:** `cihazlar.durum = 'Arizali'` | Sonuç 'Uygun Değil' seçilirse onay diyalogu çıkar, evet denirse cihaz kilitlenir. | QC sonucu olumsuz girildiğinde. | Medikal Fizik Uzmanı, Sistem. | **Eksiksiz & Aktif** |
| **PDF Rapor Yükleme ve Evrak Kasası** (`btnRaporSec`) | Kalibrasyon ve test belgelerini KVKK uyumlu arşivlemek. | • **UI:** `cihaz_qc_dialog.ui:181`<br>• **Ctrl:** `cihaz_qc_controller.py:136`<br>• **Servis:** `DocumentServiceDB.store_file`<br>• **DB:** `stored_files` (AES-256) | PDF dosyası binary okunur, Fernet AES-256 ile şifrelenir ve UUID ile saklanır. | QC formu kaydedilirken. | Testi giren personel. | **Eksiksiz & Aktif** |
| **PDF Rapor Önizleme** (`btnBelgeOnizle`) | Saklanan resmi raporu masaüstünde anında açmak. | • **UI:** `cihaz_qc_page.ui:314`<br>• **Ctrl:** `cihaz_qc_controller.py:469`<br>• **Servis:** `DocumentServiceDB.get_file_bytes` | `belge_id` deşifre edilir, `%TEMP%/radpys_qc_<id>.pdf` geçici dosyasına yazılır ve açılır. | Butona tıklandığında. | Medikal Fizikçi, Denetçi. | **Eksiksiz & Aktif** |
| **QC Kalan Gün ve Renkli Rozet** (`kalan_gun`) | Kalibrasyon süresinin dolmasına ne kadar kaldığını göstermek. | • **Ctrl:** `cihaz_qc_controller.py:411`<br>• **Repo:** `cihaz_repository.py:856` | `< 0 gün`: Kırmızı (Süresi Dolan), `0-30 gün`: Turuncu (Yaklaşan), `> 30 gün`: Yeşil (Geçerli). | QC listesi render edilirken. | Tüm kullanıcılar. | **Eksiksiz & Aktif** |
| **Excel Dışa Aktarım** (`btnExcelExport`) | Arıza ve QC listelerini denetim raporu olarak kaydetmek. | • **UI:** Her iki ekranda `btnExcelExport`<br>• **Ctrl:** `cihaz_ariza_controller.py:503`, `cihaz_qc_controller.py:493` | Pandas DataFrame üzerinden `.xlsx` formatında dosya kaydetme penceresi açar. | Butona tıklandığında. | RKS, Biyomedikal, Denetim Sorumlusu. | **Eksiksiz & Aktif** |
| **QC Tablosu "Belge" Kolonu** (`tblQc` Col 8) | Tablo içinde belge var/yok ikonu gösterme beklentisi. | • **UI:** `cihaz_qc_page.ui:489` (Belge Kolonu)<br>• **Ctrl:** `cihaz_qc_controller.py:387` | Controller'da 8 kolon doldurulmaktadır (0-7). 8. indeks olan "Belge" hücresine veri yazılmamaktadır. | Tablo render edilirken. | Son kullanıcı. | ⚠️ **HAYALET / BOŞ KOLON** (Kullanıcı `btnBelgeOnizle` kullanmaktadır) |
| **QC KPI Key İsim Uyuşmazlığı** | Masaüstü QC ekranında KPI sayaçlarının sıfır görünmesi riski. | • **Ctrl:** `cihaz_qc_controller.py:379`<br>• **Repo:** `cihaz_repository.py:931` | Repo `toplam_test, uygun_test, yaklasan_test, suresi_dolan_test` dönerken controller `toplam_qc, gecerli_qc, yaklasan_qc, dolan_qc` aramaktadır. | Veri yükleme anı. | Arayüz. | ⚠️ **KOD UYUŞMAZLIĞI (TEKNİK BULGU)** |
| **Arıza Formunda Maliyet Alanı** | Müdahale masrafının arayüzden girilememesi. | • **UI:** `cihaz_ariza_coz_dialog.ui`<br>• **Ctrl:** `cihaz_ariza_controller.py:235`<br>• **DB:** `cihaz_arizalar.maliyet` | Veritabanında ve KPI'da `maliyet` kolonu mevcuttur ancak çözüm UI formunda maliyet kutusu bulunmadığından kodda `0.0` gönderilmektedir. | Arıza çözülürken. | Biyomedikal. | ⚠️ **EKSİK ALAN / KAPSAM DIŞI** |

---

## C. Mantık, Kısıt ve QMessageBox Validasyonları

1. **Zorunlu Alan Kısıtları:**
   - **Arıza Bildirimi:** Cihaz seçimi (`cmbCihaz`) ve Arıza Tanımı (`txtArizaTanimi`) boş geçilemez. Boş ise: `QMessageBox.warning(self, "Uyarı", "Lütfen bir cihaz seçiniz.")` veya `"Lütfen arıza tanımını giriniz."`.
   - **Arıza Çözümü:** Yapılan işlem açıklaması (`txtYapilanIslem`) boş geçilemez. Boş ise: `QMessageBox.warning(self, "Uyarı", "Lütfen yapılan teknik işlemi açıklayınız.")`.
   - **QC Kaydı:** Cihaz seçimi, Kontrol Tarihi ve Sonraki Kontrol zorunludur. Cihaz seçilmediyse: `QMessageBox.warning(self, "Uyarı", "Lütfen bir cihaz seçiniz.")`.
2. **Çözülmüş Arızayı Tekrar Çözme Engeli:**
   - Tabloda durumu zaten `'Tamamlandi'` olan bir arıza seçilip `[Seçili Arızayı Çöz]` butonuna basılırsa işlem engellenir: `QMessageBox.information(self, "Bilgi", "Bu arıza kaydı zaten çözümlenmiş ve kapatılmış.")`.
3. **Cihaz Karantina / Kilitleme Protokolü (RED-UI-CIHAZ-01):**
   - Kalite kontrol sonucu `'Uygun Degil'` veya `'Uygunsuz'` olarak seçilip kaydedildiğinde:
     `QMessageBox.warning(self, "Güvenlik Uyarısı - Cihaz Kilitleme", "Kalite kontrol (QC) sonucu 'Uygun Değil' olarak kaydedildi.\n\nRadyasyon güvenliği protokolü gereği bu cihazı 'Arızalı / Kullanım Dışı' statüsüne alıp kilitlemek ister misiniz?", Yes | No)`
     "Evet" seçilirse cihaz otomatik olarak `'Arizali'` durumuna geçirilir.
4. **Belge Önizleme Validasyonu:**
   - Tablodan kayıt seçilmeden `[Rapor Önizle (PDF)]` tıklanırsa: `QMessageBox.warning(self, "Uyarı", "Lütfen tablodan bir QC kaydı seçiniz.")`.
   - Seçilen kayda yüklenmiş bir PDF rapor yoksa: `QMessageBox.information(self, "Bilgi", "Bu teste ait yüklenmiş PDF rapor bulunmuyor.")`.
5. **Erken Uyarı Eşik Değerleri:**
   - QC Yaklaşan Eşiği: Kod seviyesinde `sonraki_kontrol <= CURRENT_DATE + 30 gün` olarak sabitlenmiştir.
   - QC Süresi Dolan Eşiği: `sonraki_kontrol < CURRENT_DATE`.

---

## D. Saha Teyit Soruları ve Kullanıcı Kararları

1. **Soru 1 (QC Yaklaşan Eşiği):** Kodda yaklaşan QC testleri için 30 günlük eşik (`kalan <= 30`) baz alınmaktadır. Bu süre hastane pratiğiniz için yeterli midir, yoksa 45 veya 60 güne mi ayarlanmalıdır?
   - **Kullanıcı Kararı / Saha Kuralı:** **30 gün yeterlidir.** Yaklaşan kalibrasyon ve testler için 30 günlük sarı/turuncu erken uyarı penceresi baz alınacaktır.
2. **Soru 2 (Arıza Çözümünde Maliyet Alanı):** Veritabanında ve KPI sayaçlarında `maliyet` alanı bulunmasına rağmen arıza çözüm penceresinde (`cihaz_ariza_coz_dialog.ui`) maliyet giriş kutusu yer almamaktadır. Arıza ve parça değişim maliyetleri sisteme girilmeli midir, yoksa bu alan hastane bütçe/muhasebe sistemine mi bırakılmalıdır?
   - **Kullanıcı Kararı / Saha Kuralı:** **Maliyet hesabı yapılmamaktadır.** Sistemde arıza, müdahale süresi, teknik servis ve değişen parçalar klinik/teknik takip ve izleme amacıyla kayıt altına alınmaktadır; finansal maliyet hesabı kapsam dışıdır.
3. **Soru 3 (QC Başarısızlığında Otomatik Kilitleme):** QC sonucu 'Uygun Değil' çıktığında sistem operatöre soru sormakta (`QMessageBox.warning`), onay verilirse cihazı 'Arızalı' yapmaktadır. Bu soru sorma adımı devam mı etmeli, yoksa NDK mevzuatı gereği hiçbir onay istemeden cihaz **zorunlu/otomatik olarak** anında kilitlenmeli midir?
   - **Kullanıcı Kararı / Saha Kuralı:** **Onaylanmıştır (Evet).** Radyasyon güvenliği protokolü (RED-UI-CIHAZ-01) gereği QC sonucu 'Uygun Değil' kaydedildiğinde operatör onayı ve protokol gereği cihaz derhal 'Arızalı / Kullanım Dışı' statüsüne alınarak kilitlenir.
4. **Soru 4 (Tüp Değişimi Seri No Yetkilendirmesi):** X-ışını tüp değişimi yapıldığında `cihazlar.guncel_tup_seri_no` otomatik güncellenmektedir. Bu işlem NDK lisans vizesini de etkilediğinden, tüp değişimi yapıldığında sistemin otomatik bir lisans revizyon uyarısı vermesi istenir mi?
   - **Kullanıcı Kararı / Saha Kuralı:** **Onaylanmıştır (Evet).** X-ışını tüpü değiştiğinde güncel seri numarası künyeye işlenir ve tüp değişimi NDK vize revizyonunu zorunlu kıldığı için RKS birimine bildirim şerhi kılavuzda vurgulanır.
5. **Soru 5 (QC Sayfasındaki Boş Belge Kolonu):** `cihaz_qc_page.ui` tablosundaki 9. kolon olan "Belge" alanı şu an hücre bazında boş görünmektedir (rapor üstteki butonla açılmaktadır). Kılavuzda bu durumu "Belge görüntüleme işlemi üst araç çubuğundaki [Rapor Önizle] butonu ile yapılır" şeklinde mi açıklayalım?
   - **Kullanıcı Kararı / Saha Kuralı:** **Onaylanmıştır (Evet).** Kılavuzda PDF raporların üst araç çubuğunda yer alan `[Rapor Önizle (PDF)]` butonu üzerinden şifreli kasadan açılarak görüntülendiği açıklanacaktır.

---

## E. Hibrit Platform Durumu (Masaüstü ve Web Portalı)

- 🖥️ **Masaüstü (PySide6):**
  - Cihaz Arıza ve Bakım Ekranı: `ui/pages/cihaz/cihaz_ariza_page.ui` (`CihazArizaController`)
  - Arıza Bildirim Formu: `ui/pages/cihaz/cihaz_ariza_bildir_dialog.ui`
  - Arıza Çözüm Formu: `ui/pages/cihaz/cihaz_ariza_coz_dialog.ui`
  - QC & Kalibrasyon Ekranı: `ui/pages/cihaz/cihaz_qc_page.ui` (`CihazQcController`)
  - QC Kayıt Formu: `ui/pages/cihaz/cihaz_qc_dialog.ui`
  - Periyodik Bakım: `CihazBakimController` (QC ekranı mirası)
- 🌐 **Web & Mobil Portalı (React + Node.js):**
  - Bileşen: `web_portal/src/components/CihazArizaView.tsx`
  - Rotalar: `web_portal/src/routes/cihaz.routes.ts` (`/api/arizalar`, `/api/arizalar/:id/coz`)
  - Yetenekler: QR barkod okuyucuyla cihaz tanıma, sahada anında 6 semptom kategorisiyle (X-Ray, Dedektör, Mekanik, Yazılım/PACS, Chiller, Donanım) arıza bildirme, açık arıza listeleme ve tamir kapatma.

---

## F. Hedefli Ekran Görüntüsü Talebi

Kullanım kılavuzu modül sayfası (`help/19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html`) için gereken **SADECE 2 kritik ekran görüntüsü**:

1. **`ekran_cihaz_ariza_yonetimi.png`**  
   - **Hedef Pencere:** `Cihaz Arıza, Bakım ve Teknik Servis Takibi` ana ekranı (`CihazArizaController`).
   - **Gereksinim:** Üstteki 4 adet KPI kartı (Toplam, Açık, Servis/Parça Bekleyen, Giderilen), filtre çubuğu ve örnek bir açık arıza kaydının seçili olduğu arıza takip tablosu.
2. **`ekran_cihaz_qc_kalibrasyon.png`**  
   - **Hedef Pencere:** `Cihaz Kalite Kontrol (QC) ve Kalibrasyon Takibi` ana ekranı (`CihazQcController`).
   - **Gereksinim:** Üstteki KPI sayaçları (Toplam, Geçerli, Yaklaşan, Süresi Dolan), renkli kalan gün/sonuç rozetlerinin (Kırmızı/Turuncu/Yeşil) net görüldüğü QC test tablosu.
