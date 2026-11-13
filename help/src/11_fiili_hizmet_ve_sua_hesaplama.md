---json
{
  "pageTitle": "11. Fiili Hizmet Zammı (FHZ - Yıpranma Payı) ve Şua Hesaplama — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Fiili Hizmet ve Şua Hesaplama (FHZ)",
  "lead": "Bu modül; radyoloji ve nükleer tıp çalışanlarının <strong>5510 Sayılı Kanun</strong> kapsamındaki <em>Fiili Hizmet Süresi Zammı (FHZ / Yıpranma Payı)</em> puantajlarını ve Sağlık Bakanlığı'nın mevzuat baremlerine göre <em>Sağlık İzni (Şua İzni)</em> hakedişlerini <strong>3 adımlı entegre bir sihirbaz</strong> üzerinden yönetir. Personellerin çalıştığı radyasyonlu birimlere, nöbet çizelgelerine ve resmi onaylı izinlerine göre net fiili çalışma saatlerini, yıpranma sürelerini ve yıllık Şua günlerini hesaplayıp kilit altına alır.",
  "overviewId": "genel-bakis",
  "badges": []
}
---

## Vizyonder Hızlı Karar Reçetesi (4 Adımda FHZ & Şua Sihirbazı) {#hizli-recete}

:::recipe Vizyonder Hızlı Karar Reçetesi (4 Adımda FHZ & Şua Sihirbazı) | 20 SANİYELİK AKIŞ
### 1. Görev Yerlerini Onayla | cyan
15-14 SGK döneminde varsayılan birimler otomatik hazır gelir. Sadece rotasyon veya geçici görevi olan personeli güncelleyip <strong>[1. Görev Yerlerini Onayla ve Hesaplamaya Geç]</strong> butonuna basın.

### 2. Hesapla, Kaydet ve Kilitle | emerald
Radyasyonlu birimdeki her 50 tam fiili çalışma saati için 1 gün Şua izni hesaplanır; <strong>[2. Hesaplamayı Kaydet, Kilitle ve Rapor Çıktısına Geç]</strong> butonuyla tek tıkla kaydedilip dönem kilitlenir.

### 3. Rapor Çıktısı Al & 4. Kapat | blue
Resmi puantaj cetveli hazır açılır; <strong>[3. Rapor Çıktısı Al (Excel / PDF)]</strong> ile indirilir ve <strong>[4. Tamamla ve Kapat]</strong> ile süreç tamamlanır.
:::

## Temel Eşikler & Yasal Baremler {#kpi-kartlari}

<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
 <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
 <div class="flex items-center justify-between">
 <span class="text-xs font-bold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Şua Hak Ediş Baremi</span>
 <span class="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
 </span>
 </div>
 <div class="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">50.0 <span class="text-sm font-sans font-semibold text-slate-400">saat = 1 gün</span></div>
 <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
 Sağlık Bakanlığı baremleri gereğince personelin fiilen radyasyon alanında çalıştığı her 50 saat için 1 tam gün Şua izni hakedilir.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
 <div class="flex items-center justify-between">
 <span class="text-xs font-bold font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400">Yıllık Azami Tavan</span>
 <span class="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
 </span>
 </div>
 <div class="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">30.0 <span class="text-sm font-sans font-semibold text-slate-400">gün/yıl</span></div>
 <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
 Personel ne kadar fiili çalışma yaparsa yapsın, bir takvim yılı içinde kazanılabilecek Şua İzni azami 30 gün ile sınırlandırılmıştır.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
 <div class="flex items-center justify-between">
 <span class="text-xs font-bold font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Çalışma Koşulu</span>
 <span class="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
 </span>
 </div>
 <div class="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">Koşul A / B</div>
 <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
 Koşul A (7.0s radyasyon, Şua hakkı var) ile Koşul B (8.0s idari/destek, Şua hakkı yok) kurumsal rejimlere göre tam ayrıştırılır.
 </p>
 </div>
 <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
 <div class="flex items-center justify-between">
 <span class="text-xs font-bold font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">SGK Bordro Döngüsü</span>
 <span class="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
 </span>
 </div>
 <div class="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">15 - 14 <span class="text-sm font-sans font-semibold text-slate-400">dönemi</span></div>
 <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
 SGK 5510 standardı uyarınca her ayın 15'i ile bir sonraki ayın 14'ü arası hesaplanır. Ayarlar sekmesinden esnetilebilir.
 </p>
 </div>
 </div>

