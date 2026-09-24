# Keşif Raporu: Modül 14 — Ortam Dozu ve Kroki Haritası (14_ortam_dozu_ve_kroki_haritasi)

**Keşif Tarihi:** 2026-09-24  
**İlgili Kaynak Dosyalar:**
- `ui/pages/kalite/ortam_dozu_page.ui`
- `ui/pages/kalite/ortam_dozu_qr_dialog.ui`
- `ui/pages/admin/system/krokiler_page.ui`
- `ui/pages/admin/system/oda_bagla_dialog.ui`
- `ui/controllers/kalite/ortam_dozu_controller.py`
- `ui/controllers/kalite/ortam_dozu_qr_dialog.py`
- `ui/controllers/admin/system/krokiler_controller.py`
- `ui/controllers/admin/system/oda_bagla_dialog_controller.py`
- `app/services/kalite/ortam_dozu_service.py`
- `app/services/system/kroki_yonetim_service.py`
- `app/services/system/olay_bildirim_service.py`
- `web_portal/src/components/dashboards/OrtamDozuDashboard.tsx`
- `web_portal/src/routes/ortam_dozu.routes.ts`

---

## A. Modülün Özeti ve Temel İş Akışları

RADPYS Radyasyon Alanları Periyodik Ortam Dozu İzleme ve İnteraktif Kroki Modülü; Sağlık Bakanlığı SKS 6.1 (Sağlıkta Kalite Standartları) ve NDK RSGD-KLV-005 mevzuatı uyarınca, kurumun mimari kat planları (vektörel PDF veya yüksek çözünürlüklü raster görseller) üzerinde radyasyon izleme noktalarını ve sabit cihaz konumlarını canlı pinler halinde haritalandırmayı, periyodik radyasyon dozu ölçümlerini kaydetmeyi, yasal eşik kontrollerini otomatik denetlemeyi, limit aşımında otomatik DÖF (Düzeltici Önleyici Faaliyet) başlatmayı ve resmi denetime hazır QR pasaport etiketleri ile SKS Excel raporları üretmeyi sağlar.

1. **İnteraktif Mimari Kroki ve Canlı Harita Tuvali (`InteractiveKrokiScene` & `QGraphicsView`):**
   - **Kat Planı Desteği:** Vektörel PDF, PNG, JPG ve BMP formatındaki mimari kat planları doğrudan yüklenebilir veya merkezi krokiler havuzundan seçilebilir.
   - **Gelişmiş Gezinme:** Fare tekerleğiyle imleç odaklı pürüzsüz yakınlaşma (Zoom), sol tıkla serbest sürükleme (Pan/Drag), `[Ekrana Sığdır]` ve `[Seçili Odaya Odaklan]` özellikleri.
   - **Çok Katmanlı Görselleştirme:**
     - *Katman 0:* Zemin mimari planı ve tanımlanmış zırhlı oda sınırları (`_draw_room_boundary`).
     - *Katman 1:* Sabit Tıbbi Cihaz Pinleri (`OrtamCihazPinItem`) — Cihaz türüne uygun SVG simgeler (BT/CT, MR, X-Ray, Skopi/C-Kollu, Mamografi, PET/SPECT, LINAC, vb.).
     - *Katman 2:* Ortam Dozu Ölçüm Noktası Pinleri (`KrokiPinItem`) — Alan sınıfı harf rozeti (`[D]` Denetimli, `[G]` Gözetimli, `[H]` Halka Açık) ve anlık risk durumuna göre dinamik renkler.
   - **Pin Taşıma ve Kilitleme Emniyeti (`btnPinKilitle`):** Kazara pin kaymalarını engellemek için varsayılan olarak "Pinler Kilitli" modundadır. Yetkili kullanıcı kilidi açtığında "Taşıma Aktif" (turuncu) moduna geçer ve sürükle-bırak ile koordinatlar (`pos_x`, `pos_y` %) güncellenir.
   - **Oda Alan Sınırı Belirleme (`btnOdaAlaniBelirle`):** Fare ile dikdörtgen alan seçilerek ilgili birimin kroki üzerindeki zırhlı sınırları kaydedilir.

