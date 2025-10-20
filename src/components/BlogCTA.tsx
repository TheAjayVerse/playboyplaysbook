import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const BlogCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold glow-text mb-4">
            Yo guys, you made it here!
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            If you feel like you're not ready to buy and want some more insights, check my blogs. 
            Read that and if y'all like it, then you can make your next move.
          </p>
        </div>
        
        <Link to="/advice">
          <Button 
            size="lg" 
            className="glow-button bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6"
          >
            Check Out The Blogs
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogCTA;
