# HARMONY LMS — Google Stitch Prompt Pack
### Subscription-based Music Industry Learning Management System
*Complete page-by-page Stitch prompts with enhanced vibrant color system*

---

## ⚡ WHAT'S NEW IN THIS DELIVERABLE

### Enhanced vibrant color palette (music-industry feel)
Your original palette was warm but muted. I've kept the same brand DNA (red + green + gold + cream) but pushed saturation so it reads as energetic and premium — the mood music learners associate with creativity, rhythm, and stage lights.

### Pages I added that were missing from your doc
| # | Page | Why it's critical |
|---|------|-------------------|
| 1 | Landing / Marketing page | Doc has it in the user flow but no page spec |
| 2 | Browse Courses / Catalog | Doc has it in flow, not in page list |
| 3 | Email Verification / OTP | Required after signup for legitimate auth |
| 4 | Onboarding (genre + instrument + skill level) | Personalizes the dashboard — critical for music LMS |
| 5 | Profile Edit page | You only had "view" profile |
| 6 | Checkout / Order Summary page | Bridge between subscription page and Razorpay |
| 7 | Payment Processing (loader) | Between checkout and success/fail — UX critical |
| 8 | Payment Failed page | Equally important as success |
| 9 | Invoice / Receipt detail | For order history, tax compliance in India |
| 10 | My Courses | Active enrolled content — different from catalog |
| 11 | Wishlist / Saved | Industry standard |
| 12 | Search Results | Global search UX |
| 13 | Instructor / Artist Profile | Music LMS sells on artist reputation |
| 14 | Live Sessions / Masterclass page | Big revenue driver for music LMS |
| 15 | Community / Discussion | Peer learning for musicians |
| 16 | Settings page | Password, notifications toggle, language, theme |
| 17 | Help & Support / FAQ | Reduces support ticket load |
| 18 | Admin Login | You had admin dashboard but no login |
| 19 | Course Create/Edit form | Doc says "CRUD" but no UI spec |
| 20 | Lesson Upload + timestamp editor | The core admin task |
| 21 | User Detail (admin) | Different from user list |
| 22 | Admin Analytics page | Revenue, engagement, completion rates |
| 23 | Refund / Dispute management | Essential for payments |
| 24 | Email template designs (5) | Doc lists emails but no visual spec |
| 25 | 404 / Empty / Loading states | Polish requires these |

### Things I reinforced in your spec
- **Razorpay integration**: clear separation of checkout → processing → webhook states
- **Certificate page**: added download + share + verify-online flow
- **Notifications**: split in-app bell vs. dedicated notifications page
- **RBAC**: every admin page explicitly notes the role gate
- **Mobile responsive**: every prompt includes mobile behavior

---

## 🎨 DESIGN SYSTEM (USE AS GLOBAL STYLE IN STITCH)

### Enhanced Color Palette

Copy this block into Stitch as your **base style prompt** before generating any page. This is the foundation every page should reference.

```
BRAND IDENTITY: Harmony LMS — a premium subscription music learning platform.
The vibe is a fusion of vinyl-era warmth and modern concert energy — think
backstage pass meets recording studio. Colors should feel rich, saturated,
and confident, never flat or corporate.

PRIMARY COLORS (vibrant evolution of original palette):
- Primary (Crimson Pulse):    #E63946   — CTAs, play buttons, active states, progress bars
- Primary Deep:               #B8202E   — hover states for primary
- Primary Soft:               #FFE5E8   — light backgrounds, badges, tag pills

- Secondary (Stage Green):    #2A9D8F   — success, subscription-active, growth stats
- Secondary Deep:             #1E7268   — hover states for secondary
- Secondary Soft:             #D9F2EE   — success toasts, active subscription badge

- Tertiary (Spotlight Gold):  #F4A261   — premium/pro tier indicators, certificates, achievements
- Tertiary Deep:              #D97E3C   — hover states for tertiary
- Tertiary Soft:              #FDEFD9   — warning backgrounds, certificate backgrounds

- Accent (Neon Violet):       #8338EC   — music-industry flair; live session badges, genre chips
- Accent Soft:                #EADDFB   — live indicator backgrounds

NEUTRAL PALETTE:
- Canvas (Warm Cream):        #FFF8E7   — main light background
- Surface:                    #FFFFFF   — cards, modals
- Surface Muted:              #FAF3DD   — secondary cards, dividers backgrounds
- Border:                     #E8DFC6   — all default borders (1px)
- Border Strong:              #C9BFA2   — input borders, stronger dividers

- Ink Primary:                #1A1A2E   — all headings, primary text
- Ink Body:                   #2E2E42   — body paragraphs
- Ink Muted:                  #6B6B7E   — secondary text, timestamps, helper copy
- Ink Placeholder:            #A8A8B5   — input placeholders

DARK VARIANTS (for Course Player page + optional dark mode):
- Dark Canvas:                #0F0E17
- Dark Surface:               #1A1A2E
- Dark Border:                #2E2E42
- Dark Ink:                   #FFF8E7

SEMANTIC COLORS:
- Success:                    #06D6A0
- Warning:                    #FFB703
- Error:                      #EF476F
- Info:                       #4CC9F0

GRADIENTS (use sparingly for hero moments + CTAs):
- Hero Gradient:              linear-gradient(135deg, #E63946 0%, #8338EC 100%)
- Success Gradient:           linear-gradient(135deg, #2A9D8F 0%, #06D6A0 100%)
- Gold Gradient:              linear-gradient(135deg, #F4A261 0%, #FFB703 100%)
- Vinyl Gradient (dark):      linear-gradient(135deg, #1A1A2E 0%, #8338EC 50%, #E63946 100%)
```

### Typography System

```
HEADLINE FONT:   "Newsreader" (serif) — editorial, premium, storytelling
                 Use for: H1 hero titles, course titles, artist names, marketing headers
                 Weights: 500 (regular), 600 (semibold), 700 (bold)

BODY FONT:       "Work Sans" (sans-serif) — clean, readable, modern
                 Use for: paragraphs, labels, buttons, UI copy, nav
                 Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

MONO FONT:       "JetBrains Mono" — for timestamps, code, lesson chapter markers
                 Weight: 400, 500

TYPE SCALE (desktop):
- Display:       72px / 80px line-height / Newsreader 600 / -2% tracking
- H1:            56px / 64px / Newsreader 600 / -1.5% tracking
- H2:            40px / 48px / Newsreader 600 / -1% tracking
- H3:            32px / 40px / Newsreader 600 / normal
- H4:            24px / 32px / Newsreader 500 / normal
- H5:            20px / 28px / Work Sans 600 / normal
- Body Lg:       18px / 28px / Work Sans 400
- Body:          16px / 24px / Work Sans 400
- Body Sm:       14px / 20px / Work Sans 400
- Caption:       12px / 16px / Work Sans 500 / +4% tracking / UPPERCASE for tags

MOBILE: reduce Display → 48px, H1 → 40px, H2 → 32px, H3 → 24px. Body stays 16px.
```

### Spacing + Radii + Shadows

```
SPACING (8px base grid):
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120

RADII:
- Pill / Tag:        999px
- Button:            12px
- Input:             10px
- Card:              20px
- Modal / Section:   28px
- Hero block:        32px

SHADOWS:
- xs (input hover):   0 1px 2px rgba(26, 26, 46, 0.06)
- sm (card rest):     0 4px 12px rgba(26, 26, 46, 0.06)
- md (card hover):    0 12px 28px rgba(26, 26, 46, 0.10)
- lg (modal):         0 24px 48px rgba(26, 26, 46, 0.16)
- glow-primary:       0 0 0 4px rgba(230, 57, 70, 0.18)  — focus rings on red elements
- glow-accent:        0 0 24px rgba(131, 56, 236, 0.40)   — live badge pulse

BORDERS:
- Default:   1px solid #E8DFC6
- Strong:    1px solid #C9BFA2
- Focus:     2px solid #E63946 (primary)
```

### Reusable Component Specs (reference in every page prompt)

```
BUTTON - Primary:
  Background: #E63946. Text: #FFFFFF. Font: Work Sans 600, 15px.
  Padding: 14px 28px. Radius: 12px.
  Hover: background #B8202E + shadow-md. Active: scale 0.98.
  Icon (optional): 18px, left side, 8px gap.

BUTTON - Secondary (Outlined):
  Background: transparent. Border: 1.5px solid #1A1A2E. Text: #1A1A2E.
  Same padding/radius. Hover: background #1A1A2E, text #FFF8E7.

BUTTON - Inverted (Dark):
  Background: #1A1A2E. Text: #FFF8E7. Same padding/radius.
  Hover: background #2E2E42 + shadow-md.

BUTTON - Ghost:
  Background: transparent. Text: #1A1A2E. No border.
  Hover: background rgba(26,26,46,0.06).

INPUT FIELD:
  Height: 48px. Padding: 0 16px. Radius: 10px. Border: 1px #C9BFA2.
  Background: #FFFFFF. Text: #1A1A2E 15px. Placeholder: #A8A8B5.
  Focus: border #E63946, glow-primary shadow.
  Label above: Work Sans 500 13px #2E2E42, 6px gap.
  Helper: Work Sans 400 12px #6B6B7E.
  Error state: border #EF476F, helper text #EF476F.

SEARCH BAR:
  Same as input + leading search icon 18px at 16px left, padding-left 44px.

CARD:
  Background: #FFFFFF. Radius: 20px. Border: 1px #E8DFC6. Shadow: sm.
  Padding: 24px. Hover: shadow-md, translateY(-2px), transition 200ms.

TAG / CHIP:
  Height: 28px. Padding: 0 12px. Radius: pill. Font: Work Sans 500 12px uppercase +4% tracking.
  Genre tag: bg #EADDFB, text #8338EC.
  Level tag (Beginner): bg #D9F2EE, text #1E7268.
  Level tag (Intermediate): bg #FDEFD9, text #D97E3C.
  Level tag (Advanced): bg #FFE5E8, text #B8202E.
  New tag: bg gradient gold, text #1A1A2E.
  Live tag: bg #8338EC, text white, pulsing dot on left.

NAVIGATION - Top Bar (logged in):
  Height: 72px. Background: #FFF8E7 with subtle 1px bottom border #E8DFC6.
  Logo left (Newsreader 700, 24px, Harmony with music-note mark).
  Center: nav links (Dashboard, Courses, Live, Community) Work Sans 500 15px.
  Right: search icon, bell (notifications) with red dot, avatar with dropdown.
  Sticky on scroll with subtle shadow-sm when scrolled.

SIDEBAR (admin only):
  Width: 260px. Background: #1A1A2E. Text: #FFF8E7.
  Logo top 24px padding. Nav items 44px height, 12px horizontal padding,
  8px radius on hover (bg rgba(255,248,231,0.08)). Active: bg #E63946 full width.
  Section labels: uppercase 11px #A8A8B5 +6% tracking.
  Collapsible on tablet, bottom sheet on mobile.

AVATAR:
  Circular. Sizes: 32px (navbar), 48px (comment), 64px (profile card), 120px (profile page).
  1.5px border #E8DFC6. Fallback: gradient background + initials Newsreader 500.

TOAST / NOTIFICATION:
  Top-right floating. Width: 360px. Radius: 16px. Shadow: lg.
  Success: bg #D9F2EE, left 4px border #2A9D8F, check icon.
  Error: bg #FFE5E8, left 4px border #EF476F, x icon.
  Auto-dismiss 5s with progress bar at bottom.

MODAL:
  Max-width 560px. Background: #FFFFFF. Radius: 28px. Shadow: lg.
  Backdrop: rgba(26, 26, 46, 0.6) with 8px backdrop-blur.
  Close X top-right 24px icon.

PROGRESS BAR (lesson completion):
  Height: 6px. Bg: #E8DFC6. Fill: gradient #E63946 → #8338EC. Radius: pill.
  Animated on mount (width transition 800ms ease-out).

ICON SYSTEM: use Lucide or Phosphor icons, 1.5px stroke, 20px default.
  Music-specific: play, pause, volume, music-note, headphones, mic,
  guitar, piano, drum, vinyl, waveform, metronome.
```

