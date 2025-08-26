import { Button } from "@/components/ui/button";
import { Play, Shuffle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Overlay */}
      <div className="absolute inset-0 animated-bg opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="floating">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 bg-gradient-to-r from-white via-neon-cyan to-neon-pink bg-clip-text text-transparent">
            Feel the Beat
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
            Immerse yourself in a world of digital soundscapes and discover music like never before
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <Button variant="neon" size="lg" className="text-lg px-8 py-6 h-auto pulse-glow">
            <Play className="h-6 w-6 mr-3" />
            Start Listening
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-6 h-auto">
            <Shuffle className="h-6 w-6 mr-3" />
            Discover
          </Button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-neon-cyan rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-neon-pink rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-neon-purple rounded-full animate-pulse opacity-50" />
      </div>
    </section>
  );
};