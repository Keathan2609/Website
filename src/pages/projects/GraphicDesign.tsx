import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Eye, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Cyber Nexus Brand Identity",
    category: "Branding",
    description: "Complete brand identity for a cybersecurity startup",
    tags: ["Logo Design", "Brand Guidelines", "Corporate Identity"],
    image: "/placeholder.svg",
    behanceUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Gothic Typography Collection",
    category: "Typography",
    description: "Custom typeface inspired by gothic architecture",
    tags: ["Typography", "Font Design", "Gothic"],
    image: "/placeholder.svg",
    behanceUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Neon UI Kit",
    category: "UI Design",
    description: "Comprehensive UI kit with cyberpunk aesthetics",
    tags: ["UI Design", "Component Library", "Figma"],
    image: "/placeholder.svg",
    behanceUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Dark Mode Dashboard",
    category: "Web Design",
    description: "Analytics dashboard with gothic dark mode design",
    tags: ["Web Design", "Dashboard", "UX/UI"],
    image: "/placeholder.svg",
    behanceUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "Cyberpunk Poster Series",
    category: "Print Design",
    description: "Event poster series with dystopian themes",
    tags: ["Poster Design", "Print", "Illustration"],
    image: "/placeholder.svg",
    behanceUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 6,
    title: "App Icon Collection",
    category: "Icon Design",
    description: "Minimalist app icons with gothic influences",
    tags: ["Icon Design", "Mobile", "Minimalism"],
    image: "/placeholder.svg",
    behanceUrl: "#",
    downloadUrl: "#"
  }
];

const categories = ["All", "Branding", "Typography", "UI Design", "Web Design", "Print Design", "Icon Design"];

export default function GraphicDesignProjects() {
  const navigate = useNavigate();

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
            GRAPHIC DESIGN PROJECTS
          </h1>
          <p className="text-xl text-muted-foreground font-cyber max-w-3xl">
            A showcase of visual identity work, combining gothic aesthetics with modern design principles 
            to create memorable brand experiences.
          </p>
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group bg-card border-border hover:glow-blue transition-smooth animate-fade-in-up-delay-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="flex gap-2">
                    <Button size="sm" className="glow-blue">
                      <Eye size={14} className="mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download size={14} className="mr-1" />
                      Assets
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-secondary font-cyber">{project.category}</span>
                  <Button variant="ghost" size="sm" className="p-1 h-auto">
                    <ExternalLink size={14} className="text-muted-foreground hover:text-secondary" />
                  </Button>
                </div>
                
                <h3 className="text-xl font-bold font-gothic mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted rounded-full font-cyber"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in-up-delay-2">
          <Button variant="outline" className="glow-blue">
            Load More Projects
          </Button>
        </div>
      </div>
    </div>
  );
}