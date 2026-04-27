// Force Gmail link to open Gmail web compose in a new tab
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const email = this.href.replace('mailto:', '');
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    });
  });
});

// Always scroll to hero section on reload
window.addEventListener('DOMContentLoaded', function() {
  if (location.hash !== '#home') {
    location.hash = '#home';
  }
  // Also force scroll to top in case hash is already #home
  setTimeout(() => {
    const hero = document.getElementById('home');
    if (hero) hero.scrollIntoView({ behavior: 'auto', block: 'start' });
    window.scrollTo(0, 0);
  }, 10);
});

/* =============================================================
   app.js — Portfolio Site Interactions
   ============================================================= */

'use strict';

const CONTACT_EMAIL = 'asad.designer0977@gmail.com';
const GOOGLE_SCRIPT_ENDPOINT = '';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function buildGmailComposeUrl({ to, subject = '', body = '' }) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su: subject,
    body
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

/* =============================================================
   Hero role typing animation
   ============================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const roleEl = document.getElementById('heroRoleText');
  if (!roleEl) return;

  const roles = [
    'Product Designer.',
    'Visual Designer.',
    'UX Researcher.',
    'Ui/UX Designer.'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex = Math.max(0, charIndex - 1);
      roleEl.textContent = currentRole.slice(0, charIndex);
    } else {
      charIndex = Math.min(currentRole.length, charIndex + 1);
      roleEl.textContent = currentRole.slice(0, charIndex);
    }

    let nextDelay = isDeleting ? 45 : 70;

    if (!isDeleting && charIndex === currentRole.length) {
      // Keep each completed title visible for a second.
      isDeleting = true;
      nextDelay = 1000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      nextDelay = 220;
    }

    window.setTimeout(type, nextDelay);
  };

  roleEl.textContent = '';
  window.setTimeout(type, 250);
});

/* =============================================================
   1. CASE STUDY DATA
   ============================================================= */