2. **NDK ve SKS 6.1 Yasal Alan Sınıfları ve Otomatik Eşik Motoru:**
   - **Denetimli Alan (Controlled Area):** Uyarı Eşiği = `2.50 µSv/h`, Limit Eşiği = `10.00 µSv/h` (>6 mSv/yıl yasal giriş kontrollü alan).
   - **Gözetimli Alan (Supervised Area):** Uyarı Eşiği = `1.00 µSv/h`, Limit Eşiği = `2.50 µSv/h` (1-6 mSv/yıl kumanda masası/paravan arkası).
   - **Halka Açık Alan (Public Area):** Uyarı Eşiği = `0.25 µSv/h`, Limit Eşiği = `0.50 µSv/h` (<1 mSv/yıl bekleme salonu/koridor/ofis).
   - **Otomatik Durum Değerlendirmesi:**
     - Ölçülen Doz Hızı $\le$ Uyarı Eşiği $\rightarrow$ **Normal (Yeşil)**
     - Uyarı Eşiği $<$ Ölçülen Doz Hızı $\le$ Limit Eşiği $\rightarrow$ **Uyarı (Sarı)**
     - Ölçülen Doz Hızı $>$ Limit Eşiği $\rightarrow$ **Limit Aşımı (Kırmızı)**

3. **Cihaz Kalibrasyon Geçerlilik Emniyet Kilidi (RED-02):**
   - Kullanılan radyasyon ölçüm cihazının (survey meter) kalibrasyon tarihi 365 günü (1 yıl) geçmişse, sistem ölçüm kaydını reddeder (`"Kullanılan ölçüm cihazının kalibrasyon geçerlilik süresi (1 yıl) dolmuştur. Kalibrasyonu geçmiş cihazla resmi ölçüm kaydedilemez."`).

4. **Limit Aşımında Otomatik Olay Bildirimi ve DÖF Başlatma:**
   - Bir noktada "Limit Aşımı" tespit edildiğinde sistem derhal `OlayBildirimService` üzerinden otomatik bir Radyasyon Güvenliği Olay Bildirimi açar ve düzeltici faaliyet (`DÖF`) oluşturur; doz limitin 3 katını aşarsa `ndk_bildirim_gerekli = 1` olarak mühürlenir.

5. **Veri Bütünlüğü ve Silme Koruması:**
   - Üzerine en az bir adet ölçüm kaydedilmiş olan ölçüm noktaları kalite denetim geçmişinin korunması amacıyla **kesinlikle silinemez** (`"Bu ölçüm noktasına ait X adet kayıtlı doz ölçümü bulunmaktadır. Kalite denetim ve doz takip mevzuatı gereği ölçüm geçmişi olan noktalar silinemez."`).
   - Nokta kodları departman kısa koduna göre otomatik artan sırada üretilir (`{DEP}-OD-01`, `{DEP}-OD-02`).

