# RADPYS V4 — Sıkça Sorulan Sorular (SSS) ve Sistem Uyarıları Rehberi

Bu doküman, RADPYS V4 (Radyoloji & Radyasyon Personeli Yönetim Sistemi) masaüstü ve web portalı kullanımı sırasında karşılaşılabilecek tüm **Sık Karşılaşılan Uyarılar, Hata Mesajları, Sistem Kısıtları ve Çözüm Yollarını** modül modül derlemektedir.

---

## 📑 İçindekiler

1. [Giriş, Güvenlik & Oturum Yönetimi](#1-giris-guvenlik--oturum-yonetimi)
2. [Personel & Özlük Yönetimi Modülü](#2-personel--ozluk-yonetimi-modulu)
3. [Periyodik Sağlık Muayeneleri & Taramaları](#3-periyodik-saglik-muayeneleri--taramalari)
4. [İzin Takip & Şua İzni Modülü](#4-izin-takip--sua-izni-modulu)
5. [Dozimetre Takip & NDK Limit Uyarısı Modülü](#5-dozimetre-takip--ndk-limit-uyarisi-modulu)
6. [Nöbet Yönetimi & Otomatik Dağıtım Modülü](#6-nobet-yonetimi--otomatik-dagitim-modulu)
7. [Kalite, Olay Bildirim & DÖF (CAPA) Modülü](#7-kalite-olay-bildirim--dof-capa-modulu)
8. [Hizmet İçi Eğitim, Soru Havuzu & Online Sınav Modülü](#8-hizmet-ici-egitim--online-sinav-modulu)
9. [Evrensel Onay Bekleyen Görevler Paneli](#9-evrensel-onay-bekleyen-gorevler-paneli)
10. [Raporlar Modülü (Rapor Merkezi)](#10-raporlar-modulu-rapor-merkezi)
11. [Tanımlamalar (Lookup / Sabit Veri) Modülü](#11-tanimlamalar-lookup--sabit-veri-modulu)
12. [Web Portalı & REST API Senkronizasyon Modülü](#12-web-portali--rest-api-senkronizasyon-modulu)
13. [Merkezi Bildirim ve Durum Çubuğu Sistemi](#13-merkezi-bildirim-ve-durum-cubugu-sistemi)
14. [Program Ayarları & Temalar](#14-program-ayarlari--temalar)
15. [Veritabanı, Bakım & PostgreSQL Mimarisi](#15-veritabani-bakim--postgresql-mimarisi)
16. [Toplu İçe Aktarma (Excel / CSV Import) Sihirbazı](#16-toplu-ice-aktarma-excel--csv-import-sihirbazi)
17. [Tıbbi Cihaz, NDK Lisansı & Mobil QR Arıza Yönetimi](#17-tibbi-cihaz-ndk-lisansi--mobil-qr-ariza-yonetimi)
18. [Koruyucu Ekipman (RKE), DIN 6857-1 Kalite Kontrol & Akıllı Kodlama](#18-koruyucu-ekipman-rke-din-6857-kalite-kontrol-ve-akilli-kodlama)

---

<a id="1-giris-guvenlik--oturum-yonetimi"></a>

## 1. Giriş, Güvenlik & Oturum Yönetimi

### ❓ 1.1 Kurulumda "Windows kişisel bilgisayarınızı korudu" (SmartScreen) uyarısı alıyorum, ne yapmalıyım?

* **Neden Olur?:** Windows SmartScreen mekanizmasının henüz dijital imzası tanınmayan yeni EXE dosyaları için varsayılan güvenlik uyarısıdır. RADPYS V4 tamamen güvenlidir.
* **Çözüm:**
  1. Mavi renkli *"Windows kişisel bilgisayarınızı korudu"* uyarısında **"Daha fazla bilgi"** (*More info*) bağlantısına tıklayın.
  2. Pencerenin altında açılan **"Yine de çalıştır"** (*Run anyway*) butonuna basarak kurulumu başlatın.
  3. Windows Defender karantinaya alırsa: *Windows Güvenliği > Virüs ve tehdit koruması > Koruma geçmişi* sekmesinden `RADPYS.exe` kaydını bulup **"Cihazda İzin Ver"** deyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 1), `build_installer.bat`

### ❓ 1.2 İlk kurulumda varsayılan Yönetici (Admin) hesabı şifresi nedir ve nerededir?

* **Neden Olur?:** RADPYS V4 ilk kez yüklendiğinde veritabanı otomatik olarak bir `admin` hesabı oluşturur ve rastgele geçici bir şifre atar.
* **Çözüm:** Uygulama dizinindeki `data/ilk_admin_bilgileri.txt` dosyasını Not Defteri ile açarak tek seferlik geçici `admin` şifrenizi görebilirsiniz. İlk girişte sistem sizi otomatik olarak şifre yenilemeye yönlendirir. Güvenlik amacıyla bu dosyayı ilk girişten sonra siliniz.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 2.1), `app/database.py`

### ❓ 1.3 "Eksik Bilgi: Kullanıcı adı ve şifre zorunludur" veya "Giriş Başarısız" uyarısı

* **Neden Olur?:** Kullanıcı adı veya şifre boş bırakılmış ya da yanlış girilmiştir (*Caps Lock* açık olabilir).
* **Çözüm:** Kullanıcı adı ve şifrenizi kontrol edin. Karakterleri kontrol etmek için **"Şifreyi Göster"** kutucuğunu işaretleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 2)

### ❓ 1.4 "Hesabınız Geçici Olarak Kilitlendi" uyarısı alıyorum, ne yapmalıyım?

* **Neden Olur?:** Güvenlik protokolü gereği **5 kez üst üste hatalı şifre** girildiğinde hesap kilitlenir.
* **Çözüm:** Giriş ekranındaki **"Şifremi Unuttum"** butonunu kullanarak kayıtlı e-posta adresinizle yeni şifre oluşturabilir veya Sistem Yöneticinize başvurarak *Yönetim > Kullanıcı Yönetimi* panelinden kilidin kaldırılmasını talep edebilirsiniz.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 2 & 16.5)

### ❓ 1.5 Sistem Yönetici (Sudo) Şifresi Nedir ve Nerelerde İstenir?

* **Neden Olur?:** Veritabanı sıfırlama, kullanıcı rol yetkileri değiştirme veya toplu veri silme gibi kritik güvenlik işlemlerinde işlem yapan kullanıcının kendi şifresini tekrar doğrulaması istenir.
* **Çözüm:** Açılan doğrulama kutusuna mevcut oturum açtığınız kullanıcı şifrenizi girin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 18.4)

### ❓ 1.6 Kademeli Lisans Uyarısı (15 Gün / 3 Gün) ve Yönetici Aktivasyon Modu Nedir?

* **Açıklama:** RADPYS lisans süresinin dolmasına 15 gün ve 3 gün kala sistem açılışında kademeli erken uyarı bildirimleri gösterilir.
  * **Süre Dolduğunda:** Normal kullanıcıların sisteme girişi engellenir; Admin kullanıcılar için modüller salt-okunur kilitlenerek doğrudan *Lisans Aktivasyon Ekranı* açılır.
  * **Çözüm:** Yeni lisans anahtarınızı girerek sistemi süresiz veya yeni periyotta aktifleştirin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 1.3), `app/services/system/license_service.py`

---

<a id="2-personel--ozluk-yonetimi-modulu"></a>

## 2. Personel & Özlük Yönetimi Modülü

### ❓ 2.1 "Bu TC Kimlik Numarası İle Kayıtlı Başka Bir Personel Var" uyarısı

* **Neden Olur?:** Girilen T.C. Kimlik Numarası veritabanında başka bir personele zaten kayıtlıdır.
* **Çözüm:** Personel arama çubuğundan TC kimlik numarasını aratarak mevcut kaydı güncelleyin veya yeni kayıttaki TC numarasını kontrol edin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3)

### ❓ 2.2 "Personel Silinemez: Geçmiş Nöbet Kayıtları / Doz Ölçümleri Mevcut" uyarısı

* **Neden Olur?:** Veri bütünlüğü ve denetim izi gereğince geçmiş nöbeti, dozimetre ölçümü veya sağlık muayenesi olan personel silinemez.
* **Çözüm:** Personeli veritabanından silmek yerine durumunu **🔴 Pasif** olarak güncelleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3)

### ❓ 2.3 "Personel Pasife Alınamaz: Aktif Nöbet veya İzin Kaydı Bulunmaktadır" uyarısı

* **Neden Olur?:** Gelecek tarihe atanmış nöbet veya onaylanmış izni bulunan personel doğrudan pasife alınamaz.
* **Çözüm:** Önce nöbet çizelgesinden veya izin modülünden personelin aktif kayıtlarını iptal/devir edin, ardından personeli pasife alın.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3)

### ❓ 2.4 Personel Kartında KVKK Fernet AES-256 Şifreli Evrak Yükleme / İndirme Nasıl Yapılır?

* **Açıklama:** Personel özlük kartı içerisindeki *Belgeler & Sözleşmeler* sekmesinden yüklenen tüm PDF, JPEG ve Word dosyaları diske açık yazılmaz; veritabanında **AES-256 Fernet** algoritmasıyla şifreli blob olarak saklanır.
* **Çözüm:** Evrakı görüntülemek istediğinizde listedeki **"Görüntüle"** butonuna basmanız yeterlidir; sistem dosyayı bellekte anlık deşifre ederek sistemin varsayılan PDF görüntüleyicisinde güvenle açar.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3.4), `app/db/database.py`

### ❓ 2.5 Personel Birim Değişikliği Yapıldığında Eski Nöbet ve İzinleri Etkilenir mi?

* **Yanıt:** Hayır. Personelin kadro veya asıl birimi güncellendiğinde geçmiş dönemde onaylanmış ve yayınlanmış nöbet planları, geçmiş izin hakedişleri ve FHZ cetvelleri korunur; yeni birim ataması yalnızca gelecekteki nöbet planları ve mesailer için geçerli olur.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3.2)

---

<a id="3-periyodik-saglik-muayeneleri--taramalari"></a>

## 3. Periyodik Sağlık Muayeneleri & Taramaları

### ❓ 3.1 🔴 "Süresi Geçmiş Muayene" Uyarısı (Kırmızı Satır Vurgusu)

* **Neden Olur?:** Radyasyon çalışanının son periyodik muayenesinin üzerinden 1 yıl (365 gün) veya daha fazla süre geçmiştir.
* **Çözüm:** Personeli derhal periyodik sağlık taramasına (Kan/Hemogram, Dahiliye, Dermatoloji, Göz) sevk edip muayene sonuçlarını veritabanına işleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3 & NDK Mevzuatı)

### ❓ 3.2 🟡 "Yaklaşan Muayene" Uyarısı (Sarı Satır Vurgusu)

* **Neden Olur?:** Personelin yıllık periyodik muayene son tarihine 30 günden az kalmıştır.
* **Çözüm:** Randevu sürecini başlatmak için sağlık kurumu sevkiyatını planlayın.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3)

### ❓ 3.3 "Eksik Branş Muayenesi" uyarısı nedir?

* **Neden Olur?:** Dahiliye, Dermatoloji, Göz veya Periferik Yayma (Kan) muayene branşlarından biri henüz sisteme girilmemiştir.
* **Çözüm:** Muayene penceresinde eksik branş sekmesini açarak doktordan alınan muayene sonucunu girip kaydedin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3)

### ❓ 3.4 Şua İzni Öncesi / İşe Giriş Muayenesi ve Periyodik Muayene Farkı Nedir?

* **Açıklama:**
  * **İşe Giriş Muayenesi:** Radyasyonlu alanda ilk kez göreve başlayacak personelin bazal kan ve göz değerlerini tespit etmek için zorunludur.
  * **Periyodik Muayene:** Yılda en az 1 kez (365 gün) tekrarlanması gereken genel taramadır.
  * **Şua İzni Öncesi Muayene:** 4 haftalık Şua iznine ayrılmadan önce personelin sağlık durumunu teyit etmek amacıyla kurum iç yönergesiyle uygulanan muayene türüdür.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3.3)

---

<a id="4-izin-takip--sua-izni-modulu"></a>

## 4. İzin Takip & Şua İzni Modülü

### ❓ 4.1 "İzin Bakiyesi Yetersiz / Süresi Kalan Bakiyeyi Aşıyor" uyarısı

* **Neden Olur?:** Talep edilen izin günü sayısı personelin kalan yıllık izin veya mazeret izni bakiyesini aşmaktadır.
* **Çözüm:** Personelin izin bakiyesini *İzin Takip > Personel İzin Özeti* ekranından kontrol edin veya mazeret izni olarak düzenleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 4)

### ❓ 4.2 "Şua İzni Kesintisiz Kullanılmalıdır" uyarısı

* **Neden Olur?:** Sağlık Bakanlığı ve NDK mevzuatı gereği 4 haftalık Şua İzni (Sağlık İzni) parçalı kullanılamaz; tek seferde blok olarak kullandırılmalıdır.
* **Çözüm:** İzin başlangıç ve bitiş tarihlerini 4 haftalık blok olarak ayarlayın.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 4 & NDK Mevzuatı)

### ❓ 4.3 "Seçili Dönem Kilitli Olduğu İçin İşlem Yapılamaz" uyarısı

* **Neden Olur?:** İlgili çalışma dönemi önceden **"Dönemi Kilitle"** veya **"Yılı Kilitle"** butonuyla kilitlenmiştir.
* **Çözüm:** Sistem yöneticisine başvurarak ilgili dönemin kilidini geçici olarak kaldırtın.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 4)

