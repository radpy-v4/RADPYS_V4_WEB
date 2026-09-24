# Keşif Raporu: Modül 16 — RGS / RSO Görevlendirme ve Sertifika Takibi (16_rgs_rso_gorevlendirme_ve_sertifika)

**Tarih:** 2026-09-24  
**İncelenen Kod Tabanı:**
- UI Tasarım Dosyaları: `ui/pages/personel/rgs_gorevlendirme_page.ui`, `ui/pages/personel/rgs_gorevlendirme_dialog.ui`
- Controller Dosyaları: `ui/controllers/personel/rgs_gorevlendirme_controller.py`, `ui/controllers/personel/rgs_gorevlendirme_dialog_controller.py`
- Servis Katmanı: `app/services/personel/rgs_gorevlendirme_service.py`
- Veritabanı Modelleri: `rgs_gorevlendirmeler`, `personel_belgeler`, `personeller`, `departmanlar`, `unvanlar` (`app/db/schema.sql`)
- Testler: `tests/test_rgs_gorevlendirme_service.py`
- Web Portal Karşılıkları: `web_portal/src/routes/profile.routes.ts`, `web_portal/src/components/dashboards/DenetimHazirlikDashboard.tsx`, `web_portal/src/config/sidebar.ts`

---

## A. Modülün Özeti ve Görevleri

**RGS / RSO Görevlendirme ve Sertifika Takip Modülü**; Nükleer Düzenleme Kurumu (NDK) mevzuatı ve radyasyon güvenliği yönetmelikleri uyarınca sağlık kuruluşunda iyonlaştırıcı radyasyon kaynaklarıyla çalışan birimlerde bulunması zorunlu olan **Radyasyon Güvenliği Sorumlusu (RGS)**, **RGS Yardımcısı** ve **Radyasyondan Korunma Sorumlusu (RSO)** personellerinin resmi atamalarını, görev sürelerini, NDK sertifika numaralarını, vize/geçerlilik tarihlerini ve KVKK korumalı atama evraklarını dijital ortamda yöneten, denetleyen ve erken uyarı alarmları üreten modüldür.

### Koddan Tespit Edilen Temel İş Akışları:
1. **Resmi Görevlendirme Tanımlama ve Yönetimi:**
   - Personel seçimi (`personeller`), görev tipi seçimi (*RGS, RGS Yardımcısı, RSO*), başlangıç tarihi ve bitiş tarihi (veya `[x] Süresiz Görev` opsiyonu) tanımlanır.
   - Düzenleme ekranında veri bütünlüğünü ve tarihsel tutarlılığı korumak amacıyla personel seçimi otomatik kilitlenir (salt okunur hale gelir).
2. **NDK Sertifika Takibi ve 5 Kademeli Geçerlilik Motoru (`_sertifika_durumu`):**
   - Sertifika / Belge numarası ve geçerlilik tarihi (veya `[x] Süresiz Sertifika` seçeneği) kaydedilir.
   - Sistem arka planda dinamik gün farkı hesaplaması yaparak tablo ve KPI kartlarına 5 seviyeli renkli durum atar:
     - **Geçerli (Yeşil):** Sertifika bitişine 60 günden fazla süre var.
     - **Yaklaşıyor (≤60 Gün) (Sarı):** Sertifika bitimine 31-60 gün arası kaldı.
     - **Kritik (≤30 Gün) (Turuncu):** Sertifika bitimine 30 gün veya daha az kaldı; acil vize/yenileme gerektirir.
     - **Süresi Doldu (Kırmızı):** Sertifika geçerlilik süresi dolmuş; mevzuat uyarınca derhal müdahale gerekir.
     - **Süresiz / Tanımsız (Mavi / Nötr):** Süresiz sertifika veya geçerlilik tarihi girilmemiş kayıtlar.
3. **KVKK Uyumlu Şifreli Evrak Kasası Entegrasyonu (`DocumentService`):**
   - Atama yazısı, başhekimlik görevlendirme oluru veya NDK sertifika belgesi (PDF, PNG, JPG, JPEG, DOCX, DOC) form üzerinden tek tıkla yüklenir.
   - Dosya doğrudan dosya sistemine ham olarak yazılmaz; `DocumentService` aracılığıyla AES-256 Fernet ile şifrelenerek `personel_belgeler` tablosunda güvenli blob olarak saklanır.
   - Listeden `[Belgeyi Aç]` tıklandığında şifreli kasadan geçici korumalı dosyaya açılarak işletim sisteminin varsayılan uygulamasında güvenle görüntülenir.
4. **Dinamik Kokpit ve KPI Göstergeleri (`get_durum_ozeti`):**
   - Ekranın üst bandında 4 adet anlık KPI kartı yer alır: **[Aktif Görevli]** (toplam aktif RGS/RSO sayısı), **[Geçerli Sertifika]**, **[Süresi Yaklaşan]** (≤60 gün) ve **[Süresi Dolmuş]**.
