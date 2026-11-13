---json
{
  "pageTitle": "17. Hizmet İçi Eğitim, LMS Eğitim Portalı ve Online Sınav — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Hizmet İçi Eğitim ve Online Sınav Yönetimi",
  "lead": "Sağlıkta Kalite Standartları (SKS 6.1) ve Nükleer Düzenleme Kurumu (NDK) mevzuatının zorunlu kıldığı yıllık temel radyasyon güvenliği, radyoizotop kullanımı, hasta ve çalışan korunması ile acil durum eylem eğitimlerinin kurumsal düzeyde planlandığı, personele atandığı, video/doküman içeriklerinin sunulduğu, merkezi soru bankasından hazırlanan online sınavlarla başarı barajının değerlendirildiği ve resmi denetimlere yönelik Uyum Matrisi'nin dinamik olarak üretildiği entegre eğitim ve belgelendirme sistemidir.",
  "overviewId": "genel-bakis",
  "heroStyle": "gradient",
  "badges": []
}
---

## Vizyonder Hızlı Karar Reçetesi (Eğitim & Sınav Özeti) {#hizli-recete}

:::recipe Vizyonder Hızlı Karar Reçetesi (Eğitim & Sınav Özeti) | 20 SANİYELİK AKIŞ
### 1. Eğitim Kataloğu ve Materyalleri | indigo
SKS ve NDK zorunlu yıllık radyasyon eğitimlerini, PDF dokümanlarını ve video bağlantılarını tanımlayın; geçerlilik süresini ve baraj puanını belirleyin.

### 2. Toplu Atama ve Soru Havuzu | emerald
Personele eğitimleri topluca atayın. Excel üzerinden soru bankasını içe aktarın; kopya önleyici dinamik soru-şık karıştırma motorunu çalıştırın.

### 3. Online Sınav & Uyum Matrisi | purple
Personel portal üzerinden sınavı çözer. %70 barajı aşılınca dijital sertifika tescil edilir; SKS Denetim Uyum Matrisi yeşil rozete döner.
:::

## 02 Mimari ve İş Akış Şeması {#mimari}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Eğitim kataloğu hazırlama, soru havuzu oluşturma, toplu atama, online sınav çözme ve Uyum Matrisi entegrasyonu:
 </p>
 </div>
 <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 overflow-x-auto">

```mermaid
flowchart TD
 A["Hizmet İçi Eğitim Modül Girişi"] --> B["Üst KPI Şeridi ve 4 Ana Sekme"]
 
 B --> C["1. Uyum ve Denetim Raporu"]
 B --> D["2. Eğitim Atamaları"]
 B --> E["3. Eğitim Kataloğu"]
 B --> F["4. Sınav Soruları Havuzu"]
 
 E --> G["Yeni Eğitim Tanımı: Ad, Kategori, Geçerlilik Ayı, Baraj %"]
 G --> H["Materyal Ekleme: PDF, PPTX, Video Dosyası veya URL"]
 H --> I["egitim_katalogu Tablosuna Kayıt"]
 
 F --> J["Soru Tanımı: Soru Metni, Şıklar (A-B-C-D), Doğru Cevap"]
 J --> K["Soru ve Şık Görselleri Ekleme"]
 K --> L["Excel İçe Aktarım veya Başka Eğitimden Soru Kopyalama"]
 L --> M["soru_bankasi ve egitim_sinav_sorulari Kaydı"]
 
 D --> N["Birim / Hizmet Sınıfı Filtresi ile Personel Seçimi"]
 N --> O["Eğitim Başlığı ve Son Tarih Belirleme"]
 O --> P["[Seçilen Personele Ata] Butonu"]
 P --> Q["egitim_atamalari Kaydı ve Otomatik Sistem Bildirimi"]
 
 Q --> R["Personel Portali / Sınav Ekranı"]
 R --> S["Video / Doküman Materyalini İnceleme"]
 S --> T{"Online Sınav Şartı Var mı?"}
 T -- "Hayır" --> U["Okuma Teyidi ile Doğrudan Tamamlama"]
 T -- "Evet" --> V["Online Sınav Çözme (Dinamik Shuffle)"]
 
 V --> W{"Sınav Puanı >= Baraj (%) mı?"}
 W -- "Hayır" --> X["Başarısız: Sınırsız Tekrar Deneme Hakkı"]
 W -- "Evet" --> Y["personel_hizmet_ici_egitim Tescili (Onaylandı)"]
 
 U --> Y
 Y --> Z["Uyum Matrisi Güncellemesi (CROSS JOIN Analizi)"]
 Z --> AA["Aktif / Süresi Yaklaşıyor / Süresi Doldu / Hiç Alınmamış"]
 Z --> AB["[Excel Raporu] Resmi Denetim Çıktısı"]
```

 </div>

