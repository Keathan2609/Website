import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Flag, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ctfEvents = [
  {
    id: 1,
    name: "DEF CON CTF Finals 2023",
    placement: "Top 15",
    category: "Jeopardy",
    description: "Advanced reverse engineering and cryptography challenges",
    tags: ["Reverse Engineering", "Cryptography", "Web Exploitation"],
    writeupUrl: "#",
    rank: "15/300+"
  },
  {
    id: 2,
    name: "PicoCTF 2023",
    placement: "1st Place",
    category: "Educational",
    description: "Comprehensive CTF covering multiple security domains",
    tags: ["Binary Exploitation", "Forensics", "Cryptography"],
    writeupUrl: "#",
    rank: "1/5000+"
  },
  {
    id: 3,
    name: "Google CTF 2023",
    placement: "Top 50",
    category: "Professional",
    description: "High-level web and mobile security challenges",
    tags: ["Web Security", "Mobile", "Cloud Security"],
    writeupUrl: "#",
    rank: "42/2000+"
  },
  {
    id: 4,
    name: "HTB Cyber Apocalypse",
    placement: "Top 25",
    category: "Team",
    description: "International cybersecurity competition with diverse challenges",
    tags: ["Pwn", "Reverse Engineering", "Misc"],
    writeupUrl: "#",
    rank: "23/4000+"
  },
  {
    id: 5,
    name: "BSides SF CTF",
    placement: "2nd Place",
    category: "Regional",
    description: "Local security conference competition",
    tags: ["Network Security", "OSINT", "Steganography"],
    writeupUrl: "#",
    rank: "2/150+"
  },
  {
    id: 6,
    name: "SANS Holiday Hack",
    placement: "Winner",
    category: "Seasonal",
    description: "Annual holiday-themed security challenges",
    tags: ["IoT Security", "Log Analysis", "Social Engineering"],
    writeupUrl: "#",
    rank: "Winner"
  }
];

const categories = ["All", "Jeopardy", "Educational", "Professional", "Team", "Regional", "Seasonal"];

export default function CTFProjects() {
  const navigate = useNavigate();

  const getRankColor = (placement: string) => {
    if (placement.includes("1st") || placement.includes("Winner")) return "text-primary";
    if (placement.includes("Top 10") || placement.includes("2nd") || placement.includes("3rd")) return "text-secondary";
    return "text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-6 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Button>
          
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4">
            CTF COMPETITIONS & WRITEUPS
          </h1>
          <p className="text-xl text-muted-foreground font-cyber max-w-3xl">
            Competitive cybersecurity challenges showcasing skills in penetration testing, 
            reverse engineering, and vulnerability research across various platforms.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fade-in-up-delay">
          <div className="bg-card p-6 rounded-lg border border-border glow-pink text-center">
            <div className="text-3xl font-bold font-gothic text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground font-cyber">Competitions Started</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border glow-blue text-center">
            <div className="text-3xl font-bold font-gothic text-secondary mb-2">Beginner</div>
            <div className="text-sm text-muted-foreground font-cyber">Skill Level</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border glow-pink text-center">
            <div className="text-3xl font-bold font-gothic text-primary mb-2">Learning</div>
            <div className="text-sm text-muted-foreground font-cyber">Current Status</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border glow-blue text-center">
            <div className="text-3xl font-bold font-gothic text-secondary mb-2">3</div>
            <div className="text-sm text-muted-foreground font-cyber">Platforms Used</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 animate-fade-in-up-delay">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`transition-smooth ${
                  category === "All" 
                    ? "glow-pink" 
                    : "hover:glow-blue"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* CTF Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ctfEvents.map((event, index) => (
            <Card 
              key={event.id} 
              className="group bg-card border-border hover:glow-pink transition-smooth animate-fade-in-up-delay-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Flag className="text-primary" size={16} />
                    <span className="text-sm text-muted-foreground font-cyber">{event.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className={getRankColor(event.placement)} size={16} />
                    <span className={`text-sm font-bold ${getRankColor(event.placement)}`}>
                      {event.placement}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-gothic mb-2">{event.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted-foreground font-cyber">
                    Rank: {event.rank}
                  </span>
                  <Button variant="ghost" size="sm" className="p-1 h-auto">
                    <ExternalLink size={14} className="text-muted-foreground hover:text-primary" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted rounded-full font-cyber"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  size="sm" 
                  className="w-full glow-pink group-hover:glow-blue transition-smooth"
                >
                  Read Writeup
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Writeups Section */}
        <div className="mt-16 animate-fade-in-up-delay-2">
          <h2 className="text-3xl font-bold font-gothic text-gradient-cyber mb-8 text-center">
            Featured Challenge Writeups
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-dark p-6 border-border">
              <h3 className="text-xl font-bold font-gothic text-primary mb-3">
                Advanced Buffer Overflow Exploitation
              </h3>
              <p className="text-muted-foreground mb-4">
                Detailed analysis of a complex buffer overflow challenge including ASLR bypass 
                and ROP chain construction techniques.
              </p>
              <Button variant="outline" className="glow-pink">
                Read Full Analysis
              </Button>
            </Card>
            
            <Card className="bg-gradient-dark p-6 border-border">
              <h3 className="text-xl font-bold font-gothic text-secondary mb-3">
                Cryptographic Side-Channel Attack
              </h3>
              <p className="text-muted-foreground mb-4">
                Implementation of timing attack against custom RSA implementation, 
                demonstrating key recovery through statistical analysis.
              </p>
              <Button variant="outline" className="glow-blue">
                View Implementation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}