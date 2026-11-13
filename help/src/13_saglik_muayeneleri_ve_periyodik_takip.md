---json
{
  "pageTitle": "13. Radyasyon Çalışanları Sağlık Muayeneleri ve Periyodik Takip — RADPYS v4 Kullanım Kılavuzu",
  "h1": "13. Sağlık Muayeneleri ve Periyodik Takip",
  "lead": "Radyasyonla çalışan personelin işe giriş ve periyodik sağlık gözetim süreçlerini, iki aşamalı klinik iş akışını (Ön Hazırlık & Sevk ile Hekim Kararı & Arşivleme), Sağlık Bakanlığı ve NDK standartlarındaki resmi iki sayfalık EK-1 A4 PDF sevk formunu, üç temel uzmanlık branşının (Göz, Dahiliye, Dermatoloji) klinik değerlendirmelerini, otomatik randevu takvimini ve revizyon denetim izini yöneten modüldür.",
  "overviewId": "genel-bakis",
  "badges": [
    {
      "text": "MODÜL 13",
      "tone": "cyan"
    },
    {
      "text": "NDK & Sağlık Bakanlığı EK-1 Mevzuatı",
      "tone": "emerald"
    },
    {
      "text": "İki Aşamalı İş Akışı",
      "tone": "indigo"
    },
    {
      "text": "Resmi EK-1 A4 PDF",
      "tone": "blue"
    }
  ]
}
---

## Vizyonder Hızlı Karar Reçetesi (Klinik Takip & İSG Özeti) {#hizli-recete}

:::recipe Vizyonder Hızlı Karar Reçetesi (Klinik Takip & İSG Özeti) | 20 SANİYELİK AKIŞ

### 1. Aşama: Ön Hazırlık & Sevk | cyan

[Yeni Sevk Başlat] butonuyla personel seçimi, maruziyet, anamnez soruları ve 12 belirti/bulgu girilerek sevk kaydı oluşturulur; resmi 2 sayfalık A4 EK-1 formu otomatik üretilir.

### 2. Poliklinik & Laboratuvar Taraması | emerald

Çıktısı alınan EK-1 formu ile polikliniklere (Göz, Dahiliye, Cildiye ve Tam Kan Sayımı) sevk yapılır; uzman hekimler Sayfa 2'deki boş kutuları el yazısıyla doldurup kaşeler.

### 3. Aşama: Hekim Kararı & Arşivleme | blue

[Hekim Kararı] butonuyla poliklinik sonuçları ve nihai hekim kararı işlenir; ıslak imzalı taranmış rapor şifreli kasaya yüklenir. 30 gün kala sarı uyarı verilir.
:::

## Arayüz Bileşenleri ve 5N1K Tablosu {#bilesenler}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Sağlık Muayeneleri modülündeki ekran kontrolleri, butonlar ve branş imza alanlarının işlevsel kullanım kılavuzu:
 </p>
 </div>

