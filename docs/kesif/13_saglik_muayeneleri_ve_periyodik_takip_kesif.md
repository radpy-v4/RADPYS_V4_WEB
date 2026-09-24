# Keşif Raporu: Modül 13 — Sağlık Muayeneleri ve Periyodik Takip (13_saglik_muayeneleri_ve_periyodik_takip)

**Keşif Tarihi:** 2026-09-24  
**İlgili Kaynak Dosyalar:**
- `ui/pages/saglik/saglik_muayene_listesi_page.ui`
- `ui/pages/saglik/saglik_muayene_ekle_dialog.ui`
- `ui/pages/saglik/saglik_muayene_detay_page.ui`
- `ui/pages/saglik/muayene_gecmisi_dialog.ui`
- `ui/pages/saglik/saglik_muayene_revizyon_dialog.ui`
- `ui/controllers/saglik/saglik_muayene_list_controller.py`
- `ui/controllers/saglik/saglik_muayene_add_controller.py`
- `ui/controllers/saglik/saglik_muayene_detail_controller.py`
- `ui/controllers/saglik/muayene_gecmisi_controller.py`
- `ui/controllers/saglik/saglik_muayene_revizyon_dialog.py`
- `app/services/personel/saglik_muayene_service.py`
- `app/domain/saglik_muayene/muayene_periyot_checker.py`
- `app/infrastructure/db/repositories/saglik_muayene_repository.py`
- `app/infrastructure/db/repositories/saglik_muayene_revizyon_repository.py`
- `web_portal/src/components/dashboards/SaglikDashboard.tsx`
- `web_portal/src/routes/dashboard/dashboard.klinik.routes.ts`

---

## A. Modülün Özeti ve Temel İş Akışları

RADPYS Sağlık Muayeneleri ve Periyodik Takip Modülü; radyasyonla çalışan personelin işe giriş ve periyodik sağlık gözetim süreçlerini, mevzuat gereğince zorunlu olan üç temel uzmanlık branşının (Göz, Dahiliye, Dermatoloji) klinik değerlendirmelerini, periyot hesaplamalarını ve sağlık kaynaklı çalışma kısıtlamalarını yönetir.

1. **Periyodik Kontrol ve Yasal Muayene Türleri:**
   - `İşe Giriş Muayenesi`: Göreve başlamadan önce yapılan kapsamlı tekil muayene.
   - `Radyasyon Çalışanı Muayenesi`: 12 aylık periyotlarla tekrarlanan yasal sağlık taraması.
   - `Periyodik Muayene`: Genel iş sağlığı ve güvenliği kapsamında 12 aylık periyodik muayene.
   - `Şua Muayenesi`: Yoğun radyasyon alanında çalışanlara yönelik 6 aylık periyodik kontrol.
2. **Üç Uzmanlık Branşı Protokolü ve Hekim İmza Teyidi:**
   - **Göz (Oftalmoloji):** Radyasyona bağlı katarakt oluşumu ve arka subkapsüler lens opasitesinin tespiti için biyomikroskopi muayenesi; hekim imza teyidi (`goz_imzalandi`) ve branş kararı (`goz_sonuc`).
   - **Dahiliye (İç Hastalıkları):** Tam kan sayımı (hemogram), periferik yayma formülü, tiroid fonksiyonları ve biyokimyasal değerlendirme; hekim imza teyidi (`dahiliye_imzalandi`) ve branş kararı (`dahiliye_sonuc`).
   - **Dermatoloji (Cildiye):** Radyodermatit, el/parmak lezyonları, cilt atrofisi ve prekanseröz bulguların tespiti; hekim imza teyidi (`dermatoloji_imzalandi`) ve branş kararı (`dermatoloji_sonuc`).
3. **Otomatik Sonraki Muayene Tarihi Hesaplama Motoru (`calculate_next_exam_date`):**
   - Seçilen muayene türünün tanımlı periyot ayına (6 veya 12 ay) göre artık yıl ve ay sonu sınırlarını dikkate alarak bir sonraki muayene tarihini otomatik hesaplar.
4. **Erken Uyarı ve Gecikme Takibi:**
   - Sonraki muayene tarihine göre personel kayıtları renklendirilir:
     - **SÜRESİ DOLDU (Kırmızı):** Sonraki muayene tarihi geçmiş kayıtlar.
     - **YAKLAŞIYOR (Sarı):** Muayene gününe 30 gün ve daha az süre kalmış kayıtlar.
     - **Normal (Yeşil):** Periyodik kontrolü geçerli olan çalışanlar.
