# Enhanced Korean Marine Collagen PDP — CRO Prototype

## Project

Enhanced product detail page (PDP) prototype for **Wellbeing Nutrition's Pure Korean Marine Collagen Peptides**, built for the **Product Intern – AI B2B Sales** role at **Troopod**.

## Objective

This prototype translates a CRO audit into a decision-first PDP experience. It demonstrates how restructuring existing product information — without altering product facts, claims, or pricing — creates a clearer path from understanding to purchase.

## Source Page Locked

- **Product Page:** [Wellbeing Nutrition Korean Marine Collagen Peptides](https://wellbeingnutrition.com/products/korean-marine-collagen-peptides)
- **Variant ID:** `40790287614032` (Pack of 1, ₹1,745 / MRP ₹1,799)

## CRO Thesis

> **Wellbeing Nutrition doesn't have an information problem. It has an information-sequencing and evidence-credibility problem.**

The original product page contains strong proof and product information, but the current experience does not consistently deliver that information at the moment it is needed.

## Prioritized CRO Hypotheses (P0)

### 1. Decision-Point Proof Architecture (P0-1)
Brings minimum viable proof near the purchase decision without cluttering the buy box:
- **Exact Source Rating:** 4.74 / 5 (based on 571 verified reviews)
- **Proof Strip:** Clinically Tested, Third-Party Tested, FSSAI Registered + direct anchor to "View 4 Clinical Studies".

### 2. Information Sequencing & Progressive Disclosure (P0-2)
Separates the **Primary Shopping Journey** from **Secondary Education**:
- **Primary:** Top Announcement → Hero / Buy Box → Trust Bar → Visual Storytelling → Outcome Benefits → How to Use → Clinical Evidence → Verified Reviews → Purchase Action
- **Secondary:** Accordion-based Deep-Dive Education & 8 prioritized FAQs for shoppers seeking deeper scientific content.

### 3. Objection-Led Verified Social Proof (P0-3)
Social proof formatted around real purchase objections using verified testimonials:
- **Taste:** Shrushti ("No Fishy Taste" - "By far the best marine collagen I have tasted")
- **Skin Results:** Ashutosh J (Gurgaon), Avni R (Chennai), Priya D (Mumbai)
- **Hair & Nails:** Reena S (Bangalore)
- **Mixability:** Priya D (dissolves in coffee without a weird taste)
- **Distribution:** Implausible 74/26/0/0/0 distribution omitted; headline score 4.74 / 571 preserved.

## Secondary Enhancements (P1)

- **Dosage Clarity:** 5–10g daily recommended dose clearly displayed near the purchase box.
- **Marine / Non-Vegetarian Qualification:** Prominently tagged (`Marine-Derived Collagen · Non-Vegetarian Source`) before commitment.
- **Member / EMI Commercial Reassurance:** Extra 5% Member Discount and Snapmint interest-free EMI notes preserved.

## Source Fact Audit & Compliance Verification

| Element | Source Value | Prototype Value | Status |
|---------|--------------|-----------------|--------|
| **Product Title** | Pure Korean Marine Collagen Peptides \| Unflavored \| Combat Signs of Ageing | Pure Korean Marine Collagen Peptides (Unflavored \| Combat Signs of Ageing) | Verified Exact |
| **Rating** | 4.74 / 5 | 4.74 / 5 | Verified Exact (Fixed from 4.9) |
| **Review Count** | 571 verified reviews | 571 verified reviews | Verified Exact |
| **Pack of 1** | ₹1,745 (MRP ₹1,799) | ₹1,745 (MRP ₹1,799) | Verified Exact |
| **Pack of 2** | ₹3,418 (MRP ₹3,598) | ₹3,418 (MRP ₹3,598) | Verified Exact |
| **Pack of 3** | ₹5,019 (MRP ₹5,397) | ₹5,019 (MRP ₹5,397) | Verified Exact |
| **Pack of 4** | ₹6,476 (MRP ₹7,196) | ₹6,476 (MRP ₹7,196) | Verified Exact |
| **Description** | Boost your body's collagen levels naturally with scientifically-researched Type 1 & Type 3 Korean marine collagen peptides... | Preserved verbatim from PDP | Verified Exact |
| **Clinical Studies** | 4 Peer-Reviewed Citations | Journal of Cosmetic Dermatology (2015, 2021), J Med Food (2022), Orthopedic Reviews (2025) | Verified Exact |
| **Testimonials** | Real customer reviews | Shrushti, Ashutosh J, Avni R, Reena S, Priya D | Verified Exact |

## Visual Design System & Aesthetics

- **Deep Teal (`#007065`):** Brand authority, headings, dark science section
- **Teal (`#00A79D`):** Primary interaction, CTAs, links
- **Warm Peach (`#F5C181`):** Benefit storytelling, energy cues, savings badges
- **Cream (`#FFEECF`):** Warm background sections, proof strips
- **White (`#FFFFFF`):** Buy box container, crisp card surfaces
- **Typography:** Manrope (Google Fonts)

## File Architecture

```
troopod-cro-wellbeing-pdp/
├── index.html          # Complete PDP HTML
├── css/
│   └── styles.css      # Design system & responsive styles
├── js/
│   └── script.js       # Pack selection, quantity, accordions, gallery & filters
├── README.md           # Documentation
└── .gitignore
```

## Local Setup & Testing

Open `index.html` in any modern web browser. Fully responsive across desktop (1440px, 1280px), tablet (768px), and mobile (390px, 375px) viewpoints.

## Disclaimer

Created for the Troopod interview assignment. Not an official Wellbeing Nutrition page. All product facts, prices, and images are sourced from the official product page for CRO evaluation purposes.
