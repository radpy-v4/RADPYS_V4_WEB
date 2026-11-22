# RADPYS V4 — Güncel Kullanım Kılavuzu

> **Yazılım ve Kılavuz Sürümü:** v4.0.6.6  
> **Veri Gizliliği Notu:** Kılavuzda geçen tüm örnek kayıtlar ve görseller KVKK 6698 kapsamında test amaçlı sentetik veridir.

RADPYS (Radyoloji ve Radyasyon Yönetim Sistemi); hastane radyoloji ve radyasyon onkolojisi birimlerinin personel nöbetlerini, izin ve şua hakedişlerini, kişisel dozimetre takibini, sağlık muayenelerini, ortam radyasyon ölçümlerini, koruyucu ekipman (RKE) muayenelerini, tıbbi cihaz envanterini, kalite kontrol süreçlerini ve resmi mevzuat raporlamasını (NDK, Sağlık Bakanlığı SKS 6.1, DIN 6857-1, TİTCK TCS-KLVZ-06 ve KVKK 6698) tek çatı altında yöneten entegre karar destek platformudur.

Bu tek dosya özeti, **24 Ana Modül** ve **5 Nöbet Alt Kılavuzu** dahil toplam **29 Tek Kaynak (SSOT) kılavuz sayfasından** otomatik ve birebir senkronize edilerek derlenmiştir.

---

## 01. Kurulum, Başlatma ve İlk Giriş

RADPYS masaüstü ve Web Portalı oturumlarını güvenli tekil kilit altında başlatma, veritabanı servisi kontrolleri, ilk girişte zorunlu şifre yenileme, Evrensel Arama Komut Paleti (Ctrl+K), Bildirim Merkezi ve lisans aktivasyonunu yönetmenizi sağlar.

> **Yasal Güvence:** Sağlık Bakanlığı Sağlıkta Kalite Standartları (SKS 6.1) ve 6698 sayılı KVKK Madde 12 uyarınca yetkisiz erişimler ve zayıf parolalar otomatik olarak engellenir.

### Kısa Reçete: İlk Giriş ve Zorunlu Şifre Güncelleme

**Kısa Reçete: İlk Giriş ve Zorunlu Şifre Güncelleme**

**1. İstenen Sonuç:**
Birim sorumlunuzdan veya yöneticiden aldığınız geçici şifreyi kalıcı ve güvenli kişisel parolanızla değiştirerek yetkili olduğunuz modülleri açmak.
**2. Yapılacak İşlem:**
Kullanıcı adınız ve geçici parolanızla **[Giriş Yap]** butonuna basın. Açılan zorunlu şifre penceresinde en az **8 karakter** (büyük harf, küçük harf ve rakam) içeren yeni şifrenizi iki kez yazıp **[Kaydet]** butonuna tıklayın.
**3. Sistem Etkisi:**
Geçici şifre kalıcı olarak iptal edilir; yeni şifre yalnızca size özel şifrelenerek kaydedilir ve yetkiniz dahilindeki tüm ekranlar kullanıma açılır.

- **Parola Politikası:** Min. 8 Karakter
- **Deneme Süresi:** 30 Gün
- **Erken Uyarı Eşiği:** 15 Gün & 3 Gün
- **Platform:** Masaüstü & Web Portal

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Giriş ekranı güvenlik kalkanları, şifre sıfırlama sınırları ve bildirim kontrolleri.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **[Beni hatırla]** (Onay Kutusu) | Kullanıcı adını her oturumda tekrar yazma zahmetini kaldırmak. | Yalnızca kullanıcı adını yerel bilgisayarda saklar; parolayı asla diske kaydetmez. | Kişisel çalışma bilgisayarından giriş yapıldığında. | Tüm Personel |
| **[Şifreyi göster]** (Onay Kutusu) | Yazım sırasında büyük/küçük harf ve rakam hatasını anlık görmek. | İşaretlendiğinde noktalı maskeli parola kutusunu açık metne çevirir. | Giriş veya yeni şifre belirleme sırasında. | Tüm Personel |
| **Hatalı Giriş Kilidi** (Otomatik Güvenlik Kalkanı) | Deneme-yanılma yoluyla yetkisiz hesap ele geçirmelerini önlemek. | Varsayılan olarak art arda 5 hatalı parola girişinde hesabı 15 dakika süreyle kilitler (yönetici kilidi anında açabilir). | Parola üst üste hatalı girildiğinde. | Tüm Kullanıcılar |
| **[Şifremi Unuttum?]** (3 Aşamalı Sıfırlama Sihirbazı) | E-posta doğrulamasıyla unutulan parolayı self-servis yenilemek. | Kayıtlı e-postaya 15 dakika geçerli 6 haneli kod gönderir (5 hatalı kod denemesinde kod iptal edilir; Web Portalda yalnızca yerel ağda çalışır). | Parola unutulduğunda. | E-postası Kayıtlı Personel |
| **Bildirim Merkezi & Rozet** (Sağ Üst Zil Simgesi) | Nöbet devri, onay kuyruğu ve dozimetre uyarılarını anlık yakalamak. | Okunmamış uyarı varken zil simgesi rozet gösterir; nöbet devri bildiriminden doğrudan onay penceresi açılır. | Yeni görev veya uyarı geldiğinde. | Hedef Personel / Yönetici |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Masaüstü Simgesine Tıkladım Ama İkinci Pencere Açılmadı**
> - **Yanlış Algı:** *"Masaüstü simgesine tıkladım ama program açılmadı, sistem dondu veya hata verdi."*
> - **Gerçek Sistem Mantığı:** **Tekil Uygulama Kilidi aktiftir.** RADPYS veritabanı bütünlüğünü korumak için aynı bilgisayarda yalnızca tek bir örnek altında çalışır. Program zaten açık veya simge durumundaysa ikinci bir kopya başlatılmaz; mevcut açık pencere doğrudan ekranın en önüne getirilir.

### Süreç Akış Şeması

1. **Başlatma ve Veritabanı Kontrolü:** Program tekil kilit altında açılır; veritabanı motoru durmuşsa kullanıcıya tek tıkla yönetici yetkisiyle servisi başlatma seçeneği sunulur.
2. **Kimlik, Kilit ve Lisans Denetimi:** 5 hatalı girişte hesap 15 dakika kilitlenir; lisansı dolan kurumda normal kullanıcı girişi engellenirken Sistem Yöneticisi için yalnızca lisans yükleme ekranı açılır.
3. **Şifre Güvenliği ve Oturum Açılışı:** İlk girişte zorunlu şifre değişimi tamamlanmadan ana ekrana geçilmez; onaylandığında yetki ve kapsam matrisine uygun modüller yüklenir.

### Adım Adım İşlem Rehberi

#### 1. Masaüstü Uygulamasında Hızlı Arama (Ctrl+K), Lisans Aktivasyonu ve Destek Paketi

1. Oturum açtıktan sonra herhangi bir ekrandayken klavyeden **Ctrl+K** tuşlarına basın; en az 2 harf yazarak yetkili olduğunuz modüllere veya personel kayıtlarına doğrudan geçiş yapın.
2. Kurum lisansını etkinleştirmek için yöneticinizle **[Hakkında]** penceresindeki **[Lisans ve Aktivasyon]** sekmesini açın ve **[Cihaz Kimliği (Machine ID)]** yanındaki **[Kopyala]** butonuna basın.
3. Size iletilen lisans dosyasını **[Lisans Dosyası Seç (.lic)]** butonuyla yükleyin veya anahtar kodunu yapıştırıp **[Lisansı Aktifleştir]** butonuna tıklayın (aktif lisansta yenileme için **[Lisansı Güncelle / Yeni Dosya Seç (.lic)]** butonunu kullanın).
4. Teknik destek gerektiğinde **[Hakkında]** penceresindeki **[Destek Paketi (ZIP)]** butonuna basarak Masaüstünüze oluşturulan destek arşivini teknik ekibe iletin.

#### 2. Web Portalı Girişi ve Dış Ağ İki Aşamalı Doğrulaması

1. Kurum içi veya dış ağ tarayıcınızdan **Web Portalı** giriş ekranını açıp kullanıcı adınız ve parolanızla giriş yapın.
2. İlk kez giriş yapıyorsanız açılan zorunlu şifre belirleme formunda yeni parolanızı tanımlayın.
3. Hastane dış ağından bağlanıyorsanız ekrandaki güvenlik doğrulamasını tamamlayın; kurumsal 2FA açıksa e-posta adresinize gelen 6 haneli tek kullanımlık doğrulama kodunu girerek oturumu açın.

### Sıkça Sorulan Sorular (SSS)

- **Veritabanı bağlantı hatası aldığımda ne yapmalıyım?** Açılışta ekrana gelen uyarı penceresinde yönetici izniyle servisi başlatma seçeneğine tıklayıp Windows izin onayını verin. Servis otomatik başlatılamazsa Windows Hizmetler ekranından PostgreSQL hizmetinin çalışır durumda olduğunu kontrol edin.
- **Lisans süresi dolduğunda kayıtlı verilerimiz silinir mi?** **Kesinlikle hayır.** Lisans süresinin dolması yalnızca modül ekranlarını kilitler; nöbet çizelgeleri, personel özlük kartları, dozimetre ve cihaz kayıtları veritabanında eksiksiz korunur. Yönetici yeni lisansı yüklediği anda tüm sistem kaldığı yerden açılır.
- **Sistemde kayıtlı e-postam yoksa veya dış ağdaysam şifremi nasıl sıfırlarım?** Güvenlik gereği Web Portalındaki **[Şifremi Unuttum?]** sihirbazı yalnızca hastane yerel ağında aktiftir ve sistemde e-posta adresi tanımlı kullanıcılar için çalışır. E-postanız kayıtlı değilse veya dış ağdaysanız Sistem Yöneticinize başvurarak yeni geçici şifre talep ediniz.

---

## 02. Kullanıcı ve Rol Yönetimi

Rol Tabanlı Erişim Kontrolü (RBAC), modül düzeyinde 4 kademeli veri kapsamı (Miras, Kendisi, Departman, Tümü), kişiye özel yetki istisnaları, rol bazlı yönetici onay zorunluluğu ve birim sorumlusu ile saha görev tahsisini yönetmenizi sağlar.

> **Yasal Güvence:** Kullanıcılar ve roller hiçbir zaman fiziksel olarak silinmez; pasife alınan hesapların geçmişte onayladığı tüm işlemler denetim izinde kalıcı olarak korunur.

### Kısa Reçete: Yeni Kullanıcı Açma ve Birim Sorumlusu Atama

**Kısa Reçete: Yeni Kullanıcı Açma ve Birim Sorumlusu Atama**

**1. İstenen Sonuç:**
Yeni başlayan personele sağlık özlük kartıyla bağlantılı kullanıcı hesabı tanımlamak ve departman sorumlusunu veya saha görevlerini belirlemek.
**2. Yapılacak İşlem:**
**[Kullanıcı İşlemleri]** sekmesinde **[Yeni Kullanıcı]** butonuna basıp rol ve **[Personel Bağlantısı]** seçimini kaydedin. Ardından **[Birim Sorumlulukları]** sekmesinden departmanı seçip **[Sorumluyu Değiştir]** veya **[Görev Ata]** butonunu kullanın.
**3. Sistem Etkisi:**
Kullanıcı yalnızca yetkili olduğu modüllere ve veri kapsamına erişir; departmana tek asli birim sorumlusu atanır ve RKE, Cihaz, Dozimetre, Ortam Dozu ile Eğitim saha görevleri personellere dağıtılır.

- **Erişim Modeli:** RBAC & 4 Kapsam
- **Yetkili Rol:** Sistem Yöneticisi
- **Şifre Kuralı:** Min. 8 Karakter
- **Platform:** Masaüstü Kokpit

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Kullanıcı yönetimi, rol yetki matrisi ve güvenlik kilitlerinin operasyonel kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **[Personel Bağlantısı]** (Kullanıcı Formu Açılır Kutusu) | Giriş hesabını sağlık personelinin özlük siciliyle eşleştirmek. | Bağlantı kurulmazsa hesap yalnızca operatör olur; nöbet, izin ve dozimetre listelerinde görünmez. | Kullanıcı oluşturulurken veya güncellenirken. | Sistem Yöneticisi |
| **[Aktif/Pasif] ve Hesap Kilitleri** (Güvenlik Kalkanı) | Kurumu yöneticisiz bırakmamak ve geçmiş izleri korumak. | Kendi hesabını/Admin'i pasife alma, yerleşik sistem rollerini silme ve bağlı kullanıcısı olan rolü silme otomatik engellenir. | Pasife alma veya rol silme girişiminde. | Sistem Yöneticisi / Sistem Kilidi |
| **[Değişiklikler Yönetici Onayı Gerektirir]** (Rol Formu Onay Kutusu) | Kontrollü rollerin kritik veri değişikliklerini çapraz onaydan geçirmek. | İşaretli roldeki kullanıcının kayıt ekleme, güncelleme veya silme işlemleri doğrudan yazılmayıp Merkezi Onay paneline sevk edilir. | Rol tanımlanırken ve veri kaydedilirken. | Sistem Yöneticisi / Onay Amiri |
| **Okuma Bağımlılık Zinciri** (Modül Yetki Matrisi) | Görüntüleme hakkı olmayan modülde yazma veya silme açılmasını önlemek. | Yazma, Güncelleme veya Silme kutusu işaretlendiğinde Okuma otomatik açılır; Okuma kapatıldığında tümü kapanır. | Rol veya özel yetki kutuları işaretlenirken. | Sistem Yöneticisi |
| **4 Kademeli Veri Kapsamı** (Miras / Kendisi / Departman / Tümü) | Modül bazında kullanıcının göreceği kayıt sınırını belirlemek. | Miras seçilirse rolün genel kapsamı uygulanır; istenen modüller için yalnızca kendi sicili, birimi veya tüm kurum seçilir. | Modül yetkisi yapılandırılırken. | Sistem Yöneticisi |
| **[Kişiye Özel Yetkiler]** (İstisna Paneli) | Kullanıcının ana rolünü değiştirmeden tekil modüllerde özel izin veya kapsam vermek. | Özel İzin kutusuyla seçili modülün izin ve kapsamı değiştirilir; **[Role Dön (İstisnaları Kaldır)]** ile rol varsayılanına dönülür. | Personele rolü dışında ek veya kısıtlı yetki gerektiğinde. | Sistem Yöneticisi |
| **Rol ve Durum Rozetleri** (Tablo Göstergeleri) | Yetki seviyesini ve hesap aktifliğini listede tek bakışta ayırt etmek. | Kullanıcı ve rol listelerinde yetki düzeyleri (Admin, Yönetici, Birim Sorumlusu, Kullanıcı) ve aktiflik durumu renkli rozetlerle gösterilir. | Kullanıcı veya rol listesi incelenirken. | Sistem Yöneticisi |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Ayrılan Personelin Hesabını Kapatırsam Onayladığı Kayıtlar Silinir mi?**
> - **Yanlış Algı:** *"İşten ayrılan personelin kullanıcı hesabını kapattığımda geçmişte onayladığı nöbetler ve girdiği dozimetre ölçümleri sistemden silinir veya bozulur."*
> - **Gerçek Sistem Mantığı:** **Hiçbir geçmiş kayıt silinmez.** **[Aktif/Pasif]** işlemi kullanıcının sisteme giriş yetkisini durdurur ancak personel kartını veya onay geçmişini silmez. Geçmişte onaylanan nöbetler, dozimetre verileri ve denetim izleri veritabanında eksiksiz korunur.

### Süreç Akış Şeması

1. **Oturum ve Rol Çözümleme:** Kullanıcı giriş yaptığında önce kişiye özel modül istisnaları, yoksa bağlı olduğu rolün yetki matrisi yüklenir.
2. **Eylem ve Veri Kapsamı:** Okuma izni olmayan modüller gizlenir; yetkili modüllerde kayıtlar seçilen kapsam sınırına (Kendisi, Departman veya Tümü) göre süzülür.
3. **Evrensel Onay Denetimi:** Rolünde yönetici onayı zorunlu tutulan kullanıcıların kritik veri değişiklikleri doğrudan uygulanmayıp Merkezi Onay paneline yönlendirilir.

### Adım Adım İşlem Rehberi

#### 1. Kullanıcı Hesabı Kilit Açma ve Kişiye Özel Yetki İstisnası Tanımlama

1. **[Kullanıcı ve Rol Yönetimi] > [Kullanıcı İşlemleri]** sekmesinden arama kutusu veya durum/rol filtreleriyle ilgili kullanıcıyı bulun.
2. Hatalı şifre denemesiyle bloke olmuş bir kullanıcıyı seçip araç çubuğundaki **[Kilidi Kaldır]** butonuna basarak hesabı anında açın.
3. Rolünü değiştirmeden belirli modüllerde farklı izin veya kapsam vermek için satırı seçip **[Kişiye Özel Yetkiler]** panelini açın; ilgili modülde özel izin kutusunu işaretleyip izinleri ayarladıktan sonra **[Özel Yetkileri Kaydet]** butonuna tıklayın.

#### 2. Rol Oluşturma, Klonlama, Şablon Uygulama ve Karşılaştırma

1. **[Roller ve Yetkiler]** sekmesine geçin; sıfırdan rol tanımlamak için **[Yeni Rol Ekle]** butonunu kullanın veya mevcut bir rolün yetkilerini devralmak için **[İşlemler] > [Rolü Kopyala]** seçeneğini tıklayın.
2. Matrisi tek tek işaretlemek yerine üstteki **[Şablon Uygula]** açılır kutusundan hazır bir profil (*Sadece Okuma*, *Operasyon* veya *Tam Yetki*) uygulayıp gerekli modüllerde kapsamı özelleştirin ve **[Kaydet]** butonuna basın.
3. İki rol arasındaki izin ve kapsam farklarını denetlemek için **[Karşılaştır]** butonuna tıklayıp farklı satırları vurgulu görünümde inceleyin.

#### 3. Birim Sorumlusu ve Saha Görev Tahsisi Yapma

1. **[Birim Sorumlulukları]** sekmesinde sol listeden ilgili departmanı seçin (dilerseniz **[Sadece Yöneticiler]** filtresini kullanın).
2. Departmanın asli amirini belirlemek için sağ listeden personeli seçip **[Sorumluyu Değiştir]** butonuna tıklayın.
3. RKE Muayene, Cihaz Bakım/Arıza, Ortam Dozu, Dozimetre veya Eğitim saha görevlerini iş yükünü paylaşacak personellere atamak için **[Görev Ata]** butonunu kullanın; görevi geri almak için **[Görevi Kaldır]** butonuna basın.

### Sıkça Sorulan Sorular (SSS)

- **Kullanımda olmayan bir rolü silmeye çalıştığımda sistem neden izin vermiyor?** Silmek istediğiniz role halen bağlı aktif veya pasif kullanıcı hesapları varsa sistem veri tutarlılığını korumak için silme işlemini engeller. Önce **[Kullanıcı İşlemleri]** sekmesinden o kullanıcıları başka bir role aktarın; ardından rolü silebilirsiniz. Yerleşik sistem rolleri (Admin, Yönetici, Kullanıcı, İzleyici) ise hiçbir zaman silinemez.
- **"Miras" kapsamı seçildiğinde personelin veri görme sınırı nasıl belirlenir?** Modül yetki tablosundaki **Miras** seçeneği, ilgili modülün bağlı olduğu rolün genel veri kapsamını (Kendisi, Departman veya Tümü) otomatik olarak uygulamasını sağlar. Yalnızca belirli bir modülde farklı sınır gerekiyorsa o satırın radyo butonunu doğrudan **[Kendisi]**, **[Departman]** veya **[Tümü]** yapabilirsiniz.
- **Birim Sorumlusu atamasını neden Departman Tanımları penceresinde göremiyorum?** Departman hiyerarşisi ile yetki yönetimini birbirinden ayırmak amacıyla birim sorumlusu ve saha görevlisi (RKE, Cihaz, Ortam Dozu, Dozimetre, Eğitim) atamaları **[Kullanıcı ve Rol Yönetimi] > [Birim Sorumlulukları]** sekmesinde merkezileştirilmiştir.

---

## 03. Sistem Ayarları, E-Posta & Tanımlamalar

Kurum antet başlıkları ve çift logo parametreleri, otomatik algılamalı e-posta (SMTP) ve dış ağ 2FA doğrulaması, hastane departman hiyerarşisi, mimari kroki eşlemesi, unvan mirası, tatil takvimi otomasyonu ve veri bütünlüğü odaklı hibrit silme kurallarını yönetmenizi sağlar.

> **Yasal Güvence:** Tanım kayıtları silinirken geçmiş envanter, cihaz, muayene veya personel ilişkisi varsa sistem kaydı kalıcı silmez; güvenle pasife çekerek 30 yıllık denetim izini korur.

### Kısa Reçete: Kurum Antet ve Çıktı Parametrelerini Ayarlama

**Kısa Reçete: Kurum Antet ve Çıktı Parametrelerini Ayarlama**

**1. İstenen Sonuç:**
Tüm resmi raporlarda, tutanaklarda ve PDF çıktılarında kurumun resmi üst başlıklarının ve çift logosunun doğru basılması.
**2. Yapılacak İşlem:**
**[Sistem Yönetimi] > [Genel Ayarlar] > [Rapor ve Çıktı Ayarları]** ekranından başlık ve logo satırını seçin; sağ panelde metni veya **[Gözat...]** butonuyla logoyu seçip **[Aktif]** kutusunu işaretleyin ve **[Değişiklikleri Kaydet]** butonuna basın.
**3. Sistem Etkisi:**
Seçilen logolar güvenli kaynak alanına kopyalanır ve tüm rapor motorları kurum antetini bu ayarlardan okur; kurum adı boşsa sistem sahte kurum adı üretmez, varsayılan RADPYS başlığını kullanır.

- **Birim Kod Formatı:** 2-20 Büyük Harf/Rakam
- **Yetkili Rol:** Sistem Yöneticisi
- **Tatil Hassasiyeti:** 0.5 Gün Adımlı
- **Platform:** Masaüstü Kokpit

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Sistem parametreleri, e-posta güvenliği, hiyerarşik tanımlamalar ve veri bütünlüğü koruma kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Çekirdek Program Parametreleri** (Genel, Güvenlik, Dozimetre, İzin, FHZ) | Uygulamanın iş kurallarını kod değiştirmeden merkezi olarak uyarlamak. | Yalnızca mevcut sistem anahtarlarının değeri değiştirilir; karşılığı olmayan yeni parametre eklenmesine izin verilmez. | Kurum politikası güncellendiğinde. | Sistem Yöneticisi |
| **Otomatik Algılamalı E-Posta (SMTP)** ([E-Posta ve Bildirim Ayarları]) | Sunucu ve port bilgisi aramadan bildirim e-postasını kurmak ve parolayı gizlemek. | Adres yazıldığında sağlayıcı ve port otomatik algılanır; kaydedilen parola ekran tekrar açıldığında güvenlik gereği kutuya geri doldurulmaz. | E-posta altyapısı yapılandırılırken. | Sistem Yöneticisi |
| **Dış Ağ 2FA ve Otomatik Bildirimler** (Güvenlik ve Bildirim Tercihleri) | Dış ağ Web Portal girişlerini 6 haneli kodla korumak ve kritik alarmları iletmek. | Onay kutuları kaydedildiğinde açık Web Portal sunucusunu yeniden başlatmadan devreye girer (dış ağ 2FA kodu gönderilemezse oturum açılmaz). | Siber güvenlik veya uyarı politikası açıldığında. | Sistem Yöneticisi |
| **Departman Hiyerarşi Döngü Kilidi** ([Üst Departman] Açılır Kutusu) | Organizasyon ağacında sonsuz döngü oluşmasını engellemek. | Bir departman kendisini veya kendi altındaki bir birimi üst departman olarak seçerse kayıt işlemi reddedilir. | Departman kaydedilirken veya güncellenirken. | Sistem Yöneticisi |
| **Veri Bütünlüğü Odaklı Hibrit Silme** ([Sil] Butonu (Tüm Tanımlar)) | Kullanımdaki bir tanım silinince geçmiş cihaz, personel veya muayene kayıtlarını bozmamak. | Departman, Unvan, İzin, Cihaz veya RKE tanımına bağlı kayıt varsa silinmez, **Pasif** duruma çekilir; hiç kullanılmamışsa kalıcı silinir. | Tanımlama listesinde **[Sil]** onaylandığında. | Sistem Yöneticisi |
| **Unvan Radyasyon ve Nöbet Mirası** ([Radyasyon Görevlisi mi?] & [Nöbet]) | Yeni personel eklenirken mesleki varsayılanları tek tek işaretleme zahmetini önlemek. | Unvan kartındaki radyasyon görevlisi ve nöbet tutabilme bayrakları o unvanla açılan yeni personele otomatik devredilir. | Unvan tanımlanırken veya personel açılırken. | Sistem Yöneticisi |
| **Tatil Otomasyonu ve 0.5 Gün Kuralı** ([Resmi Tatilleri Ekle] & [Gün Sayısı]) | Sabit resmi tatilleri ve Arife yarım günlerini eksiksiz puantaja yansıtmak. | Resmi tatil aracı 8 sabit günü tek seferde ekler; Arife günleri 0.5 gün adımıyla işlenerek dini bayramlar (Ramazan 4, Kurban 5 kayıt) toplu oluşturulur. | Yıllık tatil takvimi hazırlanırken. | Sistem Yöneticisi |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Kullanımda Olan Bir Tanımı Silersem Geçmiş Kayıtlar Bozulur mu?**
> - **Yanlış Algı:** *"Eski bir departmanı, unvanı, cihaz türünü veya RKE tanımını [Sil] butonuyla kaldırırsam geçmişte ona bağlı cihaz, nöbet ve muayene kayıtları da silinir."*
> - **Gerçek Sistem Mantığı:** **Geçmiş kayıtlarınız güvendedir.** RADPYS'de tüm tanım ekranlarında **Veri Bütünlüğü Odaklı Hibrit Silme** çalışır. Silmek istediğiniz tanıma bağlı personel, alt birim, cihaz, RKE veya muayene kaydı varsa sistem tanımı kalıcı silmez, güvenle **Pasif** duruma alır; yalnızca hiç kullanılmamış tanımlar sistemden kalıcı temizlenir.

### Süreç Akış Şeması

1. **Tanımlama ve Format Kontrolü:** Departman ve unvan kodları standart formata göre, üst departman seçimleri ise hiyerarşi döngüsüne karşı doğrulanır.
2. **Bağımlılık ve Hibrit Silme Denetimi:** Düzenleme formundan aktif personelli birim kapatılmak istenirse transfer uyarısı verilir; **[Sil]** butonunda ise bağlı kaydı bulunan tanımlar pasife alınır, boş olanlar silinir.
3. **Sistem Senkronizasyonu:** Kaydedilen kurum ayarları, SMTP/2FA tercihleri ve tanımlar tüm masaüstü formlarına ve Web Portalına anlık yansır.

### Adım Adım İşlem Rehberi

#### 1. Kurum Anteti, Çift Logo ve Program Ayarlarını Güncelleme

1. Sol gezinim ağacından **[Genel Ayarlar]** altındaki ilgili kategoriyi (örneğin **[Rapor ve Çıktı Ayarları]** veya **[Güvenlik Ayarları]**) açın.
2. Tablodan düzenlemek istediğiniz ayara tıklayın; sağdaki **[Ayar Detayı]** panelinde yeni değeri yazın veya logo seçimleri için **[Gözat...]** butonunu kullanın.
3. Başlık ve logoların raporlarda görünmesi için **[Aktif]** kutusunun işaretli olduğunu doğrulayıp **[Değişiklikleri Kaydet]** butonuna tıklayın.

#### 2. Departman, Mimari Kroki ve Kardeş Sistem Tanımlarını Yönetme

1. **[Sistem Tanımları] > [Departman Tanımları]** ekranında **[Yeni]** butonuna basın; ad, 2–20 karakterli büyük harf kod, varsa **[Üst Departman]** ve gerekiyorsa **[Radyasyonlu alan]** / **[Nöbet usulü mesai]** seçeneklerini işaretleyin.
2. Birime mimari kat planı bağlamak için **[Kat Planı / Kroki]** yanındaki **[Yeni Yükle...]** butonunu ve oda/mahalle kodunu girip **[Kaydet]** butonuna tıklayın.
3. Unvan, Cihaz Türü, Cihaz Kullanım Amacı, Cihaz Kaynak Türü, RKE Ekipman Türü, RKE Klinik Bulguları, İzin Türleri, Eğitim veya Muayene Türleri ekranlarında da aynı **[Yeni]**, **[Düzenle]**, **[Sil]** (hibrit silme) ve **[Excel Aktar]** yapısını kullanın.

#### 3. Resmi ve Dini Tatil Takvimini Otomatik Oluşturma

1. **[Sistem Tanımları] > [Resmi/Dini Tatiller]** ekranını açın; araç çubuğundaki **[Resmi Tatilleri Ekle]** butonuna tıklayıp yılı girerek 8 sabit resmi tatili (1 Ocak, 23 Nisan, 1 Mayıs, 19 Mayıs, 15 Temmuz, 30 Ağustos ve 28–29 Ekim dahil) tek seferde ekleyin.
2. 2026–2030 yılları arasındaki resmi tatiller ile Diyanet dini bayramları ve Arife yarım günleri (aynı tarihe denk gelen milli ve dini tatillerin tekilleştirilmesi dahil) sistemde hazır tanımlı gelir; sonraki yıllar için **[Yeni]** butonuna basıp bayram türünü seçin, **[Tüm bayram günlerini otomatik oluştur (Arife + Bayram)]** kutusu aktifken yalnızca **Arife** gününün tarihini girip **[Kaydet]** butonuna tıklayın.

#### 4. E-Posta (SMTP), Otomatik Bildirimler ve Web Portal 2FA Kurulumu

1. **[Genel Ayarlar] > [E-Posta ve Bildirim Ayarları]** sayfasında gönderici e-posta adresinizi yazın; sistem sağlayıcı ve port bilgisini otomatik tanır.
2. Gmail/Outlook gibi sağlayıcılarda **[Google Uygulama Şifresi Al]** yardımıyla aldığınız uygulama şifresini (veya kurumsal SMTP parolanızı) girin; ihtiyaç duyduğunuz 2FA OTP ve otomatik e-posta bildirim onay kutularını işaretleyin.
3. **[Bağlantıyı Test Et (Test E-Postası Gönder)]** butonuyla e-posta gönderimini doğruladıktan sonra **[Ayarları Kaydet ve Etkinleştir]** butonuna basın.

### Sıkça Sorulan Sorular (SSS)

- **Fiili hizmet (FHZ) hesaplama yöntemini yıl ortasında değiştirebilir miyiz?** Hesaplama yöntemi değiştirildiğinde geçmiş dönem puantajlarının tutarlılığı etkilenebileceği için sistem **Kritik Ayar Değişikliği** onayı ister. Mevcut verilerin bütünlüğü açısından bu değişikliğin yıl veya dönem başında yapılması önerilir.
- **Departman düzenleme penceresinde [Aktif] kutusunu kaldırdığımda sistem neden uyarı veriyor?** Departman düzenleme ekranından doğrudan pasife alma işleminde o birime kayıtlı personel veya aktif alt departman varsa sistem yetim kayıt oluşmaması için işlemi durdurur. Önce personelleri **[Personel Listesi]** üzerinden başka bir aktif birime aktarmanız gerekir.
- **Genel Program Ayarları tablosuna neden yeni satır veya özel anahtar ekleyemiyoruz?** Program ayarları uygulamanın çekirdek kurallarını yöneten sabit parametrelerdir. Sistem, arka planda karşılığı olmayan rastgele anahtarların eklenmesini güvenlik ve kararlılık amacıyla engeller; yalnızca mevcut parametrelerin değerleri güncellenebilir.

---

## 04. Veritabanı Bakım, Yedekleme & Güvenlik

256-bit şifreli veritabanı ve belge yedekleme, donanım ve kurtarma kartı destekli felaket kurtarma, motor optimizasyonu (VACUUM ve REINDEX), sistem tanısı ve otomatik onarım, 3 kademeli sıfırlama, SHA-256 kriptografik denetim izi ve beklenmeyen hata yakalama işlemlerini yönetmenizi sağlar.

> **Yasal Güvence:** Veritabanı sıfırlama ve felaket kurtarma işlemleri yalnızca Sistem Yöneticisi (Admin) yetkisi ve Sudo şifre doğrulaması ile yürütülür; kurumsal tanımlar ve roller sıfırlamada korunur.

### Kısa Reçete: Şifreli Yedekleme ve Kurtarma Anahtarı Güvencesi

**Kısa Reçete: Şifreli Yedekleme ve Kurtarma Anahtarı Güvencesi**

**1. İstenen Sonuç:**
Kurumdaki tüm klinik, nöbet, dozimetre ve şifreli evrak verilerinin format veya arıza riskine karşı harici ortamda kurtarılabilir şekilde yedeklenmesi.
**2. Yapılacak İşlem:**
**[Veritabanı Bakım]** ekranında **[Veritabanı Yedekle]** ve **[Dosyaları Yedekle]** butonlarına basın; ardından **[Güvenlik ve Kurtarma Anahtarı]** butonundan kurtarma dosyanızı kaydedip yedeklerle birlikte harici diske kopyalayın.
**3. Sistem Etkisi:**
Veriler ve yüklenen belgeler 256-bit şifrelemeyle zaman damgalı arşivlenir; donanım değişse dahi kurtarma anahtarı veya Cihaz Kimliği desteğiyle sistem eksiksiz geri yüklenebilir.

- **Şifreleme:** 256-bit AES / PBKDF2
- **Denetim Bütünlüğü:** SHA-256 Zinciri
- **Emniyet Kilidi:** Sudo Yönetici Onayı
- **Platform:** Masaüstü Kokpit

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Kurtarma anahtarı, motor bakımı, sıfırlama kalkanı, log sekmeleri ve global hata koruma kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **[Güvenlik ve Kurtarma Anahtarı]** (Kurtarma Kartı & Donanım Anahtarı) | Format veya yeni sunucu kurulumu sonrası şifreli yedeklerin açılabilmesini garanti altına almak. | Sudo onayıyla 32 karakterlik anahtarı ve Cihaz Kimliğini gösterir; kurtarma dosyası indirilir ve geri yüklemede **[Cihaz Kimliğiyle Çözmeyi Dene]** sunulur. | İlk kurulumda veya felaket kurtarma sırasında. | Sistem Yöneticisi (Sudo) |
| **[Boyut Optimize Et (VACUUM)] & [İndeksleri Yenile (REINDEX)]** (Sistem Bakım Araçları) | Silinen verilerin bıraktığı boş alanı geri kazanmak ve sorgu/arama performansını artırmak. | Ölü kayıtları temizleyip önceki-sonraki boyut kazancını raporlar ve tüm veritabanı arama indekslerini yeniden kurar. | Aylık bakımda veya aramalarda yavaşlama hissedildiğinde. | Sistem Yöneticisi |
| **[Sistem Tanısı ve Bütünlük Kontrolü]** (Bütünlük & Otomatik Onarım Sihirbazı) | Denetim izi, yetim kayıtlar ve tarih/metin tutarsızlıklarını tespit edip onarmak. | 5 kritik anomaliyi tarar; sorun tespit edilirse **[Otomatik Düzelt ve Onar]** butonu Sudo onayıyla kayıtları tek tıkla düzeltir. | Dönem sonlarında veya veri tutarsızlığı şüphesinde. | Sistem Yöneticisi (Sudo) |
| **[Veritabanını Sıfırla (Verileri Temizle)]** (Tehlikeli Bölge (3 Kademeli Kilit)) | Kurum tanımlarını ve rolleri silmeden yalnızca test veya işlem verilerini temizlemek. | Admin rolü, kutuya büyük harfle **SIFIRLA** yazımı ve Sudo şifresiyle 48 işlem tablosunu sıfırlar; tanımlar, tatiller ve Admin korunur. | Kurum devrinde veya test sonrası sıfır başlangıçta. | Sistem Yöneticisi (Admin / Sudo) |
| **3 Sekmeli Log Merkezi** ([Tarihsel Sistem] / [Etkileşim] / [KVKK Denetim İzi]) | Teknik hataları, kullanıcı adımlarını ve resmi KVKK/NDK işlem izlerini denetlemek. | Denetim İzi sekmesi her kaydın SHA-256 hash zincirini doğrular; dış müdahale şüphesinde kırmızı uyarı verir ve gölge kasadan onarım sunar. | Arıza incelemelerinde veya resmi denetimlerde. | Sistem Yöneticisi / Denetçi |
| **Beklenmeyen Hata Penceresi** (Global Çökme Koruması) | Beklenmedik bir çalışma hatasında programın aniden kapanmasını önleyip destek kaydı almak. | Hata ayrıntısını panoya kopyalamaya veya hazır teknik destek e-postası oluşturmaya izin verir; açık bağlantıyı korur. | Beklenmeyen bir yazılım istisnası oluştuğunda. | Tüm Kullanıcılar |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Veritabanını Sıfırlarsam Departmanlarım ve Ayarlarım da Silinir mi?**
> - **Yanlış Algı:** *"Veritabanını Sıfırla butonuna basarsam hastane departmanlarım, unvanlarım, tatil takvimim, rollerim ve admin şifrem de silinir; sistemi baştan kurmam gerekir."*
> - **Gerçek Sistem Mantığı:** **Kurumsal altyapınız korunur.** Sıfırlama işlemi yalnızca personel, nöbet, izin, dozimetre ve arıza gibi operasyonel hareket kayıtlarını temizler. Departmanlar, unvanlar, resmi tatiller, program ayarları, roller, yetkiler ve Admin hesabı korunarak sistem anında kullanıma hazır kalır.

### Süreç Akış Şeması

1. **Şifreli Yedekleme ve Anahtar:** Veritabanı ve yüklenen evrak kasası 256-bit şifrelemeyle paketlenir; kurtarma kartının harici ortamda saklanması önerilir.
2. **Felaket Kurtarma (Geri Yükleme):** Yedek geri yüklenirken çift onay ve Sudo doğrulaması istenir; anahtar yerel kasadan bulunamazsa kurtarma dosyası veya donanım anahtarı seçeneği açılır.
3. **Bakım, Tanı ve 3 Kademeli Sıfırlama:** Motor bakımı ve tanı sihirbazıyla veri sağlığı korunur; sıfırlama ise yalnızca 3 güvenlik kilidi geçildiğinde hareket verilerini temizler.

### Adım Adım İşlem Rehberi

#### 1. Şifreli Yedek Alma, Dışa Aktarma ve Yedekten Geri Yükleme

1. **[Veritabanı Bakım]** sayfasında **[Veritabanı Yedekle]** ve **[Dosyaları Yedekle]** butonlarına tıklayarak anlık şifreli yedekleri oluşturun; tabloda oluşan satırdan **[Dışa Aktar]** ile harici diske kopyalayın.
2. İlk kurulumda **[Güvenlik ve Kurtarma Anahtarı]** butonuna basıp Sudo doğrulamasının ardından **[Kurtarma Dosyası Kaydet (.txt)]** ile anahtar kartını yedeklerinizin yanına kaydedin.
3. Eski bir yedeğe dönmek için ilgili satırdaki **[Yükle]** butonuna basın, kritik uyarıyı ve Sudo şifresini onaylayın; sistem yeni kurulmuşsa anahtarı girerek, kurtarma dosyasını seçerek veya **[Cihaz Kimliğiyle Çözmeyi Dene]** butonuna basarak geri yüklemeyi tamamlayın ve uygulamayı yeniden başlatın.

#### 2. Motor Bakımı, Sistem Tanısı ve Veritabanı Sıfırlama

1. Disk alanı kazanmak için **[Boyut Optimize Et (VACUUM)]**, arama hızını artırmak için **[İndeksleri Yenile (REINDEX)]** butonunu çalıştırın.
2. Veri tutarsızlıklarını taramak için **[Sistem Tanısı ve Bütünlük Kontrolü]** penceresini açın; anomali listelenirse **[Otomatik Düzelt ve Onar]** butonuna basıp Sudo onayıyla düzeltin.
3. Yalnızca yetkili devir veya sıfırlama gerektiğinde kırmızı alandaki **[Veritabanını Sıfırla (Verileri Temizle)]** butonuna tıklayıp doğrulama kutusuna büyük harflerle **SIFIRLA** yazın ve Sudo şifrenizle onaylayın.

#### 3. Log Kayıtları ve SHA-256 Denetim İzini İnceleme

1. **[Log Kayıtları ve Denetim İzleri]** penceresinden ihtiyacınıza göre **[Tarihsel Sistem Günlükleri]**, **[Kullanıcı Etkileşim Günlüğü]** veya **[KVKK / NDK Denetim İzi]** sekmesini açın.
2. Arama, kategori, seviye veya sonuç filtrelerini uygulayın; denetim izinde zincir bütünlüğünü doğrulayın ve herhangi bir satıra çift tıklayarak ham kayıt ile dijital özet detaylarını inceleyin.
3. Beklenmeyen bir hata penceresi açıldığında **[Hata Detayını Kopyala]** veya **[E-Posta Gönder]** butonlarıyla teknik ekibe ayrıntıları iletip **[Kapat]** ile çalışmaya devam edin.

### Sıkça Sorulan Sorular (SSS)

- **Yedek geri yüklendikten sonra neden programı kapatıp yeniden açmam gerekiyor?** Veritabanı geri yükleme işlemi tabloları ve kayıt sayaçlarını geçmişteki yedeğe döndürür; ancak açık masaüstü sekmeleri bellekte önceki verileri tutabilir. Tüm ekranların yeni veritabanıyla tam senkronize çalışması için uygulamanın yeniden başlatılması önerilir.
- **Boyut Optimize Et (VACUUM) ve İndeksleri Yenile (REINDEX) ne sıklıkla kullanılmalıdır?** Yoğun veri girişi veya toplu silme/aktarım işlemlerinin ardından ayda bir kez **[Boyut Optimize Et (VACUUM)]** çalıştırılması önerilir. Liste ve aramalarda yavaşlama hissedildiğinde veya 3–6 aylık rutin bakımda **[İndeksleri Yenile (REINDEX)]** çalıştırılabilir.
- **Beklenmeyen Hata penceresi çıktığında veritabanına kaydedilmiş verilerim silinir mi?** Hayır. Global hata yakalayıcı uygulamanın aniden kapanmasını engeller ve o ana kadar kaydedilmiş tüm verileriniz korunur. Yalnızca o form üzerinde yazıp henüz kaydetmediğiniz taslak alanları tekrar girmeniz gerekebilir.

---

## 05. Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım

Radyasyonla çalışan ve idari personelin özlük kartını yönetme, aktif lisans kotası kontrolü, otomatik kullanıcı hesabı üretimi, 5 adımlı toplu Excel veri aktarımı, gebe/emzirme koruma kalkanı ve 30 yıllık yasal KVKK/NDK arşiv paketini oluşturma rehberi.

> **Yasal Güvence:** 6331 sayılı İSG Kanunu m. 15, 32162 sayılı Yönetmelik ve NDK düzenlemeleri gereğince ayrılan radyasyon çalışanları sistemden silinmez; sağlık ve doz geçmişleri en az 30 yıl saklanır.

### Kısa Reçete: Yeni Personel Kaydı ve Yasal Yaşam Döngüsü Yönetimi

**Kısa Reçete: Yeni Personel Kaydı ve Yasal Yaşam Döngüsü Yönetimi**

**1. İstenen Sonuç:**
Kurum lisans kotasını aşmadan yeni radyasyon çalışanını kaydetmek, otomatik giriş hesabını açmak ve ayrılışta 30 yıllık yasal KVKK arşiv paketini güvenceye almak.
**2. Yapılacak İşlem:**
**[Personel Ekle]** sihirbazıyla kimlik, iletişim, özlük, eğitim ve belgeleri girip **[Kaydet]** butonuna basın. Personel ayrılışında **[Ayrıntı / Düzenle] > [İşten Ayrılış]** sekmesinden zimmet denetimini tamamlayıp **[KVKK ve Özlük Arşiv Paketini İndir (ZIP)]** butonunu kullanın.
**3. Sistem Etkisi:**
Aktif personel kotası doğrulanır ve giriş hesabı otomatik oluşturulur; ayrılan personelin doz, sağlık ve özlük geçmişi 30 yıl saklanmak üzere korunurken lisans kontenjanı anında serbest bırakılır.

- **Yasal Saklama:** 30 Yıl (NDK / İSG)
- **Lisans Kalkanı:** Aktif Personel Kotası
- **Özel Koruma:** Gebe (1 mSv) & Emzirme
- **Platform:** Masaüstü & Web Profil

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Personel lisans kotası, sayfalama koruması, gebelik/emzirme kalkanı, ilişik kesme ve toplu aktarım kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Lisans Kotası ve Otomatik Hesap** (Kayıt Doğrulama Motoru) | Sözleşme limitini korurken personele ayrı form açmadan oturum hesabı tanımlamak. | Aktif personel kaydında kurum kotası denetlenir ve onaylandığında personele bağlı kullanıcı hesabı ile geçici şifre otomatik oluşturulur. | Yeni aktif personel kaydedilirken. | İK / RKS / Sistem Yöneticisi |
| **Durum Filtresi ve Sayfalama Koruması** (Liste Kontrol Çubuğu) | Aktif personeli ayrılanlardan ayırmak ve binlerce kayıtta ekran donmasını engellemek. | Varsayılan olarak yalnızca aktif çalışanlar listelenir; 1.000 üzeri kayıtta Tümü seçildiğinde performans onayı istenir. | Personel listesi süzülürken. | Tüm Kullanıcılar |
| **Gebe ve Emzirme Koruma Kalkanı** ([Bildirimi Kaydet ve Nöbetleri İptal Et]) | Anne, fetüs ve bebeği iyonlaştırıcı radyasyon ile bulaşma riskinden korumak. | Gebelikte denetimli alan, gece nöbeti ve fazla mesai kapatılıp kalan süre fetüs ek doz sınırı 1 mSv izlenir; 1 yıllık emzirmede açık kaynak/bulaşma yasağı, süt izni ve gece muafiyeti uygulanır. | Gebelik veya doğum sonrası emzirme bildirildiğinde. | RKS / Hekim / Yönetici |
| **Zimmet Denetimli Ayrılış ve 30 Yıl Arşiv** ([Ayrılış Bilgilerini Kaydet] & ZIP İhracı) | Kurum RKE/dozimetre demirbaşını korumak ve yasal verileri devredilebilir pakette saklamak. | Zimmetli RKE, aktif dozimetre ve RKS görevi denetlenir; ayrılış onaylandığında kota boşaltılır ve yetki doğrulamasıyla tüm dozimetre, izin, sağlık ve eğitim geçmişini hiçbir satır kırpmadan özgün belge uzantılarıyla içeren 30 yıllık KVKK/özlük paketi (ZIP) üretilir. | İşten ayrılma, tayin veya emeklilikte. | İK / RKS / Sistem Yöneticisi |
| **Tanımsız Değer Çözücü ve Kısmi Birleştirme** ([Toplu Import] Sihirbazı) | Excel dosyalarındaki yazım farklarını yakalamak ve güncellemede mevcut veya mühürlü verilerin ezilmesini önlemek. | Hedef modül yetkisini denetler ve önizleme adımında veritabanına hiçbir kayıt yazmadan simülasyon yapar; tanımsız değerleri rastgele eşlemez, birleştirme modunda yalnızca Excel'de dolu gelen sütunları güncelleyip kilitli Şua yılları ile mühürlü HEK kayıtlarını korur ve hata raporunu maskeli üretir. | Toplu Excel veya CSV içe aktarımında. | Modül Yetkilisi / Sistem Yöneticisi |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — İşten Ayrılan Personeli Silersek Doz ve Sağlık Kayıtları Yok Olur mu?**
> - **Yanlış Algı:** *"İşten çıkan personeli lisans kotasından yer açılsın diye sistemden silmeliyiz; silersek geçmiş doz ve sağlık kayıtları da kaybolur."*
> - **Gerçek Sistem Mantığı:** **Personel kaydı asla kalıcı silinmez.** 6331 sayılı İSG Kanunu m. 15, 32162 sayılı Yönetmelik ve NDK kuralları uyarınca sağlık ve doz kayıtları işten ayrılış sonrası en az **30 yıl** saklanmalıdır. Ayrılış statüsüne alınan personel lisans kotasından otomatik düşülür ve tüm geçmişi şifreli özlük arşiv paketiyle korunur.

### Süreç Akış Şeması

1. **Lisans Kotası ve Kayıt:** Aktif personel eklenirken sözleşme kotası ile 11 haneli TC Kimlik numarası doğrulanır ve giriş hesabı otomatik açılır.
2. **Gebe ve Emzirme Koruması:** Gebe çalışanlarda denetimli alan ve gece nöbeti kapatılarak 1 mSv fetüs eşiği izlenir; emziren çalışanlarda 1 yıl süreyle bulaşma riskli açık kaynak alanı yasağı ve gece muafiyeti uygulanır.
3. **Ayrılış ve 30 Yıl Arşiv:** Zimmetli koruyucu ekipman ve aktif dozimetre iadeleri doğrulandıktan sonra personel ayrılışa geçirilir, kota serbest bırakılır ve 30 yıl saklanacak arşiv paketi oluşturulur.

### Adım Adım İşlem Rehberi

#### 1. Yeni Personel Ekleme ve 10 Kategorili Ayrıntı Kartını Yönetme

1. **[Personel Listesi]** ekranında **[Personel Ekle]** butonuna tıklayın; 5 adımlı formda **Kimlik Bilgileri**, **İletişim**, **Özlük İşleri** (departman, unvan ve Koşul A/B radyasyon grubu), **Eğitim Kayıtları** ve **Personel Belgeler** alanlarını doldurup **[Kaydet]** butonuna basın (sistem giriş hesabı arka planda otomatik açılır).
2. Kayıtlı bir personeli güncellemek için satıra çift tıklayın veya **[Ayrıntı / Düzenle]** butonunu seçin; sol listedeki 10 kategoriden (*Genel ve İletişim*, *Kurumsal Bilgiler*, *Eğitim Kayıtları*, *İzin Bilgileri*, *Sağlık Muayenesi*, *Dozimetre Takip*, *Personel Belgeleri*, *Nöbet Geçmişi*, *Personel Geçmişi*, *İşten Ayrılış*) ilgili sekmeye geçin.
3. Bilgi değişikliği yaparken sağ üstteki **[Düzenle]** butonunu açıp güncelleme sonrası **[Kaydet]** butonuna tıklayın.

#### 2. Gebelik / Emzirme Bildirimi ve İşten Ayrılış / 30 Yıllık Arşiv Paketi

1. Kadın personelde gebelik veya doğum bildirmek için detay kartında gebelik bildirimi butonuna basın, tarihleri girip **[Bildirimi Kaydet ve Nöbetleri İptal Et]** butonuna tıklayın; gebelikte gece nöbetleri otomatik iptal edilir, emzirmede 1 yıl süt izni ve bulaşma koruması başlar.
2. İşten ayrılan personelde **[İşten Ayrılış]** kategorisini açıp ayrılış tarihi ile sebebini seçin ve **[Ayrılış Bilgilerini Kaydet]** butonuna basın; sistem zimmetli koruyucu ekipman ve aktif dozimetre varsa iade onayı ister, aktif RKS görevi varsa sonlandırır.
3. Tüm sağlık, dozimetre, izin, eğitim ve özlük belgelerini tek dosyada dışa aktarmak için **[KVKK ve Özlük Arşiv Paketini İndir (ZIP)]** butonunu kullanın.

#### 3. 5 Adımlı Evrensel Toplu Veri İçe Aktarım Sihirbazı

1. **[Toplu Import]** butonuna basıp **[Şablonlar Klasörü]** üzerinden 2 sayfalı Excel şablonunu (*Veri Listesi* ve *Geçerli Değerler Kılavuzu*) hazırlayın ve **[Dosya Seç...]** ile yükleyin.
2. Sütun eşleştirme adımını doğrulayın; dosyada sistemde bulunmayan birim veya unvan varsa açılan **3. Tanımsız Değerleri Eşleştir** adımında **[Hepsini Eşle]** ya da **[Hepsini Yeni Yap]** ile çözüp **[Eşleştirmeleri Uygula ve İlerle]** butonuna basın.
3. **Önizleme ve Doğrulama** adımında **[Sadece Hatalılar]** / **[Sadece Mükerrerler]** filtrelerini kontrol ettikten sonra **[Aktarımı Başlat]** butonuna tıklayın; işlem bitince otomatik oluşturulan şifreleri **[Kullanıcı Hesap Bilgilerini İndir (.txt)]** ile alın ve varsa **[Hata Raporunu Aç]** ile hatalı satırları inceleyin.

#### 4. Web Portalı Hesabım & Profilim Görünümü

1. Saha personeli tarayıcı veya mobilden **Web Portalı**'na giriş yaptığında **Hesabım & Profilim** ekranından kendi iletişim, dozimetre, periyodik sağlık/EK-1, eğitim ve izin/nöbet kayıtlarını görüntüler.
2. Personele bağlı gebelik veya rotasyon bildirimi gönderildiğinde talep doğrudan masaüstü yetkili onay kuyruğuna iletilir; yöneticiler ise Web Portaldaki personel gösterge panelinden kadro özetini salt okunur izler.

### Sıkça Sorulan Sorular (SSS)

- **Kuruluş lisans kotamız dolduğunda yeni personel ekleyebilir miyiz?** Hayır. Lisans sözleşmesindeki aktif personel kotası dolduğunda sistem yeni aktif personel kaydını durdurur. Ancak işten ayrılan personellerin ayrılış işlemi kaydedilip pasife alındığında boşalan kontenjan kadar yeni kayıt hemen açılabilir.
- **TC Kimlik Numarası girildiğinde sistem neden doğrulama uyarısı veriyor?** Mükerrer ve hatalı resmi bildirimi önlemek için 11 haneli MERNİS algoritma kontrolü ve sistem içi tekillik denetimi uygulanır. İlk hanesi sıfır olan, sağlama toplamı tutmayan veya başka bir personelde kayıtlı olan TC numaraları kabul edilmez.
- **Emzirme döneminde radyasyon çalışanı için sayısal mSv dozu sınırı var mıdır?** 13.04.2023 tarihli ve 32162 sayılı Yönetmelik, 657 sayılı Kanun m. 101 ve ilgili çalışma şartları yönetmeliği gereğince emzirme döneminde sayısal bir mSv sınırı yerine radyoaktif bulaşma (kontaminasyon) riski taşıyan açık kaynak alanlarında çalıştırılmama kuralı uygulanır; buna ek olarak 1 yıl boyunca süt izni saat azaltımı ve gece nöbeti muafiyeti devrede tutulur.
- **Toplu personel dosyası yüklerken Excel'deki bir birim veya unvan sistemde yoksa dosya tamamen iptal edilir mi?** Hayır. Sihirbaz tanımsız değerler için otomatik olarak eşleştirme adımını açar. Her bilinmeyen birim veya unvanı sistemdeki mevcut bir tanımla eşleştirebilir, yeni tanım olarak ekleyebilir ya da o satırı atlayarak kalan geçerli personelleri sorunsuz aktarabilirsiniz.

---

## 06. İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru

3153 sayılı Kanun Ek Madde 1 ve 32162 sayılı Yönetmelik EK-2 kapsamındaki Şua İzni (sağlık izni) ile yıllık, mazeret ve hastalık izinlerinin talebini, tarih/nöbet çakışma denetimini, bakiye düşüm ve iadesini, yıl sonu devir/kilitleme motorunu ve Web Portal HBYS/EBYS evrak entegrasyonunu yönetmenizi sağlar.

> **Yasal Güvence:** Şua (sağlık) izni takip eden takvim yılı içinde kesintisiz kullanılır ve ertesi yıla devredilmez; onaylı izinler denetim izini korumak için silinemez, yalnızca iptal edilerek bakiye iade edilir.

### Kısa Reçete: İzin Talebi Oluşturma, Onaylama ve Resmi Evrak Eşleştirme

**Kısa Reçete: İzin Talebi Oluşturma, Onaylama ve Resmi Evrak Eşleştirme**

**1. İstenen Sonuç:**
Personel izinlerini kalan hak bakiyesi ve aktif nöbet çizelgesiyle çakışmadan onaylamak, bakiye düşümünü otomatik yapmak ve HBYS/EBYS evrak numarasıyla resmileştirmek.
**2. Yapılacak İşlem:**
**[İzin Talep Et]** penceresinde personeli, izin türünü ve tarihleri seçip **[İleri]** üzerinden varsa belgeyi ekleyerek **[Kaydet]** butonuna basın. Amir listesinden **[Onayla]** işlemi tamamlandıktan sonra Web Portalından HBYS/EBYS belge numarasını girin.
**3. Sistem Etkisi:**
Mevcut izin veya aktif nöbet çakışması varsa talep engellenir; onay anında bakiye düşülür, iptalde eksiksiz iade edilir ve ilk resmi evrak numarası girildiğinde kayıt Resmi Onaylı duruma yükselir.

- **Yasal Şua Tavanı:** 30 Gün / Yıl
- **EK-2 Şua Kuralı:** Her 50 Saate 1 Gün
- **Kurum Devir Ayarı:** Varsayılan 5 Gün
- **Platform:** Masaüstü & Web Portal

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Şua hakediş hesabı, çakışma kilitleri, bakiye iadesi, yıl sonu devir kilidi ve resmi evrak kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **EK-2 Kademeli Şua ve Aylık Dilim** ([Yıllık Hakediş] & [Şua Aylık Hakediş]) | Yıllık Şua hakkını mevzuata göre hesaplarken aylık görünümde ara toplam şişmesini önlemek. | Yıllık toplam hak 32162 Yönetmelik EK-2'ye göre 50 saatlik kademeli dilimlerle (azami 30 gün) kesinleşir; aylık sekme yalnızca tamamlanan 50 saatlik dilimleri gösterir ve cari yıl Şua hakkı devretmez. | Aylık kontrollerde ve yıl sonu kesinleştirmede. | Radyasyon Çalışanları / İK |
| **Tarih ve Aktif Nöbet Çakışma Kilidi** (Otomatik Kayıt & İkame Denetimi) | Yayınlanmış nöbet çizelgesiyle planlı izinlerin çakışmasını önlemek ve acil raporlarda boşluğu yakalamak. | Yayınlanmış nöbet varken planlı izin talebi engellenir; acil rapor veya mazeret izni onaylandığında ise çakışan nöbet otomatik boşaltılıp birim sorumlusuna ikame uyarısı iletilir ve belge zorunlu türlerde onay öncesi kanıt evrakı aranır. | İzin talebi kaydedilirken veya onaylanırken. | Sistem (Otomatik Kilit) / Birim Amiri |
| **Tam Gün / Yarım Gün / Saatlik Hesap** ([İzin Bilgileri] Süre Seçimi) | İzin türünün hafta sonu ve resmi tatil kurallarına göre net düşüm süresini hesaplamak. | Seçilen süre tipi ile hafta sonu ve resmi tatil dahil edilme ayarlarına göre düşülecek gün veya saat miktarını otomatik belirler. | İzin formu doldurulurken. | Personel / Birim Amiri |
| **[İptal Et] Bakiye İadesi ve Silme Yasağı** (Denetim İzi Kalkanı) | Onaylı izin kayıtlarının silinmesini önlemek ve iptal edilen iznin günlerini iade etmek. | Onaylı veya Resmi Onaylı izinlerde doğrudan silme engellenir; iptal edildiğinde düşülen günler bakiyeye iade edilir ve nöbet devri senkronize edilir. | Onaylı izne çıkılamadığında. | Yönetici / Süpervizör |
| **[Devir Aktar (Önceki Yıldan)] ve Yıl Kilidi** (Yıl Sonu Kesinleştirme Motoru) | Kapanan yılın kalan yıllık iznini aktarmak, Şua hakkını kesinleştirmek ve kaynak yılı dondurmak. | Yalnızca tamamlanmış önceki yıl için çalışır; kurum devir ayarı (varsayılan 5 gün) kadar devreder, 12 aylık fiili hizmetten yeni yıl Şua hakkını kesinleştirir ve yılı kilitler. | Yıl başında devir aktarımı yapılırken. | Sistem Yöneticisi / İK |
| **HBYS / EBYS Resmi Evrak Kaydı** (Web Portalı Resmi Belge Formu) | Onaylı izne resmi kurum evrak numarasını işleyip hukuki tescil kazandırmak. | İlk evrak numarası ve tarihi girildiğinde izin doğrudan Resmi Onaylı statüsüne geçer; sonraki değişiklikler yönetici onayına düşer. | Kurumdan resmi yazı numarası çıktığında. | Personel / İdari İşler |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Kullanılmayan Şua İzinleri Ertesi Yıla Devreder mi veya Ücrete Çevrilir mi?**
> - **Yanlış Algı:** *"Yoğunluk nedeniyle bu yıl 30 günlük Şua iznimi kullanamadım; gelecek yıla devreder veya kullanamadığım günlerin parasını alabilirim."*
> - **Gerçek Sistem Mantığı:** **Ertesi yıla devretmez; aktif çalışmada ücrete çevrilemez.** 3153 sayılı Kanun Ek Madde 1, 657 DMK m. 103/3 ve 32162 sayılı Yönetmelik m. 8 uyarınca Şua (sağlık) izni çalışanın radyasyondan korunması ve biyolojik onarımı içindir; bölünemez, devretmez ve çalışırken paraya dönüştürülemez. İşten ayrılış veya fesih halinde ise 657'ye tabi memurlarda ücrete dönüşmezken, 4857'ye tabi işçilerde Yargıtay 9. Hukuk Dairesi içtihatları çerçevesindeki durum kurum İK ve hukuk birimince değerlendirilir.

### Süreç Akış Şeması

1. **Talep ve Çakışma Kontrolü:** Talep edilen tarihler başka bir izinle veya aktif nöbet çizelgesiyle kesişiyorsa ya da kalan hak yetersizse işlem durdurulur.
2. **Amir Kararı ve Bakiye Yönetimi:** Onaylanan talebin günleri kalan haktan düşülür; zorunlu gerekçeli rette bakiye değişmez, onaylı iznin iptalinde ise günler iade edilir.
3. **HBYS/EBYS ve Yıl Sonu Devir:** İlk resmi evrak numarası kaydıyla izin Resmi Onaylı statüsüne geçer; yıl sonunda tamamlanan yılın devri ve EK-2 Şua hakedişi hesaplanarak kaynak yıl kilitlenir.

### Adım Adım İşlem Rehberi

#### 1. 2 Adımlı Sihirbaz ile Yeni İzin Talebi Oluşturma

1. **[İzin Yönetimi] > [İzin Listesi]** ekranında **[İzin Talep Et]** butonuna tıklayın.
2. **1. İzin Bilgileri** adımında personeli seçerek sağdaki **Personel Kalan Hak Özeti** kartından güncel yıllık ve Şua bakiyesini doğrulayın; izin türünü, süre tipini (**[Tam Gün]**, **[Yarım Gün]** veya **[Saatlik]**), tarih aralığını, varsa hafta sonu/resmi tatil kapsamını ve vekil personeli belirleyin.
3. **[İleri]** butonuna basarak **2. Belgeler** adımına geçin, gerekiyorsa **[Belge Ekle]** ile rapor/dilekçe yükleyin ve **[Kaydet]** butonuna tıklayın.

#### 2. İzin Taleplerini Onaylama, Gerekçeli Reddetme ve İptal Etme

1. İzin Listesinde bekleyen kayıtları süzün; satırı seçip **[Onayla]** butonuna basarak izni onaylayın ve bakiyeden düşümünü tamamlayın (uygun görmediğiniz taleplerde **[Reddet]** ile zorunlu gerekçe girin).
2. Onaylanmış ancak kullanılamayan bir izni geri almak için satırı seçip **[İptal Et]** butonuna tıklayın; düşülen günler bakiyeye iade edilir ve nöbet havuzu güncellenir.
3. Geçmiş izin veya hakediş hareketlerini topluca yüklemek için **[Araçlar]** menüsünden **[Toplu Import]** sihirbazını çalıştırın.

#### 3. Yıllık Hakediş, Şua Aylık İzleme ve Yıl Sonu Devir / Kilitleme

1. Araç çubuğundaki **[Kalan Hak / Hakediş]** butonunu açıp **[Yıllık Hakediş]** veya **[Şua Aylık Hakediş]** sekmesine geçin; yıl sonu yaklaşan hakları görmek için **[Zamanaşımı Yaklaşan Şua İzinleri]** filtresini kullanın.
2. Seçili yıl için toplu yıllık hak oluşturmak gerektiğinde **[Toplu Hesapla (Yıl)]** butonunu çalıştırın.
3. Önceki takvim yılı tamamlandıktan sonra **[Devir Aktar (Önceki Yıldan)]** butonuna tıklayarak kurum parametresi sınırında yıllık izin devrini yapın, 12 aylık fiili hizmetten EK-2 Şua hakedişini kesinleştirin ve kaynak yılı kilitleyin.

#### 4. Web Portalı Üzerinden İzin Talebi ve HBYS / EBYS Belge Eşleştirme

1. Saha personeli veya birim sorumlusu tarayıcı ya da mobilden **Web Portalı**'ndaki izin ekranını açarak kalan bakiyesini görüntüler ve yeni izin talebi oluşturur.
2. İzin onaylandıktan ve resmi evrak sayısı çıktıktan sonra ilgili izin satırından **HBYS / EBYS** belge numarası ile kayıt tarihini girip gönderir; ilk kayıtta izin doğrudan **Resmi Onaylı** statüsüne yükselir.

### Sıkça Sorulan Sorular (SSS)

- **İzin talebi kaydederken neden Nöbet Çakışması Uyarısı alıyorum?** RADPYS, vardiya düzeninin bozulmaması için izin ve nöbet çizelgesini birlikte denetler. Talep ettiğiniz tarihlerde yayınlanmış nöbet çizelgesinde aktif nöbetiniz varsa izin kaydı engellenir; önce nöbet devri veya ikame işlemi tamamlanmalıdır.
- **Geçmiş yıldan en fazla kaç gün yıllık izin devredilebilir?** Devir aktarımı yalnızca takvim yılı kapanmış geçmiş yıllar için çalıştırılabilir. 657 sayılı Kanun m. 103'te cari yıl ile önceki yıl izninin birleştirilmesi, 4857 sayılı İş Kanunu'nda ise kesintisiz devir esas alınır; RADPYS'deki varsayılan **5 gün** sınırı Sistem Ayarları üzerinden kurum statüsüne göre değiştirilebilen bir kurum parametresidir.
- **Yıl sonu devir ve Şua kesinleştirme sırasında eksik fiili hizmet ayı uyarısı alırsam ne yapmalıyım?** Kaynak yıla ait 12 aylık fiili hizmet (FHZ) puantajlarından henüz hesaplanmamış veya kilitlenmemiş aylar varsa Şua hakkı eksik doğabilir. Önce **[Fiili Hizmet Yönetimi]** ekranından eksik ayların hesaplama ve kilitleme işlemlerini tamamlayıp ardından devir işlemini çalıştırmanız önerilir.

---

## 07. Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi

RADPYS otomatik nöbet dağıtım motorunun uymak zorunda olduğu 4 kademeli kural piramidini, 35 saat ve 40 saat haftalık mesai standartlarını, birim vardiya slotlarını, esnek fazla mesai sınırlarını, 50 yaş / 25 yıl kıdem önceliğini ve bireysel yasal kısıt hiyerarşisini yönetmenizi sağlar.

> **Yasal Güvence:** Gebelik ve radyasyon doz aşımı gibi kanuni yasaklar mutlak ve delinemez sert kısıt olarak uygulanırken; 50 yaş ve 25 hizmet yılı gibi koruyucu kurum politikaları öncelikle gündüz vardiyası verir ve açık slot kaldığında servis sürekliliği için esnetilebilir.

### Modül 07 Özel Ayar ve Yönetim Kılavuzları

### Kısa Reçete: Nöbet Kural Altyapısı ve Dağıtım Motoru Kısıt Düzeni

**Kısa Reçete: Nöbet Kural Altyapısı ve Dağıtım Motoru Kısıt Düzeni**

**1. İstenen Sonuç:**
Nöbet çizelgelerinin mevzuata, çalışan sağlığına ve klinik hizmet ihtiyaçlarına uyumlu biçimde hatasız üretilmesi.
**2. Yapılacak İşlem:**
**[Temel Ayarlar]** sekmesinden genel dinlenme ve fazla mesai sınırlarını kaydedin; **[Birim Kuralları]** üzerinden vardiya slotlarını açıp gerekirse **[Birim Kuralını Kopyala]** ile aktarın; özel sağlık ve talep kayıtlarını ilgili sekmelerden onaylayın.
**3. Sistem Etkisi:**
Özel birim ve hizmet sınıfı kuralı genel ayarı ezer; gebelik ve dinlenme kuralları korunur; 60 saatlik koruyucu kota ve 50 yaş muafiyeti acil hizmet ihtiyacında yönetici inisiyatifiyle esnetilebilir.

- **Kural Piramidi:** 4 Kademeli Öncelik
- **Kurumsal Kota:** 60s / Yasal Tavan 130s
- **Dinlenme Standardı:** Min 24 Saat Dinlenme
- **Yönetim Kokpiti:** Masaüstü Özel Modül

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Nöbet kural sisteminin çekirdek karar piramidi ve sekmeler arası ortak yönetim prensipleri (tekil parametre detayları 07.1–07.5 alt sayfalarındadır).*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **4 Kademeli Kural Öncelik Piramidi** (Hiyerarşik Çözüm Sırası) | Çakışan kurallarda dağıtım motorunun hangi kuralı üstün tutacağını belirlemek. | Birim ve Hizmet Sınıfı ortak kuralı birinci, yalnızca Birim kuralı ikinci, Hizmet Sınıfı kuralı üçüncü ve Temel Ayarlar son sırada değerlendirilir; özel kural genel ayarı ezer. | Çizelge dağıtımında. | Dağıtım Motoru / Yönetici |
| **35s / 40s Haftalık Mesai Denklik Oranı** (Çalışma Rejimi Ayrımı) | Radyasyonlu alan (3153 SK) ile genel klinik alan (657 SK) hedeflerini adil dengelemek. | Radyasyon çalışanlarında haftalık 35 saat, genel personelde 40 saat standart kabul edilir ve karma çalışanlar oransal denklik katsayısıyla hesaplanır. | Plan ve mesai hesabında. | Sistem Yöneticisi |
| **Sert ve Yumuşak Kısıt Ayrımı** ([Yasal & Kurumsal Kısıtlar]) | Mutlak kanuni yasakları esnek adalet kurallarından ayırmak. | Sert (Yasal) sınıfındaki kısıtlar çözümsüzlük çıksa bile delinmez; Yumuşak (Kurumsal) kısıtlar ise adalet ceza puanı üzerinden dengelenir. | Kısıt tanımlandığında. | Başhekimlik / Yönetici |
| **50 Yaş ve 25 Hizmet Yılı Kalkanı** (Kıdemli Personel Önceliği) | Kıdemli personeli gece ve hafta sonu yükünden korurken birim işleyişini kilitlememek. | Dağıtım motoru öncelikle gündüz vardiyası verir; serviste açık slot kalırsa veya zorunlu saat dolmazsa gece nöbetine otomatik esnetir. | Vardiya dağıtımında. | Planlayıcı / Motor |
| **60s Kurumsal Kota ve 130s Yasal Tavan** (Fazla Mesai Koruma Sınırı) | Tükenmişliği sınırlandırmak ve 657 DMK Ek Madde 33 ödeme sınırını korumak. | Aylık koruyucu kota 60 saattir; zorunlu hallerde yönetici onayıyla 130 saatlik yasal ödeme tavanına kadar esnetilebilir. | Aylık planlamada. | Birim Amiri / Yönetici |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — 50 Yaşını veya 25 Hizmet Yılını Dolduran Personele Hiçbir Şekilde Gece Nöbeti Yazılamaz mı?**
> - **Yanlış Algı:** *"Personel 50 yaşını geçti veya 25 yıllık memur oldu; servis nöbeti kilitlense bile sistem gece nöbeti atayamaz."*
> - **Gerçek Sistem Mantığı:** **Mutlak bir kanuni yasak değil, koruyucu öncelik politikasıdır.** Gebelik veya radyasyon doz aşımı gibi kanuni engeller kesin olarak delinemezken, 50 yaş veya 25 yıl kıdem kriteri öncelikle gündüz vardiyası veren bir kurum politikasıdır. Serviste boş slot kalması veya personelin zorunlu çalışma süresini dolduramaması halinde motor bu kuralı otomatik esneterek gece nöbeti atayabilir.

### Süreç Akış Şeması

1. **Öncelik Piramidi:** Motor en dar kapsamlı kuraldan başlar (Birim + Sınıf > Birim > Hizmet Sınıfı > Temel Ayarlar); üst basamak alt basamağı ezer.
2. **Kısıtlar ve Esnetme:** Gebelik ve doz aşımı mutlak yasaktır; emzirme ve sendika indirimi hedeften düşülür; 50 yaş / 25 yıl kıdem ise yalnızca boş slot veya eksik saat kalırsa esnetilir.
3. **Fazla Mesai Tavanı:** Standart kurumsal kota 60 saattir; acil hizmet ihtiyacında yönetici onayıyla 657 DMK Ek Madde 33 kapsamındaki 130 saatlik yasal ödeme tavanına kadar çıkılabilir.

### Adım Adım İşlem Rehberi

#### 1. Genel Çalışma ve Muafiyet Standartlarını Kaydetme (07.1)

1. Sol menüden **[Nöbet Yönetimi] > [Nöbet Ayarları ve Kurallar]** ekranını açın ve **[Temel Ayarlar]** sekmesinde kalın.
2. Ardışık nöbet günü, nöbet sonrası dinlenme saati, haftalık mesai (35s / 40s), aylık fazla mesai tavanı ile yaş (50) / hizmet yılı (25) kriterlerini belirleyip **[Temel Ayarlari Kaydet]** butonuna basın.

#### 2. Departman Vardiya Slotlarını Açma ve Kopyalama (07.2)

1. **[Birim Kuralları]** sekmesinde departmanı seçin, başlangıç saati, süre ve nöbetçi sayısını tanımlayıp **[Birim Kuralı Ekle]** butonuna tıklayın.
2. Benzer vardiya yapısını başka bir birime aktarmak için **[Birim Kuralını Kopyala]** butonunu kullanın (hedef birimin eski slotları silinerek kaynak şablon sıfırdan yazılır).

#### 3. Hizmet Sınıfı Kuralları, Özel Sağlık Kısıtları ve Talepleri Yönetme (07.3 – 07.5)

1. Meslek grubu veya birim bazlı istisnalar için **[Yasal & Kurumsal Kısıtlar]** sekmesinden **Sert** ya da **Yumusak** sınıfında yeni kural ekleyin.
2. Gebelik, emzirme, sendika ve sağlık raporu kayıtlarını **[Personel Özel Kısıtları]** sekmesinden **[Kısıt Ekle]** ile tanımlayın; personelden gelen mazeret ve ders programı isteklerini ise **[Personel Talepleri]** sekmesinden **[Onayla]** veya **[Reddet]** ile sonuçlandırın.

### Sıkça Sorulan Sorular (SSS)

- **Birim kuralı ile genel temel ayarlar çakışırsa hangisi uygulanır?** RADPYS Kural Piramidi gereğince **en özel kural daima önceliklidir**. Birime ve hizmet sınıfına özel tanımlanan kural, genel temel ayarları ezer; örneğin genel ayarlarda ardışık limit 2 gün iken Acil Radyoloji için 1 gün tanımlanmışsa Acil birimine 1 gün uygulanır.
- **Aylık fazla mesai sınırı 60 saati geçerse planlama durur mu?** Kurumsal koruyucu kota 60 saattir; ancak olağanüstü personel eksikliğinde yönetici onayıyla esnetilebilir. 657 sayılı Devlet Memurları Kanunu Ek Madde 33 kapsamındaki aylık nöbet ücreti ödeme tavanı ise **130 saattir** ve fazlası sonraki döneme devreder.
- **Birim kuralını kopyalarken hedef birimdeki mevcut slotlar korunur mu?** Hayır. Mükerrer vardiya tanımını ve saat çakışmasını önlemek için **[Birim Kuralını Kopyala]** işlemi hedef birimin mevcut tüm slotlarını temizler ve kaynak birimin slotlarını sıfırdan oluşturur.
- **Nöbet sonrasında en az kaç saat dinlenme uygulanır?** Varsayılan asgari dinlenme süresi iki nöbet arasında **24 saattir**. Gece nöbetleri arasında personelin toparlanması için ayrıca tanımlanan asgari gece boşluğu kuralı işletilir.

---

## 07.1. Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları

Hastane genelinde geçerli temel çalışma limitlerini, ardışık nöbet ve dinlenme sürelerini, 35 saat / 40 saat haftalık mesai standartlarını, kıdemli personel muafiyet seçeneklerini ve devir/geri alma emniyet kilitlerini yönetmenizi sağlar.

> **Parametre Notu:** Bu sekmedeki değerler Kural Piramidinin en altındaki genel kurum standardıdır; birim veya hizmet sınıfına özel bir kural tanımlandığında daha özel kural bu sekmedeki değeri ezer.

### Kısa Reçete: Temel Nöbet Parametrelerini Yapılandırma

**Kısa Reçete: Temel Nöbet Parametrelerini Yapılandırma**

**1. İstenen Sonuç:**
Personelin aşırı yorulmasını önleyen, yasal çalışma rejimine uyumlu ve adalet öncelikleri belirlenmiş genel nöbet standardı.
**2. Yapılacak İşlem:**
**[Temel Ayarlar]** sekmesinde ardışık gün, dinlenme saati, haftalık 35s/40s mesai, fazla mesai kotası ve muafiyet kriterlerini belirleyip **[Temel Ayarlari Kaydet]** butonuna basın.
**3. Sistem Etkisi:**
Dağıtım motoru özel bir istisna olmadıkça bu sınırları varsayılan kısıt olarak uygular; haftalık 40s ve 35s oranı otomatik güncellenerek karma mesai denkliği korunur.

- **Dinlenme Aralığı:** Min 24 Saat
- **Kurumsal Kota:** 60s (Yasal Tavan 130s)
- **Haftalık Rejim:** 35s Radyasyon / 40s Genel
- **Kıdem Kalkanı:** 50 Yaş / 25 Yıl

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Temel Ayarlar sekmesindeki klinik sınırların ve emniyet anahtarlarının çalışma mantığı (kayıt adımları aşağıdadır).*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Hafta Sonu, Bayram ve Ardışık Nöbet Tavanları** (Aylık ve Günlük Sınırlar) | Bir personelin ay içinde üst üste veya yoğun tatil günlerinde yıpranmasını önlemek. | Ayda azami hafta sonu (varsayılan 4), bayram (varsayılan 2) ve ardışık nöbet sınırı (varsayılan 2 gün) dağıtım motoru için sert eşik olarak değerlendirilir. | Plan dağıtımında. | Sistem Yöneticisi |
| **Bayram ve Gece Adalet Önceliği** (Onemsiz – Cok Onemli) | Geçmiş dönemlerde bayram ve gece nöbeti tutan personeli sonraki aylarda korumak. | Seçilen önem derecesi (*Onemsiz*, *Normal*, *Onemli*, *Cok Onemli*) dağıtım motorunun adalet ceza ağırlığını artırır veya azaltır. | Otomatik dağıtımda. | Birim Sorumlusu |
| **Yaş ve Kıdem Muafiyeti Kapsam Kutuları** (Gece & Hafta Sonu Kapsamı) | 50 yaş veya 25 yıl kıdemli personelin hangi vardiya türlerinden öncelikle korunacağını seçmek. | **[Yaş/Kıdem Muafiyeti Gece Nöbetini Kapsasın]** ve **[Yaş/Kıdem Muafiyeti Hafta Sonu Nöbetini Kapsasın]** kutularına göre öncelikli muafiyet alanı belirlenir. | Planlama sırasında. | Yönetici |
| **[Devredilen nöbet değiştirilemez kısıtı]** (Devir Kilidi) | Personeller arası devir veya takasla kesinleşmiş nöbetlerin yeniden dağıtılmasını engellemek. | İşaretlendiğinde daha önce devredilmiş nöbet slotları kilitli kabul edilir ve otomatik düzenlemelerde değiştirilmez. | Çizelge güncellenirken. | Sistem Yöneticisi |
| **Çapraz Atama & Devir Nedeni Kilidi** (Operasyon Güvenliği) | Departmanlar arası geçici atamayı yönetmek ve devir taleplerinde yazılı gerekçe toplamak. | **[Departmanlar arasi gecici atama acik]** çapraz görevlendirmeye izin verir; **[Devir nedeni zorunlu]** ise gerekçesiz devir talebini engeller. | Geçici atama ve devirde. | Sistem Yöneticisi |
| **[Yayindan taslaga donus (Admin onayıi)]** (Geri Alma Emniyeti) | İlan edilmiş nöbet çizelgesinin kontrolsüzce taslağa çekilmesini önlemek. | Yalnızca onay kutusu açıkken ve yönetici şifresi doğrulandığında yayınlanmış planlar taslağa geri döndürülebilir. | Plan geri çekilirken. | Sistem Yöneticisi |

### Adım Adım İşlem Rehberi

#### 1. Temel Çalışma ve Muafiyet Standartlarını Kaydetme

1. Sol menüden **[Nöbet Yönetimi] > [Nöbet Ayarları ve Kurallar]** ekranını açın ve ilk sekme olan **[Temel Ayarlar]** bölümüne girin.
2. **Temel Parametreler** alanında ardışık nöbet sınırını, nöbet sonrası minimum dinlenme süresini (24 saat), haftalık mesai standartlarını (35 saat / 40 saat), aylık fazla mesai kotasını (60 saat) ve adalet önceliklerini belirleyin.
3. Gerekli ise **[Gelismis Secenekleri Goster]** butonuna tıklayarak hafta içi önceliği (**[Önce hafta içi/normal günleri doldur (Hafta sonları en son planlanır)]**) ve devir/geri alma emniyet seçeneklerini düzenleyin.
4. **Muafiyet Kriterleri** bölümünde yaş sınırını (50), hizmet yılını (25) ve korumanın kapsayacağı nöbet türlerini işaretleyin.
5. Sağ alttaki **[Temel Ayarlari Kaydet]** butonuna basarak onaylayın.

### Sıkça Sorulan Sorular (SSS)

- **60 saatlik fazla mesai sınırı acil personel eksikliğinde aşılabilir mi?** Evet. 60 saat çalışan sağlığını korumaya yönelik kurumsal kotadır; olağanüstü servis ihtiyacında yönetici onayıyla esnetilebilir. Ancak 657 sayılı Kanun Ek Madde 33 kapsamındaki aylık nöbet ücreti ödeme tavanı **130 saattir**.
- **50 yaşını geçen personele neden bazen gece nöbeti atanabiliyor?** 50 yaş ve 25 hizmet yılı kriterleri mutlak kanuni yasak değil, koruyucu kurum önceliğidir. Motor önce gündüz vardiyası atar; ancak serviste boş slot kalırsa veya personelin aylık çalışma saati eksik kalırsa bu kriteri otomatik esneterek gece nöbeti yazabilir.
- **Haftalık 35 saat ve 40 saat standartları değiştiğinde eski oranı elle güncellemem gerekir mi?** Hayır. Normal ve radyasyon haftalık çalışma saatleri değiştirilip kaydedildiğinde aradaki denklik oranı sistem tarafından otomatik yeniden hesaplanır.

---

## 07.2. Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama

Her kliniğin günlük, hafta içi ve hafta sonu/tatil vardiya slotlarını, aynı anda görev yapacak nöbetçi sayılarını, otomatik bitiş saati hesabını, 24 saat veya çapraz görev uygunluğunu ve birimler arası şablon aktarımını yönetmenizi sağlar.

> **Önemli Uyarı:** [Birim Kuralını Kopyala] işlemi hedef birimin şablonunu kaynak birimle eşitlerken geçmiş nöbet kaydı bulunan eski slotları silmez, geçmiş çizelge bütünlüğü için pasife alır; kopyalama öncesi hedef birimi mutlaka doğrulayın.

### Kısa Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma

**Kısa Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma**

**1. İstenen Sonuç:**
Klinik birimlerin gece, gündüz ve hafta sonu ihtiyaç duyduğu nöbetçi pozisyonlarının eksiksiz tanımlanması.
**2. Yapılacak İşlem:**
İlgili birimi seçip vardiya adı, kodu, başlangıç saati, süresi ve nöbetçi sayısını girerek **[Birim Kuralı Ekle]** butonuna basın; benzer birimler için **[Birim Kuralını Kopyala]** ile şablonu aktarın.
**3. Sistem Etkisi:**
Bitiş saati gece yarısı devri dahil otomatik hesaplanır; dağıtım motoru bu aktif slotları günlük kontenjan ve gün kısıtına göre doldurur.

- **Departman Bazlı:** Özel Slot Havuzu
- **Akıllı Saat:** Başlangıç + Süre
- **Gün Kapsamı:** Hafta İçi / Tatil / Her Gün
- **Şablon Aktarımı:** Kural Kopyalama

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Birim Kuralları sekmesindeki vardiya hesaplama, kapsama ve aktarım mekanizmaları (buton adımları aşağıdadır).*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Akıllı Saat Hesaplayıcı** (Başlangıç + Süre = Otomatik Bitiş) | Gece yarısını geçen vardiyalarda hatalı bitiş saati girilmesini önlemek. | Başlangıç saati ile süre toplandığında gece yarısı devri dahil 24 saatlik döngü üzerinden salt-okunur bitiş saati otomatik üretilir. | Slot saati veya süre değiştiğinde. | Birim Sorumlusu |
| **Nöbetçi Sayısı ve Hizmet Tipi Kapsamı** (Kontenjan ve Meslek Grubu) | Slotta aynı anda kaç kişinin ve hangi meslek grubunun nöbet tutacağını belirlemek. | Nöbetçi sayısı günlük zorunlu kişi adedini belirler; hizmet tipi boş bırakılırsa birimdeki tüm gruplara, seçilirse yalnızca ilgili gruba atanır. | Slot tanımlanırken. | Birim Sorumlusu / Başhekimlik |
| **Gün Kapsamı, Tatil ve 24 Saat Seçenekleri** ([24 Saat Tutulabilir] & Tatil Kutuları) | Vardiya türünün hangi günlerde açılacağını ve 24 saat birleştirme uygunluğunu yönetmek. | *Her Gün*, *Sadece Hafta İçi* veya *Sadece Hafta Sonu ve Tatil* seçilir; **[Hafta sonlarında nöbet yazılsın]**, **[Resmi ve dini bayramlarda nöbet yazılsın]** ve **[24 Saat Tutulabilir]** işaretleriyle kapsam kesinleşir. | Slot oluşturulurken. | Birim Amiri |
| **[Capraz Gorevlendirme] Anahtarı** (Seyyar Slot Uygunluğu) | Birim içi kadro yetersizliğinde diğer birimlerden takviye alabilecek slotları işaretlemek. | İşaretlenen slotlar çizelge ekranındaki çapraz birim tamamlama motoru tarafından hedef slot olarak algılanır. | Çapraz destek açılırken. | Birim Sorumlusu |
| **[Birim Kuralını Kopyala]** (Birimler Arası Şablon Aktarımı) | Benzer çalışma düzenine sahip servislere aynı vardiya slotlarını geçmiş veriyi bozmadan kurmak. | Kaynak birimin slotlarını ve birim kurallarını hedef birime aktarır; hedef birimde geçmiş nöbet kaydı bulunan eski slotları fiziksel silmek yerine pasife alır, eşleşen kodları günceller. | Yeni birim yapılandırılırken. | Sistem Yöneticisi / Amir |
| **Birim Mesai Kuralları Miras ve Sınır Kalkanı** (Bağımsız Slot Kaydı & Yasal Sınırlar) | Slot eklerken birim veya kurum çalışma standartlarının yanlışlıkla değişmesini ve mevzuat dışı değer girilmesini önlemek. | **[Birim Kuralı Ekle]** ve **[Birim Kuralı Güncelle]** yalnızca vardiya slotunu kaydeder; boş bırakılan birim alanları Temel Ayarlar'dan miras alınır ve dinlenme/fazla mesai değerleri yasal alt-üst sınırlarla doğrulanır. | Slot veya birim kuralı kaydedilirken. | Birim Sorumlusu / Sistem Kilidi |

### Adım Adım İşlem Rehberi

#### 1. Yeni Birim Nöbet Slotu Oluşturma ve Güncelleme

1. **[Birim Kuralları]** sekmesinde filtre veya birim alanından ilgili servisi seçin; yeni bir kayıt için **[Yeni Birim Kuralı]** butonuna tıklayın.
2. **Vardiya Tanımlama** bölümünde Nöbet Adı, Nöbet Kodu, Başlangıç Saati, Süre (örneğin 20:00 ve 12 saat; bitiş otomatik 08:00 olur), Nöbetçi Sayısı ve geçerli gün kapsamını belirleyin; gerekirse **[Aktif]**, **[24 Saat Tutulabilir]** ve **[Capraz Gorevlendirme]** kutularını işaretleyin.
3. Slotu kaydetmek için **[Birim Kuralı Ekle]** butonuna basın; mevcut bir satırı değiştirirken **[Birim Kuralı Güncelle]**, kullanılmayan bir slotu kaldırmak için **[Birim Kuralını Sil]** butonunu kullanın.

#### 2. Birim Kuralını Başka Bir Birime Kopyalama

1. Araç çubuğundaki **[Birim Kuralını Kopyala]** butonuna tıklayın.
2. Kaynak birim ile hedef birimi seçin, hedef birimin mevcut slotlarının silineceğini bildiren onay mesajını teyit ederek aktarımı tamamlayın.

### Sıkça Sorulan Sorular (SSS)

- **Bitiş saatini neden doğrudan değiştiremiyorum?** Vardiya süreleri ile bitiş saati arasındaki tutarsızlığı önlemek için bitiş saati başlangıç ve süre üzerinden otomatik hesaplanır. Bitiş saatini değiştirmek için süreyi veya başlangıç saatini güncellemeniz yeterlidir.
- **Kural kopyalarken hedef birimdeki eski slotlar neden siliniyor?** Aynı birimde mükerrer vardiya kodu ve saat çakışması oluşmasını engellemek için kopyalama işlemi hedef birimin şablonunu kaynak birimle birebir eşitler. Mevcut slotları korumak istiyorsanız yeni slotları kopyalamak yerine **[Birim Kuralı Ekle]** ile tek tek eklemelisiniz.
- **Birden fazla personelin aynı nöbete yazılması nasıl sağlanır?** İlgili vardiya tanımında **Nöbetçi Sayısı** değerini gereken kişi adedine çıkarıp **[Birim Kuralı Güncelle]** butonuna basmanız yeterlidir.

---

## 07.3. Yasal & Kurumsal Kısıtlar, Hizmet Sınıfı Kuralları ve Adalet Ağırlıkları

Kural piramidinin üst kademelerini oluşturan hizmet sınıfı (Tabip, Radyoloji Teknisyeni vb.) ve birim bazlı kısıtları, Sert (Yasal) ile Yumusak (Kurumsal) ayrımını ve nöbet dağıtım adalet sınırlarını yönetmenizi sağlar.

> **Kural Sırası:** Bu sekmede hem Birim hem Hizmet Sınıfı birlikte seçildiğinde oluşturulan kural piramidin en tepesinde yer alır ve genel temel ayarları otomatik ezer.

### Kısa Reçete: Hizmet Sınıfı ve Birim Bazlı Kısıt Tanımlama

**Kısa Reçete: Hizmet Sınıfı ve Birim Bazlı Kısıt Tanımlama**

**1. İstenen Sonuç:**
Farklı meslek gruplarının ve klinik birimlerin çalışma sınırlarının ayrıştırılması ve dağıtım motorunun sert/esnek kısıt dengesiyle çalıştırılması.
**2. Yapılacak İşlem:**
**[Yasal & Kurumsal Kısıtlar]** sekmesinde Kural Tipini, **Sert** veya **Yumusak** sınıfını, Hizmet Sınıfını, Birimi ve sayısal sınırı seçerek **[Kısıt Ekle]** butonuna basın.
**3. Sistem Etkisi:**
Eklenen kural piramit önceliğine göre genel ayarın yerine geçer; Sert kurallar kesinlikle çiğnenmez, Yumusak kurallar ceza katsayısıyla adil biçimde dengelenir.

- **Kural Sınıfı:** Sert & Yumusak
- **Kapsam:** Birim + Hizmet Sınıfı
- **Kural Çeşidi:** 13 Standart Parametre
- **Öncelik Etkisi:** Genel Ayarı Ezer

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Yasal ve Kurumsal Kısıtlar sekmesindeki kural tipleri, sertlik derecesi ve kapsam filtrelerinin çalışma mantığı.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Kural Tipi Seçimi (13 Parametre)** (Standart Kural Havuzu) | Kuralın hangi dinlenme, mesai veya adalet ölçütünü denetleyeceğini belirlemek. | Ardışık nöbet günü, nöbet sonrası dinlenme, hafta sonu/bayram dengesi, gece boşluğu, haftalık 35s/40s mesai, emzirme, gebelik, sendika ve 130s yasal FM tavanından biri seçilir. | Kural oluşturulurken. | Nöbet Yöneticisi |
| **Kural Sınıfı (Sert / Yumusak)** (Delinemez vs Esnek Kısıt) | Yasal zorunlulukları esnetilebilir kurumsal tercihlerden ayırmak. | *Sert* sınıfı motor için mutlak engel oluşturur; *Yumusak* sınıfı ise çözümsüzlük riskinde ceza puanı karşılığı esnetilebilir. | Kural eklenirken. | Başhekimlik / Yönetici |
| **Hizmet Sınıfı Kapsamı** ([Tum Hizmet Siniflari] veya Özel Grup) | Tabip, Radyoloji Teknisyeni gibi meslek gruplarına farklı limitler uygulamak. | Seçilen meslek grubuna özel değer uygulanır; *Tum Hizmet Siniflari* seçiliyse ayrım yapılmaksızın kapsamdaki herkese geçerlidir. | Meslek grubu ayrımında. | Birim Sorumlusu |
| **Birim Kapsamı** ([Tum Birimler] veya Klinik) | Kuralı yalnızca belirli bir servise özgüleyip piramit önceliğini yükseltmek. | Hem Birim hem Hizmet Sınıfı seçildiğinde Piramit Öncelik 1 oluşur ve alt kademedeki tüm genel kuralları geçersiz kılar. | Birim kuralı tanımlanırken. | Departman Sorumlusu |
| **Sayısal Değer & [Aktif] Anahtarı** (Dinamik Eşik Kontrolü) | Kuralı silmeden geçici olarak devreye almak veya sınırını revize etmek. | Girilen nöbet adedi veya saat sınırı yalnızca **[Aktif]** kutusu işaretliyken dağıtım motoru ve uyarılarda dikkate alınır. | Kural güncellenirken. | Yetkili Yönetici |

### Adım Adım İşlem Rehberi

#### 1. Hizmet Sınıfı veya Birime Özel Kural Ekleme ve Güncelleme

1. Sol menüden **[Nöbet Yönetimi] > [Nöbet Ayarları ve Kurallar]** ekranına girip **[Yasal & Kurumsal Kısıtlar]** sekmesini açın ve **[Yeni Kisit]** butonuna tıklayın.
2. **Kisit Duzenleyici** panelinde Kural Adını yazın; Kural Tipini (örneğin *Hafta Sonu Nöbet Dengesi / Limiti*), Kural Sınıfını (**Sert** veya **Yumusak**), Hizmet Sınıfını (örneğin *Radyoloji Teknisyeni*), varsa Birimi ve sayısal Değeri girin.
3. **[Aktif]** kutusunun işaretli olduğunu doğrulayıp **[Kısıt Ekle]** butonuna basın.
4. Mevcut bir kuralın sınırını değiştirmek için tablodan satırı seçip **[Kısıtı Güncelle]**, yürürlükten kaldırmak için **[Kisiti Sil]** butonunu kullanın.

### Sıkça Sorulan Sorular (SSS)

- **Hizmet sınıfı kuralı genel temel ayardan farklı olursa sistem hangisini uygular?** Kural Piramidi uyarınca Birim + Hizmet Sınıfı ve tek başına Hizmet Sınıfı kuralları Genel Temel Ayarlardan daha yüksek önceliklidir. Bu nedenle ilgili gruptaki personele bu sekmedeki özel sınır uygulanır.
- **"Sert" ve "Yumusak" kural sınıfları arasındaki fark nedir?** **Sert** kurallar çözümsüzlük çıksa bile dağıtım motoru tarafından çiğnenemeyen katı kurallardır. **Yumusak** kurallar ise adalet dengesini hedefler; zorunlu personel yetersizliği halinde motor ceza puanını göze alarak bu sınırı asgari düzeyde esnetebilir.
- **Mevcut bir kuralı silmeden geçici olarak nasıl devre dışı bırakabilirim?** Tablodan ilgili kuralı seçip **[Aktif]** kutusundaki işareti kaldırarak **[Kısıtı Güncelle]** butonuna basmanız yeterlidir; kural tanımı korunur ancak planlamada uygulanmaz.

---

## 07.4. Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri

Gebe personelin 5 fazlı radyasyon koruma döngüsünü, yasal süt/emzirme saat indirimlerini, sendika yöneticisi mesai azaltımlarını, sağlık kurulu/analık raporlarını, doz aşımı korumalarını ve bireysel fazla mesai engellerini yönetmenizi sağlar.

> **Yasal Koruma:** Gebelik, analık, emzirme, sağlık kurulu raporu ve NDK doz aşımı korumaları 657 DMK, 4857 İş Kanunu, 3153 SK ve 32162 sayılı Yönetmelik uyarınca mutlak kanuni sınırlardır.

### Kısa Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama

**Kısa Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama**

**1. İstenen Sonuç:**
Yasal koruma altındaki çalışanın gece nöbetinden, radyasyon riskinden veya fazla mesaiden otomatik ve mevzuata tam uyumlu biçimde korunması.
**2. Yapılacak İşlem:**
**[Personel Özel Kısıtları]** sekmesinde personeli ve kısıt türünü (örneğin *Gebelik / Hamilelik Muafiyeti* veya *Yasal Emzirme İzni*) seçin; tarih aralığı ile saat azaltımını doğrulayıp **[Kısıt Ekle]** butonuna basın.
**3. Sistem Etkisi:**
Gebelik ve doz aşımında gece nöbeti ile fazla mesai sıfırlanır; emzirme ve sendika izinlerinde mesai hedefi otomatik düşülür; doğum sonrası kesin tarih değiştiğinde tek tıkla 5 faz güncellenir.

- **Gebelik Kilidi:** Gece/FM Yasak (Fetüs ≤ 1 mSv)
- **Süt İzni:** İlk 6 Ay: 3s / Sonra: 1.5s
- **Sendika İzni:** Memur: 4s/hf / İşçi: 2s/hf
- **FM Engeli:** Fazla Mesai İstemiyorum

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Personel Özel Kısıtları sekmesindeki 9 yasal kısıt türü, saat azaltım rejimi ve gebelik yaşam döngüsü kontrolleri.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **9 Yasal Kısıt Türü** (Kısıt Seçim Listesi) | Mevzuattaki farklı koruma ve muafiyet hallerini ayrı kurallarla işletmek. | Yasal Emzirme İzni, Gebelik/Hamilelik, Analık İzni, Engelli, Ağır Engelli Yakını, Sağlık Kurulu Raporu, Doz Sınırı Aşımı, Sendika Temsilciliği ve Diğer seçeneklerini sunar. | Rapor veya bildirim geldiğinde. | İK / Nöbet Sorumlusu |
| **Saat Azaltım & Azaltım Türü** (Günlük / Haftalık / Aylık) | Yasal izinlerin çalışanın zorunlu mesai hedefinden doğru düşülmesini sağlamak. | Emzirme türünde ilk 6 ay günlük 3 saat, ikinci 6 ay 1.5 saat otomatik önerilir; sendikada haftalık saat (memur 4s, işçi 2s), raporlarda ise iş günü düşülür. | Kısıt türü seçildiğinde. | İK Uzmanı / Sorumlu |
| **[Fazla Mesai İstemiyorum] & Max FM** (Kişisel Mesai Tavanı) | Korunan personellerin aylık fazla mesaisini otomatik sıfıra veya özel sınıra çekmek. | Gebelik, emzirme, analık, engelli/yakını ve doz aşımında fazla mesai otomatik sıfıra kilitlenir; kutu işaretlenerek isteğe bağlı kısıtta da mesai kapatılır. | Kısıt aktifleştiğinde. | Birim Amiri |
| **[Tarih Sınırı Uygula] & Gerekçe** (Geçerlilik Aralığı & Birim Kapsamı) | Rapor süresi dolduğunda kısıtı otomatik hükümsüz kılıp resmi dayanağı ve KVKK kapsamını korumak. | Başlangıç–bitiş tarihleri dışında kısıt pasif sayılır; yöneticiler yalnızca yetkili oldukları birim personeline işlem yapabilir ve tüm kısıt hareketleri denetim izine mühürlenir. | Kayıt oluşturulurken veya güncellenirken. | Yetkili Birim Sorumlusu / İK |
| **[Doğum Tarihi Güncelle], [Gebelik Sonlandı] & Bağımsız Emzirme** (5 Fazlı Döngü & Pasifleştirme Koruması) | Doğum tarihine göre tüm fazları tutarlı yürütmek, çakışan nöbetleri iptal etmek ve sağlık geçmişini silmeden saklamak. | Bağımsız emzirme kaydı dahil doğum tarihi esas alınarak 2 yaş gece muafiyeti sınırı kurulur ve yayındaki gece/radyasyon nöbetleri iptal edilip birim amirine bildirilir; silme ve erken sonlandırmada gelecek fazlar fiziksel silinmez, gerekçesiyle pasife alınır. | Gebelik/emzirme kaydında, doğumda veya sonlanmada. | İK / Yönetici |

### Adım Adım İşlem Rehberi

#### 1. Süt İzni, Sendika veya Gebelik Kısıtı Kaydetme

1. **[Personel Özel Kısıtları]** sekmesine geçin ve yeni kayıt için **[Yeni Kayıt]** butonuna basın.
2. **Kayıt Duzenleyici** panelinde Departman/Personel seçimini yapın ve Kısıt Tipinden ilgili kategoriyi (örneğin *Yasal Emzirme İzni* veya *Gebelik / Hamilelik Muafiyeti*) seçin.
3. Sistemin otomatik önerdiği Saat Azaltımı (ilk 6 ay 3 saat, ikinci 6 ay 1.5 saat) ile **[Fazla Mesai İstemiyorum]** ve **[Tarih Sınırı Uygula]** aralıklarını doğrulayın; resmi rapor referansını gerekçeye yazıp **[Kısıt Ekle]** butonuna tıklayın.

#### 2. Gebelik Zincirinde Doğum Tarihi Güncelleme veya Sonlandırma

1. Tablodan gebelik yaşam döngüsüne bağlı personel satırını seçin.
2. Bebek beklenenden farklı tarihte doğduysa **[Doğum Tarihi Güncelle]** butonuna tıklayıp kesin tarihi girin (tüm doğum sonrası analık ve emzirme fazları otomatik kaydırılır); gebelik tıbbi zorunlulukla erken sonlandıysa **[Gebelik Sonlandı]** butonunu kullanın.
3. Tarih veya süre revizyonu için **[Kısıtı Güncelle]**, hatalı kaydı kaldırmak için **[Kaydi Sil]** butonunu kullanın.

### Sıkça Sorulan Sorular (SSS)

- **Gebe personele acil durumda dahi gece nöbeti veya denetimli alan görevi yazılabilir mi?** **Kesinlikle hayır.** Gebelik kısıtı esnetilebilir bir tercih değil, 657 DMK m. 101, 4857 İş Kanunu m. 74 ve 32162 sayılı Yönetmelik uyarınca mutlak kanuni yasaktır. Motor gece nöbetini, denetimli radyasyon alanını ve fazla mesaiyi kapatır; kalan gebelik süresince fetüs eşdeğer doz sınırı **1 mSv** olarak izlenir.
- **Doğum sonrası emzirme (süt izni) ve sendika indirimi hesapları nasıldır?** Yasal emzirme izninde ilk 6 ay günde **3 saat**, ikinci 6 ay günde **1,5 saat** azaltım uygulanır ve emzirme süresince radyoaktif kontaminasyon riskli açık kaynak işlerine atanmaz. Sendika yöneticisi muafiyetinde ise 657'li memurlarda haftalık **4 saat**, 4857'li işçilerde haftalık **2 saat** indirim hedeften düşülür.
- **Bitiş tarihi geçmiş bir sağlık kısıtı personelin gelecek planlarını etkilemeye devam eder mi?** Hayır. **[Tarih Sınırı Uygula]** kutusu aktifse belirtilen bitiş tarihinden sonraki aylarda dağıtım motoru kısıtı dikkate almaz ve personel standart nöbet düzenine otomatik döner.

---

## 07.5. Personel Talepleri, Mazeretler & Onay Yönetimi

Planlanacak aya yönelik nöbet istememe (mazeret), nöbet isteme, hafta içi lisansüstü eğitim ders programı ve isteğe bağlı fazla mesai taleplerinin kaydedilmesini, ders programı revizyonunu ve birim amiri onay/red akışını yönetmenizi sağlar.

> **Yayın Kalkanı:** Çizelgesi resmen Yayınlandı statüsüne geçmiş bir aya yeni talep veya mazeret eklenemez; kesinleşen aydaki zorunlu değişiklikler Modül 09 (Nöbet Devir ve Acil Mazeret) üzerinden yürütülür.

### Kısa Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı

**Kısa Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı**

**1. İstenen Sonuç:**
Personelin haklı mazeret ve ders programlarının klinik adalet bozulmadan dağıtım motoruna eksiksiz iletilmesi.
**2. Yapılacak İşlem:**
**[Personel Talepleri]** sekmesinde yıl, ay ve birimi süzüp **[Filtrele]** butonuna basın; talebi inceleyip uygun olanları **[Onayla]**, sakıncalı olanları **[Reddet]** ile sonuçlandırın.
**3. Sistem Etkisi:**
Yalnızca onaylı talepler dağıtım motoru kısıt havuzuna girer; aynı güne birden fazla talep çakışırsa en koruyucu kural öncelik sırasıyla işletilir.

- **Talep Türü:** Mazeret, İstek, Ders, FM
- **Öncelik Sırası:** Muafiyet > Ders > Mazeret > İstek
- **Onay Yetkisi:** Birim Sorumlusu / Amir
- **Yayın Koruması:** Yayındaki Aya Talep Kapalı

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Personel Talepleri sekmesindeki koruma kilitleri, talep öncelik sıralaması ve ders revizyon mekanizmaları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Yayınlanmış Ay Güvenlik Kilidi** (Plan Bütünlük Koruması) | İlan edilmiş nöbet çizelgesinin sonradan açılan, değiştirilen veya silinen taleplerle bozulmasını engellemek. | İlgili dönemin nöbet planı yayınlanmış veya arşivlenmiş durumdaysa yeni talep ekleme, **[İsteği Güncelle]**, **[İsteği Sil]** ve **[Ders Programını Revize Et]** işlemleri kilitlenir; değişiklik için devir/mazeret akışı kullanılır. | Talep ekleme, güncelleme, revizyon veya silmede. | Sistem Kilidi |
| **4 Talep Türü ve Sertlik Önceliği** (Çakışma Çözüm Sırası) | Aynı personelin aynı güne birden fazla talebi denk geldiğinde belirsizliği gidermek. | *Mazeret* (sert), *İstek* (yumuşak), *Eğitim Kısıtı* ve *Fazla Mesai* sunulur; çakışmada sıra Muafiyet > Eğitim > Nöbet Yazılmasın > Nöbet Yazılsın şeklindedir. | Dağıtım motoru çalışırken. | Planlayıcı / Motor |
| **Hafta İçi Ders Seçimi & [Ders Programını Revize Et]** (Dönem İçi Güncelleme) | Lisansüstü dersi olan personelin sadece hafta içi ders günlerini korumak ve dönem içi değişikliği izlemek. | Eğitim türünde yalnızca *Pazartesi–Cuma* günleri aktifleşir; taslak dönemde gün değişirse eski talep dondurulup revizyon tarihinden yeni kısıt açılır. | Eğitim talebinde ve revizyonda. | Personel / Birim Amiri |
| **Vardiya Slotu Hedefleme** (Tüm Slotlar vs Tekil Vardiya) | Personelin tüm gün yerine yalnızca belirli bir vardiyadan (örneğin Gece) muaf kalmasını sağlamak. | Tekil vardiya seçilirse yalnızca o slotta kısıt uygulanır; tüm slotlar seçilirse personel o gün hiçbir nöbete atanmaz. | Mazeret/istek tanımlanırken. | Talep Eden / Amir |
| **[Onayla] & [Reddet] Karar ve Yeniden Onay Kilidi** (Amir Onay Süzgeci & Birim Kapsamı) | Onaysız veya sonradan saati/tarihi değiştirilen taleplerin çizelgeyi kendiliğinden etkilemesini önlemek. | Onay yetkisi olmayan kullanıcıların açtığı veya tarih/saat/tür değiştirdiği talepler otomatik olarak *Beklemede* durumuna düşer; yalnızca yetkili birim kapsamındaki amirin **[Onayla]** verdiği kayıtlar motor kısıtı olur. | Yeni kayıtta, içerik değişiminde ve incelemede. | Birim Sorumlusu / Yönetici |

### Adım Adım İşlem Rehberi

#### 1. Yeni Talep Ekleme veya Personelin Taleplerini Süzme

1. **[Personel Talepleri]** sekmesinde Dönem Yılı, Ay ve Departman seçip **[Filtrele]** butonuna tıklayın.
2. Yönetici olarak doğrudan talep tanımlamak için **[Yeni İstek]** butonuna basın; Personel, Talep Türü, Tarih Aralığı (ve eğitim ise **[Pazartesi]–[Cuma]** günleri), varsa ilgili vardiya ve gerekçeyi doldurup **[İstek Ekle]** butonuna tıklayın (düzeltmelerde **[İsteği Güncelle]**, kaldırmada **[İsteği Sil]** kullanılır).

#### 2. Talep Onaylama, Reddetme ve Eğitim Programı Revizyonu

1. Tablodan incelenecek talebe tıklayın ve aynı gündeki klinik personel yoğunluğunu değerlendirin.
2. Uygun mazereti **[Onayla]** ile kısıt havuzuna aktarın; hizmet aksaması yaratacak talebi **[Reddet]** butonuna basarak onaylayın.
3. Mevcut bir eğitim kısıtının ders günleri dönem ortasında değiştiyse satırı seçip **[Ders Programını Revize Et]** butonuna basın; revizyon başlangıç tarihini ve yeni hafta içi günlerini seçip kaydedin.

### Sıkça Sorulan Sorular (SSS)

- **Personel talep giriş tarihini kaçırırsa birim amiri adına kayıt açabilir mi?** Evet. Birim sorumlusu veya yetkili yönetici bu ekrandan **[Yeni İstek]** ile personel adına doğrudan talep oluşturabilir ve onaylayabilir.
- **"Nöbet Yazılmasın (Mazeret)" ile "Nöbet Yazılsın (İstek)" arasında motor önceliği farkı nedir?** Amir tarafından onaylanan mazeret talebi motor için sert kısıttır; uygun aday bulunamasa dahi personel o güne yazılmaz. "Nöbet Yazılsın" talebi ise yüksek öncelikli tercihtir; 24 saat dinlenme veya fazla mesai gibi sert kurallarla çakışmadığı sürece karşılanır.
- **Eğitim kısıtı seçtiğimde neden hafta sonu günleri görünmüyor?** Eğitim kısıtı hafta içi örgün ders programlarını korumak üzere tasarlanmıştır; hafta sonu için mazeret verilmesi gerekiyorsa talep türü olarak **Nöbet Yazılmasın (Mazeret)** seçilmelidir.

---

## 08. Nöbet Hazırlık, Çizelge Matrisi & Dağıtım Motoru

Aylık 35 saat ve 40 saat çalışma parametrelerinin hazırlandığı 3 adımlı sihirbazı, otomatik taslak yedekli arka plan dağıtım motorunu, çapraz birimden slot tamamlamayı, manuel kural ihlali onayını, yıllık adalet sayacını ve 3 gün sınırlı kısmi plan iptalini yönetmenizi sağlar.

> **Denetim Güvencesi:** Kural ihlali onay kutusu işaretlenerek yapılan her manuel atama onaylayan yöneticinin kimliği, tarihi ve gerekçesiyle denetim izine işlenir; yayınlanmış bir planda ay ortası kısmi iptal ise geriye dönük en fazla 3 gün ile sınırlandırılmıştır.

### Kısa Reçete: Otomatik Nöbet Dağıtımı, Matris Yönetimi ve Kısmi İptal

**Kısa Reçete: Otomatik Nöbet Dağıtımı, Matris Yönetimi ve Kısmi İptal**

**1. İstenen Sonuç:**
Radyasyon maruziyet sınırlarına (35s/40s) ve klinik kurallara uyumlu, çakışmasız aylık nöbet çizelgesinin saniyeler içinde üretilmesi.
**2. Yapılacak İşlem:**
**[Yeni Plan]** ile dönemi ve birimi oluşturun; 3 adımlı hazırlık sihirbazında parametreleri doğrulayıp **[Plan Taslağını Kaydet]**'e basın. Matris ekranında **[Otomatik Oluştur]** ile çizelgeyi üretin; eksik günleri **[Çapraz Birimden Doldur]** ile tamamlayıp **[Planı Onayla]** ile yayına alın.
**3. Sistem Etkisi:**
Dağıtım başlamadan önce mevcut taslak otomatik yedeklenir; hesaplama arayüzü dondurmadan arka planda çalışır; manuel ihlaller denetim izine mühürlenir ve ay ortası kısmi iptalde kesim tarihine kadar tutulan nöbetler korunur.

- **Mesai Rejimi:** 35s / 40s Standartı
- **Dağıtım Motoru:** Arka Plan İş Parçacığı
- **Taslak Güvenliği:** Otomatik Yedek & Geri Yükleme
- **Kısmi İptal Sınırı:** En Fazla 3 Gün Geri

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Nöbet hazırlık sihirbazı, dağıtım motoru, matris kontrolleri, adalet sayacı ve kısmi iptal kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **3 Adımlı Hazırlık Sihirbazı ve Simülatör** (Önizleme, Talepler & Kapasite) | Ayın iş günlerini, tatilleri, onaylı talepleri ve kadro yeterliliğini dağıtımdan önce doğrulamak. | Çalışma parametrelerini (35s/40s), gerekirse **[Çapraz Görevlendirme]** ve **[Hızlı Talep Ekle]** kayıtlarını derleyip kişi başı ortalama nöbet yükünü simüle eder. | Yeni plan açıldığında veya taslakta. | Nöbet Planlama Sorumlusu |
| **[Otomatik Oluştur], Taslak Kilidi ve Mutabakat** (Akıllı Dağıtım Motoru) | İki ay önceki birim mutabakatı eksik kalmadan ve onaylı/gerçekleşmiş nöbetleri bozmadan çizelge üretmek. | Yalnızca *Taslak* durumundaki planlarda çalışır (*Birim Onaylı*/*Yayında*/*Arşiv* planları ve gerçekleşmiş, devredilmiş veya ikame nöbetleri korur); ilgili birimin iki ay önceki yayınlanmış mutabakatını doğrular. | Taslak matrisinde başlatıldığında. | Birim Sorumlusu / Motor |
| **Otomatik Taslak Yedeği, [Yedek Yükle] ve Toplu Aktarım** (Kısıt Doğrulamalı Taslak Kurtarma) | Otomatik oluşturma öncesi manuel taslağı korumak ve yedek/Excel yüklemelerinin yayındaki planları ezmesini engellemek. | Yedekten geri yükleme ve toplu Excel nöbet aktarımı yalnızca *Taslak* planlara izin verir; aktarılan her satır onaylı izin, sağlık kısıtı ve çakışma denetiminden geçirilerek aylık özetlere işlenir. | Dağıtım öncesi, yedek yükleme veya Excel aktarımında. | Sistem Otomatik / Sorumlu |
| **[Çapraz Birimden Doldur] & [Uygun İkame Öner]** (Destek Birimi Tamamlama) | Birimin dolduramadığı boş günleri uygun diğer birim personelleriyle çakışmasız tamamlamak. | Dolu nöbetlere dokunmadan yalnız boş slotları tarar; adayların kendi birim nöbeti, izni ve dinlenme süresini doğrulayarak yerleştirir. | Boş slot veya ikame ihtiyacında. | Birim Sorumlusu / Yönetici |
| **Manuel Hücre Müdahalesi ve Kural İhlali Onayı** (Denetim İzli İstisna) | Zorunlu klinik hallerde yönetici sorumluluğunda kural dışı atama yapabilmek. | İhlalli veya başka birimde çakışmalı personelde onay kutusu işaretlenmeden kayıt engellenir; onaylanan gerekçe plan notlarına mühürlenir. | Hücre çift tıklandığında. | Yetkili Yönetici |
| **[Ay Ortası Plan İptali] ve Arşiv Revizyon Kilidi** (Bugün Sınırı, İptal İzi & Şifre Doğrulama) | Henüz tutulmamış gelecek nöbetlerin gerçekleşmiş sayılmasını ve diğer birimlerin dönem kilidinin bozulmasını önlemek. | Kesim tarihi bugünü aşamaz ve en fazla 3 gün geriye seçilir; kesim sonrası nöbetler silinmeyip gerekçesiyle *İptal* işaretlenir, bağlı havuz/devir talepleri kapatılır. Arşivden revizyona açma ise yönetici şifresi ister ve diğer birimlerin Fiili Hizmet dönem kilidini korur. | Acil ay ortası veya arşiv revizyonunda. | Yönetici (Şifre Onaylı) |
| **[Nöbet Adalet Sayacı]** (0,5 / 1,0 / 2,0 Ağırlıklı İzleme) | Yıl içindeki hafta sonu, bayram, fazla mesai ve çapraz nöbet dağılımını şeffaf izlemek. | 10 saatten kısa vardiyaları 0,5, 12 saatlik vardiyaları 1,0 ve 24 saatlikleri 2,0 nöbet olarak ağırlıklandırıp saat karşılığıyla listeler. | Yıllık adalet kontrolünde. | Birim Sorumlusu / Yönetici |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Otomatik Dağıtım Çalıştırıldığında Mevcut Manuel Taslağım Kalıcı Olarak Silinir mi?**
> - **Yanlış Algı:** *"Günlerce üzerinde uğraştığım taslak çizelgede yanlışlıkla [Otomatik Oluştur] butonuna basarsam tüm manuel düzenlemelerim sonsuza kadar kaybolur."*
> - **Gerçek Sistem Mantığı:** **Kesinlikle kaybolmaz.** Dağıtım motoru çalışmaya başlamadan hemen önce sistem mevcut çizelgenin tam bir taslak anlık görüntüsünü otomatik olarak arşivler. Üretilen yeni dağıtımdan memnun kalmazsanız çizelge araç çubuğundaki **[Yedek Yükle]** butonuna tıklayarak saniyeler içinde bir önceki taslağınıza dönebilirsiniz.

### Süreç Akış Şeması

1. **Hazırlık ve Ön Denetim:** Dönem iş günleri ile 35s/40s hedefleri hesaplanır; iki ay önceki dönemin fazla mesai mutabakatı tamamlanmamışsa otomatik dağıtım başlatılmaz, hazırsa taslak otomatik yedeklenir.
2. **Dağıtım ve Matris Düzenleme:** Arka planda çalışan dağıtım motoru ve çapraz tamamlama aracı slotları doldurur; zorunlu hallerde yönetici onay kutusuyla yapılan istisnalar denetim izine yazılır.
3. **Yayınlama ve Kısmi İptal:** Onaylanan plan Web Portalına yansır; ay ortası krizinde kesim tarihine (en fazla 3 gün geri) kadarki gerçekleşmiş nöbetler korunarak yalnızca gelecek günler iptal edilir.

### Adım Adım İşlem Rehberi

#### 1. Yeni Nöbet Planı Açma ve 3 Adımlı Hazırlık Sihirbazı

1. Sol menüden **[Nöbet Yönetimi] > [Nöbet Planları]** sayfasında **[Yeni Plan]** butonuna tıklayın; Yıl, Ay, Birim ve Hizmet Sınıfını seçip **[Kaydet]**'e basın.
2. Açılan **Nöbet Planlama Hazırlığı** sihirbazında sırasıyla resmi tatiller ile 35s/40s hedeflerini gözden geçirin (gerekirse **[Çapraz Görevlendirme]** üzerinden **[Adalet Sırasına Göre Seç]** ile destek personel ekleyin), **[İleri]** ile talepler ekranında varsa **[Hızlı Talep Ekle]** girişlerini yapın ve 3. adımda kapasite simülasyonunu doğrulayarak **[Plan Taslağını Kaydet]** butonuna tıklayın.

#### 2. Otomatik Dağıtım, Çapraz Doldurma ve Yedekten Geri Yükleme

1. Plan listesinde satırı seçip **[Çizelgeyi Düzenle]** butonuna tıklayın ve çizelge matrisine girin.
2. Üst araç çubuğunda **[Otomatik Oluştur]** butonuna basın; sistem iki ay önceki mutabakat kontrolünü geçtikten sonra mevcut taslağı otomatik yedekler ve arka planda nöbetleri yerleştirir (beğenmezseniz **[Yedek Yükle]** ile önceki taslağa dönebilirsiniz).
3. Hâlâ boş kalan slotlar varsa **[Çapraz Birimden Doldur]** penceresinden destek birimi ve gün kapsamını seçip **[Otomatik Doldur]** butonunu çalıştırın; ardından **[Planı Onayla]** ile çizelgeyi yayınlayın.

#### 3. Hücreye Manuel Müdahale, İkame Önerisi ve Kural İhlali Onayı

1. Matriste değiştirmek istediğiniz hücreye çift tıklayın veya araç çubuğundan **[Yeni Kayıt]** / **[Kaydı Düzenle]** butonunu kullanın; diğer birimlerden seçim için **[Diğer Birimlerden Atama Yap]** kutusunu veya uygun aday listesi için **[Uygun İkame Öner]** butonunu kullanın.
2. Seçilen personelde izin, 24 saat dinlenme veya tavan ihlali varsa kırmızı uyarı bloğu açılır; acil zorunluluk halinde yalnızca yetkili yönetici **[Kural ihlallerini onaylıyorum (Denetim izi notlara kaydedilecektir)]** kutusunu işaretleyip **[Kaydet]**'e basabilir.

#### 4. Ay Ortasında Kısmi Plan İptali Uygulama ve Adalet Sayacını İzleme

1. Yayındaki planda acil değişiklik gerektiğinde planı açıp **[Ay Ortası Plan İptali]** butonuna tıklayın; bugünden en fazla 3 gün geriye kadar kesim tarihini, en az 20 karakter gerekçeyi ve yönetici şifrenizi girip **[İptal Et ve Taslağa Çek]** butonuna basın.
2. Yıllık dağılım adaletini ve çapraz görev yüklerini incelemek için sol menüden **[Nöbet Adalet Sayacı]** sayfasını açıp gerektiğinde **[Excel'e Aktar]** ile dışa aktarın.

### Sıkça Sorulan Sorular (SSS)

- **Otomatik Oluştur butonuna bastığımda iki ay önceki mutabakat uyarısı neden çıkıyor?** Planlanan aya önceki aylardan devredecek doğru fazla mesai saatlerini yansıtabilmek için sistem iki ay önceki dönemin mutabakatını denetler. O dönemde nöbeti olup **[Fazla Mesai Borç / Alacak Devri]** ekranında kaydedilmemiş personel varsa dağıtım durdurulur; ilgili dönemi kaydedip tekrar deneyin.
- **Aynı gün içinde gündüz ve gece vardiyası atandığında sistem neden ihlal vermeyebilir?** Çakışmayan gündüz ve gece vardiyaları birimin günlük izin verilen azami çalışma süresini (örneğin 24 saat) aşmıyorsa dinlenme ihlali oluşmaz. Ancak bayram ve hafta sonu adalet sayacında bu iki vardiya ayrı iki nöbet olarak sayılır ve eşitlik korunur.
- **Ay ortasında personel ayrılırsa tüm ayın çizelgesini silmek zorunda mıyım?** Hayır. **[Ay Ortası Plan İptali]** kesim tarihine kadar fiilen tutulmuş tüm nöbetleri ve hak edişleri korur; yalnızca kesim tarihinden ay sonuna kadar olan gelecek slotları iptal ederek revizyon taslağı açar.
- **Başka bir birimde aynı ay nöbeti olan personel matriste nasıl fark edilir?** Personelin diğer departmanlarda da nöbeti veya yakın tarihli çakışma riski bulunuyorsa sağ özet tablosunda ve ilgili matris hücresinde sarı/kehribar uyarı vurgusu ile diğer birimin detay ipucu görüntülenir.

---

## 09. Nöbet Devir, İkame & Acil Mazeret Yönetimi

Personeller arası birebir devir ve karşılıklı takas taleplerini, 3 kademeli onay zincirini, Web Portalı Nöbet Değişim Havuzunu (48 saat aylık kota ve 36 saat son teslim sınırı), acil mazeret akıllı ikame ve geri alma işlemini, ders programı revizyonunu ve 3 adımlı gebe personel aksiyon sihirbazını yönetmenizi sağlar.

> **Yasal Güvence:** Gebe, emziren, heyet raporu muafiyeti olan veya radyasyon doz aşımı bulunan personele nöbet devredilemez; devir ve takas yalnızca aynı hizmet sınıfındaki meslektaşlar arasında ve aynı ay içinde yapılabilir.

### Kısa Reçete: Ay Ortası Nöbet Değişimi, İkame ve Gebelik Transferi

**Kısa Reçete: Ay Ortası Nöbet Değişimi, İkame ve Gebelik Transferi**

**1. İstenen Sonuç:**
Kesinleşmiş çizelgedeki ay içi nöbet değişimi, ani hastalık veya gebelik bildirimlerinin sahipsiz vardiya bırakmadan ve mevzuata tam uyumlu çözülmesi.
**2. Yapılacak İşlem:**
Karşılıklı değişim için masaüstünden **[Devir Talebi]** veya Web Portalından **Nöbet Değişim Merkezi** üzerinden talep açın; ani krizlerde **[Acil Mazeret ve İkame]** ile uygun yedekleri atayın; gebelik bildiriminde **Merkezi Yönetici Aksiyon ve Onay Sihirbazı** adımlarını onaylayın.
**3. Sistem Etkisi:**
Hizmet sınıfı eşitliği, 24 saat dinlenme ve taban çalışma saati otomatik denetlenir; 3 kademeli onay tamamlanınca çizelge güncellenir ve hatalı girilen mazeretler tek tıkla eski haline döndürülür.

- **Hizmet Sınıfı:** Eşit Unvanlar Arası
- **Havuz Sınırı:** Aylık 48s / 36s Son Süre
- **Dinlenme & Ön Süre:** 24 Saat Kalkanı
- **Geri Alma:** Tek Tıkla Mazeret İptali

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Nöbet devri, takas, Web Portalı havuzu, acil mazeret ve gebe personel aksiyon merkezindeki kurallar.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Hizmet Sınıfı Eşitliği, Yayın Şartı ve Taban Saat Kilidi** (Otomatik Devir Doğrulaması) | Taslak planlarda, tanımsız/farklı unvanlarda veya zorunlu taban mesai altında karşılıksız devri önlemek. | Yalnızca *Yayında* planlarda ve hizmet sınıfı tanımlı eşit meslektaşlar arasında çalışır; aynı nöbete mükerrer açık talebi ve taban saat altındaki tek yönlü devri engeller. | Devir/takas veya havuz talebi açılırken. | Nöbetçi Personel / Sistem |
| **24/48 Saat Dinlenme ve Ardışık Nöbet Kalkanı** (Tükenmişlik Önleme) | Birebir devir, havuz, acil mazeret ve gebelik ikamesinde kesintisiz yorgunluğu engellemek. | Nöbete 24 saatten az kala devir açılamaz; dört değişim/ikame akışının tamamında 24 saat genel dinlenme, gece nöbetleri arası 48 saat ara ve ardışık nöbet üst sınırı zorunlu denetlenir. | Devir, havuz ve tüm ikame atamalarında. | Sistem Güvenlik Kilidi |
| **3 Kademeli Onay Zinciri & Öz-Onay Yasağı** ([Tüm Devir İşlemleri]) | Meslektaş rızası atlanarak veya yetkisiz birim/öz-onay ile çizelgenin değiştirilmesini önlemek. | Önce devralan meslektaş kabul eder (başka birim yöneticisi bu adımı atlayamaz), ardından yetkili birim sorumlusu ve yönetici onaylar; talep tarafları kendi işlemlerini onaylayamaz ve karşılıklı takasta her iki vardiya birlikte güncellenir. | Devir süreci ilerlerken. | Meslektaş / Birim Amiri / Yönetici |
| **Web Portalı Nöbet Değişim Havuzu** (48 Saat Kota & 36 Saat Sınırı) | Doğrudan muhatap bulamadan güvenli ilana çıkmak ve tek taraflı nöbet iptalini önlemek. | Oturum kimliği doğrulanarak aylık en fazla 48 saat havuza bırakılır ve nöbete 36 saat kala ilan *Zaman Aşımı* durumuna düşer; acil mazeret iptali yalnızca zaman aşımı sonrasında onaylı resmi izin/rapor veya yönetici onayıyla yapılabilir. | Havuz ilanı ve son 36 saatte. | Personel / İdari Yönetici |
| **[Acil Mazeret ve İkame] & [Seçili Mazereti Geri Al]** (Kısıt Filtreli Yedek Önerici) | Ani hastalıkta kısıtlı personeli önermeden uygun yedek atamak ve gerçekleşmiş nöbeti korumak. | İzinli, gebe, emziren, doz/sağlık kısıtlı veya nöbet muafiyetli çalışanları eleyerek uygun birim/hizmet sınıfı adaylarını puanlar; ikame nöbet *Gerçekleşti* veya *Devir* durumuna geçmişse geri alma engellenir. | Beklenmeyen mazerette ve geri almada. | Birim Sorumlusu / Yönetici |
| **Merkezi Yönetici Aksiyon ve Onay Sihirbazı** (Radyasyonsuz Nakil & İkame Doğrulaması) | Gebe personeli gerçekten radyasyonsuz birime naklederken eski birim nöbetlerini çakışmasız devretmek. | Hedef birimin radyasyonsuz alan olduğunu, nöbet sahipliğini, ikame personelin hizmet sınıfını ve dinlenme/izin uygunluğunu doğrulayıp denetim iziyle tek işlemde uygular. | Gebelik raporu girildiğinde. | Başhekimlik / İdari Yönetici |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Havuzda 36 Saat Kala Eşleşmeyen Nöbetler Otomatik Olarak Acil Mazerete Aktarılır mı?**
> - **Yanlış Algı:** *"Nöbetimi Web Portalı değişim havuzuna bıraktım; nöbete 36 saat kala kimse talip olmazsa sistem nöbeti üzerimden otomatik düşürüp yerime zorunlu ikame yazar."*
> - **Gerçek Sistem Mantığı:** **Bu süreç kendiliğinden otomatik işlemez.** Nöbete 36 saat kaldığında sistem nöbetin açıkta kalmasını önlemek için ilanı zaman aşımına uğratıp havuzdan çeker; ancak acil mazeret ve ikame kaydı otomatik açılmaz. Personelin birim yöneticisine başvurması ve yöneticinin klinik zorunluluk tespit ederek acil mazeret protokolünü başlatması gerekir.

### Süreç Akış Şeması

1. **Devir, Takas ve Havuz:** Gebelik, heyet muafiyeti, farklı hizmet sınıfı veya 24 saat dinlenme ihlali varsa sistem engeller; uygun talepler devralan meslektaş, birim sorumlusu ve yönetici onaylarıyla çizelgeye işlenir.
2. **Acil Mazeret ve Geri Alma:** Yönetici ani mazerette puanlı ikameleri tek pencerede atar; hatalı girişlerde geçmiş sekmesinden orijinal nöbetleri geri döndürebilir.
3. **Gebelik Aksiyon Sihirbazı:** Gebelik kaydı gece ve radyasyon kilitlerini anında kapatır; yönetici aynı sihirbazda nakli, eski birim ikamesini ve yeni birim gündüz mesaisini tek onayla tamamlar.

### Adım Adım İşlem Rehberi

#### 1. Masaüstü veya Web Portalından Devir / Havuz Talebi Açma ve Onaylama

1. Masaüstünde yayındaki plandan **[Devir Talebi]** butonuna tıklayın (veya çizelgede satırı seçip talep açın); **Alan Personel**, **Devir Nedeni** ve gerekirse notu girip **[Devir Talebi Olustur]** butonuna basın.
2. Web Portalında **Nöbet Değişim Merkezi** ekranından **Açık Havuz** sekmesinde **[Havuza Bırak]** ile ilan açabilir, **Doğrudan Devir / Takas** ile meslektaşınıza teklif gönderebilir, **Onay Bekleyenler** ve **Geçmiş** sekmelerinden süreci izleyebilirsiniz.
3. Masaüstündeki **[Tüm Devir İşlemleri]** ekranında satır seçildiğinde sağ panelde talebin özeti ve onay aşamaları doğal dille görüntülenir.

#### 2. Acil Mazeretle Toplu İkame Atama ve Hatalı Kaydı Geri Alma

1. Yayındaki plan inceleme ekranında **[Acil Mazeret ve İkame]** butonuna basın; **Yeni Acil Mazeret ve İkame** sekmesinde Personel, Başlangıç/Bitiş Tarihleri ve İptal Nedenini seçip **[Etkilenen Nöbetleri ve İkame Önerilerini Getir]** butonuna tıklayın.
2. Sistem her boş nöbet için uygunluk puanına göre adayları sıralar; yedekleri doğrulayıp **[Kaydet ve Uygula]** butonuna basın.
3. Hatalı bir işlem olduysa **Mazeret Geçmişi ve Geri Alma** sekmesinden satırı seçip **[Seçili Mazereti Geri Al]** butonuna tıklayarak eski nöbetleri geri yükleyin.

#### 3. Ders Programı Revizyonu ve Gebelik Yönetici Aksiyon Sihirbazı

1. Dönem ortasında üniversite ders günleri değişen personel için Nöbet Ayarları > Personel Talepleri içindeki **[Ders Programını Revize Et]** butonuna basın; revizyon başlangıç tarihini ve yeni hafta içi günlerini (**Pzt**–**Cum**) işaretleyip **[Revizyonu Kaydet]** butonuna tıklayın.
2. Gebe personel bildiriminde özlük kartından **Gebelik Bildirimi** ekranını açıp rapor ve tahmini doğum bilgilerini kaydederek **[Bildirimi Kaydet ve Nöbetleri İptal Et]**'e basın; açılan **Merkezi Yönetici Aksiyon ve Onay Sihirbazı** üzerinde yeni radyasyonsuz birimi, eski birim ikamelerini ve gündüz vardiyalarını doğrulayıp **[Tüm Aksiyonları Onayla ve Çizelgeyi Güncelle]** butonuna tıklayın.

### Sıkça Sorulan Sorular (SSS)

- **Gebe veya emziren personele acil durumda nöbet devredilebilir mi?** **Kesinlikle hayır.** 657 DMK m. 101, 4857 İş Kanunu m. 74 ve Radyasyon Güvenliği Yönetmeliği m. 12 gereğince aktif gebelik, emzirme, heyet raporu veya radyasyon doz aşımı bulunan personele nöbet devri ve takası tamamen kapatılır.
- **Farklı hizmet sınıfları (örneğin Teknisyen ile Hemşire) arasında takas yapılabilir mi?** Hayır. Hizmet Sınıfı Eşitliği ilkesi gereğince nöbet devri ve takası yalnızca aynı görev grubu ve hizmet sınıfındaki meslektaşlar arasında yapılabilir.
- **Aylık zorunlu mesaisini tamamlamamış personel tek taraflı nöbet devredebilir mi?** Hayır. Aylık zorunlu taban çalışma süresi altındaki nöbetler karşılıksız tek yönlü devredilemez; yalnızca fazla mesai kapsamındaki saatler devredilebilir. Taban saat altındaki değişimler için aynı ay içinde **Karşılıklı Takas** seçilmelidir.
- **Nöbete 36 saat kaldığında havuz ilanı nasıl sonuçlanır?** Nöbet başlangıcına 36 saatten az kaldığında yeni havuz ilanı açılamaz, mevcut ilan ise zaman aşımına alınarak kapatılır. Zorunlu bir mazeret varsa personel amirine başvurur ve yönetici inisiyatifiyle **[Acil Mazeret ve İkame]** süreci işletilir.

---

## 10. Nöbet Borç / Alacak ve Fazla Mesai Yönetimi

3153 sayılı Kanun (haftalık 35 saat) ve 657 sayılı Kanun (haftalık 40 saat) mesai rejimlerine, resmi tatil ve arife saat 13:00 indirimlerine ile onaylı izinlere göre aylık yasal hedef saati hesaplar; iki ay gecikmeli devir, 60 saat koruyucu kota, 657 DMK Ek Madde 33 kapsamındaki 130 saatlik ödeme tavanı ve mutemetlik bildirim cetvelini yönetmenizi sağlar.

> **Yasal Çerçeve:** 657 DMK Ek Madde 33 gereğince bir personele bir ayda nöbet ücreti ödenebilecek üst sınır 130 saattir; fazlası ile eksi bakiyeler takip eden dönemlere devreder.

### Kısa Reçete: Fazla Mesai Mutabakatı, Ödeme Dağıtımı ve İcmal Alma

**Kısa Reçete: Fazla Mesai Mutabakatı, Ödeme Dağıtımı ve İcmal Alma**

**1. İstenen Sonuç:**
Yayınlanmış çizelgeden doğan fazla veya eksik mesailerin hatasız kesinleştirilmesi, koruyucu kota/yasal tavan kurallarıyla mutemetlik bildirim cetvelinin üretilmesi.
**2. Yapılacak İşlem:**
Dönemi ve birimi seçip **[Yenile]** ile hesaplamayı alın; bireysel satırlarda **[FM Öde]** üzerinden veya toplu olarak **[Toplu İşlem Seçiniz...]** + **[Seçilenlere Uygula]** ile ödeme/devir kararını belirleyip **[Değişiklikleri Kaydet]** ve **[Dışa Aktar]** adımlarını uygulayın.
**3. Sistem Etkisi:**
İki ay önceki devir (örneğin Ocak bakiyesi Mart planına) otomatik işlenir; ödeme kararı kaydedildiğinde dönem mühürlenir ve yalnızca yönetici şifresiyle geçici düzenlemeye açılır.

- **Yasal Ödeme Tavanı:** 130.0 Saat / Ay
- **Sağlık Koruma Kotası:** 60.0 Saat / Ay
- **Devir Gecikmesi:** 2 Ay Gecikmeli
- **Bayram Ayrımı:** Arife 13:00 Eşiği

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Fazla mesai hesaplama, devir gecikmesi, kota/tavan kalkanları, dönem kilidi ve mutemetlik çıktısı kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Çift Havuzlu Yasal Hedef, Arşiv Planlar ve Kıstelyevm** (35s / 40s Denklik & 2. Yıl Emzirme) | Yayınlanmış ve arşivlenmiş tüm planlarda radyasyon ve genel alan hedef saatini hatasız hesaplamak. | *Yayında* ve *Arşiv* planlardaki nöbetleri toplar; resmi tatil, arife saat 13:00 sonrası, onaylı izin ve tekilleştirilmiş süt izni indirimlerini düşer (2. yıl gece muafiyetinde saat düşülmez, radyasyon unvanlı personel 35s esasıyla korunur). | Dönem tablosu hesaplanırken. | Mutemet / Birim Sorumlusu |
| **İki Ay Gecikmeli Devir & Birim Bazlı Plan Kilidi** (Ocak → Mart Kaynak Ay Başlığı) | Yalnızca ilgili birimin kesinleşmiş dönem devrini zorunlu kılıp kısmi ödemeleri doğru aktarmak. | Tablo başlığı gerçek kaynak ayı (örneğin *Ocak 2026'dan Devreden*) gösterir ve kısmi ödemeden kalan saatleri eksiksiz devreder; planlama kilidi yalnızca ilgili birimin *Yayında*/*Arşiv* planlarını denetler, başka birimin taslağı planlamayı engellemez. | Tablo hesaplamada ve planlamada. | Nöbet Sorumlusu / Amir |
| **[FM Öde] Dağıtım Penceresi ve Sunucu Denklik Kalkanı** (60s Kota / 130s Yasal & Kişisel Tavan) | Yasal veya kişisel fazla mesai sınırının aşılmasını ve bakiye uyumsuzluğunu önlemek. | Eksi/sıfır bakiyede ve fazla mesai muafiyetinde ödeme kapalıdır; kayıt anında birim yetki kapsamı, 130s yasal tavan, kişisel kısıt tavanı ve *Ödenen + Devreden = Kümülatif Fark* eşitliği zorunlu doğrulanır. | Satırda [FM Öde] ve kayıtta. | Birim Sorumlusu / Mutemet |
| **[Toplu İşlem Seçiniz...] & [Seçilenlere Uygula]** (Çoklu Satır Kota/Devir) | Birden fazla personele tek seferde aynı ödeme veya devir politikasını uygulamak. | Tablodan seçilen artı bakiyeli satırlara 60s Kurumsal Kota, Maks 130s Ödeme veya Tamamını Devret kararını topluca işler. | Çoklu satır işleminde. | Nöbet Sorumlusu |
| **Dönem Kilit Durumu ve [Kilidi Aç] Sıfırlaması** (Filtre Değişiminde Otomatik Kilit) | Bir dönem için açılan geçici kilidin başka dönem veya birimlere taşınmasını engellemek. | Kayıt sonrasında dönem kilitlenir ve **[Kilidi Aç]** yönetici şifresi ister; yıl, ay, birim veya hizmet sınıfı filtresi değiştirildiği anda geçici kilit otomatik sıfırlanır. | Kayıt sonrası / filtre değişiminde. | Yönetici / İdari Amir |
| **[Dışa Aktar] 5 Sütunlu Cetvel & Yılbaşı Tatil Ayrımı** (Excel / PDF / Word / Yazıcı) | Arşivlenen aylar ve 31 Aralık gecesi başlayan nöbetler dahil resmi mutemetlik icmali üretmek. | *Yayında* ve *Arşiv* planları kapsar; 31 Aralık'tan 1 Ocak sabahına sarkan vardiya saatleri dahil tüm resmi tatil ve arife saat 13:00 sonrası mesaileri ayrı sütuna ayırır. | Kararlar kaydedildikten sonra. | Mutemet / Birim Sorumlusu |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Personelin Biriken Fazla Mesaisinin Tamamı Aynı Ay Nakden Ödenebilir mi?**
> - **Yanlış Algı:** *"Personel ay içinde geçmişten devreden saatlerle birlikte 150 saat fazla mesai biriktirdiyse, amirin onayıyla tamamı o ay nöbet ücreti olarak bordroya yazılır."*
> - **Gerçek Sistem Mantığı:** **Hayır, yasal ödeme tavanı aşılamaz.** 657 sayılı Devlet Memurları Kanunu Ek Madde 33 uyarınca bir personele bir ayda nöbet ücreti ödenebilecek üst sınır **130 saattir**. Ayrıca kurum sağlığı için önerilen koruyucu kota **60 saattir**; ödenmeyen kalan hak edişler kesinlikle yanmaz ve sonraki dönemlere saat bakiyesi olarak devreder.

### Süreç Akış Şeması

1. **Hedef ve Devir Hesabı:** Yayınlanmış nöbetler, resmi tatil/arife 13:00 indirimleri, izinler ve iki ay önceki dönemden devreden bakiye birleştirilerek kümülatif saat netleştirilir.
2. **Ödeme ve Devir Dağıtımı:** Eksi/sıfır bakiyede ödeme kapalı kalır; artı bakiyede koruyucu 60 saat kota, yasal 130 saat tavan veya tam devir kararı seçilir.
3. **Mühürleme ve Mutemetlik:** Kayıtla birlikte dönem kilitlenir (yalnızca yönetici şifresiyle açılır) ve bayram saati ayrıştırılmış 5 sütunlu resmi cetvel Excel, PDF, Word veya yazıcı çıktısı olarak alınır.

### Adım Adım İşlem Rehberi

#### 1. Dönemi Yükleme ve Bakiye Hesabını Doğrulama

1. Sol menüden **[Nöbet Yönetimi] > [Fazla Mesai Borç / Alacak Devri]** ekranını açın; Yıl, Ay, Birim ve Hizmet Sınıfı süzgeçlerini seçip **[Yenile]** butonuna tıklayın.
2. Tabloda yasal hedef saati, fiili nöbet saatini (fare imlecini hücre üzerine getirerek 35s/40s ve birim detayını görebilirsiniz), iki ay önceki devri (örneğin Ocak bakiyesi Mart planına) ve kümülatif net farkı inceleyin.

#### 2. Bireysel ve Toplu Ödeme / Devir Kararını Kaydetme

1. Artı bakiyeli bir satırda **[FM Öde]** butonuna tıklayın; açılan pencerede **[Kurumsal Kota (60s)]**, **[Tamamı (130s)]** veya özel saat girerek alttaki canlı devir hesabını kontrol edip **[Onayla]** butonuna basın.
2. Birden fazla satırı seçip üstteki **[Toplu İşlem Seçiniz...]** menüsünden kural seçerek **[Seçilenlere Uygula]** butonunu çalıştırın; işlemler bitince sağ üstteki **[Değişiklikleri Kaydet]** butonuna tıklayarak dönemi onaylayıp kilitleyin.

#### 3. Kilitli Dönemi Açma, Mutemetlik İcmali Alma ve Web İzleme

1. Kesinleşmiş kilitli bir dönemde düzeltme gerekirse **[Kilidi Aç]** butonuna basın, yönetici şifrenizi doğrulayın, düzenlemeden sonra tekrar **[Değişiklikleri Kaydet]** ile dönemi kilitleyin.
2. Kayıt tamamlandıktan sonra **[Dışa Aktar]** butonundan Excel, PDF, Word veya Yazıcı seçeneğiyle T.C. Kimlik No, Ad Soyad, Görev Yeri, Normal FM ve Bayram FM sütunlarını içeren resmi cetveli alın.
3. **Web Portalında İzleme:** Nöbet Paneli altındaki borç/alacak sekmesinden hedef, fiili ve fark saatleri, onaylı izin gün sayısını (**X Gün İzinli** rozeti) ve tek tıkla Excel/PDF çıktısını tarayıcıdan takip edebilirsiniz.

### Sıkça Sorulan Sorular (SSS)

- **Kümülatif fazla mesai 150 saat iken sistem neden en fazla 130 saat ödetiyor?** 657 sayılı Devlet Memurları Kanunu Ek Madde 33 gereğince bir ayda ücret ödenebilecek azami fazla mesai sınırı **130 saattir**. Bu tutarı aşan süre silinmez ve takip eden döneme devir bakiyesi olarak aktarılır.
- **60 saatlik Kurumsal Kota personelin hakkını azaltır mı?** Hayır. 60 saatlik kota bir bütçe kısıtlaması değil, personelin tükenmişliğini önlemeye yönelik koruyucu iş sağlığı kotasıdır. Ödenmeyen kalan süre hak edişten silinmez, sonraki aya devrederek denkleştirme ve izin olanağı sağlar.
- **Neden yeni ayın otomatik nöbet planını oluştururken geçmiş mutabakat uyarısı alıyorum?** Fazla mesai devri iki ay gecikmeli çalıştığı için planlanan aydan iki ay önceki döneme ait nöbetçi personellerin borç/alacak mutabakatı henüz kaydedilmemişse dağıtım motoru durur. İlgili ayı bu ekrandan hesaplayıp **[Değişiklikleri Kaydet]** ile kaydettiğinizde engel kalkar.
- **Ödemesi kaydedilen dönem kilitlendikten sonra nasıl düzeltilebilir?** Mutemetliğe iletilen saatlerin yetkisiz değişmesini önlemek için kayıt sonrası dönem kilitlenir. Düzeltme ihtiyacı yalnızca yetkili yöneticinin **[Kilidi Aç]** butonundan kendi kullanıcı şifresini doğrulamasıyla geçici olarak açılabilir.

---

## 11. Fiili Hizmet ve Şua Hesaplama (FHZ)

5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu m. 40 kapsamındaki Fiili Hizmet Süresi Zammı (FHZ) puantajlarını ve 3153 sayılı Kanun Ek Madde 1 ile 13.04.2023 / 32162 sayılı Yönetmelik EK-2 Sağlık İzni Tablosu uyarınca Şua İzni hakedişlerini 3 sekmeli entegre sihirbaz üzerinden hesaplar, onaysız izin bariyeri ve sıralı dönem/yıl kilitleriyle korur.

> **Mevzuat Güvencesi:** FHZ yalnızca radyasyonlu alanda fiilen çalışılan süreler için doğar; yıllık izin, rapor ve idari izinler fiili çalışmadan düşülür. Yıllık Şua İzni 32162 sayılı Yönetmelik EK-2 uyarınca en fazla 30 gün ile sınırlıdır ve sonraki yıla devretmez.

### Kısa Reçete: 3 Sekmeli FHZ ve Şua Puantaj Sihirbazı

**Kısa Reçete: 3 Sekmeli FHZ ve Şua Puantaj Sihirbazı**

**1. İstenen Sonuç:**
15–14 SGK bordro dönemine ait görev yerlerinin onaylanması, net fiili çalışma saatlerinin ve EK-2 Şua hak edişlerinin hesaplanıp kilitlenerek SGK puantaj cetvelinin alınması.
**2. Yapılacak İşlem:**
1. sekmede varsayılan ve rotasyonlu görev yerlerini kontrol edip **[1. Görev Yerlerini Onayla ve Hesaplamaya Geç]**'e basın; 2. sekmede hesaplamayı doğrulayıp **[2. Hesaplamayı Kaydet, Kilitle ve Rapor Çıktısına Geç]** butonunu kullanın; 3. sekmede **[3. Rapor Çıktısı Al (Excel / PDF)]** ile çıktıyı alıp **[4. İşlemi Bitir ve Kapat]**'a tıklayın.
**3. Sistem Etkisi:**
Onaysız izin varsa güvenlik bariyeri hesaplamayı durdurur; Koşul A (7s) ve Koşul B (8s) ayrıştırılır; yıl içi kümülatif toplamda 32162 Yönetmelik EK-2 basamakları (azami 30 gün) uygulanır ve dönem mühürlenir.

- **SGK Döngüsü:** Ayın 15'i – Sonraki 14'ü
- **Şua Tavanı:** 30 Gün (1.451–1.500s)
- **Çalışma Koşulu:** Koşul A (7s) / Koşul B (8s)
- **Hibrit Takip:** Masaüstü Sihirbaz & Web Karne

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*15–14 SGK döngüsü, Koşul A/B ayrımı, onaysız izin engeli, EK-2 Şua hesabı, nöbet revizyon uyarısı ve sıralı kilit kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **15–14 SGK Döngüsü & [Sadece Değişenler]** (Görev Dağılım Süzgeci) | 5510 sayılı Kanun bordro takvimini korumak ve asıl birim dışına çıkan rotasyonları hemen görmek. | Dönem ayın 15'inden sonraki ayın 14'üne kurulur; filtre asıl birimi ile fiili görev yeri farklı olan satırları süzerek vurgular. | 1. sekme açıldığında. | Birim Sorumlusu / Mutemet |
| **Koşul A / Koşul B ve İzin Düşümü** (Net Fiili Saat & Vardiya Motoru) | Radyasyonlu alan çalışmasını idari çalışmadan ayırmak ve aynı günde mükerrer saat yazılmasını önlemek. | Koşul A (7.0 saat) ve Koşul B (8.0 saat) ayrıştırılır; aynı iş gününde görev dağılımı ve nöbet varsa mükerrer toplama yapılmayıp yüksek vardiya esas alınır, Arife yarım gün (0,5 gün) tatilleri ile onaylı izinler düşülür ve dönem içinde ayrılan/emekli olan çalışanlar resmi puantaj raporunda korunur. | 2. sekmede hesaplama ve 3. sekmede raporlama çalışırken. | Hesaplama Motoru |
| **Onaysız İzin Güvenlik Bariyeri** ([İzin Listesine Git / Resmi Onay Ver]) | Resmi onayı eksik izinlerin SGK bildiriminde fazladan fiili hizmet günü oluşturmasını önlemek. | Dönemde taslak veya ön onaylı izin bulunursa hesaplama durdurulur ve tek tıkla İzin Listesi ekranına geçiş sunulur. | Hesaplama sırasında eksik onayda. | Sistem Güvenlik Kilidi |
| **EK-2 Kümülatif Şua ve Aylık Tam Dilim** (Şişme Önleyici Barem) | Yıllık toplamı 32162 Yönetmelik EK-2'ye göre hesaplarken aylık ara görünümlerde hata oluşmasını önlemek. | Yıllık kümülatif toplamda her 50 saatlik dilim 1 gün (0–50s: 1 gün, 1.451–1.500+s: azami 30 gün) sayılır; tekil aylık satırlarda ise yalnızca tam 50 saatlik bloklar gösterilir. | Aylık ve yıllık hesaplamada. | Radyasyon Çalışanları / İK |
| **Nöbet Revizyon Uyarısı & Seçici Kilit** ([Revize Personelleri Hesapla]) | Kilitlenmiş dönemdeki çizelge revizyonlarında tüm dönemi bozmadan yalnızca etkilenen kişiyi güncellemek. | Revize edilmiş personeli üstte vurgular; **[Revize Personelleri Hesapla]** ve **[Değişiklikleri Onayla ve Yeniden Kilitle]** ile yeniden mühürler. | Kilitli dönemdeki nöbette değişiklikte. | Mutemet / Birim Sorumlusu |
| **Sıralı Dönem Kilidi & [Yılı Kilitle]** ([Dönem Kilidini Aç] (Yönetici)) | Ay atlanarak eksik puantaj kapatılmasını ve yıl sonunda kesinleşen hakların değiştirilmesini önlemek. | Önceki ay kilitlenmeden cari ay kilitlenemez; **[Yılı Kilitle]** yalnızca Admin veya Süpervizör tarafından tüm yılı kalıcı dondurur. | Dönem veya yıl kapatılırken. | Birim Sorumlusu / Admin |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Radyasyon Biriminde Kadrolu Personel İzinli Olsa da Her Ay Tam Fiili Hizmet Zammı Alır mı?**
> - **Yanlış Algı:** *"Radyoloji kadrosunda çalışan bir personel o ay ne kadar yıllık izin veya sağlık raporu kullanırsa kullansın her ay 30 gün üzerinden yıpranma payı (FHZ) alır."*
> - **Gerçek Sistem Mantığı:** **Kesinlikle almaz.** 5510 sayılı Kanun ve SGK genelgeleri gereğince Fiili Hizmet Süresi Zammı yalnızca iyonlaştırıcı radyasyon kaynağının bulunduğu kontrollü alanda **fiilen çalışılan gün ve saatler** üzerinden tahakkuk ettirilir. Yıllık izin, mazeret izni, rapor veya idari izin günleri brüt süreden otomatik düşülür.

### Süreç Akış Şeması

1. **Görev Yerlerini Onaylama:** 15–14 bordro dönemindeki varsayılan birimler ve varsa geçici rotasyon görevleri onaylanarak hesaplama adımına geçilir.
2. **Hesaplama ve Kilitleme:** Onaysız izin bariyeri geçildikten sonra Koşul A/B ayrımı, izin düşümü ve EK-2 Şua hesabı yapılır; kayıtla dönem kilitlenir ve sonradan nöbet değişikliği olursa yalnızca revize satırlar tekrar mühürlenir.
3. **Raporlama ve Yıl Kapatma:** Resmi SGK puantaj cetveli dışa aktarılıp sihirbaz kapatılır; yılın 12 ayı tamamlandığında yetkili yönetici yılı kilitleyerek Şua karnesini kesinleştirir.

### Adım Adım İşlem Rehberi

#### 1. Görev Yerlerini Kontrol Etme ve Onaylama (1. Sekme)

1. Sol menüden **[Fiili Hizmet ve Şua]** ekranını açın ve **Görev Yerlerini Onayla** sekmesinde Yıl ile Dönemi (ayın 15'i – sonraki ayın 14'ü) doğrulayın.
2. Kadro birimi dışında görevlendirilenleri görmek için **[Sadece Değişenler]** kutusunu kullanın; rotasyon veya geçici görev eklemek için **[Rotasyon / Ek Görev Ekle]** ya da satır seçerek **[Görev Yerini Değiştir]** butonundan saat ve birim bilgilerini kaydedin.
3. Sağ üstteki **[1. Görev Yerlerini Onayla ve Hesaplamaya Geç]** butonuna tıklayarak 2. sekmeye geçin.

#### 2. Fiili Hizmet ve Şua Hesaplama, Kilitleme ve Revizyon Güncelleme (2. Sekme)

1. **Fiili Hizmeti Hesapla** sekmesinde dönem içinde resmi onayı tamamlanmamış izin varsa sistem uyarı penceresi açar; **[İzin Listesine Git / Resmi Onay Ver]** butonuyla onayları tamamlayıp dönün.
2. Tabloda **Koşul A** (7.0s) / **Koşul B** (8.0s) ayrımını, net fiili çalışma saatini ve kümülatif EK-2 Şua günlerini doğrulayıp **[2. Hesaplamayı Kaydet, Kilitle ve Rapor Çıktısına Geç]** butonuna basın.
3. Kilitlenmiş bir dönemde nöbet revizyonu nedeniyle üstte uyarı şeridi belirdiğinde **[Revize Personelleri Hesapla]** butonuna basıp tutarları yenileyin ve **[Değişiklikleri Onayla ve Yeniden Kilitle]** ile dönemi tekrar mühürleyin (Admin veya Süpervizör gerekirse **[Dönem Kilidini Aç]** veya yıl sonunda **[Yılı Kilitle]** butonunu kullanabilir).

#### 3. Rapor Çıktısı Alma, İşlemi Bitirme ve Web Portalı Şua Karnesi

1. **Rapor Çıktısı Al** sekmesinde resmi puantaj cetvelini inceleyip **[3. Rapor Çıktısı Al (Excel / PDF)]** menüsünden Excel, PDF veya Word çıktısını indirin ve **[4. İşlemi Bitir ve Kapat]** butonuyla sihirbazı tamamlayın.
2. **Web Portalı Şua Karnesi:** Yöneticiler ve çalışanlar tarayıcıdan kazanılan, kullanılan ve yıl sonunda yanma riski taşıyan kalan Şua günlerini takip eder; 20 gün ve üzeri kalanlar **Kritik Risk**, 1–19 gün kalanlar **Planlama Bekliyor**, 0 gün kalanlar **Eksiksiz Kullandırıldı** durumuyla izlenir.

### Sıkça Sorulan Sorular (SSS)

- **Bir dönemi kilitlemek istediğimde neden "önceki dönem kilitlenmeden kilitlenemez" uyarısı alıyorum?** SGK denetim bütünlüğü gereğince aylar atlanarak mühürlenemez. Önce geçmiş ayların puantajını sırayla hesaplayıp kilitlemeniz gerekir; böylece kümülatif yıl içi Şua ve devir toplamları kesintisiz ilerler.
- **Yıllık fiili çalışma 1.800 saat olmasına rağmen Şua izni neden 30 gün yazıyor?** 3153 sayılı Kanun Ek Madde 1 ve 13.04.2023 / 32162 sayılı Yönetmelik EK-2 Sağlık İzni Tablosu gereğince bir takvim yılında kazanılabilecek azami Şua İzni tavanı **30 gündür** (1.451–1.500 saat basamağı); fazlası yasal tavanla sınırlandırılır.
- **Aylık tabloda 40 saat çalışan personele neden 0 gün görünürken yıllık toplamda gün görünüyor?** Aylık ara satırlarda 50 saatin altındaki süreler için 1 gün yazılarak yıl içi toplamın şişmesini önlemek amacıyla yalnızca tam 50 saatlik dilimler gösterilir. Yıllık ve kümülatif Şua hakedişinde ise 32162 sayılı Yönetmelik EK-2 tablosu (0–50 saat arası 1 gün) esas alınır.
- **Yılı Kilitle butonunu neden kullanamıyorum?** Yıllık kilit işlemi tüm 12 dönemi ve o yıla ait Şua hakedişlerini kalıcı olarak dondurduğu için yalnızca **Admin** veya **Süpervizör** yetkisine sahip kullanıcılar tarafından çalıştırılabilir.

---

## 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması

Radyasyon çalışanlarının kişisel dozimetre ölçümlerini (TENMAK, RADAT ve Excel raporlarından aktarım, kalıcı eşleştirme hafızası), 2,0 mSv inceleme eşiği ve 20 / 50 mSv NDK yasal limit kontrollerini, çalışan beyanıyla bağlantılı 3 adımlı RD.F43 Doz Araştırma Formunu ve RKS net maruziyet değerlendirmesini yönetmenizi sağlar.

> **Yasal Güvence:** Radyasyon Güvenliği Yönetmeliği uyarınca mesleki etkin doz sınırı ardışık 5 yılın ortalamasında 20 mSv/yıl (5 yılda 100 mSv) ve herhangi bir tek yılda azami 50 mSv'dir; gebe çalışanlarda kalan gebelik boyunca fetüs dozu 1,0 mSv ile sınırlıdır ve 2,0 mSv inceleme aşımında 10 iş günü içinde RD.F43 formu düzenlenir.

### Kısa Reçete: Dozimetre Aktarımı, Eşik Alarmı ve RD.F43 Araştırması

**Kısa Reçete: Dozimetre Aktarımı, Eşik Alarmı ve RD.F43 Araştırması**

**1. İstenen Sonuç:**
Laboratuvardan gelen periyodik doz sonuçlarının doğru personellere işlenmesi, eşik aşımlarının yakalanması ve 10 iş günü içinde resmi RD.F43 dosyasının kapatılması.
**2. Yapılacak İşlem:**
**[Yeni Donem Raporu]** ile TENMAK, RADAT veya Excel dosyasını aktarın; Aksiyonlar sekmesinden **[İnceleme Başlat]** ile çalışan beyanı isteyin; beyan geldikten sonra **[Doz Araştırma Formu (RD.F43)]** üzerinden incelemeyi tamamlayıp **[Aksiyonu Kapat]** ile mühürleyin.
**3. Sistem Etkisi:**
İsim ve T.C. bazlı kalıcı eşleştirme hafızası sonraki aylarda eşleşmeleri otomatik tanır; 2,0 mSv ve 5,0 mSv eşiklerinde anlık uyarı üretilir; çalışan beyanı ile RKS değerlendirmesi tamamlanmadan dosya kapanmaz.

- **İnceleme Eşiği:** 2,0 mSv (10 İş Günü RD.F43)
- **Müdahale Düzeyi:** ≥ 5,0 mSv Kritik Alarm
- **Yıllık / 5 Yıl Sınır:** 20 mSv Ort. / 50 mSv Tek Yıl
- **Gebe Fetüs Sınırı:** 1,0 mSv (Kalan Gebelik)

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Laboratuvar içe aktarımı, eşik denetimi, birim rotasyonu izleme, çalışan beyanı kilidi ve 3 adımlı RD.F43 araştırma kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **[Yeni Donem Raporu] & Kalıcı Eşleşme Hafızası** (TENMAK, RADAT ve Excel Aktarımı) | Farklı laboratuvar yazımlarındaki doz sonuçlarını hatasız biçimde personellere işlemek ve mühürlü dosyaları korumak. | Sağlayıcı, ad-soyad ve T.C. bilgisinden kalıcı eşleştirme hafızası kurar; boş birimlere yapay klinik adı yazmaz ve kapalı/kilitli RD.F43 dosyası bulunan dönem ölçümlerinin üzerine yazılmasını engeller (ayrılan personelin geçmiş dozları yıllık raporlarda korunur). | Periyodik doz raporu geldiğinde. | RKS / Dozimetre Sorumlusu |
| **Periyodik ve Yıllık NDK Eşik Alarmları** (Tam Vücut, Göz, Ekstremite & Öncelik Sırası) | İnceleme düzeylerini ve ağır kümülatif yasal sınır aşımlarını maskelenmeden tespit etmek. | Önce gebe (1,0 mSv), tek yıl (50 mSv), 5 yıl (100 mSv), yıllık (20 mSv) ve stajyer (6 mSv) bloke edici NDK sınırlarını, ardından aylık 2,0 mSv inceleme, göz (2,0 mSv) ve ekstremite (50,0 mSv) eşiklerini denetler; negatif doz değerlerini reddeder. | Ölçüm eklendiğinde / aktarıldığında. | Sistem Motoru / RKS |
| **Geçmiş Ölçümler ve Birim Rotasyon Takibi** (5 Sütunlu Sağ Panel & Kokpit Kapsamı) | Personeldeki doz artışının hangi klinik birimde görev yaptığı dönemden kaynaklandığını KVKK sınırlarıyla izlemek. | Seçili personelin geçmiş ölçümlerini dönem, çalıştığı birim, derin/yüzey dozu ve durum bilgisiyle sıralar; kokpit kartları, grafikler ve aksiyon listeleri yalnızca yöneticinin yetkili olduğu birimleri gösterir. | Ölçüm satırı seçildiğinde / kokpitte. | RKS / Birim Sorumlusu |
| **[İnceleme Başlat] & Çift Yönlü Beyan Bildirimi** (8 Sütunlu Aksiyon Kokpiti) | Çalışanın savunması ve olay açıklaması alınmadan RKS dosyasının kapatılmasını önlemek. | Çalışanın Web Portal görev paneline Sayfa 1 beyan görevi düşürür; beyan yanıtı gelmeden taslak kaydı ve kapatma kilidi açılmaz. | Yeni eşik aşımı veya anomali açıldığında. | RKS / İlgili Personel |
| **3 Adımlı [Doz Araştırma Formu (RD.F43)]** (Akıllı Karar ve Doz Hesabı) | Odada unutulma, önlük üstü kullanım veya tıbbi tetkik artefaktını gerçek maruziyetten ayırmak. | Çalışan beyanı ve RKS saha değerlendirmesinden sonra aktif gebelik durumunu kontrol eder, teorik doz ile önlük düzeltmesini hesaplar; kişisel maruziyet bulunmayan vakalarda gereksiz çalışma kısıtı açmaz, gerçek aşımlarda kısıtı otomatik başlatır. | Çalışan beyanı geldikten sonra. | RKS / Kurum Amiri |
| **[Takip Ölçümü Planla] & [Birim Notu Ekle]** (Ara İzleme ve Saha Gözlemi) | Şüpheli vakalarda ara kontrol ve saha cihaz/ortam gözlemlerini kayıt altına almak. | Ara takip veya elektronik kişisel dozimetre görevi açar ve birim ortam koşullarını dosyaya ekler. | Araştırma sürecinde. | RKS / Dozimetre Sorumlusu |
| **Güvenlik Kilitli [Aksiyonu Kapat] & Yeniden Açma** (Denetim İzli Mühürleme & Silme Koruması) | Tutanak ve gerekçe eksikken vakanın kapatılmasını veya araştırmalı ölçümün silinmesini engellemek. | İptal dahil tüm kapanışlarda zorunlu gerekçe, RD.F43 kilidi ve göz/ekstremite/yıllık limit doğrulaması yapar; bağlı araştırma veya aksiyon kaydı olan ölçümlerin silinmesini engeller, geçici belgeleri görüntüleme sonrası otomatik temizler. | Dosya kapatılırken / revizyonda. | RKS / Kurum Amiri |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Tıbbi Tetkik Dozu veya Döngüsel Rozet Numarası Mesleki Limite mi İşlenir?**
> - **Yanlış Algı:** *"Personel o ay hasta olarak PET-BT çektirdiği için dozimetresinde 15 mSv çıktı; bu doz artık yıllık yasal limitini doldurmuş sayılır ve eşleştirmede dozimetre seri numarası kalıcı kimlik olarak kullanılır."*
> - **Gerçek Sistem Mantığı:** **İkisi de doğru değildir.** NDK mevzuatına göre çalışan hasta sıfatıyla aldığı tıbbi tetkik dozları mesleki maruziyet sayılmaz; RD.F43 formunda tıbbi tetkik veya alanda unutulma seçilerek RKS net doz hesabıyla düşülür. Ayrıca dozimetre kasetleri her periyotta rotasyona girdiği için kalıcı eşleştirme asla kaset numarasına göre değil, sağlayıcı laboratuvar, personel adı-soyadı ve T.C. kimlik bilgisine göre yapılır.

### Süreç Akış Şeması

1. **Ölçüm Aktarımı ve Eşik Denetimi:** Laboratuvar raporu veya tekil ölçüm işlenir; 2,0 mSv inceleme düzeyi, 5,0 mSv müdahale düzeyi veya yıllık/gebe limitleri aşıldığında 10 iş günü sayacı ve alarm başlar.
2. **Çift Yönlü Beyan ve RD.F43:** İnceleme başlatıldığında çalışan Web Portalından Sayfa 1 beyanını gönderir; ardından RKS saha incelemesini ve 3. adımdaki karar motoru analizini tamamlar.
3. **Karar ve Resmi Kapatma:** Artefakt vakalarında net doz ayrıştırılır, gerçek aşımlarda DÖF ve gerekirse çalışma blokajı uygulanarak resmi Word/PDF RD.F43 tutanağıyla dosya mühürlenir.

### Adım Adım İşlem Rehberi

#### 1. Laboratuvar Dosyası İçe Aktarma ve Eşleşme Hafızasını Kullanma

1. **[Kişisel Dozimetre Takibi]** ekranında araç çubuğundaki **[Yeni Donem Raporu]** butonuna tıklayın; format olarak **Otomatik Algıla**, **RADAT**, **TENMAK / NDK** veya **Genel Excel / CSV** seçip **[Dosya Seç...]** ile raporu yükleyin ve **[İleri]**'ye basın.
2. Önizleme tablosunda eşleşmeyen satır varsa satıra çift tıklayarak (veya **[Seçiliyi Personelle Eşle]** ile) doğru çalışanı arayıp seçin; kalıcı hafıza onay kutusunu işaretleyerek **[Bu Personelle Eşle]**'ye basın (kurum dışı veya ayrılmış kişiler için **[Eşleşmeyenleri Excel Olarak İndir]** ile listeyi alabilirsiniz).
3. Son adımda **[Tamamla]** butonuna basarak tüm ölçümleri kümülatife işleyin ve eşik aşımı varsa otomatik aksiyon kaydını oluşturun.

#### 2. Manuel / EPD Ölçümü Ekleme ve Geçmiş Birim Rotasyonunu İzleme

1. Münferit veya elektronik kişisel dozimetre (EPD) sonucu girmek için **[Ölçüm Ekle]** butonuna tıklayın; personeli, dozimetre tipini (Tüm Vücut, Yüzük, Göz Lensi, EPD) ve derin/yüzey dozlarını girip **[Kaydet]**'e basın (2,0 mSv aşımında sistem anında uyarı verir).
2. Ölçümler tablosunda herhangi bir satıra tıkladığınızda sağ panelde personelin geçmiş ölçümleri o dönemde görev yaptığı klinik birim bilgisiyle birlikte görüntülenir.

#### 3. Çalışan Beyanı ve 3 Adımlı RD.F43 Araştırmasını Tamamlama (Masaüstü ve Web)

1. **Aksiyonlar** sekmesinde inceleme bekleyen kaydı seçip **[İnceleme Başlat]** butonuna tıklayın; ilgili personelin Web Portalı görev ekranına Sayfa 1 beyan bildirimi otomatik iletilir ve durum **BEYAN BEKLİYOR** olur.
2. Personel Web Portalından kendi çalışma rejimi, dozimetre takış konumu ve olay beyanı sorularını yanıtladığında masaüstü bildirim çekmecesine uyarı düşer; bu sırada RKS isterse **[Takip Ölçümü Planla]** ve **[Birim Notu Ekle]** ile ek izleme kaydı açabilir.
3. RKS, **[Doz Araştırma Formu (RD.F43)]** butonuna basarak 3 adımlı sihirbazda Sayfa 1 yanıtlarını doğrular, Sayfa 2 saha sorularını doldurur ve 3. adımda gerekirse **[Hesapla]** ile teorik dozu hesaplar; **[Önerilen Kararı ve Bulguları Forma Aktar]** butonuna tıklayıp gerekirse **[DÖF Kaydı Aç / Yönet]** üzerinden DÖF bağlayarak **[PDF Raporu İndir]** / Word çıktısı alır ve **[Aksiyonu Kapat]** butonuna basar (sonradan düzeltme gerekirse rapor penceresinden **[Düzeltme Yap / Formu Yeniden Aç]** kullanılır).
4. **Web Portalı Kişisel Doz Karnesi:** Çalışanlar ve yöneticiler tarayıcıdan 20 / 50 mSv limitlerine olan mesafeyi gösteren radyal göstergeyi, 12 aylık doz trendini ve kendi ölçüm geçmişlerini anlık izleyebilir.

### Sıkça Sorulan Sorular (SSS)

- **Dozimetre raporu aktarırken bazı personeller eşleşmezse sonraki aylarda tekrar mı seçmem gerekir?** Hayır. Eşleşmeyen satıra çift tıklayıp açılan personel seçim penceresinde eşleştirmeyi hafızaya kaydet kutusunu işaretlediğinizde, sistem sağlayıcı yazımı ile personeli kalıcı olarak eşleştirir ve sonraki dönemlerde otomatik tanır. Kurum personeli olmayan satırlar ise **[Eşleşmeyenleri Excel Olarak İndir]** ile dışa aktarılabilir.
- **TENMAK veya RADAT dışında farklı bir dozimetri laboratuvarıyla çalışıyorsak nasıl aktarabiliriz?** Raporu standart Excel sütunlarına göre düzenleyip **Genel Excel / CSV** seçeneğiyle aktarabilirsiniz. Laboratuvarınızın özgün rapor formatını doğrudan tanıtmak isterseniz örnek bir dosyayı destek ekibiyle paylaşmanız yeterlidir.
- **Kaydedilmiş bir dozimetri ölçümü yanlışsa neden doğrudan silinip yok edilemiyor?** NDK mevzuatı ve denetim izi bütünlüğü gereğince resmi doz kayıtları iz bırakmadan değiştirilemez. Düzeltme gerektiğinde tutanak veya kayıt üzerindeki gerekçeli düzeltme mekanizması kullanılır ve değişiklik denetim izine işlenir.
- **10 iş günü yasal geri sayım rozeti kırmızıya dönerse sistem işlem engeli koyar mı?** Sistem doğrudan teknik çalışma kilidi koymaz; ancak NDK açısından 10 iş günü aşımı kritik gecikme sayıldığı için RKS panosunda yüksek öncelikli alarm üretilir ve denetim izinde gecikme kaydı tutulur.

---

## 13. Sağlık Muayeneleri ve Periyodik Takip

Radyasyon çalışanlarının işe giriş ve periyodik sağlık gözetimini 2 aşamalı klinik iş akışı (Ön Hazırlık ve Sevk ile Hekim Kararı ve Arşivleme), 13.04.2023 / 32162 sayılı Yönetmelik EK-1 uyumlu iki sayfalık A4 PDF sevk belgesi, 3 uzmanlık branşı değerlendirmesi, 30 gün erken uyarısı ve şifreli evrak kasası ile yönetmenizi sağlar.

> **Mevzuat Güvencesi:** 32162 sayılı Yönetmelik EK-1 Tıbbi Gözetim Belgesi standardı gereğince Sayfa 2 poliklinik tabloları hekim muayenesinde elle kaşelenip imzalanmak üzere tamamen boş üretilir; rutin muayenede Uygun Değil görüşü doğrudan nöbet silmez, kalıcı kısıt yalnızca resmi Sağlık Kurulu Heyet Raporu ile tanımlanır.

### Kısa Reçete: Ön Hazırlık Sevk ve Hekim Kararı Akışı

**Kısa Reçete: Ön Hazırlık Sevk ve Hekim Kararı Akışı**

**1. İstenen Sonuç:**
Personelin periyodik veya Şua muayenelerinin zamanında sevk edilmesi, resmi EK-1 formunun üretilmesi ve poliklinik kararlarının şifreli kasada arşivlenmesi.
**2. Yapılacak İşlem:**
**[Yeni Sevk Başlat]** ile maruziyet, anamnez ve 12 EK-1 belirtisini kaydedip **[EK-1 Formu (A4)]** belgesini yazdırın; Göz, Dahiliye ve Dermatoloji sonuçları döndüğünde **[Hekim Kararı]** ekranından branş bulgularını, kaşe onaylarını ve taranmış imzalı raporu kaydedin.
**3. Sistem Etkisi:**
Sevk anında hekim ve çalışana bildirim gider; Muayene Türüne göre 6 veya 12 aylık sonraki kontrol tarihi otomatik önerilir; süreye 30 gün kala sarı, süre dolduğunda kırmızı uyarı verilir.

- **Periyodik Muayene:** 12 Aylık Döngü
- **Şua Muayenesi:** 6 Aylık Ara Kontrol
- **Branş Protokolü:** Dahiliye, Göz, Cilt
- **Erken Uyarı:** 30 Gün Kala Alarm

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*İki aşamalı klinik muayene süreci, resmi EK-1 belgesi, periyot hesabı ve heyet kısıt ayrımı kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **[Yeni Sevk Başlat] & 12 Maddelik EK-1 Anamnez** (1. Aşama: Ön Hazırlık ve Sevk) | Poliklinik sevki öncesinde çalışanın maruziyet geçmişini ve 12 öznel belirtisini standart biçimde almak. | 2 adımlı sevk penceresinde maruziyet tipi, son 1 yıl öyküsü ve 12 belirti girilir; hekim ve çalışana anında sevk bildirimi iletilir. | Periyodik kontrol veya sevk başlarken. | İşyeri Hekimi / İSG / RKS |
| **[EK-1 Formu (A4)] Resmi Sevk Belgesi** (Sayfa 2 Dürüst Boş & Doğru Karar Eşlemesi) | 32162 sayılı Yönetmelik EK-1 Tıbbi Gözetim Belgesini poliklinik imzasına hazır ve hatasız karar işaretiyle basmak. | Sayfa 1'e künye, çalışan beyanı ve hekimin verdiği nihai karar (Uygun, Koşullu Uygun veya Uygun Değil) tam karşılığıyla işaretlenir; Sayfa 2'deki hemogram, cilt ve lens kutularına yapay işaret konulmadan hekimin elle doldurması için temiz ve boş sunulur, klinik bulgular yetkisiz rollerde maskelenir. | Sevk belgesi ve PDF üretildiğinde. | İşyeri Hekimi / İSG / RKS |
| **[Hekim Kararı] & 3 Branş İmza Protokolü** ([Hekim Kaşesi ve İmzası Var]) | Dahiliye, Göz ve Dermatoloji sonuçlarını toplayıp nihai uygunluk kararını mevzuata uyumlu tescillemek. | Tüm branşların aynı gün bitmesi gerekmez; en az bir branş sonucuyla kayıt açılıp diğer sonuçlar geldikçe güncellenir, genel uygunluk kararı en kısıtlayıcı branş sonucuna göre korunur ve onay kuyruğundan dönen talepler hekimin mevcut kararını ezmez. | Poliklinik sonuçları döndüğünde. | İşyeri Hekimi / RKS |
| **Otomatik Periyot & 30 Gün Erken Uyarı** (Ayrı Periyodik 12 Ay / Şua 6 Ay Takibi) | Yıllık ve Şua muayenelerinin birbirini gizlemeden zamanında planlanmasını sağlamak. | Henüz hekim kararı tamamlanmamış sevk kayıtları ile işe giriş muayenelerine otomatik +1 yıl tarih atamaz; yalnızca tamamlanan muayenelerde türe göre 6 veya 12 ay sonrasını önerir, 12 aylık periyodik ve 6 aylık Şua muayenelerini gecikme ekranlarında ayrı takip eder. | Karar kaydı ve liste yenilemede. | Sistem Otomatik / İSG |
| **İleri Tetkik vs Resmi Heyet Raporu Ayrımı** (Çalışma Kısıtı Güvencesi) | Kesinleşmemiş şüpheli bulgularda çalışanın nöbet ve görev düzenini erken kilitlememek. | Rutin muayenede Uygun Değil görüşü personeli ileri tetkike yönlendirir ve bir silme işleminde çalışma kısıtı en güncel tamamlanmış muayeneye göre yeniden senkronize edilir; çalışma muafiyeti Nöbet Ayarları modülünden yönetilir. | Şüpheli klinik bulguda / revizyonda. | İşyeri Hekimi / Yönetici |
| **Şifreli Evrak Kasası, KVKK Maskeleme & Erişim İzi** (AES-256 & Birim Kapsamı) | Özel nitelikli sağlık verilerini ve ıslak imzalı EK-1 taramalarını yalnızca yetkili rollere ve birim kapsamına açmak. | Yüklenen rapor şifreli kasada depolanır ve yalnızca veritabanı işlemi onaylandıktan sonra eski kopya temizlenir; klinik anamnez/notlar yalnızca İşyeri Hekimi, RKS ve yetkili yöneticilere gösterilip her görüntüleme erişim günlüğüne kaydedilir, geçici PDF dosyaları açım sonrası silinir. | Evrak yükleme, raporlama ve görüntülemede. | Yetkili Sağlık / RKS / Denetçi |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Poliklinikte "Uygun Değil" Seçilince Nöbetler Otomatik Silinir mi ve 3 Branş Aynı Gün Zorunlu mu?**
> - **Yanlış Algı:** *"Hekim muayenede Uygun Değil seçeneğini işaretlediği anda sistem personelin tüm nöbetlerini siler; ayrıca 3 branş sonucu aynı gün çıkmadan muayene formu kaydedilemez."*
> - **Gerçek Sistem Mantığı:** **İkisi de yanlıştır.** Rutin klinik takip ekranında Uygun Değil görüşü verilmesi personelin ilgili uzman kliniğe ileri tetkike sevk edilmesini sağlar; çalışamayacağına dair resmi Sağlık Kurulu Heyet Raporu kesinleştiğinde çalışma muafiyeti Modül 07 üzerinden tanımlanır. Ayrıca 3 branşın aynı gün bitmesi gerekmez; en az bir branş sonucu girilerek kayıt kaydedilebilir ve diğer branşlar tamamlandıkça güncellenebilir.

### Süreç Akış Şeması

1. **Ön Hazırlık ve Sevk:** Çalışan maruziyeti, anamnez ve 12 EK-1 belirtisi girilerek sevk açılır; 2. sayfası boş bırakılmış resmi EK-1 A4 PDF sevk belgesi üretilir ve bildirim gönderilir.
2. **Poliklinik ve Hekim Kararı:** Göz, Dahiliye ve Dermatoloji branşlarının bulguları, hekim kaşe onayları ve genel uygunluk kanaati işlenir; gerekirse sonraki muayene tarihi erkene çekilebilir.
3. **Heyet Kısıtı ve Arşivleme:** Yalnızca resmi Sağlık Kurulu raporuyla kesinleşen engeller Modül 07 çalışma kısıtlarına aktarılır; ıslak imzalı EK-1 taraması şifreli evrak kasasında saklanır.

### Adım Adım İşlem Rehberi

#### 1. Yeni Sevk Başlatma ve Resmi EK-1 A4 Formunu Üretme (1. Aşama)

1. Sol menüden **[Sağlık Muayeneleri]** ekranını açın ve araç çubuğundaki **[Yeni Sevk Başlat]** butonuna tıklayın.
2. İlk sayfada personeli, muayene türünü (İşe Giriş, Radyasyon Çalışanı, Periyodik veya 6 aylık Şua Muayenesi), radyasyon maruziyet tipini ve son 1 yıllık anamnez sorularını seçip **[İleri: Belirtiler]** butonuna basın.
3. 12 maddelik EK-1 öznel belirti taramasını doldurun (sorun yoksa **[Tümünü 'YOK' Olarak İşaretle]** kullanabilirsiniz), gerekiyorsa **[Matbu EK-1 Sevk Formu Yazdır]** ile çıktıyı alın ve **[Sevki Başlat ve Kaydet]** butonuna tıklayın (sonradan liste üzerinden **[EK-1 Formu (A4)]** ile de indirebilirsiniz).

#### 2. Poliklinik Sonuçlarını ve Hekim Kararını Kaydetme (2. Aşama)

1. Poliklinik muayenelerinden kaşeli EK-1 formu döndüğünde ilgili satırı seçip **[Hekim Kararı]** butonuna tıklayın (istersek **[Ön Hazırlık / Sevk Verilerini Gör]** ile ilk beyana göz atabilirsiniz).
2. **Dahiliye**, **Göz** ve **Dermatoloji** bölümlerine branş sonuçlarını girin ve tamamlanan branşlar için **[Hekim Kaşesi ve İmzası Var]** kutularını işaretleyin (en az bir branş sonucu seçili olmalıdır).
3. Genel muayene kararını (Uygun, Koşullu Uygun veya Uygun Değil), hekim tavsiyelerini ve gerekirse manuel erkene çekilmiş **Sonraki Muayene Tarihi** alanını kontrol edin; taranmış ıslak imzalı belgeyi **[Seç]** ile ekleyip **[Muayeneyi Onayla ve Kapat]** butonuna basın.

#### 3. Geçmiş İnceleme, Revizyon Takibi ve Web Portalı Görünümü

1. Bir çalışanın önceki yıllardaki tüm muayene kayıtlarını karşılaştırmak için satırı seçip **[Geçmiş]** butonuna tıklayın; güncellenen veya silinen kayıtların eski durumlarını görmek için tabloda satıra sağ tıklayıp **Değişiklik Geçmişi** seçeneğini açın.
2. **Web Portalı Sağlık Ekranı:** Çalışanlar kendi sağlık karnelerinden sonraki kontrol gün sayısını ve sevk bildirimlerini takip ederken, EK-1 çalışan beyanı ön formunu tarayıcıdan doldurabilir; yöneticiler ise Sağlık Dashboard üzerinden branş dağılımını, muayene uyum yüzdesini ve aylık yığılma tahminini izler.

### Sıkça Sorulan Sorular (SSS)

- **Bir muayenede "Uygun Değil" seçildiğinde personel hemen nöbetten çıkarılır mı?** Hayır. Buradaki değerlendirme rutin klinik gözetim kaydıdır. Uygun Değil kanaati personelin ilgili branş kliniğine ileri tetkik için sevk edilmesini sağlar; çalışamayacağı resmi Sağlık Kurulu Heyet Raporu ile kesinleştiğinde nöbet ve çalışma muafiyeti Modül 07 üzerinden uygulanır.
- **Üç branş (Göz, Dahiliye, Cilt) aynı gün tamamlanamazsa kaydı bekletmek zorunda mıyım?** Hayır. En az bir branş sonucunun girilmiş olması kaydı oluşturmak için yeterlidir. Diğer poliklinik sonuçları geldikçe ilgili satırı **[Hekim Kararı]** üzerinden açıp güncelleyebilirsiniz.
- **Sistem sonraki muayene tarihini 12 ay sonraya attı; hekim 3 ay sonraya ara kontrol isterse değiştirebilir mi?** Evet. Sistem muayene türüne göre 6 veya 12 aylık varsayılan tarihi otomatik önerir; ancak hekimin tavsiyesi doğrultusunda sonraki muayene tarihi alanı manuel olarak daha erken bir güne çekilebilir.
- **Silinmiş veya sonradan değiştirilmiş bir sağlık muayenesini denetimde nasıl kanıtlarım?** Muayene listesinde satıra sağ tıklayıp **Değişiklik Geçmişi** menüsünü açtığınızda, kaydın önceki verileri, işlemi yapan kullanıcı adı ve kesin tarih/saat damgası değiştirilemez denetim izi olarak listelenir.

---

## 14. Ortam Dozu ve Kroki Haritası

Kurumun mimari kat planları (vektörel PDF veya yüksek çözünürlüklü görsel) üzerinde radyasyon izleme noktalarını, çoklu oda sınırlarını ve sabit cihaz konumlarını canlı haritalandırır; kalibrasyon süresi geçerli ölçüm cihazlarıyla doz hızı kayıtları alır, limit aşımında otomatik olay ve DÖF başlatır, kapı QR pasaportu ve SKS 6.1 Excel raporu üretir.

> **Kalibrasyon ve Denetim Kilidi:** Kalibrasyon geçerlilik süresi dolmuş bir radyasyon ölçüm cihazıyla resmi ölçüm kaydedilemez; üzerinde en az bir kayıtlı ölçüm bulunan izleme noktası ise denetim izi bütünlüğü için silinemez.

### Kısa Reçete: Kroki Üzerinde Ortam Dozu, QR ve Otomatik DÖF

**Kısa Reçete: Kroki Üzerinde Ortam Dozu, QR ve Otomatik DÖF**

**1. İstenen Sonuç:**
Radyasyon alanlarının mimari kroki üzerinde sınıflandırılması, kalibrasyonlu cihazla periyodik ölçüm alınması ve limit aşımlarında anında kalite aksiyonu başlatılması.
**2. Yapılacak İşlem:**
**[Kroki Yükle]** ile kat planını ekleyin; **[Oda Alanını Belirle]** ve **[Yeni Nokta Ekle]** ile alan eşiklerini konumlandırın; **[Ölçüm Kaydet]** ile kalibre cihazdan okunan dozu girin; saha baskıları için **[Karekod / Etiket Bas]** ve denetimler için **[SKS Raporu (Excel)]** butonlarını kullanın.
**3. Sistem Etkisi:**
Kat planı döndürmesinde pin ve oda sınırları otomatik taşınır; eşik aşımlarında pin sarıya/kırmızıya döner ve otomatik Olay Bildirimi ile DÖF açılır; kapı QR kodundan mobil cihazla sahadan ölçüm girilebilir.

- **Denetimli Alan:** Uyarı 2,50 / Limit 10,00 µSv/h
- **Gözetimli Alan:** Uyarı 1,00 / Limit 2,50 µSv/h
- **Halka Açık Alan:** Uyarı 0,25 / Limit 0,50 µSv/h
- **Baskı & Çıktı:** 300 DPI QR & SKS Excel

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Mimari kat planı yönetimi, NDK alan eşikleri, kalibrasyon emniyet kilidi, otomatik DÖF ve QR baskı kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **[Kroki Yükle], Çoklu Oda Sınırları & 90° Döndürme** ([Sola Döndür] / [Sağa Döndür] & Birim Kapsamı) | Kat planını özgün formatıyla şifreli kasada saklamak ve birim sorumlularını yalnızca kendi klinikleriyle sınırlandırmak. | PDF veya görsel plan özgün dosya uzantısı ve benzersiz önbellek adıyla şifreli kasada saklanır; 90° döndürmede pin ve oda sınırları otomatik taşınır, tüm kroki ve nokta değişiklikleri birim yetki kapsamı ve onay kuyruğu denetiminden geçer. | Plan ekleme, güncelleme ve revizyonda. | RKS / Birim Sorumlusu / Sistem Yöneticisi |
| **[Yeni Nokta Ekle] & NDK Alan Eşikleri** (Ölçüm Geçmişi Silme Engeli) | Denetimli, gözetimli ve halka açık alanları yasal limitlerle izleyip geçmişi korumak. | Alan sınıfına göre otomatik uyarı/limit eşiği atar; üzerinde kayıtlı ölçüm bulunan noktaların silinmesini emniyet kilidiyle engeller ve nokta değişikliklerini onay kuyruğunda izler. | Nokta tanımlama ve silmede. | RKS / Sistem Yöneticisi |
| **[Pinler Kilitli] & Sabit Cihaz Konumları** (İnteraktif Kroki Tuvali) | Haritada gezinirken noktaların kazara sürüklenip yerinden kaymasını önlemek. | Varsayılan olarak koordinatları kilitler; taşıma modu açıldığında izleme pinleri ve sabit cihaz konumları düzenlenebilir. | Kroki üzerinde çalışılırken. | Yetkili Kullanıcı |
| **[Ölçüm Kaydet] & Zorunlu 1 Yıllık Kalibrasyon Kilidi** (Geçerli Survey Meter & Tutarlı Eşik) | Kalibrasyon tarihi eksik veya süresi 1 yılı aşmış cihazlarla ve hatalı doz/eşik değerleriyle resmi ölçüm girilmesini önlemek. | Ölçüm tarihi ile cihazın son kalibrasyon tarihi arasındaki 1 yıllık geçerliliği hem ekranda hem sunucuda zorunlu doğrular; kalibrasyonu eksik veya süresi dolmuş cihazı, negatif doz/arka plan değerlerini ve uyarı eşiği limit eşiğini aşan kayıtları reddeder. | Her doz ölçümü kaydında ve güncellemede. | RKS / Fizikçi / Tekniker |
| **Limit Aşımında Otomatik Olay & DÖF** (3 Kat Aşımda NDK Bayrağı) | Sınır aşımı tespit edildiği anda kalite ve zırhlama inceleme sürecini bekletmeden başlatmak. | Limit aşıldığında bildiren personel bilgisiyle Modül 15 üzerinde otomatik olay ve düzeltici faaliyet açar; limitin 3 katı aşılırsa NDK bildirim bayrağını işaretler. | Ölçüm limit dışı çıktığında. | Sistem Motoru / RKS |
| **[Karekod / Etiket Bas], [SKS Raporu (Excel)] & NDK RKP Sihirbazı** (KLV-014 Kuruluş Ayarları & Talimat Sıfırlama) | Kapı QR pasaportu, SKS 6.1 Excel çıktısı ve NDK Radyasyondan Korunma Programı (RKP) dosyasını eksiksiz üretmek. | Tekil/toplu 300 DPI QR etiket arşivi ve birim kapsamlı SKS Excel tablosu üretir; NDK KLV-014 RKP sihirbazında uygulama yeri, görev ve yetkili iletişim alanlarını tam kaydeder, standart talimat sıfırlamasında yalnızca ilgili madde kodunu varsayılana döndürür ve geçici arşiv dosyasını yükleme sonrası temizler. | Etiket baskısı, denetim ve RKP üretiminde. | RKS / Kalite Birimi |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Kalibrasyonu Geçmiş Cihazla Acil Ölçüm Girilebilir mi ve Ölçümlü Nokta Silinebilir mi?**
> - **Yanlış Algı:** *"Survey meter kalibrasyonu birkaç gün önce dolmuş ama acil bir durumda onunla ortam ölçümü kaydedebiliriz; ayrıca kat planı değişince eski ölçümlü noktayı listeden doğrudan silebiliriz."*
> - **Gerçek Sistem Mantığı:** **Her iki işlem de sistem tarafından engellenir.** NDK ve SKS 6.1 kuralları gereğince kalibrasyon süresi dolmuş hiçbir cihazla sisteme resmi ölçüm girilemez; cihazın önce TENMAK İkincil Standart Dozimetri Laboratuvarı gibi yetkili bir merkezde kalibre edilip tarihinin güncellenmesi gerekir. Üzerinde geçmiş ölçüm verisi bulunan noktalar da denetim kanıtını korumak için fiziksel olarak silinemez.

### Süreç Akış Şeması

1. **Kroki ve Nokta Kurulumu:** Birime PDF veya görsel kat planı yüklenir; oda sınırları çizilir, sabit cihazlar ve alan sınıfı eşikli izleme noktaları konumlandırılıp kapı QR etiketleri basılır.
2. **Kalibrasyon Kilidi ve Ölçüm:** Saha veya masaüstünden doz girişi yapılırken cihazın kalibrasyon tarihi denetlenir; tarihi geçmiş cihazlarla kayıt engellenir.
3. **Otomatik Olay, DÖF ve Rapor:** Normal ve uyarı ölçümleri kroki pinlerini boyar; limit aşımında ise otomatik Olay Bildirimi ve DÖF açılarak tüm geçmiş SKS 6.1 Excel raporuna yansıtılır.

### Adım Adım İşlem Rehberi

#### 1. Kat Planı Yükleme, Oda Sınırı Çizme ve Ölçüm Noktası Ekleme

1. Sol menüden **[Ortam Dozu ve Kroki Haritası]** ekranını açıp birimi seçin ve **[Kroki Yükle]** butonuyla vektörel PDF veya yüksek çözünürlüklü kat planını bağlayın (yön ters ise **[Sola Döndür]** / **[Sağa Döndür]** ile hizalayın, **[Ekrana Sığdır]** ile görünümü ortalayın).
2. **[Oda Alanını Belirle]** butonuna basarak harita üzerinde odaların zırhlı sınırlarını çizin; ardından **[Yeni Nokta Ekle]** ile ölçüm noktasını ve NDK alan sınıfını (Denetimli, Gözetimli veya Halka Açık Alan) tanımlayın.
3. Noktaların yerini düzenlemek için **[Pinler Kilitli]** düğmesini açıp sürükleyin ve yerleşim bittiğinde tekrar kilitleyin.

#### 2. Kalibre Cihazla Ortam Dozu Ölçümü Kaydetme

1. Üst çubuktan **[Ölçüm Kaydet]** butonuna tıklayın (veya kroki üzerinde ilgili nokta pinine çift tıklayın).
2. Seçilen nokta için ölçüm tarihini, ölçülen doz hızını, doğal arka plan (fon) değerini, ölçümü yapan personeli ve kalibrasyonu geçerli ölçüm cihazını seçip **[Ölçümü Kaydet ve Haritayı Güncelle]** butonuna basın.
3. Limit aşımı varsa sistem uyarı vererek Olay Bildirimi (Modül 15) altında otomatik kayıt ve DÖF başlatır; ölçümleri gözden geçirmek için **Periyodik Ölçüm Geçmişi** sekmesini kullanın.

#### 3. Kapı QR Pasaportu, Toplu Baskı Paketi, SKS Excel ve Saha Mobil Akışı

1. Oda giriş kapısı veya tekil nokta etiketi için **[Karekod / Etiket Bas]** menüsünden etiketi üretin (**[PNG Olarak Kaydet]** veya **[Yazıcıya Gönder]**); tüm noktaları matbaa ve tabela baskısı için toplu indirmek isterseniz toplu QR paketi seçeneğiyle 300 DPI etiketler, baskı rehberi ve icmal listesini içeren arşivi dışa aktarın.
2. Denetimler öncesinde **[SKS Raporu (Excel)]** butonuyla kurum antetli ve renk kodlu resmi denetim tablosunu oluşturun.
3. **Web ve Mobil Saha Kullanımı:** Saha personeli kapıdaki QR kodu telefon veya tabletle okutarak o odanın noktalarına sahadan doğrudan doz girişi yapabilir; yöneticiler ise Web Portal haritasında çoklu oda sınırlarını ve aylık doz trend grafiklerini canlı izleyebilir.

### Sıkça Sorulan Sorular (SSS)

- **Mimari kat planı olarak vektörel PDF dosyası yükleyebilir miyim?** **Evet.** Kat planı olarak PNG ve JPG gibi görsellerin yanı sıra doğrudan vektörel PDF dosyaları da yüklenebilir. PDF dosyasının ilk sayfası yüksek netlikte kroki tuvaline aktarılır ve yakınlaştırmada bozulma olmaz.
- **Kat planını döndürdüğümde üzerindeki pinler ve oda sınırları kaybolur mu?** Hayır. **[Sola Döndür]** veya **[Sağa Döndür]** uygulandığında sistem harita üzerindeki tüm ölçüm pinlerinin, sabit cihazların ve oda sınırlarının koordinatlarını yeni açıya göre otomatik hesaplayıp taşır.
- **Üzerinde ölçüm geçmişi bulunan bir izleme noktasını neden silemiyorum?** SKS 6.1 ve NDK kalite izlenebilirliği gereğince üzerinde en az bir adet kayıtlı doz ölçümü bulunan noktaların silinmesi sistem tarafından engellenir; plan değiştiğinde geçmiş kayıtların korunması için nokta pasif veya taşınmış olarak yönetilmelidir.
- **Cihaz kalibrasyon uyarısı aldığımda ölçüm girişini nasıl açabilirim?** Ölçüm aletinin yetkili kalibrasyon merkezinden (örneğin TENMAK İkincil Standart Dozimetri Laboratuvarı) alınan yeni kalibrasyon belgesini ve güncel bitiş tarihini Cihaz Yönetimi ekranından işledikten sonra ölçüm kaydı anında açılır.

---

## 15. Olay Bildirimi ve DÖF (CAPA)

Radyasyon alanlarında oluşan kazaları, ramak kala olayları ve uygunsuzlukları SKS 6.1 uyumlu 3 adımlı bildirim sihirbazıyla (anonim seçenekli) kayıt altına alır; 1 ve 3 iş günlük NDK yasal süre takibini, olaya bağlı veya bağımsız DÖF yönetimini, açık DÖF kapatma emniyet kilidini ve tek sayfalık antetli resmi PDF tutanak çıktısını yönetmenizi sağlar.

> **Yasal Güvence:** Anonim ramak kala ve olay bildirimleri SKS 6.1 güvenlik kültürü gereği resmi olarak geçerlidir; tamamlanmamış açık DÖF faaliyeti bulunan hiçbir olay dosyası kapatılamaz.

### Kısa Reçete: Olay Bildirimi, DÖF Takibi ve Resmi Tutanak

**Kısa Reçete: Olay Bildirimi, DÖF Takibi ve Resmi Tutanak**

**1. İstenen Sonuç:**
İstenmeyen radyolojik olayların ve ramak kala durumların yasal NDK süreleri kaçırılmadan incelenmesi, düzeltici önlemlerin tamamlanması ve tek sayfa resmi tutanakla mühürlenmesi.
**2. Yapılacak İşlem:**
**Yeni Olay Bildirimi** sekmesinden olayı kaydedin (veya doğrudan **[Yeni DÖF Ekle]** açın); **[İncele ve DÖF Yönet]** üzerinden 4 adımlı inceleme penceresinde sorumlu atayın, NDK bildirimini işleyin ve tüm DÖF'ler bitince **[Olayı Kapat ve Tamamla]** ile **[Resmi Tutanağı Yazdır / PDF]** adımlarını çalıştırın.
**3. Sistem Etkisi:**
Hafta sonu ve resmi tatiller hariç tutularak 1 veya 3 iş günlük NDK süresi geri sayılır; cihaz kaynaklı olaylarda kurum içi arıza istatistik kaydı açılır; açık DÖF varken dosya kapatma engellenir.

- **NDK Bildirim Süresi:** Acil 1 İş Günü / Diğer 3 İş Günü
- **Bildirim Sihirbazı:** 3 Adım (Anonim Destekli)
- **İnceleme Akışı:** 4 Adımlı Doğal Süreç
- **Kalite Kilidi:** Açık DÖF Varken Kapanmaz

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Anonim bildirim, NDK yasal iş günü sayacı, bağımsız DÖF, açık DÖF kapatma kilidi ve resmi PDF tutanağı kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **3 Adımlı Bildirim & [Anonim Bildirim Yap]** (Yeni Olay Bildirimi Sihirbazı) | Kaza ve ramak kala olaylarını çalışanı çekindirmeden yalnızca ilgili birime ve doğru detay açıklamasıyla kaydetmek. | Tarih, birim, şiddet, kategori, alt detay ve kök nedenleri toplar; ek açıklamayı yalnızca açıklama gerektiren seçeneğe yazar, anonim işaretlenirse kimliği gizler ve kokpit/raporlarda yalnızca yetkili birim kapsamını gösterir. | Olay veya ramak kala anında. | Tüm Personel |
| **NDK Süre Sayacı ve [NDK Bildir]** (1 İş Günü / 3 İş Günü & Bildirim No) | Radyolojik kazalarda NDK'ya yasal sürede bildirim yapılmasını ve son tarih ile evrak numarasının korunmasını sağlamak. | Hafta sonu ve resmi tatilleri dışarıda bırakarak acil kazada 1 iş günü, diğer olaylarda 3 iş günü geri sayar; inceleme ekranında kalan günü ve gecikme durumunu canlı gösterir, bildirim yapıldığında son bildirim tarihini bozmadan NDK bildirim numarasını tarihçeye işler. | Radyolojik olay kaydında ve bildirimde. | RKS / Birim Sorumlusu |
| **Yetkili Sorumlu Havuzu ve Otomatik Atama** (2. Adım: İnceleme, Yetki & Onay Koruması) | İncelemeyi olayın yaşandığı birimin sorumlusuna veya RKS'ye devretmek ve salt-okunur rolleri kilitlemek. | Birim sorumlusunu öncelikli önerir ve seçimi sonraki adıma geçerken otomatik kaydeder; satır seçildiğinde salt-okunur kullanıcılara kapalı olan aksiyon butonlarını yeniden açmaz ve onay gerektiren rollerin işlemlerini merkezi onay kuyruğuna yönlendirir. | İnceleme süreci başlatıldığında. | Yönetici / RKS |
| **[Yeni DÖF Ekle] (Bağlı / Bağımsız Faaliyet)** (Araç Çubuğu & İnceleme 3. Adım) | Olaya bağlı önlemlerin yanında kurum geneli önleyici kalite iyileştirmeleri de açabilmek. | Açık bir olaya bağlanabilir veya bağımsız seçilir; Planlandı, Devam Ediyor, Tamamlandı ve İptal aşamalarıyla yönetilir, cihaz arızası içeren olayda kurum içi arıza istatistik kaydı oluşturur. | DÖF planlanırken ve güncellenirken. | RKS / Kalite Sorumlusu |
| **Açık DÖF Kapatma & İptal Emniyet Kilidi** ([Olayı Kapat ve Tamamla] & Rapor Kapsamı) | Tamamlanmamış veya planlanmış DÖF varken olay dosyasının kapatılmasını önlemek ve bitiş günü kayıtlarını koruyup iptal edilenleri ayırmak. | Tamamlanmamış veya planlanmış tek bir DÖF varsa hem doğrudan güncellemede hem onay akışında kapatmayı kilitler; iptal edilen olaylarda gerekçe, tarih ve kullanıcıyı kaydederek bekleyen kaza sayacından çıkarır, tarih aralığı raporlarında bitiş gününün tamamını (23:59'a kadar) dahil eder. | Dosya kapatma, iptal ve raporlamada. | Sistem Kilidi / Yönetici |
| **[Resmi Tutanağı Yazdır / PDF]** (Tek Sayfa A4 SKS/NDK Tutanağı) | Denetimlere kurum antetli, gerçek aktif RKS imzalı ve yasal süre bilgili resmi kanıt belgesi sunmak. | Kurum anteti, doküman takip kartı, şiddet ve NDK rozetleri ile aktif RKS görevlendirmesinden alınan gerçek sorumlu adını ve olayın gerçek 24 saat / 72 saat yasal süresini tek A4 PDF olarak üretir. | İnceleme sırasında ve kapanışta. | RKS / Kalite Birimi |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Açık DÖF Varken Olay Kapatılabilir mi ve Olaydaki Cihaz Arızası Harici Servise Çağrı Açar mı?**
> - **Yanlış Algı:** *"Olayı acilen kapatmak için açık duran DÖF faaliyeti olsa bile dosyayı Kapalı yapabiliriz; ayrıca olayda cihaz arızası seçtiğimizde yetkili teknik servise otomatik iş emri gider."*
> - **Gerçek Sistem Mantığı:** **İkisi de doğru değildir.** Açık ve tamamlanmamış bir DÖF faaliyeti varken sistem olay kapatma işlemini kesinlikle kilitler; her faaliyet tamamlanmalı veya gerekçeli iptal edilmelidir. Cihaz kaynaklı olaylarda açılan kayıt ise yalnızca kurum içi Radyasyon Güvenliği Komitesi arıza-kaza istatistiğini izlemek içindir; harici bakım firmasına resmi servis çağrısı göndermez (harici servis Modül 19'dan yönetilir).

### Süreç Akış Şeması

1. **Bildirim ve NDK Süresi:** Masaüstü veya sahadan anonim seçenekli 3 adımlı olay bildirimi açılır; radyolojik olaylarda hafta sonu hariç 1 veya 3 iş günlük NDK geri sayımı işler.
2. **4 Adımlı İnceleme ve DÖF:** Birim sorumlusu veya RKS atanıp düzeltici/önleyici faaliyetler yürütülür; açık DÖF kaldığı sürece dosya kapanışı sistem tarafından engellenir.
3. **Kapanış ve Resmi Tutanak:** Tüm DÖF faaliyetleri bittiğinde zorunlu kapanış notuyla dosya kapatılır ve tek sayfalık antetli resmi SKS/NDK PDF tutanağı alınır.

### Adım Adım İşlem Rehberi

#### 1. Yeni Olay Bildirimi Oluşturma ve Anonim Seçenek

1. **[Olay Bildirimi ve DÖF (CAPA) Yönetimi]** ekranında **Yeni Olay Bildirimi** sekmesine geçin.
2. **1. Adım: Olay Temel Bilgileri** bölümünde tarih, birim (gerekirse **[Diğer (Serbest Yaz)]**), olay sonucu ve bildireni seçin (kimliğinizi gizlemek için **[Anonim Bildirim Yap]** veya e-posta dönüşü için **[Geri Bildirim İstiyorum]** işaretleyebilirsiniz).
3. **[İleri]** butonlarıyla **2. Adım: Olay Sınıflandırması** (kategori, alt detaylar, olası kök nedenler) ve **3. Adım: Açıklamalar ve Öneriler** alanlarını doldurup **[Gönder / Olayı Bildir]** butonuna basın.

#### 2. 4 Adımlı İnceleme Sihirbazı, Sorumlu Atama ve DÖF Yönetimi

1. Ana listeden bir satır seçip **[İncele ve DÖF Yönet]** butonuna tıklayın; 1. adımda olay künyesini inceleyip 2. adıma geçin, **[İncelemeye Al]** veya **[NDK Bildir]** işlemlerini yapın ve listeden yetkili sorumluyu seçin (**[Sonraki Adım]**'a geçerken atama otomatik kaydedilir).
2. 3. adımda **[Faaliyet Başlat]** ile Düzeltici, Önleyici veya İyileştirici DÖF tanımlayın; tamamlanan aksiyonlarda **[Seçili DÖF'ü Tamamlandı Yap]** butonunu kullanın (olaydan bağımsız genel kalite iyileştirmeleri için ana araç çubuğundaki **[Yeni DÖF Ekle]** butonu kullanılabilir).
3. 4. adımda tüm DÖF'lerin kapandığı doğrulandıktan sonra kapanış notunu yazıp **[Olayı Kapat ve Tamamla]** butonuna basın; **[Resmi Tutanağı Yazdır / PDF]** ile antetli resmi tutanağı, ana çubuktaki **[Excel]** ve **[Trend Raporu]** ile toplu analizleri alın.

#### 3. Saha Web Portalından Olay Bildirimi ve Yönetici Analizi

1. Klinik personeli cep telefonu veya tabletten Web Portalındaki 3 adımlı bildirim formunu doldurarak anında kaza veya ramak kala kaydı açabilir; kayıt açıldığı anda masaüstü yönetici ekranında görünür.
2. Kalite ve hastane yönetimi Web Portalındaki **Olay Bildirimi** yönetim panelinden bekleyen DÖF sayılarını, NDK bildirim sürelerini ve aylık olay trendini canlı olarak takip eder.

### Sıkça Sorulan Sorular (SSS)

- **Anonim yapılan bildirimler resmi SKS denetimlerinde geçerli sayılır mı?** **Evet.** Sağlık Bakanlığı SKS 6.1 ve kurumsal güvenlik kültürü ilkeleri uyarınca personelin kimliğini gizleyerek yaptığı ramak kala ve olay bildirimleri tamamen geçerlidir ve normal bildirimlerle aynı inceleme ve DÖF sürecine alınır.
- **Açık DÖF varken bir olayı acilen kapatmam gerekirse ne yapmalıyım?** Açık DÖF faaliyeti varken olayın kapatılması emniyet kilidiyle engellenir. Bir faaliyet artık uygulanamayacak veya mükerrer durumdaysa ilgili DÖF satırı gerekçesiyle iptal edilmeli ya da tamamlandı olarak kapatılmalı, ardından olay dosyası kapatılmalıdır.
- **Olaydan açılan cihaz arıza kaydı teknik servise resmi iş emri gönderir mi?** Hayır. Bu bağlantı yalnızca kurum içinde olay-arıza ilişkisini ve istatistiklerini izlemek içindir; harici bakım veya teknik servis firmasına resmi çağrı göndermez. Teknik servis ve arıza takibi Cihaz Arıza, Bakım ve QC modülünden yürütülür.
- **NDK yasal bildirim süresi nasıl hesaplanır?** Süre olay tarihinden itibaren başlar; acil kazalarda 1 iş günü, diğer radyolojik olaylarda 3 iş günü olarak hesaplanır. Hafta sonu günleri ve resmi tatiller iş günü hesabına dahil edilmez.

---

## 16. RGS / RSO Görevlendirme ve Sertifika Takibi

Nükleer Düzenleme Kurumu (NDK) 06.03.2025 tarihli Radyasyondan Korunma Sorumluları Usul ve Esasları uyarınca güncel resmi unvanı Radyasyondan Korunma Sorumlusu (RKS) olan — uygulama menülerinde RGS, RGS Yardımcısı ve RSO olarak kullanılan — sorumluların atamalarını, 5 kademeli sertifika vize takibini, atama yazısı PDF üretimini, imzalı belge sürüm tarihçesini ve şifreli KVKK evrak kasasını yönetmenizi sağlar.

> **Arşiv Güvencesi:** Yasal denetim izini korumak adına düzenleme penceresinde personel seçimi kilitlidir; ayrıca bir görevlendirme kaydı silinse dahi personelin şifreli evrak kasasındaki atama yazısı ve sertifika dosyası geçmiş denetim kanıtı olarak korunur.

### Kısa Reçete: RGS / RSO Ataması, Atama Yazısı ve Vize Takibi

**Kısa Reçete: RGS / RSO Ataması, Atama Yazısı ve Vize Takibi**

**1. İstenen Sonuç:**
Kurumdaki RGS, RGS Yardımcısı ve RSO sorumlularının yasal atamalarının, 5 yıllık NDK sertifika vizelerinin ve imzalı atama yazılarının eksiksiz takip edilmesi.
**2. Yapılacak İşlem:**
**[Yeni Görevlendirme]** ile personel, görev tipi, tarihler ve sertifika numarasını girip **[Kaydet]**'e basın; **[Atama Yazısı Üret (PDF)]** ile resmi yazı taslağını oluşturup imzalandıktan sonra **[İmzalı Belge Yükle]** ile arşivleyin.
**3. Sistem Etkisi:**
Vize bitimine 60 ve 30 gün kala sarı/turuncu erken uyarı üretilir; imzalı belge yüklendiğinde eski taslak silinmeden sürüm geçmişine taşınır; onaya tabi rollerin işlemleri Merkezi Onaylar kuyruğuna iletilir.

- **Görev Rolleri:** RGS, RGS Yrd., RSO
- **Erken Uyarı:** 60 Gün & 30 Gün Alarmı
- **Belge Yaşam Döngüsü:** Taslak → Arşiv → İmzalı
- **Evrak Güvenliği:** AES-256 Şifreli Kasa

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Çoklu görevlendirme, 5 kademeli sertifika geçerlilik motoru, imzalı belge yaşam döngüsü ve veri bütünlüğü kilidi.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Çoklu Rol Ataması ve Süre Seçenekleri** ([Süresiz Görev] & [Süresiz Sertifika]) | Bir personelin farklı birim veya sorumluluklarda birden fazla görev alabilmesini ve daimi atamaları yönetmek. | RGS, RGS Yardımcısı ve RSO rollerinde çoklu kayıt açabilir; süresiz kutuları işaretlendiğinde bitiş tarihi alanı kilitlenir. | Yeni atama tanımlanırken. | RKS / İK / Admin |
| **5 Kademeli NDK Sertifika Geçerlilik Motoru** (60 / 30 Gün Erken Uyarı) | 5 yıllık NDK sertifika vizesi dolmadan eğitim ve yenileme hazırlıklarını zamanında başlatmak. | Kalan süreye göre Geçerli (>60 gün), Yaklaşıyor (31–60 gün), Kritik (≤30 gün), Süresi Doldu veya Süresiz durum rozetleri ve KPI sayaçları üretir. | Liste ve KPI güncellenirken. | RKS / Yönetici |
| **[Atama Yazısı Üret (PDF)] & [İmzalı Belge Yükle]** (Belge Durumu Rozeti) | Kurum antetli resmi görevlendirme taslağı oluşturmak ve ıslak/e-imzalı nüshayı arşivlemek. | Taslak PDF üretip İmza Bekliyor rozeti atar; imzalı belge yüklendiğinde taslağı sessizce arşive alıp belge durumunu İmzalı yapar. | Görevlendirme belgelendirilirken. | RKS / Admin |
| **[Belgeyi Aç], [Belge Geçmişi] & Arşiv Kilidi** (Şifreli Kasa & Sürüm İzleme) | Atama yazılarını güvenle açmak, eski taslak-imzalı sürümleri görmek ve arşiv kanıtını korumak. | Belgeleri AES-256 şifreli kasadan açar ve dijital bütünlük tarihçesini gösterir; görev kaydı silinse dahi sertifika dosyası arşivde saklanır. | Belge inceleme ve silmede. | RKS / Denetçi / Admin |
| **Düzenlemede Personel Kilidi & Onay Kuyruğu** (Veri Bütünlüğü Koruma) | Aynı kaydı başka kişiye çevirerek geçmiş denetim izinin karışmasını önlemek. | Düzenleme modunda Personel alanı salt-okunur kilitlenir; onaya tabi kullanıcıların kayıtları Merkezi Onaylar havuzuna yönlendirilir. | Kayıt düzenleme ve kayıtta. | Sistem Kilidi / Yönetici |
| **[Dışa Aktar] Resmi Denetim Listesi** (Excel, PDF ve Maskeli CSV Aktarımı) | NDK ve iç kalite denetimlerine yetkili birim kapsamındaki güncel sorumlu ve vize listesini sunmak. | Süzülen kayıtları kurumsal Excel/PDF rapor motoruyla veya KVKK uyumlu T.C. maskeli CSV dosyasıyla dışa aktarır. | Denetim dosyası hazırlanırken. | RKS / İK / Yönetici |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Görevlendirme Silindiğinde Evrak Kasasındaki Sertifika da Silinir mi?**
> - **Yanlış Algı:** *"Eski bir RGS görevlendirmesini listeden sildiğimde yüklediğim sertifika ve atama yazısı da sistemden tamamen yok olur; ayrıca düzenleme ekranından aynı kaydı doğrudan başka bir hekime devredebilirim."*
> - **Gerçek Sistem Mantığı:** **İkisi de koruma kilitlidir.** Yasal arşiv bütünlüğü gereğince görevlendirme kaydı listeden silinse dahi personelin şifreli evrak kasasındaki atama ve sertifika dosyaları geçmiş denetim kanıtı olarak saklanmaya devam eder. Ayrıca görev devri yapılacaksa mevcut kayıt üzerinden personel değiştirilemez (düzenlemede personel alanı kilitlidir); eski kayıt pasife alınıp yeni personel için yeni kayıt açılmalıdır.

### Süreç Akış Şeması

1. **Atama ve Onay:** Personel, rol (RGS, RGS Yardımcısı, RSO), tarihler ve sertifika bilgileri girilir; onaya tabi kullanıcılarda işlem yönetici onayına düşer.
2. **Belge Yaşam Döngüsü:** Antetli atama yazısı taslağı üretildikten sonra imzalı nüsha yüklenerek sürüm tarihçesi (**Taslak → Arşiv → İmzalı**) oluşturulur.
3. **Vize İzleme ve Denetim:** 60 ve 30 gün eşikleriyle yaklaşan vizeler uyarılır; Web Portalındaki denetim kokpiti ile eşzamanlı izlenir.

### Adım Adım İşlem Rehberi

#### 1. Yeni RGS / RSO Görevlendirmesi ve NDK Sertifikası Tanımlama

1. Sol menüden **[RGS / RSO Görevlendirme ve Sertifika Takibi]** ekranını açıp araç çubuğundaki **[Yeni Görevlendirme]** butonuna tıklayın.
2. Açılan formda **Personel**, **Görev Tipi** (RGS, RGS Yardımcısı veya RSO), **Görev Başlangıç** tarihi ile süreliyse bitiş tarihini (daimi atamada **[Süresiz Görev]**) belirleyin.
3. **Sertifika / Belge No** alanını ve NDK 5 yıllık vize bitiş tarihini (yalnızca vize muafiyeti olan kurumsal olurlarda **[Süresiz Sertifika]**) girin; **[Dosya Seç (PDF / Resim)]** ile varsa sertifikayı yükleyin, **[Görevlendirme Aktif Olarak Yürütülüyor]** kutusunu doğrulayıp **[Kaydet]** butonuna basın.

#### 2. Resmi Atama Yazısı Üretme, İmzalı Belge Yükleme ve Sürüm Geçmişi

1. Tablodan görevlendirmeyi seçip **[Atama Yazısı Üret (PDF)]** butonuna tıklayarak kurum antetli taslak görevlendirme yazısını oluşturun (belge durumu **İmza Bekliyor** rozetini alır).
2. Başhekimlik ve ilgili sorumlu imzaları tamamlandığında satırı seçip **[İmzalı Belge Yükle]** butonundan taranmış veya e-imzalı PDF/görsel nüshayı yükleyin; sistem eski taslağı silmeden arşive kaldırır ve belge durumunu **İmzalı** olarak günceller.
3. Aktif belgeyi açmak için **[Belgeyi Aç]**, taslaktan imzalıya tüm sürümleri ve doğrulama özetini görmek için **[Belge Geçmişi]** butonunu kullanın; listeyi dışa aktarmak için **[Dışa Aktar]** butonuna basın.

#### 3. Düzenleme, Pasife Alma ve Web Portalı Denetim Takibi

1. Süre veya sertifika no güncellemek için satırı seçip **[Düzenle]** butonunu kullanın (personel alanı veri bütünlüğü için kilitlidir; görevi başkasına devretmek için eski kaydın aktiflik onayını kaldırıp yeni kişi adına yeni kayıt açın).
2. **Web Portalı Takibi:** Çalışanlar kendi profil sayfalarından aktif RGS/RSO atamalarını ve sertifika geçerlilik tarihlerini görüntüler; yöneticiler ise **Denetim Hazırlık** panosundan kurumun RKS görevlendirme oluru ve sertifika uygunluk durumunu tek bakışta izler.

### Sıkça Sorulan Sorular (SSS)

- **Bir personel aynı anda birden fazla aktif RGS/RSO görevlendirmesine sahip olabilir mi?** **Evet.** Kurum yapılanmasına göre aynı personel farklı birimlerde veya farklı rollerde (örneğin bir birimde RGS, diğer birimde RGS Yardımcısı) birden fazla aktif görevlendirme kaydına sahip olabilir.
- **"Süresiz Sertifika" seçeneği ne zaman kullanılmalıdır?** NDK sertifikaları kural olarak 5 yıllık vizeye tabidir ve bitiş tarihi girilmelidir. **[Süresiz Sertifika]** yalnızca vize süresi aranmayan başhekimlik olurları veya istisnai muafiyetli yetkilendirmeler için kullanılmalıdır.
- **Bir görevlendirme kaydını sildiğimde evrak kasasındaki sertifika belgesi de silinir mi?** Hayır. Yasal denetim izi ve arşiv güvenliği gereğince görevlendirme kaydı silinse dahi personelin şifreli evrak kasasına yüklenmiş sertifika ve atama belgeleri veritabanında saklanmaya devam eder.
- **Düzenleme penceresinde neden personel adını değiştiremiyorum?** Veri bütünlüğünü ve eski denetim izini korumak için düzenleme modunda personel alanı kilitlidir. Görev başka bir çalışana devredilecekse mevcut görevlendirme pasife alınıp yeni personel için sıfırdan kayıt açılmalıdır.

---

## 17. Hizmet İçi Eğitim ve Online Sınav Yönetimi

SKS 6.1 ve 19.02.2025 / 32818 sayılı Radyasyondan Korunma Eğitimlerine İlişkin Yönetmelik ile NDK RSGD-KLV-014 talimatları (TL.RAD.01–TL.RAD.11) kapsamındaki yıllık zorunlu eğitim kataloğunu, toplu personel atamalarını, görselli soru havuzunu, dinamik karıştırmalı online sınavı, 15 gün erken uyarısını ve Kurumsal Uyum Matrisini yönetmenizi sağlar.

> **Denetim İlkesi:** Kurumsal Zorunlu Eğitim olarak işaretlenen eğitimleri henüz hiç almamış aktif çalışanlar Uyum Matrisinde mor rozetle (Hiç Alınmamış) gösterilir ve genel uyum oranını doğrudan düşürür; 15 gün kalan eğitimler için günlük tekrar korumalı otomatik hatırlatma gönderilir.

### Kısa Reçete: Eğitim Kataloğu, Atama, Online Sınav ve Uyum Matrisi

**Kısa Reçete: Eğitim Kataloğu, Atama, Online Sınav ve Uyum Matrisi**

**1. İstenen Sonuç:**
Yıllık zorunlu radyasyon güvenliği eğitimlerinin ve NDK talimatlarının personele atanması, Web Portalından izlenip online sınavla tescillenmesi ve SKS Uyum Matrisinin hazır tutulması.
**2. Yapılacak İşlem:**
**Eğitim Kataloğu** sekmesinden materyali, geçerlilik süresini ve sınav barajını kaydedin; **Sınav Soruları Havuzu**'ndan soruları ekleyin (veya **[Excel'den Soru Yükle]**); **Eğitim Atamaları**'nda personeli seçip **[Seçilen Personele Ata]** butonuna basın ve **Uyum ve Denetim Raporu**'ndan **[Excel Raporu]** alın.
**3. Sistem Etkisi:**
Online sınavda her çalışana soru ve şık sırası rastgele karıştırılarak gelir; baraj geçildiğinde veya sınavsız doküman okuma onaylandığında eğitim başka onaya gerek kalmadan tescillenir ve Uyum Matrisi yeşile döner.

- **Geçme Barajı:** %70 (Sınırsız Tekrar)
- **Geçerlilik & Uyarı:** 12 Ay & 15 Gün Alarmı
- **NDK KLV-014:** 11 Resmi Talimat (TL.RAD.01–11)
- **Hibrit Portal:** Video Stream & Web Sınavı

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Uyum matrisi analizi, NDK talimatları, toplu atama, görselli soru havuzu, karıştırmalı sınav ve 15 gün bildirim motoru.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Kurumsal Uyum Matrisi & [Excel Raporu]** (4 Durumlu Çapraz Denetim) | Hangi çalışanın hangi zorunlu eğitimde eksik veya gecikmiş olduğunu tek ekranda kanıtlamak. | Tüm aktif çalışanları zorunlu eğitimlerle çapraz eşleştirir; Aktif, Süresi Yaklaşıyor (≤15 gün), Süresi Doldu ve Hiç Alınmamış durumlarını renkli raporlar. | Denetim ve rutin takipte. | Kalite / RKS / Yönetim |
| **Eğitim Kataloğu & NDK Talimatları (TL.RAD.01–11)** ([Kurumsal Zorunlu Eğitim] & [Online Sınav Aktif]) | Yıllık zorunlu radyasyon müfredatını, geçerlilik ayını, materyali ve RKP talimatlarını yönetmek. | PDF/sunum/video materyali, geçerlilik ayı (varsayılan 12, süresiz 0), baraj (%) ve NDK RKP 11 talimat setini tutar. | Katalog oluşturulurken. | Yönetici / RKS |
| **[Seçilen Personele Ata] & [Atamayı İptal Et]** (Birim & Hizmet Sınıfı Filtresi) | Yüzlerce çalışana tek tek uğraşmadan birim veya meslek grubu bazında eğitim görevi açmak. | Süzülen personellere son tamamlama tarihiyle görev kaydı oluşturur ve bildirim iletir; hatalı görevler iptal edilebilir. | Yıllık eğitim planlamasında. | Eğitim Sorumlusu / RKS |
| **Görselli Soru Havuzu & [Excel'den Soru Yükle]** ([Başka Eğitimden Kopyala...]) | Çoktan seçmeli soru bankasını radyolojik görsellerle ve toplu aktarımla hızla hazırlamak. | Soru köküne ve A–D şıklarına görsel ekler; şablondan toplu yükleme veya önceki dönem eğitiminden soru kopyalama yapar. | Sınav soruları hazırlanırken. | Sınav Komisyonu / RKS |
| **Dinamik Karıştırmalı Online Sınav & Tescil** ([Sınavı Tamamla ve Gönder]) | Kopyayı engellemek ve yalnızca aktif atanmış eğitimleri geçerli takvim ayı süresiyle tescillemek. | Masaüstü veya Web Portalından yalnızca aktif atanmış eğitimlerde sınava girilir; her denemede soru ve şık sırası karıştırılır, baraj geçildiğinde geçerlilik bitişi tam takvim ayına göre hesaplanır ve sertifikalar şifreli kasada saklanır. | Çalışan eğitimi tamamlarken. | Tüm Çalışanlar |
| **15 Gün Erken Uyarı Bildirim Motoru** (Mükerrer Bildirim Koruması) | Geçerlilik süresi dolmak üzere olan eğitimlerin unutulmasını önlemek. | Sürenin dolmasına 15 gün ve daha az kalan eğitimleri otomatik tarayıp ilgili çalışana günde en fazla bir kez hatırlatma gönderir. | Zamanlanmış kontrolde. | Sistem Otomatik / Çalışan |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Baraj Altında Kalan Personelin Hakkı Biter mi ve Hiç Almamış Olanlar Uyum Oranını Etkiler mi?**
> - **Yanlış Algı:** *"Online sınavda %70 barajını geçemeyen personelin hakkı yanar ve bir daha giremez; ayrıca kuruma yeni başladığı için eğitimi hiç almamış görünen çalışanlar uyum yüzdesini düşürmez."*
> - **Gerçek Sistem Mantığı:** **İkisi de yanlıştır.** Eğitimin amacı öğrenmeyi pekiştirmektir; baraj altında kalan personel materyali inceleyerek sınırsız sayıda sınava yeniden girebilir (her denemede sorular ve şıklar yeniden karıştırılır). Öte yandan Uyum Matrisi tüm aktif personelleri zorunlu eğitimlerle çapraz eşleştirdiği için Hiç Alınmamış mor rozetli çalışanlar genel uyum oranını doğrudan aşağı çeker.

### Süreç Akış Şeması

1. **Katalog ve Atama:** Eğitim kataloğu (ve yıllık zorunlu 11 NDK talimatı) materyal ve sorularla hazırlanıp birim veya meslek sınıfı bazlı personele atanır.
2. **Eğitim ve Online Sınav:** Çalışan Web Portalından dokümanı okuyup onaylar veya karıştırmalı online sınavda %70 barajını geçene kadar sınırsız deneme yapabilir.
3. **Tescil ve Uyum Matrisi:** Başarılı tamamlanan eğitim otomatik onaylanır, Uyum Matrisi güncellenir ve süresi 15 gün kalanlara günlük korumalı uyarı iletilir.

### Adım Adım İşlem Rehberi

#### 1. Eğitim Kataloğu ve Görselli Soru Havuzu Hazırlama

1. **[Hizmet İçi Eğitim ve Online Sınav]** ekranında **Eğitim Kataloğu** sekmesine geçin ve **[Yeni Form]** butonuna tıklayın; eğitim adını, kategoriyi, geçerlilik ayını (yıllık için 12, süresiz için 0), baraj puanını (örneğin %70), **[Kurumsal Zorunlu Eğitim]** ve **[Online Sınav Aktif]** kutularını belirleyip **[Seç...]** ile materyali ekledikten sonra **[Kaydet]**'e basın (**[Aç / Oynat]** ile doğrulayabilirsiniz).
2. NDK RSGD-KLV-014 kapsamındaki 11 zorunlu talimat (**TL.RAD.01**–**TL.RAD.11**) **Kalite Dokümanları** kategorisinde yıllık doküman eğitimi olarak hazır bulunur; personel portaldan okuma onayı verdiğinde SKS ve RKP uyumu güncellenir.
3. **Sınav Soruları Havuzu** sekmesinde soruları ve şıkları tek tek ekleyebileceğiniz gibi (soru ve A–D şıkları için **[Görsel Seç...]** / **[Görsel...]** desteklidir), **[Excel'den Soru Yükle]** ile şablondan toplu yükleyebilir veya **[Başka Eğitimden Kopyala...]** ile önceki eğitimden aktarabilirsiniz.

#### 2. Toplu Personel Ataması Yapma ve Uyum Matrisini Raporlama

1. **Eğitim Atamaları** sekmesinde birim ve hizmet sınıfı süzgeçleriyle hedef grubu daraltın, **[Tümünü Seç]** veya onay kutularıyla personeli işaretleyin; atanacak eğitimi ve son tamamlama tarihini belirleyip **[Seçilen Personele Ata]** butonuna basın (gerekirse listeden **[Atamayı İptal Et]** kullanılır).
2. **Uyum ve Denetim Raporu** sekmesinde üstteki 5 KPI göstergesini (Genel Uyum Oranı, Geçerli Eğitimler, 15 Gün Kalanlar, Süresi Dolanlar ve Hiç Alınmamış) izleyip **[Filtrele]** ile süzün; denetimler için **[Excel Raporu]** butonuna tıklayın.

#### 3. Web Portalında Video / Doküman İnceleme ve Online Sınav

1. Kendisine görev atanan personel Web Portalındaki eğitim panelinden PDF/sunum dokümanlarını açar veya videoları kesintisiz ileri/geri sararak izler.
2. Sınav şartı yoksa **Okudum / İnceledim** onayıyla, sınav aktifse **[Sınavı Tamamla ve Gönder]** ekranında barajı geçerek eğitimi anında tamamlar ve dijital sertifika/uyum kaydını yeniler.

### Sıkça Sorulan Sorular (SSS)

- **Sınavda barajı aşamayan personel için deneme sayısı kısıtlı mıdır?** Hayır. Personel başarı barajına (varsayılan %70) ulaşana kadar eğitim materyalini tekrar inceleyip sınırsız sayıda yeniden sınava girebilir; her yeni denemede sorular ve A–D şıkları otomatik olarak yeniden karıştırılır.
- **Uyum Matrisinde "Hiç Alınmamış" görünen çalışanlar kurum puanını etkiler mi?** Evet. Zorunlu eğitimleri henüz hiç tamamlamamış tüm aktif personel mor renkli **Hiç Alınmamış** durumunda listelenir ve genel uyum yüzdesini doğrudan düşürür; bu gruba öncelikle toplu atama yapılmalıdır.
- **Online sınavı kapalı olan doküman/video eğitimleri nasıl tamamlanmış sayılır?** Katalogda **[Online Sınav Aktif]** seçeneği işaretlenmemişse personel eğitim dokümanını veya videosunu inceledikten sonra portaldan okuma onayını verdiğinde eğitim doğrudan tamamlandı olarak tescil edilir.
- **15 gün erken uyarı bildirimi günde kaç kez gönderilir?** Arka plandaki bildirim kontrolünde mükerrer uyarı koruması bulunur; geçerlilik süresine 15 gün ve daha az kalan eğitimler için aynı personele günde yalnızca bir kez hatırlatma gönderilir.

---

## 18. Tıbbi Cihaz ve NDK Lisans Envanteri

Hastaneler ve radyoloji merkezlerindeki iyonlaştırıcı radyasyon yayan (X-Ray, Tomografi, Anjiyografi, Skopi, Mamografi), radyasyonsuz medikal (MR, USG) ve ölçüm cihazlarının teknik künyelerini, Nükleer Düzenleme Kurumu (NDK) lisans ve vize takvimini, mimari kat planı sabitlemesini, AES-256 şifreli teknik evrak kasasını, 2 aşamalı HEK tasfiye arşivini ve 8 adımlı NDK KLV-014 Radyasyondan Korunma Programı (RKP) başvuru dosyasını tek merkezden yönetmenizi sağlar.

> **Yasal Güvence:** NDK Radyasyon Güvenliği Mevzuatı, Sağlık Bakanlığı Sağlıkta Kalite Standartları (SKS 6.1) ve Taşınır Mal Yönetmeliği uyarınca ruhsatsız veya vizesi dolmuş radyasyon kaynakları erken uyarı takibine alınır; hurdaya ayrılan cihazlar komisyon tutanağı ve EBYS mührü olmadan sistemden silinmez.

### Kısa Reçete: Yeni Cihaz Kaydı ve NDK Lisansı Bağlama

**Kısa Reçete: Yeni Cihaz Kaydı ve NDK Lisansı Bağlama**

**1. İstenen Sonuç:**
Tıbbi cihazın resmi NDK lisans bilgileriyle envantere alınması, vize erken uyarı motoruna bağlanması ve saha karekod (QR) etiketinin kullanıma hazır hale getirilmesi.
**2. Yapılacak İşlem:**
Araç çubuğundaki **[Yeni Cihaz]** butonuna tıklayın; 1. sekmede kaynak grubu, Anabilim Dalı, Birim, Cihaz Türü ve Seri No alanlarını doldurun; 2. sekmede NDK Lisans No ve vize bitiş tarihini girip **[Cihazı Kaydet]** butonuna basın.
**3. Sistem Etkisi:**
Modalite sırasına göre Cihaz No ve kilitli Cihaz Kodu otomatik üretilir; vize bitimine 180, 45 ve 30 gün kala kademeli erken uyarı devreye girer ve cihazın karekod pasaportu oluşturulur.

- **Vize Uyarı Eşikleri:** 180 / 45 / 30 Gün
- **Tablo ve Sekme Yapısı:** 7 Sütun / 5 Sekme
- **Cihaz Kodu Kuralı:** Otomatik ve Kilitli
- **Platform:** Masaüstü + Web / QR

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Cihaz kodlama otomasyonu, NDK lisans vize eşikleri, mimari kroki pinleme, Evrak Kasası, tutanaklar, 2 aşamalı HEK arşivi, toplu QR baskı ve RKP sihirbazı kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Kademeli Birim, Cihaz No ve Cihaz Kodu** (1. Sekme: Genel Bilgiler) | Modalite başına gerçek cihaz sırasını korumak ve devirlerde kimlik kaymasını önlemek. | Anabilim Dalı seçildiğinde Birim listesi filtrelenir ve sistem boşluk doldurmalı Cihaz No ile salt okunur Cihaz Kodu üretir; düzenlemede yalnızca Birim veya Devir Tutanağı değişince kod yenilenir. | Yeni cihaz tanımlandığında veya birim devri yapıldığında. | Biyomedikal / RKS |
| **NDK Lisans Vize, RKS Ataması ve Esnek Zimmet** (2. Sekme: NDK Lisans, RKS & Zimmet) | Ruhsat yenileme takvimini ve cihaz sorumlularını yapay tarih veya sonuç üretmeden takip etmek. | Radyasyonsuz ve Medikal gruplar aktif listede korunarak Muaf işaretlenir; radyasyonlu cihazlarda yalnızca gerçek lisans bilgisi değiştiğinde vize kaydı açılır ve 180/45/30 gün uyarı sayacı çalışır, NDK RKS Taahhütnamesi ve cihaz zimmeti şifreli kasayla doğrulanır. | Cihaz kaydedildiğinde, zimmetlendiğinde veya vize yaklaştığında. | RKS / Yönetici |
| **Kat Planına Sabitleme ve [Pin Kilitli]** (4. Sekme: Kat Planı) | Sabit cihazların oda içi mimari konumunu sabitlemek ve Ortam Dozu haritasıyla eşleştirmek. | Mimari plan üzerinde cihaz konumu tıklandığında yüzdesel koordinat ve oda kodu otomatik bağlanır; kilitleme butonu pinin yanlışlıkla sürüklenmesini engeller. | Sabit X-Ray, BT veya Anjiyo kurulumunda. | Biyomedikal / RKS |
| **Şifreli Evrak Kasası ve Birleşik Tutanak Tablosu** (5. Sekme: Kılavuzlar ve Belgeler) | Kullanım kılavuzlarını, NDK ruhsat belgelerini ve cihaz tutanaklarını tek listede şifreli korumak. | Yüklenen kılavuzlar, lisans PDF belgeleri ve cihazla ilişkili resmi tutanaklar onay kuyruğu dahil AES-256 Evrak Kasası üzerinden tek tabloda korunur ve imzalı tutanak nüshası doğrudan satırdan eklenir. | Teknik belge teslim alındığında veya tutanak imzalandığında. | Yetkili Kullanıcı / RKS |
| **[Tutanak Oluştur], [HEK] ve 2 Aşamalı Tasfiye Arşivi** (Devir / Hasar / Kabul / HEK Süreç Yönetimi) | Çoklu cihaz tutanaklarını atomik olarak üretmek ve EBYS mühürlü cihazların silinmesini veya tekrar seçilmesini önlemek. | Tutanak, kasa kaydı ve birim/zimmet/HEK güncellemesi tek bütün olarak tamamlanır; **[EBYS Gir / Dosyayı Kapat]** ile mühürlenen cihazların açık lisans/bakım/QC slotları kapatılır ve bu cihazlar silinemez veya yeni tutanaklara eklenemez. | Birim devri, hasar tespiti veya hurdaya ayırma kararında. | Komisyon / Ayniyat / RKS |
| **[QR Etiket] ve 300 DPI Toplu Baskı Paketi** (Tekil Kart ve ZIP Matbaa İhracı) | Cihaz gövdesine yapıştırılacak saha karekodunu gerçek cihaz türü ve kurumsal portal adresiyle hazırlamak. | Kurum ayarlarındaki Web Portal adresi ve cihazın gerçek tür başlığı kullanılarak tekil etiket yazdırılır veya seçili/tüm liste için 300 DPI etiket görselleri, baskı rehberi ve icmal listesi tek ZIP arşivinde üretilir. | Cihaz kabulünde veya toplu etiket yenilemede. | Tekniker / Biyomedikal / RKS |
| **8 Adımlı NDK RKP Sihirbazı ve Merkezi Onay** (RSGD-KLV-014 Başvuru Dosyası) | Resmi NDK başvuru dosyasını canlı envanter verilerinden hatasız derlemek ve rol bazlı onayları korumak. | Kurum, RKS, personel, cihaz, ölçüm/aktif dozimetre ve RKE matrislerini (KB.1–KB.8) ve 11 talimatı canlı çekip Word/PDF üretir; onay gerektiren rollerin cihaz değişikliklerini Merkezi Onay kuyruğuna sunar. | NDK lisans başvurusunda veya yetki onaylı kayıtta. | RKS / Kurum Amiri |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Cihaz Kodu Elle Değiştirilebilir veya HEK'e Ayrılan Cihaz Tamamen Silinebilir mi?**
> - **Yanlış Algı:** *"Cihaz kodunu kendi kurum numaramıza göre elle yazabilirim; ayrıca hurdaya ayrılan veya yanlış eklenen bir cihazı HEK ekranından silebilir veya dilediğim zaman tek tuşla geri açabilirim."*
> - **Gerçek Sistem Mantığı:** **İkisi de sistem güvencesiyle kısıtlıdır.** Cihaz No ve Cihaz Kodu ilişkisel arıza, kalite kontrol ve kroki bağlantılarını korumak için otomatik üretilir; kurum içi demirbaş takibi için formdaki **Demirbaş No** alanı kullanılır ve kod yalnızca birim değiştiğinde güncellenir. Ayrıca hurdaya ayrılan cihazlar geçmiş denetim izini korumak adına asla fiziksel silinmez; komisyon tutanağı ve EBYS sayısıyla mühürlenen HEK tasfiye dosyaları geri döndürülemez.

### Süreç Akış Şeması

1. **Künye ve Lisanslama:** Kaynak grubu, Anabilim Dalı, Birim ve Cihaz Türü seçilince sistem otomatik Cihaz No/Kodu üretir; radyasyonlu cihazlar NDK vize motoruna bağlanırken MR/USG ve genel medikal cihazlar Muaf işaretlenir.
2. **Kroki, Evrak ve Vize İzleme:** Cihaz mimari krokiye pinlenip teknik belgeleri şifreli kasaya eklenir; kalan lisans süresi 180 günün üstündeyken sade görünüm korunur, 180/45/30 gün eşiklerinde kademeli alarm devreye girer.
3. **RKP, Saha QR ve HEK Tasfiyesi:** Aktif cihazlar 300 DPI QR etiketle Web Portal saha süreçlerine bağlanır, canlı envanter verileri NDK RKP Sihirbazına aktarılır; ömrünü tamamlayan cihazlar tutanak ve EBYS sayısıyla mühürlenerek tasfiye arşivine kaldırılır.

### Adım Adım İşlem Rehberi

#### 1. Yeni Cihaz Tanımlama, Kroki Pinleme ve Evrak Kasası

1. **Tıbbi Cihaz ve Lisans Envanteri** ekranında **[Yeni Cihaz]** butonuna tıklayın; 1. sekmede kaynak grubunu (**Radyasyonlu (XRAY)**, **Radyasyonsuz (RADSIZ/MR/USG)**, **Medikal Cihaz** veya **Ölçüm Cihazı**), **Anabilim Dalı** ve bağlı **Birim** ile **Cihaz Türü** seçimini yapın (Cihaz Kodu ve Cihaz No otomatik oluşur). Seri No ve varsa Demirbaş No bilgilerini girin.
2. 2. sekmede radyasyonlu veya ölçüm cihazları için NDK Lisans No ve bitiş tarihini yazın; resmi lisans PDF belgenizi **[Belge Seç...]** ile doğrudan bağlayın (gerekirse **[Görüntüle]** ile açabilirsiniz) ve **RKS Sorumlusu** ile birim sorumlusunu seçin.
3. 3. sekmede varsa üretici garantisi onay kutusunu ve servis anlaşması tarihlerini işleyin; 4. sekmede mimari kat planını seçip oda içine tıklayarak pini yerleştirin ve **[Pin Kilitli]** butonuyla sabitleyin.
4. 5. sekmede cihazın kullanım kılavuzu ve teknik belgelerini **[Dosya Seç...]** → **[Yükle]** ile AES-256 Evrak Kasasına ekleyip **[Cihazı Kaydet]** butonuna basın (rolünüz onay gerektiriyorsa kayıt Merkezi Onay kuyruğuna iletilir).

#### 2. Toplu İçe/Dışa Aktarım, NDK Çizelgesi ve 300 DPI QR Paketi

1. Çoklu cihaz aktarımı için **[Excel İçe Aktar]** butonuna tıklayarak Evrensel İçe Aktarım Sihirbazı üzerinden iki sayfalı şablonla önizlemeli aktarım yapın.
2. Filtrelenmiş listeyi dışa aktarmak için araç çubuğundaki **[Dışa Aktar]** menüsünden Excel, PDF, Word veya **NDK Çizelgesi Oluştur (.xlsx)** seçeneğini çalıştırın.
3. Cihaz gövdesine etiket basmak için araç çubuğundaki **[QR Etiket]** menüsünden tekil cihaz için **[Seçili Cihaz İçin QR Etiket...]** (**[PNG Olarak Kaydet]** / **[Etiketi Yazdır]**) veya çoklu/toplu matbaa basımı için **[Toplu QR Baskı Paketi Oluştur (.zip)...]** seçeneğini kullanın.

#### 3. Devir Tutanağı ve 2 Aşamalı HEK Tasfiye Süreci

1. Bir veya birden fazla cihazı tablodan seçerek araç çubuğundan ya da sağ tık menüsünden **[Tutanak Oluştur]** (Devir, Hasar, Kabul, Genel) veya **[HEK]** komutunu çalıştırın; **Tutanak Oluştur** penceresinde sol/sağ listelerdeki **[Ekle]** / **[Çıkar]** butonlarıyla cihazları ve imza heyetini düzenleyip **[Evrak Kasasına Kaydet ve İmzaya Sun]** butonuna basın (Devir tutanağında birim güncelleme kutusu işaretliyse yeni birime göre Cihaz Kodu da otomatik güncellenir).
2. HEK tutanağı oluşturulduğunda dosya **HEK Süreç Yönetimi ve Ayniyat Tasfiye Arşivi** ekranına düşer; Ayniyat evrakı geldiğinde satırı seçip **[EBYS Gir / Dosyayı Kapat]** → **[Resmi Olarak Kapat ve Mühürle]** adımıyla sayıyı/eki işleyin; mühürlenen birleşik dosya **[Mühürlü Dosyayı Aç (PDF)]** ve **[Excel İcmal]** üzerinden denetime sunulur.

#### 4. 8 Adımlı NDK KLV-014 RKP Sihirbazı ve Web Portalı Saha Erişimi

1. Sol menüden **NDK RKP Sihirbazı** ekranını açın; **1. Kuruluş (KB.1-2)** adımında kurum ayarlarından verileri yükleyip **2. RKS (KB.3)**, **3. Çalışanlar (KB.4)**, **4. Cihazlar (KB.5)**, **5. Ölçüm (KB.6-7)** (ölçüm cihazları ve aktif dozimetreler) ve **6. RKE Matrisi (KB.8)** tablolarını canlı verilerden doğrulayın.
2. **7. Talimatlar (T.1-11)** adımında talimatları gözden geçirip gerekirse **[Hizmet İçi Eğitim Modülüne Güncelle]** ile LMS modülünü güncelleyin; **8. Belge Üret ve Onay** adımında **[Word (.docx) Resmi Başvuru Dosyası Oluştur ve Aç]**, **[PDF (.pdf) Resmi Dosya Oluştur ve Aç]** veya **[KVKK Evrak Kasasına Arşivle]** ile başvuruyu tamamlayın.
3. **Web Portalı ve Mobil QR Saha Akışı:** Saha personeli telefon veya tablet kamerasıyla cihaz etiketindeki QR kodu tarattığında ilgili cihazın künyesi, NDK lisans ve son kalite kontrol durumu anında açılır ve tek dokunuşla arıza bildirimi başlatılabilir.

### Sıkça Sorulan Sorular (SSS)

- **NDK lisans sürelerinde 180 gün üstü ile altı neden farklı gösteriliyor?** Tabloda gereksiz kalabalığı önlemek için vize bitimine 180 günden fazla süresi kalan cihazlarda yenileme sayacı gizlenir ve yalnızca bitiş tarihi sunulur (üzerine gelindiğinde kalan gün sayısı ipucunda görünür). Kalan süre **180 gün ve altına** indiğinde cihaz Yenileme Dönemine alınır; 45 gün ve 30 gün eşiklerinde alarm rengi sertleşir, süresi dolanlar ise **Günü Geçti** rozetiyle işaretlenir.
- **Düzenleme ekranında neden Cihaz No, Kaynak Grubu ve Cihaz Türü kilitleniyor?** Bu üç bilgi cihazın modalite kimliğini ve ilişkisel geçmiş kayıtlarını (arıza, kalite kontrol, kroki pini, RKP tablosu) belirlediği için kayıt sonrasında değiştirilmesine izin verilmez. Yalnızca cihaz başka bir birime devredildiğinde Birim seçimi veya onaylı Devir Tutanağı üzerinden Cihaz Kodu yeni birime uyarlanır.
- **Yanlışlıkla HEK sürecine alınan bir cihaz HEK ekranından geri döndürülebilir mi?** Resmi HEK komisyon tutanağıyla dosyaya bağlanmış ve EBYS numarasıyla mühürlenmiş cihazlar mevzuat gereği asla geri açılmaz. Hatalı bir HEK girişi henüz EBYS ile mühürlenmemişse veya tutanak aşamasındaysa durumu yetkili sistem yöneticisi tarafından incelenmelidir.
- **NDK RKP Sihirbazındaki 8 adım tüm kurum verilerini otomatik mi çeker?** Evet. RKS görevlendirmeleri, radyasyon çalışanlarının dozimetre/sağlık durumları, tescilli X-Ray cihazları, kalibrasyonlu ölçüm cihazları, aktif dozimetreler ve RKE koruyucu matrisi canlı veritabanından derlenir; yalnızca kuruluş kimlik ve yasal dayanak alanları ilk seferde kontrol edilerek kaydedilir.

---

## 19. Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (KKT / KUT)

Radyoloji ve tıbbi cihazların teknik arıza bildirimleri ile ara servis/test süreçlerini, X-ışını tüp değişimi künye senkronizasyonunu, ihale şartnamelerine bağlı Bu Yıl odaklı Periyodik Bakım Radarını ve TİTCK TCS-KLVZ-06 kılavuzuna uyumlu resmi rapor bazlı Kalite Uygunluk (KUT) / Periyodik Kalite Kontrol (KKT) süreçlerini tek merkezden yönetmenizi sağlar.

> **Yasal Güvence:** TİTCK kılavuzu uyarınca radyoterapi cihazlarında KUT 36 ay (3 yıl), diagnostik ve nükleer tıp cihazlarında KUT 60 ay (5 yıl), periyodik KKT ise 3/6/12 ay periyotla izlenir; Sınırlı Kullanım kararı azami 1 yıl içinde kapatılır, Kullanımı Uygun Değil kararında cihaz otomatik arızalı statüsüne kilitlenir.

### Kısa Reçete: Arıza Kapatma, İhale Bakım ve Resmi KUT/KKT Planlama

**Kısa Reçete: İhale Bakım veya KUT/KKT Takvimi Planlama ve Raporla Kapatma**

**1. İstenen Sonuç:**
Cihazın sözleşme veya yasal periyot bitimine kadar olan tüm bakım ve kalite kontrol dönemlerinin takvime işlenmesi, işlem gerçekleştiğinde şifreli PDF formuyla kapatılması.
**2. Yapılacak İşlem:**
İlgili modülden **[İhale Bakım Takvimi Planla]** veya **[İhale Kalibrasyon / KUT Takvimi Planla]** butonuna tıklayıp cihazları, tarihi ve periyodu seçin; dönem geldiğinde satırı seçip **[Bakımı Tamamla]** ya da **[Planlı Testi Tamamla]** üzerinden imzalı PDF raporu ekleyin.
**3. Sistem Etkisi:**
Sözleşme bitimine kadar tüm slotlar Beklemede statüsüyle radara işlenir; kapatılan belgeler AES-256 Evrak Kasasında saklanır ve olumsuz QC kararında cihaz güvenlik kilidine alınır.

- **İhale Bakım Periyotları:** 1 / 3 / 6 / 12 Ay
- **TİTCK KUT Geçerliliği:** 36 Ay (RT) / 60 Ay (Rad.)
- **Sınırlı Kullanım Takibi:** Azami 1 Yıl Termin
- **Olumsuz QC Etkisi:** Otomatik Arızalı Kilidi

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Arıza çözüm ara statüleri, tüp değişimi senkronizasyonu, ihale bakım radarı, TİTCK resmi KUT/KKT rapor modeli ve güvenlik kilidi kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **[Yeni Arıza Bildir] & [Seçili Arızayı Çöz]** (Esnek Durum & QC Kilit Koruması) | Arızalı cihazda çekimi durdurmak, her servis aşamasını takip etmek ve uygunsuz QC kilidinin kalkmasını önlemek. | Bildirimde cihaz otomatik Arızalı olur; müdahale geçmişi zaman ve kullanıcı damgasıyla korunur. Tüm arızalar kapansa bile son resmi QC sonucu Kullanımı Uygun Değil ise cihaz Aktif duruma açılmaz; hurda veya devredilmiş cihazlara işlem yapılamaz. | Cihazda arıza oluştuğunda veya servis sürerken. | Tekniker / Biyomedikal / RKS |
| **X-Işını Tüp Değişimi & [Teknik Rapor]** (Zorunlu Seri No ve Künye Tutanağı) | Ana radyasyon üreten tüpün değişimini eksiksiz seri numarasıyla cihaz künyesine işlemek. | Çözüm formunda tüp değişimi kutusu işaretlendiğinde yeni tüp seri numarası zorunlu tutulur ve cihaz künyesi güncellenir; **[Teknik Rapor]** ile yazdırılabilir A4 servis tutanağı oluşturulur. | X-ışını tüpü yenilendiğinde veya teknik rapor gerektiğinde. | Biyomedikal / RKS |
| **[İhale Bakım Takvimi Planla] & Bu Yıl Radarı** (Tekil Slot ve 4 KPI Kartı) | İhale sözleşmesine bağlı bakım aylarını mükerrer kayıt oluşturmadan önceden sabitlemek. | Seçilen aktif cihazlara sözleşme bitişine dek mükerrer açık slot açmadan 1, 3, 6 veya 12 aylık Beklemede slotları üretir; radar ekranı varsayılan Bu Yıl görünümüyle geciken ve yaklaşan bakımları gösterir. | Bakım ihalesi sonrası veya planlı takip açıldığında. | Klinik Amiri / Biyomedikal |
| **[Bakımı Tamamla] & [Servis Formu (PDF)]** (Şifreli Bakım Kapatma) | Yapılan periyodik bakımı refakatçi ve servis formu PDF belgesiyle belgelemek. | Gerçekleşen tarih, teknisyen, değişen parça ve imzalı servis formu PDF dosyası AES-256 kasaya kaydedilir ve satır Tamamlandı statüsüne geçer. | Servis bakımı tamamlandığında. | Tekniker / RKS |
| **[İhale Kalibrasyon / KUT Takvimi Planla]** (TİTCK Modalite Bazlı Periyot Motoru) | KKT ve KUT kalibrasyon tarihlerini modalite mevzuatına göre tek atomik takvimde planlamak. | Seçilen kontrol türü ve cihaz modalitesine göre KUT için 36 veya 60 ay, KKT için 3, 6 veya 12 ay önerir; mükerrer açık slotları engelleyerek planlı test takvimini tek işlemde oluşturur. | KKT ihalesi veya yeni KUT dönemi başladığında. | Medikal Fizikçi / RKS |
| **[Planlı Testi Tamamla] / [Münferit Resmi Rapor Gir]** (KUT, KKT ve Kabul/Onarım Testleri) | Günlük kağıt formlar yerine yetkili KUK veya medikal fizikçi imzalı resmi raporları arşivlemek. | Yalnızca aktif cihazlar için rapor no, yapan kuruluş/KUK yetki belge no ve PDF rapor kasaya alınır; Sınırlı Kullanım kararı verilirse eksiklik giderme için azami 1 yıllık takip termini otomatik başlar. | Resmi KUT, KKT veya onarım sonrası test raporu gelince. | Medikal Fizikçi / RKS |
| **Olumsuz QC Güvenlik Karantina Kilidi** (Doğrudan Kayıt ve Onay Kuyruğu Kilidi) | Kalibrasyon veya radyasyon emniyeti başarısız çıkan cihazın hasta çekiminde kullanılmasını engellemek. | Tanımsız sonuç metinleri reddedilir; resmi test sonucu Kullanımı Uygun Değil seçildiğinde hem doğrudan kayıtta hem merkezi onay kuyruğundan onaylandığında cihaz anında Arızalı statüsüne çekilerek kilitlenir. | QC/KUT sonucu olumsuz işlendiğinde veya onaylandığında. | Medikal Fizikçi / Sistem |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Günlük Kontrol Formları QC Ekranına mı Girilir ve X-Işını Tüpü Değişince İşlem Biter mi?**
> - **Yanlış Algı:** *"Kalite kontrol ekranına günlük kağıt çekim formlarını girmemiz gerekir; ayrıca X-ışını tüpü değiştiğinde arızayı kapatınca sistem dışı başka bir resmi işlem kalmaz."*
> - **Gerçek Sistem Mantığı:** **İkisi de doğru değildir.** TİTCK TCS-KLVZ-06 kılavuzu uyarınca RADPYS yalnızca resmi imzalı raporla belgelenen üç yasal kategoriyi (Kalite Uygunluk KUT, Periyodik KKT ve Kabul/Onarım Sonrası Test) takip eder. Ayrıca arıza ekranında X-ışını tüpü değişimi işaretlenip kapatıldığında cihazın aktif tüp seri numarası künyede güncellenir; ancak tüp değişimi NDK lisansı açısından tadil/revizyon gerektirebileceğinden RKS biriminin gecikmeden NDK bildirimi yapması ve Kabul/Onarım Sonrası Test kaydını işlemesi şarttır.

### Süreç Akış Şeması

1. **Arıza ve Onarım Döngüsü:** Arıza açılınca cihaz kullanım dışı sayılır; parça bekleme veya onarım sonrası test aşamalarında kilit korunur ve yalnızca tüm açık arızalar kapatıldığında (varsa yeni X-ışını tüpü işlenerek) cihaz Aktif duruma döner.
2. **İhale Bakım Radarı:** Sözleşme bitimine kadar üretilen tüm bakım tarihleri Bu Yıl varsayılan görünümünde izlenir ve imzalı PDF servis formu şifreli kasaya alınarak kapatılır.
3. **Resmi KUT/KKT ve Emniyet Kilidi:** KUT/KKT takvimi veya münferit resmi rapor sonucu Kullanımı Uygun ise geçerlilik başlatılır, Sınırlı Kullanım ise azami 1 yıllık termin açılır, Kullanımı Uygun Değil ise cihaz güvenlik kilidiyle Arızalı statüsüne çekilir.

### Adım Adım İşlem Rehberi

#### 1. Cihaz Arızası Bildirme ve Müdahale Sürecini Yönetme

1. **Cihaz Arıza ve Onarım Takibi** ekranında **[Yeni Arıza Bildir]** butonuna tıklayın; arızalı cihazı, aciliyet seviyesini (Düşük, Normal, Yüksek, Acil), bildiren personeli ve hata kodunu/tanımını girip **[Arızayı Kaydet]** butonuna basın (cihaz envanterde otomatik Arızalı olur).
2. Servis müdahalesi başladığında satırı seçip **[Seçili Arızayı Çöz]** butonuna tıklayın; parça bekleniyorsa veya onarım sonrası deneme yapılıyorsa durumu **Parça Bekleniyor (Sipariş Verildi)** ya da **Test Aşamasında** seçip **[Süreç Durumunu Kaydet]** butonuna basarak cihazı koruma altında tutun.
3. İşlem tamamlandığında servis firmasını, çözen kişiyi ve yapılan teknik işlemi yazın; tüp yenilendiyse **X-Işını Tüp Değişimi Var** kutusunu işaretleyip yeni seri numarasını ekleyin. **[Belge / Form Seç]** ile servis formunu bağlayıp **[Teknik Rapor]** üzerinden A4 tutanağını kontrol edin ve **[Arızayı Çöz ve Kapat]** butonuna basın.

#### 2. İhale Şartnamesine Göre Periyodik Bakım Planlama ve Kapatma

1. **Cihaz Periyodik Bakım ve Sözleşme Takibi** ekranında üst kartlardan (Bu Ay Planlanan, Gelecek Ay, Geciken, Tamamlanan) durumu izleyin ve **[İhale Bakım Takvimi Planla]** butonuna tıklayın.
2. Açılan pencerede marka/modalite veya arama süzgeciyle bir ya da birden fazla cihazı işaretleyin (gerekirse **[Tümünü Seç]** / **[Seçimi Temizle]** kullanın); ilk bakım tarihi, sözleşme bitişi ve bakım periyodunu (1, 3, 6 veya 12 ay) girip **[Bakım Takvimini Oluştur]** butonuna basın.
3. Bakım yapıldığında ilgili satıra çift tıklayın veya **[Bakımı Tamamla]** butonuna basın; refakat eden personel, teknisyen ve yapılan işlemleri girip **[PDF Form Seç...]** ile ıslak imzalı formu ekleyin ve **[Bakımı Tamamla ve Kaydet]** butonuna tıklayın (kayıtlı belgeleri **[Servis Formu (PDF)]** veya **[Görüntüle]** ile açabilirsiniz).

#### 3. TİTCK Resmi Kalite Kontrol (KUT / KKT) Takibi ve Karantina Kilidi

1. **Cihaz Kalite Kontrol (KKT), Kalite Uygunluk (KUT) ve Kalibrasyon Takibi** ekranında çoklu cihaz planlaması için **[İhale Kalibrasyon / KUT Takvimi Planla]** butonuna tıklayın; modalite seçimine göre sistemin önerdiği yasal periyodu (KUT için Radyoterapi 36 ay, Diagnostik/Nükleer Tıp 60 ay; KKT için 3/6/12 ay) ve sözleşme bitiş tarihini onaylayıp **[Kalibrasyon / QC Takvimini Oluştur]** butonuna basın.
2. Planlanan tarihte testi tamamlamak için satırı seçip **[Planlı Testi Tamamla]**, ihale dışı kurulum/tüp değişimi sonrası tekil rapor için **[Münferit Resmi Rapor Gir]** butonuna tıklayın.
3. Kontrol türünü (**Kalite Uygunluk Testi — KUT**, **Periyodik Kalite Kontrol — KKT** veya **Kabul / Onarım Sonrası Doğrulama Testi**), rapor no, yapan kuruluş ve KUK yetki belge numarasını yazıp **[PDF / Rapor Seç...]** ile imzalı raporu ekleyin.
4. Sonucu (**Kullanımı Uygun**, **Sınırlı Kullanım** veya **Kullanımı Uygun Değil**) seçip kaydedin; **Uygun Değil** sonucunda açılan güvenlik uyarısını onayladığınızda cihaz otomatik Arızalı statüsüne kilitlenir (tüm kayıtları **[İmzalı Rapor (PDF)]** ve **[Dışa Aktar]** üzerinden inceleyip Excel/PDF/Word aktarabilirsiniz).

#### 4. Web Portalı ve Mobil QR ile Saha Teknisyen Akışı

1. Saha teknikeri veya sorumlusu Web Portalı üzerinden cihazın QR etiketini kamerayla okutarak cihaz seçebilir, doğrudan arıza bildirimi oluşturabilir veya açık arızaları adım adım kapatabilir.
2. Yetkili kullanıcılar Web Portalındaki Bakım ve Kalite Kontrol sekmelerinden geciken/yaklaşan planlı slotları takip edebilir, servis/test PDF formunu yükleyerek planlı veya münferit bakım ile KKT/KUT kayıtlarını sahadan tamamlayıp mevcut şifreli belgeleri görüntüleyebilir.

### Sıkça Sorulan Sorular (SSS)

- **Periyodik bakım ekranı açıldığında neden varsayılan olarak Bu Yıl filtresi gelir?** Önceki veya gelecek yıllara ait yüzlerce ihale slotu arasında günlük takibin kaybolmasını önlemek için ekran doğrudan içinde bulunulan yılın bakım takvimini ve aylık radar sayaçlarını öne çıkarır. Geçmiş yıl kayıtlarını incelemek istediğinizde üst filtre çubuğundan zaman seçimini değiştirmeniz yeterlidir.
- **Arıza çözüm penceresinde Test Aşamasında seçilirse cihaz neden hemen Aktif olmaz?** Büyük parça veya X-ışını tüp değişimi sonrasında teknik servis onarımı bitirse bile medikal fizikçinin kabul/doğrulama ve doz kontrol testleri henüz tamamlanmamış olabilir. **Test Aşamasında** ara statüsü cihazın onarımın ilk aşamasını geçtiğini gösterirken testler bitene kadar klinik hasta çekimini güvenle bekletir.
- **Sınırlı Kullanım sonucu girildiğinde 1 yıllık termin ne anlama gelir?** TİTCK düzenlemeleri gereğince cihazda çalışmayı tamamen durdurmayan ancak düzeltilmesi gereken kusurlar varsa **Sınırlı Kullanım** kararı verilir. Sistem test tarihinden itibaren azami 1 yıllık düzeltme ve tekrar kontrol termini hesaplar ve rapor tablosunda ayrıca vurgular.
- **Bakım veya arıza işlemlerinde maliyet tutarı girilmesi zorunlu mudur?** Hayır. RADPYS V4 arıza ve bakım modülleri finansal fatura muhasebesi yerine teknik servis sürelerini, cihaz duruş güvenliğini, parça/tüp değişim tarihçesini ve ıslak imzalı resmi servis/QC formlarının şifreli izlenebilirliğini yönetmek üzere kurgulanmıştır.

---

## 20. Radyasyon Koruyucu Ekipman (RKE) ve DIN 6857-1 Muayenesi

Radyoloji, nükleer tıp, kardiyoloji ve ameliyathanelerde kullanılan kurşun önlük, yelek-etek, tiroid ve gonad koruyucuları ile koruyucu gözlük ve paravanların akıllı kodlamasını, bütünleşik görsel ve skopi SVG silüet muayenesini, DIN 6857-1 / IEC 61331-3 karar motorunu, 10+ yıl ömür takibini, toplu muayeneyi, hurda devir kilidini ve SKS 6.1 resmi denetim çizelgelerini yönetmenizi sağlar.

> **Yasal Güvence:** DIN 6857-1, IEC 61331-3 ve Sağlık Bakanlığı SKS 6.1 uyarınca tiroid/gonad koruyucular ile önlük kritik organ bölgelerinde delik toleransı sıfırdır (0,0 mm²); non-kritik bölgelerde toplam hasar 15,0 mm² sınırını aştığında veya kurşun blok kayması tespit edildiğinde ekipman HEK/Hurda kararına çekilir.

### Kısa Reçete: RKE Kalite Kontrol ve Kusur Haritalama

**Kısa Reçete: RKE Kalite Kontrol ve Kusur Haritalama**

**1. İstenen Sonuç:**
Koruyucu önlük veya donanımın yıllık fiziki ve skopi kontrolünün yapılarak DIN 6857-1 kararının tescil edilmesi ve ekipman statüsünün güncellenmesi.
**2. Yapılacak İşlem:**
RKE listesinde satırı seçip **[Muayene ve QC]** butonuna tıklayın; kusursuz ekipmanda doğrudan **[1-Tıkla Kusursuz / Uygun Onayla]** kullanın ya da ön/arka silüet krokisine tıklayıp kusur çapını girerek **[Muayeneyi Kaydet ve Onayla]** butonuna basın.
**3. Sistem Etkisi:**
Dairesel hasar alanı (π · (d/2)²) ve kritik bölge otomatik hesaplanır; HEK, Şartlı Kullanım veya Uygun kararı kronolojik en güncel muayeneye göre envantere işlenir ve hasar fotoğrafları şifreli kasaya alınır.

- **Kritik Organ Toleransı:** 0,0 mm² (Sıfır Tolerans)
- **Non-Kritik Eşik:** ≤ 5 Uygun / 5–15 Şartlı / > 15 HEK
- **Ömür Takip Eşiği:** 5 Yıl Dikkat / 10+ Yıl HEK Önerisi
- **Platform:** Masaüstü + Mobil Web QR

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Çift katmanlı kodlama, skopi SVG kusur krokisi, DIN 6857-1 karar eşikleri, toplu muayene, hurda devir güvenlik kilidi, 300 DPI QR paketi ve RKS onay akışı.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Akıllı Ekipman No ve Koruyucu No Üretimi** (Yeni Ekipman ve Düzenleme Kartı) | Ekipmanın kalıcı tür kimliği ile bulunduğu birim/askılık bilgisini birbirinden ayırmak. | Tür seçildiğinde merkezi Ekipman No otomatik önerilirken Anabilim Dalı/Birim seçimiyle birime özgü Koruyucu No üretilir ve düzenlemede transfer izi korunur. | Yeni koruyucu kabulünde veya birim değişiminde. | Medikal Fizikçi / RKS |
| **Bütünleşik Kokpit ve Ön/Arka SVG Kusur Krokisi** (Görsel + Skopi (DIN 6857-1) Modu) | Skopi röntgeni ve 5 fiziki kriteri tek pencerede milimetrik koordinatla belgelemek. | Silüet üzerinde tıklanan koordinattan tiroid, gonad veya göğüs kritik bölgesi otomatik algılanır, girilen çaptan alan hesaplanır ve bulgu listesi senkronize edilir. | Yıllık skopi taramasında veya şüpheli kontrolde. | Medikal Fizik Uzmanı |
| **DIN 6857-1 Karar Motoru ve 10+ Yıl Ömür Kuralı** (Tekil Karar Motoru ve 6 / 12 Ay Takvim) | Masaüstü ve mobil sahada aynı yasal eşiği uygulamak ve Şartlı ekipmanları yakın izlemeye almak. | Kritik bölgede sıfır tolerans (0,0 mm²), blok kayması, 15,0 mm² üstü hasar veya 10+ yıl sınırında öncelikle HEK; kusurlu veya düşük Pb kalınlığında Şartlı Kullanım (6 ay sonraki muayene); tam sağlam kayıtta Kullanıma Uygun (12 ay sonraki muayene) kararı artık yıl uyumlu üretilir. | Her kusur pini, önizleme veya muayene kaydında. | Sistem Motoru / RKS |
| **[1-Tıkla Kusursuz / Uygun Onayla] ve [Toplu Muayene]** (İptal/Yaş Koruması ve Görünür Satır Süzgeci) | Yıllık skopi taramasını hızlandırırken kusurlu/10+ yaşlı veya gizli birim ekipmanlarının yanlışlıkla onaylanmasını önlemek. | Hızlı onayda kullanıcı vazgeçerse veya 10+ yaş sınırı aşılırsa kusur pinlerini silmeden işlemi durdurur; **[Toplu Muayene]** penceresinde ise yalnızca filtreyle ekranda görünen seçili ekipmanları işler. | Yıllık toplu veya hızlı RKE taramalarında. | Medikal Fizikçi / RKS |
| **[Zimmet Transfer] ve Hurda Devir Güvenlik Kilidi** (Birim / Askılık ve Personel Devri) | Hurdaya ayrılmış veya kayıp önlüğün yanlışlıkla başka bir birime verilmesini engellemek. | Ekipman durumu HEK/Hurda, Kayıp veya Kullanım Dışı ise transfer formunda uyarı gösterilir ve **[Transferi Onayla]** butonu kilitlenir. | Personel veya oda/askılık devri yapılırken. | Birim Sorumlusu / RKS |
| **[QR Etiket] Tekil Pasaport ve 300 DPI Baskı Paketi** (Etiket Yazdırma ve ZIP Matbaa Paketi) | Önlüğe dikilecek suya dayanıklı dijital pasaport kartını tekil veya toplu basıma hazırlamak. | Tekli satır seçiliyken etiket önizleme/yazdırma penceresi açılır; çoklu seçimde veya seçimsiz tıklamada 300 DPI etiketler, baskı şartnamesi metin dosyası ve icmal tablosu tek ZIP paketine konur. | İlk kabulde veya toplu etiket baskısında. | Medikal Fizikçi / Tekniker / RKS |
| **Muayene Geçmişi, RKS Onayı ve Toplu [HEK Tutanağı]** (Denetim İzi ve Komisyon Çıktısı) | Geçmiş muayene girişlerinin güncel statüyü bozmasını önlemek ve toplu hurda tutanağı üretmek. | Envanter statüsü daima en ileri tarihli muayeneye göre eşitlenir; Muayene Geçmişi ekranında revizyon ve RKS onayı yapılır, çoklu seçimde **[HEK Tutanağı]** sihirbazı tüm kalemleri tek tutanakta birleştirir. | Geçmiş tarihli kayıt, revizyon veya yıllık hurda kararında. | Medikal Fizikçi / RKS / Komisyon |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Şartlı Önlükler Ameliyathanede Kullanılabilir mi veya Geçmiş Muayene Güncel Statüyü Bozar mı?**
> - **Yanlış Algı:** *"5–15 mm² arası hasar alıp Şartlı Kullanım verilen önlüğü anjiyo ve ortopedi skopisinde de giyebiliriz; ayrıca sisteme eski tarihli bir muayene girersek cihazın bugünkü HEK statüsü bozulur."*
> - **Gerçek Sistem Mantığı:** **İkisi de yanlıştır.** **Şartlı Kullanım** alan önlükler (5–15 mm² çevre hasarı veya dikiş/askı kusuru olanlar) primer ışınlama konisi ve girişimsel işlemlerde kesinlikle kullanılmaz; yalnızca düşük saçılmalı alanlarda ve hasta yakını refakatinde değerlendirilir. Ayrıca sistem kronolojik eşitleme kuralıyla envanter durumunu daima takvimdeki en yeni tarihli muayeneye göre hesaplar; sonradan girilen eski tarihli bir tarama bugünkü HEK kararını asla bozmaz.

### Süreç Akış Şeması

1. **Envanter ve Kodlama:** Ekipman kaydında tür ve birim bazlı çift katmanlı kod üretilir, ön/arka kurşun kalınlığı ve giriş tarihine göre ekipman yaşı izlenir.
2. **Bütünleşik Muayene ve Karar Motoru:** 5 fiziki kriter ile Ön/Arka SVG kroki kusurları birlikte değerlendirilir; kritik organ hasarı, blok kayması veya 15 mm² aşımı HEK kararı üretirken 5–15 mm² çevre kusuru Şartlı Kullanım, sağlam kayıtlar Kullanıma Uygun sonucu alır.
3. **Arşiv, Kilit ve SKS Çıktısı:** Fotoğraf ve röntgenler Evrak Kasasında şifrelenir, HEK ekipmanların zimmet devri kilitlenir, Muayene Geçmişinden RKS onayı verilerek 300 DPI QR ve SKS 6.1 çizelgesi üretilir.

### Adım Adım İşlem Rehberi

#### 1. Yeni Ekipman Kaydı, Akıllı Kodlama ve Zimmet Transferi

1. **RKE Envanter** ekranında **[Yeni Ekipman]** butonuna tıklayın; tip, Anabilim Dalı ve Alt Birim seçildiğinde sistem merkezi **Ekipman No** ile birim bazlı **Koruyucu No** bilgisini otomatik önerir (çoklu aktarım için **[Excel İçe Aktar]** kullanabilirsiniz).
2. Kuruma giriş tarihi, marka, beden, askılık konumu ile ön/arka kurşun eşdeğerini (mm Pb) doldurup **[Kaydet]** butonuna basın.
3. Önlüğü başka bir personele veya birime devretmek için satırı seçip **[Zimmet Transfer]** butonuna tıklayın, hedef birim ve teslim bilgilerini girip **[Transferi Onayla]** butonuna basın (HEK, Kayıp veya Kullanım Dışı kayıtlarda transfer güvenlik kilidi devreye girer).

#### 2. Bütünleşik Tekil Muayene, SVG Kroki Pinleme ve 1-Tıkla Onay

1. Envanterde ekipmanı seçip **[Muayene ve QC]** butonuna tıklayın; üstten **[Görsel / Fiziki Muayene]** veya **[Skopi / X-Işını (DIN 6857-1)]** modları arasında geçiş yapın.
2. Ekipman tümüyle sağlamsa doğrudan alt soldaki **[1-Tıkla Kusursuz / Uygun Onayla]** butonunu kullanın; aksi halde 5 rutin fiziki kriteri ve klinik bulguları işaretleyin.
3. Skopi altında kusur tespit ettiğinizde **[Ön Yüz]** veya **[Arka Yüz]** görünümünü seçip tuvalde hasarlı noktaya tıklayın; açılan pencerede kusur türü ile çap (mm) değerini girin (kritik organ bölgesi otomatik algılanır ve alan mm² cinsinden hesaplanır).
4. Varsa **Fotoğraflar ve Belgeler** sekmesinden **[Fotoğraf / Röntgen Ekle]** ile görselleri şifreli kasaya ekleyin; canlı karar rozetini doğrulayıp **[Muayeneyi Kaydet ve Onayla]** butonuna tıklayın.

#### 3. Toplu Muayene, Muayene Geçmişi ve RKS Onayı

1. Çok sayıda ekipmanın yıllık kontrolünü tamamlamak için **[Toplu Muayene]** butonuna tıklayın; **[Gecikenleri ve 10+ Yaşlıları Seç]** ile tarihi geçenleri otomatik işaretleyin, skopi cihazı ve kararı seçip (isterseniz **10+ Yıl Aşanları Otomatik HEK (Hurda) Yap** seçeneğini açarak) **[Seçili Ekipmanları Kaydet]** butonuna basın.
2. Geçmiş taramaları incelemek için **Muayene ve Kontrol Geçmişi** ekranını açın; **[Detay ve Rapor]** ile A4 raporu ve ön/arka krokiyi görüntüleyin, **[Düzenle / Revize Et]** veya **[Belge / Fotoğraf Ekle]** ile ekleme yapın, sağ tık menüsünden **RKS Olarak Onayla** komutuyla kaydı onaylayın.

#### 4. QR Pasaport, SKS Çizelgesi, Toplu HEK ve Web Mobil Muayene

1. Tekil veya çoklu QR basımı için araç çubuğundan **[QR Etiket]** butonuna tıklayın: tek satır seçiliyken pasaport önizlemesinden **[PNG Olarak Kaydet]** veya **[Yazıcıya Gönder]**, çoklu seçimde ya da seçimsiz basımda 300 DPI PNG etiketleri ve baskı şartnamesini içeren ZIP paketini indirin.
2. Denetim çizelgeleri için **[Dışa Aktar]** menüsünden SKS 6.1 RKE çizelgesini Excel/PDF/Word formatında alın; hurdaya ayrılacak birden çok önlüğü Ctrl veya Shift ile seçip **[HEK Tutanağı]** butonundan toplu komisyon tutanağı üretin (tekil hurdaya çekmek için **[HEK'e Ayır]** kullanılır).
3. **Web Portalı ve Mobil QR Saha Akışı:** Saha kullanıcısı mobil kamerayla önlükteki QR etiketi okuttuğunda dijital pasaport kartı açılır; parmakla yakınlaştırılabilen dokunmatik ön/arka SVG silüeti üzerinde kusur işaretlenebilir, canlı kamera fotoğrafı eklenebilir, askılık hızlı sayımı ve toplu muayene sorumlu birim yetkisi dahilinde sahadan tamamlanabilir.

### Sıkça Sorulan Sorular (SSS)

- **10+ yılını dolduran bir kurşun önlük skopide tamamen sağlam çıkarsa ne olur?** Sistem 5–10 yıl arası ekipmanları yaşlı/dikkat takibine alır; **10 yıl ve üzerine** çıktığında ise malzeme yorulması riskine karşı otomatik HEK önerisi üretir. Tekil kokpitte nihai klinik karar medikal fizikçinin ve kurum yetkililerinin değerlendirmesiyle onaylanır; toplu muayene ekranında ise 10+ yaşlıları otomatik HEK yapma seçeneği kullanıcı kontrolüne bırakılmıştır.
- **Bir RKE ekipman tanımı (türü) silindiğinde eski muayene ve envanter kayıtları silinir mi?** Hayır. Silinmek istenen RKE türüne bağlı en az bir ekipman veya muayene geçmişi varsa sistem veri bütünlüğünü korumak adına kaydı fiziksel silmez, **Pasife** alarak yalnızca yeni ekipman açılır listelerinden gizler; hiç kullanılmamış tanımlar kalıcı silinir.
- **Skopi çekiminden gelen hasar fotoğrafları ve PDF belgeleri nerede saklanır?** Yüklenen tüm röntgen, skopi görseli ve hasar fotoğrafları yerel disk klasörlerinde açık dosya olarak bırakılmaz; veritabanı içinde AES-256 Fernet ile şifrelenerek Evrak Kasasında saklanır ve yalnızca yetkili kullanıcılar tarafından geçici olarak deşifre edilip görüntülenir.
- **Önlükte hem dikiş açılması hem küçük bir non-kritik delik varsa hangi karar geçerli olur?** Bütünleşik karar motoru her zaman en katı güvenlik kuralını uygular. İncelenen 5 fiziki kriterdeki hata ile SVG kroki üzerindeki hasar birlikte değerlendirilir; herhangi bir katmanda HEK kriteri oluşursa (örneğin kurşun blok kayması veya kritik bölge deliği) toplam karar doğrudan **HEK / Hurdaya Ayır** olur.

---

## 21. Merkezi Onay Bekleyen Görevler Paneli

Tüm klinik ve idari birimlerden gelen personel izinlerini, karşılıklı nöbet devirlerini, aylık nöbet istek ve mazeretlerini, birim onaylı nöbet planlarını, RKE muayene onaylarını, 4-göz veri değişiklik taleplerini ve imza bekleyen resmi tutanakları 7 kategorili tek merkezden denetleyip karara bağlamanızı sağlar.

> **Yasal Güvence:** Tüm onay ve zorunlu ret kararları aktör rolüyle birlikte değiştirilemez denetim izine işlenir; sağlık muayenelerinde hekim incelemesi yapılmadan hızlı onay verilmesi güvenlik gereği engellenmiştir.

### Kısa Reçete: Bekleyen Talepleri İnceleme ve Karara Bağlama

**Kısa Reçete: Bekleyen Talepleri İnceleme ve Karara Bağlama**

**1. İstenen Sonuç:**
İzin, nöbet devri/isteği, nöbet planı, RKE muayenesi, veri değişikliği ve imza bekleyen tutanakların yetkili yönetici veya RKS tarafından tek merkezden sonuçlandırılması.
**2. Yapılacak İşlem:**
Üstteki tıklanabilir özet kartlarından ya da soldaki 7 kategori sekmesinden bekleyen grubu açın; gerekirse **[İncele ve Karar Ver]** ile ayrıntıları gözden geçirip **[Onayla]** / **[Yayınla]** veya zorunlu ret gerekçesiyle **[Reddet]** butonuna basın.
**3. Sistem Etkisi:**
İzin bakiyeleri anında düşer, devirlerde nöbet çizelgesi güncellenir, veri değişikliklerinde eski-yeni fark onaylanıp ek belgeler AES-256 Evrak Kasasına taşınır ve karar çalışan bildirimine yansır.

- **Onay Kategorisi:** 7 Sekme / 8 Özet Kartı
- **Kuyruk Çekim Sınırı:** Kategori Başına 500 Kayıt
- **Sağlık Güvenlik Kilidi:** Hızlı Onay Engelli
- **Platform:** Masaüstü Karar + Web Bildirim

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*7 kategorili onay kuyruğu, 3 aşamalı nöbet devri, 4-göz veri fark karşılaştırması, hekim doğrulama kilidi, RKE RKS onayı ve resmi tutanak kapatma kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **8 Özet Kartı ve 7 Kategori Rozeti** (Tıklanabilir Sayaç ve Hızlı Arama) | Yüzlerce onay arasında kaybolmadan bekleyen kategorilere tek tıkla geçmek. | Her kategoride bekleyen kayıt sayısı kart ve sekme rozetinde gösterilir (0 olunca gizlenir); Toplam Bekleyen kartı bekleyen talebi bulunan ilk sekmeyi açar. | Panel açıldığında veya talep geldiğinde. | Birim Amiri / RKS / İdare |
| **İzinler, Nöbet İstekleri ve İdari Plan Yayını** (**[Onayla]**, **[Yayınla]**, **[Taslağa Geri Gönder]**) | İzin bakiyelerini düşmek, nöbet kısıtlarını bağlamak ve birim planını yayımlamak. | İzin onayında kalan bakiye anında güncellenir; nöbet istekleri çizelge motoruna kısıt olarak aktarılır; planlarda **[Yayınla]** çizelgeyi portala açarken **[Taslağa Geri Gönder]** planı birime iade eder. | İzin/istek geldiğinde veya aylık plan sunulduğunda. | Birim Amiri / Başhekimlik / İdare |
| **3 Aşamalı Nöbet Devri Onay Zinciri** (Devralan Rızası + **[İncele ve Karar Ver]**) | Personeller arası nöbet takasının karşılıklı onay olmadan çizelgeyi değiştirmesini önlemek. | Devralan çalışan Web Portalından kabul verene dek talep devralan onayı aşamasında bekler; amir inceleyip onayladığında çizelgedeki nöbetçi değişimi gerçekleşir. | Nöbet takası devralan tarafından onaylandığında. | Nöbetçi Personel / Birim Amiri |
| **RKE Muayeneleri RKS Onay Sekmesi** (**[İncele ve Muayene Detayı]** & **[RKS Olarak Onayla]**) | Sahada veya toplu olarak yapılan DIN 6857-1 kurşun ekipman kontrollerini RKS imzasıyla kesinleştirmek. | Muayene raporu ve kusur krokisi incelenerek **[RKS Olarak Onayla]** ile tescil edilir ya da **[Reddet / İade Et]** ile gerekçeli şekilde düzeltmeye gönderilir. | RKS onayı bekleyen RKE muayenesi varken. | RKS Sorumlusu |
| **4-Göz Veri Değişiklikleri ve Fark İnceleme** (Personel, Sağlık, Eğitim, RGS, Olay/DÖF, Cihaz) | Onay zorunluluğu tanımlı rollerin tüm ekleme, güncelleme ve silme işlemlerini denetlemek. | **[İncele ve Karar Ver]** penceresi eski değerleri kırmızı, yeni talep edilen değerleri yeşil satırlarla karşılaştırır; **[Talebi Onayla]** ile kayıt işlenir ve geçici ek belgeler AES-256 Evrak Kasasına taşınır. | Onaya tabi rol kayıt değişikliği yaptığında. | Modül Sorumlusu / Yönetici |
| **Sağlık Muayenesi Hızlı Onay Engeli** (Zorunlu Hekim İnceleme Formu) | İşe giriş veya periyodik muayene bulgularının incelenmeden tek tıkla onaylanmasını önlemek. | Sağlık muayenesi ekleme taleplerinde hızlı onay çalıştırılmaz ve sistem doğrudan Göz, Dahiliye, Dermatoloji bulgularını içeren hekim doğrulama formunu açar. | Sağlık muayenesi onaylanmak istendiğinde. | İşyeri Hekimi / RKS |
| **Resmi Tutanaklar ve Zorunlu Ret Kuralı** (**[Taslak Görüntüle]** & **[İmzalı Belge Yükle / Onayla]**) | Heyet tutanaklarının ıslak imzalı nüshalarını tamamlamak ve ret işlemlerinde iz bırakmak. | Taslak tutanak incelenip EBYS imzalı PDF yüklendiğinde tutanak kasası güncellenir; tüm 7 sekmede ret işleminde metin gerekçesi zorunludur ve ret sonrası talep arşivlenerek kilitlenir. | Tutanak imzalandığında veya talep reddedildiğinde. | Birim Amiri / RKS / İdare |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Sağlık Muayeneleri Hızlı Onayla Geçilebilir mi veya Reddedilen Talep Geri Açılabilir mi?**
> - **Yanlış Algı:** *"Veri Değişiklikleri sekmesinde Hızlı Onayla diyerek sağlık muayenesi dahil her talebi tek tıkla onaylayabilirim; yanlışlıkla reddettiğim bir talebi de sonradan listeden bulup yeniden onaylarım."*
> - **Gerçek Sistem Mantığı:** **İkisi de engellenmiştir.** Sağlık muayenesi kayıtlarında hızlı onay güvenlik kilidiyle bloklanır ve uzman hekim/RKS bulgularının görüntülendiği inceleme formu zorunlu açılır. Ayrıca tüm sekmelerde reddedilen talepler zorunlu ret gerekçesiyle kalıcı sonlandırılır ve kuyruktan düşer; düzeltme sonrası çalışanın yeni talep açması gerekir.

### Süreç Akış Şeması

1. **Talep ve Kuyruk Toplama:** Web Portalından ve onaya tabi masaüstü rollerinden (Personel, Sağlık, Eğitim, RGS, Olay/DÖF, Ortam Dozu, Cihaz dahil) gelen talepler 7 kategori sekmesinde toplanır.
2. **Kategori Bazlı İnceleme:** Nöbet devrinde devralan rızası, sağlık muayenesinde hekim formu, veri değişikliklerinde eski-yeni 3 sütunlu fark penceresi, RKE ve tutanakta belge/kroki detayları kontrol edilir.
3. **Karar ve Bildirim:** Onaylanan kayıtlar canlı tablolara işlenir ve varsa belgeler AES-256 Evrak Kasasına aktarılır; ret işlemlerinde zorunlu gerekçe alınarak sonuç portal bildirimine gönderilir.

### Adım Adım İşlem Rehberi

#### 1. Kuyruk Gezinme, Hızlı Arama ve İzin / Nöbet Onayları

1. Ana menüden **Onay Bekleyen Görevler** ekranını açın; üstteki **Toplam Bekleyen** veya ilgili kategori özet kartına tıklayarak doğrudan bekleyen sekmeye geçin (sağ üst arama kutusundan personel veya ekipman adı süzebilirsiniz).
2. **İzin Talepleri** veya **Nöbet İstekleri** sekmesinde satırı seçip **[Onayla]** ile bakiyeyi/kısıtı uygulayın ya da **[Reddet]** ile zorunlu gerekçe yazın.
3. **Nöbet Devirleri** sekmesinde yalnızca devralan personel portal üzerinden onay verdikten sonra amir onayı aktifleşir; **[İncele ve Karar Ver]** ile eski/yeni vardiyaları doğrulayıp onaylayın.
4. **Nöbet Planları** sekmesinde birim sorumlusunun gönderdiği aylık taslağı **[Yayınla]** ile tüm personele açın veya eksiklik varsa **[Taslağa Geri Gönder]** ile birime iade edin.

#### 2. RKE Muayeneleri ve 4-Göz Veri Değişikliği (Fark) İncelemesi

1. **RKE Muayeneleri** sekmesinde satırı seçip **[İncele ve Muayene Detayı]** ile DIN 6857-1 kusur krokisini kontrol edin; ardından **[RKS Olarak Onayla]** veya gerekçeli **[Reddet / İade Et]** butonuna basın.
2. **Veri Değişiklikleri** sekmesinde Personel, Sağlık, Kısıt, Eğitim, RGS, Olay/DÖF, Ortam Dozu veya Cihaz modüllerinden düşen talebi seçip **[İncele ve Karar Ver]** butonuna tıklayın.
3. Açılan karşılaştırma tablosunda eski değerleri (kırmızı) ve yeni talep edilen değerleri (yeşil) kontrol edip **[Talebi Onayla]** veya **[Talebi Reddet]** butonuna basın (sağlık muayenesi eklemelerinde sistem doğrudan hekim inceleme formunu açar; rutinde değişiklik yoksa diğer kayıtlar için **[Hızlı Onayla]** kullanılabilir).

#### 3. Resmi Tutanaklar ve Web Portalı Bildirim Döngüsü

1. **Resmi Tutanaklar** sekmesinde imza bekleyen tutanak satırını seçerek **[Taslak Görüntüle]** ile orijinal metni inceleyin; ıslak imzalı belge ve EBYS numarası geldiğinde **[İmzalı Belge Yükle / Onayla]** ile tutanağı tamamlayın (geniş liste için **[Tüm Tutanaklar...]** butonunu kullanabilirsiniz).
2. **Web Portalı Çift Yönlü Süreç:** Personel ve saha görevlileri başvurularını (izin, devir rızası, mazeret, profil talebi) tarayıcıdan başlatır; yöneticinin burada verdiği onay veya zorunlu ret gerekçesi çalışanın Web Portal bildirim çekmecesine iletilir.

### Sıkça Sorulan Sorular (SSS)

- **Personelin başlattığı nöbet takası neden onay panelinde görünmüyor?** Karşılıklı nöbet devri önce devralacak personelin kendi Web Portalı üzerinden rıza onayını gerektirir. Devralan çalışan kabul onayı verene dek talep yönetici onayına aktarılmaz.
- **Cihaz envanteri veya kalite kontrol değişiklikleri de buraya düşer mi?** Evet. Kullanıcının rol ayarında işlem onayı zorunlu kılınmışsa cihaz ekleme, güncelleme, HEK arşivleme, arıza, bakım ve QC kayıtları da 4-göz denetimi kapsamında **Veri Değişiklikleri** sekmesine düşer.
- **İzin onaylandığında personelin aynı günde nöbeti varsa çakışma nasıl çözülür?** İzin onaylandığında sistem çizelgedeki nöbet çakışmasını otomatik denetler; birim sorumlusu Yönetici Aksiyon Sihirbazı veya İkame havuzu üzerinden ilgili nöbete yedek personel atayabilir.
- **Kuyrukta çok fazla bekleyen talep varsa sistem yavaşlar mı?** Performansı korumak adına her kategori sekmesi bekleyen en güncel 500 kaydı optimize edilmiş sorgularla listeler. Süreçlerin aksamaması için amirlerin bekleyen talepleri düzenli olarak sonuçlandırması önerilir.

---

## 22. Web Portalı ve Yönetici Gösterge Panelleri

Kurum içi personel ve saha işlemlerini (izin, nöbet devri, EK-1 sağlık/RD.F43 beyanı, cihaz arıza-bakım-QC, RKE QR muayenesi ve ortam dozu ölçümü) mobil uyumlu tarayıcı ve PWA arayüzüne taşırken; 3 ana gruptaki 18 aktif yönetici gösterge panelini bellek içi önbellek, canlı veri tazeliği göstergesi, 8 saniyelik canlı sağlık denetimi ve isteğe bağlı şifreli dış erişim tüneliyle sunar.

> **Yasal ve KVKK Güvencesi:** Tüm gösterge panelleri doğrudan kurumun canlı yerel veritabanından beslenir ve sıfır veri durumunda asla sahte veya sentetik kayıt üretmez; dış erişim açılsa dahi personel ve doz verileri bulut sunucularında depolanmaz.

### Kısa Reçete: Portal Servisini Kontrol Etme ve Yönetici Paneline Erişim

**Kısa Reçete: Portal Servisini Kontrol Etme ve Yönetici Paneline Erişim**

**1. İstenen Sonuç:**
Masaüstü uygulamasından veya Portal Servis Yöneticisinden Web Portalını doğrulayıp 18 analitik gösterge paneli ile saha QR işlemlerine anında bağlanmak.
**2. Yapılacak İşlem:**
Masaüstü durum çubuğunda **[Portal Sunucu: Aktif]** göstergesini kontrol edin (kapalıysa tıklayarak başlatıcıdan **[Başlat]** deyin), ardından sol üstteki **[Genel Bakış]** butonuna basın.
**3. Sistem Etkisi:**
Varsayılan tarayıcınızda Yönetici Özet Paneli açılır; 60 saniyelik bellek içi önbellek eşzamanlı sorgularda veritabanı yükünü dengeler, sağ üstte son veri çekim saati görülür ve istenen anda **[Yenile]** ile canlı veri çekilir.

- **Yönetici Panelleri:** 3 Grupta 18 Aktif Pano
- **Sağlık Kontrol Döngüsü:** Her 8 Saniyede Bir
- **Dashboard Önbelleği:** 60 Sn (Tatil Cetveli 300 Sn)
- **Platform:** Tarayıcı + Mobil PWA

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Masaüstü köprü ve başlatıcı denetimi, önbellek ve veri tazeliği, 18 yönetici paneli, dış erişim güvenliği, saha QR ve PWA kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **[Genel Bakış] & [Portal Sunucu: Aktif / Kapalı]** (Masaüstü Köprüsü ve 8 Sn Kontrol) | Sunucunun canlı olduğunu anlık görmek ve tek tıkla yönetici özetini açmak. | Masaüstü her 8 saniyede bir portal durumunu sorgular; kapalıysa durum butonundan veya Servis Yöneticisindeki **[Başlat]** ve **[Web Portalı Aç]** butonlarından tarayıcı açılır. | Program açıkken ve kullanıcı tıkladığında. | Sistem Yöneticisi / Yönetici |
| **Önbellek, Veri Tazeliği, [Yenile] ve Excel/PDF İhracı** (Eşzamanlı Performans ve Denetim Paketi) | Yüzlerce kişi aynı anda panele girerken veritabanı yükünü korumak ve verinin güncelliğini şeffaf göstermek. | İstatistik yanıtları 60 saniye (yıllık resmi tatil cetvelinde 300 saniye paylaşımlı) bellekte tutulur; sağ üstte son çekim zamanını gösteren **Veri Tazeliği Göstergesi** ve 1.000 kaydı aşan listelerde dönem daraltma bilgilendirmesi yer alır. **[Yenile]** önbelleği sıfırlar; **[Excel]**, **[Yazdır / PDF]** ve Denetim Panosu'ndaki **[Denetim Paketi (PDF)]** resmi çıktı verir. | Dashboard yüklenirken veya çıktı alınırken. | Yönetici / RKS / Yetkili |
| **3 Grupta 18 Aktif Yönetici Gösterge Paneli** (Denetim, Nöbet & İzin, Sağlık & Güvenlik) | Kurumsal uyum, nöbet adaleti ve kısıt/istek analizi, birleşik izin/Şua/farazi planlama, doz aşımı, bakım ve eğitim durumlarını tek yerden izlemek. | Genel ve Analiz (4), Nöbet ve İzin Yönetimi (5) ile Sağlık ve Güvenlik (9) gruplarında canlı KPI, yıllık ısı haritası ve dürüst boş durum sunulur; **İzin & Hak Ediş Yönetimi** altında yıllık izin, Şua bakiye karnesi ve farazi projeksiyon tek ekranda toplanır, **Nöbet Kısıt & İstek Analitiği** tercih/kısıt ihlallerini denetler ve **Çalışma Kısıtları** hizmet sınıfı ile radyasyon kapsamını ayırır. | Yetkili yönetici yan menüden panel seçtiğinde. | Yönetici / RKS / Birim Sorumlusu |
| **Şifreli Dış Erişim Tüneli, Robot Koruması ve 2FA OTP** (Kurumsal İnternet Erişim Güvenliği) | Modem portu açmadan güvenli dış erişim sağlamak ve yetkisiz girişleri önlemek. | Yerel ve dış ağ ayrımı gerçek bağlantı adresinden doğrulanır; dış ağda şifreli tünel, robot doğrulaması, ilk girişte tek kullanımlık parola yenileme bileti ve 6 haneli e-posta kodu zorunlu çalışır, 5 hatalı girişte hesap 15 dakika kilitlenir ve masaüstünden kapatılan oturumlar portalda da düşürülür. | Kullanıcı dış ağdan veya web ekranından girerken. | Admin / Tüm Web Kullanıcıları |
| **İmzalı Belge Bileti, Kasa Bütünlüğü ve Çoklu Birim Yetki Kalkanı** (**[İndir]**, **[Raporu İndir]** & Saha Güvenliği) | Tarayıcı adres çubuğunda oturum sızmasını, birimler arası yetkisiz erişimi ve bozuk evrak açılmasını önlemek. | Belge, eğitim medyası ve kat planı açılışlarında 60 saniyelik tekil güvenlik bileti üretilir ve evrakın dijital parmak izi doğrulanır; çoklu birim sorumluları yalnızca atandıkları klinikleri yönetir, şifahi nöbet devirlerinde tek kullanımlık kod aranır ve HBYS numarası yalnızca onaylı izinlere işlenebilir. | Belge/kat planı açılırken veya saha kaydı girilirken. | Yetkili Kullanıcı / Birim Sorumlusu |
| **Merkezi Profilim ve 3 Gruplu Saha Formları** (Kişisel İşlemler, Nöbet ve Saha Güvenliği) | Çalışan ve saha teknisyenlerinin mobil/tarayıcıdan eksiksiz işlem yapmasını sağlamak. | EK-1 sağlık beyanı, RD.F43 doz beyanı ve izin/nöbet devirleri **[Profilim]** ve form sekmelerinden yürür; saha ekibi cihaz arıza-bakım-QC, RKE ve ortam dozu kayıtlarını atomik veri kilidiyle işler. | Personel beyanı veya saha müdahalesi yapılırken. | Tüm Personel / Saha Görevlisi |
| **PWA Kurulumu, QR Kamera, Fener ve Taslak Koruma** (Mobil / Karanlık Oda Ergonomisi) | Telefon ve tabletlerde tam ekran uygulama deneyimi ve karanlık odalarda kesintisiz QR okuma sunmak. | Üst çubuktaki **[Uygulamayı Yükle]** ile tam ekran uygulama kurulur; kamera QR okuyucusu karanlık çekim odaları için fener, ekranı uyanık tutma, titreşimli onay ve uzun form taslağı koruması sağlar. | Tarayıcıdan saha veya QR işlemi yapılırken. | Saha Personeli / Teknisyen |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Web Portal Sadece Nöbet Görüntüleme Ekranı mıdır ve Dış Erişim Verileri Buluta mı Taşır?**
> - **Yanlış Algı:** *"Web Portal yalnızca personelin nöbet listesine baktığı salt okunur bir sayfadır; ayrıca kurum dışından erişim açıldığında personel ve dozimetre kayıtlarımız dış bulut sunucularına yüklenir."*
> - **Gerçek Sistem Mantığı:** **İkisi de doğru değildir.** Web Portalında yöneticiler için SKS Denetim Panosu dahil **18 aktif karar destek paneli** ve personeller/teknisyenler için tam kapsamlı saha formları bulunur (izin, nöbet devri/havuzu, RD.F43/EK-1 beyan, cihaz bakım/QC, RKE kroki muayenesi ve ortam dozu). Ayrıca dış erişim açıldığında hiçbir veri buluta kopyalanmaz; yalnızca kurumun yerel sunucusuyla yetkili kullanıcının tarayıcısı arasında uçtan uca şifreli tünel köprüsü kurulur.

### Süreç Akış Şeması

1. **Servis Denetimi:** Masaüstü uygulaması 8 saniyede bir portal durumunu kontrol eder; kapalıysa Servis Yöneticisi üzerinden yerel sunucu ve varsa şifreli tünel ayağa kaldırılır.
2. **Güvenli Oturum:** Kurum içi ağda hızlı oturum açılırken dış erişimde robot doğrulaması ve 6 haneli tek kullanımlık e-posta doğrulaması uygulanır.
3. **Analitik ve Saha İşlemleri:** Yetkisine göre yöneticiler 18 gösterge panelinde (60 sn önbellekli ve veri tazeliği göstergeli) anlık Excel/PDF analizine ulaşır; personel ve teknisyenler karanlık oda fenerli QR okuyucu ve mobil formlarla sahadan kayıt girer.

### Adım Adım İşlem Rehberi

#### 1. Portal Servisini Başlatma ve Durum Kontrolü

1. Masaüstü programının sağ alt köşesindeki **[Portal Sunucu: Aktif]** göstergesini kontrol edin; gösterge **Kapalı** görünüyorsa butona tıklayarak **RADPYS V4 Portal ve Servis Yöneticisi** penceresini öne getirin.
2. Yönetici penceresinde **[Başlat]** butonuna basarak veritabanı motoru ile portal servisinin (gerekirse dış erişim tünelinin) aktifleşmesini bekleyin ve pencereyi küçültmek için **[Tepsiye Küçült]** seçeneğini kullanın.
3. Doğrudan tarayıcıyı açmak için başlatıcıdaki **[Web Portalı Aç]** butonuna veya masaüstü sol menüsündeki **[Genel Bakış]** düğmesine tıklayın.

#### 2. 18 Yönetici Gösterge Panelinde Analiz ve Raporlama

1. Sol menüdeki **GENEL & ANALİZ** (4 pano), **NÖBET & İZİN YÖNETİMİ** (5 pano) ve **SAĞLIK & GÜVENLİK** (9 pano) gruplarından ilgili panoyu seçin (veya üst çubuktan `Ctrl+K` hızlı arama ile Şua, Farazi İzin ya da Kısıt alt görünümlerine doğrudan atlayın).
   - **Üst Yönetim ve Denetim Kolaylıkları:** **Genel Bakış** ekranında 4 hücreli yönetici özet şeridi, 3 modlu birim grafiği ile **Acil / Geciken** ve **Yaklaşan (30 Gün)** uyarı sekmelerini inceleyebilir; **Denetim Panosu** ekranında birim bazlı kanıt özetlerini, acil aksiyonları, **Mevzuat & Denetim Rehberi** sekmesini ve tek tıkla **[Denetim Paketi (PDF)]** toplu kanıt çıktısını kullanabilirsiniz.
   - **Nöbet & İzin Yönetimi Panoları (Faz 4):** **Nöbet Yönetimi** ekranında kurumsal matris, birim çizelgesi, dini ve resmi bayram ayrımlı Adalet Sayacı, 12 aylık Borç/Alacak Matrisi ve Birim × Kural Çapraz İhlal Matrisi sunulur; **Nöbet Devir & Takas Analitiği** karşılıklı takasların her iki vardiya ayağını, 3 aşamalı onay ve yanıt sürelerini, aşırı devir uyarılarını ve saha Değişim/Onay Merkezine doğrudan geçişi izler; **Nöbet Kısıt & İstek Analitiği** eğitim/ders günü kısıtları, nöbet yaz/yazma mazeretleri ve fazla mesai tercihlerinin çizelgeye gerçekleşme ve ihlal durumunu 7 günlük birim yoğunluğu ile yaş/kıdem muafiyetleri eşliğinde analiz eder; **Aylık Mesai & Tatil Cetveli** artık yıl duyarlı yıllık mesai hesabını, 2027–2030 Diyanet dini bayram/Arife yarım günlerini ve çakışan tatil tekilleştirmesini gösterir; **İzin & Hak Ediş Yönetimi** ise Birim İzin Matrisi, İzin Hareketleri, yıl sonu yanma riskini izleyen **Yıllık & Şua Bakiye Karnesi** ve KVKK maskelemeli **Farazi İzin Projeksiyonu** sekmelerini tek çatı altında birleştirir.
   - **Sağlık & Güvenlik Panoları:** **Dozimetre Takibi** (yıllık **ALARA Doz Bütçesi** ve özel izlem radarı dahil), **Olay Bildirimi & DÖF** (yanıt süresi ve kök neden dağılım analizi dahil), **NDK Araştırma Formları**, **Sağlık Muayene**, **Çalışma Kısıtları**, **Cihaz & QC Yönetimi**, **RKE & KKD Muayene**, **Ortam Dozu Trendi** ve **Zorunlu Eğitim Uyum** panellerinde yıllık ısı haritaları, Personel × Eğitim matrisi ve güvenli sertifika önizleme imkanı sunulur.
2. Üstteki dönem ve birim filtrelerini uygulayın; sağ üstteki **Veri Tazeliği Göstergesi** verinin en son ne zaman çekildiğini gösterir, son 60 saniye içinde yeni bir veri girişi yaptıysanız önbelleği beklemeden taze veri çekmek için **[Yenile]** butonuna tıklayın.
3. Denetim veya toplantı sunumu için sağ üstteki **[Excel]**, **[Yazdır / PDF]** ya da Denetim Panosu'ndaki **[Denetim Paketi (PDF)]** butonlarından tabloyu ve özet metrikleri dışa aktarın.

#### 3. Mobil Saha İşlemleri, PWA Kurulumu ve Karanlık Oda QR Kullanımı

1. Telefon, tablet veya bilgisayarda tarayıcı üst çubuğundaki **[Uygulamayı Yükle]** butonuna basarak Web Portalını tam ekran uygulama (PWA) olarak kurun (iOS cihazlarda ekrandaki Paylaş ve Ana Ekrana Ekle yönergesi açılır).
2. Sol menüdeki **Kişisel İşlemlerim**, **Nöbet İşlemlerim** ve **Saha & Güvenlik Bildirimleri** altından izin talebi, nöbet takası/havuzu, **Profilim** içi EK-1 sağlık / RD.F43 doz beyanları ile saha arıza-bakım-QC ve RKE muayene ekranlarını açın.
3. Çekim odasında QR kod taratırken tarayıcı kamerasındaki fener düğmesiyle alanı aydınlatın; uzun formlarda sayfa kapansa dahi tarayıcı taslağının korunduğundan emin olarak işleminizi güvenle tamamlayın.

### Sıkça Sorulan Sorular (SSS)

- **Portal sunucusunu herkes başlatabilir veya durdurabilir mi?** Hayır. Kurumsal güvenlik politikası gereğince arka plan portal servisini başlatma, durdurma ve tünel ayarlarını yönetme yetkisi yalnızca Sistem Yöneticisi (Admin) rolüne aittir; diğer yetkili kullanıcılar açık portalda kendi modüllerini kullanır.
- **60 saniyelik önbellek yüzünden yeni girdiğim kayıt görünmezse ne yapmalıyım?** Yönetici panellerinin sağ üstünde yer alan **[Yenile]** butonuna basmanız yeterlidir. Bu işlem 60 saniyelik bellek süresini beklemeden doğrudan güncel veritabanı sorgusunu çalıştırır.
- **İnternet kesildiğinde Web Portal ve mobil QR okuyucu çalışmaya devam eder mi?** Evet. Hastane yerel ağı (intranet) üzerindeki tüm gösterge panelleri, personel formları ve QR saha işlemleri kurum sunucusu üzerinde çalıştığı için dış internet kesintisinden etkilenmez.
- **Web Portalındaki bazı ekranlar dar telefon penceresinde neden alta kayıyor?** Dar mobil veya uygulama pencerelerinde hiçbir sekmenin ekran dışında kesilip gizlenmemesi için sekmeler otomatik olarak alt satıra dizilir ve tüm onay pencereleri dokunmatik ekrana uyumlu açılır.

---

## 23. Raporlama ve Tutanak Yönetim Merkezi

SKS 6.1 ve NDK denetimleri için 27 aktif resmi mevzuat raporunu ve 25 hazır veri kaynağını tek merkezde toplar; dinamik dikey/yatay A4 PDF ve Excel (.xlsx) çıktıları üretir, Şablon Tasarım Stüdyosu ve kurumsal çift logo ayarlarını yönetir, 11 modül kapsamlı Evrensel Tutanak Sihirbazı ile kilitli PDF tutanaklar oluşturup Resmi Tutanaklar Kasası (v1 taslak → v2 imzalı) ile 2 aşamalı SHA-256 mühürlü HEK tasfiyesini güvence altına alır.

> **Yasal Güvence:** Tutanak Sihirbazı tahrifatı önlemek için yalnızca değiştirilemez kilitli PDF çıktı verir; kurum adı veya logo tanımlanmamışsa sahte kurum adı yazılmaz, dürüst kurumsal varsayılan olarak RADPYS anteti kullanılır.

### Kısa Reçete: Resmi Rapor Çıktısı veya Çoklu Tutanak Üretme

**Kısa Reçete: Resmi Rapor Çıktısı veya Çoklu Tutanak Üretme**

**1. İstenen Sonuç:**
Seçili dönem/birim kriterlerine göre denetime hazır A4 PDF veya Excel (.xlsx) raporu almak ya da birden çok cihaz/RKE için tek resmi PDF heyet tutanağı üretmek.
**2. Yapılacak İşlem:**
Rapor Merkezinde listeden şablonu seçip varsa filtreleri belirleyerek **[PDF İndir]** veya **[Excel (.xlsx)]** butonuna basın; çoklu varlık tutanağı için **[Tutanak Sihirbazı]** üzerinden **[Sistemden Kayıt Ekle...]** ve **[Tutanak Oluştur / Yazdır]** adımlarını uygulayın.
**3. Sistem Etkisi:**
6 sütundan geniş tablolarda PDF otomatik Yatay A4 döner; HEK başlığı taşıyan tutanaklarda önce ön inceleme dosyası açılır, EBYS kapatması yapılınca SHA-256 dijital mührüyle kalıcı arşivlenir.

- **Rapor & Veri Kataloğu:** 27 Aktif Rapor / 25 Kaynak
- **Çıktı Standardı:** Excel + Kilitli PDF (RKP: Word)
- **Geniş Tablo Uyumu:** > 6 Sütunda Yatay A4
- **Belge Yaşam Döngüsü:** v1 Taslak → v2 İmzalı & SHA-256

### 5N1K Kural ve Arayüz Çözümleme Tablosu

*Katalog kapsamı, format disiplini, otomatik sayfa yönlendirme, Tasarım Stüdyosu, Evrensel Tutanak Sihirbazı, 2 aşamalı HEK ve Resmi Tutanaklar Kasası kuralları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| **Rapor Kataloğu, Birim Kapsamı ve KVKK Maskelemesi** (Tümü / Raporlar / Tutanaklar Süzgeci) | 27 aktif mevzuat raporunu yalnızca yetkili birim kapsamı ve KVKK gizliliği içinde sunmak. | Canlı önizleme dahil tüm raporlar modül yetkisini ve kullanıcının sorumlu birim kapsamını doğrular; özel nitelikli KVKK alanları yetkisiz rollerde otomatik maskelenir ve tüm açılır filtre kaynakları canlı doldurulur. | Rapor seçildiğinde veya önizleme/çıktı alındığında. | Yetkili Kullanıcı / RKS |
| **Format Disiplini ve Dinamik Sayfa Yönlendirme** (**[PDF İndir]**, **[Excel (.xlsx)]** & RKP Word) | Doğru işe tek format uygulamak, formül enjeksiyonunu önlemek ve geniş tabloları sığdırmak. | Standart raporlarda güvenli hücre korumalı Excel ve kilitli PDF (7+ sütunda Yatay A4) üretilir; NDK KLV-014 RKP gibi resmi başvuru şablonlarında ise **[Word (.docx)]** dışa aktarım butonu otomatik açılır. | Dışa aktarma butonuna basıldığında. | Yetkili Kullanıcı / Yönetici |
| **Rapor Tasarım Stüdyosu ve Çift Antet/Logo** (**[Yeni Tasarla]** & **[Özelleştir]**) | 25 hazır veri kaynağından şablon geçmişini bozmadan kuruma özel şablon üretmek. | 5 sekmeli stüdyoda sütun sırası, metin gövdesi, filtre tipleri ve imza blokları yetki doğrulaması sonrasında kaydedilir; geçmiş şablon sürümleri korunur ve yalnızca izinli kurum logoları antete yerleştirilir. | Yeni kurumsal rapor veya antet gerektiğinde. | Sistem Yöneticisi (Admin) |
| **11 Modüllü Evrensel Tutanak Sihirbazı** (**[Sistemden Kayıt Ekle...]** & Akıllı Heyet) | Tekil veya 20+ aktif cihaz/RKE kaydını mühürlü hurdaları karıştırmadan tek tutanakta birleştirmek. | Varlık seçiminde mühürlü HEK kayıtları hariç tutulur; üretilen PDF, Evrak Kasası kaydı ve tutanak numarası tek atomik işlemde tamamlanarak sıralı tablolarda satır kayması önlenir. | Devir, hasar, nöbet veya HEK kararı yazılırken. | Komisyon Başkanı / Birim Yetkilisi |
| **2 Aşamalı HEK Tasfiye ve SHA-256 Mühürleme** (Ön İnceleme Dosyası → EBYS Kapatma) | Heyet ıslak imzası ve Taşınır EBYS üst yazısı olmadan kayıttan düşmeyi önlemek. | İlk PDF alımında ekipmanlar ön inceleme dosyasına alınır; ikinci aşamada EBYS sayısı ve ek belgeyle tüm lisans/bakım/QC/muayene geçmişi ve PDF ekleri SHA-256 mühürlü tek tasfiye PDF dosyasında birleştirilir. | HEK tutanağı kesildiğinde ve EBYS gelince. | Komisyon / Taşınır Yetkilisi |
| **Resmi Tutanaklar Kasası (v1 Taslak → v2 İmzalı)** (**[İmzalı Nüshayı Yükle]** & Mühür Kilidi) | Tüm modüllerin tutanaklarını çakışmasız numaralamak ve mühürlenen belgelerin değiştirilmesini önlemek. | İmzalı tarama yüklendiğinde v1 taslak korunarak v2 imzalı nüsha resmi belge olur; imzalanıp tamamlanmış veya iptal edilmiş tutanakların sonradan değiştirilmesi ya da iptali kilitlenir ve açılan geçici belgeler özgün uzantısıyla temizlenir. | Islak imzalı tutanak taranıp sisteme girilince. | Birim Amiri / RKS / İdare |
| **Modül Bazlı Klasörleme ve Standart Dosya Adı** (**[Klasörü Aç]** & Otomatik Adlandırma) | Üretilen PDF ve Excel dosyalarının tek klasöre yığılıp kaybolmasını engellemek. | Çıktılar ilgili modül alt klasörüne Türkçe karakter arındırmalı tarih-saat damgasıyla kaydedilir ve işlem sonunda varsayılan görüntüleyicide otomatik açılır. | Rapor veya tutanak çıktısı kaydedildiğinde. | Sistem Otomasyonu / Kullanıcı |

### Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı)

> **Mit Avcısı — Tutanaklar Word Olarak Değiştirilebilir mi ve HEK Tutanağı Ekipmanı Anında Siler mi?**
> - **Yanlış Algı:** *"Tutanak Sihirbazında resmi komisyon tutanağını Word formatında indirip sonradan metnini düzeltebilirim; ayrıca HEK tutanağı oluşturduğum an cihaz veya önlük hemen envanterden silinir."*
> - **Gerçek Sistem Mantığı:** **İkisi de doğru değildir.** Hukuki bağlayıcılığı olan heyet kararlarında tahrifatı önlemek için Rapor Merkezinde ve Tutanak Sihirbazında Word çıktısı tamamen kaldırılmış olup tek resmi çıktı kilitli PDF belgesidir (Word çıktısı yalnızca kurum içi düzenleme gerektiren NDK RKP kılavuz taslağında bulunur). Ayrıca HEK tutanağı üretildiğinde ilk aşamada varlık silinmez, yalnızca imza koruma kilidine alınır; Taşınır EBYS evrakıyla kapatılıp SHA-256 mührü basılmadan kalıcı tasfiye tamamlanmaz.

### Süreç Akış Şeması

1. **Seçim ve Tasarım:** Yetkili kullanıcı 27 aktif sistem raporu veya Admin tarafından Tasarım Stüdyosunda türetilen özel şablonlardan birini seçer; kriter yoksa form alanı gizlenir.
2. **Format ve Tutanak Üretimi:** Tablo verileri Excel, resmi formlar ve 11 modül kapsamlı tutanaklar kilitli PDF olarak (7 ve üstü sütunda otomatik Yatay A4) oluşturulur.
3. **Kasa ve HEK Mühürleme:** Tutanaklar önce taslak (v1) sürümüyle kasaya girip ıslak imzalı nüshayla v2 olur; HEK dosyaları ise EBYS üst yazısıyla SHA-256 mühürlü nihai tasfiye PDF olarak kilitlenir.

### Adım Adım İşlem Rehberi

#### 1. Mevzuat Raporu Üretme ve Klasöre Erişme

1. Sol menüden **Rapor ve Tutanak Merkezi** ekranını açın; üstteki **Tümü**, **Raporlar**, **Tutanaklar** seçicileri ve kategori/arama kutusuyla istediğiniz raporu bulun.
2. Sağ üstteki kriter alanından dönem, departman veya durum filtresini belirleyin; alttaki önizleme tablosundan sütun yapısını kontrol edin.
3. **[PDF İndir]** veya **[Excel (.xlsx)]** butonuna tıklayarak antetli çıktıyı modüle özel çıktı klasörüne üretin ve gerekirse **[Klasörü Aç]** ile doğrudan klasöre gidin.

#### 2. Tasarım Stüdyosu ve Kurumsal Antet/Logo Yapılandırması

1. Sistem Yöneticisi olarak mevcut bir raporu uyarlamak için **[Özelleştir]** (tutanak seçiliyse **[Tutanağı Düzenle]**) veya sıfırdan oluşturmak için **[Yeni Tasarla]** butonuna tıklayın.
2. 5 sekmeli stüdyoda sütun görünürlüğünü (**[Yukarı Taşı]** / **[Aşağı Taşı]**), filtre sorularını, özel antet ayarını ve imza bloklarını (**[Personel Listesinden Ekle]**) belirleyip **[Raporu Kaydet]** butonuna basın.
3. Kurum geneli üst başlık ve çift logo tanımlamak için sağ alttaki **Şablon ve Marka Ayarlarını Yapılandır** bağlantısından başlık ve logo alanlarını güncelleyip kaydedin.

#### 3. Evrensel Tutanak Sihirbazı ve Resmi Tutanaklar Kasası (v1 → v2)

1. Doğrudan **[Tutanak Sihirbazı]** butonundan ya da Cihaz/RKE tablolarında çoklu satır seçerek tutanak penceresini açın; ilgili modülü seçip imleci metin kutusuna getirerek alttaki hazır bilgi etiketi butonlarıyla tarih/kurum/kayıt bilgilerini ekleyin.
2. Çoklu döküm gerekiyorsa **[Sistemden Kayıt Ekle...]** veya **[Manuel Satır Ekle]** ile listeyi doldurun (tablosuz resmi yazı için Salt Metin düzenini seçin), **[Üye Ekle]** ile komisyon heyetini belirleyip **[Tutanak Oluştur / Yazdır]** butonuna basın (HEK tutanağı ise otomatik tasfiye süreci başlar).
3. İmzaya çıkan tutanağı yönetmek için **Resmi Tutanaklar Kasası** ekranını açın; **[Taslak Belgeyi Aç]** ile metni görün, heyet ıslak imzaladığında **[İmzalı Nüshayı Yükle]** (veya HEK için EBYS kapatma) ile taramayı ekleyerek kaydı mühürleyin (tüm masaüstü raporlama süreci kurumsal güven gereği Masaüstü Uygulamasında yürütülür; Web Portalda anlık özet tablo Excel/PDF dökümleri sunulur).

### Sıkça Sorulan Sorular (SSS)

- **Kurum ayarlarında yalnızca tek logo veya hiç logo tanımlı değilse raporlar hata verir mi?** Hayır. Kurumda tek logo varsa sistem yalnızca mevcut logoyu yerleştirir; hiç başlık veya logo tanımlanmamışsa sahte kurum adı uydurmadan temiz **RADPYS** antetiyle raporu sorunsuz üretir.
- **20 adet RKE veya cihaz için her birine ayrı ayrı HEK tutanağı mı basmam gerekir?** Hayır. Envanter listesinde Ctrl veya Shift tuşlarıyla çoklu seçim yapıp **[HEK Tutanağı]** ya da **[Tutanak Oluştur]** dediğinizde tüm kayıtlar tek resmi tutanağın döküm tablosunda ve tek komisyon imzasında toplanır.
- **Tutanak şablonu seçtiğimde alttaki butonlardan neden sadece Özelleştir veya Tutanağı Düzenle değişiyor?** Rapor Merkezinde seçili öğe bir tutanak şablonuysa sistem kolaylık amacıyla düzenleme butonunu otomatik olarak **[Tutanağı Düzenle]** moduna geçirir ve tıklamada doğrudan Tutanak Sihirbazını o şablonla açar.
- **İmzalı belge yüklediğimde ilk oluşturduğum taslak PDF silinir mi?** Hayır. Sessiz sürümleme ve denetim izi kuralı gereğince eski taslak belge Evrak Kasasında arşiv statüsüne alınarak korunur; yeni yüklediğiniz ıslak imzalı nüsha v2 resmi sürüm olarak kayda bağlanır.

---

## 24. Kısaltmalar Sözlüğü ve Mevzuat Referans Matrisi

RADPYS V4 kullanım kılavuzunun tüm modüllerinde geçen teknik, idari ve mevzuata ilişkin kısaltmaların açık karşılıklarını; NDK, Sağlık Bakanlığı, ÇSGB, SGK ve Taşınır Mal mevzuatından doğan yasal sınırlar ile kurum içi yapılandırılabilir operasyonel parametreler arasındaki ayrımı tek merkezden sunar.

> **Hukuki Bilgilendirme:** Bu bölüm operasyonel ve teknik bilgilendirme amacıyla hazırlanmıştır; bağlayıcı hukuki görüş yerine geçmez. Kurum içi uygulamalar Radyasyondan Korunma Sorumlusu (RKS), İş Sağlığı ve Güvenliği (İSG) ve hukuk/mevzuat uyum birimi onayıyla yürütülmelidir.

### Kısa Reçete: Kısaltma ve Mevzuat Doğrulama

**Kısa Reçete: Kısaltma ve Mevzuat Doğrulama**

**1. İstenen Sonuç:**
Kılavuz boyunca geçen teknik kısaltmaların karşılıklarını, yasal mevzuat maddelerini ve kurum içi değiştirilebilir parametre sınırlarını tek tabloda doğrulamak.
**2. Yapılacak İşlem:**
Aradığınız kavramı (**HEK**, **FM**, **RADAT**, **TENMAK**, **EBYS**, **RKS** vb.) alfabetik sözlükten bulun; kuralın yasal dayanağını ikinci tablodan ve kurum içi değiştirilebilir kotadan farkını üçüncü tablodan teyit edin.
**3. Sistem Etkisi:**
Klinik iş yükü kotaları (**60 saat** FM kotası, **5 gün** devir tavanı, **2,0 / 5,0 mSv** inceleme düzeyi) bağlayıcı mevzuat tavanlarıyla (**130 saat**, **20/50 mSv**, **EK-2 30 gün**) karıştırılmadan uygulanır.

- **Sözlük Kapsamı:** 37 Kısaltma
- **Mevzuat Matrisi:** 16 Ana Düzenleme
- **Parametre Ayrımı:** 5 Kritik Kural
- **Uyum Sorumlusu:** RKS / İSG / Hukuk

### Kurumsal ve Teknik Kısaltmalar Sözlüğü

*RADPYS V4 ekranlarında, resmi dökümlerde ve kullanım kılavuzu modüllerinde kullanılan tüm kısaltmaların alfabetik açık karşılıkları ve kullanım alanları:*

| Kısaltma | Açık Karşılığı | Modül / Mevzuat Bağlamı ve Açıklama |
| --- | --- | --- |
| **ALARA** | As Low As Reasonably Achievable | İyonlaştırıcı radyasyon maruziyetinin makul ölçüde erişilebilir en düşük düzeyde tutulması ilkesi (Radyasyon Güvenliği Yönetmeliği). |
| **CAPA** | Corrective and Preventive Actions | Düzeltici ve Önleyici Faaliyetlerin (DÖF) uluslararası kalite yönetimindeki karşılığı. |
| **CDSS** | Clinical Decision Support System (Klinik Karar Destek Sistemi) | Doz aşımı veya sağlık anomalisi bulgularında mevzuata uygun aksiyon taslağı öneren destek modülü. |
| **ÇKYS** | Çekirdek Kaynak Yönetim Sistemi | Sağlık Bakanlığı bünyesinde personel, cihaz ve kurum kaynaklarının izlendiği merkezi kamu kayıt sistemi. |
| **DIN 6857-1** | Radyasyon Koruyucu Ekipman Kalite Kontrol Standardı | Kurşun önlük, tiroid ve gonad koruyucuların aktif alan hasarı ve bütünlük muayenesinde kullanılan uluslararası standart. |
| **DMK** | 657 sayılı Devlet Memurları Kanunu | Kamu görevlilerinin çalışma saatleri, yıllık izin devri (m. 103), mazeret/doğum izinleri (m. 101, 104/D) ve fazla mesai tavanını (Ek m. 33) düzenler. |
| **DÖF** | Düzeltici ve Önleyici Faaliyet | Olay bildirimi, doz aşımı veya denetim bulgusu sonrası kök neden analiziyle açılan resmi iyileştirme kaydı. |
| **EBYS** | Elektronik Belge Yönetim Sistemi | Resmi üst yazıların, tutanak onaylarının ve Taşınır/Ayniyat HEK kapatma işlemlerinin kurumsal evrak numarasıyla yürütüldüğü sistem. |
| **EPD** | Elektronik Kişisel Dozimetre | Gerçek zamanlı kümülatif veya anlık radyasyon maruziyetini ölçen aktif elektronik dozimetre. |
| **FHZ** | Fiili Hizmet Süresi Zammı (Yıpranma Payı) | 5510 sayılı Kanun Madde 40 kapsamında radyasyon görevlilerine bilfiil maruziyet çalışma saatine göre sağlanan erken emeklilik prim hakkı. |
| **FM** | Fazla Mesai | Aylık zorunlu normal çalışma hedefini aşan nöbet veya hizmet süreleri (kurumsal denge kotası ile DMK Ek m. 33 ücret tavanı ayrı izlenir). |
| **HBYS** | Hastane Bilgi Yönetim Sistemi | Hasta, tetkik, klinik ve insan kaynakları verilerinin yürütüldüğü hastane otomasyon sistemi. |
| **HEK** | Hurdaya Esas Kayıt / Hizmete Elverişli Değildir | Taşınır Mal Yönetmeliği (RG: 18.01.2007 / 26407) kapsamında ekonomik ömrü dolan veya kusurlu tıbbi cihaz ile koruyucu ekipmanların resmi komisyon tutanağıyla tasfiye süreci. |
| **Hp(10) / Hp(0,07)** | Kişisel Doz Eşdeğerleri | Hp(10) 10 mm doku derinliğindeki tüm vücut/etkin dozu; Hp(0,07) ise 0,07 mm derinlikteki cilt ve ekstremite (el/parmak/göz lensi) dozunu ifade eder. |
| **İGU** | İş Güvenliği Uzmanı | 6331 sayılı Kanun çerçevesinde işyeri risk analizi ve düzeltici/önleyici süreçlerde görev alan sertifikalı uzman. |
| **İSG** | İş Sağlığı ve Güvenliği | Çalışan sağlığının korunması, periyodik muayeneler ve 30 yıllık tıbbi gözetim arşivini kapsayan mevzuat alanı. |
| **KKD** | Kişisel Koruyucu Donanım | Çalışanı fiziksel ve radyolojik risklere karşı koruyan donanımlar (kurşun önlük, gözlük vb.). |
| **KKT** | Periyodik Kalite Kontrol Testi | TİTCK mevzuatı uyarınca cihazların 3, 6 veya 12 aylık dönemlerde yapılan performans ve güvenlik testleri. |
| **KUK** | Kalite Uygunluk Kuruluşu | TİTCK tarafından yetkilendirilmiş, resmi Kalite Uygunluk Testi (KUT) raporu düzenlemeye yetkili kuruluş. |
| **KUT** | Kalite Uygunluk Testi | Yetkili KUK tarafından Radyoterapi cihazlarında 36 ayda (3 yıl), Diagnostik ve Nükleer Tıp cihazlarında 60 ayda (5 yıl) bir yürütülen zorunlu uygunluk testi. |
| **KVKK** | 6698 sayılı Kişisel Verilerin Korunması Kanunu | Özel nitelikli sağlık verilerinin (kan tahlili, doz, gebe/sağlık raporu) şifreli kasada saklanması ve rol bazlı yetki izolasyonunu zorunlu kılar. |
| **LMS** | Learning Management System (Öğrenme Yönetim Sistemi) | Hizmet içi zorunlu eğitim modüllerinin, videoların, online sınavların ve sertifikaların yönetildiği eğitim altyapısı. |
| **MERNİS** | Merkezi Nüfus İdaresi Sistemi | T.C. Kimlik Numarası ve resmi kimlik doğrulamasında esas alınan merkezi kimlik standardı. |
| **mSv / µSv/h** | Milisievert / Mikrosievert-Saat | Kişisel radyasyon doz eşdeğeri (mSv) ve ortam radyasyon doz hızı (µSv/h) birimleri (1 mSv = 1.000 µSv). |
| **NDK** | Nükleer Düzenleme Kurumu | Türkiye'de radyasyon güvenliği, cihaz/tesis lisanslaması, RKS görevlendirmesi, doz limitleri ve resmi inceleme (RD.F43) süreçlerinin düzenleyici ve denetleyici üst kurumu. |
| **PWA** | Progressive Web App (İlerici Web Uygulaması) | Mobil telefon ve tabletlerin ana ekranına kurulabilen, kamera ile QR okuma ve dokunmatik imza desteği sunan Web Portal deneyimi. |
| **RADAT** | Radyasyon Dozimetre ve Analiz Laboratuvarları | TENMAK bünyesinde ve yetkili laboratuvarlar aracılığıyla kişisel dozimetre okuma, takip ve veri bildirimi süreçlerini yürüten yapı. |
| **RBAC** | Role-Based Access Control (Rol Tabanlı Erişim Kontrolü) | Kullanıcıların yalnızca yetkili oldukları modül, buton ve kayıtlara erişebilmesini sağlayan güvenlik mimarisi. |
| **RD.F43** | NDK Dozimetri Aşımı Resmi İnceleme Formu | Yetkili dozimetre kuruluşunun aşım/anomali bildirimi sonrası 10 iş günü içinde doldurulup NDK'ya iletilen resmi inceleme formu. |
| **RKE** | Radyasyon Koruyucu Ekipman | Kurşun önlük, tiroid koruyucu, gonad siperliği, kurşun eldiven ve gözlük gibi radyolojik KKD envanteri. |
| **RKP** | Radyasyondan Korunma Programı | Kurumun radyasyon güvenliği organizasyonunu, doz izlemesini ve acil durum planlarını tanımlayan ana uyum programı. |
| **RKS** | Radyasyondan Korunma Sorumlusu | 06.03.2025 tarihli NDK Usul ve Esasları ile güncel resmi terminoloji (eski *RGS / RGU / RSO* unvanlarının güncel karşılığı). |
| **SGK** | Sosyal Güvenlik Kurumu | 5510 sayılı Kanun kapsamında FHZ/yıpranma primlerinin ve hizmet dökümlerinin bildirildiği sosyal güvenlik kurumu. |
| **SKS** | Sağlıkta Kalite Standartları | Sağlık Bakanlığı tarafından hastane kalite, güvenlik, olay bildirimi, cihaz/ekipman izlenebilirliği ve personel uyumu için yayımlanan denetim seti (SKS 6.1). |
| **SSDL** | Secondary Standard Dosimetry Laboratory | TENMAK bünyesinde ortam ölçüm cihazlarının (alan monitörü / doz hızı ölçer) kalibrasyon izlenebilirliğini sağlayan İkincil Standart Dozimetri Laboratuvarı. |
| **TENMAK** | Türkiye Enerji, Nükleer ve Maden Araştırma Kurumu | Mülga TAEK (Türkiye Atom Enerjisi Kurumu) yerine kurulan ve ikincil dozimetri kalibrasyonu ile dozimetre hizmetlerini yürüten ulusal kurum. |
| **TİTCK** | Türkiye İlaç ve Tıbbi Cihaz Kurumu | Tıbbi cihazların kayıt, Kalite Kontrol (KKT) ve Kalite Uygunluk Testi (KUT) süreçlerini düzenleyen Sağlık Bakanlığı kurumu. |

### Temel Mevzuat Dayanakları ve Yasal Çerçeve

*RADPYS V4 modüllerinde yer alan iş kurallarının, form alanlarının, saklama sürelerinin ve resmi tutanakların dayandığı başlıca mevzuat metinleri:*

| Mevzuat / Standart Adı | Resmî Gazete / Numara | İlgili Madde ve RADPYS V4 Karşılığı |
| --- | --- | --- |
| **Radyoloji, Radyom ve Elektrikle Tedavi Müesseseleri Hakkında Kanun** | 3153 sayılı Kanun (Ek Madde 1) | Radyasyon kaynaklarıyla çalışan sağlık personelinin yıllık izne ek olarak hak kazandığı **Şua (Sağlık) İzni** temel yasal dayanağı (Modül 06, 11). |
| **İyonlaştırıcı Radyasyon ve Radyonüklit Kullanılarak Sunulan Sağlık Hizmetleri Hakkında Yönetmelik** | RG: 13.04.2023 / 32162 | **Madde 8 ve EK-2 Sağlık İzni Tablosu** (bilfiil çalışma saatine göre kademeli 1–30 gün Şua hesabı), **EK-1 Tıbbi Gözetim Belgesi**, gebe/emziren çalışma kısıtları ve görev bitiminden itibaren en az 30 yıl kayıt saklama (Modül 05, 06, 07.4, 11, 13). |
| **Radyasyon Güvenliği Yönetmeliği** (ve NDK düzenlemeleri) | RG: 24.03.2000 / 23999 | **Madde 10:** Radyasyon görevlileri için ardışık 5 yılın ortalaması **20 mSv**, herhangi bir yılda tek yıl azami **50 mSv** etkin doz limiti. — **Madde 12:** Hamilelik bildirimi sonrası kalan gebelik süresince karın yüzeyi ilave **1 mSv** eşdeğer doz limiti. — **Madde 15:** Denetimli alan (**6 mSv** potansiyel eşiği) ve gözetimli alan (**1–6 mSv**) sınıflandırması (Modül 05, 07.4, 12, 14). |
| **Radyasyondan Korunma Sorumlusu Görevlendirilmesine İlişkin Usul ve Esaslar** | NDK Kararı: 06.03.2025 | Eski *RGS / RSO* unvanı yerine **Radyasyondan Korunma Sorumlusu (RKS)** tanımı, sertifika ve görevlendirme takibi (Modül 16). |
| **Radyasyondan Korunma Eğitimlerine İlişkin Yönetmelik** | RG: 19.02.2025 / 32818 | Radyasyon görevlilerinin zorunlu hizmet içi radyasyondan korunma eğitimleri, sınav ve sertifikalandırma esasları (Modül 17). |
| **Devlet Memurları Kanunu** | 657 sayılı Kanun | **Madde 101:** Gebe/emziren memurların gece nöbeti muafiyeti. — **Madde 103:** Yıllık izinlerin cari ve bir önceki yılda kullanılması. — **Madde 104/D:** Doğum/süt izni. — **Ek Madde 33:** Aylık azami **130 saat** fazla mesai/nöbet ücreti tavanı (Modül 06, 07, 07.1, 07.4, 10). |
| **İş Kanunu** (ve İlgili Yargıtay İçtihatları) | 4857 sayılı Kanun | **Madde 53–59:** Sözleşmeli/işçi statüsünde yıllık izin hakları. — **Madde 74:** Analık hali, gebe/emziren işçi çalışması. İş akdi feshinde kullanılmayan şua izinleri için Yargıtay 9. Hukuk Dairesi içtihatlarında işçi statüsünde *şua izin alacağı* davaları görülebilmektedir (Modül 06, 07.4). |
| **Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu** | 5510 sayılı Kanun (Madde 40) | İyonlaştırıcı radyasyon işlerinde bilfiil çalışanlar için yıllık **Fiili Hizmet Süresi Zammı (FHZ / Yıpranma)** primi hesabı (Modül 11). |
| **İş Sağlığı ve Güvenliği Kanunu** | 6331 sayılı Kanun (Madde 15) | Sağlık gözetimi, periyodik hematoloji/biyokimya muayeneleri ve kişisel doz/sağlık dosyalarının iş ilişkisinin bitiminden sonra **en az 30 yıl** saklanması (Modül 05, 13). |
| **Kişisel Verilerin Korunması Kanunu** | 6698 sayılı Kanun (m. 6, m. 12) | Özel nitelikli sağlık verilerinin şifreli kasada (AES-256) tutulması ve erişim denetimi (Modül 01, 04, 05, 13, 18). |
| **Sendika Hakları Mevzuatı** | 4688 ve 6356 sayılı Kanunlar | 4688 m. 18 (kamu görevlileri sendika yöneticisi/temsilcisi izni) ve 6356 (işçi sendikaları) kapsamında nöbet/çalışma koruma kuralları (Modül 07.4). |
| **Taşınır Mal Yönetmeliği** | RG: 18.01.2007 / 26407 | Hurdaya Esas Kayıt / Hizmete Elverişli Değildir (**HEK**) komisyon kararları, iki aşamalı tasfiye ve EBYS kapatması (Modül 18, 20, 23). |
| **Tıbbi Cihaz KUT / KKT Mevzuatı** | TİTCK Yönetmeliği & TCS-KLVZ-06 | Radyoterapi cihazlarında 36 ay / Diagnostik-Nükleer Tıp cihazlarında 60 ay **KUT**, 3–6–12 ay **KKT**, KUK yetkisi ve *Sınırlı Kullanım* 1 yıl kuralı (Modül 19). |
| **NDK Doz Aşımı Kılavuzları** | RSGD-KLV-005 / RSGD-KLV-014 | Dozimetre anomalilerinde **RD.F43** formunun 10 iş günü içinde düzenlenmesi ve RKP başvuru dosyası hazırlanması (Modül 12, 18). |
| **Sağlıkta Kalite Standartları (SKS)** | Sağlık Bakanlığı SKS 6.1 | Güvenlik Raporlama Sistemi (Olay Bildirimi), DÖF takibi, cihaz/RKE denetim izlenebilirliği (Modül 12, 14, 15, 20, 23). |
| **Radyasyon Koruyucu Ekipman Standardı** | DIN 6857-1 | Kurşun önlük ve koruyucularda kritik organ 0 mm², non-kritik ≤ 5 mm² / 5–15 mm² / > 15 mm² kusur karar eşikleri (Modül 20). |

### Yasal Mevzuat Sınırı ve Kurumsal Parametre Ayrımı

*Kurum içi iş yükü, kalite hedefi veya erken uyarı politikası olarak yapılandırılabilen parametreler ile kanun/yönetmelikten doğan bağlayıcı sınırların karşılaştırma tablosu:*

| Konu Başlığı | Bağlayıcı Yasal Mevzuat Sınırı | RADPYS Varsayılan Kurumsal Parametresi | Açıklama ve Kullanım Kuralı |
| --- | --- | --- | --- |
| **Etkin Doz Limitleri (Radyasyon Görevlisi)** | Ardışık **5 yılın ortalaması 20 mSv/yıl**; herhangi bir tek yılda azami **50 mSv** (Radyasyon Güvenliği Yönetmeliği m. 10). | Yıllık operasyonel ALARA uyarı tavanı: **20 mSv**. — Aylık inceleme düzeyleri: **2,0 – 4,99 mSv** (Sarı), **≥ 5,0 mSv** veya kümülatif aşım (Kırmızı). | Aylık **2,0 mSv** ve **5,0 mSv** eşikleri hastane kalite/RKP inceleme seviyeleridir; tek yıllık **50 mSv** yasal tavan ayrı olarak kırmızı alarm üretir. |
| **Gebe ve Emziren Çalışan Korunması** | Gebelik bildirimi sonrası kalan gebelik boyunca karın yüzeyi ilave eşdeğer dozu **en fazla 1 mSv** (RGY m. 12). Emziren çalışan için sayısal mSv limiti yoktur; **radyoaktif kontaminasyon riskli işlerde çalıştırılmama** kuralı vardır (32162 Yönetmelik, 657 m. 101, 4857 m. 74). | Gebe/emziren personel nöbet havuzu muafiyeti, gebe için gece nöbeti yasağı ve doz takip alarmı. | Gebelik için yıllık değil **kalan gebelik süresince** fetüs koruma eşiği geçerlidir; emziren personel ise kontaminasyon riskli açık kaynak alanlarına verilmez. |
| **Şua İzni Hakediş ve Kullanım Kuralları** | 3153 Ek m. 1 ve 13.04.2023/32162 EK-2 tablosuna göre yıllık kademeli (**1–30 gün**). Çalışma devam ederken izin yerine ücret ödenemez (dinlenme hakkı). | Yıllık fiili çalışma saatlerinin ertesi yıla **Şua İzni** hakkı olarak aktarımı; kurum parametresine bağlı kullanım kuralları. | İş akdi sona ermesinde memur (657 DMK) ve işçi (4857 İş K.) statüleri farklıdır; işçi statüsünde kullanılmayan izinler için Yargıtay içtihadı kapsamında *şua izin alacağı* gündeme gelebilir. |
| **Yıllık İzin Devir Sınırı** | 657 DMK m. 103 (cari yıl + bir önceki yıl hakkı birleşir, daha eski yıllar düşer); 4857 İş K. m. 53–59 (iş sözleşmesi devam ettiği sürece yanmaz). | RADPYS sistem ayarı varsayılanı: **Azami 5 gün** kurum parametresi. | "Azami 5 gün" kuralı kurum yöneticisinin sistem ayarlarından değiştirebileceği bir **kurumsal devir kotasıdır**; kamu/özel statüye göre insan kaynakları tarafından uyarlanmalıdır. |
| **Aylık Fazla Mesai (FM) Kotası** | 657 DMK Ek Madde 33 uyarınca nöbet ücreti ödenebilecek üst sınır aylık **130 saat** (özel statü/icra kurallarına tabidir). | RADPYS sistem ayarı varsayılanı: Aylık **60 saat** FM denge kotası. | **60 saat** kotası çalışan radyasyon maruziyetini ve yorgunluğu dengelemek için ayarlanan kurumsal planlama sınırıdır; **130 saat** ücret üst sınırıyla karıştırılmamalıdır. |

### Sıkça Sorulan Sorular (SSS)

- **Kılavuzda belirtilen "kurum parametresi" rakamlarını hastanemizin statüsüne göre değiştirebilir miyiz?** Evet. Sistem ayarlarında tanımlanan aylık 60 saat fazla mesai dengesi, 5 günlük yıllık izin devri tavanı veya aylık 2,0 / 5,0 mSv doz inceleme eşikleri kurum yöneticisi ve Radyasyondan Korunma Sorumlusu (RKS) tarafından hastanenin tabi olduğu personel statüsüne (657 DMK veya 4857 İş Kanunu) ve kalite talimatlarına uygun biçimde güncellenebilir.
- **Eski belgelerdeki RGS / RSO ve TAEK ifadeleri neden RKS ve TENMAK olarak yer alıyor?** Nükleer Düzenleme Kurumunun (NDK) 06.03.2025 tarihli düzenlemesiyle Radyasyondan Korunma Sorumlusu unvanı resmi olarak **RKS** şeklinde birleştirilmiştir. Benzer şekilde mülga Türkiye Atom Enerjisi Kurumu (TAEK) görevleri **TENMAK** çatısı altında yürütülmektedir.
- **Bu kullanım kılavuzundaki mevzuat atıfları hukuki danışmanlık yerine geçer mi?** Hayır. RADPYS V4 Kullanım Kılavuzu içinde yer alan tüm kanun, yönetmelik ve kılavuz atıfları yazılım içi iş kurallarının gerekçesini açıklamak ve RKS/İSG uyum süreçlerine rehberlik etmek amacıyla hazırlanmıştır. Resmî Gazete metinleri esastır; statüye özgü değerlendirmelerde kurumunuzun RKS birimi, İnsan Kaynakları ve Hukuk Müşavirliği görüşü esas alınmalıdır.

---
