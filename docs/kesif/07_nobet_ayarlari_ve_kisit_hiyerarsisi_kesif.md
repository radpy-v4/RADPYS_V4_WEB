# Keşif Raporu: 07_nobet_ayarlari_ve_kisit_hiyerarsisi

**Modül Adı:** Nöbet Ayarları, Kural Piramidi ve Kısıt Hiyerarşisi  
**Tarih:** 2026-09-24  
**İncelenen Dosyalar:**
- `ui/controllers/nobet/nobet_ayarlar_controller.py`
- `ui/controllers/nobet/nobet_ayarlar_genel_tab.py`
- `ui/controllers/nobet/nobet_ayarlar_birim_tab.py`
- `ui/controllers/nobet/nobet_ayarlar_kisitlar_tab.py`
- `ui/controllers/nobet/nobet_ayarlar_personel_kisitlar_tab.py`
- `ui/controllers/nobet/nobet_ayarlar_personel_istekleri_tab.py`
- `ui/pages/admin/setting/nobet/nobet_ayarlar_main.ui`
- `ui/pages/admin/setting/nobet/nobet_temel.ui`
- `ui/pages/admin/setting/nobet/nobet_birim_kural.ui`
- `ui/pages/admin/setting/nobet/nobet_birim_person.ui`
- `ui/pages/admin/setting/nobet/nobet_person_kisit.ui`
- `ui/pages/admin/setting/nobet/nobet_gelismis.ui`
- `app/services/nobet/nobet_settings_service.py`
- `app/services/nobet/nobet_service.py`
- `app/services/nobet/nobet_scheduler.py`
- `app/infrastructure/db/repositories/nobet_repository.py`
- `web_portal/src/routes/nobet.routes.ts`

---

## A. Modülün Özeti ve Görevleri (Temel İş Akışları)

Nöbet Ayarları ve Kısıt Hiyerarşisi Modülü; RADPYS'nin otomatik nöbet dağıtım algoritması (Nöbet Dağıtım Motoru) ve manuel çizelgeleme operasyonlarının uymak zorunda olduğu tüm kanuni, kurumsal ve departman bazlı sınırları belirleyen karar destek altyapısıdır.

Kod tabanından satır satır tespit edilen temel iş akışları:

1. **Kural Öncelik Piramidi (Constraint Hierarchy):**
   Sistemde nöbet atamaları yapılırken kurallar kesin bir öncelik sırasına göre değerlendirilir:
   - **1. Derece Öncelik (En Özel):** Birim ve Hizmet Sınıfı Kuralı (`birim_id = X AND hizmet_sinifi = Y`)
   - **2. Derece Öncelik:** Birim Özel Kuralı (`birim_id = X AND hizmet_sinifi IS NULL`)
   - **3. Derece Öncelik:** Hizmet Sınıfı Genel Kuralı (`birim_id IS NULL AND hizmet_sinifi = Y`)
   - **4. Derece Öncelik (En Genel):** Sistem Genel Temel Ayarları (`nobet_ayarlari`)
   *Kod Kanıtı: `NobetSettingsService.get_hierarchical_constraint_row` (CASE WHEN sıralaması).*

2. **24 Saat Kuralı ve Dinlenme Süresi Standartları:**
   - **Günlük Maksimum Nöbet:** Personelin 24 saatlik takvim gününde tutabileceği tavan çalışma süresi (`gunluk_max_nobet_saati`, varsayılan 24 saat).
   - **Asgari Dinlenme Süresi:** Nöbet bitiminden sonraki nöbete kadar geçmesi gereken zorunlu dinlenme süresi (`nobet_sonrasi_min_dinlenme_saat`, varsayılan 24 saat).
   - **Ardışık Nöbet Sınırı:** Personelin üst üste nöbetçi olabileceği azami gün sayısı (`art_arda_max_nobet_gunu`, varsayılan 2 gün).
   - **Gece Nöbeti Boşluğu:** Gece vardiyaları arasında zorunlu boşluk (`gece_nobeti_min_bosluk`, varsayılan 48 saat).

3. **Fazla Mesai Tavan Hiyerarşisi:**
   - **Yasal Tavan (Statutory Ceiling):** 130 saat (`yasal_maks_fazla_mesai`, `nobet_kisitlari` tablosundan beslenir).
   - **Kurumsal Temel Sınır:** 60 saat (`personel_istek_max_saat`, `nobet_ayarlari` tablosundan beslenir).
   - **Bireysel Kısıt / Talep:** Personelin onaylı fazla mesai talebi dahi kurumsal tavanı aşamaz (`min(approved_fm, personel_istek_max)`).
   - **FM Muafiyeti:** `fm_off == 1` veya kısıt limiti `0.0` olan personele solver tarafından kesinlikle fazla mesai yazılamaz.

