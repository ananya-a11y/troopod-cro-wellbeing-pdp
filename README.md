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

## Visual Design System & Palette Direction

> **Principle: THE PRODUCT IS TEAL. THE WEBSITE UI IS NOT TEAL.**

The redesigned interface sits on a **Warm Neutral D2C Commerce Palette**, letting the actual product packaging stand out as the primary visual hero:

- **Warm Ivory Canvas (`#FFFDF7`):** Primary page background & clean container canvas.
- **Soft Light Yellow (`#FFF1C7`):** Announcement offer bar, brand proof, and decision-point proof strip.
- **Sage Green (`#DCE8D5`):** Product quality commitments, natural ingredients, and clinical authority section.
- **Warm Peach / Orange (`#F4B183`):** Beauty/wellness outcomes, savings tags, and star ratings.
- **Charcoal / Black (`#1D1D1B`):** Global header, primary typography, and **Primary Add-to-Cart CTA**.
- **White (`#FFFFFF`):** Buy box container, content cards, reviews, FAQs, and related products.
- **Typography:** **Poppins** (Google Fonts) — Enforced across 700-800 (Title/Price), 700 (Headings/CTA), 600 (Subheadings/Badges), 400-500 (Body/Metadata).

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
| **7. Related Product Discovery** | The PDP becomes a conversion dead-end for users seeking complementary health items. | Adding a lower-page discovery section using authentic CDN product images and packaging colors drives multi-product consideration. | **Related Product CTR** | Primary PDP conversion |
| **8. Restored Quality & Brand Proof** | Brand-level credibility (5M+ customers, US FDA facility) is disconnected from product quality facts. | Separating product quality facts (Mercury-Free, No Added Sugar) from brand-level scale highlights builds full-funnel trust. | **Cart Initiation** | Overall session duration |

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
| **Recommendation Assets**| Real Wellbeing Nutrition products | Slow Multivitamin for Women, Melts Hair, Daily Greens | Verified Real CDN Assets |

---

## File Architecture

```
troopod-cro-wellbeing-pdp/
├── index.html          # Complete PDP HTML with global header, Poppins & Warm Neutral palette
├── css/
│   └── styles.css      # Warm neutral design system (No Teal UI) & responsive rules
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
