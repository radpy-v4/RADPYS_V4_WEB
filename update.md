# RADPYS V4 — Yenilikler Kılavuzu ve Sürüm Notları (What's New)

Bu kılavuz; **RADPYS V4 Kurumsal Radyasyon ve Personel Yönetim Sistemi** kapsamında kullanıma sunulan yenilikleri, mevzuat uyumluluklarını ve iş akışı kolaylıklarını **son kullanıcılar, radyasyondan korunma sorumluları (RKS), birim amirleri ve hastane yöneticileri** için sade ve fayda odaklı olarak sunar.

> **💡 Kılavuz Yapısı Hakkında:** Her sürüm notu; işinizi doğrudan kolaylaştıran **Öne Çıkan Yenilikler** özetiyle başlar ve özelliğin hangi operasyonel ihtiyacı çözdüğünü anlatan **Fayda Odaklı Açıklamalar** ile devam eder. Sürümler en yeniden en eskiye doğru sıralanmıştır.

---

## 🔄 RADPYS V4.0.5.22: Birim Çizelgesinde Hızlı Nöbet Değişimi, 3 Seçenekli Sadeleştirilmiş Havuz ve Takas Ekranı, 24-Saatlik Ön Süre Güvencesi, Aynı Ay İçi Takas Kuralı, Yayınlanmış Dönem Talep Koruması ve Dinlenme Standartları

Bu sürümle birlikte **Birim Nöbet Çizelgesi ve Nöbet Değişim / Becayiş** modüllerinde personelin nöbet takas ve devir işlemleri sadeleştirilerek tek tıkla yürütülebilir hale getirilmiş; personeller arası değişimlerde 24 saatlik ön süre ve aynı ay takas güvenceleri devreye alınmış; nöbet listesi onaylanıp yayınlanmış aylar için ön hazırlık isteklerinin açılması engellenerek süreç disiplini sağlanmış; NDK ve SKS mevzuatı uyarınca nöbet dinlenme süreleri otomatik kontrole bağlanmış ve gebelik bildirim raporları kalıcı evrak kasasına alınmıştır:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Birim Çizelgesinde Doğrudan [⇄ Değiş] Butonu:** Personel, birim nöbet çizelgesinde kendine ait nöbet slotlarının üzerinde yer alan hızlı değişim butonuna basarak doğrudan değişim penceresine ulaşabilir.
* **Yayınlanmış Nöbet Dönemlerinde Talep Koruması:** Birim amiri tarafından onaylanıp **Yayında** statüsüne alınmış aylar (örneğin Kasım ayı) için ön hazırlık mahiyetinde yeni mazeret, nöbet yazılsın/yazılmasın veya fazla mesai talebi açılamaz. Çizelge yayınlandıktan sonraki tüm nöbet hareketleri doğrudan **Birim Nöbet Çizelgesi** veya **Nöbet Değişim / Havuz** ekranları üzerinden yürütülür. Sistem, personelin yayınlanmış bir ayı seçmesi durumunda anında sarı bilgilendirme paneli gösterir ve formu korumaya alır.
* **3 Seçenekli Sade Değişim Penceresi:** Nöbet değişim ekranı gereksiz alanlardan arındırıldı:
  - **Havuz:** Meslektaş veya tarih aramadan nöbeti tek tıkla birim havuzuna açar.
  - **Birebir (Takas):** Anlaşılan meslektaş seçildiğinde meslektaşın nöbetleri otomatik filtrelenerek açılır listede sunulur; tek tıkla iade nöbeti seçilir.
  - **Devir (Tek Yönlü):** Karşıdan nöbet istemeden nöbeti meslektaşa devreder (Yalnızca fazla mesai nöbetleri için geçerlidir).
* **24-Saatlik Ön Süre Güvencesi:** Nöbetin başlamasına 24 saatten az bir süre kaldığında personeller arası doğrudan sistem üzerinden talep oluşturulması engellendi. Acil ve beklenmedik durumlarda birim amirine sözlü bilgi verilerek amirin yönetim panelinden acil düzenleme yapması esası getirildi.
* **Aynı Ay İçi Takas Kuralı (Puantaj Güvencesi):** Karşılıklı nöbet takasları yalnızca aynı takvim ayı içindeki nöbetler arasında yapılabilir. Farklı aylar arası takasın doğurabileceği aylık puantaj açığı ve yasal 35/40 saatlik çalışma saati dengesizliği önlendi.
* **Geçmiş Tarihli Talep Engeli:** Geçmişe dönük nöbetler için devir veya takas talebi açılması hem nöbeti veren hem de devralan personel için engellendi.
* **Takasta Meslektaş Nöbetlerini Otomatik Filtreleme:** Nöbet takas edilirken karşı meslektaşın adı seçildiği anda o personelin çizelgedeki aktif ve ilgili ayın kalan günlerine ait nöbetleri açılır menüye getirilir; personelin elle tarih araması ve yazım hatası yapması tamamen önlenir.
* **24 Saatlik Zorunlu Dinlenme ve Çakışma Güvencesi:** NDK ve Sağlık Bakanlığı SKS standartları uyarınca, 24 saatlik ağır nöbet tutan personelin hemen ertesi gün veya önceki gün tekrar nöbet devralması otomatik olarak engellenir.
* **Gebelik Bildirimi Doktor Raporu Güvencesi:** Personelin ilettiği hekim ve heyet raporları dijital evrak kasasında güvenle arşivlenir ve birim amirinin onayına sunulur.
* **Personel İstek Formunun Akıllı Alanları ve Sadeleştirilmesi:** Resmi belge ve idari onay gerektiren muafiyetler personelin rutin istek formundan kaldırılarak menü 4 temel günlük ihtiyaca odaklandı:
  - **Eğitim Kısıtı:** Hafta sonu günleri (Cumartesi-Pazar) kaldırılarak yalnızca hafta içi 5 ders gününe (`Pazartesi - Cuma`) bağlandı ve dönem tarih aralığı doğrudan açık hale getirildi.
  - **Nöbet Yazılsın / Yazılmasın:** Tarih aralıkları gizli onay kutusundan kurtarılarak form açıldığında doğrudan doldurulabilir duruma getirildi; tek tıkla "Tüm Ay Boyunca Nöbet Yazılmasın" seçeneği eklendi.
  - **Fazla Mesai Talebi:** İlgili ay seçici, iki net tercih ("Fazla Mesai İstemiyorum (0 Saat)" ve "Fazla Mesai Almak İstiyorum"), hızlı saat butonları (+16, +24, +32, +48, +60) ve 130 saatlik yasal tavan uyarısıyla son derece pratik ve modern bir yapıya kavuşturuldu.

### 📅 Birim Çizelgesinde Hızlı Nöbet Değişimi

* **Slot Üzerinden Anında Aksiyon:** Birim çizelgesini inceleyen personel, kendi nöbet kutucuğundaki **[⇄ Değiş]** butonuna tıkladığında tarih, vardiya ve birim bilgisi otomatik seçilmiş olarak değişim ekranı açılır. Böylece tarihleri yeniden yazma veya arama zahmeti ortadan kalkar.

### 🔄 3 Modlu Sadeleştirilmiş Değişim Deneyimi

* **Özet Nöbet Bilgi Kartı:** Değişime konu olan nöbet ekranın üst kısmında **Tarih ➔ Vardiya ➔ Birim** şeklinde net olarak özetlenir.
* **Akıllı ve Koşullu Alanlar:**
  * **Havuz Seçeneğinde:** Karşı personel veya iade tarihi bilgisi istenmez, tek tıkla açık değişime bırakılır.
  * **Birebir Takas Seçeneğinde:** Yalnızca aynı birim ve aynı hizmet sınıfındaki aktif meslektaşlar listelenir; karşı tarafın iade edeceği nöbetin tarihi ve vardiyası girilir.
  * **Tek Yönlü Devir Seçeneğinde:** Karşı taraftan nöbet talep edilmez; yalnızca devralacak meslektaş seçilir. Mevzuat gereğince asli çalışma saati devredilemeyeceği için sistem kullanıcıyı nazikçe bilgilendirir.
* **Yenilenen Birebir Devir ve Takas Ekranı:** Bağımsız değişim sayfasındaki karmaşık formlar ve mükerrer uyarı kutuları temizlendi; süreç sadeleştirilerek hızlı bir akışa kavuşturuldu.

### ⏱️ Nöbete Kalan Süre Güvencesi (En Az 24 Saat Önceden Bildirim)

* **Neden Gerekli?** Nöbete birkaç saat kala yapılan son dakika değişimleri servis amirlerinin haberi olmadan birimlerde personel açığı oluşmasına veya görev devir-tesliminde aksamalara yol açabilmekteydi.
* **Nasıl İşliyor?** Nöbet başlangıcına 24 saatten az kaldığında sistem talep butonlarını otomatik olarak korumaya alır ve kullanıcıya bilgilendirme mesajı gösterir. Bu tür acil mazeret durumlarında personel birim amirine bilgi verir ve yetkili amir yönetim panelinden doğrudan ikame personel ataması gerçekleştirebilir.

### 📊 Aynı Ay İçi Takas ve Puantaj Güvencesi

* **Neden Gerekli?** Bir personelin Mart ayındaki nöbetini Nisan ayındaki bir nöbetle takas etmesi durumunda, Mart ayı puantajında yasal çalışma saati açığı oluşmakta ve personel maaşında kesinti riski doğabilmekteydi.
* **Nasıl İşliyor?** Sistem takas edilecek iki nöbetin de aynı takvim ayı içinde olmasını şart koşar. Gelecek ayların nöbet çizelgeleri amir tarafından onaylanıp yayınlandığında, personeller o ayın nöbetlerini kendi içinde serbestçe takas edebilir.

### 🔒 Yayınlanmış Nöbet Dönemlerinde Talep Kilidi ve Süreç Disiplini

* **Neden Gerekli?** Nöbet hazırlık formları (mazeret, nöbet istek/kısıt ve fazla mesai), henüz çizelgesi hazırlanmamış gelecek ayların adil ve dengeli planlanabilmesi için kullanılan ön hazırlık araçlarıdır. Çizelge birim amiri tarafından kesinleştirilip yayınlandıktan sonra bu formlar üzerinden yeni talep girilmesi, yayınlanmış ve mutabakatı yapılmış çizelgenin yapısını bozar ve sistemde karmaşaya yol açar.
* **Nasıl İşliyor?** Personel istek formunda seçilen tarih aralığı veya ayın (örneğin Kasım ayı) nöbet listesi birim amiri tarafından onaylanıp yayınlanmışsa, sistem bunu anında tespit eder. Arayüzde sarı uyarı paneliyle *"Nöbet Çizelgesi Yayında — Yeni Talep Açılamaz"* uyarısı belirir ve form gönderme butonu *"Dönem Yayında (Kilitli)"* durumuna geçerek kilitlenir. Personelin bu dönem için yapacağı nöbet devir veya takas işlemleri ise doğrudan **Birim Nöbet Çizelgesi** ve **Nöbet Değişim / Havuz** ekranları üzerinden güvenle yürütülür.

### 🛡️ Mevzuat ve Dinlenme Süresi Güvencesi

* **Ardışık 24 Saatlik Nöbet Engeli:** Ağır radyasyon ortamında çalışan personelin yorgunluk ve dikkat kaybını önlemek amacıyla, 24 saatlik nöbetin hemen öncesi veya sonrasındaki güne denk gelen nöbet devir talepleri mevzuat dinlenme kuralı nedeniyle reddedilir.

---

## 🗺️ RADPYS V4.0.5.21: Mimari Kat Planı Krokilerinde Merkezi Saklama Güvencesi, 90° Yön Döndürme Motoru ve Web Portal Çoklu Oda Sınırları

Bu sürümle birlikte **Ortam Radyasyon Dozu ve Mimari Kroki Haritası** modülünde kat planları doğrudan merkezi veritabanı güvencesine alınmış; mimari krokileri yönüne göre sola/sağa döndürme imkanı getirilmiş ve Web Portal üzerinde tanımlı tüm odaların sınırları eksiksiz olarak haritaya yansıtılmıştır:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Merkezi Veritabanı ile Kayıpsız Kroki Güvencesi:** Yüklenen mimari kat planları doğrudan kurumsal veritabanında saklanır ve hızlı kullanım için yerel önbelleğe alınır; bilgisayar veya kullanıcı değişse bile tüm kat planları otomatik olarak eksiksiz geri yüklenir.
* **Kat Planı 90° Döndürme Yeteneği:** Mimari planların yönelimini sahaya tam uyumlu hale getirmek için saat yönünde veya tersinde 90° döndürme kontrolleri eklendi; plan döndürüldüğünde üzerindeki ölçüm noktaları, cihazlar ve oda sınırları hassas biçimde korunur.
* **Web Portalda Tüm Oda Sınırlarının Canlı Görünümü:** Masaüstü uygulamasında belirlenen tüm oda alanları ve sınırları Web Portal haritası üzerinde de belirgin kesikli çerçeveler ve oda başlıklarıyla eşzamanlı olarak görüntülenir.

### 🏢 Mimari Kat Planlarında Kesintisiz Veritabanı ve Önbellek Mimarisi

* **Kayıpsız ve Otomatik Geri Yükleme:** Hastane veya klinik binalarına ait kat planları veritabanı güvencesine alınarak tekilleştirildi. Yerel diskte dosya taşınsa veya silinse dahi, sistem planı çağrıldığı anda saniyeler içinde otomatik olarak geri yükler ve işlem kesintisini önler.
* **Görsel Yükleme Performansı:** Kat planları ilk çağrılışta yerel önbelleğe alınarak sonraki açılışlarda anında ekrana gelir; harita üzerinde pin yerleştirme, sürükleme ve ölçüm görüntüleme işlemleri yüksek hızda çalışır.

### 🔄 Mimari Plan Yönünü Sahaya Göre Hizalama (Döndürme Motoru)

* **Tek Tıkla Sola / Sağa Döndürme:** Kat planı yükleme ve inceleme ekranlarında yer alan **[Sola Döndür]** ve **[Sağa Döndür]** butonları sayesinde mimari çizimler 90°, 180° veya 270° açılarla çevrilerek odaların gerçek yönelimiyle birebir eşleştirilebilir.
* **Pin ve Oda Sınırlarını Otomatik Dönüştürme:** Plan döndürüldüğünde, kullanıcıların haritaya daha önce yerleştirdiği ortam dozu ölçüm noktaları, cihaz konumları ve tanımlı oda sınırları bozulmadan yeni açıya göre milimetrik doğrulukla dönüştürülür.

### 🌐 Web Portalda Çoklu Oda Sınırları ve Bölge Takibi

* **Tüm Odaların Haritada Net Belirlenmesi:** Web Portal Ortam Dozu ve İnteraktif Harita sekmesinde daha önce yalnızca tek bir genel alan kutusu yerine, o kata ait tanımlanmış tüm odalar (**Acil Dinlenme**, **Acil BT**, **Acil Röntgen**, **Acil USG** vb.) kesikli renkli sınırları, oda kodları ve odaklanma vurgularıyla birlikte eksiksiz olarak gösterilir.
* **Oda Seçiminde Canlı Odaklanma:** Listeden veya haritadan bir oda seçildiğinde harita ilgili odayı netleştirerek sınırlarını vurgular; böylece çalışanlar ve denetçiler hangi ölçüm noktasının hangi odaya ait olduğunu anında teşhis eder.

---

## ☢️ RADPYS V4.0.5.20: Resmi NDK/TENMAK RD.F43 Doz Araştırma Formu Birebir Uyumu, 3 Adımlı Hızlı Sihirbaz, 5 Aşamalı Süreç Rozetleri ve Bağlantı Kurtarma Asistanı

Bu sürümle birlikte **Kişisel Dozimetre Takibi ve Doz Araştırma (RD.F43)** süreci resmi NDK/TENMAK matbu formuyla masaüstü, Web Portal ve resmi çıktılarda birebir eşitlenmiş; araştırma sihirbazı **3 adıma** indirilerek hızlandırılmış, aksiyon kokpitine **5 aşamalı canlı süreç rozetleri** eklenmiş ve veritabanı bağlantı kesintileri için akıllı kurtarma ekranı devreye alınmıştır:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Resmi NDK/TENMAK RD.F43 Formuyla %100 Birebir Uyum ve 3 Adımlı Sihirbaz:** Sayfa 1 (Çalışan Beyanı) ve Sayfa 2 (RKS Saha İncelemesi) soruları resmi formla birebir hizalandı; karar motoru, nihai tutanak, DÖF ve evrak yükleme adımları tek bir **3. Karar, DÖF ve Evrak** ekranında birleştirildi.
* **5 Aşamalı Canlı `RD.F43 Raporu` Süreç Rozetleri:** Aksiyon kokpitindeki tek tip "Mevcut" etiketi kaldırılarak dosyanın gerçek durumunu gösteren **`HAZIRLANMADI` ➔ `BEYAN BEKLİYOR` ➔ `BEYAN GELDİ` ➔ `RKS İNCELEMEDE` ➔ `TAMAMLANDI`** rozetleri getirildi.
* **Çalışan Beyanı Kilidi ve Eksiksiz Soru Güvencesi:** İnceleme başlatıldığında personele Web Portal üzerinden anında bildirim gider; çalışan kendi beyanını iletmeden ve RKS tüm saha inceleme sorularını eksiksiz yanıtlamadan taslak kaydı veya dosya kapatma işlemine izin verilmez.

### 📋 Resmi NDK/TENMAK RD.F43 Birebir Uyumu ve 3 Adımlı Sihirbaz

* **Sayfa 1 ve Sayfa 2 Tam Soru Eşleşmesi:** Çalışanın Web Portaldan doldurduğu **1. Çalışan Beyanı (Sayfa 1)** bölümündeki 9 temel soru, koşullu açıklama alanları ve iki kademeli dozimetre taşıma konumu ile RKS'nin doldurduğu **2. RKS Saha İncelemesi (Sayfa 2)** bölümündeki 7 teknik denetim sorusu ve genel kanaat alanları resmi NDK/TENMAK formuyla birebir uyumlu hale getirildi.
* **Tek Ekranda Karar, DÖF ve Aksiyon Kapatma (3. Adım):** Eski 4 adımlı yapı sadeleştirilerek **3. Karar, DÖF ve Evrak** adımında birleştirildi. **[Önerilen Kararı ve Bulguları Forma Aktar]** butonuna basıldığında bilimsel teşhis ve gerekçe metni resmi tutanak alanlarına otomatik işlenir ve **[Aksiyonu Kapat]** butonuyla pencereden çıkmadan dosya tek tıkla kapatılıp arşivlenir.
* **Çalışan Beyanı Önceliği ve Gerçek Yanıt Doğrulaması:** Hakkında inceleme başlatılan personel Web Portal üzerinden beyanını göndermeden RKS tarafında erken kayıt veya kapatma yapılması engellenir. Ayrıca henüz işaretlenmemiş hiçbir soru sistem tarafından varsayılan olarak "Hayır" kabul edilmez; denetim güvenliği için tüm soruların açıkça yanıtlanması zorunlu tutulur.

### 🎯 Dozimetre Aksiyon Kokpitinde 5 Aşamalı Canlı Süreç Takibi

* **Tek Tıkla `[İnceleme Başlat]` ve Otomatik Görev Bildirimi:** Aksiyon kokpitinde eşik aşımı veya anomali satırı seçilip **[İnceleme Başlat]** butonuna basıldığında araştırma kaydı anında açılır ve ilgili çalışanın Web Portal ekranına beyan doldurma görevi düşer.
* **Anlık Aşama Rozetleri:** RKS ve kurum yöneticileri, **RD.F43 Raporu** sütunundaki renkli süreç rozetleri sayesinde hangi dosyanın henüz başlatılmadığını (**`HAZIRLANMADI`**), hangisinde personelin yanıtının beklendiğini (**`BEYAN BEKLİYOR`**), hangi personelin beyanını gönderdiğini (**`BEYAN GELDİ`**), hangisinin RKS değerlendirmesinde olduğunu (**`RKS İNCELEMEDE`**) ve hangisinin resmi olarak kapandığını (**`TAMAMLANDI`**) tabloyu açmadan tek bakışta izler.

### 🔌 Bağlantı Kurtarma Asistanı ve Yenilenen Güncelleme Penceresi

* **Veritabanı Bağlantı Tanılama Ekranı:** Uygulama açılışında hastane ağı veya sunucu kaynaklı bir veritabanı erişim sorunu yaşandığında teknik hata mesajı yerine bağlantı durumunu anlaşılır şekilde açıklayan ve yeniden bağlanma imkanı sunan kurumsal bağlantı kurtarma penceresi açılır.
* **Zenginleştirilmiş Sürüm Bilgilendirme Penceresi:** Yeni sürüm bildirim penceresi okunabilirliği artırılmış modern kart düzeniyle yenilendi.

---

## 🏢 RADPYS V4.0.5.19: Merkezi Birim Sorumlulukları ve Saha Görev Tahsisi (Delegasyon) Kokpiti, Kişiye Özel Yetki Matrisi Ergonomisi ve Güvenli Parola Doğrulama

Bu sürümle birlikte **Kullanıcı ve Rol Yönetimi** modülüne hastane organizasyon yapısına tam uyumlu **Birim Sorumlulukları ve Saha Görev Tahsisi** merkezi eklenmiş, **Kişiye Özel Yetkiler** ile **Rol Yetki Matrisi** ekranlarının görsel ergonomisi yenilenmiş ve parola güncelleme altyapısı güçlendirilmiştir:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Merkezi Birim Sorumlulukları ve Saha Görev Tahsisi (Delegasyon) Kokpiti:** Farklı ekranlara dağılmış olan birim sorumlusu seçimleri kaldırılarak Kullanıcı ve Rol Yönetimi > Birim Sorumlulukları sekmesi altında tek bir merkezde toplandı.
* **Kişiye Özel Yetkiler ve Rol Matrisinde Ergonomik Görünüm:** Kullanıcı İşlemleri ekranı açıldığında sol kullanıcı listesi ile sağdaki Kişiye Özel Yetkiler paneli ideal genişlik oranıyla açılır; kullanıcı e-posta adresleri, modül adları, sütun başlıkları ve Erişim Kapsamı (Kendi / Birim / Tüm) seçenekleri hiçbir kırpılma olmadan tek satırda net olarak görüntülenir.
* **Geriye Dönük Uyumlu Parola Güncelleme Güvencesi:** Eski dönemlerden aktarılan veya farklı özet formatına sahip kullanıcı hesaplarında parola değiştirilirken ya da doğrulama yapılırken oluşabilen format uyuşmazlıkları tamamen giderilerek masaüstü ve Web Portal genelinde kesintisiz parola güncelleme güvencesi sağlandı.

### 🏥 Merkezi Birim Sorumlulukları ve Saha Görev Tahsisi (Delegasyon) Kokpiti

* **Tek Merkezden Birim ve Görev Yönetimi:** Farklı ekranlara dağılmış olan birim sorumlusu seçimleri kaldırılarak **Kullanıcı ve Rol Yönetimi > Birim Sorumlulukları** sekmesi altında tek bir merkezde toplandı. Sol paneldeki kart listesinde tüm departmanlar, mevcut birim sorumluları ve aktif saha görev sayıları (**`X görev`** rozeti) tek bakışta izlenebilir.
* **Asli Departman Sorumlusu ve Saha Görev Tahsisi Ayrımı:** Klinik saha işleyişine uygun olarak iki kademeli yetki yapısı kurgulandı:
  1. **Departman Sorumlusu (Tek Asli Amir):** Her departmanın nöbet planlama, izin ve genel işleyişten sorumlu yalnızca bir asli birim sorumlusu bulunur ve **[Sorumluyu Değiştir]** butonuyla saniyeler içinde atanır veya değiştirilir.
  2. **Saha Görev Tahsisi (Delegasyon):** Birim sorumlusunun sahada iş yükünü paylaşmak amacıyla birimdeki çalışanlara devredilebilen operasyonel görevler (**RKE Muayene ve Sayım Görevi**, **Cihaz Bakım, Kalibrasyon ve Arıza Takibi**, **Ortam Radyasyon Ölçüm ve Kroki Görevi**, **Dozimetre Dağıtım ve Takip Görevi**, **Birim İçi Eğitim Koordinasyon Görevi**) **[Görev Ata]** penceresinden ilgili personele tahsis edilir ve **Görevler** tablosundan takip edilir.

### 🎛️ Kişiye Özel Yetkiler ve Rol Matrisinde Ergonomik Görünüm

* **Dengeli Açılış Oranı ve Tam Okunabilir Sütunlar:** **Kullanıcı İşlemleri** ekranı açıldığında sol kullanıcı listesi ile sağdaki **Kişiye Özel Yetkiler** paneli ideal genişlik oranıyla açılır; kullanıcı e-posta adresleri, modül adları, sütun başlıkları ve **Erişim Kapsamı** (**Kendi / Birim / Tüm**) seçenekleri hiçbir kırpılma olmadan tek satırda net olarak görüntülenir.
* **Yenilenen Onay Kutuları ve Kapsam Göstergeleri:** Yetki tablolarındaki onay kutuları ve kapsam seçim düğmeleri klinik tasarım sistemine uygun zarif görünümüne kavuşturuldu; özel istisna tanımlanmayan satırlarda kullanıcının kendi rolünden devraldığı varsayılan erişim kapsamının (**Kendi**, **Birim** veya **Tüm**) açıkça görülmesi sağlandı.

### 🔐 Geriye Dönük Uyumlu Parola Güncelleme Güvencesi

* **Sorunsuz Parola Değişimi:** Eski dönemlerden aktarılan veya farklı özet formatına sahip kullanıcı hesaplarında parola değiştirilirken ya da doğrulama yapılırken oluşabilen format uyuşmazlıkları tamamen giderilerek masaüstü ve Web Portal genelinde kesintisiz parola güncelleme güvencesi sağlandı.

---

## 🌐 RADPYS V4.0.5.18: Yeni Nesil Modüler Web Portalı, Merkezileştirilmiş Profilim, Mobil Saha Asistanları, Atomik Nöbet Devir/İkame Havuzu, EK-1 & RD.F43 Tam Masaüstü Uyumu ve Dozimetre Aksiyon Takip Kokpiti

Bu sürümle birlikte **RADPYS Web Portalı ve Mobil Saha Asistanı**, hastane içi tabletlerden ve dış ağdaki cep telefonlarından çok daha hızlı açılan, kesintisiz ve güvenli işlem yapan %100 modüler mimariye kavuşturulmuş; kişisel beyan formları **Profilim** altında merkezileştirilmiş ve **Periyodik Sağlık (EK-1)**, **Doz Araştırma (RD.F43)** ile **Dozimetre Aksiyon Takip Kokpiti** masaüstü ana programla birebir eşitlenmiştir:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Merkezileştirilmiş Profilim Deneyimi ve Sadeleştirilmiş Sol Menü:** Web Portalına giriş yapan her personel Profilim ekranında; 1. Kişisel ve Kurumsal Bilgiler, 2. Nöbet Çizelgem ve Mesai Özeti, 3. İzin Özeti, 4. Dozimetre Geçmişim ve Doz Araştırma Beyanım (RD.F43), 5. Periyodik Sağlık Muayenelerim (EK-1), 6. Eğitim ve Sertifikalarım, 7. Üzerimdeki RKE Zimmetleri ve (kadın personel veya aktif muafiyeti bulunanlar için) 8. Gebelik & Sağlık Muafiyeti sekmelerine anında ve takılmadan geçiş yapabilir.
* **Doz Araştırma Beyanı (RD.F43), Periyodik Sağlık (EK-1) ve Dozimetre Aksiyon Takip Kokpiti:** Yüksek doz veya anomali durumunda çalışanın doldurduğu RD.F43 Bölüm 2 formundaki 5 temel soru (*1. Başkası kullandı mı?, 2. Saklama yeri radyasyon alanında mı?, 3. Alanda unutuldu mu?, 4. Tıbbi tetkik yapıldı mı?, 5. Çalışma süresince sürekli yanınızda mıydı?*), Gözlük dahil 9 dozimetre taşıma konumu ve koruyucu ekipman varsayılanları masaüstü programla birebir uyumlu hale getirildi.
* **Mobil Saha Asistanları: Cihaz Arıza/QC, RKE Barkod/Muayene ve Ortam Dozu Kroki:** Biyomedikal uzmanları, medikal fizikçiler ve sorumlu teknikerler tablet veya cep telefonu üzerinden cihaz arıza bildirimi açabilir, servis müdahalesini kaydedebilir ve kalite kontrol (QC) test sonuçlarını doğrudan cihaz başında sisteme işleyebilir.

### 👤 Merkezileştirilmiş Profilim Deneyimi ve Sadeleştirilmiş Sol Menü

* **Tek Ekranda Tüm Kişisel Bilgiler ve Beyanlar:** Web Portalına giriş yapan her personel **Profilim** ekranında; **1. Kişisel ve Kurumsal Bilgiler**, **2. Nöbet Çizelgem ve Mesai Özeti**, **3. İzin Özeti**, **4. Dozimetre Geçmişim ve Doz Araştırma Beyanım (RD.F43)**, **5. Periyodik Sağlık Muayenelerim (EK-1)**, **6. Eğitim ve Sertifikalarım**, **7. Üzerimdeki RKE Zimmetleri** ve (kadın personel veya aktif muafiyeti bulunanlar için) **8. Gebelik & Sağlık Muafiyeti** sekmelerine anında ve takılmadan geçiş yapabilir.
* **Sadeleştirilmiş Sol Menü:** Sık kullanılmayan kişisel beyan ekranlarının sol menüde kalabalık yaratması önlendi; **Periyodik Sağlık Sevk & EK-1 Beyanı**, **Doz Araştırma Beyanı (RD.F43)** ve **Gebelik / Sağlık Muafiyeti Bildirimi** doğrudan **Profilim** ekranındaki ilgili sekmelerin içine alındı. Sol menü **Kişisel İşlemlerim** (`Profilim`, `İzin Talep Formu`, `Eğitim & Sınav Portalı`) ve **Nöbet İşlemlerim** olarak sadeleştirildi.
* **Ergonomik Radyasyonsuz Görev Yeri Seçimi:** Gebelik ve Sağlık Muafiyeti formundaki **Radyasyonsuz Görev Yeri Tercihi** alanında radyasyonlu çekim birimleri listeden otomatik elendi; en sık tercih edilen güvenli birimler (`Ultrasonografi (USG)`, `Manyetik Rezonans (MR)`, `PACS / Görüntü Arşivi Birimi`, `Raporlama ve Dikte Odaları`, `Radyoloji Ana Kayıt ve Kabul`) için tek tıkla hızlı seçim butonları ve gruplandırılmış birim listesi eklendi.
* **Hızlı Giriş ve Parola Yenileme Sihirbazı:** İlk kez giriş yapan personeller için zorunlu parola belirleme adımı, iki aşamalı e-posta doğrulama kodu ekranı ve **Şifremi Unuttum** sıfırlama sihirbazı mobil ekranlara tam uyumlu ve sade adımlarla yenilenmiştir.

### ☢️ Doz Araştırma Beyanı (RD.F43), Periyodik Sağlık (EK-1) ve Dozimetre Aksiyon Takip Kokpiti

