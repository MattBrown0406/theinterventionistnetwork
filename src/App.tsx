import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import FindPage from "./pages/FindPage";
import InterventionistProfile from "./pages/InterventionistProfile";
import JoinPage from "./pages/JoinPage";
import ApplyPage from "./pages/ApplyPage";
import HelpPage from "./pages/HelpPage";
import AboutPage from "./pages/AboutPage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import AdminPage from "./pages/AdminPage";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import TrainingPage from "./pages/TrainingPage";
import ResourcesPage from "./pages/ResourcesPage";
import CommunityPage from "./pages/CommunityPage";
import CoachingPage from "./pages/CoachingPage";
import BadgePage from "./pages/BadgePage";
import ForumIndex from "./pages/ForumIndex";
import ForumCategory from "./pages/ForumCategory";
import ForumThread from "./pages/ForumThread";
import ForumNewThread from "./pages/ForumNewThread";
import StateLandingPage from "./pages/StateLandingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/find" element={<FindPage />} />
            <Route path="/interventionist/:slug" element={<InterventionistProfile />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/coaching" element={<CoachingPage />} />
            <Route path="/badge" element={<BadgePage />} />
            <Route path="/forum" element={<ForumIndex />} />
            <Route path="/forum/new" element={<ForumNewThread />} />
            <Route path="/forum/thread/:threadId" element={<ForumThread />} />
            <Route path="/forum/:slug" element={<ForumCategory />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
