# RADPYS V4 - PostgreSQL & KVKK Dosya Kasası Güvenlik ve Kurtarma Prosedürü

**Sürüm:** 4.0.0 (PostgreSQL Mimarisi)  
**Kapsam:** PostgreSQL Veritabanı ve `stored_files` (KVKK Fernet AES-256 Dosya Deposu)  

---

## 1. Veritabanı ve Şifreleme Mimarisi

RADPYS V4, KVKK Teknik Tedbirler Rehberi ve kurumsal veri güvenliği standartları uyarınca katmanlı bir güvenlik mimarisi kullanır:

1. **PostgreSQL Veritabanı:**
   - Tüm ilişkisel veriler (personel, izin, nöbet, dozimetre, cihazlar) kurumsal PostgreSQL sunucusunda tutulur.
   - Bağlantı parametreleri `.env` ortam dosyasında (`RADPYS_DB_HOST`, `RADPYS_DB_PORT`, `RADPYS_DB_NAME`, `RADPYS_DB_USER`, `RADPYS_DB_PASSWORD`) yapılandırılır.
   - Kullanıcı parolaları tek yönlü **PBKDF2-HMAC-SHA256** (veya bcrypt) ile tuzlanarak (salt) şifrelenir.

2. **KVKK Evrak Kasası (`stored_files` Tablosu):**
   - Personel diplomaları, sağlık raporları, muayene fotoğrafları ve resmi formlar diske açık yazılmaz.
   - Veritabanı içerisindeki `stored_files` tablosunda **Fernet (AES-256-CBC)** şifreli blob olarak saklanır.
   - Şifreleme anahtarı `RADPYS_FILE_ENCRYPTION_KEY` ortam değişkeniyle yönetilir.

---

## 2. Acil Durum Kurtarma ve Yönetim Araçları

Ana masaüstü uygulamasının açılamadığı veya acil müdahale gereken durumlarda `tools/` altındaki bağımsız geliştirici araçları kullanılır:

### A) Bağımsız Master Destek Paneli (GUI)
```bash
python tools/RADPYS_Master_Tool.py
```
- **Kullanım:**
  - Kilitli veya şifresi unutulmuş Admin/Kullanıcı hesaplarını tek tıkla kurtarır.
  - PostgreSQL ve KVKK Fernet anahtar durumunu doğrular.
  - Tablo sağlık taraması ve otomatik anomali onarımı yapar.

### B) Komut Satırı Kurtarma Aracı (CLI)
```bash
# Sistemdeki kullanıcıları listele
python tools/master_support_cli.py list

# Admin şifresini sıfırla ve kilidi kaldır
python tools/master_support_cli.py reset admin YeniSifre2026!

# Log ve denetim izi analizi yap
python tools/master_support_cli.py logs
```

---

## 3. PostgreSQL Yedekleme ve Geri Yükleme Prosedürü

### Anlık Yedek Alma (pg_dump)
```bash
pg_dump -h localhost -p 5432 -U postgres -F c -b -v -f "radpys_yedek.dump" radpys_db
```

### Yedekten Geri Yükleme (pg_restore)
```bash
pg_restore -h localhost -p 5432 -U postgres -d radpys_db -v "radpys_yedek.dump"
```
