---json
{
  "pageTitle": "15. Radyasyon Olay Bildirimi ve DÖF / CAPA (Kök Neden Analizi) — RADPYS v4 Kullanım Kılavuzu",
  "h1": "15. Olay Bildirimi ve DÖF (CAPA)",
  "lead": "Radyasyon alanlarında meydana gelen kazaları, ramak kala olayları ve uygunsuzlukları SKS 6.1 uyumlu 3 adımlı sihirbazla kayıt altına alan, ana listeden doğrudan veya bağımsız Düzeltici Önleyici Faaliyet (DÖF) başlatan, 72 saatlik NDK yasal bildirim geri sayımını yürüten, 4 adımlı doğal inceleme akışıyla sorumlu atayan, açık aksiyonlar tamamlanmadan olayın kapatılmasını engelleyen ve resmi tek sayfalık SKS/NDK tutanağı üreten kurumsal kalite modülüdür.",
  "overviewId": "genel-bakis",
  "badges": [
    {
      "text": "MODÜL 15",
      "tone": "cyan"
    },
    {
      "text": "Sağlık Bakanlığı SKS 6.1",
      "tone": "emerald"
    },
    {
      "text": "NDK RSGD-KLV-005",
      "tone": "indigo"
    }
  ]
}
---

## Vizyonder Hızlı Karar Reçetesi (Olay & DÖF Özeti) {#hizli-recete}

<div class="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/10 via-slate-900/5 to-blue-900/10 dark:from-cyan-950/40 dark:via-slate-900/40 dark:to-blue-950/40 border border-cyan-200 dark:border-cyan-800/50 shadow-sm">
 <div class="flex items-center gap-3 mb-4">
 <div class="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold text-sm">
 20s
 </div>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs sm:text-sm">
 <div class="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
 <span class="font-bold text-cyan-600 dark:text-cyan-400 block mb-1">1. Olay Bildirimi veya Hızlı DÖF</span>
 SKS 6.1 sihirbazıyla kaza/ramak kala kaydı açın veya ana listedeki <strong>[Yeni DÖF Ekle]</strong> butonuyla olaya bağlı veya bağımsız genel kalite faaliyeti başlatın.
 </div>
 <div class="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
 <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">2. 72s NDK & Sorumlu Atama</span>
 Yasal bildirim süresini (24s / 72s) izleyin. 2. Adımda sorumlu uzmanı zengin listeden seçin; sonraki adıma geçildiğinde sistem atamayı otomatik kaydeder.
 </div>
 <div class="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
 <span class="font-bold text-blue-600 dark:text-blue-400 block mb-1">3. DÖF & Açık Emniyet Kilidi</span>
 Gerekli düzeltici faaliyetleri yürütün. Tamamlanmamış açık DÖF varken sistem olayın kapatılmasını güvenle kilitler (CAPA Lock).
 </div>
 <div class="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
 <span class="font-bold text-purple-600 dark:text-purple-400 block mb-1">4. Kapatma & Resmi Tutanak</span>
 Tüm DÖF'ler bitince nihai karar notu girip <strong>[Olayı Kapat ve Tamamla]</strong> ile dosyayı mühürleyin; <strong>[Resmi Tutanağı Yazdır / PDF]</strong> ile tek tıkla resmi belge alın.
 </div>
 </div>
 </div>

## 7 DÖF (CAPA) Faaliyetleri: Olaya Bağlı ve Bağımsız Kalite Yönetimi {#dof-yonetimi}

<div class="prose prose-slate dark:prose-invert max-w-none text-sm space-y-3">
 <p>
 Düzeltici ve Önleyici Faaliyetler (DÖF), hem inceleme sihirbazının 3. Adımından hem de ana listenin araç çubuğundaki <strong>[Yeni DÖF Ekle]</strong> butonundan başlatılabilir:
 </p>
 <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
 <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
 <span class="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono">BAĞIMSIZ VEYA OLAYA BAĞLI FAALİYET</span>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 DÖF penceresinde yer alan <strong>"İlişkili Olay Bildirimi"</strong> açılır kutusu sayesinde faaliyet açık bir olaya bağlanabilir veya <em>(Bağımsız / Genel Kalite Faaliyeti — Olay Bildirimi Yok)</em> seçeneğiyle kurum genelindeki önleyici iyileştirmeler için serbestçe işletilebilir.
 </p>
 </div>
 <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">ZENGİN PERSONEL VE ŞEFFAF TAKİP</span>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Görevlendirilecek personel unvan ve birim bilgisiyle seçilir, faaliyet tipi (<code class="font-mono">Düzeltici</code>, <code class="font-mono">Önleyici</code>, <code class="font-mono">İyileştirici</code>) ve termin tarihi atanır. DÖF takip tablosuna eklenen "İlişkili Olay" sütunuyla tüm aksiyonlar şeffafça izlenir.
 </p>
 </div>
 </div>
 </div>

