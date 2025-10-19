import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex gap-3 sm:gap-4">
            <a 
              href="https://github.com/GarcianoNilo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-background hover:bg-primary/20 rounded-full transition-colors border border-border"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nilo-garciano-jr-807a9b279" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-background hover:bg-primary/20 rounded-full transition-colors border border-border"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="mailto:nilojrgarciano2@gmail.com"
              className="p-2.5 sm:p-3 bg-background hover:bg-primary/20 rounded-full transition-colors border border-border"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          
          <div className="text-center text-muted-foreground px-4">
            <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" /> by Nilo Garciano Jr.
            </p>
            <p className="text-xs sm:text-sm mt-2">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
