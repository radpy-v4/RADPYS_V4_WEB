---json
{
  "pageTitle": "07.1. Temel Nöbet Ayarları ve Çalışma Standartları — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları",
  "lead": "Hastane genelinde geçerli temel çalışma limitlerini, ardışık nöbet ve dinlenme sürelerini, 35 saat / 40 saat haftalık mesai standartlarını, kıdemli personel muafiyet seçeneklerini ve devir/geri alma emniyet kilitlerini yönetmenizi sağlar.",
  "overviewId": "overview",
  "badges": [
    {
      "text": "07.1 Temel Ayarlar",
      "tone": "cyan"
    }
  ],
  "readingTime": "4 Dakika",
  "legalNote": "<strong>Parametre Notu:</strong> Bu sekmedeki değerler Kural Piramidinin en altındaki genel kurum standardıdır; birim veya hizmet sınıfına özel bir kural tanımlandığında daha özel kural bu sekmedeki değeri ezer."
}
---

## Kısa Reçete: Temel Nöbet Parametrelerini Yapılandırma {#quick-recipe}

:::recipe Kısa Reçete: Temel Nöbet Parametrelerini Yapılandırma | 20 SANİYELİK AKIŞ
### 1. İstenen Sonuç | slate
Personelin aşırı yorulmasını önleyen, yasal çalışma rejimine uyumlu ve adalet öncelikleri belirlenmiş genel nöbet standardı.

### 2. Yapılacak İşlem | cyan
<strong>[Temel Ayarlar]</strong> sekmesinde ardışık gün, dinlenme saati, haftalık 35s/40s mesai, fazla mesai kotası ve muafiyet kriterlerini belirleyip <strong>[Temel Ayarlari Kaydet]</strong> butonuna basın.

### 3. Sistem Etkisi | emerald
Dağıtım motoru özel bir istisna olmadıkça bu sınırları varsayılan kısıt olarak uygular; haftalık 40s ve 35s oranı otomatik güncellenerek karma mesai denkliği korunur.

- [metric] Dinlenme Aralığı | Min 24 Saat | cyan
- [metric] Kurumsal Kota | 60s (Yasal Tavan 130s) | amber
- [metric] Haftalık Rejim | 35s Radyasyon / 40s Genel | slate
- [metric] Kıdem Kalkanı | 50 Yaş / 25 Yıl | emerald
:::

## 5N1K Kural ve Arayüz Çözümleme Tablosu {#5w1h}

*Temel Ayarlar sekmesindeki klinik sınırların ve emniyet anahtarlarının çalışma mantığı (kayıt adımları aşağıdadır).*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| <strong>Hafta Sonu, Bayram ve Ardışık Nöbet Tavanları</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Aylık ve Günlük Sınırlar</span> | Bir personelin ay içinde üst üste veya yoğun tatil günlerinde yıpranmasını önlemek. | Ayda azami hafta sonu (varsayılan 4), bayram (varsayılan 2) ve ardışık nöbet sınırı (varsayılan 2 gün) dağıtım motoru için sert eşik olarak değerlendirilir. | Plan dağıtımında. | Sistem Yöneticisi |
| <strong>Bayram ve Gece Adalet Önceliği</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Onemsiz – Cok Onemli</span> | Geçmiş dönemlerde bayram ve gece nöbeti tutan personeli sonraki aylarda korumak. | Seçilen önem derecesi (<em>Onemsiz</em>, <em>Normal</em>, <em>Onemli</em>, <em>Cok Onemli</em>) dağıtım motorunun adalet ceza ağırlığını artırır veya azaltır. | Otomatik dağıtımda. | Birim Sorumlusu |
| <strong>Yaş ve Kıdem Muafiyeti Kapsam Kutuları</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Gece &amp; Hafta Sonu Kapsamı</span> | 50 yaş veya 25 yıl kıdemli personelin hangi vardiya türlerinden öncelikle korunacağını seçmek. | <strong>[Yaş/Kıdem Muafiyeti Gece Nöbetini Kapsasın]</strong> ve <strong>[Yaş/Kıdem Muafiyeti Hafta Sonu Nöbetini Kapsasın]</strong> kutularına göre öncelikli muafiyet alanı belirlenir. | Planlama sırasında. | Yönetici |
| <strong>[Devredilen nöbet değiştirilemez kısıtı]</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Devir Kilidi</span> | Personeller arası devir veya takasla kesinleşmiş nöbetlerin yeniden dağıtılmasını engellemek. | İşaretlendiğinde daha önce devredilmiş nöbet slotları kilitli kabul edilir ve otomatik düzenlemelerde değiştirilmez. | Çizelge güncellenirken. | Sistem Yöneticisi |
| <strong>Çapraz Atama &amp; Devir Nedeni Kilidi</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Operasyon Güvenliği</span> | Departmanlar arası geçici atamayı yönetmek ve devir taleplerinde yazılı gerekçe toplamak. | <strong>[Departmanlar arasi gecici atama acik]</strong> çapraz görevlendirmeye izin verir; <strong>[Devir nedeni zorunlu]</strong> ise gerekçesiz devir talebini engeller. | Geçici atama ve devirde. | Sistem Yöneticisi |
| <strong>[Yayindan taslaga donus (Admin onayıi)]</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Geri Alma Emniyeti</span> | İlan edilmiş nöbet çizelgesinin kontrolsüzce taslağa çekilmesini önlemek. | Yalnızca onay kutusu açıkken ve yönetici şifresi doğrulandığında yayınlanmış planlar taslağa geri döndürülebilir. | Plan geri çekilirken. | Sistem Yöneticisi |

