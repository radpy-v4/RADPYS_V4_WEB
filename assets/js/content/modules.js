/* ==========================================================================
   RADPYS V4 — 23 Entegre Modül Kataloğu ve Dalga 1 Önizleme Kartları
   ========================================================================== */

(function () {
    window.RADPYS = window.RADPYS || {};
    const MODULES = [
            {
                    "n": "01",
                    "tag": "01",
                    "name": "Kurulum & İlk Giriş",
                    "fullTitle": "Kurulum, Başlatma ve İlk Giriş",
                    "desc": "Win32 tekil kilit, Ed25519 lisanslama, parola politikası ve Ctrl+K Evrensel Arama.",
                    "lead": "Win32 tekil kilit, Ed25519 lisanslama ve Evrensel Arama.",
                    "icon": "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
                    "img": "help/assets/img/01_login_page.png",
                    "guideFile": "01_kurulum_ve_ilk_giris.html",
                    "features": [
                            "Win32 API tabanlı tekil uygulama kilidi (Local\\RADPYS_V4_MAIN_APP_MUTEX) ile çoklu çakışmaları engelleme",
                            "Ed25519 asimetrik kriptografi ile çevrimdışı doğrulanabilir kurum lisans kontrolü",
                            "İlk girişte zorunlu parola değişimi, karmaşıklık politikası ve Şifremi Unuttum e-posta sıfırlama",
                            "Ctrl+K kısayoluyla çalışan hızlı Evrensel Arama (Command Palette) ve animasyonlu bildirim merkezi"
                    ],
                    "benefit": "Veri tabanı bağlantı güvenliği, UAC servis başlatma ve tekil oturum garantisi ile sorunsuz başlangıç sağlar."
            },
            {
                    "n": "02",
                    "tag": "02",
                    "name": "Kullanıcı & Rol Yönetimi",
                    "fullTitle": "Kullanıcı ve Rol Yönetimi (RBAC)",
                    "desc": "RBAC yetki matrisi, 4-göz veri onay kuralı ve güvenli oturum yönetimi.",
                    "lead": "Çok katmanlı rol hiyerarşisi ve 4-Göz denetim ilkesi.",
                    "icon": "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                    "img": "help/assets/img/02_kullanici_yonetim_page.png",
                    "guideFile": "02_kullanici_ve_rol_yonetimi.html",
                    "features": [
                            "12 sistem rolü ve her modül için bağımsız CRUD (Okuma, Yazma, Güncelleme, Silme) matrisi",
                            "4-Göz İlkesi: Yetkisiz personelin kritik veri girişlerini yönetici onay kuyruğuna düşürme",
                            "Birim bazlı dinamik görünürlük filtreleri ve geçici görevlendirme yetki devri",
                            "Kullanıcı aktivasyon/pasifasyon yönetimi ve oturum zaman aşımı kontrolleri"
                    ],
                    "benefit": "Hastanenin hiyerarşik yapısına tam uyumlu yetkilendirme sağlar; izinsiz müdahaleleri kaynağında engeller."
            },
            {
                    "n": "03",
                    "tag": "03",
                    "name": "Sistem Ayarları & Tanımlar",
                    "fullTitle": "Sistem Ayarları ve Dinamik Tanımlamalar",
                    "desc": "Hiyerarşik departmanlar, kurumsal çift logo ve Word antet şablon motoru.",
                    "lead": "Kurumsal kimlik, antetli şablonlar ve esnek lookuplar.",
                    "icon": "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                    "img": "help/assets/img/03_templates_page.png",
                    "guideFile": "03_sistem_ayarlari_ve_tanimlamalar.html",
                    "features": [
                            "Kurum Başlık 1-2 ve çift logo entegrasyonu ile resmi Word ve PDF belgelerine dinamik antet basımı",
                            "Ağaç yapısında hiyerarşik departmanlar, alt servisler ve sorumlu amir eşlemeleri",
                            "Mimari kat planı krokilerini departmanlarla ilişkilendirme ve ölçeklendirme",
                            "Tıbbi cihaz türleri, koruyucu ekipman sınıfları ve tatil takvimi dinamik parametreleri"
                    ],
                    "benefit": "Kurum kimliği değişimlerinde tüm matbu evraklar tek merkezden güncellenir; kod müdahalesine gerek kalmaz."
            },
            {
                    "n": "04",
                    "tag": "04",
                    "name": "Veritabanı Bakım & Güvenlik",
                    "fullTitle": "Veritabanı Bakım, Güvenlik ve Denetim İzi",
                    "desc": "PostgreSQL pg_dump yedekleme, WAL arşivleme, KVKK AES-256 ve SHA-256 denetim izi.",
                    "lead": "Otomatik pg_dump, WAL arşivleme ve AES-256 şifreli evrak kasası.",
                    "icon": "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
                    "img": "help/assets/img/04_veritabani_bakim_ve_guvenlik.png",
                    "guideFile": "04_veritabani_bakim_ve_guvenlik.html",
                    "features": [
                            "Otomatik ve manuel PostgreSQL pg_dump tam veritabanı yedekleme ve tek tıkla geri yükleme",
                            "KVKK 6698 uyumlu AES-256 Fernet şifreleme ile sağlık raporlarını ve belgeleri stored_files kasasında saklama",
                            "Kriptografik SHA-256 zinciriyle mühürlenen değiştirilemez sistem denetim izi (Audit Trail)",
                            "Büyük veri tabloları için VACUUM, ANALYZE ve indeks yeniden oluşturma bakım sihirbazı"
                    ],
                    "benefit": "Veri kaybı riskini sıfıra indirir; KVKK ve resmi teftişlerde kriptografik kanıt niteliğinde log sunar."
            },
            {
                    "n": "05",
                    "tag": "05",
                    "name": "Personel Yönetimi & İçe Aktar",
                    "fullTitle": "Personel Yönetimi ve Toplu İçe Aktarım",
                    "desc": "Dinamik özlük kartı, Excel toplu aktarım motoru ve KVKK Madde 11 ZIP ihracı.",
                    "lead": "Dinamik özlük kartı, sinonim eşlemeli Excel aktarımı ve KVKK ihracı.",
                    "icon": "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                    "img": "help/assets/img/05_personel_list.png",
                    "guideFile": "05_personel_yonetimi_ve_toplu_aktarim.html",
                    "features": [
                            "Personel özlük kartı, mezuniyet, unvan, radyasyon çalışma sınıfı (A/B) ve T.C. doğrulama",
                            "Akıllı Excel İçe Aktarma Motoru: Sütun ve unvan sinonimlerini otomatik eşleyerek yüzlerce personeli tek seferde yükleme",
                            "KVKK Madde 11 Kişisel Veri İhraç Paketi: Tek tıkla personelin tüm geçmişini ve şifreli evraklarını ZIP indirme",
                            "Dinamik arama, birim hiyerarşisi filtreleme ve fotoğraf yükleme desteği"
                    ],
                    "benefit": "Personel havuzu dakikalar içinde sisteme aktarılır; özlük ve radyasyon sicili tek kartta birleşir."
            },
            {
                    "n": "06",
                    "tag": "06",
                    "name": "İzin Yönetimi & Şua Hakediş",
                    "fullTitle": "İzin Yönetimi ve Şua Hakedişleri",
                    "desc": "35s/40s bazlı şua bakiye motoru, 2 aşamalı onay akışı ve cari yıl koruma kilidi.",
                    "lead": "35s/40s hibrit oranlı şua motoru ve 2-aşamalı onay akışı.",
                    "icon": "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                    "img": "help/assets/img/izin_list.png",
                    "guideFile": "06_izin_yonetimi_ve_hakedis.html",
                    "features": [
                            "Yıllık, Şua, mazeret, sağlık raporu ve analık izinleri için merkezi takip",
                            "2-Aşamalı İzin Onay Zinciri: Ön Onaylı (nöbet planlamasını kilitler) ve Resmi Onaylı",
                            "Cari Takvim Yılı Koruması: Şua izinlerinin ertesi yıla devretmesini engelleyen yasal uyarılar",
                            "Web Portalı üzerinden personelin izin talebi açabilmesi ve amirin anlık onaylayabilmesi"
                    ],
                    "benefit": "İzin çakışmaları sıfıra iner; Sağlık (Şua) izni hak kayıpları ve zamanaşımı riskleri tamamen önlenir."
            },
            {
                    "n": "07",
                    "tag": "07",
                    "name": "Nöbet Ayarları & Kısıtlar",
                    "fullTitle": "Nöbet Ayarları ve Kısıt Hiyerarşisi",
                    "desc": "Sert/yumuşak kısıt hiyerarşisi, adalet ağırlıkları ve slot bazlı kural tablosu.",
                    "lead": "Sert/yumuşak kısıtlar, adalet ağırlıkları ve slot bazlı kurallar.",
                    "icon": "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                    "img": "help/assets/img/nobet_ayarlar_main.png",
                    "guideFile": "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html",
                    "features": [
                            "Haftalık 35 saat (Radyasyon) ve 40 saat (İdari) standart çalışma parametreleri",
                            "Sert Kısıtlar (Yasal Zorunluluk): 24s dinlenme, süt izni, gebelik ve 25 yıl kıdem muafiyeti",
                            "Yumuşak Kısıtlar & Adalet Ağırlıkları: Hafta sonu ve resmi bayram nöbetlerinin ekip içinde eşit dağıtımı",
                            "Birim ve slot bazında asgari tekniker sayısı, modalite yetkinliği ve nöbet tipleri"
                    ],
                    "benefit": "Yönetici nöbet kurallarını esnekçe belirler; solver motoru hiçbir personelin hakkını çiğnemeden plan üretir."
            },
            {
                    "n": "08",
                    "tag": "08",
                    "name": "Nöbet Hazırlık & Solver",
                    "fullTitle": "Nöbet Hazırlık ve Solver Optimizasyon Motoru",
                    "desc": "CP-SAT matematiksel optimizasyon, çapraz görevlendirme ve çizelge matrisi.",
                    "lead": "Google OR-Tools CP-SAT motoru ile saniyeler içinde adil çizelge.",
                    "icon": "M13 10V3L4 14h7v7l9-11h-7z",
                    "img": "help/assets/img/08_nobet_cizelge_dialog.png",
                    "guideFile": "08_nobet_hazirlik_ve_solver_motoru.html",
                    "features": [
                            "Matematiksel CP-SAT kısıt çözücü motor ile saniyeler içinde binlerce değişkeni optimize etme",
                            "Çapraz Görevlendirme: Personel yetersizliğinde komşu birimlerden yetkin personel çekebilme",
                            "İnteraktif Çizelge Matrisi: Hücre bazında manuel değişiklik, sürükle-bırak ve anlık kural denetimi",
                            "Aylık nöbet planını resmi yayına alma ve personelin Web Portalında anında ilan etme"
                    ],
                    "benefit": "Eski yöntemlerle günler süren nöbet planlama stresi 4 dakikaya iner; ekipte mutlak adalet algısı sağlanır."
            },
            {
                    "n": "09",
                    "tag": "09",
                    "name": "Nöbet Devir, İkame & Becayiş",
                    "fullTitle": "Nöbet Devir, İkame ve Acil Mazeret Yönetimi",
                    "desc": "3 aşamalı devir onayı, acil mazeret ikame sihirbazı ve Web Portal havuzu.",
                    "lead": "3 aşamalı devir onayı, acil ikame sihirbazı ve Web Portal havuzu.",
                    "icon": "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                    "img": "help/assets/img/09_nobet_devir_listesi.png",
                    "guideFile": "09_nobet_devir_ikame_ve_acil_mazeret.html",
                    "features": [
                            "3 Aşamalı Devir Zinciri: Devralan personel portal onayı ➔ Birim Sorumlusu ➔ Hizmet Sorumlusu",
                            "Web Portal Nöbet Değişim Havuzu: Personellerin vardiyalarını ilan edip karşılıklı becayiş yapabilmesi",
                            "Acil Mazeret ve Gebelik İkame Sihirbazı: Raporlu personelin boşalan nöbetlerine tek tıkla ikame atama",
                            "Nöbet devirlerinde yasal dinlenme süresi (16s/24s) aşım bariyeri"
                    ],
                    "benefit": "Sözlü nöbet takaslarının yarattığı kaos son bulur; tüm vardiya değişiklikleri resmi onay zincirinden geçer."
            },
            {
                    "n": "10",
                    "tag": "10",
                    "name": "Nöbet Borç/Alacak & FM",
                    "fullTitle": "Nöbet Borç / Alacak ve Fazla Mesai",
                    "desc": "Kıstelyevm hesaplama, 60s kurumsal kota, 130s yasal tavan ve Sudo dönem kilidi.",
                    "lead": "Kıstelyevm hedef hesaplama, 60s kurumsal kota ve Sudo dönem kilidi.",
                    "icon": "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    "img": "help/assets/img/10_nobet_borc_alacak_ana_tablo.png",
                    "guideFile": "10_nobet_borc_alacak_ve_fazla_mesai.html",
                    "features": [
                            "Kıstelyevm ve tatil düşümlü yasal hedef saat hesaplama; artı/eksi kümülatif bakiye renkleri",
                            "Bireysel FM Dağıtım Modalı (FMOdemeSecimDialog): 60s tükenmişlik önleme kotası veya 130s yasal tavan",
                            "Toplu işlem seçenekleri: Seçili ekibe tek tıkla kurumsal kota uygulama veya sonraki aya devretme",
                            "Kesinleşmiş dönem kilidi ve SudoDialogController yönetici şifresiyle güvenli düzeltme yetkisi",
                            "Mutemetlik için Normal FM ve Bayram FM ayrıştırılmış 5 sütunlu resmi bildirim cetveli"
                    ],
                    "benefit": "Fazla mesai bordro hesaplamaları şeffaflaşır; fazla mesai ödemeleri ve devirler sıfır muhasebe hatasıyla yürütülür."
            },
            {
                    "n": "11",
                    "tag": "11",
                    "name": "Fiili Hizmet & Şua Hesaplama",
                    "fullTitle": "Fiili Hizmet ve Şua Hakediş Hesaplama",
                    "desc": "Koşul A/B ayrımı, onaysız izin güvenlik bariyeri ve SGK puantaj cetveli.",
                    "lead": "Koşul A/B ayrımı, onaysız izin güvenlik bariyeri ve SGK puantajı.",
                    "icon": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    "img": "help/assets/img/11_1_fiili_hizmet_hesaplama_ana_ekran.png",
                    "guideFile": "11_fiili_hizmet_ve_sua_hesaplama.html",
                    "features": [
                            "3 Adımlı Sihirbaz: Görev Listesi Dağılımı ➔ Fiili Hizmet Hesaplama ➔ SGK Puantaj Raporu",
                            "Koşul A (7.0s radyasyonlu alan) ve Koşul B (8.0s idari alan) hibrit çalışma oranı ayrımı",
                            "Onaysız İzin Güvenlik Bariyeri: Taslak izinleri tespit ederek resmi hesaplama öncesi operatörü durdurma",
                            "Sıralı dönem kilidi ve Sistem Yöneticisi yetkili Yıllık Kilit ile cari yılı dondurma",
                            "SGK ve mutemetlik onaylı resmi Excel ve PDF puantaj rapor cetveli üretimi"
                    ],
                    "benefit": "Radyasyon çalışanlarının fiili hizmet zamları (FHZ) ve Şua izinleri kuruşu kuruşuna, günü gününe yasal güvencede."
            },
            {
                    "n": "12",
                    "tag": "12",
                    "name": "Dozimetre Takibi & RD.F43",
                    "fullTitle": "Dozimetre Takibi ve RD.F43 Doz Araştırma",
                    "desc": "Hp(10)/Hp(0.07)/Hp(3) doz analitiği, NDK 72s tahkikatı ve doz araştırma formu.",
                    "lead": "Hp(10)/Hp(0.07)/Hp(3) analitiği, NDK 72s süreci ve tahkikat formu.",
                    "icon": "M12 2v6M12 16v6M4 12h6M14 12h6M6.34 6.34l4.24 4.24M13.42 13.42l4.24 4.24M6.34 17.66l4.24-4.24M13.42 10.58l4.24-4.24",
                    "img": "help/assets/img/12_1_dozimetre_list.png",
                    "guideFile": "12_dozimetre_takibi_ve_rdf43_arastirma.html",
                    "features": [
                            "Hp(10) tüm vücut, Hp(0.07) cilt/göz ve Hp(3) ekstremite kümülatif doz ölçüm takibi",
                            "NDK Yıllık 20 mSv yasal sınırı ve aylık 2 mSv / 5 mSv anomali erken uyarı rozetleri",
                            "Yasal Tahkikat: 20 mSv aşımında otomatik 10 iş günü sayacı ve resmi RD.F43 Doz Araştırma Formu",
                            "Akredite dozimetre laboratuvarlarından (TAEK/NDK) Excel ve PDF toplu içe aktarma sihirbazı"
                    ],
                    "benefit": "Yıllık doz aşımı riski aylar öncesinden tespit edilir; NDK teftişlerinde 72 saatlik bildirim cezaları önlenir."
            },
            {
                    "n": "13",
                    "tag": "13",
                    "name": "Sağlık Muayeneleri & Taramalar",
                    "fullTitle": "Sağlık Muayeneleri ve Periyodik Taramalar",
                    "desc": "NDK 365 gün kuralı, Dahiliye/Dermatoloji/Göz onayları ve evrak kasası.",
                    "lead": "NDK 365 gün kuralı, branş uzman hekim onayları ve şifreli evrak.",
                    "icon": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                    "img": "help/assets/img/muayene_list.png",
                    "guideFile": "13_saglik_muayeneleri_ve_periyodik_takip.html",
                    "features": [
                            "İşe giriş, periyodik kontrol, şua izni öncesi ve doz aşımı sonrası özel sağlık taramaları",
                            "Dahiliye, Dermatoloji ve Göz branş uzman onaylarının ve tetkik bulgularının takibi",
                            "Süresi Dolan (<0 gün) ve Yaklaşan (0-30 gün) muayenelerde renk kodlu erken uyarılar",
                            "AES-256 şifreli dosya kasasında ıslak imzalı hekim raporu arşivleme ve tek tıkla önizleme"
                    ],
                    "benefit": "Radyasyon personelinin sağlık durumu 365 gün kesintisiz korunur; denetimlerde eksik muayene bulgusu çıkmaz."
            },
            {
                    "n": "14",
                    "tag": "14",
                    "name": "Ortam Dozu & İnteraktif Kroki",
                    "fullTitle": "Ortam Dozu, İnteraktif Kroki ve SKS 6.1",
                    "desc": "Mimari kat planında canlı pinler, QR pasaportu ve SKS 6.1 SRG11.02 Excel raporu.",
                    "lead": "Mimari planda canlı pinler, QR pasaportu ve SRG11.02 Excel raporu.",
                    "icon": "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                    "img": "help/assets/img/14_1_ortam_dozu_kroki_haritasi_ana_ekran.png",
                    "guideFile": "14_ortam_dozu_ve_kroki_haritasi.html",
                    "features": [
                            "Vektörel PDF / CAD mimari kat planını interaktif sahneye yükleme, sınırsız Zoom ve Pan",
                            "Denetimli, Gözetimli ve Halka Açık alan ölçüm pinleri üzerinde canlı radyasyon eşik analizi",
                            "Her ölçüm noktası için benzersiz QR pasaportu üretme ve mobil kamera ile sahada doz okuma",
                            "Tek tıkla Sağlık Bakanlığı SKS 6.1 SRG11.02 resmi denetim Excel çizelgesi üretimi"
                    ],
                    "benefit": "Hastanenin radyasyon sızıntı haritası canlı izlenir; kalite denetimlerinde teftiş heyetine interaktif kroki sunulur."
            },
            {
                    "n": "15",
                    "tag": "15",
                    "name": "Olay Bildirimi & DÖF (CAPA)",
                    "fullTitle": "Olay Bildirimi ve DÖF (CAPA) Yönetimi",
                    "desc": "Web Portal hızlı bildirim, kök neden analizi, CAPA aksiyonları ve NDK 72s sayacı.",
                    "lead": "Web Portal hızlı bildirim, kök neden analizi ve NDK 72s geri sayımı.",
                    "icon": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                    "img": "help/assets/img/15_1_olay_bildirim_ve_dof_yonetimi_ana_ekran.png",
                    "guideFile": "15_olay_bildirimi_ve_dof_capa.html",
                    "features": [
                            "Web Portalı üzerinden 3 adımda kolay, şeffaf ve anonim istenmeyen olay bildirimi",
                            "SKS 6.1 Uyumlu DÖF (Düzeltici Önleyici Faaliyet): Kök neden, aksiyon sorumlusu ve termin takibi",
                            "NDK 72 Saatlik Resmi Bildirim Sayacı: Süre aşımını engelleyen kırmızı/turuncu geri sayım rozetleri",
                            "Resmi kurumsal Olay İnceleme ve DÖF Faaliyet Değerlendirme Tutanağı çıktısı"
                    ],
                    "benefit": "Ramak kala olaylar ve kazalar hızla çözümlenir; kalite yönetim döngüsü ve yasal bildirimler sıfır ceza ile tamamlanır."
            },
            {
                    "n": "16",
                    "tag": "16",
                    "name": "RGS / RSO Görevlendirme",
                    "fullTitle": "RGS / RSO Görevlendirme ve Sertifika Takibi",
                    "desc": "Bakanlık & NDK yasal görevlendirmeleri, sertifika vize takibi ve resmi atama yazıları.",
                    "lead": "Bakanlık ve NDK görevlendirme yazıları, unvanlar ve vize takibi.",
                    "icon": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                    "img": "help/assets/img/16_1_rgs_gorevlendirme_ana_liste.png",
                    "guideFile": "16_rgs_rso_gorevlendirme_ve_sertifika.html",
                    "features": [
                            "Radyasyondan Korunma Sorumlusu (RKS) ve Radyasyon Güvenliği Sorumlusu (RGS) atama kayıtları",
                            "Sertifika türü, veriliş tarihi, geçerlilik süresi ve 60 günlük vize erken uyarı alarmları",
                            "Geçerli / Süresi Dolan / İptal Edilen görevlendirmelerin renk kodlu durum rozetleri",
                            "Resmi kurum içi görevlendirme ve Bakanlık onay yazılarının şifreli evrak kasasında saklanması"
                    ],
                    "benefit": "Kurumun radyasyon güvenliği organizasyon şeması yasal güvencede tutulur; yetki boşluğu oluşması engellenir."
            },
            {
                    "n": "17",
                    "tag": "17",
                    "name": "Hizmet İçi Eğitim & Sınav LMS",
                    "fullTitle": "Hizmet İçi Eğitim, SKS 6.1 Kalite Dokümanları ve Online Sınav LMS",
                    "desc": "Soru bankası, Excel import, Web video/PDF eğitimi ve online barajlı sınav motoru.",
                    "lead": "SKS 6.1 kalite entegrasyonu, soru havuzu, video/PDF oynatıcı ve online sınav.",
                    "icon": "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                    "img": "help/assets/img/17_1_1_hizmet_ici_egitim_uyum_matrisi.png",
                    "guideFile": "17_hizmet_ici_egitim_ve_online_sinav.html",
                    "features": [
                            "SKS 6.1 ve NDK RSGD-KLV-014 uyumlu T.1-T.11 'Kalite Dokümanları' zorunlu personel eğitimi entegrasyonu",
                            "4 seçenekli görselli soru bankası, Excel'den toplu soru yükleme ve eğitimler arası soru kopyalama",
                            "Web Portalı üzerinden personelin materyalleri inceleyip online sınava girmesi (%70 baraj puanı)",
                            "Kurum geneli Personel-Eğitim Çapraz Uyum Matrisi (Compliance Matrix) ve renkli Excel raporu"
                    ],
                    "benefit": "Zorunlu radyasyon güvenliği eğitimleri sıfır kağıtla tamamlanır; sertifikalandırma süreci otomatik yürütülür."
            },
            {
                    "n": "18",
                    "tag": "18",
                    "name": "Tıbbi Cihaz & NDK Lisans",
                    "fullTitle": "Tıbbi Cihaz, NDK Lisansı ve RKP Başvuru Motoru",
                    "desc": "4 renkli lisans rozeti, akıllı kod üreteci, kroki pinleme ve resmi NDK çizelgesi.",
                    "lead": "NDK RSGD-KLV-014 RKP sihirbazı, 4 renkli lisans rozeti ve mühürlü HEK arşivi.",
                    "icon": "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                    "img": "help/assets/img/18_1_cihaz_envanteri_yonetimi.png",
                    "guideFile": "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html",
                    "features": [
                            "NDK RSGD-KLV-014 ve KLV-014-EK 8 adımlı RKP Başvuru Sihirbazı ile resmi dosya üretimi (KB.1 - KB.8)",
                            "4 Renkli NDK Lisans Vize Takibi: Yeşil (>60g), Sarı (16-60g), Turuncu (0-15g) ve Kırmızı (<0g)",
                            "Akıllı Cihaz Kodu Generator (XRAY-RAD-BT-01) ve mimari kat planına pin yerleştirip kilitleme",
                            "İki Aşamalı HEK & Tasfiye Süreci: Heyet Ön İnceleme Tutanağı ve EBYS mühürlü nihai tasfiye PDF dosyası",
                            "Kullanım kılavuzları ve zırhlama raporları için AES-256 şifreli evrak kasası ve resmi NDK Excel çizelgesi"
                    ],
                    "benefit": "Hastanenin tüm radyolojik donanımı haritada kayıtlıdır; NDK RKP başvuru ve lisanslama süreçleri tek tıkla yürütülür."
            },
            {
                    "n": "19",
                    "tag": "19",
                    "name": "Cihaz Arıza & QC Kalibrasyon",
                    "fullTitle": "Cihaz Arıza, Bakım ve Kalite Kontrol (QC)",
                    "desc": "Tüp değişimi senkronizasyonu, QC başarısızlık kilidi ve mobil QR arıza konsolu.",
                    "lead": "Tüp değişimi senkronizasyonu, QC karantina kilidi ve mobil QR arıza.",
                    "icon": "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                    "img": "help/assets/img/19_1_cihaz_ariza_bakim_ve_kalite_kontrol_qc.png",
                    "guideFile": "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html",
                    "features": [
                            "Arıza Bildirimi: Benzersiz ARZ-YYYY-XXX takip kodu ve cihazın otomatik 'Arızalı' statüsüne geçmesi",
                            "X-Işını Tüp Değişimi Entegrasyonu: Servis müdahalesinde yeni tüp seri no'sunu cihaz künyesine otomatik işleme",
                            "QC Test Takibi: Günlük, Aylık, Yıllık Kalibrasyon ve Zırhlama testlerinin 3 renkli geçerlilik rozetleri",
                            "RED-UI-CIHAZ-01 Güvenlik Kilidi: Test sonucu 'Uygun Değil' girildiğinde cihazı anında karantinaya alma",
                            "Web Portalı Saha Mobil Konsolu: 6 arıza semptom kategorisi ve QR kod okutarak hızlı servis müdahalesi"
                    ],
                    "benefit": "Cihaz duruş süreleri en aza iner; standart dışı radyasyon yayan cihazların hasta çekiminde kullanılması engellenir."
            },
            {
                    "n": "20",
                    "tag": "20",
                    "name": "Koruyucu Ekipman (RKE)",
                    "fullTitle": "Radyasyon Koruyucu Ekipman (RKE) & DIN 6857",
                    "desc": "DIN 6857-1 skopi SVG krokisi, mm² kusur analiz motoru ve SKS 6.1 Excel cetveli.",
                    "lead": "Skopi SVG kusur krokisi, mm² karar motoru ve SKS 6.1 Excel cetveli.",
                    "icon": "M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z",
                    "img": "help/assets/img/20_rke_ana_yonetim.png",
                    "guideFile": "20_rke_koruyucu_ekipman_ve_din6857.html",
                    "features": [
                            "Önlük, tiroid, gonad, gözlük ve paravan envanteri; RKE-Ö-RAD-001 formatında akıllı kodlama",
                            "DIN 6857-1 / SKS 6.1 Skopi Muayenesi: İnteraktif SVG vücut silüeti üzerinde tıklayarak delik/çatlak pini koyma",
                            "Otomatik Matematik Karar Motoru: Kritik bölgede >0 mm² ise HEK; non-kritikte ≤5 mm² Uygun, 5-15 mm² Şartlı, >15 mm² HEK",
                            "10+ Yıl Yaş Kuralı: 10 yaşını dolduran kurşun kompozit donanımları otomatik hurdaya ayırma",
                            "Toplu Muayene Kokpiti, RKS çift aşamalı mühürleme ve Sağlık Bakanlığı SKS 6.1 resmi Excel cetveli"
                    ],
                    "benefit": "Delinmiş veya yırtılmış kurşun önlük kullanımı tamamen engellenir; çalışan sağlığı uluslararası normlarla korunur."
            },
            {
                    "n": "21",
                    "tag": "21",
                    "name": "Merkezi Onaylar & Diff View",
                    "fullTitle": "Merkezi Onay Bekleyen Görevler Paneli ve Görsel Diff",
                    "desc": "5 sekmeli kurumsal onay kuyruğu, 4-göz görsel Diff View karşılaştırması ve toplu onay.",
                    "lead": "5 sekmeli onay paneli, 4-göz görsel Diff karşılaştırması ve yetki denetimi.",
                    "icon": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                    "img": "help/assets/img/modul21_onay_merkezi.png",
                    "guideFile": "21_merkezi_onaylar.html",
                    "features": [
                            "5 Onay Kategorisi: İzin Talepleri, Nöbet Devirleri, Nöbet İstekleri, Nöbet Planları ve Veri Değişiklikleri",
                            "Görsel Diff Dialog: 4-göz kuralında eski (kırmızı) ve yeni (yeşil) değerleri yan yana karşılaştırıp onaylama",
                            "Birim Sorumlusu ve Hizmet Sorumlusu kademeli onay hiyerarşisi ve ret gerekçesi zorunluluğu",
                            "Çoklu seçimle toplu onaylama/reddetme ve işlem anında ilgili modül tablolarını canlı güncelleme"
                    ],
                    "benefit": "Tüm yönetimsel onaylar tek panelde toplanır; 4-göz ilkesiyle yetkisiz veri değişiklikleri tam denetim altına alınır."
            },
            {
                    "n": "22",
                    "tag": "22",
                    "name": "Web Portalı & Dashboardlar",
                    "fullTitle": "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
                    "desc": "20 analitik yönetici panosu, 60s akıllı bellek önbelleği ve mobil PWA saha erişimi.",
                    "lead": "20 analitik dashboard, 60s akıllı önbellek ve karar destek grafikleri.",
                    "icon": "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                    "img": "help/assets/img/web_portal_genel_dashboard.png",
                    "guideFile": "22_web_portal_ve_dashboardlar.html",
                    "features": [
                            "20 Modüler Gösterge Paneli: Nöbet Dağılımı, Dozimetre Risk Trendi, Sağlık & SKS Uyumu, RKE Kusur Haritası ve Cihaz Duruş Süresi",
                            "60 Saniye In-Memory Akıllı Önbellek: Ağır analitik sorguları bellekten 10ms altında ultra hızlı yanıtlama",
                            "Bağımsız Sunucu İzleyici: Masaüstü durum çubuğundan 8s döngüyle Port 3000 sağlık kontrolü ve otomatik başlatma",
                            "Zorlamalı Yenileme (Bypass Cache): Yönetici tek tıkla canlı veritabanı sorgusunu tetikleme yetkisi",
                            "Excel ve PDF Dışa Aktarma: Tüm dashboard grafik ve tablolarını tek tıkla raporlama"
                    ],
                    "benefit": "Radyoloji ve nükleer tıp kliniklerinin tüm yönetimsel ve operasyonel nabzı tek ekranda; anlık karar desteğiyle sıfır risk."
            },
            {
                    "n": "23",
                    "tag": "23",
                    "name": "Rapor & Tutanak Merkezi",
                    "fullTitle": "Raporlama ve Tutanak Yönetim Merkezi",
                    "desc": "26 resmi SKS/NDK raporu, Evrensel Tutanak Sihirbazı, Şablon Stüdyosu ve 2 aşamalı HEK mührü.",
                    "lead": "26 resmi mevzuat raporu, Evrensel Tutanak Sihirbazı ve 2 aşamalı SHA-256 HEK mühürleme.",
                    "icon": "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                    "img": "help/assets/img/21_rapor_merkezi_kokpit.png",
                    "guideFile": "23_rapor_tutanak_merkezi.html",
                    "features": [
                            "Doğru İşe Tek Format Standardı: Analitik tablolar için Excel (.xlsx), kanuni tutanaklar için kilitli PDF, RKP taslağı için Word",
                            "Evrensel Tutanak ve Komisyon Karar Sihirbazı: Çoklu cihaz/RKE için tek belgede gerekçe, döküm tablosu, karar ve imza heyeti",
                            "İki Aşamalı HEK & Tasfiye Döngüsü: Heyet Ön İnceleme Tutanağı ve EBYS üst yazısıyla SHA-256 mühürlü nihai tasfiye PDF'i",
                            "Şablon Tasarım Stüdyosu: Tıklanabilir dinamik değişken butonları (+{{tarih}}, +{{kurum_adi}} vb.) ile canlı şablon geliştirme",
                            "Akıllı Sayfa Yönlendirme: ≤6 sütunlu tablolarda Dikey A4, >6 sütunlu geniş tablolarda otomatik Yatay A4 PDF dökümü"
                    ],
                    "benefit": "Çoklu ekipman ve komisyon kararları tek resmi PDF tutanakta birleşir; SKS 6.1 ve NDK denetim raporları saniyeler içinde üretilir."
            }
    ];

    const FUTURE_MODULES = [
            {
                    "badge": "FAZ 1 — Altyapı Hazır",
                    "badgeColor": "border-teal-500/30 text-teal-400 bg-teal-500/10",
                    "name": "Saha / Tablet QR-Barkod Muayene & Hızlı Envanter Asistanı",
                    "highlight": "Tablet QR/Barkod, DIN 6857-1 & Çevrimdışı PWA",
                    "desc": "Medikal Fizikçiler için sahada doğrudan tablet kamerasıyla QR/Barkod okutma, skopi altındaki kurşun önlük ve paravan kusurlarını interaktif krokide işaretleme, fotoğraf ekleme ve anlık senkronizasyon.",
                    "tag": "RKE Muayene & Saha Asistanı"
            },
            {
                    "badge": "FAZ 2 — Foundation AI",
                    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
                    "name": "Google TimesFM ile Yapay Zekâlı Doz Trend Tahmini & Rotasyon",
                    "highlight": "1 Trilyon Verili Zero-Shot Transformer",
                    "desc": "Google Research TimesFM foundation modeliyle sıfır ek model eğitimiyle 6 ay önceden 20 mSv limit aşımı uyarısı, çok değişkenli risk analizi ve radyasyonsuz birimlere akıllı rotasyon önerisi.",
                    "tag": "Zero-Shot AI & Klinik Rotasyon"
            },
            {
                    "badge": "FAZ 3 — Denetim Simülatörü",
                    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
                    "name": "NDK & SKS 6.1 Otomatik Denetim Simülatörü & Risk Karnesi",
                    "highlight": "100 Puanlık Resmi Denetim Hazırlık Motoru",
                    "desc": "Tek tıkla tüm kurumu tarayarak süresi dolan lisans, eksik kalibrasyon, muayenesiz kurşun önlük, eksik şua izni ve kaza bildirimlerini analiz eden resmi denetim karnesi ve hazırlık raporu motoru.",
                    "tag": "NDK & SKS 6.1 Denetim Motoru"
            }
    ];

    Object.assign(window.RADPYS, {
        MODULES,
        FUTURE_MODULES
    });
})();
