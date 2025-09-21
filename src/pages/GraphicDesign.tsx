import heroDesign from "@/assets/hero-design.jpg";

export default function GraphicDesign() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-96 overflow-hidden">
        <img 
          src={heroDesign} 
          alt="Graphic Design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4">
            GRAPHIC DESIGN
          </h1>
          <p className="text-xl text-foreground/80 font-cyber max-w-2xl">
            Merging gothic aesthetics with modern design principles to create striking visual identities
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border glow-blue">
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

          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
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

          <div className="bg-card p-6 rounded-lg border border-border glow-blue">
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

        <div className="mt-12">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-8 text-center">
            Design Philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-dark p-6 rounded-lg border border-border">
              <h4 className="font-bold text-primary mb-3 font-gothic">Gothic Minimalism</h4>
              <p className="text-muted-foreground">
                Embracing the elegance of dark aesthetics while maintaining clean, purposeful design. 
                Every element serves both form and function in perfect harmony.
              </p>
            </div>
            <div className="bg-gradient-dark p-6 rounded-lg border border-border">
              <h4 className="font-bold text-secondary mb-3 font-gothic">Cyberpunk Influence</h4>
              <p className="text-muted-foreground">
                Drawing inspiration from cyberpunk culture to create futuristic designs that 
                blend technology with artistic expression.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
            Creative Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-primary mb-3">Design Software</h4>
              <div className="flex flex-wrap gap-2">
                {['Adobe CC', 'Figma', 'Sketch', 'Procreate'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {['Typography', 'Color Theory', 'Layout Design', 'Branding'].map((spec) => (
                  <span key={spec} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">Output Formats</h4>
              <div className="flex flex-wrap gap-2">
                {['Print', 'Digital', 'Web', 'Mobile'].map((format) => (
                  <span key={format} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}