6. **Karekod (QR) Pasaport Etiketi ve SKS Excel Raporu:**
   - **QR Pasaport Etiketi (`OrtamDozuQrDialog`):** Hem tekil ölçüm noktaları için hem de odanın tamamını kapsayan kapı etiketi formatında üretilebilir, termal yazıcıdan yazdırılabilir veya PNG olarak dışa aktarılabilir.
   - **SKS 6.1 Excel Denetim Formu (`export_sks_denetim_raporu`):** Sağlık Bakanlığı kalite denetim formatında, renk kodlu durum hücreleri ve kurum anteti içeren resmi Excel çıktısıdır.

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| Arayüz Bileşeni (UI Label) | Türü | Ne İşe Yarar? (Ne?) | Kim Kullanır? (Kim?) | Ne Zaman Kullanılır? (Ne Zaman?) | Nerede Yer Alır? (Nerede?) | Nasıl Çalışır? (Nasıl?) | Durum / Emniyet Kilidi |
|---|---|---|---|---|---|---|---|
| **[Birim / Departman]** | QComboBox (`comboDepartman`) | İncelenen radyasyon birimini seçer | RKS / Birim Sorumlusu | Ekran açıldığında veya birim değiştirilirken | Filtre Çubuğu Sol | Seçilen birimin mimari krokisini, noktalarını ve ölçümlerini anında yükler. | Aktif radyasyonlu birimler listelenir. |
| **[Ölçüm Kaydet]** | QPushButton (`btnYeniOlcum`) | Yeni periyodik doz ölçümü kaydeder | RKS / Medikal Fizikçi / Tekniker | Periyodik radyasyon taraması yapıldığında | Ana Araç Çubuğu Sol | Nokta, tarih, ölçülen doz (µSv/h), arka plan, cihaz ve ölçen personel bilgilerini alıp kaydeder. | Cihaz kalibrasyonu 1 yılı geçmişse engeller; limit aşımında DÖF açar. |
| **[Yeni Nokta Ekle]** | QPushButton (`btnYeniNokta`) | Kroki üzerine yeni ölçüm noktası tanımlar | RKS / Sistem Yöneticisi | Yeni radyasyon odası veya ölçüm yeri eklendiğinde | Ana Araç Çubuğu | Departmana göre ardışık kod üretir (`{DEP}-OD-01`), alan sınıfı ve eşik limitlerini belirler. | Mükerrer nokta kodu engellenir; NDK standart limitleri otomatik atanır. |
| **[Kroki Yükle / Değiştir]** | QPushButton (`btnKrokiYukle`) | Mimari kat planı yükler veya havuzdan seçer | RKS / Sistem Yöneticisi | Birime ilk kez kroki atanırken veya revizyonda | Ana Araç Çubuğu | Bilgisayardan PDF/PNG/JPG yükletir veya mevcut krokiler havuzundan eşleştirir. | Dosya diskte doğrulanır; şifreli kasaya kopyalanır. |
| **[Karekod / Etiket Bas]** | QPushButton (`btnAnaQrBas`) | Kapı pasaportu veya tekil nokta etiketi basar | RKS / İSG Uzmanı | Ölçüm noktasına fiziksel levha yapıştırılacağında | Ana Araç Çubuğu | Oda bazlı tüm odayı kapsayan etiket veya nokta bazlı QR etiketi diyalogunu açar. | Yazıcı çıktısı ve PNG indirme desteklidir. |
| **[SKS Raporu (Excel)]** | QPushButton (`btnSksExcelExport`) | SKS 6.1 resmi denetim Excel raporunu üretir | Kalite Birimi / RKS | Sağlık Bakanlığı veya kurum içi denetimlerde | Ana Araç Çubuğu | Filtreli ölçümleri kurumsal antet ve renkli durum formatında `.xlsx` dosyasına döker. | Dosya başka programda açıksa uyarı verir. |
| **[Yenile]** | QPushButton (`btnYenile`) | Harita ve tüm tabloları günceller | Tüm Kullanıcılar | Yeni veri girildiğinde veya filtre değişiminde | Ana Araç Çubuğu Sağ | Servisten güncel istatistikleri, pinleri ve ölçümleri baştan çeker. | Her an kullanılabilir. |
| **[Pinler Kilitli / Taşıma Aktif]** | QPushButton (`btnPinKilitle`) | Pinlerin sürüklenmesini kilitler veya açar | Yetkili Kullanıcı | Pinlerin konumu ayarlanırken veya sabitlenirken | Kroki Tuvali Alt Araç Çubuğu | Tıklandığında kilit/açık durumunu değiştirir; kilitliyken sürüklemeyi engeller, açıkken taşımaya izin verir. | İki durumlu kontrol (Default: Kilitli). |
| **[Oda Alanını Belirle]** | QPushButton (`btnOdaAlaniBelirle`) | Krokide dikdörtgen oda sınırını çizer | RKS / Sistem Yöneticisi | Kat planında birimin kapsadığı alanı tanımlarken | Kroki Tuvali Alt Araç Çubuğu | Çizim modunu açar; fareyle seçilen dikdörtgeni birimin oda koordinatları olarak kaydeder. | Başarı durumunda otomatik çizim modundan çıkar. |
| **[Ekrana Sığdır]** | QPushButton (`btnZoomFit`) | Krokiyi pencere boyutuna uyarlar | Tüm Kullanıcılar | Yakınlaştıktan sonra tam planı görmek için | Kroki Tuvali Alt Araç Çubuğu | Grafik sahnesini pencere boyutuna göre optimum oranda ölçekler. | Her an kullanılabilir. |
| **[Krokisi Sil]** | QPushButton (`btnKrokiSil`) | Birimin kayıtlı krokisini kaldırır | Sistem Yöneticisi | Hatalı plan yüklendiğinde | Kroki Tuvali Alt Araç Çubuğu Sağ | Kullanıcıdan teyit alarak birim-kroki bağlantısını ve görsel kaydını siler. | Silme yetkisi denetlenir. |
| **[İnteraktif Kroki Sahnesi]** | QGraphicsView (`graphicsViewKroki`) | Harita, oda sınırları ve pinleri görselleştirir | Tüm Kullanıcılar | Canlı izleme ve nokta seçiminde | 1. Sekme (`tabKrokiHarita`) | Fare tekerleğiyle zoom, sol tıkla pan, sağ tıkla bağlam menüsü, pin tıklamasıyla hızlı ölçüm sağlar. | Smooth transformasyon ve yüksek çözünürlük destekli. |
| **[Ölçüm Geçmişi Tablosu]** | QTableWidget (`tblOlcumler`) | Birimdeki tüm doz ölçümlerini listeler | Tüm Kullanıcılar | Geçmiş doz trendleri incelenirken | 2. Sekme (`tabOlcumGecmisi`) | Nokta, tarih, doz, durum, cihaz ve personeli tabular yazı tipiyle listeler; renkli rozetler sunar. | Durum ve tarih aralığı filtreleriyle süzülebilir. |
| **[Seçili Ölçümü Sil]** | QPushButton (`btnOlcumSil`) | Hatalı girilmiş ölçüm kaydını siler | RKS / Sistem Yöneticisi | Yanlış ölçüm girildiğinde | Ölçüm Geçmişi Sekmesi | Teyit alarak seçili ölçümü siler; haritadaki en son doz değerlerini yeniler. | Silme yetkisi ve onay sistemi denetlenir. |
| **[Noktalar Kataloğu Tablosu]** | QTableWidget (`tblNoktalar`) | Tanımlı ölçüm noktalarını listeler | Tüm Kullanıcılar | Nokta ve eşik parametreleri incelenirken | 3. Sekme (`tabNoktalar`) | Nokta kodu, tanımı, alan sınıfı, uyarı ve limit eşiklerini listeler. | Çift tıklamayla doğrudan QR etiketini açar. |
| **[Nokta Düzenle]** | QPushButton (`btnNoktaDuzenle`) | Ölçüm noktasının eşik ve adını günceller | RKS / Sistem Yöneticisi | Sınıf veya eşik revizyonunda | Noktalar Kataloğu Sekmesi | Seçili noktanın düzenleme diyaloğunu açar; güncellenen limitleri kaydeder. | Mükerrer kod engellenir. |
| **[Nokta Sil]** | QPushButton (`btnNoktaSil`) | Ölçüm noktasını sistemden kaldırır | RKS / Sistem Yöneticisi | Nokta iptal edildiğinde | Noktalar Kataloğu Sekmesi | Ölçüm kaydı kontrolü yapar; ölçüm girilmemişse onay alarak siler. | **Ölçümü olan nokta ASLA silinemez**. |
| **[KPI Sayaç Kartları]** | QFrame (`kpiContainer`) | Nokta sayısı, güvenli, uyarı ve limit aşımı özeti | Tüm Kullanıcılar | Durum takip kokpiti | Başlık Altı | Renkli kartlarda toplam nokta, normal, uyarı, limit aşımı ve son ölçüm tarihini anlık özetler. | Salt okunur dinamik sayaçlar. |

