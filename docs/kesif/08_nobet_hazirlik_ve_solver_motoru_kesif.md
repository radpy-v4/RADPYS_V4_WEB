# Keşif Raporu: 08_nobet_hazirlik_ve_solver_motoru

**Modül Adı:** Nöbet Hazırlık, Çizelge Matrisi ve Solver Motoru (Tier 3: Algoritmik Karar / Optimizasyon)  
**Tarih:** 2026-09-24  
**İncelenen Dosyalar:**
- `ui/controllers/nobet/nobet_plan_main_controller.py`
- `ui/controllers/nobet/nobet_plan_list_controller.py`
- `ui/controllers/nobet/nobet_plan_onizleme_controller.py`
- `ui/controllers/nobet/nobet_plan_detay_controller.py`
- `ui/controllers/nobet/nobet_plan_dialog_controller.py`
- `ui/controllers/nobet/nobet_cizelge_dialog_controller.py`
- `ui/controllers/nobet/nobet_plan_iptal_dialog_controller.py`
- `ui/controllers/nobet/nobet_hizli_istek_dialog.py`
- `ui/controllers/nobet/nobet_gecici_personel_dialog_controller.py`
- `ui/controllers/nobet/nobet_plan_incele_controller.py`
- `ui/widgets/nobet_cizelge_table.py` (`NobetCizelgeTableWidget`, `CizelgeTableDelegate`)
- `ui/pages/nobet/nobet_plan_main.ui`
- `ui/pages/nobet/nobet_plan_listesi_page.ui`
- `ui/pages/nobet/nobet_plan_onizleme_page.ui`
- `ui/pages/nobet/nobet_plan_detay_page.ui`
- `ui/pages/nobet/nobet_plan_dialog.ui`
- `ui/pages/nobet/nobet_cizelge_dialog.ui`
- `ui/pages/nobet/nobet_plan_iptal_dialog.ui`
- `ui/pages/nobet/nobet_hizli_istek_dialog.ui`
- `ui/pages/nobet/nobet_gecici_personel_dialog.ui`
- `ui/pages/nobet/nobet_plan_incele.ui`
- `app/services/nobet/nobet_scheduler.py` (`NobetScheduler`, `NobetSchedulerWorker`)
- `app/domain/nobet/hedef_saat_hesaplayici.py`
- `app/domain/nobet/nobet_kisit_engine.py`
- `app/services/nobet/nobet_service.py`
- `app/services/nobet/nobet_plan_service.py`
- `app/services/nobet/nobet_cizelge_service.py`
- `web_portal/src/routes/nobet.routes.ts`

---

## A. Modülün Özeti ve Görevleri (Temel İş Akışları)

Nöbet Hazırlık, Çizelge Matrisi ve Solver Motoru Modülü; RADPYS'nin vitrin çekirdeği olup sağlık personelinin aylık nöbet dağıtımını kanuni kısıtlar, kurumsal tavanlar, radyasyon çalışma katsayıları, mazeret/izin dengesi ve adalet optimizasyonuyla gerçekleştiren karar destek motorudur.

Kod tabanından satır satır tespit edilen temel iş akışları:

1. **Plan Yaşam Döngüsü ve Statü Yönetimi:**
   - Planlar 4 temel aşamadan geçer: `Taslak` ➔ `Birim Onaylı` ➔ `Yayında` ➔ `Arşiv`.
   - `Taslak`: Solver çalıştırılabilir, manuel nöbet eklenebilir, silinebilir, yedekten geri yüklenebilir.
   - `Birim Onaylı` / `Yayında`: Kilitlenir (`_is_plan_locked = True`). Solver koşturulamaz, doğrudan silinemez, doğrudan nöbet hücresi değiştirilemez.
   - Plandan Taslağa Geri Alma (`revertToDraftButton`): Sistem ayarlarında `allow_rollback_from_published` açıksa yetkili kullanıcıdan **Sudo Şifre Doğrulaması** (`SudoDialogController`) istenerek taslağa çekilebilir.

