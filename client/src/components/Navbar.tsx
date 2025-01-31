import { Button } from "@/components/ui/button";

interface NavbarProps {
  onNavigate: {
    about: () => void;
    skills: () => void;
    portfolio: () => void;
    blog: () => void;
    contact: () => void;
  };
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav 
      className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a 
          href="/" 
          className="text-xl font-bold"
          aria-label="Home"
        >
          Jane Doe
        </a>
        <div 
          className="hidden md:flex space-x-4"
          role="menubar"
          aria-label="Navigation menu"
        >
          <Button 
            variant="ghost" 
            onClick={onNavigate.about}
            role="menuitem"
            aria-label="About section"
          >
            About
          </Button>
          <Button 
            variant="ghost" 
            onClick={onNavigate.skills}
            role="menuitem"
            aria-label="Skills section"
          >
            Skills
          </Button>
          <Button 
            variant="ghost" 
            onClick={onNavigate.portfolio}
            role="menuitem"
            aria-label="Portfolio section"
          >
            Portfolio
          </Button>
          <Button 
            variant="ghost" 
            onClick={onNavigate.blog}
            role="menuitem"
            aria-label="Blog section"
          >
            Blog
          </Button>
          <Button 
            variant="ghost" 
            onClick={onNavigate.contact}
            role="menuitem"
            aria-label="Contact section"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
}