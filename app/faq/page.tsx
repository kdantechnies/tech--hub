"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { 
  Search, 
  Plus, 
  Minus, 
  MessageSquare, 
  ArrowRight, 
  HelpCircle,
  Zap,
  ChevronRight
} from "lucide-react";

const FAQ_DATA = [
  {
    category: "Beginner Concerns",
    questions: [
      { q: "I have no tech background. Can I still learn?", a: "Yes. Many of our students start with zero experience. Our programs are designed to help beginners grow step-by-step from foundational knowledge to practical skills." },
      { q: "I didn’t study computer science. Is tech still for me?", a: "Absolutely. Tech is no longer limited to computer science graduates. Students, business owners, creatives, marketers, bankers, teachers, and unemployed graduates are all building successful careers in tech." },
      { q: "Is tech difficult to learn?", a: "Tech requires consistency more than genius. With proper guidance, practical projects, and mentorship, learning becomes easier and more structured." },
      { q: "What if I’m not good at mathematics?", a: "Not every tech field requires advanced mathematics. Skills like digital marketing, UI/UX design, product management, content strategy, and data tools can still be learned successfully without being a math expert." },
      { q: "Am I too old to start learning tech?", a: "No. At Jenga Tech, we have professionals in their 30s, 40s, and beyond who are successfully transitioning into digital careers and leveraging tech to improve their businesses and income." },
      { q: "Can women succeed in tech?", a: "Yes. Tech is for everyone. Many women are thriving globally in design, data, software engineering, cybersecurity, product management, and digital business roles." },
      { q: "I’m scared I may not understand quickly.", a: "Learning speed differs for everyone. Our focus is helping learners progress steadily with support, practical guidance, and mentorship throughout the journey." },
      { q: "Is tech already overcrowded?", a: "The demand for skilled digital professionals continues to grow globally. What matters is becoming genuinely skilled and learning how to solve real problems." }
    ]
  },
  {
    category: "Duration & Format",
    questions: [
      { q: "How long does it take to learn a tech skill?", a: "The timeline depends on the program and your consistency. Some foundational skills can be learned within a few months, while mastery develops with continuous practice and real-world projects." },
      { q: "Can I learn while working or schooling?", a: "Yes. Our programs are designed to accommodate students, workers, entrepreneurs, and busy professionals through flexible learning structures." },
      { q: "Are classes online or physical?", a: "Programs may be offered online, onsite, or hybrid depending on the cohort and training track." },
      { q: "Will I get practical training or just theory?", a: "Our learning approach emphasizes practical projects, assignments, real-life scenarios, and hands-on implementation." },
      { q: "What if I miss a class?", a: "At Jenga Tech, we understand that life and work schedules can interfere sometimes. Support materials and guidance are usually provided to help learners stay on track." },
      { q: "How many hours weekly do I need to commit?", a: "Consistency matters more than intensity. Even a few focused hours weekly can produce strong results when maintained over time." }
    ]
  },
  {
    category: "Fees & Payment",
    questions: [
      { q: "How much does the training cost?", a: "Training costs vary depending on the program, duration, and specialization." },
      { q: "Are installment payment options available?", a: "Flexible payment structures may be available for selected programs." },
      { q: "Is learning tech really worth the investment?", a: "Digital skills create opportunities for employment, freelancing, entrepreneurship, remote work, and career growth. Many learners see long-term value beyond the initial training cost." },
      { q: "I’m unemployed right now. Can I still start?", a: "Yes. Many people begin learning tech specifically to improve their income opportunities and career prospects." },
      { q: "What if I pay and struggle to learn?", a: "Our support system is designed to help learners progress through guidance, mentorship, and structured learning paths." }
    ]
  },
  {
    category: "Career Outcomes",
    questions: [
      { q: "Which tech skills are most in demand?", a: "Fields like software engineering, data analytics, cybersecurity, UI/UX design, cloud computing, AI, digital marketing, product management, and business automation continue to grow globally and we offer all that and more here in Jenga Tech." },
      { q: "Will I get a job after learning?", a: "No institution can ethically guarantee jobs, but we focus on helping learners become job-ready with practical experience, portfolio projects, career guidance, and industry-relevant skills." },
      { q: "Can I get remote jobs from Nigeria?", a: "Yes. Remote opportunities are increasingly accessible to skilled professionals globally." },
      { q: "How soon can I start earning?", a: "This depends on your consistency, skill level, portfolio strength, networking, and ability to apply your knowledge practically." },
      { q: "Can tech help me grow my business?", a: "Yes. Business owners use digital skills to improve marketing, automate operations, increase visibility, analyze customer behavior, and scale revenue." },
      { q: "Can I switch careers into tech without quitting my current job?", a: "Yes. Many professionals transition gradually while maintaining their current employment." },
      { q: "Which tech skill is best for beginners?", a: "The best skill depends on your interests, strengths, goals, and preferred career path. Guidance sessions can help identify the right starting point." }
    ]
  },
  {
    category: "Mentorship & Support",
    questions: [
      { q: "Will I have access to mentors?", a: "Yes. Mentorship and guidance are important parts of the learning experience." },
      { q: "What if I get stuck during training?", a: "Support systems are designed to help learners ask questions, solve challenges, and continue progressing." },
      { q: "Will someone guide my career path?", a: "Career direction, growth guidance, and industry exposure are integrated into the learning process where applicable." },
      { q: "Do beginners receive support too?", a: "Yes. Beginners often need the most structure and support, and our programs are designed with that in mind." },
      { q: "Is there accountability during the program?", a: "Structured assignments, projects, and learning milestones help learners stay committed and focused." }
    ]
  },
  {
    category: "Hardware & Tools",
    questions: [
      { q: "Do I need a laptop before starting?", a: "Some programs require laptops for full participation, while others may allow beginners to start with limited tools temporarily." },
      { q: "Can I learn with just a smartphone?", a: "Certain introductory concepts can be learned via mobile devices, but a laptop is strongly recommended for deeper practical learning and project work." },
      { q: "What type of laptop do I need?", a: "Requirements vary depending on the field. Some programs require higher-performance systems, while others work well on entry-level laptops." },
      { q: "I don’t have expensive equipment. Can I still begin?", a: "Yes. Starting is often more important than having perfect equipment immediately." }
    ]
  },
  {
    category: "Certification",
    questions: [
      { q: "Will I receive a certificate after training?", a: "Eligible learners who complete program requirements may receive certification." },
      { q: "Do certificates matter in tech?", a: "Certificates can help validate learning, but employers and clients also value practical skills, portfolios, and problem-solving ability." },
      { q: "Will the certificate help me get opportunities?", a: "Certifications can strengthen credibility when combined with strong practical competence and project experience." }
    ]
  },
  {
    category: "Job Readiness",
    questions: [
      { q: "Will I build real projects?", a: "Yes. Practical project-based learning is essential for developing confidence and employable skills." },
      { q: "Will I learn how to build a portfolio?", a: "Yes. Learners are guided on showcasing their skills through practical work and portfolio development." },
      { q: "Will you help with CVs and interviews?", a: "Career preparation support may include portfolio reviews, CV guidance, interview preparation, and professional development." },
      { q: "I have no experience. How do I compete?", a: "Everyone starts somewhere. Practical projects, consistency, networking, and continuous improvement help learners become competitive over time." },
      { q: "What if AI replaces this skill?", a: "Technology evolves constantly. The goal is to learn adaptable skills, problem-solving, creativity, and digital thinking that remain valuable as industries change." }
    ]
  },
  {
    category: "Freelancing & Remote",
    questions: [
      { q: "Can I freelance after learning?", a: "Yes. Many digital skills can be monetized through freelancing, consulting, contract work, and online platforms." },
      { q: "How do I get my first client?", a: "Building a portfolio, networking, consistency, visibility, and practical competence are key factors in attracting opportunities." },
      { q: "Can Nigerians really work for international clients?", a: "Yes. Skilled professionals across Nigeria already work with global companies and clients remotely." },
      { q: "Which skills are best for freelancing?", a: "Design, development, digital marketing, writing, data analytics, video editing, automation, and product-related skills are commonly monetized online." },
      { q: "Can freelancing become a full-time career?", a: "Yes. Many professionals eventually transition into full-time freelancing or digital entrepreneurship." }
    ]
  },
  {
    category: "Community",
    questions: [
      { q: "Will I be part of a learning community?", a: "Yes. Community learning helps students stay motivated, connected, and informed about opportunities." },
      { q: "Why is networking important in tech?", a: "Opportunities often come through visibility, collaboration, referrals, and relationships within the ecosystem." },
      { q: "Will I meet other learners and professionals?", a: "Yes. Communities create opportunities for collaboration, partnerships, accountability, and growth." },
      { q: "What happens after the training ends?", a: "Learning in tech is continuous. Alumni communities, mentorship networks, and continuous skill development help learners keep growing beyond the classroom." },
      { q: "I don’t know anyone in tech. Can I still succeed?", a: "Yes. Many successful professionals started without connections. Skills, consistency, visibility, and community involvement create opportunities over time." }
    ]
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchValue] = useState("");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white">
      <div className="max-width-container px-6">
        
        {/* --- 1. HERO --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <HelpCircle size={14} fill="#FF6B00" className="text-white" /> Knowledge Base
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#0A0A0A] tracking-tighter leading-[0.9] mb-8">
            Common <br /> <span className="italic text-[#FF6B00]">Questions.</span>
          </h1>
          <p className="text-lg text-[#525252] font-medium leading-relaxed">
            Everything you need to know about the Jengatech 
            technical mastery, and our industrial software services.
          </p>
        </div>

        {/* --- 2. SEARCH BAR --- */}
        <div className="max-w-2xl mx-auto mb-20 relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FF6B00] transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search for a question (e.g. 'Laptop', 'Payment', 'Job')..."
            className="w-full py-6 pl-16 pr-6 rounded-[2rem] bg-[#F9FAFB] border border-gray-100 outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all font-medium text-[#0A0A0A] shadow-sm"
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          />
        </div>

        {/* --- 3. FAQ CONTENT --- */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* CATEGORY NAV (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 px-4">Jump to Category</p>
            {FAQ_DATA.map((cat) => (
              <button 
                key={cat.category}
                onClick={() => {
                  const element = document.getElementById(cat.category);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-[#FF6B00] transition-all text-sm font-bold text-[#525252] flex justify-between items-center group"
              >
                {cat.category}
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            ))}
          </div>

          {/* QUESTIONS LIST */}
          <div className="lg:col-span-9 space-y-16">
            {FAQ_DATA.map((category) => {
              // Filtering logic for search
              const filteredQuestions = category.questions.filter(
                q => q.q.toLowerCase().includes(searchTerm) || q.a.toLowerCase().includes(searchTerm)
              );

              if (filteredQuestions.length === 0) return null;

              return (
                <div key={category.category} id={category.category} className="scroll-mt-40">
                  <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-xl font-black uppercase tracking-widest text-[#0A0A0A]">
                      {category.category}
                    </h3>
                    <div className="h-[1px] flex-grow bg-gray-100" />
                  </div>

                  <div className="space-y-4">
                    {filteredQuestions.map((item, idx) => {
                      const id = `${category.category}-${idx}`;
                      const isOpen = openId === id;

                      return (
                        <div 
                          key={idx} 
                          className={`group rounded-[2rem] border transition-all duration-500 ${isOpen ? 'bg-white border-[#FF6B00] shadow-xl shadow-orange-100' : 'bg-transparent border-gray-100 hover:border-gray-300'}`}
                        >
                          <button 
                            onClick={() => toggleAccordion(id)}
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                          >
                            <span className={`text-base md:text-lg font-bold tracking-tight pr-6 ${isOpen ? 'text-[#FF6B00]' : 'text-[#0A0A0A]'}`}>
                              {item.q}
                            </span>
                            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#FF6B00] text-white rotate-180 shadow-lg shadow-orange-200' : 'bg-gray-100 text-[#0A0A0A]'}`}>
                              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                          </button>
                          
                          <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-6 md:px-8 pb-8 text-[#525252] font-medium leading-relaxed border-t border-gray-50 pt-6 mt-2">
                              {item.a}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 4. CTA FOOTER --- */}
        <div className="mt-32 p-12 md:p-24 bg-[#0A0A0A] rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                Still have <br/> <span className="text-[#FF6B00]">more questions?</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
                Our support desk is active 24/7 to help you navigate your transition into elite technology.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button href="/contact" className="px-12 py-6 bg-[#FF6B00] border-none">Send a Message</Button>
                <Button href="https://wa.me/2348130963475" variant="outline" className="px-12 py-6 border-white/20 text-white hover:bg-white hover:text-black">
                   Chat on WhatsApp
                </Button>
              </div>
           </div>
           {/* Background flair */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 blur-[100px] rounded-full" />
        </div>

      </div>
    </main>
  );
}