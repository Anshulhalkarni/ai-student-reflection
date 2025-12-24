import { useLocation, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ReflectionResult } from "@/components/ReflectionResult";
import { ArrowLeft, RefreshCw, MessageCircle, Sparkles } from "lucide-react";

export default function Results() {
  const location = useLocation();
  const { result, goal } = location.state || {};

  if (!result) {
    return <Navigate to="/reflect" replace />;
  }

  const goalLabels: Record<string, string> = {
    exploring: "Exploring",
    building: "Building Skills",
    achieving: "Achieving Goals",
    lost: "Feeling Lost",
  };

  return (
    <div className="min-h-screen gradient-warm">
      {/* Header */}
      <header className="pt-8 px-6">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>
      </header>

      <main className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-light text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{goalLabels[goal] || goal}</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Here's what I noticed
            </h1>
            <p className="text-muted-foreground">
              These are gentle suggestions, not strict rules. Take what resonates.
            </p>
          </div>

          {/* Results */}
          <ReflectionResult data={result} />

          {/* Actions */}
          <div className="mt-10 space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex gap-3">
              <Link to="/reflect" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  <RefreshCw className="w-4 h-4" />
                  Reflect Again
                </Button>
              </Link>
              <Link to="/chat" className="flex-1">
                <Button variant="calm" size="lg" className="w-full">
                  <MessageCircle className="w-4 h-4" />
                  Talk About This
                </Button>
              </Link>
            </div>
            <Link to="/">
              <Button variant="ghost" size="lg" className="w-full text-muted-foreground">
                Return Home
              </Button>
            </Link>
          </div>

          {/* Closing Note */}
          <p className="text-center text-sm text-muted-foreground mt-12">
            Remember: Progress isn't about doing more. It's about doing what matters.
          </p>
        </div>
      </main>
    </div>
  );
}
