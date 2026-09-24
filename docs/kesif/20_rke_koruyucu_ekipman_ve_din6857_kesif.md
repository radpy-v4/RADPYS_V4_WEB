# Keşif Raporu: Modül 20 — Radyasyon Koruyucu Ekipman (RKE) ve DIN 6857-1 / IEC 61331 Muayene Yönetimi (20_rke_koruyucu_ekipman_ve_din6857)

**Tarih:** 2026-09-24  
**Karmaşıklık Seviyesi (Tier):** TIER 1 (Gelişmiş Çoklu Arayüz, İnteraktif Anatomi Krokisi, Matematiksel Karar Motoru & Hibrit Web/Saha)  
**İncelenen Kod Tabanı:**
- UI Tasarım Dosyaları:
  - `ui/pages/rke/rke_yonetimi_page.ui` (RKE ve KKD Envanter Ana Yönetim Ekranı)
  - `ui/pages/rke/rke_muayene_dialog.ui` (DIN 6857-1 & SKS 6.1 Kalite Kontrol ve Muayene Kokpiti)
  - `ui/pages/rke/rke_muayene_listesi_page.ui` (DIN 6857-1 Muayene ve Kusur Analizi Geçmişi)
  - `ui/pages/rke/rke_toplu_muayene_dialog.ui` (Toplu Kalite Kontrol & Muayene Kokpiti)
  - `ui/pages/rke/rke_ekle_duzenle_dialog.ui` (Koruyucu Donanım Ekleme & Düzenleme Formu)
  - `ui/pages/rke/rke_zimmet_dialog.ui` (Zimmet ve Birim Transfer Tutanağı)
  - `ui/pages/rke/rke_qr_dialog.ui` (Karekod Pasaport Etiketi Oluşturma & Yazdırma)
- Controller Dosyaları:
  - `ui/controllers/rke/rke_yonetimi_controller.py` (`RkeYonetimiController`)
  - `ui/controllers/rke/rke_muayene_dialog.py` (`RkeMuayeneDialog`, `_EmbeddedKrokiSvgWidget`)
  - `ui/controllers/rke/rke_muayene_listesi_controller.py` (`RkeMuayeneListesiController`)
  - `ui/controllers/rke/rke_toplu_muayene_dialog.py` (`RkeTopluMuayeneDialog`)
  - `ui/controllers/rke/rke_ekle_duzenle_dialog.py` (`RkeEkleDuzenleDialog`)
  - `ui/controllers/rke/rke_zimmet_dialog.py` (`RkeZimmetDialog`)
  - `ui/controllers/rke/rke_qr_dialog.py` (`RkeQrDialog`)
  - `ui/controllers/app_controller.py` (`open_rke_page`, `open_rke_muayene_list_page`)
- Servis Katmanı:
  - `app/services/rke/rke_service.py` (`get_rke_listesi`, `get_rke_detay`, `create_rke`, `update_rke`, `mark_as_hek`, `add_muayene`, `approve_muayene`, `export_sks_cizelgesi`, `get_istatistik_ozeti`, `get_rke_tipleri`, `get_radyasyon_departmanlari`, `get_alt_birimler`, `get_kayitli_markalar`, `get_fiziksel_konum_onerileri`)
  - `app/services/rke/rke_saha_service.py` (`saha_hizli_sorgula`, `analiz_et_kusur_haritasi`, `saha_muayene_kaydet`, DIN 6857-1 Eşik ve Tolerans Motoru)
  - `app/services/rke/rke_kod_generator.py` (`RkeKodGenerator` — Akıllı format: `RKE-[KISA_KOD]-[DEPT]-[SIRA]`)
  - `app/services/rke/rke_import_service.py` (`RkeImportService` — Excel toplu içe aktarma)
  - `app/services/system/document_service_db.py` (KVKK Evrak Kasası AES-256 Fernet ile Şifreli Muayene Tutanakları & Skopi Radyografileri)