* **Ana Programla Birebir Uyumlu RD.F43 Çalışan Beyanı:** Yüksek doz veya anomali durumunda çalışanın doldurduğu **RD.F43 Bölüm 2** formundaki 5 temel soru (*1. Başkası kullandı mı?, 2. Saklama yeri radyasyon alanında mı?, 3. Alanda unutuldu mu?, 4. Tıbbi tetkik yapıldı mı?, 5. Çalışma süresince sürekli yanınızda mıydı?*), **Gözlük** dahil 9 dozimetre taşıma konumu ve koruyucu ekipman varsayılanları masaüstü programla birebir uyumlu hale getirildi.
* **Periyodik Sağlık Gözetim Formu (EK-1) Tam Masaüstü Eşleşmesi:** Çalışan anamnez/semptom beyanı ile işyeri hekimi fizik muayene, laboratuvar tetkik tarihleri, cilt yaşı ve hekim kanaati bölümleri masaüstü form yapısıyla birebir eşitlendi; dinamik kurumsal antet desteği eklendi.
* **Dozimetre Aksiyon Takip Kokpiti:** Dozimetre Gösterge Panelindeki **Aksiyon & İnceleme Planları** sekmesi, masaüstü uygulamasındaki **Doz Riskleri, İnceleme ve DÖF Aksiyon Takip Kokpiti** ile aynı 8 sütunlu birleşik tabloya (`Ad Soyad`, `Birim`, `Dönem`, `Hp(10)`, `Risk Seviyesi`, `Gerekçe`, `İnceleme Durumu`, `RD.F43 Raporu`), durum filtrelerine (`Tüm Kayıtlar`, `İnceleme Bekleyenler`, `Açık Aksiyonlar`, `Kapatılanlar`) ve **Doz Araştırma Formu (RD.F43)**, **Birim Notu Ekle**, **Takip Ölçümü Planla** ile **Aksiyonu Kapat** pencerelerine kavuşturuldu.
* **Olay Bildirimi ve DÖF Formunda Otomatik Bildiren Bilgisi:** **Olay Bildirimi ve DÖF Formu** açıldığında **Bildiren Personel**, **Görev / Rol** ve **Gerçekleştiği Birim** alanları oturum açan personelin kendi kadro bilgisinden otomatik olarak doldurulur ve başka bir personel adına yanlışlıkla bildirim açılmasını önlemek için salt okunur olarak korunur (`Anonim Bildirim Yap` seçildiğinde kimlik bilgisi otomatik gizlenir).

### 📱 Mobil Saha Asistanları: Cihaz Arıza/QC, RKE Barkod/Muayene ve Ortam Dozu Kroki

* **Tıbbi Cihaz Arıza, Bakım ve Kalite Kontrol (QC) Saha Asistanı:** Biyomedikal uzmanları, medikal fizikçiler ve sorumlu teknikerler tablet veya cep telefonu üzerinden cihaz arıza bildirimi açabilir, servis müdahalesini kaydedebilir ve kalite kontrol (QC) test sonuçlarını doğrudan cihaz başında sisteme işleyebilir.
* **Koruyucu Ekipman (RKE) Barkod Okuma ve Görsel Kroki Muayenesi:** Sahada kamera ile RKE barkodu okutularak ekipman künyesi anında açılır; DIN 6857-1 standardına uygun fiziksel ve skopik muayene bulguları ön/arka anatomik önlük krokisi üzerinde işaretlenerek fotoğraflarıyla birlikte kaydedilir.
* **Ortam Dozu Kroki ve Nokta Ölçüm Girişi:** Radyasyon ölçüm noktaları birim krokisi üzerinde görsel pinlerle izlenir; saha ölçüm turlarında arka plan ve ölçüm değerleri doğrudan mobil ekrandan hızlıca girilir.

### 🔄 Nöbet Çizelgesi, Devir/Takas Merkezi, Acil Mazeret İkame Havuzu ve Yönetici Kokpitleri

* **Atomik Nöbet Devir ve Havuz Güvencesi:** Web Portal üzerinden yürütülen karşılıklı nöbet takası (becayiş), tek yönlü nöbet devri, yönetici devir onayları ve acil mazeret ikame havuzu görev atamaları tam atomik işlem güvencesine alınmıştır. Aynı anda birden fazla personelin havuzdaki nöbete başvurması veya bağlantı kesintisi yaşanması durumunda çizelgede mükerrer atama, açık vardiya veya hatalı borç/alacak kaydı oluşması kesin olarak engellenir.
* **Üst Yönetim ve Denetim Panellerinde Anlık Analiz:** **Yönetici Genel Bakış Kokpiti**, **SKS & NDK Denetim Hazırlık Panosu**, **Zimmet & Evrak Takip Kokpiti**, **Kurumsal Lisans & Vize Takibi**, **Merkezi Onay Merkezi**, **Nöbet Yönetimi Kokpiti** ve **Birim Nöbet Çizelgesi** dahil tüm saha ve yönetim panelleri bağımsız alt görünümlere ayrılarak sayfa geçiş hızları en üst düzeye çıkarılmıştır.
* **%100 Gerçek Veri ve Dürüst Boş Durum Standardı:** Tüm yönetici gösterge panellerinde ve birim matrislerinde yalnızca doğrulanmış canlı veritabanı kayıtları gösterilir; seçilen filtre veya dönemde kayıt bulunmadığında yanıltıcı örnek veri yerine kurumsal **"Kayıt Bulunmamaktadır"** bilgisi sunulur.

---

## 🧙‍♂️ RADPYS V4.0.5.17: Fiili Hizmet ve Şua Hesaplama (FHZ) 4 Adımlı Pratik Sihirbaz İş Akışı ve Tek Tıkla Kayıt + Kilit Güvencesi

Sahada birim sorumlularının, radyasyondan korunma sorumlularının ve mutemetlik birimlerinin aylık Fiili Hizmet Süresi Zammı (FHZ) ve Şua izni puantajlarını kafa karışıklığı yaşamadan en hızlı şekilde tamamlaması için **4 adımlı doğrusal sihirbaz iş akışı** devreye alınmıştır:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **4 Adımda Kolay ve Hızlı Puantaj Sihirbazı:** Dönem açıldığında tüm personelin varsayılan çalışma birimleri otomatik olarak hazır gelir.
* **Tam Kapsam Kilit Koruması ve Birim Sorumlusu Yetki Güvencesi:** Ekranda belirli bir hizmet sınıfı (örneğin yalnızca Hemşire veya Radyoloji Teknikeri) filtrelenerek inceleme yapılsa dahi, dönem onaylanıp kilitlenirken hastanedeki diğer hizmet sınıflarının puantaj dışında kalmaması için tüm kapsam otomatik olarak hesaplanıp kaydedilir.

### ⚡ 4 Adımda Kolay ve Hızlı Puantaj Sihirbazı

1. **1. Adım — Görev Yerlerini Onayla:** Dönem açıldığında tüm personelin varsayılan çalışma birimleri otomatik olarak hazır gelir. Nöbet listesi dışında farklı bir birimde geçici görevlendirilen veya rotasyona çıkan asistan/hemşire/tekniker varsa sadece o personelin görev yeri değiştirilir veya ek görev eklenir; ardından **1. Görev Yerlerini Onayla ve Hesaplamaya Geç** butonuyla tek tıkla 2. adıma geçilir.
2. **2. Adım — Fiili Hizmeti Hesapla, Kaydet ve Kilitle:** Görev yerleri, yayınlanmış nöbet çizelgeleri ve onaylı izinler otomatik hesaplanır. Ayrı ayrı kaydetme ve kilitleme butonları kaldırılarak **2. Hesaplamayı Kaydet, Kilitle ve Rapor Çıktısına Geç** butonu altında birleştirilmiştir; tek tıkla dönem puantajı kaydedilir, dönem kilitlenir, yayındaki nöbet planları arşivlenir ve doğrudan rapor ekranına geçilir.
3. **3. Adım — Rapor Çıktısı Al:** Resmi SGK ve mutemetlik puantaj cetveli ekranda hazır olarak açılır; **3. Rapor Çıktısı Al (Excel / PDF)** menüsünden tek tıkla Excel veya kurumsal antetli PDF olarak indirilir.
4. **4. Adım — Tamamla ve Kapat:** Rapor çıktısı alındıktan sonra **4. Tamamla ve Kapat** butonuyla işlem güvenle sonlandırılır.

### 🔒 Tam Kapsam Kilit Koruması ve Birim Sorumlusu Yetki Güvencesi

* **Hizmet Sınıfı Filtresinde Tam Kapsam Güvencesi:** Ekranda belirli bir hizmet sınıfı (örneğin yalnızca Hemşire veya Radyoloji Teknikeri) filtrelenerek inceleme yapılsa dahi, dönem onaylanıp kilitlenirken hastanedeki diğer hizmet sınıflarının puantaj dışında kalmaması için tüm kapsam otomatik olarak hesaplanıp kaydedilir.
* **İdari Personel İzinlerinin Hesaplamayı Bloklamaması:** Fiili hizmet zammı kapsamında olmayan idari personelin bekleyen izin talepleri, radyasyon görevlilerinin aylık fiili hizmet hesaplamasını durdurmaz; yalnızca ilgili birim ve kapsamdaki radyasyon çalışanlarının onaysız izinleri denetlenir.
* **Birim Sorumlusu Rapor ve Görev Dağılımı İzolasyonu:** Birim sorumluları görev yeri eklerken ve 3. adımda Excel/PDF puantaj raporu alırken yalnızca kendi sorumluluklarındaki birimlerin personellerini görüntüler ve dışa aktarır.

---

## 🛡️ RADPYS V4.0.5.16: Fiili Hizmet ve Şua Hesaplama (FHZ) Kıstelyevm Puantajı, Tarihsel Birim İzlenebilirliği ve Kilit Güvenliği

SGK 5510 Sayılı Kanun kapsamındaki Fiili Hizmet Süresi Zammı (FHZ) ve Sağlık Bakanlığı Şua İzni hesaplamalarında dönem içi işe giriş/ayrılış doğruluklarını, çoklu birim görevlendirmelerinde tarihsel izlenebilirliği ve dönem/yıl kilit güvenliğini güçlendiren geliştirmeler devreye alınmıştır:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Dönem İçi İşe Giriş ve İşten Ayrılışlarda Kıstelyevm Puantaj Hesabı:** Bordro dönemi (`15.AA - 14.AA`) içinde göreve yeni başlayan veya emeklilik, nakil ya da istifa nedeniyle görevden ayrılan personellerin çalışma aralıkları, Görev Dağılımı, Fiili Hizmet Hesaplama ve Puantaj Raporu adımlarının tamamında personelin fiilen görevde olduğu günlerle sınırlandırılır.
* **Çoklu Birim Görevlendirmelerinde Ağırlıklı Birim Tespiti ve Tarihsel Kayıt:** Aynı bordro dönemi içinde birden fazla radyasyonlu birimde (örneğin hem Bilgisayarlı Tomografi hem Anjiyografi) görev yapan personelin dönem puantajındaki birincil görev yeri, o dönemde en fazla fiili çalışma saati geçirdiği birim olarak otomatik belirlenir.
* **Yıl Geçişli Dönemlerde Çift Yönlü Kilit Kalkanı ve Hızlı Yeniden Hesaplama:** `15 Aralık – 14 Ocak` gibi iki takvim yılına temas eden bordro dönemlerinde hem başlangıç hem de bitiş yılının kilit durumu denetlenir.

### 📅 Dönem İçi İşe Giriş ve İşten Ayrılışlarda Kıstelyevm Puantaj Hesabı

* **İşe Giriş ve Ayrılış Tarihlerine Göre Otomatik Gün Kırpma:** Bordro dönemi (`15.AA - 14.AA`) içinde göreve yeni başlayan veya emeklilik, nakil ya da istifa nedeniyle görevden ayrılan personellerin çalışma aralıkları, **Görev Dağılımı**, **Fiili Hizmet Hesaplama** ve **Puantaj Raporu** adımlarının tamamında personelin fiilen görevde olduğu günlerle sınırlandırılır.
* **Geçmiş Dönem Haklarının Korunması:** İlerleyen aylarda pasife alınan veya kurumdan ayrılan personellerin, aktif olarak görev yaptıkları geçmiş dönemlere ait fiili hizmet puantajları ve Şua izni hakları eksiksiz korunur; geçmiş dönem raporlarından düşürülmez.

### 🏥 Çoklu Birim Görevlendirmelerinde Ağırlıklı Birim Tespiti ve Tarihsel Kayıt

* **En Yüksek Çalışma Saatli Birimin Esas Alınması:** Aynı bordro dönemi içinde birden fazla radyasyonlu birimde (örneğin hem Bilgisayarlı Tomografi hem Anjiyografi) görev yapan personelin dönem puantajındaki birincil görev yeri, o dönemde en fazla fiili çalışma saati geçirdiği birim olarak otomatik belirlenir.
* **Tarihsel Birim Bilgisinin Dondurulması:** Dönem hesaplaması kaydedildiğinde personelin o ay görev yaptığı birim bilgisi puantaj kaydıyla birlikte tarihsel olarak saklanır; personelin ilerleyen aylarda başka bir birime geçmesi geçmiş dönem puantaj dökümlerindeki birim bilgisini değiştirmez.

### 🔒 Yıl Geçişli Dönemlerde Çift Yönlü Kilit Kalkanı ve Hızlı Yeniden Hesaplama

* **Aralık–Ocak Dönemi ve Yıllık Kilit Güvencesi:** `15 Aralık – 14 Ocak` gibi iki takvim yılına temas eden bordro dönemlerinde hem başlangıç hem de bitiş yılının kilit durumu denetlenir. Kilitlenmiş bir döneme veya yıla sarkan görev dağılımlarının değiştirilmesi, silinmesi veya üzerine otomatik görev atanması engellenir.
* **Anlık Yıllık Özet ve Şua Hakediş Eşitlemesi:** Onaylı izin veya nöbet değişikliği sonrasında tetiklenen otomatik yeniden hesaplamalarda, personelin yıllık toplam fiili çalışma saati ve Şua izni hakedişi aynı anda güncellenerek İzin Yönetimi ekranıyla tam senkronizasyon sağlanır.

---

## ⚖️ RADPYS V4.0.5.15: Vardiya Süresine Göre Ağırlıklı Hafta Sonu ve Bayram Nöbet Adaleti, Saat Karşılığı Gösterimi ve Kısa Kodlu Çapraz Görev Sayacı

Farklı sürelerdeki vardiyalarda (7 saatlik kısa mesai nöbetleri, 12 saatlik standart nöbetler ve 24 saatlik birleşik nöbetler) görev yapan personeller arasında tam adalet sağlamak ve yıllık nöbet yükünü hem nöbet adedi hem de çalışma saati bazında şeffafça izlemek amacıyla yeni geliştirmeler devreye alınmıştır:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Vardiya Süresine Göre Buçuklu (0.5 / 1.0 / 2.0) Nöbet Puanlama Standardı:** Hafta sonu veya resmi tatil günlerinde 10 saatin altında (örneğin Mobil Röntgen biriminde 7 saat) tutulan kısa vardiyalar artık tam nöbet yerine 0.5 nöbet olarak puanlanır.
* **Nöbet Adalet Sayacında Saat Karşılığı Gösterimi ve Kısa Kodlu Çapraz Görev Özeti:** Nöbet Adalet Sayacı ekranındaki Hafta Sonu Sayacı, Bayram Sayacı ve Çapraz Nöbet Sayacı sütunlarında personelin nöbet adedinin hemen yanında parantez içinde toplam kaç saat görev yaptığı da (örneğin `33.5 Nöbet (405 sa)` veya `6.5 Bayram (79 sa)`) açıkça gösterilir.
* **Gece Nöbeti Muafiyetli Personeller ve Çapraz Görev Rotasyonunda Akıllı Dengeleme:** Sağlık raporu veya özel kısıtı nedeniyle yalnızca gece nöbetinden muaf olan ancak hafta sonu/bayram gündüz nöbeti tutabilen personeller için otomatik planlama motoru hafta sonu ve bayramlarda 12 saatlik gündüz nöbeti kontenjanı ayırır.

### ⏱️ Vardiya Süresine Göre Buçuklu (0.5 / 1.0 / 2.0) Nöbet Puanlama Standardı

* **Kısa Süreli Vardiyalarda Yarım Nöbet (0.5) Hesabı:** Hafta sonu veya resmi tatil günlerinde 10 saatin altında (örneğin Mobil Röntgen biriminde 7 saat) tutulan kısa vardiyalar artık tam nöbet yerine **0.5 nöbet** olarak puanlanır. Böylece 7 saatlik destek nöbetine giden personel ile 12 saatlik tam vardiya veya 24 saatlik tam gün nöbet tutan personel arasındaki tatil yükü adaletsizliği tamamen ortadan kaldırılmıştır.
* **Standart ve 24 Saatlik Nöbet Ağırlığı:** 12 saatlik gündüz veya gece vardiyaları **1.0 nöbet**, 24 saatlik tam gün nöbetler ise **2.0 nöbet** olarak yıllık hafta sonu ve bayram adalet sayaçlarına yansıtılır.

### 📊 Nöbet Adalet Sayacında Saat Karşılığı Gösterimi ve Kısa Kodlu Çapraz Görev Özeti

* **Nöbet Adedi Yanında Toplam Saat Karşılığı:** **Nöbet Adalet Sayacı** ekranındaki **Hafta Sonu Sayacı**, **Bayram Sayacı** ve **Çapraz Nöbet Sayacı** sütunlarında personelin nöbet adedinin hemen yanında parantez içinde toplam kaç saat görev yaptığı da (örneğin `33.5 Nöbet (405 sa)` veya `6.5 Bayram (79 sa)`) açıkça gösterilir.
* **Kısa Kodlu Çapraz Birim Özeti ve Kompakt Görünüm:** **Çapraz Görev Yaptığı Birimler** sütununda uzun birim isimleri yerine birim kısa kodları ve toplam saat bilgisi (örneğin `MOBİL: 15 (105 sa)`) kullanılarak tablo okunabilirliği artırılmış; **Fazla Mesai Sayacı** ve **Çapraz Nöbet Sayacı** hücreleri iki satırlı ferah görünüme kavuşturulmuştur.

### 🌤️ Gece Nöbeti Muafiyetli Personeller ve Çapraz Görev Rotasyonunda Akıllı Dengeleme

* **Gece Muafiyetli Personel İçin Gündüz Nöbeti Koruması:** Sağlık raporu veya özel kısıtı nedeniyle yalnızca gece nöbetinden muaf olan ancak hafta sonu/bayram gündüz nöbeti tutabilen personeller için otomatik planlama motoru hafta sonu ve bayramlarda 12 saatlik gündüz nöbeti kontenjanı ayırır. Böylece bu personellerin de yıllık hafta sonu ve bayram yüküne adil şekilde katılması sağlanır.
* **Dengeli Çapraz Görev Rotasyonu:** Destek birimlerine (örneğin Mobil Röntgen) yapılan çapraz görevlendirmelerde hem yıl içi toplam çapraz görev sayısı hem de resmi tatil/hafta sonu yükü birlikte değerlendirilerek tüm personelin dengeli sayıda çapraz göreve çıkması garanti altına alınmıştır.

---

## 🛡️ RADPYS V4.0.5.14: Nöbet Personel Özel Kısıtları, Personel Talepleri, Sağlık Raporu & Gebelik Muafiyet Motoru ve Yıllık Nöbet Adalet Sayacı

Bu sürüm; **Sağlık Kurulu Raporu, Gebelik, Analık İzni, Süt İzni ve Doz Aşımı** gibi özel çalışma kısıtlarının nöbet planlama ve hedef mesai hesaplama motoruyla tam uyumlu çalışmasını, **Personel Talepleri ve Lisansüstü Ders Programı Revizyonu** akışlarının güçlendirilmesini ve **Yıllık Nöbet Adalet Sayacı** penceresinin masaüstü uygulamasına kazandırılmasını içerir.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Sağlık Raporu, Gebelik, Analık İzni ve Doz Aşımı Muafiyet Motoru:** Sağlık kurulu (heyet) raporu veya analık izni tanımlanan personelin rapor tarih aralığına denk gelen hafta içi iş günleri aylık zorunlu çalışma hedefinden otomatik olarak düşülür ve rapor süresince personele nöbet yazılmaz.
* **Personel Talepleri, Ders Programı Revizyonu ve Yıllık Nöbet Adalet Sayacı:** Eğitim/ders kısıtlarında yalnızca hafta içi günlerin (Pazartesi–Cuma) seçilmesi ve nöbet dağıtım motorunun sadece seçilen ders günlerinde muafiyet uygulaması sağlandı.

### 🏥 Sağlık Raporu, Gebelik, Analık İzni ve Doz Aşımı Muafiyet Motoru

* **Sağlık Raporu ve Analık İzninde Otomatik Hedef Saat Düşümü ve Dönemsel Muafiyet:** Sağlık kurulu (heyet) raporu veya analık izni tanımlanan personelin rapor tarih aralığına denk gelen hafta içi iş günleri aylık zorunlu çalışma hedefinden otomatik olarak düşülür ve rapor süresince personele nöbet yazılmaz. Sağlık raporu süresi bittiğinde personel için özel bir fazla mesai yasağı işaretlenmemişse, ayın kalan günlerinde normal mesai ve nöbet planlaması kesintisiz devam eder.
* **Doz Aşımı ve Gebelikte Radyasyonsuz Alan Gündüz Vardiyası ve Devir Esnekliği:** Doz aşımı durumunda radyasyon güvenliği gereği fazla mesai koruması kalıcı olarak sürdürülürken, personelin radyasyonsuz birimlerde yasal sınırlar içinde vardiya alabilmesi ve nöbet devri yapabilmesi sağlandı. Gebe personellerde ise radyasyonlu alan nöbetleri ve tüm gece/24 saatlik nöbetler kesin olarak engellenirken, radyasyonsuz birimlerdeki gündüz (08:00–16:00) vardiyalarına atama ve gündüz vardiyası devri yapılabilmesine olanak tanındı.
* **Gebelik Yaşam Döngüsü ve Kısıt Kayıtlarında Tam Tarih ve Veri Tutarlılığı:** Gebelik bildirimi, süt izni, analık izni, sağlık raporu ve doz aşımı kayıtlarında başlangıç ve bitiş tarihi doğrulaması ile aynı dönemde mükerrer kayıt engeli devreye alındı. Kısıt kaydı silindiğinde veya pasife alındığında personel kartındaki gebelik ve fazla mesai muafiyet bilgileri otomatik olarak güncellenir; doğum tarihi güncellendiğinde yeni analık ve süt izni tarihlerine denk gelen uygunsuz nöbetler otomatik iptal edilir.

### 📅 Personel Talepleri, Ders Programı Revizyonu ve Yıllık Nöbet Adalet Sayacı

* **Personel Talepleri ve Lisansüstü Eğitim Ders Programı Revizyonu:** Eğitim/ders kısıtlarında yalnızca hafta içi günlerin (Pazartesi–Cuma) seçilmesi ve nöbet dağıtım motorunun sadece seçilen ders günlerinde muafiyet uygulaması sağlandı. Dönem içi **Ders Programı Revizyonu** penceresinde revizyon tarihi doğrulaması güçlendirildi; aynı güne birden fazla talep denk geldiğinde sistemin en koruyucu kuralı (Muafiyet > Eğitim > Nöbet Yazılmasın > Nöbet Yazılsın) uygulaması garanti altına alındı.
* **Masaüstü Yıllık Nöbet Adalet Sayacı Penceresi:** Nöbet Planlama ekranına eklenen **Adalet Sayacı** butonu ile seçilen yıl, birim ve hizmet sınıfındaki tüm personellerin yıllık toplam nöbet, toplam saat, hafta sonu, bayram/tatil, gece nöbeti, onaylı izin günü ve birim ortalamasından sapma değerleri tek ekranda izlenebilir hale getirildi.

---

## 🔁 RADPYS V4.0.5.13: Fazla Mesai İki Ay Gecikmeli Devir, Planlamada Zorunlu Mutabakat ve Daha Doğru Nöbet Uyarıları

Bu sürüm; nöbet çizelgelerinin ay bitmeden hazırlanması gerçeğine uygun **İki Ay Gecikmeli Fazla Mesai Devir Kuralını**, otomatik nöbet planlama öncesinde **Zorunlu Fazla Mesai Mutabakat Denetimini**, **12+12 saatlik nöbet ve bayram/hafta sonu uyarı iyileştirmelerini** ve **Web Portal Yıllık Nöbet Dağılım Adaleti** görünümünü içerir.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **İki Ay Gecikmeli Fazla Mesai Devri ve Planlamada Zorunlu Mutabakat:** Bir ayın fazla mesai bakiyesi artık hemen sonraki aya değil iki ay sonrasına devreder (Ocak ➔ Mart, Şubat ➔ Nisan; Kasım ➔ ertesi yıl Ocak, Aralık ➔ ertesi yıl Şubat).
* **Nöbet Çizelgesi Uyarıları, Yıllık Dağılım Adaleti ve Bildirim İyileştirmeleri:** Birimin günlük izin verilen nöbet süresi 24 saat iken aynı güne yazılan 08:00–20:00 ve 20:00–08:00 vardiyaları artık "aynı tarihte nöbeti var" veya "24 saat dinlenme süresi ihlal edildi" uyarısı üretmez.

### ⚖️ İki Ay Gecikmeli Fazla Mesai Devri ve Planlamada Zorunlu Mutabakat

* **İki Ay Gecikmeli Fazla Mesai Devri:** Bir ayın fazla mesai bakiyesi artık hemen sonraki aya değil iki ay sonrasına devreder (Ocak ➔ Mart, Şubat ➔ Nisan; Kasım ➔ ertesi yıl Ocak, Aralık ➔ ertesi yıl Şubat). Nöbet listesi ayın bitmesine 5–10 gün kala hazırlandığı için, devredecek ayın fazla mesai hesabı planlama sırasında her zaman kesinleşmiş olur; tahmine veya eksik veriye dayalı dağıtım yapılmaz.
* **Planlamada Zorunlu Fazla Mesai Mutabakatı:** **Otomatik Oluştur** ile yeni bir ayın nöbet planı hazırlanırken, devredecek dönemde nöbeti olup **Fazla Mesai Borç / Alacak Devri** ekranında mutabakatı kaydedilmemiş personel varsa işlem durdurulur ve eksik personelin adları uyarı metninde listelenir. Mevcut taslak çizelge bu durumda silinmez. Sistemin ilk kullanımında veya devredecek dönemde hiç nöbet yoksa devir 0 kabul edilir ve planlama engellenmez.

### 🗓️ Nöbet Çizelgesi Uyarıları, Yıllık Dağılım Adaleti ve Bildirim İyileştirmeleri

* **Aynı Gün Gündüz + Gece (12+12 Saat) Nöbetlerde Gereksiz Uyarı Kalktı:** Birimin günlük izin verilen nöbet süresi 24 saat iken aynı güne yazılan 08:00–20:00 ve 20:00–08:00 vardiyaları artık "aynı tarihte nöbeti var" veya "24 saat dinlenme süresi ihlal edildi" uyarısı üretmez. Saatler çakışırsa veya günlük toplam izin verilen süreyi aşarsa uyarı yine gösterilir.
* **Bayram ve Hafta Sonu Nöbet Limitleri Ayrı Sayılıyor:** Hafta sonu nöbetleri artık bayram/tatil nöbeti sayısını şişirmez. Uyarılar "Aylık maksimum bayram/tatil nöbeti üst limiti" ve "Aylık maksimum hafta sonu nöbeti üst limiti" olarak ayrı ayrı gösterilir. Bayram adaleti için 12+12 saatlik tek günlük nöbet iki nöbet olarak sayılmaya devam eder; böylece 24 saat tutan personel ile 12 saat tutan personel eşit görünmez.
* **Web Portal Nöbet Dağılım Adaleti Seçili Yılın Tamamını Gösteriyor:** **Nöbet Dağılım Adaleti** sekmesi artık yalnızca son ayın planını değil, seçili yılın tüm aylarının toplamını gösterir. Tabloya **Bayram / Tatil** ve **Onaylı İzin** sütunları eklendi; uzun süre izinli personelin neden düşük nöbetli göründüğü doğrudan izlenebilir.
* **Bildirim Kutuları Ekranın Dışına Taşmıyor:** Art arda yapılan işlemlerde ekranın sağ altında beliren bildirimler artık düzenli şekilde yukarı doğru dizilir; bir bildirim kapandığında diğerleri yerine kayar. Uzun mesajlar satır kırılarak gösterilir ve aynı anda en fazla 5 bildirim görünür.

---

## 🖥️ RADPYS V4.0.5.12: Farklı Ekran Çözünürlükleri İçin Ergonomik Form Görünümü, Merkezi Tablo Tasarımı, KVKK / NDK Denetim İzi Yenilemesi ve Nöbet Çizelgesi İyileştirmeleri

Bu sürüm; dizüstü bilgisayarlar, standart hastane monitörleri ve yüksek ölçeklemeli ekranlar dahil **tüm ekran çözünürlüklerinde formların ferah ve okunaklı görünmesini sağlayan ergonomik arayüz iyileştirmelerini**, **KVKK / NDK Denetim İzi ve Sistem Günlükleri tablolarının kurumsal tasarım standardına kavuşturulmasını** ve **Nöbet Çizelgesi matris görünümünün iyileştirilmesini** içerir.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Tüm Ekran Çözünürlüklerine Uyumlu Ergonomik Formlar ve İki Satırlı Ana Tablolar:** Metin giriş kutuları, açılır seçim menüleri, tarih seçiciler ve işlem butonları yazı tipi yüksekliği baz alınarak standart Windows masaüstü form oranlarına kavuşturuldu.
* **KVKK / NDK Denetim İzi, Sistem Günlükleri ve Yardımcı Tablolarda Merkezi Görünüm:** Sistem Günlükleri altındaki KVKK / NDK Denetim İzi sekmesinin üst bilgi kartı, Kayıt Bütünlüğü Doğrulandı durum rozeti ve filtreleme araç çubuğu kurumsal tasarım sistemiyle yenilendi; başlık etrafındaki fazlalık çerçeve çizgileri temizlendi.
* **Nöbet Çizelgesi Matrisi ve Plan İnceleme Görünümü İyileştirmeleri:** Nöbet Plan Detay ve Nöbet Plan İnceleme ekranlarındaki aylık nöbet matrisi tek bir merkezi bileşende birleştirildi; hafta sonu, resmi tatil/bayram günleri, devredilen nöbetler ve seçili personel vurgulamalarının tüm ekranlarda aynı netlik ve hızda çalışması sağlandı.

### 📐 Tüm Ekran Çözünürlüklerine Uyumlu Ergonomik Formlar ve İki Satırlı Ana Tablolar

* **Standart Windows Form Ergonomisi:** Metin giriş kutuları, açılır seçim menüleri, tarih seçiciler ve işlem butonları yazı tipi yüksekliği baz alınarak standart Windows masaüstü form oranlarına kavuşturuldu. Böylece daha küçük çözünürlüklü ekranlarda veya %125–%150 ekran ölçeklemesi kullanılan bilgisayarlarda formların sıkışması ve taşması tamamen önlendi.
* **Ana Veri Tablolarında Ferah İki Satırlı Görünüm:** Personel Listesi, Cihaz Envanteri ve Koruyucu Ekipman (RKE) gibi alt alta iki satır bilgi (Ad Soyad + TC Kimlik, Cihaz Kodu + Kısa Kod, Marka + Model) ve renkli durum rozeti barındıran ana listelerde 44 piksel ideal satır yüksekliği korunarak tüm bilgilerin net ve kesintisiz okunması sağlandı.

