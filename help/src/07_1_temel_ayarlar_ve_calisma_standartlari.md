---json
{
  "pageTitle": "07. 07 1 Temel Ayarlar Ve Calisma Standartlari — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Temel Nöbet Ayarları, Dinlenme Süreleri ve Fazla Mesai Standartları",
  "lead": "RADPYS'nin hastane genelinde uyguladığı temel çalışma limitleri, 24 saat çalışma ve kesintisiz dinlenme kuralları, esnek fazla mesai tavanı ve kıdemli personel koruma eşikleri bu ekrandan yönetilir.",
  "overviewId": "overview",
  "badges": []
}
---

## Hızlı Reçete: Temel Nöbet Parametrelerini Yapılandırma {#quick-recipe}

<div class="flex items-center gap-3">
 <div class="w-9 h-9 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold text-base shadow-md">
 </div>
 <div>
 <p class="text-xs text-slate-500 dark:text-slate-400">
 Klinik çalışma sınırları, dinlenme kısıtları ve esnek fazla mesai
 </p>
 </div>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">1. İstenen Sonuç</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Klinikte personelin aşırı yorulmasını önleyen, dinlenme hakkını koruyan ve yasal sınırlara uyan genel düzen.
 </p>
 </div>
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-cyan-600 dark:text-cyan-400 uppercase text-[10px] tracking-wider block">2. Yapılacak İşlem</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Dinlenme saatini (24s), ardışık nöbet sınırını (2 gün) ve temel FM tavanını (60s) girip <strong>[Temel Ayarları Kaydet]</strong> butonuna basın.
 </p>
 </div>
 <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
 <span class="font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[10px] tracking-wider block">3. Sistem Etkisi</span>
 <p class="font-semibold text-slate-800 dark:text-slate-100">
 Nöbet dağıtım motoru bu sınırları sert kural (hard constraint) olarak uygular; acil durumda yönetici onayıyla FM tavanı 130 saate kadar esnetilebilir.
 </p>
 </div>
 </div>
 <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-cyan-100 dark:border-cyan-900/40">
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base">⏱️</span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Günlük Sınır</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Max 24 Saat</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Dinlenme Aralığı</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">Min 24 Saat</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"></span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Temel FM Sınırı</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">60s (Esnek Tavan)</span>
 </div>
 </div>
 <div class="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-2">
 <span class="text-base"> </span>
 <div>
 <span class="text-[10px] uppercase font-bold text-slate-400 block">Kıdem Kalkanı</span>
 <span class="text-xs font-bold text-slate-800 dark:text-slate-100">50 Yaş / 25 Yıl</span>
 </div>
 </div>
 </div>

## 07.1 Temel Ayarlar 5N1K Bileşen Çözümleme Tablosu {#5w1h}

| NE? (Bileşen Adı) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? |
| --- | --- | --- | --- | --- |
| Ayda max bayram nöbeti | Bayram günlerinde tutulabilecek azami nöbet sayısını sınırlamak. | Varsayılan 2'dir. Bir personelin ay içerisindeki dini ve resmi bayram nöbetlerini adil sınırlar. | Bayram dönemlerinde. | Sistem Yöneticisi |
| Ayda max hafta sonu nöbeti | Hafta sonu nöbet yükünün tek bir personele yığılmasını engellemek. | Varsayılan 4'tür. Personelin ayda en fazla kaç hafta sonu günü görev yapabileceğini belirler. | Aylık planlamada. | Klinik Sorumlusu |
| Maksimum fazla mesai süresi | Kurum içi aylık fazla mesaiyi adil sınırda tutmak; acil durumda yöneticiyle esnetmek. | Kurumsal temel tavan 60 saattir. Acil personel eksikliğinde yönetici onayıyla aşılabilir; ancak yasal tavan 130 saati geçemez. | Aylık kota hesabında. | Klinik Amiri Onaylı |
| Bayram nöbeti adalet önceliği | Geçmiş dönemlerde bayram nöbeti tutanları yeni bayramlarda korumak. | Önemsiz, Normal, Önemli veya Çok Önemli ağırlık çarpanı seçilir. Dağıtım motoru adalet havuzunu dengeler. | Nöbet dağıtımında. | Nöbet Dağıtım Motoru |
| Gece nöbeti dengeleme katsayısı | Gece nöbeti sayısını ekip üyeleri arasında eşit paylaştırmak. | Öncelik derecesine göre nöbet dağıtım motoru gece nöbetlerini personel arasında homojen dağıtmaya zorlanır. | Gece planlarında. | Nöbet Dağıtım Motoru |
| Muafiyet yaş sınırı | 50 yaşını aşmış personeli gece nöbeti yükünden korumak. | Öncelikli olarak gündüz nöbeti atanır. Ancak serviste boş slot veya eksik mesai kalması durumunda otomatik esnetilir. | Vardiya dağıtımında. | 50+ Yaş Personel |
| Muafiyet hizmet yılı | 25 hizmet yılını dolduran personeli ödüllendirmek ve korumak. | 25 yıl ve üzeri memuriyete sahip personele koruyucu öncelik uygulanır; zorunlu hallerde esnetilebilir. | Planlama esnasında. | 25+ Yıl Kıdemli Personel |
| Yaş/Kıdem Muafiyeti Gece Nöbetini Kapsasın | Muafiyetin doğrudan gece nöbetlerini hariç tutmasını sağlamak. | İşaretlendiğinde muafiyet eşiğine ulaşan personellere gece nöbeti yazılmaması öncelikli kural haline gelir. | Kural kaydında. | Yönetici |
| Devredilen nöbet değiştirilemez kısıtı | Devir işlemiyle kesinleşmiş nöbetlerin yeniden dağıtılmasını önlemek. | Onay kutusu işaretli olduğunda devredilmiş nöbetler dağıtım motoru tarafından kilitli kabul edilir. | Devir sonrasında. | Sistem Yöneticisi |
| Temel Ayarları Kaydet Butonu | Tüm bu parametreleri kalıcı olarak veritabanına işlemek. | Yeşil renktedir. Tıklandığında tüm limitler güncellenir ve nöbet dağıtım motorunun aktif yapılandırması olur. | Ayar değişiminde. | Yönetici |

