
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-semibold">Bia Ferrario</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground/80 hover:text-accent text-sm font-medium transition-colors">
              Início
            </a>
            <a href="#arte" className="text-foreground/80 hover:text-accent text-sm font-medium transition-colors">
              Arte
            </a>
            <a href="#poemas" className="text-foreground/80 hover:text-accent text-sm font-medium transition-colors">
              Poemas
            </a>
            <a href="#livro" className="text-foreground/80 hover:text-accent text-sm font-medium transition-colors">
              Livro
            </a>
            <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-white">
              Instagram
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background z-40 pt-16 transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className="container-custom py-8 flex flex-col items-center space-y-6">
          <a href="#inicio" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Início
          </a>
          <a href="#arte" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Arte
          </a>
          <a href="#poemas" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Poemas
          </a>
          <a href="#livro" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Livro
          </a>
          <Button variant="outline" className="mt-4 w-full border-accent text-accent hover:bg-accent hover:text-white">
            Instagram
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
