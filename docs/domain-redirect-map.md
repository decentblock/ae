# Domain & redirect map — cogsglobal.com → cogsglobal.ae

**Policy:** `cogsglobal.ae` is canonical for UAE/GCC insurer-facing and shared service content. `cogsglobal.com` retains India-specific pages or redirects duplicates.

## Host canonicalization (.ae)

| Request | Action |
|---------|--------|
| `http://cogsglobal.ae/*` | 301 → `https://cogsglobal.ae/*` |
| `https://www.cogsglobal.ae/*` | 301 → `https://cogsglobal.ae/*` (or reverse — pick one; site assumes **non-www**) |

## .com → .ae redirects (implement after content parity)

| Source (cogsglobal.com) | Target (cogsglobal.ae) | Notes |
|---------------------------|-------------------------|--------|
| `/` | `https://cogsglobal.ae/` | If homepage is UAE-focused |
| `/affiliations/` | `https://cogsglobal.ae/en/affiliations-licenses/` | Update NAP on .com before redirect |
| UAE service pages mirroring .ae hubs | Matching `/en/.../` URL | 301 only when .ae page is live |

## Keep on .com (no redirect)

- India office network pages with **unique IRDAI / PAN-India** content
- Legacy URLs with inbound links until mapped

## Canonical tags

Every `.ae` page: `<link rel="canonical" href="https://cogsglobal.ae{path}">`  
If `.com` page remains live for India: canonical to itself, `hreflang` to `.ae` only for true equivalents.

## Nginx example

```nginx
server {
  listen 443 ssl;
  server_name cogsglobal.ae;
  root /var/www/cogsglobal-ae;
  location / {
    try_files $uri $uri/ $uri/index.html =404;
  }
}

server {
  listen 443 ssl;
  server_name www.cogsglobal.ae;
  return 301 https://cogsglobal.ae$request_uri;
}

server {
  listen 443 ssl;
  server_name cogsglobal.com www.cogsglobal.com;
  location = /affiliations/ {
    return 301 https://cogsglobal.ae/en/affiliations-licenses/;
  }
  # Add mapped paths; default: evaluate India vs global homepage
}
```

## Apache example

```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.cogsglobal\.ae$ [NC]
RewriteRule ^ https://cogsglobal.ae%{REQUEST_URI} [R=301,L]
```

## Sign-off

| Role | Name | Date |
|------|------|------|
| Marketing | | |
| Legal / Compliance | | |
| Dev / Hosting | | |
