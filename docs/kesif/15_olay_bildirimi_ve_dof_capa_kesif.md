# Keşif Raporu: Modül 15 — Olay Bildirimi ve DÖF (CAPA) (15_olay_bildirimi_ve_dof_capa)

**Tarih:** 2026-09-24  
**İncelenen Kod Tabanı:**
- UI Dosyaları: `ui/pages/kalite/olay_bildirim_page.ui`, `ui/pages/kalite/olay_inceleme_dialog.ui`, `ui/pages/kalite/olay_dof_dialog.ui`, `ui/pages/kalite/olay_tarihce_dialog.ui`
- Controller Dosyaları: `ui/controllers/olay/olay_bildirim_controller.py`, `ui/controllers/olay/olay_inceleme_dialog.py`, `ui/controllers/olay/olay_dof_dialog.py`, `ui/controllers/olay/olay_tarihce_dialog.py`
- Servis & Repository: `app/services/system/olay_bildirim_service.py`, `app/infrastructure/db/repositories/olay_bildirim_repository.py`
- Veritabanı Modelleri: `olay_bildirimler`, `olay_dof_takip`, `olay_lookup`, `olay_bildirim_secimler`, `olay_bildirim_gecmisi`, `olay_belgeler` (`app/db/schema.sql`)
- Web Portal Karşılıkları: `web_portal/src/components/IncidentReportForm.tsx`, `web_portal/src/components/dashboards/OlayBildirimiDashboard.tsx`, `web_portal/src/routes/olay.routes.ts`

---

## A. Modülün Özeti ve Görevleri

**Olay Bildirimi ve DÖF (CAPA) Modülü**; Sağlık Bakanlığı Sağlıkta Kalite Standartları (SKS 6.1) ve NDK RSGD-KLV-005 mevzuatı uyarınca sağlık kurumundaki radyasyon kaynaklı kazaları, ramak kala durumları, cihaz arızalarından doğan riskleri ve uygunsuzlukları kayıt altına almayı, kök neden analizi yürütmeyi, Düzeltici ve Önleyici Faaliyet (DÖF/CAPA) atamayı, 72 saatlik NDK yasal bildirim sürelerini takip etmeyi ve açık DÖF'ler tamamlanmadan olayın kapatılmasını engelleyen güvenlik kilitlerini yönetmeyi sağlar.

### Koddan Tespit Edilen Temel İş Akışları:
1. **3 Adımlı Olay Bildirim Sihirbazı (Wizard):**
   - **Adım 1 (Temel Bilgiler):** Olay tarihi/saati, gerçekleştiği birim (seçimli veya serbest metin), bildiren personel (seçimli veya anonim korumalı), bildiren görevi, etkilenen taraf, olay sonucu/şiddeti (*Ramak Kala, Hafif Zarar, Orta Zarar, Ciddi Zarar*) ve geri bildirim e-posta isteği.
   - **Adım 2 (Sınıflandırma):** Üst olay kategorisi seçimi, kategoriye bağlı dinamik alt detay checklist'i (açıklama gerektiren "Diğer" alanları dahil) ve kök neden checklist'i.
   - **Adım 3 (Açıklamalar):** Zorunlu detaylı olay tanımı, olay anında yapılan acil müdahaleler ve benzer olayları önleyici DÖF tavsiyeleri.
2. **72 Saatlik / 3 İş Günü NDK Yasal Bildirim Takip Motoru (`compute_ndk_status`):**
   - Radyolojik olaylarda veya NDK zorunlu işaretlenen kayıtlarda yasal bildirim süresi hesaplanır (acil kazalarda 1 iş günü, diğerlerinde 3 iş günü; Cumartesi-Pazar hariç). Kalan gün sayısına göre `GECİKMEDE`, `SON GÜN (72s Sınırı!)` veya `Bekliyor` renkli etiketleri atanır.