5. **İstemci Taraflı ve Sunucu Taraflı Çift Filtreleme:**
   - Görev tipi, sertifika durumu ve aktiflik (varsayılan: *Sadece Aktifler*) açılır kutularından veritabanı filtrelemesi yapılır.
   - Arama kutusu (`searchInput`) üzerinden personel adı, TC Kimlik, sertifika no veya departmana göre istemci taraflı anlık (client-side) hızlı arama uygulanır.
6. **Evrensel Onay Sistemi Entegrasyonu (`OnayliServisTabani`):**
   - Yetkisiz veya onay gerektiren roller tarafından yapılan görevlendirme ekleme, güncelleme veya silme işlemleri doğrudan veritabanına işlenmez; sistem otomatik olarak `ApprovalService` onay kuyruğuna (`rgs_gorevlendirmeler`) yönlendirir.
7. **CSV / Excel Dışa Aktarımı (`_on_export_clicked`):**
   - Tablodaki filtrelenmiş tüm kayıtlar UTF-8 BOM destekli, noktalı virgül (;) ayracıyla resmi denetim ve kurum arşivine hazır CSV dosyası olarak dışa aktarılır.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Amaç) | NEREDE? (Ekran Konumu) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? | DURUM |
|---|---|---|---|---|---|---|
| **[Aktif Görevli KPI (`kpiCardAktifRgs`)]** | Kuruluşta fiilen görev yapan toplam RGS/RSO sayısını anlık görmek. | Sayfa Üst KPI Şeridi | `aktif = 1` olan tüm RGS, RGS Yardımcısı ve RSO kayıtlarının toplamını gösterir. | Ekran açıldığında ve veriler tazelendiğinde. | Tüm Kullanıcılar | **Eksiksiz & Aktif** |
| **[Geçerli Sertifika KPI (`kpiCardGecerli`)]** | Vize süresi 60 günden fazla veya süresiz olan sertifikaları izlemek. | Sayfa Üst KPI Şeridi | Yeşil varyantlı kart; `gecerli` ve `suresiz` durumundaki kayıtları toplar. | Sürekli canlı. | Radyasyon Güvenliği / İK | **Eksiksiz & Aktif** |
| **[Süresi Yaklaşan KPI (`kpiCardYaklasan`)]** | Yenileme/vize zamanı gelen sertifikaları önceden fark etmek. | Sayfa Üst KPI Şeridi | Sarı uyarı kartı; bitişine 60 gün ve daha az kalan kayıtların adedini verir. | Vize dönemi yaklaştığında. | RGS / Yönetici | **Eksiksiz & Aktif** |
| **[Süresi Dolmuş KPI (`kpiCardGecmis`)]** | Mevzuata aykırı olarak sertifikası dolmuş personeli tespit etmek. | Sayfa Üst KPI Şeridi | Kırmızı alarm kartı; geçerlilik tarihi bugünden önce olan kayıtları sayar. | Kritik denetim/uyarı anında. | RGS / Yönetici | **Eksiksiz & Aktif** |
| **[Arama Çubuğu (`searchInput`)]** | Personel, TC veya sertifika numarasına göre anlık süzme yapmak. | Filtreleme Paneli Sol Alanı | Metin değiştikçe tablo satırlarını anlık olarak filtreler; boşta dürüst boş durum etiketi açar. | Liste taranırken. | Tüm Kullanıcılar | **Eksiksiz & Aktif** |
| **[Görev Tipi Filtresi (`comboGorevTipi`)]** | RGS, RGS Yardımcısı veya RSO'ları ayrı ayrı listelemek. | Filtreleme Paneli | Seçilen enum değerine göre (`RGS`, `RGS_YARDIMCISI`, `RSO`) servisten süzerek veriyi getirir. | Rol bazlı incelemede. | RGS / İK | **Eksiksiz & Aktif** |
| **[Sertifika Durumu Filtresi (`comboDurum`)]** | Geçerli, kritik, yaklaşan veya süresi dolmuş kayıtları izlemek. | Filtreleme Paneli | Durum koduna göre (`gecerli`, `yaklasiyor_30`, `yaklasiyor_60`, `gecmis`, `suresiz`) listeler. | Denetim veya vize takibinde. | RGS / Kalite | **Eksiksiz & Aktif** |
| **[Aktiflik Filtresi (`comboAktif`)]** | Aktif görevliler ile arşivlenmiş eski görevlendirmeleri ayırmak. | Filtreleme Paneli | `Sadece Aktifler` (varsayılan), `Pasifler` veya `Tümü` seçenekleriyle veritabanından çeker. | Geçmiş atamalar araştırılırken. | İK / RGS | **Eksiksiz & Aktif** |
| **[Yeni Görevlendirme (`btnAdd`)]** | Yeni bir personel için RGS/RSO atama ve sertifika kaydı açmak. | Üst Eylem Araç Çubuğu | `RgsGorevlendirmeDialogController` modalini boş form olarak açar. Yazma yetkisi denetlenir. | Yeni görevlendirme yapıldığında. | RGS Yetkilisi / Admin | **Eksiksiz & Aktif** |
| **[Düzenle (`btnEdit`)]** | Seçili görevlendirmenin süre, sertifika veya evrak bilgilerini güncellemek. | Üst Eylem Araç Çubuğu | Çift tıklama ile de tetiklenir; formda personeli kilitler, mevcut bilgileri yükler. | Değişiklik/vize yenilemede. | RGS Yetkilisi / Admin | **Eksiksiz & Aktif** |
| **[Sil (`btnDelete`)]** | Hatalı veya mükerrer girilen görevlendirme kaydını kaldırmak. | Üst Eylem Araç Çubuğu | Güvenlik teyidi sorar; onaya tabiyse onay talebi açar, değilse DB'den siler. Belge kasede korunur. | Hatalı kayıtlarda. | RGS Yetkilisi / Admin | **Eksiksiz & Aktif** |
| **[Belgeyi Aç (`btnDownloadDoc`)]** | Atama yazısını veya NDK sertifikasını ekranda incelemek. | Üst Eylem Araç Çubuğu | Şifreli kasadaki blob verisini çözer, geçici güvenli dosya oluşturup işletim sisteminde açar. | Belge denetimi ve doğrulamada. | Tüm Yetkili Kullanıcılar | **Eksiksiz & Aktif** |
| **[Yenile (`btnRefresh`)]** | Tabloyu ve üst KPI sayaçlarını yeniden sorgulamak. | Üst Eylem Araç Çubuğu | Servis sorgusunu ve özet hesaplamasını tekrarlar. | Harici değişiklikler sonrası. | Tüm Kullanıcılar | **Eksiksiz & Aktif** |
| **[Dışa Aktar (`btnExport`)]** | Görevlendirme ve sertifika listesini CSV tablosuna dökmek. | Üst Eylem Araç Çubuğu | `QFileDialog` ile dosya yolu seçtirir; UTF-8 BOM ve noktalı virgüllü CSV yazar. | Resmi rapor ve denetimlerde. | RGS / İK / Yönetici | **Eksiksiz & Aktif** |
| **[Süresiz Görev Seçimi (`chkSuresizGorev`)]** | Bitiş tarihi olmayan daimi atamaları sisteme girmek. | Kayıt Diyaloğu | İşaretlendiğinde görev bitiş tarihi alanını (`dateBitis`) pasifleştirir ve DB'ye `NULL` yazar. | Süresiz atamalarda. | Görevlendiren Yetkili | **Eksiksiz & Aktif** |
| **[Süresiz Sertifika Seçimi (`chkSuresizSertifika`)]** | Vize süresi sınırlaması olmayan sertifikaları tanımlamak. | Kayıt Diyaloğu | İşaretlendiğinde sertifika geçerlilik alanını pasifleştirir ve `NULL` olarak kaydeder. | Süresiz muafiyetlerde. | Görevlendiren Yetkili | **Eksiksiz & Aktif** |
| **[Dosya Seç (`btnUploadDoc`)]** | Sertifika veya atama yazısını dijital kasaya yüklemek. | Kayıt Diyaloğu | PDF, resim veya Word dosyalarını okur, byte dizisi olarak servise iletir. Şifreli saklanır. | Belge ekleneceğinde. | Görevlendiren Yetkili | **Eksiksiz & Aktif** |

