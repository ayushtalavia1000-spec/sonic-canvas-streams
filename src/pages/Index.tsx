import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { MusicPlayer } from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <main className="pt-16 pb-24">
        <HeroSection />
        <FeaturedSection />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Index;
