
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
  Vote
} from "lucide-react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

interface WhitePaperLayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { title: "Overview", url: "/papers/", icon: BookOpen, color: "rgb(59, 130, 246)" }, // blue-500
  { title: "Endo Economics", url: "/papers/endo-economics", icon: Coins, color: "rgb(34, 197, 94)" }, // green-500
  { title: "Waste Management", url: "/papers/waste-management", icon: Recycle, color: "rgb(132, 204, 22)" }, // lime-500
  { title: "Energy Infrastructure", url: "/papers/energy", icon: Zap, color: "rgb(251, 191, 36)" }, // amber-500
  { title: "Collective Sensemaking", url: "/papers/sensemaking", icon: Brain, color: "rgb(139, 92, 246)" }, // violet-500
  { title: "Wellbeing Tracking", url: "/papers/wellbeing", icon: Heart, color: "rgb(236, 72, 153)" }, // pink-500
  { title: "Digital Sovereignty", url: "/papers/digital-sovereignty", icon: Shield, color: "rgb(71, 85, 105)" }, // slate-600
  { title: "Education", url: "/papers/education", icon: GraduationCap, color: "rgb(249, 115, 22)" }, // orange-500
  { title: "Ecological Regeneration", url: "/papers/ecology", icon: Leaf, color: "rgb(22, 163, 74)" }, // green-600
  { title: "Justice", url: "/papers/justice", icon: Scale, color: "rgb(161, 161, 170)" }, // zinc-400
  { title: "Conflict Transformation", url: "/papers/conflict", icon: Users, color: "rgb(220, 38, 38)" }, // red-600
  { title: "Media", url: "/papers/media", icon: Radio, color: "rgb(147, 51, 234)" }, // purple-600
  { title: "Science", url: "/papers/science", icon: Microscope, color: "rgb(14, 165, 233)" }, // sky-500
  { title: "Arts and Culture", url: "/papers/arts", icon: Palette, color: "rgb(217, 70, 239)" }, // fuchsia-500
  { title: "Spirituality", url: "/papers/spirituality", icon: Sparkles, color: "rgb(168, 85, 247)" }, // purple-500
  { title: "Death and Dignity", url: "/papers/death", icon: Skull, color: "rgb(75, 85, 99)" }, // gray-600
  { title: "Sexual Health", url: "/papers/sexual-health", icon: Crown, color: "rgb(239, 68, 68)" }, // red-500
  { title: "Regenerative Election", url: "/papers/election", icon: Vote, color: "rgb(16, 185, 129)" }, // emerald-500
];

function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/papers/" && currentPath === "/papers") return true;
    return currentPath === path;
  };

  const getActiveItem = () => {
    return navigationItems.find(item => isActive(item.url));
  };

  const activeItem = getActiveItem();

  return (
    <Sidebar className="border-r relative" collapsible="icon">
      {/* Active page color indicator */}
      {activeItem && (
        <div 
          className="absolute left-0.5 top-0 bottom-0 w-1 rounded-full z-10"
          style={{ backgroundColor: activeItem.color }}
        />
      )}
      
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className={`transition-all duration-200 ${state === "collapsed" ? "opacity-0 w-0" : "opacity-100"}`}>
            <h1 className="text-xl font-semibold text-primary rainbowtext">ACTUALIZE</h1>
            <h2 className="text-lg font-semibold text-primary">Systems Regeneration</h2>
            <p className="text-sm text-muted-foreground">White Paper Collection</p>
          </div>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Papers</SidebarGroupLabel>
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
      </div>
    </SidebarProvider>
  );
}
