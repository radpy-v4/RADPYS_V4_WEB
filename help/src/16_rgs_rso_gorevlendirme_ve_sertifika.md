---json
{
  "pageTitle": "16. RGS / RSO Görevlendirme, Yetkilendirme ve Sertifika Takibi — RADPYS v4 Kullanım Kılavuzu",
  "h1": "RGS / RSO Görevlendirme ve Sertifika Takibi",
  "lead": "Nükleer Düzenleme Kurumu (NDK) mevzuatı gereğince sağlık kuruluşlarında iyonlaştırıcı radyasyon kaynaklarıyla çalışan birimlerde bulunması zorunlu olan <strong>Radyasyon Güvenliği Sorumlusu (RGS)</strong>, <strong>RGS Yardımcısı</strong> ve <strong>Radyasyondan Korunma Sorumlusu (RSO)</strong> personellerinin resmi atamalarını, görev sürelerini, NDK sertifika numaralarını, vize/geçerlilik tarihlerini ve KVKK uyumlu şifreli atama evraklarını dijital ortamda yöneten, denetleyen ve erken uyarı alarmları üreten modüldür.",
  "overviewId": "genel-bakis",
  "heroStyle": "gradient",
  "badges": []
}
---

## Vizyonder Hızlı Karar Reçetesi (RGS/RSO Atama Özeti) {#hizli-recete}

:::recipe Vizyonder Hızlı Karar Reçetesi (RGS/RSO Atama Özeti) | 20 SANİYELİK AKIŞ
### 1. Personeli ve Görev Türünü Seçin | cyan
RGS, RGS Yardımcısı veya RSO rolünü seçin. Süreli görevlendirmelerde bitiş tarihi, kurum kadrosu için ise Süresiz Görev seçeneğini işaretleyin.

### 2. NDK Sertifika No ve Vize Takibi | emerald
NDK resmi sertifika numarasını ve 5 yıllık geçerlilik tarihini girin. 60 ve 30 gün kala sistem otomatik sarı/kırmızı erken uyarılar üretir.

### 3. Evrak Kasasına Şifreli Yükleme | blue
Resmi başhekimlik atama yazısını veya NDK sertifika PDF'ini yükleyin. Dosya AES-256 ile şifrelenir; görev silinse dahi arşiv kanıtı korunur.
:::

## 02 Mimari ve İş Akış Şeması {#mimari}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Görevlendirme tanımlama, süre denetimi, NDK sertifika motoru ve evrak kasası işleyiş adımları:
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 overflow-x-auto">

```mermaid
flowchart TD
 A["RGS / RSO Modül Girişi"] --> B["Ana Liste ve KPI Kokpiti"]
 B --> C["[Yeni Görevlendirme] Butonu"]
 B --> D["[Düzenle] / Çift Tıklama"]
 B --> E["[Belgeyi Aç] Butonu"]
 B --> F["[Dışa Aktar] Butonu"]
 
 C --> G["Personel, Görev Tipi ve Tarih Seçimi"]
 G --> H{"Süresiz Görev mi?"}
 H -- "Evet" --> I["Bitiş Tarihi Kapatılır (NULL)"]
 H -- "Hayır" --> J["Görev Bitiş Tarihi Tanımlanır"]
 
 I --> K["NDK Sertifika No ve Geçerlilik Tarihi"]
 J --> K
 
 K --> L{"Süresiz Sertifika mı?"}
 L -- "Evet" --> M["Geçerlilik Tarihi Kapatılır (NULL)"]
 L -- "Hayır" --> N["Sertifika Bitiş Tarihi Girilir"]
 
 M --> O["Evrak Kasasına Belge Yükleme (PDF/Resim)"]
 N --> O
 
 O --> P["[Kaydet] Butonu"]
 P --> Q{"Kullanıcı Onaya Tabi mi?"}
 Q -- "Evet" --> R["ApprovalService Onay Kuyruğuna Sevk"]
 Q -- "Hayır" --> S["rgs_gorevlendirmeler Tablosuna Kayıt"]
 
 S --> T["Dinamik Sertifika Durum Motoru"]
 T --> U["Kalan > 60 Gün: Geçerli (Yeşil)"]
 T --> V["31 - 60 Gün: Yaklaşıyor (Sarı)"]
 T --> W["≤ 30 Gün: Kritik Alarm (Turuncu)"]
 T --> X["Günü Geçmiş: Süresi Doldu (Kırmızı)"]
 T --> Y["Tarihsiz: Süresiz / Tanımsız (Mavi)"]
 
 E --> Z["AES-256 Şifreli Kasadan Çözme"]
 Z --> AA["İşletim Sisteminde Güvenli Görüntüleme"]
```

 </div>

