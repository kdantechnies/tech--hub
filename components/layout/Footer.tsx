import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  // Manual SVG Social Icons to prevent Lucide library version errors
  const LinkedinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  );

  const TwitterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.1-3 2.8c1.4.3 2.2 1.1 3 3 .5 1.5 0 3.3-1.5 4.3C20.1 18.6 14.6 22 9 22c-5 0-7-3-7-3 2 0 4-1 5-3-2.1-.4-4.5-1.5-4.5-5 0-1 .4-1.8 1.1-2.5-.3-.4-1.1-2.1-.1-4.1 0 0 2 0 4 3 1.1-.3 2.5-.3 4 0 2-3 4-3 4-3 1 2 .2 3.7-.1 4.1.7.7 1.1 1.5 1.1 2.5z"/></svg>
  );

  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-width-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 transition-transform group-hover:rotate-12 duration-300">
                <Image 
                  src="/Logo.png" 
                  alt="Jengatech Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-[#0A0A0A]">
                JENGA<span className="text-[#FF6B00]">TECH</span>
              </span>
            </Link>
            <p className="text-[#525252] text-sm leading-relaxed max-w-xs mb-8">
              Building the next generation of African tech leaders through innovation, 
              elite education, and industrial grade engineering.
            </p>
            {/* SOCIAL LINKS */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/jengatech" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#0A0A0A] hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* COLUMN 2: COMPANY */}
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-[#0A0A0A] mb-8">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-[#525252]">
              <li><Link href="/about" className="hover:text-[#FF6B00] transition-colors">Our Vision</Link></li>
              <li><Link href="/explore" className="hover:text-[#FF6B00] transition-colors">Admission Hub</Link></li>
              <li><Link href="/consultation" className="hover:text-[#FF6B00] transition-colors">Strategy Session</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-[#0A0A0A] mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-sm font-medium text-[#525252]">
              <li><Link href="/education" className="hover:text-[#FF6B00] transition-colors">Tech Academy</Link></li>
              <li><Link href="/solutions" className="hover:text-[#FF6B00] transition-colors">Software Engineering</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-[#0A0A0A] mb-8">Get in Touch</h4>
            <div className="space-y-4">
               <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Office</p>
                  <p className="text-sm font-bold text-[#0A0A0A]">Plot 13 Ekenna, Aba, Nigeria</p>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Direct Line</p>
                  <a href="tel:+2348130963475" className="text-sm font-bold text-[#0A0A0A] hover:text-[#FF6B00]">+234 7036180749</a>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Mail US</p>
                  <a href="mailto:info@jengatech.com" className="text-sm font-bold text-[#0A0A0A] hover:text-[#FF6B00]">support@jengatechafrica.com</a>
               </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Jengatech Africa. All rights reserved.
          </p>
          <div className="flex gap-8">
             <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF6B00]">Privacy Policy</Link>
             <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF6B00]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};