## 3. 4 Adımlı Doğrusal Puantaj Sihirbazı İş Akışı {#is-akisi-semasi}

<div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">

```mermaid
graph TD
 A["Bordro Dönemi Seçimi: 15.AA - 14.AA"] --> B["1. Adım: Görev Yerlerini Onayla"]
 B --> C["Varsayılan Birimler Otomatik Hazır Gelir"]
 C --> D["Rotasyon Varsa: Görev Yerini Değiştir / Ek Görev Ekle"]
 D --> E["1. Görev Yerlerini Onayla ve Hesaplamaya Geç"]
 
 E --> F["2. Adım: Fiili Hizmeti Hesapla"]
 F --> G{"Dönemde Onaysız İzin Var mı?"}
 G -->|Evet| H["UYARI: Onaysız İzin Güvenlik Bariyeri<br/>İzin Yönetimi Ekranından Resmi Onay Veriniz"]
 G -->|Hayır| I["Hesaplama Motoru: Koşul A 7s / Koşul B 8s"]
 I --> J["İzin Düşümü & Net Fiili Radyasyon Saati"]
 J --> K["Şua Gün Hesabı: Her 50s = 1 Gün, Maks 30 Gün"]
 K --> L["2. Hesaplamayı Kaydet, Kilitle ve Rapor Çıktısına Geç"]
 
 L --> M["3. Adım: Rapor Çıktısı Al (Excel / PDF)"]
 M --> N["4. Adım: Tamamla ve Kapat"]
```

 </div>

## 4. 5N1K Kural ve Arayüz Bileşen Envanteri {#5n1k-tablosu}

