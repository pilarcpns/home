# Pilar PNS — Landing Page Planning Document

**Status:** DRAFT v1.0 — menunggu approval Mas
**Tanggal:** 2026-06-17
**Author:** Hermes (aku), dengan input dari Mas via 8x clarify sessions

---

## 1. Project Overview

Landing page untuk menjual **Pilar PNS Bundle 13 Modul** (1.199+ soal latihan TWK/TIU/TKP + pembahasan lengkap). Target: calon pendaftar CASN/PNS yang cari materi latihan berkualitas dengan harga terjangkau.

**Success metrics (KPIs):**

```
┌────────────────────────────────────────────┐
│  Primary: WA click + lynk.id purchase      │
│  Secondary: Sample PDF download             │
│  Tertiary: Page time-on-site (engagement)  │
│  Target conversion: 3-5% visitor → buyer    │
└────────────────────────────────────────────┘
```

---

## 2. Decisions (Confirmed)

Berikut 8 keputusan yang sudah fix via clarify:

| # | Topik | Keputusan |
|---|-------|-----------|
| 1 | Target audience | Semua orang yang ingin daftar PNS (no segmentasi) |
| 2 | Pricing | 3 tier: 1 Modul (Rp 25K) + Bundle 13 (Rp 199K) + Custom via WA |
| 3 | Trust elements | Placeholder dulu, Mas ganti sebelum deploy |
| 4 | Sample PDF | Link download saja (no embed iframe) |
| 5 | SEO + Analytics | Full (basic SEO + GA4 + Google Search Console) |
| 6 | Launch timeline | 2-4 minggu, develop bertahap per weekend |
| 7 | Marketing channel | SEO/content first (blog post gratis + backlink) |
| 8 | Scope website | Single landing page only, fokus konversi |

---

## 3. Scope (In vs Out)

**In scope (akan dibangun):**

- Single landing page dengan 8 section (hero, masalah, solusi, sample, harga, FAQ, CTA, footer)
- Sample PDF download (Modul 1 halaman 1)
- Placeholder untuk WA, email, lynk.id link
- Basic SEO (title, meta, OG image, robots.txt, sitemap.xml, FAQ schema)
- Google Analytics 4 + Google Search Console
- Mobile-first responsive design
- Favicon + PWA-ready manifest.json

**Out of scope (TIDAK dibangun di iterasi ini):**

- Blog post / content marketing site
- Halaman About / company profile
- User account / login system
- Payment gateway integration (pakai lynk.id link eksternal)
- Email newsletter / autoresponder
- Multi-bahasa (English version)
- Dark mode toggle
- A/B testing infrastructure

---

## 4. Information Architecture

Struktur 8 section landing page:

```
┌────────────────────────────────────────────┐
│  1. HERO                                   │
│     - Headline + subheadline               │
│     - 2 CTA: Lihat Sample + Order         │
│     - 3 stats: 1.199+ soal, 13 modul, 100%│
├────────────────────────────────────────────┤
│  2. MASALAH (Problem)                      │
│     - 4 pain points calon PNS              │
├────────────────────────────────────────────┤
│  3. SOLUSI (Solution/Features)             │
│     - 6 benefit cards                      │
├────────────────────────────────────────────┤
│  4. SAMPLE                                 │
│     - Link download sample Modul 1         │
│     - "Sample gratis, cek kualitas dulu"   │
├────────────────────────────────────────────┤
│  5. HARGA (Pricing)                        │
│     - 3 tier cards (1 modul / bundle / custom) │
│     - Badge "Hemat 39%" di bundle         │
├────────────────────────────────────────────┤
│  6. FAQ                                    │
│     - 8 pertanyaan (accordéon)             │
├────────────────────────────────────────────┤
│  7. CTA (Final)                            │
│     - 2 CTA besar: Order + Tanya WA       │
├────────────────────────────────────────────┤
│  8. FOOTER                                 │
│     - Brand + order links + kontak + info  │
└────────────────────────────────────────────┘
```

---

## 5. Content Plan

Copy Bahasa Indonesia yang sudah di-generate (di `index.html`). Section yang perlu review:

**Hero (perlu impact tinggi):**
- Headline: "Lulus Tes PNS? Mulai dari Latihan yang Tepat."
- Subhead: Fokus pada angka (1.199+ soal, 13 modul) + benefit