### 🛡️ KVKK / NDK Denetim İzi, Sistem Günlükleri ve Yardımcı Tablolarda Merkezi Görünüm

* **Yenilenen KVKK / NDK Denetim İzi Ekranı:** Sistem Günlükleri altındaki **KVKK / NDK Denetim İzi** sekmesinin üst bilgi kartı, **Kayıt Bütünlüğü Doğrulandı** durum rozeti ve filtreleme araç çubuğu kurumsal tasarım sistemiyle yenilendi; başlık etrafındaki fazlalık çerçeve çizgileri temizlendi.
* **Merkezi Tablo Standardı ve Hizalama:** Denetim İzi, Kullanıcı Etkileşim Günlüğü, Veritabanı Yedekleme Listesi, Dozimetre Gösterge Paneli ve Özel Yetki pencerelerindeki tüm tablolar tek bir kurumsal tablo görünümünde birleştirildi. Sol kenardaki mükerrer satır numaraları kaldırıldı; sıra numaraları ve zaman damgaları hizalı sayısal yazı tipiyle, işlem sonuçları ise okunaklı durum renkleriyle sunuldu.

### 🗓️ Nöbet Çizelgesi Matrisi ve Plan İnceleme Görünümü İyileştirmeleri

* **Birleşik Nöbet Çizelgesi Matris Deneyimi:** Nöbet Plan Detay ve Nöbet Plan İnceleme ekranlarındaki aylık nöbet matrisi tek bir merkezi bileşende birleştirildi; hafta sonu, resmi tatil/bayram günleri, devredilen nöbetler ve seçili personel vurgulamalarının tüm ekranlarda aynı netlik ve hızda çalışması sağlandı.

---

## 🗓️ RADPYS V4.0.5.11: Nöbet Çizelgesinde Çapraz Birimden Otomatik Boş Slot Doldurma Motoru, Akıllı Çapraz Birim İkame Önerisi, Ana Birim Çakışma Kalkanı ve Mesai Özeti Görünüm İyileştirmesi

Bu sürüm; özellikle **Mobil Röntgen, Acil Radyoloji ve diğer klinik alt birimler** arasında yapılan çapraz nöbet görevlendirmelerinde yaşanan ikame arama, ana birim nöbet çakışması ve boş günlerin tek tıkla doldurulması ihtiyaçlarını uçtan uca çözen operasyonel yenilikler içerir.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Çapraz Birimden Otomatik Boş Slot Doldurma Motoru:** Birim içi kadronun tüm ayı doldurmaya yetmediği durumlarda (örneğin hafta içi birim personeliyle doldurulup hafta sonu ve resmi tatil günlerinin açık kaldığı nöbet planlarında), Nöbet Çizelgesi üst araç çubuğuna eklenen Çapraz Birimden Doldur özelliği ile destek alınacak birim seçilerek kalan tüm boş nöbet hücrelerinin tek seferde otomatik doldurulması sağlandı.
* **Akıllı Çapraz İkame Önerisi, Ana Birim Çakışma Kalkanı ve Yönetici İhlal Onayı:** Nöbet atama ve düzenleme penceresinde Diğer Birimlerden Atama Yap seçeneği işaretlenip bir destek birimi seçildiğinde, Uygun İkame Öner butonunun artık ana departman yerine doğrudan seçilen çapraz birimdeki personelleri taraması ve alt birim kadrolarını eksiksiz listelemesi sağlandı.
* **Personel Mesai ve Nöbet Özeti Tablosu Okunabilirlik İyileştirmesi:** Nöbet Çizelgesi ekranının sağ tarafında yer alan personel mesai özeti tablosunda personel ad-soyadlarının üç nokta ile kırpılması ve sütun başlıklarının sıkışması sorunu giderildi; hem birim kadrosunun hem de çapraz görevlendirilen personellerin adları, toplam/birim içi nöbet sayıları, hedef süreleri, fiili çalışma saatleri ve fazla mesai değerleri tek bakışta tam okunabilir hale getirildi.

### 🔁 Çapraz Birimden Otomatik Boş Slot Doldurma Motoru

* **Tek Tıkla Boş Günleri ve Vardiyaları Tamamlama:** Birim içi kadronun tüm ayı doldurmaya yetmediği durumlarda (örneğin hafta içi birim personeliyle doldurulup hafta sonu ve resmi tatil günlerinin açık kaldığı nöbet planlarında), Nöbet Çizelgesi üst araç çubuğuna eklenen **Çapraz Birimden Doldur** özelliği ile destek alınacak birim seçilerek kalan tüm boş nöbet hücrelerinin tek seferde otomatik doldurulması sağlandı.
* **Mevcut Nöbetleri Koruyan Akıllı Dağıtım:** Otomatik çapraz doldurma motoru çalıştırıldığında çizelgede önceden atanmış hiçbir nöbet değiştirilmez; yalnızca boş kalan vardiya hücreleri taranır ve seçilen destek birimindeki uygun personeller arasında adil iş yükü dengesiyle dağıtılır.

### 🛡️ Akıllı Çapraz İkame Önerisi, Ana Birim Çakışma Kalkanı ve Yönetici İhlal Onayı

* **Seçilen Çapraz Birim İçinden Doğrudan İkame Önerisi:** Nöbet atama ve düzenleme penceresinde **Diğer Birimlerden Atama Yap** seçeneği işaretlenip bir destek birimi seçildiğinde, **Uygun İkame Öner** butonunun artık ana departman yerine doğrudan seçilen çapraz birimdeki personelleri taraması ve alt birim kadrolarını eksiksiz listelemesi sağlandı.
* **Ana Birim Nöbet Çakışması ve Dinlenme Kalkanı:** Başka bir birimden çapraz görevlendirilecek veya ikame önerilecek personelin aynı gün kendi ana biriminde (veya başka bir nöbet planında) nöbetinin bulunup bulunmadığı, önceki/sonraki gün nöbetleriyle 24 saat dinlenme ve 48 saat gece nöbeti boşluğu kuralları ile ardışık nöbet sınırı otomatik olarak denetlenir; çakışması olan personeller otomatik öneri ve otomatik doldurma listelerinden elenir.
* **Yönetici Manuel İhlal Onayı Yetkisinin Korunması:** Otomatik motorun kurallar gereği boş bıraktığı zorunlu hallerde, yetkili yöneticinin hücre düzenleme penceresinden **Kural İhlallerini Onaylıyorum** seçeneğini işaretleyerek manuel atama yapabilme yetkisi korundu.

### 📊 Personel Mesai ve Nöbet Özeti Tablosu Okunabilirlik İyileştirmesi

* **Tam İsim ve Fazla Mesai Görünümü:** Nöbet Çizelgesi ekranının sağ tarafında yer alan personel mesai özeti tablosunda personel ad-soyadlarının üç nokta ile kırpılması ve sütun başlıklarının sıkışması sorunu giderildi; hem birim kadrosunun hem de çapraz görevlendirilen personellerin adları, toplam/birim içi nöbet sayıları, hedef süreleri, fiili çalışma saatleri ve fazla mesai değerleri tek bakışta tam okunabilir hale getirildi.

---

## 🛡️ RADPYS V4.0.5.10: 14 Operasyonel Modülde Uçtan Uca Kilit Denetimi, DIN 6857-1 & NDK Mevzuat Güvencesi, Nöbet/İzin Doğruluk Motoru ve Evrak Kasası Bütünlük Paketi

Bu kapsamlı sürüm; **Sistem Tanımlamaları, İzin Yönetimi, Nöbet Planlama ve Fazla Mesai, Dozimetre ve RD.F43 Araştırma, Periyodik Sağlık Muayeneleri, Ortam Dozu ve Kroki Haritası, Olay Bildirimi ve DÖF, RGS Görevlendirme, Hizmet İçi Eğitim ve Online Sınav, Cihaz Arıza/Bakım/QC/HEK** ile **Koruyucu Ekipman (RKE) ve DIN 6857-1 Muayene** modüllerinde gerçekleştirilen uçtan uca denetim, veri bütünlüğü ve kullanıcı deneyimi iyileştirmelerini içerir.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Koruyucu Ekipman (RKE) Envanteri, DIN 6857-1 Muayene ve Mühürlü Kayıt Koruması:** Resmi komisyon tutanağı ve EBYS üst yazısıyla hurdaya (HEK) ayrılıp mühürlenmiş koruyucu ekipmanların kart bilgilerinin değiştirilmesi, zimmetinin devredilmesi veya üzerine yeni muayene girilmesi hem masaüstü hem de mobil saha ekranlarında kesin olarak engellendi.
* **Tıbbi Cihaz Arıza, Periyodik Bakım, Kalite Kontrol (QC) ve HEK Süreçleri:** Cihaz Envanteri ekranından bir cihaz seçilerek Kalite Kontrol (QC), Arıza Takibi veya Periyodik Bakım ekranına geçildiğinde, açılan ekranın doğrudan seçili cihaza göre filtrelenmesi ve yeni arıza bildiriminde cihazın otomatik seçili gelmesi sağlandı.
* **İzin Yönetimi, Nöbet Planlama Motoru, Devir/İkame ve Fazla Mesai İcmali:** Kullanıcının kendi oluşturduğu izin talebini kendisinin onaylaması engellendi; onaylı bir izin iptal edildiğinde veya tarihleri güncellendiğinde yıllık/şua izin bakiyesinin ve yıl sonu taşmalı resmi tatil düşümlerinin otomatik olarak yeniden hesaplanması sağlandı.

### 🦺 Koruyucu Ekipman (RKE) Envanteri, DIN 6857-1 Muayene ve Mühürlü Kayıt Koruması

* **Mühürlü (HEK / EBYS Tescilli) Ekipman Koruması:** Resmi komisyon tutanağı ve EBYS üst yazısıyla hurdaya (HEK) ayrılıp mühürlenmiş koruyucu ekipmanların kart bilgilerinin değiştirilmesi, zimmetinin devredilmesi veya üzerine yeni muayene girilmesi hem masaüstü hem de mobil saha ekranlarında kesin olarak engellendi.
* **Merkezi DIN 6857-1 Karar Eşikleri Uyumu:** Masaüstü kalite kontrol kokpiti ile mobil saha muayene ekranlarının aynı dinamik DIN 6857-1 karar eşiklerini (kritik bölgede sıfır tolerans, kritik olmayan bölgede 5 mm² uygunluk ve 5–15 mm² şartlı kullanım sınırı) kullanması sağlandı.
* **Çakışmasız Akıllı Ekipman Kodu Üretimi:** Aradan kayıt silindiğinde veya özel numaralı ekipman eklendiğinde dahi yeni ekipman ve koruyucu numaralarının mevcut kayıtlarla çakışmadan sıralı üretilmesi güvence altına alındı.
* **Muayene Raporunda Tam Silüet Pin Gösterimi ve Kurşun Eşdeğeri Doğruluğu:** Muayene raporu ve önizleme ekranında Yelek, Etek, Tiroid ve Gonad koruyucular dahil tüm ekipman tiplerinin ön ve arka yüz kusur pinlerinin eksiksiz çizilmesi ve gerçek ön/arka kurşun eşdeğeri (mm Pb) değerlerinin gösterilmesi sağlandı.

### 🏥 Tıbbi Cihaz Arıza, Periyodik Bakım, Kalite Kontrol (QC) ve HEK Süreçleri

* **Cihaz Envanterinden Doğrudan Filtreli Geçiş:** Cihaz Envanteri ekranından bir cihaz seçilerek **Kalite Kontrol (QC)**, **Arıza Takibi** veya **Periyodik Bakım** ekranına geçildiğinde, açılan ekranın doğrudan seçili cihaza göre filtrelenmesi ve yeni arıza bildiriminde cihazın otomatik seçili gelmesi sağlandı.
* **Arıza Çözümünde Müdahale Geçmişi ve Servis/Personel Koruması:** Devam eden ("İnceleniyor", "Parça Bekleniyor", "Test Aşamasında") arızaların çözüm penceresi tekrar açıldığında önceki müdahale tarihinin korunması ve hem dış servis firması hem de kurum içi çözen personel bilgisinin birlikte kaydedilmesi sağlandı.
* **Aktif Arıza Göstergelerinde HEK İzolasyonu:** Hurdaya (HEK) ayrılmış veya kayıttan düşülmüş cihazların geçmiş arızalarının aktif arıza özet kartlarını etkilemesi önlendi.

### 🗓️ İzin Yönetimi, Nöbet Planlama Motoru, Devir/İkame ve Fazla Mesai İcmali

* **İzin Onay Güvenliği ve Otomatik Bakiye Senkronizasyonu:** Kullanıcının kendi oluşturduğu izin talebini kendisinin onaylaması engellendi; onaylı bir izin iptal edildiğinde veya tarihleri güncellendiğinde yıllık/şua izin bakiyesinin ve yıl sonu taşmalı resmi tatil düşümlerinin otomatik olarak yeniden hesaplanması sağlandı.
* **Nöbet Ayarları ve Birim Vardiya Esnekliği:** 12+12=24 saat vardiya birleştirme tercihi, haftalık mesai standartları ve emzirme/gebelik/sendika yasal kısıt parametrelerinin tüm nöbet kurallarıyla çift yönlü senkronize çalışması sağlandı; birime özel vardiya tanımlanmadığında genel vardiya tanımlarının otomatik devreye girmesi güvence altına alındı.
* **Nöbet Devir, Acil Mazeret ve Kilitli Plan Koruması:** Yayınlanmış veya arşivlenmiş nöbet planlarında tablo hücrelerine çift tıklayarak değişiklik yapılması kapatıldı; nöbet devir ve acil mazeret pencerelerinde yalnızca ilgili birimde ve hizmet sınıfında görevli (geçici görevlendirilenler dahil) uygun adayların hızlıca listelenmesi sağlandı.
* **Fazla Mesai Devir Doğruluğu ve Bildirim Cetveli:** Önceki ayda ödemesi tamamlanmış fazla mesai saatlerinin yeni aya mükerrer devredilmesi önlendi; Fazla Mesai Bildirim Cetveli çıktılarında personel unvanlarının ve seçili birim/hizmet sınıfı filtrelerinin eksiksiz yer alması sağlandı.

### ☢️ Dozimetre (RD.F43), Periyodik Sağlık Muayeneleri, Ortam Dozu ve Eğitim (LMS)

* **NDK RD.F43 Dönem Eşleşmesi ve Dürüst Veri Standardı:** Yüksek doz aksiyonları kapatılırken tamamlanmış RD.F43 Doz Araştırma Formunun mutlaka ilgili ölçüm dönemine ait olması şartı getirildi; henüz doldurulmamış araştırma formlarında varsayılan/yapay koruyucu ekipman seçimi yapılması kaldırılarak son ölçüm değerlerinin doğrudan forma aktarılması sağlandı.
* **KVKK Klinik Sağlık Bulgusu Koruması:** Klinik muayene bulgularını görme yetkisi bulunmayan kullanıcılar tarafından muayene kaydına belge eklendiğinde veya tarih güncellendiğinde, arka plandaki gerçek uzman hekim bulgularının korunması garanti altına alındı; muayene geçmişi ve revizyon pencerelerine de KVKK yetki maskelemesi eklendi.
* **Ortam Dozu ve Olay/DÖF Onay Kuyruğu Entegrasyonu:** Onay gerektiren kullanıcılar tarafından girilen ortam dozu ölçümlerinin, yalnızca yönetici onayından geçtikten sonra kroki ısı haritasına, SKS denetim raporuna ve otomatik DÖF sürecine yansıması sağlandı.
* **Hizmet İçi Eğitim ve Online Sınav İyileştirmeleri:** Başka eğitimden soru kopyalama ve Excel'den soru aktarma akışları iyileştirildi; resimli sınav sorularının ve şık görsellerinin sınav ekranında gösterilmesi, sınavı başarıyla tamamlayan personelin eğitim durumunun doğrudan "Tamamlandı" olarak işlenmesi ve eğitim uyum matrisinde yenilenen eğitimlerin tekil satırda hesaplanması sağlandı.

---

## 🛡️ RADPYS V4.0.5.9: Kurulum & Lisans Koruması, Rol/Yetki Matrisi (Rol ve Yetki) İzolasyonu ve Personel Yaşam Döngüsü Veri Bütünlüğü Paketi

Bu sürüm; **Kurulum, İlk Giriş ve Lisans Yönetimi**, **Kullanıcı, Rol ve İzin Yönetimi** ile **Personel Yönetimi ve Toplu Excel Aktarımı** modüllerinde uçtan uca yapılan kapsamlı güvenlik, yetki izolasyonu ve veri bütünlüğü iyileştirmelerini içerir.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Kurulum, İlk Giriş, Parola Güvenliği ve Lisans Paket Koruması:** Kurumsal lisans anahtarıyla etkinleştirilen sistemlerde uygulama yeniden başlatıldığında lisans durumunun deneme (Demo) moduna dönmesi engellendi; Başlangıç, Profesyonel ve Kurumsal (Elite) paket kapsamındaki modül erişim sınırları tam zamanlı olarak devreye alındı.
* **Kullanıcı, Rol ve Yetki Matrisi (Rol ve Yetki) Güvenlik Sıkılaştırması:** Kullanıcı Yönetimi ekranından bir kullanıcının sistem giriş hesabı pasife alındığında, personelin İnsan Kaynakları çalışma durumunun otomatik olarak "Pasif" statüsüne düşmesi engellendi.
* **Personel Yönetimi, Şifreli Evrak Kasası ve Toplu Excel Aktarımı İyileştirmeleri:** Personel kartı kaydedilirken mevcut yüklenmiş belgelerin ve eğitim sertifikalarının şifreli evrak kasasındaki bağlantılarının korunması sağlandı; eğitim ekleme ve düzenleme pencerelerinden seçilen diploma/sertifika dosyalarının doğrudan ilgili eğitim satırına bağlanması düzeltildi.

### 🔐 Kurulum, İlk Giriş, Parola Güvenliği ve Lisans Paket Koruması

* **Ticari Lisans ve Paket Seviyesi Koruması:** Kurumsal lisans anahtarıyla etkinleştirilen sistemlerde uygulama yeniden başlatıldığında lisans durumunun deneme (Demo) moduna dönmesi engellendi; Başlangıç, Profesyonel ve Kurumsal (Elite) paket kapsamındaki modül erişim sınırları tam zamanlı olarak devreye alındı.
* **Lisans Süresi Dolumunda Tam Yönetici Kilidi:** Lisans süresi dolduğunda Sistem Yöneticisi (Admin) hesabıyla oturum açıldığında yalnızca **Lisans Aktivasyon** penceresine erişime izin verilir; Evrensel Arama (**Ctrl+K**), üst menüler veya kısayollar üzerinden diğer operasyonel ekranların açılması tamamen kapatıldı.
* **İlk Giriş Şifre Değişiminde E-Posta Koruması:** Sisteme ilk kez giriş yapan veya parolası sıfırlanan personelin zorunlu şifre belirleme adımında, kullanıcı kartında kayıtlı kurumsal e-posta adresinin korunması garanti altına alındı.
* **Parola Sıfırlama Kodu Güvenliği ve Kesintisiz Gönderim:** E-posta ile gönderilen 6 haneli parola sıfırlama kodlarına 5 hatalı deneme sınırı getirildi; e-posta gönderimi arka planda yürütülerek gönderim sırasında ekranın beklemesi önlendi.

### 👥 Kullanıcı, Rol ve Yetki Matrisi (Rol ve Yetki) Güvenlik Sıkılaştırması

* **Kullanıcı Hesabı ile Personel Çalışma Durumu Ayrımı:** **Kullanıcı Yönetimi** ekranından bir kullanıcının sistem giriş hesabı pasife alındığında, personelin İnsan Kaynakları çalışma durumunun otomatik olarak "Pasif" statüsüne düşmesi engellendi. Böylece personelin nöbet, izin ve özlük kayıtları etkilenmeden yalnızca sistem oturum yetkisi kapatılıp açılabilir.
* **Kapsam ve İşlem Yetkisi İzolasyonu:** Görev kapsamı "Tüm Birimler" olan ancak yalnızca görüntüleme yetkisine sahip rollerin (örneğin **İzleyici** rolünün) kayıt ekleme, düzenleme veya silme işlemi yapabilmesini sağlayan yetki geçişi kapatıldı; özel kullanıcı kapsam tanımlamalarının rol kapsamından öncelikli çalışması sağlandı.
* **Okuma ve Yazma Yetkisi Tutarlılığı:** **Rol Yetkileri** ve **Kullanıcı Özel Yetkileri** matrislerinde bir modül için Ekleme, Güncelleme veya Silme yetkisi işaretlendiğinde **Okuma (Görüntüleme)** yetkisi otomatik olarak etkinleştirilir; Okuma yetkisi kaldırıldığında ise alt işlem yetkileri otomatik temizlenir.
* **Korumalı Sistem Rolleri ve Çoklu Silme Onayı:** Sistemin temel taşları olan **Admin**, **Yönetici**, **Kullanıcı** ve **İzleyici** rollerinin silinmesi veya adlarının değiştirilmesi ile **Admin** rolünün yetkilerinin kısıtlanması engellendi. Çoklu kullanıcı silme işlemlerinde yönetici şifre doğrulaması zorunlu kılındı.
* **Birim Sorumluluğu Filtreleme Koruması:** **Sorumlu Birimler** penceresinde arama kutusuyla filtreleme yaparak birim seçildiğinde, listede o an gizlenmiş olan diğer atanmış birimlerin korunması sağlandı; **Dozimetre** ve **Nöbet** sorumluluk türleri birim atama seçeneklerine eklendi.

### 👨‍⚕️ Personel Yönetimi, Şifreli Evrak Kasası ve Toplu Excel Aktarımı İyileştirmeleri

* **Şifreli Personel Belgeleri ve Eğitim Sertifikası Koruması:** Personel kartı kaydedilirken mevcut yüklenmiş belgelerin ve eğitim sertifikalarının şifreli evrak kasasındaki bağlantılarının korunması sağlandı; eğitim ekleme ve düzenleme pencerelerinden seçilen diploma/sertifika dosyalarının doğrudan ilgili eğitim satırına bağlanması düzeltildi.
* **Gebelik ve Süt İzni Alt Birim Radyasyon Denetimi:** Gebelik bildirimi ve gebelik sonlandırma (süt izni) işlemlerinde personelin yalnızca ana departmanına değil, görev yaptığı **Alt Birimin** (BT, Anjiyografi, Skopi vb.) radyasyonlu alan niteliğine de bakılarak otomatik birim kaydırma ve nöbet kısıtlaması uygulanması sağlandı.
* **İşten Ayrılış ve Pasife Almada Koruyucu Ekipman (RKE) Zimmet İadesi:** Üzerinde zimmetli kurşun önlük veya koruyucu ekipman bulunan bir personel pasife alınırken veya işten ayrılışı yapılırken, zimmetli ekipmanların tek onayla otomatik olarak envantere iade alınması sağlandı.
* **Toplu Excel Aktarımı Doğruluk Kontrolleri:** Excel'den toplu personel aktarımında aynı dosya içindeki mükerrer TC Kimlik ve Sicil Numarası kayıtlarının anında tespit edilmesi, Türkçe karakterli soyadların (`i -> İ`) doğru büyük harfe dönüştürülmesi ve yeni açılan unvanların varsayılan olarak radyasyonsuz tanımlanması sağlandı.

---

## 🛡️ RADPYS V4.0.5.8: Kurumsal Web Portalı Güvenli Dış Ağ Tüneli, KVKK %100 Yerel Veri Egemenliği, İki Aşamalı E-Posta Doğrulaması (2FA OTP) ve Akıllı E-Posta Merkezi

Bu sürüm; hastane ve üniversite radyoloji birimlerinin bilgi işlem (IT) güvenlik duvarında hiçbir port açmasına veya dış IP tanımlamasına gerek kalmadan **Web Portalına ve Mobil QR Ekranlarına kuruma özel güvenli alt alan adıyla (`https://kurumadi.radpys.com.tr`)** erişebilmesini sağlarken, **6698 sayılı KVKK** kapsamında tüm verilerin %100 kurum içi yerel sunucuda kalmasını garanti altına alır.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **KVKK ve Bilgi Güvenliği Kapsamında %100 Yerel Veri Egemenliği (Sıfır Bulut Veri Saklama):** Yeni güvenli tünel mimarisinde personel özlük bilgileri, TC Kimlik numaraları, dozimetre ölçüm sonuçları, sağlık muayene kayıtları, nöbet çizelgeleri, cihaz envanteri ve resmi evraklar kesinlikle hiçbir dış sunucuya, bulut veritabanına veya üçüncü taraf veri merkezine aktarılmaz, kopyalanmaz ve dışarıda saklanmaz.
* **Cihaz Kimliğine (Machine ID) Kilitli Şifreli Lisans Kasası ve Sıfır Ayarlı Tünel Kurulumu:** Kuruma özel tanımlanan güvenli tünel anahtarı ve siber koruma parametreleri, lisans dosyasının (`.lic`) içerisine AES-256 standardında şifrelenmiş olarak gömülür ve yalnızca kurumun kendi fiziksel bilgisayarının Cihaz Kimliği (Machine ID) ile açılabilir.
* **Çift Katmanlı Web Portal Giriş Koruması ve Zorunlu 2 Aşamalı E-Posta Doğrulaması (2FA OTP):** Hastane yerel ağından (`localhost` veya kurum içi yerel IP) yapılan bağlantılarda personel kesintisiz hızla giriş yapar (hatalı denemelerde yalnızca yerel resimli doğrulama kodu gösterilir); dış ağdan (internet/mobil) yapılan bağlantılarda ise Cloudflare Turnstile siber koruma kalkanı ve 6 Haneli E-Posta Doğrulama Kodu (2FA OTP) otomatik olarak devreye girer.

### 🔒 KVKK ve Bilgi Güvenliği Kapsamında %100 Yerel Veri Egemenliği (Sıfır Bulut Veri Saklama)

* **Verileriniz Asla Kurum Dışına Çıkmaz:** Yeni güvenli tünel mimarisinde personel özlük bilgileri, TC Kimlik numaraları, dozimetre ölçüm sonuçları, sağlık muayene kayıtları, nöbet çizelgeleri, cihaz envanteri ve resmi evraklar **kesinlikle hiçbir dış sunucuya, bulut veritabanına veya üçüncü taraf veri merkezine aktarılmaz, kopyalanmaz ve dışarıda saklanmaz**.
* **Uçtan Uca Şifreli Geçiş Köprüsü:** Tüm veritabanı ve şifreli evrak kasası yalnızca kurumunuzun kendi yerel bilgisayarında barındırılmaya devam eder. Kurumsal tünel yalnızca yetkili personelin cep telefonu veya tarayıcısı ile kurum içi yerel bilgisayarınız arasında uçtan uca şifreli (TLS/HTTPS) anlık bir geçiş köprüsü kurar; Portal Başlatıcı kapatıldığında dış bağlantı anında kesilir.

### 🌐 Cihaz Kimliğine (Machine ID) Kilitli Şifreli Lisans Kasası ve Sıfır Ayarlı Tünel Kurulumu

* **Donanım Kimliğine Bağlı Şifreli Lisans Kasası:** Kuruma özel tanımlanan güvenli tünel anahtarı ve siber koruma parametreleri, lisans dosyasının (`.lic`) içerisine **AES-256** standardında şifrelenmiş olarak gömülür ve yalnızca kurumun kendi fiziksel bilgisayarının **Cihaz Kimliği (Machine ID)** ile açılabilir. Lisans dosyası başka bir bilgisayara kopyalansa dahi içindeki tünel anahtarları deşifre edilemez.
* **Tek Tıkla Otomatik Tünel Başlatma:** Sistem Yöneticisi lisans dosyasını yükleyip **RADPYS Portal Başlatıcı** üzerinden **[Servisleri Başlat]** butonuna tıkladığında, sistem içindeki gömülü tünel motoru hiçbir ek kurulum gerektirmeden arka planda otomatik çalışır ve Portal Başlatıcı üzerindeki canlı durum rozeti (`Aktif (Cloudflare)`, `Hazır (Başlatılmadı)` veya `Yapılandırılmadı (Yerel Ağ)`) anlık olarak güncellenir.

### 🔐 Çift Katmanlı Web Portal Giriş Koruması ve Zorunlu 2 Aşamalı E-Posta Doğrulaması (2FA OTP)

* **Akıllı Ağ Ayrımı (Yerel Ağ vs. Dış Ağ):** Hastane yerel ağından (`localhost` veya kurum içi yerel IP) yapılan bağlantılarda personel kesintisiz hızla giriş yapar (hatalı denemelerde yalnızca yerel resimli doğrulama kodu gösterilir); dış ağdan (internet/mobil) yapılan bağlantılarda ise **Cloudflare Turnstile** siber koruma kalkanı ve **6 Haneli E-Posta Doğrulama Kodu (2FA OTP)** otomatik olarak devreye girer.
* **Güvenli Kapanma (Tam Güvenli Kilitlenme) Koruması:** Dış ağdan giriş yapan bir personelin e-posta doğrulama kodu herhangi bir e-posta sunucu hatası veya eksik e-posta adresi nedeniyle gönderilemezse sistem güvenlikten ödün vermez; oturumu açmaz ve denetim izine uyarı kaydederek kullanıcıyı bilgilendirir.
* **Kalıcı Kriptografik Koruma:** Üretilen 6 haneli tek kullanımlık doğrulama kodları ve hatalı giriş deneme sayaçları yüksek güvenlikli özetleme ile yerel veritabanında korunur; 5 hatalı denemede hesap 15 dakika süreyle otomatik kilitlenir.

### ✉️ Akıllı Otomatik Algılamalı E-Posta Merkezi ve Windows Güvenli Parola Kasası

* **Otomatik E-Posta Sağlayıcı Algılama:** **Sistem Yönetimi > E-Posta ve Bildirim Ayarları** ekranına e-posta adresi yazıldığı anda sistem sağlayıcıyı (**Gmail, Outlook/Office 365, Yandex, Yahoo, iCloud ve Kurumsal / Sağlık Bakanlığı / Üniversite `edu.tr`**) otomatik olarak tanır ve sunucu/port ayarlarını kendisi doldurur.
* **3 Adımlı Uygulama Şifresi Rehberi ve Canlı Test:** Kurumsal veya Gmail/Outlook hesaplarında 16 haneli uygulama şifresinin nasıl alınacağını anlatan yerleşik görsel rehber penceresi ve arka planda çalışan **[Test E-Postası Gönder]** doğrulama aracı eklendi.
* **Windows Güvenli Anahtar Kasası ve Parola Gizleme Kalkanı:** Kaydedilen e-posta parolası işletim sisteminin donanım korumalı güvenli anahtar kasasında saklanır ve açık olan Web Portal sunucusuna anında bildirilir. Ayar ekranı tekrar açıldığında mevcut parola ekrana geri doldurulmaz ve **"Göster"** butonuyla dahi okunamaz; yalnızca *"Kayıtlı parola mevcut — değiştirmek için yeni parola giriniz"* bilgisi gösterilerek tam gizlilik sağlanır.

