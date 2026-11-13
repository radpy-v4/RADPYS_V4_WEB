/* ==========================================================================
   RADPYS V4 — Kaynaklar, Mevzuat ve NDK Teknik Kılavuz Yazıları
   ========================================================================== */

(function () {
    window.RADPYS = window.RADPYS || {};
    const BLOG_POSTS = [
            {
                    "slug": "radyoloji-kanunlar-ve-yasal-dayanaklar",
                    "title": "Radyoloji Departmanlarında Uyulması Gereken Temel Kanunlar ve Yasal Dayanaklar",
                    "excerpt": "3153 Sayılı Kanun (35 saat çalışma & şua izni), 6698 KVKK, 6331 İSG, 657 DMK, 2238 ve 5624 sayılı kanunların özet rehberi.",
                    "content": [
                            "Radyoloji departmanlarının çalışma süreleri, şua izinleri, veri güvenliği ve çalışan sağlığına dair ana yasal çerçeveyi oluşturan kanunlar:",
                            "<strong>3153 Sayılı Kanun:</strong> Radyoloji, Radiyom ve Elektrikle Tedavi Müesseseleri Hakkında Kanun. Haftalık 35 saatlik çalışma sınırının ve yasal şua izni hakedişlerinin ana yasal dayanağıdır. <a href=\"https://www.saglik.gov.tr/TR-10397/radyoloji-radiyom-ve-elektrikle-tedavi-ve-diger-fizyoterapi-muesseseleri-hakkinda-kanun.html\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                            "<strong>6698 Sayılı KVKK:</strong> Kişisel Verilerin Korunması Kanunu. Personel dozimetre geçmişi ve sağlık taraması gibi hassas kişisel verilerin AES-256 algoritmasıyla şifreli saklanması zorunluluğunun yasal temelidir. <a href=\"https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6698.pdf\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                            "<strong>6331 Sayılı İSG Kanunu:</strong> İş Sağlığı ve Güvenliği Kanunu. Radyasyon çalışanlarının periyodik sağlık kontrolleri ve risk analizlerinin yasal temelidir. <a href=\"http://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                            "<strong>657 Sayılı DMK:</strong> Devlet Memurları Kanunu. Kamu sağlık kurumlarındaki personelin çalışma koşulları ve özlük haklarını belirler. <a href=\"https://www.mevzuat.gov.tr/MevzuatMetin/1.5.657.pdf\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                            "<strong>2238 Sayılı Kanun:</strong> Organ ve Doku Alınması, Saklanması ve Nakli Hakkında Kanun. Radyolojik görüntüleme gerektiren organ nakli süreçlerinin yasal çerçevesidir. <a href=\"https://www.mevzuat.gov.tr/MevzuatMetin/1.5.2238.pdf\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>",
                            "<strong>5624 Sayılı Kanun:</strong> Kan ve Kan Ürünleri Kanunu. Hastanelerdeki kan ışınlama ünitelerinin güvenliği ile doğrudan ilişkilidir. <a href=\"https://www.resmigazete.gov.tr/eskiler/2007/05/20070502-1.htm\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Metni 📄</a>"
                    ],
                    "category": "Mevzuat & Kanunlar",
                    "cover": "images/cover_mevzuat_kanunlar.jpg",
                    "author": "Hukuk Ekibi",
                    "readTime": 5
            },
            {
                    "slug": "radyoloji-hizmetleri-yonetmeligi-ve-guncellemeleri",
                    "title": "Radyoloji Hizmetleri Yönetmeliği ve Güncel Değişiklikler Rehberi",
                    "excerpt": "26 Nisan 2022 Ana Yönetmelik metni ile 2023 ve 16 Aralık 2025 tarihli en son Resmi Gazete revizyonlarının özeti.",
                    "content": [
                            "Sağlık kuruluşlarındaki radyoloji ünitelerinin açılış, lisanslama, denetleme ve çalışma koşullarına ilişkin ana yönetmelik ve güncel revizyonlar:",
                            "<strong>16 Aralık 2025 Değişiklik Yönetmeliği:</strong> Özel radyoloji merkezlerinin il dışı taşınma sınırları, mesul müdürlerin tam zamanlı çalışma esası ve karekodlu kimlik kartı zorunluluğu. <a href=\"https://www.resmigazete.gov.tr/eskiler/2025/12/20251216-1.htm\" target=\"_blank\" class=\"text-neon-teal underline\">16 Aralık 2025 Resmi Gazete Metni 📄</a>",
                            "<strong>25 Nisan 2023 Değişiklik Yönetmeliği:</strong> Kamu, üniversite ve özel sektöre ait birimlerin denetim ve usul esaslarındaki revizyonlar. <a href=\"https://www.resmigazete.gov.tr/eskiler/2023/04/20230425-7.htm\" target=\"_blank\" class=\"text-neon-teal underline\">25 Nisan 2023 Resmi Gazete Metni 📄</a>",
                            "<strong>26 Nisan 2022 Ana Yönetmelik Metni:</strong> Haftalık 35 saat çalışma süresi, cihaz odası yapısal standartları ve arşivleme zorunlulukları. <a href=\"https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=39534&MevzuatTur=7&MevzuatTertip=5\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Bilgi Sistemi Ana Metni 📄</a>",
                            "<strong>İyonlaştırıcı Radyasyon Sağlık Hizmetleri Yönetmeliği (5 Temmuz 2022):</strong> BT, röntgen ve anjiyo ünitelerinde radyasyon güvenliği ve cihaz ruhsatlandırma esasları. <a href=\"https://www.resmigazete.gov.tr/eskiler/2022/07/20220705-1.htm\" target=\"_blank\" class=\"text-neon-teal underline\">5 Temmuz 2022 Resmi Gazete Metni 📄</a>"
                    ],
                    "category": "Mevzuat & Kanunlar",
                    "cover": "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=940",
                    "author": "Mevzuat Analiz",
                    "readTime": 5
            },
            {
                    "slug": "ndk-teknik-kilavuzlar-rehberi",
                    "title": "Nükleer Düzenleme Kurumu (NDK) Resmi Teknik Kılavuzları Rehberi",
                    "excerpt": "NDK tarafından yayımlanan kişisel dozimetre kullanımı (KLV-016), koruyucu donanımlar (KLV-020) ve radyasyondan korunma programları (KLV-014) tam indirme listesi.",
                    "content": [
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
                    "category": "NDK Kılavuzları",
                    "cover": "images/cover_ndk_kilavuzlar.jpg",
                    "author": "NDK Mevzuat Analiz",
                    "readTime": 6
            },
            {
                    "slug": "saglik-bakanligi-genelgeleri-ve-sks61-rehberi",
                    "title": "Sağlık Bakanlığı Genelgeleri ve SKS 6.1 Standartları Rehberi",
                    "excerpt": "Genelge 2012/34 (Radyasyon personeli çalışma esasları), Genelge 2012/23 (Çalışan güvenliği) ve SKS 6.1 SRG 18 kalite standardı özeti.",
                    "content": [
                            "Hastanelerin kalite denetimlerinde ve günlük işleyişinde uymak zorunda olduğu Sağlıkta Kalite Standartları ve Bakanlık idari talimatlarıdır:",
                            "<strong>Sağlık Bakanlığı Radyasyon Kaynaklarıyla Çalışan Personele İlişkin Genelge (2012/34):</strong> Nöbet, şua izinleri ve çalışma biçimleri üzerine pratik idari genelgedir. <a href=\"https://www.saglik.gov.tr/TR-11051/radyasyon-kaynaklariyla-calisan-personele-iliskin-genelge-201234.html\" target=\"_blank\" class=\"text-neon-teal underline\">Bakanlık Portalı Bağlantısı 🔗</a>",
                            "<strong>Sağlık Bakanlığı Çalışan Güvenliğinin Sağlanması Genelgesi (2012/23):</strong> Sağlık kurumlarında güvenli çalışma koşullarının tesisi için asgari kriterleri koyar. <a href=\"https://www.saglik.gov.tr/TR,3282/calisan-guvenligi-genelgesi-14052012.html\" target=\"_blank\" class=\"text-neon-teal underline\">Genelge Metni 🔗</a>",
                            "<strong>Sağlıkta Kalite Standartları (SKS) Sürüm 6.1 - Radyasyon Güvenliği (SRG) Bölümü:</strong> Kalite denetimlerinde hastanelerin uymak zorunda olduğu SRG11.02 gibi temel standartları ve kümülatif doz takip ölçütlerini belirler. <a href=\"https://skskalite.com.tr/\" target=\"_blank\" class=\"text-neon-teal underline\">SKS Kalite Portalı 🔗</a>"
                    ],
                    "category": "Mevzuat & Kanunlar",
                    "cover": "images/cover_mevzuat_kanunlar.jpg",
                    "author": "Kalite & Denetim Ekibi",
                    "readTime": 4
            },
            {
                    "slug": "dozimetre-takibi-ve-kumatik-doz-analizi",
                    "title": "Dozimetre Takibi ve NDK/ICRP Kümülatif Doz Sınırları Rehberi",
                    "excerpt": "Aylık ve yıllık dozimetre okumaları, kümülatif doz sınırları (ICRP 103) ve eşik aşım uyarıları.",
                    "content": [
                            "Nükleer Düzenleme Kurumu (NDK) ve uluslararası ICRP 103 standartlarına göre radyasyon çalışanlarının kümülatif dozimetre verileri düzenli saklanmalıdır.",
                            "Aylık ve yıllık doz sınırlarının takibinde eşik aşımı ulaşıldığında otomatik uyarı sistemlerinin bulunması olası ihlallerin önüne geçer.",
                            "RADPYS V4 dozimetre takip modülü, geçmiş döneme ait verileri PostgreSQL ve AES-256 ile saklar ve denetim anında tek tıkla resmi standartlara uygun rapor çıktısı verir."
                    ],
                    "category": "Radyasyon Güvenliği",
                    "cover": "images/cover_dozimetre_analiz.jpg",
                    "author": "Güvenlik Ekibi",
                    "readTime": 5
            },
            {
                    "slug": "radyasyon-olay-ve-dof-bildirimleri",
                    "title": "Olay Bildirimleri ve SKS 6.1 Uyumlu DÖF Yönetimi",
                    "excerpt": "Radyasyon kaynaklı olay bildirimlerinin zaman damgalı loglanması ve DÖF (Düzeltici Önleyici Faaliyet) süreçleri.",
                    "content": [
                            "Sağlıkta Kalite Standartları (SKS 6.1) çerçevesinde hastanelerde yaşanan radyasyon olaylarının takibi ve bildirimi zorunludur.",
                            "RADPYS V4 olay bildirim modülü, Web Portalı üzerinden 3 adımda anonim bildirimden DÖF aksiyon takibine kadar tüm süreci dijitalleştirir. Zaman damgalı loglar ve 72 saatlik NDK bildirim sayacı ile sıfır ceza garantisi sağlar."
                    ],
                    "category": "Radyasyon Güvenliği",
                    "cover": "images/cover_dozimetre_analiz.jpg",
                    "author": "Güvenlik Ekibi",
                    "readTime": 4
            },
            {
                    "slug": "radyoloji-nobet-ve-izin-planlama-rehberi",
                    "title": "Radyoloji Nöbet ve İzin Planlamasında Yapılan 5 Hata ve Akıllı Algoritma",
                    "excerpt": "Haftalık 35 saat çalışma sınırı, Şua izinleri ve kısıt-tabanlı adil nöbet çizelgesi hazırlama rehberi.",
                    "content": [
                            "Radyoloji birimlerinde adil bir nöbet listesi hazırlamak ve 35 saatlik yasal sınırı korumak hayati önem taşır.",
                            "1. Manuel hesaplamalarda hafta sonu ve bayram nöbetlerinin dengesiz dağıtılması.",
                            "2. Yasal dinlenme ve şua izni çakışmalarının gözden kaçırılması.",
                            "3. Kişisel izin taleplerinin ve hamilelik/sağlık kısıtlarının takip edilememesi.",
                            "4. Nöbet değişim taleplerinin sözlü yapılması sonucu yaşanan takipsizlik.",
                            "5. Çizelgelerin gecikmeli yayınlanarak personelin kişisel planlamasını zorlaştırması.",
                            "RADPYS V4 kısıt-tabanlı akıllı nöbet algoritması ve çapraz görevlendirme desteği ile tüm bu değişkenleri hesaplayarak saniyeler içinde adil nöbet çizelgeleri üretir."
                    ],
                    "category": "Rehber & Ürün",
                    "cover": "images/cover_nobet_planlama.jpg",
                    "author": "Operasyon Ekibi",
                    "readTime": 5
            },
            {
                    "slug": "kvkk-ve-saglik-verileri-guvenligi-rehberi",
                    "title": "KVKK (6698) ve Özel Nitelikli Sağlık Verilerinin Yerel Ağda Korunması",
                    "excerpt": "Sağlık ve dozimetri verilerinin AES-256 ile şifrelenmesi, KVKK ZIP ihracı ve çevrimdışı masaüstü veritabanı güvenliği.",
                    "content": [
                            "Kişisel Verilerin Korunması Kanunu (KVKK), sağlık verilerini özel nitelikli kişisel veri olarak sınıflandırır.",
                            "RADPYS V4, tüm personel, dozimetre ve sağlık muayenesi evraklarını PostgreSQL veritabanında AES-256 Fernet ile şifreler. KVKK Madde 11 uyarınca personelin tüm verilerini tek tıkla taşınabilir ZIP paketi olarak ihraç etme ve rol bazlı erişim logu (Audit Trail) altyapısı sunar."
                    ],
                    "category": "Rehber & Ürün",
                    "cover": "images/cover_mevzuat_kanunlar.jpg",
                    "author": "Hukuk Ekibi",
                    "readTime": 5
            }
    ];

    Object.assign(window.RADPYS, {
        BLOG_POSTS
    });
})();
