import { GraduationCap, Globe, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">About Me</h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mb-8 sm:mb-10 md:mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
            <Card className="bg-gradient-card border-border hover:border-primary transition-colors">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Education</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Bachelor of Science in Information Technology
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover:border-primary transition-colors">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Interests</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Web Dev, Mobile Dev & Networking
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover:border-primary transition-colors sm:col-span-2 md:col-span-1">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Exploring</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Cybersecurity & Ethical Hacking
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center text-sm sm:text-base md:text-lg text-muted-foreground space-y-3 sm:space-y-4 px-2">
            <p>
              I'm a passionate BSIT student with a strong interest in multiple facets of technology. 
              From building modern web and mobile applications to understanding network infrastructure, 
              I'm constantly exploring new ways to leverage technology.
            </p>
            <p>
              Currently diving deep into web development and mobile app development, while also 
              building a solid foundation in networking. I'm also eager to explore the world of 
              cybersecurity and ethical hacking, driven by curiosity about how to build and secure 
              digital systems.
            </p>
            <p>
              My goal is to become a well-rounded tech professional who can create innovative solutions 
              while ensuring they are secure, scalable, and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