| Arayüz Bileşeni | Görevi ve Amacı (NE/NEDEN) | Formül / Mantık (NASIL) | Tetiklenme Anı (NE ZAMAN) | Yetkili Rol (KİM) | Durum |
| --- | --- | --- | --- | --- | --- |
| [Sihirbaz Adım Göstergesi] | 4 adımlı iş akışını (1. Görev Yerlerini Onayla 2. Fiili Hizmeti Hesapla 3. Rapor Çıktısı Al 4. Tamamla ve Kapat) yönlendirmek. | Adım tıklandığında sekme değişir; dönem parametreleri sekmeler arası senkronize edilir. | Adım çubuğuna tıklandığında | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Nöbet Sorumlusu, Amir</span> | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Aktif</span> |
| [Yıl] &amp; [Ay] Seçimi | 5510 Sayılı Kanun kapsamındaki 15-14 bordro dönemini seçmek. | 15.ay ile 14.(ay+1) aralığı dinamik hesaplanır ve varsayılan görev yerleri otomatik yüklenir. | Açılır kutu veya ok butonları değiştiğinde | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Sorumlu, Mutemet</span> | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Aktif</span> |
| [Sadece Görev Yeri Değişenler] | Asıl birimi dışında görevlendirilen personelleri hızlıca süzmek. | Kadro birimi ile görev yeri farklı olan satırları filtreler; kırmızı renkle vurgular. | Onay kutusu işaretlendiğinde | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Birim Sorumlusu</span> | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Aktif</span> |
| [Görev Yerini Değiştir] &amp; [Rotasyon / Ek Görev Ekle] | Nöbet listesi dışında başka birimde görevlendirilen veya rotasyona çıkan personelin çalışma alanını tanımlamak. | Yetki kapsamındaki personeller için tarih aralığı, birim ve günlük çalışma saatini (0-24s) kaydeder. | Butona veya satıra çift tıklandığında | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Birim Sorumlusu, Nöbet Sorumlusu</span> | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Aktif</span> |
| [1. Görev Yerlerini Onayla ve Hesaplamaya Geç] | Dönemdeki tüm hizmet sınıflarının taslak görev dağılımlarını onaylayıp 2. Adıma (Hesaplama) aktarmak. | Dönemdeki tüm taslak satırları 'Onaylı' yapar ve sekmeyi otomatik olarak [2. Fiili Hizmeti Hesapla] adımına taşır. | Butona tıklandığında | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Birim Sorumlusu, Amir</span> | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Aktif</span> |
| [2. Hesaplamayı Kaydet, Kilitle ve Rapor Çıktısına Geç] | Hesaplanan aylık fiili hizmet ve Şua hakedişlerini tek adımda kaydedip dönemi kilitlemek ve 3. Adıma geçmek. | Taslak nöbet planlarını ve önceki dönem kilidini denetler; filtre seçili olsa dahi tüm hizmet sınıflarını kaydeder, dönemi kilitler, yayındaki nöbet planlarını arşivler ve 3. adıma geçer. | Butona tıklandığında | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Birim Sorumlusu, Amir</span> | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Aktif</span> |
| [Dönem Kilidini Aç] &amp; [Yılı Kilitle] | Kilitli bir dönemi revizyon için açmak veya yıl sonunda tüm 12 ayı kalıcı olarak dondurmak. | [Dönem Kilidini Aç] yalnızca dönem kilitliyken görünür. [Yılı Kilitle] ise sadece Sistem Yöneticisi (Admin) veya Süpervizör yetkisiyle tüm yılı dondurur. | Butona tıklandığında | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400">Amir / Sistem Yöneticisi (Admin)</span> | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Aktif</span> |
| [3. Rapor Çıktısı Al (Excel / PDF)] &amp; [4. Tamamla ve Kapat] | SGK ve mutemetlik onaylı resmi puantaj dökümünü Excel/PDF olarak almak ve sihirbazı kapatmak. | Kullanıcının yetki kapsamındaki personellerin kimlik no, ad soyad, SGK günü, izin, fiili saat ve Şua günlerini dışa aktarır; [4. Tamamla ve Kapat] pencereyi kapatır. | Butona tıklandığında | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Mutemet, Birim Sorumlusu</span> | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Aktif</span> |

## Ekran Konumları ve Görsel Rehber {#ekran-goruntuleri}

![Fiili Hizmet 1. Adım Görev Dağılımı Ekranı | Fiili Hizmet ve Şua > 1. Adım: Dönemsel Görev Dağılımı | 1. Adım: Görev Dağılımı & Otomatik Atama](assets/img/11_1_fiili_hizmet_hesaplama_ana_ekran.png "<span><strong>Simülasyon Notu:</strong> 15.AA - 14.AA SGK bordro döneminde personel görev dağılımı ve otomatik görev atama ekranı.</span>")

![Fiili Hizmet 2. Adım Hesaplama Ekranı | Fiili Hizmet ve Şua > 2. Adım: Fiili Hizmet ve Şua Hesaplama | 2. Adım: FHZ & Şua Hakediş Hesaplama](assets/img/11_2_fiili_hizmet_hesaplama_ana_ekran.png "<span><strong>Simülasyon Notu:</strong> Koşul A (7s) / Koşul B (8s) ayrımı, onaylı izin düşümleri ve 50 saate 1 gün Şua izni hakediş tablosu.</span>")

![Fiili Hizmet 3. Adım Puantaj Raporu Ekranı | Fiili Hizmet ve Şua > 3. Adım: Puantaj Raporu | 3. Adım: Resmi SGK Puantaj İcmali](assets/img/11_3_fiili_hizmet_hesaplama_ana_ekran.png "<span><strong>Simülasyon Notu:</strong> SGK ve mutemetlik bildirimine hazır aylık/yıllık resmi Fiili Hizmet Zammı puantaj cetveli.</span>")

