export default function SOC() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-64 bg-gradient-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-gothic text-gradient-cyber mb-4">
            SOC ANALYST
          </h1>
          <p className="text-xl text-foreground/80 font-cyber max-w-2xl">
            Guardian of digital realms, hunting threats in the cyber wilderness
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
            <h3 className="text-xl font-bold font-gothic text-primary mb-4">Threat Hunting</h3>
            <p className="text-muted-foreground mb-4">
              Proactively seeking advanced persistent threats and sophisticated attack patterns.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Behavioral analytics</li>
              <li>• IOC development</li>
              <li>• Threat intelligence integration</li>
              <li>• Advanced query techniques</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border glow-blue">
            <h3 className="text-xl font-bold font-gothic text-secondary mb-4">Incident Response</h3>
            <p className="text-muted-foreground mb-4">
              Rapid containment and remediation of security incidents across the enterprise.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Forensic triage</li>
              <li>• Malware analysis</li>
              <li>• Evidence preservation</li>
              <li>• Post-incident reporting</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border glow-pink">
            <h3 className="text-xl font-bold font-gothic text-primary mb-4">SIEM Management</h3>
            <p className="text-muted-foreground mb-4">
              Orchestrating security information and event management platforms for maximum visibility.
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li>• Custom rule development</li>
              <li>• Log correlation analysis</li>
              <li>• Dashboard optimization</li>
              <li>• False positive reduction</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-dark p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-6">
            Technical Arsenal
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold text-primary mb-3">SIEM Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {['Splunk', 'Elastic Stack', 'QRadar', 'Sentinel'].map((siem) => (
                  <span key={siem} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {siem}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3">Analysis Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['Wireshark', 'Volatility', 'YARA', 'Suricata'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">Threat Intel</h4>
              <div className="flex flex-wrap gap-2">
                {['MISP', 'OpenCTI', 'ThreatConnect', 'STIX/TAXII'].map((intel) => (
                  <span key={intel} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {intel}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3">Orchestration</h4>
              <div className="flex flex-wrap gap-2">
                {['Phantom', 'Demisto', 'TheHive', 'Custom SOAR'].map((soar) => (
                  <span key={soar} className="px-3 py-1 bg-muted rounded-full text-sm font-cyber">
                    {soar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold font-gothic text-gradient-cyber mb-8 text-center">
            Operational Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-gothic">&lt; 5min</div>
              <div className="text-sm text-muted-foreground">Mean Time to Detection</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-secondary mb-2 font-gothic">98%</div>
              <div className="text-sm text-muted-foreground">Alert Accuracy Rate</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-gothic">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring Coverage</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-secondary mb-2 font-gothic">0</div>
              <div className="text-sm text-muted-foreground">Successful Breaches</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-card p-8 rounded-lg border border-border">
          <h3 className="text-xl font-bold font-gothic text-gradient-cyber mb-4">
            Advanced Hunting Techniques
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-primary mb-3 font-gothic">Behavioral Analysis</h4>
              <p className="text-muted-foreground mb-3">
                Developing machine learning models to identify anomalous user and entity behavior patterns, 
                catching threats that traditional signature-based detection misses.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">ML-Powered</span>
                <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">Proactive</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3 font-gothic">Threat Intelligence Fusion</h4>
              <p className="text-muted-foreground mb-3">
                Correlating internal telemetry with global threat intelligence feeds to provide 
                contextual awareness and attribution for security events.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Contextual</span>
                <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}