### ❓ 4.5 İzin Kayıtlarındaki "Ön Onaylı" ve "Resmi Onaylı" Statüleri Ne Anlama Gelir?

* **Açıklama:** RADPYS V4 2-Aşamalı İzin Onay mekanizması kullanır.
  * **🟡 Ön Onaylı:** Personelin şifahi veya ön bildirim yaptığı ancak idari izin belgesinin henüz resmiyet kazanmadığı durumdur. Nöbet motoru bu tarihleri otomatik bloklayarak çakışmayı engeller.
  * **🟢 Resmi Onaylı:** İzin belgesinin kurumsal onay aldığı durumdur. Yasal Şua izni hakedişi, yıllık izin düşümü ve Fiili Hizmet (FHZ) cetvellerinde sadece **Resmi Onaylı** kayıtlar işlenir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 4.1), `app/domain/izin/policies.py`

### ❓ 4.6 Fiili Hizmet (FHZ) Hesaplamasında "Resmi Onaysız İzin Var" Uyarısı Neden Çıkar?

* **Neden Olur?:** FHZ dönemi hesaplanırken seçilen dönemde henüz idari evrakı tamamlanmamış **"Ön Onaylı"** izin kayıtları tespit edilmiştir.
* **Çözüm:** Açılan ikaz penceresindeki *"İzinlere Git"* butonuna basarak ilgili izinlerin durumunu kontrol edin. Evrakları tamamlanan izinleri *"Resmi Onaylı"* yapın, ardından FHZ hesaplamasını yeniden başlatın.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 6.2), `ui/pages/fiili/fhz_onaysiz_izin_uyari_dialog.ui`