![Onaysız İzin Güvenlik Uyarısı Diyaloğu | Fiili Hizmet Hesaplama > Onaysız İzin Güvenlik Uyarısı | Onaysız İzin Emniyet Kilidi](assets/img/11_fhz_onaysiz_izin_uyari_dialog.png "<span><strong>Simülasyon Notu:</strong> Dönem içinde onayı tamamlanmamış izin bulunduğunda hatalı SGK bildirimini önleyen güvenlik bariyeri.</span>")

## Adım Adım İşlem Rehberi {#kullanim-rehberi}

<div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
 <div class="flex items-center gap-3">
 <span class="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center font-mono">1</span>
 <h3 class="text-lg font-bold text-slate-900 dark:text-white">1. Adım: Görev Yerlerini Kontrol Etme ve Onaylama</h3>
 </div>
 <ol class="list-decimal list-inside space-y-2 text-sm text-slate-600 dark:text-slate-300 pl-2">
 <li>Sol ana menüden <strong>[Fiili Hizmet ve Şua]</strong> modülüne tıklayın.</li>
 <li>Sihirbaz göstergesinde <strong>1. Görev Yerlerini Onayla</strong> sekmesinde olduğunuzu doğrulayın.</li>
 <li><strong>[Yıl]</strong> ve <strong>[Dönem]</strong> kutularından SGK bordro dönemini seçin. Tüm personelin varsayılan çalışma birimleri otomatik olarak listeye hazır gelir.</li>
 <li>Farklı bir birimde geçici çalışan personelleri süzmek için <strong>[Sadece Görev Yeri Değişenler]</strong> kutusunu işaretleyebilirsiniz.</li>
 <li>Nöbet listesi dışında farklı bir birimde görevlendirilen veya rotasyona çıkan personel varsa satırı seçip <strong>[Görev Yerini Değiştir]</strong> (veya ek görev için <strong>[Rotasyon / Ek Görev Ekle]</strong>) butonuna tıklayarak tarih aralığı, birim ve günlük çalışma saatini (0-24s) kaydedin.</li>
 <li>Sağ üstteki <strong>[1. Görev Yerlerini Onayla ve Hesaplamaya Geç]</strong> butonuna tıklayarak doğrudan 2. adıma ilerleyin.</li>
 </ol>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
 <div class="flex items-center gap-3">
 <span class="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center font-mono">2</span>
 <h3 class="text-lg font-bold text-slate-900 dark:text-white">2. Adım: Fiili Hizmeti Hesaplama, Kaydetme ve Dönemi Kilitleme</h3>
 </div>
 <div class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
 <p>
 <strong>2. Fiili Hizmeti Hesapla</strong> ekranında seçili dönemin iş günü, resmi tatil ve personelin nöbet/görev saatleri harmanlanarak tablo otomatik hesaplanır:
 </p>
 <ul class="list-disc list-inside pl-4 space-y-1">
 <li><strong>Çalışma Koşulu:</strong> Radyasyonlu alanda çalışan personelde <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono">Koşul A</code> (7.0 saat), izlenen/idari alandakilerde <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono">Koşul B</code> (8.0 saat) olarak listelenir.</li>
 <li><strong>Brüt İş Günü &amp; İzin Düşümü:</strong> Ay içi mesai günleri hesaplanır; personelin resmi onaylı izinleri düşülerek net çalışma günleri gösterilir.</li>
 <li><strong>Net Fiili Çalışma Saati:</strong> Fiilen radyasyonlu alanda icra edilen nöbet ve mesai saatlerinin net toplamıdır.</li>
 <li><strong>Hesaplanan Şua İzni (Gün):</strong> Her 50 fiili radyasyon saatine 1 gün olarak hesaplanır (Yıllık 30 gün tavanı aşıldığında sistem otomatik tavan kısıtı koyar).</li>
 </ul>
 <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 space-y-1">
 <div class="font-bold flex items-center gap-2">
 <svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
 <span>Onaysız İzin Güvenlik Uyarısı</span>
 </div>
 <p class="text-xs leading-relaxed">
 Eğer dönem içinde radyasyon görevlilerine ait henüz resmi onayı tamamlanmamış (taslak veya ön onaylı) izinler varsa sistem yasal hatayı önlemek adına hesaplamayı durdurur. Bu durumda <strong>İzin Yönetimi</strong> sayfasına geçerek izinlere resmi onay verdikten sonra hesaplama ekranına dönünüz.
 </p>
 </div>
 <p>
 Sonuçlar doğrulandığında sağ üstteki <strong>[2. Hesaplamayı Kaydet, Kilitle ve Rapor Çıktısına Geç]</strong> butonuna tıklayın. Sistem hesaplamayı kaydeder, dönemi kilitler, yayındaki nöbet planlarını arşivler ve sizi doğrudan 3. adıma aktarır.
 </p>
 </div>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
 <div class="flex items-center gap-3">
 <span class="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center font-mono">3</span>
 <h3 class="text-lg font-bold text-slate-900 dark:text-white">3. Adım: Rapor Çıktısı Alma &amp; 4. Adım: Tamamla ve Kapat</h3>
 </div>
 <div class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
 <p>
 <strong>3. Rapor Çıktısı Al</strong> sekmesinde SGK ve mutemetlik onaylı nihai icmal tablosu hazır olarak açılır. Sağ üstteki <strong>[3. Rapor Çıktısı Al (Excel / PDF)]</strong> butonuna basarak resmi bildirim cetvelini bilgisayarınıza aktarın ve <strong>[4. Tamamla ve Kapat]</strong> butonuyla işlemi sonlandırın.
 </p>
 <p>
 Yılın 12 dönemi de tamamlandıktan sonra, Sistem Yöneticisi (Admin) tarafından 2. adımdaki <strong>[Yılı Kilitle]</strong> butonuna basılarak tüm yıl dondurulur ve Şua izinleri İzin Modülü'ne aktarılmak üzere kesinleştirilir.
 </p>
 </div>
 </div>