2. **3 Adımlı Nöbet Hazırlık ve Simülasyon Sihirbazı (`NobetPlanOnizlemeController`):**
   - **1. Adım (Temel Ayarlar & Çalışma Parametreleri):** Ay bazında gün sayısı, resmi tatiller, fiili çalışma gün/saatleri, departman nöbet slotları ve kısıt limitlerinin konsolide dökümü.
   - **2. Adım (Talepler & Mazeretler):** İzinli personeller, onaylı nöbet yazılmasın (mazeret) ve yazılsın (istek) talepleri, fazla mesai kotası talepleri ve kısıt azaltımlarının 12 sütunlu detay tablosunda incelenmesi. Hızlı talep ekleme (`NobetHizliIstekDialog`) ve çapraz geçici personel görevlendirme (`NobetGeciciPersonelDialogController`).
   - **3. Adım (Kapasite Simülasyonu & Taslak Kaydetme):** Birimin slot ihtiyacı ile mevcut personelin çalışma kapasitesinin karşılaştırılması, tahmini nöbet sayısı ve tahmini fazla mesai saatlerinin simüle edilmesi; uygunsa taslak planın oluşturulması.

3. **Otomatik Dağıtım Algoritması ve Solver Motoru (`NobetScheduler` & `NobetSchedulerWorker`):**
   - Asenkron `QThread` üzerinde `ModernProgressDialog` eşliğinde ana UI iş parçacığını kilitlemeden çalışır.
   - **Otomatik Yedekleme Kalkanı:** Solver çalıştırılmadan hemen önce mevcut çizelgenin bir JSON snapshot yedeği (`data/backups/nobet/plan_<id>_<timestamp>.json`) otomatik olarak dosya sistemine kaydedilir. İstenirse "Yedekten Taslak Yükle" (`btnRestoreBackup`) butonuyla geri yüklenebilir.
   - **Sert Kısıtlar (Hard Constraints):**
     * 24 saat kuralı ve ardışık gün sınırı (`art_arda_max_nobet_gunu`, varsayılan 2 gün).
     * Nöbet sonrası asgari dinlenme süresi (`nobet_sonrasi_min_dinlenme_saat`, varsayılan 24 saat) ve gece nöbeti boşluğu (`gece_nobeti_min_bosluk`, varsayılan 48 saat).
     * İzin çakışması engeli (`personel_izinler` ile tam blokaj).
     * Zaman çakışması engeli (diğer planlardaki/birimlerdeki aktif vardiyalarla saat bazlı overlap denetimi).
     * Yasal Sağlık Kalkanı: Gebelik, emzirme, analık izni, engelli ve sağlık raporlu personele gece nöbeti yasağı; radyasyonlu alana gebe/doz aşımı personelin atanmaması.
     * Yaş (50+) ve Kıdem (25+) muafiyeti: Gece ve hafta sonu nöbetlerinden otomatik muafiyet.
     * Fazla mesai yasağı (`fm_off == 1` veya kısıt limiti 0.0 olan personele kesinlikle FM yazılmaması).
   - **Yumuşak Kısıtlar ve Adalet Dengelemesi (Soft Constraints):**
     * Standart hedef çalışma saati (`calculate_target_hours`) sapma cezası.
     * Hafta sonu ve resmi tatil nöbetlerinin geçmiş dönem kümülatif yükü (`past_weekends_map`, `past_holidays_map`) ile dengelenmesi.
     * Gece vardiyalarının eşit dağıtımı (`night_priority`).
     * Personelin onaylı nöbet yazılma isteği (`nobet_yaz`) ve öncelik puanı (1-5).
   - **12 Saatlik Vardiya Birleştirme (24s Bloklama):** Ayarlarda `combine_12h_to_24h` aktifse aynı gün çakışmayan iki 12 saatlik slot tek personele 24 saatlik blok olarak atanır.

