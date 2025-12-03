import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Index from "./pages/Index";
import WhitePaperLayout from "./components/WhitePaperLayout";
import EndoEconomics from "./pages/EndoEconomics";
import DigitalSovereignty from "./pages/DigitalSovereignty";
import AIEthics from "./pages/AIEthics";
import WasteManagement from "./pages/WasteManagement";
import Energy from "./pages/Energy";
import Sensemaking from "./pages/Sensemaking";
import Wellbeing from "./pages/Wellbeing";
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
import Glossary from "./pages/Glossary";
import Overview from "./pages/Overview";
import Contribute from "./pages/Contribute";
import AetherAI from "./pages/AetherAI";
import Auth from "./pages/Auth";
import { AuthProvider } from './contexts/AuthContext';

import { initializeAmplitude } from '@/lib/analytics';
import { useAmplitudePageTracking } from '@/hooks/useAmplitudePageTracking';
import { useExternalLinkTracking } from '@/hooks/useExternalLinkTracking';

function AppContent() {
  // Add page tracking and external link tracking inside Router context
  useAmplitudePageTracking();
  useExternalLinkTracking();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/papers" element={<WhitePaperLayout><Outlet /></WhitePaperLayout>}>
        <Route index element={<Overview />} />
        <Route path="aether-ai" element={<AetherAI />} />
        <Route path="contribute" element={<Contribute />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="endo-economics" element={<EndoEconomics />} />
        <Route path="digital-sovereignty" element={<DigitalSovereignty />} />
        <Route path="ai-ethics" element={<AIEthics />} />
        <Route path="waste-management" element={<WasteManagement />} />
        <Route path="energy" element={<Energy />} />
        <Route path="sensemaking" element={<Sensemaking />} />
        <Route path="wellbeing" element={<Wellbeing />} />
        <Route path="education" element={<Education />} />
        <Route path="ecology" element={<Ecology />} />
        <Route path="justice" element={<Justice />} />
        <Route path="conflict" element={<Conflict />} />
        <Route path="media" element={<Media />} />
        <Route path="science" element={<Science />} />
        <Route path="arts" element={<Arts />} />
        <Route path="spirituality" element={<Spirituality />} />
        <Route path="death" element={<Death />} />
        <Route path="sexual-health" element={<SexualHealth />} />
        <Route path="election" element={<Election />} />
      </Route>
    </Routes>
  );
}

function App() {
  // Initialize Amplitude when app starts
  useEffect(() => {
    initializeAmplitude();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
