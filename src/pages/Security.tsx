import heroSecurity from "@/assets/hero-security.jpg";

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-96 overflow-hidden">
        <img 
          src={heroSecurity} 
          alt="Cybersecurity" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4">
            ETHICAL HACKING
          </h1>
          <p className="text-xl text-foreground/80 font-cyber max-w-2xl">
            Penetrating digital fortresses to strengthen cyber defenses and protect digital assets
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
            <h3 className="text-xl font-bold font-gothic text-primary mb-4">Penetration Testing</h3>
            <p className="text-muted-foreground mb-4">
              Systematic assessment of security vulnerabilities through controlled exploitation.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Web application testing</li>
              <li>• Network penetration testing</li>
              <li>• Wireless security assessment</li>
              <li>• Social engineering testing</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border glow-blue">
            <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Vulnerability Assessment</h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive security audits identifying weaknesses before attackers do.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Infrastructure scanning</li>
              <li>• Code review & SAST</li>
              <li>• Configuration analysis</li>
              <li>• Compliance validation</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
            <h3 className="text-xl font-bold font-gothic text-primary mb-4">Red Team Operations</h3>
            <p className="text-muted-foreground mb-4">
              Advanced adversarial simulations testing organizational resilience.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Full-scope engagements</li>
              <li>• Adversary emulation</li>
              <li>• Physical security testing</li>
              <li>• Custom attack scenarios</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-dark p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
            Security Arsenal
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold text-primary mb-3">Reconnaissance</h4>
              <div className="flex flex-wrap gap-2">
                {['Nmap', 'Masscan', 'Recon-ng', 'Amass'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3">Exploitation</h4>
              <div className="flex flex-wrap gap-2">
                {['Metasploit', 'Cobalt Strike', 'Empire', 'Custom Tools'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">Web Testing</h4>
              <div className="flex flex-wrap gap-2">
                {['Burp Suite', 'OWASP ZAP', 'Nikto', 'SQLmap'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3">Post-Exploitation</h4>
              <div className="flex flex-wrap gap-2">
                {['Mimikatz', 'Bloodhound', 'PowerShell Empire', 'Custom Scripts'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-8 text-center">
            Certifications & Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-gothic">CEH</div>
              <div className="text-sm text-muted-foreground">Certified Ethical Hacker</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-secondary mb-2 font-gothic">OSCP</div>
              <div className="text-sm text-muted-foreground">Offensive Security Professional</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-gothic">CISSP</div>
              <div className="text-sm text-muted-foreground">Security Professional</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-card p-8 rounded-lg border border-border">
          <h3 className="text-xl font-bold font-gothic text-gradient-cyber mb-4">
            Ethical Framework
          </h3>
          <p className="text-muted-foreground mb-4">
            All security testing activities are conducted within strict ethical boundaries, following industry best practices and legal requirements. The goal is always to improve security posture and protect organizations from real threats.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Responsible Disclosure', 'Legal Authorization', 'Minimal Impact', 'Comprehensive Reporting'].map((principle) => (
              <span key={principle} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-cyber">
                {principle}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}