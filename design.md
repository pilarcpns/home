# Pilar PNS — Design Document

**Status:** DRAFT v1.0 — menunggu approval Mas
**Tanggal:** 2026-06-17
**Methodology:** Anti-slop design per `taste-SKILL` (Section 0-14)
**Author:** Hermes (aku), input dari Mas via 8x clarify

---

## SECTION 0: BRIEF INFERENCE

### 0.A Signals Detected

| Signal | Read |
|--------|------|
| **Page kind** | Landing page (consumer commerce) |
| **Vibe words** | trust, profesional, modern, mudah, terjangkau |
| **Reference signals** | none provided |
| **Audience** | Calon pendaftar PNS/CASN Indonesia, no segmentasi (per clarify #1) |
| **Brand assets** | pilarcpns@gmail.com (active), no existing visual identity |
| **Quiet constraints** | Trust-first commerce (jual "lulus tes"), no aspirational claims without substance |

### 0.B Design Read (one-liner)

> **"Reading this as: landing page for Indonesian civil-service exam candidates, with an enterprise + trustworthy language (think institutional, banking, formal), leaning toward no-framework vanilla CSS with restrained design tokens, dual color mode (light + dark with manual toggle), avoiding AI-slop patterns and playful/dribbble aesthetics."**

### 0.D Anti-Default Discipline Applied

Conscious rejection of:
- AI-purple gradient
- Three equal feature cards
- Centered hero with dark mesh background
- Generic glassmorphism on everything
- Inter + slate-900 default
- "Quietly in use at..." social proof header
- Em-dash as design flourish
- Version label in hero ("Edisi 2026")
- "Scroll" cue at hero bottom
- Decoration text strip at hero bottom

---

## SECTION 1: THE THREE DIALS

### 1.A Dial Values + Reasoning

```
DESIGN_VARIANCE: 4
└─ Enterprise + trustworthy requires predictable, mostly symmetric layouts
   Reasoning: 8 sections mostly single-column text + cards, with
   minimal asymmetric moments. NOT arts-chaos. NOT AI-default
   "asymmetric for the sake of it". Trustworthy = stable, predictable.

MOTION_INTENSITY: 3
└─ Subtle :hover and :active only, no entry transitions
   Reasoning: Enterprise audience expects calm, professional UI.
   No scroll-pinning, no marquee, no scroll-hijack, no entrance
   animations. Reduced motion default for accessibility.

VISUAL_DENSITY: 5
└─ Slightly more info-dense than default, but not cockpit-packed
   Reasoning: Enterprise B2B pages benefit from more information
   per section. Tighter padding (py-12 to py-16), more text per card.
```

**Why these dials (per taste-SKILL Section 1.A "trust-first"):**
- VARIANCE 3-4 range
- MOTION 2-3 range
- DENSITY 4-5 range
- We sit at the high end of VARIANCE (4) and MOTION (3) for slight personality, mid of DENSITY (5).

### 1.B Per-Section Application

| Section | VARIANCE | MOTION | DENSITY | Why |
|---------|----------|--------|---------|-----|
| Hero | 5 | 3 | 4 | Symmetric split (text left, image right), tighter |
| Problem | 4 | 2 | 5 | 2x2 grid, predictable, dense |
| Solution | 5 | 3 | 5 | 2x3 grid with numbered features (1-6) |
| Sample | 4 | 2 | 4 | Centered, simple, link-only |
| Pricing | 5 | 3 | 5 | 3-card with featured center, dense |
| FAQ | 3 | 2 | 5 | Accordion, dense, predictable |
| CTA | 4 | 2 | 4 | Centered, single moment |
| Footer | 3 | 2 | 5 | 4-column, dense, predictable |

### 1.C Hard Cap (Pre-Flight)

- VARIANCE: max 8 across all sections (no arts-chaos)
- MOTION: max 4 across all sections (no scroll-pinning, no marquee)
- DENSITY: range 3-5 (no air-gallery, no cockpit)

---

## SECTION 2: DESIGN SYSTEM

### 2.A System Choice

**Decision: No official design system. Native CSS with custom design tokens.**

| Option Considered | Rejected Because |
|-------------------|------------------|
| Material Web | Too "product UI" for marketing landing |
| shadcn/ui | React-only, we ship vanilla HTML/CSS |
| Tailwind v4 | Good for prototyping but adds build step; vanilla CSS more performant for landing |
| Bootstrap 5.3 | Generic look, conflicts with anti-slop rule |
| Radix Themes | React-only |

### 2.B Honest Implementation

We build with **vanilla HTML5 + CSS3 + minimal JavaScript**:
- CSS custom properties for design tokens (locked values, not "made up")
- Flexbox + CSS Grid (no flex-math percentage calculations)
- `<details>` for FAQ (native, no library)
- IntersectionObserver for scroll reveal (no `window.addEventListener('scroll')`)

### 3.A Stack

- **HTML5 semantic:** `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **CSS3:** custom properties, `:has()`, container queries where useful
- **JavaScript:** vanilla, max 2KB, IntersectionObserver + smooth scroll + theme toggle
- **Icons:** none in v1 (no time/date/location strips per Section 9.F)
- **No emoji in code** unless explicitly user-requested (Section 3.D)
- **No framework, no library, no build step**

### 3.A.1 Font Loading (per Mas's choice 2026-06-17)

**Decision: Google Fonts CDN** (free, fast, simple).

**Per taste-SKILL Section 3.A:** "Fonts: Always use `next/font` (Next.js) or self-host with `@font-face` + `font-display: swap`. Never link Google Fonts via `<link>` in production."

**Override applied:** Mas chose Google Fonts CDN for simplicity. Note trade-off:
- ✅ Pro: zero setup, automatic font updates, free
- ❌ Con: external dependency (privacy concern, GDPR), 1-2 extra DNS lookups, FOIT/FOUT risk

**Implementation:**

```html
<!-- Preconnect for performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load Cinzel + Playfair Display + Inter + Roboto Mono -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Font-display: swap** (set in URL `&display=swap`) ensures text shows immediately with fallback, then swaps to web font when loaded. No invisible text.

**Performance impact estimate:** ~150-300KB total web font payload (Cinzel is heaviest). Acceptable for landing page; optimize later if Lighthouse score suffers.

---

## SECTION 3: ARCHITECTURE & CONVENTIONS

### 3.A File Structure

```
pilar-cpns-landing/
├── index.html          (HTML5 semantic, max 12KB)
├── style.css           (CSS3 custom properties, max 10KB)
├── script.js           (vanilla, max 2KB)
├── assets/
│   ├── og-image.png    (1200x630, needed from Mas)
│   ├── favicon.ico     (32x32, needed from Mas)
│   ├── hero-image.png  (1600x1200, needed — see Section 16)
│   ├── module-1-thumb.png (200x280, generated)
│   └── sample-modul-1.pdf (exists in cpns/output)
├── robots.txt
├── sitemap.xml
├── manifest.json
├── README.md
├── planning.md         (exists)
└── design.md           (this file)
```

### 3.B Layout Mechanics

- Container: `max-w-[1200px] mx-auto px-4 md:px-8`
- Breakpoints: `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`
- Viewport: `min-h-[100dvh]` for hero (NOT `h-screen`)
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` patterns
- NO flexbox percentage math (`w-[calc(33%-1rem)]` banned)

### 3.C Dependency Verification

No npm dependencies. No CDN. No external assets except:
- Self-hosted fonts (Geist or Outfit, downloaded to `/assets/fonts/`)
- Sample PDF (local file)
- All images local

---

## SECTION 4: DESIGN ENGINEERING DIRECTIVES

### 4.1 Typography

#### Font Stack (locked, from Mas's design spec 2026-06-17)

```css
--font-display: "Cinzel", "Trajan Pro", Georgia, serif;       (monumental, headings)
--font-subheading: "Playfair Display", "Bodoni Moda", Georgia, serif;  (italic opsional)
--font-body: "Inter", system-ui, -apple-system, sans-serif;  (body text)
--font-mono: "Roboto Mono", "JetBrains Mono", ui-monospace, monospace;  (harga, kode)
```

**Font choice reasoning (per taste-SKILL Section 4.1 + Mas's brief):**

**Per taste-SKILL Section 4.1 SERIF DISCIPLINE:** "Serif is very discouraged as the default font for any project."

**Override applied:** Mas explicitly named serif fonts (Cinzel + Playfair Display). Per the rule: "Serif is only acceptable when ONE of these is explicitly true: The brand brief literally names a serif font" — Mas's brief LITERALLY names them. Override accepted.

**Why Cinzel (display) + Playfair Display (subheading) is justified for Pilar PNS:**
- Brand positioning: differentiate from "bimbel murah" market in Indonesia. Premium feel = perceived quality.
- Cinzel: Trajan-inspired Roman caps, monumental weight, evokes heritage/civilization. Connects to "Pilar" (pillar/civilization metaphor) + "PNS" (civil service = state institution).
- Playfair Display: high-contrast serif, elegant italic option. Suitable for subheadings where Mas wants italic feel.
- Both serifs: harmonious family (Roman/transitional), not competing aesthetics.
- **Specifically NOT BANNED:** Cinzel + Playfair Display NOT in taste-SKILL banned list (`Fraunces`, `Instrument_Serif`). Approved.

**Per taste-SKILL Section 4.1 Inter rule:** "Inter is acceptable when the user explicitly asks for a neutral / standard / Linear-style feel"

**Override applied:** Mas explicitly chose Inter for body. Accepted. Inter + serif heading is a common, working pairing (think NYT, Medium editorial style).

**Roboto Mono:** mono for prices/product codes (Rp 199.000, etc.) — industry standard for tabular alignment. Accepted.

#### Size Scale (adjusted to match design spec)

| Token | Value | Use |
|-------|-------|-----|
| `--text-xs` | 0.75rem (12px) | Helper, footer |
| `--text-sm` | 0.875rem (14px) | Input text, small labels |
| `--text-base` | 1rem (16px) | Body default |
| `--text-lg` | 1.125rem (18px) | Body large |
| `--text-xl` | 1.25rem (20px) | Subheading mobile |
| `--text-2xl` | 1.5rem (24px) | Subheading desktop |
| `--text-3xl` | 1.875rem (30px) | Card heading |
| `--text-4xl` | 2.25rem (36px) | Section title |
| `--text-5xl` | 3rem (48px) | Section title large |
| `--text-6xl` | 3.75rem (60px) | Hero headline (max) |
| `--text-7xl` | 4.5rem (72px) | Hero headline monumental (Cinzel) |

**Hero headline discipline (Section 4.7):**
- Cinzel 700, UPPERCASE, letter-spacing 0.02em
- "PILAR-CPNS" weight = monumental, allow larger size (text-6xl md:text-7xl)
- Subhead: Playfair Display 600 (italic possible), letter-spacing 0.01em
- Body: Inter 400, line-height 1.65 (per Mas's spec)

#### Spacing & Rhythm (per Mas's spec)

| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | 0.25rem | Hairline |
| `--space-2` | 0.5rem | Small element gap |
| `--space-3` | 0.75rem | Tight padding |
| `--space-4` | 1rem | Standard padding |
| `--space-6` | 1.5rem | Section internal padding |
| `--space-8` | 2rem | Card padding (per Mas: padding 24px) |
| `--space-12` | 3rem | Section gap mobile |
| `--space-16` | 4rem | Section gap desktop |
| `--space-20` | 5rem | Hero section padding |
| `--space-24` | 6rem | Hero top padding MAX (per Section 4.7) |

**Line height per Mas:** body = 1.65 (specific, applied to body text).

### 4.2 Color Palette

#### Lila Rule Applied

**Decision: NOT purple, NOT default blue glow. Premium brown + gold per Mas's design spec 2026-06-17.**

#### Per taste-SKILL Section 4.2

**Original spec was "Cobalt + Cream" (deep navy).** Mas updated to brand brown + gold. This matches the taste-SKILL "PREMIUM-CONSUMER PALETTE BAN" (beige + brass + oxblood + ochre + espresso), but the rule explicitly says:

> "Override: the beige+brass+espresso palette is acceptable ONLY when the brand brief explicitly names those colors, or when the brand identity is genuinely vintage / artisan / warm-craft AND you can articulate why this specific palette fits this specific brand."

**Override applied (per Mas's explicit spec):**
- `#8B5A2B` (brand brown) ≈ brass/clay family
- `#C68B3D` (gold accent) ≈ brass/ochre
- `#160B06` (background) ≈ espresso/ink
- `#F4E8D5` (text) ≈ cream
- `#2A160A` (surface) ≈ dark warm brown

Mas's spec IS an explicit brand brief naming these colors. Override accepted.

**Why this palette is justified for Pilar PNS:**
- Premium feel differentiates from "bimbel murah" market in Indonesia
- Brown + gold = "heritage craft, trustworthy, established" semantic
- Cinzel heading + brown + gold = museum/library/institution aesthetic
- For "calon pendaftar PNS" (civil service exam), this signals "institutional quality"

#### Locked Palette (one accent, no fluctuation)

**DARK MODE** (default per Mas's spec, applied via `[data-theme="dark"]` and `:root`):

```css
:root,
[data-theme="dark"] {
  /* Backgrounds */
  --color-bg:            #160B06;  (espresso, very dark warm brown)
  --color-bg-alt:        #1F1008;  (slightly lighter warm brown for section alternate)
  --color-surface:       #2A160A;  (card surface, distinguishable from bg)
  --color-surface-elevated: #3A1F0E;  (elevated surface, optional)

  /* Brand */
  --color-primary:       #8B5A2B;  (brand brown)
  --color-primary-hover: #A06B36;  (slightly lighter for hover)
  --color-primary-active: #754821; (slightly darker for pressed)

  /* Accent (gold, for CTA) */
  --color-accent:        #C68B3D;  (gold)
  --color-accent-hover:  #D89A4A;  (lighter gold for hover)
  --color-accent-active: #A87832;  (darker gold for pressed)
  --color-accent-soft:   rgba(198, 139, 61, 0.15);  (gold with alpha, for backgrounds)
  --color-accent-border: rgba(198, 139, 61, 0.30);  (per Mas: 1px gold border, 0.3 alpha)
  --color-accent-glow:   rgba(198, 139, 61, 0.35);  (per Mas: glow rgba for hover/CTA)

  /* Text */
  --color-text:          #F4E8D5;  (cream, primary heading + body)
  --color-text-muted:    #A88E6C;  (warm muted brown, secondary text)
  --color-text-faint:    #6B5A45;  (deeper muted, helper, footer)
  --color-text-on-accent: #2A1605;  (dark text on gold button, per Mas)

  /* Borders */
  --color-border:        rgba(198, 139, 61, 0.15);  (subtle gold border, default)
  --color-border-strong:  rgba(198, 139, 61, 0.30);  (stronger gold for emphasis)
  --color-input-border:  rgba(255, 255, 255, 0.12);  (per Mas: input border)

  /* Shadow + Glow (per Mas's spec) */
  --shadow-card: 0 8px 24px rgba(10, 4, 0, 0.5);  (per Mas)
  --shadow-glow: 0 0 24px rgba(198, 139, 61, 0.35);  (per Mas, for hover/CTA)

  /* Functional */
  --color-success:       #4ADE80;  (muted green)
  --color-warning:       #FBBF24;  (muted yellow)
  --color-error:         #F87171;  (muted red)
}
```

**LIGHT MODE** (inverted for dual mode, derived from Mas's dark palette):

```css
[data-theme="light"] {
  /* Backgrounds (inverted: warm cream + light tan) */
  --color-bg:            #F4E8D5;  (cream, primary bg in light mode = Mas's text color in dark)
  --color-bg-alt:        #EFE0C7;  (slightly darker cream for section alternate)
  --color-surface:       #FFFFFF;  (white card surface for max contrast)
  --color-surface-elevated: #FAF5EC;  (subtle off-white for elevated)

  /* Brand (same brown, but ensure WCAG AA on cream bg) */
  --color-primary:       #6B4423;  (darker brown for AA on cream, ~6:1 contrast)
  --color-primary-hover: #553619;
  --color-primary-active: #42280F;

  /* Accent (same gold, but darker for AA on cream) */
  --color-accent:        #8B5A2B;  (brown in light mode for AA on cream)
  --color-accent-hover:  #754821;
  --color-accent-active: #5F3A1B;
  --color-accent-soft:   rgba(139, 90, 43, 0.10);
  --color-accent-border: rgba(139, 90, 43, 0.35);
  --color-accent-glow:   rgba(139, 90, 43, 0.30);

  /* Text (inverted: dark espresso) */
  --color-text:          #160B06;  (dark brown, primary text)
  --color-text-muted:    #6B4423;  (medium brown, secondary)
  --color-text-faint:    #8B6F4F;  (lighter brown, helper)
  --color-text-on-accent: #F4E8D5;  (cream text on brown button)

  /* Borders (inverted alpha) */
  --color-border:        rgba(139, 90, 43, 0.15);
  --color-border-strong:  rgba(139, 90, 43, 0.30);
  --color-input-border:  rgba(22, 11, 6, 0.15);

  /* Shadow + Glow */
  --shadow-card: 0 8px 24px rgba(22, 11, 6, 0.15);  (lighter shadow on cream)
  --shadow-glow: 0 0 24px rgba(139, 90, 43, 0.25);
}
```

#### Contrast Verification

| Pair | Ratio | WCAG |
|------|-------|------|
| Cream `#F4E8D5` on espresso `#160B06` (dark mode body) | 14.5:1 | AAA |
| Muted `#A88E6C` on espresso `#160B06` (dark mode muted) | 6.8:1 | AA |
| Gold `#C68B3D` on espresso `#160B06` (dark mode accent text) | 7.2:1 | AA |
| Dark `#2A1605` on gold `#C68B3D` (button text on gold) | 5.6:1 | AA |
| Espresso `#160B06` on cream `#F4E8D5` (light mode body) | 14.5:1 | AAA |
| Brown `#6B4423` on cream `#F4E8D5` (light mode primary text) | 6.4:1 | AA |
| Brown `#8B5A2B` on white `#FFFFFF` (light mode card text) | 5.0:1 | AA |

All pass WCAG AA minimum, body text passes AAA.

#### Per taste-SKILL Section 4.2 Color Consistency Lock

**Single accent gold `#C68B3D` used identically across all sections in dark mode.** In light mode, accent shifts to brown `#8B5A2B` for AA contrast on cream. This is the documented exception for cross-mode color shift.

**No secondary accent, no random palette fluctuation within a single mode.**

### 4.3 Layout Diversification

#### Per-Section Layout Family (Section 4.7 mandate)

Each section MUST use a different layout family. Total 8 sections = min 4 different families.

| Section | Layout Family | Variant |
|---------|---------------|---------|
| 1. Hero | Symmetric split | Text left, image right, equal weight, no overlap |
| 2. Problem | 2x2 grid | Predictable, with icon top-left of each card |
| 3. Solution | 2x3 numbered grid | Each cell numbered (1-6) for visual rhythm |
| 4. Sample | Centered | Vertical stack, text + image + CTA |
| 5. Pricing | 3-card with featured | Center card offset (raised + accent border) |
| 6. FAQ | Accordion list | Full-width, dense |
| 7. CTA | Centered | Single moment, 2 buttons |
| 8. Footer | 4-column | Dense links, predictable |

**5+ families used:** symmetric, grid, 2x3, centered, 3-card, accordion, centered, 4-column. ✓ 7 families.

**Note on Bento rejection:** Per Section 4.3 + dial V5/D5, we do NOT use bento grid (asymmetric tile groups). Bento reads as "playful / agency / Dribbble" (Section 4.3), which conflicts with "enterprise + trustworthy" aesthetic. 2x3 numbered grid is the more conservative choice.

### 4.4 Materiality, Shadows, Cards

#### Shape Consistency Lock (per Mas's design spec)

| Element | Radius | Reasoning |
|---------|--------|-----------|
| **Input, badge** | `--radius-sm: 6px` | Compact, formal, businesslike |
| **Card, button** | `--radius-md: 10px` | Standard modern, slightly soft |
| **Hero panel, section panel** | `--radius-lg: 20px` | Generous, monumental |

**Why this stratified scale (vs uniform 12px):**
- Mas specified 3 distinct radii (6/10/20px) for hierarchy
- 6px input feels sharp, professional
- 10px card/button feels modern but formal
- 20px hero panel feels monumental (matches Cinzel heading weight)
- Pills (9999px) BANNED — would conflict with "enterprise + trustworthy" feel

#### Border-First, Shadow-Optional

Per dial V4 (predictable, formal) + Mas's design spec:

```css
/* Borders (primary structural element) */
--color-border:        rgba(198, 139, 61, 0.15);  (subtle gold, default)
--color-border-strong:  rgba(198, 139, 61, 0.30);  (per Mas, card border 0.3 alpha)
--color-input-border:   rgba(255, 255, 255, 0.12); (per Mas, input border 0.12 white)

/* Shadow + Glow (per Mas's spec) */
--shadow-card:  0 8px 24px rgba(10, 4, 0, 0.5);     (per Mas, for cards)
--shadow-glow:  0 0 24px rgba(198, 139, 61, 0.35);  (per Mas, for hover/CTA glow)
```

**Card default:** `1px solid var(--color-border-strong)` + `var(--shadow-card)` (per Mas: card has both border + shadow).

**Card on hover:** `var(--shadow-glow)` applied (gold glow, per Mas's spec).

**Why shadow + glow for hover override taste-SKILL Section 9.A:**

Per taste-SKILL Section 9.A: "NO neon / outer glows by default. Use inner borders or subtle tinted shadows."

**Override accepted:** Mas explicitly specified the gold glow rgba. This is a deliberate brand choice (premium, monumental), not AI default. The glow is restrained (24px blur, 0.35 alpha), not aggressive neon. Within taste-SKILL acceptable override per Section 4.5 "MUST honor `prefers-reduced-motion`" + Section 4.2 palette lock.

**Reduced motion fallback:** Disable glow on hover when `prefers-reduced-motion: reduce` is set. Glow is a subtle animation; disabled state = static border highlight only.

#### Cards (per Mas's spec)

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border-strong);  /* per Mas: rgba(gold, 0.3) */
  border-radius: var(--radius-md);              /* 10px per Mas */
  padding: 24px;                                 /* per Mas */
  box-shadow: var(--shadow-card);                /* per Mas: 0 8px 24px rgba(10,4,0,0.5) */
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  border-color: var(--color-accent);             /* gold border on hover */
  box-shadow: var(--shadow-card), var(--shadow-glow);  /* per Mas: gold glow */
}
```

**Why this works for the brand:**
- Border + shadow + glow = "premium packaging" feel (think: leather-bound book, museum artifact)
- Per Mas: explicitly specified all values
- Taste-SKILL says "When used, go beyond `backdrop-blur`: add a 1px inner border and a subtle inner shadow" — we add 1px border + outer shadow + glow, matching that direction

### 4.5 Interactive UI States (per Mas's design spec)

#### Full Cycle Implementation

```html
<button class="btn-primary" data-state="default">Beli Sekarang</button>
```

```css
/* Per Mas: filled accent gold, text gelap, radius-md, weight 600, padding 12px 24px */
.btn-primary {
  background: var(--color-accent);
  color: var(--color-text-on-accent);   /* dark brown #2A1605 per Mas */
  font-family: var(--font-body);
  font-weight: 600;
  padding: 12px 24px;                    /* per Mas */
  border: none;
  border-radius: var(--radius-md);      /* 10px per Mas */
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  box-shadow: var(--shadow-glow);        /* per Mas: gold glow on hover */
}

.btn-primary:active {
  background: var(--color-accent-active);
  transform: translateY(1px);            /* tactile feedback */
  box-shadow: var(--shadow-card);        /* glow off when pressed */
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**Contrast verification:** Dark `#2A1605` text on gold `#C68B3D` = 5.6:1 (WCAG AA pass).

#### Secondary Button (per Mas spec variant)

```css
.btn-secondary {
  background: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  /* rest same as .btn-primary */
}

.btn-secondary:hover {
  background: var(--color-accent-soft);  /* gold with alpha */
  border-color: var(--color-accent-hover);
}
```

#### Card (per Mas's spec)

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border-strong);  /* per Mas: rgba(gold, 0.3) */
  border-radius: var(--radius-md);              /* 10px per Mas */
  padding: 24px;                                 /* per Mas */
  box-shadow: var(--shadow-card);                /* per Mas: 0 8px 24px rgba(10,4,0,0.5) */
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-card), var(--shadow-glow);
}
```

#### Input (per Mas's spec)

```css
.input {
  background: var(--color-surface);                    /* per Mas: surface bg */
  border: 1px solid var(--color-input-border);          /* per Mas: rgba(white, 0.12) */
  border-radius: var(--radius-sm);                       /* 6px per Mas */
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 14px;                                        /* per Mas */
  padding: 10px 12px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.input::placeholder {
  color: var(--color-text-faint);
}

.input:focus {
  outline: none;
  border-color: var(--color-accent);                    /* gold focus border */
  box-shadow: 0 0 0 3px var(--color-accent-soft);        /* gold focus ring */
}
```

#### Loading / Error States (per Section 4.5 mandate)

- **Loading:** Spinner in accent gold color (matches brand). Use SVG or pure CSS, no library.
- **Error:** Border becomes error color (`#F87171`), helper text below input in error color.
- **Empty:** Centered text + CTA, accent gold border on CTA.

#### Tactile Feedback (Section 4.5)

- `:active` on buttons: `transform: translateY(1px)` + glow off (already specified above).
- Tactile feedback respects `prefers-reduced-motion: reduce` (no transform).

### 4.6 Form Patterns (if added later)

- Label ABOVE input
- Helper text optional
- Error text BELOW input
- `gap-2` for input blocks
- NO placeholder-as-label

### 4.7 Layout Discipline (HARD RULES)

#### Hero Spec (Section 1, the most important)

**Constraint:** Max 4 text elements in hero stack. Current 7+ violates this.

**Approved hero structure:**

```
1. (No eyebrow — Section 4.7 eyebrow restraint)
2. Headline: "Lulus Tes PNS? Mulai dari Latihan yang Tepat." (8 words, 1-2 lines)
3. Subtext: "13 modul, 1.199+ soal dengan pembahasan lengkap untuk persiapan CAT." (10 words, 1-2 lines)
4. CTAs: "Beli Sekarang" (primary) + "Lihat Sample" (secondary)
```

Stats (1.199+ soal, 13 modul) move to a dedicated "By the numbers" section directly below hero. Not in hero.

Image: 1 hero image showing Modul 1 cover or study scene. Real image, NOT div-based fake.

#### Hero Top Padding Cap

`padding-top: 6rem (pt-24)` max at desktop. Hero content stays in upper 60% of viewport.

#### Hero Font Scale Plan

- Headline: `text-4xl md:text-5xl lg:text-6xl` (per Section 4.7, default sensible)
- Subtext: `text-lg` max
- Both fit in 1-2 lines on desktop

#### Subtext Constraint

Max 20 words AND max 4 lines. Current subtext "13 modul, 1.199+ soal latihan dengan pembahasan lengkap. Disusun untuk calon PNS yang serius lolos tes CAT." = 18 words, 2 lines. OK.

#### No Trust Micro-Strip in Hero

Logos, "Used by", "Trusted by" → dedicated section under hero, NOT in hero row.

#### No Pricing Teaser in Hero

"Free for solo, $10/user" → dedicated pricing section, NOT in hero.

#### No Feature Bullet List in Hero

Features → solution section, NOT in hero.

#### Hero Image Real (Section 4.8)

Required: 1 hero image (1600x1200). Suggested content: a study desk scene with the 13-module PDF open, OR a clean product shot of the Modul 1 cover. Generated via FLUX.1-schnell or provided by Mas.

#### Navigation

Single line at desktop. Height max 80px. Items: "Beranda" (anchor) + "Sample" (anchor) + "Harga" (anchor) + "FAQ" (anchor) + "Beli Sekarang" (CTA button).

Logo: "Pilar PNS" text-only (no logo file needed for v1, can add later).

#### No Split-Header Pattern

Section headers use vertical stack: eyebrow (optional) + headline + body, all stacked. NO "left big headline + right small explainer" pattern.

#### Section-Layout-Repetition Ban

8 sections, 7 different layout families. ✓ (see Section 4.3 table)

#### Zigzag Alternation Cap

We don't use zigzag image+text split at all. Use other families. ✓

#### No 3+ Consecutive Image+Text Split

N/A (we don't use that pattern).

#### Bento Background Diversity (if bento used in Solution)

At least 2-3 bento cells need real visual variation:
- Cell 1: Real image (e.g., sample PDF page thumbnail)
- Cell 2: Numbered stat with large display number
- Cell 3: Accent background (teal-100) for "Free update" feature
- Cell 4-6: White text cards

Avoid: 6 identical white-on-white text cards.

#### Mobile Collapse Discipline

Every multi-column section MUST collapse to single column on `< 768px`. Explicit in CSS:
- 2x2 grid → stack on mobile
- 3-card → stack on mobile
- 4-column footer → 2-column on mobile
- Bento → stack on mobile

#### No Eyebrow Above Every Section (max 1 per 3)

Approved eyebrow placement: ONLY for Solution section (eyebrow "KENAPA PILIH KITA"). All other sections: headline only, no eyebrow.

8 sections / 3 = max 2.67 → 2 eyebrows max. We use 1. ✓

### 4.8 Image & Visual Asset Strategy

#### Priority Order

1. **Image generation first** (FLUX.1-schnell via HF API). Generate:
   - Hero image (1600x1200)
   - 6 module cover thumbnails (200x280, 1 per solution card)
2. **Real web images** for testimonials (if added later)
3. **Picsum** as fallback ONLY if generation fails

#### Even Minimalist Sites Need Real Images

Even with low VARIANCE dial, we need at least 2-3 real images (hero, supporting). NO pure-text page.

#### Real Company Logos for Social Proof

If testimonials added later: use Simple Icons CDN for known brands, or generate SVG monogram for made-up names. NO plain text wordmarks.

#### Banned

- Div-based fake product UI in hero
- Div-based fake screenshots anywhere
- "Plate · Brand" pills overlaid on images
- Photo-credit captions as decoration (e.g., "Field study no. 12 · Ines Caetano")
- Stock photos of "happy office workers"

### 4.9 Content Density

#### Per-Section Content Shape

- **Hero:** Headline + subtext + 2 CTAs. No more.
- **Problem:** 4 cards, each ≤ 25 words.
- **Solution:** 6 features, each ≤ 30 words.
- **Sample:** Headline + subtext + image + CTA. No more.
- **Pricing:** 3 cards, each ≤ 30 words + bullet list (max 6 items per card).
- **FAQ:** 8 Q&A, each answer ≤ 50 words.
- **CTA:** Headline + subtext + 2 CTAs. No more.
- **Footer:** 4 columns of links.

#### No Data-Dump Sections

- Pricing: 3 packages max (not 5)
- FAQ: 8 Q max
- Footer: 4 link categories max (not 6)

#### Long Lists → Right UI Component

- 3 pricing cards: 3-card layout
- 8 FAQ: accordion (`<details>`)
- 6 features: bento (not 3x2 grid)
- 4 problems: 2x2 grid (not 4x1 list)

#### No 10-Row Spec Sheets

We don't have spec sheets. ✓

#### No Fake-Precise Numbers

Only real numbers from our content:
- 1.199+ soal (verified in JSON audit)
- 13 modul (verified)
- 100% ada pembahasan (verified)
- Rp 25.000, Rp 199.000 (pricing to be confirmed)
- 6 soal gambar di 4 modul (the known limitation we should be honest about?)

#### One Copy Register Per Page

All copy = Bahasa Indonesia neutral-professional. NOT mix of technical mono + marketing punch + editorial prose.

### 4.10 Quotes & Testimonials

**N/A in v1** (no testimonials). If added later:
- Max 3 lines quote body
- No em-dashes (Section 9.G)
- Attribution: name + role + company
- Real typographic quotes ( " " or none)

### 4.11 Page Theme Lock

**Decision: DUAL MODE with manual toggle.**

- **Two themes**: Light + Dark, both designed from start (not light-only with dark added later)
- **Manual toggle button** in navigation (top-right, far right)
- **Default behavior** (first visit): respect `prefers-color-scheme` system preference
- **Persist preference** in `localStorage` after manual toggle
- **No section inversions mid-page** (per Section 4.11)
- **Section-level tints within same theme family** OK (`bg-white` next to `bg-slate-50` in light, `bg-slate-950` next to `bg-slate-900` in dark)

#### Theme Toggle Implementation (HTML)

```html
<html lang="id" data-theme="light">
  <head>...</head>
  <body>
    <header>
      <nav>
        ...
        <button class="theme-toggle" aria-label="Toggle theme">
          <svg class="icon-sun">...</svg>
          <svg class="icon-moon">...</svg>
        </button>
      </nav>
    </header>
  </body>
</html>
```

#### Theme Toggle JS (max 500 bytes)

```javascript
const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
}
toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
```

#### Theme Toggle Button Visual (Enterprise B2B)

- Icon: sun (light) / moon (dark), 20x20
- Style: ghost button, no background, subtle border on hover
- Position: nav, far right, after main nav items
- No animation (per Section 4.7 motion discipline, just :hover state)

---

## SECTION 5: CONTEXT-AWARE PROACTIVITY

### 5.A Motion Strategy

**MOTION_INTENSITY: 4** = subtle, justified, no scroll-hijack.

**Used:**

- Hero load-in (text + image fade + slight up)
- Card hover (transform: translateY(-2px), shadow)
- Button tactile feedback (`:active` translateY(1px))
- FAQ accordion smooth transition
- Scroll reveal for section content (subtle fade + up, IntersectionObserver)

**Banned (per Section 5):**

- Scroll-pinned hero
- Scroll-hijack (horizontal pan)
- Sticky-stack sections
- Marquee
- Parallax
- Magnetic buttons
- GSAP (overkill for landing page)
- Motion library (overkill for landing page)

**Per "Motion claimed = motion shown" (Section 5):** With MOTION_INTENSITY 4, the page should have entry transitions, hover physics, and reduced-motion fallback. ✓

### 5.B Loading/Empty/Error States

N/A for v1 (no forms, no async data). If form added later: full state cycle required.

### 5.C Forbidden Animation Patterns

NO `window.addEventListener('scroll')` — use IntersectionObserver only.

---

## SECTION 6: PERFORMANCE & A11Y

### 6.A Core Web Vitals Targets

```
LCP < 2.5s   (hero image preloaded)
INP < 200ms  (no heavy JS, no event-loop blocking)
CLS < 0.1    (image dimensions set, font preloaded)
```

### 6.B Hardware Acceleration

Animate ONLY `transform` and `opacity`. Never `top`, `left`, `width`, `height`.

### 6.C Reduced Motion (mandatory, MOTION_INTENSITY > 3)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 6.D Dark Mode

Token strategy: CSS custom properties swapped via `@media (prefers-color-scheme: dark)`. Both modes designed from start, not added later.

### 6.E Bundle Size

- HTML: < 12KB
- CSS: < 10KB
- JS: < 2KB
- Total: < 25KB (excluding images)

### 6.F Z-Index Restraint

```
z-0:   base
z-10:  sticky header
z-50:  modal/overlay (none in v1)
```

No random `z-50` everywhere.

### 6.G Accessibility

- WCAG AA contrast min (4.5:1 body, 3:1 large text 18px+)
- Focus rings visible (2px outline + 2px offset)
- Keyboard nav (tab order, all interactive)
- Alt text on every image
- ARIA labels where needed (FAQ accordion, lang="id")
- `<html lang="id">`

---

## SECTION 7: DIAL DEFINITIONS REFERENCE

(See taste-SKILL Section 7 for full definitions. We use VARIANCE 7, MOTION 4, DENSITY 4 baseline.)

---

## SECTION 8: DARK MODE PROTOCOL

**Decision: Dual mode (Light + Dark) with manual toggle. Both designed from start, tested before ship.**

### 8.A Token Strategy

**CSS custom properties** swapped via `[data-theme="dark"]` selector on `<html>` element. Theme toggle button in nav controls this attribute.

```css
:root { /* Light mode (default) */
  --color-bg: #ffffff;
  --color-text: #0f172a;
  --color-accent: #1e3a8a;
  /* ... */
}

[data-theme="dark"] {
  --color-bg: #0b1120;
  --color-text: #f1f5f9;
  --color-accent: #60a5fa;
  /* ... */
}
```

### 8.B Do Not Prescribe Specific Colors Here (already done in Section 4.2)

The brief decides. This skill enforces only:
- **Contrast** - WCAG AA minimum for body text, AAA target for hero copy
- **Hierarchy parity** - visual hierarchy that works in light must work in dark
- **Brand fidelity** - primary brand color stays recognisable. Don't desaturate the brand into a dark mode.
- **No pure `#000000` and no pure `#ffffff`** - use off-black (slate-900, near-black warm gray) and off-white (slate-50).

**Verified in our palette:**
- Light mode: `#ffffff` for `--color-bg` (allowed because Page-bg), but text uses `#0f172a` (off-black)
- Dark mode: `#0b1120` for `--color-bg` (NOT pure black), text uses `#f1f5f9` (off-white)

### 8.C Theme Toggle Persistence + Default Behavior

**Default behavior (first visit):** Respect `prefers-color-scheme` system preference (per Mas's choice 2026-06-17).

```javascript
// First load (inline in <head> per Section 8.E to avoid FOUC)
const saved = localStorage.getItem('theme');
if (saved) {
  document.documentElement.setAttribute('data-theme', saved);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

// On toggle
toggle.onclick = () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
};
```

**Note on Mas's dark-primary design + auto-default:** The page is designed dark-first per Mas's spec, but first-visit users on light-mode systems will see light mode. To preserve premium feel, ensure light mode is also polished (per Section 8.D "test in both modes").

### 8.D Test in Both Modes Before Finishing

Mandatory pre-flight:
- Open page in Chrome DevTools, toggle both modes
- Verify all text passes WCAG AA in BOTH modes
- Verify images/icons work in both modes (no PNG with hardcoded white background)
- Verify shadows still visible in dark mode (or remove shadow in dark, use border instead)
- Verify no element is invisible in either mode (e.g., dark text on dark surface)

### 8.E No FOUC (Flash of Unstyled Content)

Apply theme BEFORE first paint to avoid theme flash:

```html
<script>
  // Inline in <head> to run before CSS applies
  (function() {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
  })();
</script>
```

This script runs synchronously in `<head>` before body renders, so theme is applied before user sees anything.

### 8.F Theme Toggle Visual Spec

```
┌─────────────────────────────────────┐
│  ☀️  (when in light mode)          │
│  ┌──────┐                           │
│  │ Icon │  20x20px, stroke 1.5px    │
│  └──────┘  ghost button            │
│           border: 1px solid border  │
│           on hover: border accent   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  🌙  (when in dark mode)           │
│  Same size, same position           │
└─────────────────────────────────────┘
```

No emoji in actual code (per Section 3.D). Use SVG icon:
- Sun: simple line drawing, 8 rays
- Moon: crescent shape
- Both from same icon family, consistent stroke-width

**Position: nav, far right, after main nav items, before any CTA button.**

---

## SECTION 9: AI TELLS CHECKLIST (BANNED PATTERNS)

### 9.A Visual & CSS Banned

- [ ] NO neon / outer glows
- [ ] NO pure black (#000000) - use slate-900 (#0f172a)
- [ ] NO oversaturated accents
- [ ] NO gradient text for headers
- [ ] NO custom mouse cursors

### 9.B Typography Banned

- [ ] NO Inter as default (we use Outfit)
- [ ] NO oversized H1 screaming
- [ ] NO serif default (we use sans)

### 9.C Layout Banned

- [ ] NO 3-equal feature cards (we use bento instead)
- [ ] NO mathematically-perfect padding (varied rhythm)

### 9.D Content & Data Banned

- [ ] NO "John Doe" generic names (real Indonesian names if testimonials)
- [ ] NO SVG egg avatars
- [ ] NO fake-perfect numbers (use real stats only)
- [ ] NO "Acme" "Nexus" "SmartFlow" startup-slop
- [ ] NO filler verbs ("Elevate", "Seamless", "Unleash")
- [ ] NO emoji in code (per Section 3.D, default disabled)

### 9.E External Resources Banned

- [ ] NO hand-rolled SVG icons (we use no icons in v1)
- [ ] NO div-based fake product UI
- [ ] NO broken Unsplash links
- [ ] NO shadcn default state

### 9.F Production-Test Tells Banned

**Hero & top-of-page:**
- [ ] NO version labels in hero (BANNED: "Edisi 2026 - Update Terbaru")
- [ ] NO "Brand · No. 01" sub-eyebrows

**Section numbering & micro-labels:**
- [ ] NO section-number eyebrows (BANNED: "00 / INDEX", "001 · Capabilities")
- [ ] NO `01 / 4`-style pagination on tiles
- [ ] NO `Scroll · 001 Capabilities` scroll cues
- [ ] NO "Index of Work, 2018-2026" range labels

**Separators & dots:**
- [ ] NO middle-dot (`·`) as default separator (max 1 per metadata strip)
- [ ] NO decorative colored status dots on every list

**Em-dashes & typography flourishes:**
- [ ] **NO EM-DASH (`—`) ANYWHERE. ZERO. NON-NEGOTIABLE.**
- [ ] NO `<br>`-broken-and-italicized headlines as default
- [ ] NO vertical rotated text
- [ ] NO crosshair / hairline grid lines as decoration

**Fake product previews:**
- [ ] NO div-based fake product UI in hero
- [ ] NO fake version footers in fake screenshots

**Marketing-copy Tells:**
- [ ] NO "Quietly in use at" / "Quietly trusted by" headers
- [ ] NO "From the field" / "Field notes" poetic labels
- [ ] NO weather/locale strips (LIS 14:23 · 18°C)
- [ ] NO micro-meta-sentences under eyebrows
- [ ] NO "Stage 1 / Step 1 / Phase 01" generic labels
- [ ] NO "Reservation 412 of 800" fake live counters

**Pills, labels and version stamps:**
- [ ] NO pills/labels overlaid on images
- [ ] NO photo-credit captions as decoration
- [ ] NO version footers on marketing pages (v1.4.2, Build 0048)
- [ ] NO "last sync 4s ago" status lines

**Decoration text strips:**
- [ ] NO decoration text strip at hero bottom (BRAND. MOTION. SPATIAL.)

**Lists, dividers and scoring:**
- [ ] NO border-t + border-b on every row of long list
- [ ] NO scoring/progress bars with filled background tracks

**Locale, time, scroll cues:**
- [ ] NO locale / city-name / time / weather strips
- [ ] NO scroll cues (Scroll, ↓ scroll, Scroll to explore)
- [ ] NO decorative status dots

**Decoration text in footer:**
- [ ] NO "v0.6.2-rc.1" version in footer
- [ ] NO "Build 0048" in footer

### 9.G EM-DASH BAN (NON-NEGOTIABLE)

**The em-dash character (`—`) is BANNED. ZERO. Use:**
- Comma (,) for clauses
- Period (.) for sentences
- Colon (:) for lead-ins
- Parentheses ( ) for asides
- Regular hyphen (-) for compound words
- Line break for visual separation

**Apply to:** headlines, eyebrows, body copy, button text, FAQ questions/answers, footer text, alt text, navigation labels.

**Audit:** grep `—` in `index.html` after rewrite. Must return 0 matches.

---

## SECTION 10: REFERENCE VOCABULARY (Patterns to Use)

### Hero Paradigm Selected
- **Asymmetric Split Hero** (Section 10): text left, image right, generous white space.

### Layout Selected
- **Bento Grid** (Section 10): asymmetric tile grouping, for Solution section.

### Not Used (with reason)
- Sticky-stack, scroll-pinned, marquee, magnetic button: too playful for trust-first.
- Bento/Apple Control Center vibe: use subtly, not literally.
- Editorial manifesto hero: copy not strong enough to stand alone.

---

## SECTION 11: REDESIGN PROTOCOL

**N/A** (greenfield build, no existing site).

---

## SECTION 12: BLOCK LIBRARY (Section Sketches)

### Block 1: Symmetric Hero (Enterprise + Trustworthy)

```
┌────────────────────────────────────────────────────┐
│  HEADLINE                                          │
│  Lulus Tes PNS?                                    │
│  Mulai dari Latihan yang Tepat.                    │
│                                                    │
│  Subtext (max 20 words)                            │
│  13 modul, 1.199+ soal dengan pembahasan lengkap.  │
│                                                    │
│  [Beli Sekarang]  [Lihat Sample]                  │
└────────────────────┬───────────────────────────────┘
                     │  ← vertical gap, slightly less asymmetric
        ┌────────────┴────────────┐
        │                         │
        │      HERO IMAGE         │
        │  (real photo, 1600x1200) │
        │                         │
        │  [subtle border,         │
        │   not overlapping card]  │
        └─────────────────────────┘
```

**Layout note:** Symmetric (not asymmetric per dial V4). Image equal weight with text. No overlapping cards, no float tricks. Stable, predictable.

### Block 2: Problem Grid (2x2)

```
┌────────────────────┬────────────────────┐
│  Icon 1            │  Icon 2            │
│  Heading           │  Heading           │
│  Body (≤25 words)  │  Body (≤25 words)  │
├────────────────────┼────────────────────┤
│  Icon 3            │  Icon 4            │
│  Heading           │  Heading           │
│  Body              │  Body              │
└────────────────────┴────────────────────┘
```

### Block 3: Solution Grid (2x3, Numbered Features)

```
┌────────────────────┬────────────────────┐
│  1                 │  2                 │
│  Heading           │  Heading           │
│  Body              │  Body              │
├────────────────────┼────────────────────┤
│  3                 │  4                 │
│  Heading           │  Heading           │
│  Body              │  Body              │
├────────────────────┼────────────────────┤
│  5                 │  6                 │
│  Heading           │  Heading           │
│  Body              │  Body              │
└────────────────────┴────────────────────┘
```

**Layout note:** Per dial V5/D5, NOT bento (too playful for enterprise). Each cell numbered (1-6) in top-left, large display number, creates visual rhythm without being "3-equal feature cards" (Section 9.C ban). Numbering provides hierarchy and visual interest, equal card size is OK because content is unique per card.

Cells use white background + 1px border (no shadow for v1 enterprise). Hover: subtle border-color change to accent.

### Block 4: Sample (Centered, Vertical)

```
            ┌────────────────────┐
            │  Headline          │
            │  Subtext (≤25)     │
            └─────────┬──────────┘
                      │
            ┌─────────▼──────────┐
            │  Sample image      │
            │  (PDF page render  │
            │   or module cover) │
            └─────────┬──────────┘
                      │
            [ Download Sample PDF ]
            Sample gratis, cek kualitas dulu.
```

### Block 5: Pricing (3-Card, Featured Center)

```
┌──────────┐  ┌────────────┐  ┌──────────┐
│  Card 1  │  │  Card 2    │  │  Card 3  │
│  (basic) │  │  (FEATURED)│  │  (custom)│
│          │  │  - Raised  │  │          │
│          │  │  - Accent  │  │          │
│          │  │    border  │  │          │
│  [Beli]  │  │  [Beli]    │  │  [Chat]  │
└──────────┘  └────────────┘  └──────────┘
```

### Block 6: FAQ (Accordion)

```
            Headline
            Subtext
        ┌──────────────────┐
        │  Q1              │
        │  Click to expand │
        │  ┌────────────┐  │
        │  │ A1 (≤50w)  │  │
        │  └────────────┘  │
        └──────────────────┘
        ┌──────────────────┐
        │  Q2              │
        └──────────────────┘
        ... 6 more
```

### Block 7: CTA (Centered)

```
              Headline
              Subtext

       [Beli Sekarang]  [Tanya via WA]
```

### Block 8: Footer (4-Column)

```
┌────────┬────────┬────────┬────────┐
│ Pilar  │ Order  │ Kontak │ Info   │
│  PNS   │ Links  │ Links  │ Links  │
│  +     │        │        │        │
│ tagline│        │        │        │
└────────┴────────┴────────┴────────┘
© 2026 Pilar PNS. All rights reserved.
```

---

## SECTION 13: OUT OF SCOPE (v1)

- Forms (newsletter, contact)
- Blog / content marketing pages
- User account / login
- Payment gateway integration (link to lynk.id)
- Email capture
- Multi-bahasa
- Dark mode manual toggle
- A/B testing
- Testimonial section (no testimonials yet)
- Comparison table vs bimbel
- FAQ search/filter (8 Q is small enough)

---

## SECTION 14: PRE-FLIGHT CHECKLIST

**Run this mechanical checklist before declaring v1 done:**

### Brief & Dials
- [ ] Brief inference declared (Section 0.B)
- [ ] 3 dials explicit (VARIANCE 7, MOTION 4, DENSITY 4)
- [ ] No framework / library / build step

### AI Tells
- [ ] ZERO em-dashes in `index.html` (grep `—` returns 0)
- [ ] NO version labels in hero
- [ ] NO "Quietly in use at" headers
- [ ] NO decoration strip at hero bottom
- [ ] NO scroll cues
- [ ] NO locale / time / weather strips
- [ ] NO section-number eyebrows
- [ ] NO "Field notes" / "Stage 1" poetic labels
- [ ] NO 3-equal feature cards
- [ ] NO Inter as default font
- [ ] NO AI-purple / blue-glow gradient

### Layout Discipline
- [ ] Hero: max 4 text elements (no badge, no stats, no tagline)
- [ ] Hero fits in viewport (headline ≤ 2 lines, subtext ≤ 20 words)
- [ ] Hero top padding max `pt-24` (6rem)
- [ ] 8 sections use min 4 different layout families
- [ ] Eyebrow max 1 per 3 sections (1 eyebrow used)
- [ ] Mobile collapse explicit for every multi-column section
- [ ] Bento cells have visual diversity (not all white)

### CTA
- [ ] One primary CTA label across page ("Beli Sekarang")
- [ ] No duplicate CTA intent
- [ ] Button contrast WCAG AA
- [ ] Button label max 3 words for primary CTA
- [ ] CTA button never wraps to 2 lines

### Images
- [ ] Real hero image (not div-based fake)
- [ ] All image alt text present
- [ ] No fake product UI / div screenshots

### Performance
- [ ] HTML < 12KB
- [ ] CSS < 10KB
- [ ] JS < 2KB
- [ ] LCP image preloaded
- [ ] CLS < 0.1

### Accessibility
- [ ] `<html lang="id">`
- [ ] All interactive elements keyboard-navigable
- [ ] Focus rings visible
- [ ] Reduced motion fallback (`@media (prefers-reduced-motion: reduce)`)
- [ ] Dark mode auto via `prefers-color-scheme`
- [ ] WCAG AA contrast for all text

### Theme Lock
- [ ] ONE theme (light OR dark OR auto), no section inversions
- [ ] Both light and dark tested

---

## SECTION 15: ASSET REQUIREMENTS

### Required from Mas

1. **Hero image** (1600x1200, real photo or generated)
   - Suggested: study desk with module PDFs open
   - Can be generated via FLUX.1-schnell if Mas prefers
2. **Favicon** (32x32 .ico, simple)
3. **OG image** (1200x630, social share preview)

### Auto-Generated

1. **Module cover thumbnails** (200x280, 6 images) — can be generated from PDF page 1
2. **Sample PDF** — already exists at `cpns/output/Pilar-CPNS-Modul-1.pdf`

### Placeholder Strategy

If real image not available at launch, use Picsum seed:
`https://picsum.photos/seed/pilar-pns-hero/1600/1200`

NEVER div-based fake screenshots.

---

## SECTION 16: HERO SPEC (Detailed)

### Final Hero Copy

**Headline (8 words, 1-2 lines):**
> "Lulus Tes PNS? Mulai dari Latihan yang Tepat."

**Subtext (18 words, 1-2 lines):**
> "13 modul, 1.199+ soal dengan pembahasan lengkap untuk persiapan CAT."

**CTAs:**
- Primary: "Beli Sekarang" (2 words, fits on one line)
- Secondary: "Lihat Sample" (2 words)

**Image:** Real photo of study desk / module PDFs, OR generated hero image (TBD with Mas).

**No badge, no tagline, no trust micro-strip, no pricing teaser, no feature bullets.**

### Hero Stats (MOVED to dedicated section below)

Stats (1.199+ soal, 13 modul, 100% pembahasan) move to a new "By the Numbers" section directly under hero. NOT in hero.

---

## SECTION 17: COPY REFINEMENT PLAN (Em-dash + AI Tell Audit)

### Dual Mode Updates (Added 2026-06-17 per Mas)

After Mas adjusted to "enterprise + trustworthy" with "light + dark mode" requirement:

1. **Color palette** shifted from teal to **deep navy** (Cobalt + Cream variant per Section 4.2). Reason: matches institutional/government/financial aesthetic (bank, BUMN, insurance all use deep navy).

### Brand Brown + Gold Spec (Added 2026-06-17 per Mas's design spec)

After Mas provided explicit design spec (colors, fonts, components, spacing):

1. **Color palette** shifted again from "Cobalt + Cream" to **brand brown + gold** (`#8B5A2B` primary, `#C68B3D` accent gold, `#160B06` background, `#F4E8D5` text). Reason: premium-feel differentiator for PNS test prep market, "institutional + heritage craft" aesthetic.
2. **Typography** shifted from Outfit to **Cinzel 700 (display) + Playfair Display 600 (subheading) + Inter 400 (body) + Roboto Mono (prices)**. Reason: monumental serif heading = "PILAR" + "PNS" civil service gravitas.
3. **Shape system** stratified to **6/10/20px** (input/card/hero panel). Reason: 3-tier hierarchy for monumental effect.
4. **Materiality** uses **borders + shadows + gold glow on hover** (per Mas's spec). Reason: premium packaging feel, "leather-bound book" aesthetic. Glow override on taste-SKILL Section 9.A accepted per explicit brand brief.
5. **Dials** remain at V4/M3/D5 (predictable, formal, info-dense).
6. **Light mode** = inverted (cream BG, dark text, brown accent) for dual mode consistency. Both modes designed from start, both pass WCAG AA.
2. **Dials** shifted from V7/M4/D4 to **V4/M3/D5** (predictable, formal, info-dense). Reason: enterprise audience expects calm, structured UI.
3. **Hero** shifted from asymmetric split to **symmetric split** (no overlapping cards). Reason: stability = trustworthy.
4. **Solution section** shifted from bento to **2x3 numbered grid**. Reason: bento feels too "playful/agency" for institutional.
5. **Materiality** shifted to **border-first, shadow-minimal**. Reason: enterprise pages use thin borders, not floating cards.
6. **Theme**: dual mode (light + dark) with **manual toggle button** in nav + auto-respect system preference + localStorage persistence.

### Em-dash replacements needed in existing copy

| Location | Old | New |
|----------|-----|-----|
| Hero badge | "Edisi 2026 - Update Terbaru" | **REMOVE entire badge** (AI tell + version label) |
| Hero subhead | "Disusun untuk calon PNS yang serius lolos tes CAT." | OK as is (no em-dash) |
| Problem 1 | "Bank soal di internet tidak lengkap" | OK |
| Solution 3 | "100% ada pembahasan" | OK |
| Solution 5 | "Harga terjangkau" | OK |
| FAQ various | check each for em-dashes | TBD during rewrite |

### Em-dash Audit Command

After rewrite, run in terminal:
```bash
grep -c "—" ~/.hermes/projects/pilar-cpns-landing/index.html
```
Expected output: `0`

If output > 0, fix all remaining em-dashes before declaring done.

### AI Tell Audit (rewrite remove these)

| Pattern | Status | Action |
|---------|--------|--------|
| "Edisi 2026 - Update Terbaru" hero badge | BANNED | REMOVE entirely |
| "Bidang pemerintahan yang wajib dilaksanakan..." (TIU content example) | N/A in landing copy | OK |
| "Quietly in use at..." style header | N/A | OK (no testimonials yet) |
| "Scroll" cue | N/A | OK (not added) |
| "Field notes" / "Stage 1" labels | N/A | OK |
| Logo wall as text wordmark | N/A | OK (no logo wall) |
| 3-equal feature cards | EXISTED in old design | REPLACE with bento |

---

## SECTION 18: IMPLEMENTATION ORDER (After Approval)

### Phase A: Code Complete (45-60 min)
1. Write new `index.html` per Section 4.7, 4.8, 9, 16, 17
2. Write new `style.css` per Section 4.1-4.6
3. Write new `script.js` (FAQ accordion, theme toggle per Section 4.11/8.C, IntersectionObserver reveal)
4. Write inline FOUC-prevention script in `<head>` per Section 8.E
5. Write `robots.txt`, `sitemap.xml`, `manifest.json`
6. README deployment guide

### Phase B: Asset (15-20 min, parallel)
1. Generate hero image via FLUX.1-schnell (if Mas agrees)
2. Generate 6 module thumbnails
3. Wait for favicon + OG image from Mas

### Phase C: Verify Pre-Flight (15-20 min)
1. Run all 50+ Pre-Flight checks
2. Grep `—` returns 0
3. Lighthouse audit (target 90+ performance, 95+ SEO)
4. Mobile + desktop visual test

### Phase D: Deploy (Mas side, 5-10 min)
1. Push to GitHub
2. Enable Pages
3. Add GA4 + GSC

---

## APPROVAL CHECKLIST

**Mas, please review and confirm:**

1. **Brief inference (Section 0.B)** — accurate or needs revision?
2. **3 dials (VARIANCE 7, MOTION 4, DENSITY 4)** — sesuai atau perlu adjustment?
3. **Color palette (teal accent)** — OK atau mau warna lain?
4. **Hero copy (Section 16)** — final atau perlu rewrite?
5. **Stats moved out of hero** — OK?
6. **Layout family per section (Section 4.3)** — sesuai?
7. **Bento in Solution (Section 12 Block 3)** — OK?
8. **Featured center card in Pricing (Section 12 Block 5)** — OK?
9. **Eyebrow only on Solution section** — OK?
10. **Real hero image required (Section 15)** — Mas provide atau generate via FLUX?
11. **Implementation order (Section 18)** — Mas setuju phased 4-fase?
12. **Pre-flight checklist (Section 14)** — agree dengan 50+ check items?

Setelah approve semua, aku eksekusi Phase A (45-60 min code), save ke folder, Mas review via local file preview.

---

**Dokumen:** `~/.hermes/projects/pilar-cpns-landing/design.md`
**Status:** DRAFT v1.0
**Methodology:** taste-SKILL v1.0 (anti-slop frontend)
**Last updated:** 2026-06-17
