# Keşif Raporu: Modül 18 — Tıbbi Cihaz ve NDK Lisans Envanteri (18_tibbi_cihaz_ve_ndk_lisans_envanteri)

**Tarih:** 2026-09-24  
**Karmaşıklık Seviyesi (Tier):** TIER 2 (Operasyonel İş Akışı & Regülasyon Takibi)  
**İncelenen Kod Tabanı:**
- UI Tasarım Dosyaları:
  - `ui/pages/cihaz/cihaz_yonetimi_page.ui` (Ana Cihaz ve Lisans Envanteri Ekranı)
  - `ui/pages/cihaz/cihaz_ekle_duzenle_dialog.ui` (5 Sekmeli Cihaz Tanımlama & Düzenleme Formu)
  - `ui/pages/cihaz/cihaz_hek_page.ui` (HEK & Hurda/Hizmet Dışı Cihaz Arşivi)
  - `ui/pages/cihaz/cihaz_qr_dialog.ui` (Cihaz Karekod / QR Etiket Yazdırma ve Önizleme)
- Controller Dosyaları:
  - `ui/controllers/cihaz/cihaz_yonetimi_controller.py`
  - `ui/controllers/cihaz/cihaz_ekle_duzenle_controller.py`
  - `ui/controllers/cihaz/cihaz_hek_controller.py`
  - `ui/controllers/cihaz/cihaz_qr_dialog.py`
- Servis Katmanı:
  - `app/services/cihaz/cihaz_service.py`
  - `app/services/cihaz/cihaz_kod_generator.py`
  - `app/services/cihaz/cihaz_import_service.py`
  - `app/services/system/document_service_db.py` (KVKK Evrak Kasası AES-256)
- Veri Erişim Katmanı (Repository):
  - `app/infrastructure/db/repositories/cihaz_repository.py`
  - `app/infrastructure/db/repositories/lookup_repository.py`
- Veritabanı Tabloları:
  - `cihazlar`, `cihaz_lisanslari`, `cihaz_bakim_garanti`, `cihaz_konumlari`, `cihaz_dokumanlari`, `stored_files`, `krokiler`, `departmanlar`, `system_lookups`, `personeller`
- Web Portal Entegrasyonları:
  - `web_portal/src/routes/cihaz.routes.ts` (`GET /api/cihazlar`, `GET /api/cihazlar/:kodOrId`)
  - `web_portal/src/components/CihazArizaView.tsx` (QR Barkod Okuyucu ve Cihaz Künye Kartı)
  - `web_portal/src/utils/filterUtils.ts` (Akıllı Cihaz QR Ayrıştırıcı)

---

## A. Modülün Özeti ve Görevleri

**Tıbbi Cihaz ve NDK Lisans Envanteri Modülü**; hastane ve radyoloji merkezlerindeki iyonlaştırıcı radyasyon yayan (X-Ray, Tomografi, Anjiyografi, Skopi, Mamografi) ve radyasyonsuz/medikal (MR, USG, EKG vb.) tüm cihazların teknik künyelerinin tutulduğu, Nükleer Düzenleme Kurumu (NDK) lisans ve vize sürelerinin 4 renkli erken uyarı sistemiyle izlendiği, cihazların mimari kat planları (kroki) üzerine etkileşimli pinlerle sabitlendiği, kılavuz ve teknik belgelerinin KVKK uyumlu AES-256 şifreli Evrak Kasasında saklandığı, resmi NDK denetim çizelgelerinin üretildiği ve ekonomik ömrünü tamamlayan donanımların HEK (Hurda) arşivine ayrılarak resmi tutanağının düzenlendiği merkezi donanım yönetim sistemidir.

### Koddan Tespit Edilen Temel İş Akışları:
1. **Zenginleştirilmiş Cihaz Envanteri ve Dinamik Renkli Rozet Takibi (`CihazYonetimiController`):**
   - Kaynak grubu (*XRAY, RADSIZ, MED, OLCUM*), birim, lisans durumu ve cihaz durumu kriterleriyle çok boyutlu süzme yapılır.
   - Tabloda her cihaz için kalan NDK lisans süresi hesaplanır ve 4 renkli rozet atanır:
     - **Yeşil (> 60 Gün):** Lisansı geçerli ve vize süresi güvende.
     - **Sarı (16 - 60 Gün):** Vize yenileme süresi yaklaşıyor uyarısı.
     - **Turuncu (0 - 15 Gün):** Vize süresi kritik eşikte (acil başvuru gerekir).
     - **Kırmızı (< 0 Gün):** Lisans süresi dolmuş, yasal işletme ihlali riski.
     - **Gri:** "Lisans Gerekli Değil" muaf cihazlar (MR/USG vb.).
