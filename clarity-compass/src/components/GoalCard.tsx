import { cn } from "@/lib/utils";

interface GoalCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export function GoalCard({ title, description, icon, selected, onClick }: GoalCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-6 rounded-xl text-left transition-all duration-300 animate-fade-in",
        "border-2 hover:-translate-y-1",
        selected
          ? "bg-primary/10 border-primary shadow-soft-lg"
          : "bg-card border-border hover:border-primary/40 hover:shadow-soft"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
        selected ? "bg-primary text-primary-foreground" : "bg-sage-light text-primary"
      )}>
        {icon}
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </button>
  );
}