5. **"Uygun Değil" Kararında Otomatik Nöbet & Çalışma Kısıtı Entegrasyonu (`_handle_uygun_degil_kisit`):**
   - Herhangi bir branş veya genel kurul kararı "Uygun Değil" çıktığında sistem `personel_calisma_kisitlari` tablosuna otomatik olarak aktif bir kısıt (`kisit_tipi = 'diger'`, gerekçe: `Sağlık Muayenesi Kararı: Uygun Değil`) ekler. Bu kısıt, Solver Nöbet Motoru tarafından algılanarak personelin radyasyonlu alan nöbetlerine yazılmasını emniyet altına alır.
6. **KVKK Uyumlu Şifreli Belge Arşivi:**
   - Taranmış heyet raporları veya laboratuvar tetkik PDF'leri `DocumentService` üzerinden şifreli depolanır ve `SAGLIK-{personel_id}-{belge_id}` benzersiz barkodu ile ilişkilendirilir.
7. **Tam Denetim İzi ve Revizyon Günlüğü:**
   - Muayene kaydında yapılan tüm güncellemeler ve silmeler, önceki veri durumuyla (`eski_veri_json`) birlikte `saglik_muayene_revizyon_log` tablosuna işlenir; sağ tık menüsünden revizyon geçmişi incelenebilir.
8. **Evrensel Onay Sistemi Entegrasyonu:**
   - Onay gerektiren kullanıcı rollerinin muayene ekleme/güncelleme/silme işlemleri doğrudan veritabanına yansımaz; onay kuyruğuna (`degisiklik_talepleri`) iletilir.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| Arayüz Bileşeni (UI Label) | Türü | Ne İşe Yarar? (Ne?) | Kim Kullanır? (Kim?) | Ne Zaman Kullanılır? (Ne Zaman?) | Nerede Yer Alır? (Nerede?) | Nasıl Çalışır? (Nasıl?) | Durum / Emniyet Kilidi |
