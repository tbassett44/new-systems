
import { ReactNode } from "react";
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
  Menu
} from "lucide-react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { useIsMobile } from "@/hooks/use-mobile";

interface WhitePaperLayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { title: "Overview", url: "/papers/", icon: BookOpen },
  { title: "Endo Economics", url: "/papers/endo-economics", icon: Coins },
  { title: "Waste Management", url: "/papers/waste-management", icon: Recycle },
  { title: "Energy Infrastructure", url: "/papers/energy", icon: Zap },
  { title: "Collective Sensemaking", url: "/papers/sensemaking", icon: Brain },
  { title: "Wellbeing Tracking", url: "/papers/wellbeing", icon: Heart },
  { title: "Digital Sovereignty", url: "/papers/digital-sovereignty", icon: Shield },
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
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/papers/" && currentPath === "/papers") return true;
    return currentPath === path;
  };

  return (
    <Sidebar className="border-r" collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className={`transition-all duration-200 ${state === "collapsed" ? "opacity-0 w-0" : "opacity-100"}`}>
            <h1 className="text-xl font-semibold text-primary rainbowtext">ACTUALIZE</h1>
            <h2 className="text-lg font-semibold text-primary">Systems Regeneration</h2>
            <h2 className="text-lg font-semibold text-primary">White Paper Collection</h2>
          </div>
          <SidebarTrigger />
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
    </Sidebar>
  );
}

function MobileNavButton() {
  const { toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <button
      onClick={toggleSidebar}
      className="fixed bottom-4 right-0 z-50 p-2.5 bg-blue-600 text-white rounded-l-lg shadow-lg hover:bg-blue-700 transition-colors md:hidden"
      aria-label="Toggle navigation menu"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}

export default function WhitePaperLayout({ children }: WhitePaperLayoutProps) {
  useScrollRestoration();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main 
          className="flex-1 overflow-auto" 
          data-scroll-container
        >
          <div className="container mx-auto px-6 py-8 max-w-4xl">
            {children}
          </div>
        </main>
        <MobileNavButton />
      </div>
    </SidebarProvider>
  );
}
