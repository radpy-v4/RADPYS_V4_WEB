---json
{
  "pageTitle": "07.4. Personel Özel Sağlık ve Yasal Kısıtları — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri",
  "lead": "Gebe personelin 5 fazlı radyasyon koruma döngüsünü, yasal süt/emzirme saat indirimlerini, sendika yöneticisi mesai azaltımlarını, sağlık kurulu/analık raporlarını, doz aşımı korumalarını ve bireysel fazla mesai engellerini yönetmenizi sağlar.",
  "overviewId": "overview",
  "badges": [
    {
      "text": "07.4 Özel Sağlık Kısıtları",
      "tone": "emerald"
    }
  ],
  "readingTime": "4 Dakika",
  "legalNote": "<strong>Yasal Koruma:</strong> Gebelik, analık, emzirme, sağlık kurulu raporu ve NDK doz aşımı korumaları 657 DMK, 4857 İş Kanunu, 3153 SK ve 32162 sayılı Yönetmelik uyarınca mutlak kanuni sınırlardır."
}
---

## Kısa Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama {#quick-recipe}

:::recipe Kısa Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama | 20 SANİYELİK AKIŞ
### 1. İstenen Sonuç | slate
Yasal koruma altındaki çalışanın gece nöbetinden, radyasyon riskinden veya fazla mesaiden otomatik ve mevzuata tam uyumlu biçimde korunması.

### 2. Yapılacak İşlem | cyan
<strong>[Personel Özel Kısıtları]</strong> sekmesinde personeli ve kısıt türünü (örneğin <em>Gebelik / Hamilelik Muafiyeti</em> veya <em>Yasal Emzirme İzni</em>) seçin; tarih aralığı ile saat azaltımını doğrulayıp <strong>[Kısıt Ekle]</strong> butonuna basın.

### 3. Sistem Etkisi | emerald
Gebelik ve doz aşımında gece nöbeti ile fazla mesai sıfırlanır; emzirme ve sendika izinlerinde mesai hedefi otomatik düşülür; doğum sonrası kesin tarih değiştiğinde tek tıkla 5 faz güncellenir.

- [metric] Gebelik Kilidi | Gece/FM Yasak (Fetüs ≤ 1 mSv) | rose
- [metric] Süt İzni | İlk 6 Ay: 3s / Sonra: 1.5s | cyan
- [metric] Sendika İzni | Memur: 4s/hf / İşçi: 2s/hf | emerald
- [metric] FM Engeli | Fazla Mesai İstemiyorum | amber
:::

## 5N1K Kural ve Arayüz Çözümleme Tablosu {#5w1h}

*Personel Özel Kısıtları sekmesindeki 9 yasal kısıt türü, saat azaltım rejimi ve gebelik yaşam döngüsü kontrolleri.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| <strong>9 Yasal Kısıt Türü</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Kısıt Seçim Listesi</span> | Mevzuattaki farklı koruma ve muafiyet hallerini ayrı kurallarla işletmek. | Yasal Emzirme İzni, Gebelik/Hamilelik, Analık İzni, Engelli, Ağır Engelli Yakını, Sağlık Kurulu Raporu, Doz Sınırı Aşımı, Sendika Temsilciliği ve Diğer seçeneklerini sunar. | Rapor veya bildirim geldiğinde. | İK / Nöbet Sorumlusu |
| <strong>Saat Azaltım &amp; Azaltım Türü</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Günlük / Haftalık / Aylık</span> | Yasal izinlerin çalışanın zorunlu mesai hedefinden doğru düşülmesini sağlamak. | Emzirme türünde ilk 6 ay günlük 3 saat, ikinci 6 ay 1.5 saat otomatik önerilir; sendikada haftalık saat (memur 4s, işçi 2s), raporlarda ise iş günü düşülür. | Kısıt türü seçildiğinde. | İK Uzmanı / Sorumlu |
| <strong>[Fazla Mesai İstemiyorum] &amp; Max FM</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Kişisel Mesai Tavanı</span> | Korunan personellerin aylık fazla mesaisini otomatik sıfıra veya özel sınıra çekmek. | Gebelik, emzirme, analık, engelli/yakını ve doz aşımında fazla mesai otomatik sıfıra kilitlenir; kutu işaretlenerek isteğe bağlı kısıtta da mesai kapatılır. | Kısıt aktifleştiğinde. | Birim Amiri |
| <strong>[Tarih Sınırı Uygula] &amp; Gerekçe</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Geçerlilik Aralığı &amp; Birim Kapsamı</span> | Rapor süresi dolduğunda kısıtı otomatik hükümsüz kılıp resmi dayanağı ve KVKK kapsamını korumak. | Başlangıç–bitiş tarihleri dışında kısıt pasif sayılır; yöneticiler yalnızca yetkili oldukları birim personeline işlem yapabilir ve tüm kısıt hareketleri denetim izine mühürlenir. | Kayıt oluşturulurken veya güncellenirken. | Yetkili Birim Sorumlusu / İK |
| <strong>[Doğum Tarihi Güncelle], [Gebelik Sonlandı] &amp; Bağımsız Emzirme</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">5 Fazlı Döngü &amp; Pasifleştirme Koruması</span> | Doğum tarihine göre tüm fazları tutarlı yürütmek, çakışan nöbetleri iptal etmek ve sağlık geçmişini silmeden saklamak. | Bağımsız emzirme kaydı dahil doğum tarihi esas alınarak 2 yaş gece muafiyeti sınırı kurulur ve yayındaki gece/radyasyon nöbetleri iptal edilip birim amirine bildirilir; silme ve erken sonlandırmada gelecek fazlar fiziksel silinmez, gerekçesiyle pasife alınır. | Gebelik/emzirme kaydında, doğumda veya sonlanmada. | İK / Yönetici |

