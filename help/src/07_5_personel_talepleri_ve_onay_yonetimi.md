---json
{
  "pageTitle": "07.5. Personel Nöbet Talepleri, Mazeretler ve Onay Yönetimi — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Personel Talepleri, Mazeretler & Onay Yönetimi",
  "lead": "Planlanacak aya yönelik nöbet istememe (mazeret), nöbet isteme, hafta içi lisansüstü eğitim ders programı ve isteğe bağlı fazla mesai taleplerinin kaydedilmesini, ders programı revizyonunu ve birim amiri onay/red akışını yönetmenizi sağlar.",
  "overviewId": "overview",
  "badges": [
    {
      "text": "07.5 Personel Talepleri",
      "tone": "cyan"
    }
  ],
  "readingTime": "4 Dakika",
  "legalNote": "<strong>Yayın Kalkanı:</strong> Çizelgesi resmen Yayınlandı statüsüne geçmiş bir aya yeni talep veya mazeret eklenemez; kesinleşen aydaki zorunlu değişiklikler Modül 09 (Nöbet Devir ve Acil Mazeret) üzerinden yürütülür."
}
---

## Kısa Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı {#quick-recipe}

:::recipe Kısa Reçete: Personel Taleplerinin Yönetimi ve Onay Akışı | 20 SANİYELİK AKIŞ
### 1. İstenen Sonuç | slate
Personelin haklı mazeret ve ders programlarının klinik adalet bozulmadan dağıtım motoruna eksiksiz iletilmesi.

### 2. Yapılacak İşlem | cyan
<strong>[Personel Talepleri]</strong> sekmesinde yıl, ay ve birimi süzüp <strong>[Filtrele]</strong> butonuna basın; talebi inceleyip uygun olanları <strong>[Onayla]</strong>, sakıncalı olanları <strong>[Reddet]</strong> ile sonuçlandırın.

### 3. Sistem Etkisi | emerald
Yalnızca onaylı talepler dağıtım motoru kısıt havuzuna girer; aynı güne birden fazla talep çakışırsa en koruyucu kural öncelik sırasıyla işletilir.

- [metric] Talep Türü | Mazeret, İstek, Ders, FM | cyan
- [metric] Öncelik Sırası | Muafiyet &gt; Ders &gt; Mazeret &gt; İstek | amber
- [metric] Onay Yetkisi | Birim Sorumlusu / Amir | emerald
- [metric] Yayın Koruması | Yayındaki Aya Talep Kapalı | slate
:::

## 5N1K Kural ve Arayüz Çözümleme Tablosu {#5w1h}

*Personel Talepleri sekmesindeki koruma kilitleri, talep öncelik sıralaması ve ders revizyon mekanizmaları.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| <strong>Yayınlanmış Ay Güvenlik Kilidi</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Plan Bütünlük Koruması</span> | İlan edilmiş nöbet çizelgesinin sonradan açılan taleplerle bozulmasını engellemek. | İlgili dönemin nöbet planı yayınlanmış durumdaysa o aya yeni talep kaydı engellenir; değişiklik için devir/mazeret akışı gerekir. | Talep kaydedilirken. | Sistem Kilidi |
| <strong>4 Talep Türü ve Sertlik Önceliği</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Çakışma Çözüm Sırası</span> | Aynı personelin aynı güne birden fazla talebi denk geldiğinde belirsizliği gidermek. | <em>Mazeret</em> (sert), <em>İstek</em> (yumuşak), <em>Eğitim Kısıtı</em> ve <em>Fazla Mesai</em> sunulur; çakışmada sıra Muafiyet &gt; Eğitim &gt; Nöbet Yazılmasın &gt; Nöbet Yazılsın şeklindedir. | Dağıtım motoru çalışırken. | Planlayıcı / Motor |
| <strong>Hafta İçi Ders Seçimi &amp; [Ders Programını Revize Et]</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Dönem İçi Güncelleme</span> | Lisansüstü dersi olan personelin sadece hafta içi ders günlerini korumak ve dönem içi değişikliği izlemek. | Eğitim türünde yalnızca <em>Pazartesi–Cuma</em> günleri aktifleşir; dönem ortasında gün değişirse eski talep dondurulup revizyon tarihinden yeni kısıt açılır. | Eğitim talebinde ve revizyonda. | Personel / Birim Amiri |
| <strong>Vardiya Slotu Hedefleme</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Tüm Slotlar vs Tekil Vardiya</span> | Personelin tüm gün yerine yalnızca belirli bir vardiyadan (örneğin Gece) muaf kalmasını sağlamak. | Tekil vardiya seçilirse yalnızca o slotta kısıt uygulanır; tüm slotlar seçilirse personel o gün hiçbir nöbete atanmaz. | Mazeret/istek tanımlanırken. | Talep Eden / Amir |
| <strong>[Onayla] &amp; [Reddet] Karar Kilidi</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Amir Onay Süzgeci</span> | Beklemede kalan veya hizmeti aksatan taleplerin çizelgeyi etkilemesini önlemek. | Yalnızca <strong>[Onayla]</strong> verilen kayıtlar motor kısıtı olur; <strong>[Reddet]</strong> edilen talepler motor tarafından tamamen yok sayılır. | Ay öncesi incelemede. | Birim Sorumlusu / Yönetici |

