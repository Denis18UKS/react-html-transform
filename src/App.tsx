
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Privacy from "./pages/Privacy";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import GridBackground from "./components/GridBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-cyber-gradient flex flex-col">
          <GridBackground />
          <Navigation />
          <main className="container-main">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/error" element={<Error />} />
              <Route path="/messages" element={<NotFound />} />
              <Route path="/users" element={<NotFound />} />
              <Route path="/games" element={<NotFound />} />
              <Route path="/forums" element={<NotFound />} />
              <Route path="/admin" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
