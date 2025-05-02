
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  className?: string;
}

const ProjectCard = ({ id, title, description, image, tags, link, className }: ProjectCardProps) => {
  return (
    <Card className={cn("overflow-hidden border border-border group", className)}>
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <Button asChild className="mt-2 group">
          <Link to={`/project/${id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
