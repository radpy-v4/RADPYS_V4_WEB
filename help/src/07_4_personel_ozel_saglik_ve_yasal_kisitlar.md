---json
{
  "pageTitle": "07. 07 4 Personel Ozel Saglik Ve Yasal Kisitlar — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Personel Özel Sağlık Kısıtları, Yasal Haklar ve Fazla Mesai Engelleri",
  "lead": "Gebe personelin radyasyondan korunması ve gece nöbeti yasağı, yasal süt/emzirme izinleri saat indirimleri, sendika yöneticisi mesai azaltımları ve bireysel fazla mesai yasaklama (FM Off) kuralları bu ekrandan yönetilir.",
  "overviewId": "overview",
  "badges": []
}
---

## Hızlı Reçete: Bireysel Yasal Sağlık Kısıtı Tanımlama {#quick-recipe}

<div class="flex items-center gap-3">
 <div class="w-9 h-9 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold text-base shadow-md"> </div>
 <div>
 <p class="text-xs text-slate-500 dark:text-slate-400">
 Gebelik, süt izni, sendika azaltımı ve FM yasağı yönetimi
 </p>
 </div>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">1. İstenen Sonuç</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Yasal koruma altındaki personelin mevzuata uygun biçimde nöbetten veya fazla mesaiden otomatik muaf tutulması.
 </p>
 </div>
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-cyan-600 dark:text-cyan-400 uppercase text-[10px] tracking-wider block">2. Yapılacak İşlem</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Personeli seçin, Kısıt Tipini (Gebelik, Süt İzni vb.) belirleyin, başlangıç-bitiş tarihlerini girip <strong>[Kısıt Ekle]</strong> butonuna basın.
 </p>
 </div>
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[10px] tracking-wider block">3. Sistem Etkisi</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Gebelik ve doz aşımında radyasyonlu alan nöbetleri kapatılır (radyasyonsuz alanda gündüz vardiyası ve yasal devir korunur); sağlık kurulu ve analık raporlarında rapor günleri aylık hedeften otomatik düşülür.
 </p>
 </div>
 </div>
 <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-cyan-100 dark:border-cyan-900/40">
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Gebelik Kilidi</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Gece & FM Yasak (1 mSv)</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Süt İzni</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">İlk 6 Ay: 3s | Sonra: 1.5s</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"> </span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Sendika İzni</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Memur: 4s/hf | İşçi: 2s/hf</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">FM Kilidi</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Personel FM Off</span>
 </div>
 </div>
 </div>

## 07.4 Personel Özel Kısıtları 5N1K Bileşen Çözümleme Tablosu {#5w1h}

| NE? (Bileşen Adı) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? |
| --- | --- | --- | --- | --- |
| Personel Seçimi (Açılır Kutu) | Kısıtın uygulanacağı çalışanı belirlemek. | Departmandaki aktif personelleri listeler. İsim veya TC Kimlik ile filtrelenebilir. | Kısıt oluştururken. | İK / Nöbet Sorumlusu |
| [Kısıt Tipi] (Açılır Kutu) | Yasal muafiyet veya sağlık kısıtının gerekçesini seçmek. | Yasal Emzirme İzni, Gebelik Muafiyeti (5 Fazlı Yaşam Döngüsü), Analık İzni, Sendika Muafiyeti, Engelli / Engelli Yakını, Sağlık Kurulu Raporu, Doz Sınırı Aşımı ve Diğer Özel Durumlar seçeneklerini içerir. | Rapor geldiğinde. | Yetkili Kullanıcı |
| [Saat Azaltım] &amp; [Azaltım Türü] | Personelin günlük, haftalık veya aylık mesaisinden düşülecek süreyi belirlemek. | Süt izninde ilk 6 ay 3 saat, ikinci 6 ay 1.5 saat; sendika izninde haftalık saat; sağlık kurulu ve analık raporunda ise rapor tarih aralığındaki iş günleri aylık zorunlu çalışma hedefinden otomatik eksiltilir. | Kısıt süresince. | İK Uzmanı |
| [Fazla Mesai Yazılamaz (FM Off)] &amp; [Personel Max FM] | Personelin ayda yapabileceği azami fazla mesai tavanını kişiye özel sınırlamak. | Gebelik, süt izni, analık, engelli/engelli yakını ve doz aşımında fazla mesai otomatik 0 saate kilitlenir (doz aşımında koruma kalıcıdır). Sağlık raporunda özel istek yoksa rapor tarihleri dışında mesai yazılabilir. | Bireysel sınırlamada. | Klinik Amiri |
| Başlangıç / Bitiş Tarihi | Kısıtın geçerlilik dönemini takvimle sınırlamak. | Tarih aralığı dışında kalan aylarda kısıt otomatik hükümsüz kalır; personel normal çalışma düzenine döner. | Rapor geçerliliğinde. | Sorumlu |
| Gerekçe (Metin Kutusu) | Kısıtın dayandığı resmi rapor veya evrak numarasını kaydetmek. | Örn: "Sağlık Kurulu Rapor No: 2026/412", "Sendika Yetki Belgesi". Denetim izinde saklanır. | Kayıt esnasında. | Kullanıcı |
| Kısıt Ekle Butonu | Bireysel kısıt kaydını sisteme işlemek. | Tıklandığında kısıt tablosuna eklenir ve nöbet dağıtım motorunun çalışma matrisine dahil edilir. | Kayıt tamamlarken. | Yetkili Kullanıcı |
| Kısıt Güncelle / Sil Butonları | Süresi biten veya revize edilen raporları düzenlemek veya kaldırmak. | Seçilen kısıtın tarihini uzatır veya kısıtı sonlandırarak personeli tam kapasiteye geçirir. | Durum değişiminde. | Yönetici |

