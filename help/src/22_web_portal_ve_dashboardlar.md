---json
{
  "pageTitle": "22. Web Portalı, Mobil Nöbet Takibi ve Yönetici Dashboardları — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
  "lead": "Tüm radyoloji ve radyasyon güvenliği operasyonunu (dozimetre kritik aşımları, aktif nöbetler, açık arızalar, DIN 6857-1 KKD muayeneleri, SKS denetim hazırlığı ve yasal kurumsal uyumu) tek merkezde toplayan, masaüstü durum çubuğundan 8 saniyede bir sağlık denetimi yapılan ve 60 saniyelik bellek içi önbellekle (In-Memory Cache) çalışan kurumsal karar destek merkezidir.",
  "overviewId": "overview",
  "badges": [],
  "readingTime": "5 Dakika",
  "legalNote": "<strong>Yasal Güvence:</strong> Canlı PostgreSQL veritabanı üzerinden beslenen panel, denetim müfettişlerine anlık tarafsız metrik sunar; sahte veya sentetik kayıt barındırmaz."
}
---

## Kısa Reçete (20 Saniye Kuralı) {#quick-recipe}

<div
 class="p-6 sm:p-7 rounded-3xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200/90 dark:border-cyan-800/60 shadow-md">
 <div class="flex items-center justify-between mb-3">
 <div class="flex items-center gap-2.5 text-cyan-900 dark:text-cyan-200 font-bold text-sm sm:text-base">
 <svg class="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
 </svg>
 <span>Hızlı Reçete: Masaüstünden Web Gösterge Paneline Erişim</span>
 </div>
 <span
 class="text-xs font-mono px-2.5 py-1 rounded bg-cyan-200/80 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300 font-bold">20 SANİYELİK AKIŞ</span>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 text-xs sm:text-sm">
 <div
 class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
 <span class="font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider text-[11px]">1. İstenen Sonuç</span>
 <p class="text-slate-700 dark:text-slate-200 font-medium">
 Tüm hastane radyoloji birimlerinin anlık nöbet doluluğunu, dozimetre kritik aşım alarmlarını, bekleyen DÖF ve arıza durumlarını tek ekranda incelemek.
 </p>
 </div>
 <div
 class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
 <span class="font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider text-[11px]">2. Yapılacak İşlem</span>
 <p class="text-slate-700 dark:text-slate-200 font-medium">
 Masaüstü ana ekranında sol üstteki <strong>[Genel Bakış]</strong> butonuna tıklayın (veya <strong>[Ctrl+K]</strong> ile arayın). Sunucu kapalıysa durum çubuğundaki <strong>[Portal Sunucu: Kapalı]</strong> butonuna basarak tek tıkla çalıştırın.
 </p>
 </div>
 <div
 class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
 <span class="font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider text-[11px]">3. Sistem Etkisi & Güvence</span>
 <p class="text-slate-700 dark:text-slate-200 font-medium">
 Sistem varsayılan tarayıcınızda <strong>http://localhost:3000/dashboard/genel</strong> sayfasını açar. 60 saniyelik bellek içi önbellek sayesinde veritabanı kilitlenmez, ağır sorgular saniyeler içinde yüklenir.
 </p>
 </div>
 </div>
 <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-cyan-200/60 dark:border-cyan-800/40">
 <div
 class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
 <span class="text-xs text-slate-400 block uppercase font-bold tracking-wider mb-1">Önbellek (Cache)</span>
 <span class="text-sm sm:text-base font-black text-cyan-600 font-mono">60 Saniye TTL</span>
 </div>
 <div
 class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
 <span class="text-xs text-slate-400 block uppercase font-bold tracking-wider mb-1">Yetkili Rol</span>
 <span class="text-sm sm:text-base font-black text-slate-700 dark:text-slate-200">Yönetici / RGU / Sorumlu</span>
 </div>
 <div
 class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
 <span class="text-xs text-slate-400 block uppercase font-bold tracking-wider mb-1">Canlılık Denetimi</span>
 <span class="text-sm sm:text-base font-black text-emerald-600 font-mono">8 Saniye Döngü</span>
 </div>
 <div
 class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
 <span class="text-xs text-slate-400 block uppercase font-bold tracking-wider mb-1">Platform Desteği</span>
 <span class="text-sm sm:text-base font-black text-blue-600"> Masaüstü + Web / Tablet</span>
 </div>
 </div>
 </div>

## Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı) {#myth-buster}

:::myth Kritik Sahada Yanlış Bilinen Kural (Mit Avcısı)
### Yanlış Algı:
<em>"Web Portal sadece teknikerlerin nöbet çizelgesini gördüğü pasif bir ekrandır; idari karar, dozimetre analizi veya resmi denetim hazırlığı buradan yürütülemez."</em>

### Gerçek Sistem Mantığı:
Web Portal, sistemdeki <strong>20 farklı gösterge panelini</strong> tek merkezde toplayan tam yetkili karar destek platformudur. Sağlık Bakanlığı SKS 6.1 denetim hazırlığı, 20 mSv yıllık doz projeksiyonu, arıza duruş süreleri ve DIN 6857-1 koruyucu ekipman muayeneleri bu ekranlardan anlık izlenir, Excel ve PDF olarak dışa aktarılır.
:::

## 5N1K Kural ve Ayar Çözümleme Tablosu {#matrix-5n1k}

<div class="flex items-center justify-between mb-4">
 <div>
 <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
 Masaüstü entegrasyonu, web gösterge panelleri ve operasyonel alarm eşiklerinin kuralları.
 </p>
 </div>
 </div>
 <div
 class="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm bg-white dark:bg-slate-900">

| NE? (Ekran Kontrolü) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? (Tetiklenme Anı) | KİM? (Yetkili Rol) |
| --- | --- | --- | --- | --- |
| Genel Bakış Butonu<br> <span class="text-xs font-normal text-slate-400 font-mono">[Sol Kenar Çubuğu En Üst Buton]</span> | Yöneticinin tüm hastane radyoloji birimlerini tek ekranda görmesini sağlamak. | Sunucu aktifse varsayılan tarayıcıda Genel Bakış'ı açar; kapalıysa başlatıcıyı arka planda tetikler. | Kullanıcı butona bastığında veya Ctrl+K ile seçtiğinde. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Tüm Yöneticiler</span> |
| Portal Sunucu Durum Butonu<br> <span class="text-xs font-normal text-slate-400 font-mono">[Durum Çubuğu / Status Bar Butonu]</span> | Web Portal sunucusunun Port 3000'de canlı olup olmadığını izlemek ve gerekirse başlatmak. | 8 saniyede bir otomatik denetlenir. 200 dönerse yeşil 'Aktif', aksi halde gri 'Kapalı' olur. Tıklandığında başlatıcıyı tetikler. | Açılışta ve her 8 saniyede bir periyodik. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Sistem Yöneticisi (Admin)</span> |
| 60 Saniye Önbellek & Zorla Yenile<br> <span class="text-xs font-normal text-slate-400 font-mono">[Bellek İçi Cache ve Yenile Butonu]</span> | Ağır istatistik ve analitik sorgularının PostgreSQL veritabanını kilitlemesini önlemek. | 60 saniye boyunca sorgu sonuçları RAM'den sunulur. Filtre değiştiğinde veya zorla yenilendiğinde veritabanından taze veri çekilir. | Web paneli sayfaları arasında gezinirken. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Otomatik Sistem</span> |
| Dozimetre Uyarı & Kritik Aşım Alarmı<br> <span class="text-xs font-normal text-slate-400 font-mono">[≥2 mSv ve ≥5 mSv Doz Rozetleri]</span> | Yıllık 20 mSv mevzuat sınırına yaklaşan personeli erkenden tespit edip yasal korumaya almak. | Aylık derin doz ≥2.0 mSv ise sarı uyarı, ≥5.0 mSv ise kırmızı alarm ve resmi NDK bildirimi zorunluluğu tetiklenir. Ayrıca hakkında inceleme aksiyonu açılan personele Web Portal görev paneline 'Bölüm 2: Çalışan Beyanı' formunu doldurması için anlık görev bildirimi atanır. | Dozimetre okuma raporları içe aktarıldığında. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">RGU / Medikal Fizikçi</span> |
| P2P Nöbet Devir Havuz Süresi (36s)<br> <span class="text-xs font-normal text-slate-400 font-mono">[Nöbet Devir & Takas Analitiği]</span> | Devre bırakılan nöbetlerin sahipsiz kalmasını ve son dakika açıklarını engellemek. | Havuza bırakılan nöbet 36 saat boyunca başka bir tekniker tarafından devralınmazsa istek iptal edilir ve nöbet sahibinde kalır. | Nöbet devir talebi açıldığı andan itibaren 36 saat. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Nöbetçi Personel</span> |
| Cihaz QC ve Lisans 30 Gün Uyarısı<br> <span class="text-xs font-normal text-slate-400 font-mono">[Cihaz & QC Yönetimi Göstergesi]</span> | NDK lisansı veya periyodik kalite kontrol süresi bitmeden önce yenileme payı bırakmak. | Geçerliliğine ≤30 gün kalan cihazlar sarı renkli alarm listesine alınır; süresi dolanlar kırmızı 'Hizmet Dışı' statüsüne geçer. | Her gün otomatik takvim kontrolünde. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">Biyomedikal / RGU</span> |
| Excel ve PDF Dışa Aktarımı<br> <span class="text-xs font-normal text-slate-400 font-mono">[Dışa Aktar / Export Butonları]</span> | Denetimlerde ve idari toplantılarda resmi onaylı metrik çıktısı sunmak. | Tablodaki filtrelenmiş verileri sütun hizalı Excel (.xlsx) veya kurumsal antetli PDF belgesi olarak indirir. | Kullanıcı [Excel İndir] veya [PDF İndir] butonuna bastığında. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Tüm Kullanıcılar</span> |
| Web Portalı Aç Butonu<br> <span class="text-xs font-normal text-slate-400 font-mono">[Portal Başlatıcı / Tray Menüsü]</span> | Servis başlatıcı penceresinden tek tıkla canlı web portalını ve gösterge panellerini tarayıcıda açmak. | İşletim sisteminin varsayılan güncel tarayıcısını önceliklendirerek Port 3000 portal ana sayfasını açar; Sandbox veya kısıtlı ortamlarda Edge yedeğini kullanır. | Kullanıcı başlatıcıdaki [Web Portalı Aç] butonuna veya sistem tepsisindeki menü öğesine tıkladığında. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Tüm Kullanıcılar</span> |
| Şifreli Lisans (.lic) ve Gömülü Cloudflare Tüneli<br> <span class="text-xs font-normal text-slate-400 font-mono">[Portal Başlatıcı &gt; Tünel Durum Rozeti]</span> | Modem portu açmadan ve ek program kurmadan kuruma özel alt alan adıyla (Örn: kurumadi.radpys.com) güvenli dış erişim sağlamak. | Kuruma özel tünel ve Turnstile anahtarları .lic lisans dosyası içinde Cihaz Kimliğine (Machine ID) bağlı AES-256 şifreli gelir. Hiçbir personel veya dozimetre verisi dış sunucularda saklanmaz (%100 Yerel KVKK Güvencesi); tünel yalnızca kurum içi yerel bilgisayarınızla tarayıcı arasında uçtan uca şifreli geçiş köprüsü kurar. | Lisans etkinleştirildiğinde ve Portal Başlatıcı üzerinden servisler başlatıldığında. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Sistem Yöneticisi (Admin)</span> |
| Cloudflare Turnstile &amp; 2FA E-Posta Doğrulaması<br> <span class="text-xs font-normal text-slate-400 text-mono">[Web Giriş Ekranı &amp; 6 Haneli OTP Kodu]</span> | Web Portalını otomatik bot saldırılarına ve yetkisiz parola denemelerine karşı tam korumaya almak. | Yerel ağda hızlı giriş korunurken dış ağda Turnstile robot doğrulaması ve 6 haneli tek kullanımlık e-posta doğrulama kodu (2FA OTP) zorunlu tutulur. Doğrulama e-postası iletilemezse dış ağ oturumu açılmaz (Güvenli Kapanma); 5 hatalı denemede hesap 15 dakika otomatik kilitlenir. | Web Portalına her kullanıcı girişinde. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Tüm Web Kullanıcıları</span> |
| Merkezileştirilmiş Profilim &amp; Kişisel Beyan Sekmeleri<br> <span class="text-xs font-normal text-slate-400 font-mono">[Profilim &amp; Saha Operasyon Ekranları]</span> | Personelin tüm özlük, nöbet, izin/Şua, dozimetre, sağlık (EK-1), gebelik/muafiyet, eğitim ve RKE zimmet işlemlerini sol menü kalabalığı olmadan tek merkezden yürütmesini sağlamak. | Periyodik Sağlık (EK-1) anamnez/semptom beyanı, RD.F43 Doz Araştırma Beyanı ve Gebelik/Sağlık Muafiyeti başvurusu doğrudan <strong>[Profilim]</strong> sekmeleri içinden yönetilir. Saha görevlileri Cihaz Arıza/QC, RKE Barkod/Kroki Muayenesi ve Ortam Dozu Kroki Ölçümü işlemlerini atomik veri güvencesiyle doğrudan mobil tarayıcıdan yürütür. | Personel portala giriş yaptığında veya saha denetimi sırasında. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Tüm Web Kullanıcıları / RKS</span> |
| Dozimetre Aksiyon Takip Kokpiti &amp; RD.F43 Tam Uyum<br> <span class="text-xs font-normal text-slate-400 font-mono">[Dozimetre Gösterge Paneli &gt; Aksiyon &amp; İnceleme Planları]</span> | Doz aşımı ve anomali vakalarını masaüstü ana programla birebir aynı 8 sütunlu kokpit tablosunda izlemek ve RKS aksiyonlarını sonuçlandırmak. | İnceleme bekleyen erken uyarı/anomali adayları ile açık ve kapatılan aksiyonlar tek tabloda listelenir. Seçili kayıt üzerinden <strong>[Doz Araştırma Formu (RD.F43)]</strong>, <strong>[Birim Notu Ekle]</strong>, <strong>[Takip Ölçümü Planla]</strong> ve <strong>[Aksiyonu Kapat]</strong> işlemleri yürütülür. | Doz aşımı/anomali tespit edildiğinde veya RKS incelemesinde. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">RKS / Medikal Fizikçi / Yönetici</span> |
| Atomik Nöbet Devir/Takas, İkame Havuzu &amp; Denetim Kokpitleri<br> <span class="text-xs font-normal text-slate-400 font-mono">[Nöbet Devir Merkezi, İkame Havuzu &amp; SKS/NDK Denetim Panosu]</span> | Nöbet takası, acil mazeret ikame atamaları ve yönetici onaylarında çizelge bütünlüğünü korumak; SKS/NDK denetim hazırlığını gerçek zamanlı izlemek. | Karşılıklı takas, yönetici devir onayı ve ikame havuzu teklif kabulleri atomik işlem kilidiyle yürütülür; aynı anda çakışan taleplerde mükerrer atama engellenir. Kayıt olmayan dönemlerde sahte/örnek veri üretilmez, dürüst boş durum gösterilir. | Nöbet devir/havuz işlemi onaylandığında veya yönetici kokpitleri açıldığında. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Birim Sorumlusu / RKS / Yönetici</span> |

 </div>

