# RADPYS V4 — Sürüm Notları ve Yenilikler Kılavuzu

Bu kılavuz, **RADPYS V4 Kurumsal Radyasyon ve Personel Yönetim Sistemi** kapsamında kullanıma sunulan tüm yenilikleri, mevzuat uyumluluklarını, operasyonel modülleri ve sistem geliştirmelerini son kullanıcılar, radyasyon korunma sorumluları ve kurum yöneticileri için özetlemektedir.

---

## 🏛️ 1. RADPYS V4.0.0.0: Kurumsal Mimari Dönüşümü ve Temel Yenilikler

RADPYS V4 sürümüyle birlikte sistem; yüksek veri güvenliği, kesintisiz çalışma ve mevzuat denetimlerine tam uyumluluk sağlamak amacıyla kurumsal standartlarda yeniden tasarlanmıştır.

### 🐘 1.1 Güçlü ve Kesintisiz Kurumsal Veritabanı Altyapısı (PostgreSQL)

* **Kesintisiz ve Güvenli Çalışma:** Kurum verileri, hastane düzeyinde yüksek hız ve güvenlik sunan PostgreSQL veritabanı altyapısıyla korunur; otomatik bağlantı kurtarma desteğiyle veri kaybı önlenir.
* **Tam Veri Bütünlüğü ve Koruma:** Yanlışlıkla yapılan silme işlemlerine karşı koruyucu mekanizmalar getirilmiş; kayıtların geçmişi güvenli arşiv mimarisiyle muhafaza altına alınmıştır.

### 🧠 1.2 Yasal Mevzuata Tam Uyumlu Otomatik Karar Motorları

Yönetmelik ve standart kuralları sisteme entegre edilerek manuel hesaplama hataları tamamen ortadan kaldırılmıştır:

* **Dozimetre ve Sağlık Risk Analizi:** NDK (Nükleer Düzenleme Kurumu) mevzuatı uyarınca yıllık 20 mSv efektif doz sınırı, 2.0 mSv sarı ve 5.0 mSv kırmızı erken uyarı eşikleri ile gebe çalışanlar için **1 mSv yasal tavan denetimi** otomatik olarak yürütülür.
* **Koruyucu Donanım (RKE) Kalite Kontrolü:** DIN 6857-1 / IEC 61331-3 standartlarında periyodik skopi muayene analizi yapılır; tiroid koruyucularda **sıfır tolerans kuralı** (delik/yırtık tespitinde doğrudan hurda/HEK kararı) otomatik uygulanır.
* **Fiili Hizmet Süresi Zammı (FHZ / Şua İzni):** 5510 Sayılı Kanun ve Yataklı Tedavi Kurumları Yönetmeliği uyarınca yıllık çalışma saatine göre hak edilen şua izni (0-30 gün) kıstelyevm esasına göre hatasız hesaplanır.
* **İzin ve Nöbet Çakışma Denetimi:** Çakışan izin, nöbet ve resmi tatil günleri sistem tarafından kullanıcıyı uyararak anında tespit edilir.

### ⚖️ 1.3 Evrensel Yönetici Onay Sistemi

* Nöbet takasları, izin talepleri, gebelik bildirimleri ve kritik profil güncellemeleri yönetici onay kuyruğuna iletilir.
* Yöneticiler, yapılan değişiklikleri eski ve yeni değerleri yan yana görsel olarak inceleyebilir; tek tıkla onaylayabilir veya gerekçe belirterek reddedebilir.

### 🧱 1.4 Entegre 8 Temel Modül Paketi

1. **Yetkilendirme ve Kullanıcı Yönetimi:** Rol bazlı güvenli erişim ve kademeli lisans takip mekanizması.
2. **Kurumsal Tanımlamalar ve Ayarlar:** Dinamik kurum birimleri, unvanlar ve sistem tercihleri.
3. **Personel, İzin ve Fiili Hizmet:** Özlük takibi, şua hak edişi ve yasal izin yönetimi.
4. **Dozimetre ve Sağlık Taramaları:** Laboratuvar ölçüm aktarımları, kümülatif doz riskleri ve periyodik tetkikler.
5. **Radyasyon Koruyucu Donanım (RKE):** Kurşun önlük ve ekipmanların DIN 6857-1 skopi muayeneleri, zimmet ve karekod takibi.
6. **Tıbbi Cihaz ve Lisans Yönetimi:** Radyoloji cihaz envanteri, NDK lisans vizeleri ve bakım sözleşmeleri.
7. **Kalite Kontrol ve Ortam Dozu:** Mimari kat planı üzerinde radyasyon seviyesi izleme ve periyodik ölçümler.
8. **Nöbet Planlama, Olay Bildirimi ve Raporlama:** Otomatik çizelgeleme, SKS kalite olay bildirimleri ve resmi matbu form üretimi.

### 🎨 1.5 Modern Klinik Tasarım (RDS) ve Kolay Okunur Arayüz

* **Gözü Yormayan Klinik Renkler:** Uzun süreli çalışmalarda göz sağlığını koruyan modern açık ve koyu tema seçenekleri.
* **Net Vektörel İkonlar:** Tüm buton ve menülerde anlamı güçlendiren kurumsal vektörel simgeler.
* **Hizalı Sayısal Tablolar:** Dozimetre ölçümleri, seri numaraları ve TC kimlik numaralarında okumayı kolaylaştıran özel sayısal yazı tipi standardı.

---

## 👥 2. Personel Modülü: İşten Ayrılış, KVKK Arşivleme ve Yazdırma

1. **Personel Kartında İşten Ayrılış ve Arşiv Yönetimi:**
   * Personel detay ekranına "İşten Ayrılış ve Arşiv" sekmesi eklendi.
   * Personelin kurumda çalıştığı süre boyunca oluşan tüm geçmiş kayıtları (özlük evrakları, sağlık tetkikleri, eğitimler, dozimetre geçmişi ve fiili hizmet dökümleri) tek ekranda özetlenir.
   * Ayrılış tarihi, gerekçesi (İstifa, Emeklilik, Nakil vb.) ve kurumsal açıklamalar kayıt altına alınır.

2. **Resmi A4 PDF Mevzuat Arşiv Raporu ve Tek Tıkla KVKK ZIP Paketi:**
   * Ayrılan personelin tüm mevzuat geçmişini içeren resmi kapaklı, filtreli ve imza bloklu A4 PDF arşiv raporu üretilir.
   * Tek tıkla indirilen şifreli arşiv ZIP paketi içerisinde hem resmi PDF raporu hem de personelin sisteme taranmış tüm ıslak imzalı belgeleri eksiksiz olarak teslim edilir.

3. **Personel Listesini Doğrudan Yazdırma ve PDF Aktarımı:**
   * Personel listesi araç çubuğuna **"Yazdır"** butonu eklendi; filtrelenmiş liste kurum adı, tarih ve imza bloklarıyla yatay A4 formatında anında yazıcıya aktarılır.
   * Listeleri tek tıkla PDF formatında arşivleme seçeneği eklendi.

4. **Yüksek Hızlı Arama ve Liste Performansı:**
   * Yüzlerce personelin bulunduğu kurumlarda dahi arama ve listeleme anlık hale getirildi; arka planda çalışan akıllı veri yükleme sayesinde ekran donmaları engellendi.

---

## ☢️ 3. Dozimetre Takip Sistemi ve Resmi RD.F43 Doz Araştırma Formu

1. **Dozimetre Takip Sistemi ve Kurumsal Laboratuvar Entegrasyonu:**
   * Tüm çalışanların dönemsel kişisel dozimetre ölçümlerinin listelenmesi, kümülatif doz risk analizleri ve Excel'den toplu içe aktarımı sağlandı.
   * TENMAK, RADAT ve ENA resmi laboratuvar formatlarındaki ölçüm dosyaları otomatik sütun eşleme ile sisteme anında işlenir.

2. **Resmi RD.F43 Doz Araştırma Formu:**
   * TENMAK ve NDK resmi standartlarında 2 sayfalık matbu **RD.F43 Doz Araştırma Formu** sisteme entegre edildi.
   * Hafta sonlarını otomatik atlayan 10 iş günü yasal araştırma süresi sayacı eklendi.
   * Doz hızı ve unutulma süresi üzerinden tahmini doz hesaplama motoru devreye alındı.
   * Kurum logoları ve çok satırlı başlıklar içeren resmi Word (`.docx`) belgesi çıktısı tek tıkla alınabilir.

---

## 🏪 4. Nöbet Değişim Havuzu (Pazaryeri) ve 36 Saat Güvenlik Kuralı