3. **Kapsamlı Olay İnceleme ve Atama Penceresi (`OlayIncelemeDialog`):**
   - Tablodan çift tıklanarak veya `[Olayı İncele]` butonuyla açılan 4 sekmeli/adımlı modal:
     - *1. Olay Künyesi:* Tüm bildirim detayları, kök nedenler ve açıklamalar.
     - *2. İnceleme & Atama:* Durum yönetimi (*Açık, İncelemede, Kapalı, İptal*), sorumlu atama (Birim Sorumlusu ve RGS/RSO havuzu) ve NDK bildirim tarihi işleme.
     - *3. DÖF Faaliyetleri:* Bağlı DÖF kayıtları tablosu, yeni faaliyet ekleme ve tamamlama.
     - *4. Tarihçe:* Kimin hangi alanı ne zaman değiştirdiğini gösteren audit log tablosu.
4. **Açık DÖF Kapatma Kilidi (CAPA Closure Guard):**
   - Bir olay kapatılmak istendiğinde (`durum = 'Kapalı'`), olaya bağlı devam eden açık DÖF aksiyonu varsa sistem kapatmayı kesinlikle reddeder (`QMessageBox.warning`). Kapatma için tüm DÖF'lerin tamamlanmış olması ve zorunlu kapanış notunun girilmesi şarttır.
5. **Cihaz Arıza Entegrasyonu (`olaydan_ariza_kaydi_olustur`):**
   - Cihazla ilişkili bir olayda tek tıkla teknik servis arıza kaydı (`cihaz_arizalar`) açılır ve DÖF kaydı otomatik oluşturulur.
6. **Resmi Tutanak Yazdırma / PDF Çıktısı (`_on_yazdir_clicked`):**
   - Kurum antetli, bildirim künyeli, kök nedenleri, DÖF tablosunu ve 3'lü imza bloğunu (*Bildiren, Sorumlu, RSO Onay/Mühür*) içeren resmi tutanak çıktısı üretilir.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Amaç) | NEREDE? (Ekran Konumu) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? | DURUM |
