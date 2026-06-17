# Pilar PNS Landing Page

Landing page untuk menjual Pilar PNS Bundle 13 Modul (latihan soal tes PNS).

## Stack

- HTML5 semantic
- CSS3 (custom properties, dual mode)
- Vanilla JavaScript (no library)
- Google Fonts (Cinzel, Playfair Display, Inter, Roboto Mono)
- Hosting: GitHub Pages (recommended)

## File Structure

```
pilar-cpns-landing/
├── index.html         (HTML5 semantic, 9 sections, ~22KB)
├── style.css          (Design tokens, dual mode, components, ~22KB)
├── script.js          (Theme toggle, smooth scroll, FAQ, ~2KB)
├── robots.txt         (SEO crawler rules)
├── sitemap.xml        (Single URL, lastmod 2026-06-17)
├── manifest.json      (PWA manifest)
├── README.md          (This file)
├── design.md          (Design specification per taste-SKILL)
├── planning.md        (Initial planning document)
└── assets/
    ├── favicon.ico
    ├── og-image.png
    └── sample-modul-1.pdf
```

## Local Preview

Open `index.html` directly in a browser, OR use a local server:

```bash
# Python
python3 -m http.server 8000

# Node (if installed)
npx http-server -p 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create new GitHub repository (e.g., `pilar-cpns-landing`)
2. Push all files to `main` branch
3. Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)`
4. Wait for deployment, URL will be `https://<username>.github.io/pilar-cpns-landing/`
5. Add custom domain in Settings → Pages → Custom domain (optional)

## Custom Domain Setup (optional)

1. Buy domain (e.g., `pilarcpns.com`)
2. Add CNAME file to repo root with domain name
3. Configure DNS:
   - Apex domain: A records to GitHub IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - Subdomain `www`: CNAME to `<username>.github.io`
4. Enable HTTPS in GitHub Pages settings

## Before Going Live

### Required Assets (Mas provide)

- [ ] `favicon.ico` (32x32 or multi-size)
- [ ] `og-image.png` (1200x630 for social share)
- [ ] `sample-modul-1.pdf` (1 modul penuh gratis sebagai sample)
- [ ] Real hero image (ganti picsum placeholder di `index.html` line 121)
- [ ] Real WhatsApp number (replace `6281234567890` di semua href)
- [ ] Real lynk.id URLs (replace `https://lynk.id/pilar-pns/...`)
- [ ] Google Analytics 4 tracking ID (add ke `<head>`)
- [ ] Google Search Console verification (add meta tag)

### Real Image Replacements

In `index.html`:
- Hero image: `https://picsum.photos/seed/pilar-pns-hero/1600/1200`
- Sample preview: `https://picsum.photos/seed/pilar-pns-sample/600/800`

Generate via FLUX.1-schnell or provide manually.

## SEO + Analytics

- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics 4 firing on page load
- [ ] Verify JSON-LD FAQ schema via Google Rich Results Test
- [ ] Check Open Graph image renders correctly (debugger)
- [ ] Run Lighthouse audit (target 90+ performance, 95+ SEO)

## Post-Launch

- Monitor GA4 daily for first week, weekly after
- Check GSC for indexing + search queries
- Backlink outreach to Indonesian exam prep communities
- A/B test headline and CTA copy after 1000+ visitors

## Design Reference

See `design.md` for full design specification (per taste-SKILL anti-slop methodology).
See `planning.md` for initial planning and decisions.

## Contact

Email: pilarcpns@gmail.com
WhatsApp: 6281234567890 (replace with real)