## 8 Açık DÖF Kapatma Emniyet Kilidi ve Zorunlu Kapanış Notu {#kapatma-kilidi}

<div class="prose prose-slate dark:prose-invert max-w-none text-sm space-y-3">
 <p>
 SKS 6.1 ve kalite denetim standartları gereğince uygunsuzluklar önlemleri tamamlanmadan kağıt üzerinde kapatılamaz:
 </p>
 <div class="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 space-y-2">
 <h4 class="font-bold text-rose-900 dark:text-rose-200 text-sm flex items-center gap-2">
 <svg class="w-4 h-4 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
 <span>Açık DÖF Emniyet Kilidi (CAPA Closure Guard)</span>
 </h4>
 <p class="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
 İnceleme sihirbazının 4. Adımı açıldığında sistem bağlı DÖF faaliyetlerini sorgular. Eğer tamamlanmamış en az 1 DÖF varsa kapatma butonu kilitlenir ve kullanıcı DÖF sekmesine yönlendirilir. Tüm DÖF faaliyetleri başarıyla sonuçlandırıldığında ekran yeşil onay verir; zorunlu nihai kalite ve kapanış notu girilerek <strong>[Olayı Kapat ve Tamamla]</strong> butonuyla olay güvenle resmi "Kapalı" statüsüne alınır. Kapanış tarihi ana listeye anında yansıtılır.
 </p>
 </div>
 </div>

## 9 Cihaz Arıza & Kurum İçi İstatistik Takibi {#cihaz-surec}

<div class="prose prose-slate dark:prose-invert max-w-none text-sm space-y-3">
 <p>
 Olay bildirimi tıbbi bir cihazın teknik arızasından kaynaklanmışsa (<code class="font-mono">ilgili_cihaz_id</code>):
 </p>
 <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
 <li><strong>Süreç ve İstatistik Amacı:</strong> Sistem olay üzerinden teknik arıza izleme kaydı oluşturur. Bu kayıt, harici bir teknik servise veya bakım firmasına resmi çağrı göndermez; kurum içinde Radyasyon Güvenliği Komitesinin arıza-kaza korelasyonunu ve birim istatistiklerini takip etmesi içindir.</li>
 <li><strong>DÖF Referansı:</strong> Olay DÖF tablosuna otomatik olarak <em class="font-semibold">"Cihaz arıza kaydı açıldı (#Arıza ID)"</em> referansı eklenerek şeffaf takip sağlanır.</li>
 </ul>
 </div>

## 10 Resmi SKS / NDK Olay ve DÖF Tutanağı (Kurumsal Antetli PDF) {#resmi-tutanak}

<div class="prose prose-slate dark:prose-invert max-w-none text-sm space-y-3">
 <p>
 Herhangi bir olayın resmi kalite dosyasını üretmek veya inceleme tamamlandığında resmi tutanak almak için <strong>[Resmi Tutanağı Yazdır / PDF]</strong> butonuna tıklayın:
 </p>
 <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
 <li><strong>SKS 6.1 ve NDK Uyumlu Kurumsal Antet:</strong> Formun en üstünde kurum logosu, kurum adı, kalite birimi başlığı ve resmi doküman takip kartı (Doküman No, Revizyon Tarihi ve Sayfa No) yer alır.</li>
 <li><strong>Renkli Klinik Rozetler ve NDK Uyarı Şeridi:</strong> Olayın sonucu (Ramak Kala, Hafif/Ciddi Zarar) ve yasal NDK 72 saatlik bildirim durumu resmi denetimlerde ilk bakışta fark edilebilecek şık rozetlerle vurgulanır.</li>
 <li><strong>Tek Sayfaya Tam Oturan Düzen:</strong> Tüm olay künyesi, acil müdahale, DÖF planı ve yetkili imza kutuları (Bildiren, İnceleyen Uzman ve RKS/RSO) sayfa taşması ve imza parçalanması olmadan tek bir A4 sayfasına estetik ve eksiksiz olarak sığdırılmıştır.</li>
 <li><strong>Doğru İşe Tek Format Standardı:</strong> Resmi evrak niteliği taşıdığı için doğrudan antetli, mühürlü ve değiştirilemez <strong>PDF</strong> formatında üretilir.</li>
 </ul>
 </div>

## 11 Hibrit Saha Mobil Formu ve Web Portalı {#hibrit-portal}

