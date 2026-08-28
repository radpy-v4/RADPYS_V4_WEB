# RADPYS V4 Web Portal — Kurulum ve Dış Erişim Dokümanı

**Hedef kitle:** Hastane BT/IT departmanı
**Amaç:** Uygulamayı sunucuda çalıştırmak ve (istenirse) güvenli şekilde dış erişime açmak.
**Kapsam dışı:** Yazılımın kendi güvenlik mimarisi (kimlik doğrulama, oturum yönetimi vb.) — bunlar uygulama içinde zaten mevcuttur ve bu dokümanın konusu değildir.

---

## 1. Önkoşullar

| Gereksinim | Not |
| --- | --- |
| Node.js 18+ | `node -v` ile kontrol edin |
| Açık bir dahili port (varsayılan `3000`) | Sadece `127.0.0.1` üzerinde dinler, dışarıdan doğrudan erişilemez (bkz. Madde 2) |
| (Dış erişim isteniyorsa) bir alan adı veya sabit iç IP | `radpys.hastaneadi.local` gibi |
| (Dış erişim isteniyorsa) 80 ve 443 portlarının dışarıya açık olması | TLS/HTTP için standart portlar |

---

## 2. Uygulamayı Çalıştırma

Uygulama varsayılan olarak **sadece `127.0.0.1` (localhost)** üzerinde dinler — yani sunucunun kendisinden başka hiçbir cihaz doğrudan erişemez. Bu bilinçli bir tasarım: dış erişim varsa mutlaka bir **reverse proxy** üzerinden yapılmalı (bkz. Madde 4).

```bash
cd web_portal
npm install
```

Bir `.env` dosyası oluşturun (`.env.example` dosyasını kopyalayıp düzenleyin):

```bash
cp .env.example .env
```

`.env` içeriğini doldurun:

```
PORT=3000
HOST=127.0.0.1
API_TOKEN=<en az 16 karakterlik rastgele bir değer — SECURE_API_TOKEN_2026 KULLANMAYIN>
ALLOWED_ORIGINS=https://radpys.hastaneadi.local
```

> **Önemli:** `ALLOWED_ORIGINS` boş bırakılırsa uygulama tüm originlere izin verir ve konsola bir güvenlik uyarısı basar. Prod ortamda mutlaka gerçek domain(ler)inizi girin, virgülle ayırarak birden fazla domain ekleyebilirsiniz.

Derleme ve başlatma:

```bash
python build_server.py
node dist/server.cjs
```

Uygulamanın ayakta olduğunu doğrulayın:

```bash
curl http://127.0.0.1:3000/api/health
```

`{"status":"ok", ...}` yanıtı gelmelidir.

### Sunucu olarak sürekli çalıştırma

Terminal kapandığında uygulamanın durmaması için bir process manager kullanılmalı — örnek `pm2` ile:

```bash
npm install -g pm2
pm2 start dist/server.cjs --name radpys-portal
pm2 save
pm2 startup   # sunucu yeniden başladığında otomatik ayağa kalkması için
```

Windows sunucularda alternatif olarak **NSSM** (Non-Sucking Service Manager) ile Windows servisi haline getirilebilir.

---

## 3. Sadece İntranet Kullanımı (dış erişim istenmiyorsa)

Eğer uygulama **sadece hastane iç ağında** kullanılacaksa, Madde 4-5'i uygulamanıza gerek yok. Bu durumda:

- Uygulama `127.0.0.1`'de çalıştığı için diğer iç ağ cihazlarından da erişilemez — bunu değiştirmek isterseniz `.env` içinde `HOST=0.0.0.0` yapabilirsiniz, ancak bu durumda uygulamaya **iç ağdaki herhangi bir cihazdan** (misafir Wi-Fi'a bağlı bir cihaz dahil, eğer ağ segmentasyonu yoksa) erişilebilir hale gelir.
- Öneri: `HOST=0.0.0.0` yapacaksanız, uygulamanın çalıştığı portu (3000) bir güvenlik duvarı kuralıyla sadece belirli bir VLAN/subnet'ten erişilebilir hale getirin.
- Yine de TLS olmadan trafik düz HTTP'dir — hastane iç ağında bile bu, ağ üzerinde trafiği dinleyebilecek biri için bir risktir. Mümkünse iç ağda da Madde 4'teki reverse proxy + TLS kurulumunu uygulamanızı öneririz (self-signed sertifika veya dahili bir CA ile).