## Web Portal ve Dashboard Mimari Akış Şeması (Mermaid) {#workflow}

<p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
 Aşağıdaki şema, masaüstü uygulamasının portal sunucusunu denetlemesinden tarayıcıda canlı gösterge panellerinin yüklenmesine kadar olan mimari entegrasyonu göstermektedir.
 </p>
 <div
 class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-x-auto">

```mermaid
flowchart TD
 A["RADPYS Masaüstü Başlatılır"] --> B{"8s Periyodik Sağlık Kontrolü"}
 B -- "Port 3000 Aktif" --> C["Durum Çubuğu: 'Portal Sunucu: Aktif' (Yeşil)"]
 B -- "Port 3000 Kapalı" --> D["Durum Çubuğu: 'Portal Sunucu: Kapalı' (Gri)"]

 D --> E["Yönetici [Portal Sunucu] Butonuna Tıklar"]
 E --> F["RADPYS_Portal_Launcher.exe Arka Planda Başlatılır"]
 F --> C

 C --> G["Kullanıcı [Genel Bakış] Butonuna Basar"]
 G --> H["Web Tarayıcısı Açılır: http://localhost:3000/dashboard/genel"]

 H --> I{"60s Bellek İçi Önbellek (Cache) Geçerli mi?"}
 I -- "Evet" --> J["Veriler RAM Önbelleğinden Anında Yüklenir"]
 I -- "Hayır / Taze Veri" --> K["Canlı PostgreSQL Veritabanı Sorgulanır"]
 K --> L["Önbellek 60s Güncellenir ve Ekrana Basılır"]

 J --> M["Yönetici Karar Destek Kokpiti"]
 L --> M

 M --> N["4 Temel Yönetici KPI Kartı (Kadro, Nöbet, Doz, Olay)"]
 M --> O["4 Kurumsal Uyum Kartı (Cihaz, Lisans, RKE, Eğitim)"]
 M --> P["Alt Birim Maruziyet & Doz Trend Grafikleri"]
 M --> Q["Tek Tıkla Alt Dashboardlara Geçiş (20 Modül)"]
```

 </div>

