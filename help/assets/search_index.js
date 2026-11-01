// RADPYS V4 — Otomatik Üretilen Çevrimdışı Arama İndeksi (sync-release.js tarafından güncellenir)
window.RADPYS_SEARCH_INDEX = [
  {
    "id": "01_kurulum_ve_ilk_giris",
    "title": "Kurulum, Başlatma ve İlk Giriş",
    "category": "1. Sistem, Kurulum & Güvenlik",
    "url": "01_kurulum_ve_ilk_giris.html",
    "summary": "RADPYS masaüstü uygulamasını güvenli tekil kilit altında başlatma, veritabanı motoru kontrolleri, ilk girişte zorunlu geçici şifre değişimi, Evrensel Arama Komut Paleti (Ctrl+K), Bildirim Merkezi ve lisans aktivasyon sürecini yönetmenizi sağlar.",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Başlatma ve Güvenli Giriş Süreç Akışı",
      "Kritik Ekran Görünümleri ve Kullanım Noktaları",
      "Adım Adım Operasyonel Eylem Akışı",
      "Sıkça Sorulan Sorular ve Takılma Yönetimi"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 1: Başlangıç & Altyapı 01. Kurulum & İlk Giriş Kurulum, Başlatma ve İlk Giriş KVKK & Bilgi Güvenliği Uyumlu Tahmini Okuma: 3 Dakika RADPYS masaüstü uygulamasını güvenli tekil kilit altında başlatma, veritabanı motoru kontrolleri, ilk girişte zorunlu geçici şifre değişimi, Evrensel Arama Komut Paleti (Ctrl+K), Bildirim Merkezi ve lisans aktivasyon sürecini yönetmenizi sağlar. Yasal Güvence: Sağlık Bakanlığı Sağlıkta Kalite Standartları (SKS 6.1) ve KVKK 6698 Sayılı Kanun Madde 12 uyarınca yetkisiz erişimler kilitlenir. Kısa Reçete: İlk Giriş ve Şifre Güvenliği Tamamlama 20 SANİYELİK AKIŞ Yapılacak İşlem: Birim sorumlusundan aldığınız kullanıcı adı ve geçici şifre ile giriş yapın. Açılan zorunlu şifre penceresinde en az 8 karakterli (büyük harf, küçük harf, rakam ve özel karakter içeren) yeni şifrenizi belirleyip [Kaydet] butonuna basın. Sistem Güvencesi: Geçici şifre kalıcı olarak geçersiz kılınır; yetkili personel harici hiç kimse eski şifreyle hesabınıza erişemez ve tüm modüller yetkiniz dahilinde kullanıma açılır. Parola Politikası Min. 8 Karakter Deneme Süresi 30 Gün (Trial) Erken Uyarı Eşiği 15 Gün & 3 Gün Platform Masaüstü & Web Kritik Sahada Yanlış Bilinen Kural (Mit Avcısı) Yanlış Algı: \"Masaüstü simgesine tıkladım ama program açılmadı, sistem dondu veya hata verdi.\" Gerçek Sistem Mantığı: RADPYS veritabanı bütünlüğünü korumak için Tekil Örnek (Single Instance) kilidiyle çalışır. Program zaten simge durumunda veya arka planda açıksa ikinci bir kopya açılmaz; mevcut açık pencere doğrudan ekranın en önüne getirilir. 5N1K Kural ve Ayar Çözümleme Tablosu Giriş ve başlangıç kontrollerinin amacı, çalışma mantığı ve kullanıcı etkileri NE? (Ekran Kontrolü) NEDEN? (Amaç) NASIL? (Çalışma Mantığı) NE ZAMAN? (Tetiklenme) KİM? (Kullanıcı Kitlesi) Kullanıcı Girişi Kullanıcı Adı & Şifre Sisteme yetkili kimlik doğrulamasıyla güvenli erişmek. Bilgiler girilip [Giriş Yap] tıklanır. Enter tuşu otomatik olarak bu butonu tetikler. Programa her girişte. Tüm Personel Beni Hatırla Onay Kutusu Kullanıcı adını tekrar tekrar yazma zahmetini ortadan kaldırmak. Kullanıcı adını yerel bilgisayara kaydeder. Parola asla kaydedilmez; açılışta imleç doğrudan şifre kutusuna odaklanır. Kişisel çalışma bilgisayarında. Tüm Personel Şifreyi Göster Göz / Onay Kutusu Şifre yazarken harf ve rakam hatalarını anında görmek. Noktalı maskeli şifre görünümünü açık metne dönüştürür. Şifre yazımında hata şüphesinde. Tüm Personel Zorunlu Şifre Değişimi Açılır Güvenlik Formu Geçici veya varsayılan şifreyle sistemde kalınmasını engellemek. Yeni şifre iki kez girilir. Başarılı kaydedilmeden ana ekrana geçişe izin verilmez; iptal edilirse oturum açılmaz. İlk girişte veya şifre süresi dolduğunda. Yeni Tanımlanan Personel Şifremi Unuttum? Sıfırlama Bağlantısı Kullanıcının e-posta doğrulamasıyla şifresini güvenle sıfırlaması. Kullanıcı adı ve sistemde kayıtlı e-posta adresi birebir eşleştiğinde yeni şifre atanır. Şifre unutulduğunda. E-postası Kayıtlı Personel Evrensel Arama (Ctrl+K) Hızlı Komut Paleti Menülerde aramadan istenen sayfaya veya personele 2 saniyede ulaşmak. Klavyeden Ctrl+K tuşlarına basılır. En az 2 harf yazıldığında sayfalar, hızlı işlemler ve personel kartları listelenir. Hızlı işlem veya kayıt ararken. Tüm Kullanıcılar Bildirim Merkezi & Rozet Sağ Üst Zil Simgesi Nöbet devri, olay bildirimi ve dozimetre alarmlarını anında görmek. Okunmamış bildirim varsa zil açık maviye boyanır ve sayı gösterir. Nöbet devir bildirimi doğrudan Kabul/Red onayını açar. Yeni görev veya alarm geldiğinde. Hedef Personel / Amir Cihaz Kimliği & Lisans Hakkında Penceresi Kurum lisansını doğrulamak ve teknik destek paketi üretmek. Cihaz Kimliği (Machine ID) kopyalanarak lisans alınır. Anahtar girilip aktifleştirilir. Log paketi tek tıkla masaüstüne ZIP'lenir. Lisans kurulumunda veya destek talebinde. Sistem Yöneticisi (Admin) Başlatma ve Güvenli Giriş Süreç Akışı flowchart TD A[\"Masaüstü RADPYS Simgesi Çift Tıklanır\"] --> B{\"Tekil Uygulama Kilidi?\"} B -->|Açık Kopya Var| C[\"Mevcut Pencere Öne Getirilir\"] B -->|İlk Açılış| D{\"PostgreSQL Veritabanı Bağlantısı?\"} D -->|Bağlantı Yok| E[\"Hata Diyaloğu: UAC Servis Başlat / services.msc\"] E --> D D -->|Bağlantı Başarılı| F[\"Giriş Ekranı Açılır\"] F --> G[\"Kullanıcı Adı ve Şifre Girilir\"] G --> H{\"Kimlik Doğrulama Başarılı mı?\"} H -->|Hatalı Bilgi| I[\"Giriş Başarısız Uyarısı\"] I --> G H -->|Başarılı| J{\"Kurum Lisansı Geçerli mi?\"} J -->|Süresi Dolmuş - Normal Personel| K[\"Erişim Engellenir: Sistem Yöneticisine Başvurun\"] J -->|Süresi Dolmuş - Yönetici| L[\"Kısıtlı Yönetici Modu: Lisans Aktivasyon Ekranı Açılır\"] J -->|Lisans Aktif| M{\"İlk Giriş mi veya Şifre Süresi Doldu mu?\"} M -->|Evet| N[\"Zorunlu Şifre Değiştirme Formu\"] N -->|Şifre Belirlendi| O[\"Ana Uygulama Ekranı Yüklenir\"] N -->|İptal Edildi| F M -->|Hayır| O Kritik Ekran Görünümleri ve Kullanım Noktaları Ekran Konumu: RADPYS Başlangıç Ekranı Giriş Formu Yasal Bilgilendirme: Bu görseldeki kullanıcı adları ve arayüz bilgileri tamamen test amaçlı sentetik veridir. Ekran Konumu: Giriş Sonrası Güvenlik Doğrulaması Zorunlu Şifre Formu Güvenlik Notu: Yeni şifreniz en az 8 karakter olmalı; büyük/küçük harf, rakam ve özel karakter içermelidir. Ekran Konumu: Sağ Üst Menü > Hakkında Lisans ve Sistem Künyesi İşlem Notu: Cihaz Kimliği (Machine ID) [Kopyala] butonuyla kopyalanıp lisans anahtarı üretimi için sağlanır. Ekran Konumu: Ana Ekran Üst Bar (Ctrl+K & Zil Simgesi) Hızlı Navigasyon & Bildirim Kısayol Bilgisi: Programın her yerinde Ctrl+K ile arama paletini açabilir, bildirimlerden nöbet devirlerini onaylayabilirsiniz. Adım Adım Operasyonel Eylem Akışı Adım 1: Uygulamayı Başlatma & Giriş Masaüstünüzdeki RADPYS simgesine çift tıklayın. Kullanıcı adınızı ve şifrenizi girin. Kendi bilgisayarınızda çalışıyorsanız [Beni Hatırla] kutusunu işaretleyin ve [Giriş Yap] butonuna tıklayın. Adım 2: İlk Şifrenizi Tanımlama Eğer ilk girişiniz ise ekrana gelen şifre değiştirme penceresinde en az 8 karakterli yeni şifrenizi belirleyin. Her iki kut"
  },
  {
    "id": "01_kurulum_ve_ilk_giris#matrix-5n1k",
    "title": "5N1K Kural ve Ayar Çözümleme Tablosu — Kurulum, Başlatma ve İlk Giriş",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "01_kurulum_ve_ilk_giris.html#matrix-5n1k",
    "summary": "5N1K Kural ve Ayar Çözümleme Tablosu Giriş ve başlangıç kontrollerinin amacı, çalışma mantığı ve kullanıcı etkileri NE? (Ekran Kontrolü) NEDEN? (Amaç) NASIL? (Çalışma Mantığı) NE ZAMAN? (Tetiklenme) KİM? (Kullanıcı Kitle",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Kurulum, Başlatma ve İlk Giriş"
    ],
    "content": "5N1K Kural ve Ayar Çözümleme Tablosu Giriş ve başlangıç kontrollerinin amacı, çalışma mantığı ve kullanıcı etkileri NE? (Ekran Kontrolü) NEDEN? (Amaç) NASIL? (Çalışma Mantığı) NE ZAMAN? (Tetiklenme) KİM? (Kullanıcı Kitlesi) Kullanıcı Girişi Kullanıcı Adı & Şifre Sisteme yetkili kimlik doğrulamasıyla güvenli erişmek. Bilgiler girilip [Giriş Yap] tıklanır. Enter tuşu otomatik olarak bu butonu tetikler. Programa her girişte. Tüm Personel Beni Hatırla Onay Kutusu Kullanıcı adını tekrar tekrar yazma zahmetini ortadan kaldırmak. Kullanıcı adını yerel bilgisayara kaydeder. Parola asla kaydedilmez; açılışta imleç doğrudan şifre kutusuna odaklanır. Kişisel çalışma bilgisayarında. Tüm Personel Şifreyi Göster Göz / Onay Kutusu Şifre yazarken harf ve rakam hatalarını anında görmek. Noktalı maskeli şifre görünümünü açık metne dönüştürür. Şifre yazımında hata şüphesinde. Tüm Personel Zorunlu Şifre Değişimi Açılır Güvenlik Formu Geçici veya varsayılan şifreyle sistemde kalınmasını engellemek. Yeni şifre iki kez girilir. Başarılı kaydedilmeden ana ekrana geçişe izin verilmez; iptal edilirse oturum açılmaz. İlk girişte veya şifre süresi dolduğunda. Yeni Tanımlanan Personel Şifremi Unuttum? Sıfırlama Bağlantısı Kullanıcının e-posta doğrulamasıyla şifresini güvenle sıfırlaması. Kullanıcı adı ve sistemde kayıtlı e-posta adresi birebir eşleştiğinde yeni şifre atanır. Şifre unutulduğunda. E-postası Kayıtlı Personel Evrensel Arama (Ctrl+K) Hızlı Komut Paleti Menülerde aramadan istenen sayfaya veya personele 2 saniyede ulaşmak. Klavyeden Ctrl+K tuşlarına basılır. En az 2 harf yazıldığında sayfalar, hızlı işlemler ve personel kartları listelenir. Hızlı işlem veya kayıt ararken. Tüm Kullanıcılar Bildirim Merkezi & Rozet Sağ Üst Zil Simgesi Nöbet devri, olay bildirimi ve dozimetre alarmlarını anında görmek. Okunmamış bildirim varsa zil açık maviye boyanır ve sayı gösterir. Nöbet devir bildirimi doğrudan Kabul/Red onayını açar. Yeni görev veya alarm geldiğinde. Hedef Personel / Amir Cihaz Kimliği & Lisans Hakkında Penceresi Kurum lisansını doğrulamak ve teknik destek paketi üretmek. Cihaz Kimliği (Machine ID) kopyalanarak lisans alınır. Anahtar girilip aktifleştirilir. Log paketi tek tıkla masaüstüne ZIP'lenir. Lisans kurulumunda veya destek talebinde. Sistem Yöneticisi (Admin)"
  },
  {
    "id": "01_kurulum_ve_ilk_giris#workflow",
    "title": "Başlatma ve Güvenli Giriş Süreç Akışı — Kurulum, Başlatma ve İlk Giriş",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "01_kurulum_ve_ilk_giris.html#workflow",
    "summary": "Başlatma ve Güvenli Giriş Süreç Akışı flowchart TD A[\"Masaüstü RADPYS Simgesi Çift Tıklanır\"] --> B{\"Tekil Uygulama Kilidi?\"} B -->|Açık Kopya Var| C[\"Mevcut Pencere Öne Getirilir\"] B -->|İlk Açılış| D{\"PostgreSQL Verita",
    "headings": [
      "Başlatma ve Güvenli Giriş Süreç Akışı",
      "Kurulum, Başlatma ve İlk Giriş"
    ],
    "content": "Başlatma ve Güvenli Giriş Süreç Akışı flowchart TD A[\"Masaüstü RADPYS Simgesi Çift Tıklanır\"] --> B{\"Tekil Uygulama Kilidi?\"} B -->|Açık Kopya Var| C[\"Mevcut Pencere Öne Getirilir\"] B -->|İlk Açılış| D{\"PostgreSQL Veritabanı Bağlantısı?\"} D -->|Bağlantı Yok| E[\"Hata Diyaloğu: UAC Servis Başlat / services.msc\"] E --> D D -->|Bağlantı Başarılı| F[\"Giriş Ekranı Açılır\"] F --> G[\"Kullanıcı Adı ve Şifre Girilir\"] G --> H{\"Kimlik Doğrulama Başarılı mı?\"} H -->|Hatalı Bilgi| I[\"Giriş Başarısız Uyarısı\"] I --> G H -->|Başarılı| J{\"Kurum Lisansı Geçerli mi?\"} J -->|Süresi Dolmuş - Normal Personel| K[\"Erişim Engellenir: Sistem Yöneticisine Başvurun\"] J -->|Süresi Dolmuş - Yönetici| L[\"Kısıtlı Yönetici Modu: Lisans Aktivasyon Ekranı Açılır\"] J -->|Lisans Aktif| M{\"İlk Giriş mi veya Şifre Süresi Doldu mu?\"} M -->|Evet| N[\"Zorunlu Şifre Değiştirme Formu\"] N -->|Şifre Belirlendi| O[\"Ana Uygulama Ekranı Yüklenir\"] N -->|İptal Edildi| F M -->|Hayır| O"
  },
  {
    "id": "01_kurulum_ve_ilk_giris#screenshots",
    "title": "Kritik Ekran Görünümleri ve Kullanım Noktaları — Kurulum, Başlatma ve İlk Giriş",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "01_kurulum_ve_ilk_giris.html#screenshots",
    "summary": "Kritik Ekran Görünümleri ve Kullanım Noktaları Ekran Konumu: RADPYS Başlangıç Ekranı Giriş Formu Yasal Bilgilendirme: Bu görseldeki kullanıcı adları ve arayüz bilgileri tamamen test amaçlı sentetik veridir. Ekran Konumu:",
    "headings": [
      "Kritik Ekran Görünümleri ve Kullanım Noktaları",
      "Kurulum, Başlatma ve İlk Giriş"
    ],
    "content": "Kritik Ekran Görünümleri ve Kullanım Noktaları Ekran Konumu: RADPYS Başlangıç Ekranı Giriş Formu Yasal Bilgilendirme: Bu görseldeki kullanıcı adları ve arayüz bilgileri tamamen test amaçlı sentetik veridir. Ekran Konumu: Giriş Sonrası Güvenlik Doğrulaması Zorunlu Şifre Formu Güvenlik Notu: Yeni şifreniz en az 8 karakter olmalı; büyük/küçük harf, rakam ve özel karakter içermelidir. Ekran Konumu: Sağ Üst Menü > Hakkında Lisans ve Sistem Künyesi İşlem Notu: Cihaz Kimliği (Machine ID) [Kopyala] butonuyla kopyalanıp lisans anahtarı üretimi için sağlanır. Ekran Konumu: Ana Ekran Üst Bar (Ctrl+K & Zil Simgesi) Hızlı Navigasyon & Bildirim Kısayol Bilgisi: Programın her yerinde Ctrl+K ile arama paletini açabilir, bildirimlerden nöbet devirlerini onaylayabilirsiniz."
  },
  {
    "id": "01_kurulum_ve_ilk_giris#step-by-step",
    "title": "Adım Adım Operasyonel Eylem Akışı — Kurulum, Başlatma ve İlk Giriş",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "01_kurulum_ve_ilk_giris.html#step-by-step",
    "summary": "Adım Adım Operasyonel Eylem Akışı Adım 1: Uygulamayı Başlatma & Giriş Masaüstünüzdeki RADPYS simgesine çift tıklayın. Kullanıcı adınızı ve şifrenizi girin. Kendi bilgisayarınızda çalışıyorsanız [Beni Hatırla] kutusunu iş",
    "headings": [
      "Adım Adım Operasyonel Eylem Akışı",
      "Kurulum, Başlatma ve İlk Giriş"
    ],
    "content": "Adım Adım Operasyonel Eylem Akışı Adım 1: Uygulamayı Başlatma & Giriş Masaüstünüzdeki RADPYS simgesine çift tıklayın. Kullanıcı adınızı ve şifrenizi girin. Kendi bilgisayarınızda çalışıyorsanız [Beni Hatırla] kutusunu işaretleyin ve [Giriş Yap] butonuna tıklayın. Adım 2: İlk Şifrenizi Tanımlama Eğer ilk girişiniz ise ekrana gelen şifre değiştirme penceresinde en az 8 karakterli yeni şifrenizi belirleyin. Her iki kutuya aynı şifreyi yazdıktan sonra [Kaydet] butonuna basın. Oturumunuz ana ekranla açılacaktır. Adım 3: Sayfalara ve Personele Hızlı Ulaşım (Ctrl+K) Herhangi bir ekrandayken klavyenizden Ctrl+K tuşlarına basın. Açılan kutuya personelin adını veya gitmek istediğiniz menüyü (Örn: *Nöbet*, *İzin*, *Dozimetre*) yazıp Enter'a basarak doğrudan o ekrana geçin. Adım 4: Kurum Lisansını Aktifleştirme (Yalnızca Admin) Sağ üstteki menüden [Hakkında] penceresini açın. [Cihaz Kimliği] kodunuzu kopyalayıp lisans sağlayıcısına iletin. Size verilen anahtarı kutuya yapıştırıp [Lisansı Aktifleştir] butonuna basın. Adım 5: Teknik Destek Paketi Oluşturma Sistemde beklenmeyen bir durumla karşılaşırsanız [Hakkında] penceresindeki [Destek Paketi (Log) Oluştur] butonuna tıklayın. Masaüstünüze kaydedilen radpys_destek_log.zip dosyasını teknik ekibe e-posta eki olarak gönderin."
  },
  {
    "id": "01_kurulum_ve_ilk_giris#faq",
    "title": "Sıkça Sorulan Sorular ve Takılma Yönetimi — Kurulum, Başlatma ve İlk Giriş",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "01_kurulum_ve_ilk_giris.html#faq",
    "summary": "Sıkça Sorulan Sorular ve Takılma Yönetimi Şifremi unuttum, sisteme nasıl giriş yapabilirim? Giriş ekranında yer alan [Şifremi Unuttum?] butonuna tıklayın. Kullanıcı adınızı ve sistemde kayıtlı e-posta adresinizi girerek ",
    "headings": [
      "Sıkça Sorulan Sorular ve Takılma Yönetimi",
      "Kurulum, Başlatma ve İlk Giriş"
    ],
    "content": "Sıkça Sorulan Sorular ve Takılma Yönetimi Şifremi unuttum, sisteme nasıl giriş yapabilirim? Giriş ekranında yer alan [Şifremi Unuttum?] butonuna tıklayın. Kullanıcı adınızı ve sistemde kayıtlı e-posta adresinizi girerek yeni şifrenizi belirleyin. Sistemde tanımlı bir e-posta adresiniz yoksa birim sorumlunuza veya sistem yöneticinize başvurunuz; yönetici Kullanıcı Yönetimi ekranından tek tıkla geçici şifre atayabilir. Lisans süresi dolduğunda verilerimiz silinir mi? Kesinlikle hayır. Lisans süresinin dolması yalnızca ekran erişimlerini kilitler; veritabanındaki nöbetler, personeller, dozimetre ve RKE kayıtları hiçbir şekilde silinmez veya bozulmaz. Sistem Yöneticisi yeni lisans anahtarını girdiği anda tüm sistem kaldığı yerden eksiksiz çalışmaya devam eder. Beni Hatırla seçeneğini işaretlediğimde şifrem bilgisayarda açık kalır mı? Hayır. Güvenlik ve KVKK gereği [Beni Hatırla] seçeneği yalnızca kullanıcı adınızı depolar; parolanızı kesinlikle diske veya yerel ayarlara yazmaz. Her oturumda şifrenin elle yazılması zorunludur. PostgreSQL veritabanı bağlantı hatası alıyorum, ne yapmalıyım? Uygulama açılışında gelen hata kutusundaki [Servisi Yönetici Olarak Başlat (UAC)] butonuna tıklayın ve Windows izin penceresine \"Evet\" deyin. Servis otomatik olarak başlatılacaktır. Sorun devam ederse Windows Hizmetler ( services.msc ) ekranından PostgreSQL servisinin durumunu kontrol ediniz."
  },
  {
    "id": "02_kullanici_ve_rol_yonetimi",
    "title": "Kullanıcı ve Rol Yönetimi",
    "category": "1. Sistem, Kurulum & Güvenlik",
    "url": "02_kullanici_ve_rol_yonetimi.html",
    "summary": "Rol Tabanlı Erişim Kontrolü (RBAC), modül düzeyinde 4 kademeli yetki ve veri kapsamı matrisi (Miras, Kendisi, Departman, Tümü), hatalı şifreyle kilitlenen personelin hesap kilidini kaldırma ve güvenli rol klonlama işlemlerini yönetmenizi sağlar.",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Rol Tabanlı Yetki ve Kapsam Mantığı (Mermaid)",
      "Ekran Konumları ve Görsel Rehber",
      "Adım Adım Operasyonel Eylem Akışı",
      "Sıkça Sorulan Sorular ve Takılma Yönetimi"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 1: Başlangıç & Altyapı 02. Kullanıcı & Rol Yönetimi Kullanıcı ve Rol Yönetimi SKS 6.1 & Bilgi Güvenliği Uyumlu Tahmini Okuma: 4 Dakika Rol Tabanlı Erişim Kontrolü (RBAC), modül düzeyinde 4 kademeli yetki ve veri kapsamı matrisi (Miras, Kendisi, Departman, Tümü), hatalı şifreyle kilitlenen personelin hesap kilidini kaldırma ve güvenli rol klonlama işlemlerini yönetmenizi sağlar. Erişim Kuralı: Bu modüldeki yetki ve hesap yönetimi ekranları yalnızca kurum içi Masaüstü Uygulaması üzerinden ve Sistem Yöneticisi (Admin) yetkisiyle kullanılabilir. Kısa Reçete: Yeni Kullanıcı Açma ve Departman Yetkisi Atama 20 SANİYELİK AKIŞ Yapılacak İşlem: [Kullanıcılar] sekmesinden [Yeni Kullanıcı] butonuna tıklayın. Kullanıcı adı, e-posta, kurumdaki görevine uygun rolü ve sağlık personeli ise [Personel Bağlantısı] 'nı seçerek en az 8 karakterli geçici şifresini kaydedin. Sistem Güvencesi: Personelin nöbet, izin ve dozimetre takipleri doğrudan özlük kartıyla entegre olur; personelin veri görme/düzenleme sınırları rolüne tanımlı kapsam kuralına (Kendisi veya Kendi Departmanı) göre anında kilitlenir. Erişim Modeli RBAC & Kapsam Yetkili Rol Sistem Yöneticisi Şifre Kuralı Min. 8 Karakter Platform ️ Masaüstü Kritik Sahada Yanlış Bilinen Kural (Mit Avcısı) Yanlış Algı: \"İşten ayrılan personelin hesabını sildim, geçmişe ait onayladığı nöbetler ve girdiği dozimetre ölçümleri sistemden silindi veya bozuldu.\" Gerçek Sistem Mantığı: RADPYS'de fiziksel veri silme işlemi yoktur . Arayüzdeki eylemler kullanıcı hesabını kalıcı olarak silmez, doğrudan Pasif durumuna alır. Personelin onayladığı nöbetler, kaydettiği radyasyon ölçümleri ve tüm denetim izi geçmişi veri tabanında eksiksiz ve yasal olarak korunur. 5N1K Kural ve Ayar Çözümleme Tablosu Kullanıcı yönetimi, sistem rolleri ve yetki matrisindeki tüm kontrollerin operasyonel kuralları. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Yeni Kullanıcı Tanımlama [Yeni Kullanıcı Butonu] Personele sisteme giriş hakkı vermek. Kullanıcı adı, ad soyad, rol ve en az 8 karakterli ilk şifre girilerek kaydedilir. Yeni personel göreve başladığında. Sistem Yöneticisi Personel Bağlantısı [Personel Bağlantısı Açılır Kutusu] Kullanıcıyı sağlık özlük kartına bağlamak. Listeden personel seçilir. Bağlantı kurulmazsa hesap yalnızca operatör olur; nöbet ve dozimetreye giremez. Sağlık personeline hesap tanımlanırken. Sistem Yöneticisi Hesap Kilidini Kaldırma [Kilidi Kaldır Butonu] Hatalı şifreyle kilitlenen hesabı açmak. Kilitli kullanıcı seçilip butona basılır; hatalı deneme sayacı ve zaman kilidi anında sıfırlanır. Personel şifresini art arda yanlış girip bloke olduğunda. Sistem Yöneticisi Hesabı Pasife Alma [Aktif/Pasif Butonu] Yetkiyi dondururken geçmiş kayıtları korumak. Kullanıcı seçilip pasife alınır. Fiziksel silme yapılmaz; personelin geçmiş işlem izi bozulmadan korunur. Personel ayrıldığında veya yetkisi durdurulduğunda. Sistem Yöneticisi Kendi Hesabını ve Admin'i Koruma [Sistem Güvenlik Kilidi] Sistemin yöneticisiz kalmasını engellemek. Açık oturum sahibi kendi hesabını pasife alamaz. Ana Admin kullanıcısı ve rolü asla pasife alınamaz. Yanlışlıkla işlem yapılmaya çalışıldığında. Otomatik Kilit Rol Klonlama (Kopyalama) [İşlemler > Seçileni Kopyala] Mevcut bir rolün tüm yetkilerini çoğaltmak. Kaynak rolün tüm modül okuma/yazma/silme ve kapsam ayarları yeni role birebir aktarılır. Benzer yetkilere sahip yeni bir unvan profili oluşturulurken. Sistem Yöneticisi Okuma Yetkisi Bağımlılık Motoru [Yetki Matrisi Onay Kutuları] Mantıksız yetki dağılımlarını önlemek. Yazma, Güncelleme veya Silme açılınca Okuma zorunlu açılır; Okuma kapatılınca tümü anında kapanır. Yetki kutuları işaretlenirken. Sistem Yöneticisi Modül Düzeyinde Kapsam (Scope) [Miras / Kendisi / Departman / Tümü] Veri görme sınırını modül bazında özelleştirmek. Miras seçilirse rolün genel ayarı geçerli olur; istendiğinde belirli modüller 'Kendi Departmanı' veya 'Tümü'ne genişletilir. Modül bazlı özel veri kısıtlaması gerektiğinde. Sistem Yöneticisi Hazır Yetki Şablonları [Şablon Uygula Açılır Kutusu] Matrisi saniyeler içinde doldurmak. \"Sadece Okuma\", \"Operasyon\" veya \"Tam Yetki\" şablonu tüm modül satırlarına topluca uygulanır. Yeni bir role hızlı yetki atarken. Sistem Yöneticisi Roller Arası Canlı Kıyaslama [Karşılaştır Butonu] İki rol arasındaki yetki farklarını denetlemek. Seçilen hedef rol ile mevcut durum kıyaslanır; yetki farkı olan satırlar renkli olarak vurgulanır. Yetki çakışmalarını tespit ederken. Sistem Yöneticisi Görsel Durum ve Rol Rozetleri [Tablo Rozet Göstergeleri] Kullanıcıların rol seviyelerini ve hesap durumlarını tek bakışta ayırt etmek. Kullanıcı tablosunda rol sütunu yetki türüne göre simgeli ve renkli rozetle (Kırmızı Admin, Sarı Yönetici, Mavi Birim Sorumlusu, Nötr Kullanıcı); hesap aktifliği ise yeşil [Aktif] veya gri [Pasif] rozetle gösterilir. Kullanıcı ve rol listesi incelenirken. Sistem Yöneticisi Rol Tabanlı Yetki ve Kapsam Mantığı (Mermaid) Aşağıdaki şema, bir personelin sisteme girişinden itibaren rol yetkilerinin ve 4 kademeli veri kapsamının arka planda nasıl çözümlendiğini göstermektedir. flowchart TD A[\"Kullanıcı Oturum Açar\"] --> B{\"Rolü Nedir?\"} B -->|Admin| C[\"Tam Sistem Yetkisi Tüm Modüller Açık\"] B -->|\"Standart Rol\"| D[\"Modül Yetki Matrisi Kontrolü\"] D --> E{\"Okuma Yetkisi Var mı?\"} E -->|Hayır| F[\"Modül / Sekme Gizlenir\"] E -->|Evet| G[\"Modül Kullanıma Açılır\"] G --> H{\"Yazma / Silme İzni?\"} H -->|Var| I[\"Kayıt Ekle / Güncelle / Pasife Al\"] H -->|Yok| J[\"Sadece İnceleme Kipi\"] G --> K{\"Modül Kapsamı Nedir?\"} K -->|Miras| L[\"Rolün Genel Kapsamını Uygula\"] K -->|Kendisi| M[\"Sadece Kendi Sicil Kayıtları\"] K -->|Departman| N[\"Kendi Birimindeki Tüm Kayıtlar\"] K -->|Tümü| O[\"Tüm Kurum Verilerini Görme\"] Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Yönetici Paneli > Kullanıcı ve Rol Yönetimi > Kullanıcı İşlemleri Kullanıcı Listesi & Eylemler Yasal Bilgilendirme: Bu görseldeki kullanıcı isimleri, unvanlar ve e-posta adresleri tamamen tes"
  },
  {
    "id": "02_kullanici_ve_rol_yonetimi#matrix-5n1k",
    "title": "5N1K Kural ve Ayar Çözümleme Tablosu — Kullanıcı ve Rol Yönetimi",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "02_kullanici_ve_rol_yonetimi.html#matrix-5n1k",
    "summary": "5N1K Kural ve Ayar Çözümleme Tablosu Kullanıcı yönetimi, sistem rolleri ve yetki matrisindeki tüm kontrollerin operasyonel kuralları. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Yeni Kulla",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Kullanıcı ve Rol Yönetimi"
    ],
    "content": "5N1K Kural ve Ayar Çözümleme Tablosu Kullanıcı yönetimi, sistem rolleri ve yetki matrisindeki tüm kontrollerin operasyonel kuralları. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Yeni Kullanıcı Tanımlama [Yeni Kullanıcı Butonu] Personele sisteme giriş hakkı vermek. Kullanıcı adı, ad soyad, rol ve en az 8 karakterli ilk şifre girilerek kaydedilir. Yeni personel göreve başladığında. Sistem Yöneticisi Personel Bağlantısı [Personel Bağlantısı Açılır Kutusu] Kullanıcıyı sağlık özlük kartına bağlamak. Listeden personel seçilir. Bağlantı kurulmazsa hesap yalnızca operatör olur; nöbet ve dozimetreye giremez. Sağlık personeline hesap tanımlanırken. Sistem Yöneticisi Hesap Kilidini Kaldırma [Kilidi Kaldır Butonu] Hatalı şifreyle kilitlenen hesabı açmak. Kilitli kullanıcı seçilip butona basılır; hatalı deneme sayacı ve zaman kilidi anında sıfırlanır. Personel şifresini art arda yanlış girip bloke olduğunda. Sistem Yöneticisi Hesabı Pasife Alma [Aktif/Pasif Butonu] Yetkiyi dondururken geçmiş kayıtları korumak. Kullanıcı seçilip pasife alınır. Fiziksel silme yapılmaz; personelin geçmiş işlem izi bozulmadan korunur. Personel ayrıldığında veya yetkisi durdurulduğunda. Sistem Yöneticisi Kendi Hesabını ve Admin'i Koruma [Sistem Güvenlik Kilidi] Sistemin yöneticisiz kalmasını engellemek. Açık oturum sahibi kendi hesabını pasife alamaz. Ana Admin kullanıcısı ve rolü asla pasife alınamaz. Yanlışlıkla işlem yapılmaya çalışıldığında. Otomatik Kilit Rol Klonlama (Kopyalama) [İşlemler > Seçileni Kopyala] Mevcut bir rolün tüm yetkilerini çoğaltmak. Kaynak rolün tüm modül okuma/yazma/silme ve kapsam ayarları yeni role birebir aktarılır. Benzer yetkilere sahip yeni bir unvan profili oluşturulurken. Sistem Yöneticisi Okuma Yetkisi Bağımlılık Motoru [Yetki Matrisi Onay Kutuları] Mantıksız yetki dağılımlarını önlemek. Yazma, Güncelleme veya Silme açılınca Okuma zorunlu açılır; Okuma kapatılınca tümü anında kapanır. Yetki kutuları işaretlenirken. Sistem Yöneticisi Modül Düzeyinde Kapsam (Scope) [Miras / Kendisi / Departman / Tümü] Veri görme sınırını modül bazında özelleştirmek. Miras seçilirse rolün genel ayarı geçerli olur; istendiğinde belirli modüller 'Kendi Departmanı' veya 'Tümü'ne genişletilir. Modül bazlı özel veri kısıtlaması gerektiğinde. Sistem Yöneticisi Hazır Yetki Şablonları [Şablon Uygula Açılır Kutusu] Matrisi saniyeler içinde doldurmak. \"Sadece Okuma\", \"Operasyon\" veya \"Tam Yetki\" şablonu tüm modül satırlarına topluca uygulanır. Yeni bir r"
  },
  {
    "id": "02_kullanici_ve_rol_yonetimi#workflow",
    "title": "Rol Tabanlı Yetki ve Kapsam Mantığı (Mermaid) — Kullanıcı ve Rol Yönetimi",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "02_kullanici_ve_rol_yonetimi.html#workflow",
    "summary": "Rol Tabanlı Yetki ve Kapsam Mantığı (Mermaid) Aşağıdaki şema, bir personelin sisteme girişinden itibaren rol yetkilerinin ve 4 kademeli veri kapsamının arka planda nasıl çözümlendiğini göstermektedir. flowchart TD A[\"Kul",
    "headings": [
      "Rol Tabanlı Yetki ve Kapsam Mantığı (Mermaid)",
      "Kullanıcı ve Rol Yönetimi"
    ],
    "content": "Rol Tabanlı Yetki ve Kapsam Mantığı (Mermaid) Aşağıdaki şema, bir personelin sisteme girişinden itibaren rol yetkilerinin ve 4 kademeli veri kapsamının arka planda nasıl çözümlendiğini göstermektedir. flowchart TD A[\"Kullanıcı Oturum Açar\"] --> B{\"Rolü Nedir?\"} B -->|Admin| C[\"Tam Sistem Yetkisi Tüm Modüller Açık\"] B -->|\"Standart Rol\"| D[\"Modül Yetki Matrisi Kontrolü\"] D --> E{\"Okuma Yetkisi Var mı?\"} E -->|Hayır| F[\"Modül / Sekme Gizlenir\"] E -->|Evet| G[\"Modül Kullanıma Açılır\"] G --> H{\"Yazma / Silme İzni?\"} H -->|Var| I[\"Kayıt Ekle / Güncelle / Pasife Al\"] H -->|Yok| J[\"Sadece İnceleme Kipi\"] G --> K{\"Modül Kapsamı Nedir?\"} K -->|Miras| L[\"Rolün Genel Kapsamını Uygula\"] K -->|Kendisi| M[\"Sadece Kendi Sicil Kayıtları\"] K -->|Departman| N[\"Kendi Birimindeki Tüm Kayıtlar\"] K -->|Tümü| O[\"Tüm Kurum Verilerini Görme\"]"
  },
  {
    "id": "02_kullanici_ve_rol_yonetimi#screenshots",
    "title": "Ekran Konumları ve Görsel Rehber — Kullanıcı ve Rol Yönetimi",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "02_kullanici_ve_rol_yonetimi.html#screenshots",
    "summary": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Yönetici Paneli > Kullanıcı ve Rol Yönetimi > Kullanıcı İşlemleri Kullanıcı Listesi & Eylemler Yasal Bilgilendirme: Bu görseldeki kullanıcı isimleri, unvanlar ve e-posta a",
    "headings": [
      "Ekran Konumları ve Görsel Rehber",
      "Kullanıcı ve Rol Yönetimi"
    ],
    "content": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Yönetici Paneli > Kullanıcı ve Rol Yönetimi > Kullanıcı İşlemleri Kullanıcı Listesi & Eylemler Yasal Bilgilendirme: Bu görseldeki kullanıcı isimleri, unvanlar ve e-posta adresleri tamamen test amaçlı sentetik veridir. Gerçek kişi veya kurum kayıtlarıyla benzerlikler tesadüfidir. ️ Ekran Konumu: Yönetici Paneli > Kullanıcı ve Rol Yönetimi > Modül Yetkileri Yetki & Kapsam Matrisi Yasal Bilgilendirme: Bu görseldeki yetki şablonları, modül izinleri ve kapsam yapılandırmaları test ortamı simülasyonudur."
  },
  {
    "id": "02_kullanici_ve_rol_yonetimi#step-by-step",
    "title": "Adım Adım Operasyonel Eylem Akışı — Kullanıcı ve Rol Yönetimi",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "02_kullanici_ve_rol_yonetimi.html#step-by-step",
    "summary": "Adım Adım Operasyonel Eylem Akışı Adım 1: Yeni Kullanıcı Tanımlama ve İlk Şifre Atama Sol ana menüden [Kullanıcı ve Rol Yönetimi] penceresini açın. [Kullanıcılar] sekmesinde [Yeni Kullanıcı] butonuna tıklayın. Kullanıcı ",
    "headings": [
      "Adım Adım Operasyonel Eylem Akışı",
      "Kullanıcı ve Rol Yönetimi"
    ],
    "content": "Adım Adım Operasyonel Eylem Akışı Adım 1: Yeni Kullanıcı Tanımlama ve İlk Şifre Atama Sol ana menüden [Kullanıcı ve Rol Yönetimi] penceresini açın. [Kullanıcılar] sekmesinde [Yeni Kullanıcı] butonuna tıklayın. Kullanıcı adını, ad soyadı ve e-posta adresini girin. Sağlık personeli ise [Personel Bağlantısı] kutusundan personeli eşleyin. En az 8 karakterli ilk şifresini yazıp [Kaydet] butonuna basın. Adım 2: Hatalı Şifreyle Kilitlenen Hesabı Açma Kullanıcı listesindeki arama kutusuna personelin adını yazarak satırını bulun. Yanlış giriş sayısını aşmış personelin satırına tıkladığınızda yukarıdaki [Kilidi Kaldır] butonu aktifleşir. Butona tıklayıp onay verdiğinizde kilit saniyeler içinde kaldırılır. Adım 3: Rol Yönetimi ve Rol Klonlama [Roller ve Yetkiler] sekmesine geçin. Sol panelde sistem rolleri listelenir. Sıfırdan bir rol açmak için [Yeni Rol Ekle] butonuna basabilirsiniz. Eğer mevcut bir unvanın (Örn: *Kıdemli Tekniker*) yetkilerini türetmek istiyorsanız ilgili role tıklayıp [İşlemler] > [Seçileni Kopyala] seçeneğiyle tüm yetkileri tek tıkla yeni role çoğaltın. Adım 4: Entegre Modül Yetki Matrisini Düzenleme ve Şablon Uygulama Aynı sekmenin sağ/alt alanında seçili role ait Modül Yetki Matrisi doğrudan açılır. 20 modülü tek tek ayarlamak yerine üstteki [Şablon] açılır kutusundan Operasyon veya Sadece Okuma seçip [Şablon Uygula] butonuna tıklayabilirsiniz. Özel modüllerde Okuma/Yazma/Güncelleme/Silme kutularını ve Kapsam radyo butonlarını (Miras, Kendisi, Departman, Tümü) seçip sağ alttaki [Kaydet] butonuna basın. Kapsam Açıklaması sütunu tam genişlikte net bilgi sunarken, değişiklik yapılan satırlar modül başlığındaki rozetle canlı gösterilir. Adım 5: İki Rolün Yetkilerini Canlı Karşılaştırma İki görev profili arasındaki yetki farklarını denetlemek için [Karşılaştır] kutusundan ikinci bir rol seçip [Karşılaştır] butonuna tıklayın. Açılan pencerede yetkileri veya kapsamları farklı olan tüm modül satırları vurgulu renkle listelenir."
  },
  {
    "id": "02_kullanici_ve_rol_yonetimi#faq",
    "title": "Sıkça Sorulan Sorular ve Takılma Yönetimi — Kullanıcı ve Rol Yönetimi",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "02_kullanici_ve_rol_yonetimi.html#faq",
    "summary": "Sıkça Sorulan Sorular ve Takılma Yönetimi Personel kartına bağlamadığım bir kullanıcı nöbet yazabilir veya nöbet listesinde görünebilir mi? Hayır. Bir kullanıcı hesabının nöbet çizelgesinde aday olarak yer alabilmesi, iz",
    "headings": [
      "Sıkça Sorulan Sorular ve Takılma Yönetimi",
      "Kullanıcı ve Rol Yönetimi"
    ],
    "content": "Sıkça Sorulan Sorular ve Takılma Yönetimi Personel kartına bağlamadığım bir kullanıcı nöbet yazabilir veya nöbet listesinde görünebilir mi? Hayır. Bir kullanıcı hesabının nöbet çizelgesinde aday olarak yer alabilmesi, izin talep edebilmesi veya kişisel dozimetre ölçümlerinin işlenebilmesi için mutlaka [Personel Bağlantısı] yapılmış olması gerekir. Personele bağlanmayan hesaplar yalnızca bağımsız bir operatör/yönetici hesabı olarak çalışır. Personel kurumdan ayrıldığında kullanıcı kaydını tamamen silebilir miyim? RADPYS'de fiziksel veri silme işlemi bulunmaz. Kullanıcıyı listeden seçip [Pasif Yap] butonuna bastığınızda hesabın sisteme girişi derhal kesilir. Ancak kullanıcının geçmişte onayladığı nöbetler ve kaydettiği işlemler denetim izinde bozulmadan korunur. Bir role Yazma yetkisi vermek istediğimde neden Okuma yetkisi otomatik olarak işaretleniyor? RADPYS Yetki Bağımlılık Motoru gereğince bir modülü görüntüleme (Okuma) yetkisi olmayan bir personelin o modülde yeni kayıt oluşturması veya düzenleme yapması mantıksal olarak imkansızdır. Bu nedenle Yazma, Güncelleme veya Silme kutularından biri açıldığında Okuma yetkisi otomatik olarak kilitli şekilde açılır. \"Miras\" kapsamı seçildiğinde personelin yetki alanı neye göre belirlenir? Modül yetki tablosundaki Miras seçeneği, ilgili modülün rolün genel ayarlarında tanımlanmış olan veri sınırını (Kendisi, Kendi Departmanı veya Tümü) doğrudan uygulamasını sağlar. Eğer belirli bir modül için farklı bir kural uygulamak isterseniz satırdaki radyo butonunu doğrudan [Kendisi] , [Departman] veya [Tümü] olarak değiştirebilirsiniz."
  },
  {
    "id": "03_sistem_ayarlari_ve_tanimlamalar",
    "title": "Sistem Ayarları, Şablon Merkezi & Tanımlamalar",
    "category": "1. Sistem, Kurulum & Güvenlik",
    "url": "03_sistem_ayarlari_ve_tanimlamalar.html",
    "summary": "Kurum çift başlık ve çift logo antet yapılandırması, Word ve Excel rapor şablonlarının yönetimi, hastane departman hiyerarşisi, kadro unvanları ve resmi tatil takviminin merkezi operasyonel yönetim rehberi.",
    "headings": [
      "Hızlı Reçete: Kurumsal Antet ve Çift Logo Tanımlama",
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Departman Yönetimi & Güvenlik Kalkanı Süreci",
      "️ Ekran Rehberi ve Kritik Arayüzler",
      "Adım Adım Operasyonel Eylem Akışı",
      "1 Kurum Başlıklarını ve Resmi Çift Logoyu Yapılandırma",
      "2 Yeni Departman Tanımlama ve Mimari Kat Planı Eşleme",
      "3 Resmi/Dini Tatil Takvimini Otomatik Oluşturma ve Düzenleme",
      "4 Kurumsal E-Posta (SMTP) ve Web Portal 2FA Doğrulama Ayarlarını Yapılandırma",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 1: Başlangıç & Altyapı 03. Sistem Ayarları & Tanımlar Modül 03 SKS 6.1 Uyumlu NDK Standart Antet KVKK Korumalı Tahmini Okuma: 4 Dakika | Sürüm: RADPYS v4.2 Sistem Ayarları, Şablon Merkezi & Tanımlamalar Kurum çift başlık ve çift logo antet yapılandırması, Word ve Excel rapor şablonlarının yönetimi, hastane departman hiyerarşisi, kadro unvanları ve resmi tatil takviminin merkezi operasyonel yönetim rehberi. Hızlı Reçete: Kurumsal Antet ve Çift Logo Tanımlama Resmi raporların üst antetini ve logolarını 30 saniyede sisteme işleyin 1. İstenen Sonuç Tüm Word ve Excel raporlarında resmi kurum başlıkları ve logolarının otomatik basılması. 2. Yapılacak İşlem [Rapor Şablonları] ekranında [Kurum Başlık 1] ve [Kurum Başlık 2] metinlerini girip, [Gözat...] butonlarıyla sol/sağ logoları seçin. 3. Sistem Etkisi Logolar güvenli kaynak kasasına kopyalanır; canlı önizleme güncellenir ve şablonlardaki yer tutuculara otomatik işlenir. ️ Kod Standardı 2-20 Karakter (_) Yetkili Rol Yalnızca Admin Tatil Eşiği 0.5 Gün Adımlı ️ Platform Yalnızca Masaüstü MİT AVCISI: Departman Silme ve Veri Bütünlüğü Efsanesi YANLIŞ ALGI: \"Kapanan veya adı değişen bir departmanı tablodan silebiliriz; silersek geçmiş nöbet ve izin kayıtları da sistemden yok olur.\" SAHA GERÇEĞİ: \"RADPYS'de departmanlar asla fiziksel olarak silinemez; yalnızca [Pasif] yapılabilir. Üstelik o birimde kayıtlı aktif personel veya alt departman varsa sistem pasife almayı da kilitler (önce personellerin transferi zorunludur). Bu sayede kurumun son 30 yıllık geçmiş nöbet ve dozimetre kayıtları asla kaybolmaz.\" 5N1K Kural ve Ayar Çözümleme Tablosu Tüm kontroller test edilmiştir NE? (Ayar & Ekran Kontrolü) NEDEN? (Kullanım Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Tetiklenme Anı) KİM? (Yetkili Kitle) Kurum Çift Başlık Ayarı [Kurum Başlık 1 & 2] Metin Alanları Resmi rapor ve evrakların üst antetine bakanlık ve hastane hiyerarşisini basmak. Başlık 1 ve 2 metinleri girilir. Başlıkların solundaki onay kutuları işaretlenerek aktif edilir. Kurum anteti ilk kurulurken veya değiştiğinde. Sistem Yöneticisi Kurum Çift Logo Seçimi [Gözat...] Butonu & Dosya Seçici Rapor antetinin sol ve sağ köşelerine resmi kurum logolarını yerleştirmek. Bilgisayardan seçilen resim programın güvenli kaynak kasasına kopyalanır ve bağıl dosya adı olarak saklanır. Logo dosyası seçildiğinde. Sistem Yöneticisi Canlı Antet Önizlemesi [Önizleme Çerçevesi] Raporu üretmeden önce antetin ekranda nasıl görüneceğini anında denetlemek. Başlık yazıldıkça veya onay kutusu işaretlendikçe 100x100 logolar ve ortalanmış 14pt başlıklar anında yeniden çizilir. Formda herhangi bir harfe veya kutuya dokunulduğunda. Sistem Yöneticisi Şablonu Uygulamada Açma [Aç] Butonu Word veya Excel şablonu üzerinde doğrudan masaüstü ofis araçlarıyla çalışabilmek. Seçili şablon dosyası işletim sisteminin varsayılan MS Word veya MS Excel uygulamasında açılır. Şablon aç butonuna basıldığında. Sistem Yöneticisi Şablonu Fabrika Ayarına Sıfırlama [Yeniden Oluştur] Butonu Hatalı düzenlenen veya bozulan rapor şablonlarını orijinal haline döndürmek. Sistem, fabrika tanımını okuyarak ilgili Word/Excel şablon dosyasını sıfırdan kurumsal standartta yeniden üretir. Yeniden oluştur butonuna tıklandığında. Sistem Yöneticisi Departman Hiyerarşi Kilidi [Üst Departman] Açılır Kutusu Sonsuz döngü ve organizasyon ağacı çökmesini engellemek. Bir departman kendisini veya kendi alt ağacındaki birimleri üst departman olarak seçemez. Departman kaydedilirken / güncellenirken. Sistem Yöneticisi Departman Pasife Alma Kalkanı [Aktif] Onay Kutusu Personeli veya alt birimi bulunan aktif departmanın pasife alınarak yetim kalmasını önlemek. Departmana bağlı en az 1 personel veya 1 aktif alt birim varsa pasife alma kesinlikle engellenir; önce transfer istenir. Pasife alma girişiminde. Sistem Yöneticisi Kat Planı / Kroki Eşleme [Yeni Yükle...] & [Oda Kodu] Departmanı mimari kat planına ve oda mahalle koduna bağlamak. PDF veya görsel kroki seçilir, krokiler havuzuna kaydedilir ve departmana atanır. Departman tanımlanırken. Sistem Yöneticisi Unvan Nöbet ve Radyasyon Mirası [Radyasyon Görevlisi] & [Nöbet] Yeni personel özlük kartı açılırken meslek standartlarının otomatik gelmesini sağlamak. Unvan kartında işaretlenen radyasyon görevlisi ve nöbet tutabilme bayrakları, bu unvanı alan personele otomatik devredilir. Unvan tanımlanırken. Sistem Yöneticisi Tatil Takvimi 0.5 Gün Kuralı [Gün Sayısı] Sayı Alanı Arefe günleri ve yarım günlük idari izinlerin puantaja tam yansımasını sağlamak. Tatil gün sayısı 0.5 adımlarla girilir (0.5, 1.0, 1.5). Nöbet dağıtım motoru arefe günlerini yarım gün tatil kabul eder. Tatil takvimi kaydedilirken. Sistem Yöneticisi Tanımlama Tablosu Rozetleri [Görsel Rozet Göstergeleri] Birimlerin radyasyon riskini, nöbet durumunu ve aktiflik statüsünü tek bakışta denetlemek. Departman, unvan, izin, tatil, eğitim ve cihaz tablolarında [Aktif]/[Pasif] durumları, radyasyon simgesiyle [Radyasyonlu Alan] ve [Nöbet] durumları kurumsal renkli rozetlerle görselleştirilir. Tanımlama tabloları incelenirken. Sistem Yöneticisi Serbest Sütun Boyutlandırma [Tablo Başlığı Boyutlandırma & Yatay Kaydırma] Uzun departman ve unvan adlarının ekranda kesilmeden tam olarak okunmasını sağlamak. Tablo sütun başlıkları fareyle sağa sola sürüklenerek serbestçe genişletilebilir; uzun metinlerde yatay kaydırma çubuğu belirir ve hiçbir veri üç nokta (...) ile gizlenmez. Tablo verileri okunurken veya incelenirken. Sistem Yöneticisi Tanımlama Silme Kalkanı (Hibrit Silme) [Sil] Butonu (Cihaz Türü, Amacı, Kaynak Türü ve Sistem Lookupları) Kullanımda olan bir tanım silindiğinde geçmiş cihaz, muayene veya envanter kayıtlarının ilişkisinin bozulmasını (yetim kalmasını) önlemek. Seçili tanıma bağlı en az 1 cihaz veya envanter kaydı varsa sistem kaydı kalıcı silmez; geçmiş verileri koruyarak güvenle [Pasif] statüye çeker ve yeni kayıt açılır kutularından gizler. Hiçbir bağlı kaydı olmayan tanımlar ise doğrudan sistemden temizlenir. Tanımlama tablosunda b"
  },
  {
    "id": "03_sistem_ayarlari_ve_tanimlamalar#quick-recipe",
    "title": "Hızlı Reçete: Kurumsal Antet ve Çift Logo Tanımlama — Sistem Ayarları, Şablon Merkezi & Tanımlamalar",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "03_sistem_ayarlari_ve_tanimlamalar.html#quick-recipe",
    "summary": "Hızlı Reçete: Kurumsal Antet ve Çift Logo Tanımlama Resmi raporların üst antetini ve logolarını 30 saniyede sisteme işleyin 1. İstenen Sonuç Tüm Word ve Excel raporlarında resmi kurum başlıkları ve logolarının otomatik b",
    "headings": [
      "Hızlı Reçete: Kurumsal Antet ve Çift Logo Tanımlama",
      "Sistem Ayarları, Şablon Merkezi & Tanımlamalar"
    ],
    "content": "Hızlı Reçete: Kurumsal Antet ve Çift Logo Tanımlama Resmi raporların üst antetini ve logolarını 30 saniyede sisteme işleyin 1. İstenen Sonuç Tüm Word ve Excel raporlarında resmi kurum başlıkları ve logolarının otomatik basılması. 2. Yapılacak İşlem [Rapor Şablonları] ekranında [Kurum Başlık 1] ve [Kurum Başlık 2] metinlerini girip, [Gözat...] butonlarıyla sol/sağ logoları seçin. 3. Sistem Etkisi Logolar güvenli kaynak kasasına kopyalanır; canlı önizleme güncellenir ve şablonlardaki yer tutuculara otomatik işlenir. ️ Kod Standardı 2-20 Karakter (_) Yetkili Rol Yalnızca Admin Tatil Eşiği 0.5 Gün Adımlı ️ Platform Yalnızca Masaüstü"
  },
  {
    "id": "03_sistem_ayarlari_ve_tanimlamalar#matrix-5n1k",
    "title": "5N1K Kural ve Ayar Çözümleme Tablosu — Sistem Ayarları, Şablon Merkezi & Tanımlamalar",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "03_sistem_ayarlari_ve_tanimlamalar.html#matrix-5n1k",
    "summary": "5N1K Kural ve Ayar Çözümleme Tablosu Tüm kontroller test edilmiştir NE? (Ayar & Ekran Kontrolü) NEDEN? (Kullanım Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Tetiklenme Anı) KİM? (Yetkili Kitle) Kurum Çift Başlık Ayarı [Ku",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Sistem Ayarları, Şablon Merkezi & Tanımlamalar"
    ],
    "content": "5N1K Kural ve Ayar Çözümleme Tablosu Tüm kontroller test edilmiştir NE? (Ayar & Ekran Kontrolü) NEDEN? (Kullanım Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Tetiklenme Anı) KİM? (Yetkili Kitle) Kurum Çift Başlık Ayarı [Kurum Başlık 1 & 2] Metin Alanları Resmi rapor ve evrakların üst antetine bakanlık ve hastane hiyerarşisini basmak. Başlık 1 ve 2 metinleri girilir. Başlıkların solundaki onay kutuları işaretlenerek aktif edilir. Kurum anteti ilk kurulurken veya değiştiğinde. Sistem Yöneticisi Kurum Çift Logo Seçimi [Gözat...] Butonu & Dosya Seçici Rapor antetinin sol ve sağ köşelerine resmi kurum logolarını yerleştirmek. Bilgisayardan seçilen resim programın güvenli kaynak kasasına kopyalanır ve bağıl dosya adı olarak saklanır. Logo dosyası seçildiğinde. Sistem Yöneticisi Canlı Antet Önizlemesi [Önizleme Çerçevesi] Raporu üretmeden önce antetin ekranda nasıl görüneceğini anında denetlemek. Başlık yazıldıkça veya onay kutusu işaretlendikçe 100x100 logolar ve ortalanmış 14pt başlıklar anında yeniden çizilir. Formda herhangi bir harfe veya kutuya dokunulduğunda. Sistem Yöneticisi Şablonu Uygulamada Açma [Aç] Butonu Word veya Excel şablonu üzerinde doğrudan masaüstü ofis araçlarıyla çalışabilmek. Seçili şablon dosyası işletim sisteminin varsayılan MS Word veya MS Excel uygulamasında açılır. Şablon aç butonuna basıldığında. Sistem Yöneticisi Şablonu Fabrika Ayarına Sıfırlama [Yeniden Oluştur] Butonu Hatalı düzenlenen veya bozulan rapor şablonlarını orijinal haline döndürmek. Sistem, fabrika tanımını okuyarak ilgili Word/Excel şablon dosyasını sıfırdan kurumsal standartta yeniden üretir. Yeniden oluştur butonuna tıklandığında. Sistem Yöneticisi Departman Hiyerarşi Kilidi [Üst Departman] Açılır Kutusu Sonsuz döngü ve organizasyon ağacı çökmesini engellemek. Bir departman kendisini veya kendi alt ağacındaki birimleri üst departman olarak seçemez. Departman kaydedilirken / güncellenirken. Sistem Yöneticisi Departman Pasife Alma Kalkanı [Aktif] Onay Kutusu Personeli veya alt birimi bulunan aktif departmanın pasife alınarak yetim kalmasını önlemek. Departmana bağlı en az 1 personel veya 1 aktif alt birim varsa pasife alma kesinlikle engellenir; önce transfer istenir. Pasife alma girişiminde. Sistem Yöneticisi Kat Planı / Kroki Eşleme [Yeni Yükle...] & [Oda Kodu] Departmanı mimari kat planına ve oda mahalle koduna bağlamak. PDF veya görsel kroki seçilir, krokiler havuzuna kaydedilir ve departmana atanır. Departman tanımlanırken. Sistem Yöneticisi Unvan Nöbet ve Radyasyo"
  },
  {
    "id": "03_sistem_ayarlari_ve_tanimlamalar#workflow",
    "title": "Departman Yönetimi & Güvenlik Kalkanı Süreci — Sistem Ayarları, Şablon Merkezi & Tanımlamalar",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "03_sistem_ayarlari_ve_tanimlamalar.html#workflow",
    "summary": "Departman Yönetimi & Güvenlik Kalkanı Süreci Döngü & Transfer Kontrolü graph TD A[\"Departman Formu Açılır\"] --> B{\"Yeni mi Düzenleme mi?\"} B -->|\"Yeni Kayıt\"| C[\"Ad, Kod ve Üst Departman Girilir\"] B -->|\"Düzenleme\"| D[\"M",
    "headings": [
      "Departman Yönetimi & Güvenlik Kalkanı Süreci",
      "Sistem Ayarları, Şablon Merkezi & Tanımlamalar"
    ],
    "content": "Departman Yönetimi & Güvenlik Kalkanı Süreci Döngü & Transfer Kontrolü graph TD A[\"Departman Formu Açılır\"] --> B{\"Yeni mi Düzenleme mi?\"} B -->|\"Yeni Kayıt\"| C[\"Ad, Kod ve Üst Departman Girilir\"] B -->|\"Düzenleme\"| D[\"Mevcut Bilgiler Yüklenir\"] C --> E{\"Döngüsel Hiyerarşi Var mı?\"} D --> E E -->|\"Evet: Kendisi veya Alt Dalı Seçili\"| F[\"HATA: Hiyerarşide Döngü Engeli\"] E -->|Hayır| G{\"Pasife Alma Talebi mi?\"} G -->|\"Hayır: Aktif Kayıt\"| H[\"Departman Başarıyla Kaydedilir\"] G -->|\"Evet: Pasif Yapılmak İsteniyor\"| I{\"Bağlı Personel veya Alt Birim Var mı?\"} I -->|\"Evet: Bağlı Personel veya Alt Birim Mevcut\"| J[\"ENGEL: Önce Personelleri Başka Birime Transfer Edin!\"] I -->|\"Hayır: Tamamen Boş Birim\"| K[\"Departman Güvenle Pasife Alınır\"]"
  },
  {
    "id": "03_sistem_ayarlari_ve_tanimlamalar#screenshots",
    "title": "️ Ekran Rehberi ve Kritik Arayüzler — Sistem Ayarları, Şablon Merkezi & Tanımlamalar",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "03_sistem_ayarlari_ve_tanimlamalar.html#screenshots",
    "summary": "️ Ekran Rehberi ve Kritik Arayüzler ️ Ekran Konumu: Sistem Yönetimi > Rapor Şablonları & Kurum Anteti templates_page Yasal Bilgilendirme: Bu görseldeki kurum isimleri, logolar ve şablon örnekleri tamamen test amaçlı sent",
    "headings": [
      "️ Ekran Rehberi ve Kritik Arayüzler",
      "Sistem Ayarları, Şablon Merkezi & Tanımlamalar"
    ],
    "content": "️ Ekran Rehberi ve Kritik Arayüzler ️ Ekran Konumu: Sistem Yönetimi > Rapor Şablonları & Kurum Anteti templates_page Yasal Bilgilendirme: Bu görseldeki kurum isimleri, logolar ve şablon örnekleri tamamen test amaçlı sentetik veridir. ️ Ekran Konumu: Sistem Yönetimi > Genel Program Ayarları system_management_page Yasal Bilgilendirme: Bu görseldeki parametre değerleri ve açıklamalar test ortamı verisidir. ️ Ekran Konumu: Sistem Yönetimi > Sistem Tanımları > Departman Tanımları lookup_departman Yasal Bilgilendirme: Bu görseldeki departman adları ve kodları test amaçlıdır."
  },
  {
    "id": "03_sistem_ayarlari_ve_tanimlamalar#step-by-step",
    "title": "Adım Adım Operasyonel Eylem Akışı — Sistem Ayarları, Şablon Merkezi & Tanımlamalar",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "03_sistem_ayarlari_ve_tanimlamalar.html#step-by-step",
    "summary": "Adım Adım Operasyonel Eylem Akışı 1 Kurum Başlıklarını ve Resmi Çift Logoyu Yapılandırma Sol gezinim menüsünden [Sistem Ayarları] > [Rapor Şablonları & Kurum Anteti] sekmesini açın. [Kurum Başlık 1] alanına üst idari kur",
    "headings": [
      "Adım Adım Operasyonel Eylem Akışı",
      "Sistem Ayarları, Şablon Merkezi & Tanımlamalar"
    ],
    "content": "Adım Adım Operasyonel Eylem Akışı 1 Kurum Başlıklarını ve Resmi Çift Logoyu Yapılandırma Sol gezinim menüsünden [Sistem Ayarları] > [Rapor Şablonları & Kurum Anteti] sekmesini açın. [Kurum Başlık 1] alanına üst idari kurum adını (Örn: T.C. SAĞLIK BAKANLIĞI ), [Kurum Başlık 2] alanına hastane/fakülte adınızı yazın. Başlıkların raporda görünmesi için sollarındaki [Kurum Başlık 1] ve [Kurum Başlık 2] kutularını işaretleyin. [Kurum Logo 1] ve [Kurum Logo 2] yanındaki [Gözat...] butonlarına tıklayarak bilgisayarınızdaki logo dosyalarını seçin. Sağ paneldeki Canlı Önizleme alanında logoların ve başlıkların tam konumunu denetleyin. Alt kısımdaki [Kaydet] butonuna basın. Başarı bildiriminden sonra üretilen tüm resmi raporlar bu anteti kullanır. 2 Yeni Departman Tanımlama ve Mimari Kat Planı Eşleme Sistem Yönetimi ağacından [Sistem Tanımları] > [Departman Tanımları] sayfasına geçin. Araç çubuğundaki [Yeni] butonuna tıklayın. [Departman Adı] alanını doldurun ve [Kod] kutusuna standart formatta (2-20 karakter, büyük harf) bir kod belirleyin (Örn: RAD_MR ). Eğer bir alt ünite ise [Üst Departman] açılır kutusundan bağlı olduğu ana anabilim dalını seçin. [Birim Sorumlusu] kutusundan ilgili yetkili hekimi veya amiri atayın. Birim radyasyon içeriyorsa [Radyasyonlu alan] kutusunu, vardiyalı çalışıyorsa [Nöbet usulü mesai] kutusunu işaretleyin. [Kat Planı / Kroki] açılır kutusundan ilgili katı seçin veya [Yeni Yükle...] butonuyla doğrudan PDF/PNG kat planı yükleyin. [Ekle] butonuna basarak işlemi tamamlayın. 3 Resmi/Dini Tatil Takvimini Otomatik Oluşturma ve Düzenleme Ağaç menüsünden [Tanımlamalar] > [Tatil Takvimi] sayfasına tıklayın. Sabit Resmi Tatilleri Topluca Eklemek İçin: Araç çubuğundaki [Resmi Tatilleri Ekle] butonuna tıklayın, ilgili yılı girin; 1 Ocak, 23 Nisan, 1 Mayıs, 19 Mayıs, 15 Temmuz, 30 Ağustos ve 28-29 Ekim (8 resmi tatil) tek tıkla takvime işlenir. Dini Bayramları Tek Tıkla Eklemek İçin: [Yeni] butonuna basın, Tatil Adı alanından Ramazan Bayramı veya Kurban Bayramı seçin. Sistem otomatik olarak Dini Tatil türünü ve Tüm bayram günlerini otomatik oluştur seçeneğini aktif eder. Tarih alanına bayramın Arife Günü tarihini girin ve [Kaydet] butonuna basın. Sistem Arife (0.5 gün) ile birlikte bayramın tüm günlerini (Ramazan için 4 gün, Kurban için 5 gün) tek seferde takvime kaydeder. İdari İzin veya Özel Tatil İçin: [Yeni] butonuna basarak tekil tarih, tatil adı, tür ve gün sayısı (0.5 veya 1.0) belirleyip kaydedebilirsiniz. 4 Kurumsal E-Posta (SMTP) ve Web Po"
  },
  {
    "id": "03_sistem_ayarlari_ve_tanimlamalar#faq",
    "title": "Sıkça Sorulan Sorular (SSS) — Sistem Ayarları, Şablon Merkezi & Tanımlamalar",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "03_sistem_ayarlari_ve_tanimlamalar.html#faq",
    "summary": "Sıkça Sorulan Sorular (SSS) Fiili hizmet (FHZ) hesaplama yöntemini yıl ortasında değiştirebilir miyiz? Fiili hizmet hesaplama yöntemi ( Hibrit , Manuel veya Nöbet ) değiştirildiğinde geçmiş dönemlerde kapatılmış ve SGK'y",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "Sistem Ayarları, Şablon Merkezi & Tanımlamalar"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) Fiili hizmet (FHZ) hesaplama yöntemini yıl ortasında değiştirebilir miyiz? Fiili hizmet hesaplama yöntemi ( Hibrit , Manuel veya Nöbet ) değiştirildiğinde geçmiş dönemlerde kapatılmış ve SGK'ya bildirilmiş olan yıpranma payı puantajlarının tutarlılığı etkilenebilir. Sistem bu sebeple değişiklik anında ekrana Kritik Ayar Değişikliği ikazı getirir. Bu ayarın takvim yılı veya mali dönem başında planlı olarak değiştirilmesi önemle tavsiye edilir. Kapatılmak istenen bir departmanı pasife alırken sistem neden hata veriyor? RADPYS veri bütünlüğü kuralı gereğince; içerisinde en az 1 aktif personel kaydı veya kendisine bağlı aktif alt departman bulunan birimler pasife alınamaz. Bu durumda sistem \"Bu departman pasife alinamaz: X personel kaydi... Once bagimliliklari kaldirin.\" uyarısı verir. İşlemi yapabilmek için öncelikle o departmandaki personelleri [Personel Listesi] ekranından başka bir aktif birime transfer etmeniz gerekir. Cihaz Türü, Cihaz Amacı veya Kaynak Türü gibi bir tanımı sildiğimde geçmiş cihazlar ve envanterler bozulur mu? Kesinlikle hayır, geçmiş kayıtlar korunur. RADPYS \"Veri Bütünlüğü Odaklı Hibrit Silme\" altyapısına sahiptir. Sildiğiniz bir tanıma (örneğin bir cihaz türüne, amacına veya kaynak grubuna) bağlı mevcut ya da arşivlenmiş cihaz/envanter kayıtları varsa; sistem bu tanımı veritabanından kalıcı olarak silmez, güvenle Pasife alır. Böylece geçmiş kalite kontrol, bakım, dozimetre ve envanter raporlarınız asla bozulmaz; yalnızca yeni cihaz ekleme formlarında o tanım listeden kaldırılır. Sadece hiçbir kayıtta kullanılmamış tertemiz tanımlar sistemden kalıcı olarak temizlenir. Dini bayramları her yıl tek tek gün gün girmek zorunda mıyız, arefe günü neden 0.5 gündür? Hayır, gün gün girmenize gerek yoktur. Yeni tatil eklerken Ramazan Bayramı veya Kurban Bayramı seçtiğinizde form otomatik olarak toplu oluşturma moduna geçer; yalnızca Arife gününün tarihini seçip kaydettiğinizde Arife günü dahil tüm bayram günleri (Ramazan için 4 gün, Kurban için 5 gün) tek seferde takvime eklenir. Mevzuata göre dini bayram arefeleri saat 13:00 itibarıyla resmi tatil sayılmaktadır. Nöbet dağıtım motoru ve fazla mesai hesaplayıcısı, personelin sabah çalıştığı mesaiyi normal, öğleden sonrasını ise resmi tatil nöbet katsayısıyla hesaplar. Arife günü için gün sayısı otomatik olarak 0.5 gün girilerek bu yarım günlük ayrım kusursuz şekilde puantaja yansıtılır. \"Yeniden Oluştur\" butonuna bastığımda Word veya Excel'deki özel tasarımlarım kaybolu"
  },
  {
    "id": "04_veritabani_bakim_ve_guvenlik",
    "title": "Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği",
    "category": "1. Sistem, Kurulum & Güvenlik",
    "url": "04_veritabani_bakim_ve_guvenlik.html",
    "summary": "PostgreSQL motor optimizasyonu (VACUUM ve REINDEX), 256-bit PBKDF2/AES şifreli yedekleme ve felaket kurtarma (Disaster Recovery), 3 kademeli korumayla fabrika ayarlarına sıfırlama, SHA-256 kriptografik denetim izi ve global çökme yakalama rehberi.",
    "headings": [
      "Hızlı Reçete: Şifreli Yedekleme ve Motor Optimizasyonu",
      "5N1K Kural ve Fonksiyon Tablosu",
      "Saha Mit Avcısı: \"Veritabanını Sıfırlarsam Her Şey Silinir mi?\"",
      "Güvenli Bakım ve Felaket Kurtarma Akış Şeması",
      "️ Arayüz Ekran Görünümleri",
      "Adım Adım Operasyon Rehberi",
      "Şifreli Veritabanı ve Evrak Yedeği Alma",
      "Eski Bir Yedeği Geri Yükleme (Felaket Kurtarma)",
      "PostgreSQL VACUUM ve REINDEX Motor Bakımı",
      "Sistem Tanısı ve Otomatik Onarım Sihirbazı",
      "Tehlikeli Bölge — 3 Kademeli Fabrika Ayarlarına Sıfırlama",
      "Beklenmeyen Hata (Crash Dialog) Anında Teknik Destek Bildirimi",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 1: Başlangıç & Altyapı 04. Veritabanı Bakım & Kasa Modül 04 KVKK 6698 Korumalı PostgreSQL 14+ Uyumlu SHA-256 Denetim İzi Tahmini Okuma: 4 Dakika | Sürüm: RADPYS v4.2 Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği PostgreSQL motor optimizasyonu (VACUUM ve REINDEX), 256-bit PBKDF2/AES şifreli yedekleme ve felaket kurtarma (Disaster Recovery), 3 kademeli korumayla fabrika ayarlarına sıfırlama, SHA-256 kriptografik denetim izi ve global çökme yakalama rehberi. Hızlı Reçete: Şifreli Yedekleme ve Motor Optimizasyonu Veri kaybı riskini sıfırlayın ve veritabanı sorgu performansını 30 saniyede optimize edin 1. İstenen Sonuç Verilerin tam dökümünü güvenli şifrelemeyle arşivlemek ve veritabanı ölü satırlarını temizlemek. 2. Yapılacak İşlem [Veritabanı Bakım] ekranında [Veritabanı Yedekle] ve [Dosyaları Yedekle] butonlarına basın; olası format/sunucu değişimi için [Güvenlik Anahtarı] kartını harici ortama aktarın; ardından [Boyut Optimize Et (VACUUM)] aracını çalıştırın. 3. Sistem Etkisi Veritabanı 256-bit AES ile şifrelenip zaman damgasıyla saklanır; PostgreSQL motoru ölü satırları temizleyip disk alanını geri kazandırır. Kriptografi 256-bit AES/PBKDF2 Yetkili Rol Yalnızca Admin ️ Emniyet Kilidi Sudo Şifre Onayı ️ Platform Yalnızca Masaüstü 5N1K Kural ve Fonksiyon Tablosu Veritabanı yedekleme, geri yükleme, motor optimizasyonu ve denetim araçlarının çalışma mantığı. NE? (Ekran Kontrolü) NEDEN? (Kullanım Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Hangi Durumda) KİM? (Yetkili Kitle) Veritabanı Yedekle Sol Üst Buton Tüm klinik, nöbet, izin ve dozimetre kayıtlarının anlık tam yedeğini almak. PostgreSQL dökümü alınır; 256-bit PBKDF2/AES ile şifrelenip zaman damgasıyla .dump dosyası üretilir. Düzenli periyotlarla veya büyük veri girişi/güncelleme öncesinde. Sistem Yöneticisi Dosyaları Yedekle Sol Üst Buton Yüklenen personel evrakları, sertifikalar ve cihaz dokümanlarını arşivlemek. Yüklü dosyalar klasörü zip paketi haline getirilir ve 256-bit anahtarla şifrelenerek .zip olarak saklanır. Belge kasası arşivlenmek istendiğinde. Sistem Yöneticisi Güvenlik Anahtarı (Kurtarma Kartı & Cihaz Donanım Anahtarı) Sol Üst Buton Format veya yeni sunucu kurulumu sonrasında şifreli yedeklerin açılabilmesi için afet kurtarma anahtarını güvenli harici ortama aktarmak ve donanımsal kurtarma anahtarını denetlemek. Sudo şifresi doğrulanır. 32 karakterlik AES-256 güvenlik anahtarı ve sunucunun Cihaz Kimliği (Machine ID) görüntülenir. Anahtar panoya kopyalanabilir, [Kurtarma Dosyası Kaydet (.txt)] butonuyla harici ortama yazılabilir veya tek tıkla donanım kimliğiyle eşitlenebilir. İlk sistem kurulumunda, felaket kurtarma tatbikatında ve harici diske yedek kopyalanırken. Süper Yönetici (Sudo) Yedeği Geri Yükle (Yükle) Tablo Aksiyon Butonu Veri kaybı, sistem çökmesi veya arıza anında sistemi geçmiş bir tarihe döndürmek. Kritik uyarı onaylanır ve Sudo şifresi girilir. Sistem anahtarı yerel kasadan, harici diskten ( radpys_yedek_kurtarma_anahtari.txt ) veya geçmiş anahtar arşivinden otomatik tarar; bulunamazsa Güvenlik Anahtarı modalı açılır. Anahtar elle girilebilir, dosyadan seçilebilir veya [Cihaz Kimliğiyle Çözmeyi Dene] ile donanım afet anahtarı tek tıkla test edilir. Dosya çözülüp veritabanına basılır; sayaçlar eşitlenir. Felaket kurtarma, format sonrası geri yükleme veya hatalı toplu işlem sonrası. Süper Yönetici (Sudo) Yedeği Dışa Aktar Tablo Aksiyon Butonu Yedek dosyasını harici diske veya USB belleğe aktarmak. Kullanıcının seçtiği konuma dosya yöneticisiyle güvenli kopya çıkarır. Harici lokasyonda çevrimdışı arşivleme yapılırken. Sistem Yöneticisi Yedeği Kalıcı Olarak Silme Tablo Aksiyon Butonu Eski ve gereksiz yedekleri diskten temizleyerek alan açmak. Silme onayı + Sudo doğrulaması sonrasında dosya diskten geri dönüşsüz silinir. Disk alanı yönetimi gerektiğinde. Süper Yönetici (Sudo) Boyut Optimize Et (VACUUM) Bakım Araçları Butonu Silinmiş kayıtların bıraktığı ölü satırları temizleyip dosya boyutunu küçültmek. PostgreSQL VACUUM ANALYZE komutunu koşturur; önceki ve sonraki boyut farkını ekranda özetler. Ayda bir veya yoğun veri silme/güncelleme işlemlerinin ardından. Sistem Yöneticisi İndeksleri Yenile (REINDEX) Bakım Araçları Butonu Bozulan veya şişen arama indekslerini baştan inşa ederek hızı artırmak. REINDEX SCHEMA public komutuyla tüm indeksler kilitlenmeden yeniden oluşturulur. Arama ve sorgularda yavaşlama hissedildiğinde. Sistem Yöneticisi Sistem Tanısı & Otomatik Onarım Bakım Araçları Butonu Şema tutarsızlıklarını, yetim kayıtları ve form hatalarını tespit edip düzeltmek. Sihirbaz 5 anomaliyi tarar; [Otomatik Düzelt] ile yetim nöbet kayıtları ve ad boşlukları tek tıkla onarılır. Dönem sonlarında veya veri tutarsızlığı şüphesinde. Süper Yönetici (Sudo) Veritabanını Sıfırla Tehlikeli Bölge İşlem kayıtlarını temizleyip sistemi fabrika ayarlarına döndürmek. Kutuya büyük harflerle \"SIFIRLA\" yazılır + Sudo şifresi girilir. 48 hareket tablosu silinir; tanımlar, ayarlar ve admin korunur. Kurum devrinde, test sonu veya sıfır yıl başlangıcında. Yalnızca Root/Admin (Sudo) Tarihsel Sistem Günlükleri Log Merkezi (1. Sekme) Uygulama, senkronizasyon ve hata loglarını canlı okuyup incelemek. Dosya seçilir; arama, seviye (INFO/WARNING/ERROR) ve tarih filtresi uygulanarak renklendirilmiş kayıtlar izlenir. Teknik arıza incelemelerinde veya denetim kontrollerinde. Sistem Yöneticisi Kullanıcı Etkileşim Günlüğü Log Merkezi (2. Sekme) Kullanıcıların ekranda tıkladığı butonları, girdiği metinleri ve sonuçları görmek. Oturum ve işlem türü bazlı filtrelenir; çift tıkla ham veri modalı açılır. Son oturum hariç temizlenebilir. Kullanıcı takılmalarında ve kök neden analizinde. Sistem Yöneticisi KVKK Kriptografik Denetim İzi Log Merkezi (3. Sekme) Yasal denetim kayıtlarının dışarıdan değiştirilmediğini ispatlamak. Her kaydın SHA-256 hash zinciri doğrulanır. Tahrifat varsa kırmızı ikaz; sağlamsa yeşil rozet verir. Resmi KVKK ve Sağlık Bakanlığı denetimlerinde. Sistem Yöneticisi / Denetçi Beklenmeyen Ha"
  },
  {
    "id": "04_veritabani_bakim_ve_guvenlik#quick-recipe",
    "title": "Hızlı Reçete: Şifreli Yedekleme ve Motor Optimizasyonu — Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "04_veritabani_bakim_ve_guvenlik.html#quick-recipe",
    "summary": "Hızlı Reçete: Şifreli Yedekleme ve Motor Optimizasyonu Veri kaybı riskini sıfırlayın ve veritabanı sorgu performansını 30 saniyede optimize edin 1. İstenen Sonuç Verilerin tam dökümünü güvenli şifrelemeyle arşivlemek ve ",
    "headings": [
      "Hızlı Reçete: Şifreli Yedekleme ve Motor Optimizasyonu",
      "Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği"
    ],
    "content": "Hızlı Reçete: Şifreli Yedekleme ve Motor Optimizasyonu Veri kaybı riskini sıfırlayın ve veritabanı sorgu performansını 30 saniyede optimize edin 1. İstenen Sonuç Verilerin tam dökümünü güvenli şifrelemeyle arşivlemek ve veritabanı ölü satırlarını temizlemek. 2. Yapılacak İşlem [Veritabanı Bakım] ekranında [Veritabanı Yedekle] ve [Dosyaları Yedekle] butonlarına basın; olası format/sunucu değişimi için [Güvenlik Anahtarı] kartını harici ortama aktarın; ardından [Boyut Optimize Et (VACUUM)] aracını çalıştırın. 3. Sistem Etkisi Veritabanı 256-bit AES ile şifrelenip zaman damgasıyla saklanır; PostgreSQL motoru ölü satırları temizleyip disk alanını geri kazandırır. Kriptografi 256-bit AES/PBKDF2 Yetkili Rol Yalnızca Admin ️ Emniyet Kilidi Sudo Şifre Onayı ️ Platform Yalnızca Masaüstü"
  },
  {
    "id": "04_veritabani_bakim_ve_guvenlik#table-5w1h",
    "title": "5N1K Kural ve Fonksiyon Tablosu — Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "04_veritabani_bakim_ve_guvenlik.html#table-5w1h",
    "summary": "5N1K Kural ve Fonksiyon Tablosu Veritabanı yedekleme, geri yükleme, motor optimizasyonu ve denetim araçlarının çalışma mantığı. NE? (Ekran Kontrolü) NEDEN? (Kullanım Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Hangi Durum",
    "headings": [
      "5N1K Kural ve Fonksiyon Tablosu",
      "Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği"
    ],
    "content": "5N1K Kural ve Fonksiyon Tablosu Veritabanı yedekleme, geri yükleme, motor optimizasyonu ve denetim araçlarının çalışma mantığı. NE? (Ekran Kontrolü) NEDEN? (Kullanım Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Hangi Durumda) KİM? (Yetkili Kitle) Veritabanı Yedekle Sol Üst Buton Tüm klinik, nöbet, izin ve dozimetre kayıtlarının anlık tam yedeğini almak. PostgreSQL dökümü alınır; 256-bit PBKDF2/AES ile şifrelenip zaman damgasıyla .dump dosyası üretilir. Düzenli periyotlarla veya büyük veri girişi/güncelleme öncesinde. Sistem Yöneticisi Dosyaları Yedekle Sol Üst Buton Yüklenen personel evrakları, sertifikalar ve cihaz dokümanlarını arşivlemek. Yüklü dosyalar klasörü zip paketi haline getirilir ve 256-bit anahtarla şifrelenerek .zip olarak saklanır. Belge kasası arşivlenmek istendiğinde. Sistem Yöneticisi Güvenlik Anahtarı (Kurtarma Kartı & Cihaz Donanım Anahtarı) Sol Üst Buton Format veya yeni sunucu kurulumu sonrasında şifreli yedeklerin açılabilmesi için afet kurtarma anahtarını güvenli harici ortama aktarmak ve donanımsal kurtarma anahtarını denetlemek. Sudo şifresi doğrulanır. 32 karakterlik AES-256 güvenlik anahtarı ve sunucunun Cihaz Kimliği (Machine ID) görüntülenir. Anahtar panoya kopyalanabilir, [Kurtarma Dosyası Kaydet (.txt)] butonuyla harici ortama yazılabilir veya tek tıkla donanım kimliğiyle eşitlenebilir. İlk sistem kurulumunda, felaket kurtarma tatbikatında ve harici diske yedek kopyalanırken. Süper Yönetici (Sudo) Yedeği Geri Yükle (Yükle) Tablo Aksiyon Butonu Veri kaybı, sistem çökmesi veya arıza anında sistemi geçmiş bir tarihe döndürmek. Kritik uyarı onaylanır ve Sudo şifresi girilir. Sistem anahtarı yerel kasadan, harici diskten ( radpys_yedek_kurtarma_anahtari.txt ) veya geçmiş anahtar arşivinden otomatik tarar; bulunamazsa Güvenlik Anahtarı modalı açılır. Anahtar elle girilebilir, dosyadan seçilebilir veya [Cihaz Kimliğiyle Çözmeyi Dene] ile donanım afet anahtarı tek tıkla test edilir. Dosya çözülüp veritabanına basılır; sayaçlar eşitlenir. Felaket kurtarma, format sonrası geri yükleme veya hatalı toplu işlem sonrası. Süper Yönetici (Sudo) Yedeği Dışa Aktar Tablo Aksiyon Butonu Yedek dosyasını harici diske veya USB belleğe aktarmak. Kullanıcının seçtiği konuma dosya yöneticisiyle güvenli kopya çıkarır. Harici lokasyonda çevrimdışı arşivleme yapılırken. Sistem Yöneticisi Yedeği Kalıcı Olarak Silme Tablo Aksiyon Butonu Eski ve gereksiz yedekleri diskten temizleyerek alan açmak. Silme onayı + Sudo doğrulaması sonrasında dosya diskten geri d"
  },
  {
    "id": "04_veritabani_bakim_ve_guvenlik#myth-buster",
    "title": "Saha Mit Avcısı: \"Veritabanını Sıfırlarsam Her Şey Silinir mi?\" — Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "04_veritabani_bakim_ve_guvenlik.html#myth-buster",
    "summary": "Saha Mit Avcısı: \"Veritabanını Sıfırlarsam Her Şey Silinir mi?\" En Sık Yapılan Yönetici Yanılgısı Yanlış İnanış: \"Veritabanını Sıfırla butonuna basarsam hastane departmanlarım, unvanlarım, tatil takvimim ve admin şifrem ",
    "headings": [
      "Saha Mit Avcısı: \"Veritabanını Sıfırlarsam Her Şey Silinir mi?\"",
      "Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği"
    ],
    "content": "Saha Mit Avcısı: \"Veritabanını Sıfırlarsam Her Şey Silinir mi?\" En Sık Yapılan Yönetici Yanılgısı Yanlış İnanış: \"Veritabanını Sıfırla butonuna basarsam hastane departmanlarım, unvanlarım, tatil takvimim ve admin şifrem de silinir; programı ilk günkü gibi baştan kurup ayarları yeniden girmem gerekir.\" Doğru Gerçek: HAYIR. RADPYS mimarisi referans tanımları ile operasyonel hareketleri birbirinden kesin olarak ayırmıştır. Sıfırlama işlemi yalnızca hareket tablolarını (personeller, nöbet çizelgeleri, izinler, dozimetre ölçümleri, arızalar) temizler. Departmanlar, Unvanlar, Resmi Tatiller, Program Ayarları, Sistem Rolleri, Yetki Şablonları ve `Admin` hesabı mutlak koruma altındadır ; sistem sıfır işlem verisiyle ancak eksiksiz kurumsal yapısıyla anında kullanıma hazır kalır."
  },
  {
    "id": "04_veritabani_bakim_ve_guvenlik#workflow",
    "title": "Güvenli Bakım ve Felaket Kurtarma Akış Şeması — Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "04_veritabani_bakim_ve_guvenlik.html#workflow",
    "summary": "Güvenli Bakım ve Felaket Kurtarma Akış Şeması Yedekleme, geri yükleme ve fabrika ayarlarına sıfırlama işlemlerinin güvenlik aşamaları. graph TD A([\"Yönetici İşlem Başlatır\"]) --> B{\"Hangi İşlem Seçildi?\"} %% Yedekleme Ak",
    "headings": [
      "Güvenli Bakım ve Felaket Kurtarma Akış Şeması",
      "Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği"
    ],
    "content": "Güvenli Bakım ve Felaket Kurtarma Akış Şeması Yedekleme, geri yükleme ve fabrika ayarlarına sıfırlama işlemlerinin güvenlik aşamaları. graph TD A([\"Yönetici İşlem Başlatır\"]) --> B{\"Hangi İşlem Seçildi?\"} %% Yedekleme Akışı B -->|\"Veritabanı / Dosya Yedekle\"| C[\"Arka Plan İş Parçacığı Başlatılır\"] C --> D[\"pg_dump / uploads Klasörü Paketlenir\"] D --> E[\"256-bit PBKDF2 + AES Şifreleme Uygulanır\"] E --> F[(\"data/backups/ Dizini\")] F --> G[\"Tablo Güncellenir & Başarı Bildirimi\"] %% Geri Yükleme Akışı B -->|\"Yedeği Geri Yükle\"| H[\"Kritik Veri Kaybı Uyarısı Verilir\"] H --> I{\"Kullanıcı Onayladı mı?\"} I -->|Hayır| J[\"İşlem İptal Edilir\"] I -->|Evet| K[\"Sudo Modu: Yönetici Şifresi Doğrulanır\"] K --> L1{\"Anahtar Sistemde / Harici Medyada Var mı?\"} L1 -->|Evet / Otomatik Eşleşti| L2[\"Yedek Dosyası 256-bit Anahtarla Çözülür\"] L1 -->|Hayır / Format Sonrası| L3[\"Güvenlik Anahtarı Giriş Modalı Açılır\"] L3 --> L4{\"Anahtar Doğrulandı mı?\"} L4 -->|İptal / Hatalı| J L4 -->|Başarılı| L2 L2 --> M[\"pg_restore / uploads Klasörüne Basılır\"] M --> N[\"Sequence Sayaçları Senkronize Edilir\"] N --> O([\"Programı Kapatıp Açınız Uyarısı\"]) %% Motor Bakım Akışı B -->|\"VACUUM / REINDEX\"| P[\"PostgreSQL Motoruna Bakım Emri Gönderilir\"] P --> Q[\"Ölü Satırlar Temizlenir / İndeksler Baştan Kurulur\"] Q --> R[\"Boyut Kazanımı ve Başarı Raporlanır\"] %% Sıfırlama Akışı B -->|\"Veritabanını Sıfırla\"| S[\"Admin Rolü Kontrolü Yapılır\"] S --> T[\"Kutuya BÜYÜK HARFLERLE 'SIFIRLA' Yazılır\"] T --> U[\"Sudo Modu: Yönetici Şifresi İstenir\"] U --> V[\"48 İşlem Tablosuna TRUNCATE CASCADE Uygulanır\"] V --> W[\"Tanımlar, Roller, Ayarlar ve Admin Hesabı Korunur\"] W --> X([\"Sıfır Kurulum Durumuna Dönüldü\"]) style A fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff style B fill:#f8fafc,stroke:#94a3b8,stroke-width:1.5px,color:#0f172a style G fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff style O fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff style X fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff"
  },
  {
    "id": "04_veritabani_bakim_ve_guvenlik#screenshots",
    "title": "️ Arayüz Ekran Görünümleri — Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "04_veritabani_bakim_ve_guvenlik.html#screenshots",
    "summary": "️ Arayüz Ekran Görünümleri Masaüstü Veritabanı Bakım ve Birleşik Log Merkezi pencerelerinin kontrol panelleri. ️ Ekran Konumu: Sol Menü > Veritabanı Bakım Yedekler & Motor Bakım Araçları Yasal Bilgilendirme: Bu görseldek",
    "headings": [
      "️ Arayüz Ekran Görünümleri",
      "Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği"
    ],
    "content": "️ Arayüz Ekran Görünümleri Masaüstü Veritabanı Bakım ve Birleşik Log Merkezi pencerelerinin kontrol panelleri. ️ Ekran Konumu: Sol Menü > Veritabanı Bakım Yedekler & Motor Bakım Araçları Yasal Bilgilendirme: Bu görseldeki yedek dosya isimleri, boyutlar ve tarihler tamamen test ortamında üretilmiş sentetik veridir. ️ Ekran Konumu: Sol Menü > Log Kayıtları Tarihsel Sistem Günlükleri & Denetim İzi Yasal Bilgilendirme: Bu görseldeki log satırları ve oturum detayları simülasyon amacıyla üretilmiş sentetik test kayıtlarıdır."
  },
  {
    "id": "04_veritabani_bakim_ve_guvenlik#step-by-step",
    "title": "Adım Adım Operasyon Rehberi — Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "04_veritabani_bakim_ve_guvenlik.html#step-by-step",
    "summary": "Adım Adım Operasyon Rehberi Yedekleme, geri yükleme, motor bakımı ve sıfırlama işlemlerinin eksiksiz adımları. 1 Şifreli Veritabanı ve Evrak Yedeği Alma Sol menüden [Veritabanı Bakım] ekranına girin. Pencerenin sol üstün",
    "headings": [
      "Adım Adım Operasyon Rehberi",
      "Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği"
    ],
    "content": "Adım Adım Operasyon Rehberi Yedekleme, geri yükleme, motor bakımı ve sıfırlama işlemlerinin eksiksiz adımları. 1 Şifreli Veritabanı ve Evrak Yedeği Alma Sol menüden [Veritabanı Bakım] ekranına girin. Pencerenin sol üstündeki [Veritabanı Yedekle] butonuna basın. Arka planda PostgreSQL dökümü alınıp 256-bit AES ile şifrelenecek ve data/backups/ klasörüne .dump dosyası olarak kaydedilecektir. Yüklü personel evraklarını ve taranmış belgeleri de arşivlemek için yanındaki [Dosyaları Yedekle] butonuna tıklayın. Olası format veya sunucu değişikliğinde yedeği açabilmek için [Güvenlik Anahtarı] butonuna basıp Sudo doğrulamasıyla kurtarma anahtarınızı harici diskinize mutlaka kaydedin. 2 Eski Bir Yedeği Geri Yükleme (Felaket Kurtarma) Tablodan dönmek istediğiniz tarihli yedeği bulun ve en sağdaki [Yükle] butonuna basın. Ekrana gelen kritik uyarı penceresinde [Evet] 'e tıklayın ve Sistem Yöneticisi şifrenizi ( Sudo Doğrulaması ) girin. Sistem yedek anahtarını yerel kasadan, harici diskten veya geçmiş anahtar arşivinden otomatik arar. Bilgisayarınıza format atılmış veya sistem yeni kurulmuşsa ekrana gelen Yedek Şifreleme Anahtarı Gerekli modalına 32 karakterlik anahtarınızı girin, [Dosyadan Seç] ile harici diskinizdeki kurtarma kartını ( radpys_yedek_kurtarma_anahtari.txt ) seçin ya da [Cihaz Kimliğiyle Çözmeyi Dene] butonuna tıklayarak donanım afet kurtarma anahtarını anında test edin. Geri yükleme tamamlandıktan sonra uygulamayı kapatıp yeniden başlatın . 3 PostgreSQL VACUUM ve REINDEX Motor Bakımı Sağ taraftaki [Sistem Bakım Araçları] kartına gidin. Silinen satırların bıraktığı boş alanları motora geri kazandırmak için [Boyut Optimize Et (VACUUM)] butonuna basın. İşlem bitince önceki ve yeni boyut farkını gösteren bilgi kutusunu onaylayın. Arama indekslerini hızlandırmak için [İndeksleri Yenile (REINDEX)] butonuna tıklayarak indekslerin baştan kurulmasını sağlayın. 4 Sistem Tanısı ve Otomatik Onarım Sihirbazı Bakım panelindeki [Sistem Tanısı ve Bütünlük Kontrolü] butonuna tıklayın. Açılan sihirbaz şemadaki yetim nöbet kayıtlarını, hatalı izin tarihlerini ve trim edilmemiş isim boşluklarını tarar. Sarı anomali ikazı varsa üstteki [Otomatik Düzelt & Onar] butonuna basıp Sudo şifrenizi girin. Sistem hataları saniyeler içinde şema düzeyinde onaracaktır. 5 Tehlikeli Bölge — 3 Kademeli Fabrika Ayarlarına Sıfırlama Sağ alttaki kırmızı [Tehlikeli Bölge] alanında bulunan [Veritabanını Sıfırla (Verileri Temizle)] butonuna basın. Açılan kutuya tam olarak büyük harflerle SIFIRL"
  },
  {
    "id": "04_veritabani_bakim_ve_guvenlik#faq",
    "title": "Sıkça Sorulan Sorular (SSS) — Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği",
    "category": "1. Sistem, Kurulum & Güvenlik › Bölüm",
    "url": "04_veritabani_bakim_ve_guvenlik.html#faq",
    "summary": "Sıkça Sorulan Sorular (SSS) Veritabanı güvenliği, şifreleme ve motor bakımı hakkında en çok merak edilen sorular. Alınan bir yedeği başka bir sunucuya veya yeni bilgisayara taşıyıp yükleyebilir miyim? ▼ Evet. Yedek dosya",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "Veritabanı Bakım, Kriptografik Yedekleme & Sistem Güvenliği"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) Veritabanı güvenliği, şifreleme ve motor bakımı hakkında en çok merak edilen sorular. Alınan bir yedeği başka bir sunucuya veya yeni bilgisayara taşıyıp yükleyebilir miyim? ▼ Evet. Yedek dosyası 256-bit AES ile şifrelendiğinden geri yükleme sırasında güvenlik anahtarı doğrulanır. Yedekle birlikte harici diske aldığınız kurtarma kartını ( radpys_yedek_kurtarma_anahtari.txt ) seçebilir, anahtarınızı elle girebilir veya sistemin donanım bazlı afet kurtarma güvencesi sayesinde Cihaz Kimliği (Machine ID) üzerinden kurtarma gerçekleştirebilirsiniz. Anahtar doğrulandıktan sonra veritabanı anında geri yüklenir. VACUUM ve REINDEX işlemlerini ne sıklıkla çalıştırmalıyım? ▼ Hastanelerdeki yoğun veri trafiğine bağlı olarak, [Boyut Optimize Et (VACUUM)] işleminin ayda bir kez veya toplu personel içe aktarımı/silme sonrasında çalıştırılması önerilir. [İndeksleri Yenile (REINDEX)] ise arama ve rapor filtrelerinde gözle görülür bir yavaşlama hissedildiğinde veya her 3-6 ayda bir rutin bakım olarak yapılmalıdır. Her iki işlem de arka planda güvenle yürütülür. Yedek geri yüklendikten sonra neden programı kapatıp açmam gerekiyor? ▼ PostgreSQL geri yükleme işlemi veritabanı tablolarını ve otomatik artan ID sayaçlarını (sequence) eski duruma döndürür. Ancak masaüstü uygulamasının belleğinde (RAM) halihazırda açık olan sekmeler ve oturum önbellekleri eski verileri tutmaya devam edebilir. Arayüzün yeni veritabanı durumuyla %100 senkronize çalışabilmesi için programın yeniden başlatılması zorunludur. Yanlışlıkla 'Veritabanını Sıfırla' butonuna basarsam geri dönüşü var mıdır? ▼ Yanlışlıkla basılması 3 kademeli emniyet kilidiyle engellenmiştir (Yalnızca Admin yetkisi, büyük harfle \"SIFIRLA\" yazma şartı ve yönetici şifre doğrulaması). Ancak bu 3 adımı da tamamlayıp veritabanını sıfırladıysanız, tek geri dönüş yolu sıfırlamadan hemen önce aldığınız bir yedeği [Yükle] butonuyla geri yüklemektir. Bu nedenle her sıfırlama öncesinde otomatik veya manuel yedek alınması şarttır. Beklenmeyen hata (Crash) penceresi çıktığında üzerinde çalıştığım veriler kaybolur mu? ▼ RADPYS'nin global istisna yakalayıcısı (CrashDialog), işletim sisteminin programı zorla kapatmasını (Crash/Terminate) engeller. Hata penceresi çıktığında veritabanı bağlantısı açık kalır ve o ana kadar veritabanına kaydedilmiş tüm verileriniz güvendedir. Yalnızca form üzerinde yazıp henüz [Kaydet] butonuna basmadığınız alanlar etkilenebilir. Hata dökümünü e-posta ile iletip pencereyi kapattıktan sonr"
  },
  {
    "id": "05_personel_yonetimi_ve_toplu_aktarim",
    "title": "Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım",
    "category": "2. İnsan Kaynakları & İzin",
    "url": "05_personel_yonetimi_ve_toplu_aktarim.html",
    "summary": "Radyasyonla çalışan personelin özlük, lisans, unvan, görev yeri, radyasyon çalışma grubu (A/B), lisans kotası, sağlık muayeneleri, zimmetli koruyucu ekipman (RKE), gebe/emzirme kalkanı ve 30 yıllık yasal KVKK arşiv yönetim rehberi.",
    "headings": [
      "Hızlı Reçete: Personel Yaşam Döngüsü ve Yasal Uyum",
      "5N1K Kural ve Fonksiyon Tablosu",
      "Saha Mit Avcısı: \"İşten Ayrılan Personeli Silersek Doz ve Sağlık Kayıtları Yok Olur mu?\"",
      "Personel Yaşam Döngüsü ve Mevzuat Akış Şeması",
      "️ Arayüz Ekran Görünümleri",
      "Adım Adım İşlem Rehberi",
      "Yeni Personel Kaydı Açma ve Lisans Kotası Doğrulama",
      "Personel Detaylarını Güncelleme ve Doz / Sağlık Takibi",
      "Gebe ve Emziren Personel Koruma Protokolünün Devreye Alınması",
      "İşten Ayrılış, Zimmet İadesi ve 30 Yıllık KVKK Arşiv Paketi",
      "5 Adımlı Evrensel İçe Aktarım Sihirbazı ile Toplu Veri Yükleme",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 2: Personel & İzin 05. Personel & Excel Aktarım Modül 05 NDK & EURATOM 30 Yıl Saklama Lisans Kotası Korumalı Gebe/Emzirme Otomasyonu Tahmini Okuma: 5 Dakika | Sürüm: RADPYS v4.2 Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım Radyasyonla çalışan personelin özlük, lisans, unvan, görev yeri, radyasyon çalışma grubu (A/B), lisans kotası, sağlık muayeneleri, zimmetli koruyucu ekipman (RKE), gebe/emzirme kalkanı ve 30 yıllık yasal KVKK arşiv yönetim rehberi. Hızlı Reçete: Personel Yaşam Döngüsü ve Yasal Uyum Personel ekleme, lisans kotası denetimi, gebe koruması ve ayrılışta 30 yıllık KVKK arşivleme süreci 1. İstenen Sonuç Radyasyon çalışanlarını kurum lisans kotası dahilinde kaydetmek, sağlık ve dozimetrik geçmişlerini kesintisiz yönetmek. 2. Yapılacak İşlem [Yeni Personel Ekle] ile kayıt açın, gebe/emzirme durumunu bildirin, ayrılışta zimmetleri kapatıp `kvkk_arsiv_{tc}.zip` paketini oluşturun. 3. Sistem Etkisi Kota aşımı engellenir; gebe personelin nöbeti sıfırlanıp dozu 1 mSv'e kilitlenir; ayrılan personelin yasal kayıtları 30 yıl saklanmak üzere şifrelenir. Yasal Saklama 30 Yıl (NDK/İSG) Lisans Denetimi Aktif Kota Kontrolü ️ Koruma Kalkanı Gebe & Emzirme Platform Hibrit: Desktop & Web 5N1K Kural ve Fonksiyon Tablosu Personel yönetimi, lisans denetimi, arama filtreleri ve toplu aktarım araçlarının işleyişi. NE? (Ekran Kontrolü) NEDEN? (Kullanım Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Hangi Durumda) KİM? (Yetkili Kitle) Metin Arama (txtSearch) Üst Filtre Çubuğu Yüzlerce çalışan arasından hedeflenen personele anında ulaşmak. Ad, Soyad, TC Kimlik No, Sicil No ve E-posta alanlarında harf girildikçe textChanged sinyaliyle dinamik filtreleme yapar. Personel sorgulama ve işlem öncesinde. Tüm Kullanıcılar Durum Filtresi (cmbDurumFilter) Üst Filtre Çubuğu Aktif çalışanlar ile işten ayrılmış eski personeli ayırmak. \"Tümü\", \"Aktif Çalışanlar\" ve \"Ayrılmış / Pasif\" seçeneklerine göre SQL sorgusunu filtreler. Rutin işlemlerde aktifleri, denetimlerde eski personelleri incelerken. Tüm Kullanıcılar Yeni Personel Ekle Üst Sol Buton Kuruma yeni başlayan personeli yasal kotalar dahilinde sisteme dahil etmek. Lisans kotası denetlenir; MERNIS algoritmasıyla TC kontrol edilir; rol izinlerine göre onay kuyruğuna yönlendirilir. İşe yeni personel alımlarında. Admin / İK / RGS Personel Detay Kartı Satır Çift Tık / Düzenle Personelin tüm özlük, sağlık, zimmet ve doz geçmişini tek ekranda incelemek. Sekmeli diyalog penceresi açılır: Özlük Bilgileri, İletişim, Sağlık & Muayeneler, Zimmetli RKE ve Dozimetreler listelenir. Bilgi güncelleme, zimmet takibi ve sağlık kontrolünde. Yetkili Kullanıcılar Kullanıcı Hesabı Oluşturma Yeni Personel Formu Personelin masaüstü veya web portalına giriş yapabilmesini sağlamak. Kutucuk seçildiğinde kullanıcı adı ve rolü belirlenir; user_service ile personelle eşleşen giriş hesabı açılır. Personel sisteme kendi oturumuyla girecekse. Sistem Yöneticisi Gebe / Emzirme Kalkanı Sağlık & Koruma Sekmesi Mevzuat gereği anne ve bebeği radyasyon riskinden tam korumaya almak. Etkin doz eşiği 1 mSv'e kilitlenir; gece nöbetleri sıfırlanır, fazla mesai engellenir; doğumdan sonra 1 yıl emzirme muafiyeti sürer. Gebelik bildirimi veya doğum sonrası emzirme döneminde. RGS / Hekim / Admin İlişik Kes / Arşivle Personel İşlem Menüsü Ayrılan personelin zimmetlerini kapatıp lisans kotasını serbest bırakmak. Zimmetli RKE ve aktif dozimetreler denetlenir; ilişik kesilir; kvkk_arsiv_{tc}.zip paketi oluşturulup personel pasife alınır. İşten ayrılma, tayin veya emeklilik durumunda. Admin / RGS Dışa Aktar (Rapor & Excel / PDF / Word) Tablo Araçları Personel listesini denetim, raporlama veya yedek amacıyla filtrelenmiş resmi döküm olarak bilgisayara almak. Ekrandaki aktif filtreleri (Aktif/Pasif, Birim, Arama) devralarak doğrudan şablonun varsayılan formatında tek tıkla kaydeder veya Rapor Merkezini açar. Tüm onay pencereleri standart Türkçe [Tamam / İptal] butonlarıyla çalışır. Resmi raporlama, denetim ve yönetim sunumlarında. Tüm Kullanıcılar 5 Adımlı Evrensel Toplu İçe Aktarım Sihirbazı [Toplu İşlemler] Menüsü & [Excel İçe Aktar] Onlarca veya yüzlerce personeli, izin hakedişlerini, cihaz ve RKE envanterini tek tek girmek yerine Excel/CSV dosyalarından akıllı doğrulama ile sisteme yüklemek. 5 aşamalı akış işletilir: 1. Dosya Seçimi & Çift Sayfalı Şablon İndirme, 2. Otomatik Sütun Eşleştirme, 3. Dinamik Değer Sözlüğü (Lookup) Çözümleme, 4. Önizleme & Kapsamlı Dry-Run Doğrulama (Geçerli/Uyarı/Hata sekmeleri), 5. Asenkron Arka Plan Aktarımı (Ekran donmaz, şifre dökümü ve hatalı satırların Excel raporu sunulur). İlk sistem kurulumunda, toplu alımlarda veya dönem başı veri yüklemelerinde. Sistem Yöneticisi Pencereyi Kapat Başlık Çubuğu & [Kapat] Butonu Personel listesi modülünden çıkıp ana ekrana dönmek. Açık alt pencereler güvenle kapatılır ve sistem kaynakları serbest bırakılır. İşlem tamamlandığında. Tüm Kullanıcılar Saha Mit Avcısı: \"İşten Ayrılan Personeli Silersek Doz ve Sağlık Kayıtları Yok Olur mu?\" En Sık Karşılaşılan Yasal Yanılgı Yanlış İnanış: \"İşten çıkan personeli silersek veritabanından tamamen uçar, geçmiş doz kayıtları ve sağlık raporları kaybolur; lisans kotasından düşsün diye kaydı silmemiz şarttır.\" Doğru Gerçek: KESİNLİKLE HAYIR. NDK Radyasyon Güvenliği Yönetmeliği, 6331 sayılı İSG Kanunu ve EURATOM direktifleri uyarınca radyasyon çalışanlarının tüm periyodik sağlık raporları ve dozimetrik geçmişi 30 yıl boyunca saklanmak zorundadır. RADPYS'de ayrılan personel veritabanından kalıcı olarak silinmez ; durumu \"Ayrıldı / Arşivlendi\" statüsüne alınarak lisans kotasından düşürülür. Ayrılış anında personelin tüm 30 yıllık geçmişini içeren şifreli `kvkk_arsiv_{tc}.zip` yasal paketi oluşturularak arşiv kasasında güvence altına alınır. Personel Yaşam Döngüsü ve Mevzuat Akış Şeması Personel kaydı, lisans kotası denetimi, gebe koruma kalkanı ve ilişik kesme adımları. graph TD A([\"Yeni Personel Kaydı Başlatılır\"]) --> B{\"Kuruluş Lisans Kotası Uygun mu?\"} %% Kota ve Kayıt Akışı "
  },
  {
    "id": "05_personel_yonetimi_ve_toplu_aktarim#quick-recipe",
    "title": "Hızlı Reçete: Personel Yaşam Döngüsü ve Yasal Uyum — Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "05_personel_yonetimi_ve_toplu_aktarim.html#quick-recipe",
    "summary": "Hızlı Reçete: Personel Yaşam Döngüsü ve Yasal Uyum Personel ekleme, lisans kotası denetimi, gebe koruması ve ayrılışta 30 yıllık KVKK arşivleme süreci 1. İstenen Sonuç Radyasyon çalışanlarını kurum lisans kotası dahilind",
    "headings": [
      "Hızlı Reçete: Personel Yaşam Döngüsü ve Yasal Uyum",
      "Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım"
    ],
    "content": "Hızlı Reçete: Personel Yaşam Döngüsü ve Yasal Uyum Personel ekleme, lisans kotası denetimi, gebe koruması ve ayrılışta 30 yıllık KVKK arşivleme süreci 1. İstenen Sonuç Radyasyon çalışanlarını kurum lisans kotası dahilinde kaydetmek, sağlık ve dozimetrik geçmişlerini kesintisiz yönetmek. 2. Yapılacak İşlem [Yeni Personel Ekle] ile kayıt açın, gebe/emzirme durumunu bildirin, ayrılışta zimmetleri kapatıp `kvkk_arsiv_{tc}.zip` paketini oluşturun. 3. Sistem Etkisi Kota aşımı engellenir; gebe personelin nöbeti sıfırlanıp dozu 1 mSv'e kilitlenir; ayrılan personelin yasal kayıtları 30 yıl saklanmak üzere şifrelenir. Yasal Saklama 30 Yıl (NDK/İSG) Lisans Denetimi Aktif Kota Kontrolü ️ Koruma Kalkanı Gebe & Emzirme Platform Hibrit: Desktop & Web"
  },
  {
    "id": "05_personel_yonetimi_ve_toplu_aktarim#table-5w1h",
    "title": "5N1K Kural ve Fonksiyon Tablosu — Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "05_personel_yonetimi_ve_toplu_aktarim.html#table-5w1h",
    "summary": "5N1K Kural ve Fonksiyon Tablosu Personel yönetimi, lisans denetimi, arama filtreleri ve toplu aktarım araçlarının işleyişi. NE? (Ekran Kontrolü) NEDEN? (Kullanım Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Hangi Durumda) ",
    "headings": [
      "5N1K Kural ve Fonksiyon Tablosu",
      "Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım"
    ],
    "content": "5N1K Kural ve Fonksiyon Tablosu Personel yönetimi, lisans denetimi, arama filtreleri ve toplu aktarım araçlarının işleyişi. NE? (Ekran Kontrolü) NEDEN? (Kullanım Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Hangi Durumda) KİM? (Yetkili Kitle) Metin Arama (txtSearch) Üst Filtre Çubuğu Yüzlerce çalışan arasından hedeflenen personele anında ulaşmak. Ad, Soyad, TC Kimlik No, Sicil No ve E-posta alanlarında harf girildikçe textChanged sinyaliyle dinamik filtreleme yapar. Personel sorgulama ve işlem öncesinde. Tüm Kullanıcılar Durum Filtresi (cmbDurumFilter) Üst Filtre Çubuğu Aktif çalışanlar ile işten ayrılmış eski personeli ayırmak. \"Tümü\", \"Aktif Çalışanlar\" ve \"Ayrılmış / Pasif\" seçeneklerine göre SQL sorgusunu filtreler. Rutin işlemlerde aktifleri, denetimlerde eski personelleri incelerken. Tüm Kullanıcılar Yeni Personel Ekle Üst Sol Buton Kuruma yeni başlayan personeli yasal kotalar dahilinde sisteme dahil etmek. Lisans kotası denetlenir; MERNIS algoritmasıyla TC kontrol edilir; rol izinlerine göre onay kuyruğuna yönlendirilir. İşe yeni personel alımlarında. Admin / İK / RGS Personel Detay Kartı Satır Çift Tık / Düzenle Personelin tüm özlük, sağlık, zimmet ve doz geçmişini tek ekranda incelemek. Sekmeli diyalog penceresi açılır: Özlük Bilgileri, İletişim, Sağlık & Muayeneler, Zimmetli RKE ve Dozimetreler listelenir. Bilgi güncelleme, zimmet takibi ve sağlık kontrolünde. Yetkili Kullanıcılar Kullanıcı Hesabı Oluşturma Yeni Personel Formu Personelin masaüstü veya web portalına giriş yapabilmesini sağlamak. Kutucuk seçildiğinde kullanıcı adı ve rolü belirlenir; user_service ile personelle eşleşen giriş hesabı açılır. Personel sisteme kendi oturumuyla girecekse. Sistem Yöneticisi Gebe / Emzirme Kalkanı Sağlık & Koruma Sekmesi Mevzuat gereği anne ve bebeği radyasyon riskinden tam korumaya almak. Etkin doz eşiği 1 mSv'e kilitlenir; gece nöbetleri sıfırlanır, fazla mesai engellenir; doğumdan sonra 1 yıl emzirme muafiyeti sürer. Gebelik bildirimi veya doğum sonrası emzirme döneminde. RGS / Hekim / Admin İlişik Kes / Arşivle Personel İşlem Menüsü Ayrılan personelin zimmetlerini kapatıp lisans kotasını serbest bırakmak. Zimmetli RKE ve aktif dozimetreler denetlenir; ilişik kesilir; kvkk_arsiv_{tc}.zip paketi oluşturulup personel pasife alınır. İşten ayrılma, tayin veya emeklilik durumunda. Admin / RGS Dışa Aktar (Rapor & Excel / PDF / Word) Tablo Araçları Personel listesini denetim, raporlama veya yedek amacıyla filtrelenmiş resmi döküm olarak bilgisayara almak. Ekran"
  },
  {
    "id": "05_personel_yonetimi_ve_toplu_aktarim#myth-buster",
    "title": "Saha Mit Avcısı: \"İşten Ayrılan Personeli Silersek Doz ve Sağlık Kayıtları Yok Olur mu?\" — Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "05_personel_yonetimi_ve_toplu_aktarim.html#myth-buster",
    "summary": "Saha Mit Avcısı: \"İşten Ayrılan Personeli Silersek Doz ve Sağlık Kayıtları Yok Olur mu?\" En Sık Karşılaşılan Yasal Yanılgı Yanlış İnanış: \"İşten çıkan personeli silersek veritabanından tamamen uçar, geçmiş doz kayıtları ",
    "headings": [
      "Saha Mit Avcısı: \"İşten Ayrılan Personeli Silersek Doz ve Sağlık Kayıtları Yok Olur mu?\"",
      "Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım"
    ],
    "content": "Saha Mit Avcısı: \"İşten Ayrılan Personeli Silersek Doz ve Sağlık Kayıtları Yok Olur mu?\" En Sık Karşılaşılan Yasal Yanılgı Yanlış İnanış: \"İşten çıkan personeli silersek veritabanından tamamen uçar, geçmiş doz kayıtları ve sağlık raporları kaybolur; lisans kotasından düşsün diye kaydı silmemiz şarttır.\" Doğru Gerçek: KESİNLİKLE HAYIR. NDK Radyasyon Güvenliği Yönetmeliği, 6331 sayılı İSG Kanunu ve EURATOM direktifleri uyarınca radyasyon çalışanlarının tüm periyodik sağlık raporları ve dozimetrik geçmişi 30 yıl boyunca saklanmak zorundadır. RADPYS'de ayrılan personel veritabanından kalıcı olarak silinmez ; durumu \"Ayrıldı / Arşivlendi\" statüsüne alınarak lisans kotasından düşürülür. Ayrılış anında personelin tüm 30 yıllık geçmişini içeren şifreli `kvkk_arsiv_{tc}.zip` yasal paketi oluşturularak arşiv kasasında güvence altına alınır."
  },
  {
    "id": "05_personel_yonetimi_ve_toplu_aktarim#workflow",
    "title": "Personel Yaşam Döngüsü ve Mevzuat Akış Şeması — Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "05_personel_yonetimi_ve_toplu_aktarim.html#workflow",
    "summary": "Personel Yaşam Döngüsü ve Mevzuat Akış Şeması Personel kaydı, lisans kotası denetimi, gebe koruma kalkanı ve ilişik kesme adımları. graph TD A([\"Yeni Personel Kaydı Başlatılır\"]) --> B{\"Kuruluş Lisans Kotası Uygun mu?\"} ",
    "headings": [
      "Personel Yaşam Döngüsü ve Mevzuat Akış Şeması",
      "Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım"
    ],
    "content": "Personel Yaşam Döngüsü ve Mevzuat Akış Şeması Personel kaydı, lisans kotası denetimi, gebe koruma kalkanı ve ilişik kesme adımları. graph TD A([\"Yeni Personel Kaydı Başlatılır\"]) --> B{\"Kuruluş Lisans Kotası Uygun mu?\"} %% Kota ve Kayıt Akışı B -->|\"Kota Dolu\"| C[\"Kota Aşımı Uyarısı: İşlem Engellenir\"] B -->|\"Kota Uygun\"| D[\"MERNIS Algoritması ile TC Doğrulanır\"] D --> E{\"Kullanıcı Rolü Onay Gerektiriyor mu?\"} E -->|Evet| F[\"RGS Onay Kuyruğuna Yönlendirilir\"] E -->|Hayır| G[\"Veritabanına Aktif Olarak Eklenir\"] F -->|Onaylandı| G G --> H{\"Sistem Giriş Hesabı Açılsın mı?\"} H -->|Evet| I[\"Otomatik Kullanıcı Hesabı & Şifre Eşlenir\"] H -->|Hayır| J[\"Yalnızca Özlük & Doz Takibi Yapılır\"] %% Gebe Koruma Akışı G --> K{\"Gebelik / Emzirme Bildirildi mi?\"} K -->|Evet| L[\"Gebe Koruma Kalkanı Devreye Girer\"] L --> M[\"Yıllık Doz Eşiği 1 mSv Olarak Kilitlenir\"] M --> N[\"Gece Nöbeti ve Fazla Mesai Sıfırlanır\"] N --> O[\"Doğum Sonrası 1 Yıl Emzirme Muafiyeti Uygulanır\"] %% Ayrılış ve Arşivleme Akışı G --> P([\"İlişik Kesme / Arşivleme İsteği\"]) P --> Q{\"Zimmetli RKE / Dozimetre Var mı?\"} Q -->|Var| R[\"İade Formu Oluşturulur & Teslim Alınır\"] Q -->|\"Yok / İade Edildi\"| S[\"Personel Statüsü: Ayrıldı Olarak Güncellenir\"] R --> S S --> T[\"Lisans Kotası Otomatik Serbest Bırakılır\"] T --> U[\"30 Yıllık kvkk_arsiv_tc.zip Paketi Üretilir\"] U --> V([\"Yasal Arşiv Kasasına Aktarıldı\"]) style A fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff style B fill:#f8fafc,stroke:#94a3b8,stroke-width:1.5px,color:#0f172a style C fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff style G fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff style L fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff style V fill:#0891b2,stroke:#0e7490,stroke-width:2px,color:#fff"
  },
  {
    "id": "05_personel_yonetimi_ve_toplu_aktarim#screenshots",
    "title": "️ Arayüz Ekran Görünümleri — Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "05_personel_yonetimi_ve_toplu_aktarim.html#screenshots",
    "summary": "️ Arayüz Ekran Görünümleri Personel Listesi, dinamik arama paneli ve detaylı personel kartı görünümleri. ️ Ekran Konumu: Sol Menü > Personel Yönetimi > Personel Listesi Arama, Filtreler & Sayaç Kartları Yasal Bilgilendir",
    "headings": [
      "️ Arayüz Ekran Görünümleri",
      "Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım"
    ],
    "content": "️ Arayüz Ekran Görünümleri Personel Listesi, dinamik arama paneli ve detaylı personel kartı görünümleri. ️ Ekran Konumu: Sol Menü > Personel Yönetimi > Personel Listesi Arama, Filtreler & Sayaç Kartları Yasal Bilgilendirme: Bu görseldeki personel isimleri, TC kimlik numaraları, unvanlar ve iletişim bilgileri tamamen test ortamında üretilmiş sentetik veridir. ️ Ekran Konumu: Personel Satırına Çift Tıkla > Personel Detay Kartı Özlük, Radyasyon Grubu, Zimmet & Sağlık Yasal Bilgilendirme: Bu görseldeki özlük verileri ve zimmet atamaları simülasyon amacıyla üretilmiş sentetik test kayıtlarıdır."
  },
  {
    "id": "05_personel_yonetimi_ve_toplu_aktarim#step-by-step",
    "title": "Adım Adım İşlem Rehberi — Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "05_personel_yonetimi_ve_toplu_aktarim.html#step-by-step",
    "summary": "Adım Adım İşlem Rehberi Saha operasyonlarında en sık kullanılan 5 ana işlemin uygulama adımları. 1 Yeni Personel Kaydı Açma ve Lisans Kotası Doğrulama Personel Listesi ekranının sol üst köşesindeki [Yeni Personel Ekle] b",
    "headings": [
      "Adım Adım İşlem Rehberi",
      "Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım"
    ],
    "content": "Adım Adım İşlem Rehberi Saha operasyonlarında en sık kullanılan 5 ana işlemin uygulama adımları. 1 Yeni Personel Kaydı Açma ve Lisans Kotası Doğrulama Personel Listesi ekranının sol üst köşesindeki [Yeni Personel Ekle] butonuna tıklayın. Sistem arka planda kurum lisansının aktif personel kotasını sorgular. Kota dolu ise ekranda bilgilendirme modalı açılır. Formdaki zorunlu alanları doldurun: TC Kimlik No: 11 haneli geçerli MERNIS algoritmasına uygun numara. Ad, Soyad ve Sicil No. Birim ve Görev / Unvan: Radyoloji, Nükleer Tıp veya Radyasyon Onkolojisi seçimi. Radyasyon Çalışma Grubu: Grup A (Aylık Dozimetre) veya Grup B (3 Aylık Dozimetre). Personelin programa kendi şifresiyle girmesi gerekiyorsa [Sistem Kullanıcı Hesabı Oluştur] kutusunu işaretleyip rolünü seçin. [Kaydet] butonuna basarak işlemi tamamlayın. Onay gerektiren bir roldeyseniz kayıt RGS onay kuyruğuna iletilecektir. 2 Personel Detaylarını Güncelleme ve Doz / Sağlık Takibi Tabloda aradığınız personelin satırına çift tıklayın veya satır sonundaki [Düzenle] butonuna basın. Açılan Personel Detay Kartı penceresinde ilgili sekmeye geçin: Özlük Bilgileri: İletişim, adres, kan grubu, acil durum irtibatı. Radyasyon Bilgileri: Grup A/B tercihi, TENMAK/NDK servis sağlayıcı kodu. Zimmetler: Üzerine kayıtlı kurşun önlük, tiroid koruyucu ve aktif dozimetreler. Sağlık Muayeneleri: İşe giriş ve periyodik hemogram/dermatoloji kontrol tarihleri. Güncellemeleri tamamladıktan sonra [Değişiklikleri Kaydet] butonuna basarak formu kapatın. 3 Gebe ve Emziren Personel Koruma Protokolünün Devreye Alınması İlgili kadın personelin detay kartını açarak [Sağlık & Koruma] sekmesine gelin. [Gebelik Durumu Bildirimi] kutusunu işaretleyin; hekim raporundaki gebelik başlangıç tarihini ve tahmini doğum tarihini girin. [Kaydet] butonuna bastığınız anda RADPYS güvenlik motoru: Personelin yıllık etkin doz eşiğini mevzuat uyarınca 1 mSv değerine sabitler. Nöbet planlama modülünde personelin gece vardiyası ve fazla mesai almasını otomatik olarak engeller. Radyasyon Güvenlik Sorumlusu (RGS) paneline anlık uyarı bildirimi gönderir. Doğum gerçekleştiğinde aynı sekmeden [Emzirme Durumu] seçilerek koruma süreci 1 yıl daha uzatılabilir. 4 İşten Ayrılış, Zimmet İadesi ve 30 Yıllık KVKK Arşiv Paketi İşten ayrılan personelin satır işlem menüsünden [İlişik Kes / Arşivle] butonuna basın. Sistem personelin zimmet dökümünü kontrol eder: Üzerinde zimmetli kurşun önlük, koruyucu gözlük vb. varsa sistem \"İade Edilmemiş RKE Bulunmaktadır\" uyarısı ver"
  },
  {
    "id": "05_personel_yonetimi_ve_toplu_aktarim#faq",
    "title": "Sıkça Sorulan Sorular (SSS) — Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "05_personel_yonetimi_ve_toplu_aktarim.html#faq",
    "summary": "Sıkça Sorulan Sorular (SSS) Personel yönetimi, lisans kotaları, gebelik muafiyeti ve arşivleme hakkında merak edilenler. Kuruluş lisans kotamız dolduğunda yeni personel ekleyebilir miyiz? ▾ Hayır. RADPYS lisans sözleşmen",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "Personel Yönetimi, Lisans Kotası & Toplu İçe Aktarım"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) Personel yönetimi, lisans kotaları, gebelik muafiyeti ve arşivleme hakkında merak edilenler. Kuruluş lisans kotamız dolduğunda yeni personel ekleyebilir miyiz? ▾ Hayır. RADPYS lisans sözleşmenizdeki aktif personel kotası aşıldığında sistem yeni personel kaydını engeller ve kota artırımı için yöneticinize bildirim yapmanızı önerir. Ancak işten ayrılan eski personellerin ilişiği kesilip arşivlendiğinde, boşalan kontenjan kadar yeni personel kaydı anında açılabilir. Personel TC Kimlik Numarası girildiğinde sistem neden hata veriyor? ▾ RADPYS, NDK ve Sağlık Bakanlığı resmi bildirimlerinde mükerrer veya sahte kayıt oluşmasını önlemek amacıyla MERNIS 11 haneli matematiksel algoritma kontrolü uygular. İlk hanesi 0 olan veya sağlama toplamı tutmayan TC kimlik numaraları sistem tarafından reddedilir. Ayrıca aynı TC numarası ile sistemde zaten aktif bir kayıt varsa mükerrer kayıt uyarısı verilir. Gebe personel doğum yaptıktan sonra koruma kalkanı devam eder mi? ▾ Evet. İlgili mevzuat uyarınca doğum sonrası emzirme döneminde de personelin radyoaktif kontaminasyon riski bulunan sahalarda çalışması ve gece nöbeti tutması kısıtlıdır. Personel detay kartındaki [Emzirme Durumu] seçeneği işaretlendiğinde koruma kalkanı doğum tarihinden itibaren tam 1 yıl boyunca otomatik olarak devrede kalmaya devam eder. İşten ayrılan personelin üzerinde zimmetli kurşun önlük kalırsa ne yapılmalıdır? ▾ Sistem, kurum demirbaşlarının kaybolmasını ve sahipsiz radyasyon koruyucu ekipman kalmasını önlemek için ilişik kesme anında zimmet denetimi yapar. Personel Detay Kartı > Zimmetler sekmesinden veya RKE Modülü üzerinden ilgili ekipman \"Depoya İade Edildi\" olarak işaretlenmeli, ardından personelin ilişik kesme ve arşivleme işlemi onaylanmalıdır. Web portalından eklenen personel masaüstü uygulamasında hemen görünür mü? ▾ Evet. Web portalı ile masaüstü uygulaması aynı merkezi PostgreSQL veritabanını paylaşır. Web portalından veya mobil arayüzden yapılan tüm personel ekleme, güncelleme ve ayrılış işlemleri masaüstü ekranındaki [Yenile] butonuna basıldığında veya tablo açıldığında anında eşzamanlı olarak yansır. Toplu personel Excel'i yüklerken dosyadaki departman veya unvan sistemde yoksa ne olur? ▾ RADPYS Evrensel İçe Aktarım Sihirbazı işlemi durdurmaz veya tüm dosyayı reddetmez. 3. Adımda (Dinamik Değer Çözümleme) sistemde eşleşmeyen her bir tanımsız değer için size seçenek sunar: İlgili değeri sistemdeki mevcut bir departman/unvanla eşleyebilir, yetkiniz dahilinde "
  },
  {
    "id": "06_izin_yonetimi_ve_hakedis",
    "title": "İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru",
    "category": "2. İnsan Kaynakları & İzin",
    "url": "06_izin_yonetimi_ve_hakedis.html",
    "summary": "Radyasyonla çalışan sağlık personelinin yasal Şua İzni (sağlık izni), yıllık izin, mazeret ve hastalık izinlerinin talebi, nöbet ve çakışma kontrolleri, yetkili onayı, bakiye düşümü, geçmiş yıl devir aktarımı ve EBYS/HBYS evrak entegrasyonu rehberi.",
    "headings": [
      "Hızlı Reçete: Radyasyon İzinleri ve Yasal Hakediş Süreci",
      "5N1K Kural ve Arayüz Çözümleme Tablosu",
      "Saha Mit Avcısı: \"Kullanılmayan Şua İzinleri Bir Sonraki Yıla Devreder mi ya da Paraya Çevrilebilir mi?\"",
      "İzin Talep, Çakışma Denetimi ve Onay Akış Şeması",
      "️ Arayüz Ekran Görünümleri",
      "Adım Adım İşlem Rehberi",
      "2 Adımlı Sihirbaz ile Yeni İzin Talebi Oluşturma",
      "İzin Taleplerini İnceleme, Onaylama ve Gerekçeli Reddetme",
      "Onaylı İzni Güvenle İptal Etme ve Bakiye İadesi",
      "İzin Hakedişlerini İnceleme ve Geçmiş Yıl Devri Aktarma",
      "Web Portalından İzin Talebi ve EBYS Evrak Numarası Eşleştirme",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 2: Personel & İzin 06. İzin Yönetimi & Şua Modül 06 Nükleer Şua Hakediş (RED-IZN-01) Nöbet Çakışma Kilidi (RED-IZN-02) EBYS/HBYS Entegrasyonu Tahmini Okuma: 6 Dakika | Sürüm: RADPYS v4.2 İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru Radyasyonla çalışan sağlık personelinin yasal Şua İzni (sağlık izni), yıllık izin, mazeret ve hastalık izinlerinin talebi, nöbet ve çakışma kontrolleri, yetkili onayı, bakiye düşümü, geçmiş yıl devir aktarımı ve EBYS/HBYS evrak entegrasyonu rehberi. Hızlı Reçete: Radyasyon İzinleri ve Yasal Hakediş Süreci Şua izni hak etme, nöbet kontrolü, yönetici onayı ile bakiye düşümü ve EBYS evrak kaydı 1. İstenen Sonuç Personelin hak ettiği izinleri mevzuata uygun kullandırmak, nöbet aksamalarını önlemek ve bakiye kayıplarını sıfırlamak. 2. Yapılacak İşlem [İzin Talep Et] sihirbazından personeli ve tarihleri seçin, yönetici ekranından onaylayın veya web portalından [EBYS Kaydet] ile resmiyete dökün. 3. Sistem Etkisi Nöbet çakışmaları engellenir, onay anında bakiye düşülür, iptal halinde bakiye iade edilir; şua izni 31 Aralık'ta devretmeksizin yanar. ️ Yasal Şua Tavanı 30 Gün / Yıl ⏱️ Hak Katsayısı 50 Saat = 1 Gün Devir Tavanı Max 5 Gün (Yıllık) Platform Masaüstü & Web 5N1K Kural ve Arayüz Çözümleme Tablosu İzin modülünde yer alan kontrollerin yasal dayanakları, çalışma mekanizmaları ve kullanıcı rolleri. NE? (Bileşen / Kontrol) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? İzin Tablosu & Arama Üst Filtre Çubuğu Departmandaki tüm izin hareketlerini ve onay durumlarını listelemek. 300 ms gecikmeli debounced arama ile ad, soyad, TC ve EBYS no taranır; durum ve izin türü filtrelenir. Rutin takip ve denetimlerde. Yönetici, Süpervizör, İK Yeni İzin Talebi [+ İzin Talep Et] 2 Adımlı Talep Sihirbazı Personel adına mevzuata uygun izin kaydı açmak. Adım 1'de personel seçilir ve anlık bakiye kartı açılır. Adım 2'de tarihler, tür, vekil ve açıklama girilir. İzin talebi oluştuğunda. Personel, Birim Amiri Şua İzni Hakedişi (Mevzuat Standardı) Yasal Hakediş Kuralı Radyasyon çalışanlarının kanuni sağlık iznini hesaplamak. Fiili çalışma süresine göre her 50 saatte 1 gün hesaplanır (tavan 30 gün). Cari yıl kazanımı takip eden yıl kullanılır; devretmez, 31 Aralık'ta yanar. Yıllık izin planlamasında. Radyasyon Çalışanları Çakışma & Nöbet Kilidi Otomatik Çakışma Denetimi Personelin nöbet gününde izne çıkmasını veya mükerrer izin almasını engellemek. Talep edilen tarihler personelin onaylı/bekleyen izniyle veya nöbet çizelgesindeki aktif göreviyle kesişiyorsa işlem durdurulur. İzin kaydetme anında. Sistem (Otomatik Kilit) İzin Onayla Üst Araç Çubuğu (Yeşil) Bekleyen talebi onaylayıp bakiyeyi güncellemek. İzin durumu 'Onaylandı' yapılır; personelin ilgili yıl için tanımlı kalan izninden gün sayısı anında düşülür. Amir incelemesinden sonra. Yönetici, Departman Sorumlusu İzin Reddet Üst Araç Çubuğu (Kırmızı) Uygun görülmeyen izin talebini gerekçeli sonlandırmak. Açılan diyalogda ret gerekçesi girilmesi zorunludur. Bakiye düşümü yapılmaz, durum 'Reddedildi' olarak arşivlenir. Hizmet aksaması durumunda. Yönetici, Süpervizör İzin İptali Üst Araç Çubuğu (Turuncu) Kullanılmayacak onaylı izni geri çekip hakkı iade etmek. İzin 'İptal Edildi' statüsüne çekilir; önceden düşülen izin günleri personelin bakiye havuzuna geri aktarılır. Görevin iptal edilmesinde. Yönetici, Süpervizör Devir Aktar & Yılı Kilitle [Devir Aktar & Yılını Kilitle Butonu] Yıllık izin devrini gerçekleştirmek, 12 aylık fiili hizmetten yeni yılın Şua İzni hakedişini kesinleştirmek ve kaynak yılı dondurmak. Kapanan yılın kalan yıllık izinlerini tavan sınırına (azami 5 gün) göre devreder. Kaynak yılın 12 aylık fiili radyasyon saatlerini tarayarak yeni yıl Şua İzni hakedişini (her 50 saate 1 gün, azami 30 gün) oluşturur ve kaynak yılı dondurur. Bu işlem yüzlerce personel için arka planda asenkron iş parçacığıyla yürütülür; arayüz donmaz, canlı ilerleme penceresi gösterilir ve tamamlandığında özet bildirim kartı sunulur. Yıl başında yeni yıl hakedişleri açılırken. Sistem Yöneticisi, İK Web Portalı EBYS Kaydı [EBYS Kaydet Formu] Resmi kurum evrak numarasını izin kaydına işlemek. İlk evrak no girişinde izin doğrudan 'Resmi Onaylı' statüsü kazanır. Sonradan değiştirilmek istenirse onay masasına düşer. Resmi yazı çıktığında. Personel, İdari İşler Toplu İzin & Hakediş İçe Aktar [Toplu İçe Aktar Butonu] Geçmiş yıllara ait izin hareketlerini veya yıllık izin hakedişlerini 2 sayfalı kurumsal Excel şablonuyla topluca sisteme yüklemek. Evrensel İçe Aktarım Sihirbazı ile hakediş veya geçmiş izin şablonu seçilir; izin türleri dinamik sözlükte çözümlenir; Dry-Run önizlemesinden sonra asenkron olarak güvenle kaydedilir. İlk kurulum aşamasında veya yıl başı toplu izin bakiye tanımlamalarında. İK / Sistem Yöneticisi Saha Mit Avcısı: \"Kullanılmayan Şua İzinleri Bir Sonraki Yıla Devreder mi ya da Paraya Çevrilebilir mi?\" En Yaygın Radyasyon Mevzuatı Yanılgısı Yanlış İnanış: \"Yoğunluktan ötürü bu yıl 30 günlük şua iznimi kullanamadım, seneye aktarılır 60 gün kullanırım veya kullanamadığım günlerin ücretini idareden talep edebilirim.\" Doğru Gerçek: KESİNLİKLE HAYIR. 3153 sayılı Kanun, Radyasyon Güvenliği Yönetmeliği ve Sağlık Bakanlığı içtihatları uyarınca Şua İzni (sağlık izni), personelin vücudundaki radyasyon biyolojik hasarını tolere etmek ve hücresel onarımı sağlamak amacıyla verilmiş kamu düzenine ilişkin bir dinlenme hakkıdır . Şua izni ertelenemez, takvim yılı (31 Aralık) bittiğinde zaman aşımına uğrayarak yanar , sonraki yıla devredilemez veya nakdi tazminata dönüştürülemez. RADPYS hakediş motoru bu nedenle şua izinlerini cari yılda kilitler ve yıl sonu devrine izin vermez. İzin Talep, Çakışma Denetimi ve Onay Akış Şeması Personel izin talebinden bakiye kontrolüne, nöbet çakışmasından EBYS evrak kaydına tam süreç döngüsü. graph TD A([\"İzin Talebi Başlatılır: Masaüstü / Web\"]) --> B{\"Tarihler Başka İzinle Çakışıyor mu?\"} %% Çakışma Denetimleri B -->|Evet| C[\"HATA: Çakışan İzin Bulundu - İşlem Durdurulur\"] B -->|Ha"
  },
  {
    "id": "06_izin_yonetimi_ve_hakedis#quick-recipe",
    "title": "Hızlı Reçete: Radyasyon İzinleri ve Yasal Hakediş Süreci — İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "06_izin_yonetimi_ve_hakedis.html#quick-recipe",
    "summary": "Hızlı Reçete: Radyasyon İzinleri ve Yasal Hakediş Süreci Şua izni hak etme, nöbet kontrolü, yönetici onayı ile bakiye düşümü ve EBYS evrak kaydı 1. İstenen Sonuç Personelin hak ettiği izinleri mevzuata uygun kullandırmak",
    "headings": [
      "Hızlı Reçete: Radyasyon İzinleri ve Yasal Hakediş Süreci",
      "İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru"
    ],
    "content": "Hızlı Reçete: Radyasyon İzinleri ve Yasal Hakediş Süreci Şua izni hak etme, nöbet kontrolü, yönetici onayı ile bakiye düşümü ve EBYS evrak kaydı 1. İstenen Sonuç Personelin hak ettiği izinleri mevzuata uygun kullandırmak, nöbet aksamalarını önlemek ve bakiye kayıplarını sıfırlamak. 2. Yapılacak İşlem [İzin Talep Et] sihirbazından personeli ve tarihleri seçin, yönetici ekranından onaylayın veya web portalından [EBYS Kaydet] ile resmiyete dökün. 3. Sistem Etkisi Nöbet çakışmaları engellenir, onay anında bakiye düşülür, iptal halinde bakiye iade edilir; şua izni 31 Aralık'ta devretmeksizin yanar. ️ Yasal Şua Tavanı 30 Gün / Yıl ⏱️ Hak Katsayısı 50 Saat = 1 Gün Devir Tavanı Max 5 Gün (Yıllık) Platform Masaüstü & Web"
  },
  {
    "id": "06_izin_yonetimi_ve_hakedis#5w1h",
    "title": "5N1K Kural ve Arayüz Çözümleme Tablosu — İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "06_izin_yonetimi_ve_hakedis.html#5w1h",
    "summary": "5N1K Kural ve Arayüz Çözümleme Tablosu İzin modülünde yer alan kontrollerin yasal dayanakları, çalışma mekanizmaları ve kullanıcı rolleri. NE? (Bileşen / Kontrol) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? İz",
    "headings": [
      "5N1K Kural ve Arayüz Çözümleme Tablosu",
      "İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru"
    ],
    "content": "5N1K Kural ve Arayüz Çözümleme Tablosu İzin modülünde yer alan kontrollerin yasal dayanakları, çalışma mekanizmaları ve kullanıcı rolleri. NE? (Bileşen / Kontrol) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? İzin Tablosu & Arama Üst Filtre Çubuğu Departmandaki tüm izin hareketlerini ve onay durumlarını listelemek. 300 ms gecikmeli debounced arama ile ad, soyad, TC ve EBYS no taranır; durum ve izin türü filtrelenir. Rutin takip ve denetimlerde. Yönetici, Süpervizör, İK Yeni İzin Talebi [+ İzin Talep Et] 2 Adımlı Talep Sihirbazı Personel adına mevzuata uygun izin kaydı açmak. Adım 1'de personel seçilir ve anlık bakiye kartı açılır. Adım 2'de tarihler, tür, vekil ve açıklama girilir. İzin talebi oluştuğunda. Personel, Birim Amiri Şua İzni Hakedişi (Mevzuat Standardı) Yasal Hakediş Kuralı Radyasyon çalışanlarının kanuni sağlık iznini hesaplamak. Fiili çalışma süresine göre her 50 saatte 1 gün hesaplanır (tavan 30 gün). Cari yıl kazanımı takip eden yıl kullanılır; devretmez, 31 Aralık'ta yanar. Yıllık izin planlamasında. Radyasyon Çalışanları Çakışma & Nöbet Kilidi Otomatik Çakışma Denetimi Personelin nöbet gününde izne çıkmasını veya mükerrer izin almasını engellemek. Talep edilen tarihler personelin onaylı/bekleyen izniyle veya nöbet çizelgesindeki aktif göreviyle kesişiyorsa işlem durdurulur. İzin kaydetme anında. Sistem (Otomatik Kilit) İzin Onayla Üst Araç Çubuğu (Yeşil) Bekleyen talebi onaylayıp bakiyeyi güncellemek. İzin durumu 'Onaylandı' yapılır; personelin ilgili yıl için tanımlı kalan izninden gün sayısı anında düşülür. Amir incelemesinden sonra. Yönetici, Departman Sorumlusu İzin Reddet Üst Araç Çubuğu (Kırmızı) Uygun görülmeyen izin talebini gerekçeli sonlandırmak. Açılan diyalogda ret gerekçesi girilmesi zorunludur. Bakiye düşümü yapılmaz, durum 'Reddedildi' olarak arşivlenir. Hizmet aksaması durumunda. Yönetici, Süpervizör İzin İptali Üst Araç Çubuğu (Turuncu) Kullanılmayacak onaylı izni geri çekip hakkı iade etmek. İzin 'İptal Edildi' statüsüne çekilir; önceden düşülen izin günleri personelin bakiye havuzuna geri aktarılır. Görevin iptal edilmesinde. Yönetici, Süpervizör Devir Aktar & Yılı Kilitle [Devir Aktar & Yılını Kilitle Butonu] Yıllık izin devrini gerçekleştirmek, 12 aylık fiili hizmetten yeni yılın Şua İzni hakedişini kesinleştirmek ve kaynak yılı dondurmak. Kapanan yılın kalan yıllık izinlerini tavan sınırına (azami 5 gün) göre devreder. Kaynak yılın 12 aylık fiili radyasyon saatlerini tarayarak yeni yıl Şua İzni hakedişini (h"
  },
  {
    "id": "06_izin_yonetimi_ve_hakedis#myth-buster",
    "title": "Saha Mit Avcısı: \"Kullanılmayan Şua İzinleri Bir Sonraki Yıla Devreder mi ya da Paraya Çevrilebilir mi?\" — İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "06_izin_yonetimi_ve_hakedis.html#myth-buster",
    "summary": "Saha Mit Avcısı: \"Kullanılmayan Şua İzinleri Bir Sonraki Yıla Devreder mi ya da Paraya Çevrilebilir mi?\" En Yaygın Radyasyon Mevzuatı Yanılgısı Yanlış İnanış: \"Yoğunluktan ötürü bu yıl 30 günlük şua iznimi kullanamadım, ",
    "headings": [
      "Saha Mit Avcısı: \"Kullanılmayan Şua İzinleri Bir Sonraki Yıla Devreder mi ya da Paraya Çevrilebilir mi?\"",
      "İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru"
    ],
    "content": "Saha Mit Avcısı: \"Kullanılmayan Şua İzinleri Bir Sonraki Yıla Devreder mi ya da Paraya Çevrilebilir mi?\" En Yaygın Radyasyon Mevzuatı Yanılgısı Yanlış İnanış: \"Yoğunluktan ötürü bu yıl 30 günlük şua iznimi kullanamadım, seneye aktarılır 60 gün kullanırım veya kullanamadığım günlerin ücretini idareden talep edebilirim.\" Doğru Gerçek: KESİNLİKLE HAYIR. 3153 sayılı Kanun, Radyasyon Güvenliği Yönetmeliği ve Sağlık Bakanlığı içtihatları uyarınca Şua İzni (sağlık izni), personelin vücudundaki radyasyon biyolojik hasarını tolere etmek ve hücresel onarımı sağlamak amacıyla verilmiş kamu düzenine ilişkin bir dinlenme hakkıdır . Şua izni ertelenemez, takvim yılı (31 Aralık) bittiğinde zaman aşımına uğrayarak yanar , sonraki yıla devredilemez veya nakdi tazminata dönüştürülemez. RADPYS hakediş motoru bu nedenle şua izinlerini cari yılda kilitler ve yıl sonu devrine izin vermez."
  },
  {
    "id": "06_izin_yonetimi_ve_hakedis#workflow",
    "title": "İzin Talep, Çakışma Denetimi ve Onay Akış Şeması — İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "06_izin_yonetimi_ve_hakedis.html#workflow",
    "summary": "İzin Talep, Çakışma Denetimi ve Onay Akış Şeması Personel izin talebinden bakiye kontrolüne, nöbet çakışmasından EBYS evrak kaydına tam süreç döngüsü. graph TD A([\"İzin Talebi Başlatılır: Masaüstü / Web\"]) --> B{\"Tarihle",
    "headings": [
      "İzin Talep, Çakışma Denetimi ve Onay Akış Şeması",
      "İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru"
    ],
    "content": "İzin Talep, Çakışma Denetimi ve Onay Akış Şeması Personel izin talebinden bakiye kontrolüne, nöbet çakışmasından EBYS evrak kaydına tam süreç döngüsü. graph TD A([\"İzin Talebi Başlatılır: Masaüstü / Web\"]) --> B{\"Tarihler Başka İzinle Çakışıyor mu?\"} %% Çakışma Denetimleri B -->|Evet| C[\"HATA: Çakışan İzin Bulundu - İşlem Durdurulur\"] B -->|Hayır| D{\"Talep Tarihlerinde Aktif Nöbet Var mı?\"} D -->|Evet| E[\"HATA: Nöbet Çakışması - Önce Nöbet Değiştirilmelidir\"] D -->|Hayır| F{\"Personelin Kalan İzin Bakiyesi Yeterli mi?\"} %% Bakiye ve Onay Kuyruğu F -->|\"Yetersiz\"| G[\"HATA: Yetersiz İzin Bakiyesi Uyarısı\"] F -->|\"Yeterli\"| H[\"Talep Kaydedilir: Durum = Onay Bekliyor\"] H --> I{\"Yetkili Amir Kararı\"} I -->|Reddet| J[\"Zorunlu Gerekçe Girilir: Durum = Reddedildi\"] I -->|Onayla| K[\"Durum = Onaylandı\"] %% Bakiye Düşümü ve İptal K --> L[\"İzin Günleri Bakiye Havuzundan Otomatik Düşülür\"] L --> M{\"Personel İzne Çıkamadı mı?\"} M -->|\"İptal Talebi\"| N[\"İptal Et Butonu: Bakiye Eksiksiz İade Edilir\"] %% EBYS / HBYS Entegrasyonu L --> O{\"EBYS / HBYS Evrak No Girildi mi?\"} O -->|Evet| P[\"Durum = Resmi Onaylı Olarak Kilitlenir\"] O -->|Hayır| Q[\"İdari Onay Statüsünde Kalır\"] style A fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff style C fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff style E fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff style G fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff style K fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff style P fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff style N fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff"
  },
  {
    "id": "06_izin_yonetimi_ve_hakedis#screenshots",
    "title": "️ Arayüz Ekran Görünümleri — İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "06_izin_yonetimi_ve_hakedis.html#screenshots",
    "summary": "️ Arayüz Ekran Görünümleri İzin Listesi kokpiti ve 2 adımlı İzin Talep Sihirbazı ekranları. ️ Ekran Konumu: Sol Menü > İzin Yönetimi > İzin Listesi KPI Sayaçları, Filtreler & Onay/Red/İptal Butonları Yasal Bilgilendirme:",
    "headings": [
      "️ Arayüz Ekran Görünümleri",
      "İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru"
    ],
    "content": "️ Arayüz Ekran Görünümleri İzin Listesi kokpiti ve 2 adımlı İzin Talep Sihirbazı ekranları. ️ Ekran Konumu: Sol Menü > İzin Yönetimi > İzin Listesi KPI Sayaçları, Filtreler & Onay/Red/İptal Butonları Yasal Bilgilendirme: Bu görseldeki personel adları, TC kimlik numaraları, departmanlar ve izin tarihleri simülasyon amacıyla üretilmiş sentetik test verileridir. ️ Ekran Konumu: İzin Listesi > + İzin Talep Et Butonu 2 Adımlı Wizard, Bakiye Paneli & Takvim Hesabı Yasal Bilgilendirme: Form alanları ve bakiye özeti örnek arayüz gösterimi olup herhangi bir gerçek personele ait veri içermemektedir."
  },
  {
    "id": "06_izin_yonetimi_ve_hakedis#step-by-step",
    "title": "Adım Adım İşlem Rehberi — İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "06_izin_yonetimi_ve_hakedis.html#step-by-step",
    "summary": "Adım Adım İşlem Rehberi Saha operasyonlarında en sık kullanılan 5 ana işlemin uygulama adımları. 1 2 Adımlı Sihirbaz ile Yeni İzin Talebi Oluşturma İzin Listesi ekranının sol üst köşesindeki mor [+ İzin Talep Et] butonun",
    "headings": [
      "Adım Adım İşlem Rehberi",
      "İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru"
    ],
    "content": "Adım Adım İşlem Rehberi Saha operasyonlarında en sık kullanılan 5 ana işlemin uygulama adımları. 1 2 Adımlı Sihirbaz ile Yeni İzin Talebi Oluşturma İzin Listesi ekranının sol üst köşesindeki mor [+ İzin Talep Et] butonuna tıklayın. Açılan sihirbazın 1. Adımında: Personel Seçimi: TC Kimlik veya Ad ile personeli bulun. Bakiye Kontrolü: Sağ taraftaki panelde personelin cari yıldaki Yıllık Hakedilen, Devir Eden ve Şua İzni kalan haklarını kontrol edin. Alt kısımdaki [İleri >] butonuna basarak 2. Adıma geçin: İzin Türü: Yıllık İzin, Şua İzni (Sağlık İzni), Mazeret İzni vb. seçin. Başlangıç / Bitiş Tarihleri: Tarihleri seçtiğinizde sistem resmi tatil ve hafta sonu parametrelerine göre net gün ve saat süresini otomatik hesaplar. Vekil Personel: İzin esnasında görevi devralacak meslektaşınızı belirleyin. [Kaydet] butonuna basın. Çakışma ve nöbet kontrolleri olumluysa talep 'Onay Bekliyor' statüsünde listeye düşecektir. 2 İzin Taleplerini İnceleme, Onaylama ve Gerekçeli Reddetme İzin Listesinde üst filtrelerden durumu 'Beklemede' olarak seçin. İncelenmek istenen satırı tıklayın veya detaylarını görmek için [Ayrıntı / Düzenle] butonuna basın. Onaylamak İçin: Yeşil renkli [Onayla] butonuna tıklayın. Sistem personelin izin bakiyesinden gün sayısını anında düşer ve satır rozetini yeşil 'ONAYLANDI' yapar. Reddetmek İçin: Kırmızı renkli [Reddet] butonuna tıklayın. Açılan pencereye ret gerekçesini yazıp onaylayın. Durum 'REDDEDİLDİ' olur, personelin bakiyesine dokunulmaz. 3 Onaylı İzni Güvenle İptal Etme ve Bakiye İadesi Önceden onaylanmış ancak acil görev, nöbet veya plan değişikliği nedeniyle çıkılamayan izni listeden seçin. Üst araç çubuğundaki turuncu [İptal Et] butonuna basın. Ekrana gelen onay uyarısında 'Evet' dediğinizde sistem izin kaydını 'İPTAL EDİLDİ' statüsüne alır. Önceden personelin bakiyesinden düşülen tüm izin günleri, personelin izin havuzuna otomatik ve eksiksiz olarak geri iade edilir. Not: Onaylı izinlerin kalıcı olarak silinmesi yasal denetim izi gereğince engellenmiştir; daima İptal Et işlemi uygulanmalıdır. 4 İzin Hakedişlerini İnceleme ve Geçmiş Yıl Devri Aktarma İzin Listesi sağ üst araç çubuğundaki [Kalan Hak / Hakediş] butonuna veya sol menüden hakediş sayfasına geçin. Yıl seçicisinden incelemek istediğiniz takvim yılını belirleyin. Tüm personelin hakediş, devir ve kullanılan gün toplamları listelenir. Ocak ayı başında geçmiş tamamlanmış yıldan kalan izinleri aktarmak ve Şua hakedişini kesinleştirmek için [Devir Aktar & Yılını Kilitle] butonuna"
  },
  {
    "id": "06_izin_yonetimi_ve_hakedis#faq",
    "title": "Sıkça Sorulan Sorular (SSS) — İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru",
    "category": "2. İnsan Kaynakları & İzin › Bölüm",
    "url": "06_izin_yonetimi_ve_hakedis.html#faq",
    "summary": "Sıkça Sorulan Sorular (SSS) Saha çalışanlarının izin hakları ve mevzuat kuralları hakkında en çok merak ettiği konular. Şua izni hak etmek için kaç saat fiili radyasyon çalışması gerekir? Mevzuat ve RADPYS kural motoru g",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) Saha çalışanlarının izin hakları ve mevzuat kuralları hakkında en çok merak ettiği konular. Şua izni hak etmek için kaç saat fiili radyasyon çalışması gerekir? Mevzuat ve RADPYS kural motoru gereğince (RED-IZN-01), radyasyon denetimli alanlarında fiilen çalışılan her 50 saatlik süre 1 günlük şua izni kazandırır . Yıllık toplam hakediş en fazla 30 takvim günüdür . Bir takvim yılında çalışılan süreler karşılığında kazanılan şua izni, takip eden yılda kullandırılır. İzin talebi gönderirken neden 'Nöbet Çakışması Uyarısı' alıyorum? RADPYS, nöbet hizmetlerinin aksamaması için izin motoru ile nöbet planlama modülünü entegre çalıştırmaktadır (RED-IZN-02). Talep ettiğiniz tarihlerde aktif nöbet çizelgesinde üzerinize yazılmış bir nöbet görevi bulunuyorsa izin talebi engellenir. Bu durumda önce nöbet sorumlunuzla görüşerek nöbetinizi devretmeli veya takas etmelisiniz. Onaylanmış veya Resmi Onaylı bir izni tablodan silebilir miyim? Hayır. Resmi denetim izini korumak amacıyla onaylanmış veya resmi EBYS numarası işlenmiş izinlerin doğrudan silinmesi engellenmiştir. Eğer personelin izni iptal edilecekse [İptal Et] butonu kullanılır. Bu işlem izin kaydını silmeden iptal eder ve düşülen günleri personelin kalan bakiye havuzuna otomatik olarak iade eder. Geçmiş yıldan kaç gün izin devredilebilir? Cari yıl içinde devir yapılır mı? Devir aktarımı yalnızca takvim yılı tamamlanmış geçmiş yıllar için uygulanabilir. Devam eden cari yıl bitmeden yeni yıla devir yapılamaz. Kurum parametrelerine göre devredilebilecek azami yıllık izin süresi en fazla 5 gündür . Tavanı aşan kalan izin günleri mevzuat gereğince yeni yıla devretmez ve dondurulur."
  },
  {
    "id": "07_1_temel_ayarlar_ve_calisma_standartlari",
    "title": "Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "07_1_temel_ayarlar_ve_calisma_standartlari.html",
    "summary": "RADPYS'nin hastane genelinde uyguladığı temel çalışma limitleri, 24 saat çalışma ve kesintisiz dinlenme kuralları, esnek fazla mesai tavanı ve kıdemli personel koruma eşikleri bu ekrandan yönetilir.",
    "headings": [
      "Hızlı Reçete: Temel Nöbet Parametrelerini Yapılandırma",
      "07.1 Temel Ayarlar 5N1K Bileşen Çözümleme Tablosu",
      "️ Temel Ayarlar Ekranı Arayüzü",
      "Adım Adım Temel Parametre Yapılandırma",
      "Sıkça Sorulan Sorular (Temel Ayarlar)"
    ],
    "content": "Kılavuz Ana Sayfası Özel Kılavuz Sayfası 07. 07 1 Temel Ayarlar Ve Calisma Standartlari Alt Modül 07.1 Sekme: Temel Ayarlar | Yönetim Standardı Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları RADPYS'nin hastane genelinde uyguladığı temel çalışma limitleri, 24 saat çalışma ve kesintisiz dinlenme kuralları, esnek fazla mesai tavanı ve kıdemli personel koruma eşikleri bu ekrandan yönetilir. Hızlı Reçete: Temel Nöbet Parametrelerini Yapılandırma Klinik çalışma sınırları, dinlenme kısıtları ve esnek fazla mesai 1. İstenen Sonuç Klinikte personelin aşırı yorulmasını önleyen, dinlenme hakkını koruyan ve yasal sınırlara uyan genel düzen. 2. Yapılacak İşlem Dinlenme saatini (24s), ardışık nöbet sınırını (2 gün) ve temel FM tavanını (60s) girip [Temel Ayarları Kaydet] butonuna basın. 3. Sistem Etkisi Nöbet dağıtım motoru bu sınırları sert kural (hard constraint) olarak uygular; acil durumda yönetici onayıyla FM tavanı 130 saate kadar esnetilebilir. ⏱️ Günlük Sınır Max 24 Saat Dinlenme Aralığı Min 24 Saat Temel FM Sınırı 60s (Esnek Tavan) ️ Kıdem Kalkanı 50 Yaş / 25 Yıl 07.1 Temel Ayarlar 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Ayda max bayram nöbeti Bayram günlerinde tutulabilecek azami nöbet sayısını sınırlamak. Varsayılan 2'dir. Bir personelin ay içerisindeki dini ve resmi bayram nöbetlerini adil sınırlar. Bayram dönemlerinde. Sistem Yöneticisi Ayda max hafta sonu nöbeti Hafta sonu nöbet yükünün tek bir personele yığılmasını engellemek. Varsayılan 4'tür. Personelin ayda en fazla kaç hafta sonu günü görev yapabileceğini belirler. Aylık planlamada. Klinik Sorumlusu Maksimum fazla mesai süresi Kurum içi aylık fazla mesaiyi adil sınırda tutmak; acil durumda yöneticiyle esnetmek. Kurumsal temel tavan 60 saattir. Acil personel eksikliğinde yönetici onayıyla aşılabilir; ancak yasal tavan 130 saati geçemez. Aylık kota hesabında. Klinik Amiri Onaylı Bayram nöbeti adalet önceliği Geçmiş dönemlerde bayram nöbeti tutanları yeni bayramlarda korumak. Önemsiz, Normal, Önemli veya Çok Önemli ağırlık çarpanı seçilir. Dağıtım motoru adalet havuzunu dengeler. Nöbet dağıtımında. Nöbet Dağıtım Motoru Gece nöbeti dengeleme katsayısı Gece nöbeti sayısını ekip üyeleri arasında eşit paylaştırmak. Öncelik derecesine göre nöbet dağıtım motoru gece nöbetlerini personel arasında homojen dağıtmaya zorlanır. Gece planlarında. Nöbet Dağıtım Motoru Muafiyet yaş sınırı 50 yaşını aşmış personeli gece nöbeti yükünden korumak. Öncelikli olarak gündüz nöbeti atanır. Ancak serviste boş slot veya eksik mesai kalması durumunda otomatik esnetilir. Vardiya dağıtımında. 50+ Yaş Personel Muafiyet hizmet yılı 25 hizmet yılını dolduran personeli ödüllendirmek ve korumak. 25 yıl ve üzeri memuriyete sahip personele koruyucu öncelik uygulanır; zorunlu hallerde esnetilebilir. Planlama esnasında. 25+ Yıl Kıdemli Personel Yaş/Kıdem Muafiyeti Gece Nöbetini Kapsasın Muafiyetin doğrudan gece nöbetlerini hariç tutmasını sağlamak. İşaretlendiğinde muafiyet eşiğine ulaşan personellere gece nöbeti yazılmaması öncelikli kural haline gelir. Kural kaydında. Yönetici Devredilen nöbet değiştirilemez kısıtı Devir işlemiyle kesinleşmiş nöbetlerin yeniden dağıtılmasını önlemek. Onay kutusu işaretli olduğunda devredilmiş nöbetler dağıtım motoru tarafından kilitli kabul edilir. Devir sonrasında. Sistem Yöneticisi Temel Ayarları Kaydet Butonu Tüm bu parametreleri kalıcı olarak veritabanına işlemek. Yeşil renktedir. Tıklandığında tüm limitler güncellenir ve nöbet dağıtım motorunun aktif yapılandırması olur. Ayar değişiminde. Yönetici ️ Temel Ayarlar Ekranı Arayüzü Ekran: Nöbet Yönetimi > Nöbet Ayarları ve Kurallar > [Temel Ayarlar] Temel Ayarlar Sekmesi Simülasyon Notu: Bu görseldeki eşik değerler kurum içi test ortamında yapılandırılmış simülasyon parametreleridir. Adım Adım Temel Parametre Yapılandırma Sol ana menüden [Nöbet Yönetimi] > [Nöbet Ayarları ve Kurallar] ekranını açın. İlk sekme olan [Temel Ayarlar] 'a tıklayın. Maksimum Ardışık Nöbet Günü kutusuna en fazla 2 girin. Nöbet Sonrası Dinlenme Süresi alanını hekim/teknisyen sağlığı için 24 saat olarak belirleyin. Gece Nöbeti Dinlenme Süresi alanına 48 saat yazın. Aylık Maksimum Fazla Mesai alanına temel tavan olan 60 değerini kaydedin. Yaş Muafiyeti kutusuna 50 , Hizmet Yılı Muafiyeti kutusuna 25 yazın. Sağ altta yer alan yeşil [Temel Ayarları Kaydet] butonuna tıklayın. Değişiklikler anında veritabanına işlenir. Sıkça Sorulan Sorular (Temel Ayarlar) 60 saat fazla mesai sınırı acil durumlarda aşılabilir mi? ▾ Evet. 60 saat kurumsal bir temel tavandır; ancak salgın, grev veya acil personel eksikliğinde Yönetici Onayı ile aşılabilir . Aşılması mümkün olmayan mutlak tavan ise kanuni sınır olan 130 saattir. 50 yaşını geçen personele sistem neden gece nöbeti yazabiliyor? ▾ Çünkü 50 yaş kriteri mutlak bir kanuni yasaklama değil, kurum içi koruyucu öncelik politikasıdır . Algoritma önce gündüz nöbeti atar; ancak serviste açık nöbet slotu kalırsa veya personelin zorunlu mesaisi eksik kalırsa kısıt otomatik esnetilerek gece nöbeti atanabilir. ← Önceki Doküman Tüm 23 Modül Portalı Sonraki Doküman → Tüm 23 Modül Portalı"
  },
  {
    "id": "07_1_temel_ayarlar_ve_calisma_standartlari#quick-recipe",
    "title": "Hızlı Reçete: Temel Nöbet Parametrelerini Yapılandırma — Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_1_temel_ayarlar_ve_calisma_standartlari.html#quick-recipe",
    "summary": "Hızlı Reçete: Temel Nöbet Parametrelerini Yapılandırma Klinik çalışma sınırları, dinlenme kısıtları ve esnek fazla mesai 1. İstenen Sonuç Klinikte personelin aşırı yorulmasını önleyen, dinlenme hakkını koruyan ve yasal s",
    "headings": [
      "Hızlı Reçete: Temel Nöbet Parametrelerini Yapılandırma",
      "Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları"
    ],
    "content": "Hızlı Reçete: Temel Nöbet Parametrelerini Yapılandırma Klinik çalışma sınırları, dinlenme kısıtları ve esnek fazla mesai 1. İstenen Sonuç Klinikte personelin aşırı yorulmasını önleyen, dinlenme hakkını koruyan ve yasal sınırlara uyan genel düzen. 2. Yapılacak İşlem Dinlenme saatini (24s), ardışık nöbet sınırını (2 gün) ve temel FM tavanını (60s) girip [Temel Ayarları Kaydet] butonuna basın. 3. Sistem Etkisi Nöbet dağıtım motoru bu sınırları sert kural (hard constraint) olarak uygular; acil durumda yönetici onayıyla FM tavanı 130 saate kadar esnetilebilir. ⏱️ Günlük Sınır Max 24 Saat Dinlenme Aralığı Min 24 Saat Temel FM Sınırı 60s (Esnek Tavan) ️ Kıdem Kalkanı 50 Yaş / 25 Yıl"
  },
  {
    "id": "07_1_temel_ayarlar_ve_calisma_standartlari#5w1h",
    "title": "07.1 Temel Ayarlar 5N1K Bileşen Çözümleme Tablosu — Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_1_temel_ayarlar_ve_calisma_standartlari.html#5w1h",
    "summary": "07.1 Temel Ayarlar 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Ayda max bayram nöbeti Bayram günlerinde tutulabilecek azami nöbet sayısını sınırlamak. Varsayıla",
    "headings": [
      "07.1 Temel Ayarlar 5N1K Bileşen Çözümleme Tablosu",
      "Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları"
    ],
    "content": "07.1 Temel Ayarlar 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Ayda max bayram nöbeti Bayram günlerinde tutulabilecek azami nöbet sayısını sınırlamak. Varsayılan 2'dir. Bir personelin ay içerisindeki dini ve resmi bayram nöbetlerini adil sınırlar. Bayram dönemlerinde. Sistem Yöneticisi Ayda max hafta sonu nöbeti Hafta sonu nöbet yükünün tek bir personele yığılmasını engellemek. Varsayılan 4'tür. Personelin ayda en fazla kaç hafta sonu günü görev yapabileceğini belirler. Aylık planlamada. Klinik Sorumlusu Maksimum fazla mesai süresi Kurum içi aylık fazla mesaiyi adil sınırda tutmak; acil durumda yöneticiyle esnetmek. Kurumsal temel tavan 60 saattir. Acil personel eksikliğinde yönetici onayıyla aşılabilir; ancak yasal tavan 130 saati geçemez. Aylık kota hesabında. Klinik Amiri Onaylı Bayram nöbeti adalet önceliği Geçmiş dönemlerde bayram nöbeti tutanları yeni bayramlarda korumak. Önemsiz, Normal, Önemli veya Çok Önemli ağırlık çarpanı seçilir. Dağıtım motoru adalet havuzunu dengeler. Nöbet dağıtımında. Nöbet Dağıtım Motoru Gece nöbeti dengeleme katsayısı Gece nöbeti sayısını ekip üyeleri arasında eşit paylaştırmak. Öncelik derecesine göre nöbet dağıtım motoru gece nöbetlerini personel arasında homojen dağıtmaya zorlanır. Gece planlarında. Nöbet Dağıtım Motoru Muafiyet yaş sınırı 50 yaşını aşmış personeli gece nöbeti yükünden korumak. Öncelikli olarak gündüz nöbeti atanır. Ancak serviste boş slot veya eksik mesai kalması durumunda otomatik esnetilir. Vardiya dağıtımında. 50+ Yaş Personel Muafiyet hizmet yılı 25 hizmet yılını dolduran personeli ödüllendirmek ve korumak. 25 yıl ve üzeri memuriyete sahip personele koruyucu öncelik uygulanır; zorunlu hallerde esnetilebilir. Planlama esnasında. 25+ Yıl Kıdemli Personel Yaş/Kıdem Muafiyeti Gece Nöbetini Kapsasın Muafiyetin doğrudan gece nöbetlerini hariç tutmasını sağlamak. İşaretlendiğinde muafiyet eşiğine ulaşan personellere gece nöbeti yazılmaması öncelikli kural haline gelir. Kural kaydında. Yönetici Devredilen nöbet değiştirilemez kısıtı Devir işlemiyle kesinleşmiş nöbetlerin yeniden dağıtılmasını önlemek. Onay kutusu işaretli olduğunda devredilmiş nöbetler dağıtım motoru tarafından kilitli kabul edilir. Devir sonrasında. Sistem Yöneticisi Temel Ayarları Kaydet Butonu Tüm bu parametreleri kalıcı olarak veritabanına işlemek. Yeşil renktedir. Tıklandığında tüm limitler güncellenir ve nöbet dağıtım motorunun aktif yapılandırması olur. Ayar değişiminde. Y"
  },
  {
    "id": "07_1_temel_ayarlar_ve_calisma_standartlari#screenshot",
    "title": "️ Temel Ayarlar Ekranı Arayüzü — Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_1_temel_ayarlar_ve_calisma_standartlari.html#screenshot",
    "summary": "️ Temel Ayarlar Ekranı Arayüzü Ekran: Nöbet Yönetimi > Nöbet Ayarları ve Kurallar > [Temel Ayarlar] Temel Ayarlar Sekmesi Simülasyon Notu: Bu görseldeki eşik değerler kurum içi test ortamında yapılandırılmış simülasyon p",
    "headings": [
      "️ Temel Ayarlar Ekranı Arayüzü",
      "Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları"
    ],
    "content": "️ Temel Ayarlar Ekranı Arayüzü Ekran: Nöbet Yönetimi > Nöbet Ayarları ve Kurallar > [Temel Ayarlar] Temel Ayarlar Sekmesi Simülasyon Notu: Bu görseldeki eşik değerler kurum içi test ortamında yapılandırılmış simülasyon parametreleridir."
  },
  {
    "id": "07_1_temel_ayarlar_ve_calisma_standartlari#step-by-step",
    "title": "Adım Adım Temel Parametre Yapılandırma — Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_1_temel_ayarlar_ve_calisma_standartlari.html#step-by-step",
    "summary": "Adım Adım Temel Parametre Yapılandırma Sol ana menüden [Nöbet Yönetimi] > [Nöbet Ayarları ve Kurallar] ekranını açın. İlk sekme olan [Temel Ayarlar] 'a tıklayın. Maksimum Ardışık Nöbet Günü kutusuna en fazla 2 girin. Nöb",
    "headings": [
      "Adım Adım Temel Parametre Yapılandırma",
      "Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları"
    ],
    "content": "Adım Adım Temel Parametre Yapılandırma Sol ana menüden [Nöbet Yönetimi] > [Nöbet Ayarları ve Kurallar] ekranını açın. İlk sekme olan [Temel Ayarlar] 'a tıklayın. Maksimum Ardışık Nöbet Günü kutusuna en fazla 2 girin. Nöbet Sonrası Dinlenme Süresi alanını hekim/teknisyen sağlığı için 24 saat olarak belirleyin. Gece Nöbeti Dinlenme Süresi alanına 48 saat yazın. Aylık Maksimum Fazla Mesai alanına temel tavan olan 60 değerini kaydedin. Yaş Muafiyeti kutusuna 50 , Hizmet Yılı Muafiyeti kutusuna 25 yazın. Sağ altta yer alan yeşil [Temel Ayarları Kaydet] butonuna tıklayın. Değişiklikler anında veritabanına işlenir."
  },
  {
    "id": "07_1_temel_ayarlar_ve_calisma_standartlari#faq",
    "title": "Sıkça Sorulan Sorular (Temel Ayarlar) — Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_1_temel_ayarlar_ve_calisma_standartlari.html#faq",
    "summary": "Sıkça Sorulan Sorular (Temel Ayarlar) 60 saat fazla mesai sınırı acil durumlarda aşılabilir mi? ▾ Evet. 60 saat kurumsal bir temel tavandır; ancak salgın, grev veya acil personel eksikliğinde Yönetici Onayı ile aşılabili",
    "headings": [
      "Sıkça Sorulan Sorular (Temel Ayarlar)",
      "Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları"
    ],
    "content": "Sıkça Sorulan Sorular (Temel Ayarlar) 60 saat fazla mesai sınırı acil durumlarda aşılabilir mi? ▾ Evet. 60 saat kurumsal bir temel tavandır; ancak salgın, grev veya acil personel eksikliğinde Yönetici Onayı ile aşılabilir . Aşılması mümkün olmayan mutlak tavan ise kanuni sınır olan 130 saattir. 50 yaşını geçen personele sistem neden gece nöbeti yazabiliyor? ▾ Çünkü 50 yaş kriteri mutlak bir kanuni yasaklama değil, kurum içi koruyucu öncelik politikasıdır . Algoritma önce gündüz nöbeti atar; ancak serviste açık nöbet slotu kalırsa veya personelin zorunlu mesaisi eksik kalırsa kısıt otomatik esnetilerek gece nöbeti atanabilir."
  },
  {
    "id": "07_2_birim_kurallari_ve_slot_yonetimi",
    "title": "Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "07_2_birim_kurallari_ve_slot_yonetimi.html",
    "summary": "Departmanların (Acil, USG, BT, MR) çalışma vardiyalarını, nöbetçi sayılarını, otomatik hesaplanan akıllı bitiş saatlerini ve birimler arası vardiya aktarımını bu ekrandan yönetebilirsiniz.",
    "headings": [
      "Hızlı Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma",
      "07.2 Birim Kuralları ve Slotlar 5N1K Bileşen Çözümleme Tablosu",
      "️ Birim Kuralları ve Nöbet Slotları Ekranı",
      "Adım Adım Yeni Birim Slotu Açma ve Kopyalama",
      "Sıkça Sorulan Sorular (Birim Slotları)"
    ],
    "content": "Kılavuz Ana Sayfası Özel Kılavuz Sayfası 07. 07 2 Birim Kurallari Ve Slot Yonetimi Alt Modül 07.2 Sekme: Birim Kuralları | Yönetim Standardı Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama Departmanların (Acil, USG, BT, MR) çalışma vardiyalarını, nöbetçi sayılarını, otomatik hesaplanan akıllı bitiş saatlerini ve birimler arası vardiya aktarımını bu ekrandan yönetebilirsiniz. Hızlı Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma Vardiya slot açma, otomatik saat tamamlama ve birim kuralı kopyalama 1. İstenen Sonuç Departmanın gece, gündüz ve hafta sonu ihtiyaç duyduğu nöbetçi pozisyonlarının eksiksiz sisteme tanıtılması. 2. Yapılacak İşlem Birim seçin, başlangıç saatini ve süreyi girin (bitiş saati otomatik dolar), nöbetçi sayısını belirleyip [Birim Kuralı Ekle] 'ye basın. 3. Sistem Etkisi Nöbet dağıtım motoru bu slotları doldurmak için personel atar. [+ Birim Kuralını Kopyala] butonu ile aynı şablon diğer birimlere saniyeler içinde kopyalanabilir. Departman Bazlı Özel Slot Havuzu Akıllı Saat Başlangıç + Süre Nöbetçi Sayısı Dinamik Kontenjan Kural Kopyalama Tek Tıkla Aktarım ️ Önemli Kurumsal Uyarı: Birim Kuralı Kopyalama Davranışı [+ Birim Kuralını Kopyala] butonunu kullandığınızda, Hedef Birimde daha önce tanımlanmış olan mevcut tüm nöbet slotları tamamen silinir ve kaynak birimdeki slotlar sıfırdan oluşturulur. Yanlışlıkla birimin var olan slotlarını kaybetmemek için kopyalama öncesinde hedef birimi mutlaka kontrol ediniz. 07.2 Birim Kuralları ve Slotlar 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Birim Seçimi (Açılır Kutu) Hangi birimin nöbet kurallarının yönetileceğini seçmek. Departman tablosundaki aktif servisleri listeler. Seçim değiştiğinde slot tablosu anında yenilenir. Birim ayarlarını açarken. Departman Sorumlusu Nöbet Adı / Nöbet Kodu Vardiyayı çizelgede ve raporlarda tekil olarak tanımlamak. Örn: Nöbet Adı: \"Acil Gece\", Nöbet Kodu: \"ACL_GECE\". Dağıtım motorunda ve PDF çıktılarda bu isim ve kod görünür. Slot oluştururken. Nöbet Amiri Başlangıç Saati & Süre (Saat) Vardiyanın başlangıç saatini ve çalışma süresini belirlemek. Başlangıç saati girildiğinde süre (saat) ile toplanarak bitiş saati matematiksel olarak hesaplanır. Vardiya tanımlarken. Yetkili Kullanıcı Bitiş Saati (Otomatik Hesaplanan) Kullanıcının yanlış bitiş saati girmesini önlemek (Akıllı Saat). (Başlangıç + Süre) % 24 formülü ile çalışır. Gece yarısı devirlerinde (örn: 20:00 + 12s = 08:00) otomatik hesaplar. Süre değiştikçe. Sistem Otomatik Nöbetçi Sayısı (Slot) Bu nöbet slotunda aynı anda kaç teknisyenin görev alacağını belirlemek. Örn: 2 seçilirse nöbet dağıtım motoru her gün bu slota iki farklı uygun personel atamak zorundadır. Vardiya açarken. Başhekimlik / Sorumlu Hizmet Tipi (Açılır Kutu) Vardiyanın belirli bir hizmet grubuna (örn: teknisyen, hemşire) özgülenmesini sağlamak. Boş bırakılırsa (Genel) birimdeki tüm hizmet sınıflarına açık olur; seçilirse sadece o gruba yazılır. Vardiya tanımlarken. Nöbet Sorumlusu Birim Kuralı Ekle Butonu Girilen slot parametrelerini birim kuralı olarak kaydetmek. Tıklandığında yeni vardiya slot tablosuna eklenir ve nöbet dağıtım havuzuna dahil edilir. Slot oluştururken. Departman Sorumlusu Birim Kuralını Kopyala Butonu (Mor Buton) Bir birimin tüm slotlarını başka bir birime anında çoğaltmak. Açılan diyalogda kaynak ve hedef birim seçilir. Onay verildiğinde hedef birim slotları sıfırlanıp kopyalanır. Yeni birim kurulumunda. Sistem Yöneticisi Birim Kuralını Sil Butonu Kullanılmayan veya kaldırılan bir vardiya slotunu iptal etmek. Tablodan seçilen slot onay sonrası sistemden kaldırılır; gelecek planlarda bu slota atama yapılmaz. Slot iptalinde. Departman Sorumlusu ️ Birim Kuralları ve Nöbet Slotları Ekranı Ekran: Nöbet Ayarları > [Birim Kuralları] Sekmesi Birim Kuralları Sekmesi Simülasyon Notu: Departman slotları ve çalışma saatleri hastane test ortamına göre yapılandırılmıştır. Adım Adım Yeni Birim Slotu Açma ve Kopyalama [Birim Kuralları] sekmesinde sol üstten ilgili departmanı (örn: Acil Radyoloji) seçin. Alt kısımdaki Vardiya Tanımlama kutularına gidin: Nöbet Adı: \"Acil Gece 12s\" Nöbet Kodu: \"ACL_12\" Başlangıç Saati: 20:00 Süre (Saat): 12 (Bitiş saati akıllı motor ile otomatik 08:00 olacaktır.) Nöbetçi Sayısı: 2 Geçerli Günler: \"Her Gün\" [Birim Kuralı Ekle] butonuna basın. Yeni slot üstteki tabloda listelenir. Aynı kuralları BT servisine de aktarmak isterseniz: Üstteki mor [+ Birim Kuralını Kopyala] butonuna basın. Kaynak olarak Acil Radyoloji , hedef olarak Bilgisayarlı Tomografi (BT) seçin. Onay kutusunda \"Evet\" diyerek aktarımı tamamlayın. Sıkça Sorulan Sorular (Birim Slotları) Bitiş saatini manuel olarak değiştirebilir miyim? ▾ Hayır, bitiş saati kutusu bilerek salt-okunurdur. Hatalı süre veya çakışan vardiya girişlerini engellemek için sistem, başlangıç saati ile süreyi toplayarak bitiş saatini otomatik üretir. Kural kopyalarken hedef birimdeki eski slotları koruyamaz mıyım? ▾ Kural kopyalama işlevi, hedef birimin şablonunu kaynak birimle tam olarak eşitlemek üzere tasarlanmıştır. Bu sebeple hedef birimin eski slotları silinir. Eğer eski slotları korumak istiyorsanız yeni slotları tek tek eklemeniz önerilir. ← Önceki Doküman Tüm 23 Modül Portalı Sonraki Doküman → Tüm 23 Modül Portalı"
  },
  {
    "id": "07_2_birim_kurallari_ve_slot_yonetimi#quick-recipe",
    "title": "Hızlı Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma — Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_2_birim_kurallari_ve_slot_yonetimi.html#quick-recipe",
    "summary": "Hızlı Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma Vardiya slot açma, otomatik saat tamamlama ve birim kuralı kopyalama 1. İstenen Sonuç Departmanın gece, gündüz ve hafta sonu ihtiyaç duyduğu nöbetçi pozisy",
    "headings": [
      "Hızlı Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma",
      "Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama"
    ],
    "content": "Hızlı Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma Vardiya slot açma, otomatik saat tamamlama ve birim kuralı kopyalama 1. İstenen Sonuç Departmanın gece, gündüz ve hafta sonu ihtiyaç duyduğu nöbetçi pozisyonlarının eksiksiz sisteme tanıtılması. 2. Yapılacak İşlem Birim seçin, başlangıç saatini ve süreyi girin (bitiş saati otomatik dolar), nöbetçi sayısını belirleyip [Birim Kuralı Ekle] 'ye basın. 3. Sistem Etkisi Nöbet dağıtım motoru bu slotları doldurmak için personel atar. [+ Birim Kuralını Kopyala] butonu ile aynı şablon diğer birimlere saniyeler içinde kopyalanabilir. Departman Bazlı Özel Slot Havuzu Akıllı Saat Başlangıç + Süre Nöbetçi Sayısı Dinamik Kontenjan Kural Kopyalama Tek Tıkla Aktarım"
  },
  {
    "id": "07_2_birim_kurallari_ve_slot_yonetimi#5w1h",
    "title": "07.2 Birim Kuralları ve Slotlar 5N1K Bileşen Çözümleme Tablosu — Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_2_birim_kurallari_ve_slot_yonetimi.html#5w1h",
    "summary": "07.2 Birim Kuralları ve Slotlar 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Birim Seçimi (Açılır Kutu) Hangi birimin nöbet kurallarının yönetileceğini seçmek. D",
    "headings": [
      "07.2 Birim Kuralları ve Slotlar 5N1K Bileşen Çözümleme Tablosu",
      "Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama"
    ],
    "content": "07.2 Birim Kuralları ve Slotlar 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Birim Seçimi (Açılır Kutu) Hangi birimin nöbet kurallarının yönetileceğini seçmek. Departman tablosundaki aktif servisleri listeler. Seçim değiştiğinde slot tablosu anında yenilenir. Birim ayarlarını açarken. Departman Sorumlusu Nöbet Adı / Nöbet Kodu Vardiyayı çizelgede ve raporlarda tekil olarak tanımlamak. Örn: Nöbet Adı: \"Acil Gece\", Nöbet Kodu: \"ACL_GECE\". Dağıtım motorunda ve PDF çıktılarda bu isim ve kod görünür. Slot oluştururken. Nöbet Amiri Başlangıç Saati & Süre (Saat) Vardiyanın başlangıç saatini ve çalışma süresini belirlemek. Başlangıç saati girildiğinde süre (saat) ile toplanarak bitiş saati matematiksel olarak hesaplanır. Vardiya tanımlarken. Yetkili Kullanıcı Bitiş Saati (Otomatik Hesaplanan) Kullanıcının yanlış bitiş saati girmesini önlemek (Akıllı Saat). (Başlangıç + Süre) % 24 formülü ile çalışır. Gece yarısı devirlerinde (örn: 20:00 + 12s = 08:00) otomatik hesaplar. Süre değiştikçe. Sistem Otomatik Nöbetçi Sayısı (Slot) Bu nöbet slotunda aynı anda kaç teknisyenin görev alacağını belirlemek. Örn: 2 seçilirse nöbet dağıtım motoru her gün bu slota iki farklı uygun personel atamak zorundadır. Vardiya açarken. Başhekimlik / Sorumlu Hizmet Tipi (Açılır Kutu) Vardiyanın belirli bir hizmet grubuna (örn: teknisyen, hemşire) özgülenmesini sağlamak. Boş bırakılırsa (Genel) birimdeki tüm hizmet sınıflarına açık olur; seçilirse sadece o gruba yazılır. Vardiya tanımlarken. Nöbet Sorumlusu Birim Kuralı Ekle Butonu Girilen slot parametrelerini birim kuralı olarak kaydetmek. Tıklandığında yeni vardiya slot tablosuna eklenir ve nöbet dağıtım havuzuna dahil edilir. Slot oluştururken. Departman Sorumlusu Birim Kuralını Kopyala Butonu (Mor Buton) Bir birimin tüm slotlarını başka bir birime anında çoğaltmak. Açılan diyalogda kaynak ve hedef birim seçilir. Onay verildiğinde hedef birim slotları sıfırlanıp kopyalanır. Yeni birim kurulumunda. Sistem Yöneticisi Birim Kuralını Sil Butonu Kullanılmayan veya kaldırılan bir vardiya slotunu iptal etmek. Tablodan seçilen slot onay sonrası sistemden kaldırılır; gelecek planlarda bu slota atama yapılmaz. Slot iptalinde. Departman Sorumlusu"
  },
  {
    "id": "07_2_birim_kurallari_ve_slot_yonetimi#screenshot",
    "title": "️ Birim Kuralları ve Nöbet Slotları Ekranı — Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_2_birim_kurallari_ve_slot_yonetimi.html#screenshot",
    "summary": "️ Birim Kuralları ve Nöbet Slotları Ekranı Ekran: Nöbet Ayarları > [Birim Kuralları] Sekmesi Birim Kuralları Sekmesi Simülasyon Notu: Departman slotları ve çalışma saatleri hastane test ortamına göre yapılandırılmıştır.",
    "headings": [
      "️ Birim Kuralları ve Nöbet Slotları Ekranı",
      "Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama"
    ],
    "content": "️ Birim Kuralları ve Nöbet Slotları Ekranı Ekran: Nöbet Ayarları > [Birim Kuralları] Sekmesi Birim Kuralları Sekmesi Simülasyon Notu: Departman slotları ve çalışma saatleri hastane test ortamına göre yapılandırılmıştır."
  },
  {
    "id": "07_2_birim_kurallari_ve_slot_yonetimi#step-by-step",
    "title": "Adım Adım Yeni Birim Slotu Açma ve Kopyalama — Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_2_birim_kurallari_ve_slot_yonetimi.html#step-by-step",
    "summary": "Adım Adım Yeni Birim Slotu Açma ve Kopyalama [Birim Kuralları] sekmesinde sol üstten ilgili departmanı (örn: Acil Radyoloji) seçin. Alt kısımdaki Vardiya Tanımlama kutularına gidin: Nöbet Adı: \"Acil Gece 12s\" Nöbet Kodu:",
    "headings": [
      "Adım Adım Yeni Birim Slotu Açma ve Kopyalama",
      "Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama"
    ],
    "content": "Adım Adım Yeni Birim Slotu Açma ve Kopyalama [Birim Kuralları] sekmesinde sol üstten ilgili departmanı (örn: Acil Radyoloji) seçin. Alt kısımdaki Vardiya Tanımlama kutularına gidin: Nöbet Adı: \"Acil Gece 12s\" Nöbet Kodu: \"ACL_12\" Başlangıç Saati: 20:00 Süre (Saat): 12 (Bitiş saati akıllı motor ile otomatik 08:00 olacaktır.) Nöbetçi Sayısı: 2 Geçerli Günler: \"Her Gün\" [Birim Kuralı Ekle] butonuna basın. Yeni slot üstteki tabloda listelenir. Aynı kuralları BT servisine de aktarmak isterseniz: Üstteki mor [+ Birim Kuralını Kopyala] butonuna basın. Kaynak olarak Acil Radyoloji , hedef olarak Bilgisayarlı Tomografi (BT) seçin. Onay kutusunda \"Evet\" diyerek aktarımı tamamlayın."
  },
  {
    "id": "07_2_birim_kurallari_ve_slot_yonetimi#faq",
    "title": "Sıkça Sorulan Sorular (Birim Slotları) — Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_2_birim_kurallari_ve_slot_yonetimi.html#faq",
    "summary": "Sıkça Sorulan Sorular (Birim Slotları) Bitiş saatini manuel olarak değiştirebilir miyim? ▾ Hayır, bitiş saati kutusu bilerek salt-okunurdur. Hatalı süre veya çakışan vardiya girişlerini engellemek için sistem, başlangıç ",
    "headings": [
      "Sıkça Sorulan Sorular (Birim Slotları)",
      "Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama"
    ],
    "content": "Sıkça Sorulan Sorular (Birim Slotları) Bitiş saatini manuel olarak değiştirebilir miyim? ▾ Hayır, bitiş saati kutusu bilerek salt-okunurdur. Hatalı süre veya çakışan vardiya girişlerini engellemek için sistem, başlangıç saati ile süreyi toplayarak bitiş saatini otomatik üretir. Kural kopyalarken hedef birimdeki eski slotları koruyamaz mıyım? ▾ Kural kopyalama işlevi, hedef birimin şablonunu kaynak birimle tam olarak eşitlemek üzere tasarlanmıştır. Bu sebeple hedef birimin eski slotları silinir. Eğer eski slotları korumak istiyorsanız yeni slotları tek tek eklemeniz önerilir."
  },
  {
    "id": "07_3_gelismis_kisitlar_ve_adalet_agirliklari",
    "title": "Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "07_3_gelismis_kisitlar_ve_adalet_agirliklari.html",
    "summary": "RADPYS nöbet dağıtım motorunun çizelge üretirken baz aldığı adalet ceza katsayıları, hafta sonu dengeleme çarpanları ve hizmet sınıfı (Tabip, Radyoloji Teknisyeni) bazlı kurallar bu ekrandan yönetilir.",
    "headings": [
      "Hızlı Reçete: Hizmet Sınıfı Kuralı Tanımlama ve Adalet Dengesi",
      "07.3 Gelişmiş Kısıtlar 5N1K Bileşen Çözümleme Tablosu",
      "️ Gelişmiş Kısıtlar ve Kural Tablosu Ekranı",
      "Adım Adım Hizmet Sınıfı Kuralı Ekleme",
      "Sıkça Sorulan Sorular (Gelişmiş Kısıtlar)"
    ],
    "content": "Kılavuz Ana Sayfası Özel Kılavuz Sayfası 07. 07 3 Gelismis Kisitlar Ve Adalet Agirliklari Alt Modül 07.3 Sekme: nobet_gelismis.ui | Kod: nobet_ayarlar_kisitlar_tab.py Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları RADPYS nöbet dağıtım motorunun çizelge üretirken baz aldığı adalet ceza katsayıları, hafta sonu dengeleme çarpanları ve hizmet sınıfı (Tabip, Radyoloji Teknisyeni) bazlı kurallar bu ekrandan yönetilir. ️ Hızlı Reçete: Hizmet Sınıfı Kuralı Tanımlama ve Adalet Dengesi Unvan bazlı sınırlar ve ceza puanı minimizasyonu 1. İstenen Sonuç Tabipler ile teknisyenlerin çalışma sınırlarını ayırmak ve nöbetlerin ekip arasında adil dağılmasını sağlamak. 2. Yapılacak İşlem Kural Tipini seçin (aylık max, dinlenme vb.), Hizmet Sınıfını belirleyin, sınır Değerini girip [Kural Ekle] butonuna basın. 3. Sistem Etkisi Kural Piramidi uyarınca bu kural genel ayarı ezer; nöbet dağıtım motoru çizelgeyi hesaplarken bu sınıra öncelikli olarak uyar. Hizmet Sınıfı Tabip / Teknisyen Kural Sınıfı Yasal / Kurumsal Adalet Katsayısı Ceza Minimizasyonu Kısıt Tipi Sert & Esnek Sınır 07.3 Gelişmiş Kısıtlar 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Kural Adı (Giriş Kutusu) Kısıt kuralına anlaşılır bir tanım vermek. Örn: \"Teknisyen Hafta Sonu Limiti\", \"Uzman Tabip Aylık Max Nöbet\". Rapor ve uyarılarda bu ad görünür. Kural oluştururken. Nöbet Yöneticisi Kural Tipi (Açılır Kutu) Kuralın hangi çalışma parametresini denetleyeceğini belirlemek. \"aylik_max\", \"art_arda_max\", \"nöbet_sonrasi_dinlenme\", \"hafta_sonu_limit\", \"bayram_limit\" seçeneklerinden biri seçilir. Kural oluştururken. Yönetici Kural Sınıfı (Açılır Kutu) Kuralın yasal zorunluluk mu kurumsal tercih mi olduğunu belirlemek. \"Yasal\" seçilirse asla delinemez sert kısıt (hard constraint) olur; \"Kurumsal/Tercih\" seçilirse ceza puanlı esnek kural olur. Kural eklerken. Başhekimlik Hizmet Sınıfı (Açılır Kutu) Kuralın hangi meslek grubuna uygulanacağını seçmek. Örn: \"Radyoloji Teknisyeni\" veya \"Uzman Tabip\". Boş bırakılırsa tüm personele uygulanır. Grup ayrımında. Nöbet Sorumlusu Birim (Açılır Kutu) Kuralın belirli bir kliniğe özgülenmesini sağlamak. Departman seçilirse Kural Piramidi Öncelik 1 (Birim+Sınıf) kademesinde değerlendirilir. Birim kuralı yazarken. Departman Sorumlusu Değer (Sayısal Giriş) Kuralın sayısal sınırını belirlemek. Aylık nöbet adedi, saat veya gün limiti girilir (örn: 3 nöbet veya 24 saat). Eşik belirlerken. Yönetici Kural Ekle Butonu Hazırlanan kısıt parametresini listeye ve veritabanına eklemek. Tıklandığında kural tablosuna yeni satır olarak düşer ve nöbet dağıtım motoru aktif kuralları arasına alır. Kural kaydında. Yönetici Kural Güncelle Butonu Mevcut bir kuralın değerini veya hizmet sınıfını revize etmek. Tablodan satır seçildiğinde aktifleşir; düzenleme sonrası değişiklikleri kaydeder. Değer revizyonunda. Yetkili Kullanıcı Kuralı Sil Butonu Artık geçerli olmayan bir kuralı sistemden kaldırmak. Kuralı nöbet dağıtım motorundan tamamen çıkarır. Kural iptalinde. Yönetici ️ Gelişmiş Kısıtlar ve Kural Tablosu Ekranı Ekran: Nöbet Ayarları > [Gelişmiş Kısıtlar] Sekmesi Gelişmiş Kısıtlar Sekmesi Simülasyon Notu: Kural adları, hizmet sınıfı eşleştirmeleri ve ceza değerleri test ortamı standartlarına göre örneklenmiştir. Adım Adım Hizmet Sınıfı Kuralı Ekleme [Gelişmiş Kısıtlar] sekmesini açın. Sağdaki Kısıt Düzenleyici alanında: Kural Adı: \"Teknisyen Hafta Sonu Tavanı\" yazın. Kural Tipi: \"hafta_sonu_limit\" seçin. Kural Sınıfı: \"Kurumsal\" olarak belirleyin. Hizmet Sınıfı: \"Radyoloji Teknisyeni\" seçin. Değer: \"3\" girin. Açıklama: \"Teknisyenler ayda en fazla 3 hafta sonu nöbeti tutabilir.\" [Kural Ekle] butonuna basın. Kural üstteki tabloda listelenir. Artık nöbet dağıtım motoru teknisyenler için bu kuralı 3 olarak uygularken, diğer hizmet sınıfları için genel ayarı (4) uygulamaya devam eder. Sıkça Sorulan Sorular (Gelişmiş Kısıtlar) Hizmet sınıfı kuralı genel temel ayardan farklı olursa ne olur? ▾ RADPYS Kural Piramidi uyarınca Hizmet Sınıfı kuralı Genel Temel Ayardan daha önceliklidir (Öncelik 3 > Öncelik 4). Dolayısıyla o hizmet sınıfındaki personele özel kural uygulanır, genel ayar ezilir. Kural sınıfında \"Yasal\" ile \"Kurumsal\" arasındaki fark nedir? ▾ \"Yasal\" kurallar sert kısıttır (hard constraint); çözümsüzlük çıksa dahi nöbet dağıtım motoru bu kuralı kesinlikle delemez. \"Kurumsal\" kurallar ise yüksek ceza puanlı esnek kısıtlardır; çözümsüzlük anında sistem ceza puanını göze alarak kuralı asgari ölçüde esnetebilir. ← Önceki Doküman Tüm 23 Modül Portalı Sonraki Doküman → Tüm 23 Modül Portalı"
  },
  {
    "id": "07_3_gelismis_kisitlar_ve_adalet_agirliklari#quick-recipe",
    "title": "Hızlı Reçete: Hizmet Sınıfı Kuralı Tanımlama ve Adalet Dengesi — Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_3_gelismis_kisitlar_ve_adalet_agirliklari.html#quick-recipe",
    "summary": "️ Hızlı Reçete: Hizmet Sınıfı Kuralı Tanımlama ve Adalet Dengesi Unvan bazlı sınırlar ve ceza puanı minimizasyonu 1. İstenen Sonuç Tabipler ile teknisyenlerin çalışma sınırlarını ayırmak ve nöbetlerin ekip arasında adil ",
    "headings": [
      "Hızlı Reçete: Hizmet Sınıfı Kuralı Tanımlama ve Adalet Dengesi",
      "Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları"
    ],
    "content": "️ Hızlı Reçete: Hizmet Sınıfı Kuralı Tanımlama ve Adalet Dengesi Unvan bazlı sınırlar ve ceza puanı minimizasyonu 1. İstenen Sonuç Tabipler ile teknisyenlerin çalışma sınırlarını ayırmak ve nöbetlerin ekip arasında adil dağılmasını sağlamak. 2. Yapılacak İşlem Kural Tipini seçin (aylık max, dinlenme vb.), Hizmet Sınıfını belirleyin, sınır Değerini girip [Kural Ekle] butonuna basın. 3. Sistem Etkisi Kural Piramidi uyarınca bu kural genel ayarı ezer; nöbet dağıtım motoru çizelgeyi hesaplarken bu sınıra öncelikli olarak uyar. Hizmet Sınıfı Tabip / Teknisyen Kural Sınıfı Yasal / Kurumsal Adalet Katsayısı Ceza Minimizasyonu Kısıt Tipi Sert & Esnek Sınır"
  },
  {
    "id": "07_3_gelismis_kisitlar_ve_adalet_agirliklari#5w1h",
    "title": "07.3 Gelişmiş Kısıtlar 5N1K Bileşen Çözümleme Tablosu — Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_3_gelismis_kisitlar_ve_adalet_agirliklari.html#5w1h",
    "summary": "07.3 Gelişmiş Kısıtlar 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Kural Adı (Giriş Kutusu) Kısıt kuralına anlaşılır bir tanım vermek. Örn: \"Teknisyen Hafta Son",
    "headings": [
      "07.3 Gelişmiş Kısıtlar 5N1K Bileşen Çözümleme Tablosu",
      "Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları"
    ],
    "content": "07.3 Gelişmiş Kısıtlar 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Kural Adı (Giriş Kutusu) Kısıt kuralına anlaşılır bir tanım vermek. Örn: \"Teknisyen Hafta Sonu Limiti\", \"Uzman Tabip Aylık Max Nöbet\". Rapor ve uyarılarda bu ad görünür. Kural oluştururken. Nöbet Yöneticisi Kural Tipi (Açılır Kutu) Kuralın hangi çalışma parametresini denetleyeceğini belirlemek. \"aylik_max\", \"art_arda_max\", \"nöbet_sonrasi_dinlenme\", \"hafta_sonu_limit\", \"bayram_limit\" seçeneklerinden biri seçilir. Kural oluştururken. Yönetici Kural Sınıfı (Açılır Kutu) Kuralın yasal zorunluluk mu kurumsal tercih mi olduğunu belirlemek. \"Yasal\" seçilirse asla delinemez sert kısıt (hard constraint) olur; \"Kurumsal/Tercih\" seçilirse ceza puanlı esnek kural olur. Kural eklerken. Başhekimlik Hizmet Sınıfı (Açılır Kutu) Kuralın hangi meslek grubuna uygulanacağını seçmek. Örn: \"Radyoloji Teknisyeni\" veya \"Uzman Tabip\". Boş bırakılırsa tüm personele uygulanır. Grup ayrımında. Nöbet Sorumlusu Birim (Açılır Kutu) Kuralın belirli bir kliniğe özgülenmesini sağlamak. Departman seçilirse Kural Piramidi Öncelik 1 (Birim+Sınıf) kademesinde değerlendirilir. Birim kuralı yazarken. Departman Sorumlusu Değer (Sayısal Giriş) Kuralın sayısal sınırını belirlemek. Aylık nöbet adedi, saat veya gün limiti girilir (örn: 3 nöbet veya 24 saat). Eşik belirlerken. Yönetici Kural Ekle Butonu Hazırlanan kısıt parametresini listeye ve veritabanına eklemek. Tıklandığında kural tablosuna yeni satır olarak düşer ve nöbet dağıtım motoru aktif kuralları arasına alır. Kural kaydında. Yönetici Kural Güncelle Butonu Mevcut bir kuralın değerini veya hizmet sınıfını revize etmek. Tablodan satır seçildiğinde aktifleşir; düzenleme sonrası değişiklikleri kaydeder. Değer revizyonunda. Yetkili Kullanıcı Kuralı Sil Butonu Artık geçerli olmayan bir kuralı sistemden kaldırmak. Kuralı nöbet dağıtım motorundan tamamen çıkarır. Kural iptalinde. Yönetici"
  },
  {
    "id": "07_3_gelismis_kisitlar_ve_adalet_agirliklari#screenshot",
    "title": "️ Gelişmiş Kısıtlar ve Kural Tablosu Ekranı — Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_3_gelismis_kisitlar_ve_adalet_agirliklari.html#screenshot",
    "summary": "️ Gelişmiş Kısıtlar ve Kural Tablosu Ekranı Ekran: Nöbet Ayarları > [Gelişmiş Kısıtlar] Sekmesi Gelişmiş Kısıtlar Sekmesi Simülasyon Notu: Kural adları, hizmet sınıfı eşleştirmeleri ve ceza değerleri test ortamı standart",
    "headings": [
      "️ Gelişmiş Kısıtlar ve Kural Tablosu Ekranı",
      "Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları"
    ],
    "content": "️ Gelişmiş Kısıtlar ve Kural Tablosu Ekranı Ekran: Nöbet Ayarları > [Gelişmiş Kısıtlar] Sekmesi Gelişmiş Kısıtlar Sekmesi Simülasyon Notu: Kural adları, hizmet sınıfı eşleştirmeleri ve ceza değerleri test ortamı standartlarına göre örneklenmiştir."
  },
  {
    "id": "07_3_gelismis_kisitlar_ve_adalet_agirliklari#step-by-step",
    "title": "Adım Adım Hizmet Sınıfı Kuralı Ekleme — Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_3_gelismis_kisitlar_ve_adalet_agirliklari.html#step-by-step",
    "summary": "Adım Adım Hizmet Sınıfı Kuralı Ekleme [Gelişmiş Kısıtlar] sekmesini açın. Sağdaki Kısıt Düzenleyici alanında: Kural Adı: \"Teknisyen Hafta Sonu Tavanı\" yazın. Kural Tipi: \"hafta_sonu_limit\" seçin. Kural Sınıfı: \"Kurumsal\"",
    "headings": [
      "Adım Adım Hizmet Sınıfı Kuralı Ekleme",
      "Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları"
    ],
    "content": "Adım Adım Hizmet Sınıfı Kuralı Ekleme [Gelişmiş Kısıtlar] sekmesini açın. Sağdaki Kısıt Düzenleyici alanında: Kural Adı: \"Teknisyen Hafta Sonu Tavanı\" yazın. Kural Tipi: \"hafta_sonu_limit\" seçin. Kural Sınıfı: \"Kurumsal\" olarak belirleyin. Hizmet Sınıfı: \"Radyoloji Teknisyeni\" seçin. Değer: \"3\" girin. Açıklama: \"Teknisyenler ayda en fazla 3 hafta sonu nöbeti tutabilir.\" [Kural Ekle] butonuna basın. Kural üstteki tabloda listelenir. Artık nöbet dağıtım motoru teknisyenler için bu kuralı 3 olarak uygularken, diğer hizmet sınıfları için genel ayarı (4) uygulamaya devam eder."
  },
  {
    "id": "07_3_gelismis_kisitlar_ve_adalet_agirliklari#faq",
    "title": "Sıkça Sorulan Sorular (Gelişmiş Kısıtlar) — Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_3_gelismis_kisitlar_ve_adalet_agirliklari.html#faq",
    "summary": "Sıkça Sorulan Sorular (Gelişmiş Kısıtlar) Hizmet sınıfı kuralı genel temel ayardan farklı olursa ne olur? ▾ RADPYS Kural Piramidi uyarınca Hizmet Sınıfı kuralı Genel Temel Ayardan daha önceliklidir (Öncelik 3 > Öncelik 4",
    "headings": [
      "Sıkça Sorulan Sorular (Gelişmiş Kısıtlar)",
      "Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları"
    ],
    "content": "Sıkça Sorulan Sorular (Gelişmiş Kısıtlar) Hizmet sınıfı kuralı genel temel ayardan farklı olursa ne olur? ▾ RADPYS Kural Piramidi uyarınca Hizmet Sınıfı kuralı Genel Temel Ayardan daha önceliklidir (Öncelik 3 > Öncelik 4). Dolayısıyla o hizmet sınıfındaki personele özel kural uygulanır, genel ayar ezilir. Kural sınıfında \"Yasal\" ile \"Kurumsal\" arasındaki fark nedir? ▾ \"Yasal\" kurallar sert kısıttır (hard constraint); çözümsüzlük çıksa dahi nöbet dağıtım motoru bu kuralı kesinlikle delemez. \"Kurumsal\" kurallar ise yüksek ceza puanlı esnek kısıtlardır; çözümsüzlük anında sistem ceza puanını göze alarak kuralı asgari ölçüde esnetebilir."
  },
  {
    "id": "07_4_personel_ozel_saglik_ve_yasal_kisitlar",
    "title": "Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "07_4_personel_ozel_saglik_ve_yasal_kisitlar.html",
    "summary": "Gebe personelin radyasyondan korunması ve gece nöbeti yasağı, yasal süt/emzirme izinleri saat indirimleri, sendika yöneticisi mesai azaltımları ve bireysel fazla mesai yasaklama (FM Off) kuralları bu ekrandan yönetilir.",
    "headings": [
      "Hızlı Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama",
      "07.4 Personel Özel Kısıtları 5N1K Bileşen Çözümleme Tablosu",
      "️ Personel Özel Kısıtları Ekranı",
      "Adım Adım Süt İzni ve Gebelik Kısıtı Tanımlama",
      "Sıkça Sorulan Sorular (Sağlık Kısıtları)"
    ],
    "content": "Kılavuz Ana Sayfası Özel Kılavuz Sayfası 07. 07 4 Personel Ozel Saglik Ve Yasal Kisitlar Alt Modül 07.4 Sekme: nobet_person_kisit.ui | Kod: nobet_ayarlar_personel_kisitlar_tab.py Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri Gebe personelin radyasyondan korunması ve gece nöbeti yasağı, yasal süt/emzirme izinleri saat indirimleri, sendika yöneticisi mesai azaltımları ve bireysel fazla mesai yasaklama (FM Off) kuralları bu ekrandan yönetilir. ️ Hızlı Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama Gebelik, süt izni, sendika azaltımı ve FM yasağı yönetimi 1. İstenen Sonuç Yasal koruma altındaki personelin mevzuata uygun biçimde nöbetten veya fazla mesaiden otomatik muaf tutulması. 2. Yapılacak İşlem Personeli seçin, Kısıt Tipini (Gebelik, Süt İzni vb.) belirleyin, başlangıç-bitiş tarihlerini girip [Kısıt Ekle] butonuna basın. 3. Sistem Etkisi Nöbet dağıtım motoru bu personele kesinlikle gece nöbeti yazmaz; emzirme ve sendika saatlerini aylık zorunlu çalışma hedefinden otomatik düşer. Gebelik Kilidi Gece & FM Yasak (1 mSv) Süt İzni İlk 6 Ay: 3s | Sonra: 1.5s ️ Sendika İzni Memur: 4s/hf | İşçi: 2s/hf FM Kilidi Personel FM Off 07.4 Personel Özel Kısıtları 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Personel Seçimi (Açılır Kutu) Kısıtın uygulanacağı çalışanı belirlemek. Departmandaki aktif personelleri listeler. İsim veya TC Kimlik ile filtrelenebilir. Kısıt oluştururken. İK / Nöbet Sorumlusu Kısıt Tipi (Açılır Kutu) Yasal muafiyet veya sağlık kısıtının gerekçesini seçmek. \"süt_emzirme\", \"gebelik\", \"sendika\", \"engelli\", \"ozel_mazeret\" seçeneklerini içerir. Seçilen tipe göre saat azaltım kuralları devreye girer. Rapor geldiğinde. Yetkili Kullanıcı Saat Azaltım (Günlük) Personelin günlük mesaisinden kaç saat düşüleceğini belirlemek. Emzirme için ilk 6 ay 3 saat, ikinci 6 ay 1.5 saat girilir. Nöbet dağıtım motoru aylık mesai hedefinden bu saatleri otomatik eksiltir. Süt izni süresince. İK Uzmanı Personel Max Fazla Mesai Personelin ayda yapabileceği azami fazla mesai tavanını kişiye özel sınırlamak. 0 girilirse personele hiç FM yazılamaz. Özel sağlık kısıtında genel 60 saat tavanı yerine buradaki değer uygulanır. Bireysel sınırlamada. Klinik Amiri Başlangıç / Bitiş Tarihi Kısıtın geçerlilik dönemini takvimle sınırlamak. Tarih aralığı dışında kalan aylarda kısıt otomatik hükümsüz kalır; personel normal çalışma düzenine döner. Rapor geçerliliğinde. Sorumlu Gerekçe (Metin Kutusu) Kısıtın dayandığı resmi rapor veya evrak numarasını kaydetmek. Örn: \"Sağlık Kurulu Rapor No: 2026/412\", \"Sendika Yetki Belgesi\". Denetim izinde saklanır. Kayıt esnasında. Kullanıcı Kısıt Ekle Butonu Bireysel kısıt kaydını sisteme işlemek. Tıklandığında kısıt tablosuna eklenir ve nöbet dağıtım motorunun çalışma matrisine dahil edilir. Kayıt tamamlarken. Yetkili Kullanıcı Kısıt Güncelle / Sil Butonları Süresi biten veya revize edilen raporları düzenlemek veya kaldırmak. Seçilen kısıtın tarihini uzatır veya kısıtı sonlandırarak personeli tam kapasiteye geçirir. Durum değişiminde. Yönetici ️ Personel Özel Kısıtları Ekranı Ekran: Nöbet Ayarları > [Personel Kısıtları] Sekmesi Personel Kısıtları Sekmesi Simülasyon Notu: Personel adları, kısıt türleri ve tarih aralıkları mevzuata uygun test verileriyle örneklendirilmiştir. Adım Adım Süt İzni ve Gebelik Kısıtı Tanımlama [Personel Kısıtları] sekmesine geçin. Sağdaki Kayıt Düzenleyici alanında: Personel: İlgili çalışanı açılır kutudan seçin. Kısıt Tipi: Yasal emzirme için \"süt_emzirme\" veya gebelik için \"gebelik\" seçin. Saat Azaltım: Süt izninin ilk 6 ayı için 3 saat , ikinci 6 ayı için 1.5 saat yazın. Personel Max FM: Gebe personelde mutlaka 0 saat olarak bırakın. Başlangıç / Bitiş Tarihi: Resmi raporun geçerlilik tarihlerini girin. Gerekçe: \"Doğum Sonrası Süt İzni Raporu\" yazın. [Kısıt Ekle] butonuna tıklayın. Artık nöbet dağıtım motoru bu personeli kesinlikle gece nöbetlerine ve fazla mesaiye yazmayacak; zorunlu mesai hedefini azaltılan saatler üzerinden hesaplayacaktır. Sıkça Sorulan Sorular (Sağlık Kısıtları) Gebe personele acil durumda dahi gece nöbeti yazılabilir mi? ▾ KESİNLİKLE HAYIR. Gebelik durumu, 50 yaş muafiyeti gibi esnetilebilir bir kurum tercihi değildir; NDK mevzuatı ve İş Kanunu gereği mutlak kanuni yasaktır. Sistem gebe personelin gece nöbetine ve fazla mesaiye atanmasını tamamen kilitler; ayrıca fetüs koruması için yıllık doz limitini 1 mSv'e düşürür. Sendika yöneticisi mesai indirimi ne kadardır? ▾ Mevzuat gereği sendika şube yöneticisi olan 657 memurlar için haftalık 4 saat, 4857 işçiler için haftalık 2 saat mesai indirimi tanımlanır. Nöbet dağıtım motoru bu saatleri personelin haftalık hedefinden otomatik olarak düşer. ← Önceki Doküman Tüm 23 Modül Portalı Sonraki Doküman → Tüm 23 Modül Portalı"
  },
  {
    "id": "07_4_personel_ozel_saglik_ve_yasal_kisitlar#quick-recipe",
    "title": "Hızlı Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama — Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_4_personel_ozel_saglik_ve_yasal_kisitlar.html#quick-recipe",
    "summary": "️ Hızlı Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama Gebelik, süt izni, sendika azaltımı ve FM yasağı yönetimi 1. İstenen Sonuç Yasal koruma altındaki personelin mevzuata uygun biçimde nöbetten veya fazla mesaiden otom",
    "headings": [
      "Hızlı Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama",
      "Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri"
    ],
    "content": "️ Hızlı Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama Gebelik, süt izni, sendika azaltımı ve FM yasağı yönetimi 1. İstenen Sonuç Yasal koruma altındaki personelin mevzuata uygun biçimde nöbetten veya fazla mesaiden otomatik muaf tutulması. 2. Yapılacak İşlem Personeli seçin, Kısıt Tipini (Gebelik, Süt İzni vb.) belirleyin, başlangıç-bitiş tarihlerini girip [Kısıt Ekle] butonuna basın. 3. Sistem Etkisi Nöbet dağıtım motoru bu personele kesinlikle gece nöbeti yazmaz; emzirme ve sendika saatlerini aylık zorunlu çalışma hedefinden otomatik düşer. Gebelik Kilidi Gece & FM Yasak (1 mSv) Süt İzni İlk 6 Ay: 3s | Sonra: 1.5s ️ Sendika İzni Memur: 4s/hf | İşçi: 2s/hf FM Kilidi Personel FM Off"
  },
  {
    "id": "07_4_personel_ozel_saglik_ve_yasal_kisitlar#5w1h",
    "title": "07.4 Personel Özel Kısıtları 5N1K Bileşen Çözümleme Tablosu — Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_4_personel_ozel_saglik_ve_yasal_kisitlar.html#5w1h",
    "summary": "07.4 Personel Özel Kısıtları 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Personel Seçimi (Açılır Kutu) Kısıtın uygulanacağı çalışanı belirlemek. Departmandaki a",
    "headings": [
      "07.4 Personel Özel Kısıtları 5N1K Bileşen Çözümleme Tablosu",
      "Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri"
    ],
    "content": "07.4 Personel Özel Kısıtları 5N1K Bileşen Çözümleme Tablosu NE? (Bileşen Adı) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Personel Seçimi (Açılır Kutu) Kısıtın uygulanacağı çalışanı belirlemek. Departmandaki aktif personelleri listeler. İsim veya TC Kimlik ile filtrelenebilir. Kısıt oluştururken. İK / Nöbet Sorumlusu Kısıt Tipi (Açılır Kutu) Yasal muafiyet veya sağlık kısıtının gerekçesini seçmek. \"süt_emzirme\", \"gebelik\", \"sendika\", \"engelli\", \"ozel_mazeret\" seçeneklerini içerir. Seçilen tipe göre saat azaltım kuralları devreye girer. Rapor geldiğinde. Yetkili Kullanıcı Saat Azaltım (Günlük) Personelin günlük mesaisinden kaç saat düşüleceğini belirlemek. Emzirme için ilk 6 ay 3 saat, ikinci 6 ay 1.5 saat girilir. Nöbet dağıtım motoru aylık mesai hedefinden bu saatleri otomatik eksiltir. Süt izni süresince. İK Uzmanı Personel Max Fazla Mesai Personelin ayda yapabileceği azami fazla mesai tavanını kişiye özel sınırlamak. 0 girilirse personele hiç FM yazılamaz. Özel sağlık kısıtında genel 60 saat tavanı yerine buradaki değer uygulanır. Bireysel sınırlamada. Klinik Amiri Başlangıç / Bitiş Tarihi Kısıtın geçerlilik dönemini takvimle sınırlamak. Tarih aralığı dışında kalan aylarda kısıt otomatik hükümsüz kalır; personel normal çalışma düzenine döner. Rapor geçerliliğinde. Sorumlu Gerekçe (Metin Kutusu) Kısıtın dayandığı resmi rapor veya evrak numarasını kaydetmek. Örn: \"Sağlık Kurulu Rapor No: 2026/412\", \"Sendika Yetki Belgesi\". Denetim izinde saklanır. Kayıt esnasında. Kullanıcı Kısıt Ekle Butonu Bireysel kısıt kaydını sisteme işlemek. Tıklandığında kısıt tablosuna eklenir ve nöbet dağıtım motorunun çalışma matrisine dahil edilir. Kayıt tamamlarken. Yetkili Kullanıcı Kısıt Güncelle / Sil Butonları Süresi biten veya revize edilen raporları düzenlemek veya kaldırmak. Seçilen kısıtın tarihini uzatır veya kısıtı sonlandırarak personeli tam kapasiteye geçirir. Durum değişiminde. Yönetici"
  },
  {
    "id": "07_4_personel_ozel_saglik_ve_yasal_kisitlar#screenshot",
    "title": "️ Personel Özel Kısıtları Ekranı — Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_4_personel_ozel_saglik_ve_yasal_kisitlar.html#screenshot",
    "summary": "️ Personel Özel Kısıtları Ekranı Ekran: Nöbet Ayarları > [Personel Kısıtları] Sekmesi Personel Kısıtları Sekmesi Simülasyon Notu: Personel adları, kısıt türleri ve tarih aralıkları mevzuata uygun test verileriyle örnekle",
    "headings": [
      "️ Personel Özel Kısıtları Ekranı",
      "Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri"
    ],
    "content": "️ Personel Özel Kısıtları Ekranı Ekran: Nöbet Ayarları > [Personel Kısıtları] Sekmesi Personel Kısıtları Sekmesi Simülasyon Notu: Personel adları, kısıt türleri ve tarih aralıkları mevzuata uygun test verileriyle örneklendirilmiştir."
  },
  {
    "id": "07_4_personel_ozel_saglik_ve_yasal_kisitlar#step-by-step",
    "title": "Adım Adım Süt İzni ve Gebelik Kısıtı Tanımlama — Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_4_personel_ozel_saglik_ve_yasal_kisitlar.html#step-by-step",
    "summary": "Adım Adım Süt İzni ve Gebelik Kısıtı Tanımlama [Personel Kısıtları] sekmesine geçin. Sağdaki Kayıt Düzenleyici alanında: Personel: İlgili çalışanı açılır kutudan seçin. Kısıt Tipi: Yasal emzirme için \"süt_emzirme\" veya g",
    "headings": [
      "Adım Adım Süt İzni ve Gebelik Kısıtı Tanımlama",
      "Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri"
    ],
    "content": "Adım Adım Süt İzni ve Gebelik Kısıtı Tanımlama [Personel Kısıtları] sekmesine geçin. Sağdaki Kayıt Düzenleyici alanında: Personel: İlgili çalışanı açılır kutudan seçin. Kısıt Tipi: Yasal emzirme için \"süt_emzirme\" veya gebelik için \"gebelik\" seçin. Saat Azaltım: Süt izninin ilk 6 ayı için 3 saat , ikinci 6 ayı için 1.5 saat yazın. Personel Max FM: Gebe personelde mutlaka 0 saat olarak bırakın. Başlangıç / Bitiş Tarihi: Resmi raporun geçerlilik tarihlerini girin. Gerekçe: \"Doğum Sonrası Süt İzni Raporu\" yazın. [Kısıt Ekle] butonuna tıklayın. Artık nöbet dağıtım motoru bu personeli kesinlikle gece nöbetlerine ve fazla mesaiye yazmayacak; zorunlu mesai hedefini azaltılan saatler üzerinden hesaplayacaktır."
  },
  {
    "id": "07_4_personel_ozel_saglik_ve_yasal_kisitlar#faq",
    "title": "Sıkça Sorulan Sorular (Sağlık Kısıtları) — Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_4_personel_ozel_saglik_ve_yasal_kisitlar.html#faq",
    "summary": "Sıkça Sorulan Sorular (Sağlık Kısıtları) Gebe personele acil durumda dahi gece nöbeti yazılabilir mi? ▾ KESİNLİKLE HAYIR. Gebelik durumu, 50 yaş muafiyeti gibi esnetilebilir bir kurum tercihi değildir; NDK mevzuatı ve İş",
    "headings": [
      "Sıkça Sorulan Sorular (Sağlık Kısıtları)",
      "Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri"
    ],
    "content": "Sıkça Sorulan Sorular (Sağlık Kısıtları) Gebe personele acil durumda dahi gece nöbeti yazılabilir mi? ▾ KESİNLİKLE HAYIR. Gebelik durumu, 50 yaş muafiyeti gibi esnetilebilir bir kurum tercihi değildir; NDK mevzuatı ve İş Kanunu gereği mutlak kanuni yasaktır. Sistem gebe personelin gece nöbetine ve fazla mesaiye atanmasını tamamen kilitler; ayrıca fetüs koruması için yıllık doz limitini 1 mSv'e düşürür. Sendika yöneticisi mesai indirimi ne kadardır? ▾ Mevzuat gereği sendika şube yöneticisi olan 657 memurlar için haftalık 4 saat, 4857 işçiler için haftalık 2 saat mesai indirimi tanımlanır. Nöbet dağıtım motoru bu saatleri personelin haftalık hedefinden otomatik olarak düşer."
  },
  {
    "id": "07_5_personel_talepleri_ve_onay_yonetimi",
    "title": "Personel Talepleri, Mazeretler & Onay Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "07_5_personel_talepleri_ve_onay_yonetimi.html",
    "summary": "Personelin nöbet istemediği mazeret günleri, özel nöbet yazılma istekleri, lisansüstü eğitim ders kısıtları ve isteğe bağlı fazla mesai tavan taleplerinin birim amirince incelenmesi, onaylanması veya reddedilmesi sürecini kapsar.",
    "headings": [
      "Hızlı Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı",
      "5N1K: Personel Talepleri Arayüz Bileşenleri ve Saha Kuralları",
      "Personel Nöbet Talebi ve Onay Süreç Şeması",
      "️ Arayüz Yerleşimi ve Saha Kullanım Görünümü",
      "Adım Adım Personel Talebi Onay / Red Kılavuzu",
      "Dönem Yılı ve Ayını Belirleyin",
      "Mazeretleri ve Çakışmaları Değerlendirin",
      "Talebi Onaylayın veya Reddedin",
      "Nöbet Dağıtımına Geçiş Yapın",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Özel Kılavuz Sayfası 07. 07 5 Personel Talepleri Ve Onay Yonetimi Kılavuz / Modül 07: Nöbet Ayarları / 07.5 Personel Talepleri & Onay Yönetimi Alt Modül 07.5 Nöbet Mazeret & İstek Havuzu Amir Onay/Red Yetki Mekanizması Dağıtım Motoruna Doğrudan Aktarım Tahmini Okuma: 4 Dakika Personel Talepleri, Mazeretler & Onay Yönetimi Personelin nöbet istemediği mazeret günleri, özel nöbet yazılma istekleri, lisansüstü eğitim ders kısıtları ve isteğe bağlı fazla mesai tavan taleplerinin birim amirince incelenmesi, onaylanması veya reddedilmesi sürecini kapsar. Hızlı Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı Mazeret toplama, amir değerlendirmesi, onay/red kararı ve nöbet dağıtım motoru entegrasyonu 1. İstenen Sonuç Personelin haklı mazeret ve tercihlerinin kurumsal adalet zedelenmeden nöbet dağıtım algoritmasına iletilmesi. 2. Yapılacak İşlem Dönem ayını seçin, mazeretleri inceleyin, uygun olanları [İsteği Onayla] , sakıncalı olanları gerekçe belirterek [İsteği Reddet] ile sonuçlandırın. 3. Sistem Etkisi Sadece amir onayından geçen talepler Nöbet Dağıtım Motoruna kısıt olarak aktarılır; reddedilen veya askıdaki talepler dikkate alınmaz. Dönem Seçimi Yıl / Ay Ayrımı 4 Temel Talep Türü Mazeret, İstek, Ders, FM ️ Onay Yetkisi Birim Sorumlusu / Amir ️ Dağıtım Motoru Etkisi Otomatik Kısıt Besleme 5N1K: Personel Talepleri Arayüz Bileşenleri ve Saha Kuralları Ekranda gördüğünüz butonlar, kutular ve listelerin görevleri, kullanım kuralları ve sistemdeki etkileri. NE? (Arayüzdeki İsim) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Dönem Yılı & Dönem Ayı Seçimi Talepleri sadece planlanacak olan nöbet ayına filtrelemek ve geçmiş aylarla karışmasını önlemek. Açılır kutudan ay ve yıl değiştirildiğinde liste anında filtrelenir; sadece ilgili ayın talepleri ekrana gelir. İncelemeye başlarken. Birim Amiri, Planlayıcı Birim / Departman Filtresi Çok birimli hastanelerde sadece sorumlu olunan servisin mazeretlerine odaklanmak. Birim seçildiğinde personel listesi ve mazeret tablosu seçilen birimin kadrosuna göre sınırlandırılır. Departman incelemelerinde. Birim Sorumlusu Talep Türü Açılır Kutusu Personelin talebini kategorize ederek algoritmanın doğru kısıtı kurmasını sağlamak. 4 seçenek sunar: Nöbet Yazılmasın (Mazeret), Nöbet Yazılsın (İstek), Eğitim Kısıtı (Ders Programı), Fazla Mesai Talebi (Aylık Üst Sınır). Talep girerken / incelerken. Personel / Birim Amiri Başlangıç Tarihi & Bitiş Tarihi Mazeretin veya nöbet talebinin geçerli olacağı takvim aralığını kesinleştirmek. Tek günlük taleplerde iki kutu aynı güne ayarlanır; çok günlük kongre/ders durumlarında aralık seçilir. Tarih tanımlarken. Talep Eden / Onaylayan Tercih Edilen / İstenmeyen Nöbet Türü Personelin gün bazında belirli bir vardiyayı (Örn: Gece nöbeti istememe veya sadece Gündüz 8-16 isteme) belirtmesi. Birimde tanımlı slotlar açılır listede gelir; \"Tüm Slotlar\" seçilirse personelin o gün hiçbir nöbete atanmaması sağlanır. Belirli vardiya mazeretlerinde. Personel Gerekçe / Talep Açıklaması Kutusu Amirin kararı verirken talebin meşruiyetini ve dayanağını görebilmesini temin etmek. Serbest metin alanıdır; kongre katılımı, sınav belgesi veya ailevi mazeret gibi detaylar yazılır. Talep oluşturulurken. Personel İsteği Onayla Butonu (Yeşil) Seçili personelin talebini resmen geçerli kılarak nöbet dağıtım motoruna yetkilendirmek. Talebin durumu \"Onaylandı\" haline gelir; satır yeşil renkle vurgulanır ve nöbet dağıtım kısıt tablosuna anında yansır. Talep uygun görüldüğünde. Birim Amiri / Süpervizör İsteği Reddet Butonu (Kırmızı) Hizmeti aksatacak, aynı güne aşırı yığılma yaratan veya haksız talepleri iptal etmek. Talebin durumu \"Reddedildi\" olarak güncellenir; gerekirse açıklama notu düşülür; nöbet dağıtım motoru bu talebi tamamen yok sayar. Talep reddedildiğinde. Birim Amiri Personel İstek ve Mazeret Listesi Tablosu İlgili ay için toplanan tüm istekleri, personelleri, tarihleri, durumları ve gerekçeleri toplu sergilemek. Tabloda tek bir satıra tıklandığında üst form otomatik dolar ve [İsteği Onayla] / [İsteği Reddet] butonları aktifleşir. Tüm inceleme sürecinde. Yönetici, Planlayıcı Personel Nöbet Talebi ve Onay Süreç Şeması Personelin talep girişinden birim amirinin değerlendirmesine ve Nöbet Dağıtım Motoruna aktarımına kadar uçtan uca akış. flowchart TD A[\"Personel Talep Girişi (Mazeret, Nöbet İsteme, Eğitim, FM)\"] --> B[\"Talep Havuzuna Kayıt (Durum: Beklemede / Sarı)\"] B --> C{\"Birim Amiri İncelemesi (Servis İhtiyacı & Çakışma Kontrolü)\"} C -->|\"Hizmete Engel Yok\"| D[\"[İsteği Onayla] (Durum: Onaylandı / Yeşil)\"] C -->|\"Aynı Güne Aşırı Yığılma / Yetersiz Kadro\"| E[\"[İsteği Reddet] (Durum: Reddedildi / Kırmızı)\"] D --> F[\"Nöbet Dağıtım Motoru (Kısıt Olarak Entegre Edilir)\"] E --> G[\"Dağıtım Motoru Tarafından Yok Sayılır (Personele Normal Nöbet Yazılabilir)\"] F --> H[\"Nihai Aylık Nöbet Çizelgesi\"] ️ Arayüz Yerleşimi ve Saha Kullanım Görünümü RADPYS masaüstü arayüzünde \"Personel İstekleri\" sekmesinin yerleşimi ve onay kontrolleri. [Ekran Görüntüsü: nobet_ayarlar_main.png - Personel İstekleri Sekmesi] '\" > Etiket: Sentetik Test Verisi — KVKK Uyumlu İnceleme Satır Seçimi ve Buton Aktivasyonu Tabloda herhangi bir talebe tıklandığında alttaki [İsteği Onayla] ve [İsteği Reddet] butonları otomatik olarak aktif hale gelir. Seçim yapılmadığında butonlar tıklanamaz. Dağıtım Motoru Etkileşimi Mazeret onaylandığında nöbet dağıtım motoru bu personeli seçili gün ve saat aralığında kesinlikle nöbete yazmaz . Özel nöbet isteği onaylandığında ise personeli o slota yüksek öncelikle yerleştirir. Adım Adım Personel Talebi Onay / Red Kılavuzu Nöbet çizelgesi çözülmeden önce amirlerin takip etmesi gereken 4 standart adım. 1 Dönem Yılı ve Ayını Belirleyin Pencerenin üstündeki Dönem Yılı ve Dönem Ayı kutularından nöbeti hazırlanacak olan ayı seçin. Sorumlu olduğunuz departmanı seçerek listeyi daraltın. 2 Mazeretleri ve Çakışmaları Değerlendirin Tablodaki talepleri gözden geçirin. Özellikle aynı gün ve vardiyaya birden fazla personelin mazeret yazıp "
  },
  {
    "id": "07_5_personel_talepleri_ve_onay_yonetimi#recipe",
    "title": "Hızlı Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı — Personel Talepleri, Mazeretler & Onay Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_5_personel_talepleri_ve_onay_yonetimi.html#recipe",
    "summary": "Hızlı Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı Mazeret toplama, amir değerlendirmesi, onay/red kararı ve nöbet dağıtım motoru entegrasyonu 1. İstenen Sonuç Personelin haklı mazeret ve tercihlerinin kurumsal a",
    "headings": [
      "Hızlı Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı",
      "Personel Talepleri, Mazeretler & Onay Yönetimi"
    ],
    "content": "Hızlı Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı Mazeret toplama, amir değerlendirmesi, onay/red kararı ve nöbet dağıtım motoru entegrasyonu 1. İstenen Sonuç Personelin haklı mazeret ve tercihlerinin kurumsal adalet zedelenmeden nöbet dağıtım algoritmasına iletilmesi. 2. Yapılacak İşlem Dönem ayını seçin, mazeretleri inceleyin, uygun olanları [İsteği Onayla] , sakıncalı olanları gerekçe belirterek [İsteği Reddet] ile sonuçlandırın. 3. Sistem Etkisi Sadece amir onayından geçen talepler Nöbet Dağıtım Motoruna kısıt olarak aktarılır; reddedilen veya askıdaki talepler dikkate alınmaz. Dönem Seçimi Yıl / Ay Ayrımı 4 Temel Talep Türü Mazeret, İstek, Ders, FM ️ Onay Yetkisi Birim Sorumlusu / Amir ️ Dağıtım Motoru Etkisi Otomatik Kısıt Besleme"
  },
  {
    "id": "07_5_personel_talepleri_ve_onay_yonetimi#5w1h",
    "title": "5N1K: Personel Talepleri Arayüz Bileşenleri ve Saha Kuralları — Personel Talepleri, Mazeretler & Onay Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_5_personel_talepleri_ve_onay_yonetimi.html#5w1h",
    "summary": "5N1K: Personel Talepleri Arayüz Bileşenleri ve Saha Kuralları Ekranda gördüğünüz butonlar, kutular ve listelerin görevleri, kullanım kuralları ve sistemdeki etkileri. NE? (Arayüzdeki İsim) NEDEN? (Amacı) NASIL? (Çalışma ",
    "headings": [
      "5N1K: Personel Talepleri Arayüz Bileşenleri ve Saha Kuralları",
      "Personel Talepleri, Mazeretler & Onay Yönetimi"
    ],
    "content": "5N1K: Personel Talepleri Arayüz Bileşenleri ve Saha Kuralları Ekranda gördüğünüz butonlar, kutular ve listelerin görevleri, kullanım kuralları ve sistemdeki etkileri. NE? (Arayüzdeki İsim) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Dönem Yılı & Dönem Ayı Seçimi Talepleri sadece planlanacak olan nöbet ayına filtrelemek ve geçmiş aylarla karışmasını önlemek. Açılır kutudan ay ve yıl değiştirildiğinde liste anında filtrelenir; sadece ilgili ayın talepleri ekrana gelir. İncelemeye başlarken. Birim Amiri, Planlayıcı Birim / Departman Filtresi Çok birimli hastanelerde sadece sorumlu olunan servisin mazeretlerine odaklanmak. Birim seçildiğinde personel listesi ve mazeret tablosu seçilen birimin kadrosuna göre sınırlandırılır. Departman incelemelerinde. Birim Sorumlusu Talep Türü Açılır Kutusu Personelin talebini kategorize ederek algoritmanın doğru kısıtı kurmasını sağlamak. 4 seçenek sunar: Nöbet Yazılmasın (Mazeret), Nöbet Yazılsın (İstek), Eğitim Kısıtı (Ders Programı), Fazla Mesai Talebi (Aylık Üst Sınır). Talep girerken / incelerken. Personel / Birim Amiri Başlangıç Tarihi & Bitiş Tarihi Mazeretin veya nöbet talebinin geçerli olacağı takvim aralığını kesinleştirmek. Tek günlük taleplerde iki kutu aynı güne ayarlanır; çok günlük kongre/ders durumlarında aralık seçilir. Tarih tanımlarken. Talep Eden / Onaylayan Tercih Edilen / İstenmeyen Nöbet Türü Personelin gün bazında belirli bir vardiyayı (Örn: Gece nöbeti istememe veya sadece Gündüz 8-16 isteme) belirtmesi. Birimde tanımlı slotlar açılır listede gelir; \"Tüm Slotlar\" seçilirse personelin o gün hiçbir nöbete atanmaması sağlanır. Belirli vardiya mazeretlerinde. Personel Gerekçe / Talep Açıklaması Kutusu Amirin kararı verirken talebin meşruiyetini ve dayanağını görebilmesini temin etmek. Serbest metin alanıdır; kongre katılımı, sınav belgesi veya ailevi mazeret gibi detaylar yazılır. Talep oluşturulurken. Personel İsteği Onayla Butonu (Yeşil) Seçili personelin talebini resmen geçerli kılarak nöbet dağıtım motoruna yetkilendirmek. Talebin durumu \"Onaylandı\" haline gelir; satır yeşil renkle vurgulanır ve nöbet dağıtım kısıt tablosuna anında yansır. Talep uygun görüldüğünde. Birim Amiri / Süpervizör İsteği Reddet Butonu (Kırmızı) Hizmeti aksatacak, aynı güne aşırı yığılma yaratan veya haksız talepleri iptal etmek. Talebin durumu \"Reddedildi\" olarak güncellenir; gerekirse açıklama notu düşülür; nöbet dağıtım motoru bu talebi tamamen yok sayar. Talep reddedildiğinde. Birim Amiri Personel İstek ve Mazer"
  },
  {
    "id": "07_5_personel_talepleri_ve_onay_yonetimi#workflow",
    "title": "Personel Nöbet Talebi ve Onay Süreç Şeması — Personel Talepleri, Mazeretler & Onay Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_5_personel_talepleri_ve_onay_yonetimi.html#workflow",
    "summary": "Personel Nöbet Talebi ve Onay Süreç Şeması Personelin talep girişinden birim amirinin değerlendirmesine ve Nöbet Dağıtım Motoruna aktarımına kadar uçtan uca akış. flowchart TD A[\"Personel Talep Girişi (Mazeret, Nöbet İst",
    "headings": [
      "Personel Nöbet Talebi ve Onay Süreç Şeması",
      "Personel Talepleri, Mazeretler & Onay Yönetimi"
    ],
    "content": "Personel Nöbet Talebi ve Onay Süreç Şeması Personelin talep girişinden birim amirinin değerlendirmesine ve Nöbet Dağıtım Motoruna aktarımına kadar uçtan uca akış. flowchart TD A[\"Personel Talep Girişi (Mazeret, Nöbet İsteme, Eğitim, FM)\"] --> B[\"Talep Havuzuna Kayıt (Durum: Beklemede / Sarı)\"] B --> C{\"Birim Amiri İncelemesi (Servis İhtiyacı & Çakışma Kontrolü)\"} C -->|\"Hizmete Engel Yok\"| D[\"[İsteği Onayla] (Durum: Onaylandı / Yeşil)\"] C -->|\"Aynı Güne Aşırı Yığılma / Yetersiz Kadro\"| E[\"[İsteği Reddet] (Durum: Reddedildi / Kırmızı)\"] D --> F[\"Nöbet Dağıtım Motoru (Kısıt Olarak Entegre Edilir)\"] E --> G[\"Dağıtım Motoru Tarafından Yok Sayılır (Personele Normal Nöbet Yazılabilir)\"] F --> H[\"Nihai Aylık Nöbet Çizelgesi\"]"
  },
  {
    "id": "07_5_personel_talepleri_ve_onay_yonetimi#ui-layout",
    "title": "️ Arayüz Yerleşimi ve Saha Kullanım Görünümü — Personel Talepleri, Mazeretler & Onay Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_5_personel_talepleri_ve_onay_yonetimi.html#ui-layout",
    "summary": "️ Arayüz Yerleşimi ve Saha Kullanım Görünümü RADPYS masaüstü arayüzünde \"Personel İstekleri\" sekmesinin yerleşimi ve onay kontrolleri. [Ekran Görüntüsü: nobet_ayarlar_main.png - Personel İstekleri Sekmesi] '\" > Etiket: S",
    "headings": [
      "️ Arayüz Yerleşimi ve Saha Kullanım Görünümü",
      "Personel Talepleri, Mazeretler & Onay Yönetimi"
    ],
    "content": "️ Arayüz Yerleşimi ve Saha Kullanım Görünümü RADPYS masaüstü arayüzünde \"Personel İstekleri\" sekmesinin yerleşimi ve onay kontrolleri. [Ekran Görüntüsü: nobet_ayarlar_main.png - Personel İstekleri Sekmesi] '\" > Etiket: Sentetik Test Verisi — KVKK Uyumlu İnceleme Satır Seçimi ve Buton Aktivasyonu Tabloda herhangi bir talebe tıklandığında alttaki [İsteği Onayla] ve [İsteği Reddet] butonları otomatik olarak aktif hale gelir. Seçim yapılmadığında butonlar tıklanamaz. Dağıtım Motoru Etkileşimi Mazeret onaylandığında nöbet dağıtım motoru bu personeli seçili gün ve saat aralığında kesinlikle nöbete yazmaz . Özel nöbet isteği onaylandığında ise personeli o slota yüksek öncelikle yerleştirir."
  },
  {
    "id": "07_5_personel_talepleri_ve_onay_yonetimi#step-by-step",
    "title": "Adım Adım Personel Talebi Onay / Red Kılavuzu — Personel Talepleri, Mazeretler & Onay Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_5_personel_talepleri_ve_onay_yonetimi.html#step-by-step",
    "summary": "Adım Adım Personel Talebi Onay / Red Kılavuzu Nöbet çizelgesi çözülmeden önce amirlerin takip etmesi gereken 4 standart adım. 1 Dönem Yılı ve Ayını Belirleyin Pencerenin üstündeki Dönem Yılı ve Dönem Ayı kutularından nöb",
    "headings": [
      "Adım Adım Personel Talebi Onay / Red Kılavuzu",
      "Personel Talepleri, Mazeretler & Onay Yönetimi"
    ],
    "content": "Adım Adım Personel Talebi Onay / Red Kılavuzu Nöbet çizelgesi çözülmeden önce amirlerin takip etmesi gereken 4 standart adım. 1 Dönem Yılı ve Ayını Belirleyin Pencerenin üstündeki Dönem Yılı ve Dönem Ayı kutularından nöbeti hazırlanacak olan ayı seçin. Sorumlu olduğunuz departmanı seçerek listeyi daraltın. 2 Mazeretleri ve Çakışmaları Değerlendirin Tablodaki talepleri gözden geçirin. Özellikle aynı gün ve vardiyaya birden fazla personelin mazeret yazıp yazmadığını (serviste personel açığı oluşup oluşmayacağını) kontrol edin. 3 Talebi Onaylayın veya Reddedin Satırı seçin; uygunsa [İsteği Onayla] butonuna basın (durum yeşile döner). Hizmet aksaması yaratacaksa [İsteği Reddet] butonuna basarak reddedin. 4 Nöbet Dağıtımına Geçiş Yapın Tüm mazeretler sonuçlandırıldıktan sonra Modül 08 (Nöbet Hazırlık & Nöbet Dağıtım Motoru) ekranına geçerek otomatik çizelge dağıtımını başlatabilirsiniz. Onaylanan talepler otomatik olarak hesaba katılacaktır."
  },
  {
    "id": "07_5_personel_talepleri_ve_onay_yonetimi#faq",
    "title": "Sıkça Sorulan Sorular (SSS) — Personel Talepleri, Mazeretler & Onay Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_5_personel_talepleri_ve_onay_yonetimi.html#faq",
    "summary": "Sıkça Sorulan Sorular (SSS) Personel nöbet istekleri, amir onayları ve nöbet dağıtım kısıt entegrasyonu hakkında merak edilenler. Personel talep giriş süresini kaçırırsa ne yapılır? ▼ Birim amiri veya sistem yöneticisi, ",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "Personel Talepleri, Mazeretler & Onay Yönetimi"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) Personel nöbet istekleri, amir onayları ve nöbet dağıtım kısıt entegrasyonu hakkında merak edilenler. Personel talep giriş süresini kaçırırsa ne yapılır? ▼ Birim amiri veya sistem yöneticisi, bu ekran üzerinden personel adına manuel olarak doğrudan yeni talep ekleyebilir ve anında onaylayabilir. Onaylanan bir \"Nöbet Yazılsın (İstek)\" talebi nöbet dağıtım motoru tarafından kesinlikle karşılanır mı? ▼ \"Nöbet Yazılsın\" istekleri yüksek öncelikli yumuşak kısıt (Soft Constraint) olarak ele alınır. Personelin 24 saat dinlenme kuralı veya fazla mesai tavanı ihlal edilmiyorsa nöbet dağıtım motoru bu isteği %100'e yakın oranla karşılar. Ancak sert bir dinlenme kuralıyla çakışırsa dinlenme kuralı üstün gelir. \"Nöbet Yazılmasın (Mazeret)\" talebi onaylandığında nöbet dağıtım motoru bunu esnetebilir mi? ▼ Hayır. Amir tarafından onaylanmış bir mazeret, nöbet dağıtım motoru için sert kısıt (Hard Constraint) niteliğindedir. O personelin o gün nöbete yazılması kesinlikle engellenir. Eğer hiçbir personel bulunamazsa dağıtım motoru o slotu boş bırakıp kullanıcıyı uyarır ama onaylı mazereti çiğnemez. İsteği onaylanan personele sonradan acil durum nedeniyle nöbet yazılabilir mi? ▼ Evet. Çizelge yayınlandıktan sonra ortaya çıkan ani hekim/teknisyen yetersizliklerinde, Modül 09 (Nöbet Devir & Mazeret) üzerinden personelin rızasıyla ikame ataması yapılabilir."
  },
  {
    "id": "07_nobet_ayarlari_ve_kisit_hiyerarsisi",
    "title": "Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html",
    "summary": "RADPYS otomatik nöbet dağıtım motorunun uymak zorunda olduğu hiyerarşik kurallar, 24 saat çalışma ve asgari dinlenme standartları, departman vardiya slotları, esnek fazla mesai tavanları, 50 yaş muafiyeti ve yasal kısıt yönetim rehberi.",
    "headings": [
      "Modül 07 Özel Ayar ve Yönetim Kılavuzları",
      "Temel Ayarlar & Dinlenme",
      "Birim Slotları & Kural Kopyalama",
      "Gelişmiş Kısıtlar & Adalet Ağırlıkları",
      "Sağlık Kısıtları & Yasal Muafiyet",
      "Personel Talepleri & Onay Yönetimi",
      "Hızlı Reçete: Nöbet Kural Altyapısı ve Dağıtım Motoru Kısıt Düzeni",
      "5N1K Kural ve Arayüz Çözümleme Tablosu",
      "Saha Mit Avcısı: \"50 Yaşını veya 25 Hizmet Yılını Dolduran Personele Hiçbir Şekilde Gece Nöbeti Yazılamaz mı?\"",
      "Kural Değerlendirme ve Kısıt Çözümleme Akış Şeması",
      "️ Arayüz Ekran Görünümleri",
      "Adım Adım İşlem Rehberi",
      "Temel Nöbet Parametrelerini ve Muafiyetleri Belirleme",
      "Departman Nöbet Slotu Tanımlama ve Akıllı Saat Hesabı",
      "Birim Kuralını Başka Birime Kopyalama (Slot Silinme Uyarılı)",
      "Personel Nöbet İsteklerini (Mazeret / İstek) İnceleme ve Onaylama",
      "Bireysel Sağlık ve Yasal Kısıtları (Gebe/Emzirme/Sendika) Tanımlama",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 3: Nöbet Dağıtım Motoru 07. Nöbet Ayarları & Kısıtlar Modül 07 ⭐ Vitrin Bölümü 4 Kademeli Kural Piramidi 24s & Dinlenme Standartları Tahmini Okuma: 6 Dakika | Sürüm: RADPYS v4.2 Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi RADPYS otomatik nöbet dağıtım motorunun uymak zorunda olduğu hiyerarşik kurallar, 24 saat çalışma ve asgari dinlenme standartları, departman vardiya slotları, esnek fazla mesai tavanları, 50 yaş muafiyeti ve yasal kısıt yönetim rehberi. Modül 07 Özel Ayar ve Yönetim Kılavuzları Onlarca karmaşık parametreyi kolayca yönetebilmeniz için her ayar sekmesi bağımsız 5N1K kılavuzuna ayrılmıştır: 07.1 İncele → Temel Ayarlar & Dinlenme 24 saat dinlenme, ardışık nöbet limiti, 60s FM tavanı ve 50 yaş muafiyeti. 07.2 İncele → Birim Slotları & Kural Kopyalama Departman vardiya slotları, akıllı saat motoru ve mor butonla kural kopyalama. 07.3 İncele → Gelişmiş Kısıtlar & Adalet Ağırlıkları Hizmet sınıfı kuralları, Nöbet Dağıtım Motoru adalet ceza ağırlıkları ve dengeleme. 07.4 İncele → Sağlık Kısıtları & Yasal Muafiyet Gebe nöbet yasağı, emzirme süt saati indirimi, sendika izni ve FM Off. 07.5 İncele → Personel Talepleri & Onay Yönetimi Personelin nöbet istememe/isteme mazeretleri, lisansüstü ders saatleri ve amir onay/red akışı. Hızlı Reçete: Nöbet Kural Altyapısı ve Dağıtım Motoru Kısıt Düzeni Kural hiyerarşisi, vardiya slot tanımları, fazla mesai esnekliği ve muafiyet yönetimi 1. İstenen Sonuç Nöbet çizelgelerinin kanuna, hekim/teknisyen sağlığına ve klinik hizmet gereksinimlerine tam uyumlu olarak hatasız üretilmesi. 2. Yapılacak İşlem [Temel Ayarlar] 'dan genel sınırları belirleyin, [Birim Kuralları] 'ndan slotları açın ve gerekirse [Kural Kopyala] ile aktarın. 3. Sistem Etkisi Özel kural genel kuralı ezer; dinlenme süreleri korunur; 50 yaş muafiyeti ve fazla mesai limitleri acil ihtiyaçta yöneticiyle esnetilir. ️ Kural Piramidi 4 Kademeli Öncelik Temel FM Tavanı 60 Saat (Esnetilebilir) ⏱️ Dinlenme Standardı Min 24 Saat Dinlenme ️ Yönetim Kokpiti Masaüstü Özel Modül 5N1K Kural ve Arayüz Çözümleme Tablosu Nöbet kural sisteminde yer alan bileşenlerin işlevleri, çalışma mantıkları ve Nöbet Dağıtım Motoruna etkileri. NE? (Bileşen / Kontrol) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Kural Hiyerarşisi Piramidi Arayüz Bilgilendirme Notu & Kural Seviyeleri Çakışan kurallarda Nöbet Dağıtım Motorunun hangi kuralı üstün tutacağını ilan etmek. Birim+Sınıf Kuralı > Birim Kuralı > Sınıf Kuralı > Genel Temel Ayar. En özel kural daima genel kuralı ezer. Çizelge dağıtımında. Nöbet Dağıtım Motoru, Yönetici Ardışık Nöbet & Dinlenme Maksimum Ardışık Gün & Min Dinlenme (Saat) Personelin üst üste nöbet tutmasını ve dinlenmeden işe gelmesini engellemek. Maksimum ardışık gün (varsayılan 2) ve nöbet sonrası minimum dinlenme (varsayılan 24 saat) sert kısıt olarak uygulanır. Her nöbet atamasında. Sistem Yöneticisi Fazla Mesai Tavanı Maksimum Fazla Mesai Süresi (Saat) Kutusu Aylık fazla mesaiyi adil sınırda tutmak; acil durumda yöneticinin esnetmesine izin vermek. Kurumsal temel sınır 60 saattir; ancak olağanüstü durumlarda yönetici onayıyla esnetilebilir. Yasal tavan 130 saattir. Aylık planlama esnasında. Yönetici Onayı 50 Yaş / 25 Yıl Muafiyet Kalkanı Muafiyet Yaş Sınırı & Hizmet Yılı Kutuları Kıdemli personele gece nöbetinde koruma önceliği tanımak. Algoritma öncelikle gündüz nöbeti atar; ancak boş slot kalması veya zorunlu mesai eksikliği durumunda otomatik esneterek gece yazabilir. Planlama ve dağıtımda. Kıdemli Personel Birim Nöbet Slotları & Akıllı Saat Birim Slot Tablosu, Başlangıç Saati & Süre Girişi Departmanın vardiyalarını ve gerekli personel sayılarını belirlemek. Başlangıç saati + Süre = Bitiş saati akıllı hesaplayıcı ile otomatik üretilir; gece yarısı devrinde 24 saat modülü uygulanır. Slot oluştururken. Departman Sorumlusu Birim Kuralı Kopyalama Butonu Birim Kuralını Kopyala (Mor Buton) Bir birimin kurallarını başka bir birime saniyeler içinde çoğaltmak. Kaynak birimdeki slotları hedef birime aktarır. Hedef birimdeki eski slotlar temizlenerek kaynak slotlar sıfırdan yazılır. Yeni birim yapılandırırken. Sistem Yöneticisi Personel Talepleri & Mazeretler Talepler Listesi & İsteği Onayla / Reddet Butonları Personelin mazeret, istek, eğitim ve FM taleplerini yönetmek. Talepler listelenir; amir tarafından [İsteği Onayla] veya [İsteği Reddet] butonlarıyla onaylanır. Onaylı talepler nöbet dağıtım motoruna aktarılır. Ay öncesi talep döneminde. Personel, Nöbet Amiri Özel Sağlık ve Hukuki Kısıtlar Personel Kısıt Listesi & Kısıt Tipi Açılır Kutusu Yasal emzirme, gebelik, sendika ve engelli personeli korumak. Emzirme (3s/1.5s), sendika (4s/2s) mesai azaltımları ve gebelik gece yasağı tanımlanır. Nöbet dağıtım motoru otomatik muaf tutar. Sağlık raporu çıktığında. İK, Süpervizör Saha Mit Avcısı: \"50 Yaşını veya 25 Hizmet Yılını Dolduran Personele Hiçbir Şekilde Gece Nöbeti Yazılamaz mı?\" En Sık Karşılaşılan Nöbet Dağıtım Yanılgısı Yanlış İnanış: \"Personel 50 yaşını geçti veya 25 yıllık memur oldu; kanunen gece nöbeti yazılması kesinlikle yasaktır, servis kilitlense bile sisteme gece nöbeti eklenemez.\" Doğru Gerçek: HAYIR, MUTLAK BİR YASAK DEĞİLDİR. 50 yaş veya 25 hizmet yılı kriteri, gebe/emziren personeldeki gibi mutlak bir kanuni yasaklama değil; kurum içi koruyucu bir öncelik politikasıdır . RADPYS optimizasyon motoru bu personele öncelikli olarak gündüz vardiyaları tahsis eder. Ancak serviste açık nöbet slotu kalması, personel yetersizliği veya personelin aylık zorunlu çalışma süresini dolduramaması gibi durumlarda algoritma bu kısıtı otomatik olarak esneterek gece nöbeti atayabilir . Personelin rızası ve amir onayıyla da nöbet planlanabilir. Kural Değerlendirme ve Kısıt Çözümleme Akış Şeması Hiyerarşik kural piramidinin nöbet dağıtım motoru tarafından değerlendirilme sırası ve esneklik kontrolleri. Hiyerarşik Kural & Çözümleme Mantığı (3 Aşamalı Akış) 1:1 Doğal Ölçek flowchart TB subgraph S1 [\"1. AŞAMA: KURAL PİRAMİDİ (HİYERARŞİK ÖNCELİK SIRASI)\"] directio"
  },
  {
    "id": "07_nobet_ayarlari_ve_kisit_hiyerarsisi#quick-recipe",
    "title": "Hızlı Reçete: Nöbet Kural Altyapısı ve Dağıtım Motoru Kısıt Düzeni — Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html#quick-recipe",
    "summary": "Hızlı Reçete: Nöbet Kural Altyapısı ve Dağıtım Motoru Kısıt Düzeni Kural hiyerarşisi, vardiya slot tanımları, fazla mesai esnekliği ve muafiyet yönetimi 1. İstenen Sonuç Nöbet çizelgelerinin kanuna, hekim/teknisyen sağlı",
    "headings": [
      "Hızlı Reçete: Nöbet Kural Altyapısı ve Dağıtım Motoru Kısıt Düzeni",
      "Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi"
    ],
    "content": "Hızlı Reçete: Nöbet Kural Altyapısı ve Dağıtım Motoru Kısıt Düzeni Kural hiyerarşisi, vardiya slot tanımları, fazla mesai esnekliği ve muafiyet yönetimi 1. İstenen Sonuç Nöbet çizelgelerinin kanuna, hekim/teknisyen sağlığına ve klinik hizmet gereksinimlerine tam uyumlu olarak hatasız üretilmesi. 2. Yapılacak İşlem [Temel Ayarlar] 'dan genel sınırları belirleyin, [Birim Kuralları] 'ndan slotları açın ve gerekirse [Kural Kopyala] ile aktarın. 3. Sistem Etkisi Özel kural genel kuralı ezer; dinlenme süreleri korunur; 50 yaş muafiyeti ve fazla mesai limitleri acil ihtiyaçta yöneticiyle esnetilir. ️ Kural Piramidi 4 Kademeli Öncelik Temel FM Tavanı 60 Saat (Esnetilebilir) ⏱️ Dinlenme Standardı Min 24 Saat Dinlenme ️ Yönetim Kokpiti Masaüstü Özel Modül"
  },
  {
    "id": "07_nobet_ayarlari_ve_kisit_hiyerarsisi#5w1h",
    "title": "5N1K Kural ve Arayüz Çözümleme Tablosu — Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html#5w1h",
    "summary": "5N1K Kural ve Arayüz Çözümleme Tablosu Nöbet kural sisteminde yer alan bileşenlerin işlevleri, çalışma mantıkları ve Nöbet Dağıtım Motoruna etkileri. NE? (Bileşen / Kontrol) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAM",
    "headings": [
      "5N1K Kural ve Arayüz Çözümleme Tablosu",
      "Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi"
    ],
    "content": "5N1K Kural ve Arayüz Çözümleme Tablosu Nöbet kural sisteminde yer alan bileşenlerin işlevleri, çalışma mantıkları ve Nöbet Dağıtım Motoruna etkileri. NE? (Bileşen / Kontrol) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Kural Hiyerarşisi Piramidi Arayüz Bilgilendirme Notu & Kural Seviyeleri Çakışan kurallarda Nöbet Dağıtım Motorunun hangi kuralı üstün tutacağını ilan etmek. Birim+Sınıf Kuralı > Birim Kuralı > Sınıf Kuralı > Genel Temel Ayar. En özel kural daima genel kuralı ezer. Çizelge dağıtımında. Nöbet Dağıtım Motoru, Yönetici Ardışık Nöbet & Dinlenme Maksimum Ardışık Gün & Min Dinlenme (Saat) Personelin üst üste nöbet tutmasını ve dinlenmeden işe gelmesini engellemek. Maksimum ardışık gün (varsayılan 2) ve nöbet sonrası minimum dinlenme (varsayılan 24 saat) sert kısıt olarak uygulanır. Her nöbet atamasında. Sistem Yöneticisi Fazla Mesai Tavanı Maksimum Fazla Mesai Süresi (Saat) Kutusu Aylık fazla mesaiyi adil sınırda tutmak; acil durumda yöneticinin esnetmesine izin vermek. Kurumsal temel sınır 60 saattir; ancak olağanüstü durumlarda yönetici onayıyla esnetilebilir. Yasal tavan 130 saattir. Aylık planlama esnasında. Yönetici Onayı 50 Yaş / 25 Yıl Muafiyet Kalkanı Muafiyet Yaş Sınırı & Hizmet Yılı Kutuları Kıdemli personele gece nöbetinde koruma önceliği tanımak. Algoritma öncelikle gündüz nöbeti atar; ancak boş slot kalması veya zorunlu mesai eksikliği durumunda otomatik esneterek gece yazabilir. Planlama ve dağıtımda. Kıdemli Personel Birim Nöbet Slotları & Akıllı Saat Birim Slot Tablosu, Başlangıç Saati & Süre Girişi Departmanın vardiyalarını ve gerekli personel sayılarını belirlemek. Başlangıç saati + Süre = Bitiş saati akıllı hesaplayıcı ile otomatik üretilir; gece yarısı devrinde 24 saat modülü uygulanır. Slot oluştururken. Departman Sorumlusu Birim Kuralı Kopyalama Butonu Birim Kuralını Kopyala (Mor Buton) Bir birimin kurallarını başka bir birime saniyeler içinde çoğaltmak. Kaynak birimdeki slotları hedef birime aktarır. Hedef birimdeki eski slotlar temizlenerek kaynak slotlar sıfırdan yazılır. Yeni birim yapılandırırken. Sistem Yöneticisi Personel Talepleri & Mazeretler Talepler Listesi & İsteği Onayla / Reddet Butonları Personelin mazeret, istek, eğitim ve FM taleplerini yönetmek. Talepler listelenir; amir tarafından [İsteği Onayla] veya [İsteği Reddet] butonlarıyla onaylanır. Onaylı talepler nöbet dağıtım motoruna aktarılır. Ay öncesi talep döneminde. Personel, Nöbet Amiri Özel Sağlık ve Hukuki Kısıtlar Personel Kısıt Listesi & Kısıt"
  },
  {
    "id": "07_nobet_ayarlari_ve_kisit_hiyerarsisi#myth-buster",
    "title": "Saha Mit Avcısı: \"50 Yaşını veya 25 Hizmet Yılını Dolduran Personele Hiçbir Şekilde Gece Nöbeti Yazılamaz mı?\" — Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html#myth-buster",
    "summary": "Saha Mit Avcısı: \"50 Yaşını veya 25 Hizmet Yılını Dolduran Personele Hiçbir Şekilde Gece Nöbeti Yazılamaz mı?\" En Sık Karşılaşılan Nöbet Dağıtım Yanılgısı Yanlış İnanış: \"Personel 50 yaşını geçti veya 25 yıllık memur old",
    "headings": [
      "Saha Mit Avcısı: \"50 Yaşını veya 25 Hizmet Yılını Dolduran Personele Hiçbir Şekilde Gece Nöbeti Yazılamaz mı?\"",
      "Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi"
    ],
    "content": "Saha Mit Avcısı: \"50 Yaşını veya 25 Hizmet Yılını Dolduran Personele Hiçbir Şekilde Gece Nöbeti Yazılamaz mı?\" En Sık Karşılaşılan Nöbet Dağıtım Yanılgısı Yanlış İnanış: \"Personel 50 yaşını geçti veya 25 yıllık memur oldu; kanunen gece nöbeti yazılması kesinlikle yasaktır, servis kilitlense bile sisteme gece nöbeti eklenemez.\" Doğru Gerçek: HAYIR, MUTLAK BİR YASAK DEĞİLDİR. 50 yaş veya 25 hizmet yılı kriteri, gebe/emziren personeldeki gibi mutlak bir kanuni yasaklama değil; kurum içi koruyucu bir öncelik politikasıdır . RADPYS optimizasyon motoru bu personele öncelikli olarak gündüz vardiyaları tahsis eder. Ancak serviste açık nöbet slotu kalması, personel yetersizliği veya personelin aylık zorunlu çalışma süresini dolduramaması gibi durumlarda algoritma bu kısıtı otomatik olarak esneterek gece nöbeti atayabilir . Personelin rızası ve amir onayıyla da nöbet planlanabilir."
  },
  {
    "id": "07_nobet_ayarlari_ve_kisit_hiyerarsisi#workflow",
    "title": "Kural Değerlendirme ve Kısıt Çözümleme Akış Şeması — Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html#workflow",
    "summary": "Kural Değerlendirme ve Kısıt Çözümleme Akış Şeması Hiyerarşik kural piramidinin nöbet dağıtım motoru tarafından değerlendirilme sırası ve esneklik kontrolleri. Hiyerarşik Kural & Çözümleme Mantığı (3 Aşamalı Akış) 1:1 Do",
    "headings": [
      "Kural Değerlendirme ve Kısıt Çözümleme Akış Şeması",
      "Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi"
    ],
    "content": "Kural Değerlendirme ve Kısıt Çözümleme Akış Şeması Hiyerarşik kural piramidinin nöbet dağıtım motoru tarafından değerlendirilme sırası ve esneklik kontrolleri. Hiyerarşik Kural & Çözümleme Mantığı (3 Aşamalı Akış) 1:1 Doğal Ölçek flowchart TB subgraph S1 [\"1. AŞAMA: KURAL PİRAMİDİ (HİYERARŞİK ÖNCELİK SIRASI)\"] direction LR A([\"Nöbet Dağıtım Motoru Başlatılır\"]) --> B{\"Birim + Hizmet Sınıfı Özel Kuralı Var mı?\"} B -->|Evet: Öncelik 1| C[\"Birim + Sınıf Kuralı Uygulanır\"] B -->|Hayır| D{\"Yalnızca Birime Özel Kural Var mı?\"} D -->|Evet: Öncelik 2| E[\"Birim Özel Kuralı Uygulanır\"] D -->|Hayır| F{\"Hizmet Sınıfı Genel Kuralı?\"} F -->|Evet: Öncelik 3| G[\"Hizmet Sınıfı Kuralı Uygulanır\"] F -->|Hayır: Öncelik 4| H[\"Temel Genel Ayarlar Baz Alınır\"] end subgraph S2 [\"2. AŞAMA: ÖZEL SAĞLIK, YAŞ VE KISIT DENETİMİ\"] direction LR I{\"Personel Kısıt Durumu\"} I -->|Gebelik / Doz Aşımı| J[\"KESİN YASAK Gece Nöbeti ve FM Kapatılır\"] I -->|Emzirme / Sendika| K[\"Yasal Saat İndirimi (Günde 1.5s / 3s / 4s)\"] I -->|50 Yaş / 25 Yıl Kıdem| L{\"Açık Slot veya Eksik Mesai Var mı?\"} L -->|Evet: Hizmet İhtiyacı| M[\"Kısıt Otomatik Esnetilir Gece Nöbeti Verilebilir\"] L -->|Hayır: Yeterli Personel| N[\"Koruma Devrede Yalnızca Gündüz Nöbeti\"] end subgraph S3 [\"3. AŞAMA: FAZLA MESAİ TAVANI VE YÖNETİCİ ONAYI\"] direction LR O{\"Aylık Fazla Mesai 60 Saatten Fazla mı?\"} O -->|Yönetici Onayı Var| P[\"Esnek FM Onaylanır Yasal Tavan: 130 Saat\"] O -->|Onay Yok| Q[\"Kurumsal Tavan Uygulanır Maksimum: 60 Saat\"] end C & E & G & H ==> I J & K & M & N ==> O classDef start fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff; classDef success fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff; classDef danger fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff; classDef warning fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff; classDef purple fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff; classDef info fill:#0284c7,stroke:#0369a1,stroke-width:2px,color:#fff; class A start; class C,E,G success; class J danger; class M,L warning; class P purple; class Q,H info; 1 Öncelik Piramidi Öncelik Sırası: Birim+Sınıf Birim Özel Hizmet Sınıfı Temel Ayar. Algoritma eşleştiği ilk kuralı uygular; üst basamak altı ezer. 2 Kısıtlar & Esnetme Sağlık Koruması: Gebe veya Doz Aşımında gece/FM mutlak yasaktır . 50 yaş / 25 yıl kıdemde ise açık slot kalırsa otomatik esnetilir. 3 Fazla Mesai Tavanı Tavan ve Onay: Kurumsal üst sınır 60 saattir. Yönetici yazılı onayıyla yasal üst tavan olan 130 saate kadar esn"
  },
  {
    "id": "07_nobet_ayarlari_ve_kisit_hiyerarsisi#screenshots",
    "title": "️ Arayüz Ekran Görünümleri — Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html#screenshots",
    "summary": "️ Arayüz Ekran Görünümleri Temel ayarlar, kural piramidi bilgi notu ve birim slot yönetim paneli. ️ Ekran Konumu: Nöbet Yönetimi > Nöbet Ayarları ve Kurallar > Temel Ayarlar Kısıt Hiyerarşisi, FM Sınırı & Muafiyetler Yas",
    "headings": [
      "️ Arayüz Ekran Görünümleri",
      "Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi"
    ],
    "content": "️ Arayüz Ekran Görünümleri Temel ayarlar, kural piramidi bilgi notu ve birim slot yönetim paneli. ️ Ekran Konumu: Nöbet Yönetimi > Nöbet Ayarları ve Kurallar > Temel Ayarlar Kısıt Hiyerarşisi, FM Sınırı & Muafiyetler Yasal Bilgilendirme: Bu görseldeki sayısal katsayılar ve muafiyet eşikleri test ortamında yapılandırılmış simülasyon parametreleridir. ️ Ekran Konumu: Nöbet Ayarları > Birim Kuralları Sekmesi Vardiya Slotları, Akıllı Saat & Kural Kopyalama Yasal Bilgilendirme: Departman vardiya slotları ve çalışma saatleri hastane organizasyon şemasına göre örneklendirilmiştir."
  },
  {
    "id": "07_nobet_ayarlari_ve_kisit_hiyerarsisi#step-by-step",
    "title": "Adım Adım İşlem Rehberi — Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html#step-by-step",
    "summary": "Adım Adım İşlem Rehberi Saha operasyonlarında en sık kullanılan 5 ana işlemin uygulama adımları. 1 Temel Nöbet Parametrelerini ve Muafiyetleri Belirleme Sol menüden [Nöbet Yönetimi] > [Nöbet Ayarları ve Kurallar] ekranın",
    "headings": [
      "Adım Adım İşlem Rehberi",
      "Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi"
    ],
    "content": "Adım Adım İşlem Rehberi Saha operasyonlarında en sık kullanılan 5 ana işlemin uygulama adımları. 1 Temel Nöbet Parametrelerini ve Muafiyetleri Belirleme Sol menüden [Nöbet Yönetimi] > [Nöbet Ayarları ve Kurallar] ekranını açın. [Temel Ayarlar] sekmesinde klinik çalışma disiplinini belirleyin: Ayda Max Hafta Sonu / Bayram Nöbeti: Ayda en fazla kaç hafta sonu (örn: 4) ve bayram nöbeti (örn: 2) tutulabileceğini girin. Maksimum Fazla Mesai Süresi: Temel tavanı belirleyin (örn: 60 saat). (Acil durumlarda yönetici onayıyla esnetilebilir.) Muafiyet Kriterleri: Yaş sınırı (50) ve hizmet yılı (25) değerlerini kaydedin. Sağ alttaki yeşil [Temel Ayarları Kaydet] butonuna basın ve onaylayın. 2 Departman Nöbet Slotu Tanımlama ve Akıllı Saat Hesabı Üst sekme çubuğundan [Birim Kuralları] sekmesine geçin. Sol üstteki açılır kutudan ilgili departmanı (Örn: Acil Radyoloji) seçin. Alt kısımdaki Vardiya Tanımlama panelinde: Nöbet Adı & Kodu: \"Acil Gece\" / \"ACL_GECE\" yazın. Başlangıç & Süre: Başlangıç saatini 20:00 ve süreyi 12 saat yaptığınızda, akıllı saat motoru bitiş saatini otomatik olarak 08:00 yapar. Nöbetçi Sayısı: Bu slotta aynı anda kaç teknisyenin görev yapacağını belirleyin. Gün Kısıtı: \"Her Gün\", \"Sadece Hafta İçi\" veya \"Sadece Hafta Sonu\" seçeneklerinden birini belirleyin. [Birim Kuralı Ekle] butonuna tıklayarak slotu sisteme kaydedin. 3 Birim Kuralını Başka Birime Kopyalama (Slot Silinme Uyarılı) [Birim Kuralları] sekmesindeyken araç çubuğundaki mor [+ Birim Kuralını Kopyala] butonuna basın. Açılan pencerede Kaynak Birim (kuralları hazır olan) ve Hedef Birim seçimini yapın. ÖNEMLİ UYARI: Hedef birimde daha önceden tanımlanmış tüm slotlar temizlenerek kaynak birimdeki slotlar sıfırdan oluşturulacaktır. Ekrana gelen onay mesajında \"Evet\" dediğinizde tüm vardiya yapısı hedef birime saniyeler içinde kopyalanır. 4 Personel Nöbet İsteklerini (Mazeret / İstek) İnceleme ve Onaylama [Personel Talepleri] sekmesine geçin ve ilgili yıl/ay filtresini seçin. Personellerin ilettiği talepleri (Nöbet Yazılmasın, Nöbet Yazılsın, Eğitim Kısıtı, Fazla Mesai) tabloda inceleyin. İlgili talebin satırını seçin: Talebi kabul etmek için yeşil [İsteği Onayla] butonuna tıklayın. Talebi geri çevirmek için kırmızı [İsteği Reddet] butonuna tıklayın. Onaylanan talepler, nöbet dağıtım motoru otomatik plan oluştururken birinci öncelikle dikkate alınır. 5 Bireysel Sağlık ve Yasal Kısıtları (Gebe/Emzirme/Sendika) Tanımlama [Personel Özel Kısıtları] sekmesine gelin ve personeli arama kutusundan bul"
  },
  {
    "id": "07_nobet_ayarlari_ve_kisit_hiyerarsisi#faq",
    "title": "Sıkça Sorulan Sorular (SSS) — Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html#faq",
    "summary": "Sıkça Sorulan Sorular (SSS) Kural piramidi, dinlenme süreleri ve kısıt hiyerarşisi hakkında en çok merak edilen konular. Birim kuralı ile genel temel ayarlar çakışırsa hangi kural geçerli olur? RADPYS Kural Piramidi uyar",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "Nöbet Ayarları, Kural Piramidi & Kısıt Hiyerarşisi"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) Kural piramidi, dinlenme süreleri ve kısıt hiyerarşisi hakkında en çok merak edilen konular. Birim kuralı ile genel temel ayarlar çakışırsa hangi kural geçerli olur? RADPYS Kural Piramidi uyarınca \"En Özel Kural Daima Önceliklidir\" . Birim kuralı, genel temel ayarlardan daha spesifik bir hiyerarşik kademede yer aldığından genel ayarı ezer (override eder). Örneğin Genel Ayarlarda ardışık nöbet 2 gün iken, Acil Radyoloji biriminde 1 gün seçilmişse Acil teknisyenlerine 1 gün kuralı uygulanır. Aylık fazla mesai sınırı 60 saati geçerse sistem ne yapar? Kurumsal temel tavan 60 saattir. Ancak acil servis ihtiyaçları veya olağanüstü personel eksikliklerinde bu sınır katı bir engel değildir; Yönetici Onayı ile esnetilebilir . Nihai aşılmaz tavan ise kanuni üst sınır olan 130 saattir. 130 saati aşan hiçbir fazla mesai ataması yasal olarak yapılamaz. Birim kuralını başka bir birime kopyaladığımda eski nöbet slotları kaybolur mu? Evet. Mükerrer nöbet tanımlarını ve vardiya saat çakışmalarını önlemek amacıyla hedef birimin mevcut tüm slotları silinir ve kaynak birimdeki slotlar sıfırdan oluşturulur. Bu nedenle kopyalama öncesi hedef birimin incelenmesi önerilir. Nöbet bittikten sonra en az kaç saat dinlenme verilmesi zorunludur? RADPYS sağlık standardı uyarınca bir nöbetin bitiş saati ile bir sonraki nöbetin başlangıç saati arasında en az 24 saatlik kesintisiz dinlenme süresi bulunması zorunludur. Gece nöbetleri arasında ise hekim ve teknisyenin biyolojik toparlanması için asgari 48 saatlik aralık hedeflenir."
  },
  {
    "id": "08_nobet_hazirlik_ve_solver_motoru",
    "title": "Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "08_nobet_hazirlik_ve_solver_motoru.html",
    "summary": "Aylık fiili çalışma parametrelerinin hazırlanması, arka plan iş parçacığında çalışan kural tabanlı optimizasyon motoru, interaktif çizelge matrisi, kural ihlal onay mekanizması, otomatik anlık görüntü (snapshot) koruması ve kesim tarihli kısmi plan iptal rehbe",
    "headings": [
      "Hızlı Reçete: Otomatik Nöbet Dağıtımı, Matris Yönetimi ve Kısmi İptal",
      "5N1K Kural ve Arayüz Çözümleme Tablosu",
      "Saha Mit Avcısı: \"Otomatik Dağıtım Motoru Çalıştırıldığında Mevcut Taslağım Kalıcı Olarak Silinir mi?\"",
      "Nöbet Hazırlık, Çözümleme ve Yayın Döngüsü Şeması",
      "️ Arayüz Ekran Görünümleri",
      "Adım Adım İşlem Rehberi",
      "Yeni Bir Nöbet Planı Başlatma ve Hazırlık Parametrelerini Onaylama",
      "Solver Dağıtım Motorunu Çalıştırma ve Otomatik Çizelgeleme",
      "Çizelge Matrisinde Manuel Değişiklik ve Kural İhlal Onayı Verme",
      "Farklı Birimden Geçici Personel Görevlendirme",
      "Ay Ortasında Kısmi Plan İptali Uygulama (3 Gün Sınırı & Sudo Doğrulama)",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 3: Nöbet Dağıtım Motoru 08. Nöbet Hazırlık & Solver Modül 08 ⭐ Tier 3: Algoritmik Karar / Solver Motoru NDK 20 mSv & SKS 6.1 Uyumlu Otomatik Snapshot Güvenlik Kalkanı Tahmini Okuma: 7 Dakika | Sürüm: RADPYS v4.2 Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru Aylık fiili çalışma parametrelerinin hazırlanması, arka plan iş parçacığında çalışan kural tabanlı optimizasyon motoru, interaktif çizelge matrisi, kural ihlal onay mekanizması, otomatik anlık görüntü (snapshot) koruması ve kesim tarihli kısmi plan iptal rehberi. Hızlı Reçete: Otomatik Nöbet Dağıtımı, Matris Yönetimi ve Kısmi İptal Parametre sihirbazı, solver motoru, kural denetimi ve güvenli geri alma döngüsü 1. İstenen Sonuç Radyasyon maruziyet sınırlarına (35s/40s) ve klinik ihtiyaçlara tam uyumlu, adil ve çakışmasız aylık nöbet çizelgesinin saniyeler içinde üretilmesi. 2. Yapılacak İşlem [Yeni Plan] ile ayı ve birimi seçip [Hazırlık Sihirbazı] parametrelerini onaylayın; [Otomatik Olustur] ile motoru çalıştırın; [Çizelgeyi Düzenle] ile matrisi yönetin. 3. Sistem Etkisi Mevcut taslak JSON olarak otomatik yedeklenir; solver arka planda koşturulurken UI donmaz; manuel ihlaller denetim izine kaydedilir; kısmi iptalde kesim tarihine kadar geçmiş korunur. ️ Radyasyon Oranı 35s / 40s Standartı Solver Motoru Arka Plan İş Parçacığı ⏱️ Dinlenme Kuralı 24s / 48s Asgari Boşluk ️ Güvenlik Kalkanı Otomatik JSON Snapshot 5N1K Kural ve Arayüz Çözümleme Tablosu Nöbet hazırlık, çizelge düzenleme ve solver motorunda yer alan bileşenlerin işlevleri, çalışma mantıkları ve klinik etki düzeyleri. NE? (Bileşen / İşlem) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? [Yeni Plan] & Hazırlık Sihirbazı Yıl / Ay / Birim Seçimi & Ön Parametre Ekranı İlgili ay için klinik takvim günlerini, resmi tatilleri ve birim kadrosunu hazırlamak. Ayın iş günü sayısını hesaplar; personelin radyasyon çalışma türüne göre (35 saat veya 40 saat) aylık zorunlu mesai hedefini otomatik çıkarır. Her ayın son haftasında. Nöbet Planlama Sorumlusu [Otomatik Olustur] (Solver Motoru) Arka Plan İş Parçacığı ile Otomatik Dağıtım Yüzlerce kısıtı saniyeler içinde matematiksel olarak çözüp sıfır çakışmalı çizelge üretmek. İşlemi arka plan iş parçacığında çalıştırır; ana ekranı kilitlemez. Önce mevcut taslağın otomatik JSON anlık görüntüsünü alır, ardından kural piramidine göre slotları doldurur. Taslak oluşturma aşamasında. Sistem Algoritması Otomatik Snapshot Güvenlik Kalkanı JSON Yedekleme & [Yedekten Taslak Yükle] Kullanıcının manuel yaptığı veya önceki dağıtımlardaki çizelgelerin kaybolmasını önlemek. Otomatik dağıtım başlamadan hemen önce mevcut plan durumunu güvenli dizine zaman damgasıyla kaydeder. İstenildiğinde [Yedekten Taslak Yükle] ile tek tıkla eski haline döndürülür. Her otomatik oluşturma öncesinde. Otomatik Koruma Çizelge Matrisi & Renk Kodları Gündüz, Gece, İzin, Çakışma ve İhlal Göstergeleri Vardiyaların, izinlerin ve kural ihlallerinin bir bakışta görsel olarak ayrıştırılmasını sağlamak. Gündüz mavi, Gece lacivert, İzin açık yeşil, Mazeret mor, İhlal kırmızı arka planla boyanır. Başka birimle çakışma varsa hücre sarı/amber vurgulanır. Çizelge inceleme ve düzenlemede. Kullanıcı & Amiri Manuel Hücre Düzenleme & İhlal Onayı Açılır Kutu Seçimi & [Kural ihlallerini onaylıyorum] Zorunlu klinik hallerde yöneticinin kural dışı personel nöbet ataması yapabilmesini sağlamak. Hücre çift tıklandığında açılır listeden personel seçilir. Seçilen personel dinlenme veya izin kuralını ihlal ediyorsa sistem uyarı verir; yönetici onay kutusunu işaretlemedikçe kayda izin vermez. İşlem denetim izine loglanır. Manuel müdahale anında. Yetkili Yönetici [Geçici Personel Ekle] Farklı Birimden Ay / Plan Bazlı Görevlendirme Birim içi personel açığını başka departmandan ödünç personelle kapatmak. Kalıcı kadro yapısını bozmadan, personeli sadece o aya ve o plana mahsus geçici nöbetçi olarak matris tablosuna satır olarak ekler. Kadro eksikliği durumunda. Birim Sorumlusu [Ay Ortası Plan İptali] & 3 Gün Kuralı Kesim Tarihi, 20 Karakter Gerekçe & Yönetici Şifresi Yayınlanmış planda ay ortası krizlerinde geçmiş gerçekleşen nöbetleri koruyarak geleceği iptal etmek. Kesim tarihi seçilir. Kesim tarihinden önceki fiili nöbetler korunur; sonraki nöbetler iptal edilir. Kesim tarihi bugünden en fazla 3 gün geriye seçilebilir. 20+ karakter gerekçe ve yönetici şifresi zorunludur. Olağanüstü acil iptal hallerinde. Yönetici (Sudo Doğrulama) Saha Mit Avcısı: \"Otomatik Dağıtım Motoru Çalıştırıldığında Mevcut Taslağım Kalıcı Olarak Silinir mi?\" En Sık Karşılaşılan Solver ve Çizelge Yanılgısı Yanlış İnanış: \"Üzerinde günlerce elle düzenleme yaptığım taslak planda yanlışlıkla [Otomatik Olustur] butonuna basarsam tüm manuel çalışmalarım üzerine yazılır, silinir ve eski halini asla geri getiremem.\" Doğru Gerçek: HAYIR, ASLA KAYBOLMAZ. RADPYS Güvenlik Kalkanı uyarınca, [Otomatik Olustur] butonuna tıklandığı milisaniyede sistem mevcut çizelgenin eksiksiz bir JSON anlık görüntüsünü (snapshot) otomatik olarak arşiv dizinine depolar. Dağıtım motorunun ürettiği yeni sonucu beğenmezseniz veya önceki taslağınıza dönmek isterseniz, çizelge ekranındaki [Yedekten Taslak Yükle] butonuna tıklayarak saniyeler içinde çalışmanızı kurtarabilirsiniz. Nöbet Hazırlık, Çözümleme ve Yayın Döngüsü Şeması Yeni plan oluşturmadan solver motoru optimizasyonuna, matris denetiminden ay ortası kısmi iptal yönetimine kadar tüm yaşam döngüsü. graph TD A([\"Planlama Dönemi Başlar\"]) --> B[\"Yeni Plan Dialogu Açılır\"] B --> C[\"Yıl, Ay ve Klinik Birim Seçilir\"] C --> D[\"Hazırlık Sihirbazı: İş Günü & Hedef Mesai 35s/40s Hesaplanır\"] %% Otomatik Dağıtım Döngüsü D --> E{\"Dağıtım Yöntemi Seçimi\"} E -->|\"Otomatik Dağıtım\"| F[\"Otomatik Oluştur Tıklanır\"] F --> G[\"GÜVENLİK KALKANI: Mevcut Durumun JSON Snapshot Yedeği Alınır\"] G --> H[\"Solver Motoru Arka Plan İş Parçacığında Çalışır - QThread\"] H --> I[\"Kural Piramidi & Dinlenme Kontrolleri Uygulanır\"] E -->|\"Manuel Giriş / Boş Taslak\"| J[\"Boş Çizelge Matrisi Açılır\"] I --> J %% Çizelg"
  },
  {
    "id": "08_nobet_hazirlik_ve_solver_motoru#quick-recipe",
    "title": "Hızlı Reçete: Otomatik Nöbet Dağıtımı, Matris Yönetimi ve Kısmi İptal — Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "08_nobet_hazirlik_ve_solver_motoru.html#quick-recipe",
    "summary": "Hızlı Reçete: Otomatik Nöbet Dağıtımı, Matris Yönetimi ve Kısmi İptal Parametre sihirbazı, solver motoru, kural denetimi ve güvenli geri alma döngüsü 1. İstenen Sonuç Radyasyon maruziyet sınırlarına (35s/40s) ve klinik i",
    "headings": [
      "Hızlı Reçete: Otomatik Nöbet Dağıtımı, Matris Yönetimi ve Kısmi İptal",
      "Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru"
    ],
    "content": "Hızlı Reçete: Otomatik Nöbet Dağıtımı, Matris Yönetimi ve Kısmi İptal Parametre sihirbazı, solver motoru, kural denetimi ve güvenli geri alma döngüsü 1. İstenen Sonuç Radyasyon maruziyet sınırlarına (35s/40s) ve klinik ihtiyaçlara tam uyumlu, adil ve çakışmasız aylık nöbet çizelgesinin saniyeler içinde üretilmesi. 2. Yapılacak İşlem [Yeni Plan] ile ayı ve birimi seçip [Hazırlık Sihirbazı] parametrelerini onaylayın; [Otomatik Olustur] ile motoru çalıştırın; [Çizelgeyi Düzenle] ile matrisi yönetin. 3. Sistem Etkisi Mevcut taslak JSON olarak otomatik yedeklenir; solver arka planda koşturulurken UI donmaz; manuel ihlaller denetim izine kaydedilir; kısmi iptalde kesim tarihine kadar geçmiş korunur. ️ Radyasyon Oranı 35s / 40s Standartı Solver Motoru Arka Plan İş Parçacığı ⏱️ Dinlenme Kuralı 24s / 48s Asgari Boşluk ️ Güvenlik Kalkanı Otomatik JSON Snapshot"
  },
  {
    "id": "08_nobet_hazirlik_ve_solver_motoru#5w1h",
    "title": "5N1K Kural ve Arayüz Çözümleme Tablosu — Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "08_nobet_hazirlik_ve_solver_motoru.html#5w1h",
    "summary": "5N1K Kural ve Arayüz Çözümleme Tablosu Nöbet hazırlık, çizelge düzenleme ve solver motorunda yer alan bileşenlerin işlevleri, çalışma mantıkları ve klinik etki düzeyleri. NE? (Bileşen / İşlem) NEDEN? (Amacı) NASIL? (Çalı",
    "headings": [
      "5N1K Kural ve Arayüz Çözümleme Tablosu",
      "Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru"
    ],
    "content": "5N1K Kural ve Arayüz Çözümleme Tablosu Nöbet hazırlık, çizelge düzenleme ve solver motorunda yer alan bileşenlerin işlevleri, çalışma mantıkları ve klinik etki düzeyleri. NE? (Bileşen / İşlem) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? [Yeni Plan] & Hazırlık Sihirbazı Yıl / Ay / Birim Seçimi & Ön Parametre Ekranı İlgili ay için klinik takvim günlerini, resmi tatilleri ve birim kadrosunu hazırlamak. Ayın iş günü sayısını hesaplar; personelin radyasyon çalışma türüne göre (35 saat veya 40 saat) aylık zorunlu mesai hedefini otomatik çıkarır. Her ayın son haftasında. Nöbet Planlama Sorumlusu [Otomatik Olustur] (Solver Motoru) Arka Plan İş Parçacığı ile Otomatik Dağıtım Yüzlerce kısıtı saniyeler içinde matematiksel olarak çözüp sıfır çakışmalı çizelge üretmek. İşlemi arka plan iş parçacığında çalıştırır; ana ekranı kilitlemez. Önce mevcut taslağın otomatik JSON anlık görüntüsünü alır, ardından kural piramidine göre slotları doldurur. Taslak oluşturma aşamasında. Sistem Algoritması Otomatik Snapshot Güvenlik Kalkanı JSON Yedekleme & [Yedekten Taslak Yükle] Kullanıcının manuel yaptığı veya önceki dağıtımlardaki çizelgelerin kaybolmasını önlemek. Otomatik dağıtım başlamadan hemen önce mevcut plan durumunu güvenli dizine zaman damgasıyla kaydeder. İstenildiğinde [Yedekten Taslak Yükle] ile tek tıkla eski haline döndürülür. Her otomatik oluşturma öncesinde. Otomatik Koruma Çizelge Matrisi & Renk Kodları Gündüz, Gece, İzin, Çakışma ve İhlal Göstergeleri Vardiyaların, izinlerin ve kural ihlallerinin bir bakışta görsel olarak ayrıştırılmasını sağlamak. Gündüz mavi, Gece lacivert, İzin açık yeşil, Mazeret mor, İhlal kırmızı arka planla boyanır. Başka birimle çakışma varsa hücre sarı/amber vurgulanır. Çizelge inceleme ve düzenlemede. Kullanıcı & Amiri Manuel Hücre Düzenleme & İhlal Onayı Açılır Kutu Seçimi & [Kural ihlallerini onaylıyorum] Zorunlu klinik hallerde yöneticinin kural dışı personel nöbet ataması yapabilmesini sağlamak. Hücre çift tıklandığında açılır listeden personel seçilir. Seçilen personel dinlenme veya izin kuralını ihlal ediyorsa sistem uyarı verir; yönetici onay kutusunu işaretlemedikçe kayda izin vermez. İşlem denetim izine loglanır. Manuel müdahale anında. Yetkili Yönetici [Geçici Personel Ekle] Farklı Birimden Ay / Plan Bazlı Görevlendirme Birim içi personel açığını başka departmandan ödünç personelle kapatmak. Kalıcı kadro yapısını bozmadan, personeli sadece o aya ve o plana mahsus geçici nöbetçi olarak matris tablosuna satır olarak ek"
  },
  {
    "id": "08_nobet_hazirlik_ve_solver_motoru#myth-buster",
    "title": "Saha Mit Avcısı: \"Otomatik Dağıtım Motoru Çalıştırıldığında Mevcut Taslağım Kalıcı Olarak Silinir mi?\" — Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "08_nobet_hazirlik_ve_solver_motoru.html#myth-buster",
    "summary": "Saha Mit Avcısı: \"Otomatik Dağıtım Motoru Çalıştırıldığında Mevcut Taslağım Kalıcı Olarak Silinir mi?\" En Sık Karşılaşılan Solver ve Çizelge Yanılgısı Yanlış İnanış: \"Üzerinde günlerce elle düzenleme yaptığım taslak plan",
    "headings": [
      "Saha Mit Avcısı: \"Otomatik Dağıtım Motoru Çalıştırıldığında Mevcut Taslağım Kalıcı Olarak Silinir mi?\"",
      "Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru"
    ],
    "content": "Saha Mit Avcısı: \"Otomatik Dağıtım Motoru Çalıştırıldığında Mevcut Taslağım Kalıcı Olarak Silinir mi?\" En Sık Karşılaşılan Solver ve Çizelge Yanılgısı Yanlış İnanış: \"Üzerinde günlerce elle düzenleme yaptığım taslak planda yanlışlıkla [Otomatik Olustur] butonuna basarsam tüm manuel çalışmalarım üzerine yazılır, silinir ve eski halini asla geri getiremem.\" Doğru Gerçek: HAYIR, ASLA KAYBOLMAZ. RADPYS Güvenlik Kalkanı uyarınca, [Otomatik Olustur] butonuna tıklandığı milisaniyede sistem mevcut çizelgenin eksiksiz bir JSON anlık görüntüsünü (snapshot) otomatik olarak arşiv dizinine depolar. Dağıtım motorunun ürettiği yeni sonucu beğenmezseniz veya önceki taslağınıza dönmek isterseniz, çizelge ekranındaki [Yedekten Taslak Yükle] butonuna tıklayarak saniyeler içinde çalışmanızı kurtarabilirsiniz."
  },
  {
    "id": "08_nobet_hazirlik_ve_solver_motoru#workflow",
    "title": "Nöbet Hazırlık, Çözümleme ve Yayın Döngüsü Şeması — Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "08_nobet_hazirlik_ve_solver_motoru.html#workflow",
    "summary": "Nöbet Hazırlık, Çözümleme ve Yayın Döngüsü Şeması Yeni plan oluşturmadan solver motoru optimizasyonuna, matris denetiminden ay ortası kısmi iptal yönetimine kadar tüm yaşam döngüsü. graph TD A([\"Planlama Dönemi Başlar\"])",
    "headings": [
      "Nöbet Hazırlık, Çözümleme ve Yayın Döngüsü Şeması",
      "Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru"
    ],
    "content": "Nöbet Hazırlık, Çözümleme ve Yayın Döngüsü Şeması Yeni plan oluşturmadan solver motoru optimizasyonuna, matris denetiminden ay ortası kısmi iptal yönetimine kadar tüm yaşam döngüsü. graph TD A([\"Planlama Dönemi Başlar\"]) --> B[\"Yeni Plan Dialogu Açılır\"] B --> C[\"Yıl, Ay ve Klinik Birim Seçilir\"] C --> D[\"Hazırlık Sihirbazı: İş Günü & Hedef Mesai 35s/40s Hesaplanır\"] %% Otomatik Dağıtım Döngüsü D --> E{\"Dağıtım Yöntemi Seçimi\"} E -->|\"Otomatik Dağıtım\"| F[\"Otomatik Oluştur Tıklanır\"] F --> G[\"GÜVENLİK KALKANI: Mevcut Durumun JSON Snapshot Yedeği Alınır\"] G --> H[\"Solver Motoru Arka Plan İş Parçacığında Çalışır - QThread\"] H --> I[\"Kural Piramidi & Dinlenme Kontrolleri Uygulanır\"] E -->|\"Manuel Giriş / Boş Taslak\"| J[\"Boş Çizelge Matrisi Açılır\"] I --> J %% Çizelge Matrisi & Düzenleme J --> K[\"Çizelge Matrisinde Renk Kodlu İnceleme\"] K --> L{\"Kural İhlali veya Çakışma Var mı?\"} L -->|\"Evet: Kırmızı/Amber Alarm\"| M[\"Hücreye Çift Tıklanır - Değişiklik Yapılır\"] M --> N{\"Yönetici İhlali Onaylıyor mu?\"} N -->|Evet| O[\"Kural İhlallerini Onaylıyorum İşaretlenir\"] O --> P[\"Yönetici ID, Tarih ve İhlal Nedeni Denetim İzine Kaydedilir\"] N -->|Hayır| M L -->|\"Hayır: Temiz Çizelge\"| Q[\"Çizelge Önizleme & İstatistik Kontrolü\"] P --> Q %% Yayınlama ve Kısmi İptal Q --> R[\"Onaya Sun / Yayınla Butonu\"] R --> S([\"Nöbet Çizelgesi Yayında - Mobil Portala Düşer\"]) S --> T{\"Ay Ortasında Kriz / Revizyon İhtiyacı?\"} T -->|\"Hayır: Ay Tamamlanır\"| U([\"Dönem Kapanışı ve Bordroya Aktarım\"]) T -->|\"Evet: Acil Müdahale\"| V[\"Ay Ortası Plan İptali Dialogu Açılır\"] V --> W[\"Kesim Tarihi Seçilir - En Fazla 3 Gün Geriye Limitli\"] W --> X[\"20+ Karakter Gerekçe & Yönetici Şifresi Girilir\"] X --> Y[\"Geçmiş Nöbetler Korunur, Kalan Gelecek Slotlar İptal Edilir\"] Y --> Z([\"Kısmi İptal Tamamlandı - Revizyon Taslağı Açılabilir\"]) style A fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff style F fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff style G fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff style H fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff style O fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff style R fill:#059669,stroke:#047857,stroke-width:2px,color:#fff style V fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff style Y fill:#e11d48,stroke:#be123c,stroke-width:2px,color:#fff"
  },
  {
    "id": "08_nobet_hazirlik_ve_solver_motoru#screenshots",
    "title": "️ Arayüz Ekran Görünümleri — Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "08_nobet_hazirlik_ve_solver_motoru.html#screenshots",
    "summary": "️ Arayüz Ekran Görünümleri Nöbet plan listesi, çizelge düzenleme matrisi, istatistiki önizleme ve kısmi iptal diyalogları. ️ Ekran Konumu: Nöbet Yönetimi > Nöbet Planları Ana Ekranı Aylık Planlar, Durum Rozetleri & Eylem",
    "headings": [
      "️ Arayüz Ekran Görünümleri",
      "Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru"
    ],
    "content": "️ Arayüz Ekran Görünümleri Nöbet plan listesi, çizelge düzenleme matrisi, istatistiki önizleme ve kısmi iptal diyalogları. ️ Ekran Konumu: Nöbet Yönetimi > Nöbet Planları Ana Ekranı Aylık Planlar, Durum Rozetleri & Eylemler Yasal Bilgilendirme: Görseldeki birim adları, personel sayıları ve plan durumları test ortamında yapılandırılmış simülasyon verileridir. ️ Ekran Konumu: Nöbet Planı > [Çizelgeyi Düzenle] Ekranı İnteraktif Çizelge Matrisi, Renk Kodları & Solver Kontrolü Yasal Bilgilendirme: Matris hücrelerindeki vardiya atamaları ve renk göstergeleri mevzuat kısıtlarının doğrulanması amacıyla örneklendirilmiştir. ️ Ekran Konumu: Nöbet Planı > [Önizleme] Ekranı Personel Saat Dağılımı, Hafta Sonu & Fazla Mesai Analizi Yasal Bilgilendirme: Önizleme panelindeki adalet puanları ve çalışma saatleri analitik dengeleme motorunun sonuçlarını yansıtır. ️ Ekran Konumu: Nöbet Planı > [Ay Ortası Plan İptali] Ekranı Kesim Tarihi, 3 Gün Sınırı & Yönetici Şifre Doğrulaması Yasal Bilgilendirme: Kısmi plan iptali işlemi geçmiş nöbetlerin hak ediş ve fiili hizmet puanlarını kesinlikle silmez; yalnızca gelecek günleri iptal eder."
  },
  {
    "id": "08_nobet_hazirlik_ve_solver_motoru#step-by-step",
    "title": "Adım Adım İşlem Rehberi — Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "08_nobet_hazirlik_ve_solver_motoru.html#step-by-step",
    "summary": "Adım Adım İşlem Rehberi Saha operasyonlarında nöbet hazırlık ve solver motorunun en sık kullanılan 5 ana senaryosu. 1 Yeni Bir Nöbet Planı Başlatma ve Hazırlık Parametrelerini Onaylama Sol menüden [Nöbet Yönetimi] > [Nöb",
    "headings": [
      "Adım Adım İşlem Rehberi",
      "Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru"
    ],
    "content": "Adım Adım İşlem Rehberi Saha operasyonlarında nöbet hazırlık ve solver motorunun en sık kullanılan 5 ana senaryosu. 1 Yeni Bir Nöbet Planı Başlatma ve Hazırlık Parametrelerini Onaylama Sol menüden [Nöbet Yönetimi] > [Nöbet Planları] ekranına gidin. Araç çubuğundaki yeşil [+ Yeni Plan] butonuna tıklayın. Açılan pencerede planlanacak Yıl , Ay ve Klinik Birim (Örn: Girişimsel Radyoloji) seçimini yapın. Sistem takvim analizini otomatik olarak tamamlar: Ayın gün sayısı ve resmi tatil günleri listelenir. Radyasyon personeli için haftalık 35 saat (aylık iş günü × 7 saat) kuralı otomatik hesaplanır. Radyasyon dışı personel için haftalık 40 saat (iş günü × 8 saat) standardı ayrıştırılır. [Planı Oluştur] butonuna basarak taslak plan kaydını oluşturun. 2 Solver Dağıtım Motorunu Çalıştırma ve Otomatik Çizelgeleme Oluşturulan taslak planın satırına tıklayıp [Çizelgeyi Düzenle] butonuna basın. Üst araç çubuğundaki mavi [Otomatik Olustur] butonuna tıklayın. Sistem arka planda aşağıdaki güvenlik ve hesaplama adımlarını işletir: Mevcut çizelgenin zaman damgalı JSON anlık görüntüsü (snapshot) otomatik arşivlenir. Dağıtım motoru ayrı bir arka plan iş parçacığında çalıştırılarak ana ekranın donması önlenir. Önceden onaylanmış personel talepleri ve sağlık kısıtları (gebelik, emzirme, 50 yaş) kilitlenir. Birim slotları kural hiyerarşisine göre en uygun personel kombinasyonlarıyla doldurulur. Optimizasyon tamamlandığında çizelge matrisi otomatik olarak güncellenir ve renk kodlarıyla ekrana gelir. 3 Çizelge Matrisinde Manuel Değişiklik ve Kural İhlal Onayı Verme Matris tablosunda değiştirmek istediğiniz hücreye çift tıklayın. Açılan personel listesinden yeni görevliyi seçin. Eğer seçilen personel o gün izinliyse, 24 saatlik dinlenme süresini doldurmamışsa veya fazla mesai tavanını aşıyorsa sistem kırmızı renkli Kural İhlali Uyarısı görüntüler. Acil klinik zorunluluk nedeniyle bu atamayı yapmak zorundaysanız: Diyalogdaki [Kural ihlallerini onaylıyorum] onay kutusunu işaretleyin. [Kaydet] butonuna basın. Bu işlem sistem tarafından otomatik olarak denetim izine (Audit Trail) yönetici kullanıcı adı, işlem zamanı ve ihlal gerekçesiyle kalıcı olarak kaydedilir. 4 Farklı Birimden Geçici Personel Görevlendirme Çizelge matrisi ekranında araç çubuğundaki [Geçici Personel Ekle] butonuna tıklayın. Kurum genel personel listesinden ilgili teknisyen veya hekimi aratarak seçin. Personelin dahil edileceği plan dönemi onaylandığında, personelin kadrosu kendi ana biriminde kalır; ancak bu ayki çize"
  },
  {
    "id": "08_nobet_hazirlik_ve_solver_motoru#faq",
    "title": "Sıkça Sorulan Sorular (SSS) — Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "08_nobet_hazirlik_ve_solver_motoru.html#faq",
    "summary": "Sıkça Sorulan Sorular (SSS) Nöbet hazırlık, solver optimizasyonu ve kısmi plan iptali hakkında en çok merak edilen sorular. Ay ortasında personel işten ayrılırsa tüm ayın çizelgesini iptal etmek zorunda mıyım? Kesinlikle",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "Nöbet Hazırlık, Çizelge Matrisi & Solver Motoru"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) Nöbet hazırlık, solver optimizasyonu ve kısmi plan iptali hakkında en çok merak edilen sorular. Ay ortasında personel işten ayrılırsa tüm ayın çizelgesini iptal etmek zorunda mıyım? Kesinlikle hayır. RADPYS'nin [Ay Ortası Plan İptali] özelliği tam olarak bu senaryolar için geliştirilmiştir. Seçtiğiniz kesim tarihine kadar tutulmuş olan tüm fiili nöbetler, fazla mesai saatleri ve şua puanları sistemde kalıcı olarak korunur. Yalnızca kesim tarihinden ay sonuna kadar olan gelecek nöbet slotları iptal edilerek yeni revizyon planına imkan tanınır. Geçmişe dönük en fazla kaç gün öncesine iptal kesim tarihi seçebilirim? Sistem güvenlik protokolü gereğince kesim tarihi bugünün tarihinden en fazla 3 gün geriye seçilebilir. Bu kural, geçmişe dönük bordro, fiili hizmet zammı ve nöbet ücreti tahrifatını engellemek amacıyla konulmuş bir yasal denetim kilididir. Kural ihlali içeren bir nöbet atamasını zorunlu olarak onaylarsam hukuki sorumluluk kime aittir? Kural ihlali uyarısına rağmen [Kural ihlallerini onaylıyorum] kutucuğu işaretlendiğinde işlem, onaylayan yöneticinin kullanıcı kimliği (ID), tam tarih/saat damgası ve ihlal edilen kural parametreleriyle birlikte Denetim İzi (Audit Trail) veri tabanına kalıcı olarak mühürlenir. İdari teftişlerde bu kayıtlar resmi kanıt niteliğindedir. Bir personel aynı ay içerisinde başka bir birimde de nöbet tutuyorsa sistem beni uyarır mı? Evet. Çizelge matrisi, personelin diğer departmanlardaki nöbetlerini dinamik olarak sorgular. Personelin başka bir birimde aynı güne nöbeti varsa veya aradaki dinlenme süresi ihlal ediliyorsa ilgili hücre sarı/amber (#FEF3C7) arka plan ile renklendirilir ve hücre ipucunda diğer birimin nöbet detayı gösterilir. Solver dağıtım motoru binlerce permutasyonu çözerken uygulama donar veya kilitlenir mi? Hayır. Solver algoritması ana kullanıcı arayüzü iş parçacığından (Main GUI Thread) bağımsız olarak özel bir arka plan iş parçacığında (QThread) koşturulur. Bu esnada ekranda ilerleme animasyonu akar, arayüz akıcı kalır ve kullanıcı dilerse işlemi güvenle iptal edebilir."
  },
  {
    "id": "09_nobet_devir_ikame_ve_acil_mazeret",
    "title": "Nöbet Devir, İkame & Acil Mazeret Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "09_nobet_devir_ikame_ve_acil_mazeret.html",
    "summary": "Personeller arası P2P nöbet devri ve karşılıklı takas akışı, çok kademeli onay zinciri, acil mazeretlerde akıllı ikame puanlayıcı, nöbet değişim pazaryeri (havuz), gebe personeli radyasyonsuz alana transfer eden 3 adımlı Yönetici Aksiyon Sihirbazı ve eğitim pr",
    "headings": [
      "Hızlı Reçete: Ay Ortası Nöbet Değişimleri, İkame Önerisi ve Gebelik Transferi",
      "5N1K Kural ve Arayüz Çözümleme Tablosu",
      "Saha Mit Avcısı: \"Havuzda 36 Saat Kala Eşleşmeyen Nöbetler Otomatik Olarak Acil Mazerete mi Aktarılır?\"",
      "Devir, İkame, Mazeret ve Aksiyon Akış Şeması",
      "️ Arayüz Ekran Görünümleri",
      "Adım Adım İşlem Rehberi",
      "Personeller Arası P2P Nöbet Devir Talebi Oluşturma",
      "Çok Kademeli Onay Sürecini Yürütme ve Tamamlama",
      "Acil Mazeret Bildirimi ve Toplu Akıllı İkame Atama",
      "Hatalı Mazeretleri Tek Tıkla Geri Alma (Rollback)",
      "Gebe Personel Bildirimi ve Yönetici Aksiyon Sihirbazı",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 3: Nöbet Dağıtım Motoru 09. Nöbet Devir & İkame Modül 09 ⭐ Tier 3: Algoritmik Karar & İkame NDK Gebe Kalkanı & Emniyet Kilidi Yönetici Aksiyon Sihirbazı Tahmini Okuma: 6 Dakika | Sürüm: RADPYS v4.2 Nöbet Devir, İkame & Acil Mazeret Yönetimi Personeller arası P2P nöbet devri ve karşılıklı takas akışı, çok kademeli onay zinciri, acil mazeretlerde akıllı ikame puanlayıcı, nöbet değişim pazaryeri (havuz), gebe personeli radyasyonsuz alana transfer eden 3 adımlı Yönetici Aksiyon Sihirbazı ve eğitim programı revizyon rehberi. Hızlı Reçete: Ay Ortası Nöbet Değişimleri, İkame Önerisi ve Gebelik Transferi P2P devir onayları, acil mazeret yönetimi, havuz kotası ve 3 adımlı yönetici aksiyonu 1. İstenen Sonuç Kesinleşmiş nöbet çizelgelerindeki ay içi mazeret ve takasların mevzuata (NDK, hizmet sınıfı, dinlenme süresi) tam uyumlu, adil ve sahipsiz slot bırakmadan çözülmesi. 2. Yapılacak İşlem P2P devir için [Nöbet Devret] ile talep açın; ani krizlerde [Acil Mazeret] ile ikameleri hesaplayın; gebelikte [Yönetici Aksiyon Merkezi] sihirbazını uygulayın. 3. Sistem Etkisi Gebe personele nöbet devri engellenir; taban saat karşılıksız devredilemez; 3 kademeli onay tamamlanınca çizelge güncellenir; hatalı mazeretler tek tıkla geri alınır. ️ Yasal Kalkan Gebe Nöbet Yasağı ️ Hizmet Sınıfı Eşit Unvanlar Arası ⏱️ 36s Havuz TTL İdari İnisiyatif & Kota Geri Alma Tek Tıkla Mazeret İptali 5N1K Kural ve Arayüz Çözümleme Tablosu Nöbet devri, takas, mazeret, havuz ve yönetici aksiyon merkezindeki kontrollerin işleyiş mantığı. NE? (Bileşen / İşlem) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? [Nöbet Devir Talebi] P2P Nöbet Devir & Takas Penceresi Personelin bir nöbetini meslektaşına devretmesini veya karşılıklı takas etmesini sağlamak. Alan personel açılır menüden seçilir; sağlık kısıtı, gebelik ve hizmet sınıfı eşitliği denetlenir. Zorunlu gerekçe girilip talep kaydedilir. Nöbete gelinemeyeceği anlaşıldığında. Nöbetçi Personel [Tüm Devir İşlemleri Listesi] 7 Sütunlu Merkezi İzleme Tablosu Kurum genelindeki tüm devir/takas hareketlerini ve onay aşamalarını tek ekrandan izlemek. Talep tarihi, nöbet günü, türü, devreden, devralan, birim ve tek sütunluk renkli durum rozetiyle salt-okunur listeler. Sağ panelde doğal dil özeti sunar. Rutin denetim ve izlemede. Birim Sorumlusu, Yönetici 3 Aşamalı Onay Zinciri Alan Personel Birim Sorumlusu Yönetici İlgili personelin rızası ve amirlerin onayı olmadan çizelgenin bozulmasını engellemek. Önce devralan meslektaş kabul eder; ardından birim sorumlusu klinik uygunluğu onaylar; son olarak yönetici onaylar. Yönetici acil hallerde tek tıkla bypass edebilir. Talep açıldığında aşama aşama. Meslektaş, Amir, Yönetici [Acil Mazeret] & Toplu İkame Akıllı İkame Öneri Algoritması Ani hastalık veya kaza durumunda nöbetlerin açıkta kalmasını engellemek. Personel ve tarih aralığı seçilip [Hesapla] denir. Sistem boş kalan her slot için dinlenme süresi dolmuş ve hedef saat açığı olan meslektaşları puanlayıp ikame önerir. Beklenmeyen kriz hallerinde. Birim Sorumlusu, Yönetici [Geri Al] (Mazeret İptali) Mazeret ve İkame Kaydını Geri Döndürme Hatalı girilen mazeretlerde çizelgeyi eski haline getirmek. Geçmiş sekmesinden ilgili mazeret seçilip [Geri Al] butonuna basılır. Sistem ikame atamalarını siler ve mazeretli personelin nöbetlerini geri yükler. Hatalı mazeret girişlerinde. Yönetici (Sudo Parolalı) [Ders Programı Revizyonu] Eğitim Kısıtı Güncelleme Diyalogu Üniversite ders günleri dönem ortasında değişen personeli güncellemek. Revizyon tarihi seçilir; eski talep dondurulur; yeni haftalık ders günleri (Pazartesi .. Pazar) işaretlenerek yeni kısıt kaydı oluşturulur. Dönem içi ders programı değiştiğinde. Personel, Birim Sorumlusu [Yönetici Aksiyon Merkezi] 3 Adımlı Gebe Personel Yönetim Sihirbazı Gebe personelin haklarını korurken klinik nöbet ve mesai açıklarını tek ekrandan çözmek. 1. Adım: Radyasyonsuz birime transfer 2. Adım: Eski birimdeki boş nöbetlere ikame ataması 3. Adım: Yeni birimde eksik saatler için gündüz vardiyaları oluşturma. Gebelik doktor raporu çıktığında. Başhekimlik, İdari Yönetici Nöbet Değişim Havuzu & 36s TTL Web Portal Marketplace & Zaman Aşımı Muhatap aramadan nöbet değişimini pazaryerine sunmak; son 36 saatte idari süreci başlatmak. Personel nöbetini havuza bırakır (maks 48s/ay); meslektaşlar teklif verir. Nöbete 36 saat kala havuz ilanı zaman aşımına uğrar; personelin talebi ve yöneticinin tespitiyle acil mazerete aktarılır. Nöbet takası arayışında. Personel, İdari Yönetici Saha Mit Avcısı: \"Havuzda 36 Saat Kala Eşleşmeyen Nöbetler Otomatik Olarak Acil Mazerete mi Aktarılır?\" En Sık Karşılaşılan Havuz ve Mazeret Yanılgısı Yanlış İnanış: \"Nöbetimi değişim havuzuna bıraktım; nöbete 36 saat kala kimse talip olmazsa sistem otomatik olarak mazeret izni açar, beni nöbetten siler ve yerime zorunlu ikame yazar.\" Doğru Gerçek: HAYIR, BU SÜREÇ OTOMATİK İŞLEMEZ. Nöbet saatine 36 saat kaldığında sistem nöbetin sahipsiz kalmasını önlemek için ilanı zaman aşımına (ZAMAN_ASIMI) uğratır ve havuzdan çeker. Ancak acil mazeret ve ikame atama süreci kendiliğinden devreye girmez. Personelin birim yöneticisine yazılı/sözlü başvuruda bulunması ve yöneticinin klinik bir zorunluluk olduğunu tespit etmesi neticesinde yönetici inisiyatifiyle acil mazeret ve ikame protokolü başlatılır. Devir, İkame, Mazeret ve Aksiyon Akış Şeması P2P devir talebinden 3 kademeli onaya, acil mazeretten gebe personel sihirbazına kadar tüm karar döngüsü. graph TD A([\"Ay İçi Nöbet Değişim İhtiyacı\"]) --> B{\"Talep Türü Nedir?\"} %% P2P Devir / Takas Akışı B -->|\"Birebir Devir / Takas\"| C[\"Nöbet Devir Formu Açılır\"] C --> D{\"Alan Personel Uygun mu? - NDK/Hizmet Sınıfı/Fazla Mesai\"} D -->|\"Gebe / Kısıtlı / Farklı Hizmet Sınıfı\"| E[\"ENGEL: İşlem Reddedilir\"] D -->|Uygun| F[\"Talep Gönderilir - Aşama: alan_personel\"] F --> G{\"Devralan Meslektaş Kabul Etti mi?\"} G -->|Hayır| H[\"Talep Reddedildi - Süreç Biter\"] G -->|Evet| I[\"Aşama: birim_sorumlusu\"] I --> J{\"Birim Amiri Uygun Buldu mu?\"} J -->|Hay"
  },
  {
    "id": "09_nobet_devir_ikame_ve_acil_mazeret#quick-recipe",
    "title": "Hızlı Reçete: Ay Ortası Nöbet Değişimleri, İkame Önerisi ve Gebelik Transferi — Nöbet Devir, İkame & Acil Mazeret Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "09_nobet_devir_ikame_ve_acil_mazeret.html#quick-recipe",
    "summary": "Hızlı Reçete: Ay Ortası Nöbet Değişimleri, İkame Önerisi ve Gebelik Transferi P2P devir onayları, acil mazeret yönetimi, havuz kotası ve 3 adımlı yönetici aksiyonu 1. İstenen Sonuç Kesinleşmiş nöbet çizelgelerindeki ay i",
    "headings": [
      "Hızlı Reçete: Ay Ortası Nöbet Değişimleri, İkame Önerisi ve Gebelik Transferi",
      "Nöbet Devir, İkame & Acil Mazeret Yönetimi"
    ],
    "content": "Hızlı Reçete: Ay Ortası Nöbet Değişimleri, İkame Önerisi ve Gebelik Transferi P2P devir onayları, acil mazeret yönetimi, havuz kotası ve 3 adımlı yönetici aksiyonu 1. İstenen Sonuç Kesinleşmiş nöbet çizelgelerindeki ay içi mazeret ve takasların mevzuata (NDK, hizmet sınıfı, dinlenme süresi) tam uyumlu, adil ve sahipsiz slot bırakmadan çözülmesi. 2. Yapılacak İşlem P2P devir için [Nöbet Devret] ile talep açın; ani krizlerde [Acil Mazeret] ile ikameleri hesaplayın; gebelikte [Yönetici Aksiyon Merkezi] sihirbazını uygulayın. 3. Sistem Etkisi Gebe personele nöbet devri engellenir; taban saat karşılıksız devredilemez; 3 kademeli onay tamamlanınca çizelge güncellenir; hatalı mazeretler tek tıkla geri alınır. ️ Yasal Kalkan Gebe Nöbet Yasağı ️ Hizmet Sınıfı Eşit Unvanlar Arası ⏱️ 36s Havuz TTL İdari İnisiyatif & Kota Geri Alma Tek Tıkla Mazeret İptali"
  },
  {
    "id": "09_nobet_devir_ikame_ve_acil_mazeret#5w1h",
    "title": "5N1K Kural ve Arayüz Çözümleme Tablosu — Nöbet Devir, İkame & Acil Mazeret Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "09_nobet_devir_ikame_ve_acil_mazeret.html#5w1h",
    "summary": "5N1K Kural ve Arayüz Çözümleme Tablosu Nöbet devri, takas, mazeret, havuz ve yönetici aksiyon merkezindeki kontrollerin işleyiş mantığı. NE? (Bileşen / İşlem) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? [Nöbet",
    "headings": [
      "5N1K Kural ve Arayüz Çözümleme Tablosu",
      "Nöbet Devir, İkame & Acil Mazeret Yönetimi"
    ],
    "content": "5N1K Kural ve Arayüz Çözümleme Tablosu Nöbet devri, takas, mazeret, havuz ve yönetici aksiyon merkezindeki kontrollerin işleyiş mantığı. NE? (Bileşen / İşlem) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? [Nöbet Devir Talebi] P2P Nöbet Devir & Takas Penceresi Personelin bir nöbetini meslektaşına devretmesini veya karşılıklı takas etmesini sağlamak. Alan personel açılır menüden seçilir; sağlık kısıtı, gebelik ve hizmet sınıfı eşitliği denetlenir. Zorunlu gerekçe girilip talep kaydedilir. Nöbete gelinemeyeceği anlaşıldığında. Nöbetçi Personel [Tüm Devir İşlemleri Listesi] 7 Sütunlu Merkezi İzleme Tablosu Kurum genelindeki tüm devir/takas hareketlerini ve onay aşamalarını tek ekrandan izlemek. Talep tarihi, nöbet günü, türü, devreden, devralan, birim ve tek sütunluk renkli durum rozetiyle salt-okunur listeler. Sağ panelde doğal dil özeti sunar. Rutin denetim ve izlemede. Birim Sorumlusu, Yönetici 3 Aşamalı Onay Zinciri Alan Personel Birim Sorumlusu Yönetici İlgili personelin rızası ve amirlerin onayı olmadan çizelgenin bozulmasını engellemek. Önce devralan meslektaş kabul eder; ardından birim sorumlusu klinik uygunluğu onaylar; son olarak yönetici onaylar. Yönetici acil hallerde tek tıkla bypass edebilir. Talep açıldığında aşama aşama. Meslektaş, Amir, Yönetici [Acil Mazeret] & Toplu İkame Akıllı İkame Öneri Algoritması Ani hastalık veya kaza durumunda nöbetlerin açıkta kalmasını engellemek. Personel ve tarih aralığı seçilip [Hesapla] denir. Sistem boş kalan her slot için dinlenme süresi dolmuş ve hedef saat açığı olan meslektaşları puanlayıp ikame önerir. Beklenmeyen kriz hallerinde. Birim Sorumlusu, Yönetici [Geri Al] (Mazeret İptali) Mazeret ve İkame Kaydını Geri Döndürme Hatalı girilen mazeretlerde çizelgeyi eski haline getirmek. Geçmiş sekmesinden ilgili mazeret seçilip [Geri Al] butonuna basılır. Sistem ikame atamalarını siler ve mazeretli personelin nöbetlerini geri yükler. Hatalı mazeret girişlerinde. Yönetici (Sudo Parolalı) [Ders Programı Revizyonu] Eğitim Kısıtı Güncelleme Diyalogu Üniversite ders günleri dönem ortasında değişen personeli güncellemek. Revizyon tarihi seçilir; eski talep dondurulur; yeni haftalık ders günleri (Pazartesi .. Pazar) işaretlenerek yeni kısıt kaydı oluşturulur. Dönem içi ders programı değiştiğinde. Personel, Birim Sorumlusu [Yönetici Aksiyon Merkezi] 3 Adımlı Gebe Personel Yönetim Sihirbazı Gebe personelin haklarını korurken klinik nöbet ve mesai açıklarını tek ekrandan çözmek. 1. Adım: Radyasyonsuz birime trans"
  },
  {
    "id": "09_nobet_devir_ikame_ve_acil_mazeret#myth-buster",
    "title": "Saha Mit Avcısı: \"Havuzda 36 Saat Kala Eşleşmeyen Nöbetler Otomatik Olarak Acil Mazerete mi Aktarılır?\" — Nöbet Devir, İkame & Acil Mazeret Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "09_nobet_devir_ikame_ve_acil_mazeret.html#myth-buster",
    "summary": "Saha Mit Avcısı: \"Havuzda 36 Saat Kala Eşleşmeyen Nöbetler Otomatik Olarak Acil Mazerete mi Aktarılır?\" En Sık Karşılaşılan Havuz ve Mazeret Yanılgısı Yanlış İnanış: \"Nöbetimi değişim havuzuna bıraktım; nöbete 36 saat ka",
    "headings": [
      "Saha Mit Avcısı: \"Havuzda 36 Saat Kala Eşleşmeyen Nöbetler Otomatik Olarak Acil Mazerete mi Aktarılır?\"",
      "Nöbet Devir, İkame & Acil Mazeret Yönetimi"
    ],
    "content": "Saha Mit Avcısı: \"Havuzda 36 Saat Kala Eşleşmeyen Nöbetler Otomatik Olarak Acil Mazerete mi Aktarılır?\" En Sık Karşılaşılan Havuz ve Mazeret Yanılgısı Yanlış İnanış: \"Nöbetimi değişim havuzuna bıraktım; nöbete 36 saat kala kimse talip olmazsa sistem otomatik olarak mazeret izni açar, beni nöbetten siler ve yerime zorunlu ikame yazar.\" Doğru Gerçek: HAYIR, BU SÜREÇ OTOMATİK İŞLEMEZ. Nöbet saatine 36 saat kaldığında sistem nöbetin sahipsiz kalmasını önlemek için ilanı zaman aşımına (ZAMAN_ASIMI) uğratır ve havuzdan çeker. Ancak acil mazeret ve ikame atama süreci kendiliğinden devreye girmez. Personelin birim yöneticisine yazılı/sözlü başvuruda bulunması ve yöneticinin klinik bir zorunluluk olduğunu tespit etmesi neticesinde yönetici inisiyatifiyle acil mazeret ve ikame protokolü başlatılır."
  },
  {
    "id": "09_nobet_devir_ikame_ve_acil_mazeret#workflow",
    "title": "Devir, İkame, Mazeret ve Aksiyon Akış Şeması — Nöbet Devir, İkame & Acil Mazeret Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "09_nobet_devir_ikame_ve_acil_mazeret.html#workflow",
    "summary": "Devir, İkame, Mazeret ve Aksiyon Akış Şeması P2P devir talebinden 3 kademeli onaya, acil mazeretten gebe personel sihirbazına kadar tüm karar döngüsü. graph TD A([\"Ay İçi Nöbet Değişim İhtiyacı\"]) --> B{\"Talep Türü Nedir",
    "headings": [
      "Devir, İkame, Mazeret ve Aksiyon Akış Şeması",
      "Nöbet Devir, İkame & Acil Mazeret Yönetimi"
    ],
    "content": "Devir, İkame, Mazeret ve Aksiyon Akış Şeması P2P devir talebinden 3 kademeli onaya, acil mazeretten gebe personel sihirbazına kadar tüm karar döngüsü. graph TD A([\"Ay İçi Nöbet Değişim İhtiyacı\"]) --> B{\"Talep Türü Nedir?\"} %% P2P Devir / Takas Akışı B -->|\"Birebir Devir / Takas\"| C[\"Nöbet Devir Formu Açılır\"] C --> D{\"Alan Personel Uygun mu? - NDK/Hizmet Sınıfı/Fazla Mesai\"} D -->|\"Gebe / Kısıtlı / Farklı Hizmet Sınıfı\"| E[\"ENGEL: İşlem Reddedilir\"] D -->|Uygun| F[\"Talep Gönderilir - Aşama: alan_personel\"] F --> G{\"Devralan Meslektaş Kabul Etti mi?\"} G -->|Hayır| H[\"Talep Reddedildi - Süreç Biter\"] G -->|Evet| I[\"Aşama: birim_sorumlusu\"] I --> J{\"Birim Amiri Uygun Buldu mu?\"} J -->|Hayır| H J -->|Evet| K[\"Aşama: hizmet_sorumlusu\"] K --> L{\"İdari Yönetici Onayladı mı?\"} L -->|Hayır| H L -->|\"Evet: Admin Bypass Destekli\"| M[\"Nöbet Çizelgesi Güncellenir - Süreç Tamamlandı\"] %% Acil Mazeret Akışı B -->|\"Ani Hastalık / Kaza / Refakat\"| N[\"Acil Mazeret Dialogu Açılır\"] N --> O[\"Tarih Aralığı Girilir ve Hesapla Butonuna Basılır\"] O --> P[\"Sistem Dinlenme & Saat Kriterine Göre İkameleri Puanlar\"] P --> Q[\"Yönetici İkameleri Doğrular ve Kaydet Der\"] Q --> R[\"Orijinal Nöbetler Düşürülür, İkameler Yazılır\"] R --> S{\"Hatalı İşlem mi Yapıldı?\"} S -->|Evet| T[\"Geri Al Butonu ile İkameler Silinir, Orijinal Nöbetler Döner\"] S -->|Hayır| U([\"Mazeret & İkame Yayında\"]) %% Gebelik Bildirimi & Yönetici Aksiyon Merkezi B -->|\"Gebelik Doktor Raporu\"| V[\"Gebelik Bildirimi Belgesi Girilir\"] V --> W[\"Gece Nöbetleri ve Radyasyon İzinleri Derhal Kapatılır\"] W --> X[\"Yönetici Aksiyon Merkezi 3 Adımlı Sihirbazı Açılır\"] X --> Y[\"1. Adım: Radyasyonsuz Birime Görevlendirme\"] Y --> Z[\"2. Adım: Eski Birimdeki Boş Nöbetlere İkame Atama\"] Z --> AA[\"3. Adım: Yeni Birimde Eksik Saatler İçin Gündüz Vardiyaları\"] AA --> AB([\"Toplu Aksiyon Onaylanır - Çizelgeler Dengelenir\"]) style A fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff style E fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff style M fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff style N fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff style T fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff style V fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff style AB fill:#059669,stroke:#047857,stroke-width:2px,color:#fff"
  },
  {
    "id": "09_nobet_devir_ikame_ve_acil_mazeret#screenshots",
    "title": "️ Arayüz Ekran Görünümleri — Nöbet Devir, İkame & Acil Mazeret Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "09_nobet_devir_ikame_ve_acil_mazeret.html#screenshots",
    "summary": "️ Arayüz Ekran Görünümleri Nöbet devir listesi, devir talep formu, pazar yeri havuzu ve yönetici aksiyon merkezi ekranları. ️ Ekran Konumu: Nöbet Yönetimi > Nöbet Devir Listesi 7 Sütunlu İzleme & Doğal Dil Hikaye Paneli ",
    "headings": [
      "️ Arayüz Ekran Görünümleri",
      "Nöbet Devir, İkame & Acil Mazeret Yönetimi"
    ],
    "content": "️ Arayüz Ekran Görünümleri Nöbet devir listesi, devir talep formu, pazar yeri havuzu ve yönetici aksiyon merkezi ekranları. ️ Ekran Konumu: Nöbet Yönetimi > Nöbet Devir Listesi 7 Sütunlu İzleme & Doğal Dil Hikaye Paneli Yasal Bilgilendirme: Görseldeki personel adları, birimler ve onay statüleri simülasyon amacıyla yapılandırılmıştır. ️ Ekran Konumu: Nöbet Çizelgesi > [Nöbet Devret] Diyalogu P2P Devir Formu, Kısıt Doğrulaması & Zorunlu Gerekçe Yasal Bilgilendirme: Devralacak personel seçildiğinde yasal çalışma kısıtları ve hizmet sınıfı uygunluğu anlık denetlenir. Ekran Konumu: Web Portal > Nöbet Değişim Havuzu Açık Pazar İlanları, Teklifler & 36s TTL Yasal Bilgilendirme: Personel ayda en fazla 48 saat havuza nöbet bırakabilir; nöbete 36 saat kala havuz ilanı zaman aşımına uğrar. ️ Ekran Konumu: Sistem Menüsü > Yönetici Aksiyon Merkezi 3 Adımlı Gebe Personel ve İkame Dengeleme Sihirbazı Yasal Bilgilendirme: Gebe personelin radyasyonsuz alana nakli, boş nöbetlere ikame ve gündüz vardiyaları tek tıkla işlenir."
  },
  {
    "id": "09_nobet_devir_ikame_ve_acil_mazeret#step-by-step",
    "title": "Adım Adım İşlem Rehberi — Nöbet Devir, İkame & Acil Mazeret Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "09_nobet_devir_ikame_ve_acil_mazeret.html#step-by-step",
    "summary": "Adım Adım İşlem Rehberi Nöbet devri, takas, mazeret, havuz ve idari transfer senaryolarında izlenecek uygulama adımları. 1 Personeller Arası P2P Nöbet Devir Talebi Oluşturma Nöbet çizelgesi ekranında devretmek istediğini",
    "headings": [
      "Adım Adım İşlem Rehberi",
      "Nöbet Devir, İkame & Acil Mazeret Yönetimi"
    ],
    "content": "Adım Adım İşlem Rehberi Nöbet devri, takas, mazeret, havuz ve idari transfer senaryolarında izlenecek uygulama adımları. 1 Personeller Arası P2P Nöbet Devir Talebi Oluşturma Nöbet çizelgesi ekranında devretmek istediğiniz nöbet hücresine sağ tıklayıp [Nöbet Devret] seçeneğini seçin (veya Web Portal Nöbetlerim ekranından *'Devret'* butonuna basın). Açılan pencerede kaynak nöbet bilgileri (personel, tarih, vardiya türü) otomatik gösterilir. [Alan Personel] açılır kutusundan nöbeti devralacak meslektaşınızı seçin: Sistem farklı hizmet sınıfındaki personelleri (örn: Hemşire - Teknisyen) otomatik filtreler. Gebe, emziren veya sağlık raporu olan personeller listeye dahil edilmez. [Devir Nedeni] kutusuna resmi gerekçenizi yazın. [Kaydet] butonuna tıklayın. Talep önce devralacak meslektaşın onayına iletilir. 2 Çok Kademeli Onay Sürecini Yürütme ve Tamamlama 1. Aşama (Alan Personel): Devralacak meslektaş Bildirim Merkezi veya Web Portal üzerinden gelen devir talebini inceler ve [Kabul Et] butonuna basar. 2. Aşama (Birim Sorumlusu): Birim amiri servisin o günkü işleyişini ve vardiya dengesini inceleyerek talebi birim düzeyinde onaylar. 3. Aşama (Yönetici Onayı): İdari yönetici talebi onaylar. Üç onay tamamlandığı anda nöbet çizelgesinde personelin adı değişir, saatler yeniden hesaplanır ve her iki tarafa bildirim gider. (Acil Hallerde: Sistem Yöneticisi doğrudan tek tıkla nihai onayı vererek alt aşamaları tamamlayabilir.) 3 Acil Mazeret Bildirimi ve Toplu Akıllı İkame Atama Nöbet çizelgesi ekranındayken üst araç çubuğundaki [Acil Mazeret] butonuna tıklayın. Açılan pencerede [Personel] seçimini yapın ve mazeret kapsamındaki [Başlangıç Tarihi] ile [Bitiş Tarihi] alanlarını girin. [İptal Nedeni] kutusundan resmi izin türünü (veya *'Diğer / Gayri-Resmi Mazeret'* seçeneğini) belirleyin. [Etkilenen Nöbetleri Getir / Hesapla] butonuna basın. Sistem personelin o tarihlerdeki tüm nöbetlerini listeler; her nöbetin karşısına kural ihlali yapmayan ve en yüksek uygunluk puanına sahip yedek personelleri otomatik önerir. İkame personelleri onaylayıp [Kaydet] butonuna basarak işlemi tamamlayın. 4 Hatalı Mazeretleri Tek Tıkla Geri Alma (Rollback) [Acil Mazeret] penceresinde [Geçmiş] sekmesine geçin. Daha önce kaydedilmiş mazeret logları listesinden geri alınacak satırı seçin. Alttaki [Geri Al] butonuna tıklayın. Ekrana gelen onay kutusunu teyit edin. Sistem atanan ikame nöbetleri siler ve mazeretli personelin nöbetlerini sıfır veri kaybıyla eski haline döndürür. 5 Gebe Personel Bild"
  },
  {
    "id": "09_nobet_devir_ikame_ve_acil_mazeret#faq",
    "title": "Sıkça Sorulan Sorular (SSS) — Nöbet Devir, İkame & Acil Mazeret Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "09_nobet_devir_ikame_ve_acil_mazeret.html#faq",
    "summary": "Sıkça Sorulan Sorular (SSS) Nöbet devri, takas, mazeret ve havuz yönetimi hakkında en çok merak edilen sorular. Gebe veya emziren personele nöbet devredilebilir mi? Kesinlikle hayır. RADPYS Güvenlik Kalkanı (`RED-NOBET_R",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "Nöbet Devir, İkame & Acil Mazeret Yönetimi"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) Nöbet devri, takas, mazeret ve havuz yönetimi hakkında en çok merak edilen sorular. Gebe veya emziren personele nöbet devredilebilir mi? Kesinlikle hayır. RADPYS Güvenlik Kalkanı (`RED-NOBET_RADIATION_PREGNANCY_BREACH_IN_SWAP`) uyarınca aktif gebelik bildirimi, emzirme izni, heyet raporu veya radyasyon doz aşımı bulunan personele sistem hiçbir koşulda nöbet devrine veya takasına izin vermez. Devir formu bu personelleri seçim listesine dahil etmez. Radyoloji Teknikeri ile Hemşire arasında nöbet devri veya takası yapılabilir mi? Hayır. Hizmet Sınıfı Eşitliği ilkesi gereğince nöbet devri ve takası yalnızca aynı hizmet sınıfındaki meslektaşlar arasında yapılabilir. Farklı unvanlara sahip personeller (örn: Hemşire ile Radyasyon Teknikeri) birbirinin nöbetini devralamaz. Bir personel aylık zorunlu taban çalışma saatini tek yönlü olarak başkasına devredebilir mi? Hayır. Personelin aylık zorunlu çalışma süresi (örneğin 140 saat) altındaki taban nöbetleri karşılıksız devredilemez. Yalnızca fazla mesai kapsamındaki nöbetler tek yönlü devredilebilir. Personel taban süresini doldurmamışsa mutlaka \"Karşılıklı Takas\" seçeneğini kullanmak zorundadır. Nöbet değişim havuzunda 36 saat kala nöbet otomatik olarak acil mazerete mi düşer? Hayır. Nöbet saatine 36 saat kaldığında sistem nöbetin açıkta kalmasını önlemek için havuz ilanını zaman aşımına uğratır (`ZAMAN_ASIMI`). Ancak acil mazeret ve ikame atama süreci otomatik olarak işletilmez. Personelin yöneticiye başvurusu ve amirin klinik bir zorunluluk olduğunu teyit etmesi neticesinde yönetici inisiyatifiyle acil mazeret protokolü devreye alınır. Acil mazeretle iptal edilen nöbetler sonradan geri alınabilir mi? Evet. Acil mazeret diyalogundaki **[Geçmiş]** sekmesine gidilerek ilgili mazeret kaydı seçilip **[Geri Al]** butonuna basıldığında, sistem atanan ikame nöbetleri siler ve mazeretli personelin orijinal nöbetlerini çizelgeye geri döndürür."
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai",
    "title": "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html",
    "summary": "Bu modül; radyoloji ve sağlık çalışanlarının aylık yasal mesai rejimlerine ( 3153 Sayılı Kanun kapsamındaki haftalık 35 saatlik radyasyon ortamı veya 657 Sayılı Kanun kapsamındaki 40 saatlik genel klinik ortam), resmi tatil/arife indirimlerine ve onaylı izinle",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Amir & Mutemet Özeti)",
      "2. Temel Eşikler & Koruyucu Yasal Sınırlar",
      "3. Bakiye Hesaplama ve Karar Mantık Akışı",
      "4. 5N1K Kural ve Arayüz Bileşen Envanteri",
      "Ekran Konumları ve Görsel Rehber",
      "5. Adım Adım İşlem Rehberi",
      "Aylık Nöbet Borç / Alacak Tablosunu İnceleme",
      "Bireysel Fazla Mesai Ödeme Dağıtımı (FMOdemeSecimDialog)",
      "Toplu Kota veya Devir Uygulama",
      "Kesinleşmiş Dönem Kilidini Açma (Sudo Doğrulaması)",
      "Resmi Mutemetlik Fazla Mesai Bildirim Cetveli Alma",
      "6. Hibrit Platform Görünümü: Masaüstü vs Web Portalı",
      "Bordro, Mesai & Mit Avcısı (Kritik Kurallar)",
      "7. Sıkça Sorulan Sorular & Kritik Uyarılar"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 3: Nöbet Dağıtım Motoru 10. Nöbet Borç & Fazla Mesai Modül 10 Bordro & Yasal Mutemetlik İcmali Nöbet Borç / Alacak ve Fazla Mesai Yönetimi Bu modül; radyoloji ve sağlık çalışanlarının aylık yasal mesai rejimlerine ( 3153 Sayılı Kanun kapsamındaki haftalık 35 saatlik radyasyon ortamı veya 657 Sayılı Kanun kapsamındaki 40 saatlik genel klinik ortam), resmi tatil/arife indirimlerine ve onaylı izinlerine göre bireysel aylık hedef çalışma saatlerini belirler. Personelin tuttuğu fiili nöbetleri, resmi bayram mesailerini ve geçmiş aydan devreden saat bakiyelerini hesaba katarak mutemetlik ödemesi ve dönem devirlerini yönetir. 20s Vizyonder Hızlı Karar Reçetesi (Amir & Mutemet Özeti) 1. Hedef Saati ve İzinleri Doğrulayın Ay başında personelin mesai rejimi (35s Radyasyon vs 40s Genel) ve onaylı izin günlerinin hedef saatten otomatik düşürüldüğünü kontrol edin. 2. Net Bakiyeyi İzleyin Fiili çalışma hedefi aştığında yeşil alacak, eksik kaldığında kırmızı borç bakiyesi oluşur. Geçmiş aydan devreden saatler kümülatif bakiyeye otomatik eklenir. 3. Mutemetlik Onayı ve Kilitleme 60 saatlik koruyucu kota ve 130 saatlik mutlak tavan denetimiyle bordro icmalini üretin. FM Öde işlemi dönemi kilitler ve yetkisiz değişiklikleri engeller. 2. Temel Eşikler & Koruyucu Yasal Sınırlar Yasal Mutlak Tavan 130.0 saat/ay Mevzuat gereği bir personele bir ayda ödenebilecek mutlak üst sınırdır. 130 saati aşan kısımlar sonraki aya zorunlu devreder. Tükenmişlik Önleme Kotası 60.0 saat/ay Personel sağlığını korumak ve mesleki tükenmişliği (burnout) engellemek adına kurumun belirlediği standart ödeme kotasıdır. Çift Havuzlu Rejim 35s / 40s denklik Radyasyonlu alan (haftalık 35 saat) ile genel alan (haftalık 40 saat) nöbetleri oransal denklikle birleştirilip kıstelyevm uygulanır. Bayram Mesaisi 13:00 arife eşiği Dini ve milli bayramlar ile arife günleri saat 13:00 sonrasında tutulan nöbetler dakika hassasiyetinde ayrı bordro sütununa yazılır. 3. Bakiye Hesaplama ve Karar Mantık Akışı flowchart TD A[\"Yayınlanmış Nöbet Planı (Ay/Yıl)\"] --> B[\"Resmi Tatiller & İzin Günleri Düşümü\"] B --> C[\"Net Yasal Hedef Saat (35s/40s)\"] D[\"Fiili Tutulan Nöbetler\"] --> E[\"Bayram Mesaisi Ayrıştırması (13:00 Eşiği)\"] D --> F[\"Toplam Fiili Saat\"] C --> G[\"Bu Ayki Net Fark = Fiili - Hedef\"] F --> G G --> H[\"+ Önceki Aydan Devreden Saat\"] H --> I[\"Kümülatif Toplam Saat Bakiyesi\"] I -->|\"Kümülatif |\"Kümülatif > 0 (Artı FM)\"| K{\"Ödeme Dağıtım Tercihi\"} K -->|\"Kurumsal Kota\"| L[\"60s Öde (Tükenmişlik Önleme) + Kalanı Devret\"] K -->|\"Yasal Tamamı\"| M[\"Maks 130s Öde + Kalanı Devret\"] K -->|\"Devret\"| N[\"0s Öde + Tamamını Devret\"] L --> O[\"Değişiklikleri Kaydet (Transaction)\"] M --> O N --> O J --> O O --> P[\"Dönem Kilidi (FM Ödendi Kilitli)\"] P --> Q[\"5 Sütunlu Mutemetlik Bildirim Cetveli (Yazıcı/Excel/PDF)\"] P -.->|\"İstisnai Düzeltme\"| R[\"Kilidi Aç - Sudo Yönetici Doğrulaması\"] R --> K 4. 5N1K Kural ve Arayüz Bileşen Envanteri Sıfır Hayalet Bileşen Bileşen / Ayar Amacı (Neden?) Çalışma Mantığı & Formülü (Nasıl?) Tetiklenme (Ne Zaman?) Yetkili Rol (Kim?) Durum [Yıl] & [Ay] Seçimi İncelenecek ve hesaplanacak nöbet bordro dönemini belirlemek. Yıl spin kutusu ve Ay açılır kutusundaki seçime göre yayınlanmış plan sorgulanır. Dönem değiştiğinde Nöbet Sorumlusu, Amir Aktif [Birim] Filtresi Sadece belirli bir kliniğe/birime ait personelleri listelemek. Personelin asıl birimi, görev yeri veya geçici görevlendirmesiyle süzülür. Birim seçildiğinde Birim Sorumlusu, Şef Aktif [Dönem Kilit Durumu] Dönemin düzenlemeye açık mı, kesinleşip kilitli mi olduğunu bildirmek. Kırmızı (FM Ödendi Kilitli), Sarı (Sudo Açık), Mavi (Kayıtlı), Yeşil (Açık Düzenleme). Veri yenilendiğinde Tüm Kullanıcılar Aktif [Kilidi Aç] Butonu Kesinleşmiş ve kilitlenmiş dönemi istisnai düzeltmeye açmak. Yönetici şifresi doğrulanırsa tablo kontrollerini geçici olarak aktifleştirir. Kilitli dönemde tıklanınca Sistem Yöneticisi, Amir Aktif [Yenile] Butonu Tabloyu yayınlanan plan, izinler ve devirlerle baştan hesaplamak. Kıstelyevm, resmi tatil düşümü ve çift havuzlu fiili nöbetleri yeniden derler. Butona basıldığında Nöbet Sorumlusu Aktif [Değişiklikleri Kaydet] Ödeme ve sonraki aya devir kararlarını veritabanına yazmak. Tüm personellerin saat ve durum kayıtlarını tek transaction ile günceller. Kararlar sonrası Yetkili Kullanıcı, Amir Aktif [Yazdır] Menüsü Mutemetlik için 5 sütunlu resmi bildirim cetvelini üretmek. Normal FM ve Bayram FM saatlerini ayrıştırıp Yazıcı, Excel (.xlsx) veya PDF döker. Seçenek tıklandığında Mutemet, Sorumlu Aktif [Toplu İşlem] & [Seçilenlere Uygula] Seçili personellere tek tıkla kota veya devir kararı uygulamak. 60s Kurumsal Kota, 130s Yasal Tamamı veya Devret kararlarını seçili satırlara atar. Uygula butonunda Nöbet Sorumlusu Aktif [Devret] / [FM Öde] Seçimi Bireysel satırda fazla mesai ödeme dağıtımını belirlemek. [FM Öde] tıklandığında modal açılır; ödenecek saat ve sonraki aya devir belirlenir. Radio tıklandığında Birim Sorumlusu Aktif Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Nöbet Yönetimi > Nöbet Borç / Alacak Devri Ana Hesaplama & Bakiye Tablosu Simülasyon Notu: Görseldeki personel isimleri, hedef saatler ve kümülatif fazla mesai bakiyeleri test ortamı için üretilmiş sentetik veridir. ️ Ekran Konumu: Nöbet Borç / Alacak Devri > [FM Öde] > Fazla Mesai Ödeme Dağıtımı FMOdemeSecimDialog Modalı Simülasyon Notu: Bireysel 60 saat kurumsal kota, 130 saat yasal tavan ve sonraki aya devir hesaplama simülasyonu. 5. Adım Adım İşlem Rehberi A Aylık Nöbet Borç / Alacak Tablosunu İnceleme Sol menüden [Nöbet Yönetimi] > [Nöbet Borç / Alacak Devri] sayfasına gidin. Üst araç çubuğundaki [Yıl] ve [Ay] alanlarından hesaplanacak nöbet dönemini seçin. Gerekiyorsa [Birim] ve [Hizmet Sınıfı] filtrelerini daraltın ve [Yenile] butonuna basın. Tabloda personellerin yasal hedef saatleri, fiili saatleri, ayın net farkı, önceki aydan devreden bakiye ve kümülatif toplam saatleri listelenir: Artı Kümülatif Saatler: Yeşil renkle gösterilir; personelin fazla mesai h"
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi (Amir & Mutemet Özeti) — Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi (Amir & Mutemet Özeti) 1. Hedef Saati ve İzinleri Doğrulayın Ay başında personelin mesai rejimi (35s Radyasyon vs 40s Genel) ve onaylı izin günlerinin hedef saatten otomatik düşürüldüğü",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Amir & Mutemet Özeti)",
      "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi (Amir & Mutemet Özeti) 1. Hedef Saati ve İzinleri Doğrulayın Ay başında personelin mesai rejimi (35s Radyasyon vs 40s Genel) ve onaylı izin günlerinin hedef saatten otomatik düşürüldüğünü kontrol edin. 2. Net Bakiyeyi İzleyin Fiili çalışma hedefi aştığında yeşil alacak, eksik kaldığında kırmızı borç bakiyesi oluşur. Geçmiş aydan devreden saatler kümülatif bakiyeye otomatik eklenir. 3. Mutemetlik Onayı ve Kilitleme 60 saatlik koruyucu kota ve 130 saatlik mutlak tavan denetimiyle bordro icmalini üretin. FM Öde işlemi dönemi kilitler ve yetkisiz değişiklikleri engeller."
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai#kpi-kartlari",
    "title": "2. Temel Eşikler & Koruyucu Yasal Sınırlar — Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html#kpi-kartlari",
    "summary": "2. Temel Eşikler & Koruyucu Yasal Sınırlar Yasal Mutlak Tavan 130.0 saat/ay Mevzuat gereği bir personele bir ayda ödenebilecek mutlak üst sınırdır. 130 saati aşan kısımlar sonraki aya zorunlu devreder. Tükenmişlik Önleme",
    "headings": [
      "2. Temel Eşikler & Koruyucu Yasal Sınırlar",
      "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi"
    ],
    "content": "2. Temel Eşikler & Koruyucu Yasal Sınırlar Yasal Mutlak Tavan 130.0 saat/ay Mevzuat gereği bir personele bir ayda ödenebilecek mutlak üst sınırdır. 130 saati aşan kısımlar sonraki aya zorunlu devreder. Tükenmişlik Önleme Kotası 60.0 saat/ay Personel sağlığını korumak ve mesleki tükenmişliği (burnout) engellemek adına kurumun belirlediği standart ödeme kotasıdır. Çift Havuzlu Rejim 35s / 40s denklik Radyasyonlu alan (haftalık 35 saat) ile genel alan (haftalık 40 saat) nöbetleri oransal denklikle birleştirilip kıstelyevm uygulanır. Bayram Mesaisi 13:00 arife eşiği Dini ve milli bayramlar ile arife günleri saat 13:00 sonrasında tutulan nöbetler dakika hassasiyetinde ayrı bordro sütununa yazılır."
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai#is-akisi-semasi",
    "title": "3. Bakiye Hesaplama ve Karar Mantık Akışı — Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html#is-akisi-semasi",
    "summary": "3. Bakiye Hesaplama ve Karar Mantık Akışı flowchart TD A[\"Yayınlanmış Nöbet Planı (Ay/Yıl)\"] --> B[\"Resmi Tatiller & İzin Günleri Düşümü\"] B --> C[\"Net Yasal Hedef Saat (35s/40s)\"] D[\"Fiili Tutulan Nöbetler\"] --> E[\"Bayr",
    "headings": [
      "3. Bakiye Hesaplama ve Karar Mantık Akışı",
      "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi"
    ],
    "content": "3. Bakiye Hesaplama ve Karar Mantık Akışı flowchart TD A[\"Yayınlanmış Nöbet Planı (Ay/Yıl)\"] --> B[\"Resmi Tatiller & İzin Günleri Düşümü\"] B --> C[\"Net Yasal Hedef Saat (35s/40s)\"] D[\"Fiili Tutulan Nöbetler\"] --> E[\"Bayram Mesaisi Ayrıştırması (13:00 Eşiği)\"] D --> F[\"Toplam Fiili Saat\"] C --> G[\"Bu Ayki Net Fark = Fiili - Hedef\"] F --> G G --> H[\"+ Önceki Aydan Devreden Saat\"] H --> I[\"Kümülatif Toplam Saat Bakiyesi\"] I -->|\"Kümülatif |\"Kümülatif > 0 (Artı FM)\"| K{\"Ödeme Dağıtım Tercihi\"} K -->|\"Kurumsal Kota\"| L[\"60s Öde (Tükenmişlik Önleme) + Kalanı Devret\"] K -->|\"Yasal Tamamı\"| M[\"Maks 130s Öde + Kalanı Devret\"] K -->|\"Devret\"| N[\"0s Öde + Tamamını Devret\"] L --> O[\"Değişiklikleri Kaydet (Transaction)\"] M --> O N --> O J --> O O --> P[\"Dönem Kilidi (FM Ödendi Kilitli)\"] P --> Q[\"5 Sütunlu Mutemetlik Bildirim Cetveli (Yazıcı/Excel/PDF)\"] P -.->|\"İstisnai Düzeltme\"| R[\"Kilidi Aç - Sudo Yönetici Doğrulaması\"] R --> K"
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai#5n1k-tablosu",
    "title": "4. 5N1K Kural ve Arayüz Bileşen Envanteri — Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html#5n1k-tablosu",
    "summary": "4. 5N1K Kural ve Arayüz Bileşen Envanteri Sıfır Hayalet Bileşen Bileşen / Ayar Amacı (Neden?) Çalışma Mantığı & Formülü (Nasıl?) Tetiklenme (Ne Zaman?) Yetkili Rol (Kim?) Durum [Yıl] & [Ay] Seçimi İncelenecek ve hesaplan",
    "headings": [
      "4. 5N1K Kural ve Arayüz Bileşen Envanteri",
      "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi"
    ],
    "content": "4. 5N1K Kural ve Arayüz Bileşen Envanteri Sıfır Hayalet Bileşen Bileşen / Ayar Amacı (Neden?) Çalışma Mantığı & Formülü (Nasıl?) Tetiklenme (Ne Zaman?) Yetkili Rol (Kim?) Durum [Yıl] & [Ay] Seçimi İncelenecek ve hesaplanacak nöbet bordro dönemini belirlemek. Yıl spin kutusu ve Ay açılır kutusundaki seçime göre yayınlanmış plan sorgulanır. Dönem değiştiğinde Nöbet Sorumlusu, Amir Aktif [Birim] Filtresi Sadece belirli bir kliniğe/birime ait personelleri listelemek. Personelin asıl birimi, görev yeri veya geçici görevlendirmesiyle süzülür. Birim seçildiğinde Birim Sorumlusu, Şef Aktif [Dönem Kilit Durumu] Dönemin düzenlemeye açık mı, kesinleşip kilitli mi olduğunu bildirmek. Kırmızı (FM Ödendi Kilitli), Sarı (Sudo Açık), Mavi (Kayıtlı), Yeşil (Açık Düzenleme). Veri yenilendiğinde Tüm Kullanıcılar Aktif [Kilidi Aç] Butonu Kesinleşmiş ve kilitlenmiş dönemi istisnai düzeltmeye açmak. Yönetici şifresi doğrulanırsa tablo kontrollerini geçici olarak aktifleştirir. Kilitli dönemde tıklanınca Sistem Yöneticisi, Amir Aktif [Yenile] Butonu Tabloyu yayınlanan plan, izinler ve devirlerle baştan hesaplamak. Kıstelyevm, resmi tatil düşümü ve çift havuzlu fiili nöbetleri yeniden derler. Butona basıldığında Nöbet Sorumlusu Aktif [Değişiklikleri Kaydet] Ödeme ve sonraki aya devir kararlarını veritabanına yazmak. Tüm personellerin saat ve durum kayıtlarını tek transaction ile günceller. Kararlar sonrası Yetkili Kullanıcı, Amir Aktif [Yazdır] Menüsü Mutemetlik için 5 sütunlu resmi bildirim cetvelini üretmek. Normal FM ve Bayram FM saatlerini ayrıştırıp Yazıcı, Excel (.xlsx) veya PDF döker. Seçenek tıklandığında Mutemet, Sorumlu Aktif [Toplu İşlem] & [Seçilenlere Uygula] Seçili personellere tek tıkla kota veya devir kararı uygulamak. 60s Kurumsal Kota, 130s Yasal Tamamı veya Devret kararlarını seçili satırlara atar. Uygula butonunda Nöbet Sorumlusu Aktif [Devret] / [FM Öde] Seçimi Bireysel satırda fazla mesai ödeme dağıtımını belirlemek. [FM Öde] tıklandığında modal açılır; ödenecek saat ve sonraki aya devir belirlenir. Radio tıklandığında Birim Sorumlusu Aktif"
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai#ekran-goruntuleri",
    "title": "Ekran Konumları ve Görsel Rehber — Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html#ekran-goruntuleri",
    "summary": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Nöbet Yönetimi > Nöbet Borç / Alacak Devri Ana Hesaplama & Bakiye Tablosu Simülasyon Notu: Görseldeki personel isimleri, hedef saatler ve kümülatif fazla mesai bakiyeleri ",
    "headings": [
      "Ekran Konumları ve Görsel Rehber",
      "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi"
    ],
    "content": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Nöbet Yönetimi > Nöbet Borç / Alacak Devri Ana Hesaplama & Bakiye Tablosu Simülasyon Notu: Görseldeki personel isimleri, hedef saatler ve kümülatif fazla mesai bakiyeleri test ortamı için üretilmiş sentetik veridir. ️ Ekran Konumu: Nöbet Borç / Alacak Devri > [FM Öde] > Fazla Mesai Ödeme Dağıtımı FMOdemeSecimDialog Modalı Simülasyon Notu: Bireysel 60 saat kurumsal kota, 130 saat yasal tavan ve sonraki aya devir hesaplama simülasyonu."
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai#kullanim-rehberi",
    "title": "5. Adım Adım İşlem Rehberi — Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html#kullanim-rehberi",
    "summary": "5. Adım Adım İşlem Rehberi A Aylık Nöbet Borç / Alacak Tablosunu İnceleme Sol menüden [Nöbet Yönetimi] > [Nöbet Borç / Alacak Devri] sayfasına gidin. Üst araç çubuğundaki [Yıl] ve [Ay] alanlarından hesaplanacak nöbet dön",
    "headings": [
      "5. Adım Adım İşlem Rehberi",
      "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi"
    ],
    "content": "5. Adım Adım İşlem Rehberi A Aylık Nöbet Borç / Alacak Tablosunu İnceleme Sol menüden [Nöbet Yönetimi] > [Nöbet Borç / Alacak Devri] sayfasına gidin. Üst araç çubuğundaki [Yıl] ve [Ay] alanlarından hesaplanacak nöbet dönemini seçin. Gerekiyorsa [Birim] ve [Hizmet Sınıfı] filtrelerini daraltın ve [Yenile] butonuna basın. Tabloda personellerin yasal hedef saatleri, fiili saatleri, ayın net farkı, önceki aydan devreden bakiye ve kümülatif toplam saatleri listelenir: Artı Kümülatif Saatler: Yeşil renkle gösterilir; personelin fazla mesai hak edişi olduğunu belirtir. Eksi Kümülatif Saatler: Kırmızı renkle gösterilir; personelin çalışma saati borcu olduğunu ve sonraki aya devredeceğini gösterir. Zengin Tooltip: Fiili saat hücresinin üzerine geldiğinizde personelin kendi biriminde, diğer birimlerde, resmi bayramlarda ve 35s/40s hibrit oranlarında tuttuğu süreler detaylı olarak izah edilir. B Bireysel Fazla Mesai Ödeme Dağıtımı (FMOdemeSecimDialog) Artı bakiyesi olan personelin satırındaki [FM Öde] radio butonuna tıklayın. Açılan Fazla Mesai Ödeme Dağıtımı penceresinde: Personelin kümülatif fazla mesaisi, yasal mutlak tavan (130s) ve kurumsal koruyucu kota (60s) gösterilir. Personelin tükenmişliğini önlemek ve sağlığını korumak için [Kurumsal Kota (60s)] butonuna basabilir, Mevzuatın izin verdiği tüm hak edişi ödemek için [Tamamı (Maks 130s)] butonuna basabilir, Veya [Ödenecek Süre] kutusuna dilediğiniz özel saat miktarını girebilirsiniz. Pencerenin altındaki [Sonraki Aya Devir] etiketi anlık olarak farkı hesaplar ve renklendirir. [Onayla] butonuna basarak dağıtımı tamamlayın. İşlemler tamamlandığında sağ üstteki [Değişiklikleri Kaydet] butonuna basarak kararları veritabanına kaydedin. C Toplu Kota veya Devir Uygulama Tablodan işlem yapmak istediğiniz personellerin satırlarını seçin (Ctrl veya Shift tuşuyla birden fazla satırı işaretleyin). Üst araç çubuğundaki [Toplu İşlem Seçiniz...] kutusundan kuralı belirleyin: Kurumsal Kota Öde (60s, Kalanı Devret): Tükenmişlik önleme sınırını uygular; ilk 60 saati öder, kalanı sonraki aya devreder. Tamamını Öde (Maks 130s): Yasal 130 saat sınırına kadar olan tüm süreyi ödemeye ayırır. Tamamını Sonraki Aya Devret: Ödeme yapmaz, kümülatif saatin tamamını sonraki aya devreder. [Seçilenlere Uygula] butonuna tıklayın. Güncellenen satırları gözden geçirip [Değişiklikleri Kaydet] butonuna basın. D Kesinleşmiş Dönem Kilidini Açma (Sudo Doğrulaması) Ödemeleri kaydedilmiş bir dönem incelenirken sağ üstte kırmızı kilit rozeti ve [Kilid"
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai#hibrit-entegrasyon",
    "title": "6. Hibrit Platform Görünümü: Masaüstü vs Web Portalı — Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html#hibrit-entegrasyon",
    "summary": "6. Hibrit Platform Görünümü: Masaüstü vs Web Portalı ️ Masaüstü Uygulaması (Tam Yetkili İşlem Merkezi) Kıstelyevm ve tatil düşümlü yasal hedef saat hesaplama motoru. Bireysel FM dağıtım modalı ( FMOdemeSecimDialog ). Top",
    "headings": [
      "6. Hibrit Platform Görünümü: Masaüstü vs Web Portalı",
      "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi"
    ],
    "content": "6. Hibrit Platform Görünümü: Masaüstü vs Web Portalı ️ Masaüstü Uygulaması (Tam Yetkili İşlem Merkezi) Kıstelyevm ve tatil düşümlü yasal hedef saat hesaplama motoru. Bireysel FM dağıtım modalı ( FMOdemeSecimDialog ). Toplu kurumsal kota (60s), tam ödeme (130s) veya devir atama. Kesinleşmiş dönem kilidi ve SudoDialogController yönetici şifre doğrulaması. Yazıcıdan yazdırma, Excel (.xlsx) ve PDF (.pdf) bordro dökümü. Web Portalı (Denetim, İzleme & Dışa Aktarma) Nöbet Paneli > Fazla Mesai Borç / Alacak (5a) sekmesi. Personelin hedef, fiili ve net bakiye saatlerini tarayıcıdan izleme. Onaylı izin günleri için \"X Gün İzinli\" rozeti ve hedef saat izahı. Pozitif bakiyeler yeşil, borçlu bakiyeler kırmızı durum rozetiyle sunulur. Yöneticiler için tek tıkla Excel ve PDF rapor indirme butonu ( DashboardExportButton )."
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai#mit-avcilari",
    "title": "Bordro, Mesai & Mit Avcısı (Kritik Kurallar) — Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html#mit-avcilari",
    "summary": "Bordro, Mesai & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Personel ay içinde ne kadar nöbet tutarsa tutsun, biriken tüm saatler o ay nakit fazla mesai olarak ödenebilir.\" Doğru Yasal Kural: 657 Sayılı Kanun ve",
    "headings": [
      "Bordro, Mesai & Mit Avcısı (Kritik Kurallar)",
      "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi"
    ],
    "content": "Bordro, Mesai & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Personel ay içinde ne kadar nöbet tutarsa tutsun, biriken tüm saatler o ay nakit fazla mesai olarak ödenebilir.\" Doğru Yasal Kural: 657 Sayılı Kanun ve kurum mevzuatı uyarınca bir personelin bir ayda alabileceği yasal fazla mesai ödeme tavanı 130 saattir . 130 saatin üzerindeki hak edişler silinmez, sonraki aya zorunlu saat bakiyesi olarak devreder. Yaygın Yanılgı (Mit 2) \"Radyasyon alanında çalışan tüm sağlık personeli de haftalık 40 saat üzerinden mesaiye tabidir.\" Doğru Yasal Kural: 3153 Sayılı Kanun gereğince radyasyon görevlilerinin haftalık çalışma süresi 35 saattir (günlük 7 saat). RADPYS, personelin görev tipine göre hedef saati otomatik 35 saat üzerinden hesaplar. Yaygın Yanılgı (Mit 3) \"Mutemetliğe onay verilip dönem kilitlendikten sonra nöbet çizelgesinde yapılan değişiklikler bordroya otomatik yansır.\" Doğru Yasal Kural: Mali audit izi gereğince FM Ödendi kararı verilmiş dönemler kesin kilitlenir. Çizelge değişikliği gerekiyorsa Sistem Yöneticisi Sudo şifresiyle kilidi kaldırmalı ve mutemetlik icmali yeniden üretilmelidir."
  },
  {
    "id": "10_nobet_borc_alacak_ve_fazla_mesai#sss-ve-sorun-giderme",
    "title": "7. Sıkça Sorulan Sorular & Kritik Uyarılar — Nöbet Borç / Alacak ve Fazla Mesai Yönetimi",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "10_nobet_borc_alacak_ve_fazla_mesai.html#sss-ve-sorun-giderme",
    "summary": "7. Sıkça Sorulan Sorular & Kritik Uyarılar Personelin kümülatif fazla mesaisi 150 saat ise neden sistem en fazla 130 saat ödemeye izin veriyor? 657 Sayılı Devlet Memurları Kanunu ve ilgili sağlık mevzuatı uyarınca bir pe",
    "headings": [
      "7. Sıkça Sorulan Sorular & Kritik Uyarılar",
      "Nöbet Borç / Alacak ve Fazla Mesai Yönetimi"
    ],
    "content": "7. Sıkça Sorulan Sorular & Kritik Uyarılar Personelin kümülatif fazla mesaisi 150 saat ise neden sistem en fazla 130 saat ödemeye izin veriyor? 657 Sayılı Devlet Memurları Kanunu ve ilgili sağlık mevzuatı uyarınca bir personelin bir ayda alabileceği yasal fazla mesai ödeme tavanı 130 saattir . Bu nedenle sistem 130 saatin üzerindeki kısmı otomatik olarak bir sonraki döneme devreder. 60 saatlik Kurumsal Kota personelin hakkını kısıtlar mı? Hayır. 60 saatlik kota bir bütçe kısıtı değil, personelin fiziksel ve ruhsal sağlığını korumak, aşırı yıpranmayı sınırlandırmak ve mesleki tükenmişliği (burnout) engellemek amacıyla kurum tarafından konulmuş bir iş sağlığı sınırıdır . 60 saatin üzerindeki saatler silinmez; sonraki aya bakiye olarak devredilerek personelin izin veya denkleştirme olarak dinlenmesi teşvik edilir. Eksik mesaisi (borcu) olan personele ödeme yapılabilir mi? Hayır. Kümülatif bakiyesi eksi veya sıfır olan personellerde [FM Öde] seçeneği sistem tarafından otomatik kilitlenir. Bu personeller için tek geçerli işlem borcun bir sonraki aya devredilmesidir ( SonrakiAyaEklendi ). Kaydedilmiş bir dönem neden kilitlenir ve kim açabilir? Mutemetliğe bildirilen bordro saatlerinin sonradan yetkisiz şekilde değiştirilmesini önlemek amacıyla, FM Ödendi kararı verildiğinde dönem kilitlenir. Kilit yalnızca idari amir veya Sistem Yöneticisi tarafından Sudo Yönetici Şifresi girilerek geçici olarak açılabilir."
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama",
    "title": "Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html",
    "summary": "Bu modül; radyoloji ve nükleer tıp çalışanlarının 5510 Sayılı Kanun kapsamındaki Fiili Hizmet Süresi Zammı (FHZ / Yıpranma Payı) puantajlarını ve Sağlık Bakanlığı'nın mevzuat baremlerine göre Sağlık İzni (Şua İzni) hakedişlerini 3 adımlı entegre bir sihirbaz ü",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (FHZ & Şua Özeti)",
      "2. Temel Eşikler & Yasal Baremler",
      "3. 3 Adımlı Entegre Puantaj Sihirbazı İş Akışı",
      "4. 5N1K Kural ve Arayüz Bileşen Envanteri",
      "Ekran Konumları ve Görsel Rehber",
      "5. Adım Adım İşlem Rehberi",
      "Dönemsel Görev Dağılımını İnceleme ve Otomatik Görev Atama",
      "Toplu Onay ve Fiili Hizmet Hesaplamaya Geçiş",
      "Fiili Hizmet Hesaplama, Kilit Güvenliği ve Şua Hakedişleri",
      "Yıllık Kilit ve SGK Puantaj Raporu Alma",
      "6. Web Portalı Şua Karnesi & Risk Seviyeleri",
      "️ Masaüstü Uygulaması (Yetkili Merkez)",
      "Web & Mobil Portal (Şua Karnesi & Risk İzleme)",
      "FHZ, Şua İzni & Mit Avcısı (Kritik Kurallar)",
      "7. Sıkça Sorulan Sorular ve Kritik Kilitler",
      "Soru 1: Bir dönemi kilitlemek istediğimde \"Bir önceki dönem kilitlenmeden bu dönem kilitlenemez\" hatası alıyorum. Neden?",
      "Soru 2: Personelin o yılki fiili radyasyon çalışması 1.800 saat (36 gün Şua) çıktı, fakat sistem 30 gün yazdı. Bir hesaplama hatası mı var?",
      "Soru 3: Yıllık Kilidi Kapat butonunu neden göremiyorum veya tıklayamıyorum?"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 3: Nöbet Dağıtım Motoru 11. Fiili Hizmet (FHZ) & Şua Modül 11 SGK Yıpranma & Şua İzni Hakedişi Fiili Hizmet ve Şua Hesaplama (FHZ) Bu modül; radyoloji ve nükleer tıp çalışanlarının 5510 Sayılı Kanun kapsamındaki Fiili Hizmet Süresi Zammı (FHZ / Yıpranma Payı) puantajlarını ve Sağlık Bakanlığı'nın mevzuat baremlerine göre Sağlık İzni (Şua İzni) hakedişlerini 3 adımlı entegre bir sihirbaz üzerinden yönetir. Personellerin çalıştığı radyasyonlu birimlere, nöbet çizelgelerine ve resmi onaylı izinlerine göre net fiili çalışma saatlerini, yıpranma sürelerini ve yıllık Şua günlerini hesaplayıp kilit altına alır. 20s Vizyonder Hızlı Karar Reçetesi (FHZ & Şua Özeti) 1. Dönem Döngüsünü Seçin Kurumunuzun bordro takvimine göre 15-14 SGK dönemini veya takvim ayını seçin. Onaylı izin günleri fiili süreden otomatik arındırılır. 2. 50 Saate 1 Gün Baremi Sistem personelin radyasyonlu birimdeki fiili çalışma saatlerini hesaplar; her 50 tam saat için 1 tam gün Şua izni otomatik tahakkuk ettirilir. 3. Sıralı Kilit & Yıllık Tavan Geçmiş aylar kilitlenmeden cari ay kilitlenemez. Yıllık toplamda 30 günlük yasal tavan aşılamaz; yıl sonunda yönetici tek tıkla yıllık kilidi onaylar. 2. Temel Eşikler & Yasal Baremler Şua Hak Ediş Baremi 50.0 saat = 1 gün Sağlık Bakanlığı baremleri gereğince personelin fiilen radyasyon alanında çalıştığı her 50 saat için 1 tam gün Şua izni hakedilir. Yıllık Azami Tavan 30.0 gün/yıl Personel ne kadar fiili çalışma yaparsa yapsın, bir takvim yılı içinde kazanılabilecek Şua İzni azami 30 gün ile sınırlandırılmıştır. Çalışma Koşulu Koşul A / B Koşul A (7.0s radyasyon, Şua hakkı var) ile Koşul B (8.0s idari/destek, Şua hakkı yok) kurumsal rejimlere göre tam ayrıştırılır. SGK Bordro Döngüsü 15 - 14 dönemi SGK 5510 standardı uyarınca her ayın 15'i ile bir sonraki ayın 14'ü arası hesaplanır. Ayarlar sekmesinden esnetilebilir. 3. 3 Adımlı Entegre Puantaj Sihirbazı İş Akışı graph TD A[\"Bordro Dönemi Seçimi: 15.AA - 14.AA\"] --> B[\"1. Adım: Görev Dağılımı\"] B --> C{\"Görev Kaydı Var mı?\"} C -->|Hayır| D[\"Otomatik Görev Ata\"] D --> E[\"Taslak Dağılımlar Listelenir\"] C -->|Evet| E E --> F[\"Farklı Birimde Çalışanları İncele: Sadece Değişenler\"] F --> G[\"Onayla ve Hesaplamaya Geç\"] G --> H[\"2. Adım: Fiili Hizmet Hesaplama\"] H --> I{\"Dönemde Onaysız İzin Var mı?\"} I -->|Evet| J[\"UYARI: FhzOnaysizIzinUyariDialog İzin Yönetimi Ekranından Resmi Onay Veriniz\"] I -->|Hayır| K[\"Hesaplama Motoru: Koşul A 7s / Koşul B 8s\"] K --> L[\"İzin Düşümü & Net Fiili Radyasyon Saati\"] L --> M[\"Şua Gün Hesabı: Her 50s = 1 Gün, Maks 30 Gün\"] M --> N{\"Bir Önceki Dönem Kilitli mi?\"} N -->|Hayır| O[\"HATA: Önceki Dönemi Kilitleyiniz\"] N -->|Evet| P[\"Dönemi Kilitle: Veri Dondurulur\"] P --> Q[\"Yıl Sonu: Yıllık Kilidi Kapat Admin Rolü\"] P --> R[\"3. Adım: Puantaj Raporuna Geç\"] R --> S[\"SGK ve Mutemetlik İcmal Tablosu\"] S --> T[\"Excel İndir & Resmi Bordroya İlet\"] 4. 5N1K Kural ve Arayüz Bileşen Envanteri Arayüz Bileşeni Görevi ve Amacı (NE/NEDEN) Formül / Mantık (NASIL) Tetiklenme Anı (NE ZAMAN) Yetkili Rol (KİM) Durum [Sihirbaz Adım Göstergesi] 3 adımlı iş akışını (Görev Dağılımı Hesaplama Rapor) yönlendirmek. Adım tıklandığında sekme değişir; dönem parametreleri sekmeler arası senkronize edilir. Adım çubuğuna tıklandığında Nöbet Sorumlusu, Amir Aktif [Yıl] & [Ay] Seçimi 5510 Sayılı Kanun kapsamındaki 15-14 bordro dönemini seçmek. 15.ay ile 14.(ay+1) aralığı dinamik hesaplanır. Ayarlar sekmesinden esnetilebilir. Açılır kutu veya chevron değiştiğinde Sorumlu, Mutemet Aktif [Sadece Değişenleri Göster] Asıl birimi dışında görevlendirilen personelleri hızlıca süzmek. Kadro birimi ile görev yeri farklı olan satırları filtreler; kırmızı renkle vurgular. Onay kutusu işaretlendiğinde Birim Sorumlusu Aktif [Otomatik Görev Ata] Dönemdeki personellerin görev yerlerini tek tıkla otomatik doldurmak. Personelin varsayılan birimini ve nöbet çizelgesini tarayarak taslak dağılım üretir. Butona tıklandığında Nöbet Sorumlusu Aktif [Onayla ve Hesaplamaya Geç] Taslak görev dağılımlarını onaylayıp 2. Adıma (Hesaplama) aktarmak. Taslak satırları 'Onaylı' yapar ve sekmeyi otomatik olarak [Fiili Hizmet Hesaplama] sekmesine taşır. Butona tıklandığında Birim Sorumlusu, Amir Aktif [Dönemi Kilitle] / [Kilidi Aç] Hesaplanmış ayın fiili hizmet puantajını kesinleştirip yetkisiz değişiklikleri engellemek. Önceki dönemin kilit durumunu denetler; otomatik kayıt yapar ve dönemi kilitler/açar. Butona tıklandığında Birim Sorumlusu, Amir Aktif [Yılı Kilitle] / [Yıllık Kilit Aç] Yılın tüm 12 ayını ve Şua izni hakedişlerini kalıcı dondurmak. Hesaplama araç çubuğundaki [Yılı Kilitle] butonuyla veya İzin modülündeki [Devir Aktar & Yılını Kilitle] işlemiyle tetiklenir. Yılın 12 ayı tamamlandığında kaynak yılın fiili saatlerini dondurur ve yeni yılın Şua İzni hakedişini kesinleştirir. Sadece Admin yetkisiyle açılabilir. Butona tıklandığında veya İzin devir aktarımında Sistem Yöneticisi (Admin) Aktif [Excel İndir] SGK ve mutemetlik onaylı resmi puantaj dökümünü Excel formatında almak. Kimlik no, ad soyad, SGK günü, izin, fiili saat ve Şua günlerini Excel'e aktarır. Butona tıklandığında Mutemet, İdari Amir Aktif Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Fiili Hizmet ve Şua > 1. Adım: Dönemsel Görev Dağılımı 1. Adım: Görev Dağılımı & Otomatik Atama Simülasyon Notu: 15.AA - 14.AA SGK bordro döneminde personel görev dağılımı ve otomatik görev atama ekranı. ️ Ekran Konumu: Fiili Hizmet ve Şua > 2. Adım: Fiili Hizmet ve Şua Hesaplama 2. Adım: FHZ & Şua Hakediş Hesaplama Simülasyon Notu: Koşul A (7s) / Koşul B (8s) ayrımı, onaylı izin düşümleri ve 50 saate 1 gün Şua izni hakediş tablosu. ️ Ekran Konumu: Fiili Hizmet ve Şua > 3. Adım: Puantaj Raporu 3. Adım: Resmi SGK Puantaj İcmali Simülasyon Notu: SGK ve mutemetlik bildirimine hazır aylık/yıllık resmi Fiili Hizmet Zammı puantaj cetveli. ️ Ekran Konumu: Fiili Hizmet Hesaplama > Onaysız İzin Güvenlik Uyarısı FhzOnaysizIzinUyariDialog Emniyet Kilidi Simülasyon Notu: Dönem içinde onayı tamamlanmamış i"
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi (FHZ & Şua Özeti) — Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi (FHZ & Şua Özeti) 1. Dönem Döngüsünü Seçin Kurumunuzun bordro takvimine göre 15-14 SGK dönemini veya takvim ayını seçin. Onaylı izin günleri fiili süreden otomatik arındırılır. 2. 50 Sa",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (FHZ & Şua Özeti)",
      "Fiili Hizmet ve Şua Hesaplama (FHZ)"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi (FHZ & Şua Özeti) 1. Dönem Döngüsünü Seçin Kurumunuzun bordro takvimine göre 15-14 SGK dönemini veya takvim ayını seçin. Onaylı izin günleri fiili süreden otomatik arındırılır. 2. 50 Saate 1 Gün Baremi Sistem personelin radyasyonlu birimdeki fiili çalışma saatlerini hesaplar; her 50 tam saat için 1 tam gün Şua izni otomatik tahakkuk ettirilir. 3. Sıralı Kilit & Yıllık Tavan Geçmiş aylar kilitlenmeden cari ay kilitlenemez. Yıllık toplamda 30 günlük yasal tavan aşılamaz; yıl sonunda yönetici tek tıkla yıllık kilidi onaylar."
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama#kpi-kartlari",
    "title": "2. Temel Eşikler & Yasal Baremler — Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html#kpi-kartlari",
    "summary": "2. Temel Eşikler & Yasal Baremler Şua Hak Ediş Baremi 50.0 saat = 1 gün Sağlık Bakanlığı baremleri gereğince personelin fiilen radyasyon alanında çalıştığı her 50 saat için 1 tam gün Şua izni hakedilir. Yıllık Azami Tava",
    "headings": [
      "2. Temel Eşikler & Yasal Baremler",
      "Fiili Hizmet ve Şua Hesaplama (FHZ)"
    ],
    "content": "2. Temel Eşikler & Yasal Baremler Şua Hak Ediş Baremi 50.0 saat = 1 gün Sağlık Bakanlığı baremleri gereğince personelin fiilen radyasyon alanında çalıştığı her 50 saat için 1 tam gün Şua izni hakedilir. Yıllık Azami Tavan 30.0 gün/yıl Personel ne kadar fiili çalışma yaparsa yapsın, bir takvim yılı içinde kazanılabilecek Şua İzni azami 30 gün ile sınırlandırılmıştır. Çalışma Koşulu Koşul A / B Koşul A (7.0s radyasyon, Şua hakkı var) ile Koşul B (8.0s idari/destek, Şua hakkı yok) kurumsal rejimlere göre tam ayrıştırılır. SGK Bordro Döngüsü 15 - 14 dönemi SGK 5510 standardı uyarınca her ayın 15'i ile bir sonraki ayın 14'ü arası hesaplanır. Ayarlar sekmesinden esnetilebilir."
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama#is-akisi-semasi",
    "title": "3. 3 Adımlı Entegre Puantaj Sihirbazı İş Akışı — Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html#is-akisi-semasi",
    "summary": "3. 3 Adımlı Entegre Puantaj Sihirbazı İş Akışı graph TD A[\"Bordro Dönemi Seçimi: 15.AA - 14.AA\"] --> B[\"1. Adım: Görev Dağılımı\"] B --> C{\"Görev Kaydı Var mı?\"} C -->|Hayır| D[\"Otomatik Görev Ata\"] D --> E[\"Taslak Dağılı",
    "headings": [
      "3. 3 Adımlı Entegre Puantaj Sihirbazı İş Akışı",
      "Fiili Hizmet ve Şua Hesaplama (FHZ)"
    ],
    "content": "3. 3 Adımlı Entegre Puantaj Sihirbazı İş Akışı graph TD A[\"Bordro Dönemi Seçimi: 15.AA - 14.AA\"] --> B[\"1. Adım: Görev Dağılımı\"] B --> C{\"Görev Kaydı Var mı?\"} C -->|Hayır| D[\"Otomatik Görev Ata\"] D --> E[\"Taslak Dağılımlar Listelenir\"] C -->|Evet| E E --> F[\"Farklı Birimde Çalışanları İncele: Sadece Değişenler\"] F --> G[\"Onayla ve Hesaplamaya Geç\"] G --> H[\"2. Adım: Fiili Hizmet Hesaplama\"] H --> I{\"Dönemde Onaysız İzin Var mı?\"} I -->|Evet| J[\"UYARI: FhzOnaysizIzinUyariDialog İzin Yönetimi Ekranından Resmi Onay Veriniz\"] I -->|Hayır| K[\"Hesaplama Motoru: Koşul A 7s / Koşul B 8s\"] K --> L[\"İzin Düşümü & Net Fiili Radyasyon Saati\"] L --> M[\"Şua Gün Hesabı: Her 50s = 1 Gün, Maks 30 Gün\"] M --> N{\"Bir Önceki Dönem Kilitli mi?\"} N -->|Hayır| O[\"HATA: Önceki Dönemi Kilitleyiniz\"] N -->|Evet| P[\"Dönemi Kilitle: Veri Dondurulur\"] P --> Q[\"Yıl Sonu: Yıllık Kilidi Kapat Admin Rolü\"] P --> R[\"3. Adım: Puantaj Raporuna Geç\"] R --> S[\"SGK ve Mutemetlik İcmal Tablosu\"] S --> T[\"Excel İndir & Resmi Bordroya İlet\"]"
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama#5n1k-tablosu",
    "title": "4. 5N1K Kural ve Arayüz Bileşen Envanteri — Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html#5n1k-tablosu",
    "summary": "4. 5N1K Kural ve Arayüz Bileşen Envanteri Arayüz Bileşeni Görevi ve Amacı (NE/NEDEN) Formül / Mantık (NASIL) Tetiklenme Anı (NE ZAMAN) Yetkili Rol (KİM) Durum [Sihirbaz Adım Göstergesi] 3 adımlı iş akışını (Görev Dağılım",
    "headings": [
      "4. 5N1K Kural ve Arayüz Bileşen Envanteri",
      "Fiili Hizmet ve Şua Hesaplama (FHZ)"
    ],
    "content": "4. 5N1K Kural ve Arayüz Bileşen Envanteri Arayüz Bileşeni Görevi ve Amacı (NE/NEDEN) Formül / Mantık (NASIL) Tetiklenme Anı (NE ZAMAN) Yetkili Rol (KİM) Durum [Sihirbaz Adım Göstergesi] 3 adımlı iş akışını (Görev Dağılımı Hesaplama Rapor) yönlendirmek. Adım tıklandığında sekme değişir; dönem parametreleri sekmeler arası senkronize edilir. Adım çubuğuna tıklandığında Nöbet Sorumlusu, Amir Aktif [Yıl] & [Ay] Seçimi 5510 Sayılı Kanun kapsamındaki 15-14 bordro dönemini seçmek. 15.ay ile 14.(ay+1) aralığı dinamik hesaplanır. Ayarlar sekmesinden esnetilebilir. Açılır kutu veya chevron değiştiğinde Sorumlu, Mutemet Aktif [Sadece Değişenleri Göster] Asıl birimi dışında görevlendirilen personelleri hızlıca süzmek. Kadro birimi ile görev yeri farklı olan satırları filtreler; kırmızı renkle vurgular. Onay kutusu işaretlendiğinde Birim Sorumlusu Aktif [Otomatik Görev Ata] Dönemdeki personellerin görev yerlerini tek tıkla otomatik doldurmak. Personelin varsayılan birimini ve nöbet çizelgesini tarayarak taslak dağılım üretir. Butona tıklandığında Nöbet Sorumlusu Aktif [Onayla ve Hesaplamaya Geç] Taslak görev dağılımlarını onaylayıp 2. Adıma (Hesaplama) aktarmak. Taslak satırları 'Onaylı' yapar ve sekmeyi otomatik olarak [Fiili Hizmet Hesaplama] sekmesine taşır. Butona tıklandığında Birim Sorumlusu, Amir Aktif [Dönemi Kilitle] / [Kilidi Aç] Hesaplanmış ayın fiili hizmet puantajını kesinleştirip yetkisiz değişiklikleri engellemek. Önceki dönemin kilit durumunu denetler; otomatik kayıt yapar ve dönemi kilitler/açar. Butona tıklandığında Birim Sorumlusu, Amir Aktif [Yılı Kilitle] / [Yıllık Kilit Aç] Yılın tüm 12 ayını ve Şua izni hakedişlerini kalıcı dondurmak. Hesaplama araç çubuğundaki [Yılı Kilitle] butonuyla veya İzin modülündeki [Devir Aktar & Yılını Kilitle] işlemiyle tetiklenir. Yılın 12 ayı tamamlandığında kaynak yılın fiili saatlerini dondurur ve yeni yılın Şua İzni hakedişini kesinleştirir. Sadece Admin yetkisiyle açılabilir. Butona tıklandığında veya İzin devir aktarımında Sistem Yöneticisi (Admin) Aktif [Excel İndir] SGK ve mutemetlik onaylı resmi puantaj dökümünü Excel formatında almak. Kimlik no, ad soyad, SGK günü, izin, fiili saat ve Şua günlerini Excel'e aktarır. Butona tıklandığında Mutemet, İdari Amir Aktif"
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama#ekran-goruntuleri",
    "title": "Ekran Konumları ve Görsel Rehber — Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html#ekran-goruntuleri",
    "summary": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Fiili Hizmet ve Şua > 1. Adım: Dönemsel Görev Dağılımı 1. Adım: Görev Dağılımı & Otomatik Atama Simülasyon Notu: 15.AA - 14.AA SGK bordro döneminde personel görev dağılımı",
    "headings": [
      "Ekran Konumları ve Görsel Rehber",
      "Fiili Hizmet ve Şua Hesaplama (FHZ)"
    ],
    "content": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Fiili Hizmet ve Şua > 1. Adım: Dönemsel Görev Dağılımı 1. Adım: Görev Dağılımı & Otomatik Atama Simülasyon Notu: 15.AA - 14.AA SGK bordro döneminde personel görev dağılımı ve otomatik görev atama ekranı. ️ Ekran Konumu: Fiili Hizmet ve Şua > 2. Adım: Fiili Hizmet ve Şua Hesaplama 2. Adım: FHZ & Şua Hakediş Hesaplama Simülasyon Notu: Koşul A (7s) / Koşul B (8s) ayrımı, onaylı izin düşümleri ve 50 saate 1 gün Şua izni hakediş tablosu. ️ Ekran Konumu: Fiili Hizmet ve Şua > 3. Adım: Puantaj Raporu 3. Adım: Resmi SGK Puantaj İcmali Simülasyon Notu: SGK ve mutemetlik bildirimine hazır aylık/yıllık resmi Fiili Hizmet Zammı puantaj cetveli. ️ Ekran Konumu: Fiili Hizmet Hesaplama > Onaysız İzin Güvenlik Uyarısı FhzOnaysizIzinUyariDialog Emniyet Kilidi Simülasyon Notu: Dönem içinde onayı tamamlanmamış izin bulunduğunda hatalı SGK bildirimini önleyen güvenlik bariyeri."
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama#kullanim-rehberi",
    "title": "5. Adım Adım İşlem Rehberi — Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html#kullanim-rehberi",
    "summary": "5. Adım Adım İşlem Rehberi 1 Dönemsel Görev Dağılımını İnceleme ve Otomatik Görev Atama Sol ana menüden [Fiili Hizmet ve Şua] modülüne tıklayın. Sihirbaz göstergesinde 1. Adım: Görev Dağılımı sekmesinde olduğunuzu doğrul",
    "headings": [
      "5. Adım Adım İşlem Rehberi",
      "Fiili Hizmet ve Şua Hesaplama (FHZ)"
    ],
    "content": "5. Adım Adım İşlem Rehberi 1 Dönemsel Görev Dağılımını İnceleme ve Otomatik Görev Atama Sol ana menüden [Fiili Hizmet ve Şua] modülüne tıklayın. Sihirbaz göstergesinde 1. Adım: Görev Dağılımı sekmesinde olduğunuzu doğrulayın. [Yıl] ve [Ay] kutularından SGK bordro dönemini seçin (Dönem tarihleri altta 15.AA.YYYY - 14.AA.YYYY olarak görünür). Eğer dönemin görev dağılımı henüz oluşturulmamışsa, üst paneldeki [Otomatik Görev Ata] butonuna tıklayın. Sistem personellerin kadro birimlerini ve nöbet çizelgelerini tarayarak taslak dağılımları tek tıkla oluşturur. Farklı bir birimde geçici çalışan personelleri incelemek için [Sadece Değişenleri Göster] kutusunu işaretleyin (Farklı birim görevlendirmeleri kırmızı renkle vurgulanır). Özel görevlendirme tanımlamak için personelin satırını seçip [Düzenle] butonuna basın (veya yeni bir satır için [Yeni Görev] butonuna tıklayın); açılan modal pencerede tarih aralığı, birim ve günlük çalışma saatini (0-24s) girip onaylayın. 2 Toplu Onay ve Fiili Hizmet Hesaplamaya Geçiş Görev dağılım listesini gözden geçirdikten sonra sağ üstteki [Onayla ve Hesaplamaya Geç] butonuna tıklayın. Sistem tüm taslak satırları resmi onay durumuna geçirir ve sihirbazı otomatik olarak 2. Adım: Fiili Hizmet Hesaplama ekranına aktarır. 3 Fiili Hizmet Hesaplama, Kilit Güvenliği ve Şua Hakedişleri Fiili Hizmet Hesaplama ekranında seçili dönemin iş günü, resmi tatil ve personelin nöbet/görev saatleri harmanlanarak tablo otomatik doldurulur: Çalışma Koşulu: Radyasyonlu alanda çalışan personelde Koşul A (7.0 saat), idari alandakilerde Koşul B (8.0 saat) olarak listelenir. Brüt İş Günü & İzin Düşümü: Ay içi mesai günleri hesaplanır; personelin resmi onaylı izinleri düşülerek net çalışma günleri gösterilir. Net Fiili Çalışma Saati: Fiilen radyasyonlu alanda icra edilen nöbet ve mesai saatlerinin net toplamıdır. Hesaplanan Şua İzni (Gün): Her 50 fiili radyasyon saatine 1 gün olarak hesaplanır (Yıllık 30 gün tavanı aşıldığında sistem otomatik tavan kısıtı koyar). Onaysız İzin Güvenlik Uyarısı (FhzOnaysizIzinUyariDialog) Eğer dönem içinde henüz resmi onayı tamamlanmamış (taslak veya ön onaylı) izinler varsa sistem yasal hatayı önlemek adına hesaplamayı durdurur. Bu durumda İzin Yönetimi sayfasına geçerek izinlere resmi onay verdikten sonra hesaplama ekranına dönünüz. Sonuçlar doğrulandığında üst araç çubuğundaki [Dönemi Kilitle] butonuna tıklayın. Sistem bir önceki dönemin kilitli olup olmadığını kontrol eder ve dönemi yetkisiz değişikliklere kapatır. 4 Yıllık"
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama#hibrit-entegrasyon",
    "title": "6. Web Portalı Şua Karnesi & Risk Seviyeleri — Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html#hibrit-entegrasyon",
    "summary": "6. Web Portalı Şua Karnesi & Risk Seviyeleri ️ Masaüstü Uygulaması (Yetkili Merkez) 3 adımlı sihirbaz akışı ile görev dağılımı ve onaylama Otomatik görev atama ve özel tarihli görevlendirme girişi Onaysız izin güvenlik b",
    "headings": [
      "6. Web Portalı Şua Karnesi & Risk Seviyeleri",
      "Fiili Hizmet ve Şua Hesaplama (FHZ)"
    ],
    "content": "6. Web Portalı Şua Karnesi & Risk Seviyeleri ️ Masaüstü Uygulaması (Yetkili Merkez) 3 adımlı sihirbaz akışı ile görev dağılımı ve onaylama Otomatik görev atama ve özel tarihli görevlendirme girişi Onaysız izin güvenlik bariyeri ve otomatik düşümler Sıralı dönem kilidi ve Admin yetkili yıllık kilitleme SGK formatında Excel ve PDF puantaj rapor dökümü Web & Mobil Portal (Şua Karnesi & Risk İzleme) Personeller ve idareciler tarayıcı üzerinden Personel Şua Karnesi paneline erişerek radyasyon yükünü takip eder: Yüksek Risk (Kalan ≥ 20 Gün) İzinlerin yanma riski yüksek, acil planlama gerekli Orta Risk (Kalan 1 - 19 Gün) Yıl sonuna kadar dengeli kullanım önerilir Uyumlu (Kalan 0 Gün) Hak edilen tüm Şua izinleri başarıyla kullandırıldı"
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama#mit-avcilari",
    "title": "FHZ, Şua İzni & Mit Avcısı (Kritik Kurallar) — Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html#mit-avcilari",
    "summary": "FHZ, Şua İzni & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Yıl boyu çok yoğun nöbet tutan personelin 1.800 saat fiili çalışması varsa 36 gün Şua İzni kullanabilir.\" Doğru Yasal Kural: Sağlık Bakanlığı baremleri",
    "headings": [
      "FHZ, Şua İzni & Mit Avcısı (Kritik Kurallar)",
      "Fiili Hizmet ve Şua Hesaplama (FHZ)"
    ],
    "content": "FHZ, Şua İzni & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Yıl boyu çok yoğun nöbet tutan personelin 1.800 saat fiili çalışması varsa 36 gün Şua İzni kullanabilir.\" Doğru Yasal Kural: Sağlık Bakanlığı baremleri ve Danıştay içtihatları gereğince bir takvim yılında kazanılabilecek azami Şua İzni 30 gündür . 30 günü aşan hesaplamalar mevzuat tavanına sabitlenir. Yaygın Yanılgı (Mit 2) \"Personel yıllık izinli veya sağlık raporlu olduğu günlerde de Fiili Hizmet Zammı (yıpranma) kazanmaya devam eder.\" Doğru Yasal Kural: 5510 Sayılı Kanunun 40. maddesi uyarınca yıpranma payı yalnızca personelin radyasyon kaynağıyla fiilen çalıştığı günler için verilir. İzin ve rapor günleri puantajdan kesinlikle düşülür. Yaygın Yanılgı (Mit 3) \"Aylık dönemleri tek tek kilitlemeye gerek yoktur; yıl sonunda doğrudan yıllık kilit yapılabilir.\" Doğru Yasal Kural: SGK bildirim bütünlüğü gereği dönemler atlanarak kilitlenemez. RADPYS kural motoru, bir önceki ay kilitlenmeden cari ayın kilitlenmesine kesinlikle izin vermez."
  },
  {
    "id": "11_fiili_hizmet_ve_sua_hesaplama#sss-ve-sorun-giderme",
    "title": "7. Sıkça Sorulan Sorular ve Kritik Kilitler — Fiili Hizmet ve Şua Hesaplama (FHZ)",
    "category": "3. Akıllı Nöbet & Mesai › Bölüm",
    "url": "11_fiili_hizmet_ve_sua_hesaplama.html#sss-ve-sorun-giderme",
    "summary": "7. Sıkça Sorulan Sorular ve Kritik Kilitler Soru 1: Bir dönemi kilitlemek istediğimde \"Bir önceki dönem kilitlenmeden bu dönem kilitlenemez\" hatası alıyorum. Neden? Mevzuat ve SGK denetim bütünlüğü gereğince dönemler atl",
    "headings": [
      "7. Sıkça Sorulan Sorular ve Kritik Kilitler",
      "Fiili Hizmet ve Şua Hesaplama (FHZ)"
    ],
    "content": "7. Sıkça Sorulan Sorular ve Kritik Kilitler Soru 1: Bir dönemi kilitlemek istediğimde \"Bir önceki dönem kilitlenmeden bu dönem kilitlenemez\" hatası alıyorum. Neden? Mevzuat ve SGK denetim bütünlüğü gereğince dönemler atlanarak kilitlenemez. Önceki aylara ait eksik puantajların tamamlanıp kilitlenmesi zorunludur. Geçmiş ayları sırasıyla kilitleyerek cari aya ulaşabilirsiniz. Soru 2: Personelin o yılki fiili radyasyon çalışması 1.800 saat (36 gün Şua) çıktı, fakat sistem 30 gün yazdı. Bir hesaplama hatası mı var? Hayır, bu bir hata değildir. Sağlık Bakanlığı'nın mevzuat baremleri uyarınca bir takvim yılı içerisinde kazanılabilecek Şua İzni toplamı azami 30 gün ile sınırlandırılmıştır. 30 günü aşan kısımlarda sistem yasal tavan kısıtını uygular. Soru 3: Yıllık Kilidi Kapat butonunu neden göremiyorum veya tıklayamıyorum? Yıllık kilit işlemi, geçmişe dönük tüm puantajı ve Şua hakedişlerini kalıcı olarak dondurduğundan (RED-09 emniyet kilidi), yalnızca Sistem Yöneticisi (Admin) veya Süpervizör rolüne sahip kullanıcılar tarafından yürütülebilir."
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma",
    "title": "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html",
    "summary": "Radyasyonla çalışan personelin mesleki maruziyet kayıtlarını, laboratuvar raporu (TENMAK, RADAT, Excel) içe aktarımını, kümülatif yasal limitleri ($H_p(10)$ derin doz ve $H_p(0.07)$ yüzey dozu), inceleme eşiğini aşan vakalarda 10 iş günü içinde tanzimi zorunlu",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Dozimetre & RKS Özeti)",
      "2. Arayüz Bileşenleri ve 5N1K Tablosu",
      "3. Laboratuvar Dosyası İçe Aktarma Sihirbazı (3 Adım)",
      "Dosya & Sağlayıcı Seçimi",
      "Akıllı Eşleştirme & Manuel Personel Seçimi",
      "Kayıt, Eşik Alarmı & Hata Raporlama",
      "Önizleme Tablosunda Doğrudan Personel Eşleme & Akıllı Eşleşme Hafızası",
      "4. Dozimetre Kokpiti ve Manuel Ölçüm Girişi",
      "Dozimetre Takip Kokpiti ve Doz Renk Skalası",
      "Manuel Dozimetre Ölçümü Ekleme",
      "Tek ve Ferah 8 Sütunlu Bütünleşik Aksiyon Kokpiti & Güvenlik Kilitli İşlemler",
      "5. Rol Tabanlı RD.F43 Doz Araştırma Sihirbazı ve Akıllı Karar Motoru (CDSS)",
      "Çalışan Beyanı ve Kullanım Koşulları",
      "RKS Saha İncelemesi ve Ortam Doğrulaması",
      "Akıllı Klinik Karar ve Teşhis Motoru",
      "Yasal Değerlendirme, DÖF ve KVKK Kasası",
      "Akıllı Devam Etme & Gerekçeli Düzeltme Modu (Audit Trail)",
      "RD.F43 Doz Araştırma Sihirbazı Ekran Görüntüleri",
      "6. Hibrit Arayüz ve Web Portalı Görünümü",
      "Masaüstü Yönetim İstemcisi (PySide6)",
      "Web & Mobil Portalı (DozimetreDashboard)",
      "7. Dozimetre ve RD.F43 Karar Destek Akış Şeması",
      "Dozimetre Güvenliği & Mit Avcısı (Kritik Kurallar)",
      "8. Sıkça Sorulan Sorular (SSS)",
      "Soru 1: Dozimetre raporu dosyasını içe aktarırken bazı personeller sarı/kırmızı uyarıyla eşleşmedi olarak görünüyor. Ne yapmalıyım?"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 4: Dozimetre & Sağlık 12. Dozimetre & RD.F43 MODÜL 12 NDK & Mevzuat Uyumlu 10 İş Günü Form Kuralı 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması Radyasyonla çalışan personelin mesleki maruziyet kayıtlarını, laboratuvar raporu (TENMAK, RADAT, Excel) içe aktarımını, kümülatif yasal limitleri ($H_p(10)$ derin doz ve $H_p(0.07)$ yüzey dozu), inceleme eşiğini aşan vakalarda 10 iş günü içinde tanzimi zorunlu resmi RD.F43 Doz Araştırma Formu sürecini ve RKS net maruziyet hesaplama algoritmasını yöneten merkezi modüldür. Aylık İnceleme Eşiği 2.0 mSv Tek ölçümde bu eşik aşıldığında resmi RD.F43 araştırma formu açılır. Yıllık Kümülatif Sınır 20.0 mSv Takvim yılı toplamı 20 mSv'yi aşarsa aktif radyasyon nöbetleri bloke edilir. Gebe Çalışan Fötus Tavanı 1.0 mSv Gebelik süresi boyunca alınabilecek azami toplam dozdur; aşımda idari görev zorunludur. Resmi Form Süresi 10 İş Günü Bildirim tarihinden itibaren NDK onaylı RD.F43 formunun kapatılması gereken yasal mühlet. Dozimetre Laboratuvarı Sağlayıcı Desteği: Sistemimiz TENMAK , RADAT ve Genel Excel/CSV şablonlarını doğrudan tanır. Kurumunuzun çalıştığı akredite dozimetre merkezi veya hastane içi laboratuvarı bu formatların dışında farklı bir dosya raporu üretiyorsa, örnek bir dozimetre raporu ile yazılım destek ekibimize başvurunuz . Yazılım destek ekibimiz kurumunuza özel ayrıştırıcıyı sisteme hızla entegre edecektir. 20s Vizyonder Hızlı Karar Reçetesi (Dozimetre & RKS Özeti) 1. Laboratuvar Dosyasını Yükleyin TENMAK, RADAT veya Genel Excel/CSV dosyasını içe aktarma sihirbazına bırakın. Personel TC veya Dozimetre seri no üzerinden kayıtlar otomatik eşleşir. 2. Limit ve Renk Uyarıları Derin doz ($H_p(10)$) 2.0 mSv aylık eşiği aşarsa sarı alarm; kümülatif doz 20 mSv sınırına yaklaştığında kırmızı alarm verilir ve nöbet planı uyarılır. 3. 10 İş Gününde RD.F43 Tanzimi Eşik aşımında sistem resmi RD.F43 sürecini başlatır. Tıbbi tetkik veya artefakt ayrımı yapılarak net mesleki doz hesaplanır ve 10 iş gününde form kapatılır. 2. Arayüz Bileşenleri ve 5N1K Tablosu Dozimetre Takibi modülündeki ekran kontrolleri, butonlar ve filtreleme araçlarının işlevsel kullanım kılavuzu: Bileşen / Buton Türü Ne İşe Yarar? (Ne?) Kim Kullanır? (Kim?) Ne Zaman Kullanılır? (Ne Zaman?) Nerede Yer Alır? [Laboratuvardan İçe Aktar] Buton TENMAK/RADAT/Excel doz raporlarını aktarır; önizlemede çift tıkla [Personel Seç] penceresinden manuel eşleme, [Kalıcı Hafızaya Kaydet] ve [Eşleşmeyenleri Excel Olarak İndir] imkanı sunar. RKS / Dozimetre Sorumlusu Aylık dozimetre kaset sonuçları geldiğinde Üst Araç Çubuğu [Ölçüm Ekle] Buton Münferit veya Elektronik Kişisel Dozimetre (EPD) ara ölçümü kaydeder. RKS / Süpervizör Tekil acil ölçüm veya yeni kart girişinde Üst Araç Çubuğu [Dönem Filtresi] Açılır Kutu Tabloyu seçilen yıl ve döneme göre anında süzer. Tüm Kullanıcılar Geçmiş periyot kayıtları sorgulanırken Filtre Paneli [Dozimetre Tipi] Açılır Kutu Tüm Vücut, Yüzük/Ekstremite, Göz Lensi ve EPD türlerini ayrıştırır. RKS Ekstremite veya lens dozları denetlenirken Filtre Paneli [Doz Araştırma Formu Aç] Buton 2.0 mSv eşiğini aşan veya anomali gösteren vaka için IAEA GSG-7, Webster formüllü ve NDK karar matrisli 4 adımlı resmi RD.F43 sihirbazını başlatır. Daha önce başlatılmış açık bir inceleme varsa engellemeden doğrudan kaldığı yerden devam ettirir. RKS / Kurum Amiri Eşik aşımı veya doz anomalisi tespitinde Aksiyonlar Sekmesi (Üst Araç Çubuğu) [Düzeltme Yap / Formu Yeniden Aç] Buton Kapatılmış RD.F43 raporunda sehven yapılan hataları denetim izine gerekçe notu düşerek güvenle düzeltmeye açar. RKS / Kurum Amiri Kapatılmış tutanaklarda sehven hata tespit edildiğinde Resmi Rapor Görüntüleyici Alt Paneli [Takip Ölçümü Planla] Buton Modern planlama penceresiyle takip nedeni, dozimetre türü, başlangıç/bitiş tarihleri ve açıklama notu girilerek şüpheli vakalara ara takip veya EPD ölçüm görevi tanımlar. RKS / Dozimetre Sorumlusu Risk incelemesi ve yakın izleme gerektiren vakalarda Aksiyonlar Sekmesi (Üst Araç Çubuğu) [Birim İncelemesi Ekle] Buton RKS saha gözlemini, birim çalışma koşullarını, cihaz durumunu ve ortam radyasyon notlarını kurumsal kayıt penceresine işler. RKS / Dozimetre Sorumlusu Saha çalışma şartları ve birim ortam denetiminde Aksiyonlar Sekmesi (Üst Araç Çubuğu) [Formu Görüntüle] Buton Başlatılmış RD.F43 araştırma tutanağını, CDSS kural motoru kararlarını veya DÖF dosya detaylarını doğrudan incelemeye açar. RKS / Kurum Amiri Açık dosya takibinde veya kapatılmış arşiv incelemesinde Aksiyonlar Sekmesi (Üst Araç Çubuğu) [Aksiyonu Kapat] Buton Güvenlik kilitli modern kapatma penceresini açar. RD.F43 tutanağı düzenlenmemiş ve resmi dosya/karar numarası girilmemiş vakaların kapatılmasını engelleyerek denetim açığını önler; gerekçe ve resmi dosya numarasıyla yasal olarak arşive kaldırır. RKS / Kurum Amiri Soruşturması tamamlanan RD.F43 dosyalarının arşivlenmesinde Aksiyonlar Sekmesi (Üst Araç Çubuğu) [Önerilen Kararı ve Bulguları Forma Aktar] Buton RDS kurumsal zümrüt yeşili, 36px ergonomik yüksek kontrastlı buton. CDSS karar motorunun ürettiği bilimsel teşhis özetini, IAEA/NCRP gerekçe metnini ve kurumsal DÖF tavsiyesini tek tıkla 4. Adımdaki resmi karar formuna aktarır. RKS CDSS teşhis ve analiz sonuçları resmi tutanağa bağlanırken RD.F43 Sihirbazı (3. Adım CDSS Paneli) [İleri] / [Geri] Butonlar RDS kurumsal stilleriyle (Primary Blue ve Secondary) 4 adımlı RD.F43 sihirbazında adımlar arasında kontrollü ve ergonomik geçiş sağlar. RKS / Kurum Amiri RD.F43 form adımları doldurulurken RD.F43 Form Alt Gezinti Paneli [Web Portal Görev Bildirimi] Sistem Bildirimi 2.0 mSv eşik aşımı veya anomali incelemesi başlatıldığında personelin Web Portal görev paneline otomatik bildirim düşer; personeli \"Bölüm 2: Çalışan Beyanı\" sorularını cevaplamaya yönlendirir. Hakkında İnceleme Açılan Personel Aksiyon oluşturulduğu anda anında tetiklenir Web Portal Bildirim & Görev Merkezi [Eşik Aşımı Alarmı (RKS & Yönetici)] Sistem Alarmı Hp(10) >= 2.0 mSv veya kümülatif limit aşıml"
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi (Dozimetre & RKS Özeti) — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi (Dozimetre & RKS Özeti) 1. Laboratuvar Dosyasını Yükleyin TENMAK, RADAT veya Genel Excel/CSV dosyasını içe aktarma sihirbazına bırakın. Personel TC veya Dozimetre seri no üzerinden kayı",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Dozimetre & RKS Özeti)",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi (Dozimetre & RKS Özeti) 1. Laboratuvar Dosyasını Yükleyin TENMAK, RADAT veya Genel Excel/CSV dosyasını içe aktarma sihirbazına bırakın. Personel TC veya Dozimetre seri no üzerinden kayıtlar otomatik eşleşir. 2. Limit ve Renk Uyarıları Derin doz ($H_p(10)$) 2.0 mSv aylık eşiği aşarsa sarı alarm; kümülatif doz 20 mSv sınırına yaklaştığında kırmızı alarm verilir ve nöbet planı uyarılır. 3. 10 İş Gününde RD.F43 Tanzimi Eşik aşımında sistem resmi RD.F43 sürecini başlatır. Tıbbi tetkik veya artefakt ayrımı yapılarak net mesleki doz hesaplanır ve 10 iş gününde form kapatılır."
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#bilesenler",
    "title": "2. Arayüz Bileşenleri ve 5N1K Tablosu — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#bilesenler",
    "summary": "2. Arayüz Bileşenleri ve 5N1K Tablosu Dozimetre Takibi modülündeki ekran kontrolleri, butonlar ve filtreleme araçlarının işlevsel kullanım kılavuzu: Bileşen / Buton Türü Ne İşe Yarar? (Ne?) Kim Kullanır? (Kim?) Ne Zaman ",
    "headings": [
      "2. Arayüz Bileşenleri ve 5N1K Tablosu",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "2. Arayüz Bileşenleri ve 5N1K Tablosu Dozimetre Takibi modülündeki ekran kontrolleri, butonlar ve filtreleme araçlarının işlevsel kullanım kılavuzu: Bileşen / Buton Türü Ne İşe Yarar? (Ne?) Kim Kullanır? (Kim?) Ne Zaman Kullanılır? (Ne Zaman?) Nerede Yer Alır? [Laboratuvardan İçe Aktar] Buton TENMAK/RADAT/Excel doz raporlarını aktarır; önizlemede çift tıkla [Personel Seç] penceresinden manuel eşleme, [Kalıcı Hafızaya Kaydet] ve [Eşleşmeyenleri Excel Olarak İndir] imkanı sunar. RKS / Dozimetre Sorumlusu Aylık dozimetre kaset sonuçları geldiğinde Üst Araç Çubuğu [Ölçüm Ekle] Buton Münferit veya Elektronik Kişisel Dozimetre (EPD) ara ölçümü kaydeder. RKS / Süpervizör Tekil acil ölçüm veya yeni kart girişinde Üst Araç Çubuğu [Dönem Filtresi] Açılır Kutu Tabloyu seçilen yıl ve döneme göre anında süzer. Tüm Kullanıcılar Geçmiş periyot kayıtları sorgulanırken Filtre Paneli [Dozimetre Tipi] Açılır Kutu Tüm Vücut, Yüzük/Ekstremite, Göz Lensi ve EPD türlerini ayrıştırır. RKS Ekstremite veya lens dozları denetlenirken Filtre Paneli [Doz Araştırma Formu Aç] Buton 2.0 mSv eşiğini aşan veya anomali gösteren vaka için IAEA GSG-7, Webster formüllü ve NDK karar matrisli 4 adımlı resmi RD.F43 sihirbazını başlatır. Daha önce başlatılmış açık bir inceleme varsa engellemeden doğrudan kaldığı yerden devam ettirir. RKS / Kurum Amiri Eşik aşımı veya doz anomalisi tespitinde Aksiyonlar Sekmesi (Üst Araç Çubuğu) [Düzeltme Yap / Formu Yeniden Aç] Buton Kapatılmış RD.F43 raporunda sehven yapılan hataları denetim izine gerekçe notu düşerek güvenle düzeltmeye açar. RKS / Kurum Amiri Kapatılmış tutanaklarda sehven hata tespit edildiğinde Resmi Rapor Görüntüleyici Alt Paneli [Takip Ölçümü Planla] Buton Modern planlama penceresiyle takip nedeni, dozimetre türü, başlangıç/bitiş tarihleri ve açıklama notu girilerek şüpheli vakalara ara takip veya EPD ölçüm görevi tanımlar. RKS / Dozimetre Sorumlusu Risk incelemesi ve yakın izleme gerektiren vakalarda Aksiyonlar Sekmesi (Üst Araç Çubuğu) [Birim İncelemesi Ekle] Buton RKS saha gözlemini, birim çalışma koşullarını, cihaz durumunu ve ortam radyasyon notlarını kurumsal kayıt penceresine işler. RKS / Dozimetre Sorumlusu Saha çalışma şartları ve birim ortam denetiminde Aksiyonlar Sekmesi (Üst Araç Çubuğu) [Formu Görüntüle] Buton Başlatılmış RD.F43 araştırma tutanağını, CDSS kural motoru kararlarını veya DÖF dosya detaylarını doğrudan incelemeye açar. RKS / Kurum Amiri Açık dosya takibinde veya kapatılmış arşiv incelemesinde Aksiyonlar Sekmesi (Üst"
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#ice-aktarma",
    "title": "3. Laboratuvar Dosyası İçe Aktarma Sihirbazı (3 Adım) — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#ice-aktarma",
    "summary": "3. Laboratuvar Dosyası İçe Aktarma Sihirbazı (3 Adım) Dozimetre servis sağlayıcısından gelen toplu Excel/CSV raporlarının sisteme aktarımı, kurum personelleriyle otomatik T.C. Kimlik / Barkod eşleştirmesi ve aşım alarmla",
    "headings": [
      "3. Laboratuvar Dosyası İçe Aktarma Sihirbazı (3 Adım)",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "3. Laboratuvar Dosyası İçe Aktarma Sihirbazı (3 Adım) Dozimetre servis sağlayıcısından gelen toplu Excel/CSV raporlarının sisteme aktarımı, kurum personelleriyle otomatik T.C. Kimlik / Barkod eşleştirmesi ve aşım alarmlarının üretilmesi akışı: 1. ADIM Dosya & Sağlayıcı Seçimi Sağlayıcı açılır kutusundan TENMAK , RADAT veya Genel Excel seçilir. İlgili yıl ve dönem belirlenip [Gözat] butonu ile rapor dosyası seçilir. 2. ADIM Akıllı Eşleştirme & Manuel Personel Seçimi [Dosyayı Çözümle] tıklandığında sistem T.C. Kimlik ve isimleri karşılaştırır; geçmişte hafızaya alınmış kayıtları otomatik bağlar. Eşleşmeyen satıra çift tıklayarak [Personel Seç] penceresinden personel atanabilir ve kalıcı hafızaya kaydedilebilir. 3. ADIM Kayıt, Eşik Alarmı & Hata Raporlama [İçe Aktarımı Tamamla] ile eşleşen satırlar kaydedilir, dozlar kümülatife işlenir ve $\\ge 2.0\\text{ mSv}$ vakalar RD.F43 kuyruğuna alınır. Çözümlenemeyen satırlar için [Eşleşmeyenleri Excel Olarak İndir] butonu kullanılır. Önizleme Tablosunda Doğrudan Personel Eşleme & Akıllı Eşleşme Hafızası Dış laboratuvar yazım farklılıklarını tek tıkla çözme ve gelecek periyotlar için otomatik hatırlama mimarisi 1. Çift Tıkla [Personel Seç] Penceresi Laboratuvardan gelen raporda personelin adı eksik/farklı yazılmış veya T.C. hanesi boş kalmışsa, önizleme tablosundaki kırmızı/sarı satıra çift tıklayın . Açılan diyalogda kurum personel listenizden arama yaparak doğru kişiyi tek tıkla seçin. 2. [Kalıcı Hafızaya Kaydet] Onay Kutusu Personel seçim penceresinde [Bu eşleşmeyi sonraki dönemler için hafızaya kaydet] kutusunu işaretlediğinizde, sistem bu laboratuvar yazımını kurum personelinizle kalıcı olarak eşleştirir. Sonraki aylarda aynı rapordaki kişi geldiğinde sistem hafızadan anında tanır; bir daha manuel işlem gerekmez. 3. [Eşleşmeyenleri Excel Olarak İndir] Kurumunuz personeli olmayan (ayrılmış, başka hastaneden rotasyona gelmiş veya tanımsız) satırlar varsa işlem engellenmez. Önizleme ekranındaki [Eşleşmeyenleri Excel Olarak İndir] butonuna tıklayarak çözülemeyen satırları Excel formatında alıp ilgili birime iletebilirsiniz."
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#olcum-girisi",
    "title": "4. Dozimetre Kokpiti ve Manuel Ölçüm Girişi — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#olcum-girisi",
    "summary": "4. Dozimetre Kokpiti ve Manuel Ölçüm Girişi Ana takip ekranı üzerindeki ölçüm satırları, kümülatif doz barları ve münferit ölçüm kaydı ekleme süreci: Dozimetre Takip Kokpiti ve Doz Renk Skalası Yeşil (< 1.0 mSv): Güvenli",
    "headings": [
      "4. Dozimetre Kokpiti ve Manuel Ölçüm Girişi",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "4. Dozimetre Kokpiti ve Manuel Ölçüm Girişi Ana takip ekranı üzerindeki ölçüm satırları, kümülatif doz barları ve münferit ölçüm kaydı ekleme süreci: Dozimetre Takip Kokpiti ve Doz Renk Skalası Yeşil (< 1.0 mSv): Güvenli normal arka plan / rutin maruziyet aralığı. Sarı (1.0 - 2.0 mSv): Dikkat eşiği; kişisel ortalama sapmaları takip edilir. Turuncu (2.0 - 5.0 mSv): İnceleme düzeyi aşımı; RD.F43 formu zorunludur. Kırmızı (≥ 5.0 mSv veya Yıllık ≥ 20 mSv): Kritik risk; çalışma blokajı uygulanır. Manuel Dozimetre Ölçümü Ekleme [Ölçüm Ekle] tıklandığında açılan bu modalda; • Personel seçilir, dozimetre tipi (Tüm Vücut / Yüzük / Göz Lensi / EPD) belirlenir. • $H_p(10)$ derin doz ve opsiyonel $H_p(0.07)$ yüzey dozu sayısal olarak girilir. • Doz değeri 2.0 mSv eşiğini geçerse sistem anında uyarı vererek aksiyon sekmesine yönlendirir. Tek ve Ferah 8 Sütunlu Bütünleşik Aksiyon Kokpiti & Güvenlik Kilitli İşlemler RADPYS V4.0.3.30 Standardı Aksiyonlar Sekmesi: Tam Genişlik 8 Sütunlu Kokpit Bölünmüş ve daraltılmış eski tablolar yerine, tüm yasal eşik aşımları ve istatistiksel doz anomalileri tek bir ferah ana tabloda birleştirilmiştir: • 8 Sütunlu Bütünleşik Tablo Düzeni: [Personel Adı Soyadı | Birim | Ölçüm Dönemi | Hp(10) (mSv) | Risk Seviyesi | Aşım Gerekçesi | İnceleme Durumu | RD.F43 Raporu] . Her vakanın araştırma raporu durumu ve inceleme aşaması doğrudan tablo satırında canlı izlenir. • Canlı Durum Filtreleme: Tablo üstündeki filtreleme menüsüyle Tümü , Açık (İnceleme Bekleyenler / Süreci Devam Edenler) ve Kapalı (Arşiv) kayıtlar tek tıkla süzülür. • Güvenlik Kilitli Aksiyon Kapatma: Bir aksiyonun kapatılabilmesi için resmi RD.F43 raporunun tanzim edilmiş olması ve kurumsal dosya / karar numarasının girilmiş olması zorunludur. Raporu bulunmayan kayıtlar için sistem denetim uyarısı vererek yetkisiz veya erken kapatmayı engeller. • Modern Kurumsal Diyaloglar: Basit girişler yerine; Takip Ölçümü Planlama (tür, süre, klinik gerekçe), Birim İncelemesi (saha çalışma koşulları, ortam notu) ve Aksiyonu Kapat (dosya no, onay notu) işlemleri için özel tasarlanmış pencereler açılır. Ölçümler Sekmesi: Geçmiş Ölçümlerde Birim Rotasyon Takibi Ölçümler tablosunda bir personele tıklandığında sağ panelde açılan Geçmiş Ölçümler Tablosu genişletilmiş ve Birim sütunu eklenmiştir: • Sütun Düzeni: [Dönem | Birim | Hp(10) | Hp(0,07) | Durum] . • Rotasyon ve Doz Analizi: Personelin hangi dönemde hangi radyoloji biriminde (Anjiyo, BT, Skopi vb.) görev yaptığı geriye dönük izlenir. Bir p"
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#rdf43-sureci",
    "title": "5. Rol Tabanlı RD.F43 Doz Araştırma Sihirbazı ve Akıllı Karar Motoru (CDSS) — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#rdf43-sureci",
    "summary": "RADPYS V4.0.3.30 IAEA GSG-7 & NCRP 122 Uyumlu 5. Rol Tabanlı RD.F43 Doz Araştırma Sihirbazı ve Akıllı Karar Motoru (CDSS) Aylık 2.0 mSv eşiğini aşan veya kişisel ortalamasından belirgin sapma gösteren ölçümlerde, NDK mev",
    "headings": [
      "5. Rol Tabanlı RD.F43 Doz Araştırma Sihirbazı ve Akıllı Karar Motoru (CDSS)",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "RADPYS V4.0.3.30 IAEA GSG-7 & NCRP 122 Uyumlu 5. Rol Tabanlı RD.F43 Doz Araştırma Sihirbazı ve Akıllı Karar Motoru (CDSS) Aylık 2.0 mSv eşiğini aşan veya kişisel ortalamasından belirgin sapma gösteren ölçümlerde, NDK mevzuatı gereği en geç 10 iş günü içinde düzenlenmesi zorunlu resmi Doz Araştırma Formu (RD.F43). Sistem, çalışan ifadesi ile RKS teknik incelemesini iki ayrı sorumluluk alanına ayırarak akıllı bir Klinik Karar Destek Sistemi (CDSS) koşturur: 1. ADIM (BÖLÜM 2) Sorumlu: Çalışan / Web Portal Çalışan Beyanı ve Kullanım Koşulları Çalışanın şahsi beyanını resmi tutanağa bağlar. Bu bölüm, masaüstünde RKS tarafından doldurulabileceği gibi, Web Portal Bildirim ve Görev Entegrasyonu sayesinde doğrudan personelin kendi web ekranından da cevaplanabilir. Personel beyanını tamamladığı anda RKS ve Medikal Fizik Uzmanının bildirim çekmecesine anında uyarı düşer; bildirime tıklanarak ek menü aramadan doğrudan RD-F43 formu açılabilir: • Çalışma Rejimi: Aylık fiili çalışma süresi (gün), günlük çalışma saati, radyasyon kaynağı türü ve dozimetre takış konumu (Yaka, Kemer vb.). • Olay ve Artefakt Beyanı: Dozimetrenin başkası tarafından kullanılması, depolama alanının şua odasında olması veya dozimetrenin alanda unutulması (unutulma süresi ve kaynağa mesafe). • Şahsi Tıbbi Tetkik: Personelin bizzat hasta olarak radyolojik tetkik (Nükleer Tıp, Sintigrafi, BT vb.) yaptırıp yaptırmadığı. • Kullanılan Koruyucu Donanımlar (KKE): Kurşun önlük, dozimetrenin önlük içinde mi dışında mı takıldığı, tiroid koruyucu, kurşun paravan, kurşun camlı gözlük ve eldiven kullanımı. 2. ADIM (BÖLÜM 3) Sorumlu: RKS / Medikal Fizikçi RKS Saha İncelemesi ve Ortam Doğrulaması Çalışanın beyanından bağımsız olarak Radyasyon Korunma Sorumlusu tarafından sahada yürütülen teknik denetim adımıdır: • Tesis & Cihaz Kontrolü: Tesiste veya cihazda olağandışı bir durum, arıza veya jeneratör modifikasyonu olup olmadığı. • Bulaşma & Radyoizotop: Radyoaktif kirlilik (kontaminasyon) şüphesi ve varsa kullanılan radyoizotop türü (Tc-99m, I-131, F-18 vb.). • Çevresel Doğrulama: Ortam radyasyon ölçümlerinde artış olup olmadığı ve aynı alanda çalışan diğer mesai arkadaşlarında paralel bir doz yükselmesi bulunup bulunmadığı. • Eğitim Durumu: Personelin radyasyon güvenliği eğitim durumu ve periyodik hizmet içi eğitim kayıtları. 3. ADIM (CDSS MOTORU) Akıllı Karar Matrisi Akıllı Klinik Karar ve Teşhis Motoru Form yanıtlarına göre kural motoru arka planda anlık olarak çalışır ve bilimsel teşhis koyar: • Akla Yatkınl"
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#rdf43-ekran-goruntuleri",
    "title": "RD.F43 Doz Araştırma Sihirbazı Ekran Görüntüleri — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#rdf43-ekran-goruntuleri",
    "summary": "RD.F43 Doz Araştırma Sihirbazı Ekran Görüntüleri ️ Ekran Konumu: Dozimetre Yönetimi > [Doz Araştırma Formu Aç] > Bölüm 1 & 2 RD.F43 Adım 1-2: Çalışan Beyanı & KKE Kontrolü Simülasyon Notu: Personelin çalışma rejimi, dozi",
    "headings": [
      "RD.F43 Doz Araştırma Sihirbazı Ekran Görüntüleri",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "RD.F43 Doz Araştırma Sihirbazı Ekran Görüntüleri ️ Ekran Konumu: Dozimetre Yönetimi > [Doz Araştırma Formu Aç] > Bölüm 1 & 2 RD.F43 Adım 1-2: Çalışan Beyanı & KKE Kontrolü Simülasyon Notu: Personelin çalışma rejimi, dozimetre takış konumu, alanda unutulma beyanı ve KKE kullanım bilgileri. ️ Ekran Konumu: Dozimetre Yönetimi > [Doz Araştırma Formu Aç] > Bölüm 3 (CDSS Motoru) RD.F43 Adım 3: Saha İncelemesi & CDSS Teşhis Motoru Simülasyon Notu: RKS saha bulguları, NCRP 122 Webster çift dozimetre düzeltmesi ve otomatik teşhis sınıflandırması. ️ Ekran Konumu: Dozimetre Yönetimi > [Doz Araştırma Formu Aç] > Bölüm 4 (Nihai Karar) RD.F43 Adım 4: Yasal Karar, DÖF & Resmi PDF Simülasyon Notu: Nihai RKS değerlendirmesi, DÖF bağlantısı, KVKK evrak kasası ve resmi NDK RD.F43 PDF çıktısı."
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#hibrit-portal",
    "title": "6. Hibrit Arayüz ve Web Portalı Görünümü — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#hibrit-portal",
    "summary": "6. Hibrit Arayüz ve Web Portalı Görünümü Masaüstü tam yetkili RKS merkezi ile çalışanların kendi doz karnelerini izlediği web portalı karşılaştırması: Masaüstü Yönetim İstemcisi (PySide6) &check; Laboratuvar dozimetre do",
    "headings": [
      "6. Hibrit Arayüz ve Web Portalı Görünümü",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "6. Hibrit Arayüz ve Web Portalı Görünümü Masaüstü tam yetkili RKS merkezi ile çalışanların kendi doz karnelerini izlediği web portalı karşılaştırması: Masaüstü Yönetim İstemcisi (PySide6) &check; Laboratuvar dozimetre dosyalarını (TENMAK, RADAT, Excel) toplu içeri aktarma. &check; Yasal 10 iş günü geri sayım rozetlerini ve eşik aşım kuyruğunu yönetme. &check; 4 adımlı resmi RD.F43 araştırma formu tanzimi ve RKS doz hesaplama motoru. &check; NDK ve Mevzuat standartlarında kilitli resmi PDF RD.F43 tutanak dökümü alma ve DÖF başlatma. Web & Mobil Portalı (DozimetreDashboard) &check; Radyal Gösterge (Radial Gauge): Yıllık 20 mSv tavanına olan mesafe halka grafik üzerinde izlenir. &check; 12 Aylık Trend Çizgisi: Personelin geçmiş dönemlerdeki doz dalgalanmaları görselleştirilir. &check; Kişisel Doz Karnesi: Çalışan kendi geçmiş ölçüm geçmişini ve dozimetre numaralarını inceler. &check; İnceleme Bildirimi & Çift Yönlü Çekmece Entegrasyonu: Kendi ölçümünde inceleme başlatılan personelin Web Portal görev paneline otomatik bildirim düşer; personeli \"Bölüm 2: Çalışan Beyanı\" sorularını yanıtlamaya yönlendirir. Çalışan beyanını portaldan tamamladığı anda, masaüstü uygulamasında RKS / Sağlık Fizikçisi bildirim çekmecesine doğrudan bildirim düşer; bildirime tıklandığında ilgili personelin RD-F43 formu anında açılarak inceleme süreci kesintisiz sürdürülür. Ayrıca $H_p(10) \\ge 2.0$ mSv ve limit aşımlarında RKS ve Kurum Amiri paneline anlık kırmızı alarm iletilir."
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#akis-diyagrami",
    "title": "7. Dozimetre ve RD.F43 Karar Destek Akış Şeması — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#akis-diyagrami",
    "summary": "7. Dozimetre ve RD.F43 Karar Destek Akış Şeması Laboratuvardan gelen ölçümün sisteme girişinden çalışma blokajı ve resmi raporlamaya kadar olan uçtan uca akış: graph TD A[\"Dozimetre Sonuç Raporu (TENMAK / RADAT / Excel)\"",
    "headings": [
      "7. Dozimetre ve RD.F43 Karar Destek Akış Şeması",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "7. Dozimetre ve RD.F43 Karar Destek Akış Şeması Laboratuvardan gelen ölçümün sisteme girişinden çalışma blokajı ve resmi raporlamaya kadar olan uçtan uca akış: graph TD A[\"Dozimetre Sonuç Raporu (TENMAK / RADAT / Excel)\"] --> B[\"3 Adımlı İçe Aktarım Sihirbazı\"] B --> C{\"Hp(10) >= 2.0 mSv İnceleme Eşiği?\"} C -- \"Hayır ( D[\"Rutin Veritabanı Kaydı ve Kümülatif Doz Takibi\"] C -- \"Evet (>= 2.0 mSv)\" --> E[\"RD.F43 Bildirimi ve Aksiyon Kaydı\"] E --> F[\"10 İş Günü Yasal Geri Sayım Rozeti\"] F --> G{\"Aşım Türü Analizi\"} G -- \"Artefakt / Tıbbi Tetkik / Odada Unutulma\" --> H[\"RKS Doz Hesabı ve Net Maruziyet Tespiti\"] G -- \"Gerçek Mesleki Maruziyet\" --> I[\"Zorunlu Kurumsal DÖF Numarası Açılması\"] H --> J[\"Resmi RD.F43 Word / PDF Tutanağı Üretimi\"] I --> J J --> K{\"Yıllık Kümülatif Doz >= 20.0 mSv?\"} K -- \"Evet\" --> L[\"Radyasyonlu Alan Çalışma Blokajı\"] K -- \"Hayır\" --> M[\"Göreve Devam ve Yakın Takip\"]"
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#mit-avcilari",
    "title": "Dozimetre Güvenliği & Mit Avcısı (Kritik Kurallar) — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#mit-avcilari",
    "summary": "Dozimetre Güvenliği & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Personelin dozimetresinde 15 mSv çıktı; personel o ay nükleer tıp hastası olarak sintigrafi/PET çektirmiş olsa bile bu doz yıllık mesleki limitin",
    "headings": [
      "Dozimetre Güvenliği & Mit Avcısı (Kritik Kurallar)",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "Dozimetre Güvenliği & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Personelin dozimetresinde 15 mSv çıktı; personel o ay nükleer tıp hastası olarak sintigrafi/PET çektirmiş olsa bile bu doz yıllık mesleki limitine yazılır.\" Doğru Yasal Kural: NDK mevzuatına göre personelin hasta sıfatıyla aldığı tıbbi tetkik dozları mesleki doz sayılmaz. RD.F43 formunda Tıbbi Tetkik / Artefakt seçilerek RKS formülüyle net mesleki doz ayrıştırılır ve artefakt düşülür. Yaygın Yanılgı (Mit 2) \"Laboratuvardan gelen raporda yanlışlık varsa sistemdeki ilgili doz satırı doğrudan silinebilir.\" Doğru Yasal Kural: Yasal delil ve audit bütünlüğü gereğince kaydedilmiş doz verisi fiziksel olarak silinemez. Düzeltme gerekiyorsa resmi gerekçe girilerek revizyon statüsüne alınır ve denetim izinde saklanır. Yaygın Yanılgı (Mit 3) \"Gebe çalışan personelin fötus koruma dozu da genel radyasyon görevlileri gibi yıllık 20 mSv'dir.\" Doğru Yasal Kural: NDK Radyasyon Güvenliği Yönetmeliği uyarınca gebe çalışanın tüm gebelik dönemi boyunca alabileceği azami batın yüzeyi/fötus dozu 1.0 mSv'dir . Bu eşik aşımında çalışan derhal radyasyonsuz birime çekilmelidir. Yaygın Yanılgı (Mit 4) \"Dozimetre seri numarası personelin kalıcı kimliğidir; sonraki dönemler için eşleştirmeyi dozimetre numarası üzerinden yapabiliriz.\" Doğru Sistem Kuralı: KESİNLİKLE HAYIR. Dozimetre rozetleri laboratuvarlar tarafından her periyotta rotasyona tabi tutulur ve numaraları döngüsel olarak değişir. Bu nedenle kalıcı eşleştirme anahtarı asla dozimetre numarası olamaz; RADPYS hafızası eşleşmeyi sağlayıcı laboratuvar, personelin rapordaki adı-soyadı ve dış T.C. kimlik bilgisi üzerinden kurar ve korur."
  },
  {
    "id": "12_dozimetre_takibi_ve_rdf43_arastirma#sss",
    "title": "8. Sıkça Sorulan Sorular (SSS) — 12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "12_dozimetre_takibi_ve_rdf43_arastirma.html#sss",
    "summary": "8. Sıkça Sorulan Sorular (SSS) Kişisel Dozimetre ve RD.F43 modülünde sahada en sık karşılaşılan durumlar ve çözümleri: Soru 1: Dozimetre raporu dosyasını içe aktarırken bazı personeller sarı/kırmızı uyarıyla eşleşmedi ol",
    "headings": [
      "8. Sıkça Sorulan Sorular (SSS)",
      "12. Kişisel Dozimetre Takibi ve RD.F43 Doz Aşımı Araştırması"
    ],
    "content": "8. Sıkça Sorulan Sorular (SSS) Kişisel Dozimetre ve RD.F43 modülünde sahada en sık karşılaşılan durumlar ve çözümleri: Soru 1: Dozimetre raporu dosyasını içe aktarırken bazı personeller sarı/kırmızı uyarıyla eşleşmedi olarak görünüyor. Ne yapmalıyım? Personel listesine gidip kayıt aramanıza gerek yoktur! Önizleme tablosunda eşleşmeyen personele çift tıklayarak açılan [Personel Seç] penceresinden kurum personelinizi aratıp seçebilirsiniz. Penceredeki [Bu eşleşmeyi sonraki dönemler için hafızaya kaydet] onay kutusunu işaretlediğinizde, sistem bu laboratuvar yazımını hafızaya alır ve sonraki aylarda otomatik tanır. Kurumunuz personeli olmayan veya çözümlenemeyen kayıtlar için ise [Eşleşmeyenleri Excel Olarak İndir] butonuna tıklayarak listeyi dışa aktarabilirsiniz. Soru 2: Kurumumuz TENMAK veya RADAT dışında farklı bir dozimetre laboratuvarından hizmet alıyor. Dosyayı nasıl aktarabiliriz? Rapor dosyanızı standart Excel formatına dönüştürerek Genel Excel seçeneğiyle aktarabilirsiniz. Ancak laboratuvarınızın resmi raporunu doğrudan içeri almak isterseniz, örnek bir dozimetre raporuyla birlikte yazılım destek ekibimizle iletişime geçiniz; ilgili sağlayıcı için sisteme ücretsiz ayrıştırıcı güncellemesi eklenecektir. Soru 3: Personelin dozimetresinde 15.0 mSv okundu fakat personel o ay kendisi hasta olarak PET-BT çektirmiş. Personelin yıllık limiti dolmuş mu sayılır? Hayır. RD.F43 Araştırma Formu'nun 3. Adımında aşım türünü \"Artefakt / Tıbbi Tetkik\" olarak işaretleyiniz ve tetkik bilgilerini giriniz. RKS tarafından yapılan hesaplama sonucunda sahte aşım personelin mesleki maruziyet kütüğünden düşülür ve yalnızca hesaplanan net mesleki doz kümülatif toplama eklenir. Soru 4: 10 iş günü geri sayım rozeti kırmızı renge dönüştü. Sistem bir ceza veya kilitleme uygular mı? Sistem doğrudan bir teknik kilit koymaz; ancak NDK mevzuatı gereği 10 iş günü aşımı yasal bir ihlal teşkil ettiğinden, denetim izinde gecikme kaydı tutulur ve RKS panosunda kritik alarm üretilir. İlgili vakanın resmi formunu derhal tamamlayıp onaylayınız."
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip",
    "title": "13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html",
    "summary": "Radyasyonla çalışan personelin işe giriş ve periyodik sağlık gözetim süreçlerini, iki aşamalı klinik iş akışını (Ön Hazırlık & Sevk ile Hekim Kararı & Arşivleme), Sağlık Bakanlığı ve NDK standartlarındaki resmi iki sayfalık EK-1 A4 PDF sevk formunu, üç temel u",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Klinik Takip & İSG Özeti)",
      "2. Arayüz Bileşenleri ve 5N1K Tablosu",
      "3. Muayene Takip Listesi ve Görsel Durum İkonları",
      "Radyasyonla Çalışmaya Uygun",
      "Şartlı & Yakın Takip",
      "Periyodu Geçmiş Muayene",
      "4. İki Aşamalı Klinik Muayene Süreci ve Resmi EK-1 A4 PDF Çıktısı",
      "Ön Hazırlık, Anamnez ve Resmi EK-1 Sevk Formu",
      "Poliklinik Muayeneleri, Hekim Kararı ve KVKK Kasası",
      "5. İleri Tetkik Sevk Süreci ve Resmi Heyet Raporu Kısıtı",
      "Şüpheli Bulgu & İleri Tetkik Sevki",
      "Resmi Sağlık Kurulu (Heyet) Kararı",
      "Nöbet Muafiyeti & Çalışma Kısıtı",
      "6. Hibrit Arayüz ve Web Portalı Görünümü",
      "Masaüstü Yönetim İstemcisi (PySide6)",
      "Web & Mobil Portalı (SaglikDashboard)",
      "7. Sağlık Muayeneleri Karar Destek Akış Şeması",
      "Sağlık Takibi & Mit Avcısı (Kritik Kurallar)",
      "8. Sıkça Sorulan Sorular (SSS)",
      "Soru 1: Bir muayene kaydında \"Uygun Değil\" seçildiğinde personel hemen nöbetlerden düşürülür mü?",
      "Soru 2: Muayenede üç branş hekiminden sadece biri sonuç verdiğinde formu kaydedebilir miyim?",
      "Soru 3: Sonraki muayene tarihi otomatik geliyor fakat hekim 3 ay sonra ara kontrol önerdi. Tarihi değiştirebilir miyim?",
      "Soru 4: Geçmişte silinmiş veya değiştirilmiş bir sağlık muayenesini denetim esnasında nasıl kanıtlayabilirim?"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 4: Dozimetre & Sağlık 13. Sağlık Muayeneleri MODÜL 13 NDK & Sağlık Bakanlığı EK-1 Mevzuatı İki Aşamalı İş Akışı Resmi EK-1 A4 PDF 13. Sağlık Muayeneleri ve Periyodik Takip Radyasyonla çalışan personelin işe giriş ve periyodik sağlık gözetim süreçlerini, iki aşamalı klinik iş akışını (Ön Hazırlık & Sevk ile Hekim Kararı & Arşivleme), Sağlık Bakanlığı ve NDK standartlarındaki resmi iki sayfalık EK-1 A4 PDF sevk formunu, üç temel uzmanlık branşının (Göz, Dahiliye, Dermatoloji) klinik değerlendirmelerini, otomatik randevu takvimini ve revizyon denetim izini yöneten modüldür. Radyasyon & Periyodik 12 Ay Radyasyon çalışanlarının yıllık zorunlu periyodik kontrol döngüsü. Şua Muayenesi 6 Ay Yoğun radyasyonlu özellikli birimlerde çalışanların periyot aralığı. Klinik İş Akışı 2 Aşama 1. Ön Hazırlık & Sevk, 2. Hekim Kararı & Arşivleme. Erken Uyarı Eşiği 30 Gün Muayene gününe 30 gün kala devreye giren sarı yaklaşma rozeti. Önemli Klinik Takip Kuralı (Klinik Takip vs Heyet Raporu Ayrımı): Bu ekran doğrudan resmi bir Sağlık Kurulu (Heyet) Raporu işleme veya kesin çalışma engeli oluşturma ekranı değildir ; personelin rutin periyodik klinik muayenelerini takip eder. Herhangi bir branşta *\"Uygun Değil\"* veya *\"Koşullu Uygun\"* kanaati verilirse personel derhal ilgili ana bilim dalına ileri tetkik için sevk edilir. İleri tetkikler sonucunda personelin radyasyonlu alanda çalışamayacağı resmi Sağlık Kurulu (Heyet) Raporu ile kesinleşirse, bu durum Nöbet & Çalışma Kısıtları (Modül 07) modülüne heyet raporu şerhiyle işlenir. 20s Vizyonder Hızlı Karar Reçetesi (Klinik Takip & İSG Özeti) 1. Aşama: Ön Hazırlık & Sevk [Yeni Sevk Başlat] butonuyla personel seçimi, maruziyet, anamnez soruları ve 12 belirti/bulgu girilerek sevk kaydı oluşturulur; resmi 2 sayfalık A4 EK-1 formu otomatik üretilir. 2. Poliklinik & Laboratuvar Taraması Çıktısı alınan EK-1 formu ile polikliniklere (Göz, Dahiliye, Cildiye ve Tam Kan Sayımı) sevk yapılır; uzman hekimler Sayfa 2'deki boş kutuları el yazısıyla doldurup kaşeler. 3. Aşama: Hekim Kararı & Arşivleme [Hekim Kararı] butonuyla poliklinik sonuçları ve nihai hekim kararı işlenir; ıslak imzalı taranmış rapor şifreli kasaya yüklenir. 30 gün kala sarı uyarı verilir. 2. Arayüz Bileşenleri ve 5N1K Tablosu Sağlık Muayeneleri modülündeki ekran kontrolleri, butonlar ve branş imza alanlarının işlevsel kullanım kılavuzu: Bileşen / Buton Türü Ne İşe Yarar? (Ne?) Kim Kullanır? (Kim?) Ne Zaman Kullanılır? (Ne Zaman?) Nerede Yer Alır? [Yeni Sevk Başlat] Buton 1. Aşama Ön Hazırlık ve Sevk modalını açar; personel seçimi, anamnez soruları ve 12 belirti girişiyle sevk kaydı oluşturur, hekim ve çalışan paneline anlık bildirim çekmecesi uyarısı iletir ve resmi iki sayfalık kilitli EK-1 PDF belgesini üretir. Hekim / RKS / İSG Sorumlusu Personelin periyodik muayene veya sevk süreci başlatıldığında Liste Araç Çubuğu (Sol Üst) [Hekim Kararı] Buton 2. Aşama Hekim Kararı modalını açar; polikliniklerden dönen branş muayenelerini (Göz, Dahiliye, Cildiye), laboratuvar bulgularını ve nihai hekim kararını işler; taranmış ıslak imzalı raporu şifreli kasaya arşivler. İşyeri Hekimi / RKS Poliklinik tetkik sonuçları tamamlanıp kesin karar verileceğinde (veya çift tık) Liste Araç Çubuğu [Resmi EK-1 PDF İndir] Dışa Aktarma Sağlık Bakanlığı ve NDK mevzuat formatında (docs/21.5.7077_Parça5.pdf) 2 sayfalık A4 resmi sevk ve muayene belgesini üretir. Sayfa 2 poliklinik hekimlerinin elle doldurması için dürüstçe boş sunulur. Tüm Yetkililer Sevk belgesi bastırılacağı veya dijital arşivleneceğinde Sevk Formu / Liste Araç Çubuğu [Geçmiş] Buton Personelin geçmiş yıllardaki tüm muayenelerini listeler. Hekim / Denetçi Personel geçmişi kıyaslanırken Liste Araç Çubuğu [Sil] Buton Hatalı girilmiş muayeneyi revizyon günlüğüne yazarak siler. Süpervizör / Admin Mükerrer veya yanlış kayıt iptalinde Liste Araç Çubuğu [Detay] Buton Seçili muayenenin branş bulguları ve rapor dosyasını açar. Tüm Yetkililer Klinik notlar incelenirken (veya çift tık) Liste Araç Çubuğu [Geçmiş] Buton Personelin geçmiş yıllardaki tüm muayenelerini listeler. Hekim / Denetçi Personel geçmişi kıyaslanırken Liste Araç Çubuğu [Sil] Buton Hatalı girilmiş muayeneyi revizyon günlüğüne yazarak siler. Süpervizör / Admin Mükerrer veya yanlış kayıt iptalinde Liste Araç Çubuğu [Arama Kutusu] Giriş Alanı Ad, soyad, TC kimlik no veya muayene notlarında filtreler. Tüm Kullanıcılar Hızlı personel veya vaka aramasında Filtre Paneli [Muayene Durumu] Açılır Kutu Süresi Geçmiş, Yaklaşıyor (30 gün) ve Normal satırları süzer. RKS / İSG Uzmanı Kontrolü yaklaşan veya geçen personeller taranırken Filtre Paneli [TC / Ad ile Ara] Tamamlayıcı Personeli harf yazarak otomatik tamamlar; unvan/dep yansıtır. Kullanıcı Muayene formu doldurulurken Ekleme Modalı [Dahiliye / Derm / Göz İmza] Onay Kutusu İlgili branş hekiminin muayeneyi tamamlayıp imzaladığını teyit eder. Hekim Branş muayenesi bittiğinde Bulgular Grubu [Muayene Formu Seç/Aç/Sil] Dosya Butonları Rapor PDF/görselini şifreli kasaya kopyalar veya görüntüler. Kullanıcı Heyet evrakı arşivlenirken Belge Satırı 3. Muayene Takip Listesi ve Görsel Durum İkonları Personellerin periyodik muayene durumu, branş ikonları (Göz, Dahiliye, Dermatoloji) ve genel uygunluk kararlarının merkezi kokpiti: UYGUN Radyasyonla Çalışmaya Uygun Tüm branş kontrollerinde engel durum tespit edilmemiş, personelin radyasyonlu ortamda çalışmasında sakınca bulunmayan rutin kayıtlar. KOŞULLU UYGUN Şartlı & Yakın Takip Hekim tarafından koruyucu ekipman şartı veya daha sık aralıklarla ara kontrol tavsiyesi konulmuş çalışanları simgeler. SÜRESİ DOLDU Periyodu Geçmiş Muayene Bir sonraki kontrol tarihi üzerinden zaman geçmiş çalışanlar; sistem kırmızı uyarı verir ve gecikme raporunda listeler. RADPYS V4.0.3.30 Sağlık Bakanlığı & NDK Mevzuat Uyumlu 4. İki Aşamalı Klinik Muayene Süreci ve Resmi EK-1 A4 PDF Çıktısı Sağlık muayene formu klinik iş akışına uygun olarak iki bağımsız aşamaya ayrılmıştır: 1. Ön Hazırlık & Sevk aşamasında anamnez ve belirtiler s"
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi (Klinik Takip & İSG Özeti) — 13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi (Klinik Takip & İSG Özeti) 1. Aşama: Ön Hazırlık & Sevk [Yeni Sevk Başlat] butonuyla personel seçimi, maruziyet, anamnez soruları ve 12 belirti/bulgu girilerek sevk kaydı oluşturulur; r",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Klinik Takip & İSG Özeti)",
      "13. Sağlık Muayeneleri ve Periyodik Takip"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi (Klinik Takip & İSG Özeti) 1. Aşama: Ön Hazırlık & Sevk [Yeni Sevk Başlat] butonuyla personel seçimi, maruziyet, anamnez soruları ve 12 belirti/bulgu girilerek sevk kaydı oluşturulur; resmi 2 sayfalık A4 EK-1 formu otomatik üretilir. 2. Poliklinik & Laboratuvar Taraması Çıktısı alınan EK-1 formu ile polikliniklere (Göz, Dahiliye, Cildiye ve Tam Kan Sayımı) sevk yapılır; uzman hekimler Sayfa 2'deki boş kutuları el yazısıyla doldurup kaşeler. 3. Aşama: Hekim Kararı & Arşivleme [Hekim Kararı] butonuyla poliklinik sonuçları ve nihai hekim kararı işlenir; ıslak imzalı taranmış rapor şifreli kasaya yüklenir. 30 gün kala sarı uyarı verilir."
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip#bilesenler",
    "title": "2. Arayüz Bileşenleri ve 5N1K Tablosu — 13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html#bilesenler",
    "summary": "2. Arayüz Bileşenleri ve 5N1K Tablosu Sağlık Muayeneleri modülündeki ekran kontrolleri, butonlar ve branş imza alanlarının işlevsel kullanım kılavuzu: Bileşen / Buton Türü Ne İşe Yarar? (Ne?) Kim Kullanır? (Kim?) Ne Zama",
    "headings": [
      "2. Arayüz Bileşenleri ve 5N1K Tablosu",
      "13. Sağlık Muayeneleri ve Periyodik Takip"
    ],
    "content": "2. Arayüz Bileşenleri ve 5N1K Tablosu Sağlık Muayeneleri modülündeki ekran kontrolleri, butonlar ve branş imza alanlarının işlevsel kullanım kılavuzu: Bileşen / Buton Türü Ne İşe Yarar? (Ne?) Kim Kullanır? (Kim?) Ne Zaman Kullanılır? (Ne Zaman?) Nerede Yer Alır? [Yeni Sevk Başlat] Buton 1. Aşama Ön Hazırlık ve Sevk modalını açar; personel seçimi, anamnez soruları ve 12 belirti girişiyle sevk kaydı oluşturur, hekim ve çalışan paneline anlık bildirim çekmecesi uyarısı iletir ve resmi iki sayfalık kilitli EK-1 PDF belgesini üretir. Hekim / RKS / İSG Sorumlusu Personelin periyodik muayene veya sevk süreci başlatıldığında Liste Araç Çubuğu (Sol Üst) [Hekim Kararı] Buton 2. Aşama Hekim Kararı modalını açar; polikliniklerden dönen branş muayenelerini (Göz, Dahiliye, Cildiye), laboratuvar bulgularını ve nihai hekim kararını işler; taranmış ıslak imzalı raporu şifreli kasaya arşivler. İşyeri Hekimi / RKS Poliklinik tetkik sonuçları tamamlanıp kesin karar verileceğinde (veya çift tık) Liste Araç Çubuğu [Resmi EK-1 PDF İndir] Dışa Aktarma Sağlık Bakanlığı ve NDK mevzuat formatında (docs/21.5.7077_Parça5.pdf) 2 sayfalık A4 resmi sevk ve muayene belgesini üretir. Sayfa 2 poliklinik hekimlerinin elle doldurması için dürüstçe boş sunulur. Tüm Yetkililer Sevk belgesi bastırılacağı veya dijital arşivleneceğinde Sevk Formu / Liste Araç Çubuğu [Geçmiş] Buton Personelin geçmiş yıllardaki tüm muayenelerini listeler. Hekim / Denetçi Personel geçmişi kıyaslanırken Liste Araç Çubuğu [Sil] Buton Hatalı girilmiş muayeneyi revizyon günlüğüne yazarak siler. Süpervizör / Admin Mükerrer veya yanlış kayıt iptalinde Liste Araç Çubuğu [Detay] Buton Seçili muayenenin branş bulguları ve rapor dosyasını açar. Tüm Yetkililer Klinik notlar incelenirken (veya çift tık) Liste Araç Çubuğu [Geçmiş] Buton Personelin geçmiş yıllardaki tüm muayenelerini listeler. Hekim / Denetçi Personel geçmişi kıyaslanırken Liste Araç Çubuğu [Sil] Buton Hatalı girilmiş muayeneyi revizyon günlüğüne yazarak siler. Süpervizör / Admin Mükerrer veya yanlış kayıt iptalinde Liste Araç Çubuğu [Arama Kutusu] Giriş Alanı Ad, soyad, TC kimlik no veya muayene notlarında filtreler. Tüm Kullanıcılar Hızlı personel veya vaka aramasında Filtre Paneli [Muayene Durumu] Açılır Kutu Süresi Geçmiş, Yaklaşıyor (30 gün) ve Normal satırları süzer. RKS / İSG Uzmanı Kontrolü yaklaşan veya geçen personeller taranırken Filtre Paneli [TC / Ad ile Ara] Tamamlayıcı Personeli harf yazarak otomatik tamamlar; unvan/dep yansıtır. Kullanıcı Muayene f"
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip#liste-ekrani",
    "title": "3. Muayene Takip Listesi ve Görsel Durum İkonları — 13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html#liste-ekrani",
    "summary": "3. Muayene Takip Listesi ve Görsel Durum İkonları Personellerin periyodik muayene durumu, branş ikonları (Göz, Dahiliye, Dermatoloji) ve genel uygunluk kararlarının merkezi kokpiti: UYGUN Radyasyonla Çalışmaya Uygun Tüm ",
    "headings": [
      "3. Muayene Takip Listesi ve Görsel Durum İkonları",
      "13. Sağlık Muayeneleri ve Periyodik Takip"
    ],
    "content": "3. Muayene Takip Listesi ve Görsel Durum İkonları Personellerin periyodik muayene durumu, branş ikonları (Göz, Dahiliye, Dermatoloji) ve genel uygunluk kararlarının merkezi kokpiti: UYGUN Radyasyonla Çalışmaya Uygun Tüm branş kontrollerinde engel durum tespit edilmemiş, personelin radyasyonlu ortamda çalışmasında sakınca bulunmayan rutin kayıtlar. KOŞULLU UYGUN Şartlı & Yakın Takip Hekim tarafından koruyucu ekipman şartı veya daha sık aralıklarla ara kontrol tavsiyesi konulmuş çalışanları simgeler. SÜRESİ DOLDU Periyodu Geçmiş Muayene Bir sonraki kontrol tarihi üzerinden zaman geçmiş çalışanlar; sistem kırmızı uyarı verir ve gecikme raporunda listeler."
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip#muayene-formu",
    "title": "4. İki Aşamalı Klinik Muayene Süreci ve Resmi EK-1 A4 PDF Çıktısı — 13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html#muayene-formu",
    "summary": "RADPYS V4.0.3.30 Sağlık Bakanlığı & NDK Mevzuat Uyumlu 4. İki Aşamalı Klinik Muayene Süreci ve Resmi EK-1 A4 PDF Çıktısı Sağlık muayene formu klinik iş akışına uygun olarak iki bağımsız aşamaya ayrılmıştır: 1. Ön Hazırlı",
    "headings": [
      "4. İki Aşamalı Klinik Muayene Süreci ve Resmi EK-1 A4 PDF Çıktısı",
      "13. Sağlık Muayeneleri ve Periyodik Takip"
    ],
    "content": "RADPYS V4.0.3.30 Sağlık Bakanlığı & NDK Mevzuat Uyumlu 4. İki Aşamalı Klinik Muayene Süreci ve Resmi EK-1 A4 PDF Çıktısı Sağlık muayene formu klinik iş akışına uygun olarak iki bağımsız aşamaya ayrılmıştır: 1. Ön Hazırlık & Sevk aşamasında anamnez ve belirtiler sorgulanıp resmi EK-1 formu üretilir; 2. Hekim Kararı & Arşivleme aşamasında ise poliklinik bulguları işlenir ve ıslak imzalı tutanak KVKK şifreli kasasına arşivlenir. 1. AŞAMA [Yeni Sevk Başlat] Ön Hazırlık, Anamnez ve Resmi EK-1 Sevk Formu • Personel Seçimi & Maruziyet: Personel seçildiğinde TC kimlik, departman ve unvan otomatik gelir; haftalık çalışma saati ve geçmiş radyasyon çalışma süresi doğrulanır. • Anamnez ve 12 Belirti Matrisi: Mevzuatta yer alan 12 klinik belirti/bulgu sorgulanır. Sevk kaydı oluşturulduğunda sistem otomatik olarak Resmi EK-1 A4 PDF belgesini üretir ve açar. • Resmi EK-1 A4 PDF Çıktısı (docs/21.5.7077): Sağlık Bakanlığı ve NDK standardında 2 sayfalık resmi sevk ve muayene belgesi üretilir. • Dürüst Boş Durum (Sıfır Sentetik Veri Kuralı): Sayfa 1'de çalışan künyesi ve beyanı basılırken; Sayfa 2'deki poliklinik muayene tabloları (El-Cilt, Malignite, Tam Kan Sayımı ve Katarakt) hekimin elle muayene yapıp doldurabilmesi için tamamen temiz ve boş bırakılır. • Resmi Matbu Tipografi (Times New Roman): Şablon fontu resmi sağlık kurulu evrakı standardı olan Times New Roman ile hazırlanmış olup 4 sütunlu tam genişlikli kan sayımı matrisi sunar. Belge adı `EK1_Saglik_Muayene_{Ad_Soyad}_{TC}_{Tarih}.pdf` olarak standartlaşır. • Otomatik Bildirim Çekmecesi & Hızlı Sevk Kartı: Personel \"Sevk Edildi / Muayenede\" durumuna alındığı anda masaüstü bildirim çekmecesine ve personelin web paneline anlık bildirim kartı iletilir. Bildirime tek tıkla tıklandığında personelin sağlık kartı doğrudan açılarak EK-1 formunun basılması ve poliklinik randevu hazırlığı garanti altına alınır. 2. AŞAMA [Hekim Kararı] Poliklinik Muayeneleri, Hekim Kararı ve KVKK Kasası • Poliklinik Sonuçlarının İşlenmesi: Dahiliye (Tam Kan Sayımı, tiroid), Dermatoloji (cilt/lezyon) ve Göz (lens/katarakt) polikliniklerinden dönen kaşeli sonuçlar ve imzalar sisteme işlenir. • Nihai Hekim Kararı: İşyeri hekimi tarafından personelin radyasyon alanında çalışmasına dair genel kanaat (Uygun, Koşullu Uygun, Uygun Değil) belirlenir. • KVKK Şifreli Evrak Kasası: Poliklinik hekimlerince kaşelenip imzalanan ıslak imzalı resmi EK-1 raporu taranarak sisteme yüklenir; AES-256 Fernet ile şifrelenerek güvenli evrak kasasında saklanır. • Fer"
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip#ileri-tetkik",
    "title": "5. İleri Tetkik Sevk Süreci ve Resmi Heyet Raporu Kısıtı — 13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html#ileri-tetkik",
    "summary": "5. İleri Tetkik Sevk Süreci ve Resmi Heyet Raporu Kısıtı Rutin periyodik kontrolde şüpheli bulgu saptandığında izlenen kurumsal sevk ve çalışma kısıtı protokolü: 1. AŞAMA Şüpheli Bulgu & İleri Tetkik Sevki Periyodik muay",
    "headings": [
      "5. İleri Tetkik Sevk Süreci ve Resmi Heyet Raporu Kısıtı",
      "13. Sağlık Muayeneleri ve Periyodik Takip"
    ],
    "content": "5. İleri Tetkik Sevk Süreci ve Resmi Heyet Raporu Kısıtı Rutin periyodik kontrolde şüpheli bulgu saptandığında izlenen kurumsal sevk ve çalışma kısıtı protokolü: 1. AŞAMA Şüpheli Bulgu & İleri Tetkik Sevki Periyodik muayenede branş hekimi tarafından *\"Uygun Değil\"* veya *\"Koşullu Uygun\"* kanaati belirtildiğinde, personel ilgili kliniğe ayrıntılı ileri tetkikler için sevk edilir. 2. AŞAMA Resmi Sağlık Kurulu (Heyet) Kararı İleri tetkiklerin ardından Sağlık Kurulu toplanır. Personelin radyasyon ortamında çalışıp çalışamayacağı resmi Heyet Raporu tutanağına bağlanır. 3. AŞAMA Nöbet Muafiyeti & Çalışma Kısıtı Heyet raporunda radyasyonsuz alanda çalışma kararı çıkarsa, Yönetici/RKS tarafından Modül 07 üzerinden resmi çalışma kısıtı açılır ve nöbet motoru personeli korumaya alır."
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip#hibrit-portal",
    "title": "6. Hibrit Arayüz ve Web Portalı Görünümü — 13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html#hibrit-portal",
    "summary": "6. Hibrit Arayüz ve Web Portalı Görünümü Masaüstü klinik kayıt ve evrak yönetim merkezi ile web portalı sağlık göstergeleri karşılaştırması: Masaüstü Yönetim İstemcisi (PySide6) &check; Yeni muayene kaydı açma, branş son",
    "headings": [
      "6. Hibrit Arayüz ve Web Portalı Görünümü",
      "13. Sağlık Muayeneleri ve Periyodik Takip"
    ],
    "content": "6. Hibrit Arayüz ve Web Portalı Görünümü Masaüstü klinik kayıt ve evrak yönetim merkezi ile web portalı sağlık göstergeleri karşılaştırması: Masaüstü Yönetim İstemcisi (PySide6) &check; Yeni muayene kaydı açma, branş sonuçları ve hekim imzalarını teyit etme. &check; Taranmış sağlık heyet raporlarını AES-256 şifreli kasaya aktarma. &check; Sağ tık ile personelin tüm kronolojik muayene geçmişini inceleme. &check; Bildirim çekmecesinden tek tıkla sevk edilen personelin sağlık kartına doğrudan erişim. &check; Değişiklik ve silme işlemlerinde revizyon günlüğü ve evrensel onay kuyruğu. Web & Mobil Portalı (SaglikDashboard) &check; Sağlık Uyum Oranı (%): Kurum genelindeki personellerin muayene güncelliği. &check; Branş Dağılım Çizelgesi: Göz, Dahiliye ve Dermatoloji uygunluk oranları grafiği. &check; Muayene Yığılma Tahmini: 12 aylık periyotta beklenen kontrol randevu yoğunluğu. &check; Kişisel Sağlık Karnesi: Personelin bir sonraki kontrolüne kalan gün sayısını görmesi. &check; Sevk ve Muayene Bildirimleri: Muayeneye sevk edilen personele poliklinik hazırlık kartı ve EK-1 bilgilendirme uyarısı."
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip#akis-diyagrami",
    "title": "7. Sağlık Muayeneleri Karar Destek Akış Şeması — 13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html#akis-diyagrami",
    "summary": "7. Sağlık Muayeneleri Karar Destek Akış Şeması Periyodik kontrol planlamasından branş değerlendirmesi ve resmi heyet kısıtına kadar olan karar döngüsü: graph TD A[\"Personel Sağlık Gözetimi İhtiyacı\"] --> B[\"Muayene Türü ",
    "headings": [
      "7. Sağlık Muayeneleri Karar Destek Akış Şeması",
      "13. Sağlık Muayeneleri ve Periyodik Takip"
    ],
    "content": "7. Sağlık Muayeneleri Karar Destek Akış Şeması Periyodik kontrol planlamasından branş değerlendirmesi ve resmi heyet kısıtına kadar olan karar döngüsü: graph TD A[\"Personel Sağlık Gözetimi İhtiyacı\"] --> B[\"Muayene Türü Seçimi\"] B --> C{\"Muayene Türü ve Periyodu\"} C -- \"Radyasyon / Periyodik\" --> D[\"12 Aylık Otomatik Periyot\"] C -- \"Şua Muayenesi\" --> E[\"6 Aylık Otomatik Periyot\"] C -- \"İşe Giriş\" --> F[\"Tek Seferlik Temel Kontrol\"] D --> G[\"3 Uzmanlık Branşı Değerlendirmesi\"] E --> G F --> G G --> H[\"Göz Muayenesi (Lens / Katarakt)\"] G --> I[\"Dahiliye (Hemogram / Tiroid)\"] G --> J[\"Dermatoloji (Radyodermatit / Cilt)\"] H --> K{\"Tüm Branş Kararları Uygun mu?\"} I --> K J --> K K -- \"Evet (Uygun)\" --> L[\"Geçerli / Normal Sağlık Durumu\"] L --> M[\"Bir Sonraki Tarihin Hesaplanması ve Takvime İşlenmesi\"] K -- \"Hayır (Uygun Değil / Şüpheli)\" --> N[\"İlgili Kliniğe İleri Tetkik Sevki\"] N --> O{\"İleri Tetkik ve Heyet Kararı\"} O -- \"Geçici / Tedavi Edilebilir\" --> P[\"Kısa Süreli Kontrol ve Ara Takip\"] O -- \"Radyasyon Alanında Çalışamaz (Heyet Raporu)\" --> Q[\"Modül 07 Çalışma Kısıtlarına İşleme ve Nöbet Muafiyeti\"]"
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip#mit-avcilari",
    "title": "Sağlık Takibi & Mit Avcısı (Kritik Kurallar) — 13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html#mit-avcilari",
    "summary": "Sağlık Takibi & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Klinik muayenede hekim 'Uygun Değil' seçtiği anda sistem personelin tüm nöbetlerini otomatik iptal eder ve çalışmasını kilitler.\" Doğru Yasal Kural: Ru",
    "headings": [
      "Sağlık Takibi & Mit Avcısı (Kritik Kurallar)",
      "13. Sağlık Muayeneleri ve Periyodik Takip"
    ],
    "content": "Sağlık Takibi & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Klinik muayenede hekim 'Uygun Değil' seçtiği anda sistem personelin tüm nöbetlerini otomatik iptal eder ve çalışmasını kilitler.\" Doğru Yasal Kural: Rutin poliklinik muayenesi doğrudan çalışma engeli koymaz. Personel ileri tetkike sevk edilir; çalışamayacağı resmi Sağlık Kurulu (Heyet) Raporu ile kesinleşirse bu durum Modül 07'ye kısıt olarak işlenir. Yaygın Yanılgı (Mit 2) \"Sağlık muayene formunu kaydedebilmek için 3 branşın da (Göz, Dahiliye, Cilt) aynı gün tamamlanmış olması şarttır.\" Doğru Yasal Kural: Hayır. En az bir branş sonucu (örneğin sadece Dahiliye kan tahlili) girilerek form kısmi/taslak kaydedilebilir; diğer uzmanlık muayeneleri tamamlandıkça form açılarak güncellenir. Yaygın Yanılgı (Mit 3) \"Sonraki muayene tarihi sistem tarafından 12 ay sonraya atandığı için hekim ara kontrol istese de tarih değiştirilemez.\" Doğru Yasal Kural: Sistem seçilen türe göre (6 veya 12 ay) varsayılan tarihi önerir; ancak hekimin klinik önerisi doğrultusunda Sonraki Muayene Tarihi alanına manuel olarak daha erken bir kontrol tarihi girilebilir."
  },
  {
    "id": "13_saglik_muayeneleri_ve_periyodik_takip#sss",
    "title": "8. Sıkça Sorulan Sorular (SSS) — 13. Sağlık Muayeneleri ve Periyodik Takip",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "13_saglik_muayeneleri_ve_periyodik_takip.html#sss",
    "summary": "8. Sıkça Sorulan Sorular (SSS) Sağlık muayeneleri ve periyodik kontrollerde en sık karşılaşılan durumlar ve yanıtları: Soru 1: Bir muayene kaydında \"Uygun Değil\" seçildiğinde personel hemen nöbetlerden düşürülür mü? Bu m",
    "headings": [
      "8. Sıkça Sorulan Sorular (SSS)",
      "13. Sağlık Muayeneleri ve Periyodik Takip"
    ],
    "content": "8. Sıkça Sorulan Sorular (SSS) Sağlık muayeneleri ve periyodik kontrollerde en sık karşılaşılan durumlar ve yanıtları: Soru 1: Bir muayene kaydında \"Uygun Değil\" seçildiğinde personel hemen nöbetlerden düşürülür mü? Bu muayene ekranı rutin klinik takip ekranıdır. \"Uygun Değil\" görüşü verildiğinde personel ilgili branş kliniğine ileri tetkik için yönlendirilir. Eğer ileri tetkiklerin ardından resmi Sağlık Kurulu (Heyet) Raporu ile çalışamayacağı kesinleşirse, bu durum Modül 07 (Nöbet Ayarları ve Kısıtlar) ekranından heyet raporu şerhiyle resmi kısıt olarak işlenir ve nöbet muafiyeti başlar. Soru 2: Muayenede üç branş hekiminden sadece biri sonuç verdiğinde formu kaydedebilir miyim? Evet. Formda en az bir branş sonucunun (örneğin yalnızca Dahiliye hemogramı) seçilmiş olması kaydetmek için yeterlidir. Diğer branş muayeneleri tamamlandıkça form [Detay] butonundan açılarak güncellenebilir. Soru 3: Sonraki muayene tarihi otomatik geliyor fakat hekim 3 ay sonra ara kontrol önerdi. Tarihi değiştirebilir miyim? Evet. Sistem seçilen türe göre (6 ay veya 12 ay) varsayılan sonraki tarihi otomatik hesaplar; ancak hekim tavsiyesi doğrultusunda `Sonraki Muayene Tarihi` alanına manuel olarak daha erken bir tarih yazılabilir. Soru 4: Geçmişte silinmiş veya değiştirilmiş bir sağlık muayenesini denetim esnasında nasıl kanıtlayabilirim? Tablo satırına sağ tıklayıp Değişiklik Geçmişi seçeneğini açtığınızda; sistem kaydın eski JSON verisini, değiştiren/silen kullanıcının adını ve kesin işlem zaman damgasını resmi denetim izi tablosunda sunar."
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi",
    "title": "14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html",
    "summary": "Kurumun mimari kat planları (vektörel PDF veya yüksek çözünürlüklü görsel) üzerinde radyasyon izleme noktalarını ve sabit cihaz konumlarını canlı pinler halinde haritalandıran, periyodik saçılma dozu ölçümlerini kaydeden, yasal eşik kontrollerini otomatik dene",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Ortam Dozu & RKS Özeti)",
      "2. Arayüz Bileşenleri ve 5N1K Tablosu",
      "3. İnteraktif Kroki Tuvali ve Canlı Harita",
      "4. NDK Alan Sınıfları ve Yasal Doz Eşikleri",
      "5. Doz Ölçümü Kaydetme ve Kalibrasyon Emniyeti (RED-02)",
      "6. Limit Aşımı Alarmı ve Otomatik DÖF Entegrasyonu",
      "Otomatik Olay Bildirimi",
      "Otomatik DÖF Ataması",
      "7. Karekod (QR) Pasaport Etiketi ve SKS Excel Raporu",
      "Oda Kapı QR Pasaportu",
      "SKS 6.1 Resmi Excel Denetim Raporu",
      "8. Hibrit Saha Tablet Akışı ve Web Portalı",
      "9. Karar Akış Şeması",
      "Ortam Güvenliği & Mit Avcısı (Kritik Kurallar)",
      "10. Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 4: Dozimetre & Sağlık 14. Ortam Dozu & Kroki MODÜL 14 SKS 6.1 Standartları NDK RSGD-KLV-005 14. Ortam Dozu ve Kroki Haritası Kurumun mimari kat planları (vektörel PDF veya yüksek çözünürlüklü görsel) üzerinde radyasyon izleme noktalarını ve sabit cihaz konumlarını canlı pinler halinde haritalandıran, periyodik saçılma dozu ölçümlerini kaydeden, yasal eşik kontrollerini otomatik denetleyen, limit aşımında anında DÖF başlatan ve kapı QR pasaport etiketleri üreten modüldür. Denetimli Alan Eşiği 2.50 / 10.0 µSv/h >6 mSv/yıl giriş kontrollü radyasyon alanı eşikleri. Gözetimli Alan Eşiği 1.00 / 2.50 µSv/h 1-6 mSv/yıl kumanda masası ve paravan arkası eşikleri. Halka Açık Alan 0.25 / 0.50 µSv/h <1 mSv/yıl bekleme salonu ve koridor eşikleri. Kalibrasyon Emniyeti RED-02 Süresi dolmuş cihazla resmi ölçüm girişi engellenir. Saha Operasyon Standardı (Oda Kapı QR Pasaportu): Radyasyon güvenliği ve SKS kalite protokolü gereğince, sistemden basılan QR pasaport etiketleri öncelikle radyasyon odalarının giriş kapılarına yapıştırılır. Saha personeli (RKS/tekniker) tablet veya telefon kamerasıyla kapıdaki QR kodu okuttuğunda, o odaya kayıtlı tüm ortam izleme noktaları anında mobil ekranda listelenir; personel ilgili noktayı seçerek doğrudan sahada hızlı doz girişi gerçekleştirir. 20s Vizyonder Hızlı Karar Reçetesi (Ortam Dozu & RKS Özeti) 1. Kat Planını ve Pinleri Konumlandırın Vektörel PDF veya yüksek çözünürlüklü krokiyi yükleyin. Denetimli ve gözetimli alan sınıflarına göre izleme noktalarını haritaya iğneleyin. 2. Kalibre Dedektörle Ölçüm Girin Yalnızca kalibrasyonu geçerli survey meter ile ölçüm yapın (RED-02). Sistem girilen değeri alan eşiğiyle kıyaslayıp anında yeşil/sarı/kırmızı renklendirir. 3. Kapı QR ve Otomatik DÖF Radyasyon kapısına yapıştırılan QR kod ile mobilden ölçüm yapın. Limit aşımı tespit edildiğinde sistem ilgili birime anında otomatik DÖF başlatır. 2. Arayüz Bileşenleri ve 5N1K Tablosu Ortam Dozu ve Kroki Haritası modülündeki ekran kontrolleri, butonlar ve harita eylemlerinin işlevsel kullanım matrisi: NE? (Bileşen) NEDEN? (Amaç) NEREDE? (Konum) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? DURUM [Birim / Departman] İncelenecek radyasyon alanını belirlemek. Filtre Çubuğu Sol Seçilen birimin kat krokisini, noktalarını ve cihazlarını yükler. Ekran açıldığında / değişimde. RKS / Birim Sorumlusu Aktif [Ölçüm Kaydet] Periyodik doz ölçümünü sisteme girmek. Ana Araç Çubuğu Nokta, tarih, doz hızı, cihaz ve personeli kaydeder; kalibrasyon denetler. Periyodik ölçümde. RKS / Fizikçi / Tekniker Aktif [Yeni Nokta Ekle] Krokide yeni doz izleme noktası açmak. Ana Araç Çubuğu Ardışık kod üretir ( {DEP}-OD-01 ), alan sınıfı eşiklerini atar. Yeni oda/mahal eklendiğinde. RKS / Sistem Yöneticisi Aktif [Kroki Yükle / Değiştir] Mimari kat planı dosyasını bağlamak. Ana Araç Çubuğu PDF/PNG dosyasını yükler, şifreli kasada saklar, birimle eşleştirir. Plan atama veya revizyonda. RKS / Sistem Yöneticisi Aktif [Karekod / Etiket Bas] & Toplu QR Paketi (.ZIP) Kapı veya nokta QR etiketi üretmek ve tüm ölçüm noktalarını matbaa baskısı için toplu paketlemek. Ana Araç Çubuğu & Tablo Sağ Tık Menüsü Oda kapı pasaportu ve tekil nokta etiketi basabilir; araç çubuğundaki [Toplu QR Etiket Paketi] veya sağ tık menüsünden tüm noktalar için 300 DPI ultra net PNG etiketleri, teknik baskı şartnamesi (00_Baski_ve_Uretim_Rehberi.txt) ve icmal CSV listesi içeren endüstriyel .ZIP paketi ihraç eder. Fiziksel levha asılırken veya toplu tabela/etiket üretiminde. RKS / İSG Uzmanı / Medikal Fizikçi Aktif [SKS Raporu (Excel)] SKS 6.1 resmi denetim çıktısı almak. Ana Araç Çubuğu Renk kodlu, kurum antetli resmi denetim Excel dosyasını ( .xlsx ) üretir. Kalite denetimlerinde. Kalite Birimi / RKS Aktif [Pinler Kilitli / Taşıma] Pinlerin kazara kaymasını önlemek. Kroki Tuvali Altı Kilitliyken sürüklemeyi engeller; açıldığında koordinat taşımaya izin verir. Pin yerleşimi yapılırken. Yetkili Kullanıcı Aktif [Oda Alanını Belirle] Krokide zırhlı oda sınırını çizmek. Kroki Tuvali Altı Çizim modunu açar; fareyle seçilen dikdörtgeni odanın sınırları yapar. Birim sınırları çizilirken. RKS / Sistem Yöneticisi Aktif [Nokta Silme Engeli] Kalite denetim geçmişini korumak. Servis Katmanı Üzerinde kayıtlı ölçüm bulunan noktaların silinmesini kesinlikle engeller. Silme talebinde. Sistem Motoru Emniyet Kilidi 3. İnteraktif Kroki Tuvali ve Canlı Harita Radyasyon alanlarının canlı harita üzerinde yönetimi, çok katmanlı görselleştirme ve pürüzsüz gezinme özellikleri: Görsel 14.1: İnteraktif mimari kroki tuvali, zırhlı oda sınırları, canlı renkli ölçüm pinleri ve KPI göstergeleri. Pürüzsüz Yakınlaşma (Zoom) Fare tekerleğini ileri çevirerek imlecin bulunduğu odaya yüksek çözünürlükte yakınlaşabilir, geri çevirerek tüm kat planına dönebilirsiniz. Serbest Gezinme (Pan) Sol fare tuşunu basılı tutup sürükleyerek (ScrollHandDrag) harita tuvalinde kaydırma çubuklarına gerek kalmadan akıcı şekilde dolaşabilirsiniz. Sabit Cihaz Pinleri BT, Skopi, X-Ray veya LINAC cihazları kendilerine ait SVG modalite simgeleriyle harita üzerinde sabitlenir; oda numarası ve künyesi gösterilir. 4. NDK Alan Sınıfları ve Yasal Doz Eşikleri NDK RSGD-KLV-005 kılavuzuna göre üç temel alan sınıfı ve otomatik alarm eşikleri: [D] DENETİMLİ ALAN >6 mSv/yıl X-ışını tüpünün bulunduğu çekim odaları, zırhlı tedavi odaları ve sıcak laboratuvarlar. Uyarı Eşiği: 2.50 µSv/h Limit Eşiği: 10.00 µSv/h [G] GÖZETİMLİ ALAN 1-6 mSv/yıl Denetimli alana bitişik teknisyen kumanda odası, kurşun cam arkası ve hazırlık mahalli. Uyarı Eşiği: 1.00 µSv/h Limit Eşiği: 2.50 µSv/h [H] HALKA AÇIK ALAN <1 mSv/yıl Hasta bekleme salonları, servis koridorları, hekim odaları ve meskenler. Uyarı Eşiği: 0.25 µSv/h Limit Eşiği: 0.50 µSv/h 5. Doz Ölçümü Kaydetme ve Kalibrasyon Emniyeti (RED-02) Periyodik ölçüm giriş adımları ve kalibrasyon kontrolü emniyet mekanizması: Üst araç çubuğundaki [Ölçüm Kaydet] butonuna tıklayın veya harita üzerindeki ilgili ölçüm noktası pinine çift tıklayın. Açılan pencerede Ölçüm Nokt"
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi (Ortam Dozu & RKS Özeti) — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi (Ortam Dozu & RKS Özeti) 1. Kat Planını ve Pinleri Konumlandırın Vektörel PDF veya yüksek çözünürlüklü krokiyi yükleyin. Denetimli ve gözetimli alan sınıflarına göre izleme noktalarını ",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Ortam Dozu & RKS Özeti)",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi (Ortam Dozu & RKS Özeti) 1. Kat Planını ve Pinleri Konumlandırın Vektörel PDF veya yüksek çözünürlüklü krokiyi yükleyin. Denetimli ve gözetimli alan sınıflarına göre izleme noktalarını haritaya iğneleyin. 2. Kalibre Dedektörle Ölçüm Girin Yalnızca kalibrasyonu geçerli survey meter ile ölçüm yapın (RED-02). Sistem girilen değeri alan eşiğiyle kıyaslayıp anında yeşil/sarı/kırmızı renklendirir. 3. Kapı QR ve Otomatik DÖF Radyasyon kapısına yapıştırılan QR kod ile mobilden ölçüm yapın. Limit aşımı tespit edildiğinde sistem ilgili birime anında otomatik DÖF başlatır."
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#bilesenler",
    "title": "2. Arayüz Bileşenleri ve 5N1K Tablosu — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#bilesenler",
    "summary": "2. Arayüz Bileşenleri ve 5N1K Tablosu Ortam Dozu ve Kroki Haritası modülündeki ekran kontrolleri, butonlar ve harita eylemlerinin işlevsel kullanım matrisi: NE? (Bileşen) NEDEN? (Amaç) NEREDE? (Konum) NASIL? (Çalışma Man",
    "headings": [
      "2. Arayüz Bileşenleri ve 5N1K Tablosu",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "2. Arayüz Bileşenleri ve 5N1K Tablosu Ortam Dozu ve Kroki Haritası modülündeki ekran kontrolleri, butonlar ve harita eylemlerinin işlevsel kullanım matrisi: NE? (Bileşen) NEDEN? (Amaç) NEREDE? (Konum) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? DURUM [Birim / Departman] İncelenecek radyasyon alanını belirlemek. Filtre Çubuğu Sol Seçilen birimin kat krokisini, noktalarını ve cihazlarını yükler. Ekran açıldığında / değişimde. RKS / Birim Sorumlusu Aktif [Ölçüm Kaydet] Periyodik doz ölçümünü sisteme girmek. Ana Araç Çubuğu Nokta, tarih, doz hızı, cihaz ve personeli kaydeder; kalibrasyon denetler. Periyodik ölçümde. RKS / Fizikçi / Tekniker Aktif [Yeni Nokta Ekle] Krokide yeni doz izleme noktası açmak. Ana Araç Çubuğu Ardışık kod üretir ( {DEP}-OD-01 ), alan sınıfı eşiklerini atar. Yeni oda/mahal eklendiğinde. RKS / Sistem Yöneticisi Aktif [Kroki Yükle / Değiştir] Mimari kat planı dosyasını bağlamak. Ana Araç Çubuğu PDF/PNG dosyasını yükler, şifreli kasada saklar, birimle eşleştirir. Plan atama veya revizyonda. RKS / Sistem Yöneticisi Aktif [Karekod / Etiket Bas] & Toplu QR Paketi (.ZIP) Kapı veya nokta QR etiketi üretmek ve tüm ölçüm noktalarını matbaa baskısı için toplu paketlemek. Ana Araç Çubuğu & Tablo Sağ Tık Menüsü Oda kapı pasaportu ve tekil nokta etiketi basabilir; araç çubuğundaki [Toplu QR Etiket Paketi] veya sağ tık menüsünden tüm noktalar için 300 DPI ultra net PNG etiketleri, teknik baskı şartnamesi (00_Baski_ve_Uretim_Rehberi.txt) ve icmal CSV listesi içeren endüstriyel .ZIP paketi ihraç eder. Fiziksel levha asılırken veya toplu tabela/etiket üretiminde. RKS / İSG Uzmanı / Medikal Fizikçi Aktif [SKS Raporu (Excel)] SKS 6.1 resmi denetim çıktısı almak. Ana Araç Çubuğu Renk kodlu, kurum antetli resmi denetim Excel dosyasını ( .xlsx ) üretir. Kalite denetimlerinde. Kalite Birimi / RKS Aktif [Pinler Kilitli / Taşıma] Pinlerin kazara kaymasını önlemek. Kroki Tuvali Altı Kilitliyken sürüklemeyi engeller; açıldığında koordinat taşımaya izin verir. Pin yerleşimi yapılırken. Yetkili Kullanıcı Aktif [Oda Alanını Belirle] Krokide zırhlı oda sınırını çizmek. Kroki Tuvali Altı Çizim modunu açar; fareyle seçilen dikdörtgeni odanın sınırları yapar. Birim sınırları çizilirken. RKS / Sistem Yöneticisi Aktif [Nokta Silme Engeli] Kalite denetim geçmişini korumak. Servis Katmanı Üzerinde kayıtlı ölçüm bulunan noktaların silinmesini kesinlikle engeller. Silme talebinde. Sistem Motoru Emniyet Kilidi"
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#kroki-tuvali",
    "title": "3. İnteraktif Kroki Tuvali ve Canlı Harita — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#kroki-tuvali",
    "summary": "3. İnteraktif Kroki Tuvali ve Canlı Harita Radyasyon alanlarının canlı harita üzerinde yönetimi, çok katmanlı görselleştirme ve pürüzsüz gezinme özellikleri: Görsel 14.1: İnteraktif mimari kroki tuvali, zırhlı oda sınırl",
    "headings": [
      "3. İnteraktif Kroki Tuvali ve Canlı Harita",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "3. İnteraktif Kroki Tuvali ve Canlı Harita Radyasyon alanlarının canlı harita üzerinde yönetimi, çok katmanlı görselleştirme ve pürüzsüz gezinme özellikleri: Görsel 14.1: İnteraktif mimari kroki tuvali, zırhlı oda sınırları, canlı renkli ölçüm pinleri ve KPI göstergeleri. Pürüzsüz Yakınlaşma (Zoom) Fare tekerleğini ileri çevirerek imlecin bulunduğu odaya yüksek çözünürlükte yakınlaşabilir, geri çevirerek tüm kat planına dönebilirsiniz. Serbest Gezinme (Pan) Sol fare tuşunu basılı tutup sürükleyerek (ScrollHandDrag) harita tuvalinde kaydırma çubuklarına gerek kalmadan akıcı şekilde dolaşabilirsiniz. Sabit Cihaz Pinleri BT, Skopi, X-Ray veya LINAC cihazları kendilerine ait SVG modalite simgeleriyle harita üzerinde sabitlenir; oda numarası ve künyesi gösterilir."
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#alan-siniflari",
    "title": "4. NDK Alan Sınıfları ve Yasal Doz Eşikleri — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#alan-siniflari",
    "summary": "4. NDK Alan Sınıfları ve Yasal Doz Eşikleri NDK RSGD-KLV-005 kılavuzuna göre üç temel alan sınıfı ve otomatik alarm eşikleri: [D] DENETİMLİ ALAN >6 mSv/yıl X-ışını tüpünün bulunduğu çekim odaları, zırhlı tedavi odaları v",
    "headings": [
      "4. NDK Alan Sınıfları ve Yasal Doz Eşikleri",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "4. NDK Alan Sınıfları ve Yasal Doz Eşikleri NDK RSGD-KLV-005 kılavuzuna göre üç temel alan sınıfı ve otomatik alarm eşikleri: [D] DENETİMLİ ALAN >6 mSv/yıl X-ışını tüpünün bulunduğu çekim odaları, zırhlı tedavi odaları ve sıcak laboratuvarlar. Uyarı Eşiği: 2.50 µSv/h Limit Eşiği: 10.00 µSv/h [G] GÖZETİMLİ ALAN 1-6 mSv/yıl Denetimli alana bitişik teknisyen kumanda odası, kurşun cam arkası ve hazırlık mahalli. Uyarı Eşiği: 1.00 µSv/h Limit Eşiği: 2.50 µSv/h [H] HALKA AÇIK ALAN <1 mSv/yıl Hasta bekleme salonları, servis koridorları, hekim odaları ve meskenler. Uyarı Eşiği: 0.25 µSv/h Limit Eşiği: 0.50 µSv/h"
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#doz-olcum",
    "title": "5. Doz Ölçümü Kaydetme ve Kalibrasyon Emniyeti (RED-02) — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#doz-olcum",
    "summary": "5. Doz Ölçümü Kaydetme ve Kalibrasyon Emniyeti (RED-02) Periyodik ölçüm giriş adımları ve kalibrasyon kontrolü emniyet mekanizması: Üst araç çubuğundaki [Ölçüm Kaydet] butonuna tıklayın veya harita üzerindeki ilgili ölçü",
    "headings": [
      "5. Doz Ölçümü Kaydetme ve Kalibrasyon Emniyeti (RED-02)",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "5. Doz Ölçümü Kaydetme ve Kalibrasyon Emniyeti (RED-02) Periyodik ölçüm giriş adımları ve kalibrasyon kontrolü emniyet mekanizması: Üst araç çubuğundaki [Ölçüm Kaydet] butonuna tıklayın veya harita üzerindeki ilgili ölçüm noktası pinine çift tıklayın. Açılan pencerede Ölçüm Noktası , Ölçüm Tarihi , ölçülen Doz Hızı ($\\mu\\text{Sv/h}$) ve Doğal Arka Plan değerlerini girin. Kullanılan ölçüm aletinin marka, model ve seri numarasını yazın; ölçümü yapan personeli seçin. Kalibrasyon Emniyet Kilidi (RED-02): Sistem, kullanılan cihazın veritabanında kayıtlı kalibrasyon süresini kontrol eder. Kalibrasyon süresi dolmuşsa sistem ölçüm kaydını emniyet kilidiyle reddeder: HATA: Kullanılan ölçüm cihazının kalibrasyon geçerlilik süresi dolmuştur. NDK ve SKS kalite standartları gereğince kalibrasyonu geçmiş cihazla resmi ölçüm kaydedilemez. Bilgiler eksiksiz ise [Ölçümü Kaydet] butonuna basarak işlemi tamamlayın."
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#dof-olay",
    "title": "6. Limit Aşımı Alarmı ve Otomatik DÖF Entegrasyonu — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#dof-olay",
    "summary": "6. Limit Aşımı Alarmı ve Otomatik DÖF Entegrasyonu Doz limitleri aşıldığında sistemin devreye soktuğu otomatik güvenlik ve kalite mekanizması: Otomatik Olay Bildirimi Ölçülen doz değeri ilgili noktanın limit eşiğini aştı",
    "headings": [
      "6. Limit Aşımı Alarmı ve Otomatik DÖF Entegrasyonu",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "6. Limit Aşımı Alarmı ve Otomatik DÖF Entegrasyonu Doz limitleri aşıldığında sistemin devreye soktuğu otomatik güvenlik ve kalite mekanizması: Otomatik Olay Bildirimi Ölçülen doz değeri ilgili noktanın limit eşiğini aştığı anda sistem arka planda Olay Bildirimi (Modül 15) modülüne otomatik kayıt oluşturur: Olay Tanımı: Nokta kodu, ölçülen doz ve yasal limit bilgisi. Olay Sonucu: \"Orta Zarar\" olarak derecelendirilir. Acil Müdahale: \"Girişler sınırlandırıldı, zırhlama kontrolü başlatıldı.\" NDK Bildirim Bayrağı: Doz limitin 3 katını aşarsa zorunlu kılınır. Otomatik DÖF Ataması Sistem yalnızca olay kaydı açmakla kalmaz; kalite yönetim süreci uyarınca sorumlu personele doğrudan düzeltici işlem görevi yükler: Faaliyet Tipi: \"Düzeltici Önleyici Faaliyet (DÖF)\" Açıklama: \"Ortam dozu limit aşımı zırhlama ve sızıntı incelemesi\" Sorumlu: Ölçümü yapan personel veya RKS sorumlusu DÖF Kapatma Kilidi: Sorun giderilip DÖF kapatılana dek olay açık kalır."
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#qr-sks",
    "title": "7. Karekod (QR) Pasaport Etiketi ve SKS Excel Raporu — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#qr-sks",
    "summary": "7. Karekod (QR) Pasaport Etiketi ve SKS Excel Raporu Fiziksel kapı/nokta levhalandırması ve Sağlık Bakanlığı kalite denetim çıktısı: Görsel 14.2: Radyasyon alanı ve ölçüm noktası termal QR pasaport etiketi penceresi. Oda",
    "headings": [
      "7. Karekod (QR) Pasaport Etiketi ve SKS Excel Raporu",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "7. Karekod (QR) Pasaport Etiketi ve SKS Excel Raporu Fiziksel kapı/nokta levhalandırması ve Sağlık Bakanlığı kalite denetim çıktısı: Görsel 14.2: Radyasyon alanı ve ölçüm noktası termal QR pasaport etiketi penceresi. Oda Kapı QR Pasaportu Üstteki [Karekod / Etiket Bas] butonuna tıklayıp Oda Kapı Karekod Etiketi Bas seçeneğini belirleyin. Çıktı alınan etiket radyasyon odasının giriş kapısına yapıştırılır. Termal etiket yazıcıdan anında yazdırılabilir veya PNG olarak dışa aktarılabilir. SKS 6.1 Resmi Excel Denetim Raporu [SKS Raporu (Excel)] butonuna basıldığında sistem; kurum antetini, birim adını, ölçüm noktası kodlarını, alan sınıflarını, ölçüm tarihlerini, ölçülen dozları ve eşikleri içeren, limit aşımını kırmızı, uyarıları sarı renkle vurgulayan resmi Excel raporunu ( .xlsx ) üretir."
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#hibrit-portal",
    "title": "8. Hibrit Saha Tablet Akışı ve Web Portalı — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#hibrit-portal",
    "summary": "8. Hibrit Saha Tablet Akışı ve Web Portalı Masaüstü yönetim kokpiti ile mobil saha uygulamasının çift yönlü senkronizasyonu: 1. Masaüstü Yönetim Merkezi (PySide6) Kat planı PDF dosyalarının yüklendiği, oda sınırlarının ç",
    "headings": [
      "8. Hibrit Saha Tablet Akışı ve Web Portalı",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "8. Hibrit Saha Tablet Akışı ve Web Portalı Masaüstü yönetim kokpiti ile mobil saha uygulamasının çift yönlü senkronizasyonu: 1. Masaüstü Yönetim Merkezi (PySide6) Kat planı PDF dosyalarının yüklendiği, oda sınırlarının çizildiği, sabit cihazların konumlandırıldığı, yasal eşik limitlerinin belirlendiği, pin kilitlerinin açılıp kapandığı ve resmi denetim Excel raporlarının alındığı ana merkezdir. 2. Saha Mobil Portalı (Tablet / Telefon) Saha teknisyeni kapıdaki QR kodu tablet kamerasıyla okutur; ekranda odaya ait zırhlı kroki ve ölçüm noktaları listelenir. Teknisyen cihazdan okuduğu dozu doğrudan sahada girer; veri anında masaüstü sistemine ve web analitik paneline yansır."
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#akis-diyagrami",
    "title": "9. Karar Akış Şeması — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#akis-diyagrami",
    "summary": "9. Karar Akış Şeması Ortam dozu ölçümü, eşik denetimi ve otomatik olay sürecinin mantıksal işleyiş şeması: flowchart TD A[\"Kat Planı / Kroki Yükleme (PDF / Görsel)\"] --> B[\"Oda Sınırlarını Belirleme ve Cihaz Sabitleme\"] ",
    "headings": [
      "9. Karar Akış Şeması",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "9. Karar Akış Şeması Ortam dozu ölçümü, eşik denetimi ve otomatik olay sürecinin mantıksal işleyiş şeması: flowchart TD A[\"Kat Planı / Kroki Yükleme (PDF / Görsel)\"] --> B[\"Oda Sınırlarını Belirleme ve Cihaz Sabitleme\"] B --> C[\"Ölçüm Noktaları Tanımlama (NDK Alan Sınıfları)\"] C --> D[\"Oda Kapı QR Pasaport Etiketi Basımı\"] D --> E[\"Mobil / Masaüstü Periyodik Doz Ölçümü Girişi\"] E --> F{\"Cihaz Kalibrasyonu Geçerli mi?\"} F -- \"Hayır\" --> G[\"Ölçüm Reddedilir (Kalibrasyon Uyarısı)\"] F -- \"Evet\" --> H{\"Doz Eşik Kontrolü\"} H -- \"Doz I[\"Normal (Yeşil Pin)\"] H -- \"Uyarı J[\"Uyarı (Sarı Pin)\"] H -- \"Doz > Limit Eşiği\" --> K[\"Limit Aşımı (Kırmızı Pin)\"] K --> L[\"Otomatik Olay Bildirimi ve DÖF Başlatma\"] I --> M[\"SKS 6.1 Resmi Excel Denetim Raporu\"] J --> M L --> M"
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#mit-avcilari",
    "title": "Ortam Güvenliği & Mit Avcısı (Kritik Kurallar) — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#mit-avcilari",
    "summary": "Ortam Güvenliği & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Kalibrasyon geçerlilik süresi 1-2 hafta geçmiş radyasyon ölçüm cihazı ile acil durumlarda resmi ortam dozu kaydı yapılabilir.\" Doğru Yasal Kural: NDK",
    "headings": [
      "Ortam Güvenliği & Mit Avcısı (Kritik Kurallar)",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "Ortam Güvenliği & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Kalibrasyon geçerlilik süresi 1-2 hafta geçmiş radyasyon ölçüm cihazı ile acil durumlarda resmi ortam dozu kaydı yapılabilir.\" Doğru Yasal Kural: NDK mevzuatı ve RED-02 güvenlik kilidi gereğince kalibrasyon süresi dolmuş hiçbir cihazla sisteme resmi ölçüm girilemez; sistem ölçüm kaydını kesin olarak engeller. Yaygın Yanılgı (Mit 2) \"Kapıdaki QR kod sadece personelin bilgi alması içindir; ölçüm girmek için masaüstü yazılımı zorunludur.\" Doğru Yasal Kural: Oda kapısındaki QR kod doğrudan mobil tarayıcıda hızlı doz giriş arayüzünü açar. RKS veya tekniker masaüstüne dönmeden sahada cep telefonuyla ölçümü anında tamamlar. Yaygın Yanılgı (Mit 3) \"Ölçüm geçmişi olan bir radyasyon izleme noktası kroki planı değiştiğinde kolayca silinebilir.\" Doğru Yasal Kural: SKS 6.1 ve denetim izi gereğince üzerinde geçmiş ölçüm verisi bulunan hiçbir nokta silinemez; yalnızca 'Pasif'e alınabilir veya taşınabilir."
  },
  {
    "id": "14_ortam_dozu_ve_kroki_haritasi#sss",
    "title": "10. Sıkça Sorulan Sorular (SSS) — 14. Ortam Dozu ve Kroki Haritası",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "14_ortam_dozu_ve_kroki_haritasi.html#sss",
    "summary": "10. Sıkça Sorulan Sorular (SSS) Ortam Dozu ve Kroki Haritası modülüyle ilgili en sık karşılaşılan sorular ve yanıtları: Mimari kat planı olarak vektörel PDF dosyası yükleyebilir miyim? Evet. RADPYS v4 mimarisi PNG, JPG v",
    "headings": [
      "10. Sıkça Sorulan Sorular (SSS)",
      "14. Ortam Dozu ve Kroki Haritası"
    ],
    "content": "10. Sıkça Sorulan Sorular (SSS) Ortam Dozu ve Kroki Haritası modülüyle ilgili en sık karşılaşılan sorular ve yanıtları: Mimari kat planı olarak vektörel PDF dosyası yükleyebilir miyim? Evet. RADPYS v4 mimarisi PNG, JPG ve BMP resimlerinin yanı sıra vektörel mimari .pdf kat planlarını doğrudan destekler. Yüklenen PDF dosyasının ilk sayfası yüksek çözünürlükte render edilerek grafik tuvaline aktarılır. Haritadaki pinlerin fareyle gezinirken kazara kayması nasıl önlenir? Varsayılan olarak harita [Pinler Kilitli] modunda açılır. Bu moddayken pinler sabitlenmiştir; fareyle sürüklenseniz dahi koordinatları değişmez. Konumları değiştirmek için butona basarak [Taşıma Aktif] moduna geçmeniz gerekir. Ölçüm geçmişi olan bir noktayı yanlışlıkla silmek mümkün müdür? Hayır. SKS 6.1 ve NDK kalite denetim izlerinin korunması amacıyla, üzerinde en az bir adet kayıtlı doz ölçümü bulunan noktaların silinmesi sistem tarafından emniyet kilidiyle engellenir. Cihaz kalibrasyon süresi dolduğunda ne yapılmalıdır? Kalibrasyon geçerlilik süresi dolmuş bir survey meter ile ölçüm girilemez (RED-02). Cihaz yetkili kalibrasyon merkezine (örn: TENMAK SSDL) gönderilmeli ve kalibrasyon tamamlandığında cihaz kartındaki tarih güncellenmelidir. Ortam dozu ölçüm noktalarının QR etiketlerini tabela veya matbaa üretimi için topluca nasıl alabilirim? Üst araç çubuğundaki [Toplu QR Etiket Paketi] butonuna tıklayın veya ölçüm noktaları tablosunda sağ tıklayarak \"Toplu QR Etiket Paketi (.ZIP)\" seçeneğini çalıştırın. Sistem odadaki tüm ölçüm noktaları için 300 DPI (800x1050 px) matbaa kalitesinde PNG etiketler, profesyonel tabela üreticisine iletilebilecek malzeme şartnamesi ( 00_Baski_ve_Uretim_Rehberi.txt ) ve koordinat/oda bilgilerini içeren 00_Etiket_Listesi_Icmal.csv dosyasını tek bir .ZIP arşivi olarak üretir."
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa",
    "title": "15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim",
    "url": "15_olay_bildirimi_ve_dof_capa.html",
    "summary": "Radyasyon alanlarında meydana gelen kazaları, ramak kala olayları ve uygunsuzlukları SKS 6.1 uyumlu 3 adımlı sihirbazla kayıt altına alan, ana listeden doğrudan veya bağımsız Düzeltici Önleyici Faaliyet (DÖF) başlatan, 72 saatlik NDK yasal bildirim geri sayımı",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Olay & DÖF Özeti)",
      "7 DÖF (CAPA) Faaliyetleri: Olaya Bağlı ve Bağımsız Kalite Yönetimi",
      "8 Açık DÖF Kapatma Emniyet Kilidi ve Zorunlu Kapanış Notu",
      "9 Cihaz Arıza & Kurum İçi İstatistik Takibi",
      "10 Resmi SKS / NDK Olay ve DÖF Tutanağı (Kurumsal Antetli PDF)",
      "11 Hibrit Saha Mobil Formu ve Web Portalı",
      "Ekran Konumları ve Görsel Rehber",
      "12 Karar ve İş Akış Şeması (Mermaid)",
      "Olay Bildirimi, DÖF & Mit Avcısı (Kritik Kurallar)",
      "13 Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 4: Dozimetre & Sağlık 15. Olay Bildirimi & DÖF MODÜL 15 Sağlık Bakanlığı SKS 6.1 NDK RSGD-KLV-005 15. Olay Bildirimi ve DÖF (CAPA) Radyasyon alanlarında meydana gelen kazaları, ramak kala olayları ve uygunsuzlukları SKS 6.1 uyumlu 3 adımlı sihirbazla kayıt altına alan, ana listeden doğrudan veya bağımsız Düzeltici Önleyici Faaliyet (DÖF) başlatan, 72 saatlik NDK yasal bildirim geri sayımını yürüten, 4 adımlı doğal inceleme akışıyla sorumlu atayan, açık aksiyonlar tamamlanmadan olayın kapatılmasını engelleyen ve resmi tek sayfalık SKS/NDK tutanağı üreten kurumsal kalite modülüdür. NDK Yasal Süresi 72s / 24s Acil kazalarda 1 gün, diğer radyolojik olaylarda 3 iş günü geri sayım. Kapatma Emniyet Kilidi CAPA Lock Açık DÖF faaliyeti varken olayın kapatılması canlı kilit ile engellenir. İnceleme Akışı 4 Doğal Adım Künye → İnceleme & Atama → DÖF → Kapanış, Karar ve Resmi Tutanak. Doğrudan / Bağımsız DÖF Esnek Kalite Ana listeden hem olaya bağlı hem bağımsız genel kalite faaliyeti başlatma. 20s Vizyonder Hızlı Karar Reçetesi (Olay & DÖF Özeti) 1. Olay Bildirimi veya Hızlı DÖF SKS 6.1 sihirbazıyla kaza/ramak kala kaydı açın veya ana listedeki [Yeni DÖF Ekle] butonuyla olaya bağlı veya bağımsız genel kalite faaliyeti başlatın. 2. 72s NDK & Sorumlu Atama Yasal bildirim süresini (24s / 72s) izleyin. 2. Adımda sorumlu uzmanı zengin listeden seçin; sonraki adıma geçildiğinde sistem atamayı otomatik kaydeder. 3. DÖF & Açık Emniyet Kilidi Gerekli düzeltici faaliyetleri yürütün. Tamamlanmamış açık DÖF varken sistem olayın kapatılmasını güvenle kilitler (CAPA Lock). 4. Kapatma & Resmi Tutanak Tüm DÖF'ler bitince nihai karar notu girip [Olayı Kapat ve Tamamla] ile dosyayı mühürleyin; [Resmi Tutanağı Yazdır / PDF] ile tek tıkla resmi belge alın. 7 DÖF (CAPA) Faaliyetleri: Olaya Bağlı ve Bağımsız Kalite Yönetimi Düzeltici ve Önleyici Faaliyetler (DÖF), hem inceleme sihirbazının 3. Adımından hem de ana listenin araç çubuğundaki [Yeni DÖF Ekle] butonundan başlatılabilir: BAĞIMSIZ VEYA OLAYA BAĞLI FAALİYET DÖF penceresinde yer alan \"İlişkili Olay Bildirimi\" açılır kutusu sayesinde faaliyet açık bir olaya bağlanabilir veya (Bağımsız / Genel Kalite Faaliyeti — Olay Bildirimi Yok) seçeneğiyle kurum genelindeki önleyici iyileştirmeler için serbestçe işletilebilir. ZENGİN PERSONEL VE ŞEFFAF TAKİP Görevlendirilecek personel unvan ve birim bilgisiyle seçilir, faaliyet tipi ( Düzeltici , Önleyici , İyileştirici ) ve termin tarihi atanır. DÖF takip tablosuna eklenen \"İlişkili Olay\" sütunuyla tüm aksiyonlar şeffafça izlenir. 8 Açık DÖF Kapatma Emniyet Kilidi ve Zorunlu Kapanış Notu SKS 6.1 ve kalite denetim standartları gereğince uygunsuzluklar önlemleri tamamlanmadan kağıt üzerinde kapatılamaz: Açık DÖF Emniyet Kilidi (CAPA Closure Guard) İnceleme sihirbazının 4. Adımı açıldığında sistem bağlı DÖF faaliyetlerini sorgular. Eğer tamamlanmamış en az 1 DÖF varsa kapatma butonu kilitlenir ve kullanıcı DÖF sekmesine yönlendirilir. Tüm DÖF faaliyetleri başarıyla sonuçlandırıldığında ekran yeşil onay verir; zorunlu nihai kalite ve kapanış notu girilerek [Olayı Kapat ve Tamamla] butonuyla olay güvenle resmi \"Kapalı\" statüsüne alınır. Kapanış tarihi ana listeye anında yansıtılır. 9 Cihaz Arıza & Kurum İçi İstatistik Takibi Olay bildirimi tıbbi bir cihazın teknik arızasından kaynaklanmışsa ( ilgili_cihaz_id ): Süreç ve İstatistik Amacı: Sistem olay üzerinden teknik arıza izleme kaydı oluşturur. Bu kayıt, harici bir teknik servise veya bakım firmasına resmi çağrı göndermez; kurum içinde Radyasyon Güvenliği Komitesinin arıza-kaza korelasyonunu ve birim istatistiklerini takip etmesi içindir. DÖF Referansı: Olay DÖF tablosuna otomatik olarak \"Cihaz arıza kaydı açıldı (#Arıza ID)\" referansı eklenerek şeffaf takip sağlanır. 10 Resmi SKS / NDK Olay ve DÖF Tutanağı (Kurumsal Antetli PDF) Herhangi bir olayın resmi kalite dosyasını üretmek veya inceleme tamamlandığında resmi tutanak almak için [Resmi Tutanağı Yazdır / PDF] butonuna tıklayın: SKS 6.1 ve NDK Uyumlu Kurumsal Antet: Formun en üstünde kurum logosu, kurum adı, kalite birimi başlığı ve resmi doküman takip kartı (Doküman No, Revizyon Tarihi ve Sayfa No) yer alır. Renkli Klinik Rozetler ve NDK Uyarı Şeridi: Olayın sonucu (Ramak Kala, Hafif/Ciddi Zarar) ve yasal NDK 72 saatlik bildirim durumu resmi denetimlerde ilk bakışta fark edilebilecek şık rozetlerle vurgulanır. Tek Sayfaya Tam Oturan Düzen: Tüm olay künyesi, acil müdahale, DÖF planı ve yetkili imza kutuları (Bildiren, İnceleyen Uzman ve RKS/RSO) sayfa taşması ve imza parçalanması olmadan tek bir A4 sayfasına estetik ve eksiksiz olarak sığdırılmıştır. Doğru İşe Tek Format Standardı: Resmi evrak niteliği taşıdığı için doğrudan antetli, mühürlü ve değiştirilemez PDF formatında üretilir. 11 Hibrit Saha Mobil Formu ve Web Portalı RADPYS Olay Bildirimi ve DÖF modülü, masaüstü kurumsal yönetim ile saha mobil web portalının tam entegrasyonuyla çalışır: SAHA MOBİL FORMU (IncidentReportForm) Klinikteki teknisyen, hemşire veya fizikçi cep telefonu veya tabletinden 3 adımlı formu açarak kazayı veya ramak kala durumunu anında bildirir. Kayıt sunucuya iletildiği anda yönetici ekranında bildirim düşer. WEB ANALİTİK DASHBOARD (OlayBildirimiDashboard) Kalite direktörleri ve hastane yönetimi web portalı üzerinden toplam olay, bekleyen DÖF'ler, çözülen vakalar, NDK bekleyenler sayaçlarını ve aylık olay trend çizgi grafiklerini canlı takip eder. Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Radyasyon Güvenliği > Olay Bildirimi ve DÖF (CAPA) Yönetimi Ana Yönetim Kokpiti & NDK Süre Sayacı Simülasyon Notu: Kurum içi SKS 6.1 ve NDK radyolojik olay bildirimlerinin, açık DÖF sayaçlarının ve yasal bildirim sürelerinin izlendiği ana ekran. ️ Ekran Konumu: Olay Bildirimi ve DÖF > [İncele / DÖF Yönet] > 1. Adım Adım 1: Olay Künyesi & Sınıflandırma Simülasyon Notu: Olayın şiddeti, kategorisi, kök neden analizi ve NDK bildirim gereksiniminin belirlendiği birinci adım. ️ Ekran Konumu: Olay Bildirimi ve DÖF > [İncele / DÖF Yönet] > 2"
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi (Olay & DÖF Özeti) — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi (Olay & DÖF Özeti) 1. Olay Bildirimi veya Hızlı DÖF SKS 6.1 sihirbazıyla kaza/ramak kala kaydı açın veya ana listedeki [Yeni DÖF Ekle] butonuyla olaya bağlı veya bağımsız genel kalite f",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Olay & DÖF Özeti)",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi (Olay & DÖF Özeti) 1. Olay Bildirimi veya Hızlı DÖF SKS 6.1 sihirbazıyla kaza/ramak kala kaydı açın veya ana listedeki [Yeni DÖF Ekle] butonuyla olaya bağlı veya bağımsız genel kalite faaliyeti başlatın. 2. 72s NDK & Sorumlu Atama Yasal bildirim süresini (24s / 72s) izleyin. 2. Adımda sorumlu uzmanı zengin listeden seçin; sonraki adıma geçildiğinde sistem atamayı otomatik kaydeder. 3. DÖF & Açık Emniyet Kilidi Gerekli düzeltici faaliyetleri yürütün. Tamamlanmamış açık DÖF varken sistem olayın kapatılmasını güvenle kilitler (CAPA Lock). 4. Kapatma & Resmi Tutanak Tüm DÖF'ler bitince nihai karar notu girip [Olayı Kapat ve Tamamla] ile dosyayı mühürleyin; [Resmi Tutanağı Yazdır / PDF] ile tek tıkla resmi belge alın."
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#dof-yonetimi",
    "title": "7 DÖF (CAPA) Faaliyetleri: Olaya Bağlı ve Bağımsız Kalite Yönetimi — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#dof-yonetimi",
    "summary": "7 DÖF (CAPA) Faaliyetleri: Olaya Bağlı ve Bağımsız Kalite Yönetimi Düzeltici ve Önleyici Faaliyetler (DÖF), hem inceleme sihirbazının 3. Adımından hem de ana listenin araç çubuğundaki [Yeni DÖF Ekle] butonundan başlatıla",
    "headings": [
      "7 DÖF (CAPA) Faaliyetleri: Olaya Bağlı ve Bağımsız Kalite Yönetimi",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "7 DÖF (CAPA) Faaliyetleri: Olaya Bağlı ve Bağımsız Kalite Yönetimi Düzeltici ve Önleyici Faaliyetler (DÖF), hem inceleme sihirbazının 3. Adımından hem de ana listenin araç çubuğundaki [Yeni DÖF Ekle] butonundan başlatılabilir: BAĞIMSIZ VEYA OLAYA BAĞLI FAALİYET DÖF penceresinde yer alan \"İlişkili Olay Bildirimi\" açılır kutusu sayesinde faaliyet açık bir olaya bağlanabilir veya (Bağımsız / Genel Kalite Faaliyeti — Olay Bildirimi Yok) seçeneğiyle kurum genelindeki önleyici iyileştirmeler için serbestçe işletilebilir. ZENGİN PERSONEL VE ŞEFFAF TAKİP Görevlendirilecek personel unvan ve birim bilgisiyle seçilir, faaliyet tipi ( Düzeltici , Önleyici , İyileştirici ) ve termin tarihi atanır. DÖF takip tablosuna eklenen \"İlişkili Olay\" sütunuyla tüm aksiyonlar şeffafça izlenir."
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#kapatma-kilidi",
    "title": "8 Açık DÖF Kapatma Emniyet Kilidi ve Zorunlu Kapanış Notu — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#kapatma-kilidi",
    "summary": "8 Açık DÖF Kapatma Emniyet Kilidi ve Zorunlu Kapanış Notu SKS 6.1 ve kalite denetim standartları gereğince uygunsuzluklar önlemleri tamamlanmadan kağıt üzerinde kapatılamaz: Açık DÖF Emniyet Kilidi (CAPA Closure Guard) İ",
    "headings": [
      "8 Açık DÖF Kapatma Emniyet Kilidi ve Zorunlu Kapanış Notu",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "8 Açık DÖF Kapatma Emniyet Kilidi ve Zorunlu Kapanış Notu SKS 6.1 ve kalite denetim standartları gereğince uygunsuzluklar önlemleri tamamlanmadan kağıt üzerinde kapatılamaz: Açık DÖF Emniyet Kilidi (CAPA Closure Guard) İnceleme sihirbazının 4. Adımı açıldığında sistem bağlı DÖF faaliyetlerini sorgular. Eğer tamamlanmamış en az 1 DÖF varsa kapatma butonu kilitlenir ve kullanıcı DÖF sekmesine yönlendirilir. Tüm DÖF faaliyetleri başarıyla sonuçlandırıldığında ekran yeşil onay verir; zorunlu nihai kalite ve kapanış notu girilerek [Olayı Kapat ve Tamamla] butonuyla olay güvenle resmi \"Kapalı\" statüsüne alınır. Kapanış tarihi ana listeye anında yansıtılır."
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#cihaz-surec",
    "title": "9 Cihaz Arıza & Kurum İçi İstatistik Takibi — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#cihaz-surec",
    "summary": "9 Cihaz Arıza & Kurum İçi İstatistik Takibi Olay bildirimi tıbbi bir cihazın teknik arızasından kaynaklanmışsa ( ilgili_cihaz_id ): Süreç ve İstatistik Amacı: Sistem olay üzerinden teknik arıza izleme kaydı oluşturur. Bu",
    "headings": [
      "9 Cihaz Arıza & Kurum İçi İstatistik Takibi",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "9 Cihaz Arıza & Kurum İçi İstatistik Takibi Olay bildirimi tıbbi bir cihazın teknik arızasından kaynaklanmışsa ( ilgili_cihaz_id ): Süreç ve İstatistik Amacı: Sistem olay üzerinden teknik arıza izleme kaydı oluşturur. Bu kayıt, harici bir teknik servise veya bakım firmasına resmi çağrı göndermez; kurum içinde Radyasyon Güvenliği Komitesinin arıza-kaza korelasyonunu ve birim istatistiklerini takip etmesi içindir. DÖF Referansı: Olay DÖF tablosuna otomatik olarak \"Cihaz arıza kaydı açıldı (#Arıza ID)\" referansı eklenerek şeffaf takip sağlanır."
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#resmi-tutanak",
    "title": "10 Resmi SKS / NDK Olay ve DÖF Tutanağı (Kurumsal Antetli PDF) — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#resmi-tutanak",
    "summary": "10 Resmi SKS / NDK Olay ve DÖF Tutanağı (Kurumsal Antetli PDF) Herhangi bir olayın resmi kalite dosyasını üretmek veya inceleme tamamlandığında resmi tutanak almak için [Resmi Tutanağı Yazdır / PDF] butonuna tıklayın: SK",
    "headings": [
      "10 Resmi SKS / NDK Olay ve DÖF Tutanağı (Kurumsal Antetli PDF)",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "10 Resmi SKS / NDK Olay ve DÖF Tutanağı (Kurumsal Antetli PDF) Herhangi bir olayın resmi kalite dosyasını üretmek veya inceleme tamamlandığında resmi tutanak almak için [Resmi Tutanağı Yazdır / PDF] butonuna tıklayın: SKS 6.1 ve NDK Uyumlu Kurumsal Antet: Formun en üstünde kurum logosu, kurum adı, kalite birimi başlığı ve resmi doküman takip kartı (Doküman No, Revizyon Tarihi ve Sayfa No) yer alır. Renkli Klinik Rozetler ve NDK Uyarı Şeridi: Olayın sonucu (Ramak Kala, Hafif/Ciddi Zarar) ve yasal NDK 72 saatlik bildirim durumu resmi denetimlerde ilk bakışta fark edilebilecek şık rozetlerle vurgulanır. Tek Sayfaya Tam Oturan Düzen: Tüm olay künyesi, acil müdahale, DÖF planı ve yetkili imza kutuları (Bildiren, İnceleyen Uzman ve RKS/RSO) sayfa taşması ve imza parçalanması olmadan tek bir A4 sayfasına estetik ve eksiksiz olarak sığdırılmıştır. Doğru İşe Tek Format Standardı: Resmi evrak niteliği taşıdığı için doğrudan antetli, mühürlü ve değiştirilemez PDF formatında üretilir."
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#hibrit-portal",
    "title": "11 Hibrit Saha Mobil Formu ve Web Portalı — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#hibrit-portal",
    "summary": "11 Hibrit Saha Mobil Formu ve Web Portalı RADPYS Olay Bildirimi ve DÖF modülü, masaüstü kurumsal yönetim ile saha mobil web portalının tam entegrasyonuyla çalışır: SAHA MOBİL FORMU (IncidentReportForm) Klinikteki teknisy",
    "headings": [
      "11 Hibrit Saha Mobil Formu ve Web Portalı",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "11 Hibrit Saha Mobil Formu ve Web Portalı RADPYS Olay Bildirimi ve DÖF modülü, masaüstü kurumsal yönetim ile saha mobil web portalının tam entegrasyonuyla çalışır: SAHA MOBİL FORMU (IncidentReportForm) Klinikteki teknisyen, hemşire veya fizikçi cep telefonu veya tabletinden 3 adımlı formu açarak kazayı veya ramak kala durumunu anında bildirir. Kayıt sunucuya iletildiği anda yönetici ekranında bildirim düşer. WEB ANALİTİK DASHBOARD (OlayBildirimiDashboard) Kalite direktörleri ve hastane yönetimi web portalı üzerinden toplam olay, bekleyen DÖF'ler, çözülen vakalar, NDK bekleyenler sayaçlarını ve aylık olay trend çizgi grafiklerini canlı takip eder."
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#ekran-goruntuleri",
    "title": "Ekran Konumları ve Görsel Rehber — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#ekran-goruntuleri",
    "summary": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Radyasyon Güvenliği > Olay Bildirimi ve DÖF (CAPA) Yönetimi Ana Yönetim Kokpiti & NDK Süre Sayacı Simülasyon Notu: Kurum içi SKS 6.1 ve NDK radyolojik olay bildirimlerinin",
    "headings": [
      "Ekran Konumları ve Görsel Rehber",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Radyasyon Güvenliği > Olay Bildirimi ve DÖF (CAPA) Yönetimi Ana Yönetim Kokpiti & NDK Süre Sayacı Simülasyon Notu: Kurum içi SKS 6.1 ve NDK radyolojik olay bildirimlerinin, açık DÖF sayaçlarının ve yasal bildirim sürelerinin izlendiği ana ekran. ️ Ekran Konumu: Olay Bildirimi ve DÖF > [İncele / DÖF Yönet] > 1. Adım Adım 1: Olay Künyesi & Sınıflandırma Simülasyon Notu: Olayın şiddeti, kategorisi, kök neden analizi ve NDK bildirim gereksiniminin belirlendiği birinci adım. ️ Ekran Konumu: Olay Bildirimi ve DÖF > [İncele / DÖF Yönet] > 2. Adım Adım 2: DÖF (CAPA) Faaliyet Planlama Simülasyon Notu: Düzeltici, önleyici ve iyileştirici faaliyetlerin (CAPA) sorumlu personel ve termin tarihiyle tanımlanması. ️ Ekran Konumu: Olay Bildirimi ve DÖF > [İncele / DÖF Yönet] > 3. Adım Adım 3: CAPA Kapatma Kilidi & Resmi Tutanak Simülasyon Notu: Açık DÖF emniyet kilidi kontrolü, zorunlu kapanış notu ve SKS/NDK antetli resmi PDF tutanak üretimi."
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#akis-diyagrami",
    "title": "12 Karar ve İş Akış Şeması (Mermaid) — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#akis-diyagrami",
    "summary": "12 Karar ve İş Akış Şeması (Mermaid) Olay bildiriminin açılışından NDK yasal süre takibine, DÖF atamasından açık DÖF kapatma kilidine kadar olan operasyonel yaşam döngüsü: flowchart TD A[\"Olay Bildirimi Başlatma (Masaüst",
    "headings": [
      "12 Karar ve İş Akış Şeması (Mermaid)",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "12 Karar ve İş Akış Şeması (Mermaid) Olay bildiriminin açılışından NDK yasal süre takibine, DÖF atamasından açık DÖF kapatma kilidine kadar olan operasyonel yaşam döngüsü: flowchart TD A[\"Olay Bildirimi Başlatma (Masaüstü / Saha Web)\"] --> B[\"1. Adım: Temel Bilgiler (Tarih, Birim, Şiddet, Anonim/Seçimli)\"] B --> C[\"2. Adım: Sınıflandırma (Kategori, Detaylar, Kök Nedenler)\"] C --> D[\"3. Adım: Açıklamalar (Olay Tanımı, Acil Müdahale, DÖF Önerisi)\"] D --> E[\"Bildirim Kaydı (OB-YYYY-XXXXX) & Yöneticiye Bildirim\"] E --> F{\"Radyolojik Olay mı / NDK Bildirimi Gerekli mi?\"} F -- \"Evet\" --> G[\"NDK Yasal Süreç Takibi (1 Gün / 3 İş Günü Geri Sayım)\"] F -- \"Hayır\" --> H[\"Kurum İçi SKS Takibi\"] G --> I[\"İncelemeye Alma & Sorumlu Atama (Birim Sorumlusu / RGS)\"] H --> I I --> J[\"DÖF (CAPA) Faaliyetleri Planlama (Düzeltici/Önleyici/İyileştirici)\"] J --> K{\"İlişkili Cihaz Var mı?\"} K -- \"Evet\" --> L[\"Kurum İçi Cihaz Süreç / Arıza Kaydı ve İstatistik Takibi\"] K -- \"Hayır\" --> M[\"DÖF Aksiyonlarının Yürütülmesi\"] L --> M M --> N[\"DÖF Tamamlama / İptal\"] N --> O{\"Tüm DÖF'ler Tamamlandı mı?\"} O -- \"Hayır (Açık DÖF Var)\" --> P[\"Kapatma Engellenir (Kapatma Kilidi Uyarısı)\"] P --> M O -- \"Evet\" --> Q[\"Kapanış Notu Girişi & Olayı Kapatma\"] Q --> R[\"Resmi SKS / NDK Tutanağı Yazdırma & Arşivleme\"]"
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#mit-avcilari",
    "title": "Olay Bildirimi, DÖF & Mit Avcısı (Kritik Kurallar) — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#mit-avcilari",
    "summary": "Olay Bildirimi, DÖF & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Açık bir DÖF faaliyeti varken de olayın dosyası acilen 'Kapatıldı' statüsüne geçirilebilir.\" Doğru Yasal Kural: CAPA Lock emniyet kilidi gereğinc",
    "headings": [
      "Olay Bildirimi, DÖF & Mit Avcısı (Kritik Kurallar)",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "Olay Bildirimi, DÖF & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Açık bir DÖF faaliyeti varken de olayın dosyası acilen 'Kapatıldı' statüsüne geçirilebilir.\" Doğru Yasal Kural: CAPA Lock emniyet kilidi gereğince üzerinde tamamlanmamış açık DÖF aksiyonu bulunan hiçbir olay kapatılamaz. Faaliyetlerin resmi olarak tamamlanması veya gerekçeli iptali zorunludur. Yaygın Yanılgı (Mit 2) \"Personelin ismini gizleyerek yaptığı anonim ramak kala bildirimleri SKS denetimlerinde geçersizdir.\" Doğru Yasal Kural: Sağlık Bakanlığı SKS 6.1 ve güvenlik kültürü ilkeleri gereğince anonim bildirimler resmi ve yasal olarak geçerlidir; aynı ciddiyetle incelenip düzeltici işlem başlatılır. Yaygın Yanılgı (Mit 3) \"Olay formunda cihaz arızası kaydedildiğinde sistem yetkili teknik servise otomatik iş emri açar.\" Doğru Yasal Kural: Bu kayıt kurum içinde olay-arıza korelasyonunu takip etmek içindir; harici servise çağrı göndermez. Cihaz bakım ve servis yönetimi Modül 19 üzerinden yürütülür."
  },
  {
    "id": "15_olay_bildirimi_ve_dof_capa#sss",
    "title": "13 Sıkça Sorulan Sorular (SSS) — 15. Olay Bildirimi ve DÖF (CAPA)",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "15_olay_bildirimi_ve_dof_capa.html#sss",
    "summary": "13 Sıkça Sorulan Sorular (SSS) Olay Bildirimi ve DÖF modülüyle ilgili en sık karşılaşılan sorular ve yanıtları: Anonim yapılan bildirimler resmi SKS denetimlerinde geçerli sayılır mı? Evet. Sağlık Bakanlığı SKS 6.1 ve ku",
    "headings": [
      "13 Sıkça Sorulan Sorular (SSS)",
      "15. Olay Bildirimi ve DÖF (CAPA)"
    ],
    "content": "13 Sıkça Sorulan Sorular (SSS) Olay Bildirimi ve DÖF modülüyle ilgili en sık karşılaşılan sorular ve yanıtları: Anonim yapılan bildirimler resmi SKS denetimlerinde geçerli sayılır mı? Evet. Sağlık Bakanlığı SKS 6.1 ve kurum kalite politikaları uyarınca güvenli bildirim kültürünü teşvik etmek amacıyla personelin kimliğini gizleyerek yaptığı bildirimler resmi olarak geçerlidir ve aynı titizlikle incelenip DÖF açılır. Açık DÖF varken bir olayı acilen kapatmam gerekirse ne yapmalıyım? Sistem açık DÖF varken olayın kapatılmasını emniyet kilidiyle kesinlikle engeller. Eğer bir faaliyet artık uygulanamaz durumdaysa veya mükerrer açılmışsa, faaliyet durumu gerekçesi belirtilerek İptal veya Tamamlandı yapılmalı, ardından kapanış notu girilerek olay kapatılmalıdır. Olaydan oluşturulan cihaz arıza kaydı teknik servise otomatik iş emri gönderir mi? Hayır. Bu kayıt program içinde yalnızca süreci takip etmek, olay-arıza korelasyonunu izlemek ve birim hakkında istatistiki bilgi derlemek amaçlıdır; harici teknik servise veya bakım birimine resmi çağrı/iş emri göndermez. NDK bildirim süresi ne zaman başlar ve hafta sonları hesaba katılır mı? Yasal süre olay tarihinden itibaren başlar. Acil kazalarda 1 iş günü (24 saat), diğer radyolojik uygunsuzluklarda 3 iş günüdür. Hesaplamada Cumartesi ve Pazar günleri ile resmi tatiller süreye dahil edilmez ( _add_business_days )."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika",
    "title": "RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html",
    "summary": "Nükleer Düzenleme Kurumu (NDK) mevzuatı gereğince sağlık kuruluşlarında iyonlaştırıcı radyasyon kaynaklarıyla çalışan birimlerde bulunması zorunlu olan Radyasyon Güvenliği Sorumlusu (RGS) , RGS Yardımcısı ve Radyasyondan Korunma Sorumlusu (RSO) personellerinin",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (RGS/RSO Atama Özeti)",
      "02 Mimari ve İş Akış Şeması",
      "03 Arayüz Bileşenleri ve 5N1K Kural Çözümlemesi",
      "04 KPI Göstergeleri ve Karar Destek Kokpiti",
      "05 Hızlı Arama ve Çok Kriterli Filtreleme",
      "06 Yeni RGS / RSO Görevlendirmesi ve NDK Sertifikası Tanımlama",
      "Ekran Konumları ve Görsel Rehber",
      "07 NDK Sertifika Geçerlilik Süreleri ve 5 Kademeli Erken Uyarı Motoru",
      "08 Şifreli KVKK Evrak Kasası Entegrasyonu",
      "09 Görevlendirme Düzenleme, Silme ve Onay Kuyruğu",
      "10 Resmi Denetim Listesi CSV / Excel Dışa Aktarımı",
      "11 Hibrit Arayüz ve Web Portalı Görünümü",
      "Masaüstü Uygulaması (Yönetim & İK)",
      "Web Portalı (Özlük & Denetim Kokpiti)",
      "12 Hata ve Uyarı Mesajları Çözümleme Tablosu",
      "RGS/RSO Görevlendirme & Mit Avcısı (Kritik Kurallar)",
      "13 Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 4: Dozimetre & Sağlık 16. RGS / RSO Görevlendirme Modül 16: İK, Lisanslama ve Radyasyon Güvenliği RGS / RSO Görevlendirme ve Sertifika Takibi Nükleer Düzenleme Kurumu (NDK) mevzuatı gereğince sağlık kuruluşlarında iyonlaştırıcı radyasyon kaynaklarıyla çalışan birimlerde bulunması zorunlu olan Radyasyon Güvenliği Sorumlusu (RGS) , RGS Yardımcısı ve Radyasyondan Korunma Sorumlusu (RSO) personellerinin resmi atamalarını, görev sürelerini, NDK sertifika numaralarını, vize/geçerlilik tarihlerini ve KVKK uyumlu şifreli atama evraklarını dijital ortamda yöneten, denetleyen ve erken uyarı alarmları üreten modüldür. NDK Yönetmelik Uyumlu 5 Kademeli Durum Motoru 60 & 30 Gün Erken Uyarı AES-256 KVKK Evrak Kasası 20s Vizyonder Hızlı Karar Reçetesi (RGS/RSO Atama Özeti) 1. Personeli ve Görev Türünü Seçin RGS, RGS Yardımcısı veya RSO rolünü seçin. Süreli görevlendirmelerde bitiş tarihi, kurum kadrosu için ise Süresiz Görev seçeneğini işaretleyin. 2. NDK Sertifika No ve Vize Takibi NDK resmi sertifika numarasını ve 5 yıllık geçerlilik tarihini girin. 60 ve 30 gün kala sistem otomatik sarı/kırmızı erken uyarılar üretir. 3. Evrak Kasasına Şifreli Yükleme Resmi başhekimlik atama yazısını veya NDK sertifika PDF'ini yükleyin. Dosya AES-256 ile şifrelenir; görev silinse dahi arşiv kanıtı korunur. 02 Mimari ve İş Akış Şeması Görevlendirme tanımlama, süre denetimi, NDK sertifika motoru ve evrak kasası işleyiş adımları: flowchart TD A[\"RGS / RSO Modül Girişi\"] --> B[\"Ana Liste ve KPI Kokpiti\"] B --> C[\"[Yeni Görevlendirme] Butonu\"] B --> D[\"[Düzenle] / Çift Tıklama\"] B --> E[\"[Belgeyi Aç] Butonu\"] B --> F[\"[Dışa Aktar] Butonu\"] C --> G[\"Personel, Görev Tipi ve Tarih Seçimi\"] G --> H{\"Süresiz Görev mi?\"} H -- \"Evet\" --> I[\"Bitiş Tarihi Kapatılır (NULL)\"] H -- \"Hayır\" --> J[\"Görev Bitiş Tarihi Tanımlanır\"] I --> K[\"NDK Sertifika No ve Geçerlilik Tarihi\"] J --> K K --> L{\"Süresiz Sertifika mı?\"} L -- \"Evet\" --> M[\"Geçerlilik Tarihi Kapatılır (NULL)\"] L -- \"Hayır\" --> N[\"Sertifika Bitiş Tarihi Girilir\"] M --> O[\"Evrak Kasasına Belge Yükleme (PDF/Resim)\"] N --> O O --> P[\"[Kaydet] Butonu\"] P --> Q{\"Kullanıcı Onaya Tabi mi?\"} Q -- \"Evet\" --> R[\"ApprovalService Onay Kuyruğuna Sevk\"] Q -- \"Hayır\" --> S[\"rgs_gorevlendirmeler Tablosuna Kayıt\"] S --> T[\"Dinamik Sertifika Durum Motoru\"] T --> U[\"Kalan > 60 Gün: Geçerli (Yeşil)\"] T --> V[\"31 - 60 Gün: Yaklaşıyor (Sarı)\"] T --> W[\"≤ 30 Gün: Kritik Alarm (Turuncu)\"] T --> X[\"Günü Geçmiş: Süresi Doldu (Kırmızı)\"] T --> Y[\"Tarihsiz: Süresiz / Tanımsız (Mavi)\"] E --> Z[\"AES-256 Şifreli Kasadan Çözme\"] Z --> AA[\"İşletim Sisteminde Güvenli Görüntüleme\"] 03 Arayüz Bileşenleri ve 5N1K Kural Çözümlemesi Arayüzdeki her bir butonun, göstergenin ve kutunun mevzuat gerekçesi ve arka plan çalışma kuralı: NE? (Bileşen & Ayar) NEDEN? (Amaç) NEREDE? NASIL ÇALIŞIR? NE ZAMAN? KİM? DURUM [Aktif Görevli KPI] Kuruluşta fiilen görev yapan toplam RGS/RSO sayısını izlemek. Üst KPI Şeridi aktif = 1 olan kayıtları toplar Sürekli canlı Tüm Kullanıcılar Eksiksiz [Geçerli Sertifika KPI] Vize süresi 60 günden fazla veya süresiz olan sertifikaları izlemek. Üst KPI Şeridi gecerli + suresiz kayıtları toplar Sürekli canlı RGS / İK Eksiksiz [Süresi Yaklaşan KPI] Yenileme/vize zamanı gelen sertifikaları önceden fark etmek. Üst KPI Şeridi kalan gün ≤ 60 olanları sayar Vize periyodunda RGS / Yönetici Eksiksiz [Süresi Dolmuş KPI] Mevzuata aykırı olarak sertifikası dolmuş personeli tespit etmek. Üst KPI Şeridi geçerlilik tarihi bugünden eski olanlar Kritik alarmda RGS / Yönetici Eksiksiz [Arama Çubuğu] Personel, TC veya sertifika numarasına göre anlık süzme yapmak. Filtre Paneli _apply_client_filter dinamik süzgeci Liste incelenirken Tüm Kullanıcılar Eksiksiz [Görev Tipi Filtresi] RGS, RGS Yardımcısı veya RSO'ları ayrı ayrı listelemek. Filtre Paneli RGS, RGS_YARDIMCISI, RSO sorgusu Rol incelemesinde RGS / İK Eksiksiz [Yeni Görevlendirme] Yeni bir personel için atama ve sertifika kaydı açmak. Araç Çubuğu RgsGorevlendirmeDialogController modalini açar Atama yapıldığında RGS / Admin Eksiksiz [Düzenle] Süre, sertifika veya evrak bilgilerini güncellemek. Araç Çubuğu Personel kilitlenir, mevcut veriler yüklenir Değişiklik yapıldığında RGS / Admin Eksiksiz [Sil] Hatalı girilen görevlendirme kaydını kaldırmak. Araç Çubuğu Onay alır; evrak kasasındaki belge korunur İptallerde RGS / Admin Eksiksiz [Atama Yazısı Üret (PDF)] Kurum antetli resmi RGS/RSO görevlendirme ve atama yazısı taslağı oluşturmak. Araç Çubuğu Antetli resmi PDF taslağı üretir, evrak kasasına bağlar ve İmza Bekliyor rozeti atar Görevlendirme tanımlandığında RGS / Admin Eksiksiz [İmzalı Belge Yükle] Islak veya e-imzalı resmi atama belgesini sisteme yüklemek. Araç Çubuğu İmzalı nüshayı v2 olarak kaydeder; eski taslağı silmeyip sessizce arşive aktarır İmzalar tamamlandığında RGS / Admin Eksiksiz [Belgeyi Aç] Atama yazısını veya NDK sertifikasını ekranda incelemek. Araç Çubuğu Şifreli kasadan hafızada çözerek işletim sistemi görüntüleyicisinde açar Evrak kontrolünde Tüm Yetkililer Eksiksiz [Belge Geçmişi] Evrakın taslaktan imzalıya kadar tüm kronolojik sürümlerini ve SHA-256 dijital mührünü görmek. Araç Çubuğu Belge tarihçesi penceresini açar; arşivdeki eski taslağı veya imzalı evrakı tek tıkla açtırır Denetim ve teyit anında RGS / Denetçi / Admin Eksiksiz [Belge Durumu Rozeti] Evrakın yasal imza ve arşiv safhasını anlık takip etmek. Tablo Kolonu İmzalı (Yeşil), İmza Bekliyor (Sarı), Ek Belge (Mavi), Belge Yok (Gri) rozetleri çizer Tablo listelendiğinde Tüm Kullanıcılar Eksiksiz [Dışa Aktar] Görevlendirme ve sertifika listesini CSV tablosuna dökmek. Araç Çubuğu UTF-8 BOM CSV dosyası oluşturur Denetimlerde RGS / İK / Yönetici Eksiksiz 04 KPI Göstergeleri ve Karar Destek Kokpiti Sayfa açıldığında kurum genelindeki resmi atama ve sertifika durumunu özetleyen anlık sayaçlar: Aktif Görevli Toplam Aktif Kurumda fiilen yürürlükte olan toplam RGS, RGS Yardımcısı ve RSO görevlendirmelerinin adedi. Geçerli Sertifika Güvenli Vize Geçerlilik süresi"
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi (RGS/RSO Atama Özeti) — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi (RGS/RSO Atama Özeti) 1. Personeli ve Görev Türünü Seçin RGS, RGS Yardımcısı veya RSO rolünü seçin. Süreli görevlendirmelerde bitiş tarihi, kurum kadrosu için ise Süresiz Görev seçeneği",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (RGS/RSO Atama Özeti)",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi (RGS/RSO Atama Özeti) 1. Personeli ve Görev Türünü Seçin RGS, RGS Yardımcısı veya RSO rolünü seçin. Süreli görevlendirmelerde bitiş tarihi, kurum kadrosu için ise Süresiz Görev seçeneğini işaretleyin. 2. NDK Sertifika No ve Vize Takibi NDK resmi sertifika numarasını ve 5 yıllık geçerlilik tarihini girin. 60 ve 30 gün kala sistem otomatik sarı/kırmızı erken uyarılar üretir. 3. Evrak Kasasına Şifreli Yükleme Resmi başhekimlik atama yazısını veya NDK sertifika PDF'ini yükleyin. Dosya AES-256 ile şifrelenir; görev silinse dahi arşiv kanıtı korunur."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#mimari",
    "title": "02 Mimari ve İş Akış Şeması — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#mimari",
    "summary": "02 Mimari ve İş Akış Şeması Görevlendirme tanımlama, süre denetimi, NDK sertifika motoru ve evrak kasası işleyiş adımları: flowchart TD A[\"RGS / RSO Modül Girişi\"] --> B[\"Ana Liste ve KPI Kokpiti\"] B --> C[\"[Yeni Görevle",
    "headings": [
      "02 Mimari ve İş Akış Şeması",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "02 Mimari ve İş Akış Şeması Görevlendirme tanımlama, süre denetimi, NDK sertifika motoru ve evrak kasası işleyiş adımları: flowchart TD A[\"RGS / RSO Modül Girişi\"] --> B[\"Ana Liste ve KPI Kokpiti\"] B --> C[\"[Yeni Görevlendirme] Butonu\"] B --> D[\"[Düzenle] / Çift Tıklama\"] B --> E[\"[Belgeyi Aç] Butonu\"] B --> F[\"[Dışa Aktar] Butonu\"] C --> G[\"Personel, Görev Tipi ve Tarih Seçimi\"] G --> H{\"Süresiz Görev mi?\"} H -- \"Evet\" --> I[\"Bitiş Tarihi Kapatılır (NULL)\"] H -- \"Hayır\" --> J[\"Görev Bitiş Tarihi Tanımlanır\"] I --> K[\"NDK Sertifika No ve Geçerlilik Tarihi\"] J --> K K --> L{\"Süresiz Sertifika mı?\"} L -- \"Evet\" --> M[\"Geçerlilik Tarihi Kapatılır (NULL)\"] L -- \"Hayır\" --> N[\"Sertifika Bitiş Tarihi Girilir\"] M --> O[\"Evrak Kasasına Belge Yükleme (PDF/Resim)\"] N --> O O --> P[\"[Kaydet] Butonu\"] P --> Q{\"Kullanıcı Onaya Tabi mi?\"} Q -- \"Evet\" --> R[\"ApprovalService Onay Kuyruğuna Sevk\"] Q -- \"Hayır\" --> S[\"rgs_gorevlendirmeler Tablosuna Kayıt\"] S --> T[\"Dinamik Sertifika Durum Motoru\"] T --> U[\"Kalan > 60 Gün: Geçerli (Yeşil)\"] T --> V[\"31 - 60 Gün: Yaklaşıyor (Sarı)\"] T --> W[\"≤ 30 Gün: Kritik Alarm (Turuncu)\"] T --> X[\"Günü Geçmiş: Süresi Doldu (Kırmızı)\"] T --> Y[\"Tarihsiz: Süresiz / Tanımsız (Mavi)\"] E --> Z[\"AES-256 Şifreli Kasadan Çözme\"] Z --> AA[\"İşletim Sisteminde Güvenli Görüntüleme\"]"
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#bilesenler",
    "title": "03 Arayüz Bileşenleri ve 5N1K Kural Çözümlemesi — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#bilesenler",
    "summary": "03 Arayüz Bileşenleri ve 5N1K Kural Çözümlemesi Arayüzdeki her bir butonun, göstergenin ve kutunun mevzuat gerekçesi ve arka plan çalışma kuralı: NE? (Bileşen & Ayar) NEDEN? (Amaç) NEREDE? NASIL ÇALIŞIR? NE ZAMAN? KİM? D",
    "headings": [
      "03 Arayüz Bileşenleri ve 5N1K Kural Çözümlemesi",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "03 Arayüz Bileşenleri ve 5N1K Kural Çözümlemesi Arayüzdeki her bir butonun, göstergenin ve kutunun mevzuat gerekçesi ve arka plan çalışma kuralı: NE? (Bileşen & Ayar) NEDEN? (Amaç) NEREDE? NASIL ÇALIŞIR? NE ZAMAN? KİM? DURUM [Aktif Görevli KPI] Kuruluşta fiilen görev yapan toplam RGS/RSO sayısını izlemek. Üst KPI Şeridi aktif = 1 olan kayıtları toplar Sürekli canlı Tüm Kullanıcılar Eksiksiz [Geçerli Sertifika KPI] Vize süresi 60 günden fazla veya süresiz olan sertifikaları izlemek. Üst KPI Şeridi gecerli + suresiz kayıtları toplar Sürekli canlı RGS / İK Eksiksiz [Süresi Yaklaşan KPI] Yenileme/vize zamanı gelen sertifikaları önceden fark etmek. Üst KPI Şeridi kalan gün ≤ 60 olanları sayar Vize periyodunda RGS / Yönetici Eksiksiz [Süresi Dolmuş KPI] Mevzuata aykırı olarak sertifikası dolmuş personeli tespit etmek. Üst KPI Şeridi geçerlilik tarihi bugünden eski olanlar Kritik alarmda RGS / Yönetici Eksiksiz [Arama Çubuğu] Personel, TC veya sertifika numarasına göre anlık süzme yapmak. Filtre Paneli _apply_client_filter dinamik süzgeci Liste incelenirken Tüm Kullanıcılar Eksiksiz [Görev Tipi Filtresi] RGS, RGS Yardımcısı veya RSO'ları ayrı ayrı listelemek. Filtre Paneli RGS, RGS_YARDIMCISI, RSO sorgusu Rol incelemesinde RGS / İK Eksiksiz [Yeni Görevlendirme] Yeni bir personel için atama ve sertifika kaydı açmak. Araç Çubuğu RgsGorevlendirmeDialogController modalini açar Atama yapıldığında RGS / Admin Eksiksiz [Düzenle] Süre, sertifika veya evrak bilgilerini güncellemek. Araç Çubuğu Personel kilitlenir, mevcut veriler yüklenir Değişiklik yapıldığında RGS / Admin Eksiksiz [Sil] Hatalı girilen görevlendirme kaydını kaldırmak. Araç Çubuğu Onay alır; evrak kasasındaki belge korunur İptallerde RGS / Admin Eksiksiz [Atama Yazısı Üret (PDF)] Kurum antetli resmi RGS/RSO görevlendirme ve atama yazısı taslağı oluşturmak. Araç Çubuğu Antetli resmi PDF taslağı üretir, evrak kasasına bağlar ve İmza Bekliyor rozeti atar Görevlendirme tanımlandığında RGS / Admin Eksiksiz [İmzalı Belge Yükle] Islak veya e-imzalı resmi atama belgesini sisteme yüklemek. Araç Çubuğu İmzalı nüshayı v2 olarak kaydeder; eski taslağı silmeyip sessizce arşive aktarır İmzalar tamamlandığında RGS / Admin Eksiksiz [Belgeyi Aç] Atama yazısını veya NDK sertifikasını ekranda incelemek. Araç Çubuğu Şifreli kasadan hafızada çözerek işletim sistemi görüntüleyicisinde açar Evrak kontrolünde Tüm Yetkililer Eksiksiz [Belge Geçmişi] Evrakın taslaktan imzalıya kadar tüm kronolojik sürümlerini ve SHA-256 dijital müh"
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#kpi-kokpit",
    "title": "04 KPI Göstergeleri ve Karar Destek Kokpiti — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#kpi-kokpit",
    "summary": "04 KPI Göstergeleri ve Karar Destek Kokpiti Sayfa açıldığında kurum genelindeki resmi atama ve sertifika durumunu özetleyen anlık sayaçlar: Aktif Görevli Toplam Aktif Kurumda fiilen yürürlükte olan toplam RGS, RGS Yardım",
    "headings": [
      "04 KPI Göstergeleri ve Karar Destek Kokpiti",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "04 KPI Göstergeleri ve Karar Destek Kokpiti Sayfa açıldığında kurum genelindeki resmi atama ve sertifika durumunu özetleyen anlık sayaçlar: Aktif Görevli Toplam Aktif Kurumda fiilen yürürlükte olan toplam RGS, RGS Yardımcısı ve RSO görevlendirmelerinin adedi. Geçerli Sertifika Güvenli Vize Geçerlilik süresine 60 günden fazla süre bulunan veya mevzuata göre süresiz tanımlanmış sertifikalar. Süresi Yaklaşan ≤ 60 Gün Kaldı Vize bitişine 60 gün ve daha az kalmış görevliler. NDK vize yenileme başvuru sürecinin başlatılması gerekir. Süresi Dolmuş Vizesi Bitmiş Sertifika geçerliliği sona ermiş personel. Yasal sorumluluğun aksamaması için derhal müdahale edilmelidir."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#filtreleme",
    "title": "05 Hızlı Arama ve Çok Kriterli Filtreleme — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#filtreleme",
    "summary": "05 Hızlı Arama ve Çok Kriterli Filtreleme Kayıtların anlık ve sunucu taraflı filtrelenmesi: Anlık Arama (`searchInput`): Personelin adı, soyadı, TC Kimlik numarası, görevli olduğu departman veya NDK sertifika no yazıldığ",
    "headings": [
      "05 Hızlı Arama ve Çok Kriterli Filtreleme",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "05 Hızlı Arama ve Çok Kriterli Filtreleme Kayıtların anlık ve sunucu taraflı filtrelenmesi: Anlık Arama (`searchInput`): Personelin adı, soyadı, TC Kimlik numarası, görevli olduğu departman veya NDK sertifika no yazıldığında tablo satırları anında süzülür. Arama kutusunun sağındaki çarpı butonuyla metin tek tıkla temizlenebilir. Görev Tipi Açılır Kutusu (`comboGorevTipi`): Tüm Görev Tipleri , RGS (Radyasyon Güvenliği Sorumlusu) , RGS Yardımcısı veya RSO (Radyasyon Korunma Sorumlusu) seçilerek birimdeki belirli sorumlular listelenir. Sertifika Durumu Açılır Kutusu (`comboDurum`): Geçerli , Kritik (≤30 Gün) , Yaklaşıyor (≤60 Gün) , Süresi Doldu ve Süresiz / Tanımsız seçenekleri üzerinden vize yenileme kontrolü yapılır. Aktiflik Açılır Kutusu (`comboAktif`): Varsayılan olarak Sadece Aktifler seçilidir. Arşivlenmiş veya görevi tamamlanmış eski sorumluları görmek için Pasifler veya Tümü durumuna geçilebilir."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#yeni-gorevlendirme",
    "title": "06 Yeni RGS / RSO Görevlendirmesi ve NDK Sertifikası Tanımlama — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#yeni-gorevlendirme",
    "summary": "06 Yeni RGS / RSO Görevlendirmesi ve NDK Sertifikası Tanımlama Adım adım yeni atama ve sertifika veri giriş prosedürü: Üst araç çubuğundaki [Yeni Görevlendirme] butonuna tıklayın. Açılan modal pencerede: Personel Seçimi ",
    "headings": [
      "06 Yeni RGS / RSO Görevlendirmesi ve NDK Sertifikası Tanımlama",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "06 Yeni RGS / RSO Görevlendirmesi ve NDK Sertifikası Tanımlama Adım adım yeni atama ve sertifika veri giriş prosedürü: Üst araç çubuğundaki [Yeni Görevlendirme] butonuna tıklayın. Açılan modal pencerede: Personel Seçimi (`comboPersonel`): Kurumda kayıtlı aktif personeller arasından görevlendirilecek kişiyi seçin. Açılır liste personelin ad-soyad, TC Kimlik ve unvan bilgilerini gösterir. Görev Tipi (`comboGorevTipi`): Personelin resmi atama pozisyonunu seçin (*RGS, RGS Yardımcısı* veya *RSO*). Görev Başlangıç Tarihi (`dateBaslangic`): Atamanın yürürlüğe girdiği resmi tarihi takvimden belirleyin. Görev Bitiş Tarihi ve Süresiz Görev Kutusu: Belirli süreli bir atamaysa bitiş tarihini girin. Daimi bir görevlendirmeyse [x] Süresiz Görev kutusunu işaretleyin (bitiş alanı kilitlenir ve DB'ye NULL işlenir). Sertifika / Belge No (`txtSertifikaNo`): NDK tarafından tanzim edilen sertifika numarasını girin (Örn: NDK-RGS-2026-0012 ). Sertifika Geçerlilik Tarihi ve Süresiz Sertifika Kutusu: NDK vize bitiş tarihini girin. Muafiyetli özel durumlarda [x] Süresiz Sertifika işaretlenebilir. Evrak Kasasına Belge Yükleme (`btnUploadDoc`): [Dosya Seç (PDF / Resim)] butonuna tıklayarak taranmış atama yazısı veya NDK sertifika belgesini ekleyin. Dosya boyutu ve adı yeşil renkle onaylanır. Aktiflik Onayı ve Notlar: Görev fiilen yürütülüyorsa [x] Görevlendirme Aktif Olarak Yürütülüyor kutusunu işaretli bırakın. Resmi yazı sayı ve tarihini Notlar kutusuna yazın. [Kaydet] butonuna basarak işlemi tamamlayın."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#ekran-goruntuleri",
    "title": "Ekran Konumları ve Görsel Rehber — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#ekran-goruntuleri",
    "summary": "Ekran Konumları ve Görsel Rehber RGS / RSO görevlendirme listesi, vize takip rozetleri ve yeni atama tanımlama penceresi: ️ Ekran Konumu: Radyasyon Güvenliği > RGS / RSO Görevlendirme ve Sertifika Ana Liste & 5 Kademeli ",
    "headings": [
      "Ekran Konumları ve Görsel Rehber",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "Ekran Konumları ve Görsel Rehber RGS / RSO görevlendirme listesi, vize takip rozetleri ve yeni atama tanımlama penceresi: ️ Ekran Konumu: Radyasyon Güvenliği > RGS / RSO Görevlendirme ve Sertifika Ana Liste & 5 Kademeli Vize Uyarı Tablosu Simülasyon Notu: Kurumdaki aktif RGS, RGS Yardımcısı ve RSO atamalarının, NDK sertifika vize sürelerinin ve imzalı belge durumlarının izlendiği ana tablo. ️ Ekran Konumu: RGS / RSO Görevlendirme > [Yeni Görevlendirme] Diyaloğu Yeni Görevlendirme & Sertifika Formu Simülasyon Notu: Personel seçimi, görev tipi, NDK sertifika numarası, vize geçerlilik tarihi ve şifreli evrak kasasına belge yükleme formu."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#erken-uyari",
    "title": "07 NDK Sertifika Geçerlilik Süreleri ve 5 Kademeli Erken Uyarı Motoru — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#erken-uyari",
    "summary": "07 NDK Sertifika Geçerlilik Süreleri ve 5 Kademeli Erken Uyarı Motoru Sistemin NDK vize sürelerini denetleyen ve tablolarda otomatik renklendirme uygulayan dinamik motoru: Geçerli Kalan > 60 Gün Sertifika vizesi güvenli ",
    "headings": [
      "07 NDK Sertifika Geçerlilik Süreleri ve 5 Kademeli Erken Uyarı Motoru",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "07 NDK Sertifika Geçerlilik Süreleri ve 5 Kademeli Erken Uyarı Motoru Sistemin NDK vize sürelerini denetleyen ve tablolarda otomatik renklendirme uygulayan dinamik motoru: Geçerli Kalan > 60 Gün Sertifika vizesi güvenli aralıktadır, herhangi bir işlem gerekmez. Yaklaşıyor 31 - 60 Gün Kaldı Sertifika vize yenileme dönemi yaklaşmaktadır; eğitim ve evrak hazırlıkları başlatılmalıdır. Kritik ≤ 30 Gün Kaldı Vize süresi bitmek üzeredir. NDK vize başvurusu ivedilikle sonuçlandırılmalıdır. Süresi Doldu Tarih Geçmiş Sertifika geçerliliği sona ermiştir. Yasal olarak imza yetkisi askıya alınmalıdır. Süresiz Muaf / Daimi Geçerlilik süresi sınırlaması bulunmayan özel yetkilendirme belgeleri."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#evrak-kasasi",
    "title": "08 Şifreli KVKK Evrak Kasası Entegrasyonu — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#evrak-kasasi",
    "summary": "08 Şifreli KVKK Evrak Kasası Entegrasyonu Atama yazıları ve NDK sertifikalarının AES-256 şifreli güvenli kasada saklanması: Yüklenen atama belgeleri ve NDK sertifikaları sunucuda veya yerel diskte açık dosya olarak tutul",
    "headings": [
      "08 Şifreli KVKK Evrak Kasası Entegrasyonu",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "08 Şifreli KVKK Evrak Kasası Entegrasyonu Atama yazıları ve NDK sertifikalarının AES-256 şifreli güvenli kasada saklanması: Yüklenen atama belgeleri ve NDK sertifikaları sunucuda veya yerel diskte açık dosya olarak tutulmaz. RADPYS KVKK Evrak Kasası ( DocumentService ); dosyaları AES-256 Fernet algoritmasıyla şifreleyerek personel_belgeler tablosuna kaydeder. Belgeyi Görüntüleme: Tablodan ilgili görevlendirmeyi seçip [Belgeyi Aç] butonuna tıklayın. Hafızada Güvenli Çözme: Sistem veritabanındaki şifreli blobu hafızada çözer, geçici güvenli bir dosyaya aktarır ve varsayılan işletim sistemi görüntüleyicisinde açar. Yasal Arşiv Koruma Kilidi: Bir görevlendirme kaydı silinse dahi, personelin kasadaki şifreli sertifika dosyası yasal denetim izi amacıyla veritabanında saklanmaya devam eder."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#duzenleme-onay",
    "title": "09 Görevlendirme Düzenleme, Silme ve Onay Kuyruğu — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#duzenleme-onay",
    "summary": "09 Görevlendirme Düzenleme, Silme ve Onay Kuyruğu Veri bütünlüğü kilitleri ve onay sistemi mekanizması: Personel Değiştirme Kısıtı (Veri Bütünlüğü Kilidi) Düzenleme modunda Personel açılır kutusu güvenlik gerekçesiyle ki",
    "headings": [
      "09 Görevlendirme Düzenleme, Silme ve Onay Kuyruğu",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "09 Görevlendirme Düzenleme, Silme ve Onay Kuyruğu Veri bütünlüğü kilitleri ve onay sistemi mekanizması: Personel Değiştirme Kısıtı (Veri Bütünlüğü Kilidi) Düzenleme modunda Personel açılır kutusu güvenlik gerekçesiyle kilitlenir (salt okunur). Atama başka bir personele devredilecekse eski kayıt pasife alınmalı ve yeni personel için sıfırdan görevlendirme açılmalıdır. ️ Onay Kuyruğu Entegrasyonu (ApprovalService) İşlemi yürüten personelin kullanıcı rolünde onay şartı varsa ( onay_gerektirir = 1 ), yapılan ekleme, düzenleme veya silme işlemi doğrudan veritabanına işlenmez; yöneticinin onay havuzuna gönderilir. Yetkili amir onayladığında yürürlüğe girer."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#disa-aktar",
    "title": "10 Resmi Denetim Listesi CSV / Excel Dışa Aktarımı — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#disa-aktar",
    "summary": "10 Resmi Denetim Listesi CSV / Excel Dışa Aktarımı NDK denetimleri ve kurum içi raporlama için tablo verisini dışa aktarma: Üst araç çubuğundaki [Dışa Aktar] butonuna tıklandığında; tabloda filtrelenmiş tüm kayıtlar (Per",
    "headings": [
      "10 Resmi Denetim Listesi CSV / Excel Dışa Aktarımı",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "10 Resmi Denetim Listesi CSV / Excel Dışa Aktarımı NDK denetimleri ve kurum içi raporlama için tablo verisini dışa aktarma: Üst araç çubuğundaki [Dışa Aktar] butonuna tıklandığında; tabloda filtrelenmiş tüm kayıtlar (Personel Adı, TC Kimlik No, Departman, Görev Tipi, Başlangıç, Bitiş, Sertifika No, Geçerlilik Tarihi, Sertifika Durumu ve Belge Durumu) UTF-8 BOM destekli ve noktalı virgül (;) ayracıyla CSV dosyası olarak kaydedilir. * Dosya Microsoft Excel, LibreOffice Calc veya benzeri elektronik tablo programlarında Türkçe karakter bozulması olmadan doğrudan açılabilir."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#hibrit-web",
    "title": "11 Hibrit Arayüz ve Web Portalı Görünümü — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#hibrit-web",
    "summary": "11 Hibrit Arayüz ve Web Portalı Görünümü Masaüstü tam yönetim kokpiti ile Web Portalı arasındaki rol ve veri paylaşımı: Masaüstü Uygulaması (Yönetim & İK) Atama tanımlarının yapıldığı, NDK sertifika numaralarının girildi",
    "headings": [
      "11 Hibrit Arayüz ve Web Portalı Görünümü",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "11 Hibrit Arayüz ve Web Portalı Görünümü Masaüstü tam yönetim kokpiti ile Web Portalı arasındaki rol ve veri paylaşımı: Masaüstü Uygulaması (Yönetim & İK) Atama tanımlarının yapıldığı, NDK sertifika numaralarının girildiği, evrak kasasına PDF/resim atama olurlarının yüklendiği, geçerlilik sürelerinin takip edildiği, erken uyarı alarmlarının izlendiği ve denetim listelerinin dışa aktarıldığı tam yetkili operasyonel merkezdir. Web Portalı (Özlük & Denetim Kokpiti) Personel Profili ( profile.routes.ts ): Personel web portala girdiğinde atanmış olduğu RGS / RSO görevlerini ve sertifika geçerlilik durumunu görebilir. NDK Denetim Kokpiti ( DenetimHazirlikDashboard.tsx ): Radyoloji ve nükleer tıp denetim hazırlık panellerinde kurumun aktif RGS görevlendirme oluru ve eğitim sertifikası uygunluk sorgusu yapılır."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#sorun-giderme",
    "title": "12 Hata ve Uyarı Mesajları Çözümleme Tablosu — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#sorun-giderme",
    "summary": "12 Hata ve Uyarı Mesajları Çözümleme Tablosu Formda veya işlem esnasında karşılaşılabilecek uyarılar ve pratik çözüm adımları: Hata / Uyarı Mesajı Tetikleyen Durum Çözüm Adımı \"Lütfen bir personel seçiniz.\" Formda person",
    "headings": [
      "12 Hata ve Uyarı Mesajları Çözümleme Tablosu",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "12 Hata ve Uyarı Mesajları Çözümleme Tablosu Formda veya işlem esnasında karşılaşılabilecek uyarılar ve pratik çözüm adımları: Hata / Uyarı Mesajı Tetikleyen Durum Çözüm Adımı \"Lütfen bir personel seçiniz.\" Formda personel açılır kutusu boş bırakıldığında. Açılır kutudan görevlendirilecek personeli seçin. \"Görev bitiş tarihi, başlangıç tarihinden önce olamaz.\" Bitiş tarihi başlangıçtan eski seçildiğinde. Bitiş tarihini başlangıçtan sonraya ayarlayın veya [x] Süresiz Görev seçin. \"Lütfen düzenlemek için bir kayıt seçiniz.\" Tablodan satır seçilmeden [Düzenle] tıklandığında. Düzenlemek istediğiniz satırı farenin sol tuşuyla seçin. \"Bu kayda ait eklenmiş bir evrak / sertifika bulunmuyor.\" Belgesi olmayan kayıtta [Belgeyi Aç] tıklandığında. Kaydı [Düzenle] ile açıp [Dosya Seç] ile resmi belgeyi yükleyin. \"Belge dosyası bulunamadı veya açılamadı.\" Kasada kayıtlı dosya bulunamadığında veya hasarlı olduğunda. Belgeyi yeniden yükleyin veya sistem yöneticisine danışın. \"Dışa aktarılacak kayıt bulunmuyor.\" Tablo boşken [Dışa Aktar] tıklandığında. Filtreleri gevşeterek ekranda kayıt görünmesini sağlayın."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#mit-avcilari",
    "title": "RGS/RSO Görevlendirme & Mit Avcısı (Kritik Kurallar) — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#mit-avcilari",
    "summary": "RGS/RSO Görevlendirme & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Bir görevlendirme kaydı tablodan silindiğinde personelin yüklenmiş resmi sertifika belgesi de sistemden silinir.\" Doğru Yasal Kural: Sağlık bil",
    "headings": [
      "RGS/RSO Görevlendirme & Mit Avcısı (Kritik Kurallar)",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "RGS/RSO Görevlendirme & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Bir görevlendirme kaydı tablodan silindiğinde personelin yüklenmiş resmi sertifika belgesi de sistemden silinir.\" Doğru Yasal Kural: Sağlık bilgi güvenliği ve NDK denetim izi gereğince görevlendirme silinse dahi personelin şifreli sertifika evrakı ( personel_belgeler ) arşivde kanıt olarak saklanmaya devam eder. Yaygın Yanılgı (Mit 2) \"RGS sertifikasının 5 yıllık vize süresi bittiğinde sistem sessiz kalır; denetim olana kadar fark edilmeyebilir.\" Doğru Yasal Kural: Sistem 5 kademeli uyarı motoruna sahiptir; vize bitimine 60 gün ve 30 gün kala sarı, süre dolduğunda kırmızı alarm üretir ve yönetici aksiyon merkezinde bildirim açar. Yaygın Yanılgı (Mit 3) \"Düzenleme ekranında personel kutusu değiştirilerek aynı kayıt üzerinden başka bir hekime görev devri yapılabilir.\" Doğru Yasal Kural: Yasal denetim izi güvenliği nedeniyle düzenleme modunda personel seçimi bilerek kilitlenmiştir. Görev devrinde mevcut kayıt pasife alınmalı ve yeni personel için sıfırdan kayıt açılmalıdır."
  },
  {
    "id": "16_rgs_rso_gorevlendirme_ve_sertifika#sss",
    "title": "13 Sıkça Sorulan Sorular (SSS) — RGS / RSO Görevlendirme ve Sertifika Takibi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "16_rgs_rso_gorevlendirme_ve_sertifika.html#sss",
    "summary": "13 Sıkça Sorulan Sorular (SSS) RGS / RSO görevlendirmeleri ve sertifika takibiyle ilgili merak edilenler: Bir personel aynı anda birden fazla aktif görevlendirmeye sahip olabilir mi? Evet. Kurum yapısına göre bir persone",
    "headings": [
      "13 Sıkça Sorulan Sorular (SSS)",
      "RGS / RSO Görevlendirme ve Sertifika Takibi"
    ],
    "content": "13 Sıkça Sorulan Sorular (SSS) RGS / RSO görevlendirmeleri ve sertifika takibiyle ilgili merak edilenler: Bir personel aynı anda birden fazla aktif görevlendirmeye sahip olabilir mi? Evet. Kurum yapısına göre bir personel farklı birimlerde veya sorumluluklarda (örneğin Nükleer Tıp biriminde RGS, Radyoloji biriminde RGS Yardımcısı) birden fazla aktif görevlendirme kaydına sahip olabilir. NDK sertifikaları için süresiz sertifika seçeneği ne zaman kullanılır? NDK sertifikaları kural olarak 5 yıllık periyodik vizeye tabidir. Ancak kurum içi görevlendirme yazıları (başhekimlik olurları) veya vize muafiyeti bulunan özel yasal yetkilendirmeler için [x] Süresiz Sertifika seçeneği kullanılabilir. Bir görevlendirmeyi sildiğimde personelin yüklenmiş sertifika belgesi de silinir mi? Hayır. Görevlendirme kaydı silinse dahi personelin KVKK evrak kasasındaki şifreli sertifika dosyası ( personel_belgeler ) geçmiş denetim kanıtı ve yasal arşiv koruma amacıyla silinmeyip saklanmaya devam eder. Düzenleme ekranında personel seçimi neden değiştirilemiyor? Veri bütünlüğü ve denetim izi güvenliği gerekçesiyle düzenleme modunda personel seçimi bilerek kilitlenir. Görevin başka bir personele devri söz konusuysa mevcut kayıt pasife alınmalı ve yeni personel için sıfırdan kayıt açılmalıdır."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav",
    "title": "Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html",
    "summary": "Sağlıkta Kalite Standartları (SKS 6.1) ve Nükleer Düzenleme Kurumu (NDK) mevzuatının zorunlu kıldığı yıllık temel radyasyon güvenliği, radyoizotop kullanımı, hasta ve çalışan korunması ile acil durum eylem eğitimlerinin kurumsal düzeyde planlandığı, personele ",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Eğitim & Sınav Özeti)",
      "02 Mimari ve İş Akış Şeması",
      "03 Arayüz Bileşenleri ve 5N1K Kural Tablosu",
      "04 Dinamik KPI Göstergeleri ve Hesaplama Formülleri",
      "05 Kurumsal Uyum ve Denetim Matrisi Analizi",
      "06 Toplu ve Birim Bazlı Eğitim Atama Motoru",
      "07 Eğitim Kataloğu ve Materyal Yönetimi",
      "Temel Parametreler",
      "Materyal ve Video Entegrasyonu",
      "08 Merkezi Soru Havuzu, Şık Görselleri ve Excel İçe Aktarım",
      "Görselli Soru Desteği",
      "09 Online Sınav Çözme, Dinamik Karıştırma ve Otomatik Tescil",
      "10 15 Gün Önceden Otomatik Sistem Bildirim Motoru",
      "11 Hibrit Arayüz ve Web Portalı Görünümü",
      "Masaüstü Uygulaması (Yetkili & Denetim Merkezi)",
      "Web Portalı (Personel ve Video Eğitim Portali)",
      "Masaüstü ve Web Portalı Ekran Görüntüleri",
      "12 Hata Mesajları ve Sorun Giderme Rehberi",
      "Hizmet İçi Eğitim, Sınav & Mit Avcısı (Kritik Kurallar)",
      "13 Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 4: Dozimetre & Sağlık 17. Hizmet İçi Eğitim & LMS Modül 17: Sağlıkta Kalite Standartları (SKS) & NDK Zorunlu Eğitimleri Hizmet İçi Eğitim ve Online Sınav Yönetimi Sağlıkta Kalite Standartları (SKS 6.1) ve Nükleer Düzenleme Kurumu (NDK) mevzuatının zorunlu kıldığı yıllık temel radyasyon güvenliği, radyoizotop kullanımı, hasta ve çalışan korunması ile acil durum eylem eğitimlerinin kurumsal düzeyde planlandığı, personele atandığı, video/doküman içeriklerinin sunulduğu, merkezi soru bankasından hazırlanan online sınavlarla başarı barajının değerlendirildiği ve resmi denetimlere yönelik Uyum Matrisi'nin dinamik olarak üretildiği entegre eğitim ve belgelendirme sistemidir. SKS 6.1 & NDK Mevzuat Uyumlu %70 Baraj Puanlı Online Sınav Dinamik Shuffle (Kopya Önleme) 15 Gün Erken Uyarı Bildirimi Cross-Join Denetim Uyum Matrisi 20s Vizyonder Hızlı Karar Reçetesi (Eğitim & Sınav Özeti) 1. Eğitim Kataloğu ve Materyalleri SKS ve NDK zorunlu yıllık radyasyon eğitimlerini, PDF dokümanlarını ve video bağlantılarını tanımlayın; geçerlilik süresini ve baraj puanını belirleyin. 2. Toplu Atama ve Soru Havuzu Personele eğitimleri topluca atayın. Excel üzerinden soru bankasını içe aktarın; kopya önleyici dinamik soru-şık karıştırma motorunu çalıştırın. 3. Online Sınav & Uyum Matrisi Personel portal üzerinden sınavı çözer. %70 barajı aşılınca dijital sertifika tescil edilir; SKS Denetim Uyum Matrisi yeşil rozete döner. 02 Mimari ve İş Akış Şeması Eğitim kataloğu hazırlama, soru havuzu oluşturma, toplu atama, online sınav çözme ve Uyum Matrisi entegrasyonu: flowchart TD A[\"Hizmet İçi Eğitim Modül Girişi\"] --> B[\"Üst KPI Şeridi ve 4 Ana Sekme\"] B --> C[\"1. Uyum ve Denetim Raporu\"] B --> D[\"2. Eğitim Atamaları\"] B --> E[\"3. Eğitim Kataloğu\"] B --> F[\"4. Sınav Soruları Havuzu\"] E --> G[\"Yeni Eğitim Tanımı: Ad, Kategori, Geçerlilik Ayı, Baraj %\"] G --> H[\"Materyal Ekleme: PDF, PPTX, Video Dosyası veya URL\"] H --> I[\"egitim_katalogu Tablosuna Kayıt\"] F --> J[\"Soru Tanımı: Soru Metni, Şıklar (A-B-C-D), Doğru Cevap\"] J --> K[\"Soru ve Şık Görselleri Ekleme\"] K --> L[\"Excel İçe Aktarım veya Başka Eğitimden Soru Kopyalama\"] L --> M[\"soru_bankasi ve egitim_sinav_sorulari Kaydı\"] D --> N[\"Birim / Hizmet Sınıfı Filtresi ile Personel Seçimi\"] N --> O[\"Eğitim Başlığı ve Son Tarih Belirleme\"] O --> P[\"[Seçilen Personele Ata] Butonu\"] P --> Q[\"egitim_atamalari Kaydı ve Otomatik Sistem Bildirimi\"] Q --> R[\"Personel Portali / Sınav Ekranı\"] R --> S[\"Video / Doküman Materyalini İnceleme\"] S --> T{\"Online Sınav Şartı Var mı?\"} T -- \"Hayır\" --> U[\"Okuma Teyidi ile Doğrudan Tamamlama\"] T -- \"Evet\" --> V[\"Online Sınav Çözme (Dinamik Shuffle)\"] V --> W{\"Sınav Puanı >= Baraj (%) mı?\"} W -- \"Hayır\" --> X[\"Başarısız: Sınırsız Tekrar Deneme Hakkı\"] W -- \"Evet\" --> Y[\"personel_hizmet_ici_egitim Tescili (Onaylandı)\"] U --> Y Y --> Z[\"Uyum Matrisi Güncellemesi (CROSS JOIN Analizi)\"] Z --> AA[\"Aktif / Süresi Yaklaşıyor / Süresi Doldu / Hiç Alınmamış\"] Z --> AB[\"[Excel Raporu] Resmi Denetim Çıktısı\"] 03 Arayüz Bileşenleri ve 5N1K Kural Tablosu Arayüzdeki tüm buton, tablo, form ve sayaçların çalışma kuralları ve durumları: NE? (Bileşen & Ayar) NEDEN? (Amaç) NEREDE? (Ekran Konumu) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? DURUM Genel Uyum Oranı KPI ( lblKpiUyumOrani ) Kurumun SKS eğitim uyum yüzdesini anlık görmek. Üst KPI Şeridi (Aktif + Süresiz) / Toplam * 100 ile hesaplar. Ekran açıldığında ve filtrelemede. Tüm Yetkililer Eksiksiz & Aktif Geçerli Eğitimler KPI ( lblKpiAktifEgitim ) Süresi devam eden geçerli eğitim sayısını izlemek. Üst KPI Şeridi durum IN ('Aktif', 'Süresiz Geçerli') sayar. Sürekli canlı. Kalite / RGS Eksiksiz & Aktif 15 Gün Kalanlar KPI ( lblKpiYaklasan ) Yakında süresi dolacak personelleri önceden fark etmek. Üst KPI Şeridi Geçerlilik bitişine ≤ 15 gün kalan personelleri sayar. Periyodik kontrolde. Kalite / RGS Eksiksiz & Aktif Süresi Dolanlar KPI ( lblKpiDolan ) Süresi bittiği halde yenilenmemiş eğitimleri görmek. Üst KPI Şeridi Bitiş tarihi geçmiş kayıtları kırmızı alarm ile listeler. Denetim öncesi. Kalite / Yönetim Eksiksiz & Aktif Hiç Alınmamış KPI ( lblKpiHicAlinmamis ) Zorunlu eğitimi kurumda hiç almamış personelleri tespit etmek. Üst KPI Şeridi Cross-join sonucu eşleşen kaydı olmayanları sayar. Planlama safhasında. Eğitim Sorumlusu Eksiksiz & Aktif Uyum Matrisi Tablosu ( tblUyumMatrisi ) Personel-eğitim çapraz tamamlama durumunu matris formatında sergilemek. 1. Sekme (Uyum ve Denetim Raporu) Personel, TC, Birim, Eğitim, Tamamlama, Bitiş ve 4 renkli durum hücresi. Resmi denetim ve incelemede. Tüm Kullanıcılar Eksiksiz & Aktif Excel Raporu ( btnUyumExcel ) Uyum matrisini resmi denetim çıktısı olarak indirmek. 1. Sekme Üst Panel openpyxl ile kurumsal lacivert başlıklı .xlsx dosyası oluşturur. Denetim dosyası hazırlanırken. Kalite / RGS Eksiksiz & Aktif Birim & Hizmet Filtresi ( comboAtamaBirimFilter ) Toplu eğitim atarken personeli birimine veya mesleğine göre süzmek. 2. Sekme (Eğitim Atamaları) Departman ve unvan hizmet sınıflarına göre personelleri listeler. Atama öncesi. Eğitim Sorumlusu Eksiksiz & Aktif Seçilen Personele Ata ( btnTopluAta ) İşaretlenen tüm personele tek hamlede eğitim görevi atamak. 2. Sekme Üst Panel Seçilen personellere egitim_atamalari kaydı açar ve bildirim üretir. Eğitim planlamasında. Eğitim Sorumlusu Eksiksiz & Aktif Eğitim Kataloğu Formu ( grpKatalogForm ) Kurumsal eğitimleri, geçerlilik sürelerini ve sınav barajlarını belirlemek. 3. Sekme (Eğitim Kataloğu) Ad, kategori, geçerlilik ayı, baraj %, materyal tipi ve dosyasını kaydeder. Yeni eğitim açılışında. Yönetici / RGS Eksiksiz & Aktif Excel'den Soru Yükle ( btnSoruExcelImport ) Hazırlanan Excel şablonundaki soruları topluca içe aktarmak. 4. Sekme (Soru Havuzu) run_with_progress ile Excel'deki soruları okur ve veritabanına bağlar. Soru bankası hazırlığında. Sınav Komisyonu Eksiksiz & Aktif Online Sınav Diyaloğu ( HizmetIciSinavDialog ) Personelin eğitimi pekiştirmesi ve puanlandırılması. Modal Diyalog Dinamik karıştırm"
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi (Eğitim & Sınav Özeti) — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi (Eğitim & Sınav Özeti) 1. Eğitim Kataloğu ve Materyalleri SKS ve NDK zorunlu yıllık radyasyon eğitimlerini, PDF dokümanlarını ve video bağlantılarını tanımlayın; geçerlilik süresini ve ",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi (Eğitim & Sınav Özeti)",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi (Eğitim & Sınav Özeti) 1. Eğitim Kataloğu ve Materyalleri SKS ve NDK zorunlu yıllık radyasyon eğitimlerini, PDF dokümanlarını ve video bağlantılarını tanımlayın; geçerlilik süresini ve baraj puanını belirleyin. 2. Toplu Atama ve Soru Havuzu Personele eğitimleri topluca atayın. Excel üzerinden soru bankasını içe aktarın; kopya önleyici dinamik soru-şık karıştırma motorunu çalıştırın. 3. Online Sınav & Uyum Matrisi Personel portal üzerinden sınavı çözer. %70 barajı aşılınca dijital sertifika tescil edilir; SKS Denetim Uyum Matrisi yeşil rozete döner."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#mimari",
    "title": "02 Mimari ve İş Akış Şeması — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#mimari",
    "summary": "02 Mimari ve İş Akış Şeması Eğitim kataloğu hazırlama, soru havuzu oluşturma, toplu atama, online sınav çözme ve Uyum Matrisi entegrasyonu: flowchart TD A[\"Hizmet İçi Eğitim Modül Girişi\"] --> B[\"Üst KPI Şeridi ve 4 Ana ",
    "headings": [
      "02 Mimari ve İş Akış Şeması",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "02 Mimari ve İş Akış Şeması Eğitim kataloğu hazırlama, soru havuzu oluşturma, toplu atama, online sınav çözme ve Uyum Matrisi entegrasyonu: flowchart TD A[\"Hizmet İçi Eğitim Modül Girişi\"] --> B[\"Üst KPI Şeridi ve 4 Ana Sekme\"] B --> C[\"1. Uyum ve Denetim Raporu\"] B --> D[\"2. Eğitim Atamaları\"] B --> E[\"3. Eğitim Kataloğu\"] B --> F[\"4. Sınav Soruları Havuzu\"] E --> G[\"Yeni Eğitim Tanımı: Ad, Kategori, Geçerlilik Ayı, Baraj %\"] G --> H[\"Materyal Ekleme: PDF, PPTX, Video Dosyası veya URL\"] H --> I[\"egitim_katalogu Tablosuna Kayıt\"] F --> J[\"Soru Tanımı: Soru Metni, Şıklar (A-B-C-D), Doğru Cevap\"] J --> K[\"Soru ve Şık Görselleri Ekleme\"] K --> L[\"Excel İçe Aktarım veya Başka Eğitimden Soru Kopyalama\"] L --> M[\"soru_bankasi ve egitim_sinav_sorulari Kaydı\"] D --> N[\"Birim / Hizmet Sınıfı Filtresi ile Personel Seçimi\"] N --> O[\"Eğitim Başlığı ve Son Tarih Belirleme\"] O --> P[\"[Seçilen Personele Ata] Butonu\"] P --> Q[\"egitim_atamalari Kaydı ve Otomatik Sistem Bildirimi\"] Q --> R[\"Personel Portali / Sınav Ekranı\"] R --> S[\"Video / Doküman Materyalini İnceleme\"] S --> T{\"Online Sınav Şartı Var mı?\"} T -- \"Hayır\" --> U[\"Okuma Teyidi ile Doğrudan Tamamlama\"] T -- \"Evet\" --> V[\"Online Sınav Çözme (Dinamik Shuffle)\"] V --> W{\"Sınav Puanı >= Baraj (%) mı?\"} W -- \"Hayır\" --> X[\"Başarısız: Sınırsız Tekrar Deneme Hakkı\"] W -- \"Evet\" --> Y[\"personel_hizmet_ici_egitim Tescili (Onaylandı)\"] U --> Y Y --> Z[\"Uyum Matrisi Güncellemesi (CROSS JOIN Analizi)\"] Z --> AA[\"Aktif / Süresi Yaklaşıyor / Süresi Doldu / Hiç Alınmamış\"] Z --> AB[\"[Excel Raporu] Resmi Denetim Çıktısı\"]"
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#bilesenler",
    "title": "03 Arayüz Bileşenleri ve 5N1K Kural Tablosu — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#bilesenler",
    "summary": "03 Arayüz Bileşenleri ve 5N1K Kural Tablosu Arayüzdeki tüm buton, tablo, form ve sayaçların çalışma kuralları ve durumları: NE? (Bileşen & Ayar) NEDEN? (Amaç) NEREDE? (Ekran Konumu) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM",
    "headings": [
      "03 Arayüz Bileşenleri ve 5N1K Kural Tablosu",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "03 Arayüz Bileşenleri ve 5N1K Kural Tablosu Arayüzdeki tüm buton, tablo, form ve sayaçların çalışma kuralları ve durumları: NE? (Bileşen & Ayar) NEDEN? (Amaç) NEREDE? (Ekran Konumu) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? DURUM Genel Uyum Oranı KPI ( lblKpiUyumOrani ) Kurumun SKS eğitim uyum yüzdesini anlık görmek. Üst KPI Şeridi (Aktif + Süresiz) / Toplam * 100 ile hesaplar. Ekran açıldığında ve filtrelemede. Tüm Yetkililer Eksiksiz & Aktif Geçerli Eğitimler KPI ( lblKpiAktifEgitim ) Süresi devam eden geçerli eğitim sayısını izlemek. Üst KPI Şeridi durum IN ('Aktif', 'Süresiz Geçerli') sayar. Sürekli canlı. Kalite / RGS Eksiksiz & Aktif 15 Gün Kalanlar KPI ( lblKpiYaklasan ) Yakında süresi dolacak personelleri önceden fark etmek. Üst KPI Şeridi Geçerlilik bitişine ≤ 15 gün kalan personelleri sayar. Periyodik kontrolde. Kalite / RGS Eksiksiz & Aktif Süresi Dolanlar KPI ( lblKpiDolan ) Süresi bittiği halde yenilenmemiş eğitimleri görmek. Üst KPI Şeridi Bitiş tarihi geçmiş kayıtları kırmızı alarm ile listeler. Denetim öncesi. Kalite / Yönetim Eksiksiz & Aktif Hiç Alınmamış KPI ( lblKpiHicAlinmamis ) Zorunlu eğitimi kurumda hiç almamış personelleri tespit etmek. Üst KPI Şeridi Cross-join sonucu eşleşen kaydı olmayanları sayar. Planlama safhasında. Eğitim Sorumlusu Eksiksiz & Aktif Uyum Matrisi Tablosu ( tblUyumMatrisi ) Personel-eğitim çapraz tamamlama durumunu matris formatında sergilemek. 1. Sekme (Uyum ve Denetim Raporu) Personel, TC, Birim, Eğitim, Tamamlama, Bitiş ve 4 renkli durum hücresi. Resmi denetim ve incelemede. Tüm Kullanıcılar Eksiksiz & Aktif Excel Raporu ( btnUyumExcel ) Uyum matrisini resmi denetim çıktısı olarak indirmek. 1. Sekme Üst Panel openpyxl ile kurumsal lacivert başlıklı .xlsx dosyası oluşturur. Denetim dosyası hazırlanırken. Kalite / RGS Eksiksiz & Aktif Birim & Hizmet Filtresi ( comboAtamaBirimFilter ) Toplu eğitim atarken personeli birimine veya mesleğine göre süzmek. 2. Sekme (Eğitim Atamaları) Departman ve unvan hizmet sınıflarına göre personelleri listeler. Atama öncesi. Eğitim Sorumlusu Eksiksiz & Aktif Seçilen Personele Ata ( btnTopluAta ) İşaretlenen tüm personele tek hamlede eğitim görevi atamak. 2. Sekme Üst Panel Seçilen personellere egitim_atamalari kaydı açar ve bildirim üretir. Eğitim planlamasında. Eğitim Sorumlusu Eksiksiz & Aktif Eğitim Kataloğu Formu ( grpKatalogForm ) Kurumsal eğitimleri, geçerlilik sürelerini ve sınav barajlarını belirlemek. 3. Sekme (Eğitim Kataloğu) Ad, kategori, geçerlilik ayı, baraj %, mater"
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#kpi-kokpit",
    "title": "04 Dinamik KPI Göstergeleri ve Hesaplama Formülleri — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#kpi-kokpit",
    "summary": "04 Dinamik KPI Göstergeleri ve Hesaplama Formülleri Ekranın üst bandında yer alan 5 adet canlı performans kartı kurumun eğitim sağlığını anlık olarak yansıtır: Genel Uyum Oranı %94.5 (Aktif + Süresiz) / Toplam Gereksinim",
    "headings": [
      "04 Dinamik KPI Göstergeleri ve Hesaplama Formülleri",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "04 Dinamik KPI Göstergeleri ve Hesaplama Formülleri Ekranın üst bandında yer alan 5 adet canlı performans kartı kurumun eğitim sağlığını anlık olarak yansıtır: Genel Uyum Oranı %94.5 (Aktif + Süresiz) / Toplam Gereksinim * 100 Geçerli Eğitimler 148 Süresi devam eden veya süresiz tescilli kayıtlar. 15 Gün Kalanlar 12 Kalan süre ≤ 15 gün; bildirim motoru devrede. Süresi Dolanlar 4 Geçerliliği bitmiş; acil yenileme gerekir. Hiç Alınmamış 3 Zorunlu olduğu halde sıfır kaydı olan çalışanlar."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#uyum-matrisi",
    "title": "05 Kurumsal Uyum ve Denetim Matrisi Analizi — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#uyum-matrisi",
    "summary": "05 Kurumsal Uyum ve Denetim Matrisi Analizi SKS ve NDK denetimlerinde kurumun en güçlü kanıtıdır. Arka planda aktif çalışanlar ile zorunlu eğitim kataloğu çapraz eşleştirilerek ( CROSS JOIN ) personelin tüm eğitim geçmiş",
    "headings": [
      "05 Kurumsal Uyum ve Denetim Matrisi Analizi",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "05 Kurumsal Uyum ve Denetim Matrisi Analizi SKS ve NDK denetimlerinde kurumun en güçlü kanıtıdır. Arka planda aktif çalışanlar ile zorunlu eğitim kataloğu çapraz eşleştirilerek ( CROSS JOIN ) personelin tüm eğitim geçmişi sorgulanır: Aktif / Süresiz Geçerli Eğitim tamamlanmış, sınavı geçilmiş ve geçerlilik süresi devam ediyor. Süresi Yaklaşıyor (≤15 Gün) Geçerlilik bitişine 15 gün veya daha az kalmış; otomatik uyarı gönderilmiş. Süresi Doldu (Kırmızı Alarm) Eğitimin süresi bitmiş; SKS denetim puanını düşürmemesi için derhal yenilenmelidir. Hiç Alınmamış (Mor Uyarı) Yeni işe başlayan veya zorunlu eğitimi kuruma girdiğinden beri hiç almamış personel. Resmi Denetim Heyeti İçin Renkli Excel Çıktısı Üstteki [Excel Raporu] butonuna tıklandığında kurumsal lacivert başlıklı resmi .xlsx matrisi üretilir. openpyxl Motoru"
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#toplu-atama",
    "title": "06 Toplu ve Birim Bazlı Eğitim Atama Motoru — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#toplu-atama",
    "summary": "06 Toplu ve Birim Bazlı Eğitim Atama Motoru Yüzlerce personele tek tek görev atamak yerine birim ve meslek filtresiyle tek tıkla toplu görevlendirme: Hedef Personel Grubunu Süzme: Sol üstteki Birim Filtresi ( comboAtamaB",
    "headings": [
      "06 Toplu ve Birim Bazlı Eğitim Atama Motoru",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "06 Toplu ve Birim Bazlı Eğitim Atama Motoru Yüzlerce personele tek tek görev atamak yerine birim ve meslek filtresiyle tek tıkla toplu görevlendirme: Hedef Personel Grubunu Süzme: Sol üstteki Birim Filtresi ( comboAtamaBirimFilter ) veya Hizmet Sınıfı Filtresi ( comboAtamaHizmetFilter ) ile listeyi daraltın. Toplu Seçim: Tablodaki personelleri tek tek onay kutularıyla seçin veya sol üstteki [Tümünü Seç] butonuna tıklayarak süzülen herkesi tek hamlede işaretleyin. Eğitim ve Son Tarih: Üstteki Atanacak Eğitim açılır kutusundan ilgili eğitimi seçin ve Son Tamamlama Tarihi (varsayılan: 30 gün sonrası) takvimini belirleyin. [Seçilen Personele Ata]: Butona basıldığında seçili personellere aynı anda atama yapılır ve sistem personellere otomatik görevlendirme bildirimi yönlendirir. Atama İptali: Sağdaki mevcut atamalar listesinden bir satır seçip [Atamayı İptal Et] butonuyla gerekirse atamayı geri alabilirsiniz."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#katalog-yonetimi",
    "title": "07 Eğitim Kataloğu ve Materyal Yönetimi — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#katalog-yonetimi",
    "summary": "07 Eğitim Kataloğu ve Materyal Yönetimi Kurumun eğitim müfredatının, sürelerinin ve multimedya içeriklerinin tanımlandığı merkezdir: Temel Parametreler • Eğitim Adı: Eğitimin tam resmi adı (örn: \"Radyasyon Alanlarında Ça",
    "headings": [
      "07 Eğitim Kataloğu ve Materyal Yönetimi",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "07 Eğitim Kataloğu ve Materyal Yönetimi Kurumun eğitim müfredatının, sürelerinin ve multimedya içeriklerinin tanımlandığı merkezdir: Temel Parametreler • Eğitim Adı: Eğitimin tam resmi adı (örn: \"Radyasyon Alanlarında Çalışma Standartları\"). • Kategori: Radyasyon Güvenliği, Hasta Güvenliği, Genel Kalite vb. • Geçerlilik (Ay): SKS standardı uyarınca varsayılan 12 ay. Süresizler için 0 . • [x] Zorunlu Eğitim: İşaretlendiğinde kurum geneli Uyum Matrisi'ne doğrudan dahil edilir. • [x] Online Sınav Aktif: Eğitim sonunda personelin sınav çözmesini zorunlu kılar. • Baraj Puanı: Sınavı geçmek için gereken başarı yüzdesi (varsayılan: %70 ). Materyal ve Video Entegrasyonu • Materyal Türü: Doküman / Dosya (PDF, DOCX, PPTX), Video Dosyası (MP4, WEBM) veya Harici Video URL. • Dosya Seç: Bilgisayarınızdaki eğitim sunumunu veya video kaydını bağlamak için [Dosya Seç] butonunu kullanın. • Dokümanı Aç: Yüklenen eğitim materyalini doğrulamak için doğrudan sistemin varsayılan görüntüleyicisinde açar. • Web Portal Stream: MP4 videoları Web Portal üzerinden mobil cihazlarda ve tarayıcılarda HTTP Range stream ile kesintisiz izlenebilir. SKS 6.1 Kalite Dokümanları ve NDK KLV-014 (T.1 - T.11) Entegrasyonu Sistemde kayıtlı Kalite Dokümanları kategorisi altında NDK RSGD-KLV-014 Radyasyondan Korunma Programı kılavuzunda zorunlu tutulan 11 resmi talimat ( TL.RAD.01 'den TL.RAD.11 'e kadar: Güvenli Cihaz Kullanımı, Çalışan Korunması, Hasta Korunması, Alan Güvenliği, RKE Muayenesi, Ortam Dozu, Dozimetri, Periyodik Muayene, QA/QC, Acil Durum ve Eğitim) tanımlıdır. Bu talimatlar tüm radyasyon personeline yıllık (12 ay geçerlilik) zorunlu doküman eğitimi olarak atanır. Personel portal üzerinden bu talimatları okuyup onayladığında hem Sağlık Bakanlığı SKS v6.1 Denetim Matrisi'ne hem de resmi NDK RKP başvuru dosyasının II. Bölümüne yasal denetim iziyle anlık yansır."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#soru-havuzu",
    "title": "08 Merkezi Soru Havuzu, Şık Görselleri ve Excel İçe Aktarım — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#soru-havuzu",
    "summary": "08 Merkezi Soru Havuzu, Şık Görselleri ve Excel İçe Aktarım Her eğitim için 4 seçenekli (A, B, C, D) çoktan seçmeli sorular hazırlanır. Hem soru köküne hem de şıklara bağımsız diyagram ve grafik görselleri bağlanabilir: ",
    "headings": [
      "08 Merkezi Soru Havuzu, Şık Görselleri ve Excel İçe Aktarım",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "08 Merkezi Soru Havuzu, Şık Görselleri ve Excel İçe Aktarım Her eğitim için 4 seçenekli (A, B, C, D) çoktan seçmeli sorular hazırlanır. Hem soru köküne hem de şıklara bağımsız diyagram ve grafik görselleri bağlanabilir: Görselli Soru Desteği Radyolojik anatomik kesitler, dozimetre renk bantları, cihaz kumanda paneli veya uluslararası radyasyon sembolleri sorulara görsel olarak eklenebilir. Soru metni yanındaki [Soru Resmi Seç] veya şıkların yanındaki fotoğraf ikonlu butonlar tıklandığında görsel doğrudan sisteme entegre edilir. [Şablon İndir] & [Excel'den Soru Yükle] Önceden ayarlanmış Egitim_Sinav_Sorulari_Sablonu.xlsx şablonunu indirin; onlarca soruyu Excel'de hazırlayıp tek tıkla yükleyin. [Başka Eğitimden Soru Kopyala] Geçen yılın eğitimindeki veya benzer kategorideki bir eğitimin sınav sorularını tek hamlede yeni eğitime kopyalayarak zamandan tasarruf edin."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#online-sinav",
    "title": "09 Online Sınav Çözme, Dinamik Karıştırma ve Otomatik Tescil — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#online-sinav",
    "summary": "09 Online Sınav Çözme, Dinamik Karıştırma ve Otomatik Tescil Kopya çekilmesini engelleyen dinamik algoritma ve anlık değerlendirme süreci: 1. Dinamik Shuffle (Karıştırma) Her personel için soruların sırası rastgele karış",
    "headings": [
      "09 Online Sınav Çözme, Dinamik Karıştırma ve Otomatik Tescil",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "09 Online Sınav Çözme, Dinamik Karıştırma ve Otomatik Tescil Kopya çekilmesini engelleyen dinamik algoritma ve anlık değerlendirme süreci: 1. Dinamik Shuffle (Karıştırma) Her personel için soruların sırası rastgele karıştırılır. Ayrıca seçeneklerin sırası da dinamik olarak dağıtılır; A şıkkı bir personelde ilk sırada çıkarken diğer personelde C şıkkı konumunda gösterilir. 2. %70 Başarı Barajı Sınav bitirildiğinde sistem doğru sayısını hesaplar. Baraj (varsayılan: %70) sağlandığında sınav anında onaylanır. Sağlanamazsa personel sınırsız tekrar sınav hakkına sahiptir. 3. Otomatik Onay & Tescil Sınavı geçen personelin eğitimi başka bir komisyon onayı beklemeksizin doğrudan Onaylandı statüsüyle veritabanına tescil edilir ve Uyum Matrisi yeşile döner."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#erken-uyari",
    "title": "10 15 Gün Önceden Otomatik Sistem Bildirim Motoru — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#erken-uyari",
    "summary": "10 15 Gün Önceden Otomatik Sistem Bildirim Motoru Zamanlanmış arka plan servisi ( check_and_create_expiry_notifications ) sayesinde hiçbir eğitim süresi unutulmaz: Otomatik Hatırlatma Mekanizması Geçerlilik süresi dolmak",
    "headings": [
      "10 15 Gün Önceden Otomatik Sistem Bildirim Motoru",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "10 15 Gün Önceden Otomatik Sistem Bildirim Motoru Zamanlanmış arka plan servisi ( check_and_create_expiry_notifications ) sayesinde hiçbir eğitim süresi unutulmaz: Otomatik Hatırlatma Mekanizması Geçerlilik süresi dolmak üzere olan çalışanlar bitişe 15 gün kala otomatik olarak tespit edilir. Mükerrer bildirim koruması sayesinde her personele günde sadece bir kez aşağıdaki resmi uyarı iletilir: \"Sayın [Personel Adı], zorunlu '[Eğitim Adı]' eğitiminizin geçerlilik süresi [Tarih] tarihinde sona erecektir. Lütfen süresi dolmadan eğitiminizi yenileyiniz.\""
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#hibrit-web",
    "title": "11 Hibrit Arayüz ve Web Portalı Görünümü — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#hibrit-web",
    "summary": "11 Hibrit Arayüz ve Web Portalı Görünümü Masaüstü yönetim kokpiti ile Web Portalı arasında çift yönlü senkronizasyon: Masaüstü Uygulaması (Yetkili & Denetim Merkezi) • Müfredat, kategori ve geçerlilik ayı tanımlama. • Bi",
    "headings": [
      "11 Hibrit Arayüz ve Web Portalı Görünümü",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "11 Hibrit Arayüz ve Web Portalı Görünümü Masaüstü yönetim kokpiti ile Web Portalı arasında çift yönlü senkronizasyon: Masaüstü Uygulaması (Yetkili & Denetim Merkezi) • Müfredat, kategori ve geçerlilik ayı tanımlama. • Birim ve hizmet sınıfına göre toplu personel atamaları. • Soru havuzu hazırlama, Excel şablon aktarımı ve soru kopyalama. • Kurum geneli Uyum Matrisi izleme ve renkli Excel (.xlsx) çıktısı. Web Portalı (Personel ve Video Eğitim Portali) • Personel Eğitim Paneli: Kendisine atanan eğitimleri ve kalan süreleri görme. • HTTP Range Video Stream: Büyük boyutlu eğitim videolarını ve PDF'leri tarayıcıda izleme. • Web Sınavı: Soruları doğrudan tarayıcı üzerinden çözüp anlık baraj sonucunu alma. • Kurumsal Dashboard: Birim bazlı uyum oranlarını web grafikleriyle izleme."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#ekran-goruntuleri",
    "title": "Masaüstü ve Web Portalı Ekran Görüntüleri — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#ekran-goruntuleri",
    "summary": "Masaüstü ve Web Portalı Ekran Görüntüleri Hizmet içi eğitim uyum matrisi, soru bankası ve online sınav ekranlarının masaüstü ve web portalı görünümleri: ️ Ekran Konumu: Masaüstü > Hizmet İçi Eğitim & Online Sınav > 1. Se",
    "headings": [
      "Masaüstü ve Web Portalı Ekran Görüntüleri",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "Masaüstü ve Web Portalı Ekran Görüntüleri Hizmet içi eğitim uyum matrisi, soru bankası ve online sınav ekranlarının masaüstü ve web portalı görünümleri: ️ Ekran Konumu: Masaüstü > Hizmet İçi Eğitim & Online Sınav > 1. Sekme: Uyum Matrisi Masaüstü Kurumsal Uyum Matrisi Simülasyon Notu: Tüm aktif personel ile zorunlu eğitim kataloğunun çapraz eşleştirildiği (CROSS JOIN) denetim matrisi. ️ Ekran Konumu: Masaüstü > Hizmet İçi Eğitim & Online Sınav > 4. Sekme: Soru Havuzu & Sınav Soru Bankası & Online Sınav Yönetimi Simülasyon Notu: Çoktan seçmeli soru bankası yönetimi, Excel soru aktarımı ve dinamik karıştırmalı sınav motoru. ️ Ekran Konumu: Web Portalı > Eğitim & Sınav Yönetimi > Kurumsal Uyum Matrisi Web Portalı Uyum Matrisi Dashboard Simülasyon Notu: Kalite ve birim yöneticilerinin web tarayıcısı üzerinden birim bazlı eğitim uyum oranlarını canlı izlediği ekran. ️ Ekran Konumu: Web Portalı > Personel Eğitim Paneli & Online Sınav Web Video Eğitim & Online Sınav Simülasyon Notu: Personelin tarayıcı veya mobil cihaz üzerinden eğitim materyalini inceleyip online sınava katıldığı ekran."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#sorun-giderme",
    "title": "12 Hata Mesajları ve Sorun Giderme Rehberi — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#sorun-giderme",
    "summary": "12 Hata Mesajları ve Sorun Giderme Rehberi Karşılaşabileceğiniz sistem uyarıları ve çözüm adımları: Hata / Uyarı Mesajı Olası Neden Çözüm Adımı \"Lütfen atanacak eğitimi seçiniz.\" Toplu atama panelinde eğitim seçilmediğin",
    "headings": [
      "12 Hata Mesajları ve Sorun Giderme Rehberi",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "12 Hata Mesajları ve Sorun Giderme Rehberi Karşılaşabileceğiniz sistem uyarıları ve çözüm adımları: Hata / Uyarı Mesajı Olası Neden Çözüm Adımı \"Lütfen atanacak eğitimi seçiniz.\" Toplu atama panelinde eğitim seçilmediğinde. Açılır kutudan personele atanacak eğitim başlığını seçin. \"Lütfen listeden en az bir personel seçiniz.\" Seçim tablosunda hiçbir çalışan işaretlenmediğinde. Tablodan personelleri işaretleyin veya [Tümünü Seç] butonunu kullanın. \"Bu eğitime ait henüz aktif sınav sorusu bulunmamaktadır.\" Sorusu olmayan eğitim için sınav başlatılmak istendiğinde. Soru Havuzu sekmesinden eğitime soru ekleyin veya Excel'den aktarın. \"X adet soruyu boş bıraktınız. Tamamlamak istiyor musunuz?\" Sınavda boş bırakılan sorular varken gönderilmek istendiğinde. Boş soruları tamamlamak için 'Hayır'ı seçin veya bu haliyle göndermek için 'Evet'i tıklayın. \"Sınav puanınız: %X. Baraj puanı (%Y) sağlanamadı.\" Puan katalogdaki baraj puanının altında kaldığında. Eğitim materyalini tekrar inceleyip sınavı yeniden başlatın (sınırsız hak)."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#mit-avcilari",
    "title": "Hizmet İçi Eğitim, Sınav & Mit Avcısı (Kritik Kurallar) — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#mit-avcilari",
    "summary": "Hizmet İçi Eğitim, Sınav & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Online sınavda %70 baraj puanının altında kalan personel eğitimden elenir ve bir daha sınava giremez.\" Doğru Yasal Kural: Amaç öğrenmeyi pek",
    "headings": [
      "Hizmet İçi Eğitim, Sınav & Mit Avcısı (Kritik Kurallar)",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "Hizmet İçi Eğitim, Sınav & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Online sınavda %70 baraj puanının altında kalan personel eğitimden elenir ve bir daha sınava giremez.\" Doğru Yasal Kural: Amaç öğrenmeyi pekiştirmektir. Personel materyalleri tekrar gözden geçirerek sınırsız sayıda sınava yeniden girebilir; her sınavda soru ve seçenekler dinamik olarak karıştırılır. Yaygın Yanılgı (Mit 2) \"Kurum Uyum Matrisinde zorunlu eğitimi 'Hiç Almamış' görünen çalışanlar denetim başarı oranını etkilemez.\" Doğru Yasal Kural: SKS 6.1 çapraz denetim matrisi gereğince aktif personelin zorunlu eğitimi hiç almamış olması kurumun genel kalite ve uyum puanını doğrudan düşürür. Yaygın Yanılgı (Mit 3) \"Sınavı olmayan eğitimlerde personelin materyali incelediğini kanıtlamak için ıslak imzalı tutanak şarttır.\" Doğru Yasal Kural: Sınavsız eğitimlerde personel portaldan dokümanı inceleyip 'Okudum / İnceledim' butonuna bastığında sistem IP ve zaman damgasıyla dijital onay üretir; bu kayıt resmi denetim kanıtıdır."
  },
  {
    "id": "17_hizmet_ici_egitim_ve_online_sinav#sss",
    "title": "13 Sıkça Sorulan Sorular (SSS) — Hizmet İçi Eğitim ve Online Sınav Yönetimi",
    "category": "4. Radyasyon Güvenliği & Eğitim › Bölüm",
    "url": "17_hizmet_ici_egitim_ve_online_sinav.html#sss",
    "summary": "13 Sıkça Sorulan Sorular (SSS) Kullanıcılarımızın ve kalite birimlerinin en sık yönelttiği sorular ve yanıtları: Sınavda başarısız olan bir personel için sınav hakkı sınırı var mıdır? ▼ Hayır. Personel başarı baraj puanı",
    "headings": [
      "13 Sıkça Sorulan Sorular (SSS)",
      "Hizmet İçi Eğitim ve Online Sınav Yönetimi"
    ],
    "content": "13 Sıkça Sorulan Sorular (SSS) Kullanıcılarımızın ve kalite birimlerinin en sık yönelttiği sorular ve yanıtları: Sınavda başarısız olan bir personel için sınav hakkı sınırı var mıdır? ▼ Hayır. Personel başarı baraj puanına (varsayılan: %70) ulaşana kadar eğitim materyalini tekrar gözden geçirerek sınırsız sayıda sınava yeniden girebilir. Her yeni denemede sorular ve şıklar dinamik olarak yeniden karıştırılır. Uyum Matrisinde \"Hiç Alınmamış\" görünen personeller kurum uyum oranını düşürür mü? ▼ Evet. Zorunlu olarak tanımlanan bir eğitimi henüz tamamlamamış olan tüm aktif çalışanlar mor renkli \"Hiç Alınmamış\" statüsüne düşer ve Genel Uyum Oranını doğrudan aşağı çeker. Bu personellere acil toplu eğitim ataması yapılmalıdır. Online sınavı olmayan bir eğitimin tamamlanması nasıl gerçekleşir? ▼ Eğer eğitim kataloğunda [Online Sınav Aktif] seçeneği işaretlenmemişse, personel eğitim dokümanını veya videosunu inceledikten sonra [Okudum / İnceledim] butonuna basar; sistem eğitimi doğrudan tamamlandı ve onaylandı olarak kaydeder. 15 gün kala erken uyarı bildirimi bir personele günde kaç kez gider? ▼ Sistem içi mükerrer bildirim koruması bulunur. Aynı gün içerisinde aynı personel ve eğitim için yalnızca tek bir hatırlatma bildirimi üretilir."
  },
  {
    "id": "18_tibbi_cihaz_ve_ndk_lisans_envanteri",
    "title": "Tıbbi Cihaz ve NDK Lisans Envanteri",
    "category": "5. Cihaz, Kalite (QC) & RKE",
    "url": "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html",
    "summary": "Hastaneler ve radyoloji merkezlerindeki iyonlaştırıcı radyasyon yayan (X-Ray, Tomografi, Anjiyografi, Skopi, Mamografi) ve radyasyonsuz medikal (MR, USG) tüm cihazların teknik künyelerinin yönetildiği, Nükleer Düzenleme Kurumu (NDK) lisans ve vize sürelerinin ",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Cihaz Yaşam Döngüsü ve İş Akış Şeması (Mermaid)",
      "Ekran Konumları ve Görsel Rehber",
      "Adım Adım Operasyonel Eylem Akışı",
      "Hibrit Platform Matrisi (Masaüstü vs Web Portal)",
      "Masaüstü Uygulaması (Yetkili Yönetim Merkezi)",
      "Web Portalı & Mobil Barkod (Saha Personeli Görünümü)",
      "Sıkça Sorulan Sorular ve Saha Çözümleri"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 5: Tıbbi Cihaz & RKE 18. Tıbbi Cihaz & NDK Lisans Tıbbi Cihaz ve NDK Lisans Envanteri NDK & SKS 6.1 Uyumlu Tahmini Okuma: 4 Dakika Hastaneler ve radyoloji merkezlerindeki iyonlaştırıcı radyasyon yayan (X-Ray, Tomografi, Anjiyografi, Skopi, Mamografi) ve radyasyonsuz medikal (MR, USG) tüm cihazların teknik künyelerinin yönetildiği, Nükleer Düzenleme Kurumu (NDK) lisans ve vize sürelerinin 6 ay - 45 gün - 30 gün kademeli erken uyarı sistemiyle takip edildiği, cihazların mimari kat planları (kroki) üzerine koordinatla sabitlendiği, teknik kılavuzların AES-256 şifreli Evrak Kasasında korunduğu ve hurdaya ayrılan cihazların resmi HEK tutanağıyla arşivlendiği entegre donanım yönetim merkezidir. Yasal Güvence: Sağlık Bakanlığı Sağlıkta Kalite Standartları (SKS 6.1) ve NDK Radyasyon Güvenliği Mevzuatı uyarınca ruhsatsız veya vizesi dolmuş cihazlar karantina uyarısına alınır. Kısa Reçete: Yeni Cihaz Tanımlama ve NDK Lisansı Bağlama 20 SANİYELİK AKIŞ 1. İstenen Sonuç Cihazın resmi NDK lisansıyla envantere kaydedilmesi, erken uyarı alarmına bağlanması ve QR künyesinin üretilmesi. 2. Yapılacak İşlem [Yeni Cihaz] butonuna tıklayın. 1. Sekmede Anabilim Dalı ve Birimi seçin (alt birimler otomatik filtrelenir, Cihaz Kodu kilitli olarak otomatik üretilir); Seri No ve Demirbaş No girin. 2. Sekmede NDK Lisans No ve Vize Tarihini yazıp [Cihazı Kaydet] butonuna basın. 3. Sistem Etkisi & Güvence Cihaz Kodu otomatik üretilir ve kilitlenir. Vize bitimine 6 ay kala erken uyarı başlar; 45 gün ve 30 gün eşiklerinde alarm rengi değişir. Hiçbir eski veri ezilmez. Vize Takip Alarmı 6 Ay / 45G / 30G Yetkili Rol Biyomedikal / RGS / RKS Cihaz Kodu Kuralı Sistem Üretir (Kilitli) Platform ️ Masaüstü + Web / QR Kritik Sahada Yanlış Bilinen Kural (Mit Avcısı) Yanlış Algı: \"Cihaz kodunu kendi istediğim gibi değiştirebilirim; artık kullanılmayan eski bir cihazı da sistemden kalıcı olarak silebilir veya yok edebilirim.\" Gerçek Sistem Mantığı: Cihaz Kodu ilişkisel veri bütünlüğünü korumak için sistem tarafından otomatik üretilir ve kilitlidir . Kurum içi demirbaş veya ÇKYS takibi için formdaki Demirbaş No alanı kullanılır. Ayrıca sistemde cihazlar asla kalıcı silinmez; geçmiş kalite kontrol, arıza ve dozimetri izini korumak için [Sil / HEK] butonuyla Hurda Arşivine kaldırılır. 5N1K Kural ve Ayar Çözümleme Tablosu Tıbbi cihaz envanteri, NDK lisanslama, kat planı sabitleme ve HEK hurda arşivi operasyonel kontrolleri. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Yeni Cihaz Tanımlama [Yeni Cihaz Butonu] Hastaneye teslim alınan cihazın teknik künyesini ve lisansını açmak. 5 sekmeli sihirbaz açılır: Genel Künye, NDK Lisans, Garanti, Kat Planı ve Şifreli Evrak Kasası doldurulur. Yeni cihaz alımında veya devralındığında. Biyomedikal / RGS Otomatik Cihaz Kodu & Kademeli Birim Seçimi [Cihaz Kodu (Kilitli) / A.B.D. & Birim] Mükerrer cihaz kodlarını ve A.B.D. ile Birim arasındaki hiyerarşik uyumsuzlukları önlemek. Anabilim Dalı seçildiğinde Birim listesi otomatik filtrelenir. Seçilen parametrelere göre Cihaz Kodu sistem tarafından otomatik üretilir ve kullanıcı müdahalesine karşı kalıcı salt okunur kilitlenir. Yeni cihaz tanımlanırken veya düzenlenirken. Biyomedikal / RGS NDK Lisans ve Vize Takibi [2. Sekme: Lisans Bilgileri] İyonlaştırıcı radyasyon yayan cihazın yasal ruhsat takvimini kurmak. Lisans No ve vize geçerlilik tarihi girilir. Sistem 6 ay, 45 gün ve 30 gün erken uyarı alarmları üretir. Cihaz kaydedilirken veya lisans yenilendiğinde. RGS / RKS Sorumlusu Kat Planına Sabitleme [4. Sekme: Kat Planı & Pin Kilitli] Cihazın oda içindeki mimari koordinatını sabitlemek ve kroki haritasında göstermek. Birim krokisi açılır, fareyle pini yerleştirilip [Pin Kilitli] butonuyla kilitlenir. Sabit X-Ray, BT veya Anjiyo kurulumunda. Biyomedikal / RGS AES-256 Şifreli Evrak Kasası [5. Sekme: Kılavuzlar ve Belgeler] Kullanım kılavuzu, servis şeması ve CE belgelerini KVKK uyumlu şifreli saklamak. Yüklenen PDF/dosyalar AES-256 Fernet ile şifrelenir; istendiğinde şifresi çözülüp görüntülenir. Teknik evrak teslim alındığında. Tüm Kullanıcılar Dinamik QR Etiket & Toplu Baskı Paketi (.ZIP) [Toplu QR Etiket İhracı / Sağ Tık Menüsü] Cihaz gövdesine yapıştırılacak karekodlu kimlik etiketini tekil basmak veya matbaa üretimi için tüm cihaz etiketlerini toplu paketlemek. Tekil QR etiketi basılabilir veya üst araç çubuğundaki [Toplu QR Etiket İhracı] ve sağ tık menüsünden seçili/tüm cihazlar için 300 DPI ultra net PNG etiketleri, teknik şartname (00_Baski_ve_Uretim_Rehberi.txt) ve icmal listesi (00_Etiket_Listesi_Icmal.csv) içeren endüstriyel .ZIP paketi olarak ihraç edilir. Cihaz kabulünde, saha etiketlemesinde veya toplu matbaa siparişlerinde. Tekniker / Biyomedikal / RGS HEK Hurda Arşivi ve Çıkış Tutanağı [Sil / HEK & Hurda Tutanağı Butonları] Ekonomik ömrü biten cihazı arşivleyip resmi komisyon tutanağı üretmek. Cihaz HEK arşivine kaldırılır; geçmiş denetim izi korunur. Resmi Word (.docx) Hurda Tutanağı tek tıkla üretilir. Cihaz hurdaya ayrıldığında veya devredildiğinde. Sistem Yöneticisi Toplu Cihaz İçe Aktar (Excel) [Excel İçe Aktar Butonu] Onlarca cihazı tek tek girmek yerine 2 sayfalı kurumsal Excel şablonuyla topluca sisteme aktarmak. Evrensel İçe Aktarım Sihirbazı devreye girer. Şablondaki veriler doğrulanır; sistemde bulunmayan yeni departman veya türler dinamik sözlükte eşlenir; Dry-Run doğrulamasının ardından asenkron olarak güvenle kaydedilir. İlk sistem kurulumunda veya toplu cihaz alımlarında. Biyomedikal / Sistem Yöneticisi Toplu Cihaz Komisyon / HEK Tutanağı [Tutanak Oluştur Butonu / Sağ Tık Menüsü] Hizmet dışı kalan, devredilen veya hurdaya ayrılan birden çok cihazı tek bir resmi Word (.docx) komisyon tutanağında toplamak. Cihaz envanter tablosunda klavyeden Ctrl veya Shift tuşlarıyla birden çok cihaz seçilir. Üst araç çubuğundaki [Tutanak Oluştur] butonuna veya sağ tık menüsündeki \"Seçili Cihazlar İçin Toplu HEK / Komisyon Tutanağı...\" komutuna basılır. Tutanak Sihirbazı açılarak cihazl"
  },
  {
    "id": "18_tibbi_cihaz_ve_ndk_lisans_envanteri#matrix-5n1k",
    "title": "5N1K Kural ve Ayar Çözümleme Tablosu — Tıbbi Cihaz ve NDK Lisans Envanteri",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html#matrix-5n1k",
    "summary": "5N1K Kural ve Ayar Çözümleme Tablosu Tıbbi cihaz envanteri, NDK lisanslama, kat planı sabitleme ve HEK hurda arşivi operasyonel kontrolleri. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Yen",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Tıbbi Cihaz ve NDK Lisans Envanteri"
    ],
    "content": "5N1K Kural ve Ayar Çözümleme Tablosu Tıbbi cihaz envanteri, NDK lisanslama, kat planı sabitleme ve HEK hurda arşivi operasyonel kontrolleri. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Yeni Cihaz Tanımlama [Yeni Cihaz Butonu] Hastaneye teslim alınan cihazın teknik künyesini ve lisansını açmak. 5 sekmeli sihirbaz açılır: Genel Künye, NDK Lisans, Garanti, Kat Planı ve Şifreli Evrak Kasası doldurulur. Yeni cihaz alımında veya devralındığında. Biyomedikal / RGS Otomatik Cihaz Kodu & Kademeli Birim Seçimi [Cihaz Kodu (Kilitli) / A.B.D. & Birim] Mükerrer cihaz kodlarını ve A.B.D. ile Birim arasındaki hiyerarşik uyumsuzlukları önlemek. Anabilim Dalı seçildiğinde Birim listesi otomatik filtrelenir. Seçilen parametrelere göre Cihaz Kodu sistem tarafından otomatik üretilir ve kullanıcı müdahalesine karşı kalıcı salt okunur kilitlenir. Yeni cihaz tanımlanırken veya düzenlenirken. Biyomedikal / RGS NDK Lisans ve Vize Takibi [2. Sekme: Lisans Bilgileri] İyonlaştırıcı radyasyon yayan cihazın yasal ruhsat takvimini kurmak. Lisans No ve vize geçerlilik tarihi girilir. Sistem 6 ay, 45 gün ve 30 gün erken uyarı alarmları üretir. Cihaz kaydedilirken veya lisans yenilendiğinde. RGS / RKS Sorumlusu Kat Planına Sabitleme [4. Sekme: Kat Planı & Pin Kilitli] Cihazın oda içindeki mimari koordinatını sabitlemek ve kroki haritasında göstermek. Birim krokisi açılır, fareyle pini yerleştirilip [Pin Kilitli] butonuyla kilitlenir. Sabit X-Ray, BT veya Anjiyo kurulumunda. Biyomedikal / RGS AES-256 Şifreli Evrak Kasası [5. Sekme: Kılavuzlar ve Belgeler] Kullanım kılavuzu, servis şeması ve CE belgelerini KVKK uyumlu şifreli saklamak. Yüklenen PDF/dosyalar AES-256 Fernet ile şifrelenir; istendiğinde şifresi çözülüp görüntülenir. Teknik evrak teslim alındığında. Tüm Kullanıcılar Dinamik QR Etiket & Toplu Baskı Paketi (.ZIP) [Toplu QR Etiket İhracı / Sağ Tık Menüsü] Cihaz gövdesine yapıştırılacak karekodlu kimlik etiketini tekil basmak veya matbaa üretimi için tüm cihaz etiketlerini toplu paketlemek. Tekil QR etiketi basılabilir veya üst araç çubuğundaki [Toplu QR Etiket İhracı] ve sağ tık menüsünden seçili/tüm cihazlar için 300 DPI ultra net PNG etiketleri, teknik şartname (00_Baski_ve_Uretim_Rehberi.txt) ve icmal listesi (00_Etiket_Listesi_Icmal.csv) içeren endüstriyel .ZIP paketi olarak ihraç edilir. Cihaz kabulünde, saha etiketlemesinde veya toplu matbaa siparişlerinde. Tekniker / Biyomedikal / RGS HEK Hurda Arşivi ve Çıkış Tutanağı [Sil / HEK & Hurda Tutan"
  },
  {
    "id": "18_tibbi_cihaz_ve_ndk_lisans_envanteri#workflow",
    "title": "Cihaz Yaşam Döngüsü ve İş Akış Şeması (Mermaid) — Tıbbi Cihaz ve NDK Lisans Envanteri",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html#workflow",
    "summary": "Cihaz Yaşam Döngüsü ve İş Akış Şeması (Mermaid) Aşağıdaki şema, tıbbi cihazın sisteme ilk kaydından otomatik kodlamaya, NDK vize erken uyarı alarmlarından HEK hurda arşivine kadar tüm yaşam döngüsünü göstermektedir. flow",
    "headings": [
      "Cihaz Yaşam Döngüsü ve İş Akış Şeması (Mermaid)",
      "Tıbbi Cihaz ve NDK Lisans Envanteri"
    ],
    "content": "Cihaz Yaşam Döngüsü ve İş Akış Şeması (Mermaid) Aşağıdaki şema, tıbbi cihazın sisteme ilk kaydından otomatik kodlamaya, NDK vize erken uyarı alarmlarından HEK hurda arşivine kadar tüm yaşam döngüsünü göstermektedir. flowchart TD A[\"Tıbbi Cihaz Envanter Ekranı\"] --> B[\"[Yeni Cihaz] Butonu\"] B --> C[\"1. Genel Künye: Kaynak Grubu + Birim + Tür Seçimi\"] C --> D[\"Akıllı Cihaz Kodu Otomatik Üretilir (Kilitli)\"] D --> E[\"Seri No, Demirbaş No ve Tüp No Girişi\"] E --> F[\"2. NDK Lisans ve RKS Sorumluları\"] F --> G{\"Kaynak Radyasyonlu mu?\"} G -- \"Evet\" --> H[\"NDK Lisans No / Başvuru Aşamasında\"] G -- \"Hayır (MR/USG)\" --> I[\"Lisans Muaf\"] H --> J[\"3. Garanti ve Bakım Sözleşmesi Süreleri\"] I --> J J --> K[\"4. Kat Planı: Mimari Krokiye Cihaz Pini Yerleştirme & Kilitleme\"] K --> L[\"5. Kılavuzlar ve Belgeler: AES-256 Şifreli Evrak Kasasına Yükleme\"] L --> M[\"[Cihazı Kaydet] Butonu\"] M --> N[\"NDK Lisans Vize Takip Motoru\"] N --> O{\"Kalan Lisans Süresi\"} O -- \"> 60 Gün\" --> P[\"Yeşil Rozet: Vize Güvende\"] O -- \"180 - 46 Gün\" --> Q[\"Erken Uyarı Süreci Devrede\"] O -- \"45 - 31 Gün\" --> R[\"Sarı Rozet: Süresi Yaklaşıyor Alarmı\"] O -- \"30 - 0 Gün\" --> S[\"Turuncu Rozet: Kritik Eşik Alarmı\"] O -- \" T[\"Kırmızı Rozet: Yasal İhlal Uyarısı\"] M --> U[\"[QR Etiket] Basımı\"] U --> V[\"Mobil Web Portal Barkod Tarama & Arıza Bildirimi\"] M --> W[\"Ekonomik Ömrü Dolan Cihaz: [Sil / HEK] Butonu\"] W --> X[\"Hurda Arşivine Kaldırılır (Fiziki Silme Yok)\"] X --> Y[\"[Hurda Tutanağı] Resmi Word (.docx) Çıktısı\"]"
  },
  {
    "id": "18_tibbi_cihaz_ve_ndk_lisans_envanteri#screenshots",
    "title": "Ekran Konumları ve Görsel Rehber — Tıbbi Cihaz ve NDK Lisans Envanteri",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html#screenshots",
    "summary": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Cihaz Yönetimi > Tıbbi Cihaz ve Lisans Envanteri Canlı Envanter & NDK Vize Kokpiti Simülasyon Notu: Bu görseldeki seri numaraları, NDK lisans kodları ve kurum bilgileri te",
    "headings": [
      "Ekran Konumları ve Görsel Rehber",
      "Tıbbi Cihaz ve NDK Lisans Envanteri"
    ],
    "content": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Cihaz Yönetimi > Tıbbi Cihaz ve Lisans Envanteri Canlı Envanter & NDK Vize Kokpiti Simülasyon Notu: Bu görseldeki seri numaraları, NDK lisans kodları ve kurum bilgileri test amaçlı sentetik veridir. ️ Ekran Konumu: Tıbbi Cihaz Envanteri > [Yeni Cihaz / Düzenle] & Kroki Konumlandırma Cihaz Künyesi & Kat Planı Pinleme Simülasyon Notu: Akıllı cihaz kodlama (XRAY-ACL-ANJ-01), NDK lisans/vize bilgileri ve kat planı krokisi üzerinde pin sabitleme ekranı."
  },
  {
    "id": "18_tibbi_cihaz_ve_ndk_lisans_envanteri#step-by-step",
    "title": "Adım Adım Operasyonel Eylem Akışı — Tıbbi Cihaz ve NDK Lisans Envanteri",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html#step-by-step",
    "summary": "Adım Adım Operasyonel Eylem Akışı Adım 1: Yeni Cihaz Künyesi, Hiyerarşik Birim ve Kilitli Akıllı Kodlama Sol ana menüden [Tıbbi Cihaz ve Lisans Envanteri] ekranını açın. Araç çubuğundaki [Yeni Cihaz] butonuna tıklayın. 1",
    "headings": [
      "Adım Adım Operasyonel Eylem Akışı",
      "Tıbbi Cihaz ve NDK Lisans Envanteri"
    ],
    "content": "Adım Adım Operasyonel Eylem Akışı Adım 1: Yeni Cihaz Künyesi, Hiyerarşik Birim ve Kilitli Akıllı Kodlama Sol ana menüden [Tıbbi Cihaz ve Lisans Envanteri] ekranını açın. Araç çubuğundaki [Yeni Cihaz] butonuna tıklayın. 1. Sekmede Kaynak Grubu (X-Ray, Radyasyonsuz, Medikal, Ölçüm), Anabilim Dalı ve bağlı Birim ile Cihaz Türünü seçin. Anabilim Dalı seçildiğinde alt birimler kademeli filtrelenir; sistem sıradaki akıllı Cihaz Kodunu (örn: XRAY-ACL-ANJ-01 ) otomatik üretir ve yetkisiz müdahaleye karşı salt okunur olarak kilitler. Seri No ve kurum Demirbaş No alanlarını doldurun. Adım 2: NDK Lisans Bilgileri ve Sorumluları Belirleme 2. Sekmeye geçin. Radyasyonlu cihazlar için NDK Lisans Numarası ve lisans geçerlilik bitiş tarihini girin. Henüz resmi ruhsat çıkmamışsa durumu \"Lisans Başvuru Aşamasında\" olarak işaretleyin. Kurumdaki sertifikalı uzmanlar arasından RKS Sorumlusu ve klinik Birim Sorumlusu 'nu seçin. Adım 3: Kat Planına Pini Yerleştirme ve Kilitleme 4. Sekmeye (Kat Planı) geçin. Birime ait mimari kroki üzerinde fareyle cihazın bulunduğu odaya tıklayarak veya pini sürükleyerek tam konumunu işaretleyin. Pinin kaymasını önlemek için [Pin Kilitli] butonuna basın. Adım 4: Kılavuzları Şifreli Kasaya Yükleme ve Kaydetme 5. Sekmede cihazın kullanım kılavuzu veya teknik servis şeması dosyasını [Dosya Seç] ile bağlayıp formun altındaki [Cihazı Kaydet] butonuna tıklayın. Cihaz anında canlı envantere işlenir ve erken uyarı motoru devreye girer. Adım 5: QR Etiket Basımı ve HEK Hurda Arşivi Tablodan cihazı seçip üstteki [QR Etiket] butonuyla etiket yazıcısına çıktı gönderin. Cihazın ekonomik ömrü bittiğinde ise [Sil / HEK] butonuyla arşive kaldırın; HEK Arşivi ekranından komisyonun imzalayacağı resmi Word (.docx) Hurda Tutanağını tek tıkla üretin. Adım 6: NDK RSGD-KLV-014 ve KLV-014-EK Radyasyondan Korunma Programı (RKP) Başvuru Sihirbazı Sol ana menüden veya araç çubuğundaki [NDK RKP Sihirbazı] butonuna tıklayın. Açılan 8 adımlı resmi sihirbaz üzerinden: 1. Kuruluş Bilgileri (KB.1) & Yasal Dayanaklar (KB.2): Kurum unvanı, adres, NDK lisans/başvuru numarası ve mevzuat dayanaklarını sistem ayarlarından tek tıkla yükleyin veya düzenleyin. 2. RKS ve Birim Sorumluları (KB.3): Kurumda görevli resmi Radyasyondan Korunma Sorumlusu (RKS) ve klinik birim sorumlularının iletişim ve görev bilgilerini listeleyin. 3. Radyasyon Görevlileri ve Sağlık/Dozimetre Durumu (KB.4): Canlı personel veritabanından radyasyon görevlileri, çalışma koşulları (Koşul A/B), aktif dozimetre türler"
  },
  {
    "id": "18_tibbi_cihaz_ve_ndk_lisans_envanteri#hybrid-platform",
    "title": "Hibrit Platform Matrisi (Masaüstü vs Web Portal) — Tıbbi Cihaz ve NDK Lisans Envanteri",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html#hybrid-platform",
    "summary": "Hibrit Platform Matrisi (Masaüstü vs Web Portal) Masaüstü Uygulaması (Yetkili Yönetim Merkezi) • Yeni cihaz kaydı, teknik künye ve kilitli akıllı kod üretimi. • NDK lisanslama, vize süresi ve RKS/Birim sorumlusu atamalar",
    "headings": [
      "Hibrit Platform Matrisi (Masaüstü vs Web Portal)",
      "Tıbbi Cihaz ve NDK Lisans Envanteri"
    ],
    "content": "Hibrit Platform Matrisi (Masaüstü vs Web Portal) Masaüstü Uygulaması (Yetkili Yönetim Merkezi) • Yeni cihaz kaydı, teknik künye ve kilitli akıllı kod üretimi. • NDK lisanslama, vize süresi ve RKS/Birim sorumlusu atamaları. • Mimari kat planı krokisi üzerinde pin sabitleme ve kilitleme. • AES-256 şifreli evrak kasasına teknik kılavuz yükleme ve indirme. • Excel toplu içe/dışa aktarım ve resmi Word (.docx) HEK Hurda Tutanağı. Web Portalı & Mobil Barkod (Saha Personeli Görünümü) • Kamera ile cihaz QR barkodunu tarayarak cihaz künyesini sahada açma. • Cihazın son Kalite Kontrol (QC) onay ve geçerlilik durumunu teyit etme. • Sahadan arıza bildirimi oluşturma ve arıza sayısını izleme. • Ortam Dozu Kroki Haritasında sabit cihazların oda yerleşimini izleme."
  },
  {
    "id": "18_tibbi_cihaz_ve_ndk_lisans_envanteri#faq",
    "title": "Sıkça Sorulan Sorular ve Saha Çözümleri — Tıbbi Cihaz ve NDK Lisans Envanteri",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html#faq",
    "summary": "Sıkça Sorulan Sorular ve Saha Çözümleri NDK lisans vize sürelerinde erken uyarı alarmları ne zaman devreye girer? NDK resmi yenileme bürokrasisinin ortalama 2-3 ay sürmesi nedeniyle erken uyarı süreci lisans bitimine 6 a",
    "headings": [
      "Sıkça Sorulan Sorular ve Saha Çözümleri",
      "Tıbbi Cihaz ve NDK Lisans Envanteri"
    ],
    "content": "Sıkça Sorulan Sorular ve Saha Çözümleri NDK lisans vize sürelerinde erken uyarı alarmları ne zaman devreye girer? NDK resmi yenileme bürokrasisinin ortalama 2-3 ay sürmesi nedeniyle erken uyarı süreci lisans bitimine 6 ay (180 gün) kala başlar. Arayüzde gereksiz bilgi kalabalığını önlemek amacıyla, lisans bitimine 180 günden fazla süre bulunan cihazlarda gün sayacı gizlenerek yalnızca sade Geçerli rozeti sunulur; kalan süre 180 gün ve altına indiğinde gün sayacı otomatik olarak görünür hale gelir. Vize süresine 45 gün kala sistem \"Süresi Yaklaşıyor\" sarı alarmı verir. Kalan gün 30 gün ve altına indiğinde ise acil başvuru gerektiren \"Kritik Eşik\" turuncu alarmı devreye girer. Süresi dolan cihazlar ise kırmızı renkle işaretlenerek yöneticiye raporlanır. Cihaz kodunu neden kendimiz serbestçe belirleyemiyoruz? RADPYS V4, cihazları arıza, kalite kontrol, dozimetre maruziyeti ve kroki sistemlerine bağlarken benzersiz ve standart bir format ( XRAY-ACL-ANJ-01 gibi) kullanır. Kodun elle düzenlenmesi mükerrer kayıtlara ve ilişkisel veri kopmalarına yol açabileceğinden kilitlenmiştir. Kurum içi demirbaş veya Sağlık Bakanlığı ÇKYS takibi için formdaki Demirbaş No alanı kullanılır. Yeni bir X-Ray cihazı tanımlarken NDK Lisans Numarası girmek şart mıdır? Evet. Mevzuat gereği iyonlaştırıcı radyasyon yayan cihazların sisteme ruhsatsız kaydedilmesine izin verilmez. Ancak cihaz yeni kurulmuş ve ruhsat süreci devam ediyorsa Lisans Durumu kutusundan \"Lisans Başvuru Aşamasında\" seçeneği işaretlenerek yasal süreç kayıt altına alınabilir. MR ve USG gibi radyasyonsuz cihazlarda ise lisans şartı aranmaz. Yanlışlıkla [Sil / HEK] butonuna basılan bir cihaz nasıl kurtarılır? Sistem cihazları fiziksel olarak silmediği için hiçbir veri kaybolmaz. Üst menüden HEK ve Hizmet Dışı Cihaz Arşivi ekranını açın. Listeden ilgili cihazı seçip [Tekrar Aktif Statüsüne Al] butonuna tıklayın. Cihaz anında tüm geçmiş kayıtlarıyla birlikte ana aktif envanter tablosuna geri döner. Cihaz Türü veya Cihaz Amacı tanımı sistemden kaldırıldığında mevcut cihazlar bozulur mu? Hayır, hiçbir cihaz kaydı bozulmaz. Sistemde tanımlı bir Cihaz Türü, Amacı veya Kaynak Türü silinmek istendiğinde; eğer o tanıma bağlı tek bir cihaz dahi varsa sistem ilişkisel veri bütünlüğünü korumak adına tanımı fiziksel olarak silmez, güvenle Pasife alır. Böylece o kategoriye bağlı geçmiş tüm cihaz kayıtları, lisanslar, kalite kontroller ve servis geçmişi eksiksiz korunur; tanım yalnızca yeni cihaz ekleme sihirbazındaki açılır kutular"
  },
  {
    "id": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc",
    "title": "Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)",
    "category": "5. Cihaz, Kalite (QC) & RKE",
    "url": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html",
    "summary": "Radyoloji departmanındaki tüm tıbbi cihazların teknik arıza ve onarım süreçlerini, ihale şartnamelerine dayalı Aylık Bakım Radarı ile planlanan periyodik bakım takvimlerini ve 4 adımlı modern sihirbaz üzerinden yürütülen Kalite Kontrol (QC) / kalibrasyon testl",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Arıza, Bakım ve Kalite Kontrol Yaşam Döngüsü",
      "Ekran Konumları ve Görsel Rehber",
      "Adım Adım Operasyonel Eylem Akışı",
      "Hibrit Platform Matrisi (Masaüstü vs Web Portal)",
      "Masaüstü Uygulaması (Yetkili Yönetim Merkezi)",
      "Web Portalı & Mobil Barkod (Saha Teknisyen Görünümü)",
      "Hata Mesajları ve Sorun Giderme Rehberi",
      "Sıkça Sorulan Sorular ve Saha Çözümleri"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 5: Tıbbi Cihaz & RKE 19. Cihaz Arıza & QA/QC Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC) NDK & SKS 6.1 Uyumlu Tahmini Okuma: 5 Dakika Radyoloji departmanındaki tüm tıbbi cihazların teknik arıza ve onarım süreçlerini, ihale şartnamelerine dayalı Aylık Bakım Radarı ile planlanan periyodik bakım takvimlerini ve 4 adımlı modern sihirbaz üzerinden yürütülen Kalite Kontrol (QC) / kalibrasyon testlerini yöneten entegre karar destek merkezidir. Yasal & Operasyonel Güvence: NDK Radyasyon Güvenliği Yönetmeliği gereği olumsuz QC testlerinde otomatik karantina emniyet kilidi uygulanır; ihale bakım randevuları proaktif izlenerek son dakika cihaz kapatma sürprizleri önlenir. Hızlı Reçete: İhale Bakım Takvimi Oluşturma ve Bakım Kapatma 20 SANİYELİK AKIŞ 1. İstenen Sonuç Radyoloji cihazının ihale sözleşmesi sonuna kadar olan tüm periyodik bakım aylarının önceden belirlenmesi ve bakım günü geldiğinde ıslak imzalı servis formuyla kapatılması. 2. Yapılacak İşlem [Periyodik Bakım Yönetimi] ekranından [İhale Bakım Takvimi Planla] butonuna tıklayın. Cihazı, ilk bakım tarihini, sözleşme bitişini ve periyodu (1, 3, 6 veya 12 Ay) seçip takvimi oluşturun. Bakım yapıldığında [Bakımı Tamamla] ile servis formu PDF'ini yükleyin. 3. Sistem Etkisi & Güvence Sözleşme bitimine kadar tüm randevu slotları otomatik olarak takvime işlenir. Aylık radar kartlarında yaklaşan veya geciken bakımlar anında görülür; servis formları KVKK kasasında şifrelenir. İhale Periyodu 1, 3, 6, 12 Ay Yetkili Rol Klinik Amiri / Fizikçi QC Güvenlik Durumu Otomatik Karantina Platform Masaüstü + Web / QR Kritik Sahada Yanlış Bilinen Kural (Mit Avcısı) Yanlış Algı: \"Cihaz bakımları arıza çıktığında veya yetkili servis ansızın hastaneye geldiğinde sisteme işlenir; radyolojinin bunu önceden takip etmesine gerek yoktur.\" Gerçek Sistem Mantığı: Periyodik bakım ve arıza tamamen ayrı süreçlerdir. Radyoloji cihazlarının bakımı ihale şartnamesine bağlıdır. Sistem, sözleşme bitimine kadar tüm bakım dönemlerini takvime Beklemede olarak önceden işler; böylece klinik bakım dönemini önceden bilir ve servisin son dakika *\"bugün cihazı kapatıyoruz\"* sürprizleri engellenir. 5N1K Kural ve Ayar Çözümleme Tablosu Arıza ve onarım, periyodik bakım radarı ve kalite kontrol sihirbazının operasyonel kuralları. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Yeni Arıza Bildirimi [Yeni Arıza Bildir Butonu] Cihazın bozulduğunu sisteme işleyip hasta çekimlerini durdurmak. Cihaz seçilir, aciliyet ve arıza tanımı girilir. Cihaz genel listede otomatik olarak 'Arızalı' statüsüne geçer. Cihazda fiziksel veya yazılımsal arıza çıktığında. Tekniker / Hekim Arızayı Çözümleme ve Kapatma [Seçili Arızayı Çöz Butonu] Teknik servis müdahalesini belgeleyip cihazı tekrar hizmete açmak veya test aşamasına almak. Çözüm açıklaması, servis firması ve değişen parçalar kaydedilir. Cihaz doğrudan 'Aktif' statüsüne döndürülebileceği gibi, klinik doğrulama süresince 'Test Aşamasında' ara durumunda tutularak hasta güvenliği garantiye alınabilir. Yetkili servis arızayı giderip test sürecini başlattığında veya bitirdiğinde. Biyomedikal / RGS X-Işını Tüp Değişimi Onayı [X-Işını Tüp Değişimi Var Kutusu] Cihazın ana radyasyon jeneratörünü güncellemek ve NDK lisansına esas künyeyi yenilemek. Yeni tüp seri no ve tüp modeli girilir. Sistem cihaz künyesindeki aktif tüpü otomatik günceller. Tüp arızasında veya ömrü bittiğinde yenisi takıldığında. Biyomedikal / RGS Aylık Bakım Radarı Sayaçları [Bu Ay / Gelecek Ay / Geciken Kartları] Radyolojinin bakım aylarını önceden bilmesini sağlayıp son dakika servis sürprizlerini engellemek. Bu ay planlananlar, gelecek ayın yoğunluğu ve geciken bakımlar renkli rozetlerle canlı olarak hesaplanır. Periyodik Bakım sayfası her açıldığında. Radyoloji Sorumlusu İhale Bakım Takvimi Planlama [İhale Bakım Takvimi Planla Butonu] İhale şartnamesine göre sözleşme sonuna kadar bakım randevu slotlarını tek tıkla üretmek. Cihaz, ilk bakım tarihi, sözleşme bitişi ve periyot (1, 3, 6, 12 ay) seçilir; sistem tüm randevuları 'Beklemede' olarak takvime işler. Yıllık bakım ihalesi/sözleşmesi tamamlandığında. Klinik Amiri / Biyomedikal Bakımı Tamamla & Servis Formu [Bakımı Tamamla Butonu] Yapılan periyodik bakımı imzalı servis raporuyla kapatmak ve KVKK kasasında saklamak. Gerçekleşen tarih, refakat eden personel, teknisyen ve taranmış servis formu (PDF) seçilir. Belge şifrelenir ve durum 'Tamamlandı' olur. Yetkili servis bakımı bitirip servis formunu imzalattığında. Tekniker / RKS 4 Adımlı QC Sihirbazı [Yeni QC Kaydı / Adımlı Stepper] Kalite kontrol ve kalibrasyon ölçümlerini karmaşadan uzak, 4 adımlı akışla hatasız girmek. 1. Cihaz/Protokol 2. Ekipman/Ekip 3. Canlı Ölçümler 4. Değerlendirme & Onay adımlarıyla ilerlenir. Periyodik kalite kontrol veya kalibrasyon yapıldığında. Medikal Fizik Uzmanı Canlı Ölçüm Tablosu Tek Tık Girişi [Canlı Ölçümler Tablo Hücresi] Ölçüm değerlerini çift tıklama veya F2 engeli olmadan akıcı girmek. Hücreye tek tıkla dokunulduğunda doğrudan sayısal değer girilebilir; tabular font ile sütunlar hizalanır. Ölçüm tablosu doldurulurken. Medikal Fizik Uzmanı QC Başarısızlık Karantina Kilidi [Güvenlik Uyarısı Onayı] Standart dışı radyasyon yayan veya kalibrasyonu bozuk cihazın kullanımını engellemek. Sonuç 'Uygun Değil' kaydedildiğinde güvenlik uyarısı açılır; onaylandığında cihaz otomatik 'Arızalı' statüsüne kilitlenir. QC sonucu olumsuz kaydedildiğinde. Medikal Fizikçi / Sistem Arıza, Bakım ve Kalite Kontrol Yaşam Döngüsü Aşağıdaki şema; arıza bildirimi ve parça değişimini, ihale şartnamesine dayalı periyodik bakım döngüsünü ve 4 adımlı QC ölçüm sürecini özetlemektedir. flowchart TB subgraph S1[\"1. Arıza ve Onarım Döngüsü\"] A[\"Arıza Tespit Edilir\"] --> B[\"[Yeni Arıza Bildir]\"] B --> C[\"Cihaz Durumu: 'Arızalı'\"] C --> D[\"Teknik Servis Müdahalesi\"] D --> E{\"Tüp Değişimi Var mı?\"} E -- \"Evet\" --> F[\"Yeni Tüp Seri No Künyeye İşlenir\"] E -- \"Hayır\" --> G[\"Standart Parça Değişimi\"] F --> H[\"Cihaz Durumu: 'Aktif'\"] G "
  },
  {
    "id": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc#matrix-5n1k",
    "title": "5N1K Kural ve Ayar Çözümleme Tablosu — Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html#matrix-5n1k",
    "summary": "5N1K Kural ve Ayar Çözümleme Tablosu Arıza ve onarım, periyodik bakım radarı ve kalite kontrol sihirbazının operasyonel kuralları. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Yeni Arıza Bi",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)"
    ],
    "content": "5N1K Kural ve Ayar Çözümleme Tablosu Arıza ve onarım, periyodik bakım radarı ve kalite kontrol sihirbazının operasyonel kuralları. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? KİM? Yeni Arıza Bildirimi [Yeni Arıza Bildir Butonu] Cihazın bozulduğunu sisteme işleyip hasta çekimlerini durdurmak. Cihaz seçilir, aciliyet ve arıza tanımı girilir. Cihaz genel listede otomatik olarak 'Arızalı' statüsüne geçer. Cihazda fiziksel veya yazılımsal arıza çıktığında. Tekniker / Hekim Arızayı Çözümleme ve Kapatma [Seçili Arızayı Çöz Butonu] Teknik servis müdahalesini belgeleyip cihazı tekrar hizmete açmak veya test aşamasına almak. Çözüm açıklaması, servis firması ve değişen parçalar kaydedilir. Cihaz doğrudan 'Aktif' statüsüne döndürülebileceği gibi, klinik doğrulama süresince 'Test Aşamasında' ara durumunda tutularak hasta güvenliği garantiye alınabilir. Yetkili servis arızayı giderip test sürecini başlattığında veya bitirdiğinde. Biyomedikal / RGS X-Işını Tüp Değişimi Onayı [X-Işını Tüp Değişimi Var Kutusu] Cihazın ana radyasyon jeneratörünü güncellemek ve NDK lisansına esas künyeyi yenilemek. Yeni tüp seri no ve tüp modeli girilir. Sistem cihaz künyesindeki aktif tüpü otomatik günceller. Tüp arızasında veya ömrü bittiğinde yenisi takıldığında. Biyomedikal / RGS Aylık Bakım Radarı Sayaçları [Bu Ay / Gelecek Ay / Geciken Kartları] Radyolojinin bakım aylarını önceden bilmesini sağlayıp son dakika servis sürprizlerini engellemek. Bu ay planlananlar, gelecek ayın yoğunluğu ve geciken bakımlar renkli rozetlerle canlı olarak hesaplanır. Periyodik Bakım sayfası her açıldığında. Radyoloji Sorumlusu İhale Bakım Takvimi Planlama [İhale Bakım Takvimi Planla Butonu] İhale şartnamesine göre sözleşme sonuna kadar bakım randevu slotlarını tek tıkla üretmek. Cihaz, ilk bakım tarihi, sözleşme bitişi ve periyot (1, 3, 6, 12 ay) seçilir; sistem tüm randevuları 'Beklemede' olarak takvime işler. Yıllık bakım ihalesi/sözleşmesi tamamlandığında. Klinik Amiri / Biyomedikal Bakımı Tamamla & Servis Formu [Bakımı Tamamla Butonu] Yapılan periyodik bakımı imzalı servis raporuyla kapatmak ve KVKK kasasında saklamak. Gerçekleşen tarih, refakat eden personel, teknisyen ve taranmış servis formu (PDF) seçilir. Belge şifrelenir ve durum 'Tamamlandı' olur. Yetkili servis bakımı bitirip servis formunu imzalattığında. Tekniker / RKS 4 Adımlı QC Sihirbazı [Yeni QC Kaydı / Adımlı Stepper] Kalite kontrol ve kalibrasyon ölçümlerini karmaşadan uzak, 4 adımlı akışla hatasız girmek. 1. C"
  },
  {
    "id": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc#workflow",
    "title": "Arıza, Bakım ve Kalite Kontrol Yaşam Döngüsü — Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html#workflow",
    "summary": "Arıza, Bakım ve Kalite Kontrol Yaşam Döngüsü Aşağıdaki şema; arıza bildirimi ve parça değişimini, ihale şartnamesine dayalı periyodik bakım döngüsünü ve 4 adımlı QC ölçüm sürecini özetlemektedir. flowchart TB subgraph S1",
    "headings": [
      "Arıza, Bakım ve Kalite Kontrol Yaşam Döngüsü",
      "Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)"
    ],
    "content": "Arıza, Bakım ve Kalite Kontrol Yaşam Döngüsü Aşağıdaki şema; arıza bildirimi ve parça değişimini, ihale şartnamesine dayalı periyodik bakım döngüsünü ve 4 adımlı QC ölçüm sürecini özetlemektedir. flowchart TB subgraph S1[\"1. Arıza ve Onarım Döngüsü\"] A[\"Arıza Tespit Edilir\"] --> B[\"[Yeni Arıza Bildir]\"] B --> C[\"Cihaz Durumu: 'Arızalı'\"] C --> D[\"Teknik Servis Müdahalesi\"] D --> E{\"Tüp Değişimi Var mı?\"} E -- \"Evet\" --> F[\"Yeni Tüp Seri No Künyeye İşlenir\"] E -- \"Hayır\" --> G[\"Standart Parça Değişimi\"] F --> H[\"Cihaz Durumu: 'Aktif'\"] G --> H end subgraph S2[\"2. İhale Bakım Takvimi & Aylık Radar\"] I[\"Yıllık İhale Şartnamesi\"] --> J[\"[İhale Bakım Takvimi Planla]\"] J --> K[\"Periyot Seçilir: 1, 3, 6 veya 12 Ay\"] K --> L[\"Sözleşme Sonuna Kadar Slotlar Üretilir: 'Beklemede'\"] L --> M[\"Aylık Bakım Radarı: Bu Ay / Gelecek Ay / Geciken\"] M --> N[\"Firma Gelir: Bakım Gerçekleşir\"] N --> O[\"[Bakımı Tamamla] + İmzalı Servis Formu (PDF)\"] O --> P[\"KVKK Kasasına Şifreli Arşivlenir & 'Tamamlandı'\"] end subgraph S3[\"3. 4 Adımlı QC Sihirbazı & Emniyet Kilidi\"] Q[\"Periyodik QC Zamanı\"] --> R[\"[Yeni QC Kaydı] Sihirbazı\"] R --> S[\"Adım 1-2: Cihaz, Protokol & Ekipman\"] S --> T[\"Adım 3: Canlı Ölçümler (Tek Tıkla Giriş)\"] T --> U[\"Adım 4: Değerlendirme & Onay\"] U --> V{\"Test Sonucu Uygun mu?\"} V -- \"Uygun\" --> W[\"Geçerlilik Takvimi Başlar (12 Ay)\"] V -- \"Uygun Değil\" --> X[\"Güvenlik Kilidi: Cihazı 'Arızalı'ya Al ve Kilitle\"] end 1. Arıza & Künye Güvencesi Arıza anında hasta alımı durdurulur; X-ışını tüpü değiştiğinde seri numarası anında künyeye senkronize edilir. 2. Proaktif Bakım Radarı Radyoloji kliniği bakım aylarını önceden bilir; firmanın son dakika *\"bugün cihazı kapatıyoruz\"* sürprizleri önlenir. 3. Negatif QC Emniyet Kilidi Doz veya sızıntı ölçümünde olumsuz sonuç tespit edildiğinde cihaz anında kullanıma kapatılarak karantinaya alınır."
  },
  {
    "id": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc#screenshots",
    "title": "Ekran Konumları ve Görsel Rehber — Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html#screenshots",
    "summary": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Cihaz Yönetimi > Cihaz Arıza ve Onarım Takibi Arıza Bildirim & Onarım Kokpiti Simülasyon Notu: Açık arıza takibi, MTBF/MTTR metrikleri, servis müdahale kayıtları ve X-ışın",
    "headings": [
      "Ekran Konumları ve Görsel Rehber",
      "Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)"
    ],
    "content": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Cihaz Yönetimi > Cihaz Arıza ve Onarım Takibi Arıza Bildirim & Onarım Kokpiti Simülasyon Notu: Açık arıza takibi, MTBF/MTTR metrikleri, servis müdahale kayıtları ve X-ışını tüp değişimi izleme ekranı. ️ Ekran Konumu: Cihaz Arıza ve Onarım Takibi > [Yeni Arıza Bildir / Arızayı Çöz] Arıza Kayıt & Çözüm Diyaloğu Simülasyon Notu: Arıza aciliyet seviyesi, klinik duruş süresi ve onarım sonrası test/doğrulama statüsü yönetimi. ️ Ekran Konumu: Cihaz Yönetimi > Periyodik Bakım Yönetimi Aylık Bakım Radarı & İhale Takvimi Simülasyon Notu: İhale şartnamesine göre otomatik planlanan periyodik bakım takvimi ve geciken bakım uyarıları. ️ Ekran Konumu: Periyodik Bakım Yönetimi > [İhale Bakım Takvimi Planla / Bakımı Tamamla] Bakım Planlama & Servis Formu Kasası Simülasyon Notu: Sözleşme bitiş tarihine kadar otomatik bakım slotu üretimi ve ıslak imzalı servis formu (PDF) arşivleme. ️ Ekran Konumu: Cihaz Yönetimi > Cihaz Kalite Kontrol (QC) Kokpiti QC Kalibrasyon & Fantom Test Listesi Simülasyon Notu: Medikal fizik kVp, mAs, doz tekrarlanabilirliği ve görüntü kalitesi (QC) test sonuçları ana listesi. ️ Ekran Konumu: Cihaz QC Kokpiti > [Yeni QC Kaydı] 4 Adımlı Sihirbaz 4 Adımlı RDS QC Ölçüm Sihirbazı Simülasyon Notu: Canlı ölçüm girişi, otomatik sapma/tolerans kontrolü ve tolerans aşımında otomatik karantina kilidi."
  },
  {
    "id": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc#step-by-step",
    "title": "Adım Adım Operasyonel Eylem Akışı — Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html#step-by-step",
    "summary": "Adım Adım Operasyonel Eylem Akışı Bölüm 1: Cihaz Arızası Bildirme ve Onarımı Kapatma [Cihaz Yönetimi] menüsünden [Cihaz Arıza ve Onarım Takibi] ekranını açın. Sol üstteki [Yeni Arıza Bildir] butonuna tıklayın. Açılan for",
    "headings": [
      "Adım Adım Operasyonel Eylem Akışı",
      "Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)"
    ],
    "content": "Adım Adım Operasyonel Eylem Akışı Bölüm 1: Cihaz Arızası Bildirme ve Onarımı Kapatma [Cihaz Yönetimi] menüsünden [Cihaz Arıza ve Onarım Takibi] ekranını açın. Sol üstteki [Yeni Arıza Bildir] butonuna tıklayın. Açılan formda arızalanan tıbbi cihazı seçin, aciliyet derecesini ve arıza tanımını girip [Kaydet] butonuna basın. Cihaz anında listede kırmızı 'Arızalı' olarak işaretlenir. Yetkili servis arızayı giderdiğinde ilgili satırı seçip [Seçili Arızayı Çöz] butonuyla yapılan müdahaleyi kaydedin. Parça değişimi veya onarım sonrası klinik doğrulama/fantom testleri yürütülürken cihazı 'Test Aşamasında' ara statüsünde tutarak hasta çekimini güvenle bekletebilir, testler başarıyla bittiğinde tek tıkla arızayı tamamen kapatıp cihazı 'Aktif' kılabilirsiniz. Eğer X-ışını tüpü değişmişse onay kutusunu işaretleyip yeni tüp seri numarasını işleyin. Bölüm 2: İhale Şartnamesine Göre Bakım Takvimi Oluşturma ve Kapatma [Cihaz Yönetimi] menüsünden [Periyodik Bakım Yönetimi] ekranına geçin. Üstteki [İhale Bakım Takvimi Planla] butonuna tıklayın. Cihazı, ilk bakım tarihini, sözleşme bitiş tarihini ve ihale şartnamesinde yer alan bakım periyodunu (1, 3, 6 veya 12 Ay) seçin. Sistem sözleşme sonuna kadar tüm bakım tarihlerini otomatik hesaplar ve takvime 'Beklemede' olarak işler. Bakım günü gelip servis işlemi tamamlandığında satırı seçip [Bakımı Tamamla] butonuna basın; refakat eden personeli, servis teknisyenini seçip taranmış ıslak imzalı Servis Formu (PDF) belgesini ekleyin. Bölüm 3: 4 Adımlı QC Sihirbazı ile Canlı Ölçüm ve Kalibrasyon Kaydı [Cihaz Yönetimi] menüsünden [Cihaz QC Kokpiti] ekranını açın ve [Yeni QC Kaydı] butonuna tıklayın. Karşınıza 4 adımlı modern sihirbaz gelir: 1. Cihaz & Protokol: Cihazı ve uygulanacak test protokolünü (Üretici, Türkak, NDK, DIN) belirleyin. 2. Ekipman & Ekip: Testte kullanılan kalibratör/fantom ekipmanlarını ve ölçümü yürüten medikal fizikçiyi seçin. 3. Canlı Ölçümler: Doz doğruluğu, tekrarlanabilirlik ve sızıntı tablosundaki hücrelere tek tıkla dokunarak ölçülen değerleri girin. 4. Değerlendirme & Onay: Sistem tolerans analizini anında yapar; genel sonucu (Uygun / Şartlı / Uygun Değil) onaylayın. Sonuç uygunsuz ise sistem cihazı otomatik olarak arızalıya alıp kilitler."
  },
  {
    "id": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc#hybrid-platform",
    "title": "Hibrit Platform Matrisi (Masaüstü vs Web Portal) — Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html#hybrid-platform",
    "summary": "Hibrit Platform Matrisi (Masaüstü vs Web Portal) Masaüstü Uygulaması (Yetkili Yönetim Merkezi) • Yeni arıza bildirimleri ve X-ışını tüp değişim onayı ile künye senkronizasyonu. • Aylık Bakım Radarı (Bu Ay, Gelecek Ay, Ge",
    "headings": [
      "Hibrit Platform Matrisi (Masaüstü vs Web Portal)",
      "Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)"
    ],
    "content": "Hibrit Platform Matrisi (Masaüstü vs Web Portal) Masaüstü Uygulaması (Yetkili Yönetim Merkezi) • Yeni arıza bildirimleri ve X-ışını tüp değişim onayı ile künye senkronizasyonu. • Aylık Bakım Radarı (Bu Ay, Gelecek Ay, Gecikenler, Tamamlananlar) canlı izleme. • İhale şartnamesine göre 1/3/6/12 aylık periyotlarla sözleşme takvimi üretme. • 4 adımlı QC sihirbazı üzerinden canlı ölçüm girişi ve negatif QC karantina kilidi. • AES-256 Fernet şifreli evrak kasasına PDF servis formu ve QC raporu bağlama. Web Portalı & Mobil Barkod (Saha Teknisyen Görünümü) • Cihaz üzerindeki QR etiketi tarayarak arıza bildirim formunu sahada anında açma. • Cihazın son QC test durumunu ve geçerlilik süresini yeşil/sarı/kırmızı rozetle doğrulama. • Açık arıza listesi takibi ve mobil teknisyen servis müdahale kapatma formu. • Saha denetimlerinde cihaza ait son test tutanağını mobilde görüntüleme."
  },
  {
    "id": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc#troubleshooting",
    "title": "Hata Mesajları ve Sorun Giderme Rehberi — Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html#troubleshooting",
    "summary": "Hata Mesajları ve Sorun Giderme Rehberi Hata / Uyarı Mesajı Olası Neden Çözüm Adımı \"İlk bakım tarihi sözleşme bitiş tarihinden sonra olamaz!\" Bakım planlama penceresinde ilk bakım tarihi bitiş tarihinden ileri seçildiği",
    "headings": [
      "Hata Mesajları ve Sorun Giderme Rehberi",
      "Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)"
    ],
    "content": "Hata Mesajları ve Sorun Giderme Rehberi Hata / Uyarı Mesajı Olası Neden Çözüm Adımı \"İlk bakım tarihi sözleşme bitiş tarihinden sonra olamaz!\" Bakım planlama penceresinde ilk bakım tarihi bitiş tarihinden ileri seçildiğinde. İlk bakım tarihini sözleşme başlangıç/ihale tarihine uygun şekilde geriye çekiniz. \"Lütfen arıza tanımını giriniz.\" Arıza açıklama kutusu doldurulmadan kaydet butonuna basıldığında. Cihazda görülen arıza belirtisini en az birkaç kelimeyle özetleyiniz. \"Tüp değişimi seçildi ancak yeni tüp seri numarası girilmedi.\" Tüp değişimi kutusu işaretlenip seri no alanı boş bırakıldığında. Servis tutanağındaki yeni X-ışını tüpünün seri numarasını yazınız. \"Bu kayda ait şifreli servis formu kasada bulunamadı.\" Bakım kapatılırken PDF servis formu yüklenmediğinde veya dosya seçilmediğinde. Bakım kaydını açıp imzalı servis formunu [Servis Formu Seç] ile tekrar yükleyiniz."
  },
  {
    "id": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc#faq",
    "title": "Sıkça Sorulan Sorular ve Saha Çözümleri — Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html#faq",
    "summary": "Sıkça Sorulan Sorular ve Saha Çözümleri Periyodik bakım modülünün radyoloji kliniği için temel faydası nedir? RADPYS'de periyodik bakım modülü, karmaşık bir atölye veya parça stok sistemi değildir. Amaç, radyoloji kliniğ",
    "headings": [
      "Sıkça Sorulan Sorular ve Saha Çözümleri",
      "Cihaz Arıza, Periyodik Bakım ve Kalite Kontrol (QC)"
    ],
    "content": "Sıkça Sorulan Sorular ve Saha Çözümleri Periyodik bakım modülünün radyoloji kliniği için temel faydası nedir? RADPYS'de periyodik bakım modülü, karmaşık bir atölye veya parça stok sistemi değildir. Amaç, radyoloji kliniğinin kendi cihazlarının bakım dönemlerini önceden bilmesi; unutulan bakımları ve servis firması veya biyomedikal ekibinin son dakika *\"bugün bakım var, cihazı 4 saat kapatıyoruz\"* sürprizlerini tamamen önlemektir. Bu sayede hasta randevuları bakım dönemlerine göre önceden ayarlanır. İhale şartnamesine göre bakım periyotları nasıl çalışır? Hastanelerde cihaz bakımları 1, 3, 6 veya 12 aylık periyotlarla ihale edilir. Planlama sihirbazında cihaz, ilk bakım tarihi ve sözleşme bitiş tarihi seçildiğinde, sistem sözleşme bitimine kadar olan tüm bakım randevu tarihlerini otomatik hesaplar ve takvime tek seferde \"Beklemede\" olarak kaydeder. QC ölçüm tablosunda hücreye sayısal değer nasıl girilir? Yeni sihirbaz yapısında ölçüm tablosu veri girişine tamamen açıktır. İlgili ölçüm hücresine (Doz, Gerilim, Sızıntı vb.) tek bir tıklama yapıldığında hücre doğrudan düzenleme moduna geçer ve klavyeden ölçüm değeri kesintisiz yazılabilir. Çift tıklama veya F2 zorunluluğu kaldırılmıştır. X-Işını tüpü değiştiğinde NDK lisansı için ne yapılmalıdır? X-ışını tüpü radyasyon kaynağının ana jeneratörüdür. Sistemde tüp değişimi kaydedildiğinde cihaz künyesindeki güncel tüp seri numarası otomatik yenilenir. NDK Radyasyon Güvenliği Mevzuatı uyarınca tüp değişimi lisans tadili/revizyonu gerektirebileceğinden işlem tamamlandığında RKS birimi derhal NDK sistemine resmi bildirimde bulunmalıdır."
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857",
    "title": "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html",
    "summary": "Radyoloji, nükleer tıp, kardiyoloji ve skopi ameliyathanelerinde kullanılan kurşun önlük, palto, etek-yelek, tiroid ve gonad koruyucularının yaşam döngüsünü, akıllı kodlamasını, fiziksel kontrollerini, skopi altındaki interaktif delik/çatlak krokisini, matemat",
    "headings": [
      "Vizyonder Hızlı Operasyon Reçetesi (20 Saniye Kuralı)",
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Klinik Radyasyon Güvenliği & Mit Avcısı (Kritik Kurallar)",
      "Tek Ekranda Bütünleşik Muayene ve Karar İş Akış Şeması",
      "DIN 6857-1 / IEC 61331 Karar Motoru & Eşik Değerleri",
      "Toplu Muayene Kokpiti & Zimmet Güvenlik Kilidi",
      "1 Toplu Kalite Kontrol Kokpiti ([Toplu Muayene])",
      "2 Hurda Devir Güvenlik Kilidi ([Zimmet Transfer])",
      "Karekod (QR) Pasaport Etiketi & Mobil Saha Muayenesi",
      "Her Önlüğe Benzersiz Dijital Pasaport",
      "Arayüz Rehberi & Ekran Görünümleri",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 5: Tıbbi Cihaz & RKE 20. Koruyucu Ekipman (RKE) DIN 6857-1 & IEC 61331-1/3 Standardı Sağlık Bakanlığı SKS 6.1 Uyumlu AES-256 Şifreli Evrak Kasası Okuma Süresi: 6 Dakika | RADPYS v4.2 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi Radyoloji, nükleer tıp, kardiyoloji ve skopi ameliyathanelerinde kullanılan kurşun önlük, palto, etek-yelek, tiroid ve gonad koruyucularının yaşam döngüsünü, akıllı kodlamasını, fiziksel kontrollerini, skopi altındaki interaktif delik/çatlak krokisini, matematiksel karar motorunu ve Sağlık Bakanlığı SKS 6.1 resmi denetim çizelgelerini yönetin. Vizyonder Hızlı Operasyon Reçetesi (20 Saniye Kuralı) Teknik destek aramadan periyodik muayene sonucunu belirleme ve onaylama formülü Operasyonel Kısayol İstenen Sonuç Kurşun önlüğün yıllık kontrolünü DIN 6857-1 standardına uygun olarak kesinleştirmek ve SKS çizelgesine işlemek. Yapılacak İşlem Tablodan ekipmanı seçin [Muayene Yap] butonuna basın Bütünleşik Kokpitte sol taraftaki dokunmatik krokiye tıklayarak kusurları pinleyin, sağ taraftaki 5 rutin fiziki kriteri onaylayın veya ekipman kusursuzsa doğrudan [1-Tıkla Kusursuz / Uygun Onayla] butonuna basın. Sistem Etkisi & Güvence Sistem hasar alanını otomatik hesaplar; kritik bölgede delik yoksa ve toplam alan 5{mm}^2 ise geçerlilik süresini 1 yıl uzatır. Hurda veya kayıp önlüklerin zimmet transferini güvenlik kilidiyle engeller. Yasal Standart DIN 6857 / IEC 61331 Yetkili Rol Medikal Fizikçi & RKS Rutin Muayene Takvimi 12 Ay (Yıllık Döngü) Saha & Platform ️ Kokpit & QR Pasaport 5N1K Kural ve Ayar Çözümleme Tablosu Aşağıdaki tablo, koruyucu donanım yönetiminde kullanılan tüm operasyonel fonksiyonları, kısıtları, formülleri ve yetki sınırlarını teknik kod karmaşası olmaksızın açıklar: NE? (Ayar & Ekran Bileşeni) NEDEN? (Gerekçe & Amaç) NASIL? (Çalışma Mantığı & Formül) NE ZAMAN? (Tetiklenme Anı) KİM? (Yetkili Rol) [Yeni Ekipman] Ana Toolbar Butonu Yeni satın alınan koruyucu önlük veya donanımı envantere işlemek. Tip, klinik departman, ön/arka kurşun eşdeğeri, beden ve marka seçilir. Sistem benzersiz kod üretir. Klinik tesliminde veya ilk kabulde. Medikal Fizikçi, RKS Akıllı Kod Önerisi Otomatik Format Departman ve tip bazında mükerrersiz standart künye oluşturmak. RKE-[KISA_KOD]-[DEPT]-[SIRA] şablonu (Örn: RKE-Ö-RAD-001 ). Tip veya departman kutusu değiştirildiğinde. Sistem (Otomatik) [Muayene ve QC] Kalite Kontrol Kokpiti DIN 6857-1 standardına göre yıllık delik, çatlak ve fiziksel kontrol yapmak. Çift modlu ekran açılır; 5 fiziksel kriter kontrol edilir veya dokunmatik SVG krokide delikler işaretlenir. Yıllık periyotta veya şüphe durumunda. Medikal Fizik Uzmanı İnteraktif Kusur Krokisi Dokunmatik SVG Tuvali Skopi görüntüsündeki radyasyon sızıntı noktalarını milimetrik haritalamak. Ön/Arka silüet üzerine tıklanarak delik/çatlak pini konur; çap ($mm$) ve alan ($mm^2$) otomatik hesaplanır. Skopi altında tarama yapılırken. Medikal Fizikçi DIN 6857-1 Karar Motoru Otomatik Yasal Eşikler Hata payını sıfırlamak ve dünya standartlarında yasal karar üretmek. • Kritik Organ: $>0\\text{ mm}^2 \\rightarrow$ HEK / Hurda . • Non-Kritik: $\\le 5\\text{ mm}^2 \\rightarrow$ Uygun , $5-15\\text{ mm}^2 \\rightarrow$ Şartlı , $>15\\text{ mm}^2 \\rightarrow$ HEK . Tuvale her kusur pini eklendiğinde/silindiğinde. Sistem (Otomatik) 10+ Yıl Kullanım Ömrü Uyarısı Ömür & Malzeme Yorulması Eski kurşun katmanların görünmeyen yorulmasına karşı erken uyarı üretmek. Donanım yaşı $\\ge 10$ yıl ise sistem karar rozetinde \"10+ Yıl Ömür Aşımı -> HEK Önerisi\" uyarısı üretir. Muayene formu açıldığında ve kaydedilirken. Sistem (Kurumsal İnisiyatif) [1-Tıkla Kusursuz / Uygun Onayla] Hızlı Muayene Butonu Toplu tarama günlerinde hatasız ekipmanları saniyeler içinde onaylamak. Tüm fiziki kriterleri tam sağlam yapar, kusurları sıfırlar, kararı \"Kullanıma Uygun\" yapıp doğrudan kaydeder. Görsel ve radyolojik kusur bulunmadığında. Medikal Fizikçi, Yetkili Tekniker [Toplu Muayene] Toplu Kalite Kontrol Klinikteki onlarca donanımı tek ekranda seçip toplu muayeneden geçirmek. [Gecikenleri Seç] ile işaretleme yapılır, skopi cihazı ve varsayılan karar seçilip tek işlemle kaydedilir. Yıllık departman taramalarında. Medikal Fizik Uzmanı, RKS [Zimmet Transfer] Birim & Personel Devri Önlüğün zimmetli olduğu personeli veya bağlı olduğu odayı/kliniği değiştirmek. Hedef birim, teslim eden/alan personel ve gerekçe girilir; zimmet hareket kaydı tescil edilir. Personel değişimi veya oda transferinde. Birim Sorumlusu, RKS Hurda Devir Güvenlik Kilidi Emniyet Kilidi Hurdaya ayrılmış, kayıp veya güvensiz önlüklerin personele dağıtılmasını önlemek. Ekipman durumu HEK veya Kayıp ise transfer formu açıldığında uyarı verilir ve kaydet butonu kilitlenir. Geçersiz ekipmana zimmet yapılmak istendiğinde. Sistem (Otomatik Kilit) [QR Etiket] & Toplu Baskı Paketi (.ZIP) [Toplu QR Etiket İhracı] / Sağ Tık Menüsü Önlüğe dikilecek suya dayanıklı dijital kimlik etiketini tekil basmak veya matbaa üretimi için tüm önlük etiketlerini topluca paketlemek. Tekil QR etiketi basılabilir veya üst araç çubuğundaki [Toplu QR Etiket İhracı] ve sağ tık menüsünden seçili/tüm ekipmanlar için 300 DPI ultra net PNG etiketleri, medikal PVC/PET teknik şartnamesi (00_Baski_ve_Uretim_Rehberi.txt) ve icmal fihristi (00_Etiket_Listesi_Icmal.csv) içeren endüstriyel .ZIP paketi olarak ihraç edilir. Yeni kabulde, etiket yıprandığında veya toplu matbaa siparişlerinde. Medikal Fizikçi, Radyoloji Teknikeri, RKS [SKS Çizelgesi] Resmi Excel Raporu Sağlık Bakanlığı SKS 6.1 denetimlerine anında hazır resmi çizelge üretmek. Envanterdeki tüm donanımları, askılık konumlarını, kurşun kalınlıklarını ve son muayene tarihlerini Excel'e döker. SKS denetimlerinde veya yıl sonu raporunda. RKS, Kalite Direktörü RKE Tanımlama Silme Kalkanı [Sil] Butonu (RKE Tanımları) Kullanımda olan bir ekipman türü/kategorisi silindiğinde kayıtlı önlüklerin yetim kalarak SKS denetim izinin kopmasını engellemek. Seçilen RKE tanımına bağlı en az 1 ekipman kaydı varsa siste"
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857#hizli-recete",
    "title": "Vizyonder Hızlı Operasyon Reçetesi (20 Saniye Kuralı) — 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html#hizli-recete",
    "summary": "Vizyonder Hızlı Operasyon Reçetesi (20 Saniye Kuralı) Teknik destek aramadan periyodik muayene sonucunu belirleme ve onaylama formülü Operasyonel Kısayol İstenen Sonuç Kurşun önlüğün yıllık kontrolünü DIN 6857-1 standard",
    "headings": [
      "Vizyonder Hızlı Operasyon Reçetesi (20 Saniye Kuralı)",
      "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi"
    ],
    "content": "Vizyonder Hızlı Operasyon Reçetesi (20 Saniye Kuralı) Teknik destek aramadan periyodik muayene sonucunu belirleme ve onaylama formülü Operasyonel Kısayol İstenen Sonuç Kurşun önlüğün yıllık kontrolünü DIN 6857-1 standardına uygun olarak kesinleştirmek ve SKS çizelgesine işlemek. Yapılacak İşlem Tablodan ekipmanı seçin [Muayene Yap] butonuna basın Bütünleşik Kokpitte sol taraftaki dokunmatik krokiye tıklayarak kusurları pinleyin, sağ taraftaki 5 rutin fiziki kriteri onaylayın veya ekipman kusursuzsa doğrudan [1-Tıkla Kusursuz / Uygun Onayla] butonuna basın. Sistem Etkisi & Güvence Sistem hasar alanını otomatik hesaplar; kritik bölgede delik yoksa ve toplam alan 5{mm}^2 ise geçerlilik süresini 1 yıl uzatır. Hurda veya kayıp önlüklerin zimmet transferini güvenlik kilidiyle engeller. Yasal Standart DIN 6857 / IEC 61331 Yetkili Rol Medikal Fizikçi & RKS Rutin Muayene Takvimi 12 Ay (Yıllık Döngü) Saha & Platform ️ Kokpit & QR Pasaport"
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857#5n1k-tablosu",
    "title": "5N1K Kural ve Ayar Çözümleme Tablosu — 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html#5n1k-tablosu",
    "summary": "5N1K Kural ve Ayar Çözümleme Tablosu Aşağıdaki tablo, koruyucu donanım yönetiminde kullanılan tüm operasyonel fonksiyonları, kısıtları, formülleri ve yetki sınırlarını teknik kod karmaşası olmaksızın açıklar: NE? (Ayar &",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi"
    ],
    "content": "5N1K Kural ve Ayar Çözümleme Tablosu Aşağıdaki tablo, koruyucu donanım yönetiminde kullanılan tüm operasyonel fonksiyonları, kısıtları, formülleri ve yetki sınırlarını teknik kod karmaşası olmaksızın açıklar: NE? (Ayar & Ekran Bileşeni) NEDEN? (Gerekçe & Amaç) NASIL? (Çalışma Mantığı & Formül) NE ZAMAN? (Tetiklenme Anı) KİM? (Yetkili Rol) [Yeni Ekipman] Ana Toolbar Butonu Yeni satın alınan koruyucu önlük veya donanımı envantere işlemek. Tip, klinik departman, ön/arka kurşun eşdeğeri, beden ve marka seçilir. Sistem benzersiz kod üretir. Klinik tesliminde veya ilk kabulde. Medikal Fizikçi, RKS Akıllı Kod Önerisi Otomatik Format Departman ve tip bazında mükerrersiz standart künye oluşturmak. RKE-[KISA_KOD]-[DEPT]-[SIRA] şablonu (Örn: RKE-Ö-RAD-001 ). Tip veya departman kutusu değiştirildiğinde. Sistem (Otomatik) [Muayene ve QC] Kalite Kontrol Kokpiti DIN 6857-1 standardına göre yıllık delik, çatlak ve fiziksel kontrol yapmak. Çift modlu ekran açılır; 5 fiziksel kriter kontrol edilir veya dokunmatik SVG krokide delikler işaretlenir. Yıllık periyotta veya şüphe durumunda. Medikal Fizik Uzmanı İnteraktif Kusur Krokisi Dokunmatik SVG Tuvali Skopi görüntüsündeki radyasyon sızıntı noktalarını milimetrik haritalamak. Ön/Arka silüet üzerine tıklanarak delik/çatlak pini konur; çap ($mm$) ve alan ($mm^2$) otomatik hesaplanır. Skopi altında tarama yapılırken. Medikal Fizikçi DIN 6857-1 Karar Motoru Otomatik Yasal Eşikler Hata payını sıfırlamak ve dünya standartlarında yasal karar üretmek. • Kritik Organ: $>0\\text{ mm}^2 \\rightarrow$ HEK / Hurda . • Non-Kritik: $\\le 5\\text{ mm}^2 \\rightarrow$ Uygun , $5-15\\text{ mm}^2 \\rightarrow$ Şartlı , $>15\\text{ mm}^2 \\rightarrow$ HEK . Tuvale her kusur pini eklendiğinde/silindiğinde. Sistem (Otomatik) 10+ Yıl Kullanım Ömrü Uyarısı Ömür & Malzeme Yorulması Eski kurşun katmanların görünmeyen yorulmasına karşı erken uyarı üretmek. Donanım yaşı $\\ge 10$ yıl ise sistem karar rozetinde \"10+ Yıl Ömür Aşımı -> HEK Önerisi\" uyarısı üretir. Muayene formu açıldığında ve kaydedilirken. Sistem (Kurumsal İnisiyatif) [1-Tıkla Kusursuz / Uygun Onayla] Hızlı Muayene Butonu Toplu tarama günlerinde hatasız ekipmanları saniyeler içinde onaylamak. Tüm fiziki kriterleri tam sağlam yapar, kusurları sıfırlar, kararı \"Kullanıma Uygun\" yapıp doğrudan kaydeder. Görsel ve radyolojik kusur bulunmadığında. Medikal Fizikçi, Yetkili Tekniker [Toplu Muayene] Toplu Kalite Kontrol Klinikteki onlarca donanımı tek ekranda seçip toplu muayeneden geçirmek. [Gecikenleri "
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857#mit-avcilari",
    "title": "Klinik Radyasyon Güvenliği & Mit Avcısı (Kritik Kurallar) — 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html#mit-avcilari",
    "summary": "Klinik Radyasyon Güvenliği & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Önlükte delik yok, dikişleri biraz açılmış ve kurşun katman hafif katlanmış; idare eder, ameliyatta giyilebilir.\" Doğru Yasal Kural: Kurşu",
    "headings": [
      "Klinik Radyasyon Güvenliği & Mit Avcısı (Kritik Kurallar)",
      "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi"
    ],
    "content": "Klinik Radyasyon Güvenliği & Mit Avcısı (Kritik Kurallar) Yaygın Yanılgı (Mit 1) \"Önlükte delik yok, dikişleri biraz açılmış ve kurşun katman hafif katlanmış; idare eder, ameliyatta giyilebilir.\" Doğru Yasal Kural: Kurşun katmandaki blok kayması veya katlanmalar doğrudan korumasız radyasyon sızıntı koridorları açar. DIN 6857-1 standardı uyarınca kurşun blok katlanması veya blok kayması tespit edilen tüm koruyucular derhal HEK / Hurdaya ayrılmalıdır. Yaygın Yanılgı (Mit 2) \"10 yılı dolduran önlükler skopide kusursuz ve deliksiz çıksa bile sistem tarafından zorla çöpe atılır.\" Doğru Klinik Kural: RADPYS'teki 10+ yıl uyarısı uluslararası malzeme yorulması ilkelerine dayalı bir Öneri & Dikkat Uyarısıdır . Skopi testinde deliksiz ve homojen olduğu kanıtlanan önlükler, kurum hekiminin ve medikal fizikçinin onayıyla hassas takip altında kullanılabilir. Yaygın Yanılgı (Mit 3) \"'Şartlı Kullanım' kararı alan önlüğü anjiyoda veya skopi eşliğindeki ortopedi cerrahisinde giyebiliriz.\" Doğru Güvenlik Protokolü: Şartlı donanımlar (5-15 mm² delik veya toka hasarı olanlar) primer ışınlama konisi altında asla kullanılamaz. Bu önlükler yalnızca hasta yakını veya düşük saçılmalı refakatçi işlemlerinde kullanılmak üzere ayrı sarı askılıkta tutulmalıdır."
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857#surec-akisi",
    "title": "Tek Ekranda Bütünleşik Muayene ve Karar İş Akış Şeması — 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html#surec-akisi",
    "summary": "Tek Ekranda Bütünleşik Muayene ve Karar İş Akış Şeması graph TD A[\"RKE Seçimi (Envanter Listesi)\"] --> B[\"Bütünleşik Kalite Kontrol Kokpiti (Tek Ekran)\"] B --> C[\"Sol Panel: Dokunmatik Kroki & Kusur Tablosu\"] B --> D[\"Sa",
    "headings": [
      "Tek Ekranda Bütünleşik Muayene ve Karar İş Akış Şeması",
      "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi"
    ],
    "content": "Tek Ekranda Bütünleşik Muayene ve Karar İş Akış Şeması graph TD A[\"RKE Seçimi (Envanter Listesi)\"] --> B[\"Bütünleşik Kalite Kontrol Kokpiti (Tek Ekran)\"] B --> C[\"Sol Panel: Dokunmatik Kroki & Kusur Tablosu\"] B --> D[\"Sağ Panel: Parametreler & 5 Rutin Fiziki Kriter\"] C --> E{\"Kritik Organ Hasarı veya Delik > 15 mm²?\"} D --> F{\"Blok Kayması / Katlanma / Ciddi Deformasyon?\"} E -->|\"Evet\"| G[\"HEK / Hurdaya Ayır (Kullanım Dışı)\"] F -->|\"Evet\"| G E -->|\"Hayır, Çevre 5-15 mm²\"| H[\"Şartlı Kullanım (Düşük Doz / Refakatçi)\"] F -->|\"Dikiş/Askı/Hijyen Hasarı\"| H E -->|\"Kusursuz / <= 5 mm²\"| I{\"Fiziki Sağlam ve Yaş < 10 Yıl?\"} F -->|\"Fiziki Tam Sağlam\"| I I -->|\"Evet\"| J[\"Kullanıma Uygun (1 Yıl Geçerli)\"] I -->|\"Yaş >= 10 Yıl\"| G G --> K[\"RKS Resmi Onayı & KVKK AES-256 Arşiv\"] H --> K J --> K K --> L[\"SKS 6.1 Kontrol Çizelgesi & Dijital QR Güncelleme\"] style A fill:#0891b2,stroke:#0e7490,stroke-width:2px,color:#fff style B fill:#3b82f6,stroke:#1d4ed8,stroke-width:2px,color:#fff style G fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff style H fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff style J fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff style K fill:#dc2626,stroke:#b91c1c,stroke-width:2px,color:#fff style M fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff"
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857#karar-motoru",
    "title": "DIN 6857-1 / IEC 61331 Karar Motoru & Eşik Değerleri — 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html#karar-motoru",
    "summary": "DIN 6857-1 / IEC 61331 Karar Motoru & Eşik Değerleri RADPYS V4, skopi veya röntgen şutlaması altında yapılan kalite kontrol muayenelerinde medikal fizikçinin sübjektif değerlendirmesini ortadan kaldıran matematiksel bir ",
    "headings": [
      "DIN 6857-1 / IEC 61331 Karar Motoru & Eşik Değerleri",
      "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi"
    ],
    "content": "DIN 6857-1 / IEC 61331 Karar Motoru & Eşik Değerleri RADPYS V4, skopi veya röntgen şutlaması altında yapılan kalite kontrol muayenelerinde medikal fizikçinin sübjektif değerlendirmesini ortadan kaldıran matematiksel bir karar motoru barındırır. Dokunmatik SVG tuvali üzerinde işaretlenen her deliğin çapı ($d$) girildiğinde sistem daire alan formülüyle hasar büyüklüğünü hesaplar: Hasar Alanı Formülü: Alan ($mm^2$) = $\\pi \\cdot (çap / 2)^2$ Otomatik Hassas Hesaplama Kullanıma Uygun 1 Yıl Geçerli • Toplam hasar alanı $\\le 5.0\\text{ mm}^2$. • Kritik organ bölgesinde delik/çatlak YOK . • Kurşun blok katlanması veya kayması YOK . • Tüm klinik ve ameliyathanelerde serbest kullanım. Şartlı Kullanım Kısıtlı Alan • Toplam hasar alanı $5.0 - 15.0\\text{ mm}^2$ aralığında. • Veya dikiş/toka açılması mevcut. • Primer ışınlama alanında (Anjiyo, C-Kollu Skopi) YASAK . • Yalnızca hasta refakati ve düşük dozlu alanlarda. HEK / Hurdaya Ayır Kullanım Dışı • Kritik organ bölgesinde $> 0\\text{ mm}^2$ delik (Sıfır Tolerans). • Non-kritik alanda toplam hasar $> 15.0\\text{ mm}^2$. • Kurşun blok katlanması veya blok kayması. • Önlük derhal klinikten çekilir ve imhaya sevk edilir."
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857#toplu-muayene-ve-zimmet",
    "title": "Toplu Muayene Kokpiti & Zimmet Güvenlik Kilidi — 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html#toplu-muayene-ve-zimmet",
    "summary": "Toplu Muayene Kokpiti & Zimmet Güvenlik Kilidi 1 Toplu Kalite Kontrol Kokpiti ([Toplu Muayene]) Hastanede 100'den fazla kurşun önlük bulunan merkezlerde her ekipman için ayrı form açıp kaydetmek saatler sürebilir. [Toplu",
    "headings": [
      "Toplu Muayene Kokpiti & Zimmet Güvenlik Kilidi",
      "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi"
    ],
    "content": "Toplu Muayene Kokpiti & Zimmet Güvenlik Kilidi 1 Toplu Kalite Kontrol Kokpiti ([Toplu Muayene]) Hastanede 100'den fazla kurşun önlük bulunan merkezlerde her ekipman için ayrı form açıp kaydetmek saatler sürebilir. [Toplu Muayene] butonu ile: Gecikenleri Seç: Muayene tarihi yaklaşan veya günü geçen önlükleri tek tıkla otomatik işaretler. Tek Tıkla Toplu İşlem: Skopi cihazı, kontrol tarihi ve \"Kullanıma Uygun\" kararı seçilerek onlarca ekipmanın muayenesi tek tuşla sisteme işlenir. 2 Hurda Devir Güvenlik Kilidi ([Zimmet Transfer]) Koruyucu donanımlar personelin şahsına zimmetlenebildiği gibi birim ortak askılıklarına da atanabilir. Ancak hurda donanımların yanlışlıkla kullanıma sokulmasını engelleyen katı bir emniyet kilidi mevcuttur: Emniyet Kilidi Aktif: Durumu HEK_Hurda , Kayip veya Kullanim_Disi olan bir ekipman seçilip transfer yapılmak istendiğinde sistem transferi engeller ve kaydetme butonunu kilitler."
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857#qr-pasaport",
    "title": "Karekod (QR) Pasaport Etiketi & Mobil Saha Muayenesi — 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html#qr-pasaport",
    "summary": "Karekod (QR) Pasaport Etiketi & Mobil Saha Muayenesi Her Önlüğe Benzersiz Dijital Pasaport [QR Etiket] butonuna tıklandığında önlüğün teknik künyesini (Önlük No, Cinsi, Kurşun Eşdeğeri mm Pb, Beden, Konum, Son Muayene So",
    "headings": [
      "Karekod (QR) Pasaport Etiketi & Mobil Saha Muayenesi",
      "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi"
    ],
    "content": "Karekod (QR) Pasaport Etiketi & Mobil Saha Muayenesi Her Önlüğe Benzersiz Dijital Pasaport [QR Etiket] butonuna tıklandığında önlüğün teknik künyesini (Önlük No, Cinsi, Kurşun Eşdeğeri mm Pb, Beden, Konum, Son Muayene Sonucu) içeren kurumsal bir etiket üretilir. • Yazdır: Doğrudan klinik etiket yazıcısına gönderilir (Suya ve dezenfektana dayanıklı kumaş etiketler tavsiye edilir). • PNG Olarak Kaydet: Yüksek çözünürlüklü dijital görsel olarak arşivlenir. • Mobil Saha Muayenesi: Sahada çalışan medikal fizikçi cep telefonu veya tablet kamerasıyla önlükteki QR kodu tarattığında web portal açılır; cihaz başından ayrılmadan dokunmatik kroki üzerinde delikleri işaretleyip canlı kamera fotoğrafı ekleyerek testi onaylayabilir. RKE-Ö-RAD-001 Palto Önlük (0.50 mm Pb) Geçerli Muayene"
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857#ekran-goruntuleri",
    "title": "Arayüz Rehberi & Ekran Görünümleri — 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html#ekran-goruntuleri",
    "summary": "Arayüz Rehberi & Ekran Görünümleri ️ Ekran Konumu: Cihaz & Donanım > Koruyucu Ekipman (RKE) Yönetimi RKE Envanter & KPI Paneli Görsel: RKE Ana Yönetim ve KPI Ekranı Konum: assets/img/20_rke_ana_yonetim.png ';\"> Yasal Bil",
    "headings": [
      "Arayüz Rehberi & Ekran Görünümleri",
      "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi"
    ],
    "content": "Arayüz Rehberi & Ekran Görünümleri ️ Ekran Konumu: Cihaz & Donanım > Koruyucu Ekipman (RKE) Yönetimi RKE Envanter & KPI Paneli Görsel: RKE Ana Yönetim ve KPI Ekranı Konum: assets/img/20_rke_ana_yonetim.png ';\"> Yasal Bilgilendirme: Bu görseldeki ekipman kodları, seri numaraları ve konumlar test amaçlı sentetik veridir. Gerçek envanter kayıtlarıyla benzerlikler tesadüfidir. ️ Ekran Konumu: RKE Yönetimi > [Muayene ve QC] Dokunmatik Kroki & Karar Kokpiti Görsel: DIN 6857-1 Kalite Kontrol ve Muayene Kokpiti Konum: assets/img/20_rke_muayene_kokpiti.png ';\"> Yasal Bilgilendirme: Sol taraftaki SVG silüet üzerindeki hasar pinleri ve test parametreleri tamamen kurgusal olup standart eşiklerin gösterimi amacıyla üretilmiştir."
  },
  {
    "id": "20_rke_koruyucu_ekipman_ve_din6857#sss",
    "title": "Sıkça Sorulan Sorular (SSS) — 20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi",
    "category": "5. Cihaz, Kalite (QC) & RKE › Bölüm",
    "url": "20_rke_koruyucu_ekipman_ve_din6857.html#sss",
    "summary": "Sıkça Sorulan Sorular (SSS) 1. Muayenesi yaklaşan veya geçen önlükleri ana ekranda nasıl hızlıca filtreleyebilirim? Filtre çubuğundaki [Tüm Kontrol & Ömür Durumları] açılır kutusundan \"Kontrolü Gecikenler\" seçildiğinde s",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "20. Radyasyon Koruyucu Ekipman (RKE) & DIN 6857 Kalite Kontrol Yönetimi"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) 1. Muayenesi yaklaşan veya geçen önlükleri ana ekranda nasıl hızlıca filtreleyebilirim? Filtre çubuğundaki [Tüm Kontrol & Ömür Durumları] açılır kutusundan \"Kontrolü Gecikenler\" seçildiğinde süresi dolmuş kırmızı alarmlı kayıtlar; \"Kontrolü Yaklaşanlar (30 Gün)\" seçildiğinde ise son 30 günü kalan donanımlar listelenir. Ayrıca tablonun en üstündeki \"Kontrolü Geciken\" KPI kartına tıklayarak da anında erişebilirsiniz. 2. Tiroid veya gonad koruyucuda milimetrik dahi olsa delik çıkarsa ne yapılmalıdır? DIN 6857-1 standardı uyarınca tiroid ve gonad bölgeleri doğrudan kritik organları koruduğu için tolerans sıfırdır ($0.0\\text{ mm}^2$) . $1\\text{ mm}$ dahi delik tespit edilse ekipman kesinlikle şartlı kullanılamaz; doğrudan HEK / Hurdaya Ayrılmalı kararı verilerek derhal hizmetten çekilmelidir. 3. Hurdaya ayrılan bir önlük listede kalmaya devam eder mi, kazara tekrar kullanılabilir mi? Hurdaya ayrılan önlükler geçmiş denetim izlerinin korunması amacıyla sistemde silinmez; ancak durumu kırmızı \"HEK (Hurda)\" olarak işaretlenir. Aktif envanter listesinde ve SKS çizelgesinde kullanım dışı görünür. Ayrıca bu önlüklerin başka personele devredilmesini engelleyen Hurda Devir Güvenlik Kilidi devreye girer. 4. Muayeneye eklenen hasar fotoğrafları ve skopi röntgenleri nereye kaydedilir? Yüklenen görsel ve PDF servis belgeleri masaüstündeki açık klasörlerde korunmasız tutulmaz. Form kaydedildiği anda KVKK uyumlu Evrak Kasasında Fernet AES-256 algoritmasıyla şifrelenerek PostgreSQL veritabanı blob alanında saklanır. Yalnızca yetkili kullanıcılar detay ekranından deşifre ederek görüntüleyebilir. 5. Bir RKE donanım tanımını (tür/kategori) sildiğimde mevcut önlük ve ekipmanlar kaybolur mu? Asla kaybolmaz. RADPYS'nin \"Veri Bütünlüğü Odaklı Hibrit Silme\" mimarisi gereğince; silinmek istenen tanıma (örneğin \"Kurşun Önlük Çift Taraflı\") bağlı en az bir ekipman veya geçmiş muayene kaydı varsa sistem fiziksel silme yapmaz, kaydı güvenle Pasife çeker. Böylece geçmiş SKS çizelgeleri, zimmetler ve muayene kusur kayıtları bozulmaz; tanım yalnızca yeni ekipman ekleme listesinden gizlenir. Yalnızca hiçbir ekipmanla ilişkilendirilmemiş tanımlar kalıcı olarak silinir. 6. Yıllık muayenede hurdaya ayrılan 15-20 adet kurşun önlüğü tek bir resmi tutanakta nasıl birleştirebilirim? RADPYS V4.0.3.0 ile gelen çoklu seçim desteği sayesinde, RKE envanter tablosunda hurdaya sevk edilecek ekipmanları klavyeden Ctrl veya Shift tuşuna basarak topluca seçebilirsiniz. Ardından üst"
  },
  {
    "id": "21_merkezi_onaylar",
    "title": "21. Merkezi Onay Bekleyen Görevler Paneli",
    "category": "6. Dijital Dönüşüm, Onay & Rapor",
    "url": "21_merkezi_onaylar.html",
    "summary": "Tüm klinik ve idari birimlerden gelen personel izinlerini, nöbet takas/devirlerini, aylık nöbet tercihlerini, resmi nöbet çizelgesi yayınlarını ve 4-göz veri değişiklik taleplerini tek merkezden denetleyip karara bağlayın.",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler",
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Mit Avcısı: Merkezi Onaylarda Yanlış Bilinen Doğrular",
      "Merkezi Onay Mekanizması Süreç Akışı",
      "Merkezi Onay Paneli: 6 Kategori Sekmesi & Rozet Yönetimi",
      "1. İzin Talepleri Sekmesi",
      "2. Nöbet Devirleri Sekmesi",
      "3. Nöbet İstekleri Sekmesi",
      "4. Nöbet Planları Sekmesi (İdari Yayın)",
      "5. Veri Değişiklikleri Sekmesi (4-Göz Mekanizması)",
      "6. Resmi Tutanaklar Sekmesi (Islak İmza & EBYS Takibi)",
      "Değişiklik İnceleme (Diff Dialog): 4-Göz Kıyaslama Standardı",
      "Arayüz Rehberi & Ekran Görünümleri",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 6: Merkezi Onay & Web Portal 21. Merkezi Onaylar 4-Göz Denetim Mekanizması Zorunlu Ret Gerekçesi Kuralı Canlı Kategori Rozetleri KVKK Şifreli Evrak Kasası Okuma Süresi: 5 Dakika | RADPYS v4.2 21. Merkezi Onay Bekleyen Görevler Paneli Tüm klinik ve idari birimlerden gelen personel izinlerini, nöbet takas/devirlerini, aylık nöbet tercihlerini, resmi nöbet çizelgesi yayınlarını ve 4-göz veri değişiklik taleplerini tek merkezden denetleyip karara bağlayın. 20s Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler 4-Göz Denetim Mekanizması Zorunlu Ret Gerekçesi Kuralı Otomatik Canlı Rozetler KVKK Şifreli Evrak Kasası İstenen Sonuç: Klinik birimlerden ve personelden gelen izin, nöbet devir, istek, taslak plan ve veri değişikliklerini tek merkezden güvenle denetleyip karara bağlamak. ️ Yapılacak İşlem: Sol paneldeki 5 sekmeden ilgili kategoriyi seçin; satırları veya Diff penceresini inceleyip [Onayla] veya zorunlu gerekçe girerek [Reddet] butonuna basın. Sistem Etkisi: İzin bakiyeleri anında düşer, nöbet devirlerinde çizelge otomatik güncellenir, veri değişikliklerinde yeni kayıtlar işlenir ve fiziksel evraklar AES-256 ile şifreli KVKK kasasına aktarılır. 5N1K Kural ve Ayar Çözümleme Tablosu RADPYS-M21-RULE-MATRIX NE (İşlem / Alan) NEDEN (Gerekçe) NEREDE (Arayüz Yolu) NASIL (Yöntem) NE ZAMAN (Zamanlama) KİM (Rol / Yetki) DURUM (Sistem Tepkisi) İzin Onayı / Reddi Yıllık, şua ve mazeret iznini resmiyete bağlamak Onay Paneli → İzin Talepleri Onayla Butonu / Reddet Butonu (Zorunlu Gerekçe) İzin başlangıcından önce Birim Amiri / Yönetici Bakiye anında düşer, portalda bildirim kutusuna düşer Nöbet Devir İnceleme & Onay Personeller arası nöbet takasını resmi çizelgeye yansıtmak Onay Paneli → Nöbet Devirleri İncele / Detay Butonu → Karar Formu Devralan personelin portal rızasından sonra Birim / Hizmet Sorumlusu Çizelgedeki personel adı otomatik güncellenir Nöbet İstek & Mazeret Personelin aylık tercih ve muafiyetlerini kısıt olarak bağlamak Onay Paneli → Nöbet İstekleri Onayla / Reddet Butonu Solver motoru çalıştırılmadan önce Başteknisyen / Yönetici Otomatik çizelge motoruna bağlayıcı kural olarak girer Nöbet Planı Yayınlama Birim onaylı aylık taslak çizelgeyi resmi yürürlüğe sokmak Onay Paneli → Nöbet Planları Yayınla Butonu / Taslağa Geri Gönder Butonu Ay bitmeden ve nöbet başlamadan önce İdare / Başhekimlik / Admin Plan \"Yayında\" olur, portalda tüm personele açılır Veri Değişiklik Kıyaslama (Diff) 4-göz ilkesiyle hatalı veya yetkisiz veri girişlerini engellemek Onay Paneli → Veri Değişiklikleri İncele ve Karar Ver Butonu (Diff Penceresi) Kritik profil/evrak/kart kaydedildiğinde Modül Sorumlusu / Yönetici Eski-yeni farkı onaylanır, evrak KVKK kasasına aktarılır Sağlık Muayene Teyidi İşe giriş ve periyodik muayene bulgularını hekimce doğrulamak Onay Paneli → Veri Değişiklikleri İncele Butonu → Hekim Doğrulama Formu Sağlık muayenesi talep kuyruğuna düştüğünde RKS / İşyeri Hekimi Hızlı onay engellenir; Dahiliye/Göz/Derm bulguları zorunludur Gelişmiş Çok Kriterli Filtreleme Kuyruktaki yüzlerce onay talebini tür, öncelik ve tarihe göre süzmek Onay Paneli Üst Filtre Çubuğu Talep Türü, Öncelik (Normal/Acil) ve Tarih Aralığı seçimi Talepler incelenirken Tüm Onay Yetkilileri Tablo anlık süzülür, acil talepler turuncu rozetle vurgulanır Split-Layout Detay Paneli Talebin tüm ayrıntılarını, diff farklarını ve personel bilgilerini tek ekranda izlemek Onay Paneli Sağ Bölmesi Tablodan satır seçildiğinde otomatik yüklenir Kayıt tıklandığında Tüm Onay Yetkilileri Pencere değiştirmeden hızlı önizleme ve doğrudan onay/red imkanı sunar Resmi Tutanak Takibi & İmzalı Yükleme Tüm sistemden gelen heyet tutanaklarının ıslak imzalı kopyalarını ve EBYS numaralarını denetlemek Onay Paneli → Resmi Tutanaklar Taslak İncele → İmzalı Nüsha ve EBYS No Yükle → Onayla / İptal Et Heyet imzaları veya EBYS üst yazısı çıktığında Birim Amiri / RKS / İdare Tutanak 'Tamamlandı' olur, KVKK kasasına şifrelenir ve onay rozeti güncellenir Mit Avcısı: Merkezi Onaylarda Yanlış Bilinen Doğrular ONAY-MYTH-BUSTER YANLIŞ (Mit): \"Veri Değişiklikleri tablosunda 'Hızlı Onayla' butonuna basarak tüm talepleri, hekim muayeneleri dahil tek tıkla onaylayabilirim.\" DOĞRU (Mevzuat Standardı): Sağlık muayenesi kayıtlarında sistem \"Hızlı Onayla\"yı güvenlik gereği bloklar ve zorunlu olarak uzman hekim inceleme formunu açar. Dahiliye, göz ve dermatoloji bulguları doğrulanmadan sağlık onayı verilemez. YANLIŞ (Mit): \"İzin veya nöbet devrini reddederken gerekçe yazmak isteğe bağlıdır; boş bırakıp geçebilirim.\" DOĞRU (Mevzuat Standardı): Sistem tüm ret eylemlerinde zorunlu olarak metin girişi ister. Ret gerekçesi girilmeden ret işlemi tamamlanamaz ve bu gerekçe personelin web portalındaki bildirim paneline anında iletilir. YANLIŞ (Mit): \"Reddedilen bir talebi onay paneli üzerinden tekrar bulup onaylayabilirim.\" DOĞRU (Mevzuat Standardı): Güvenlik ve denetim izi bütünlüğü gereğince bir talep reddedildiğinde işlem kalıcı olarak sonuçlanır ve arşivlenir. Gerekçe düzeltilerek personelin yeni bir başvuru yapması gerekir. YANLIŞ (Mit): \"Bir personelin başlattığı nöbet takası doğrudan amirin onay kuyruğuna düşer.\" DOĞRU (Mevzuat Standardı): Nöbet takası karşılıklı rıza gerektirir. Devralacak personel kendi Web Portalı üzerinden \"Kabul Ediyorum\" onayını vermeden talep yöneticinin onay kuyruğuna düşmez. Merkezi Onay Mekanizması Süreç Akışı ONAY-WORKFLOW-DIAGRAM graph TD classDef portal fill:#f0fdf4,stroke:#16a34a,stroke-width:1.5px,color:#15803d; classDef desktop fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e40af; classDef decision fill:#fffbeb,stroke:#d97706,stroke-width:1.5px,color:#b45309; classDef vault fill:#fdf4ff,stroke:#a855f7,stroke-width:1.5px,color:#7e22ce; A[\"Web Portal / Mobil Talep (İzin, Devir, İstek, Profil)\"]:::portal --> B[\"Merkezi Onay Kuyruğu (Canlı Kategori Rozetleri)\"]:::desktop B --> C{\"Talep Türü Nedir?\"}:::decision C -- \"İzin Talebi\" --> D[\"Birim Amiri Teyidi (Onayla / Zorunlu Ret)\"]:::desktop C -- \"Nöbet Devri\" --> E[\"D"
  },
  {
    "id": "21_merkezi_onaylar#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler — 21. Merkezi Onay Bekleyen Görevler Paneli",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "21_merkezi_onaylar.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler 4-Göz Denetim Mekanizması Zorunlu Ret Gerekçesi Kuralı Otomatik Canlı Rozetler KVKK Şifreli Evrak Kasası İstenen Sonuç: Klinik birimlerden ve personelden gelen izin, ",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler",
      "21. Merkezi Onay Bekleyen Görevler Paneli"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler 4-Göz Denetim Mekanizması Zorunlu Ret Gerekçesi Kuralı Otomatik Canlı Rozetler KVKK Şifreli Evrak Kasası İstenen Sonuç: Klinik birimlerden ve personelden gelen izin, nöbet devir, istek, taslak plan ve veri değişikliklerini tek merkezden güvenle denetleyip karara bağlamak. ️ Yapılacak İşlem: Sol paneldeki 5 sekmeden ilgili kategoriyi seçin; satırları veya Diff penceresini inceleyip [Onayla] veya zorunlu gerekçe girerek [Reddet] butonuna basın. Sistem Etkisi: İzin bakiyeleri anında düşer, nöbet devirlerinde çizelge otomatik güncellenir, veri değişikliklerinde yeni kayıtlar işlenir ve fiziksel evraklar AES-256 ile şifreli KVKK kasasına aktarılır."
  },
  {
    "id": "21_merkezi_onaylar#5n1k-tablosu",
    "title": "5N1K Kural ve Ayar Çözümleme Tablosu — 21. Merkezi Onay Bekleyen Görevler Paneli",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "21_merkezi_onaylar.html#5n1k-tablosu",
    "summary": "5N1K Kural ve Ayar Çözümleme Tablosu RADPYS-M21-RULE-MATRIX NE (İşlem / Alan) NEDEN (Gerekçe) NEREDE (Arayüz Yolu) NASIL (Yöntem) NE ZAMAN (Zamanlama) KİM (Rol / Yetki) DURUM (Sistem Tepkisi) İzin Onayı / Reddi Yıllık, ş",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "21. Merkezi Onay Bekleyen Görevler Paneli"
    ],
    "content": "5N1K Kural ve Ayar Çözümleme Tablosu RADPYS-M21-RULE-MATRIX NE (İşlem / Alan) NEDEN (Gerekçe) NEREDE (Arayüz Yolu) NASIL (Yöntem) NE ZAMAN (Zamanlama) KİM (Rol / Yetki) DURUM (Sistem Tepkisi) İzin Onayı / Reddi Yıllık, şua ve mazeret iznini resmiyete bağlamak Onay Paneli → İzin Talepleri Onayla Butonu / Reddet Butonu (Zorunlu Gerekçe) İzin başlangıcından önce Birim Amiri / Yönetici Bakiye anında düşer, portalda bildirim kutusuna düşer Nöbet Devir İnceleme & Onay Personeller arası nöbet takasını resmi çizelgeye yansıtmak Onay Paneli → Nöbet Devirleri İncele / Detay Butonu → Karar Formu Devralan personelin portal rızasından sonra Birim / Hizmet Sorumlusu Çizelgedeki personel adı otomatik güncellenir Nöbet İstek & Mazeret Personelin aylık tercih ve muafiyetlerini kısıt olarak bağlamak Onay Paneli → Nöbet İstekleri Onayla / Reddet Butonu Solver motoru çalıştırılmadan önce Başteknisyen / Yönetici Otomatik çizelge motoruna bağlayıcı kural olarak girer Nöbet Planı Yayınlama Birim onaylı aylık taslak çizelgeyi resmi yürürlüğe sokmak Onay Paneli → Nöbet Planları Yayınla Butonu / Taslağa Geri Gönder Butonu Ay bitmeden ve nöbet başlamadan önce İdare / Başhekimlik / Admin Plan \"Yayında\" olur, portalda tüm personele açılır Veri Değişiklik Kıyaslama (Diff) 4-göz ilkesiyle hatalı veya yetkisiz veri girişlerini engellemek Onay Paneli → Veri Değişiklikleri İncele ve Karar Ver Butonu (Diff Penceresi) Kritik profil/evrak/kart kaydedildiğinde Modül Sorumlusu / Yönetici Eski-yeni farkı onaylanır, evrak KVKK kasasına aktarılır Sağlık Muayene Teyidi İşe giriş ve periyodik muayene bulgularını hekimce doğrulamak Onay Paneli → Veri Değişiklikleri İncele Butonu → Hekim Doğrulama Formu Sağlık muayenesi talep kuyruğuna düştüğünde RKS / İşyeri Hekimi Hızlı onay engellenir; Dahiliye/Göz/Derm bulguları zorunludur Gelişmiş Çok Kriterli Filtreleme Kuyruktaki yüzlerce onay talebini tür, öncelik ve tarihe göre süzmek Onay Paneli Üst Filtre Çubuğu Talep Türü, Öncelik (Normal/Acil) ve Tarih Aralığı seçimi Talepler incelenirken Tüm Onay Yetkilileri Tablo anlık süzülür, acil talepler turuncu rozetle vurgulanır Split-Layout Detay Paneli Talebin tüm ayrıntılarını, diff farklarını ve personel bilgilerini tek ekranda izlemek Onay Paneli Sağ Bölmesi Tablodan satır seçildiğinde otomatik yüklenir Kayıt tıklandığında Tüm Onay Yetkilileri Pencere değiştirmeden hızlı önizleme ve doğrudan onay/red imkanı sunar Resmi Tutanak Takibi & İmzalı Yükleme Tüm sistemden gelen heyet tutanaklarının ıslak imzalı kopya"
  },
  {
    "id": "21_merkezi_onaylar#mit-avcilari",
    "title": "Mit Avcısı: Merkezi Onaylarda Yanlış Bilinen Doğrular — 21. Merkezi Onay Bekleyen Görevler Paneli",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "21_merkezi_onaylar.html#mit-avcilari",
    "summary": "Mit Avcısı: Merkezi Onaylarda Yanlış Bilinen Doğrular ONAY-MYTH-BUSTER YANLIŞ (Mit): \"Veri Değişiklikleri tablosunda 'Hızlı Onayla' butonuna basarak tüm talepleri, hekim muayeneleri dahil tek tıkla onaylayabilirim.\" DOĞR",
    "headings": [
      "Mit Avcısı: Merkezi Onaylarda Yanlış Bilinen Doğrular",
      "21. Merkezi Onay Bekleyen Görevler Paneli"
    ],
    "content": "Mit Avcısı: Merkezi Onaylarda Yanlış Bilinen Doğrular ONAY-MYTH-BUSTER YANLIŞ (Mit): \"Veri Değişiklikleri tablosunda 'Hızlı Onayla' butonuna basarak tüm talepleri, hekim muayeneleri dahil tek tıkla onaylayabilirim.\" DOĞRU (Mevzuat Standardı): Sağlık muayenesi kayıtlarında sistem \"Hızlı Onayla\"yı güvenlik gereği bloklar ve zorunlu olarak uzman hekim inceleme formunu açar. Dahiliye, göz ve dermatoloji bulguları doğrulanmadan sağlık onayı verilemez. YANLIŞ (Mit): \"İzin veya nöbet devrini reddederken gerekçe yazmak isteğe bağlıdır; boş bırakıp geçebilirim.\" DOĞRU (Mevzuat Standardı): Sistem tüm ret eylemlerinde zorunlu olarak metin girişi ister. Ret gerekçesi girilmeden ret işlemi tamamlanamaz ve bu gerekçe personelin web portalındaki bildirim paneline anında iletilir. YANLIŞ (Mit): \"Reddedilen bir talebi onay paneli üzerinden tekrar bulup onaylayabilirim.\" DOĞRU (Mevzuat Standardı): Güvenlik ve denetim izi bütünlüğü gereğince bir talep reddedildiğinde işlem kalıcı olarak sonuçlanır ve arşivlenir. Gerekçe düzeltilerek personelin yeni bir başvuru yapması gerekir. YANLIŞ (Mit): \"Bir personelin başlattığı nöbet takası doğrudan amirin onay kuyruğuna düşer.\" DOĞRU (Mevzuat Standardı): Nöbet takası karşılıklı rıza gerektirir. Devralacak personel kendi Web Portalı üzerinden \"Kabul Ediyorum\" onayını vermeden talep yöneticinin onay kuyruğuna düşmez."
  },
  {
    "id": "21_merkezi_onaylar#surec-akisi",
    "title": "Merkezi Onay Mekanizması Süreç Akışı — 21. Merkezi Onay Bekleyen Görevler Paneli",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "21_merkezi_onaylar.html#surec-akisi",
    "summary": "Merkezi Onay Mekanizması Süreç Akışı ONAY-WORKFLOW-DIAGRAM graph TD classDef portal fill:#f0fdf4,stroke:#16a34a,stroke-width:1.5px,color:#15803d; classDef desktop fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e4",
    "headings": [
      "Merkezi Onay Mekanizması Süreç Akışı",
      "21. Merkezi Onay Bekleyen Görevler Paneli"
    ],
    "content": "Merkezi Onay Mekanizması Süreç Akışı ONAY-WORKFLOW-DIAGRAM graph TD classDef portal fill:#f0fdf4,stroke:#16a34a,stroke-width:1.5px,color:#15803d; classDef desktop fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e40af; classDef decision fill:#fffbeb,stroke:#d97706,stroke-width:1.5px,color:#b45309; classDef vault fill:#fdf4ff,stroke:#a855f7,stroke-width:1.5px,color:#7e22ce; A[\"Web Portal / Mobil Talep (İzin, Devir, İstek, Profil)\"]:::portal --> B[\"Merkezi Onay Kuyruğu (Canlı Kategori Rozetleri)\"]:::desktop B --> C{\"Talep Türü Nedir?\"}:::decision C -- \"İzin Talebi\" --> D[\"Birim Amiri Teyidi (Onayla / Zorunlu Ret)\"]:::desktop C -- \"Nöbet Devri\" --> E[\"Devralan Rızası (Portal) → Amir Onay Formu\"]:::desktop C -- \"Veri Değişikliği (Diff)\" --> F[\"Diff Karşılaştırma (Kırmızı Eski / Yeşil Yeni)\"]:::desktop C -- \"Nöbet Planı\" --> G[\"Birim Onaylı Çizelge → İdare Yayın Onayı\"]:::desktop F --> H{\"Sağlık Muayenesi mi?\"}:::decision H -- \"Evet\" --> I[\"Uzman Hekim Doğrulama Formu (Göz/Dahiliye/Derm)\"]:::desktop H -- \"Hayır\" --> J[\"Hızlı Onayla veya Diff Kararı\"]:::desktop D --> K[\"Hedef Tablo Güncellemesi\"]:::desktop E --> K G --> K J --> K I --> K K --> L[\"KVKK Evrak Kasasına Aktarım (AES-256 Şifreli Arşiv)\"]:::vault L --> M[\"Portal İçi Anlık Bildirim (Kullanıcı Bilgilendirme)\"]:::portal"
  },
  {
    "id": "21_merkezi_onaylar#onay-paneli",
    "title": "Merkezi Onay Paneli: 6 Kategori Sekmesi & Rozet Yönetimi — 21. Merkezi Onay Bekleyen Görevler Paneli",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "21_merkezi_onaylar.html#onay-paneli",
    "summary": "Merkezi Onay Paneli: 6 Kategori Sekmesi & Rozet Yönetimi ONAY-PANEL-SECTIONS 1. İzin Talepleri Sekmesi Personelin başvurduğu yıllık, şua, sağlık ve mazeret izinleri listelenir. Tabloda personelin adı, birimi, izin türü, ",
    "headings": [
      "Merkezi Onay Paneli: 6 Kategori Sekmesi & Rozet Yönetimi",
      "21. Merkezi Onay Bekleyen Görevler Paneli"
    ],
    "content": "Merkezi Onay Paneli: 6 Kategori Sekmesi & Rozet Yönetimi ONAY-PANEL-SECTIONS 1. İzin Talepleri Sekmesi Personelin başvurduğu yıllık, şua, sağlık ve mazeret izinleri listelenir. Tabloda personelin adı, birimi, izin türü, tarih aralığı, gün süresi ve talep tarihi görüntülenir. • Onayla Butonu: Onay teyidiyle izin onaylanır; personelin kalan yıllık veya şua izni bakiyesinden gün sayısı otomatik düşülür. • Reddet Butonu: Açılan pencereden zorunlu ret gerekçesi alınır; başvuru iptal edilir ve gerekçe portala iletilir. 2. Nöbet Devirleri Sekmesi Nöbet değişim ve becayiş başvuruları 3 aşamalı denetimden geçer. Devralan personelin web portalından onay vermediği talepler tabloda \"Devralan Onayı Bekliyor (Portal)\" olarak listelenir. • İncele / Detay Butonu: Ayrıntılı devir diyaloğunu açarak devreden, devralan, nöbet tarihi, vardiya saatleri ve devir gerekçesini gösterir. • Onaylama: Birim veya hizmet amiri onayladığında aktif nöbet çizelgesinde personellerin yer değişimi anında gerçekleşir. 3. Nöbet İstekleri Sekmesi Personelin ay başlamadan önceki nöbet yazılmasın (mazeret), nöbet yazılsın, lisansüstü ders/eğitim günleri ve muafiyet tercihleri 1 ila 5 arası öncelik puanıyla listelenir. Onaylanan talepler Nöbet Hazırlık (Solver) motoruna doğrudan kısıt olarak beslenir. 4. Nöbet Planları Sekmesi (İdari Yayın) Birim amiri tarafından hazırlanıp \"Birim Onaylı\" statüsüne getirilmiş aylık nöbet planları yer alır. • Yayınla Butonu: Planı \"Yayında\" statüsüne çevirir; Web Portalda tüm klinik personeline görünür hale gelir. • Taslağa Geri Gönder: İdare eksiklik veya kural ihlali gördüğünde zorunlu revizyon gerekçesi girerek planı tekrar \"Taslak\" moduna döndürür. 5. Veri Değişiklikleri Sekmesi (4-Göz Mekanizması) Rol ayarlarında değişiklik onayı zorunlu kılınan kullanıcıların personel profili, yeni eklenen belgeler, eğitim/sertifikalar, önceki hizmet dökümleri, sağlık muayeneleri ve çalışma kısıtları başvuruları bu sekmede toplanır. • İncele ve Karar Ver: Değişiklik İnceleme (Diff) penceresini açar. • Hızlı Onayla: Rutin veri girişlerini doğrudan veritabanına uygular (Sağlık muayeneleri hariç). • Reddet: Zorunlu ret gerekçesi alınarak değişiklik iptal edilir. 6. Resmi Tutanaklar Sekmesi (Islak İmza & EBYS Takibi) Cihaz, RKE, Nöbet ve Kalite gibi tüm modüllerden üretilen ve heyet imzası bekleyen resmi tutanaklar (TUT-YYYY-XXXX) bu sekmede listelenir. • Taslak Gör: Tutanak oluşturulurken şifreli kasaya kaydedilen orijinal taslağı anında açar. • İmzalı Yükle: Heyetçe ıslak imzala"
  },
  {
    "id": "21_merkezi_onaylar#diff-dialog",
    "title": "Değişiklik İnceleme (Diff Dialog): 4-Göz Kıyaslama Standardı — 21. Merkezi Onay Bekleyen Görevler Paneli",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "21_merkezi_onaylar.html#diff-dialog",
    "summary": "Değişiklik İnceleme (Diff Dialog): 4-Göz Kıyaslama Standardı DIFF-VISUAL-STANDARD Kullanıcıların veya personelin yaptığı kayıt güncellemelerinde veri güvenliğini sağlamak için sistem otomatik olarak eski veriyi ve yeni t",
    "headings": [
      "Değişiklik İnceleme (Diff Dialog): 4-Göz Kıyaslama Standardı",
      "21. Merkezi Onay Bekleyen Görevler Paneli"
    ],
    "content": "Değişiklik İnceleme (Diff Dialog): 4-Göz Kıyaslama Standardı DIFF-VISUAL-STANDARD Kullanıcıların veya personelin yaptığı kayıt güncellemelerinde veri güvenliğini sağlamak için sistem otomatik olarak eski veriyi ve yeni talep edilen veriyi çözümler. İnceleme penceresinde teknik alan kodları gizlenerek alanlar Türkçe etiketlerle 3 sütunlu bir tabloda sunulur: Sütun 1: Alan Adı (Türkçe) Örn: Telefon, E-Posta, İkamet Adresi, Kadro Tipi, Mezuniyet Tarihi, Çalışma Kısıtı Sütun 2: Eski Değer (Kırmızı Vurgulu) Veritabanında kayıtlı mevcut değer. Değişen satırlarda açık kırmızı arka planla gösterilir. Sütun 3: Yeni Değer (Yeşil Vurgulu) Personel veya amir tarafından talep edilen yeni değer. Kalın yazı tipi ve yeşil renkle vurgulanır. KVKK Şifreli Dosya Kasasına Otomatik Aktarım: Eğer değişiklik talebi personel belgesi, diploma, sertifika veya sağlık raporu gibi fiziksel bir dosya yüklemesi içeriyorsa, yönetici \"Talebi Onayla\" butonuna bastığı anda sistem dosyayı geçici yükleme dizininden alır, AES-256 Fernet algoritmasıyla şifreleyerek güvenli evrak kasasına aktarır. Veritabanı işlemi başarıyla tamamlandıktan sonra diskteki geçici dosya güvenli bir şekilde silinir."
  },
  {
    "id": "21_merkezi_onaylar#ekran-goruntuleri",
    "title": "Arayüz Rehberi & Ekran Görünümleri — 21. Merkezi Onay Bekleyen Görevler Paneli",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "21_merkezi_onaylar.html#ekran-goruntuleri",
    "summary": "Arayüz Rehberi & Ekran Görünümleri UI-SCREENSHOTS ️ Ekran Konumu: Yönetim > Onay Bekleyen Görevler Canlı Kategori Rozetleri & 4-Göz Diff Merkezi Onay Bekleyen Görevler Paneli Dosya: assets/img/modul21_onay_merkezi.png ';",
    "headings": [
      "Arayüz Rehberi & Ekran Görünümleri",
      "21. Merkezi Onay Bekleyen Görevler Paneli"
    ],
    "content": "Arayüz Rehberi & Ekran Görünümleri UI-SCREENSHOTS ️ Ekran Konumu: Yönetim > Onay Bekleyen Görevler Canlı Kategori Rozetleri & 4-Göz Diff Merkezi Onay Bekleyen Görevler Paneli Dosya: assets/img/modul21_onay_merkezi.png ';\"> Yasal Bilgilendirme: Bu görseldeki isimler, TCKN'ler ve kayıtlar tamamen test amaçlı sentetik veridir. Gerçek kişi ve kayıtlarla benzerlikler tesadüfidir."
  },
  {
    "id": "21_merkezi_onaylar#sss",
    "title": "Sıkça Sorulan Sorular (SSS) — 21. Merkezi Onay Bekleyen Görevler Paneli",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "21_merkezi_onaylar.html#sss",
    "summary": "Sıkça Sorulan Sorular (SSS) FAQ-SUPPORT 1. Bir personelin nöbet devir talebi onay panelinde neden görünmüyor? ▼ Nöbet takası karşılıklı rıza gerektirir. Devralacak personelin kendi Web Portalı üzerinden \"Devir Almayı Kab",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "21. Merkezi Onay Bekleyen Görevler Paneli"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) FAQ-SUPPORT 1. Bir personelin nöbet devir talebi onay panelinde neden görünmüyor? ▼ Nöbet takası karşılıklı rıza gerektirir. Devralacak personelin kendi Web Portalı üzerinden \"Devir Almayı Kabul Ediyorum\" onayını vermesi zorunludur. Devralan personel onay vermediği sürece talep yöneticinin onay kuyruğuna düşmez. 2. İzin onaylandığında nöbet çizelgesinde personelin nöbeti varsa ne olur? ▼ İzin onaylandığı anda sistem nöbet çizelgesindeki çakışmayı tespit eder; amir isterse Yönetici Aksiyon Sihirbazı üzerinden izne denk gelen nöbet için anında ikame personel atayabilir veya ilgili nöbeti düşürebilir. 3. Reddedilen bir izin veya nöbet talebini geri alıp tekrar onaylayabilir miyim? ▼ Hayır. Güvenlik ve denetim izi (Audit Log) bütünlüğü gereğince bir talep \"Reddedildi\" statüsüne geçtiğinde arşivlenir ve kilitlenir. Personelin web portalı üzerinden gerekçeyi düzelterek yeni bir talep oluşturması gerekir. 4. Sağlık muayenelerinde Hızlı Onay butonu neden çalışmıyor? ▼ 6331 sayılı İSG Kanunu ve NDK Radyasyon Güvenliği Mevzuatı uyarınca, sağlık muayene bulguları (göz, dahiliye, hemogram, dermatoloji) bir uzman hekim veya RKS tarafından incelenmeden onaylanamaz. Bu sebeple Hızlı Onay güvenlik amacıyla kilitlenmiştir. 5. Onay kuyruğunda çok fazla bekleyen talep birikirse sistem performansı etkilenir mi? ▼ Onay paneli her kategori için en son 500 beklemedeki talebi optimize edilmiş sorgularla çeker. Ancak personelin operasyonel mağduriyet yaşamaması adına geçmiş tarihe ait taleplerin amirler tarafından zamanında sonuçlandırılması kurumsal bir zorunluluktur."
  },
  {
    "id": "22_web_portal_ve_dashboardlar",
    "title": "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
    "category": "6. Dijital Dönüşüm, Onay & Rapor",
    "url": "22_web_portal_ve_dashboardlar.html",
    "summary": "Tüm radyoloji ve radyasyon güvenliği operasyonunu (dozimetre kritik aşımları, aktif nöbetler, açık arızalar, DIN 6857-1 KKD muayeneleri, SKS denetim hazırlığı ve yasal kurumsal uyumu) tek merkezde toplayan, masaüstü durum çubuğundan 8 saniyede bir sağlık denet",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Web Portal ve Dashboard Mimari Akış Şeması (Mermaid)",
      "Ekran Konumları ve Görsel Rehber",
      "Adım Adım Eylem Akışı",
      "Hibrit Platform Karşılaştırması (Masaüstü & Web)",
      "Masaüstü Uygulaması (PySide6)",
      "Web Portalı & PWA (React 18 + Vite)",
      "Hata Mesajları ve Sorun Giderme Rehberi",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 6: Merkezi Onay & Web Portal 22. Web Portal & Dashboard Web Portalı ve Yönetici Gösterge Panelleri (Dashboards) NDK & SKS 6.1 Uyumlu | Canlı PostgreSQL Tahmini Okuma: 5 Dakika Tüm radyoloji ve radyasyon güvenliği operasyonunu (dozimetre kritik aşımları, aktif nöbetler, açık arızalar, DIN 6857-1 KKD muayeneleri, SKS denetim hazırlığı ve yasal kurumsal uyumu) tek merkezde toplayan, masaüstü durum çubuğundan 8 saniyede bir sağlık denetimi yapılan ve 60 saniyelik bellek içi önbellekle (In-Memory Cache) çalışan kurumsal karar destek merkezidir. Yasal Güvence: Canlı PostgreSQL veritabanı üzerinden beslenen panel, denetim müfettişlerine anlık tarafsız metrik sunar; sahte veya sentetik kayıt barındırmaz. Hızlı Reçete: Masaüstünden Web Gösterge Paneline Erişim 20 SANİYELİK AKIŞ 1. İstenen Sonuç Tüm hastane radyoloji birimlerinin anlık nöbet doluluğunu, dozimetre kritik aşım alarmlarını, bekleyen DÖF ve arıza durumlarını tek ekranda incelemek. 2. Yapılacak İşlem Masaüstü ana ekranında sol üstteki [Genel Bakış] butonuna tıklayın (veya [Ctrl+K] ile arayın). Sunucu kapalıysa durum çubuğundaki [Portal Sunucu: Kapalı] butonuna basarak tek tıkla çalıştırın. 3. Sistem Etkisi & Güvence Sistem varsayılan tarayıcınızda http://localhost:3000/dashboard/genel sayfasını açar. 60 saniyelik bellek içi önbellek sayesinde veritabanı kilitlenmez, ağır sorgular saniyeler içinde yüklenir. Önbellek (Cache) 60 Saniye TTL Yetkili Rol Yönetici / RGU / Sorumlu Canlılık Denetimi 8 Saniye Döngü Platform Desteği ️ Masaüstü + Web / Tablet Kritik Sahada Yanlış Bilinen Kural (Mit Avcısı) Yanlış Algı: \"Web Portal sadece teknikerlerin nöbet çizelgesini gördüğü pasif bir ekrandır; idari karar, dozimetre analizi veya resmi denetim hazırlığı buradan yürütülemez.\" Gerçek Sistem Mantığı: Web Portal, sistemdeki 20 farklı gösterge panelini tek merkezde toplayan tam yetkili karar destek platformudur. Sağlık Bakanlığı SKS 6.1 denetim hazırlığı, 20 mSv yıllık doz projeksiyonu, arıza duruş süreleri ve DIN 6857-1 koruyucu ekipman muayeneleri bu ekranlardan anlık izlenir, Excel ve PDF olarak dışa aktarılır. 5N1K Kural ve Ayar Çözümleme Tablosu Masaüstü entegrasyonu, web gösterge panelleri ve operasyonel alarm eşiklerinin kuralları. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Tetiklenme Anı) KİM? (Yetkili Rol) Genel Bakış Butonu [Sol Kenar Çubuğu En Üst Buton] Yöneticinin tüm hastane radyoloji birimlerini tek ekranda görmesini sağlamak. Sunucu aktifse varsayılan tarayıcıda Genel Bakış'ı açar; kapalıysa başlatıcıyı arka planda tetikler. Kullanıcı butona bastığında veya Ctrl+K ile seçtiğinde. Tüm Yöneticiler Portal Sunucu Durum Butonu [Durum Çubuğu / Status Bar Butonu] Web Portal sunucusunun Port 3000'de canlı olup olmadığını izlemek ve gerekirse başlatmak. 8 saniyede bir otomatik denetlenir. 200 dönerse yeşil 'Aktif', aksi halde gri 'Kapalı' olur. Tıklandığında başlatıcıyı tetikler. Açılışta ve her 8 saniyede bir periyodik. Sistem Yöneticisi (Admin) 60 Saniye Önbellek & Zorla Yenile [Bellek İçi Cache ve Yenile Butonu] Ağır istatistik ve analitik sorgularının PostgreSQL veritabanını kilitlemesini önlemek. 60 saniye boyunca sorgu sonuçları RAM'den sunulur. Filtre değiştiğinde veya zorla yenilendiğinde veritabanından taze veri çekilir. Web paneli sayfaları arasında gezinirken. Otomatik Sistem Dozimetre Uyarı & Kritik Aşım Alarmı [≥2 mSv ve ≥5 mSv Doz Rozetleri] Yıllık 20 mSv mevzuat sınırına yaklaşan personeli erkenden tespit edip yasal korumaya almak. Aylık derin doz ≥2.0 mSv ise sarı uyarı, ≥5.0 mSv ise kırmızı alarm ve resmi NDK bildirimi zorunluluğu tetiklenir. Ayrıca hakkında inceleme aksiyonu açılan personele Web Portal görev paneline 'Bölüm 2: Çalışan Beyanı' formunu doldurması için anlık görev bildirimi atanır. Dozimetre okuma raporları içe aktarıldığında. RGU / Medikal Fizikçi P2P Nöbet Devir Havuz Süresi (36s) [Nöbet Devir & Takas Analitiği] Devre bırakılan nöbetlerin sahipsiz kalmasını ve son dakika açıklarını engellemek. Havuza bırakılan nöbet 36 saat boyunca başka bir tekniker tarafından devralınmazsa istek iptal edilir ve nöbet sahibinde kalır. Nöbet devir talebi açıldığı andan itibaren 36 saat. Nöbetçi Personel Cihaz QC ve Lisans 30 Gün Uyarısı [Cihaz & QC Yönetimi Göstergesi] NDK lisansı veya periyodik kalite kontrol süresi bitmeden önce yenileme payı bırakmak. Geçerliliğine ≤30 gün kalan cihazlar sarı renkli alarm listesine alınır; süresi dolanlar kırmızı 'Hizmet Dışı' statüsüne geçer. Her gün otomatik takvim kontrolünde. Biyomedikal / RGU Excel ve PDF Dışa Aktarımı [Dışa Aktar / Export Butonları] Denetimlerde ve idari toplantılarda resmi onaylı metrik çıktısı sunmak. Tablodaki filtrelenmiş verileri sütun hizalı Excel (.xlsx) veya kurumsal antetli PDF belgesi olarak indirir. Kullanıcı [Excel İndir] veya [PDF İndir] butonuna bastığında. Tüm Kullanıcılar Web Portalı Aç Butonu [Portal Başlatıcı / Tray Menüsü] Servis başlatıcı penceresinden tek tıkla canlı web portalını ve gösterge panellerini tarayıcıda açmak. İşletim sisteminin varsayılan güncel tarayıcısını önceliklendirerek Port 3000 portal ana sayfasını açar; Sandbox veya kısıtlı ortamlarda Edge yedeğini kullanır. Kullanıcı başlatıcıdaki [Web Portalı Aç] butonuna veya sistem tepsisindeki menü öğesine tıkladığında. Tüm Kullanıcılar Şifreli Lisans (.lic) ve Gömülü Cloudflare Tüneli [Portal Başlatıcı > Tünel Durum Rozeti] Modem portu açmadan ve ek program kurmadan kuruma özel alt alan adıyla (Örn: kurumadi.radpys.com) güvenli dış erişim sağlamak. Kuruma özel tünel ve Turnstile anahtarları .lic lisans dosyası içinde Cihaz Kimliğine (Machine ID) bağlı AES-256 şifreli gelir. Hiçbir personel veya dozimetre verisi dış sunucularda saklanmaz (%100 Yerel KVKK Güvencesi); tünel yalnızca kurum içi yerel bilgisayarınızla tarayıcı arasında uçtan uca şifreli geçiş köprüsü kurar. Lisans etkinleştirildiğinde ve Portal Başlatıcı üzerinden servisler başlatıldığında. Sistem Yöneticisi (Admin) Cloudflare Turnstile & 2FA E-Posta Doğrulaması [Web Giri"
  },
  {
    "id": "22_web_portal_ve_dashboardlar#matrix-5n1k",
    "title": "5N1K Kural ve Ayar Çözümleme Tablosu — Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "22_web_portal_ve_dashboardlar.html#matrix-5n1k",
    "summary": "5N1K Kural ve Ayar Çözümleme Tablosu Masaüstü entegrasyonu, web gösterge panelleri ve operasyonel alarm eşiklerinin kuralları. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Tetiklenme Anı) KİM? ",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)"
    ],
    "content": "5N1K Kural ve Ayar Çözümleme Tablosu Masaüstü entegrasyonu, web gösterge panelleri ve operasyonel alarm eşiklerinin kuralları. NE? (Ekran Kontrolü) NEDEN? (Amacı) NASIL? (Çalışma Mantığı) NE ZAMAN? (Tetiklenme Anı) KİM? (Yetkili Rol) Genel Bakış Butonu [Sol Kenar Çubuğu En Üst Buton] Yöneticinin tüm hastane radyoloji birimlerini tek ekranda görmesini sağlamak. Sunucu aktifse varsayılan tarayıcıda Genel Bakış'ı açar; kapalıysa başlatıcıyı arka planda tetikler. Kullanıcı butona bastığında veya Ctrl+K ile seçtiğinde. Tüm Yöneticiler Portal Sunucu Durum Butonu [Durum Çubuğu / Status Bar Butonu] Web Portal sunucusunun Port 3000'de canlı olup olmadığını izlemek ve gerekirse başlatmak. 8 saniyede bir otomatik denetlenir. 200 dönerse yeşil 'Aktif', aksi halde gri 'Kapalı' olur. Tıklandığında başlatıcıyı tetikler. Açılışta ve her 8 saniyede bir periyodik. Sistem Yöneticisi (Admin) 60 Saniye Önbellek & Zorla Yenile [Bellek İçi Cache ve Yenile Butonu] Ağır istatistik ve analitik sorgularının PostgreSQL veritabanını kilitlemesini önlemek. 60 saniye boyunca sorgu sonuçları RAM'den sunulur. Filtre değiştiğinde veya zorla yenilendiğinde veritabanından taze veri çekilir. Web paneli sayfaları arasında gezinirken. Otomatik Sistem Dozimetre Uyarı & Kritik Aşım Alarmı [≥2 mSv ve ≥5 mSv Doz Rozetleri] Yıllık 20 mSv mevzuat sınırına yaklaşan personeli erkenden tespit edip yasal korumaya almak. Aylık derin doz ≥2.0 mSv ise sarı uyarı, ≥5.0 mSv ise kırmızı alarm ve resmi NDK bildirimi zorunluluğu tetiklenir. Ayrıca hakkında inceleme aksiyonu açılan personele Web Portal görev paneline 'Bölüm 2: Çalışan Beyanı' formunu doldurması için anlık görev bildirimi atanır. Dozimetre okuma raporları içe aktarıldığında. RGU / Medikal Fizikçi P2P Nöbet Devir Havuz Süresi (36s) [Nöbet Devir & Takas Analitiği] Devre bırakılan nöbetlerin sahipsiz kalmasını ve son dakika açıklarını engellemek. Havuza bırakılan nöbet 36 saat boyunca başka bir tekniker tarafından devralınmazsa istek iptal edilir ve nöbet sahibinde kalır. Nöbet devir talebi açıldığı andan itibaren 36 saat. Nöbetçi Personel Cihaz QC ve Lisans 30 Gün Uyarısı [Cihaz & QC Yönetimi Göstergesi] NDK lisansı veya periyodik kalite kontrol süresi bitmeden önce yenileme payı bırakmak. Geçerliliğine ≤30 gün kalan cihazlar sarı renkli alarm listesine alınır; süresi dolanlar kırmızı 'Hizmet Dışı' statüsüne geçer. Her gün otomatik takvim kontrolünde. Biyomedikal / RGU Excel ve PDF Dışa Aktarımı [Dışa Aktar / Export Butonları] Denetimlerde ve idari "
  },
  {
    "id": "22_web_portal_ve_dashboardlar#workflow",
    "title": "Web Portal ve Dashboard Mimari Akış Şeması (Mermaid) — Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "22_web_portal_ve_dashboardlar.html#workflow",
    "summary": "Web Portal ve Dashboard Mimari Akış Şeması (Mermaid) Aşağıdaki şema, masaüstü uygulamasının portal sunucusunu denetlemesinden tarayıcıda canlı gösterge panellerinin yüklenmesine kadar olan mimari entegrasyonu göstermekte",
    "headings": [
      "Web Portal ve Dashboard Mimari Akış Şeması (Mermaid)",
      "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)"
    ],
    "content": "Web Portal ve Dashboard Mimari Akış Şeması (Mermaid) Aşağıdaki şema, masaüstü uygulamasının portal sunucusunu denetlemesinden tarayıcıda canlı gösterge panellerinin yüklenmesine kadar olan mimari entegrasyonu göstermektedir. flowchart TD A[\"RADPYS Masaüstü Başlatılır\"] --> B{\"8s Periyodik Sağlık Kontrolü\"} B -- \"Port 3000 Aktif\" --> C[\"Durum Çubuğu: 'Portal Sunucu: Aktif' (Yeşil)\"] B -- \"Port 3000 Kapalı\" --> D[\"Durum Çubuğu: 'Portal Sunucu: Kapalı' (Gri)\"] D --> E[\"Yönetici [Portal Sunucu] Butonuna Tıklar\"] E --> F[\"RADPYS_Portal_Launcher.exe Arka Planda Başlatılır\"] F --> C C --> G[\"Kullanıcı [Genel Bakış] Butonuna Basar\"] G --> H[\"Web Tarayıcısı Açılır: http://localhost:3000/dashboard/genel\"] H --> I{\"60s Bellek İçi Önbellek (Cache) Geçerli mi?\"} I -- \"Evet\" --> J[\"Veriler RAM Önbelleğinden Anında Yüklenir\"] I -- \"Hayır / Taze Veri\" --> K[\"Canlı PostgreSQL Veritabanı Sorgulanır\"] K --> L[\"Önbellek 60s Güncellenir ve Ekrana Basılır\"] J --> M[\"Yönetici Karar Destek Kokpiti\"] L --> M M --> N[\"4 Temel Yönetici KPI Kartı (Kadro, Nöbet, Doz, Olay)\"] M --> O[\"4 Kurumsal Uyum Kartı (Cihaz, Lisans, RKE, Eğitim)\"] M --> P[\"Alt Birim Maruziyet & Doz Trend Grafikleri\"] M --> Q[\"Tek Tıkla Alt Dashboardlara Geçiş (20 Modül)\"]"
  },
  {
    "id": "22_web_portal_ve_dashboardlar#screenshots",
    "title": "Ekran Konumları ve Görsel Rehber — Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "22_web_portal_ve_dashboardlar.html#screenshots",
    "summary": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Masaüstü Ana Ekranı > Sol Kenar Çubuğu [Genel Bakış] & Durum Çubuğu [Portal Sunucu] Masaüstü Köprü Entegrasyonu Simülasyon Notu: Masaüstü sol menüdeki Genel Bakış butonu v",
    "headings": [
      "Ekran Konumları ve Görsel Rehber",
      "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)"
    ],
    "content": "Ekran Konumları ve Görsel Rehber ️ Ekran Konumu: Masaüstü Ana Ekranı > Sol Kenar Çubuğu [Genel Bakış] & Durum Çubuğu [Portal Sunucu] Masaüstü Köprü Entegrasyonu Simülasyon Notu: Masaüstü sol menüdeki Genel Bakış butonu ve sağ alt durum çubuğundaki canlı Portal Sunucu sağlık göstergesi. ️ Ekran Konumu: Masaüstü Durum Çubuğu > [Portal Sunucu: Aktif] > Portal Başlatıcı Paneli Portal Launcher & Sunucu Kontrolü Simülasyon Notu: Arka plan API (Port 5000) ve Web Arayüzü (Port 3000) servislerinin tek tıkla başlatılması ve yerel ağ (LAN) adres bilgisi. ️ Ekran Konumu: Web Tarayıcısı > http://localhost:3000/dashboard/genel [Yönetici Özeti] Executive Overview & 20 Analitik Dashboard Simülasyon Notu: 8 temel yönetici KPI kartı, 4 kurumsal uyum göstergesi, alt birim doz trendleri ve 20 modüle tek tıkla geçiş kokpiti."
  },
  {
    "id": "22_web_portal_ve_dashboardlar#step-by-step",
    "title": "Adım Adım Eylem Akışı — Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "22_web_portal_ve_dashboardlar.html#step-by-step",
    "summary": "Adım Adım Eylem Akışı Adım 1: Masaüstünden Portal Durumunu Doğrulama Masaüstü uygulamasının sağ alt köşesindeki durum çubuğuna bakın. Eğer yeşil renkli [Portal Sunucu: Aktif] yazıyorsa sunucu hazırdır. Eğer gri renkli [P",
    "headings": [
      "Adım Adım Eylem Akışı",
      "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)"
    ],
    "content": "Adım Adım Eylem Akışı Adım 1: Masaüstünden Portal Durumunu Doğrulama Masaüstü uygulamasının sağ alt köşesindeki durum çubuğuna bakın. Eğer yeşil renkli [Portal Sunucu: Aktif] yazıyorsa sunucu hazırdır. Eğer gri renkli [Portal Sunucu: Kapalı] yazıyorsa butona bir kez tıklayarak arka planda Portal Başlatıcı'yı çalıştırın; 3-4 saniye içinde aktifleşecektir. Adım 2: Genel Bakış Ekranını Açma ve KPI İnceleme Sol kenar çubuğunun en üstündeki [Genel Bakış] butonuna tıklayın. Varsayılan tarayıcınızda açılan ekranda 4 temel yönetici kartını (Kadro, Nöbet, Dozimetre, Olay) ve 4 kurumsal uyum kartını (Cihaz, NDK Lisansları, RKE, Eğitim) kontrol edin. Sayıların üzerine dokunarak ilgili alt modüle doğrudan geçiş yapabilirsiniz. Adım 3: İlgili Gösterge Panellerine Geçiş Sol menüdeki akordeon gruplarından incelemek istediğiniz alana tıklayın: Nöbet Yönetimi: Kurumsal nöbet matrisi, poliklinik vardiyaları, kısıt ihlalleri ve adalet katsayıları. Dozimetre Takibi: 2 mSv ve 5 mSv aşım alarmları, DÖF aksiyonları ve RDF-43 araştırma formları. Denetim Panosu: Sağlık Bakanlığı SKS ve NDK denetim hazırlık eksiklik kontrol listesi. Cihaz & RKE: Lisans vize süreleri, bakım gecikmeleri ve DIN 6857-1 kurşun ekipman muayeneleri. Adım 4: Filtreleme, Zorla Yenileme ve Resmi Rapor Alma Üstteki filtre çubuğundan Departman veya Yıl/Ay seçimi yapın. Yeni bir kayıt girildiğinde 60 saniyelik önbelleği beklemeden anlık veri çekmek için sağ üstteki [Yenile] butonuna basın. İncelediğiniz tabloyu denetime sunmak için [Excel İndir] veya [PDF İndir] butonuna tıklayın."
  },
  {
    "id": "22_web_portal_ve_dashboardlar#hybrid-platform",
    "title": "Hibrit Platform Karşılaştırması (Masaüstü & Web) — Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "22_web_portal_ve_dashboardlar.html#hybrid-platform",
    "summary": "Hibrit Platform Karşılaştırması (Masaüstü & Web) Masaüstü Uygulaması (PySide6) • Sunucu Yönetimi: Durum çubuğunda Node.js Port 3000 sağlık kontrolü ve arka plan launcher tetikleme. • Hızlı Köprü: Tek tıkla varsayılan tar",
    "headings": [
      "Hibrit Platform Karşılaştırması (Masaüstü & Web)",
      "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)"
    ],
    "content": "Hibrit Platform Karşılaştırması (Masaüstü & Web) Masaüstü Uygulaması (PySide6) • Sunucu Yönetimi: Durum çubuğunda Node.js Port 3000 sağlık kontrolü ve arka plan launcher tetikleme. • Hızlı Köprü: Tek tıkla varsayılan tarayıcıda yönetici kokpitini açma yetkisi. • Gelişmiş Solver & Rapor: Nöbet dağıtım motorunu çalıştırma, Excel toplu içe aktarım ve şifreli evrak kasası yönetimi. Web Portalı & PWA (React 18 + Vite) • 20 Analitik Dashboard: Dozimetre, nöbet devir, SKS denetim, RKE ve ortam dozu göstergeleri. • Mobil / Tablet Uyumu: Kurum içindeki telefon ve tabletlerden duyarlı (responsive) anlık veri takibi. • Yüksek Performans: 60 saniyelik bellek içi önbellek ile anında grafik yükleme ve rapor dökümü."
  },
  {
    "id": "22_web_portal_ve_dashboardlar#troubleshooting",
    "title": "Hata Mesajları ve Sorun Giderme Rehberi — Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "22_web_portal_ve_dashboardlar.html#troubleshooting",
    "summary": "Hata Mesajları ve Sorun Giderme Rehberi Hata / Durum Bildirimi Olası Neden Çözüm Adımı \"Portal Sunucu: Kapalı\" Node.js Express sunucusu Port 3000 üzerinde henüz başlatılmamış. Masaüstü durum çubuğundaki butona bir kez tı",
    "headings": [
      "Hata Mesajları ve Sorun Giderme Rehberi",
      "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)"
    ],
    "content": "Hata Mesajları ve Sorun Giderme Rehberi Hata / Durum Bildirimi Olası Neden Çözüm Adımı \"Portal Sunucu: Kapalı\" Node.js Express sunucusu Port 3000 üzerinde henüz başlatılmamış. Masaüstü durum çubuğundaki butona bir kez tıklayarak başlatıcıyı devreye alın (3-4 saniye bekleyin). \"Portal Başlatıcı (RADPYS_Portal_Launcher.exe) bulunamadı.\" Başlatıcı yürütülebilir dosyası silinmiş veya kurulum dizini dışına taşınmış. RADPYS kurulum klasöründeki user_launcher dizinini kontrol ediniz veya sistem yöneticisine başvurunuz. \"Yeni girdiğim nöbet/kaza kaydı gösterge panelinde görünmüyor.\" 60 saniyelik bellek içi önbellek henüz süresini doldurmamış. Dashboard'un sağ üstündeki [Yenile] butonuna basarak önbelleği zorla temizleyip taze veri çekiniz. \"Tarayıcıda sayfa yüklenmiyor (Bağlantı Reddedildi)\" PostgreSQL veritabanı veya web sunucusu güvenlik duvarı tarafından engellenmiş. Yerel güvenlik yazılımında 3000 portuna yerel ağ (localhost) izinlerini veriniz."
  },
  {
    "id": "22_web_portal_ve_dashboardlar#faq",
    "title": "Sıkça Sorulan Sorular (SSS) — Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "22_web_portal_ve_dashboardlar.html#faq",
    "summary": "Sıkça Sorulan Sorular (SSS) Web Portal sunucusunu başlatma yetkisi kimdedir? Kurumsal güvenlik kuralı gereğince durum çubuğundaki başlatıcı tetikleme yetkisi yalnızca Sistem Yöneticisi (Admin) rolüne aittir. Normal kulla",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) Web Portal sunucusunu başlatma yetkisi kimdedir? Kurumsal güvenlik kuralı gereğince durum çubuğundaki başlatıcı tetikleme yetkisi yalnızca Sistem Yöneticisi (Admin) rolüne aittir. Normal kullanıcılar ve teknikerler açık olan portali tarayıcıdan izleyebilir ancak arka plan sunucu sürecini başlatamaz veya durduramaz. 60 saniyelik önbellek süresi verilerin gecikmesine yol açar mı? Hayır. 60 saniyelik TTL (Time-to-Live), yüzlerce personelin aynı anda gösterge panellerini açtığı kurumsal hastane ağlarında veritabanı kilitlenmelerini önleyen endüstriyel bir standarttır. Kritik bir veri girişi yapıldığında paneldeki [Yenile] butonuna basılarak önbellek anında geçersiz kılınabilir ve canlı veri çekilebilir. Web Gösterge Panellerine cep telefonu veya tabletten erişilebilir mi? Evet. RADPYS Web Portalı modern duyarlı (responsive) React mimarisinde geliştirilmiştir. Hastane yerel Wi-Fi ağına bağlı tabletler ve akıllı telefonlar üzerinden yetkili kullanıcı girişi yapılarak tüm paneller ve grafikler tam ekran olarak incelenebilir. İnternet bağlantısı kesildiğinde Web Portal çalışmaya devam eder mi? Evet, kesintisiz çalışır. RADPYS sistemi dış bulut servislerine bağımlı değildir; kurumun yerel sunucusunda veya ana bilgisayarında çalışan yerel PostgreSQL ve Node.js mimarisiyle kuruludur. Dış internet bağlantısı kesilse dahi hastane intranet ağı üzerinden gösterge panellerine erişim eksiksiz devam eder. Portal Başlatıcı üzerindeki [Web Portalı Aç] butonu hangi tarayıcıyı kullanır? Kullanıcının işletim sisteminde varsayılan olarak belirlediği güncel web tarayıcısı (Google Chrome, Mozilla Firefox, Brave vb.) otomatik olarak açılır. Yalnızca kısıtlı kurumsal konteyner veya izole güvenlik ortamlarında (Windows Sandbox gibi) protokol uyumluluğunu korumak amacıyla Microsoft Edge yedeği devreye girer."
  },
  {
    "id": "23_rapor_tutanak_merkezi",
    "title": "23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor",
    "url": "23_rapor_tutanak_merkezi.html",
    "summary": "Çoklu koruyucu ekipman ve cihazlar için tek resmi tutanakta heyet kararı oluşturun; iki aşamalı yasal tasfiye döngüsüyle EBYS kapatması yapıp SHA-256 ile mühürleyin. Kurumsal 26 resmi mevzuat raporunu \"Doğru İşe Tek Format\" standardıyla (tablolar için Excel, r",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler",
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "Mit Avcısı: Rapor ve Tutanaklarda Yanlış Bilinen Doğrular",
      "Raporlama ve Tutanak Yaşam Döngüsü Süreç Akışı",
      "Kurumsal Rapor Merkezi: Resmi Mevzuat Kataloğu & Üretim Motoru",
      "Çıktı Formatları ve \"Doğru İşe Tek Format\" Standardı",
      "Şablon Tasarım ve Marka Ayarları:",
      "Evrensel Tutanak ve Komisyon Karar Sihirbazı & Şablon Tasarım Stüdyosu",
      "İkili Belge Düzeni: Salt Metin veya Sandviç Tablo",
      "İlgili Modül / Kapsam ve Dinamik Değişken Motoru",
      "Arayüz Rehberi & Ekran Görünümleri",
      "Sıkça Sorulan Sorular (SSS)"
    ],
    "content": "Kılavuz Ana Sayfası Bölüm 1: Başlangıç & Altyapı 23. Rapor & Tutanak Merkezi Tek Resmi PDF Standardı 2 Aşamalı HEK & SHA-256 Mühürleme SKS 6.1 & NDK 26 Resmi Rapor Kataloğu Okuma Süresi: 6 Dakika | RADPYS v4.2 23. Raporlama ve Tutanak Yönetim Merkezi Çoklu koruyucu ekipman ve cihazlar için tek resmi tutanakta heyet kararı oluşturun; iki aşamalı yasal tasfiye döngüsüyle EBYS kapatması yapıp SHA-256 ile mühürleyin. Kurumsal 26 resmi mevzuat raporunu \"Doğru İşe Tek Format\" standardıyla (tablolar için Excel, resmi tutanaklar için kilitli PDF, yönetmelik taslakları için Word) tek tıkla üretin. 20s Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler Tek Resmi PDF Standardı 2 Aşamalı Mühürleme (SHA-256) Otomatik Akıllı Heyet ️ Rapor Tasarım Stüdyosu İstenen Sonuç: Birden fazla ekipman veya cihaz için tek resmi tutanak almak, iki aşamalı mühürleme ile yasal HEK tasfiye sürecini tamamlamak ve kurumsal 26 resmi sistem raporunu antetli üretmek. ️ Yapılacak İşlem: Envanter tablosunda kayıtları seçip [HEK Tutanağı] butonuna basın; gerekçeleri düzenleyip [Tutanak Oluştur / Yazdır] ile tek resmi PDF üretin; imzalar sonrası EBYS kapatma formundan üst yazıyı ekleyin. Sistem Etkisi: İlk aşamada ekipmanlar silinmez, \"Heyet İmzasında\" durumuna alınır; EBYS kapatması yapıldığında SHA-256 dijital mührüyle nihai birleşik tasfiye PDF'i üretilir ve kayıtlar kalıcı kilitlenir. 5N1K Kural ve Ayar Çözümleme Tablosu RAPOR-TUTANAK-RULE-MATRIX NE (İşlem / Alan) NEDEN (Gerekçe) NEREDE (Arayüz Yolu) NASIL (Yöntem) NE ZAMAN (Zamanlama) KİM (Rol / Yetki) DURUM (Sistem Tepkisi) Resmi Rapor Üretimi SKS 6.1 ve NDK denetimleri veya kurum içi analizler için resmi belge almak Rapor Merkezi → Raporlar Sekmesi Rapor Seç → Filtrele → \"Rapor Oluştur ve Aç\" Periyodik denetim veya yönetim taleplerinde Raporlar Okuma Yetkilisi Resmi PDF veya analitik Excel formatında diskte üretilir ve sistemde açılır Şablon ve Marka Ayarı Kurum başlıklarını ve resmi çift logoyu antetli belgelere giydirmek Rapor Merkezi → Şablon Ayarları Logo Seç → Başlık Gir → Antetli Şablonu Güncelle Kurum logosu veya başlığı değiştiğinde Sistem Yöneticisi / Admin Tüm kurumsal antetli raporlara otomatik yansır Tutanak ve Heyet Kararı Oluşturma Çoklu kayıt (örn: 20 RKE veya cihaz) için tek bir resmi evrakta gerekçe, döküm tablosu, karar ve imza heyeti oluşturmak Sol Menü → [Tutanak Sihirbazı] VEYA Modül Araç Çubuğu → [HEK Tutanağı] / [Tutanak Oluştur] Kayıtları Seç → Sihirbazı Aç → Giriş/Sonuç Metinlerini Düzenle → [Tutanak Oluştur / Yazdır] (Resmi PDF) HEK, devir, imha veya komisyon kararı alınacağı an Komisyon Başkanı / Birim Yetkilisi Tek resmi kilitli PDF üretilir; keyfi değişiklikleri önlemek için Word çıktısı tamamen kaldırılmıştır İki Aşamalı HEK & Kalıcı Mühürleme Heyet ıslak imzası ve resmi Ayniyat EBYS yazısı olmadan kayıtların erken kayıttan düşmesini engellemek Cihaz / RKE Yönetimi → [HEK Tutanağı] ve HEK Yönetimi → [EBYS ile Kapat] 1. Aşamada Heyet Ön İnceleme Tutanağı üretilir; 2. Aşamada imzalı taranmış üst yazı eklenip SHA-256 ile mühürlenir Ekipman heyete sevk edildiğinde ve Ayniyat devri bittiğinde Muayene Heyeti / Birim Amiri / Taşınır Yetkilisi Ekipmanlar önce 'Heyet İmzasında' kalır; kapatılınca birleşik mühürlü PDF oluşur ve kalıcı kilitlenir Şablon Tasarım ve Klonlama Stüdyosu Kurumun kendine özgü rapor, çizelge veya tutanak formatlarını sıfırdan tasarlamak veya mevcutları uyarlamak Rapor Merkezi → [Yeni Tasarla] VEYA [Özelleştir] Veri Kaynağı Seç → Kolonları ve Başlıkları Belirle → Sayfa Yönü / Format Ata → Kaydet Yeni bir resmi form veya denetim şablonu gerektiğinde Sistem Yöneticisi / Admin Şablon kataloğuna anında eklenir; ilgili modül dışa aktar menülerinde canlı görünür Tıklanabilir Değişken Butonları Tutanak metinlerine tarih, kurum adı, departman veya kayıt sayısını tek tıkla hatasız eklemek Tutanak Sihirbazı / Şablon Tasarım → Metin Kutuları Altındaki [+ {{ ... }}] Butonları Metin kutusunda imleci yerleştir → İlgili değişken butonuna tıkla Tutanak gerekçesi veya karar metni yazılırken Tüm Kullanıcılar İmlecin bulunduğu yere etiket eklenir; tutanak çıktısında gerçek değerlerle çözümlenir Akıllı Kriter Çerçevesi Yönetimi Parametresi veya filtre kriteri bulunmayan raporlarda ekranda içi boş bir kutu kalmasını önlemek Rapor Merkezi Kokpiti → [Rapor Kriterleri ve Filtreleri] Kutusu Sistem tarafından otomatik yönetilir (Kriter varsa açılır, yoksa gizlenir) Listeden bir rapor veya tutanak seçildiği an Sistem Otomasyonu Gereksiz boş kutu ekrandan kaybolur; tablo ve butonlar ferah bir şekilde yukarı kayar Çoklu Sütun Sayfa Yönlendirme Adaptasyonu Çok sütunlu geniş tablolarda metinlerin sıkışmasını veya sayfa kenarından taşmasını önlemek PDF Çıktı Motoru (Otomatik Sistem Kuralı) Sütun sayısı ≤ 6 ise Dikey A4, > 6 ise otomatik Yatay A4 olarak dökülür Herhangi bir tablonun veya raporun PDF dökümü alındığında Sistem Otomasyonu Geniş tablolarda yatay yönlendirme sayesinde tüm sütunlar kusursuz okunur NDK RKP Başvuru Dosyası NDK RSGD-KLV-014 ve KLV-014-EK mevzuatına uygun resmi başvuru dosyasını üretmek Kalite / Cihaz Modülü → NDK RKP Sihirbazı 8 Adımlı Sihirbaz → Verileri Doğrula → \"Resmi Word / PDF İndir\" İlk lisans başvurusu, lisans vize yenileme veya denetim süreçlerinde RKS / Kurum Amiri Resmi yatay mizanpajlı Word ve PDF üretilir; KVKK Evrak Kasasına tek tıkla şifrelenir Mit Avcısı: Rapor ve Tutanaklarda Yanlış Bilinen Doğrular RAPOR-MYTH-BUSTER YANLIŞ (Mit): \"Tutanak Sihirbazı'nda oluşturduğum resmi tutanağı Word (.docx) olarak indirip üzerinde istediğim değişiklikleri yapabilirim.\" DOĞRU (Mevzuat Standardı): Tutanaklar hukuki bağlayıcılığı olan heyet kararlarıdır. Keyfi tahrifat ve yetkisiz değişiklikleri önlemek amacıyla Word indirme seçeneği sistemden tamamen silinmiş olup tek resmi standart kilitli PDF çıktısıdır. YANLIŞ (Mit): \"HEK tutanağı aldığım an ekipmanlar doğrudan envanterden silinir ve hurdaya ayrılmış olur.\" DOĞRU (Mevzuat Standardı): İki Aşamalı Yasal Tasfiye Kuralı gereğince ilk aşamada ekipmanlar silinmez, \"Heyet İmzasında\" duru"
  },
  {
    "id": "23_rapor_tutanak_merkezi#hizli-recete",
    "title": "Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler — 23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "23_rapor_tutanak_merkezi.html#hizli-recete",
    "summary": "20s Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler Tek Resmi PDF Standardı 2 Aşamalı Mühürleme (SHA-256) Otomatik Akıllı Heyet ️ Rapor Tasarım Stüdyosu İstenen Sonuç: Birden fazla ekipman veya cihaz için tek resmi tut",
    "headings": [
      "Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler",
      "23. Raporlama ve Tutanak Yönetim Merkezi"
    ],
    "content": "20s Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler Tek Resmi PDF Standardı 2 Aşamalı Mühürleme (SHA-256) Otomatik Akıllı Heyet ️ Rapor Tasarım Stüdyosu İstenen Sonuç: Birden fazla ekipman veya cihaz için tek resmi tutanak almak, iki aşamalı mühürleme ile yasal HEK tasfiye sürecini tamamlamak ve kurumsal 26 resmi sistem raporunu antetli üretmek. ️ Yapılacak İşlem: Envanter tablosunda kayıtları seçip [HEK Tutanağı] butonuna basın; gerekçeleri düzenleyip [Tutanak Oluştur / Yazdır] ile tek resmi PDF üretin; imzalar sonrası EBYS kapatma formundan üst yazıyı ekleyin. Sistem Etkisi: İlk aşamada ekipmanlar silinmez, \"Heyet İmzasında\" durumuna alınır; EBYS kapatması yapıldığında SHA-256 dijital mührüyle nihai birleşik tasfiye PDF'i üretilir ve kayıtlar kalıcı kilitlenir."
  },
  {
    "id": "23_rapor_tutanak_merkezi#5n1k-tablosu",
    "title": "5N1K Kural ve Ayar Çözümleme Tablosu — 23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "23_rapor_tutanak_merkezi.html#5n1k-tablosu",
    "summary": "5N1K Kural ve Ayar Çözümleme Tablosu RAPOR-TUTANAK-RULE-MATRIX NE (İşlem / Alan) NEDEN (Gerekçe) NEREDE (Arayüz Yolu) NASIL (Yöntem) NE ZAMAN (Zamanlama) KİM (Rol / Yetki) DURUM (Sistem Tepkisi) Resmi Rapor Üretimi SKS 6",
    "headings": [
      "5N1K Kural ve Ayar Çözümleme Tablosu",
      "23. Raporlama ve Tutanak Yönetim Merkezi"
    ],
    "content": "5N1K Kural ve Ayar Çözümleme Tablosu RAPOR-TUTANAK-RULE-MATRIX NE (İşlem / Alan) NEDEN (Gerekçe) NEREDE (Arayüz Yolu) NASIL (Yöntem) NE ZAMAN (Zamanlama) KİM (Rol / Yetki) DURUM (Sistem Tepkisi) Resmi Rapor Üretimi SKS 6.1 ve NDK denetimleri veya kurum içi analizler için resmi belge almak Rapor Merkezi → Raporlar Sekmesi Rapor Seç → Filtrele → \"Rapor Oluştur ve Aç\" Periyodik denetim veya yönetim taleplerinde Raporlar Okuma Yetkilisi Resmi PDF veya analitik Excel formatında diskte üretilir ve sistemde açılır Şablon ve Marka Ayarı Kurum başlıklarını ve resmi çift logoyu antetli belgelere giydirmek Rapor Merkezi → Şablon Ayarları Logo Seç → Başlık Gir → Antetli Şablonu Güncelle Kurum logosu veya başlığı değiştiğinde Sistem Yöneticisi / Admin Tüm kurumsal antetli raporlara otomatik yansır Tutanak ve Heyet Kararı Oluşturma Çoklu kayıt (örn: 20 RKE veya cihaz) için tek bir resmi evrakta gerekçe, döküm tablosu, karar ve imza heyeti oluşturmak Sol Menü → [Tutanak Sihirbazı] VEYA Modül Araç Çubuğu → [HEK Tutanağı] / [Tutanak Oluştur] Kayıtları Seç → Sihirbazı Aç → Giriş/Sonuç Metinlerini Düzenle → [Tutanak Oluştur / Yazdır] (Resmi PDF) HEK, devir, imha veya komisyon kararı alınacağı an Komisyon Başkanı / Birim Yetkilisi Tek resmi kilitli PDF üretilir; keyfi değişiklikleri önlemek için Word çıktısı tamamen kaldırılmıştır İki Aşamalı HEK & Kalıcı Mühürleme Heyet ıslak imzası ve resmi Ayniyat EBYS yazısı olmadan kayıtların erken kayıttan düşmesini engellemek Cihaz / RKE Yönetimi → [HEK Tutanağı] ve HEK Yönetimi → [EBYS ile Kapat] 1. Aşamada Heyet Ön İnceleme Tutanağı üretilir; 2. Aşamada imzalı taranmış üst yazı eklenip SHA-256 ile mühürlenir Ekipman heyete sevk edildiğinde ve Ayniyat devri bittiğinde Muayene Heyeti / Birim Amiri / Taşınır Yetkilisi Ekipmanlar önce 'Heyet İmzasında' kalır; kapatılınca birleşik mühürlü PDF oluşur ve kalıcı kilitlenir Şablon Tasarım ve Klonlama Stüdyosu Kurumun kendine özgü rapor, çizelge veya tutanak formatlarını sıfırdan tasarlamak veya mevcutları uyarlamak Rapor Merkezi → [Yeni Tasarla] VEYA [Özelleştir] Veri Kaynağı Seç → Kolonları ve Başlıkları Belirle → Sayfa Yönü / Format Ata → Kaydet Yeni bir resmi form veya denetim şablonu gerektiğinde Sistem Yöneticisi / Admin Şablon kataloğuna anında eklenir; ilgili modül dışa aktar menülerinde canlı görünür Tıklanabilir Değişken Butonları Tutanak metinlerine tarih, kurum adı, departman veya kayıt sayısını tek tıkla hatasız eklemek Tutanak Sihirbazı / Şablon Tasarım → Metin Kutuları Altındaki"
  },
  {
    "id": "23_rapor_tutanak_merkezi#mit-avcilari",
    "title": "Mit Avcısı: Rapor ve Tutanaklarda Yanlış Bilinen Doğrular — 23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "23_rapor_tutanak_merkezi.html#mit-avcilari",
    "summary": "Mit Avcısı: Rapor ve Tutanaklarda Yanlış Bilinen Doğrular RAPOR-MYTH-BUSTER YANLIŞ (Mit): \"Tutanak Sihirbazı'nda oluşturduğum resmi tutanağı Word (.docx) olarak indirip üzerinde istediğim değişiklikleri yapabilirim.\" DOĞ",
    "headings": [
      "Mit Avcısı: Rapor ve Tutanaklarda Yanlış Bilinen Doğrular",
      "23. Raporlama ve Tutanak Yönetim Merkezi"
    ],
    "content": "Mit Avcısı: Rapor ve Tutanaklarda Yanlış Bilinen Doğrular RAPOR-MYTH-BUSTER YANLIŞ (Mit): \"Tutanak Sihirbazı'nda oluşturduğum resmi tutanağı Word (.docx) olarak indirip üzerinde istediğim değişiklikleri yapabilirim.\" DOĞRU (Mevzuat Standardı): Tutanaklar hukuki bağlayıcılığı olan heyet kararlarıdır. Keyfi tahrifat ve yetkisiz değişiklikleri önlemek amacıyla Word indirme seçeneği sistemden tamamen silinmiş olup tek resmi standart kilitli PDF çıktısıdır. YANLIŞ (Mit): \"HEK tutanağı aldığım an ekipmanlar doğrudan envanterden silinir ve hurdaya ayrılmış olur.\" DOĞRU (Mevzuat Standardı): İki Aşamalı Yasal Tasfiye Kuralı gereğince ilk aşamada ekipmanlar silinmez, \"Heyet İmzasında\" durumuna alınır. Heyetin ıslak imzalı tutanağı ve Taşınır/EBYS resmi yazısı taranıp yüklenmeden hiçbir ekipman kayıttan düşülmez. YANLIŞ (Mit): \"Kurum ayarlarında çift logo tanımlı değilse Word ve PDF raporları hata verip kilitlenir.\" DOĞRU (Mevzuat Standardı): Rapor motoru kurumda tek logo yüklüyse sadece mevcut logoyu basar; hiç logo tanımlanmamışsa şablon logoları atlayarak dürüst kurumsal varsayılan olan RADPYS antetini kullanır ve hatasız döküm üretir. YANLIŞ (Mit): \"Resmi antetli Word ve PDF raporlarını Web Portal üzerinden de oluşturabilirim.\" DOĞRU (Mevzuat Standardı): Antetli matbu Word (.docx), PDF ve Excel rapor merkezi yalnızca Masaüstü İstemcisi üzerinde çalışır. Web portalda ise personelin bireysel başvuru ekranları ve etkileşimli canlı analiz panoları yer alır."
  },
  {
    "id": "23_rapor_tutanak_merkezi#surec-akisi",
    "title": "Raporlama ve Tutanak Yaşam Döngüsü Süreç Akışı — 23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "23_rapor_tutanak_merkezi.html#surec-akisi",
    "summary": "Raporlama ve Tutanak Yaşam Döngüsü Süreç Akışı RAPOR-TUTANAK-WORKFLOW graph TD classDef desktop fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e40af; classDef decision fill:#fffbeb,stroke:#d97706,stroke-width:1.5",
    "headings": [
      "Raporlama ve Tutanak Yaşam Döngüsü Süreç Akışı",
      "23. Raporlama ve Tutanak Yönetim Merkezi"
    ],
    "content": "Raporlama ve Tutanak Yaşam Döngüsü Süreç Akışı RAPOR-TUTANAK-WORKFLOW graph TD classDef desktop fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e40af; classDef decision fill:#fffbeb,stroke:#d97706,stroke-width:1.5px,color:#b45309; classDef vault fill:#fdf4ff,stroke:#a855f7,stroke-width:1.5px,color:#7e22ce; classDef hek fill:#fff1f2,stroke:#e11d48,stroke-width:1.5px,color:#9f1239; A[\"Çoklu Ekipman / Cihaz Seçimi (RKE veya Cihaz Tablosu)\"]:::desktop --> B[\"Tutanak Sihirbazı (Otomatik Akıllı Heyet Atama)\"]:::desktop B --> C[\"Gerekçe & Karar Metinleri (Dinamik Değişken Butonları)\"]:::desktop C --> D[\"1. Aşama: Heyet Ön İnceleme Tutanağı (Tek Resmi Antetli PDF Üretimi)\"]:::hek D --> E[\"Kayıtların Kilitlenmesi ('Heyet İmzasında' Durumu)\"]:::hek E --> F[\"Komisyon Islak / E-İmza Süreci & Taşınır / Ayniyat Sevk Yazısı\"]:::hek F --> G[\"2. Aşama: EBYS Kapatma Formu (Taranmış İmzalı Üst Yazı Ekleme)\"]:::hek G --> H[\"SHA-256 Dijital Mührü & Birleşik Nihai Tasfiye PDF'i\"]:::vault H --> I[\"Kayıtların Kalıcı Arşivlenmesi & Evrak Kasasına Bağlantı\"]:::vault J[\"Rapor Merkezi Kokpiti (26 Resmi Mevzuat Raporu)\"]:::desktop --> K[\"Dinamik Filtre Formu (Departman, Dönem, Tarih)\"]:::desktop K --> L{\"Çıktı Formatı Seçimi\"}:::decision L -- \"PDF\" --> M[\"Akıllı Sayfa Yönlendirme (6 ve Altı Sütun: Dikey / 7 ve Üstü: Yatay)\"]:::desktop L -- \"Excel\" --> N[\"Veri Cetveli (.xlsx) (Filtrelenebilir Tablo)\"]:::desktop L -- \"Word\" --> O[\"Antetli Resmi Yazı (.docx) (docxtpl Şablon Motoru)\"]:::desktop"
  },
  {
    "id": "23_rapor_tutanak_merkezi#rapor-merkezi",
    "title": "Kurumsal Rapor Merkezi: Resmi Mevzuat Kataloğu & Üretim Motoru — 23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "23_rapor_tutanak_merkezi.html#rapor-merkezi",
    "summary": "Kurumsal Rapor Merkezi: Resmi Mevzuat Kataloğu & Üretim Motoru REPORT-CATALOG-SSOT Rapor Merkezi, sistem genelindeki tüm klinik, dozimetre, nöbet, personel ve kalite verilerini Sağlık Bakanlığı SKS 6.1 ve NDK standartlar",
    "headings": [
      "Kurumsal Rapor Merkezi: Resmi Mevzuat Kataloğu & Üretim Motoru",
      "23. Raporlama ve Tutanak Yönetim Merkezi"
    ],
    "content": "Kurumsal Rapor Merkezi: Resmi Mevzuat Kataloğu & Üretim Motoru REPORT-CATALOG-SSOT Rapor Merkezi, sistem genelindeki tüm klinik, dozimetre, nöbet, personel ve kalite verilerini Sağlık Bakanlığı SKS 6.1 ve NDK standartlarında resmi antetli dökümlere dönüştürür. Dozimetre & Sağlık Takip Raporları • SKS SRG11.02 Kümülatif Doz Raporu: Yıllık doz sınırları, %80 eşik yaklaşım uyarıları ve denetim dökümü. • SKS SRG11.04 Gebe Personel Doz Raporu: Hamilelik süresince kümülatif doz ve çalışma alanı uyum cetveli. • DOZ-06 Resmi NDK Doz Aşımı Formu: İnceleme düzeyini aşan vakalarda NDK'ya sunulan resmi araştırma raporu. • Periyodik Sağlık Muayenesi Uyum Raporu: 6331 sayılı İSG Kanunu'na göre geciken ve yaklaşan muayeneler. Nöbet, İzin & SGK Fiili Hizmet Raporları • Fiili Hizmet ve Şua Hakediş Raporu (FHZ): SGK yıpranma payı ve radyasyonlu alanda net çalışma cetveli. • Nöbet Fazla Mesai Bildirim Cetveli: Mutemetlik birimine iletilen resmi normal ve bayram fazla mesai icmali. • Personel İzin Bakiye Cetveli: Yıllık izin, şua izni ve mazeret izinlerinin güncel devir ve hakediş özeti. • Nöbet Hakediş ve Çalışma Raporu: Gece/hafta sonu çarpanları ile nöbet saatleri icmali. Cihaz, RKE & Kalite Güvence Raporları • Cihaz Lisans & Kalibrasyon Raporu: NDK lisans bitiş süreleri ve periyodik kalite kontrol (QC) durumları. • SKS SRG12.01 RKE Muayene Çizelgesi: Kurşun önlük, tiroid ve gözlüklerin DIN 6857 skopi muayene sonuçları. • SKS Ortam Dozu İzleme Raporu: Denetimli/gözetimli alan radyasyon arka plan ölçümleri ve sınır aşımları. • SKS SRG13.02 Olay Bildirim Trend Analizi: İstenmeyen güvenlik olayları, kazalar ve DÖF takibi. Özlük, Eğitim & Lokasyon Dağılım Raporları • Personel Listesi & Künye Raporu: Departman, unvan ve hizmet sınıfına göre filtrelenmiş aktif personel dökümü. • Eğitim & Sınav Tamamlama Raporu: Zorunlu radyasyon güvenliği eğitim ve online sınav başarı tablosu. • Personel Kimlik ve Acil İletişim Rehberi: Kurum içi iletişim ve acil durum irtibat listesi. • Fiziksel Konum Dağılım Raporu: Bina, kat ve oda bazında kurulu cihaz ve personel yerleşimi."
  },
  {
    "id": "23_rapor_tutanak_merkezi#sablon-ve-marka",
    "title": "Çıktı Formatları ve \"Doğru İşe Tek Format\" Standardı — 23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "23_rapor_tutanak_merkezi.html#sablon-ve-marka",
    "summary": "Çıktı Formatları ve \"Doğru İşe Tek Format\" Standardı DOCXTPL-BRANDING Sistem genelindeki çoklu ve mükerrer dışa aktarma karmaşasını önlemek amacıyla RADPYS V4.0.5.0 sürümüyle \"Doğru İşe Tek Format\" standardı hayata geçir",
    "headings": [
      "Çıktı Formatları ve \"Doğru İşe Tek Format\" Standardı",
      "23. Raporlama ve Tutanak Yönetim Merkezi"
    ],
    "content": "Çıktı Formatları ve \"Doğru İşe Tek Format\" Standardı DOCXTPL-BRANDING Sistem genelindeki çoklu ve mükerrer dışa aktarma karmaşasını önlemek amacıyla RADPYS V4.0.5.0 sürümüyle \"Doğru İşe Tek Format\" standardı hayata geçirilmiştir. Kullanıcının gereksiz dosya biçimi seçimiyle vakit kaybetmesi engellenmiş, her iş türü için en uygun ve resmi standart format belirlenmiştir: 1. Operasyonel Tablolar: Excel (.xlsx) Cihaz Envanteri, RKE Donanım Listesi, Dozimetre Takip Dökümleri, İzin Bakiyeleri, Nöbet Çizelgeleri, FHZ Cetvelleri ve Olay Listeleri doğrudan filtrelenebilir kurumsal Excel formatında dökülür. 2. Kanuni Tutanaklar: Kilitli PDF (.pdf) RD.F43 Doz Araştırma Formu, EK-1 Sağlık Muayene Belgesi, SKS Olay Bildirim Tutanağı, DIN 6857 RKE Muayene Tutanağı ve HEK Heyet Kararları değiştirilemez, antetli ve mühürlü PDF formatında üretilir. 3. Mevzuat Kılavuz Taslağı: Word (.docx) Yalnızca NDK KLV-014 Radyasyondan Korunma Programı (RKP) gibi kurumların kendi özel maddelerini ve klinik prosedürlerini serbestçe eklemesi gereken mevzuat kılavuz taslakları Word formatında sunulmaktadır. Şablon Tasarım ve Marka Ayarları: Rapor Merkezi'nin Şablon Ayarları sekmesi ve Şablon Tasarım pencereleri üzerinden kurum kimliği kolayca yönetilir: {{BASLIK_1}} / {{BASLIK_2}}: Kurum üst ve alt antet metinleri (Örn: T.C. Sağlık Bakanlığı / İl Sağlık Müdürlüğü). {{LOGO_1}} / {{LOGO_2}}: Resmi kurum amblemi ve hastane logosu resim dosyaları. * Sıfır Sentetik Kurum Standardı: Sistem ayarlarında henüz bir kurum adı tanımlanmamışsa şablonlarda veya PDF dökümlerinde asla sahte kamu/özel kurum adı yazılmaz; dürüst kurumsal varsayılan olarak RADPYS anteti otomatik çözümlenir."
  },
  {
    "id": "23_rapor_tutanak_merkezi#tutanak-ve-tasarim-studyosu",
    "title": "Evrensel Tutanak ve Komisyon Karar Sihirbazı & Şablon Tasarım Stüdyosu — 23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "23_rapor_tutanak_merkezi.html#tutanak-ve-tasarim-studyosu",
    "summary": "Evrensel Tutanak ve Komisyon Karar Sihirbazı & Şablon Tasarım Stüdyosu V4.2-TUTANAK-STUDIO RADPYS v4.2 ile birlikte sistemde yalnızca klasik satır-sütun tabloları değil; resmi metin içerikli tutanaklar (Nöbet Tutanağı, C",
    "headings": [
      "Evrensel Tutanak ve Komisyon Karar Sihirbazı & Şablon Tasarım Stüdyosu",
      "23. Raporlama ve Tutanak Yönetim Merkezi"
    ],
    "content": "Evrensel Tutanak ve Komisyon Karar Sihirbazı & Şablon Tasarım Stüdyosu V4.2-TUTANAK-STUDIO RADPYS v4.2 ile birlikte sistemde yalnızca klasik satır-sütun tabloları değil; resmi metin içerikli tutanaklar (Nöbet Tutanağı, Cihaz Hasar/Arıza, Devir-Teslim, Zimmet, HEK/Hurda, Komisyon Kararı vb.) oluşturabilme altyapısı devreye alınmıştır. Örneğin 20 adet radyasyon koruyucu ekipman veya tıbbi cihaz için tek tek 20 sayfa evrak basıp kağıt ve zaman israfı yapmak yerine; Giriş Paragrafı (Toplanma Gerekçesi) + Döküm Tablosu (20 Kayıt) + Sonuç / Karar Paragrafı + Komisyon İmza Heyeti yapısı tek bir resmi belgede kilitli ve değiştirilemez tek resmi PDF standardında üretilir. Resmi heyet kararlarında sonradan tahrifat veya yetkisiz metin değişikliğini önlemek amacıyla Word çıktısı tamamen kaldırılmıştır. İkili Belge Düzeni: Salt Metin veya Sandviç Tablo • Salt Metin Tutanağı (Tablosuz / Hızlı): Nöbete gelmeme, idari uyarı veya genel komisyon kararları gibi döküm tablosu gerektirmeyen durumlarda kullanılır. Tablo alanı tamamen gizlenir; PDF çıktısında içi boş tablo veya gereksiz kutular kesinlikle basılmaz. Sadece Başlık + Gerekçe + Karar + Heyet İmzaları tertemiz dökülür. • Metin + Liste + Karar (Sandviç Düzen): HEK, toplu devir-teslim veya çoklu donanım muayenelerinde kullanılır. Giriş paragrafı, seçilen varlıkların döküm tablosu ve sonuç/karar metni kusursuz bir hiyerarşiyle birleşir. • Sistemden Kayıt Ekle: [Kayıt Ekle] menüsüyle sistem veritabanından doğrudan Personel veya Cihaz / RKE Varlığı seçilerek tabloya aktarılabilir. • Manuel Satır Ekle / Sil: Tabloya dilediğiniz sayıda serbest metinli manuel satır ekleyebilir, çift tıklayarak hücreleri anında düzenleyebilirsiniz. • Özel Şablon Olarak Kaydet: Hazırladığınız metin ve heyet yapısını [Şablon Olarak Kaydet] butonuyla kurum kataloğuna ekleyebilir, ileride tek tıkla yeniden kullanabilirsiniz. İlgili Modül / Kapsam ve Dinamik Değişken Motoru Kullanıcıya zorla sabit metin kalıpları dayatılmaz. Kullanıcı yalnızca tutanağın ait olduğu İlgili Modül / Kapsam ı (Nöbet, Cihaz, RKE, Dozimetre, Sağlık vb.) seçer. Sistem seçilen modüle özel mantıklı değişken butonlarını anında metin kutularının altına dizer. Tıklanan değişken imlecin durduğu yere anında eklenir ve dökümde gerçek verilerle doldurulur: Nöbet Seçildiğinde: + &#123;&#123; nobet_tarihi &#125;&#125; / + &#123;&#123; vardiya &#125;&#125; / + &#123;&#123; saat &#125;&#125; / + &#123;&#123; personel_adi &#125;&#125; / + &#123;&#123; departman &#125;&#125; Cihaz Seçi"
  },
  {
    "id": "23_rapor_tutanak_merkezi#ekran-goruntuleri",
    "title": "Arayüz Rehberi & Ekran Görünümleri — 23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "23_rapor_tutanak_merkezi.html#ekran-goruntuleri",
    "summary": "Arayüz Rehberi & Ekran Görünümleri UI-SCREENSHOTS ️ Ekran Konumu: Koruyucu Ekipman (RKE) / Cihazlar > [HEK Tutanağı] Tek Resmi PDF Standardı Yasal Bilgilendirme: Bu görseldeki isimler, TCKN'ler ve kayıtlar tamamen test a",
    "headings": [
      "Arayüz Rehberi & Ekran Görünümleri",
      "23. Raporlama ve Tutanak Yönetim Merkezi"
    ],
    "content": "Arayüz Rehberi & Ekran Görünümleri UI-SCREENSHOTS ️ Ekran Konumu: Koruyucu Ekipman (RKE) / Cihazlar > [HEK Tutanağı] Tek Resmi PDF Standardı Yasal Bilgilendirme: Bu görseldeki isimler, TCKN'ler ve kayıtlar tamamen test amaçlı sentetik veridir. Gerçek kişi ve kayıtlarla benzerlikler tesadüfidir. ️ Ekran Konumu: Yönetim & Karar Destek > Rapor Merkezi Katalog & Dinamik Parametre Formu Yasal Bilgilendirme: Bu görseldeki isimler, TCKN'ler ve kayıtlar tamamen test amaçlı sentetik veridir. Gerçek kişi ve kayıtlarla benzerlikler tesadüfidir."
  },
  {
    "id": "23_rapor_tutanak_merkezi#sss",
    "title": "Sıkça Sorulan Sorular (SSS) — 23. Raporlama ve Tutanak Yönetim Merkezi",
    "category": "6. Dijital Dönüşüm, Onay & Rapor › Bölüm",
    "url": "23_rapor_tutanak_merkezi.html#sss",
    "summary": "Sıkça Sorulan Sorular (SSS) FAQ-SUPPORT 1. 20 adet koruyucu ekipmanı tek bir resmi HEK tutanağında nasıl toplayabilirim? ▼ RKE Yönetimi ekranında klavyeden Ctrl veya Shift tuşuna basılı tutarak tablodaki 20 ekipmanı seçi",
    "headings": [
      "Sıkça Sorulan Sorular (SSS)",
      "23. Raporlama ve Tutanak Yönetim Merkezi"
    ],
    "content": "Sıkça Sorulan Sorular (SSS) FAQ-SUPPORT 1. 20 adet koruyucu ekipmanı tek bir resmi HEK tutanağında nasıl toplayabilirim? ▼ RKE Yönetimi ekranında klavyeden Ctrl veya Shift tuşuna basılı tutarak tablodaki 20 ekipmanı seçin ve üst araç çubuğundaki [HEK Tutanağı] butonuna tıklayın. Açılan sihirbazda 20 ekipman doğrudan döküm tablosuna yerleştirilir; giriş ve karar gerekçelerini düzenleyip tek tıkla resmi, antetli ve imza çizgili tek PDF belgesi alabilirsiniz. 2. Tutanak Sihirbazı'nda neden Word (.docx) indirme seçeneği bulunmuyor? ▼ Tutanaklar; komisyon üyelerinin ıslak/e-imzasıyla resmiyet kazanan hukuki vesikalardır. Word gibi üzerinde sonradan tahrifat veya yetkisiz değişiklik yapılabilen formatlar denetim güvenliğini ihlal eder. Bu sebeple Tutanak Sihirbazı'nda tek yasal çıktı standardı olarak değiştirilemez kilitli PDF dökümü uygulanmaktadır. 3. HEK tutanağı oluşturulan bir cihaz veya RKE neden doğrudan envanterden silinmez? ▼ İki Aşamalı Yasal Tasfiye Kuralı gereğince: Tutanak ilk alındığında (1. Aşama) ekipmanlar \"Heyet İmzasında\" durumuna alınarak kilitlenir. Heyetin ıslak imzalı tutanağı ve Taşınır/EBYS resmi yazısı sisteme taranıp yüklenmeden (2. Aşama) hiçbir ekipman kayıttan düşülmez. EBYS kapatması yapıldığında ise SHA-256 dijital mührüyle tüm süreç kalıcı olarak dondurulur. 4. Tutanak metinlerindeki değişken etiketleri (+ &#123;&#123; tarih &#125;&#125;, + &#123;&#123; kurum_adi &#125;&#125;) nasıl çalışır? ▼ Metin kutusunda imlecinizi eklemek istediğiniz yere getirin ve alttaki ilgili değişkene tıklayın. Sistem imlecin tam bulunduğu yere etiketi ekler. Belge üretilirken bu etiketler sistemdeki güncel kurum adı, o günün tarihi veya seçili toplam ekipman sayısı ile otomatik olarak doldurulur. 5. Heyet üyeleri nasıl belirlenir ve komisyona yeni üye nasıl eklenir? ▼ Sistem unvan önceliğine göre aktif hekim, medikal fizikçi ve sorumlu teknisyeni otomatik olarak Komisyon Başkanı, RKS ve Raportör olarak atar. Farklı bir personel eklemek için [Üye Ekle] butonuna basarak personel seçimi yapabilir; komisyondan çıkarmak istediğiniz satırı seçip [Üye Sil] ile silebilirsiniz. 6. Üretilen rapor ve tutanak dosyaları bilgisayarda nerede saklanır? ▼ Üretilen tüm resmi dökümler çalışma dizinindeki güvenli rapor klasörüne benzersiz bir dosya adı ile kaydedilir ve işlem bittiğinde sistemin varsayılan PDF, Word veya Excel görüntüleyicisi ile otomatik açılır. Ayrıca HEK dosyaları sistem evrak kasasında kalıcı olarak arşivlenir. 7. Çok sütunlu tablolarda PDF çıktısı "
  }
];
