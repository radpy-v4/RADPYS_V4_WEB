/* ==========================================================================
   RADPYS V4 — Kurumsal Ayarlar, Sürüm Bilgisi, İstatistikler ve Referanslar
   ========================================================================== */

(function () {
    window.RADPYS = window.RADPYS || {};
    const VERSION_INFO = {
            "version": "4.0.5.22",
            "series": "V4.0.5",
            "release_date": "2026-11-13",
            "download_url": "https://download.radpys.com.tr/releases/RADPYS_Setup_latest.exe",
            "changelog_sections": 81
    };

    const SITE_CONFIG = {
            "brandName": "RADPYS",
            "siteUrl": "https://radpys.com.tr",
            "downloadUrl": "https://download.radpys.com.tr/releases/RADPYS_Setup_latest.exe",
            "contact": {
                    "email": "radpys.iletisim@gmail.com",
                    "phone": "+90 312 000 00 00",
                    "address": "Cyberpark Teknoloji Geliştirme Bölgesi, Bilkent, Ankara",
                    "cityTag": "Ankara / TR",
                    "coords": "39.90° K · 32.85° D",
                    "googleScriptUrl": "https://script.google.com/macros/s/AKfycbyZqr30B2-7LR8TerL6G71biIAAUHuye333Pd5gFut56PvvxquLWg7Tq-3q6Sb0mm0H/exec"
            },
            "socials": {
                    "linkedin": "https://www.linkedin.com/in/cem-kara-633b11429",
                    "facebook": "https://www.facebook.com/profile.php?id=61593139902770",
                    "youtube": "https://www.youtube.com/@RADPYS_V4"
            },
            "navLinks": [
                    {
                            "href": "moduller.html",
                            "label": "Modüller"
                    },
                    {
                            "href": "gelistirme-planlari.html",
                            "label": "Yol Haritası"
                    },
                    {
                            "href": "fiyatlandirma.html",
                            "label": "Fiyatlandırma"
                    },
                    {
                            "href": "help/index.html",
                            "label": "Dokümanlar"
                    },
                    {
                            "href": "kaynaklar.html",
                            "label": "Kaynaklar"
                    },
                    {
                            "href": "hakkimizda.html",
                            "label": "Hakkımızda"
                    },
                    {
                            "href": "iletisim.html",
                            "label": "İletişim"
                    }
            ]
    };

    const STATS = {
            "institutions": 84,
            "users": 6200,
            "years": 8,
            "modules": 23
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
                    "quote": "RADPYS V4'ün DIN 6857-1 RKE modülü ve İnteraktif Ortam Dozu Krokisi sayesinde SKS denetimlerinde teftiş heyetine tüm odaların ve kurşun önlüklerin durumunu canlı haritada sunduk. Denetime hazırlık süremiz 2 saate indi.",
                    "author": "Prof. Dr. M. Aydın",
                    "role": "Radyoloji Bölüm Başkanı",
                    "org": "Anadolu Üniversite Hastanesi",
                    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc4NDcyMjY5N3ww&ixlib=rb-4.1.0&q=85"
            },
            {
                    "quote": "Nöbet dağıtım algoritması ve web portal üzerinden 2 aşamalı devir onayı nöbet tartışmalarını tamamen bitirdi. Mobil PWA ile teknikerlerimiz vardiyalarını telefonlarından anlık takip ediyor.",
                    "author": "Dr. Ece K.",
                    "role": "Nükleer Tıp Uzmanı",
                    "org": "Mavi Görüntüleme Merkezi",
                    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc4NDcyMjY5N3ww&ixlib=rb-4.1.0&q=85"
            },
            {
                    "quote": "Cihazların üzerindeki QR karekodları telefonla okutup arıza bildirme ve online sınav LMS motoru kliniğimizin dijitalleşmesinde devrim yarattı. PostgreSQL altyapısı ve KVKK AES-256 evrak kasası tam güven veriyor.",
                    "author": "Uzm. S. Yılmaz",
                    "role": "Radyasyondan Sorumlu Uzman (RKS)",
                    "org": "Beyaz Diş & Sağlık Grubu",
                    "avatar": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwb2ZmaWNlJTIwdGVhbXxlbnwwfHx8fDE3ODQ3MjI2OTd8MA&ixlib=rb-4.1.0&q=85"
            }
    ];

    Object.assign(window.RADPYS, {
        VERSION_INFO,
        SITE_CONFIG,
        STATS,
        LOGOS,
        TESTIMONIALS
    });
})();
