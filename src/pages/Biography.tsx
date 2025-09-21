export default function Biography() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-96 bg-gradient-glow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4">
            DIGITAL ALCHEMIST
          </h1>
          <p className="text-xl text-foreground/80 font-cyber max-w-2xl">
            Where cybersecurity meets creative expression in the gothic digital realm
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <h2 className="text-3xl font-bold font-gothic text-gradient-cyber mb-6">
                The Genesis
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey began in the shadowy intersection of art and technology, where gothic aesthetics 
                dance with cutting-edge cybersecurity. Growing up fascinated by both the beauty of dark art 
                and the elegance of well-crafted code, I found myself drawn to the digital underworld where 
                hackers and artists blur the lines between creation and destruction.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as midnight sessions exploring the depths of computer networks evolved into a 
                professional calling – protecting digital realms while expressing creativity through 
                technology. Every vulnerability discovered is a puzzle solved, every security breach 
                prevented is a digital artwork preserved.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card p-6 rounded-lg border border-border glow-pink">
                <h3 className="text-xl font-bold font-gothic text-primary mb-4">
                  The Artist Within
                </h3>
                <p className="text-muted-foreground mb-4">
                  My creative side emerged through digital art and 3D modeling, drawn to the gothic and 
                  cyberpunk aesthetics that reflect the duality of our digital age. Beauty exists in the 
                  shadows, in the neon-lit corridors of cyberspace where data flows like digital blood.
                </p>
                <p className="text-muted-foreground">
                  Each 3D model I create tells a story of technology's impact on humanity, while every 
                  animation brings to life the invisible battles fought in the digital realm.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border glow-blue">
                <h3 className="text-xl font-bold font-gothic text-secondary mb-4">
                  The Guardian's Path
                </h3>
                <p className="text-muted-foreground mb-4">
                  Cybersecurity chose me as much as I chose it. There's something deeply satisfying about 
                  standing guard at the gates of the digital world, using ethical hacking to strengthen 
                  defenses and protect the innocent from digital predators.
                </p>
                <p className="text-muted-foreground">
                  Every CTF challenge conquered, every SOC alert investigated, and every penetration test 
                  conducted adds another layer to my understanding of both human nature and digital systems.
                </p>
              </div>
            </div>

            <div className="bg-gradient-dark p-8 rounded-lg border border-border mb-8">
              <h2 className="text-3xl font-bold font-gothic text-gradient-cyber mb-6 text-center">
                Philosophy & Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-bold text-primary mb-2">Art as Language</h4>
                  <p className="text-sm text-muted-foreground">
                    Technology is my medium, creativity is my message. Every project tells a story.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚔️</div>
                  <h4 className="font-bold text-secondary mb-2">Ethical Warfare</h4>
                  <p className="text-sm text-muted-foreground">
                    Using hacker skills for protection, not destruction. The dark arts serve the light.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🧬</div>
                  <h4 className="font-bold text-primary mb-2">Data as DNA</h4>
                  <p className="text-sm text-muted-foreground">
                    Every dataset contains stories waiting to be discovered and visualized.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <h2 className="text-3xl font-bold font-gothic text-gradient-cyber mb-6">
                Beyond the Screen
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                When I'm not penetrating networks or crafting 3D masterpieces, you'll find me exploring 
                the intersection of technology and human psychology. I'm fascinated by how digital 
                environments shape behavior, how gothic aesthetics can convey deeper truths about our 
                relationship with technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I collect vintage cyberpunk novels, practice digital photography with a focus on urban 
                decay and technological juxtaposition, and contribute to open-source security tools. 
                My apartment is a careful balance of minimalist design and high-tech laboratory – 
                multiple monitors casting their glow over carefully curated art pieces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Music plays a constant role in my work – dark synthwave and industrial tracks provide 
                the soundtrack for late-night coding sessions and vulnerability research. There's 
                something about the rhythm of machine-driven beats that synchronizes perfectly with 
                the flow of code and the pursuit of digital truth.
              </p>
            </div>

            <div className="bg-gradient-cyber p-8 rounded-lg border border-border text-center">
              <h2 className="text-2xl font-bold font-gothic text-background mb-4">
                "In the digital realm, art and security are not opposites – they are dance partners in the eternal ballet of creation and protection."
              </h2>
              <p className="text-background/80 font-cyber">
                — Core philosophy that guides every project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}