# 11_fiili_hizmet_ve_sua_hesaplama — Teknik Keşif ve 5N1K Analiz Raporu

- **Taranan Arayüz Dosyaları:** 
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
- **Taranan Domain & Servis Kodları:**
  - `app/services/personel/fiili_hizmet_service.py`
  - `app/domain/fiili_hizmet/policies.py`
  - `app/domain/fiili_hizmet/fhz_calculator.py`
- **Taranan Veritabanı Tabloları:**
  - `personel_fiili_gorev_dagilim`
  - `personel_fiili_hizmet_aylik`
  - `fiili_hizmet_donem_kilitleri`
  - `fiili_hizmet_yillik_kilitler`
  - `sua_hakedis`
  - `personel_sua_hakedis_aylik` (Web analitik view/table)
- **Taranan Web Portal Bileşenleri:**
  - `web_portal/src/components/dashboards/SuaDashboard.tsx`
  - `web_portal/src/routes/dashboard/dashboard.sua.routes.ts`
- **Analiz Tarihi:** 2026-09-24
- **Modül Karmaşıklık Düzeyi:** Tier 3 (Algoritmik Karar / SGK 5510 Fiili Hizmet Zammı & Sağlık Bakanlığı Şua İzni Baremleri)

---

## 1. Modülün Özeti ve Temel Görevleri

Bu modül; radyasyon çalışanlarının 5510 Sayılı Kanun kapsamındaki **Fiili Hizmet Süresi Zammı (FHZ / Yıpranma Payı)** puantajlarını ve Sağlık Bakanlığı'nın 26 Nisan 2022 tarihli mevzuat baremlerine göre **Sağlık İzni (Şua İzni)** hakedişlerini yönetir:

1. **3 Adımlı Entegre Sihirbaz (Wizard) Akışı:**
   - **1. Adım: Görev Dağılımı:** Personellerin ayın 15'inden sonraki ayın 14'üne kadar olan SGK döneminde hangi birimlerde kaçar saat görev yaptığını listeler; otomatik görev ataması ve toplu taslak onaylama sağlar.
   - **2. Adım: Fiili Hizmet Hesaplama:** Nöbet çizelgesi, görev dağılımları ve onaylı izin kesintilerini hibrit olarak birleştirip brüt iş günü, izin kesintisi, net fiili radyasyon saati ve hak edilen Şua izni gününü hesaplar.
   - **3. Adım: Puantaj Raporu:** Hesaplanan aylık ve kümülatif çalışma saatlerini, yasal izin düşümlerini ve audit (denetim izi) izlerini SGK ve mutemetlik formatında raporlar ve Excel'e aktarır.
2. **SGK 15-14 Bordro Dönemi Standardı:** Hesaplama takvim ayı esasına göre değil; her ayın 15'i ile bir sonraki ayın 14'ü arasındaki resmi SGK puantaj dönemi aralığında yürütülür.
3. **Çalışma Koşulları (Koşul A vs Koşul B):**
   - *Çalışma Koşulu A:* Radyasyonlu alanda fiilen çalışan personel (günlük 7.0 saat esası, haftalık 35 saat, Şua hakkı var).
   - *Çalışma Koşulu B:* Radyasyon alanında fiilen çalışmayan idari/destek personeli (günlük 8.0 saat, Şua hakkı yok).
4. **Şua İzni Hak Ediş Algoritması (50 Saate 1 Gün & 30 Gün Tavanı):**
   - Her **50 fiili radyasyon çalışma saatine 1 gün Şua İzni** hak edilir.
   - Yıllık hak ediş tavanı **azami 30 gündür**. 30 günü aşan kısımlarda yasal tavan kesintisi uygulanır.
5. **Kademeli Kilit Güvenliği (Dönem ve Yıllık Kilit):**
   - Bir önceki dönem kilitlenmeden cari dönem kilitlenemez.
   - Yıllık kilit yalnızca Yönetici (Admin) veya Süpervizör rolü tarafından kapatılabilir/açılabilir; yıl kilitlendiğinde geçmiş dönemlerin hesaplaması ve Şua hakedişleri dondurulur.
