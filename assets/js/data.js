/* ==========================================================================
   RADPYS V4 — Merkezi Veri & Sayfa İçeriği Katmanı (Single Source of Truth)
   --------------------------------------------------------------------------
   Tüm kök sayfaların (index, moduller, fiyatlandirma, gelistirme-planlari,
   hakkimizda, referanslar, kaynaklar, iletisim) metinleri, modül kataloğu,
   yol haritası fazları, fiyat paketleri, SSS ve kurumsal bilgileri burada
   tek merkezde tutulur.
   ========================================================================== */

(function () {
    const VERSION_INFO = {
        version: "4.0.5.7",
        series: "V4.0.5",
        release_date: "2026-10-30",
        download_url: "https://download.radpys.com.tr/releases/RADPYS_Setup_latest.exe",
        changelog_sections: 74
    };

    const SITE_CONFIG = {
        brandName: "RADPYS",
        siteUrl: "https://radpys.com.tr",
        downloadUrl: VERSION_INFO.download_url,
        contact: {
            email: "radpys.iletisim@gmail.com",
            phone: "+90 312 000 00 00",
            address: "Cyberpark Teknoloji Geliştirme Bölgesi, Bilkent, Ankara",
            cityTag: "Ankara / TR",
            coords: "39.90° K · 32.85° D",
            googleScriptUrl: "https://script.google.com/macros/s/AKfycbyZqr30B2-7LR8TerL6G71biIAAUHuye333Pd5gFut56PvvxquLWg7Tq-3q6Sb0mm0H/exec"
        },
        socials: {
            linkedin: "https://www.linkedin.com/in/cem-kara-633b11429",
            facebook: "https://www.facebook.com/profile.php?id=61593139902770",
            youtube: "https://www.youtube.com/@RADPYS_V4"
        },
        navLinks: [
            { href: "moduller.html", label: "Modüller" },
            { href: "gelistirme-planlari.html", label: "Yol Haritası" },
            { href: "fiyatlandirma.html", label: "Fiyatlandırma" },
            { href: "help/index.html", label: "Dokümanlar" },
            { href: "kaynaklar.html", label: "Kaynaklar" },
            { href: "hakkimizda.html", label: "Hakkımızda" },
            { href: "iletisim.html", label: "İletişim" }
        ]
    };

    /* ----------------------------------------------------------------------
       23 ENTEGRE MODÜL KATALOĞU (Hem Ana Sayfa Bento Hem Modüller Sayfası)
       ---------------------------------------------------------------------- */
    const MODULES = [
        {
            n: "01",
            tag: "01",
            name: "Kurulum & İlk Giriş",
            fullTitle: "Kurulum, Başlatma ve İlk Giriş",
            desc: "Win32 tekil kilit, Ed25519 lisanslama, parola politikası ve Ctrl+K Evrensel Arama.",
            lead: "Win32 tekil kilit, Ed25519 lisanslama ve Evrensel Arama.",
            icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
            img: "help/assets/img/01_login_page.png",
            guideFile: "01_kurulum_ve_ilk_giris.html",
            features: [
                "Win32 API tabanlı tekil uygulama kilidi (Local\\RADPYS_V4_MAIN_APP_MUTEX) ile çoklu çakışmaları engelleme",
                "Ed25519 asimetrik kriptografi ile çevrimdışı doğrulanabilir kurum lisans kontrolü",
                "İlk girişte zorunlu parola değişimi, karmaşıklık politikası ve Şifremi Unuttum e-posta sıfırlama",
                "Ctrl+K kısayoluyla çalışan hızlı Evrensel Arama (Command Palette) ve animasyonlu bildirim merkezi"
            ],
            benefit: "Veri tabanı bağlantı güvenliği, UAC servis başlatma ve tekil oturum garantisi ile sorunsuz başlangıç sağlar."
        },
        {
            n: "02",
            tag: "02",
            name: "Kullanıcı & Rol Yönetimi",
            fullTitle: "Kullanıcı ve Rol Yönetimi (RBAC)",
            desc: "RBAC yetki matrisi, 4-göz veri onay kuralı ve güvenli oturum yönetimi.",
            lead: "Çok katmanlı rol hiyerarşisi ve 4-Göz denetim ilkesi.",
            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
            img: "help/assets/img/02_kullanici_yonetim_page.png",
            guideFile: "02_kullanici_ve_rol_yonetimi.html",
            features: [
                "12 sistem rolü ve her modül için bağımsız CRUD (Okuma, Yazma, Güncelleme, Silme) matrisi",
                "4-Göz İlkesi: Yetkisiz personelin kritik veri girişlerini yönetici onay kuyruğuna düşürme",
                "Birim bazlı dinamik görünürlük filtreleri ve geçici görevlendirme yetki devri",
                "Kullanıcı aktivasyon/pasifasyon yönetimi ve oturum zaman aşımı kontrolleri"
            ],
            benefit: "Hastanenin hiyerarşik yapısına tam uyumlu yetkilendirme sağlar; izinsiz müdahaleleri kaynağında engeller."
        },
        {
            n: "03",
            tag: "03",
            name: "Sistem Ayarları & Tanımlar",
            fullTitle: "Sistem Ayarları ve Dinamik Tanımlamalar",
            desc: "Hiyerarşik departmanlar, kurumsal çift logo ve Word antet şablon motoru.",
            lead: "Kurumsal kimlik, antetli şablonlar ve esnek lookuplar.",
            icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
            img: "help/assets/img/03_templates_page.png",
            guideFile: "03_sistem_ayarlari_ve_tanimlamalar.html",
            features: [
                "Kurum Başlık 1-2 ve çift logo entegrasyonu ile resmi Word ve PDF belgelerine dinamik antet basımı",
                "Ağaç yapısında hiyerarşik departmanlar, alt servisler ve sorumlu amir eşlemeleri",
                "Mimari kat planı krokilerini departmanlarla ilişkilendirme ve ölçeklendirme",
                "Tıbbi cihaz türleri, koruyucu ekipman sınıfları ve tatil takvimi dinamik parametreleri"
            ],
            benefit: "Kurum kimliği değişimlerinde tüm matbu evraklar tek merkezden güncellenir; kod müdahalesine gerek kalmaz."
        },
        {
            n: "04",
            tag: "04",
            name: "Veritabanı Bakım & Güvenlik",
            fullTitle: "Veritabanı Bakım, Güvenlik ve Denetim İzi",
            desc: "PostgreSQL pg_dump yedekleme, WAL arşivleme, KVKK AES-256 ve SHA-256 denetim izi.",
            lead: "Otomatik pg_dump, WAL arşivleme ve AES-256 şifreli evrak kasası.",
            icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
            img: "help/assets/img/04_veritabani_bakim_ve_guvenlik.png",
            guideFile: "04_veritabani_bakim_ve_guvenlik.html",
            features: [
                "Otomatik ve manuel PostgreSQL pg_dump tam veritabanı yedekleme ve tek tıkla geri yükleme",
                "KVKK 6698 uyumlu AES-256 Fernet şifreleme ile sağlık raporlarını ve belgeleri stored_files kasasında saklama",
                "Kriptografik SHA-256 zinciriyle mühürlenen değiştirilemez sistem denetim izi (Audit Trail)",
                "Büyük veri tabloları için VACUUM, ANALYZE ve indeks yeniden oluşturma bakım sihirbazı"
            ],
            benefit: "Veri kaybı riskini sıfıra indirir; KVKK ve resmi teftişlerde kriptografik kanıt niteliğinde log sunar."
        },
        {
            n: "05",
            tag: "05",
            name: "Personel Yönetimi & İçe Aktar",
            fullTitle: "Personel Yönetimi ve Toplu İçe Aktarım",
            desc: "Dinamik özlük kartı, Excel toplu aktarım motoru ve KVKK Madde 11 ZIP ihracı.",
            lead: "Dinamik özlük kartı, sinonim eşlemeli Excel aktarımı ve KVKK ihracı.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            img: "help/assets/img/05_personel_list.png",
            guideFile: "05_personel_yonetimi_ve_toplu_aktarim.html",
            features: [
                "Personel özlük kartı, mezuniyet, unvan, radyasyon çalışma sınıfı (A/B) ve T.C. doğrulama",
                "Akıllı Excel İçe Aktarma Motoru: Sütun ve unvan sinonimlerini otomatik eşleyerek yüzlerce personeli tek seferde yükleme",
                "KVKK Madde 11 Kişisel Veri İhraç Paketi: Tek tıkla personelin tüm geçmişini ve şifreli evraklarını ZIP indirme",
                "Dinamik arama, birim hiyerarşisi filtreleme ve fotoğraf yükleme desteği"
            ],
            benefit: "Personel havuzu dakikalar içinde sisteme aktarılır; özlük ve radyasyon sicili tek kartta birleşir."
        },
        {
            n: "06",
            tag: "06",
            name: "İzin Yönetimi & Şua Hakediş",
            fullTitle: "İzin Yönetimi ve Şua Hakedişleri",
            desc: "35s/40s bazlı şua bakiye motoru, 2 aşamalı onay akışı ve cari yıl koruma kilidi.",
            lead: "35s/40s hibrit oranlı şua motoru ve 2-aşamalı onay akışı.",
            icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
            img: "help/assets/img/izin_list.png",
            guideFile: "06_izin_yonetimi_ve_hakedis.html",
            features: [
                "Yıllık, Şua, mazeret, sağlık raporu ve analık izinleri için merkezi takip",
                "2-Aşamalı İzin Onay Zinciri: Ön Onaylı (nöbet planlamasını kilitler) ve Resmi Onaylı",
                "Cari Takvim Yılı Koruması: Şua izinlerinin ertesi yıla devretmesini engelleyen yasal uyarılar",
                "Web Portalı üzerinden personelin izin talebi açabilmesi ve amirin anlık onaylayabilmesi"
            ],
            benefit: "İzin çakışmaları sıfıra iner; Sağlık (Şua) izni hak kayıpları ve zamanaşımı riskleri tamamen önlenir."
        },
        {
            n: "07",
            tag: "07",
            name: "Nöbet Ayarları & Kısıtlar",
            fullTitle: "Nöbet Ayarları ve Kısıt Hiyerarşisi",
            desc: "Sert/yumuşak kısıt hiyerarşisi, adalet ağırlıkları ve slot bazlı kural tablosu.",
            lead: "Sert/yumuşak kısıtlar, adalet ağırlıkları ve slot bazlı kurallar.",
            icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
            img: "help/assets/img/nobet_ayarlar_main.png",
            guideFile: "07_nobet_ayarlari_ve_kisit_hiyerarsisi.html",
            features: [
                "Haftalık 35 saat (Radyasyon) ve 40 saat (İdari) standart çalışma parametreleri",
                "Sert Kısıtlar (Yasal Zorunluluk): 24s dinlenme, süt izni, gebelik ve 25 yıl kıdem muafiyeti",
                "Yumuşak Kısıtlar & Adalet Ağırlıkları: Hafta sonu ve resmi bayram nöbetlerinin ekip içinde eşit dağıtımı",
                "Birim ve slot bazında asgari tekniker sayısı, modalite yetkinliği ve nöbet tipleri"
            ],
            benefit: "Yönetici nöbet kurallarını esnekçe belirler; solver motoru hiçbir personelin hakkını çiğnemeden plan üretir."
        },
        {
            n: "08",
            tag: "08",
            name: "Nöbet Hazırlık & Solver",
            fullTitle: "Nöbet Hazırlık ve Solver Optimizasyon Motoru",
            desc: "CP-SAT matematiksel optimizasyon, çapraz görevlendirme ve çizelge matrisi.",
            lead: "Google OR-Tools CP-SAT motoru ile saniyeler içinde adil çizelge.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            img: "help/assets/img/08_nobet_cizelge_dialog.png",
            guideFile: "08_nobet_hazirlik_ve_solver_motoru.html",
            features: [
                "Matematiksel CP-SAT kısıt çözücü motor ile saniyeler içinde binlerce değişkeni optimize etme",
                "Çapraz Görevlendirme: Personel yetersizliğinde komşu birimlerden yetkin personel çekebilme",
                "İnteraktif Çizelge Matrisi: Hücre bazında manuel değişiklik, sürükle-bırak ve anlık kural denetimi",
                "Aylık nöbet planını resmi yayına alma ve personelin Web Portalında anında ilan etme"
            ],
            benefit: "Eski yöntemlerle günler süren nöbet planlama stresi 4 dakikaya iner; ekipte mutlak adalet algısı sağlanır."
        },
        {
            n: "09",
            tag: "09",
            name: "Nöbet Devir, İkame & Becayiş",
            fullTitle: "Nöbet Devir, İkame ve Acil Mazeret Yönetimi",
            desc: "3 aşamalı devir onayı, acil mazeret ikame sihirbazı ve Web Portal havuzu.",
            lead: "3 aşamalı devir onayı, acil ikame sihirbazı ve Web Portal havuzu.",
            icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
            img: "help/assets/img/09_nobet_devir_listesi.png",
            guideFile: "09_nobet_devir_ikame_ve_acil_mazeret.html",
            features: [
                "3 Aşamalı Devir Zinciri: Devralan personel portal onayı ➔ Birim Sorumlusu ➔ Hizmet Sorumlusu",
                "Web Portal Nöbet Değişim Havuzu: Personellerin vardiyalarını ilan edip karşılıklı becayiş yapabilmesi",
                "Acil Mazeret ve Gebelik İkame Sihirbazı: Raporlu personelin boşalan nöbetlerine tek tıkla ikame atama",
                "Nöbet devirlerinde yasal dinlenme süresi (16s/24s) aşım bariyeri"
            ],
            benefit: "Sözlü nöbet takaslarının yarattığı kaos son bulur; tüm vardiya değişiklikleri resmi onay zincirinden geçer."
        },
        {
            n: "10",
            tag: "10",
            name: "Nöbet Borç/Alacak & FM",
            fullTitle: "Nöbet Borç / Alacak ve Fazla Mesai",
            desc: "Kıstelyevm hesaplama, 60s kurumsal kota, 130s yasal tavan ve Sudo dönem kilidi.",
            lead: "Kıstelyevm hedef hesaplama, 60s kurumsal kota ve Sudo dönem kilidi.",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            img: "help/assets/img/10_nobet_borc_alacak_ana_tablo.png",
            guideFile: "10_nobet_borc_alacak_ve_fazla_mesai.html",
            features: [
                "Kıstelyevm ve tatil düşümlü yasal hedef saat hesaplama; artı/eksi kümülatif bakiye renkleri",
                "Bireysel FM Dağıtım Modalı (FMOdemeSecimDialog): 60s tükenmişlik önleme kotası veya 130s yasal tavan",
                "Toplu işlem seçenekleri: Seçili ekibe tek tıkla kurumsal kota uygulama veya sonraki aya devretme",
                "Kesinleşmiş dönem kilidi ve SudoDialogController yönetici şifresiyle güvenli düzeltme yetkisi",
                "Mutemetlik için Normal FM ve Bayram FM ayrıştırılmış 5 sütunlu resmi bildirim cetveli"
            ],
            benefit: "Fazla mesai bordro hesaplamaları şeffaflaşır; fazla mesai ödemeleri ve devirler sıfır muhasebe hatasıyla yürütülür."
        },
        {
            n: "11",
            tag: "11",
            name: "Fiili Hizmet & Şua Hesaplama",
            fullTitle: "Fiili Hizmet ve Şua Hakediş Hesaplama",
            desc: "Koşul A/B ayrımı, onaysız izin güvenlik bariyeri ve SGK puantaj cetveli.",
            lead: "Koşul A/B ayrımı, onaysız izin güvenlik bariyeri ve SGK puantajı.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            img: "help/assets/img/11_1_fiili_hizmet_hesaplama_ana_ekran.png",
            guideFile: "11_fiili_hizmet_ve_sua_hesaplama.html",
            features: [
                "3 Adımlı Sihirbaz: Görev Listesi Dağılımı ➔ Fiili Hizmet Hesaplama ➔ SGK Puantaj Raporu",
                "Koşul A (7.0s radyasyonlu alan) ve Koşul B (8.0s idari alan) hibrit çalışma oranı ayrımı",
                "Onaysız İzin Güvenlik Bariyeri: Taslak izinleri tespit ederek resmi hesaplama öncesi operatörü durdurma",
                "Sıralı dönem kilidi ve Sistem Yöneticisi yetkili Yıllık Kilit ile cari yılı dondurma",
                "SGK ve mutemetlik onaylı resmi Excel ve PDF puantaj rapor cetveli üretimi"
            ],
            benefit: "Radyasyon çalışanlarının fiili hizmet zamları (FHZ) ve Şua izinleri kuruşu kuruşuna, günü gününe yasal güvencede."
        },
        {
            n: "12",
            tag: "12",
            name: "Dozimetre Takibi & RD.F43",
            fullTitle: "Dozimetre Takibi ve RD.F43 Doz Araştırma",
            desc: "Hp(10)/Hp(0.07)/Hp(3) doz analitiği, NDK 72s tahkikatı ve doz araştırma formu.",
            lead: "Hp(10)/Hp(0.07)/Hp(3) analitiği, NDK 72s süreci ve tahkikat formu.",
            icon: "M12 2v6M12 16v6M4 12h6M14 12h6M6.34 6.34l4.24 4.24M13.42 13.42l4.24 4.24M6.34 17.66l4.24-4.24M13.42 10.58l4.24-4.24",
            img: "help/assets/img/12_1_dozimetre_list.png",
            guideFile: "12_dozimetre_takibi_ve_rdf43_arastirma.html",
            features: [
                "Hp(10) tüm vücut, Hp(0.07) cilt/göz ve Hp(3) ekstremite kümülatif doz ölçüm takibi",
                "NDK Yıllık 20 mSv yasal sınırı ve aylık 2 mSv / 5 mSv anomali erken uyarı rozetleri",
                "Yasal Tahkikat: 20 mSv aşımında otomatik 10 iş günü sayacı ve resmi RD.F43 Doz Araştırma Formu",
                "Akredite dozimetre laboratuvarlarından (TAEK/NDK) Excel ve PDF toplu içe aktarma sihirbazı"
            ],
            benefit: "Yıllık doz aşımı riski aylar öncesinden tespit edilir; NDK teftişlerinde 72 saatlik bildirim cezaları önlenir."
        },
        {
            n: "13",
            tag: "13",
            name: "Sağlık Muayeneleri & Taramalar",
            fullTitle: "Sağlık Muayeneleri ve Periyodik Taramalar",
            desc: "NDK 365 gün kuralı, Dahiliye/Dermatoloji/Göz onayları ve evrak kasası.",
            lead: "NDK 365 gün kuralı, branş uzman hekim onayları ve şifreli evrak.",
            icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            img: "help/assets/img/muayene_list.png",
            guideFile: "13_saglik_muayeneleri_ve_periyodik_takip.html",
            features: [
                "İşe giriş, periyodik kontrol, şua izni öncesi ve doz aşımı sonrası özel sağlık taramaları",
                "Dahiliye, Dermatoloji ve Göz branş uzman onaylarının ve tetkik bulgularının takibi",
                "Süresi Dolan (<0 gün) ve Yaklaşan (0-30 gün) muayenelerde renk kodlu erken uyarılar",
                "AES-256 şifreli dosya kasasında ıslak imzalı hekim raporu arşivleme ve tek tıkla önizleme"
            ],
            benefit: "Radyasyon personelinin sağlık durumu 365 gün kesintisiz korunur; denetimlerde eksik muayene bulgusu çıkmaz."
        },
        {
            n: "14",
            tag: "14",
            name: "Ortam Dozu & İnteraktif Kroki",
            fullTitle: "Ortam Dozu, İnteraktif Kroki ve SKS 6.1",
            desc: "Mimari kat planında canlı pinler, QR pasaportu ve SKS 6.1 SRG11.02 Excel raporu.",
            lead: "Mimari planda canlı pinler, QR pasaportu ve SRG11.02 Excel raporu.",
            icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
            img: "help/assets/img/14_1_ortam_dozu_kroki_haritasi_ana_ekran.png",
            guideFile: "14_ortam_dozu_ve_kroki_haritasi.html",
            features: [
                "Vektörel PDF / CAD mimari kat planını interaktif sahneye yükleme, sınırsız Zoom ve Pan",
                "Denetimli, Gözetimli ve Halka Açık alan ölçüm pinleri üzerinde canlı radyasyon eşik analizi",
                "Her ölçüm noktası için benzersiz QR pasaportu üretme ve mobil kamera ile sahada doz okuma",
                "Tek tıkla Sağlık Bakanlığı SKS 6.1 SRG11.02 resmi denetim Excel çizelgesi üretimi"
            ],
            benefit: "Hastanenin radyasyon sızıntı haritası canlı izlenir; kalite denetimlerinde teftiş heyetine interaktif kroki sunulur."
        },
        {
            n: "15",
            tag: "15",
            name: "Olay Bildirimi & DÖF (CAPA)",
            fullTitle: "Olay Bildirimi ve DÖF (CAPA) Yönetimi",
            desc: "Web Portal hızlı bildirim, kök neden analizi, CAPA aksiyonları ve NDK 72s sayacı.",
            lead: "Web Portal hızlı bildirim, kök neden analizi ve NDK 72s geri sayımı.",
            icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
            img: "help/assets/img/15_1_olay_bildirim_ve_dof_yonetimi_ana_ekran.png",
            guideFile: "15_olay_bildirimi_ve_dof_capa.html",
            features: [
                "Web Portalı üzerinden 3 adımda kolay, şeffaf ve anonim istenmeyen olay bildirimi",
                "SKS 6.1 Uyumlu DÖF (Düzeltici Önleyici Faaliyet): Kök neden, aksiyon sorumlusu ve termin takibi",
                "NDK 72 Saatlik Resmi Bildirim Sayacı: Süre aşımını engelleyen kırmızı/turuncu geri sayım rozetleri",
                "Resmi kurumsal Olay İnceleme ve DÖF Faaliyet Değerlendirme Tutanağı çıktısı"
            ],
            benefit: "Ramak kala olaylar ve kazalar hızla çözümlenir; kalite yönetim döngüsü ve yasal bildirimler sıfır ceza ile tamamlanır."
        },
        {
            n: "16",
            tag: "16",
            name: "RGS / RSO Görevlendirme",
            fullTitle: "RGS / RSO Görevlendirme ve Sertifika Takibi",
            desc: "Bakanlık & NDK yasal görevlendirmeleri, sertifika vize takibi ve resmi atama yazıları.",
            lead: "Bakanlık ve NDK görevlendirme yazıları, unvanlar ve vize takibi.",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            img: "help/assets/img/16_1_rgs_gorevlendirme_ana_liste.png",
            guideFile: "16_rgs_rso_gorevlendirme_ve_sertifika.html",
            features: [
                "Radyasyondan Korunma Sorumlusu (RKS) ve Radyasyon Güvenliği Sorumlusu (RGS) atama kayıtları",
                "Sertifika türü, veriliş tarihi, geçerlilik süresi ve 60 günlük vize erken uyarı alarmları",
                "Geçerli / Süresi Dolan / İptal Edilen görevlendirmelerin renk kodlu durum rozetleri",
                "Resmi kurum içi görevlendirme ve Bakanlık onay yazılarının şifreli evrak kasasında saklanması"
            ],
            benefit: "Kurumun radyasyon güvenliği organizasyon şeması yasal güvencede tutulur; yetki boşluğu oluşması engellenir."
        },
        {
            n: "17",
            tag: "17",
            name: "Hizmet İçi Eğitim & Sınav LMS",
            fullTitle: "Hizmet İçi Eğitim, SKS 6.1 Kalite Dokümanları ve Online Sınav LMS",
            desc: "Soru bankası, Excel import, Web video/PDF eğitimi ve online barajlı sınav motoru.",
            lead: "SKS 6.1 kalite entegrasyonu, soru havuzu, video/PDF oynatıcı ve online sınav.",
            icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
            img: "help/assets/img/17_1_1_hizmet_ici_egitim_uyum_matrisi.png",
            guideFile: "17_hizmet_ici_egitim_ve_online_sinav.html",
            features: [
                "SKS 6.1 ve NDK RSGD-KLV-014 uyumlu T.1-T.11 'Kalite Dokümanları' zorunlu personel eğitimi entegrasyonu",
                "4 seçenekli görselli soru bankası, Excel'den toplu soru yükleme ve eğitimler arası soru kopyalama",
                "Web Portalı üzerinden personelin materyalleri inceleyip online sınava girmesi (%70 baraj puanı)",
                "Kurum geneli Personel-Eğitim Çapraz Uyum Matrisi (Compliance Matrix) ve renkli Excel raporu"
            ],
            benefit: "Zorunlu radyasyon güvenliği eğitimleri sıfır kağıtla tamamlanır; sertifikalandırma süreci otomatik yürütülür."
        },
        {
            n: "18",
            tag: "18",
            name: "Tıbbi Cihaz & NDK Lisans",
            fullTitle: "Tıbbi Cihaz, NDK Lisansı ve RKP Başvuru Motoru",
            desc: "4 renkli lisans rozeti, akıllı kod üreteci, kroki pinleme ve resmi NDK çizelgesi.",
            lead: "NDK RSGD-KLV-014 RKP sihirbazı, 4 renkli lisans rozeti ve mühürlü HEK arşivi.",
            icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
            img: "help/assets/img/18_1_cihaz_envanteri_yonetimi.png",
            guideFile: "18_tibbi_cihaz_ve_ndk_lisans_envanteri.html",
            features: [
                "NDK RSGD-KLV-014 ve KLV-014-EK 8 adımlı RKP Başvuru Sihirbazı ile resmi dosya üretimi (KB.1 - KB.8)",
                "4 Renkli NDK Lisans Vize Takibi: Yeşil (>60g), Sarı (16-60g), Turuncu (0-15g) ve Kırmızı (<0g)",
                "Akıllı Cihaz Kodu Generator (XRAY-RAD-BT-01) ve mimari kat planına pin yerleştirip kilitleme",
                "İki Aşamalı HEK & Tasfiye Süreci: Heyet Ön İnceleme Tutanağı ve EBYS mühürlü nihai tasfiye PDF dosyası",
                "Kullanım kılavuzları ve zırhlama raporları için AES-256 şifreli evrak kasası ve resmi NDK Excel çizelgesi"
            ],
            benefit: "Hastanenin tüm radyolojik donanımı haritada kayıtlıdır; NDK RKP başvuru ve lisanslama süreçleri tek tıkla yürütülür."
        },
        {
            n: "19",
            tag: "19",
            name: "Cihaz Arıza & QC Kalibrasyon",
            fullTitle: "Cihaz Arıza, Bakım ve Kalite Kontrol (QC)",
            desc: "Tüp değişimi senkronizasyonu, QC başarısızlık kilidi ve mobil QR arıza konsolu.",
            lead: "Tüp değişimi senkronizasyonu, QC karantina kilidi ve mobil QR arıza.",
            icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
            img: "help/assets/img/19_1_cihaz_ariza_bakim_ve_kalite_kontrol_qc.png",
            guideFile: "19_cihaz_ariza_bakim_ve_kalite_kontrol_qc.html",
            features: [
                "Arıza Bildirimi: Benzersiz ARZ-YYYY-XXX takip kodu ve cihazın otomatik 'Arızalı' statüsüne geçmesi",
                "X-Işını Tüp Değişimi Entegrasyonu: Servis müdahalesinde yeni tüp seri no'sunu cihaz künyesine otomatik işleme",
                "QC Test Takibi: Günlük, Aylık, Yıllık Kalibrasyon ve Zırhlama testlerinin 3 renkli geçerlilik rozetleri",
                "RED-UI-CIHAZ-01 Güvenlik Kilidi: Test sonucu 'Uygun Değil' girildiğinde cihazı anında karantinaya alma",
                "Web Portalı Saha Mobil Konsolu: 6 arıza semptom kategorisi ve QR kod okutarak hızlı servis müdahalesi"
            ],
            benefit: "Cihaz duruş süreleri en aza iner; standart dışı radyasyon yayan cihazların hasta çekiminde kullanılması engellenir."
        },
        {
            n: "20",
            tag: "20",
            name: "Koruyucu Ekipman (RKE)",
            fullTitle: "Radyasyon Koruyucu Ekipman (RKE) & DIN 6857",
            desc: "DIN 6857-1 skopi SVG krokisi, mm² kusur analiz motoru ve SKS 6.1 Excel cetveli.",
            lead: "Skopi SVG kusur krokisi, mm² karar motoru ve SKS 6.1 Excel cetveli.",
            icon: "M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z",
            img: "help/assets/img/20_rke_ana_yonetim.png",
            guideFile: "20_rke_koruyucu_ekipman_ve_din6857.html",
            features: [
                "Önlük, tiroid, gonad, gözlük ve paravan envanteri; RKE-Ö-RAD-001 formatında akıllı kodlama",
                "DIN 6857-1 / SKS 6.1 Skopi Muayenesi: İnteraktif SVG vücut silüeti üzerinde tıklayarak delik/çatlak pini koyma",
                "Otomatik Matematik Karar Motoru: Kritik bölgede >0 mm² ise HEK; non-kritikte ≤5 mm² Uygun, 5-15 mm² Şartlı, >15 mm² HEK",
                "10+ Yıl Yaş Kuralı: 10 yaşını dolduran kurşun kompozit donanımları otomatik hurdaya ayırma",
                "Toplu Muayene Kokpiti, RKS çift aşamalı mühürleme ve Sağlık Bakanlığı SKS 6.1 resmi Excel cetveli"
            ],
            benefit: "Delinmiş veya yırtılmış kurşun önlük kullanımı tamamen engellenir; çalışan sağlığı uluslararası normlarla korunur."
        },
        {
            n: "21",
            tag: "21",
            name: "Merkezi Onaylar & Diff View",
            fullTitle: "Merkezi Onay Bekleyen Görevler Paneli ve Görsel Diff",
            desc: "5 sekmeli kurumsal onay kuyruğu, 4-göz görsel Diff View karşılaştırması ve toplu onay.",
            lead: "5 sekmeli onay paneli, 4-göz görsel Diff karşılaştırması ve yetki denetimi.",
            icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
            img: "help/assets/img/modul21_onay_merkezi.png",
            guideFile: "21_merkezi_onaylar.html",
            features: [
                "5 Onay Kategorisi: İzin Talepleri, Nöbet Devirleri, Nöbet İstekleri, Nöbet Planları ve Veri Değişiklikleri",
                "Görsel Diff Dialog: 4-göz kuralında eski (kırmızı) ve yeni (yeşil) değerleri yan yana karşılaştırıp onaylama",
                "Birim Sorumlusu ve Hizmet Sorumlusu kademeli onay hiyerarşisi ve ret gerekçesi zorunluluğu",
                "Çoklu seçimle toplu onaylama/reddetme ve işlem anında ilgili modül tablolarını canlı güncelleme"
            ],
            benefit: "Tüm yönetimsel onaylar tek panelde toplanır; 4-göz ilkesiyle yetkisiz veri değişiklikleri tam denetim altına alınır."
        },
        {
            n: "22",
            tag: "22",
            name: "Web Portalı & Dashboardlar",
            fullTitle: "Web Portalı ve Yönetici Gösterge Panelleri (Dashboards)",
            desc: "20 analitik yönetici panosu, 60s akıllı bellek önbelleği ve mobil PWA saha erişimi.",
            lead: "20 analitik dashboard, 60s akıllı önbellek ve karar destek grafikleri.",
            icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
            img: "help/assets/img/web_portal_genel_dashboard.png",
            guideFile: "22_web_portal_ve_dashboardlar.html",
            features: [
                "20 Modüler Gösterge Paneli: Nöbet Dağılımı, Dozimetre Risk Trendi, Sağlık & SKS Uyumu, RKE Kusur Haritası ve Cihaz Duruş Süresi",
                "60 Saniye In-Memory Akıllı Önbellek: Ağır analitik sorguları bellekten 10ms altında ultra hızlı yanıtlama",
                "Bağımsız Sunucu İzleyici: Masaüstü durum çubuğundan 8s döngüyle Port 3000 sağlık kontrolü ve otomatik başlatma",
                "Zorlamalı Yenileme (Bypass Cache): Yönetici tek tıkla canlı veritabanı sorgusunu tetikleme yetkisi",
                "Excel ve PDF Dışa Aktarma: Tüm dashboard grafik ve tablolarını tek tıkla raporlama"
            ],
            benefit: "Radyoloji ve nükleer tıp kliniklerinin tüm yönetimsel ve operasyonel nabzı tek ekranda; anlık karar desteğiyle sıfır risk."
        },
        {
            n: "23",
            tag: "23",
            name: "Rapor & Tutanak Merkezi",
            fullTitle: "Raporlama ve Tutanak Yönetim Merkezi",
            desc: "26 resmi SKS/NDK raporu, Evrensel Tutanak Sihirbazı, Şablon Stüdyosu ve 2 aşamalı HEK mührü.",
            lead: "26 resmi mevzuat raporu, Evrensel Tutanak Sihirbazı ve 2 aşamalı SHA-256 HEK mühürleme.",
            icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            img: "help/assets/img/21_rapor_merkezi_kokpit.png",
            guideFile: "23_rapor_tutanak_merkezi.html",
            features: [
                "Doğru İşe Tek Format Standardı: Analitik tablolar için Excel (.xlsx), kanuni tutanaklar için kilitli PDF, RKP taslağı için Word",
                "Evrensel Tutanak ve Komisyon Karar Sihirbazı: Çoklu cihaz/RKE için tek belgede gerekçe, döküm tablosu, karar ve imza heyeti",
                "İki Aşamalı HEK & Tasfiye Döngüsü: Heyet Ön İnceleme Tutanağı ve EBYS üst yazısıyla SHA-256 mühürlü nihai tasfiye PDF'i",
                "Şablon Tasarım Stüdyosu: Tıklanabilir dinamik değişken butonları (+{{tarih}}, +{{kurum_adi}} vb.) ile canlı şablon geliştirme",
                "Akıllı Sayfa Yönlendirme: ≤6 sütunlu tablolarda Dikey A4, >6 sütunlu geniş tablolarda otomatik Yatay A4 PDF dökümü"
            ],
            benefit: "Çoklu ekipman ve komisyon kararları tek resmi PDF tutanakta birleşir; SKS 6.1 ve NDK denetim raporları saniyeler içinde üretilir."
        }
    ];

    const STATS = {
        institutions: 84,
        users: 6200,
        years: 8,
        modules: MODULES.length
    };

    const LOGOS = [
        "Anadolu Üniversite Hastanesi",
        "Mavi Görüntüleme",
        "Beyaz Diş Grubu",
        "Ege Nükleer Tıp",
        "Marmara Radyoloji",
        "Batı Veteriner Klinikleri",
        "Karadeniz Sağlık A.Ş.",
        "İç Anadolu Hastanesi",
        "Doğu Onkoloji"
    ];

    const TESTIMONIALS = [
        {
            quote:
                "RADPYS V4'ün DIN 6857-1 RKE modülü ve İnteraktif Ortam Dozu Krokisi sayesinde SKS denetimlerinde teftiş heyetine tüm odaların ve kurşun önlüklerin durumunu canlı haritada sunduk. Denetime hazırlık süremiz 2 saate indi.",
            author: "Prof. Dr. M. Aydın",
            role: "Radyoloji Bölüm Başkanı",
            org: "Anadolu Üniversite Hastanesi",
            avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc4NDcyMjY5N3ww&ixlib=rb-4.1.0&q=85"
        },
        {
            quote:
                "Nöbet dağıtım algoritması ve web portal üzerinden 2 aşamalı devir onayı nöbet tartışmalarını tamamen bitirdi. Mobil PWA ile teknikerlerimiz vardiyalarını telefonlarından anlık takip ediyor.",
            author: "Dr. Ece K.",
            role: "Nükleer Tıp Uzmanı",
            org: "Mavi Görüntüleme Merkezi",
            avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc4NDcyMjY5N3ww&ixlib=rb-4.1.0&q=85"
        },
        {
            quote:
                "Cihazların üzerindeki QR karekodları telefonla okutup arıza bildirme ve online sınav LMS motoru kliniğimizin dijitalleşmesinde devrim yarattı. PostgreSQL altyapısı ve KVKK AES-256 evrak kasası tam güven veriyor.",
            author: "Uzm. S. Yılmaz",
            role: "Radyasyondan Sorumlu Uzman (RKS)",
            org: "Beyaz Diş & Sağlık Grubu",
            avatar:
                "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwb2ZmaWNlJTIwdGVhbXxlbnwwfHx8fDE3ODQ3MjI2OTd8MA&ixlib=rb-4.1.0&q=85"
        }
    ];

    const BLOG_POSTS = [
        {
            slug: "radyoloji-kanunlar-ve-yasal-dayanaklar",
            title: "Radyoloji Departmanlarında Uyulması Gereken Temel Kanunlar ve Yasal Dayanaklar",
            excerpt: "3153 Sayılı Kanun (35 saat çalışma & şua izni), 6698 KVKK, 6331 İSG, 657 DMK, 2238 ve 5624 sayılı kanunların özet rehberi.",
            content: [
                "Radyoloji departmanlarının çalışma süreleri, şua izinleri, veri güvenliği ve çalışan sağlığına dair ana yasal çerçeveyi oluşturan kanunlar:",
                "<strong>3153 Sayılı Kanun:</strong> Radyoloji, Radiyom ve Elektrikle Tedavi Müesseseleri Hakkında Kanun. Haftalık 35 saatlik çalışma sınırının ve yasal şua izni hakedişlerinin ana yasal dayanağıdır. <a href=\"https://www.saglik.gov.tr/TR-10397/radyoloji-radiyom-ve-elektrikle-tedavi-ve-diger-fizyoterapi-muesseseleri-hakkinda-kanun.html\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                "<strong>6698 Sayılı KVKK:</strong> Kişisel Verilerin Korunması Kanunu. Personel dozimetre geçmişi ve sağlık taraması gibi hassas kişisel verilerin AES-256 algoritmasıyla şifreli saklanması zorunluluğunun yasal temelidir. <a href=\"https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6698.pdf\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                "<strong>6331 Sayılı İSG Kanunu:</strong> İş Sağlığı ve Güvenliği Kanunu. Radyasyon çalışanlarının periyodik sağlık kontrolleri ve risk analizlerinin yasal temelidir. <a href=\"http://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                "<strong>657 Sayılı DMK:</strong> Devlet Memurları Kanunu. Kamu sağlık kurumlarındaki personelin çalışma koşulları ve özlük haklarını belirler. <a href=\"https://www.mevzuat.gov.tr/MevzuatMetin/1.5.657.pdf\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                "<strong>2238 Sayılı Kanun:</strong> Organ ve Doku Alınması, Saklanması ve Nakli Hakkında Kanun. Radyolojik görüntüleme gerektiren organ nakli süreçlerinin yasal çerçevesidir. <a href=\"https://www.mevzuat.gov.tr/MevzuatMetin/1.5.2238.pdf\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                "<strong>5624 Sayılı Kanun:</strong> Kan ve Kan Ürünleri Kanunu. Hastanelerdeki kan ışınlama ünitelerinin güvenliği ile doğrudan ilişkilidir. <a href=\"https://www.resmigazete.gov.tr/eskiler/2007/05/20070502-1.htm\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>"
            ],
            category: "Mevzuat & Kanunlar",
            cover: "images/cover_mevzuat_kanunlar.jpg",
            author: "Hukuk Ekibi",
            readTime: 5
        },
        {
            slug: "radyoloji-hizmetleri-yonetmeligi-ve-guncellemeleri",
            title: "Radyoloji Hizmetleri Yönetmeliği ve Güncel Değişiklikler Rehberi",
            excerpt: "26 Nisan 2022 Ana Yönetmelik metni ile 2023 ve 16 Aralık 2025 tarihli en son Resmi Gazete revizyonlarının özeti.",
            content: [
                "Sağlık kuruluşlarındaki radyoloji ünitelerinin açılış, lisanslama, denetleme ve çalışma koşullarına ilişkin ana yönetmelik ve güncel revizyonlar:",
                "<strong>16 Aralık 2025 Değişiklik Yönetmeliği:</strong> Özel radyoloji merkezlerinin il dışı taşınma sınırları, mesul müdürlerin tam zamanlı çalışma esası ve karekodlu kimlik kartı zorunluluğu. <a href=\"https://www.resmigazete.gov.tr/eskiler/2025/12/20251216-1.htm\" target=\"_blank\" class=\"text-neon-teal underline\">16 Aralık 2025 Resmi Gazete Metni 📄</a>",
                "<strong>25 Nisan 2023 Değişiklik Yönetmeliği:</strong> Kamu, üniversite ve özel sektöre ait birimlerin denetim ve usul esaslarındaki revizyonlar. <a href=\"https://www.resmigazete.gov.tr/eskiler/2023/04/20230425-7.htm\" target=\"_blank\" class=\"text-neon-teal underline\">25 Nisan 2023 Resmi Gazete Metni 📄</a>",
                "<strong>26 Nisan 2022 Ana Yönetmelik Metni:</strong> Haftalık 35 saat çalışma süresi, cihaz odası yapısal standartları ve arşivleme zorunlulukları. <a href=\"https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=39534&MevzuatTur=7&MevzuatTertip=5\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Bilgi Sistemi Ana Metni 📄</a>",
                "<strong>İyonlaştırıcı Radyasyon Sağlık Hizmetleri Yönetmeliği (5 Temmuz 2022):</strong> BT, röntgen ve anjiyo ünitelerinde radyasyon güvenliği ve cihaz ruhsatlandırma esasları. <a href=\"https://www.resmigazete.gov.tr/eskiler/2022/07/20220705-1.htm\" target=\"_blank\" class=\"text-neon-teal underline\">5 Temmuz 2022 Resmi Gazete Metni 📄</a>"
            ],
            category: "Mevzuat & Kanunlar",
            cover: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=940",
            author: "Mevzuat Analiz",
            readTime: 5
        },
        {
            slug: "ndk-teknik-kilavuzlar-rehberi",
            title: "Nükleer Düzenleme Kurumu (NDK) Resmi Teknik Kılavuzları Rehberi",
            excerpt: "NDK tarafından yayımlanan kişisel dozimetre kullanımı (KLV-016), koruyucu donanımlar (KLV-020) ve radyasyondan korunma programları (KLV-014) tam indirme listesi.",
            content: [
                "Nükleer Düzenleme Kurumu (NDK) tarafından yayımlanan resmi teknik kılavuzlar, radyoloji ve nükleer tıp kliniklerinin fiziksel ve teknik emniyetini düzenler.",
                "<strong>2023-KLV-001:</strong> Radyasyon Uyarı İşaretlerine İlişkin Kılavuz <a href=\"https://webim.ndk.gov.tr/file/60cc45d3-3182-48cb-9da4-9b1a3a0c6033?download\" target=\"_blank\" class=\"text-neon-teal underline\">PDF İndir 📄</a>",
                "<strong>2023-KLV-002:</strong> Radyasyon Olay veya Kazalarının Sınıflandırılmasına İlişkin Kılavuz <a href=\"https://webim.ndk.gov.tr/file/37edf6e2-869a-4511-ba80-a2cdab0be7e5?download\" target=\"_blank\" class=\"text-neon-teal underline\">PDF İndir 📄</a>",
                "<strong>KLV-014:</strong> Tıbbi Radyoloji Uygulamalarında Radyasyondan Korunma Programı Hazırlanmasına İlişkin Kılavuz <a href=\"https://webim.ndk.gov.tr/file/f469d38b-cdbd-41bc-a03b-0e3d60da98fd?download\" target=\"_blank\" class=\"text-neon-teal underline\">PDF İndir 📄</a>",
                "<strong>KLV-016:</strong> Kişisel Dozimetre Kullanımına İlişkin Kılavuz <a href=\"https://webim.ndk.gov.tr/file/cc5dc55b-ec02-4f23-8df4-76ad1e6e886a?download\" target=\"_blank\" class=\"text-neon-teal underline\">PDF İndir 📄</a>",
                "<strong>KLV-020:</strong> Radyasyondan Koruyucu Donanımlara (Kurşun Önlük vb.) İlişkin Kılavuz <a href=\"https://webim.ndk.gov.tr/file/4c1aa0d9-53dd-4f89-a831-4ce04b03ccc7?download\" target=\"_blank\" class=\"text-neon-teal underline\">PDF İndir 📄</a>",
                "<strong>KLV-003:</strong> Radyasyon Güvenliği Komitelerinin Çalışma Usul ve Esaslarına İlişkin Kılavuz <a href=\"https://webim.ndk.gov.tr/file/a0cd32d6-bbca-4222-9244-7ae1d53a8995?download\" target=\"_blank\" class=\"text-neon-teal underline\">PDF İndir 📄</a>",
                "<strong>KLV-005:</strong> Radyasyon Alanlarının Sınıflandırılmasına İlişkin Kılavuz <a href=\"https://webim.ndk.gov.tr/file/669b8bad-3f74-49d2-86cd-827cad7a6eac?download\" target=\"_blank\" class=\"text-neon-teal underline\">PDF İndir 📄</a>",
                "<strong>KLV-006:</strong> Zırhlama Hesaplamaları Kılavuzu <a href=\"https://webim.ndk.gov.tr/file/ddfbf3bc-de6c-44a6-957d-5c712c9e0f4f?download\" target=\"_blank\" class=\"text-neon-teal underline\">PDF İndir 📄</a>",
                "<strong>KLV-007:</strong> Tıbbi Radyoloji Oda Tasarımı ve Zırhlama Koşulları Kılavuzu <a href=\"https://webim.ndk.gov.tr/file/caa4edcc-deec-48b9-ab35-e7bd091d6f1c?download\" target=\"_blank\" class=\"text-neon-teal underline\">PDF İndir 📄</a>"
            ],
            category: "NDK Kılavuzları",
            cover: "images/cover_ndk_kilavuzlar.jpg",
            author: "NDK Mevzuat Analiz",
            readTime: 6
        },
        {
            slug: "saglik-bakanligi-genelgeleri-ve-sks61-rehberi",
            title: "Sağlık Bakanlığı Genelgeleri ve SKS 6.1 Standartları Rehberi",
            excerpt: "Genelge 2012/34 (Radyasyon personeli çalışma esasları), Genelge 2012/23 (Çalışan güvenliği) ve SKS 6.1 SRG 18 kalite standardı özeti.",
            content: [
                "Hastanelerin kalite denetimlerinde ve günlük işleyişinde uymak zorunda olduğu Sağlıkta Kalite Standartları ve Bakanlık idari talimatlarıdır:",
                "<strong>Sağlık Bakanlığı Radyasyon Kaynaklarıyla Çalışan Personele İlişkin Genelge (2012/34):</strong> Nöbet, şua izinleri ve çalışma biçimleri üzerine pratik idari genelgedir. <a href=\"https://www.saglik.gov.tr/TR-11051/radyasyon-kaynaklariyla-calisan-personele-iliskin-genelge-201234.html\" target=\"_blank\" class=\"text-neon-teal underline\">Bakanlık Portalı Bağlantısı 🔗</a>",
                "<strong>Sağlık Bakanlığı Çalışan Güvenliğinin Sağlanması Genelgesi (2012/23):</strong> Sağlık kurumlarında güvenli çalışma koşullarının tesisi için asgari kriterleri koyar. <a href=\"https://www.saglik.gov.tr/TR,3282/calisan-guvenligi-genelgesi-14052012.html\" target=\"_blank\" class=\"text-neon-teal underline\">Genelge Metni 🔗</a>",
                "<strong>Sağlıkta Kalite Standartları (SKS) Sürüm 6.1 - Radyasyon Güvenliği (SRG) Bölümü:</strong> Kalite denetimlerinde hastanelerin uymak zorunda olduğu SRG11.02 gibi temel standartları ve kümülatif doz takip ölçütlerini belirler. <a href=\"https://skskalite.com.tr/\" target=\"_blank\" class=\"text-neon-teal underline\">SKS Kalite Portalı 🔗</a>"
            ],
            category: "Mevzuat & Kanunlar",
            cover: "images/cover_mevzuat_kanunlar.jpg",
            author: "Kalite & Denetim Ekibi",
            readTime: 4
        },
        {
            slug: "dozimetre-takibi-ve-kumatik-doz-analizi",
            title: "Dozimetre Takibi ve NDK/ICRP Kümülatif Doz Sınırları Rehberi",
            excerpt: "Aylık ve yıllık dozimetre okumaları, kümülatif doz sınırları (ICRP 103) ve eşik aşım uyarıları.",
            content: [
                "Nükleer Düzenleme Kurumu (NDK) ve uluslararası ICRP 103 standartlarına göre radyasyon çalışanlarının kümülatif dozimetre verileri düzenli saklanmalıdır.",
                "Aylık ve yıllık doz sınırlarının takibinde eşik aşımı ulaşıldığında otomatik uyarı sistemlerinin bulunması olası ihlallerin önüne geçer.",
                "RADPYS V4 dozimetre takip modülü, geçmiş döneme ait verileri PostgreSQL ve AES-256 ile saklar ve denetim anında tek tıkla resmi standartlara uygun rapor çıktısı verir."
            ],
            category: "Radyasyon Güvenliği",
            cover: "images/cover_dozimetre_analiz.jpg",
            author: "Güvenlik Ekibi",
            readTime: 5
        },
        {
            slug: "radyasyon-olay-ve-dof-bildirimleri",
            title: "Olay Bildirimleri ve SKS 6.1 Uyumlu DÖF Yönetimi",
            excerpt: "Radyasyon kaynaklı olay bildirimlerinin zaman damgalı loglanması ve DÖF (Düzeltici Önleyici Faaliyet) süreçleri.",
            content: [
                "Sağlıkta Kalite Standartları (SKS 6.1) çerçevesinde hastanelerde yaşanan radyasyon olaylarının takibi ve bildirimi zorunludur.",
                "RADPYS V4 olay bildirim modülü, Web Portalı üzerinden 3 adımda anonim bildirimden DÖF aksiyon takibine kadar tüm süreci dijitalleştirir. Zaman damgalı loglar ve 72 saatlik NDK bildirim sayacı ile sıfır ceza garantisi sağlar."
            ],
            category: "Radyasyon Güvenliği",
            cover: "images/cover_dozimetre_analiz.jpg",
            author: "Güvenlik Ekibi",
            readTime: 4
        },
        {
            slug: "radyoloji-nobet-ve-izin-planlama-rehberi",
            title: "Radyoloji Nöbet ve İzin Planlamasında Yapılan 5 Hata ve Akıllı Algoritma",
            excerpt: "Haftalık 35 saat çalışma sınırı, Şua izinleri ve kısıt-tabanlı adil nöbet çizelgesi hazırlama rehberi.",
            content: [
                "Radyoloji birimlerinde adil bir nöbet listesi hazırlamak ve 35 saatlik yasal sınırı korumak hayati önem taşır.",
                "1. Manuel hesaplamalarda hafta sonu ve bayram nöbetlerinin dengesiz dağıtılması.",
                "2. Yasal dinlenme ve şua izni çakışmalarının gözden kaçırılması.",
                "3. Kişisel izin taleplerinin ve hamilelik/sağlık kısıtlarının takip edilememesi.",
                "4. Nöbet değişim taleplerinin sözlü yapılması sonucu yaşanan takipsizlik.",
                "5. Çizelgelerin gecikmeli yayınlanarak personelin kişisel planlamasını zorlaştırması.",
                "RADPYS V4 kısıt-tabanlı akıllı nöbet algoritması ve çapraz görevlendirme desteği ile tüm bu değişkenleri hesaplayarak saniyeler içinde adil nöbet çizelgeleri üretir."
            ],
            category: "Rehber & Ürün",
            cover: "images/cover_nobet_planlama.jpg",
            author: "Operasyon Ekibi",
            readTime: 5
        },
        {
            slug: "kvkk-ve-saglik-verileri-guvenligi-rehberi",
            title: "KVKK (6698) ve Özel Nitelikli Sağlık Verilerinin Yerel Ağda Korunması",
            excerpt: "Sağlık ve dozimetri verilerinin AES-256 ile şifrelenmesi, KVKK ZIP ihracı ve çevrimdışı masaüstü veritabanı güvenliği.",
            content: [
                "Kişisel Verilerin Korunması Kanunu (KVKK), sağlık verilerini özel nitelikli kişisel veri olarak sınıflandırır.",
                "RADPYS V4, tüm personel, dozimetre ve sağlık muayenesi evraklarını PostgreSQL veritabanında AES-256 Fernet ile şifreler. KVKK Madde 11 uyarınca personelin tüm verilerini tek tıkla taşınabilir ZIP paketi olarak ihraç etme ve rol bazlı erişim logu (Audit Trail) altyapısı sunar."
            ],
            category: "Rehber & Ürün",
            cover: "images/cover_mevzuat_kanunlar.jpg",
            author: "Hukuk Ekibi",
            readTime: 5
        }
    ];

    /* ----------------------------------------------------------------------
       GELECEK VİZYONU (DALGA 1 HIZLI ÖZET KARTLARI)
       ---------------------------------------------------------------------- */
    const FUTURE_MODULES = [
        {
            badge: "FAZ 1 — Altyapı Hazır",
            badgeColor: "border-teal-500/30 text-teal-400 bg-teal-500/10",
            name: "Saha / Tablet QR-Barkod Muayene & Hızlı Envanter Asistanı",
            highlight: "Tablet QR/Barkod, DIN 6857-1 & Çevrimdışı PWA",
            desc: "Medikal Fizikçiler için sahada doğrudan tablet kamerasıyla QR/Barkod okutma, skopi altındaki kurşun önlük ve paravan kusurlarını interaktif krokide işaretleme, fotoğraf ekleme ve anlık senkronizasyon.",
            tag: "RKE Muayene & Saha Asistanı"
        },
        {
            badge: "FAZ 2 — Foundation AI",
            badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
            name: "Google TimesFM ile Yapay Zekâlı Doz Trend Tahmini & Rotasyon",
            highlight: "1 Trilyon Verili Zero-Shot Transformer",
            desc: "Google Research TimesFM foundation modeliyle sıfır ek model eğitimiyle 6 ay önceden 20 mSv limit aşımı uyarısı, çok değişkenli risk analizi ve radyasyonsuz birimlere akıllı rotasyon önerisi.",
            tag: "Zero-Shot AI & Klinik Rotasyon"
        },
        {
            badge: "FAZ 3 — Denetim Simülatörü",
            badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10",
            name: "NDK & SKS 6.1 Otomatik Denetim Simülatörü & Risk Karnesi",
            highlight: "100 Puanlık Resmi Denetim Hazırlık Motoru",
            desc: "Tek tıkla tüm kurumu tarayarak süresi dolan lisans, eksik kalibrasyon, muayenesiz kurşun önlük, eksik şua izni ve kaza bildirimlerini analiz eden resmi denetim karnesi ve hazırlık raporu motoru.",
            tag: "NDK & SKS 6.1 Denetim Motoru"
        }
    ];

    /* ----------------------------------------------------------------------
       FİYATLANDIRMA PAKETLERİ & SSS
       ---------------------------------------------------------------------- */
    const TIERS_DATA = [
        {
            id: "starter",
            code: "STARTER / BASIC",
            name: "Başlangıç Paketi",
            capacity: "Sınırsız Personel / Nöbet & İzin",
            desc: "Nöbet ve personel çözümü: klinikler, görüntüleme merkezleri ve hastaneler için sınırsız personel kapasiteli temel paket.",
            shopierUrl: "https://www.shopier.com/RADPYS/49366089",
            badge: null,
            features: [
                "Nöbet Solver & AI Çizelgeleme Motoru",
                "Nöbet Devir / İkame / Mazeret Yönetimi",
                "Nöbet Borç / Alacak & Puantaj Cetvelleri",
                "Personel Yönetimi & İzin Takibi (Şua / Yıllık)",
                "Evrensel Onay Kuyruğu & Temel Sistem Ayarları"
            ],
            locked: [
                "Kişisel Dozimetre (RDF-43)",
                "Periyodik Sağlık Muayeneleri",
                "Fiili Hizmet Zammı (FHZ)",
                "RGS Görevlendirmeleri",
                "Cihaz & NDK Envanteri",
                "Koruyucu Donanım (RKE)",
                "Ortam Dozu Krokisi",
                "LMS Online Sınav"
            ],
            cta: "Satın Al",
            highlight: false,
            isElite: false,
            prices: {
                1: { total: "2.000 ₺", monthly: "2.000 ₺", note: null },
                3: { total: "5.400 ₺", monthly: "1.800 ₺", note: "3 aylık peşin toplam 5.400 ₺ (%10 İndirim)" },
                6: { total: "9.600 ₺", monthly: "1.600 ₺", note: "6 aylık peşin toplam 9.600 ₺ (%20 İndirim)" },
                12: { total: "16.800 ₺", monthly: "1.400 ₺", note: "12 aylık peşin toplam 16.800 ₺ (%30 İndirim)" }
            }
        },
        {
            id: "pro",
            code: "PRO",
            name: "Pro Paket",
            capacity: "Sınırsız Personel / Kurumsal Ölçek",
            desc: "Radyasyon güvenliği ve sağlık takibi modülleri ile genişletilmiş çözüm: Pro paket, Başlangıç'ın tüm özelliklerini içerir ve ek radyasyon güvenliği fonksiyonları sunar.",
            shopierUrl: "https://www.shopier.com/RADPYS/49366367",
            isPro: true,
            badge: null,
            features: [
                "Başlangıç Paketinin Tümü",
                "Kişisel Dozimetre Takibi & RDF-43 Raporu",
                "Periyodik Sağlık Muayeneleri & Risk Analizi",
                "Fiili Hizmet Zammı (5510 SK FHZ Cetveli)",
                "RGS / RSO Görevlendirme & Sertifika Takibi",
                "Olay Bildirimi & DÖF (CAPA)"
            ],
            locked: [
                "Cihaz & NDK Envanteri",
                "Cihaz Arıza, Bakım, QC, HEK",
                "Koruyucu Donanım (RKE)",
                "Ortam Dozu Krokisi",
                "LMS Online Sınav"
            ],
            cta: "Satın Al",
            highlight: false,
            isElite: false,
            prices: {
                1: { total: "4.000 ₺", monthly: "4.000 ₺", note: null },
                3: { total: "10.800 ₺", monthly: "3.600 ₺", note: "3 aylık peşin toplam 10.800 ₺ (%10 İndirim)" },
                6: { total: "19.200 ₺", monthly: "3.200 ₺", note: "6 aylık peşin toplam 19.200 ₺ (%20 İndirim)" },
                12: { total: "33.600 ₺", monthly: "2.800 ₺", note: "12 aylık peşin toplam 33.600 ₺ (%30 İndirim)" }
            }
        },
        {
            id: "elite",
            code: "ELITE",
            name: "Elit Paket (V4 Elite)",
            capacity: "Sınırsız Kapasite + Tüm 23 Modül",
            desc: "Tam entegre kurumsal çözüm: Pro paketinin tümü + kurumsal envanter, bakım, QC, LMS, Rapor/Tutanak Merkezi ve interaktif ortam dozu krokisi gibi gelişmiş modüller.",
            shopierUrl: "iletisim.html",
            badge: `En Kapsamlı (v${VERSION_INFO.version})`,
            features: [
                "Sınırsız Personel, Cihaz ve Birim Kapasitesi",
                "NDK RSGD-KLV-014 RKP Belge Motoru & 8 Adımlı Başvuru Sihirbazı",
                "Raporlama & Tutanak Yönetim Merkezi (26 Resmi Rapor + Evrensel Tutanak Sihirbazı)",
                "RKE & DIN 6857-1 Skopi Muayene ve Otomatik Karar Motoru",
                "SKS 6.1 Kalite Dokümanları & İki Aşamalı HEK (EBYS Mühürlü Tasfiye)",
                "İnteraktif Ortam Dozu Krokisi & SKS 6.1 Alan İzleme (Web/Mobil)",
                "Tıbbi Cihaz Envanteri & Mobil QR Hızlı Arıza Portalı",
                "Hizmet İçi Eğitim & Online Sınav LMS Motoru (Soru Bankası Havuzu)",
                "Merkezi Onaylar & Görsel Diff View Denetim Sistemi",
                "KVKK Madde 11 ZIP İhracı & AES-256 Şifreli Evrak Kasası",
                "PostgreSQL 14+/16 Kurumsal DB & Mobil Yüklenebilir PWA Portalı",
                "7/24 Özel VIP Mühendislik & Özel Veri Göçü Danışmanlığı"
            ],
            cta: "Özel Teklif Al →",
            highlight: true,
            isElite: true,
            prices: null
        }
    ];

    const PRICING_FAQ = [
        { q: "Elit Paket ile diğer paketler arasındaki temel farklar nelerdir?", a: "Elit Paket; 23 kurumsal modülün tamamını, RKE ve DIN 6857-1 karar motorunu, ortam dozu krokisini, cihaz envanterini, bakım-QC-HEK akışını, Evrensel Tutanak Sihirbazı'nı ve LMS eğitimi içerir. Başlangıç ve Pro paketleri daha odaklı modül setleriyle gelir." },
        { q: "Kapasite veya personel sayısı aşılırsa ne olur?", a: "Başlangıç, Pro ve Elit paketlerimizin tamamında personel tanımlama ve nöbet planlama kapasitesi sınırsızdır. Paketler arasındaki fark yalnızca aktif olan kurumsal modül kapsamıdır." },
        { q: "NDK, TENMAK ve SKS 6.1 mevzuat güncellemeleri ücrete tabi midir?", a: "Hayır. Tüm paketlerimizde mevzuat güncellemeleri lisans süresi boyunca dahildir." },
        { q: "Ödeme periyotları nasıl çalışır?", a: "1, 3, 6 veya 12 aylık periyotlarla peşin ödeme seçeneği mevcuttur. Daha uzun süreli periyotlarda aylık maliyet düşer." },
        { q: "Verilerimiz nerede saklanıyor ve KVKK güvenliği nasıl sağlanıyor?", a: "RADPYS V4 verileriniz kurumunuzun kendi bünyesinde yerel sunucu veya bilgisayarlarda AES-256 ve SQLCipher ile şifrelenerek saklanır. PostgreSQL kurumsal altyapısı ile güvenli yedekleme ve KVKK uyumluluğu sağlanır." },
        { q: "Mevcut sistemimizden ve Excel'den geçiş yapabilir miyiz?", a: "Evet. Excel ve CSV raporlarından toplu içe aktarma sihirbazımız mevcuttur. Demo sürümündeki verileriniz de tam sürüme aktarılırken korunur." },
        { q: "Deneme sürümü var mı ve sınırı nedir?", a: "Evet, 30 günlük ücretsiz deneme sunuyoruz. Demo modunda kısıt kaldırılmıştır; tüm V4 modülleri (Elit dahil) sınırsız erişimle açılır. 30 gün sonunda 15. ve 3. gün uyarıları ve güvenli yönetici kilit ekranı devreye girer." }
    ];

    /* ----------------------------------------------------------------------
       SAYFA BAZLI MERKEZİ İÇERİK SÖZLÜĞÜ (PAGE_CONTENT)
       ---------------------------------------------------------------------- */
    const PAGE_CONTENT = {
        home: {
            heroScreens: [
                {
                    tabLabel: "Nöbet Solver Motoru",
                    title: "Modül 08: Otomatik Nöbet Solver Motoru & Kısıt Çözücü",
                    desc: "CBC / PuLP tabanlı matematiksel kısıt optimizasyonu ve adil nöbet dağıtım matrisi.",
                    img: "help/assets/img/08_nobet_cizelge_dialog.png",
                    link: "moduller.html#m-08"
                },
                {
                    tabLabel: "İnteraktif Doz Krokisi",
                    title: "Modül 14: Ortam Dozu & İnteraktif Mimari Plan Krokisi",
                    desc: "CAD/PDF kat planında canlı radyasyon pinleri, QR pasaportları ve SKS 6.1 SRG11.02 Excel raporu.",
                    img: "help/assets/img/14_1_ortam_dozu_kroki_haritasi_ana_ekran.png",
                    link: "moduller.html#m-14"
                },
                {
                    tabLabel: "DIN 6857 RKE Muayene",
                    title: "Modül 20: RKE Kurşun Koruyucu Ekipman & DIN 6857 Skopi",
                    desc: "İnteraktif silüet üzerinde mm² delik/çatlak tespiti, otomatik HEK kararı ve SKS muayene cetveli.",
                    img: "help/assets/img/20_rke_muayene_kokpiti.png",
                    link: "moduller.html#m-20"
                },
                {
                    tabLabel: "Dozimetre & NDK Takibi",
                    title: "Modül 12: Dozimetre Takibi & NDK 72 Saatlik Resmi Bildirim",
                    desc: "20 mSv limit aşımında otomatik RD.F43 araştırma formu, 10 iş günü sayacı ve NDK Form A-1 üretimi.",
                    img: "help/assets/img/12_1_dozimetre_list.png",
                    link: "moduller.html#m-12"
                },
                {
                    tabLabel: "Cihaz & QC Yönetimi",
                    title: "Modül 19: Tıbbi Cihaz Arıza, Bakım & Kalite Kontrol (QC)",
                    desc: "Karekodla arıza kaydı, X-ışını tüp değişimi senkronizasyonu ve QC güvenlik karantina kilidi.",
                    img: "help/assets/img/19_1_cihaz_ariza_bakim_ve_kalite_kontrol_qc.png",
                    link: "moduller.html#m-19"
                },
                {
                    tabLabel: "Merkezi Onay & Diff",
                    title: "Modül 21: Merkezi Onay Bekleyen Görevler Paneli & Görsel Diff",
                    desc: "5 sekmeli onay paneli, 4-göz görsel Diff View karşılaştırması ve kademeli onay zinciri.",
                    img: "help/assets/img/modul21_onay_merkezi.png",
                    link: "moduller.html#m-21"
                },
                {
                    tabLabel: "Web Dashboardlar",
                    title: "Modül 22: Web Portalı & 20 Yönetici Gösterge Paneli",
                    desc: "Express/React tabanlı 20 analitik dashboard, 60s bellek önbelleği ve anlık karar destek grafikleri.",
                    img: "help/assets/img/web_portal_genel_dashboard.png",
                    link: "moduller.html#m-22"
                },
                {
                    tabLabel: "Rapor & Tutanak Merkezi",
                    title: "Modül 23: Raporlama ve Tutanak Yönetim Merkezi",
                    desc: "26 resmi mevzuat raporu, Evrensel Tutanak Sihirbazı ve 2 aşamalı SHA-256 HEK mühürleme.",
                    img: "help/assets/img/21_rapor_merkezi_kokpit.png",
                    link: "moduller.html#m-23"
                }
            ],
            marquee: [
                "KVKK AES-256 Şifreleme",
                "PostgreSQL Kurumsal DB",
                "DIN 6857-1 RKE Muayene",
                "İnteraktif Mimari Plan Krokisi",
                "QR Karekod Arıza Portalı",
                "Online Sınav LMS Motoru",
                "Evrensel Onay & Diff View",
                "Rapor & Tutanak Sihirbazı",
                "Web Portalı & Mobil PWA",
                "SKS 6.1 & NDK 72s Takibi"
            ],
            manifesto: [
                {
                    n: "01",
                    t: "Kağıt ve Excel karmaşasına son.",
                    b: "Dağınık Excel çizelgeleri, kaybolan dozimetre çıktıları ve WhatsApp nöbet gruplarının sonu. Her kayıt zaman damgalı, denetlenebilir ve tek merkezde."
                },
                {
                    n: "02",
                    t: "Şeffaf kısıtlar, adaletli dağıtım.",
                    b: "Nöbet algoritması yasal mevzuat ve sert/yumuşak kısıtlarla çalışır. Ekip neden o gün nöbette olduğunu şeffafça görür — amirin insafı değil, kurallar geçerlidir."
                },
                {
                    n: "03",
                    t: "Askeri düzeyde veri güvenliği.",
                    b: "PostgreSQL altyapısı, AES-256 Fernet şifreli evrak kasası ve KVKK Madde 11 ZIP ihracı. Sağlık verileriniz kurumunuzun tam kontrolünde korunur."
                },
                {
                    n: "04",
                    t: "Zamandan ve cezai riskten tasarruf.",
                    b: "Denetim hazırlığı iki gün değil, iki saat. NDK 72 saatlik bildirim, SKS 6.1 Excel raporları ve resmi heyet tutanakları tek tıkla hazır. Yöneticiler saatlerce nöbet çizmekten kurtulur."
                }
            ],
            complianceCards: [
                {
                    badge: "72s",
                    color: "teal",
                    title: "NDK 72 Saatlik Acil Bildirim",
                    subtitle: "Limit Aşımı & RD.F43 Formu",
                    desc: "Yıllık 20 mSv veya 5 yıllık 100 mSv doz aşımında personeli otomatik riskli statüye alma, 10 iş günü araştırma sayacı ve resmi NDK Form A-1 şablon ihracı.",
                    footer: "NDK & TAEK Yönetmeliği"
                },
                {
                    badge: "SKS",
                    color: "cyan",
                    title: "SKS 6.1 Kalite & DÖF",
                    subtitle: "İstenmeyen Olay Bildirimi",
                    desc: "Sağlıkta Kalite Standartları Versiyon 6.1 uyumlu İOBS sistemi. Doz aşımı, cihaz arızası ve ramak kala olaylarında kök neden analizli DÖF/CAPA takibi.",
                    footer: "Sağlık Bakanlığı SKS 6.1"
                },
                {
                    badge: "RKE",
                    color: "emerald",
                    title: "DIN 6857-1 / DIN 6857-2",
                    subtitle: "Kurşun Koruyucu Muayenesi",
                    desc: "Kurşun önlük, tiroid ve gonat koruyucuların yıllık skopi kontrolü, akıllı karekodlama ve kurşun eşdeğeri (Pb) kalite kontrol arşivi.",
                    footer: "DIN 6857-1 / 6857-2"
                },
                {
                    badge: "KVKK",
                    color: "indigo",
                    title: "KVKK 6698 & AES-256",
                    subtitle: "Şifreli Kasa & PostgreSQL",
                    desc: "Personel özlük evrakları ve sağlık verileri diske açık yazılmaz; AES-256 Fernet şifreleme ve kurum içi PostgreSQL veritabanında güvenle saklanır.",
                    footer: "6698 Sayılı Kanun Madde 11"
                }
            ],
            faq: [
                {
                    q: "RADPYS V4 dozimetre limit aşımında NDK 72 saatlik bildirim sürecini nasıl yönetir?",
                    a: "Personelin 12 aylık kümülatif dozu 20 mSv (veya 5 yıllık 100 mSv) yasal sınırını aştığında, sistem personeli otomatik olarak \"Yüksek Riskli\" statüsüne alır. NDK mevzuatına uygun 72 saatlik resmi acil bildirim şablonunu (Form A-1), 10 iş günü araştırma sayacını ve 2 sayfalık resmi RD.F43 Doz Araştırma Formunu tek tıkla üretir."
                },
                {
                    q: "Şua İzni (Sağlık İzni) takibi ve zamanaşımı uyarıları nasıl çalışır?",
                    a: "Sağlık Bakanlığı ve NDK mevzuatı gereği 4 haftalık Şua izni parçalı kullanılamaz ve sonraki takvim yılına devretmez. RADPYS V4, yıl sonuna 60 gün ve 30 gün kala kademeli erken uyarı rozetleri ([⏳ 45g], [🚨 15g]) üreterek personelin hakkının zamanaşımına uğramasını önler."
                },
                {
                    q: "RKE DIN 6857-1 / DIN 6857-2 Kurşun Koruyucu Ekipman modülü ne sağlar?",
                    a: "Kurşun önlük, tiroid koruyucu, gonat koruyucu ve kurşun eldivenlerin yıllık skopi kontrollerini, fiziksel muayenelerini ve kurşun eşdeğeri (Pb mm) ölçümlerini takip eder. Her ekipmana özel karekod üretir ve hasarlı ekipmanların 2 aşamalı HEK tutanağı ile kullanım dışı yapılmasını sağlar."
                },
                {
                    q: "Veri güvenliği ve KVKK 6698 uyumu nasıl sağlanır?",
                    a: "Personel sağlık raporları, dozimetre dökümleri ve özlük evrakları sunucu diskine açık yazılmaz. AES-256 Fernet algoritmasıyla şifreli blob formatında PostgreSQL veritabanında saklanır. KVKK Madde 11 kapsamında şifreli ZIP personel veri ihracı imkanı sunar."
                },
                {
                    q: "SKS 6.1 Kalite Standartları ve İstenmeyen Olay Bildirimi (İOBS) entegrasyonu var mı?",
                    a: "Evet. Sağlıkta Kalite Standartları Versiyon 6.1 ile birebir uyumlu İstenmeyen Olay Bildirim Modülü içerir. Doz aşımı, cihaz arızası veya kontaminasyon durumlarında Düzeltici Önleyici Faaliyet (DÖF / CAPA) akışları başlatılır ve resmi Excel/PDF çıktıları alınabilir."
                }
            ]
        },

        roadmap: {
            waves: [
                {
                    id: "wave1",
                    num: "01",
                    color: "teal",
                    gridCols: "lg:grid-cols-3",
                    kicker: "Öncelikli Dağıtım",
                    title: "DALGA 1: Altyapısı Hazır Hızlı Kazanımlar",
                    phases: [
                        {
                            code: "FAZ 01",
                            status: "Altyapı Hazır",
                            statusDot: "bg-emerald-400 animate-ping",
                            statusColor: "text-emerald-400",
                            title: "Saha / Tablet QR-Barkod Muayene & Hızlı Envanter Asistanı",
                            desc: "Medikal Fizikçiler ve RKE sorumluları için sahada doğrudan tablet kamerasıyla QR/Barkod okutma, skopi altındaki kurşun önlük ve paravan çatlaklarını interaktif krokide işaretleme ve anlık fotoğraf kaydı.",
                            bullets: [
                                "DIN 6857-1 skopi kusur haritalama & interaktif grid",
                                "Çevrimdışı (Offline-first) PWA & SQLite yerel önbellek",
                                "Otomatik barkodlu durum etiketi & seri no eşleme"
                            ],
                            footerLeft: "Odak: RKE & Saha Hızı",
                            footerRight: "Mobil / Tablet PWA"
                        },
                        {
                            code: "FAZ 02",
                            status: "Foundation AI",
                            statusDot: "bg-cyan-400",
                            statusColor: "text-cyan-400",
                            glow: true,
                            title: "Google TimesFM ile Yapay Zekâlı Doz Trend Tahmini & Klinik Rotasyon",
                            desc: "Google Research'ün 1 trilyon zaman serisiyle önceden eğitilmiş <strong>TimesFM (Zero-Shot Transformer)</strong> modeliyle, 6 ay önceden 20 mSv NDK limit aşım riskini tespit eder ve proaktif rotasyon simülasyonu önerir.",
                            bullets: [
                                "Sıfır ek model eğitimi (Zero-Shot) ile yüksek doğruluk",
                                "Çok değişkenli (Vaka yoğunluğu, modalite, nöbet) risk tahmini",
                                "Radyasyonsuz alanlara (MRG/USG) otomatik akıllı rotasyon"
                            ],
                            footerLeft: "Odak: Kestirimci Güvenlik",
                            footerRight: "TimesFM 1.0 AI"
                        },
                        {
                            code: "FAZ 03",
                            status: "Denetim Simülatörü",
                            statusDot: "bg-teal-400",
                            statusColor: "text-teal-400",
                            title: "NDK & SKS \"Otomatik Denetim Simülatörü\" & Uygunsuzluk Risk Karnesi",
                            desc: "Tek tıkla kurumun tüm veritabanını tarar; lisans vizeleri, eksik kalibrasyonlar, muayenesiz kurşun önlükler ve şua izinlerini 100 puanlık resmi NDK/SKS 6.1 denetim risk karnesine dönüştürür.",
                            bullets: [
                                "Resmi NDK / SKS Sağlıkta Kalite maddeleriyle birebir eşleşme",
                                "Otomatik DÖF (Düzeltici Önleyici Faaliyet) görevi atama",
                                "Yönetici özet denetim hazırbulunuşluk PDF çıktısı"
                            ],
                            footerLeft: "Odak: Sıfır İdari Ceza",
                            footerRight: "Mevzuat Uyumu"
                        }
                    ]
                },
                {
                    id: "wave2",
                    num: "02",
                    color: "cyan",
                    gridCols: "lg:grid-cols-2",
                    kicker: "Klinik & İletişim Entegrasyonu",
                    title: "DALGA 2: Kurumsal İletişim, Etkileşimli Onay ve DICOM Entegrasyonu",
                    phases: [
                        {
                            code: "FAZ 04",
                            status: "Kurumsal Tebligat",
                            statusColor: "text-cyan-400",
                            title: "E-Posta & SMS Bildirim, Tebligat, Kanal Ayrıştırmalı OTP & Magic-Link Onay Sistemi",
                            desc: "Kademeli kurumsal onay (Birim Sorumlusu → Medikal Fizik → Başhekimlik), SMS OTP doğrulaması ve kritik NDK limit aşımı/kaza bildirimlerinde zorunlu paralel SMS fail-safe mimarisi.",
                            bullets: [
                                "Tek kullanımlık tokenlı Magic-Link onay",
                                "Resmi tebligat teslim & okundu logu (HMAC-SHA256)",
                                "Güvenli takvim (.ics) ve PDF indirme tokenları",
                                "Kurumsal DMZ / Proxy ve SMTP/SMS gateway desteği"
                            ],
                            twoColBullets: true,
                            footerLeft: "Protokol: OTP + Magic-Link + HMAC",
                            footerRight: "KVKK & Güvenlik"
                        },
                        {
                            code: "FAZ 05",
                            status: "PACS / DICOM Bridge",
                            statusColor: "text-cyan-400",
                            title: "PACS / DICOM RDSR Doz Akış Köprüsü (C-STORE SCP Servisi)",
                            desc: "Hastane PACS sunucusundan BT, Anjiyografi ve Mamografi modalitelerinden fırlatılan DICOM RDSR (Radiation Dose Structured Report) nesnelerini otomatik dinleyen, CTDIvol, DLP, DAP metriklerini çekip personelle eşleştiren mikroservis.",
                            bullets: [
                                "C-STORE SCP arka plan dinleyicisi (Pynetdicom / Fo-Dicom)",
                                "BT: CTDIvol, DLP | Anjiyo: DAP, Skopi Süresi ayrıştırma",
                                "Personel nöbet çizelgesiyle otomatik hekim/teknisyen eşleme",
                                "Cihaz ve oda bazlı anlık radyasyon yükü analitiği"
                            ],
                            twoColBullets: true,
                            footerLeft: "Standart: DICOM PS 3.16 RDSR",
                            footerRight: "PACS Doz Köprüsü"
                        }
                    ]
                },
                {
                    id: "wave3",
                    num: "03",
                    color: "purple",
                    gridCols: "lg:grid-cols-3",
                    kicker: "İleri Teknoloji & Donanım",
                    title: "DALGA 3: İleri Seviye IoT, Edge AI ve Klinik Optimizasyon",
                    phases: [
                        {
                            code: "FAZ 06",
                            status: "IoT Telemetri",
                            statusColor: "text-purple-400",
                            title: "IoT Gerçek Zamanlı Ortam Dedektör Telemetrisi & Mimari Canlı Isı Haritası",
                            desc: "Wi-Fi, Zigbee veya MQTT protokolüyle çalışan alan radyasyon monitörlerinden gelen anlık µSv/h akışını interaktif departman mimari krokisinde IDW enterpolasyonuyla canlı ısı haritası olarak sunar.",
                            bullets: [
                                "MQTT / WebSocket üzerinden milisaniyelik veri akışı",
                                "Eşik aşımı anında ekranda görsel & sesli flaş alarm",
                                "Kat ve oda bazında geçmişe dönük doz sızıntı simülasyonu"
                            ],
                            footerLeft: "Protokol: MQTT / WebSocket",
                            footerRight: "Canlı Telemetri"
                        },
                        {
                            code: "FAZ 07",
                            status: "Edge Vision AI",
                            statusColor: "text-pink-400",
                            glow: true,
                            title: "Edge AI / Görüntü İşleme ile Odaya Girişte RKE & Dozimetre Güvenlik Kontrolü",
                            desc: "Anjiyografi ve Skopi oda girişlerindeki tablet/IP kamera ile personelin kurşun önlük, tiroid koruyucu ve yakasında dozimetre bulunup bulunmadığını 0.2 saniyede denetleyen hafif Edge YOLOv8 modeli.",
                            bullets: [
                                "0.2 saniye hızında yerel Edge cihazında tespit (YOLOv8-Nano)",
                                "Dozimetresiz ve kurşun koruyucusuz girişte anlık sesli ikaz",
                                "Yüz tanıma yapılmaz — %100 KVKK uyumlu nesne tespiti"
                            ],
                            footerLeft: "Model: YOLOv8 On-Device",
                            footerRight: "Edge Güvenlik"
                        },
                        {
                            code: "FAZ 08",
                            status: "Klinik Optimizasyon",
                            statusColor: "text-purple-400",
                            title: "Hasta Kümülatif Doz Takibi, Ulusal DRL Optimizasyonu & Kestirimci Tüp Ömrü",
                            desc: "Hastanın modaliteler arası kümülatif dozu, Sağlık Bakanlığı ulusal DRL (Diagnostik Referans Seviyeleri) kıyaslaması ve TimesFM ile X-ışını tüpü yıpranma zamanını tahmin eden kestirimci bakım motoru.",
                            bullets: [
                                "Ulusal DRL referans seviyeleriyle otomatik anomalik protokol uyarısı",
                                "Hasta bazında ömür boyu kümülatif radyasyon profili (EURATOM uyumlu)",
                                "Cihaz X-Işını tüp ömrü arıza kestirimi ile plansız duruşları önleme"
                            ],
                            footerLeft: "Kapsam: DRL & Tüp Ömrü",
                            footerRight: "EURATOM & SKS"
                        }
                    ]
                }
            ],
            techPillars: [
                {
                    badge: "AI",
                    color: "teal",
                    title: "Zero-Shot TimesFM",
                    desc: "Doz verilerini harici buluta göndermeden yerel çıkarımla 6 ay önceden trend analizi."
                },
                {
                    badge: "DICOM",
                    color: "cyan",
                    title: "DICOM PS 3.16 RDSR",
                    desc: "PACS sunucularıyla doğrudan C-STORE SCP köprüsü ile el değmeden otomatik doz aktarımı."
                },
                {
                    badge: "EDGE",
                    color: "purple",
                    title: "Edge Vision & IoT",
                    desc: "Yüz tanıma yapılmaksızın sadece RKE/Dozimetre tespiti yapan ve MQTT telemetrisi sunan uç cihazlar."
                },
                {
                    badge: "KVKK",
                    color: "pink",
                    title: "On-Premises & AES-256",
                    desc: "PostgreSQL 16, SQLCipher ve HMAC imzalı token mimarisiyle tam yasal mevzuat uyumu."
                }
            ],
            faq: [
                {
                    q: "Bu yeni modüller mevcut RADPYS V4 kullanıcılarına nasıl sunulacak?",
                    a: "Dalga 1 modülleri (Saha QR Asistanı, TimesFM Doz AI ve Denetim Simülatörü) V4.2 ve V4.3 minör güncellemeleri olarak Elit ve Pro lisans sahiplerine otomatik ve ücretsiz olarak dağıtılacaktır."
                },
                {
                    q: "PACS ve DICOM RDSR köprüsü hastane ağında güvenlik açığı yaratır mı?",
                    a: "Kesinlikle hayır. PACS Doz Köprüsü sadece yerel hastane LAN/DMZ ağı içinde çalışan ve dış dünyaya kapalı bir C-STORE SCP mikroservisidir. Görüntü piksel verilerini çekmez; sadece radyasyon dozu yapılandırılmış raporlarını (RDSR) işler."
                },
                {
                    q: "Google TimesFM yapay zekâ modeli için internet bağlantısı zorunlu mu?",
                    a: "Hayır. TimesFM modeli yerel sunucunuzda (ONNX / TorchScript) çalışacak şekilde optimize edilmiştir. Hastane içi hiçbir personel ya da klinik veri internete çıkmadan tamamen yerelde analiz edilir."
                }
            ]
        },

        about: {
            stack: [
                {
                    name: "PySide6 & Web PWA",
                    desc: "Native masaüstü performansı ve mobil tarayıcılardan yüklenebilir PWA portalı dengesi.",
                    icon: "M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4M15 3H9M9 3v18M15 3v18"
                },
                {
                    name: "PostgreSQL 14+/16",
                    desc: "Kurumsal çok kullanıcılı, yüksek eşzamanlılıklı ve ACID uyumlu veritabanı motoru.",
                    icon: "M4 6c0-1.1 3.6-2 8-2s8 0.9 8 2v12c0 1.1-3.6 2-8 2s-8-0.9-8-2V6zM4 6c0 1.1 3.6 2 8 2s8-0.9 8-2M4 12c0 1.1 3.6 2 8 2s8-0.9 8-2"
                },
                {
                    name: "KVKK AES-256 Kasası",
                    desc: "stored_files tablosunda AES-256 Fernet şifreleme, KVKK Madde 11 ZIP ihracı ve Audit Trail.",
                    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
                },
                {
                    name: "Sağlık Fiziği Ekibi",
                    desc: "Yazılım mühendisliği + medikal fizik uzmanlığı. Radyoloji sahasını birebir tanıyan ürün ekibi.",
                    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                }
            ],
            visionCards: [
                {
                    tag: "01 / Yapay Zekâ & Analitik",
                    color: "text-neon-teal",
                    title: "Öngörücü Doz Tahmini",
                    desc: "Geçmiş trendleri yapay zekâ ile işleyerek NDK limit aşım risklerini 6 ay önceden tahminleyen erken uyarı motoru."
                },
                {
                    tag: "02 / DICOM & Modalite",
                    color: "text-neon-cyan",
                    title: "PACS RDSR Doz Köprüsü",
                    desc: "BT ve Anjiyo cihazlarından çıkan DICOM RDSR yapısal doz verilerini doğrudan PACS sunucusundan otomatik okuma."
                },
                {
                    tag: "03 / Canlı Telemetri",
                    color: "text-purple-400",
                    title: "IoT Gerçek Zamanlı Sensörler",
                    desc: "Kablosuz oda radyasyon dedektörlerinden gelen anlık telemetri verilerini kat planlarında canlı ısı haritasına dönüştürme."
                },
                {
                    tag: "04 / E-Sağlık Ekosistemi",
                    color: "text-amber-400",
                    title: "Bakanlık & NDK Bulut Köprüsü",
                    desc: "Ulusal sağlık sistemleri ve denetim portalları ile çift yönlü, şifreli ve otomatik veri senkronizasyon katmanı."
                }
            ]
        }
    };

    window.RADPYS = {
        VERSION_INFO,
        SITE_CONFIG,
        STATS,
        LOGOS,
        TESTIMONIALS,
        BLOG_POSTS,
        MODULES,
        FUTURE_MODULES,
        TIERS_DATA,
        PRICING_FAQ,
        PAGE_CONTENT
    };
})();