4. **Yasal Muafiyetler ve Pozitif Ayrımcılık Kalkanı:**
   - **Yaş ve Kıdem Muafiyeti:** 50 yaş veya 25 hizmet yılını dolduran personel gece ve hafta sonu nöbetlerinden otomatik muaf tutulur (`muafiyet_yas_siniri = 50`, `muafiyet_kidem_yili = 25`).
   - **Kıdem Dengesi:** Kıdemi 5 yıldan az olan personeller (`kidem_esik_yil = 5`) kıdem adaletine göre öncelikli değerlendirilir.
   - **Yasal Emzirme İzni:** İlk 6 ay günde 3.0 saat, ikinci 6 ay günde 1.5 saat mesai azaltımı uygulanır.
   - **Sendika Temsilciliği:** Memurlar için haftalık 4.0 saat, İşçi/Destek için haftalık 2.0 saat mesai azaltımı uygulanır.
   - **Gebelik Kalkanı:** Gece nöbeti ve fazla mesai yasaklanır; NDK doz eşiği 1 mSv'e kilitlenir.
   - **Engelli ve Doz Aşımı:** 657 SK m. 101 engelli gece muafiyeti ve NDK doz aşımı çalışma yasağı.

5. **Birim Nöbet Slotları ve Kural Kopyalama Motoru:**
   - Departman bazında vardiya tanımları (Örn: Acil Gece 12s, Acil Gündüz 12s, BT Gece 17s, 24 Saatlik Nöbet).
   - Akıllı saat hesaplayıcı (`slotStartInput + slotHourInput = slotEndInput`, gece yarısı devri +24 saat).
   - Gün Kısıtı: "Her Gün", "Sadece Hafta İçi", "Sadece Hafta Sonu ve Tatil".
   - Kural Kopyalama: Birimin tüm slot ve kurallarını hedef birime tek tuşla aktarma (`copy_unit_rules`).

