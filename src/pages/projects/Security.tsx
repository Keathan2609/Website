import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Shield, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Enterprise Network Hardening",
    category: "Network Security",
    description: "Complete security audit and hardening of enterprise infrastructure",
    tags: ["Penetration Testing", "Network Security", "Compliance"],
    image: "/placeholder.svg",
    reportUrl: "#",
    toolsUrl: "#"
  },
  {
    id: 2,
    title: "Custom Encryption Protocol",
    category: "Cryptography",
    description: "Lightweight encryption protocol for IoT devices",
    tags: ["Cryptography", "IoT Security", "Protocol Design"],
    image: "/placeholder.svg",
    reportUrl: "#",
    toolsUrl: "#"
  },
  {
    id: 3,
    title: "Malware Analysis Lab",
    category: "Malware Analysis",
    description: "Automated malware analysis and detection system",
    tags: ["Reverse Engineering", "Sandboxing", "Threat Intelligence"],
    image: "/placeholder.svg",
    reportUrl: "#",
    toolsUrl: "#"
  },
  {
    id: 4,
    title: "Zero-Trust Architecture",
    category: "Architecture Design",
    description: "Implementation of zero-trust security model for cloud infrastructure",
    tags: ["Zero Trust", "Cloud Security", "IAM"],
    image: "/placeholder.svg",
    reportUrl: "#",
    toolsUrl: "#"
  },
  {
    id: 5,
    title: "Incident Response Automation",
    category: "Automation",
    description: "SOAR platform for automated incident response workflows",
    tags: ["SOAR", "Automation", "Incident Response"],
    image: "/placeholder.svg",
    reportUrl: "#",
    toolsUrl: "#"
  },
  {
    id: 6,
    title: "Vulnerability Scanner Tool",
    category: "Security Tools",
    description: "Custom vulnerability scanner with advanced detection capabilities",
    tags: ["Vulnerability Assessment", "Python", "Security Tools"],
    image: "/placeholder.svg",
    reportUrl: "#",
    toolsUrl: "#"
  }
];

const categories = ["All", "Network Security", "Cryptography", "Malware Analysis", "Architecture Design", "Automation", "Security Tools"];

export default function SecurityProjects() {
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
            CYBERSECURITY PROJECTS
          </h1>
          <p className="text-xl text-muted-foreground font-cyber max-w-3xl">
            Comprehensive security solutions ranging from network hardening to custom tools, 
            protecting digital assets through innovative defensive strategies.
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
                      <Shield size={14} className="mr-1" />
                      Report
                    </Button>
                    <Button size="sm" variant="outline">
                      <Lock size={14} className="mr-1" />
                      Tools
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