### ❓ 4.7 Toplu İçe Aktarım (Excel/CSV) İle Yüklenen Geçmiş İzinler Nasıl Kaydedilir?

* **Açıklama:** Toplu aktarım sihirbazı (`bulk_import`) ile aktarılan geçmiş dönem izinleri fiilen kullanılmış kabul edildiğinden sistem tarafından otomatik olarak **`Resmi Onaylı`** statüsünde kaydedilir. Ekstra onay işlemine gerek kalmadan hakediş ve FHZ hesaplamalarına doğrudan yansır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 4.1 & 15), `app/services/personel/izin_service.py`

### ❓ 4.8 İzin Hakediş Tablosundaki " [⏳ 45g]" veya " [🚨 YANDI]" Şua İzni Rozetleri Ne Anlama Gelir?

* **Açıklama:** Şua izinleri yasal olarak kazanıldığı takvim yılı (31 Aralık) sonuna kadar kullanılmalıdır; sonraki yıla devretmez.
  * **[⏳ 45g] (Turuncu):** Yıl sonuna 60 günden az kaldığını ve personelin henüz kullanmadığı Şua izni bulunduğunu belirtir.
  * **[🚨 15g] (Kırmızı - Kritik):** Yıl sonuna 30 günden az kaldığını ve acil izin planlaması gerektiğini belirtir.
  * **[🚨 YANDI]:** 31 Aralık tarihi geçmiş ve kullanılmayan Şua izninin zamanaşımına uğradığını belirtir.
* **Çözüm:** İzin Hakediş ekranında *"⏳ Zamanaşımı Yaklaşan Şua İzinleri"* filtresini işaretleyerek riskli personelleri tek tıkla listeleyebilir ve nöbet/izin planlarını erkenden organize edebilirsiniz.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 4.2), `app/services/personel/izin_service.py`

### ❓ 4.9 Yıllık İzin ile Şua İzni Arasındaki Devir ve Yanma Farkları Nelerdir?

* **Yanıt:**
  * **Yıllık İzin:** İdarenin uygun görmesi halinde bir sonraki yıla devredebilir (`Devir Gün` sütununda takip edilir).
  * **Şua İzni:** Radyasyondan arınma ve biyolojik dinlenme hakkı olduğu için cari takvim yılı içinde kullandırılmak zorundadır; sonraki yıla devredilemez veya nakde çevrilemez.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 4.2 & NDK Mevzuatı)

### ❓ 4.10 Mazeret İzni Eklendiğinde Nöbet Çizelgesi Otomatik Güncellenir mi?

* **Yanıt:** Evet. İzin onaylandığı anda sistem yayınlanmış nöbet planındaki personelin nöbetini otomatik olarak `IPTAL_MAZERET` durumuna çeker ve o slota ikame atanabilmesi için nöbet hücresini boşa çıkarır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 4.3 & 6.4)

---

<a id="5-dozimetre-takip--ndk-limit-uyarisi-modulu"></a>

## 5. Dozimetre Takip & NDK Limit Uyarısı Modülü

### ❓ 5.1 ☢️ "NDK Yıllık Limit Aşımı (>20 mSv)" uyarısı alındığında ne yapılmalıdır?

* **Neden Olur?:** Personelin 12 aylık kümülatif tümdücut dozu NDK ve Sağlık Bakanlığı yasal sınırı olan 20 mSv (veya 5 yıllık 100 mSv) limitini aşmıştır.
* **Çözüm:**
  1. Sistem personeli otomatik 🔴 **"Yüksek Riskli / Limit Aşıldı"** statüsüne alır.
  2. Personeli derhal radyasyonlu alandan (BT/Röntgen/Nükleer Tıp) çıkarıp radyasyonsuz birime (MR/Poliklinik/İdari) çekin.
  3. *Kalite & Güvenlik > Olay Bildirim / DÖF* panelinden otomatik oluşturulan DÖF kaydını işleyin ve Sağlık Bakanlığı sağlık tarama tutanağını sisteme yükleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 5 & 16.2), NDK Mevzuat Engine

### ❓ 5.2 "Mükerrer Dozimetre Ölçüm Kaydı" uyarısı

* **Neden Olur?:** Aynı personel ve aynı ölçüm periyodu (örn: *2026/03*) için sistemde zaten kayıtlı bir dozimetre doz verisi bulunmaktadır.
* **Çözüm:** Var olan ölçüm kaydını düzenleyin veya periyot bilgisini kontrol edin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 5)

### ❓ 5.3 RD.F43 Resmi Doz Araştırma Formu Nasıl Doldurulur ve 10 İş Günü Sayacı Nasıl Çalışır?

* **Açıklama:** NDK yasal limit aşımı veya dozimetre unutulma durumlarında resmi NDK/RADKOR 2 sayfalık RD.F43 formu doldurulmalıdır.
  * **10 İş Günü Yasal Süre Sayacı:** Form açılışında hafta sonlarını atlayarak kalan yasal araştırma süresini rozetle gösterir (`🟢 X gün kaldı`, `🚨 Yasal Süre Doldu`).
  * **Dinamik Doz Hesaplama Sihirbazı:** Unutulma süresi (saat) ve cihaz doz hızından ($\mu\text{Sv/sa}$) tahmini dozu tek tıkla otomatik hesaplar.
  * **Word/PDF Çıktı:** *"Resmi RD.F43 Word Çıktısı"* butonuyla doldurulan form doğrudan resmi NDK formatında üretilir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 5.3), `app/services/system/export_service.py`

### ❓ 5.4 Dozimetre Karşılaştırma Grafikleri (Sparkline) ve Delta Doz Değişimi Nasıl Okunur?

* **Açıklama:** *Dozimetre Karşılaştırma* sekmesinde iki dönem arasındaki fark (`Delta = Dönem 2 - Dönem 1`) ve yüzde değişim oranı görüntülenir.
  * Mini sparkline çizgi grafiği personelin son 12 aylık doz eğilimini gösterir.
  * Dozu ani yükselen personeller sarı/kırmızı renkle öne çıkarılarak koruyucu ekipman (RKE) kullanımı veya cihaz sızıntı denetimi için uyarı verilir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 5.2)

### ❓ 5.5 Ekstremite (Yüzük / Bileklik) Doz Takibi Nasıl Yapılır ve Yasal Limiti Nedir?

* **Açıklama:** Nükleer tıp, anjiyografi ve girişimsel radyolojide çalışan personelin el/parmak maruziyeti için ekstremite dozu takip edilir.
  * **Yasal Limit:** Yıllık 500 mSv (Tüm vücut 20 mSv limitinden ayrı takip edilir).
  * Sistemde manuel veya Excel aktarımı ile `Ekstremite` alanına girilen değerler ayrı bir yasal limit motoruyla denetlenir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 5.1 & NDK Mevzuatı)

---

<a id="6-nobet-yonetimi--otomatik-dagitim-modulu"></a>

## 6. Nöbet Yönetimi & Otomatik Dağıtım Modülü

### ❓ 6.1 🚨 Nöbet Otomatik Dağıtım Sihirbazı boş slot bırakıyor (🔴 "Kadro Yetersiz / Boş Slot"), nasıl çözülür?