---

## 🎯 RADPYS V4.0.5.7: Tüm Modüllerde Durum Rozetleri, Filtre Tutarlılığı, Cihaz Lisanslama ve RKE/NDK Veri Bütünlüğü Paketi

Bu güncelleme ile 23 modülün tamamında yer alan açılır seçim kutuları, durum filtreleri, kurumsal durum rozetleri ve arka plan veri doğrulama kuralları tek bir standartta birleştirilmiştir. Cihaz Yönetimi, Koruyucu Ekipman (RKE), Dozimetre, Olay Bildirimi (NDK), İzin ve Merkezi Onay ekranlarında operasyonel doğruluğu artıran kritik iyileştirmeler devreye alınmıştır.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Tıbbi Cihaz Envanteri, NDK Lisans Takibi ve Arıza/Kalite Kontrol İyileştirmeleri:** "Lisans Gerekli Değil (Ultrason/MR vb.)", "Lisanssız", "Eksik Husus" veya "Kullanım Dışı (Depo)" statüsündeki cihazların lisans durumu, geçerlilik bilgileri ve Radyasyon Korunma Sorumlusu (RKS) atamaları lisans belge numarası girilmese dahi eksiksiz olarak kaydedilir ve düzenleme ekranında korunur.
* **Kişisel Koruyucu Ekipman (RKE) ve Ortam Dozu Krokisi Doğruluğu:** RKE Envanter ve Fiziksel/Skopi Muayene listelerinde yeni tanımlanan tüm koruyucu ekipman tiplerinin eksiksiz görüntülenmesi sağlanmıştır.
* **Dozimetre Takibi, NDK Olay Bildirimi ve Hizmet İçi Eğitim Filtreleri:** Radyasyon olay inceleme penceresinde NDK bildirimi gerektiren vakalar için kalan yasal süre (saat), gecikme uyarısı ve "NDK Bildirimi Yapıldı İşaretle" aksiyon butonu gerçek zamanlı olarak aktifleşir.

### 🏥 Tıbbi Cihaz Envanteri, NDK Lisans Takibi ve Arıza/Kalite Kontrol İyileştirmeleri

* **Lisans Numarası Olmayan Cihazların Durum Kaydı:** "Lisans Gerekli Değil (Ultrason/MR vb.)", "Lisanssız", "Eksik Husus" veya "Kullanım Dışı (Depo)" statüsündeki cihazların lisans durumu, geçerlilik bilgileri ve Radyasyon Korunma Sorumlusu (RKS) atamaları lisans belge numarası girilmese dahi eksiksiz olarak kaydedilir ve düzenleme ekranında korunur.
* **Cihaz Düzenlemede Aktif Durum Koruması:** "Arızalı", "Bakımda" veya "Kalibrasyonda" olan bir cihazın kartında bilgi güncellemesi yapıldığında cihazın mevcut operasyonel durumu korunur; otomatik olarak "Aktif" statüsüne dönmesi engellenir.
* **Gerçek Zamanlı Bekleyen Arıza Göstergesi:** Cihaz Yönetimi özet kartlarındaki bekleyen arıza sayacına "Açık", "Parça Bekleniyor" ve "Servis Bekleniyor" kayıtlarının yanı sıra "İnceleniyor" ve "Test Aşamasında" olan arızalar da dahil edilmiştir.

### 🛡️ Kişisel Koruyucu Ekipman (RKE) ve Ortam Dozu Krokisi Doğruluğu

* **Merkezi Ekipman Tipi Eşleşmesi:** RKE Envanter ve Fiziksel/Skopi Muayene listelerinde yeni tanımlanan tüm koruyucu ekipman tiplerinin eksiksiz görüntülenmesi sağlanmıştır.
* **Ortam Dozu Kroki Pin Etiketleri:** Mimari kroki üzerindeki ölçüm noktalarında "Limit Aşımı" ve "Uyarı" durum açıklamalarının doğru eşleşmeyle gösterilmesi güvence altına alınmıştır.

### ☢️ Dozimetre Takibi, NDK Olay Bildirimi ve Hizmet İçi Eğitim Filtreleri

* **NDK 24 Saatlik Acil Bildirim Kartı:** Radyasyon olay inceleme penceresinde NDK bildirimi gerektiren vakalar için kalan yasal süre (saat), gecikme uyarısı ve "NDK Bildirimi Yapıldı İşaretle" aksiyon butonu gerçek zamanlı olarak aktifleşir.
* **Dozimetre "İzle" Seviyesi ve Araştırma Formu Bildirimleri:** Dozimetre takip ekranındaki durum filtresine "İzle" kademesi eklenmiş; kapatılmış doz araştırma formları için mükerrer hatırlatma bildirimi üretilmesi önlenmiştir.
* **Hizmet İçi Eğitim "Süresiz Geçerli" Filtresi:** Eğitim takip ekranında "Aktif" filtresi seçildiğinde süresiz geçerli sertifikaların da listede yer alması sağlanmış, ayrıca doğrudan "Süresiz Geçerli" durumuna göre filtreleme seçeneği eklenmiştir.

### ✨ Kurumsal Durum Rozetleri, Tutanak Merkezi ve İzin Yönetimi

* **Tüm Tablolarda Standart Renkli Durum Rozetleri:** Merkezi Onay Bekleyen Görevler Paneli, Tutanak Yönetimi, Sağlık Muayene Geçmişi, DÖF Takip Listesi, RGS Görevlendirme Listesi ve Cihaz HEK Geçmişi tablolarındaki durum sütunları kurumsal renk ve ikonlu rozet standardına kavuşturulmuştur.
* **Bekleyen Onay Rozetlerinde Görsel Netlik:** "Resmi Onay Bekliyor", "Alan Onayı Bekliyor", "Birim Sorumlusu Onayı Bekliyor" ve "Yönetici Onayı Bekliyor" aşamasındaki kayıtların tamamı tamamlanmış yeşil rozet yerine kehribar (bekleyen/saat) rozetiyle net biçimde ayrıştırılmıştır.
* **İzin Taleplerinde Aktif Personel Koruması ve Tutanak Filtreleme:** İzin oluşturma ekranında yalnızca aktif veya geçici görevlendirmedeki personellerin seçilebilmesi sağlanmış; Tutanak Yönetimi ekranındaki modül filtrelerinin ("Fiili Hizmet (Şua)", "Kalite / Ortam / Olay") ilgili tüm tutanakları eksiksiz listelemesi sağlanmıştır.
* **Daraltılmış Sol Menü (İkon Modu) ve Hızlı Sayfa Geçişleri:** Sol gezinme menüsü daraltılmış (ikon) moddayken açılan hızlı erişim pencerelerinden Fiili Hizmet (Şua) Puantajı, Dozimetre Takibi, Ortam Dozu Ölçümleri ve Nöbet Birim Ayarları ekranlarına tek tıkla kesintisiz geçiş sağlanmıştır. Uygulama açılışındaki lisans doğrulama hızı iyileştirilmiş ve tüm modüller arası sayfa yönlendirmeleri stabilize edilmiştir.

---

## 🛡️ RADPYS V4.0.5.6: Nöbet, İzin, Personel Yaşam Döngüsü, Fiili Hizmet (Şua) ve Web Portal Uçtan Uca Stabilizasyon Paketi

Bu kapsamlı güncelleme ile Masaüstü Uygulaması, Raporlama Merkezi, Toplu Veri Aktarım Sihirbazı ve Web Portalı arasındaki tüm nöbet, izin, çalışma kısıtı, fazla mesai ve şua hesaplama kuralları tek bir kurumsal standartta birleştirilmiştir. Birimler arası veri senkronizasyonu güçlendirilmiş ve uçtan uca tam kararlılık sağlanmıştır.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Hedef Çalışma Saati, Sendika İzni ve Fazla Mesai Hesaplama Doğruluğu:** Sendika yönetim kurulu izni bulunan personelin aylık hedef çalışma saati düşümü, sabit saat yerine personelin o aydaki fiili çalışma günüyle orantılı olarak hesaplanır.
* **Nöbet Değişim Havuzu, Devir ve Karşılıklı Takas Güvenliği:** Gerek masaüstünde gerekse Web Portalında bir nöbeti devralmak veya havuzdaki ilana talip olmak isteyen personelin; ilgili tarihte onaylı izni, aktif çalışma/nöbet muafiyeti (gebelik, süt izni, doz aşımı, sağlık raporu, engellilik) veya aynı gün başka bir nöbeti varsa sistem işlemi otomatik olarak engeller ve kullanıcıyı bilgilendirir.
* **Gebelik, Süt İzni ve Personel Ayrılış Süreçlerinde Otomatik Nöbet Yönetimi:** Gebelik bildirimi yapıldığında personelin ileri tarihli planlı ve devralınmış tüm nöbetleri otomatik olarak mazeretli iptal statüsüne çekilir.

### ⚖️ Hedef Çalışma Saati, Sendika İzni ve Fazla Mesai Hesaplama Doğruluğu

* **Orantılı (Kıstelyevm) Sendika İzni Düşümü:** Sendika yönetim kurulu izni bulunan personelin aylık hedef çalışma saati düşümü, sabit saat yerine personelin o aydaki fiili çalışma günüyle orantılı olarak hesaplanır.
* **Arife ve Yarım Gün Resmi Tatil Hassasiyeti:** Resmi tatil takvimindeki yarım günlük arife tatilleri hem masaüstü hem de Web Portalı aylık mesai özetlerinde tam hassasiyetle (0,5 gün) dikkate alınır.
* **Bayram Fazla Mesaisi ve Devreden Bakiye Güvencesi:** Aylık borç/alacak ve fazla mesai icmallerinde bayram mesai saatlerinin mükerrer sayılması engellenmiş; önceki aydan devreden saat bakiyelerinin yeni ay özetiyle otomatik birleşmesi sağlanmıştır.

### 🔄 Nöbet Değişim Havuzu, Devir ve Karşılıklı Takas Güvenliği

* **Tam Kapsamlı Uygunluk Denetimi:** Gerek masaüstünde gerekse Web Portalında bir nöbeti devralmak veya havuzdaki ilana talip olmak isteyen personelin; ilgili tarihte onaylı izni, aktif çalışma/nöbet muafiyeti (gebelik, süt izni, doz aşımı, sağlık raporu, engellilik) veya aynı gün başka bir nöbeti varsa sistem işlemi otomatik olarak engeller ve kullanıcıyı bilgilendirir.
* **Acil Mazeret ve İzin Onayında Otomatik Havuz Temizliği:** Bir nöbet için acil mazeret bildirildiğinde veya personelin o tarihteki izni onaylandığında, ilgili nöbete ait açık değişim havuzu ilanları ve bekleyen devir talepleri otomatik olarak kapatılır; iptal edilmiş nöbetlerin vitrinde kalması önlenir.
* **Gerçek Hedef Saat Barajı:** Tek yönlü (karşılıksız) nöbet devirlerinde sabit saat sınırı yerine personelin o aya ait gerçek zorunlu hedef çalışma saati esas alınır; asli mesai saatlerinin karşılıksız devredilmesi engellenir.

### 🤰 Gebelik, Süt İzni ve Personel Ayrılış Süreçlerinde Otomatik Nöbet Yönetimi

* **Gebelik ve Süt İzni Bildirimi:** Gebelik bildirimi yapıldığında personelin ileri tarihli planlı ve devralınmış tüm nöbetleri otomatik olarak mazeretli iptal statüsüne çekilir. Gebelik sonlanıp süt izni dönemine geçildiğinde ise günlük 1,5 saatlik süt izni düşümü otomatik tanımlanır ve radyasyonsuz birimlerde gündüz vardiyaları korunurken yalnızca gece nöbetleri iptal edilir.
* **Yönetici Aksiyon Merkezi ile Güvenli İkame Atama:** Gebelik veya işten ayrılış nedeniyle boşa çıkan nöbetlere Yönetici Aksiyon Merkezi üzerinden yedek personel atanırken, seçilen yedek personelin izin ve kısıt durumu anında denetlenir ve tüm atamalar tek seferde güvenle kaydedilir.

### ☢️ Fiili Hizmet Süresi Zammı (FHZ / Şua) ve Raporlama İyileştirmeleri

* **Mazeretli İptal ve İzin Koruması:** Fiili hizmet süresi zammı hesaplamalarında mazeret nedeniyle iptal edilen nöbetler ile onaylı izin günlerine denk gelen vardiyalar hesaplama dışı bırakılır; günlük fiili çalışma süresi 24 saat tavanıyla sınırlandırılır.
* **Rapor Merkezi ve Excel İçe Aktarım Senkronizasyonu:** Excel üzerinden toplu nöbet çizelgesi aktarıldığında aylık çalışma saati özetleri anında otomatik olarak hesaplanır; Rapor Merkezi'ndeki Nöbet Hakediş, Fazla Mesai ve Çizelge dökümleriyle Web Portalı Nöbet Panosu aynı güncel verileri sunar.

---

## 🗓️ RADPYS V4.0.5.5: Nöbet Planlamada İzinlerin Otomatik Entegrasyonu ve Çalışma Saati Dengelemesi

Bu kritik güncelleme ile Nöbet Planlama ve Dağıtım modülünde personelin onaylanmış tüm yasal izinleri (şua izinleri, yıllık izinler, mazeret ve raporlar) doğrudan Nöbet Planlama Sihirbazı'na entegre edilmiştir. İzinli personelin çalışma saati hesabında hak kaybı yaşanması önlenmiş, izin günleri hedef çalışma süresinden otomatik olarak düşülmüş ve akıllı dağıtım motorunun izinli personele nöbet yazması kesin olarak engellenmiştir.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Nöbet Önizleme Ekranında Onaylı İzinlerin Eksiksiz Gösterimi:** Nöbet Sihirbazının 2. Adımında yer alan detay tablosunda personelin kurum veya EBYS onayından geçmiş tüm izinleri başlangıç ve bitiş tarihleri, gün sayısı ve açıklama bilgileriyle birlikte listelenir.
* **Hedef Çalışma Saatinin İzin Günlerine Göre Otomatik Hesaplanması:** Radyasyon görevlileri ve sağlık personeli için aylık standart çalışma saati hesaplanırken, personelin hafta içine denk gelen onaylı izin günleri fiili çalışma günlerinden düşülür.
* **Otomatik Nöbet Motorunda İzin Güvenliği:** Otomatik nöbet dağıtım algoritması personelin izinli olduğu gün ve saat aralıklarını önceden tespit eder.

### 📋 Nöbet Önizleme Ekranında Onaylı İzinlerin Eksiksiz Gösterimi

* **Talepler & Mazeretler Konsolidasyonu:** Nöbet Sihirbazının 2. Adımında yer alan detay tablosunda personelin kurum veya EBYS onayından geçmiş tüm izinleri başlangıç ve bitiş tarihleri, gün sayısı ve açıklama bilgileriyle birlikte listelenir.
* **Görsel Ayrıştırma ve Durum Takibi:** İzin kayıtları sistemde açık mavi vurgu ve yeşil onay rozetiyle ("Resmi Onaylı") belirginleştirilerek nöbet komisyonunun ve birim amirlerinin personelin durumunu bir bakışta görmesi sağlanır.

### ⏱️ Hedef Çalışma Saatinin İzin Günlerine Göre Otomatik Hesaplanması

* **Adil Çalışma Süresi:** Radyasyon görevlileri ve sağlık personeli için aylık standart çalışma saati hesaplanırken, personelin hafta içine denk gelen onaylı izin günleri fiili çalışma günlerinden düşülür.
* **Doğru Kota ve Fazla Mesai:** Örneğin 20 fiili iş günü bulunan bir ayda 10 gün şua veya yıllık izni olan bir radyasyon çalışanının hedef çalışma saati 140 saat yerine adil ve doğru şekilde 70 saat olarak belirlenir. Bu sayede personelin haksız borçlanması veya yanlış fazla mesaiye zorlanması bütünüyle önlenir.

### 🤖 Otomatik Nöbet Motorunda İzin Güvenliği

* **Kesin İzin Koruması:** Otomatik nöbet dağıtım algoritması personelin izinli olduğu gün ve saat aralıklarını önceden tespit eder. Algoritma nöbet ataması yaparken izinli personeli kesinlikle aday listesine almaz; izinli günlere nöbet yazılması imkansız hale getirilir.
* **Çakışma ve İhlal Denetimi:** Manuel nöbet düzenleme ekranlarında da personelin onaylı izniyle çakışan bir nöbet yazılmak istendiğinde sistem kullanıcıyı anında uyarır.

### ✨ İzin Hakediş Ekranında Akıcı Kullanıcı Deneyimi

* **Pürüzsüz Toplu Hesaplama:** İzin Hakediş Yönetimi ekranında toplu hakediş hesaplama veya liste yenileme işlemleri yapılırken beliren "Lütfen bir satır seçiniz." şeklindeki yanıltıcı bildirim kutusu kaldırılmış; liste işlemleri seri ve sessiz bir akışa kavuşturulmuştur.

---

## ⚡ RADPYS V4.0.5.4: Ana Listeden Doğrudan Yeni DÖF Başlatma & Bağımsız Kalite Faaliyetleri

Bu güncelleme ile Olay Bildirimleri ve Kalite Yönetimi ana sayfasına doğrudan **"Yeni DÖF Ekle"** butonu eklenmiştir. Artık düzeltici ve önleyici faaliyetler yalnızca bir olay kaydının içinden değil, ana liste ekranından tek tıkla hem bir olaya bağlı olarak hem de genel klinik kalite ve radyasyon güvenliği iyileştirmesi amacıyla bağımsız olarak başlatılabilmektedir.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Ana Ekrandan Tek Tıkla Yeni DÖF Başlatabilme:** Olay Takip Listesi filtre ve araç çubuğuna "Yeni DÖF Ekle" butonu yerleştirilmiştir.
* **Bağımsız ve Olaya Bağlı Esnek Faaliyet Yönetimi:** DÖF penceresinde yer alan "İlişkili Olay Bildirimi" seçeneği sayesinde, faaliyetin bağımsız bir kalite aksiyonu mu olacağı yoksa açık durumdaki mevcut bir olay bildirimiyle mi ilişkilendirileceği kolayca belirlenebilir.

### 📋 Ana Ekrandan Tek Tıkla Yeni DÖF Başlatabilme

* **Hızlı Aksiyon Butonu:** Olay Takip Listesi filtre ve araç çubuğuna **"Yeni DÖF Ekle"** butonu yerleştirilmiştir.
* **Akıllı Seçim Entegrasyonu:** Listeden bir olay seçiliyken bu butona basıldığında açılan pencere otomatik olarak seçili olayın bilgilerini yükler. Hiçbir olay seçili değilken tıklandığında ise doğrudan genel klinik kalite ve önleyici faaliyet başlatma penceresi açılır.

### 🎯 Bağımsız ve Olaya Bağlı Esnek Faaliyet Yönetimi

* **Olay İlişkilendirme Açılır Kutusu:** DÖF penceresinde yer alan **"İlişkili Olay Bildirimi"** seçeneği sayesinde, faaliyetin bağımsız bir kalite aksiyonu mu olacağı yoksa açık durumdaki mevcut bir olay bildirimiyle mi ilişkilendirileceği kolayca belirlenebilir.
* **Canlı Süreç Değişimi:** Kullanıcı dilerse açılır kutudan ilgili açık olayı seçerek faaliyeti anında bir olaya bağlayabilir veya bağımsız genel kalite faaliyetine dönüştürebilir.
* **Şeffaf Tablo Takibi:** DÖF takip tablosuna **"İlişkili Olay"** sütunu eklenerek hangi faaliyetin hangi olay numarasına (veya Genel / Bağımsız faaliyete) ait olduğu net biçimde görünür kılınmıştır.

---

## 🔄 RADPYS V4.0.5.3: Olay İnceleme ve DÖF Yönetiminde 4 Adımlı Doğal İş Akışı & Resmi Tutanak Entegrasyonu

Bu güncelleme ile Olay İnceleme ve DÖF Yönetimi ekranı, hastane ve kurum kalite standartlarına tam uyumlu 4 adımlı doğal bir iş akışına kavuşturulmuştur. İnceleme sürecindeki erken kapatma karışıklığı önlenmiş, tüm adımlar tamamlandığında resmi tutanağın tek tıkla alınabilmesi ve sürecin güvenle sonuçlandırılması sağlanmıştır.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Kurumsal ve Doğal 4 Adımlı İnceleme Akışı:** Bildirilen olayın temel bilgileri, gerçekleştiği birim, bildiren personel, etkilenen taraf, NDK bildirim gerekliliği ve olay açıklaması tek bir ekranda derli toplu gözden geçirilir.
* **Açık DÖF Emniyet Kilidi ve Canlı Durum Takibi:** 4. Adım açıldığında sistem bağlı DÖF faaliyetlerini anlık olarak tarar.
* **İşlem Sonunda Tek Tıkla Resmi Tutanak ve PDF Çıktısı:** Olay kapatıldığında sistem kullanıcıya resmi tutanağı yazdırmak veya PDF olarak kaydetmek isteyip istemediğini sorar.

### 🧭 Kurumsal ve Doğal 4 Adımlı İnceleme Akışı

* **1. Adım — Olay Künyesi:** Bildirilen olayın temel bilgileri, gerçekleştiği birim, bildiren personel, etkilenen taraf, NDK bildirim gerekliliği ve olay açıklaması tek bir ekranda derli toplu gözden geçirilir.
* **2. Adım — İnceleme & Atama:** İncelemeyi yürütecek yetkili sorumlu personel seçilir ve olaya dair ön inceleme / değerlendirme notu kaydedilir. DÖF süreci başlamadan önce kullanıcının kafasını karıştıran erken kapatma seçeneği bu adımdan kaldırılarak doğal sürece uyarlanmıştır. Bir sonraki adıma geçildiğinde seçilen sorumlu otomatik olarak kaydedilir.
* **3. Adım — DÖF Faaliyetleri:** Olayla ilgili düzeltici veya önleyici görevler açılır, hedef tarih ve sorumlu personel atanır. Görevler yerine getirildikçe sistem üzerinden "Tamamlandı" olarak işaretlenir.
* **4. Adım — Kapanış, Karar ve Tutanak:** Tüm inceleme ve faaliyetler tamamlandıktan sonra nihai kalite kararı ve kapanış notu girilir. Sistem açık DÖF kalıp kalmadığını kontrol ederek olayın kapatılmasını sağlar ve resmi tutanağı yazdırır.

### 🛡️ Açık DÖF Emniyet Kilidi ve Canlı Durum Takibi

* **Otomatik Kontrol:** 4. Adım açıldığında sistem bağlı DÖF faaliyetlerini anlık olarak tarar. Henüz tamamlanmamış bir DÖF faaliyeti varsa kullanıcıyı bilgilendirerek olayın vaktinden önce kapatılmasını önler ve kapatma butonunu güvenle kilitler.
* **Kapanışa Hazır Bildirimi:** Tüm DÖF faaliyetleri başarıyla sonuçlandırıldığında ekran yeşil onay durumu verir ve "Olayı Kapat ve Tamamla" butonu aktif hale gelir.

### 📄 İşlem Sonunda Tek Tıkla Resmi Tutanak ve PDF Çıktısı

* **Süreç Bitiminde Doğal Yazdırma:** Olay kapatıldığında sistem kullanıcıya resmi tutanağı yazdırmak veya PDF olarak kaydetmek isteyip istemediğini sorar.
* **Doğrudan Rapor Butonu:** Ayrıca 4. Adım üzerinde yer alan **"Resmi Tutanağı Yazdır / PDF"** butonuna basılarak onaylı inceleme tutanağı ve DÖF dökümü tek tıkla resmi matbu formatında alınabilir.
* **Serbest Adım Geçişi:** Üst kısımdaki adımlara doğrudan tıklanarak istenen inceleme aşamasına zahmetsizce geçilebilir.

---

## 👥 RADPYS V4.0.5.2: DÖF Faaliyeti Sorumlu Personel Seçim Kolaylığı

Bu güncelleme ile Olay İnceleme ve DÖF Yönetimi ekranında yeni bir Düzeltici veya Önleyici Faaliyet (DÖF) başlatılırken görevlendirilecek sorumlu personellerin listelenmesi sağlanmıştır.

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Zengin Personel Listesi:** "Sorumlu Personel" açılır kutusunda kurumdaki aktif çalışanlar, unvanları ve bağlı oldukları departman bilgileriyle birlikte (`Ad Soyad (Unvan — Birim)`) listelenir.
* **Kolay Görevlendirme:** DÖF faaliyeti başlatılırken ilgili birim sorumlusu veya uzman doğrudan listeden seçilerek görev ve hedef tarih ataması eksiksiz yapılabilir.

---

## 🛡️ RADPYS V4.0.5.1: Olay İnceleme ve DÖF Yönetimi İyileştirmeleri

Bu güncelleme; Olay Bildirimleri ve Düzeltici/Önleyici Faaliyet (DÖF) Yönetimi modülünde inceleme adımları tamamlandığında resmi tutanağın sorunsuz yazdırılabilmesini, olayların güvenli şekilde kapatılmasını ve takip listesindeki eksik bilgilerin net olarak görüntülenmesini sağlar.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Tüm İnceleme ve DÖF Adımlarında Kesintisiz Resmi Tutanak Yazdırma:** Olay inceleme formunda kök nedenler belirlenirken, inceleme notları yazılırken veya DÖF faaliyetleri eklenip sonuçlandırılırken; kullanıcı hangi adımda olursa olsun ya da tüm işlemler bittikten sonra "Yazdır / Rapor" butonuna tıkladığında güncel tutanak hemen yazıcıya gönderilir veya PDF olarak kaydedilebilir.
* **Olay Takip Listesinde Atanan Personel Gösterimi:** Ana olay bildirim listesindeki "Atanan" sütununda, inceleme yapmak üzere görevlendirilen sorumlu uzmanın adı ve soyadı artık açık ve net olarak listelenir.
* **DÖF Sonrası Resmi Kapatma ve Kapanış Tarihi:** İnceleme sihirbazının son adımı olan 4. Tarihçe ekranında "Tamamla / Kapat" butonuna basıldığında, sistem kullanıcının olayı resmi olarak "Kapalı" statüsüne almak isteyip istemediğini sorar.

### 📋 Tüm İnceleme ve DÖF Adımlarında Kesintisiz Resmi Tutanak Yazdırma

* **Süreç Boyunca ve En Son Adımda Yazdırabilme:** Olay inceleme formunda kök nedenler belirlenirken, inceleme notları yazılırken veya DÖF faaliyetleri eklenip sonuçlandırılırken; kullanıcı hangi adımda olursa olsun ya da tüm işlemler bittikten sonra **"Yazdır / Rapor"** butonuna tıkladığında güncel tutanak hemen yazıcıya gönderilir veya PDF olarak kaydedilebilir. Önceden adımlar arasında karşılaşılan "Lütfen olay seçiniz" uyarısı tamamen giderilmiştir.
* **Canlı Veriyle Senkronize Çıktı:** Alınan resmi tutanak dökümünde, form üzerinde yapılan en son inceleme notları, atanan uzmanlar ve tamamlanan DÖF aksiyonları eksiksiz yer alır.

### 👥 Olay Takip Listesinde Atanan Personel Gösterimi

* **Şeffaf Görev Takibi:** Ana olay bildirim listesindeki **"Atanan"** sütununda, inceleme yapmak üzere görevlendirilen sorumlu uzmanın adı ve soyadı artık açık ve net olarak listelenir. Önceden sorumlu atanmış olmasına rağmen tabloda "Atanmadı" görünmesine yol açan eşleşme sorunu çözülmüştür.
* **Otomatik Görev Kaydı:** İnceleme formunun 2. adımında açılır kutudan bir incelemeci seçilip bir sonraki adıma geçildiğinde sistem atamayı güvenle korur ve kaydeder.

### 🏁 DÖF Sonrası Resmi Kapatma ve Kapanış Tarihi

* **Son Adımda Akıllı Kapatma Yönlendirmesi:** İnceleme sihirbazının son adımı olan 4. Tarihçe ekranında **"Tamamla / Kapat"** butonuna basıldığında, sistem kullanıcının olayı resmi olarak "Kapalı" statüsüne almak isteyip istemediğini sorar.
* **Açık Aksiyon Güvenlik Kilidi:** Kalite ve mevzuat kuralları gereği devam eden açık bir DÖF faaliyeti varsa, sistem olayın kapatılmasını engelleyerek kullanıcıyı DÖF sekmesine yönlendirir.
* **Net Kapanış Tarihi Gösterimi:** Resmi olarak kapatılan olayların tam kapanış tarih ve saati ana listedeki **"Kapanış Tarihi"** sütununa anında yansıtılır; henüz incelemesi süren açık kayıtlar ise "—" işaretiyle gösterilerek takip kolaylaştırılmıştır.

---

## 📊 RADPYS V4.0.5.0: Rapor ve Dışa Aktarma Formatlarında Sadeleştirme ("Doğru İşe Tek Format")

Bu güncelleme ile sistem genelindeki tüm modüllerde ve Rapor Merkezi'nde karşılaşılan kafa karıştırıcı çoklu dışa aktarım seçenekleri (aynı verinin hem PDF hem Excel hem Word olarak sunulması karmaşası) tamamen temizlenmiş, her iş türü için en uygun ve standart tek bir format belirlenmiştir.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Operasyonel Tablolar ve Veri Listeleri İçin Standart: Excel (.xlsx):** Cihaz Envanteri, RKE Donanım Listesi, Dozimetre Takip Dökümleri, Yıllık İzinler, Nöbet Çizelgeleri, Fiili Hizmet (FHZ) Cetvelleri ve Eğitim Katılım Listeleri gibi veri içeren tüm tablolar doğrudan ve tek tıkla kurumsal Excel (.xlsx) formatında dışa aktarılır.
* **Resmi Kurul Tutanakları ve Kanuni Belgeler İçin Standart: PDF:** RD.F43 Doz Araştırma Tutanağı, EK-1 Sağlık Muayene Formu, DIN 6857 Muayene Heyet Tutanağı ve Kurumsal HEK/Hurda Karar Tutanakları gibi ıslak/elektronik imza taşıyan ve denetimlere sunulan tüm resmi belgeler güvenli PDF formatında üretilir.
* **Düzenlenebilir Kılavuz ve Planlar İçin Standart: Word (.docx):** Yalnızca NDK KLV-014 Radyasyondan Korunma Programı (RKP) gibi kurumların kendi özel maddelerini ve klinik prosedürlerini serbestçe eklemesi gereken mevzuat kılavuz taslakları Word (.docx) formatında sunulmaktadır.

### 🎯 Operasyonel Tablolar ve Veri Listeleri İçin Standart: Excel (.xlsx)

