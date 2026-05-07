"use client";
import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { 
  ArrowRight, 
  CheckCircle2, 
  User, 
  Phone, 
  Zap, 
  ShieldCheck,
  ChevronRight,
  MessageSquare,
  Sparkles
} from "lucide-react";

const ENROLLMENT_COURSES = [
  "Software Engineering",
  "Cybersecurity Essentials",
  "AI & Machine Learning",
  "Cloud Computing",
  "UI/UX Design",
  "Mobile App Development",
  "Data Science",
  "DevOps Engineering",
  "Blockchain Technology"
];

export default function ExplorePage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const WHATSAPP_NUMBER = "2347036180749"; // Your Aba, Nigeria number

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the professional message
    const message = `*NEW STUDENT APPLICATION - JENGATECH*%0A%0A` +
                    `*Full Name:* ${name}%0A` +
                    `*WhatsApp:* ${whatsapp}%0A` +
                    `*Requested Course:* ${selectedCourse}%0A%0A` +
                    `Hello Jengatech Admissions, I am interested in enrolling for the ${selectedCourse} track. Please provide more details on the upcoming intake.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    // Open in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white">
      <div className="max-width-container px-6">
        
        {/* --- 1. HEADER --- */}
        <div className="mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em] mb-8 w-fit">
            <Sparkles size={12} fill="#FF6B00" /> Jengatech Intake 2026
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#0A0A0A] tracking-tighter leading-[0.9] mb-8">
            Choose your <br /> <span className="text-[#FF6B00] italic">technical path.</span>
          </h1>
          <p className="text-xl text-[#525252] max-w-2xl font-medium leading-relaxed">
            Choose your preferred learning path, submit your details, and get connected directly to our admissions team on WhatsApp for instant guidance and enrollment support.
          </p>
        </div>

        {/* --- 2. ADMISSION FLOW --- */}
        <form onSubmit={handleWhatsAppRedirect} className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: COURSE SELECTION --- */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#0A0A0A] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-[10px]">01</span>
                Select Your Track
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {ENROLLMENT_COURSES.map((course) => (
                  <label 
                    key={course}
                    className={`relative p-6 rounded-[2rem] border-2 transition-all cursor-pointer group flex items-center justify-between ${
                      selectedCourse === course 
                      ? 'border-[#FF6B00] bg-orange-50 shadow-lg shadow-orange-100/50' 
                      : 'border-gray-100 bg-white hover:border-gray-300'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="course" 
                      value={course}
                      required
                      onChange={() => setSelectedCourse(course)}
                      className="hidden"
                    />
                    <span className={`font-bold text-sm tracking-tight ${selectedCourse === course ? 'text-[#FF6B00]' : 'text-[#0A0A0A]'}`}>
                      {course}
                    </span>
                    {selectedCourse === course ? (
                      <CheckCircle2 size={20} className="text-[#FF6B00]" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-200 group-hover:border-[#FF6B00] transition-colors" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: CANDIDATE PROFILE --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="p-10 bg-[#0A0A0A] rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#FF6B00] mb-10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center text-[10px]">02</span>
                  Candidate Profile
                </h3>

                <div className="space-y-6 mb-12">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#FF6B00] transition-colors" size={18} />
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all font-medium placeholder:text-gray-600"
                    />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#FF6B00] transition-colors" size={18} />
                    <input 
                      type="tel" 
                      required 
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="WhatsApp Number" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all font-medium placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={!selectedCourse || !name || !whatsapp}
                  className="w-full py-6 rounded-2xl bg-[#FF6B00] text-white font-black text-xs uppercase tracking-widest hover:bg-[#FF8533] transition-all flex items-center justify-center gap-3 shadow-xl shadow-orange-900/40 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  Apply via WhatsApp <MessageSquare size={18} fill="white" className="group-hover:scale-110 transition-transform" />
                </button>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-50">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-400">
                    <ShieldCheck size={14} className="text-[#FF6B00]" /> Verified Intake
                  </div>
                  <span className="text-[9px] font-black uppercase text-gray-400">Step 2 of 2</span>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF6B00]/10 blur-[100px] pointer-events-none" />
            </div>

            <p className="mt-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">
                Direct Connection • No Processing Delay
            </p>
          </div>
        </form>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-32 pt-16 border-t border-gray-50 flex flex-wrap justify-between items-center gap-8">
            <div className="max-w-sm">
                <h4 className="font-black text-[#0A0A0A] uppercase tracking-tighter text-2xl mb-2">Technical Screening</h4>
                <p className="text-sm text-[#525252] leading-relaxed">After connecting with our admissions board, you’ll complete a brief placement interview with the Dean of Pedagogy to ensure the track aligns with your current skill level and goals.</p>
            </div>
            <Button href="/education" variant="outline" className="rounded-2xl border-[#0A0A0A]">
                Reopen Course Outline
            </Button>
        </div>
      </div>
    </main>
  );
}