* **Neden Olur?:** Birimdeki personel azlığı, 24 saatlik nöbet ertesi zorunlu dinlenme kuralı, emzirme/gebelik muafiyetleri veya yıllık fazla mesai tavan sınırının aşılması nedeniyle matematiksel kısıtlar çakışmaktadır.
* **Çözüm:**
  1. Nöbet Sihirbazı ekranında **"Çapraz Görevlendirme"** butonuna basarak komşu birimlerden geçici personel çekin.
  2. *Nöbet Ayarları > Yasal Kısıtlar* ekranından yumuşak kısıt limitlerini esnetin.
  3. Kırmızı hücreye çift tıklayarak amir yetkisiyle manuel atama yapın.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 6 & 16.1)

### ❓ 6.2 "Yasal Nöbet Ertesi Dinlenme İhlali" uyarısı alıyorum

* **Neden Olur?:** Personel 24 saatlik nöbetten çıktıktan sonra en az 24 saat geçmeden tekrar nöbet yazılmaya çalışılmıştır. Sert kısıt engeller.
* **Çözüm:** Personelin aradaki dinlenme süresini gözeterek nöbet gününü değiştirin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 6)

### ❓ 6.3 İki personel peş peşe 2 gün üst üste nöbet tutabilir mi?

* **Yanıt:** Hayır. Sistemde *Nöbet Ertesi Dinlenme* sert kısıtı aktif olduğu için 24 saatlik nöbet sonrası en az 24 saat zorunlu dinlenme verilir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 6.16)

### ❓ 6.4 Nöbet Çizelgesinde "⚡ Akıllı İkame Ata" Özelliği Nasıl Çalışır?

* **Açıklama:** Acil izin, rapor veya boş kalan bir nöbet slotu için en uygun yedek personeli anında bulur.
* **Nasıl Kullanılır?:**
  1. Çizelge tablosundaki herhangi bir hücreye **sağ tıklayın**.
  2. *"⚡ Akıllı İkame Ata (Önerilenler)"* menüsünden kısıtları sağlamış ve en yüksek uygunluk skoruna sahip adaya (örn: *Ahmet Kaya %95*) tıklayın.
  3. Sistem izinli ve çakışan personelleri otomatik eler, aylık çalışma açığı en çok olan personeli tek tıkla slota atar ve aylık çalışma saatlerini günceller.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 6.4), `app/services/nobet/nobet_cizelge_service.py`

### ❓ 6.5 Yayınlanmış planda nöbet devri veya isim değişikliği yapıldığında hakediş saatleri ne olur?

* **Yanıt:** Eğer *Onayda Otomatik Çizelge Güncelle* seçeneği aktifse, devir onaylandığı anda nöbet çizelgesindeki isim otomatik güncellenir ve personellerin aylık hakediş/fazla mesai saatleri anında yeniden hesaplanır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 6.16)

### ❓ 6.6 Hafta Sonu ve Bayram Nöbet Adalet Dengesi Katsayısı Nasıl Çalışır?

* **Açıklama:** Otomatik dağıtım motoru (Solver), geçmiş 3-6 ayın nöbet geçmişini tarar. Cumartesi, pazar ve bayram nöbetlerini personeller arasında eşit dağıtmak için nöbet yükü az olan personele öncelik puanı atar.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 6.1)

### ❓ 6.7 Çapraz Görevlendirme İle Komşu Birimden Personel Çekildiğinde Saatleri Hangi Birime Yazılır?

* **Yanıt:** Personel nöbeti hangi birimde tuttuysa (örn: *Acil Radyoloji*), o nöbetin saat yükü ve Şua çalışma süresi nöbet tutulan birimin radyasyon risk katsayısı ile kaydedilir; personelin ana kadro birimindeki normal mesailerine engel teşkil etmez.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 6.2)

### ❓ 6.8 🤰 Personel gebelik bildirimi yaptığında mevcut ve gelecek ay nöbetleri nasıl etkilenir?

* **Yanıt:**
  * **Radyasyonlu Alan Personeli (`radyasyonlu_alan = 1`):** Mevcut ve hazırlanmış gelecek ay nöbet çizelgesindeki **GÜNDÜZ VE GECE TÜM NÖBETLERİ** otomatik olarak `IPTAL_MAZERET` yapılır.
  * **Radyasyonsuz Alan Personeli (`radyasyonlu_alan = 0`):** Gündüz mesaileri saklı tutulur, **SADECE GECE VE 24 SAATLİK NÖBETLERİ** `IPTAL_MAZERET` yapılır.
  * **Yönetici Aksiyonu:** Yönetici **🎯 Yönetici Aksiyon Merkezi** (Masaüstünde *Onay Bekleyen Görevler > Gebelik & İdari Aksiyonlar*) üzerinden tek tıkla personelin yeni radyasyonsuz birim atamasını, boşalan nöbetlerin ikamelerini ve 160 saatlik gündüz mesai dengelemesini 3 adımlı sihirbazla tamamlar.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 3.6 & 8.4)

---

<a id="7-kalite-olay-bildirim--dof-capa-modulu"></a>

## 7. Kalite, Olay Bildirim & DÖF (CAPA) Modülü

### ❓ 7.1 "Olay Tanımı / Detaylı Açıklaması Boş Bırakılamaz" uyarısı

* **Neden Olur?:** Olay Bildirim Sihirbazında zorunlu olan olay detayı girilmeden bildirim gönderilmeye çalışılmıştır.
* **Çözüm:** Olay açıklama alanını en az 10 karakter olacak şekilde doldurun.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 7)

### ❓ 7.2 Anonim olay bildirimlerinde kişisel bilgilerim görünür mü?

* **Yanıt:** Hayır. *Anonim Bildirim Yap* seçeneği işaretlendiğinde sistem veritabanında bildiren personelin kimliğini anonimleştirir; yönetici panelinde isim görünmez.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 7)

### ❓ 7.3 ☢️ Radyasyon kazası veya ihlalinde "NDK 3 Günlük Yasal Bildirim Takibi" nasıl çalışır?

* **Neden Olur?:** Olay kategorisi "RADYASYON" içerdiğinde veya manuel *NDK Bildirimi Gerekli* olarak işaretlendiğinde, NDK (Nükleer Düzenleme Kurumu) mevzuatı gereği 3 takvim günü (72 saat) içinde resmi bildirim yapılması yasal zorunluluktur.
* **Çözüm:**
  1. Sistem bildirim tarihine otomatik 3 gün ekleyerek `ndk_bildirim_son_tarih` alanını hesaplar ve takip durumunu `bekliyor` statüsüne alır.
  2. NDK'ya resmi bildirim yapıldığında olay detay sayfasından veya Web Portalından NDK bildirim tarihini sisteme işleyin. Takip durumu otomatik `yapildi` olarak güncellenir.
  3. Süresi yaklaşan veya geciken bildirimler panelde 🔴 **"NDK Bildirimi Bekliyor / Gecikmiş"** rozetiyle uyarılır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 7.4 & NDK Mevzuatı)

### ❓ 7.4 NDK 2. Gün Hatırlatıcısı ve Süre Aşımı Alarmları Nasıl Çalışır?

* **Açıklama:** NDK bildirim bekleyen vakalarda olayın üzerinden 2 gün geçtiğinde sistem arka plan servisi otomatik olarak:
  * ⚠️ **NDK 2. Gün Hatırlatıcısı (Son 24 Saat):** Admin ve Yönetici rollerine acil sistem bildirimi oluşturur.
  * 🚨 **NDK Bildirim Süresi Doldu:** 3 günü geçmiş ve henüz bildirim sayısı girilmemiş vakalarda kırmızı alarm üretir.
  * Mükerrer bildirim engeli sayesinde aynı gün içinde yalnızca 1 kez hatırlatma iletilir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 7.4), `app/services/system/notification_service.py`

