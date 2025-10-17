const FloatingBubbles = () => {
  const bubbles = [
    { text: "Hey", delay: "0s", duration: "6s", top: "10%", left: "10%" },
    { text: "Call me", delay: "1s", duration: "8s", top: "20%", left: "80%" },
    { text: "Busy rn", delay: "2s", duration: "7s", top: "60%", left: "15%" },
    { text: "Maybe later?", delay: "0.5s", duration: "9s", top: "70%", left: "70%" },
    { text: "Thinking of you", delay: "1.5s", duration: "6.5s", top: "40%", left: "85%" },
    { text: "Free Friday?", delay: "2.5s", duration: "7.5s", top: "80%", left: "20%" },
    { text: "Lunch?", delay: "3s", duration: "8.5s", top: "15%", left: "50%" },
    { text: "Good morning", delay: "0.3s", duration: "7s", top: "85%", left: "60%" },
    { text: "Can we talk?", delay: "1.8s", duration: "6.8s", top: "30%", left: "40%" },
    { text: "Hi", delay: "2.2s", duration: "8s", top: "50%", left: "5%" },
    { text: "Wyd?", delay: "1.2s", duration: "7.2s", top: "25%", left: "65%" },
    { text: "You up?", delay: "2.8s", duration: "6.3s", top: "75%", left: "45%" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-2xl px-4 py-2 text-sm text-foreground/80 animate-float-slow"
          style={{
            top: bubble.top,
            left: bubble.left,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
          }}
        >
          {bubble.text}
        </div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