4. **Çizelge Matrisi ve Canlı Renk Kodlaması (`NobetCizelgeTableWidget`):**
   - Satırlar: Ayın günleri (1..31).
   - Sütunlar: Tarih, Gün, Birim Vardiya Slotları (örn: `08:00 - 20:00 (GUND #1)`, `20:00 - 08:00 (GECE #1)`).
   - **Fira Code / Consolas Tabular Font:** Tarih ve sayısal sütunlarda hizalama bozulmasını önlemek için sabit aralıklı yazı tipi kullanımı.
   - **Klinik RDS Renk Semantiği:**
     * Resmi Tatil & Bayram: Bordo/Rose (`#4A1525` / `#FDA4AF`).
     * Hafta Sonu: Slate Lacivert (`#1E293B` / `#E2E8F0`).
     * Devir Edilen Nöbet: Koyu Pas/Amber (`#7C2D12` / `#FFEDD5`).
     * İptal Edilen Nöbet: Koyu Kırmızı (`#7F1D1D` / `#FEE2E2`).
     * Oturum Açan Personelin Kendi Nöbeti: Belirgin Mavi (`#1E3A8A` / `#93C5FD` kalın font).
     * İzin Çakışması İhlali: Kırmızı yazı (`#EF4444`, "İzin Çakışması Mevcut!").
   - **Personel Vurgulama:** Sağdaki hakediş özet tablosunda bir personelin üzerine tıklandığında sol matriste o personelin tüm nöbetleri anında parlak mavi (`#3B82F6`) ile aydınlatılır.

5. **Manuel Müdahale ve İkame Motoru (`NobetCizelgeDialogController`):**
   - Hücreye çift tıklama: Doluysa düzenleme formunu, boşsa slot ve tarih önceden doldurulmuş ekleme formunu açar.
   - Devredilmiş nöbet kilitlidir (`block_devir_modification`); silinemez veya düzenlenemez.
   - **Akıllı İkame Öneri Motoru (`btnOneriGoster`):** O gün ve vardiya için nöbet tutmaya en uygun meslektaşları puanlayıp listeler.
   - **Kural İhlali Onay Mekanizması:** Manuel atamada dinlenme, ardışık gün veya kota ihlal edilirse sistem uyarır. Yetkili kullanıcı "Kural ihlallerini onaylıyorum" kutucuğunu işaretlemeden ve gerekçe loglanmadan kayıt yapılamaz. İhlal plan notlarına denetim izi (Audit Log) olarak işlenir.

6. **Ay Ortası Kısmi Plan İptali (`NobetPlanIptalDialogController`):**
   - Onaylanmış veya yayında olan bir plan ayın ortasında beklenmedik durumlar (toplu istifa, afet vb.) nedeniyle revizyona ihtiyaç duyduğunda kullanılır.
   - **Kesim Tarihi Kuralı (`cutoff_date`):** Kesim tarihinden önceki çalışılmış nöbetler korunur (`durum = 'Gerçekleşti'`), kesim tarihinden sonrakiler iptal edilir ve plan `Taslak` durumuna çekilir.
   - **Emniyet Kısıtları:**
     * Geriye dönük en fazla 3 gün seçilebilir (`min_backdate_limit = today - 3 gün`).
     * En az 20 karakterlik iptal gerekçesi zorunludur.
     * Sudo Yönetici Parolası doğrulaması zorunludur.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Kullanım Amacı) | NEREDE? (Ekran & Kod Konumu) | NASIL? (Formül / Mantık) | NE ZAMAN? | KİM? | DURUM |