- Veritabanı Tabloları:
  - `rke_envanter` (RKE künyesi, kurşun eşdeğeri ön/arka, beden, malzeme türü, ömür/yaş, son/sonraki muayene, QR token)
  - `rke_muayeneler` (Periyodik kontrol kayıtları, skopi test kVp, toplam hasar alanı, karar, aksiyon, kontrol eden, onaylayan RKS)
  - `rke_muayene_kusurlar` (İnteraktif tuval kusur pinleri: yüz, x/y oranı, kusur tipi, çap mm, alan mm², kritik bölge bayrağı)
  - `rke_muayene_belgeleri` (AES-256 şifreli dosya UUID referansları)
  - `rke_zimmet_hareketleri` (Birim ve personel transfer tarihçesi)
  - `stored_files` (KVKK şifreli dosya kasası)
- Web Portal Entegrasyonları:
  - `web_portal/src/routes/rke.routes.ts` (`GET /api/rke/pasaport/:kod`, `GET /api/rke/liste`, `POST /api/rke/saha-muayene`)
  - `web_portal/src/components/RkeView.tsx` (Mobil/Web RKE Yönetim ve Saha Muayene Konsolu)
  - `web_portal/src/components/RkeKrokiCanvas.tsx` (Dokunmatik Web SVG Kusur Haritası Tuvali)
  - `web_portal/src/components/dashboards/RkeDashboard.tsx` (RKE İstatistik & KPI Paneli)

---

## A. Modülün Özeti ve Görevleri

**Radyasyon Koruyucu Ekipman (RKE) ve DIN 6857-1 / IEC 61331 Muayene Yönetimi Modülü**; hastane genelindeki kurşun önlük, palto, etek-yelek, tiroid koruyucu, gonad koruyucu, kurşun gözlük, eldiven ve masa kenarı kurşun paravanların yaşam döngüsünü, fiziksel konumunu, zimmetini, skopi altındaki kalite kontrol muayenelerini ve yasal hurdaya ayırma (HEK) süreçlerini yöneten tam kapsamlı bir klinik radyasyon güvenliği sistemidir.

### Koddan Tespit Edilen Temel İş Akışları:

1. **Hiyerarşik ve Akıllı Kodlamalı Donanım Envanteri (`RkeEkleDuzenleDialog` & `RkeKodGenerator`):**
   - Donanım tipi (`lookup_rke_tipleri`), üst klinik departman ve alt servis seçildiğinde sistem `RKE-[KISA_KOD]-[DEPT]-[SIRA]` formatında (örn: `RKE-Ö-RAD-001`) benzersiz bir ekipman kodu ve birim içi koruyucu numarası önerir.
   - Kurşun eşdeğeri ön (`pb_esdegeri_on`) ve arka (`pb_esdegeri_arka`), beden, malzeme türü (*Saf Kurşun, Kurşunsuz Kompozit, Hafif Kurşun*), askılık/oda konumu ve hizmete giriş yılı kayıt altına alınır.
   - Ekipman yaşı anlık hesaplanır: `kullanim_yasi = (CURRENT_DATE - hizmet_yili)`.

2. **Çift Modlu Kalite Kontrol Kokpiti — Görsel/Fiziki ve Skopi Krokisi (`RkeMuayeneDialog`):**
   - **Görsel & Fiziki Muayene Modu:** 5 temel fiziki kriter (*1. Dikiş/Kumaş bütünlüğü, 2. Askı/Toka/Cırt sağlamlığı, 3. Kurşun blok kayması/katlanma olmaması, 4. QR etiket okunurluğu, 5. Hijyen/sıvı hasarsızlığı*) denetlenir. Tek tıkla `[Tüm Kriterleri Sağlam Olarak İşaretle]` yapılabilir. Kurşun katmanda blok kayması veya yırtık tespit edilirse sistem doğrudan `HEK_HURDAYA_AYIR` kararı üretir.
   - **Skopi / X-Işını (DIN 6857-1) Modu:** Ekipmanın türüne uygun ön ve arka SVG vücut silüeti (`_EmbeddedKrokiSvgWidget`) ekrana yüklenir. Skopi cihazı ve test $kVp$ değeri seçilir. Operatör radyografide gördüğü kusuru tuval üzerinde tıklar; sistem tıklanan noktaya kusur pini koyar.

