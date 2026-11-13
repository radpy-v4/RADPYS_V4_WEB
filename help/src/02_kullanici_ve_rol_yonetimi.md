---json
{
  "pageTitle": "02. Kullanıcı, Rol ve İzin Yönetimi (RBAC) — RADPYS v4 Kullanım Kılavuzu",
  "h1": "Kullanıcı ve Rol Yönetimi",
  "lead": "Rol Tabanlı Erişim Kontrolü (RBAC), modül düzeyinde 4 kademeli yetki ve veri kapsamı matrisi (Miras, Kendisi, Departman, Tümü), hatalı şifreyle kilitlenen personelin hesap kilidini kaldırma ve güvenli rol klonlama işlemlerini yönetmenizi sağlar.",
  "overviewId": "overview",
  "badges": [
    {
      "text": "SKS 6.1 & Bilgi Güvenliği Uyumlu",
      "tone": "emerald"
    }
  ],
  "readingTime": "4 Dakika"
}
---

## Kısa Reçete (20 Saniye Kuralı) {#quick-recipe}

:::recipe Kısa Reçete: Yeni Kullanıcı Açma ve Departman Yetkisi Atama | 20 SANİYELİK AKIŞ
<strong>Yapılacak İşlem:</strong> <strong>[Kullanıcı İşlemleri]</strong> sekmesinden <strong>[Yeni Kullanıcı]</strong> butonuna tıklayın; kullanıcı adı, e-posta, kurumdaki görevine uygun rolü ve sağlık personeli ise <strong>[Personel Bağlantısı]</strong>'nı seçerek en az 8 karakterli geçici şifresini kaydedin. Birim amirlerini ve saha görevlerini (RKE muayene, cihaz bakım, ortam dozu, dozimetre, eğitim) atamak için <strong>[Birim Sorumlulukları]</strong> sekmesinden ilgili departmanı seçip <strong>[Sorumluyu Değiştir]</strong> veya <strong>[Görev Ata]</strong> butonunu kullanın.

<strong>Sistem Güvencesi:</strong> Personelin nöbet, izin ve dozimetre takipleri doğrudan özlük kartıyla entegre olur; her departmanın yalnızca bir asli <strong>Departman Sorumlusu</strong> bulunur ve saha iş yükünü paylaşmak üzere seçilen personellere görev tahsisi (delegasyon) yapılabilir.

- [metric] Erişim Modeli | RBAC & Kapsam | cyan
- [metric] Yetkili Rol | Sistem Yöneticisi | slate
- [metric] Şifre Kuralı | Min. 8 Karakter | amber
- [metric] Platform | Masaüstü | emerald
:::

## Kritik Sahada Yanlış Bilinen Kurallar (Mit Avcısı) {#myth-buster}

:::myth Kritik Sahada Yanlış Bilinen Kural (Mit Avcısı)
### Yanlış Algı:
<em>"İşten ayrılan personelin hesabını sildim, geçmişe ait onayladığı nöbetler ve girdiği dozimetre ölçümleri sistemden silindi veya bozuldu."</em>

### Gerçek Sistem Mantığı:
RADPYS'de fiziksel veri silme işlemi <strong>yoktur</strong>. Arayüzdeki eylemler kullanıcı hesabını kalıcı olarak silmez, doğrudan <strong>Pasif</strong> durumuna alır. Personelin onayladığı nöbetler, kaydettiği radyasyon ölçümleri ve tüm denetim izi geçmişi veri tabanında eksiksiz ve yasal olarak korunur.
:::

## 5N1K Kural ve Ayar Çözümleme Tablosu {#matrix-5n1k}

<div class="flex items-center justify-between mb-4">
 <div>
 <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
 Kullanıcı yönetimi, sistem rolleri ve yetki matrisindeki tüm kontrollerin operasyonel kuralları.
 </p>
 </div>
 </div>
 <div class="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm bg-white dark:bg-slate-900">