---

# 📄 USER-SIDE PAGE PROMPTS

---

## 1. LANDING PAGE (Marketing / Pre-login)

```
Design a premium landing page for Harmony LMS — a subscription-based music
learning platform for aspiring and professional musicians. Apply the full
Harmony LMS design system (Crimson Pulse #E63946, Stage Green #2A9D8F,
Spotlight Gold #F4A261, Neon Violet #8338EC, Warm Cream #FFF8E7 canvas,
Newsreader for display + Work Sans for body).

LAYOUT: single column, full-viewport sections, max inner width 1280px,
horizontal padding 80px desktop / 24px mobile.

SECTION 1 — TOP NAV (sticky, 72px):
- Background: #FFF8E7 with 1px bottom border #E8DFC6 on scroll.
- Left: logo "Harmony" in Newsreader 700 24px with a small crimson music-note
  glyph before the text.
- Center: links "Courses", "Live Sessions", "Instructors", "Pricing",
  "Community" in Work Sans 500 15px #1A1A2E with 32px gap.
- Right: "Log in" ghost button, "Start Free Trial" primary button (#E63946).

SECTION 2 — HERO (min-height 720px, sits under navbar):
- Background: Warm Cream #FFF8E7 with a subtle radial gradient glow of
  Neon Violet #8338EC at 20% opacity behind the right-side image.
- Floating decorative elements: 3 translucent vinyl-record SVG shapes
  rotating slowly (40s animation), subtle audio-waveform SVG at bottom left.
- LEFT COLUMN (60%):
    - Eyebrow tag pill: "BACKSTAGE PASS TO YOUR MUSIC CAREER" — 12px uppercase,
      Crimson Pulse text on Primary Soft #FFE5E8 background.
    - H1 Display 72px Newsreader 600: "Learn music from the
      artists who shaped it." — "artists" word styled in Crimson Pulse #E63946
      with a hand-drawn underline SVG underneath in Spotlight Gold.
    - Subheading 20px Work Sans 400 #2E2E42: "Unlimited access to 500+
      masterclasses, live sessions with Grammy winners, and a global
      community of musicians — one subscription."
    - CTA row: primary button "Start 7-day Free Trial" (#E63946, with arrow
      icon) + secondary ghost button "Watch how it works" (with play icon circle).
    - Social proof strip: 5-star row + "Trusted by 50,000+ musicians in 80 countries"
      in Work Sans 500 14px #6B6B7E.
- RIGHT COLUMN (40%):
    - Layered composition: a hero image of a musician in a studio
      (headphones, warm lighting), framed inside a 28px-radius card with
      shadow-lg. Over the image, overlay two small floating UI cards:
        • Top-left floating card: "Now Playing — Piano Fundamentals /
          Chapter 3: Intervals" with a play button and waveform, showing
          the course player UI in miniature.
        • Bottom-right floating card: instructor avatar + name +
          "Grammy-winning producer • 3 courses" with a Stage Green verified tick.

SECTION 3 — STATS BAR (80px tall, Inverted dark #1A1A2E):
- 4 stats evenly spaced, white text:
    • 500+ Courses • 120+ Artists • 50K+ Students • 80 Countries
- Each stat: big Newsreader 600 48px Spotlight Gold number + Work Sans 500
  14px uppercase label below.

SECTION 4 — FEATURED GENRES:
- H2 "Pick your genre, find your flow." left-aligned.
- 6-card grid (3 cols desktop, 2 tablet, scroll-snap mobile):
  Rock, Electronic, Jazz, Hip-Hop, Classical, Indie.
- Each card: 280x320px, background image of the genre aesthetic
  (guitar/synth/sax/turntable/violin/vinyl), with a gradient overlay from
  transparent to #1A1A2E at bottom. Genre name in Newsreader 600 32px white
  + "24 courses" in Work Sans 500 14px #FFF8E7. Hover: scale 1.03, show
  Crimson "Explore →" link fade in.

SECTION 5 — HOW IT WORKS (3 steps):
- Alternating left/right layout with a large illustrated SVG per step.
- Step 1: "Subscribe in 60 seconds" — Razorpay checkout illustration.
- Step 2: "Pick your path" — genre + instrument icons connecting lines.
- Step 3: "Practice, perform, repeat" — waveform → certificate illustration.
- Each step: step number in Spotlight Gold circle 48px, H3, body paragraph,
  subtle micro-animation on scroll-into-view.

SECTION 6 — FEATURED INSTRUCTORS (horizontal scroll carousel):
- H2 "Learn from the artists on your playlist."
- Instructor cards 280px wide: full-bleed artist portrait top 60%, name +
  genre tag + course count + "View profile →" below. Left/right carousel
  arrows on hover.

SECTION 7 — LIVE SESSIONS PREVIEW:
- Dark section #1A1A2E with Vinyl gradient subtle background.
- H2 in Warm Cream: "Live with the legends, every week."
- 3 upcoming session cards: poster image, live violet badge with pulsing dot,
  instructor + title + date + "Reserve spot" button (Spotlight Gold).

SECTION 8 — TESTIMONIALS (3-column grid):
- Each testimonial card: cream background, quotation mark in crimson 48px top-left,
  quote in Newsreader 500 20px italic, student photo + name + instrument below.

SECTION 9 — PRICING TEASER:
- Single elevated card, centered, max-width 520px.
- "₹499/month • 7-day free trial • Cancel anytime"
- Three feature bullets with Stage Green check icons.
- Primary CTA "Start Free Trial" full width.

SECTION 10 — FAQ (accordion, 6 items).

SECTION 11 — FOOTER:
- Dark #1A1A2E, 4-column link grid (Product, Learn, Company, Legal),
  social icons row, copyright, language selector dropdown.

INTERACTIONS:
- Subtle parallax on hero images.
- Section reveal on scroll (fade + translateY 20px).
- Floating CTA "Start Free Trial" pill bottom-right after user scrolls 50%.

MOBILE: single column, hero image below text, nav collapses to hamburger,
carousels become horizontal-scroll with scroll-snap.
```

---

## 2. BROWSE COURSES / CATALOG PAGE

```
Design a course catalog page for Harmony LMS. Pre-login and post-login
versions are nearly identical; post-login shows "Enrolled" state on cards
the user has already accessed.

LAYOUT: standard top nav + 1280px content area.

HEADER BLOCK (200px):
- Background: gradient from #FFF8E7 to #FDEFD9.
- H1 Newsreader 56px "Explore the Harmony library" + subtitle 18px Work Sans
  "500+ courses across 12 genres. New masterclasses every week."
- Right side: decorative illustration of stacked vinyl/cassette SVG.

STICKY FILTER BAR (below header, 72px, sticks on scroll):
- Background: #FFFFFF with shadow-sm when stuck.
- Left: large search input (width 360px) with search icon, placeholder
  "Search courses, instructors, genres…".
- Middle filter chips row (horizontal scroll on mobile):
    • Genre dropdown (multi-select, shows count badge when active)
    • Instrument dropdown
    • Level: All / Beginner / Intermediate / Advanced (segmented control)
    • Duration: Under 1h / 1–3h / 3h+ 
    • Language dropdown
- Right: Sort dropdown (Most popular / Newest / Highest rated / Shortest first)
  + View toggle (grid / list icons).

ACTIVE FILTER CHIPS ROW (appears below filter bar if filters applied):
- Shows each active filter as a removable chip with X icon + a "Clear all" text link.

MAIN GRID (course cards):
- 4 columns desktop, 3 tablet, 2 mobile-landscape, 1 mobile-portrait.
- Card dimensions: 280x380px.
- Card structure:
    • Cover image top 180px, radius 20px on top corners only.
    • Live tag (#8338EC pulse dot) top-left if course has upcoming live.
    • Bookmark icon top-right (outlined by default, filled Crimson when saved).
    • Level tag bottom-left on image.
    • Body padding 20px:
        - Genre chip (Neon Violet soft background).
        - Course title Newsreader 600 20px, 2-line clamp.
        - Instructor row: 24px avatar + name + "• Verified" tick (Stage Green).
        - Meta row: 14px #6B6B7E — clock icon + "4h 32m", play icon +
          "18 lessons", star icon + "4.8 (2.1k)".
        - Progress bar if user has started (height 4px, crimson-violet gradient fill).
        - Price/lock row at bottom: if subscribed show "▶ Continue" primary CTA,
          if not subscribed show lock icon + "Subscribe to access" ghost CTA.
- Card hover: shadow-md, translateY -3px, cover image slight zoom (1.05).

PAGINATION: load more button (Work Sans 600 ghost button) OR infinite scroll
with skeleton loader cards.

EMPTY STATE: if filters return 0, show illustrated SVG (muted guitar) +
"No matches. Try widening your filters." + clear-filters button.

SIDEBAR (optional, desktop-only): collapsible left panel 240px with
"Featured this week", "New releases", "Trending instructors" as mini-lists.

RESPONSIVE: filter bar collapses to a "Filters (3)" button on mobile that
opens a full-screen bottom sheet with all filter controls + apply/reset footer.
```

---

## 3. SIGNUP PAGE

