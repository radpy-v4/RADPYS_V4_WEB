---json
{
  "pageTitle": "07.2. Birim Kuralları, Vardiya Slotları ve Kural Kopyalama — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama",
  "lead": "Her kliniğin günlük, hafta içi ve hafta sonu/tatil vardiya slotlarını, aynı anda görev yapacak nöbetçi sayılarını, otomatik bitiş saati hesabını, 24 saat veya çapraz görev uygunluğunu ve birimler arası şablon aktarımını yönetmenizi sağlar.",
  "overviewId": "overview",
  "badges": [
    {
      "text": "07.2 Birim Kuralları",
      "tone": "cyan"
    }
  ],
  "readingTime": "4 Dakika",
  "legalNote": "<strong>Önemli Uyarı:</strong> [Birim Kuralını Kopyala] işlemi çalıştırıldığında hedef birimdeki mevcut tüm nöbet slotları tamamen silinir ve kaynak birimdeki slotlar sıfırdan oluşturulur; kopyalama öncesi hedef birimi mutlaka doğrulayın."
}
---

## Kısa Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma {#quick-recipe}

:::recipe Kısa Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma | 20 SANİYELİK AKIŞ
### 1. İstenen Sonuç | slate
Klinik birimlerin gece, gündüz ve hafta sonu ihtiyaç duyduğu nöbetçi pozisyonlarının eksiksiz tanımlanması.

### 2. Yapılacak İşlem | cyan
İlgili birimi seçip vardiya adı, kodu, başlangıç saati, süresi ve nöbetçi sayısını girerek <strong>[Birim Kuralı Ekle]</strong> butonuna basın; benzer birimler için <strong>[Birim Kuralını Kopyala]</strong> ile şablonu aktarın.

### 3. Sistem Etkisi | emerald
Bitiş saati gece yarısı devri dahil otomatik hesaplanır; dağıtım motoru bu aktif slotları günlük kontenjan ve gün kısıtına göre doldurur.

- [metric] Departman Bazlı | Özel Slot Havuzu | slate
- [metric] Akıllı Saat | Başlangıç + Süre | cyan
- [metric] Gün Kapsamı | Hafta İçi / Tatil / Her Gün | emerald
- [metric] Şablon Aktarımı | Kural Kopyalama | amber
:::

## 5N1K Kural ve Arayüz Çözümleme Tablosu {#5w1h}

*Birim Kuralları sekmesindeki vardiya hesaplama, kapsama ve aktarım mekanizmaları (buton adımları aşağıdadır).*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| <strong>Akıllı Saat Hesaplayıcı</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Başlangıç + Süre = Otomatik Bitiş</span> | Gece yarısını geçen vardiyalarda hatalı bitiş saati girilmesini önlemek. | Başlangıç saati ile süre toplandığında gece yarısı devri dahil 24 saatlik döngü üzerinden salt-okunur bitiş saati otomatik üretilir. | Slot saati veya süre değiştiğinde. | Birim Sorumlusu |
| <strong>Nöbetçi Sayısı ve Hizmet Tipi Kapsamı</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Kontenjan ve Meslek Grubu</span> | Slotta aynı anda kaç kişinin ve hangi meslek grubunun nöbet tutacağını belirlemek. | Nöbetçi sayısı günlük zorunlu kişi adedini belirler; hizmet tipi boş bırakılırsa birimdeki tüm gruplara, seçilirse yalnızca ilgili gruba atanır. | Slot tanımlanırken. | Birim Sorumlusu / Başhekimlik |
| <strong>Gün Kapsamı, Tatil ve 24 Saat Seçenekleri</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">[24 Saat Tutulabilir] &amp; Tatil Kutuları</span> | Vardiya türünün hangi günlerde açılacağını ve 24 saat birleştirme uygunluğunu yönetmek. | <em>Her Gün</em>, <em>Sadece Hafta İçi</em> veya <em>Sadece Hafta Sonu ve Tatil</em> seçilir; <strong>[Hafta sonlarında nöbet yazılsın]</strong>, <strong>[Resmi ve dini bayramlarda nöbet yazılsın]</strong> ve <strong>[24 Saat Tutulabilir]</strong> işaretleriyle kapsam kesinleşir. | Slot oluşturulurken. | Birim Amiri |
| <strong>[Capraz Gorevlendirme] Anahtarı</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Seyyar Slot Uygunluğu</span> | Birim içi kadro yetersizliğinde diğer birimlerden takviye alabilecek slotları işaretlemek. | İşaretlenen slotlar çizelge ekranındaki çapraz birim tamamlama motoru tarafından hedef slot olarak algılanır. | Çapraz destek açılırken. | Birim Sorumlusu |
| <strong>[Birim Kuralını Kopyala]</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Birimler Arası Şablon Aktarımı</span> | Benzer çalışma düzenine sahip servislere aynı vardiya slotlarını hızlıca kurmak. | Kaynak birimin tüm slotlarını hedef birime kopyalar; çakışma olmaması için hedef birimin önceki tüm slotlarını silerek sıfırdan yazar. | Yeni birim yapılandırılırken. | Sistem Yöneticisi / Amir |