|---|---|---|---|---|---|---|
| **[Hızlı Ara (`txtArama`)]** | Takip no, personel, birim veya açıklamaya göre anlık aramak. | Olay Listesi Üst Filtre Bandı | Metin değiştikçe tabloyu anlık süzer. Boşta boş durum kartı gösterir. | Liste incelenirken. | Tüm Kullanıcılar | **Eksiksiz & Aktif** |
| **[Kategori Filtresi (`cmbFiltreKategori`)]** | Olayları kategorisine göre süzmek. | Olay Listesi Üst Filtre Bandı | Seçilen kategorideki olayları dinamik filtreler. | İnceleme esnasında. | Kalite / RKS | **Eksiksiz & Aktif** |
| **[Durum Filtresi (`cmbFiltreDurum`)]** | Açık, İncelemede, Kapalı veya Tümü listelemek. | Olay Listesi Üst Filtre Bandı | Durum koduna göre tabloyu günceller. | İnceleme esnasında. | Kalite / RKS | **Eksiksiz & Aktif** |
| **[Olayı İncele (`btnOlayIncele`)]** | Seçili olayın 4 adımlı inceleme ve DÖF diyaloğunu açmak. | Olay Listesi Üst Araç Çubuğu | Çift tıklama ile aynı işlevi görür; `OlayIncelemeDialog` modalini açar. | Olay atama ve inceleme yapılacağında. | Kalite / RKS / Yönetici | **Eksiksiz & Aktif** |
| **[Excel / CSV Aktar (`btnExcelAktar`)]** | Olay kayıtlarını tablo olarak dışa aktarmak. | Olay Listesi Üst Araç Çubuğu | UTF-8 BOM destekli noktalı virgüllü CSV tablosu üretir. | Raporlama ve arşivlemede. | Kalite / RKS | **Eksiksiz & Aktif** |
| **[Rapor Merkezi (`btnRaporMerkezi`)]** | Grafiksel olay trend analizini açmak. | Olay Listesi Üst Araç Çubuğu | Rapor Merkezi'ni açarak `olay_bildirim_trend` kodlu raporu seçtirir. | İstatistiki incelemelerde. | Yönetici / Kalite | **Eksiksiz & Aktif** |
| **[İncelemeye Al (`btnIncelemeyeAl`)]** | Olay durumunu 'İncelemede' yapmak ve sorumlu atamak. | Hızlı Aksiyon & İnceleme Dialog | Oturum açan kullanıcı yetkiliyse onu, değilse birim sorumlusunu atar. | Olay işleme alındığında. | RKS / Birim Sorumlusu | **Eksiksiz & Aktif** |
| **[DÖF Yönetimi (`btnDofYonetimi` / `btnHizliDof`)]** | Olaya bağlı DÖF faaliyetleri modalini açmak. | Hızlı Aksiyon & İnceleme Dialog | `OlayDofDialog` penceresini açarak DÖF ekleme/tamamlama sağlar. | Aksiyon planlanırken. | RKS / Birim Sorumlusu | **Eksiksiz & Aktif** |
| **[Tarihçe / Audit Log (`btnTarihce`)]** | Olay üzerindeki değişiklik denetim izini incelemek. | Hızlı Aksiyon & İnceleme Dialog | `OlayTarihceDialog` modalinde eski/yeni değerleri ve kullanıcıyı gösterir. | Denetim veya incelemede. | Kalite / RKS / Yönetici | **Eksiksiz & Aktif** |
| **[Olayı Kapat (`btnOlayKapat`)]** | Olayı sonuçlandırıp 'Kapalı' statüsüne almak. | Hızlı Aksiyon & İnceleme Dialog | Açık DÖF varsa engeller; kapanış notu alarak olayı kapatır. | Tüm aksiyonlar bittiğinde. | Kalite Sorumlusu / RKS | **Eksiksiz & Aktif** |
| **[NDK Bildir (`btnNdkBildir`)]** | NDK portalına yapılan resmi bildirimi mühürlemek. | Hızlı Aksiyon & İnceleme Dialog | Tarih girişi alır, NDK takip durumunu 'yapildi' olarak işaretler. | NDK portalına bildirim yapıldığında. | RKS / Yönetici | **Eksiksiz & Aktif** |
| **[Yazdır / Tutanak (`btnYazdir`)]** | Resmi SKS/NDK olay ve DÖF tutanağını basmak. | Hızlı Aksiyon & İnceleme Dialog | Kurum logolu, 3 imzalı resmi HTML tutanak üretir ve yazıcıya gönderir. | Resmi evrak arşivinde. | Kalite / RKS | **Eksiksiz & Aktif** |
| **[Yeni Olay Bildirimi Sihirbazı]** | 3 adımda yeni olay kaydı oluşturmak. | 2. Sekme (`tabYeniBildirim`) | Validasyonlu Adım 1 -> Adım 2 -> Adım 3 akışıyla kaydı veritabanına işler. | Bir olay yaşandığında. | Tüm Personeller | **Eksiksiz & Aktif** |
| **[Anonim Bildirim (`chkAnonim`)]** | Bildiren personel kimliğini gizlemek. | Sihirbaz Adım 1 | İşaretlendiğinde personel combobox'ını pasifleştirir ve anonim kaydeder. | Personel kimliğini gizlemek istediğinde. | Bildiren Personel | **Eksiksiz & Aktif** |
| **[Geri Bildirim E-Postası (`chkGeriBildirim`)]** | İnceleme sonucundan haberdar olmak. | Sihirbaz Adım 1 | İşaretlendiğinde e-posta alanını zorunlu kılar. | Bildiren sonuçtan bilgi istediğinde. | Bildiren Personel | **Eksiksiz & Aktif** |
| **[DÖF Tamamlama (`btnDofTamamla`)]** | DÖF faaliyetini 'Tamamlandı' yapmak. | DÖF Tablosu Yanı | Teyit alarak faaliyeti kapatır; olayın kapatılabilmesinin önünü açar. | Önlem hayata geçirildiğinde. | Sorumlu / RKS | **Eksiksiz & Aktif** |

---

## C. Mantık ve Kısıt Soruları (Kullanıcı Teyidine Sunulacak Noktalar)