---

## C. Mantık ve Kısıt Soruları (Saha ve Mevzuat Teyitleri)

1. **Yasal Alan Sınıfları ve Standart Doz Eşikleri (NDK RSGD-KLV-005):**
   - Sistemde NDK kılavuzlarına göre üç alan sınıfı ve varsayılan eşikler tanımlıdır:
     - **Denetimli Alan:** Uyarı: $2.50\ \mu\text{Sv/h}$, Limit: $10.00\ \mu\text{Sv/h}$ ($>6\text{ mSv/yıl}$).
     - **Gözetimli Alan:** Uyarı: $1.00\ \mu\text{Sv/h}$, Limit: $2.50\ \mu\text{Sv/h}$ ($1-6\text{ mSv/yıl}$).
     - **Halka Açık Alan:** Uyarı: $0.25\ \mu\text{Sv/h}$, Limit: $0.50\ \mu\text{Sv/h}$ ($<1\text{ mSv/yıl}$).
   - *Kurumunuzda bu üç alan sınıfı ve doz hızı eşik değerleri mevzuat uyarınca aynen mi uygulanmaktadır, yoksa kurumsal iç yönergenizle belirlenmiş farklı eşikler var mıdır?*
2. **Cihaz Kalibrasyon Geçerlilik Süresi Sınırı (RED-02):**
   - Ölçüm kaydederken seçilen ölçüm cihazının kalibrasyon tarihi kontrol edilmekte; son kalibrasyon üzerinden 365 gün (1 yıl) geçmişse sistem ölçüm kaydını emniyet kilidiyle engellemektedir. *Kurumunuzda ortam dozu ölçüm cihazlarının kalibrasyon periyodu yıllık (12 ay) olarak mı takip edilmektedir?*