## Arayüz Ekran Görünümleri {#screenshots}

![Nöbet Temel Ayarlar Ekranı | Nöbet Yönetimi > Nöbet Ayarları ve Kurallar > Temel Ayarlar | Genel Parametreler & Muafiyetler | cyan](assets/img/nobet_temel_ayarlar.png "<span><strong>Yasal Bilgilendirme:</strong> Görseldeki eşik değerler test ortamında yapılandırılmış sentetik parametrelerdir.</span>")

## Adım Adım İşlem Rehberi {#step-by-step}

### 1. Temel Çalışma ve Muafiyet Standartlarını Kaydetme

1. Sol menüden **[Nöbet Yönetimi] &gt; [Nöbet Ayarları ve Kurallar]** ekranını açın ve ilk sekme olan **[Temel Ayarlar]** bölümüne girin.
2. **Temel Parametreler** alanında ardışık nöbet sınırını, nöbet sonrası minimum dinlenme süresini (24 saat), haftalık mesai standartlarını (35 saat / 40 saat), aylık fazla mesai kotasını (60 saat) ve adalet önceliklerini belirleyin.
3. Gerekli ise **[Gelismis Secenekleri Goster]** butonuna tıklayarak hafta içi önceliği (**[Önce hafta içi/normal günleri doldur (Hafta sonları en son planlanır)]**) ve devir/geri alma emniyet seçeneklerini düzenleyin.
4. **Muafiyet Kriterleri** bölümünde yaş sınırını (50), hizmet yılını (25) ve korumanın kapsayacağı nöbet türlerini işaretleyin.
5. Sağ alttaki **[Temel Ayarlari Kaydet]** butonuna basarak onaylayın.

## Sıkça Sorulan Sorular (SSS) {#faq}

:::faq
### 60 saatlik fazla mesai sınırı acil personel eksikliğinde aşılabilir mi?
Evet. 60 saat çalışan sağlığını korumaya yönelik kurumsal kotadır; olağanüstü servis ihtiyacında yönetici onayıyla esnetilebilir. Ancak 657 sayılı Kanun Ek Madde 33 kapsamındaki aylık nöbet ücreti ödeme tavanı <strong>130 saattir</strong>.

### 50 yaşını geçen personele neden bazen gece nöbeti atanabiliyor?
50 yaş ve 25 hizmet yılı kriterleri mutlak kanuni yasak değil, koruyucu kurum önceliğidir. Motor önce gündüz vardiyası atar; ancak serviste boş slot kalırsa veya personelin aylık çalışma saati eksik kalırsa bu kriteri otomatik esneterek gece nöbeti yazabilir.

### Haftalık 35 saat ve 40 saat standartları değiştiğinde eski oranı elle güncellemem gerekir mi?
Hayır. Normal ve radyasyon haftalık çalışma saatleri değiştirilip kaydedildiğinde aradaki denklik oranı sistem tarafından otomatik yeniden hesaplanır.
:::