## 03 Arayüz Bileşenleri ve 5N1K Kural Tablosu {#bilesenler}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Arayüzdeki tüm buton, tablo, form ve sayaçların çalışma kuralları ve durumları:
 </p>
 </div>

| NE? (Bileşen & Ayar) | NEDEN? (Amaç) | NEREDE? (Ekran Konumu) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? | DURUM |
| --- | --- | --- | --- | --- | --- | --- |
| Genel Uyum Oranı KPI (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">lblKpiUyumOrani</code>) | Kurumun SKS eğitim uyum yüzdesini anlık görmek. | Üst KPI Şeridi | <code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">(Aktif + Süresiz) / Toplam * 100</code> ile hesaplar. | Ekran açıldığında ve filtrelemede. | Tüm Yetkililer | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Geçerli Eğitimler KPI (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">lblKpiAktifEgitim</code>) | Süresi devam eden geçerli eğitim sayısını izlemek. | Üst KPI Şeridi | <code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">durum IN ('Aktif', 'Süresiz Geçerli')</code> sayar. | Sürekli canlı. | Kalite / RGS | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| 15 Gün Kalanlar KPI (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">lblKpiYaklasan</code>) | Yakında süresi dolacak personelleri önceden fark etmek. | Üst KPI Şeridi | Geçerlilik bitişine ≤ 15 gün kalan personelleri sayar. | Periyodik kontrolde. | Kalite / RGS | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Süresi Dolanlar KPI (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">lblKpiDolan</code>) | Süresi bittiği halde yenilenmemiş eğitimleri görmek. | Üst KPI Şeridi | Bitiş tarihi geçmiş kayıtları kırmızı alarm ile listeler. | Denetim öncesi. | Kalite / Yönetim | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Hiç Alınmamış KPI (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">lblKpiHicAlinmamis</code>) | Zorunlu eğitimi kurumda hiç almamış personelleri tespit etmek. | Üst KPI Şeridi | Cross-join sonucu eşleşen kaydı olmayanları sayar. | Planlama safhasında. | Eğitim Sorumlusu | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Uyum Matrisi Tablosu (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">tblUyumMatrisi</code>) | Personel-eğitim çapraz tamamlama durumunu matris formatında sergilemek. | 1. Sekme (Uyum ve Denetim Raporu) | Personel, TC, Birim, Eğitim, Tamamlama, Bitiş ve 4 renkli durum hücresi. | Resmi denetim ve incelemede. | Tüm Kullanıcılar | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Excel Raporu (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">btnUyumExcel</code>) | Uyum matrisini resmi denetim çıktısı olarak indirmek. | 1. Sekme Üst Panel | <code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">openpyxl</code> ile kurumsal lacivert başlıklı .xlsx dosyası oluşturur. | Denetim dosyası hazırlanırken. | Kalite / RGS | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Birim & Hizmet Filtresi (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">comboAtamaBirimFilter</code>) | Toplu eğitim atarken personeli birimine veya mesleğine göre süzmek. | 2. Sekme (Eğitim Atamaları) | Departman ve unvan hizmet sınıflarına göre personelleri listeler. | Atama öncesi. | Eğitim Sorumlusu | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Seçilen Personele Ata (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">btnTopluAta</code>) | İşaretlenen tüm personele tek hamlede eğitim görevi atamak. | 2. Sekme Üst Panel | Seçilen personellere <code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">egitim_atamalari</code> kaydı açar ve bildirim üretir. | Eğitim planlamasında. | Eğitim Sorumlusu | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Eğitim Kataloğu Formu (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">grpKatalogForm</code>) | Kurumsal eğitimleri, geçerlilik sürelerini ve sınav barajlarını belirlemek. | 3. Sekme (Eğitim Kataloğu) | Ad, kategori, geçerlilik ayı, baraj %, materyal tipi ve dosyasını kaydeder. | Yeni eğitim açılışında. | Yönetici / RGS | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Excel'den Soru Yükle (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">btnSoruExcelImport</code>) | Hazırlanan Excel şablonundaki soruları topluca içe aktarmak. | 4. Sekme (Soru Havuzu) | <code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">run_with_progress</code> ile Excel'deki soruları okur ve veritabanına bağlar. | Soru bankası hazırlığında. | Sınav Komisyonu | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |
| Online Sınav Diyaloğu (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600">HizmetIciSinavDialog</code>) | Personelin eğitimi pekiştirmesi ve puanlandırılması. | Modal Diyalog | Dinamik karıştırma (shuffle) uygular, puanlar; baraj sağlanırsa eğitimi onaylar. | Eğitim sonrasında. | Çalışan Personel | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">Eksiksiz & Aktif</span> |

## 04 Dinamik KPI Göstergeleri ve Hesaplama Formülleri {#kpi-kokpit}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Ekranın üst bandında yer alan 5 adet canlı performans kartı kurumun eğitim sağlığını anlık olarak yansıtır:
 </p>
 </div>
 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
 <div class="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex flex-col justify-between">
 <div class="flex items-center justify-between text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
 <span>Genel Uyum Oranı</span>
 <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
 </div>
 <div class="text-3xl font-black text-indigo-900 dark:text-indigo-100 my-2">%94.5</div>
 <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
 (Aktif + Süresiz) / Toplam Gereksinim * 100
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex flex-col justify-between">
 <div class="flex items-center justify-between text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
 <span>Geçerli Eğitimler</span>
 <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
 </div>
 <div class="text-3xl font-black text-emerald-900 dark:text-emerald-100 my-2">148</div>
 <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
 Süresi devam eden veya süresiz tescilli kayıtlar.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex flex-col justify-between">
 <div class="flex items-center justify-between text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
 <span>15 Gün Kalanlar</span>
 <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
 </div>
 <div class="text-3xl font-black text-amber-900 dark:text-amber-100 my-2">12</div>
 <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
 Kalan süre ≤ 15 gün; bildirim motoru devrede.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 flex flex-col justify-between">
 <div class="flex items-center justify-between text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
 <span>Süresi Dolanlar</span>
 <span class="w-2 h-2 rounded-full bg-rose-500"></span>
 </div>
 <div class="text-3xl font-black text-rose-900 dark:text-rose-100 my-2">4</div>
 <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
 Geçerliliği bitmiş; acil yenileme gerekir.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 flex flex-col justify-between">
 <div class="flex items-center justify-between text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
 <span>Hiç Alınmamış</span>
 <span class="w-2 h-2 rounded-full bg-purple-500"></span>
 </div>
 <div class="text-3xl font-black text-purple-900 dark:text-purple-100 my-2">3</div>
 <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
 Zorunlu olduğu halde sıfır kaydı olan çalışanlar.
 </p>
 </div>
 </div>

## 05 Kurumsal Uyum ve Denetim Matrisi Analizi {#uyum-matrisi}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 SKS ve NDK denetimlerinde kurumun en güçlü kanıtıdır. Arka planda aktif çalışanlar ile zorunlu eğitim kataloğu çapraz eşleştirilerek (<code class="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">CROSS JOIN</code>) personelin tüm eğitim geçmişi sorgulanır:
 </p>
 </div>
 <div class="space-y-4">
 <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
 <div class="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/20">
 <span class="inline-block px-2 py-0.5 rounded text-xs font-bold bg-emerald-200 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-200 mb-2">Aktif / Süresiz Geçerli</span>
 <p class="text-xs text-slate-600 dark:text-slate-300">Eğitim tamamlanmış, sınavı geçilmiş ve geçerlilik süresi devam ediyor.</p>
 </div>
 <div class="p-4 rounded-xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/50 dark:bg-amber-950/20">
 <span class="inline-block px-2 py-0.5 rounded text-xs font-bold bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200 mb-2">Süresi Yaklaşıyor (≤15 Gün)</span>
 <p class="text-xs text-slate-600 dark:text-slate-300">Geçerlilik bitişine 15 gün veya daha az kalmış; otomatik uyarı gönderilmiş.</p>
 </div>
 <div class="p-4 rounded-xl border border-rose-200 dark:border-rose-800/60 bg-rose-50/50 dark:bg-rose-950/20">
 <span class="inline-block px-2 py-0.5 rounded text-xs font-bold bg-rose-200 text-rose-900 dark:bg-rose-900 dark:text-rose-200 mb-2">Süresi Doldu (Kırmızı Alarm)</span>
 <p class="text-xs text-slate-600 dark:text-slate-300">Eğitimin süresi bitmiş; SKS denetim puanını düşürmemesi için derhal yenilenmelidir.</p>
 </div>
 <div class="p-4 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-purple-50/50 dark:bg-purple-950/20">
 <span class="inline-block px-2 py-0.5 rounded text-xs font-bold bg-purple-200 text-purple-900 dark:bg-purple-900 dark:text-purple-200 mb-2">Hiç Alınmamış (Mor Uyarı)</span>
 <p class="text-xs text-slate-600 dark:text-slate-300">Yeni işe başlayan veya zorunlu eğitimi kuruma girdiğinden beri hiç almamış personel.</p>
 </div>
 </div>
 <div class="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-between">
 <div class="flex items-center gap-3">
 <div class="p-2.5 rounded-xl bg-indigo-600 text-white font-bold">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
 </div>
 <div>
 <h4 class="text-sm font-bold text-slate-900 dark:text-white">Resmi Denetim Heyeti İçin Renkli Excel Çıktısı</h4>
 <p class="text-xs text-slate-500 dark:text-slate-400">Üstteki [Excel Raporu] butonuna tıklandığında kurumsal lacivert başlıklı resmi .xlsx matrisi üretilir.</p>
 </div>
 </div>
 <span class="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300">openpyxl Motoru</span>
 </div>
 </div>

## 06 Toplu ve Birim Bazlı Eğitim Atama Motoru {#toplu-atama}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Yüzlerce personele tek tek görev atamak yerine birim ve meslek filtresiyle tek tıkla toplu görevlendirme:
 </p>
 </div>
 <ol class="space-y-4 text-sm text-slate-600 dark:text-slate-300 list-decimal list-inside">
 <li class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <strong>Hedef Personel Grubunu Süzme:</strong> Sol üstteki <strong>Birim Filtresi</strong> (<code class="text-xs font-mono">comboAtamaBirimFilter</code>) veya <strong>Hizmet Sınıfı Filtresi</strong> (<code class="text-xs font-mono">comboAtamaHizmetFilter</code>) ile listeyi daraltın.
 </li>
 <li class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <strong>Toplu Seçim:</strong> Tablodaki personelleri tek tek onay kutularıyla seçin veya sol üstteki <strong>[Tümünü Seç]</strong> butonuna tıklayarak süzülen herkesi tek hamlede işaretleyin.
 </li>
 <li class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <strong>Eğitim ve Son Tarih:</strong> Üstteki <strong>Atanacak Eğitim</strong> açılır kutusundan ilgili eğitimi seçin ve <strong>Son Tamamlama Tarihi</strong> (varsayılan: 30 gün sonrası) takvimini belirleyin.
 </li>
 <li class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <strong>[Seçilen Personele Ata]:</strong> Butona basıldığında seçili personellere aynı anda atama yapılır ve sistem personellere otomatik görevlendirme bildirimi yönlendirir.
 </li>
 <li class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <strong>Atama İptali:</strong> Sağdaki mevcut atamalar listesinden bir satır seçip <strong>[Atamayı İptal Et]</strong> butonuyla gerekirse atamayı geri alabilirsiniz.
 </li>
 </ol>

## 07 Eğitim Kataloğu ve Materyal Yönetimi {#katalog-yonetimi}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Kurumun eğitim müfredatının, sürelerinin ve multimedya içeriklerinin tanımlandığı merkezdir:
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div class="space-y-3 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <h3 class="text-base font-bold text-slate-900 dark:text-white">Temel Parametreler</h3>
 <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
 <li>• <strong>Eğitim Adı:</strong> Eğitimin tam resmi adı (örn: "Radyasyon Alanlarında Çalışma Standartları").</li>
 <li>• <strong>Kategori:</strong> Radyasyon Güvenliği, Hasta Güvenliği, Genel Kalite vb.</li>
 <li>• <strong>Geçerlilik (Ay):</strong> SKS standardı uyarınca varsayılan <code class="px-1 rounded bg-slate-200 dark:bg-slate-700 font-mono">12</code> ay. Süresizler için <code class="px-1 rounded bg-slate-200 dark:bg-slate-700 font-mono">0</code>.</li>
 <li>• <strong>[x] Zorunlu Eğitim:</strong> İşaretlendiğinde kurum geneli Uyum Matrisi'ne doğrudan dahil edilir.</li>
 <li>• <strong>[x] Online Sınav Aktif:</strong> Eğitim sonunda personelin sınav çözmesini zorunlu kılar.</li>
 <li>• <strong>Baraj Puanı:</strong> Sınavı geçmek için gereken başarı yüzdesi (varsayılan: <code class="px-1 rounded bg-slate-200 dark:bg-slate-700 font-mono">%70</code>).</li>
 </ul>
 </div>
 <div class="space-y-3 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <h3 class="text-base font-bold text-slate-900 dark:text-white">Materyal ve Video Entegrasyonu</h3>
 <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
 <li>• <strong>Materyal Türü:</strong> Doküman / Dosya (PDF, DOCX, PPTX), Video Dosyası (MP4, WEBM) veya Harici Video URL.</li>
 <li>• <strong>Dosya Seç:</strong> Bilgisayarınızdaki eğitim sunumunu veya video kaydını bağlamak için <code class="px-1 rounded bg-slate-200 dark:bg-slate-700 font-mono">[Dosya Seç]</code> butonunu kullanın.</li>
 <li>• <strong>Dokümanı Aç:</strong> Yüklenen eğitim materyalini doğrulamak için doğrudan sistemin varsayılan görüntüleyicisinde açar.</li>
 <li>• <strong>Web Portal Stream:</strong> MP4 videoları Web Portal üzerinden mobil cihazlarda ve tarayıcılarda HTTP Range stream ile kesintisiz izlenebilir.</li>
 </ul>
 </div>
 </div>
 <div class="p-4 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-xs sm:text-sm">
 <div class="flex items-center gap-2 font-bold text-cyan-900 dark:text-cyan-200 mb-1.5">
 <span class="w-2.5 h-2.5 rounded-full bg-cyan-600"></span>
 <span>SKS 6.1 Kalite Dokümanları ve NDK KLV-014 (T.1 - T.11) Entegrasyonu</span>
 </div>
 <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
 Sistemde kayıtlı <strong>Kalite Dokümanları</strong> kategorisi altında NDK RSGD-KLV-014 Radyasyondan Korunma Programı kılavuzunda zorunlu tutulan 11 resmi talimat (<strong>TL.RAD.01</strong>'den <strong>TL.RAD.11</strong>'e kadar: Güvenli Cihaz Kullanımı, Çalışan Korunması, Hasta Korunması, Alan Güvenliği, RKE Muayenesi, Ortam Dozu, Dozimetri, Periyodik Muayene, QA/QC, Acil Durum ve Eğitim) tanımlıdır. Bu talimatlar tüm radyasyon personeline yıllık (12 ay geçerlilik) zorunlu doküman eğitimi olarak atanır. Personel portal üzerinden bu talimatları okuyup onayladığında hem Sağlık Bakanlığı SKS v6.1 Denetim Matrisi'ne hem de resmi NDK RKP başvuru dosyasının II. Bölümüne yasal denetim iziyle anlık yansır.
 </p>
 </div>

## 08 Merkezi Soru Havuzu, Şık Görselleri ve Excel İçe Aktarım {#soru-havuzu}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Her eğitim için 4 seçenekli (A, B, C, D) çoktan seçmeli sorular hazırlanır. Hem soru köküne hem de şıklara bağımsız diyagram ve grafik görselleri bağlanabilir:
 </p>
 </div>
 <div class="space-y-4">
 <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
 <h3 class="text-base font-bold text-slate-900 dark:text-white">Görselli Soru Desteği</h3>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Radyolojik anatomik kesitler, dozimetre renk bantları, cihaz kumanda paneli veya uluslararası radyasyon sembolleri sorulara görsel olarak eklenebilir. Soru metni yanındaki <strong>[Soru Resmi Seç]</strong> veya şıkların yanındaki fotoğraf ikonlu butonlar tıklandığında görsel doğrudan sisteme entegre edilir.
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div class="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/40 dark:bg-indigo-950/20">
 <h4 class="text-sm font-bold text-indigo-900 dark:text-indigo-200 mb-1">[Şablon İndir] & [Excel'den Soru Yükle]</h4>
 <p class="text-xs text-slate-600 dark:text-slate-300">
 Önceden ayarlanmış <code class="font-mono bg-white dark:bg-slate-800 px-1 rounded">Egitim_Sinav_Sorulari_Sablonu.xlsx</code> şablonunu indirin; onlarca soruyu Excel'de hazırlayıp tek tıkla yükleyin.
 </p>
 </div>
 <div class="p-4 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-purple-50/40 dark:bg-purple-950/20">
 <h4 class="text-sm font-bold text-purple-900 dark:text-purple-200 mb-1">[Başka Eğitimden Soru Kopyala]</h4>
 <p class="text-xs text-slate-600 dark:text-slate-300">
 Geçen yılın eğitimindeki veya benzer kategorideki bir eğitimin sınav sorularını tek hamlede yeni eğitime kopyalayarak zamandan tasarruf edin.
 </p>
 </div>
 </div>
 </div>

## 09 Online Sınav Çözme, Dinamik Karıştırma ve Otomatik Tescil {#online-sinav}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Kopya çekilmesini engelleyen dinamik algoritma ve anlık değerlendirme süreci:
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-2">1. Dinamik Shuffle (Karıştırma)</h4>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Her personel için soruların sırası rastgele karıştırılır. Ayrıca seçeneklerin sırası da dinamik olarak dağıtılır; A şıkkı bir personelde ilk sırada çıkarken diğer personelde C şıkkı konumunda gösterilir.
 </p>
 </div>
 <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-2">2. %70 Başarı Barajı</h4>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Sınav bitirildiğinde sistem doğru sayısını hesaplar. Baraj (varsayılan: %70) sağlandığında sınav anında onaylanır. Sağlanamazsa personel sınırsız tekrar sınav hakkına sahiptir.
 </p>
 </div>
 <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
 <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-2">3. Otomatik Onay & Tescil</h4>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Sınavı geçen personelin eğitimi başka bir komisyon onayı beklemeksizin doğrudan <code class="px-1 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 font-mono">Onaylandı</code> statüsüyle veritabanına tescil edilir ve Uyum Matrisi yeşile döner.
 </p>
 </div>
 </div>

## 10 15 Gün Önceden Otomatik Sistem Bildirim Motoru {#erken-uyari}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Zamanlanmış arka plan servisi (<code class="text-xs font-mono">check_and_create_expiry_notifications</code>) sayesinde hiçbir eğitim süresi unutulmaz:
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 space-y-3">
 <div class="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
 <span>Otomatik Hatırlatma Mekanizması</span>
 </div>
 <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
 Geçerlilik süresi dolmak üzere olan çalışanlar bitişe 15 gün kala otomatik olarak tespit edilir. Mükerrer bildirim koruması sayesinde her personele günde sadece bir kez aşağıdaki resmi uyarı iletilir:
 </p>
 <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 font-mono text-xs text-slate-800 dark:text-slate-200">
 "Sayın [Personel Adı], zorunlu '[Eğitim Adı]' eğitiminizin geçerlilik süresi [Tarih] tarihinde sona erecektir. Lütfen süresi dolmadan eğitiminizi yenileyiniz."
 </div>
 </div>

## 11 Hibrit Arayüz ve Web Portalı Görünümü {#hibrit-web}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Masaüstü yönetim kokpiti ile Web Portalı arasında çift yönlü senkronizasyon:
 </p>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
 <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
 Masaüstü Uygulaması (Yetkili & Denetim Merkezi)
 </h3>
 <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
 <li>• Müfredat, kategori ve geçerlilik ayı tanımlama.</li>
 <li>• Birim ve hizmet sınıfına göre toplu personel atamaları.</li>
 <li>• Soru havuzu hazırlama, Excel şablon aktarımı ve soru kopyalama.</li>
 <li>• Kurum geneli Uyum Matrisi izleme ve renkli Excel (.xlsx) çıktısı.</li>
 </ul>
 </div>
 <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
 <span class="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
 Web Portalı (Personel ve Video Eğitim Portali)
 </h3>
 <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
 <li>• <strong>Personel Eğitim Paneli:</strong> Kendisine atanan eğitimleri ve kalan süreleri görme.</li>
 <li>• <strong>HTTP Range Video Stream:</strong> Büyük boyutlu eğitim videolarını ve PDF'leri tarayıcıda izleme.</li>
 <li>• <strong>Web Sınavı:</strong> Soruları doğrudan tarayıcı üzerinden çözüp anlık baraj sonucunu alma.</li>
 <li>• <strong>Kurumsal Dashboard:</strong> Birim bazlı uyum oranlarını web grafikleriyle izleme.</li>
 </ul>
 </div>
 </div>

## Masaüstü ve Web Portalı Ekran Görüntüleri {#ekran-goruntuleri}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Hizmet içi eğitim uyum matrisi, soru bankası ve online sınav ekranlarının masaüstü ve web portalı görünümleri:
 </p>
 </div>
![Masaüstü Hizmet İçi Eğitim Uyum Matrisi Ekranı | Masaüstü > Hizmet İçi Eğitim & Online Sınav > 1. Sekme: Uyum Matrisi | Masaüstü Kurumsal Uyum Matrisi](assets/img/17_1_1_hizmet_ici_egitim_uyum_matrisi.png "<span><strong>Simülasyon Notu:</strong> Tüm aktif personel ile zorunlu eğitim kataloğunun çapraz eşleştirildiği (CROSS JOIN) denetim matrisi.</span>")

![Masaüstü Soru Havuzu ve Online Sınav Ekranı | Masaüstü > Hizmet İçi Eğitim & Online Sınav > 4. Sekme: Soru Havuzu & Sınav | Soru Bankası & Online Sınav Yönetimi](assets/img/17_2_1_hizmet_ici_egitim_soru_ve_sinav.png "<span><strong>Simülasyon Notu:</strong> Çoktan seçmeli soru bankası yönetimi, Excel soru aktarımı ve dinamik karıştırmalı sınav motoru.</span>")

![Web Portalı Hizmet İçi Eğitim Uyum Matrisi | Web Portalı > Eğitim & Sınav Yönetimi > Kurumsal Uyum Matrisi | Web Portalı Uyum Matrisi Dashboard](assets/img/17_1_2_hizmet_ici_egitim_uyum_matrisi_web.png "<span><strong>Simülasyon Notu:</strong> Kalite ve birim yöneticilerinin web tarayıcısı üzerinden birim bazlı eğitim uyum oranlarını canlı izlediği ekran.</span>")

![Web Portalı Online Sınav ve Eğitim Ekranı | Web Portalı > Personel Eğitim Paneli & Online Sınav | Web Video Eğitim & Online Sınav](assets/img/17_2_2_hizmet_ici_egitim_soru_ve_sinav_web.png "<span><strong>Simülasyon Notu:</strong> Personelin tarayıcı veya mobil cihaz üzerinden eğitim materyalini inceleyip online sınava katıldığı ekran.</span>")

## 12 Hata Mesajları ve Sorun Giderme Rehberi {#sorun-giderme}

<div class="space-y-2">
 <p class="text-sm text-slate-600 dark:text-slate-300">
 Karşılaşabileceğiniz sistem uyarıları ve çözüm adımları:
 </p>
 </div>

| Hata / Uyarı Mesajı | Olası Neden | Çözüm Adımı |
| --- | --- | --- |
| "Lütfen atanacak eğitimi seçiniz." | Toplu atama panelinde eğitim seçilmediğinde. | Açılır kutudan personele atanacak eğitim başlığını seçin. |
| "Lütfen listeden en az bir personel seçiniz." | Seçim tablosunda hiçbir çalışan işaretlenmediğinde. | Tablodan personelleri işaretleyin veya [Tümünü Seç] butonunu kullanın. |
| "Bu eğitime ait henüz aktif sınav sorusu bulunmamaktadır." | Sorusu olmayan eğitim için sınav başlatılmak istendiğinde. | Soru Havuzu sekmesinden eğitime soru ekleyin veya Excel'den aktarın. |
| "X adet soruyu boş bıraktınız. Tamamlamak istiyor musunuz?" | Sınavda boş bırakılan sorular varken gönderilmek istendiğinde. | Boş soruları tamamlamak için 'Hayır'ı seçin veya bu haliyle göndermek için 'Evet'i tıklayın. |
| "Sınav puanınız: %X. Baraj puanı (%Y) sağlanamadı." | Puan katalogdaki baraj puanının altında kaldığında. | Eğitim materyalini tekrar inceleyip sınavı yeniden başlatın (sınırsız hak). |

## Hizmet İçi Eğitim, Sınav & Mit Avcısı (Kritik Kurallar) {#mit-avcilari}

<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
 <div class="rounded-2xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-50/50 via-white to-slate-50 dark:from-red-950/20 dark:via-slate-900 dark:to-slate-900 p-5 shadow-sm">
 <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
 </svg>
 <span>Yaygın Yanılgı (Mit 1)</span>
 </div>
 <p class="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-3 italic">
 "Online sınavda %70 baraj puanının altında kalan personel eğitimden elenir ve bir daha sınava giremez."
 </p>
 <div class="border-t border-red-200/60 dark:border-red-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Amaç öğrenmeyi pekiştirmektir. Personel materyalleri tekrar gözden geçirerek sınırsız sayıda sınava yeniden girebilir; her sınavda soru ve seçenekler dinamik olarak karıştırılır.
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
 "Kurum Uyum Matrisinde zorunlu eğitimi 'Hiç Almamış' görünen çalışanlar denetim başarı oranını etkilemez."
 </p>
 <div class="border-t border-amber-200/60 dark:border-amber-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 SKS 6.1 çapraz denetim matrisi gereğince aktif personelin zorunlu eğitimi hiç almamış olması kurumun genel kalite ve uyum puanını doğrudan düşürür.
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
 "Sınavı olmayan eğitimlerde personelin materyali incelediğini kanıtlamak için ıslak imzalı tutanak şarttır."
 </p>
 <div class="border-t border-blue-200/60 dark:border-blue-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Sınavsız eğitimlerde personel portaldan dokümanı inceleyip 'Okudum / İnceledim' butonuna bastığında sistem IP ve zaman damgasıyla dijital onay üretir; bu kayıt resmi denetim kanıtıdır.
 </p>
 </div>
 </div>
 </div>

## 13 Sıkça Sorulan Sorular (SSS) {#sss}

:::faq
### Sınavda başarısız olan bir personel için sınav hakkı sınırı var mıdır?
Hayır. Personel başarı baraj puanına (varsayılan: %70) ulaşana kadar eğitim materyalini tekrar gözden geçirerek sınırsız sayıda sınava yeniden girebilir. Her yeni denemede sorular ve şıklar dinamik olarak yeniden karıştırılır.

### Uyum Matrisinde "Hiç Alınmamış" görünen personeller kurum uyum oranını düşürür mü?
Evet. Zorunlu olarak tanımlanan bir eğitimi henüz tamamlamamış olan tüm aktif çalışanlar mor renkli "Hiç Alınmamış" statüsüne düşer ve Genel Uyum Oranını doğrudan aşağı çeker. Bu personellere acil toplu eğitim ataması yapılmalıdır.

### Online sınavı olmayan bir eğitimin tamamlanması nasıl gerçekleşir?
Eğer eğitim kataloğunda [Online Sınav Aktif] seçeneği işaretlenmemişse, personel eğitim dokümanını veya videosunu inceledikten sonra [Okudum / İnceledim] butonuna basar; sistem eğitimi doğrudan tamamlandı ve onaylandı olarak kaydeder.

### 15 gün kala erken uyarı bildirimi bir personele günde kaç kez gider?
Sistem içi mükerrer bildirim koruması bulunur. Aynı gün içerisinde aynı personel ve eğitim için yalnızca tek bir hatırlatma bildirimi üretilir.
:::