const caseStudies = [
  {
    id: 0,
    title: 'ScaleCart — Smart Funnel Tracking System',
    role: 'Product Design & UX Architecture',
    metric: '+34% Feature Adoption',
    category: 'E-commerce',
    tags: ['Figma', 'Dashboard Design', 'Funnels', 'Integrations'],
    overview:
      'ScaleCart is a smart system that tracks how customers buy products. I designed it as a single, clean command center where shop owners can understand performance without jumping between payment, ads, and shipping tools.',
    problem:
      'Shop owners were using separate tools for payments, ads, and logistics, creating a confusing data mess. Because of this fragmentation, they could not clearly see which sales funnel was working and which one was wasting money.',
    goals:
      'Create one place to view all sales activity, keep the experience clean and low-stress, and support quick integrations with tools like Stripe and PayPal in just a few clicks.',
    constraints:
      'The dashboard needed to surface 40+ metrics and charts without feeling crowded. I also had to keep every existing data feature (no removals allowed) and ensure charts and values remained WCAG 2.1 readable for users with different eyesight needs.',
    process: [
      'I interviewed users to learn which numbers they check first, then prioritized top KPIs like Total Revenue and Conversion at the top of the layout.',
      'I designed an adaptive sidebar that stays simple for beginners while letting experts drill into Funnels and Integrations.',
      'I built a consistent chart library of 12 reusable chart patterns so each page feels familiar and easy to scan.',
      'I designed one-click integrations for Stripe, PayPal, and Google Analytics to reduce setup friction.',
      'In Funnels View, I added a Grid/List toggle so users can switch to the format that matches their workflow.',
      'I added subtle green/red trend indicators on metric cards so growth or decline is visible at a glance.'
    ],
    screens: ['Dashboard Overview', 'Metric Cards', 'Funnels View (Grid/List)', 'Integrations (1-Click Connect)', 'Orders Table', 'Analytics Charts'],
    outcomes:
      'The redesigned experience increased first-week feature usage by 34%, improved power-user satisfaction to 4.6/5, and reduced "too complicated" complaints by 28%.',
    metrics: ['+34% Feature Adoption', '4.6/5 Power User Rating', '-28% Complexity Complaints', '40+ Metrics Organized', '12 Chart Patterns']
  },
  {
    id: 1,
    title: 'Athome Trip — Fast All-in-One Travel Booking',
    role: 'Product Design, UX Strategy & Mobile Experience',
    metric: '9K+ Monthly Bookings',
    category: 'Travel',
    tags: ['Figma', 'Travel UX', 'Mobile-First', 'Search UX'],
    overview:
      'A fast and easy way to book tours, hotels, and travel experiences. Athome Trip is designed as one simple platform where users can plan, compare, and book without friction.',
    problem:
      'Planning a trip is usually stressful. People have to jump between different websites to find a hotel, buy museum tickets, and book a taxi. Most travel sites are slow and filled with pop-ups, so users give up before they finish booking.',
    goals:
      'Build one simple website where users can book everything for a trip in one go, keep performance fast while showing thousands of locations, and create an Influencer Program section for sharing trips and earning rewards.',
    constraints:
      'The system had to handle a massive list of dates and locations without slow loading, stay 100% mobile-friendly for travelers on the move, and keep reservation data updated in real time to prevent double-bookings.',
    process: [
      'I used large destination visuals (like New York, Paris, and Seoul) so users could instantly understand what they were booking before clicking.',
      'I designed a minimalist, premium search bar that helps users find special experiences with one or two words.',
      'I structured the homepage into clear categories like Musical Bestsellers, Guided Tours, and Taxi to go so users never feel lost.',
      'I created a multi-service flow covering hotels, musical tickets, sim-cards, and local mobility in one booking journey.',
      'I designed a dedicated Influencer Program landing page to support growth, referral sharing, and rewards.'
    ],
    screens: ['Hero Search Experience', 'Destination Discovery', 'Multi-Service Booking', 'Musical Tickets', 'Taxi to Go', 'Influencer Program'],
    outcomes:
      'The platform now handles over 9K monthly bookings smoothly, 78% of mobile users return for their next booking, and backend reservation processing maintains 100% accurate bookings with zero double-bookings.',
    metrics: ['9K+ Monthly Bookings', '78% Repeat Mobile Users', '100% Booking Accuracy', 'All-in-One Travel Flow']
  },
  {
    id: 2,
    title: 'Portfolio Site — Premium Software Agency Website',
    role: 'UX Strategy, Website Design & Conversion Flow',
    metric: '+75% Project Leads',
    category: 'Agency',
    tags: ['Figma', 'Web Design', 'UX Writing', 'Conversion'],
    overview:
      'A clean and professional website built for a modern software agency. Portfolio Site was designed to feel premium, trustworthy, and easy to scan for busy founders evaluating a potential tech partner.',
    problem:
      'Most agency websites feel cluttered and overloaded with technical jargon. Startup founders often leave quickly because they cannot understand services fast enough and the layouts feel robotic or overwhelming.',
    goals:
      'Create a premium, high-trust website using simple language, make services and proof of work instantly clear, and reduce friction to booking discovery calls.',
    constraints:
      'I had to include many sections (Services, Process, Team, FAQ) without making the page heavy, showcase social proof such as patrons and client reviews without looking boastful, and optimize navigation for users scanning in under 30 seconds.',
    process: [
      'I designed a Simple, Proven Process section that explains the journey in four clear steps: Understand, Design, Build, and Test.',
      'I used clean, airy service icons for offerings like App Development and Website Management so users can identify services at a glance.',
      'I introduced a Meet Our Visionaries section with friendly profile cards to humanize the team behind the code.',
      'I added a Patrons strip featuring Slack, Stripe, and Codere to communicate developer-ready credibility.',
      'I kept a dedicated FAQ section near the bottom to resolve common doubts before prospects reach out.'
    ],
    screens: ['Hero with Product Illustration', 'Services Grid', 'Simple Process (4 Steps)', 'Meet Our Visionaries', 'Patrons Bar', 'FAQ + CTA'],
    outcomes:
      'The clearer call-to-action flow increased project inquiries by 75%, the optimized frontend achieved a 99% performance score, and improved usability supported a strong 93% client retention rate.',
    metrics: ['+75% Project Leads', '99% Performance Score', '93% Client Retention', '30-Second Scan Friendly']
  },
  {
    id: 3,
    title: 'CTR Boss — Premium Local SEO Intelligence Platform',
    role: 'Product UX, Data Visualization & Dashboard Design',
    metric: '+35% Search Ranking Boost',
    category: 'SEO SaaS',
    tags: ['Figma', 'Dashboard UX', 'SEO Product', 'Dark/Light Mode'],
    overview:
      'CTR Boss is a premium platform for businesses that want to rank higher on Google without the confusion of complex SEO data. I redesigned the experience to turn messy search metrics into clear, actionable steps through a clean, airy dashboard.',
    problem:
      'Local business owners struggled with traditional SEO tools because they were built for technical experts. Data was buried in cluttered tables and jargon-heavy labels, making it hard for non-technical users to know if marketing spend was working or being wasted.',
    goals:
      'Create a clear Ranking Boost card for instant progress tracking, automate Local Reports in plain language, and modernize the experience from old-school tables into a high-contrast, card-based layout.',
    constraints:
      'The product needed to display 150+ local reports and ranking factors without slowing down, preserve a consistent premium look in both dark and light modes, and provide action-oriented cards that tell users what to fix next.',
    process: [
      'I rewrote technical SEO labels into human-centric copy, for example replacing CTR Optimization with Get More Clicks.',
      'I used a Summary First hierarchy: top-level wins appear first, while deep-dive analytics are organized in expandable sections.',
      'I introduced actionable insight cards where every metric includes a direct What to do next recommendation.',
      'I designed visual traffic cues using familiar Google Maps and Search icons so users immediately understand source channels.',
      'I built a high-contrast dark/light mode system with strict spacing consistency to keep the premium feel across themes.'
    ],
    screens: ['Ranking Boost Overview', 'Local Reports', 'Action Cards', 'Traffic Source Insights', 'Dark Mode Dashboard', 'Light Mode Dashboard'],
    outcomes:
      'Businesses using CTR Boss saw a 35% boost in search visibility within the first month, users spent 50% less time understanding monthly SEO reports, and the optimized interface achieved a 100% site performance score.',
    metrics: ['+35% Search Visibility', '-50% Report Analysis Time', '100% Performance Score', '150+ Reports Managed']
  },
  {
    id: 5,
    title: 'Maktaba Rizviya — Premium Islamic Bookstore Experience',
    role: 'E-commerce UX, Information Architecture & Mobile Optimization',
    metric: '8,500+ Monthly Orders',
    category: 'E-commerce',
    tags: ['Figma', 'E-commerce UX', 'Mobile First', 'Catalog Design'],
    overview:
      'Maktaba Rizviya is a premium e-commerce platform for authentic Islamic literature in Pakistan. I replaced a cluttered legacy experience with a respectful, modern interface that makes discovery and checkout calm, clear, and fast.',
    problem:
      'Most niche bookstore websites were outdated, difficult to navigate, and slow to purchase from. Small visuals, confusing taxonomy, and weak checkout flows reduced trust, especially for older users seeking reliable access to original literature.',
    goals:
      'Build a respectful and premium visual direction, design clear top-level categories such as Quran, Hadith, and Biography, and optimize one-thumb navigation for mobile shoppers.',
    constraints:
      'The platform needed to organize thousands of titles without messy results, communicate authenticity through a trustworthy UI, and load high-quality book imagery quickly on slower 3G/4G networks.',
    process: [
      'I simplified product pages by removing visual noise and prioritizing cover imagery with a clear Add to Cart action.',
      'I designed a step-by-step checkout with plain language to remove technical confusion at purchase time.',
      'I used generous whitespace around featured collections to create a calm and breathable browsing experience.',
      'I introduced language filters (English, Urdu, Arabic) with smooth interactions that avoid full-page reload friction.',
      'I added a warm support section to make the brand feel human, approachable, and trustworthy.'
    ],
    screens: ['Top Categories', 'Featured Books Grid', 'Language Filter Sidebar', 'Minimal Product Page', 'Step-by-Step Checkout', 'Support Contact Section'],
    outcomes:
      'The platform now supports 8,500+ monthly orders with zero navigation complaints, reached a 5.0 customer rating, and proved mobile success with 85% of users shopping on phones.',
    metrics: ['8,500+ Monthly Orders', '5.0 Customer Rating', '85% Mobile Shopping', 'Fast 3G/4G Experience']
  },
  {
    id: 6,
    title: 'Caballoria Equest — Premium Horse Marketplace',
    role: 'Marketplace UX, Search Design & Listing Experience',
    metric: '42K Monthly Visitors',
    category: 'Marketplace',
    tags: ['Figma', 'Marketplace UX', 'Search Filters', 'Mobile'],
    overview:
      'Caballoria Equest is a premium marketplace for buying and selling high-quality horses. I simplified the discovery journey with smart filters and a guided selling path so users can browse trusted listings in a professional, airy environment.',
    problem:
      'The equestrian market was dominated by outdated classified-style websites that felt cluttered and untrustworthy for high-ticket transactions. Buyers struggled to find specific breeds and traits, while sellers lacked premium presentation for their horses.',
    goals:
      'Create a trusted high-end visual system, design one-click smart filtering by breed/age/color/gender, and build a multi-step guided listing flow so sellers do not miss critical details.',
    constraints:
      'The interface had to render high-resolution horse imagery without speed issues, support niche technical fields like pedigree and competition history while staying readable, and preserve a welcoming community tone for horse lovers.',
    process: [
      'I designed a Grid/List toggle so users can switch between photo-first discovery and quick data comparison views.',
      'I created minimalist horse profile pages with premium typography and strong whitespace hierarchy.',
      'I built a specialized filter sidebar focused on equestrian traits to reduce unnecessary scrolling.',
      'I introduced detailed yet airy listing cards showing name, age, and location at a glance.',
      'I implemented an earthy, neutral visual palette to reflect equestrian identity without feeling old-fashioned.'
    ],
    screens: ['Gallery View', 'List Comparison View', 'Horse Profile Page', 'Trait Filter Sidebar', 'Seller Listing Flow', 'Mobile Listing Management'],
    outcomes:
      'Caballoria Equest now attracts 42K monthly visitors, reaches an 88% sale success rate through higher trust, and supports over 3,500 active listings via a simplified management experience.',
    metrics: ['42K Monthly Visitors', '88% Sale Success', '3,500+ Active Listings', 'Premium Trust Experience']
  },
  {
    id: 7,
    title: 'ELG — Premium Renovation Supplies Platform',
    role: 'E-commerce UX, Checkout Optimization & Catalog Design',
    metric: '92% Checkout Success',
    category: 'E-commerce',
    tags: ['Figma', 'E-commerce UX', 'Checkout Flow', 'Inventory IA'],
    overview:
      'ELG is a premium e-commerce platform for renovation supplies and building materials. I designed a clear journey from product discovery to fast multi-step checkout so contractors and homeowners can order confidently without friction.',
    problem:
      'Most building-material stores online felt like wholesale databases with cluttered categories, technical item codes, and slow checkouts. Busy contractors on job sites needed a faster and more human shopping flow.',
    goals:
      'Position ELG as a one-stop partner with humanized copy, streamline checkout from cart to completion, and redesign category architecture so Tools and Supplies are instantly understandable.',
    constraints:
      'The platform had to organize thousands of SKUs from screws to power tools, communicate reliability through easy returns and fast shipping, and keep quantities/measurements/specs highly legible.',
    process: [
      'I replaced long-form checkout with a progress-based step-by-step flow to reduce anxiety and drop-off.',
      'I designed action-focused product cards that prioritize price visibility and high-contrast Add to Cart actions.',
      'I introduced clear category logic separating tools and supplies based on real builder mental models.',
      'I integrated persistent support touchpoints so help is one click away on every key journey page.',
      'I designed shipping and tracking dashboards for multi-site contractor delivery workflows.'
    ],
    screens: ['Category Navigation Hub', 'Product Grid Cards', 'Guided Checkout Flow', 'Shipping Tracking Dashboard', 'Returns & Shipping Trust Panel', '24/7 Support Touchpoints'],
    outcomes:
      'The simplified purchase flow achieved a 92% checkout success rate, grew the active customer base to 3,200+, and increased average order value to $450 through clearer cross-supply discovery.',
    metrics: ['92% Checkout Success', '3,200+ Active Customers', '$450 Average Order Value', 'Fast Contractor Reordering']
  },
  {
    id: 8,
    title: 'Invocircle — Human-Centered Freelance Invoicing',
    role: 'Fintech UX, Workflow Simplification & Mobile Billing Design',
    metric: '2x Faster Payments',
    category: 'Fintech SaaS',
    tags: ['Figma', 'SaaS UX', 'Mobile Billing', 'AI Workflow'],
    overview:
      'Invocircle is a premium invoicing platform for freelancers who are tired of tax-heavy jargon and complex forms. I redesigned billing into a conversational flow so users can create and share professional invoices quickly, including via WhatsApp.',
    problem:
      'Traditional invoicing software is built for accountants and overloads freelancers with terms like tax liability and ledger reconciliation. That complexity delays billing and adds avoidable stress to getting paid.',
    goals:
      'Use simple human language throughout the product, design WhatsApp-ready invoice sharing for mobile workflows, and remove jargon that blocks fast action for creatives.',
    constraints:
      'The interface had to remain legally valid while removing visual tax clutter, support an invoice-in-30-seconds target with minimal interactions, and perform equally well on mobile and desktop.',
    process: [
      'I designed AI-assisted invoice entry that suggests service descriptions from previous work to reduce typing.',
      'I placed clean top-level money cards for Paid, Pending, and Overdue for instant cash-flow clarity.',
      'I created a minimalist invoice canvas to mimic a clean paper document and reduce cognitive load.',
      'I built instant paid/unpaid toggles that update dashboard states in real time.',
      'I designed an airy client list showing lifetime value without table-heavy complexity.'
    ],
    screens: ['AI Invoice Entry', 'WhatsApp Share Flow', 'Paid/Pending/Overdue Dashboard', 'Minimal Invoice Canvas', 'Client Value List', 'Mobile Billing Workspace'],
    outcomes:
      'Users reported getting paid 2x faster because sharing invoices became instant, billing anxiety dropped through simplified language, and WhatsApp sharing became the top growth driver for new signups.',
    metrics: ['2x Faster Payments', 'Lower Billing Anxiety', '#1 Signup Driver: WhatsApp Share', '30-Second Invoice Goal']
  },
  {
    id: 9,
    title: 'Mexico Property — Premium Real Estate Discovery',
    role: 'PropTech UX, Search Experience & Visual Systems Design',
    metric: '40% More Luxury Inquiries',
    category: 'Real Estate',
    tags: ['Figma', 'PropTech UX', 'Map Search', 'Bilingual UI'],
    overview:
      'Mexico Property is a premium platform for discovering high-end real estate in Mexico. I simplified complex property data using a visual-first experience centered on high-quality media and clean, decision-ready information.',
    problem:
      'The market was fragmented across slow, ad-heavy sites with weak visuals and unreliable filters. High-end and international buyers struggled to trust listings or compare opportunities efficiently.',
    goals:
      'Make premium property photography the hero, present complex investment details in clear cards, and establish a minimalist luxury brand style aligned with high-value listings.',
    constraints:
      'The search system had to support multiple regions, price ranges, and property types without clutter, map interactions had to remain smooth on mobile, and the UI needed to work equally well for Spanish and English users.',
    process: [
      'I designed magazine-style property pages with strong breathing room and visual hierarchy around imagery.',
      'I replaced verbose spec lists with icon-led stat summaries for beds, baths, and square footage.',
      'I added direct-connect agent actions on every card to improve lead conversion speed.',
      'I created clean amenities cards and a simple ROI slider for investor decision support.',
      'I used high-contrast typography to keep key listing data instantly scannable.'
    ],
    screens: ['Luxury Listing Feed', 'Property Detail Magazine Layout', 'Map + Search Experience', 'Amenities Cards', 'ROI Calculator', 'Agent Direct Contact Actions'],
    outcomes:
      'Users now spend 3x more time browsing listings, luxury inquiry volume increased by 40%, and agents report faster response cycles thanks to mobile-optimized lead handling.',
    metrics: ['3x Listing Engagement Time', '+40% Luxury Inquiries', 'Faster Agent Response', 'Bilingual Premium Experience']
  },
  {
    id: 10,
    title: 'Scraping Fox — Premium Lead Generation Intelligence',
    role: 'Data UX, Dashboard Design & Workflow Simplification',
    metric: '45% Faster Lead Analysis',
    category: 'SEO/Data SaaS',
    tags: ['Figma', 'Data Visualization', 'Lead Gen', 'Dark UI'],
    overview:
      'Scraping Fox is an advanced lead generation and SEO monitoring platform for data-focused teams. I transformed a dense, code-first workflow into a clean, high-contrast dashboard that tracks keywords and competitors in real time.',
    problem:
      'Most scraping tools were overloaded with ugly tables, technical errors, and unstructured logs. Growth teams spent hours parsing massive datasets just to find useful leads, while weak visual hierarchy made trend detection slow and frustrating.',
    goals:
      'Design Success Rate and Active Crawlers cards for instant project health checks, create one-click cleaned exports to CSV/JSON, and build a Battle View for side-by-side keyword ranking comparison against competitors.',
    constraints:
      'The interface needed to surface live logs, keyword metrics, and lead details on one screen without feeling heavy, use clear non-distracting statuses for Running/Paused/Failed, and simplify jargon such as Proxy Rotation through intuitive icons and tooltips.',
    process: [
      'I used a deep high-contrast dark mode with bright accent highlights so scrape status and critical metrics are immediately visible.',
      'I enforced a strict 4px/8px spacing grid to keep dense data tables aligned, readable, and premium.',
      'I designed a quick filter bar for one-click sorting by signals like Domain Authority and Email Found.',
      'I added a minimal live log stream that auto-scrolls progress without stealing attention from key performance cards.',
      'I designed airy lead cards that prioritize email, social links, and SEO score in scan-friendly order.'
    ],
    screens: ['Success Rate Overview', 'Active Crawlers Panel', 'Battle View Comparison', 'Quick Filter Lead List', 'Live Log Stream', 'One-Click Export Actions'],
    outcomes:
      'Users reported finding high-quality leads 45% faster, long-term retention increased by 30% due to improved usability, and first-time users could start a scrape in under two minutes without onboarding friction.',
    metrics: ['45% Faster Lead Analysis', '+30% Retention', '<2 Min First Scrape', 'Real-Time Competitor Tracking']
  },
  {
    id: 11,
    title: 'DwellBoss — Premium Link Preview Optimization',
    role: 'SaaS UX, Social Preview Design & Marketing Workflow UI',
    metric: '+22% Social CTR',
    category: 'Marketing SaaS',
    tags: ['Figma', 'SaaS UX', 'Social Sharing', 'Live Preview'],
    overview:
      'DwellBoss helps brands control and optimize how links appear across social platforms. I built a simple premium interface where teams can fix title, description, and image previews quickly so shared content always looks professional.',
    problem:
      'Shared links often appeared broken, cropped, or outdated on social channels, hurting click-through rates and brand trust. Most teams had no practical way to manage preview quality without developer dependency.',
    goals:
      'Build a live cross-platform previewer, design a 3-step fast editor for meta content updates, and enforce brand-consistent premium previews across Facebook, X/Twitter, and LinkedIn.',
    constraints:
      'The tool had to handle different image ratios in one clean workspace, stay fast enough for in-the-moment publishing workflows, and hide technical meta-tag complexity from non-technical marketers.',
    process: [
      'I designed a split-screen editor where input controls and live previews run side-by-side in real time.',
      'I used a light airy canvas so preview media stands out and visual quality is easy to evaluate.',
      'I added platform toggles for mobile/desktop behavior checks before publishing.',
      'I designed a drag-and-drop uploader for high-resolution preview images with instant visual feedback.',
      'I added one-click copy actions to move optimized links directly into campaign workflows.'
    ],
    screens: ['Split-Screen Editor', 'Live Multi-Platform Preview', '3-Step Meta Update Flow', 'Image Upload Zone', 'Mobile/Desktop Social Toggle', 'One-Click Optimized Link Copy'],
    outcomes:
      'Brands using DwellBoss saw a 22% uplift in social click-through rates, teams spent 70% less time resolving preview issues with developers, and users reported stronger brand trust from cleaner shared links.',
    metrics: ['+22% Social CTR', '-70% Meta Fix Time', 'Faster Publishing Workflows', 'Higher Brand Trust']
  },
  {
    id: 12,
    title: 'One-Click SEO — Human-Friendly Audit Experience',
    role: 'Product UX, Audit Simplification & Conversion Design',
    metric: '+20% Search Visibility',
    category: 'SEO SaaS',
    tags: ['Figma', 'SEO UX', 'Checklist Design', 'Progress UI'],
    overview:
      'One-Click SEO is a premium audit tool that translates technical SEO diagnostics into a simple human-readable action flow. I redesigned reports into practical checklists so users can fix ranking issues quickly without expert knowledge.',
    problem:
      'Traditional audit reports are long, jargon-heavy, and hard to act on. Many users open reports, feel overwhelmed by terms like canonical tags and hreflang attributes, and abandon improvements despite having valuable data.',
    goals:
      'Create a prominent Site Health meter for instant understanding, convert 100+ issues into a prioritized Top 3 fixes list, and explain each issue in plain language for non-technical owners.',
    constraints:
      'The product needed clear prioritization between critical and minor issues, responsive real-time re-scan feedback, and technical error presentation that looked trustworthy rather than broken.',
    process: [
      'I replaced dense tables with a checklist-style workflow where completed fixes receive visual confirmation.',
      'I used progressive disclosure: simple fixes first, optional advanced technical details on demand.',
      'I designed a color system that naturally guides attention from good states to urgent issues.',
      'I introduced priority badges (Critical, Warning, Info) to reduce decision fatigue.',
      'I added direct How to fix this actions for every issue to keep momentum high.'
    ],
    screens: ['Site Health Meter', 'Top 3 Priority Fixes', 'Checklist Audit View', 'Priority Badges', 'Re-Scan Feedback Panel', 'How to Fix Action Guides'],
    outcomes:
      'Users became 60% more likely to resolve reported SEO issues, the simplified view earned a 4.9/5 rating among non-technical owners, and websites applying one-click fixes saw a 20% average visibility increase within 60 days.',
    metrics: ['+60% Fix Action Rate', '4.9/5 Non-Technical Rating', '+20% Search Visibility', 'Faster Re-Scan Loop']
  },
  {
    id: 13,
    title: 'Ringfront — Premium Unified Team Communication',
    role: 'Product UX, Real-Time Messaging Design & Focus Workflow',
    metric: '40% Faster Response Time',
    category: 'Communication SaaS',
    tags: ['Figma', 'Realtime UX', 'Chat Interface', 'Accessibility'],
    overview:
      'Ringfront is a premium communication platform for teams tired of cluttered chat apps. I created a clean high-contrast interface that keeps calls and messages organized in one unified view so users can respond quickly without interface stress.',
    problem:
      'Teams were overloaded by notification fatigue from communication tools with noisy sidebars, flashing controls, and hidden actions. Important calls and messages were easy to miss, while the robotic UI made everyday collaboration feel heavy.',
    goals:
      'Unify calls, SMS, and team chat into one airy inbox, provide clear instant presence states such as Online and In a Meeting, and design a distraction-reducing Focus Mode to keep users in flow.',
    constraints:
      'The UI had to update instantly as messages arrived without layout shifts, combine call history, recordings, and text threads in readable cards, and maintain long-session comfort with WCAG 2.1 compliant contrast.',
    process: [
      'I used a strict 8px spacing rhythm to balance sidebar and conversation density across all breakpoints.',
      'I replaced technical labels with human terms such as Call Settings and Audio Quality.',
      'I designed a minimalist thin-stroke icon system to preserve a premium, lightweight look.',
      'I added a focused, centered global search that finds people and messages in under a second.',
      'I introduced a compact active-call card with duration and mute controls that stays visible but non-intrusive.'
    ],
    screens: ['Unified Inbox Feed', 'Presence Status Layer', 'Focus Mode Workspace', 'Active Call Floating Card', 'Instant Search Bar', 'Conversation Detail View'],
    outcomes:
      'Teams reported 40% faster response times, user surveys showed a 30% drop in app fatigue, and daily usage remained consistently high because the product fit naturally into the workday.',
    metrics: ['+40% Response Speed', '-30% App Fatigue', 'Higher Daily Usage', 'WCAG 2.1 Contrast Ready']
  },
  {
    id: 14,
    title: 'Schema Pilot — Visual Database Mapping Workspace',
    role: 'Developer Tool UX, Canvas Systems & Information Architecture',
    metric: '50% Faster Schema Planning',
    category: 'Developer SaaS',
    tags: ['Figma', 'Data Modeling UX', 'Canvas Design', 'Dark Mode'],
    overview:
      'Schema Pilot is a premium tool for managing complex data structures visually. I transformed technical schema work into a clear card-based mapping system so teams can understand relationships quickly without being trapped in dense code views.',
    problem:
      'Database tooling often relied on hard-to-scan code and outdated interfaces, making it difficult to track relationships and spot design issues early. Teams lost time and introduced bugs because connections were not visually obvious.',
    goals:
      'Turn SQL structures into interactive drag-and-drop cards, enable one-click data type edits without writing code, and create a shared collaborative canvas for simultaneous team understanding.',
    constraints:
      'The interface needed to show tidy relationship lines across 50+ tables, remain technically accurate to real database rules, and preserve smooth canvas performance even at large zoomed-out data scales.',
    process: [
      'I designed each table as a clean modular card with clear headers and compact type indicators.',
      'I built an interactive canvas with generous whitespace to improve readability of complex structures.',
      'I implemented smart connector behavior so relationship lines remain tidy while cards move.',
      'I designed a soft dark theme that highlights data relationships without visual strain.',
      'I added a persistent minimap for quick navigation through large schemas.'
    ],
    screens: ['Schema Card Canvas', 'Connection Line Engine', 'One-Click Type Editor', 'Shared Collaboration View', 'Mini-Map Navigator', 'Soft Dark Mode Workspace'],
    outcomes:
      'Engineering teams mapped architectures 50% faster, database logic errors dropped by 20%, and non-technical teammates could finally follow data flow discussions with confidence.',
    metrics: ['+50% Planning Speed', '-20% Logic Bugs', 'Improved Cross-Team Understanding', 'Smooth Large-Canvas Performance']
  },
  {
    id: 15,
    title: 'Slate Desk — Minimalist Premium Helpdesk',
    role: 'Support UX, Workflow Simplification & Agent Experience Design',
    metric: '35% Faster Ticket Resolution',
    category: 'Support SaaS',
    tags: ['Figma', 'Helpdesk UX', 'Focus Mode', 'Service Operations'],
    overview:
      'Slate Desk is a premium support platform built to reduce agent overload. I designed a focused workspace that prioritizes one task at a time so teams can resolve issues faster with a cleaner and more human interaction model.',
    problem:
      'Support agents were working inside cluttered tools overloaded with sidebars, flashing urgency states, and dense tables, which increased burnout and slowed response quality for customers.',
    goals:
      'Create a one-task conversation view, design human-sounding quick replies, and surface response and happiness metrics in simple airy cards.',
    constraints:
      'The system needed to communicate high-priority urgency without stressful visual noise, keep common actions reachable in one click or shortcut, and show full customer context without forcing view switches.',
    process: [
      'I used wide margins and readable conversation typography to make long threads feel calm and manageable.',
      'I built a smart sidebar that reveals contextual customer data only when the agent needs it.',
      'I replaced harsh warning tones with softer premium alert colors to lower cognitive stress.',
      'I added a distraction-free Focus Mode that hides non-essential interface chrome.',
      'I surfaced only the three key operational stats: Open, Waiting, and Solved.'
    ],
    screens: ['One-Task Conversation View', 'Humanized Quick Replies', 'Smart Context Sidebar', 'Focus Mode Toggle', 'Ticket Activity Timeline', 'Top KPI Cards'],
    outcomes:
      'Support teams closed tickets 35% faster, internal agent happiness improved by 40%, and customers reported more personal interactions, resulting in stronger CSAT outcomes.',
    metrics: ['+35% Resolution Speed', '+40% Agent Happiness', 'Higher CSAT', 'Lower Support Fatigue']
  },
  {
    id: 16,
    title: 'Time Train — Premium Linear Scheduling Experience',
    role: 'Product UX, Timeline Interaction Design & Productivity Flow',
    metric: '5-Second Event Booking',
    category: 'Productivity SaaS',
    tags: ['Figma', 'Calendar UX', 'Interaction Design', 'Dark Mode'],
    overview:
      'Time Train is a premium scheduling app for busy professionals who want to reclaim their day. I replaced cluttered calendar blocks with a linear track-style timeline so users can manage time quickly without cognitive overload.',
    problem:
      'Traditional calendar interfaces rely on box-heavy grids, popups, and settings overload, making it hard to see real daily flow or identify short free slots between meetings.',
    goals:
      'Design a train-track timeline with natural hour flow, enable one-tap booking on empty slots, and keep visual breathing room so free time is as visible as busy time.',
    constraints:
      'The current-time indicator had to remain visible without covering upcoming tasks, event details needed to fit compactly on a strict 4px/8px grid, and both dark mode and premium tone had to appeal to executives.',
    process: [
      'I replaced the standard calendar grid with a vertical track view that makes day planning feel sequential and manageable.',
      'I used a muted premium palette of blues and greys to reduce visual stress in dense schedules.',
      'I applied strong typographic hierarchy so current tasks stand out while future items remain easy to scan.',
      'I designed a gap-finder system that highlights short recovery windows between meetings.',
      'I added quick-join actions directly on meeting cards for immediate Zoom/Meet access.'
    ],
    screens: ['Linear Track Timeline', 'Current Time Indicator', 'One-Tap Booking Slots', 'Quick-Join Meeting Cards', 'Gap Finder Highlights', 'Executive Dark Mode View'],
    outcomes:
      'Users reported a 30% drop in calendar anxiety, scheduling time dropped to roughly 5 seconds per event, and daily usage stayed consistently high because planning felt rewarding instead of stressful.',
    metrics: ['-30% Calendar Anxiety', '5s Average Booking Time', 'Higher Daily Usage', 'Improved Focus Windows']
  },
  {
    id: 17,
    title: 'Hoosh Tech — Premium Permit & Compliance Portal',
    role: 'GovTech UX, Workflow Simplification & Secure Document Experience',
    metric: '60% Faster Permit Filing',
    category: 'Operations SaaS',
    tags: ['Figma', 'Process UX', 'Compliance Flow', 'Secure Uploads'],
    overview:
      'Hoosh Tech is a premium permit and compliance portal that automates legal applications for builders and founders. I transformed a paperwork-heavy process into a simple four-step digital journey with clear status visibility.',
    problem:
      'Permit processes were long, jargon-heavy, and opaque. Users often did not know whether applications were moving or stuck, resulting in stress, repeated support requests, and project delays.',
    goals:
      'Break complex filing into four simple digital stages, build a live status tracker across the approval pipeline, and replace legal jargon with clear human instructions.',
    constraints:
      'The interface had to communicate strong data security, provide instant feedback for blueprint/ID uploads, and remain useful during long waiting periods with no immediate updates.',
    process: [
      'I used progressive disclosure to show only the required questions for the current step, hiding unnecessary complexity.',
      'I built a calm status color system with premium blue for active and soft grey for pending states.',
      'I organized permit IDs, dates, and addresses into clean 8px-grid cards for readability.',
      'I designed a permit timeline showing each approval/signature milestone in order.',
      'I added action badges like Needs Signature, Paid, and Approved for instant next-step clarity.'
    ],
    screens: ['4-Step Filing Journey', 'Live Permit Status Bar', 'Document Upload Zone', 'Permit Timeline', 'Action Badge System', 'Document Vault'],
    outcomes:
      'Users completed applications 60% faster, status-related support inquiries dropped by 45%, and projects started an average of 12 days earlier due to improved compliance throughput.',
    metrics: ['+60% Filing Speed', '-45% Status Inquiries', '12 Days Earlier Project Starts', 'Higher Process Transparency']
  },
  {
    id: 18,
    title: 'Project Management — Premium Internal Delivery Dashboard',
    role: 'Productivity UX, Handoff Systems & Team Workflow Design',
    metric: '25% Faster Design-to-Code Handoff',
    category: 'Internal Tooling',
    tags: ['Figma', 'Kanban UX', 'Developer Handoff', 'Team Productivity'],
    overview:
      'This internal dashboard helps high-growth teams manage tasks and developer handoffs with clarity. I redesigned cluttered Kanban patterns into an airy card-first system focused on immediate next actions.',
    problem:
      'Common PM tools often become card graveyards with excessive tags, comments, and controls, making it difficult for developers to identify their top priority quickly.',
    goals:
      'Create a priority-first view per user, embed developer-ready handoff assets directly in tasks, and use humanized deadlines such as Due Tomorrow or Next Week.',
    constraints:
      'The UI needed to remain clear across list/grid/timeline views, contain collaboration history and versions without visual noise, and load instantly with large active backlogs.',
    process: [
      'I widened Kanban columns and increased spacing to reduce stress and improve scan speed.',
      'I designed minimal status badges (In Progress, QA, Live) with clear hierarchy but low visual noise.',
      'I used strong type hierarchy to balance task titles against detail text.',
      'I added asset previews for Figma handoff directly on cards to shorten context switching.',
      'I introduced quick filters for My Tasks and Needs Review to reduce navigation time.'
    ],
    screens: ['Priority-First Dashboard', 'Airy Kanban Board', 'List/Grid/Timeline Views', 'Asset Preview Cards', 'Time Tracking Controls', 'Quick Filter Bar'],
    outcomes:
      'Design-to-code handoff time decreased by 25%, developer productivity improved by 20% through clearer next-task visibility, and zombie tasks dropped by 15% thanks to cleaner board maintenance behavior.',
    metrics: ['+25% Handoff Speed', '+20% Developer Productivity', '-15% Zombie Tasks', 'Faster Team Alignment']
  },
  {
    id: 19,
    title: 'Next Backlinks — Premium SEO Publisher Marketplace',
    role: 'Marketplace UX, SEO Data Simplification & Conversion Design',
    metric: '+50% Purchase Conversion',
    category: 'SEO Marketplace',
    tags: ['Figma', 'Marketplace UX', 'SEO Metrics', 'Bulk Workflow'],
    overview:
      'Next Backlinks is a high-performance marketplace for SEO agencies that need trustworthy link-building outcomes without technical clutter. I redesigned the buying journey into a clean, premium interface that makes discovering and purchasing quality placements fast and confidence-driven.',
    problem:
      'Most backlink marketplaces felt spammy and outdated, with crowded tables, confusing metrics, and intimidating jargon. Marketing managers struggled to evaluate quality, which increased budget waste and fear of poor link decisions.',
    goals:
      'Build a premium trust-first visual system, simplify DA/DR/traffic data into clear comparison cards, and design a one-click purchase flow so agencies can secure high-quality placements quickly.',
    constraints:
      'The interface had to present transparency across thousands of publishers without spreadsheet overload, protect publisher privacy until buyer intent is clear, and support bulk ordering of 100+ links while keeping tracking views organized.',
    process: [
      'I designed a smart filtering sidebar with simple controls for niche, traffic, and price to reduce query complexity.',
      'I introduced human-centered trend cues so users can quickly understand whether publisher traffic is rising or falling.',
      'I built a clean card-based listing architecture with strong spacing and typography hierarchy for metric-first scanning.',
      'I designed quality badges such as Manual Outreach and Google News for instant trust signaling.',
      'I added a minimalist bulk cart and linear order tracker so teams can manage strategy and fulfillment clearly.'
    ],
    screens: ['Publisher Discovery Cards', 'Smart Filter Sidebar', 'SEO Metric Comparison', 'Bulk Cart Panel', 'Order Progress Tracker', 'One-Click Checkout Flow'],
    outcomes:
      'Agencies became 50% more likely to complete purchases, discovery time dropped by 40% due to improved filtering, and power users rated the platform 4.8/5 for clarity, usability, and trust.',
    metrics: ['+50% Purchase Conversion', '-40% Discovery Time', '4.8/5 Power User Rating', '100+ Link Bulk Workflow']
  }
];