## 03 Arayüz Bileşenleri ve 5N1K Kural Çözümlemesi {#bilesenler}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Arayüzdeki her bir butonun, göstergenin ve kutunun mevzuat gerekçesi ve arka plan çalışma kuralı:
 </p>
 </div>

| NE? (Bileşen & Ayar) | NEDEN? (Amaç) | NEREDE? | NASIL ÇALIŞIR? | NE ZAMAN? | KİM? | DURUM |
| --- | --- | --- | --- | --- | --- | --- |
| [Aktif Görevli KPI] | Kuruluşta fiilen görev yapan toplam RGS/RSO sayısını izlemek. | Üst KPI Şeridi | aktif = 1 olan kayıtları toplar | Sürekli canlı | Tüm Kullanıcılar | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Geçerli Sertifika KPI] | Vize süresi 60 günden fazla veya süresiz olan sertifikaları izlemek. | Üst KPI Şeridi | gecerli + suresiz kayıtları toplar | Sürekli canlı | RGS / İK | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Süresi Yaklaşan KPI] | Yenileme/vize zamanı gelen sertifikaları önceden fark etmek. | Üst KPI Şeridi | kalan gün ≤ 60 olanları sayar | Vize periyodunda | RGS / Yönetici | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Süresi Dolmuş KPI] | Mevzuata aykırı olarak sertifikası dolmuş personeli tespit etmek. | Üst KPI Şeridi | geçerlilik tarihi bugünden eski olanlar | Kritik alarmda | RGS / Yönetici | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Arama Çubuğu] | Personel, TC veya sertifika numarasına göre anlık süzme yapmak. | Filtre Paneli | _apply_client_filter dinamik süzgeci | Liste incelenirken | Tüm Kullanıcılar | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Görev Tipi Filtresi] | RGS, RGS Yardımcısı veya RSO'ları ayrı ayrı listelemek. | Filtre Paneli | RGS, RGS_YARDIMCISI, RSO sorgusu | Rol incelemesinde | RGS / İK | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Yeni Görevlendirme] | Yeni bir personel için atama ve sertifika kaydı açmak. | Araç Çubuğu | RgsGorevlendirmeDialogController modalini açar | Atama yapıldığında | RGS / Admin | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Düzenle] | Süre, sertifika veya evrak bilgilerini güncellemek. | Araç Çubuğu | Personel kilitlenir, mevcut veriler yüklenir | Değişiklik yapıldığında | RGS / Admin | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Sil] | Hatalı girilen görevlendirme kaydını kaldırmak. | Araç Çubuğu | Onay alır; evrak kasasındaki belge korunur | İptallerde | RGS / Admin | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Atama Yazısı Üret (PDF)] | Kurum antetli resmi RGS/RSO görevlendirme ve atama yazısı taslağı oluşturmak. | Araç Çubuğu | Antetli resmi PDF taslağı üretir, evrak kasasına bağlar ve İmza Bekliyor rozeti atar | Görevlendirme tanımlandığında | RGS / Admin | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [İmzalı Belge Yükle] | Islak veya e-imzalı resmi atama belgesini sisteme yüklemek. | Araç Çubuğu | İmzalı nüshayı v2 olarak kaydeder; eski taslağı silmeyip sessizce arşive aktarır | İmzalar tamamlandığında | RGS / Admin | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Belgeyi Aç] | Atama yazısını veya NDK sertifikasını ekranda incelemek. | Araç Çubuğu | Şifreli kasadan hafızada çözerek işletim sistemi görüntüleyicisinde açar | Evrak kontrolünde | Tüm Yetkililer | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Belge Geçmişi] | Evrakın taslaktan imzalıya kadar tüm kronolojik sürümlerini ve SHA-256 dijital mührünü görmek. | Araç Çubuğu | Belge tarihçesi penceresini açar; arşivdeki eski taslağı veya imzalı evrakı tek tıkla açtırır | Denetim ve teyit anında | RGS / Denetçi / Admin | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Belge Durumu Rozeti] | Evrakın yasal imza ve arşiv safhasını anlık takip etmek. | Tablo Kolonu | İmzalı (Yeşil), İmza Bekliyor (Sarı), Ek Belge (Mavi), Belge Yok (Gri) rozetleri çizer | Tablo listelendiğinde | Tüm Kullanıcılar | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |
| [Dışa Aktar] | Görevlendirme ve sertifika listesini CSV tablosuna dökmek. | Araç Çubuğu | UTF-8 BOM CSV dosyası oluşturur | Denetimlerde | RGS / İK / Yönetici | <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Eksiksiz</span> |

