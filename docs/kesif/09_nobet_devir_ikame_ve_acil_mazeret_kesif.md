# RADPYS v4 — Modül 09: Nöbet Devir, İkame ve Acil Mazeret Keşif Raporu

**Tarih:** 2026-09-24  
**Modül:** 09_nobet_devir_ikame_ve_acil_mazeret  
**İlgili Kaynak Kodlar:**  
- `ui/controllers/nobet/nobet_devir_list_controller.py`  
- `ui/controllers/nobet/nobet_devir_dialog_controller.py`  
- `ui/controllers/nobet/nobet_acil_mazeret_dialog_controller.py`  
- `ui/controllers/nobet/nobet_egitim_revizyon_dialog.py`  
- `ui/dialogs/gebelik_bildirimi_dialog.py`  
- `ui/dialogs/yonetici_aksiyon_merkezi_dialog.py`  
- `app/services/nobet/nobet_devir_service.py`  
- `app/services/nobet/nobet_havuz_service.py`  
- `app/services/nobet/nobet_cizelge_service.py`  
- `web_portal/src/components/dashboards/NobetDevirDashboard.tsx`  
- `web_portal/src/routes/nobet.routes.ts`  
**İlgili Arayüz Dosyaları:**  
- `ui/pages/nobet/nobet_devir_listesi_page.ui`  
- `ui/pages/nobet/nobet_devir_dialog.ui`  
- `ui/pages/nobet/nobet_acil_mazeret_dialog.ui`  
- `ui/pages/nobet/nobet_egitim_revizyon_dialog.ui`  
- `ui/pages/personel/gebelik_bildirimi_dialog.ui`  
- `ui/pages/personel/yonetici_aksiyon_merkezi_dialog.ui`  
**Veritabanı Tabloları:** `nobet_devirler`, `nobet_degisim_havuzu`, `nobet_mazeret_log`, `nobet_mazeret_log_detay`, `nobet_cizelgesi`

---

## A. Modülün Özeti ve Görevleri

Modül 09, kesinleşmiş ve yayınlanmış nöbet çizelgelerinde ay içinde meydana gelen operasyonel dinamikleri, personeller arası devir/takas taleplerini, acil mazeret krizlerini ve yasal sağlık bildirimlerini (gebelik, rapor vb.) klinik işleyişi aksatmadan yöneten **karar destek ve aksiyon modülüdür**.

Temel iş akışları:
1. **Personeller Arası P2P Nöbet Devri ve Karşılıklı Takas:**  
   Personelin tutamayacağı bir nöbeti doğrudan meslektaşına devretmesi veya karşılıklı başka bir nöbetle takas etmesi.
2. **Çok Kademeli Hiyerarşik Onay Akışı:**  
   Devir talebinin sırasıyla `alan_personel` (rıza onayı) ➔ `birim_sorumlusu` (klinik uygunluk) ➔ `hizmet_sorumlusu` (nihai yönetici onayı) aşamalarından geçmesi. (Yönetici/Admin acil hallerde doğrudan tek adımda onaylama yetkisine sahiptir.)
3. **Acil Mazeret ve Toplu Akıllı İkame Önerici:**  
   Ani hastalık, kaza, refakat gibi durumlarda personelin seçilen tarih aralığındaki tüm nöbetlerinin düşürülmesi, sistemin kural ihlali yapmayacak en uygun yedek personelleri algoritmik puanlamayla (`uygunluk_puani`) ikame olarak önermesi ve tek tıkla geri alınabilmesi (`btnGeriAl`).
4. **Nöbet Değişim Havuzu (Marketplace):**  
   Personelin birebir muhatap aramadan nöbetini kurumsal açık havuza bırakması, meslektaşlarının uygun nöbetlerle teklif vermesi, 36 saatlik zaman aşımı (TTL) koruması ve aylık 48 saatlik kota kontrolü.
5. **Dönem İçi Eğitim ve Ders Programı Revizyonu:**  
   Lisansüstü/doktora eğitimi gören personelin ders programı dönem ortasında değiştiğinde, geçmiş nöbet kayıtlarını bozmadan seçilen kesim tarihinden itibaren yeni haftalık ders günlerinin sisteme tanımlanması.
6. **Gebelik Bildirimi ve Yönetici Aksiyon Merkezi:**  
   Gebe personele mevzuat gereği derhal radyasyonlu alan ve gece nöbeti yasağının uygulanması; açılan 3 adımlı sihirbazla personelin radyasyonsuz birime transferi, düşen nöbetlerine eski birimden ikame atanması ve yeni birimde eksik kalan mesaisinin gündüz vardiyalarıyla dengelenmesi.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen / İşlem) | NEDEN? (Amacı) | NEREDE? (Arayüz Konumu) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? | DURUM |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nöbet Devir Talebi** (`nobet_devir_dialog.ui`) | Nöbetin başka bir personele devredilmesini başlatmak. | Nöbet Planı / Çizelge / Web Portal | Devredilecek nöbet salt okunur gösterilir; açılır kutudan devralacak personel seçilir, devir nedeni girilir ve onay akışı başlatılır. | Ay içinde nöbet tutulamayacağı anlaşıldığında. | Nöbetçi Personel | Aktif |
