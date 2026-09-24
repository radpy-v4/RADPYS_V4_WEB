# Keşif Raporu: Modül 14 — Dönem Yönetimi ve Veri Kilitleri (14_donem_yonetimi_ve_veri_kilitleri)

**Keşif Tarihi:** 2026-09-24  
**İlgili Kaynak Dosyalar:**
- `ui/pages/fiili/fiili_hizmet_hesaplama_tab.ui`
- `ui/pages/fiili/fiili_hizmet_dagilim_tab.ui`
- `ui/pages/nobet/nobet_borc_alacak_page.ui`
- `ui/pages/nobet/nobet_plan_detay_page.ui`
- `ui/controllers/fiili/fiili_hizmet_hesaplama_tab_controller.py`
- `ui/controllers/fiili/fiili_hizmet_dagilim_tab_controller.py`
- `ui/controllers/fiili/fiili_hizmet_list_controller.py`
- `ui/controllers/nobet/nobet_borc_alacak_controller.py`
- `ui/controllers/nobet/nobet_plan_detay_controller.py`
- `app/services/personel/fiili_hizmet_service.py`
- `app/services/personel/izin_service.py`
- `app/services/nobet/nobet_service.py`
- `app/db/schema.sql` (`fiili_hizmet_donem_kilitleri`, `fiili_hizmet_yillik_kilitler`, `nobet_planlari`)
- `web_portal/src/components/BirimNobetCizelgesiView.tsx`
- `web_portal/src/components/PersonnelRequestForm.tsx`

---

## A. Modülün Özeti ve Temel İş Akışları

RADPYS Dönem Yönetimi ve Veri Kilitleri altyapısı; Sağlık Bakanlığı SKS 6.1 standartları, SGK fiili hizmet (yıpranma payı) bildirimleri ve NDK yasal denetim gereksinimleri uyarınca sistemde kesinleşen operasyonel verilerin (nöbet çizelgeleri, fazla mesai borç/alacak bakiyeleri, radyasyon dağılımları, fiili hizmet puantajları ve Şua izni hakedişleri) geriye dönük olarak tahrif edilmesini önleyen çok katmanlı bir veri bütünlüğü ve mühürleme mimarisidir.

1. **Aylık Fiili Hizmet ve Puantaj Dönem Kilidi (`fiili_hizmet_donem_kilitleri`):**
   - **Otomatik Kayıt Güvencesi:** Kullanıcı `[Dönemi Kilitle]` butonuna bastığında sistem, ekrandaki hesaplanmış satırları (`_hesap_rows`) önce veritabanına otomatik olarak kaydeder (`kaydet_donem_hesaplama`), ardından dönemi kilitler.
   - **RED-15 Boş Tablo Kilitleme Engeli:** Hesaplanmış veya kaydedilmiş veri bulunmayan boş bir dönemin kilitlenmesi mutlak olarak engellenir (`"Hesaplanmış veya kaydedilmiş veri bulunmayan boş bir dönem kilitlenemez. Lütfen önce hesaplama yapınız."`).
   - **Ardışık Dönem Kilitleme Kuralı:** SGK mevzuatı gereği periyot $N$ kilitlenmeden önce periyot $N-1$ kilitli olmalıdır (`"Bir önceki dönem ({prev_ay:02d}/{prev_yil}) kilitlenmeden bu dönem kilitlenemez."`). Ocak (1. ay) kilitlenirken önceki yılın Aralık (12. ay) kilit durumu doğrulanır.
   - **Dönem Kilidini Açma Prosedürü:** Kilitli bir dönem açılmak istendiğinde kullanıcıdan teyit alınır (`ask_confirm`), kilit açma yetkisi denetlenir ve işlem `audit_logs` tablosuna gerekçeli olarak mühürlenir.
   - **Dönem Kilitliyken Devre Dışı Kalan Eylemler:** Fiili hizmet dağılımı yapılamaz, saatler değiştirilemez, aylık puantaj verileri silinemez veya üzerine yazılamaz.

