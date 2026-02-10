import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import makeWomenObsessedImage from "@/assets/make-women-obsessed.png";

const LeadMagnet = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-primary/30 bg-card shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-500 group">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <img
                src={makeWomenObsessedImage}
                alt="How to make 99% of women obsessed - Free dating guide"
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:block hidden" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
              <span className="text-xs font-heading uppercase tracking-widest text-primary">
                🔥 Must Read
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold glow-text leading-tight">
                HOW TO MAKE 99% OF WOMEN OBSESSED
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The real sauce from years around the hottest women. From scarcity to red flags — I break down everything that helped me bag and keep women.
              </p>
              <Link to="/Guide">
                <Button
                  size="lg"
                  className="glow-button bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 rounded-full font-heading font-semibold transition-all duration-300 hover:scale-105 w-full md:w-auto"
                >
                  Read Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