<div class="prose prose-slate dark:prose-invert max-w-none text-sm space-y-3">
 <p>
 RADPYS Olay Bildirimi ve DÖF modülü, masaüstü kurumsal yönetim ile saha mobil web portalının tam entegrasyonuyla çalışır:
 </p>
 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
 <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
 <span class="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono">SAHA MOBİL FORMU (IncidentReportForm)</span>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Klinikteki teknisyen, hemşire veya fizikçi cep telefonu veya tabletinden 3 adımlı formu açarak kazayı veya ramak kala durumunu anında bildirir. Kayıt sunucuya iletildiği anda yönetici ekranında bildirim düşer.
 </p>
 </div>
 <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
 <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">WEB ANALİTİK DASHBOARD (OlayBildirimiDashboard)</span>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Kalite direktörleri ve hastane yönetimi web portalı üzerinden toplam olay, bekleyen DÖF'ler, çözülen vakalar, NDK bekleyenler sayaçlarını ve aylık olay trend çizgi grafiklerini canlı takip eder.
 </p>
 </div>
 </div>
 </div>

## Ekran Konumları ve Görsel Rehber {#ekran-goruntuleri}

![Olay Bildirimi ve DÖF Yönetimi Ana Ekranı | Radyasyon Güvenliği > Olay Bildirimi ve DÖF (CAPA) Yönetimi | Ana Yönetim Kokpiti & NDK Süre Sayacı](assets/img/15_1_olay_bildirim_ve_dof_yonetimi_ana_ekran.png "<span><strong>Simülasyon Notu:</strong> Kurum içi SKS 6.1 ve NDK radyolojik olay bildirimlerinin, açık DÖF sayaçlarının ve yasal bildirim sürelerinin izlendiği ana ekran.</span>")

![Olay İnceleme ve DÖF Sihirbazı 1. Adım | Olay Bildirimi ve DÖF > [İncele / DÖF Yönet] > 1. Adım | Adım 1: Olay Künyesi & Sınıflandırma](assets/img/15_2_1_olay_inceleme_ve_dof_dialog.png "<span><strong>Simülasyon Notu:</strong> Olayın şiddeti, kategorisi, kök neden analizi ve NDK bildirim gereksiniminin belirlendiği birinci adım.</span>")
![Olay İnceleme ve DÖF Sihirbazı 2. Adım | Olay Bildirimi ve DÖF > [İncele / DÖF Yönet] > 2. Adım | Adım 2: DÖF (CAPA) Faaliyet Planlama](assets/img/15_2_2_olay_inceleme_ve_dof_dialog.png "<span><strong>Simülasyon Notu:</strong> Düzeltici, önleyici ve iyileştirici faaliyetlerin (CAPA) sorumlu personel ve termin tarihiyle tanımlanması.</span>")
![Olay İnceleme ve DÖF Sihirbazı 3. Adım | Olay Bildirimi ve DÖF > [İncele / DÖF Yönet] > 3. Adım | Adım 3: CAPA Kapatma Kilidi & Resmi Tutanak](assets/img/15_2_3_olay_inceleme_ve_dof_dialog.png "<span><strong>Simülasyon Notu:</strong> Açık DÖF emniyet kilidi kontrolü, zorunlu kapanış notu ve SKS/NDK antetli resmi PDF tutanak üretimi.</span>")

## 12 Karar ve İş Akış Şeması (Mermaid) {#akis-diyagrami}

<p class="text-sm text-slate-600 dark:text-slate-300">
 Olay bildiriminin açılışından NDK yasal süre takibine, DÖF atamasından açık DÖF kapatma kilidine kadar olan operasyonel yaşam döngüsü:
 </p>
 <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">

```mermaid
flowchart TD
 A["Olay Bildirimi Başlatma (Masaüstü / Saha Web)"] --> B["1. Adım: Temel Bilgiler (Tarih, Birim, Şiddet, Anonim/Seçimli)"]
 B --> C["2. Adım: Sınıflandırma (Kategori, Detaylar, Kök Nedenler)"]
 C --> D["3. Adım: Açıklamalar (Olay Tanımı, Acil Müdahale, DÖF Önerisi)"]
 D --> E["Bildirim Kaydı (OB-YYYY-XXXXX) & Yöneticiye Bildirim"]
 E --> F{"Radyolojik Olay mı / NDK Bildirimi Gerekli mi?"}
 F -- "Evet" --> G["NDK Yasal Süreç Takibi (1 Gün / 3 İş Günü Geri Sayım)"]
 F -- "Hayır" --> H["Kurum İçi SKS Takibi"]
 G --> I["İncelemeye Alma & Sorumlu Atama (Birim Sorumlusu / RGS)"]
 H --> I
 I --> J["DÖF (CAPA) Faaliyetleri Planlama (Düzeltici/Önleyici/İyileştirici)"]
 J --> K{"İlişkili Cihaz Var mı?"}
 K -- "Evet" --> L["Kurum İçi Cihaz Süreç / Arıza Kaydı ve İstatistik Takibi"]
 K -- "Hayır" --> M["DÖF Aksiyonlarının Yürütülmesi"]
 L --> M
 M --> N["DÖF Tamamlama / İptal"]
 N --> O{"Tüm DÖF'ler Tamamlandı mı?"}
 O -- "Hayır (Açık DÖF Var)" --> P["Kapatma Engellenir (Kapatma Kilidi Uyarısı)"]
 P --> M
 O -- "Evet" --> Q["Kapanış Notu Girişi & Olayı Kapatma"]
 Q --> R["Resmi SKS / NDK Tutanağı Yazdırma & Arşivleme"]
```

 </div>

