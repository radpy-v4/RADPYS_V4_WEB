# Keşif Raporu: Modül 17 — Hizmet İçi Eğitim ve Online Sınav Yönetimi (17_hizmet_ici_egitim_ve_online_sinav)

**Tarih:** 2026-09-24  
**İncelenen Kod Tabanı:**
- UI Tasarım Dosyaları: `ui/pages/kalite/hizmet_ici_egitim_page.ui`, `ui/pages/kalite/hizmet_ici_egitim_sinav_dialog.ui`
- Controller Dosyaları: `ui/controllers/kalite/hizmet_ici_egitim_controller.py`, `ui/controllers/kalite/hizmet_ici_egitim_sinav_dialog.py`
- Servis Katmanı: `app/services/personel/hizmet_ici_egitim_service.py`
- Veritabanı Modelleri: `egitim_katalogu`, `egitim_atamalari`, `personel_hizmet_ici_egitim`, `soru_bankasi`, `egitim_sinav_sorulari`, `egitim_sorulari`, `personeller`, `departmanlar`, `stored_files` (`app/db/schema.sql`)
- Testler: `tests/test_hizmet_ici_egitim_service.py`
- Web Portal Entegrasyonları: `web_portal/src/routes/egitim.routes.ts`, `web_portal/src/routes/dashboard/dashboard.kurumsal.routes.ts`

---

## A. Modülün Özeti ve Görevleri

**Hizmet İçi Eğitim ve Online Sınav Yönetimi Modülü**; Sağlıkta Kalite Standartları (SKS 6.1) ve Nükleer Düzenleme Kurumu (NDK) mevzuatının zorunlu kıldığı yıllık temel radyasyon güvenliği, radyoizotop kullanımı, hasta/çalışan korunması ve acil durum eylem eğitimlerinin kurumsal düzeyde planlandığı, personele atandığı, video/doküman içeriklerinin sunulduğu, merkezi soru bankasından hazırlanan online sınavlarla başarı barajının değerlendirildiği ve resmi denetimlere yönelik Uyum Matrisi'nin dinamik olarak üretildiği entegre eğitim ve belgelendirme sistemidir.

### Koddan Tespit Edilen Temel İş Akışları:
1. **Kurumsal Eğitim Kataloğu Yönetimi (`tabKatalog`):**
   - Eğitim adı, kategori, geçerlilik süresi (ay cinsinden; `0` = Süresiz), zorunluluk durumu (`[x] Zorunlu Eğitim`), online sınav zorunluluğu (`[x] Online Sınav Aktif`), başarı baraj puanı (varsayılan: `%70`), materyal tipi (*Doküman, Video Dosyası, Harici Video URL*) ve açıklama tanımlanır.
   - Eğitim dokümanı veya videosu seçilerek sisteme bağlanır, doğrudan `[Dokümanı / Materyali Aç]` butonu ile incelenebilir.
2. **Toplu ve Birim Bazlı Eğitim Atama Motoru (`tabAtamalar`):**
   - Departman ve hizmet sınıfı filtreleriyle filtrelenen çalışan listesinden `[Tümünü Seç]` veya tekil seçimlerle hedef personel grubu belirlenir.
   - Belirlenen eğitim ve son tamamlama tarihi seçilerek `[Seçilen Personele Ata]` butonu ile tek hamlede yüzlerce çalışana eğitim görevi atanır (`egitim_atamalari`).
   - Atanan eğitimler tablosunda son tarih, personel ve durum (*Atandı, Tamamlandı, İptal*) izlenir; gerekirse `[Atamayı İptal Et]` ile geri alınabilir.
3. **Merkezi Soru Havuzu, Şık Görselleri ve Excel İçe/Dışa Aktarımı (`tabSorular`):**
   - Her eğitim için çoktan seçmeli (A, B, C, D) sınav soruları tanımlanır.
   - **Görselli Soru Desteği:** Hem ana soru metnine hem de her seçeneğe (A, B, C, D) bağımsız görsel eklenebilir / kaldırılabilir (`btnSoruResimSec`, `btnSecenekAResimSec` vb.).
   - `[Şablon İndir]` ile standart Excel şablonu üretilir, `[Excel'den Soru Yükle]` ile yüzlerce soru topluca sisteme aktarılır.
   - `[Başka Eğitimden Soru Kopyala]` fonksiyonu ile önceki dönem veya benzer başlıktaki eğitimlerin sınav soruları tek tıkla yeni eğitime aktarılabilir.
