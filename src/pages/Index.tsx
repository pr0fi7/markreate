
import Header from "@/components/Header";
import Introduction from "@/components/sections/Introduction";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import ContactMe from "@/components/sections/ContactMe";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Introduction />
      <Portfolio />
      <Skills />
      <Testimonials />
      <ContactMe />
      <footer className="py-6 text-center text-sm text-muted-foreground bg-secondary">
        <div className="container">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
