# RADPYS V4 - Modül 21 Keşif Raporu
**Modül Adı:** Merkezi Onaylar ve Rapor Merkezi (`21_merkezi_onaylar_ve_rapor_merkezi`)  
**Tarih:** 2026-09-24  
**Kaynak Dosyalar:**
- `ui/pages/admin/system/onay_bekleyen_gorevler_page.ui`
- `ui/pages/admin/system/diff_dialog.ui`
- `ui/pages/admin/system/nobet_devir_detay_dialog.ui`
- `ui/pages/reporting/rapor_merkezi_page.ui`
- `ui/pages/admin/system/templates_page.ui`
- `ui/pages/ignore_manager_dialog.ui` (Kapsam Dışı / Hayalet Bileşen)
- `ui/controllers/onay_bekleyen_gorevler_controller.py`
- `ui/dialogs/onay_bekleyen_gorevler_dialogs.py` (`DiffDialog`, `NobetDevirDetayDialog`)
- `ui/controllers/reporting/rapor_merkezi_controller.py`
- `ui/controllers/admin/system/templates_controller.py`
- `app/services/system/approval_service.py`
- `app/domain/report_registry.py` & `app/services/reporting/report_engine.py`
- `web_portal/src/components/ShiftApprovalView.tsx` & `ShiftExchangeHubView.tsx`

---

## A. Modülün Özeti ve Temel Görevleri

Modül 21, RADPYS V4 sisteminin iki kritik kurumsal omurgasını tek çatı altında birleştirir:

### 1. Merkezi Onay Bekleyen Görevler Paneli (`OnayBekleyenGorevlerController`)
Tüm modüllerden gelen yönetici onay taleplerini sol paneldeki 5 kategori sekmesi üzerinden merkezi olarak yönetir:
- **İzin Talepleri (`btnTabIzin` -> `izinTable`):** Personel tarafından portaldan veya modülden girilen yıllık, şua, mazeret ve sağlık izin talepleri listelenir. Yetkili amir tarafından tek tıkla onaylanır (`btnIzinApprove`) veya zorunlu gerekçe girilerek reddedilir (`btnIzinReject`).
- **Nöbet Devirleri (`btnTabDevir` -> `devirTable`):** Personeller arasındaki nöbet devir/becayiş talepleri 3 aşamalı hiyerarşik onay sürecinden geçer (`alan_personel` (portal rızası) -> `birim_sorumlusu` -> `hizmet_sorumlusu`). `btnDevirReview` ile `NobetDevirDetayDialog` açılarak nöbet saatleri, personeller ve gerekçe incelenir; doğrudan onay (`btnDevirApprove`) veya zorunlu gerekçeyle ret (`btnDevirReject`) verilir.
- **Nöbet İstekleri (`btnTabIstek` -> `istekTable`):** Personelin aylık nöbet mazeretleri, nöbet yazılma istekleri, ders programı/eğitim günleri, nöbet muafiyetleri ve fazla mesai limit talepleri öncelik derecesiyle (1-Düşük ila 5-Kritik/Zorunlu) listelenir. Yönetici tarafından onaylanır (`btnIstekApprove`) veya reddedilir (`btnIstekReject`).
- **Nöbet Planları (`btnTabPlanOnay` -> `planOnayTable`):** Başteknisyen/sorumlu tarafından hazırlanıp birim onayı verilmiş taslak aylık nöbet çizelgeleri listelenir. İdare/Yönetici tarafından onaylanarak doğrudan resmi yayına alınır (`btnPlanApprove` -> "Yayında") ya da düzeltme talep edilerek gerekçeyle taslağa geri gönderilir (`btnPlanReject` -> "Taslak").
- **Veri Değişiklikleri (`btnTabVeriOnay` -> `veriOnayTable`):** 4-göz ilkesi gereğince, rol yetkilerinde `onay_gerektirir = 1` tanımlı personellerin yaptığı tüm kritik kayıt ekleme, güncelleme ve silme talepleri (`degisiklik_talepleri` tablosu) bu kuyruğa düşer. Çift tıklama veya `btnVeriReview` ile `DiffDialog` açılır; eski değerler (kırmızı) ve yeni değerler (yeşil) yan yana karşılaştırılır. Sağlık muayenesi güncellemelerinde ise otomatik olarak uzman hekim doğrulama formu (`SaglikMuayeneAddController`) devreye girer. Onaylandığında (`btnVeriApprove`), yüklenen fiziksel evraklar güvenli KVKK şifreli dosya kasasına (`stored_files`) otomatik aktarılır ve commit sonrasında geçici yükleme dosyaları temizlenir.
- **Dinamik Rozetler (Badges):** Her sekmenin yanında beklemedeki talep sayısını gösteren canlı rozetler (`lblIzinBadge`, `lblDevirBadge`, `lblIstekBadge`, `lblPlanBadge`, `lblVeriBadge`) bulunur; bekleyen talep sıfır ise rozet otomatik gizlenir.

