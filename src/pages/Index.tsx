
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import StorySection from "@/components/StorySection";
import TechSection from "@/components/TechSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <StorySection />
      <TechSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