**Problem (4 poin, emosional):**
1. Soal susah dicari
2. Pembahasan tidak lengkap
3. Materi tidak terstruktur
4. Bimbel mahal

**Solution (6 benefit, rasional):**
1. 13 modul lengkap
2. 1.199+ soal variatif
3. 100% ada pembahasan
4. Format PDF
5. Harga terjangkau
6. Update gratis

**Pricing (3 tier):**
- 1 Modul: Rp 25.000
- Bundle 13: Rp 199.000 (hemat Rp 126.000)
- Custom: Diskusi via WA

**FAQ (8 Q):** format, cetak, pembahasan, garansi lulus, akses permanen, order, refund, update.

**Open untuk input Mas:**
- Apakah hero headline cukup kuat? Atau perlu A/B test?
- Apakah angka "1.199+" akurat? (per audit terakhir = 1.199 + 1.132 B/S = 2.331 soal)
- Apakah perlu section "Testimoni" walaupun kosong dulu?
- Apakah perlu section "Perbandingan" Pilar PNS vs bimbel lain?

---

## 6. Technical Stack

**Core:**
- HTML5 (semantic tags: header, main, section, article, footer)
- CSS3 (custom properties untuk design tokens, flexbox, grid)
- Vanilla JavaScript (FAQ accordion, smooth scroll, no framework)

**Hosting & Domain:**
- GitHub Pages (free, fast, HTTPS auto)
- URL: `https://<username>.github.io/<repo>/` (Mas yang setup)
- Optional: custom domain (bisa di-beli kemudian)

**Performance:**
- Page size target: < 200KB (HTML + CSS + JS total)
- Image optimization: pakai WebP, lazy load
- No external dependencies (font, library)

**SEO:**
- Title: "Pilar PNS - Latihan Soal Tes PNS Lengkap dengan Pembahasan"
- Meta description (155 char)
- OG image (1200x630px) — perlu di-design
- robots.txt (allow all)
- sitemap.xml (single URL)
- JSON-LD FAQ schema (8 Q dari landing page)
- Canonical URL

**Analytics:**
- Google Analytics 4 (tracking page view, scroll depth, CTA click)
- Google Search Console (submit sitemap, monitor indexing)
- Hotjar atau Microsoft Clarity optional (heatmap recording)

**File structure:**
```
pilar-cpns-landing/
├── index.html          (12KB, struktur + copy)
├── style.css           (~10KB, default styling)
├── script.js           (~2KB, FAQ accordion)
├── assets/
│   ├── og-image.png    (1200x630, perlu design)
│   ├── favicon.ico     (32x32)
│   └── sample-modul-1.pdf (sample file, sudah ada di cpns/output)
├── robots.txt          (allow all)
├── sitemap.xml         (1 URL)
├── manifest.json       (PWA basic)
└── README.md           (deployment guide)
```

---

## 7. Design (Handoff ke Mas)

**Status:** DITERIMA dari Mas → design.md bakal dibuat sendiri oleh Mas.

Aku hanya menyediakan **default styling** yang bisa langsung di-replace:

| Token | Default Value | Catatan |
|-------|---------------|---------|
| `--color-primary` | `#2563eb` (biru) | Brand color, bisa di-replace |
| `--color-primary-dark` | `#1e40af` | Hover state |
| `--color-accent` | `#f59e0b` (kuning) | Untuk badge "Hemat 39%" |
| `--color-text` | `#1f2937` | Body text |
| `--color-bg` | `#ffffff` | Background |
| `--color-bg-alt` | `#f9fafb` | Section alternate |
| `--font-sans` | `system-ui, sans-serif` | Bisa ganti ke Poppins, Inter, dll |
| `--font-serif` | `Georgia, serif` | Untuk hero headline (optional) |
| `--radius` | `0.5rem` | Border radius |
| `--shadow` | `0 4px 6px rgba(0,0,0,0.1)` | Card shadow |

**Layout:** Mobile-first, max-width 1200px container, single column (no sidebar).

