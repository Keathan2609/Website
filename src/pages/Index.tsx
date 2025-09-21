import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { 
  Shield, 
  Box, 
  Palette, 
  BarChart3, 
  Flag, 
  Eye,
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from "lucide-react";
import hero3D from "@/assets/hero-3d.jpg";
import heroDesign from "@/assets/hero-design.jpg";
import heroData from "@/assets/hero-data.jpg";
import heroSecurity from "@/assets/hero-security.jpg";

const Index = () => {
  const navigate = useNavigate();
  const heroRef = useScrollAnimation();
  const threeDRef = useScrollAnimation();
  const designRef = useScrollAnimation();
  const dataRef = useScrollAnimation();
  const securityRef = useScrollAnimation();
  const ctfRef = useScrollAnimation();
  const socRef = useScrollAnimation();
  const bioRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background relative z-10">
      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden section-hidden"
      >
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border animate-fade-in-up">
            <Sparkles className="text-primary" size={16} />
            <span className="text-sm font-cyber text-muted-foreground">Creative Developer & Digital Alchemist</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-gothic text-gradient-cyber mb-6 leading-tight animate-typewriter">
            KEATHAN NAIDOO
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-cyber mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Where cybersecurity meets creative expression. Crafting digital experiences at the intersection 
            of gothic aesthetics, cutting-edge security, and immersive technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <Button 
              onClick={() => scrollToSection('biography')}
              className="glow-pink font-gothic bg-primary text-primary-foreground hover:bg-primary/90 card-hover animate-glow-pulse"
            >
              Discover My Story
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="glow-blue font-gothic border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground card-hover"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      {/* 3D & VFX Section */}
      <section 
        id="threadvfx" 
        ref={threeDRef}
        className="min-h-screen bg-background section-hidden"
      >
        <div className="relative h-96 overflow-hidden parallax-slow">
          <img 
            src={hero3D} 
            alt="3D Modeling and VFX" 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4 animate-slide-in-left">
              3D MODELING & VFX
            </h1>
            <p className="text-xl text-foreground/80 font-cyber max-w-2xl animate-fade-in-up-delay">
              Crafting immersive digital worlds through cutting-edge 3D modeling, animation, and visual effects
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border glow-pink card-hover animate-fade-in-up-delay">
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">3D Modeling</h3>
              <p className="text-muted-foreground mb-4">
                Creating detailed 3D assets using Blender, Maya, and advanced sculpting techniques.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Character modeling & rigging</li>
                <li>• Environment design</li>
                <li>• Product visualization</li>
                <li>• Architectural renders</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-blue card-hover animate-fade-in-up-delay-2">
              <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Animation</h3>
              <p className="text-muted-foreground mb-4">
                Bringing models to life with fluid animations and dynamic storytelling.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Character animation</li>
                <li>• Motion graphics</li>
                <li>• Procedural animation</li>
                <li>• Physics simulations</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-pink card-hover animate-fade-in-up-delay-3">
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">Visual Effects</h3>
              <p className="text-muted-foreground mb-4">
                Compositing and post-production magic using industry-standard tools.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Particle systems</li>
                <li>• Shader development</li>
                <li>• Compositing</li>
                <li>• Real-time effects</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-dark p-8 rounded-lg border border-border animate-fade-in-up-delay-4">
            <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
              Technical Arsenal
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">Software Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['Maya', 'Blender', 'Houdini', 'ZBrush', 'Unity', 'Unreal Engine', 'Substance Painter'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber card-hover">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-3">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {['Real-time Rendering', 'Procedural Generation', 'Motion Capture', 'AR/VR'].map((spec) => (
                    <span key={spec} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber card-hover">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                onClick={() => navigate('/projects/threadvfx')}
                className="glow-pink font-gothic bg-primary text-primary-foreground hover:bg-primary/90 card-hover animate-glow-pulse"
              >
                <Box className="mr-2" size={18} />
                View 3D & VFX Projects
                <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section 
        id="design" 
        ref={designRef}
        className="min-h-screen bg-background section-hidden"
      >
        <div className="relative h-96 overflow-hidden parallax-slow">
          <img 
            src={heroDesign} 
            alt="Graphic Design" 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4 animate-slide-in-right">
              GRAPHIC DESIGN
            </h1>
            <p className="text-xl text-foreground/80 font-cyber max-w-2xl animate-fade-in-up-delay">
              Merging gothic aesthetics with modern design principles to create striking visual identities
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border glow-blue card-hover animate-fade-in-up-delay">
              <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Brand Identity</h3>
              <p className="text-muted-foreground mb-4">
                Crafting unique visual identities that capture brand essence and gothic elegance.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Logo design & branding</li>
                <li>• Corporate identity systems</li>
                <li>• Brand guidelines</li>
                <li>• Visual style guides</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-pink card-hover animate-fade-in-up-delay-2">
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">Digital Art</h3>
              <p className="text-muted-foreground mb-4">
                Creating captivating digital artwork with cyberpunk and gothic influences.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Concept art</li>
                <li>• Character design</li>
                <li>• Environment concepts</li>
                <li>• Illustration</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-blue card-hover animate-fade-in-up-delay-3">
              <h3 className="text-xl font-bold font-gothic text-secondary mb-4">UI/UX Design</h3>
              <p className="text-muted-foreground mb-4">
                Designing intuitive interfaces with dark, cyberpunk aesthetics.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Web interface design</li>
                <li>• Mobile app design</li>
                <li>• User experience flows</li>
                <li>• Interactive prototypes</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 animate-fade-in-up-delay-4">
            <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-8 text-center">
              Design Philosophy
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-dark p-6 rounded-lg border border-border card-hover">
                <h4 className="font-bold text-primary mb-3 font-gothic">Gothic Minimalism</h4>
                <p className="text-muted-foreground">
                  Embracing the elegance of dark aesthetics while maintaining clean, purposeful design. 
                  Every element serves both form and function in perfect harmony.
                </p>
              </div>
              <div className="bg-gradient-dark p-6 rounded-lg border border-border card-hover">
                <h4 className="font-bold text-secondary mb-3 font-gothic">Cyberpunk Influence</h4>
                <p className="text-muted-foreground">
                  Drawing inspiration from cyberpunk culture to create futuristic designs that 
                  blend technology with artistic expression.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border border-border animate-fade-in-up-delay-4">
            <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
              Creative Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">Design Software</h4>
                <div className="flex flex-wrap gap-2">
                  {['Adobe Creative Cloud', 'Figma', 'Substance Painter', 'ZBrush'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber card-hover">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {['Typography', 'Color Theory', 'Layout Design', 'Branding'].map((spec) => (
                    <span key={spec} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber card-hover">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">Output Formats</h4>
                <div className="flex flex-wrap gap-2">
                  {['Print', 'Digital', 'Web', 'Mobile'].map((format) => (
                    <span key={format} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber card-hover">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                onClick={() => navigate('/projects/design')}
                className="glow-blue font-gothic bg-secondary text-secondary-foreground hover:bg-secondary/90 card-hover animate-glow-pulse"
              >
                <Palette className="mr-2" size={18} />
                View Design Projects
                <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Section */}
      <section 
        id="datascience" 
        ref={dataRef}
        className="min-h-screen bg-background section-hidden"
      >
        <div className="relative h-96 overflow-hidden parallax-slow">
          <img 
            src={heroData} 
            alt="Data Science" 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4 animate-slide-in-left">
              DATA SCIENCE
            </h1>
            <p className="text-xl text-foreground/80 font-cyber max-w-2xl animate-fade-in-up-delay">
              Extracting insights from chaos, transforming raw data into strategic intelligence
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border glow-pink card-hover animate-fade-in-up-delay">
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">Machine Learning</h3>
              <p className="text-muted-foreground mb-4">
                Building intelligent systems that learn and adapt from data patterns.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Predictive modeling</li>
                <li>• Deep neural networks</li>
                <li>• Computer vision</li>
                <li>• Natural language processing</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-blue card-hover animate-fade-in-up-delay-2">
              <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Data Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Uncovering hidden patterns and trends in complex datasets.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Statistical analysis</li>
                <li>• Data mining</li>
                <li>• Trend forecasting</li>
                <li>• Business intelligence</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-pink card-hover animate-fade-in-up-delay-3">
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">Visualization</h3>
              <p className="text-muted-foreground mb-4">
                Creating compelling visual narratives from complex data structures.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Interactive dashboards</li>
                <li>• Real-time monitoring</li>
                <li>• Custom visualizations</li>
                <li>• Reporting systems</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-dark p-8 rounded-lg border border-border animate-fade-in-up-delay-4">
            <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
              Technical Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C#', 'C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber card-hover">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-3">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {['ReactJS', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Unity', 'Unreal Engine'].map((lib) => (
                    <span key={lib} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber card-hover">
                      {lib}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">Visualization</h4>
                <div className="flex flex-wrap gap-2">
                  {['Plotly', 'D3.js', 'Tableau', 'Power BI'].map((viz) => (
                    <span key={viz} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber card-hover">
                      {viz}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-3">Cloud Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'GCP', 'Azure', 'Databricks'].map((cloud) => (
                    <span key={cloud} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber card-hover">
                      {cloud}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                onClick={() => navigate('/projects/datascience')}
                className="glow-pink font-gothic bg-primary text-primary-foreground hover:bg-primary/90 card-hover animate-glow-pulse"
              >
                <BarChart3 className="mr-2" size={18} />
                View Data Science Projects
                <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
          </div>

          <div className="mt-12 animate-fade-in-up-delay-4">
            <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-8 text-center">
              Project Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border card-hover">
                <h4 className="font-bold text-primary mb-3 font-gothic">Cyber Threat Intelligence</h4>
                <p className="text-muted-foreground mb-3">
                  ML-powered threat detection system analyzing network patterns to identify potential security breaches.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Real-time Analysis</span>
                  <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">Anomaly Detection</span>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border card-hover">
                <h4 className="font-bold text-secondary mb-3 font-gothic">Creative Analytics Dashboard</h4>
                <p className="text-muted-foreground mb-3">
                  Interactive visualization platform for creative project metrics with gothic-themed UI.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Custom Viz</span>
                  <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="min-h-screen bg-background">
        <div className="relative h-96 overflow-hidden">
          <img 
            src={heroSecurity} 
            alt="Cybersecurity" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4">
              CYBERSECURITY
            </h1>
            <p className="text-xl text-foreground/80 font-cyber max-w-2xl">
              Guardian of digital realms, wielding ethical hacking and advanced security protocols
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border glow-pink">
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">Penetration Testing</h3>
              <p className="text-muted-foreground mb-4">
                Simulating real-world attacks to identify vulnerabilities before malicious actors do.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Network penetration testing</li>
                <li>• Web application security</li>
                <li>• Social engineering assessments</li>
                <li>• Vulnerability assessments</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-blue">
              <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Threat Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Advanced threat intelligence and malware analysis using cutting-edge tools.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Malware reverse engineering</li>
                <li>• Threat hunting</li>
                <li>• Digital forensics</li>
                <li>• Incident response</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-pink">
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">Security Architecture</h3>
              <p className="text-muted-foreground mb-4">
                Designing robust security frameworks and implementing defense strategies.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Security policy development</li>
                <li>• Infrastructure hardening</li>
                <li>• Security awareness training</li>
                <li>• Compliance auditing</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-dark p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
              Security Arsenal
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">Penetration Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-3">Analysis Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {['Wireshark', 'Ghidra', 'IDA Pro', 'Volatility'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">Cloud Security</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS Security', 'Azure Sentinel', 'CloudFlare', 'Terraform'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-3">Learning Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {['HackTheBox', 'TryHackMe', 'HackerOne'].map((platform) => (
                    <span key={platform} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTF Section */}
      <section id="ctf" className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-6">
              CAPTURE THE FLAG
            </h1>
            <p className="text-xl text-foreground/80 font-cyber max-w-2xl mx-auto">
              Competitive cybersecurity through puzzle-solving, vulnerability exploitation, and digital treasure hunting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border glow-pink">
              <Flag className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">Web Exploitation</h3>
              <p className="text-muted-foreground mb-4">
                Identifying and exploiting web application vulnerabilities.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• SQL injection</li>
                <li>• XSS exploitation</li>
                <li>• Authentication bypass</li>
                <li>• Directory traversal</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-blue">
              <Shield className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Cryptography</h3>
              <p className="text-muted-foreground mb-4">
                Breaking ciphers and analyzing cryptographic implementations.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Classical ciphers</li>
                <li>• RSA attacks</li>
                <li>• Hash collisions</li>
                <li>• Side-channel analysis</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-pink">
              <Box className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">Reverse Engineering</h3>
              <p className="text-muted-foreground mb-4">
                Dissecting binaries and understanding program behavior.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Assembly analysis</li>
                <li>• Malware unpacking</li>
                <li>• Protocol analysis</li>
                <li>• Binary exploitation</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-blue">
              <Eye className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Digital Forensics</h3>
              <p className="text-muted-foreground mb-4">
                Investigating digital artifacts and reconstructing events.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Memory analysis</li>
                <li>• Network forensics</li>
                <li>• File recovery</li>
                <li>• Timeline analysis</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gradient-dark p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6 text-center">
              Competition Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground font-cyber">CTFs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">Top 10%</div>
                <div className="text-sm text-muted-foreground font-cyber">Global Ranking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground font-cyber">First Place Wins</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              onClick={() => navigate('/projects/ctf')}
              className="glow-pink font-gothic bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Flag className="mr-2" size={18} />
              View CTF Writeups
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* SOC Analysis Section */}
      <section id="soc" className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-6">
              SOC ANALYSIS
            </h1>
            <p className="text-xl text-foreground/80 font-cyber max-w-2xl mx-auto">
              Security Operations Center expertise in threat detection, incident response, and continuous monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border glow-blue">
              <Eye className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Threat Detection</h3>
              <p className="text-muted-foreground mb-4">
                Real-time monitoring and analysis of security events across enterprise networks.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• SIEM rule development</li>
                <li>• Log analysis & correlation</li>
                <li>• Anomaly detection</li>
                <li>• Threat intelligence integration</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-pink">
              <Shield className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold font-gothic text-primary mb-4">Incident Response</h3>
              <p className="text-muted-foreground mb-4">
                Rapid response to security incidents with systematic investigation and containment.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Incident triage & classification</li>
                <li>• Forensic analysis</li>
                <li>• Containment strategies</li>
                <li>• Post-incident reporting</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border glow-blue">
              <BarChart3 className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Security Metrics</h3>
              <p className="text-muted-foreground mb-4">
                Developing KPIs and security dashboards for executive reporting.
              </p>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Mean time to detection</li>
                <li>• Incident response metrics</li>
                <li>• Threat landscape analysis</li>
                <li>• Risk assessment reporting</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gradient-dark p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
              SOC Technologies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">SIEM Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {['Splunk', 'QRadar', 'ArcSight', 'Elastic SIEM'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-3">EDR Solutions</h4>
                <div className="flex flex-wrap gap-2">
                  {['CrowdStrike', 'SentinelOne', 'Carbon Black', 'Cortex XDR'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">Threat Intel</h4>
                <div className="flex flex-wrap gap-2">
                  {['MISP', 'ThreatConnect', 'Recorded Future', 'VirusTotal'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-3">Orchestration</h4>
                <div className="flex flex-wrap gap-2">
                  {['Phantom', 'Demisto', 'Swimlane', 'SOAR'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              onClick={() => navigate('/projects/soc')}
              className="glow-blue font-gothic bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Eye className="mr-2" size={18} />
              View SOC Case Studies
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="min-h-screen bg-gradient-dark">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-6">
                DIGITAL ARCHITECT
              </h1>
              <p className="text-xl text-foreground/80 font-cyber">
                The convergence of security, creativity, and technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold font-gothic text-primary mb-6">The Journey</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  My path began in the shadows of digital networks, drawn to the intricate dance between 
                  security and vulnerability. What started as curiosity about system architectures evolved 
                  into a passion for both protecting and creating in the digital realm.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The gothic aesthetic isn't just a design choice—it reflects my philosophy that beauty 
                  can emerge from darkness, that protection can be elegant, and that security doesn't 
                  have to sacrifice creativity.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-bold text-secondary mb-4 font-gothic">Core Philosophy</h4>
                <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                  "In the digital realm, security and creativity are not opposing forces, 
                  but complementary aspects of a greater whole. True innovation happens 
                  at their intersection."
                </blockquote>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h4 className="font-bold text-primary mb-2 font-gothic">Security Expert</h4>
                <p className="text-sm text-muted-foreground">
                  Ethical hacking, penetration testing, and SOC analysis with a focus on 
                  innovative defensive strategies.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h4 className="font-bold text-secondary mb-2 font-gothic">Creative Technologist</h4>
                <p className="text-sm text-muted-foreground">
                  Blending 3D artistry, graphic design, and data visualization to create 
                  immersive digital experiences.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h4 className="font-bold text-primary mb-2 font-gothic">Digital Alchemist</h4>
                <p className="text-sm text-muted-foreground">
                  Transforming complex data into actionable intelligence through machine 
                  learning and advanced analytics.
                </p>
              </div>
            </div>

            <div className="bg-gradient-cyber p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold font-gothic text-cyber-black mb-4">
                Mission Statement
              </h3>
              <p className="text-cyber-black/80 text-lg leading-relaxed">
                To bridge the gap between cybersecurity and creative technology, proving that 
                the most secure systems can also be the most beautiful, and that true innovation 
                emerges when technical expertise meets artistic vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-6">
                CURRICULUM VITAE
              </h1>
              <p className="text-xl text-foreground/80 font-cyber">
                Professional experience and qualifications
              </p>
            </div>

            <div className="space-y-12">
              {/* Professional Roles */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold font-gothic text-primary mb-6">Current Professional Roles</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-bold text-secondary font-gothic">XR Developer</h4>
                    <p className="text-primary font-medium mb-2">Advanced Level</p>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Developing immersive VR/AR experiences using Unity and Unreal Engine</li>
                      <li>• Creating interactive 3D environments and applications</li>
                      <li>• Certified by Centre for Digital Transformation and Innovation Africa (CXI-Africa)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h4 className="text-xl font-bold text-primary font-gothic">Animator, 3D Modeller & VFX Artist</h4>
                    <p className="text-secondary font-medium mb-2">Advanced Level</p>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Advanced 3D modeling and animation in Maya and Blender</li>
                      <li>• VFX creation using Houdini and industry-standard tools</li>
                      <li>• Texturing with Substance Painter and ZBrush</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-bold text-secondary font-gothic">Graphic Designer</h4>
                    <p className="text-primary font-medium mb-2">Advanced Level</p>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Complete Adobe Creative Cloud mastery</li>
                      <li>• UI/UX design using Figma</li>
                      <li>• Brand identity and visual communication</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h4 className="text-xl font-bold text-primary font-gothic">Data Science + AI/ML</h4>
                    <p className="text-secondary font-medium mb-2">Junior Level</p>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Python-based data analysis and machine learning</li>
                      <li>• Statistical modeling and predictive analytics</li>
                      <li>• Currently developing expertise in AI/ML frameworks</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-bold text-secondary font-gothic">Junior Cybersecurity Analyst</h4>
                    <p className="text-primary font-medium mb-2">Junior Level - Learning CTF</p>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Studying Ethical Hacking via HackTheBox, TryHackMe, HackerOne</li>
                      <li>• Network defense and security analytics</li>
                      <li>• Still new to CTF challenges and learning</li>
                    </ul>
                  </div>
                </div>
              </div>


              {/* Certifications */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold font-gothic text-primary mb-6">Certifications</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-primary mb-3">Cisco Certifications</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Endpoint Security',
                        'Data Analytics',
                        'Network Defense',
                        'Networking Basics',
                        'Cyber Threat Management',
                        'Network Devices & Initial Configuration',
                        'Ethical Hacker',
                        'Python',
                        'Junior Cybersecurity Analyst'
                      ].map((cert) => (
                        <div key={cert} className="flex items-center gap-2">
                          <Shield className="text-primary" size={16} />
                          <span className="text-sm font-cyber">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-secondary mb-3">Industry Certifications</h4>
                    <div className="flex items-center gap-2">
                      <Shield className="text-secondary" size={16} />
                      <span className="text-sm font-cyber">XR Developer Certificate - Centre for Digital Transformation and Innovation Africa (CXI-Africa)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Summary */}
              <div className="bg-gradient-dark p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6 text-center">
                  Core Competencies
                </h3>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold text-primary mb-3">Security</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Penetration Testing</div>
                      <div>SOC Analysis</div>
                      <div>Incident Response</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-secondary mb-3">Creative</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>3D Modeling</div>
                      <div>UI/UX Design</div>
                      <div>Brand Identity</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-primary mb-3">Technical</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Machine Learning</div>
                      <div>Data Analytics</div>
                      <div>Full Stack Dev</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-secondary mb-3">Leadership</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Team Management</div>
                      <div>Training & Mentoring</div>
                      <div>Project Leadership</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-6">
                INITIATE CONTACT
              </h1>
              <p className="text-xl text-foreground/80 font-cyber">
                Ready to forge digital alliances? Let's create something extraordinary.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-lg border border-border glow-pink">
                <h3 className="text-2xl font-bold font-gothic text-primary mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-cyber text-muted-foreground mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-muted border border-border rounded-lg focus:border-primary transition-cyber"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-cyber text-muted-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-muted border border-border rounded-lg focus:border-primary transition-cyber"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-cyber text-muted-foreground mb-2">Project Type</label>
                    <select className="w-full p-3 bg-muted border border-border rounded-lg focus:border-primary transition-cyber">
                      <option>Security Consultation</option>
                      <option>Creative Development</option>
                      <option>Data Analytics</option>
                      <option>Training & Education</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-cyber text-muted-foreground mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-muted border border-border rounded-lg focus:border-primary transition-cyber resize-none"
                      placeholder="Describe your project or inquiry..."
                    ></textarea>
                  </div>
                  <Button className="w-full glow-pink font-gothic bg-primary text-primary-foreground hover:bg-primary/90">
                    Deploy Message
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-card p-6 rounded-lg border border-border glow-blue">
                  <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary" size={20} />
                      <span className="font-cyber">keathan179@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-secondary" size={20} />
                      <span className="font-cyber">0682745753</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary" size={20} />
                      <span className="font-cyber">South Africa</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold font-gothic text-primary mb-4">Digital Presence</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="glow-pink">
                      <Github size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="glow-blue">
                      <Linkedin size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="glow-pink">
                      <Twitter size={20} />
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-dark p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold font-gothic text-gradient-cyber mb-4">Response Protocol</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Emergency Security Issues:</span>
                      <span className="text-primary font-cyber">&lt; 1 hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Project Inquiries:</span>
                      <span className="text-secondary font-cyber">&lt; 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>General Questions:</span>
                      <span className="text-primary font-cyber">&lt; 48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;