### ❓ 7.5 DÖF (Düzeltici Önleyici Faaliyet) Kapatılırken Zorunlu Kapanış Notu Neden İstenir?

* **Açıklama:** Sağlık Bakanlığı SKS ve ISO 9001 kalite standartları gereğince açılan bir DÖF aksiyonu kök neden giderilmeden kapatılamaz.
* **Çözüm:** Kapatma penceresinde yapılan iyileştirme (örn: *Zırhlama kapısı menteşesi onarıldı, personele koruyucu donanım eğitimi verildi*) yazılarak DÖF onaylanır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 7.3)

---

<a id="8-hizmet-ici-egitim--online-sinav-modulu"></a>

## 8. Hizmet İçi Eğitim, Soru Havuzu & Online Sınav Modülü

### ❓ 8.1 "Lütfen sorunun ekleneceği eğitim başlığını seçiniz" uyarısı alıyorum

* **Neden Olur?:** Soru bankasına yeni soru eklerken üst araç çubuğundaki *Eğitim Başlığı* açılır kutusundan bir eğitim seçilmemiştir.
* **Çözüm:** Üst kısımdaki *Eğitim Başlığı* alanından sorunun bağlanacağı eğitimi seçin (veya açılır kutuya doğrudan eğitim adını yazarak aratın). Ardından formu doldurup *"Kaydet"* butonuna basın.
* *🔍 Kaynak:* `ui/controllers/kalite/hizmet_ici_egitim_controller.py`, `ui/pages/kalite/hizmet_ici_egitim_page.ui`

### ❓ 8.2 Başka bir eğitimin sınav sorularını yeni bir eğitime nasıl aktarabilirim?

* **Çözüm:** Sınav Soruları sekmesinde hedef eğitimi seçtikten sonra üst araç çubuğundaki **"Başka Eğitimden Kopyala..."** butonuna tıklayın. Açılan listeden kaynak eğitimi seçtiğinizde tüm sorular anında hedef eğitime aktarılır.
* *🔍 Kaynak:* `app/services/personel/hizmet_ici_egitim_service.py` (`copy_sorular_between_egitimler`)

### ❓ 8.3 Personel Web Portalından online sınava nasıl girer?

* **Çözüm:**
  1. Personel tarayıcıdan `http://sunucu-ip:3000` web portalına TC kimlik no ve şifresiyle giriş yapar.
  2. Sol menüden **"Eğitimlerim & Sınavlar"** sekmesine geçer.
  3. Kendisine atanan eğitimin dökümanını inceledikten sonra **"Sınava Başla"** butonuna basar.
  4. Sınavı tamamlayıp baraj notunu geçtiğinde eğitim otomatik olarak tamamlanır ve sertifika kaydı oluşur.
* *🔍 Kaynak:* `web_portal/src/components/TrainingModal.vue`, `web_portal/server.ts`

### ❓ 8.4 Eğitim Uyum Raporunda "Süresi Yaklaşıyor" uyarısı ne zaman devreye girer?

* **Çözüm:** Sistem, geçerlilik bitiş tarihine **30 günden az** kalan tüm personelleri turuncu renkle işaretler ve **15 gün ile 3 gün kala** sisteme otomatik erken uyarı bildirimleri düşürür.
* *🔍 Kaynak:* `app/services/personel/hizmet_ici_egitim_service.py` (`get_uyum_raporu`)

---
<a id="9-evrensel-onay-bekleyen-gorevler-paneli"></a>

## 9. Evrensel Onay Bekleyen Görevler Paneli

### ❓ 9.1 "Reddetme Gerekçesi Zorunludur" uyarısı

* **Neden Olur?:** Onay bekleyen bir izin, nöbet devri veya veri değişikliği reddedilirken açıklama alanı boş bırakılmıştır.
* **Çözüm:** Reddetme dialog penceresine açıklayıcı bir gerekçe yazarak onaylayın.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 8)

### ❓ 9.2 "Değişiklik Uygulanamadı / Kaynak Veri Silinmiş" uyarısı

* **Neden Olur?:** Onay bekleyen veri, başka bir yönetici tarafından veritabanında silinmiş veya değiştirilmiştir.
* **Çözüm:** Onay listesini yenileyip güncel durumunu kontrol edin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 8)

### ❓ 9.3 Personelin Web Portaldan sildiği eğitim/belge/muayene neden listeden hemen kaybolmuyor?

* **Yanıt:** Kurumsal veri güvenliği gereğince standart personelin (`onay_gerektirir = 1`) silme istekleri doğrudan veritabanından silinmez; **`Silme Onayı Bekliyor`** rozetiyle yöneticinin onay kuyruğuna düşer. Yönetici onayladığında silme işlemi PostgreSQL üzerinde atomik olarak tamamlanır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 8.7)

### ❓ 9.4 Web Portaldan yüklenen evraklar KVKK Kasasına (`stored_files`) ne zaman aktarılır?

* **Yanıt:** Personel belgeyi yüklediğinde dosya geçici staging alanına kaydedilir. Yönetici Onay Bekleyen Görevler ekranından **"Onayla"** butonuna bastığı anda dosya arka planda **AES-256 Fernet** ile şifrelenerek veritabanına (`stored_files`) aktarılır ve `file-uuid` anahtarına bağlanır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 8.6)

### ❓ 9.5 Fark İnceleme Ekranında (Diff View) Kırmızı ve Yeşil Renkler Ne Anlama Gelir?

* **Açıklama:** Veri Değişiklikleri onay panelinde bir kaydı incelerken:
  * 🔴 **Kırmızı Vurgulu Alanlar (Eski Değer):** Veritabanında halihazırda kayıtlı olan mevcut veridir.
  * 🟢 **Yeşil Vurgulu Alanlar (Önerilen Yeni Değer):** Personelin veya operatörün güncellenmesini talep ettiği yeni veridir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 8.2)

---

<a id="9-raporlar-modulu-rapor-merkezi"></a>

## 10. Raporlar Modülü (Rapor Merkezi)

### ❓ 10.1 🖨️ PDF / Excel rapor alırken "İzin Engeli / Dosya Açık" veya "PDF Oluşturma Hatası" uyarısı

* **Neden Olur?:** Üretilecek rapor dosyası bilgisayarınızda başka bir programda (Excel, Adobe Reader vb.) halihazırda açıktır.
* **Çözüm:** Açık olan PDF/Excel dosyasını kapatın ve *Rapor Oluştur* butonuna tekrar basın.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 13 & 16.4)

### ❓ 10.2 "Seçilen Kriterlere Uygun Kayıt Bulunamadı" uyarısı

* **Neden Olur?:** Filtrelediğiniz tarih aralığında veya departmanda herhangi bir veri bulunmamaktadır.
* **Çözüm:** Tarih aralığını veya departman filtre kriterlerini esneterek tekrar deneyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 13)

### ❓ 10.3 Kurumsal rapor başlığını çok satırlı (Üniversite, Fakülte, Anabilim Dalı) olarak nasıl alt alta yazabilirim?

