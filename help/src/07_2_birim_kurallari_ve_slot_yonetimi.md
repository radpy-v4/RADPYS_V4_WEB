---json
{
  "pageTitle": "07. 07 2 Birim Kurallari Ve Slot Yonetimi — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Departman Nöbet Slotları, Akıllı Saat Hesabı & Kural Kopyalama",
  "lead": "Departmanların (Acil, USG, BT, MR) çalışma vardiyalarını, nöbetçi sayılarını, otomatik hesaplanan akıllı bitiş saatlerini ve birimler arası vardiya aktarımını bu ekrandan yönetebilirsiniz.",
  "overviewId": "overview",
  "badges": []
}
---

## Hızlı Reçete: Departman Vardiya Slotlarını Tanımlama ve Çoğaltma {#quick-recipe}

<div class="flex items-center gap-3">
 <div class="w-9 h-9 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold text-base shadow-md">
 </div>
 <div>
 <p class="text-xs text-slate-500 dark:text-slate-400">
 Vardiya slot açma, otomatik saat tamamlama ve birim kuralı kopyalama
 </p>
 </div>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">1. İstenen Sonuç</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Departmanın gece, gündüz ve hafta sonu ihtiyaç duyduğu nöbetçi pozisyonlarının eksiksiz sisteme tanıtılması.
 </p>
 </div>
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-cyan-600 dark:text-cyan-400 uppercase text-[10px] tracking-wider block">2. Yapılacak İşlem</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Birim seçin, başlangıç saatini ve süreyi girin (bitiş saati otomatik dolar), nöbetçi sayısını belirleyip <strong>[Birim Kuralı Ekle]</strong>'ye basın.
 </p>
 </div>
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[10px] tracking-wider block">3. Sistem Etkisi</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Nöbet dağıtım motoru bu slotları doldurmak için personel atar. <strong>[+ Birim Kuralını Kopyala]</strong> butonu ile aynı şablon diğer birimlere saniyeler içinde kopyalanabilir.
 </p>
 </div>
 </div>
 <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-cyan-100 dark:border-cyan-900/40">
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Departman Bazlı</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Özel Slot Havuzu</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Akıllı Saat</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Başlangıç + Süre</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Nöbetçi Sayısı</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Dinamik Kontenjan</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Kural Kopyalama</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Tek Tıkla Aktarım</span>
 </div>
 </div>
 </div>

## no-id {#no-id}

<span class="text-2xl shrink-0"> </span>
 <div class="space-y-1 text-xs sm:text-sm">
 <strong class="font-bold block text-sm text-amber-800 dark:text-amber-300">Önemli Kurumsal Uyarı: Birim Kuralı Kopyalama Davranışı</strong>
 <p class="leading-relaxed">
 <strong>[+ Birim Kuralını Kopyala]</strong> butonunu kullandığınızda, <strong>Hedef Birimde daha önce tanımlanmış olan mevcut tüm nöbet slotları tamamen silinir</strong> ve kaynak birimdeki slotlar sıfırdan oluşturulur. Yanlışlıkla birimin var olan slotlarını kaybetmemek için kopyalama öncesinde hedef birimi mutlaka kontrol ediniz.
 </p>
 </div>

## 07.2 Birim Kuralları ve Slotlar 5N1K Bileşen Çözümleme Tablosu {#5w1h}