| NE? (Ekran Kontrolü) | NEDEN? (Amacı) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? |
| --- | --- | --- | --- | --- |
| Yeni Kullanıcı Tanımlama<br> <span class="text-xs font-normal text-slate-400 font-mono">[Yeni Kullanıcı Butonu]</span> | Personele sisteme giriş hakkı vermek. | Kullanıcı adı, ad soyad, rol ve en az 8 karakterli ilk şifre girilerek kaydedilir. | Yeni personel göreve başladığında. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Personel Bağlantısı<br> <span class="text-xs font-normal text-slate-400 font-mono">[Personel Bağlantısı Açılır Kutusu]</span> | Kullanıcıyı sağlık özlük kartına bağlamak. | Listeden personel seçilir. Bağlantı kurulmazsa hesap yalnızca operatör olur; nöbet ve dozimetreye giremez. | Sağlık personeline hesap tanımlanırken. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Hesap Kilidini Kaldırma<br> <span class="text-xs font-normal text-slate-400 font-mono">[Kilidi Kaldır Butonu]</span> | Hatalı şifreyle kilitlenen hesabı açmak. | Kilitli kullanıcı seçilip butona basılır; hatalı deneme sayacı ve zaman kilidi anında sıfırlanır. | Personel şifresini art arda yanlış girip bloke olduğunda. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Hesabı Pasife Alma<br> <span class="text-xs font-normal text-slate-400 font-mono">[Aktif/Pasif Butonu]</span> | Yetkiyi dondururken geçmiş kayıtları korumak. | Kullanıcı seçilip pasife alınır. Personelin İK çalışma durumu etkilenmez; yalnızca sistem oturum yetkisi kapatılır ve işlem izi korunur. | Personel ayrıldığında veya yetkisi durdurulduğunda. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Kendi Hesabını ve Admin'i Koruma<br> <span class="text-xs font-normal text-slate-400 font-mono">[Sistem Güvenlik Kilidi]</span> | Sistemin yöneticisiz kalmasını engellemek. | Açık oturum sahibi kendi hesabını pasife alamaz. Yerleşik sistem rolleri (Admin, Yönetici, Kullanıcı, İzleyici) silinemez veya yeniden adlandırılamaz; Admin rolünün yetkileri kısıtlanamaz. | Yanlışlıkla işlem yapılmaya çalışıldığında. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">Otomatik Kilit</span> |
| Rol Klonlama (Kopyalama)<br> <span class="text-xs font-normal text-slate-400 font-mono">[İşlemler > Seçileni Kopyala]</span> | Mevcut bir rolün tüm yetkilerini çoğaltmak. | Kaynak rolün tüm modül okuma/yazma/silme ve kapsam ayarları yeni role birebir aktarılır. | Benzer yetkilere sahip yeni bir unvan profili oluşturulurken. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Okuma Yetkisi Bağımlılık Motoru<br> <span class="text-xs font-normal text-slate-400 font-mono">[Yetki Matrisi Onay Kutuları]</span> | Mantıksız yetki dağılımlarını önlemek. | Yazma, Güncelleme veya Silme açılınca Okuma zorunlu açılır; Okuma kapatılınca tümü anında kapanır. | Yetki kutuları işaretlenirken. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Modül Düzeyinde Kapsam (Scope)<br> <span class="text-xs font-normal text-slate-400 font-mono">[Miras / Kendisi / Departman / Tümü]</span> | Veri görme sınırını modül bazında özelleştirmek. | Miras seçilirse rolün genel ayarı geçerli olur; istendiğinde belirli modüller 'Kendi Departmanı' veya 'Tümü'ne genişletilir. | Modül bazlı özel veri kısıtlaması gerektiğinde. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Hazır Yetki Şablonları<br> <span class="text-xs font-normal text-slate-400 font-mono">[Şablon Uygula Açılır Kutusu]</span> | Matrisi saniyeler içinde doldurmak. | "Sadece Okuma", "Operasyon" veya "Tam Yetki" şablonu tüm modül satırlarına topluca uygulanır. | Yeni bir role hızlı yetki atarken. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Roller Arası Canlı Kıyaslama<br> <span class="text-xs font-normal text-slate-400 font-mono">[Karşılaştır Butonu]</span> | İki rol arasındaki yetki farklarını denetlemek. | Seçilen hedef rol ile mevcut durum kıyaslanır; yetki farkı olan satırlar renkli olarak vurgulanır. | Yetki çakışmalarını tespit ederken. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Görsel Durum ve Rol Rozetleri<br> <span class="text-xs font-normal text-slate-400 font-mono">[Tablo Rozet Göstergeleri]</span> | Kullanıcıların rol seviyelerini ve hesap durumlarını tek bakışta ayırt etmek. | Kullanıcı tablosunda rol sütunu yetki türüne göre simgeli ve renkli rozetle (Kırmızı Admin, Sarı Yönetici, Mavi Birim Sorumlusu, Nötr Kullanıcı); hesap aktifliği ise yeşil [Aktif] veya gri [Pasif] rozetle gösterilir. | Kullanıcı ve rol listesi incelenirken. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Kişiye Özel Yetki İstisnaları<br> <span class="text-xs font-normal text-slate-400 font-mono">[Özel İzin Kutusu &amp; Özel Yetkileri Kaydet]</span> | Kullanıcının rolünü değiştirmeden belirli modüllerde kişiye özel yetki/kapsam istisnası tanımlamak. | Sol listeden kullanıcı seçildiğinde sağdaki [Kişiye Özel Yetkiler] matrisinde [Özel İzin] işaretlenerek Oku/Yaz/Güncelle/Sil ve Erişim Kapsamı (Kendi / Birim / Tüm) özelleştirilir; [Role Dön (İstisnaları Kaldır)] ile varsayılan rol yetkilerine dönülür. | Bir personele bağlı olduğu rol dışında ek modül yetkisi gerektiğinde. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |
| Birim Sorumlusu ve Saha Görev Tahsisi<br> <span class="text-xs font-normal text-slate-400 font-mono">[Birim Sorumlulukları > Sorumluyu Değiştir / Görev Ata]</span> | Her departmanın asli birim amirini belirlemek ve saha görevlerini çalışanlara devretmek. | [Birim Sorumlulukları] sekmesinde sol kart listesinden departman seçilir; [Sorumluyu Değiştir] ile tek asli birim sorumlusu atanır, [Görev Ata] ile RKE Muayene, Cihaz Bakım/Arıza, Ortam Dozu, Dozimetre ve Eğitim saha görevleri personellere tahsis edilir. | Birim amiri atamalarında ve saha iş yükü görev dağılımında. | <span class="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">Sistem Yöneticisi</span> |

 </div>

