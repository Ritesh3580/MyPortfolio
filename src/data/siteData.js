export const serviceCards = [
  { icon: 'RN', title: 'React Native Mobile App Development', description: 'Cross-platform Android and iOS apps with native-feeling UI, auth flows, offline support, maps, and production deployment.' },
  { icon: 'WEB', title: 'React JS Website & Admin Panel', description: 'High-conversion websites, internal dashboards, booking systems, and business control panels built for scale.' },
  { icon: 'SAAS', title: 'SaaS Dashboard Development', description: 'Multi-tenant SaaS product UIs, role-based admin panels, subscription flows, and data-driven dashboard experiences built for scale.' },
  { icon: 'NODE', title: 'Node.js Backend Development', description: 'REST APIs, Express servers, authentication systems, database design, and server-side business logic for web and mobile products.' },
  { icon: 'FB', title: 'Firebase / Firestore Integration', description: 'Auth, Firestore, cloud messaging, storage, and real-time systems configured for fast product delivery.' },
  { icon: 'API', title: 'REST API Integration', description: 'Third-party APIs, CRM systems, booking engines, logistics services, and secure backend connectivity.' },
  { icon: 'PAY', title: 'Payment Gateway Integration', description: 'Razorpay, Stripe, wallets, subscriptions, transaction handling, and payment success/failure workflows.' },
  { icon: 'DEP', title: 'App Store / Play Store Deployment', description: 'Release prep, signing, policy checks, store submission, build issues, and rejection fixes.' },
  { icon: 'FIX', title: 'Production Bug Fixing', description: 'Crash fixes, performance bottlenecks, API failures, store build issues, and emergency production support.' },
  { icon: 'UX', title: 'UI/UX Implementation', description: 'Clean mobile-first design implementation with premium polish, strong hierarchy, and business-focused flows.' },
  { icon: 'MVP', title: 'Full MVP Development', description: 'From idea to launch: mobile app, dashboard, backend integration, analytics, deployment, and maintenance planning.' },
];

export const portfolioItems = [
  {
    title: 'Travel Agency Management System',
    image: '/poster-travel-equip.png',
    problem: 'Travel operators needed booking control, fleet visibility, reporting, and customer-facing flows in one system.',
    solution: 'Built a multi-module app and admin platform covering bookings, finance, drivers, vendors, and operations.',
    stack: ['React Native', 'React JS', 'Node.js', 'MySQL'],
    value: 'Reduced operational friction and created a scalable digital workflow for travel management.',
    link: 'https://royalfeet.in/royalfleet-3d.html',
  },
  {
    title: 'GharKharch Expense Tracker',
    image: '/poster-gharkarch.png',
    problem: 'Families needed a simple tool to track everyday expenses, milk records, reminders, and budgets.',
    solution: 'Created a focused expense product with reports, reminders, category tracking, and a clean mobile UX.',
    stack: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
    value: 'Turned manual expense tracking into a habit-friendly digital product with clear retention hooks.',
    link: 'https://ghar-karch-postgres-prisma-client.vercel.app/',
  },
  {
    title: 'Field Service Mobile App',
    image: '/poster-field-equip.png',
    problem: 'Field technicians needed mobile task execution with offline-ready workflows, work orders, and asset visibility.',
    solution: 'Delivered a service operations app with work order control, sync workflows, and technician-focused screens.',
    stack: ['React Native', 'Redux', 'Offline Sync', 'REST API'],
    value: 'Improved field operations efficiency and reduced delays caused by fragmented manual processes.',
  },
  {
    title: 'AWS Face Recognition Flow',
    image: '/poster-aws-face.png',
    problem: 'The team needed secure identity verification through mobile face capture and cloud comparison.',
    solution: 'Designed a face enrollment and authentication flow using mobile capture, AWS services, and metadata mapping.',
    stack: ['React Native', 'AWS Rekognition', 'Lambda', 'S3'],
    value: 'Introduced secure verification with a cloud-native workflow suitable for compliance-heavy use cases.',
  },
  {
    title: 'Pocketi App',
    image: '/poster-pocketi.png',
    problem: 'Small businesses needed a simple but premium product for invoicing, customer management, and payments.',
    solution: 'Built a wallet-style fintech experience with transaction UI, invoice views, and payment-ready product screens.',
    stack: ['React Native', 'Firebase', 'Redux', 'REST API'],
    value: 'Created a stronger business-ready payment product experience with clearer monetization potential.',
  },
  {
    title: 'EMI Calculator App',
    problem: 'Finance-focused users needed a lightweight tool to calculate EMI quickly and compare loan scenarios.',
    solution: 'Designed a fast calculator workflow with instant outputs, clean data entry, and finance-friendly visual design.',
    stack: ['React Native', 'JavaScript', 'Calculator Logic'],
    value: 'Enabled quick lead acquisition and repeat engagement for finance-related mobile product use cases.',
  },
];

