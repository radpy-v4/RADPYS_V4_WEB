---json
{
  "pageTitle": "06. İzin Yönetimi, Şua İzni ve Yıllık İzin Hakedişleri — RADPYS v4 Kullanım Kılavuzu",
  "h1": "İzin Yönetimi, Şua Hakedişi & İzin Devir Motoru",
  "lead": "Radyasyonla çalışan sağlık personelinin yasal Şua İzni (sağlık izni), yıllık izin, mazeret ve hastalık izinlerinin talebi, nöbet ve çakışma kontrolleri, yetkili onayı, bakiye düşümü, geçmiş yıl devir aktarımı ve EBYS/HBYS evrak entegrasyonu rehberi.",
  "overviewId": "overview",
  "badges": [],
  "readingTime": "6 Dakika"
}
---

## Hızlı Reçete: Radyasyon İzinleri ve Yasal Hakediş Süreci {#quick-recipe}

:::recipe Hızlı Reçete: Radyasyon İzinleri ve Yasal Hakediş Süreci | 20 SANİYELİK AKIŞ
### 1. İstenen Sonuç | slate
Personelin hak ettiği izinleri mevzuata uygun kullandırmak, nöbet aksamalarını önlemek ve bakiye kayıplarını sıfırlamak.

### 2. Yapılacak İşlem | cyan
<strong>[İzin Talep Et]</strong> sihirbazından personeli ve tarihleri seçin, yönetici ekranından onaylayın veya web portalından <strong>[EBYS Kaydet]</strong> ile resmiyete dökün.

### 3. Sistem Etkisi | emerald
Nöbet çakışmaları engellenir, onay anında bakiye düşülür, iptal halinde bakiye iade edilir; şua izni 31 Aralık'ta devretmeksizin yanar.

- [metric] Yasal Şua Tavanı | 30 Gün / Yıl | slate
- [metric] Hak Katsayısı | 50 Saat = 1 Gün | slate
- [metric] Devir Tavanı | Max 5 Gün (Yıllık) | slate
- [metric] Platform | Masaüstü & Web | slate
:::

## 5N1K Kural ve Arayüz Çözümleme Tablosu {#5w1h}

<div class="space-y-1">
 <p class="text-sm text-slate-500 dark:text-slate-400">
 İzin modülünde yer alan kontrollerin yasal dayanakları, çalışma mekanizmaları ve kullanıcı rolleri.
 </p>
 </div>

