
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, role, className }: TestimonialCardProps) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-4xl font-serif mb-4">"</div>
        <p className="text-lg flex-1 italic mb-6">{quote}</p>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
