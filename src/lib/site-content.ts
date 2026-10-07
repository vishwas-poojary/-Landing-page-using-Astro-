export interface NavSubItem {
  title: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface NavGroup {
  label: string;
  items: NavSubItem[];
}

export interface NavMenu {
  title: string;
  href?: string;
  groups?: NavGroup[];
  featured?: {
    title: string;
    description: string;
    linkText: string;
    href: string;
    image: string;
  };
}

export const siteConfig = {
  name: "Squarespace",
  title: "Website Builder – Easily Create Your Own Website — Squarespace",
  description:
    "Create a website and grow your business with a free Squarespace trial. Start with customizable website templates, AI website builder tools, or a domain name.",
  url: "https://www.squarespace.com",
  ogImage: "https://media-www.sqspcdn.com/images/pages/homepage-2025/hero/videos/sept-2026/plants-desktop-poster-1500w.webp",
  nav: [
    {
      title: "Products",
      groups: [
        {
          label: "Website",
          items: [
            { title: "Websites", description: "Award-winning templates for any idea", href: "#templates" },
            { title: "Website Templates", description: "Browse curated industry designs", href: "#templates" },
            { title: "AI Website Builder", description: "Build with Squarespace Blueprint AI", href: "#ai-builder" },
            { title: "Design Intelligence", description: "AI-guided curation and styling", href: "#ai-builder" },
            { title: "Portfolios", description: "Showcase creative work & media", href: "#grow-your-business" },
            { title: "Blogs", description: "Share stories, newsletters & insights", href: "#grow-your-business" },
          ],
        },
        {
          label: "Business & Commerce",
          items: [
            { title: "Online Stores", description: "Sell physical & digital goods", href: "#grow-your-business" },
            { title: "Services", description: "Package and charge for client work", href: "#grow-your-business" },
            { title: "Invoicing", description: "Professional estimates and invoices", href: "#grow-your-business" },
            { title: "Scheduling", description: "Client appointments and calendar sync", href: "#grow-your-business" },
            { title: "Content & Memberships", description: "Monetize subscriber courses & media", href: "#grow-your-business" },
            { title: "Donations", description: "Seamless fundraising for causes", href: "#grow-your-business" },
          ],
        },
        {
          label: "Marketing & Domains",
          items: [
            { title: "Email Campaigns", description: "Engage audience with on-brand newsletters", href: "#one-platform" },
            { title: "SEO Tools", description: "Built-in optimization for search rankings", href: "#one-platform" },
            { title: "Domain Search", description: "Find, transfer, and manage your domain", href: "#domains" },
            { title: "Analytics", description: "Traffic, revenue, and conversion insights", href: "#one-platform" },
          ],
        },
      ],
      featured: {
        title: "Squarespace for Pros",
        description: "Powerful enough for pros, easy enough for clients.",
        linkText: "Explore Circle Partner Program",
        href: "#",
        image: "https://media-www.sqspcdn.com/images/site-navigation/2025/solutions/creative-services-500w.webp",
      },
    },
    {
      title: "Solutions",
      groups: [
        {
          label: "By Industry",
          items: [
            { title: "Creative Services", description: "Photographers, designers & artists", href: "#templates" },
            { title: "Restaurants & Bars", description: "Menus, reservations & pickup", href: "#templates" },
            { title: "Fitness & Wellness", description: "Classes, booking & coaching", href: "#templates" },
            { title: "Professional Services", description: "Consultants, legal & finance", href: "#templates" },
          ],
        },
        {
          label: "By Goal",
          items: [
            { title: "Build an Online Store", description: "Start selling today", href: "#grow-your-business" },
            { title: "Book Clients", description: "Manage bookings smoothly", href: "#grow-your-business" },
            { title: "Publish Ideas", description: "Build your personal brand", href: "#grow-your-business" },
          ],
        },
      ],
    },
    {
      title: "Resources",
      groups: [
        {
          label: "Learn & Grow",
          items: [
            { title: "Help Center", description: "Guides, tutorials, and 24/7 support", href: "#support" },
            { title: "Webinars", description: "Live sessions hosted by experts", href: "#support" },
            { title: "Community Forum", description: "Connect with creators worldwide", href: "#support" },
            { title: "Hire an Expert", description: "Match with certified Squarespace pros", href: "#support" },
          ],
        },
      ],
    },
  ],
};

export const heroData = {
  headline: "A website makes it real",
  subheadline:
    "Turn any idea into a world-class website with Squarespace. Start with design-forward templates, customized AI styling, and unmatched tools to grow.",
  primaryCta: { text: "Get started", href: "#templates" },
  secondaryCta: { text: "Browse templates", href: "#templates" },
  video: {
    desktopWebm: "https://media-www.sqspcdn.com/images/pages/homepage-2025/hero/videos/sept-2026/plants-desktop.webm",
    desktopMp4: "https://media-www.sqspcdn.com/images/pages/homepage-2025/hero/videos/sept-2026/plants-desktop.mp4",
    poster: "https://media-www.sqspcdn.com/images/pages/homepage-2025/hero/videos/sept-2026/plants-desktop-poster-1500w.webp",
  },
  ticker: [
    "Design-forward templates",
    "Blueprint AI builder",
    "Built-in eCommerce",
    "Acuity Scheduling",
    "Custom Domains",
    "Email Campaigns",
    "Fluid Engine™ Drag & Drop",
    "24/7 Global Support",
  ],
};

export const growBusinessData = {
  tag: "Monetization & Growth",
  title: "Grow your business",
  subtitle:
    "Whether you sell products, offer services, or build a community, Squarespace has everything to turn passion into profit.",
  tabs: [
    {
      id: "services",
      label: "Offer services",
      headline: "Package, promote, and get paid for your expertise",
      description:
        "Present your service offerings with elegant pricing tiers, intake questionnaires, automated scheduling, and one-click invoice payments.",
      highlights: [
        "Interactive service menus & pricing tables",
        "Integrated client intake forms",
        "Automated booking reminders",
      ],
      badge: "Service Commerce",
      image: "https://images.unsplash.com/photo-1542744094-3a31727223ec?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore Services",
      ctaLink: "#",
    },
    {
      id: "products",
      label: "Sell products",
      headline: "Sell physical and digital goods with zero friction",
      description:
        "Manage inventory, print shipping labels, accept credit cards, Apple Pay, and Klarna, with high-converting checkouts designed to drive revenue.",
      highlights: [
        "Rich product galleries & variant selector",
        "Cart abandonment recovery",
        "Seamless shipping & tax calculations",
      ],
      badge: "Full-Featured Store",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore Online Stores",
      ctaLink: "#",
    },
    {
      id: "invoicing",
      label: "Invoice clients",
      headline: "Send sleek invoices and get paid faster",
      description:
        "Create polished, on-brand invoices, automate follow-up reminders, and allow clients to pay instantly using their favorite payment method.",
      highlights: [
        "Custom branded payment portals",
        "Recurring invoicing & subscriptions",
        "Real-time payment tracking",
      ],
      badge: "Client Invoicing",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore Invoicing",
      ctaLink: "#",
    },
    {
      id: "booking",
      label: "Get booked",
      headline: "Effortless online appointment scheduling with Acuity",
      description:
        "Let clients view your real-time availability, select appointments, pay upfront, and sync automatically with your Google or Outlook calendar.",
      highlights: [
        "Calendar sync with timezone detection",
        "Group class & workshop management",
        "Custom intake questions & agreements",
      ],
      badge: "Acuity Scheduling",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore Scheduling",
      ctaLink: "#",
    },
    {
      id: "donations",
      label: "Collect donations",
      headline: "Rally supporters and fund your mission",
      description:
        "Engage donors with compelling storytelling, custom preset donation amounts, recurring giving options, and clean receipt generation.",
      highlights: [
        "Customizable giving tiers",
        "Zero hidden platform hurdles",
        "Instant donor acknowledgment emails",
      ],
      badge: "Fundraising",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore Donations",
      ctaLink: "#",
    },
    {
      id: "content",
      label: "Monetize your content",
      headline: "Turn subscribers into a recurring revenue stream",
      description:
        "Gate premium videos, blog posts, audio, podcasts, and digital downloads behind member areas and recurring subscription paywalls.",
      highlights: [
        "Member-only video libraries",
        "Tiered monthly & annual memberships",
        "Secure customer accounts",
      ],
      badge: "Member Areas",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore Member Sites",
      ctaLink: "#",
    },
    {
      id: "ideas",
      label: "Post your ideas",
      headline: "Publish, build an audience, and syndicate content",
      description:
        "Blogging with editorial-grade typographic control, podcast hosting feeds, social syndication, and integrated email newsletter capture.",
      highlights: [
        "Multi-author permissions",
        "Built-in RSS & podcast distribution",
        "Comment moderation & reader engagement",
      ],
      badge: "Publishing",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore Blogging",
      ctaLink: "#",
    },
    {
      id: "showcase",
      label: "Showcase your work",
      headline: "Present your portfolio in breathtaking resolution",
      description:
        "Full-bleed hero carousels, responsive masonry grids, lightbox viewports, and custom animations that make your creative work unforgettable.",
      highlights: [
        "Adaptive high-res image delivery",
        "Fluid drag-and-drop layout engine",
        "Custom cursor and transition effects",
      ],
      badge: "Creative Portfolios",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore Portfolios",
      ctaLink: "#",
    },
  ],
};

export const onePlatformData = {
  tag: "The Complete Ecosystem",
  title: "Everything you need on one platform",
  subtitle:
    "No complex plugin stacks. No maintenance headaches. Every tool connects seamlessly so you can focus on building your brand.",
  pillars: [
    {
      number: "01",
      title: "Design with Fluid Engine™",
      description:
        "Next-generation drag-and-drop flexibility gives you complete control over mobile and desktop views with pixel perfection.",
      badge: "Industry-Leading UI",
      features: [
        "Full layout freedom with snap-to-grid",
        "Independent mobile design viewport",
        "Rich animation presets & hover interactions",
      ],
      video: "https://media-www.sqspcdn.com/images/components/card-carousel/design-intelligence-3.mp4",
      poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "02",
      title: "Omnichannel Commerce",
      description:
        "Manage products, appointments, invoices, and subscriptions in one centralized dashboard with instant payment processing.",
      badge: "Zero Platform Complexity",
      features: [
        "Stripe, PayPal, Apple Pay & Klarna",
        "Automated tax & global shipping integrations",
        "Customer accounts with order tracking",
      ],
      video: "https://media-www.sqspcdn.com/images/components/conversion/conversion-centered.mp4",
      poster: "https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "03",
      title: "Marketing & AI Visibility",
      description:
        "Drive traffic with built-in SEO tools, automated social sync, on-brand email newsletters, and generative AI copy assist.",
      badge: "Growth Engine",
      features: [
        "Automatic sitemaps & clean semantic markup",
        "Design-matched email campaigns",
        "Squarespace AI for copywriting",
      ],
      video: "https://media-www.sqspcdn.com/images/pages/homepage-2025/get-started/blueprint-ai.mp4",
      poster: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const aiSectionData = {
  badge: "Squarespace Blueprint AI",
  timeAward: "TIME’s Best Inventions of 2025",
  title: "Getting started has never been easier with AI",
  description:
    "Answer a few guided prompts about your style and goals. Blueprint AI drafts a bespoke layout, writes curated starter copy, and recommends cohesive color palettes.",
  video: "https://media-www.sqspcdn.com/images/pages/homepage-2025/get-started/blueprint-ai.mp4",
  poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  interactiveSteps: [
    { label: "1. Brand Identity", example: "Boutique ceramic studio & weekend workshops" },
    { label: "2. Visual Personality", example: "Warm earth tones, editorial serif typography" },
    { label: "3. Goal & Features", example: "Sell handmade pottery & Acuity class bookings" },
  ],
};

export const templatesData = {
  tag: "Design Showcase",
  title: "Start with a website template designed for your business",
  subtitle:
    "Every template is customizable down to the pixel. Swap layouts, fonts, colors, and content in minutes.",
  categories: ["All", "Online Store", "Portfolio", "Services", "Restaurants", "Blog"],
  items: [
    {
      name: "Almar",
      category: "Online Store",
      style: "Warm Minimalist",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      previewUrl: "#",
      features: "Product grid, editorial banners, lookbook",
    },
    {
      name: "Nevins",
      category: "Services",
      style: "Modern Architecture",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      previewUrl: "#",
      features: "Service tiering, appointment bookings, case studies",
    },
    {
      name: "Ortley",
      category: "Portfolio",
      style: "Creative Studio",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      previewUrl: "#",
      features: "Fullscreen masonry, project drawer, client lists",
    },
    {
      name: "Vogue Bistro",
      category: "Restaurants",
      style: "Culinary Elegance",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      previewUrl: "#",
      features: "Seasonal menus, OpenTable sync, private dining form",
    },
    {
      name: "Tofino",
      category: "Blog",
      style: "Editorial Magazine",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      previewUrl: "#",
      features: "Featured stories, newsletter signup, author bio",
    },
    {
      name: "Palmer",
      category: "Online Store",
      style: "Luxury Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
      previewUrl: "#",
      features: "Lookbooks, quick-add drawer, customer reviews",
    },
  ],
};

export const domainSectionData = {
  title: "Find the perfect domain for your website",
  subtitle:
    "Every website needs a memorable address. Search, register, and connect your domain name in seconds.",
  popularTlds: [
    { tld: ".com", price: "$20/yr", badge: "Most Popular" },
    { tld: ".org", price: "$20/yr" },
    { tld: ".design", price: "$35/yr", badge: "Trending" },
    { tld: ".studio", price: "$25/yr" },
    { tld: ".co", price: "$30/yr" },
  ],
  features: [
    "Free WHOIS privacy protection included",
    "Automatic SSL certificates",
    "Clean DNS management & zero spam calls",
  ],
};

export const trustStatsData = {
  headline: "Trusted by 14 million entrepreneurs worldwide",
  stats: [
    { value: "14M+", label: "Websites created" },
    { value: "20+", label: "Years of design leadership" },
    { value: "99.9%", label: "Uptime guarantee" },
    { value: "24/7", label: "Award-winning human support" },
  ],
  logos: [
    { name: "Kinfolk", label: "KINFOLK" },
    { name: "Studio McGee", label: "STUDIO McGEE" },
    { name: "Sadelle's", label: "SADELLE’S" },
    { name: "Good Move", label: "GOOD MOVE" },
    { name: "Aesop Inspired", label: "AESTHETICS" },
    { name: "Arch Digest", label: "ARCH STUDIO" },
  ],
};

export const creatorShowcaseData = {
  title: "Websites made with Squarespace",
  subtitle: "Explore how visionaries build their livelihoods using our platform.",
  items: [
    {
      name: "Wilder Botanical",
      category: "Floral Design & Workshops",
      location: "Portland, OR",
      quote: "Squarespace gave our botanical studio an editorial atmosphere that elevated our average booking size by 40%.",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80",
      link: "#",
    },
    {
      name: "Nordic Ceramic Arts",
      category: "Handcrafted Tableware",
      location: "Copenhagen",
      quote: "Managing inventory drops and worldwide shipping with Squarespace Commerce is delightfully effortless.",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80",
      link: "#",
    },
    {
      name: "Arch & Form Studio",
      category: "Interior Architecture",
      location: "London, UK",
      quote: "The visual fidelity and fluidity of the templates allow our design projects to speak with true authority.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      link: "#",
    },
  ],
};

export const howItWorksData = {
  title: "How to build a website",
  steps: [
    {
      number: "01",
      title: "Choose a template or generate with AI",
      description:
        "Select an award-winning layout designed for your industry, or answer simple questions with Blueprint AI to create a unique starting structure.",
    },
    {
      number: "02",
      title: "Customize fonts, colors, and layouts",
      description:
        "Use Fluid Engine™ to drag, drop, resize, and arrange sections. Pick from curated typography pairings and harmonious color themes.",
    },
    {
      number: "03",
      title: "Add your content and monetization features",
      description:
        "Upload photography, publish service listings, create appointment calendars, connect payment methods, and set up your online store.",
    },
    {
      number: "04",
      title: "Connect your custom domain and launch",
      description:
        "Register a new domain or point your existing domain with one click. Publish with built-in SSL and full mobile responsiveness.",
    },
  ],
};

export const faqData = {
  title: "Frequently asked questions",
  items: [
    {
      question: "How do I start building a website with Squarespace?",
      answer:
        "You can start a 14-day free trial without entering a credit card. Choose any website template or use Squarespace Blueprint AI to generate a custom foundation. Customize your content and layout, then pick a plan whenever you are ready to publish.",
    },
    {
      question: "Do I need coding skills to use Squarespace?",
      answer:
        "No coding experience is required. Squarespace's Fluid Engine™ provides a visual, drag-and-drop design interface where you can add sections, text, imagery, and products with ease. For advanced developers, custom CSS, code blocks, and API developer tools are also fully supported.",
    },
    {
      question: "Can I sell both physical products and digital services?",
      answer:
        "Yes! Squarespace is a unified commerce platform. In a single store, you can sell physical merchandise, downloadable digital files, subscription memberships, consultation sessions, and ticketed event passes.",
    },
    {
      question: "Does Squarespace include free web hosting and an SSL certificate?",
      answer:
        "Yes, every Squarespace website includes enterprise-grade cloud hosting with 99.9% uptime, global CDN delivery, automated backups, and a free SSL certificate enabled by default.",
    },
    {
      question: "Can I connect my own custom domain name?",
      answer:
        "Absolutely. You can purchase a new domain directly through Squarespace, or effortlessly connect any third-party domain purchased from GoDaddy, Namecheap, Google Domains, and others.",
    },
    {
      question: "What kind of support is available if I need help?",
      answer:
        "Our customer care team is available 24/7 via live chat and email. You also get access to detailed step-by-step documentation, community forums, video workshops, and our certified Squarespace Expert marketplace.",
    },
  ],
};

export const supportData = {
  title: "24/7 Global Support",
  subtitle: "We're here to help you succeed at every stage of your journey.",
  cards: [
    {
      icon: "Headphones",
      title: "24/7 Customer Care",
      description: "Get real answers from our expert team via live chat and email around the clock.",
      linkText: "Contact Support",
      href: "#",
    },
    {
      icon: "BookOpen",
      title: "Help Center & Guides",
      description: "Search comprehensive articles, video walkthroughs, and step-by-step tutorials.",
      linkText: "Visit Help Center",
      href: "#",
    },
    {
      icon: "Users",
      title: "Hire a Squarespace Expert",
      description: "Collaborate with top-tier vetted web designers, developers, and digital marketers.",
      linkText: "Find an Expert",
      href: "#",
    },
  ],
};

export const footerData = {
  columns: [
    {
      title: "Products",
      links: [
        { label: "Website Templates", href: "#templates" },
        { label: "AI Website Builder", href: "#ai-builder" },
        { label: "Ecommerce", href: "#grow-your-business" },
        { label: "Acuity Scheduling", href: "#grow-your-business" },
        { label: "Invoicing", href: "#grow-your-business" },
        { label: "Email Marketing", href: "#one-platform" },
        { label: "Domains", href: "#domains" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Creatives & Artists", href: "#" },
        { label: "Restaurants", href: "#" },
        { label: "Fitness & Studios", href: "#" },
        { label: "Professional Services", href: "#" },
        { label: "Nonprofits", href: "#" },
        { label: "Enterprise Solutions", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "#support" },
        { label: "Community Forum", href: "#support" },
        { label: "Webinars & Workshops", href: "#" },
        { label: "Developer Platform", href: "#" },
        { label: "Squarespace Circle", href: "#" },
        { label: "System Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Investor Relations", href: "#" },
        { label: "Press & Media", href: "#" },
        { label: "Design Intelligence", href: "#ai-builder" },
        { label: "Security & Privacy", href: "#" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookie Preferences", href: "#" },
  ],
  copyright: "© 2026 Squarespace, Inc. All rights reserved.",
};