1. **Nöbet Değişim Havuzu ve Dijital İlan Pazarı:**
   * Nöbet devretmek veya karşılıklı takas yapmak isteyen çalışanlar sistem üzerinden ortak dijital havuzda ilan açabilir ("Açık Devir" ve "Karşılıklı Takas").
   * İlk gelen talip olduğunda ilan kilitlenir; teklif reddedilirse ilan süre kısıtı dolana kadar havuzda yeni taliplere açık kalır.

2. **36 Saat Güvenlik Kısıtı ve 48 Saat Erken Uyarı:**
   * Nöbete 48 saat kala talip çıkmamış ilanlar için nöbet sahibine erken uyarı bildirimi gönderilir.
   * Nöbete 36 saat kala talipsiz ilanlar otomatik olarak iptal edilir; nöbet yükümlülüğü asıl personelde kalarak sağlık hizmetinin ve nöbetin açıkta kalması önlenir.

3. **Acil Mazeret ve Otomatik İkame Önerisi:**
   * 36 saatten az süre kala gelişen acil durumlarda sağlık raporu yüklenerek talep doğrudan yönetici onay ekranına iletilir.
   * Nöbet adalet katsayısı ve nöbet yükü en uygun olan personel sistem tarafından otomatik olarak önerilir.

---

## 🛡️ 5. Koruyucu Ekipman (RKE) ve DIN 6857-1 Muayene Kokpiti

1. **DIN 6857-1 Standardında Kalite Kontrol Değerlendirmesi:**
   * Skopi muayenesinde kurşun önlük ve gonadal koruyucularda yüzey alanı hasar eşikleri denetlenir.
   * Tiroid koruyucu donanımlarda **0 mm² sıfır tolerans kuralı** uygulanır (yırtık/delik doğrudan HEK/hurda kararı).

2. **Akıllı Ekipman Kodlama ve Karekod Etiketleme:**
   * Kurumsal standartta tekil ekipman kodlama (`[Birim]-[Cins]-[SıraNo]`) ve QR karekod etiket basımı sağlandı.
   * Ekipmanların teslim ve devir süreçleri Zimmet Devir Formu ve kurumsal denetim geçmişi ile kayıt altına alınır.

3. **Toplu Muayene Kokpiti:**
   * Onlarca koruyucu donanımın tek bir oturumda saniyeler içinde periyodik kontrolden geçirilmesi sağlandı.

---

## 🏥 6. Cihaz Yönetimi, NDK Lisansları ve Kat Planı Entegrasyonu

1. **Radyasyon ve Görüntüleme Cihazı Sınıflandırması:**
   * BT, Röntgen, Mamografi, Anjiyo, C-Kollu, SPECT, PET-CT ve Lineer Hızlandırıcı cihazlarının NDK resmi lisans vizeleri ve erken uyarı bildirimleri (60, 30, 15 ve son gün) devreye alındı.
   * Tıbbi cihaz ve radyasyon kaynakları bağımsız envanter kartlarıyla yönetilir.

2. **Arıza Bildirimi ve Periyodik Bakım Takibi:**
   * Mobil QR karekod destekli hızlı arıza bildirim ekranı ile periyodik bakım sözleşmelerinin bağımsız takibi sağlandı.

3. **Kat Planı PDF Desteği ve Konum Sabitleme:**
   * Mimari kat planı krokilerinin doğrudan sisteme yüklenmesi ve yüksek çözünürlüklü görüntülenmesi sağlandı.
   * Pin kilitleme modu ile harita üzerinde gezinirken cihaz konumlarının kazara kayması önlendi.

---

## 📚 7. Bilgi Merkezi ve Çevrimdışı Yardım Portalı

1. **Entegre Modüler Yardım Sayfaları:**
   * Sistem içerisinde klavyeden **F1** tuşuna basıldığında veya menüden açılabilen anlık tam metin arama destekli yerel yardım portalı.
   * Tüm modüller için hızlı reçeteler, 5N1K operasyonel adımlar ve Sıkça Sorulan Sorular (SSS).
2. **Kapsamlı Kullanım Kılavuzu:**
   * Çevrimdışı ortamda dahi eksiksiz görüntülenebilen zengin dokümantasyon desteği.

---

## 🖥️ 8. Sistem Gereksinimleri ve Kurulum Özellikleri (V4.0.0.0)

* **İşletim Sistemi:** Windows 10 / Windows 11 (64-bit) ve Windows Server 2016+.
* **Donanım:** Çift çekirdekli işlemci, minimum 4 GB RAM, 1080p (Full HD) ekran çözünürlüğü.
* **Kolay Kurulum:** Tek tıkla çalışan kurulum sihirbazı ile kurum içi yerel ağda merkezi veya bağımsız çalışma desteği.
* **Otomatik Veri Tabanı Hazırlığı:** İlk açılışta gerekli kurumsal şablonlar, referans verileri ve ilk yönetici hesabı otomatik olarak yapılandırılır.

---

## 🛡️ 9. RADPYS V4.0.1.0: Yönetici Güvenliği ve Arayüz Standartları

Bu sürüm; sistem yönetimi güvenliğinin artırılmasını, denetim izi mekanizmasının güçlendirilmesini ve arayüz kullanım ergonomisinin kurumsal seviyeye çıkarılmasını sağlamıştır:

* **Çift Aşamalı Yönetici Doğrulaması:** Veritabanı bakımı, şema onarımı ve sistem loglarının temizlenmesi gibi hassas işlemler şifreli yönetici onayına bağlandı.
* **Eksiksiz Kurumsal Denetim İzi:** Kullanıcı oluşturma, rol atama, yetki güncelleme ve silme işlemlerinde hangi yöneticinin ne zaman işlem yaptığı resmi denetim günlüğüne kaydedilir.
* **Akıllı Tablo Görünümü ve Kompakt Satır Düzeni:** Tablolarda sağda kalan gereksiz boşluklar optimize edildi; satır yüksekliği dengelenerek tek ekranda daha fazla kaydın rahatça incelenmesi sağlandı. Koyu temada satır kontrastı güçlendirildi.
* **Pratik Filtre Gizle/Göster Butonu:** İzin, Dozimetre, Personel, Cihaz ve RKE ekranlarının sağ üst köşesine tek tıkla filtreleri açıp kapatabilen pratik ve şık bir araç butonu eklendi.
* **Donmasız Arka Plan İşlemleri:** Ağır veritabanı optimizasyonları ve toplu Excel aktarım işlemleri arka planda çalıştırılarak kullanıcı arayüzünün donması engellendi.

---

## 📋 10. RADPYS V4.0.1.0 Modül Olgunluk Özeti

| Modül / Alan | Durum | Kullanıcı ve Kurumsal Kazanım |
| :--- | :---: | :--- |
| **Yönetici ve Yetki Güvenliği** | ✅ Tamamlandı | Rol, kullanıcı ve yetki değişikliklerinde tam denetim izi sağlandı. |
| **Arayüz ve Tablo Ergonomisi** | ✅ Tamamlandı | 34px kompakt satır düzeni ve tek tıkla filtre gizleme/gösterme standardı aktif. |
| **Veri Tabanı Bütünlüğü** | ✅ Tamamlandı | Sıfır veri kaybı garantisi ve koruyucu silme engelleri devrede. |
| **Performans ve Hız** | ✅ Tamamlandı | Arka plan iş parçacıkları ile donmasız raporlama ve dışa aktarım. |

---

## 🌐 11. RADPYS V4.0.2.0: Web Portalı Güvenliği ve Mobil Entegrasyon

Bu sürümde Web Portalı ile masaüstü sistemi tam entegrasyona kavuşturulmuş, mobil erişim güvenliği ve kullanıcı deneyimi en üst düzeye çıkarılmıştır:

* **Canlı Veri Senkronizasyonu:** Web portalı üzerindeki 13 analitik gösterge panosu (dashboard) doğrudan veritabanı ile canlı eşleşerek anlık bilgi üretmeye başladı.
* **SKS v6.1 Şifahi Onay ve SMS Doğrulaması:** Nöbet devirlerinde devralan personelin dijital rızası olmadan işlem yapılmasını önlemek için 6 haneli güvenlik doğrulama kodu desteği getirildi.
* **Gelişmiş Belge Yükleme Güvenliği:** Mobil cihazlardan ve webden rapor/belge yüklenirken sahte uzantılı veya zararlı dosyaların yüklenmesi engellendi.
* **Birim ve Departman İzolasyonu:** Yöneticiler dışındaki personellerin yalnızca kendi çalıştıkları servise ait nöbet ve dozimetre kayıtlarını görmesi güvenceye alındı.
* **Yüksek Hızlı Önbellek Desteği:** Çok sayıda kullanıcının aynı anda panolara eriştiği yoğun saatlerde dahi sayfaların anında açılması sağlandı.

---

## 🛠️ 12. RADPYS V4.0.2.1: Web Portalı Gösterge Panelleri Uyum Güncellemesi