2. **Akıllı Cihaz Kodu Üreteci (`CihazKodGenerator`):**
   - Standart format: `[KAYNAK_GRUBU]-[BIRIM_KODU]-[TUR_KODU]-[SIRA_NO]` (Örn: `XRAY-ACL-ANJ-01`, `RADSIZ-MR-MRI-01`).
   - Kullanıcı kaynak grubunu, departmanı veya türü değiştirdiğinde veritabanındaki mevcut kayıtları sayarak bir sonraki müsait sıra numarasını otomatik üretir; manuel düzenlemeye de imkan tanır.
3. **5 Sekmeli Kapsamlı Cihaz Tanımlama & Düzenleme Sihirbazı (`CihazEkleDuzenleController`):**
   - **Sekme 1 (Genel Bilgiler):** Kaynak grubu, birim, cihaz türü, cihaz kodu, marka, model, kullanım amacı, seri no, NDK seri no, tüp seri no, demirbaş no, hizmete giriş tarihi, Anabilim Dalı (A.B.D.), bina/yerleşke ve açıklamalar.
   - **Sekme 2 (NDK Lisans ve RKS):** NDK lisans no, lisans durumu (*Lisanslı, Lisans Gerekli Değil, Lisanssız, Eksik Husus, Süresi Dolan*), lisans başlangıç/bitiş (vize) tarihi, RGS modülüyle entegre RKS personeli seçimi, birim sorumlusu ve sorumlu unvanı.
   - **Sekme 3 (Garanti ve Bakım):** Üretici/satıcı garantisi onay kutusu, garanti başlangıç/bitiş tarihleri, bakım anlaşma türü (*Yok, Parça Hariç, Tam Kapsamlı vb.*), yetkili servis firması ve bakım sözleşme süreleri.
   - **Sekme 4 (Kat Planı / Mimari Kroki):** İlgili departmanın mimari kat planını (Resim veya PDF) `QGraphicsView` sahnesine yükleme, tekerlekle zoom, cihaz pinini (`CihazKrokiPinItem`) harita üzerinde istenen odaya tıklayarak veya sürükleyerek (X: % - Y: %) konumlandırma ve pin kilitleme desteği.
   - **Sekme 5 (Kılavuzlar ve Belgeler):** Kullanım kılavuzu, servis manueli, zırhlama raporu vb. belgeleri AES-256 Fernet ile şifreleyerek `stored_files` evrak kasasına yükleme ve listeden yönetme.
4. **Çok Sekmeli Sağ Teftiş Paneli (Inspector):**
   - Cihaz seçildiğinde ekranın altındaki 5 sekmeli inspector paneli canlı güncellenir:
     - *Genel Bilgiler:* Künye özeti, seri numaraları, hizmet süresi.
     - *NDK Lisans ve Sorumlular:* Lisans geçerliliği, kalan gün, RKS uzmanı ve birim sorumlusu.
     - *Garanti ve Servis:* Garanti durumu, servis firması ve sözleşme bitişi.
     - *Kılavuzlar ve Belgeler:* Ekli dosyaları listeleme, çift tıklama veya `[Görüntüle]` ile şifreli kasadan geçici belleğe çıkarıp varsayılan uygulamada açma, `[İndir]` ile yerel diske kaydetme.
     - *Kat Planı Konumu:* Mimari kroki adı, bina, kat, oda no ve X/Y koordinat yüzdeleri.
5. **Resmi NDK Denetim Çizelgesi ve Excel Aktarımı:**
   - `[NDK Çizelgesi]` butonuyla yalnızca radyasyon kaynaklı cihazları süzerek NDK resmi denetim formatında (Sıra, Lisans No, Tür, Marka, Model, Seri No, Tüp Seri No, Birim/Oda, RKS Sorumlusu) standart Excel raporu üretilir.
   - `[Excel Dışa Aktar]` ile mevcut filtrelenmiş tüm envanter dışa aktarılır.
   - `[Excel İçe Aktar]` ile `CihazImportService` üzerinden toplu cihaz, marka ve modalite eşleme motoru çalıştırılır.