---

## 4. Dış Erişim İçin Reverse Proxy + TLS Kurulumu

Uygulama internete/uzaktan erişime açılacaksa, **doğrudan** `node dist/server.cjs` sürecine dışarıdan bağlanılmamalı. Bunun yerine bir reverse proxy (nginx veya Caddy) 443 portunda TLS ile dinlemeli ve isteği dahili olarak `127.0.0.1:3000`'e iletmelidir.

Aşağıda iki alternatif verilmiştir — **Caddy daha az elle uğraş gerektirir** (sertifika otomasyonu dahili), nginx ise çoğu kurumsal ortamda zaten standarttır. İkisinden birini seçmeniz yeterli.

### Seçenek A — Caddy (önerilen, otomatik TLS)

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install caddy
```

`/etc/caddy/Caddyfile` içeriği:

```
radpys.hastaneadi.com {
    reverse_proxy 127.0.0.1:3000
}
```

```bash
sudo systemctl reload caddy
```

Caddy, domain DNS kaydı doğru şekilde sunucuyu gösteriyorsa Let's Encrypt sertifikasını **otomatik alır ve yeniler** — ek bir işlem gerekmez.

### Seçenek B — nginx + certbot (manuel ama yaygın)

```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

`/etc/nginx/sites-available/radpys` dosyası:

```nginx
server {
    listen 80;
    server_name radpys.hastaneadi.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/radpys /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d radpys.hastaneadi.com
```

`certbot`, nginx yapılandırmasını otomatik olarak HTTPS'e yönlendirecek şekilde günceller ve bir **cron/systemd timer** ile sertifikayı 90 günde bir otomatik yeniler (`certbot renew --dry-run` ile test edilebilir).

> **Uyarı:** Sertifika otomatik yenilemesinin gerçekten çalıştığını kurulumdan sonra `certbot renew --dry-run` ile mutlaka test edin. Yenileme başarısız olursa 90 gün sonra sertifika süresi dolar ve kullanıcılar tarayıcıda güvenlik uyarısı görür.

---

## 5. Güvenlik Duvarı Kuralları

| Port | Yön | Kaynak | Not |
| --- | --- | --- | --- |
| 443 | Gelen | İnternet (veya izin verilen IP aralığı) | TLS trafiği |
| 80 | Gelen | İnternet | Sadece Let's Encrypt doğrulaması ve HTTP→HTTPS yönlendirmesi için |
| 3000 | — | **Sadece localhost** | Dışarıya asla açılmamalı — reverse proxy zaten `127.0.0.1` üzerinden erişiyor |

`ufw` örneği:

```bash
sudo ufw allow 443/tcp
sudo ufw allow 80/tcp
sudo ufw deny 3000/tcp   # zaten localhost'a bağlı olduğu için ek güvenlik katmanı
```

---

## 6. Kurulum Sonrası Kontrol Listesi

- [ ] `curl https://radpys.hastaneadi.com/api/health` → `{"status":"ok"}` dönüyor
- [ ] Tarayıcıda kilit simgesi görünüyor, sertifika uyarısı yok
- [ ] `.env` içindeki `API_TOKEN` varsayılan (`SECURE_API_TOKEN_2026`) **değil**
- [ ] `ALLOWED_ORIGINS` gerçek domain(ler)e ayarlanmış
- [ ] `pm2 status` (veya kullandığınız servis yöneticisi) uygulamanın "online" olduğunu gösteriyor
- [ ] Sunucu yeniden başlatıldığında uygulama otomatik ayağa kalkıyor (`pm2 startup` / systemd servis testi)
- [ ] `certbot renew --dry-run` (nginx kullanıyorsanız) başarılı