3. **Limit Aşımında Otomatik DÖF ve Olay Bildirimi Başlatma:**
   - Bir ölçüm noktasında "Limit Aşımı" ($>\text{Limit Eşiği}$) tespit edildiğinde, sistem otomatik olarak bir Radyasyon Güvenliği Olay Bildirimi açmakta ve sorumlu personele DÖF (Düzeltici Önleyici Faaliyet) görevi atamaktadır. Doz eşiğin 3 katını aşarsa NDK bildirimi bayrağı işaretlenmektedir. *Bu otomatik kalite entegrasyonu kurumunuzun İSG ve radyasyon güvenliği prosedürleriyle tam uyumlu mudur?*
4. **Ölçüm Geçmişi Bulunan Noktaların Silinememesi Kuralı:**
   - Denetim izlerinin ve yasal kalite arşivinin korunması amacıyla, üzerinde en az bir adet ölçüm kaydedilmiş olan noktaların silinmesi sistem tarafından kesin olarak engellenmektedir. *Bu koruma kuralı kurumunuz kalite yönetim sistemiyle örtüşmekte midir?*
5. **Karekod (QR) Pasaport Etiketlerinin Kullanım Alanı:**
   - Sistemde hem her bir tekil ölçüm noktası için (cihaz/paravan arkası) hem de oda giriş kapısı için (tüm odayı kapsayan) iki farklı QR etiket basım seçeneği bulunmaktadır. *Kurumunuzda bu etiketler hem kapı girişlerine hem de oda içi noktalara fiziksel olarak yapıştırılmakta mıdır?*

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Portalı Karşılıkları)