6. **Onaysız İzin Güvenlik Kalkanı (`fhz_onaysiz_izin_uyari_dialog.ui`):**
   - Dönemde henüz resmi onay verilmemiş izinler varsa hesaplama durdurulur ve kullanıcı İzin Listesi ekranına yönlendirilir.

---

## 2. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Gerekçe / Amaç) | NEREDE? (UI - Controller - DB - Motor) | NASIL? (Formül / Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Rol & Muhatap) | DURUM |
|---|---|---|---|---|---|---|
| **Sihirbaz Adım Göstergesi** (`step_progress`) | 3 adımlı iş akışında kullanıcının hangi aşamada olduğunu göstermek ve adımlar arası geçiş sağlamak. | • **UI:** `fiili_hizmet_listesi_page.ui`<br>• **Ctrl:** `fiili_hizmet_list_controller.py:84` | Adım tıklandığında `mainTabs.setCurrentIndex` tetiklenir; periyotlar sekmeler arası senkronize edilir. | Adım çubuğuna tıklandığında. | Nöbet Sorumlusu, Amir. | **Eksiksiz & Aktif** |
| **Dönem Seçimi (15-14)** (`dagilimYilInput`, `dagilimAyFilter`) | SGK 5510 sayılı Kanun uyarınca her ayın 15'i ile sonraki ayın 14'ü arasındaki bordro dönemini belirlemek. | • **UI:** `fiili_hizmet_dagilim_tab.ui:110,127`<br>• **Ctrl:** `fiili_hizmet_dagilim_tab_controller.py:85`<br>• **DB:** `personel_fiili_gorev_dagilim` | `15.ay.yil` ile `14.(ay+1).yil` tarih aralığı dinamik hesaplanır. | Yıl/ay değiştiğinde veya chevronlara basıldığında. | Sorumlu, Mutemet. | **Eksiksiz & Aktif** |
| **Sadece Değişenler Filtresi** (`dagilimSadeceDegisenlerFilter`) | Varsayılan biriminden farklı bir yerde görevlendirilen personelleri hızlıca denetlemek. | • **UI:** `fiili_hizmet_dagilim_tab.ui:150`<br>• **Ctrl:** `fiili_hizmet_dagilim_tab_controller.py:271` | `departman_id != default_departman_id` olan satırlar filtrelenir; tabloda kırmızı vurgu uygulanır. | Onay kutusu işaretlendiğinde. | Birim Sorumlusu. | **Eksiksiz & Aktif** |
| **Otomatik Görev Ata Butonu** (`btnGorevAdd`) | Personellerin varsayılan kadro ve nöbet birimlerine göre dönemi tek tıkla doldurmak. | • **UI:** `fiili_hizmet_dagilim_tab.ui`<br>• **Ctrl:** `fiili_hizmet_dagilim_tab_controller.py:438`<br>• **Servis:** `ensure_donem_gorev_dagilim_defaults` | Dönemdeki boşluklar personelin varsayılan birimi veya nöbet planı ile doldurulup taslak oluşturulur. | Butona tıklandığında. | Nöbet Sorumlusu. | **Eksiksiz & Aktif** |
| **Onayla ve Hesaplamaya Geç** (`btnBulkApprove`) | Taslak görev dağılımlarını toplu onaylayıp 2. adıma (Hesaplama) geçirmek. | • **UI:** `fiili_hizmet_dagilim_tab.ui:60`<br>• **Ctrl:** `fiili_hizmet_dagilim_tab_controller.py:470`<br>• **DB:** `onay_durumu = 'Onayli'` | Taslak satırları 'Onayli' yapar ve sekmeyi otomatik olarak `FiiliHizmetHesaplamaTab`'a aktarır. | Butona tıklandığında. | Birim Sorumlusu, Amir. | **Eksiksiz & Aktif** |
| **Görev Dağılımı Modalı** (`FiiliHizmetDagilimDialog`) | Bireysel personel için özel tarih aralığı, birim ve çalışma saati girmek/düzenlemek. | • **UI:** `fiili_hizmet_dagilim_dialog.ui`<br>• **Ctrl:** `fiili_hizmet_dagilim_dialog.py:27`<br>• **DB:** `personel_fiili_gorev_dagilim` | 0-24 saat aralığı, çakışma kontrolü ve kilit kontrolü yapar; `upsert_gorev_dagilim` ile kaydeder. | [Yeni Görev] veya [Düzenle] tıklandığında. | Nöbet Sorumlusu. | **Eksiksiz & Aktif** |
| **Dönemi Kilitle / Aç Butonu** (`kilitButton`) | Hesaplanmış ayın fiili hizmet puantajını kesinleştirip yetkisiz değişiklikleri engellemek. | • **UI:** `fiili_hizmet_hesaplama_tab.ui:20`<br>• **Ctrl:** `fiili_hizmet_hesaplama_tab_controller.py:558`<br>• **DB:** `fiili_hizmet_donem_kilitleri` | Bir önceki dönem kilitli mi kontrol eder; otomatik kayıt yapar ve kilidi açar/kapatır. | Butona tıklandığında. | Birim Sorumlusu, Amir. | **Eksiksiz & Aktif** |
| **Yılı Kilitle / Aç Butonu** (`yillikKilitButton`) | Yılın tüm aylarını ve Şua izni hakedişlerini dondurmak. | • **Ctrl:** `fiili_hizmet_hesaplama_tab_controller.py:620`<br>• **DB:** `fiili_hizmet_yillik_kilitler` | Yalnızca Admin/Süpervizör yetkisiyle çalışır; önceki yıl kilitli mi kontrol eder ve yılı kilitler. | Yıllık kilit butonuna tıklandığında. | Sistem Yöneticisi (Admin). | **Eksiksiz & Aktif** |
| **Hakediş Rapor Çıktısı** (`btnExportPdf`, `btnExportExcel`) | Aylık fiili çalışma ve Şua hakediş tablosunu PDF veya Excel olarak kaydetmek. | • **Ctrl:** `fiili_hizmet_hesaplama_tab_controller.py:165-235`<br>• **Servis:** `ExportService` | 8 sütunlu aylık hakediş dökümünü dosyaya yazar; denetim izine (`report_engine`) loglar. | PDF/Excel butonlarına tıklandığında. | Mutemet, Birim Sorumlusu. | **Eksiksiz & Aktif** |
| **Puantaj Raporuna Geç** (`btnNextToRapor`) | 2. adımdan 3. adıma (Puantaj Raporu) geçiş yapmak. | • **UI:** `fiili_hizmet_hesaplama_tab.ui:40`<br>• **Ctrl:** `fiili_hizmet_hesaplama_tab_controller.py:160` | Sekmeyi otomatik olarak `FiiliHizmetRaporTab` indeksine taşır ve periyodu eşitler. | Butona tıklandığında. | Kullanıcı. | **Eksiksiz & Aktif** |
| **Puantaj Excel İndir** (`excelButton`) | SGK ve mutemetlik onaylı nihai yıllık/dönemsel puantajı Excel formatında almak. | • **UI:** `fiili_hizmet_rapor_tab.ui:51`<br>• **Ctrl:** `fiili_hizmet_rapor_tab_controller.py:189`<br>• **Domain:** `RaporTanimi` | Kimlik no, ad soyad, gün, izin, fiili saat, kümülatif saat ve Şua hakediş sütunlarını Excel'e döker. | Butona tıklandığında. | Mutemet, İdari Amir. | **Eksiksiz & Aktif** |

