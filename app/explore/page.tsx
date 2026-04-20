"use client";
import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  User, 
  Phone, 
  Zap, 
  ShieldCheck,
  ChevronRight,
  Loader2
} from "lucide-react";

// The real tech courses offered by Jengatech
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
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  // Replace 'YOUR_FORMSPREE_ID' with the ID you get from formspree.io
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

  const handleEnrollment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  if (status === "SUCCESS") {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center p-12 rounded-[3.5rem] bg-orange-50 border border-orange-100 animate-fade-in shadow-2xl shadow-orange-100">
          <div className="w-20 h-20 bg-[#FF6B00] rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-lg">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-4xl font-black text-[#0A0A0A] mb-4 tracking-tight">Application Received</h2>
          <p className="text-[#525252] mb-10 font-medium">
            Thank you for choosing Jengatech. Our admissions lead will contact you via WhatsApp or Phone within 24 hours.
          </p>
          <Button href="/" variant="primary" className="w-full py-6">Return to Home</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- 1. HEADER --- */}
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Zap size={12} className="text-[#FF6B00]" /> Student Intake 2026
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#0A0A0A] tracking-tighter leading-[0.9] mb-8">
            Choose Your <br /> <span className="text-[#FF6B00] italic">Evolution.</span>
          </h1>
          <p className="text-xl text-[#525252] max-w-2xl font-medium leading-relaxed">
            Select the technical track you wish to master. Once submitted, our 
            career consultants will reach out to finalize your onboarding.
          </p>
        </div>

        {/* --- 2. ENROLLMENT FLOW --- */}
        <form onSubmit={handleEnrollment} className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: COURSE SELECTION (7 Cols) --- */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#0A0A0A] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-[10px]">01</span>
                Select Your Programme
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
                      name="Requested_Course" 
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

          {/* --- RIGHT: ADMISSIONS FORM (5 Cols) --- */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="p-10 bg-[#0A0A0A] rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#FF6B00] mb-10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center text-[10px]">02</span>
                  Candidate Profile
                </h3>

                <div className="space-y-6 mb-12">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FF6B00] transition-colors" size={18} />
                    <input 
                      type="text" 
                      name="Student_Name" 
                      required 
                      placeholder="Full Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all font-medium placeholder:text-gray-600"
                    />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FF6B00] transition-colors" size={18} />
                    <input 
                      type="tel" 
                      name="Phone_Number" 
                      required 
                      placeholder="WhatsApp Phone Number" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all font-medium placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  disabled={status === "SUBMITTING" || !selectedCourse}
                  className="w-full py-6 rounded-2xl shadow-xl shadow-orange-900/40 group flex items-center justify-center gap-3 disabled:bg-gray-800 disabled:text-gray-500"
                >
                  {status === "SUBMITTING" ? (
                    <>Processing <Loader2 className="animate-spin" size={18} /></>
                  ) : (
                    <>Submit Application <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18}/></>
                  )}
                </Button>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">
                  <ShieldCheck size={14} className="text-[#FF6B00]" /> GDPR Compliant Encryption
                </div>
              </div>

              {/* Background abstract glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 blur-[100px] pointer-events-none" />
            </div>

            {status === "ERROR" && (
              <p className="mt-4 text-red-500 text-xs font-bold text-center">Something went wrong. Please try again or call support.</p>
            )}
          </div>
        </form>

      </div>
    </main>
  );
}