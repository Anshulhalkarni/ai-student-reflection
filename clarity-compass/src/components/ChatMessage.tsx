import { cn } from "@/lib/utils";
import { User, Sparkles } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={cn(
      "flex gap-3 animate-fade-in",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <div className={cn(
        "w-9 h-9 rounded-full flex items-center justify-center shrink-0",
        isUser ? "bg-secondary" : "bg-sage-light"
      )}>
        {isUser ? (
          <User className="w-4 h-4 text-secondary-foreground" />
        ) : (
          <Sparkles className="w-4 h-4 text-primary" />
        )}
      </div>
      <div className={cn(
        "max-w-[80%] px-4 py-3 rounded-2xl",
        isUser 
          ? "bg-primary text-primary-foreground rounded-br-md" 
          : "bg-card border border-border rounded-bl-md"
      )}>
        <p className={cn(
          "text-sm leading-relaxed",
          !isUser && "text-foreground"
        )}>{content}</p>
      </div>
    </div>
  );
}
