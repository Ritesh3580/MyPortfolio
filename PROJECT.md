# RiteshDev Studio — Portfolio Project

Premium marketing & portfolio website for a freelance mobile/web/full-stack developer.  
Built with **React 18 + Vite 8 + Tailwind CSS v4 + Framer Motion + Three.js**.

This project is designed to showcase services, portfolio case studies, pricing, client trust, and direct lead capture through WhatsApp and email.

---

## Project Goal

The goal of this website is to generate freelance leads, showcase services, build trust, and convert visitors into WhatsApp/email inquiries.

The website should position **RiteshDev Studio** as a premium mobile app, web app, SaaS dashboard, and full-stack development service provider.

Primary business goals:

- Build a professional online presence
- Showcase real project experience
- Explain services clearly
- Convert visitors into inquiries
- Support freelance/client acquisition
- Increase trust through portfolio, process, testimonials, and pricing
- Make it easy for clients to contact through WhatsApp or email

---

## Target Audience

This portfolio is designed for:

- Small business owners
- Startup founders
- Local service providers
- Travel agencies
- SaaS businesses
- Agencies needing development support
- Clients looking for React Native development
- Clients looking for React JS / frontend development
- Clients looking for backend and full-stack development
- Clients who need business websites, admin dashboards, and mobile apps

---

## Key Features

- Premium animated landing page
- Mobile-first responsive design
- Portfolio case studies
- Service showcase
- Pricing packages
- Testimonials section
- Lead capture contact form
- WhatsApp direct CTA
- Email CTA
- SEO and Open Graph support
- 3D animated hero section
- Static fallback for mobile / reduced-motion users
- Scroll progress indicator
- Loader screen
- Reusable UI components
- Responsive pricing section
- Animated tech stack section
- Business pain-point section
- Development process timeline
- Footer with service and contact links

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3.1 | UI framework |
| React DOM | 18.3.1 | DOM rendering |
| Vite | 8.0.x | Build tool & dev server |
| Tailwind CSS | 4.3.0 | Utility-first styling |
| @tailwindcss/vite | 4.3.0 | Tailwind Vite plugin |
| @vitejs/plugin-react | 6.0.1 | React fast refresh |
| Framer Motion | 12.38.0 | Animations & transitions |
| Three.js | 0.184.0 | 3D WebGL scene |
| @react-three/fiber | 8.17.10 | React renderer for Three.js |

> **Node requirement:** `>=22.12.0`  
> Recommended Node version is pinned in `.nvmrc`.

---

## Project Structure

```bash
MyPortfolio/
├── index.html                        # HTML entry — SEO meta, OG tags, favicon
├── vite.config.js                    # Vite config (React + Tailwind plugins)
├── package.json                      # Dependencies & npm scripts
├── .nvmrc                            # Node version pin
├── PROJECT.md                        # Project documentation
├── public/
│   ├── favicon.svg                   # Browser tab icon
│   ├── og-cover.svg                  # Open Graph / Twitter card image
│   ├── poster-travel-equip.png       # Portfolio image — Travel Agency Management System
│   ├── poster-gharkarch.png          # Portfolio image — GharKharch Expense Tracker
│   ├── poster-field-equip.png        # Portfolio image — Field Service Mobile App
│   ├── poster-aws-face.png           # Portfolio image — AWS Face Recognition Flow
│   └── poster-pocketi.png            # Portfolio image — Pocketi App
└── src/
    ├── main.jsx                      # React root mount
    ├── App.jsx                       # Root component — layout, state, routing
    ├── styles.css                    # Global CSS (Tailwind import + custom classes)
    ├── assets/                       # Static assets imported by components
    ├── data/
    │   └── siteData.js               # All content data
    ├── components/
    │   ├── layout/
    │   │   ├── Header.jsx            # Sticky nav
    │   │   ├── Footer.jsx            # Footer
    │   │   ├── LoaderScreen.jsx      # Full-screen entry loader
    │   │   └── ScrollProgress.jsx    # Fixed top progress bar
    │   ├── sections/
    │   │   ├── HeroSection.jsx
    │   │   ├── ProblemSection.jsx
    │   │   ├── ServicesSection.jsx
    │   │   ├── PortfolioSection.jsx
    │   │   ├── ProcessSection.jsx
    │   │   ├── TechStackSection.jsx
    │   │   ├── PricingSection.jsx
    │   │   ├── WhyChooseSection.jsx
    │   │   ├── TestimonialsSection.jsx
    │   │   └── LeadCaptureSection.jsx
    │   ├── three/
    │   │   └── HeroScene.jsx
    │   └── ui/
    │       ├── Button.jsx
    │       ├── GlassCard.jsx
    │       └── SectionIntro.jsx
```

