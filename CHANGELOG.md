# CHANGELOG

Bu projedeki tüm önemli değişiklikler bu dosyada belgelenmektedir.
Format, [Keep a Changelog](https://keepachangelog.com/tr/1.0.0/) standardına dayanır ve 4 basamaklı SemVer (`MAJOR.MINOR.PATCH.BUILD`) disiplinini uygular.

## [4.0.2.17] - 2026-09-30

### ⚡ Asenkron Subwindow Yönetimi (_open_subwindow_with_progress), UI Donma Koruması, Güçlendirilmiş Modern Progress Dialog & Evrensel İçe Aktarım UI/QSS Reformu

Bu sürüm; ana arayüzdeki 40'tan fazla alt pencerenin (`AppController`) ana iş parçacığını (Main UI Thread) kilitlemeden modern yükleme göstergesiyle açılmasını sağlayan **Asenkron Subwindow Yaşam Döngüsü Mimarisi**'ni (`_open_subwindow_with_progress`), `ModernProgressDialog` / `RadiationProgressWidget` için çoklu fallback mekanizmalı GIF animasyon yükleyicisini, Dozimetre ve Toplu İçe Aktarım ekranlarında arka plan ilerleme entegrasyonlarını, **5 Adımlı Evrensel Toplu İçe Aktarım Sihirbazı** için kapsamlı UI/QSS tema reformunu (`resources/dark_theme.qss`, `resources/styles.qss`, `import_page.ui`, `ImportController`), 6 domain içe aktarım stratejisi geliştirmesini ve veritabanı motor yöneticisi (`DatabaseEngineManager`) ile `main.pyw` başlangıç optimizasyonlarını içerir.

#### ✨ Eklendi (Added)

- **Asenkron Subwindow Açılış Mimarisi (`AppController._open_subwindow_with_progress`):**
  - Tüm modül ve alt pencereler (Personel, Cihaz, Dozimetre, İzin, Nöbet, Ortam Dozu, RKE, Raporlar, Kullanıcı/Rol Yönetimi vb.) için standart asenkron fabrika sarmalayıcısı devreye alındı.
  - Ağır form ve tablolar yüklenirken ana UI iş parçacığının kilitlenmesi, animasyonların donması ve işletim sisteminin pencereyi "Yanıt Vermiyor" durumuna düşürmesi engellendi.
  - Subwindow önbellek kontrolü (`_get_live_subwindow`) tek merkezde standartlaştırılarak mükerrer pencere açılışları engellendi; açık olan pencereler doğrudan öne getirildi.
- **Güçlendirilmiş İlerleme Animasyonu Desteği (`ModernProgressDialog` & `RadiationProgressWidget`):**
  - `_load_gif_animation` metodu çoklu fallback zinciriyle (`:/icons/progress.gif`, göreceli kaynak yolu ve `os.getcwd()` çalışma dizini) donatıldı; GIF eksikliği durumunda zarif metin gösterimi ("İşlem Yapılıyor...") sağlandı.
  - `run_with_progress` sarmalayıcısı `DozimetreImportController` ve `ImportController` akışlarına entegre edilerek adım adım kullanıcı bilgilendirmesi sağlandı.
- **Evrensel İçe Aktarım Sihirbazı UI & QSS Tasarım Sistemi (`ImportController`, `import_page.ui`):**
  - İçe aktarım sihirbazı arayüzü RDS (RADPYS Clinical Design System) tasarım belirteçlerine tam uyumlu hale getirildi.
  - `resources/dark_theme.qss` ve `resources/styles.qss` şablonlarına içe aktarım adımları, kartlar, sürükle-bırak dosya alanları ve tablo göstergeleri için özel tema sınıfları eklendi.
  - `tests/test_import_controller_ui.py` (312 satır) ve `tests/test_personel_import_strategy.py` (130 satır) ile UI ve backend stratejileri için kapsamlı otomatik test paketi yazıldı.
- **Domain İçe Aktarım Stratejileri Zenginleştirmesi:**
  - `cihaz`, `izin`, `nobet`, `personel`, `rke` ve `tanimlar` stratejileri için zorunlu/opsiyonel alan eşleştirmeleri ve hata denetimleri güçlendirildi.

#### 🔧 Değiştirildi & İyileştirildi (Changed & Refined)

- **`AppController` Mimari Sadeleştirmesi:**
  - 40'tan fazla tekrar eden `open_*_page` metodu refaktör edilerek 1.200 satırdan fazla kod fazlalığı giderildi; modüler, güvenli ve temiz bir yapı kuruldu.
- **Uygulama Başlangıç Akışı & Veritabanı Motoru:**
  - `main.pyw` dosyasındaki başlatma adımları sadeleştirildi.
  - `app/db/engine_manager.py` bağlantı ve motor havuzu yaşam döngüsü optimize edildi.
- **Mimari Sembol İndeksi Güncellemesi:**
  - `docs/architecture/code_symbols_index.md` ve ilgili modül sembolleri (`01_sistem_ve_admin.md`, `02_cihaz_modulu.md`, `03_rke_modulu.md`, `04_personel_saglik_nobet.md`) güncel metot ve sınıflarla senkronize edildi.

## [4.0.2.16] - 2026-09-28

### 🚀 5 Adımlı Evrensel Toplu İçe Aktarım Motoru (11 Strateji & 2 Sayfalı Şablon), Dozimetre Manuel Personel Eşleştirme, Kalıcı Eşleşme Hafızası ve Atıl İçe Aktarımların Tasfiyesi

Bu sürüm; kurum genelindeki tüm toplu veri aktarımlarını tek bir standartta toplayan **5 Adımlı Evrensel Toplu İçe Aktarım Motorunu** (`ImportController` & `app/services/import_engine/`), 11 domain stratejisini, TC kimlik ve kodlardaki baştaki sıfırları koruyan metin formatlı ve canlı referans kılavuzlu **2 Sayfalı Kurumsal Excel Şablon Mimarisi** (`TemplateBuilder`), Dozimetre İçe Aktarım ekranında eşleşmeyen satırlara çift tıklayarak veya `[Personel Seç]` butonuyla anında modal personel seçimi yapılmasını, `dozimetre_eslesme_hafizasi` tablosuyla sağlanan **Kalıcı Eşleşme Hafızasını**, kurumda hiç kaydı bulunmayan personellerin tek tıkla Excel olarak indirilmesini (`btnExportUnmatched`), periyodik dozimetre rozet rotasyonu uyarınca dozimetre numarasının tekil anahtar olamayacağını güvenceye alan domain kuralını, Cihaz ve RKE ekranlarının evrensel aktarıma bağlanmasını, 5 yıllık resmi tatil tohumu nedeniyle gereksizleşen tatil importu ile sistem omurgası olan rol ve yetki importlarının arayüzlerden güvenle tasfiyesini ve tüm bu yeniliklerin Web Yardım Portalı ile dokümantasyonuna sıfır kod sızıntısıyla yansıtılmasını içerir.

#### ✨ Eklendi (Added)

- **5 Adımlı Evrensel Toplu İçe Aktarım Motoru (`ImportController` & `app/services/import_engine/`):**
  - **Adım 1 (Veri Kaynağı):** Strateji seçimi, dosya yükleme ve dinamik 2 sayfalı kurumsal şablon indirme.
  - **Adım 2 (Akıllı Sütun Eşleştirme):** Excel sütun başlıklarını otomatik tanıma, zorunlu ve isteğe bağlı alanları görsel açılır kutularla eşleştirme.
  - **Adım 3 (Dinamik Değer Çözümleme):** Excel'deki departman, unvan, cihaz türü gibi metinleri veritabanındaki aktif lookup kayıtlarıyla otomatik eşleştirme; bilinmeyen terimler için arayüzden hedef tanım seçtirme.
  - **Adım 4 (Canlı Önizleme Dry-Run):** Veritabanına yazmadan önce tüm satırları simüle etme; hatalı veya eksik hücreleri renklendirerek hücre bazında hata tooltip'i sunma.
  - **Adım 5 (Asenkron Aktarım & Raporlama):** Ana UI thread'i kilitlemeyen arka plan iş parçacığıyla (`QThread`) aktarım; başarılı/hatalı sayaçları ve hatalı satırları Excel olarak indirme imkanı.
- **11 Aktif Domain İçe Aktarım Stratejisi (`app/services/import_engine/strategies/`):**
  - `personel`: Personel özlük ve kadro aktarımı.
  - `izin`: Personel geçmiş ve güncel izin kayıtları.
  - `izin_hakedis`: Yıllık ve şua izni hak edişleri.
  - `dozimetre`: Periyodik dozimetre ölçüm sonuçları.
  - `cihaz`: Tıbbi cihaz ve radyasyon kaynağı envanteri.
  - `cihaz_qc`: Kalite kontrol ve periyodik performans testleri.
  - `cihaz_ariza`: Cihaz arıza, bakım ve teknik servis müdahaleleri.
  - `rke_envanter`: Radyasyondan koruyucu ekipman (RKE) envanteri.
  - `rke_muayene`: DIN 6857-1 skopi/fiziksel muayene kayıtları.
  - `ortam_dozu`: Radyasyon alanları ortam dozu ve saçılma ölçümleri.
  - `egitim_atama`: Hizmet içi eğitim görevlendirmeleri.
- **2 Sayfalı Kurumsal Şablon Mimarisi (`TemplateBuilder`):**
  - **`Veri Listesi` Sayfası:** Tüm hücreler metin formatında (`@`) kilitlenerek TC Kimlik numaralarındaki baştaki sıfırların (örn: `0123...`) Excel tarafından yutulması engellendi.
  - **`Geçerli Değerler Kılavuzu` Sayfası:** Sistemdeki canlı Departman, Unvan, Çalışma Grubu vb. referans lookup değerleri otomatik çekilerek ikinci sayfaya rehber olarak yerleştirildi.
- **Dozimetre Manuel Personel Eşleştirme & Arama Diyaloğu (`PersonelSecimDialog`):**
  - Dozimetre içe aktarım önizleme tablosunda sarı eşleşmemiş satıra çift tıklandığında veya satır seçilip `[Personel Seç]` butonuna basıldığında açılan arama ve eşleme penceresi.
  - Canlı arama filtresiyle kurum personelleri arasından seçim yapıp doğrudan tablo satırına bağlama imkanı.
- **Kalıcı Dozimetre Eşleşme Hafızası (`dozimetre_eslesme_hafizasi`):**
  - Veritabanı tablosu ve migration `V20260928_1_add_dozimetre_eslesme_hafizasi.py` oluşturuldu.
  - `(laboratuvar, dis_ad_soyad, dis_tc_kimlik) -> personel_id` tekil indeksli hafıza kütüğü devreye alındı.
  - `PersonelSecimDialog` üzerindeki `[Kalıcı Hafızaya Kaydet]` onay kutusu işaretlendiğinde sistem bu eşleşmeyi hafızaya yazar; sonraki aylarda laboratuvar aynı hatalı yazımı gönderse dahi otomatik eşleşir.
- **Eşleşmeyen Dozimetre Kayıtlarını Excel Olarak İndirme (`btnExportUnmatched`):**
  - Dozimetre raporunda yer alan ancak kurumda kaydı hiç bulunmayan çalışanların satırları tek tıkla `eslesmeyen_dozimetre_personelleri.xlsx` dosyası olarak dışa aktarılabilir hale getirildi.
- **Cihaz ve RKE Sayfa Entegrasyonları:**
  - `cihaz_yonetimi_controller.py` ve `rke_yonetimi_controller.py` araç çubuklarındaki `[Excel İçe Aktar]` butonları doğrudan evrensel `ImportController` sihirbazına bağlandı.

#### 🔧 Değiştirildi & İyileştirildi (Changed & Refined)

- **Dozimetre Rozet Rotasyonu Kuralı (Domain Standartı):**
  - Dozimetre kaset ve seri numaralarının periyottan periyoda çalışanlar arasında döngüsel olarak değiştiği ve tekil belirteç sayılamayacağı kuralı uygulandı; eşleşme mantığı ad-soyad, sağlayıcı ve TC kimlik odaklı hale getirildi.
- **Atıl İçe Aktarımların Tasfiyesi (Mimari & Güvenlik Temizliği):**
  - 5 yıllık resmi tatil takvimi tohumlandığı için gereksiz hale gelen `tatil_gunu` içe aktarımı kaldırıldı.
  - Sistem omurgasını oluşturan `rol`, `rol_yetkisi` ve `yetki` importları güvenlik gerekçesiyle kaldırıldı.
  - `roles_controller.py`, `permissions_controller.py` ve `module_management_controller.py` sayfalarındaki `[İçe Aktar]` butonları arayüzlerden temizlendi.
- **Dokümantasyon & Web Yardım Portalı Senkronizasyonu (Zero-Support & Zero-Leakage):**
  - `docs/help/05_personel_yonetimi_ve_toplu_aktarim.html`: 5 adımlı sihirbaz ve 2 sayfalı şablon kuralları işlendi, geliştirici değişken sızıntısı (`btnScreenClose`) temizlendi, SSS Soru 6 eklendi.
  - `docs/help/12_dozimetre_takibi_ve_rdf43_arastirma.html`: 5N1K tablosu, çift tıkla eşleştirme, kalıcı hafıza ve rozet rotasyonu Mit Avcısı (Mit 4) olarak belgelendi.
  - `docs/help/18_tibbi_cihaz_ve_ndk_lisans_envanteri.html` & `docs/help/20_rke_koruyucu_ekipman_ve_din6857.html`: Evrensel aktarım butonları 5N1K tablolarına işlendi.
  - `docs/help/06_izin_yonetimi_ve_hakedis.html`: `POST /api/izin/hbys-kaydet` geliştirici URL sızıntısı temizlendi, evrensel aktarım satırı eklendi.
  - `docs/kilavuz_guncel.md` & `docs/kilavuz_denetim_izi.md`: Tüm yeni akışlar ve kod izlenebilirlik matrisi 2026-09-28 tarihiyle arşivlendi.

---

## [4.0.2.15] - 2026-09-28

### 🏷️ Fiili Hizmet Çalışma Koşulu (A/B) Rozetleri, Sistem Tanımları & Kullanıcı Tabloları Dinamik Sütun Genişliği ve UI Rozet Standardizasyonu

Bu sürüm; Fiili Hizmet modülünde Çalışma Koşulu A ve B ayrımını mevzuat açıklamalı ve renkli kurumsal rozetlerle (`RADPYSStatusDelegate`) donatan görsel geliştirmeyi, Fiili Hizmet Dağılım tablosundaki radyasyon ve onay rozetlerini, Kullanıcı ve Rol Yönetimi tablolarındaki seviye ve durum rozetlerini, tüm Sistem Tanımları (Lookup) tablolarındaki kurumsal rozet entegrasyonunu, kullanıcıların tablo içeriklerini kesilmeden (`...`) rahatça okuyabilmesini sağlayan interaktif sütun genişliği (`QHeaderView.ResizeMode.Interactive`) ve yatay kaydırma çubuğu altyapısını, form düzenleme panellerinin (`EditorGroup`) 400px ile sınırlandırılmasını, Sistem Yönetimi gezinim ağacının açılışta kapalı (`collapseAll()`) ve beyaz yüksek kontrastlı ikonlarla başlatılmasını ve bu değişikliklerin Modül 02 ve Modül 03 yardım/kılavuz dokümantasyonuna tam senkronizasyonunu içerir.

#### ✨ Eklendi (Added)

- **Fiili Hizmet Çalışma Koşulu A & B Kurumsal Rozetleri (`fiili_hizmet_hesaplama_tab_controller.py`):**
  - Fiili Hizmet Hesaplama tablosunda (`hesaplamaTable`) "Çalışma Koşulu" sütununa `RADPYSStatusDelegate` entegre edildi.
  - **Çalışma Koşulu A:** Yıllık 6 mSv üzeri etkin doz olasılığı bulunan primer radyasyon alanları için kırmızı/tehlike (`DANGER`) nükleer rozeti (`radioactive.svg`) ve yasal FHZ/Şua hakkını açıklayan zengin tooltip eklendi.
  - **Çalışma Koşulu B:** Yıllık 1-6 mSv arası doz olasılığı bulunan izlenen alanlar için sarı/uyarı (`WARNING`) kalkan rozeti (`shield.svg`) ve FHZ/Şua kısıtını belirten tooltip eklendi.
- **Fiili Hizmet Dağılım Tablosu Rozetleri (`fiili_hizmet_dagilim_tab_controller.py`):**
  - "Radyasyonlu Alan" sütununa Evet/Hayır için semantik rozetler (`radioactive.svg` / `shield-check.svg`).
  - "Onay Durumu" sütununa Taslak (Mavi/INFO), Onaylı (Yeşil/SUCCESS) ve Onay Bekliyor (Sarı/WARNING) rozetleri bağlandı.
- **Kullanıcı ve Rol Tabloları Rozet Standardizasyonu (`users_controller.py`, `roles_controller.py`):**
  - `usersTable`: Rol sütununa hiyerarşik yetki rozetleri (Admin: Kırmızı/DANGER, Yönetici: Sarı/WARNING, Birim Sorumlusu: Mavi/INFO, Standart Kullanıcı: Nötr/DEFAULT), Aktif sütununa yeşil/gri `circle-check` ve `circle-minus` durum rozetleri bağlandı.
  - `rollersTable`: Aktiflik sütununa `RADPYSStatusDelegate` ile kurumsal durum rozeti eklendi.
- **Tüm Tanımlama Tablolarında Kurumsal Rozet Entegrasyonu (`lookup_controller.py`):**
  - 9 Tanımlama tablosunda (`departmentsTable`, `titlesTable`, `leaveTypesTable`, `holidayTable`, `educationTypesTable`, `examTypesTable`, `trainingCategoriesTable`, `cihazTanimTable`, `rkeTanimTable`) Aktif/Pasif durumları `RADPYSStatusDelegate` ile görselleştirildi.
  - Departman tablosu: Radyasyonlu Alan (`radioactive.svg`), Nöbet (`clock.svg`), Durum rozetleri.
  - Ünvan tablosu: Radyasyon Görevlisi (`radioactive.svg`), Durum rozetleri.
  - İzin Türleri tablosu: Hafta Sonu / Resmi Tatil Dahil/Hariç (`calendar-check.svg`), Haktan Düşüm (`alert-triangle.svg`), Sınırsız (`circle-check.svg`) rozetleri.
  - Resmi Tatiller tablosu: Resmi Tatil / Dini Tatil / İdari İzin (`calendar.svg`), Durum rozetleri.
  - Sağlık Muayene Türleri tablosu: Zorunlu Muayene (`alert-triangle.svg`), Durum rozetleri.

#### 🔧 Değiştirildi & İyileştirildi (Changed & Refined)

- **Tanımlama Tabloları Sütun Genişlikleri ve Okunabilirlik Reformu (`lookup_controller.py`):**
  - Tablo sütunları katı `Stretch` modundan `QHeaderView.ResizeMode.Interactive` moduna geçirildi; kullanıcının başlık çizgilerini fareyle tutarak serbestçe genişletebilmesi sağlandı.
  - Tüm tablolara operasyonel içerik uzunluklarına göre cömert varsayılan piksel genişlikleri (Departman Adı: 220px, Kod: 130px, Sorumlu: 160px; Ünvan: 240px; Tatil Adı: 220px vb.) atandı.
  - Tabloların tamamına `setHorizontalScrollBarPolicy(Qt.ScrollBarPolicy.ScrollBarAsNeeded)` ve asgari 60px sütun boyutu (`setMinimumSectionSize(60)`) tanımlanarak metinlerin `...` şeklinde kesilmesi tamamen önlendi.
  - Sağ form düzenleme panelleri (`departmentEditorGroup`, `titleEditorGroup`, vb.) `setMaximumWidth(400)` ile sınırlandırılarak sol tablo alanının ferahlığı güvenceye alındı.
- **Sistem Yönetimi Gezinim Ağacı ve Splitter Optimizasyonu (`system_management_controller.py`):**
  - Sol gezinim menüsü açılışta `self.navTree.collapseAll()` ile kapalı/kollaps edilmiş halde başlatıldı; sade ve ferah bir açılış görünümü sağlandı.
  - Gezinim ağacındaki tüm ikonlar `#FFFFFF` rengiyle renklendirildi (`tint_icon`), koyu temada yüksek kontrast ve üstün netlik elde edildi.
  - Splitter boyutları `[260, 1000]` olarak ayarlandı ve `stretchFactor(1, 1)` ile içerik alanının ekranı doldurması sağlandı.
- **Dokümantasyon Senkronizasyonu (Zero-Support Directive):**
  - `docs/kilavuz_denetim_izi.md`: Modül 02 ve Modül 03 teknik izlenebilirlik matrisi `users_controller.py`, `roles_controller.py`, `lookup_controller.py` ve `system_management_controller.py` satır referanslarıyla güncellendi.
  - `docs/kilavuz_guncel.md`: Bölüm 02 ve Bölüm 03 5N1K tablolarına Görsel Rozetler ve Serbest Sütun Boyutlandırma maddeleri eklendi.
  - `docs/help/02_kullanici_ve_rol_yonetimi.html` & `docs/help/03_sistem_ayarlari_ve_tanimlamalar.html`: Web yardım portallarındaki 5N1K tabloları ve SSS akordeonları yeni kullanıcı deneyimiyle güncellendi.

---

## [4.0.2.14] - 2026-09-27

### ☢️ Dozimetre Aksiyonlar Sekmesi 2 Panelli Mimari Reformu, Geçmiş Ölçümlerde Birim Rotasyon Takibi, $O(1)$ İstatistiksel Önbellekleme & Tanımlamalar/Kullanıcı Tabloları Rozet Standardizasyonu

Bu sürüm; Dozimetre Takibi modülündeki sıkışık 3 tablolu mimariyi ortadan kaldırarak yasal eşik aşımları ve $\ge 2$ kat istatistiksel sapmaları tek potada toplayan 2 panelli operasyonel kokpit reformunu (`erkenUyariTable_2` 6 sütun, `aksiyonTable_2` 5 sütun), personelin geçmiş birim rotasyonlarını geriye dönük izlemeyi sağlayan `gecmisTable` `Birim` sütunu ve 560px dengeli panel mimarisini, birim ortalamalarını tek geçişte önbellekleyen ($O(1)$) erken uyarı analiz motorunu, kullanıcı yönetimi ve tanımlamalar ekranlarındaki kurumsal rozet (`RADPYSStatusDelegate`) ve dinamik sütun genişliği (`Interactive`) iyileştirmelerini ve tüm bu değişikliklerin web yardım/denetim izi dokümantasyonuna (`help/12_*.html`, `kilavuz_guncel.md`, `kilavuz_denetim_izi.md`) sıfır kod sızıntısıyla yansıtılmasını içerir.

#### ✨ Eklendi (Added)

- **Dozimetre Aksiyonlar Sekmesi 2 Panelli Mimari Tasarımı (`dozimetre_aksiyonlar_tab.py`, `dozimetre_takip_page.ui`):**
  - **Sol Panel (İncelenecek Doz Riskleri ve Anomaliler):** Yasal eşik aşımları ($\ge 2.0\text{ mSv}$, kümülatif $\ge 20.0\text{ mSv}$) ile personelin geçmiş kişisel ortalamasından 2 kat ve üzeri sapan istatistiksel anomaliler tek tabloda (`erkenUyariTable_2`) birleştirildi.
  - Sütun düzeni 6 sütuna sadeleştirildi: `[Ad Soyad | Birim | Dönem | Hp(10) | Risk Seviyesi | Gerekçe]`.
  - Üst aksiyon araç çubuğu: `[Doz Araştırma Formu Aç]`, `[Takip Ölçümü Planla]`, `[Birim Notu Ekle]`, `[Personel Profili]`.
  - **Sağ Panel (Başlatılan İncelemeler ve DÖF Dosyaları):** Açılmış RD.F43 soruşturmaları ve DÖF süreçleri 5 sütunlu (`[Dönem | Ad Soyad | Tip | Birim | Durum]`) ferah bir yapıyla (`aksiyonTable_2`) donatıldı.
  - Açık/Kapalı durum filtreleme açılır kutusu ve `[Formu Görüntüle]`, `[Aksiyonu Kapat]` butonları entegre edildi.
- **Geçmiş Ölçümler Tablosunda Birim Rotasyonu Takibi (`gecmisTable`):**
  - Ölçümler sekmesinde seçili personelin geçmiş ölçüm tablosuna **`Birim`** sütunu eklendi (`[Dönem | Birim | Hp(10) | Hp(0,07) | Durum]`).
  - Personelin hangi dönemde hangi radyoloji biriminde (Anjiyografi, BT, Skopi vb.) görev yaptığı geriye dönük izlenebilir kılındı; doz sıçramalarında birim rotasyonu etkisi anında doğrulanabilir hale getirildi.
  - Sağ panel genişlik oranı `stretch="1,0"` dar yapısından `stretch="11,9"` dengeli oranına çekildi; asgari 560px genişlik ve esnek (`Stretch`) birim sütunu hizalaması uygulandı.
- **Tanımlamalar & Kullanıcı Yönetimi Kurumsal Rozet Delegeleri (`RADPYSStatusDelegate`):**
  - `usersTable`: Rol sütununa kurumsal seviye rozetleri (Admin: Kırmızı/DANGER, Yönetici: Sarı/WARNING, Birim Sorumlusu: Mavi/INFO, Kullanıcı: DEFAULT), Aktif sütununa durum rozeti atandı.
  - `rollersTable`: Aktif sütununa yeşil/gri görsel durum rozeti atandı.
  - Tanımlama tabloları (`lookup_*.ui`): 9 tanımlama tablosunda (departman, ünvan, izin, tatil vb.) durum rozetleri bağlandı; rigid stretch yerine serbest `Interactive` genişlikler ve yatay kaydırma çubuğu ile metin kesilmesi (`...`) önlendi. Sağ editör panelleri `setMaximumWidth(400)` ile sınırlandırıldı.

#### 🔧 Değiştirildi & İyileştirildi (Changed & Refined)

- **Dozimetre Arayüzü ve Veri Temizliği (Sadeleştirme):**
  - Aksiyonlar sekmesindeki kafa karıştırıcı ve dar ortadaki 3. anomali tablosu (`groupBox_2` ve `anomaliTable_2`) ile uzun etiketler (`lblAnomaliInfo_2`, `lblAksiyonInfo_2`) tamamen kaldırıldı.
  - Kullanıcı için operasyonel anlam taşımayan teknik veritabanı `ID` sütunu ve mükerrer `Oluşturma` tarihi ekrandan kaldırıldı (teknik ID arka planda `Qt.UserRole` içinde tutuldu).
  - Kullanıcı talebiyle gereksiz `Önerilen Aksiyon` sütunu kaldırıldı.
- **$O(1)$ İstatistiksel Önbellekleme & Arayüz Donma Koruması:**
  - Birim ortalamaları ve personel geçmiş sıralaması tek geçişte önbelleklenerek erken uyarı analiz süresi optimize edildi; normal satırlar ilk adımda elendi (early pruning).
  - Tablo doldurma süreçlerinde `setUpdatesEnabled(False)` ve `blockSignals(True)` ile olay döngüsü kilitlenmeleri engellendi.
- **Entegre Gezinim Ağacı & Splitter İyileştirmesi (`system_management_page.ui`):**
  - `navTree` kategorileri açılışta `collapseAll()` ile derli toplu kapalı başlatıldı; ikonlar `#FFFFFF` boyandı; splitter `[260, 1000]` boyutlandırıldı ve içerik alanı `stretchFactor(1, 1)` ile tam genişletildi.
- **Dokümantasyon Senkronizasyonu (Zero-Support & No-Leakage):**
  - `docs/help/12_dozimetre_takibi_ve_rdf43_arastirma.html`, `docs/kesif/12_dozimetre_takibi_ve_rdf43_arastirma_kesif.md`, `docs/kilavuz_guncel.md` ve `docs/kilavuz_denetim_izi.md` dosyaları 2 panelli mimari ve geçmiş birim takibi kurallarıyla tam senkronize edildi.

---

## [4.0.2.13] - 2026-09-23

### ⚖️ Yasal Nöbet Muafiyetleri (Engelli, Engelli Yakını, Heyet Raporu, Doz Aşımı), Dozimetre DÖF Entegrasyonu, Web Portal Talep/Onay Akışı ve 'Yasal & Kurumsal Kısıtlar' Sekme Reformu

Bu sürüm; 657 Sayılı DMK Madde 101 & Ek Madde 39, Yataklı Tedavi Kurumları İşletme Yönetmeliği ve NDK Radyasyon Güvenliği Yönetmeliği uyarınca 4 yeni kanuni nöbet muafiyetini (`engelli`, `engelli_yakini`, `saglik_raporu`, `doz_asimi`) sisteme kazandıran veritabanı migrasyonunu (`V20260923_6`), otomatik çizelgeleme (`nobet_scheduler.py`) ve nöbet devir motoru blokajlarını, dozimetre modülünde 20 mSv veya DÖF durumunda otomatik devreye giren radyasyon kısıtını, Web Portal üzerinden evrak yüklemeli personel talep ve evrensel onay akışını, periyodik sağlık muayenelerinin heyet raporu yerine geçmediği kural ayrıştırmasını, 5N 1K kısıt analizini ve Nöbet Ayarları ekranındaki sekmenin Qt mnemonics kaçışıyla pürüzsüz **`Yasal & Kurumsal Kısıtlar`** olarak yeniden yapılandırılmasını içerir.

#### ✨ Eklendi (Added)

- **4 Yeni Kanuni Çalışma Kısıtı ve Nöbet Muafiyeti (`personel_calisma_kisitlari`):**
  - **`engelli` (Engelli Personel Nöbet Muafiyeti):** 657 Sayılı DMK Madde 101 uyarınca engelli personele gece nöbeti ve 24 saatlik nöbet yasağı; sadece kendi isteğiyle gündüz mesaisi yazılabilir.
  - **`engelli_yakini` (Engelli Yakını Bulunan Personel Muafiyeti):** 657 Sayılı DMK Ek Madde 39 uyarınca bakmakla yükümlü olduğu engelli yakını bulunan memura günün her saatinde nöbet muafiyeti hakkı.
  - **`saglik_raporu` (Heyet Sağlık Raporu ile Belgelenen Durum):** 657 Sayılı DMK Madde 99 & 101 ile Yataklı Tedavi Kurumları İşletme Yönetmeliği uyarınca resmi sağlık kurulu (heyet) raporuyla tevsik edilen nöbet tutamaz muafiyeti.
  - **`doz_asimi` (Yıllık Efektif Doz Aşımı / Radyasyon Kısıtı):** NDK Radyasyon Güvenliği Yönetmeliği Madde 10 uyarınca yıllık 20 mSv efektif doz aşımında personelin radyasyonlu alan ve nöbet görevlerinden derhal uzaklaştırılması.
- **Veritabanı Şeması ve Migrasyonu (`schema_version = 4.9.2.6`):**
  - `app/db/schema.sql` içerisindeki `personel_calisma_kisitlari` tablosunun `kisit_tipi` check kısıtına yeni 4 muafiyet eklendi.
  - `app/db/migrations/V20260923_6_add_muafiyet_types_to_personel_calisma_kisitlari.py` migrasyon scripti yazılarak veritabanına uygulandı.
- **Dozimetre DÖF & Doz Aşımı Otomatik Kısıt Entegrasyonu (`dozimetre_service.py`):**
  - Personelin 2 aylık veya kümülatif dozu 20 mSv'yi aştığında veya bir ölçüm için DÖF (Düzeltici Önleyici Faaliyet) başlatıldığında, sistemin otomatik olarak `doz_asimi` kısıtı tanımlaması sağlandı.
- **Web Portal Personel Talep ve Evrensel Onay Entegrasyonu (`web_portal/`):**
  - `PersonnelRequestForm.tsx` ve `personel.routes.ts`: Personelin engellilik belgesi, engelli yakını belgesi veya heyet sağlık raporunu PDF/görsel olarak yükleyip onay kuyruğuna iletebilmesi sağlandı.
  - `BirimNobetCizelgesiView.tsx` ve `nobet.routes.ts`: Çizelge görünümünde muafiyeti bulunan personellerin rozet ve yasal gerekçe tooltip'leri ile gösterimi sağlandı.
  - Web portal `npm run build` ile sıfır hatayla derlendi.
- **Kapsamlı Otomatik Test Paketi (`tests/test_nobet_muafiyetleri.py`):**
  - 4 yeni kısıt tipinin çizelgeleme motorundaki katı blokajı, nöbet devir engeli ve çakışma durumlarını test eden 7 adet entegrasyon testi eklendi ve tümü geçti.

#### 🔧 Değiştirildi & İyileştirildi (Changed & Refined)

- **Vardiya Kısıtları Sekme ve Hiyerarşi Reformu ('Yasal & Kurumsal Kısıtlar'):**
  - Nöbet Ayarları ekranındaki *"Vardiya Kısıtları (Birim & Sınıf Bazlı)"* sekmesi, kurumsal ve yasal çalışma standartlarını (40s normal mesai, 35s radyasyon mesaisi, emzirme ilk/ikinci 6 ay, sendika memur/işçi, 130s fazla mesai tavanı vb.) barındırdığı için **`Yasal & Kurumsal Kısıtlar`** olarak yeniden adlandırıldı.
  - Qt'nin `&` karakterini klavye kısayolu (alt çizgi) olarak göstermesini önlemek için `Yasal && Kurumsal Kısıtlar` çift ampersand kaçış formatı uygulandı; arayüzde alt çizgisiz, pürüzsüz `&` görünümü sağlandı.
  - `nobet_gelismis.ui`, `nobet_temel.ui`, `nobet_birim_kural.ui` sayfalarındaki hiyerarşi bilgi notları güncellendi; RDS kuralı uyarınca eski `ℹ️` emojisi kaldırıldı.
  - `docs/diagrams/nobet_kisit_hiyerarsisi.html` akış diyagramındaki 3. Öncelik katmanı yeni adıyla senkronize edildi.
- **Periyodik Sağlık Muayenesi Ayrıştırması (`saglik_muayene_service.py`):**
  - Rutin/periyodik sağlık muayenesinde "Uygun Değil" işaretlendiğinde otomatik nöbet kısıtı oluşturma mantığı kaldırıldı. Rutin taramaların heyet raporu olmadığı, heyet raporlarının ise Web Portal veya yönetici tarafından resmi rapor numarasıyla işleneceği netleştirildi.
- **Mevzuat Dayanaklarının Arayüze Entegrasyonu:**
  - `nobet_ayarlar_personel_kisitlar_tab.py` üzerinde her kısıt tipi seçildiğinde ilgili kanun ve yönetmelik dayanağı açıklama ve gerekçe alanına otomatik doldurulacak şekilde geliştirildi.

---

## [4.0.2.12] - 2026-09-22

### ⚖️ Evrensel Nöbet Dengeleme & Asimetrik Çapraz Takas Motoru, Yaş/Kıdem Muafiyetlerinde Esnek Öncelik (Soft Constraint) Mimarisi, Nöbet Çizelgesi Geniş Ekran Modu (Sidebar Toggle) & Klinik Özet Tablosu Reformu

Bu sürüm; hem tek tip vardiyalı (12h/12h Acil vb.) hem de heterojen/farklı süreli vardiyalı (08:00-15:00 7h / 15:00-08:00 17h Bilgisayarlı Tomografi vb.) birimlerde toplam fiili çalışma saati ve fazla mesai adaletini kuran 3 Kademeli Evrensel Dengeleme Motorunu (Doğrudan Devir, 2-Way Asymmetric Shift Swap, 3-Way Relay Transfer), 50 yaş ve 25 yıl kıdem muafiyeti olan personellerin kilitlenmesini önleyen esnek öncelik (soft constraint) optimizasyonunu, Nöbet Planlama ana ekranında tek tıkla sol menüyü daraltıp genişleten Geniş Ekran Modunu (`btnToggleSidebar`) ve klinik özet tablosu sütun başlıklarının sadeleştirilmesini içerir.

#### ✨ Eklendi (Added)

- **Evrensel 3 Kademeli Nöbet Dengeleme Motoru (`Phase 3: Balance Overtime Hours`):**
  - **1. Kademe (Doğrudan Devir - Direct Transfer):** Saat fazlası olan personelin nöbetinin doğrudan saat eksiği olan personele devredilmesi.
  - **2. Kademe (Asimetrik Çapraz Takas - 2-Way Asymmetric Shift Swap: $s_A \leftrightarrow s_B$):** Farklı süreli (asimetrik) vardiya yapısına sahip birimlerde (örn: 17 saat Gece $\leftrightarrow$ 7 saat Gündüz), mesaisi yüksek personelin uzun nöbeti ile mesaisi az personelin kısa nöbeti çapraz takas edilerek aradaki net fark ($\Delta = 10\text{ saat}$) kadar saat transferi sağlandı. Böylece birim içi saat farkı 25 saatten 8 saate düşürüldü.
  - **3. Kademe (Akıllı Zincirleme Takas - Relay Transfer):** Doğrudan devir kısıtlara takıldığında, aracı personel üzerinden 3'lü zincirleme nöbet aktarımı korundu.
- **Merkezi Kısıt Denetleyicisi (`check_personel_can_take_shift`):**
  - Hem tek yönlü nöbet aktarımı hem de çapraz takas için; izinler, gebe/emziren kısıtları, dinlenme süreleri, çakışma, ardışık çalışma günleri, fazla mesai tavanı ve hafta sonu/bayram kotaları tek bir merkezden atomik olarak denetlendi.
- **Nöbet Çizelgesi Geniş Ekran Modu (Sidebar Toggle - `btnToggleSidebar`):**
  - Nöbet Planlama ana ekranının en üst çubuğuna RDS `secondary` tasarımı ve Tabler SVG ikonları (`layout-sidebar-left-collapse.svg` / `layout-sidebar-left-expand.svg`) ile "Menüyü Gizle / Menüyü Göster" butonu eklendi.
  - Tıklandığında sol menü (`groupBox`) gizlenerek nöbet matrisi tablosu ve istatistik panelinin ekranın %100 genişliğinde ferahça görüntülenmesi sağlandı.

#### 🔧 Değiştirildi & İyileştirildi (Changed & Refined)

- **Yaş ve Kıdem Muafiyeti Esnek Öncelik (Soft Constraint) Modeli:**
  - 50 yaş ve 25 yıl kıdem muafiyeti olan personeller (Taha Öztürk, Kürşat Başkaya, Pınar Toprak) sert yasak yerine esnek öncelik mekanizmasına dönüştürüldü.
  - Gündüz nöbeti önceliği muhafaza edilirken, personellerin ay sonunda borçlu/eksi saatte kalmaması ve birim saat dengesini sağlamak için kontrollü takas toleransı (`allow_exempt_slack=True`) tanımlandı.
- **Klinik Özet Tablosu Başlık Reformu:**
  - `nobet_plan_incele_controller.py` ve `nobet_plan_detay_controller.py` sağ özet tablolarındaki `Hedef Süre (Saat)`, `Fiili Çalışma (Saat)`, `Fazla Mesai (Saat)` başlıkları sadeleştirilerek **`Hedef Süre`**, **`Fiili Çalışma`**, **`Fazla Mesai`** haline getirildi.

---

## [4.0.2.11] - 2026-09-21

### ⚖️ Yasal Arife & Bayram Saat Ayrıştırma Motoru, 60s/130s Fazla Mesai Dağıtımı & 5 Sütunlu Bildirim Cetveli Export Reformu

Bu sürüm; 2429 Sayılı Kanun uyarınca 28 Ekim, 31 Aralık ve dini bayram arifelerindeki saat 13:00 yarım gün eşiğini 24 saatlik nöbetlerde dakika/saat hassasiyetinde ayrıştıran yasal nöbet hesaplama motorunu (`split_shift_holiday_hours`), 657 Sayılı DMK Ek 33. Madde uyumlu aylık 130 saat yasal tavan ve 60 saat kurumsal kota denetimli Fazla Mesai (FM) ödeme ve devir dağıtım sihirbazını (`FmDagitimDialog`), mutemetlik ve bordro süreçleri için 5 sütunlu standartlaştırılmış Nöbet Fazla Mesai Bildirim Cetvelini, merkezi Rapor Şablonları (`TemplatesController`) marka ve logo entegrasyonunu, Yazıcı / Excel (.xlsx) / PDF (.pdf) üçlü dışa aktarım desteğini ve fiili görev yeri / alt birim hiyerarşisini içerir.

#### ✨ Eklendi (Added)

- **2429 Sayılı Kanun Uyumlu Arife ve Resmi Tatil Saat Ayrıştırma Motoru (`split_shift_holiday_hours`):**
  - Dini bayram arifeleri, 28 Ekim ve 31 Aralık tarihlerinde saat 13:00'ten itibaren başlayan yasal tatil mesaisi tam 24 saatlik (08:00 - 08:00) nöbet bloklarında saat bazında ayrıştırıldı.
  - Örnek Yılbaşı Senaryosu: 31 Aralık 08:00 - 01 Ocak 08:00 nöbetinde 19 saat tatil mesaisi (11 saat 31 Aralık + 8 saat 1 Ocak) ve 5 saat normal mesai; 01 Ocak 08:00 - 02 Ocak 08:00 nöbetinde 16 saat tatil mesaisi ve 8 saat normal mesai matematiksel ve mevzuata tam uyumlu olarak hesaplandı.
  - 19 Mayıs, 23 Nisan, 29 Ekim vb. 1 günlük tam resmi ve dini tatiller eksiksiz olarak hesaplama algoritmasına dahil edildi.
- **Yasal Fazla Mesai (FM) Ödeme ve Devir Dağıtım Diyaloğu (`FmDagitimDialog`):**
  - Personelin kümülatif fazla mesaisini kurum bütçesi ve mevzuata göre "Ödenen Süre" ve "Sonraki Aya Devreden Süre" olarak esnek biçimde dağıtabilme imkanı.
  - Aylık yasal tavan (maksimum 130 saat) ve kurumsal kota (60 saat) limitleri canlı spinbox ve hızlı butonlarla (`Kurumsal Kota (60s)`, `Tamamı (maks 130s)`) arayüze entegre edildi.
  - Tablodan seçilen birden fazla personele tek tıkla toplu kota uygulama ve toplu tam ödeme aksiyonları eklendi.
- **5 Sütunlu Sade Nöbet Fazla Mesai Bildirim Cetveli & Rapor Şablonları Entegrasyonu:**
  - Mutemetlik ve bordro dökümleri için çıktı yalnızca 5 temel sütuna sadeleştirildi:
    1. `T.C. Kimlik No` (`Consolas` tabular font, ortalanmış)
    2. `Personel Adı Soyadı` (Kalın)
    3. `Görev Yeri` (Personelin fiili görev yeri / alt modalite birimi)
    4. `Normal Fazla Mesai (Saat)` (Sağa yaslı saat formatı)
    5. `Bayram Fazla Mesai (Saat)` (Arife ve bayram saatleri toplamı)
    - Tablo sonunda otomatik `GENEL TOPLAM SAAT` hesaplaması.
  - Merkezi `ExportService` ve `Rapor Şablonları` modülü ile tam entegrasyon sağlandı; `app/utils/template_updater.py` içerisinde `TEMPLATE_SPECS["nobet_fazla_mesai"]` şablonu oluşturularak `data/templates/nobet_fazla_mesai.xlsx` ve `.docx` dosyaları otomatik üretildi.
  - Kullanıcıların `Yönetim -> Rapor Şablonları` (`TemplatesController`) ekranından kurum üst başlığı (`BASLIK_1`), alt başlığı (`BASLIK_2`), logoları (`LOGO_1`) ve şablon dosyasını serbestçe özelleştirebilmesi sağlandı.
- **Üçlü Dışa Aktarım Arayüzü (`btnPrintFm` Menüsü):**
  - `btnPrintFm` butonuna açılır menü tanımlanarak kullanıcıya 3 seçenek sunuldu:
    - 🖨️ **Yazıcıdan Yazdır...** (Birim Sorumlusu ve Başhekim imza bloklu, kurum logolu resmi A4 dikey baskı)
    - 📊 **Excel Olarak Dışa Aktar (.xlsx)...** (Kurumsal 5 sütunlu Excel tablosu)
    - 📄 **PDF Olarak Dışa Aktar (.pdf)...** (Sayfalanmış kurumsal PDF raporu)

#### 🔧 Değiştirildi & Düzeltildi (Changed & Fixed)

- **Görev Yeri / Alt Modalite Çözümleme Hiyerarşisi:**
  - Nöbet Fazla Mesai Bildirim Cetvelinde jenerik ana anabilim dalı ("Radyoloji Anabilim Dalı") çıkması sorunu giderildi; personelin tanımlı özel görev yeri (`p.gorev_yeri`), yoksa alt birim adı (`alt_d.departman_adi`, örn. *Acil Radyoloji (Röntgen/BT)*, *Manyetik Rezonans (MR)*, *Girişimsel Radyoloji (Anjiyo)* vb.), o da yoksa ana departman adı hiyerarşisi uygulandı.
- **PySide6 Yazdırma Uyumluluğu:**
  - `QTextDocument.print` çağrısının PySide6 Python binding'lerinde `print_` olarak tanımlı olmasından kaynaklanan `AttributeError` giderildi (`hasattr(doc, 'print_')` emniyet kontrolü).
- **PostgreSQL Bağlantı Havuzu ve Ortam Yapılandırması (`get_db`):**
  - `get_db(db_path: str | None = None)` varsayılan parametresi `None` yapılarak `.env` dosyasındaki `RADPYS_DB_NAME` ortam değişkeniyle tam uyumlu hale getirildi, mükerrer havuz oluşturulması önlendi.

## [4.0.2.10] - 2026-09-20

### 📱 Ortam Dozu Saha Krokisi Dokunmatik Motoru, LMS Sınav Lightbox Portal Reformu & Saha Giriş Formları Entegrasyonu

Bu sürüm; Radyoloji Ortam Dozu saha girişinde kroki ile ölçüm noktalarının yan yana (Side-by-Side) tam ekran (`max-w-none`) yerleşimini, `z-[9999]` topmost tooltip hiyerarşisini, tablet ve akıllı telefonlar için yerel dokunmatik motorunu (Touch Pan, Pinch-to-zoom, çift dokunma ve yüzen thumb kontrolleri), yerel LAN HTTP ağlarında mobil Chrome kamera erişimi için native fallback ve flag yapılandırma rehberini, Hizmet İçi Eğitim Portalı'nda React `createPortal` mimarisiyle doğrudan `document.body`'ye bağlanan kesintisiz soru görseli büyütme (Lightbox) popup'ını, in-place sınav deneyimini ve tüm saha veri giriş formlarının (RKE, Gebelik/Kısıt, İzin, Arıza vb.) konsolidasyonunu içerir.

#### ✨ Eklendi (Added)

- **Ortam Dozu Yan Yana (Side-by-Side) Full-Width Kroki & Nokta Listesi Mimarisi:**
  - Standart form genişliği sınırı (`max-w-6xl`) kaldırılarak `App.tsx` genelinde Birim Nöbet Çizelgesi gibi tam ekran viewport genişliği (`max-w-none`) sağlandı.
  - Sol alanda interaktif zırhlı oda krokisi (`lg:col-span-8 2xl:col-span-9`), sağ alanda ise aynı yükseklikte (`h-[855px]`) bağımsız kaydırmalı Ölçüm Noktaları listesi (`lg:col-span-4 2xl:col-span-3`) konumlandırıldı.
- **Topmost Tooltip Katmanlama Hiyerarşisi (`z-[9999]`):**
  - Kroki pinleri üzerine gelindiğinde açılan bilgi tooltip'leri `z-[9999]`, ebeveyn pinler `hover:z-[1000]` olarak katmanlandı; diğer pinlerin veya zemin kroki çizgilerinin altında kalma ve satır kesilmeleri önlendi.
- **Tablet & Mobil Dokunmatik Motoru (Touch Pan & Pinch-to-Zoom Engine):**
  - Masaüstü fare kontrollerine ek olarak yerel `{ passive: false }` dokunmatik dinleyiciler entegre edildi:
    - **Tek Parmakla Dolaşma (Touch Pan):** Sayfa kaydırmasını kilitleyip doğrudan kroki içinde akıcı serbest dolaşım.
    - **İki Parmakla Yakınlaştırma (Pinch-to-zoom):** `0.5x` ile `4.0x` arasında iki parmak kıstırma ile zum.
    - **Çift Dokunma (Double Tap):** `1.0x` ve `2.2x` seviyeleri arasında anında hızlı odaklanma.
    - **Yüzen Thumb Kontrol Butonları:** Saha teknisyenleri için haritanın sağ alt köşesine büyük dokunmatik `+`, `-` ve `Sıfırla` butonları yerleştirildi.
- **Yerel LAN HTTP Bağlamı İçin Kamera QR Tarayıcı Güvenlik Çözümü (`QrScannerModal`):**
  - `192.168.x.x` HTTP erişiminde Chrome'un `getUserMedia` engelini aşmak üzere `<input type="file" accept="image/*" capture="environment">` native kamera fallback'i ve tek tıkla kopyalanabilen Chrome Flag rehberi entegre edildi.
- **Hizmet İçi Eğitim & E-Öğrenme Portalı `createPortal` Lightbox Büyütme Mimarisi:**
  - Soru ve şık görselleri için büyütme modalı sayfa/sekme ağacından bağımsızlaştırılarak `createPortal(..., document.body)` ile doğrudan en üst katmana (`z-[999999]`) bağlandı.
  - Görsellerin kutu içinde büzülmesi engellendi; geniş, net ve ortalanmış modal görünümü, dışarıya tıklama, `X` butonu, klavye `ESC` ve "Yeni Sekmede Aç" kolaylığı sağlandı.
  - Sınav çalışma alanı içinde sayfa yenilemeden in-place sınav çözme ve anlık soru haritası navigasyonu getirildi.

#### 🔧 Değiştirildi & Arındırıldı (Changed & Cleaned)

- **Saha Formları Kapsamının Sadeleştirilmesi:**
  - Kullanıcı kararıyla bürokratik `pdfcn` izin/takas matbu dilekçesi ve `Karnak` KVKK maskeleme maddeleri plandan çıkartılarak sistem operasyonel saha hızına odaklandı.
  - `LeaveRequestForm`, `RkeView` ve `PersonnelRequestForm` formlarının tam fonksiyonel çalıştığı teyit edilerek tüm saha veri giriş formları (10/10) %100 tamamlandı statüsüne alındı.

## [4.0.2.9] - 2026-09-18

### ☢️ Web Portalı Şua İzni Hak Ediş Paneli Kanuni Reformu, Kazanım-Kullanım Döngüsü & Gerçek Fiili Çalışma Uyum Matrisi

Bu sürüm; Şua İzni Hak Ediş (`SuaDashboard`) panosundaki yapay 30 gün tavan varsayımının kaldırılmasını, 3157 Sayılı Kanun ve NDK iyonlaştırıcı radyasyon mevzuatına uygun olarak personelin radyasyonlu alanlardaki fiili çalışma süresine göre (50 saat fiili çalışma = 1 gün şua hakkı, azami 30 gün) hesaplanan `personel_sua_hakedis_aylik` tablosuyla dikey entegrasyonunu, Kazanım Yılı $\rightarrow$ Takip Eden Kullanım Yılı döngüsünü, 0 gün hakkı olanların tablodan elenmesini, 28 klinik modalite (BT, Röntgen, Anjiyo vb.) dağılımını ve anlık hızlı aramayı içerir.

#### ✨ Eklendi (Added)

- **Yasal Zaman Çizelgesi & Kazanım ➔ Kullanım Yılı Bilgi Bandı:**
  - Tepe bilgilendirme bandında 3157 Sayılı Kanun ve Sağlık Bakanlığı mevzuatı vurgulandı: *Seçili Yıl* radyasyonlu alandaki fiili çalışma ile kazanılan şua izninin, takip eden *Kullanım Yılında* kullandırılması gerektiği ve 31 Aralık tarihi itibarıyla sonraki yıla devredilemeyeceği veya paraya çevrilemeyeceği belirtildi.
  - **Kazanım Yılı Seçicisi:** Veritabanındaki hak ediş dönemlerine göre dinamik yıl seçimi (`{yil} Dönemi ➔ {yil + 1} Kullanım`).
- **Anlık Hızlı Arama & Çok Kriterli Filtreleme:**
  - Personel adı, unvan veya modalite yazıldıkça tüm tabloyu ve sayaçları anında filtreleyen hızlı arama kutusu.
  - **Alt Birim / Modalite Seçicisi:** 28 operasyonel klinik alt birim (BT, MR, Anjiyo, Acil Radyoloji, Linac vb.) açılır menüsü ve tek tıkla filtreleme.
  - **İzin Durumu Filtresi:** *Tüm Durumlar*, *Kalan Şua İzni Olanlar (Yanma Riski)*, *Şua İznini Kullananlar (Uyumlu)* ve *30 Gün Yasal Tavana Ulaşanlar*.
  - Tek tıkla filtreleri sıfırlayan dinamik *"Temizle"* aksiyonu.
- **Modalite (Alt Birim) Dağılım Kartı & İnteraktif Filtreleme:**
  - Radyasyonlu alanlarda çalışan personelin modalitelere göre toplam şua günü ve personel dağılımını gösteren interaktif kart listesi. Birime tıklandığında tablo otomatik olarak o modaliteye göre filtrelenir.
- **Ayrıştırılmış Aylık Gerçekleşme Rozetleri:**
  - Aylık Hak Ediş tablosundaki ham log metinleri yerine; `%... Hedef Uyum (Fiili / Hedef Saat)` ve `+X Gün Hak Ediş` temiz kurumsal rozetleri gösterildi.
- **Kurumsal Excel Dışa Aktarımı:**
  - `Personel`, `Unvan`, `HizmetSinifi`, `AnaBirim`, `ModaliteAltBirim`, `KazanimYili`, `KullanimYili`, `ToplamFiiliSaat`, `HakEdilenSuaGun`, `KullanilanSuaGun`, `KalanSuaGun`, `YasalTavanDurumu` ve `YanmaRiski` sütunlarını içeren resmi döküm.

#### 🔧 Değiştirildi & Düzeltildi (Changed & Fixed)

- **Yapay 30 Gün Tavan Varsayımının Kaldırılması (Kural 20 & Dürüst Boş Durum):**
  - Backend SQL sorgusundaki `LEAST(30, GREATEST(COALESCE(sh_agg.toplam_hak, 0), 30))` ifadesi kaldırılarak 207 personele toptan 30 gün (6.210 gün) yazan sahte veri üretimi sonlandırıldı.
  - Sadece `personel_sua_hakedis_aylik` tablosunda `HAVING SUM(hakedilen_gun) > 0` şartını sağlayan gerçek hak sahipleri listelenir; 0 gün olanlar ve radyasyonsuz alanda çalışanlar filtrelenir.
- **Gerçek Kullanım Yılı Eşleştirmesi:**
  - `personel_izinler` tablosundan kullanılan şua izni çekilirken personelin izin yılı, kazanım yılının bir sonraki takvim yılı (`sh_agg.yil + 1`) ile eşleştirildi.
- **Dikey Alt Birim ve Unvan Hiyerarşisi:**
  - Personelin ana departmanı ve modalite alt birimi hiyerarşik okla (**`↳ Bilgisayarlı Tomografi (BT)`**) gösterildi; unvan ve hizmet sınıfı (`SHS`) rozetleri eklendi.

## [4.0.2.8] - 2026-09-18

### 🌿 Web Portalı İzin Durumu Panosu Mükerrerlik Arındırması, Modalite Kadro Emniyeti & Canlı İzin Sekmeleri

Bu sürüm; İzin Durumu (`IzinDashboard`) panosunda Farazi İzin ve Şua Hak Ediş panolarıyla mükerrer olan bileşenlerin arındırılmasını, kaba departman yerine 28 klinik modalite (BT, MR, Anjiyo vb.) bazında gerçek kadro çakışma tespitini, kıdeme göre 20/30 gün yıllık izin hakkı hesaplamasını, anlık hızlı arama ve 3 sekmeli canlı izin hareketleri tablosunu içerir.

#### ✨ Eklendi (Added)

- **Anlık Hızlı Arama & Gelişmiş Filtre Araç Çubuğu:**
  - Personel adı, unvan veya modalite yazıldıkça tüm tabloyu ve sayaçları anında süzen arama çubuğu.
  - **Alt Birim (Modalite)** seçicisi (28 operasyonel klinik alt birim).
  - **Hizmet Sınıfı** seçicisi (Radyasyon Görevlisi, SHS vb.).
  - Tek tıkla sıfırlayan dinamik *"Filtreleri Temizle"* aksiyonu ve kurumsal Excel dışa aktarımı (`IzinKapsami`, `AltBirimModalite`, `Unvan`, `HizmetSinifi`).
- **4 Yeni Stratejik KPI Kartı & Canlı Yönlendirme:**
  - **Kalan Yıllık İzin Havuzu:** Yasal kıdeme göre (10+ yıl: 30 gün, <10 yıl: 20 gün) hesaplanan gerçek kalan bakiye.
  - **Bugün Aktif İzinde:** Fiilen izinde olan personel sayısı (tıklandığında doğrudan tablodaki *"Bugün İzinde"* sekmesini açar).
  - **Bekleyen İzin Talebi:** Yönetici onay kuyruğu ve çakışma alarmı (tıklandığında tablodaki *"Onay Bekleyenler"* sekmesine odaklanır).
  - **Cari Yıl Tüketilen İzin:** Onaylanan resmi yıllık izin toplamı.
- **KOKPİT 1: Önümüzdeki 30 Gün Modalite Kadro Emniyeti & Gerçek Çakışma Paneli:**
  - Kaba departman yerine alt birim (modalite) bazında çalışanların izinlerini denetler; Acil Radyoloji, BT vb. birimlerde eşzamanlı çakışan personelleri unvanlarıyla birlikte erken uyarı kartı olarak listeler.
- **KOKPİT 2: 3 Sekmeli İzin Hareketleri & Çakışma Yönetim Tablosu:**
  - `Onay Bekleyenler`, `Bugün İzinde` ve `Tüm İzinler` sekmeleri.
  - Personel unvan rozeti ve alt birim modalite hiyerarşisi (**`↳ Girişimsel Radyoloji (Anjiyo)`**).
- **KOKPİT 3: 28 Alt Birim (Modalite) İzin Tüketim Dağılımı:**
  - Tek bir kaba çubuk yerine; BT, MR, Anjiyo, Acil Röntgen vb. alt birimlerin cari yıl izin günleri ve personel sayılarını gösteren oransal doluluk çubukları.

#### 🔧 Değiştirildi & Kaldırıldı (Changed & Removed)

- **Mükerrer Şua Paneli Bloğunun Kaldırılması:**
  - Sayfa 7'nin (`SuaDashboard`) asli görevi olan devasa Şua takip listesi bloğu kaldırılarak sayfa ferahlatıldı.
- **Mükerrer 12 Aylık Histogramın Kaldırılması:**
  - Farazi İzin'deki gibi sayfa yüksekliğini artıran 12 aylık BarChart kutusu kaldırılarak sayfa akışı operasyonel verilere odaklandı.
- **Backend `/api/dashboard/izin` Optimizasyonu:**
  - Alt departman ve unvan hiyerarşisi eklendi; modalite bazlı çakışma algoritması devreye alındı.

## [4.0.2.7] - 2026-09-18

### 🎯 Web Portalı Farazi İzin Stokastik İzin Arındırması & "Planlı İzin Türü" (Yıllık + Şua) Filtresi

Bu sürüm; Farazi İzin Planı (`FaraziIzinDashboard`) projeksiyon algoritmasının istatistiki kesinliğini artırmak amacıyla mazeret, tek hekim raporu (1-10 gün), refakat ve babalık gibi anlık/stokastik izinlerin gürültü olarak elenmesini, yalnızca planlanabilir **Yıllık İzin (`YILLIK`)** ve **Sağlık (Şua) İzni (`SHUA`)** türlerine odaklanılmasını ve kullanıcıya esnek *"Planlı İzin Türü"* filtresi sunulmasını içerir.

#### ✨ Eklendi (Added)

- **"Planlı İzin Türü" Filtre Seçicisi:**
  - Filtre araç çubuğuna *"Planlı İzinler (Yıllık + Şua)"* (`ALL`), *"Yalnızca Yıllık İzin"* (`YILLIK`) ve *"Yalnızca Sağlık (Şua) İzni"* (`SHUA`) seçenekleriyle açılır menü eklendi.
  - "Filtreleri Temizle" aksiyonuna ve kurumsal Excel dışa aktarımına (`IzinKapsami`) dikey olarak bağlandı.
- **İstatistiksel Gürültü İzolasyonu & Açıklayıcı Beyan:**
  - Tepe bilgilendirme bandında arızi/stokastik izinlerin (mazeret, rapor vb.) projeksiyonu saptırmaması için algoritmik olarak elendiği ve hesaplamanın yalnızca planlı Yıllık ve Şua izinlerini kapsadığı açıklandı.
- **Dürüst Boş Durum (Honest Empty State - Kural 20):**
  - Arşivde henüz ayrı şua izni koduyla girilmemiş veriler için farazi/uydurma kayıt sentezlenmeyerek *"Yalnızca Sağlık (Şua) İzni"* filtresinde dürüstçe 0 eşleşme ve kurumsal boş durum kartı gösterilmesi güvence altına alındı.

#### 🔧 Değiştirildi (Changed)

- **Backend Projeksiyon Sorgusu (`/api/dashboard/izin-projeksiyon`):**
  - SQL sorgusundaki alt sorgu (`leaveTypeFilterClause`) ve aylık dağılım sorgusu `req.query.izinTuru` parametresine göre dinamik filtreleme yapacak şekilde güncellendi.

## [4.0.2.6] - 2026-09-18

### ⚡ Web Portalı Farazi İzin Paneli Yalınlaştırma, "Hizmet Sınıfı" Filtresi & İnteraktif Görünüm Yönlendirmesi

Bu sürüm; Farazi İzin Planı (`FaraziIzinDashboard`) panosundaki mükerrer bileşenlerin elenerek sayfanın daha kompakt ve yüksek performanslı hale getirilmesini, kurumsal "Hizmet Sınıfı" filtrelemesini ve KPI kartlarından görünüm modlarına doğrudan akıllı yönlendirmeyi içerir.

#### ✨ Eklendi (Added)

- **"Hizmet Sınıfı" Açılır Filtresi:**
  - Filtre araç çubuğuna *"Tüm Hizmet Sınıfları"*, *"Radyasyon Görevlisi"*, *"Akademik Personel"*, *"Asistan Doktor"*, *"Hemşirelik Hizmetleri"*, *"İdari Personel"*, *"Memur"*, *"Destek Hizmetleri"* seçenekleriyle hizmet sınıfı filtresi entegre edildi.
  - Dinamik sıfırlama ("Filtreleri Temizle") ve kurumsal Excel dışa aktarımına (`HizmetSinifi`) bağlandı.
- **Kritik Çakışma Riski KPI Kartı & Doğrudan Yönlendirme:**
  - 4. KPI kartı "Kritik Çakışma Riski" (çakışma yaşayan alt birim sayısı ve alarm rozeti) olarak yapılandırıldı; tıklandığında doğrudan *"Alt Birim Risk Matrisi"* modunu açması sağlandı.
- **En Yoğun Ay KPI Kartından Gantt Moduna Geçiş:**
  - 2. KPI kartı ("En Yoğun Ay") tıklandığında doğrudan *"12 Aylık Mini-Gantt"* zaman çizelgesini açacak şekilde interaktif hale getirildi.

#### 🔧 Değiştirildi & Sadeleştirildi (Changed & Removed)

- **Mükerrer Kokpitlerin Kaldırılması:**
  - Sayfa ortasında yer alan ve Alt Birim Risk Matrisi ile Mini-Gantt tarafından zaten daha kapsamlı sunulan tekil ay simülatörü ve 12 aylık BarChart histogramı kaldırılarak sayfa yüksekliği ~700px azaltıldı, gereksiz tıklama ve kaydırma kalabalığı temizlendi.
- **Kesintisiz Sayfa Akışı:**
  - Arayüz akışı doğrudan **Top Beyan Banner'ı → Filtre Çubuğu → 4 Stratejik KPI → Personel Farazi İzin & Hizmet Planlama Matrisi (3 Görünüm Modu)** şeklinde yalınlaştırıldı.

## [4.0.2.5] - 2026-09-18

### 🔮 Web Portalı Farazi İzin Projeksiyonu, Alt Birim (Modalite) Derinliği & Nöbet Takvimi Çıktı Standardı

Bu sürüm; Web Portalı Farazi İzin Planı (`FaraziIzinDashboard`) ve Nöbet & Tatil Takvimi (`TakvimDashboard`) panolarında klinik karar desteği, veri doğruluğu, arama ergonomisi ve çıktı kalitesini artıran kapsamlı geliştirmeler içerir. PostgreSQL üzerindeki 3.827 onaylı izin kaydı doğrulanmış, pandemi dönemi kısıtlamalarını eleyen 4 yıllık kalibrasyon getirilmiş, operasyonel alt birim (modalite) ve unvan hiyerarşisi entegre edilmiş, metni taşan KPI kartı interaktif "En Yoğun Ay" kartına dönüştürülmüş ve nöbet takviminde temiz A4 yazdırma modu tamamlanmıştır.

#### ✨ Eklendi (Added)

- **Farazi İzin Akıllı Arama & Canlı Filtreleme:**
  - Personel adı, unvan (*Teknisyen, Uzman, Doçent*) veya birim/modalite (*Anjiyo, BT, MR, Röntgen*) yazıldıkça tüm tabloyu ve sayaçları anında süzen arama çubuğu.
  - **Alt Birim (Modalite)** açılır filtre seçicisi.
  - **Hizmet Tipi / Görev** açılır filtre seçicisi.
  - Tek tıkla aktif filtreleri sıfırlayan **"Filtreleri Temizle"** butonu.
- **Analiz Kapsamı Esnekliği:**
  - Araç çubuğuna **Analiz Kapsamı** seçicisi eklendi: *Son 4 Yıl (2023–2026 - Önerilen)*, *Son 3 Yıl (2024–2026)*, *Tüm Arşiv (2019–2026)*.
- **"En Yoğun Ay (Zirve)" İnteraktif KPI Kartı:**
  - Metni taşan/kesilen eski kart yerine; yılın en yüksek izin talebini gösteren (*Temmuz - 30 Personel / %14 Kadro*) net ve kurumsal KPI kartı oluşturuldu.
  - Karta tıklandığında aşağıdaki **Klinik İzin Simülatörü** otomatik olarak ilgili aya geçer ve seçili ay rozeti belirir.
- **Farazi İzin 3 Kademeli Görünüm Modu (Akıllı Tablo / Risk Matrisi / Mini-Gantt):**
  - **Mod 1 (Akıllı Tablo):** Personel unvanı, alt birim modalite hiyerarşisi, tahmini izin ayı, gün aralığı ve algoritma güven rozetleri içeren detaylı liste.
  - **Mod 2 (Alt Birim Risk Matrisi):** 28 operasyonel alt birim (modalite) kartı; aynı ayda 2+ personel izni durumunda *"Kritik Çakışma"* (kırmızı), %50+ yaz yığılmasında *"Mevsimsel Yığılma"* (sarı) ve *"Dengeli Dağılım"* (yeşil) alarmları, 12 ayın mini dağılım grafikleri ve tek tıkla *"Bu Birimi Filtrele"* butonu.
  - **Mod 3 (12 Aylık Mini-Gantt / Isı Haritası):** Yatay zaman çizelgesinde (Ocak-Aralık) personellerin izin tercihleri, zirve ay (`TEM - ZİRVE`) vurgusu ve çizelge altında aylık toplam izin kapasite yükü özet satırı.
- **Takvim Panosu Resmi Tatil & Mesai Saati Eksilme Bilgi Kartı:**
  - Seçili aydaki resmi ve dini tatil günleri (örn: 1.5 gün) dinamik hesaplanarak personelin standart aylık çalışma süresinden düşecek mesai saati (örn: 35 saat eksik mesai) bilgilendirici özet kartı olarak sunuldu.

#### 🔧 Değiştirildi (Changed)

- **Alt Birim (Modalite) & Unvan Dikey Katman Entegrasyonu:**
  - Backend SQL sorgusu `alt_departman_id`, `altDepartmanAdi`, `unvan_id`, `unvanAdi` ve `hizmetTipi` alanlarını içerecek şekilde güncellendi.
  - Tabloda `Personel & Unvan` sütununda personelin unvan rozeti (*Doçent, Uzman Tabip, Sağlık Teknikeri vb.*) gösterildi.
  - `Ana Bölüm & Alt Birim / Modalite` sütununda personelin asıl nöbet/cihaz birimi hiyerarşik okla (**`↳ Girişimsel Radyoloji (Anjiyo)`**, **`↳ Acil Radyoloji (Röntgen/BT)`**) gösterildi.
- **Klinik Çakışma Alarmları (Simülatör):**
  - Çakışma analizi kaba ana departman yerine operasyonel Alt Birim (Modalite) düzeyine indirildi. Kritik unvanlı personellerin aynı ayda izinli olduğu darboğaz birimler alarm olarak listelendi.
- **Nöbet Takvimi Birim Listesi:**
  - Departman listesi sadece faal nöbet tutulan birimlerle sınırlandırıldı; nöbet tutulmayan birimler elenerek sadeleştirildi.
- **Nöbet Takvimi Temiz Yazdırma Modu (`@media print`):**
  - Yazdır tetiklendiğinde filtre çubukları, üst navigasyon ve butonlar gizlenerek resmi onaylı A4 çizelge formatı sağlandı.
- **Zenginleştirilmiş Kurumsal Excel Çıktısı:**
  - `DashboardExportButton` dışa aktarımına `Unvan`, `Ana Birim`, `Alt Birim (Modalite)` ve `Hizmet Tipi` sütunları eklendi.

#### 🐛 Düzeltildi (Fixed)

- **Geçmiş Patern Yıl Sayısı Kalibrasyonu:**
  - Veritabanındaki 3.827 onaylı izin kaydı arasında 2019 ve pandemi dönemi izin kısıtlamalarının güncel alışkanlıkları bozmaması için model varsayılan olarak **Son 4 Yıl (2023–2026)** aralığına kalibre edildi; tablodaki `Geçmiş Veri Yılı` sütunu netleştirildi.
- **KPI Kartı Metin Taşması:**
  - 12 ayın neredeyse tamamının kritik eşiğe takılması sonucu oluşan `Ocak & Şubat & ...` metin kesilme sorunu, tekil ve anlamlı "En Yoğun Ay" metriğine geçilerek çözüldü.

---

## [4.0.2.4] - 2026-09-16

### 🌐 20 Modüllü Web Portalı Analitik Dashboard Paketi, Sıfır Sahte Veri & Alt Departman Hiyerarşisi

Bu sürüm; [docs/web_portal_güncelleme.md](docs/web_portal_güncelleme.md) yol haritasındaki 20 kurumsal analitik dashboardu eksiksiz tamamlar. Tüm panolar doğrudan PostgreSQL veritabanına bağlanmış, sentetik mock kayıtlar yerine dürüst ve kurumsal *"Kayıt Girişi Yoktur"* boş durum standardı getirilmiş, yüzeysel ana departmanlar yerine 27 gerçek operasyonel klinik alt birim (BT, MR, Anjiyo, Acil vb.) hiyerarşisi devreye alınmış, 10 maddelik resmi NDK & SKS denetim matrisi ve tek tıkla resmi Excel/PDF dışa aktarım altyapısı entegre edilmiştir.

#### ✨ Eklendi (Added)

- **20 Tam Donanımlı Klinik Analitik Dashboard:**
  - **Sayfa 1 (GenelDashboard):** Hastane genel özet durumu, 6 üst yönetici KPI kartı, erken uyarı bannerları, riskli personel/cihaz listeleri.
  - **Sayfa 2 (AlanlarDashboard):** Kontrollü ve gözetimli alan radyasyon izleme, dedektör seviyeleri.
  - **Sayfa 3 (DozimetreDashboard):** 3.402 TLD/OSL okuması, 20 mSv yasal tavanı, 1.5 mSv inceleme ve 2.0 mSv aşım alarmı, 12 aylık trend grafikleri (`LineChart`), TENMAK esasları, resmi RD.F43 bağlantısı.
  - **Sayfa 4 (OrtamDozuDashboard):** Sabit alan dedektörleri, 0 kritik eşik aşımı, oda bazlı $\mu Sv/h$ ölçümleri.
  - **Sayfa 5 (EgitimUyumDashboard):** 27 klinik alt departmanın eğitim uyum sıralaması, ALARA ve radyasyon güvenliği vize takibi.
  - **Sayfa 6 (NobetDashboard):** 27 alt birim nöbet havuzları, adil vardiya dağılımı, yorgunluk ve fazla mesai analitiği.
  - **Sayfa 7 (TakvimDashboard):** İnteraktif nöbet takvimi, vardiya filtreleri, antetli aylık çizelge çıktısı.
  - **Sayfa 8 (BirimYukDashboard):** Modalite katsayıları (BT: 1.8x, MR: 2.2x, Anjiyo: 3.0x) ile 27 alt departmanın bağıl iş yükü analizi.
  - **Sayfa 9 (IzinDashboard):** Yıllık, mazeret, sağlık raporu devamsızlık analitiği, nöbet havuzu kapasite etkisi.
  - **Sayfa 10 (SuaDashboard):** 31466 sayılı yönetmelik gereği kesintisiz 30 günlük şua izni hak ediş takibi, kıstelyevm hesabı, yıllık izin takvimi.
  - **Sayfa 11 (SaglikDashboard):** 207 personelin periyodik dahiliye, göz, dermatoloji muayeneleri, hekim e-imza kararları (`Uygun`, `Koşullu`, `Uygun Değil`), 6 aylık yığılma tahmini (`BarChart`).
  - **Sayfa 12 (KisitlarDashboard):** Gebe çalışan koruma takvimi (kalan gün sayacı), sağlık raporlu nöbet/FM muafiyetleri, nöbet havuzu kritik kapasite alarmı (%40+ kısıtlı oranı).
  - **Sayfa 13 (CihazDashboard):** 78 tıbbi cihaz teknik künyesi (NDK tescil no, tüp seri no, demirbaş no), AAPM TG-142 ve DIN 6857-1 kalite kontrolleri, 12 QC geciken cihaz takibi, açık servis arıza kayıtları.
  - **Sayfa 14 (RkeDashboard):** 788 kurşun ekipman envanteri, DIN 6857-1 skopi muayeneleri, 0 mm² tiroid delik kuralı, dinamik ekipman türü ve birim çift yönlü filtreleri.
  - **Sayfa 15 (OlayBildirimiDashboard):** 36 olay bildirimi, 29 açık DÖF süreci, 3 adımlı sihirbaz, anonim bildirim koruması, kök neden analizi.
  - **Sayfa 16 (ArastirmaDashboard):** Etik kurul onaylı akademik ve klinik araştırmalar, araştırmacı personelin kümülatif dozu.
  - **Sayfa 17 (KurumsalLisansDashboard):** NDK ve TENMAK tesis lisansları, 60/30/15 gün kademeli erken uyarı bildirim şeridi, kurumsal boş durum kartı.
  - **Sayfa 18 (PersonelView):** 207 personel, 27 klinik alt departman, sicil no, KVKK maskeli TC Kimlik, telefon, kurumsal e-posta, doğum/işe giriş tarihleri, son TLD okuması; Kart ve Tablo görünüm seçenekleri, demografi grafikleri, detay modalı.
  - **Sayfa 19 (ZimmetDashboard):** 78 cihazlık klinik havuz (`cihazHavuzu`), Taşınır Mal Yönetmeliği Md. 31 teslim/zimmet tutanağı modalı, personel zimmet karnesi ve ilişik kesme kontrolü.
  - **Sayfa 20 (DenetimHazirlikDashboard):** 8 modül ağırlıklı puanlama formülüyle hesaplanan **%84 Genel Denetim Uyum Skoru**, 7 eksenli radar analitiği, 10 maddelik resmi NDK & SKS denetim matrisi ve **"Detaya Git"** (`onNavigateToTab`) ile ilgili panoya tek tıkla geçiş köprüsü.
- **Sıfır Sahte Veri Standartı (Zero Fake Data Policy):**
  - Veritabanı tablolarında veri bulunmadığında yapay/sentetik mock kayıtlar kesinlikle üretilmez; kullanıcıyı bilgilendiren dürüst ve şeffaf *"Kayıt Girişi Yoktur"* boş durum kartları devreye alındı.
- **Klinik Alt Departman Hiyerarşisi:**
  - SQL sorgularında `COALESCE(ad.departman_adi, d.departman_adi)` hiyerarşisi ile hastanenin 27 gerçek operasyonel klinik alt birimi (BT, MR, Anjiyo, Acil Radyoloji vb.) baz alındı.
- **Kurumsal Dışa Aktarım Altyapısı (`DashboardExportButton`):**
  - 20 panonun tamamında tek tıkla antetli, tarihli, filtre özetli ve imza alanlı resmi **Excel** ve **PDF** rapor üretimi sağlandı.

#### 🔧 Değiştirildi (Changed)

- `web_portal/src/services/lookup.service.ts`: Personel sorgusuna `sicil_no`, `tc_kimlik`, `telefon_cep`, `email`, `cinsiyet`, `dogum_tarihi`, `ise_giris_tarihi` ve `alt_departman_adi` alanları eklendi.
- `web_portal/src/routes/dashboard.routes.ts`: 20 panonun canlı backend SQL uç noktaları BOLA departman izolasyonu ve PostgreSQL SSOT şemasıyla tam entegre edildi.
- `web_portal/src/App.tsx`: Tüm 20 dashboard sekmesi, alt departman filtreleri ve yönlendirme (`handleSelectDashboardCategory`) mimarisi bağlandı.

#### 🧪 Testler (Tests)

- `tests/test_web_portal_security.py`: 21 güvenlik, RBAC/PBAC yetkilendirme ve SQL bütünlük testinin tamamı başarıyla geçti (%100).
- `npm run build`: Vite ve esbuild CJS bundle (2.4 MB `dist/server.cjs`) derlemesi sıfır hata ile tamamlandı.

---

## [4.0.2.3] - 2026-09-14

### 🛡️ Yetki Tabanlı Erişim Kontrolü (PBAC), Klinik Çizelge Matrisi & Başlık Ergonomi Paketi

Bu sürüm; sistem genelindeki hardcoded rol kontrollerini Permission-Based Access Control (PBAC) mimarisine dönüştürür, rol yönetiminde kilitlenme emniyetlerini (Admin Lockout Prevention) sağlar, nöbet çizelgesinde 31 günün tek ekrana sığmasını sağlayan **Klinik Çizelge Matrisi (RDS Matrix Table)** kompakt stilini devreye alır, hafta sonu/bayram satır renklendirmesini ve başlık alanı ergonomi sadeleştirmesini tamamlar.

#### ✨ Eklendi (Added)

- **Klinik Çizelge Matrisi (RDS Matrix Table - 28px):**
  - `ui/tokens.py` içerisine `GeometryTokens.HEIGHT_TABLE_ROW_COMPACT = "28px"` ve `FontTokens.SIZE_BODY_SM = "12px"` kurumsal belirteçleri eklendi.
  - `ui/theme.py` içinde `CIZELGE_MATRIX_TABLE_STYLE` merkezi RDS stili tanımlandı; `apply_global_table_styles` fonksiyonuna `variant in ("cizelge", "compact", "matrix")` desteği kazandırıldı.
  - Nöbet çizelgesi matris tablosunda başlık yüksekliği 50px'den 38px'e optimize edildi.
  - Tarih ve gün sütunları ile sağdaki personel hakediş tablosundaki sayısal sütunlara (Nöbet Sayısı, Hedef Süre, Fiili Çalışma, Fazla Mesai) ortalama hizalama (`AlignCenter`) ve `Fira Code` / `Consolas` tabular monospace font standardı uygulandı.
- **Hafta Sonu ve Bayram / Resmi Tatil Satır Renklendirmesi:**
  - `CizelgeTableDelegate.paint` metodu QSS'ten bağımsız olarak doğrudan `painter.fillRect` ve `painter.drawLine` ile tüm satırı renklendirecek şekilde yeniden modellendi.
  - Resmi Tatil ve Dini Bayramlar: Sıcak koyu vişne/bordo (`#4A1525`), rose metin (`#FDA4AF`), bordo kenarlık (`#701A31`).
  - Hafta Sonu Günleri (Cumartesi / Pazar): Koyu modern Slate laciverti (`#1E293B`), açık gri metin (`#E2E8F0`), gri kenarlık (`#334155`).
  - Öncelikli Nöbet Vurguları: Devir (`#7C2D12`), İptal (`#7F1D1D`), Kendi Nöbetiniz (`#1E3A8A`), İzin Çakışması Kırmızı (`#EF4444`) ve Seçili Personel Parlak Mavi (`#3B82F6`) önceliğini korur.
  - `tatil_takvimi` veritabanı sorgulamasına ek olarak Türkiye sabit resmi tatil takvimi (Yılbaşı, 23 Nisan, 1 Mayıs, 19 Mayıs, 15 Temmuz, 30 Ağustos, 28-29 Ekim) fallback olarak entegre edildi; tatil günlerinde tarih ve gün hücrelerine bayram adı bilgilendirici tooltip olarak eklendi.
- **Tek Satır Başlık Düzeni ve Ergonomik Tipografi:**
  - `nobet_plan_detay_page.ui` ve `nobet_plan_incele.ui` dosyalarından dikeyde ~100 piksel alan yutan 3 satırlık `Plan Özeti` GroupBox'ı tamamen kaldırıldı.
  - Başlık satırı tek satırda birleştirildi: `Nöbet Çizelgesi` — `<Plan Adı>` `[Durum Rozeti]`.
  - Plan adı metnindeki teknik alt çizgiler (`_`) temizlendi, yazı boyutu 15px yarı kalın (`font-weight: 650`) ve `#F8FAFC` kristal beyaz yapılarak ana başlıkla tam uyumlu, net ve yüksek okunaklı hale getirildi.
  - Kazanılan dikey alan sayesinde 31 günlük ayın tüm günleri dikey kaydırma çubuğuna (scroll) ihtiyaç duymadan doğrudan ekrana sığdırıldı.
- **Ay Ortası Kısmi Nöbet Planı İptali ve Güvenli Taslağa Çekme (`btnCancelPartialPlan`):**
  - Yayınlanmış ve yürürlükte olan bir planın ay ortasında revize edilmesi gerektiğinde, personellerin geçmiş günlerde fiilen tamamladığı nöbetlerin (`Tamamlandı`) ve yasal çalışma saati/fazla mesai/Şua izni hakedişlerinin silinmesini engelleyen güvenli akış devreye alındı.
  - Kesim tarihi (Cut-off Date) için bugünden geriye doğru en fazla 3 gün sınırı (`bugün - 3 gün`), en az 20 karakterlik resmi denetim gerekçesi (Audit Trail) ve `SudoDialogController` üzerinden amir parola doğrulaması şartı getirildi.
  - Kesim tarihinden sonraki nöbetler iptal edilerek plan otomatik olarak `Taslak` durumuna çekilir ve kalan günler için yeniden dağıtım olanağı sağlanır.
- **Merkezi PBAC ve Rol Güvenlik Çekirdeği:**
  - `ui/controllers/base_controller.py`: `YetkiliControllerMixin` ile `_is_admin()`, `_is_yonetim_or_admin()` ve `_has_permission(action)` merkezi metotları devreye alındı.
  - `app/services/security.py`: `is_management_or_admin_role(db, actor_role)` fonksiyonu eklendi; aktörün admin/superadmin veya veritabanında `onay_gerektirir == 0` olan yönetim rollerinden birine sahip olup olmadığı dinamik olarak doğrulanır.
  - `app/services/auth/role_service.py`: Rol adı, kapsam (`'own'`, `'department'`, `'all'`) ve onay durumu normalizasyonu eklendi.
  - **Admin Kilit Emniyeti (Lockout Prevention):** `admin` rolünün adı değiştirilemez, pasife alınamaz, toplu pasifleştirilemez ve korumalı sistem rolleri adıyla yeni rol açılamaz veya kopyalanamaz.

#### 🐛 Düzeltildi (Fixed)

- **Hardcoded Rol Uyuşmazlıkları (20+ Modül ve Controller):**
  - Personel, İzin, Nöbet, Onay Bekleyen Görevler, Fiili Hizmet, Sağlık Muayene, RKE, Kalite Ortam Dozu, Sistem Bakım ve Lisans modüllerindeki case-sensitive tuple kontrolleri (`("Admin", "SuperAdmin", "BirimSorumlusu")`) temizlenerek PBAC ve `is_management_or_admin_role` standartlarına geçirildi.
- **Eksik Bileşen ve Nöbet Detay Hata Çözümü:**
  - `RADPYS_V4_YENI` klasöründe eksik olan `ui/widgets/nobet_cizelge_table.py` ve yardımcı bileşenleri (`export_widget.py`, `empty_state_widget.py`, `trend_delegate.py`) taşınarak `'QTableWidget' object has no attribute 'set_data'` hatası giderildi.
  - Nöbet listesindeki hardcoded `statusLegendLayout` ("Taslak: duzenlenebilir...") alanı kaldırıldı, `countLabel` pagination satırına taşındı.
  - Nöbet detay ve inceleme denetleyicilerindeki hardcoded inline `setStyleSheet` blokları temizlendi (AGENTS.md Rule 14).

#### 🧪 Testler (Tests)

- `tests/test_ui_nobet_controllers.py` içerisine `test_nobet_cizelge_matrix_styling` ve `test_nobet_plan_detay_cizelge_table_widget` testleri eklendi.
- Tüm 15 UI nöbet testi ve 31 nöbet servis testi (toplam 46 test) eksiksiz olarak yeşil geçti.
- `tests/test_role_service.py` ve `tests/test_role_seed_consistency.py` ile PBAC rol bütünlüğü ve admin kilit emniyetleri doğrulandı (13 test yeşil).

---

## [4.0.2.2] - 2026-09-14

### 🛠️ Dashboard API SQL "undefined" & RKE Muayene FK Bütünlük Düzeltmesi

Bu sürüm; web portalın canlı panolarında ortaya çıkan BOLA filtre çözümleme hatasını (`syntax error at or near "undefined"`) ve `rke_muayeneler` yabancı anahtar sütunu (`rm.ekipman_id` -> `rm.rke_id`) uyumsuzluğunu giderir.

#### 🐛 Düzeltildi (Fixed)

- **BOLA Departman Filtre Uyumluluğu (`getDepartmentFilter`):**
  - Genel, Nöbet, Dozimetre, Olay, İzin, Sağlık, Kısıtlar, Zimmet, Şua, Araştırma, Birim Yük ve İzin Projeksiyon panolarında `getDepartmentFilter` çağrısı `{ filterSql, filterClause, param, params }` arayüzüne genişletildi. Tanımsız (`undefined`) SQL enjeksiyonu ve `syntax error at or near "undefined"` hataları engellendi.
- **PostgreSQL SSOT Tablo ve Sütun Doğrulamaları:**
  - **Nöbet Çizelgesi & Birim Yük Panoları:** `nobet_cizelgesi` tablosunda var olmayan `nc.departman_id` yerine personeller tablosu üzerinden `p.departman_id` bağlandı; `departmanlar` tablosu join ilişkisi personeller üzerinden kuruldu.
  - **Dozimetre & Genel Bakış Panoları:** Var olmayan `personel_dozimetre_olcumleri` yerine PostgreSQL şemasındaki gerçek `personel_dozimetre` tablosuna bağlandı; `yuzeysel_doz_hp007` ve `limit_asimi_tipi` sütunları tam eşleştirildi.
  - **Dozimetre Anomalileri & Araştırma Panoları:** Var olmayan `dozimetre_aksiyon_takip` yerine `dozimetre_aksiyonlar` tablosu bağlandı; `tip`, `hp10`, `olusturma`, `gerekce` sütunları uyarlandı ve `ORDER BY da.olusturma DESC` düzeltildi.
  - **Kısıtlar Panosu (Gebe Takibi):** Ayrı bir tablo olmayan `personel_gebelik_takip` yerine personeller tablosundaki `p.gebelik_bildirim_tarihi` ve `p.gebelik_tahmini_bitis` alanları doğrudan sorguya bağlandı.
  - **Zimmet Panosu:** `ensurePortalSchema` içerisine `personel_cihaz_zimmet` tablosunun otomatik oluşturulması eklendi; `cihazlar` tablosundaki `marka`, `model` ve `cihaz_kodu` alanları `ekipmanTuru` için dinamik çözümlendi.
  - **Takvim Panosu & Arayüz Güvenliği:** `/api/dashboard/takvim` sorgusunda frontend ile uyumlu `yilAy`, `tatilGunSayisi` alanları eklendi. `TakvimDashboard.tsx` bileşeni null-safe hale getirilerek `Cannot read properties of undefined (reading 'substring')` frontend hatası tamamen engellendi.
- **RKE Envanter Muayene İlişkisi (`/api/dashboard/rke-ozet`):**
  - `rke_muayeneler` tablosunda `ekipman_id` yerine PostgreSQL şemasıyla birebir uyumlu `rke_id` (`rm.rke_id = r.id`) bağlandı; `genel_karar` ve `hasar_bolgesi` filtreleri DIN 6857-1 standardı ile zenginleştirildi.
- **Canlı Paket Derlemesi:**
  - `web_portal/dist/` dizini Vite (frontend) ve esbuild (server.cjs) ile eksiksiz derlendi.

#### 🧪 Testler (Tests)

- `tests/test_web_portal_security.py` içine `test_sec_portal_19_get_department_filter_dual_api`, `test_sec_portal_20_rke_muayeneler_fk_integrity` ve `test_sec_portal_21_dashboard_schema_ssot_integrity` regresyon testleri eklendi (21/21 test BAŞARILI).

---

## [4.0.2.1] - 2026-09-14

### 🛠️ Web Portal Dashboard SQL Şema Uyumluluk & PostgreSQL Cold-Start Yaması

Bu sürüm; web portalın PySide6 / Electron Launcher (`Untitled-1.ini`) üzerinden çalıştırılması esnasında tespit edilen SQL sorgu-şema uyumsuzluklarını ve PostgreSQL servis başlangıç gecikmesi (`57P03`) sorunlarını tamamen giderir.

#### 🐛 Düzeltildi (Fixed)

- **PostgreSQL 57P03 Cold-Start / Başlatma Gecikmesi (`waitForDatabaseReady`):**
  - PostgreSQL servisi `pg_ctl` ile başlatıldıktan sonra Node.js sunucusunun şema denetimine (`ensureProfileSchema`, `ensurePortalSchema`) erken başlaması sonucu oluşan `FATAL: code 57P03 (the database system is starting up)` uyarısı için 10 denemeli (1s aralıklı) asenkron hazır olma bekleme döngüsü eklendi.
- **RKE Envanter Özet Panosu (`/api/dashboard/rke-ozet`):**
  - `rke_envanter` tablosunda var olmayan `r.tip_adi` sorgusu kaldırıldı; `system_lookups sl ON sl.id = r.tip_id` ile dikey ilişki kurularak tip adı dinamik çözümlendi.
- **Ortam Dozu Limit Aşımı Panosu (`/api/dashboard/ortam-dozu-limit-asimi`):**
  - `ortam_olcum_noktalari` tablosundaki `n.limit_degeri_usv_h` yerine doğru şema sütunu olan `n.limit_esik_usv_h` bağlandı.
  - Tabloda bulunmayan `n.kroki_id` alanı `(SELECT dk.id FROM departman_krokileri dk WHERE dk.departman_id = n.departman_id LIMIT 1)` alt sorgusu ile giderildi; `o.aciklama` alanı `o.notlar` ile değiştirildi.
- **Hizmet İçi Eğitim Uyum Panosu (`/api/dashboard/egitim-uyum`):**
  - `egitim_katalogu` tablosunda `ek.tur` sütunu bulunmadığından şema ile uyumlu `COALESCE(ek.kategori, 'Genel')` sütununa dönüştürüldü.
- **Kurumsal Tesis Lisansları Panosu (`/api/dashboard/kurumsal-lisanslar`):**
  - `kurumsal_tesis_lisanslari` tablosunda var olmayan `lisans_turu`, `veren_kurum`, `gecerlilik_bitis` alanları; tablodaki gerçek sütunlar olan `lisans_kapsami`, `tesis_adi`, `bitis_tarihi` ve `notlar` ile birebir eşleştirildi.
- **Denetim Hazırlık Panosu (`/api/dashboard/denetim-ozeti`):**
  - `n.limit_degeri_usv_h` -> `n.limit_esik_usv_h` ve `gecerlilik_bitis` -> `bitis_tarihi` düzeltmeleri bu özet sorgusuna da yansıtıldı.
- **Kısıtlı Personel Kapasite Riski Panosu (`/api/dashboard/kisit-kapasite` & `/api/dashboard/kisitlar`):**
  - Kural tanım tablosu olan `nobet_kisitlari` tablosunda `personel_id` bulunmadığından, kısıtlı personeller doğrudan `personel_calisma_kisitlari pck` tablosu üzerinden bağlandı.
- **Bağımlılık Paketleri Optimizasyonu (`requirements.txt` & `requirements-dev.txt`):**
  - Artık kullanılmayan ve Python 3.12+/3.14 ortamlarında derleme hatalarına neden olan `sqlcipher3-wheels==0.5.7` (PostgreSQL SSOT geçişi ile işlevsiz kalan), kodda referansı bulunmayan `bcrypt==5.0.0` (yerel `hashlib.pbkdf2_hmac` kullanılmaktadır) ve `python-pptx==1.0.2` paketleri temizlendi; bağımlılıklar işlevlerine göre kategorize edildi.
  - `requirements-dev.txt` dosyasında atıl kalan `faker` paketi arındırıldı; kod kalitesi ve tip güvenliği için modern `ruff>=0.4.0` ve `mypy>=1.10.0` ile masaüstü paketleyici `pyinstaller>=6.5.0` eklendi.

#### 🧪 Testler (Tests)

- `tests/test_web_portal_security.py` içerisine `test_sec_portal_17_dashboard_sql_schema_integrity` ve `test_sec_portal_18_cold_start_db_retry` regresyon testleri eklendi (18/18 test BAŞARILI).

---

## [4.0.2.0] - 2026-09-14

### 🛡️ Web Portal 16 Kırmızı Düğüm Refaktörü, PostgreSQL SSOT, SKS v6.1 & PySide6 Başlatıcı Uyumluluğu

Bu sürüm; RADPYS Web Portal altyapısındaki 16 kırmızı güvenlik ve mimari düğümün (Faz 1–4) eksiksiz kapatılmasını, tüm analitik dashboard panellerinin ve veri yazma operasyonlarının PostgreSQL SSOT (Single Source of Truth) mimarisine geçirilmesini, SKS v6.1 SMS/OTP şifahi onay korumasını, Express 60s TTL analitik önbelleğini (MemoryCache), Multer ikili magic byte dosya güvenliğini, Double-Submit CSRF kalkanını ve Python 3.14 / PySide6 çalışma zamanı `QDate`/`QDateTime` geriye dönük uyumluluk yamalarını (`main.pyw`) içerir.

#### ✨ Eklendi (Added)

- **Python 3.14 & PySide6 QDate / QDateTime Uyumluluk Yamaları (`main.pyw`):**
  - PySide6 `QtCore.QDate` ve `QtCore.QDateTime` sınıflarına `toPyDate()` ve `toPyDateTime()` dinamik sarmalayıcıları (`lambda self: self.toPython()`) eklendi; eski ve yeni PySide6 sürümleri arasındaki tip dönüşüm hataları tamamen giderildi.
- **Web Portal PostgreSQL SSOT Mimarisinin Kurulması (`web_portal_sessions` & `web_portal_records`):**
  - Aktif kullanıcı oturumları ve yetkileri için PostgreSQL `web_portal_sessions` tablosu oluşturuldu; `sessions.json` dosya saklaması tasfiye edildi.
  - Form ve mobil saha kayıtları için PostgreSQL `web_portal_records` tablosu oluşturuldu; diskteki `data_store.json` dosya yazımları (`saveDatabase()`) devre dışı bırakılarak doğrudan veritabanı atomikliğine geçildi.
- **Analitik Dashboard TTL Önbellek Motoru (`MemoryCache` & `cacheDashboard`):**
  - 23 analitik dashboard uç noktası (`/api/dashboard/*`) için 60 saniyelik TTL ve rol/departman bazlı composite key önbelleklemesi sağlandı (`X-Cache: HIT / MISS`).
  - Veri mutasyonlarında (`POST /api/records`, devir onayları, olay bildirimleri vb.) `dashboardCache.invalidate()` ile anında önbellek tazeleme bağlandı.
- **İkili Magic Byte Dosya Doğrulama Kalkanı (`validateMagicBytes`):**
  - Belge yüklemelerinde sahte MIME/uzantılara karşı ilk 16 baytlık ikili başlık kontrolü (PDF `%PDF-`, PNG `89 50 4E 47`, JPEG `FF D8 FF`) uygulandı; doğrulamayı geçemeyen dosyalar diske kaydedilmeden imha edilerek reddedildi (CWE-434).
- **SKS v6.1 Şifahi Onay Çift Taraflı Doğrulama ve SMS/OTP Sistemi (`/sifahi-onay/talep-otp`):**
  - İntranette olmayan devralan personelin dijital rızasını güvence altına almak için 6 haneli OTP kodu üretimi, 15 dakika geçerlilik süresi ve `/sifahi-onay` rotasında zorunlu OTP doğrulaması bağlandı.
- **Çift Taraflı CSRF Kalkanı (`csrfProtection` & `/api/auth/csrf-token`):**
  - Durum değiştiren mutasyonlara (POST, PUT, DELETE, PATCH) karşı Bearer token veya `X-CSRF-Token` başlık zorunluluğu getirildi; istemciler için token uç noktası açıldı (CWE-352).
- **Bellek ve Kaynak Tavan Sınırları (OOM Önleme):**
  - `MAX_PENDING_SYNC_ITEMS = 500` ve `MAX_SESSIONS = 5000` sınırları ile kontrolsüz bellek büyümesi engellendi; senkronize öğelerin bellekten otomatik budanması sağlandı.

#### 🔄 Değiştirildi (Changed)

- **23 Dashboard Uç Noktasının Canlı PostgreSQL Tablolarına Bağlanması:**
  - Masaüstünün diske kopyaladığı statik candidate JSON dosyalarının okunması sonlandırıldı. 13 dashboard ucu (`nobet`, `dozimetre`, `olay`, `genel`, `izin`, `saglik`, `kisitlar`, `takvim`, `zimmet`, `sua`, `arastirma`, `birim-yuk`, `izin-projeksiyon`) doğrudan canlı SQL tablolarına aktarıldı.
  - Tüm 23 dashboard uç noktasına `requireRole(...)` rol doğrulaması ve `getDepartmentFilter` BOLA departman filtrelemesi uygulandı.
- **Nöbet Devir ve Olay Bildirim Akışları:**
  - `POST /api/nobet/devir/:devirId/:action` (`kabul` / `red`) ucu eklenerek `ShiftApprovalView` bileşeninin onay akışı canlı `nobet_devirler` tablosuna bağlandı.
  - Olay bildirimleri doğrudan PostgreSQL `olay_bildirimler` tablosuna yazılmaya başlandı.

#### 🔒 Güvenlik (Security)

- `/api/lookups` içindeki şifre hash sızıntısı (`k.sifre_hash`) giderildi (SEC-PORTAL-11).
- `'SECURE_API_TOKEN_2026'` sabit bypass anahtarı engellenerek kriptografik 32 bayt token üretimi zorunlu kılındı (SEC-PORTAL-02).
- Kroki renderındaki Python `execFile` OS komut enjeksiyonu CLI argüman listesiyle kapatıldı (SEC-PORTAL-07).
- Eğitim materyali indirme rotasındaki dizin aşımı (Path Traversal) kapatıldı (SEC-PORTAL-05).
- `/api/shutdown` rotası üretimde 404'e çekildi ve yerel IP denetimine bağlandı (SEC-PORTAL-10).
- `/api/records` uç noktasındaki kimliksiz erişim ve role spoofing kapatıldı (SEC-PORTAL-16).
- Toplam 16 kırmızı düğüm için `tests/test_web_portal_security.py` altında 16 otomatik regresyon testi yazılarak doğrulandı.

---

## [4.0.1.0] - 2026-09-13

### 🛡️ Admin Modülü Kırmızı Düğüm Çözümleri, Aktör Standardizasyonu & RDS Görsel İyileştirmeleri

Bu sürüm; Admin modülünün dikey katmanlarındaki tüm güvenlik ve mimari kırmızı düğümlerin (18/18) kapatılmasını, denetleyici katmanında global `_actor_kwargs()` standardizasyonunu, Tanımlamalar modülündeki tablo sütun yerleşimi ve 34px kompakt satır yüksekliği optimizasyonunu ve tüm operasyonel ekranlardaki filtre açma/kapama (filter toggle) butonlarının modern kare ikon standardına kavuşturulmasını içerir.

#### ✨ Eklendi (Added)

- **Global Aktör Standardı (`_actor_kwargs` & `_actor_role_kwargs`):**
  - `BaseController` ve `YetkiliControllerMixin` sınıflarına `actor`, `actor_role` ve `actor_personel_id` sözlüğünü dönen merkezi fonksiyonlar eklendi; controller seviyesindeki çok satırlı kod kalabalığı temizlendi.
- **Sudo Güvenlik Doğrulaması (`SudoDialogController`):**
  - Şema onarımı (`repair_schema`), veritabanı sıfırlama (`reset_database`) ve etkileşim loglarının temizlenmesi gibi yüksek riskli işlemler için şifreli yönetici doğrulama bariyeri ve zorunlu audit log kaydı devreye alındı.
- **Standart Kare Filtre Butonu (`btnToggleFilters`):**
  - Tüm sayfalarda sağ üst başlık çubuğunda, `btnScreenClose` (kırmızı kapat butonu) yanında yer alan 28x28px boyutunda, checkable `QToolButton` standardı getirildi.
  - Tabler SVG `filter.svg` ikonu, el imleci ve aktif/kapalı filtre sayısını gösteren dinamik tooltip desteği sağlandı.
  - Açık ve koyu temalara özel QSS kuralları eklendi; filtreler açıkken parlak cyan/mavi kenarlık (`:checked` / `border: 1.5px solid #38BDF8`) ile net görsel geri bildirim oluşturuldu.
- **Otomatik UI Yapılandırma Motoru (`qt_loader.py`):**
  - `load_ui_widget` mekanizması genişletilerek sayfadaki `btnToggleFilters` butonlarına otomatik olarak `filter.svg` ikonu, `PointingHandCursor`, `setCheckable(True)` ve tooltip ataması entegre edildi.

#### 🔄 Değiştirildi (Changed)

- **Admin Modülü Kırmızı Düğümlerin Kapatılması (18/18 Düğüm):**
  - **Kullanıcı & Rol Güvenliği (RED-ADM-01 - 04):** Kullanıcı silme, pasifleştirme, rol atama ve rol kopyalama işlemlerinde aktör kimliği (`actor_personel_id`, `actor_role`) eksiksiz zincire dahil edildi; audit log kayıtları bağlandı.
  - **Yetki & Tanımlamalar RBAC Uyumlaması (RED-ADM-05, 07, 08):** `PermissionsController` (`MODUL_ADI = "yetkiler"`), `ProgramSettingsController` (`MODUL_ADI = "ayarlar"`) ve `LookupController` (`MODUL_ADI = "tanimlamalar"`) yetki kodları PostgreSQL tohumlarıyla (`seeds.sql`) tam uyumlu hale getirildi. 26 lookup CRUD metoduna aktör parametreleri geçirildi.
  - **Ayar Yönetimi ve Tip Güvenliği (RED-ADM-10 - 12):** Ayar güncelleme yetki doğrulaması (`_can_edit`), boolean ayar değerlerinin standartlaştırılması (`"1"` / `"0"`) ve oturum kullanıcı anahtarlarının (`kullanici_adi`) kurumsal standarda çekilmesi sağlandı.
  - **Asenkron UI ve Donma Önleme (RED-ADM-14, 15, 17):** DB Bakım (VACUUM ANALYZE, REINDEX, Reset, Bütünlük Kontrolü), Denetim İzi (Audit Log SHA-256 zincir doğrulaması) ve Tanımlamalar modülündeki 9 ayrı Excel dışa aktarım operasyonu `run_with_progress` asenkron iş parçacıklarına taşınarak UI kilitlenmeleri tamamen engellendi.
  - **Log Arama Performansı & Lazy-Load (RED-ADM-13, 16):** Log kayıtları sekmesi lazy-load (tıklandığında yükleme) mimarisine geçirildi; arama kutusuna 350ms QTimer debounce mekanizması bağlandı.
  - **RDS Temizliği (RED-ADM-18):** Hardcoded inline CSS stilleri temizlenerek `ui/tokens.py` belirteçlerine bağlandı.
- **Akıllı Sütun Boyutlandırması (Smart Column Sizing):**
  - `LookupController._configure_table_columns()` dinamik sütun matrisiyle baştan yazıldı. Metin sütunlarına `Stretch`, kod ve seviyelere `ResizeToContents`, durum (Aktif/Pasif) sütununa sabit 85px ve merkez hizalama uygulandı; tablonun sağındaki devasa boşluklar tamamen giderildi.
  - Başlık ve veri hücrelerinin dikey/yatay hizalamaları kurumsal düzene kavuşturuldu.
- **34px Kompakt Satır Yüksekliği Standardı:**
  - Tanımlama ve ikincil diyalog tablolarında (Rol Kullanıcıları, Rol Karşılaştırma, Yetki Matrisi, Onay Bekleyenler Diff tablosu) satır yüksekliği 44px'den **34px** kompakt seviyeye çekildi (`padding: 4px 10px;`); dikey alan verimliliği maksimize edildi.
- **Görsel Kontrast ve Form Dengesi:**
  - Koyu temada satır alt çizgileri (`rgba(255, 255, 255, 0.07)`) ve hafif alternatif satır rengi (`rgba(255, 255, 255, 0.035)`) belirginleştirildi.
  - Lookup XML formlarında `stretch="3,2"` layout dengesi ve 420px minimum form genişliği tanımlanarak etiketlerin ("Eğitim Adı" vb.) sıkışması önlendi.
- **Operasyonel Sayfalarda Filtre Butonu Uyarlamaları:**
  - `izin_listesi_page.ui`, `izin_hakedis_page.ui` ve `dozimetre_takip_page.ui` sayfalarındaki hantal metin butonları, `saglik_muayene_listesi_page.ui` ve `personel_listesi_page.ui` başlık çubukları 28x28px standart kare filtre butonuna dönüştürüldü.
  - `_ux_helpers.py` içindeki `update_filter_button_text` fonksiyonu buton boyutunu bozmadan tooltip ve checkable durumunu güncelleyecek şekilde optimize edildi.

#### 🗑️ Kaldırıldı (Removed)

- **Fiziksel Modül Silme (RED-ADM-06):** Sistem bütünlüğünü riske atan modül silme fonksiyonu kaldırıldı; güvenli aktif/pasif geçişi (`set_module_active`) ve RBAC denetimi getirildi.
- **Emoji Karakterleri (RED-ADM-13):** Log ekranı sekme başlıklarındaki ham Unicode emojiler kaldırılarak Tabler SVG ikonları atandı.
- **Hantal Metinli Filtre Butonları:** Toolbar alanını daraltan uzun buton etiketleri ("Filtreleri Göster / Gizle") kaldırılarak kare ikon formatına geçildi.

#### 🔒 Güvenlik (Security)

- Şema onarımı, veritabanı sıfırlama ve etkileşim loglarının temizlenmesi şifreli Sudo denetimiyle koruma altına alındı.
- Toplu kullanıcı işlemlerinde ve pasife alma akışlarında aktör doğrulama ve evrensel onay sistemi bypass açıkları kapatıldı.

---

## [4.0.0.0] - 2026-09-12

### 🏗️ Ana Mimari Açılış Sürümü (Clean Architecture Baseline)

RADPYS V4'ün bağımsız saf karar motorları (Domain Layer), kurumsal PostgreSQL-native veritabanı altyapısı, konsolide modül servisleri ve RDS (RADPYS Clinical Design System) tasarım belirteçleriyle donatılmış temiz mimari açılış sürümüdür.

#### ✨ Eklendi (Added)

- **Saf Karar Motorları (Domain Katmanı):**
  - **Dozimetre:** NDK mevzuatına tam uyumlu kümülatif doz risk motoru; gebe personel için 1 mSv yasal tavan denetimi ve erken anomali uyarıları (`doz_limit_motoru.py`).
  - **RKE Muayene:** DIN 6857-1 / IEC 61331-3 standartlarında tiroid koruyucularda 0 mm² delik toleransı (doğrudan HURDA) ve önlük/gonad yüzey tolerans analiz motoru (`rke_muayene_karar_motoru.py`).
  - **FHZ / Şua:** 5510 Sayılı Kanun ve Yataklı Tedavi Kurumları Yönetmeliği uyarınca yıllık 50 saat fiili çalışma karşılığı 1 gün hak ediş, 30 gün tavanı ve kıstelyevm hesaplayıcısı (`fhz_hesaplayici.py`).
  - **İzin:** Çakışan izin, nöbet ve resmi tatil günlerini denetleyen bağımsız saf kural motoru (`izin_cakisma_motoru.py`).
- **Evrensel Yönetici Onay Sistemi (`ApprovalService`):**
  - `onay_gerektirir = 1` olan tüm roller için nöbet takası, izin, profil ve gebelik işlemlerini merkezi onay kuyruğuna yönlendiren altyapı.
  - Rol ve aktör doğrulama zorunluluğu, görsel `DiffDialog` veri karşılaştırması ve ret durumunda zorunlu ret gerekçesi denetimi.
- **Konsolide Modül Servisleri (8 Temel Paket):**
  - 1. Yetki & RBAC (`UserService`, `RoleService`, `LicenseService`).
  - 1. Tanımlamalar (`LookupService`, `SettingsService`).
  - 1. Personel, İzin & Fiili Hizmet (`PersonelService`, `IzinService`, `FiiliHizmetService`).
  - 1. Dozimetre & Sağlık Taramaları (`DozimetreService`, `SaglikService`).
  - 1. Koruyucu Ekipman (`RkeService`, `RkeKodGenerator`).
  - 1. Cihaz Yönetimi (`CihazService`, `CihazImportService`).
  - 1. Kalite Kontrol & Ortam Dozu (`OrtamDozuService`).
  - 1. Nöbet, Olay Bildirimi, Dashboard & Raporlama (`NobetService`, `NobetScheduler`, `OlayBildirimService`, `DashboardFacadeService`, `ReportEngine`, `ServiceRegistry`).
- **RDS Tasarım Belirteçleri (`ui/tokens.py`):**
  - Kurumsal renk, aralık ve tipografi token'ları; `variant` (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `ghost`, `outline`) ve `status` dinamik nitelikleri.
  - 2.800+ parçalık vektörel Tabler SVG ikon fabrikası entegrasyonu.
- **Tabular Tipografi Standardı:**
  - Ölçüm değerleri (`mSv`), seri numaraları, TC kimlik ve tarihlerde sütun hizasını garanti eden `Fira Code / Consolas` standardı.

#### 🔄 Değiştirildi (Changed)

- **PostgreSQL-Native Altyapı:**
  - Hibrit SQLite yapıları tamamen kaldırılarak `psycopg` tabanlı PostgreSQL 14+ havuz yönetimi, Savepoint ve transaction izolasyonuna geçildi.
- **DDL / DML Katı Ayrımı:**
  - Veritabanı şeması saf DDL (`schema.sql`) ve başlangıç referans verileri saf DML (`seeds.sql`) olarak kesin sınırlarla ayrıştırıldı.
- **Repository Konsolidasyonu:**
  - Dağınık 16 repository `app/infrastructure/db/repositories/` altında konsolide edilerek çift katmanlı yapı tekilleştirildi.
- **Kurumsal Terminoloji (TENMAK Standardı):**
  - AGENTS.md Kural 16 uyarınca kod tabanı, arayüzler, dokümanlar ve matbu formlardaki mülga "TAEK" ibareleri resmi **TENMAK** standardına kavuşturuldu.
- **SonucYonetici Standardı:**
  - Tüm servis çağrılarında `SonucYonetici(basarili, mesaj, veri)` zarfı zorunlu kılındı.

#### 🗑️ Kaldırıldı (Removed)

- **Ara Migrasyon Temizliği:** 11 adet geçici göç betiği (`app/db/migrations/V*.py`) kaldırılarak doğrudan `schema.sql` ve `seeds.sql` kaynaklarına entegre edildi.
- **Kontrolsüz CASCADE:** Tablolar arası veri kaybına yol açabilecek `ON DELETE CASCADE` zincirleri sökülerek `RESTRICT` ve soft-delete mimarisine geçildi.
- **Dağınık KVKK Mask:** Servis ve veri katmanındaki tüm `kvkk_mask` bağımlılıkları tamamen temizlendi.
- **Ham Emojiler:** Arayüz başlık, buton ve tablarındaki tüm ham Unicode emojiler kaldırılarak SVG ikon standardına geçildi.

#### 🔒 Güvenlik (Security)

- Taranmış sağlık belgeleri, kılavuzlar ve resmi tutanaklar için `stored_files` tablosunda **AES-256 Fernet** şifreli blob evrak kasası.
- `DISABLE_ACTOR_VALIDATION` sandbox bypass emniyeti üretim ortamında kilitlendi; yalnızca izole birim testlerinde çalışması garanti altına alındı.
- Lisans süresi dolduğunda normal kullanıcı girişini kilitleyen, admin için ise doğrudan aktivasyon ekranını açan kademeli lisans güvenlik kilidi.

---

> ℹ️ *4.0.0.0 öncesi geliştirme ve erken sürüm değişiklik kayıtları orijinal [RADPYS_V4](file:///c:/Users/user/Desktop/RADPYS/RADPYS_V4/CHANGELOG.md) arşivinde muhafaza edilmektedir.*
