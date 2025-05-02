
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const ContactMe = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:mark4.shevchenko@gmail.com";
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/llMarkll", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/mark-shevchenko-218149259/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/pr0fi7/", "_blank");
  };

  const handleUpworkClick = () => {
    window.open("https://www.upwork.com/freelancers/~015b0e8d89b2b5587d", "_blank");
  };

  return (
    <Section id="contact" title="Contact Me" className="bg-white">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-md text-center mb-8">
          <p className="text-muted-foreground">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-2xl">
          <Button 
            variant="outline" 
            onClick={handleTelegramClick} 
            className="flex items-center justify-center gap-2"
          >
            <img 
              src="lovable-uploads/tg.png" 
              alt="Telegram" 
              className="h-5 w-5" 
            />
            Telegram
          </Button>
          <Button 
            variant="outline" 
            onClick={handleEmailClick} 
            className="flex items-center justify-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Email
          </Button>
          <Button 
            variant="outline" 
            onClick={handleLinkedInClick} 
            className="flex items-center justify-center gap-2"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            onClick={handleGithubClick} 
            className="flex items-center justify-center gap-2"
          >
            <Github className="h-5 w-5" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            onClick={handleUpworkClick} 
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-5 w-5" />
            Upwork
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