export const problemCards = [
  'Manual business process',
  'No mobile app',
  'Poor dashboard visibility',
  'Slow app performance',
  'No online booking/payment',
  'App crashes or store rejection',
];

export const processSteps = [
  { step: '01', title: 'Requirement Discussion', detail: 'Business goals, target users, scope, tech fit, timeline, and launch expectations.' },
  { step: '02', title: 'UI/UX Planning', detail: 'Flows, screen architecture, dashboard logic, and conversion-focused user experience.' },
  { step: '03', title: 'Development', detail: 'Mobile app, dashboard, backend connectivity, authentication, and business features.' },
  { step: '04', title: 'Testing', detail: 'Edge cases, responsiveness, API checks, performance tuning, and release validation.' },
  { step: '05', title: 'Deployment', detail: 'Store submission, hosting, production builds, rollout planning, and release support.' },
  { step: '06', title: 'Maintenance', detail: 'Bug fixes, upgrades, monitoring, feature enhancement, and post-launch support.' },
];

export const techStack = [
  'React Native', 'React JS', 'JavaScript', 'TypeScript', 'Redux', 'Firebase', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'REST API', 'AWS', 'GitHub', 'Xcode', 'Android Studio',
];

export const packages = [
  { name: 'Starter Fix Package', label: 'Starting from', audience: 'For bug fixes, deployment issues, build errors, and urgent production support.', points: ['Crash fixing', 'Store deployment help', 'API issue resolution', 'Short-turnaround support'] },
  { name: 'MVP Package', label: 'Starting from', audience: 'For startup founders launching a mobile app with dashboard, auth, and core business logic.', points: ['Mobile app development', 'Admin/dashboard setup', 'Firebase or API integration', 'Launch-ready scope planning'], featured: true },
  { name: 'Business Growth Package', label: 'Starting from', audience: 'For full business systems with app, dashboard, payments, deployment, and ongoing support.', points: ['Full mobile + web stack', 'Payment and API workflows', 'Deployment and release support', 'Post-launch maintenance'] },
];

export const audienceHighlights = [
  { title: 'Clean and scalable code', description: 'Every codebase is structured for long-term maintainability, easy handover, and future feature growth.' },
  { title: 'Fast communication', description: 'Quick responses, clear updates, and proactive progress sharing throughout the entire project lifecycle.' },
  { title: 'Business-focused development', description: 'Features are prioritized by business impact, not technical preference — built to solve real operational problems.' },
  { title: 'Mobile-first UI', description: 'Every screen is designed and tested for mobile first, then scaled up to tablet and desktop.' },
  { title: 'Full-Stack & Backend Builds', description: 'From React Native to Node.js APIs and PostgreSQL databases — full product delivery without handoffs.' },
  { title: 'Secure API integration', description: 'Third-party APIs, payment gateways, and backend services integrated securely with proper error handling.' },
  { title: 'Store deployment support', description: 'App Store and Play Store submission, signing, policy checks, and rejection resolution included.' },
  { title: 'Post-launch maintenance', description: 'Ongoing bug fixes, dependency updates, feature additions, and production monitoring after go-live.' },
];

export const testimonials = [
  { quote: 'RiteshDev Studio turned our rough product idea into a polished mobile app flow that felt ready for real customers.', author: 'Startup Founder', role: 'Travel Tech Startup' },
  { quote: 'The dashboard and mobile workflows were aligned with our business process from day one. Delivery was clear and reliable.', author: 'Operations Lead', role: 'Logistics Business' },
  { quote: 'Strong technical execution across React Native, Firebase, APIs, and release support. Very practical and business-minded.', author: 'Product Manager', role: 'SaaS Team' },
];

export const footerLinks = [
  // { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: 'https://www.facebook.com/rsharma166/' },
  { label: 'WhatsApp', href: 'https://wa.me/918077176860?text=Hello%20Ritesh%2C%20I%20want%20to%20discuss%20my%20project.' },
  { label: 'Email', href: 'mailto:riteshsharma395@gmail.com' },
];