const DEMO_CASE_IMAGE = 'Assets/projects/scalecart/scalecart.webp';

function buildProjectGallery(folder, baseName, suffixes = [1, 2, 3, 4, 5, 6, 7]) {
  const root = `Assets/projects/${folder}/${baseName}`;
  return [`${root}.webp`, ...suffixes.map(num => `${root}-${num}.webp`)];
}

function toAssetSrc(path) {
  return typeof path === 'string' ? encodeURI(path) : path;
}

const CASE_STUDY_GALLERIES = {
  0: buildProjectGallery('scalecart', 'scalecart'),
  1: buildProjectGallery('athome trip', 'athome trip', [1, 2, 3, 7, 8]),
  2: buildProjectGallery('portfolio', 'portfolio'),
  3: buildProjectGallery('ctrboss', 'ctr boss'),
  5: buildProjectGallery('maktaba rizviya', 'maktaba rizviya'),
  6: buildProjectGallery('caballoria equest', 'caballoria equest'),
  7: buildProjectGallery('elg', 'elg'),
  8: buildProjectGallery('invocircle', 'invo circle'),
  9: buildProjectGallery('mexico property', 'mexico property'),
  10: buildProjectGallery('scraping fox', 'scraping fox'),
  11: buildProjectGallery('dwellboss', 'dwell boss', [1, 2, 3, 4, 5, 6]),
  12: buildProjectGallery('oneclickseo', 'one click seoo'),
  13: buildProjectGallery('ringfront ai', 'ringfront ai'),
  14: buildProjectGallery('schema pilot', 'schema pilot'),
  15: buildProjectGallery('slatedesk', 'slate desk', [1, 2, 3, 4, 5, 6]),
  16: buildProjectGallery('timetrain', 'timetrain', [1, 2, 3, 4, 5]),
  17: buildProjectGallery('hoosh tech', 'hoosh tech', [1, 2, 3, 4, 5, 6]),
  18: buildProjectGallery('project management', 'project management'),
  19: buildProjectGallery('next backlinks', 'next backlinks')
};
const INITIAL_CASES_VISIBLE = 4;
const CASES_LOAD_STEP = 4;