6. **Devir ve Onay Güvenlik Parametreleri:**
   - Devir gerekçesi zorunluluğu (`require_transfer_reason`).
   - Yayınlanan plandan taslağa geri alma yetkisi (`allow_rollback_from_published`).
   - Onaylanmış devirlerin değiştirilmesini engelleme (`block_devir_modification`).

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen / Ayar) | NEDEN? (Kullanım Amacı) | NEREDE? (Ekran & Kod Konumu) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? | DURUM (Aktif/Pasif) |
|---|---|---|---|---|---|---|
| **Kural Hiyerarşisi Bilgi Notu** | Kullanıcıya solver karar sırasını hatırlatmak. | `nobet_temel.ui:banner`, `nobet_birim_kural.ui` | UI üst bandında "Birim Kuralları > Vardiya Kısıtları > Temel Ayarlar" uyarısını gösterir. | Ekran açıldığında. | Tüm Roller | **Aktif** |
| **Ardışık Nöbet Günü (`maxConsecutiveInput`)** | Personelin tükenmişliğini ve tıbbi hata riskini önlemek. | Temel Ayarlar / `nobet_ayarlar_genel_tab.py:88` | Değer 1-7 gün arası seçilir (varsayılan 2). Solver bu günü aşan atama yapmaz. | Çizelgeleme esnasında. | Yönetici | **Aktif** |
| **Nöbet Sonrası Dinlenme (`minRestInput`)** | Biyolojik toparlanma ve dinlenme hakkını korumak. | Temel Ayarlar / `nobet_ayarlar_genel_tab.py:90` | Nöbet bitişi ile bir sonraki nöbet başlangıcı arasında asgari saat farkı (varsayılan 24s) arar. | Çizelgeleme esnasında. | Yönetici | **Aktif** |
| **Günlük Max Nöbet Saati (`dailyMaxHourInput`)** | 24 saatlik periyotta aşırı çalışmayı engellemek. | Temel Ayarlar / `nobet_ayarlar_genel_tab.py:92` | 24 saatlik takvim gününde maksimum mesaiyi sınırlar (varsayılan 24s). | Planlama anında. | Yönetici | **Aktif** |
| **Hafta Sonu / Bayram Kotası** | Tatil günlerinin adil dağıtılmasını sağlamak. | Temel Ayarlar / `weekendMaxInput`, `holidayMaxInput` | Ayda maksimum 4 hafta sonu, 2 bayram nöbeti tavanı koyar; ceza puanlarıyla dağıtır. | Solver dağıtımında. | Yönetici | **Aktif** |
| **Haftalık Mesai Standartları** | Radyasyon ve normal mesai farkını hesaplamak. | Temel Ayarlar / `weeklyNormalWorkInput` (40s), `weeklyRadiationWorkInput` (35s) | Katsayı oranı hesaplanır: `hn / hr` = 40 / 35 = 1.142857. Mesai dengelemelerinde baz alınır. | Sürekli canlı. | Yönetici | **Aktif** |
| **Yaş ve Kıdem Muafiyeti** | Tecrübeli ve yaş sınırındaki personele yasal hak tanımak. | Temel Ayarlar / `ageLimitExemptionInput` (50), `seniorityExemptionInput` (25) | Personel yaşı >= 50 veya kıdem yılı >= 25 ise gece ve hafta sonu nöbetlerinden muaf tutulur. | Otomatik planlamada. | Yönetici | **Aktif** |
| **Birim Nöbet Slotları Tablosu** | Departmanın vardiya şablonunu belirlemek. | Birim Kuralları / `unitSlotsTable` (`nobet_ayarlar_birim_tab.py`) | Birim, nöbet adı, süresi, başlangıç/bitiş saatleri ve slot nöbetçi sayısı listelenir ve yönetilir. | Birim kurulurken/düzenlenirken. | Yönetici, Süpervizör | **Aktif** |
| **Akıllı Saat Hesaplayıcı** | Başlangıç ve süreye göre bitiş saatini otomatik üretmek. | Birim Kuralları / `slotStartInput`, `slotHourInput`, `slotEndInput` | `Start + Hour = End` formülüyle çalışır; gece yarısını aşan saatlerde otomatik 24 saat modülü uygular. | Vardiya tanımlarken. | Yönetici | **Aktif** |
| **Birim Kuralı Kopyalama (`copy_unit_rules`)** | Departmanlar arası kural çoğaltmayı saniyelere indirmek. | Birim Kuralları / `newUnitCopyButton` | Kaynak birimin tüm kural ve slotlarını hedef birime onay alarak kopyalar. | Yeni birim açıldığında. | Yönetici | **Aktif** |
| **Personel Nöbet İstekleri (`prTypeCombo`)** | Personelin mazeret, istek, eğitim ve FM taleplerini toplamak. | Personel Talepleri / `personnelRequestsTable` | Mazeret (nöbet yazılmasın), İstek (nöbet yazılsın), Eğitim kısıtı ve Fazla Mesai tavanı girilir. | Ay öncesi talep döneminde. | Personel, Süpervizör | **Aktif** |
| **Personel Özel Kısıtları (`pcTypeCombo`)** | Bireysel sağlık ve yasal çalışma kısıtlarını işlemek. | Personel Kısıtları / `personnelConstraintsTable` | Emzirme, gebelik, engelli, doz aşımı, heyet raporu ve sendika izinleri tanımlanır; solver'a aktarılır. | Sağlık/durum değiştiğinde. | Yönetici, İK | **Aktif** |
| **Yasal & Kurumsal Kısıtlar Tablosu** | Gelişmiş kural ve ağırlık matrisini yönetmek. | Vardiya Kısıtları / `constraintsTable` (`nobet_ayarlar_kisitlar_tab.py`) | Sert (Hard) ve Yumuşak (Soft) kısıtlar, ceza puanları, birim ve hizmet sınıfı kapsamları listelenir. | İnce ayar döneminde. | Sistem Yöneticisi | **Aktif** |
| **Plandan Geri Alma İzni (`allowRollbackCheck`)** | Yayınlanmış planda revizyon ihtiyacını yönetmek. | Temel Ayarlar / `allowRollbackCheck` | Aktifse yetkili kullanıcı yayınlanan planı taslağa çekebilir; kapalıysa kilitlenir. | Revizyon gerektiğinde. | Yönetici | **Aktif** |
| **Devir Nedeni Zorunluluğu (`requireTransferReasonCheck`)** | Nöbet takaslarında suiistimali önlemek. | Temel Ayarlar / `requireTransferReasonCheck` | Aktifse personelin nöbet devir talebinde mazeret açıklaması girmesi mecburi tutulur. | Devir başlatılırken. | Yönetici | **Aktif** |

---

## C. Mantık ve Kısıt Soruları (Kullanıcı Kararına Sunulan Eşikler)

