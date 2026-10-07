# Squarespace Landing Page (Astro Replica)

An ultra-refined, high-fidelity replica of the [Squarespace Homepage](https://www.squarespace.com/) built with **Astro**, **Tailwind CSS v4**, **Lenis Smooth Scrolling**, and the exact architecture, developer workflows, and file/folder structure from `mcc-bank-fr-service-website`.

---

## 🚀 Features & Sections Replicated

1. **Global Navigation & Announcement Bar**
   - Sticky glassmorphic navbar (`backdrop-blur-md`, solidifies on scroll)
   - Squarespace iconic SVG emblem & logo mark
   - Multi-column mega menus with category grouping (Website, Business, Marketing) & spotlight blades
   - Mobile responsive drawer with accordion navigation
2. **Hero Section**
   - Iconic headline: *"A website makes it real"*
   - High-definition Squarespace video player & poster fallback
   - Interactive live preview chrome and floating badges
   - Dynamic marquee ticker ribbon
3. **Monetization & Growth Tabs ("Grow your business")**
   - 8 Interactive tabs: Services, Products, Invoicing, Bookings, Donations, Memberships, Ideas, Portfolios
   - Instant tab-switch transitions, feature checklists, and interactive checkout mockups
4. **"Everything you need on one platform"**
   - 3 Feature pillars: Fluid Engine™ drag-and-drop, Omnichannel Commerce, and Marketing/SEO
   - Embedded video showcases with hardware-accelerated playback
5. **Blueprint AI™ ("Getting started has never been easier with AI")**
   - TIME's Best Inventions 2025 accolade
   - Interactive prompt simulator with real-time palette and layout preview
   - Blueprint AI builder video demo
6. **Template Showcase ("Start with a website template designed for your business")**
   - Filterable template cards (Store, Portfolio, Services, Restaurants, Blog)
   - Hover quick-action overlays ("Start with this design", "Preview")
7. **Domain Search Bar ("Find the perfect domain for your website")**
   - Instant domain availability search simulator
   - Popular TLD pricing chips (.com, .org, .design, .studio, .store)
   - Built-in WHOIS privacy & SSL indicators
8. **Trust Metrics & Brand Logos ("Trusted by 14 million entrepreneurs")**
   - Live metrics: 14M+ websites, 20+ years design leadership, 99.9% uptime, 24/7 support
   - Curated creator brand logos (Kinfolk, Studio McGee, Sadelle's, Good Move, etc.)
9. **Creator Showcase ("Websites made with Squarespace")**
   - High-res photography, creator testimonials, and location tags
10. **4-Step Website Creation Workflow ("How to build a website")**
    - Step-by-step numbered breakdown from blueprint generation to domain launch
11. **Interactive FAQ Accordion**
    - Expanding and collapsing animated answers with smooth state toggling
12. **24/7 Global Support & Resources**
    - Customer care, Help Center documentation, and Squarespace Expert network
13. **Conversion Call-to-Action ("Start your free website trial today")**
    - High-converting trial banner with zero risk indicators (14-day free trial, cancel anytime)
14. **Comprehensive Global Footer**
    - Products, Solutions, Resources, Company columns, language dropdown, and system status indicator

---

## 📂 Project Structure

```
c:\Exelon\astro-landing-page\
├── .husky/
│   ├── post-merge
│   ├── pre-commit
│   └── pre-merge-commit
├── public/
│   └── robots.txt
├── scripts/
│   └── bump-version.ts
├── server/
│   ├── backend-api.ts
│   └── backend-cache.ts
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── AiSection.astro
│   │   │   ├── ConversionCta.astro
│   │   │   ├── CreatorShowcase.astro
│   │   │   ├── DomainSearch.astro
│   │   │   ├── FaqSection.astro
│   │   │   ├── GrowYourBusiness.astro
│   │   │   ├── Hero.astro
│   │   │   ├── HowItWorks.astro
│   │   │   ├── OnePlatform.astro
│   │   │   ├── SupportSection.astro
│   │   │   ├── TemplatesShowcase.astro
│   │   │   └── TrustStats.astro
│   │   └── shared/
│   │       ├── Footer.astro
│   │       ├── Header.astro
│   │       └── SEO.astro
│   ├── config/
│   │   └── app.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── HomeLayout.astro
│   ├── lib/
│   │   ├── site-content.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── 404.astro
│   │   └── index.astro
│   ├── scripts/
│   │   ├── accessibility.ts
│   │   └── lenis.ts
│   ├── styles/
│   │   └── globals.css
│   └── env.d.ts
├── .env.example
├── .gitignore
├── .npmrc
├── astro.config.ts
├── components.json
├── cspell.json
├── env.d.ts
├── eslint.config.mjs
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── version.json
```

---

## 🛠️ Development & Quality Scripts

```bash
# Run local dev server (default port 4321)
npm run dev

# Run spellcheck across src/ files
npm run spellcheck

# Run code linter
npm run lint

# Run production build
npm run build

# Preview production build
npm run preview

# Bump version in version.json
npm run bump-version
```