## Web Portalı Şua Karnesi & Risk Seviyeleri {#hibrit-entegrasyon}

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
 <span class="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400"> </span>
 <span>Masaüstü Uygulaması (Yetkili Merkez)</span>
 </h3>
 <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-2 pl-4 list-disc">
 <li>3 adımlı sihirbaz akışı ile görev dağılımı ve onaylama</li>
 <li>Otomatik görev atama ve özel tarihli görevlendirme girişi</li>
 <li>Onaysız izin güvenlik bariyeri ve otomatik düşümler</li>
 <li>Sıralı dönem kilidi ve Admin yetkili yıllık kilitleme</li>
 <li>SGK formatında Excel ve PDF puantaj rapor dökümü</li>
 </ul>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
 <span class="p-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400"></span>
 <span>Web & Mobil Portal (Şua Karnesi & Risk İzleme)</span>
 </h3>
 <div class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
 <p>Personeller ve idareciler tarayıcı üzerinden <strong>Personel Şua Karnesi</strong> paneline erişerek radyasyon yükünü takip eder:</p>
 <div class="space-y-2 text-xs">
 <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 flex items-center justify-between">
 <span class="font-bold text-rose-800 dark:text-rose-300"> Yüksek Risk (Kalan &ge; 20 Gün)</span>
 <span class="text-rose-600 dark:text-rose-400">İzinlerin yanma riski yüksek, acil planlama gerekli</span>
 </div>
 <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 flex items-center justify-between">
 <span class="font-bold text-amber-800 dark:text-amber-300"> Orta Risk (Kalan 1 - 19 Gün)</span>
 <span class="text-amber-600 dark:text-amber-400">Yıl sonuna kadar dengeli kullanım önerilir</span>
 </div>
 <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
 <span class="font-bold text-emerald-800 dark:text-emerald-300"> Uyumlu (Kalan 0 Gün)</span>
 <span class="text-emerald-600 dark:text-emerald-400">Hak edilen tüm Şua izinleri başarıyla kullandırıldı</span>
 </div>
 </div>
 </div>
 </div>
 </div>