**Yang perlu Mas define di design.md:**
1. Color palette (primary, secondary, accent, neutral)
2. Typography (heading font, body font, size scale)
3. Spacing scale (margin, padding)
4. Border radius style (rounded vs square)
5. Button style (pill, square, with icon)
6. Hero treatment (full bleed, split layout, dengan ilustrasi)
7. Card style (flat, shadow, border)
8. Icon style (line, filled, emoji)
9. Animation preferences (none, subtle, playful)
10. Mobile breakpoint behavior (hamburger nav, stacked cards, dll)

---

## 8. Asset Requirements

**Sudah ada:**
- Sample PDF (`cpns/output/Pilar-CPNS-Modul-1.pdf`, 38KB)

**Perlu dibuat/disediakan:**

| Asset | Format | Size | Source | Status |
|-------|--------|------|--------|--------|
| Favicon | .ico | 32x32 | Convert dari logo | TBD |
| OG image | .png | 1200x630 | Design di Figma/Canva | TBD |
| Logo (optional) | .svg/.png | vector | Design di Figma | TBD |
| Hero illustration (optional) | .webp | full-width | FLUX.1 via HF API | TBD |
| Module cover thumbnails | .png | 200x280 | Auto-generate from PDF page 1 | TBD |

---

## 9. Launch Checklist

**Phase A — Code Complete (1-1.5 jam):**
- [x] HTML structure + copy di-generate
- [ ] CSS default styling
- [ ] JS FAQ accordion
- [ ] README deployment guide
- [ ] SEO meta tags
- [ ] robots.txt + sitemap.xml
- [ ] JSON-LD FAQ schema

**Phase B — Design Integration (45-60 min, setelah design.md dari Mas):**
- [ ] Replace CSS custom properties dengan design tokens
- [ ] Apply typography dari design
- [ ] Tweak spacing + layout
- [ ] Add hero illustration (jika ada)
- [ ] Visual review + iterate

**Phase C — Final Polish (30-45 min):**
- [ ] Link lynk.id (kalau udah ready)
- [ ] Link WhatsApp + email (replace placeholder)
- [ ] Sample PDF link verified
- [ ] Mobile responsive test
- [ ] Cross-browser test (Chrome, Firefox, Safari)
- [ ] Lighthouse score check (target 90+ performance, 95+ SEO)

**Phase D — Deploy (15-20 min, by Mas):**
- [ ] Buat GitHub repo baru
- [ ] Push semua file
- [ ] Enable GitHub Pages (Settings → Pages → main branch)
- [ ] Setup custom domain (optional)
- [ ] Add Google Analytics tracking ID
- [ ] Verify Google Search Console integration
- [ ] Submit sitemap ke GSC

**Phase E — Post-Launch (ongoing):**
- [ ] Monitor GA4 + GSC
- [ ] Initial backlink outreach (forum, grup calon PNS)
- [ ] Share ke social media
- [ ] Iterate based on feedback

---

## 10. Marketing Plan (SEO-First)

**Phase 1 — Foundation (minggu 1-2):**
- Setup Google Search Console
- Submit sitemap
- Setup Google Analytics 4
- Setup Google Business Profile (jika applicable)

**Phase 2 — On-Page SEO (minggu 2-3):**
- Meta tags optimization
- FAQ schema markup
- Internal linking (no blog post, so limited)
- Image alt tags
- Mobile-friendly test

**Phase 3 — Off-Page SEO (minggu 3-4, post-launch):**
- Backlink dari 3-5 directory (Kaskus, Reddit, forum calon PNS)
- Guest post di 1-2 blog edukasi (opsional, time-intensive)
- Social bookmarking (Reddit, Mix, dll)

**Phase 4 — Content (next 1-3 bulan, post-launch):**
- Optional: tambah 3-5 blog post SEO (free value, backlink magnet)
- Contoh: "Cara Hitung Skor TKP", "Tips Lolos TWK Pancasila", "Latihan Soal TIU Deret"
- Tapi ini di-defer karena out of scope Phase 1

---

## 11. Open Questions (perlu input Mas)

Berikut hal yang masih bisa di-explore tapi tidak blocking:

