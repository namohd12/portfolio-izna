export const profile = {
  name: 'Nor Izna Binti Mohd Isa',
  displayName: 'Nor Izna Mohd Isa',
  role: 'Associate Risk Consultant',
  email: 'mnorizna@gmail.com',
  linkedin: 'https://www.linkedin.com/in/izna-mohd',
  location: 'Petaling Jaya, Selangor',
  resume: '/nor-izna-resume.pdf',
  summary: 'I help organisations understand technology risks, evaluate security controls and navigate regulatory requirements. My work brings together IT audit, cybersecurity and practical, considered recommendations.',
  about: [
    'I am an IT risk and cybersecurity professional working at the intersection of technology, governance and assurance. As an Associate Risk Consultant at Crowe Malaysia, I have completed 18 IT audit and control assessment engagements across financial services, technology, retail, investment, insurance and construction.',
    'My experience spans IT general and application controls, risk assessments, cybersecurity reviews and regulatory compliance. A degree in Information Security and Assurance, together with CySA+ and ISC2 CC certifications, supports my foundation in security monitoring and control evaluation.',
    'I value clear communication, careful analysis and recommendations grounded in the business. From audit findings to hands-on security projects, my focus is on making complex risks easier to understand and act on.',
  ],
};

export const experience = [
  {
    title: 'Associate Risk Consultant', company: 'Crowe Malaysia Plt', location: 'Kuala Lumpur', date: 'Sept 2025 — Present', current: true,
    intro: 'IT audit and control assurance across diverse industries, with a focus on regulatory compliance and practical risk remediation.',
    points: [
      'Led and participated in assessments against BNM RMiT, BNM MAS and SC TRM requirements, including ITGC, ITAC and data integrity testing.',
      'Completed 18 IT audit and control assessment engagements across retail, technology, financial services, investment, insurance and construction.',
      'Assessed business-critical platforms including SAP, Point-of-Sale systems, HR2000, UBS Accounting and payment processing systems.',
      'Evaluated control design and operating effectiveness; documented findings and root causes, and presented recommendations to management and stakeholders.',
    ], tags: ['IT Audit', 'Regulatory Compliance', 'Control Evaluation', 'Risk Assessment'],
  },
  {
    title: 'Security Consultant Intern', company: 'Firmus Sdn Bhd', location: 'Kuala Lumpur', date: 'Feb — Aug 2025', current: false,
    intro: 'Supported security assurance, risk assessment and cybersecurity awareness engagements.',
    points: [
      'Prepared ISO 27001 audit plans, checklists, workpapers and findings covering non-conformities and opportunities for improvement.',
      'Supported two External Service Provider cybersecurity risk assessments aligned with BNM RMiT, preparing information requests and assessment documentation.',
      'Developed an internal PHP-based Cyber Drill application and contributed to practical threat scenarios for client training simulations.',
      'Supported Data Loss Prevention, Data Centre Resilience and Assessment, Internal IT Controls and Business Continuity Management awareness initiatives.',
    ], tags: ['ISO 27001', 'Cybersecurity', 'BNM RMiT', 'PHP Development'],
  },
];

export const skills = [
  { icon: 'audit', title: 'IT Audit & Assurance', tags: ['IT General Controls', 'IT Application Controls', 'Data Integrity Testing', 'Control Evaluation', 'Gap Analysis'] },
  { icon: 'governance', title: 'Governance, Risk & Compliance', tags: ['Risk Assessment', 'ISO 27001', 'COBIT', 'BNM RMiT', 'BNM MAS', 'SC TRM'] },
  { icon: 'security', title: 'Security & Technology', tags: ['Wazuh', 'Wireshark', 'Nmap', 'Snort', 'Burp Suite', 'Python', 'PHP', 'SQL', 'HTML / CSS'], note: 'Also familiar with AWS architecture concepts and basic Power BI.' },
  { icon: 'people', title: 'Communication & Collaboration', tags: ['Stakeholder Communication', 'Analytical Thinking', 'Attention to Detail', 'Adaptability', 'Microsoft Office'], note: 'Malay · Native   /   English · Fluent   /   Arabic · Basic' },
];

export const certifications = [
  { name: 'CompTIA Cybersecurity Analyst (CySA+)', issuer: 'CompTIA', date: 'Aug 2025' },
  { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC2', date: 'Oct 2024' },
];

export const projects = [
  { id: 'training', title: 'ISMS Internal Auditor Training', date: 'May 2025', category: 'GOVERNANCE & ASSURANCE', image: '/images/workspace.webp', alt: 'A quiet workspace with a laptop and greenery', description: 'Developed and customised Bahasa Melayu training materials for ISO 27001 Internal Auditor programmes.', detail: 'The materials covered ISMS requirements, audit methodologies and reporting practices. Scenario-based quizzes supported practical understanding for client training programmes.', tags: ['ISO 27001', 'Training Development'] },
  { id: 'siem', title: 'SIEM & Threat Detection Lab', date: 'Apr 2025', category: 'SECURITY MONITORING', image: '/images/architecture.webp', alt: 'Architectural lines of a modern building', description: 'Built a home-based Wazuh SIEM laboratory with custom detection rules and real-time alerting.', detail: 'Simulated attack scenarios across Windows and Linux endpoints and network devices to develop hands-on security monitoring experience.', tags: ['Wazuh', 'Threat Detection'] },
  { id: 'cyted', title: 'CyTED · Toxicity Detection', date: 'Oct 2024', category: 'FINAL YEAR PROJECT', image: '/images/plant.webp', alt: 'Soft natural light and green foliage', description: 'Developed a bilingual Malay–English cyberbullying sentiment analysis model for my final year project.', detail: 'Used a custom dataset of 20,000 samples scraped from Twitter, with text preprocessing and data cleaning. Optimised SVM, Random Forest and Logistic Regression models achieved over 85% accuracy.', tags: ['Python', 'Machine Learning'] },
];

export const achievements = [
  { title: 'Top 15 Finalist', event: 'UM Cybersecurity Summit CTF', date: 'May 2025' },
  { title: 'First Place Award', event: 'Microsoft AI for Accessibility Hackathon', date: 'Jun 2024' },
  { title: 'Top 20 Finalist', event: 'RAKSASA CTF by Rawsec', date: 'Oct 2023' },
  { title: 'Top 5 Finalist Speaker', event: 'Kejohanan Debat dan Pidato Piala Naib Canselor USIM', date: 'Mar 2023' },
];

export const leadership = [
  { title: 'Director', organisation: 'USIM GISO 2024 · Yogyakarta, Indonesia', date: 'Aug — Sept 2024', description: 'Led a multidisciplinary team across cultural and operational activities.' },
  { title: 'Secretary', organisation: 'Information Security and Assurance Club', date: 'Oct 2022 — Oct 2023', description: 'Served as an emcee and moderator for academic discussions and faculty events.' },
  { title: 'Secretary', organisation: 'Bulan Sabit Malaysia · USIM', date: 'Oct 2021 — Feb 2023', description: 'Managed documentation, correspondence and activity reports; participated in humanitarian and community service initiatives.' },
];
