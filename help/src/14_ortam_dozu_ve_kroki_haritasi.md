---json
{
  "pageTitle": "14. Ortam Dozu Ölçümleri, Alan Sınıflandırması ve Kroki Haritası — RADPYS v4 Kullanım Kılavuzu",
  "h1": "14. Ortam Dozu ve Kroki Haritası",
  "lead": "Kurumun mimari kat planları (vektörel PDF veya yüksek çözünürlüklü görsel) üzerinde radyasyon izleme noktalarını ve sabit cihaz konumlarını canlı pinler halinde haritalandıran, periyodik saçılma dozu ölçümlerini kaydeden, yasal eşik kontrollerini otomatik denetleyen, limit aşımında anında DÖF başlatan ve kapı QR pasaport etiketleri üreten modüldür.",
  "overviewId": "genel-bakis",
  "badges": [
    {
      "text": "MODÜL 14",
      "tone": "cyan"
    },
    {
      "text": "SKS 6.1 Standartları",
      "tone": "emerald"
    },
    {
      "text": "NDK RSGD-KLV-005",
      "tone": "indigo"
    }
  ]
}
---

## Vizyonder Hızlı Karar Reçetesi (Ortam Dozu & RKS Özeti) {#hizli-recete}

:::recipe Vizyonder Hızlı Karar Reçetesi (Ortam Dozu & RKS Özeti) | 20 SANİYELİK AKIŞ
### 1. Kat Planını ve Pinleri Konumlandırın | cyan
Vektörel PDF veya yüksek çözünürlüklü krokiyi yükleyin. Denetimli ve gözetimli alan sınıflarına göre izleme noktalarını haritaya iğneleyin.

### 2. Kalibre Dedektörle Ölçüm Girin | emerald
Yalnızca kalibrasyonu geçerli survey meter ile ölçüm yapın (RED-02). Sistem girilen değeri alan eşiğiyle kıyaslayıp anında yeşil/sarı/kırmızı renklendirir.

### 3. Kapı QR ve Otomatik DÖF | blue
Radyasyon kapısına yapıştırılan QR kod ile mobilden ölçüm yapın. Limit aşımı tespit edildiğinde sistem ilgili birime anında otomatik DÖF başlatır.
:::

## Arayüz Bileşenleri ve 5N1K Tablosu {#bilesenler}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Ortam Dozu ve Kroki Haritası modülündeki ekran kontrolleri, butonlar ve harita eylemlerinin işlevsel kullanım matrisi:
 </p>
 </div>

