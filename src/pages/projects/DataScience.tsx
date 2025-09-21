import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Code, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Cybersecurity Threat Prediction",
    category: "Machine Learning",
    description: "ML model predicting cyber attacks using network traffic analysis",
    tags: ["Python", "TensorFlow", "Security Analytics"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Financial Market Analysis",
    category: "Data Analytics",
    description: "Real-time market sentiment analysis using social media data",
    tags: ["R", "NLP", "Time Series Analysis"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Gothic Art Style Transfer",
    category: "Computer Vision",
    description: "Neural network that applies gothic art styles to images",
    tags: ["PyTorch", "GAN", "Style Transfer"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Smart City Traffic Optimization",
    category: "Data Engineering",
    description: "Big data pipeline for urban traffic flow optimization",
    tags: ["Spark", "Kafka", "Real-time Processing"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 5,
    title: "Anomaly Detection Dashboard",
    category: "Visualization",
    description: "Interactive dashboard for network anomaly detection",
    tags: ["D3.js", "Python", "Plotly"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 6,
    title: "Predictive Maintenance AI",
    category: "IoT Analytics",
    description: "IoT sensor data analysis for equipment failure prediction",
    tags: ["AWS IoT", "Machine Learning", "Time Series"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#"
  }
];

const categories = ["All", "Machine Learning", "Data Analytics", "Computer Vision", "Data Engineering", "Visualization", "IoT Analytics"];

export default function DataScienceProjects() {
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
            DATA SCIENCE PROJECTS
          </h1>
          <p className="text-xl text-muted-foreground font-cyber max-w-3xl">
            Transforming raw data into actionable insights through machine learning, 
            analytics, and intelligent automation solutions.
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
                      <Code size={14} className="mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <Database size={14} className="mr-1" />
                      Data
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