## Arayüz Ekran Görünümleri {#screenshots}

![Personel Nöbet İstekleri ve Mazeret Yönetimi Ekranı | Nöbet Ayarları > Personel Talepleri | Dönem Süzgeci, Talep Formu & Onay İşlemleri | cyan](assets/img/nobet_ayarlar_main.png "<span><strong>Yasal Bilgilendirme:</strong> Görseldeki personel isimleri, talep tarihleri ve mazeret açıklamaları test ortamında oluşturulmuş sentetik verilerdir.</span>")

## Adım Adım İşlem Rehberi {#step-by-step}

### 1. Yeni Talep Ekleme veya Personelin Taleplerini Süzme

1. **[Personel Talepleri]** sekmesinde Dönem Yılı, Ay ve Departman seçip **[Filtrele]** butonuna tıklayın.
2. Yönetici olarak doğrudan talep tanımlamak için **[Yeni İstek]** butonuna basın; Personel, Talep Türü, Tarih Aralığı (ve eğitim ise **[Pazartesi]–[Cuma]** günleri), varsa ilgili vardiya ve gerekçeyi doldurup **[İstek Ekle]** butonuna tıklayın (düzeltmelerde **[İsteği Güncelle]**, kaldırmada **[İsteği Sil]** kullanılır).

### 2. Talep Onaylama, Reddetme ve Eğitim Programı Revizyonu

1. Tablodan incelenecek talebe tıklayın ve aynı gündeki klinik personel yoğunluğunu değerlendirin.
2. Uygun mazereti **[Onayla]** ile kısıt havuzuna aktarın; hizmet aksaması yaratacak talebi **[Reddet]** butonuna basarak onaylayın.
3. Mevcut bir eğitim kısıtının ders günleri dönem ortasında değiştiyse satırı seçip **[Ders Programını Revize Et]** butonuna basın; revizyon başlangıç tarihini ve yeni hafta içi günlerini seçip kaydedin.

## Sıkça Sorulan Sorular (SSS) {#faq}

:::faq
### Personel talep giriş tarihini kaçırırsa birim amiri adına kayıt açabilir mi?
Evet. Birim sorumlusu veya yetkili yönetici bu ekrandan <strong>[Yeni İstek]</strong> ile personel adına doğrudan talep oluşturabilir ve onaylayabilir.

### "Nöbet Yazılmasın (Mazeret)" ile "Nöbet Yazılsın (İstek)" arasında motor önceliği farkı nedir?
Amir tarafından onaylanan mazeret talebi motor için sert kısıttır; uygun aday bulunamasa dahi personel o güne yazılmaz. "Nöbet Yazılsın" talebi ise yüksek öncelikli tercihtir; 24 saat dinlenme veya fazla mesai gibi sert kurallarla çakışmadığı sürece karşılanır.

### Eğitim kısıtı seçtiğimde neden hafta sonu günleri görünmüyor?
Eğitim kısıtı hafta içi örgün ders programlarını korumak üzere tasarlanmıştır; hafta sonu için mazeret verilmesi gerekiyorsa talep türü olarak <strong>Nöbet Yazılmasın (Mazeret)</strong> seçilmelidir.
:::
