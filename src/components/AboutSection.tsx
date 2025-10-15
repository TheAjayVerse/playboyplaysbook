import { Button } from "@/components/ui/button";
const AboutSection = () => {
  return <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold glow-text">
            The Playbook That Actually Works in this generation
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't another "pickup guide." It's a tested system used by over 500 guys to get real results.
          </p>
        </div>

        <div className="space-y-6 text-lg">
          <p className="text-center font-medium text-foreground">You'll learn how to:</p>
          
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">•</span>
              <span>Spot red flags in a girl</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">•</span>
              <span>How to start texting - exact words</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">•</span>
              <span>Build up from text to call to video call to meeting her on a date</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">•</span>
              <span>Text in a way that keeps her hooked</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">•</span>
              <span>Build attraction on social media</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">•</span>
              <span>How to keep the spark in the relationship</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">•</span>
              <span>How to not be a push over</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">•</span>
              <span>How to create mystery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">•</span>
              <span>Handle "dry" energy or ghosting like a pro</span>
            </li>
          </ul>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto pt-6">The truth is: social media changed the game. You can spend $1000 on dates or even more investing on girls who then cheat on you, but for $47 as a playboy I teach you everything and how to understand this game not hate them but understand them and lifelong knowledge.</p>
          
          <p className="text-center font-medium text-foreground pt-4">
            <span className="text-secondary">BONUS:</span> I added a self improvement looksmaxxing guide for y'all
          </p>
        </div>

        <div className="bg-card border border-primary/20 rounded-3xl p-8 md:p-12 text-center space-y-6 backdrop-blur-sm">
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-heading font-bold gradient-text">$47</p>
            <p className="text-xl text-muted-foreground">One-time. Lifetime access.</p>
            <p className="text-sm text-muted-foreground">No subscriptions. No filler. Just game that works.</p>
          </div>

          <Button size="lg" className="glow-button bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 rounded-full font-heading font-semibold transition-all duration-300 hover:scale-105" onClick={() => window.open('https://gumroad.com/checkout?_gl=1*1rvg7xg*_ga*MTczMjA2OTkxMy4xNzU3NDI3MDA3*_ga_6LJN6D94N6*czE3NjAzMzM5MjEkbzE3JGcxJHQxNzYwMzM2NjM5JGo1NSRsMCRoMA..', '_blank')}>
            Buy Now
          </Button>
        </div>
      </div>
    </section>;
};
export default AboutSection;