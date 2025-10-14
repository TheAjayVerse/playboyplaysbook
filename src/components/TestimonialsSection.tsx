import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
import review3 from "@/assets/review-3.png";
import review4 from "@/assets/review-4.png";
import review5 from "@/assets/review-5.png";
import review6 from "@/assets/review-6.png";
import review7 from "@/assets/review-7.png";
import review8 from "@/assets/review-8.png";
import review9 from "@/assets/review-9.png";
import review10 from "@/assets/review-10.png";

const TestimonialsSection = () => {
  const testimonials = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
  ];

  const autoplayPlugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center glow-text">
          What Guys Are Saying
        </h2>

        <div className="relative px-12 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={autoplayPlugin.current.stop}
            onMouseLeave={autoplayPlugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-2">
                    <div className="border-2 border-primary/30 rounded-xl overflow-hidden backdrop-blur-sm">
                      <img 
                        src={testimonial} 
                        alt={`Customer review ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 -translate-x-0" />
            <CarouselNext className="absolute right-0 translate-x-0" />
          </Carousel>
        </div>

        <div className="text-center space-y-8">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from guys who are just like you. Stop waiting start learning the game.
          </p>

          <Button
            size="lg"
            className="glow-button bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 rounded-full font-heading font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://gumroad.com/checkout?_gl=1*1rvg7xg*_ga*MTczMjA2OTkxMy4xNzU3NDI3MDA3*_ga_6LJN6D94N6*czE3NjAzMzM5MjEkbzE3JGcxJHQxNzYwMzM2NjM5JGo1NSRsMCRoMA..', '_blank')}
          >
            Get the full playbook
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
