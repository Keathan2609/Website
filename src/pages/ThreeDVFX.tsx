import hero3D from "@/assets/hero-3d.jpg";

export default function ThreeDVFX() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-96 overflow-hidden">
        <img 
          src={hero3D} 
          alt="3D Modeling and VFX" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4">
            3D MODELING & VFX
          </h1>
          <p className="text-xl text-foreground/80 font-cyber max-w-2xl">
            Crafting immersive digital worlds through cutting-edge 3D modeling, animation, and visual effects
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
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

          <div className="bg-card p-6 rounded-lg border border-border glow-blue">
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

          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
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

        <div className="mt-12 bg-gradient-dark p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
            Technical Arsenal
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-primary mb-3">Software Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Blender', 'Maya', 'Cinema 4D', 'Houdini', 'After Effects', 'Nuke'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {['Real-time Rendering', 'Procedural Generation', 'Motion Capture', 'AR/VR'].map((spec) => (
                  <span key={spec} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {spec}
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