const allCaseStudies = [...caseStudies];

let visibleCaseCount = INITIAL_CASES_VISIBLE;
let caseScreensSwiper = null;
let caseThumbsSwiper = null;

function getCaseImageSrc(caseStudy) {
  const id = Number(caseStudy?.id);
  const gallery = CASE_STUDY_GALLERIES[id];
  const image = Array.isArray(gallery) && gallery.length ? gallery[0] : DEMO_CASE_IMAGE;
  return toAssetSrc(image);
}

function getCaseScreenImageSrc(caseStudy, index) {
  const id = Number(caseStudy?.id);
  const gallery = Array.isArray(caseStudy?.gallery) && caseStudy.gallery.length
    ? caseStudy.gallery
    : (CASE_STUDY_GALLERIES[id] || []);
  const image = gallery[index] || gallery[0] || DEMO_CASE_IMAGE;
  return toAssetSrc(image);
}

function destroyCaseModalSwipers() {
  if (caseScreensSwiper) {
    caseScreensSwiper.destroy(true, true);
    caseScreensSwiper = null;
  }

  if (caseThumbsSwiper) {
    caseThumbsSwiper.destroy(true, true);
    caseThumbsSwiper = null;
  }
}

function renderCaseModalCarousel(cs) {
  const screensWrapper = document.getElementById('caseScreensWrapper');
  const thumbsWrapper = document.getElementById('caseThumbsWrapper');
  const prevBtn = document.getElementById('caseScreensPrev');
  const nextBtn = document.getElementById('caseScreensNext');

  if (!screensWrapper || !thumbsWrapper) return;

  const explicitLabels = Array.isArray(cs.screens) && cs.screens.length ? cs.screens : [cs.title];
  const gallery = Array.isArray(cs.gallery) && cs.gallery.length
    ? cs.gallery
    : (CASE_STUDY_GALLERIES[Number(cs.id)] || []);
  const totalSlides = Math.max(explicitLabels.length, gallery.length, 1);
  const screenLabels = Array.from({ length: totalSlides }, (_, idx) => explicitLabels[idx] || `Screen ${idx + 1}`);

  screensWrapper.innerHTML = screenLabels.map((label, idx) => {
    const imageSrc = getCaseScreenImageSrc(cs, idx);
    return `
      <div class="swiper-slide">
        <div class="modal-screen-item">
          <img loading="eager" src="${imageSrc}" alt="${label} preview" class="modal-screen-img" data-case-id="${cs.id}" width="1920" height="1080" />
        </div>
      </div>
    `;
  }).join('');

  thumbsWrapper.innerHTML = screenLabels.map((label, idx) => {
    const imageSrc = getCaseScreenImageSrc(cs, idx);
    return `
      <div class="swiper-slide" aria-label="${label}">
        <div class="thumbnail-screen-item">
          <img loading="eager" src="${imageSrc}" alt="${label} thumbnail" class="thumbnail-screen-img" width="640" height="360" />
        </div>
      </div>
    `;
  }).join('');

  destroyCaseModalSwipers();

  if (typeof Swiper === 'undefined') {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    return;
  }

  caseThumbsSwiper = new Swiper('#caseThumbsSwiper', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true
  });

  caseScreensSwiper = new Swiper('#caseScreensSwiper', {
    spaceBetween: 14,
    loop: screenLabels.length > 1,
    grabCursor: screenLabels.length > 1,
    allowTouchMove: screenLabels.length > 1,
    keyboard: {
      enabled: true
    },
    navigation: {
      nextEl: '#caseScreensNext',
      prevEl: '#caseScreensPrev'
    },
    thumbs: {
      swiper: caseThumbsSwiper
    }
  });

  const controlsDisplay = screenLabels.length > 1 ? 'inline-flex' : 'none';
  if (prevBtn) prevBtn.style.display = controlsDisplay;
  if (nextBtn) nextBtn.style.display = controlsDisplay;
}

