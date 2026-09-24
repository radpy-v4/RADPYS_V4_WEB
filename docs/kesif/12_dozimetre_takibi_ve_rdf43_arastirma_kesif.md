# 12_dozimetre_takibi_ve_rdf43_arastirma — Teknik Keşif ve 5N1K Analiz Raporu

- **Taranan Arayüz Dosyaları:** 
  - `ui/pages/dozimetre/dozimetre_takip_page.ui`
  - `ui/pages/dozimetre/dozimetre_import_page.ui`
  - `ui/pages/dozimetre/dozimetre_olcum_dialog.ui`
  - `ui/pages/personel/doz_arastirma_form_dialog.ui`
- **Taranan Controller Kodları:**
  - `ui/controllers/dozimetre/dozimetre_takip_controller.py`
  - `ui/controllers/dozimetre/dozimetre_takip_main_tab.py`
  - `ui/controllers/dozimetre/dozimetre_aksiyonlar_tab.py`
  - `ui/controllers/dozimetre/dozimetre_import_controller.py`
  - `ui/controllers/dozimetre/dozimetre_olcum_dialog.py`
  - `ui/controllers/personel/doz_arastirma_form_controller.py`
  - `ui/controllers/personel/handlers/dozimetre_handler.py`
- **Taranan Domain & Servis Kodları:**
  - `app/domain/dozimetre/doz_limit_checker.py` (`DozLimitChecker`, `DozSeviye`, `PersonelKategori`)
  - `app/services/personel/dozimetre_service.py` (`DozimetreService`)
  - `app/services/system/export_service.py` (`export_rd_f43_formu`)
- **Taranan Veritabanı Tabloları:**
  - `personel_dozimetre`
  - `dozimetre_aksiyonlar`
  - `personel_doz_arastirma`
  - `personel_calisma_kisitlari`
  - `program_ayarlari`
- **Taranan Web Portal Bileşenleri:**
  - `web_portal/src/components/dashboards/DozimetreDashboard.tsx`
  - `web_portal/src/components/DozimetreRadialGauge.tsx`
  - `web_portal/src/routes/dashboard/dashboard.dozimetre.routes.ts`
- **Analiz Tarihi:** 2026-09-24
- **Modül Karmaşıklık Düzeyi:** Tier 3 (Algoritmik Karar / NDK Mevzuat Doz Limitleri, ICRP 103, RD.F43 / Form A-1 Resmi Araştırma Formu, 10 İş Günü Yasal Süre Takibi ve Kümülatif Limit Kalkanı)

---

## 1. Modülün Özeti ve Temel Görevleri

Bu modül; radyasyon alanlarında görev yapan personellerin periyodik kişisel dozimetre ölçümlerini (TLD, OSL, Film) kayıt altına alan, Nükleer Düzenleme Kurumu (NDK) ve Uluslararası Radyolojik Korunma Komisyonu (ICRP 103) mevzuat sınırlarına göre kümülatif doz risklerini denetleyen ve inceleme düzeyini aşan durumlarda resmi **Doz Araştırma Formu (RD.F43 / Form A-1)** sürecini yöneten hayati bir güvenlik sistemidir:

1. **Çoklu Laboratuvar İçe Aktarım Sihirbazı (`DozimetreImportController`):** TENMAK, RADAT ve Genel Excel laboratuvar formatlarındaki dönemsel dozimetre okuma raporlarını sürükle-bırak veya dosya seçimiyle içe aktarır; T.C. Kimlik / Dozimetre No eşleştirmesi yaparak veritabanına toplu kaydeder.
2. **Kişisel Dozimetre ve Ölçüm Takip Kokpiti (`DozimetreTakipController`):** 
   - *Tab 0 (Ölçümler):* Dönem, birim, durum ve arama filtreleriyle personellerin aylık derin doz $Hp(10)$, yüzeysel doz $Hp(0.07)$, göz merceği dozu $Hp(3)$ ve ekstremite ölçümlerini listeler. Seçili personelin geçmiş tüm ölçümlerini, yıllık kümülatif (20 mSv tavanı) ve 5 yıllık kümülatif (100 mSv tavanı) ilerleme çubuklarında (gauge) anlık gösterir.
   - *Tab 1 (Aksiyonlar):* Kişisel geçmiş ortalamasını aşan anomali ölçümlerini ve erken uyarı risk algoritmasına göre "Kritik", "Yüksek", "İzlem" düzeyindeki adayları listeler.
