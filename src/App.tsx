
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhitePaperLayout from "./components/WhitePaperLayout";
import Overview from "./pages/Overview";
import EndoEconomics from "./pages/EndoEconomics";
import WasteManagement from "./pages/WasteManagement";
import Energy from "./pages/Energy";
import Sensemaking from "./pages/Sensemaking";
import Wellbeing from "./pages/Wellbeing";
import DigitalSovereignty from "./pages/DigitalSovereignty";
import Education from "./pages/Education";
import Ecology from "./pages/Ecology";
import Justice from "./pages/Justice";
import Conflict from "./pages/Conflict";
import Media from "./pages/Media";
import Science from "./pages/Science";
import Arts from "./pages/Arts";
import Spirituality from "./pages/Spirituality";
import Death from "./pages/Death";
import SexualHealth from "./pages/SexualHealth";
import Election from "./pages/Election";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/papers/*" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full">
                <WhitePaperLayout>
                  <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/endo-economics" element={<EndoEconomics />} />
                    <Route path="/waste-management" element={<WasteManagement />} />
                    <Route path="/energy" element={<Energy />} />
                    <Route path="/sensemaking" element={<Sensemaking />} />
                    <Route path="/wellbeing" element={<Wellbeing />} />
                    <Route path="/digital-sovereignty" element={<DigitalSovereignty />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/ecology" element={<Ecology />} />
                    <Route path="/justice" element={<Justice />} />
                    <Route path="/conflict" element={<Conflict />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/science" element={<Science />} />
                    <Route path="/arts" element={<Arts />} />
                    <Route path="/spirituality" element={<Spirituality />} />
                    <Route path="/death" element={<Death />} />
                    <Route path="/sexual-health" element={<SexualHealth />} />
                    <Route path="/election" element={<Election />} />
                  </Routes>
                </WhitePaperLayout>
              </div>
            </SidebarProvider>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