### 2. Kurumsal Rapor Merkezi (`RaporMerkeziController`)
Kurumun tüm resmi, denetimsel ve operasyonel dökümlerini tek merkezden yöneten motor:
- **Rapor Kataloğu Ağacı (`categoryTree` & `reportListWidget`):** Personel, Doz Takip, İzin, Nöbet, Sağlık, Mevzuat (SKS 6.1 / NDK), Kalite, Cihaz, RKE ve Lokasyon ana kategorileri altında 17 resmi rapor türü sunar.
- **Dinamik Parametre ve Filtre Formu (`paramFormLayout`):** Seçilen rapora göre anında dinamik form alanları inşa edilir (Departman seçimi, unvan filtreleri, ölçüm dönemleri, SGK hakediş ayları, tarih aralıkları ve onay kutuları). 8'den fazla seçenek barındıran açılır kutularda otomatik `QCompleter` ile klavyeden arama desteği sunulur.
- **Üçlü Çıktı Formatı Desteği (`cmbFormat`):**
  - **PDF (.pdf):** Resmi kurum arşivi ve ıslak imza için sayfa yapısı kilitlenmiş döküm.
  - **Excel (.xlsx):** Mutemetlik, istatistik ve muhasebe entegrasyonu için ham veri cetveli.
  - **Word (.docx):** `docxtpl` şablon motoruyla doldurulan, düzenlenebilir antetli resmi yazı dökümü.
- **Şablon ve Marka Yönetimi Entegrasyonu (`tabSablonAyarlari` / `TemplatesController`):** Kurum Başlık 1-2, Kurum Çift Logo yer tutucuları (`{{LOGO_1}}`, `{{LOGO_2}}`, `{{BASLIK_1}}`, `{{BASLIK_2}}`), Word şablon dosyalarının indirilmesi, düzenlenmesi ve sisteme yeniden yüklenmesi.
- **Doğrudan Üretim ve Otomatik Açma (`btnGenerate`):** `ReportEngine.run()` operasyonu başarıyla tamamlandığında işletim sistemi varsayılan belge görüntüleyicisi (`os.startfile` / `QDesktopServices`) ile dosyayı anında ekrana getirir.

