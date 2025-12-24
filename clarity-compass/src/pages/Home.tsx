import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass, MessageCircle, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen gradient-warm">
      {/* Header */}
      <header className="pt-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">Clarity</span>
        </div>
      </header>

      {/* Hero */}
      <main className="px-6 pt-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Find clarity in your
              <span className="block text-primary">direction, not discipline</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A calm space for students to reflect on how they spend time, 
              identify what to let go, and rediscover focus—without pressure or guilt.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Reflection Card - Primary */}
            <Link to="/reflect" className="group">
              <div className="h-full p-8 rounded-2xl bg-card border-2 border-primary/20 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 hover:border-primary/40 animate-slide-up">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Compass className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Reflect & Re-align
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Take a few minutes to audit your time and get personalized insights 
                  on what to reduce, unlearn, and focus on.
                </p>
                <Button variant="action" className="w-full">
                  Start Reflection
                </Button>
              </div>
            </Link>

            {/* Chat Card - Secondary */}
            <Link to="/chat" className="group">
              <div className="h-full p-8 rounded-2xl bg-card border border-border shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 hover:border-primary/30 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Talk to AI Mentor
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Feeling stuck or overwhelmed? Have a calm conversation to 
                  work through your thoughts and find your next step.
                </p>
                <Button variant="calm" className="w-full">
                  Start Conversation
                </Button>
              </div>
            </Link>
          </div>

          {/* Subtle Message */}
          <p className="text-center text-sm text-muted-foreground mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            No pressure. No streaks. Just clarity when you need it.
          </p>
        </div>
      </main>
    </div>
  );
}
