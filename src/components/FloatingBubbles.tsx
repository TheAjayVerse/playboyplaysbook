const FloatingBubbles = () => {
  const bubbles = [
    { text: "Hey", delay: "0s", duration: "8s", top: "10%", left: "10%" },
    { text: "Call me", delay: "2s", duration: "10s", top: "20%", left: "80%" },
    { text: "Busy rn", delay: "4s", duration: "9s", top: "60%", left: "15%" },
    { text: "Maybe later?", delay: "1s", duration: "11s", top: "70%", left: "70%" },
    { text: "Free Friday?", delay: "5s", duration: "9.5s", top: "80%", left: "20%" },
    { text: "You up?", delay: "3s", duration: "8.5s", top: "40%", left: "60%" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute bg-primary/15 backdrop-blur-sm border border-primary/20 rounded-2xl px-4 py-2 text-sm text-foreground/70 animate-float-slow will-change-transform"
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