### 3. Hayalet / Kapsam Dışı Bileşen Tespiti
- **`ignore_manager_dialog.ui` (Yoksayma Filtreleri ve Test Notları):** Bu XML arayüzü `docs/ui_controls.md` içinde yer alsa da, projede `ui/controllers/ignore_manager_dialog.py` adında bir denetleyici mevcut DEĞİLDİR. `app/interaction_logger.py` içerisinde sadece yazılım geliştirme sırasındaki manuel QA test loglarını filtrelemek için tasarlanmış bir iç debug stub'ıdır. Uygulama menüsünde veya kullanıcı ekranlarında hiçbir butona bağlı değildir. **KAPSAM DIŞI / HAYALET BİLEŞEN** olarak işaretlenmiştir.
- **Uygulanmamış Raporlar (`uygulanmis_mi=False`):** `REPORT_REGISTRY` içerisindeki `rapor_sablonu`, `radyoaktif_atik_envanter` ve `rgk_karar_takip` raporları ağaçta listelenir fakat "(Yakında)" etiketi alır ve `btnGenerate` butonu pasif bırakılır.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE (İşlem / Alan) | NEDEN (Gerekçe / Standart) | NEREDE (Arayüz Yolu) | NASIL (Tetikleme / Yöntem) | NE ZAMAN (Koşul / Zamanlama) | KİM (Rol / Yetki) | DURUM (Sistem Tepkisi) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **İzin Onayı** | Personelin izin talebini resmiyete dökmek | Onay Paneli → İzin Talepleri (`btnTabIzin`) | Tablodan seçim → `btnIzinApprove` veya çift tıklama | İzin başlangıç tarihinden önce | Birim Sorumlusu / Yönetici / Admin | Teyit mesajı sonrası talep Onaylandı olur, bakiye düşer |
| **İzin Reddi** | Uygun görülmeyen izin başvurusunu iptal etmek | Onay Paneli → İzin Talepleri (`btnTabIzin`) | Tablodan seçim → `btnIzinReject` | İnceleme esnasında | Birim Sorumlusu / Yönetici / Admin | `QInputDialog` ile zorunlu gerekçe alınır, durum Reddedildi olur |
| **Nöbet Devir İnceleme** | Devreden/alan personel ve vardiya saatlerini teyit etmek | Onay Paneli → Nöbet Devirleri (`btnTabDevir`) | `btnDevirReview` veya satıra çift tıklama | Karar vermeden önce | Birim Sorumlusu / Hizmet Sorumlusu / Admin | `NobetDevirDetayDialog` penceresi açılır |
| **Nöbet Devir Onayı** | Karşılıklı kabul edilen nöbet takasını çizelgeye yansıtmak | Onay Paneli → Nöbet Devirleri (`btnTabDevir`) | `btnDevirApprove` veya detay diyaloğundan Onayla | Devralan personelin portal onayından sonra | Birim Sorumlusu / Hizmet Sorumlusu / Admin | Çizelgedeki nöbetçi personel otomatik yer değiştirir |
| **Nöbet Devir Reddi** | Servis işleyişini aksatacak devir talebini reddetmek | Onay Paneli → Nöbet Devirleri (`btnTabDevir`) | `btnDevirReject` veya detay diyaloğundan Reddet | İnceleme aşamasında | Birim Sorumlusu / Hizmet Sorumlusu / Admin | Zorunlu ret gerekçesi alınır, personele bildirilir |
| **Nöbet İstek Onayı/Reddi** | Personelin nöbet muafiyet, mazeret ve fazla mesai tercihlerini karara bağlamak | Onay Paneli → Nöbet İstekleri (`btnTabIstek`) | `btnIstekApprove` veya `btnIstekReject` | Solver çalıştırmadan ve plan hazırlamadan önce | Başteknisyen / Birim Sorumlusu / Admin | Onaylanan istekler solver motoruna bağlayıcı kısıt olarak girer |
| **Nöbet Planı Yayınlama** | Birim onaylı taslak çizelgeyi resmi yürürlüğe sokmak | Onay Paneli → Nöbet Planları (`btnTabPlanOnay`) | `btnPlanApprove` | Ay bitmeden, yeni ayın nöbetleri başlamadan | İdare / Başhekimlik / Admin | Durum "Yayında" olur, portalda tüm personele görünür |
| **Nöbet Planı İade** | Kural ihlali veya eksiklik tespit edilen planı geri göndermek | Onay Paneli → Nöbet Planları (`btnTabPlanOnay`) | `btnPlanReject` | Taslak incelemesinde hata görüldüğünde | İdare / Başhekimlik / Admin | Zorunlu iade notu alınır, plan "Taslak" statüsüne döner |
| **Veri Değişiklik İnceleme (Diff)** | 4-göz denetiminde eski ve yeni değerleri kıyaslamak | Onay Paneli → Veri Değişiklikleri (`btnTabVeriOnay`) | `btnVeriReview` veya satıra çift tıklama | Kritik veri onaylanmadan önce | Modül Yetkilisi / Yönetici / Admin | `DiffDialog` açılır; eski (kırmızı), yeni (yeşil) gösterilir |
| **Sağlık Muayene Doğrulama** | Personelin yüklediği sağlık muayene sonucunu hekimce teyit etmek | Onay Paneli → Veri Değişiklikleri (`btnTabVeriOnay`) | `btnVeriReview` | Sağlık muayene talebi seçildiğinde | RKS / İşyeri Hekimi / Admin | `SaglikMuayeneAddController` hekim doğrulama modunda açılır |
| **Veri Değişiklik Hızlı Onay** | Rutin veri güncellemelerini tek tıkla uygulamak | Onay Paneli → Veri Değişiklikleri (`btnTabVeriOnay`) | `btnVeriApprove` | Muayene dışı veri taleplerinde | Modül Yetkilisi / Yönetici / Admin | Hedef tablo güncellenir, yüklenen dosya şifreli kasaya taşınır |
| **Veri Değişiklik Reddi** | Hatalı veya mevzuata aykırı veri girişini engellemek | Onay Paneli → Veri Değişiklikleri (`btnTabVeriOnay`) | `btnVeriReject` | İnceleme esnasında | Modül Yetkilisi / Yönetici / Admin | Zorunlu ret gerekçesiyle talep iptal edilir |
| **Rapor Filtreleme** | Kurumsal dökümü departman, dönem veya personele göre daraltmak | Rapor Merkezi → Raporlar (`tabRaporlar`) | Ağaçtan rapor seçimi → Sağdaki dinamik filtreler | Rapor üretiminden önce | `raporlar:okuma` yetkisine sahip kullanıcı | Parametre formu rapora özel dinamik inşa edilir |
| **Rapor Çıktısı Alma** | Resmi denetim veya muhasebe belgesi oluşturmak | Rapor Merkezi → Raporlar (`tabRaporlar`) | Format seçimi (`cmbFormat`) → `btnGenerate` | İhtiyaç anında veya periyodik denetimlerde | `raporlar:okuma` yetkisine sahip kullanıcı | Dosya diskte üretilir ve sistem varsayılan programıyla açılır |
| **Word Şablon Özelleştirme** | Antetli Word belgelerinde kurum logosu ve metinleri ayarlamak | Rapor Merkezi → Şablon Ayarları (`tabSablonAyarlari`) | `lblCustomizeLink` veya doğrudan sekme | Kurum kimliği değiştiğinde veya yeni şablon eklendiğinde | `raporlar:yazma` yetkisine sahip Admin/Yönetici | `TemplatesController` açılır; logo ve şablon yüklenir |