* **Kesintisiz Sistem Başlatma:** Web portalı açılırken veritabanı bağlantısının otomatik olarak doğrulanması ve hazır olduğunda sayfaların anında sunulması sağlandı.
* **Ortam Dozu ve Alan Ölçümleri Göstergesi:** Radyasyon ölçüm eşikleri ve mimari kroki verilerinin web panolarında eksiksiz görüntülenmesi sağlandı.
* **Çalışma Kısıtları ve Nöbet Kapasite Analizi:** Gebe veya sağlık kısıtı olan personellerin nöbet risklerinin web göstergelerinde doğru ve güncel yansıması sağlandı.
* **Koruyucu Donanım ve Kalite Eğitimi Entegrasyonu:** RKE envanter durumu ile zorunlu kurum içi eğitimlerin web göstergelerinde canlı takibi tamamlandı.

---

## 🛠️ 13. RADPYS V4.0.2.2: Gösterge Paneli ve Muayene Kayıtları Bütünlüğü

* **Birim Bazlı Filtreleme İyileştirmesi:** Web analitik panolarında servis ve birim bazında yapılan veri süzme işlemleri daha kararlı hale getirildi.
* **Dozimetre ve Gebe Çalışan Takibi:** Gebe çalışanların ve aktif dozimetrelerin anlık verileri gösterge panolarına bağlandı.
* **Koruyucu Donanım (RKE) Muayene Sonuçları:** DIN 6857-1 periyodik skopi muayene sonuçlarının web panosunda eksiksiz listelenmesi sağlandı.

---

## 🛡️ 14. RADPYS V4.0.2.3: Klinik Çizelge Matrisi ve Gelişmiş Nöbet Yönetimi

Bu sürüm; nöbet çizelgesinde ayın tamamının tek ekrana sığmasını sağlayan kompakt klinik görünümü, resmi tatil renklendirmelerini ve ay ortası güvenli plan revizyonunu devreye almıştır:

* **31 Günün Tamamı Tek Ekranda:** Nöbet çizelgesinde satır yükseklikleri optimize edildi, başlık alanı sadeleştirildi; 31 günlük ayın tamamı dikey kaydırmaya gerek kalmadan tek ekrana sığdırıldı.
* **Hafta Sonu ve Resmi Tatil Renklendirmesi:** Resmi ve dini bayramlar zarif bordo/rose tonuyla, hafta sonları modern lacivert tonuyla belirginleştirildi. Tatil günlerinin üzerine gelindiğinde bayram adı bilgi balonu olarak görüntülenir.
* **Sayısal Veri Okuma Kolaylığı:** Nöbet sayısı, hedef süre, fiili çalışma ve fazla mesai gibi sayısal sütunlara kaymayı önleyen özel hizalı yazı tipi standardı uygulandı.
* **Ay Ortasında Güvenli Nöbet Planı Revizyonu:** Yayındaki bir plan ay ortasında güncellenirken, personelin o güne kadar fiilen tamamladığı nöbetlerin silinmesini ve yasal hak kayıplarını önleyen koruyucu mekanizma devreye alındı. Çalışılmış nöbetler kilitlenir; sadece ileriye dönük günler taslağa çekilerek revize edilir.
* **Yönetici Sorumluluk Gerekçesi:** Ay ortası plan değişikliklerinde en az 20 karakterlik açıklama ve yönetici şifre doğrulaması şart koşularak denetim güvenliği sağlandı.

---

## 🌐 15. RADPYS V4.0.2.4: Web Portalı 20 Modüllü Kurumsal Analitik Kokpiti

Web Portalı; hastanenin tüm radyasyon güvenliği ve personel süreçlerini tek ekrandan yönetmeyi sağlayan **20 modüllü tam teşekküllü bir klinik analitik kokpitine** dönüştürülmüştür:

* **Canlı Veriyle Çalışan 20 Analitik Pano:**
  1. *Yönetici Genel Özet:* Personel, cihaz, koruyucu donanım ve kritik bildirim şeritleri.
  2. *Radyasyon Alanları:* Denetimli ve gözetimli alan sensör seviyeleri.
  3. *Kişisel Dozimetre (TLD/OSL):* Kümülatif doz riskleri ve yasal eşik aşımları.
  4. *Ortam Dozu ve Alarm:* Alan radyasyon ölçümleri ve dedektör seviyeleri.
  5. *Eğitim ve Mevzuat Uyumu:* Zorunlu radyasyon güvenliği ve ALARA eğitimleri.
  6. *Nöbet Analitiği:* Birim bazında vardiya yükü, yorgunluk analizi ve adil dağılım.
  7. *Aylık Nöbet Takvimi:* İnteraktif vardiya planı ve antetli A4 çıktı alma.
  8. *Birim İş Yükü ve Denge:* Modalite katsayılarına göre bağıl servis yükleri.
  9. *İzin ve Devamsızlık Takibi:* İzinlerin nöbet kapasitesine anlık etkisi.
  10. *Şua İzni Hak Edişi:* 5510 Sayılı Kanun kapsamında hak edilen yasal şua günleri.
  11. *Sağlık ve Periyodik Muayene:* Dahiliye, göz ve dermatoloji periyodik tetkikleri.
  12. *Çalışma Kısıtları:* Gebe ve sağlık kısıtı olan çalışanların nöbet muafiyetleri.
  13. *Tıbbi Cihaz ve Kalite Kontrol (QC):* Cihaz envanteri, geciken testler ve arıza kayıtları.
  14. *Koruyucu Donanım (RKE):* DIN 6857-1 muayeneleri ve tiroid sıfır tolerans takibi.
  15. *Olay ve Ramak Kala Bildirimi:* DÖF süreçleri ve SKS kalite bildirimleri.
  16. *Bilimsel Araştırma Projeleri:* Etik kurul onaylı çalışmalar ve araştırmacı dozları.
  17. *Kurumsal Tesis Lisansları:* NDK ve TENMAK lisans süreleri ve erken uyarılar.
  18. *Personel Demografisi:* 27 operasyonel alt birim bazında kadro dağılımı.
  19. *Cihaz Zimmet Takibi:* Taşınır mal teslim tutanakları ve zimmet geçmişi.
  20. *Denetim Hazırlık Kokpiti:* NDK ve SKS teftişlerine hazırlık skoru ve kılavuz.
* **Şeffaf ve Dürüst Bilgilendirme:** Henüz veri girişi yapılmamış modüllerde kullanıcıyı yönlendiren kurumsal boş durum rehberi gösterilir; asla sahte/yapay veri üretilmez.
* **27 Operasyonel Alt Birim Desteği:** BT, MR, Anjiyo, Acil Radyoloji, Girişimsel gibi gerçek servis hiyerarşisi üzerinden analiz.
* **Tek Tıkla Resmi Excel ve PDF Raporları:** 20 panonun tamamında antetli ve filtre özetli resmi rapor üretimi.
* **Denetim Hazırlık Motoru:** NDK ve SKS denetim kontrol maddelerinde tek tıkla ilgili detay panoya yönlendiren bağlantılar.

---

## 📅 16. RADPYS V4.0.2.5 - V4.0.2.6: Nöbet Takvimi ve Yıllık İzin Projeksiyonu

### Nöbet Takvimi Yenilikleri
* **Yalnızca Nöbet Tutan Birimlerin Listelenmesi:** Nöbet planı bulunmayan birimler filtrelenerek liste sadeleştirildi.
* **Temiz A4 Yazdırma Çıktısı:** Yazdır butonuna basıldığında gereksiz buton ve filtreler gizlenerek kurum antetli resmi nöbet çizelgesi yazdırılır.
* **Resmi Tatil Mesai Bilgi Kartı:** İlgili aydaki tatil günleri hesaplanarak aylık mesai saatinden düşecek süre otomatik gösterilir.

### Yıllık İzin Projeksiyonu ve Klinik Çakışma Analizi
* **Son 4 Yıl İzin Tercih Kalibrasyonu:** Geçmiş kurum verileri analiz edilerek personellerin izin tercihleri projeksiyon olarak sunulur.
* **3 Farklı İnceleme Modu:**
  1. *Detaylı Liste:* Personel bazında tahmini izin aralığı ve unvan bilgileri.
  2. *Alt Birim Risk Matrisi:* 28 alt birimde aynı ayda 2+ personelin izinli olduğu kritik durumları kırmızı alarm olarak gösteren klinik risk kartları.
  3. *12 Aylık Zaman Çizelgesi (Mini-Gantt):* Yılın en yoğun talep aylarını ve aylık toplam izin yükünü gösteren ısı haritası.
* **Hizmet Sınıfı ve Alt Birim Filtreleri:** Tabip, sağlık personeli ve tekniker bazında anlık filtreleme imkanı.
* **Sayfa Ergonomisi:** Mükerrer grafikler temizlenerek sayfa gezinmesi daha hızlı ve ferah hale getirildi.
---