2. **Yıllık Kilit ve Şua İzni Hakediş Dondurma (`fiili_hizmet_yillik_kilitler`):**
   - **RED-09 Yetki Kısıtı:** Yıllık kilit açma ve kapatma yetkisi yalnızca Sistem Yöneticisi (Admin) veya Süpervizör rolüne aittir (`"Yıllık kilit açma ve kilitleme işlemleri yalnızca Yönetici (Admin) veya Süpervizör yetkisine sahip kullanıcılar tarafından yapılabilir."`).
   - **Yıllık Ardışıklık Kuralı:** Bir önceki takvim yılı kilitlenmeden mevcut yıl kilitlenemez (`"Bir önceki yıl ({prev_yil}) kilitlenmeden bu yıl kilitlenemez."`).
   - **Çapraz Modül Etkisi (İzin Hakedişleri):** Yıl kilitlendiğinde o yılın 12 ayının tamamı dondurulur; ayrıca İzin Modülünde (`izin_service.py:1616`) ilgili yıla ait Şua İzni hakediş günleri (`hakkedilen_gun`) el ile değiştirilemez hale getirilir (`"{hesap_yili} yili kilitli oldugu icin {yil} yili Sua izni hakedis gunu degistirilemez."`).

3. **Nöbet Çizelgesi ve Nöbet Plan Kilitleri (`nobet_planlari`):**
   - Nöbet çizelgesi amir tarafından onaylandığında (`onaylandi`) veya arşive kaldırıldığında (`arsiv`) kilit moduna geçer.
   - Kilitli planda: Nöbet satırları silinemez, doğrudan değiştirilemez, personele ikame atanamaz (`"Plan onaylanmış veya kilitli olduğundan ikame atanamaz."`) ve eski yedekler geri yüklenemez (`"Bu plan kilitli (Onaylı veya Arşiv durumunda) olduğu için yedek yüklenemez."`).
   - Kilitli plandaki tüm değişiklikler ancak resmi Nöbet Devir (Becayiş) veya acil mazeret akışıyla yapılabilir.

4. **Nöbet Fazla Mesai & Borç/Alacak Kesinleşmiş Dönem Durumu:**
   - Ay sonu nöbet gerçekleşmeleri kesinleştiğinde veya kaydedildiğinde `[Kaydet]`, `[Toplu Uygula]` ve radyo butonları kilitlenir; arayüzde `lblLockStatus` rozeti durum bilgisi verir.
   - Arayüz kodunda `btnUnlock` ("Kilidi Aç") butonu bulunmasına rağmen arayüzde gizlenmiş (`visible: false`) ve arkasında bir tetikleyici bulunmayan **HAYALET BİLEŞEN** durumundadır.

5. **Tarih Aralığı Kilit Kontrolü (`check_date_range_lock`):**
   - İzin talepleri veya nöbet planları oluşturulurken seçilen başlangıç ve bitiş tarihleri kontrol edilir. Eğer tarih aralığı kilitli bir döneme denk geliyorsa işlem engellenir (`"Seçili tarih aralığı kilitli bir dönemi ({month:02d}/{year}) kapsamaktadır. İşlem engellendi."`).

6. **Denetim İzi & Mühürleme (Audit Trail):**
   - Yapılan her kilit ve kilit açma hareketi (`lock_period`, `unlock_period`, `lock_year`, `unlock_year`) kullanıcı adı, personel ID, dönem ve zaman damgasıyla `audit_logs` tablosuna işlenir.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| Arayüz Bileşeni (UI Label) | Türü | Ne İşe Yarar? (Ne?) | Kim Kullanır? (Kim?) | Ne Zaman Kullanılır? (Ne Zaman?) | Nerede Yer Alır? (Nerede?) | Nasıl Çalışır? (Nasıl?) | Durum / Emniyet Kilidi |