---

## C. Mantık ve Kısıt Soruları (Kullanıcı Teyidine Sunulacak Noktalar)

1. **NDK Sertifika Geçerlilik Süresi ve Erken Uyarı Eşikleri:**
   - Kod tabanında NDK sertifikaları için bitişe **≤60 gün** kala sarı uyarı (`Yaklaşıyor`), **≤30 gün** kala turuncu kritik uyarı (`Kritik`) ve süresi geçtiğinde kırmızı alarm (`Süresi Doldu`) üretilmektedir. Varsayılan yeni kayıtta görev süresi 1 yıl (süresiz opsiyonlu), sertifika geçerliliği ise 5 yıl önerilmektedir. NDK vize ve yenileme prosedürleriniz açısından bu 60/30 günlük erken uyarı kademeleri kurumunuz için uygun mudur?
2. **Aynı Anda Birden Fazla Aktif Görevlendirme Kuralı:**
   - Veritabanı ve arayüz yapısında bir personelin aynı anda birden fazla aktif görevlendirmesi (örneğin Nükleer Tıp biriminde RGS, Radyoloji biriminde RGS Yardımcısı) bulunabilmektedir. Kurum içi işleyişinizde bir personelin birden fazla aktif RGS/RSO rolü üstlenmesine izin verilmekte midir, yoksa bir personel aynı anda yalnızca tek bir aktif görevde mi bulunabilir?
