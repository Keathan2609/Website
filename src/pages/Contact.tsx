import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-64 bg-gradient-cyber flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-background mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-background/80 font-cyber max-w-2xl">
            Let's collaborate and create something extraordinary together
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-gothic text-gradient-cyber mb-6">
                Connect With Me
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you need a cybersecurity assessment, creative development, or just want to discuss 
                the intersection of art and technology, I'm always excited to connect with fellow creators 
                and innovators.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border glow-pink">
                <Mail className="text-primary" size={24} />
                <div>
                  <h3 className="font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground">contact@cyberatelier.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border glow-blue">
                <Phone className="text-secondary" size={24} />
                <div>
                  <h3 className="font-bold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">Available by appointment</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border glow-pink">
                <MapPin className="text-primary" size={24} />
                <div>
                  <h3 className="font-bold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Remote • Global</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold font-gothic text-gradient-cyber mb-4">
                Social Presence
              </h3>
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
          </div>

          {/* Contact Form */}
          <Card className="p-8 border border-border bg-card">
            <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="bg-background border-border focus:border-primary transition-cyber"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="bg-background border-border focus:border-primary transition-cyber"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@domain.com"
                  className="bg-background border-border focus:border-primary transition-cyber"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Type
                </label>
                <select className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-primary transition-cyber text-foreground">
                  <option>Security Assessment</option>
                  <option>3D Modeling & Animation</option>
                  <option>Graphic Design</option>
                  <option>Data Science Project</option>
                  <option>Web Development</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                  rows={6}
                  className="bg-background border-border focus:border-primary transition-cyber resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-pink font-gothic"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-dark p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-4 text-center">
            Collaboration Opportunities
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-bold text-primary mb-2">Creative Projects</h4>
              <p className="text-sm text-muted-foreground">
                Art installations, digital experiences, and experimental interfaces
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-bold text-secondary mb-2">Security Consulting</h4>
              <p className="text-sm text-muted-foreground">
                Penetration testing, security audits, and defense strategy
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="font-bold text-primary mb-2">Innovation Labs</h4>
              <p className="text-sm text-muted-foreground">
                Research partnerships and experimental technology development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}