| NE? (Bileşen) | NEDEN? (Amaç) | NEREDE? (Konum) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? | DURUM |
| --- | --- | --- | --- | --- | --- | --- |
| [Birim / Departman] | İncelenecek radyasyon alanını belirlemek. | Filtre Çubuğu Sol | Seçilen birimin kat krokisini, noktalarını ve cihazlarını yükler. | Ekran açıldığında / değişimde. | RKS / Birim Sorumlusu | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [Ölçüm Kaydet] | Periyodik doz ölçümünü sisteme girmek. | Ana Araç Çubuğu | Nokta, tarih, doz hızı, cihaz ve personeli kaydeder; kalibrasyon denetler. | Periyodik ölçümde. | RKS / Fizikçi / Tekniker | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [Yeni Nokta Ekle] | Krokide yeni doz izleme noktası açmak. | Ana Araç Çubuğu | Ardışık kod üretir (<code class="font-mono">{DEP}-OD-01</code>), alan sınıfı eşiklerini atar. | Yeni oda/mahal eklendiğinde. | RKS / Sistem Yöneticisi | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [Kroki Yükle / Değiştir] | Mimari kat planı dosyasını bağlamak. | Ana Araç Çubuğu | PDF/PNG dosyasını doğrudan veritabanında merkezi olarak saklar, hızlı erişim için yerel önbelleğe alır ve birimle eşleştirir. | Plan atama veya revizyonda. | RKS / Sistem Yöneticisi | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [Sola Döndür / Sağa Döndür] | Kat planı yönelimini 90° adımlarla sahaya göre hizalamak. | Kroki Tuvali Altı | Planı saat yönünde veya tersinde 90° döndürür; üzerindeki ölçüm pinleri, cihazlar ve oda sınırlarını otomatik trigonometrik olarak yeni açıya taşır. | Kroki yönü ters olduğunda. | RKS / Sistem Yöneticisi | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [Çoklu Oda Sınırları] | Kat planındaki tüm odaların sınırlarını belirlemek ve Web Portalda göstermek. | Kroki Tuvali Altı & Web Portal Haritası | Her oda için bağımsız sınır, etiket ve kod tanımlar; masaüstü ve Web Portal haritasında kesikli renkli sınırlarla eşzamanlı görüntüler. | Oda sınırları tanımlanırken veya izlenirken. | RKS / Sistem Yöneticisi | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [Karekod / Etiket Bas] & Toplu QR Paketi (.ZIP) | Kapı veya nokta QR etiketi üretmek ve tüm ölçüm noktalarını matbaa baskısı için toplu paketlemek. | Ana Araç Çubuğu & Tablo Sağ Tık Menüsü | Oda kapı pasaportu ve tekil nokta etiketi basabilir; araç çubuğundaki [Toplu QR Etiket Paketi] veya sağ tık menüsünden tüm noktalar için 300 DPI ultra net PNG etiketleri, teknik baskı şartnamesi (00_Baski_ve_Uretim_Rehberi.txt) ve icmal CSV listesi içeren endüstriyel .ZIP paketi ihraç eder. | Fiziksel levha asılırken veya toplu tabela/etiket üretiminde. | RKS / İSG Uzmanı / Medikal Fizikçi | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [SKS Raporu (Excel)] | SKS 6.1 resmi denetim çıktısı almak. | Ana Araç Çubuğu | Renk kodlu, kurum antetli resmi denetim Excel dosyasını (<code class="font-mono">.xlsx</code>) üretir. | Kalite denetimlerinde. | Kalite Birimi / RKS | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [Pinler Kilitli / Taşıma] | Pinlerin kazara kaymasını önlemek. | Kroki Tuvali Altı | Kilitliyken sürüklemeyi engeller; açıldığında koordinat taşımaya izin verir. | Pin yerleşimi yapılırken. | Yetkili Kullanıcı | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [Oda Alanını Belirle] | Krokide zırhlı oda sınırını çizmek. | Kroki Tuvali Altı | Çizim modunu açar; fareyle seçilen dikdörtgeni odanın sınırları yapar. | Birim sınırları çizilirken. | RKS / Sistem Yöneticisi | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Aktif</span> |
| [Nokta Silme Engeli] | Kalite denetim geçmişini korumak. | Servis Katmanı | Üzerinde kayıtlı ölçüm bulunan noktaların silinmesini kesinlikle engeller. | Silme talebinde. | Sistem Motoru | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">Emniyet Kilidi</span> |

## İnteraktif Kroki Tuvali ve Canlı Harita {#kroki-tuvali}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Radyasyon alanlarının canlı harita üzerinde yönetimi, çok katmanlı görselleştirme ve pürüzsüz gezinme özellikleri:
 </p>
 </div>

