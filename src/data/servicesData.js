export const servicesData = {
  'software-development': {
    slug:     'software-development',
    title:    'Software Development',
    tagline:  'Custom Software That Powers Your Business',
    icon:     '💻',
    color:    '#1a3cff',
    heroImage:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    intro:    'We design, build, and maintain custom software solutions that streamline your business operations, reduce costs, and drive growth. From ERP systems to AI-powered applications, we deliver enterprise-grade software tailored exactly to your needs.',
    subServices: [
      { title: 'ERP Systems',            desc: 'Complete enterprise resource planning solutions for all business functions.' },
      { title: 'CRM Development',        desc: 'Customer relationship management systems to drive sales and retention.' },
      { title: 'Desktop Applications',   desc: 'Powerful Windows and cross-platform desktop applications.' },
      { title: 'API Development',        desc: 'RESTful and GraphQL APIs connecting your systems seamlessly.' },
      { title: 'Database Design',        desc: 'Optimized database architecture for performance and scalability.' },
      { title: 'Legacy Modernization',   desc: 'Upgrading outdated systems to modern, maintainable technology.' },
    ],
    technologies: [
      { name: 'React.js',   icon: '⚛️' }, { name: 'Node.js',   icon: '🟢' },
      { name: 'Python',     icon: '🐍' }, { name: 'MySQL',      icon: '🗄️' },
      { name: '.NET',       icon: '🔷' }, { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB',    icon: '🍃' }, { name: 'Docker',     icon: '🐳' },
    ],
    process: [
      { step: '01', title: 'Requirements Analysis', desc: 'Deep-dive into your business processes and goals.' },
      { step: '02', title: 'System Architecture',   desc: 'Design scalable, secure software architecture.' },
      { step: '03', title: 'UI/UX Design',          desc: 'Create intuitive interfaces for all user types.' },
      { step: '04', title: 'Development',           desc: 'Agile development with weekly progress demos.' },
      { step: '05', title: 'Testing & QA',          desc: 'Comprehensive testing across all modules.' },
      { step: '06', title: 'Deployment & Training', desc: 'Go-live support and complete staff training.' },
    ],
    benefits: [
      { emoji: '⚡', title: 'Faster Operations',    desc: 'Automate repetitive tasks, saving 40+ hours per week.' },
      { emoji: '📊', title: 'Real-time Insights',   desc: 'Live dashboards and reports for better decisions.' },
      { emoji: '🔒', title: 'Enterprise Security',  desc: 'Bank-grade security protecting your sensitive data.' },
      { emoji: '📈', title: 'Scalable Growth',      desc: 'Built to grow with your business from day one.' },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$2,999',
        color: '#10b981',
        features: ['Up to 5 modules', 'Basic reporting', '3 user accounts', '3 months support', 'Basic API'],
      },
      {
        name: 'Professional',
        price: '$7,999',
        color: '#1a3cff',
        popular: true,
        features: ['Up to 15 modules', 'Advanced analytics', '20 user accounts', '12 months support', 'Full API + integrations', 'Mobile companion app'],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        color: '#8b5cf6',
        features: ['Unlimited modules', 'AI-powered insights', 'Unlimited users', 'Lifetime support', 'Custom integrations', 'Dedicated team', 'SLA guarantee'],
      },
    ],
    faqs: [
      { q: 'How long does software development take?',    a: 'Depending on complexity, projects range from 2-6 months. Simple systems in 6-8 weeks, full ERP in 3-6 months.' },
      { q: 'Do you provide source code?',                a: 'Yes! You own 100% of the source code upon project completion and payment.' },
      { q: 'Can you integrate with existing systems?',   a: 'Absolutely. We specialize in API integrations with third-party platforms and legacy systems.' },
      { q: 'What about post-launch support?',            a: 'All plans include dedicated support. We offer monthly AMC plans for ongoing maintenance.' },
    ],
    stats: [{ n: '80+', l: 'Software Projects' }, { n: '100%', l: 'Source Code Ownership' }, { n: '99.9%', l: 'Uptime Guaranteed' }, { n: '24/7', l: 'Support Available' }],
  },

  'website-solutions': {
    slug:     'website-solutions',
    title:    'Website Solutions',
    tagline:  'Websites That Convert Visitors Into Customers',
    icon:     '🌐',
    color:    '#10b981',
    heroImage:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
    intro:    'We build stunning, blazing-fast, SEO-optimized websites that not only look amazing but actually grow your business. From corporate websites to full e-commerce platforms with thousands of products.',
    subServices: [
      { title: 'Corporate Websites',   desc: 'Professional company websites that build credibility and trust.' },
      { title: 'E-Commerce Stores',    desc: 'High-converting online stores with seamless payment integration.' },
      { title: 'Landing Pages',        desc: 'Conversion-optimized landing pages for campaigns.' },
      { title: 'WordPress Development',desc: 'Custom WordPress themes and plugins for content-heavy sites.' },
      { title: 'Web App Development',  desc: 'Complex React/Vue.js web applications with rich functionality.' },
      { title: 'Website Redesign',     desc: 'Transform your outdated website into a modern masterpiece.' },
    ],
    technologies: [
      { name: 'React.js',    icon: '⚛️' }, { name: 'Next.js',    icon: '▲' },
      { name: 'WordPress',   icon: '🟦' }, { name: 'Tailwind',   icon: '💨' },
      { name: 'WooCommerce', icon: '🛍️' }, { name: 'Shopify',    icon: '🟩' },
      { name: 'Stripe',      icon: '💳' }, { name: 'AWS S3',     icon: '☁️' },
    ],
    process: [
      { step: '01', title: 'Discovery Call',    desc: 'Understand your business, goals and target audience.' },
      { step: '02', title: 'Wireframing',       desc: 'Create blueprints for all pages and user flows.' },
      { step: '03', title: 'Visual Design',     desc: 'Stunning designs aligned with your brand identity.' },
      { step: '04', title: 'Development',       desc: 'Clean, fast, SEO-optimized code development.' },
      { step: '05', title: 'Content & SEO',     desc: 'Content integration with on-page SEO optimization.' },
      { step: '06', title: 'Launch & Support',  desc: 'Go-live with ongoing performance monitoring.' },
    ],
    benefits: [
      { emoji: '🚀', title: 'Lightning Fast',   desc: '90+ PageSpeed score for maximum SEO ranking.' },
      { emoji: '📱', title: 'Mobile First',     desc: 'Perfect on all devices — phones, tablets, desktops.' },
      { emoji: '🔍', title: 'SEO Optimized',   desc: 'Built for Google with technical SEO best practices.' },
      { emoji: '🛡️', title: 'SSL & Secure',   desc: 'HTTPS encrypted with daily security monitoring.' },
    ],
    pricing: [
      { name: 'Basic',        price: '$499',   color: '#10b981', features: ['5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO', '3 months hosting'] },
      { name: 'Business',     price: '$1,499', color: '#1a3cff', popular: true, features: ['15 pages', 'CMS (WordPress)', 'Blog system', 'Advanced SEO', '12 months hosting', 'Analytics'] },
      { name: 'E-Commerce',   price: '$2,999', color: '#8b5cf6', features: ['Unlimited pages', 'Online store', 'Payment gateway', 'Inventory management', 'Priority support', 'Multi-language'] },
    ],
    faqs: [
      { q: 'How long to build a website?',         a: 'Basic websites: 1-2 weeks. E-commerce: 3-6 weeks. Complex web apps: 2-4 months.' },
      { q: 'Will my website rank on Google?',      a: 'Yes! We implement full technical SEO. Most clients see first-page results within 3-6 months.' },
      { q: 'Do you provide hosting?',              a: 'Yes. We offer managed hosting on fast Sri Lankan and international servers.' },
      { q: 'Can I update content myself?',         a: 'Absolutely. All sites come with a CMS so you can update content without any coding.' },
    ],
    stats: [{ n: '100+', l: 'Websites Built' }, { n: '90+', l: 'PageSpeed Score' }, { n: '100%', l: 'Mobile Responsive' }, { n: '3x', l: 'Avg Lead Increase' }],
  },

  'mobile-apps': {
    slug:     'mobile-apps',
    title:    'Mobile Applications',
    tagline:  'Apps That Users Love to Use Every Day',
    icon:     '📱',
    color:    '#8b5cf6',
    heroImage:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    intro:    'We build beautiful, high-performance mobile applications for iOS and Android that deliver exceptional user experiences and drive real business results.',
    subServices: [
      { title: 'iOS App Development',      desc: 'Native Swift apps for iPhone and iPad with App Store deployment.' },
      { title: 'Android App Development',  desc: 'Native Kotlin apps for all Android devices and Play Store.' },
      { title: 'React Native Apps',        desc: 'Cross-platform apps sharing 90%+ code for iOS and Android.' },
      { title: 'Flutter Development',      desc: 'Beautiful pixel-perfect apps with Flutter framework.' },
      { title: 'App UI/UX Design',         desc: 'Intuitive, engaging mobile interfaces that delight users.' },
      { title: 'App Maintenance',          desc: 'Ongoing updates, bug fixes, and feature enhancements.' },
    ],
    technologies: [
      { name: 'React Native', icon: '⚛️' }, { name: 'Flutter',   icon: '🦋' },
      { name: 'Swift',        icon: '🍎' }, { name: 'Kotlin',    icon: '🟣' },
      { name: 'Firebase',     icon: '🔥' }, { name: 'GraphQL',   icon: '◈' },
      { name: 'Push Notify',  icon: '🔔' }, { name: 'Google Maps',icon: '🗺️' },
    ],
    process: [
      { step: '01', title: 'App Strategy',     desc: 'Define app goals, features, and monetization model.' },
      { step: '02', title: 'UX Wireframes',    desc: 'Design user flows and interaction patterns.' },
      { step: '03', title: 'UI Design',        desc: 'Pixel-perfect designs following iOS/Android guidelines.' },
      { step: '04', title: 'Development',      desc: 'Iterative development with bi-weekly app builds.' },
      { step: '05', title: 'Testing & QA',     desc: 'Device testing, performance and security audit.' },
      { step: '06', title: 'Store Submission', desc: 'Handle App Store and Play Store submission.' },
    ],
    benefits: [
      { emoji: '📱', title: 'Native Performance', desc: 'Smooth 60fps performance on all devices.' },
      { emoji: '🔔', title: 'Push Notifications', desc: 'Re-engage users with targeted notifications.' },
      { emoji: '📡', title: 'Offline Support',    desc: 'Works without internet for critical features.' },
      { emoji: '🔒', title: 'App Security',       desc: 'Biometric auth, encryption, secure storage.' },
    ],
    pricing: [
      { name: 'Basic App',    price: '$3,999', color: '#8b5cf6', features: ['Single platform', 'Up to 10 screens', 'Basic backend', 'App Store submit', '3 months support'] },
      { name: 'Business App', price: '$8,999', color: '#1a3cff', popular: true, features: ['iOS + Android', 'Up to 30 screens', 'Full backend API', 'Admin dashboard', '12 months support', 'Analytics'] },
      { name: 'Enterprise',   price: 'Custom', color: '#f59e0b', features: ['iOS + Android + Web', 'Unlimited screens', 'AI features', 'Custom integrations', 'Lifetime support', 'Dedicated team'] },
    ],
    faqs: [
      { q: 'How long to build a mobile app?',    a: 'Simple apps: 6-8 weeks. Complex apps with backend: 3-5 months.' },
      { q: 'Do you publish to App Stores?',      a: 'Yes. We handle the complete App Store and Google Play submission process.' },
      { q: 'Can it work offline?',               a: 'Yes! We implement offline-first architecture for core functionality.' },
      { q: 'React Native vs Native?',            a: 'For most apps, React Native is 80% cheaper with 95% the performance. We recommend based on your specific needs.' },
    ],
    stats: [{ n: '50+', l: 'Apps Delivered' }, { n: '500K+', l: 'Total App Users' }, { n: '4.8★', l: 'Average Rating' }, { n: '2', l: 'Platforms Supported' }],
  },
}

