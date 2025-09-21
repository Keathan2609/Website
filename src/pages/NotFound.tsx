import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <AlertTriangle className="mx-auto text-primary glow-pink" size={64} />
        </div>
        
        <h1 className="text-6xl font-bold font-gothic text-gradient-cyber mb-4">404</h1>
        <h2 className="text-2xl font-bold font-gothic text-foreground mb-4">
          VOID DETECTED
        </h2>
        <p className="text-lg text-muted-foreground mb-8 font-cyber">
          The digital path you sought has dissolved into the cyber abyss. 
          Perhaps it was never meant to exist in this reality.
        </p>
        
        <Link to="/">
          <Button className="glow-pink font-gothic bg-primary text-primary-foreground hover:bg-primary/90">
            <Home className="mr-2" size={18} />
            Return to Sanctuary
          </Button>
        </Link>
        
        <div className="mt-8 text-sm text-muted-foreground font-cyber">
          Lost route: <code className="bg-muted px-2 py-1 rounded text-foreground">{location.pathname}</code>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
