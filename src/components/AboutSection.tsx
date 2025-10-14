import { Button } from "@/components/ui/button";
const AboutSection = () => {
  return <section className="py-20 px-4 relative" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-heading font-bold glow-text">
            Modern Dating Playbook That Actually Works
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't another "pickup guide." It's a proven dating system used by over 500 men to get real results in modern relationships.
          </p>
        </div>

        <div className="space-y-6 text-lg">
          <h3 className="text-center font-medium text-foreground">Master These Dating Skills:</h3>
          
          <ul className="space-y-4 max-w-2xl mx-auto" role="list">
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl" aria-hidden="true">•</span>
              <span>Modern texting strategies that keep her engaged and interested</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl" aria-hidden="true">•</span>
              <span>Build authentic attraction through social media and digital communication</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl" aria-hidden="true">•</span>
              <span>Handle dry responses and ghosting situations with confidence</span>
            </li>
          </ul>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto pt-6">Social media transformed modern dating. Instead of spending $1000+ on dates without results, invest $47 in understanding dating psychology and proven strategies. Gain lifelong knowledge for authentic connections.</p>
        </div>

        <article className="bg-card border border-primary/20 rounded-3xl p-8 md:p-12 text-center space-y-6 backdrop-blur-sm">
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-heading font-bold gradient-text" itemProp="price">$47</p>
            <p className="text-xl text-muted-foreground">One-time payment. Lifetime access.</p>
            <p className="text-sm text-muted-foreground">No subscriptions. No filler. Just proven dating strategies that work.</p>
          </div>

          <Button 
            size="lg" 
            className="glow-button bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 rounded-full font-heading font-semibold transition-all duration-300 hover:scale-105" 
            onClick={() => window.open('https://gumroad.com/checkout?_gl=1*1rvg7xg*_ga*MTczMjA2OTkxMy4xNzU3NDI3MDA3*_ga_6LJN6D94N6*czE3NjAzMzM5MjEkbzE3JGcxJHQxNzYwMzM2NjM5JGo1NSRsMCRoMA..', '_blank')}
            aria-label="Purchase Playboys Playbook for $47"
          >
            Buy Dating Playbook Now
          </Button>
        </article>
      </div>
    </section>;
};
export default AboutSection;