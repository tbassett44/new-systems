export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  detailedDefinition?: string;
  category: 'core-concepts' | 'technical-terms' | 'frameworks' | 'governance' | 'economics' | 'technology';
  relatedTerms?: string[];
  referencedIn: {
    pageId: string;
    pageTitle: string;
    url: string;
  }[];
  tags?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // Core Concepts
  {
    id: 'endo-economics',
    term: 'Endo Economics',
    definition: 'An economic model inspired by endosymbiosis that shifts from extraction to regenerative value creation.',
    detailedDefinition: 'Inspired by the biological principle of endosymbiosis, this economic model frames the economy as a living system where each part contributes to the health of the whole. In contrast to systems that concentrate wealth and externalize harm, Endo Economics offers a framework for equitable distribution, adaptive feedback, and circular flows of resources.',
    category: 'core-concepts',
    relatedTerms: ['endosymbiosis', 'regenerative-systems', 'collective-prosperity'],
    referencedIn: [
      { pageId: 'overview', pageTitle: 'Overview', url: '/papers/overview' },
      { pageId: 'endo-economics', pageTitle: 'Endo Economics', url: '/papers/endo-economics' }
    ],
    tags: ['economics', 'regenerative', 'systems-thinking']
  },
  {
    id: 'endosymbiosis',
    term: 'Endosymbiosis',
    definition: 'A biological principle where distinct organisms merge to form a more complex, cooperative whole.',
    detailedDefinition: 'An evolutionary process through which distinct organisms merge to form a more complex, cooperative whole. This process gave rise to mitochondria and chloroplasts, essential cellular components that once existed as independent organisms. Evolution favored this integration not through domination, but through mutual benefit, shared function, and interdependence.',
    category: 'core-concepts',
    relatedTerms: ['endo-economics', 'cooperative-systems', 'mutual-benefit'],
    referencedIn: [
      { pageId: 'endo-economics', pageTitle: 'Endo Economics', url: '/papers/endo-economics' }
    ],
    tags: ['biology', 'cooperation', 'evolution']
  },
  {
    id: 'dignity',
    term: 'Dignity',
    definition: 'The foundational principle that each person\'s life has worth and their basic needs are not contingent on performance.',
    detailedDefinition: 'The quiet foundation of a thriving society—the sense that each person\'s life has worth, that their voice matters, and that their basic needs are not contingent on performance, productivity, or conformity. It is not a luxury or a philosophical abstraction; it is a baseline condition for human wellbeing, healthy communities, and democratic participation.',
    category: 'core-concepts',
    relatedTerms: ['human-wellbeing', 'regenerative-systems', 'collective-prosperity'],
    referencedIn: [
      { pageId: 'overview', pageTitle: 'Overview', url: '/papers/overview' }
    ],
    tags: ['values', 'human-rights', 'wellbeing']
  },
  {
    id: 'regenerative-systems',
    term: 'Regenerative Systems',
    definition: 'Systems designed to support long-term flourishing rather than extraction or consumption.',
    detailedDefinition: 'Systems that are designed not for control or collapse, but through coherence, compassion, and creative redesign. They aim to support human and planetary flourishing through adaptive feedback loops, participatory governance, and wellbeing-centered design.',
    category: 'core-concepts',
    relatedTerms: ['endo-economics', 'dignity', 'participatory-governance'],
    referencedIn: [
      { pageId: 'overview', pageTitle: 'Overview', url: '/papers/overview' },
      { pageId: 'energy', pageTitle: 'Energy Infrastructure', url: '/papers/energy' }
    ],
    tags: ['sustainability', 'systems-thinking', 'regenerative']
  },
  {
    id: 'collective-prosperity',
    term: 'Collective Prosperity',
    definition: 'Economic wellbeing that benefits all members of society rather than concentrating wealth.',
    detailedDefinition: 'An economic approach that ensures access to essential needs, dignified livelihoods, and systemic wellbeing for all people. Rather than letting economic flows accumulate into extractive corporate profits, it focuses on values-aligned, regenerative, and participatory resource distribution.',
    category: 'economics',
    relatedTerms: ['endo-economics', 'universal-basic-income', 'merit-based-distribution'],
    referencedIn: [
      { pageId: 'endo-economics', pageTitle: 'Endo Economics', url: '/papers/endo-economics' }
    ],
    tags: ['economics', 'equity', 'wellbeing']
  },

  // Technical Terms
  {
    id: 'self-sovereign-identity',
    term: 'Self-Sovereign Identity (SSI)',
    definition: 'A digital identity model where users create and control their own identity wallets.',
    detailedDefinition: 'A decentralized digital identity approach where users create and control their own digital identity wallet composed of decentralized identifiers (DIDs) and verifiable credentials (VCs). This enables individuals to prove things about themselves without exposing sensitive data through zero-knowledge proofs.',
    category: 'technical-terms',
    relatedTerms: ['decentralized-identifiers', 'verifiable-credentials', 'zero-knowledge-proofs'],
    referencedIn: [
      { pageId: 'digital-sovereignty', pageTitle: 'Digital Sovereignty', url: '/papers/digital-sovereignty' }
    ],
    tags: ['identity', 'privacy', 'decentralization']
  },
  {
    id: 'decentralized-identifiers',
    term: 'Decentralized Identifiers (DIDs)',
    definition: 'Unique identifiers that enable verifiable, self-sovereign digital identity.',
    detailedDefinition: 'A W3C standard for creating unique identifiers that are fully under the control of the DID subject, independent of any centralized registry, identity provider, or certificate authority. DIDs enable the creation of self-sovereign identity systems.',
    category: 'technical-terms',
    relatedTerms: ['self-sovereign-identity', 'verifiable-credentials', 'digital-sovereignty'],
    referencedIn: [
      { pageId: 'digital-sovereignty', pageTitle: 'Digital Sovereignty', url: '/papers/digital-sovereignty' }
    ],
    tags: ['identity', 'standards', 'decentralization']
  },
  {
    id: 'verifiable-credentials',
    term: 'Verifiable Credentials (VCs)',
    definition: 'Cryptographically secure digital credentials that can represent skills, roles, certifications, or community trust.',
    detailedDefinition: 'Digital credentials that are cryptographically secure, privacy-respecting, and machine-verifiable. They can represent anything from skills and roles to wellbeing metrics, certifications, or community trust. They enable selective disclosure and verification without revealing underlying personal data.',
    category: 'technical-terms',
    relatedTerms: ['self-sovereign-identity', 'decentralized-identifiers', 'zero-knowledge-proofs'],
    referencedIn: [
      { pageId: 'digital-sovereignty', pageTitle: 'Digital Sovereignty', url: '/papers/digital-sovereignty' }
    ],
    tags: ['credentials', 'privacy', 'verification']
  },
  {
    id: 'zero-knowledge-proofs',
    term: 'Zero-Knowledge Proofs',
    definition: 'Cryptographic methods that allow users to prove statements about themselves without revealing sensitive data.',
    detailedDefinition: 'A cryptographic technique that enables one party to prove to another party that they know a value or satisfy a condition, without revealing the actual value or any other information. In the context of digital identity, this allows users to prove credentials without exposing personal data.',
    category: 'technical-terms',
    relatedTerms: ['self-sovereign-identity', 'verifiable-credentials', 'privacy-preservation'],
    referencedIn: [
      { pageId: 'digital-sovereignty', pageTitle: 'Digital Sovereignty', url: '/papers/digital-sovereignty' }
    ],
    tags: ['cryptography', 'privacy', 'verification']
  },
  {
    id: 'edge-computing',
    term: 'Edge Computing',
    definition: 'Computing paradigm where data processing occurs on local devices rather than centralized servers.',
    detailedDefinition: 'A distributed computing paradigm where data processing occurs closer to the source of data generation, typically on local devices or edge servers. In digital sovereignty contexts, this means identity and keys are held locally rather than in centralized cloud systems.',
    category: 'technical-terms',
    relatedTerms: ['digital-sovereignty', 'data-sovereignty', 'decentralized-infrastructure'],
    referencedIn: [
      { pageId: 'digital-sovereignty', pageTitle: 'Digital Sovereignty', url: '/papers/digital-sovereignty' }
    ],
    tags: ['computing', 'decentralization', 'infrastructure']
  },

  // Frameworks
  {
    id: 'merit-based-distribution',
    term: 'Merit-Based Distribution',
    definition: 'A compensation model using standard normal distribution to ensure fairness while allowing for excellence.',
    detailedDefinition: 'A distribution model based on standard normal distribution that provides a thriving base wage as the minimum for everyone in a career category, with a midpoint representing average contribution, and a tail range for exceptional contributors. Merit is assessed through relevant metrics like patient outcomes for surgeons or student growth for teachers.',
    category: 'frameworks',
    relatedTerms: ['collective-prosperity', 'economic-flow', 'career-progression'],
    referencedIn: [
      { pageId: 'endo-economics', pageTitle: 'Endo Economics', url: '/papers/endo-economics' }
    ],
    tags: ['economics', 'compensation', 'fairness']
  },
  {
    id: 'participatory-governance',
    term: 'Participatory Governance',
    definition: 'Governance systems that enable meaningful participation and input from community members.',
    detailedDefinition: 'Governance approaches that restore feedback loops between people and the systems that serve them, enabling more adaptive decision-making and equitable resource distribution. This includes collective sensemaking, participatory budgeting, and community-driven policy development.',
    category: 'governance',
    relatedTerms: ['collective-sensemaking', 'adaptive-feedback', 'community-accountability'],
    referencedIn: [
      { pageId: 'overview', pageTitle: 'Overview', url: '/papers/overview' },
      { pageId: 'sensemaking', pageTitle: 'Collective Sensemaking', url: '/papers/sensemaking' }
    ],
    tags: ['governance', 'participation', 'democracy']
  },
  {
    id: 'collective-sensemaking',
    term: 'Collective Sensemaking',
    definition: 'A form of civic intelligence that harnesses AI to surface patterns and needs within society.',
    detailedDefinition: 'A new form of civic intelligence that harnesses AI to surface deeper patterns, needs, and perceptions emerging within society. By asking strategic, reflective questions and analyzing large-scale qualitative responses, communities can respond to underlying stories shaping collective reality rather than just headlines or polls.',
    category: 'frameworks',
    relatedTerms: ['participatory-governance', 'civic-intelligence', 'adaptive-feedback'],
    referencedIn: [
      { pageId: 'overview', pageTitle: 'Overview', url: '/papers/overview' },
      { pageId: 'sensemaking', pageTitle: 'Collective Sensemaking', url: '/papers/sensemaking' }
    ],
    tags: ['governance', 'intelligence', 'participation']
  },
  {
    id: 'wellbeing-tracking',
    term: 'Wellbeing Tracking',
    definition: 'AI-enhanced framework for understanding and supporting human flourishing across all life dimensions.',
    detailedDefinition: 'A participatory, AI-enhanced framework for understanding and supporting human flourishing across physical, mental, emotional, spiritual, relational, occupational, financial, and environmental dimensions. It uses collective sensemaking to create a real-time cultural pulse and provide personalized support.',
    category: 'frameworks',
    relatedTerms: ['collective-sensemaking', 'human-flourishing', 'adaptive-support'],
    referencedIn: [
      { pageId: 'overview', pageTitle: 'Overview', url: '/papers/overview' },
      { pageId: 'wellbeing', pageTitle: 'Wellbeing Tracking', url: '/papers/wellbeing' }
    ],
    tags: ['wellbeing', 'tracking', 'support']
  },

  // Governance
  {
    id: 'adaptive-feedback',
    term: 'Adaptive Feedback',
    definition: 'Systems that can flexibly respond to changing conditions and community needs.',
    detailedDefinition: 'Feedback mechanisms that enable systems to adapt and evolve based on real-time input from participants and changing environmental conditions. This includes responsive resource allocation, policy adjustment, and continuous improvement processes.',
    category: 'governance',
    relatedTerms: ['participatory-governance', 'responsive-systems', 'collective-sensemaking'],
    referencedIn: [
      { pageId: 'overview', pageTitle: 'Overview', url: '/papers/overview' },
      { pageId: 'endo-economics', pageTitle: 'Endo Economics', url: '/papers/endo-economics' }
    ],
    tags: ['feedback', 'adaptation', 'responsiveness']
  },
  {
    id: 'community-accountability',
    term: 'Community Accountability',
    definition: 'Accountability systems based on peer review and transparent community protocols.',
    detailedDefinition: 'Systems where accountability is maintained through transparent, peer-driven processes rather than centralized authority. This includes community-based validation, peer review mechanisms, and transparent protocols for addressing conflicts or violations.',
    category: 'governance',
    relatedTerms: ['participatory-governance', 'peer-review', 'transparent-protocols'],
    referencedIn: [
      { pageId: 'digital-sovereignty', pageTitle: 'Digital Sovereignty', url: '/papers/digital-sovereignty' }
    ],
    tags: ['accountability', 'community', 'transparency']
  },

  // Economics
  {
    id: 'universal-basic-income',
    term: 'Universal Basic Income (UBI)',
    definition: 'A baseline income that supports wellbeing, with opportunities to grow through meaningful contribution.',
    detailedDefinition: 'A guaranteed basic income system where every person receives a baseline income that supports dignified living, with opportunities for additional compensation through meaningful contribution to society. This eliminates the need for personal and business taxes while ensuring no one falls below a thriving threshold.',
    category: 'economics',
    relatedTerms: ['collective-prosperity', 'dignified-livelihoods', 'economic-flow'],
    referencedIn: [
      { pageId: 'endo-economics', pageTitle: 'Endo Economics', url: '/papers/endo-economics' }
    ],
    tags: ['income', 'security', 'economics']
  },
  {
    id: 'economic-flow',
    term: 'Economic Flow',
    definition: 'The circulation of resources and value through wage and public spending systems.',
    detailedDefinition: 'The movement of economic resources through society, comprising wage flows (human labor economy) and government operations (public service economy). In Endo Economics, this flow is treated as part of the commons, to be stewarded for collective wellbeing rather than capital accumulation.',
    category: 'economics',
    relatedTerms: ['collective-prosperity', 'resource-distribution', 'commons-stewardship'],
    referencedIn: [
      { pageId: 'endo-economics', pageTitle: 'Endo Economics', url: '/papers/endo-economics' }
    ],
    tags: ['economics', 'flow', 'resources']
  },
  {
    id: 'resource-distribution',
    term: 'Resource Distribution',
    definition: 'The allocation of economic resources based on values-aligned principles rather than capital accumulation.',
    detailedDefinition: 'The systematic allocation of economic resources that prioritizes collective wellbeing, ecological restoration, and meaningful contribution over profit maximization. This includes participatory budgeting, community-driven resource allocation, and regenerative investment strategies.',
    category: 'economics',
    relatedTerms: ['economic-flow', 'participatory-governance', 'collective-prosperity'],
    referencedIn: [
      { pageId: 'endo-economics', pageTitle: 'Endo Economics', url: '/papers/endo-economics' }
    ],
    tags: ['resources', 'distribution', 'equity']
  },

  // Technology
  {
    id: 'decentralized-infrastructure',
    term: 'Decentralized Infrastructure',
    definition: 'Technology systems that distribute control and ownership rather than centralizing it.',
    detailedDefinition: 'Technology infrastructure designed to distribute control, ownership, and decision-making across networks rather than concentrating it in centralized authorities. This includes peer-to-peer networks, distributed computing, and community-owned technology resources.',
    category: 'technology',
    relatedTerms: ['digital-sovereignty', 'edge-computing', 'distributed-systems'],
    referencedIn: [
      { pageId: 'digital-sovereignty', pageTitle: 'Digital Sovereignty', url: '/papers/digital-sovereignty' }
    ],
    tags: ['infrastructure', 'decentralization', 'technology']
  },
  {
    id: 'data-sovereignty',
    term: 'Data Sovereignty',
    definition: 'The principle that individuals should control their own data and digital footprint.',
    detailedDefinition: 'The principle that individuals should have control over their digital footprint, being able to share only what\'s necessary with explicit consent. This includes edge-based data storage, consent-first interoperability, and non-seizable digital assets.',
    category: 'technology',
    relatedTerms: ['digital-sovereignty', 'privacy-preservation', 'user-control'],
    referencedIn: [
      { pageId: 'digital-sovereignty', pageTitle: 'Digital Sovereignty', url: '/papers/digital-sovereignty' }
    ],
    tags: ['data', 'sovereignty', 'privacy']
  },
  {
    id: 'privacy-preservation',
    term: 'Privacy Preservation',
    definition: 'Systematic protection of personal information through design and cryptographic methods.',
    detailedDefinition: 'Built-in encryption, consent models, and cryptographic techniques that protect user data by design. This includes zero-knowledge proofs, selective disclosure, and privacy-first architectures that minimize data exposure while enabling necessary verification.',
    category: 'technology',
    relatedTerms: ['zero-knowledge-proofs', 'data-sovereignty', 'encryption'],
    referencedIn: [
      { pageId: 'digital-sovereignty', pageTitle: 'Digital Sovereignty', url: '/papers/digital-sovereignty' }
    ],
    tags: ['privacy', 'security', 'protection']
  }
];

export const glossaryCategories = [
  { id: 'core-concepts', label: 'Core Concepts', description: 'Fundamental principles and ideas' },
  { id: 'technical-terms', label: 'Technical Terms', description: 'Technology and implementation concepts' },
  { id: 'frameworks', label: 'Frameworks', description: 'Methodological approaches and models' },
  { id: 'governance', label: 'Governance', description: 'Decision-making and accountability systems' },
  { id: 'economics', label: 'Economics', description: 'Financial and resource management concepts' },
  { id: 'technology', label: 'Technology', description: 'Technical infrastructure and tools' }
];