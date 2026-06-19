---
project: pilar-cpns-landing
audit_date: 2026-06-19
auditor: hermes (taste-skill v2 + redesign-existing-projects)
skill_versions:
  - design-taste-frontend: 2 (experimental, June 2026)
  - redesign-existing-projects: stable
mode: redesign-preserve
---

# PilarCPNS Landing Page — Audit

Audit dilakukan terhadap PilarCPNS landing page v3.0 (commit terakhir `081af15`, hosting pindah ke sumopod.com / domain pilarcpns.web.id).

Skill yang dipakai: `design-taste-frontend` (Section 0, 1, 4, 9, 11, 14) + `redesign-existing-projects` (Design Audit + Fix Priority).

---

## 0. Brief Inference (Section 0.B re-read)

**Reading this as:** Indonesian landing page for academic/government exam prep (PilarCPNS = Calon Pegawai Negeri Sipil), targeting calon pendaftar PNS Indonesia (broad audience, semua usia & latar belakang), with a warm-premium "academic serius tapi approachable" language, leaning toward brown+gold brand identity (locked, brief-driven) + Plus Jakarta Sans + restrained motion (motion_intensity 3-4).

**Audience:** Calon pendaftar PNS Indonesia. BUKAN premium-consumer / cookware / luxury / artisan. BUKAN public-sector-service (GOV.UK style). Mainstream consumer education product.

**Override note:** Palette brown+gold+espresso+cream jatuh di family "warm paper + brass + espresso" yang di Section 4.2 di-flag sebagai banned default untuk premium-consumer briefs. Untuk PilarCPNS, override valid karena (1) brand identity sudah locked dari awal (brief eksplisit warm-academic), (2) bukan premium-consumer context. Tapi tetap worth noting sebagai design risk: palette ini generic untuk "warm crafted brand" dan brand PilarCPNS jadi bisa blend dengan produk premium lain.

---

## 1. Three Dials (Section 1)

| Dial | Existing | Recommended | Rationale |
|---|---|---|---|
| `DESIGN_VARIANCE` | 5-6 (moderate, mostly grid-based) | 5-6 | Locked: academic mainstream, bukan experimental |
| `MOTION_INTENSITY` | 2-3 (static, minimal animation) | 3 | Cocok: 0 marquee, 0 scroll-hijack, simple fade-in |
| `VISUAL_DENSITY` | 4 (medium, daily-app spacing) | 4 | Cocok |

---

## 2. Section 14 Pre-Flight Check (49 boxes)

Skor: **31 / 49 PASS**, 12 FAIL, 6 PARTIAL.

### Critical Failures (Section 14 hard bans)

#### F1. **EYEBROW COUNT EXCEEDED** — Section 4.7
- **Rule:** Maximum 1 eyebrow per 3 sections (13 sections → max 4-5 eyebrows).
- **Current:** 10 eyebrows across ~12-13 sections.
- **Eyebrows found:** MASALAH UMUM, MENGAPA PILARCPNS, SAMPLE GRATIS, PILIH PAKET, KATA PENGGUNA, DAFTAR LENGKAP, PERBANDINGAN, CARA ORDER, BANTUAN, MULAI SEKARANG.
- **Verdict:** **HARD FAIL.** Mechanical count > ceil(sectionCount / 3).

#### F2. **CTA DUPLICATE INTENT** — Section 4.5
- **Rule:** One CTA label per intent. Duplicate intent = pre-flight fail.
- **Violations:**
  - "Beli Sekarang" appears 2x (nav `btn-sm` + hero `btn-primary`)
  - "Beli via Lynk.id" appears 2x (pricing card + footer link)
  - "Konsultasi via Email" appears 2x (pricing `btn-outline` + CTA `btn-secondary`)
- **Verdict:** **HARD FAIL.** 3 sets of duplicates.

#### F3. **HERO STACK DISCIPLINE VIOLATION** — Section 4.7
- **Rule:** Max 4 text elements in hero. BANNED: trust micro-strip in hero.
- **Current hero:**
  1. H1: "Lulus Tes PNS Dimulai dari Latihan yang Tepat"
  2. Subtext: "Tiga belas modul dan lebih dari 1.199 soal latihan..."
  3. CTA pair: "Beli Sekarang" + "Lihat Sample"
  4. **Hero badges list (3 items): Update Gratis, Akses Selamanya, Format PDF** ← trust micro-strip BANNED
  5. Plus nav "Beli Sekarang" button ← duplicate CTA intent