1. **NDK 72 Saatlik Yasal Süre:**
   - Kodda acil kazalarda (`Ciddi Zarar`, `Orta Zarar`) yasal süre **1 iş günü** (24 saat), diğer radyolojik uygunsuzluklarda **3 iş günü** (72 saat) olarak resmi iş günleri üzerinden (`_add_business_days`, hafta sonu hariç) hesaplanmaktadır. Bu süreler kurumunuzun NDK radyasyon güvenliği prosedürü ile tam uyumlu mudur?
2. **Açık DÖF Kapatma Kilidi:**
   - Sistem, bir olaya bağlı henüz tamamlanmamış en az 1 DÖF faaliyeti varsa olayın 'Kapalı' statüsüne alınmasını kesinlikle engellemektedir. İstisnai durumlarda (örn. DÖF iptal edildiğinde) olayın kapatılabilmesi için DÖF statüsünün 'İptal' veya 'Tamamlandı' yapılması gerekmektedir. Bu işleyiş onaylanmakta mıdır?
3. **Anonim Bildirim ve Hukuki Statü:**
   - Personel [x] Anonim Bildirim seçtiğinde ad-soyad kaydedilmemektedir. Kurum kalite politikanızda anonim bildirimler resmi SKS denetimlerinde tam geçerli kabul edilmekte midir?
4. **Cihaz Arıza Otomasyonu:**
   - Olay bir tıbbi cihazla ilişkili olduğunda, sistem tek tıkla teknik servis arıza kaydı açmakta ve otomatik DÖF kaydı üretmektedir. Bu entegrasyon doğrudan arıza takip ekibine görev düşürmektedir; işleyiş onayınızda mıdır?
5. **Yetkili Sorumlu Havuzu:**
   - Sorumlu atamasında sadece *Birim Kategori Sorumluları* ve *RGS/RSO Görevlendirmeleri* listelenmektedir (olayın gerçekleştiği birimin sorumlusu en başta yıldızlı olarak önerilmektedir). Bu liste haricindeki personele atama yapılamaması kuralı geçerli midir?

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

- **Masaüstü Uygulaması (RKS, Kalite ve Yönetim Merkezi):**
  - Olayların incelendiği, kök nedenlerin analiz edildiği, sorumlu atandığı, NDK yasal bildirim sürelerinin (72 saat sayacı) takip edildiği, DÖF faaliyetlerinin yürütüldüğü, denetim izlerinin izlendiği ve resmi tutanakların (PDF/Baskı) üretildiği ana operasyonel merkezdir.
- **Web Portalı & Mobil Saha Arayüzü (`IncidentReportForm.tsx` & `OlayBildirimiDashboard.tsx`):**
  - **Saha Personeli Olay Bildirimi (`IncidentReportForm`):** Personel klinikte veya sahada karşılaştığı bir kazayı/ramak kalayı cep telefonu veya tabletinden 3 adımlı form ile saniyeler içinde fotoğraflayarak veya not düşerek sisteme aktarabilir.
  - **Kalite Yönetim Paneli (`OlayBildirimiDashboard`):** Kalite direktörleri ve hastane yönetimi web üzerinden toplam olay, bekleyen DÖF'ler, çözülen vakalar, NDK bildirim bekleyenler KPI kartlarını ve kategori dağılımı ile aylık trend grafiklerini canlı olarak izleyebilir.

---

## E. Hedefli Ekran Görüntüsü Talebi

Kılavuz ve yardım portalı görsel bütünlüğü için `docs/help/assets/img/` klasörüne eklenmek üzere aşağıdaki **2 kritik ekran görüntüsü** hedeflenmiştir:

1. **`15_1_olay_bildirim_ve_dof_yonetimi_ana_ekran.png`**:
   - `OlayBildirimPage` ana ekranı: Olay bildirim listesi tablosu, filtre çubuğu, NDK bildirim durum etiketleri (yeşil, sarı, kırmızı) ve sağ aksiyon butonları açıkken çekilmiş ekran görüntüsü.
2. **`15_2_olay_inceleme_ve_dof_dialog.png`**:
   - `OlayIncelemeDialog` penceresi: Olay künyesi, sorumlu atama, bağlı DÖF faaliyetleri tablosu ve NDK yasal bildirim panelini gösteren diyalog penceresi görüntüsü.