| NE? (Bileşen / Kontrol) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? |
| --- | --- | --- | --- | --- |
| <strong>İzin Tablosu & Arama</strong><br> <span class="text-[11px] text-slate-400">Üst Filtre Çubuğu</span> | Departmandaki tüm izin hareketlerini ve onay durumlarını listelemek. | 300 ms gecikmeli debounced arama ile ad, soyad, TC ve EBYS no taranır; durum ve izin türü filtrelenir. | Rutin takip ve denetimlerde. | Yönetici, Süpervizör, İK |
| <strong>Yeni İzin Talebi [+ İzin Talep Et]</strong><br> <span class="text-[11px] text-slate-400">2 Adımlı Talep Sihirbazı</span> | Personel adına mevzuata uygun izin kaydı açmak. | Adım 1'de personel seçilir ve anlık bakiye kartı açılır. Adım 2'de tarihler, tür, vekil ve açıklama girilir. | İzin talebi oluştuğunda. | Personel, Birim Amiri |
| <strong>Şua İzni Hakedişi (Mevzuat Standardı)</strong><br> <span class="text-[11px] text-slate-400">Yasal Hakediş Kuralı</span> | Radyasyon çalışanlarının kanuni sağlık iznini hesaplamak. | Fiili çalışma süresine göre her 50 saatte 1 gün hesaplanır (tavan 30 gün). Cari yıl kazanımı takip eden yıl kullanılır; devretmez, 31 Aralık'ta yanar. | Yıllık izin planlamasında. | Radyasyon Çalışanları |
| <strong>Çakışma & Nöbet Kilidi</strong><br> <span class="text-[11px] text-slate-400">Otomatik Çakışma Denetimi</span> | Personelin nöbet gününde izne çıkmasını veya mükerrer izin almasını engellemek. | Talep edilen tarihler personelin onaylı/bekleyen izniyle veya nöbet çizelgesindeki aktif göreviyle kesişiyorsa işlem durdurulur. | İzin kaydetme anında. | Sistem (Otomatik Kilit) |
| <strong>İzin Onayla</strong><br> <span class="text-[11px] text-slate-400">Üst Araç Çubuğu (Yeşil)</span> | Bekleyen talebi onaylayıp bakiyeyi güncellemek. | İzin durumu 'Onaylandı' yapılır; personelin ilgili yıl için tanımlı kalan izninden gün sayısı anında düşülür. | Amir incelemesinden sonra. | Yönetici, Departman Sorumlusu |
| <strong>İzin Reddet</strong><br> <span class="text-[11px] text-slate-400">Üst Araç Çubuğu (Kırmızı)</span> | Uygun görülmeyen izin talebini gerekçeli sonlandırmak. | Açılan diyalogda ret gerekçesi girilmesi zorunludur. Bakiye düşümü yapılmaz, durum 'Reddedildi' olarak arşivlenir. | Hizmet aksaması durumunda. | Yönetici, Süpervizör |
| <strong>İzin İptali</strong><br> <span class="text-[11px] text-slate-400">Üst Araç Çubuğu (Turuncu)</span> | Kullanılmayacak onaylı izni geri çekip hakkı iade etmek. | İzin 'İptal Edildi' statüsüne çekilir; önceden düşülen izin günleri personelin bakiye havuzuna geri aktarılır. | Görevin iptal edilmesinde. | Yönetici, Süpervizör |
| <strong>Devir Aktar & Yılı Kilitle</strong><br> <span class="text-[11px] text-slate-400">[Devir Aktar & Yılını Kilitle Butonu]</span> | Yıllık izin devrini gerçekleştirmek, 12 aylık fiili hizmetten yeni yılın Şua İzni hakedişini kesinleştirmek ve kaynak yılı dondurmak. | Kapanan yılın kalan yıllık izinlerini tavan sınırına (azami 5 gün) göre devreder. Kaynak yılın 12 aylık fiili radyasyon saatlerini tarayarak yeni yıl Şua İzni hakedişini (her 50 saate 1 gün, azami 30 gün) oluşturur ve kaynak yılı dondurur. Bu işlem yüzlerce personel için arka planda asenkron iş parçacığıyla yürütülür; arayüz donmaz, canlı ilerleme penceresi gösterilir ve tamamlandığında özet bildirim kartı sunulur. | Yıl başında yeni yıl hakedişleri açılırken. | Sistem Yöneticisi, İK |
| <strong>Web Portalı EBYS Kaydı</strong><br> <span class="text-[11px] text-slate-400">[EBYS Kaydet Formu]</span> | Resmi kurum evrak numarasını izin kaydına işlemek. | İlk evrak no girişinde izin doğrudan 'Resmi Onaylı' statüsü kazanır. Sonradan değiştirilmek istenirse onay masasına düşer. | Resmi yazı çıktığında. | Personel, İdari İşler |
| <strong>Toplu İzin &amp; Hakediş İçe Aktar</strong><br> <span class="text-[11px] text-slate-400">[Toplu İçe Aktar Butonu]</span> | Geçmiş yıllara ait izin hareketlerini veya yıllık izin hakedişlerini 2 sayfalı kurumsal Excel şablonuyla topluca sisteme yüklemek. | Evrensel İçe Aktarım Sihirbazı ile hakediş veya geçmiş izin şablonu seçilir; izin türleri dinamik sözlükte çözümlenir; Dry-Run önizlemesinden sonra asenkron olarak güvenle kaydedilir. | İlk kurulum aşamasında veya yıl başı toplu izin bakiye tanımlamalarında. | İK / Sistem Yöneticisi |

## Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı) {#myth-buster}

<div class="flex items-center gap-3">
 <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
 </div>
 <div>
 <h3 class="text-base font-bold text-slate-900 dark:text-white">
 Saha Mit Avcısı: "Kullanılmayan Şua İzinleri Bir Sonraki Yıla Devreder mi ya da Paraya Çevrilebilir mi?"
 </h3>
 <span class="text-xs text-amber-700 dark:text-amber-300 font-semibold">En Yaygın Radyasyon Mevzuatı Yanılgısı</span>
 </div>
 </div>
 <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
 <div class="flex items-start gap-2.5">
 <span class="text-rose-500 font-bold shrink-0 text-base leading-none"></span>
 <p>
 <strong>Yanlış İnanış:</strong> <em>"Yoğunluktan ötürü bu yıl 30 günlük şua iznimi kullanamadım, seneye aktarılır 60 gün kullanırım veya kullanamadığım günlerin ücretini idareden talep edebilirim."</em>
 </p>
 </div>
 <div class="flex items-start gap-2.5">
 <span class="text-emerald-500 font-bold shrink-0 text-base leading-none"></span>
 <p>
 <strong>Doğru Gerçek:</strong> <strong>KESİNLİKLE HAYIR.</strong> 3153 sayılı Kanun, Radyasyon Güvenliği Yönetmeliği ve Sağlık Bakanlığı içtihatları uyarınca Şua İzni (sağlık izni), personelin vücudundaki radyasyon biyolojik hasarını tolere etmek ve hücresel onarımı sağlamak amacıyla verilmiş <strong>kamu düzenine ilişkin bir dinlenme hakkıdır</strong>. Şua izni ertelenemez, takvim yılı (31 Aralık) bittiğinde <strong>zaman aşımına uğrayarak yanar</strong>, sonraki yıla devredilemez veya nakdi tazminata dönüştürülemez. RADPYS hakediş motoru bu nedenle şua izinlerini cari yılda kilitler ve yıl sonu devrine izin vermez.
 </p>
 </div>
 </div>

## İzin Talep, Çakışma Denetimi ve Onay Akış Şeması {#workflow}

<div class="space-y-1">
 <p class="text-sm text-slate-500 dark:text-slate-400">
 Personel izin talebinden bakiye kontrolüne, nöbet çakışmasından EBYS evrak kaydına tam süreç döngüsü.
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex justify-center">

```mermaid
graph TD
 A(["İzin Talebi Başlatılır: Masaüstü / Web"]) --> B{"Tarihler Başka İzinle Çakışıyor mu?"}
 
 %% Çakışma Denetimleri
 B -->|Evet| C["HATA: Çakışan İzin Bulundu - İşlem Durdurulur"]
 B -->|Hayır| D{"Talep Tarihlerinde Aktif Nöbet Var mı?"}
 
 D -->|Evet| E["HATA: Nöbet Çakışması - Önce Nöbet Değiştirilmelidir"]
 D -->|Hayır| F{"Personelin Kalan İzin Bakiyesi Yeterli mi?"}
 
 %% Bakiye ve Onay Kuyruğu
 F -->|"Yetersiz"| G["HATA: Yetersiz İzin Bakiyesi Uyarısı"]
 F -->|"Yeterli"| H["Talep Kaydedilir: Durum = Onay Bekliyor"]
 
 H --> I{"Yetkili Amir Kararı"}
 I -->|Reddet| J["Zorunlu Gerekçe Girilir: Durum = Reddedildi"]
 I -->|Onayla| K["Durum = Onaylandı"]
 
 %% Bakiye Düşümü ve İptal
 K --> L["İzin Günleri Bakiye Havuzundan Otomatik Düşülür"]
 L --> M{"Personel İzne Çıkamadı mı?"}
 M -->|"İptal Talebi"| N["İptal Et Butonu: Bakiye Eksiksiz İade Edilir"]
 
 %% EBYS / HBYS Entegrasyonu
 L --> O{"EBYS / HBYS Evrak No Girildi mi?"}
 O -->|Evet| P["Durum = Resmi Onaylı Olarak Kilitlenir"]
 O -->|Hayır| Q["İdari Onay Statüsünde Kalır"]

 style A fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
 style C fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
 style E fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
 style G fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
 style K fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
 style P fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
 style N fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
```

 </div>

