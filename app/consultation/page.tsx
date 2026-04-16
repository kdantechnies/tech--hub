"use client";
import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { 
  Video, 
  Clock, 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  Globe,
  ArrowUpRight,
  MessageSquare,
  Zap,
  ArrowRight // Added this missing import
} from "lucide-react";

export default function ConsultationPage() {
  const [selectedDate, setSelectedDate] = useState("16");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("Technical Audit");

  const timeSlots = ["09:00", "11:00", "13:30", "15:00", "16:30"];
  const calendarDays = [
    { day: "Mon", date: "14" },
    { day: "Tue", date: "15" },
    { day: "Wed", date: "16" },
    { day: "Thu", date: "17" },
    { day: "Fri", date: "18" },
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6 selection:bg-[#FF6B00] selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- EXECUTIVE HEADER --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#FF6B00]"></div>
            <span className="text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.4em]">Instant Access</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#0A0A0A] tracking-tighter leading-[0.9] mb-8">
            Technical <br /> <span className="italic text-[#FF6B00]">Advisory.</span>
          </h1>
          <p className="text-xl text-[#525252] max-w-2xl font-medium leading-relaxed">
            Direct lines for enterprise-grade consultancy. No forms, no waiting—just instant engineering intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT: INSTANT CHANNELS --- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. DIRECT CEO LINE */}
            <div className="p-10 bg-[#0A0A0A] rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00]">Priority Line: Online</span>
                   </div>
                   <Phone size={20} className="text-white/20" />
                </div>
                <h4 className="text-3xl font-bold mb-4 leading-tight text-white">Direct Executive <br/>Consultation.</h4>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-xs">
                  Speak directly with our Head of Engineering for high-stakes enterprise projects and global partnerships.
                </p>
                
                <a 
                  href="tel:+2348123456789" 
                  className="inline-flex items-center justify-center gap-3 w-full py-5 bg-white text-[#0A0A0A] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF6B00] hover:text-white transition-all duration-500 group"
                >
                  Call Now <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B00]/10 blur-[80px] rounded-full" />
            </div>

            {/* 2. INSTANT WHATSAPP CHAT */}
            <div className="p-10 bg-[#F9FAFB] rounded-[3rem] border border-gray-100 group hover:border-[#FF6B00]/20 transition-all">
               <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#FF6B00] shadow-sm border border-gray-50">
                    <MessageSquare size={24} />
                  </div>
                  <Zap size={20} className="text-gray-200" />
               </div>
               <h4 className="text-2xl font-bold text-[#0A0A0A] mb-3">WhatsApp Tech-Desk.</h4>
               <p className="text-[#525252] text-sm mb-8 leading-relaxed">
                 Instant chat with our lead developers for technical inquiries and Academy enrollment help.
               </p>
               <a 
                  href="https://wa.me/2348123456789" 
                  target="_blank"
                  className="text-xs font-black uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF6B00] flex items-center gap-2 transition-colors"
                >
                  Start Instant Chat <ArrowRight size={14} />
                </a>
            </div>
          </div>

          {/* --- RIGHT: AUTOMATED SESSION SCHEDULER --- */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3.5rem] border border-gray-100 shadow-premium overflow-hidden">
              <div className="p-10 md:p-14">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#0A0A0A] mb-10 pb-6 border-b border-gray-50 flex items-center justify-between">
                  <span>Automated Session Scheduler</span>
                  <span className="text-[#FF6B00]">Step 1 of 2</span>
                </h3>

                <div className="mb-12">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-1">Consultation Category</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Technical Audit", "Academy Roadmap", "AI Integration", "Product Strategy"].map((s) => (
                        <button 
                          key={s}
                          onClick={() => setSelectedService(s)}
                          className={`p-4 rounded-2xl text-left text-xs font-bold transition-all border ${selectedService === s ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-xl' : 'bg-gray-50 text-[#525252] border-transparent hover:border-gray-200'}`}
                        >
                          {s}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-1">Available Dates</p>
                      <div className="flex gap-2">
                        {calendarDays.map((d) => (
                          <button 
                            key={d.date}
                            onClick={() => setSelectedDate(d.date)}
                            className={`flex-1 py-4 rounded-2xl flex flex-col items-center gap-1 transition-all border ${selectedDate === d.date ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-lg shadow-orange-100' : 'bg-gray-50 text-[#525252] border-transparent hover:border-gray-200'}`}
                          >
                            <span className="text-[9px] font-black uppercase">{d.day}</span>
                            <span className="text-sm font-black">{d.date}</span>
                          </button>
                        ))}
                      </div>
                   </div>

                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-1">Time Slots (WAT)</p>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((t) => (
                          <button 
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`py-3 rounded-xl text-[10px] font-black uppercase transition-all border ${selectedTime === t ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]' : 'bg-white text-[#0A0A0A] border-gray-100 hover:border-[#FF6B00]'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="mt-12 pt-12 border-t border-gray-50">
                   <Button 
                    className="w-full py-6 rounded-2xl shadow-xl shadow-orange-100 group"
                    disabled={!selectedTime}
                   >
                     {selectedTime ? `Finalize ${selectedService} for ${selectedTime}` : "Select a Time Slot"} <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM TRUST SECTIONS --- */}
        <div className="mt-32 pt-16 border-t border-gray-50 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <ShieldCheck className="text-[#FF6B00]" size={28} />
              <h5 className="font-bold text-[#0A0A0A]">Encrypted Channels</h5>
              <p className="text-sm text-[#525252] leading-relaxed">All strategic sessions are end-to-end encrypted and strictly confidential.</p>
            </div>
            <div className="flex flex-col gap-4">
              <Globe className="text-[#FF6B00]" size={28} />
              <h5 className="font-bold text-[#0A0A0A]">Global Availability</h5>
              <p className="text-sm text-[#525252] leading-relaxed">Coordinating across WAT, GMT, and EST time zones for international partners.</p>
            </div>
            <div className="flex flex-col gap-4">
              <Video className="text-[#FF6B00]" size={28} />
              <h5 className="font-bold text-[#0A0A0A]">HD Virtual Suite</h5>
              <p className="text-sm text-[#525252] leading-relaxed">Seamless remote infrastructure for technical walkthroughs and audits.</p>
            </div>
        </div>

      </div>
    </main>
  );
}