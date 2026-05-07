"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "../../components/ui/Button";

export default function ContactPage() {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    error: false,
  });

  // 1. Replace 'YOUR_FORM_ID' with the ID you get from formspree.io
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgzwwjd";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setState({ submitting: false, succeeded: true, error: false });
        form.reset();
      } else {
        setState({ submitting: false, succeeded: false, error: true });
      }
    } catch (error) {
      setState({ submitting: false, succeeded: false, error: true });
    }
  };

  return (
    <main className="bg-white pt-40 pb-24 px-6 selection:bg-[#FF6B00] selection:text-white">
      <div className="max-width-container">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Contact Engineering
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#0A0A0A] mb-8 tracking-tighter leading-[0.9]">
              Partner With Us <br /> <span className="text-[#FF6B00]">to Build at Scale.</span>
            </h1>
            <p className="text-[#525252] text-lg mb-12 font-medium leading-relaxed max-w-lg">
              Have questions about our programs or need an enterprise solution? Our team is 
              ready to guide your digital transformation.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Electronic Mail</p>
                  <a href="mailto:info@jengatech.com" className="font-bold text-[#0A0A0A] hover:text-[#FF6B00] transition-colors">support@jengatechafrica.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Direct Line</p>
                  <a href="tel:+2348130963475" className="font-bold text-[#0A0A0A] hover:text-[#FF6B00] transition-colors">+234 7036180749</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Head Office</p>
                  <p className="font-bold text-[#0A0A0A]">Aba, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form / Success State */}
          <div className="bg-[#F9FAFB] p-10 md:p-16 rounded-[3.5rem] border border-gray-100 shadow-premium relative overflow-hidden">
            {state.succeeded ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-green-100">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">Message Sent</h2>
                <p className="text-[#525252] font-medium mb-10">We have received your inquiry. A technical lead will reach out to you shortly.</p>
                <Button onClick={() => setState({ ...state, succeeded: false })} variant="outline" className="w-full">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      placeholder="Peter" 
                      className="w-full p-5 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all font-medium" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      placeholder="Chikere" 
                      className="w-full p-5 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all font-medium" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="yourmail@mail.com" 
                    className="w-full p-5 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all font-medium" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Project Details</label>
                  <textarea 
                    name="message"
                    required
                    placeholder="Tell us about your project or technical inquiry..." 
                    rows={5} 
                    className="w-full p-5 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all font-medium resize-none" 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-6 rounded-2xl shadow-xl shadow-orange-900/10 group flex items-center justify-center gap-3 transition-all"
                >
                  {state.submitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>

                {state.error && (
                  <p className="text-red-500 text-xs font-bold text-center mt-4">
                    Oops! There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            )}
            
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF6B00]/5 blur-[100px] rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </main>
  );
}