/* =============================================================
   2. POPULATE WORK CARDS
   ============================================================= */
function populateWorkCards() {
  const grid = document.getElementById('workCardsGrid');
  if (!grid) return;

  const visibleStudies = allCaseStudies.slice(0, visibleCaseCount);

  grid.innerHTML = visibleStudies.map(cs => {
    const imageSrc = getCaseImageSrc(cs);

    return `
    <div class="col-md-6">
      <div class="work-card" data-case-id="${cs.id}" tabindex="0" role="button" aria-label="View case study">
        <div class="work-card-thumb">
          <img loading="eager" src="${imageSrc}" alt="${cs.title} case study preview" class="work-card-img" data-case-id="${cs.id}" width="1920" height="1080" />
        </div>
        <div class="work-card-body">
          <div class="work-card-meta">
            <span class="wc-role">${cs.role}</span>
            <span class="wc-metric badge-metric">${cs.category}</span>
          </div>
          <h3 class="wc-title">${cs.title}</h3>
          <p class="wc-desc">${cs.overview}</p>
          <div class="wc-tags">${cs.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}</div>
          <div class="wc-hover-cta">View Case Study <i class="bi bi-arrow-right ms-1"></i></div>
        </div>
      </div>
    </div>
  `;
  }).join('');

  const cards = grid.querySelectorAll('.work-card');
  cards.forEach(card => {
    const caseId = Number(card.dataset.caseId);
    const selectedCase = allCaseStudies.find(cs => cs.id === caseId);
    if (!selectedCase) return;

    card.addEventListener('click', () => openCaseModal(selectedCase));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCaseModal(selectedCase);
      }
    });
  });

  updateCaseStudyButtons();
}

