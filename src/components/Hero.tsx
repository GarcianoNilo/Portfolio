import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const textArray = [
    "Web Developer",
    "Mobile Developer",
    "Network Enthusiast",
    "Cybersecurity Explorer"
  ];
  
  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentFullText = textArray[currentTextIndex];
      
      if (!isDeleting) {
        // Typing
        setTypedText(currentFullText.slice(0, charIndex));
        charIndex++;
        
        if (charIndex > currentFullText.length) {
          // Finished typing, wait before deleting
          isDeleting = true;
          timeoutId = setTimeout(type, 2000); // Wait 2 seconds
          return;
        }
        timeoutId = setTimeout(type, 100); // Typing speed
      } else {
        // Deleting
        setTypedText(currentFullText.slice(0, charIndex));
        charIndex--;
        
        if (charIndex < 0) {
          // Finished deleting, move to next text
          isDeleting = false;
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          charIndex = 0;
          timeoutId = setTimeout(type, 500); // Wait before typing next
          return;
        }
        timeoutId = setTimeout(type, 50); // Deleting speed (faster)
      }
    };

    timeoutId = setTimeout(type, 500);

    return () => clearTimeout(timeoutId);
  }, [currentTextIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary rounded-full text-primary text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors">
              💻 BSIT Student
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-in px-2">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Nilo Garciano Jr.
            </span>
          </h1>
          
          <div className="h-14 sm:h-16 md:h-20 mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              {typedText}
              <span className="inline-block w-0.5 h-5 sm:h-6 md:h-8 bg-primary ml-1 animate-pulse"></span>
            </p>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Passionate about technology and innovation. Building web & mobile applications, 
            exploring network infrastructure, and diving into the world of cybersecurity.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all hover:shadow-glow group w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
              onClick={() => window.open("https://github.com/GarcianoNilo", "_blank")}
            >
              <Download className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
              View Resume
            </Button>
          </div>
          
          <div className="flex gap-3 sm:gap-4 justify-center px-4">
            {[
              { href: "https://github.com/GarcianoNilo", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/nilo-garciano-jr-807a9b279", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:nilojrgarciano2@gmail.com", icon: Mail, label: "Email" }
            ].map(({ href, icon: Icon, label }) => (
              <a 
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="group p-3 sm:p-4 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 border border-border hover:border-primary hover:shadow-glow"
                aria-label={label}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