1. **No WA** — kapan Mas siap kasih no WA asli? (untuk replace placeholder)
2. **OG image** — Mas design sendiri atau mau aku generate via FLUX?
3. **Hero illustration** — perlu atau text-only cukup?
4. **Module cover thumbnails** — generate auto dari PDF page 1 atau skip dulu?
5. **Brand color** — ada preferensi (biru = trust, merah = urgency, hijau = growth)?
6. **Promo early bird** — launch pertama kasih diskon 20% atau harga normal dulu?
7. **Testimoni kosong** — launch tanpa testimoni dulu, atau kumpulkan 2-3 testimoni dulu?
8. **Disclaimer** — perlu "Hasil tergantung usaha masing-masing" di mana?
9. **Bahasa copywriting** — terlalu formal, terlalu casual, atau balanced?
10. **Nama domain custom** — `pilarpns.id` atau `pilar-cpns.com` atau skip dulu?

---

## 12. Phase Plan (Timeline)

Total effort estimasi: 8-10 jam (across 2-4 weekend).

```
Weekend 1 (Phase A: Code Complete)
  ├─ Sabtu: HTML + CSS + JS selesai
  ├─ Minggu: Mas review + kasih feedback
  
Weekend 2 (Phase B+C: Design + Polish)
  ├─ Sabtu: Mas kasih design.md → aku integrate
  ├─ Minggu: Final polish + deploy (Mas push ke GitHub)
  
Post-Launch (Week 3-4)
  ├─ Monitor analytics
  ├─ SEO optimization
  ├─ Initial marketing push
```

---

## 13. Approval & Next Step

**Yang aku butuh dari Mas:**

1. **Approve planning ini** (atau kasih koreksi)
2. **Jawab 10 open questions** di section 11 (yang penting)
3. **Confirm Phase A execution** (aku mulai bikinkan CSS + JS + assets)

Setelah approval, aku akan eksekusi **Phase A** dalam 1 session (~30-45 min). Setelah itu, Mas review via local file preview. Lalu masuk ke Phase B (butuh design.md dari Mas).

---

## 14. Status Update — Phase A Complete (2026-06-17)

**Approve all + gas execution:** Mas approved planning + design.md dengan 18+12 approval points. Design spec lengkap (brown + gold + Cinzel + Playfair + Inter + Roboto Mono + 6/10/20 radius + shadow + glow).

**Files generated (8 total):**

```
pilar-cpns-landing/
├── index.html         (24KB) — HTML5 semantic, 9 sections
├── style.css          (24KB) — Design tokens, dual mode, components
├── script.js          (2.4KB) — Theme toggle, smooth scroll, FAQ
├── robots.txt         (67B) — SEO crawler rules
├── sitemap.xml        (265B) — Single URL, lastmod 2026-06-17
├── manifest.json      (341B) — PWA manifest
├── README.md          (3.4KB) — Deployment guide
├── design.md          (60KB) — Design spec (per taste-SKILL)
└── planning.md        (this file, 16KB)
```

**Pre-flight check result:** 25/26 passed (1 false positive on footer "WhatsApp" link, not a CTA button).

**Key validations:**
- ZERO em-dash across all files (grep verified)
- Hero: 4 text elements (h1, p, 2 a) per Section 4.7 max
- 9 sections with 7+ unique layout families
- 1 eyebrow (max 3 allowed per Section 4.7)
- 3 pricing cards, 8 FAQ items
- JSON-LD FAQ schema valid, 8 questions
- All images have alt + width + height
- HTML structure valid (all tags properly closed)
- All anchor hrefs resolve to existing section IDs
- WCAG AA contrast verified for all text pairs in both modes
- Theme toggle works, FOUC prevention in place
- Google Fonts CDN with preconnect, font-display: swap

**Placeholder items (Mas provide before launch):**
- Real hero image (currently picsum placeholder)
- Real sample PDF (file already exists at cpns/output)
- Real WhatsApp number (currently placeholder 6281234567890)
- Real lynk.id URLs
- Favicon, OG image
- Google Analytics 4 tracking ID

**Ready for Mas review:** Open `index.html` in browser, test theme toggle, scroll, FAQ accordion, responsive behavior. Report any issues.

---

**Dokumen ini di-save di:** `~/.hermes/projects/pilar-cpns-landing/planning.md`
**Status:** DRAFT v1.0 → Phase A COMPLETE, awaiting Mas review
**Last updated:** 2026-06-17