|---|---|---|---|---|---|---|---|
| **[Ekle]** | Buton | Yeni sağlık muayene kaydı açar | Hekim / RKS / İSG Sorumlusu | Yeni işe giriş veya periyodik kontrolde | Liste Araç Çubuğu | `SaglikMuayeneAddController` modalını açar. | Yazma yetkisi denetlenir; yetki yoksa engellenir. |
| **[Detay]** | Buton | Seçili muayenenin klinik detaylarını açar | Tüm Yetkililer | Muayene bulguları ve belgeler incelenirken | Liste Araç Çubuğu | `SaglikMuayeneDetailController` modalını açar; çift tıklamayla da çalışır. | Kayıt seçili değilse uyarı verir. |
| **[Geçmiş]** | Buton | Personelin geçmiş tüm muayenelerini listeler | Hekim / Denetçi | Personelin klinik geçmişi karşılaştırılırken | Liste Araç Çubuğu | `MuayeneGecmisiController` tablosunu açar. | Seçili personelin tüm geçmişini listeler. |
| **[Sil]** | Buton | Hatalı girilmiş muayene kaydını siler | Süpervizör / Admin | Mükerrer veya yanlış kayıt iptalinde | Liste Araç Çubuğu | Onay alarak servise silme çağrısı yapar; revizyon günlüğüne işler. | Silme yetkisi ve onay gereksinimi denetlenir. |
| **[Yenile]** | Buton | Tablo verilerini veritabanından tazeler | Tüm Kullanıcılar | Yeni kayıt girildiğinde veya filtre sıfırlamada | Filtre Paneli | Servisten güncel verileri çeker ve tabloyu baştan çizer. | Her an kullanılabilir. |
| **[Filtreleri Göster/Gizle]** | ToolButton | Filtre bandını açar veya kapatır | Tüm Kullanıcılar | Tablo alanını genişletmek istendiğinde | Başlık Satırı Sağ | Filtre frame'ini gizler/gösterir; durumu QSettings'e kaydeder. | Aktif filtre sayısına göre rozet gösterir. |
| **[Arama Kutusu]** | QLineEdit | Personel, muayene türü veya not arar | Tüm Kullanıcılar | Belirli bir personel veya vaka aranırken | Filtre Paneli | Ad, soyad, TC kimlik, muayene adı ve notlar üzerinde anlık filtre uygular. | Modern search stili ve gecikmeli tetikleme. |
| **[Muayene Türü Filtresi]**| QComboBox | Muayene türüne göre süzer | Tüm Kullanıcılar | Şua veya periyodik kayıtlar ayrıştırılırken | Filtre Paneli | Tanımlı türleri dinamik listeler; seçime göre süzer. | Tümü seçeneği mevcuttur. |
| **[Sonuç Filtresi]** | QComboBox | Genel sonuca göre süzer | Hekim / RKS | Koşullu veya Uygun Değil kararları incelenirken | Filtre Paneli | Uygun, Koşullu Uygun, Uygun Değil, Belirsiz seçeneklerini sunar. | Tümü seçeneği mevcuttur. |
| **[Muayene Durumu]** | QComboBox | Zaman aşımı ve yaklaşanları süzer | RKS / İSG Uzmanı | Süresi dolan personeller raporlanırken | Filtre Paneli | Süresi Geçmiş, Yaklaşıyor (30 gün), Normal durumlarını süzer. | Renkli durum etiketleriyle eşleşir. |
| **[Hizmet Sınıfı Girişi]** | QLineEdit / Combo | Personelin hizmet sınıfını belirtir | Kullanıcı | Muayene kartı açılırken | Ekleme Modalı | Personel seçildiğinde otomatik gelir veya manuel yazılır. | Muayene kartına mühürlenir. |
| **[TC / Ad ile Ara]** | QLineEdit Completer | Personeli arayarak seçer | Kullanıcı | Form doldurulurken | Ekleme Modalı | Yazılan harflere göre personel listesinden otomatik tamamlar; unvan/dep doldurur. | Geçerli personel seçimi zorunludur. |
| **[Muayene Türü Girişi]** | QComboBox | Uygulanan muayene türünü seçer | Kullanıcı | Form doldurulurken | Ekleme Modalı | İşe Giriş, Radyasyon Çalışanı, Periyodik veya Şua seçtirir. | Seçime göre sonraki muayene tarihini otomatik tetikler. |
| **[Muayene Tarihi]** | QDateEdit | Muayenenin yapıldığı tarihi belirler | Kullanıcı | Form doldurulurken | Ekleme Modalı | Takvim açılır kutusuyla tarih seçtirir. | Boş bırakılamaz. |
| **[Sonraki Muayene Tarihi]**| QLineEdit / Date | Bir sonraki kontrol tarihini tutar | Sistem / Hekim | Periyot hesaplandığında | Ekleme Modalı | Muayene türü periyoduna göre otomatik hesaplanır; manuel revize edilebilir. | Muayene tarihinden önce olamaz. |
| **[Dahiliye İmza & Sonuç]** | CheckBox + Combo | Dahiliye branş onayını kaydeder | Hekim | Dahiliye tetkiki tamamlandığında | Bulgular Grubu | İmzalandı kutusu, branş sonucu ve branş muayene tarihini alır. | Bağımsız branş sonucu üretir. |
| **[Dermatoloji İmza & Sonuç]**| CheckBox + Combo | Cildiye branş onayını kaydeder | Hekim | Cilt muayenesi tamamlandığında | Bulgular Grubu | İmzalandı kutusu, branş sonucu ve branş muayene tarihini alır. | Bağımsız branş sonucu üretir. |
| **[Göz İmza & Sonuç]** | CheckBox + Combo | Göz branş onayını kaydeder | Hekim | Lens muayenesi tamamlandığında | Bulgular Grubu | İmzalandı kutusu, branş sonucu ve branş muayene tarihini alır. | Bağımsız branş sonucu üretir. |
| **[Tavsiyeler]** | QPlainTextEdit | Hekim klinik tavsiye ve şerhlerini tutar | Hekim | Tıbbi kanaat belirtilirken | Bulgular Grubu | Serbest metin alanı; kısıtlamalar veya ara kontrol önerileri girilir. | Rapor ve detayda görüntülenir. |
| **[Muayene Formu Seç/Aç/Sil]**| Dosya Butonları | Sağlık raporu/evrak dosyasını bağlar | Kullanıcı | Rapor taranıp sisteme yükleneceğinde | Belge Satırı | Dosya seçtirir, açar veya temizler; şifreli kasaya aktarır. | Belge adı ve yolu güvenli saklanır. |
| **[Kaydet]** | Buton | Formu doğrular ve veritabanına kaydeder | Kullanıcı | Veri girişi bittiğinde | Form Altı | Zorunlu alan kontrolü yapar, kısıt ekler ve servise iletir. | En az bir geçerli muayene sonucu zorunludur. |
| **[Talebi Reddet]** | Buton | Onay modundaki talebi gerekçeyle reddeder | Süpervizör / Amir | Onay kuyruğundaki muayene incelenirken | Form Altı | Kullanıcıdan red gerekçesi alarak talebi reddeder. | Yalnızca onay modunda görünür. |
| **Sağ Tık Menüsü** | QMenu | Personel geçmişi veya revizyonu açar | Yetkili Kullanıcı | Tablo satırına sağ tıklandığında | Tablo Alanı | `Personel Muayene Geçmişi` veya `Değişiklik Geçmişi` diyaloglarını açar. | Seçili satıra bağlı çalışır. |