---

## npm Scripts

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

---

## Setup Instructions

### Prerequisites

Before running the project, install:

- Node.js `>=22.12.0`
- npm
- Git
- Code editor such as VS Code

### Local Setup

```bash
git clone <repository-url>
cd MyPortfolio
nvm use
npm install
npm run dev
```

The local development server will start using Vite.

Default Vite URL is usually:

```bash
http://localhost:5173
```

---

## Build and Deployment

### Production Build

```bash
npm run build
```

The production-ready files will be generated inside:

```bash
dist/
```

### Preview Production Build

```bash
npm run preview
```

---

## Recommended Deployment Platforms

This project can be deployed on:

- Vercel
- Netlify
- Hostinger static hosting
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting server

---

## Deployment Configuration

For Vercel / Netlify:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | Match `.nvmrc` |
| Framework | Vite |

---

## Environment Variables

Currently, this project does not require environment variables.

Future optional environment variables:

```bash
VITE_WHATSAPP_NUMBER=
VITE_CONTACT_EMAIL=
VITE_FACEBOOK_URL=
```

These can be used later to avoid hardcoding contact details inside the source code.

---

## File Reference

### `index.html`

HTML shell. Contains:

- SEO meta tags
- Open Graph tags for social sharing
- Twitter card meta
- Favicon link
- `#root` mount point
- Script entry: `src/main.jsx`

---

### `vite.config.js`

Minimal Vite config.

Registers:

- `@vitejs/plugin-react`
- `@tailwindcss/vite`

Tailwind v4 uses the native Vite plugin, so no separate `postcss.config.js` is required.

---

### `src/main.jsx`

React 18 root mount.

Responsibilities:

- Imports global styles
- Wraps `<App />` in `React.StrictMode`
- Mounts app into `#root`

---

### `src/styles.css`

Global stylesheet.

Imports Tailwind via:

```css
@import "tailwindcss";
```

Defines custom utility classes:

| Class | Purpose |
|---|---|
| `.glass-panel` | Frosted dark glass background + border + blur |
| `.glass-card-hover` | Lift + border glow on hover |
| `.text-gradient` | White → cyan → purple gradient text fill |
| `.royal-gradient` | Blue → indigo → purple fill |
| `.hero-shadow` | Deep glow shadow for hero card |
| `.section-shell` | Centered max-width container with responsive padding |
| `.grid-surface` | Blueprint grid background overlay |
| `.orbit-wrapper` | CSS animation wrapper for rotating tech orbit |
| `.orbit-badge` | Counter-rotating badge to keep text upright |

---

### `src/App.jsx`

Root component.

Manages:

- `loading` state for `<LoaderScreen>`
- `menuOpen` state for mobile navigation
- `formState` for contact form note, error, and WhatsApp fallback
- `handleFormSubmit` for validation and contact URL generation

Renders full page flow:

```text
Header
→ Main Sections
→ Footer
→ WhatsApp Floating Action Button
```

---

### `src/data/siteData.js`

Single source of truth for page content.

Exports:

| Export | Type | Used In |
|---|---|---|
| `serviceCards` | Array | `ServicesSection` |
| `portfolioItems` | Array | `PortfolioSection` |
| `problemCards` | Array | `ProblemSection` |
| `processSteps` | Array | `ProcessSection` |
| `techStack` | Array | `TechStackSection` |
| `packages` | Array | `PricingSection` |
| `audienceHighlights` | Array | `WhyChooseSection` |
| `testimonials` | Array | `TestimonialsSection` |
| `footerLinks` | Array | `Footer` |

---

## Component Documentation

### `src/components/layout/Header.jsx`

Sticky top navigation with `z-50`.

Desktop behavior:

- Logo
- Navigation links
- CTA button

Mobile behavior:

- Hamburger button
- Animated dropdown menu
- CTA inside dropdown

Uses `section-shell` for consistent horizontal spacing.

---

### `src/components/layout/Footer.jsx`

Footer layout.

Desktop:

- Three-column grid

Mobile:

- Stacked sections

Footer includes:

- Brand description
- Services list
- Contact links
- Copyright line

---

### `src/components/layout/LoaderScreen.jsx`