| Bileşen / Buton | Türü | Ne İşe Yarar? (Ne?) | Kim Kullanır? (Kim?) | Ne Zaman Kullanılır? (Ne Zaman?) | Nerede Yer Alır? |
| --- | --- | --- | --- | --- | --- |
| [Yeni Sevk Başlat] | Buton | 1. Aşama Ön Hazırlık ve Sevk modalını açar; personel seçimi, anamnez soruları ve 12 belirti girişiyle sevk kaydı oluşturur, hekim ve çalışan paneline anlık bildirim çekmecesi uyarısı iletir ve resmi iki sayfalık kilitli EK-1 PDF belgesini üretir. | Hekim / RKS / İSG Sorumlusu | Personelin periyodik muayene veya sevk süreci başlatıldığında | Liste Araç Çubuğu (Sol Üst) |
| [Hekim Kararı] | Buton | 2. Aşama Hekim Kararı modalını açar; polikliniklerden dönen branş muayenelerini (Göz, Dahiliye, Cildiye), laboratuvar bulgularını ve nihai hekim kararını işler; taranmış ıslak imzalı raporu şifreli kasaya arşivler. | İşyeri Hekimi / RKS | Poliklinik tetkik sonuçları tamamlanıp kesin karar verileceğinde (veya çift tık) | Liste Araç Çubuğu |
| [Resmi EK-1 PDF İndir] | Dışa Aktarma | Sağlık Bakanlığı ve NDK mevzuat formatında (docs/21.5.7077_Parça5.pdf) 2 sayfalık A4 resmi sevk ve muayene belgesini üretir. Sayfa 2 poliklinik hekimlerinin elle doldurması için dürüstçe boş sunulur. | Tüm Yetkililer | Sevk belgesi bastırılacağı veya dijital arşivleneceğinde | Sevk Formu / Liste Araç Çubuğu |
| [Geçmiş] | Buton | Personelin geçmiş yıllardaki tüm muayenelerini listeler. | Hekim / Denetçi | Personel geçmişi kıyaslanırken | Liste Araç Çubuğu |
| [Sil] | Buton | Hatalı girilmiş muayeneyi revizyon günlüğüne yazarak siler. | Süpervizör / Admin | Mükerrer veya yanlış kayıt iptalinde | Liste Araç Çubuğu |
| [Detay] | Buton | Seçili muayenenin branş bulguları ve rapor dosyasını açar. | Tüm Yetkililer | Klinik notlar incelenirken (veya çift tık) | Liste Araç Çubuğu |
| [Geçmiş] | Buton | Personelin geçmiş yıllardaki tüm muayenelerini listeler. | Hekim / Denetçi | Personel geçmişi kıyaslanırken | Liste Araç Çubuğu |
| [Sil] | Buton | Hatalı girilmiş muayeneyi revizyon günlüğüne yazarak siler. | Süpervizör / Admin | Mükerrer veya yanlış kayıt iptalinde | Liste Araç Çubuğu |
| [Arama Kutusu] | Giriş Alanı | Ad, soyad, TC kimlik no veya muayene notlarında filtreler. | Tüm Kullanıcılar | Hızlı personel veya vaka aramasında | Filtre Paneli |
| [Muayene Durumu] | Açılır Kutu | Süresi Geçmiş, Yaklaşıyor (30 gün) ve Normal satırları süzer. | RKS / İSG Uzmanı | Kontrolü yaklaşan veya geçen personeller taranırken | Filtre Paneli |
| [TC / Ad ile Ara] | Tamamlayıcı | Personeli harf yazarak otomatik tamamlar; unvan/dep yansıtır. | Kullanıcı | Muayene formu doldurulurken | Ekleme Modalı |
| [Dahiliye / Derm / Göz İmza] | Onay Kutusu | İlgili branş hekiminin muayeneyi tamamlayıp imzaladığını teyit eder. | Hekim | Branş muayenesi bittiğinde | Bulgular Grubu |
| [Muayene Formu Seç/Aç/Sil] | Dosya Butonları | Rapor PDF/görselini şifreli kasaya kopyalar veya görüntüler. | Kullanıcı | Heyet evrakı arşivlenirken | Belge Satırı |

## Muayene Takip Listesi ve Görsel Durum İkonları {#liste-ekrani}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Personellerin periyodik muayene durumu, branş ikonları (Göz, Dahiliye, Dermatoloji) ve genel uygunluk kararlarının merkezi kokpiti:
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">

![Sağlık Muayene Listesi Ekranı](assets/img/muayene_list.png)

 <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
 <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
 <span class="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">UYGUN</span>
 <h3 class="text-sm font-bold text-slate-900 dark:text-white">Radyasyonla Çalışmaya Uygun</h3>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Tüm branş kontrollerinde engel durum tespit edilmemiş, personelin radyasyonlu ortamda çalışmasında sakınca bulunmayan rutin kayıtlar.
 </p>
 </div>
 <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
 <span class="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">KOŞULLU UYGUN</span>
 <h3 class="text-sm font-bold text-slate-900 dark:text-white">Şartlı & Yakın Takip</h3>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Hekim tarafından koruyucu ekipman şartı veya daha sık aralıklarla ara kontrol tavsiyesi konulmuş çalışanları simgeler.
 </p>
 </div>
 <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
 <span class="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300">SÜRESİ DOLDU</span>
 <h3 class="text-sm font-bold text-slate-900 dark:text-white">Periyodu Geçmiş Muayene</h3>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Bir sonraki kontrol tarihi üzerinden zaman geçmiş çalışanlar; sistem kırmızı uyarı verir ve gecikme raporunda listeler.
 </p>
 </div>
 </div>
 </div>

