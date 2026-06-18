# PilarCPNS Design System (DESIGN.md)

> **Source of truth** untuk semua design decision PilarCPNS landing page. Portable ke Hermes (skill context) + Open Design (design system injection). Format 9-section, compatible dengan Open Design `DESIGN.md` spec.

| Field | Value |
|---|---|
| **Brand** | PilarCPNS |
| **Version** | 1.0 |
| **Last Updated** | 2026-06-18 |
| **Maintainer** | Mas + Hermes |
| **Compatible with** | Hermes skill loader, Open Design v0.10+ |

---

## 1. Brand Identity

### Identitas
1. **Nama**: PilarCPNS (satu kata, no space, capital P di awal)
2. **Tagline**: "Latihan Soal Tes PNS Terlengkap"
3. **Personality**: profesional, terpercaya, approachable, hasil-terbukti
4. **Audience**: calon PNS/CPNS Indonesia, 22-35 tahun, fresh grad + job seeker
5. **Diferensiasi**: lebih murah dari bimbel, repeatable, ada pembahasan, 13 modul terstruktur

### Logo
1. **Elemen**: flame + 2 brown columns (pillar = tiang = Pilar)
2. **Format**: PNG transparent RGBA, 1024x1024 source
3. **Tampak**: nav (40px), favicon (32px), PWA icon (192/512)
4. **Color**: brown-gold gradient

### Voice & Tone
1. **Bahasa**: Indonesia casual tapi sopan
2. **Gak terlalu formal** kayak dokumen pemerintah
3. **Gak terlalu slang** kayak Gen Z extreme
4. **Tone**: ngerti masalah user, kasih solusi konkret, no janji palsu
5. **Pronoun**: "kamu" atau "Anda" tergantung konteks, "kami" untuk PilarCPNS

---

## 2. Color

### Primary Palette

| Token | Hex | OKLch | Usage |
|---|---|---|---|
| `--brand-brown` | `#8B5A2B` | `oklch(52% 0.10 55)` | Primary, hero accents, buttons |
| `--brand-gold` | `#C68B3D` | `oklch(72% 0.12 75)` | Hover state, highlights, glow |
| `--espresso` | `#160B06` | `oklch(15% 0.02 40)` | Text, dark mode background |
| `--cream` | `#F4E8D5` | `oklch(95% 0.02 80)` | Light mode background, soft sections |

### Semantic

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#160B06` (light) / `#F4E8D5` (dark) | Body text |
| `--text-secondary` | `#5C4A3A` (light) / `#D4C4B0` (dark) | Muted text |
| `--text-inverse` | `#F4E8D5` (dark) / `#FFFFFF` (light) | Text on dark bg |
| `--bg-primary` | `#F4E8D5` (light) / `#160B06` (dark) | Page background |
| `--bg-elevated` | `#FFFFFF` (light) / `#1F1410` (dark) | Cards, modals |
| `--border` | `rgba(139, 90, 43, 0.15)` (light) / `rgba(198, 139, 61, 0.15)` (dark) | Subtle dividers |
| `--accent` | `#C68B3D` | CTA, links, focus ring |
| `--accent-hover` | `#A6732E` | Hover state |

### Rules
1. **NO** purple, electric blue, atau warna "startup modern"
2. **NO** lebih dari 2 warna prominent per section (brown + gold, atau brown + cream)
3. **Dark mode parity**: setiap section punya kontras harmonis di kedua mode
4. **Contrast ratio**: minimum 4.5:1 body text, 3:1 large text (WCAG AA)

---

## 3. Typography

### Font Stack

```css
--font-display: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
--font-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
--font-mono: 'Roboto Mono', 'Courier New', monospace;
```

### Weights

| Token | Weight | Usage |
|---|---|---|
| `--fw-regular` | 400 | Body text, paragraphs |
| `--fw-medium` | 500 | Muted text, captions |
| `--fw-semibold` | 600 | Subheadings, button text |
| `--fw-bold` | 700 | Headings H1-H2 |
| `--fw-extrabold` | 800 | Hero heading (optional) |

### Type Ramp

