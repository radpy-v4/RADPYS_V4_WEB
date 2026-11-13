---json
{
  "pageTitle": "07. 07 3 Gelismis Kisitlar Ve Adalet Agirliklari — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Gelişmiş Kısıtlar, Hizmet Sınıfı Kuralları ve Nöbet Dağıtım Adalet Ağırlıkları",
  "lead": "RADPYS nöbet dağıtım motorunun çizelge üretirken baz aldığı adalet ceza katsayıları, hafta sonu dengeleme çarpanları ve hizmet sınıfı (Tabip, Radyoloji Teknisyeni) bazlı kurallar bu ekrandan yönetilir.",
  "overviewId": "overview",
  "badges": []
}
---

## Hızlı Reçete: Hizmet Sınıfı Kuralı Tanımlama ve Adalet Dengesi {#quick-recipe}

<div class="flex items-center gap-3">
 <div class="w-9 h-9 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold text-base shadow-md"> </div>
 <div>
 <p class="text-xs text-slate-500 dark:text-slate-400">
 Unvan bazlı sınırlar ve ceza puanı minimizasyonu
 </p>
 </div>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">1. İstenen Sonuç</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Tabipler ile teknisyenlerin çalışma sınırlarını ayırmak ve nöbetlerin ekip arasında adil dağılmasını sağlamak.
 </p>
 </div>
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-cyan-600 dark:text-cyan-400 uppercase text-[10px] tracking-wider block">2. Yapılacak İşlem</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Kural Tipini seçin (aylık max, dinlenme vb.), Hizmet Sınıfını belirleyin, sınır Değerini girip <strong>[Kural Ekle]</strong> butonuna basın.
 </p>
 </div>
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[10px] tracking-wider block">3. Sistem Etkisi</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Kural Piramidi uyarınca bu kural genel ayarı ezer; nöbet dağıtım motoru çizelgeyi hesaplarken bu sınıra öncelikli olarak uyar.
 </p>
 </div>
 </div>
 <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-cyan-100 dark:border-cyan-900/40">
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Hizmet Sınıfı</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Tabip / Teknisyen</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Kural Sınıfı</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Yasal / Kurumsal</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Adalet Katsayısı</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Ceza Minimizasyonu</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Kısıt Tipi</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Sert & Esnek Sınır</span>
 </div>
 </div>
 </div>

## 07.3 Gelişmiş Kısıtlar 5N1K Bileşen Çözümleme Tablosu {#5w1h}

| NE? (Bileşen Adı) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? |
| --- | --- | --- | --- | --- |
| Kural Adı (Giriş Kutusu) | Kısıt kuralına anlaşılır bir tanım vermek. | Örn: "Teknisyen Hafta Sonu Limiti", "Uzman Tabip Aylık Max Nöbet". Rapor ve uyarılarda bu ad görünür. | Kural oluştururken. | Nöbet Yöneticisi |
| Kural Tipi (Açılır Kutu) | Kuralın hangi çalışma parametresini denetleyeceğini belirlemek. | "aylik_max", "art_arda_max", "nöbet_sonrasi_dinlenme", "hafta_sonu_limit", "bayram_limit" seçeneklerinden biri seçilir. | Kural oluştururken. | Yönetici |
| Kural Sınıfı (Açılır Kutu) | Kuralın yasal zorunluluk mu kurumsal tercih mi olduğunu belirlemek. | "Yasal" seçilirse asla delinemez sert kısıt (hard constraint) olur; "Kurumsal/Tercih" seçilirse ceza puanlı esnek kural olur. | Kural eklerken. | Başhekimlik |
| Hizmet Sınıfı (Açılır Kutu) | Kuralın hangi meslek grubuna uygulanacağını seçmek. | Örn: "Radyoloji Teknisyeni" veya "Uzman Tabip". Boş bırakılırsa tüm personele uygulanır. | Grup ayrımında. | Nöbet Sorumlusu |
| Birim (Açılır Kutu) | Kuralın belirli bir kliniğe özgülenmesini sağlamak. | Departman seçilirse Kural Piramidi Öncelik 1 (Birim+Sınıf) kademesinde değerlendirilir. | Birim kuralı yazarken. | Departman Sorumlusu |
| Değer (Sayısal Giriş) | Kuralın sayısal sınırını belirlemek. | Aylık nöbet adedi, saat veya gün limiti girilir (örn: 3 nöbet veya 24 saat). | Eşik belirlerken. | Yönetici |
| Kural Ekle Butonu | Hazırlanan kısıt parametresini listeye ve veritabanına eklemek. | Tıklandığında kural tablosuna yeni satır olarak düşer ve nöbet dağıtım motoru aktif kuralları arasına alır. | Kural kaydında. | Yönetici |
| Kural Güncelle Butonu | Mevcut bir kuralın değerini veya hizmet sınıfını revize etmek. | Tablodan satır seçildiğinde aktifleşir; düzenleme sonrası değişiklikleri kaydeder. | Değer revizyonunda. | Yetkili Kullanıcı |
| Kuralı Sil Butonu | Artık geçerli olmayan bir kuralı sistemden kaldırmak. | Kuralı nöbet dağıtım motorundan tamamen çıkarır. | Kural iptalinde. | Yönetici |