## Personel Özel Kısıtları Ekranı {#screenshot}

![Personel Özel Kısıtları Ekranı | Ekran: Nöbet Ayarları > [Personel Kısıtları] Sekmesi | Personel Kısıtları Sekmesi](assets/img/nobet_person_kisit.png "<span><strong>Simülasyon Notu:</strong> Personel adları, kısıt türleri ve tarih aralıkları mevzuata uygun test verileriyle örneklendirilmiştir.</span>")

## Adım Adım Süt İzni ve Gebelik Kısıtı Tanımlama {#step-by-step}

<div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <ol class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li><strong>[Personel Kısıtları]</strong> sekmesine geçin.</li>
 <li>Sağdaki <strong>Kayıt Düzenleyici</strong> alanında:
 <ul class="list-disc list-inside pl-5 mt-1 text-slate-500 dark:text-slate-400 space-y-0.5">
 <li><strong>Personel:</strong> İlgili çalışanı açılır kutudan seçin.</li>
 <li><strong>Kısıt Tipi:</strong> Yasal emzirme için <strong>"süt_emzirme"</strong> veya gebelik için <strong>"gebelik"</strong> seçin.</li>
 <li><strong>Saat Azaltım:</strong> Süt izninin ilk 6 ayı için <strong>3 saat</strong>, ikinci 6 ayı için <strong>1.5 saat</strong> yazın.</li>
 <li><strong>Personel Max FM:</strong> Gebe personelde mutlaka <strong>0 saat</strong> olarak bırakın.</li>
 <li><strong>Başlangıç / Bitiş Tarihi:</strong> Resmi raporun geçerlilik tarihlerini girin.</li>
 <li><strong>Gerekçe:</strong> "Doğum Sonrası Süt İzni Raporu" yazın.</li>
 </ul>
 </li>
 <li><strong>[Kısıt Ekle]</strong> butonuna tıklayın.</li>
 <li>Artık nöbet dağıtım motoru bu personeli kesinlikle gece nöbetlerine ve fazla mesaiye yazmayacak; zorunlu mesai hedefini azaltılan saatler üzerinden hesaplayacaktır.</li>
 </ol>
 </div>

## Sıkça Sorulan Sorular (Sağlık Kısıtları) {#faq}

:::faq
### Gebe personele acil durumda dahi gece nöbeti yazılabilir mi? ▾
<strong>KESİNLİKLE HAYIR.</strong> Gebelik durumu, 50 yaş muafiyeti gibi esnetilebilir bir kurum tercihi değildir; NDK mevzuatı ve İş Kanunu gereği mutlak kanuni yasaktır. Sistem gebe personelin gece nöbetine ve fazla mesaiye atanmasını tamamen kilitler; ayrıca fetüs koruması için yıllık doz limitini 1 mSv'e düşürür.

### Sendika yöneticisi mesai indirimi ne kadardır? ▾
Mevzuat gereği sendika şube yöneticisi olan 657 memurlar için haftalık 4 saat, 4857 işçiler için haftalık 2 saat mesai indirimi tanımlanır. Nöbet dağıtım motoru bu saatleri personelin haftalık hedefinden otomatik olarak düşer.
:::