---

## C. Mantık ve Kısıt Soruları (Kullanıcı Teyidine Sunulan Noktalar)

1. **İzin ve Nöbet Devir Ret Gerekçeleri:** İzin veya nöbet devri reddedildiğinde yöneticiden zorunlu olarak alınan ret gerekçesi, personelin web portalındaki bildirim paneline anlık olarak yansıtılmaktadır. Ek bir e-posta veya SMS uyarısı gönderilmesi planlanmakta mıdır?
2. **Nöbet Planı Taslağa İade Akışı:** İdare/Yönetici bir nöbet planını "Taslağa Geri Gönder" (`btnPlanReject`) yaptığında, çizelge üzerinde personellerin kilitli günleri veya onaylanmış izinleri korunmakta mıdır? Çizelgeyi hazırlayan birim amirine revizyon için otomatik bir bildirim açılmakta mıdır?
3. **Sağlık Muayenelerinde "Hızlı Onay" Yasağı:** Veri Değişiklikleri sekmesinde Sağlık Muayenesi (`personel_saglik_muayene`) kayıtları için "Hızlı Onayla" butonu tıklandığında sistem işlemi doğrudan onaylamayıp hekim doğrulama formunu (`SaglikMuayeneAddController`) zorunlu açmaktadır. Bu zorunlu inceleme kuralı, benzer şekilde RGS görevlendirmeleri veya çalışma kısıtları için de genişletilmeli midir?
4. **Word Şablonlarında Çift Logo Zorunluluğu:** `docxtpl` motoru Word şablonlarını işlerken kurum ayarlarında tanımlı `{{LOGO_1}}` ve `{{LOGO_2}}` logolarını `InlineImage` ile yerleştirir. Kurumda sadece tek logo tanımlıysa veya logo yüklenmemişse sistem şablonu logoyu atlayarak hatasız üretmektedir; bu davranış uygun mudur?
5. **Bekleyen Onay Kuyruğu Limitleri:** Controller kodunda beklemedeki talepler için varsayılan sorgu limiti `limit=500` olarak belirlenmiştir. Geçmişe dönük çok eski veya zaman aşımına uğramış (örneğin 30 günden eski devir veya izin) talepler için otomatik düşürme/arşivleme kuralı işletilmeli midir?

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

