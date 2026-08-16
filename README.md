# Enhanced Korean Marine Collagen PDP — CRO Prototype

## Executive Summary

Enhanced Product Detail Page (PDP) prototype for **Wellbeing Nutrition's Pure Korean Marine Collagen Peptides**, built for the **Product Intern – AI B2B Sales** role at **Troopod**.

This prototype translates a CRO audit into a decision-first PDP experience. It demonstrates how restructuring existing product information — without altering product facts, claims, or pricing — creates a clearer path from understanding to purchase.

---

## Source Page & Variant Locked

- **Assigned PDP URL:** [Wellbeing Nutrition Korean Marine Collagen Peptides](https://wellbeingnutrition.com/products/korean-marine-collagen-peptides)
- **Exact Variant Context:** `40790287614032` (Pack of 1, ₹1,745 / MRP ₹1,799)
- **Scope:** Optimization of **one specific PDP**, grounded strictly in verified source data.

---

## Strategic CRO Thesis

> **Wellbeing Nutrition doesn't have an information shortage. It has an information-sequencing and decision-friction problem.**

The original product page contains strong proof and product information, but the current experience does not consistently deliver that information at the moment it is needed.

The redesign optimizes the user journey through five distinct states:
`UNDERSTAND → TRUST → CHOOSE → BUY → EXPLORE`

---

## CRO Decision Framework & Hypothesis Mapping

| Change | User Friction Addressed | Experiment Hypothesis | Primary Metric | Guardrail Metric |
|--------|-------------------------|-----------------------|----------------|------------------|
| **1. Decision-Point Proof Strip** | Clinical evidence and quality certifications are buried deep below the fold, creating hesitation at the buy box. | Placing concise proof (Clinically Tested, Third-Party Tested, FSSAI) directly above the purchase decision reduces uncertainty. | **Add-to-Cart Rate** | Exit rate from hero |
| **2. Clear Commercial Price Hierarchy** | Complex member discounts and MRP strikethroughs confuse per-unit value. | Formatting price as Primary (Current), Secondary (MRP/Discount), and Tertiary (Member 5% OFF) reduces price comprehension friction. | **Add-to-Cart Rate** | Variant selection rate |
| **3. Progressive Disclosure Architecture** | Dense scientific copy mixes with primary purchase flows, inducing cognitive fatigue. | Separating the primary shopping flow from deep-dive education via expandable accordions reduces drop-off. | **Primary Flow Completion** | Scroll depth / Exit rate |
| **4. Objection-Led Verified Reviews** | Generic 5-star praise does not resolve specific purchase hesitations (e.g., fishy taste). | Structuring real reviews by objection themes (Taste, Skin, Hair/Nails, Mixability) directly resolves doubt. | **Review Filter Engagement** | Bounce rate |
| **5. AI Product Assistant Card** | Shoppers abandon the page to search for quick factual answers (dosage, marine source). | Providing an inline AI assistance entry point with instant verified answer chips reduces research bounce. | **AI Engagement Rate** | Add-to-Cart Rate |
| **6. Global Header + PDP Anchor Nav** | Text-only nav isolates the PDP from the website ecosystem; shoppers lack quick anchor jumps. | Combining global commerce header (Shop All, Search, Cart) with secondary PDP anchors enables smooth site & section navigation. | **Navigation CTR** | Time to ATC |
| **7. Related Product Discovery** | The PDP becomes a conversion dead-end for users seeking complementary health items. | Adding an lower-page discovery section with authentic packaging fidelity drives multi-product consideration. | **Related Product CTR** | Primary PDP conversion |
| **8. Restored Quality & Brand Proof** | Brand-level credibility (5M+ customers, US FDA facility) is disconnected from product quality facts. | Separating product quality facts (Mercury-Free, No Added Sugar) from brand-level scale highlights builds full-funnel trust. | **Cart Initiation** | Overall session duration |

---

## Experimentation Metrics & Measurement Plan

### Primary Metrics
- **Add-to-Cart Rate (ATC %):** Main conversion indicator for the PDP.
- **Variant Selection Rate:** Engagement with Pack of 1, 2, 3, or 4 selector cards.
- **CTA Interaction Rate:** Clicks on primary Buy Box CTA and sticky mobile CTA.

### Secondary Metrics
- **Scroll Depth:** Progression past Hero, Benefits, Science, and Reviews.
- **Review Theme Engagement:** Interaction with Taste, Skin, Hair/Nails, and Mixability filters.
- **Clinical Evidence Engagement:** Clicks on "View 4 Clinical Studies" anchor and DOI cards.
- **AI Assistant Engagement:** Interactions with quick-answer chips.
- **Related Product CTR:** Clicks to explore Slow Multivitamins, Melts Hair, or Daily Greens.
- **Revenue per Session (RPS):** Downstream value impact of pack upgrades and cross-sells.

### Guardrail Metrics
- **Page Exit / Bounce Rate:** Ensuring detailed content does not overwhelm users.
- **Primary Product ATC Rate:** Ensuring related product cards do not cannibalize the core collagen purchase.
- **Page Load Performance:** Lightweight CSS/JS ensuring zero render latency.

---

## Absolute Source Fact Audit & Compliance Checklist

| Element | Exact Source PDP Value | Prototype Implementation | Compliance Status |
|---|---|---|---|
| **Product Title** | Pure Korean Marine Collagen Peptides \| Unflavored \| Combat Signs of Ageing | `Pure Korean Marine Collagen Peptides` (Unflavored \| Combat Signs of Ageing) | Verified Verbatim |
| **Rating** | 4.74 / 5 | `4.74 / 5` | Verified Exact (Preserved 4.74) |
| **Review Count** | 571 verified reviews | `571 verified reviews` | Verified Exact |
| **Pack of 1** | ₹1,745 (MRP ₹1,799) | ₹1,745 (MRP ₹1,799) — Save ₹54 | Verified Exact |
| **Pack of 2** | ₹3,418 (MRP ₹3,598) | ₹3,418 (MRP ₹3,598) — Save ₹180 | Verified Exact |
| **Pack of 3** | ₹5,019 (MRP ₹5,397) | ₹5,019 (MRP ₹5,397) — Save ₹378 | Verified Exact |
| **Pack of 4** | ₹6,476 (MRP ₹7,196) | ₹6,476 (MRP ₹7,196) — Save ₹720 | Verified Exact |
| **Description** | *Boost your body's collagen levels naturally...* | Preserved verbatim from PDP | Verified Verbatim |
| **Trust Facts** | Clinically Proven, Mercury-Free, Heavy Metal Tested, No Added Sugar | Displayed in Product Quality Strip | Verified Exact Wording |
| **Brand Proof** | Innovation Meets Integrity, 5 Million, 20+, US FDA | Restored in Brand Proof Section | Verified Exact Wording |
| **Clinical Studies** | 4 Peer-Reviewed Publications | J. Cosmet. Dermatol. (2015, 2021), J. Med. Food (2022), Orthop. Rev. (2025) | Verified Exact Citations |
| **Testimonials** | Real source reviews | Shrushti ("No Fishy Taste"), Ashutosh J, Avni R, Reena S, Priya D | Verified Verbatim |

---

## Visual Design System & Canvas Rules

- **Palette:**
  - **Deep Teal (`#007065`):** Authority, headings, dark clinical evidence section
  - **Teal (`#00A79D`):** Primary interaction CTAs, active states, key links
  - **Warm Peach (`#F5C181`):** Outcome highlights, energy cues, savings badges
  - **Cream (`#FFEECF`):** Educational sections, warm transitions, proof strips
  - **White (`#FFFFFF`):** Primary page canvas, Buy Box, card surfaces, reviews, FAQs, related products
- **Typography:** Manrope (Google Fonts) — Enforced across 800 (Title/Price), 700 (Headings/CTA), 600 (Badges/Links), 400-500 (Body).
- **Icons:** 100% Emoji-Free. Custom linework SVG icons matching brand stroke density.

---

## File Architecture

```
troopod-cro-wellbeing-pdp/
├── index.html          # Complete PDP HTML with global nav & ecosystem features
├── css/
│   └── styles.css      # Design system & responsive breakpoint styles
├── js/
│   └── script.js       # Pack selection, quantity, accordions, gallery, filters & AI assistant
├── README.md           # CRO decision framework & fact audit documentation
└── .gitignore
```

---

## Local Setup

Open `index.html` in any modern web browser. Fully responsive across desktop (1440px, 1280px), tablet (768px), and mobile (390px, 375px) viewports.

---

## Disclaimer

This prototype is built as a CRO case study for the Troopod interview assignment. It is an **unofficial concept** using authentic Wellbeing Nutrition brand assets for evaluation purposes only. No affiliation with Wellbeing Nutrition is claimed. All CRO proposals are structured as testable hypotheses.
