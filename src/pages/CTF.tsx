export default function CTF() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-64 bg-gradient-cyber flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-background mb-4">
            CAPTURE THE FLAG
          </h1>
          <p className="text-xl text-background/80 font-cyber max-w-2xl">
            Competitive cybersecurity challenges and digital treasure hunting
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
            <h3 className="text-xl font-bold font-gothic text-primary mb-4">Web Exploitation</h3>
            <p className="text-muted-foreground mb-4">
              Finding and exploiting vulnerabilities in web applications through creative problem-solving.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• SQL injection techniques</li>
              <li>• Cross-site scripting (XSS)</li>
              <li>• Server-side vulnerabilities</li>
              <li>• Authentication bypasses</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border glow-blue">
            <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Cryptography</h3>
            <p className="text-muted-foreground mb-4">
              Deciphering encrypted messages and breaking cryptographic implementations.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Classical ciphers</li>
              <li>• Modern cryptanalysis</li>
              <li>• Hash function attacks</li>
              <li>• RSA vulnerabilities</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
            <h3 className="text-xl font-bold font-gothic text-primary mb-4">Reverse Engineering</h3>
            <p className="text-muted-foreground mb-4">
              Disassembling and analyzing binary files to understand their functionality.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Binary analysis</li>
              <li>• Malware dissection</li>
              <li>• Assembly language</li>
              <li>• Dynamic analysis</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border glow-blue">
            <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Forensics</h3>
            <p className="text-muted-foreground mb-4">
              Investigating digital evidence and reconstructing digital crime scenes.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Memory dump analysis</li>
              <li>• Network packet inspection</li>
              <li>• File carving</li>
              <li>• Timeline reconstruction</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
            <h3 className="text-xl font-bold font-gothic text-primary mb-4">Pwn/Binary</h3>
            <p className="text-muted-foreground mb-4">
              Exploiting binary vulnerabilities and gaining system control.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Buffer overflow exploitation</li>
              <li>• Return-oriented programming</li>
              <li>• Heap exploitation</li>
              <li>• Stack canary bypasses</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border glow-blue">
            <h3 className="text-xl font-bold font-gothic text-secondary mb-4">OSINT</h3>
            <p className="text-muted-foreground mb-4">
              Gathering intelligence from publicly available information sources.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Social media investigation</li>
              <li>• Metadata extraction</li>
              <li>• Geolocation techniques</li>
              <li>• Digital footprinting</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-dark p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
            Competition Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-card rounded border border-border">
                <div>
                  <h4 className="font-bold text-primary">DEFCON CTF Finals</h4>
                  <p className="text-sm text-muted-foreground">Top 10 Placement</p>
                </div>
                <div className="text-2xl font-gothic text-primary">🏆</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-card rounded border border-border">
                <div>
                  <h4 className="font-bold text-secondary">PicoCTF</h4>
                  <p className="text-sm text-muted-foreground">Global Top 1%</p>
                </div>
                <div className="text-2xl font-gothic text-secondary">🥇</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-card rounded border border-border">
                <div>
                  <h4 className="font-bold text-primary">HackTheBox</h4>
                  <p className="text-sm text-muted-foreground">Pro Hacker Rank</p>
                </div>
                <div className="text-2xl font-gothic text-primary">💀</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-card rounded border border-border">
                <div>
                  <h4 className="font-bold text-secondary">TryHackMe</h4>
                  <p className="text-sm text-muted-foreground">Top 5% Completion</p>
                </div>
                <div className="text-2xl font-gothic text-secondary">🎯</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6 text-center">
            Signature Techniques
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-primary mb-3 font-gothic">Creative Problem Solving</h4>
              <p className="text-muted-foreground">
                Approaching challenges from unconventional angles, often finding solution paths 
                that others miss through lateral thinking and deep technical intuition.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-secondary mb-3 font-gothic">Tool Development</h4>
              <p className="text-muted-foreground">
                Creating custom exploitation tools and scripts when standard solutions fall short, 
                contributing original tools to the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}