```
Design a clean, emotionally warm signup page for Harmony LMS.

LAYOUT: split-screen 50/50 on desktop, single column on mobile.

LEFT HALF (brand pane, fixed):
- Background: Vinyl gradient (#1A1A2E → #8338EC → #E63946, 135deg).
- Content centered vertically, 80px side padding:
    • "Harmony" logo top-left Newsreader 700 28px Warm Cream + music note.
    • Mid-pane: H1 Newsreader 600 48px Warm Cream:
      "Your front-row seat to music mastery starts here."
    • Subtitle 18px #FAF3DD 70% opacity: "Join 50,000+ musicians learning
      from Grammy-winning artists."
    • Testimonial quote card floating: cream translucent bg, quote + name +
      avatar + 5 stars.
    • Bottom strip: 4 tiny logos of featured artists (greyscale).

RIGHT HALF (form pane):
- Background: #FFF8E7. Content max-width 440px centered.
- Top-right: "Already a member? Log in" link Work Sans 500 14px Crimson.
- H2 Newsreader 600 40px #1A1A2E: "Create your account"
- Subtext: "Start your 7-day free trial. No credit card needed."
- Social auth row: "Continue with Google" + "Continue with Apple" outlined
  buttons side by side, with respective brand icons.
- "or sign up with email" divider: centered text with horizontal 1px lines.
- Form fields (stacked 16px gap):
    • Full name input
    • Email input
    • Password input with show/hide eye icon + strength meter below
      (4 segments turning Stage Green as strength grows).
    • Password helper: "At least 8 characters, 1 number, 1 symbol."
- Checkbox row: "I agree to Harmony's Terms and Privacy Policy" (links
  underlined Crimson).
- Primary CTA full-width: "Create account →" #E63946.
- Below button: "By signing up you'll start with a 7-day free trial,
  then ₹499/month. Cancel anytime." muted 12px centered.

MOBILE: drop left pane, top of form shows the Vinyl-gradient hero strip
(180px) with the logo + tagline compressed.

STATES:
- Field focus: Crimson border + subtle glow.
- Field error: #EF476F border + error helper with x icon.
- Submit loading: button shows spinner + text "Creating…" with disabled state.
```

---

## 4. LOGIN PAGE

```
Same split-screen layout as signup (share brand pane). 

RIGHT PANE CHANGES:
- Top-right: "New here? Create account" link.
- H2 "Welcome back."
- Subtext: "Log in to continue your journey."
- Social auth row (Google, Apple).
- Email + password fields only.
- Row below password: "Remember me" checkbox left, "Forgot password?" link
  right (both 14px).
- Primary CTA "Log in →" full-width #E63946.
- Subtle security note at bottom: tiny lock icon + "Protected by end-to-end encryption".

STATES:
- Wrong credentials: shake animation + red error banner above form
  "Incorrect email or password. Try again or reset your password."
- Account not verified: yellow banner "Please verify your email. [Resend]"
```

---

## 5. FORGOT PASSWORD (2 screens)

```
SCREEN A — REQUEST RESET:
Same split layout. Right pane:
- Back arrow link "← Back to login" top.
- H2 "Reset your password"
- Subtext: "Enter the email tied to your account and we'll send you a
  secure reset link."
- Single email input.
- Primary CTA "Send reset link".
- Below: "Didn't receive it? Check spam or contact support."

SCREEN B — SET NEW PASSWORD (from email link):
- H2 "Create a new password"
- Subtext: "Choose a strong password you haven't used before."
- New password input + strength meter.
- Confirm password input.
- Primary CTA "Update password".
- On success: replace form with Stage Green check illustration +
  "Password updated. Redirecting you to log in…" + auto redirect in 3s.
```

---

## 6. EMAIL VERIFICATION / OTP PAGE (NEW)

```
Same split layout. Right pane content:
- Icon at top: 64x64 envelope illustration with a small crimson heart/music
  note accent.
- H2 "Verify your email"
- Subtext: "We sent a 6-digit code to [user@email.com]. Enter it below
  to continue."
- OTP input: 6 separate 56x56 input boxes, 12px gap, radius 10px, centered,
  large 28px Newsreader characters. Auto-advance focus on type. Paste-aware.
- Resend row: "Didn't get it? Resend in 00:42" — countdown timer, becomes
  "Resend code" clickable link after 60s.
- Below: "Wrong email? [Change email]" ghost link.
- Success: full-screen takeover celebration — confetti SVG + "You're in!
  Welcome to Harmony." + auto redirect to onboarding.
```

---

## 7. ONBOARDING FLOW (NEW — 3 steps)

```
Design a 3-step onboarding wizard shown immediately after email verification,
before the user reaches the dashboard. Full-screen, Warm Cream background.
Top: progress indicator bar (3 segments, current one filled with crimson-violet
gradient). Skip link top-right "Skip for now" ghost.

STEP 1 — PICK YOUR GENRES (multi-select):
- Centered heading Newsreader 600 48px: "What moves you?"
- Sub: "Pick all that apply — we'll tailor your feed."
- 12-tile grid (4 cols desktop, 2 mobile) of genre cards 180x200px:
  Rock, Pop, Jazz, Classical, Electronic, Hip-Hop, R&B, Indie, Folk, Metal,
  Country, Latin. Each card: genre illustration top + name + selection check
  overlay (crimson circle with tick when selected). Selected cards have
  Crimson border + soft Crimson background.
- Bottom action bar (sticky): "Continue →" primary button, disabled until
  at least 1 genre selected.

STEP 2 — YOUR INSTRUMENT(S):
- "What do you play (or want to play)?"
- Same tile grid: Guitar, Piano, Drums, Bass, Vocals, Violin, Synth, DJ/Production,
  Ukulele, Saxophone, Other. 11 tiles.

STEP 3 — SKILL LEVEL + GOALS:
- "Where are you on your journey?"
- Large segmented control: Complete Beginner / Hobbyist / Intermediate /
  Advanced / Pro. 5 cards with small illustration each; single-select.
- Second section: "What's your goal?" multi-select chips: 
  Write songs, Perform live, Produce tracks, Pass a grade, Jam with friends,
  Go pro, Just for fun.
- Bottom: "Finish setup →" primary CTA. Animates to a "Building your
  recommendations…" loader for 1.5s then lands on Dashboard.

MOBILE: full-screen each step, grid becomes 2-column scroll. Progress bar fixed top.
```

---

## 8. DASHBOARD (USER HOME)

```
Design the logged-in user home/dashboard for Harmony LMS. This is the first
screen after login.

LAYOUT: top nav + 1280px content, 24px grid gap, vertical stack of sections.

SECTION 1 — PERSONAL GREETING (hero band, 240px):
- Background: soft Warm Cream with a decorative audio-waveform SVG line
  running horizontally, ghost-watermarked at 15% opacity in Crimson.
- LEFT: H1 Newsreader 600 40px "Welcome back, [First Name]."
  + subtext "You're 62% through Guitar Fundamentals — one session away
  from your first certificate. 🎸"
- RIGHT: large continue-watching card floating (360px wide):
  cover thumbnail + course title + next-lesson title + progress bar +
  big Crimson "▶ Resume" button.

SECTION 2 — QUICK STATS ROW (4 stat cards):
- Each 280x140, white bg, 20px radius.
  • "This week" — hours watched (big Newsreader 600 48px Crimson) +
    trend arrow ↑ "+2h vs last week" Stage Green.
  • "Active streak" — 🔥 "12 days" Spotlight Gold.
  • "Courses in progress" — "3" with small thumbnail stack.
  • "Certificates earned" — "2" with gold medal icon.

SECTION 3 — CONTINUE LEARNING (horizontal carousel):
- Title row: H3 "Pick up where you left off" + "View all →" link right.
- 3-4 course cards (same spec as catalog cards) showing in-progress only,
  with highlighted progress bar and last-accessed timestamp.

SECTION 4 — UPCOMING LIVE SESSIONS (if any):
- Dark #1A1A2E band (full width, inner padding 40px).
- Title "Coming up live" Warm Cream + "This week" chip.
- 3 session cards side by side: poster image left 120x120, detail right
  (artist, title, date/time in local zone, "Remind me" or "Reserve" CTA).

SECTION 5 — RECOMMENDED FOR YOU:
- "Because you love Rock + Guitar" header.
- 4 course cards grid.

SECTION 6 — TRENDING THIS WEEK:
- 4 course cards grid, each with a trending flame badge top-right.

SECTION 7 — NEW FROM YOUR FAVORITE ARTISTS:
- Shows course cards grouped by instructor the user follows.

SECTION 8 — COMMUNITY HIGHLIGHTS:
- 2-column grid: recent forum threads the user might care about + a
  "Share your progress" CTA card linking to community page.

SECTION 9 — YOUR SUBSCRIPTION STATUS (compact band):
- Stage Green soft background if active. Shows "Active subscription •
  Renews on [date] • ₹499/month" + "Manage plan" ghost button.
- If expiring: Warning amber bg + "Expires in 5 days. Renew to keep access."
  + Crimson "Renew now" CTA.

RIGHT FLOATING WIDGET (optional, desktop only, collapsible):
- Notifications panel peek (3 latest) + "View all" link.

MOBILE: all sections stack, carousels become horizontal-scroll with snap.
```

---

## 9. PROFILE PAGE (View)

```
Design the user profile page — public view (visible to other students in
community) with private-account toggle option.

LAYOUT: top nav + centered 960px content.

SECTION 1 — PROFILE HEADER (hero card, 280px tall):
- Background: gradient from #FFF8E7 to #FDEFD9 with a subtle sound-wave
  SVG pattern.
- LEFT side: 120px circular avatar with 4px Warm Cream ring + small
  Crimson edit-pencil icon overlay top-right (links to edit).
- Right of avatar: name in Newsreader 600 40px, below a row of chips:
  instrument ("Guitar"), genre ("Rock"), level ("Intermediate"),
  country flag + "Mumbai, India".
- Below chips: bio text Work Sans 400 16px max 2 lines + "Edit profile"
  ghost button + "Share profile" icon button (copy-link icon).
- Top right of card: account visibility toggle "Public / Private" switch.

SECTION 2 — STATS ROW (4 cards):
- Member since (month year) • Hours learned • Certificates (with gold icon) • 
  Following / Followers counts.

SECTION 3 — TABS (sticky beneath header, 48px tall):
- Tabs: "My Activity" / "Courses" / "Certificates" / "Community" / "Liked".
- Active tab: Crimson bottom 3px indicator + Newsreader 600 15px.

TAB A — ACTIVITY FEED:
- Vertical feed of activity entries: "Completed Lesson 4 of Jazz Piano
  Basics • 3h ago" with small course thumb + Stage Green check icon.

TAB B — COURSES:
- Grid of in-progress + completed courses with progress bar.

TAB C — CERTIFICATES:
- 3-col grid of certificate thumbnails (gold-accented). Click to open
  certificate detail/share page.

TAB D — COMMUNITY:
- Posts this user made in forums.

TAB E — LIKED:
- Liked courses, liked posts.

MOBILE: avatar and name stack vertically, tabs become horizontal-scroll.
```

---

## 10. PROFILE EDIT PAGE (NEW)