## Arayüz Ekran Görünümleri {#screenshots}

<div class="space-y-1">
 <p class="text-sm text-slate-500 dark:text-slate-400">
 İzin Listesi kokpiti ve 2 adımlı İzin Talep Sihirbazı ekranları.
 </p>
 </div>

![İzin Listesi ve Filtreleme Ekranı | Sol Menü > İzin Yönetimi > İzin Listesi | KPI Sayaçları, Filtreler & Onay/Red/İptal Butonları](assets/img/izin_list.png "<span><strong>Yasal Bilgilendirme:</strong> Bu görseldeki personel adları, TC kimlik numaraları, departmanlar ve izin tarihleri simülasyon amacıyla üretilmiş sentetik test verileridir.</span>")

![Yeni İzin Talebi ve Bakiye Paneli Ekranı | İzin Listesi > + İzin Talep Et Butonu | 2 Adımlı Wizard, Bakiye Paneli & Takvim Hesabı](assets/img/izin_talep.png "<span><strong>Yasal Bilgilendirme:</strong> Form alanları ve bakiye özeti örnek arayüz gösterimi olup herhangi bir gerçek personele ait veri içermemektedir.</span>")

## Adım Adım İşlem Rehberi {#step-by-step}

<div class="space-y-1">
 <p class="text-sm text-slate-500 dark:text-slate-400">
 Saha operasyonlarında en sık kullanılan 5 ana işlemin uygulama adımları.
 </p>
 </div>
 <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <div class="flex items-center gap-3">
 <span class="w-7 h-7 rounded-xl bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300 flex items-center justify-center font-bold text-sm">
 1
 </span>
 <h3 class="text-base font-bold text-slate-900 dark:text-white">
 2 Adımlı Sihirbaz ile Yeni İzin Talebi Oluşturma
 </h3>
 </div>
 <ol class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li>İzin Listesi ekranının sol üst köşesindeki mor <strong>[+ İzin Talep Et]</strong> butonuna tıklayın.</li>
 <li>Açılan sihirbazın 1. Adımında:
 <ul class="list-disc list-inside pl-5 mt-1 text-slate-500 dark:text-slate-400 space-y-0.5">
 <li><strong>Personel Seçimi:</strong> TC Kimlik veya Ad ile personeli bulun.</li>
 <li><strong>Bakiye Kontrolü:</strong> Sağ taraftaki panelde personelin cari yıldaki Yıllık Hakedilen, Devir Eden ve Şua İzni kalan haklarını kontrol edin.</li>
 </ul>
 </li>
 <li>Alt kısımdaki <strong>[İleri >]</strong> butonuna basarak 2. Adıma geçin:
 <ul class="list-disc list-inside pl-5 mt-1 text-slate-500 dark:text-slate-400 space-y-0.5">
 <li><strong>İzin Türü:</strong> Yıllık İzin, Şua İzni (Sağlık İzni), Mazeret İzni vb. seçin.</li>
 <li><strong>Başlangıç / Bitiş Tarihleri:</strong> Tarihleri seçtiğinizde sistem resmi tatil ve hafta sonu parametrelerine göre net gün ve saat süresini otomatik hesaplar.</li>
 <li><strong>Vekil Personel:</strong> İzin esnasında görevi devralacak meslektaşınızı belirleyin.</li>
 </ul>
 </li>
 <li><strong>[Kaydet]</strong> butonuna basın. Çakışma ve nöbet kontrolleri olumluysa talep 'Onay Bekliyor' statüsünde listeye düşecektir.</li>
 </ol>
 </div>
 <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <div class="flex items-center gap-3">
 <span class="w-7 h-7 rounded-xl bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300 flex items-center justify-center font-bold text-sm">
 2
 </span>
 <h3 class="text-base font-bold text-slate-900 dark:text-white">
 İzin Taleplerini İnceleme, Onaylama ve Gerekçeli Reddetme
 </h3>
 </div>
 <ol class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li>İzin Listesinde üst filtrelerden durumu <strong>'Beklemede'</strong> olarak seçin.</li>
 <li>İncelenmek istenen satırı tıklayın veya detaylarını görmek için <strong>[Ayrıntı / Düzenle]</strong> butonuna basın.</li>
 <li><strong>Onaylamak İçin:</strong> Yeşil renkli <strong>[Onayla]</strong> butonuna tıklayın. Sistem personelin izin bakiyesinden gün sayısını anında düşer ve satır rozetini yeşil 'ONAYLANDI' yapar.</li>
 <li><strong>Reddetmek İçin:</strong> Kırmızı renkli <strong>[Reddet]</strong> butonuna tıklayın. Açılan pencereye ret gerekçesini yazıp onaylayın. Durum 'REDDEDİLDİ' olur, personelin bakiyesine dokunulmaz.</li>
 </ol>
 </div>
 <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <div class="flex items-center gap-3">
 <span class="w-7 h-7 rounded-xl bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300 flex items-center justify-center font-bold text-sm">
 3
 </span>
 <h3 class="text-base font-bold text-slate-900 dark:text-white">
 Onaylı İzni Güvenle İptal Etme ve Bakiye İadesi
 </h3>
 </div>
 <ol class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li>Önceden onaylanmış ancak acil görev, nöbet veya plan değişikliği nedeniyle çıkılamayan izni listeden seçin.</li>
 <li>Üst araç çubuğundaki turuncu <strong>[İptal Et]</strong> butonuna basın.</li>
 <li>Ekrana gelen onay uyarısında 'Evet' dediğinizde sistem izin kaydını 'İPTAL EDİLDİ' statüsüne alır.</li>
 <li>Önceden personelin bakiyesinden düşülen tüm izin günleri, personelin izin havuzuna otomatik ve eksiksiz olarak geri iade edilir.</li>
 <li><em>Not: Onaylı izinlerin kalıcı olarak silinmesi yasal denetim izi gereğince engellenmiştir; daima İptal Et işlemi uygulanmalıdır.</em></li>
 </ol>
 </div>
 <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <div class="flex items-center gap-3">
 <span class="w-7 h-7 rounded-xl bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300 flex items-center justify-center font-bold text-sm">
 4
 </span>
 <h3 class="text-base font-bold text-slate-900 dark:text-white">
 İzin Hakedişlerini İnceleme ve Geçmiş Yıl Devri Aktarma
 </h3>
 </div>
 <ol class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li>İzin Listesi sağ üst araç çubuğundaki <strong>[Kalan Hak / Hakediş]</strong> butonuna veya sol menüden hakediş sayfasına geçin.</li>
 <li>Yıl seçicisinden incelemek istediğiniz takvim yılını belirleyin. Tüm personelin hakediş, devir ve kullanılan gün toplamları listelenir.</li>
 <li>Ocak ayı başında geçmiş tamamlanmış yıldan kalan izinleri aktarmak ve Şua hakedişini kesinleştirmek için <strong>[Devir Aktar & Yılını Kilitle]</strong> butonuna tıklayın.</li>
 <li>Sistem, yıllık izin devrini tavan sınırına (en fazla 5 gün) göre aktarır. Aynı anda kaynak yılın 12 aylık fiili hizmet puantajını tarayarak personellerin yeni yıl Şua İzni hakedişlerini yasal bareme (her 50 saate 1 gün, azami 30 gün) göre kesinleştirir ve kaynak yılı yıllık kilitle dondurur. Bu toplu işlem arka planda asenkron olarak yürütülür; arayüz donmaz, canlı yüzde ilerleme penceresi görüntülenir ve işlem bittiğinde özet sonuç kartı iletilir. Kaynak yıl kilitlendikten sonra buton metni <strong>[Devir Aktar (Kilitli)]</strong> olarak güncellenir.</li>
 </ol>
 </div>
 <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <div class="flex items-center gap-3">
 <span class="w-7 h-7 rounded-xl bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300 flex items-center justify-center font-bold text-sm">
 5
 </span>
 <h3 class="text-base font-bold text-slate-900 dark:text-white">
 Web Portalından İzin Talebi ve EBYS Evrak Numarası Eşleştirme
 </h3>
 </div>
 <ol class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li>Saha personeli veya amir kurum içi Web Portalına (`web_portal`) kullanıcı adı ve şifresiyle giriş yapar.</li>
 <li><strong>[İzinlerim]</strong> sekmesinden hızlıca yeni izin talebi gönderir veya onaylı izinlerinin listesini görüntüler.</li>
 <li>Kurum genel evrak biriminden resmi EBYS onay yazısı çıktığında, izin satırındaki <strong>[EBYS Kaydet]</strong> formuna resmi evrak sayısı ve tarihini girer.</li>
 <li>Sistem ilk evrak kaydında izni doğrudan <strong>'RESMİ ONAYLI'</strong> statüsüne yükseltir ve masaüstü yönetim tablosuna anında yansıtır.</li>
 </ol>
 </div>

