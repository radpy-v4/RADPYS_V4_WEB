---json
{
  "pageTitle": "07.3. Yasal & Kurumsal Kısıtlar ve Adalet Ağırlıkları — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Yasal & Kurumsal Kısıtlar, Hizmet Sınıfı Kuralları ve Adalet Ağırlıkları",
  "lead": "Kural piramidinin üst kademelerini oluşturan hizmet sınıfı (Tabip, Radyoloji Teknisyeni vb.) ve birim bazlı kısıtları, Sert (Yasal) ile Yumusak (Kurumsal) ayrımını ve nöbet dağıtım adalet sınırlarını yönetmenizi sağlar.",
  "overviewId": "overview",
  "badges": [
    {
      "text": "07.3 Yasal & Kurumsal Kısıtlar",
      "tone": "emerald"
    }
  ],
  "readingTime": "4 Dakika",
  "legalNote": "<strong>Kural Sırası:</strong> Bu sekmede hem Birim hem Hizmet Sınıfı birlikte seçildiğinde oluşturulan kural piramidin en tepesinde yer alır ve genel temel ayarları otomatik ezer."
}
---

## Kısa Reçete: Hizmet Sınıfı ve Birim Bazlı Kısıt Tanımlama {#quick-recipe}

:::recipe Kısa Reçete: Hizmet Sınıfı ve Birim Bazlı Kısıt Tanımlama | 20 SANİYELİK AKIŞ
### 1. İstenen Sonuç | slate
Farklı meslek gruplarının ve klinik birimlerin çalışma sınırlarının ayrıştırılması ve dağıtım motorunun sert/esnek kısıt dengesiyle çalıştırılması.

### 2. Yapılacak İşlem | cyan
<strong>[Yasal &amp; Kurumsal Kısıtlar]</strong> sekmesinde Kural Tipini, <strong>Sert</strong> veya <strong>Yumusak</strong> sınıfını, Hizmet Sınıfını, Birimi ve sayısal sınırı seçerek <strong>[Kısıt Ekle]</strong> butonuna basın.

### 3. Sistem Etkisi | emerald
Eklenen kural piramit önceliğine göre genel ayarın yerine geçer; Sert kurallar kesinlikle çiğnenmez, Yumusak kurallar ceza katsayısıyla adil biçimde dengelenir.

- [metric] Kural Sınıfı | Sert &amp; Yumusak | emerald
- [metric] Kapsam | Birim + Hizmet Sınıfı | cyan
- [metric] Kural Çeşidi | 13 Standart Parametre | slate
- [metric] Öncelik Etkisi | Genel Ayarı Ezer | amber
:::

## 5N1K Kural ve Arayüz Çözümleme Tablosu {#5w1h}

*Yasal ve Kurumsal Kısıtlar sekmesindeki kural tipleri, sertlik derecesi ve kapsam filtrelerinin çalışma mantığı.*

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| <strong>Kural Tipi Seçimi (13 Parametre)</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Standart Kural Havuzu</span> | Kuralın hangi dinlenme, mesai veya adalet ölçütünü denetleyeceğini belirlemek. | Ardışık nöbet günü, nöbet sonrası dinlenme, hafta sonu/bayram dengesi, gece boşluğu, haftalık 35s/40s mesai, emzirme, gebelik, sendika ve 130s yasal FM tavanından biri seçilir. | Kural oluşturulurken. | Nöbet Yöneticisi |
| <strong>Kural Sınıfı (Sert / Yumusak)</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Delinemez vs Esnek Kısıt</span> | Yasal zorunlulukları esnetilebilir kurumsal tercihlerden ayırmak. | <em>Sert</em> sınıfı motor için mutlak engel oluşturur; <em>Yumusak</em> sınıfı ise çözümsüzlük riskinde ceza puanı karşılığı esnetilebilir. | Kural eklenirken. | Başhekimlik / Yönetici |
| <strong>Hizmet Sınıfı Kapsamı</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">[Tum Hizmet Siniflari] veya Özel Grup</span> | Tabip, Radyoloji Teknisyeni gibi meslek gruplarına farklı limitler uygulamak. | Seçilen meslek grubuna özel değer uygulanır; <em>Tum Hizmet Siniflari</em> seçiliyse ayrım yapılmaksızın kapsamdaki herkese geçerlidir. | Meslek grubu ayrımında. | Birim Sorumlusu |
| <strong>Birim Kapsamı</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">[Tum Birimler] veya Klinik</span> | Kuralı yalnızca belirli bir servise özgüleyip piramit önceliğini yükseltmek. | Hem Birim hem Hizmet Sınıfı seçildiğinde Piramit Öncelik 1 oluşur ve alt kademedeki tüm genel kuralları geçersiz kılar. | Birim kuralı tanımlanırken. | Departman Sorumlusu |
| <strong>Sayısal Değer &amp; [Aktif] Anahtarı</strong><br><span class="text-[11px] text-slate-500 dark:text-slate-400">Dinamik Eşik Kontrolü</span> | Kuralı silmeden geçici olarak devreye almak veya sınırını revize etmek. | Girilen nöbet adedi veya saat sınırı yalnızca <strong>[Aktif]</strong> kutusu işaretliyken dağıtım motoru ve uyarılarda dikkate alınır. | Kural güncellenirken. | Yetkili Yönetici |