|---|---|---|---|---|---|---|
| **Yeni Plan Sihirbazı (`newPlanButton`)** | İlgili dönem ve birim için çizelge taslağı açmak. | Plan Listesi / `nobet_plan_list_controller.py:549` | Ay, yıl, birim ve hizmet sınıfı seçilerek otomatik ad türetilir (`Birim_Ay_Yıl_Hizmet_Nöbet Planı`). | Ay başı planlamasında. | Koordinatör, Yönetici | **Aktif** |
| **Önizleme ve Hazırlık Sihirbazı (`detailButton`)** | Veri eksikliklerini ve kapasiteyi baştan denetlemek. | Önizleme Sayfası / `nobet_plan_onizleme_controller.py` | 3 adımlı sihirbaz (Parametreler ➔ Talepler ➔ Simülasyon). Adım geçişlerinde personel ve kural validasyonu yapar. | Solver öncesi hazırlıkta. | Birim Sorumlusu, Yönetici | **Aktif** |
| **Otomatik Solver Motoru (`otomatikOlusturButton`)** | Nöbetleri adil ve kısıtlara uygun otomatik dağıtmak. | Plan Detay / `nobet_plan_detay_controller.py:951`, `nobet_scheduler.py` | `NobetSchedulerWorker` asenkron iş parçacığı. Hard/soft kısıt puanlamasıyla slotları doldurur. | Taslak plan hazırlandığında. | Birim Sorumlusu, Yönetici | **Aktif** |
| **Taslak Snapshot Yedeği (`backup_file`)** | Solver öncesi mevcut taslağı veri kaybına karşı korumak. | Solver Motoru / `nobet_scheduler.py:628` | Otomatik dağıtım başlamadan hemen önce mevcut çizelgeyi JSON formatında `data/backups/nobet/` altına kaydeder. | Solver tetiklendiğinde. | Sistem (Otomatik) | **Aktif** |
| **Yedekten Taslak Yükle (`btnRestoreBackup`)** | İstenmeyen otomatik dağıtımı önceki taslağa döndürmek. | Plan Detay / `nobet_plan_detay_controller.py:1196` | JSON yedek dosyasını okur, mevcut taslağı silip yedekteki kayıtları geri yükler (`restore_cizelge_from_data`). | Dağıtım beğenilmediğinde. | Yönetici | **Aktif** |
| **Hızlı Talep Ekleme (`btnHizliIstek`)** | Sihirbazdan çıkmadan mazeret/istek girmek. | Hazırlık 2. Adım / `nobet_hizli_istek_dialog.py` | Personel seçilir; 'Nöbet Yazılmasın', 'Nöbet Yazılsın' veya 'Fazla Mesai' tipiyle doğrudan 'Onaylandi' kaydedilir. | Önizleme esnasında. | Koordinatör | **Aktif** |
| **Çapraz Geçici Görevlendirme (`btnGeciciPersonel`)** | Farklı birim personelini bu ayın nöbet havuzuna dahil etmek. | Hazırlık 1. Adım / `nobet_gecici_personel_dialog_controller.py` | Hedef birim dışındaki aktif personeller seçilir; `nobet_gecici_personel` tablosuna ay/yıl bazlı kaydedilir. | Personel yetersizliğinde. | Birim Sorumlusu, Yönetici | **Aktif** |
| **Çizelge Matris Tablosu (`cizelgeTable`)** | Aylık nöbetleri gün/vardiya bazında görselleştirmek. | Plan Detay / `nobet_cizelge_table.py` | Gün satırları ve vardiya sütunları kesişiminde personeller gösterilir; tatil, hafta sonu ve devir renklendirilir. | Sürekli çalışma alanında. | Tüm Roller | **Aktif** |
| **Hedef Süre ve Hakediş Tablosu (`tableView`)** | Personel bazında mesai ve FM dengesini izlemek. | Plan Detay / `nobet_plan_detay_controller.py:518` | `Hedef Süre`, `Fiili Çalışma`, `Fazla Mesai` ve `Diğer Birim Nöbetleri` hesaplanıp Fira Code ile listelenir. | Matris değiştikçe canlı. | Sorumlu, Yönetici | **Aktif** |
| **Akıllı İkame Öneri Motoru (`btnOneriGoster`)** | Boş veya mazeretli slota en uygun adayı atamak. | Çizelge Formu / `nobet_cizelge_dialog_controller.py:167` | Tarih ve vardiyaya göre kural ihlali olmayan en uygun meslektaşları puanlayıp tek tıkla slota atar. | Manuel atama anında. | Sorumlu, Yönetici | **Aktif** |
| **Kural İhlali Onay Kutusu (`overrideCheckBox`)** | Zorunlu hallerde soft kısıt ihlaline izin vermek. | Çizelge Formu / `nobet_cizelge_dialog_controller.py:448` | İhlal varsa form kilitlenir; yetkili kullanıcı kutuyu işaretlerse gerekçe plan denetim izine (`notlar`) loglanır. | İhlalli manuel kayıtta. | Yönetici / Süpervizör | **Aktif** |
| **Ay Ortası Plan İptali (`btnCancelPartialPlan`)** | Yayınlanmış planda ay ortasında kısmi revizyon yapmak. | Plan Detay & Liste / `nobet_plan_iptal_dialog_controller.py` | Kesim tarihine kadar olanlar `Gerçekleşti` olarak korunur, sonrakiler silinir ve plan `Taslak` durumuna alınır. | Olağanüstü durumlarda. | Yönetici (Sudo Parolalı) | **Aktif** |
| **Planı Taslağa Geri Çekme (`revertToDraftButton`)** | Yayındaki planı tamamen revizyona açmak. | Plan Detay / `nobet_plan_detay_controller.py:1083` | `allow_rollback_from_published` iznine tabidir; Sudo yönetici şifre doğrulaması ile plan taslağa çekilir. | Revizyon gerektiğinde. | Yönetici (Sudo Parolalı) | **Aktif** |
| **Plan Notları ve Denetim İzi (`btnShowNotes`)** | Planda onaylanan ihlalleri ve revizyon geçmişini görmek. | Plan Listesi / `nobet_plan_list_controller.py:509` | Plana ait sistem loglarını, kural ihlal onaylarını ve kullanıcı açıklamalarını popup diyalogda gösterir. | Denetim anında. | Tüm Roller | **Aktif** |
| **Menü Kapatma Butonu (`btnScreenClose`)** | Sekme veya pencereyi kapatmak. | Tab Başlığı / `nobet_plan_main.ui:50` | Arayüz dosyasında tanımlı ancak controller içinde hiçbir sinyal bağlanmamış. | - | - | **HAYALET BİLEŞEN** |