## Arayüz Ekran Görünümleri {#screenshots}

![Personel Özel Kısıtları Ekranı | Nöbet Ayarları > Personel Özel Kısıtları | Yasal Muafiyetler, Gebelik & Süt İzni Kuralları | emerald](assets/img/nobet_person_kisit.png)

## Adım Adım İşlem Rehberi {#step-by-step}

### 1. Süt İzni, Sendika veya Gebelik Kısıtı Kaydetme

1. **[Personel Özel Kısıtları]** sekmesine geçin ve yeni kayıt için **[Yeni Kayıt]** butonuna basın.
2. **Kayıt Duzenleyici** panelinde Departman/Personel seçimini yapın ve Kısıt Tipinden ilgili kategoriyi (örneğin *Yasal Emzirme İzni* veya *Gebelik / Hamilelik Muafiyeti*) seçin.
3. Sistemin otomatik önerdiği Saat Azaltımı (ilk 6 ay 3 saat, ikinci 6 ay 1.5 saat) ile **[Fazla Mesai İstemiyorum]** ve **[Tarih Sınırı Uygula]** aralıklarını doğrulayın; resmi rapor referansını gerekçeye yazıp **[Kısıt Ekle]** butonuna tıklayın.

### 2. Gebelik Zincirinde Doğum Tarihi Güncelleme veya Sonlandırma

1. Tablodan gebelik yaşam döngüsüne bağlı personel satırını seçin.
2. Bebek beklenenden farklı tarihte doğduysa **[Doğum Tarihi Güncelle]** butonuna tıklayıp kesin tarihi girin (tüm doğum sonrası analık ve emzirme fazları otomatik kaydırılır); gebelik tıbbi zorunlulukla erken sonlandıysa **[Gebelik Sonlandı]** butonunu kullanın.
3. Tarih veya süre revizyonu için **[Kısıtı Güncelle]**, hatalı kaydı kaldırmak için **[Kaydi Sil]** butonunu kullanın.

## Sıkça Sorulan Sorular (SSS) {#faq}

:::faq
### Gebe personele acil durumda dahi gece nöbeti veya denetimli alan görevi yazılabilir mi?
<strong>Kesinlikle hayır.</strong> Gebelik kısıtı esnetilebilir bir tercih değil, 657 DMK m. 101, 4857 İş Kanunu m. 74 ve 32162 sayılı Yönetmelik uyarınca mutlak kanuni yasaktır. Motor gece nöbetini, denetimli radyasyon alanını ve fazla mesaiyi kapatır; kalan gebelik süresince fetüs eşdeğer doz sınırı <strong>1 mSv</strong> olarak izlenir.

### Doğum sonrası emzirme (süt izni) ve sendika indirimi hesapları nasıldır?
Yasal emzirme izninde ilk 6 ay günde <strong>3 saat</strong>, ikinci 6 ay günde <strong>1,5 saat</strong> azaltım uygulanır ve emzirme süresince radyoaktif kontaminasyon riskli açık kaynak işlerine atanmaz. Sendika yöneticisi muafiyetinde ise 657'li memurlarda haftalık <strong>4 saat</strong>, 4857'li işçilerde haftalık <strong>2 saat</strong> indirim hedeften düşülür.

### Bitiş tarihi geçmiş bir sağlık kısıtı personelin gelecek planlarını etkilemeye devam eder mi?
Hayır. <strong>[Tarih Sınırı Uygula]</strong> kutusu aktifse belirtilen bitiş tarihinden sonraki aylarda dağıtım motoru kısıtı dikkate almaz ve personel standart nöbet düzenine otomatik döner.
:::
