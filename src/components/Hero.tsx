import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Code2, Blocks, Cpu, Database, Cloud, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const { displayText, isComplete } = useTypewriter("Liyab J Tachin", 100, 800);
  
  const techIcons = [
    { Icon: Code2, delay: "0s", position: "top-[20%] left-[10%]" },
    { Icon: Blocks, delay: "2s", position: "top-[15%] right-[15%]" },
    { Icon: Cpu, delay: "4s", position: "top-[60%] left-[8%]" },
    { Icon: Database, delay: "1s", position: "bottom-[25%] right-[12%]" },
    { Icon: Cloud, delay: "3s", position: "top-[40%] right-[8%]" },
    { Icon: Terminal, delay: "5s", position: "bottom-[35%] left-[15%]" },
  ];
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-secondary" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Floating tech icons */}
      {techIcons.map(({ Icon, delay, position }, idx) => (
        <div
          key={idx}
          className={`absolute ${position} text-primary/30 animate-float hover:text-primary/60 hover:scale-125 transition-all duration-500`}
          style={{ animationDelay: delay, animationDuration: "6s" }}
        >
          <Icon className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold animate-slide-up">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent relative">
              {displayText}
              <span className={`inline-block w-1 h-12 md:h-16 ml-1 bg-primary animate-pulse ${isComplete ? 'opacity-0' : 'opacity-100'}`} />
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Full Stack Developer building scalable digital experiences
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I build modern web and mobile applications that connect businesses and users seamlessly.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a 
              href="https://github.com/12liyab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/paa-kwesi-89557b333" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:12sonjames@gmail.com"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2 hover:border-secondary transition-colors duration-300">
          <div className="w-1 h-3 bg-primary rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