## Gelişmiş Kısıtlar ve Kural Tablosu Ekranı {#screenshot}

![Gelişmiş Kısıtlar ve Kural Tablosu Ekranı | Ekran: Nöbet Ayarları > [Gelişmiş Kısıtlar] Sekmesi | Gelişmiş Kısıtlar Sekmesi](assets/img/nobet_gelismis.png "<span><strong>Simülasyon Notu:</strong> Kural adları, hizmet sınıfı eşleştirmeleri ve ceza değerleri test ortamı standartlarına göre örneklenmiştir.</span>")

## Adım Adım Hizmet Sınıfı Kuralı Ekleme {#step-by-step}

<div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <ol class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li><strong>[Gelişmiş Kısıtlar]</strong> sekmesini açın.</li>
 <li>Sağdaki <strong>Kısıt Düzenleyici</strong> alanında:
 <ul class="list-disc list-inside pl-5 mt-1 text-slate-500 dark:text-slate-400 space-y-0.5">
 <li><strong>Kural Adı:</strong> "Teknisyen Hafta Sonu Tavanı" yazın.</li>
 <li><strong>Kural Tipi:</strong> "hafta_sonu_limit" seçin.</li>
 <li><strong>Kural Sınıfı:</strong> "Kurumsal" olarak belirleyin.</li>
 <li><strong>Hizmet Sınıfı:</strong> "Radyoloji Teknisyeni" seçin.</li>
 <li><strong>Değer:</strong> "3" girin.</li>
 <li><strong>Açıklama:</strong> "Teknisyenler ayda en fazla 3 hafta sonu nöbeti tutabilir."</li>
 </ul>
 </li>
 <li><strong>[Kural Ekle]</strong> butonuna basın. Kural üstteki tabloda listelenir.</li>
 <li>Artık nöbet dağıtım motoru teknisyenler için bu kuralı 3 olarak uygularken, diğer hizmet sınıfları için genel ayarı (4) uygulamaya devam eder.</li>
 </ol>
 </div>

## Sıkça Sorulan Sorular (Gelişmiş Kısıtlar) {#faq}

:::faq
### Hizmet sınıfı kuralı genel temel ayardan farklı olursa ne olur? ▾
RADPYS Kural Piramidi uyarınca Hizmet Sınıfı kuralı Genel Temel Ayardan daha önceliklidir (Öncelik 3 > Öncelik 4). Dolayısıyla o hizmet sınıfındaki personele özel kural uygulanır, genel ayar ezilir.

### Kural sınıfında "Yasal" ile "Kurumsal" arasındaki fark nedir? ▾
"Yasal" kurallar sert kısıttır (hard constraint); çözümsüzlük çıksa dahi nöbet dağıtım motoru bu kuralı kesinlikle delemez. "Kurumsal" kurallar ise yüksek ceza puanlı esnek kısıtlardır; çözümsüzlük anında sistem ceza puanını göze alarak kuralı asgari ölçüde esnetebilir.
:::