6. **QR / Karekod Etiket Üretimi ve Yazdırma (`CihazQrDialog`):**
   - Seçili cihaz için yerel ağ IP'si üzerinden Web Portal yönlendirmesi içeren dinamik QR kod kartı üretilir (`http://<LAN_IP>:3000/?cihaz=<cihaz_kodu>`).
   - Kart yüksek çözünürlüklü PNG olarak kaydedilebilir veya doğrudan `QPrintDialog` ile etiket yazıcısına basılabilir.
7. **HEK ve Hurda Cihaz Arşivi (`CihazHekController`):**
   - Hizmet dışına çıkarılan veya hurdaya ayrılan cihazlar aktif listeden gizlenerek HEK arşivinde saklanır.
   - `[Tekrar Aktif Statüsüne Al]` butonu ile yanlışlıkla arşive kaldırılan cihazlar anında tekrar aktif envantere dahil edilir.
   - `[Hurda / Çıkış Tutanağı]` butonu ile resmi denetim ve demirbaş düşümü için Word (`.docx`) formatında "Tıbbi Cihaz Hurda / HEK Ayırma Tutanağı" üretilir.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Amaç) | NEREDE? (Ekran Konumu) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? | DURUM |
|---|---|---|---|---|---|---|
| **Arama Çubuğu (`txtArama`)** | Cihaz kodu, marka, model, seri no ve lisans numarasıyla anlık arama yapmak. | Ana Ekran Filtre Bandı | 300 ms debounce gecikmeli timer ile veritabanında `ILIKE` sorgusu çalıştırır. | Herhangi bir karakter yazıldığında. | Tüm Yetkililer | **Eksiksiz & Aktif** |
| **Kaynak Grubu Filtresi (`cmbKaynakGrubu` / `radXray` vb.)** | Cihazları radyasyon yayma riskine göre ayırmak. | Ana Ekran Filtre Bandı | `XRAY`, `RADSIZ`, `MED`, `OLCUM` filtre parametresini SQL'e ekler; radyo butonlarla çift yönlü senkronizedir. | Filtreleme istendiğinde. | Tüm Yetkililer | **Eksiksiz & Aktif** |
| **Birim Filtresi (`cmbBirim`)** | Cihazları bağlı bulundukları departman veya anabilim dalına göre listelemek. | Ana Ekran Filtre Bandı | `departmanlar` hiyerarşisindeki alt birimleri (`level` girintisiyle) listeler ve süzer. | Birim bazlı incelemede. | Birim / RGS | **Eksiksiz & Aktif** |
| **Lisans Durumu Süzgeci (`cmbLisansDurumu`)** | Lisanslı, muaf, süresi dolan veya eksik hususlu cihazları gruplamak. | Ana Ekran Filtre Bandı | `cihaz_lisanslari.lisans_durumu` alanına göre filtreler. | Denetim kontrollerinde. | RGS / RKS / Yönetim | **Eksiksiz & Aktif** |
| **Yeni Cihaz Butonu (`btnYeniCihaz`)** | Kuruma yeni teslim alınan tıbbi cihazın kaydını açmak. | Ana Ekran Araç Çubuğu | `CihazEkleDuzenleController(cihaz_id=None)` diyalog penceresini modal olarak açar. | Yeni cihaz alımında. | Biyomedikal / RGS | **Eksiksiz & Aktif** |
| **Düzenle Butonu (`btnDuzenle`)** | Seçili cihazın künye, lisans, garanti veya konumunu güncellemek. | Ana Ekran Araç Çubuğu | Tabloda seçili satırın ID'sini alarak düzenleme formunu açar; satıra çift tıklama da aynı işi yapar. | Bilgi değişikliğinde. | Biyomedikal / RGS | **Eksiksiz & Aktif** |
| **Sil / HEK Butonu (`btnSil`)** | Cihazı aktif listeden kaldırıp hurda arşivine taşımak. | Ana Ekran Araç Çubuğu | `QMessageBox.question` onayı alır, cihaz durumunu `HEK` yapar, aktif envanterden düşer. | Hurda/devir durumunda. | Sistem Yöneticisi | **Eksiksiz & Aktif** |
| **Excel İçe Aktar (`btnExcelImport`)** | Yüzlerce cihazı şablon Excel dosyasından topluca sisteme yüklemek. | Ana Ekran Araç Çubuğu | `CihazImportService` ve `run_with_progress` diyaloğu ile çalışır; marka/tür sinonimlerini normalize ederek içeri aktarır. | İlk kurulum veya toplu alımda. | Sistem Yöneticisi | **Eksiksiz & Aktif** |
| **Excel Dışa Aktar (`btnExcelExport`)** | Tablodaki filtrelenmiş cihaz listesini Excel formatında bilgisayara indirmek. | Ana Ekran Araç Çubuğu | Pandas DataFrame aracılığıyla `.xlsx` dosyası oluşturur. | Raporlama gerektiğinde. | Tüm Yetkililer | **Eksiksiz & Aktif** |
| **NDK Çizelgesi Butonu (`btnNdkCizelge`)** | Resmi NDK formatına tam uyumlu cihaz denetim cetveli almak. | Ana Ekran Araç Çubuğu | Yalnızca `kaynak_grubu='XRAY'` olan cihazları süzer; Lisans No, Tüp No ve RKS personeli sütunlarıyla Excel çıktısı verir. | NDK denetimleri öncesinde. | RGS / Yönetim | **Eksiksiz & Aktif** |
| **QR Etiket Butonu (`btnQrEtiket`)** | Cihaz üzerine yapıştırılacak karekodlu kimlik kartını oluşturmak. | Ana Ekran Araç Çubuğu | `CihazQrDialog` açar; yerel IP üzerinden Web Portal URL'si üreterek ekranda render eder. | Saha etiketlemesinde. | Biyomedikal / RGS | **Eksiksiz & Aktif** |
| **Lisans Durum Rozeti (Tablo Sütun 5)** | Lisans süresinin dolmasına kaç gün kaldığını renklerle uyarmak. | `tblCihazlar` Tablosu | Kalan gün >60 (Yeşil), 16-60 (Sarı), 0-15 (Turuncu), <0 (Kırmızı) dinamik renklendirir. | Sürekli canlı. | Tüm Yetkililer | **Eksiksiz & Aktif** |
| **Sağ Tık Menüsü (Context Menu)** | Cihaz üzerinden hızlı işlem ve alt modüllere geçiş sağlamak. | `tblCihazlar` Üzerinde Sağ Tık | Düzenle, Arıza Kaydı Aç, QC Geçmişi Gör, QR Etiket, HEK'e Ayır seçeneklerini sunar; `open_cihaz_ariza_page` ile alt modülü açar. | Hızlı işlem anında. | Operatör / Yetkili | **Eksiksiz & Aktif** |
| **Kod Üret Butonu (`btnKodUret`)** | Standartlara uygun benzersiz cihaz kodu üretmek. | Ekle/Düzenle Formu 1. Sekme | Kaynak grubu + Birim + Tür + Sıra No algoritmasıyla `CihazKodGenerator` çalıştırır. | Yeni cihaz tanımlanırken. | Biyomedikal / RGS | **Eksiksiz & Aktif** |
| **RKS Personel Seçimi (`cmbRksPersonel`)** | Cihazın NDK nezdindeki yasal sorumlusunu bağlamak. | Ekle/Düzenle Formu 2. Sekme | `personeller` tablosundaki RGS/RKS yetkili uzmanları listeler; `cihaz_lisanslari.rks_personel_id` alanına yazar. | Lisans tanımlanırken. | RGS Sorumlusu | **Eksiksiz & Aktif** |
| **Kat Planı Kroki Seçimi (`cmbKroki`)** | Cihazın konuşlandığı mimari çizimi seçmek. | Ekle/Düzenle Formu 4. Sekme | Birim seçildiğinde otomatik gelir; `krokiler` tablosundaki resim/PDF planını sahneye yükler. | Konum tayininde. | Biyomedikal / RGS | **Eksiksiz & Aktif** |
| **Pin Kilitleme Butonu (`btnCihazPinKilitle`)** | Haritaya yerleştirilen pinin kazara kaymasını önlemek. | Ekle/Düzenle Formu 4. Sekme | `pin_item.set_locked(True/False)` bayrağını değiştirerek fare sürüklemesini kilitler. | Pin yerleştirildikten sonra. | Kullanıcı | **Eksiksiz & Aktif** |
| **Ekrana Sığdır Butonu (`btnCihazZoomFit`)** | Kroki görselini çizim penceresine tam oturtmak. | Ekle/Düzenle Formu 4. Sekme | Sahne sınırlarını `graphicsView.fitInView` ile görünür alana oranlar. | Plan incelenirken. | Kullanıcı | **Eksiksiz & Aktif** |
| **Doküman Yükle (`btnDokumanEkle`)** | Cihazın kılavuz veya zırhlama raporunu şifreli kasaya eklemek. | Ekle/Düzenle Formu 5. Sekme | Dosyayı okur, AES-256 Fernet ile şifreler, `stored_files` tablosuna yazar ve cihaza bağlar. | Belge arşivlemede. | Biyomedikal / RGS | **Eksiksiz & Aktif** |
| **Belge Görüntüle (`btnInspBelgeOnizle`)** | Şifreli kasadaki kılavuzu açıp okumak. | Ana Ekran Inspector Belge Sekmesi | `doc_service.get_file_bytes` ile bellekte şifreyi çözer, geçici dosyaya yazar ve `os.startfile` ile başlatır. | İnceleme esnasında. | Tüm Kullanıcılar | **Eksiksiz & Aktif** |
| **Belge İndir (`btnInspBelgeIndir`)** | Cihaz belgesini şifresi çözülmüş olarak yerel diske kaydetmek. | Ana Ekran Inspector Belge Sekmesi | Kullanıcının seçtiği klasöre şifresi çözülmüş orijinal baytları yazar. | Harici paylaşımda. | Yetkili Kullanıcı | **Eksiksiz & Aktif** |
| **Tekrar Aktif Statüsüne Al (`btnAktifeAl`)** | HEK'e kaldırılmış cihazı yeniden aktif envantere sokmak. | HEK Arşiv Ekranı | `reactivate_from_hek` servisiyle cihaz durumunu `Aktif` yapar ve arşivden çıkarır. | Yanlışlıkla HEK yapıldığında. | Sistem Yöneticisi | **Eksiksiz & Aktif** |
| **Hurda / Çıkış Tutanağı (`btnHurdaTutanagi`)** | Hurdaya ayrılan cihaz için resmi komisyon tutanağı üretmek. | HEK Arşiv Ekranı | Python `python-docx` kütüphanesiyle standart Word (.docx) hurda tutanağı oluşturur. | Demirbaş düşümünde. | Komisyon / Yönetim | **Eksiksiz & Aktif** |
| **QR PNG Kaydet & Yazdır (`btnKaydetPng`, `btnYazdir`)** | Saha etiketini basmak veya resim olarak almak. | QR Diyaloğu | Önizleme kartını yüksek DPI ile `grab()` eder; doğrudan PNG kaydeder veya `QPrinter` ile yazıcıya basar. | Etiket basımında. | Biyomedikal / Teknik | **Eksiksiz & Aktif** |