---

## 3. Koddaki Mantık, Kısıtlar ve QMessageBox Validasyonları

1. **26 Nisan 2022 Mevzuat Eşiği (`SUA_ESIK_TARIH`):**
   - Kod sabiti `SUA_ESIK_TARIH = date(2022, 4, 26)`. Sağlık Bakanlığı'nın Şua İzni düzenlemesi uyarınca 26.04.2022 öncesi dönemler için hesaplama yapılmaz (`donem_bit < SUA_ESIK_TARIH` ise kayıt üretilmez).
2. **50 Saate 1 Gün & 30 Gün Azami Şua Tavanı:**
   - Kod formülü: `gun = int(math.ceil(saat / 50.0))`, `min(30, max(0, gun))`. Personel o yıl içerisinde kaç saat fiili radyasyon çalışması yaparsa yapsın, hak edebileceği Şua İzni toplamı **30 günü kesinlikle geçemez**. Tavan aşıldığında sistem detay açıklamasına *"Yıllık 30 gün yasal tavan uygulandı"* ibaresini ekler.
3. **Resmi Onaysız İzin Uyarısı (`FhzOnaysizIzinUyariDialog`):**
   - Hesaplama döneminde henüz amir/yönetici tarafından resmi olarak onaylanmamış izinler varsa hesaplama durdurulur ve uyarı penceresi açılır:
   - *"Seçtiğiniz FHZ hesaplama döneminde henüz Resmi Onay verilmemiş (Ön Onaylı) izinler tespit edilmiştir. Hatalı yasal puantaj oluşmaması için izinlere Resmi Onay veriniz..."*
   - Penceredeki `[İzinlere Git]` butonu kullanıcıyı tek tıkla İzin Yönetimi sayfasına yönlendirir.
