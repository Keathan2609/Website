import heroData from "@/assets/hero-data.jpg";

export default function DataScience() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-96 overflow-hidden">
        <img 
          src={heroData} 
          alt="Data Science" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4">
            DATA SCIENCE
          </h1>
          <p className="text-xl text-foreground/80 font-cyber max-w-2xl">
            Extracting insights from chaos, transforming raw data into strategic intelligence
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
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

          <div className="bg-card p-6 rounded-lg border border-border glow-blue">
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

          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
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

        <div className="mt-12 bg-gradient-dark p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
            Technical Stack
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold text-primary mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'SQL', 'Julia'].map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3">ML Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'].map((lib) => (
                  <span key={lib} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {lib}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">Visualization</h4>
              <div className="flex flex-wrap gap-2">
                {['Plotly', 'D3.js', 'Tableau', 'Power BI'].map((viz) => (
                  <span key={viz} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {viz}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3">Cloud Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'GCP', 'Azure', 'Databricks'].map((cloud) => (
                  <span key={cloud} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {cloud}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-8 text-center">
            Project Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-primary mb-3 font-gothic">Cyber Threat Intelligence</h4>
              <p className="text-muted-foreground mb-3">
                ML-powered threat detection system analyzing network patterns to identify potential security breaches.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Real-time Analysis</span>
                <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">Anomaly Detection</span>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
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
    </div>
  );
}