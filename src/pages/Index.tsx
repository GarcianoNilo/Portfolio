import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