---

## 7. Bakım Notları

- **Sertifika yenileme:** Caddy otomatik; nginx+certbot için sistemde bir `certbot.timer`/cron zaten kurulur, ayda bir kontrol edilmesi önerilir.
- **Log rotasyonu:** `logs/web_access.log` dosyası zamanla büyür. `logrotate` ile haftalık/aylık rotasyon önerilir (örnek `/etc/logrotate.d/radpys`):

  ```
  /path/to/web_portal/logs/*.log {
      weekly
      rotate 8
      compress
      missingok
      notifempty
  }
  ```

- **Güncelleme:** Yeni bir sürüm geldiğinde `npm install && python build_server.py && pm2 restart radpys-portal` adımları yeterlidir.

---

## 8. Progressive Web App (PWA) Mobil Saha Desteği

RADPYS V4 Saha Veri Giriş Portalı; saha çalışanlarının (nöbetçi teknikerler, doktorlar) mobil cihazlarında (Android/iOS) yerel bir uygulama gibi yüklenebilmesi için PWA (Progressive Web App) desteği ile donatılmıştır.

### 📌 PWA Teknik Önkoşulları & Güvenlik

1. **HTTPS Zorunluluğu:** Service Worker ve PWA manifest kayıtları tarayıcı güvenlik kuralları gereği **sadece geçerli bir TLS/HTTPS bağlantısı** (Madde 4'te anlatılan Reverse Proxy) üzerinden aktif olur.
2. **Kapsam İzolasyonu:** PWA desteği yalnızca Saha Veri Giriş Portalı (`index.html`) için aktiftir. Yönetici/Analiz paneli (`dashboard.html`) PWA önbellek kapsamının dışında tutulur.
3. **Çevrimdışı (Offline) Veri Güvenliği:** KVKK ve kişisel veri gizliliği standartları gereğince canlı nöbet ve hasta verileri asla cihaz önbelleğinde saklanmaz. Bağlantı koptuğunda sistem kullanıcıyı özel güvenli çevrimdışı bildirim ekranına (`/offline.html`) yönlendirir.

### 📱 Mobil Cihazlara Yükleme (Ana Ekrana Ekleme)

* **Android (Chrome):** Siteye girildiğinde beliren *"Ana ekrana ekle"* veya *"Uygulamayı Yükle"* istemine tıklayın.
- **iOS (Safari):** Alt menüdeki **Paylaş (Share)** simgesine dokunup **"Ana Ekrana Ekle"** seçeneğini seçin.

---

## 9. Hizmet İçi Eğitim LMS & Online Sınav Motoru

Web Portalı, personellerin kendilerine atanan zorunlu eğitim dokümanlarını inceleyebileceği, video materyallerini izleyebileceği ve online sınavları tamamlayabileceği entegre bir LMS (Learning Management System) motoruna sahiptir.

### 📌 LMS ve Sınav API Uç Noktaları

- `GET /api/trainings/assigned` — Personele atanmış aktif eğitimleri, materyal linklerini ve sınav durumlarını döndürür.
- `GET /api/trainings/:id/questions` — İlgili eğitimin sınav soru havuzundaki aktif soruları (A, B, C, D seçenekleriyle) listeler.
- `POST /api/trainings/:id/submit-exam` — Personelin sınav cevaplarını toplar, sistem puanını hesaplar; baraj notu geçildiğinde otomatik tamamlama ve onay kaydı oluşturur.
- `GET /api/trainings/:id/material` — Şifreli KVKK Kasasında saklanan eğitim PDF/dokümanlarını yetkili personele güvenli stream olarak sunar.

### 🔒 Güvenlik & Doğrulama

* Personeller yalnızca kendilerine atanan eğitimlerin sınav sorularına erişebilir.
- Doğru cevap anahtarı istemciye (client) asla gönderilmez; puanlama ve değerlendirme sunucu tarafında (`server.ts`) güvenli şekilde hesaplanır.