```
Design the profile edit page — form-based, focused.

LAYOUT: top nav + centered 720px content.

SECTION 1 — PAGE HEADER:
- H1 Newsreader 600 40px "Edit profile" + breadcrumb "Profile / Edit".
- Right: "Cancel" ghost + "Save changes" primary button.

SECTION 2 — AVATAR UPLOADER CARD:
- 120px circular avatar + "Change photo" ghost button beside it.
- Drag-and-drop support, file size helper "PNG or JPG, max 5 MB".
- "Remove photo" red text link.

SECTION 3 — BASIC INFO FORM (2-column on desktop, single on mobile):
- Full name, Display name (username), Pronouns dropdown,
  Country dropdown with flags, City text, Date of birth (date picker).

SECTION 4 — MUSIC INFO:
- Primary instrument (dropdown, searchable), Other instruments (multi-chip).
- Genres of interest (multi-chip).
- Skill level (segmented control).
- Goals (multi-chip).

SECTION 5 — BIO:
- Textarea 120px, character counter 160/160 bottom-right.

SECTION 6 — SOCIAL LINKS (stacked inputs with platform icons):
- Instagram, YouTube, SoundCloud, Spotify, Website.

SECTION 7 — ACCOUNT PRIVACY:
- Toggle row: "Show my profile in community" / "Allow DMs from other students".

STICKY SAVE BAR AT BOTTOM:
- Appears after any field change: dark #1A1A2E bar with "You have unsaved
  changes" + "Discard" ghost + "Save" primary.
```

---

## 11. SUBSCRIPTION / PRICING PAGE

```
Design the subscription plans page — 3-tier pricing with billing toggle
and clear value communication.

LAYOUT: top nav + centered content, max 1120px.

SECTION 1 — HEADER:
- Centered. H1 Newsreader 600 56px: "Unlock the full library."
- Subtitle 18px #2E2E42: "One subscription. 500+ courses. Zero lock-in."
- Billing toggle segmented control: "Monthly" / "Yearly (save 30%)"
  with a Spotlight Gold "Best value" badge on Yearly.

SECTION 2 — 3 PRICING CARDS (side by side, 320px each, 24px gap):

CARD 1 — STARTER (free tier / trial):
- White bg, 1px border, standard card styling.
- Name + price (₹0 / 7 days trial) + short description.
- Feature list with Stage Green check icons:
  • Access to Starter courses
  • Community forum read-only
  • HD video quality
- CTA "Start free trial" secondary outlined.

CARD 2 — PRO (MOST POPULAR — HIGHLIGHTED):
- Elevated card: Vinyl gradient border 2px + slight scale 1.04 + shadow-lg.
- "MOST POPULAR" ribbon top, Crimson bg, Warm Cream text.
- Monthly ₹499 / Yearly ₹4,199 (struck-through ₹5,988).
- Full feature list with Stage Green checks:
  • All 500+ courses
  • Live masterclasses
  • Downloadable lesson sheets
  • Progress certificates
  • Community full access
  • Priority support
- CTA "Start Pro trial →" primary Crimson full-width.

CARD 3 — MASTER (premium):
- Dark #1A1A2E bg, white text with Spotlight Gold accents.
- "₹999 / month" with "Billed annually ₹9,990".
- Features (Gold checks):
  • Everything in Pro
  • 1-on-1 feedback sessions (2/month)
  • Exclusive Grammy-artist workshops
  • Early access to new releases
  • Dedicated mentor
- CTA "Go Master" Gold gradient button.

SECTION 3 — WHAT'S INCLUDED (comparison table):
- 3-column feature comparison table. Sticky first column.

SECTION 4 — TRUST ROW:
- Razorpay badge, SSL lock, "Cancel anytime" with x-circle icon,
  "Refund within 7 days" with shield icon.

SECTION 5 — TESTIMONIAL STRIP (1 quote, centered):
- Big quote mark + 24px italic Newsreader quote + student photo + name.

SECTION 6 — FAQ ACCORDION (6 items):
- How does billing work? / Can I cancel anytime? / Do you offer refunds? /
  Is there a student discount? / What payment methods? / Can I share my account?

MOBILE: cards stack vertically; Pro stays visually highlighted.
```

---

## 12. CHECKOUT / ORDER SUMMARY PAGE (NEW)

```
Design the checkout/order-summary page shown when a user clicks
"Start Pro trial" — this bridges the plan selection and Razorpay checkout modal.

LAYOUT: top nav + 2-column grid (8/4), max 1120px.

LEFT COLUMN (main form):
SECTION 1 — BREADCRUMB + HEADER:
- Tiny breadcrumb "Pricing / Checkout".
- H1 "Complete your subscription".

SECTION 2 — ACCOUNT BLOCK (readonly card):
- Avatar + name + email + "Not you? Log out" link on right.

SECTION 3 — BILLING ADDRESS FORM:
- Country, Full name, Address line 1, Address line 2, City, State, Pincode,
  GSTIN (optional, with tooltip "For business invoices").
- 2-column on desktop, stacked mobile.

SECTION 4 — PAYMENT METHOD:
- Large radio-card options (each 80px tall):
    • UPI (with icons of GPay/PhonePe/Paytm) — default selected
    • Card (with Visa/Master/Rupay icons)
    • Netbanking
    • Wallet
  Each selected card: Crimson 2px border + Primary Soft bg tint.

SECTION 5 — COUPON CODE:
- Collapsible row "Have a coupon?" — expands to input + Apply button.
- Applied state: Stage Green soft chip showing "WELCOME10 applied • -₹49".

SECTION 6 — TERMS CHECKBOX:
- "I agree to Harmony's Terms and the Razorpay Terms. I authorize
  auto-renewal per my plan."

SECTION 7 — PRIMARY CTA:
- Full-width button (70px tall for prominence): "Pay ₹449 securely →"
  Crimson with a small lock icon.
- Below: "You'll be redirected to Razorpay's secure checkout."

RIGHT COLUMN (order summary, sticky):
SECTION 1 — PLAN CARD:
- "Pro Plan — Monthly" headline + "Change" text link.
- Plan features recap (5 bullets).
- Billing cycle "Every month on the 20th. Cancel anytime."

SECTION 2 — PRICE BREAKDOWN:
- Subtotal ₹499, Coupon -₹49, GST (18%) ₹81, separated by 1px dividers.
- Total row: bold Newsreader 600 24px "₹531".

SECTION 3 — TRIAL NOTICE (if trial eligible):
- Stage Green soft card: "You won't be charged until [date]. Cancel before
  that for a 100% refund."

SECTION 4 — GUARANTEES STACK:
- 3 small rows with icons:
  🔒 Secured by 256-bit encryption
  💯 7-day money-back guarantee
  🚫 Cancel anytime, no questions

MOBILE: single column, order summary collapses to sticky footer
with "View summary" expand.
```

---

## 13. PAYMENT PROCESSING PAGE (NEW)

```
Design the in-between state shown after user submits Razorpay payment and
before webhook confirms. Full-screen minimal.

LAYOUT: centered content, max 520px, full-height #FFF8E7 background.

CONTENT (centered):
- Animated vinyl-record SVG spinning (center, 160px) with a subtle
  crimson-to-violet gradient glow.
- Below spinner: H2 Newsreader 600 32px "Verifying your payment…"
- Paragraph Work Sans 400 16px #2E2E42: "Hang tight — we're confirming with
  our payment partner. This usually takes 5-10 seconds."
- 3 process steps with checkmark animations (sequentially filling):
    ☑ Payment received by Razorpay
    ☑ Verifying with Harmony
    ◯ Activating subscription…
- Bottom helper text: "Do not refresh or close this tab."
- If taking longer than 30s, show a yellow warning card: "Taking longer
  than usual. [Check status]" button.
- If webhook fails, auto-redirect to Payment Failed page after 45s.

No navigation bars visible. User cannot leave.
```

---

## 14. PAYMENT SUCCESS PAGE

```
Design the post-payment success page — celebratory but not cartoonish.

LAYOUT: centered content, max 680px, Warm Cream bg with a subtle
confetti SVG overlay at top (falls once on mount, then static).

CONTENT:
- Large Stage Green check-circle icon 120px with Success Gradient fill +
  subtle scale-in animation 600ms.
- H1 Newsreader 600 56px "You're in." + subtext 18px "Your Pro subscription
  is active. Welcome to Harmony, [First Name]."
- Order summary card (cream-soft bg, 20px radius, centered 520px wide):
    • Transaction ID + copy icon
    • Plan name + billing cycle
    • Amount paid ₹531
    • Next billing date
    • "Download invoice" ghost button
- Dual CTA row (centered):
    • Primary "Go to Dashboard →" Crimson
    • Secondary "Browse courses" outlined
- Suggested next steps section below:
    H3 "Start here" + 3 recommended courses as horizontal cards based on
    user's onboarding genre/instrument choices.
- Share row at bottom: "Share your Pro status" + social share icons
  (subtle, small).

MOBILE: stack with full-width CTAs.
```

---

## 15. PAYMENT FAILED PAGE (NEW)

```
Design the payment failed page — reassuring, action-oriented.

LAYOUT: same as success, max 680px centered.

CONTENT:
- Large Error icon 120px (#EF476F) with subtle shake animation 400ms.
- H1 Newsreader 600 48px "Payment didn't go through."
- Subtext: "Don't worry — nothing was charged. Here's what might have
  happened and how to fix it."
- Reason card (cream-soft): dynamic based on Razorpay error code:
    • "Insufficient funds" / "Card declined" / "Network timeout" / "OTP expired"
- "Try again" section with 3 action buttons:
    • Primary "Retry payment" Crimson
    • Secondary "Choose a different method" outlined
    • Ghost "Get help" linking to support page
- FAQ accordion below (3 items): "Why was I not charged?" / "Can I retry
  with a different card?" / "How long does a refund take if charged?"
- Footer: support email + live chat bubble icon.

MOBILE: stack with full-width CTAs.
```

---

## 16. ORDER HISTORY PAGE

```
Design the order/billing history page accessed from profile or settings menu.

LAYOUT: top nav + 1120px centered content.

SECTION 1 — HEADER:
- H1 "Billing history" + subtext "Every transaction in one place."
- Right: "Download all (CSV)" ghost button.

SECTION 2 — CURRENT PLAN SUMMARY CARD (elevated):
- Stage Green soft card. Left: "Current plan: Pro • Monthly" + "Active"
  green chip + "Renews on 20 May 2026".
- Right: "Manage plan" (opens subscription mgmt) + "Cancel plan" (red link).

SECTION 3 — FILTERS ROW:
- Date range picker, Status dropdown (All / Paid / Failed / Refunded),
  Search input.

SECTION 4 — TRANSACTIONS TABLE:
- Columns: Date | Transaction ID (short + copy icon) | Description (plan name) |
  Amount | Status | Actions.
- Status chips: Paid (green), Failed (red), Refunded (amber), Pending (violet).
- Actions: "View invoice" (opens invoice detail page), "Download PDF"
  (direct download), "Retry" (only on Failed).
- Row hover: Warm Cream tint.
- Empty state: illustrated envelope SVG + "No transactions yet. Your first
  purchase will show up here."

SECTION 5 — PAGINATION:
- Standard pagination controls or load-more button.

MOBILE: table becomes stacked cards with label-value pairs per row.
```

---

## 17. INVOICE / RECEIPT DETAIL PAGE (NEW)