3. **Otomatik DIN 6857-1 / SKS Karar ve Kusur Analiz Motoru (`RkeSahaService.analiz_et_kusur_haritasi`):**
   - İşaretlenen kusurlar için çap ($mm$), dairesel alan ($mm^2 = \pi \cdot (çap/2)^2$), kusur türü (*Delik, Çatlak, İncelme, Blok Kayması, Yırtık, Diğer*) ve Kritik Bölge bayrağı kaydedilir.
   - Tiroid koruyucu (`TK`) ve Gonad koruyucu (`GK`) donanımları doğası gereği kritik organ koruyucusudur.
   - **Matematiksel Karar Eşikleri:**
     - **Kritik Bölge:** Kusur alanı $> 0.0\text{ mm}^2$ ise tolerans sıfırdır $\rightarrow$ **HEK / Hurdaya Ayır** (İmha).
     - **Non-Kritik Bölge:**
       - Toplam hasar alanı $\le 5.0\text{ mm}^2$ $\rightarrow$ **KULLANIMA UYGUN** (1 Yıl Geçerli).
       - Toplam hasar alanı $5.0 - 15.0\text{ mm}^2$ $\rightarrow$ **ŞARTLI KULLANIM** (Hasta refakati veya düşük dozlu birimlerde kullanım).
       - Toplam hasar alanı $> 15.0\text{ mm}^2$ $\rightarrow$ **HEK / HURDAYA AYIR** (Maksimum hasar limiti aşımı).
   - **10+ Yıl Yaş Sınırı Kuralı:** Donanım yaşı $\ge 10$ yıl ise, skopi sonucu temiz olsa dahi karar otomatik olarak `HEK_HURDAYA_AYIR` ve *"10 Yıllık Azami Güvenli Kullanım Ömrü Aşıldı"* uyarısına çevrilir. Yaş $5-10$ arasında ise *"Yaşlı / Dikkat"* uyarısı eklenir.

4. **1-Tıkla Kusursuz / Hızlı Onay (`btnHizliOnayla`):**
   - Yoğun tarama günlerinde hatasız ve kusursuz ekipmanlar için tek tıklamayla tüm fiziksel kriterler sağlam yapılır, kusurlar temizlenir, karar `KULLANIMA_UYGUN` olarak işaretlenir ve muayene kaydedilir.

5. **Toplu Kalite Kontrol Kokpiti (`RkeTopluMuayeneDialog`):**
   - Birim bazında onlarca önlüğün aynı gün tarandığı periyodik kontrollerde tek tek form açmak yerine tüm liste yüklenir.
   - `[Gecikenleri Seç]` veya `[Tümünü Seç]` ile toplu işaretleme yapılır; dönem, tarih, kontrol eden personel, skopi cihazı ve varsayılan karar seçilerek tek işlemde toplu muayene kaydedilir.

6. **Zimmet Transferi ve Hurda Koruma Kilidi (`RkeZimmetDialog`):**
   - Donanımlar kişiye özel tahsis edilebildiği gibi (`zimmetli_personel_id`), "Birim Ortak" olarak da bırakılabilir.
   - **Güvenlik Kilidi (RED-UI_RKE_SCRAPPED_ASSET_TRANSFER_GAP):** Hurdaya ayrılmış (`HEK_Hurda`), kayıp (`Kayip`) veya kullanım dışı ekipmanların personele veya başka birime devri kesin olarak engellenir (`btnKaydet` devre dışı bırakılır).

7. **RKS Çift Aşamalı Onay Mekanizması (`RkeMuayeneListesiController`):**
   - Muayeneyi tekniker veya medikal fizikçi sahada/masaüstünde yapar. RKS yetkisine sahip kullanıcı muayene listesi ekranından veya sağ tık menüsünden `[RKS Olarak Onayla]` butonuna basarak kaydı mühürler.
   - Onayı eksik olan muayeneler sarı/amber *"RKS Onayı Bekliyor"* uyarısıyla listelenir.