| **Tüm Devir İşlemleri Listesi** (`nobet_devir_listesi_page.ui`) | Kurum genelindeki tüm devir/takas hareketlerini merkezi izlemek. | Nöbet Yönetimi > Nöbet Devir Listesi | 7 sütunlu salt-okunur tablo. Seçilen satırın sağ detay panelinde doğal dil özeti ("Ahmet, nöbetini Mehmet'e devretti") oluşturulur. | Sürekli izleme ve denetimde. | Yönetici, Birim Sorumlusu | Aktif |
| **Hiyerarşik Onay Akışı** (`review_devir_talebi`) | Personel rızası ve amir bilgisi olmadan devir yapılmasını engellemek. | Bildirim Merkezi / Web Portal / Onay Listesi | Önce devralacak personel kabul eder (`alan_personel`), ardından birim sorumlusu onaylar (`birim_sorumlusu`), son olarak yönetici onaylar (`hizmet_sorumlusu`). | Talep iletildiğinde adım adım. | Devralan Personel, Sorumlu, Yönetici | Aktif |
| **Acil Mazeret & Toplu İkame** (`nobet_acil_mazeret_dialog.ui`) | Ani mazerette nöbetlerin açıkta kalmasını önlemek. | Nöbet Çizelgesi > [Acil Mazeret] Butonu | Personel ve tarih aralığı seçilir; `[Hesapla]` ile etkilenen nöbetler listelenir; sistem her nöbet için kural ihlali yapmayan ikame adaylarını puanlayarak önerir. | Beklenmeyen hastalık / kaza / vefat hallerinde. | Birim Amiri, Yönetici | Aktif |
| **Mazeret Geri Alma** (`btnGeriAl`) | Hatalı veya sehven girilen acil mazeretleri iptal etmek. | Acil Mazeret > Geçmiş Sekmesi | Geçmiş mazeret satırı seçilip `[Geri Al]` tıklandığında, sistem ikame nöbetleri siler ve mazeretli personelin orijinal nöbetlerini eski durumuna döndürür. | Hatalı bildirim yapıldığında. | Yönetici | Aktif |
| **Ders Programı Revizyonu** (`nobet_egitim_revizyon_dialog.ui`) | Dönem içi üniversite ders programı değişikliklerini işlemek. | Personel İstekleri > [Revize Et] | Revizyon tarihi seçilir; eski talep dondurulur; yeni haftalık ders günleri (Pzt-Pzr) işaretlenerek yeni kısıt başlatılır. | Üniversite ders programı değiştiğinde. | Personel, Birim Sorumlusu | Aktif |
| **Gebelik Bildirimi Dialogu** (`gebelik_bildirimi_dialog.ui`) | Gebe personelin yasal haklarını başlatmak ve korumak. | Personel Detay > [Gebelik Bildirimi] | Bildirim tarihi, tahmini bitiş tarihi ve doktor raporu dosyası girilir; personelin gece nöbeti ve radyasyon izinleri anında kapatılır. | Gebelik doktor raporu ibraz edildiğinde. | İK, Yönetici | Aktif |
| **Yönetici Aksiyon Merkezi** (`yonetici_aksiyon_merkezi_dialog.ui`) | Gebelik sonrası oluşan nöbet ve mesai açıklarını tek ekrandan çözmek. | Sistem Menüsü / Onay Bekleyenler | 3 adımlı kart sihirbazı: 1. Radyasyonsuz birime atama, 2. Eski birimdeki boş nöbetlere ikame seçimi, 3. Yeni birimde eksik mesai için gündüz vardiyaları oluşturma. | Gebelik bildirimi onaylandığında. | Başhekimlik, İdari Yönetici | Aktif |
| **Nöbet Değişim Havuzu** (`nobet_havuz_service.py`) | Muhatap aramadan nöbet takasını pazaryerine açmak. | Mobil Web Portal / Nöbet Havuzu | Nöbet ilanı açılır; meslektaşlar kendi nöbetleriyle takas teklifi verir; ilk onaylayanla eşleşir; nöbete 36 saat kala TTL ile zaman aşımına uğrar. | Nöbet değişim ihtiyacında. | Personel | Aktif |

---

## C. Mantık ve Kısıt Soruları

1. **RED-NOBET_RADIATION_PREGNANCY_BREACH_IN_SWAP Kilidi:**  
   Personelin aktif gebelik bildirimi, emzirme izni, 657 SK m. 105 sağlık raporu, engelli durumu veya radyasyon doz aşımı kısıtı varsa, devir servisi işlemi anında engeller (`SonucYonetici.hata`). Gebe personele hiçbir surette radyasyonlu nöbet devredilemez.
2. **Hizmet Sınıfı Eşitliği Şartı:**  
   Nöbet devri yalnızca aynı hizmet sınıfındaki meslektaşlar arasında yapılabilir (Hemşire ile Radyasyon Teknikeri birbirine nöbet devredemez).