3. **Resmi RD.F43 Doz Araştırma Formu & Sihirbazı (`DozArastirmaFormController`):**
   - Aylık inceleme eşiğini (2.0 mSv) veya yıllık kümülatif limiti aşan personeller için NDK mevzuatına uygun 4 adımlı araştırma sihirbazı sunar: *1. Kullanım Koşulları (çalışma süresi, koruyucu ekipman kullanımı), 2. Ortam & Kirlilik (radyoaktif bulaşma, cihaz arızası, olağandışı durum), 3. RKS Doz Hesabı (süre ve doz hızından efektif doz simülasyonu), 4. Takip & Sonuç (DÖF başlatma, Word/PDF çıktısı, KVKK evrak kasası).*
4. **10 İş Günü Yasal Süre Geri Sayım Rozeti:** NDK mevzuatı gereğince yüksek doz bildiriminden itibaren 10 iş günü içerisinde araştırma formunun tamamlanıp kuruma iletilmesi yasal zorunluluğunu renkli rozetle dinamik takip eder.
5. **Radyasyon Çalışma Güvenlik Kalkanı (`DozLimitChecker`):** Doz aşımı kesinleşen veya gebe çalışanlarda fötus tavanını (1.0 mSv) aşan personeli sistem otomatik olarak uyarır ve radyasyonlu alanda çalışma yetkisinin durdurulması (`bloke_etmeli_mi = True`) yönünde idari karar desteği üretir.

---