8. **QR Pasaport ve Saha Mobil Konsolu (`RkeQrDialog` & Web Portal):**
   - Her ekipman için benzersiz QR pasaportu üretilir; yazdırılabilir veya yüksek çözünürlüklü PNG olarak kaydedilebilir.
   - QR kod yerel ağ IP'si (`http://LAN_IP:3000/?rke=KOD`) barındırır. Mobil cihazdan veya tabletten okutulduğunda `RkeView.tsx` açılır; saha personeli dokunmatik ekranda SVG anatomi krokisi üzerinde kusur işaretleyebilir ve kamera ile hasar fotoğrafı ekleyerek muayeneyi anında sisteme gönderebilir.

9. **SKS 6.1 ve Matbu Excel Çizelgesi:**
   - Sağlık Bakanlığı Sağlıkta Kalite Standartları (SKS 6.1) gereğince istenen resmi *Koruyucu Donanım Kontrol Çizelgesi* tek tıkla (`btnExcelExport`) Excel formatında dışa aktarılır.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Amaç) | NEREDE? (UI - Controller - DB - Model) | NASIL? (Formül / Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili / Etkilenen) | DURUM |
|---|---|---|---|---|---|---|
| **Yeni Ekipman Kaydı** (`btnYeniRke`) | Envantere yeni kurşun önlük/koruyucu eklemek. | • **UI:** `rke_yonetimi_page.ui:351`<br>• **Ctrl:** `rke_yonetimi_controller.py:390`<br>• **Servis:** `rke_service.py:create_rke`<br>• **DB:** `rke_envanter` | Form açılır; tip, departman, kurşun eşdeğeri (ön/arka), beden, marka, model, seri no girilir. | Yeni donanım satın alındığında veya kliniğe girdiğinde. | Medikal Fizikçi, RKS, Biyomedikal. | **Eksiksiz & Aktif** |
| **Akıllı Kod Önerisi** (`RkeKodGenerator`) | Mükerrersiz ve birim hiyerarşisine uygun kod üretmek. | • **Ctrl:** `rke_ekle_duzenle_dialog.py:189`<br>• **Servis:** `rke_kod_generator.py`<br>• **DB:** `rke_envanter.ekipman_kodu` | `RKE-[KISA_KOD]-[DEPT]-[SIRA]` şablonu (Örn: `RKE-Ö-RAD-001`). Tip ve departman değiştikçe dinamik güncellenir. | Yeni kayıt diyalogu açıldığında ve seçim değiştikçe. | Sistem (Otomatik). | **Eksiksiz & Aktif** |
| **Muayene ve QC Kokpiti** (`btnMuayene`) | DIN 6857-1 ve SKS standartlarında periyodik test yapmak. | • **UI:** `rke_yonetimi_page.ui:368`<br>• **Ctrl:** `rke_yonetimi_controller.py:406`<br>• **Diyalog:** `rke_muayene_dialog.py`<br>• **DB:** `rke_muayeneler` | Seçili ekipmanın çift modlu (Görsel/Fiziki ve Skopi Krokisi) test kokpitini açar. | Yıllık periyodik muayenede veya şüphe durumunda. | Medikal Fizik Uzmanı, Radyoloji Teknikeri. | **Eksiksiz & Aktif** |
| **Görsel/Fiziki Kontrol** (`chkFiziki...`) | Dikiş, toka, kurşun katman, etiket ve hijyeni denetlemek. | • **UI:** `rke_muayene_dialog.ui:141-196`<br>• **Ctrl:** `rke_muayene_dialog.py:448`<br>• **DB:** `rke_muayeneler.secilen_bulgular` | 5 onay kutusu denetlenir. Blok kayması işaretsizse doğrudan `HEK`, diğer kusurlar varsa `Şartlı Kullanım` atanır. | Muayene başlangıcında. | Testi yapan personel. | **Eksiksiz & Aktif** |
| **İnteraktif Skopi Krokisi** (`_EmbeddedKrokiSvgWidget`) | Röntgen/skopi görüntüsündeki delik ve çatlakları haritalamak. | • **UI:** `rke_muayene_dialog.ui:277`<br>• **Ctrl:** `rke_muayene_dialog.py:53-145`<br>• **DB:** `rke_muayene_kusurlar` | Ekipman türüne uygun SVG silüet yüklenir. Tuval tıklanarak delik/çatlak pini ($x/y$ koordinatı) yerleştirilir. | Skopi muayenesi esnasında. | Medikal Fizik Uzmanı. | **Eksiksiz & Aktif** |
| **DIN 6857-1 Karar Motoru** (`analiz_et_kusur_haritasi`) | Kusur alanına ve bölgesine göre otomatik yasal karar üretmek. | • **Servis:** `rke_saha_service.py:144`<br>• **Ctrl:** `rke_muayene_dialog.py:554` | Kritik bölge: $>0\text{ mm}^2 \rightarrow \text{HEK}$.<br>Non-kritik: $\le 5\text{ mm}^2 \rightarrow \text{Uygun}$, $5-15\text{ mm}^2 \rightarrow \text{Şartlı}$, $>15\text{ mm}^2 \rightarrow \text{HEK}$. | Pin eklendikçe/silindikçe anlık tetiklenir. | Sistem (Otomatik). | **Eksiksiz & Aktif** |
| **10+ Yıl HEK Ömrü Sınırı** | Malzeme yorulması nedeniyle kullanım ömrü dolanları ayırmak. | • **Ctrl:** `rke_muayene_dialog.py:609`<br>• **Servis:** `rke_service.py:155` | Donanım yaşı $\ge 10$ yıl ise sonuç otomatik olarak `HEK_HURDAYA_AYIR` yapılır ve aksiyona ömür aşımı notu düşülür. | Karar hesaplanırken. | Sistem (Otomatik). | **Eksiksiz & Aktif** |
| **1-Tıkla Kusursuz Onay** (`btnHizliOnayla`) | Hatasız ekipmanların muayenesini saniyeler içinde tamamlamak. | • **UI:** `rke_muayene_dialog.ui:675`<br>• **Ctrl:** `rke_muayene_dialog.py:715` | Tüm fiziki kriterleri onaylar, kusur listesini temizler, kararı `KULLANIMA_UYGUN` yapıp doğrudan kaydeder. | Kusursuz ekipman muayenesinde. | Medikal Fizikçi, Yetkili Tekniker. | **Eksiksiz & Aktif** |
| **Toplu Muayene Kokpiti** (`btnTopluMuayene`) | Yüzlerce önlüğü toplu olarak tek ekrandan testten geçirmek. | • **UI:** `rke_yonetimi_page.ui:375`<br>• **Ctrl:** `rke_yonetimi_controller.py:417`<br>• **Diyalog:** `rke_toplu_muayene_dialog.py` | Aktif envanter listelenir, gecikenler/tümü seçilir, tek onay ile her biri için muayene kaydı açılır. | Yıllık toplu klinik taramalarında. | Medikal Fizik Uzmanı, RKS. | **Eksiksiz & Aktif** |
| **Zimmet & Transfer** (`btnZimmet`) | Ekipmanın birimini veya zimmetli personelini değiştirmek. | • **UI:** `rke_yonetimi_page.ui:382`<br>• **Ctrl:** `rke_yonetimi_controller.py:423`<br>• **Diyalog:** `rke_zimmet_dialog.py`<br>• **DB:** `rke_zimmet_hareketleri` | Hedef departman, yeni personel ve gerekçe girilerek transfer tutanağı işlenir. | Donanım birim değiştirdiğinde veya personele zimmetlendiğinde. | Birim Sorumlusu, RKS. | **Eksiksiz & Aktif** |
| **Hurda Transfer Güvenlik Kilidi** (`RED-UI_RKE_SCRAPPED_ASSET_TRANSFER_GAP`) | Hurda veya kayıp ekipmanın devredilmesini önlemek. | • **Ctrl:** `rke_zimmet_dialog.py:45`<br>• **DB:** `rke_envanter.durum` | Ekipman durumu `HEK_Hurda`, `Kayip` veya `Kullanim_Disi` ise diyalog uyarı verir ve `btnKaydet` kapatılır. | Zimmet formu açılırken. | Sistem. | **Eksiksiz & Aktif** |
| **QR Pasaport Yazdırma & PNG** (`btnQrEtiket`) | Önlüğün üzerine dikilecek/yapıştırılacak karekod kimliği üretmek. | • **UI:** `rke_yonetimi_page.ui:389`<br>• **Ctrl:** `rke_yonetimi_controller.py:433`<br>• **Diyalog:** `rke_qr_dialog.py` | Ekipman künyesi, kurşun eşdeğeri ve yerel ağ URL'si içeren QR grafik üretilir, yazdırılır veya PNG kaydedilir. | Etiket basılacağı zaman. | Medikal Fizikçi, Radyoloji Teknikeri. | **Eksiksiz & Aktif** |
| **RKS Onaylama Yetki Kilidi** (`_on_rks_onayla`) | Muayene sonuçlarının RKS tarafından onaylanıp mühürlenmesi. | • **Ctrl:** `rke_muayene_listesi_controller.py:331`<br>• **Servis:** `rke_service.py:approve_muayene`<br>• **DB:** `rke_muayeneler.onaylayan_rks_id` | Sadece Admin veya RKS/RSO rolüne sahip kullanıcılar onaylayabilir; yetkisiz personele `QMessageBox.warning` açılır. | Muayene incelendikten sonra. | RKS, RSO, Sistem Yöneticisi. | **Eksiksiz & Aktif** |
| **SKS 6.1 Excel Çizelgesi** (`btnExcelExport`) | Sağlık Bakanlığı SKS denetim raporunu tek tıkla üretmek. | • **UI:** `rke_yonetimi_page.ui:396`<br>• **Ctrl:** `rke_yonetimi_controller.py:477`<br>• **Servis:** `rke_service.py:export_sks_cizelgesi` | Tüm envanter, askılık yerleri, son/sonraki muayeneler ve sonuçlar SKS 6.1 formatında Excel'e aktarılır. | Denetim hazırlığında veya periyodik raporlamada. | RKS, Kalite Direktörü. | **Eksiksiz & Aktif** |
| **Excel Toplu İçe Aktarım** (`btnExcelImport`) | Mevcut hastane Excel listesini sisteme aktarmak. | • **UI:** `rke_yonetimi_page.ui:403`<br>• **Ctrl:** `rke_yonetimi_controller.py:443`<br>• **Servis:** `RkeImportService` | Excel seçilir, arka planda `run_with_progress` ile satır satır taranır, eşleşen tipler aktarılır. | İlk kurulumda veya toplu alımlarda. | Sistem Yöneticisi, RKS. | **Eksiksiz & Aktif** |
| **HEK'e Ayırma** (`btnHek`) | Donanımı gerekçe ile hurdaya ayırmak. | • **UI:** `rke_yonetimi_page.ui:410`<br>• **Ctrl:** `rke_yonetimi_controller.py:494`<br>• **Servis:** `rke_service.py:mark_as_hek` | Operatörden gerekçe alınır (`QInputDialog`), durum `HEK_Hurda` yapılır ve envanterden düşülür. | Ekipman kullanılamaz hale geldiğinde. | RKS, Komisyon Başkanı. | **Eksiksiz & Aktif** |
| **AES-256 Şifreli Belge & Fotoğraf** (`btnFotoEkle`) | Skopi radyografilerini ve hasar fotoğraflarını güvenle saklamak. | • **Ctrl:** `rke_muayene_dialog.py:659`<br>• **Servis:** `DocumentServiceDB.store_file`<br>• **DB:** `stored_files` | Fotoğraf veya PDF seçilir, form kaydedildiği anda Fernet AES-256 ile şifrelenip veritabanı kasasına yazılır. | Muayene sırasında hasar belgelenirken. | Testi yapan personel. | **Eksiksiz & Aktif** |

