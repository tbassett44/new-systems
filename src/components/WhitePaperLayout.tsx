import { ReactNode, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  useSidebar
} from "@/components/ui/sidebar";
import { 
  BookOpen, 
  Coins, 
  Recycle, 
  Zap, 
  Brain, 
  Heart, 
  Shield, 
  GraduationCap, 
  Leaf, 
  Scale, 
  Users, 
  Radio, 
  Microscope, 
  Palette, 
  Sparkles,
  Skull,
  Crown,
  Vote,
  Menu,
  Search,
  GitBranch,
  LogIn
} from "lucide-react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { GlobalSearch } from "@/components/GlobalSearch";
import { CommentProvider } from "@/components/comments/CommentProvider";
import { CommentSystem } from "@/components/comments/CommentSystem";
import { UserProfile } from "@/components/UserProfile";
import { useAuth } from "@/contexts/AuthContext";

interface WhitePaperLayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { title: "Overview", url: "/papers/", icon: BookOpen },
  { title: "Contribute", url: "/papers/contribute", icon: GitBranch },
  { title: "Glossary", url: "/papers/glossary", icon: BookOpen },
];

const whitePaperItems = [
  { title: "Endo Economics", url: "/papers/endo-economics", icon: Coins },
  { title: "Digital Sovereignty", url: "/papers/digital-sovereignty", icon: Shield },
  { title: "Waste Management", url: "/papers/waste-management", icon: Recycle },
  { title: "Energy Infrastructure", url: "/papers/energy", icon: Zap },
  { title: "Collective Sensemaking", url: "/papers/sensemaking", icon: Brain },
  { title: "Wellbeing Tracking", url: "/papers/wellbeing", icon: Heart },
  { title: "Education", url: "/papers/education", icon: GraduationCap },
  { title: "Ecological Regeneration", url: "/papers/ecology", icon: Leaf },
  { title: "Justice", url: "/papers/justice", icon: Scale },
  { title: "Conflict Transformation", url: "/papers/conflict", icon: Users },
  { title: "Media", url: "/papers/media", icon: Radio },
  { title: "Science", url: "/papers/science", icon: Microscope },
  { title: "Arts and Culture", url: "/papers/arts", icon: Palette },
  { title: "Spirituality", url: "/papers/spirituality", icon: Sparkles },
  { title: "Death and Dignity", url: "/papers/death", icon: Skull },
  { title: "Sexual Health", url: "/papers/sexual-health", icon: Crown },
  { title: "Regenerative Election", url: "/papers/election", icon: Vote },
];

function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [searchOpen, setSearchOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user } = useAuth();

  const isActive = (path: string) => {
    if (path === "/papers/" && currentPath === "/papers") return true;
    return currentPath === path;
  };

  const handleNavClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <Sidebar className="border-r" collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className={`transition-all duration-200 ${state === "collapsed" ? "opacity-0 w-0" : "opacity-100"}`}>
            <h1 className="text-xl font-semibold text-primary rainbowtext">ACTUALIZE EARTH</h1>
            <h2 className="text-lg font-semibold text-primary">Systems Regeneration</h2>
            <h2 className="text-lg font-semibold text-primary">Manifesto</h2>
          </div>
          <SidebarTrigger />
        </div>
        
        {/* Search section */}
        <div className={`transition-all duration-200 ${state === "collapsed" ? "opacity-0 h-0" : "opacity-100 mt-4"}`}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSearchOpen(true)}
            className="w-full justify-start text-muted-foreground"
          >
            <Search className="h-4 w-4 mr-2" />
            Search manifesto...
            <div className="ml-auto flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </Button>
        </div>
      </SidebarHeader>
      
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/papers/"}
                      className="flex items-center gap-3 w-full"
                      onClick={handleNavClick}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {state !== "collapsed" && (
                        <span className="truncate">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="px-3 py-0.5">
          <hr className="border-border" />
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Proposals</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {whitePaperItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 w-full"
                      onClick={handleNavClick}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {state !== "collapsed" && (
                        <span className="truncate">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
      
      <SidebarFooter className="border-t p-3">
        {user ? (
          <div className={`transition-all duration-200 ${state === "collapsed" ? "opacity-0 h-0" : "opacity-100"}`}>
            <UserProfile />
          </div>
        ) : (
          <Button 
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => handleNavClick()}
            asChild
          >
            <NavLink to="/auth">
              <LogIn className="h-4 w-4" />
              {state !== "collapsed" && <span>Sign In</span>}
            </NavLink>
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}

function MobileNavButton() {
  const { toggleSidebar, openMobile } = useSidebar();
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <button
      onClick={toggleSidebar}
      className={`fixed bottom-4 z-50 p-2.5 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 md:hidden ${
        openMobile ? 'left-72' : 'left-4'
      }`}
      aria-label="Toggle navigation menu"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}

export default function WhitePaperLayout({ children }: WhitePaperLayoutProps) {
  useScrollRestoration();

  return (
    <CommentProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <main 
            className="flex-1 overflow-auto comment-highlighted-content" 
            data-scroll-container
          >
            <div className="container mx-auto px-6 py-8 max-w-4xl">
              {children}
            </div>
          </main>
          <MobileNavButton />
          <CommentSystem />
        </div>
      </SidebarProvider>
    </CommentProvider>
  );
}