4. **Sıralı Dönem Kilidi Kuralı:**
   - Bir dönemin kilitlenebilmesi için bir önceki dönemin kilitli olması zorunludur:
   - *"Bir önceki dönem ({prev_ay}/{prev_yil}) kilitlenmeden bu dönem kilitlenemez."*
5. **Boş Tablo Kilitleme Engeli (RED-15):**
   - Hesaplama yapılmamış veya tablosu boş olan bir dönem kilitlenemez:
   - *"Hesaplanmış veya kaydedilmiş veri bulunmayan boş bir dönem kilitlenemez. Lütfen önce hesaplama yapınız."*
6. **Yıllık Kilit Yetki ve Hiyerarşi Kuralı (RED-09):**
   - Yıllık kilit işlemi yalnızca Yönetici (Admin) veya Süpervizör rolündeki kullanıcılar tarafından yürütülebilir:
   - *"Yıllık kilit açma ve kilitleme işlemleri yalnızca Yönetici (Admin) veya Süpervizör yetkisine sahip kullanıcılar tarafından yapılabilir."*
   - Bir önceki yıl kilitlenmeden cari yıl kilitlenemez: *"Bir önceki yıl ({prev_yil}) kilitlenmeden bu yıl kilitlenemez."*
   - Yıl kilitlendiğinde o yılın dönem kilitleri ve İzin Hakediş ekranındaki Şua günleri manipülasyona karşı tamamen kapatılır.
7. **24 Saat Günlük Çalışma Sınırı:**
   - Görev dağılımı eklenirken günlük çalışma saati 0 ile 24 saat arasında olmak zorundadır. 24 saati aşan girişler engellenir: *"Çalışma saati 0-24 aralığında olmalıdır."*

---

## 4. Hibrit Arayüz Durumu (Masaüstü ve Web Portalı)

- **🖥️ Masaüstü Ekranı (PySide6):**
  - Dosyalar: `ui/pages/fiili/*` ve `ui/controllers/fiili/*`.
  - Yetenekler: 3 adımlı sihirbaz, otomatik görev atama, toplu onay, kilit açma/kapama, yıllık kilit, onaysız izin uyarı yönlendiricisi, PDF/Excel raporları.
- **🌐 Web ve Mobil Portalı (React + Node.js):**
  - Dosyalar: `web_portal/src/components/dashboards/SuaDashboard.tsx` ve `web_portal/src/routes/dashboard/dashboard.sua.routes.ts`.
  - Yetenekler: Personel Şua Karnesi (kazanım yılı, kullanım yılı, toplam fiili saat, hakedilen gün, kullanılan gün, kalan bakiye), aylık fiili çalışma saat grafiği, risk seviyesi renklendirmesi (Kalan $\ge$ 20 gün ise Yüksek Risk, Kalan > 0 ise Orta Risk, 0 ise Uyumlu).
  - Sınırlar: Web portalı yöneticiler ve çalışanlar için analitik izleme ve Şua yanma riskini önceden görme amaçlıdır; görev dağılımı düzenleme ve resmi SGK dönem kilitleme yetkileri masaüstü uygulaması ile sınırlandırılmıştır.