![Ortam Dozu ve İnteraktif Kroki Haritası Ana Ekranı](assets/img/14_1_ortam_dozu_kroki_haritasi_ana_ekran.png "Görsel 14.1: İnteraktif mimari kroki tuvali, zırhlı oda sınırları, canlı renkli ölçüm pinleri ve KPI göstergeleri.")

 <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
 <h4 class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
 <span class="w-2.5 h-2.5 rounded-full bg-cyan-500"></span> Pürüzsüz Yakınlaşma (Zoom)
 </h4>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Fare tekerleğini ileri çevirerek imlecin bulunduğu odaya yüksek çözünürlükte yakınlaşabilir, geri çevirerek tüm kat planına dönebilirsiniz.
 </p>
 </div>
 <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
 <h4 class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
 <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> Serbest Gezinme (Pan)
 </h4>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Sol fare tuşunu basılı tutup sürükleyerek (ScrollHandDrag) harita tuvalinde kaydırma çubuklarına gerek kalmadan akıcı şekilde dolaşabilirsiniz.
 </p>
 </div>
 <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
 <h4 class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
 <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Sabit Cihaz Pinleri
 </h4>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 BT, Skopi, X-Ray veya LINAC cihazları kendilerine ait SVG modalite simgeleriyle harita üzerinde sabitlenir; oda numarası ve künyesi gösterilir.
 </p>
 </div>
 </div>

## NDK Alan Sınıfları ve Yasal Doz Eşikleri {#alan-siniflari}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 NDK RSGD-KLV-005 kılavuzuna göre üç temel alan sınıfı ve otomatik alarm eşikleri:
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-900/50 shadow-sm space-y-3">
 <div class="flex items-center justify-between">
 <span class="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300">[D] DENETİMLİ ALAN</span>
 <span class="text-xs font-bold text-rose-600 dark:text-rose-400 font-mono">>6 mSv/yıl</span>
 </div>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 X-ışını tüpünün bulunduğu çekim odaları, zırhlı tedavi odaları ve sıcak laboratuvarlar.
 </p>
 <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-mono">
 <div class="flex justify-between"><span>Uyarı Eşiği:</span><strong class="text-amber-500">2.50 µSv/h</strong></div>
 <div class="flex justify-between"><span>Limit Eşiği:</span><strong class="text-rose-600">10.00 µSv/h</strong></div>
 </div>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-900/50 shadow-sm space-y-3">
 <div class="flex items-center justify-between">
 <span class="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">[G] GÖZETİMLİ ALAN</span>
 <span class="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">1-6 mSv/yıl</span>
 </div>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Denetimli alana bitişik teknisyen kumanda odası, kurşun cam arkası ve hazırlık mahalli.
 </p>
 <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-mono">
 <div class="flex justify-between"><span>Uyarı Eşiği:</span><strong class="text-amber-500">1.00 µSv/h</strong></div>
 <div class="flex justify-between"><span>Limit Eşiği:</span><strong class="text-rose-600">2.50 µSv/h</strong></div>
 </div>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-900/50 shadow-sm space-y-3">
 <div class="flex items-center justify-between">
 <span class="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">[H] HALKA AÇIK ALAN</span>
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">&lt;1 mSv/yıl</span>
 </div>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Hasta bekleme salonları, servis koridorları, hekim odaları ve meskenler.
 </p>
 <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-mono">
 <div class="flex justify-between"><span>Uyarı Eşiği:</span><strong class="text-amber-500">0.25 µSv/h</strong></div>
 <div class="flex justify-between"><span>Limit Eşiği:</span><strong class="text-rose-600">0.50 µSv/h</strong></div>
 </div>
 </div>
 </div>