| NE? (Bileşen Adı) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? |
| --- | --- | --- | --- | --- |
| Birim Seçimi (Açılır Kutu) | Hangi birimin nöbet kurallarının yönetileceğini seçmek. | Departman tablosundaki aktif servisleri listeler. Seçim değiştiğinde slot tablosu anında yenilenir. | Birim ayarlarını açarken. | Departman Sorumlusu |
| Nöbet Adı / Nöbet Kodu | Vardiyayı çizelgede ve raporlarda tekil olarak tanımlamak. | Örn: Nöbet Adı: "Acil Gece", Nöbet Kodu: "ACL_GECE". Dağıtım motorunda ve PDF çıktılarda bu isim ve kod görünür. | Slot oluştururken. | Nöbet Amiri |
| Başlangıç Saati & Süre (Saat) | Vardiyanın başlangıç saatini ve çalışma süresini belirlemek. | Başlangıç saati girildiğinde süre (saat) ile toplanarak bitiş saati matematiksel olarak hesaplanır. | Vardiya tanımlarken. | Yetkili Kullanıcı |
| Bitiş Saati (Otomatik Hesaplanan) | Kullanıcının yanlış bitiş saati girmesini önlemek (Akıllı Saat). | (Başlangıç + Süre) % 24 formülü ile çalışır. Gece yarısı devirlerinde (örn: 20:00 + 12s = 08:00) otomatik hesaplar. | Süre değiştikçe. | Sistem Otomatik |
| Nöbetçi Sayısı (Slot) | Bu nöbet slotunda aynı anda kaç teknisyenin görev alacağını belirlemek. | Örn: 2 seçilirse nöbet dağıtım motoru her gün bu slota iki farklı uygun personel atamak zorundadır. | Vardiya açarken. | Başhekimlik / Sorumlu |
| Hizmet Tipi (Açılır Kutu) | Vardiyanın belirli bir hizmet grubuna (örn: teknisyen, hemşire) özgülenmesini sağlamak. | Boş bırakılırsa (Genel) birimdeki tüm hizmet sınıflarına açık olur; seçilirse sadece o gruba yazılır. | Vardiya tanımlarken. | Nöbet Sorumlusu |
| Birim Kuralı Ekle Butonu | Girilen slot parametrelerini birim kuralı olarak kaydetmek. | Tıklandığında yeni vardiya slot tablosuna eklenir ve nöbet dağıtım havuzuna dahil edilir. | Slot oluştururken. | Departman Sorumlusu |
| Birim Kuralını Kopyala Butonu (Mor Buton) | Bir birimin tüm slotlarını başka bir birime anında çoğaltmak. | Açılan diyalogda kaynak ve hedef birim seçilir. Onay verildiğinde hedef birim slotları sıfırlanıp kopyalanır. | Yeni birim kurulumunda. | Sistem Yöneticisi |
| Birim Kuralını Sil Butonu | Kullanılmayan veya kaldırılan bir vardiya slotunu iptal etmek. | Tablodan seçilen slot onay sonrası sistemden kaldırılır; gelecek planlarda bu slota atama yapılmaz. | Slot iptalinde. | Departman Sorumlusu |

## Birim Kuralları ve Nöbet Slotları Ekranı {#screenshot}

![Birim Kuralları ve Nöbet Slotları Ekranı | Ekran: Nöbet Ayarları > [Birim Kuralları] Sekmesi | Birim Kuralları Sekmesi](assets/img/nobet_birim_kurallari.png "<span><strong>Simülasyon Notu:</strong> Departman slotları ve çalışma saatleri hastane test ortamına göre yapılandırılmıştır.</span>")

## Adım Adım Yeni Birim Slotu Açma ve Kopyalama {#step-by-step}

<div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <ol class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li><strong>[Birim Kuralları]</strong> sekmesinde sol üstten ilgili departmanı (örn: Acil Radyoloji) seçin.</li>
 <li>Alt kısımdaki <strong>Vardiya Tanımlama</strong> kutularına gidin:
 <ul class="list-disc list-inside pl-5 mt-1 text-slate-500 dark:text-slate-400 space-y-0.5">
 <li><strong>Nöbet Adı:</strong> "Acil Gece 12s"</li>
 <li><strong>Nöbet Kodu:</strong> "ACL_12"</li>
 <li><strong>Başlangıç Saati:</strong> 20:00</li>
 <li><strong>Süre (Saat):</strong> 12 <em>(Bitiş saati akıllı motor ile otomatik 08:00 olacaktır.)</em></li>
 <li><strong>Nöbetçi Sayısı:</strong> 2</li>
 <li><strong>Geçerli Günler:</strong> "Her Gün"</li>
 </ul>
 </li>
 <li><strong>[Birim Kuralı Ekle]</strong> butonuna basın. Yeni slot üstteki tabloda listelenir.</li>
 <li>Aynı kuralları BT servisine de aktarmak isterseniz:
 <ul class="list-disc list-inside pl-5 mt-1 text-slate-500 dark:text-slate-400 space-y-0.5">
 <li>Üstteki mor <strong>[+ Birim Kuralını Kopyala]</strong> butonuna basın.</li>
 <li>Kaynak olarak <strong>Acil Radyoloji</strong>, hedef olarak <strong>Bilgisayarlı Tomografi (BT)</strong> seçin.</li>
 <li>Onay kutusunda "Evet" diyerek aktarımı tamamlayın.</li>
 </ul>
 </li>
 </ol>
 </div>

## Sıkça Sorulan Sorular (Birim Slotları) {#faq}

:::faq
### Bitiş saatini manuel olarak değiştirebilir miyim? ▾
Hayır, bitiş saati kutusu bilerek salt-okunurdur. Hatalı süre veya çakışan vardiya girişlerini engellemek için sistem, başlangıç saati ile süreyi toplayarak bitiş saatini otomatik üretir.

### Kural kopyalarken hedef birimdeki eski slotları koruyamaz mıyım? ▾
Kural kopyalama işlevi, hedef birimin şablonunu kaynak birimle tam olarak eşitlemek üzere tasarlanmıştır. Bu sebeple hedef birimin eski slotları silinir. Eğer eski slotları korumak istiyorsanız yeni slotları tek tek eklemeniz önerilir.
:::