## Arayüz Ekran Görünümleri {#screenshots}

![Birim Kuralları ve Nöbet Slotları Ekranı | Nöbet Ayarları > Birim Kuralları | Vardiya Slotları, Akıllı Saat & Kural Kopyalama | cyan](assets/img/nobet_birim_kurallari.png)

![Birim Personel Havuzu ve Nöbet Uygunluk Ekranı | Nöbet Ayarları > Birim Personel Havuzu | Birim Bazlı Nöbetçi Havuzu | emerald](assets/img/07_2_birim_personel_havuzu.png)

## Adım Adım İşlem Rehberi {#step-by-step}

### 1. Yeni Birim Nöbet Slotu Oluşturma ve Güncelleme

1. **[Birim Kuralları]** sekmesinde filtre veya birim alanından ilgili servisi seçin; yeni bir kayıt için **[Yeni Birim Kuralı]** butonuna tıklayın.
2. **Vardiya Tanımlama** bölümünde Nöbet Adı, Nöbet Kodu, Başlangıç Saati, Süre (örneğin 20:00 ve 12 saat; bitiş otomatik 08:00 olur), Nöbetçi Sayısı ve geçerli gün kapsamını belirleyin; gerekirse **[Aktif]**, **[24 Saat Tutulabilir]** ve **[Capraz Gorevlendirme]** kutularını işaretleyin.
3. Slotu kaydetmek için **[Birim Kuralı Ekle]** butonuna basın; mevcut bir satırı değiştirirken **[Birim Kuralı Güncelle]**, kullanılmayan bir slotu kaldırmak için **[Birim Kuralını Sil]** butonunu kullanın.

### 2. Birim Kuralını Başka Bir Birime Kopyalama

1. Araç çubuğundaki **[Birim Kuralını Kopyala]** butonuna tıklayın.
2. Kaynak birim ile hedef birimi seçin, hedef birimin mevcut slotlarının silineceğini bildiren onay mesajını teyit ederek aktarımı tamamlayın.

## Sıkça Sorulan Sorular (SSS) {#faq}

:::faq
### Bitiş saatini neden doğrudan değiştiremiyorum?
Vardiya süreleri ile bitiş saati arasındaki tutarsızlığı önlemek için bitiş saati başlangıç ve süre üzerinden otomatik hesaplanır. Bitiş saatini değiştirmek için süreyi veya başlangıç saatini güncellemeniz yeterlidir.

### Kural kopyalarken hedef birimdeki eski slotlar neden siliniyor?
Aynı birimde mükerrer vardiya kodu ve saat çakışması oluşmasını engellemek için kopyalama işlemi hedef birimin şablonunu kaynak birimle birebir eşitler. Mevcut slotları korumak istiyorsanız yeni slotları kopyalamak yerine <strong>[Birim Kuralı Ekle]</strong> ile tek tek eklemelisiniz.

### Birden fazla personelin aynı nöbete yazılması nasıl sağlanır?
İlgili vardiya tanımında <strong>Nöbetçi Sayısı</strong> değerini gereken kişi adedine çıkarıp <strong>[Birim Kuralı Güncelle]</strong> butonuna basmanız yeterlidir.
:::