function updateCaseStudyButtons() {
  const loadMoreBtn = document.getElementById('loadMoreCases');
  const loadLessBtn = document.getElementById('loadLessCases');
  const endNote = document.getElementById('caseStudyEndNote');
  if (!loadMoreBtn || !loadLessBtn) return;

  const hasMore = visibleCaseCount < allCaseStudies.length;
  const canLoadLess = visibleCaseCount > INITIAL_CASES_VISIBLE;

  loadMoreBtn.style.display = hasMore ? 'inline-flex' : 'none';
  loadLessBtn.style.display = canLoadLess ? 'inline-flex' : 'none';

  if (endNote) {
    endNote.style.display = !hasMore ? 'block' : 'none';
  }
}

function initCaseStudyControls() {
  const loadMoreBtn = document.getElementById('loadMoreCases');
  const loadLessBtn = document.getElementById('loadLessCases');
  if (!loadMoreBtn || !loadLessBtn) return;

  loadMoreBtn.addEventListener('click', () => {
    visibleCaseCount = Math.min(visibleCaseCount + CASES_LOAD_STEP, allCaseStudies.length);
    populateWorkCards();
  });

  loadLessBtn.addEventListener('click', (e) => {
    e.preventDefault();
    visibleCaseCount = INITIAL_CASES_VISIBLE;
    populateWorkCards();
    // Scroll to the work section after cards update
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
  });

  updateCaseStudyButtons();
}