Full-viewport fixed overlay with `z-[80]`.

Behavior:

- Shows spinning `RD` logo
- Fades out using Framer Motion
- Controlled by `loading` state in `App.jsx`
- Visible for around `1.2s`

---

### `src/components/layout/ScrollProgress.jsx`

Fixed progress bar at top of page.

Uses:

- `useScroll`
- `useSpring`
- Framer Motion transform scale

Purpose:

- Shows page scroll progress
- Improves premium feel of landing page

---

### `src/components/ui/Button.jsx`

Reusable animated anchor button using `motion.a`.

Variants:

| Variant | Style |
|---|---|
| `primary` | Royal gradient fill + glow |
| `secondary` | Transparent border style |

Animation:

- Hover: slight lift and scale
- Tap: slight shrink

---

### `src/components/ui/GlassCard.jsx`

Reusable glassmorphism card component.

Features:

- Frosted background
- Border glow
- Rounded corners
- Scroll-triggered fade and slide animation
- Accepts custom `className`

---

### `src/components/ui/SectionIntro.jsx`

Reusable section heading component.

Props:

| Prop | Purpose |
|---|---|
| `eyebrow` | Small badge text |
| `title` | Section title |
| `description` | Optional supporting paragraph |
| `align` | `center` or `left` |

---

### `src/components/sections/HeroSection.jsx`

Main hero section.

Desktop:

- Two-column layout
- Text on left
- 3D scene card on right

Mobile:

- Static fallback scene

Hero contains:

- Eyebrow badge
- Gradient headline
- Subtitle
- CTA buttons
- Trust badges
- 3D/fallback visual card

Scene loading logic:

1. On mobile or `prefers-reduced-motion`, show static fallback.
2. On desktop, lazy-load `HeroScene` only when visible.
3. Uses `IntersectionObserver` with `240px` root margin.

---

### `src/components/three/HeroScene.jsx`

Three.js scene using `@react-three/fiber`.

Contains:

- Floating phone mesh
- Laptop mesh
- Payment card mesh
- Cloud/API card mesh
- Orbiting glowing nodes
- Pointer-based subtle rotation

Canvas config:

```jsx
dpr={[1, 1.8]}
camera={{ fov: 36, position: [0, 0, 6.4] }}
```

---

### `src/components/sections/ProblemSection.jsx`

Business pain-point section.

Features:

- Grid layout
- Numbered cards
- Problem title
- Problem description

Grid:

```text
sm:grid-cols-2
xl:grid-cols-3
```

---

### `src/components/sections/ServicesSection.jsx`

Displays 9 service cards.

Each card includes:

- Icon badge
- Service title
- Service description

Grid:

```text
sm:grid-cols-2
lg:grid-cols-3
```

---

### `src/components/sections/PortfolioSection.jsx`

Portfolio / case study cards.

Each card includes:

- Project image or fallback
- Project title
- Problem
- Solution
- Business value
- Tech stack pills
- Action buttons

Layout:

```text
lg:grid-cols-2
```

---

### `src/components/sections/ProcessSection.jsx`

Development process timeline.

Includes:

- 6-step vertical timeline
- Dot outside card to avoid clipping
- Gradient vertical line on desktop
- Step number badge
- Step title
- Step detail
- Decorative large number

---

### `src/components/sections/TechStackSection.jsx`

Displays technology stack.

Mobile/tablet:

- Central brand pill
- Wrapping badge layout

Desktop:

- Animated orbit layout
- Central `RiteshDev Stack` circle
- Two orbit radii

---

### `src/components/sections/PricingSection.jsx`

Displays 3 pricing tiers.

Each pricing card includes:

- Label
- Package name
- Audience description
- Bullet list
- Price text
- CTA button

Featured package includes:

- Cyan border glow
- `Most Popular` badge

---

### `src/components/sections/WhyChooseSection.jsx`

Displays audience highlights.

Each card includes:

- Decorative icon
- Highlight title
- Generic description

Grid:

```text
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
```

---

### `src/components/sections/TestimonialsSection.jsx`

Displays 3 testimonial cards.

Each card includes:

- Quote mark
- Testimonial text
- Divider
- Author name

---

### `src/components/sections/LeadCaptureSection.jsx`

Lead capture/contact section.

Layout:

- Left: intro + direct contact buttons
- Right: contact form card

Form fields:

- Name
- Email
- Phone / WhatsApp
- Project type
- Budget range
- Message

Current submit behavior:

1. Validates all required fields.
2. Validates email format.
3. Builds `mailto:` URL.
4. Builds WhatsApp fallback URL.
5. Shows inline status message.
6. Shows WhatsApp fallback button after successful form fill.

---

## Public Assets

| File | Purpose |
|---|---|
| `favicon.svg` | Browser tab / bookmark icon |
| `og-cover.svg` | Social share preview image |
| `poster-travel-equip.png` | Portfolio image — Travel Agency Management System |
| `poster-gharkarch.png` | Portfolio image — GharKharch Expense Tracker |
| `poster-field-equip.png` | Portfolio image — Field Service Mobile App |
| `poster-aws-face.png` | Portfolio image — AWS Face Recognition Flow |
| `poster-pocketi.png` | Portfolio image — Pocketi App |

> The **EMI Calculator App** portfolio item currently has no image and renders a gradient fallback with the project title.

---

## Responsive Breakpoints

Tailwind v4 default breakpoints:

| Prefix | Min Width | Usage |
|---|---:|---|
| `sm` | 640px | 2-column grids, padding increase, taller scenes |
| `md` | 768px | 2-column form rows, timeline dot/line visible |
| `lg` | 1024px | Hero 2-column layout, 3-column grids, desktop orbit |
| `xl` | 1280px | 4-column WhyChoose layout, wider shell padding |

---

## SEO Keywords

Recommended SEO keywords for this portfolio:

- React Native Developer India
- Freelance Mobile App Developer
- React JS Developer
- Full Stack Developer
- Mobile App Development Services
- SaaS Dashboard Developer
- Business Website Developer
- Admin Dashboard Developer
- Startup App Developer
- React Native App Developer
- Mobile App Developer for Business
- Website Developer for Small Business
- Ritesh Sharma Developer Portfolio
- RiteshDev Studio

---

## SEO Checklist

Before production deployment, verify:

- Page title is optimized
- Meta description is clear
- Open Graph image loads correctly
- Twitter card image loads correctly
- Favicon loads correctly
- Heading hierarchy is clean
- Portfolio images have meaningful alt text
- Contact links are crawlable
- Page content includes service-related keywords naturally
- Website has a clear CTA above the fold

---

## Backend Status

This is currently a frontend-only static portfolio website.

The MVP version does not include:

- Backend API
- Database
- Admin panel
- CMS
- Lead management dashboard
- Authentication system

Current contact flow works through:

- `mailto:` email link
- WhatsApp fallback URL

---

## Contact Form Limitation

The current contact form does not store leads in a database.

Current behavior:

1. User fills the form.
2. Form validates required fields and email format.
3. Website generates a `mailto:` link.
4. Website also generates a WhatsApp fallback link.

Future improvements:

- Save leads in PostgreSQL / Firebase / Supabase
- Send email using backend API
- Add admin dashboard for inquiries
- Add lead status tracking
- Add CRM follow-up queue
- Add WhatsApp message automation
- Add email notification system
- Add spam protection
- Add reCAPTCHA / Turnstile protection

---

## Performance Strategy

The project uses animations and 3D effects, so performance should be handled carefully.

Current strategy:

- Lazy-load Three.js hero scene
- Use static fallback on mobile devices
- Respect `prefers-reduced-motion`
- Use optimized responsive layout
- Avoid loading heavy 3D scene until visible
- Keep reusable components small
- Use Vite for fast build and optimized output

Recommended improvements:

- Compress all portfolio images
- Use WebP/AVIF where possible
- Monitor JavaScript bundle size
- Run Lighthouse before deployment
- Avoid unnecessary animation on low-end devices
- Add image lazy loading
- Remove unused dependencies
- Avoid excessive motion on mobile
- Test page speed on real mobile network

---

## Accessibility Considerations

The website should follow basic accessibility best practices:

- Use semantic HTML sections
- Add meaningful alt text for images
- Maintain proper color contrast
- Support keyboard navigation
- Respect `prefers-reduced-motion`
- Use accessible form labels
- Show clear form validation messages
- Make CTA buttons readable and tappable on mobile
- Avoid relying only on color to show important states
- Ensure focus states are visible
- Keep text readable on dark backgrounds

---

## Known Limitations

- No backend integration yet
- No database for lead storage
- No CMS/admin panel
- No analytics integration declared
- No automated testing declared
- EMI Calculator portfolio item has no image
- Testimonials are static and should be replaced with verified client feedback
- Contact form depends on user's email client for `mailto:`
- No blog section yet
- No multi-language support yet
- No case study detail pages yet

