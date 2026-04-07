# CLAUDE.md — Interactive Portfolio

## Project Overview
Personal interactive portfolio website. Audience: potential employers, collaborators, and clients in tech/creative fields. Goal: make a lasting first impression through craftsmanship and personality — not a template.

---

## Active Design Dials

| Dial | Value | Meaning |
|---|---|---|
| `DESIGN_VARIANCE` | **8** | Asymmetric layouts, fractional grids, deliberate empty zones |
| `MOTION_INTENSITY` | **6** | Fluid CSS transitions + selective Framer Motion. No static states. |
| `VISUAL_DENSITY` | **4** | Comfortable spacing. Daily App Mode — nothing crammed, nothing wasted. |

These are the baseline. Override inline when the user specifies different intent.

---

## Stack & Architecture

- **Framework:** Next.js (App Router). Default to Server Components (`RSC`). Extract interactive pieces as isolated `'use client'` leaf components.
- **Styling:** Tailwind CSS — check `package.json` for v3 vs v4 before writing config syntax.
  - v4: use `@tailwindcss/postcss` in `postcss.config.js`, NOT the legacy `tailwindcss` plugin.
- **Animation:** Framer Motion for UI interactions. GSAP/ScrollTrigger for isolated full-page scroll sequences only. Never mix both in the same component tree.
- **Icons:** `@phosphor-icons/react`. Uniform `weight="regular"` and consistent `size`. No Lucide. No emojis — ever.
- **State:** `useState`/`useReducer` for local UI. Global state only to avoid deep prop-drilling.

**Before any import:** check `package.json`. If a package is missing, output the install command before writing code.

---

## Layout Rules

- **Hero sections:** `min-h-[100dvh]` — never `h-screen` (iOS Safari bug).
- **Page container:** `max-w-[1400px] mx-auto` or `max-w-7xl`.
- **Grids over flex math:** Use `grid grid-cols-1 md:grid-cols-3 gap-6`. Never `w-[calc(33%-1rem)]`.
- **Asymmetric default (DESIGN_VARIANCE 8):** Split-screen, left-aligned hero, fractional `grid-template-columns: 2fr 1fr`, `padding-left: 20vw` zones.
- **Mobile override (mandatory):** Any asymmetric layout above `md:` must collapse to `w-full px-4 py-8` below `768px`. No horizontal scroll.
- **No centered hero:** Centered H1 over a dark image is banned. Use split-screen or asymmetric alignment.

---

## Typography

- **Display:** `text-4xl md:text-6xl tracking-tighter leading-none`
- **Body:** `text-base leading-relaxed max-w-[65ch]`
- **Fonts:** Choose from `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi`. Pair with `Geist Mono` or `JetBrains Mono` for code/data. `Inter` is banned. `Inter` is banned.
- **No serif** unless the design direction is explicitly editorial.
- **No oversized screaming H1s.** Control hierarchy with weight and color contrast, not raw scale.

---

## Color Rules

- **Palette:** Zinc/Slate neutral base. One accent color max. Saturation < 80%.
- **No purple/blue AI gradient aesthetic.** Permitted accents: Emerald, Electric Blue, Deep Rose, Amber.
- **No pure black `#000000`.** Use `zinc-950`, off-black, or charcoal.
- **No neon outer glows.** Use inner borders (`border-white/10`) and tinted shadows instead.
- **No gradient text on large headers.**
- **Consistency:** Do not mix warm and cool grays within the same view.

---

## Motion Rules (MOTION_INTENSITY 6)

- Transitions: `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)` as default.
- Animate only `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`.
- Spring physics for all interactive elements: `type: "spring", stiffness: 100, damping: 20`.
- Staggered load-ins via `staggerChildren` or `animation-delay: calc(var(--index) * 100ms)`.
- Magnetic buttons: use `useMotionValue` + `useTransform` — never `useState` for continuous hover physics.
- Perpetual micro-animations (pulse, float, shimmer) must be isolated in their own memoized Client Components. Never trigger parent re-renders.
- `useEffect` animations must always have cleanup functions.

---

## Component Quality Standards

**All interactive states are mandatory:**
- Loading: skeletal loaders matching the layout shape — no generic spinners.
- Empty state: composed, instructive, beautiful.
- Error state: inline, clear.
- Tactile feedback: `:active` uses `scale-[0.98]` or `-translate-y-[1px]`.

**Cards:** Only use card containers when elevation communicates hierarchy. Shadow should be tinted to the background hue. No generic 3-column equal card rows — use 2-column zig-zag, asymmetric grid, or horizontal scroll instead.

**Forms:** Label above input. `gap-2` between form blocks. Error text below input.

---

## Performance Guardrails

- Grain/noise overlays: `fixed inset-0 z-50 pointer-events-none` pseudo-elements only. Never on scrolling containers.
- `will-change: transform` sparingly.
- `z-index` only for systemic layers: sticky navbars, modals, overlays. No arbitrary `z-50` spam.
- Wrap dynamic lists in `<AnimatePresence>`.

---

## Forbidden Patterns (AI Tells — Hard Ban)

| Category | Banned |
|---|---|
| Fonts | `Inter`, `Roboto`, `Arial`, system-ui defaults |
| Colors | Purple/blue gradient glow aesthetic, `#000000`, oversaturated accents |
| Layout | Centered hero, 3-equal-column card rows, flex percentage math |
| Copy | "Elevate", "Seamless", "Unleash", "Next-Gen", "Acme", "Nexus" |
| Data | `99.9%`, `50%`, "John Doe", "Jane Smith", generic egg avatars |
| Images | Unsplash URLs (broken). Use `https://picsum.photos/seed/{slug}/800/600` |
| Emojis | Banned in all code, markup, alt text, and content. Use Phosphor icons or SVG. |
| Cursors | No custom mouse cursors. |
| shadcn/ui | Only allowed with fully customized radii, colors, and shadows. Never default state. |

---

## Portfolio-Specific Creative Direction

This is a personal portfolio — it should feel like a distinct creative signature, not a Vercel template clone.

- **One unforgettable moment:** Every major section should have one thing the visitor will remember.
- **Personality over convention:** Break expected layouts intentionally and deliberately.
- **Proof over claims:** Show work, show process, show outcomes. Avoid abstract marketing copy.
- **Atmosphere:** Backgrounds should have depth — mesh gradients, noise textures, layered transparencies. Not flat solid colors.
- **Asymmetric hero:** Text left or right aligned. Background image with a subtle fade into the background color (light or dark mode appropriate).

Pull from the Creative Arsenal when appropriate: Bento grids, Spotlight Border Cards, Text Scramble reveals, Staggered Orchestration, Kinetic Marquees, Scroll Progress Paths.
