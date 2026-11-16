---json
{
  "pageTitle": "01. Kurulum, Başlatma ve İlk Giriş — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Kurulum, Başlatma ve İlk Giriş",
  "lead": "RADPYS masaüstü ve Web Portalı oturumlarını güvenli tekil kilit altında başlatma, veritabanı servisi kontrolleri, ilk girişte zorunlu şifre yenileme, Evrensel Arama Komut Paleti (Ctrl+K), Bildirim Merkezi ve lisans aktivasyonunu yönetmenizi sağlar.",
  "overviewId": "overview",
  "badges": [
    {
      "text": "KVKK 6698 & SKS 6.1 Uyumlu",
      "tone": "emerald"
    }
  ],
  "readingTime": "3 Dakika",
  "legalNote": "<strong>Yasal Güvence:</strong> Sağlık Bakanlığı Sağlıkta Kalite Standartları (SKS 6.1) ve 6698 sayılı KVKK Madde 12 uyarınca yetkisiz erişimler ve zayıf parolalar otomatik olarak engellenir."
}
---

## Kısa Reçete: İlk Giriş ve Zorunlu Şifre Güncelleme {#quick-recipe}

:::recipe Kısa Reçete: İlk Giriş ve Zorunlu Şifre Güncelleme | 20 SANİYELİK AKIŞ

### 1. İstenen Sonuç | slate

Birim sorumlunuzdan veya yöneticiden aldığınız geçici şifreyi kalıcı ve güvenli kişisel parolanızla değiştirerek yetkili olduğunuz modülleri açmak.

### 2. Yapılacak İşlem | cyan

Kullanıcı adınız ve geçici parolanızla <strong>[Giriş Yap]</strong> butonuna basın. Açılan zorunlu şifre penceresinde en az <strong>8 karakter</strong> (büyük harf, küçük harf ve rakam) içeren yeni şifrenizi iki kez yazıp <strong>[Kaydet]</strong> butonuna tıklayın.

### 3. Sistem Etkisi | emerald

Geçici şifre kalıcı olarak iptal edilir; yeni şifre yalnızca size özel şifrelenerek kaydedilir ve yetkiniz dahilindeki tüm ekranlar kullanıma açılır.

- [metric] Parola Politikası | Min. 8 Karakter | cyan
- [metric] Deneme Süresi | 30 Gün | slate
- [metric] Erken Uyarı Eşiği | 15 Gün & 3 Gün | amber
- [metric] Platform | Masaüstü & Web Portal | emerald
:::

## 5N1K Kural ve Arayüz Çözümleme Tablosu {#5w1h}

*Giriş ekranı güvenlik kalkanları, şifre sıfırlama sınırları ve bildirim kontrolleri.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| <strong>[Beni hatırla]</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Onay Kutusu</span> | Kullanıcı adını her oturumda tekrar yazma zahmetini kaldırmak. | Yalnızca kullanıcı adını yerel bilgisayarda saklar; parolayı asla diske kaydetmez. | Kişisel çalışma bilgisayarından giriş yapıldığında. | Tüm Personel |
| <strong>[Şifreyi göster]</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Onay Kutusu</span> | Yazım sırasında büyük/küçük harf ve rakam hatasını anlık görmek. | İşaretlendiğinde noktalı maskeli parola kutusunu açık metne çevirir. | Giriş veya yeni şifre belirleme sırasında. | Tüm Personel |
| <strong>Hatalı Giriş Kilidi</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Otomatik Güvenlik Kalkanı</span> | Deneme-yanılma yoluyla yetkisiz hesap ele geçirmelerini önlemek. | Varsayılan olarak art arda 5 hatalı parola girişinde hesabı 15 dakika süreyle kilitler (yönetici kilidi anında açabilir). | Parola üst üste hatalı girildiğinde. | Tüm Kullanıcılar |
| <strong>[Şifremi Unuttum?]</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">3 Aşamalı Sıfırlama Sihirbazı</span> | E-posta doğrulamasıyla unutulan parolayı self-servis yenilemek. | Kayıtlı e-postaya 15 dakika geçerli 6 haneli kod gönderir (5 hatalı kod denemesinde kod iptal edilir; Web Portalda yalnızca yerel ağda çalışır). | Parola unutulduğunda. | E-postası Kayıtlı Personel |
| <strong>Bildirim Merkezi & Rozet</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Sağ Üst Zil Simgesi</span> | Nöbet devri, onay kuyruğu ve dozimetre uyarılarını anlık yakalamak. | Okunmamış uyarı varken zil simgesi rozet gösterir; nöbet devri bildiriminden doğrudan onay penceresi açılır. | Yeni görev veya uyarı geldiğinde. | Hedef Personel / Yönetici |

## Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı) {#myth-buster}

:::myth Masaüstü Simgesine Tıkladım Ama İkinci Pencere Açılmadı

### Yanlış Algı

<em>"Masaüstü simgesine tıkladım ama program açılmadı, sistem dondu veya hata verdi."</em>

### Gerçek Sistem Mantığı

<strong>Tekil Uygulama Kilidi aktiftir.</strong> RADPYS veritabanı bütünlüğünü korumak için aynı bilgisayarda yalnızca tek bir örnek altında çalışır. Program zaten açık veya simge durumundaysa ikinci bir kopya başlatılmaz; mevcut açık pencere doğrudan ekranın en önüne getirilir.
:::

## Süreç Akış Şeması {#workflow}

```mermaid
flowchart TB
 subgraph S1 ["1. AŞAMA: BAŞLATMA VE VERİTABANI KONTROLÜ"]
  direction LR
  A(["RADPYS Simgesi Çalıştırılır"]) --> B{"Açık Kopya<br/>Var mı?"}
  B -->|Evet| C["Mevcut Pencere Öne Getirilir"]
  B -->|Hayır| D{"Veritabanı Bağlantısı<br/>Hazır mı?"}
  D -->|Hayır| E["Yönetici İzniyle Servis Başlatma<br/>veya Yeniden Dene"]
  E --> D
 end

 subgraph S2 ["2. AŞAMA: KİMLİK, KİLİT VE LİSANS DENETİMİ"]
  direction LR
  F["Kullanıcı Adı & Parola Girilir"] --> G{"Doğrulama Başarılı<br/>ve Kilit Yok mu?"}
  G -->|5 Hatalı Deneme| H["15 Dakika Geçici Hesap Kilidi"]
  G -->|Doğru| I{"Kurum Lisansı<br/>Geçerli mi?"}
  I -->|Dolmuş - Personel| J["Erişim Engellenir"]
  I -->|Dolmuş - Admin| K["Kısıtlı Lisans Aktivasyon Modu"]
 end

 subgraph S3 ["3. AŞAMA: ŞİFRE GÜVENLİĞİ VE OTURUM"]
  direction LR
  L{"İlk Giriş veya<br/>Süreli Değişim mi?"} -->|Evet| M["Zorunlu Şifre Değiştirme Formu"]
  M -->|İptal| F
  M -->|Kaydedildi| N(["Yetkili Ana Ekran Açılır"])
  L -->|Hayır| N
 end

 D -->|Evet| F
 I -->|Geçerli| L
```

1. **Başlatma ve Veritabanı Kontrolü:** Program tekil kilit altında açılır; veritabanı motoru durmuşsa kullanıcıya tek tıkla yönetici yetkisiyle servisi başlatma seçeneği sunulur.
2. **Kimlik, Kilit ve Lisans Denetimi:** 5 hatalı girişte hesap 15 dakika kilitlenir; lisansı dolan kurumda normal kullanıcı girişi engellenirken Sistem Yöneticisi için yalnızca lisans yükleme ekranı açılır.
3. **Şifre Güvenliği ve Oturum Açılışı:** İlk girişte zorunlu şifre değişimi tamamlanmadan ana ekrana geçilmez; onaylandığında yetki ve kapsam matrisine uygun modüller yüklenir.

## Arayüz Ekran Görünümleri {#screenshots}

![Giriş Ekranı | Masaüstü Başlangıç > Giriş Penceresi | Kimlik Doğrulama | cyan](assets/img/01_login_page.png "<span><strong>Yasal Bilgilendirme:</strong> Bu görseldeki kullanıcı adları ve arayüz bilgileri tamamen test amaçlı sentetik veridir. Gerçek kişi ve kayıtlarla benzerlikler tesadüfidir.</span>")

![Zorunlu Şifre Değiştirme Formu | İlk Giriş Güvenlik Penceresi | Parola Güncelleme | amber](assets/img/01_auth_password_change_dialog.png "<span><strong>Yasal Bilgilendirme:</strong> Bu görseldeki kullanıcı adları ve arayüz bilgileri tamamen test amaçlı sentetik veridir. Gerçek kişi ve kayıtlarla benzerlikler tesadüfidir.</span>")

