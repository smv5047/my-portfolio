import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onNavigate={{
          about: () => scrollTo(aboutRef),
          skills: () => scrollTo(skillsRef),
          portfolio: () => scrollTo(portfolioRef),
          blog: () => scrollTo(blogRef),
          contact: () => scrollTo(contactRef),
        }}
      />
      <Hero />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={blogRef}>
        <Blog />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
}