## 2. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Gerekçe / Amaç) | NEREDE? (UI - Controller - DB - Motor) | NASIL? (Formül / Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Rol & Muhatap) | DURUM |
|---|---|---|---|---|---|---|
| **KPI Kartları (Özet Göstergeler)** (`kpiContainer`) | Dönemin toplam ölçüm, personel, rapor, maksimum $Hp(10)$, uyarı ($\ge$1 mSv) ve tehlike ($\ge$5 mSv) sayılarını anlık görmek. | • **UI:** `dozimetre_takip_page.ui:78`<br>• **Ctrl:** `dozimetre_takip_main_tab.py:79`<br>• **Servis:** `summarize_rows` | Tablodaki ölçüm satırlarını filtreye göre toplar ve renklendirir. | Filtre değişiminde veya sayfa açıldığında. | RKS, Amir, İSG | **Eksiksiz & Aktif** |
| **Ölçüm Ekle / Düzenle Butonu** (`btnEkle`, `btnDuzenle`) | Harici rapordan bağımsız münferit dozimetre ölçümlerini sisteme girmek/düzeltmek. | • **UI:** `dozimetre_olcum_dialog.ui`<br>• **Ctrl:** `dozimetre_olcum_dialog.py:26`<br>• **DB:** `personel_dozimetre` | Personel, yıl, ay, $Hp(10)$, $Hp(0.07)$, $Hp(3)$, ekstremite dozları girilir; `upsert` ile kaydedilir. | Butonlara tıklandığında veya sağ tık menüsünde. | RKS, Dozimetre Sorumlusu | **Eksiksiz & Aktif** |
| **Ölçüm Sil Butonu** (`btnSil`) | Hatalı veya mükerrer girilen dozimetre kaydını kaldırmak. | • **Ctrl:** `dozimetre_takip_main_tab.py:267`<br>• **DB:** `personel_dozimetre` | Onay kutusu (`ask_confirm`) açılır; rol yetkisi denetlenip kayıt silinir. | Butona tıklandığında. | Sistem Yöneticisi, RKS | **Eksiksiz & Aktif** |
| **Yeni Dönem Raporu (İçe Aktar)** (`btnImport_2`) | Laboratuvardan gelen TLD/OSL sonuçlarını toplu olarak sisteme aktarmak. | • **UI:** `dozimetre_import_page.ui`<br>• **Ctrl:** `dozimetre_import_controller.py:28`<br>• **Servis:** `parse_and_import` | TENMAK, RADAT veya Excel dosyası taranır; personel T.C. No ile eşleştirilip önizleme tablosunda doğrulanır. | Butona basıldığında modal açılır. | RKS, Kalite Sorumlusu | **Eksiksiz & Aktif** |
| **Yıllık ve 5 Yıllık Kümülatif Barlar** (`gaugeYillikProgress`, `gaugeBesYilProgress`) | Personelin kümülatif dozunun yasal limitlere oranını görsel olarak izlemek. | • **UI:** `dozimetre_takip_page.ui:725,747`<br>• **Ctrl:** `dozimetre_takip_main_tab.py:190`<br>• **Domain:** `DozLimitChecker` | $\text{Yıllık \%} = \frac{\text{Doz}}{20.0} \times 100$, $\text{5 Yıllık \%} = \frac{\text{Doz}}{100.0} \times 100$ | Tabloda personel satırına tıklandığında. | RKS, Çalışan, Hekim | **Eksiksiz & Aktif** |
| **Erken Uyarı & Aksiyon Başlat** (`erkenUyariTable`) | Eşik aşımı riski taşıyan personellere yönelik kurumsal araştırma başlatmak. | • **UI:** `dozimetre_takip_page.ui:791`<br>• **Ctrl:** `dozimetre_aksiyonlar_tab.py:55`<br>• **DB:** `dozimetre_aksiyonlar` | Risk düzeyine göre ("Kritik", "Yüksek") adayları sıralar; sağ tıkla "Aksiyon Başlat" diyaloğunu açar. | Aksiyonlar sekmesi açıldığında. | RKS, Amir | **Eksiksiz & Aktif** |
| **Anomali Ölçüm Tablosu** (`anomaliTable_2`) | Personelin kendi geçmiş ortalamasından radikal sapan ölçümleri yakalamak. | • **UI:** `dozimetre_takip_page.ui:858`<br>• **Ctrl:** `dozimetre_aksiyonlar_tab.py:27` | Ölçüm / Kişisel Ortalama oranı eşiği aştığında satır anomali tablosuna düşer. | Aksiyonlar sekmesi açıldığında. | RKS, Denetçi | **Eksiksiz & Aktif** |
| **Resmi RD.F43 Doz Araştırma Formu** (`DozArastirmaFormController`) | İnceleme eşiğini aşan dozlarda NDK resmi araştırma formunu düzenlemek ve arşivlemek. | • **UI:** `doz_arastirma_form_dialog.ui`<br>• **Ctrl:** `doz_arastirma_form_controller.py:45`<br>• **DB:** `personel_doz_arastirma` | 4 adımlı sihirbaz; unutulma, tıbbi tetkik, koruyucu ekipman sorularını yanıtlar; efektif doz hesaplar. | Aksiyon çift tıklandığında veya sağ tık menüsünde. | RKS (Radyasyondan Korunma Sorumlusu) | **Eksiksiz & Aktif** |
| **10 İş Günü Yasal Süre Rozeti** (`lblYasalSureRozeti`) | RD.F43 formunun NDK mevzuatında belirtilen 10 iş günü içinde tamamlanmasını sağlamak. | • **Ctrl:** `doz_arastirma_form_controller.py:362`<br>• **Utils:** `calculate_business_days_remaining` | Form tarihine 10 iş günü eklenir; bugüne göre kalan iş günü hesaplanır (Kalan $\le$ 3 ise turuncu, dolmuşsa kırmızı). | Form tarihi değiştiğinde. | RKS, Yönetici | **Eksiksiz & Aktif** |
| **Doz Hesaplama Aracı** (`btnHesaplaDoz`) | Şüpheli maruziyet süresi ve doz hızından efektif dozu hesaplamak. | • **Ctrl:** `doz_arastirma_form_controller.py:347` | $\text{Efektif Doz} = \text{Süre (saat)} \times \text{Doz Hızı (mSv/sa)}$ | [Doz Hesapla] tıklandığında. | RKS, Medikal Fizikçi | **Eksiksiz & Aktif** |
| **Resmi Word / PDF Çıktısı** (`btnExportWord`, `btnExportPdf`) | NDK denetimine ve imza parafına sunulmak üzere RD.F43 formunu üretmek. | • **Ctrl:** `doz_arastirma_form_controller.py:391`<br>• **Servis:** `ExportService.export_rd_f43_formu` | `data/templates/RD-F43_Doz_Arastirma_Formu.docx` şablonuna verileri ve imza bloklarını doldurur. | [Word İndir] / [PDF İndir] tıklandığında. | RKS, Başhekimlik | **Eksiksiz & Aktif** |
| **Excel Raporu Aktarımı** (`btnExcel`) | Dönem ölçüm listesini tablo halinde dışa aktarmak. | • **Ctrl:** `dozimetre_takip_main_tab.py:284`<br>• **Servis:** `export_measurements_to_excel` | Aktif filtredeki tüm satırları sayısal tabular formatta `.xlsx` dosyasına yazar. | Butona tıklandığında. | RKS, İSG Uzmanı | **Eksiksiz & Aktif** |

