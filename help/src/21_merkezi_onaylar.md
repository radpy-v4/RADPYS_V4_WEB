---json
{
  "pageTitle": "21. Merkezi Onay Bekleyen Görevler Paneli — RADPYS v4 Kullanım Kılavuzu",
  "h1": "21. Merkezi Onay Bekleyen Görevler Paneli",
  "lead": "Tüm klinik ve idari birimlerden gelen personel izinlerini, nöbet takas/devirlerini, aylık nöbet tercihlerini, resmi nöbet çizelgesi yayınlarını ve 4-göz veri değişiklik taleplerini tek merkezden denetleyip karara bağlayın.",
  "overviewId": "overview",
  "badges": [],
  "readingTime": "5 Dakika"
}
---

## Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler {#hizli-recete}

:::recipe Vizyonder Hızlı Karar Reçetesi & Önemli Metrikler | 20 SANİYELİK AKIŞ
### İstenen Sonuç: | cyan
Klinik birimlerden ve personelden gelen izin, nöbet devir, istek, taslak plan ve veri değişikliklerini tek merkezden güvenle denetleyip karara bağlamak.

### Yapılacak İşlem: | emerald
Sol paneldeki 5 sekmeden ilgili kategoriyi seçin; satırları veya Diff penceresini inceleyip <strong>[Onayla]</strong> veya zorunlu gerekçe girerek <strong>[Reddet]</strong> butonuna basın.

### Sistem Etkisi: | blue
İzin bakiyeleri anında düşer, nöbet devirlerinde çizelge otomatik güncellenir, veri değişikliklerinde yeni kayıtlar işlenir ve fiziksel evraklar AES-256 ile şifreli KVKK kasasına aktarılır.
:::

## 5N1K Kural ve Ayar Çözümleme Tablosu {#5n1k-tablosu}

<div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
 <span class="text-xs font-mono text-slate-400">RADPYS-M21-RULE-MATRIX</span>
 </div>

| NE (İşlem / Alan) | NEDEN (Gerekçe) | NEREDE (Arayüz Yolu) | NASIL (Yöntem) | NE ZAMAN (Zamanlama) | KİM (Rol / Yetki) | DURUM (Sistem Tepkisi) |
| --- | --- | --- | --- | --- | --- | --- |
| İzin Onayı / Reddi | Yıllık, şua ve mazeret iznini resmiyete bağlamak | Onay Paneli → İzin Talepleri | Onayla Butonu / Reddet Butonu (Zorunlu Gerekçe) | İzin başlangıcından önce | <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-semibold text-[11px]">Birim Amiri / Yönetici</span> | Bakiye anında düşer, portalda bildirim kutusuna düşer |
| Nöbet Devir İnceleme & Onay | Personeller arası nöbet takasını resmi çizelgeye yansıtmak | Onay Paneli → Nöbet Devirleri | İncele / Detay Butonu → Karar Formu | Devralan personelin portal rızasından sonra | <span class="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 font-semibold text-[11px]">Birim / Hizmet Sorumlusu</span> | Çizelgedeki personel adı otomatik güncellenir |
| Nöbet İstek & Mazeret | Personelin aylık tercih ve muafiyetlerini kısıt olarak bağlamak | Onay Paneli → Nöbet İstekleri | Onayla / Reddet Butonu | Solver motoru çalıştırılmadan önce | <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[11px]">Başteknisyen / Yönetici</span> | Otomatik çizelge motoruna bağlayıcı kural olarak girer |
| Nöbet Planı Yayınlama | Birim onaylı aylık taslak çizelgeyi resmi yürürlüğe sokmak | Onay Paneli → Nöbet Planları | Yayınla Butonu / Taslağa Geri Gönder Butonu | Ay bitmeden ve nöbet başlamadan önce | <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-semibold text-[11px]">İdare / Başhekimlik / Admin</span> | Plan "Yayında" olur, portalda tüm personele açılır |
| Veri Değişiklik Kıyaslama (Diff) | 4-göz ilkesiyle hatalı veya yetkisiz veri girişlerini engellemek | Onay Paneli → Veri Değişiklikleri | İncele ve Karar Ver Butonu (Diff Penceresi) | Kritik profil/evrak/kart kaydedildiğinde | <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 font-semibold text-[11px]">Modül Sorumlusu / Yönetici</span> | Eski-yeni farkı onaylanır, evrak KVKK kasasına aktarılır |
| Sağlık Muayene Teyidi | İşe giriş ve periyodik muayene bulgularını hekimce doğrulamak | Onay Paneli → Veri Değişiklikleri | İncele Butonu → Hekim Doğrulama Formu | Sağlık muayenesi talep kuyruğuna düştüğünde | <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-semibold text-[11px]">RKS / İşyeri Hekimi</span> | Hızlı onay engellenir; Dahiliye/Göz/Derm bulguları zorunludur |
| Gelişmiş Çok Kriterli Filtreleme | Kuyruktaki yüzlerce onay talebini tür, öncelik ve tarihe göre süzmek | Onay Paneli Üst Filtre Çubuğu | Talep Türü, Öncelik (Normal/Acil) ve Tarih Aralığı seçimi | Talepler incelenirken | <span class="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 font-semibold text-[11px]">Tüm Onay Yetkilileri</span> | Tablo anlık süzülür, acil talepler turuncu rozetle vurgulanır |
| Split-Layout Detay Paneli | Talebin tüm ayrıntılarını, diff farklarını ve personel bilgilerini tek ekranda izlemek | Onay Paneli Sağ Bölmesi | Tablodan satır seçildiğinde otomatik yüklenir | Kayıt tıklandığında | <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-semibold text-[11px]">Tüm Onay Yetkilileri</span> | Pencere değiştirmeden hızlı önizleme ve doğrudan onay/red imkanı sunar |
| Resmi Tutanak Takibi & İmzalı Yükleme | Tüm sistemden gelen heyet tutanaklarının ıslak imzalı kopyalarını ve EBYS numaralarını denetlemek | Onay Paneli → Resmi Tutanaklar | Taslak İncele → İmzalı Nüsha ve EBYS No Yükle → Onayla / İptal Et | Heyet imzaları veya EBYS üst yazısı çıktığında | <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-semibold text-[11px]">Birim Amiri / RKS / İdare</span> | Tutanak 'Tamamlandı' olur, KVKK kasasına şifrelenir ve onay rozeti güncellenir |