| Token | Size | Line-height | Letter-spacing | Usage |
|---|---|---|---|---|
| `--text-xs` | 0.75rem (12px) | 1.5 | 0.02em | Eyebrow, badge |
| `--text-sm` | 0.875rem (14px) | 1.5 | 0.01em | Caption, small UI |
| `--text-base` | 1rem (16px) | 1.65 | 0 | Body text |
| `--text-lg` | 1.125rem (18px) | 1.6 | 0 | Large body |
| `--text-xl` | 1.25rem (20px) | 1.5 | -0.01em | Small heading |
| `--text-2xl` | 1.5rem (24px) | 1.4 | -0.01em | H4 |
| `--text-3xl` | 1.875rem (30px) | 1.3 | -0.02em | H3 |
| `--text-4xl` | 2.25rem (36px) | 1.25 | -0.02em | H2 |
| `--text-5xl` | 3rem (48px) | 1.2 | -0.02em | H1 large |
| `--text-6xl` | 3.75rem (60px) | 1.1 | -0.03em | Hero H1 |
| `--text-7xl` | 4.5rem (72px) | 1.05 | -0.03em | Hero H1 XL (optional) |

### Rules
1. **NO** serif fonts (kaku, kayak dokumen)
2. **NO** display fonts fashion magazine
3. **NO** script/handwriting
4. **Plus Jakarta Sans** karena "formal tapi rounded" — gak kaku kayak Inter, gak norak kayak Nunito
5. **Roboto Mono** HANYA untuk harga/angka, body tetap sans-serif
6. **Heading max 2 line wrap** (kalau lebih, pecah jadi sub-section)
7. **Body line-height 1.65** untuk readability optimal

---

## 4. Spacing & Layout

### Base Unit
- Base: 8px (semua spacing kelipatan 8 atau 4 untuk half-step)

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 0.25rem (4px) | Tight inline |
| `--space-2` | 0.5rem (8px) | Small gap |
| `--space-3` | 0.75rem (12px) | Component inner |
| `--space-4` | 1rem (16px) | Default gap |
| `--space-6` | 1.5rem (24px) | Section inner |
| `--space-8` | 2rem (32px) | Component outer |
| `--space-12` | 3rem (48px) | Section gap small |
| `--space-16` | 4rem (64px) | Section padding mobile |
| `--space-24` | 6rem (96px) | Section padding desktop |
| `--space-32` | 8rem (128px) | Major section padding |

### Container Widths

| Token | Value | Usage |
|---|---|---|
| `--container-sm` | 640px | Text-only content |
| `--container-md` | 768px | Tablet content |
| `--container-lg` | 1024px | Standard content |
| `--container-xl` | 1200px | Wide content |
| `--container-2xl` | 1280px | Full bleed |

### Grid
- **Mobile**: 4-col, 16px gutter
- **Tablet** (768px+): 8-col, 24px gutter
- **Desktop** (1024px+): 12-col, 32px gutter
- **Max content width**: 1200px (centered)

### Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 10px | Small elements (badge, tag) |
| `--radius-md` | 16px | Inputs, secondary cards |
| `--radius-lg` | 24px | Primary cards, modals |
| `--radius-xl` | 32px | Feature cards, hero elements |
| `--radius-pill` | 999px | Buttons, fully rounded |