```
Design the single-invoice detail page — looks like a real printable invoice
with clean brand accents.

LAYOUT: centered 800px content on Warm Cream bg.

SECTION 1 — TOP ACTIONS BAR:
- "← Back to billing" left + "Print" "Download PDF" "Email me a copy"
  ghost buttons right.

SECTION 2 — INVOICE CARD (printable, white bg, 28px radius, shadow-md):
- HEADER: Harmony logo top-left + "INVOICE" uppercase top-right with
  invoice number.
- 2-column meta: Billed to (name, email, address, GSTIN) / From (Harmony
  LMS Pvt Ltd, address, GSTIN, PAN).
- Invoice date, Payment date, Due date.
- Line items table: Description | Qty | Unit Price | Amount.
- Totals block bottom-right: Subtotal, Coupon, CGST, SGST, Total
  (Newsreader 600 large).
- Payment status stamp (diagonal watermark): "PAID" in Stage Green with
  transaction ID + Razorpay logo mini.
- Footer: thank-you note + support email + T&Cs link.

MOBILE: scaled invoice card, Print button disabled.
```

---

## 18. COURSE DETAIL PAGE

```
Design the course detail page — the sales/preview page for a single course.

LAYOUT: top nav + full-width hero + 1280px content.

SECTION 1 — HERO (480px):
- LEFT 60%: Dark #1A1A2E bg with a subtle Neon Violet radial glow.
- Breadcrumb top: "Courses / Guitar / Rock Guitar Essentials".
- Genre chip + Level chip.
- H1 Newsreader 600 56px Warm Cream "Rock Guitar Essentials"
- Subtitle 18px #FAF3DD 80%: "Build your rock vocabulary from chords to
  solos in 12 hours."
- Meta row (Spotlight Gold icons): star 4.8 (2,100 ratings) • 18 lessons •
  4h 32m total • Last updated Apr 2026 • English.
- Instructor row: 48px avatar + "Taught by [Artist Name]" + verified tick
  + "View profile →" link.
- Dual CTAs:
    • Primary "▶ Start learning" Crimson
    • Ghost "+ Add to list" (bookmark icon).
- "Included with Pro subscription" small badge.
- RIGHT 40%: large embedded video/trailer player with play overlay button,
  16:9 ratio, crimson-violet glow border.

SECTION 2 — STICKY SUB-NAV (56px, below hero):
- Tabs: Overview / Curriculum / Instructor / Reviews / FAQ.

SECTION 3 — OVERVIEW:
- 2-column: left 60% long-form description with H3 "What you'll learn"
  (4x2 grid of learning points with Stage Green check icons).
- Right 40%: "This course includes" list with icons:
  🎥 18 video lessons • 📄 Downloadable tabs + chord sheets • 💬 Community
  discussions • 🎓 Certificate on completion • ♾ Lifetime access (with subscription).

SECTION 4 — REQUIREMENTS + WHO IS THIS FOR:
- Two bulleted cards side-by-side.

SECTION 5 — CURRICULUM (accordion modules):
- Module headers: "Module 1 — Tuning & Tone Basics • 3 lessons • 48 min"
  + expand chevron.
- Expanded module shows lesson rows: play icon + lesson name + duration +
  lock icon if not subscribed + "Preview" link for free lessons.
- Total at bottom: "18 lessons • 4h 32m".

SECTION 6 — INSTRUCTOR SPOTLIGHT:
- Card: large avatar left + bio right + credentials chips + "View all
  courses by [name] (4)" link.

SECTION 7 — REVIEWS:
- Rating summary left (big 4.8 + 5 stars + distribution bar chart).
- Filter chips: All / 5-star / 4-star / With photos / With instructor response.
- Review cards: avatar + name + rating + "Verified student" chip + date +
  review text + helpful count. "Load more" button.

SECTION 8 — RELATED COURSES:
- 4-card horizontal row same as catalog cards.

SECTION 9 — FAQ accordion.

FLOATING BOTTOM BAR (mobile only, if not subscribed):
- Sticky bottom: "Subscribe to access — ₹499/mo" + CTA button.

MOBILE: hero stacks (video above text), sub-nav becomes scrollable.
```

---

## 19. COURSE PLAYER PAGE

```
Design the course video player / lesson page — focused, distraction-light,
music-industry premium.

LAYOUT: app-shell with dark theme by default (toggleable). Full-screen
player with collapsible right sidebar.

THEME: Dark Canvas #0F0E17 main bg, Dark Surface #1A1A2E for panels,
Warm Cream #FFF8E7 text, accents Crimson + Violet.

TOP NAV (56px, compact, dark):
- Left: back arrow + course title (truncated) + chevron dropdown to switch
  lessons quickly.
- Center: breadcrumb "Module 2 / Lesson 5".
- Right: settings gear, help icon, avatar.

MAIN AREA (2-column split, sidebar 380px):

LEFT — VIDEO PLAYER (80% height top):
- 16:9 video with custom controls bar (50px bottom overlay, gradient fade):
    • Play/pause, 10s skip back, 10s skip forward
    • Timeline scrubber with chapter markers (small vertical ticks with
      tooltip labels), progress filled in crimson-violet gradient
    • Elapsed / total time (JetBrains Mono)
    • Volume slider
    • Playback speed dropdown (0.5x – 2x)
    • CC / subtitles
    • Quality (Auto / 1080p / 720p / 480p / 360p)
    • Picture-in-picture
    • Theater mode toggle
    • Fullscreen
- Loop-section button (bracket icon) — unique to music LMS: lets users
  A–B loop practice segments. On click, lets them mark start and end
  timestamps; stored in sidebar under "My loops".

BELOW VIDEO (20% height) — TABS:
- Tabs: "Notes" / "Transcript" / "Resources" / "Discussion" / "My loops".
- Notes tab: rich text editor where user types timestamped notes;
  each note has the current timestamp auto-attached; click a note's
  timestamp to jump the video.
- Transcript tab: scrolling transcript auto-highlighting current sentence
  in Crimson. Search within transcript.
- Resources tab: downloadable files — chord sheets PDF, backing tracks MP3,
  MIDI stems, tabs — each with its own download icon.
- Discussion tab: comments thread for this lesson.
- My loops tab: saved A–B loop segments.

RIGHT SIDEBAR — CURRICULUM PANEL (full-height, collapsible via arrow icon):
- Top: course title + progress bar (Crimson-Violet fill).
- Module accordions, each lesson row 52px height:
    • Play icon or check icon (completed = Stage Green check) left
    • Lesson title + duration
    • Currently playing = Crimson left border 3px + Crimson soft bg
    • Locked lessons = lock icon + muted
    • Lesson hover: cream soft highlight
- Bottom sticky "Mark as complete" primary Crimson button (disables when done;
  shows green check "Completed ✓").

AUTO-NEXT CARD (when lesson ends):
- Full-screen overlay card: "Next up in 8s… Cancel | Play now" with
  next-lesson thumbnail preview. Circular countdown progress.

KEYBOARD SHORTCUTS TOOLTIP (?, bottom-right popup):
- Space = play/pause, ← → = seek, J/L = 10s back/fwd, M = mute,
  F = fullscreen, C = captions, N = next lesson, [ ] = loop start/end.

MOBILE: sidebar becomes bottom sheet accessible via "Lessons" button.
Tabs move below the video. Swipe left/right to switch tabs.
```

---

## 20. CERTIFICATE PAGE

```
Design the certificate earned page — triumphant, shareable, official.

LAYOUT: top nav + centered 960px content on Warm Cream bg with subtle
Spotlight Gold starburst SVG background watermark.

SECTION 1 — EARNED BANNER (70px, Gold gradient):
- "🏆 Certificate earned — [Course Name]" text Warm Cream Newsreader 500.
- Right: share + download + print icon buttons.

SECTION 2 — CERTIFICATE PREVIEW CARD (large, centered 800x560px, shadow-lg):
- Off-white #FFFDF5 bg, Gold gradient 4px border.
- TOP: Harmony logo + wordmark centered.
- H1 "Certificate of Completion" Newsreader 700 40px.
- "This is to certify that"
- Student name in Newsreader 600 48px Crimson (rendered large).
- "has successfully completed"
- Course name in Newsreader 500 28px #1A1A2E.
- Completion date + total hours.
- Left signature: Instructor signature SVG + "[Instructor Name],
  Instructor".
- Right signature: Harmony founder signature + "Harmony LMS".
- Bottom: Unique certificate ID (JetBrains Mono) + QR code linking to
  public verify URL.
- Subtle music-notation SVG decoration at corners.

SECTION 3 — ACTIONS ROW:
- 4 large action buttons (180px each):
    🖼 "Download PDF" primary Crimson
    🔗 "Share on LinkedIn" Accent Violet
    📱 "Share on Instagram" outlined
    🔒 "Verify online" ghost with link icon.

SECTION 4 — SHARE PREVIEW:
- Small social card preview showing how it'll look when shared:
  LinkedIn preview + Instagram story preview tabs.

SECTION 5 — CONGRATULATIONS CARD:
- Warm: "What's next?" with 3 recommended next courses.

SECTION 6 — ALL MY CERTIFICATES:
- Link back to "View all certificates" on profile.

PUBLIC VERIFY PAGE (separate route, /verify/[cert_id]):
- Simple card: "This certificate is authentic" green check + Student name +
  course + date + Harmony logo.

MOBILE: certificate preview scales to fit width, actions become 2x2 grid.
```

---

## 21. MY COURSES PAGE (NEW)

```
Design the "My Courses" page — user's personal learning library.

LAYOUT: top nav + 1280px content.

SECTION 1 — HEADER:
- H1 "My courses" + subtitle "[N] courses in progress • [M] completed".
- Right: view toggle (grid/list) + sort dropdown.

SECTION 2 — TABS:
- All / In progress / Completed / Wishlisted / Archived.
- Each tab shows count badge.

SECTION 3 — COURSE GRID:
- Same course card spec as catalog but with stronger progress emphasis:
    • Progress bar much more prominent (8px height, gradient).
    • "Last watched: Lesson 5 of 18 • 2 days ago" subtitle.
    • Primary button "Continue" instead of "Enroll".
    • Ellipsis menu top-right: Mark complete / Archive / Remove / Share.

SECTION 4 — ACHIEVEMENTS STRIP (bottom, horizontal):
- "Your badges" horizontal scroll: locked/unlocked badges (streak, genre
  mastery, first certificate, etc.) with Gold glow when unlocked.

EMPTY STATE: illustrated guitar-in-case SVG + "You haven't started any
courses yet. Browse the library →" CTA.
```

---

## 22. WISHLIST PAGE (NEW)

```
Same layout as My Courses but:
- Header: "Saved for later" + "[N] courses in your wishlist".
- Course cards show "Remove from wishlist" heart-filled icon + "Start now"
  CTA (plays lesson 1).
- Empty state: heart SVG + "Save courses you want to come back to."
```

---

## 23. SEARCH RESULTS PAGE (NEW)