## Mit Avcısı: Merkezi Onaylarda Yanlış Bilinen Doğrular {#mit-avcilari}

<div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
 <span class="text-xs font-mono text-slate-400">ONAY-MYTH-BUSTER</span>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div class="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20">
 <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm mb-1.5">
 <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
 YANLIŞ (Mit):
 </div>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 "Veri Değişiklikleri tablosunda 'Hızlı Onayla' butonuna basarak tüm talepleri, hekim muayeneleri dahil tek tıkla onaylayabilirim."
 </p>
 <div class="mt-3 pt-3 border-t border-rose-200/60 dark:border-rose-900/40 flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
 <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
 DOĞRU (Mevzuat Standardı):
 </div>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
 Sağlık muayenesi kayıtlarında sistem "Hızlı Onayla"yı güvenlik gereği bloklar ve zorunlu olarak uzman hekim inceleme formunu açar. Dahiliye, göz ve dermatoloji bulguları doğrulanmadan sağlık onayı verilemez.
 </p>
 </div>
 <div class="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20">
 <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm mb-1.5">
 <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
 YANLIŞ (Mit):
 </div>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 "İzin veya nöbet devrini reddederken gerekçe yazmak isteğe bağlıdır; boş bırakıp geçebilirim."
 </p>
 <div class="mt-3 pt-3 border-t border-rose-200/60 dark:border-rose-900/40 flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
 <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
 DOĞRU (Mevzuat Standardı):
 </div>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
 Sistem tüm ret eylemlerinde zorunlu olarak metin girişi ister. Ret gerekçesi girilmeden ret işlemi tamamlanamaz ve bu gerekçe personelin web portalındaki bildirim paneline anında iletilir.
 </p>
 </div>
 <div class="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20">
 <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm mb-1.5">
 <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
 YANLIŞ (Mit):
 </div>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 "Reddedilen bir talebi onay paneli üzerinden tekrar bulup onaylayabilirim."
 </p>
 <div class="mt-3 pt-3 border-t border-rose-200/60 dark:border-rose-900/40 flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
 <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
 DOĞRU (Mevzuat Standardı):
 </div>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
 Güvenlik ve denetim izi bütünlüğü gereğince bir talep reddedildiğinde işlem kalıcı olarak sonuçlanır ve arşivlenir. Gerekçe düzeltilerek personelin yeni bir başvuru yapması gerekir.
 </p>
 </div>
 <div class="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20">
 <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm mb-1.5">
 <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
 YANLIŞ (Mit):
 </div>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 "Bir personelin başlattığı nöbet takası doğrudan amirin onay kuyruğuna düşer."
 </p>
 <div class="mt-3 pt-3 border-t border-rose-200/60 dark:border-rose-900/40 flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
 <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
 DOĞRU (Mevzuat Standardı):
 </div>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
 Nöbet takası karşılıklı rıza gerektirir. Devralacak personel kendi Web Portalı üzerinden "Kabul Ediyorum" onayını vermeden talep yöneticinin onay kuyruğuna düşmez.
 </p>
 </div>
 </div>