## Doz Ölçümü Kaydetme ve Kalibrasyon Emniyeti (RED-02) {#doz-olcum}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Periyodik ölçüm giriş adımları ve kalibrasyon kontrolü emniyet mekanizması:
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
 <ol class="space-y-3 text-sm text-slate-600 dark:text-slate-300 list-decimal list-inside leading-relaxed">
 <li>Üst araç çubuğundaki <strong>[Ölçüm Kaydet]</strong> butonuna tıklayın veya harita üzerindeki ilgili ölçüm noktası pinine çift tıklayın.</li>
 <li>Açılan pencerede <strong>Ölçüm Noktası</strong>, <strong>Ölçüm Tarihi</strong>, ölçülen <strong>Doz Hızı (µSv/h)</strong> ve <strong>Doğal Arka Plan</strong> değerlerini girin.</li>
 <li>Kullanılan ölçüm aletinin marka, model ve seri numarasını yazın; ölçümü yapan personeli seçin.</li>
 <li><strong>Kalibrasyon Emniyet Kilidi (RED-02):</strong> Sistem, kullanılan cihazın veritabanında kayıtlı kalibrasyon süresini kontrol eder. Kalibrasyon süresi dolmuşsa sistem ölçüm kaydını emniyet kilidiyle reddeder:
 <div class="my-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-xs font-mono text-rose-800 dark:text-rose-300">
 HATA: Kullanılan ölçüm cihazının kalibrasyon geçerlilik süresi dolmuştur. NDK ve SKS kalite standartları gereğince kalibrasyonu geçmiş cihazla resmi ölçüm kaydedilemez.
 </div>
 </li>
 <li>Bilgiler eksiksiz ise <strong>[Ölçümü Kaydet]</strong> butonuna basarak işlemi tamamlayın.</li>
 </ol>
 </div>

## Limit Aşımı Alarmı ve Otomatik DÖF Entegrasyonu {#dof-olay}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Doz limitleri aşıldığında sistemin devreye soktuğu otomatik güvenlik ve kalite mekanizması:
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
 <h3 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
 <span class="w-3 h-3 rounded-full bg-rose-500"></span> Otomatik Olay Bildirimi
 </h3>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Ölçülen doz değeri ilgili noktanın limit eşiğini aştığı anda sistem arka planda <strong>Olay Bildirimi (Modül 15)</strong> modülüne otomatik kayıt oluşturur:
 </p>
 <ul class="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
 <li>Olay Tanımı: Nokta kodu, ölçülen doz ve yasal limit bilgisi.</li>
 <li>Olay Sonucu: "Orta Zarar" olarak derecelendirilir.</li>
 <li>Acil Müdahale: "Girişler sınırlandırıldı, zırhlama kontrolü başlatıldı."</li>
 <li>NDK Bildirim Bayrağı: Doz limitin 3 katını aşarsa zorunlu kılınır.</li>
 </ul>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
 <h3 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
 <span class="w-3 h-3 rounded-full bg-indigo-500"></span> Otomatik DÖF Ataması
 </h3>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Sistem yalnızca olay kaydı açmakla kalmaz; kalite yönetim süreci uyarınca sorumlu personele doğrudan düzeltici işlem görevi yükler:
 </p>
 <ul class="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
 <li>Faaliyet Tipi: "Düzeltici Önleyici Faaliyet (DÖF)"</li>
 <li>Açıklama: "Ortam dozu limit aşımı zırhlama ve sızıntı incelemesi"</li>
 <li>Sorumlu: Ölçümü yapan personel veya RKS sorumlusu</li>
 <li>DÖF Kapatma Kilidi: Sorun giderilip DÖF kapatılana dek olay açık kalır.</li>
 </ul>
 </div>
 </div>

## Karekod (QR) Pasaport Etiketi ve SKS Excel Raporu {#qr-sks}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Fiziksel kapı/nokta levhalandırması ve Sağlık Bakanlığı kalite denetim çıktısı:
 </p>
 </div>

![Ortam Dozu QR Pasaport Etiketi](assets/img/14_2_ortam_dozu_qr_pasaport_etiketi_dialog.png "Görsel 14.2: Radyasyon alanı ve ölçüm noktası termal QR pasaport etiketi penceresi.")

 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
 <h3 class="font-bold text-slate-900 dark:text-white text-base">Oda Kapı QR Pasaportu</h3>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Üstteki <strong>[Karekod / Etiket Bas]</strong> butonuna tıklayıp <em>Oda Kapı Karekod Etiketi Bas</em> seçeneğini belirleyin. Çıktı alınan etiket radyasyon odasının giriş kapısına yapıştırılır. Termal etiket yazıcıdan anında yazdırılabilir veya PNG olarak dışa aktarılabilir.
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
 <h3 class="font-bold text-slate-900 dark:text-white text-base">SKS 6.1 Resmi Excel Denetim Raporu</h3>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 <strong>[SKS Raporu (Excel)]</strong> butonuna basıldığında sistem; kurum antetini, birim adını, ölçüm noktası kodlarını, alan sınıflarını, ölçüm tarihlerini, ölçülen dozları ve eşikleri içeren, limit aşımını kırmızı, uyarıları sarı renkle vurgulayan resmi Excel raporunu (<code class="font-mono">.xlsx</code>) üretir.
 </p>
 </div>
 </div>