---

## C. Mantık ve Kısıt Soruları — Saha Teyit ve Kullanıcı Kararları

1. **NDK Lisans Vize Süreleri ve Kademeli Erken Uyarı Eşikleri (6 Ay - 45 Gün - 30 Gün):**
   - **Kullanıcı Kararı (Kesinleşti):** Erken uyarı süreci lisans bitimine **6 ay (180 gün)** kala başlar. **45 gün** kala "Süresi Yaklaşıyor" sarı alarmı devreye girer. **30 gün** ve daha az kaldığında "Kritik Eşik" turuncu alarmı tetiklenir; süresi dolduğunda ise kırmızı ihlal uyarısı verilir. NDK resmi vize ve lisanslama yenileme bürokrasisinin ortalama 2-3 ay sürmesi nedeniyle bu kademeli alarm sistemi saha standardı olarak tescil edilmiştir.
2. **Cihaz Kodu Elle Değiştirilemezliği ve Demirbaş Numarası Bağlantısı:**
   - **Kullanıcı Kararı (Kesinleşti):** Otomatik üretilen `[KAYNAK]-[BIRIM]-[TUR]-[SIRA]` formatındaki Cihaz Kodu kesinlikle kullanıcı tarafından elle değiştirilemez (`readOnly` kilitlidir). Kurum, Sağlık Bakanlığı ÇKYS ve hastane muhasebesi ile sistem arasındaki tek ve mutlak bağlantı **Demirbaş Numarası** alanıdır.