## Merkezi Onay Mekanizması Süreç Akışı {#surec-akisi}

<div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
 <span class="text-xs font-mono text-slate-400">ONAY-WORKFLOW-DIAGRAM</span>
 </div>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">

```mermaid
graph TD
 classDef portal fill:#f0fdf4,stroke:#16a34a,stroke-width:1.5px,color:#15803d;
 classDef desktop fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e40af;
 classDef decision fill:#fffbeb,stroke:#d97706,stroke-width:1.5px,color:#b45309;
 classDef vault fill:#fdf4ff,stroke:#a855f7,stroke-width:1.5px,color:#7e22ce;

 A["Web Portal / Mobil Talep<br/>(İzin, Devir, İstek, Profil)"]:::portal --> B["Merkezi Onay Kuyruğu<br/>(Canlı Kategori Rozetleri)"]:::desktop
 B --> C{"Talep Türü Nedir?"}:::decision
 
 C -- "İzin Talebi" --> D["Birim Amiri Teyidi<br/>(Onayla / Zorunlu Ret)"]:::desktop
 C -- "Nöbet Devri" --> E["Devralan Rızası (Portal)<br/>→ Amir Onay Formu"]:::desktop
 C -- "Veri Değişikliği (Diff)" --> F["Diff Karşılaştırma<br/>(Kırmızı Eski / Yeşil Yeni)"]:::desktop
 C -- "Nöbet Planı" --> G["Birim Onaylı Çizelge<br/>→ İdare Yayın Onayı"]:::desktop

 F --> H{"Sağlık Muayenesi mi?"}:::decision
 H -- "Evet" --> I["Uzman Hekim Doğrulama Formu<br/>(Göz/Dahiliye/Derm)"]:::desktop
 H -- "Hayır" --> J["Hızlı Onayla veya Diff Kararı"]:::desktop

 D --> K["Hedef Tablo Güncellemesi"]:::desktop
 E --> K
 G --> K
 J --> K
 I --> K

 K --> L["KVKK Evrak Kasasına Aktarım<br/>(AES-256 Şifreli Arşiv)"]:::vault
 L --> M["Portal İçi Anlık Bildirim<br/>(Kullanıcı Bilgilendirme)"]:::portal
```

 </div>

## Merkezi Onay Paneli: 6 Kategori Sekmesi & Rozet Yönetimi {#onay-paneli}