## 🏖️ 17. RADPYS V4.0.2.7: Yıllık İzin Projeksiyonu İyileştirmeleri

* **Planlı İzin Türü Seçicisi:** Mazeret izinleri ve kısa süreli raporlar gibi anlık durumlar istatistikten ayrılarak, yalnızca personelin önceden planladığı **Yıllık İzin** ve **Sağlık (Şua) İzni** kayıtları üzerinden yüksek doğruluklu projeksiyon sunulmaya başlandı.
* **Hizmet Sınıfı Filtresi:** Personeller; Radyasyon Görevlisi, Akademik Kadro, Tabip, Sağlık Teknikeri ve Hemşirelik gibi hizmet sınıflarına göre anlık olarak filtrelenebilir hale getirildi.
* **İnteraktif Uyarı Kartları:** "Kritik Çakışma Riski" kartına tıklandığında personel darboğazı yaşayan birimler, "En Yoğun Ay" kartına tıklandığında ise 12 aylık takvim ısı haritası doğrudan açılır.
* **Kapsamlı Excel Çıktısı:** Dışa aktarılan dosyalara hizmet sınıfı ve izin türü sütunları dahil edildi.

---

## 👥 18. RADPYS V4.0.2.8: Cari Yıl İzin Takibi ve Kadro Emniyeti

* **Operasyonel İzin Yönetimi:** Cari yıl resmi izin hareketleri, yönetici onay bekleyenler ve anlık kadro durumları tek ekranda toplandı.
* **Önümüzdeki 30 Gün Kadro Güvencesi:** Önümüzdeki 30 gün içerisinde aynı alt birimde (örneğin BT veya Acil Röntgen) birden fazla personelin izinli olduğu kritik durumlar erken uyarı kartı olarak amirlerin dikkatine sunuldu.
* **3 Pratik Sekme:** Tablo üzerinde *Onay Bekleyenler*, *Bugün İzinde Olanlar* ve *Tüm İzinler* sekmeleriyle operasyonel hız sağlandı.
* **Yasal Kıdeme Göre İzin Hesabı:** Çalışma süresi 10 yılı aşan çalışanlar için 30 gün, diğer çalışanlar için 20 gün yıllık izin hakkı mevzuata uygun olarak tanımlandı.

---

## ⏱️ 19. RADPYS V4.0.2.9: Yasal Şua İzni Hak Edişi ve Fiili Çalışma Uyumu

* **Yasal "50 Saat = 1 Gün" Kuralı:** İyonlaştırıcı radyasyon mevzuatına uygun olarak; personelin radyasyonlu kontrollü alanlarda fiilen çalıştığı her 50 saatlik süre karşılığında 1 gün şua izni hak edişi (yılda en fazla 30 gün) hesaplanması sağlandı.
* **Kazanım Yılı ve Kullanım Yılı Takibi:** Cari yılda hak edilen şua günlerinin bir sonraki takvim yılı içerisinde kullanılması ve yıl sonu yanma risklerinin önceden izlenmesi için yasal döngü panosu eklendi.
* **Fiili Çalışma Odaklı Adil Hesaplama:** Statik unvan yerine, personelin radyasyonlu modalitelerde (BT, Anjiyo, Röntgen vb.) bizzat geçirdiği gerçek çalışma saatleri baz alındı.
* **Modalite Dağılım Kartları:** Hangi radyoloji biriminin kaç gün şua izni ürettiğini gösteren interaktif döküm kartları sunuldu.

---

## 📱 20. RADPYS V4.0.2.10: Ortam Dozu Saha Krokisi ve Mobil Formlar

* **Tam Ekran Dokunmatik Kroki:** Tablet ve akıllı telefonlarda tek parmakla harita içinde gezinti, iki parmakla büyütme/küçültme ve eldivenli kullanıma uygun yüzen yakınlaştırma butonları eklendi.
* **Zırhlı Odalarda Çevrimdışı Çalışma Güvencesi:** Kurşun kaplı radyoloji odalarında Wi-Fi bağlantısı kopsa dahi girilen ölçümler saklanır; bağlantı sağlandığında sisteme otomatik aktarılır.
* **Hizmet İçi Eğitim ve İnteraktif Sınav:** Sayfa değiştirmeden doğrudan eğitim ekranında sınav çözebilme, soru ve şekilleri yüksek çözünürlükte büyütme desteği sağlandı.
* **Kamera ile Hızlı QR Okuma:** Mobil tarayıcılardan doğrudan kamera açılarak cihaz karekodları anında taranabilir hale getirildi.
* **10 Temel Mobil Saha Formu:** Personel profili, nöbet takas havuzu, ortam dozu ölçümü, arıza bildirimi ve RKE muayene formları mobil uyumlu olarak devreye alındı.

---

## ⚖️ 21. RADPYS V4.0.2.11: Yasal Arife ve Bayram Mesai Ayrıştırması

* **Kanuni Arife Ayrıştırması (2429 Sayılı Kanun):** Ulusal bayram ve dini bayram arifelerinde saat 13:00'ten itibaren başlayan resmi tatil süresi nöbet bloklarında saat/dakika hassasiyetinde ayrılarak normal mesai ile bayram mesaisi adil bir şekilde ayrıştırıldı.
* **Yasal Fazla Mesai Kota Yönetimi:** Kurum bütçesine göre aylık 60 saatlik kurumsal kota veya yasal tavan olan 130 saate kadar fazla mesai ödeme/devir seçenekleri eklendi.
* **5 Sütunlu Mutemetlik Bildirim Cetveli:** Mutemetlik ve bordro birimlerinin doğrudan kabul ettiği 5 sütunlu sade cetvel standardı devreye alındı (*T.C. Kimlik, Adı Soyadı, Görev Yeri, Normal Fazla Mesai, Bayram Fazla Mesai*).
* **Resmi Antetli A4 Yazdırma:** İdare ve başhekim onay blokları içeren resmi A4 dikey yazdırma ve tek tıkla Excel/PDF dışa aktarım desteği sağlandı.

---

## 📊 22. RADPYS V4.0.2.12: Akıllı Nöbet Dengeleme ve Geniş Ekran Modu

* **Asimetrik Vardiya Dengeleme:** Farklı sürelerdeki vardiyalarda (örn: 7 saat gündüz ve 17 saat gece) çalışan personeller arasındaki mesai farkı otomatik çapraz takaslarla dengelenerek adil dağılım sağlandı.
* **Kıdem ve Yaş Önceliği:** 50 yaş ve 25 yıl hizmet kıdemi bulunan çalışanlara nöbet planlamasında gündüz vardiyaları önceliklendirildi.
* **Geniş Ekran Modu (Tam Ekran Tablo):** Nöbet ekranında sol menüyü tek tıkla gizleyerek 31 günlük tablonun tüm ekranı kaplaması ve dikey kaydırmaya gerek kalmadan rahatça incelenmesi sağlandı.

---

## 🛡️ 23. RADPYS V4.0.2.13: Yasal Nöbet Muafiyetleri ve Doz Kısıtları

Mevzuata uygun olarak 4 yeni yasal nöbet muafiyeti sistemi koruma altına almıştır:
1. **Engelli Personel Muafiyeti (DMK Md. 101):** Engelli çalışanlara gece nöbeti ve 24 saatlik vardiya yazılması engellendi.
2. **Engelli Yakını Bulunan Personel (DMK Ek Md. 39):** Bakmakla yükümlü olduğu engelli yakını bulunan personele nöbet yazılmaması sağlandı.
3. **Sağlık Kurulu Heyet Raporu:** Tam teşekküllü hastane heyet raporu ile belgelenen sağlık durumlarında rapor süresince nöbet kısıtlaması uygulandı.
4. **Yıllık Doz Aşımı Kısıtı (NDK Mevzuatı):** Doz aşımına uğrayan veya incelemeye alınan çalışanların radyasyonlu birimlerde nöbet tutması sistem tarafından otomatik olarak engellendi.
---

## ☢️ 24. RADPYS V4.0.2.14: Dozimetre Aksiyonları ve Birim Rotasyonu Takibi

* **2 Panelli Operasyonel Düzen:**
  * *Sol Panel (İncelenecek Riskler):* Yasal limit aşımları ve personelin geçmiş kişisel ortalamasından radikal sapan tüm istatistiksel anomaliler tek tabloda toplanarak amirin dikkatine sunuldu.
  * *Sağ Panel (Yürütülen Soruşturmalar):* Başlatılmış olan resmi soruşturmalar ve kurumsal DÖF süreçleri durumlarıyla listelenir.
