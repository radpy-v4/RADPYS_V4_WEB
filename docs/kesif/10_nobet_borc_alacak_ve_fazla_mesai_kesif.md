# 10_nobet_borc_alacak_ve_fazla_mesai — Teknik Keşif ve 5N1K Analiz Raporu

- **Taranan Arayüz Dosyaları:** `ui/pages/nobet/nobet_borc_alacak_page.ui`
- **Taranan Controller ve Dialog Kodları:** `ui/controllers/nobet/nobet_borc_alacak_controller.py` (`NobetBorcAlacakController`, `FMOdemeSecimDialog`)
- **Taranan Servis ve Domain Kodları:** `app/services/nobet/nobet_borc_alacak_service.py` (`NobetBorcAlacakService`), `app/domain/nobet/hedef_saat_hesaplayici.py` (`calculate_target_hours`, `calculate_hybrid_overtime`, `split_shift_holiday_hours`)
- **Taranan DB Tabloları:** `personel_nobet_borc_alacak`, `nobet_cizelgesi`, `nobet_planlari`, `nobet_turleri`, `personel_izinler`, `nobet_kisitlari`, `departmanlar`, `resmi_tatiller`
- **Taranan Web Portal Bileşenleri:** `web_portal/src/components/dashboards/NobetDashboard.tsx` (`activeTab === 'borc_alacak'`), `web_portal/src/routes/dashboard/dashboard.nobet.routes.ts`
- **Analiz Tarihi:** 2026-09-24
- **Modül Karmaşıklık Düzeyi:** Tier 3 (Algoritmik Karar / Mutemetlik Fazla Mesai & Yasal Borç-Alacak Dengeleme)

---

## 1. Modülün Özeti ve Temel Görevleri

Bu modül; radyoloji ve sağlık personellerinin aylık yasal çalışma rejimlerine (3153 Sayılı Kanun kapsamındaki 35 saatlik radyasyon ortamı veya 657 Sayılı Kanun kapsamındaki 40 saatlik genel idari/klinik ortam), resmi tatil/arife indirimlerine ve onaylı izinlerine göre **bireysel aylık hedef saatlerini** belirler; personelin tuttuğu fiili nöbetleri, bayram mesailerini ve bir önceki aydan devreden saat bakiyelerini hesaba katarak mutemetlik ödemesi ve dönem devirlerini yönetir:

1. **Yasal Hedef Saat ve İzin Düşümü:** Ay içerisindeki resmi tatiller (yarım gün arife günleri dahil) ve onaylı izin günleri personelin yasal çalışma yükümlülüğünden düşülür.
2. **Çift Havuzlu Hibrit Fazla Mesai Analizi:** Hem radyasyonlu (35s) hem genel alanda (40s) karma çalışan personelin nöbetleri oransal denklik kuralıyla analiz edilir.
3. **Resmi Bayram Mesaisi Ayrıştırması:** Dini/milli bayramlarda ve arife saat 13:00 sonrasında tutulan nöbetler dakika/saat hassasiyetinde normal fazla mesai havuzundan ayrılarak bordro cetveline yansıtılır.
4. **Fazla Mesai Ödeme Dağıtımı (`FMOdemeSecimDialog`):** Artı bakiyedeki personelin fazla mesaisi için mutlak yasal tavan (aylık en fazla 130 saat) ve kurumsal ödeme kotası (60 saat) çerçevesinde kısmi ödeme veya sonraki aya devir kararı verilir.
5. **Dönem Kilidi ve Sudo Yetkilendirmesi:** Fazla mesai ödemesi kesinleşen dönemler (`FMOdendi`) sistem tarafından kilitlenir; amir veya sorumlu müdahalesi için `SudoDialogController` üzerinden yönetici şifre doğrulaması zorunlu kılınır.
6. **Bordro İcmal ve Yazdırma:** Seçili ay için mutemetlik formatında 5 sütunlu resmi Nöbet Fazla Mesai Bildirim Cetveli (Yazıcı, Excel ve PDF) üretilir.

---

## 2. 5N1K Kural ve Ayar Çözümleme Tablosu

