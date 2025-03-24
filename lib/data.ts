// Case Studies Data
export const caseStudies = [
  {
    id: "e-commerce-app-redesign",
    title: "E-commerce App Redesign",
    shortDescription:
      "Increased conversions by 40% through UX improvements and performance optimization for a leading online retailer.",
    category: "e-commerce",
    image: "/placeholder.svg?height=600&width=800",
    client: "Global Retail Inc.",
    year: "2023",
    featured: true,
    overview:
      "Global Retail Inc., a leading online retailer with over 5 million customers worldwide, approached us to redesign their existing mobile app which was suffering from poor performance, outdated UI, and declining user engagement. The goal was to create a modern, high-performing app that would improve the shopping experience and increase conversions.",
    challenge:
      "The existing app was built with an outdated technology stack, resulting in slow load times, frequent crashes, and a user interface that didn't meet modern design standards. The client was losing customers to competitors with more user-friendly mobile experiences, and conversion rates had declined by 15% over the previous year.",
    solution:
      "We rebuilt the app from the ground up using React Native, focusing on performance, usability, and a clean, modern design. Our approach included:\n\n- Conducting extensive user research to understand pain points and preferences\n- Developing a streamlined information architecture and user flow\n- Creating a modern UI with intuitive navigation and clear product presentation\n- Implementing performance optimizations for fast loading and smooth interactions\n- Adding personalized recommendations based on user behavior\n- Streamlining the checkout process to reduce abandonment",
    results: [
      "40% increase in conversion rate within 3 months of launch",
      "65% improvement in app loading speed",
      "35% increase in average session duration",
      "50% reduction in cart abandonment rate",
      "4.8/5 star rating on app stores (up from 3.2)",
      "28% increase in repeat purchases",
    ],
    testimonial: {
      quote:
        "The Fyndx team transformed our outdated app into a modern, high-performing shopping experience that our customers love. The results have exceeded our expectations, with significant improvements in engagement, conversion, and customer satisfaction.",
      author: "Sarah Johnson",
      role: "Director of Digital, Global Retail Inc.",
    },
    technologies: ["React Native", "Redux", "Node.js", "Firebase", "Stripe API", "Algolia Search"],
    services: ["Custom App Development", "UI/UX Design", "App Optimization"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "social-media-integration",
    title: "Social Media Integration",
    shortDescription:
      "Boosted user engagement by 75% with seamless sharing features and real-time notifications for a community platform.",
    category: "social",
    image: "/placeholder.svg?height=600&width=800",
    client: "ConnectHub",
    year: "2022",
    featured: true,
    overview:
      "ConnectHub, a growing community platform with 2 million users, wanted to enhance their mobile app with advanced social media integration features to increase user engagement and retention. They needed a solution that would make content sharing seamless while implementing real-time notifications to keep users connected.",
    challenge:
      "The existing app had limited social features and suffered from delayed notifications, causing users to miss important interactions. User engagement metrics were declining, and the app was losing ground to competitors with more robust social capabilities.",
    solution:
      "We implemented a comprehensive social media integration strategy using React Native, focusing on real-time features and seamless sharing capabilities. Our approach included:\n\n- Developing a unified social sharing system that worked across multiple platforms\n- Implementing real-time notifications using WebSockets\n- Creating an activity feed with rich media support\n- Building interactive comment and reaction systems\n- Optimizing media uploads for speed and reliability\n- Implementing deep linking for improved content discovery",
    results: [
      "75% increase in overall user engagement",
      "120% increase in content sharing",
      "50% improvement in user retention rates",
      "90% faster notification delivery",
      "35% increase in daily active users",
      "60% more user-generated content",
    ],
    testimonial: {
      quote:
        "Fyndx delivered exactly what we needed - a seamless social experience that keeps our users engaged and connected. The real-time features have transformed how our community interacts, and the metrics speak for themselves.",
      author: "Michael Chen",
      role: "CTO, ConnectHub",
    },
    technologies: ["React Native", "Socket.io", "Firebase", "Redux", "Content Delivery Network", "OAuth 2.0"],
    services: ["Custom App Development", "App Optimization", "UI/UX Design"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "healthcare-mobile-app",
    title: "Healthcare Mobile App",
    shortDescription:
      "Developed a HIPAA-compliant telehealth solution that improved patient satisfaction scores by 60%.",
    category: "healthcare",
    image: "/placeholder.svg?height=600&width=800",
    client: "MediCare Solutions",
    year: "2023",
    featured: true,
    overview:
      "MediCare Solutions, a healthcare provider serving over 100,000 patients, needed a secure, HIPAA-compliant telehealth application to expand their services and improve patient care accessibility. They required a solution that would integrate with their existing systems while providing an intuitive experience for both patients and healthcare providers.",
    challenge:
      "The client needed to rapidly deploy a telehealth solution during the pandemic that would meet strict security and compliance requirements while being accessible to patients of all technical abilities. They also needed seamless integration with their existing electronic health record (EHR) system and appointment scheduling software.",
    solution:
      "We developed a comprehensive telehealth platform using React Native with a focus on security, compliance, and usability. Our solution included:\n\n- End-to-end encrypted video consultations\n- Secure messaging between patients and providers\n- Digital prescription management\n- Appointment scheduling and reminders\n- Integration with existing EHR systems\n- Accessible interface design for users of all abilities\n- Offline mode for reviewing medical information",
    results: [
      "60% improvement in patient satisfaction scores",
      "40% reduction in appointment no-shows",
      "35% decrease in administrative workload",
      "25% increase in appointment capacity",
      "100% HIPAA compliance with zero security incidents",
      "45% of patients preferred telehealth for follow-up appointments",
    ],
    testimonial: {
      quote:
        "The telehealth app developed by Fyndx has revolutionized how we deliver care. Our patients appreciate the convenience and security, while our providers value the reliability and integration with our existing systems. It's been a game-changer for our practice.",
      author: "Dr. Emily Rodriguez",
      role: "Medical Director, MediCare Solutions",
    },
    technologies: [
      "React Native",
      "HIPAA-compliant Cloud Infrastructure",
      "WebRTC",
      "Node.js",
      "OAuth 2.0",
      "HL7 FHIR",
    ],
    services: ["Custom App Development", "UI/UX Design", "Consulting & Strategy"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "fintech-wallet-app",
    title: "Fintech Wallet App",
    shortDescription:
      "Created a secure and user-friendly mobile wallet that processed over $10M in transactions within the first quarter.",
    category: "fintech",
    image: "/placeholder.svg?height=600&width=800",
    client: "PayEase",
    year: "2022",
    featured: false,
    overview:
      "PayEase, a fintech startup, needed a secure and user-friendly mobile wallet application that would allow users to manage their finances, make payments, and transfer money easily. The goal was to create a solution that would stand out in a competitive market by offering superior security and a seamless user experience.",
    challenge:
      "The fintech market is highly competitive and heavily regulated, requiring strict compliance with financial regulations while still delivering an intuitive user experience. The client needed a solution that would build trust with users through robust security measures while making complex financial transactions simple and accessible.",
    solution:
      "We developed a comprehensive mobile wallet using React Native with a focus on security, usability, and performance. Our solution included:\n\n- Biometric authentication (fingerprint and face recognition)\n- End-to-end encrypted transactions\n- Real-time transaction monitoring and alerts\n- Intuitive expense tracking and categorization\n- Seamless integration with banking APIs\n- QR code and NFC payment capabilities\n- Personalized financial insights and recommendations",
    results: [
      "Over $10M in transactions processed within the first quarter",
      "85% user retention rate after 6 months",
      "4.7/5 star rating on app stores",
      "30% month-over-month growth in user acquisition",
      "Zero security incidents since launch",
      "Average transaction time of less than 3 seconds",
    ],
    testimonial: {
      quote:
        "Fyndx delivered a mobile wallet that exceeds our expectations in every way. The security features give our users confidence, while the intuitive interface makes complex financial transactions simple. The app has been instrumental in our rapid growth and market penetration.",
      author: "Alex Thompson",
      role: "CEO, PayEase",
    },
    technologies: ["React Native", "Blockchain", "Node.js", "AWS", "Plaid API", "Stripe API"],
    services: ["Custom App Development", "UI/UX Design", "Consulting & Strategy"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "enterprise-inventory-system",
    title: "Enterprise Inventory System",
    shortDescription:
      "Developed a cross-platform inventory management system that reduced processing time by 65% for a manufacturing company.",
    category: "enterprise",
    image: "/placeholder.svg?height=600&width=800",
    client: "Industrial Innovations",
    year: "2021",
    featured: false,
    overview:
      "Industrial Innovations, a manufacturing company with operations across multiple locations, needed a modern inventory management system to replace their outdated legacy software. They required a solution that would streamline inventory tracking, improve accuracy, and integrate with their existing ERP system.",
    challenge:
      "The client's legacy inventory system was slow, prone to errors, and unable to provide real-time visibility across multiple warehouses. Inventory discrepancies were causing production delays and increasing costs. The new system needed to work seamlessly across desktop and mobile devices while handling complex inventory workflows.",
    solution:
      "We developed a comprehensive cross-platform inventory management system using React Native for mobile and React for web interfaces. Our solution included:\n\n- Barcode and QR code scanning for rapid inventory processing\n- Real-time synchronization across all locations\n- Automated reorder point calculations and alerts\n- Batch tracking and expiration date management\n- Advanced reporting and analytics dashboard\n- Integration with existing ERP and accounting systems\n- Offline capability for warehouse areas with poor connectivity",
    results: [
      "65% reduction in inventory processing time",
      "90% decrease in inventory discrepancies",
      "35% reduction in stockouts",
      "25% decrease in carrying costs",
      "ROI achieved within 8 months of implementation",
      "Seamless adoption with 95% user satisfaction",
    ],
    testimonial: {
      quote:
        "The inventory management system developed by Fyndx has transformed our operations. We now have real-time visibility across all our warehouses, and the efficiency gains have been substantial. The system's intuitive interface made training easy, and the mobile capabilities allow our team to manage inventory from anywhere.",
      author: "Jennifer Martinez",
      role: "Operations Director, Industrial Innovations",
    },
    technologies: ["React Native", "React", "Node.js", "MongoDB", "GraphQL", "AWS"],
    services: ["Custom App Development", "UI/UX Design", "Consulting & Strategy"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

// Services Data
export const services = [
  {
    id: "custom-app-development",
    title: "Custom App Development",
    shortDescription: "Tailored React Native solutions for your unique business needs.",
    description:
      "Our custom app development service delivers tailor-made React Native applications designed specifically for your business requirements. We follow a collaborative approach, working closely with you from concept to deployment to ensure your vision becomes reality.",
    icon: "📱",
    image: "/assets/images/custom-app-development.jpg?height=600&width=800",
    benefits: [
      "Fully customized solutions that align with your business goals",
      "Scalable architecture that grows with your business",
      "Cross-platform compatibility for iOS and Android",
      "Optimized performance and user experience",
    ],
    // pricing: {
    //   starter: {
    //     price: "$10,000+",
    //     description: "Basic app with essential features",
    //   },
    //   professional: {
    //     price: "$25,000+",
    //     description: "Advanced app with custom features and integrations",
    //   },
    //   enterprise: {
    //     price: "Custom",
    //     description: "Complex enterprise solutions with advanced requirements",
    //   },
    // },
    featured: true,
    process: [
      {
        title: "Discovery & Planning",
        description:
          "We begin by understanding your business goals, target audience, and specific requirements to create a detailed project plan.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Our designers create wireframes and interactive prototypes to visualize the app's user interface and experience.",
      },
      {
        title: "Development",
        description:
          "Our experienced React Native developers build your application with clean, maintainable code and regular progress updates.",
      },
      {
        title: "Testing & QA",
        description:
          "Rigorous testing across multiple devices and platforms ensures your app is bug-free and performs optimally.",
      },
      {
        title: "Deployment",
        description: "We handle the submission process to app stores and ensure a smooth launch of your application.",
      },
      {
        title: "Post-Launch Support",
        description: "We provide ongoing maintenance and support to keep your app running smoothly and up-to-date.",
      },
    ],
  },
  {
    id: "app-optimization",
    title: "App Optimization",
    shortDescription: "Enhance your app's performance, speed, and user experience.",
    description:
      "Our app optimization service focuses on improving your application's performance, load times, and overall user experience. We use industry best practices and advanced techniques to ensure your app runs smoothly and efficiently across all devices.",
    icon: "⚡",
    image: "/assets/images/app-optimization.png?height=600&width=800",
    benefits: [
      "Faster load times and improved responsiveness",
      "Reduced app size and memory usage",
      "Better battery efficiency",
      "Enhanced user experience and satisfaction",
    ],
    // pricing: {
    //   starter: {
    //     price: "$5,000+",
    //     description: "Basic performance audit and optimization",
    //   },
    //   professional: {
    //     price: "$12,000+",
    //     description: "Comprehensive optimization with advanced techniques",
    //   },
    //   enterprise: {
    //     price: "Custom",
    //     description: "Full-scale optimization for complex applications",
    //   },
    // },
    featured: true,
    process: [
      {
        title: "Performance Audit",
        description: "We analyze your app's current performance metrics and identify areas for improvement.",
      },
      {
        title: "Optimization Strategy",
        description: "We develop a tailored optimization plan based on audit findings and your specific needs.",
      },
      {
        title: "Implementation",
        description: "Our team implements various optimization techniques to enhance app performance.",
      },
      {
        title: "Testing & Verification",
        description: "We conduct thorough testing to measure improvements and ensure stability.",
      },
      {
        title: "Monitoring",
        description: "We set up performance monitoring tools to track long-term performance metrics.",
      },
      {
        title: "Documentation & Training",
        description: "We provide documentation and training for maintaining optimal app performance.",
      },
    ],
  },
  {
    id: "consulting-and-strategy",
    title: "Consulting & Strategy",
    shortDescription: "Expert guidance for your mobile app development journey.",
    description:
      "Our consulting and strategy service provides expert guidance to help you make informed decisions about your mobile app development journey. We analyze your business needs, market conditions, and technical requirements to create a comprehensive roadmap for success.",
    icon: "💡",
    image: "/assets/images/consulting-and-strategy.png?height=600&width=800",
    benefits: [
      "Expert insights into mobile app development",
      "Data-driven decision making",
      "Risk mitigation strategies",
      "Clear project roadmap and timeline",
    ],
    // pricing: {
    //   starter: {
    //     price: "$3,000+",
    //     description: "Basic consultation and strategy session",
    //   },
    //   professional: {
    //     price: "$8,000+",
    //     description: "Comprehensive strategy development and planning",
    //   },
    //   enterprise: {
    //     price: "Custom",
    //     description: "Long-term strategic partnership and consulting",
    //   },
    // },
    featured: false,
    process: [
      {
        title: "Initial Assessment",
        description: "We evaluate your current situation, goals, and challenges to understand your needs.",
      },
      {
        title: "Market Analysis",
        description: "We analyze market trends, competition, and opportunities in your industry.",
      },
      {
        title: "Strategy Development",
        description: "We create a detailed strategy aligned with your business objectives.",
      },
      {
        title: "Technology Planning",
        description: "We recommend the best technical solutions and architecture for your needs.",
      },
      {
        title: "Risk Assessment",
        description: "We identify potential risks and develop mitigation strategies.",
      },
      {
        title: "Roadmap Creation",
        description: "We deliver a comprehensive roadmap for implementation and growth.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Create intuitive and engaging user experiences for your app.",
    description:
      "Our UI/UX design service focuses on creating beautiful, intuitive interfaces that delight users while achieving your business goals. We combine aesthetic appeal with functional design to deliver exceptional user experiences that drive engagement and retention.",
    icon: "🎨",
    image: "/assets/images/ui-ux-design.png?height=600&width=800",
    benefits: [
      "Intuitive and user-friendly interfaces",
      "Increased user engagement and retention",
      "Consistent design language across platforms",
      "Accessibility-focused design approach",
    ],
    // pricing: {
    //   starter: {
    //     price: "$8,000+",
    //     description: "Basic UI/UX design package",
    //   },
    //   professional: {
    //     price: "$15,000+",
    //     description: "Advanced design with custom interactions",
    //   },
    //   enterprise: {
    //     price: "Custom",
    //     description: "Comprehensive design systems and complex workflows",
    //   },
    // },
    featured: false,
    process: [
      {
        title: "User Research",
        description: "We conduct research to understand your users' needs and behaviors.",
      },
      {
        title: "Information Architecture",
        description: "We organize content and features in a logical, user-friendly structure.",
      },
      {
        title: "Wireframing",
        description: "We create low-fidelity designs to establish layout and functionality.",
      },
      {
        title: "Visual Design",
        description: "We develop the visual language and create high-fidelity designs.",
      },
      {
        title: "Prototyping",
        description: "We build interactive prototypes to test user flows and interactions.",
      },
      {
        title: "Design System",
        description: "We create a comprehensive design system for consistent implementation.",
      },
    ],
  },
  {
    id: "maintenance-and-support",
    title: "Maintenance & Support",
    shortDescription: "Keep your app running smoothly with ongoing maintenance and support.",
    description:
      "Our maintenance and support service ensures your application continues to perform optimally after launch. We provide regular updates, bug fixes, and technical support to keep your app secure, stable, and up-to-date with the latest platform changes.",
    icon: "🛠️",
    image: "/assets/images/maintainance-and-support-mobile-app.png?height=600&width=800",
    benefits: [
      "Regular updates and security patches",
      "Proactive performance monitoring",
      "Quick response to technical issues",
      "Platform compatibility maintenance",
    ],
    // pricing: {
    //   starter: {
    //     price: "$1,500+/month",
    //     description: "Basic maintenance and support package",
    //   },
    //   professional: {
    //     price: "$3,000+/month",
    //     description: "Advanced support with priority response",
    //   },
    //   enterprise: {
    //     price: "Custom",
    //     description: "24/7 dedicated support and maintenance",
    //   },
    // },
    featured: false,
    process: [
      {
        title: "Monitoring Setup",
        description: "We implement monitoring tools to track app performance and issues.",
      },
      {
        title: "Regular Updates",
        description: "We perform regular updates to maintain security and compatibility.",
      },
      {
        title: "Bug Fixes",
        description: "We quickly identify and resolve any issues that arise.",
      },
      {
        title: "Performance Optimization",
        description: "We continuously optimize app performance based on usage data.",
      },
      {
        title: "Platform Updates",
        description: "We ensure compatibility with new OS versions and devices.",
      },
      {
        title: "Technical Support",
        description: "We provide ongoing technical support and consultation.",
      },
    ],
  },
  {
    id: "cross-platform-development",
    title: "Cross Platform Development",
    shortDescription: "Build once, deploy everywhere with React Native.",
    description:
      "Our cross-platform development service enables you to reach users across multiple platforms with a single codebase. Using React Native, we create high-quality applications that maintain native performance and feel while reducing development time and costs.",
    icon: "🔄",
    image: "/assets/images/Cross-platform-mobile-app-development.webp?height=600&width=800",
    benefits: [
      "Single codebase for iOS and Android",
      "Faster time-to-market",
      "Reduced development and maintenance costs",
      "Consistent user experience across platforms",
    ],
    // pricing: {
    //   starter: {
    //     price: "$15,000+",
    //     description: "Basic cross-platform app with core features",
    //   },
    //   professional: {
    //     price: "$30,000+",
    //     description: "Advanced cross-platform app with custom features",
    //   },
    //   enterprise: {
    //     price: "Custom",
    //     description: "Enterprise-grade cross-platform solutions",
    //   },
    // },
    featured: true,
    process: [
      {
        title: "Requirements Analysis",
        description: "We analyze your needs to ensure optimal cross-platform implementation.",
      },
      {
        title: "Architecture Design",
        description: "We design a scalable architecture that works efficiently across platforms.",
      },
      {
        title: "UI/UX Design",
        description: "Our designers create interfaces that adapt seamlessly to each platform.",
      },
      {
        title: "Development",
        description: "We build your app using React Native for optimal cross-platform performance.",
      },
      {
        title: "Platform-Specific Testing",
        description: "We thoroughly test your app on each target platform.",
      },
      {
        title: "Deployment & Support",
        description: "We handle deployment to all platforms and provide ongoing support.",
      },
    ],
  },
]