|---|---|---|---|---|---|---|---|
| **[Dönemi Kilitle] / [Dönem Kilidini Aç]** | QPushButton (`kilitButton`) | Aylık fiili hizmet dönemini kilitler veya kilidini açar | Yetkili Kullanıcı / RKS / İdare | Ay sonu puantaj tamamlandığında veya revizyon gerektiğinde | Fiili Hizmet Hesaplama Sekmesi Sol Üst | Kilit açıksa otomatik kayıt yapıp dönemi kilitler; kilitliyse teyit alıp kilidi kaldırır (`set_donem_kilit`). | Boş dönem kilitlenemez (RED-15); önceki ay kilitli değilse kilitlenemez. |
| **[Kilit Durum Rozeti]** | QLabel (`hesaplamaKilitBadge`) | Dönemin güncel kilit durumunu görselleştirir | Tüm Kullanıcılar | Sayfa açıldığında veya periyot değiştiğinde | Hesaplama Tablo Üstü Bilgi Bandı | Kilitli ise kırmızı "Dönem Kilitli" / "Yıllık Kilitli", açık ise yeşil "Düzenlenebilir" rozeti gösterir. | Salt okunur görsel belirteç. |
| **[Dağılım Kilit Rozeti]** | QLabel (`dagilimKilitBadge`) | Dağılım sekmesinde kilit durumunu bildirir | Tüm Kullanıcılar | Radyasyon süre dağılımı yapılırken | Dağılım Sekmesi Başlık Alanı | Dönem kilitliyse dağıtım ve kaydetme butonlarını pasife alır. | Dağıtım üzerinde tahrifatı önler. |
| **[Dönem Yıl Seçici]** | QSpinBox (`hesaplamaYilInput`) | İncelenen ve kilitlenen yılı belirler | Tüm Kullanıcılar | Dönem değiştirilirken | Filtre Çubuğu | Yıl değiştiğinde ilgili dönemin kilit durumunu ve hesaplamalarını servisten çeker. | 2000-2100 aralığıyla sınırlıdır. |
| **[Dönem Ayı Filtresi]** | QComboBox (`hesaplamaAyFilter`) | İncelenen ve kilitlenen ayı seçtirir | Tüm Kullanıcılar | Ay değiştirilirken | Filtre Çubuğu | 1-12 ay seçiminde ilgili ayın kilit kaydını doğrular. | Boş bırakılamaz. |
| **[Önceki / Sonraki Dönem Butonları]** | QToolButton (`hesaplamaPrevPeriodButton`, `hesaplamaNextPeriodButton`) | Aylar arasında ardışık geçiş sağlar | Tüm Kullanıcılar | Hızlı periyot gezintisinde | Filtre Çubuğu | Ay ve yılı birer adım ileri/geri alır; kilit durumunu anlık günceller. | Takvim sınırlarını korur. |
| **[Puantaj Raporuna Geç]** | QPushButton (`btnNextToRapor`) | Dönem kilitlendikten sonra resmi rapora aktarır | Kullanıcı | Dönem başarıyla kilitlendiğinde | İşlem Araç Çubuğu Sağ | Doğrudan 3. adım olan Puantaj Rapor sekmesine yönlendirir. | Dönem kilitlendiğinde otomatik tetiklenir. |
| **[Yılı Kilitle / Aç Butonu]** | Kod Fonksiyonu (`_on_yillik_kilit_clicked` / `yillikKilitButton`) | Tüm takvim yılını ve Şua hakedişlerini kalıcı dondurur | Sistem Yöneticisi (Admin) / Süpervizör | Yıl sonu kapanışlarında | Controller seviyesinde hazır (`fiili_hizmet_hesaplama_tab_controller.py:620`) | Yıl kilidini `fiili_hizmet_yillik_kilitler` tablosuna işler veya siler. | **KAPSAM DIŞI (Arayüzde butonu yok; controller'da kod hazır)**. Yalnızca Admin çalıştırabilir (RED-09). |
| **[Nöbet Borç/Alacak Kilit Rozeti]** | QLabel (`lblLockStatus`) | Fazla mesai ve borç/alacak kesinleşme durumunu bildirir | Nöbet Sorumlusu / İdare | Borç/alacak tablosu açıldığında | Nöbet Borç/Alacak Başlık Alanı Sağ | Kilitli/kaydedilmiş durumda mavi/yeşil durum rozeti ve kilit ikonları sunar. | Yetkisiz değişiklikleri engeller. |
| **[Nöbet Borç/Alacak Kilidi Aç]** | QPushButton (`btnUnlock`) | Fazla mesai devir kilidini açma adayı | - | - | `nobet_borc_alacak_page.ui:50` | Kodda `visible: false` yapılmış, controller'da sinyal bağlantısı bulunmamaktadır. | **HAYALET BİLEŞEN** (UI XML'de tanımlı fakat kodda gizli ve işlevsiz). |
| **[Nöbet Çizelgesi Onay Kilidi]** | Çizelge Durumu (`nobet_planlari.durum`) | Onaylanan nöbet çizelgesini dondurur | Birim Sorumlusu / Amir | Nöbet planı onaylandığında | Nöbet Plan Detay Ekranı | Durumu `onaylandi` yapar; hücre silme, ikame atama ve yedek yüklemeyi kilitler. | Sadece becayiş veya amir revizyonu ile delinebilir. |
| **[Tarih Aralığı Kilit Denetleyici]** | Servis Metodu (`check_date_range_lock`) | İzin veya nöbetin kilitli aya sarkmasını engeller | Sistem Motoru | İzin veya nöbet girilirken | Backend Servis Katmanı | Başlangıç ve bitiş tarihlerini tarayarak kilitli ay tespiti halinde işlemi reddeder. | Geriye dönük izin girişini önler. |