## Olay Bildirimi, DÖF & Mit Avcısı (Kritik Kurallar) {#mit-avcilari}

<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
 <div class="rounded-2xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-50/50 via-white to-slate-50 dark:from-red-950/20 dark:via-slate-900 dark:to-slate-900 p-5 shadow-sm">
 <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
 </svg>
 <span>Yaygın Yanılgı (Mit 1)</span>
 </div>
 <p class="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-3 italic">
 "Açık bir DÖF faaliyeti varken de olayın dosyası acilen 'Kapatıldı' statüsüne geçirilebilir."
 </p>
 <div class="border-t border-red-200/60 dark:border-red-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 CAPA Lock emniyet kilidi gereğince üzerinde tamamlanmamış açık DÖF aksiyonu bulunan hiçbir olay kapatılamaz. Faaliyetlerin resmi olarak tamamlanması veya gerekçeli iptali zorunludur.
 </p>
 </div>
 </div>
 <div class="rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-900 p-5 shadow-sm">
 <div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
 </svg>
 <span>Yaygın Yanılgı (Mit 2)</span>
 </div>
 <p class="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-3 italic">
 "Personelin ismini gizleyerek yaptığı anonim ramak kala bildirimleri SKS denetimlerinde geçersizdir."
 </p>
 <div class="border-t border-amber-200/60 dark:border-amber-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Sağlık Bakanlığı SKS 6.1 ve güvenlik kültürü ilkeleri gereğince anonim bildirimler resmi ve yasal olarak geçerlidir; aynı ciddiyetle incelenip düzeltici işlem başlatılır.
 </p>
 </div>
 </div>
 <div class="rounded-2xl border border-blue-200 dark:border-blue-900/40 bg-gradient-to-br from-blue-50/50 via-white to-slate-50 dark:from-blue-950/20 dark:via-slate-900 dark:to-slate-900 p-5 shadow-sm">
 <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 <span>Yaygın Yanılgı (Mit 3)</span>
 </div>
 <p class="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-3 italic">
 "Olay formunda cihaz arızası kaydedildiğinde sistem yetkili teknik servise otomatik iş emri açar."
 </p>
 <div class="border-t border-blue-200/60 dark:border-blue-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Bu kayıt kurum içinde olay-arıza korelasyonunu takip etmek içindir; harici servise çağrı göndermez. Cihaz bakım ve servis yönetimi Modül 19 üzerinden yürütülür.
 </p>
 </div>
 </div>
 </div>

## 13 Sıkça Sorulan Sorular (SSS) {#sss}

:::faq
### Anonim yapılan bildirimler resmi SKS denetimlerinde geçerli sayılır mı?
<strong>Evet.</strong> Sağlık Bakanlığı SKS 6.1 ve kurum kalite politikaları uyarınca güvenli bildirim kültürünü teşvik etmek amacıyla personelin kimliğini gizleyerek yaptığı bildirimler resmi olarak geçerlidir ve aynı titizlikle incelenip DÖF açılır.

### Açık DÖF varken bir olayı acilen kapatmam gerekirse ne yapmalıyım?
Sistem açık DÖF varken olayın kapatılmasını emniyet kilidiyle kesinlikle engeller. Eğer bir faaliyet artık uygulanamaz durumdaysa veya mükerrer açılmışsa, faaliyet durumu gerekçesi belirtilerek <code class="font-mono">İptal</code> veya <code class="font-mono">Tamamlandı</code> yapılmalı, ardından kapanış notu girilerek olay kapatılmalıdır.

### Olaydan oluşturulan cihaz arıza kaydı teknik servise otomatik iş emri gönderir mi?
<strong>Hayır.</strong> Bu kayıt program içinde yalnızca süreci takip etmek, olay-arıza korelasyonunu izlemek ve birim hakkında istatistiki bilgi derlemek amaçlıdır; harici teknik servise veya bakım birimine resmi çağrı/iş emri göndermez.

### NDK bildirim süresi ne zaman başlar ve hafta sonları hesaba katılır mı?
Yasal süre olay tarihinden itibaren başlar. Acil kazalarda 1 iş günü (24 saat), diğer radyolojik uygunsuzluklarda 3 iş günüdür. Hesaplamada Cumartesi ve Pazar günleri ile resmi tatiller süreye dahil edilmez (<code class="font-mono">_add_business_days</code>).
:::
