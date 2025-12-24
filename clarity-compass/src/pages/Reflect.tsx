import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TimeSlider } from "@/components/TimeSlider";
import { GoalCard } from "@/components/GoalCard";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Shuffle, 
  Code, 
  Moon,
  Compass,
  Target,
  Rocket,
  HelpCircle,
  Sparkles
} from "lucide-react";

type Step = "time" | "goal" | "analyzing";

interface TimeAudit {
  classes: number;
  social: number;
  randomLearning: number;
  skillPractice: number;
  rest: number;
}

const goals = [
  {
    id: "exploring",
    title: "Exploring",
    description: "I'm still figuring things out and want to discover what interests me.",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    id: "building",
    title: "Building Skills",
    description: "I know what I want to learn and I'm actively practicing to get better.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    id: "achieving",
    title: "Achieving Goals",
    description: "I have specific targets like internships, projects, or exams to prepare for.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    id: "lost",
    title: "Feeling Lost",
    description: "I'm overwhelmed and need help understanding where to even start.",
    icon: <HelpCircle className="w-6 h-6" />,
  },
];

export default function Reflect() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("time");
  const [timeAudit, setTimeAudit] = useState<TimeAudit>({
    classes: 20,
    social: 15,
    randomLearning: 10,
    skillPractice: 8,
    rest: 45,
  });
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const totalHours = Object.values(timeAudit).reduce((a, b) => a + b, 0);

  const handleAnalyze = () => {
    setStep("analyzing");
    // Simulate analysis delay, then navigate to results
    setTimeout(() => {
      navigate("/results", { 
        state: { 
          timeAudit, 
          goal: selectedGoal,
          // Mock response for now - will be replaced with AI
          result: {
            reduce: "High passive content consumption, especially tutorial-watching without hands-on practice",
            unlearn: "The belief that watching more videos equals learning more. True understanding comes from doing, not consuming.",
            focus: [
              "Pick one skill that genuinely interests you and commit to it for 2 weeks",
              "Practice actively for 1-2 hours daily instead of passively consuming content"
            ],
            weeklyDirection: [
              "Reduce passive learning time by 50%",
              "Add one small project or practical exercise daily",
              "Maintain your rest time—it's actually healthy",
              "Social time is fine, but be present when you're with others"
            ]
          }
        } 
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen gradient-sage">
      {/* Header */}
      <header className="pt-8 px-6">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>
      </header>

      <main className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Step: Time Audit */}
          {step === "time" && (
            <div className="animate-fade-in">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-foreground mb-3">
                  How did you spend your week?
                </h1>
                <p className="text-muted-foreground">
                  Be honest—there's no judgment here. Just awareness.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <TimeSlider
                  label="Classes & Academics"
                  description="Lectures, assignments, studying"
                  value={timeAudit.classes}
                  onChange={(v) => setTimeAudit({ ...timeAudit, classes: v })}
                  icon={<BookOpen className="w-5 h-5" />}
                />
                <TimeSlider
                  label="Social & Entertainment"
                  description="Friends, social media, shows"
                  value={timeAudit.social}
                  onChange={(v) => setTimeAudit({ ...timeAudit, social: v })}
                  icon={<Users className="w-5 h-5" />}
                />
                <TimeSlider
                  label="Random Learning"
                  description="YouTube tutorials, articles, courses"
                  value={timeAudit.randomLearning}
                  onChange={(v) => setTimeAudit({ ...timeAudit, randomLearning: v })}
                  icon={<Shuffle className="w-5 h-5" />}
                />
                <TimeSlider
                  label="Skill Practice"
                  description="Coding, designing, writing, creating"
                  value={timeAudit.skillPractice}
                  onChange={(v) => setTimeAudit({ ...timeAudit, skillPractice: v })}
                  icon={<Code className="w-5 h-5" />}
                />
                <TimeSlider
                  label="Rest & Self-care"
                  description="Sleep, exercise, doing nothing"
                  value={timeAudit.rest}
                  onChange={(v) => setTimeAudit({ ...timeAudit, rest: v })}
                  icon={<Moon className="w-5 h-5" />}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 mb-8">
                <span className="text-muted-foreground">Total hours this week</span>
                <span className="text-xl font-semibold text-foreground">{totalHours} hrs</span>
              </div>

              <Button 
                variant="action" 
                size="lg" 
                className="w-full"
                onClick={() => setStep("goal")}
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Step: Goal Selection */}
          {step === "goal" && (
            <div className="animate-fade-in">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-foreground mb-3">
                  Where are you right now?
                </h1>
                <p className="text-muted-foreground">
                  This helps me understand your context better.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {goals.map((goal) => (
                  <GoalCard
                    key={goal.id}
                    title={goal.title}
                    description={goal.description}
                    icon={goal.icon}
                    selected={selectedGoal === goal.id}
                    onClick={() => setSelectedGoal(goal.id)}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setStep("time")}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
                <Button 
                  variant="action" 
                  size="lg"
                  className="flex-[2]"
                  disabled={!selectedGoal}
                  onClick={handleAnalyze}
                >
                  Analyze My Direction
                  <Sparkles className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step: Analyzing */}
          {step === "analyzing" && (
            <div className="animate-fade-in text-center py-20">
              <div className="w-20 h-20 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-8 animate-pulse-gentle">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Reflecting on your week...
              </h2>
              <p className="text-muted-foreground">
                Finding clarity in your time and direction.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