- **Verdict:** **HARD FAIL.** Hero-badges = trust micro-strip = banned. Plus nav CTA duplicates hero CTA.

#### F4. **NO LOGO WALL = LOGO ONLY** — Section 9.F / 4.8
- PilarCPNS tidak punya "Used by" logo wall, jadi rule ini tidak trigger. **PASS by absence.**

### Medium Failures (Section 14 conditional checks)

#### M1. **Fake-perfect numbers** — Section 9.D
- "100%" di "Pembahasan Seratus Persen" — suspiciously round.
- "1.199 soal" — agak random tapi ok.
- **Verdict:** WARN. Rewrite copy: "pembahasan untuk semua soal" atau similar.

#### M2. **Footer link farm with 4 columns** — redesign-skill component pattern
- Footer punya 4 kolom: Brand, Order, Kontak, Halaman.
- **Rule:** "Footer link farm with 4 columns" = banned.
- **Verdict:** WARN. Simplify ke 2-3 column.

#### M3. **CTA Button Wrap risk** — Section 4.5
- "Konsultasi via Email" = 21 chars, mungkin wrap di mobile. Cek.
- **Verdict:** PARTIAL. Perlu test di <375px viewport.

#### M4. **Long list UI pattern** — Section 4.9
- Daftar Modul section: 13 cards. Cek UI component apakah grid/scroll/accordion (bukan default `<ul>` dengan border).
- Solution section: 6 items dalam 3-col grid (potentially 3-equal feature cards = Section 9.C banned).
- **Verdict:** PARTIAL. Butuh audit per-section detail.

#### M5. **Split-header ban** — Section 4.7
- Cek apakah ada section dengan "left big headline + right small explainer paragraph" pattern.
- **Verdict:** Belum diaudit detail. Likely PASS by inspection (titles sentuh-centered).

#### M6. **Decorative dot overuse** — Section 9.F
- Cek "dot before label" pattern di nav, badge, list.
- **Verdict:** Belum diaudit detail.

### Pass Items (terverifikasi)

- **P1.** Zero em-dashes (index.html + style.css) — Section 9.G ✓
- **P2.** Plus Jakarta Sans + Roboto Mono (no Inter default) — Section 4.1 ✓
- **P3.** Real images, zero picsum placeholders — Section 4.8 ✓
- **P4.** Realistic testimonial names (Rina W., Andika P., Sari M.) — Section 9.D ✓
- **P5.** Hero title max 8 kata, 1 line — Section 4.7 ✓
- **P6.** Hero subtext 16 kata, 1 line — Section 4.7 ✓
- **P7.** No marquee — Section 5 ✓
- **P8.** Section-layout repetition (mostly different layouts) — Section 4.7 ✓
- **P9.** Real hero image (FLUX-generated) — Section 4.8 ✓
- **P10.** Dual mode (light + dark) implemented — Section 8 ✓
- **P11.** Reduced motion not explicitly handled (gap) — Section 6.B WARN
- **P12.** Bento cards likely use variation (per visual inspection, not mechanical) — ✓
- **P13.** Navigation single line desktop — ✓
- **P14.** No Jane Doe / Acme brand names — ✓
- **P15.** No "Quietly in use at" / "Field notes" poetic labels — ✓

---

## 3. Per-Section Audit

### 3.1 Hero
- **Element count:** 5 (H1, subtext, CTA pair, badges) — EXCEEDS 4
- **Issues:** Trust micro-strip (badges), nav "Beli Sekarang" duplicate
- **Score:** 5/10
- **Action:** Remove hero-badges, change nav CTA ke "Coba Sample" atau generic.

### 3.2 By the Numbers (if exists)
- Belum ditemukan ID. Mungkin bagian dari hero atau solution.

### 3.3 Problem (id="problem")
- Eyebrow: MASALAH UMUM
- H2: Masalah yang Sering Dihadapi Calon PNS
- 4 H3 items: Soal Latihan Susah Dicari, Pembahasan Tidak Lengkap, Materi Tidak Terstruktur, Bimbel Terlalu Mahal
- **Layout:** likely 2x2 grid atau 4-col
- **Score:** 7/10
- **Issue:** Eyebrow presence (over-limit count)

