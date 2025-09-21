import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  User,
  Box, 
  Palette, 
  BarChart3, 
  Shield, 
  Flag, 
  Eye,
  Mail, 
  FileText, 
  BookOpen,
  ExternalLink
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { name: "Summary", section: "hero", icon: User },
  { name: "3D & VFX", section: "threadvfx", icon: Box, hasProjects: true },
  { name: "Design", section: "design", icon: Palette, hasProjects: true },
  { name: "Data Science", section: "datascience", icon: BarChart3, hasProjects: true },
  { name: "Security", section: "security", icon: Shield, hasProjects: true },
  { name: "CTF", section: "ctf", icon: Flag, hasProjects: true },
  { name: "SOC", section: "soc", icon: Eye, hasProjects: true },
  { name: "Biography", section: "biography", icon: BookOpen },
  { name: "CV", section: "cv", icon: FileText },
  { name: "Contact", section: "contact", icon: Mail },
];

export default function FloatingNavigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Hide/show nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Track active section
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = navItems.map(item => item.section);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleProjectsClick = (section: string) => {
    navigate(`/projects/${section}`);
  };

  const NavTab = ({ item }: { item: typeof navItems[0] }) => {
    const isActive = activeSection === item.section && location.pathname === '/';
    const Icon = item.icon;
    
    return (
      <div className="relative group">
        <Button
          onClick={() => scrollToSection(item.section)}
          variant="ghost"
          className={`
            glow-tab relative px-4 py-2 font-gothic font-medium transition-smooth
            ${isActive 
              ? "text-primary glow-pink active" 
              : "text-foreground/70 hover:text-primary"
            }
          `}
        >
          <Icon size={16} className="mr-2" />
          {item.name}
        </Button>
        
        {item.hasProjects && (
          <Button
            onClick={() => handleProjectsClick(item.section)}
            variant="ghost"
            size="sm"
            className="absolute -top-2 -right-2 w-6 h-6 p-0 rounded-full bg-primary/10 hover:bg-primary/20 transition-smooth opacity-0 group-hover:opacity-100"
          >
            <ExternalLink size={12} className="text-primary" />
          </Button>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mouse trail effect */}
      <div className="mouse-trail" style={{ display: 'none' }} />
      
      {/* Floating Navigation */}
      <nav className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-smooth
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}>
        <div className="floating-nav bg-card/80 border border-border/50 rounded-2xl px-6 py-3 shadow-2xl">
          <div className="flex items-center gap-1">
            {/* Name/Brand */}
            <div className="mr-6 animate-float">
              <h1 className="text-lg font-bold font-gothic text-gradient-cyber">
                KEATHAN NAIDOO
              </h1>
              <p className="text-xs text-muted-foreground font-cyber -mt-1">
                Creative Developer
              </p>
            </div>
            
            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 animate-fade-in-up-delay">
              {navItems.map((item, index) => (
                <div 
                  key={item.section} 
                  className="animate-fade-in-up-delay"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <NavTab item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}