<div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
 <span class="text-xs font-mono text-slate-400">ONAY-PANEL-SECTIONS</span>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div class="space-y-4">
 <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
 <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
 1. İzin Talepleri Sekmesi
 </h3>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 Personelin başvurduğu yıllık, şua, sağlık ve mazeret izinleri listelenir. Tabloda personelin adı, birimi, izin türü, tarih aralığı, gün süresi ve talep tarihi görüntülenir.
 </p>
 <ul class="mt-3 text-xs space-y-1 text-slate-500 dark:text-slate-400">
 <li>• <strong>Onayla Butonu:</strong> Onay teyidiyle izin onaylanır; personelin kalan yıllık veya şua izni bakiyesinden gün sayısı otomatik düşülür.</li>
 <li>• <strong>Reddet Butonu:</strong> Açılan pencereden zorunlu ret gerekçesi alınır; başvuru iptal edilir ve gerekçe portala iletilir.</li>
 </ul>
 </div>
 <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
 <span class="w-2 h-2 rounded-full bg-blue-500"></span>
 2. Nöbet Devirleri Sekmesi
 </h3>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 Nöbet değişim ve becayiş başvuruları 3 aşamalı denetimden geçer. Devralan personelin web portalından onay vermediği talepler tabloda <span class="font-semibold text-amber-600">"Devralan Onayı Bekliyor (Portal)"</span> olarak listelenir.
 </p>
 <ul class="mt-3 text-xs space-y-1 text-slate-500 dark:text-slate-400">
 <li>• <strong>İncele / Detay Butonu:</strong> Ayrıntılı devir diyaloğunu açarak devreden, devralan, nöbet tarihi, vardiya saatleri ve devir gerekçesini gösterir.</li>
 <li>• <strong>Onaylama:</strong> Birim veya hizmet amiri onayladığında aktif nöbet çizelgesinde personellerin yer değişimi anında gerçekleşir.</li>
 </ul>
 </div>
 <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
 <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
 3. Nöbet İstekleri Sekmesi
 </h3>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 Personelin ay başlamadan önceki nöbet yazılmasın (mazeret), nöbet yazılsın, lisansüstü ders/eğitim günleri ve muafiyet tercihleri 1 ila 5 arası öncelik puanıyla listelenir. Onaylanan talepler Nöbet Hazırlık (Solver) motoruna doğrudan kısıt olarak beslenir.
 </p>
 </div>
 </div>
 <div class="space-y-4">
 <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
 <span class="w-2 h-2 rounded-full bg-purple-500"></span>
 4. Nöbet Planları Sekmesi (İdari Yayın)
 </h3>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 Birim amiri tarafından hazırlanıp "Birim Onaylı" statüsüne getirilmiş aylık nöbet planları yer alır.
 </p>
 <ul class="mt-3 text-xs space-y-1 text-slate-500 dark:text-slate-400">
 <li>• <strong>Yayınla Butonu:</strong> Planı "Yayında" statüsüne çevirir; Web Portalda tüm klinik personeline görünür hale gelir.</li>
 <li>• <strong>Taslağa Geri Gönder:</strong> İdare eksiklik veya kural ihlali gördüğünde zorunlu revizyon gerekçesi girerek planı tekrar "Taslak" moduna döndürür.</li>
 </ul>
 </div>
 <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
 <span class="w-2 h-2 rounded-full bg-rose-500"></span>
 5. Veri Değişiklikleri Sekmesi (4-Göz Mekanizması)
 </h3>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 Rol ayarlarında değişiklik onayı zorunlu kılınan kullanıcıların personel profili, yeni eklenen belgeler, eğitim/sertifikalar, önceki hizmet dökümleri, sağlık muayeneleri ve çalışma kısıtları başvuruları bu sekmede toplanır.
 </p>
 <ul class="mt-3 text-xs space-y-1 text-slate-500 dark:text-slate-400">
 <li>• <strong>İncele ve Karar Ver:</strong> Değişiklik İnceleme (Diff) penceresini açar.</li>
 <li>• <strong>Hızlı Onayla:</strong> Rutin veri girişlerini doğrudan veritabanına uygular (Sağlık muayeneleri hariç).</li>
 <li>• <strong>Reddet:</strong> Zorunlu ret gerekçesi alınarak değişiklik iptal edilir.</li>
 </ul>
 </div>
 <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
 <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
 <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
 6. Resmi Tutanaklar Sekmesi (Islak İmza & EBYS Takibi)
 </h3>
 <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 Cihaz, RKE, Nöbet ve Kalite gibi tüm modüllerden üretilen ve heyet imzası bekleyen resmi tutanaklar (TUT-YYYY-XXXX) bu sekmede listelenir.
 </p>
 <ul class="mt-3 text-xs space-y-1 text-slate-500 dark:text-slate-400">
 <li>• <strong>Taslak Gör:</strong> Tutanak oluşturulurken şifreli kasaya kaydedilen orijinal taslağı anında açar.</li>
 <li>• <strong>İmzalı Yükle:</strong> Heyetçe ıslak imzalanmış taranmış PDF nüshasını ve EBYS evrak numarasını yükleyerek tutanağı 'Tamamlandı' durumuna getirir.</li>
 <li>• <strong>Tutanak Modülüne Git:</strong> Bağımsız Resmi Tutanaklar yönetim kokpitine doğrudan geçiş sağlar.</li>
 </ul>
 </div>
 <div class="p-4 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200/80 dark:border-cyan-800/60 text-xs">
 <span class="font-bold text-cyan-800 dark:text-cyan-300 block mb-1">Otomatik Canlı Rozet (Badge) Mantığı:</span>
 Her sekmenin sağında bekleyen onay sayısını gösteren sayısal rozetler yer alır. İlgili kategorideki tüm talepler onaylandığında veya reddedildiğinde sayaç sıfırlanır ve rozet kullanıcıyı gereksiz meşgul etmemek adına otomatik gizlenir.
 </div>
 </div>
 </div>

## Değişiklik İnceleme (Diff Dialog): 4-Göz Kıyaslama Standardı {#diff-dialog}

