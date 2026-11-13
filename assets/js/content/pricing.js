/* ==========================================================================
   RADPYS V4 — Lisans Paketleri (Starter / Pro / Elite) ve Fiyatlandırma SSS
   ========================================================================== */

(function () {
    window.RADPYS = window.RADPYS || {};
    const versionStr = (window.RADPYS.VERSION_INFO && window.RADPYS.VERSION_INFO.version) || "4.0.5.22";

    const TIERS_DATA = [
            {
                    "id": "starter",
                    "code": "STARTER / BASIC",
                    "name": "Başlangıç Paketi",
                    "capacity": "Sınırsız Personel / Nöbet & İzin",
                    "desc": "Nöbet ve personel çözümü: klinikler, görüntüleme merkezleri ve hastaneler için sınırsız personel kapasiteli temel paket.",
                    "shopierUrl": "https://www.shopier.com/RADPYS/49366089",
                    "badge": null,
                    "features": [
                            "Nöbet Solver & AI Çizelgeleme Motoru",
                            "Nöbet Devir / İkame / Mazeret Yönetimi",
                            "Nöbet Borç / Alacak & Puantaj Cetvelleri",
                            "Personel Yönetimi & İzin Takibi (Şua / Yıllık)",
                            "Evrensel Onay Kuyruğu & Temel Sistem Ayarları"
                    ],
                    "locked": [
                            "Kişisel Dozimetre (RDF-43)",
                            "Periyodik Sağlık Muayeneleri",
                            "Fiili Hizmet Zammı (FHZ)",
                            "RGS Görevlendirmeleri",
                            "Cihaz & NDK Envanteri",
                            "Koruyucu Donanım (RKE)",
                            "Ortam Dozu Krokisi",
                            "LMS Online Sınav"
                    ],
                    "cta": "Satın Al",
                    "highlight": false,
                    "isElite": false,
                    "prices": {
                            "1": {
                                    "total": "2.000 ₺",
                                    "monthly": "2.000 ₺",
                                    "note": null
                            },
                            "3": {
                                    "total": "5.400 ₺",
                                    "monthly": "1.800 ₺",
                                    "note": "3 aylık peşin toplam 5.400 ₺ (%10 İndirim)"
                            },
                            "6": {
                                    "total": "9.600 ₺",
                                    "monthly": "1.600 ₺",
                                    "note": "6 aylık peşin toplam 9.600 ₺ (%20 İndirim)"
                            },
                            "12": {
                                    "total": "16.800 ₺",
                                    "monthly": "1.400 ₺",
                                    "note": "12 aylık peşin toplam 16.800 ₺ (%30 İndirim)"
                            }
                    }
            },
            {
                    "id": "pro",
                    "code": "PRO",
                    "name": "Pro Paket",
                    "capacity": "Sınırsız Personel / Kurumsal Ölçek",
                    "desc": "Radyasyon güvenliği ve sağlık takibi modülleri ile genişletilmiş çözüm: Pro paket, Başlangıç'ın tüm özelliklerini içerir ve ek radyasyon güvenliği fonksiyonları sunar.",
                    "shopierUrl": "https://www.shopier.com/RADPYS/49366367",
                    "isPro": true,
                    "badge": null,
                    "features": [
                            "Başlangıç Paketinin Tümü",
                            "Kişisel Dozimetre Takibi & RDF-43 Raporu",
                            "Periyodik Sağlık Muayeneleri & Risk Analizi",
                            "Fiili Hizmet Zammı (5510 SK FHZ Cetveli)",
                            "RGS / RSO Görevlendirme & Sertifika Takibi",
                            "Olay Bildirimi & DÖF (CAPA)"
                    ],
                    "locked": [
                            "Cihaz & NDK Envanteri",
                            "Cihaz Arıza, Bakım, QC, HEK",
                            "Koruyucu Donanım (RKE)",
                            "Ortam Dozu Krokisi",
                            "LMS Online Sınav"
                    ],
                    "cta": "Satın Al",
                    "highlight": false,
                    "isElite": false,
                    "prices": {
                            "1": {
                                    "total": "4.000 ₺",
                                    "monthly": "4.000 ₺",
                                    "note": null
                            },
                            "3": {
                                    "total": "10.800 ₺",
                                    "monthly": "3.600 ₺",
                                    "note": "3 aylık peşin toplam 10.800 ₺ (%10 İndirim)"
                            },
                            "6": {
                                    "total": "19.200 ₺",
                                    "monthly": "3.200 ₺",
                                    "note": "6 aylık peşin toplam 19.200 ₺ (%20 İndirim)"
                            },
                            "12": {
                                    "total": "33.600 ₺",
                                    "monthly": "2.800 ₺",
                                    "note": "12 aylık peşin toplam 33.600 ₺ (%30 İndirim)"
                            }
                    }
            },
            {
                    "id": "elite",
                    "code": "ELITE",
                    "name": "Elit Paket (V4 Elite)",
                    "capacity": "Sınırsız Kapasite + Tüm 23 Modül",
                    "desc": "Tam entegre kurumsal çözüm: Pro paketinin tümü + kurumsal envanter, bakım, QC, LMS, Rapor/Tutanak Merkezi ve interaktif ortam dozu krokisi gibi gelişmiş modüller.",
                    "shopierUrl": "iletisim.html",
                    "badge": `En Kapsamlı (v${versionStr})`,
                    "features": [
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
                    "cta": "Özel Teklif Al →",
                    "highlight": true,
                    "isElite": true,
                    "prices": null
            }
    ];

    const PRICING_FAQ = [
            {
                    "q": "Elit Paket ile diğer paketler arasındaki temel farklar nelerdir?",
                    "a": "Elit Paket; 23 kurumsal modülün tamamını, RKE ve DIN 6857-1 karar motorunu, ortam dozu krokisini, cihaz envanterini, bakım-QC-HEK akışını, Evrensel Tutanak Sihirbazı'nı ve LMS eğitimi içerir. Başlangıç ve Pro paketleri daha odaklı modül setleriyle gelir."
            },
            {
                    "q": "Kapasite veya personel sayısı aşılırsa ne olur?",
                    "a": "Başlangıç, Pro ve Elit paketlerimizin tamamında personel tanımlama ve nöbet planlama kapasitesi sınırsızdır. Paketler arasındaki fark yalnızca aktif olan kurumsal modül kapsamıdır."
            },
            {
                    "q": "NDK, TENMAK ve SKS 6.1 mevzuat güncellemeleri ücrete tabi midir?",
                    "a": "Hayır. Tüm paketlerimizde mevzuat güncellemeleri lisans süresi boyunca dahildir."
            },
            {
                    "q": "Ödeme periyotları nasıl çalışır?",
                    "a": "1, 3, 6 veya 12 aylık periyotlarla peşin ödeme seçeneği mevcuttur. Daha uzun süreli periyotlarda aylık maliyet düşer."
            },
            {
                    "q": "Verilerimiz nerede saklanıyor ve KVKK güvenliği nasıl sağlanıyor?",
                    "a": "RADPYS V4 verileriniz kurumunuzun kendi bünyesinde yerel sunucu veya bilgisayarlarda AES-256 ve SQLCipher ile şifrelenerek saklanır. PostgreSQL kurumsal altyapısı ile güvenli yedekleme ve KVKK uyumluluğu sağlanır."
            },
            {
                    "q": "Mevcut sistemimizden ve Excel'den geçiş yapabilir miyiz?",
                    "a": "Evet. Excel ve CSV raporlarından toplu içe aktarma sihirbazımız mevcuttur. Demo sürümündeki verileriniz de tam sürüme aktarılırken korunur."
            },
            {
                    "q": "Deneme sürümü var mı ve sınırı nedir?",
                    "a": "Evet, 30 günlük ücretsiz deneme sunuyoruz. Demo modunda kısıt kaldırılmıştır; tüm V4 modülleri (Elit dahil) sınırsız erişimle açılır. 30 gün sonunda 15. ve 3. gün uyarıları ve güvenli yönetici kilit ekranı devreye girer."
            }
    ];

    Object.assign(window.RADPYS, {
        TIERS_DATA,
        PRICING_FAQ
    });
})();
