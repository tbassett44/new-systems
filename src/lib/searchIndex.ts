import { lazy } from 'react';
import { 
  BookOpen, 
  DollarSign, 
  Trash2, 
  Zap, 
  MessageSquare, 
  Heart, 
  Key, 
  GraduationCap, 
  Gavel, 
  Newspaper, 
  Microscope, 
  Users, 
  Activity, 
  Sparkles, 
  Cpu, 
  Home, 
  Compass, 
  Recycle,
  Lightbulb,
  Target,
  Brain,
  GitBranch,
  ScrollText
} from 'lucide-react';

// Define the structure for search results
export interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  route: string;
  section?: string;
  icon: any;
  badges?: string[];
  type: 'page' | 'section' | 'content';
  relevance: number;
}

// Define white paper metadata
export const whitepaperMetadata = {
  'overview': {
    title: 'System Regeneration',
    subtitle: 'Supporting Better Feedback, Effective Governance, and Improved Wellbeing',
    route: '/papers/overview',
    icon: BookOpen,
    badges: ['Systems Design', 'Regenerative', 'Participatory', 'Dignity-Centered']
  },
  'endo-economics': {
    title: 'Toward a New Economic Model',
    subtitle: 'Redirecting GDP Flow for Collective Wellbeing',
    route: '/papers/endo-economics',
    icon: DollarSign,
    badges: ['Regenerative Economics', 'Systemic Wellbeing', 'Collective Prosperity', 'Economic Democracy']
  },
  'waste-management': {
    title: 'Waste Management',
    subtitle: 'From Waste to Resource - A Systemic Approach',
    route: '/papers/waste-management',
    icon: Trash2,
    badges: ['Circular Economy', 'Environmental', 'Resource Recovery', 'Sustainable']
  },
  'energy': {
    title: 'Regenerative Energy Infrastructure',
    subtitle: 'Building a Clean Energy Future',
    route: '/papers/energy',
    icon: Zap,
    badges: ['Clean Energy', 'Renewable', 'Infrastructure', 'Sustainability']
  },
  'sensemaking': {
    title: 'Collective Sensemaking and Governance',
    subtitle: 'AI-Enhanced Democratic Participation',
    route: '/papers/sensemaking',
    icon: MessageSquare,
    badges: ['Governance', 'Democracy', 'AI', 'Participation']
  },
  'wellbeing': {
    title: 'Wellbeing Tracking',
    subtitle: 'Privacy-First Mental Health & Community Resilience',
    route: '/papers/wellbeing',
    icon: Heart,
    badges: ['Mental Health', 'Privacy-First', 'Community Resilience', 'Self-Sovereign Data']
  },
  'digital-sovereignty': {
    title: 'Digital Sovereignty',
    subtitle: 'Decentralized Infrastructure for Human Agency',
    route: '/papers/digital-sovereignty',
    icon: Key,
    badges: ['Digital Rights', 'Decentralized', 'Privacy', 'Self-Sovereignty']
  },
  'education': {
    title: 'Regenerative Education Through Digital Sovereignty',
    subtitle: 'A Framework for Decentralized, Lifelong, and Learner-Led Learning',
    route: '/papers/education',
    icon: GraduationCap,
    badges: ['Learner-Led', 'Digital Sovereignty', 'Lifelong Learning', 'Self-Custody', 'Verifiable Credentials', 'Decentralized']
  },
  'justice': {
    title: 'Regenerative Justice',
    subtitle: 'Evolving the Legal System Through Dignity, Healing, and Community Accountability',
    route: '/papers/justice',
    icon: Gavel,
    badges: ['Restorative', 'Transformative', 'Community-Centered', 'Healing-Based', 'Dignity-Focused']
  },
  'technology': {
    title: 'Regenerative Technology & Digital Sovereignty',
    subtitle: 'Building Technology that Serves Life and Human Agency',
    route: '/papers/technology',
    icon: Cpu,
    badges: ['Digital Sovereignty', 'Open Source', 'Privacy-Enhancing', 'Decentralized', 'Human-Centered']
  },
  'sexual-health': {
    title: 'Sexual Health and Reproductive Responsibility',
    subtitle: 'A Comprehensive Framework for Reproductive Justice',
    route: '/papers/sexual-health',
    icon: Heart,
    badges: ['Sexual Health', 'Reproductive Justice', 'Public Health', 'Comprehensive Care']
  },
  'media': {
    title: 'Regenerative Media',
    subtitle: 'Building Media Systems for Truth and Community',
    route: '/papers/media',
    icon: Newspaper,
    badges: ['Media Reform', 'Truth', 'Community', 'Information']
  },
  'science': {
    title: 'Regenerative Science',
    subtitle: 'Open, Collaborative, and Community-Centered Research',
    route: '/papers/science',
    icon: Microscope,
    badges: ['Open Science', 'Research', 'Community', 'Collaboration']
  },
  'arts': {
    title: 'Regenerative Arts and Culture',
    subtitle: 'Cultivating Creative Expression and Cultural Healing',
    route: '/papers/arts',
    icon: Sparkles,
    badges: ['Arts', 'Culture', 'Creative Expression', 'Community']
  },
  'housing': {
    title: 'Regenerative Housing',
    subtitle: 'Community-Centered Living for All',
    route: '/papers/housing',
    icon: Home,
    badges: ['Housing', 'Community', 'Affordable', 'Sustainable']
  },
  'spirituality': {
    title: 'Regenerative Spirituality',
    subtitle: 'Fostering Spiritual Wellness and Community Connection',
    route: '/papers/spirituality',
    icon: Compass,
    badges: ['Spirituality', 'Wellness', 'Community', 'Connection']
  },
  'finance': {
    title: 'Regenerative Finance',
    subtitle: 'Financial Systems for Human and Planetary Wellbeing',
    route: '/papers/finance',
    icon: DollarSign,
    badges: ['Finance', 'Regenerative', 'Wellbeing', 'Sustainability']
  },
  'ecology': {
    title: 'Regenerative Ecology',
    subtitle: 'Healing Our Relationship with Nature',
    route: '/papers/ecology',
    icon: Recycle,
    badges: ['Ecology', 'Environment', 'Sustainability', 'Regenerative']
  },
  'election': {
    title: 'Electoral Reform',
    subtitle: 'Democratic Innovation for Participatory Governance',
    route: '/papers/election',
    icon: Users,
    badges: ['Democracy', 'Electoral Reform', 'Governance', 'Participation']
  },
  'conflict': {
    title: 'Conflict Resolution',
    subtitle: 'Transforming Conflict into Collaboration',
    route: '/papers/conflict',
    icon: Activity,
    badges: ['Conflict Resolution', 'Mediation', 'Collaboration', 'Peace']
  },
  'death': {
    title: 'Death and Dying',
    subtitle: 'Regenerative Approaches to End-of-Life Care',
    route: '/papers/death',
    icon: Heart,
    badges: ['End-of-Life', 'Death', 'Care', 'Regenerative']
  }
};

