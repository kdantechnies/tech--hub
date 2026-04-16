import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "../../components/ui/Button";

export default function ContactPage() {
  return (
    <main className="bg-white pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Info */}
          <div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0A0A0A] mb-8 tracking-tighter">
              Let's build <br /> <span className="text-[#FF6B00]">together.</span>
            </h1>
            <p className="text-[#525252] text-lg mb-12">
              Have a question about our courses? Or need an enterprise solution? 
              Our team is ready to help you navigate your digital journey.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF6B00]"><Mail /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Us</p>
                  <p className="font-bold text-[#0A0A0A]">info@jengatech.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF6B00]"><Phone /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Call Us</p>
                  <p className="font-bold text-[#0A0A0A]">+234 (0) 800 JENGA TECH</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF6B00]"><MapPin /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Head Office</p>
                  <p className="font-bold text-[#0A0A0A]">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-[#F9FAFB] p-10 md:p-16 rounded-[3rem] border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#FF6B00] outline-none transition-all" />
                <input type="text" placeholder="Last Name" className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#FF6B00] outline-none transition-all" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#FF6B00] outline-none transition-all" />
              <textarea placeholder="Tell us about your project or inquiry" rows={5} className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#FF6B00] outline-none transition-all" />
              <Button className="w-full py-5">Send Message</Button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}