## İki Aşamalı Klinik Muayene Süreci ve Resmi EK-1 A4 PDF Çıktısı {#muayene-formu}

<div class="space-y-2">
 <div class="flex items-center gap-2">
 <span class="px-2.5 py-1 rounded text-xs font-mono font-bold bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300">RADPYS V4.0.3.30</span>
 <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Sağlık Bakanlığı & NDK Mevzuat Uyumlu</span>
 </div>
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Sağlık muayene formu klinik iş akışına uygun olarak iki bağımsız aşamaya ayrılmıştır: <strong>1. Ön Hazırlık & Sevk</strong> aşamasında anamnez ve belirtiler sorgulanıp resmi EK-1 formu üretilir; <strong>2. Hekim Kararı & Arşivleme</strong> aşamasında ise poliklinik bulguları işlenir ve ıslak imzalı tutanak KVKK şifreli kasasına arşivlenir.
 </p>
 </div>
 <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
 <div class="flex items-center justify-between">
 <span class="px-2.5 py-1 rounded text-xs font-mono font-bold bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300">1. AŞAMA</span>
 <span class="text-xs text-slate-400 font-medium">[Yeni Sevk Başlat]</span>
 </div>
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
 <span class="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
 <span>Ön Hazırlık, Anamnez ve Resmi EK-1 Sevk Formu</span>
 </h3>
 <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2.5 leading-relaxed">
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&bull;</span>
 <span><strong>Personel Seçimi & Maruziyet:</strong> Personel seçildiğinde TC kimlik, departman ve unvan otomatik gelir; haftalık çalışma saati ve geçmiş radyasyon çalışma süresi doğrulanır.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&bull;</span>
 <span><strong>Anamnez ve 12 Belirti Matrisi:</strong> Mevzuatta yer alan 12 klinik belirti/bulgu sorgulanır. Sevk kaydı oluşturulduğunda sistem otomatik olarak <strong>Resmi EK-1 A4 PDF</strong> belgesini üretir ve açar.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&bull;</span>
 <span><strong>Resmi EK-1 A4 PDF Çıktısı (docs/21.5.7077):</strong> Sağlık Bakanlığı ve NDK standardında 2 sayfalık resmi sevk ve muayene belgesi üretilir.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&bull;</span>
 <span><strong>Dürüst Boş Durum (Sıfır Sentetik Veri Kuralı):</strong> Sayfa 1'de çalışan künyesi ve beyanı basılırken; Sayfa 2'deki poliklinik muayene tabloları (El-Cilt, Malignite, Tam Kan Sayımı ve Katarakt) hekimin elle muayene yapıp doldurabilmesi için tamamen temiz ve boş bırakılır.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&bull;</span>
 <span><strong>Resmi Matbu Tipografi (Times New Roman):</strong> Şablon fontu resmi sağlık kurulu evrakı standardı olan Times New Roman ile hazırlanmış olup 4 sütunlu tam genişlikli kan sayımı matrisi sunar. Belge adı `EK1_Saglik_Muayene_{Ad_Soyad}_{TC}_{Tarih}.pdf` olarak standartlaşır.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&bull;</span>
 <span><strong>Otomatik Bildirim Çekmecesi & Hızlı Sevk Kartı:</strong> Personel "Sevk Edildi / Muayenede" durumuna alındığı anda masaüstü bildirim çekmecesine ve personelin web paneline anlık bildirim kartı iletilir. Bildirime tek tıkla tıklandığında personelin sağlık kartı doğrudan açılarak EK-1 formunun basılması ve poliklinik randevu hazırlığı garanti altına alınır.</span>
 </li>
 </ul>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
 <div class="space-y-3">
 <div class="flex items-center justify-between">
 <span class="px-2.5 py-1 rounded text-xs font-mono font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">2. AŞAMA</span>
 <span class="text-xs text-slate-400 font-medium">[Hekim Kararı]</span>
 </div>
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
 <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
 <span>Poliklinik Muayeneleri, Hekim Kararı ve KVKK Kasası</span>
 </h3>
 <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2.5 leading-relaxed">
 <li class="flex items-start gap-2">
 <span class="text-indigo-500 font-bold">&bull;</span>
 <span><strong>Poliklinik Sonuçlarının İşlenmesi:</strong> Dahiliye (Tam Kan Sayımı, tiroid), Dermatoloji (cilt/lezyon) ve Göz (lens/katarakt) polikliniklerinden dönen kaşeli sonuçlar ve imzalar sisteme işlenir.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-indigo-500 font-bold">&bull;</span>
 <span><strong>Nihai Hekim Kararı:</strong> İşyeri hekimi tarafından personelin radyasyon alanında çalışmasına dair genel kanaat (Uygun, Koşullu Uygun, Uygun Değil) belirlenir.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-indigo-500 font-bold">&bull;</span>
 <span><strong>KVKK Şifreli Evrak Kasası:</strong> Poliklinik hekimlerince kaşelenip imzalanan ıslak imzalı resmi EK-1 raporu taranarak sisteme yüklenir; AES-256 Fernet ile şifrelenerek güvenli evrak kasasında saklanır.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-indigo-500 font-bold">&bull;</span>
 <span><strong>Ferah ve Dengeli Liste Tablosu:</strong> Personel Adı, Birim ve Ünvan sütunları ekran genişliğini dengeli paylaşır; tarihler ve kararlar net genişliklerle kesilmeden ferah biçimde izlenir.</span>
 </li>
 </ul>
 </div>
 <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-500 space-y-1">
 <span class="font-bold text-slate-700 dark:text-slate-300">Tavsiyeler & Klinik Kanaat:</span>
 <p>Hekimin tıbbi kanaati, koruyucu donanım şerhleri veya ara kontrol tavsiyeleri `Tavsiyeler` metin kutusuna girilir ve detayda saklanır.</p>
 </div>
 </div>
 </div>

