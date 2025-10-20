import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const blogContent: Record<string, { title: string; date: string; content: string; image: string }> = {
  "understanding-red-flags": {
    title: "Understanding Red Flags: What to Watch Out For",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=400&fit=crop",
    content: `
# Spot the Red Flags Before It's Too Late

Most guys ignore the signs. They rationalize. They make excuses. And then they wonder why they got played.

## Early Warning Signs

**1. Inconsistent Communication**
If she's hot and cold with her texting, that's not her being "busy." That's her showing you where you rank in her priorities.

**2. She Keeps You at a Distance**
When a girl is into you, she'll make time. If she's always "too busy" to meet up but posting on social media constantly, you're her backup plan.

**3. She Talks About Other Guys**
This is her testing your reaction. Don't get jealous. Don't compete. Withdraw your attention instead.

## What To Do About It

The best response to red flags? Standards. Don't ignore them hoping they'll change. Recognize them early and make your decision accordingly.

Remember: You can't negotiate attraction. You can only qualify or disqualify.
    `
  },
  "texting-game-blueprint": {
    title: "The Texting Game Blueprint: From Match to Date",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=400&fit=crop",
    content: `
# Master the Art of Texting

Texting is a skill. And like any skill, there's a framework that works.

## The Opening

**First Message Formula:**
- Reference something specific from her profile
- Add a playful question or statement
- Keep it short (2-3 sentences max)

Example: "I see you're into hiking. Bold claim, but I bet you've never done [local challenging trail]. True or false?"

## Building Momentum

**The Push-Pull Dynamic:**
- Interest → Tease → Interest → Tease
- Never double text when she doesn't respond
- Match her energy, then slightly pull back

## Moving Off the App

**Transition Statement:**
"I'm not on here much. Text me: [your number]"

Don't ask. State. If she's interested, she'll text. If not, you saved yourself time.

## The Goal

Remember: Texting is for setting dates, not building relationships. Get off the phone and into real life as fast as possible.
    `
  },
  "building-mystery": {
    title: "Creating Mystery: Why Being Too Available Kills Attraction",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    content: `
# The Power of Mystery

You know what kills attraction faster than anything? Being predictable. Being too available. Being too eager.

## The Availability Paradox

When you're always available:
- You signal low value
- You become predictable
- You lose the challenge

When you have boundaries:
- You signal you have options
- You create intrigue
- You maintain the chase

## How To Create Mystery

**1. Don't Always Be Available**
Have a life outside of her. Hobbies, goals, friends. She should wonder what you're doing when you're not with her.

**2. Don't Overshare**
Let her discover things about you over time. Every conversation shouldn't be a therapy session.

**3. End Conversations First**
Before they get boring. Before she wants to leave. Leave her wanting more.

## The Balance

Mystery doesn't mean being cold or playing games. It means having enough going on in your life that she's not the center of it.

That's attractive.
    `
  },
  "keeping-the-spark": {
    title: "Keeping the Spark Alive in Your Relationship",
    date: "March 8, 2024",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=400&fit=crop",
    content: `
# Don't Become Boring After You Get The Girl

Getting the girl is one thing. Keeping her interested? That's the real game.

## The Comfort Trap

Once you're in a relationship, guys make a fatal mistake: they get comfortable. They stop trying. They become predictable.

**What happens:**
- No more mystery
- No more challenge
- No more excitement

## How To Keep The Spark

**1. Maintain Your Independence**
Keep your hobbies. Keep your goals. Keep your friends. Don't make her your entire world.

**2. Don't Be A Pushover**
Having boundaries doesn't end when the relationship starts. Say no when you need to. Don't agree with everything.

**3. Stay Unpredictable**
Surprise her. Try new things. Keep growing as a person.

## The Real Secret

The same qualities that attracted her in the first place are the same qualities you need to maintain.

Stay interesting. Stay challenging. Stay you.
    `
  },
  "escalation-ladder": {
    title: "The Escalation Ladder: Text to Call to Date",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=800&h=400&fit=crop",
    content: `
# The Step-By-Step Guide to Meeting Her

Most guys either move too fast or too slow. Here's the framework that works.

## Step 1: Text Conversation

**Goal:** Build some rapport and qualify her
**Duration:** 2-3 days max
**What to do:** 
- Banter and flirt
- Ask interesting questions
- Show personality

## Step 2: Voice Call

**When:** After you've established some connection via text
**How to transition:** "Texting is cool but I'd rather just talk. What's your number?"
**Duration:** 15-30 minutes
**What to discuss:** Stories, travel, experiences

## Step 3: Video Call (Optional)

**When:** If logistics don't allow meeting soon
**Purpose:** Build comfort and verify she's real
**Keep it:** Short and playful (20-30 min max)

## Step 4: The Date

**Timing:** Within 1-2 weeks of first contact
**Location:** Coffee or drinks somewhere you're comfortable
**Mindset:** Outcome independent. You're qualifying her too.

## Common Mistakes

- Texting for weeks before meeting
- Skipping straight to asking her out without rapport
- Making the first date dinner (too much pressure)
- Being outcome dependent

Remember: Each step builds on the last. Move too fast, you look desperate. Move too slow, you're her texting buddy.
    `
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogContent[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
          <Link to="/advice">
            <Button>Back to Advice</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-3xl mx-auto">
        <Link to="/advice">
          <Button variant="ghost" className="mb-8 hover:bg-muted">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Posts
          </Button>
        </Link>

        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />

        <div className="mb-8">
          <p className="text-muted-foreground mb-2">{post.date}</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold glow-text mb-6">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-heading font-bold mt-12 mb-6 glow-text">{paragraph.substring(2)}</h1>;
            } else if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-heading font-semibold mt-8 mb-4 gradient-text">{paragraph.substring(3)}</h2>;
            } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <p key={index} className="font-semibold text-foreground mt-4">{paragraph.substring(2, paragraph.length - 2)}</p>;
            } else if (paragraph.startsWith('- ')) {
              return <li key={index} className="text-muted-foreground ml-6 list-disc">{paragraph.substring(2)}</li>;
            } else if (paragraph.trim()) {
              return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
            }
            return null;
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/advice">
            <Button className="glow-button bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Read More Articles
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
