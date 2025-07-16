import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, Hash, ExternalLink } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { searchContent, SearchResult } from '@/lib/searchIndex';

interface GlobalSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Debounced search function
  const performSearch = useCallback(async (query: string) => {
    if (!query || query.length < 2) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate slight delay for better UX
    setTimeout(() => {
      const results = searchContent(query, 12);
      setSearchResults(results);
      setIsLoading(false);
    }, 150);
  }, []);

  // Handle search query changes
  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery, performSearch]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onOpenChange]);

  // Handle result selection
  const handleSelect = (result: SearchResult) => {
    onOpenChange(false);
    setSearchQuery('');
    navigate(result.route);
  };

  // Reset search when dialog closes
  useEffect(() => {
    if (!open) {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [open]);

  // Group results by type
  const groupedResults = searchResults.reduce((acc, result) => {
    const type = result.type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search across all white papers..."
        value={searchQuery}
        onValueChange={setSearchQuery}
        className="text-base"
      />
      
      <CommandList>
        {isLoading && (
          <div className="flex items-center justify-center py-6">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          </div>
        )}
        
        {!isLoading && searchQuery && searchResults.length === 0 && (
          <CommandEmpty>
            <div className="flex flex-col items-center gap-2 py-6">
              <Search className="h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No results found for "{searchQuery}"</p>
              <p className="text-xs text-muted-foreground">Try searching for topics like "economics", "education", "justice", or "wellbeing"</p>
            </div>
          </CommandEmpty>
        )}

        {!isLoading && searchResults.length > 0 && (
          <>
            {/* Pages */}
            {groupedResults.page && (
              <CommandGroup heading="White Papers">
                {groupedResults.page.map((result) => (
                  <CommandItem
                    key={result.id}
                    value={result.id}
                    onSelect={() => handleSelect(result)}
                    className="flex items-start gap-3 p-3 cursor-pointer"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <result.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm truncate">{result.title}</h4>
                        <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                      </div>
                      {result.subtitle && (
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                          {result.subtitle}
                        </p>
                      )}
                      {result.badges && result.badges.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {result.badges.slice(0, 3).map((badge, index) => (
                            <Badge key={index} variant="secondary" className="text-xs h-4 px-1">
                              {badge}
                            </Badge>
                          ))}
                          {result.badges.length > 3 && (
                            <Badge variant="secondary" className="text-xs h-4 px-1">
                              +{result.badges.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Sections */}
            {groupedResults.section && (
              <>
                {groupedResults.page && <CommandSeparator />}
                <CommandGroup heading="Sections">
                  {groupedResults.section.map((result) => (
                    <CommandItem
                      key={result.id}
                      value={result.id}
                      onSelect={() => handleSelect(result)}
                      className="flex items-start gap-3 p-3 cursor-pointer"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <Hash className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm truncate">{result.title}</h4>
                          <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                        </div>
                        {result.section && (
                          <p className="text-xs text-muted-foreground">
                            in {result.section}
                          </p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}

            {/* Content */}
            {groupedResults.content && (
              <>
                {(groupedResults.page || groupedResults.section) && <CommandSeparator />}
                <CommandGroup heading="Content">
                  {groupedResults.content.map((result) => (
                    <CommandItem
                      key={result.id}
                      value={result.id}
                      onSelect={() => handleSelect(result)}
                      className="flex items-start gap-3 p-3 cursor-pointer"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm truncate">{result.title}</h4>
                          <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {result.content}
                        </p>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </>
        )}

        {/* Empty state when no search query */}
        {!searchQuery && (
          <CommandGroup heading="Quick Start">
            <CommandItem className="flex items-center gap-3 p-3 cursor-default">
              <Search className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Search across all white papers and sections
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Try: "economics", "education", "justice", "wellbeing", "technology"
                </p>
              </div>
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}