| NE? (Bileşen & Ayar) | NEDEN? (Amaç / Gerekçe) | NEREDE? (UI - Controller - DB - Motor) | NASIL? (Formül / Çalışma Mantığı) | NE ZAMAN? (Tetiklenme) | KİM? (Rol & Muhatap) | DURUM |
|---|---|---|---|---|---|---|
| **Yıl ve Ay Filtresi** (`yilFilter`, `ayFilter`) | İncelenecek ve hesaplanacak nöbet bordro dönemini belirlemek. | • **UI:** `nobet_borc_alacak_page.ui:67,89`<br>• **Ctrl:** `nobet_borc_alacak_controller.py:234,314`<br>• **DB:** `personel_nobet_borc_alacak(yil, ay)` | Seçilen ay/yıl için yayınlanmış nöbet planı ve borç/alacak kayıtları sorgulanır. | Dönem seçimi değiştiğinde. | Nöbet Sorumlusu, İdari Amir. | **Eksiksiz & Aktif** |
| **Birim Filtresi** (`departmanFilter`) | Sadece belirli bir birime ait personellerin borç/alacak dengesini incelemek. | • **UI:** `nobet_borc_alacak_page.ui:159`<br>• **Ctrl:** `nobet_borc_alacak_controller.py:239,321`<br>• **DB:** `departmanlar(aktif=1, nobet=1)` | Personelin birimi, görev yeri veya geçici görevlendirmesi filtrelenen birimle eşleşenler listelenir. | Birim açılır kutusu seçildiğinde. | Birim Sorumlusu, Şef. | **Eksiksiz & Aktif** |
| **Hizmet Sınıfı Filtresi** (`hizmetFilter`) | Sağlık Teknikeri, Hemşire, Radyoloji Uzmanı vb. mesai rejimlerini ayrıştırmak. | • **UI:** `nobet_borc_alacak_page.ui:174`<br>• **Ctrl:** `nobet_borc_alacak_controller.py:251,322`<br>• **DB:** `personeller.hizmet_tipi` | Seçili hizmet sınıfı ile birebir eşleşen personeller tabloya aktarılır. | Filtre seçimi değiştiğinde. | Nöbet Sorumlusu. | **Eksiksiz & Aktif** |
| **Dönem Kilit Durumu** (`lblLockStatus`) | Dönemin düzenlemeye açık mı, kilitli mi olduğunu renk ve ikonla görselleştirmek. | • **UI:** `nobet_borc_alacak_page.ui:40`<br>• **Ctrl:** `nobet_borc_alacak_controller.py:779`<br>• **DB:** `personel_nobet_borc_alacak.durum` | FM Ödendi ise Tehlike (Kırmızı), Sudo açılmışsa Uyarı (Sarı), Kayıtlı ise Bilgi (Mavi), Açık ise Başarı (Yeşil) durum token'ı basar. | Veri yenilendiğinde veya dönem değiştiğinde. | Tüm Kullanıcılar. | **Eksiksiz & Aktif** |
| **Kilidi Aç Butonu** (`btnUnlock`) | Kesinleşmiş ve kilitlenmiş dönemi amir onayıyla istisnai düzenlemeye açmak. | • **UI:** `nobet_borc_alacak_page.ui:50`<br>• **Ctrl:** `nobet_borc_alacak_controller.py:776,1264`<br>• **Dialog:** `SudoDialogController` | Sudo şifresi başarıyla doğrulanırsa `_sudo_unlocked = True` yapılır ve tablo kontrolleri aktifleştirilir. | Yalnızca dönem `FMOdendi` ile kilitlendiğinde görünür. | Sistem Yöneticisi, İdari Amir. | **Eksiksiz & Aktif** |
| **Yenile Butonu** (`btnCalculate`) | Nöbet planları, izinler ve devirler üzerinden borç/alacak tablosunu baştan hesaplamak. | • **UI:** `nobet_borc_alacak_page.ui:219`<br>• **Ctrl:** `nobet_borc_alacak_controller.py:294,317`<br>• **Servis:** `NobetBorcAlacakService` | Kıstelyevm, tatil/arife düşümü ve nöbet toplamlarını çalıştırıp tabloyu doldurur. | Butona tıklandığında. | Nöbet Sorumlusu. | **Eksiksiz & Aktif** |
| **Değişiklikleri Kaydet Butonu** (`btnSaveAll`) | Personellerin ödenen saat ve sonraki aya devir kararlarını veritabanına yazmak. | • **UI:** `nobet_borc_alacak_page.ui:232`<br>• **Ctrl:** `nobet_borc_alacak_controller.py:295,852`<br>• **DB:** `personel_nobet_borc_alacak` | Satır satır karar kayıtlarını oluşturur; `save_borc_alacak_records` transaction'ı ile kaydeder. | Kararlar belirlendikten sonra. | Yetkili Kullanıcı / Amir. | **Eksiksiz & Aktif** |
| **Yazdır Menüsü** (`btnPrintFm`) | Mutemetlik için resmi Nöbet Fazla Mesai Bildirim Cetvelini üretmek. | • **UI:** `nobet_borc_alacak_page.ui:245`<br>• **Ctrl:** `nobet_borc_alacak_controller.py:296,940`<br>• **Servis:** `ExportService`, `QPrintDialog` | Normal FM ve Bayram FM saatlerini ayrıştırarak 5 sütunlu resmi icmal dökümü (Yazıcı / Excel / PDF) oluşturur. | Menüden çıktı türü seçildiğinde. | Mutemet, Birim Sorumlusu. | **Eksiksiz & Aktif** |
| **Toplu İşlem Seçimi** (`bulkStatusCombo`, `btnApplyBulk`) | Seçili personellere tek tıkla kota veya devir kararı uygulamak. | • **UI:** `nobet_borc_alacak_page.ui:258,288`<br>• **Ctrl:** `nobet_borc_alacak_controller.py:276,1193`<br>• **Mekanizma:** Çoklu satır seçimi | 60s Kurumsal Kota, 130s Yasal Tamamı veya Sonraki Aya Devir opsiyonlarını seçili tüm artı bakiyeli satırlara uygular. | Seçilenlere Uygula butonuna basıldığında. | Nöbet Sorumlusu. | **Eksiksiz & Aktif** |
| **FM Öde / Devret Radio Seçimi** (`tableWidget` Kolon 7) | Personelin artı bakiyesinin ödenmesini veya sonraki aya devrini belirlemek. | • **Ctrl:** `nobet_borc_alacak_controller.py:674`<br>• **Dialog:** `FMOdemeSecimDialog`<br>• **DB:** `odenen_saat`, `devreden_saat` | Bakiye $\le$ 0 ise sadece Devret seçilebilir. Bakiye > 0 ise "FM Öde" tıklandığında modal açılır, tutar belirlenir. | Satırdaki radio buton tıklandığında. | Birim Sorumlusu. | **Eksiksiz & Aktif** |

