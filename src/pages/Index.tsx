import FloatingBubbles from "@/components/FloatingBubbles";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogCTA from "@/components/BlogCTA";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingBubbles />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <BlogCTA />
      </div>
    </div>
  );
};

export default Index;