/* =============================================================
   3. CASE STUDY MODAL
   ============================================================= */
function openCaseModal(cs) {
  const modal = document.getElementById('caseModal');
  const bsModal = bootstrap.Modal.getOrCreateInstance(modal, { keyboard: true });

  // Populate tags
  document.getElementById('modalTags').innerHTML =
    cs.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');

  document.getElementById('caseModalLabel').textContent = cs.title;
  document.getElementById('modalRole').textContent = `${cs.role} · ${cs.metric}`;
  document.getElementById('modalProblem').textContent = cs.problem;
  document.getElementById('modalGoals').textContent = cs.goals;
  document.getElementById('modalConstraints').textContent = cs.constraints;
  document.getElementById('modalOverview').textContent = cs.overview;

  // Process steps
  document.getElementById('modalProcess').innerHTML = cs.process
    .map((step, idx) => `
      <div class="modal-step-item">
        <span class="ms-step-num">${idx + 1}</span>
        <span>${step}</span>
      </div>
    `).join('');

  // Case screens carousel
  renderCaseModalCarousel(cs);

  document.getElementById('modalOutcomes').textContent = cs.outcomes;

  // Metric chips
  document.getElementById('modalMetrics').innerHTML = cs.metrics
    .map(m => `<span class=\"badge-metric\">${m}</span>`)
    .join('');

  bsModal.show();
}