---

## C. Mantık ve Kısıt Soruları (Kullanıcı Kararına Sunulan Eşikler)

Kılavuz dokümantasyonuna ve operasyonel senaryolara yön vermek üzere teyit edilmesi gereken 5 kritik karar noktası:

1. **Solver Öncesi Otomatik JSON Snapshot Yedeği:**
   - Solver motoru çalıştırılmadan önce `nobet_scheduler.py` mevcut çizelgeyi `data/backups/nobet/plan_<id>_<timestamp>.json` olarak otomatik yedeklemekte ve "Yedekten Taslak Yükle" butonuyla bu yedeğe geri dönülebilmektedir.
   - **Soru:** Kılavuzda bu özellik *"Yapay zeka dağıtımını denemekten korkmayın; sistem önceki taslağınızı otomatik olarak yedekler ve tek tuşla geri yükleyebilirsiniz"* güvencesiyle bir **İpucu / Güvenlik Kartı** olarak öne çıkarılsın mı?

2. **Ay Ortası Kısmi İptal 3 Günlük Geriye Dönüklük Sınırı:**
   - Kodda (`NobetPlanIptalDialogController`) kesim tarihi seçilirken sistem bugünden geriye en fazla 3 güne izin vermektedir (`min_backdate_limit = today - 3 gün`). Daha eski tarihler seçilemez.
   - **Soru:** Kılavuza *"Geçmişe dönük nöbet iptallerinde suiistimali ve geriye dönük bordro karmaşasını önlemek amacıyla kesim tarihi geriye dönük azami 3 gün ile sınırlandırılmıştır"* kuralı eklensin mi?

3. **Manuel Atamalarda Kural İhlali Onay Denetim İzi (Audit Log):**
   - Bir yönetici dinlenme süresini veya ardışık nöbet sınırını ihlal eden bir personeli manuel olarak atadığında sistem "Kural ihlallerini onaylıyorum" onayını zorunlu tutmakta ve bu ihlali `[KURAL İHLALİ ONAYLANDI (Tarih - Kullanıcı): İhlaller...]` formatında planın ve kaydın kalıcı denetim izine eklemektedir.
   - **Soru:** Kılavuzda bu durum *"Zorunlu nöbet açıklarında yöneticinin inisiyatif alma hakkı korunmuş, ancak yasal sorumluluk ve şeffaflık adına işlem denetim izine silinemez şekilde işlenmektedir"* ifadesiyle açıklansın mı?

4. **Kısmi İptalde En Az 20 Karakter Gerekçe ve Sudo Şifresi:**
   - Ay ortası kısmi plan iptalinde sistem en az 20 karakterlik açıklama istemekte ve ardından yönetici şifresi (Sudo Doğrulaması) sormaktadır.
   - **Soru:** Kılavuzun adım adım işlem akışında 20 karakter sınırının ve yönetici şifresi adımının görsel uyarı kutusuyla gösterilmesi uygun mudur?