3. **Süresiz Görevlendirme ve Süresiz Sertifika Ayrımı:**
   - Sistemde hem atama oluru için `[x] Süresiz Görev` hem de NDK sertifikası için `[x] Süresiz Sertifika` seçeneği yer almaktadır. NDK mevzuatında sertifikalar genelde 5 yıllık periyodik vizeye tabi tutulurken, kurum içi başhekimlik atama yazıları süresiz olabilmektedir. Sertifikanın süresiz seçilmesi sadece kurum içi özel durumlar/muafiyetler için mi kullanılmaktadır?
4. **Evrak Kasası ve Sertifika Dosyası Arşiv Güvenliği:**
   - Bir görevlendirme kaydı silindiğinde (`delete_gorevlendirme`), veritabanında `ON DELETE SET NULL` kuralı gereğince `rgs_gorevlendirmeler` kaydı silinmekte ancak personelin KVKK kasasındaki şifreli sertifika dosyası (`personel_belgeler`) geçmiş denetim izi ve yasal arşiv koruma amacıyla silinmeyip saklanmaktadır. Bu arşivleme güvenliği yaklaşımı politikanızla uyumlu mudur?
5. **Düzenlemede Personel Değiştirme Kısıtı:**
   - Diyalog ekranında düzenleme (`_load_record`) modunda personel seçimi (`comboPersonel`) veri bütünlüğü ve denetim izi güvenliği gerekçesiyle kilitlenmektedir (salt okunur hale gelir). Görev başka bir personele devredilecekse eski görevlendirmenin pasife alınması ve yeni personel için sıfırdan kayıt açılması gerekmektedir. Bu kuralı onaylıyor musunuz?

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

- **Masaüstü Uygulaması (Radyasyon Güvenliği, İK ve Denetim Merkezi):**
  - RGS / RSO atamalarının yapıldığı, NDK sertifika numaralarının girildiği, evrak kasasına PDF/resim atama olurlarının yüklendiği, geçerlilik sürelerinin takip edildiği, erken uyarı alarmlarının izlendiği ve resmi denetim listelerinin CSV/Excel olarak alındığı tam yetkili operasyonel yönetim merkezidir.
- **Web Portalı Entegrasyonu (`profile.routes.ts` & `DenetimHazirlikDashboard.tsx`):**
  - **Personel Kendi Portali / Profili (`profile.routes.ts`):** İlgili personel Web Portala giriş yaptığında kendi özlük profilinde (`rgsGorevler`) atanmış olduğu RGS / RSO görevlendirmelerini, başlangıç/bitiş tarih aralıklarını ve sertifika geçerlilik durumunu görüntüleyebilir.
  - **NDK Denetim Hazırlık Kokpiti (`DenetimHazirlikDashboard.tsx`):** Web portal üzerinde radyoloji ve nükleer tıp denetim hazırlık panellerinde kurumun aktif RGS görevlendirme olurunun ve NDK eğitim sertifikasının eksiksiz ve güncel olup olmadığı denetim kontrol listesinde doğrulanır.
  - **Yetki ve Görünürlük Kapsamı (`sidebar.ts`):** Web portalda klinik fizikçiler, RGS sorumluları ve ilgili güvenlik modülü yetkilerine sahip personeller denetim ve araştırma panellerine doğrudan erişebilir.

---

## E. Hedefli Ekran Görüntüsü Talebi

Kılavuz ve yardım portalı görsel bütünlüğü için `docs/help/assets/img/` klasörüne eklenmek üzere aşağıdaki **2 kritik ekran görüntüsü** hedeflenmiştir:

1. **`16_1_rgs_gorevlendirme_ana_liste.png`**:
   - `RgsGorevlendirmePage` ana liste ekranı: KPI özet kartları (Aktif Görevli, Geçerli Sertifika, Süresi Yaklaşan, Süresi Dolmuş), filtreleme çubuğu, görevlendirmeler tablosu (renkli sertifika durum delegeleriyle) ve üst eylem butonları açıkken çekilmiş ekran görüntüsü.
2. **`16_2_rgs_gorevlendirme_dialog.png`**:
   - `RgsGorevlendirmeDialog` penceresi: Personel seçimi, Görev tipi açılır kutusu, Başlangıç/Bitiş tarihleri, Süresiz Görev onay kutusu, NDK Sertifika No, Geçerlilik Tarihi ve Dosya Seç (Evrak Kasası) bileşenlerini gösteren diyalog penceresi görüntüsü.
