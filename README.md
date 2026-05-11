# RiteshDev Studio

Premium 3D interactive marketing website for a freelance/full-stack mobile app developer brand focused on lead generation for mobile apps, dashboards, Firebase systems, API integration, payments, deployment, and production support.

## Stack

- React 18
- Vite
- Tailwind CSS v4
- Framer Motion
- Three.js
- React Three Fiber

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the Vite dev server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

## Folder Structure

```text
src/
  components/
    layout/
      Header.jsx
      Footer.jsx
      LoaderScreen.jsx
      ScrollProgress.jsx
    sections/
      HeroSection.jsx
      ProblemSection.jsx
      ServicesSection.jsx
      PortfolioSection.jsx
      ProcessSection.jsx
      TechStackSection.jsx
      PricingSection.jsx
      WhyChooseSection.jsx
      TestimonialsSection.jsx
      LeadCaptureSection.jsx
    three/
      HeroScene.jsx
    ui/
      Button.jsx
      GlassCard.jsx
      SectionIntro.jsx
  data/
    siteData.js
  App.jsx
  main.jsx
  styles.css
```

## Content/Data

Dummy content for services, portfolio, pricing, testimonials, and stack badges lives in:

- [src/data/siteData.js](/Users/riteshsharma/react_js/MyPortfolio/src/data/siteData.js)

## Notes

- The 3D hero scene is lazy-loaded to keep the initial page lighter.
- A static hero fallback is used on smaller screens and reduced-motion environments.
- Portfolio poster assets are loaded from `public/`.
