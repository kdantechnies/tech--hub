"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll to add background blur and shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stability Fix for mobile navigation
  const closeMenu = () => {
    requestAnimationFrame(() => {
      setIsOpen(false);
    });
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Academy", href: "/education" },
    { name: "Solutions", href: "/solutions" },
    { name: "Explore", href: "/explore" }, 
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled || isOpen 
        ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-width-container flex items-center justify-between">
        
        {/* --- LOGO & BRANDING --- */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-11 md:h-11 transition-transform group-hover:rotate-12 duration-300">
            <Image 
              src="/logo.png" 
              alt="Jengatech Logo" 
              fill 
              className="object-contain"
              priority
              sizes="(max-width: 768px) 40px, 50px" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-xl font-black tracking-tighter leading-none text-[#0A0A0A]">
              JENGA<span className="text-[#FF6B00]">TECH</span>
            </span>
            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 mt-1">
              think it, build it.
            </span>
          </div>
        </Link>
        
        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#525252]">
            {navLinks.map((link) => {
              // Hide "Explore" link on Desktop as requested
              if (link.name === "Explore") return null;
              
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`transition-colors relative group ${isActive ? 'text-[#FF6B00]' : 'hover:text-[#FF6B00]'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF6B00] transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>
          <Button href="/consultation" className="py-2.5 px-6 text-[10px] shadow-sm">
            Consultation
          </Button>
        </div>

        {/* --- MOBILE TOGGLE BUTTON --- */}
        <button 
          className="md:hidden p-2 text-[#0A0A0A] bg-gray-50 rounded-xl active:scale-90 transition-all" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- PROFESSIONAL MOBILE DROPDOWN (Floating Card) --- */}
      <div 
        className={`md:hidden absolute top-[calc(100%+10px)] left-6 right-6 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top ${
          isOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-4 invisible"
        }`}
      >
        <div className="p-8 flex flex-col gap-1">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 px-3">Navigation</p>
          
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={closeMenu}
                prefetch={false}
                className={`flex items-center justify-between group p-4 rounded-2xl transition-all ${isActive ? 'bg-orange-50' : 'hover:bg-gray-50'}`}
              >
                <span className={`text-sm font-black uppercase tracking-widest ${isActive ? 'text-[#FF6B00]' : 'text-[#0A0A0A]'}`}>
                  {link.name}
                </span>
                <ArrowRight size={16} className={`${isActive ? 'text-[#FF6B00]' : 'text-gray-300'} group-hover:translate-x-1 transition-transform`} />
              </Link>
            );
          })}
          
          <div className="mt-6 pt-6 border-t border-gray-50">
            <Button 
              href="/consultation" 
              onClick={closeMenu} 
              className="w-full py-5 text-[11px] shadow-lg shadow-orange-100"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};