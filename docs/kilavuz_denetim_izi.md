# 🔍 RADPYS V4 — Kılavuz Denetim İzi Kaydı (Audit Log)

Bu iç denetim kaydı, `docs/kilavuz_guncel.md` kılavuzundaki her bir operasyonel adımın hangi kaynak kod (`.py`) ve arayüz şablonu (`.ui`) dosyalarından doğrulandığını gösteren kanıt dokümanıdır. *(Destek ve Geliştirme Ekibi İçindir - Son Kullanıcıya Sunulmaz)*.

---

## 1. Toplu Veri İçe Aktarma ve Çakışma Yönetimi — Denetim Kaydı

### Taranan Dosyalar

- `ui/pages/admin/system/import_page.ui` (satır 33–120, 200–350)
- `ui/controllers/admin/system/import_controller.py` (satır 40–180)
- `app/services/system/bulk_import_service.py` (satır 180–320)

### Düzeltme Notları (Referans vs Kod)

- **Doğrulanan Butonlar & Adımlar:**
  - `lblStep1`: *"1. Dosya Yükle"* (`import_page.ui:45`)
  - `lblStep2`: *"2. Sütunları Eşleştir"* (`import_page.ui:65`)
  - `lblStep3`: *"3. Önizleme & Doğrulama"* (`import_page.ui:85`)
  - `btnStartImport`: *"Aktarımı Başlat"* (`import_controller.py:120`)
- **Dry-Run & Rozetler:** Kodda `VALID`, `DUPLICATE`, `ERROR` durumları sırasıyla `🟢`, `🟡`, `🔴` rozetleri ile eşlenmiştir (`bulk_import_service.py:220`).
- **In-Place Tablo Düzenleme:** `hakedisTable.doubleClicked` / cell change sinyalleri ile hücre üzerinden düzenleme yapılabilmektedir (`import_controller.py:165`).

---

## 2. Yüksek Doz Araştırma ve Resmi RD.F43 Formu — Denetim Kaydı

### Taranan Dosyalar

- `ui/pages/personel/doz_arastirma_form_dialog.ui` (satır 20–180)
- `ui/controllers/personel/doz_arastirma_form_controller.py` (satır 45–190)
- `app/services/system/export_service.py` (satır 240–310)

### Düzeltme Notları (Referans vs Kod)

- **10 İş Günü Rozeti:** `lblYasalSureBadge` etiketinde `🟢 Yasal Süre: X iş günü kaldı` veya `🚨 Yasal Süre Doldu` gösterilmektedir (`doz_arastirma_form_controller.py:95`).
- **Doz Sihirbazı:** `btnHesaplaDoz` tıklandığında `txtTahminiDoz` alanına $\text{Unutulma Süresi} \times \text{Doz Hızı}$ hesaplanarak aktarılmaktadır (`doz_arastirma_form_controller.py:140`).
- **Word Çıktı Butonu:** `btnExportWord` nesnesinin metni *"📄 Resmi RD.F43 Word Çıktısı"* olarak doğrulanmıştır (`doz_arastirma_form_dialog.ui:145`).

---

## 3. Nöbet Çizelgesinde Akıllı İkame Personel Atama — Denetim Kaydı

### Taranan Dosyalar

- `ui/widgets/nobet_cizelge_table.py` (satır 95–185)
- `ui/controllers/nobet/nobet_plan_detay_controller.py` (satır 200–250)
- `app/services/nobet/nobet_cizelge_service.py` (satır 1045–1180)

### Düzeltme Notları (Referans vs Kod)

- **Sağ Tık Menüsü:** `_show_context_menu` içinde `⚡ Akıllı İkame Ata (Önerilenler)` menüsü oluşturulmaktadır (`nobet_cizelge_table.py:145`).
- **Skorlama & Gerekçe:** `suggest_shift_substitutes` servisinden dönen en yüksek puanlı ilk 3 aday (0-100 puan) ve gerekçe metni menü eylemi olarak gösterilmektedir (`nobet_cizelge_service.py:1140`).
- **Otomatik Atama:** `substitute_assigned` sinyali ile `_on_substitute_assigned` metodu `upsert_cizelge` çağırıp tabloyu tazelemektedir (`nobet_plan_detay_controller.py:225`).

---

## 4. Şua İzni Zamanaşımı Takibi ve Erken Uyarıları — Denetim Kaydı

### Taranan Dosyalar

- `ui/pages/izin/izin_hakedis_page.ui` (satır 175–195)
- `ui/controllers/izin/izin_hakedis_controller.py` (satır 205–255, 335–410)
- `app/services/personel/izin_service.py` (satır 1175–1240)

### Düzeltme Notları (Referans vs Kod)

- **Filtre Kutusu:** `chkSuaZamanasimi` nesnesi *"⏳ Zamanaşımı Yaklaşan Şua İzinleri"* metniyle UI'ya eklenmiştir (`izin_hakedis_page.ui:185`).
- **Rozetler:** `_fill_table` içinde `[⏳ 45g]`, `[🚨 15g]` ve `[🚨 YANDI]` durum metinleri ve tooltip açıklamaları doğrulanmıştır (`izin_hakedis_controller.py:385`).

---

## 5. Radyasyon Olay Bildirimi ve NDK 2. Gün Hatırlatıcısı — Denetim Kaydı

### Taranan Dosyalar

- `app/services/system/notification_service.py` (satır 360–420)
- `app/services/system/olay_bildirim_service.py` (satır 510–565)