---

## Testing Checklist

Before production deployment, verify:

- Website loads correctly on desktop
- Website loads correctly on mobile
- Website loads correctly on tablet
- Header navigation works
- Mobile hamburger menu works
- CTA buttons work
- WhatsApp link opens correctly
- Email link opens correctly
- Contact form validation works
- Contact form creates proper WhatsApp fallback
- Portfolio images load correctly
- 3D hero scene works on desktop
- 3D hero fallback works on mobile
- Reduced motion fallback works
- Loader screen appears and disappears correctly
- Scroll progress bar works
- Pricing cards align correctly
- Portfolio cards align correctly
- Footer links work
- `npm run build` completes successfully
- `npm run preview` works
- Lighthouse performance score is acceptable
- SEO title and meta description are correct
- Open Graph image appears correctly when shared
- No console errors appear in production build

---

## Future Enhancements

Recommended future improvements:

- Admin panel to manage portfolio content
- Blog section for SEO traffic
- Backend API for lead capture
- Database integration
- Email notification service
- WhatsApp automation
- Calendly/appointment booking integration
- CRM follow-up dashboard
- Analytics dashboard
- Multi-language support
- Dark/light theme switch
- Case study detail pages
- Client review integration
- Downloadable company profile PDF
- Downloadable resume
- Project inquiry tracking
- Lead status management
- Service-specific landing pages
- SEO blog articles
- Newsletter signup
- Live chat integration
- Payment link integration for advance booking
- Portfolio filter by category
- Before/after project result sections

---

## Suggested Future Backend Architecture

If backend is added later, suggested stack:

| Layer | Suggested Technology |
|---|---|
| Backend | Node.js + Express |
| Database | PostgreSQL / Supabase |
| ORM | Prisma |
| Email | Nodemailer / Resend |
| Auth | JWT / NextAuth if migrated |
| File Storage | AWS S3 / Supabase Storage |
| Deployment | Render / Railway / AWS / VPS |

Possible backend modules:

- Lead capture API
- Admin login
- Portfolio management
- Blog management
- Contact inquiry management
- Email notifications
- WhatsApp message queue
- Analytics dashboard

---

## Business Conversion Strategy

The website should be optimized for conversion.

Important conversion points:

- Strong hero CTA
- WhatsApp floating button
- Clear pricing packages
- Real portfolio examples
- Simple service explanation
- Problem/solution/value messaging
- Testimonials
- Fast contact form
- Direct email and WhatsApp options

Recommended CTA examples:

- “Start Your Project”
- “Book Free Consultation”
- “Discuss on WhatsApp”
- “Get Project Estimate”
- “View My Work”

---

## Content Management Notes

Current content is stored inside:

```bash
src/data/siteData.js
```

To update website content:

1. Open `src/data/siteData.js`
2. Update services, portfolio, pricing, testimonials, or footer links
3. Save changes
4. Run project locally
5. Verify UI
6. Build and deploy

Future improvement:

- Move content to CMS or admin dashboard
- Use MDX/Markdown for case studies
- Use database-driven content

---

## Security Notes

Since this is currently a static frontend project, the security risk is low.

Still verify:

- Do not expose private API keys
- Do not hardcode sensitive tokens
- Do not commit `.env` files
- Validate all form fields
- Add spam protection if backend form submission is added
- Use HTTPS in production
- Keep dependencies updated

---

## Maintenance Checklist

Monthly or before major updates:

- Run `npm install`
- Run `npm run build`
- Check outdated packages
- Test contact form
- Test WhatsApp link
- Test portfolio images
- Update project case studies
- Replace fake/static testimonials with real ones
- Review SEO metadata
- Check Lighthouse score
- Verify social preview image
- Check mobile layout

---

## Contact

- **WhatsApp:** [+91 80771 76860](https://wa.me/918077176860)
- **Email:** riteshsharma395@gmail.com
- **Facebook:** [rsharma166](https://www.facebook.com/rsharma166/)

---

## License & Ownership

This project is owned by **Ritesh Sharma / RiteshDev Studio**.

Do not reuse branding, content, portfolio materials, client case studies, or visual assets without permission.

---

## Final Notes

This documentation should be updated whenever:

- New services are added
- New portfolio projects are added
- Pricing changes
- Contact details change
- Backend/API integration is added
- Deployment platform changes
- New assets are added
- Project structure changes
