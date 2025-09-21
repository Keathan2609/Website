import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Play, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Cyberpunk Character Model",
    category: "3D Modeling",
    description: "Detailed cyberpunk character with advanced rigging and materials",
    tags: ["Blender", "Substance Painter", "Character Design"],
    image: "/placeholder.svg",
    demoUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Gothic Cathedral Environment",
    category: "Environment",
    description: "Atmospheric gothic cathedral with dynamic lighting",
    tags: ["Maya", "Arnold", "Environment Design"],
    image: "/placeholder.svg",
    demoUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Particle Storm VFX",
    category: "Visual Effects",
    description: "Dynamic particle system with real-time rendering",
    tags: ["Houdini", "Real-time VFX", "Particles"],
    image: "/placeholder.svg",
    demoUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Character Animation Reel",
    category: "Animation",
    description: "Character animation showcasing fluid movement and expressions",
    tags: ["Blender", "Motion Capture", "Animation"],
    image: "/placeholder.svg",
    demoUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "Procedural City Generator",
    category: "Procedural",
    description: "Algorithmic city generation with customizable parameters",
    tags: ["Houdini", "Procedural", "City Design"],
    image: "/placeholder.svg",
    demoUrl: "#",
    downloadUrl: "#"
  },
  {
    id: 6,
    title: "Holographic UI Design",
    category: "UI/UX",
    description: "Futuristic holographic interface with interactive elements",
    tags: ["Cinema 4D", "After Effects", "UI Design"],
    image: "/placeholder.svg",
    demoUrl: "#",
    downloadUrl: "#"
  }
];

const categories = ["All", "3D Modeling", "Animation", "Visual Effects", "Environment", "Procedural", "UI/UX"];

export default function ThreeDVFXProjects() {
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
            3D MODELING & VFX PROJECTS
          </h1>
          <p className="text-xl text-muted-foreground font-cyber max-w-3xl">
            Explore my collection of 3D modeling, animation, and visual effects projects. 
            Each piece showcases different techniques and creative approaches.
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
              className="group bg-card border-border hover:glow-pink transition-smooth animate-fade-in-up-delay-2"
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
                    <Button size="sm" className="glow-pink">
                      <Play size={14} className="mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download size={14} className="mr-1" />
                      Files
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-cyber">{project.category}</span>
                  <Button variant="ghost" size="sm" className="p-1 h-auto">
                    <ExternalLink size={14} className="text-muted-foreground hover:text-primary" />
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