* **Çözüm:** 
  1. *Raporlar > Rapor Merkezi > Şablon ve Marka Ayarları* sekmesine gidin.
  2. **Kurum Başlık 1** veya **Kurum Başlık 2** kutularına metin girerken **Enter** tuşuna basarak istediğiniz kadar alt satıra geçin (örn: 1. Satır: `T.C. İSTANBUL ÜNİVERSİTESİ`, 2. Satır: `İSTANBUL TIP FAKÜLTESİ`).
  3. **"Kaydet"** butonuna basın. Sistem `docxtpl.Listing` motoru sayesinde tüm Word ve PDF çıktılarında bu satırları alt alta gerçek satır kesmesiyle basar.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 13.3)

### ❓ 10.4 Yeni Cihaz Kalibrasyon, RKE Muayene, Ortam Dozu ve Lokasyon Envanter Raporlarını nereden alabilirim?

* **Çözüm:** 
  * Sol navigasyon menüsünden *Raporlar > Rapor Merkezi* sekmesine gidin.
  * Sol kategori ağacından **Cihaz ve Koruyucu Ekipman (RKE) Raporları** veya **Lokasyon ve Envanter Raporları** kategorilerini seçerek istediğiniz dökümü PDF, Excel veya Word olarak indirin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 13.1)

### ❓ 10.5 Kurum Logoları (Logo 1 / Logo 2) Word Şablonlarında Nasıl Otomatik Boyutlandırılır?

* **Açıklama:** Rapor Merkezi Şablon Ayarlarından yüklenen kurum logoları (`LOGO_1`, `LOGO_2`), `ExportService` ve `docxtpl.InlineImage` API'si ile şablon başlığına en boy oranı (aspect ratio) bozulmadan otomatik orantılanarak yerleştirilir.
* *🔍 Kaynak:* `app/services/system/export_service.py`

---

<a id="10-tanimlamalar-lookup--sabit-veri-modulu"></a>

## 11. Tanımlamalar (Lookup / Sabit Veri) Modülü

### ❓ 11.1 "Silinemez: Bu Departmana/Ünvana Bağlı Aktif Personel Bulunmaktadır" uyarısı

* **Neden Olur?:** Veri bütünlüğü gereği aktif personeli olan bir birim veya ünvan doğrudan silinemez.
* **Çözüm:** Önce bağlı personellerin birimini/ünvanını değiştirin veya pasife alın, ardından departmanı silin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 10)

### ❓ 11.2 "Aynı İsimde veya Kodda Kayıt Zaten Mevcut" uyarısı

* **Neden Olur?:** Aynı departman kural kodu (örn: `BT-01`) veya ünvan adı ikinci kez tanımlanamaz.
* **Çözüm:** Mevcut kodları *Tanımlamalar* sekmesinden kontrol ederek farklı bir kod belirleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 10)

### ❓ 11.3 Tanımlamalar Tablosunda "Silinemeyen Kilitli Sistem Kodları" Nelerdir?

* **Açıklama:** RADPYS çekirdek kurallarının dayandığı bazı temel tanımlar (örn: `Çalışma Koşulu A / B`, `Şua İzni Türü`, `Admin Rolü`, `657 Standart Memur Mesaisi`) veritabanında `is_system = 1` olarak korunur.
* **Kural:** Sistem bu kayıtların silinmesini engeller ancak isim veya açıklama gibi etiketlerin güncellenmesine izin verir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 10.1)

---

<a id="11-web-portali--rest-api-senkronizasyon-modulu"></a>

## 12. Web Portalı & REST API Senkronizasyon Modülü

### ❓ 12.1 🌐 Web Portalına tarayıcıdan erişilemiyor ("Sunucu Bağlantı Hatası / REST API Servisine Ulaşılamıyor")

* **Neden Olur?:** Web Portal Node.js servisi sunucuda çalışmıyor veya ağ güvenlik duvarı (Firewall) portu (Port 3000) engellemektedir.
* **Çözüm:**
  1. Sunucu üzerinde **RADPYS Portal Launcher** (`RADPYS_Portal_Launcher.exe`) uygulamasını açın ve **"▶ Portali Başlat"** butonuna basarak servisin `RUNNING` durumunda olduğunu teyit edin.
  2. Windows Güvenlik Duvarı'nda 3000 numaralı TCP portuna yerel ağ gelen bağlantı izni (Inbound Rule) verin.
  3. İstemci cihazın tarayıcısından sunucu IP adresini (örn: `http://192.168.1.X:3000`) kontrol edin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 15.3), `web_portal`

### ❓ 12.2 "Oturum Süresi Doldu / Lütfen Yeniden Giriş Yapın" uyarısı

* **Neden Olur?:** Güvenlik protokolü gereğince web portalında oturum süresi tam **15 dakika** ile sınırlandırılmıştır. 15 dakika dolduğunda oturum güvenlik gereği kapatılır.
* **Çözüm:** Kullanıcı adı ve şifrenizi girerek tekrar giriş yapın; yeni 15 dakikalık oturum anında başlar. Sunucu yeniden başlasa dahi oturumlar `data/sessions.json` dosyasında korunduğundan 15 dakikanız dolmadan oturumunuz düşmez.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 11)

### ❓ 12.3 "Yetkisiz Erişim / Bu İşlem İçin Yetkiniz Bulunmamaktadır" uyarısı

* **Neden Olur?:** Saha çalışanlarının masaüstü yönetici paneline veya yetkisiz birimlerin verilerine erişimi rol bazlı olarak kısıtlanmıştır.
* **Çözüm:** Kullanıcı rolünüzün erişim yetkilerini kontrol etmek veya yetki yükseltme talebinde bulunmak için Sistem Yöneticinize başvurun.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 11 & 16)

### ❓ 12.4 Web Portalında belgeleri indirmeden tarayıcıda görüntüleyebilir miyim?

* **Yanıt:** Evet. Profilim altındaki Evrak Kasasında yer alan **"Görüntüle"** (Göz simgesi) butonuna basıldığında PDF ve resim evrakları tarayıcının kendi dahili görüntüleyicisinde yeni sekmede doğrudan açılır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 8.6 & 11)

---

<a id="12-merkezi-bildirim-ve-durum-cubugu-sistemi"></a>

## 13. Merkezi Bildirim ve Durum Çubuğu Sistemi

### ❓ 13.1 "Okunmamış Bildiriminiz Bulunmaktadır" uyarısı

* **Neden Olur?:** Onay kuyruğunda bekleyen acil izin veya nöbet devri talebi olduğunda sistem zil simgesinde kırmızı bildirim yakar.
* **Çözüm:** Sağ üst köşedeki Bildirim Zili simgesine tıklayarak okunmamış bildirimleri inceleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 12)

### ❓ 13.2 "Bildirim Servisi Bağlantı Hatası" uyarısı

* **Neden Olur?:** Yerel bildirim servisi veya anlık iletişim kanalı geçici olarak durduğunda veya bağlantı koptuğunda belirir.
* **Çözüm:** Sayfayı / uygulamayı yenileyin. Bağlantı otomatik olarak yeniden kurulacaktır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 12)

---

<a id="13-program-ayarlari--temalar"></a>

## 14. Program Ayarları & Temalar

### ❓ 14.1 "Yönetici Yetkisi Gereklidir" uyarısı

* **Neden Olur?:** Program genel ayarlarını değiştirme yetkisi yalnızca *Sistem Yöneticisi* rolüne tanınmıştır.
* **Çözüm:** Sistem Yöneticisi hesabıyla oturum açın.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 13)

### ❓ 14.2 Yanlış bir ayar girildiğinde fabrika ayarlarına nasıl dönülür?