![Hakkında ve Lisans Penceresi | Üst Menü > Hakkında > Lisans ve Aktivasyon | Kurum Lisansı & Destek | emerald](assets/img/01_about_dialog.png "<span><strong>Yasal Bilgilendirme:</strong> Bu görseldeki lisans kodu, cihaz kimliği ve kurum bilgileri test amaçlı sentetik veridir.</span>")

![Komut Paleti ve Bildirim Merkezi | Ana Ekran > Ctrl+K & Sağ Üst Zil Simgesi | Hızlı Arama & Bildirim | cyan](assets/img/01_komut_paleti_ve_bildirim.png "<span><strong>Yasal Bilgilendirme:</strong> Bu görseldeki personel adları ve bildirim kayıtları test amaçlı sentetik veridir.</span>")

## Adım Adım İşlem Rehberi {#step-by-step}

### 1. Masaüstü Uygulamasında Hızlı Arama (Ctrl+K), Lisans Aktivasyonu ve Destek Paketi

1. Oturum açtıktan sonra herhangi bir ekrandayken klavyeden **Ctrl+K** tuşlarına basın; en az 2 harf yazarak yetkili olduğunuz modüllere veya personel kayıtlarına doğrudan geçiş yapın.
2. Kurum lisansını etkinleştirmek için yöneticinizle **[Hakkında]** penceresindeki **[Lisans ve Aktivasyon]** sekmesini açın ve **[Cihaz Kimliği (Machine ID)]** yanındaki **[Kopyala]** butonuna basın.
3. Size iletilen lisans dosyasını **[Lisans Dosyası Seç (.lic)]** butonuyla yükleyin veya anahtar kodunu yapıştırıp **[Lisansı Aktifleştir]** butonuna tıklayın (aktif lisansta yenileme için **[Lisansı Güncelle / Yeni Dosya Seç (.lic)]** butonunu kullanın).
4. Teknik destek gerektiğinde **[Hakkında]** penceresindeki **[Destek Paketi (ZIP)]** butonuna basarak Masaüstünüze oluşturulan destek arşivini teknik ekibe iletin.

### 2. Web Portalı Girişi ve Dış Ağ İki Aşamalı Doğrulaması

1. Kurum içi veya dış ağ tarayıcınızdan **Web Portalı** giriş ekranını açıp kullanıcı adınız ve parolanızla giriş yapın.
2. İlk kez giriş yapıyorsanız açılan zorunlu şifre belirleme formunda yeni parolanızı tanımlayın.
3. Hastane dış ağından bağlanıyorsanız ekrandaki güvenlik doğrulamasını tamamlayın; kurumsal 2FA açıksa e-posta adresinize gelen 6 haneli tek kullanımlık doğrulama kodunu girerek oturumu açın.

## Sıkça Sorulan Sorular (SSS) {#faq}

:::faq

### Veritabanı bağlantı hatası aldığımda ne yapmalıyım?

Açılışta ekrana gelen uyarı penceresinde yönetici izniyle servisi başlatma seçeneğine tıklayıp Windows izin onayını verin. Servis otomatik başlatılamazsa Windows Hizmetler ekranından PostgreSQL hizmetinin çalışır durumda olduğunu kontrol edin.

### Lisans süresi dolduğunda kayıtlı verilerimiz silinir mi?

<strong>Kesinlikle hayır.</strong> Lisans süresinin dolması yalnızca modül ekranlarını kilitler; nöbet çizelgeleri, personel özlük kartları, dozimetre ve cihaz kayıtları veritabanında eksiksiz korunur. Yönetici yeni lisansı yüklediği anda tüm sistem kaldığı yerden açılır.

### Sistemde kayıtlı e-postam yoksa veya dış ağdaysam şifremi nasıl sıfırlarım?

Güvenlik gereği Web Portalındaki <strong>[Şifremi Unuttum?]</strong> sihirbazı yalnızca hastane yerel ağında aktiftir ve sistemde e-posta adresi tanımlı kullanıcılar için çalışır. E-postanız kayıtlı değilse veya dış ağdaysanız Sistem Yöneticinize başvurarak yeni geçici şifre talep ediniz.
:::
