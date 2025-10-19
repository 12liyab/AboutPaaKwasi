import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import msdeesImage from "@/assets/projects/msdees.png";
import prevailImage from "@/assets/projects/prevail.png";
import clifImage from "@/assets/projects/clif.png";
import enabledImage from "@/assets/projects/enabled.png";
import novusImage from "@/assets/projects/novus.png";
import accceImage from "@/assets/projects/accce.png";
import printpalaceImage from "@/assets/projects/printpalace.png";
import manisImage from "@/assets/projects/manis.png";
import liyabImage from "@/assets/projects/liyab.png";
import dvlaImage from "@/assets/projects/dvla.png";
import kturesturantImage from "@/assets/projects/kturesturant.png";
import AitutorImage from "@/assets/projects/aitutor.png";
import netflixcloneImage from "@/assets/projects/netflixclone.png";
import apolloQLImage from "@/assets/projects/apolloql.png";


const techLogos: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "WebSocket": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
};

const projects = [
  {
    title: "Enabled Ability",
    type: "Full Stack Project",
    description: "Comprehensive platform empowering individuals with disabilities through accessible resources and community support.",
    link: "https://enabledability.org/",
    tech: ["React", "Node.js", "MongoDB"],
    image: enabledImage
  },
  {
    title: "Ms. Dees Event Center",
    type: "Website",
    description: "Modern event center website with booking system and gallery showcase.",
    link: "https://msdeeseventcenter.com/",
    tech: ["React", "CSS", "JavaScript"],
    image: msdeesImage
  },
  {
    title: "The Novus Solutions",
    type: "Corporate Website",
    description: "Professional corporate website for technology solutions company.",
    link: "https://thenovus.solutions/",
    tech: ["React", "Tailwind CSS"],
    image: novusImage
  },
  {
    title: "Prevail Foundation",
    type: "Non-profit Website",
    description: "Non-profit organization website focused on community development initiatives.",
    link: "https://prevailfoundation.org/",
    tech: ["React", "CSS", "JavaScript"],
    image: prevailImage
  },
  {
    title: "ACCCE",
    type: "Web App",
    description: "Interactive web application for community engagement and collaboration.",
    link: "https://accce.netlify.app/",
    tech: ["React", "GraphQL"],
    image: accceImage
  },
  {
    title: "The Print Palace Consult",
    type: "Corporate Site",
    description: "Corporate website for printing and consulting services.",
    link: "https://theprintpalaceconsult.com/",
    tech: ["React", "CSS"],
    image: printpalaceImage
  },
  {
    title: "Manis Travel Consult",
    type: "Website",
    description: "Travel consultation platform with destination guides and booking features.",
    link: "https://manistravelconsult.org/",
    tech: ["React", "JavaScript"],
    image: manisImage
  },
  {
    title: "DVLA Clone System",
    type: "Full Stack Project",
    description: "Driver and vehicle licensing management system clone.",
    link: "https://dvla.netlify.app/",
    tech: ["React", "Node.js", "SQL"],
    image: dvlaImage
  },
  {
    title: "Liyab Game Platform",
    type: "Game Web App",
    description: "Interactive gaming platform with multiplayer capabilities.",
    link: "https://liyabgame.netlify.app/",
    tech: ["React", "WebSocket"],
    image: liyabImage
  },
  {
    title: "CLIF Foundation",
    type: "NGO Website",
    description: "Non-governmental organization website for charitable initiatives.",
    link: "https://clif-foundation.org/",
    tech: ["React", "Tailwind CSS"],
    image: clifImage
  },
  {
    title: "Apollo GraphQL",
    type: "Full Stack Project",
    description: "GraphQL-based platform for efficient data querying and management.",
    link: "https://github.com/12liyab/graphql-crash-course",
    tech: ["React", "GraphQL", "Node.js"],
    image: apolloQLImage
  },
  {
    title: "Restaurant Management System",
    type: "Full Stack Project",
    description: "Comprehensive restaurant management system for orders, inventory, and staff.",
    link: "https://github.com/12liyab",
    tech: ["React", "Node.js", "MongoDB"],
    image: kturesturantImage
  },
   {
    title: "AI Tutor Platform",
    type: "Full Stack Project",
    description: "AI-powered tutoring platform offering personalized learning experiences.",
    link: "https://github.com/12liyab/AiTutor",
    tech: ["React", "Node.js", "MongoDB"],
    image: AitutorImage
  },
  {
    title: "Netflix Clone",
    type: "Full Stack Project",
    description: "A clone of the Netflix streaming platform with user authentication and media browsing features.",
    link: "https://github.com/12liyab",
    tech: ["React", "Node.js", "MongoDB"],
    image: netflixcloneImage
  },
];

const Projects = () => {
  return (
    <TooltipProvider>
      <section id="projects" className="py-20 px-4 md:px-6 bg-muted/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full shadow-glow" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-sm md:text-base">
              A showcase of my recent work and contributions to various digital platforms
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-card/60 backdrop-blur-xl border-2 border-border/50 hover:border-primary/60 hover:shadow-[0_20px_60px_rgba(147,51,234,0.3)] transition-all duration-500 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.image && (
                  <div className="relative h-44 md:h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-70" />
                    <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.type}
                    </div>
                  </div>
                )}
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg md:text-xl line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300 flex-shrink-0"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Tooltip key={tech}>
                      <TooltipTrigger asChild>
                        <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-card to-card/50 backdrop-blur rounded-lg border-2 border-border/30 hover:border-primary/60 hover:bg-primary/10 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_4px_20px_rgba(147,51,234,0.4)]">
                          <img 
                            src={techLogos[tech]} 
                            alt={`${tech} logo`}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-card/95 backdrop-blur border-primary/30">
                        <p className="font-semibold text-xs">{tech}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary/50 hover:bg-gradient-primary hover:text-white hover:border-primary hover:scale-105 hover:shadow-glow transition-all duration-300 font-semibold"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Live Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </TooltipProvider>
  );
};

export default Projects;
