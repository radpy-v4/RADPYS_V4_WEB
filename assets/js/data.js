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
        modules: 21,
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
        { icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z", name: "Kurulum & İlk Giriş", desc: "Win32 tekil kilit, Ed25519 lisanslama, parola politikası ve Ctrl+K Evrensel Arama.", tag: "01" },
        { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", name: "Kullanıcı & Rol Yönetimi", desc: "RBAC yetki matrisi, 4-göz veri onay kuralı ve güvenli oturum yönetimi.", tag: "02" },
        { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", name: "Sistem Ayarları & Tanımlar", desc: "Hiyerarşik departmanlar, kurumsal çift logo ve Word antet şablon motoru.", tag: "03" },
        { icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4", name: "Veritabanı Bakım & Güvenlik", desc: "PostgreSQL pg_dump yedekleme, WAL arşivleme, KVKK AES-256 ve SHA-256 denetim izi.", tag: "04" },
        { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", name: "Personel Yönetimi & İçe Aktar", desc: "Dinamik özlük kartı, Excel toplu aktarım motoru ve KVKK Madde 11 ZIP ihracı.", tag: "05" },
        { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", name: "İzin Yönetimi & Şua Hakediş", desc: "35s/40s bazlı şua bakiye motoru, 2 aşamalı onay akışı ve cari yıl koruma kilidi.", tag: "06" },
        { icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", name: "Nöbet Ayarları & Kısıtlar", desc: "Sert/yumuşak kısıt hiyerarşisi, adalet ağırlıkları ve slot bazlı kural tablosu.", tag: "07" },
        { icon: "M13 10V3L4 14h7v7l9-11h-7z", name: "Nöbet Hazırlık & Solver", desc: "CP-SAT matematiksel optimizasyon, çapraz görevlendirme ve çizelge matrisi.", tag: "08" },
        { icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", name: "Nöbet Devir, İkame & Becayiş", desc: "3 aşamalı devir onayı, acil mazeret ikame sihirbazı ve Web Portal havuzu.", tag: "09" },
        { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", name: "Nöbet Borç/Alacak & FM", desc: "Kıstelyevm hesaplama, 60s kurumsal kota, 130s yasal tavan ve Sudo dönem kilidi.", tag: "10" },
        { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", name: "Fiili Hizmet & Şua Hesaplama", desc: "Koşul A/B ayrımı, onaysız izin güvenlik bariyeri ve SGK puantaj cetveli.", tag: "11" },
        { icon: "M12 2v6M12 16v6M4 12h6M14 12h6M6.34 6.34l4.24 4.24M13.42 13.42l4.24 4.24M6.34 17.66l4.24-4.24M13.42 10.58l4.24-4.24", name: "Dozimetre Takibi & RD.F43", desc: "Hp(10)/Hp(0.07)/Hp(3) doz analitiği, NDK 72s tahkikatı ve doz araştırma formu.", tag: "12" },
        { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", name: "Sağlık Muayeneleri & Taramalar", desc: "NDK 365 gün kuralı, Dahiliye/Dermatoloji/Göz onayları ve evrak kasası.", tag: "13" },
        { icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", name: "Ortam Dozu & İnteraktif Kroki", desc: "Mimari kat planında canlı pinler, QR pasaportu ve SKS 6.1 SRG11.02 Excel raporu.", tag: "14" },
        { icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", name: "Olay Bildirimi & DÖF (CAPA)", desc: "Web Portal hızlı bildirim, kök neden analizi, CAPA aksiyonları ve NDK 72s sayacı.", tag: "15" },
        { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", name: "RGS / RSO Görevlendirme", desc: "Bakanlık & NDK yasal görevlendirmeleri, sertifika vize takibi ve resmi atama yazıları.", tag: "16" },
        { icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", name: "Hizmet İçi Eğitim & Sınav LMS", desc: "Soru bankası, Excel import, Web video/PDF eğitimi ve online barajlı sınav motoru.", tag: "17" },
        { icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", name: "Tıbbi Cihaz & NDK Lisans", desc: "4 renkli lisans rozeti, akıllı kod üreteci, kroki pinleme ve resmi NDK çizelgesi.", tag: "18" },
        { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", name: "Cihaz Arıza & QC Kalibrasyon", desc: "Tüp değişimi senkronizasyonu, QC başarısızlık kilidi ve mobil QR arıza konsolu.", tag: "19" },
        { icon: "M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z", name: "Koruyucu Ekipman (RKE)", desc: "DIN 6857-1 skopi SVG krokisi, mm² kusur analiz motoru ve SKS 6.1 Excel cetveli.", tag: "20" },
        { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", name: "Merkezi Onaylar & Raporlar", desc: "5 sekmeli onay paneli, görsel Diff karşılaştırması ve 17 resmi kurumsal rapor.", tag: "21" },
    ];

    window.RADPYS = { STATS, TESTIMONIALS, BLOG_POSTS, MODULES };
})();