## Ekran Konumları ve Görsel Rehber {#screenshots}

![Masaüstü Uygulamasından Web Portalına Tek Tıkla Erişim | Masaüstü Ana Ekranı > Sol Kenar Çubuğu [Genel Bakış] & Durum Çubuğu [Portal Sunucu] | Masaüstü Köprü Entegrasyonu](assets/img/dashboard_masaustu_portal_erisim.png "<span><strong>Simülasyon Notu:</strong> Masaüstü sol menüdeki Genel Bakış butonu ve sağ alt durum çubuğundaki canlı Portal Sunucu sağlık göstergesi.</span>")
![RADPYS Web Portal Başlatıcı ve Durum Paneli | Masaüstü Durum Çubuğu > [Portal Sunucu: Aktif] > Portal Başlatıcı Paneli | Portal Launcher & Sunucu Kontrolü](assets/img/02_portal_launcher_paneli_on.png "<span><strong>Simülasyon Notu:</strong> Arka plan API (Port 5000) ve Web Arayüzü (Port 3000) servislerinin tek tıkla başlatılması ve yerel ağ (LAN) adres bilgisi.</span>")
![RADPYS Web Portal Genel Bakış Executive Dashboard | Web Tarayıcısı > http://localhost:3000/dashboard/genel [Yönetici Özeti] | Executive Overview & 20 Analitik Dashboard](assets/img/web_portal_genel_dashboard.png "<span><strong>Simülasyon Notu:</strong> 8 temel yönetici KPI kartı, 4 kurumsal uyum göstergesi, alt birim doz trendleri ve 20 modüle tek tıkla geçiş kokpiti.</span>")

## Adım Adım Eylem Akışı {#step-by-step}

<div class="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
 <div
 class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
 <strong class="text-slate-900 dark:text-white text-base block mb-2">Adım 1: Masaüstünden Portal Durumunu Doğrulama</strong>
 Masaüstü uygulamasının sağ alt köşesindeki durum çubuğuna bakın. Eğer yeşil renkli <strong>[Portal Sunucu: Aktif]</strong> yazıyorsa sunucu hazırdır. Eğer gri renkli <strong>[Portal Sunucu: Kapalı]</strong> yazıyorsa butona bir kez tıklayarak arka planda Portal Başlatıcı'yı çalıştırın; 3-4 saniye içinde aktifleşecektir.
 </div>
 <div
 class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
 <strong class="text-slate-900 dark:text-white text-base block mb-2">Adım 2: Genel Bakış Ekranını Açma ve KPI İnceleme</strong>
 Sol kenar çubuğunun en üstündeki <strong>[Genel Bakış]</strong> butonuna tıklayın. Varsayılan tarayıcınızda açılan ekranda 4 temel yönetici kartını (Kadro, Nöbet, Dozimetre, Olay) ve 4 kurumsal uyum kartını (Cihaz, NDK Lisansları, RKE, Eğitim) kontrol edin. Sayıların üzerine dokunarak ilgili alt modüle doğrudan geçiş yapabilirsiniz.
 </div>
 <div
 class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
 <strong class="text-slate-900 dark:text-white text-base block mb-2">Adım 3: İlgili Gösterge Panellerine Geçiş</strong>
 Sol menüdeki akordeon gruplarından incelemek istediğiniz alana tıklayın:
 <ul class="list-disc pl-5 mt-2 space-y-1">
 <li><strong>Nöbet Yönetimi:</strong> Kurumsal nöbet matrisi, poliklinik vardiyaları, kısıt ihlalleri ve adalet katsayıları.</li>
 <li><strong>Dozimetre Takibi:</strong> 2 mSv ve 5 mSv aşım alarmları, DÖF aksiyonları ve RDF-43 araştırma formları.</li>
 <li><strong>Denetim Panosu:</strong> Sağlık Bakanlığı SKS ve NDK denetim hazırlık eksiklik kontrol listesi.</li>
 <li><strong>Cihaz & RKE:</strong> Lisans vize süreleri, bakım gecikmeleri ve DIN 6857-1 kurşun ekipman muayeneleri.</li>
 </ul>
 </div>
 <div
 class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
 <strong class="text-slate-900 dark:text-white text-base block mb-2">Adım 4: Filtreleme, Zorla Yenileme ve Resmi Rapor Alma</strong>
 Üstteki filtre çubuğundan Departman veya Yıl/Ay seçimi yapın. Yeni bir kayıt girildiğinde 60 saniyelik önbelleği beklemeden anlık veri çekmek için sağ üstteki <strong>[Yenile]</strong> butonuna basın. İncelediğiniz tabloyu denetime sunmak için <strong>[Excel İndir]</strong> veya <strong>[PDF İndir]</strong> butonuna tıklayın.
 </div>
 </div>

## Hibrit Platform Karşılaştırması (Masaüstü & Web) {#hybrid-platform}

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div
 class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
 <span class="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
 Masaüstü Uygulaması (PySide6)
 </h3>
 <ul class="text-xs sm:text-sm space-y-2 text-slate-600 dark:text-slate-300">
 <li class="flex items-start gap-2">
 <span class="text-cyan-600 font-bold">•</span>
 <span><strong>Sunucu Yönetimi:</strong> Durum çubuğunda Node.js Port 3000 sağlık kontrolü ve arka plan launcher tetikleme.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-600 font-bold">•</span>
 <span><strong>Hızlı Köprü:</strong> Tek tıkla varsayılan tarayıcıda yönetici kokpitini açma yetkisi.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-600 font-bold">•</span>
 <span><strong>Gelişmiş Solver & Rapor:</strong> Nöbet dağıtım motorunu çalıştırma, Excel toplu içe aktarım ve şifreli evrak kasası yönetimi.</span>
 </li>
 </ul>
 </div>
 <div
 class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
 <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
 Web Portalı & PWA (React 18 + Vite)
 </h3>
 <ul class="text-xs sm:text-sm space-y-2 text-slate-600 dark:text-slate-300">
 <li class="flex items-start gap-2">
 <span class="text-blue-500 font-bold">•</span>
 <span><strong>20 Analitik Dashboard:</strong> Dozimetre, nöbet devir, SKS denetim, RKE ve ortam dozu göstergeleri.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-blue-500 font-bold">•</span>
 <span><strong>Mobil / Tablet Uyumu:</strong> Kurum içindeki telefon ve tabletlerden duyarlı (responsive) anlık veri takibi.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-blue-500 font-bold">•</span>
 <span><strong>Yüksek Performans:</strong> 60 saniyelik bellek içi önbellek ile anında grafik yükleme ve rapor dökümü.</span>
 </li>
 </ul>
 </div>
 </div>

## Hata Mesajları ve Sorun Giderme Rehberi {#troubleshooting}

<div
 class="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm bg-white dark:bg-slate-900">

| Hata / Durum Bildirimi | Olası Neden | Çözüm Adımı |
| --- | --- | --- |
| "Portal Sunucu: Kapalı" | Node.js Express sunucusu Port 3000 üzerinde henüz başlatılmamış. | Masaüstü durum çubuğundaki butona bir kez tıklayarak başlatıcıyı devreye alın (3-4 saniye bekleyin). |
| "Portal Başlatıcı (RADPYS_Portal_Launcher.exe) bulunamadı." | Başlatıcı yürütülebilir dosyası silinmiş veya kurulum dizini dışına taşınmış. | RADPYS kurulum klasöründeki user_launcher dizinini kontrol ediniz veya sistem yöneticisine başvurunuz. |
| "Yeni girdiğim nöbet/kaza kaydı gösterge panelinde görünmüyor." | 60 saniyelik bellek içi önbellek henüz süresini doldurmamış. | Dashboard'un sağ üstündeki [Yenile] butonuna basarak önbelleği zorla temizleyip taze veri çekiniz. |
| "Tarayıcıda sayfa yüklenmiyor (Bağlantı Reddedildi)" | PostgreSQL veritabanı veya web sunucusu güvenlik duvarı tarafından engellenmiş. | Yerel güvenlik yazılımında 3000 portuna yerel ağ (localhost) izinlerini veriniz. |

 </div>

## Sıkça Sorulan Sorular (SSS) {#faq}

:::faq
### Web Portal sunucusunu başlatma yetkisi kimdedir?
Kurumsal güvenlik kuralı gereğince durum çubuğundaki başlatıcı tetikleme yetkisi yalnızca <strong>Sistem Yöneticisi (Admin)</strong> rolüne aittir. Normal kullanıcılar ve teknikerler açık olan portali tarayıcıdan izleyebilir ancak arka plan sunucu sürecini başlatamaz veya durduramaz.

### 60 saniyelik önbellek süresi verilerin gecikmesine yol açar mı?
Hayır. 60 saniyelik TTL (Time-to-Live), yüzlerce personelin aynı anda gösterge panellerini açtığı kurumsal hastane ağlarında veritabanı kilitlenmelerini önleyen endüstriyel bir standarttır. Kritik bir veri girişi yapıldığında paneldeki <strong>[Yenile]</strong> butonuna basılarak önbellek anında geçersiz kılınabilir ve canlı veri çekilebilir.

### Web Gösterge Panellerine cep telefonu veya tabletten erişilebilir mi?
Evet. RADPYS Web Portalı modern duyarlı (responsive) React mimarisinde geliştirilmiştir. Hastane yerel Wi-Fi ağına bağlı tabletler ve akıllı telefonlar üzerinden yetkili kullanıcı girişi yapılarak tüm paneller ve grafikler tam ekran olarak incelenebilir.

### İnternet bağlantısı kesildiğinde Web Portal çalışmaya devam eder mi?
<strong>Evet, kesintisiz çalışır.</strong> RADPYS sistemi dış bulut servislerine bağımlı değildir; kurumun yerel sunucusunda veya ana bilgisayarında çalışan yerel PostgreSQL ve Node.js mimarisiyle kuruludur. Dış internet bağlantısı kesilse dahi hastane intranet ağı üzerinden gösterge panellerine erişim eksiksiz devam eder.

### Portal Başlatıcı üzerindeki [Web Portalı Aç] butonu hangi tarayıcıyı kullanır?
Kullanıcının işletim sisteminde varsayılan olarak belirlediği güncel web tarayıcısı (Google Chrome, Mozilla Firefox, Brave vb.) otomatik olarak açılır. Yalnızca kısıtlı kurumsal konteyner veya izole güvenlik ortamlarında (Windows Sandbox gibi) protokol uyumluluğunu korumak amacıyla Microsoft Edge yedeği devreye girer.
:::