---

## 3. Koddaki Mantık, Kısıtlar ve QMessageBox Validasyonları

1. **Yayınlanmış Nöbet Planı Zorunluluğu:**
   - Seçili ay/yıl için onaylanmış/yayınlanmış bir nöbet planı (`nobet_planlari.durum = 'Yayinlandi'`) bulunmuyorsa hesaplama yapılmaz. Tablo temizlenir, kilitlenir ve `lblLockStatus` sarı uyarı moduna geçer:
   - *"Seçili dönem için yayınlanmış nöbet planı bulunmamaktadır."*
2. **Yasal Mutlak Tavan (130 Saat Sınırı):**
   - Kod sabiti `YASAL_MAKS_FM_TAVANI = 130.0`. 657 Sayılı Kanun ve sağlık mevzuatı gereğince bir personele bir ayda ödenebilecek fazla mesai toplamı 130 saati kesinlikle aşamaz. Kümülatif fazla mesai 130 saatin üzerinde olsa dahi `spin_odenen` üst sınırı 130 saat ile sınırlandırılır, bakiye sonraki aya devreder.
3. **Kurumsal Ödeme Kotası (60 Saat Sınırı):**
   - Kod sabiti `KURUMSAL_FM_KOTASI = 60.0`. Hastane bütçesi ve mutemetlik politikası gereğince standart ödeme tavanı 60 saat olarak önerilir. Hızlı seçim butonları ve toplu işlem seçeneklerinde varsayılan olarak 60 saat ödeme, kalanının devri uygulanır.
4. **Eksik Mesai / Borç Durumu:**
   - Personelin kümülatif çalışma saati yasal hedefin altında kalmışsa (bakiye eksi ise), "FM Öde" seçeneği pasifize edilir. Borç doğrudan bir sonraki aya devredilir (`status = 'SonrakiAyaEklendi'`).
5. **Dönem Kilit Validasyonu (`FMOdendi`):**
   - Eğer dönem için en az bir personele `FMOdendi` durumu kaydedilmişse, tüm liste salt-okunur kilitlenir (`_set_locked(True)`). `btnSaveAll` ve toplu işlem araçları devre dışı bırakılır. Kilit ancak `btnUnlock` ile yönetici şifresi doğrulanarak geçici süreyle açılabilir.
6. **Yetki Kontrolü (`_has_permission('yazma')`):**
   - Kullanıcının `nobet` modülünde `yazma` yetkisi yoksa kaydetme işlemi engellenir ve uyarı verilir:
   - *"Borç/alacak ve fazla mesai kararlarını kaydetme yetkiniz bulunmamaktadır. Bu işlem yalnızca yetkili kullanıcılar veya Sistem Yöneticisi tarafından yapılabilir."*
7. **Boş Ödeme Listesi Uyarısı (`_print_fm_payments`):**
   - Ödenecek fazla mesai kararı verilmemişken "Yazdır" komutu çalıştırılırsa uyarı penceresi açılır:
   - *"{Ay} {Yıl} dönemi için ödenecek fazla mesai kaydı bulunamadı. Önce personellerin 'Ödenecek Süre (Saat)' alanını belirleyip 'Değişiklikleri Kaydet' butonuna basınız."*
