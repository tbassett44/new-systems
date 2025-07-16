import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { NavLink } from "react-router-dom";
import { 
  Search, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Filter,
  Hash,
  Brain,
  Settings,
  Zap,
  Users,
  DollarSign,
  Cpu
} from "lucide-react";
import { glossaryTerms, glossaryCategories, type GlossaryTerm } from "@/lib/glossaryData";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());

  useEffect(() => {
    document.title = "Glossary | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A comprehensive glossary of key terms, concepts, and frameworks for regenerative systems and structures.');
    }
  }, []);

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (termId: string) => {
    const newExpanded = new Set(expandedTerms);
    if (newExpanded.has(termId)) {
      newExpanded.delete(termId);
    } else {
      newExpanded.add(termId);
    }
    setExpandedTerms(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    const iconMap = {
      'core-concepts': Brain,
      'technical-terms': Cpu,
      'frameworks': Settings,
      'governance': Users,
      'economics': DollarSign,
      'technology': Zap
    };
    return iconMap[category as keyof typeof iconMap] || BookOpen;
  };

  const getCategoryColor = (category: string) => {
    const colorMap = {
      'core-concepts': 'bg-blue-100 text-blue-800',
      'technical-terms': 'bg-purple-100 text-purple-800',
      'frameworks': 'bg-green-100 text-green-800',
      'governance': 'bg-orange-100 text-orange-800',
      'economics': 'bg-emerald-100 text-emerald-800',
      'technology': 'bg-indigo-100 text-indigo-800'
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-800';
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const getTermsByLetter = (letter: string) => {
    return filteredTerms.filter(term => term.term.toUpperCase().startsWith(letter));
  };

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          Glossary
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          A comprehensive reference for key terms, concepts, and frameworks in regenerative systems design
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary">Reference</Badge>
          <Badge variant="secondary">Cross-Referenced</Badge>
          <Badge variant="secondary">Searchable</Badge>
          <Badge variant="secondary">Categorized</Badge>
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <div className="overflow-x-auto">
          <TabsList className="grid w-max grid-cols-7 min-w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            {glossaryCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id} className="whitespace-nowrap">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-6">
            {alphabet.map(letter => {
              const termsForLetter = getTermsByLetter(letter);
              if (termsForLetter.length === 0) return null;

              return (
                <div key={letter} id={`letter-${letter}`}>
                  <h2 className="text-2xl font-bold mb-4 text-primary border-b pb-2">
                    {letter}
                  </h2>
                  <div className="space-y-4">
                    {termsForLetter.map(term => (
                      <GlossaryTermCard 
                        key={term.id} 
                        term={term} 
                        isExpanded={expandedTerms.has(term.id)}
                        onToggle={() => toggleExpanded(term.id)}
                        getCategoryColor={getCategoryColor}
                        getCategoryIcon={getCategoryIcon}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        {glossaryCategories.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                {(() => {
                  const Icon = getCategoryIcon(category.id);
                  return <Icon className="h-6 w-6" />;
                })()}
                {category.label}
              </h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            <div className="space-y-4">
              {filteredTerms
                .filter(term => term.category === category.id)
                .map(term => (
                  <GlossaryTermCard 
                    key={term.id} 
                    term={term} 
                    isExpanded={expandedTerms.has(term.id)}
                    onToggle={() => toggleExpanded(term.id)}
                    getCategoryColor={getCategoryColor}
                    getCategoryIcon={getCategoryIcon}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Glossary Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{glossaryTerms.length}</div>
              <div className="text-sm text-muted-foreground">Total Terms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{glossaryCategories.length}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{filteredTerms.length}</div>
              <div className="text-sm text-muted-foreground">Filtered Results</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {new Set(glossaryTerms.flatMap(t => t.referencedIn.map(r => r.pageId))).size}
              </div>
              <div className="text-sm text-muted-foreground">Referenced Papers</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface GlossaryTermCardProps {
  term: GlossaryTerm;
  isExpanded: boolean;
  onToggle: () => void;
  getCategoryColor: (category: string) => string;
  getCategoryIcon: (category: string) => any;
}

const GlossaryTermCard = ({ term, isExpanded, onToggle, getCategoryColor, getCategoryIcon }: GlossaryTermCardProps) => {
  const Icon = getCategoryIcon(term.category);
  
  return (
    <Card key={term.id} className="transition-all hover:shadow-md">
      <Collapsible open={isExpanded} onOpenChange={onToggle}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <CardTitle className="text-lg">{term.term}</CardTitle>
                  <Badge variant="outline" className={getCategoryColor(term.category)}>
                    {glossaryCategories.find(c => c.id === term.category)?.label}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{term.definition}</p>
              </div>
              <div className="ml-4 flex-shrink-0">
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            {term.detailedDefinition && (
              <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2">Detailed Definition</h4>
                <p className="text-sm leading-relaxed">{term.detailedDefinition}</p>
              </div>
            )}
            
            {term.tags && term.tags.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Tags</h4>
                <div className="flex flex-wrap gap-1">
                  {term.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Related Terms</h4>
                <div className="flex flex-wrap gap-2">
                  {term.relatedTerms.map(relatedId => {
                    const relatedTerm = glossaryTerms.find(t => t.id === relatedId);
                    return relatedTerm ? (
                      <Badge key={relatedId} variant="outline" className="cursor-pointer hover:bg-muted">
                        {relatedTerm.term}
                      </Badge>
                    ) : null;
                  })}
                </div>
              </div>
            )}
            
            <div>
              <h4 className="font-semibold mb-2 text-sm">Referenced In</h4>
              <div className="space-y-2">
                {term.referencedIn.map(reference => (
                  <div key={reference.pageId} className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    <Button asChild variant="link" className="h-auto p-0 text-sm">
                      <NavLink to={reference.url}>{reference.pageTitle}</NavLink>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default Glossary;