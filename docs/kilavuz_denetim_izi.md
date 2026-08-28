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
