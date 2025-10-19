import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const timelineItems = [
  {
    type: "education",
    title: "Bachelor of Science in Information Technology",
    organization: "Your University",
    period: "2022 - Present",
    description: "Focusing on software development, web technologies, and database management.",
    icon: GraduationCap,
  },
  {
    type: "experience",
    title: "Web Development Projects and Mobile Apps",
    organization: "Personal & Academic",
    period: "2022 - Present",
    description: "Built various web applications and mobile apps using modern technologies including HTML, CSS, JavaScript, Java, React, and PHP Laravel.",
    icon: Briefcase,
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Education & Experience</h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mb-8 sm:mb-10 md:mb-12 rounded-full"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
            
            <div className="space-y-6 sm:space-y-8">
              {timelineItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-20 bg-gradient-card border-border hover:border-primary transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          item.type === "education" ? "bg-primary/20" : "bg-secondary/20"
                        }`}>
                          <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                            item.type === "education" ? "text-primary" : "text-secondary"
                          }`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold">{item.title}</h3>
                            <span className="text-xs sm:text-sm text-muted-foreground">{item.period}</span>
                          </div>
                          <p className="text-primary font-medium mb-2 text-sm sm:text-base">{item.organization}</p>
                          <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