```
Design the global search results page — triggered by top-nav search.

LAYOUT: top nav + 1280px content.

SECTION 1 — SEARCH HEADER:
- Large search input (pre-filled with query) at top.
- "Results for 'fingerpicking' — 247 results" H2.
- Result type tabs: All / Courses / Lessons / Instructors / Community posts /
  Articles. Count badges per tab.

SECTION 2 — ACTIVE TAB CONTENT:
- If "All": mixed result types grouped in sections.
    • "Courses (12)" section with horizontal scroll card row.
    • "Instructors (3)" horizontal avatar cards.
    • "Lessons (45)" list with lesson title + course name + duration.
    • "Community (34)" thread list preview.
- If individual tab: grid/list of that type with pagination.

SECTION 3 — NO RESULTS STATE:
- "No matches for '[query]'. Try a broader search or [browse by genre →]".

SECTION 4 — RECENT + POPULAR SEARCHES (shown if search empty):
- 2-column: "Your recent" chip list / "Trending" chip list.
```

---

## 24. INSTRUCTOR / ARTIST PROFILE PAGE (NEW)

```
Design the instructor profile page — a public page where users can explore
an artist's catalog, bio, and follow them.

LAYOUT: top nav + full-width hero + 1280px content.

SECTION 1 — HERO (400px, cinematic):
- Full-width background image (artist performing, studio shot) with a
  gradient overlay from transparent to #1A1A2E at bottom 50%.
- Centered content:
    • Avatar 160px with Spotlight Gold 3px ring.
    • Name Newsreader 700 64px Warm Cream.
    • Verified tick + role ("Grammy-winning producer • Guitarist").
    • Follower count + "Follow" primary Crimson button + share icon.
    • Social icons row (Instagram, Spotify, YouTube).

SECTION 2 — ABOUT:
- 2-column: left 60% long bio with credentials list below.
- Right 40%: quick facts card (Hometown, Years teaching, Genres, Languages).

SECTION 3 — COURSES (4-card grid):
- All courses by this instructor.

SECTION 4 — UPCOMING LIVE SESSIONS:
- 2 session cards with reserve CTA.

SECTION 5 — FEATURED QUOTE OR VIDEO:
- Large quote in Newsreader italic OR embedded intro video.

SECTION 6 — STUDENT REVIEWS:
- Aggregated reviews across all their courses.

SECTION 7 — DISCOGRAPHY STRIP (music-industry unique):
- Small album artwork row: "Selected works" horizontal scroll of 6-8
  album covers with titles + year.
```

---

## 25. LIVE SESSIONS / MASTERCLASS PAGE (NEW)

```
Design the live sessions hub — where users browse and reserve spots for
live masterclasses.

LAYOUT: top nav + 1280px content.

SECTION 1 — HERO:
- Dark #1A1A2E band, 320px.
- H1 Warm Cream Newsreader 600 56px "Live with the legends."
- Subtitle: "Weekly masterclasses with your favorite artists. Reserve your
  spot — subscribers only."
- Floating "Live now" pulse badge if any session is live currently.

SECTION 2 — FILTER CHIPS ROW:
- This week / This month / Genre filters / Instructor filters.

SECTION 3 — LIVE NOW CARD (if active):
- Large hero card with live violet bg, pulse dot, "JOIN LIVE" large CTA.

SECTION 4 — UPCOMING SESSIONS (grid):
- Large poster cards 320x440:
    • Poster image full-bleed top 260px.
    • Live badge (violet) on image.
    • Date + time strip (e.g. "Sat, 25 Apr • 8:00 PM IST").
    • Session title Newsreader 600 24px.
    • Instructor row (avatar + name + verified).
    • "Reserved (453)" count + "Reserve spot" Crimson CTA.
    • Small countdown timer: "Starts in 2d 14h 22m".

SECTION 5 — PAST SESSIONS (replay library):
- Same card grid but with "Replay" CTA + session duration.

SESSION DETAIL MODAL (opens on card click):
- Large modal with trailer video, description, instructor bio, agenda,
  reserve button, add-to-calendar icons (Google / Apple / Outlook).

MOBILE: single column, countdown timer more prominent.
```

---

## 26. COMMUNITY / DISCUSSION PAGE (NEW)

```
Design the community page — threaded discussions, Q&A, progress-sharing.

LAYOUT: top nav + 3-column grid (left sidebar 220px, main 720px, right
sidebar 280px).

LEFT SIDEBAR — CATEGORIES:
- "All posts" / "Following" / "My posts" / "Saved" plus category list
  (Guitar / Piano / Production / Theory / Feedback / Gear / Off-topic).
- New post button primary Crimson.

MAIN COLUMN — FEED:
- Filter tabs: "Latest" / "Top" / "Unanswered" / "Featured".
- Create-post card top (quick): avatar + "Share something with the
  community…" input that expands into rich editor on click.
- Post cards:
    • Avatar + name + instrument chip + time.
    • Title (if present) Newsreader 500 20px + body preview 3 lines.
    • Media attachments (image/audio waveform player/video embed).
    • Reaction bar: ♥ count, 💬 replies, ↗ share, 🔖 save, ⋯ menu.
    • Top replies collapsed; click to expand.
    • Instructor reply highlighted with a Crimson "Instructor" badge + soft tint.

RIGHT SIDEBAR:
- "Trending this week" — 5 threads list.
- "New this week" — top 3 new members.
- Community guidelines short card + "Read full rules" link.

POST DETAIL PAGE (separate route):
- Full post at top + rich-text reply editor below + threaded replies.

MOBILE: sidebars become top collapsible drawers + bottom nav.
```

---

## 27. NOTIFICATIONS PAGE

```
Design the dedicated notifications page (different from the bell-dropdown).

LAYOUT: top nav + centered 720px content.

HEADER:
- H1 "Notifications"
- Tabs: All / Unread / Mentions / System.
- Actions right: "Mark all as read" ghost + "Settings" gear icon.

NOTIFICATION LIST:
- Each row 80px:
    • Left: icon chip color-coded by type (Green = payment, Violet = live,
      Crimson = course, Gold = certificate).
    • Middle: notification text (with bold for key noun) + time ago.
    • Right: action button contextual ("View", "Reply", "Pay now").
    • Unread: Warm Cream row bg + Crimson 3px left border + dot on left.
- Group by "Today", "Yesterday", "This week", "Earlier".

EMPTY STATE: "All caught up." bell SVG + gentle message.

NOTIFICATION PREFERENCES link at bottom → Settings → Notifications.
```

---

## 28. SETTINGS PAGE (NEW)

```
Design the account settings page — with left sidebar tabs and right panel.

LAYOUT: top nav + 2-column (sidebar 240px + main 880px), max 1200px.

LEFT SIDEBAR:
- Tabs: Account / Password & Security / Notifications / Subscription /
  Payment methods / Language & region / Appearance / Data & privacy / Danger zone.
- Active tab: Crimson left 3px border + Primary Soft bg.

MAIN PANEL — VARIES BY TAB:

TAB: ACCOUNT — profile photo + basic info form (similar to Profile Edit).

TAB: PASSWORD & SECURITY:
- Change password form.
- 2FA section: "Two-factor auth" toggle + setup flow (authenticator app /
  SMS). Shows active sessions with "Log out" action per row.

TAB: NOTIFICATIONS:
- Grouped toggles: Email / Push / In-app for each category
  (New courses, Live sessions, Comments, Payments, Marketing).
  Grid of toggle switches.

TAB: SUBSCRIPTION:
- Current plan card + "Change plan" + "Cancel subscription" red link.
- Upcoming renewal info. Payment history link.

TAB: PAYMENT METHODS:
- Saved cards list (card brand icon + last 4 digits + expiry + default badge).
- "Add payment method" primary CTA.
- Remove / Set as default actions per card.

TAB: LANGUAGE & REGION:
- Language dropdown (with flags). Time zone dropdown. Currency dropdown.
  Date format radio.

TAB: APPEARANCE:
- Theme: Light / Dark / Auto (3 visual swatches).
- Font size: Small / Medium / Large segmented.
- Reduced motion toggle.

TAB: DATA & PRIVACY:
- Download my data button. Privacy settings toggles.

TAB: DANGER ZONE:
- "Deactivate account" outlined red.
- "Delete account permanently" filled red with confirmation flow.

STICKY SAVE BAR if any change made (same as Profile Edit).

MOBILE: sidebar becomes collapsible accordion at top.
```

---

## 29. HELP & SUPPORT PAGE (NEW)

```
Design the help/support center page.

LAYOUT: top nav + centered 1120px content.

SECTION 1 — SEARCH HERO (240px Warm Cream with waveform SVG):
- H1 "How can we help?" + large search input below with placeholder
  "Search help articles, FAQs, guides…".

SECTION 2 — QUICK LINKS (6-card grid):
- Each 180x160 card with icon + title + small description.
- Categories: Getting started / Subscription & billing / Video playback /
  Certificates / Community rules / Account & privacy.

SECTION 3 — POPULAR ARTICLES:
- List of 10 top articles: Newsreader 500 20px title + 1-line description +
  "Read article →".

SECTION 4 — CONTACT CARD:
- 2-column: left "Still stuck?" + support email + expected reply time.
- Right: live chat widget "Chat with us" Crimson button (opens Intercom-like widget).

SECTION 5 — STATUS + COMMUNITY LINKS (thin band):
- System status: green dot "All systems operational" + "View status page".
- "Join our community" link to community page.
```

---

# 🛠 ADMIN-SIDE PAGE PROMPTS

