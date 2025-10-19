import { Card, CardContent } from "./ui/card";
import { Code2, Database, Wrench, Rocket } from "lucide-react";

const skills = [
  { 
    category: "Frontend", 
    icon: Code2,
    color: "text-blue-500",
    items: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SCSS", level: 80 },
      { name: "Responsive Design", level: 88 }
    ]
  },
  { 
    category: "Backend", 
    icon: Database,
    color: "text-green-500",
    items: [
      { name: "Java", level: 82 },
      { name: "PHP Laravel", level: 75 },
      { name: "Blade", level: 78 },
      { name: "MySQL", level: 85 }
    ]
  },
  { 
    category: "Tools", 
    icon: Wrench,
    color: "text-orange-500",
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "IntelliJ IDEA", level: 80 }
    ]
  },
  { 
    category: "Learning", 
    icon: Rocket,
    color: "text-purple-500",
    items: [
      { name: "React", level: 70 },
      { name: "TypeScript", level: 65 },
      { name: "Node.js", level: 68 },
      { name: "Spring Boot", level: 72 }
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mb-8 sm:mb-10 md:mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skillGroup, index) => (
              <Card 
                key={skillGroup.category} 
                className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className={`p-1.5 sm:p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                      <skillGroup.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${skillGroup.color}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary">{skillGroup.category}</h3>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {skillGroup.items.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                          <span className="text-[10px] sm:text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
