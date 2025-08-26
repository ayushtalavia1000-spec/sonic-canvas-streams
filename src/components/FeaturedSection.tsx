import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Heart, MoreHorizontal } from "lucide-react";

const featuredPlaylists = [
  {
    id: 1,
    title: "Neon Nights",
    artist: "Various Artists",
    tracks: 42,
    duration: "2h 34m",
    gradient: "from-neon-purple to-neon-pink"
  },
  {
    id: 2,
    title: "Cyberpunk Vibes",
    artist: "Digital Collective",
    tracks: 28,
    duration: "1h 47m",
    gradient: "from-neon-cyan to-electric-blue"
  },
  {
    id: 3,
    title: "Electronic Dreams",
    artist: "Synth Masters",
    tracks: 35,
    duration: "2h 12m",
    gradient: "from-neon-pink to-neon-cyan"
  },
  {
    id: 4,
    title: "Future Bass",
    artist: "Beat Collective",
    tracks: 24,
    duration: "1h 38m",
    gradient: "from-electric-blue to-neon-purple"
  }
];

const topTracks = [
  { id: 1, title: "Digital Paradise", artist: "Neon Artist", duration: "3:42" },
  { id: 2, title: "Cyber Love", artist: "Electric Souls", duration: "4:17" },
  { id: 3, title: "Synthwave Dreams", artist: "Retro Future", duration: "3:58" },
  { id: 4, title: "Binary Hearts", artist: "Code Music", duration: "4:03" },
  { id: 5, title: "Neon Lights", artist: "City Sounds", duration: "3:29" }
];

export const FeaturedSection = () => {
  return (
    <section className="py-16 px-4 max-w-screen-xl mx-auto">
      {/* Featured Playlists */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold">Featured Playlists</h2>
          <Button variant="ghost" className="text-accent hover:text-primary">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlaylists.map((playlist) => (
            <Card key={playlist.id} className="glass group cursor-pointer hover:scale-105 transition-bounce p-0 overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${playlist.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button variant="neon" size="icon" className="rounded-full">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{playlist.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{playlist.artist}</p>
                <p className="text-xs text-muted-foreground">{playlist.tracks} tracks • {playlist.duration}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Tracks */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold">Trending Now</h2>
          <Button variant="ghost" className="text-accent hover:text-primary">
            View All
          </Button>
        </div>
        
        <div className="glass rounded-xl p-6">
          <div className="space-y-4">
            {topTracks.map((track, index) => (
              <div key={track.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-smooth group">
                <span className="text-muted-foreground w-6 text-center">{index + 1}</span>
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white/20 rounded backdrop-blur-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">{track.title}</h4>
                  <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-neon-pink">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">{track.duration}</span>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-smooth">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discover Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold">Discover New Sounds</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass p-6 text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-full" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Mood Playlists</h3>
            <p className="text-sm text-muted-foreground mb-4">Curated playlists for every mood and moment</p>
            <Button variant="outline" className="w-full">Explore Moods</Button>
          </Card>
          
          <Card className="glass p-6 text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-full" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">New Releases</h3>
            <p className="text-sm text-muted-foreground mb-4">Latest drops from your favorite artists</p>
            <Button variant="outline" className="w-full">Check Releases</Button>
          </Card>
          
          <Card className="glass p-6 text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-full" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Radio Stations</h3>
            <p className="text-sm text-muted-foreground mb-4">24/7 streaming of your favorite genres</p>
            <Button variant="outline" className="w-full">Listen Live</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};