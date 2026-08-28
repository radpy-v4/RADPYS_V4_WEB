# 📖 RADPYS V4 — Kod-Doğrulamalı Kullanıcı Kılavuzu

Bu kılavuz, sistemin gerçek arayüz bileşenleri ve iş kuralları ile satır satır doğrulanmış güncel operasyonel talimatları içerir.

---

## 📑 İçindekiler

1. [Toplu Veri İçe Aktarma ve Çakışma Yönetimi](#1-toplu-veri-ice-aktarma-ve-cakisma-yonetimi)
2. [Yüksek Doz Araştırma ve Resmi RD.F43 Formu Hazırlama](#2-yuksek-doz-arastirma-ve-resmi-rdf43-formu-hazirlama)
3. [Nöbet Çizelgesinde Akıllı İkame Personel Atama](#3-nobet-cizelgesinde-akilli-ikame-personel-atama)
4. [Şua İzni Zamanaşımı Takibi ve Yıl Sonu Erken Uyarıları](#4-sua-izni-zamanasimi-takibi-ve-yil-sonu-erken-uyarilari)
5. [Radyasyon Olay Bildirimi ve NDK 2. Gün Hatırlatıcısı](#5-radyasyon-olay-bildirimi-ve-ndk-2-gun-hatirlaticisi)
6. [Koruyucu Ekipman (RKE) DIN 6857-1 Muayene ve Kalite Kontrolü](#6-koruyucu-ekipman-rke-din-6857-1-muayene-ve-kalite-kontrolu)
7. [RADPYS Portal Launcher ile Web Servis Yönetimi](#7-radpys-portal-launcher-ile-web-servis-yonetimi)
8. [Veritabanı Bakım ve 2 Aşamalı Güvenlikli Sıfırlama](#8-veritabani-bakim-ve-2-asamali-sifirlama)

---

<a id="1-toplu-veri-ice-aktarma-ve-cakisma-yonetimi"></a>

## 1. 📥 Toplu Veri İçe Aktarma ve Çakışma Yönetimi

### 💡 Ne Zaman / Neden Kullanılır

Personel listesi, dozimetre ölçümleri, izin geçmişi veya cihaz envanteri gibi çok satırlı verileri Excel (.xlsx) veya CSV formatında tek seferde sisteme aktarmak ve olası hataları veritabanına yazılmadan önce tespit etmek için kullanılır.

### ⚙️ Ön Koşullar

- **Gerekli Yetki/Rol:** Sistem Yöneticisi (Admin) veya İlgili Modül Yazma Yetkisi.
- **Gerekli Dosya:** Standart formata uygun `.xlsx` veya `.csv` dosyası.

### 🐾 Adım Adım İşlem Akışı

1. Sol ana menüden **Yönetim > Toplu Veri İçe Aktarma** sekmesine tıklayın.
2. Açılan pencerede aktarılacak **Modül Tipini** (Personel, Dozimetre, İzin, Cihaz veya RKE) seçin.
3. **"1. Dosya Yükle"** adımında **"Dosya Seç"** butonuna basarak Excel/CSV dosyanızı seçin. (Gerekirse **"Örnek Şablon İndir"** butonuyla boş formatı alabilirsiniz.)
4. **"2. Sütunları Eşleştir"** adımında Excel sütun başlıklarınızın sistem alanlarıyla doğru eşleştiğini teyit edin ve **"İleri"** butonuna basın.
5. **"3. Önizleme & Doğrulama"** adımında sistem otomatik olarak **Dry-Run (Ön Tarama)** gerçekleştirir:
   - `🟢 Geçerli`: Sorunsuz aktarılacak satırlar.
   - `🟡 Mükerrer`: Sistemde zaten kayıtlı olan satırlar.
   - `🔴 Hatalı`: Eksik veya geçersiz alan içeren satırlar.
6. Hatalı veya mükerrer satırları düzeltmek için Excel'e dönmenize gerek yoktur; **tablodaki hücreye çift tıklayarak** veriyi doğrudan düzenleyebilirsiniz.
7. Mükerrer kayıtlar için **Çakışma Stratejisi** seçin:
   - *"Mükerrerleri Güncelle (Merge)"*: Var olan kaydın boş alanlarını doldurur ve günceller.
   - *"Mükerrerleri Atla (Skip)"*: Mevcut kaydı korur, yeni satırı atlar.
8. **"4. Aktarımı Başlat"** butonuna basarak aktarımı tamamlayın.

### ❓ Sık Karşılaşılan Uyarılar

- **"Dosya Formatı Uyumsuz"** → Yüklenen dosyanın geçerli bir `.xlsx` veya `.csv` olduğundan emin olun.
- **"TC Kimlik Numarası Geçersiz (11 Hane Olmalıdır)"** → İlgili personelin kimlik numarasını tabloda çift tıklayarak düzeltin.

---

<a id="2-yuksek-doz-arastirma-ve-resmi-rdf43-formu-hazirlama"></a>

## 2. 📑 Yüksek Doz Araştırma ve Resmi RD.F43 Formu Hazırlama

### 💡 Ne Zaman / Neden Kullanılır

Dozimetre periyodunda personelin ölçülen dozu yasal inceleme limitini (aylık 1.66 mSv veya yıllık 20 mSv) aştığında ya da dozimetre unutulma/cihaz içi maruziyet şüphesi doğduğunda resmi NDK/RADKOR 2 sayfalık RD.F43 Araştırma Formunu doldurmak ve 10 iş günü içinde tamamlamak için kullanılır.

### ⚙️ Ön Koşullar

- **Gerekli Yetki/Rol:** RKG (Radyasyondan Korunma Görevlisi) veya Yönetici.
- **Ön Koşul:** Dozimetre ölçüm kaydının sisteme girilmiş olması.

### 🐾 Adım Adım İşlem Akışı

1. **Dozimetre Takip** ekranında ilgili ölçüm kaydının yanındaki **"Araştırma Formu"** butonuna tıklayın.
2. Pencere açıldığında üst tarafta **10 İş Günü Yasal Süre Sayacı** görüntülenir (Hafta sonları otomatik atlanır).
3. **Soru 1-4:** Personelin çalışma pozisyonu, koruyucu ekipman (RKE) kullanımı ve şüpheli olay detaylarını doldurun.
4. **Dozimetre Unutulma Durumu:** Eğer dozimetre oda içinde unutulduysa ilgili kutuyu işaretleyin:
   - Açılan alana **Unutulma Süresi (saat)** ve **Oda Doz Hızı ($\mu\text{Sv/sa}$)** girin.
   - **"⚡ Tahmini Dozu Hesapla"** butonuna basarak formülsel dozu otomatik aktarın.
5. **Sonuç & Karar:** RKG kanaatini ve personelin aktif göreve devam durumunu seçin.
6. Alt araç çubuğundaki **"📄 Resmi RD.F43 Word Çıktısı"** butonuna basarak ıslak imzaya hazır 2 sayfalık resmi NDK/RADKOR Word belgesini oluşturun.

### ❓ Sık Karşılaşılan Uyarılar

- **"Yasal Süre Doldu (X gün gecikti)"** → 10 iş günü yasal süresi aşılmıştır; formu derhal doldurup NDK'ya iletiniz.
- **"Unutulma süresi ve doz hızı pozitif sayı olmalıdır"** → Doz sihirbazı alanlarına sıfırdan büyük sayısal değer girin.

---

<a id="3-nobet-cizelgesinde-akilli-ikame-personel-atama"></a>

## 3. ⚡ Nöbet Çizelgesinde Akıllı İkame Personel Atama

### 💡 Ne Zaman / Neden Kullanılır

Nöbet çizelgesinde acil mazeret, hastalık, izin veya personel açığı nedeniyle boşalan bir nöbet slotuna en adil, dinlenmiş ve kısıtlara tam uyan personeli tek tıkla yerleştirmek için kullanılır.

### ⚙️ Ön Koşullar

- **Gerekli Yetki/Rol:** Nöbet Sorumlusu, Birim Amiri veya Yönetici.
- **Plan Durumu:** Nöbet planı *"Taslak"* aşamasında olmalıdır (Yayınlanmış planda nöbet devri mekanizması kullanılır).

### 🐾 Adım Adım İşlem Akışı

1. **Nöbet Yönetimi > Plan Detayı** ekranını açın.
2. Çizelge tablosunda atama yapmak istediğiniz boş veya değiştirilecek hücreye **fareyle sağ tıklayın**.
3. Açılan menüden **"⚡ Akıllı İkame Ata (Önerilenler)"** alt menüsüne gelin.
4. Sistem tarafından listelenen ilk 3 adayı inceleyin:
   - Her adayın yanında **Uygunluk Skoru (örn: %95)** ve **Gerekçe** (örn: *"Aylık hedef saat açığı var (24 sa) • Önceki/sonraki gün nöbeti yok (tam dinlenme)"*) yer alır.
5. İstediğiniz personele tıkladığınızda:
   - Personel anında o nöbet slotuna yazılır.
   - Personelin aylık nöbet saati ve hakediş özeti otomatik güncellenir.

### ❓ Sık Karşılaşılan Uyarılar

- **"Uygun İkame Bulunamadı (Kısıtlar)"** → Birimdeki tüm personeller o gün izinli, çakışan nöbetli veya 24 saat dinlenme kuralına tabidir. Komşu birimden çapraz görevlendirme yapınız.
- **"Plan onaylanmış veya kilitli olduğundan ikame atanamaz"** → Yayınlanmış planlarda nöbet değişikliği için Nöbet Devir Talebi oluşturulmalıdır.

---

<a id="4-sua-izni-zamanasimi-takibi-ve-yil-sonu-erken-uyarilari"></a>

## 4. ⏳ Şua İzni Zamanaşımı Takibi ve Yıl Sonu Erken Uyarıları

### 💡 Ne Zaman / Neden Kullanılır

Radyasyon çalışanlarının fiili hizmet karşılığı kazandığı Şua izinlerinin 31 Aralık tarihi itibarıyla yanma/zamanaşımı riskini önceden tespit etmek ve izin planlamasını erken organize etmek için kullanılır.

### ⚙️ Ön Koşullar

- **Gerekli Yetki/Rol:** İzin Sorumlusu, İK Uzmanı veya Birim Yöneticisi.

### 🐾 Adım Adım İşlem Akışı

1. **İzin Takip > İzin Hakediş / Kalan Hak** sayfasına gidin.
2. Filtre alanında bulunan **"⏳ Zamanaşımı Yaklaşan Şua İzinleri"** kutucuğunu işaretleyin.
3. Tabloda yalnızca yıl sonu itibarıyla yanma riski bulunan Şua izinleri listelenir:
   - `[⏳ 45g]` (Turuncu Rozet): Yıl sonuna 60 günden az kaldığını gösterir.
   - `[🚨 15g]` (Kırmızı Rozet): Yıl sonuna 30 günden az kaldığını ve acil izin planlaması gerektiğini gösterir.
   - `[🚨 YANDI]`: 31 Aralık tarihi geçmiş ve kullanılmayan iznin yandığını gösterir.
4. İlgili personelin satırına çift tıklayarak veya İzin Talepleri ekranından personelin Şua iznini planlayın.

---

<a id="5-radyasyon-olay-bildirimi-ve-ndk-2-gun-hatirlaticisi"></a>

## 5. 🔔 Radyasyon Olay Bildirimi ve NDK 2. Gün Hatırlatıcısı

### 💡 Ne Zaman / Neden Kullanılır

Radyasyon güvenliği olaylarında (kaza, doz aşımı, sızıntı vb.) NDK'ya yapılması gereken 3 günlük yasal bildirimin gecikmesini önlemek amacıyla 2. güne girildiğinde yöneticilere erken uyarı iletmek için kullanılır.

### ⚙️ Ön Koşullar

- **Gerekli Yetki/Rol:** Tüm personel olay bildirebilir; NDK takibi Kalite Yöneticisi ve RKG tarafından yürütülür.

### 🐾 Adım Adım İşlem Akışı

1. **Kalite & Güvenlik > Olay Bildirimi** ekranından yeni olay kaydını oluşturun.
2. Olay kategorisi *"Radyasyon"* içeriyorsa veya *"NDK Bildirimi Gerekli"* seçilirse sistem 3 günlük yasal süreyi başlatır.
3. Olay tarihinden itibaren **2. güne girildiğinde** (`Kalan Süre: 24 Saat`), sistem Admin ve Yönetici bildirim kutularına otomatik olarak **"⚠️ NDK 2. Gün Hatırlatıcısı"** uyarısı gönderir.
4. NDK resmi bildirimi yapıldığında olay detayından NDK Bildirim Sayısı ve Tarihi girilerek takip durumu *"Yapıldı"* statüsüne alınır.

---

<a id="6-koruyucu-ekipman-rke-din-6857-1-muayene-ve-kalite-kontrolu"></a>

## 6. 🦺 Koruyucu Ekipman (RKE) DIN 6857-1 Muayene ve Kalite Kontrolü

### 💡 Ne Zaman / Neden Kullanılır

Kurşun önlük, tiroid koruyucu, gonadal koruyucu ve kurşun gözlüklerin yıllık periyodik skopi ve fiziksel muayenelerini DIN 6857-1 standardına göre değerlendirmek için kullanılır.

### ⚙️ Ön Koşullar

- **Gerekli Yetki/Rol:** RKE Sorumlusu, Medikal Fizik Uzmanı veya RKG.

### 🐾 Adım Adım İşlem Akışı

1. **Koruyucu Ekipman (RKE) Yönetimi** ekranına gidin.
2. Muayene edilecek ekipmanı seçip **"Muayene Ekle"** butonuna basın.
3. Skopi ve fiziksel kontrol bulgularını girin:
   - Hasar Bölgesi: *"Kritik (Tiroid/Gonad/Göğüs)"* veya *"Non-Kritik (Etek/Yan)"*.
   - Toplam Hasar Alanı ($mm^2$), Çatlak ve Delik varlığı.
4. Sistem DIN 6857-1 karar motoruyla otomatik değerlendirme yapar:
   - `KULLANIMA UYGUN` (🟢): Hasarsız ve kurşun homojenliği tam.
   - `ŞARTLI KULLANIM` (🟡): Non-kritik bölgede $\le 15\text{ mm}^2$ sınırlı hasar (Düşük dozlu birimlerde kullanılabilir).
   - `HEK / HURDAYA AYIR` (🔴): Kritik bölgede delik/çatlak veya non-kritik bölgede $>15\text{ mm}^2$ hasar (Derhal kullanımdan çekilir).
5. **"Kaydet"** butonuna basıldığında ekipmanın envanter durumu otomatik güncellenir.

---

<a id="7-radpys-portal-launcher-ile-web-servis-yonetimi"></a>

## 7. 🚀 RADPYS Portal Launcher ile Web Servis Yönetimi

### 💡 Ne Zaman / Neden Kullanılır

Kurum yerel ağındaki (LAN) çalışanların cep telefonu, tablet veya tarayıcı üzerinden nöbet devir, mazeret ve arıza bildirimlerine erişebilmesi için Node.js Web Portal servisini tek tıkla başlatmak, durdurmak ve canlı konsol loglarını izlemek için kullanılır.

### ⚙️ Ön Koşullar

- **Gerekli Yetki/Rol:** BT / Sistem Yöneticisi.
- **Konum:** `RADPYS_Portal_Launcher.exe` (veya `user_launcher/portal_launcher.py`).

### 🐾 Adım Adım İşlem Akışı

1. Kurulum klasöründeki veya masaüstündeki **"RADPYS Portal Launcher"** simgesine çift tıklayın.
2. Açılan görsel Launcher panelinde **"▶ Portali Başlat"** butonuna basın.
3. Servis `3000` numaralı portta devreye girdiğinde durum rozeti 🟢 **"RUNNING / PORTAL AKTİF"** olur.
4. Ekranda görüntülenen LAN IP adresinden (örn: `http://192.168.1.100:3000`) yerel ağdaki tüm cihazlar portala bağlanabilir.
5. İhtiyaç halinde **"🌐 Portala Git"** butonuyla tarayıcıda açabilir, **"⏹ Portali Durdur"** ile sonlandırabilir veya pencereyi **Sistem Tepsisine (Tray)** küçülterek arka planda sessiz çalıştırabilirsiniz.

---

<a id="8-veritabani-bakim-ve-2-asamali-sifirlama"></a>

## 8. 🛡️ Veritabanı Bakım ve 2 Aşamalı Güvenlikli Sıfırlama

### 💡 Ne Zaman / Neden Kullanılır

Test verilerini temizlemek veya yeni çalışma yılına girerken tüm hareket kayıtlarını silip sistemi fabrika ayarlarına döndürmek için kullanılır. Tanımlamalar, kullanıcılar ve admin hesabı korunur.

### ⚙️ Ön Koşullar

- **Gerekli Yetki/Rol:** Root / Sistem Yöneticisi (Admin).

### 🐾 Adım Adım İşlem Akışı

1. **Yönetim > Veritabanı & Bakım** sekmesine gidin.
2. Sağ alt köşedeki **Tehlikeli Bölge** kartından **"Veritabanını Sıfırla"** butonuna tıklayın.
3. **1. Aşama (Metin Onayı):** Açılan ilk penceredeki doğrulama kutusuna büyük harflerle **`SIFIRLA`** yazın ve onaylayın.
4. **2. Aşama (Şifre Onayı):** Hemen ardından açılan Sudo güvenlik penceresine oturum açtığınız **Sistem Yöneticisi Parolanızı** girin.
5. Sistem doğrulama sonrasında tüm personel, nöbet, izin ve ölçüm hareketlerini sıfırlayarak veritabanını fabrika ayarlarına döndürür.

---

## 🧾 Değişiklik Günlüğü

| Tarih | Sürüm | Özet |
| :--- | :--- | :--- |
| **2026-08-26** | **v4.1.2.3** | %100 Docstring denetimi tamamlandı. Kullanım kılavuzu ile gerçek kod senkronize edildi; RADPYS Portal Launcher GUI işleyişi, 2 aşamalı güvenlikli veritabanı sıfırlama (`SIFIRLA` + şifre), Onay Bekleyen Görevler 4 kategori ayrımı ve KVKK AES-256 `stored_files` dosya kasası işlendi. |
| **2026-08-25** | **v4.1.2.2** | Toplu İçe Aktarma Dry-Run, RD.F43 Doz Araştırma Formu, Nöbet İkame Motoru, Şua Zamanaşımı Rozetleri, NDK 2. Gün Hatırlatıcısı ve RKE DIN 6857-1 Karar Motoru doğrulanarak eklendi. |
