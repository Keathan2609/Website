import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingNavigation from "./components/FloatingNavigation";
import BackgroundEffects from "./components/BackgroundEffects";
import Index from "./pages/Index";
import ThreeDVFXProjects from "./pages/projects/ThreeDVFX";
import GraphicDesignProjects from "./pages/projects/GraphicDesign";
import DataScienceProjects from "./pages/projects/DataScience";
import SecurityProjects from "./pages/projects/Security";
import CTFProjects from "./pages/projects/CTF";
import SOCProjects from "./pages/projects/SOC";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Router>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background relative">
          <BackgroundEffects />
          <FloatingNavigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/threadvfx" element={<ThreeDVFXProjects />} />
            <Route path="/projects/design" element={<GraphicDesignProjects />} />
            <Route path="/projects/datascience" element={<DataScienceProjects />} />
            <Route path="/projects/security" element={<SecurityProjects />} />
            <Route path="/projects/ctf" element={<CTFProjects />} />
            <Route path="/projects/soc" element={<SOCProjects />} />
          </Routes>
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