3. **Radyasyonlu (X-Işını) Cihazlarda NDK Lisans Şartı:**
   - **Kullanıcı Kararı (Kesinleşti):** Kaynak grubu `XRAY` (iyonlaştırıcı radyasyon) olan bir cihaz tanımlanırken NDK Lisans Numarası girilmesi (veya ruhsatlama sürecindeyse *"Lisans Başvuru Aşamasında"* seçeneğinin işaretlenmesi) zorunludur. Lisanssız veya tanımsız radyasyon kaynağının sisteme aktif cihaz olarak sokulmasına izin verilmez.
4. **Cihaz Silme Yasağı ve HEK (Hurda) Arşivi Disiplini:**
   - **Kullanıcı Kararı (Kesinleşti):** Cihazlar veritabanından kesinlikle fiziki olarak silinmez (`DELETE` çalıştırılmaz). Hizmet dışına çıkan tüm cihazlar `[Sil / HEK]` butonuyla hurda arşivine (`durum='HEK'`) kaldırılır; böylece geçmiş periyodik kalite kontrol (QC), arıza, bakım ve personel dozimetre maruziyet denetim izleri ömür boyu korunur.
5. **Kroki / Kat Planı Sabitleme Zorunluluğu:**
   - **Kullanıcı Kararı (Kesinleşti):** Mimari kat planı (kroki) üzerinde cihaz sabitleme pini yerleştirilmesi sabit cihazlar için dahi **şimdilik zorunlu tutulmayacak**, opsiyonel olarak devam edecektir. Mobil/seyyar cihazların sürekli birim değiştirmesi ve bazı binaların mimari kroki çizimlerinin henüz dijitalleştirilmemiş olması nedeniyle bu esneklik korunmuştur.

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

