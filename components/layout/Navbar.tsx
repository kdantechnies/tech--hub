"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Academy", href: "/education" },
    { name: "Solutions", href: "/solutions" },
    { name: "Explore", href: "/explore" }, // this explore is hidden on desktop view. 
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-50" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-[#0A0A0A]">
          JENGA<span className="text-[#FF6B00]">TECH</span>
        </Link>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#525252]">
            {navLinks.map((link) => {
              if (link.name === "Explore") return null;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-[#FF6B00] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>
          <Button href="/consultation" className="py-2.5 px-6 text-[10px]">
            Consultation
          </Button>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          className="md:hidden p-2 text-[#0A0A0A] bg-gray-50 rounded-xl active:scale-90 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* PROFESSIONAL MOBILE DROPDOWN (Not Full Screen) */}
      <div 
        className={`md:hidden absolute top-[calc(100%+10px)] left-6 right-6 bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top ${
          isOpen 
            ? "opacity-100 scale-100 translate-y-0 visible" 
            : "opacity-0 scale-95 -translate-y-4 invisible"
        }`}
      >
        <div className="p-8 flex flex-col gap-1">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 px-2">Navigation</p>
          
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between group p-4 rounded-2xl hover:bg-orange-50 transition-all"
            >
              <span className="text-sm font-black uppercase tracking-widest text-[#0A0A0A] group-hover:text-[#FF6B00]">
                {link.name}
              </span>
              <ArrowRight size={16} className="text-gray-300 group-hover:text-[#FF6B00] transition-all group-hover:translate-x-1" />
            </Link>
          ))}
          
          <div className="mt-6 pt-6 border-t border-gray-50">
            <Button 
              href="/consultation" 
              onClick={() => setIsOpen(false)}
              className="w-full py-5 text-[11px] shadow-orange-200"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};