| Modül / İşlem | Masaüstü Uygulaması (PySide6) | Mobil / Web Portalı (React + Node.js) | Hibrit Davranış / Senkronizasyon |
|---|---|---|---|
| **İnteraktif Mimari Kroki** | Vektörel PDF veya yüksek çözünürlüklü görsel; imleç odaklı zoom, pan, pin sürükle-bırak koordinatlama ve oda alanı dikdörtgen çizimi. | Web canvas/SVG üzerinde interaktif mimari kroki; dokunmatik parmakla pan (Touch Pan) ve responsive pin yerleşimi. | Masaüstünde belirlenen pin koordinatları (`pos_x`, `pos_y` %) web portalında pixel-perfect olarak canlı eşleşir. |
| **Ölçüm Noktası Tanımlama & Silme** | Yetkili kullanıcı yeni nokta ekler (`btnYeniNokta`), koordinatlar pinlenir, eşikler atanır. | Web portalında yeni nokta ekleme/silme yetkisi güvenlik gereği **YOKTUR** (salt okunur katalog ve ölçüm girişi). | Nokta kataloğu masaüstünden yönetilir, web portalına anında yansır. |
| **Periyodik Doz Ölçümü Kaydetme** | `[Ölçüm Kaydet]` modalı ile tam yetkili giriş; cihaz kalibrasyon kontrolü ve otomatik DÖF başlatma. | Saha personeli tablet/telefon kamerasıyla kapıdaki QR kodu okutarak odaya ait noktalara anlık mobil ölçüm girebilir. | Web portalından girilen ölçümler onay durumuna göre anında masaüstü tablosuna ve haritadaki pin rengine yansır. |
| **Pin Konum Kilitleme** | `[Pinler Kilitli / Taşıma Aktif]` butonu ile masaüstü yöneticisi pinlerin taşınmasını engeller veya serbest bırakır. | Web portalında pinler daima kilitlidir; taşınamaz. | Kazara harita bozulmaları önlenir. |
| **SKS 6.1 Excel Denetim Raporu** | Masaüstü arayüzünden doğrudan resmi antetli, renk kodlu ve kenarlıklı `.xlsx` denetim raporu üretilir. | Web portalında aylık doz trend grafikleri (Recharts LineChart) ve filtrelenmiş CSV dışa aktarımı sunulur. | Resmi SKS denetim formatı masaüstünden teslim alınır. |
| **QR Pasaport Etiketi Basımı** | Termal yazıcı veya A4 etiket basımına hazır vektörel QR diyalogu (`OrtamDozuQrDialog`). | Web portalında karekod görseli görüntülenebilir ve mobil tarayıcıyla anında okutulabilir. | Fiziksel levhalandırma masaüstünden yazdırılır. |

---

## E. Hedefli Ekran Görüntüsü Talebi

Kılavuz dokümantasyonunda kullanıcıların ortam dozu izleme ve interaktif kroki haritasını eksiksiz kavraması için **SADECE 2 kritik ekran görüntüsü** hedeflenmiştir:

1. **`14_1_ortam_dozu_kroki_haritasi_ana_ekran.png`:**
   - **Görüntülenecek Alan:** Kalite Yönetimi -> `Radyasyon Alanları Periyodik Ortam Dozu İzleme` ana ekranı (`İnteraktif Kroki ve Canlı Harita` sekmesi aktifken).
   - **Görsel Odak:** Üst araç çubuğu (`Ölçüm Kaydet`, `Yeni Nokta Ekle`, `Kroki Yükle`, `Karekod Bas`, `SKS Raporu`), KPI sayaç kartları (Ölçüm Noktaları, Güvenli, Uyarı, Limit Aşımı), interaktif harita tuvali üzerindeki renkli pinler (yeşil, sarı, kırmızı rozetler) ve altındaki `[Pinler Kilitli]`, `[Oda Alanını Belirle]` butonları.

2. **`14_2_ortam_dozu_qr_pasaport_etiketi_dialog.png`:**
   - **Görüntülenecek Alan:** Herhangi bir pine veya `[Karekod / Etiket Bas]` butonuna basıldığında açılan `OrtamDozuQrDialog` penceresi.
   - **Görsel Odak:** Kurumsal antetli çerçeve, yüksek çözünürlüklü QR kod, nokta kodu (örn: `RAD-OD-01`), alan sınıfı, uyarı/limit eşikleri ve altındaki `[Yazdır]` / `[PNG Olarak Kaydet]` butonları.
