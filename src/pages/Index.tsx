import FloatingBubbles from "@/components/FloatingBubbles";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingBubbles />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default Index;
