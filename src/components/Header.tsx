import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex flex-col z-50">
            <span className={`font-heading font-bold text-xl md:text-2xl leading-none tracking-wider ${isScrolled ? 'text-secondary' : 'text-secondary'}`}>
              SWAP
            </span>
            <span className={`font-heading text-xs tracking-[0.2em] mt-1 ${isScrolled ? 'text-accent' : 'text-accent'}`}>
              UNISEX SALON
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary/80 hover:text-accent text-sm font-medium tracking-wide transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-accent text-primary px-6 py-3 font-heading font-semibold text-sm tracking-widest hover:bg-secondary transition-colors"
            >
              BOOK APPOINTMENT
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-secondary z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primary z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-secondary font-heading text-3xl tracking-widest hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 bg-accent text-primary px-8 py-4 font-heading font-bold text-lg tracking-widest w-full text-center"
          >
            BOOK APPOINTMENT
          </a>
        </nav>
      </div>
    </>
  );
}