Kılavuz dokümantasyonuna ve kural mimarisine nihai yön vermek üzere teyit edilmesi gereken 4 karar noktası:

1. **Kural Hiyerarşisi Piramidi:**
   - Kodda departman kuralı, genel kuraldan daha özel olduğu için daima genel ayarı ezer (Örn: Genel kuralda ardışık nöbet 2 gün iken, Acil Radyoloji birim kuralında 1 gün seçilmişse Acil için 1 gün uygulanır).
   - **Soru:** Kılavuzda bu yapı "En Özel Kural Daima Önceliklidir" başlığı altında şematik olarak vitrine çıkarılsın mı?

2. **Fazla Mesai Tavan Kademesi:**
   - Sistemde 3 kademeli FM sınırı vardır: Yasal Tavan (130 saat) > Kurumsal Temel Sınır (60 saat) > Bireysel Onaylı Talep. Personel bireysel olarak 80 saat talep etse dahi sistem kurumsal tavan olan 60 saati aşamaz (`min(talep, temel_ayar)`).
   - **Soru:** Kılavuzda bu kural "Yönetici Onayı ile Bile Kurumsal Tavan Aşılamaz" şeklinde emniyet kilidi olarak vurgulansın mı?

3. **50 Yaş / 25 Yıl Muafiyeti ve İstek İstisnası:**
   - Kodda 50 yaş veya 25 hizmet yılını dolduran personeller otomatik nöbet listesinden muaf tutulur. Ancak personel kendi rızasıyla "Nöbet Yazılsın" (`nobet_yaz`) talebinde bulunursa sistem muafiyeti esnetip nöbet yazar.
   - **Soru:** Kılavuza *"Muafiyet personelin aleyhine zorunlu bir yasak değil, koruyucu bir hak olup personelin yazılı isteğiyle nöbet tutulabilir"* notu düşülsün mü?

4. **Birim Kuralı Kopyalama Davranışı:**
   - Bir birimin kuralları başka bir birime kopyalandığında (`copy_unit_rules`), hedef birimdeki eski slotlar temizlenerek kaynak birimdeki slotlar sıfırdan yazılır (mükerrerliği önlemek için).
   - **Soru:** Kılavuzda hedef birimin eski slotlarının ezileceği uyarısı bir "Dikkat / Uyarı" kutusu olarak belirtilsin mi?

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

| Özellik / Kural | Masaüstü Kokpiti (`ui/controllers/nobet/`) | Web Portalı (`web_portal/routes/nobet.routes.ts`) | Mimari Ayrım ve Durum |
| :--- | :--- | :--- | :--- |
| **Temel Nöbet Parametreleri** | `NobetAyarlarGenelTab` (24s kuralı, dinlenme, yaş/kıdem muafiyeti) | Bulunmamaktadır (Salt okunur backend tüketimi). | Yönetim kokpiti yalnızca Masaüstü Sistem Yöneticisine aittir. |
| **Birim Kuralları & Slot Tanımları** | `NobetAyarlarBirimTab` (Slot saatleri, süreler, kural kopyalama) | Bulunmamaktadır. | Departman slotları sadece masaüstünden yapılandırılır. |
| **Personel Nöbet İstekleri** | `NobetAyarlarPersonelIstekleriTab` (Onay, ret, revizyon) | `/api/nobet/meslektaslar`, profil istekleri | Personel webden talebini iletir, masaüstü amir onaylar. |
| **Özel Sağlık Kısıtları (Gebe/Emzirme)** | `NobetAyarlarPersonelKisitlarTab` (Doğum güncelleme, sendika saati) | `/api/personel/gebelik-bildirimi` (Onay kuyruğuna düşer) | Beyan webden başlatılabilir, tescil masaüstünden yürütülür. |
| **Nöbet Devir & Takas Kuralları** | Devir ön şartları (`require_transfer_reason`, `block_devir_modification`) | `/api/nobet/devir/*` (Karşılıklı OTP ile takas ve devir) | Kurallar masaüstünde belirlenir, devir operasyonu webde döner. |

---

## E. Hedefli Ekran Görüntüsü Referansları

Kılavuz için `docs/help/assets/img/` dizininde hazır bulunan şu 2 kritik pencere görseli kullanılacaktır:

1. **Temel Ayarlar ve Kural Hiyerarşisi:** `nobet_temel.ui.png`  
   *(Kısıt Hiyerarşisi Bilgi Notu, Temel Parametreler, Fazla Mesai Limitleri, Muafiyet Kriterleri, Devir ve Plan Onay Kuralları)*
