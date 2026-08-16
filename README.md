# Enhanced Korean Marine Collagen PDP — CRO Prototype

## Project

Enhanced product detail page (PDP) prototype for **Wellbeing Nutrition's Korean Marine Collagen Peptides**, built as a take-home assignment for the **Product Intern – AI B2B Sales** role at **Troopod**.

## Objective

This prototype translates a CRO audit into a decision-first PDP experience. It demonstrates how restructuring existing product information — without changing the product itself — can create a clearer path from understanding to purchase.

## CRO Thesis

> **Wellbeing Nutrition doesn't have an information problem. It has an information-sequencing and evidence-credibility problem.**

The original product page contains strong proof and product information, but the current experience does not consistently deliver that information at the moment it is needed.

## Prioritized Hypotheses (P0)

### 1. Decision-Point Proof Architecture
The original page places strong trust assets (clinical studies, certifications, reviews) far below the buy box. The prototype brings concise, verified proof closer to the purchase decision — without turning the buy box into a research paper.

**Implementation:** Rating (4.9 / 571 reviews), proof strip (clinically tested, third-party tested, FSSAI registered), and "View clinical evidence" anchor placed near the CTA.

### 2. Information Sequencing
The original page combines the primary shopping journey and secondary educational content into one continuous scroll. The prototype separates these:

- **Primary journey:** Hero → Benefits → Trust → Product selection → Reviews → CTA
- **Secondary education:** Deep-dive accordion section with progressive disclosure

A shopper ready to buy can act without reading the entire page. A shopper who wants more detail can access it through expandable sections.

### 3. Review Integrity + Objection-Led Social Proof
Instead of displaying reviews as generic praise, the prototype organizes real customer testimonials around purchase objections:

- **Taste** — "No Fishy Taste" (Shrushti)
- **Visible skin results** — Ashutosh, Avni, Priya
- **Hair & nails** — Reena
- **Ease of daily use** — Priya (dissolves in coffee)

The 4.9 / 571 rating is used. The suspicious rating distribution (74/26/0/0/0) is intentionally not reproduced.

## Secondary Improvements (P1)

- **Dosage clarity:** Recommended daily dose (5–10g) presented clearly near the buy box
- **Marine / non-veg disclosure:** "Marine-Derived Collagen · Non-Vegetarian" badge visible before purchase decision
- **Credible urgency:** No artificial stock counters or fake scarcity. Purchase reassurance through verified claims only.

## Key UX Changes

| Change | CRO Rationale |
|--------|---------------|
| Proof strip near CTA | Reduces uncertainty at the decision point |
| Pack selector cards | Replaces dense form with scannable visual selection |
| Objection-led reviews | Social proof answers real purchase questions |
| Progressive disclosure | Education content doesn't block the purchase path |
| Sticky mobile CTA | Maintains purchase access during scroll |
| Marine source badge | Product qualification visible before commitment |
| Clinical evidence section | Deeper proof available through anchor navigation |

## Clinical Studies Referenced

All from the assigned product page:

1. Journal of Cosmetic Dermatology, 2015 — skin moisture and dermal collagen network
2. Journal of Cosmetic Dermatology, 2021 — triple-blind placebo-controlled study, wrinkles and elasticity
3. Journal of Medicinal Food, 2022 — low-molecular-weight collagen peptides, skin wrinkles
4. Orthopedic Reviews, 2025 — Type I collagen hydrolysate, bones, muscles and joints

## Tech

- **HTML5** — Semantic markup, accessibility attributes
- **CSS3** — Custom design system, responsive (375px–1440px)
- **JavaScript** — Vanilla JS, no external dependencies
- **Manrope** — Google Fonts
- **Responsive design** — tested at 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px

## File Structure

```
troopod-cro-wellbeing-pdp/
├── index.html          # Complete PDP prototype
├── css/
│   └── styles.css      # Design system + all component styles
├── js/
│   └── script.js       # Interactive functionality
├── README.md           # This file
└── .gitignore
```

## Running Locally

Open `index.html` in any modern browser. No build step or server required.

Product images are loaded from the Wellbeing Nutrition CDN (requires internet connection).

## Source Data Integrity

All product data in this prototype is extracted directly from the assigned product page:

- **Pricing:** Exact values from Shopify product JSON (₹1,745 / ₹3,418 / ₹5,019 / ₹6,476)
- **Rating:** 4.9 average, 571 reviews (from rendered page)
- **Reviews:** Real testimonials from the product page (Shrushti, Ashutosh J, Avni R, Reena S, Priya D)
- **Clinical studies:** 4 peer-reviewed references from the product page
- **FAQs:** 8 prioritized from 19 verified FAQs in the page's structured data
- **Product claims:** All from the assigned PDP — nothing invented

## Disclaimer

This is a prototype created for the Troopod interview assignment. It is **not** an official Wellbeing Nutrition redesign, and no affiliation with Wellbeing Nutrition is claimed. All product information is sourced from the publicly available product page for demonstration purposes only.

No claims are made about expected conversion impact. This prototype represents a **testable CRO hypothesis**, not a guaranteed performance improvement.
