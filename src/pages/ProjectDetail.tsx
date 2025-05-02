
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/components/sections/Portfolio";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    if (!project) {
      navigate("/");
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [project, navigate]);
  
  if (!project) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[50vh] bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-center max-w-4xl px-4">{project.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")} 
          className="mb-12"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="mb-6">Introduction</h2>
          <p className="text-lg text-muted-foreground">
            {project.introduction}
          </p>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground mb-4">
            {project.description}
          </p>
        </section>

        {/* TL;DR */}
        <section className="mb-16 bg-secondary p-8 rounded-lg">
          <h2 className="mb-6">TL;DR</h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.tldr.map((item, index) => (
              <li key={index} className="text-lg text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="mb-6">Technologies</h2>
          <div className="flex flex-wrap gap-4">
            {project.tags.map((tag) => (
              <div key={tag} className="bg-secondary px-4 py-2 rounded-md">
                {tag}
              </div>
            ))}

          </div>
        </section>

        {/* Images */}
        {project.image_status !== "hidden" && (
          <section className="mb-16">
            <h2 className="mb-6">Project Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot 1`} 
                className="w-full h-64 object-cover rounded-lg"
              />
              {project.extra_images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 2}`} 
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
