import { ArrowDown, Lightbulb, Target, Compass } from "lucide-react";

interface ReflectionData {
  reduce: string;
  unlearn: string;
  focus: string[];
  weeklyDirection: string[];
}

interface ReflectionResultProps {
  data: ReflectionData;
}

export function ReflectionResult({ data }: ReflectionResultProps) {
  return (
    <div className="space-y-6 animate-slide-up">
      {/* Reduce Section */}
      <div className="p-6 rounded-xl glass-card border-l-4 border-coral">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-coral/10">
            <ArrowDown className="w-5 h-5 text-coral" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">Consider Reducing</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-12">{data.reduce}</p>
      </div>

      {/* Unlearn Section */}
      <div className="p-6 rounded-xl glass-card border-l-4 border-amber">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-amber/10">
            <Lightbulb className="w-5 h-5 text-amber" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">What to Unlearn (For Now)</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-12">{data.unlearn}</p>
      </div>

      {/* Focus Section */}
      <div className="p-6 rounded-xl glass-card border-l-4 border-primary">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-sage-light">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">What to Focus On</h3>
        </div>
        <ul className="space-y-2 pl-12">
          {data.focus.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Weekly Direction Section */}
      <div className="p-6 rounded-xl glass-card border-l-4 border-sage-dark">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-sage-light">
            <Compass className="w-5 h-5 text-sage-dark" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">Your Weekly Direction</h3>
        </div>
        <ul className="space-y-2 pl-12">
          {data.weeklyDirection.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-dark mt-2 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