- **Masaüstü Uygulaması (Yetkili Yönetim, Envanter ve Denetim Merkezi):**
  - **Ana Envanter Yönetimi (`cihaz_yonetimi_page.ui`):** Tüm cihazların filtreli listesi, 4 renkli lisans vize takip sayaçları, durum rozetleri.
  - **5 Sekmeli Tanımlama Formu (`cihaz_ekle_duzenle_dialog.ui`):** Künye, NDK lisansı, garanti, interaktif mimari kat planına pin sabitleme ve AES-256 şifreli evrak kasası.
  - **Resmi Çizelge ve Belgeler:** NDK resmi denetim Excel çizelgesi, Word (.docx) Hurda/HEK ayırma tutanağı, QR etiket kartı baskısı.
  - **HEK Arşivi (`cihaz_hek_page.ui`):** Hizmet dışı cihazların izlenmesi ve tek tıkla aktif envantere geri döndürülmesi.
- **Web Portalı Entegrasyonu (`cihaz.routes.ts` & `CihazArizaView.tsx`):**
  - **Cihaz API Servisi (`/api/cihazlar`, `/api/cihazlar/:kodOrId`):** Saha personeli veya teknik servis web portal üzerinden tüm cihazların güncel durumlarını, oda numaralarını, son kalite kontrol (QC) sonuçlarını ve açık arıza sayılarını sorgulayabilir.
  - **Kamera ile Mobil QR / Barkod Okuma (`QrScannerModal.tsx`):** Saha teknisyeni cep telefonu veya tablet kamerasıyla cihazın üzerindeki QR kodu okuttuğunda sistem otomatik olarak cihazın künyesini, modelini ve son servis geçmişini ekrana getirir.
  - **Saha Arıza Bildirimi:** Teknisyen doğrudan QR ile açılan cihaz künyesinden arıza kaydı açabilir.
  - **Ortam Dozu & Kroki Entegrasyonu (`ortam_dozu.routes.ts`):** Web portalındaki radyasyon ortam dozu kroki haritasında, masaüstünde sabitlenen cihaz koordinatları (`cihaz_konumlari.pos_x`, `pos_y`) otomatik olarak odalarda arka plan referansı olarak gösterilir.

---

## E. Hedefli Ekran Görüntüsü Talebi

Kılavuz ve yardım portalı görsel bütünlüğü için `docs/help/assets/img/` klasörüne eklenmek üzere aşağıdaki **2 kritik ekran görüntüsü** hedeflenmiştir:

1. **`18_1_cihaz_envanteri_yonetimi.png`**:
   - Üstteki filtre bandını (arama, kaynak grubu, birim, lisans ve cihaz durumu), 4 renkli lisans süresi rozetlerinin görüldüğü `tblCihazlar` tablosunu ve altta seçili cihazın genel/lisans/doküman özetini gösteren 5 sekmeli Inspector panelini içeren ana ekran görünümü.
2. **`18_2_cihaz_tanimlama_ve_kroki_formu.png`**:
   - Cihaz Ekleme/Düzenleme diyaloğunda 4. Kat Planı sekmesindeki interaktif kroki sahnesini (veya 1. Genel Bilgiler / 2. NDK Lisans sekmesini) gösteren operasyonel detay görünümü.
