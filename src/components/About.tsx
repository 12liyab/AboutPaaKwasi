import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const techStack = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Git/GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];

const About = () => {
  return (
    <TooltipProvider>
      <section id="about" className="py-20 px-4 md:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full shadow-glow" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Profile Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-float" />
                <img 
                  src={profileImage} 
                  alt="Liyab J Tachin - Full Stack Developer"
                  className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-glow hover:scale-105 transition-all duration-500 ring-4 ring-primary/10"
                />
              </div>
              
              <div className="text-center lg:text-left space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className="inline-block animate-fade-in">Hi,</span>{" "}
                  <span className="inline-block animate-fade-in" style={{ animationDelay: "0.1s" }}>I'm</span>{" "}
                  <span className="inline-block bg-gradient-primary bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    Liyab 
                  </span>
                </h3>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I am a results-driven full-stack developer passionate about building efficient, 
                  scalable, and user-friendly applications. With experience leading backend and full-stack 
                  development at <span className="text-primary font-semibold">Coldsis Ghana Limited</span> and{" "}
                  <span className="text-primary font-semibold">Thenovus.Solutions</span>, I bring a solid 
                  blend of creativity and technical depth to every project.
                  My work extends beyond coding I incorporate
                  DevOps principles to enable smooth integration, automated deployments,
                  and system reliability. Skilled in CI/CD (GitHub Actions, Jenkins),
                  containerization (Docker, Kubernetes), and cloud services (AWS, Azure), I ensure seamless 
                  collaboration between development and operations while optimizing performance and uptime.
                </p>
                
                <Button 
                  className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Right Column - Tech Stack */}
            <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-xl border-2 border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-500 animate-fade-in">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Tech Stack
                </h3>
                <p className="text-sm text-muted-foreground">Technologies I work with</p>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
                {techStack.map((tech, index) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <div
                        className="group flex flex-col items-center justify-center p-3 md:p-4 bg-gradient-to-br from-card to-card/50 backdrop-blur rounded-xl border-2 border-border/30 hover:border-primary/60 hover:bg-primary/5 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_8px_30px_rgba(147,51,234,0.3)] animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="relative w-10 h-10 md:w-12 md:h-12 mb-2 flex items-center justify-center">
                          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <img 
                            src={tech.logo} 
                            alt={`${tech.name} logo`}
                            className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-[10px] md:text-xs font-semibold text-center text-foreground/80 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {tech.name}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-card/95 backdrop-blur border-primary/30">
                      <p className="font-semibold text-sm">{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
              
              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">12+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Technologies</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">10+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">3+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Years Exp</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default About;