4. **Online Sınav Çözme ve Anlık Otomatik Değerlendirme Motoru (`HizmetIciSinavDialog`):**
   - Personel veya yetkili arayüzden sınava girdiğinde, eğitim soruları havuzdan çekilir ve **her oturumda dinamik olarak karıştırılır (shuffle)**; şıkların sırası da kopya çekilmesini önleyecek şekilde rastgele yerleştirilir.
   - Sınav tamamlandığında boş bırakılan soru varsa kullanıcı uyarılır.
   - `evaluate_sinav` servisi işaretlenen şıkları orijinal doğru cevap anahtarıyla karşılaştırır; başarı puanı eğitim kataloğundaki baraj puanına (varsayılan `%70`) eşit veya üzerindeyse sınavı anında **başarılı** sayar.
   - Sınav başarıyla geçildiğinde sistem otomatik olarak personelin eğitimini tamamlar (`personel_hizmet_ici_egitim`) ve durumu `Onaylandı` olarak tescil eder. Barajın altında kalınırsa personelin tekrar denemesi istenir.
5. **Kurum Geneli Çapraz Uyum ve Denetim Raporu (`tabUyumRaporu`):**
   - Aktif çalışanlar ile zorunlu eğitim kataloğu arka planda `CROSS JOIN` ile taranır.
   - Her bir personel-eğitim eşleşmesi için dinamik uyum statüsü hesaplanır:
     - **Aktif (Yeşil):** Eğitimi tamamlamış ve geçerliliği devam ediyor.
     - **Süresiz Geçerli (Yeşil):** Geçerlilik süresi sınırsız tanımlı eğitimi tamamlamış.
     - **Süresi Yaklaşıyor (Sarı/Turuncu):** Geçerlilik bitimine 15 gün veya daha az kalmış.
     - **Süresi Doldu (Kırmızı):** Geçerlilik süresi dolmuş, yenilenmesi zorunlu.
     - **Hiç Alınmamış (Mor):** Zorunlu olduğu halde personel bu eğitimi henüz hiç almamış (SKS denetim riski).
   - Ekran üstünde 5 adet KPI kartı anlık güncellenir: **[Genel Uyum Oranı %]**, **[Geçerli Eğitimler]**, **[15 Gün Kalanlar]**, **[Süresi Dolanlar]**, **[Hiç Alınmamış]**.
   - `[Excel Raporu]` butonu ile resmi denetim heyetine sunulmaya hazır, renkli başlık formatında kurumsal `.xlsx` raporu üretilir.
6. **15 Gün Önceden Otomatik Sistem Bildirimi Üretimi (`check_and_create_expiry_notifications`):**
   - Arka planda çalışan servis motoru, eğitim geçerlilik süresinin bitimine 15 gün ve daha az kalan tüm çalışanları tespit ederek sistem içi bildirim üretir (mükerrer bildirim önleme koruması mevcuttur).

---

