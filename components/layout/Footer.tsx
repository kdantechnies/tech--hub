import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-brand-soft border-t border-gray-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-black tracking-tighter mb-4 block">
            JENGA<span className="text-brand-orange">TECH</span>
          </Link>
          <p className="text-brand-gray text-sm leading-relaxed">
            Building the next generation of African tech leaders through innovation and practical education.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-brand-gray">
            <li><Link href="/about" className="hover:text-brand-orange">About Us</Link></li>
            <li><Link href="/explore" className="hover:text-brand-orange">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-brand-orange">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-brand-gray">
            <li><Link href="/education" className="hover:text-brand-orange">Tech Academy</Link></li>
            <li><Link href="/solutions" className="hover:text-brand-orange">Software Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-sm text-brand-gray">Aba, Nigeria</p>
          <p className="text-sm text-brand-gray">+234 8130963475</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 text-center text-sm text-brand-gray">
        © {new Date().getFullYear()} Jengatech Africa. All rights reserved.
      </div>
    </footer>
  );
};