All admin pages use the **Admin sidebar navigation** (dark #1A1A2E, 260px, as spec'd in the design system) + top bar with search, notifications, and admin avatar. Admin theme is the same Harmony brand but with denser data layouts and more tables.

---

## 30. ADMIN LOGIN (NEW)

```
Design a minimal, focused admin login page — separate subdomain/route from
user login for security and brand clarity.

LAYOUT: full-screen centered card.

BACKGROUND: Dark Canvas #0F0E17 with an extremely subtle dot-grid pattern
and a faint Vinyl gradient radial glow behind the card.

CARD (centered, max 440px, 32px padding, 24px radius, Dark Surface #1A1A2E bg):
- Top: Harmony logo + "ADMIN" caption tag uppercase Spotlight Gold 11px +6% tracking.
- H2 Warm Cream Newsreader 600 32px "Admin sign-in"
- Subtext: "Authorized personnel only."
- Email input, password input (dark theme inputs with cream text).
- 2FA code input (if enabled) — 6-digit OTP boxes.
- "Sign in" primary Crimson full-width.
- "Forgot password? Contact super admin" tiny link.
- Footer: security note + "All activity is logged" lock icon.

NO SIGNUP OPTION. Aggressive rate-limiting UX messaging on failed attempts.
```

---

## 31. ADMIN DASHBOARD

```
Design the admin dashboard — overview of key metrics, recent activity, quick actions.

LAYOUT: admin sidebar + main content area 1200px max.

TOP SECTION — GREETING + DATE RANGE:
- "Hello, [Admin Name]." H2 + "Here's what's happening on Harmony." subtext.
- Date range picker top-right: Today / 7d / 30d / 90d / Custom.
- "Export report" ghost button.

SECTION 1 — KEY METRICS (6 stat cards grid, 3x2):
- Each 320x140, white bg, 20px radius.
- MRR (₹), Active subscribers, New signups (30d), Course completions,
  Churn rate %, Avg session duration.
- Each card: big number Newsreader 600 40px + trend sparkline mini chart
  right + "vs last period" %  with up/down Stage Green or Error arrow.

SECTION 2 — REVENUE CHART:
- Full-width line chart 400px height, showing daily revenue.
- Legend: Subscription revenue + One-time + Refunds.
- Hover tooltip with exact values.

SECTION 3 — 2-COLUMN GRID:
LEFT — RECENT SIGNUPS (table 8 rows):
  Avatar + name + email + plan + signup date + status chip.
  Link "View all users →".
RIGHT — RECENT TRANSACTIONS (table 8 rows):
  Trans ID + user + amount + status chip + time.
  Link "View all transactions →".

SECTION 4 — 2-COLUMN GRID:
LEFT — TOP COURSES (list, 5 items):
  Thumbnail + title + views + completion rate progress bar.
RIGHT — UPCOMING LIVE SESSIONS (list, 5 items):
  Thumbnail + title + instructor + date + reserved count.

SECTION 5 — NOTIFICATIONS & ALERTS:
- Warning cards for things needing attention:
    ⚠ 12 payments failed in last 24h — [Review]
    📢 3 pending course approvals — [Approve]
    💬 8 unresolved support tickets — [View]

QUICK ACTIONS FLOATING BUTTON (bottom-right):
- "+ New" FAB that expands to: New course, New announcement, New coupon.
```

---

## 32. COURSE MANAGEMENT LIST

```
Design the admin course management page — data-dense list.

LAYOUT: admin sidebar + main 1280px content.

HEADER:
- H1 "Courses" + count "247 courses".
- Right: Search input + "Import CSV" ghost + "+ New course" primary Crimson.

FILTERS ROW:
- Status (All / Published / Draft / Archived / Under review) segmented control.
- Genre dropdown. Instructor dropdown. Level dropdown. Date range.

BULK ACTIONS BAR (appears when rows selected):
- "[N] selected" + Publish / Archive / Delete / Export dropdown.

TABLE:
- Columns: checkbox | Thumbnail | Title (+ genre chip underneath) | Instructor
  (avatar+name) | Lessons | Duration | Enrolled | Rating | Revenue (₹) |
  Status chip | Last updated | Actions (eye/edit/archive/more).
- Sortable columns with arrow icon.
- Row hover: Warm Cream tint + action buttons more visible.
- Status chips: Published (Green), Draft (amber), Under review (Violet),
  Archived (grey).

PAGINATION: standard with rows-per-page selector (10/25/50/100).

EMPTY STATE: illustrated empty folder + "No courses yet. Create your first one."
```

---

## 33. COURSE CREATE / EDIT (NEW, detailed)

```
Design the course creation/edit page — multi-step or single-page wizard.
Single-page with sticky sections is recommended.

LAYOUT: admin sidebar + main 1040px max.

TOP BAR (sticky):
- Left: back arrow + "Create course" (or course name being edited) + status
  chip (Draft).
- Right: Preview button (opens student-view modal) + "Save draft" ghost +
  "Publish" primary Crimson.
- Unsaved-changes amber banner if dirty.

LEFT SECTION NAV (sticky, 220px):
- Sections: Basics / Media / Curriculum / Pricing & access / SEO / Settings.
- Indicator dots per section (filled when complete).

MAIN FORM PANEL:

SECTION 1 — BASICS:
- Title input (prominent, large).
- Subtitle input.
- Description rich-text editor (toolbar with bold/italic/lists/link/media).
- Genre multi-select chips.
- Instrument multi-select.
- Level select (Beginner / Intermediate / Advanced).
- Language dropdown.
- Tags input (free-text chips).

SECTION 2 — MEDIA:
- Cover image uploader (drag-drop, 16:9 ratio, recommended 1920x1080).
- Preview image cropper.
- Trailer video: upload or paste URL. Shows embed preview.
- Instructor intro video (optional).

SECTION 3 — CURRICULUM:
- Modules list (drag-reorderable with grip icon).
- Each module has: title, description, lessons list (drag-reorderable).
- Add-lesson CTA per module. Lesson rows show title, duration (auto-detected
  after upload), type icon (video/reading/quiz), edit/delete.
- "+ Add module" button.
- Sticky summary footer: "3 modules • 18 lessons • ~4h 32m total".

SECTION 4 — PRICING & ACCESS:
- Radio: "Included in subscription" / "Free preview" / "Paid add-on".
- If subscription-only: lock level dropdown (Pro / Master).
- Preview lessons selector: mark which lessons are free preview.
- Publish schedule: "Publish now" / "Schedule" with date-time picker.

SECTION 5 — SEO:
- Meta title, meta description, slug (auto-generated, editable), OG image.

SECTION 6 — SETTINGS:
- Certificate on completion toggle.
- Discussion enabled toggle.
- Allow downloads toggle.
- Early access / Pre-launch toggle.

LESSON EDIT MODAL (opens from curriculum):
- Full-height right drawer 720px wide.
- Lesson title, description, video uploader (drag-drop, progress bar),
  transcript upload/auto-generate, resources upload (PDF, MP3, MIDI),
  chapter markers editor (see Lesson Upload below), quiz builder toggle.

RESPONSIVE: section nav becomes a dropdown on mobile.
```

---

## 34. LESSON UPLOAD + TIMESTAMP EDITOR (NEW, critical for music LMS)

```
Design the lesson upload + timestamp/chapter marker editor — a focused tool
for defining chapters within a video lesson.

LAYOUT: full-screen editor, max 1280px.

TOP BAR: back arrow + "Editing: [Lesson Title]" + "Save" primary + "Cancel".

SECTION 1 — VIDEO UPLOADER (if no video yet):
- Large drop-zone 600x360 centered, Warm Cream bg, dashed Crimson border.
- "Drag and drop your video or click to browse" + file type helper.
- Upload progress bar in Vinyl gradient with speed/ETA.
- Post-upload: shows filename, size, resolution, duration auto-detected.

SECTION 2 — EDITOR LAYOUT (post-upload, 2-column):

LEFT 60% — VIDEO PLAYER:
- Standard player with a custom larger timeline (80px tall).
- Timeline shows chapter markers as labeled vertical ticks + colored bands
  between chapters (alternating Crimson / Violet soft tints).
- Scrubber snaps to chapter edges when dragging (toggle snap on/off).
- Current timestamp large display JetBrains Mono 18px.

RIGHT 40% — CHAPTERS PANEL:
- Header: "Chapters ([count])" + "+ Add chapter at current time" primary button.
- List of chapters (drag-reorder grip):
    • Each chapter row 72px tall.
    • Start timestamp (editable inline, e.g. "00:02:15").
    • Chapter title input.
    • Optional short description.
    • Color swatch selector (6 preset colors).
    • Actions: jump-to (arrow icon), duplicate, delete.
- "Apply to player" saves chapters to the lesson.

SECTION 3 — RESOURCES TAB (below player):
- Add-resource drop zones:
    • "Chord sheets (PDF)" — drop zone.
    • "Backing track (MP3 / WAV)" — drop zone + waveform preview on upload.
    • "MIDI / Stems (ZIP)" — drop zone.
    • "Notes (TXT / DOCX)" — drop zone.
    • "Custom files" — generic.
- Each uploaded file shown as row with filename, size, download, delete.

SECTION 4 — TRANSCRIPT:
- Tab: "Auto-generate" button with language dropdown (runs AI transcription)
  OR "Upload SRT/VTT" drop zone OR "Write manually" opens rich editor.
- Generated transcript shows with timestamps, editable.

SECTION 5 — QUIZ BUILDER (optional, inline after lesson):
- "+ Add question" button.
- Question types: MCQ / True-False / Short answer.
- Each question with options + correct answer + explanation.

SAVE FLOW: "Save draft" always available, "Publish lesson" final.
```

---

## 35. USER MANAGEMENT LIST

```
Design the admin user management page — data-dense list with filters.

LAYOUT: admin sidebar + main 1280px.

HEADER: H1 "Users" + count "12,847 users" + "Export CSV" ghost + "+ Invite user" primary.

FILTERS:
- Segmented: All / Active subscribers / Trial / Expired / Cancelled / Admins.
- Search (name/email).
- Plan dropdown. Country dropdown. Signup date range.

TABLE:
- Cols: checkbox | Avatar + Name | Email | Plan chip | Subscription status
  chip | Country | Signup date | Last active | Total spend ₹ | Actions.
- Row click opens user detail.
- Status chips: Active (Green), Trial (Violet), Expired (amber), Cancelled (red muted).

BULK ACTIONS: Send email / Change plan / Deactivate / Export selected.

EMPTY STATE: "No users match your filters."
```

---

## 36. USER DETAIL (ADMIN, NEW)

```
Design the admin view of a single user — 360 view.

LAYOUT: admin sidebar + main 1200px.

HEADER:
- Breadcrumb "Users / [Name]".
- Avatar 96px + name + email + plan + subscription status chip.
- Right actions: Impersonate (eye icon, use with caution, needs super-admin),
  Send email, Deactivate (red).

TABS:
- Overview / Subscription / Payments / Activity / Courses / Notes.

OVERVIEW TAB:
- 6 stat cards: Signup date, Last login, Total spend, Courses completed,
  Hours learned, Certificates.
- Recent activity list.

SUBSCRIPTION TAB:
- Current plan card + renewal date + history of plan changes.
- Actions: Change plan (dropdown), Apply coupon, Extend trial, Cancel subscription.

PAYMENTS TAB:
- Table of all transactions. Refund action per row.

ACTIVITY TAB:
- Chronological log: logins, courses started/completed, forum posts,
  support tickets. Filterable by type.

COURSES TAB:
- Grid of enrolled courses with progress.

NOTES TAB:
- Internal notes editor (only visible to admins) — useful for support history.
```

---

## 37. SUBSCRIPTION MANAGEMENT

```
Design the admin subscription overview page.

LAYOUT: admin sidebar + main 1280px.

HEADER: H1 "Subscriptions" + toggle "Plans / Subscribers".

PLANS TAB:
- 3 plan cards (Starter/Pro/Master) editable with "Edit plan" action per card.
- Edit modal: name, price monthly/yearly, features list, trial days, visibility.
- "+ Create new plan" button.
- Coupons subsection: list of coupons (code, discount, usage count, expiry,
  status) + "Create coupon" CTA.

SUBSCRIBERS TAB:
- Filters: plan / status / renewal date.
- Table: User + Plan + Started + Next billing + Amount + Status + Actions
  (pause, extend, cancel, refund).
- Bulk actions for email campaigns.
```

---

## 38. PAYMENT MONITORING

```
Design the admin payment monitoring page — transaction-level view.

LAYOUT: admin sidebar + main 1280px.

HEADER:
- H1 "Payments" + today's revenue chip (live).
- Filters: status / date range / method / amount range.
- "Export" + "Reconcile with Razorpay" button.

KEY STATS STRIP (4 cards):
- Gross revenue today / Successful count / Failed count / Refunded count.

MAIN TABLE:
- Cols: Trans ID (copyable) | User | Amount | Method (icon) | Gateway
  (Razorpay) | Status chip | Timestamp | Webhook status | Actions (view /
  refund / resend webhook).

ALERTS PANEL (right sidebar, collapsible):
- "Failed webhooks (3)" expandable list.
- "Disputes (1)" expandable list.

TRANSACTION DETAIL DRAWER (opens on row click):
- Full transaction JSON view (formatted).
- Razorpay payment ID + order ID links (external).
- Event timeline: Order created → Payment initiated → Webhook received →
  Subscription activated.
- Refund action (full / partial with reason dropdown).
```

---

## 39. NOTIFICATION CENTER / BROADCAST (ADMIN)

```
Design the admin notification creation page — broadcast to users or segments.

LAYOUT: admin sidebar + main 1040px.

HEADER: H1 "Broadcasts" + "New broadcast" primary.

TABS: Drafts / Scheduled / Sent / Templates.

SENT TABLE: Title | Audience | Sent on | Open rate | CTR | Actions.

NEW BROADCAST FORM:
- Step 1 — Audience: "All users" / "Segment" builder (filters: plan, genre,
  last active, country, etc.). Live preview of audience count.
- Step 2 — Channels: toggle grid — In-app / Email / Push / SMS.
- Step 3 — Content: subject line + preheader + body rich editor (email).
  Templates dropdown. Merge tags ({first_name}, {course_name}, etc.).
- Step 4 — Schedule: Send now / Schedule for / Repeat.
- Step 5 — Review: summary card + "Send test to myself" + "Send" primary CTA.

TEMPLATE LIBRARY: pre-built templates for welcome, expiry reminder, payment
success, course update — each with preview thumbnail + "Use template".
```

---

## 40. ADMIN ANALYTICS PAGE (NEW)

```
Design the admin analytics page — deep insights across revenue, users,
engagement, content.

LAYOUT: admin sidebar + main 1280px.

TOP: Tabs — Overview / Revenue / Users / Engagement / Content.

OVERVIEW TAB:
- Date range picker + compare-to toggle.
- 8 KPI cards row: MRR, ARR, ARPU, LTV, CAC, Churn rate, Trial conversion %,
  Active users (DAU/WAU/MAU).
- Revenue trend chart (line).
- Signups vs Subscriptions funnel (bar).
- Top countries map (India focus).

REVENUE TAB:
- Waterfall chart of revenue components.
- Cohort retention heat map.
- Plan mix donut chart.

USERS TAB:
- Growth chart.
- Segment builder with saved segments.
- Geographic distribution map.
- Signup sources pie (organic / referral / social / ads).

ENGAGEMENT TAB:
- Course start / completion funnel.
- Average watch time per course.
- Day-of-week heatmap of logins.
- Feature adoption table.

CONTENT TAB:
- Top courses by revenue, enrollments, rating, completion rate.
- Under-performing courses flagged.
- Instructor leaderboard.

Each chart: hover tooltips, downloadable as PNG / CSV, toggle legend.
Export full report as PDF top right.
```

---

## 41. ADMIN SETTINGS / SITE CONFIG (NEW)

```
Design the admin site configuration page.

LAYOUT: admin sidebar + main 960px.

SIDEBAR TABS: General / Branding / Payments / Email / Integrations / 
Domain & SEO / Security / API keys / Team / Audit log.

GENERAL: site name, tagline, timezone, currency, support email.

BRANDING: logo uploader, favicon, theme colors (swatches editable), default
certificate template uploader.

PAYMENTS: Razorpay keys (masked with show toggle), webhook URL (copyable),
test mode toggle.

EMAIL: SMTP settings, sender name, sender email, test-email button, email
template overrides.

INTEGRATIONS: cards for Google Analytics, Meta Pixel, Mixpanel, Segment,
Intercom, Zapier. Each card with status + configure button.

DOMAIN & SEO: custom domain setup, default meta tags.

SECURITY: session timeout, IP whitelist, 2FA enforcement for admins,
password policy.

API KEYS: list + generate new + revoke.

TEAM: list of admin users with roles (Super admin / Admin / Editor /
Support). Add team member modal. Role permissions matrix.

AUDIT LOG: append-only log of all admin actions with filters.
```

---

## 42. REFUND / DISPUTE MANAGEMENT (NEW)

```
Design the admin refund/dispute management page.

LAYOUT: admin sidebar + main 1120px.

HEADER: H1 "Refunds & disputes" + 3 KPI chips: Pending (amber), Approved
this month (green), Disputed (red).

TABS: Pending / Approved / Rejected / Disputes / All.

TABLE: Request date | User | Transaction ID | Amount | Reason | Status | Actions.

REFUND DETAIL DRAWER:
- Transaction summary card.
- User summary + past refund history chip.
- Reason (dropdown classification + user's note).
- Admin actions: Approve full refund / Approve partial (with amount input) /
  Reject (with reason) / Ask user for more info.
- Internal notes editor.
- Timeline of events.

DISPUTES TAB (Razorpay-initiated chargebacks):
- Each dispute card with deadline countdown + evidence submission form
  (upload invoice, communication, proof of delivery).
```

---

# 📧 EMAIL TEMPLATES (5 DESIGNS)

Render these as email-safe HTML layouts in Stitch. Max-width 600px, table-based
safe, all images with alt text.

---

## 43. WELCOME EMAIL

```
Subject: Welcome to Harmony — your stage is set 🎸

HEADER (120px):
- Warm Cream bg. Centered Harmony logo 32px Newsreader + music note.

HERO BLOCK (Vinyl gradient bg, 320px):
- H1 Warm Cream Newsreader 600 36px "Welcome, [First Name]."
- Subtitle: "Your front-row seat to music mastery starts now."
- Primary CTA "Start learning →" Spotlight Gold button.

BODY BLOCK (Warm Cream bg, 40px padding):
- 3 steps to get started (numbered circles + title + short description):
    1. Pick your genres and instruments.
    2. Start your first course.
    3. Join the community.
- Quote from founder italic Newsreader.

FOOTER: links row (Help / Unsubscribe / App store) + copyright +
social icons in warm neutral.
```

---

## 44. PAYMENT SUCCESS EMAIL

```
Subject: You're in — Harmony Pro is active 🎉

HEADER: same as Welcome email.

CENTERED CHECK ICON (Stage Green 80px) + H1 "Payment confirmed."

ORDER CARD (white bg, shadow, 20px radius):
- Plan name + amount + transaction ID + date.
- "Download invoice" link.

CTA: "Go to dashboard →" primary.

FOOTER: "Questions? Reply to this email." + legal.
```

---

## 45. EXPIRY REMINDER EMAIL

```
Subject: Your Harmony Pro renews in 3 days

HEADER same.

HERO BLOCK (Amber #FDEFD9 soft bg):
- H2 "Your subscription renews in 3 days."
- "You'll be charged ₹499 on [Date] using your [Card ending in 4242]."
- 2 CTAs: "Manage plan" primary + "Update payment method" ghost.

BELOW: 3 reasons to keep Pro (benefits bullets).

FOOTER: "Don't want to renew? [Cancel anytime]" + standard footer.
```

---

## 46. PASSWORD RESET EMAIL

```
Subject: Reset your Harmony password

HEADER same.

BODY:
- H2 "Reset your password"
- Paragraph: "We received a request to reset your password. Click below
  to set a new one. This link expires in 60 minutes."
- Primary CTA "Reset password" Crimson button.
- "Didn't request this? You can safely ignore this email." muted.
- Security tip card: "For your safety, never share this link."

FOOTER: "Sent by Harmony Security Team" + standard footer.
```

---

## 47. COURSE UPDATE EMAIL

```
Subject: New from [Instructor Name] — [Course Title]

HEADER same.

HERO IMAGE: course cover 600x320 with gradient overlay + course title on top.

BODY:
- H2 "[Course Title] is live."
- Instructor row (avatar + name + tag).
- 3-bullet "What's inside" with Stage Green checks.
- CTA "Watch now →" primary.
- Below: 3 recommended other courses from same instructor (small cards).

FOOTER: preferences link ("Don't want updates about this instructor?
Manage preferences") + standard.
```

---

# 🚨 POLISH & STATE PAGES

---

## 48. 404 / NOT FOUND

```
Full-screen. Vinyl gradient background muted 15% opacity. Centered card:
- Large SVG of a broken vinyl record with a music note falling off.
- H1 Newsreader 600 72px "This track got lost."
- Subtext: "The page you're looking for isn't here — but there's plenty
  more to explore."
- 2 CTAs: "Back to dashboard" primary + "Browse courses" ghost.
- 3 suggested courses row below.
```

---

## 49. EMPTY STATES PATTERN

```
Every empty list/grid should follow this pattern:
- Illustrated SVG (muted, brand-aligned) 120x120 centered.
- H3 Newsreader 600 24px helpful headline ("You haven't…").
- Body paragraph 15px #6B6B7E guiding the user.
- Primary CTA linking to the action that fills the empty state.
```

---

## 50. LOADING SKELETONS

```
All data-loaded pages must use skeleton shimmers instead of spinners:
- Skeleton block: #E8DFC6 bg with a Warm Cream shimmer that sweeps
  left-to-right over 1.4s infinite.
- Match skeleton shape to final content (card-shaped blocks for cards,
  line-shaped for text lines of descending width).
- Spinners only for action-level loading (button press, form submit),
  never for page/content.
```

---

# ✅ USAGE NOTES FOR STITCH

1. **Start every generation** by pasting the DESIGN SYSTEM block (colors,
   typography, components) into Stitch's base/style prompt. This makes every
   page you generate next visually consistent.

2. **For each page prompt above**, paste the whole block — Stitch responds
   best to structural, layout-rich descriptions. Don't trim.

3. **Iterate with refinements**: after Stitch generates, refine with focused
   prompts like "Make the hero section 20% taller and switch the right image
   to a closer crop" rather than re-writing the whole thing.

4. **Component consistency**: if Stitch drifts across pages, reference
   earlier outputs: "Use the same card component I designed in the catalog
   page for these recommendation cards."

5. **Mobile versions**: generate each page for desktop first, then ask
   Stitch to "provide the mobile responsive version of this page following
   the same design system."

6. **Dark mode**: for the course player only, prompt dark mode using the
   Dark Canvas palette variant I included.

7. **Export assets**: for email templates, ask Stitch to produce
   email-safe HTML (table layouts, inline styles, max 600px width).

---

*End of Harmony LMS Stitch Prompt Pack — v1.0*