---

## 3. Koddaki Mantık, Kısıtlar ve QMessageBox Validasyonları

1. **NDK Yasal Doz Limitleri ve Öncelik Hiyerarşisi (`DozLimitChecker`):**
   - **Gebe Personel (RED-DOZ-01):** Gebelik bildirimi yapılmış çalışanın fötus kümülatif dozu **1.0 mSv** tavanını aşarsa `GEBE_KRITIK` seviyesi verilir, `bloke_etmeli_mi = True` döner:
     - *"Gebe çalışan kümülatif fötus dozu yasal tavanı aştı ({doz} mSv > 1.00 mSv). Personel derhal radyasyonlu çalışma alanından çıkarılmalı ve idari göreve çekilmelidir."*
   - **Aylık İnceleme Eşiği (RED-DOZ-02):** Aylık derin doz $Hp(10) >$ **2.0 mSv** ise `INCELEME_GEREKTIREN` seviyesi verilir. Doğrudan blokaj yapmaz (`bloke_etmeli_mi = False`), ancak 10 iş günü içinde resmi **RD.F43 Doz Araştırma Formu** düzenlenmesini zorunlu kılar.
   - **Yıllık Kümülatif Limit (RED-DOZ-03):** Takvim yılı kümülatif dozu $>$ **20.0 mSv** ise `LIMIT_ASIMI` seviyesi verilir, personel radyasyon alanından derhal bloke edilir (`bloke_etmeli_mi = True`):
     - *"Yıllık yasal etkin doz sınırı aşıldı ({doz} mSv > 20.00 mSv). Personelin radyasyon alanı çalışma yetkisi durdurulmalı, NDK'ya bildirim yapılmalıdır."*
   - **5 Yıllık Kümülatif Limit (RED-DOZ-03):** Ardışık 5 yıllık kümülatif doz $>$ **100.0 mSv** ise bloke edilir (`bloke_etmeli_mi = True`). (Tek bir yılda mutlak azami sınır 50.0 mSv'dir).
   - **Stajyer Limiti:** 16-18 yaş arası stajyerler için yıllık etkin doz limiti **6.0 mSv**'dir; aşılırsa stajyer radyasyon alanından derhal uzaklaştırılır.
   - **Ekstremite ve Göz Lensi (RED-DOZ-04):** El/ayak/cilt için yıllık eşdeğer doz **500.0 mSv**, göz merceği için **20.0 mSv** limitine tabidir.
2. **10 İş Günü Yasal İnceleme Süresi Kuralı:**
   - Eşik aşımı tespit edilen ölçümlerde NDK mevzuatı gereğince form tarihinden itibaren en geç 10 iş günü içinde resmi araştırma tamamlanmalıdır. Kalan iş günü $\le$ 3 olduğunda sistem turuncu, 0'ın altına düştüğünde *"Yasal Süre Doldu!"* kırmızı ikazını yakar.
3. **Mükerrer Ölçüm Validasyonu (`check_duplicate`):**
   - Aynı personel için aynı yıl ve ayda birden fazla primer dozimetre ölçüm kaydı girilemez:
     - *"Bu personel için seçilen yıl ({yil}) ve ayda ({ay}) zaten kayıtlı bir dozimetre ölçümü bulunmaktadır."*
4. **Negatif Doz Engeli:**
   - Dozimetre ölçüm girişlerinde $Hp(10)$, $Hp(0.07)$ veya ekstremite değerleri negatif girilemez:
     - *"Doz ölçüm değerleri negatif olamaz."*
5. **DÖF ve Tıbbi Tetkik / Unutulma Ayrımı:**
   - Yüksek dozun personelin bizzat hasta olarak BT/Sintigrafi çektirmesinden veya dozimetreyi röntgen odasında unutmasından kaynaklandığı tespit edilirse bu durum formda artefakt olarak doğrulanır; gerçek bir mesleki maruziyet varsa **DÖF (Düzeltici Önleyici Faaliyet)** numarası zorunlu tutulur.

---

## 4. Hibrit Arayüz Durumu (Masaüstü ve Web Portalı)

- **🖥️ Masaüstü Ekranı (PySide6):**
  - Dosyalar: `ui/pages/dozimetre/*`, `ui/controllers/dozimetre/*` ve `doz_arastirma_form_controller.py`.
  - Yetenekler: Tam yetkili TLD/OSL içe aktarma sihirbazı, manuel ölçüm ekleme/düzenleme/silme, anomali tespiti, 4 adımlı RD.F43 Doz Araştırma Formu düzenleme, 10 iş günü geri sayım rozeti, Word (.docx) ve PDF resmi rapor üretimi, Excel aktarımı.
- **🌐 Web ve Mobil Portalı (React + Node.js):**
  - Dosyalar: `web_portal/src/components/dashboards/DozimetreDashboard.tsx`, `DozimetreRadialGauge.tsx` ve `dashboard.dozimetre.routes.ts`.
  - Yetenekler: 
    - 4 Sekmeli Görünüm: *Kritik Vakalar, Aksiyonlar, NDK Formları, Tüm Ölçümler*.
    - Görsel Dozimetre Göstergeleri: Yıllık (20 mSv) ve 5 yıllık (100 mSv) kümülatif dozu gösteren dairesel radyal kadranlar (`DozimetreRadialGauge`).
    - Doz Dağılım Bantları Grafiği: Personelin doz seviyelerine göre dağılımı ($<0.2$ mSv, $0.2-1$ mSv, $1-2$ mSv, $2-5$ mSv, $>5$ mSv).
    - En Yüksek Maruziyet Listesi (Top Exposure Personnel) ve NDK Araştırma Formu takip listesi.
  - Sınırlar: Web portalı çalışanlar ve yöneticiler için gerçek zamanlı radyasyon takibi, şeffaf doz karnesi ve risk analizi sunar; laboratuvar dosya importu ve resmi form oluşturma masaüstü RKS yetkisine ayrılmıştır.

---

## 5. Hayalet Bileşen ve Kod Denetimi

- `dozimetre_takip_page.ui` üzerindeki kontroller:
  - `btnScreenClose`: Kodda `self.btnScreenClose.clicked.connect(self.close)` ile bağlıdır.
  - `btnToggleFilters`: Kodda `self.btnToggleFilters.clicked.connect(self._toggle_filters)` ile filtre panelini açıp kapama işlevine bağlıdır.
  - `btnImport_2` (arayüzde `btnImport_2` adında, kodda `btnImport` alias'ıyla bağlı): Dozimetre içe aktarım penceresini açar.
  - `btnEkle`, `btnDuzenle`, `btnSil`, `btnExcel`, `btnYenile_2` (alias `btnYenile`): Hepsi controller slotlarına eksiksiz bağlanmıştır.
- `dozimetre_import_page.ui` ve `doz_arastirma_form_dialog.ui` dosyalarındaki tüm sihirbaz adımları, butonlar ve radio grupları işlevseldir.
- **Modülde kontrolsüz veya kopuk hiçbir HAYALET BİLEŞEN bulunmamaktadır.**

---

## 6. Hedefli Ekran Görüntüsü Talebi

Kılavuz dokümanında yer alacak 2 kritik ekran görüntüsü:
1. **`12_dozimetre_takip_ana_ekran.png`**: KPI kartları, filtre çubuğu, ana ölçüm tablosu ($Hp(10), Hp(0.07)$) ve sağdaki yıllık/5 yıllık kümülatif gösterge barlarını içeren ana kokpit.
2. **`12_doz_arastirma_form_dialog.png`**: Eşik aşımında açılan resmi RD.F43 Doz Araştırma Formu sihirbazı (10 iş günü yasal süre rozeti, kullanım koşulları ve RKS doz hesabı ekranı).

---

## 7. Kullanıcı Teyidi İçin Mantık ve Kısıt Soruları

1. **NDK Yasal Doz Limitleri ve Öncelik Hiyerarşisi:**
   - Aylık inceleme eşiği: **2.0 mSv** (RD.F43 araştırma formu açılır, doğrudan blokaj yapmaz).
   - Yıllık kümülatif sınır: **20.0 mSv** (aşılırsa personel radyasyon alanından bloke edilir).
   - 5 yıllık kümülatif sınır: **100.0 mSv** (aşılırsa personel bloke edilir; tek yılda azami sınır 50 mSv).
   - Gebe çalışan fötus tavanı: **1.0 mSv** (gebelik boyunca biriken toplam doz; 1.0 mSv aşılırsa personel derhal idari göreve çekilir).
   - Stajyer (16-18 yaş) sınırı: **6.0 mSv/yıl**, Ekstremite sınırı: **500.0 mSv/yıl**, Göz lensi sınırı: **20.0 mSv/yıl**.
   *Bu mevzuat baremleri ve güvenlik blokajları kurumunuzca onaylanıyor mu?*
2. **10 İş Günü Yasal Araştırma Formu Süresi (RD.F43 / Form A-1):**
   - Eşik aşımında NDK mevzuatı gereği 10 iş günü içerisinde resmi Doz Araştırma Formu düzenlenmesi zorunludur. Sistemde renkli geri sayım rozeti yer alır (Kalan > 3 gün sarı, $\le$ 3 gün turuncu, aşımda kırmızı uyarı). *Bu 10 iş günü süresi sahada esas alınan süreniz midir?*
3. **Dozimetre Rapor İçe Aktarım Sağlayıcıları (TENMAK, RADAT, Excel):**
   - İçe aktarım sihirbazında TENMAK, RADAT ve Genel Excel seçenekleri mevcuttur. *Kurumunuzun çalıştığı resmi dozimetre sağlayıcısı bu formatlarla tam uyumlu mudur?*
4. **Dozimetre Anomali Katsayısı ve Erken Uyarı:**
   - Bir personelin o ayki dozu, kendi geçmiş kişisel ortalamasının belirli bir katını (örneğin 3 katını) aştığında sistem bunu doğrudan anomali olarak listelemekte ve erken uyarı tablosuna almaktadır. *Bu kişisel ortalama sapma denetimi kurumunuzda geçerli midir?*
5. **DÖF ve Tıbbi Tetkik / Unutulma Ayrımı:**
   - Doz Araştırma Formunda aşımın personelin bizzat hasta olarak BT/Sintigrafi çektirmesinden veya dozimetrenin şua odasında unutulmasından kaynaklandığı (sahte aşım/artefakt) belgelenebilmekte; gerçek bir mesleki maruziyet durumunda ise DÖF numarası zorunlu tutulmaktadır. *Bu iş kuralı kurumunuzdaki uygulamayla örtüşüyor mu?*

---

## 8. Kullanıcı Kararları ve Saha Teyitleri (2026-09-24)

1. **NDK Yasal Doz Limitleri ve Güvenlik Blokajları:** Teyit edildi. Gebe çalışan (1.0 mSv), aylık inceleme eşiği (2.0 mSv), yıllık kümülatif limit (20.0 mSv), 5 yıllık tavan (100.0 mSv, tek yılda azami 50 mSv), stajyer (6.0 mSv), ekstremite (500.0 mSv) ve göz lensi (20.0 mSv) yasal limitleri ve aşımda uygulanan çalışma blokajları eksiksiz onaylanmıştır.
2. **10 İş Günü Yasal Araştırma Formu Süresi (RD.F43 / Form A-1):** Teyit edildi. NDK mevzuatı gereği bildirim tarihinden itibaren 10 iş günü içinde resmi Doz Araştırma Formu düzenlenmesi zorunluluğu ve renkli geri sayım rozeti standardı kabul edilmiştir.
3. **Dozimetre Rapor İçe Aktarım Sağlayıcıları ve Yazılım Destek Prosedürü:** Teyit edildi. Sistem TENMAK, RADAT ve Genel Excel formatlarını tam desteklemektedir. Kurumun çalıştığı dozimetre laboratuvarı/sağlayıcısı farklı bir dosya formatı kullanıyorsa, kullanıcılar örnek bir dozimetre raporu ile yazılım destek ekibine başvuracak; gerekli sağlayıcı ayrıştırıcı güncellemesi sisteme eklenecektir.
4. **Dozimetre Anomali Katsayısı ve Erken Uyarı:** Teyit edildi. Personelin o ayki dozunun kendi kişisel geçmiş ortalamasını radikal biçimde aşması durumu anomali ve erken uyarı tablosunda önceliklendirilecektir.
5. **DÖF ve Tıbbi Tetkik / Unutulma Ayrımı:** Teyit edildi. Hastane içi tetkik veya unutulma gibi sahte aşım (artefakt) durumları kayıt altına alınacak; mesleki gerçek maruziyet durumunda ise kurumsal DÖF takip numarası açılacaktır.
6. **Ekran Görüntüleri Arşivi:** `assets/img/` klasöründe yer alan `12_` ön ekli tüm gerçek ekran görüntüleri (`12_1_dozimetre_list.png`, `12_2_dozimetre_olcum.png`, `12_dozimetre import.png`, `12_doz_arastirma_form_dialog.png`, `12_1_doz_arastirma_form_dialog.png`, `12_2_doz_arastirma_form_dialog.png`, `12_3_doz_arastirma_form_dialog.png`) kılavuz sayfasına entegre edilecektir.