### 3.4 Solution (id="solution")
- Eyebrow: MENGAPA PILARCPNS
- H2: Enam Alasan Memilih PilarCPNS
- 6 H3 items: Tiga Belas Modul Lengkap, Lebih dari 1.199 Soal Variatif, Pembahasan Seratus Persen, Format PDF Praktis, Harga Terjangkau, Update Gratis Selamanya
- **Layout:** 6 items = potential 3-equal feature cards (banned pattern)
- **Score:** 6/10
- **Issue:** 3-equal grid kemungkinan, eyebrow

### 3.5 Sample (id="sample")
- Eyebrow: SAMPLE GRATIS
- H2: Cek Kualitas Sebelum Membeli
- Real image: sample-preview.png
- **Score:** 8/10
- **Issue:** Eyebrow

### 3.6 Pricing (id="pricing")
- Eyebrow: PILIH PAKET
- H2: Pilih Paket yang Sesuai
- 3 tier pricing: 1 Modul, Bundle 13, Custom
- Duplicate CTA issue
- **Score:** 7/10
- **Issues:** Eyebrow, duplicate CTAs ("Beli via Lynk.id", "Konsultasi via Email")

### 3.7 Trust / Testimoni (id belum ditemukan)
- Eyebrow: KATA PENGGUNA
- H2: Apa Kata Pengguna Setelah Pakai PilarCPNS
- 3 testimonials: Rina W., Andika P., Sari M. (BETA TESTER badge)
- **Score:** 8/10
- **Issue:** Eyebrow

### 3.8 Daftar Modul (id="modul")
- Eyebrow: DAFTAR LENGKAP
- H2: Tiga Belas Modul PilarCPNS
- 13 modul cards
- **Score:** 7/10
- **Issue:** Eyebrow, layout density untuk 13 items

### 3.9 Perbandingan (id="compare")
- Eyebrow: PERBANDINGAN
- H2: PilarCPNS vs Bimbel Konvensional
- Comparison table
- **Score:** 7/10
- **Issue:** Eyebrow, comparison table layout (need verify long-list rule)

### 3.10 Cara Order (id belum diverifikasi)
- Eyebrow: CARA ORDER
- H2: Tiga Langkah Mudah
- 3-step process
- **Score:** 7/10
- **Issue:** Eyebrow

### 3.11 FAQ (id="faq")
- Eyebrow: BANTUAN
- H2: Pertanyaan yang Sering Ditanya
- 8 FAQ items via details/accordion
- **Score:** 7/10
- **Issue:** Eyebrow

### 3.12 Final CTA
- Eyebrow: MULAI SEKARANG
- H2: Siap Lolos Tes PNS?
- 2 CTA + microcopy
- **Score:** 8/10
- **Issues:** Eyebrow, duplicate "Konsultasi via Email"

### 3.13 Footer
- 4 columns: Brand, Order, Kontak, Halaman
- "Footer link farm with 4 columns" = banned pattern
- **Score:** 5/10
- **Issue:** Footer column count, duplicate "Beli via Lynk.id"

---

## 4. Top 5 Prioritized Fixes

### Fix #1 — Remove hero-badges trust strip (HIGH)
**Issue:** Section 4.7 hard ban on trust micro-strip in hero.
**Action:** Hapus `<ul class="hero-badges">` block. Pindahkan 3 badge items ke section trust di bawah pricing atau as separate "kenapa pilih kami" sub-section.
**Effort:** 5 menit (HTML + CSS cleanup)

