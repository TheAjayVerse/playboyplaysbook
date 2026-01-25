import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import textingGameImage from "@/assets/texting-game.jpg";
import keepingHerHookedImage from "@/assets/keeping-her-hooked.jpg";
import approachHerImage from "@/assets/approach-her.jpg";
import attractHerVibeImage from "@/assets/attract-her-vibe.jpg";
import becomeTheManImage from "@/assets/become-the-man.jpg";
import playboyGemsImage from "@/assets/playboy-gems-main.webp";
import makeWomenObsessedImage from "@/assets/make-women-obsessed.png";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "make-women-obsessed",
    title: "HOW TO MAKE 99% OF WOMEN OBSESSED",
    excerpt: "The real sauce from years around the hottest women. From scarcity to red flags — I break down everything that helped me bag and keep women.",
    image: makeWomenObsessedImage,
    date: "January 25, 2026"
  },
  {
    id: "hidden-playboy-gems",
    title: "HIDDEN PLAYBOY GEMS: LEVEL UP YOUR GAME",
    excerpt: "The best tips that helped me bag and keep women. From scarcity to red flags — this is the real sauce from years of experience.",
    image: playboyGemsImage,
    date: "December 23, 2025"
  },
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
    id: "attract-her-vibe",
    title: "HOW TO ATTRACT HER WITH YOUR VIBE",
    excerpt: "If you don't find your own life interesting, why should she? Real attraction isn't built on looks or money — it's built on aura.",
    image: attractHerVibeImage,
    date: "October 20, 2025"
  },
  {
    id: "become-the-man",
    title: "BECOME THE MAN SHE CAN'T IGNORE",
    excerpt: "Before you ever say a word, your energy, presence, and lifestyle are already speaking for you. Learn to become the man who naturally attracts.",
    image: becomeTheManImage,
    date: "October 20, 2025"
  },
];

const Advice = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <Helmet>
        <title>Dating Advice & Tips | Playboy's Playbook - Real Game for Men</title>
        <meta name="description" content="Learn real dating advice from the Playboy's Playbook. Master texting, approaching women, building attraction, and keeping her hooked. Over 500+ guys transformed." />
        <meta name="keywords" content="dating advice for men, how to attract women, texting tips, approach women, playboy mindset, dating coach, relationship tips, confidence with women" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dating Advice & Tips | Playboy's Playbook" />
        <meta property="og:description" content="Real dating advice that actually works. Learn the playboy mindset." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dating Advice & Tips | Playboy's Playbook" />
        <meta name="twitter:description" content="Real dating advice that actually works. Learn the playboy mindset." />
        
        <link rel="canonical" href="https://ajayshustle.com/advice" />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 hover:bg-muted">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold glow-text mb-4">
            Dating Advice & Tips
          </h1>
          <p className="text-muted-foreground text-lg">
            Real and learn what actually works from a playboys perspective.
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
                      alt={`${post.title} - Dating advice from Playboy's Playbook`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
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
