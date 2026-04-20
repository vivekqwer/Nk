```markdown
# Design System Strategy: The Analog Master

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Analog Master."** 

We are moving away from the sterile, "SaaS-blue" corporate world and into the high-fidelity, high-energy space of a recording studio. This design system treats the UI as an editorial experience—think of a limited-edition vinyl sleeve or a premium backstage pass. We achieve this through "Organic Brutalism": a layout that prioritizes bold, intentional asymmetry, high-contrast serif headlines, and overlapping elements that suggest physical depth.

This is not a "grid of boxes." It is a curated stage where content is the headliner. We use wide gutters, exaggerated typography scales, and tonal layering to guide the eye without the need for traditional "web" containers.

---

## 2. Color & Tonal Depth
Our palette is rich and saturated, designed to feel confident and rhythmic.

### Palette Roles
- **Primary (Crimson Pulse):** `#E63946` | Used for the "Heartbeat" of the app—play buttons, recording states, and primary CTAs.
- **Secondary (Stage Green):** `#2A9D8F` | Used for progress, success, and rhythmic growth.
- **Tertiary (Spotlight Gold):** `#F4A261` | Reserved for prestige, certificates, and "Pro" status indicators.
- **Accent (Neon Violet):** `#8338EC` | The "Electric" flair—live stream badges and artist highlights.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Traditional borders feel thin and "digital." Instead, boundaries must be defined solely through background color shifts.
*   Use `surface_container_low` (`#faf3e2`) against the `background` (`#fff9ec`) to create soft sections.
*   Transitions should feel like different weights of fine paper or studio foam, not wireframes.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack. Each inner container uses a slightly different tier of the `surface_container` tokens to define importance:
1.  **Canvas (Background):** `#fff9ec` (The studio floor).
2.  **Surface (Cards/Controls):** `#ffffff` (The equipment).
3.  **Container High/Highest:** For nested elements like nested comments or code snippets.

### Signature Textures & Glassmorphism
To capture the "concert energy," use semi-transparent `surface` colors with a `backdrop-blur` of 12px–20px for floating navigation bars and music players. This creates a "frosted glass" effect that allows background colors to bleed through, softening the layout and making it feel premium.

---

## 3. Typography
Our typography is an interplay between the "Journalist" (Serif) and the "Engineer" (Sans/Mono).

- **Headline Font: "Newsreader"** 
    - Used for `display-lg` through `headline-sm`. 
    - This font carries the editorial weight. It should feel like a magazine feature. Use tighter letter-spacing (-2%) for large headings.
- **Body Font: "Work Sans"**
    - Used for `title-lg` through `body-sm`. 
    - A functional, modern workhorse. It provides the clarity needed for complex music theory lessons.
- **Mono Font: "JetBrains Mono"**
    - Used exclusively for `label-sm` (timestamps, track duration, BPM).
    - It brings the "Recording Software" aesthetic to the interface.

---

## 4. Elevation & Depth
In this design system, "Depth" is a feeling, not a shadow effect.

### The Layering Principle
Hierarchy is achieved by "stacking" surface tiers. Place a `surface_container_lowest` card on a `surface_container_low` section. The slight delta in warmth creates a natural lift.

### Ambient Shadows
Shadows must mimic natural studio lighting.
- **Shadow MD:** `0 12px 28px rgba(26, 26, 46, 0.10)`
- The shadow color should be a tinted version of the `on_surface` color, never pure black.
- Use `glow-primary`: `0 0 0 4px rgba(230, 57, 70, 0.18)` for active "On-Air" states or selected tracks.

### The "Ghost Border" Fallback
If accessibility requires a container edge (e.g., Input Fields), use the `outline_variant` token at **15% opacity**. This "Ghost Border" provides a hint of structure without breaking the editorial flow.

---

## 5. Components

### Buttons
- **Primary:** `primary` (`#b7102a`) background with `on_primary` text. Radius: `12px`. High-impact, slightly taller padding (16px vertical).
- **Secondary:** Glassmorphism style. Semi-transparent surface with `primary` text.
- **Tertiary:** Pure text in `primary` with a `JetBrains Mono` label for "Technical" actions (e.g., *Download MIDI*).

### Cards
- **Rule:** Forbid divider lines. Use vertical white space from the 8px base grid (e.g., 24px or 32px gaps) to separate content. 
- Use the `xl` (1.5rem / 24px) or `20px` radius for a soft, premium feel.

### Playback Scrubber (Unique Component)
- The track background uses `surface_container_highest`. 
- The "Played" portion uses a gradient from `primary` to `accent`.
- The handle (thumb) should use `glow-primary` on hover to feel "electrified."

### Tooltips
- Use `inverse_surface` (`#333025`) with `inverse_on_surface` text.
- Large blur shadows to make them feel like they are floating far above the "stage."

---

## 6. Do's and Don'ts

### Do:
- **Asymmetry:** Let images bleed off the edge of a container or overlap with headlines.
- **Negative Space:** Use at least 64px–80px of vertical space between major sections to let the "music breathe."
- **Tonal Contrast:** Use `surface_container` shifts to define functional areas.

### Don't:
- **No 1px Lines:** Do not use dividers between list items. Use 16px of padding instead.
- **No Flat Corporate Blue:** If you need a "neutral" blue, you've failed the prompt. Use the Warm Cream (`#FFF9EC`) or Deep Crimson.
- **No Standard Grids:** Avoid placing three identical cards in a row. Vary the heights or use a "Featured" wide card to break the rhythm.

### Accessibility Note:
While we use "Ghost Borders," ensure that interactive elements maintain a contrast ratio of at least 4.5:1. Use `primary_fixed` and `secondary_fixed` tokens for backgrounds where legibility is paramount over aesthetics.```