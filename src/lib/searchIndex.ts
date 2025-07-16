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
  Brain
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

// Create a comprehensive search index
export function createSearchIndex(): SearchResult[] {
  const searchIndex: SearchResult[] = [];
  
  // Add main page entries
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
  
  // Add common section content for better searchability
  const commonSections: SearchResult[] = [
    {
      id: 'overview-purpose',
      title: 'System Regeneration',
      content: 'dignity foundation society voice matters basic needs wellbeing healthy communities democratic participation',
      route: '/papers/overview',
      section: 'Purpose Statement',
      icon: BookOpen,
      type: 'section',
      relevance: 0
    },
    {
      id: 'endo-economics-critique',
      title: 'Economic System Critique',
      content: 'wealth inequality top 1% bottom 90% GDP 30 trillion economic misalignment capital accumulation',
      route: '/papers/endo-economics',
      section: 'Economic Analysis',
      icon: DollarSign,
      type: 'section',
      relevance: 0
    },
    {
      id: 'wellbeing-privacy',
      title: 'Privacy-First Mental Health',
      content: 'mental health crisis depression anxiety privacy data sovereignty edge computing federated analytics',
      route: '/papers/wellbeing',
      section: 'Technical Architecture',
      icon: Heart,
      type: 'section',
      relevance: 0
    },
    {
      id: 'digital-sovereignty-identity',
      title: 'Self-Sovereign Identity',
      content: 'decentralized identity DIDs verifiable credentials privacy autonomy digital rights',
      route: '/papers/digital-sovereignty',
      section: 'Identity Framework',
      icon: Key,
      type: 'section',
      relevance: 0
    },
    {
      id: 'education-learner-led',
      title: 'Learner-Led Education',
      content: 'self-sovereign learner profiles verifiable credentials lifelong learning personalized pathways',
      route: '/papers/education',
      section: 'Learning Framework',
      icon: GraduationCap,
      type: 'section',
      relevance: 0
    },
    {
      id: 'justice-restorative',
      title: 'Restorative Justice',
      content: 'community accountability circles regenerative rehabilitation healing transformation dignity',
      route: '/papers/justice',
      section: 'Justice Framework',
      icon: Gavel,
      type: 'section',
      relevance: 0
    },
    {
      id: 'technology-regenerative',
      title: 'Regenerative Technology',
      content: 'open source privacy-enhancing decentralized human-centered technology digital sovereignty',
      route: '/papers/technology',
      section: 'Technology Framework',
      icon: Cpu,
      type: 'section',
      relevance: 0
    },
    {
      id: 'sexual-health-contraception',
      title: 'Male Contraception Framework',
      content: 'male contraception injection reproductive responsibility sexual health comprehensive care',
      route: '/papers/sexual-health',
      section: 'Contraception Framework',
      icon: Heart,
      type: 'section',
      relevance: 0
    }
  ];
  
  searchIndex.push(...commonSections);
  
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