### Düzeltme Notları (Referans vs Kod)

- **2. Gün Tetiklemesi:** `gecen_gun >= 2` olduğunda `⚠️ NDK 2. Gün Hatırlatıcısı` ve `kalan_gun <= 0` olduğunda `🚨 NDK BİLDİRİM SÜRESİ DOLDU` başlıklarıyla bildirim üretilmektedir (`notification_service.py:385`).
- **Mükerrer Bildirim Kontrolü:** `DATE(olusturma_tarihi) = ?` ile aynı gün mükerrer bildirim engellenmiştir (`notification_service.py:400`).

---

## 6. Koruyucu Ekipman (RKE) DIN 6857-1 Muayene Kararları — Denetim Kaydı

### Taranan Dosyalar

- `app/services/rke_service.py` (satır 410–495)
- `tests/test_rke_service.py` (satır 125–160)

### Düzeltme Notları (Referans vs Kod)

- **Merkezi Kural Motoru (SSOT):** `evaluate_rke_inspection_rules` fonksiyonu Kritik Bölge (HEK), Non-Kritik $>15\text{ mm}^2$ (HEK), $\le 15\text{ mm}^2$ (Şartlı Kullanım), $<0.25\text{ mm Pb}$ (Şartlı Kullanım) kurallarını çalıştırmaktadır (`rke_service.py:440`).

---

## 7. RGS / RSO Görevlendirme ve NDK Sertifika Takibi — Denetim Kaydı

### Taranan Dosyalar

- `ui/pages/personel/rgs_gorevlendirme_page.ui`
- `ui/controllers/personel/rgs_gorevlendirme_controller.py`
- `ui/controllers/personel/rgs_gorevlendirme_dialog_controller.py`
- `app/services/personel/rgs_gorevlendirme_service.py`

### Düzeltme Notları (Referans vs Kod)

- **Kılavuza Ekleme Yapıldı:** Kılavuzda Bölüm 3 altında eksik olan RGS takibi, koddaki KPI kartları (`lblKpiTotal`, `lblKpiActive`, `lblKpiExpiring`, `lblKpiExpired`), filtreleme ve CSV ihracı özellikleri ile senkronize edilerek `Madde 3.7` olarak kullanım kılavuzuna işlendi.
- **Sertifika Durum Rozetleri:** Koddaki 60 gün kuralı (`sertifika_durum_ui`: `GEÇERLİ`, `YAKLAŞTI`, `DOLDU`) kılavuza eklendi.

---

## 8. RADPYS Portal Launcher (GUI) — Denetim Kaydı

### Taranan Dosyalar

- `user_launcher/portal_launcher.py` (satır 1–950)
- `web_portal/server.ts` (satır 5730–5758)

### Düzeltme Notları (Referans vs Kod)

- **GUI Başlatıcı:** Kılavuzda ana masaüstü menüsü altında hayali bir alt pencere olarak anlatılan kısım düzeltildi; `RADPYS_Portal_Launcher.exe` grafik başlatıcısının (`[ ▶ Portali Başlat ]`, `[ ⏹ Portali Durdur ]`, `[ 🌐 Portala Git ]`, Port 3000, LAN IP tespiti, Sistem Tepsisi küçültme) gerçek işleyişi `Bölüm 15.3` ve SSS `12.1`'e işlendi.

---

## 9. Veritabanı Bakım ve 2 Aşamalı Güvenlikli Sıfırlama — Denetim Kaydı

### Taranan Dosyalar

- `ui/controllers/admin/system/db_maintenance_controller.py` (satır 190–248, 730–785)
- `scripts/reset_db.py`

### Düzeltme Notları (Referans vs Kod)

- **Çift Kademeli Doğrulama:** Koddaki `on_reset_database` iş akışı doğrulandı: 1. Aşama `ConfirmResetDialog` (kutucuğa büyük harflerle `SIFIRLA` yazılması), 2. Aşama `SudoDialogController` (Sistem Yöneticisi şifresinin girilmesi). Kılavuz `Bölüm 18.4` bu 2 adımı içerecek şekilde eşitlendi.

---

## 10. Evrensel Onay Sistemi ve 4 Kategori Ayrımı — Denetim Kaydı

### Taranan Dosyalar

- `ui/controllers/onay_bekleyen_gorevler_controller.py` (satır 80–150)
- `app/services/system/approval_service.py`

### Düzeltme Notları (Referans vs Kod)

- **Kategori Senkronizasyonu:** `btnTabIzin` butonunun gizlendiği ve izinlerin doğrudan İzin Modülü'nden yönetildiği; Onay Paneli'nin ise **Nöbet Devirleri**, **Gebelik & İdari Aksiyonlar**, **Nöbet Planları** ve **Veri Değişiklikleri** olmak üzere 4 ana kategoriyi yönettiği `Bölüm 12.1`'e yansıtıldı.

---

## 11. %100 Docstring Kapsam Denetimi — Denetim Kaydı

### Taranan Dosyalar

- Proje genelindeki 104 kaynak dosya (`app/`, `ui/`, `scratch/`, `scripts/`)
- `scripts/find_missing_docstrings.py` & `scripts/docstring_hierarchy_summary.py`

### Düzeltme Notları (Referans vs Kod)

- **1228 Hedef:** Tüm modül, sınıf ve fonksiyonlar PEP 257 standartlarında docstring'e kavuşturuldu; 0 eksik ile kapsama oranı %100'e ulaştı. Windows cp1254 terminal desteği sağlandı.