* **Temiz ve Sade Dışa Aktarma:** Cihaz Envanteri, RKE Donanım Listesi, Dozimetre Takip Dökümleri, Yıllık İzinler, Nöbet Çizelgeleri, Fiili Hizmet (FHZ) Cetvelleri ve Eğitim Katılım Listeleri gibi veri içeren tüm tablolar doğrudan ve tek tıkla kurumsal **Excel (.xlsx)** formatında dışa aktarılır.
* **Gereksiz Format Seçeneklerine Son:** Tablolarda okunamayan, sütunları sıkışan veya düzenlenemeyen PDF/Word format karmaşası kaldırılarak kullanıcıların doğrudan üzerinde filtreleme ve hesaplama yapabileceği standart Excel dökümü sunulmuştur.

### 📜 Resmi Kurul Tutanakları ve Kanuni Belgeler İçin Standart: PDF

* **Matbu ve Değiştirilemez Resmi Evrak:** RD.F43 Doz Araştırma Tutanağı, EK-1 Sağlık Muayene Formu, DIN 6857 Muayene Heyet Tutanağı ve Kurumsal HEK/Hurda Karar Tutanakları gibi ıslak/elektronik imza taşıyan ve denetimlere sunulan tüm resmi belgeler güvenli **PDF** formatında üretilir.
* **Yüksek Baskı Kalitesi:** Tutanak sihirbazı veya rapor merkezinden alınan tüm resmi evraklar A4 standartlarına tam oturan antetli ve çerçeveli kurumsal şablonlarla hazır gelir.

### 📘 Düzenlenebilir Kılavuz ve Planlar İçin Standart: Word (.docx)

* **Kişiselleştirilebilir Kurum Belgeleri:** Yalnızca NDK KLV-014 Radyasyondan Korunma Programı (RKP) gibi kurumların kendi özel maddelerini ve klinik prosedürlerini serbestçe eklemesi gereken mevzuat kılavuz taslakları **Word (.docx)** formatında sunulmaktadır.

### 🧹 Kullanıcı Arayüzünde Mükerrer ve Ölü Butonların Temizlenmesi

* **Ferah ve Karışıklıktan Uzak Ekranlar:** Doz araştırma formu (RD-F43), cihaz tutanakları ve resmi taahhütname pencerelerinde aynı veriyi farklı formatlarda indirmeye çalışan mükerrer Word butonları arayüzden kaldırılmıştır.
* **Tek Tıkla Doğru Belgeye Erişim:** Kullanıcı tek bir tıklamayla mevzuata ve resmi denetime hazır, antetli ve mühürlü PDF belgesini oluşturup inceleyebilir.

---

## 🔐 RADPYS V4.0.4.9: Olay İnceleme ve DÖF Yönetiminde Yetki ve Rol Doğrulama İyileştirmesi

Bu güncelleme ile Güvenlik ve Kalite Olay İnceleme ekranında sorumlu uzman atama veya olay durumunu güncelleme (İncelemeye Alma, Kapatma) sırasında meydana gelen rol uyarısı giderilmiş, yetkilendirme akışı kesintisiz hale getirilmiştir.

### 🛡️ Kesintisiz İnceleme ve Sorumlu Atama İşlemleri

* **Güvenli Rol Doğrulama:** Olay kaydetme ve sorumlu atama işlemlerinde oturum açan yöneticinin ve yetkili personelin unvan ve yetki seviyesi otomatik olarak tanınır.
* **Hatasız Form Güncelleme:** Olay inceleme notları, sorumlu değişiklikleri ve DÖF adımları tek tıkla güvenle sisteme kaydedilir.

---

## 📄 RADPYS V4.0.4.8: Güvenlik ve Kalite Olay Bildirimi Resmi Tutanağında Kurumsal SKS & NDK Tasarım Yeniliği

Bu güncelleme ile Olay Bildirim ve DÖF süreçlerinin resmi yazıcı ve PDF çıktıları, Sağlıkta Kalite Standartları (SKS) ve NDK resmi denetim kriterlerine tam uyumlu, kurumsal kimliği yansıtan modern bir şablona kavuşturulmuştur.

### 🏛️ Sağlıkta Kalite Standartlarına (SKS) Tam Uyumlu Başlık ve Düzen

* **Kurumsal Belge Anteti:** Formun en üstünde kurum logosu, kurum adı, kalite birimi başlığı ve resmi doküman takip kartı (Doküman No, Revizyon Tarihi ve Sayfa No) yer alır.
* **Renkli Klinik Rozetler ve NDK Uyarı Şeridi:** Olayın sonucu (Ramak Kala, Hafif/Ciddi Zarar) ve yasal NDK 72 saatlik bildirim durumu resmi denetimlerde ilk bakışta fark edilebilecek şık rozetlerle öne çıkarılmıştır.
* **Sayfa Taşmalarına ve İmza Parçalanmasına Son:** Önceki tasarımdaki imza çizgilerinin tek başına 2. sayfaya taşması sorunu giderilmiş; tüm olay künyesi, acil müdahale, DÖF planı ve yetkili imza kutuları (Bildiren, İnceleyen Uzman ve RKS) tek bir A4 sayfasına estetik ve eksiksiz olarak sığdırılmıştır.

---

## 🛡️ RADPYS V4.0.4.7: Olay İnceleme ve DÖF Süreçlerinde Sorumlu Atama ve NDK Bildirim Entegrasyonu

Bu güncelleme ile Güvenlik ve Kalite Olay Bildirimleri modülünde, olayın incelemesini yürütecek sorumlu uzmanın atanması, resmi NDK yasal bildirim kaydının tutulması ve kalite düzeltici faaliyetlerinin (DÖF) takibi tam entegre hale getirilmiştir.

### 📋 Sorumlu Uzman Atama ve Görevlendirme

* **Otomatik Görev Bildirimi:** Bir olaya sorumlu uzman (Fizikçi, RKS veya Birim Sorumlusu) atandığında, ilgili personelin sistemine anında *"Yeni Olay İnceleme Görevi"* bildirimi düşer.
* **Tarihçe ve Denetim İzi:** Olayın kim tarafından kime atandığı, ne zaman devredildiği tarihçe sekmesinde resmi denetim izleriyle kayıt altına alınır.
* **NDK Yasal Bildirim Kaydı:** TENMAK/NDK mevzuatı gereği resmi kuruma bildirimi yapılan olaylar tek tıkla sisteme işlenir; bildirim tarihi ve evrak bilgisi güvenceye alınır.

---

## ⚡ RADPYS V4.0.4.6: Yıllık İzin ve Şua Devir İşlemlerinde Hızlı Arka Plan Mimarisi ve Kesintisiz Kullanıcı Deneyimi

Bu güncelleme ile Yıllık İzin Hakları modülünde yer alan toplu hakediş hesaplama, devir ve şua izni aktarım süreçleri modern arka plan mimarisine taşınmış; büyük personel kadrolarında dahi ekran donmalarının ve takılmalarının önüne geçilmiştir.

### 🏖️ Toplu İzin Hakedişi ve Devir Süreçlerinde Kesintisiz İşlem

* **Arayüz Takılmalarına Son:** Yüzlerce çalışanın yıllık izin hakedişleri hesaplanırken veya yıl sonu devir/şua izinleri aktarılırken sistem arayüzü kilitlenmez, arka planda güvenle işlenir.
* **Modern ve Şık İlerleme Göstergesi:** Eski sistem pencereleri yerine kurumun kurumsal tasarım diline tam uyumlu, işlem yüzdesini ve tamamlanma adımlarını anlık gösteren modern ilerleme paneli devreye alınmıştır.
* **Hızlı Sonuç Özeti:** İşlem tamamlandığında kaç personelin hakedişinin başarıyla güncellendiği veya kaç kaydın devredildiği anında şık bir bilgilendirme bildirimiyle kullanıcıya sunulur.

---

## 🔔 RADPYS V4.0.4.5: Doz Araştırma Beyanı ve Sağlık Muayene İlk Sevk Bildirim Entegrasyonu

Bu güncelleme ile klinik ve operasyonel iş akışlarındaki iki kritik süreç tam otomatik olarak bildirim merkezine bağlanmış ve tek tıkla ilgili evrak/forma ulaşım kolaylığı sağlanmıştır.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Doz Araştırma Beyanı Bildirimi ve Anlık Form Erişimi:** Bir radyasyon çalışanı Web Portal veya kurum içi sistem üzerinden yüksek doz araştırma tutanağının çalışan beyanı bölümünü doldurduğu anda, kurumun Radyasyon Korunma Sorumlusu (RKS), Medikal Fizik Uzmanı ve yöneticilerinin sağ alt bildirim çekmecesine anında uyarı düşer.
* **Sağlık Muayenesi İlk Sevk ve EK-1 Hazırlık Bildirimi:** Sağlık muayene sürecinde bir çalışan "Sevk Edildi / Muayenede" durumuna alındığında;.

### 📋 Doz Araştırma Beyanı Bildirimi ve Anlık Form Erişimi

* **Çalışan Beyanı Tamamlandığında:** Bir radyasyon çalışanı Web Portal veya kurum içi sistem üzerinden yüksek doz araştırma tutanağının çalışan beyanı bölümünü doldurduğu anda, kurumun Radyasyon Korunma Sorumlusu (RKS), Medikal Fizik Uzmanı ve yöneticilerinin sağ alt bildirim çekmecesine anında uyarı düşer.
* **Tek Tıkla Doğrudan Formu Açma:** Bildirime tıklandığında ek bir menü aramaya gerek kalmadan doğrudan o çalışanın RD-F43 Doz Araştırma Formu açılarak heyet incelemesi hemen başlatılabilir.
* **Personele Hatırlatma:** Personel sisteme girdiğinde henüz beyan vermediği açık bir yüksek doz dosyası bulunuyorsa, çekmecede *"Doz Araştırma Beyanınız Bekleniyor"* hatırlatması çıkar.

### 🩺 Sağlık Muayenesi İlk Sevk ve EK-1 Hazırlık Bildirimi

* **Muayeneye Sevk Edildiğinde:** Sağlık muayene sürecinde bir çalışan "Sevk Edildi / Muayenede" durumuna alındığında;
  * **Çalışana:** *"Sağlık Muayenesine Sevk Edildiniz"* bildirimi gider ve ön hazırlık EK-1 formunu doldurması hatırlatılır.
  * **İşyeri Hekimi ve RKS'ye:** *"Yeni Sağlık Sevki"* bildirimi ulaşır.
* **Doğrudan Muayene Kartına Ulaşım:** Bildirime tıklandığında doğrudan o personelin sağlık muayene detay kartı açılarak klinik süreç takip edilebilir.

---

## 🔔 RADPYS V4.0.4.4: Proaktif Klinik Bildirim Motoru, Windows 11 Stili Açılış Bildirim Çekmecesi ve Sayaçlı Rozet Sistemi

Bu sürümle birlikte sisteme giriş yapan kullanıcıların "Bugün ne yapmam gerekiyor?", "Kritik doz aşımı var mı?", "Süresi dolan muayene veya kalibrasyon var mı?", "Onayımı bekleyen bir talep var mı?" sorularına anında yanıt veren proaktif bir bildirim merkezi geliştirilmiştir:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Otomatik Açılış Taraması ve Proaktif Karar Motoru:** Yasal 10 iş günü süresi devam eden veya sonuçlandırılması gereken RD-F43 Doz Araştırma Tutanakları.
* **Durum Çubuğunda Sayaçlı Kırmızı Rozet:** Ana pencerenin sağ alt durum çubuğundaki bildirim zili üzerine, okunmamış bildirim adedini gösteren yüksek kontrastlı kırmızı sayaç rozeti (`1`, `3`, `9+`) eklenmiştir.
* **Windows 11 Stili Sağ Alttan Süzülen Bildirim Çekmecesi:** Sisteme giriş yapıldığında bekleyen bildirim varsa, bildirim penceresi Windows 11 bildirim merkezi stiliyle ekranın sağ alt köşesinden yukarı doğru yumuşak bir animasyonla açılarak kullanıcıyı karşılar.

### 🚀 Otomatik Açılış Taraması ve Proaktif Karar Motoru

* **Sisteme Girişte Anlık Tarama:** Program açıldığında arka planda kurum veritabanı taranır ve kullanıcıyı doğrudan ilgilendiren bekleyen klinik ve operasyonel görevler anında tespit edilir:
  1. **Açık Yüksek Doz Tutanakları:** Yasal 10 iş günü süresi devam eden veya sonuçlandırılması gereken RD-F43 Doz Araştırma Tutanakları.
  2. **Periyodik Sağlık Muayeneleri:** Yasal süresi dolmuş veya son 30 gün kalmış personelin periyodik sağlık gözetim ve muayene randevuları.
  3. **Tıbbi Cihaz ve Donanım Uyarıları:** Periyodik bakım tarihi gelen/geçen radyoloji cihazları, aktif cihaz arıza kayıtları ve kontrol süresi dolmuş koruyucu kurşun donanımlar (RKE).
  4. **Yönetici Onay Kuyruğu:** Yöneticilerin ve RKS'lerin onayını bekleyen izin talepleri, nöbet takas devirleri ve resmi tutanaklar.
* **Mükerrer Bildirim Koruması:** Kullanıcıya daha önce iletilmiş ve henüz işlem görmemiş bildirimler mükerrer olarak listeye eklenmez.
* **Lisans Uyarılarından Arındırılmış Sade Yapı:** Bildirim çekmecesi yalnızca günlük klinik ve idari aksiyonlara odaklanır; lisans hatırlatmalarıyla kullanıcı meşgul edilmez.

### 🔴 Durum Çubuğunda Sayaçlı Kırmızı Rozet

* **Gözden Kaçmayan Sayaç:** Ana pencerenin sağ alt durum çubuğundaki bildirim zili üzerine, okunmamış bildirim adedini gösteren yüksek kontrastlı kırmızı sayaç rozeti (`1`, `3`, `9+`) eklenmiştir.
* **Görsel Vurgulama:** Bekleyen bildirim olduğunda bildirim butonu yumuşak kırmızı bir çerçeve ve arka planla vurgulanarak kullanıcının dikkatini çeker; tüm bildirimler temizlendiğinde veya okunduğunda standart haline döner.

### 🪟 Windows 11 Stili Sağ Alttan Süzülen Bildirim Çekmecesi

* **Modern Açılış Animasyonu:** Sisteme giriş yapıldığında bekleyen bildirim varsa, bildirim penceresi Windows 11 bildirim merkezi stiliyle ekranın sağ alt köşesinden yukarı doğru yumuşak bir animasyonla açılarak kullanıcıyı karşılar.
* **Kullanıcı Kontrolünde Kapanma:** Bildirim paneli ekranda aniden kaybolan geçici zamanlayıcılarla kapanmaz; kullanıcı içeriği rahatça okuyabilir, sağ üst köşedeki kapatma butonuna (`✕`) basarak veya "Tümünü Temizle" seçeneğiyle kendi kontrolünde kapatabilir.

### 🎯 Tıklamayla İlgili Modül Ekranına Doğrudan Geçiş

* **Tek Tıkla Aksiyon:** Bildirim kartlarından herhangi birine tıklandığında (örneğin "Cihaz Bakım Günü Geldi" veya "Onay Bekleyen İzin"), sistem doğrudan o cihazın bakım takvimine veya onay paneline yönlendirir.
* **Otomatik Kapanma:** İlgili modül sayfası ekrana geldiğinde bildirim çekmecesi otomatik olarak kapanır; böylece kullanıcı hiç vakit kaybetmeden doğrudan yapması gereken işleme odaklanabilir.

---

## 🏥 RADPYS V4.0.4.3: Uluslararası Radyoloji Modalite Standartları, Ferah Kokpit Mimarisi ve İmzalı Servis Formu Kasası

Bu sürümle birlikte tıbbi radyoloji ve radyoterapi cihazlarının klinik takibinde uluslararası modalite numaralandırması devreye alınmış, teknik servis firmalarının doldurduğu ıslak imzalı formların şifreli evrak kasasında saklanması sağlanmış ve arıza kokpiti ekran boyutuna duyarlı ferah 7 sütunlu orantılı düzene kavuşturulmuştur:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Uluslararası Radyoloji Modalite Standartlarında Akıllı Cihaz Numaralandırması:** Tıbbi cihazların muhasebe demirbaş kodları (örneğin 253...) yerine, radyoloji teknisyenleri, hekimler ve biyomedikal birimlerinin sahada kullandığı uluslararası modalite kodları (`CT-01`, `MR-01`, `XR-01`, `FL-01`, `DSA-01`, `ERCP-01`, `MG-01`, `US-01` vb.) temel alınmıştır.
* **Yetkili Servis Bakımı ve Arıza Müdahale Formu Evrak Kasası:** Arıza onarımı veya periyodik bakım için hastaneye gelen yetkili teknik servis firmasının doldurduğu, teknisyen kaşe ve ıslak imzasını taşıyan servis formları (`PDF` veya cep telefonuyla taranmış/fotoğraflanmış `PNG`, `JPG` formatında) doğrudan arıza müdahale ekranından yüklenebilir.
* **7 Sütunlu Dengeli ve Orantılı Arıza Takip Kokpiti:** Tabüler sayısal fontla ortalanmış takip numarası.

### 🏷️ Uluslararası Radyoloji Modalite Standartlarında Akıllı Cihaz Numaralandırması

* **Klinik İletişime Uygun Numaralandırma:** Tıbbi cihazların muhasebe demirbaş kodları (örneğin 253...) yerine, radyoloji teknisyenleri, hekimler ve biyomedikal birimlerinin sahada kullandığı uluslararası modalite kodları (`CT-01`, `MR-01`, `XR-01`, `FL-01`, `DSA-01`, `ERCP-01`, `MG-01`, `US-01` vb.) temel alınmıştır.
* **Otomatik Sıralı Numara Önerisi:** Cihaz eklenirken cihaz türü (örneğin Bilgisayarlı Tomografi) seçildiği anda sistem mevcut envanteri tarayarak boşta olan bir sonraki klinik numarayı (`CT-01`, `CT-02` vb.) otomatik olarak önerir.
* **Demirbaş Numarasının Korunması:** Kurumun taşınır mal ve muhasebe kayıtlarına esas teşkil eden resmi demirbaş numarası bağımsız bir alanda güvenle saklanmaya devam eder.

### 📑 Yetkili Servis Bakımı ve Arıza Müdahale Formu Evrak Kasası

* **İmzalı Servis Raporlarının Sisteme Yüklenmesi:** Arıza onarımı veya periyodik bakım için hastaneye gelen yetkili teknik servis firmasının doldurduğu, teknisyen kaşe ve ıslak imzasını taşıyan servis formları (`PDF` veya cep telefonuyla taranmış/fotoğraflanmış `PNG`, `JPG` formatında) doğrudan arıza müdahale ekranından yüklenebilir.
* **AES-256 Askeri Düzeyde Şifreli Kasa:** Yüklenen tüm servis formları KVKK ve veri güvenliği standartlarına uygun olarak şifreli evrak kasasında güvenle muhafaza edilir.
* **Tek Tıkla Önizleme ve Doğrulama:** Arıza çözüm formunda veya teknik servis rapor kokpitinde yüklenmiş servis belgesi tek tıkla doğrudan sistem görüntüleyicisinde açılabilir; istenildiğinde güncellenebilir veya silinebilir.
* **Arıza Listesinde Görsel Belge İpucu:** Ekli servis belgesi bulunan arıza kayıtlarının durum rozetinde belge mevcut olduğu belirtilir; arıza satırına çift tıklandığında servis tutanağı ve ekli orijinal belge anında ekrana gelir.

### 📐 7 Sütunlu Dengeli ve Orantılı Arıza Takip Kokpiti

* **Sade ve Dengeli Tablo Mimarisi:** Arıza takip tablosu gereksiz sütun kalabalığından arındırılarak 7 sütunlu net bir düzene geçirilmiştir:
  1. **Arıza Kodu:** Tabüler sayısal fontla ortalanmış takip numarası.
  2. **Cihaz Bilgisi:** Üst satırda cihaz kodu ve modalite numarası, alt satırda marka/model bilgisi.
  3. **Birim / Konum:** Üst satırda bağlı olduğu klinik anabilim dalı, alt satırda oda ve kat bilgisi.
  4. **Arıza Tanımı:** Ekran genişliğine göre esnek şekilde yayılan geniş açıklama alanı.
  5. **Bildirim / Çözüm Tarihi:** Üst satırda arıza bildirim zamanı, alt satırda müdahale/çözüm zamanı.
  6. **Aciliyet Derecesi:** Bağımsız sütunda kurumsal renkli rozetlerle sunulan öncelik seviyesi (`Acil`, `Yüksek`, `Normal`, `Düşük`).
  7. **İşlem Durumu:** Arızanın güncel aşamasını belirten renkli süreç rozeti.
* **Ekran Boyutuna Duyarlı Orantılı Ölçekleme:** Küçük ekranlı dizüstü bilgisayarlardan geniş klinik monitörlere kadar pencere boyutu değiştiğinde sütunlar önceden belirlenen oranlarda esneyerek yatay kaydırma çubuğu oluşmasını ve metinlerin kesilmesini engeller.

### 📋 Periyodik Bakım ve Cihaz Envanter Tablolarında Çift Satırlı Modern Düzen

* **Kompakt ve Okunaklı Kart Yapısı:** Periyodik bakım ve Cihaz Envanter tablolarında 52 piksel satır yüksekliğinde çift satırlı kart düzeni devreye alınmıştır.
* **Akıllı Durum ve Zaman Radarı:** Mükerrer durum bilgileri birleştirilerek hem bakım sürecini hem de yaklaşan/geciken bakım günlerini tek bir akıllı rozette özetleyen radar gösterimi sağlanmıştır.
* **Çoklu Belge Formatı:** Bakım kapatma ekranında imzalı servis formları hem PDF hem de taranmış fotoğraf formatlarında yüklenebilir ve görüntülenebilir.

### ⚙️ Arıza Ara Süreçlerinde "Test Aşamasında" Güvencesi

* Arızalı parçanın montajı tamamlandıktan sonra kalite kontrol ve fantom ölçümleri devam ederken arıza kaydının "Test Aşamasında" olarak kaydedilebilmesi sağlanmış; cihazın bu süreç boyunca otomatik olarak "Bakımda" kalarak klinik çalışanlarını uyarması güvenceye alınmıştır.

### 🔍 Dozimetre Yüksek Doz Araştırma Paneli ve Form Sadeleştirmesi

* **Personel Profilinde RD.F43 Detayı:** Çalışan profili Dozimetre sekmesine yüksek doz araştırma tutanakları, durum rozetleri, net etkin doz ve doğrudan tutanağı açma/düzenleme butonları bağlanmıştır.
* **Güvenli Form Alanları:** Doz araştırma formunda kullanıcıyı yanıltabilecek açılır kutular yerine doğrudan sistem tarafından takip edilen salt okunur metin alanları devreye alınmıştır.

---

## 🏥 RADPYS V4.0.4.2: Tıbbi Cihaz Yönetimi, Bakım Planlama, Arıza Takip İş Akışları ve NDK Taahhütname Mimarisi

Tıbbi radyoloji, radyoterapi ve nükleer tıp cihazlarının klinik idaresini, teknik servis süreçlerini ve NDK mevzuatına uyumunu en üst seviyeye taşımak amacıyla kapsamlı yenilikler kullanıma sunulmuştur:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Çift Numaralandırma Sistemi (Cihaz Kodu ve Klinik Cihaz No):** Tıbbi cihazların kurumsal demirbaş kodu ile teknisyenlerin ve servis ekiplerinin günlük pratikte kullandığı klinik oda/cihaz numaraları birbirine entegre edilmiştir.
* **Resmi NDK RKS Yetkilendirme ve Taahhütname Belgesi ve Evrak Kasası Entegrasyonu:** Nükleer Düzenleme Kurumu (NDK) lisans ve vize başvurularında zorunlu tutulan resmi RKS Yetkilendirme ve Taahhütname Belgesi doğrudan sisteme entegre edilmiştir.
* **Çok Aşamalı Cihaz Arıza ve Onarım İş Akışları:** Yetkili teknik servis çağrıldığında kayıt güncellenir.

### 🏷️ Çift Numaralandırma Sistemi (Cihaz Kodu ve Klinik Cihaz No)

* **Klinik ve Envanter Kodlarının Ayrıştırılması:** Tıbbi cihazların kurumsal demirbaş kodu ile teknisyenlerin ve servis ekiplerinin günlük pratikte kullandığı klinik oda/cihaz numaraları birbirine entegre edilmiştir.
* **Akıllı Numaralandırma:** Cihaz ekleme veya düzenleme esnasında seçilen birim ve cihaza göre otomatik olarak klinik oda kodu (örneğin Bilgisayarlı Tomografi için `CT-01`, Manyetik Rezonans için `MR-01`, Acil Servis BT için `ACL-CT-01`) önerilir.
* **Kokpitte Belirgin Rozet Gösterimi:** Cihaz listesi ve arıza tablolarında cihaz kodu ile birlikte renkli klinik cihaz numarası rozeti gösterilerek sahada hangi cihaza müdahale edildiği anında anlaşılır.

### 📜 Resmi NDK RKS Yetkilendirme ve Taahhütname Belgesi ve Evrak Kasası Entegrasyonu

* **Resmi Yasal Form Uyumluluğu:** Nükleer Düzenleme Kurumu (NDK) lisans ve vize başvurularında zorunlu tutulan resmi RKS Yetkilendirme ve Taahhütname Belgesi doğrudan sisteme entegre edilmiştir.
* **Otomatik Veri Doldurma:** Başvuru konusu, muhatap kurum, mevzuat taahhüt maddeleri, 1. RKS (Asil), 2. RKS (Yedek) ve Kuruluş Yetkilisinin unvan ve T.C. kimlik bilgileri kurum veri tabanından otomatik olarak çekilir.
* **Personel Görevlendirme ve Evrak Kasası Entegrasyonu:** RGS Görevlendirme ekranında yer alan "Atama Yazısı Taslağı Üret" butonu üzerinden tek tıkla hem resmi NDK taahhütname belgesi hem de kurum içi atama yazısı üretilebilir. Üretilen resmi NDK taahhütnamesi doğrudan personelin görevlendirme kaydına ve şifreli evrak kasasına bağlanarak ıslak imzalı nüsha ve tarihçe akışına dahil edilir.
* **Tek Tıkla PDF ve Word (.docx) Çıktısı:** Tek tıkla resmi onay bloklarına ve kurum logosuna sahip ıslak imzaya hazır PDF ve Word (.docx) belgeleri üretilebilir.

### 🔄 Çok Aşamalı Cihaz Arıza ve Onarım İş Akışları

* **Ara Süreç Takibi:** Cihaz arızalarında doğrudan "kapatma" zorunluluğu ortadan kaldırılarak operasyonel ara aşamalar devreye alınmıştır:
  * **Servis Bekleniyor (Firma Çağrıldı):** Yetkili teknik servis çağrıldığında kayıt güncellenir.
  * **Parça Bekleniyor (Sipariş Verildi):** Arızalı parçanın tespiti yapılıp yurt içi/dışı sipariş verildiğinde parça bilgisiyle birlikte kaydedilir.
  * **Test Aşamasında:** Parça montajı yapıldıktan sonra kalibrasyon ve kabul testleri süresince cihaz test durumuna alınır.
  * **Tamamlandı / Çözüldü:** Tüm kontroller tamamlandığında arıza resmi olarak kapatılır.
  * **İptal Edildi:** Yanlış veya mükerrer bildirimler gerekçesiyle arıza iptal edilebilir.
* **Akıllı Cihaz Durum Yönetimi:** Ara süreçler kaydedildiğinde cihaz otomatik olarak "Bakımda" statüsüne alınarak klinik çalışanları uyarılır; arıza ancak "Tamamlandı" olarak kapatıldığında cihaz yeniden "Aktif" (çalışıyor) statüsüne döner.
* **Eski Müdahale Notlarının Korunması:** Süreç adımları güncellenirken daha önce girilmiş olan servis firması, değişen parçalar ve teknik rapor numaraları formda korunarak kayıt kaybı önlenir.

### 📊 10 Sütunlu Arıza Takip Kokpiti ve Renkli Durum Rozetleri

* **Kapsamlı Tablo Düzeni:** Arıza ekranındaki liste 10 sütunlu modern düzene geçirilmiştir:
  1. Arıza No
  2. Cihaz (Kodu, Klinik No ve Marka/Model)
  3. Birim / Konum
  4. Bildirim Tarihi
  5. Arıza Tanımı (Genişletilmiş görünüm)
  6. Aciliyet Derecesi (Renkli Acil/Yüksek/Normal/Düşük rozeti)
  7. İşlem Durumu (Açık, Servis Bekleniyor, Parça Bekleniyor, Test Aşamasında, Çözüldü rozetleri)
  8. Servis Firması / Teknisyen
  9. Yapılan İşlem ve Değişen Parça Bilgisi
  10. Çözüm / Müdahale Tarihi
* **Gelişmiş Excel Raporlama:** Dışa aktarılan Excel listeleri de bu 10 sütunlu yapıyı ve detaylı parça/servis bilgilerini eksiksiz olarak içerir.

### 🗄️ HEK Süreci Evrak Kasası Güvenliği ve Bakım Planı Düzeltmeleri

* **Kesintisiz HEK Raporlama:** Tıbbi cihazların Hurdaya Ayırma (HEK) süreçlerinde teknik servis tutanakları ve fotoğrafları şifreli evrak kasasında korunur; eksik veya taranmamış evrak durumlarında bile sistem hata vermez, raporları güvenle üretir.
* **Hatasız Bakım Planlaması:** 3'er aylık, 6'şar aylık ve yıllık periyodik bakım planları oluşturulurken seçilen cihaz adedine ve bakım sıklığına göre bakım takvimi eksiksiz olarak planlanır.

---

## 🔐 RADPYS V4.0.4.1: Kademeli Kurumsal Lisans Paketleri ve 30 Günlük Tam Sınırsız Deneme Sürümü

Sağlık kuruluşlarının, radyoloji merkezlerinin ve kliniklerin farklı operasyonel ölçeklerine ve mevzuat gereksinimlerine hitap etmek amacıyla **30 Günlük Tam Sınırsız Deneme Sürümü** ve **3 Kademeli Lisans Yapısı** devreye alınmıştır:

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Günlük Tam Sınırsız Kurumsal Değerlendirme (Demo) Sürümü:** Kurulum yapıldıktan sonraki 30 gün boyunca sistemdeki tüm yapay sınırlar kaldırılmıştır.
* **Başlangıç Paketi (Nöbet ve Personel Yönetim Çözümü):** Yalnızca klinik nöbet çizelgeleme ve personel idaresine odaklanmak isteyen birimler için tasarlanmıştır.
* **Pro Paket (Radyasyon Güvenliği ve Sağlık Gözetim Çözümü):** Radyasyonlu alanlarda çalışan personelin mevzuat takibini, dozimetre izlemini ve sağlık gözetimini eksiksiz yürütmek isteyen klinikler için geliştirilmiştir.

### 🌟 Günlük Tam Sınırsız Kurumsal Değerlendirme (Demo) Sürümü

* **Sıfır Kısıtlama ile Tam Deneyim:** Kurulum yapıldıktan sonraki 30 gün boyunca sistemdeki tüm yapay sınırlar kaldırılmıştır. Kurumlar, hastanedeki tüm personellerini sisteme aktarabilir, diledikleri sayıda nöbet planı oluşturabilir ve Elit paket dahil olmak üzere tüm modülleri tam kapasiteyle test edebilirler.
* **Kademeli Erken Uyarı:** Deneme süresinin bitimine 15 gün ve 3 gün kala sistem yöneticilere nazik hatırlatmalarda bulunur; 30 günün sonunda kurum verileri korunarak lisans aktivasyon ekranına güvenle yönlendirilir.