## 04 KPI Göstergeleri ve Karar Destek Kokpiti {#kpi-kokpit}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Sayfa açıldığında kurum genelindeki resmi atama ve sertifika durumunu özetleyen anlık sayaçlar:
 </p>
 </div>
 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
 <div class="p-5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 space-y-2">
 <span class="text-xs font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider">Aktif Görevli</span>
 <div class="text-3xl font-extrabold text-cyan-900 dark:text-cyan-100 font-mono">Toplam Aktif</div>
 <p class="text-xs text-cyan-800 dark:text-cyan-300 leading-relaxed">
 Kurumda fiilen yürürlükte olan toplam RGS, RGS Yardımcısı ve RSO görevlendirmelerinin adedi.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
 <span class="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">Geçerli Sertifika</span>
 <div class="text-3xl font-extrabold text-emerald-900 dark:text-emerald-100 font-mono">Güvenli Vize</div>
 <p class="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
 Geçerlilik süresine 60 günden fazla süre bulunan veya mevzuata göre süresiz tanımlanmış sertifikalar.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2">
 <span class="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Süresi Yaklaşan</span>
 <div class="text-3xl font-extrabold text-amber-900 dark:text-amber-100 font-mono">≤ 60 Gün Kaldı</div>
 <p class="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
 Vize bitişine 60 gün ve daha az kalmış görevliler. NDK vize yenileme başvuru sürecinin başlatılması gerekir.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 space-y-2">
 <span class="text-xs font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wider">Süresi Dolmuş</span>
 <div class="text-3xl font-extrabold text-rose-900 dark:text-rose-100 font-mono">Vizesi Bitmiş</div>
 <p class="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
 Sertifika geçerliliği sona ermiş personel. Yasal sorumluluğun aksamaması için derhal müdahale edilmelidir.
 </p>
 </div>
 </div>

## 05 Hızlı Arama ve Çok Kriterli Filtreleme {#filtreleme}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Kayıtların anlık ve sunucu taraflı filtrelenmesi:
 </p>
 </div>
 <div class="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
 <ol class="list-decimal list-inside space-y-2.5 font-medium">
 <li><strong>Anlık Arama (`searchInput`):</strong> Personelin adı, soyadı, TC Kimlik numarası, görevli olduğu departman veya NDK sertifika no yazıldığında tablo satırları anında süzülür. Arama kutusunun sağındaki çarpı butonuyla metin tek tıkla temizlenebilir.</li>
 <li><strong>Görev Tipi Açılır Kutusu (`comboGorevTipi`):</strong> <code class="font-mono text-xs">Tüm Görev Tipleri</code>, <code class="font-mono text-xs">RGS (Radyasyon Güvenliği Sorumlusu)</code>, <code class="font-mono text-xs">RGS Yardımcısı</code> veya <code class="font-mono text-xs">RSO (Radyasyon Korunma Sorumlusu)</code> seçilerek birimdeki belirli sorumlular listelenir.</li>
 <li><strong>Sertifika Durumu Açılır Kutusu (`comboDurum`):</strong> <code class="font-mono text-xs">Geçerli</code>, <code class="font-mono text-xs">Kritik (≤30 Gün)</code>, <code class="font-mono text-xs">Yaklaşıyor (≤60 Gün)</code>, <code class="font-mono text-xs">Süresi Doldu</code> ve <code class="font-mono text-xs">Süresiz / Tanımsız</code> seçenekleri üzerinden vize yenileme kontrolü yapılır.</li>
 <li><strong>Aktiflik Açılır Kutusu (`comboAktif`):</strong> Varsayılan olarak <code class="font-mono text-xs">Sadece Aktifler</code> seçilidir. Arşivlenmiş veya görevi tamamlanmış eski sorumluları görmek için <code class="font-mono text-xs">Pasifler</code> veya <code class="font-mono text-xs">Tümü</code> durumuna geçilebilir.</li>
 </ol>
 </div>

