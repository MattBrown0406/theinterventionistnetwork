import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Index = lazy(() => import("./pages/Index"));
const FindPage = lazy(() => import("./pages/FindPage"));
const InterventionistProfile = lazy(() => import("./pages/InterventionistProfile"));
const JoinPage = lazy(() => import("./pages/JoinPage"));
const ApplyPage = lazy(() => import("./pages/ApplyPage"));
const HelpPage = lazy(() => import("./pages/HelpPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const PaymentConfirmation = lazy(() => import("./pages/PaymentConfirmation"));
const TrainingPage = lazy(() => import("./pages/TrainingPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const CoachingPage = lazy(() => import("./pages/CoachingPage"));
const BadgePage = lazy(() => import("./pages/BadgePage"));
const ForumIndex = lazy(() => import("./pages/ForumIndex"));
const ForumCategory = lazy(() => import("./pages/ForumCategory"));
const ForumThread = lazy(() => import("./pages/ForumThread"));
const ForumNewThread = lazy(() => import("./pages/ForumNewThread"));
const StateLandingPage = lazy(() => import("./pages/StateLandingPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const VerifyPage = lazy(() => import("./pages/VerifyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const routeFallback = (
  <div className="min-h-[40vh] flex items-center justify-center text-sm text-muted-foreground">
    Loading...
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={routeFallback}>
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
              <Route path="/verify" element={<VerifyPage />} />
              <Route path="/forum" element={<ForumIndex />} />
              <Route path="/forum/new" element={<ForumNewThread />} />
              <Route path="/forum/thread/:threadId" element={<ForumThread />} />
              <Route path="/forum/:slug" element={<ForumCategory />} />
              <Route path="/states/:slug" element={<StateLandingPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