### 🥉 Başlangıç Paketi (Nöbet ve Personel Yönetim Çözümü)

* **Kapsam:** Yalnızca klinik nöbet çizelgeleme ve personel idaresine odaklanmak isteyen birimler için tasarlanmıştır.
* **Dahil Olan Modüller:**
  * Yapay Zeka Destekli Nöbet Çizelgeleme Motoru (Akıllı Planlama Motoru) ve Dinamik Kural Matrisi
  * Nöbet Devir, Takas ve İkame Yönetimi
  * Nöbet Borç / Alacak ve Aylık Puantaj Cetvelleri
  * Personel Kartları, İzin Yönetimi (Yıllık, Şua, Mazeret, Sağlık İzinleri)
  * Evrensel Çift Onay Kuyruğu ve Temel Sistem Ayarları & Otomatik Yedekleme

### 🥈 Pro Paket (Radyasyon Güvenliği ve Sağlık Gözetim Çözümü)

* **Kapsam:** Radyasyonlu alanlarda çalışan personelin mevzuat takibini, dozimetre izlemini ve sağlık gözetimini eksiksiz yürütmek isteyen klinikler için geliştirilmiştir.
* **Dahil Olan Modüller:**
  * Başlangıç paketinin tüm özellikleri,
  * **Kişisel Dozimetre Takibi:** Laboratuvar ölçüm aktarımları, kümülatif doz risk analizleri ve resmi RD.F43 doz aşım araştırma formu,
  * **Periyodik Sağlık Muayeneleri:** İki aşamalı sağlık gözetimi, laboratuvar bulguları ve EK-1 resmi sağlık raporu,
  * **Fiili Hizmet Zammı (FHZ):** 5510 Sayılı Kanun uyarınca yıpranma payı ve kıstelyevm şua izin hak ediş cetvelleri,
  * **RGS / RSO Görevlendirme:** Radyasyondan Korunma Sorumlusu atama belgeleri ve sertifika takibi,
  * **Olay Bildirimi ve DÖF:** Radyasyon kazaları, ramak kala bildirimleri ve 5 Neden kök analiz aksiyonları.

### 🥇 Elit Paket (Tam Entegre Kurumsal Çözüm — All-in-One)

* **Kapsam:** Radyoloji departmanını, tıbbi cihaz parkurunu, kurşun koruyucu donanımlarını ve eğitim süreçlerini NDK ve SKS standartlarında tek merkezden yönetmek isteyen hastaneler için eksiksiz çözümdür.
* **Dahil Olan Modüller:**
  * Pro paketinin tüm özellikleri,
  * **Tıbbi Cihaz ve NDK Lisans Envanteri:** Cihaz takibi, NDK lisans/vize süreleri, bakım sözleşmeleri, arıza bildirimi ve HEK arşivi,
  * **Cihaz Kalite Kontrol (QC) & Kabul Testleri:** Rutin QA/QC test protokolleri ve kalibrasyon takibi,
  * **Radyasyon Koruyucu Ekipman (RKE) Yönetimi:** Kurşun önlük/tiroid envanteri, DIN 6857-1 / IEC 61331-3 standartlarında skopi muayene karar motoru ve karekodlu etiketleme,
  * **Ortam Dozu ve İnteraktif Radyasyon Krokisi:** Kat planı üzerinde dedektör ölçümleri, alan sınırları ve sıcak nokta risk analizi,
  * **Hizmet İçi Eğitim ve LMS:** Personel eğitim katalogları, online sınav modülü ve otomatik sertifikasyon.

### 💡 Akıllı Paket Kalkanı ve Şeffaf Geçiş

Alt pakette çalışan bir kurum yetkilisi, daha üst bir pakete ait bir modüle tıkladığında sistem modülü engellemekle kalmaz; ilgili özelliğin hangi paketle açılacağını ve kuruma sağlayacağı operasyonel avantajları açıklayan şeffaf bir bilgilendirme ekranı sunarak yöneticiyi doğru çözüme yönlendirir.

---

## ⚙️ RADPYS V4.0.4.0: Program Ayarları Güvenlik Koruması ve Yasal Mevzuat Uyarı Paneli

Sistem parametreleri ve program yapılandırma ekranında, hem kritik veritabanı şifreleme güvenliğini hem de yasal mevzuat uyumluluğunu teminat altına alan köklü bir güvenlik mimarisi devreye alınmıştır:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Kriptografik Yedek Şifreleme Anahtarının Mühürlenmesi:**
  * Veritabanı ve KVKK evrak kasasındaki belgelerin şifrelenmesinde kullanılan kök kriptografik anahtar (kök güvenlik anahtarı), genel arayüz listesinden tamamen gizlenmiş ve manuel müdahalelere karşı kilitlenmiştir.
  * Böylece yanlışlıkla şifreleme anahtarının değiştirilmesi ve geçmiş yedeklerin açılamaz hale gelmesi riski kesin olarak ortadan kaldırılmıştır.
* **Sistem Parametreleri ve Yasal Mevzuat Uyarı Paneli:**
  * Ekranın üst kısmına belirgin kurumsal bir uyarı paneli entegre edilmiştir. Bu panelde hem yasal mevzuata tabi parametrelerin (5510 Sayılı Kanun FHZ saatleri, NDK doz limitleri, şua izin süreleri) hem de genel operasyonel ayarların (güvenlik kilit süreleri, hesaplama yöntemleri, rapor formatları ve çıktı dizinleri) sistemin tüm kullanıcılarını ve klinik işleyişini doğrudan etkilediği vurgulanmış; tüm ayarlarda bilinçsiz değişikliklerden kaçınılması ve azami dikkat gösterilmesi gerektiği bildirilmiştir.
* **Hatalı / Sahte Ayar Girişini Önleyen Form Sadeleştirmesi:**
  * Program tarafında fonksiyonel karşılığı bulunmayan ölü ayarların açılmasını önlemek amacıyla `+ Yeni Kayıt` butonu kaldırılmıştır.
  * Kullanıcıların yalnızca sistemin tanıdığı mevcut yasal ve operasyonel ayarların değerlerini güncelleyebileceği, kategori ve anahtar adlarının korunduğu güvenli tek adımlı `Değişiklikleri Kaydet` akışı devreye alınmıştır.
* **Mevzuat Değişikliklerinde Bilinçli Onay Koruması:**
  * Fiili hizmet radyasyon çalışma saatleri (7 saat), normal çalışma saatleri (8 saat), şua izin hakediş süreleri (30 gün) ve NDK doz limitleri gibi resmi kurallara bağlı değerler değiştirilmek istendiğinde, sistem kullanıcıya açık bir güvenlik teyidi sunarak geriye/ileriye dönük hesaplama risklerini hatırlatır.

---

## 🌐 RADPYS V4.0.3.39: Personel ve Cihaz Hareketlerinde Geçmiş Dönem Kayıtlarının Korunması

Radyasyon çalışanlarının özlük hareketleri (tayin, görev yeri değişikliği, terfi, rotasyon) ve tıbbi cihazların oda/bina nakillerinde, geçmiş yıllara ait resmi denetim ve mevzuat kayıtlarının geriye dönük bozulmasını önleyen **Tarihsel İzlenebilirlik (Geçmiş Dönem Kayıt Koruma Güvencesi)** mimarisi sistemin tüm ilgili modüllerine entegre edilmiştir.

Böylece personel veya cihaz bugün nereye taşınırsa taşınsın; NDK, Sağlık Bakanlığı, SGK veya kalite akreditasyon denetimlerinde geçmiş bir tarihe dönük inceleme yapıldığında kayıtlar daima işlemin yapıldığı gündeki gerçek çalışma alanı ve risk ortamını aslına sadık biçimde yansıtır:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **🏥 Sağlık Muayeneleri ve İSG Periyodik Kontrolleri:**
  * **Doğrudan Birim / Görev Yeri Odaklı Tablo:** Muayene listesinde genel anabilim dalı yerine doğrudan personelin çalıştığı spesifik görev yeri (*Tomografi, Girişimsel Anjiyo, Mamografi, PET-CT vb.*) listelenir; fare imleciyle üzerine gelindiğinde ana departman bilgisi ipucu olarak sunulur.
  * **Muayene Tarihindeki Risk Ortamı Mühürleme:** Personel tayin olduğunda geçmiş sağlık muayenelerinin güncel birime kayması engellenmiş; EK-1 Sağlık Raporu Formu (21.5.7077) çıktılarında muayene tarihindeki fiili risk birimi kalıcı güvenceye alınmıştır.
* **☢️ Kişisel Dozimetre ve Radyasyon Maruziyet Kayıtları:**
  * **Kümülatif Doz Risk Güvencesi:** Dozimetre laboratuvar ölçüm sonuçları (Excel/PDF aktarımı veya manuel giriş) işlendiği anda personelin o dönemki fiili çalışma birimi ölçüm kaydına kalıcı olarak mühürlenir.
  * **Birim Bazlı Geçmiş Analizleri:** Personel nakillerinden etkilenmeyen altyapı sayesinde SKS 6.1 Yıllık Kümülatif Doz Takip Raporları ve NDK denetim sorgularında geçmiş dönem maruziyetleri hatasız olarak listelenir.
* **⏱️ Fiili Hizmet (FHZ / Yıpranma Payı) ve Şua İzni Hakedişleri:**
  * **Bordro ve SGK Cetveli Doğruluğu:** 5510 Sayılı Kanun kapsamındaki aylık fiili çalışma süreleri ile hak edilen şua izinleri dönem bazında personelin o aydaki fiili görev yeriyle mühürlenir.
  * Yıllar sonra yapılacak geriye dönük incelemelerde dahi mutemet puantajları ve resmi hak ediş dökümleri personelin güncel kartındaki değişikliklerden etkilenmez.
* **🏖️ Personel İzin Talepleri ve İzin Hareketi Arşivi:**
  * **İzin Kayıtlarında Görev Yeri Mühürleme:** Yıllık, şua, mazeret ve sağlık izin talepleri oluşturulduğu anda personelin o tarihteki fiili çalışma birimi (*Örn: Girişimsel Anjiyo*) kayda işlenir.
  * İzin Listesi tablosunda **"Birim / Görev Yeri"** sütunu devreye alınmış; resmi izin formları ve kurum izin dökümlerinde arşiv bütünlüğü sağlanmıştır.
* **🎓 Hizmet İçi Eğitim, SKS Uyum Matrisi ve LMS Sertifikaları:**
  * **Eğitim ve Sertifikalarda Görev Yeri Güvencesi:** Zorunlu radyasyon güvenliği eğitimleri ve başarı sertifikaları tamamlandığı anda personelin o tarihteki görev yeri mühürlenir.
  * Uyum Matrisi ve Atama tablolarında doğrudan personelin fiili birimi gösterilir; SKS Radyasyon Güvenliği Eğitim Matrisi raporlarında mevzuat tamlığı korunur.
* **🔧 Tıbbi Cihaz Arıza Müdahaleleri ve Periyodik Bakım Kayıtları:**
  * **Cihaz Nakillerinde Arıza/Bakım Lokasyonu Koruması:** Cihaz yıllar sonra başka bir odaya veya polikliniğe taşınsa dahi, geçmişteki arıza ve bakım kayıtlarının cihazın o tarihteki gerçek odası ve birimiyle mühürlü kalması sağlanmıştır.
  * **Bildiren ve Refakat Eden Personel Doğrulaması:** Arızayı bildiren personelin ve bakıma eşlik eden sorumlu teknisyenin o tarihteki çalışma birimi de servis dökümlerinde gerçeğe uygun olarak muhafaza edilir. Bakım Radarı ve Resmi Servis Formlarında tam lokasyon izlenebilirliği sunulur.

---

## 📅 RADPYS V4.0.3.38: Bağımsız Cihaz Periyodik Bakım Modülü ve Aylık Bakım Radarı

Arıza/onarım süreçleri ile periyodik bakım takvimi birbirinden tamamen ayrılarak, Radyoloji Departmanının bakım süreçlerini proaktif şekilde takip edebileceği bağımsız **Periyodik Bakım Yönetimi** modülü devreye alınmıştır:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Radyoloji Odaklı Aylık Bakım Radarı:**
  * Amaç karmaşık bir atölye veya parça programı oluşturmak değil; radyoloji ekibinin cihazlarının bakım dönemlerinden önceden haberdar olması ve biyomedikal ya da yetkili servisin son dakika *"bugün bakım var, cihazı kapatın"* sürprizlerinin önüne geçmektir.
  * Ekranın üst kısmında 4 temel radar kartı bulunur:
    * **Bu Ay Yapılacak Bakımlar:** İçinde bulunulan ay içerisinde planlanan tüm bakımları gösterir.
    * **Gelecek Ay:** Bir sonraki ayın bakım yoğunluğunu erkenden planlamayı sağlar.
    * **Geciken Bakımlar:** Planlanan tarihi geçmiş ancak henüz servis formu sisteme işlenmemiş bakımları kırmızı rozetle uyarır.
    * **Tamamlananlar:** Yıl içinde başarıyla tamamlanmış bakımların genel toplamını sunar.
* **İhale Şartnamesine Göre Otomatik Bakım Takvimi Üreticisi:**
  * Cihaz bakımları genellikle yıllık ihale veya bakım sözleşmesi kapsamında yürütülür. Yeni planlama sihirbazı sayesinde:
    * Cihaz, ilk bakım tarihi ve sözleşme bitiş tarihi girilir.
    * İhale periyodu (1 Aylık, 3 Aylık, 6 Aylık veya 12 Aylık) seçilir.
    * Sistem, sözleşme bitimine kadar olan tüm bakım randevu tarihlerini otomatik olarak hesaplar ve takvime tek seferde **"Beklemede"** olarak işler.
* **Tek Tıkla Bakım Kapatma ve İmzalı Servis Formu Kasası:**
  * Yetkili servis veya biyomedikal ekibi bakımı tamamladığında, ilgili satır seçilerek **[Bakımı Tamamla]** butonuna basılır.
  * Bakıma refakat eden klinik personeli ve teknisyen seçilir; firma tarafından teslim edilen ıslak imzalı **Servis Formu (PDF)** tek tıkla güvenli evrak kasasına yüklenir.
  * Yüklenen servis formları KVKK standartlarında yüksek güvenlikli kurumsal şifreleme ile şifrelenir; listedeki ilgili kayda çift tıklandığında servis formu anında açılır.

---

## 🛠️ RADPYS V4.0.3.37: Tıbbi Cihaz Kalite Kontrol (QC) 4 Adımlı Ölçüm Sihirbazı

Tıbbi cihazların periyodik Kalite Kontrol (QC) ve kalibrasyon ölçümlerinin kaydedildiği kokpit ekranı, karmaşık ve kalabalık tek sayfa görünümünden kurtarılarak modern, adımlı bir **Adım Adım Sihirbaz** yapısına dönüştürülmüştür:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **4 Aşamalı Ergonomik İş Akışı:**
  * **1. Cihaz & Protokol:** Cihaz seçimi, üretici protokolü veya Türkak/DIN/NDK test standardının belirlenmesi.
  * **2. Ekipman & Ekip:** Kalibratör, iyon odası ve fantom gibi ölçüm cihazları ile testi yürüten medikal fizikçi/uzman seçimi.
  * **3. Canlı Ölçümler:** Doz doğruluğu, tekrarlanabilirlik, tüp voltajı ve sızıntı ölçüm parametrelerinin canlı olarak girildiği geniş tablo.
  * **4. Değerlendirme & Onay:** Tolerans dışı sapma uyarıları, genel uygunluk değerlendirmesi ve uzman onay notu.
* **Tek Tıkla Doğrudan Ölçüm Hücresi Düzenleme:**
  * Ölçüm tablosundaki veri giriş engelleri tamamen kaldırılmış; hücrelere tek tıkla dokunulduğunda doğrudan sayısal değer girilebilmesi sağlanmıştır.
  * Sütun başlıklarındaki metin kırpılmaları giderilmiş, tüm ölçüm değerleri tabular (hizalı) font yapısıyla netleştirilmiştir.
* **Adımlar Arası Özgür ve Güvenli Geçiş:**
  * Kullanıcı alt kısımdaki [Sonraki] / [Geri] butonlarıyla ilerleyebildiği gibi, üstteki adımlara doğrudan tıklayarak istediği aşamaya anında dönebilir.

---

## 📋 RADPYS V4.0.3.36: Rapor ve Tutanak Merkezinde Kayıtlı Tutanak Şablonu Düzenleme Kolaylığı

Rapor ve Tutanak Merkezi ekranından daha önce kaydedilmiş bir tutanağı veya komisyon kararını düzenlemek isteyen kullanıcılar için akıllı ve amaca uygun bir deneyim sunulmuştur:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Tutanaklara Özel "Tutanağı Düzenle" Butonu:**
  * Sol listeden herhangi bir tutanak şablonu seçildiğinde alt araç çubuğundaki genel *"Özelleştir"* butonu otomatik olarak **"Tutanağı Düzenle"** moduna geçer.
  * Kullanıcı bu butona bastığında veya listedeki tutanağa çift tıkladığında, teknik rapor tasarım ekranı yerine doğrudan pratik ve tanıdık **Tutanak ve Karar Sihirbazı** açılır.
* **Eski Verilerin Eksiksiz Geri Yüklenmesi:**
  * Tutanak açıldığında; daha önce kaydedilmiş olan başlık, toplanma gerekçesi, heyet karar metni, belge düzeni (Salt Metin / Tablolu) ve imza komisyonu üyeleri ekrana eksiksiz olarak geri yüklenir.
* **Mevcut Şablonu Güncelleme veya Yeni Kopya Oluşturma Esnekliği:**
  * Düzenleme tamamlanıp **[Şablon Olarak Kaydet]** denildiğinde sistem kullanıcıya mevcut şablonun üzerine güncelleme yapma veya yeni bağımsız bir kopya olarak saklama tercihi sunar; böylece mükerrer şablon karmaşası önlenir.
* **Anında Liste ve Sayaç Senkronizasyonu:**
  * Sihirbaz kapandığında yapılan tüm değişiklikler ana listeye ve özet sayaç kartlarına anında yansır; pencereyi yeniden açma gereksinimi tamamen ortadan kalkar.

---

## 🌐 RADPYS V4.0.3.35: Metin Giriş Alanları ve Formlarda Türkçe Sağ Tık Düzenleme Menüsü

Kullanıcıların tutanak hazırlama, gerekçe yazma, arama yapma ve form doldurma işlemleri sırasında fare sağ tuşuna tıkladıklarında açılan bağlam menüsü bütünüyle Türkçe kullanım standartlarına uyarlanmıştır:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Eksiksiz Türkçe Metin Düzenleme Seçenekleri:**
  * Metin kutuları üzerinde sağ tıklandığında önceden İngilizce olarak görüntülenen komutlar artık doğrudan Türkçe olarak sunulmaktadır:
    * *Undo* ➔ **Geri Al**
    * *Redo* ➔ **Yinele**
    * *Cut* ➔ **Kes**
    * *Copy* ➔ **Kopyala**
    * *Paste* ➔ **Yapıştır**
    * *Delete* ➔ **Sil**
    * *Select All* ➔ **Tümünü Seç**
* **Tüm Modüllerde Geçerli Bütüncül Deneyim:**
  * Tutanak ve Karar Sihirbazı'ndaki gerekçe alanları, arama kutuları, personel notları, cihaz açıklamaları ve tüm form giriş alanlarında sağ tık menüsü otomatik olarak Türkçe açılır; klavye kısayolları (Ctrl+Z, Ctrl+C, Ctrl+V vb.) kusursuz şekilde çalışmayı sürdürür.

---

## 📄 RADPYS V4.0.3.34: Evrensel Tutanak ve Karar Sihirbazı: Esnek Belge Düzeni ve Özel Şablonlar

Hastanelerde ve radyoloji kliniklerinde yürütülen idari ve tıbbi süreçlerde (nöbete gelmeme tutanağı, teknik arıza bildirimleri, komisyon kararları, malzeme sayım tutanakları vb.) ihtiyaç duyulan tutanakların yapısı birbirinden farklıdır. Kimi tutanaklar yalnızca gerekçe ve karardan oluşan salt metin iken; kimileri ise onlarca ekipman veya personelin listelendiği döküm tablolarını içerir. RADPYS V4.0.3.34 sürümüyle birlikte Tutanak ve Karar Sihirbazı tam modüler serbestlik esasına kavuşturulmuştur:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **İkili Belge Düzeni Seçeneği (Salt Metin veya Sandviç Liste):**
  * **Salt Metin Tutanağı (Tablosuz):** Nöbet mazeretleri, idari uyarılar veya heyet kararları gibi liste gerektirmeyen durumlarda kullanılır. Tablo alanı tamamen gizlenir; dökümde hiçbir boş tablo çizgisi veya gereksiz kutu yer almaz. Başlık, toplanma gerekçesi, karar metni ve imza heyeti kusursuz bir mizanpajda üretilir.
  * **Metin + Liste + Karar (Sandviç Düzen):** Birden fazla ekipmanın, cihazın veya personelin icmal halinde sunulması gereken durumlarda kullanılır. Giriş paragrafı, varlık döküm tablosu, sonuç gerekçesi ve komisyon heyeti tek bir resmi evrakta birleşir.
* **Tutanaklarda Sıfır Boş Tablo Güvencesi:**
  * Önceden doğrudan açılan tutanaklarda sistem varsayılan olarak boş bir personel tablosu basarak evrak kirliliğine yol açabiliyordu. Yeni akıllı düzen motoru sayesinde tablosuz tutanaklarda sıfır tablo garantisi getirilmiştir.
* **İlgili Modül / Kapsam Seçimi ve Modüle Özgü Akıllı Değişkenler:**
  * Kullanıcıya kalıplaşmış metinler dayatılmaz. Kullanıcı yalnızca tutanağın ait olduğu birimi (Nöbet, Cihaz, Koruyucu Ekipman, Dozimetre, Sağlık vb.) seçer.
  * Sistem seçilen birime özel tıklanabilir akıllı değişken butonlarını otomatik olarak sunar:
    * *Nöbet:* Nöbet Tarihi, Vardiya, Saat, Personel Adı, Departman.
    * *Cihaz:* Cihaz Kodu, Cihaz Adı, Marka, Model, Seri No, Servis Firması.
    * *Koruyucu Ekipman (RKE):* Ekipman Kodu, Ekipman Türü, Kurşun Eşdeğeri, Muayene Tarihi, Adet.
    * *Dozimetre:* Personel Adı, TC Kimlik, Dozimetre No, Takip Dönemi, Ölçüm Değeri.
  * Butona dokunulduğunda etiket imlecin durduğu yere anında eklenir ve resmi çıktıda kurumun gerçek verileriyle otomatik olarak doldurulur.
* **Gelişmiş Varlık ve Personel Seçimi ile Serbest Satır Düzenleme:**
  * Tablolu sandviç düzende kullanıcı dilerse **[Sistemden Kayıt Ekle]** menüsüyle veritabanındaki personelleri, tıbbi cihazları veya kurşun önlükleri doğrudan seçip tabloya aktarabilir.
  * **[Manuel Satır Ekle]** butonuyla tabloya elle dilediği kadar serbest satır açabilir, çift tıklayarak metinleri anında düzenleyebilir veya seçili satırları silebilir.
* **Kullanıcı Tanımlı Kurumsal Tutanak Şablonu Kaydetme:**
  * Kullanıcı ekranda hazırladığı özel başlığı, gerekçe metnini, karar paragrafını ve komisyon heyetini **[Şablon Olarak Kaydet]** butonuyla kurum kataloğuna ekleyebilir; ilerleyen günlerde aynı tutanak türünü tek tıkla yeniden çağırabilir.
* **Sağlık Muayenesi EK-1 Formunda Geçici Önizleme Kolaylığı:**
  * Personel sevk işlemlerinde veya liste incelemelerinde resmi EK-1 formu açıldığında, belge diske otomatik kaydedilerek rapor klasörünü kirletmez; geçici önizleme olarak açılır. Kullanıcı dilerse yazdırabilir veya istediği konuma kaydedebilir.
* **Personel Muayene Geçmişi Ekranının Sadeleştirilmesi:**
  * Muayene geçmişi penceresi ferah ve sade 4 sütunlu (Muayene Türü, Tarih, Sonuç, Hekim Kararı) yapıya kavuşturulmuş; çift tıklandığında taranmış ıslak imzalı orijinal evrakın veya resmi EK-1 formunun anında açılması sağlanmıştır.

---

## 📜 RADPYS V4.0.3.33: Resmi Tutanaklar, Islak İmzalı Evrak Kasası ve Merkezi Onay Entegrasyonu

Hastanelerde ve radyasyonlu çalışma birimlerinde mevzuat gereği düzenlenen tutanakların (Cihaz Devir-Teslim, Teknik Hasar/Arıza, Montaj/Kabul, Durum Tespiti vb.) yalnızca taslak olarak üretilmesi yeterli olmamakta; komisyon heyetinin ıslak imzalarının alınması, EBYS evrak numarasıyla tescil edilmesi ve dijital kasada güvenle saklanması gerekmektedir. RADPYS V4.0.3.33 sürümüyle birlikte tüm bu süreçleri yöneten **Resmi Tutanaklar ve Dijital Belge Yaşam Döngüsü** altyapısı ve **Merkezi Onay Paneli Hibrit Modeli** kullanıma sunulmuştur:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Tüm Modüller İçin Standart Tutanak Yaşam Döngüsü:**
  * Cihaz, Koruyucu Ekipman (RKE), Dozimetre, Kalite veya İdari işlemler sırasında oluşturulan tüm tutanaklar sistem tarafından otomatik olarak kayıt altına alınır ve "İmza Bekliyor" durumunda takibe başlanır.
  * Her tutanağa kurum standardında çakışmasız benzersiz bir numara tahsis edilir.
* **Islak İmzalı Taranmış Nüsha ve EBYS Tescil Kasası:**
  * Komisyon heyeti (Radyasyon Korunma Sorumlusu, İdari Amir, Taşınır Kayıt Yetkilisi, Tekniker vb.) tarafından ıslak imza ile imzalanan veya EBYS üzerinden paraf edilen resmi belge, sistemin şifreli dijital kasasına tek tıkla yüklenir.
  * Belge yüklenirken EBYS Evrak Numarası ve Tescil Tarihi girilerek arşivleme tamamlanır; tutanak durumu "İmzalandı ve Tamamlandı" olarak kesinleşir.
* **Merkezi Onay Paneli Hibrit Takibi:**
  * Yöneticiler ve birim amirleri; izin, nöbet devri ve ekipman muayenelerini yönettikleri **Onay Bekleyen Görevler** panelinde artık **"Resmi Tutanaklar"** sekmesini de görürler.
  * İmza bekleyen tutanaklar için tek merkezden taslak incelemesi yapılabilir, doğrudan taranmış ıslak imzalı belge yüklenerek onay süreci sonuçlandırılabilir.
* **Bağımsız Tutanak ve Belge Kasası Yönetim Kokpiti:**
  * Ana menüdeki **"Resmi Tutanaklar"** butonu üzerinden ulaşılan yönetim ekranında; geçmiş tüm tutanaklar, modül türleri, durumları (İmza Bekleyen / Tamamlanan / İptal) ve tarih aralıklarına göre filtrelenebilir.
  * İstendiğinde orijinal taslak Word belgesi veya arşivlenmiş ıslak imzalı taranmış PDF belgesi saniyeler içinde görüntülenebilir.

---

## 📋 RADPYS V4.0.3.32: Tıbbi Cihaz Tutanak Sihirbazı ve Resmi Hurdaya Ayırma (HEK) Ayrımı

Tıbbi Cihaz ve Lisans Yönetimi modülünde **"Tutanak Oluştur"** işlemi, cihazların çalışma durumunu istemsiz olarak hurdaya çeviren kurgudan tamamen arındırılarak genel klinik/idari tutanaklar ile resmi hurdaya ayırma (HEK) süreci birbirinden bağımsız hale getirilmiştir:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Çok Amaçlı Cihaz Tutanakları (Cihazın Durumunu Korumalı):**
  * Cihaz listesindeki **"Tutanak Oluştur"** butonuna basıldığında veya tablo sağ tık menüsünden seçildiğinde kullanıcıya 4 hazır kurumsal şablon sunulur:
    1. **Birimler Arası Devir - Teslim / Zimmet Tutanağı:** Oda, servis veya sorumlu değişikliklerinde cihazın eksiksiz ve çalışır vaziyette devredilmesini tutanak altına alır.
    2. **Teknik Hasar ve Arıza Tespit Tutanağı:** Voltaj dalgalanması, kullanıcı hatası veya parça hasarlarında teknik heyetin tespitlerini resmi evraka dönüştürür.
    3. **Montaj / Devreye Alma ve Kabul Tutanağı:** Yeni cihaz kurulumu veya bakım-onarım sonrası kabul heyeti incelemelerini onaylar.
    4. **Genel Komisyon ve Durum Tespit Tutanağı:** İdari ve teknik heyetlerin yerinde yaptığı sayım ve tespitleri belgeler.
  * Bu tutanaklar hazırlandığında cihazın **Aktif / Çalışıyor** durumu kesinlikle bozulmaz; üretilen tutanak belgesi kurumun güvenli evrak kasasında ilgili cihazın künyesine işlenir.
* **Resmi HEK (Hurdaya Ayırma) Süreci ve Komisyon Kararı:**
  * Bir cihazın ekonomik veya teknik ömrünü tamamlaması nedeniyle hurdaya ayrılması gerektiğinde, bu işlem **"Sil / HEK"** butonu veya sağ tık menüsündeki **"Cihazı HEK'e Ayır (Resmi HEK Tutanağı)"** seçeneği üzerinden yürütülür.
  * NDK ve Taşınır Mal Yönetmeliği standartlarında gerekçeli heyet kararı metinleriyle komisyon tutanağı hazırlanır; tutanak onaylandığında resmi HEK dosyası açılarak cihaz mevzuata uygun şekilde imza sürecine (`HEK - Tutanak Bekliyor`) alınır.
* **Hızlı ve Tutanaksız Arşivleme Seçeneği:**
  * Sehven açılan veya test amaçlı kayıtlar için "Sil / HEK" butonundan **"Kayıttan Kaldır / Arşivle"** seçilerek, kullanıcıdan resmi süreç hatırlatmasıyla onay alındıktan sonra tutanaksız doğrudan arşivleme yapılabilir.

---

## 📁 RADPYS V4.0.3.31: Modül ve Personel Odaklı Akıllı Dijital Özlük Arşivleme Sistemi