## B. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Amaç) | NEREDE? (Ekran Konumu) | NASIL? (Çalışma Mantığı) | NE ZAMAN? | KİM? | DURUM |
|---|---|---|---|---|---|---|
| **[Genel Uyum Oranı KPI (`lblKpiUyumOrani`)]** | Kurumun SKS eğitim uyum yüzdesini tek bakışta izlemek. | Üst KPI Şeridi | `(Aktif + Süresiz) / Toplam * 100` formülüyle yüzdeyi dinamik hesaplar. | Veriler yüklendiğinde veya filtre uygulandığında. | Tüm Yetkililer | **Eksiksiz & Aktif** |
| **[Geçerli Eğitimler KPI (`lblKpiAktifEgitim`)]** | Geçerliliği devam eden eğitim tescil adedini görmek. | Üst KPI Şeridi | `durum in ('Aktif', 'Süresiz Geçerli')` sayısını yansıtır. | Sürekli canlı. | Kalite / RGS | **Eksiksiz & Aktif** |
| **[15 Gün Kalanlar KPI (`lblKpiYaklasan`)]** | Yakında süresi dolacak ve yenilenmesi gereken personeli fark etmek. | Üst KPI Şeridi | Geçerlilik bitişine ≤ 15 gün kalan kayıtları sayar. | Periyodik kontrolde. | Kalite / RGS | **Eksiksiz & Aktif** |
| **[Süresi Dolanlar KPI (`lblKpiDolan`)]** | Süresi bittiği halde yenilenmemiş eğitimleri tespit etmek. | Üst KPI Şeridi | Bitiş tarihi geçmiş kayıtları kırmızı sayaçla listeler. | Denetim öncesi. | Kalite / Yönetim | **Eksiksiz & Aktif** |
| **[Hiç Alınmamış KPI (`lblKpiHicAlinmamis`)]** | Zorunlu eğitimi kurumda hiç almamış personelleri görmek. | Üst KPI Şeridi | Cross-join sonucu eşleşen tamamlama kaydı bulunmayanları sayar. | Planlama safhasında. | Eğitim Sorumlusu | **Eksiksiz & Aktif** |
| **[Uyum Matrisi Tablosu (`tblUyumMatrisi`)]** | Personel bazında her zorunlu eğitimin tamamlama ve kalan süresini görmek. | `Uyum ve Denetim Raporu` Sekmesi | Personel, TC, Departman, Zorunlu Eğitim, Tamamlanma, Bitiş ve 4 renkli durum hücresiyle sunar. | Denetim ve takipte. | Tüm Kullanıcılar | **Eksiksiz & Aktif** |
| **[Excel Raporu (`btnUyumExcel`)]** | Uyum matrisini resmi denetim çıktısı olarak kaydetmek. | `Uyum ve Denetim Raporu` Sekmesi | `openpyxl` kütüphanesiyle kurumsal lacivert başlıklı `.xlsx` dosyası oluşturur. | Denetim dosyası hazırlanırken. | Kalite / RGS | **Eksiksiz & Aktif** |
| **[Birim & Hizmet Filtresi (`comboAtamaBirimFilter`)]** | Toplu eğitim atarken personeli birimine veya mesleğine göre süzmek. | `Eğitim Atamaları` Sekmesi Sol Panel | Seçilen departman ve hizmet sınıfına (`get_aktif_hizmet_tipleri`) uyan personelleri listeler. | Atama öncesi. | Eğitim Sorumlusu | **Eksiksiz & Aktif** |
| **[Tümünü Seç / Temizle (`btnTumunuSec` / `btnSecimiTemizle`)]** | Tablodaki tüm personelleri tek tıkla işaretlemek veya kaldırmak. | `Eğitim Atamaları` Sekmesi Sol Panel | `tblPersonelSecim` tablosundaki onay kutularını (`Qt.CheckState`) topluca değiştirir. | Toplu atama yapılırken. | Eğitim Sorumlusu | **Eksiksiz & Aktif** |
| **[Seçilen Personele Ata (`btnTopluAta`)]** | İşaretlenen çalışanlara seçili eğitimi ve son tarihi atamak. | `Eğitim Atamaları` Sekmesi Üst Panel | Seçilen personele `egitim_atamalari` kaydı açar; sistem bildirimi ile görevlendirir. | Eğitim takviminde. | Eğitim Sorumlusu | **Eksiksiz & Aktif** |
| **[Atamayı İptal Et (`btnAtamaIptalEt`)]** | Hatalı veya personelin ayrılması durumunda atamayı kaldırmak. | `Eğitim Atamaları` Sekmesi Sağ Panel | Onay sorusu ardından atama durumunu `İptal` olarak günceller. | Değişiklik durumunda. | Eğitim Sorumlusu | **Eksiksiz & Aktif** |
| **[Eğitim Kataloğu Formu (`grpKatalogForm`)]** | Kurumsal eğitim başlıklarını, sınav şartlarını ve materyallerini tanımlamak. | `Eğitim Kataloğu` Sekmesi Sağ Panel | Eğitim Adı, Kategori, Geçerlilik Ayı (`0`=Süresiz), Baraj %, Materyal türü ve dosyasını kaydeder. | Yeni eğitim açılışında. | Yönetici / RGS | **Eksiksiz & Aktif** |
| **[Doküman Seç / Aç (`btnKatalogDosyaSec` / `btnKatalogDokumanAc`)]** | Eğitime ait PDF, PPTX veya video dosyasını yüklemek ve görüntülemek. | `Eğitim Kataloğu` Sekmesi Sağ Panel | `QFileDialog` ile seçer; açıldığında sistemin varsayılan PDF/video oynatıcısında başlatır. | Materyal güncellerken. | Eğitim Sorumlusu | **Eksiksiz & Aktif** |
| **[Soru Kaydet / Sil (`btnSoruKaydet` / `btnSoruSil`)]** | Seçili eğitime 4 seçenekli soru eklemek, güncellemek veya havuzdan silmek. | `Sınav Soruları Havuzu` Sekmesi | Soru metni, şık metinleri, doğru cevap harfi (A/B/C/D) ve görselleri doğrulanarak kaydedilir. | Soru bankası hazırlığında. | Sınav Komisyonu | **Eksiksiz & Aktif** |
| **[Soru & Şık Görselleri (`btnSoruResimSec`, `btnSecenekAResimSec` vb.)]** | Radyolojik diyagram, cihaz şeması veya formül görsellerini soruya/şıklara bağlamak. | `Sınav Soruları Havuzu` Soru Formu | Seçilen görsel dosyasını `data/uploads/egitimler/soru_resimleri/` altına kaydeder. | Görselli sorularda. | Sınav Komisyonu | **Eksiksiz & Aktif** |
| **[Şablon İndir (`btnSoruSablonIndir`)]** | Excel ile soru hazırlamak için standart boş formatı temin etmek. | `Sınav Soruları Havuzu` Üst Araç Çubuğu | Başlıkları önceden ayarlanmış `Egitim_Sinav_Sorulari_Sablonu.xlsx` dosyasını kullanıcının bilgisayarına indirir. | Toplu soru hazırlığında. | Sınav Komisyonu | **Eksiksiz & Aktif** |
| **[Excel'den Soru Yükle (`btnSoruExcelImport`)]** | Doldurulan Excel şablonundaki soruları seçili eğitime aktarmak. | `Sınav Soruları Havuzu` Üst Araç Çubuğu | `run_with_progress` arka plan diyaloğuyla Excel satırlarını okur, soru bankasına ve eğitime bağlar. | Toplu aktarımda. | Eğitim Sorumlusu | **Eksiksiz & Aktif** |
| **[Başka Eğitimden Kopyala (`btnSoruKopyala`)]** | Başka bir eğitimin mevcut sorularını hedef eğitime aktarmak. | `Sınav Soruları Havuzu` Üst Araç Çubuğu | Kaynak eğitim listesinden seçim yaptırır, soruları ilişkilendirir (`egitim_sinav_sorulari`). | Dönem yenilemelerinde. | Eğitim Sorumlusu | **Eksiksiz & Aktif** |
| **[Online Sınav Diyaloğu (`HizmetIciSinavDialog`)]** | Personelin eğitimi pekiştirmesi ve puanlandırılması. | Modal Diyalog | Soruları ve şıkları rastgele karıştırarak sunar, testi puanlar, baraj sağlanırsa eğitimi onaylar. | Eğitim tamamlandığında. | Çalışan Personel | **Eksiksiz & Aktif** |

---

## C. Mantık ve Kısıt Soruları (Kullanıcı Teyidine Sunulacak Noktalar)

1. **Yıllık Eğitim Periyodu ve 15 Günlük Erken Uyarı Süresi:**
   - Kod tabanında geçerlilik süresi girilen eğitimlerde bitiş tarihine **≤ 15 gün** kala uyarı statüsü (`Süresi Yaklaşıyor`) devreye girmekte ve sisteme otomatik bildirim düşmektedir. Standart periyot ise 12 ay (1 yıl) olarak önerilmektedir. NDK ve SKS denetim takviminiz açısından 15 günlük erken uyarı eşiği kurumunuz için uygun mudur?
2. **Sınav Başarı Barajı (Varsayılan %70) ve Sınav Tekrar Hakkı:**
   - Sistemde online sınavı olan eğitimler için katalogda tanımlanan baraj puanı (varsayılan: `%70`) aranmaktadır. Barajın altında kalan personele sınav sonucunda *"Baraj puanı sağlanamadı, materyali tekrar inceleyip yeniden deneyiniz"* uyarısı verilmekte ve sınırsız tekrar hakkı tanınmaktadır. Kurumunuzda başarısızlık durumunda bir deneme sayısı sınırı (örneğin 3 hak) veya bekleme süresi uygulanmakta mıdır, yoksa personelin geçene kadar sınırsız deneme hakkı var mıdır?
3. **Sınav Başarısı Sonrası Otomatik Tescil ve Onay:**
   - Personel online sınavda baraj puanını aştığında, arka plandaki servis doğrudan `personel_hizmet_ici_egitim` tablosuna `Onaylandı` statüsüyle tamamlama kaydı açmakta ve atamayı `Tamamlandı` yapmaktadır. Sınavı geçen personelin eğitimi başka bir komisyon onayı beklemeden doğrudan geçerli sayılmalı mıdır?
4. **Zorunlu Eğitim ve Uyum Matrisinde "Hiç Alınmamış" Durumu:**
   - Uyum matrisi raporunda, aktif personellerin zorunlu eğitim listesinde henüz hiç tamamlama kaydı olmayan satırlar mor renkli `Hiç Alınmamış` olarak işaretlenmekte ve Genel Uyum Oranını doğrudan düşürmektedir. Bir personel kuruma yeni başladığında zorunlu eğitimi alana kadar bu durumun denetim uyarısı olarak kırmızı bayrak üretmesi kuralını onaylıyor musunuz?
5. **Materyal Türleri ve Video Portal Entegrasyonu:**
   - Sistemde eğitim materyali olarak PDF/Word sunum dokümanı, yerel video dosyası (`.mp4`, `.webm`) veya harici video URL linki desteklenmektedir. Sınavı olmayan eğitimlerde personel dokümanı/videoyu açıp incelediğinde `[tamamla-okuma]` ile doğrudan eğitimi tamamlamış sayılmaktadır. Bu akış kurumunuzun eğitim politikasıyla tam uyumlu mudur?

---

## D. Hibrit Arayüz Durumu (Masaüstü ve Web Karşılıkları)

- **Masaüstü Uygulaması (Yetkili Yönetim, Sınav Havuzu ve Raporlama Merkezi):**
  - **Eğitim Kataloğu & Materyal Tanımlama:** Yeni eğitim açma, PDF/video dosyası bağlama, geçerlilik süresi ve sınav barajı belirleme.
  - **Toplu Atama:** Birim ve unvan filtreleriyle tek tıkla yüzlerce personele toplu eğitim atama ve atama iptalleri.
  - **Soru Havuzu & Excel:** Görselli soru/şık girişi, şablon indirme, Excel'den toplu soru yükleme ve eğitimler arası soru kopyalama.
  - **Uyum ve Denetim Matrisi:** Kurum geneli personel-eğitim çapraz uyum tablosunu izleme ve renkli Excel (.xlsx) denetim raporu üretme.
- **Web Portalı Entegrasyonu (`egitim.routes.ts` & Kurumsal Dashboard):**
  - **Personel Eğitim Sayfası (`/api/egitim/personel/:personelId`):** Çalışan Web Portala girdiğinde kendisine atanmış olan zorunlu eğitimleri, son tamamlama tarihlerini, video sürelerini ve tamamlanma durumlarını görür.
  - **Entegre Video & PDF Oynatıcı (`/api/egitim/materyal/:egitimId`):** HTTP Range stream desteğiyle büyük boyutlu MP4 eğitim videolarını ve PDF sunumlarını doğrudan tarayıcı üzerinden kesintisiz izleyebilir.
  - **Web Üzerinden Online Sınav Çözme (`/api/egitim/sinav-degerlendir`):** Personel eğitim materyalini inceledikten sonra Web Portal üzerinden soruları çözüp sınavını gönderebilir; anında baraj puanı değerlendirmesini alarak sertifika sürecini tamamlayabilir.
  - **Kurumsal Denetim Kokpiti (`dashboard.kurumsal.routes.ts`):** Yönetici ve RGS sorumluları kurum genelindeki eğitim tamamlanma yüzdelerini web kokpitinden anlık grafiklerle izleyebilir.

---

## E. Hedefli Ekran Görüntüsü Talebi

Kılavuz ve yardım portalı görsel bütünlüğü için `docs/help/assets/img/` klasörüne eklenmek üzere aşağıdaki **2 kritik ekran görüntüsü** hedeflenmiştir:

1. **`17_1_hizmet_ici_egitim_uyum_matrisi.png`**:
   - Üstteki 5 adet KPI kartını (Genel Uyum Oranı %, Geçerli Eğitimler, 15 Gün Kalanlar, Süresi Dolanlar, Hiç Alınmamış), filtreleme bandını ve renkli durum rozetleriyle dolu `tblUyumMatrisi` Uyum ve Denetim Raporu tablosunu içeren ana yönetim görünümü.
2. **`17_2_hizmet_ici_egitim_soru_ve_sinav.png`**:
   - Soru Havuzu sekmesindeki görselli soru girişi formunu veya personelin online sınav çözdüğü `HizmetIciSinavDialog` dinamik sınav penceresini gösteren operasyonel görünüm.