## İleri Tetkik Sevk Süreci ve Resmi Heyet Raporu Kısıtı {#ileri-tetkik}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Rutin periyodik kontrolde şüpheli bulgu saptandığında izlenen kurumsal sevk ve çalışma kısıtı protokolü:
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
 <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
 <span class="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">1. AŞAMA</span>
 <h3 class="text-sm font-bold text-slate-900 dark:text-white">Şüpheli Bulgu & İleri Tetkik Sevki</h3>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Periyodik muayenede branş hekimi tarafından *"Uygun Değil"* veya *"Koşullu Uygun"* kanaati belirtildiğinde, personel ilgili kliniğe ayrıntılı ileri tetkikler için sevk edilir.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
 <span class="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">2. AŞAMA</span>
 <h3 class="text-sm font-bold text-slate-900 dark:text-white">Resmi Sağlık Kurulu (Heyet) Kararı</h3>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 İleri tetkiklerin ardından Sağlık Kurulu toplanır. Personelin radyasyon ortamında çalışıp çalışamayacağı resmi Heyet Raporu tutanağına bağlanır.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
 <span class="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300">3. AŞAMA</span>
 <h3 class="text-sm font-bold text-slate-900 dark:text-white">Nöbet Muafiyeti & Çalışma Kısıtı</h3>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Heyet raporunda radyasyonsuz alanda çalışma kararı çıkarsa, Yönetici/RKS tarafından <strong>Modül 07</strong> üzerinden resmi çalışma kısıtı açılır ve nöbet motoru personeli korumaya alır.
 </p>
 </div>
 </div>

