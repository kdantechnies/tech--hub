"use client";
import { useState, useEffect, useMemo } from "react";
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
  ArrowRight,
  CheckCircle2,
  Lock,
  UserCheck
} from "lucide-react";

export default function ConsultationPage() {
  // 1. REAL CALENDAR LOGIC (Nigerian Time)
  const calendarDays = useMemo(() => {
    const days = [];
    const options: Intl.DateTimeFormatOptions = { timeZone: "Africa/Lagos" };
    
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      // Adjust to Nigeria Time and add 'i' days
      date.setDate(date.getDate() + i);
      
      const dayName = new Intl.DateTimeFormat("en-US", { ...options, weekday: "short" }).format(date);
      const dayNumber = new Intl.DateTimeFormat("en-US", { ...options, day: "numeric" }).format(date);
      const monthName = new Intl.DateTimeFormat("en-US", { ...options, month: "long" }).format(date);
      const year = new Intl.DateTimeFormat("en-US", { ...options, year: "numeric" }).format(date);

      days.push({
        day: dayName,
        date: dayNumber,
        month: monthName,
        year: year,
        full: `${dayNumber} ${monthName} ${year}`
      });
    }
    return days;
  }, []);

  const [selectedDate, setSelectedDate] = useState(calendarDays[0].date);
  const [selectedMonth, setSelectedMonth] = useState(calendarDays[0].month);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("Technical Audit");

  const WHATSAPP_NUMBER = "2347036180749";
  const timeSlots = ["09:00", "11:00", "13:30", "15:00", "16:30"];

  // 2. DYNAMIC WHATSAPP LINK
  const getWhatsAppLink = () => {
    const message = `Hello Jengatech, I would like to book an executive consultation.\n\n` +
                    `*Service:* ${selectedService}\n` +
                    `*Date:* ${selectedDate} ${selectedMonth}\n` +
                    `*Preferred Time:* ${selectedTime} (WAT)\n\n` +
                    `Please confirm availability.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6 selection:bg-[#FF6B00] selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- EXECUTIVE HEADER --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#FF6B00]"></div>
            <span className="text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.4em]">Expert Strategy</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#0A0A0A] tracking-tighter leading-[0.9] mb-8">
            Executive <br /> <span className="italic text-[#FF6B00]">Strategy Room.</span>
          </h1>
          <p className="text-xl text-[#525252] max-w-2xl font-medium leading-relaxed">
            Direct access to our senior engineering leads. Map out technical roadmaps, 
            audits, or corporate academy enrollments instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT: CONSULTANT PROFILE & VIP ACCESS --- */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#F9FAFB] rounded-[3rem] border border-gray-100">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                     <img src="/images/ceo.jpg" alt="Lead" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#0A0A0A] text-lg leading-none mb-1">Roland O.</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00]">Head of Engineering</p>
                  </div>
               </div>
               
               <p className="text-sm text-[#525252] mb-6 leading-relaxed">
                 "I personally oversee every technical partnership. Select a slot and let's discuss how we can scale your infrastructure."
               </p>

               <div className="space-y-3">
                  {["NDA Protected Sessions", "Full Systems Review", "Implementation Roadmap"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-[#0A0A0A]">
                      <UserCheck size={14} className="text-[#FF6B00]" /> {item}
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-10 bg-[#0A0A0A] rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00]">Direct Line Active</span>
                   </div>
                   <Lock size={20} className="text-white/10" />
                </div>
                <h4 className="text-3xl font-bold mb-4 leading-tight">Instant Engineering <br/>Connect.</h4>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                  Bypass the scheduler for high-priority enterprise requirements.
                </p>
                <a 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-5 bg-[#FF6B00] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF8533] transition-all duration-500 shadow-xl shadow-orange-900/40"
                >
                  <MessageSquare size={18} fill="white" /> Connect on WhatsApp
                </a>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B00]/10 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>

          {/* --- RIGHT: AUTOMATED SCHEDULER (Dynamic Dates) --- */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3.5rem] border border-gray-100 shadow-premium overflow-hidden">
              <div className="p-10 md:p-14">
                <div className="flex justify-between items-center mb-12">
                   <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#0A0A0A]">Digital Intake</h3>
                   <span className="text-[10px] font-bold text-gray-400">Timezone: WAT (UTC+1)</span>
                </div>

                <div className="mb-12">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-1">Nature of Inquiry</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Technical Audit", "Academy Enrollment", "AI Implementation", "Product Strategy"].map((s) => (
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
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-1">{selectedMonth} {calendarDays[0].year}</p>
                      <div className="flex gap-2">
                        {calendarDays.map((d) => (
                          <button 
                            key={d.date}
                            onClick={() => {
                                setSelectedDate(d.date);
                                setSelectedMonth(d.month);
                            }}
                            className={`flex-1 py-4 rounded-2xl flex flex-col items-center gap-1 transition-all border ${selectedDate === d.date ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-lg shadow-orange-100' : 'bg-gray-50 text-[#525252] border-transparent hover:border-gray-200'}`}
                          >
                            <span className="text-[9px] font-black uppercase">{d.day}</span>
                            <span className="text-sm font-black">{d.date}</span>
                          </button>
                        ))}
                      </div>
                   </div>

                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-1">Available Hours</p>
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
                   <a 
                    href={selectedTime ? getWhatsAppLink() : "#"}
                    target="_blank"
                    className={`w-full py-6 rounded-2xl shadow-xl shadow-orange-100 flex items-center justify-center gap-3 transition-all font-black text-xs uppercase tracking-widest ${!selectedTime ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#0A0A0A] text-white hover:bg-[#FF6B00]'}`}
                   >
                     {selectedTime ? `Finalize & Request for ${selectedTime}` : "Select a Time to Continue"} 
                     
                   </a>
                   <p className="mt-6 text-center text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                     <ShieldCheck size={12}/> Instant secure connect via WhatsApp
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM PREP CHECKLIST --- */}
        <div className="mt-32 pt-16 border-t border-gray-50">
           <h5 className="text-center font-black uppercase tracking-[0.4em] text-[10px] text-gray-400 mb-12">Meeting Preparation</h5>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Define Goals", desc: "Know your primary objective for the call." },
                { title: "Technical Context", desc: "Have your current tech stack/plan ready." },
                { title: "Stakeholders", desc: "Ensure key decision makers are informed." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-[#F9FAFB] border border-gray-50">
                   <CheckCircle2 className="text-[#FF6B00] shrink-0" size={20} />
                   <div>
                     <p className="font-bold text-[#0A0A0A] text-sm mb-1">{item.title}</p>
                     <p className="text-xs text-[#525252] leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
}