8. **Toplu İşlem Validasyonları (`_apply_bulk_action`):**
   - Açılır kutudan işlem türü seçilmemişse: *"Lütfen toplu olarak uygulamak istediğiniz bir işlem seçiniz."*
   - Tablodan satır seçilmemişse: *"Toplu işlem uygulamak için tablodan en az bir satır seçmelisiniz."*
   - Seçilen satırlarda artı fazla mesaisi olan personel yoksa: *"Seçilen personeller arasında artı fazla mesaisi bulunan personel bulunamadı."*

---

## 4. Hibrit Arayüz Durumu (Masaüstü ve Web Portalı)

- **🖥️ Masaüstü Ekranı (PySide6):**
  - Dosyalar: `ui/pages/nobet/nobet_borc_alacak_page.ui` ve `ui/controllers/nobet/nobet_borc_alacak_controller.py`.
  - Yetenekler: Tam yetkili CRUD, hedef saat hesaplayıcı, modal ödeme dağıtımı (`FMOdemeSecimDialog`), toplu kota ataması, yönetici kilit açma (`SudoDialogController`), yazıcı dökümü, Excel ve PDF aktarımı.
- **🌐 Web ve Mobil Portalı (React + Node.js):**
  - Dosyalar: `web_portal/src/components/dashboards/NobetDashboard.tsx` (`activeTab === 'borc_alacak'`) ve `web_portal/src/routes/dashboard/dashboard.nobet.routes.ts`.
  - Yetenekler: Personelin dönem bazlı hedef saatini, onaylı izin gün sayısını ("X Gün İzinli" rozeti), fiili çalışma saatini ve net bakiye durumunu izleme. Dashboard üzerinden anlık Excel ve PDF indirme.
  - Sınırlar: Web portalı sadece izleme ve mutemetlik ön inceleme amaçlıdır; fazla mesai ödeme kararı verme ve devir onayları güvenlik gereği masaüstü uygulaması ile sınırlandırılmıştır.

---

## 5. Hayalet Bileşen ve Kod Denetimi

- `nobet_borc_alacak_page.ui` dosyasında yer alan tüm arayüz bileşenleri (`yilFilter`, `ayFilter`, `departmanFilter`, `hizmetFilter`, `lblLockStatus`, `btnUnlock`, `btnCalculate`, `btnSaveAll`, `btnPrintFm`, `bulkStatusCombo`, `btnApplyBulk`, `tableWidget`) controller içerisinde slotlara ve iş mantığına eksiksiz bağlanmıştır.
- **Hayalet Bileşen Sayısı: 0 (SIFIR)**.

---

## 6. Hedefli Ekran Görüntüsü Talebi

Kılavuz dokümanında yer alacak 2 kritik ekran görüntüsü:
1. **`10_nobet_borc_alacak_ana_tablo.png`**: Nöbet Fazla Mesai Borç / Alacak Devri ana ekranı; dönem filtreleri, kilit durumu, hesaplanmış hedef/fiili saatler ve satır içi radio butonlar (`Devret` / `FM Öde`).
2. **`10_fm_odeme_secim_dialog.png`**: Bir personelin satırındaki "FM Öde" butonuna basıldığında açılan `Fazla Mesai Ödeme Dağıtımı` modal penceresi (Kümülatif saat, kurumsal kota ve sonraki aya devir özet göstergesi).

---

## 7. Kullanıcı Kararları ve Saha Teyitleri (2026-09-24)

1. **Yasal Mutlak Tavan (130 Saat):** Teyit edildi. Bir personelin kümülatif fazla mesaisi 130 saati aşsa dahi o ay en fazla 130 saat ödenebilir, artan bakiye sonraki aya zorunlu devreder.
2. **Kurumsal Kota (60 Saat):** **Önemli Saha Düzeltmesi:** 60 saatlik kurumsal kota bir ödeme/bütçe kısıtı değil; **personelin fiziksel ve ruhsal sağlığını korumak, aşırı çalışma yükünü sınırlandırmak ve mesleki tükenmişliği (burnout) engellemek amacıyla kurum tarafından konulmuş koruyucu bir iş sağlığı sınırıdır**.
3. **Eksik Mesai / Borç Devri:** Teyit edildi. Kümülatif bakiyesi eksi veya sıfır olan personelde "FM Öde" pasifleşir, borç doğrudan bir sonraki aya devredilir.
4. **Dönem Kilit Güvenliği ve Sudo:** Teyit edildi. `FMOdendi` ile kesinleşen dönem salt-okunur kilitlenir; düzenleme için amir/yönetici şifresi doğrulaması zorunludur.
5. **Resmi Bayram Mesaisi:** Teyit edildi. Arife saat 13:00 eşiği ve resmi tatil nöbetleri dakika hassasiyetinde normal fazla mesai havuzundan ayrılarak bordro cetveline yansıtılır.