* **Geçmiş Ölçümlerde Birim Rotasyonu:** Personelin geçmiş dozimetre ölçümlerine görev yaptığı radyoloji birimi sütunu eklendi; maruziyet sıçramalarının hangi odadaki (BT, Anjiyo, Skopi vb.) rotasyondan kaynaklandığı anında geriye dönük izlenebilir hale getirildi.
* **Hızlı Aksiyon Butonları:** Tek tıkla resmi RD.F43 Doz Araştırma Sihirbazı başlatma, ara kontrol takip ölçümü tanımlama ve inceleme dosyasını kapatma kolaylığı sağlandı.

---

## 🏷️ 25. RADPYS V4.0.2.15: Çalışma Koşulu (A/B) Rozetleri ve Esnek Tablo Boyutlandırma

* **Çalışma Koşulu A ve B Görsel Rozetleri:**
  * *Çalışma Koşulu A:* Primer radyasyon alanlarında çalışanlar için belirgin nükleer simgesi ve şua izni / fiili hizmet zammı hakkı rozeti eklendi.
  * *Çalışma Koşulu B:* İzlenen alan personelleri için kalkan rozeti atanarak mevzuat hükümleri görselleştirildi.
* **Serbest Sütun Boyutlandırması:** Tanımlamalar ve yönetim tablolarında sütun genişliklerinin fareyle serbestçe daraltılıp genişletilebilmesi sağlandı; uzun birim adları ve açıklamaların üç nokta ile kesilmesi engellendi.
* **Kurumsal Durum Rozetleri:** Taslak, Onay Bekliyor, Onaylandı ve Aktif/Pasif durumları sistem genelinde modern renkli rozetlerle standartlaştırıldı.

---

## 📥 26. RADPYS V4.0.2.16: 5 Adımlı Evrensel Toplu İçe Aktarım Sihirbazı

Personel, izin, dozimetre, cihaz ve koruyucu ekipman gibi tüm modüller için ortak ve hatasız bir **5 Adımlı Toplu İçe Aktarım Sihirbazı** devreye alındı:

1. **Adım 1: Kurumsal Şablon:** Tek tıkla ilgili modüle özel 2 sayfalı kurumsal Excel şablonu indirilir.
2. **Adım 2: Akıllı Sütun Eşleştirme:** Excel dosyasındaki sütun başlıkları sistem alanlarıyla otomatik eşleştirilir.
3. **Adım 3: Değer Çözümleme:** Excel'deki birim veya unvan yazım farkları sistem kayıtlarıyla kolayca eşleştirilir.
4. **Adım 4: Canlı Önizleme ve Hata Kontrolü:** Veritabanına kaydedilmeden önce hatalı veya eksik hücreler kırmızı/turuncu renklerle gösterilir; farenin üzerine gelindiğinde hatanın sebebi açıklanır.
5. **Adım 5: Donmasız Güvenli Aktarım:** Yüzlerce satırlık veri arka planda saniyeler içinde içe aktarılır ve işlem sonucu detaylı döküm olarak sunulur.
   * Aktarım `QThread` arka plan iş parçacığı üzerinden yürütülerek ana UI thread'in kilitlenmesi ve işletim sisteminin "Yanıt Vermiyor" durumuna düşmesi engellenir.
   * İşlem tamamlandığında aktarılan kayıt sayısı ve varsa hata alan kayıtların gerekçeleri listelenir; hatalı satırlar tek tıkla Excel formatında dışa aktarılabilir.

* **11 Temel Alanda İçe Aktarım Desteği:** Personel, İzin, İzin Hak Edişleri, Dozimetre Ölçümleri, Tıbbi Cihazlar, Cihaz Kalite Kontrolleri, Arıza ve Bakım, Koruyucu Ekipman (RKE), RKE Muayeneleri, Ortam Dozu Ölçümleri ve Eğitim Atamaları.
* **Metin Formatı Güvencesi:** Excel aktarımında `0` ile başlayan T.C. Kimlik numaralarının ve cihaz seri kodlarının baştaki sıfırlarının kaybolması önlendi.
* **Dozimetre Kalıcı Eşleştirme Hafızası:** Laboratuvar raporlarında personelin ismi farklı yazılmış olsa dahi, bir kez doğru personel ile eşleştirildiğinde sistem bu eşleşmeyi hatırlar; sonraki aylarda aynı dosya geldiğinde otomatik tanır.
* **Eşleşmeyenleri Dışa Aktarma:** Kurumda henüz kaydı bulunmayan personeller tek tıkla Excel listesi olarak indirilerek hızlıca personel kartı açılabilir.

---

## ⚡ 27. RADPYS V4.0.2.17: Akıcı Sayfa Açılışları ve Donma Koruması

* **Hızlı ve Donmasız Ekran Geçişleri:** Modül pencereleri açılırken verilerin arka planda hazırlanması sağlandı; ekran kilitlenmeleri ve geçici donmalar tamamen engellendi.
* **Akıllı Pencere Yönetimi:** Sistemde zaten açık olan bir modül menüden tekrar seçildiğinde sıfırdan açılmak yerine doğrudan mevcut açık sayfa öne getirilir.
* **Modern Yükleme Göstergesi:** Ağır veri yüklemelerinde kullanıcıya sürecin işlediğini gösteren şık kurumsal animasyon göstergesi eklendi.

---

## 🚀 28. RADPYS V4.0.2.18: Web Portalı Başlatıcı ve Tarayıcı Entegrasyonu

* **Esnek Veritabanı Port Uyumu:** Kurum içi özel veritabanı port yapılandırmaları başlatıcı tarafından otomatik algılanır.
* **Varsayılan İnternet Tarayıcısı Desteği:** Web Portalı açılırken kullanıcının işletim sisteminde tercih ettiği varsayılan tarayıcı (Chrome, Edge, Firefox vb.) otomatik olarak kullanılır.
* **Tek Tıkla Web Portalı Açılışı:** Arayüzdeki kafa karıştırıcı butonlar sadeleştirilerek tek ve net bir **"Web Portalını Aç"** butonuyla birleştirildi.

---

## 📅 29. RADPYS V4.0.2.20: Otomatik Tatil Takvimi ve Mevzuat Uyumu

* **Tek Tıkla Sabit Resmi Tatilleri Yükleme:** Yılbaşı, 23 Nisan, 1 Mayıs, 19 Mayıs, 15 Temmuz, 30 Ağustos ve 29 Ekim gibi yıllık sabit resmi tatiller tek tıkla ilgili yılın takvimine otomatik aktarılır.
* **Dini Bayram Paketleri:** Ramazan ve Kurban Bayramlarında sadece arife gününün seçilmesiyle; arife (0.5 gün) ve bayram günleri (tam gün) yasal süreleriyle otomatik olarak takvime işlenir.
* **Mükerrer Tatil Koruması:** Önceden tanımlanmış tatil günleri tespit edilerek mükerrer kayıt oluşması engellenir.

* **Cihaz Lisans Sayacı (180 Gün Kuralı):** Lisans bitimine 6 aydan fazla süresi olan cihazlarda sade yeşil "Geçerli" rozeti gösterilir; son 180 güne girildiğinde ise gün sayacı otomatik devreye girerek erken uyarı sağlar.
* **Giriş Ekranı Kurumsal Markalaması:** Giriş penceresine yüksek çözünürlüklü kalkan amblemi ve kurumun resmi adı dinamik olarak entegre edildi.

---

## 🔐 30. RADPYS V4.0.2.21 - V4.0.2.22: Şifreli Veri Güvenliği ve Donanım Tabanlı Afet Kurtarma

* **KVKK Uyumlu Kriptografik Yedekleme:** Kurum veritabanı dökümleri ve evrak kasası yüksek standartlı 256-bit şifreleme ile güvence altına alındı.
* **Donanıma Bağlı Deterministik Afet Kurtarma:** Sunucuya format atılması veya donanım arızalarında yedeklerin kilitli kalmasını önleyen, bilgisayarın donanım kimliğiyle tam uyumlu akıllı afet kurtarma anahtarı mimarisi devreye alındı.
* **Tek Tıkla Güvenlik Kartı Çıktısı:** Yöneticilerin harici diske kaydedebileceği zaman damgalı standart metin kurtarma kartı oluşturma imkanı sağlandı.
* **Akıllı Anahtar Algılama:** Harici disk veya USB bellekten geri yükleme yapılırken, yedek klasöründeki anahtar dosyaları otomatik taranarak yöneticiye zahmet vermeden tek tıkla geri yükleme yapılması sağlandı.

---

## 🦺 31. RADPYS V4.0.2.23: Koruyucu Ekipman (RKE) Bütünleşik Muayene Kokpiti

Önceki sürümlerdeki mod geçişi karmaşası kaldırılarak tek ekranda eksiksiz bir kalite kontrol kokpiti kuruldu:

