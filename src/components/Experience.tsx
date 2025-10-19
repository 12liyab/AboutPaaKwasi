import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "thenovus.Solutions",
    role: "Lead Developer (Backend)",
    period: "2025 - Present",
    responsibilities: [
      "Led backend architecture, API development, and deployment pipelines for enterprise-grade web applications",
      "Optimized database performance and implemented scalable microservices architecture",
      "Mentored junior developers and established coding standards across the team"
    ]
  },
  
  {
    company: "Coldsis Ghana Limited",
    role: "Software Engineer",
    period: "2024 - 2025",
    responsibilities: [
      "Built scalable backend systems and contributed to full-stack projects",
      "Implemented RESTful APIs and GraphQL endpoints for various client applications",
      "Performed database optimization and integration with third-party services"
    ]
  },
   
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full shadow-glow" />
        </div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />
          
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="relative bg-card/60 backdrop-blur-xl border-2 border-border/50 hover:border-primary/60 hover:shadow-[0_20px_60px_rgba(147,51,234,0.3)] transition-all duration-500 animate-fade-in ml-0 md:ml-20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute -left-[4.5rem] top-8 w-4 h-4 bg-gradient-primary rounded-full shadow-glow ring-4 ring-background" />
              
              <CardHeader className="pb-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2.5 md:p-3 bg-gradient-primary rounded-xl shadow-glow flex-shrink-0">
                    <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                          {exp.role}
                        </h3>
                        <span className="text-xs md:text-sm text-muted-foreground font-semibold bg-primary/10 px-3 py-1 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-base md:text-lg text-foreground/90 font-medium">{exp.company}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground group">
                      <span className="text-primary mt-1 text-lg group-hover:scale-125 transition-transform duration-300">▹</span>
                      <span className="text-sm md:text-base leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