RADPYS V4 dışa aktarım ve raporlama altyapısı, Excel, Word ve PDF belgelerinin tek bir klasöre yığılarak karmaşaya yol açmasını önlemek ve resmi denetimlerde (NDK, Sağlık Bakanlığı, Kalite Akreditasyon) istenen evrakların saniyeler içinde bulunabilmesini sağlamak amacıyla **Öneri A: Bireysel Personel Dijital Özlük Arşivi** mimarisiyle baştan sona yapılandırılmıştır:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Bireysel Personel Dijital Özlük Arşivi (`Personel / [Ad_Soyad]_[TC] / [Modül]`):**
  * Bir çalışan için herhangi bir ekrandan belge üretildiğinde (Sağlık Muayenesi EK-1 Sevk veya Karar Formu, Dozimetre RD.F43 Araştırma Tutanağı, Yıllık İzin Çizelgesi, Nöbet Listesi veya RGS Görevlendirme Belgesi); sistem dosyayı doğrudan personelin adına ve T.C. Kimlik numarasına özel açılan klasörün altındaki ilgili modül dizinine kaydeder.
  * Böylece her personelin tüm mevzuat evrakları kendi dijital dosyasında eksiksiz ve düzenli olarak birikir.
* **Cihaz ve Lisans Teknik Arşivi (`Cihaz ve Lisans / [Cihaz_Kodu]`):**
  * Radyoloji cihazlarına ait lisans belgeleri, muayene raporları ve teknik şartnameler ilgili cihazın koduna özel arşiv klasöründe toplanır.
* **Modül Bazlı Genel ve Toplu Rapor Düzeni:**
  * Kurum geneli personel listeleri, toplu dozimetre laboratuvar dökümleri, aylık nöbet çizelgeleri ve genel kalite tutanakları doğrudan ilgili modülün kendi genel arşiv klasöründe (`Dozimetre`, `Sağlık Muayenesi`, `Koruyucu Ekipman (RKE)`, `Tutanaklar ve Kalite`, `Ortam Dozu` vb.) düzenli olarak muhafaza edilir.
* **Kurumsal ve Standart Dosya Adlandırma Kuralı:**
  * Dışa aktarılan tüm dosyalar; modülün adı, işlemin türü, personel/cihaz detayı ve saniye hassasiyetinde tarih-saat bilgisiyle isimlendirilir (Örn: `Saglik_Muayene_EK1_Ahmet_Yilmaz_12345678901_20261013_143022.pdf`).
  * Dosya adlarındaki Türkçe ve özel karakterler otomatik olarak güvenli biçime dönüştürülerek hiçbir arşiv sisteminde bozulma veya açılamama riski bırakılmaz.
* **Akıllı Masaüstü Varsayılanı:**
  * Ayarlarda özel bir yol belirlenmemiş olsa dahi, sistem kullanıcının Masaüstünde otomatik olarak **"RADPYS Raporları"** ana dizinini oluşturur ve kaydetme pencerelerini doğrudan ilgili personelin veya modülün alt klasöründe hazır olarak açar.

---

## 📋 RADPYS V4.0.3.30: Akıllı Doz Araştırma Karar Motoru (Akıllı Klinik Karar Desteği), Sağlık Muayene İki Aşamalı İş Akışı, Resmi EK-1 ve RD.F43 Raporlama Standardizasyonu

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Sağlık Muayenelerinde İki Aşamalı Klinik İş Akışı (Ön Hazırlık & Sevk ve Hekim Kararı):**
  * Sağlık muayene süreci hastane ve işyeri hekimliği klinik pratiğine uygun olarak iki bağımsız aşamaya ayrıldı:
    * **1. Aşama (Ön Hazırlık & Sevk):** Çalışan bilgileri, radyasyon maruziyet geçmişi, anamnez soruları ve 12 belirti/bulgu sorgulanarak sevk kaydı oluşturulur; Sağlık Bakanlığı ve NDK standartlarında resmi EK-1 Sevk ve Muayene Formu otomatik üretilir.
    * **2. Aşama (Hekim Kararı & Arşivleme):** Poliklinik muayeneleri (Dahiliye, Göz, Dermatoloji) ve laboratuvar sonuçları tamamlandıktan sonra nihai hekim kanaati sisteme işlenir; ıslak imzalı taranmış form şifreli arşive eklenir.
* **Sağlık Bakanlığı ve NDK Formatında Resmi İki Sayfalık EK-1 A4 PDF Formu:**
  * HTML önizleme yerine doğrudan resmi mevzuat formatında, kurumsal antetli 2 sayfalık A4 PDF çıktısı üretilir ve otomatik açılır.
  * 1. Sayfada çalışan beyanı ve anamnez yer alırken; 2. Sayfada poliklinik hekimlerinin elle muayene bulgularını yazıp kaşeleyebileceği resmi boş muayene tabloları (El-Cilt, Malignite, Tam Kan Sayımı ve Katarakt) dürüst ve temiz olarak sunulur.
  * Şablon yazı tipi resmi evrak standardı olan Times New Roman ile yenilenerek net ve yüksek kontrastlı baskı kalitesi sağlandı.
* **Ferah ve Dengeli Sağlık Muayene Liste Kokpiti:**
  * Muayene takip listesinde personel adı, birim ve unvan sütunları ekran genişliğini dengeli olarak paylaşacak şekilde genişletildi.
  * Muayene tarihleri ve karar sütunlarındaki metin kesilmeleri giderildi; buton isimleri "Yeni Sevk Başlat" ve "Hekim Kararı" olarak kurumsal iş akışına tam uyarlandı.
* **Resmi RD.F43 ve EK-1 Dosya Adlandırmalarında Personel Adı Soyadı Standardı:**
  * Dışa aktarılan RD.F43 Doz Araştırma ve EK-1 Sağlık Muayene dosyalarında belge adları otomatik olarak `RD-F43_{RaporNo}_{Ad_Soyad}` ve `EK1_Saglik_Muayene_{Ad_Soyad}_{TC}_{Tarih}` olarak düzenlenir; dosya karmaşası önlenerek hızlı arşivleme sağlanır.
* **Birebir NDK Resmi Soru-Cevap Düzeninde RD.F43 Raporları:**
  * RD.F43 Doz Araştırma Formunun Word ve PDF çıktıları, NDK'nın resmi 2 sayfalık matbu şablonuna birebir uyumlu hale getirildi. 13 sorunun tamamı soru metinleri, seçenekleri ve çalışan/RKS beyanlarıyla birlikte resmi tablo düzeninde eksiksiz olarak basılır.
* **Uluslararası Standartlarda Klinik Karar Destek Sistemi (CDSS):**
  * Dozimetre Takip modülünde yasal eşik aşımı durumlarında açılan Resmi RD.F43 Doz Araştırma Formu, IAEA GSG-7 ve NDK (Nükleer Düzenleme Kurumu) mevzuat kriterlerine dayalı **akıllı bir karar ve teşhis motoru** ile güçlendirildi.
  * Formdaki sorulara verilen yanıtlara göre sistem; vakanın **"Kişisel Tıbbi Tetkik (Hasta Maruziyeti)"**, **"Alanda Unutulma (Kanıtlanmış Statik Maruziyet)"**, **"Kurşun Önlük Dışı Hatalı Kullanım"**, **"Tesis Zırhlama/Cihaz Kaçağı"** veya **"Yasal Doz Sınırı Aşımı"** olup olmadığını anlık ve otomatik olarak teşhis eder.
* **Akla Yatkınlık Doğrulaması ve Webster Efektif Doz Düzeltmesi:**
  * Alanda unutulma vakalarında teorik fiziksel maruziyet hesabı ile laboratuvardan gelen ölçüm karşılaştırılarak akla yatkınlık (uyum) skoru üretilir; unutulma iddiası bilimsel olarak doğrulanır.
  * Kurşun önlük üstü kullanımlarda uluslararası NCRP 122 Webster katsayısı uygulanarak personelin iç organlarının aldığı net efektif doz otomatik hesaplanır.
* **Resmi Gerekçelendirme ve Tek Tıkla Tutanak Tamamlama:**
  * Karar motorunun ürettiği bilimsel teşhis, NDK resmi gerekçe metni ve zorunlu DÖF (Düzeltici Önleyici Faaliyet) kararı tek bir butona tıklanarak doğrudan resmi tutanak ve sonuç sekmesine aktarılır; RKS'nin elle uzun tutanak yazma yükü ortadan kaldırılır.
* **Resmi RD.F43 Word ve Kurumsal PDF Rapor Çıktıları:**
  * NDK denetimlerinde talep edilen 13 soruluk Çalışan Beyanı ve RKS Saha İnceleme soru-cevap tablosu, DÖF takip numarası ve yasal dayanaklarıyla eksiksiz resmi Word (.docx) ve renkli PDF raporu olarak tek tıkla indirilir.
  * Islak imzalı resmi tutanaklar şifreli KVKK Evrak Kasasında güvenle arşivlenir ve sistem içerisinden doğrudan görüntülenebilir.
* **Tek ve Ferah 8 Sütunlu Bütünleşik Aksiyon Kokpiti:**
  * Önceki ekranda yan yana sıkışan ve birim/gerekçe metinleri kesilen 2 ayrı tablonun yerine; Personel Adı, Birimi, Ölçüm Dönemi, Derin Dozu, Risk Seviyesi Rozeti, Aşım Gerekçesi, İnceleme Durumu ve RD.F43 Rapor Hazırlanma Durumunu tek bakışta gösteren geniş, tam sayfa bir kokpit tablosu getirildi.
  * "Tüm Kayıtlar", "İnceleme Bekleyenler", "Açık Aksiyonlar" ve "Kapatılanlar" durum filtreleriyle vakalar anlık olarak izlenir.
* **Güvenlik Kilitli Modern Aksiyon ve Kapatma Kokpitleri:**
  * Aksiyon kapatma, birim içi radyasyon incelemesi ve takip ölçümü planlama işlemleri modern ve korumalı form pencerelerine kavuşturuldu.
  * Resmi RD.F43 araştırma tutanağı düzenlenmeden ve dosya takip numarası girilmeden dosyanın kapatılmasını engelleyen mevzuat denetim güvenlik kilidi devreye alındı.
* **Yüksek Kontrastlı ve Ergonomik Form Sihirbazı:**
  * Karar motorunun önerdiği teşhisi forma aktaran buton zümrüt yeşili canlı rengi ve onay simgesiyle öne çıkarıldı.
  * Form adımları arasındaki İleri ve Geri butonları gözün doğal okuma akışına göre sağ alt köşede düzenli bir sıraya kavuşturuldu.
* **Web Portal ve RKS/Admin Çift Yönlü Bildirim ve Alarm Mekanizması:**
  * Bir çalışan hakkında Doz Araştırma Dosyası açıldığında, personelin Web Portal üzerinden "Çalışan Beyanı" sorularını yanıtlaması için sistem tarafından personelin bildirim kutusuna otomatik görev bildirimi gönderilir.
  * Ölçüm sonucu yasal uyarı eşiğini (2.0 mSv) aştığında hem tekil kayıtta hem de Excel/PDF toplu aktarımında RKS ve kurum yöneticilerinin zil kutusuna anlık kırmızı alarm bildirimi düşer; tüm personellere periyodik doz sonuçları eksiksiz iletilir.
* **Rol ve Sorumluluk Tabanlı 4 Adımlı Yeni Sihirbaz Mimarisi:**
  * **1. Adım (Çalışan Beyanı - Bölüm 2):** Çalışma süresi, kullanılan koruyucu donanımlar (KKE), alanda unutulma ve şahsi tıbbi tetkik beyanı. Web Portal üzerinden çalışanın doğrudan doldurabileceği mimari sağlandı.
  * **2. Adım (RKS Saha İncelemesi - Bölüm 3):** Tesis ve cihaz durumu, radyoaktif kirlilik, radyoizotop türü, ortam dozu artışı, diğer çalışanların dozu ve eğitim durumu iki dengeli kartta toplandı.
  * **3. Adım (Doz Analizi & Karar):** Fiziksel maruziyet hesabı, akla yatkınlık skoru ve canlı karar rozeti.
  * **4. Adım (Yasal Karar & Sonuç - Bölüm 4):** Değerlendirme tipi, DÖF takibi, KVKK evrak kasası ve Word (.docx) / PDF resmi çıktıları. Alan genişlikleri artırılarak metin kesilmeleri tamamen önlendi.
* **Esnek ve Güvenli Düzeltme Modu (Akıllı Devam Etme & Denetim İzi):**
  * Önceden başlatılmış açık bir inceleme seçildiğinde sistem kullanıcıyı engellemez; doğrudan var olan formu düzenlemeye açarak kaldığı yerden devam etmesini sağlar.
  * Kapatılmış tutanaklarda sehven yapılan bir giriş hatasını düzeltmek için denetim izine resmi gerekçe notu düşülerek form güvenle yeniden açılabilir.
* **Rapor Sütunlarında Mükerrerliğin Giderilmesi ve Tekil 'Ad Soyad' Standardı:**
  * Rapor Tasarım Sihirbazı'nda, Rapor Merkezi'nde ve sistemdeki tüm rapor çıktılarında personelin adı ve soyadının hem ayrı ayrı ("Adı", "Soyadı") hem de birleşik ("Ad Soyad") olarak mükerrer listelenmesi sonlandırıldı.
  * Artık tüm rapor hazırlama ve sütun seçimi ekranlarında personelin tam adı tekil, kurumsal ve sade bir biçimde **"Ad Soyad"** sütunu olarak yer almaktadır.

---

## 📋 RADPYS V4.0.3.29: Merkezi Dışa Aktarma Klasörü ve Dosya Kaydetme Standardizasyonu

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Tüm Ana Listelerden Tek Noktaya Düzenli Dışa Aktarma:**
  * Personel, Tıbbi Cihaz, Radyasyon Koruyucu Donanım (RKE), Ortam Dozu, İzin Takip, Nöbet Çizelgeleri, Fiili Hizmet (Şua), Hizmet İçi Eğitim, Sistem Denetim İzi ve Sistem Tanımlamaları ekranlarından yapılan tüm dışa aktarma (Excel, PDF, Word, ZIP arşivi) işlemlerinde kaydetme penceresi artık otomatik olarak kurumun belirlenmiş merkezi rapor klasöründe açılır.
  * Dosyaların kullanıcının Masaüstü, İndirilenler veya rastgele sistem klasörlerine dağılması engellenmiş; kurum içi denetim ve arşiv belgelerinin tek bir merkezi arşiv dizininde düzenli olarak toplanması sağlanmıştır.
* **Toplu Karekod ve Etiket Arşivlerinde Akıllı Dizinleme:**
  * Koruyucu önlüklerin, tıbbi cihazların ve ortam dozu ölçüm istasyonlarının toplu karekod baskı paketleri (.zip) dışa aktarılırken dosya kaydetme penceresi doğrudan merkezi çıktı dizinine odaklanır; kullanıcıların etiket ve baskı paketlerini aramakla vakit kaybetmesi önlenir.
* **Şablon ve Veri Listesi İndirmelerinde Kolay Erişim:**
  * Toplu personel yükleme şablonu, soru havuzu şablonu veya sistem tanımları dışa aktarılırken dosyalar merkezi klasörde düzenli isim önerileriyle sunularak tek tıkla kaydetme konforu sağlanmıştır.

---

## 📋 RADPYS V4.0.3.28: Enter Tuşu ile Hızlı Kayıt ve Kusursuz Telefon Numarası Düzeni

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Enter Tuşu ile Kesintisiz Hızlı Kayıt Deneyimi:**
  * Personel ekleme ve düzenleme sayfalarında, acil durum yakın bilgisi ekleme pencerelerinde, eğitim, sertifika, koruyucu donanım (RKE), cihaz ve muayene kayıt ekranlarında form alanları doldurulurken klavyeden Enter tuşuna basıldığında kayıt işlemi anında ve güvenle tamamlanır.
  * Çok satırlı adres ve açıklama/not alanlarında kullanıcının yeni satıra geçme işlevi korunmuş; veri giriş hızını maksimuma çıkaran akıllı odaklama disiplini kazandırılmıştır.
* **Telefon Numaralarında Akıllı Formatlama ve Sıfır Kayma Güvencesi:**
  * Personel ve acil durum iletişim bilgilerinde telefon numarası gösterilirken veya güncellenirken yaşanan rakam kayması, parantez karmaşası veya son hanelerin kesilmesi sorunu kökten çözüldü.
  * Numara veritabanında veya harici listelerde ister `0532...` ister `532...` ister ülke koduyla yer alsın, formlara aktarılırken otomatik olarak kurumsal `(5XX) XXX-XX-XX` standardına dönüştürülür.
  * Kullanıcı klavyeden numara yazarken alışkanlıkla ilk hane olarak `0` tuşuna bassa dahi sistem sıfırı otomatik yutarak `5` ile başlamasını sağlar; böylece hiçbir hane kaybolmaz veya eksik kalmaz.

---

## 📋 RADPYS V4.0.3.27: Liste Dışa Aktarımlarında Mükerrer Dosya Önleme ve Akıllı Raporlama

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Kusursuz Tek Dosya Çıktısı (Sıfır Mükerrer Kayıt):**
  * Personel Listesi, Cihaz Yönetimi, Koruyucu Donanım (RKE), Nöbet, İzin ve Sağlık Tetkik ekranlarından PDF, Excel veya Word olarak liste çıktısı alındığında, sistemin arka planda zaman damgalı fazladan geçici kopya bırakması sorunu tamamen giderildi.
  * Dışa aktarma işlemlerinde rapor doğrudan kullanıcının belirlediği dosya adına ve hedefine kaydedilerek klasör kirliliği ve ikiz dosya karmaşası sonlandırıldı.
* **Akıllı Klasör Yönlendirmesi:**
  * Dışa aktarma penceresi açıldığında sistem otomatik olarak kurumun standart "RADPYS Raporları" klasörünü ve güncel tarihi içeren dosya adını hazır sunarak tek tıkla kaydetme konforu sağlandı.

---

## 📋 RADPYS V4.0.3.25 - V4.0.3.26: Akıcı Pencere Deneyimi ve Kusursuz Türkçe Arama Eşleme

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Akıcı Pencere Kapatma Deneyimi:**
  * NDK RKP Hazırlama Sihirbazı veya alt pencereler kapatıldığında ekranın pürüzsüzce ana çalışma alanına dönmesi sağlandı; arka planda boş/gri pencere kalması engellendi.
  * Sistemdeki tüm kapatma butonları kurumsal görsel temayla ve emniyetli pencere yönetimiyle standardize edildi.
* **Kusursuz Türkçe Arama ve Karakter Eşleme:**
  * Arama ve filtreleme alanlarında Türkçe karakterlerin (`I-ı`, `İ-i`, `Ş-ş`, `Ğ-ğ` vb.) büyük/küçük harf duyarsızlığı giderilerek unvan, personel ve şablon aramalarında kusursuz eşleşme sağlandı.

---

## 📋 RADPYS V4.0.3.19: SKS v6.1 Sağlıkta Kalite Standartları ve Kalite Dokümanları Entegrasyonu

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

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

## 📋 RADPYS V4.0.3.18: Resmi Yatay A4 Mizanpaj ve Eksiksiz NDK Başvuru Dosyası

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Resmi Yatay A4 (Landscape) Mizanpaj:**
  * Orijinal NDK kılavuz formatı gereği 13 sütunlu cihaz ve donanım tablolarının sütun kayması olmadan tam yerleşebilmesi için belge motoru standart yatay A4 düzenine geçirildi.
* **Eksiksiz Tüm Tablolar (KB.1 - KB.8):**
  * Kuruluş Bilgileri (KB.1), Yetkili Bilgileri (KB.2), RKS Tablosu (KB.3), Radyasyon Görevlileri Tablosu (KB.4), Cihazlar Tablosu (KB.5), Radyasyon Ölçüm Cihazları (KB.6), Aktif Kişisel Dozimetreler (KB.7) ve 13 sütunlu Koruyucu Donanım Matrisi (KB.8) resmi dipnotlarıyla birlikte eksiksiz tamamlandı.
* **Sihirbaz Tablolarında Canlı Eşitleme:**
  * Sihirbaz ekranındaki koruyucu donanım matrisi 13 sütuna çıkartıldı; aktif dozimetre tablosu canlı sistem kayıtlarıyla senkronize edildi.

---

## 🧙‍♂️ RADPYS V4.0.3.17: 8 Adımlı NDK RKP Hazırlama Sihirbazı ve Hizmet İçi Eğitim (LMS) Entegrasyonu

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

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

## 🏛️ RADPYS V4.0.3.16: NDK RSGD-KLV-014 Tıbbi Radyoloji Radyasyondan Korunma Programı (RKP) Doküman Motoru

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

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

## 🏛️ RADPYS V4.0.3.15: Sistem Geneli Tablo Seçim ve Sıralama Kararlılığı

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Tablo Sıralama ve Seçim Kararlılığı:**
  * Kullanıcıların tablolarda sütun başlıklarına tıklayarak sıralama yapması veya filtre uygulaması esnasında meydana gelebilecek satır kayması riski tamamen ortadan kaldırıldı.
  * Tabloda sıralama veya filtreleme yapılsa dahi, seçilen satır her zaman doğru kayda kilitlenir; yanlış kaydın açılması veya silinmesi engellenir.
* **Kapsamlı Modül Güvenliği:**
  * Fiili hizmet dağılım ve rapor tabloları, 18 referans tanım listesi (birimler, unvanlar, izinler, tatiller, eğitimler vb.), 6 onay masası tablosu ve ortam dozu ölçüm listelerinde tam seçim emniyeti sağlandı.
* **Akıcı Arayüz ve Diyalog Kararlılığı:**
  * Açılır kutu ve dinamik liste geçişlerinde pencerelerin donmadan, akıcı ve kararlı çalışması güvenceye alındı.

---

## 🏛️ RADPYS V4.0.3.14: PDF ve Excel Resmi Belge Standardı, Evrak Yaşam Döngüsü (v1 Taslak -> v2 İmzalı) ve Onay Bekleyen Görevler Kokpiti

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

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

## 🏛️ RADPYS V4.0.3.12: İki Aşamalı HEK & Tasfiye Süreci, Ayniyat EBYS Kapatma ve Mühürlü Dosya

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

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

## 🏛️ RADPYS V4.0.3.4: 300 DPI Endüstriyel QR Baskı Paketi (.ZIP) ve Dürüst Kurum Bilgisi Standardı

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

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

## 🏛️ RADPYS V4.0.3.0: Klinik Raporlama, Şablon Tasarım Stüdyosu ve Evrensel Tutanak Merkezi

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

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

## 📋 RADPYS V4.0.2.25: Esnek Raporlama Menüsü, Tek Tık Dışa Aktarım ve %100 Türkçe Kullanıcı Arayüzü

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

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

## 📋 RADPYS V4.0.2.24: Koruyucu Ekipman Envanter Tablosu Sadeleştirmesi

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **9 Sütunlu Sade ve Ferah Tablo:** Tablodaki yatay sıkışıklık ve metin kesintileri giderilerek 9 temel sütun belirlendi (*Ekipman No, Birim No, Cinsi, Beden, Departman, Ekipman Yaşı, Son Muayene, Muayene Durumu, Sonraki Muayene*).
* **Kesintisiz Birim Adları:** Birim ve departman isimlerinin üç nokta ile kesilmesi engellendi; tam adlar esnek genişlikle sunuldu.
* **Net Durum Rozetleri:** *Uygun, Şartlı Kullanım, HEK / Hurda, Muayenesiz* ve *Günü Geçti* durumları belirgin kurumsal rozetlerle gösterildi.

* **Ayrıştırılmış Muayene Bilgisi ve Klinik Durum Rozetleri:**
  * **Son Muayene Sütunu:** Ekipmanın en son kontrolden geçtiği geçmiş tarih sabit olarak sunulur.
  * **Muayene Durumu Sütunu:** Süre durumundan bağımsız olarak ekipmanın gerçek muayene ve klinik statüsünü yansıtır (*Uygun*, *Şartlı Kullanım*, *HEK / Hurda*, *Muayenesiz*, *Bakımda*).
  * **Sonraki Muayene Sütunu:** Kontrol periyodu dolmuş ekipmanlarda doğrudan kırmızı **Günü Geçti** rozeti görüntülenir. Rozetin üzerine gelindiğinde planlanan hedef muayene tarihi ve kaç gün geciktiği bilgi balonunda gösterilir. Kontrol periyodu güncel olan ekipmanlarda ise planlanan tarih korunur.

---

## 🦺 RADPYS V4.0.2.23: Koruyucu Ekipman (RKE) Bütünleşik Muayene Kokpiti

Önceki sürümlerdeki mod geçişi karmaşası kaldırılarak tek ekranda eksiksiz bir kalite kontrol kokpiti kuruldu:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Yan Yana Bütünleşik Çalışma Alanı:**
  * *Sol Panel (Görsel Teşhis):* Tiroid, önlük, etek-yelek ve gonad için dinamik vektörel silüetler; ön ve arka yüz geçişi, tek tıkla dokunmatik delik/yırtık işaretleme ve kusurlar tablosu.
  * *Sağ Panel (Fiziki Kontroller ve Karar):* Dikiş, toka, blok kayması ve hijyen kontrolleri; DIN 6857-1 skopi parametreleri ve anlık nihai karar rozeti.
* **Akıllı Çapraz Senkronizasyon:** Krokide delik veya yırtık işaretlendiğinde fiziki kontrollerdeki "Tüm testler normal" seçeneği otomatik kaldırılır; kritik organda hasar varsa sistem doğrudan hurdaya ayırma (HEK) kararı üretir.
* **Salt Okunur Rapor Görünümü:** Tamamlanmış geçmiş muayeneler açıldığında; işaretlenmiş hasar krokisi, fotoğraflar ve karar gerekçelerini içeren şık bir rapor kokpiti gösterilir.
* **Akıllı Cihaz Filtresi:** Muayene formunda sadece skopi ve radyografi yapabilen cihazlar (C-Kollu, Anjiyo, Röntgen) listelenir; MR ve USG gibi ilgisiz cihazlar elenir.

---

## 🔐 RADPYS V4.0.2.21 - V4.0.2.22: Şifreli Veri Güvenliği ve Donanım Tabanlı Afet Kurtarma

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **KVKK Uyumlu Kriptografik Yedekleme:** Kurum veritabanı dökümleri ve evrak kasası yüksek standartlı 256-bit şifreleme ile güvence altına alındı.
* **Donanıma Bağlı Deterministik Afet Kurtarma:** Sunucuya format atılması veya donanım arızalarında yedeklerin kilitli kalmasını önleyen, bilgisayarın donanım kimliğiyle tam uyumlu akıllı afet kurtarma anahtarı mimarisi devreye alındı.
* **Tek Tıkla Güvenlik Kartı Çıktısı:** Yöneticilerin harici diske kaydedebileceği zaman damgalı standart metin kurtarma kartı oluşturma imkanı sağlandı.
* **Akıllı Anahtar Algılama:** Harici disk veya USB bellekten geri yükleme yapılırken, yedek klasöründeki anahtar dosyaları otomatik taranarak yöneticiye zahmet vermeden tek tıkla geri yükleme yapılması sağlandı.

---

## 📅 RADPYS V4.0.2.20: Otomatik Tatil Takvimi ve Mevzuat Uyumu

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Tek Tıkla Sabit Resmi Tatilleri Yükleme:** Yılbaşı, 23 Nisan, 1 Mayıs, 19 Mayıs, 15 Temmuz, 30 Ağustos ve 29 Ekim gibi yıllık sabit resmi tatiller tek tıkla ilgili yılın takvimine otomatik aktarılır.
* **Dini Bayram Paketleri:** Ramazan ve Kurban Bayramlarında sadece arife gününün seçilmesiyle; arife (0.5 gün) ve bayram günleri (tam gün) yasal süreleriyle otomatik olarak takvime işlenir.
* **Mükerrer Tatil Koruması:** Önceden tanımlanmış tatil günleri tespit edilerek mükerrer kayıt oluşması engellenir.

* **Cihaz Lisans Sayacı (180 Gün Kuralı):** Lisans bitimine 6 aydan fazla süresi olan cihazlarda sade yeşil "Geçerli" rozeti gösterilir; son 180 güne girildiğinde ise gün sayacı otomatik devreye girerek erken uyarı sağlar.
* **Giriş Ekranı Kurumsal Markalaması:** Giriş penceresine yüksek çözünürlüklü kalkan amblemi ve kurumun resmi adı dinamik olarak entegre edildi.

---

## 🚀 RADPYS V4.0.2.18: Web Portalı Başlatıcı ve Tarayıcı Entegrasyonu

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Esnek Veritabanı Port Uyumu:** Kurum içi özel veritabanı port yapılandırmaları başlatıcı tarafından otomatik algılanır.
* **Varsayılan İnternet Tarayıcısı Desteği:** Web Portalı açılırken kullanıcının işletim sisteminde tercih ettiği varsayılan tarayıcı (Chrome, Edge, Firefox vb.) otomatik olarak kullanılır.
* **Tek Tıkla Web Portalı Açılışı:** Arayüzdeki kafa karıştırıcı butonlar sadeleştirilerek tek ve net bir **"Web Portalını Aç"** butonuyla birleştirildi.

---

## ⚡ RADPYS V4.0.2.17: Akıcı Sayfa Açılışları ve Donma Koruması

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Hızlı ve Donmasız Ekran Geçişleri:** Modül pencereleri açılırken verilerin arka planda hazırlanması sağlandı; ekran kilitlenmeleri ve geçici donmalar tamamen engellendi.
* **Akıllı Pencere Yönetimi:** Sistemde zaten açık olan bir modül menüden tekrar seçildiğinde sıfırdan açılmak yerine doğrudan mevcut açık sayfa öne getirilir.
* **Modern Yükleme Göstergesi:** Ağır veri yüklemelerinde kullanıcıya sürecin işlediğini gösteren şık kurumsal animasyon göstergesi eklendi.

---

## 📥 RADPYS V4.0.2.16: 5 Adımlı Evrensel Toplu İçe Aktarım Sihirbazı

Personel, izin, dozimetre, cihaz ve koruyucu ekipman gibi tüm modüller için ortak ve hatasız bir **5 Adımlı Toplu İçe Aktarım Sihirbazı** devreye alındı:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

1. **Adım 1: Kurumsal Şablon:** Tek tıkla ilgili modüle özel 2 sayfalı kurumsal Excel şablonu indirilir.
2. **Adım 2: Akıllı Sütun Eşleştirme:** Excel dosyasındaki sütun başlıkları sistem alanlarıyla otomatik eşleştirilir.
3. **Adım 3: Değer Çözümleme:** Excel'deki birim veya unvan yazım farkları sistem kayıtlarıyla kolayca eşleştirilir.
4. **Adım 4: Canlı Önizleme ve Hata Kontrolü:** Veritabanına kaydedilmeden önce hatalı veya eksik hücreler kırmızı/turuncu renklerle gösterilir; farenin üzerine gelindiğinde hatanın sebebi açıklanır.
5. **Adım 5: Donmasız Güvenli Aktarım:** Yüzlerce satırlık veri arka planda saniyeler içinde içe aktarılır ve işlem sonucu detaylı döküm olarak sunulur.
   * Aktarım kesintisiz arka plan işlem motoru üzerinden yürütülerek ekranın donması ve pencerenin "Yanıt Vermiyor" durumuna düşmesi tamamen engellenir.
   * İşlem tamamlandığında aktarılan kayıt sayısı ve varsa hata alan kayıtların gerekçeleri listelenir; hatalı satırlar tek tıkla Excel formatında dışa aktarılabilir.