* **Yan Yana Bütünleşik Çalışma Alanı:**
  * *Sol Panel (Görsel Teşhis):* Tiroid, önlük, etek-yelek ve gonad için dinamik vektörel silüetler; ön ve arka yüz geçişi, tek tıkla dokunmatik delik/yırtık işaretleme ve kusurlar tablosu.
  * *Sağ Panel (Fiziki Kontroller ve Karar):* Dikiş, toka, blok kayması ve hijyen kontrolleri; DIN 6857-1 skopi parametreleri ve anlık nihai karar rozeti.
* **Akıllı Çapraz Senkronizasyon:** Krokide delik veya yırtık işaretlendiğinde fiziki kontrollerdeki "Tüm testler normal" seçeneği otomatik kaldırılır; kritik organda hasar varsa sistem doğrudan hurdaya ayırma (HEK) kararı üretir.
* **Salt Okunur Rapor Görünümü:** Tamamlanmış geçmiş muayeneler açıldığında; işaretlenmiş hasar krokisi, fotoğraflar ve karar gerekçelerini içeren şık bir rapor kokpiti gösterilir.
* **Akıllı Cihaz Filtresi:** Muayene formunda sadece skopi ve radyografi yapabilen cihazlar (C-Kollu, Anjiyo, Röntgen) listelenir; MR ve USG gibi ilgisiz cihazlar elenir.

---

## 📋 32. RADPYS V4.0.2.24: Koruyucu Ekipman Envanter Tablosu Sadeleştirmesi

* **9 Sütunlu Sade ve Ferah Tablo:** Tablodaki yatay sıkışıklık ve metin kesintileri giderilerek 9 temel sütun belirlendi (*Ekipman No, Birim No, Cinsi, Beden, Departman, Ekipman Yaşı, Son Muayene, Muayene Durumu, Sonraki Muayene*).
* **Kesintisiz Birim Adları:** Birim ve departman isimlerinin üç nokta ile kesilmesi engellendi; tam adlar esnek genişlikle sunuldu.
* **Net Durum Rozetleri:** *Uygun, Şartlı Kullanım, HEK / Hurda, Muayenesiz* ve *Günü Geçti* durumları belirgin kurumsal rozetlerle gösterildi.

* **Ayrıştırılmış Muayene Bilgisi ve Klinik Durum Rozetleri:**
  * **Son Muayene Sütunu:** Ekipmanın en son kontrolden geçtiği geçmiş tarih sabit olarak sunulur.
  * **Muayene Durumu Sütunu:** Süre durumundan bağımsız olarak ekipmanın gerçek muayene ve klinik statüsünü yansıtır (*Uygun*, *Şartlı Kullanım*, *HEK / Hurda*, *Muayenesiz*, *Bakımda*).
  * **Sonraki Muayene Sütunu:** Kontrol periyodu dolmuş ekipmanlarda doğrudan kırmızı **Günü Geçti** rozeti görüntülenir. Rozetin üzerine gelindiğinde planlanan hedef muayene tarihi ve kaç gün geciktiği bilgi balonunda gösterilir. Kontrol periyodu güncel olan ekipmanlarda ise planlanan tarih korunur.

---

## 📋 33. RADPYS V4.0.2.25: Esnek Raporlama Menüsü, Tek Tık Dışa Aktarım ve %100 Türkçe Kullanıcı Arayüzü

* **Tek Tıkla Dinamik Rapor Dışa Aktarma Menüsü:**
  * Modül ekranlarında (Personel, Cihaz, Koruyucu Ekipman vb.) dışa aktarma butonuna tıklandığında, ilgili kategoriye ait tanımlı raporlar tek bir menüde listelenir.
  * Her rapor şablonunun varsayılan formatı (Excel veya PDF) tek tıkla doğrudan indirilebilir.
  * Ekrandaki aktif kullanıcı filtreleri (Aktif/Pasif durumu, Departman, Hizmet sınıfı, arama kutusu) otomatik olarak rapora aktarılır; böylece filtrelenmiş veriler rapor şablonuna birebir yansır.
  * "Rapor Merkezinde Aç" seçeneğiyle ekrandaki filtrelerin doğrudan merkezi Raporlama Modülü'ne devredilmesi sağlanır.
* **%100 Türkçe Standart Sistem Diyalogları:**
  * Sistem genelinde açılan tüm yerel bilgi, uyarı ve onay pencerelerindeki butonlar eksiksiz olarak Türkçeleştirildi (*Tamam, İptal, Evet, Hayır, Kaydet, Vazgeç, Kapat, Aç, Uygula, Sıfırla, Yardım*).
* **Rapor Tasarım Stüdyosu Kullanım Kolaylığı:**
  * Şablon tasarım ekranında sayfa yönü (Dikey/Yatay) ve varsayılan format (PDF/Excel) seçimleri pratik hale getirildi.

---

## 🏛️ 34. RADPYS V4.0.3.0: Klinik Raporlama, Şablon Tasarım Stüdyosu ve Evrensel Tutanak Merkezi

* **Klinik Raporlama ve Şablon Merkezi Kokpiti:**
  * Modern gösterge panelleri (Toplam Rapor, Kurumsal Şablonlar, Mevzuat Formları, Aylık Üretim İstatistiği).
  * Kategori filtreleme (Personel, İzin, Nöbet, Fiili Hizmet, Doz Takip, Sağlık Muayeneleri, Koruyucu Ekipman, Cihaz).
  * Canlı A4 sayfa önizleme (Dikey/Yatay yön ve sayfa uyumu hesaplayıcı).
  * Tek tıkla çıktı alma: PDF ve Excel (.xlsx).
  * Akıllı Dinamik Filtre Yönetimi: Parametresi olmayan raporlarda filtre paneli otomatik gizlenir, sadece kriter gerektiren raporlarda gösterilir.
* **Rapor ve Şablon Tasarım Stüdyosu:**
  * Yetkili kullanıcılar için sıfırdan şablon tasarlama ve sistem raporlarını kopyalayarak kuruma özel uyarlama imkânı.
  * Veri kaynaklarından dinamik sütun seçme, sıralama ve başlık yapılandırma.
  * Tutanak sekmesi ile bileşik (metin + tablo + karar) veya serbest metin tutanak tasarlama yeteneği.
* **Evrensel Tutanak ve Komisyon Karar Sihirbazı:**
  * Kurumlarda çok sayıda koruyucu ekipman veya cihaz için tek tek kâğıt basıp zaman ve kâğıt israfı yapmak yerine; **Giriş Paragrafı (Toplanma Gerekçesi) + Kayıt Döküm Tablosu + Sonuç / Karar Paragrafı + Komisyon İmza Heyeti** yapısını tek bir resmi evrakta birleştirir.
  * Tek tıkla resmi PDF olarak üretme ve doğrudan açma.
* **Tıklanabilir Değişken Butonları & Akıllı İmleç:**
  * Metin kutularının altındaki interaktif butonlar (*Tarih, Kurum Adı, Departman, Adet, Kullanıcı*) tıklandığı anda imlecin durduğu yere dinamik değişkeni ekler.
  * Rapor motoru bu değişkenleri güncel verilerle otomatik olarak doldurur.
* **Doğrudan Modül Entegrasyonları:**
  * Ana menüde ve Rapor Merkezi'nde doğrudan sihirbaza erişim butonları.
  * Koruyucu Ekipman (RKE) ve Tıbbi Cihaz yönetim tablolarından çoklu kayıt seçilerek tek tıkla **HEK Tutanağı** ve **Komisyon Kararı** başlatabilme.

---

## 🏛️ 35. RADPYS V4.0.3.4: 300 DPI Endüstriyel QR Baskı Paketi (.ZIP) ve Dürüst Kurum Bilgisi Standardı

* **Endüstriyel Toplu QR Baskı Paketi Motoru (.ZIP):**
  * Tıbbi Cihaz, Koruyucu Ekipman ve Ortam Dozu modüllerinde seçilen veya tüm aktif kayıtların QR kodları 300 DPI yüksek çözünürlüklü etiketler olarak tek bir `.zip` arşivinde toplanır.
  * Paketin içerisine profesyonel tabela ve etiket üreticilerine doğrudan iletilebilecek malzeme ve baskı teknik şartnamesi ile tüm kayıtların dökümünü içeren özet icmal listesi otomatik eklenir.
  * Medikal ortamlara, kimyasal dezenfektanlara ve radyasyona dayanıklı PVC / PET etiket standartları rehber olarak sunulur.
  * Toplu paketleme işlemleri arka planda yürütülerek arayüzün akıcı kalması sağlanır.
* **Şablon Tasarım Stüdyosu Akıllı Değişken Seçimi:**
  * Veri alanı listesindeki değişkenler tıklanabilir bağlantılara dönüştürülmüştür; tıklandığında metin editöründe imlecin bulunduğu konuma ilgili etiket otomatik eklenir.