### Shadow

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(22, 11, 6, 0.04)` | Subtle elevation |
| `--shadow-md` | `0 4px 12px rgba(22, 11, 6, 0.08)` | Card default |
| `--shadow-lg` | `0 8px 24px rgba(22, 11, 6, 0.12)` | Card hover, modal |
| `--shadow-glow` | `0 0 24px rgba(198, 139, 61, 0.25)` | CTA button glow |

### Rules
1. **Generous whitespace**: section padding 96-128px desktop, 64-80px mobile
2. **NO** card-in-card-in-card (max 1 level nesting)
3. **NO** drop shadow > 12% opacity
4. **Asymmetric grid** preferred over 3-equal-cards
5. **Border-radius konsisten**: pill untuk button, 24px untuk card, 16px untuk input

---

## 5. Components

### Button
- **Primary**: bg `--brand-brown`, text cream, hover glow + slight scale 1.02
- **Secondary/Outline**: border brown, text brown, hover fill brown + text cream
- **Ghost**: no border, no bg, text brown, hover bg subtle cream/brown
- **Size**: sm (32px), md (40px), lg (48px), xl (56px)
- **Radius**: pill (999px)
- **Font**: 600, letter-spacing -0.01em
- **Padding**: 12px 24px (md)

### Card
- **Bg**: `--bg-elevated` (white/elevated dark)
- **Border**: 1px `--border` (subtle)
- **Radius**: 24px (default), 32px (feature)
- **Padding**: 24px-32px
- **Shadow**: `--shadow-md` default, `--shadow-lg` on hover
- **Hover**: lift 1.02 + shadow-lg

### Input
- **Bg**: `--bg-elevated`
- **Border**: 1px `--border` default, 2px brand-brown on focus
- **Radius**: 16px
- **Padding**: 12px 16px
- **Font**: 400, 16px
- **Focus ring**: 3px brand-gold at 30% opacity

### Navigation
- **Position**: sticky top
- **Bg**: cream/dark elevated dengan backdrop-blur
- **Height**: 64px desktop, 56px mobile
- **Logo**: 40px, link to top
- **Links**: 14-16px, medium weight, hover underline offset
- **Mobile**: hamburger 36x36, full-screen menu drawer

### Modal
- **Bg**: `--bg-elevated`
- **Radius**: 24px
- **Padding**: 32px
- **Max-width**: 480px (sm), 640px (md)
- **Overlay**: black 50% opacity + backdrop-blur
- **Close button**: top-right, ghost style

### Section Structure
- **Padding**: 96-128px vertical desktop, 64-80px mobile
- **Container**: max-width 1200px centered
- **Background**: SELALU ada texture (SVG noise + radial gradient overlay)
- **Header**: eyebrow + h2 + sub, max-width 720px
- **Content**: sesuai section type

---

## 6. Motion

### Easing

| Token | Value | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default untuk most transitions |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Symmetric transitions |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Micro-bounce (jarang) |

### Duration

| Token | Value | Usage |
|---|---|---|
| `--duration-fast` | 150ms | Hover state, small elements |
| `--duration-base` | 200-300ms | Default transitions |
| `--duration-slow` | 400ms | Section fade-in, page transitions |
| `--duration-slower` | 600-800ms | Scroll-triggered animations |

### Patterns
1. **Fade-in on scroll**: IntersectionObserver, root margin 100px, 600ms duration, opacity 0→1 + translateY 20px→0
2. **Hover lift**: transform scale(1.02-1.05) + shadow upgrade, 200ms ease-out
3. **Button glow**: box-shadow transition, 200ms ease-out
4. **Theme toggle**: 300ms transition pada color/background properties
5. **Smooth scroll**: `scroll-behavior: smooth` di html
6. **NO bouncy/spring berlebihan** (max 1 micro-bounce untuk CTA)
7. **NO parallax** atau scroll-jacking

---

## 7. Voice & Tone (Copywriting)

### Prinsip
1. **Ngerti masalah user**: "Bingung mulai dari mana?" bukan "Mulai perjalanan Anda"
2. **Kasih solusi konkret**: "13 modul terstruktur" bukan "Solusi terbaik"
3. **No janji palsu**: angka verifiable, no "100% lulus" atau "pasti diterima"
4. **Bahasa Indonesia natural**: gak translate-feel, gak terlalu formal/slang
5. **Empathy + confidence**: acknowledge struggle, offer concrete path

### Vocabulary
- **Pakai**: latihan soal, pembahasan, modul, paket, bundle, materi, kisi-kisi, try out
- **Hindari**: journey, unlock, level up, gamification, disrupt, revolutionize
- **Numerik spesifik**: "13 modul", "1.132 soal", "Rp 199.000" — bukan "banyak", "lengkap", "murah"

### Format
- **NO em-dash** (—) di copy, pakai koma atau titik
- **NO emoji berlebihan**, max 1 per section
- **Sentence case** untuk heading, bukan UPPERCASE
- **Active voice**: "Download Modul 1" bukan "Modul 1 dapat didownload"

### CTA Wording
- Primary: "Beli Sekarang" atau "Order via lynk.id"
- Secondary: "Lihat Sample", "Download Modul 1"
- Tertiary: "Pelajari Lebih Lanjut"

### Pricing Display
- Format: "Rp 199.000" (dengan titik, sesuai konvensi Indonesia)
- Bukan: "199K", "Rp 199k", "IDR 199000"
- Strike-through original price + harga diskon (kalau ada promo)

---

## 8. Accessibility (WCAG 2.1 AA)

### Color
- **Body text**: minimum 4.5:1 contrast
- **Large text** (>18pt atau >14pt bold): minimum 3:1
- **UI components**: minimum 3:1
- **Test**: gunakan WebAIM Contrast Checker untuk setiap pair

### Keyboard
- **Tab order**: logical, follow visual flow
- **Focus visible**: 3px ring `var(--accent)` at 30% opacity
- **Skip link**: "Skip to content" di paling atas
- **Modal focus trap**: focus stays inside modal saat open

### Screen Reader
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Heading hierarchy**: single H1 per page, H2 → H3 → H4 proper nesting
- **ARIA labels**: pada icon-only buttons, complex widgets
- **Alt text**: deskriptif pada semua image, empty `alt=""` untuk decorative
- **Form labels**: setiap input punya `<label>`, bukan placeholder-only

### Motion
- **Respect `prefers-reduced-motion`**: disable non-essential animation
- **No auto-playing video/audio** (kecuali user-initiated)
- **Scroll behavior**: smooth scroll di-respect, no scroll-jacking

### Touch Target
- **Minimum size**: 44x44px (Apple HIG) atau 48x48px (Material)
- **Spacing**: 8px minimum antara touch targets

---

## 9. Imagery

### Photo Style
1. **Tone**: warm, natural, soft lighting
2. **Subject**: Indonesian context (jika foto orang), student studying, workspace
3. **Color**: warm brown-gold palette, slight desaturation untuk cohesion
4. **Composition**: rule of thirds, generous negative space
5. **Avoid**: stock photo feel, artificial lighting, posed corporate

### Illustration Style
1. **Style**: semi-realistis, modern, soft palette
2. **Color**: warm brown-gold, muted accent
3. **Subject**: relatable untuk calon PNS (buku, laptop, catatan, fokus)
4. **Detail**: medium, tidak terlalu minimalis, tidak terlalu detail
5. **NO**: cartoon, flat design 2-color, isometric, line art

### Icon Style
1. **Style**: Lucide icons (line, 2px stroke)
2. **Color**: `--brand-brown` (light) / `--brand-gold` (dark)
3. **Size**: 20-24px default, 16px inline
4. **Stroke**: rounded line caps + joins
5. **NO**: filled icons, duotone, brand-specific icon

### Image Specs
1. **Format**: WebP preferred, PNG fallback, JPG untuk foto
2. **Max size**: 200KB per image (target)
3. **Dimensions**: sesuai usage (1200x630 OG, 192/512 PWA, dll)
4. **Lazy load**: semua image di bawah fold
5. **Responsive**: 2x for retina (e.g., 400x400 source untuk 200x200 display)

### Hero Image (PilarCPNS-specific)
1. **Source**: FLUX-generated
2. **Subject**: "Indonesian student studying at wooden desk with laptop, stack of books, notebook, warm brown and gold color palette, focused expression, professional educational theme, soft natural lighting, clean lines, no text"
3. **Style**: semi-realistis, warm
4. **Vision rating**: 9/10 (sudah approved, jangan regenerate)
5. **File**: `assets/hero-illustration.jpg` (55KB)

---

## 10. Anti-AI-Slop Checklist (12 points)

Gunakan checklist ini di setiap section/iteration:

- [ ] No card-inside-card-inside-card pattern
- [ ] No drop shadow > `0 4px 12px rgba(0,0,0,0.08)` atau `0 8px 24px rgba(0,0,0,0.12)`
- [ ] No plain solid color backgrounds (semua ada texture)
- [ ] No em-dash (—) di copy
- [ ] No fake stats (semua angka verifiable)
- [ ] No emoji overload di UI (max 1 per section)
- [ ] No generic gradient (purple-blue, dll)
- [ ] No "hero stats badge" (e.g., "Trusted by 10K+ users")
- [ ] No 3-equal feature cards (asymmetric grid)
- [ ] No bouncy/spring animation
- [ ] No default font (Plus Jakarta Sans only)
- [ ] No "modern startup" purple palette (brown-gold only)

---

## 11. Section Templates (13 PilarCPNS sections)

Pattern per section: Hero, By the Numbers, Problem, Solution, Daftar Modul, Sample, Perbandingan, Cara Order, Pricing, Trust, FAQ, CTA Final, Footer.

### Hero Template
- Layout: 2-col (copy left 50%, image right 50%) on desktop, stacked on mobile
- Copy: H1 + sub (max 200 char) + 2 CTA (primary + secondary)
- Image: hero-illustration.jpg
- Max text elements: 4 (h1 + p + 2a)

### By the Numbers Template
- 3-4 stat cards, asymmetric grid (2 large + 2 small, atau 4 equal)
- Each: big number (display font) + label (caption)
- Numbers specific: "13 Modul", "1.132+ Soal", "8.500+ Pembahasan", "10K+ Pembeli"

### Problem Template
- 3-4 pain points, icon + heading + 1-2 sentence explanation
- Tone: empathetic, "kami paham"
- NO solution di section ini (let solution di section Solution)

### Solution Template
- 4-6 features, asymmetric bento grid
- Each: icon + heading + description
- Tone: confident, concrete benefit

### Daftar Modul Template
- 13 cards dalam 5-col grid (responsive 2-col mobile)
- Each card: number + nama modul + tipe soal + count badge
- Featured modul: highlight variant (e.g., Modul 12 Kompilasi, Modul 13 Final Try Out)

### Sample Template
- 2-col (preview left, CTA right)
- Preview: sample-preview.png (Modul 1 page 1)
- CTA: "Download Modul 1 PDF" + "Lihat Semua 13 Modul"

### Perbandingan Template
- Table 4-col: PilarCPNS + 2-3 competitor
- 5-7 rows: harga, jumlah modul, pembahasan, garansi, akses, support
- PilarCPNS column di-highlight (bg accent)

### Cara Order Template
- 3 numbered steps, horizontal flow
- Each: number badge + heading + 1-2 sentence

### Pricing Template
- 3 tier cards: 1 Modul (25K), Bundle 13 (199K featured), Custom (email)
- Featured card: larger, badge "PALING LARIS", border accent, shadow-lg
- Each card: tier name + price + 4-6 benefit list + CTA button

### Trust Template
- 4 testimonial cards, 2x2 grid desktop, stacked mobile
- Each: "BETA TESTER" badge top-left + quote + nama + kota
- NO founder card
- Badge JELAS visible, top-left pill style

### FAQ Template
- 8 item accordion, native `<details>` element
- Each: question (h3) + answer (paragraph)
- 8 item WAJIB: pembayaran, akses, garansi, refund, single modul, custom, kisi-kisi, device, konsultasi

### CTA Final Template
- Background different dari section lain (full bleed, dark gradient)
- Heading urgency: "Siap Lulus Tes PNS?"
- 2 CTA: primary "Beli Bundle 13" + secondary "Konsultasi via Email"
- Email display: pilarcpns@gmail.com

### Footer Template
- 3-col: brand + kontak, quick links, legal
- Email: pilarcpns@gmail.com
- No WhatsApp, no social media
- Copyright + privacy notice (kalau ada)

---

## 12. Pricing Display Standard

### Format
- Rp 25.000 (satu modul)
- Rp 199.000 (bundle, FEATURED)
- Custom via email (tidak ada harga tampil)

### Display
- Font: Roboto Mono 600
- Size: 3rem (large), 1.5rem (small)
- Color: `--brand-brown` (light) / `--brand-gold` (dark)
- Strike-through: original price (jika ada diskon)
- "Paling Laris" / "Best Value" badge di featured tier

### CTA Per Tier
- 1 Modul: "Beli 1 Modul" → lynk.id
- Bundle 13: "Beli Bundle 13" → lynk.id (FEATURED)
- Custom: "Konsultasi via Email" → mailto:pilarcpns@gmail.com

---

## 13. Contact & Payment Standard

### Email
- Address: `pilarcpns@gmail.com`
- Display: "pilarcpns@gmail.com" (no link text replacement)
- Link: `mailto:pilarcpns@gmail.com?subject=Order%20Paket%20Custom%20Pilar%20PNS`

### Payment
- Gateway: `https://lynk.id/pilarcpns`
- Methods: QRIS, transfer bank, e-wallet
- Display: "Lewat lynk.id untuk pembayaran otomatis"
- Auto-delivery: file dikirim ke email setelah pembayaran

