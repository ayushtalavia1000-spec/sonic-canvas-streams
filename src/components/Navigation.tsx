import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Home, Library, Heart, User, Plus } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white/20 rounded backdrop-blur-sm" />
          </div>
          <h1 className="text-xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
            SonicStream
          </h1>
        </div>

        {/* Search */}
        <div className="relative max-w-md w-full mx-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search for music, artists, playlists..." 
            className="pl-10 glass border-white/20 focus:border-primary"
          />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            <Library className="h-4 w-4 mr-2" />
            Library
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            <Heart className="h-4 w-4 mr-2" />
            Liked
          </Button>
          <Button variant="neon" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create
          </Button>
          <Button variant="glass" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};