---

## C. Mantık ve Kısıt Soruları (Kullanıcı Teyidi Gerektiren Noktalar)

1. **Periyodik Muayene Takvimi ve Erken Uyarı Süreleri:**
   - Kodda varsayılan muayene periyodu 12 ay (1 yıl) olarak işletilmekte ve son 30 gün kala "Yaklaşıyor" (amber/sarı), günü geçtiğinde "Geciken" (kırmızı) uyarısı verilmektedir.
   - *Soru:* Yüksek riskli anjiyografi veya ameliyathane koruyucuları için 6 aylık periyot uygulamanız var mıdır, yoksa Sağlık Bakanlığı SKS standardı olan yıllık 12 ay periyot tüm donanımlar için geçerli midir?

2. **DIN 6857-1 / IEC 61331-1 Matematiksel Hasar Toleransları:**
   - Kod motorunda:
     - Tiroid, gonad ve sternum gibi *kritik organ bölgelerinde* kusur alanı $> 0\text{ mm}^2$ ise tolerans sıfırdır $\rightarrow$ Doğrudan **HEK / Hurdaya Ayır**.
     - *Non-kritik bölgelerde* $\le 5\text{ mm}^2$ $\rightarrow$ **Kullanıma Uygun**, $5-15\text{ mm}^2$ $\rightarrow$ **Şartlı Kullanım**, $>15\text{ mm}^2$ $\rightarrow$ **HEK / Hurdaya Ayır**.
   - *Soru:* Hastanenizdeki klinik uygulamada bu alan eşikleri ($5\text{ mm}^2$ ve $15\text{ mm}^2$) tam olarak geçerli midir, yoksa farklı bir hastane yönergeniz bulunmakta mıdır?