---

## 5. Hayalet Bileşen ve Kod Denetimi

- `.ui` dosyalarında yer alan ancak kod tarafından bilerek gizlenen kontroller:
  - `hesaplaButton` (`fiili_hizmet_hesaplama_tab.ui`): Kodda gizlenmiştir (`hide()`), filtre değişiminde hesaplama otomatik çalışmaktadır.
  - `kaydetButton` (`fiili_hizmet_hesaplama_tab.ui`): Kodda gizlenmiştir (`hide()`), dönem kilitlenirken veya sekme değiştirilirken otomatik kayıt yapılmaktadır.
  - `raporOlusturButton` (`fiili_hizmet_rapor_tab.ui`): Kodda gizlenmiştir (`hide()`), dönem veya yıl seçildiğinde rapor otomatik üretilmektedir.
- Bu kontroller atıl/unutulmuş birer hata değil; arayüzü otomatikleştirmek için controller tarafından kontrollü biçimde gizlenmiş yardımcı butonlardır.
- **Modülde kontrolsüz veya kopuk hiçbir HAYALET BİLEŞEN bulunmamaktadır.**

---

## 6. Hedefli Ekran Görüntüsü Talebi

Kılavuz dokümanında yer alacak 2 kritik ekran görüntüsü:
1. **`11_fiili_hizmet_hesaplama_ana_ekran.png`**: 3 adımlı sihirbaz çubuğu, dönem bilgisi (`15.AA - 14.AA`), kilit rozeti ve hesaplanmış iş günü/izin/fiili saat tablosunu içeren ana ekran.
2. **`11_fhz_onaysiz_izin_uyari_dialog.png`**: Dönemde onay bekleyen izinler varken hesaplama yapıldığında açılan ve kullanıcıyı İzin Listesine yönlendiren uyarı penceresi.

---

## 7. Kullanıcı Kararları ve Saha Teyitleri (2026-09-24)

1. **SGK 15-14 Bordro Dönemi ve Kurumsal Esneklik:** Teyit edildi. Sistem varsayılanı olarak 5510 sayılı Kanun uyarınca her ayın 15'inden bir sonraki ayın 14'üne kadar olan dönem baz alınır. Ancak kurumun bordro ve mutemetlik takvimine göre bu aralık **Genel Ayarlar -> Fiili Hizmet Ayarları** sekmesinden yetkili kullanıcı tarafından değiştirilebilir.
2. **Şua Hak Ediş Baremi (50 Saate 1 Gün & 30 Gün Tavanı):** Teyit edildi. Sağlık Bakanlığı baremleri gereğince her 50 fiili radyasyon çalışma saatine 1 gün Şua İzni hakedilir; yıllık toplam hakediş tavanı azami 30 gün ile sınırlandırılmıştır.
3. **Çalışma Koşulları (Koşul A vs Koşul B):** Teyit edildi. Koşul A (radyasyonlu alanda fiilen çalışan personel, günlük 7.0 saat esası, Şua hakkı var) ile Koşul B (radyasyon alanında fiilen çalışmayan idari/destek personeli, günlük 8.0 saat, Şua hakkı yok) ayrımı sahadaki uygulamayla tam uyumludur.
4. **Kademeli Kilit Güvenliği (Sıralı Dönem ve Yıllık Kilit):** Teyit edildi. Bir önceki ay kilitlenmeden cari ay kilitlenemez. Yıl kilitleme yetkisi sadece Sistem Yöneticisi (Admin) / Süpervizör rolündedir; yıl kilitlendiğinde o yılın hiçbir ayı ve Şua hakedişi değiştirilemez.
5. **Onaysız İzin Güvenlik Kalkanı:** Teyit edildi. Hesaplama döneminde resmi onay almamış (taslak veya ön onaylı) izinler varsa sistem hesaplamayı durdurur ve uyarı verir. Kullanıcı izin onaylarını tamamlamak için manuel olarak İzin Yönetimi ekranına geçiş yapar (otomatik sayfa yönlendirmesi bulunmamaktadır).