### NO
- WhatsApp (tidak ada di v1.0)
- Social media (tidak ada di v1.0)
- Phone number (tidak ada)

---

## 14. Performance Budget

| Metric | Target | Rationale |
|---|---|---|
| Total bundle (HTML+CSS+JS) | < 100KB | Excluding images |
| First Contentful Paint (FCP) | < 1.5s di 4G | User retention |
| Largest Contentful Paint (LCP) | < 2.5s di 4G | Core Web Vital |
| Cumulative Layout Shift (CLS) | < 0.1 | Visual stability |
| Image per file | < 200KB | Lazy load friendly |
| Total page weight | < 500KB | Including images |

---

## 15. Update Log

| Date | Version | Change |
|---|---|---|
| 2026-06-18 | 1.0 | Initial DESIGN.md, 9-section format, PilarCPNS-specific |

---

**Usage:**

1. **Di Hermes**: file ini di-load sebagai skill context ketika generate PilarCPNS design. Reference path: `~/.hermes/projects/pilar-cpns-landing/DESIGN.md`
2. **Di Open Design**: paste sebagai `od.design_system.requires` content atau di-inject via DESIGN.md picker
3. **Di designer lain**: share sebagai single source of truth untuk brand consistency
4. **Version control**: tracked di git (folder docs/, gitignored untuk public)