---

## C. Mantık ve Kısıt Soruları (Saha ve Mevzuat Teyitleri)

1. **Muayene Türleri ve Periyot Aralıkları Standartı:**
   - Sistem tohum verilerinde; `İşe Giriş Muayenesi` (tek seferlik / periyotsuz), `Radyasyon Çalışanı Muayenesi` (12 ay), `Periyodik Muayene` (12 ay) ve `Şua Muayenesi` (6 ay) tanımlıdır. Sistem bu periyotlara göre `Sonraki Muayene Tarihi`ni otomatik hesaplamaktadır. *Bu muayene türleri ve periyot süreleri kurumunuz uygulamasıyla tam örtüşüyor mu?*
2. **"Uygun Değil" Kararında Otomatik Nöbet & Çalışma Kısıtı Emniyet Kilidi:**
   - Muayenede branşlardan biri veya genel kurul kararı "Uygun Değil" olarak kesinleştiğinde, sistem `personel_calisma_kisitlari` tablosuna derhal aktif bir kısıt kaydı açmakta ve personeli nöbet planlama motorunda radyasyonlu alanlardan korumaktadır. *Bu otomatik koruma kuralı kurumunuzda aynen geçerli midir?*
3. **Üç Uzmanlık Branşı (Göz, Dahiliye, Dermatoloji) İmza Protokolü:**
   - Muayene formunda Dahiliye (periferik yayma/tiroid), Dermatoloji (radyodermatit) ve Göz (lens opasitesi/katarakt) branşları için ayrı "İmzalandı" onay kutuları ve sonuç açılır kutuları yer almaktadır. Formun kaydedilebilmesi için en az bir branş sonucu seçilmiş olmalıdır. *Kurumunuzda sağlık kurulu muayeneleri bu üç branş üzerinden mi yürütülmektedir?*
4. **30 Gün Yaklaşma Uyarısı ve Gecikme Rozetleri:**
   - Sonraki muayene tarihine 30 gün ve daha az süre kalan çalışanlar sistemde "YAKLAŞIYOR" (sarı), muayene günü geçmiş olanlar ise "SÜRESİ DOLDU" (kırmızı) olarak etiketlenmekte ve ana filtrede bu kritere göre listelenebilmektedir. *Kurumunuzda erken uyarı eşiği olarak 30 günlük süre yeterli midir?*
5. **Şifreli Evrak Yükleme ve Değişiklik/Revizyon Denetim İzi:**
   - Yüklenen heyet raporu veya taranmış evraklar AES-256 şifreli kasada saklanmakta; muayene kaydında sonradan yapılan her değişiklik veya silme işlemi `saglik_muayene_revizyon_log` tablosuna önceki haliyle birlikte kaydedilmektedir. *Bu denetim izi ve arşiv disiplini kurum kalite gereksinimlerinizi karşılıyor mu?*

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Portalı Karşılıkları)

- **Masaüstü Uygulaması (PySide6):**
  - Muayene girişlerinin yapıldığı, uzmanlık imzalarının atıldığı, taranmış resmi raporların yüklendiği ve silme/güncelleme revizyon geçmişinin izlendiği tam yetkili yönetim merkezidir.
  - Çalışma kısıtı üretimi ve onay kuyruğu incelemeleri masaüstünden yürütülür.