## Rol Tabanlı Yetki ve Kapsam Mantığı (Mermaid) {#workflow}

<p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
 Aşağıdaki şema, bir personelin sisteme girişinden itibaren rol yetkilerinin ve 4 kademeli veri kapsamının arka planda nasıl çözümlendiğini göstermektedir.
 </p>
 <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-x-auto">

```mermaid
flowchart TD
 A["Kullanıcı Oturum Açar"] --> B{"Rolü Nedir?"}
 
 B -->|Admin| C["Tam Sistem Yetkisi<br/>Tüm Modüller Açık"]
 B -->|"Standart Rol"| D["Modül Yetki Matrisi Kontrolü"]
 
 D --> E{"Okuma Yetkisi Var mı?"}
 E -->|Hayır| F["Modül / Sekme Gizlenir"]
 E -->|Evet| G["Modül Kullanıma Açılır"]
 
 G --> H{"Yazma / Silme İzni?"}
 H -->|Var| I["Kayıt Ekle / Güncelle / Pasife Al"]
 H -->|Yok| J["Sadece İnceleme Kipi"]
 
 G --> K{"Modül Kapsamı Nedir?"}
 K -->|Miras| L["Rolün Genel Kapsamını Uygula"]
 K -->|Kendisi| M["Sadece Kendi Sicil Kayıtları"]
 K -->|Departman| N["Kendi Birimindeki Tüm Kayıtlar"]
 K -->|Tümü| O["Tüm Kurum Verilerini Görme"]
```

 </div>

## Ekran Konumları ve Görsel Rehber {#screenshots}

![Kullanıcı Yönetimi Ekranı | Yönetici Paneli > Kullanıcı ve Rol Yönetimi > Kullanıcı İşlemleri | Kullanıcı Listesi & Eylemler](assets/img/02_kullanici_yonetim_page.png "<span><strong>Yasal Bilgilendirme:</strong> Bu görseldeki kullanıcı isimleri, unvanlar ve e-posta adresleri tamamen test amaçlı sentetik veridir. Gerçek kişi veya kurum kayıtlarıyla benzerlikler tesadüfidir.</span>")

![Modül Yetkileri Matrisi | Yönetici Paneli > Kullanıcı ve Rol Yönetimi > Modül Yetkileri | Yetki & Kapsam Matrisi](assets/img/02_modul_yetkileri_page.png "<span><strong>Yasal Bilgilendirme:</strong> Bu görseldeki yetki şablonları, modül izinleri ve kapsam yapılandırmaları test ortamı simülasyonudur.</span>")

## Adım Adım Operasyonel Eylem Akışı {#step-by-step}