---

## C. Mantık ve Kısıt Soruları (Saha ve Mevzuat Teyitleri)

1. **Ardışık Dönem Kilitleme Kuralı (SKS & SGK Bütünlüğü):**
   - Sistemde bir dönemin (örn: Mart 2026) kilitlenebilmesi için bir önceki dönemin (Şubat 2026) kilitlenmiş olması zorunludur. Ocak ayı için bir önceki yılın Aralık ayı kilit durumu kontrol edilir. *Bu ardışık kilitleme disiplini kurumunuzun puantaj ve denetim süreçleriyle tam örtüşmekte midir?*
2. **Boş Dönem Kilitleme Emniyet Kilidi (RED-15):**
   - Ekranda hesaplanmış veya kaydedilmiş personel verisi bulunmayan boş bir dönemin kilitlenmesi sistem tarafından engellenmektedir (`"Hesaplanmış veya kaydedilmiş veri bulunmayan boş bir dönem kilitlenemez"`). *Boş dönemlerin kilitlenememesi kuralı kurumunuzda aynen geçerli midir?*
3. **Kilitli Dönemin Geriye Dönük Açılması Prosedürü:**
   - Kilitli bir dönemin kilidi açıldığında sistem kullanıcıdan onay almakta ve işlemi denetim günlüğüne (`audit_logs`) kaydetmektedir. Ancak zincirleme kilitlerde (örn: Şubat kilitliyken Ocak açılırsa) veriler revize edilebilir hale gelmektedir. *Kurumunuzda kilit açma yetkisi yalnızca Sistem Yöneticisi ile mi sınırlandırılmalıdır, yoksa birim sorumlusu da teyitle açabilmeli midir?*
4. **Yıllık Kilit ve Şua İzni Hakedişlerinin Dondurulması (RED-09):**
   - Yıl kilitlendiğinde ilgili takvim yılının 12 ayı kilitlenmekte ve personelin o yıla ait hak ettiği Şua izni gün sayısı İzin Modülünde el ile değiştirilemez hale getirilmektedir. Bu işlem yalnızca Admin/Süpervizör yetkisiyle yürütülür. *Bu yıllık dondurma kuralı kurumunuz izin hakediş yönetmeliğiyle uyumlu mudur?*