* **11 Temel Alanda İçe Aktarım Desteği:** Personel, İzin, İzin Hak Edişleri, Dozimetre Ölçümleri, Tıbbi Cihazlar, Cihaz Kalite Kontrolleri, Arıza ve Bakım, Koruyucu Ekipman (RKE), RKE Muayeneleri, Ortam Dozu Ölçümleri ve Eğitim Atamaları.
* **Metin Formatı Güvencesi:** Excel aktarımında `0` ile başlayan T.C. Kimlik numaralarının ve cihaz seri kodlarının baştaki sıfırlarının kaybolması önlendi.
* **Dozimetre Kalıcı Eşleştirme Hafızası:** Laboratuvar raporlarında personelin ismi farklı yazılmış olsa dahi, bir kez doğru personel ile eşleştirildiğinde sistem bu eşleşmeyi hatırlar; sonraki aylarda aynı dosya geldiğinde otomatik tanır.
* **Eşleşmeyenleri Dışa Aktarma:** Kurumda henüz kaydı bulunmayan personeller tek tıkla Excel listesi olarak indirilerek hızlıca personel kartı açılabilir.

---

## 🏷️ RADPYS V4.0.2.15: Çalışma Koşulu (A/B) Rozetleri ve Esnek Tablo Boyutlandırma

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Çalışma Koşulu A ve B Görsel Rozetleri:**
  * *Çalışma Koşulu A:* Primer radyasyon alanlarında çalışanlar için belirgin nükleer simgesi ve şua izni / fiili hizmet zammı hakkı rozeti eklendi.
  * *Çalışma Koşulu B:* İzlenen alan personelleri için kalkan rozeti atanarak mevzuat hükümleri görselleştirildi.
* **Serbest Sütun Boyutlandırması:** Tanımlamalar ve yönetim tablolarında sütun genişliklerinin fareyle serbestçe daraltılıp genişletilebilmesi sağlandı; uzun birim adları ve açıklamaların üç nokta ile kesilmesi engellendi.
* **Kurumsal Durum Rozetleri:** Taslak, Onay Bekliyor, Onaylandı ve Aktif/Pasif durumları sistem genelinde modern renkli rozetlerle standartlaştırıldı.

---

## ☢️ RADPYS V4.0.2.14: Dozimetre Aksiyonları ve Birim Rotasyonu Takibi

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **2 Panelli Operasyonel Düzen:**
  * *Sol Panel (İncelenecek Riskler):* Yasal limit aşımları ve personelin geçmiş kişisel ortalamasından radikal sapan tüm istatistiksel anomaliler tek tabloda toplanarak amirin dikkatine sunuldu.
  * *Sağ Panel (Yürütülen Soruşturmalar):* Başlatılmış olan resmi soruşturmalar ve kurumsal DÖF süreçleri durumlarıyla listelenir.
* **Geçmiş Ölçümlerde Birim Rotasyonu:** Personelin geçmiş dozimetre ölçümlerine görev yaptığı radyoloji birimi sütunu eklendi; maruziyet sıçramalarının hangi odadaki (BT, Anjiyo, Skopi vb.) rotasyondan kaynaklandığı anında geriye dönük izlenebilir hale getirildi.
* **Hızlı Aksiyon Butonları:** Tek tıkla resmi RD.F43 Doz Araştırma Sihirbazı başlatma, ara kontrol takip ölçümü tanımlama ve inceleme dosyasını kapatma kolaylığı sağlandı.

---

## 🛡️ RADPYS V4.0.2.13: Yasal Nöbet Muafiyetleri ve Doz Kısıtları

Mevzuata uygun olarak 4 yeni yasal nöbet muafiyeti sistemi koruma altına almıştır:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

1. **Engelli Personel Muafiyeti (DMK Md. 101):** Engelli çalışanlara gece nöbeti ve 24 saatlik vardiya yazılması engellendi.
2. **Engelli Yakını Bulunan Personel (DMK Ek Md. 39):** Bakmakla yükümlü olduğu engelli yakını bulunan personele nöbet yazılmaması sağlandı.
3. **Sağlık Kurulu Heyet Raporu:** Tam teşekküllü hastane heyet raporu ile belgelenen sağlık durumlarında rapor süresince nöbet kısıtlaması uygulandı.
4. **Yıllık Doz Aşımı Kısıtı (NDK Mevzuatı):** Doz aşımına uğrayan veya incelemeye alınan çalışanların radyasyonlu birimlerde nöbet tutması sistem tarafından otomatik olarak engellendi.

---

## 📊 RADPYS V4.0.2.12: Akıllı Nöbet Dengeleme ve Geniş Ekran Modu

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Asimetrik Vardiya Dengeleme:** Farklı sürelerdeki vardiyalarda (örn: 7 saat gündüz ve 17 saat gece) çalışan personeller arasındaki mesai farkı otomatik çapraz takaslarla dengelenerek adil dağılım sağlandı.
* **Kıdem ve Yaş Önceliği:** 50 yaş ve 25 yıl hizmet kıdemi bulunan çalışanlara nöbet planlamasında gündüz vardiyaları önceliklendirildi.
* **Geniş Ekran Modu (Tam Ekran Tablo):** Nöbet ekranında sol menüyü tek tıkla gizleyerek 31 günlük tablonun tüm ekranı kaplaması ve dikey kaydırmaya gerek kalmadan rahatça incelenmesi sağlandı.

---

## ⚖️ RADPYS V4.0.2.11: Yasal Arife ve Bayram Mesai Ayrıştırması

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Kanuni Arife Ayrıştırması (2429 Sayılı Kanun):** Ulusal bayram ve dini bayram arifelerinde saat 13:00'ten itibaren başlayan resmi tatil süresi nöbet bloklarında saat/dakika hassasiyetinde ayrılarak normal mesai ile bayram mesaisi adil bir şekilde ayrıştırıldı.
* **Yasal Fazla Mesai Kota Yönetimi:** Kurum bütçesine göre aylık 60 saatlik kurumsal kota veya yasal tavan olan 130 saate kadar fazla mesai ödeme/devir seçenekleri eklendi.
* **5 Sütunlu Mutemetlik Bildirim Cetveli:** Mutemetlik ve bordro birimlerinin doğrudan kabul ettiği 5 sütunlu sade cetvel standardı devreye alındı (*T.C. Kimlik, Adı Soyadı, Görev Yeri, Normal Fazla Mesai, Bayram Fazla Mesai*).
* **Resmi Antetli A4 Yazdırma:** İdare ve başhekim onay blokları içeren resmi A4 dikey yazdırma ve tek tıkla Excel/PDF dışa aktarım desteği sağlandı.

---

## 📱 RADPYS V4.0.2.10: Ortam Dozu Saha Krokisi ve Mobil Formlar

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Tam Ekran Dokunmatik Kroki:** Tablet ve akıllı telefonlarda tek parmakla harita içinde gezinti, iki parmakla büyütme/küçültme ve eldivenli kullanıma uygun yüzen yakınlaştırma butonları eklendi.
* **Zırhlı Odalarda Çevrimdışı Çalışma Güvencesi:** Kurşun kaplı radyoloji odalarında Wi-Fi bağlantısı kopsa dahi girilen ölçümler saklanır; bağlantı sağlandığında sisteme otomatik aktarılır.
* **Hizmet İçi Eğitim ve İnteraktif Sınav:** Sayfa değiştirmeden doğrudan eğitim ekranında sınav çözebilme, soru ve şekilleri yüksek çözünürlükte büyütme desteği sağlandı.
* **Kamera ile Hızlı QR Okuma:** Mobil tarayıcılardan doğrudan kamera açılarak cihaz karekodları anında taranabilir hale getirildi.
* **10 Temel Mobil Saha Formu:** Personel profili, nöbet takas havuzu, ortam dozu ölçümü, arıza bildirimi ve RKE muayene formları mobil uyumlu olarak devreye alındı.

---

## ⏱️ RADPYS V4.0.2.9: Yasal Şua İzni Hak Edişi ve Fiili Çalışma Uyumu

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Yasal "50 Saat = 1 Gün" Kuralı:** İyonlaştırıcı radyasyon mevzuatına uygun olarak; personelin radyasyonlu kontrollü alanlarda fiilen çalıştığı her 50 saatlik süre karşılığında 1 gün şua izni hak edişi (yılda en fazla 30 gün) hesaplanması sağlandı.
* **Kazanım Yılı ve Kullanım Yılı Takibi:** Cari yılda hak edilen şua günlerinin bir sonraki takvim yılı içerisinde kullanılması ve yıl sonu yanma risklerinin önceden izlenmesi için yasal döngü panosu eklendi.
* **Fiili Çalışma Odaklı Adil Hesaplama:** Statik unvan yerine, personelin radyasyonlu modalitelerde (BT, Anjiyo, Röntgen vb.) bizzat geçirdiği gerçek çalışma saatleri baz alındı.
* **Modalite Dağılım Kartları:** Hangi radyoloji biriminin kaç gün şua izni ürettiğini gösteren interaktif döküm kartları sunuldu.

---

## 👥 RADPYS V4.0.2.8: Cari Yıl İzin Takibi ve Kadro Emniyeti

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Operasyonel İzin Yönetimi:** Cari yıl resmi izin hareketleri, yönetici onay bekleyenler ve anlık kadro durumları tek ekranda toplandı.
* **Önümüzdeki 30 Gün Kadro Güvencesi:** Önümüzdeki 30 gün içerisinde aynı alt birimde (örneğin BT veya Acil Röntgen) birden fazla personelin izinli olduğu kritik durumlar erken uyarı kartı olarak amirlerin dikkatine sunuldu.
* **3 Pratik Sekme:** Tablo üzerinde *Onay Bekleyenler*, *Bugün İzinde Olanlar* ve *Tüm İzinler* sekmeleriyle operasyonel hız sağlandı.
* **Yasal Kıdeme Göre İzin Hesabı:** Çalışma süresi 10 yılı aşan çalışanlar için 30 gün, diğer çalışanlar için 20 gün yıllık izin hakkı mevzuata uygun olarak tanımlandı.

---

## 🏖️ RADPYS V4.0.2.7: Yıllık İzin Projeksiyonu İyileştirmeleri

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Planlı İzin Türü Seçicisi:** Mazeret izinleri ve kısa süreli raporlar gibi anlık durumlar istatistikten ayrılarak, yalnızca personelin önceden planladığı **Yıllık İzin** ve **Sağlık (Şua) İzni** kayıtları üzerinden yüksek doğruluklu projeksiyon sunulmaya başlandı.
* **Hizmet Sınıfı Filtresi:** Personeller; Radyasyon Görevlisi, Akademik Kadro, Tabip, Sağlık Teknikeri ve Hemşirelik gibi hizmet sınıflarına göre anlık olarak filtrelenebilir hale getirildi.
* **İnteraktif Uyarı Kartları:** "Kritik Çakışma Riski" kartına tıklandığında personel darboğazı yaşayan birimler, "En Yoğun Ay" kartına tıklandığında ise 12 aylık takvim ısı haritası doğrudan açılır.
* **Kapsamlı Excel Çıktısı:** Dışa aktarılan dosyalara hizmet sınıfı ve izin türü sütunları dahil edildi.

---

## 📅 RADPYS V4.0.2.5 - V4.0.2.6: Nöbet Takvimi ve Yıllık İzin Projeksiyonu

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Nöbet Takvimi Yenilikleri:** Nöbet planı bulunmayan birimler filtrelenerek liste sadeleştirildi.
* **Yıllık İzin Projeksiyonu ve Klinik Çakışma Analizi:** Geçmiş kurum verileri analiz edilerek personellerin izin tercihleri projeksiyon olarak sunulur.

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

## 🌐 RADPYS V4.0.2.4: Web Portalı 20 Modüllü Kurumsal Analitik Kokpiti

Web Portalı; hastanenin tüm radyasyon güvenliği ve personel süreçlerini tek ekrandan yönetmeyi sağlayan **20 modüllü tam teşekküllü bir klinik analitik kokpitine** dönüştürülmüştür:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

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

## 🛡️ RADPYS V4.0.2.3: Klinik Çizelge Matrisi ve Gelişmiş Nöbet Yönetimi

Bu sürüm; nöbet çizelgesinde ayın tamamının tek ekrana sığmasını sağlayan kompakt klinik görünümü, resmi tatil renklendirmelerini ve ay ortası güvenli plan revizyonunu devreye almıştır:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **31 Günün Tamamı Tek Ekranda:** Nöbet çizelgesinde satır yükseklikleri optimize edildi, başlık alanı sadeleştirildi; 31 günlük ayın tamamı dikey kaydırmaya gerek kalmadan tek ekrana sığdırıldı.
* **Hafta Sonu ve Resmi Tatil Renklendirmesi:** Resmi ve dini bayramlar zarif bordo/rose tonuyla, hafta sonları modern lacivert tonuyla belirginleştirildi. Tatil günlerinin üzerine gelindiğinde bayram adı bilgi balonu olarak görüntülenir.
* **Sayısal Veri Okuma Kolaylığı:** Nöbet sayısı, hedef süre, fiili çalışma ve fazla mesai gibi sayısal sütunlara kaymayı önleyen özel hizalı yazı tipi standardı uygulandı.
* **Ay Ortasında Güvenli Nöbet Planı Revizyonu:** Yayındaki bir plan ay ortasında güncellenirken, personelin o güne kadar fiilen tamamladığı nöbetlerin silinmesini ve yasal hak kayıplarını önleyen koruyucu mekanizma devreye alındı. Çalışılmış nöbetler kilitlenir; sadece ileriye dönük günler taslağa çekilerek revize edilir.
* **Yönetici Sorumluluk Gerekçesi:** Ay ortası plan değişikliklerinde en az 20 karakterlik açıklama ve yönetici şifre doğrulaması şart koşularak denetim güvenliği sağlandı.

---

## 🛠️ RADPYS V4.0.2.2: Gösterge Paneli ve Muayene Kayıtları Bütünlüğü

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Birim Bazlı Filtreleme İyileştirmesi:** Web analitik panolarında servis ve birim bazında yapılan veri süzme işlemleri daha kararlı hale getirildi.
* **Dozimetre ve Gebe Çalışan Takibi:** Gebe çalışanların ve aktif dozimetrelerin anlık verileri gösterge panolarına bağlandı.
* **Koruyucu Donanım (RKE) Muayene Sonuçları:** DIN 6857-1 periyodik skopi muayene sonuçlarının web panosunda eksiksiz listelenmesi sağlandı.

---

## 🛠️ RADPYS V4.0.2.1: Web Portalı Gösterge Panelleri Uyum Güncellemesi

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Kesintisiz Sistem Başlatma:** Web portalı açılırken veritabanı bağlantısının otomatik olarak doğrulanması ve hazır olduğunda sayfaların anında sunulması sağlandı.
* **Ortam Dozu ve Alan Ölçümleri Göstergesi:** Radyasyon ölçüm eşikleri ve mimari kroki verilerinin web panolarında eksiksiz görüntülenmesi sağlandı.
* **Çalışma Kısıtları ve Nöbet Kapasite Analizi:** Gebe veya sağlık kısıtı olan personellerin nöbet risklerinin web göstergelerinde doğru ve güncel yansıması sağlandı.
* **Koruyucu Donanım ve Kalite Eğitimi Entegrasyonu:** RKE envanter durumu ile zorunlu kurum içi eğitimlerin web göstergelerinde canlı takibi tamamlandı.

---

## 🌐 RADPYS V4.0.2.0: Web Portalı Güvenliği ve Mobil Entegrasyon

Bu sürümde Web Portalı ile masaüstü sistemi tam entegrasyona kavuşturulmuş, mobil erişim güvenliği ve kullanıcı deneyimi en üst düzeye çıkarılmıştır:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Canlı Veri Senkronizasyonu:** Web portalı üzerindeki 13 analitik gösterge panosu (dashboard) doğrudan veritabanı ile canlı eşleşerek anlık bilgi üretmeye başladı.
* **SKS v6.1 Şifahi Onay ve SMS Doğrulaması:** Nöbet devirlerinde devralan personelin dijital rızası olmadan işlem yapılmasını önlemek için 6 haneli güvenlik doğrulama kodu desteği getirildi.
* **Gelişmiş Belge Yükleme Güvenliği:** Mobil cihazlardan ve webden rapor/belge yüklenirken sahte uzantılı veya zararlı dosyaların yüklenmesi engellendi.
* **Birim ve Departman İzolasyonu:** Yöneticiler dışındaki personellerin yalnızca kendi çalıştıkları servise ait nöbet ve dozimetre kayıtlarını görmesi güvenceye alındı.
* **Yüksek Hızlı Önbellek Desteği:** Çok sayıda kullanıcının aynı anda panolara eriştiği yoğun saatlerde dahi sayfaların anında açılması sağlandı.

---

## 🛡️ RADPYS V4.0.1.0: Yönetici Güvenliği, Denetim İzi ve Kompakt Tablo Ergonomisi

Bu sürüm; sistem yönetimi güvenliğinin artırılmasını, denetim izi mekanizmasının güçlendirilmesini ve arayüz kullanım ergonomisinin kurumsal seviyeye çıkarılmasını sağlamıştır:

### 💡 Kullanıcıya Sağladığı Faydalar ve Yenilik Detayları

* **Çift Aşamalı Yönetici Doğrulaması:** Veritabanı bakımı, şema onarımı ve sistem loglarının temizlenmesi gibi hassas işlemler şifreli yönetici onayına bağlandı.
* **Eksiksiz Kurumsal Denetim İzi:** Kullanıcı oluşturma, rol atama, yetki güncelleme ve silme işlemlerinde hangi yöneticinin ne zaman işlem yaptığı resmi denetim günlüğüne kaydedilir.
* **Akıllı Tablo Görünümü ve Kompakt Satır Düzeni:** Tablolarda sağda kalan gereksiz boşluklar optimize edildi; satır yüksekliği dengelenerek tek ekranda daha fazla kaydın rahatça incelenmesi sağlandı. Koyu temada satır kontrastı güçlendirildi.
* **Pratik Filtre Gizle/Göster Butonu:** İzin, Dozimetre, Personel, Cihaz ve RKE ekranlarının sağ üst köşesine tek tıkla filtreleri açıp kapatabilen pratik ve şık bir araç butonu eklendi.
* **Donmasız Arka Plan İşlemleri:** Ağır veritabanı optimizasyonları ve toplu Excel aktarım işlemleri arka planda çalıştırılarak kullanıcı arayüzünün donması engellendi.

### 📋 Modül Olgunluk ve Kazanım Özeti

| Modül / Alan | Durum | Kullanıcı ve Kurumsal Kazanım |
| :--- | :---: | :--- |
| **Yönetici ve Yetki Güvenliği** | ✅ Tamamlandı | Rol, kullanıcı ve yetki değişikliklerinde tam denetim izi sağlandı. |
| **Arayüz ve Tablo Ergonomisi** | ✅ Tamamlandı | 34px kompakt satır düzeni ve tek tıkla filtre gizleme/gösterme standardı aktif. |
| **Veri Tabanı Bütünlüğü** | ✅ Tamamlandı | Sıfır veri kaybı garantisi ve koruyucu silme engelleri devrede. |
| **Performans ve Hız** | ✅ Tamamlandı | Arka plan iş parçacıkları ile donmasız raporlama ve dışa aktarım. |

---

## 🏛️ RADPYS V4.0.0.0: Kurumsal Mimari Dönüşümü, 8 Temel Modül Paketi ve Mevzuat Karar Motorları

RADPYS V4 sürümüyle birlikte sistem; yüksek veri güvenliği, kesintisiz çalışma ve mevzuat denetimlerine tam uyumluluk sağlamak amacıyla kurumsal standartlarda yeniden tasarlanmıştır.

### 🌟 Öne Çıkan Yenilikler (Hızlı Bakış)

* **Güçlü ve Kesintisiz Kurumsal Veritabanı Altyapısı (PostgreSQL):** Kurum verileri, hastane düzeyinde yüksek hız ve güvenlik sunan PostgreSQL veritabanı altyapısıyla korunur; otomatik bağlantı kurtarma desteğiyle veri kaybı önlenir.
* **Yasal Mevzuata Tam Uyumlu Otomatik Karar Motorları:** NDK (Nükleer Düzenleme Kurumu) mevzuatı uyarınca yıllık 20 mSv efektif doz sınırı, 2.0 mSv sarı ve 5.0 mSv kırmızı erken uyarı eşikleri ile gebe çalışanlar için 1 mSv yasal tavan denetimi otomatik olarak yürütülür.
* **Entegre 8 Temel Modül Paketi:** Rol bazlı güvenli erişim ve kademeli lisans takip mekanizması.

### 🐘 Güçlü ve Kesintisiz Kurumsal Veritabanı Altyapısı (PostgreSQL)

* **Kesintisiz ve Güvenli Çalışma:** Kurum verileri, hastane düzeyinde yüksek hız ve güvenlik sunan PostgreSQL veritabanı altyapısıyla korunur; otomatik bağlantı kurtarma desteğiyle veri kaybı önlenir.
* **Tam Veri Bütünlüğü ve Koruma:** Yanlışlıkla yapılan silme işlemlerine karşı koruyucu mekanizmalar getirilmiş; kayıtların geçmişi güvenli arşiv mimarisiyle muhafaza altına alınmıştır.

### 🧠 Yasal Mevzuata Tam Uyumlu Otomatik Karar Motorları

Yönetmelik ve standart kuralları sisteme entegre edilerek manuel hesaplama hataları tamamen ortadan kaldırılmıştır:

* **Dozimetre ve Sağlık Risk Analizi:** NDK (Nükleer Düzenleme Kurumu) mevzuatı uyarınca yıllık 20 mSv efektif doz sınırı, 2.0 mSv sarı ve 5.0 mSv kırmızı erken uyarı eşikleri ile gebe çalışanlar için **1 mSv yasal tavan denetimi** otomatik olarak yürütülür.
* **Koruyucu Donanım (RKE) Kalite Kontrolü:** DIN 6857-1 / IEC 61331-3 standartlarında periyodik skopi muayene analizi yapılır; tiroid koruyucularda **sıfır tolerans kuralı** (delik/yırtık tespitinde doğrudan hurda/HEK kararı) otomatik uygulanır.
* **Fiili Hizmet Süresi Zammı (FHZ / Şua İzni):** 5510 Sayılı Kanun ve Yataklı Tedavi Kurumları Yönetmeliği uyarınca yıllık çalışma saatine göre hak edilen şua izni (0-30 gün) kıstelyevm esasına göre hatasız hesaplanır.
* **İzin ve Nöbet Çakışma Denetimi:** Çakışan izin, nöbet ve resmi tatil günleri sistem tarafından kullanıcıyı uyararak anında tespit edilir.

### ⚖️ Evrensel Yönetici Onay Sistemi

* Nöbet takasları, izin talepleri, gebelik bildirimleri ve kritik profil güncellemeleri yönetici onay kuyruğuna iletilir.
* Yöneticiler, yapılan değişiklikleri eski ve yeni değerleri yan yana görsel olarak inceleyebilir; tek tıkla onaylayabilir veya gerekçe belirterek reddedebilir.

### 🧱 Entegre 8 Temel Modül Paketi

1. **Yetkilendirme ve Kullanıcı Yönetimi:** Rol bazlı güvenli erişim ve kademeli lisans takip mekanizması.
2. **Kurumsal Tanımlamalar ve Ayarlar:** Dinamik kurum birimleri, unvanlar ve sistem tercihleri.
3. **Personel, İzin ve Fiili Hizmet:** Özlük takibi, şua hak edişi ve yasal izin yönetimi.
4. **Dozimetre ve Sağlık Taramaları:** Laboratuvar ölçüm aktarımları, kümülatif doz riskleri ve periyodik tetkikler.
5. **Radyasyon Koruyucu Donanım (RKE):** Kurşun önlük ve ekipmanların DIN 6857-1 skopi muayeneleri, zimmet ve karekod takibi.
6. **Tıbbi Cihaz ve Lisans Yönetimi:** Radyoloji cihaz envanteri, NDK lisans vizeleri ve bakım sözleşmeleri.
7. **Kalite Kontrol ve Ortam Dozu:** Mimari kat planı üzerinde radyasyon seviyesi izleme ve periyodik ölçümler.
8. **Nöbet Planlama, Olay Bildirimi ve Raporlama:** Otomatik çizelgeleme, SKS kalite olay bildirimleri ve resmi matbu form üretimi.

### 🎨 Modern Klinik Tasarım (RDS) ve Kolay Okunur Arayüz

* **Gözü Yormayan Klinik Renkler:** Uzun süreli çalışmalarda göz sağlığını koruyan modern açık ve koyu tema seçenekleri.
* **Net Vektörel İkonlar:** Tüm buton ve menülerde anlamı güçlendiren kurumsal vektörel simgeler.
* **Hizalı Sayısal Tablolar:** Dozimetre ölçümleri, seri numaraları ve TC kimlik numaralarında okumayı kolaylaştıran özel sayısal yazı tipi standardı.

### 👥 Personel Modülü: İşten Ayrılış, KVKK Arşivleme ve Yazdırma

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

### ☢️ Dozimetre Takip Sistemi ve Resmi RD.F43 Doz Araştırma Formu

1. **Dozimetre Takip Sistemi ve Kurumsal Laboratuvar Entegrasyonu:**
   * Tüm çalışanların dönemsel kişisel dozimetre ölçümlerinin listelenmesi, kümülatif doz risk analizleri ve Excel'den toplu içe aktarımı sağlandı.
   * TENMAK, RADAT ve ENA resmi laboratuvar formatlarındaki ölçüm dosyaları otomatik sütun eşleme ile sisteme anında işlenir.

2. **Resmi RD.F43 Doz Araştırma Formu:**
   * TENMAK ve NDK resmi standartlarında 2 sayfalık matbu **RD.F43 Doz Araştırma Formu** sisteme entegre edildi.
   * Hafta sonlarını otomatik atlayan 10 iş günü yasal araştırma süresi sayacı eklendi.
   * Doz hızı ve unutulma süresi üzerinden tahmini doz hesaplama motoru devreye alındı.
   * Kurum logoları ve çok satırlı başlıklar içeren resmi Word (`.docx`) belgesi çıktısı tek tıkla alınabilir.

### 🏪 Nöbet Değişim Havuzu (Pazaryeri) ve 36 Saat Güvenlik Kuralı

1. **Nöbet Değişim Havuzu ve Dijital İlan Pazarı:**
   * Nöbet devretmek veya karşılıklı takas yapmak isteyen çalışanlar sistem üzerinden ortak dijital havuzda ilan açabilir ("Açık Devir" ve "Karşılıklı Takas").
   * İlk gelen talip olduğunda ilan kilitlenir; teklif reddedilirse ilan süre kısıtı dolana kadar havuzda yeni taliplere açık kalır.

2. **36 Saat Güvenlik Kısıtı ve 48 Saat Erken Uyarı:**
   * Nöbete 48 saat kala talip çıkmamış ilanlar için nöbet sahibine erken uyarı bildirimi gönderilir.
   * Nöbete 36 saat kala talipsiz ilanlar otomatik olarak iptal edilir; nöbet yükümlülüğü asıl personelde kalarak sağlık hizmetinin ve nöbetin açıkta kalması önlenir.

3. **Acil Mazeret ve Otomatik İkame Önerisi:**
   * 36 saatten az süre kala gelişen acil durumlarda sağlık raporu yüklenerek talep doğrudan yönetici onay ekranına iletilir.
   * Nöbet adalet katsayısı ve nöbet yükü en uygun olan personel sistem tarafından otomatik olarak önerilir.

### 🛡️ Koruyucu Ekipman (RKE) ve DIN 6857-1 Muayene Kokpiti

1. **DIN 6857-1 Standardında Kalite Kontrol Değerlendirmesi:**
   * Skopi muayenesinde kurşun önlük ve gonadal koruyucularda yüzey alanı hasar eşikleri denetlenir.
   * Tiroid koruyucu donanımlarda **0 mm² sıfır tolerans kuralı** uygulanır (yırtık/delik doğrudan HEK/hurda kararı).

2. **Akıllı Ekipman Kodlama ve Karekod Etiketleme:**
   * Kurumsal standartta tekil ekipman kodlama (`[Birim]-[Cins]-[SıraNo]`) ve QR karekod etiket basımı sağlandı.
   * Ekipmanların teslim ve devir süreçleri Zimmet Devir Formu ve kurumsal denetim geçmişi ile kayıt altına alınır.

3. **Toplu Muayene Kokpiti:**
   * Onlarca koruyucu donanımın tek bir oturumda saniyeler içinde periyodik kontrolden geçirilmesi sağlandı.

### 🏥 Cihaz Yönetimi, NDK Lisansları ve Kat Planı Entegrasyonu

1. **Radyasyon ve Görüntüleme Cihazı Sınıflandırması:**
   * BT, Röntgen, Mamografi, Anjiyo, C-Kollu, SPECT, PET-CT ve Lineer Hızlandırıcı cihazlarının NDK resmi lisans vizeleri ve erken uyarı bildirimleri (60, 30, 15 ve son gün) devreye alındı.
   * Tıbbi cihaz ve radyasyon kaynakları bağımsız envanter kartlarıyla yönetilir.

2. **Arıza Bildirimi ve Periyodik Bakım Takibi:**
   * Mobil QR karekod destekli hızlı arıza bildirim ekranı ile periyodik bakım sözleşmelerinin bağımsız takibi sağlandı.

3. **Kat Planı PDF Desteği ve Konum Sabitleme:**
   * Mimari kat planı krokilerinin doğrudan sisteme yüklenmesi ve yüksek çözünürlüklü görüntülenmesi sağlandı.
   * Pin kilitleme modu ile harita üzerinde gezinirken cihaz konumlarının kazara kayması önlendi.

### 📚 Bilgi Merkezi ve Çevrimdışı Yardım Portalı

1. **Entegre Modüler Yardım Sayfaları:**
   * Sistem içerisinde klavyeden **F1** tuşuna basıldığında veya menüden açılabilen anlık tam metin arama destekli yerel yardım portalı.
   * Tüm modüller için hızlı reçeteler, 5N1K operasyonel adımlar ve Sıkça Sorulan Sorular (SSS).
2. **Kapsamlı Kullanım Kılavuzu:**
   * Çevrimdışı ortamda dahi eksiksiz görüntülenebilen zengin dokümantasyon desteği.

### 🖥️ Sistem Gereksinimleri ve Kurulum Özellikleri (V4.0.0.0)

* **İşletim Sistemi:** Windows 10 / Windows 11 (64-bit) ve Windows Server 2016+.
* **Donanım:** Çift çekirdekli işlemci, minimum 4 GB RAM, 1080p (Full HD) ekran çözünürlüğü.
* **Kolay Kurulum:** Tek tıkla çalışan kurulum sihirbazı ile kurum içi yerel ağda merkezi veya bağımsız çalışma desteği.
* **Otomatik Veri Tabanı Hazırlığı:** İlk açılışta gerekli kurumsal şablonlar, referans verileri ve ilk yönetici hesabı otomatik olarak yapılandırılır.

---

© 2026 Cem Kara. RADPYS V4 Kurumsal Radyasyon Personel Yönetim Sistemi. Tüm Hakları Saklıdır.