3. **Tek Yönlü Devirde Fazla Mesai Kısıtı:**  
   Aylık zorunlu çalışma süresi (örneğin 140 saat) altındaki taban nöbetler tek yönlü olarak başkasına devredilemez. Personelin o ay zorunlu çalışma süresini aşan fazla mesaisi varsa tek yönlü devir yapılabilir; aksi takdirde sistem "Karşılıklı Takas" seçeneğini zorunlu kılar.
4. **Havuz 48 Saatlik Aylık Limit & 36 Saatlik TTL Kuralı:**  
   Bir personel ayda en fazla 48 saatlik nöbetini değişim havuzuna bırakabilir. Nöbetin başlama saatine 36 saatten az kaldığında havuz ilanı zaman aşımına uğrar (`ZAMAN_ASIMI`). Ancak acil mazerete aktarım süreci otomatik olarak işletilmez; personelin yöneticiye talebi ve amirin klinik zorunluluk olduğunu tespit etmesi neticesinde yönetici inisiyatifiyle acil mazeret ve ikame süreci başlatılır.
5. **Acil Mazeret Geçmiş Tarih İstisnası:**  
   Normalde geçmiş tarihli izin/mazeret talepleri sistem tarafından engellenir; ancak kaza veya ani hastane yatışlarında `talep_kaynagi: "nobet_acil_mazeret"` parametresiyle geçmiş tarih kilitleri yetkili amir için esnetilir.
6. **Admin Tek Adımda Onay (Bypass):**  
   Normal personeller arasında 3 adımlı onay akışı işlerken (`alan_personel` ➔ `birim_sorumlusu` ➔ `hizmet_sorumlusu`), sistem yöneticisi (Admin) acil klinik durumlarda tek tıkla doğrudan nihai onayı verebilir.

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

- **Mobil Web Portal:**  
  - Personel kendi nöbetlerini ve nöbet değişim pazarını (`NobetDevirDashboard.tsx`) inceler.  
  - Meslektaşlarına P2P devir/takas teklifi gönderir veya gelen teklifleri onaylar/reddeder.  
  - Havuz ilanı açar ve açık ilanlara talip olur.
- **Masaüstü Yönetim Kokpiti (PySide6):**  
  - Birim amirleri ve yöneticiler `NobetDevirListController` üzerinden kurum genelindeki tüm hareketleri ve sağ detay panelindeki doğal dil özetini izler.  
  - `NobetAcilMazeretDialogController` ile acil durumlarda toplu nöbet iptali ve akıllı ikame ataması yapar.  
  - `YoneticiAksiyonMerkeziDialog` ile gebe personellerin görev yeri ve nöbet dengelemesini 3 adımlı sihirbazla tamamlar.  
  - `NobetEgitimRevizyonDialog` ile lisansüstü ders programlarını revize eder.

---

## E. Hedefli Ekran Görüntüsü Analizi

Dokümantasyon görsel klasöründe (`docs/help/assets/img/`) Modül 09 için 4 adet hazır ve yüksek çözünürlüklü görsel bulunmaktadır:
1. `09_nobet_devir_dialog.png` — Nöbet Devir Talebi Oluşturma Penceresi.
2. `09_nobet_devir_listesi.png` — Tüm Nöbet Devir ve Değişim İşlemleri Listesi (7 Sütun + Doğal Dil Detay Paneli).
3. `09_nobet_havuz.png` — Web Portal Nöbet Değişim Havuzu (Marketplace) Arayüzü.
4. `09_yonetici_aksiyon_merkezi.png` — Merkezi Yönetici Aksiyon ve Onay Sihirbazı (Gebelik & İkame Dağıtımı).

*Kılavuz için ek olarak `09_nobet_acil_mazeret_dialog.png` (Acil Mazeret ve Akıllı İkame Önerici) ekran görüntüsü gerekirse eklenebilir.*

---

## F. Hayalet Bileşen (Ghost Component) Denetimi

Yapılan kod ve UI çapraz incelemesinde:
- `nobet_devir_listesi_page.ui`: Tüm butonlar (`btnExportExcel`, `btnRefresh`, `btnClearFilters`, `btnPanelKapat`), arama çubuğu ve filtreler `nobet_devir_list_controller.py` içinde tam sinyal-slot bağlantısına sahiptir.
- `nobet_devir_dialog.ui`: `saveButton`, `cancelButton`, `alanPersonelInput` eksiksiz bağlanmıştır.
- `nobet_acil_mazeret_dialog.ui`: `btnHesapla`, `saveButton`, `cancelButton`, `btnGeriAl` eksiksiz bağlanmıştır.
- `nobet_egitim_revizyon_dialog.ui`: Gün onay kutuları ve kaydet butonu eksiksiz bağlanmıştır.
- `gebelik_bildirimi_dialog.ui` & `yonetici_aksiyon_merkezi_dialog.ui`: Sinyal-slot mekanizmaları eksiksiz çalışmaktadır.
- **Sonuç:** Modül 09 kapsamında arayüzde görünüp arkası boş olan hiçbir "Hayalet Bileşen" bulunmamaktadır.