## Sıkça Sorulan Sorular (SSS) {#faq}

:::faq
### Şua izni hak etmek için kaç saat fiili radyasyon çalışması gerekir?
Mevzuat ve RADPYS kural motoru gereğince (RED-IZN-01), radyasyon denetimli alanlarında fiilen çalışılan <strong>her 50 saatlik süre 1 günlük şua izni kazandırır</strong>. Yıllık toplam hakediş en fazla <strong>30 takvim günüdür</strong>. Bir takvim yılında çalışılan süreler karşılığında kazanılan şua izni, takip eden yılda kullandırılır.

### İzin talebi gönderirken neden 'Nöbet Çakışması Uyarısı' alıyorum?
RADPYS, nöbet hizmetlerinin aksamaması için izin motoru ile nöbet planlama modülünü entegre çalıştırmaktadır (RED-IZN-02). Talep ettiğiniz tarihlerde aktif nöbet çizelgesinde üzerinize yazılmış bir nöbet görevi bulunuyorsa izin talebi engellenir. Bu durumda önce nöbet sorumlunuzla görüşerek nöbetinizi devretmeli veya takas etmelisiniz.

### Onaylanmış veya Resmi Onaylı bir izni tablodan silebilir miyim?
Hayır. Resmi denetim izini korumak amacıyla onaylanmış veya resmi EBYS numarası işlenmiş izinlerin doğrudan silinmesi engellenmiştir. Eğer personelin izni iptal edilecekse <strong>[İptal Et]</strong> butonu kullanılır. Bu işlem izin kaydını silmeden iptal eder ve düşülen günleri personelin kalan bakiye havuzuna otomatik olarak iade eder.

### Geçmiş yıldan kaç gün izin devredilebilir? Cari yıl içinde devir yapılır mı?
Devir aktarımı yalnızca takvim yılı tamamlanmış geçmiş yıllar için uygulanabilir. Devam eden cari yıl bitmeden yeni yıla devir yapılamaz. Kurum parametrelerine göre devredilebilecek azami yıllık izin süresi <strong>en fazla 5 gündür</strong>. Tavanı aşan kalan izin günleri mevzuat gereğince yeni yıla devretmez ve dondurulur.
:::