3. **10+ Yıl Kullanım Ömrü Sınırı ve HEK Zorunluluğu:**
   - Kodda donanım yaşı $\ge 10$ yıl olduğunda skopi görüntüsü temiz olsa dahi sistem otomatik olarak `HEK_HURDAYA_AYIR` kararı ve *"10 Yıllık Azami Güvenli Kullanım Ömrü Aşıldı"* uyarısı üretmektedir.
   - *Soru:* Bu durum kurumunuzda kesin hurdaya ayırma zorunluluğu mudur, yoksa hekim/fizikçi inisiyatifiyle skopisi temiz çıkan 10+ yıllık önlükler kullanılmaya devam edilebilir mi?

4. **Şartlı Kullanım Kapsamı ve Klinik Kısıtlamalar:**
   - "Şartlı Kullanım" kararı verilen donanımlar (5-15 mm² delik veya dikiş/toka deformasyonu olanlar) için kodda önerilen aksiyon *"Düşük Dozlu İşlemlerde / Hasta Refakatinde Kullan"* şeklindedir.
   - *Soru:* Bu donanımların primer ışınlama alanlarında (Anjiyo, Floroskopi, Skopi Ameliyathanesi) kesinlikle kullanılamayacağı, yalnızca hasta yakını/refakatçi koruyucusu olarak ayrı askılıkta tutulacağı kuralı kılavuzda kırmızı emniyet kutusu ile vurgulanmalı mıdır?