## Hibrit Arayüz ve Web Portalı Görünümü {#hibrit-portal}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Masaüstü klinik kayıt ve evrak yönetim merkezi ile web portalı sağlık göstergeleri karşılaştırması:
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <div class="flex items-center gap-3">
 <div class="p-2.5 rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-900/60 dark:text-cyan-300">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
 </div>
 <h3 class="text-base font-bold text-slate-900 dark:text-white">Masaüstü Yönetim İstemcisi (PySide6)</h3>
 </div>
 <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&check;</span>
 <span>Yeni muayene kaydı açma, branş sonuçları ve hekim imzalarını teyit etme.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&check;</span>
 <span>Taranmış sağlık heyet raporlarını AES-256 şifreli kasaya aktarma.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&check;</span>
 <span>Sağ tık ile personelin tüm kronolojik muayene geçmişini inceleme.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&check;</span>
 <span>Bildirim çekmecesinden tek tıkla sevk edilen personelin sağlık kartına doğrudan erişim.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-cyan-500 font-bold">&check;</span>
 <span>Değişiklik ve silme işlemlerinde revizyon günlüğü ve evrensel onay kuyruğu.</span>
 </li>
 </ul>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <div class="flex items-center gap-3">
 <div class="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
 </div>
 <h3 class="text-base font-bold text-slate-900 dark:text-white">Web & Mobil Portalı (SaglikDashboard)</h3>
 </div>
 <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
 <li class="flex items-start gap-2">
 <span class="text-emerald-500 font-bold">&check;</span>
 <span><strong>Sağlık Uyum Oranı (%):</strong> Kurum genelindeki personellerin muayene güncelliği.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-emerald-500 font-bold">&check;</span>
 <span><strong>Branş Dağılım Çizelgesi:</strong> Göz, Dahiliye ve Dermatoloji uygunluk oranları grafiği.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-emerald-500 font-bold">&check;</span>
 <span><strong>Muayene Yığılma Tahmini:</strong> 12 aylık periyotta beklenen kontrol randevu yoğunluğu.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-emerald-500 font-bold">&check;</span>
 <span><strong>Kişisel Sağlık Karnesi:</strong> Personelin bir sonraki kontrolüne kalan gün sayısını görmesi.</span>
 </li>
 <li class="flex items-start gap-2">
 <span class="text-emerald-500 font-bold">&check;</span>
 <span><strong>Sevk ve Muayene Bildirimleri:</strong> Muayeneye sevk edilen personele poliklinik hazırlık kartı ve EK-1 bilgilendirme uyarısı.</span>
 </li>
 </ul>
 </div>
 </div>

## Sağlık Muayeneleri Karar Destek Akış Şeması {#akis-diyagrami}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Periyodik kontrol planlamasından branş değerlendirmesi ve resmi heyet kısıtına kadar olan karar döngüsü:
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">

```mermaid
graph TD
 A["Personel Sağlık Gözetimi İhtiyacı"] --> B["Muayene Türü Seçimi"]
 B --> C{"Muayene Türü ve Periyodu"}
 C -- "Radyasyon / Periyodik" --> D["12 Aylık Otomatik Periyot"]
 C -- "Şua Muayenesi" --> E["6 Aylık Otomatik Periyot"]
 C -- "İşe Giriş" --> F["Tek Seferlik Temel Kontrol"]
 D --> G["3 Uzmanlık Branşı Değerlendirmesi"]
 E --> G
 F --> G
 G --> H["Göz Muayenesi (Lens / Katarakt)"]
 G --> I["Dahiliye (Hemogram / Tiroid)"]
 G --> J["Dermatoloji (Radyodermatit / Cilt)"]
 H --> K{"Tüm Branş Kararları Uygun mu?"}
 I --> K
 J --> K
 K -- "Evet (Uygun)" --> L["Geçerli / Normal Sağlık Durumu"]
 L --> M["Bir Sonraki Tarihin Hesaplanması ve Takvime İşlenmesi"]
 K -- "Hayır (Uygun Değil / Şüpheli)" --> N["İlgili Kliniğe İleri Tetkik Sevki"]
 N --> O{"İleri Tetkik ve Heyet Kararı"}
 O -- "Geçici / Tedavi Edilebilir" --> P["Kısa Süreli Kontrol ve Ara Takip"]
 O -- "Radyasyon Alanında Çalışamaz (Heyet Raporu)" --> Q["Modül 07 Çalışma Kısıtlarına İşleme ve Nöbet Muafiyeti"]
```

 </div>

