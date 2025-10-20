import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import textingGameImage from "@/assets/texting-game.jpg";
import keepingHerHookedImage from "@/assets/keeping-her-hooked.jpg";
import approachHerImage from "@/assets/approach-her.jpg";
import attractHerVibeImage from "@/assets/attract-her-vibe.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "texting-game-blueprint",
    title: "HOW TO IMPROVE YOUR TEXT GAME",
    excerpt: "From the Playboy's Playbook Mindset - Texting isn't about words. It's energy. Learn how to make her feel something through your messages.",
    image: textingGameImage,
    date: "October 20, 2025"
  },
  {
    id: "keeping-her-hooked",
    title: "HOW TO KEEP HER HOOKED (WITHOUT LOSING YOURSELF)",
    excerpt: "From the Playboy's Playbook Mindset - Most guys know how to get her attention. Few know how to keep it. Learn the energy that keeps her addicted.",
    image: keepingHerHookedImage,
    date: "October 20, 2025"
  },
  {
    id: "approach-her",
    title: "HOW TO APPROACH HER (WITHOUT LOOKING DESPERATE)",
    excerpt: "From the Playboy's Playbook Mindset - Real confidence isn't about having no fear. It's about moving anyway. Learn how to make your first move count.",
    image: approachHerImage,
    date: "October 20, 2025"
  },
  {
    id: "texting-game-blueprint",
    title: "The Texting Game Blueprint: From Match to Date",
    excerpt: "Master the art of texting with exact frameworks and examples. Learn what to say, when to say it, and how to build attraction through text.",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400&h=300&fit=crop",
    date: "March 12, 2024"
  },
  {
    id: "building-mystery",
    title: "Creating Mystery: Why Being Too Available Kills Attraction",
    excerpt: "Discover why mystery is magnetic and how being too predictable makes you invisible. Learn the balance between interest and intrigue.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    date: "March 10, 2024"
  },
  {
    id: "keeping-the-spark",
    title: "Keeping the Spark Alive in Your Relationship",
    excerpt: "The relationship doesn't end after you get the girl. Learn how to maintain attraction, avoid becoming a pushover, and keep things exciting.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
    date: "March 8, 2024"
  },
  {
    id: "escalation-ladder",
    title: "The Escalation Ladder: Text to Call to Date",
    excerpt: "Step-by-step guide on moving from texting to phone calls, video calls, and finally meeting in person without making it awkward.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=300&fit=crop",
    date: "March 5, 2024"
  }
];

const Advice = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 hover:bg-muted">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold glow-text mb-4">
            Dating Advice & Insights
          </h1>
          <p className="text-muted-foreground text-lg">
            Real game, no fluff. Learn what actually works.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/advice/${post.id}`}>
              <Card className="overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6 md:p-8">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-3 group-hover:gradient-text transition-all">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="md:w-64 h-48 md:h-auto flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advice;