5. **RKS Çift Aşamalı Onay Yetki Protokolü:**
   - Muayeneyi tekniker veya fizikçi yapabilmekte, ancak muayene listesi ekranında kaydın kesinleşmesi için RKS rolündeki kullanıcının `[RKS Olarak Onayla]` butonuna basması beklenmektedir.
   - *Soru:* Muayeneyi doğrudan Radyasyon Korunma Sorumlusu (RKS) kendi kullanıcısıyla yaptığında kayıt anında onaylanmış sayılmakta mıdır, yoksa sistemde her zaman iki aşamalı kontrol mü işletilmelidir?

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

| Özellik / İşlev | Masaüstü Kokpiti (PySide6) | Web & Mobil Portal (`web_portal`) | Hibrit Senkronizasyon Durumu |
|---|---|---|---|
| **RKE Envanter Listesi ve Filtreleme** | `RkeYonetimiController`<br>(Arama, Tür, Birim, Durum, Kontrol/Ömür filtresi, Tabler SVG) | `RkeView.tsx` & `RkeDashboard.tsx`<br>(Mobil kartlar, arama çubuğu, kategori tabları, KPI sayaçları) | **Tam Senkron:** Her iki arayüz de PostgreSQL `rke_envanter` tablosunu anlık okur. |
| **İnteraktif Kusur Haritası Tuvali** | `_EmbeddedKrokiSvgWidget`<br>(Qt Painter ve SVG tabanlı dokunmatik ön/arka tuval) | `RkeKrokiCanvas.tsx`<br>(HTML5 Canvas ve SVG tabanlı dokunmatik pinleme bileşeni) | **Tam Fonksiyonel Çift Yönlü:** Her iki tuval de aynı $x/y$ oran koordinatlarını (`rke_muayene_kusurlar`) işler. |
| **Karekod (QR) Okutma ve Mobil Pasaport** | `RkeQrDialog`<br>(Yazıcı çıktısı ve yüksek çözünürlüklü PNG etiket basımı) | `QrScannerModal.tsx` & `/?rke=KOD`<br>(Kamera ile anında barkod/QR tarama, dijital künye kartı) | **Uçtan Uca Entegre:** Masaüstünden basılan etiket cep telefonu kamerasıyla okutulduğunda mobil portalda anında açılır. |
| **Saha Muayenesi & Hasar Fotoğrafı** | `RkeMuayeneDialog`<br>(Dosyadan fotoğraf/PDF seçme, AES-256 kasaya yazma) | `RkeView.tsx`<br>(Mobil cihaz kamerasıyla yerinde hasar fotoğrafı çekme ve API üzerinden yükleme) | **Tam Senkron:** Sahada mobil ile kaydedilen fotoğraflar masaüstü muayene detayında anında görüntülenir. |
| **Toplu Kalite Kontrol Kokpiti** | `RkeTopluMuayeneDialog`<br>(Gecikenleri seç, tümünü seç, tek tıkla toplu muayene kaydet) | *Web portalda henüz toplu muayene ekranı bulunmamaktadır.* | **Masaüstüne Özgü (Desktop Exclusive):** Ağır toplu işlemler masaüstü kokpitinde yürütülür. |
| **Zimmet & Birim Transfer Tutanağı** | `RkeZimmetDialog`<br>(Teslim eden/alan, gerekçe, hurda kilit koruması) | `ZimmetDashboard.tsx`<br>(Kişisel zimmet izleme ve onaylama paneli) | **Tam Senkron:** Masaüstünden yapılan transferler web portaldaki personel profilinde anında güncellenir. |
| **SKS 6.1 Resmi Excel Çizelgesi** | `RkeYonetimiController._on_sks_rapor`<br>(Sağlık Bakanlığı resmi şablonu Excel dışa aktarımı) | *Web portalda mevcut değildir.* | **Masaüstüne Özgü (Desktop Exclusive):** Resmi format masaüstünden üretilir. |