* **Sıfır Sentetik Veri & Dürüst Kurum Bilgisi Standardı:**
  * Sistem ayarlarında resmi Kurum Adı girilmemişse, rapor antetlerinde asla uydurma veya farazi kamu kurumu adı üretilmez; kurumsal ve dürüst varsayılan olarak `RADPYS` kullanılır.

---

## 🏛️ 36. RADPYS V4.0.3.12: İki Aşamalı HEK & Tasfiye Süreci, Ayniyat EBYS Kapatma ve Mühürlü Dosya

* **Aşama 1: Otomatik Heyet Ön İnceleme Tutanağı (PDF):**
  * Tutanak Sihirbazı ile yeni bir HEK dosyası açıldığında, komisyon üyelerinin incelemesi ve imzalaması amacıyla tüm ekipman künyesini, hasar haritasını, muayene geçmişlerini ve imza çizgilerini barındıran antetli "Heyet Ön İnceleme ve İmza Tutanağı" PDF'i anında otomatik üretilerek güvenli evrak kasasına kaydedilir.
  * Belge üzerinde sarı renkli *"HEYET İMZASINDA & ÖN İNCELEME DOSYASI"* rozeti ve imza sürecini belirten resmi dipnotlar yer alır.
* **Aşama 2: Ayniyat EBYS Kapatma ve İmzalı Belge Yükleme:**
  * Komisyonca imzalanmış taranmış tutanak veya Ayniyat birimine yazılan resmi EBYS üst yazısı sisteme yüklenebilir.
  * Yüklenen belge şifreli evrak kasasında saklanır ve nihai tasfiye PDF dosyasına sayfa bazlı eklenerek dijital mühürle dondurulur.
* **Akıllı Tasfiye Dosyası Görüntüleme:**
  * Henüz EBYS yazısıyla kapatılmamış dosyalarda tasfiye belgesi açılmak istendiğinde, kullanıcıya doğrudan heyet ön inceleme tutanağını açmak isteyip istemediğini soran pratik yönlendirme penceresi sunulur.
* **Görsel Hasar Haritası ve Evrak Kasası Ekleri:**
  * Ekipman hasar noktaları, kritik organ bölgesi uyarıları ve skopi kontrol fotoğrafları optimize edilerek rapor içine gömülü olarak yerleştirilir; kalibrasyon raporları sayfa sayfa tasfiye dosyasına birleştirilir.

---

## 🏛️ 37. RADPYS V4.0.3.14: PDF ve Excel Resmi Belge Standardı, Evrak Yaşam Döngüsü (v1 Taslak -> v2 İmzalı) ve Onay Bekleyen Görevler Kokpiti

* **Resmi Belge Standardı (PDF + Excel):**
  * Kurumsal belge standartlarını korumak amacıyla değiştirilemez resmi raporlar için **PDF**, tabüler veri analizi için **Excel (.xlsx)** standardı getirildi.
* **Evrak Kasası Sürümleme & Sessiz Arşivleme (v1 Taslak -> v2 İmzalı):**
  * İmzalı bir evrak sisteme yüklendiğinde eski taslak kalıcı olarak silinmez; güvenli şekilde arşive çekilir, imzalı dosya güncel sürüm (v2) olarak kaydedilir ve tüm denetim izi korunur.
  * İlk taslaktan son geçerli sürüme kadar tüm belge tarihçesi görüntülenebilir ve raporlanabilir.
* **RGS / RSO Görevlendirme Evrak Yaşam Döngüsü:**
  * Kurumsal antetli resmi "RGS/RSO Görevlendirme ve Atama Yazısı" PDF taslağını oluşturma.
  * İmzalanmış nüshayı sisteme yükleyerek güncel sürüm yapma ve taslağı güvenle arşive alma.
  * Görevlendirmenin tüm evrak geçmişini tek tıkla izleyebilme.
* **RGS / RSO Belge Durumu ve Tarihçe Ekranı:**
  * Görevlendirme listesinde belge durumunu (*İmzalı, İmza Bekliyor, Ek Belge, Belge Yok*) gösteren belirgin rozetler.
  * Evrakın tüm kronolojik sürümlerini, dosya boyutunu, kayıt tarihini, işlemi yapanı ve dijital doğrulama özetini listeleyip geçmiş sürümleri tek tıkla açabilme imkânı.
* **Merkezi Onay Bekleyen Görevler Kokpiti Modernizasyonu:**
  * Talep türü, öncelik ve tarih aralığı odaklı çok kriterli filtreleme mekanizması.
  * Genişletilmiş detay paneli: Seçili görevin kaynak bilgilerini, talep eden personel profilini, değişiklik farklarını ve onay geçmişini tek ekranda sunar.
  * Semantik durum rozetleri ile güçlendirilmiş görsel hiyerarşi.
* **Web Portal Gerçek Zamanlı Bildirimler:**
  * Web portal üzerinden kullanıcı ve rol bazlı anlık bildirimler, okundu/okunmadı durum takibi ve onay uyarıları.
* **29 Modül Kapsamlı Yardım Portalı & Canlı Arama:**
  * Tüm modülleri kapsayan güncel yardım dokümantasyonu, hızlı arama motoru ve rehber içerikler.

---

## 🏛️ 38. RADPYS V4.0.3.15: Sistem Geneli Tablo Seçim ve Sıralama Kararlılığı

* **Tablo Sıralama ve Seçim Kararlılığı:**
  * Kullanıcıların tablolarda sütun başlıklarına tıklayarak sıralama yapması veya filtre uygulaması esnasında meydana gelebilecek satır kayması riski tamamen ortadan kaldırıldı.
  * Tabloda sıralama veya filtreleme yapılsa dahi, seçilen satır her zaman doğru kayda kilitlenir; yanlış kaydın açılması veya silinmesi engellenir.
* **Kapsamlı Modül Güvenliği:**
  * Fiili hizmet dağılım ve rapor tabloları, 18 referans tanım listesi (birimler, unvanlar, izinler, tatiller, eğitimler vb.), 6 onay masası tablosu ve ortam dozu ölçüm listelerinde tam seçim emniyeti sağlandı.
* **Akıcı Arayüz ve Diyalog Kararlılığı:**
  * Açılır kutu ve dinamik liste geçişlerinde pencerelerin donmadan, akıcı ve kararlı çalışması güvenceye alındı.

---

## 🏛️ 39. RADPYS V4.0.3.16: NDK RSGD-KLV-014 Tıbbi Radyoloji Radyasyondan Korunma Programı (RKP) Doküman Motoru

* **Resmi NDK KLV-014-EK Başvuru Dosyası Motoru:**
  * Nükleer Düzenleme Kurumu (NDK) lisans müracaat belgelerinde ve periyodik denetimlerinde sağlık kuruluşlarınca tanzimi zorunlu olan **RSGD-KLV-014** ve **KLV-014-EK** (*Tıbbi Radyoloji Uygulamalarında Radyasyondan Korunma Programı*) resmi başvuru dosyasının ve talimat kitapçığının canlı veritabanı kayıtlarından tek tıkla otomatik üretilmesi sağlandı.
  * **KB.1 & KB.2 (Kuruluş ve Yetkili Bilgileri):** Ana kuruluş unvanı, adresi, mesul müdür ve başhekim bilgileri program ayarlarından dinamik derlenir.
  * **KB.3 (Radyasyondan Korunma Sorumluları):** Kurumdaki resmi RKS/RSO atamaları, diploma mesleği, T.C. kimlik, sorumlu birim ve dozimetre tipiyle listelenir.
  * **KB.4 (Radyasyon Görevlileri Tablosu):** Personel, Dozimetre ve Sağlık Muayeneleri modülleri çapraz taranarak çalışma koşulu (A/B), sağlık raporu geçerliliği ve dozimetre tipi tek tabloda tanzim edilir.
  * **KB.5 (Tıbbi Radyoloji Cihazları Tablosu):** Cihaz cinsi, kullanım şekli (sabit/mobil), marka, model, seri no, oda/kat konumu, maksimum kV ve mA değerleri ile denetimli/gözetimli alan sınırları otomatik derlenir.
  * **KB.6 & KB.7 (Radyasyon Ölçüm Cihazları ve Dozimetreler):** Kurumdaki survey metrelerin ve aktif dozimetrelerin marka, model, seri no, ölçüm aralığı ve kalibrasyon geçerlilik tarihleri eklenir.
  * **KB.8 (Koruyucu Donanım Matrisi):** Koruyucu ekipman envanteri taranarak cihaz türleri bazında Kurşun Önlük, Tiroid, Gonad, Kurşun Gözlük, Hareketli Paravan ve Saçak sayıları resmi NDK matrisinde birleştirilir.