* **Çözüm:** *Program Ayarları* ekranındaki **"Varsayılan Ayarları Yükle"** butonuna basarak sistem konfigürasyonunu fabrika ayarlarına döndürebilirsiniz.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 13)

---

<a id="15-veritabani-bakim--postgresql-mimarisi"></a>

## 15. Veritabanı, Bakım & PostgreSQL Mimarisi

### ❓ 15.1 "Yedek Dosyası Bozuk / Geri Yüklenemedi" uyarısı

* **Neden Olur?:** Seçilen yedek dosyasının şifreleme anahtarı uyumsuzdur veya dosya bütünlüğü bozulmuştur.
* **Çözüm:** Farklı bir tarihli `.dump` veya `.sql` yedek noktasını seçerek tekrar deneyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 14)

### ❓ 15.2 🔓 Veritabanı yedekleme ve bakım işlemleri nasıl yapılır?

* **Çözüm:**
  1. *Yönetim > Veritabanı & Bakım* sekmesine gelin.
  2. **`Veritabanı Yedekle`** butonuna basarak anlık şifreli `.dump` yedeği alabilirsiniz.
  3. **`Veritabanını Sıkıştır (VACUUM)`** butonu ile PostgreSQL sunucusu üzerinde optimizasyon yapabilirsiniz.
  4. **`İndeksleri Yeniden Oluştur (REINDEX)`** ile sorgu hızlandırma indekslerini yenileyebilirsiniz.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 14)

### ❓ 15.3 pg_dump ve pg_restore İle PostgreSQL Veritabanı Nasıl Yedeklenir ve Taşınır?

* **Açıklama:** RADPYS V4 PostgreSQL altyapısı kullandığından veritabanı yedeği `pg_dump` formatında alınır.
* **Çözüm:** *Veritabanı & Bakım* panelindeki **"Dışa Aktar"** butonuna basarak `.dump` dosyasını alın; başka bir sunucuda `pg_restore -d hedef_db yedek.dump` komutu ile tüm tabloları ve KVKK kasasını eksiksiz geri yükleyebilirsiniz.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 18.4)

---

<a id="15-toplu-ice-aktarma-excel--csv-import-sihirbazi"></a>

## 16. Toplu İçe Aktarma (Excel / CSV Import) Sihirbazı

### ❓ 16.1 "Format Uyumsuzluğu / Sütun Başlıkları Bulunamadı" uyarısı

* **Neden Olur?:** Yüklenen Excel dosyasındaki sütun başlıkları sistem formatından farklıdır.
* **Çözüm:** Import Sihirbazı 1. Adımındaki **"Örnek Şablon İndir"** butonuna basarak standart şablonu indirin ve verilerinizi bu şablona yapıştırıp tekrar yükleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 15 & 16)

### ❓ 16.2 "Demo Sürüm Limiti (Maksimum 6 Personel Kaydı)" uyarısı

* **Neden Olur?:** Uygulamanız Demo modundaysa, Excel dosyanızdaki personel sayısı 6 sınırını aştığı için aktarım durdurulur.
* **Çözüm:** Lisans anahtarınızı *Hakkında > Lisans Aktifleştir* ekranından girerek Tam Sürüme geçin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 1.3 & 15)

### ❓ 16.3 "Geçersiz Departman Kodu" veya "Önce Tanımlamaları Yapınız" uyarısı

* **Neden Olur?:** Excel dosyasındaki departman adı sistemdeki *Tanımlamalar > Departmanlar* listesiyle uyuşmamaktadır.
* **Çözüm:** Excel'deki departman isimlerini sistemdeki tanımlı isimlerle birebir aynı olacak şekilde güncelleyin veya önce Tanımlamalar modülünden departmanı ekleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 15)

### ❓ 16.4 Toplu İçe Aktarmada Dry-Run Ön Doğrulama ve Tablo Üzerinde Düzenleme Nasıl Yapılır?

* **Açıklama:** Excel/CSV dosyası seçildiğinde sistem henüz veritabanına yazmadan önce otomatik bir **Dry-Run (Ön Doğrulama)** gerçekleştirir:
  * 🟢 **Geçerli:** Veri formatı doğru ve veritabanına sorunsuz aktarılabilir.
  * 🟡 **Mükerrer:** TC Kimlik, Cihaz Kodu veya Dozimetre No sistemde zaten mevcuttur. *"Mükerrerleri Güncelle (Merge)"* veya *"Mükerrerleri Atla (Skip)"* stratejisi seçilebilir.
  * 🔴 **Hatalı:** Eksik veya geçersiz alan içeren satırlardır.
* **Tablo Üzerinde Düzenleme (In-Place Edit):** Hatalı veya mükerrer satırları düzeltmek için Excel'i yeniden yüklemenize gerek yoktur. Önizleme tablosundaki ilgili hücreye **çift tıklayarak** veriyi doğrudan düzeltebilirsiniz; sistem anında durumu yeniden doğrular.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 15), `app/services/system/bulk_import_service.py`

---

<a id="17-tibbi-cihaz-ndk-lisansi--mobil-qr-ariza-yonetimi"></a>

## 17. Tıbbi Cihaz, NDK Lisansı & Mobil QR Arıza Yönetimi

### ❓ 17.1 Telefonda QR kod okutulduğunda sayfa neden açılmaz?

* **Neden Olur?:** Telefon ile bilgisayar aynı yerel Wi-Fi/Ağ üzerinde değilse veya bilgisayardaki Windows Güvenlik Duvarı 3000 portuna gelen yerel bağlantıları engelliyorsa sayfa açılmayabilir.
* **Çözüm:**
  1. Telefonunuzun hastane/kurum içi Wi-Fi ağına bağlı olduğundan emin olun.
  2. Masaüstündeki QR Etiket penceresini açtığınızda sistemin yerel ağ IP'sini (`http://192.168.X.X:3000/?cihaz=KOD`) otomatik algıladığını teyit edin.
  3. Web sunucusunun çalıştığından emin olun.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 9B)

### ❓ 17.2 Cihaz NDK Lisansı Süresi Dolmak Üzere Uyarısı (🔴 "Kalan Gün: 15 / 3 Gün")

* **Neden Olur?:** Cihazın NDK yetkilendirme lisansı bitiş tarihine 15 gün veya 3 gün kalmıştır.
* **Çözüm:**
  1. Masaüstü uygulamasında *Cihaz Yönetimi* ekranına gidin.
  2. Lisansı yaklaşan cihaza çift tıklayın ve *"NDK Lisansları"* sekmesine geçin.
  3. NDK'dan yenilenen lisans belgesini, yeni Lisans Numarasını ve Bitiş Tarihini girerek güncelleyin.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 9B)

### ❓ 17.3 Zebra / Barkod Etiket Yazıcısına QR Etiket Nasıl Basılır?

* **Çözüm:**
  1. *Cihaz Yönetimi* tablosundan ilgili cihazı seçip **"QR Etiket"** butonuna basın.
  2. Açılan kart önizleme penceresinde **"Etiketi Yazdır"** butonuna tıklayın.
  3. Açılan Windows Yazıcı listesinden bağlı Zebra/Brother etiket yazıcınızı seçip yazdırın. İsterseniz **"PNG Olarak Kaydet"** butonuyla resmi alıp grafik programında da basabilirsiniz.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 9B)

### ❓ 17.4 Cihaz Lisansı Dolduğunda Sistem Hangi Uyarıları Üretir?

