import { ReactNode, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  SidebarSeparator,
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
  LogIn,
  ScrollText,
  LogOut,
  Settings,
  Home,
  Printer,
  Bot
} from "lucide-react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { GlobalSearch } from "@/components/GlobalSearch";
import { CommentProvider } from "@/components/comments/CommentProvider";
import { CommentSystem } from "@/components/comments/CommentSystem";
import { UserProfile } from "@/components/UserProfile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useAuth } from "@/contexts/AuthContext";
import { useParagraphIds } from "@/hooks/useParagraphIds";
import { usePrintPDF } from "@/hooks/usePrintPDF";

import { supabase } from "@/integrations/supabase/client";
import earthImage from "@/assets/earth.jpg";

interface WhitePaperLayoutProps {
  children: ReactNode;
}

interface NavigationItem {
  title: string;
  url: string;
  icon: any;
  isPrint?: boolean;
}

const navigationItems: NavigationItem[] = [
  { title: "Welcome", url: "/", icon: Home },
  { title: "Overview", url: "/papers/", icon: BookOpen },
  { title: "Contribute", url: "/papers/contribute", icon: GitBranch },
  { title: "Glossary", url: "/papers/glossary", icon: ScrollText },
];

const whitePaperItems = [
  { title: "Endo Economics", url: "/papers/endo-economics", icon: Coins },
  { title: "Digital Sovereignty", url: "/papers/digital-sovereignty", icon: Shield },
  { title: "AI Ethics", url: "/papers/ai-ethics", icon: Bot },
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
  const navigate = useNavigate();
  const { generatePDF } = usePrintPDF();
  const [profileData, setProfileData] = useState<{
    display_name: string;
    avatar_url: string | null;
  }>({
    display_name: '',
    avatar_url: null
  });

  // Fetch user profile data when user is available
  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('display_name, avatar_url')
          .eq('user_id', user.id)
          .single();
          
        if (error) throw error;
        
        if (data) {
          setProfileData(data);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
    
    fetchProfile();
  }, [user]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const userInitial = profileData.display_name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || '?';

  const isActive = (path: string) => {
    if (path === "/papers/" && currentPath === "/papers") return true;
    return currentPath === path;
  };

  const handleNavClick = (url: string, isPrint?: boolean) => {
    console.log("handleNavClick called:", { url, isPrint });
    
    if (isMobile) {
      toggleSidebar();
    }
    
    if (isPrint) {
      console.log("Calling generatePDF...");
      generatePDF();
      return;
    }
    
    // Regular navigation for all routes
    navigate(url);
  };

  return (
    <TooltipProvider>
      <Sidebar className="border-r bg-background/75 backdrop-blur-[5px] [&_[data-sidebar='sidebar']]:bg-transparent" collapsible="icon">
        <SidebarHeader className="border-b">
          <div className={`flex items-center ${state === "collapsed" && !isMobile ? "justify-center" : "justify-between"}`}>
            {(state !== "collapsed" || isMobile) && (
              <div>
                <h1 className="text-xl font-semibold text-primary rainbowtext">ACTUALIZE EARTH</h1>
                <h2 className="text-lg font-semibold text-primary">Systems Regeneration</h2>
                <h2 className="text-lg font-semibold text-primary">Manifesto</h2>
              </div>
            )}
            <SidebarTrigger className={`${state === "collapsed" && !isMobile ? "mx-auto" : ""}`} />
          </div>
          
          {/* Search section - temporarily hidden 
          <div className={`transition-all duration-200 ${state === "collapsed" && !isMobile ? "opacity-0 h-0" : "opacity-100 mt-4"}`}>
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
          */}
        </SidebarHeader>
        
        <SidebarContent className="overflow-y-auto">
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                     {item.isPrint ? (
                       <SidebarMenuButton asChild>
                         <button onClick={() => handleNavClick(item.url, item.isPrint)}>
                           {state === "collapsed" && !isMobile ? (
                             <Tooltip>
                               <TooltipTrigger asChild>
                                 <div className="flex w-full items-center justify-center">
                                   <item.icon className="h-4 w-4 shrink-0" />
                                 </div>
                               </TooltipTrigger>
                               <TooltipContent side="right" className="bg-blue-800 text-white border-blue-700">
                                 <p>{item.title}</p>
                               </TooltipContent>
                             </Tooltip>
                           ) : (
                             <>
                               <item.icon className="h-4 w-4 shrink-0" />
                               <span className="truncate">{item.title}</span>
                             </>
                           )}
                         </button>
                       </SidebarMenuButton>
                     ) : (
                       <SidebarMenuButton asChild isActive={isActive(item.url)}>
                         {state === "collapsed" && !isMobile ? (
                           <Tooltip>
                             <TooltipTrigger asChild>
                               {item.url === "/" ? (
                                 <NavLink 
                                   to={item.url}
                                   className="flex w-full items-center justify-center py-[5px]"
                                   onClick={() => handleNavClick(item.url)}
                                 >
                                   <item.icon className="h-4 w-4 shrink-0" />
                                 </NavLink>
                               ) : (
                                 <NavLink 
                                   to={item.url} 
                                   end={item.url === "/papers/"}
                                   className="flex w-full items-center justify-center py-[5px]"
                                   onClick={() => handleNavClick(item.url)}
                                 >
                                   <item.icon className="h-4 w-4 shrink-0" />
                                 </NavLink>
                               )}
                             </TooltipTrigger>
                             <TooltipContent side="right" className="bg-blue-800 text-white border-blue-700">
                               <p>{item.title}</p>
                             </TooltipContent>
                           </Tooltip>
                         ) : (
                           item.url === "/" ? (
                             <NavLink 
                               to={item.url}
                               className="flex w-full items-center gap-2"
                               onClick={() => handleNavClick(item.url)}
                             >
                               <item.icon className="h-4 w-4 shrink-0" />
                               <span className="truncate">{item.title}</span>
                             </NavLink>
                           ) : (
                             <NavLink 
                               to={item.url} 
                               end={item.url === "/papers/"}
                               className="flex w-full items-center gap-2"
                               onClick={() => handleNavClick(item.url)}
                             >
                               <item.icon className="h-4 w-4 shrink-0" />
                               <span className="truncate">{item.title}</span>
                             </NavLink>
                           )
                         )}
                       </SidebarMenuButton>
                     )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarSeparator />
          
          <SidebarGroup>
            <SidebarGroupLabel>Proposals</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {whitePaperItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                     <SidebarMenuButton asChild isActive={isActive(item.url)}>
                        {state === "collapsed" && !isMobile ? (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <NavLink 
                                to={item.url} 
                                className="flex w-full items-center justify-center py-[5px]"
                                onClick={() => handleNavClick(item.url)}
                              >
                                <item.icon className="h-4 w-4 shrink-0" />
                              </NavLink>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="bg-blue-800 text-white border-blue-700">
                              <p>{item.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <NavLink 
                            to={item.url} 
                            className="flex w-full items-center gap-2"
                            onClick={() => handleNavClick(item.url)}
                          >
                            <item.icon className="h-4 w-4 shrink-0" />
                            <span className="truncate">{item.title}</span>
                          </NavLink>
                        )}
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
            state === "collapsed" && !isMobile ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="w-full h-8 p-0 justify-center">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={profileData.avatar_url || undefined} />
                      <AvatarFallback>{userInitial}</AvatarFallback>
                    </Avatar>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-2" align="start" side="right">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 justify-center">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={profileData.avatar_url || undefined} />
                        <AvatarFallback>{userInitial}</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                        <p className="text-sm font-medium">{profileData.display_name || 'User'}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="grid gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start gap-2"
                        onClick={() => handleNavClick("/auth")}
                        asChild
                      >
                        <NavLink to="/auth">
                          <Settings className="h-4 w-4" />
                          Edit Profile
                        </NavLink>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start gap-2 text-red-700"
                        onClick={handleSignOut}
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <UserProfile />
            )
          ) : (
            <Button 
              variant="outline"
              className={`w-full ${state === "collapsed" && !isMobile ? "justify-center" : "justify-start gap-2"}`}
              onClick={() => handleNavClick("/auth")}
              asChild
            >
              <NavLink to="/auth">
                <LogIn className="h-4 w-4" />
                {(state !== "collapsed" || isMobile) && <span>Sign In</span>}
              </NavLink>
            </Button>
          )}
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  );
}

function MobileNavButton() {
  const { toggleSidebar, openMobile } = useSidebar();
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <button
      onClick={toggleSidebar}
      className={`fixed bottom-4 z-50 p-2.5 bg-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 md:hidden ${
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
  useParagraphIds();

  return (
    <CommentProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full relative group/layout">
          <div 
            className="hidden md:block fixed inset-y-0 left-0 overflow-hidden pointer-events-none z-0 transition-[width] duration-200 ease-linear w-64 group-has-[[data-state=collapsed]]/layout:w-12" 
          >
            <img 
              src={earthImage} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover animate-[ken-burns_60s_ease-in-out_infinite]"
            />
          </div>
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