function initModalImageFullscreen() {
  const caseModal = document.getElementById('caseModal');
  if (!caseModal) return;

  const existingLightbox = document.getElementById('caseImageLightbox');
  if (!existingLightbox) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="case-image-lightbox" id="caseImageLightbox" aria-hidden="true">
        <button type="button" class="case-image-lightbox-nav case-image-lightbox-prev" id="caseImageLightboxPrev" aria-label="Previous image"><i class="bi bi-chevron-left" aria-hidden="true"></i></button>
        <button type="button" class="case-image-lightbox-nav case-image-lightbox-next" id="caseImageLightboxNext" aria-label="Next image"><i class="bi bi-chevron-right" aria-hidden="true"></i></button>
        <button type="button" class="case-image-lightbox-close" id="caseImageLightboxClose" aria-label="Close fullscreen image"><i class="bi bi-x-lg" aria-hidden="true"></i></button>
        <img loading="eager" src="" alt="Fullscreen case study preview" class="case-image-lightbox-img" id="caseImageLightboxImg" />
      </div>
    `);
  }

  const lightbox = document.getElementById('caseImageLightbox');
  const lightboxImg = document.getElementById('caseImageLightboxImg');
  const closeBtn = document.getElementById('caseImageLightboxClose');
  const prevBtn = document.getElementById('caseImageLightboxPrev');
  const nextBtn = document.getElementById('caseImageLightboxNext');

  let lightboxItems = [];
  let currentLightboxIndex = 0;
  let isLightboxAnimating = false;

  const updateNavButtons = () => {
    const multipleItems = lightboxItems.length > 1;
    prevBtn.style.display = multipleItems ? 'inline-flex' : 'none';
    nextBtn.style.display = multipleItems ? 'inline-flex' : 'none';
  };

  const renderCurrentLightboxImage = (direction = 'none') => {
    const currentItem = lightboxItems[currentLightboxIndex];
    if (!currentItem) return;
    lightboxImg.src = currentItem.src;
    lightboxImg.alt = currentItem.alt || 'Fullscreen case study preview';
    updateNavButtons();

    if (direction !== 'none') {
      const fromX = direction === 'next' ? 26 : -26;
      lightboxImg.animate(
        [
          { opacity: 0.88, transform: `translateX(${fromX}px) scale(0.995)` },
          { opacity: 1, transform: 'translateX(0) scale(1)' }
        ],
        {
          duration: 220,
          easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)'
        }
      );
    }
  };

  const openLightbox = (items, startIndex = 0) => {
    if (!items.length) return;
    lightboxItems = items;
    currentLightboxIndex = startIndex;
    renderCurrentLightboxImage();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  };

  const goToPrevImage = () => {
    if (lightboxItems.length <= 1 || isLightboxAnimating) return;
    isLightboxAnimating = true;
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    renderCurrentLightboxImage('prev');
    window.setTimeout(() => {
      isLightboxAnimating = false;
    }, 230);
  };

  const goToNextImage = () => {
    if (lightboxItems.length <= 1 || isLightboxAnimating) return;
    isLightboxAnimating = true;
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxItems.length;
    renderCurrentLightboxImage('next');
    window.setTimeout(() => {
      isLightboxAnimating = false;
    }, 230);
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    lightboxImg.src = '';
    lightboxItems = [];
    currentLightboxIndex = 0;
    isLightboxAnimating = false;
  };

  caseModal.addEventListener('click', (e) => {
    const clickedImage = e.target.closest('.modal-screen-img');
    if (!clickedImage) return;

    const modalImages = Array.from(caseModal.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate) .modal-screen-img'));
    const clickedIndex = modalImages.indexOf(clickedImage);
    const items = modalImages.map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt
    }));

    openLightbox(items, clickedIndex >= 0 ? clickedIndex : 0);
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    goToPrevImage();
  });
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    goToNextImage();
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevImage();
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNextImage();
    }
  });
}

/* =============================================================
   4. NAVBAR — SCROLL EFFECTS & ACTIVE LINK
   ============================================================= */
function initNavbar() {
  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.nav-link-cta)');
  const sections = document.querySelectorAll('section[id]');

  // Scrolled class for compact style
  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Active section highlight
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run on load

  // Smooth scroll + close mobile menu on link click
  const allNavLinks = document.querySelectorAll('a[href^="#"]');
  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });

        // Close mobile menu
        const collapse = document.getElementById('navbarCollapse');
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

/* =============================================================
   5. DARK MODE TOGGLE
   ============================================================= */
function initDarkMode() {
  const body = document.body;

  // Site is intentionally dark-only.
  body.classList.add('dark');
}

/* =============================================================
   6. SCROLL REVEAL (IntersectionObserver)
   ============================================================= */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    // Fallback: show all immediately
    revealEls.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Animate skill bars if inside
        const fills = entry.target.querySelectorAll('.skill-fill');
        fills.forEach(fill => fill.classList.add('animated'));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -48px 0px'
  });

  revealEls.forEach(el => observer.observe(el));

  // Also observe skill items that may not carry .reveal
  const skillItems = document.querySelectorAll('.skill-item');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.skill-fill');
        if (fill) fill.classList.add('animated');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillItems.forEach(item => skillObserver.observe(item));
}

/* =============================================================
   7. BACK TO TOP BUTTON
   ============================================================= */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =============================================================
   8. CONTACT FORM VALIDATION
   ============================================================= */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successAlert = document.getElementById('contactSuccess');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const ownerEmail = CONTACT_EMAIL;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setError = (input, errorEl, message) => {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  };

  const setValid = (input, errorEl) => {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  };

  const clearField = (input, errorEl) => {
    input.classList.remove('is-invalid', 'is-valid');
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  };

  const resetSubmitButton = () => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message <i class="bi bi-send ms-2"></i>';
  };

  const resetFormState = () => {
    form.reset();
    clearField(nameInput, nameError);
    clearField(emailInput, emailError);
    clearField(messageInput, messageError);
  };

  const showSuccess = (message) => {
    successAlert.innerHTML = `<i class="bi bi-check-circle-fill me-2 text-accent"></i>${message}`;
    successAlert.classList.remove('d-none');
    successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const submitViaGoogleScript = async ({ name, email, message }) => {
    if (!GOOGLE_SCRIPT_ENDPOINT.trim()) return false;

    const response = await fetch(GOOGLE_SCRIPT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message,
        to: ownerEmail,
        source: 'asad-portfolio-contact'
      })
    });

    const result = await response.json();
    const isSuccess = result.success === true || result.success === 'true';

    if (!response.ok || !isSuccess) {
      throw new Error(result.message || 'Google Script delivery failed');
    }

    return true;
  };

  const submitViaFormSubmit = async ({ name, email, message }) => {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New project inquiry from ${name}`,
        _captcha: 'false',
        _template: 'table',
        _replyto: email
      })
    });

    const result = await response.json();
    const isSuccess = result.success === true || result.success === 'true';

    if (!response.ok || !isSuccess) {
      throw new Error(result.message || 'Form delivery failed');
    }

    return true;
  };

  const sendViaMailto = () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const subject = `New project inquiry from ${name}`;
    const body =
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

    const gmailComposeUrl = buildGmailComposeUrl({
      to: ownerEmail,
      subject,
      body
    });

    window.location.href = gmailComposeUrl;
    showSuccess('Your compose page opened with a pre-filled draft. Please press Send there.');
    resetFormState();
    resetSubmitButton();
  };

  // Live validation on blur
  nameInput.addEventListener('blur', () => {
    if (!nameInput.value.trim()) {
      setError(nameInput, nameError, 'Please enter your full name.');
    } else if (nameInput.value.trim().length < 2) {
      setError(nameInput, nameError, 'Name must be at least 2 characters.');
    } else {
      setValid(nameInput, nameError);
    }
  });

  emailInput.addEventListener('blur', () => {
    if (!emailInput.value.trim()) {
      setError(emailInput, emailError, 'Please enter your email address.');
    } else if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, emailError, 'Please enter a valid email address.');
    } else {
      setValid(emailInput, emailError);
    }
  });

  messageInput.addEventListener('blur', () => {
    if (!messageInput.value.trim()) {
      setError(messageInput, messageError, 'Please write a message before submitting.');
    } else if (messageInput.value.trim().length < 10) {
      setError(messageInput, messageError, 'Your message is too short. Please add more detail.');
    } else {
      setValid(messageInput, messageError);
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    successAlert.classList.add('d-none');

    let valid = true;

    // Validate name
    if (!nameInput.value.trim()) {
      setError(nameInput, nameError, 'Please enter your full name.');
      valid = false;
    } else if (nameInput.value.trim().length < 2) {
      setError(nameInput, nameError, 'Name must be at least 2 characters.');
      valid = false;
    } else {
      setValid(nameInput, nameError);
    }

    // Validate email
    if (!emailInput.value.trim()) {
      setError(emailInput, emailError, 'Please enter your email address.');
      valid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, emailError, 'Please enter a valid email address.');
      valid = false;
    } else {
      setValid(emailInput, emailError);
    }

    // Validate message
    if (!messageInput.value.trim()) {
      setError(messageInput, messageError, 'Please write a message before submitting.');
      valid = false;
    } else if (messageInput.value.trim().length < 10) {
      setError(messageInput, messageError, 'Your message is too short. Please add more detail.');
      valid = false;
    } else {
      setValid(messageInput, messageError);
    }

    if (!valid) return;

    // Send email using EmailJS
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';

    const templateParams = {
      to_email: ownerEmail,
      from_name: nameInput.value.trim(),
      from_email: emailInput.value.trim(),
      message: messageInput.value.trim(),
      reply_to: emailInput.value.trim()
    };

    try {
      const delivered = await submitViaFormSubmit({
        name: templateParams.from_name,
        email: templateParams.from_email,
        message: templateParams.message
      });

      if (!delivered) {
        throw new Error('Form delivery failed');
      }

      showSuccess("Message sent successfully!");
      resetFormState();
      resetSubmitButton();

      setTimeout(() => {
        successAlert.classList.add('d-none');
      }, 6000);
    } catch (error) {
      console.error('Form submit failed:', error);

      const errorMessage = String(error && error.message ? error.message : '').toLowerCase();
      if (errorMessage.includes('confirm your email')) {
        showSuccess('Please confirm your FormSubmit activation email once, then submissions will arrive in your Gmail inbox.');
        resetSubmitButton();
        return;
      }

      sendViaMailto();
    }
  });
}

function initMailtoLinks() {
  const mailLinks = document.querySelectorAll('a[href^="mailto:"]');
  if (!mailLinks.length) return;

  mailLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const emailAddress = (link.getAttribute('href') || '').replace('mailto:', '').trim();
      if (!emailAddress) return;

      const gmailComposeUrl = buildGmailComposeUrl({ to: emailAddress });
      window.location.href = gmailComposeUrl;
    });
  });
}
/* =============================================================
   9. HERO FLOATING BADGES — SUBTLE FLOAT ANIMATION
   ============================================================= */
function initHeroAnimations() {
  const badges = document.querySelectorAll('.float-badge');
  badges.forEach((badge, i) => {
    badge.style.animation = `floatY ${2.5 + i * 0.5}s ease-in-out infinite alternate`;
  });

  // Inject keyframes dynamically
  if (!document.getElementById('floatKeyframes')) {
    const style = document.createElement('style');
    style.id = 'floatKeyframes';
    style.textContent = `
      @keyframes floatY {
        from { transform: translateY(0px); }
        to { transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(style);
  }
}

function initReloadToHero() {
  const navigationEntry = performance.getEntriesByType('navigation')[0];
  const isReload = navigationEntry
    ? navigationEntry.type === 'reload'
    : performance.navigation && performance.navigation.type === 1;

  if (!isReload) return;

  // Clear hash and reset scroll so refresh always starts at hero.
  if (window.location.hash) {
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

/* =============================================================
   10. INIT
   ============================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initReloadToHero();
  initDarkMode();
  initCaseStudyControls();
  populateWorkCards();
  initModalImageFullscreen();
  initNavbar();
  initScrollReveal();
  initBackToTop();
  initContactForm();
  initMailtoLinks();
  initHeroAnimations();
});

function initMailtoLinks() {
  // Yeh selector ab footer + sab mailto links ko cover karega
  const mailLinks = document.querySelectorAll('a[href^="mailto:"], .mailto-link');
  
  if (!mailLinks.length) return;

  mailLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();        // ← Yeh important hai (default mailto rokne ke liye)
      
      const emailAddress = (this.getAttribute('href') || '')
                            .replace('mailto:', '')
                            .trim();

      if (!emailAddress) return;

      const gmailComposeUrl = buildGmailComposeUrl({ 
        to: emailAddress 
      });

      window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
    });
  });
}