* **Açıklama:** Lisans bitiş tarihini geçen cihazlar ana envanter tablosunda 🔴 **"Lisans Süresi Doldu"** kırmızı rozetiyle gösterilir ve cihaz durum kartında uyarı ikonu belirir. Cihaza bağlı kalite kontrol ve arıza kayıtlarında lisans yenileme notu zorunlu hale gelir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 9B)

---

<a id="18-koruyucu-ekipman-rke-din-6857-kalite-kontrol-ve-akilli-kodlama"></a>

## 18. Koruyucu Ekipman (RKE), DIN 6857-1 Kalite Kontrol & Akıllı Kodlama

### ❓ 18.1 Koruyucu Ekipman Kodu (`RKE-O-001`) ve Departman No (`ANZ-AML-Ö-001`) Nasıl Üretilir?

* **Nasıl Çalışır?:** Sistem **Sistem Tanımları (Lookup)** öncelikli akıllı bir kodlama motoru (`RkeKodGenerator`) barındırır:
  * **Departman No Formülü:** `[AnaBilimDaliKodu]-[BirimKodu]-[KoruyucuCinsiKodu]-[SıraNo]` *(Örn: `ANZ-AML-Ö-001`, `RAD-ACL-TK-005`)*.
  * **Merkezi RKE Kodu:** `RKE-[KoruyucuCinsi]-[SıraNo]` *(Örn: `RKE-O-001`, `RKE-TK-012`)*.
* **Lookup Önceliği:** Siz Sistem Tanımları ekranından bir departman kodunu (`departmanlar.departman_kodu`) veya koruyucu türü kodunu (`rke_tanimlari.kod`) güncellediğinizde, sistem formülleri doğrudan tanımladığınız yeni kodları esas alır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 9C)

### ❓ 18.2 DIN 6857-1 Kalite Kontrol Karar Motoru Ekipmanın Durumunu Nasıl Belirler?

* **Nasıl Çalışır?:** Muayene esnasında skopi altında tespit edilen kusurlar girildiğinde sistem DIN 6857-1 standardına göre anında karar üretir:
  * 🟢 **KULLANIMA UYGUN:** Toplam hasar alanı $\le 15\text{ mm}^2$ ve kritik bölgede (gonad/tiroid/göğüs) hasar yok.
  * 🟠 **ŞARTLI KULLANIM:** Toplam hasar $15-60\text{ mm}^2$ arasında ve kritik olmayan yan/etek bölgelerde ise.
  * 🔴 **HEK / HURDAYA AYIR:** Kritik bölgede hasar varsa veya toplam hasar $> 60\text{ mm}^2$ ise derhal kullanımdan çekilir ve HEK statüsüne alınır.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 9C)

### ❓ 18.3 Muayene Fotoğrafları ve Skopi Röntgen Görüntüleri Güvenli midir?

* **Nasıl Saklanır?:** Muayene sırasında yüklenen tüm fiziksel çatlak fotoğrafları ve skopi radyografi görüntüleri veritabanında **KVKK AES-256 Fernet** algoritmasıyla şifreli (`stored_files` tablosunda) saklanır. Yetkisiz dosya erişimi engellenir, uygulama içinde doğrudan şifresi çözülerek yüksek çözünürlükte görüntülenir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 9C)

### ❓ 18.4 Toplu İçe Aktarma (Excel / CSV) ile Cihaz ve RKE Envanteri Nasıl Yüklenir?

* **Çözüm:**
  1. *Yönetim > Toplu Veri İçe Aktarma* ekranına gidin.
  2. Sol modül listesinden **"Cihaz Listesi (Radyoloji)"**, **"Koruyucu Ekipman (RKE) Listesi"** veya **"RKE Muayene & Kalite Kontrol"** modunu seçin.
  3. Excel/CSV dosyanızı seçin, sütun eşlemelerini doğrulayın ve *"İçe Aktar"* butonuna basın. Kodsuz ekipmanlar için sistem otomatik olarak akıllı kod üretir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 9C & 16)

### ❓ 18.5 RKE Muayene Sonuçlarında "Şartlı Kullanım" Ekipmanlar Hangi Birimlerde Kullanılabilir?

* **Açıklama:** DIN 6857-1 standardına göre non-kritik bölgede sınırlı yıpranması olan veya kurşun eşdeğeri $<0.25\text{ mm Pb}$ olan önlükler *Şartlı Kullanım* olarak etiketlenir.
* **Kullanım Kuralı:** Bu ekipmanlar girişimsel radyoloji, anjiyografi veya skopi gibi yüksek primer dozlu alanlarda kullanılamaz; sadece düşük saçılma dozlu poliklinik röntgen ve kemik dansitometri gibi alanlarda geçici olarak kullandırılabilir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 9C), `app/services/rke_service.py`

---

<a id="19-mimari-kat-plani-pdf-cihaz-pin-kilitleme-ve-akilli-gezinim"></a>

## 19. Mimari Kat Planı PDF Desteği, Cihaz Pin Kilitleme & Akıllı Breadcrumb Gezinimi

### ❓ 19.1 Mimari Kat Planı / Kroki Olarak PDF Dosyası Yükleyebilir miyim?

* **Evet:** RADPYS V4, Ortam Dozu ve Departman Krokileri modüllerinde PNG/JPG resimlerinin yanı sıra **`.pdf` formatındaki vektörel mimari çizim dosyalarını doğrudan destekler**.
* **Nasıl Çalışır?:** Yüklenen PDF dosyasının ilk sayfası `pypdfium2` motoruyla kayıpsız ve yüksek çözünürlüklü olarak işlenir ve interaktif grafik tuvaline yerleştirilir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 8 & 10)

### ❓ 19.2 Cihaz Konumu ve Ortam Ölçüm Krokilerinde Pinlerin Kazara Kayması Nasıl Önlenir?

* **Pin Kilitleme Modu (`[ 🔒 Pin Kilitli ]`):**
  * Cihaz Ekle/Düzenle ve Ortam Dozu ekranlarında kat planı açıldığında pinler varsayılan olarak **Kilitli** gelir.
  * Kilitli modda haritada fare tekerleğiyle sınırsız yakınlaşabilir (Zoom) ve haritayı sürükleyebilirsiniz (Pan); pin konumu kesinlikle bozulmaz veya kazara başka odaya sıçramaz.
* **Konumu Değiştirmek İçin:** Araç çubuğundaki **`[ Pin Kilitli ]`** butonuna basarak turuncu renkli **`[ 🔓 Taşıma Aktif ]`** modunu açabilir ve pini fareyle dilediğiniz odaya sürükleyebilirsiniz.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 8.1 & 10.5)

### ❓ 19.3 Üst Araç Çubuğundaki Breadcrumb Başlıklarına Tıkladığımda Ne Olur?

* **`RADPYS V4` (Kök Buton):** Açık olan tüm alt pencereleri tek hamlede kapatır ve temiz ana karşılama masaüstüne döner.
* **Kategori Başlıkları (*Kalite Yönetimi*, *Cihaz Yönetimi*, *Personel Modülü* vb.):** Tıklandığında ilgili modüle bağlı tüm alt sayfaları listeleyen **Hızlı Geçiş Açılır Menüsü (Dropdown)** açılır. Böylece menüyü açmadan tek tıkla kardeş sayfalara geçebilirsiniz.
* **Tüm Pencereler Kapatıldığında:** Üst breadcrumb çubuğu masaüstünde gereksiz yer kaplamaz; otomatik olarak temizlenir ve gizlenir.
* *🔍 Kaynak:* `docs/RADPYS_V4_Kullanim_Kilavuzu.md` (Bölüm 16.4)

