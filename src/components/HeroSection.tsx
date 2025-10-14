import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <header className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight glow-text">
          Stop Getting Ghosted in Modern Dating{" "}
          <span className="gradient-text">Start Understanding the Game</span>
        </h1>
        
        <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          <p>She used to reply fast. Now she's too busy.</p>
          <p>She says she's not ready, but gives energy to someone else.</p>
          <p className="text-foreground font-medium">
            It's time to stop chasing and start understanding how the game really works.
          </p>
        </div>

        <Button
          size="lg"
          className="glow-button bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 rounded-full font-heading font-semibold transition-all duration-300 hover:scale-105"
          onClick={() => window.open('https://gumroad.com/checkout?_gl=1*1rvg7xg*_ga*MTczMjA2OTkxMy4xNzU3NDI3MDA3*_ga_6LJN6D94N6*czE3NjAzMzM5MjEkbzE3JGcxJHQxNzYwMzM2NjM5JGo1NSRsMCRoMA..', '_blank')}
        >
          Get The Playboys Playbook $47
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;