## Hibrit Saha Tablet Akışı ve Web Portalı {#hibrit-portal}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Masaüstü yönetim kokpiti ile mobil saha uygulamasının çift yönlü senkronizasyonu:
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div class="space-y-2">
 <h4 class="font-bold text-slate-900 dark:text-white text-sm text-cyan-600 dark:text-cyan-400">1. Masaüstü Yönetim Merkezi (PySide6)</h4>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Kat planı PDF dosyalarının yüklendiği, oda sınırlarının çizildiği, sabit cihazların konumlandırıldığı, yasal eşik limitlerinin belirlendiği, pin kilitlerinin açılıp kapandığı ve resmi denetim Excel raporlarının alındığı ana merkezdir.
 </p>
 </div>
 <div class="space-y-2">
 <h4 class="font-bold text-slate-900 dark:text-white text-sm text-indigo-600 dark:text-indigo-400">2. Saha Mobil Portalı (Tablet / Telefon)</h4>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Saha teknisyeni kapıdaki QR kodu tablet kamerasıyla okutur; ekranda odaya ait zırhlı kroki ve ölçüm noktaları listelenir. Teknisyen cihazdan okuduğu dozu doğrudan sahada girer; veri anında masaüstü sistemine ve web analitik paneline yansır.
 </p>
 </div>
 </div>
 </div>

## Karar Akış Şeması {#akis-diyagrami}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Ortam dozu ölçümü, eşik denetimi ve otomatik olay sürecinin mantıksal işleyiş şeması:
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">

```mermaid
flowchart TD
 A["Kat Planı / Kroki Yükleme (PDF / Görsel)"] --> B["Oda Sınırlarını Belirleme ve Cihaz Sabitleme"]
 B --> C["Ölçüm Noktaları Tanımlama (NDK Alan Sınıfları)"]
 C --> D["Oda Kapı QR Pasaport Etiketi Basımı"]
 D --> E["Mobil / Masaüstü Periyodik Doz Ölçümü Girişi"]
 E --> F{"Cihaz Kalibrasyonu Geçerli mi?"}
 F -- "Hayır" --> G["Ölçüm Reddedilir (Kalibrasyon Uyarısı)"]
 F -- "Evet" --> H{"Doz Eşik Kontrolü"}
 H -- "Doz <= Uyarı Eşiği" --> I["Normal (Yeşil Pin)"]
 H -- "Uyarı < Doz <= Limit" --> J["Uyarı (Sarı Pin)"]
 H -- "Doz > Limit Eşiği" --> K["Limit Aşımı (Kırmızı Pin)"]
 K --> L["Otomatik Olay Bildirimi ve DÖF Başlatma"]
 I --> M["SKS 6.1 Resmi Excel Denetim Raporu"]
 J --> M
 L --> M
```

 </div>

## Ortam Güvenliği & Mit Avcısı (Kritik Kurallar) {#mit-avcilari}