| Modül / İşlev | Masaüstü İstemcisi (PySide6) | Web Portal (React / TypeScript) | Hibrit Eşzamanlama Durumu |
| :--- | :--- | :--- | :--- |
| **İzin Onayları** | `OnayBekleyenGorevlerController` (İzin Sekmesi) üzerinden toplu listeleme, inceleme, onay ve ret. | Personel `LeaveRequestForm` ile talep açar; amirler ise mobil portal üzerinden izin onaylar/reddeder. | **Tam Hibrit.** Portaldan yapılan başvuru masaüstü kuyruğuna düşer; masaüstünden verilen onay webde anında görünür. |
| **Nöbet Devir / Becayiş** | `NobetDevirDetayDialog` ile devralan onayı teyidi, 3 aşamalı hiyerarşik yönetici onayı. | `ShiftExchangeHubView` (personeller arası takas pazarı) ve `ShiftApprovalView` (sorumlu mobil onayı). | **Tam Hibrit.** Personel webden devreder, devralan webden onaylar, son yönetici onayı ister webden ister masaüstünden verilir. |
| **Nöbet İstekleri** | `istekTable` üzerinden mazeret, eğitim ve fazla mesai taleplerinin yönetici onayı. | Personel `PersonnelRequestForm` üzerinden aylık mazeret ve tercihlerini girer. | **Tam Hibrit.** Webden girilen istekler masaüstü onay listesine anında düşer. |
| **Nöbet Planı Yayınlama** | `planOnayTable` üzerinden birim onaylı planı idare onayıyla "Yayında" durumuna getirme. | Personel yalnızca "Yayında" olan nihai nöbet çizelgesini görebilir; plan onaylama yetkisi yoktur. | **Masaüstü Öncelikli.** Yayınlama işlemi masaüstü idari onay mekanizmasına bağlıdır. |
| **Veri Değişiklikleri (Diff)** | `DiffDialog` ile eski (kırmızı) ve yeni (yeşil) değerleri karşılaştırarak onaylama/reddetme. | Personel profilinde yaptığı değişiklikler (`res.pendingApproval=true`) bilgi kutusuyla kuyruğa iletilir; webde diff ekranı yoktur. | **Masaüstü Yönetici Odaklı.** Talep webden açılır, inceleme ve onay masaüstü Diff arayüzünden yürütülür. |
| **Kurumsal Rapor Merkezi** | `RaporMerkeziController` ile 17 farklı resmi raporu Word (.docx), Excel (.xlsx) ve PDF olarak üretme; Şablon yönetimi. | Web portalda matbu şablon merkezi yoktur; bunun yerine etkileşimli analitik panolar (`dashboard.nobet`, `dashboard.dozimetre` vb.) yer alır. | **Masaüstü Münhasır.** Resmi antetli Word/PDF rapor üretimi ve marka ayarları masaüstünde çalışır. |

---

## E. Hedefli Ekran Görüntüsü Talebi

Kullanım Kılavuzu (`21_merkezi_onaylar_ve_rapor_merkezi.html`) sayfasına yerleştirilmek üzere **SADECE 2 ADET** kritik ekran görüntüsü gerekmektedir. Dosyalar doğrudan `docs/help/assets/img/` klasörüne kaydedilmelidir:

1. **`docs/help/assets/img/modul21_onay_merkezi.png`**:
   - **Gereksinim:** Merkezi Onay Bekleyen Görevler Paneli açıkken, sol taraftaki kategori rozetleri (`İzin Talepleri`, `Nöbet Devirleri`, `Nöbet İstekleri`, `Nöbet Planları`, `Veri Değişiklikleri`) ve sağdaki işlem tablosu (tercihen `DiffDialog` veya `NobetDevirDetayDialog` açıkken) net olarak görünmelidir.
2. **`docs/help/assets/img/modul21_rapor_merkezi.png`**:
   - **Gereksinim:** Rapor Merkezi ana sayfası açıkken; sol tarafta Kategori Ağacı (`categoryTree`), orta alanda Rapor Listesi (`reportListWidget`), sağ alanda dinamik parametre filtreleri ve çıktı formatı (`cmbFormat`) görünmelidir.

---

### Sonraki Adım:
Kullanıcının **C. Mantık ve Kısıt Soruları** hakkındaki geri bildirimleri ve yönlendirmeleri alındıktan sonra, Vizyonder & Zero-Support tasarım ilkelerine tam uyumlu nihai kılavuz sayfası `docs/help/21_merkezi_onaylar_ve_rapor_merkezi.html` üretilecektir.