## FHZ, Şua İzni & Mit Avcısı (Kritik Kurallar) {#mit-avcilari}

<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
 <div class="rounded-2xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-50/50 via-white to-slate-50 dark:from-red-950/20 dark:via-slate-900 dark:to-slate-900 p-5 shadow-sm">
 <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
 </svg>
 <span>Yaygın Yanılgı (Mit 1)</span>
 </div>
 <p class="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-3 italic">
 "Yıl boyu çok yoğun nöbet tutan personelin 1.800 saat fiili çalışması varsa 36 gün Şua İzni kullanabilir."
 </p>
 <div class="border-t border-red-200/60 dark:border-red-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 Sağlık Bakanlığı baremleri ve Danıştay içtihatları gereğince bir takvim yılında kazanılabilecek azami Şua İzni <strong>30 gündür</strong>. 30 günü aşan hesaplamalar mevzuat tavanına sabitlenir.
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
 "Personel yıllık izinli veya sağlık raporlu olduğu günlerde de Fiili Hizmet Zammı (yıpranma) kazanmaya devam eder."
 </p>
 <div class="border-t border-amber-200/60 dark:border-amber-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 5510 Sayılı Kanunun 40. maddesi uyarınca yıpranma payı yalnızca personelin radyasyon kaynağıyla <em>fiilen çalıştığı</em> günler için verilir. İzin ve rapor günleri puantajdan kesinlikle düşülür.
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
 "Aylık dönemleri tek tek kilitlemeye gerek yoktur; yıl sonunda doğrudan yıllık kilit yapılabilir."
 </p>
 <div class="border-t border-blue-200/60 dark:border-blue-900/40 pt-3">
 <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg>
 Doğru Yasal Kural:
 </span>
 <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
 SGK bildirim bütünlüğü gereği dönemler atlanarak kilitlenemez. RADPYS kural motoru, bir önceki ay kilitlenmeden cari ayın kilitlenmesine kesinlikle izin vermez.
 </p>
 </div>
 </div>
 </div>

## Sıkça Sorulan Sorular ve Kritik Kilitler {#sss-ve-sorun-giderme}

:::faq
### Soru 1: Bir dönemi kilitlemek istediğimde "Bir önceki dönem kilitlenmeden bu dönem kilitlenemez" hatası alıyorum. Neden?
Mevzuat ve SGK denetim bütünlüğü gereğince dönemler atlanarak kilitlenemez. Önceki aylara ait eksik puantajların tamamlanıp kilitlenmesi zorunludur. Geçmiş ayları sırasıyla kilitleyerek cari aya ulaşabilirsiniz.

### Soru 2: Personelin o yılki fiili radyasyon çalışması 1.800 saat (36 gün Şua) çıktı, fakat sistem 30 gün yazdı. Bir hesaplama hatası mı var?
Hayır, bu bir hata değildir. Sağlık Bakanlığı'nın mevzuat baremleri uyarınca bir takvim yılı içerisinde kazanılabilecek Şua İzni toplamı <strong>azami 30 gün</strong> ile sınırlandırılmıştır. 30 günü aşan kısımlarda sistem yasal tavan kısıtını uygular.

### Soru 3: Yıllık Kilidi Kapat butonunu neden göremiyorum veya tıklayamıyorum?
Yıllık kilit işlemi, geçmişe dönük tüm puantajı ve Şua hakedişlerini kalıcı olarak dondurduğundan (RED-09 emniyet kilidi), yalnızca <strong>Sistem Yöneticisi (Admin)</strong> veya <strong>Süpervizör</strong> rolüne sahip kullanıcılar tarafından yürütülebilir.
:::