<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
 <div class="rounded-2xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-50/50 via-white to-slate-50 dark:from-red-950/20 dark:via-slate-900 dark:to-slate-900 p-5 shadow-sm">
 <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
 </svg>
 <span>Yaygın Yanılgı (Mit 1)</span>
 </div>
 <p class="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-3 italic">
 "Kalibrasyon geçerlilik süresi 1-2 hafta geçmiş radyasyon ölçüm cihazı ile acil durumlarda resmi ortam dozu kaydı yapılabilir."
 </p>
 <div class="border-t border-red-200/60 dark:border-red-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 NDK mevzuatı ve RED-02 güvenlik kilidi gereğince kalibrasyon süresi dolmuş hiçbir cihazla sisteme resmi ölçüm girilemez; sistem ölçüm kaydını kesin olarak engeller.
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
 "Kapıdaki QR kod sadece personelin bilgi alması içindir; ölçüm girmek için masaüstü yazılımı zorunludur."
 </p>
 <div class="border-t border-amber-200/60 dark:border-amber-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Oda kapısındaki QR kod doğrudan mobil tarayıcıda hızlı doz giriş arayüzünü açar. RKS veya tekniker masaüstüne dönmeden sahada cep telefonuyla ölçümü anında tamamlar.
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
 "Ölçüm geçmişi olan bir radyasyon izleme noktası kroki planı değiştiğinde kolayca silinebilir."
 </p>
 <div class="border-t border-blue-200/60 dark:border-blue-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 SKS 6.1 ve denetim izi gereğince üzerinde geçmiş ölçüm verisi bulunan hiçbir nokta silinemez; yalnızca 'Pasif'e alınabilir veya taşınabilir.
 </p>
 </div>
 </div>
 </div>

## Sıkça Sorulan Sorular (SSS) {#sss}

:::faq
### Mimari kat planı olarak vektörel PDF dosyası yükleyebilir miyim?
<strong>Evet.</strong> RADPYS v4 mimarisi PNG, JPG ve BMP resimlerinin yanı sıra vektörel mimari <code class="font-mono">.pdf</code> kat planlarını doğrudan destekler. Yüklenen PDF dosyasının ilk sayfası yüksek çözünürlükte render edilerek grafik tuvaline aktarılır.

### Haritadaki pinlerin fareyle gezinirken kazara kayması nasıl önlenir?
Varsayılan olarak harita <strong>[Pinler Kilitli]</strong> modunda açılır. Bu moddayken pinler sabitlenmiştir; fareyle sürüklenseniz dahi koordinatları değişmez. Konumları değiştirmek için butona basarak <strong>[Taşıma Aktif]</strong> moduna geçmeniz gerekir.

### Ölçüm geçmişi olan bir noktayı yanlışlıkla silmek mümkün müdür?
<strong>Hayır.</strong> SKS 6.1 ve NDK kalite denetim izlerinin korunması amacıyla, üzerinde en az bir adet kayıtlı doz ölçümü bulunan noktaların silinmesi sistem tarafından emniyet kilidiyle engellenir.

### Cihaz kalibrasyon süresi dolduğunda ne yapılmalıdır?
Kalibrasyon geçerlilik süresi dolmuş bir survey meter ile ölçüm girilemez (RED-02). Cihaz yetkili kalibrasyon merkezine (örn: TENMAK SSDL) gönderilmeli ve kalibrasyon tamamlandığında cihaz kartındaki tarih güncellenmelidir.

### Ortam dozu ölçüm noktalarının QR etiketlerini tabela veya matbaa üretimi için topluca nasıl alabilirim?
Üst araç çubuğundaki <strong>[Toplu QR Etiket Paketi]</strong> butonuna tıklayın veya ölçüm noktaları tablosunda sağ tıklayarak <em>"Toplu QR Etiket Paketi (.ZIP)"</em> seçeneğini çalıştırın. Sistem odadaki tüm ölçüm noktaları için <strong>300 DPI (800x1050 px)</strong> matbaa kalitesinde PNG etiketler, profesyonel tabela üreticisine iletilebilecek malzeme şartnamesi (<strong>00_Baski_ve_Uretim_Rehberi.txt</strong>) ve koordinat/oda bilgilerini içeren <strong>00_Etiket_Listesi_Icmal.csv</strong> dosyasını tek bir <strong>.ZIP</strong> arşivi olarak üretir.
:::
