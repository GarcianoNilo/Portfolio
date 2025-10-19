import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mb-8 sm:mb-10 md:mb-12 rounded-full"></div>
          
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="bg-gradient-card border-border hover:border-primary transition-all group">
                <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                    <a 
                      href="mailto:nilojrgarciano2@gmail.com" 
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      nilojrgarciano2@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border hover:border-primary transition-all group">
                <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-colors flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Location</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">8700 Malaybalay, Bukidnon, Philippines</p>
                  </div>
                </CardContent>
              </Card>

              <div className="p-4 sm:p-6 bg-gradient-card border border-border rounded-lg">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Let's Connect!</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  I'd love to hear from you!
                </p>
                <div className="flex gap-2 sm:gap-3">
                  <a 
                    href="https://github.com/GarcianoNilo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 hover:bg-primary/20 border border-primary rounded-lg transition-colors text-xs sm:text-sm"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nilo-garciano-jr-807a9b279" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary rounded-lg transition-colors text-xs sm:text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-background border-border focus:border-primary text-sm h-10 sm:h-11"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border focus:border-primary text-sm h-10 sm:h-11"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none text-sm"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity h-10 sm:h-11 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