## Sağlık Takibi & Mit Avcısı (Kritik Kurallar) {#mit-avcilari}

<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
 <div class="rounded-2xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-50/50 via-white to-slate-50 dark:from-red-950/20 dark:via-slate-900 dark:to-slate-900 p-5 shadow-sm">
 <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
 </svg>
 <span>Yaygın Yanılgı (Mit 1)</span>
 </div>
 <p class="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-3 italic">
 "Klinik muayenede hekim 'Uygun Değil' seçtiği anda sistem personelin tüm nöbetlerini otomatik iptal eder ve çalışmasını kilitler."
 </p>
 <div class="border-t border-red-200/60 dark:border-red-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Rutin poliklinik muayenesi doğrudan çalışma engeli koymaz. Personel ileri tetkike sevk edilir; çalışamayacağı resmi Sağlık Kurulu (Heyet) Raporu ile kesinleşirse bu durum Modül 07'ye kısıt olarak işlenir.
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
 "Sağlık muayene formunu kaydedebilmek için 3 branşın da (Göz, Dahiliye, Cilt) aynı gün tamamlanmış olması şarttır."
 </p>
 <div class="border-t border-amber-200/60 dark:border-amber-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Hayır. En az bir branş sonucu (örneğin sadece Dahiliye kan tahlili) girilerek form kısmi/taslak kaydedilebilir; diğer uzmanlık muayeneleri tamamlandıkça form açılarak güncellenir.
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
 "Sonraki muayene tarihi sistem tarafından 12 ay sonraya atandığı için hekim ara kontrol istese de tarih değiştirilemez."
 </p>
 <div class="border-t border-blue-200/60 dark:border-blue-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Sistem seçilen türe göre (6 veya 12 ay) varsayılan tarihi önerir; ancak hekimin klinik önerisi doğrultusunda <em>Sonraki Muayene Tarihi</em> alanına manuel olarak daha erken bir kontrol tarihi girilebilir.
 </p>
 </div>
 </div>
 </div>

## Sıkça Sorulan Sorular (SSS) {#sss}

:::faq

### Soru 1: Bir muayene kaydında "Uygun Değil" seçildiğinde personel hemen nöbetlerden düşürülür mü?

Bu muayene ekranı rutin klinik takip ekranıdır. "Uygun Değil" görüşü verildiğinde personel ilgili branş kliniğine ileri tetkik için yönlendirilir. Eğer ileri tetkiklerin ardından resmi Sağlık Kurulu (Heyet) Raporu ile çalışamayacağı kesinleşirse, bu durum Modül 07 (Nöbet Ayarları ve Kısıtlar) ekranından heyet raporu şerhiyle resmi kısıt olarak işlenir ve nöbet muafiyeti başlar.

### Soru 2: Muayenede üç branş hekiminden sadece biri sonuç verdiğinde formu kaydedebilir miyim?

Evet. Formda en az bir branş sonucunun (örneğin yalnızca Dahiliye hemogramı) seçilmiş olması kaydetmek için yeterlidir. Diğer branş muayeneleri tamamlandıkça form <strong>[Detay]</strong> butonundan açılarak güncellenebilir.

### Soru 3: Sonraki muayene tarihi otomatik geliyor fakat hekim 3 ay sonra ara kontrol önerdi. Tarihi değiştirebilir miyim?

Evet. Sistem seçilen türe göre (6 ay veya 12 ay) varsayılan sonraki tarihi otomatik hesaplar; ancak hekim tavsiyesi doğrultusunda `Sonraki Muayene Tarihi` alanına manuel olarak daha erken bir tarih yazılabilir.

### Soru 4: Geçmişte silinmiş veya değiştirilmiş bir sağlık muayenesini denetim esnasında nasıl kanıtlayabilirim?

Tablo satırına sağ tıklayıp <strong>Değişiklik Geçmişi</strong> seçeneğini açtığınızda; sistem kaydın eski JSON verisini, değiştiren/silen kullanıcının adını ve kesin işlem zaman damgasını resmi denetim izi tablosunda sunar.
:::