* **KLV-014 II. Bölüm Talimat Kitapçığı (T.1 - T.11):**
  * NDK rehberindeki 11 zorunlu talimat (Cihaz güvenli kullanımı, çalışan ve hasta korunması, alan sınırlandırma, koruyucu donanım kullanımı, ortam dozu ölçümü, dozimetri ve 2.0 mSv eşik aşımı, tıbbi gözetim, cihaz kalite temini, acil durum/kaza yönetimi ve hizmet içi eğitim) resmi mevzuat metinleriyle eksiksiz olarak evraka dahil edilir.
* **III. Bölüm Yürürlük ve Resmi İmza Heyeti:**
  * RKS ve Kurum Mesul Müdürü / Başhekim resmi onay, mühür ve imza blokları otomatik oluşturulur.
* **Cihaz Yönetimi Ekranından Doğrudan Erişim:**
  * Cihaz yönetimi ekranındaki menüden *"NDK KLV-014 RKP Belgesi Üret"* seçeneğiyle doğrudan resmi evrak oluşturulabilir.

---

## 🧙‍♂️ 40. RADPYS V4.0.3.17: 8 Adımlı NDK RKP Hazırlama Sihirbazı ve Hizmet İçi Eğitim (LMS) Entegrasyonu

* **Kalite & Gelişim Menüsünde "NDK RKP Sihirbazı":**
  * Ana penceredeki Kalite & Gelişim menüsünden doğrudan sihirbaza erişim.
* **8 Adımlı Modern RKP Sihirbaz Sayfası:**
  * **Adım 1 (KB.1 & KB.2):** Lisans sahibi kuruluş ve imza yetkilisi bilgileri formu; *"Kurum Ayarlarından Doldur"* seçeneği ve ayarları kalıcı kaydetme imkânı.
  * **Adım 2 (KB.3):** Radyasyondan Korunma Sorumluları (RKS) canlı tablosu ve anlık yenileme.
  * **Adım 3 (KB.4):** Aktif radyasyon görevlileri tablosu (çalışma koşulu A/B, sağlık raporu, dozimetre tipi) ve canlı personel arama.
  * **Adım 4 (KB.5):** Tıbbi radyoloji cihazları envanteri, oda/kat konumu, maksimum kV/mA değerleri ve filtreleme.
  * **Adım 5 (KB.6 & KB.7):** Survey metre ölçüm cihazları ve aktif kişisel dozimetreler tablosu.
  * **Adım 6 (KB.8):** Cihaz türleri bazında Kişisel Koruyucu Donanım matrisi (kurşun önlük, tiroid, gonad, gözlük, paravan, kapı kilidi).
  * **Adım 7 (T.1 - T.11):** NDK standartlarındaki 11 zorunlu talimatın canlı metin düzenleyicisi; *"Varsayılan NDK Metnine Sıfırla"* ve *"Hizmet İçi Eğitim Modülüne Güncelle"* seçenekleri.
  * **Adım 8 (Belge Üretimi & Onay):** RKP hazırlık özet kartları (kuruluş, RKS, çalışan, cihaz, talimat durumu), tanzim tarihi ve revizyon no seçimi ile tek tıkla resmi başvuru dosyası üretme ve güvenli evrak kasasına arşivleme.
* **Hizmet İçi Eğitim Modülü Çift Yönlü Senkronizasyonu:**
  * 11 resmi talimat Hizmet İçi Eğitim kataloğuna otomatik bağlanır; sihirbazda talimat güncellendiğinde eğitim kataloğu da anında senkronize olur.

---

## 📋 41. RADPYS V4.0.3.18: Resmi Yatay A4 Mizanpaj ve Eksiksiz NDK Başvuru Dosyası

* **Resmi Yatay A4 (Landscape) Mizanpaj:**
  * Orijinal NDK kılavuz formatı gereği 13 sütunlu cihaz ve donanım tablolarının sütun kayması olmadan tam yerleşebilmesi için belge motoru standart yatay A4 düzenine geçirildi.
* **Eksiksiz Tüm Tablolar (KB.1 - KB.8):**
  * Kuruluş Bilgileri (KB.1), Yetkili Bilgileri (KB.2), RKS Tablosu (KB.3), Radyasyon Görevlileri Tablosu (KB.4), Cihazlar Tablosu (KB.5), Radyasyon Ölçüm Cihazları (KB.6), Aktif Kişisel Dozimetreler (KB.7) ve 13 sütunlu Koruyucu Donanım Matrisi (KB.8) resmi dipnotlarıyla birlikte eksiksiz tamamlandı.
* **Sihirbaz Tablolarında Canlı Eşitleme:**
  * Sihirbaz ekranındaki koruyucu donanım matrisi 13 sütuna çıkartıldı; aktif dozimetre tablosu canlı sistem kayıtlarıyla senkronize edildi.

---

## 📋 42. RADPYS V4.0.3.19: SKS v6.1 Sağlıkta Kalite Standartları ve Kalite Dokümanları Entegrasyonu

* **Hizmet İçi Eğitim Kataloğunda 'Kalite Dokümanları' Standardizasyonu:**
  * T.1 - T.11 talimatları 'Kalite Dokümanları' kategorisi altına bağlandı ve personellere yıllık zorunlu eğitim olarak tanımlandı.
* **Kurumsal Kalite Doküman Kodları ve Standart Referansları:**
  * Her talimata kurumsal SKS kalite doküman kodu ve standart referansı atandı:
    * **T.1:** `TL.RAD.01` (Tıbbi Radyoloji Cihazlarının Güvenli Kullanım Talimatı - SKS 6.1 / NDK KLV-014)
    * **T.2:** `TL.RAD.02` (Radyasyon Görevlilerinin Korunma Talimatı - SKS SRG11.04)
    * **T.3:** `TL.RAD.03` (Hastaların Korunması Talimatı - SKS Hasta Güvenliği)
    * **T.4:** `TL.RAD.04` (Alan Sınırlandırma ve Giriş-Çıkış Kontrol Talimatı - SKS Alan Güvenliği)
    * **T.5:** `TL.RAD.05` (Koruyucu Donanım Kullanım ve Periyodik Muayene Talimatı - DIN 6857-1 / SKS 6.1)
    * **T.6:** `TL.RAD.06` (Radyasyon Ölçüm / Ortam Dozu İzleme Talimatı - SKS Ortam Dozu)
    * **T.7:** `TL.RAD.07` (Görevli Sınıflandırma ve Dozimetri Takip Talimatı - SKS Dozimetri Takip)
    * **T.8:** `TL.RAD.08` (Tıbbi Gözetim ve Periyodik Muayene Talimatı - SKS Periyodik Muayene)
    * **T.9:** `TL.RAD.09` (Cihaz Kalite Temini, Kabul Testleri ve Bakım-Onarım Talimatı - SKS Tıbbi Cihaz QA/QC)
    * **T.10:** `TL.RAD.10` (Acil Durum ve Kaza Işınlanmaları Talimatı - SKS Olay Bildirim & DÖF)
    * **T.11:** `TL.RAD.11` (Hizmet İçi Eğitim Talimatı - SKS Eğitim 2.1)
* **Resmi RKP Belgesinde Çift Yönlü Standart Güvencesi:**
  * RKP form çıktısında her talimatın altında kurumsal kalite doküman kodu, kategori bilgisi, SKS referansı ve sistemde yürürlükte olduğu resmi olarak belgelendi.
  * Belge sonuna Sağlıkta Kalite Standartları (SKS v6.1) ve NDK RSGD-KLV-014 resmi uyum dipnotu eklendi.

---

## 📋 43. RADPYS V4.0.3.25 - V4.0.3.26: Akıcı Pencere Deneyimi ve Kusursuz Türkçe Arama Eşleme

* **Akıcı Pencere Kapatma Deneyimi:**
  * NDK RKP Hazırlama Sihirbazı veya alt pencereler kapatıldığında ekranın pürüzsüzce ana çalışma alanına dönmesi sağlandı; arka planda boş/gri pencere kalması engellendi.
  * Sistemdeki tüm kapatma butonları kurumsal görsel temayla ve emniyetli pencere yönetimiyle standardize edildi.
* **Kusursuz Türkçe Arama ve Karakter Eşleme:**
  * Arama ve filtreleme alanlarında Türkçe karakterlerin (`I-ı`, `İ-i`, `Ş-ş`, `Ğ-ğ` vb.) büyük/küçük harf duyarsızlığı giderilerek unvan, personel ve şablon aramalarında kusursuz eşleşme sağlandı.

---

© 2026 Cem Kara. RADPYS V4 Kurumsal Radyasyon Personel Yönetim Sistemi. Tüm Hakları Saklıdır.


