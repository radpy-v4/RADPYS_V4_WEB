/* ==========================================================================
   RADPYS V4 — Static Site Shared Data
   Blog yazıları, testimonial'lar, stats ve modüller burada tutuluyor.
   Yeni yazı eklemek için sadece BLOG_POSTS listesine bir obje ekleyin.
   ========================================================================== */

(function () {
    const STATS = {
        institutions: 84,
        users: 6200,
        years: 8,
        modules: 14,
    };

    const TESTIMONIALS = [
        {
            quote:
                "RADPYS V4'ün DIN 6857-1 RKE modülü ve İnteraktif Ortam Dozu Krokisi sayesinde SKS denetimlerinde teftiş heyetine tüm odaların ve kurşun önlüklerin durumunu canlı haritada sunduk. Denetime hazırlık süremiz 2 saate indi.",
            author: "Prof. Dr. M. Aydın",
            role: "Radyoloji Bölüm Başkanı",
            org: "Anadolu Üniversite Hastanesi",
            avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc4NDcyMjY5N3ww&ixlib=rb-4.1.0&q=85",
        },
        {
            quote:
                "Nöbet dağıtım algoritması ve web portal üzerinden 2 aşamalı devir onayı nöbet tartışmalarını tamamen bitirdi. Mobil PWA ile teknikerlerimiz vardiyalarını telefonlarından anlık takip ediyor.",
            author: "Dr. Ece K.",
            role: "Nükleer Tıp Uzmanı",
            org: "Mavi Görüntüleme Merkezi",
            avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc4NDcyMjY5N3ww&ixlib=rb-4.1.0&q=85",
        },
        {
            quote:
                "Cihazların üzerindeki QR karekodları telefonla okutup arıza bildirme ve online sınav LMS motoru kliniğimizin dijitalleşmesinde devrim yarattı. PostgreSQL altyapısı ve KVKK AES-256 evrak kasası tam güven veriyor.",
            author: "Uzm. S. Yılmaz",
            role: "Radyasyondan Sorumlu Uzman (RKS)",
            org: "Beyaz Diş & Sağlık Grubu",
            avatar:
                "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwb2ZmaWNlJTIwdGVhbXxlbnwwfHx8fDE3ODQ3MjI2OTd8MA&ixlib=rb-4.1.0&q=85",
        },
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

    const MODULES = [
        { icon: "M13 3 6 12h5l-1 9 7-9h-5l1-9Z", name: "Nöbet Planlaması", desc: "Şeffaf Solver algoritması ile adil, kısıt-bilinçli çizelgeler ve çapraz görevlendirme.", tag: "01" },
        { icon: "M12 2v6M12 16v6M4 12h6M14 12h6M6.34 6.34l4.24 4.24M13.42 13.42l4.24 4.24M6.34 17.66l4.24-4.24M13.42 10.58l4.24-4.24", name: "Dozimetre Takibi", desc: "Hp10/Hp0.07/Hp3 doz analitiği, NDK limit uyarıları ve risk haritası.", tag: "02" },
        { icon: "M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z", name: "İzin Yönetimi", desc: "2-Aşamalı onay akışı (Ön onay/Resmi onay), bakiye ve takım takvimi.", tag: "03" },
        { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z", name: "Fiili Hizmet & Şua Hakedişi", desc: "Hibrit model ile 0-30 gün yasal Sağlık (Şua) İzni gün tespiti.", tag: "04" },
        { icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z", name: "Sağlık Muayeneleri", desc: "NDK 365 gün kuralı, Dahiliye/Dermatoloji/Göz onayları ve evrak arşivi.", tag: "05" },
        { icon: "M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z", name: "Olay Bildirimi & DÖF", desc: "Web Portal 3 adımlı sihirbaz, kök neden analizi ve CAPA yönetimi.", tag: "06" },
        { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", name: "NDK 72s Bildirim Takibi", desc: "72 saatlik yasal kaza/olay bildirim takibi ve dijital geri sayım sayacı.", tag: "07" },
        { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", name: "Gebelik & Yönetici Aksiyonu", desc: "Otomatik nöbet iptali ve 3 adımlı ikame atama sihirbazı.", tag: "08" },
        { icon: "M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z", name: "Koruyucu Ekipman (RKE)", desc: "DIN 6857-1 skopi muayenesi, akıllı kodlama ve otomatik karar motoru.", tag: "09" },
        { icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", name: "Ortam Dozu & İnteraktif Kroki", desc: "Mimari plan canlı pinleri, SKS 6.1 SRG11.02 resmi Excel denetim raporu.", tag: "10" },
        { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", name: "Tıbbi Cihaz & QR Arıza", desc: "2D QR etiketler, sahada kamerayla anında arıza bildirme ve teknik servis.", tag: "11" },
        { icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", name: "Hizmet İçi Eğitim LMS", desc: "Merkezi soru bankası havuzu, online sınav motoru ve eğitim uyum matrisi.", tag: "12" },
        { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", name: "Evrensel Onay & Diff View", desc: "5 kategori onay kuyruğu, görsel Diff karşılaştırması ve şifahi onay bypass.", tag: "13" },
        { icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", name: "Raporlar & KVKK Kasası", desc: "7 kategori kurumsal matbu rapor, dinamik başlıklar ve tek tıkla ZIP veri ihracı.", tag: "14" },
    ];

    window.RADPYS = { STATS, TESTIMONIALS, BLOG_POSTS, MODULES };
})();