## Arayüz Ekran Görünümleri {#screenshots}

![Yasal ve Kurumsal Kısıtlar Ekranı | Nöbet Ayarları > Yasal & Kurumsal Kısıtlar | Hizmet Sınıfı, Sert/Yumuşak Kısıtlar & Öncelikler | emerald](assets/img/nobet_gelismis.png)

## Adım Adım İşlem Rehberi {#step-by-step}

### 1. Hizmet Sınıfı veya Birime Özel Kural Ekleme ve Güncelleme

1. Sol menüden **[Nöbet Yönetimi] &gt; [Nöbet Ayarları ve Kurallar]** ekranına girip **[Yasal &amp; Kurumsal Kısıtlar]** sekmesini açın ve **[Yeni Kisit]** butonuna tıklayın.
2. **Kisit Duzenleyici** panelinde Kural Adını yazın; Kural Tipini (örneğin *Hafta Sonu Nöbet Dengesi / Limiti*), Kural Sınıfını (**Sert** veya **Yumusak**), Hizmet Sınıfını (örneğin *Radyoloji Teknisyeni*), varsa Birimi ve sayısal Değeri girin.
3. **[Aktif]** kutusunun işaretli olduğunu doğrulayıp **[Kısıt Ekle]** butonuna basın.
4. Mevcut bir kuralın sınırını değiştirmek için tablodan satırı seçip **[Kısıtı Güncelle]**, yürürlükten kaldırmak için **[Kisiti Sil]** butonunu kullanın.

## Sıkça Sorulan Sorular (SSS) {#faq}

:::faq
### Hizmet sınıfı kuralı genel temel ayardan farklı olursa sistem hangisini uygular?
Kural Piramidi uyarınca Birim + Hizmet Sınıfı ve tek başına Hizmet Sınıfı kuralları Genel Temel Ayarlardan daha yüksek önceliklidir. Bu nedenle ilgili gruptaki personele bu sekmedeki özel sınır uygulanır.

### "Sert" ve "Yumusak" kural sınıfları arasındaki fark nedir?
<strong>Sert</strong> kurallar çözümsüzlük çıksa bile dağıtım motoru tarafından çiğnenemeyen katı kurallardır. <strong>Yumusak</strong> kurallar ise adalet dengesini hedefler; zorunlu personel yetersizliği halinde motor ceza puanını göze alarak bu sınırı asgari düzeyde esnetebilir.

### Mevcut bir kuralı silmeden geçici olarak nasıl devre dışı bırakabilirim?
Tablodan ilgili kuralı seçip <strong>[Aktif]</strong> kutusundaki işareti kaldırarak <strong>[Kısıtı Güncelle]</strong> butonuna basmanız yeterlidir; kural tanımı korunur ancak planlamada uygulanmaz.
:::