## 06 Yeni RGS / RSO Görevlendirmesi ve NDK Sertifikası Tanımlama {#yeni-gorevlendirme}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Adım adım yeni atama ve sertifika veri giriş prosedürü:
 </p>
 </div>
 <div class="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
 <ol class="list-decimal list-inside space-y-3 font-medium">
 <li>Üst araç çubuğundaki <strong>[Yeni Görevlendirme]</strong> butonuna tıklayın. Açılan modal pencerede:</li>
 <li><strong>Personel Seçimi (`comboPersonel`):</strong> Kurumda kayıtlı aktif personeller arasından görevlendirilecek kişiyi seçin. Açılır liste personelin ad-soyad, TC Kimlik ve unvan bilgilerini gösterir.</li>
 <li><strong>Görev Tipi (`comboGorevTipi`):</strong> Personelin resmi atama pozisyonunu seçin (*RGS, RGS Yardımcısı* veya *RSO*).</li>
 <li><strong>Görev Başlangıç Tarihi (`dateBaslangic`):</strong> Atamanın yürürlüğe girdiği resmi tarihi takvimden belirleyin.</li>
 <li><strong>Görev Bitiş Tarihi ve Süresiz Görev Kutusu:</strong> Belirli süreli bir atamaysa bitiş tarihini girin. Daimi bir görevlendirmeyse <strong>[x] Süresiz Görev</strong> kutusunu işaretleyin (bitiş alanı kilitlenir ve DB'ye NULL işlenir).</li>
 <li><strong>Sertifika / Belge No (`txtSertifikaNo`):</strong> NDK tarafından tanzim edilen sertifika numarasını girin (Örn: <code class="font-mono text-xs">NDK-RGS-2026-0012</code>).</li>
 <li><strong>Sertifika Geçerlilik Tarihi ve Süresiz Sertifika Kutusu:</strong> NDK vize bitiş tarihini girin. Muafiyetli özel durumlarda <strong>[x] Süresiz Sertifika</strong> işaretlenebilir.</li>
 <li><strong>Evrak Kasasına Belge Yükleme (`btnUploadDoc`):</strong> <strong>[Dosya Seç (PDF / Resim)]</strong> butonuna tıklayarak taranmış atama yazısı veya NDK sertifika belgesini ekleyin. Dosya boyutu ve adı yeşil renkle onaylanır.</li>
 <li><strong>Aktiflik Onayı ve Notlar:</strong> Görev fiilen yürütülüyorsa <strong>[x] Görevlendirme Aktif Olarak Yürütülüyor</strong> kutusunu işaretli bırakın. Resmi yazı sayı ve tarihini <strong>Notlar</strong> kutusuna yazın.</li>
 <li><strong>[Kaydet]</strong> butonuna basarak işlemi tamamlayın.</li>
 </ol>
 </div>

## Ekran Konumları ve Görsel Rehber {#ekran-goruntuleri}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 RGS / RSO görevlendirme listesi, vize takip rozetleri ve yeni atama tanımlama penceresi:
 </p>
 </div>

![RGS ve RSO Görevlendirme Ana Liste Ekranı | Radyasyon Güvenliği > RGS / RSO Görevlendirme ve Sertifika | Ana Liste & 5 Kademeli Vize Uyarı Tablosu](assets/img/16_1_rgs_gorevlendirme_ana_liste.png "<span><strong>Simülasyon Notu:</strong> Kurumdaki aktif RGS, RGS Yardımcısı ve RSO atamalarının, NDK sertifika vize sürelerinin ve imzalı belge durumlarının izlendiği ana tablo.</span>")

![Yeni RGS RSO Görevlendirme Diyaloğu | RGS / RSO Görevlendirme > [Yeni Görevlendirme] Diyaloğu | Yeni Görevlendirme & Sertifika Formu](assets/img/16_2_rgs_gorevlendirme_dialog.png "<span><strong>Simülasyon Notu:</strong> Personel seçimi, görev tipi, NDK sertifika numarası, vize geçerlilik tarihi ve şifreli evrak kasasına belge yükleme formu.</span>")

## 07 NDK Sertifika Geçerlilik Süreleri ve 5 Kademeli Erken Uyarı Motoru {#erken-uyari}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Sistemin NDK vize sürelerini denetleyen ve tablolarda otomatik renklendirme uygulayan dinamik motoru:
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
 <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5">
 <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">Geçerli</span>
 <div class="font-bold text-sm text-emerald-900 dark:text-emerald-100">Kalan &gt; 60 Gün</div>
 <p class="text-[11px] text-emerald-800 dark:text-emerald-300">Sertifika vizesi güvenli aralıktadır, herhangi bir işlem gerekmez.</p>
 </div>
 <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-1.5">
 <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Yaklaşıyor</span>
 <div class="font-bold text-sm text-amber-900 dark:text-amber-100">31 - 60 Gün Kaldı</div>
 <p class="text-[11px] text-amber-800 dark:text-amber-300">Sertifika vize yenileme dönemi yaklaşmaktadır; eğitim ve evrak hazırlıkları başlatılmalıdır.</p>
 </div>
 <div class="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50 space-y-1.5">
 <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">Kritik</span>
 <div class="font-bold text-sm text-orange-900 dark:text-orange-100">≤ 30 Gün Kaldı</div>
 <p class="text-[11px] text-orange-800 dark:text-orange-300">Vize süresi bitmek üzeredir. NDK vize başvurusu ivedilikle sonuçlandırılmalıdır.</p>
 </div>
 <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 space-y-1.5">
 <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200">Süresi Doldu</span>
 <div class="font-bold text-sm text-rose-900 dark:text-rose-100">Tarih Geçmiş</div>
 <p class="text-[11px] text-rose-800 dark:text-rose-300">Sertifika geçerliliği sona ermiştir. Yasal olarak imza yetkisi askıya alınmalıdır.</p>
 </div>
 <div class="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/50 space-y-1.5">
 <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Süresiz</span>
 <div class="font-bold text-sm text-cyan-900 dark:text-cyan-100">Muaf / Daimi</div>
 <p class="text-[11px] text-cyan-800 dark:text-cyan-300">Geçerlilik süresi sınırlaması bulunmayan özel yetkilendirme belgeleri.</p>
 </div>
 </div>

## 08 Şifreli KVKK Evrak Kasası Entegrasyonu {#evrak-kasasi}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Atama yazıları ve NDK sertifikalarının AES-256 şifreli güvenli kasada saklanması:
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
 <p>
 Yüklenen atama belgeleri ve NDK sertifikaları sunucuda veya yerel diskte açık dosya olarak tutulmaz. RADPYS KVKK Evrak Kasası (<code class="font-mono text-xs">DocumentService</code>); dosyaları <strong>AES-256 Fernet</strong> algoritmasıyla şifreleyerek <code class="font-mono text-xs">personel_belgeler</code> tablosuna kaydeder.
 </p>
 <ul class="list-disc list-inside space-y-2 font-medium">
 <li><strong>Belgeyi Görüntüleme:</strong> Tablodan ilgili görevlendirmeyi seçip <strong>[Belgeyi Aç]</strong> butonuna tıklayın.</li>
 <li><strong>Hafızada Güvenli Çözme:</strong> Sistem veritabanındaki şifreli blobu hafızada çözer, geçici güvenli bir dosyaya aktarır ve varsayılan işletim sistemi görüntüleyicisinde açar.</li>
 <li><strong>Yasal Arşiv Koruma Kilidi:</strong> Bir görevlendirme kaydı silinse dahi, personelin kasadaki şifreli sertifika dosyası yasal denetim izi amacıyla veritabanında saklanmaya devam eder.</li>
 </ul>
 </div>

## 09 Görevlendirme Düzenleme, Silme ve Onay Kuyruğu {#duzenleme-onay}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Veri bütünlüğü kilitleri ve onay sistemi mekanizması:
 </p>
 </div>
 <div class="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
 <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-1.5">
 <span class="font-bold text-amber-900 dark:text-amber-200 text-sm"> Personel Değiştirme Kısıtı (Veri Bütünlüğü Kilidi)</span>
 <p class="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
 Düzenleme modunda <strong>Personel</strong> açılır kutusu güvenlik gerekçesiyle kilitlenir (salt okunur). Atama başka bir personele devredilecekse eski kayıt pasife alınmalı ve yeni personel için sıfırdan görevlendirme açılmalıdır.
 </p>
 </div>
 <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 space-y-1.5">
 <span class="font-bold text-blue-900 dark:text-blue-200 text-sm"> Onay Kuyruğu Entegrasyonu (ApprovalService)</span>
 <p class="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
 İşlemi yürüten personelin kullanıcı rolünde onay şartı varsa (<code class="font-mono text-xs">onay_gerektirir = 1</code>), yapılan ekleme, düzenleme veya silme işlemi doğrudan veritabanına işlenmez; yöneticinin onay havuzuna gönderilir. Yetkili amir onayladığında yürürlüğe girer.
 </p>
 </div>
 </div>

## 10 Resmi Denetim Listesi CSV / Excel Dışa Aktarımı {#disa-aktar}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 NDK denetimleri ve kurum içi raporlama için tablo verisini dışa aktarma:
 </p>
 </div>
 <div class="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
 <p>
 Üst araç çubuğundaki <strong>[Dışa Aktar]</strong> butonuna tıklandığında; tabloda filtrelenmiş tüm kayıtlar (Personel Adı, TC Kimlik No, Departman, Görev Tipi, Başlangıç, Bitiş, Sertifika No, Geçerlilik Tarihi, Sertifika Durumu ve Belge Durumu) UTF-8 BOM destekli ve noktalı virgül (;) ayracıyla CSV dosyası olarak kaydedilir.
 </p>
 <p class="text-xs text-slate-500 dark:text-slate-400">
 * Dosya Microsoft Excel, LibreOffice Calc veya benzeri elektronik tablo programlarında Türkçe karakter bozulması olmadan doğrudan açılabilir.
 </p>
 </div>

## 11 Hibrit Arayüz ve Web Portalı Görünümü {#hibrit-web}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Masaüstü tam yönetim kokpiti ile Web Portalı arasındaki rol ve veri paylaşımı:
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
 <h3 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
 <span class="w-3 h-3 rounded-full bg-cyan-500"></span>
 <span>Masaüstü Uygulaması (Yönetim & İK)</span>
 </h3>
 <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
 Atama tanımlarının yapıldığı, NDK sertifika numaralarının girildiği, evrak kasasına PDF/resim atama olurlarının yüklendiği, geçerlilik sürelerinin takip edildiği, erken uyarı alarmlarının izlendiği ve denetim listelerinin dışa aktarıldığı tam yetkili operasyonel merkezdir.
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
 <h3 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
 <span class="w-3 h-3 rounded-full bg-blue-500"></span>
 <span>Web Portalı (Özlük & Denetim Kokpiti)</span>
 </h3>
 <ul class="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 list-disc list-inside">
 <li><strong>Personel Profili (<code class="font-mono text-[10px]">profile.routes.ts</code>):</strong> Personel web portala girdiğinde atanmış olduğu RGS / RSO görevlerini ve sertifika geçerlilik durumunu görebilir.</li>
 <li><strong>NDK Denetim Kokpiti (<code class="font-mono text-[10px]">DenetimHazirlikDashboard.tsx</code>):</strong> Radyoloji ve nükleer tıp denetim hazırlık panellerinde kurumun aktif RGS görevlendirme oluru ve eğitim sertifikası uygunluk sorgusu yapılır.</li>
 </ul>
 </div>
 </div>

## 12 Hata ve Uyarı Mesajları Çözümleme Tablosu {#sorun-giderme}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Formda veya işlem esnasında karşılaşılabilecek uyarılar ve pratik çözüm adımları:
 </p>
 </div>

| Hata / Uyarı Mesajı | Tetikleyen Durum | Çözüm Adımı |
| --- | --- | --- |
| "Lütfen bir personel seçiniz." | Formda personel açılır kutusu boş bırakıldığında. | Açılır kutudan görevlendirilecek personeli seçin. |
| "Görev bitiş tarihi, başlangıç tarihinden önce olamaz." | Bitiş tarihi başlangıçtan eski seçildiğinde. | Bitiş tarihini başlangıçtan sonraya ayarlayın veya [x] Süresiz Görev seçin. |
| "Lütfen düzenlemek için bir kayıt seçiniz." | Tablodan satır seçilmeden [Düzenle] tıklandığında. | Düzenlemek istediğiniz satırı farenin sol tuşuyla seçin. |
| "Bu kayda ait eklenmiş bir evrak / sertifika bulunmuyor." | Belgesi olmayan kayıtta [Belgeyi Aç] tıklandığında. | Kaydı [Düzenle] ile açıp [Dosya Seç] ile resmi belgeyi yükleyin. |
| "Belge dosyası bulunamadı veya açılamadı." | Kasada kayıtlı dosya bulunamadığında veya hasarlı olduğunda. | Belgeyi yeniden yükleyin veya sistem yöneticisine danışın. |
| "Dışa aktarılacak kayıt bulunmuyor." | Tablo boşken [Dışa Aktar] tıklandığında. | Filtreleri gevşeterek ekranda kayıt görünmesini sağlayın. |

## RGS/RSO Görevlendirme & Mit Avcısı (Kritik Kurallar) {#mit-avcilari}

<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
 <div class="rounded-2xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-50/50 via-white to-slate-50 dark:from-red-950/20 dark:via-slate-900 dark:to-slate-900 p-5 shadow-sm">
 <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
 </svg>
 <span>Yaygın Yanılgı (Mit 1)</span>
 </div>
 <p class="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-3 italic">
 "Bir görevlendirme kaydı tablodan silindiğinde personelin yüklenmiş resmi sertifika belgesi de sistemden silinir."
 </p>
 <div class="border-t border-red-200/60 dark:border-red-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Sağlık bilgi güvenliği ve NDK denetim izi gereğince görevlendirme silinse dahi personelin şifreli sertifika evrakı (<code class="font-mono text-xs">personel_belgeler</code>) arşivde kanıt olarak saklanmaya devam eder.
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
 "RGS sertifikasının 5 yıllık vize süresi bittiğinde sistem sessiz kalır; denetim olana kadar fark edilmeyebilir."
 </p>
 <div class="border-t border-amber-200/60 dark:border-amber-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Sistem 5 kademeli uyarı motoruna sahiptir; vize bitimine 60 gün ve 30 gün kala sarı, süre dolduğunda kırmızı alarm üretir ve yönetici aksiyon merkezinde bildirim açar.
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
 "Düzenleme ekranında personel kutusu değiştirilerek aynı kayıt üzerinden başka bir hekime görev devri yapılabilir."
 </p>
 <div class="border-t border-blue-200/60 dark:border-blue-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Yasal denetim izi güvenliği nedeniyle düzenleme modunda personel seçimi bilerek kilitlenmiştir. Görev devrinde mevcut kayıt pasife alınmalı ve yeni personel için sıfırdan kayıt açılmalıdır.
 </p>
 </div>
 </div>
 </div>

## 13 Sıkça Sorulan Sorular (SSS) {#sss}

:::faq
### Bir personel aynı anda birden fazla aktif görevlendirmeye sahip olabilir mi?
<strong>Evet.</strong> Kurum yapısına göre bir personel farklı birimlerde veya sorumluluklarda (örneğin Nükleer Tıp biriminde RGS, Radyoloji biriminde RGS Yardımcısı) birden fazla aktif görevlendirme kaydına sahip olabilir.

### NDK sertifikaları için süresiz sertifika seçeneği ne zaman kullanılır?
NDK sertifikaları kural olarak 5 yıllık periyodik vizeye tabidir. Ancak kurum içi görevlendirme yazıları (başhekimlik olurları) veya vize muafiyeti bulunan özel yasal yetkilendirmeler için [x] Süresiz Sertifika seçeneği kullanılabilir.

### Bir görevlendirmeyi sildiğimde personelin yüklenmiş sertifika belgesi de silinir mi?
<strong>Hayır.</strong> Görevlendirme kaydı silinse dahi personelin KVKK evrak kasasındaki şifreli sertifika dosyası (<code class="font-mono text-xs">personel_belgeler</code>) geçmiş denetim kanıtı ve yasal arşiv koruma amacıyla silinmeyip saklanmaya devam eder.

### Düzenleme ekranında personel seçimi neden değiştirilemiyor?
Veri bütünlüğü ve denetim izi güvenliği gerekçesiyle düzenleme modunda personel seçimi bilerek kilitlenir. Görevin başka bir personele devri söz konusuysa mevcut kayıt pasife alınmalı ve yeni personel için sıfırdan kayıt açılmalıdır.
:::