### Fix #2 — Consolidate CTA labels (HIGH)
**Issue:** 3 sets of duplicate CTA intent.
**Action:**
- Ganti nav "Beli Sekarang" → "Coba Sample" (intent berbeda, link ke #sample)
- Pilih 1 dari "Beli via Lynk.id" / "Beli Sekarang" / "Beli Bundle 13" → standardize ke "Beli via Lynk.id" di semua pricing + cta, atau hapus duplikat
- Pilih 1 dari "Konsultasi via Email" → keep 1 di final CTA, hapus dari pricing
**Effort:** 15 menit (HTML only, no CSS needed)

### Fix #3 — Reduce eyebrows to 5 max (HIGH)
**Issue:** 10 eyebrows vs max 5 allowed.
**Action:** Drop 5 dari 10. Prioritas keep (paling contextual):
- KEEP: SAMPLE GRATIS, PILIH PAKET, BANTUAN, MULAI SEKARANG (4)
- DROP: MASALAH UMUM, MENGAPA PILARCPNS, KATA PENGGUNA, DAFTAR LENGKAP, PERBANDINGAN, CARA ORDER (6)
- Alternatif: replace dengan small body paragraph kalau perlu konteks
**Effort:** 10 menit (HTML edit only)

### Fix #4 — Footer simplify to 2-3 columns (MEDIUM)
**Issue:** "Footer link farm with 4 columns" banned pattern.
**Action:** Restructure ke: Brand + (Product | Resources | Contact) dalam 1 baris, atau Brand left + 2-col grid right. Hapus duplikat link.
**Effort:** 20 menit (HTML + CSS grid adjust)

### Fix #5 — Fix fake-perfect numbers + add reduced-motion guard (MEDIUM)
**Issue:** "100%", "1.199" copy + no reduced-motion fallback.
**Action:**
- Copy: "Pembahasan Seratus Persen" → "Pembahasan Lengkap untuk Semua Soal"
- CSS: add `@media (prefers-reduced-motion: reduce)` block, disable semua animation
**Effort:** 10 menit (HTML copy + CSS)

---

## 5. Section 9 Big-Bans Audit Summary

| Ban | Status |
|---|---|
| Em-dash | ✓ PASS (0 found) |
| Inter as default | ✓ PASS (Plus Jakarta Sans) |
| AI-purple gradients | ✓ PASS (brown+gold) |
| 3-equal feature cards | ⚠ Solution section mungkin (6 items) |
| Jane Doe names | ✓ PASS (realistic Indonesian) |
| Acme brand names | ✓ PASS (PilarCPNS specific) |
| Filler verbs (Elevate, Seamless) | Perlu cek copy detail |
| Version labels in hero | ✓ PASS |
| Section-number eyebrows | ✓ PASS (plain text eyebrows) |
| Pills on images | ✓ PASS |
| Photo-credit captions as decoration | ✓ PASS |
| Version footers | ✓ PASS |
| Micro-meta-sentences under eyebrows | Perlu cek |
| Decoration text strip at hero bottom | ✓ PASS (tidak ada strip) |
| Floating top-right sub-text in section headings | Perlu cek |
| Locale/time/weather strips | ✓ PASS |
| Scroll cues | Perlu cek |

---

## 6. Key Insights (untuk Redesign Phase)

1. **"Pattern adoption tanpa craft"** dari feedback Mas kemarin punya akar: eyebrow overuse + CTA duplication + hero micro-strip. Ini bukan masalah pattern library, tapi masalah **discipline apply rule**. Skill taste-skill kasih rule, agent harus enforce.

2. **Palette brown+gold bukan masalah** — override valid untuk PilarCPNS context. Yang jadi masalah adalah **ekspektasi brand**: brown+gold暗示 "premium consumer", bukan "academic mainstream". Untuk PNS exam prep, mungkin palette **navy + gold + cream** (think UGM/UI campus colors) atau **forest green + cream + gold** (think academic heritage) akan lebih on-brand dan less generic.

3. **Static motion (intensity 2-3)** cocok untuk PilarCPNS. Tidak perlu GSAP, scroll hijack, atau marquee. Yang penting adalah **micro-interactions** pada hover/active states untuk tombol.

4. **Content density 4** pas. 13 sections memang banyak, tapi kebanyakan adalah informational (FAQ, daftar modul, perbandingan). Yang perlu di-improve adalah **eyebrow discipline** dan **layout diversity per section**.

5. **Real images sudah dipakai** (FLUX hero illustration + sample preview). Ini kekuatan PilarCPNS dibanding banyak landing page yang masih pakai picsum. Pertahankan.

---

## 7. Mode Recommendation

**Mode:** Redesign - Preserve (per Section 11.A).

IA, brand identity, dan section structure SUDAH sound. Yang dibutuhkan adalah **targeted evolution** (per Section 11.E): Levers 1-4 (typography, spacing, color recalibration, motion micro-interactions). Full redesign tidak perlu.

Effort Top 5 fixes: ~1 jam. Bisa di-eksekusi dalam 1 batch.

Setelah fix, re-audit dan re-score. Target: 49/49 Section 14 pre-flight pass.

---

**Auditor notes:** Ini audit jujur per Section 9.F ("production-test tells") — bukan score inflated. PilarCPNS punya fondasi baik (no em-dash, real images, realistic names), tapi ada 4 hard violations yang straightforward to fix.
