import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Award, Briefcase, GraduationCap, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function CV() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-64 bg-gradient-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4">
            CURRICULUM VITAE
          </h1>
          <p className="text-xl text-foreground/80 font-cyber max-w-2xl">
            XR Developer | Data Scientist | Graphic Designer | Junior Cybersecurity Analyst
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Contact Information */}
        <Card className="p-6 border border-border bg-card mb-8">
          <h2 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={18} />
              <span className="text-sm font-cyber">keathan179@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-primary" size={18} />
              <span className="text-sm font-cyber">0682745753</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" size={18} />
              <span className="text-sm font-cyber">South Africa</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-primary" size={18} />
              <span className="text-sm font-cyber">Portfolio Available</span>
            </div>
          </div>
        </Card>

        {/* Download Section */}
        <div className="text-center mb-12">
          <Button className="glow-pink font-gothic bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="mr-2" size={18} />
            Download PDF Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience & Current Learning */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6 border border-border bg-card">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-primary" size={24} />
                <h2 className="text-2xl font-bold font-gothic text-gradient-cyber">
                  Professional Experience
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground">XR Developer</h3>
                    <span className="text-sm text-muted-foreground font-cyber">Advanced Level</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Extended Reality Development</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Developing immersive VR/AR experiences using Unity and Unreal Engine</li>
                    <li>• Creating interactive 3D environments and applications</li>
                    <li>• Implementing advanced XR interaction systems</li>
                    <li>• Certified by Centre for Digital Transformation and Innovation Africa (CXI-Africa)</li>
                  </ul>
                </div>

                <div className="border-l-2 border-secondary pl-6 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground">Animator, 3D Modeller & VFX Artist</h3>
                    <span className="text-sm text-muted-foreground font-cyber">Advanced Level</span>
                  </div>
                  <p className="text-secondary font-medium mb-2">3D Content Creation</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Advanced 3D modeling and animation in Maya and Blender</li>
                    <li>• Character rigging and procedural animation systems</li>
                    <li>• VFX creation using Houdini and industry-standard tools</li>
                    <li>• Texturing and material creation with Substance Painter and ZBrush</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-6 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground">Graphic Designer</h3>
                    <span className="text-sm text-muted-foreground font-cyber">Advanced Level</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Visual Design & Branding</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complete Adobe Creative Cloud mastery for design workflows</li>
                    <li>• UI/UX design using Figma for web and mobile applications</li>
                    <li>• Brand identity development and visual communication</li>
                    <li>• Digital art creation with cyberpunk and gothic aesthetics</li>
                  </ul>
                </div>

                <div className="border-l-2 border-secondary pl-6 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground">Data Scientist & AI/ML Specialist</h3>
                    <span className="text-sm text-muted-foreground font-cyber">Junior Level</span>
                  </div>
                  <p className="text-secondary font-medium mb-2">Data Analytics & Machine Learning</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Python-based data analysis and machine learning implementations</li>
                    <li>• Statistical modeling and predictive analytics</li>
                    <li>• Data visualization and business intelligence</li>
                    <li>• Currently developing expertise in AI/ML frameworks</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground">Junior Cybersecurity Analyst</h3>
                    <span className="text-sm text-muted-foreground font-cyber">Junior Level</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Information Security</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Endpoint security monitoring and threat detection</li>
                    <li>• Network defense and security analytics</li>
                    <li>• Ethical hacking practices and vulnerability assessment</li>
                    <li>• Currently learning CTF challenges and advanced penetration testing</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-border bg-card">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-secondary" size={24} />
                <h2 className="text-2xl font-bold font-gothic text-gradient-cyber">
                  Current Learning & Development
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Ethical Hacking Studies</h3>
                  <p className="text-secondary font-medium">Self-Directed Learning</p>
                  <p className="text-sm text-muted-foreground">Active learning through HackTheBox, TryHackMe, and HackerOne platforms</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Capture The Flag (CTF)</h3>
                  <p className="text-primary font-medium">Beginner Level</p>
                  <p className="text-sm text-muted-foreground">Developing skills in cybersecurity challenges and competitive hacking</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills & Certifications */}
          <div className="space-y-8">
            <Card className="p-6 border border-border bg-card">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary" size={24} />
                <h2 className="text-xl font-bold font-gothic text-gradient-cyber">
                  Certifications
                </h2>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-primary mb-2">Cisco Certifications</h4>
                  {[
                    'Endpoint Security',
                    'Data Analytics', 
                    'Network Defense',
                    'Networking Basics',
                    'Cyber Threat Management',
                    'Network Devices and Initial Configuration',
                    'Ethical Hacker',
                    'Python Programming',
                    'Junior Cyber Security Analyst'
                  ].map((cert) => (
                    <div key={cert} className="p-2 bg-primary/10 rounded border border-primary/20 mb-2">
                      <p className="text-sm font-cyber text-primary">{cert}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <h4 className="font-bold text-secondary mb-2">Industry Certifications</h4>
                  <div className="p-2 bg-secondary/10 rounded border border-secondary/20">
                    <p className="text-sm font-cyber text-secondary">XR Developer Certificate</p>
                    <p className="text-xs text-muted-foreground">Centre for Digital Transformation and Innovation Africa (CXI-Africa)</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold font-gothic text-gradient-cyber mb-4">
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-primary mb-2">3D & Animation (Advanced)</h4>
                  <div className="flex flex-wrap gap-1">
                    {['Maya', 'Blender', 'Houdini', 'ZBrush', 'Substance Painter'].map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-secondary mb-2">Development (Advanced)</h4>
                  <div className="flex flex-wrap gap-1">
                    {['Unity', 'Unreal Engine', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'C#', 'C++', 'Python'].map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">Design (Advanced)</h4>
                  <div className="flex flex-wrap gap-1">
                    {['Adobe Creative Cloud', 'Figma'].map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-secondary mb-2">Cybersecurity (Junior)</h4>
                  <div className="flex flex-wrap gap-1">
                    {['Network Security', 'Ethical Hacking', 'Threat Analysis', 'Python Security'].map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">Data Science (Junior)</h4>
                  <div className="flex flex-wrap gap-1">
                    {['Python Analytics', 'Machine Learning', 'Data Visualization'].map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold font-gothic text-gradient-cyber mb-4">
                Learning Platforms
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'HackTheBox', focus: 'Penetration Testing & CTF Challenges' },
                  { name: 'TryHackMe', focus: 'Cybersecurity Learning Paths' },
                  { name: 'HackerOne', focus: 'Bug Bounty & Ethical Hacking' }
                ].map((platform) => (
                  <div key={platform.name} className="p-3 bg-muted rounded border border-border">
                    <p className="text-sm font-bold font-cyber text-primary">{platform.name}</p>
                    <p className="text-xs text-muted-foreground">{platform.focus}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold font-gothic text-gradient-cyber mb-4">
                Languages
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground">English</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Programming Languages</span>
                  <span className="text-muted-foreground">Advanced (Python, C#, C++, JS/TS)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}