5. **Nöbet Çizelgesi Onay Kilidi ve Fazla Mesai Devirleri:**
   - Onaylanan nöbet çizelgeleri doğrudan kilitlenmekte, ikame atanamamakta ve fazla mesai borç/alacak ekranında kaydedilen kararlar kilitli döneme mühürlenmektedir. *Onaylanmış bir nöbet planında acil bir değişiklik gerektiğinde resmi revizyon/becayiş prosedürü kurumunuz için yeterli midir?*

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Portalı Karşılıkları)

| Modül / İşlem | Masaüstü Uygulaması (PySide6) | Mobil / Web Portalı (React + Node.js) | Hibrit Davranış / Senkronizasyon |
|---|---|---|---|
| **Aylık Dönem Kilitleme / Açma** | `[Dönemi Kilitle]` butonu ile tam yetkili kontrol; otomatik kayıt ve ardışıklık doğrulaması. | Web portalında dönem kilitleme veya kilit açma yetkisi **YOKTUR**. | Masaüstünden kilitlenen dönem web tarafına anında yansır; web kullanıcıları kilitli aya ait talep açamaz. |
| **Yıllık Kilit Yönetimi** | Admin/Süpervizör tarafından yürütülen yıllık kapatma motoru. | Web portalında yıllık kilit yönetimi **YOKTUR**. | İzin hakedişleri masaüstünde kilitlendiğinde web profilinde "Kilitli Hakediş" rozetiyle salt okunur görünür. |
| **Nöbet Çizelgesi Kilit Durumu** | Plan onaylandığında kilitlenir; hücre düzenleme ve yedek yükleme engellenir. | Personel kendi görev yerini ve onaylı nöbetlerini "Kilitli Çizelge" rozeti altında salt okunur görür. | Çizelge kilitliyken personel yalnızca karşılıklı Nöbet Devir (Becayiş) veya izin talebi başlatabilir. |
| **Fazla Mesai ve Borç/Alacak** | Yönetici fazla mesai ödeme veya sonraki aya devretme kararlarını topluca mühürler. | Web portalında yalnızca personelin kendi fazla mesai bakiye özeti salt okunur izlenebilir. | Onaylanan bakiye doğrudan bir sonraki ayın nöbet solver motoruna devir saati olarak aktarılır. |
| **Tarih Aralığı Kilit Kontrolü** | Geriye dönük izin veya nöbet girişlerinde kilitli aya sarkma kontrolü yapılır. | Personel izin talep formu doldururken kilitli bir geçmiş döneme tarih seçerse web sunucusu talebi reddeder. | Merkezi servis kuralı her iki platformda da veri bütünlüğünü garanti eder. |

---

## E. Hedefli Ekran Görüntüsü Talebi

Kılavuz dokümantasyonunda kullanıcıların dönem kilitleme ve veri bütünlüğü mekanizmasını eksiksiz kavraması için **SADECE 2 kritik ekran görüntüsü** yeterlidir:

1. **`14_1_fiili_hizmet_donem_kilitleme_ve_kilit_badge.png`:**
   - **Görüntülenecek Alan:** Fiili Hizmet Yönetimi -> `Fiili Hizmet Hesaplama` sekmesi.
   - **Görsel Odak:** Sol üstteki `[Dönemi Kilitle]` / `[Dönem Kilidini Aç]` butonu, periyot seçiciler (`Yıl`, `Dönem Ayı`), `[Puantaj Raporuna Geç]` butonu ve tablo üstündeki `[Dönem Kilitli]` / `[Düzenlenebilir]` rozetinin açıkça görünür olduğu ana hesaplama ekranı.

2. **`14_2_nobet_borc_alacak_donem_kilit_durumu.png`:**
   - **Görüntülenecek Alan:** Nöbet Yönetimi -> `Nöbet Fazla Mesai Borç / Alacak Devri` ekranı.
   - **Görsel Odak:** Sağ üstteki `lblLockStatus` dönem durum rozeti ("Düzenleme modu aktif" veya "Bu ay için kaydedilmiş borç/alacak kayıtları mevcuttur"), filtre araç çubuğu ve tablodaki satır bazlı devir/ödeme kilit durumları.