// Simple text processing utilities for search
export function normalizeText(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

export function calculateRelevance(searchTerm: string, content: string, title?: string): number {
  const normalizedSearch = normalizeText(searchTerm);
  const normalizedContent = normalizeText(content);
  const normalizedTitle = title ? normalizeText(title) : '';
  
  let score = 0;
  const searchWords = normalizedSearch.split(' ').filter(w => w.length > 1);
  
  for (const word of searchWords) {
    // Title matches are weighted more heavily
    if (normalizedTitle.includes(word)) {
      score += 10;
    }
    
    // Count occurrences in content
    const contentMatches = (normalizedContent.match(new RegExp(word, 'g')) || []).length;
    score += contentMatches * 2;
    
    // Partial matches
    if (normalizedContent.includes(word)) {
      score += 1;
    }
  }
  
  return score;
}

// Create a comprehensive search index with detailed content from all proposal pages
export function createSearchIndex(): SearchResult[] {
  const searchIndex: SearchResult[] = [];
  
  // Add main page entries with enhanced searchable content
  Object.entries(whitepaperMetadata).forEach(([key, meta]) => {
    searchIndex.push({
      id: key,
      title: meta.title,
      subtitle: meta.subtitle,
      content: `${meta.title} ${meta.subtitle} ${meta.badges?.join(' ') || ''}`,
      route: meta.route,
      icon: meta.icon,
      badges: meta.badges,
      type: 'page',
      relevance: 0
    });
  });
  
  // Comprehensive section content from all proposal pages
  const detailedSections: SearchResult[] = [
    // Overview sections
    {
      id: 'overview-purpose',
      title: 'Purpose Statement',
      content: 'dignity foundation society voice matters basic needs wellbeing healthy communities democratic participation systems redesign blueprint collective thriving',
      route: '/papers/overview',
      section: 'Overview',
      icon: BookOpen,
      type: 'section',
      relevance: 0
    },
    {
      id: 'overview-theory-change',
      title: 'Theory of Change',
      content: 'cultural evolution democracy collective intelligence community resilience local governance decentralized networks participatory systems',
      route: '/papers/overview',
      section: 'Theory of Change',
      icon: BookOpen,
      type: 'section',
      relevance: 0
    },

    // Endo Economics sections
    {
      id: 'endo-economics-overview',
      title: 'Economic System Critique',
      content: 'GDP 30 trillion wealth inequality top 1% bottom 90% economic misalignment capital accumulation regenerative economics collective wellbeing',
      route: '/papers/endo-economics',
      section: 'Overview',
      icon: DollarSign,
      type: 'section',
      relevance: 0
    },
    {
      id: 'endo-economics-endosymbiosis',
      title: 'Endosymbiotic Economics',
      content: 'endosymbiosis biological cooperation mitochondria evolution mutual benefit interdependence economic ecosystems shared value',
      route: '/papers/endo-economics',
      section: 'Biological Inspiration',
      icon: DollarSign,
      type: 'section',
      relevance: 0
    },
    {
      id: 'endo-economics-basic-income',
      title: 'Guaranteed Basic Income',
      content: 'universal basic income guaranteed income dignified livelihoods economic security poverty elimination financial stability',
      route: '/papers/endo-economics',
      section: 'Basic Income Framework',
      icon: DollarSign,
      type: 'section',
      relevance: 0
    },
    {
      id: 'endo-economics-work-purpose',
      title: 'Purpose-Driven Work',
      content: 'ethical alignment purpose-driven work vocational freedom toxic workplaces meaningful labor self-organization community projects',
      route: '/papers/endo-economics',
      section: 'Work Transformation',
      icon: DollarSign,
      type: 'section',
      relevance: 0
    },

    // Digital Sovereignty sections
    {
      id: 'digital-sovereignty-overview',
      title: 'Digital Sovereignty Overview',
      content: 'decentralized infrastructure human agency DIDs verifiable credentials privacy autonomy digital rights self-sovereign identity',
      route: '/papers/digital-sovereignty',
      section: 'Overview',
      icon: Key,
      type: 'section',
      relevance: 0
    },
    {
      id: 'digital-sovereignty-identity',
      title: 'Self-Sovereign Identity',
      content: 'decentralized identifiers DIDs verifiable credentials identity control privacy autonomy digital wallets personal data sovereignty',
      route: '/papers/digital-sovereignty',
      section: 'Identity Framework',
      icon: Key,
      type: 'section',
      relevance: 0
    },
    {
      id: 'digital-sovereignty-infrastructure',
      title: 'Personal Identity Server',
      content: 'raspberry pi identity server encrypted data credential manager device hosting personal infrastructure',
      route: '/papers/digital-sovereignty',
      section: 'Technical Infrastructure',
      icon: Key,
      type: 'section',
      relevance: 0
    },

    // Education sections
    {
      id: 'education-overview',
      title: 'Regenerative Education Overview',
      content: 'digital sovereignty self-custody decentralized identity learner-centered lifelong learning locally rooted globally recognized',
      route: '/papers/education',
      section: 'Overview',
      icon: GraduationCap,
      type: 'section',
      relevance: 0
    },
    {
      id: 'education-problems',
      title: 'Education System Problems',
      content: 'centralized rigid siloed standardized curricula credential lock-in data exploitation fragmented learning limited agency',
      route: '/papers/education',
      section: 'Problems',
      icon: GraduationCap,
      type: 'section',
      relevance: 0
    },
    {
      id: 'education-learner-led',
      title: 'Learner-Led Framework',
      content: 'self-sovereign learner profiles verifiable credentials personalized pathways purpose-driven learning experiential education',
      route: '/papers/education',
      section: 'Learning Framework',
      icon: GraduationCap,
      type: 'section',
      relevance: 0
    },

    // Justice sections
    {
      id: 'justice-overview',
      title: 'Regenerative Justice Overview',
      content: 'transformative framework human dignity rehabilitation systemic coherence punitive carceral models personal transformation communal healing',
      route: '/papers/justice',
      section: 'Overview',
      icon: Gavel,
      type: 'section',
      relevance: 0
    },
    {
      id: 'justice-problems',
      title: 'Justice System Problems',
      content: 'mass incarceration 2 million people nonviolent offenses recidivism racial economic injustice over-policing under-resourcing',
      route: '/papers/justice',
      section: 'Problems',
      icon: Gavel,
      type: 'section',
      relevance: 0
    },
    {
      id: 'justice-accountability',
      title: 'Community Accountability Circles',
      content: 'community accountability circles restorative practices dialogues acknowledgment harm repair reintegration community-based mediation healing',
      route: '/papers/justice',
      section: 'Accountability Framework',
      icon: Gavel,
      type: 'section',
      relevance: 0
    },

    // Wellbeing sections
    {
      id: 'wellbeing-overview',
      title: 'Wellbeing Tracking Overview',
      content: 'privacy-first mental health community resilience self-sovereign data distributed sensemaking collective intelligence edge computing',
      route: '/papers/wellbeing',
      section: 'Overview',
      icon: Heart,
      type: 'section',
      relevance: 0
    },
    {
      id: 'wellbeing-privacy',
      title: 'Privacy-First Mental Health',
      content: 'mental health crisis depression anxiety privacy data sovereignty edge computing federated analytics local processing',
      route: '/papers/wellbeing',
      section: 'Technical Architecture',
      icon: Heart,
      type: 'section',
      relevance: 0
    },

    // Sensemaking sections
    {
      id: 'sensemaking-overview',
      title: 'Collective Sensemaking Overview',
      content: 'AI-enhanced democratic participation distributed collective sensemaking communities organizations societies deeper patterns perception possibility',
      route: '/papers/sensemaking',
      section: 'Overview',
      icon: MessageSquare,
      type: 'section',
      relevance: 0
    },
    {
      id: 'sensemaking-framework',
      title: 'Sensemaking Framework',
      content: 'structured inquiry qualitative data gathering pattern analysis governance resource allocation participatory cultural evolution',
      route: '/papers/sensemaking',
      section: 'Framework',
      icon: MessageSquare,
      type: 'section',
      relevance: 0
    },

    // Technology sections
    {
      id: 'technology-overview',
      title: 'Regenerative Technology Overview',
      content: 'technology serves life human agency open source privacy-enhancing decentralized human-centered digital sovereignty',
      route: '/papers/technology',
      section: 'Overview',
      icon: Cpu,
      type: 'section',
      relevance: 0
    },

    // Energy sections
    {
      id: 'energy-overview',
      title: 'Regenerative Energy Overview',
      content: 'clean energy future renewable infrastructure sustainability decentralized energy systems community resilience',
      route: '/papers/energy',
      section: 'Overview',
      icon: Zap,
      type: 'section',
      relevance: 0
    },

    // Waste Management sections
    {
      id: 'waste-overview',
      title: 'Waste Management Overview',
      content: 'waste to resource systemic approach circular economy environmental resource recovery sustainable waste elimination',
      route: '/papers/waste-management',
      section: 'Overview',
      icon: Trash2,
      type: 'section',
      relevance: 0
    },

    // Media sections
    {
      id: 'media-overview',
      title: 'Regenerative Media Overview',
      content: 'media systems truth community media reform information integrity journalism community-based storytelling',
      route: '/papers/media',
      section: 'Overview',
      icon: Newspaper,
      type: 'section',
      relevance: 0
    },

    // Science sections
    {
      id: 'science-overview',
      title: 'Regenerative Science Overview',
      content: 'open collaborative community-centered research open science research community collaboration transparent peer review',
      route: '/papers/science',
      section: 'Overview',
      icon: Microscope,
      type: 'section',
      relevance: 0
    },

    // Arts sections
    {
      id: 'arts-overview',
      title: 'Arts and Culture Overview',
      content: 'creative expression cultural healing arts culture community creative healing artistic collaboration cultural regeneration',
      route: '/papers/arts',
      section: 'Overview',
      icon: Sparkles,
      type: 'section',
      relevance: 0
    },

    // Housing sections
    {
      id: 'housing-overview',
      title: 'Regenerative Housing Overview',
      content: 'community-centered living affordable sustainable housing cooperative community land trusts social housing',
      route: '/papers/housing',
      section: 'Overview',
      icon: Home,
      type: 'section',
      relevance: 0
    },

    // Spirituality sections
    {
      id: 'spirituality-overview',
      title: 'Regenerative Spirituality Overview',
      content: 'spiritual wellness community connection source purpose sacred community mystery spiritual practices contemplative',
      route: '/papers/spirituality',
      section: 'Overview',
      icon: Compass,
      type: 'section',
      relevance: 0
    },

    // Finance sections
    {
      id: 'finance-overview',
      title: 'Regenerative Finance Overview',
      content: 'financial systems human planetary wellbeing regenerative finance impact investing community banking',
      route: '/papers/finance',
      section: 'Overview',
      icon: DollarSign,
      type: 'section',
      relevance: 0
    },

    // Ecology sections
    {
      id: 'ecology-overview',
      title: 'Regenerative Ecology Overview',
      content: 'healing relationship nature ecology environment sustainability regenerative agriculture carbon sequestration biodiversity',
      route: '/papers/ecology',
      section: 'Overview',
      icon: Recycle,
      type: 'section',
      relevance: 0
    },

    // Election sections
    {
      id: 'election-overview',
      title: 'Electoral Reform Overview',
      content: 'democratic innovation participatory governance electoral reform democracy voting systems deliberative democracy',
      route: '/papers/election',
      section: 'Overview',
      icon: Users,
      type: 'section',
      relevance: 0
    },

    // Conflict sections
    {
      id: 'conflict-overview',
      title: 'Conflict Resolution Overview',
      content: 'transforming conflict collaboration conflict resolution mediation peace-building nonviolent communication restorative practices',
      route: '/papers/conflict',
      section: 'Overview',
      icon: Activity,
      type: 'section',
      relevance: 0
    },

    // Death sections
    {
      id: 'death-overview',
      title: 'Death and Dying Overview',
      content: 'regenerative approaches end-of-life care death dignity hospice palliative care death positivity conscious dying',
      route: '/papers/death',
      section: 'Overview',
      icon: Heart,
      type: 'section',
      relevance: 0
    },

    // Sexual Health sections
    {
      id: 'sexual-health-overview',
      title: 'Sexual Health Overview',
      content: 'comprehensive framework reproductive justice sexual health reproductive responsibility public health comprehensive care',
      route: '/papers/sexual-health',
      section: 'Overview',
      icon: Heart,
      type: 'section',
      relevance: 0
    },
    {
      id: 'sexual-health-contraception',
      title: 'Male Contraception Framework',
      content: 'male contraception injection reproductive responsibility sexual health comprehensive care gender equity family planning',
      route: '/papers/sexual-health',
      section: 'Contraception Framework',
      icon: Heart,
      type: 'section',
      relevance: 0
    },

    // Navigation pages
    {
      id: 'contribute-overview',
      title: 'Contribute to the Manifesto',
      content: 'collaborative contribution community input feedback iterative development co-creation participatory design open source',
      route: '/papers/contribute',
      section: 'Overview',
      icon: GitBranch,
      type: 'section',
      relevance: 0
    },
    {
      id: 'glossary-overview',
      title: 'Manifesto Glossary',
      content: 'definitions terminology concepts regenerative systems collective intelligence digital sovereignty endosymbiosis',
      route: '/papers/glossary',
      section: 'Overview',
      icon: ScrollText,
      type: 'section',
      relevance: 0
    }
  ];
  
  searchIndex.push(...detailedSections);
  
  return searchIndex;
}

// Perform search with fuzzy matching
export function searchContent(query: string, maxResults: number = 10): SearchResult[] {
  if (!query || query.length < 2) return [];
  
  const searchIndex = createSearchIndex();
  const results = searchIndex.map(item => ({
    ...item,
    relevance: calculateRelevance(query, item.content, item.title)
  }));
  
  return results
    .filter(result => result.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxResults);
}