2. **Birim Kuralları ve Vardiya Slotları:** `nobet_birim_kural.ui,.png`  
   *(Departman seçici, slot tablosu, başlangıç/bitiş saatleri, süre hesabı, nöbetçi sayısı ve Birim Kuralını Kopyala operasyonu)*

---

## F. Kullanıcı Kararları ve Nihai Kılavuz Esasları

Kullanıcı ile yapılan istişare sonucunda onaylanan kurallar ve kılavuz rehber ilkeleri:

1. **Kural Hiyerarşisi Piramidi:**
   - "En Özel Kural Daima Önceliklidir" prensibi geçerlidir. Birim + Hizmet Sınıfı kuralı > Birim Kuralı > Hizmet Sınıfı Kuralı > Genel Temel Ayar sıralaması geçerlidir ve kılavuzda şematik olarak vitrine çıkarılacaktır.
2. **Fazla Mesai Tavanı ve Yönetici Esnekliği:**
   - Kurumsal temel tavan (varsayılan 60 saat) katı bir duvar değildir; acil servis ihtiyaçları, personel yetersizliği ve olağanüstü durumlarda **Yönetici Onayı ile aşılabilir**. Nihai yasal sınır ise kanuni tavan olan 130 saattir.
3. **Yaş ve Kıdem Muafiyeti Esnekliği (50 Yaş / 25 Hizmet Yılı):**
   - Bu muafiyet mutlak bir kanuni yasak değil, **kurum içi koruyucu bir öncelik politikasıdır**. Algoritma bu personele öncelikli olarak gündüz nöbeti verir; ancak serviste boş slot kalması, hizmet aksaması veya personelin aylık zorunlu çalışma süresinin eksik kalması durumlarında algoritma bu kısıtı otomatik olarak esnetip gece nöbeti atayabilir.
4. **Birim Kuralı Kopyalama Operasyonu:**
   - Bir birimin kuralları başka bir birime kopyalandığında hedef birimdeki mevcut slotlar silinerek yerine kaynak birimin slotları yazılır. Bu durum kılavuzda belirgin bir "Dikkat / Uyarı" kutusu ile açıklanacaktır.

---

## G. 5 Alt Bölümlü Dokümantasyon Mimarisi ve Arayüz Terminoloji Standardı

Kullanıcı geri bildirimi ve UX sadeleştirme kararları doğrultusunda:
1. **5 Bağımsız Alt Sayfa Mimarisi:**
   Onlarca karmaşık parametrenin tek bir sayfada kullanıcıyı boğmasını önlemek amacıyla Modül 07, her ayar sekmesi için müstakil bir 5N1K tablosu, hızlı reçete ve adım adım rehber içeren 5 alt sayfaya ve 1 ana hub sayfasına ayrılmıştır:
   - `07_nobet_ayarlari_ve_kisit_hiyerarsisi.html` (Ana Kokpit & Kural Hiyerarşisi Piramidi)
   - `07_1_temel_ayarlar_ve_calisma_standartlari.html` (Temel Ayarlar, Dinlenme, 60s FM ve 50 Yaş Muafiyeti)
   - `07_2_birim_kurallari_ve_slot_yonetimi.html` (Birim Nöbet Slotları, Akıllı Saat Motoru & Kural Kopyalama)
   - `07_3_gelismis_kisitlar_ve_adalet_agirliklari.html` (Hizmet Sınıfı Kısıtları & Solver Ceza Katsayıları)
   - `07_4_personel_ozel_saglik_ve_yasal_kisitlar.html` (Gebe Nöbet Yasağı, Emzirme Süt İzni, Sendika İzni, FM Off)
   - `07_5_personel_talepleri_ve_onay_yonetimi.html` (Personel Nöbet İstekleri, Mazeretler & Amir Onay/Red Akışı)

2. **Arayüz Terminoloji Standardı (Kod Değişkeni Yasağı):**
   Kullanıcı için anlamsız olan backend/frontend kod değişken isimleri (`maxConsecutiveInput`, `minRestInput`, `personRequestOvertimeMaxInput`, `unitSlotsTable`, `prTypeCombo` vb.) kullanıcı kılavuzlarından ve 5N1K tablolarından tamamen ayıklanmış; yerine ekranda doğrudan görünen Türkçe buton, etiket ve kutu isimleri (`Maksimum Ardışık Gün & Min Dinlenme (Saat)`, `Maksimum Fazla Mesai Süresi (Saat) Kutusu`, `Birim Kuralını Kopyala Butonu`, `İsteği Onayla / Reddet Butonları` vb.) yerleştirilmiştir.

