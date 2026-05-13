"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { 
  ExternalLink, 
  Layers, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  CircleDollarSign, 
  Lock,
  ArrowRight,
  Code2
} from "lucide-react";

// Mock Data for Apps built from scratch
const APPS = [
  {
    id: 1,
    title: "EcoTrack Logistics",
    description: "A full-scale supply chain management system with real-time GPS tracking and automated invoicing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "Web Enterprise",
    status: "SOLD",
    stack: ["Next.js", "Node.js", "AWS"],
    url: "#"
  },
  {
    id: 2,
    title: "HealthConnect AI",
    description: "Predictive diagnostic tool for rural clinics, allowing doctors to sync data offline and analyze via AI.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    category: "Mobile App",
    status: "AVAILABLE",
    stack: ["React Native", "Python", "Firebase"],
    url: "#"
  },
  {
    id: 3,
    title: "SecurePay Gateway",
    description: "A high-security payment processing middleware built for multi-currency African transactions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    category: "Fintech",
    status: "SOLD",
    stack: ["Golang", "PostgreSQL", "Docker"],
    url: "#"
  },
  {
    id: 4,
    title: "EduVibe LMS",
    description: "Learning management system with interactive video streaming and automated student grading.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    category: "EdTech",
    status: "AVAILABLE",
    stack: ["TypeScript", "Next.js", "Prisma"],
    url: "#"
  }
];

export default function OurAppPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white">
      <div className="max-width-container px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#FF6B00]"></div>
            <span className="text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.4em]">Software Foundry</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#0A0A0A] tracking-tighter leading-[0.9] mb-8">
            Built from <br /> <span className="italic text-[#FF6B00]">absolute zero.</span>
          </h1>
          <p className="text-xl text-[#525252] max-w-2xl font-medium leading-relaxed">
            Our portfolio of proprietary software. We don't use templates—every line of 
            code is engineered from scratch for performance and scale.
          </p>
        </div>

        {/* --- APPS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {APPS.map((app) => (
            <div key={app.id} className="group relative flex flex-col">
              
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden bg-gray-100 mb-8 border border-gray-100 shadow-premium">
                <Image 
                  src={app.image} 
                  alt={app.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* STATUS BADGE */}
                <div className="absolute top-8 left-8 z-10">
                  <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2 ${
                    app.status === "SOLD" 
                    ? "bg-[#0A0A0A] text-white" 
                    : "bg-[#FF6B00] text-white"
                  }`}>
                    {app.status === "SOLD" ? <Lock size={12} /> : <CircleDollarSign size={12} />}
                    {app.status}
                  </span>
                </div>

                {/* OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                   <Link 
                    href={app.url}
                    className="bg-white text-[#0A0A0A] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#FF6B00] hover:text-white transition-all shadow-2xl"
                   >
                     Live Preview <ExternalLink size={16} />
                   </Link>
                </div>
              </div>

              {/* INFO SECTION */}
              <div className="px-4">
                <div className="flex justify-between items-start mb-4">
                   <div>
                      <p className="text-[#FF6B00] font-black text-[10px] uppercase tracking-widest mb-1">{app.category}</p>
                      <h3 className="text-3xl font-black text-[#0A0A0A] tracking-tight">{app.title}</h3>
                   </div>
                   <div className="flex gap-2">
                      {app.stack.map(s => (
                        <span key={s} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-[9px] font-bold text-gray-400">{s}</span>
                      ))}
                   </div>
                </div>
                
                <p className="text-[#525252] leading-relaxed mb-8 font-medium">
                  {app.description}
                </p>

                <Link 
                  href={app.url} 
                  className="inline-flex items-center gap-2 font-black text-[11px] uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF6B00] transition-colors group-link"
                >
                  Project Technical Specs <ArrowRight size={16} className="group-link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- CUSTOM BUILD CTA --- */}
        <div className="mt-32 p-12 md:p-24 bg-[#0A0A0A] rounded-[4rem] text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                Need a custom <br/> <span className="text-[#FF6B00]">solution built?</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
                Stop using off-the-shelf templates. Let's architect a solution that 
                belongs solely to your company.
              </p>
              <Button href="/consultation" className="px-12 py-6 bg-[#FF6B00] border-none shadow-orange-900/50">
                Start Architecture Review
              </Button>
           </div>
           {/* Abstract background flair */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 blur-[100px] rounded-full" />
           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />
        </div>

      </div>
    </main>
  );
}