// Generate remaining services with minimal data
const remainingServices = [
  { slug: 'network-security',      title: 'Network & Security',      icon: '🛡️', color: '#f59e0b', heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80', intro: 'Complete network infrastructure design, CCTV installations, cybersecurity audits, and annual maintenance contracts that keep your business protected 24/7.' },
  { slug: 'cloud-infrastructure',  title: 'Cloud Infrastructure',    icon: '☁️', color: '#06b6d4', heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80', intro: 'Scalable cloud hosting, server management, AWS/Azure deployments, Kubernetes orchestration, and complete DevOps automation for modern businesses.' },
  { slug: 'digital-printing',      title: 'Digital Printing',        icon: '🖨️', color: '#ec4899', heroImage: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=1200&q=80', intro: 'High-quality customized printing for mugs, t-shirts, banners, business cards, and all promotional materials with fast turnaround and island-wide delivery.' },
  { slug: 'graphic-design',        title: 'Graphic Design',          icon: '🎨', color: '#f97316', heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80', intro: 'Stunning visual designs that make your brand unforgettable. From logos to complete brand identity systems, social media content, and print materials.' },
  { slug: 'digital-marketing',     title: 'Digital Marketing',       icon: '📈', color: '#1a3cff', heroImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80', intro: 'Data-driven digital marketing strategies that grow your audience, generate quality leads, and deliver measurable ROI across all digital channels.' },
  { slug: 'it-support',            title: 'IT Support',              icon: '🔧', color: '#10b981', heroImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80', intro: '24/7 technical support, proactive monitoring, hardware maintenance, and annual maintenance contracts that keep your IT infrastructure running perfectly.' },
  { slug: 'business-solutions',    title: 'Business Solutions',      icon: '💼', color: '#8b5cf6', heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80', intro: 'Complete business automation with POS systems, inventory management, HR software, payroll, and customized solutions for every business process.' },
  { slug: 'emerging-technologies', title: 'Emerging Technologies',   icon: '🤖', color: '#06b6d4', heroImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80', intro: 'Stay ahead of the curve with AI integration, machine learning, blockchain, IoT, and augmented reality solutions tailored for your industry.' },
  { slug: 'bpo-data-entry',        title: 'BPO & Data Entry',        icon: '📊', color: '#f59e0b', heroImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', intro: 'Accurate, efficient business process outsourcing — data entry, document digitization, virtual assistant services, and back-office support at scale.' },
]

remainingServices.forEach((s) => {
  servicesData[s.slug] = {
    ...s,
    subServices: [
      { title: 'Consultation',       desc: `Expert consultation for your ${s.title.toLowerCase()} needs.` },
      { title: 'Implementation',     desc: 'Professional implementation by certified specialists.' },
      { title: 'Training',           desc: 'Complete team training for smooth adoption.' },
      { title: 'Maintenance',        desc: 'Ongoing support and maintenance packages.' },
      { title: 'Optimization',       desc: 'Continuous performance optimization and improvements.' },
      { title: 'Reporting',          desc: 'Detailed reports and analytics on all activities.' },
    ],
    technologies: [
      { name: 'Latest Tools', icon: '🔧' }, { name: 'Cloud Platforms', icon: '☁️' },
      { name: 'AI Powered',   icon: '🤖' }, { name: 'Analytics',      icon: '📊' },
    ],
    process: [
      { step: '01', title: 'Consultation', desc: 'Free consultation to understand your requirements.' },
      { step: '02', title: 'Planning',     desc: 'Detailed project plan and timeline.' },
      { step: '03', title: 'Execution',    desc: 'Expert execution by our specialist team.' },
      { step: '04', title: 'Delivery',     desc: 'On-time delivery with quality assurance.' },
    ],
    benefits: [
      { emoji: '⚡', title: 'Fast Results',       desc: 'Quick turnaround with professional quality.' },
      { emoji: '💰', title: 'Cost Effective',     desc: 'Competitive pricing without compromising quality.' },
      { emoji: '🎯', title: 'Goal Focused',       desc: 'Every action aligned with your business goals.' },
      { emoji: '📞', title: 'Dedicated Support',  desc: '24/7 support team always ready to help.' },
    ],
    pricing: [
      { name: 'Basic',      price: 'Get Quote', color: s.color,   features: ['Starter package', 'Core features', 'Email support', '30 days support'] },
      { name: 'Standard',   price: 'Get Quote', color: '#1a3cff', popular: true, features: ['Full package', 'All features', 'Priority support', '6 months support', 'Monthly reports'] },
      { name: 'Premium',    price: 'Get Quote', color: '#8b5cf6', features: ['Enterprise package', 'Custom features', '24/7 support', '12 months support', 'Dedicated manager'] },
    ],
    faqs: [
      { q: 'How do I get started?',    a: 'Simply contact us for a free consultation and we will guide you through the process.' },
      { q: 'What is your turnaround?', a: 'Depends on scope. We provide detailed timelines during our consultation call.' },
      { q: 'Do you offer AMC?',        a: 'Yes, we offer comprehensive Annual Maintenance Contracts for ongoing support.' },
    ],
    stats: [{ n: '50+', l: 'Projects Done' }, { n: '99%', l: 'Satisfaction' }, { n: '24/7', l: 'Support' }, { n: '5★', l: 'Rated' }],
  }
})

export default servicesData