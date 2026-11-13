/* ==========================================================================
   RADPYS V4 — Sayfa Bazlı İçerikler (Ana Sayfa, Yol Haritası, Hakkımızda)
   ========================================================================== */

(function () {
    window.RADPYS = window.RADPYS || {};
    const PAGE_CONTENT = {
            "home": {
                    "heroScreens": [
                            {
                                    "tabLabel": "Nöbet Solver Motoru",
                                    "title": "Modül 08: Otomatik Nöbet Solver Motoru & Kısıt Çözücü",
                                    "desc": "CBC / PuLP tabanlı matematiksel kısıt optimizasyonu ve adil nöbet dağıtım matrisi.",
                                    "img": "help/assets/img/08_nobet_cizelge_dialog.png",
                                    "link": "moduller.html#m-08"
                            },
                            {
                                    "tabLabel": "İnteraktif Doz Krokisi",
                                    "title": "Modül 14: Ortam Dozu & İnteraktif Mimari Plan Krokisi",
                                    "desc": "CAD/PDF kat planında canlı radyasyon pinleri, QR pasaportları ve SKS 6.1 SRG11.02 Excel raporu.",
                                    "img": "help/assets/img/14_1_ortam_dozu_kroki_haritasi_ana_ekran.png",
                                    "link": "moduller.html#m-14"
                            },
                            {
                                    "tabLabel": "DIN 6857 RKE Muayene",
                                    "title": "Modül 20: RKE Kurşun Koruyucu Ekipman & DIN 6857 Skopi",
                                    "desc": "İnteraktif silüet üzerinde mm² delik/çatlak tespiti, otomatik HEK kararı ve SKS muayene cetveli.",
                                    "img": "help/assets/img/20_rke_muayene_kokpiti.png",
                                    "link": "moduller.html#m-20"
                            },
                            {
                                    "tabLabel": "Dozimetre & NDK Takibi",
                                    "title": "Modül 12: Dozimetre Takibi & NDK 72 Saatlik Resmi Bildirim",
                                    "desc": "20 mSv limit aşımında otomatik RD.F43 araştırma formu, 10 iş günü sayacı ve NDK Form A-1 üretimi.",
                                    "img": "help/assets/img/12_1_dozimetre_list.png",
                                    "link": "moduller.html#m-12"
                            },
                            {
                                    "tabLabel": "Cihaz & QC Yönetimi",
                                    "title": "Modül 19: Tıbbi Cihaz Arıza, Bakım & Kalite Kontrol (QC)",
                                    "desc": "Karekodla arıza kaydı, X-ışını tüp değişimi senkronizasyonu ve QC güvenlik karantina kilidi.",
                                    "img": "help/assets/img/19_1_cihaz_ariza_bakim_ve_kalite_kontrol_qc.png",
                                    "link": "moduller.html#m-19"
                            },
                            {
                                    "tabLabel": "Merkezi Onay & Diff",
                                    "title": "Modül 21: Merkezi Onay Bekleyen Görevler Paneli & Görsel Diff",
                                    "desc": "5 sekmeli onay paneli, 4-göz görsel Diff View karşılaştırması ve kademeli onay zinciri.",
                                    "img": "help/assets/img/modul21_onay_merkezi.png",
                                    "link": "moduller.html#m-21"
                            },
                            {
                                    "tabLabel": "Web Dashboardlar",
                                    "title": "Modül 22: Web Portalı & 20 Yönetici Gösterge Paneli",
                                    "desc": "Express/React tabanlı 20 analitik dashboard, 60s bellek önbelleği ve anlık karar destek grafikleri.",
                                    "img": "help/assets/img/web_portal_genel_dashboard.png",
                                    "link": "moduller.html#m-22"
                            },
                            {
                                    "tabLabel": "Rapor & Tutanak Merkezi",
                                    "title": "Modül 23: Raporlama ve Tutanak Yönetim Merkezi",
                                    "desc": "26 resmi mevzuat raporu, Evrensel Tutanak Sihirbazı ve 2 aşamalı SHA-256 HEK mühürleme.",
                                    "img": "help/assets/img/21_rapor_merkezi_kokpit.png",
                                    "link": "moduller.html#m-23"
                            }
                    ],
                    "marquee": [
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
                    "manifesto": [
                            {
                                    "n": "01",
                                    "t": "Kağıt ve Excel karmaşasına son.",
                                    "b": "Dağınık Excel çizelgeleri, kaybolan dozimetre çıktıları ve WhatsApp nöbet gruplarının sonu. Her kayıt zaman damgalı, denetlenebilir ve tek merkezde."
                            },
                            {
                                    "n": "02",
                                    "t": "Şeffaf kısıtlar, adaletli dağıtım.",
                                    "b": "Nöbet algoritması yasal mevzuat ve sert/yumuşak kısıtlarla çalışır. Ekip neden o gün nöbette olduğunu şeffafça görür — amirin insafı değil, kurallar geçerlidir."
                            },
                            {
                                    "n": "03",
                                    "t": "Askeri düzeyde veri güvenliği.",
                                    "b": "PostgreSQL altyapısı, AES-256 Fernet şifreli evrak kasası ve KVKK Madde 11 ZIP ihracı. Sağlık verileriniz kurumunuzun tam kontrolünde korunur."
                            },
                            {
                                    "n": "04",
                                    "t": "Zamandan ve cezai riskten tasarruf.",
                                    "b": "Denetim hazırlığı iki gün değil, iki saat. NDK 72 saatlik bildirim, SKS 6.1 Excel raporları ve resmi heyet tutanakları tek tıkla hazır. Yöneticiler saatlerce nöbet çizmekten kurtulur."
                            }
                    ],
                    "complianceCards": [
                            {
                                    "badge": "72s",
                                    "color": "teal",
                                    "title": "NDK 72 Saatlik Acil Bildirim",
                                    "subtitle": "Limit Aşımı & RD.F43 Formu",
                                    "desc": "Yıllık 20 mSv veya 5 yıllık 100 mSv doz aşımında personeli otomatik riskli statüye alma, 10 iş günü araştırma sayacı ve resmi NDK Form A-1 şablon ihracı.",
                                    "footer": "NDK & TAEK Yönetmeliği"
                            },
                            {
                                    "badge": "SKS",
                                    "color": "cyan",
                                    "title": "SKS 6.1 Kalite & DÖF",
                                    "subtitle": "İstenmeyen Olay Bildirimi",
                                    "desc": "Sağlıkta Kalite Standartları Versiyon 6.1 uyumlu İOBS sistemi. Doz aşımı, cihaz arızası ve ramak kala olaylarında kök neden analizli DÖF/CAPA takibi.",
                                    "footer": "Sağlık Bakanlığı SKS 6.1"
                            },
                            {
                                    "badge": "RKE",
                                    "color": "emerald",
                                    "title": "DIN 6857-1 / DIN 6857-2",
                                    "subtitle": "Kurşun Koruyucu Muayenesi",
                                    "desc": "Kurşun önlük, tiroid ve gonat koruyucuların yıllık skopi kontrolü, akıllı karekodlama ve kurşun eşdeğeri (Pb) kalite kontrol arşivi.",
                                    "footer": "DIN 6857-1 / 6857-2"
                            },
                            {
                                    "badge": "KVKK",
                                    "color": "indigo",
                                    "title": "KVKK 6698 & AES-256",
                                    "subtitle": "Şifreli Kasa & PostgreSQL",
                                    "desc": "Personel özlük evrakları ve sağlık verileri diske açık yazılmaz; AES-256 Fernet şifreleme ve kurum içi PostgreSQL veritabanında güvenle saklanır.",
                                    "footer": "6698 Sayılı Kanun Madde 11"
                            }
                    ],
                    "faq": [
                            {
                                    "q": "RADPYS V4 dozimetre limit aşımında NDK 72 saatlik bildirim sürecini nasıl yönetir?",
                                    "a": "Personelin 12 aylık kümülatif dozu 20 mSv (veya 5 yıllık 100 mSv) yasal sınırını aştığında, sistem personeli otomatik olarak \"Yüksek Riskli\" statüsüne alır. NDK mevzuatına uygun 72 saatlik resmi acil bildirim şablonunu (Form A-1), 10 iş günü araştırma sayacını ve 2 sayfalık resmi RD.F43 Doz Araştırma Formunu tek tıkla üretir."
                            },
                            {
                                    "q": "Şua İzni (Sağlık İzni) takibi ve zamanaşımı uyarıları nasıl çalışır?",
                                    "a": "Sağlık Bakanlığı ve NDK mevzuatı gereği 4 haftalık Şua izni parçalı kullanılamaz ve sonraki takvim yılına devretmez. RADPYS V4, yıl sonuna 60 gün ve 30 gün kala kademeli erken uyarı rozetleri ([⏳ 45g], [🚨 15g]) üreterek personelin hakkının zamanaşımına uğramasını önler."
                            },
                            {
                                    "q": "RKE DIN 6857-1 / DIN 6857-2 Kurşun Koruyucu Ekipman modülü ne sağlar?",
                                    "a": "Kurşun önlük, tiroid koruyucu, gonat koruyucu ve kurşun eldivenlerin yıllık skopi kontrollerini, fiziksel muayenelerini ve kurşun eşdeğeri (Pb mm) ölçümlerini takip eder. Her ekipmana özel karekod üretir ve hasarlı ekipmanların 2 aşamalı HEK tutanağı ile kullanım dışı yapılmasını sağlar."
                            },
                            {
                                    "q": "Veri güvenliği ve KVKK 6698 uyumu nasıl sağlanır?",
                                    "a": "Personel sağlık raporları, dozimetre dökümleri ve özlük evrakları sunucu diskine açık yazılmaz. AES-256 Fernet algoritmasıyla şifreli blob formatında PostgreSQL veritabanında saklanır. KVKK Madde 11 kapsamında şifreli ZIP personel veri ihracı imkanı sunar."
                            },
                            {
                                    "q": "SKS 6.1 Kalite Standartları ve İstenmeyen Olay Bildirimi (İOBS) entegrasyonu var mı?",
                                    "a": "Evet. Sağlıkta Kalite Standartları Versiyon 6.1 ile birebir uyumlu İstenmeyen Olay Bildirim Modülü içerir. Doz aşımı, cihaz arızası veya kontaminasyon durumlarında Düzeltici Önleyici Faaliyet (DÖF / CAPA) akışları başlatılır ve resmi Excel/PDF çıktıları alınabilir."
                            }
                    ]
            },
            "roadmap": {
                    "waves": [
                            {
                                    "id": "wave1",
                                    "num": "01",
                                    "color": "teal",
                                    "gridCols": "lg:grid-cols-3",
                                    "kicker": "Öncelikli Dağıtım",
                                    "title": "DALGA 1: Altyapısı Hazır Hızlı Kazanımlar",
                                    "phases": [
                                            {
                                                    "code": "FAZ 01",
                                                    "status": "Altyapı Hazır",
                                                    "statusDot": "bg-emerald-400 animate-ping",
                                                    "statusColor": "text-emerald-400",
                                                    "title": "Saha / Tablet QR-Barkod Muayene & Hızlı Envanter Asistanı",
                                                    "desc": "Medikal Fizikçiler ve RKE sorumluları için sahada doğrudan tablet kamerasıyla QR/Barkod okutma, skopi altındaki kurşun önlük ve paravan çatlaklarını interaktif krokide işaretleme ve anlık fotoğraf kaydı.",
                                                    "bullets": [
                                                            "DIN 6857-1 skopi kusur haritalama & interaktif grid",
                                                            "Çevrimdışı (Offline-first) PWA & SQLite yerel önbellek",
                                                            "Otomatik barkodlu durum etiketi & seri no eşleme"
                                                    ],
                                                    "footerLeft": "Odak: RKE & Saha Hızı",
                                                    "footerRight": "Mobil / Tablet PWA"
                                            },
                                            {
                                                    "code": "FAZ 02",
                                                    "status": "Foundation AI",
                                                    "statusDot": "bg-cyan-400",
                                                    "statusColor": "text-cyan-400",
                                                    "glow": true,
                                                    "title": "Google TimesFM ile Yapay Zekâlı Doz Trend Tahmini & Klinik Rotasyon",
                                                    "desc": "Google Research'ün 1 trilyon zaman serisiyle önceden eğitilmiş <strong>TimesFM (Zero-Shot Transformer)</strong> modeliyle, 6 ay önceden 20 mSv NDK limit aşım riskini tespit eder ve proaktif rotasyon simülasyonu önerir.",
                                                    "bullets": [
                                                            "Sıfır ek model eğitimi (Zero-Shot) ile yüksek doğruluk",
                                                            "Çok değişkenli (Vaka yoğunluğu, modalite, nöbet) risk tahmini",
                                                            "Radyasyonsuz alanlara (MRG/USG) otomatik akıllı rotasyon"
                                                    ],
                                                    "footerLeft": "Odak: Kestirimci Güvenlik",
                                                    "footerRight": "TimesFM 1.0 AI"
                                            },
                                            {
                                                    "code": "FAZ 03",
                                                    "status": "Denetim Simülatörü",
                                                    "statusDot": "bg-teal-400",
                                                    "statusColor": "text-teal-400",
                                                    "title": "NDK & SKS \"Otomatik Denetim Simülatörü\" & Uygunsuzluk Risk Karnesi",
                                                    "desc": "Tek tıkla kurumun tüm veritabanını tarar; lisans vizeleri, eksik kalibrasyonlar, muayenesiz kurşun önlükler ve şua izinlerini 100 puanlık resmi NDK/SKS 6.1 denetim risk karnesine dönüştürür.",
                                                    "bullets": [
                                                            "Resmi NDK / SKS Sağlıkta Kalite maddeleriyle birebir eşleşme",
                                                            "Otomatik DÖF (Düzeltici Önleyici Faaliyet) görevi atama",
                                                            "Yönetici özet denetim hazırbulunuşluk PDF çıktısı"
                                                    ],
                                                    "footerLeft": "Odak: Sıfır İdari Ceza",
                                                    "footerRight": "Mevzuat Uyumu"
                                            }
                                    ]
                            },
                            {
                                    "id": "wave2",
                                    "num": "02",
                                    "color": "cyan",
                                    "gridCols": "lg:grid-cols-2",
                                    "kicker": "Klinik & İletişim Entegrasyonu",
                                    "title": "DALGA 2: Kurumsal İletişim, Etkileşimli Onay ve DICOM Entegrasyonu",
                                    "phases": [
                                            {
                                                    "code": "FAZ 04",
                                                    "status": "Kurumsal Tebligat",
                                                    "statusColor": "text-cyan-400",
                                                    "title": "E-Posta & SMS Bildirim, Tebligat, Kanal Ayrıştırmalı OTP & Magic-Link Onay Sistemi",
                                                    "desc": "Kademeli kurumsal onay (Birim Sorumlusu → Medikal Fizik → Başhekimlik), SMS OTP doğrulaması ve kritik NDK limit aşımı/kaza bildirimlerinde zorunlu paralel SMS fail-safe mimarisi.",
                                                    "bullets": [
                                                            "Tek kullanımlık tokenlı Magic-Link onay",
                                                            "Resmi tebligat teslim & okundu logu (HMAC-SHA256)",
                                                            "Güvenli takvim (.ics) ve PDF indirme tokenları",
                                                            "Kurumsal DMZ / Proxy ve SMTP/SMS gateway desteği"
                                                    ],
                                                    "twoColBullets": true,
                                                    "footerLeft": "Protokol: OTP + Magic-Link + HMAC",
                                                    "footerRight": "KVKK & Güvenlik"
                                            },
                                            {
                                                    "code": "FAZ 05",
                                                    "status": "PACS / DICOM Bridge",
                                                    "statusColor": "text-cyan-400",
                                                    "title": "PACS / DICOM RDSR Doz Akış Köprüsü (C-STORE SCP Servisi)",
                                                    "desc": "Hastane PACS sunucusundan BT, Anjiyografi ve Mamografi modalitelerinden fırlatılan DICOM RDSR (Radiation Dose Structured Report) nesnelerini otomatik dinleyen, CTDIvol, DLP, DAP metriklerini çekip personelle eşleştiren mikroservis.",
                                                    "bullets": [
                                                            "C-STORE SCP arka plan dinleyicisi (Pynetdicom / Fo-Dicom)",
                                                            "BT: CTDIvol, DLP | Anjiyo: DAP, Skopi Süresi ayrıştırma",
                                                            "Personel nöbet çizelgesiyle otomatik hekim/teknisyen eşleme",
                                                            "Cihaz ve oda bazlı anlık radyasyon yükü analitiği"
                                                    ],
                                                    "twoColBullets": true,
                                                    "footerLeft": "Standart: DICOM PS 3.16 RDSR",
                                                    "footerRight": "PACS Doz Köprüsü"
                                            }
                                    ]
                            },
                            {
                                    "id": "wave3",
                                    "num": "03",
                                    "color": "purple",
                                    "gridCols": "lg:grid-cols-3",
                                    "kicker": "İleri Teknoloji & Donanım",
                                    "title": "DALGA 3: İleri Seviye IoT, Edge AI ve Klinik Optimizasyon",
                                    "phases": [
                                            {
                                                    "code": "FAZ 06",
                                                    "status": "IoT Telemetri",
                                                    "statusColor": "text-purple-400",
                                                    "title": "IoT Gerçek Zamanlı Ortam Dedektör Telemetrisi & Mimari Canlı Isı Haritası",
                                                    "desc": "Wi-Fi, Zigbee veya MQTT protokolüyle çalışan alan radyasyon monitörlerinden gelen anlık µSv/h akışını interaktif departman mimari krokisinde IDW enterpolasyonuyla canlı ısı haritası olarak sunar.",
                                                    "bullets": [
                                                            "MQTT / WebSocket üzerinden milisaniyelik veri akışı",
                                                            "Eşik aşımı anında ekranda görsel & sesli flaş alarm",
                                                            "Kat ve oda bazında geçmişe dönük doz sızıntı simülasyonu"
                                                    ],
                                                    "footerLeft": "Protokol: MQTT / WebSocket",
                                                    "footerRight": "Canlı Telemetri"
                                            },
                                            {
                                                    "code": "FAZ 07",
                                                    "status": "Edge Vision AI",
                                                    "statusColor": "text-pink-400",
                                                    "glow": true,
                                                    "title": "Edge AI / Görüntü İşleme ile Odaya Girişte RKE & Dozimetre Güvenlik Kontrolü",
                                                    "desc": "Anjiyografi ve Skopi oda girişlerindeki tablet/IP kamera ile personelin kurşun önlük, tiroid koruyucu ve yakasında dozimetre bulunup bulunmadığını 0.2 saniyede denetleyen hafif Edge YOLOv8 modeli.",
                                                    "bullets": [
                                                            "0.2 saniye hızında yerel Edge cihazında tespit (YOLOv8-Nano)",
                                                            "Dozimetresiz ve kurşun koruyucusuz girişte anlık sesli ikaz",
                                                            "Yüz tanıma yapılmaz — %100 KVKK uyumlu nesne tespiti"
                                                    ],
                                                    "footerLeft": "Model: YOLOv8 On-Device",
                                                    "footerRight": "Edge Güvenlik"
                                            },
                                            {
                                                    "code": "FAZ 08",
                                                    "status": "Klinik Optimizasyon",
                                                    "statusColor": "text-purple-400",
                                                    "title": "Hasta Kümülatif Doz Takibi, Ulusal DRL Optimizasyonu & Kestirimci Tüp Ömrü",
                                                    "desc": "Hastanın modaliteler arası kümülatif dozu, Sağlık Bakanlığı ulusal DRL (Diagnostik Referans Seviyeleri) kıyaslaması ve TimesFM ile X-ışını tüpü yıpranma zamanını tahmin eden kestirimci bakım motoru.",
                                                    "bullets": [
                                                            "Ulusal DRL referans seviyeleriyle otomatik anomalik protokol uyarısı",
                                                            "Hasta bazında ömür boyu kümülatif radyasyon profili (EURATOM uyumlu)",
                                                            "Cihaz X-Işını tüp ömrü arıza kestirimi ile plansız duruşları önleme"
                                                    ],
                                                    "footerLeft": "Kapsam: DRL & Tüp Ömrü",
                                                    "footerRight": "EURATOM & SKS"
                                            }
                                    ]
                            }
                    ],
                    "techPillars": [
                            {
                                    "badge": "AI",
                                    "color": "teal",
                                    "title": "Zero-Shot TimesFM",
                                    "desc": "Doz verilerini harici buluta göndermeden yerel çıkarımla 6 ay önceden trend analizi."
                            },
                            {
                                    "badge": "DICOM",
                                    "color": "cyan",
                                    "title": "DICOM PS 3.16 RDSR",
                                    "desc": "PACS sunucularıyla doğrudan C-STORE SCP köprüsü ile el değmeden otomatik doz aktarımı."
                            },
                            {
                                    "badge": "EDGE",
                                    "color": "purple",
                                    "title": "Edge Vision & IoT",
                                    "desc": "Yüz tanıma yapılmaksızın sadece RKE/Dozimetre tespiti yapan ve MQTT telemetrisi sunan uç cihazlar."
                            },
                            {
                                    "badge": "KVKK",
                                    "color": "pink",
                                    "title": "On-Premises & AES-256",
                                    "desc": "PostgreSQL 16, SQLCipher ve HMAC imzalı token mimarisiyle tam yasal mevzuat uyumu."
                            }
                    ],
                    "faq": [
                            {
                                    "q": "Bu yeni modüller mevcut RADPYS V4 kullanıcılarına nasıl sunulacak?",
                                    "a": "Dalga 1 modülleri (Saha QR Asistanı, TimesFM Doz AI ve Denetim Simülatörü) V4.2 ve V4.3 minör güncellemeleri olarak Elit ve Pro lisans sahiplerine otomatik ve ücretsiz olarak dağıtılacaktır."
                            },
                            {
                                    "q": "PACS ve DICOM RDSR köprüsü hastane ağında güvenlik açığı yaratır mı?",
                                    "a": "Kesinlikle hayır. PACS Doz Köprüsü sadece yerel hastane LAN/DMZ ağı içinde çalışan ve dış dünyaya kapalı bir C-STORE SCP mikroservisidir. Görüntü piksel verilerini çekmez; sadece radyasyon dozu yapılandırılmış raporlarını (RDSR) işler."
                            },
                            {
                                    "q": "Google TimesFM yapay zekâ modeli için internet bağlantısı zorunlu mu?",
                                    "a": "Hayır. TimesFM modeli yerel sunucunuzda (ONNX / TorchScript) çalışacak şekilde optimize edilmiştir. Hastane içi hiçbir personel ya da klinik veri internete çıkmadan tamamen yerelde analiz edilir."
                            }
                    ]
            },
            "about": {
                    "stack": [
                            {
                                    "name": "PySide6 & Web PWA",
                                    "desc": "Native masaüstü performansı ve mobil tarayıcılardan yüklenebilir PWA portalı dengesi.",
                                    "icon": "M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4M15 3H9M9 3v18M15 3v18"
                            },
                            {
                                    "name": "PostgreSQL 14+/16",
                                    "desc": "Kurumsal çok kullanıcılı, yüksek eşzamanlılıklı ve ACID uyumlu veritabanı motoru.",
                                    "icon": "M4 6c0-1.1 3.6-2 8-2s8 0.9 8 2v12c0 1.1-3.6 2-8 2s-8-0.9-8-2V6zM4 6c0 1.1 3.6 2 8 2s8-0.9 8-2M4 12c0 1.1 3.6 2 8 2s8-0.9 8-2"
                            },
                            {
                                    "name": "KVKK AES-256 Kasası",
                                    "desc": "stored_files tablosunda AES-256 Fernet şifreleme, KVKK Madde 11 ZIP ihracı ve Audit Trail.",
                                    "icon": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
                            },
                            {
                                    "name": "Sağlık Fiziği Ekibi",
                                    "desc": "Yazılım mühendisliği + medikal fizik uzmanlığı. Radyoloji sahasını birebir tanıyan ürün ekibi.",
                                    "icon": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                            }
                    ],
                    "visionCards": [
                            {
                                    "tag": "01 / Yapay Zekâ & Analitik",
                                    "color": "text-neon-teal",
                                    "title": "Öngörücü Doz Tahmini",
                                    "desc": "Geçmiş trendleri yapay zekâ ile işleyerek NDK limit aşım risklerini 6 ay önceden tahminleyen erken uyarı motoru."
                            },
                            {
                                    "tag": "02 / DICOM & Modalite",
                                    "color": "text-neon-cyan",
                                    "title": "PACS RDSR Doz Köprüsü",
                                    "desc": "BT ve Anjiyo cihazlarından çıkan DICOM RDSR yapısal doz verilerini doğrudan PACS sunucusundan otomatik okuma."
                            },
                            {
                                    "tag": "03 / Canlı Telemetri",
                                    "color": "text-purple-400",
                                    "title": "IoT Gerçek Zamanlı Sensörler",
                                    "desc": "Kablosuz oda radyasyon dedektörlerinden gelen anlık telemetri verilerini kat planlarında canlı ısı haritasına dönüştürme."
                            },
                            {
                                    "tag": "04 / E-Sağlık Ekosistemi",
                                    "color": "text-amber-400",
                                    "title": "Bakanlık & NDK Bulut Köprüsü",
                                    "desc": "Ulusal sağlık sistemleri ve denetim portalları ile çift yönlü, şifreli ve otomatik veri senkronizasyon katmanı."
                            }
                    ]
            }
    };

    Object.assign(window.RADPYS, {
        PAGE_CONTENT
    });
})();
