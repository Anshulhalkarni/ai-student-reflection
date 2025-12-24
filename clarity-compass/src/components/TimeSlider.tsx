import { Slider } from "@/components/ui/slider";

interface TimeSliderProps {
  label: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
  max?: number;
  icon: React.ReactNode;
}

export function TimeSlider({ label, description, value, onChange, max = 50, icon }: TimeSliderProps) {
  return (
    <div className="space-y-4 p-6 rounded-xl glass-card animate-fade-in">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-sage-light text-primary">
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-semibold text-primary">{value}</span>
          <span className="text-sm text-muted-foreground ml-1">hrs</span>
        </div>
      </div>
      <Slider
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        max={max}
        step={1}
        className="w-full"
      />
    </div>
  );
}