<div class="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
 <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
 <strong class="text-slate-900 dark:text-white text-base block mb-2">Adım 1: Yeni Kullanıcı Tanımlama ve İlk Şifre Atama</strong>
 Sol ana menüden <strong>[Kullanıcı ve Rol Yönetimi]</strong> penceresini açın. <strong>[Kullanıcılar]</strong> sekmesinde <strong>[Yeni Kullanıcı]</strong> butonuna tıklayın. Kullanıcı adını, ad soyadı ve e-posta adresini girin. Sağlık personeli ise <strong>[Personel Bağlantısı]</strong> kutusundan personeli eşleyin. En az 8 karakterli ilk şifresini yazıp <strong>[Kaydet]</strong> butonuna basın.
 </div>
 <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
 <strong class="text-slate-900 dark:text-white text-base block mb-2">Adım 2: Hatalı Şifreyle Kilitlenen Hesabı Açma</strong>
 Kullanıcı listesindeki arama kutusuna personelin adını yazarak satırını bulun. Yanlış giriş sayısını aşmış personelin satırına tıkladığınızda yukarıdaki <strong>[Kilidi Kaldır]</strong> butonu aktifleşir. Butona tıklayıp onay verdiğinizde kilit saniyeler içinde kaldırılır.
 </div>
 <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
 <strong class="text-slate-900 dark:text-white text-base block mb-2">Adım 3: Rol Yönetimi ve Rol Klonlama</strong>
 <strong>[Roller ve Yetkiler]</strong> sekmesine geçin. Sol panelde sistem rolleri listelenir. Sıfırdan bir rol açmak için <strong>[Yeni Rol Ekle]</strong> butonuna basabilirsiniz. Eğer mevcut bir unvanın (Örn: *Kıdemli Tekniker*) yetkilerini türetmek istiyorsanız ilgili role tıklayıp <strong>[İşlemler] > [Seçileni Kopyala]</strong> seçeneğiyle tüm yetkileri tek tıkla yeni role çoğaltın.
 </div>
 <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
 <strong class="text-slate-900 dark:text-white text-base block mb-2">Adım 4: Entegre Modül Yetki Matrisini Düzenleme ve Şablon Uygulama</strong>
 Aynı sekmenin sağ/alt alanında seçili role ait Modül Yetki Matrisi doğrudan açılır. 20 modülü tek tek ayarlamak yerine üstteki <strong>[Şablon]</strong> açılır kutusundan <em>Operasyon</em> veya <em>Sadece Okuma</em> seçip <strong>[Şablon Uygula]</strong> butonuna tıklayabilirsiniz. Özel modüllerde Okuma/Yazma/Güncelleme/Silme kutularını ve Kapsam radyo butonlarını (Miras, Kendisi, Departman, Tümü) seçip sağ alttaki <strong>[Kaydet]</strong> butonuna basın. Kapsam Açıklaması sütunu tam genişlikte net bilgi sunarken, değişiklik yapılan satırlar modül başlığındaki rozetle canlı gösterilir.
 </div>
 <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
 <strong class="text-slate-900 dark:text-white text-base block mb-2">Adım 5: İki Rolün Yetkilerini Canlı Karşılaştırma</strong>
 İki görev profili arasındaki yetki farklarını denetlemek için <strong>[Karşılaştır]</strong> kutusundan ikinci bir rol seçip <strong>[Karşılaştır]</strong> butonuna tıklayın. Açılan pencerede yetkileri veya kapsamları farklı olan tüm modül satırları vurgulu renkle listelenir.
 </div>
 </div>

## Sıkça Sorulan Sorular ve Takılma Yönetimi {#faq}

:::faq
### Personel kartına bağlamadığım bir kullanıcı nöbet yazabilir veya nöbet listesinde görünebilir mi?
<strong>Hayır.</strong> Bir kullanıcı hesabının nöbet çizelgesinde aday olarak yer alabilmesi, izin talep edebilmesi veya kişisel dozimetre ölçümlerinin işlenebilmesi için mutlaka <strong>[Personel Bağlantısı]</strong> yapılmış olması gerekir. Personele bağlanmayan hesaplar yalnızca bağımsız bir operatör/yönetici hesabı olarak çalışır.

### Personel kurumdan ayrıldığında kullanıcı kaydını tamamen silebilir miyim?
RADPYS'de fiziksel veri silme işlemi bulunmaz. Kullanıcıyı listeden seçip <strong>[Pasif Yap]</strong> butonuna bastığınızda hesabın sisteme girişi derhal kesilir. Ancak kullanıcının geçmişte onayladığı nöbetler ve kaydettiği işlemler denetim izinde bozulmadan korunur.

### Bir role Yazma yetkisi vermek istediğimde neden Okuma yetkisi otomatik olarak işaretleniyor?
RADPYS Yetki Bağımlılık Motoru gereğince bir modülü görüntüleme (Okuma) yetkisi olmayan bir personelin o modülde yeni kayıt oluşturması veya düzenleme yapması mantıksal olarak imkansızdır. Bu nedenle Yazma, Güncelleme veya Silme kutularından biri açıldığında Okuma yetkisi otomatik olarak kilitli şekilde açılır.

### "Miras" kapsamı seçildiğinde personelin yetki alanı neye göre belirlenir?
Modül yetki tablosundaki <strong>Miras</strong> seçeneği, ilgili modülün rolün genel ayarlarında tanımlanmış olan veri sınırını (Kendisi, Kendi Departmanı veya Tümü) doğrudan uygulamasını sağlar. Eğer belirli bir modül için farklı bir kural uygulamak isterseniz satırdaki radyo butonunu doğrudan <strong>[Kendisi]</strong>, <strong>[Departman]</strong> veya <strong>[Tümü]</strong> olarak değiştirebilirsiniz.
:::