- **Web Portalı (`SaglikDashboard.tsx`):**
  - **KPI Özet Kartları:** Toplam Muayene, Süresi Geçmiş Sayısı, Yaklaşan (30 gün), Geçerli Muayene Sayısı, Koşullu Uygun Sayısı ve Genel Sağlık Uyum Oranı (%) anlık gösterilir.
  - **Branş Sonuç Dağılım Grafiği (BarChart):** Göz, Dahiliye ve Dermatoloji branşlarının uygunluk ve koşullu dağılımları çubuk grafikte görselleştirilir.
  - **Muayene Yığılma Tahmini (BarChart):** Gelecek 12 ayın kontrol yoğunluğu takvim grafiğinde gösterilerek hekim iş yükü planlanır.
  - **Kişisel Sağlık Karnesi:** Personel kendi profil ekranından geçmiş muayene tarihlerini, hekim tavsiyelerini ve bir sonraki kontrolüne kalan gün sayısını mobil/web üzerinden izleyebilir.

---

## E. Hedefli Ekran Görüntüsü Talebi & Mevcut Görseller

`docs/help/assets/img/` klasöründe yer alan mevcut ekran görüntüleri incelenmiştir:
1. `assets/img/muayene_list.png`: Ana takip listesi, arama filtresi, branş ikonları (Göz, Dahiliye, Dermatoloji), sonraki muayene tarihi ve genel sonuç rozetleri (`UYGUN`, `KOŞULLU UYGUN`) ile üst araç butonlarını (`+ Ekle`, `Detay`, `Geçmiş`, `Sil`) eksiksiz yansıtmaktadır.
2. `assets/img/muayene ekle.png`: Yeni muayene ekleme modalı, personel tamamlama alanı, muayene türü, tarih seçiciler, Dahiliye/Dermatoloji/Göz imza ve sonuç kontrolleri, tavsiyeler alanı ve şifreli belge yükleme butonlarını (`Seç`, `Aç`, `Temizle`) eksiksiz yansıtmaktadır.

Bu iki görsel kılavuz sayfası için fazlasıyla yeterli ve yüksek çözünürlüklüdür. İlave yeni bir ekran görüntüsü alınmasına gerek yoktur.

---

## F. Kullanıcı Kararları ve Saha Teyitleri (2026-09-24)

1. **Muayene Türleri ve Periyot Aralıkları Standartı:** Teyit edildi. Sistemde tanımlı olan İşe Giriş Muayenesi (tek seferlik), Radyasyon Çalışanı Muayenesi (12 ay), Periyodik Muayene (12 ay) ve Şua Muayenesi (6 ay) standartları ve bu periyotlara göre bir sonraki muayene tarihinin hesaplanması onaylanmıştır.
2. **Klinik Takip vs Heyet Raporu Ayrımı (Önemli Saha Kuralı):** Teyit edildi. Bu modül doğrudan bir resmi heyet raporu işletme alanı değildir; personelin rutin periyodik klinik muayene takibini yapar. Muayene sonucunda hekim tarafından "Uygun Değil" kanaati verilirse, personel derhal ilgili branş kliniğine ileri tetkik ve değerlendirme için sevk edilir. Yapılan ileri tetkikler sonucunda personelin radyasyonlu alanda çalışamayacağı resmi Sağlık Kurulu (Heyet) Raporu ile kesinleşirse, bu durum Çalışma Kısıtları (Modül 07) üzerinden heyet raporu şerhiyle resmi kısıt olarak işlenir.
3. **Üç Uzmanlık Branşı (Göz, Dahiliye, Dermatoloji) Protokolü:** Teyit edildi. Sağlık kurulu ve periyodik kontrollerde Göz (lens opasitesi/biyomikroskopi), Dahiliye (hemogram/tiroid/periferik yayma) ve Dermatoloji (radyodermatit/cilt bulguları) branşlarının bağımsız imza ve sonuç kontrolleri ile yürütüldüğü onaylanmıştır.
4. **30 Gün Yaklaşma Uyarısı ve Gecikme Rozetleri:** Teyit edildi. Sonraki muayene gününe 30 gün kala "YAKLAŞIYOR" (sarı) uyarısı verilmesi ve günü geçenlerin "SÜRESİ DOLDU" (kırmızı) olarak etiketlenip öncelikli filtrelenmesi kabul edilmiştir.
5. **Şifreli Evrak Yükleme ve Revizyon Denetim İzi:** Teyit edildi. Muayene heyet evraklarının şifreli kasada saklanması ve kayıtlarda yapılan tüm değişikliklerin `saglik_muayene_revizyon_log` tablosunda denetim izine mühürlenmesi onaylanmıştır.
6. **Ekran Görüntüleri Arşivi:** `assets/img/` klasöründeki mevcut `muayene_list.png` ve `muayene ekle.png` görsellerinin kılavuz sayfasına entegre edilmesi kararlaştırılmıştır.
