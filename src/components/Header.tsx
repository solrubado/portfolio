import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-400">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md mt-4 pb-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-blue-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-400 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;