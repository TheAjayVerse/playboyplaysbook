import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    "Bro this actually worked… she replied the SAME NIGHT.",
    "I used your message flow she double-texted first for the first time ever.",
    "I wasted money on so many dates before. This is worth my own investment.",
    "She literally said: 'I don't know why I can't stop talking to you.'",
    "Not cringe, not fake just real social media game that makes sense.",
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center glow-text">
          What Guys Are Saying
        </h2>

        <div className="relative">
          <div className="flex gap-6 animate-scroll hover:pause">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-card border border-primary/20 rounded-2xl p-6 backdrop-blur-sm"
              >
                <p className="text-lg text-foreground">{testimonial}</p>
              </div>
            ))}
          </div>
          
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
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
            Get Results Like These
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