---

## E. Hedefli Ekran Görüntüsü Talebi

Kılavuz dokümantasyonunu görsel açıdan zenginleştirmek için kullanıcıdan **SADECE 2 kritik pencerenin** ekran görüntüsü talep edilmelidir:

1. **Görsel 1 — RKE Envanter Ana Ekranı (`rke_yonetimi_page`):**
   - *Açıklama:* Üstteki 5 KPI sayaç kartı (Toplam, Aktif/Uygun, Şartlı Kullanım, HEK/Hurda, Kontrolü Geciken), işlem butonları ve renkli ömür/kalan gün etiketlerini içeren ana liste görünümü.
   - *Hedef Dosya Konumu:* `docs/help/assets/img/20_rke_ana_yonetim.png`

2. **Görsel 2 — DIN 6857-1 Kalite Kontrol ve Muayene Kokpiti (`rke_muayene_dialog`):**
   - *Açıklama:* Sol tarafta ön/arka SVG anatomi krokisi üzerinde işaretlenmiş kusur pinleri, sağ tarafta DIN 6857-1 karar rozeti (*success / warning / danger*) ve kusurlar tablosunun yer aldığı çift modlu muayene penceresi.
   - *Hedef Dosya Konumu:* `docs/help/assets/img/20_rke_muayene_kokpiti.png`
