import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Eye, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const incidents = [
  {
    id: 1,
    title: "Advanced Persistent Threat Detection",
    severity: "Critical",
    category: "APT Analysis",
    description: "Multi-stage attack campaign targeting financial infrastructure",
    tags: ["APT", "Lateral Movement", "Exfiltration"],
    timeToDetect: "2.5 hours",
    impact: "High",
    reportUrl: "#"
  },
  {
    id: 2,
    title: "Ransomware Incident Response",
    severity: "High", 
    category: "Malware Analysis",
    description: "Rapid containment and analysis of ransomware deployment",
    tags: ["Ransomware", "Incident Response", "Forensics"],
    timeToDetect: "45 minutes",
    impact: "Medium",
    reportUrl: "#"
  },
  {
    id: 3,
    title: "Insider Threat Investigation",
    severity: "Medium",
    category: "Behavioral Analysis",
    description: "Detection of anomalous user behavior patterns indicating insider threat",
    tags: ["UEBA", "Data Exfiltration", "Privilege Escalation"],
    timeToDetect: "6 hours",
    impact: "Low",
    reportUrl: "#"
  },
  {
    id: 4,
    title: "Supply Chain Attack Vector",
    severity: "Critical",
    category: "Third Party Risk",
    description: "Compromise detection through vendor management system",
    tags: ["Supply Chain", "Third Party", "Compromise"],
    timeToDetect: "1 hour",
    impact: "High",
    reportUrl: "#"
  },
  {
    id: 5,
    title: "Phishing Campaign Analysis",
    severity: "Medium",
    category: "Email Security",
    description: "Large-scale spear phishing campaign targeting executives",
    tags: ["Phishing", "Social Engineering", "Email Analysis"],
    timeToDetect: "30 minutes",
    impact: "Medium",
    reportUrl: "#"
  },
  {
    id: 6,
    title: "Cloud Infrastructure Breach",
    severity: "High",
    category: "Cloud Security",
    description: "Unauthorized access to cloud resources through misconfigured IAM",
    tags: ["Cloud Security", "IAM", "Misconfiguration"],
    timeToDetect: "1.5 hours",
    impact: "High",
    reportUrl: "#"
  }
];

const categories = ["All", "APT Analysis", "Malware Analysis", "Behavioral Analysis", "Third Party Risk", "Email Security", "Cloud Security"];

export default function SOCProjects() {
  const navigate = useNavigate();

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'high': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high': return 'text-primary';
      case 'medium': return 'text-secondary';
      case 'low': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
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
            SOC ANALYSIS CASE STUDIES
          </h1>
          <p className="text-xl text-muted-foreground font-cyber max-w-3xl">
            Real-world security incident investigations, threat hunting campaigns, 
            and advanced persistent threat analysis from the SOC trenches.
          </p>
        </div>

        {/* SOC Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fade-in-up-delay">
          <div className="bg-card p-6 rounded-lg border border-border glow-pink text-center">
            <div className="text-3xl font-bold font-gothic text-primary mb-2">99.2%</div>
            <div className="text-sm text-muted-foreground font-cyber">Detection Rate</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border glow-blue text-center">
            <div className="text-3xl font-bold font-gothic text-secondary mb-2">23 min</div>
            <div className="text-sm text-muted-foreground font-cyber">Avg MTTD</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border glow-pink text-center">
            <div className="text-3xl font-bold font-gothic text-primary mb-2">1.8 hrs</div>
            <div className="text-sm text-muted-foreground font-cyber">Avg MTTR</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border glow-blue text-center">
            <div className="text-3xl font-bold font-gothic text-secondary mb-2">500+</div>
            <div className="text-sm text-muted-foreground font-cyber">Incidents Handled</div>
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

        {/* Incidents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {incidents.map((incident, index) => (
            <Card 
              key={incident.id} 
              className="group bg-card border-border hover:glow-pink transition-smooth animate-fade-in-up-delay-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full border font-cyber ${getSeverityColor(incident.severity)}`}>
                    {incident.severity.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2">
                    <Eye className="text-muted-foreground" size={14} />
                    <span className="text-xs text-muted-foreground font-cyber">{incident.category}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold font-gothic mb-2">{incident.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{incident.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground font-cyber">Time to Detect:</span>
                    <span className="text-xs font-bold text-primary">{incident.timeToDetect}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground font-cyber">Business Impact:</span>
                    <span className={`text-xs font-bold ${getImpactColor(incident.impact)}`}>{incident.impact}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {incident.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted rounded-full font-cyber"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 glow-pink group-hover:glow-blue transition-smooth"
                  >
                    <AlertTriangle size={14} className="mr-1" />
                    Case Report
                  </Button>
                  <Button variant="ghost" size="sm" className="p-1 h-auto">
                    <ExternalLink size={14} className="text-muted-foreground hover:text-primary" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Threat Hunting Techniques */}
        <div className="mt-16 animate-fade-in-up-delay-2">
          <h2 className="text-3xl font-bold font-gothic text-gradient-cyber mb-8 text-center">
            Threat Hunting Methodologies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-dark p-6 border-border">
              <h3 className="text-xl font-bold font-gothic text-primary mb-3">
                Hypothesis-Driven Hunting
              </h3>
              <p className="text-muted-foreground mb-4">
                Structured approach to threat hunting using MITRE ATT&CK framework 
                and behavioral analysis techniques.
              </p>
              <Button variant="outline" className="glow-pink">
                View Methodology
              </Button>
            </Card>
            
            <Card className="bg-gradient-dark p-6 border-border">
              <h3 className="text-xl font-bold font-gothic text-secondary mb-3">
                Machine Learning Detection
              </h3>
              <p className="text-muted-foreground mb-4">
                Advanced analytics using unsupervised learning for anomaly detection 
                and threat pattern recognition.
              </p>
              <Button variant="outline" className="glow-blue">
                Explore Techniques
              </Button>
            </Card>
            
            <Card className="bg-gradient-dark p-6 border-border">
              <h3 className="text-xl font-bold font-gothic text-primary mb-3">
                Cyber Threat Intelligence
              </h3>
              <p className="text-muted-foreground mb-4">
                Integration of external threat intelligence with internal security 
                data for proactive threat detection.
              </p>
              <Button variant="outline" className="glow-pink">
                Intelligence Framework
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}