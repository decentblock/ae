# Deploy COGS Global site on DigitalOcean

**What you deploy:** the **built static files** in `sites/cogsglobal-ae/dist/` (HTML, `/en/`, `/ar/`, assets, sitemaps).  
**Not required on the server:** Node.js at runtime (only needed to **build**).

**Code location (this repo):**

```
new-gateway/sites/cogsglobal-ae/
├── content/          # copy + config
├── scripts/build.mjs # generator
├── public/           # robots.txt, CSS, JS
├── dist/             # ← upload this after npm run build
└── deploy/           # nginx example
```

---

## Before you deploy

1. **Build locally** (or in CI):

   ```bash
   cd sites/cogsglobal-ae
   npm install   # first time only
   npm run build
   ```

2. **Set GA4** (optional but recommended): edit `content/site-config.json` → `ga4MeasurementId`, then rebuild.

3. **Smoke test**:

   ```bash
   npx --yes serve dist -p 4173
   ```

   Check `/`, `/ar/`, `/en/loss-adjustment-uae/`, `/robots.txt`, `/sitemap.xml`.

---

## Option A — App Platform static site (recommended to **share a preview**)

Best when you want HTTPS + a `*.ondigitalocean.app` URL quickly, then attach **cogsglobal.ae**.

### A1. Push code to GitHub

- Use the full `new-gateway` repo **or** a small repo that contains only `sites/cogsglobal-ae/`.
- App Platform must see `package.json` and `scripts/build.mjs`.

### A2. Create the app

1. [DigitalOcean](https://cloud.digitalocean.com/) → **Apps** → **Create App**.
2. **Source:** GitHub → pick repo and branch.
3. If using the monorepo, set **Source Directory** to:  
   `sites/cogsglobal-ae`
4. **Resource type:** **Static Site** (not Web Service).
5. **Build command:**

   ```bash
   npm install && npm run build
   ```

6. **Output directory:** `dist`
7. **HTTP request routes:** `/` → static site (default).
8. **Create Resources** → wait for deploy.

You get a URL like: `https://cogsglobal-ae-xxxxx.ondigitalocean.app` — **share this** for review.

### A3. Custom domain (cogsglobal.ae)

1. App → **Settings** → **Domains** → **Add Domain** → `cogsglobal.ae`.
2. Add DNS at your **.ae registrar**:

   | Type  | Host | Value |
   |-------|------|--------|
   | CNAME | `@` or `www` | (value shown in DO UI — often `cname...ondigitalocean.app`) |
   | or A  | `@ | (DO load balancer IPs if provided) |

3. Enable **Force HTTPS** in the app.
4. Add both `cogsglobal.ae` and `www.cogsglobal.ae` in DO; redirect **www → non-www** in app settings if available (matches canonical policy in `docs/domain-redirect-map.md`).

### A4. Redeploy

Push to the connected branch → App Platform rebuilds automatically (or **Actions → Deploy**).

---

## Option B — Droplet + Nginx (full control)

Use a small Droplet (Ubuntu 22.04/24.04) if you prefer SFTP/rsync deploys or already host email/DNS there.

### B1. Create Droplet

- **Image:** Ubuntu LTS  
- **Plan:** Basic $4–6/mo is enough for static HTML  
- **Region:** NYC/FRA/SGP — pick closest to UAE users if unsure  
- Add **SSH key**

### B2. Install Nginx

```bash
ssh root@YOUR_DROPLET_IP
apt update && apt install -y nginx
```

### B3. Upload `dist/`

On your **Mac** (from repo root):

```bash
cd sites/cogsglobal-ae
npm run build
rsync -avz --delete dist/ root@YOUR_DROPLET_IP:/var/www/cogsglobal.ae/
```

Or use **FileZilla / Cyberduck** → `/var/www/cogsglobal.ae/`.

### B4. Nginx config

On the Droplet:

```bash
mkdir -p /var/www/cogsglobal.ae
nano /etc/nginx/sites-available/cogsglobal.ae
```

Paste from [`deploy/nginx-cogsglobal.ae.conf`](../deploy/nginx-cogsglobal.ae.conf), then:

```bash
ln -sf /etc/nginx/sites-available/cogsglobal.ae /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
```

### B5. SSL (Let’s Encrypt)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d cogsglobal.ae -d www.cogsglobal.ae
```

Follow prompts; choose redirect HTTP → HTTPS.

### B6. DNS

At registrar, point **cogsglobal.ae**:

| Type | Name | Value |
|------|------|--------|
| A | `@` | Droplet IPv4 |
| A | `www` | Droplet IPv4 (or CNAME www → @ after cert) |

Wait for propagation (minutes to hours).

### B7. Update site later

```bash
npm run build
rsync -avz --delete dist/ root@YOUR_DROPLET_IP:/var/www/cogsglobal.ae/
```

---

## Option C — Spaces + CDN (static only, no build on DO)

1. Create **Space** (e.g. `cogsglobal-static`) with **CDN enabled**.
2. Upload **all files inside** `dist/` to the Space root (preserve folders `en/`, `ar/`, `assets/`).
3. Set Space **Files** to **Public**.
4. Point custom domain to CDN endpoint (DO docs: Spaces custom domain).
5. **Note:** You must rebuild and re-upload locally each time; no Git auto-deploy unless you add CI.

---

## Share with stakeholders (before production domain)

| Method | URL |
|--------|-----|
| App Platform default | `https://<app-name>.ondigitalocean.app` |
| Temporary Droplet | `http://DROPLET_IP` (add HTTPS before sharing widely) |
| Local (dev only) | `http://localhost:4173` on your machine |

Send: home, Arabic home, loss adjustment, contact:

- `/`
- `/ar/`
- `/en/loss-adjustment-uae/`
- `/en/contact/`

---

## Post-deploy checklist

- [ ] `https://cogsglobal.ae/robots.txt` → 200  
- [ ] `https://cogsglobal.ae/sitemap.xml` → 200  
- [ ] Language switch **العربية / English** works (relative links)  
- [ ] `www` redirects to non-www (or your chosen canonical)  
- [ ] Google Search Console verify + submit sitemap (`docs/gsc-ga4-setup.md`)  
- [ ] GA4 realtime shows visits  

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `/en/foo/` 404 on Droplet | Nginx `try_files $uri $uri/ $uri/index.html` (see deploy nginx conf) |
| `/ar` without slash broken | Always link `/ar/`; nginx `try_files` helps |
| Old site still shows | DNS cache; purge CDN; hard refresh |
| Mixed content | Site is HTTPS-only; fix any hardcoded `http://` in content |
| Build fails on App Platform | Confirm **Source Directory** = `sites/cogsglobal-ae`, Node 20 in app spec |

---

## Minimal `app.yaml` (App Platform — optional)

If you use **doctl** or spec-based deploy:

```yaml
name: cogsglobal-ae
static_sites:
  - name: web
    source_dir: /sites/cogsglobal-ae
    github:
      repo: YOUR_ORG/YOUR_REPO
      branch: main
      deploy_on_push: true
    build_command: npm install && npm run build
    output_dir: dist
    index_document: index.html
    catchall_document: index.html
    routes:
      - path: /
```

Adjust `source_dir` if the app root is already `sites/cogsglobal-ae`.

---

## Who does what

| Task | Owner |
|------|--------|
| Build + content change | Marketing / dev |
| `npm run build` + deploy | Dev or intern |
| DNS at .ae registrar | IT / domain admin |
| SSL + Nginx | Dev / hosting vendor |
| GSC / GA4 | Marketing |