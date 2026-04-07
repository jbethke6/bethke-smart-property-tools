import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import BgfAssistent from "./pages/BgfAssistent";
import FoerderCheck from "./pages/FoerderCheck";
import IndividuelleTools from "./pages/IndividuelleTools";
import GrundrissService from "./pages/GrundrissService";
import Tour3D from "./pages/Tour3D";
import ImmobilienWebsite from "./pages/ImmobilienWebsite";
import SmartToolsDemo from "./pages/SmartToolsDemo";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/grundrissheld" element={<BgfAssistent />} />
          <Route path="/bgf-held" element={<BgfAssistent />} />
          <Route path="/bgf-assistent" element={<BgfAssistent />} />
          <Route path="/foerder-held" element={<FoerderCheck />} />
          <Route path="/foerderheld" element={<FoerderCheck />} />
          <Route path="/foerder-check" element={<FoerderCheck />} />
          <Route path="/individuelle-tools" element={<IndividuelleTools />} />
          <Route path="/grundriss-service" element={<GrundrissService />} />
          <Route path="/3d-tour" element={<Tour3D />} />
          <Route path="/immobilien-website" element={<ImmobilienWebsite />} />
          <Route path="/smart-tools-demo" element={<SmartToolsDemo />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