5. **Diğer Birimlerde Nöbeti Olan Personelin Kehribar (Amber) Vurgusu:**
   - Plan detayındaki sağ özet tablosunda, personelin başka bir birimde veya planda da bu ay içinde nöbeti varsa satırı açık sarı/amber (`#FEF3C7`) renkle vurgulanmakta ve "Bu personelin diğer birimlerde/planlarda da mesaisi bulunmaktadır" ipucu verilmektedir.
   - **Soru:** Kılavuzda bu renklendirme *"Çapraz Görevlendirme ve Çift Nöbet Alarmı"* başlığıyla tanıtılsın mı?

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

| Özellik / Kural | Masaüstü Kokpiti (`RADPYS Desktop Client`) | Web Portalı (`web_portal/src/routes/nobet.routes.ts`) | Mimari Ayrım ve Durum |
| :--- | :--- | :--- | :--- |
| **Nöbet Planı Tanımlama** | `NobetPlanDialogController` (Tam yetki) | **Yok** (Web üzerinden yeni plan oluşturulamaz) | **Masaüstüne Özel** |
| **Önizleme ve Hazırlık Sihirbazı** | `NobetPlanOnizlemeController` (3 adımlı sihirbaz) | **Yok** | **Masaüstüne Özel** |
| **Solver Algoritması (Otomatik Dağıtım)** | `NobetScheduler` (Arka plan QThread motoru) | **Yok** (Sunucu tarafında solver tetiklenemez) | **Masaüstüne Özel** |
| **Çizelge Matrisi ve Hücre Düzenleme** | `NobetCizelgeTableWidget` (Canlı matris, çift tıklama) | **Yok** (Web üzerinden matris düzenlenemez) | **Masaüstüne Özel** |
| **Yedekten Taslak Yükleme** | `btnRestoreBackup` (JSON geri yükleme) | **Yok** | **Masaüstüne Özel** |
| **Ay Ortası Kısmi Plan İptali** | `NobetPlanIptalDialogController` (Sudo parolalı) | **Yok** | **Masaüstüne Özel** |
| **Personel Nöbet İstek/Mazeret Ekleme** | `NobetHizliIstekDialog` (Sihirbaz içi hızlı ekleme) | `POST /api/nobet/havuz/acil-mazeret` (Mazeret bildirimi) | **Hibrit** (Masaüstü planlama öncesi, Web ise operasyonel) |
| **Yayınlanmış Nöbetleri Görüntüleme** | Plan Detay ve İnceleme ekranları | `GET /api/nobet/aylik-mesai-ozet`, `birim-izin-ve-mazeretler` | **Hibrit** (Web personelin kendi ve birim çizelgesini okur) |
| **Nöbet Devir ve Havuz İşlemleri** | `NobetDevirDialogController` | `POST /api/nobet/devir`, `POST /api/nobet/havuz/*` | **Hibrit** (Modül 09 odaklı) |

---

## E. Hedefli Ekran Görüntüsü Talebi (Kılavuz İçin Kritik Pencereler)

Kılavuz dokümantasyonunda yer alması gereken en kritik 2 pencere kütüphanede (`docs/help/assets/img/`) mevcuttur:

1. **Pencere 1 - Çizelge Matrisi ve Personel Hedef Saat Özet Kokpiti:**
   - **Hedef:** Kullanıcının gün gün nöbetleri gördüğü renkli interaktif matris, sağdaki hedef saat/fazla mesai özet paneli ve üst araç çubuğundaki Solver butonları.
   - **Mevcut Görsel:** `docs/help/assets/img/08_nobet_cizelge_dialog.png` veya `08_nobet_plan_listesi.png` (Gerektiğinde matrisin tam ekran yakalanmış hali).

2. **Pencere 2 - 3 Aşamalı Nöbet Hazırlık ve Kapasite Simülasyonu Sihirbazı:**
   - **Hedef:** Solver çalıştırılmadan önce personelin izin, mazeret ve slot kotalarının analiz edildiği adım göstergeli (StepWizard) sihirbaz ekranı.
   - **Mevcut Görsel:** `docs/help/assets/img/08_nobet_plan_onizleme.png` ve `08_nobet_plan_onizleme_02.png` (Mevcut ve hazır).