<div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
 <span class="text-xs font-mono text-slate-400">DIFF-VISUAL-STANDARD</span>
 </div>
 <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
 Kullanıcıların veya personelin yaptığı kayıt güncellemelerinde veri güvenliğini sağlamak için sistem otomatik olarak eski veriyi ve yeni talep edilen veriyi çözümler. İnceleme penceresinde teknik alan kodları gizlenerek alanlar Türkçe etiketlerle 3 sütunlu bir tabloda sunulur:
 </p>
 <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
 <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
 <div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
 <span class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Sütun 1: Alan Adı (Türkçe)</span>
 Örn: Telefon, E-Posta, İkamet Adresi, Kadro Tipi, Mezuniyet Tarihi, Çalışma Kısıtı
 </div>
 <div class="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-300">
 <span class="font-bold block mb-1">Sütun 2: Eski Değer (Kırmızı Vurgulu)</span>
 Veritabanında kayıtlı mevcut değer. Değişen satırlarda açık kırmızı arka planla gösterilir.
 </div>
 <div class="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300">
 <span class="font-bold block mb-1">Sütun 3: Yeni Değer (Yeşil Vurgulu)</span>
 Personel veya amir tarafından talep edilen yeni değer. Kalın yazı tipi ve yeşil renkle vurgulanır.
 </div>
 </div>
 <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
 <span class="font-bold text-slate-900 dark:text-white block mb-1">KVKK Şifreli Dosya Kasasına Otomatik Aktarım:</span>
 Eğer değişiklik talebi personel belgesi, diploma, sertifika veya sağlık raporu gibi fiziksel bir dosya yüklemesi içeriyorsa, yönetici "Talebi Onayla" butonuna bastığı anda sistem dosyayı geçici yükleme dizininden alır, AES-256 Fernet algoritmasıyla şifreleyerek güvenli evrak kasasına aktarır. Veritabanı işlemi başarıyla tamamlandıktan sonra diskteki geçici dosya güvenli bir şekilde silinir.
 </div>
 </div>

## Arayüz Rehberi & Ekran Görünümleri {#ekran-goruntuleri}

<div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
 <span class="text-xs font-mono text-slate-400">UI-SCREENSHOTS</span>
 </div>
 <div class="space-y-8">

![Merkezi Onay Bekleyen Görevler Paneli Ekranı | Yönetim > Onay Bekleyen Görevler | Canlı Kategori Rozetleri & 4-Göz Diff | indigo](assets/img/modul21_onay_merkezi.png "<span><strong>Yasal Bilgilendirme:</strong> Bu görseldeki isimler, TCKN'ler ve kayıtlar tamamen test amaçlı sentetik veridir. Gerçek kişi ve kayıtlarla benzerlikler tesadüfidir.</span>")

 </div>

## Sıkça Sorulan Sorular (SSS) {#sss}

:::faq
### 1. Bir personelin nöbet devir talebi onay panelinde neden görünmüyor?
Nöbet takası karşılıklı rıza gerektirir. Devralacak personelin kendi Web Portalı üzerinden "Devir Almayı Kabul Ediyorum" onayını vermesi zorunludur. Devralan personel onay vermediği sürece talep yöneticinin onay kuyruğuna düşmez.

### 2. İzin onaylandığında nöbet çizelgesinde personelin nöbeti varsa ne olur?
İzin onaylandığı anda sistem nöbet çizelgesindeki çakışmayı tespit eder; amir isterse Yönetici Aksiyon Sihirbazı üzerinden izne denk gelen nöbet için anında ikame personel atayabilir veya ilgili nöbeti düşürebilir.

### 3. Reddedilen bir izin veya nöbet talebini geri alıp tekrar onaylayabilir miyim?
Hayır. Güvenlik ve denetim izi (Audit Log) bütünlüğü gereğince bir talep "Reddedildi" statüsüne geçtiğinde arşivlenir ve kilitlenir. Personelin web portalı üzerinden gerekçeyi düzelterek yeni bir talep oluşturması gerekir.

### 4. Sağlık muayenelerinde Hızlı Onay butonu neden çalışmıyor?
6331 sayılı İSG Kanunu ve NDK Radyasyon Güvenliği Mevzuatı uyarınca, sağlık muayene bulguları (göz, dahiliye, hemogram, dermatoloji) bir uzman hekim veya RKS tarafından incelenmeden onaylanamaz. Bu sebeple Hızlı Onay güvenlik amacıyla kilitlenmiştir.

### 5. Onay kuyruğunda çok fazla bekleyen talep birikirse sistem performansı etkilenir mi?
Onay paneli her kategori için en son 500 beklemedeki talebi optimize edilmiş sorgularla çeker. Ancak personelin operasyonel mağduriyet yaşamaması adına geçmiş tarihe ait taleplerin amirler tarafından zamanında sonuçlandırılması kurumsal bir zorunluluktur.
:::