## Temel Ayarlar Ekranı Arayüzü {#screenshot}

![Nöbet Temel Ayarlar Ekranı | Ekran: Nöbet Yönetimi > Nöbet Ayarları ve Kurallar > [Temel Ayarlar] | Temel Ayarlar Sekmesi](assets/img/nobet_temel.ui.png "<span><strong>Simülasyon Notu:</strong> Bu görseldeki eşik değerler kurum içi test ortamında yapılandırılmış simülasyon parametreleridir.</span>")

## Adım Adım Temel Parametre Yapılandırma {#step-by-step}

<div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <ol class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li>Sol ana menüden <strong>[Nöbet Yönetimi] > [Nöbet Ayarları ve Kurallar]</strong> ekranını açın.</li>
 <li>İlk sekme olan <strong>[Temel Ayarlar]</strong>'a tıklayın.</li>
 <li><strong>Maksimum Ardışık Nöbet Günü</strong> kutusuna en fazla <strong>2</strong> girin.</li>
 <li><strong>Nöbet Sonrası Dinlenme Süresi</strong> alanını hekim/teknisyen sağlığı için <strong>24 saat</strong> olarak belirleyin.</li>
 <li><strong>Gece Nöbeti Dinlenme Süresi</strong> alanına <strong>48 saat</strong> yazın.</li>
 <li><strong>Aylık Maksimum Fazla Mesai</strong> alanına temel tavan olan <strong>60</strong> değerini kaydedin.</li>
 <li><strong>Yaş Muafiyeti</strong> kutusuna <strong>50</strong>, <strong>Hizmet Yılı Muafiyeti</strong> kutusuna <strong>25</strong> yazın.</li>
 <li>Sağ altta yer alan yeşil <strong>[Temel Ayarları Kaydet]</strong> butonuna tıklayın. Değişiklikler anında veritabanına işlenir.</li>
 </ol>
 </div>

## Sıkça Sorulan Sorular (Temel Ayarlar) {#faq}

:::faq
### 60 saat fazla mesai sınırı acil durumlarda aşılabilir mi? ▾
Evet. 60 saat kurumsal bir temel tavandır; ancak salgın, grev veya acil personel eksikliğinde <strong>Yönetici Onayı ile aşılabilir</strong>. Aşılması mümkün olmayan mutlak tavan ise kanuni sınır olan 130 saattir.

### 50 yaşını geçen personele sistem neden gece nöbeti yazabiliyor? ▾
Çünkü 50 yaş kriteri mutlak bir kanuni yasaklama değil, <strong>kurum içi koruyucu öncelik politikasıdır</strong>. Algoritma önce gündüz nöbeti atar; ancak serviste açık nöbet slotu kalırsa veya personelin zorunlu mesaisi eksik kalırsa kısıt otomatik esnetilerek gece nöbeti atanabilir.
:::
