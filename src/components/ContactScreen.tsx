import React, { useState } from 'react';
import { NavTab } from '../types';

interface ContactScreenProps {
  onNavigate: (tab: NavTab) => void;
  onShowToast: (message: string) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    queryType: 'Course Counseling & Fees',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      onShowToast('Please provide your name and contact phone number.');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      onShowToast(`Thank you, ${formData.name}! Our admissions counselor will call you shortly.`);
      setFormData({
        name: '',
        phone: '',
        queryType: 'Course Counseling & Fees',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* Header Banner */}
      <section className="relative w-full overflow-hidden bg-[#7d2628] text-white px-4 pt-5 pb-6 shadow-md">
        <div className="relative z-10 flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-white/15 text-[#FEA619] backdrop-blur-sm shadow-xs">
            <span className="material-symbols-outlined text-[15px]">headset_mic</span>
            <span className="font-label-sm tracking-wide text-[11px] font-semibold">
              Admissions & Student Helpdesk
            </span>
          </div>
          <h1 className="font-display-lg-mobile text-[28px] sm:text-[32px] tracking-tight font-bold text-white leading-tight">
            Contact IAIT Kaliabor
          </h1>
          <p className="font-body-md text-[#ffdad8] text-xs sm:text-sm leading-snug">
            Have questions about course fees, AMTRON certifications, or NCVT ITI admissions? Get in touch with our counselors.
          </p>
        </div>
      </section>

      {/* Quick Contact Action Cards */}
      <section className="px-4 pt-5">
        <div className="grid grid-cols-2 gap-3">
          {/* Phone Call */}
          <a
            href="tel:+919435084221"
            className="p-3.5 rounded-xl bg-white border border-[#ededf8] shadow-xs flex flex-col items-center text-center hover:border-[#7d2628] transition-all group"
          >
            <div className="w-11 h-11 rounded-full bg-[#FDF7F7] text-[#7d2628] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
              <span className="material-symbols-outlined text-[22px]">call</span>
            </div>
            <span className="font-label-md text-[#191b23] font-bold text-xs mt-2">
              Call Admissions
            </span>
            <span className="font-fee-numeric text-[#7d2628] text-xs font-semibold mt-0.5">
              +91 94350-84221
            </span>
          </a>

          {/* WhatsApp Chat */}
          <a
            href="https://wa.me/919435084221?text=Hello%20IAIT%20Kaliabor,%20I%20am%20interested%20in%20admission"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white border border-[#ededf8] shadow-xs flex flex-col items-center text-center hover:border-[#25D366] transition-all group"
          >
            <div className="w-11 h-11 rounded-full bg-[#DEF7EC] text-[#03543F] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
              <span className="material-symbols-outlined text-[22px]">chat</span>
            </div>
            <span className="font-label-md text-[#191b23] font-bold text-xs mt-2">
              WhatsApp Support
            </span>
            <span className="font-fee-numeric text-[#03543F] text-xs font-semibold mt-0.5">
              Instant Chat
            </span>
          </a>
        </div>
      </section>

      {/* Campus Location Card & Stylized Map */}
      <section className="px-4 pt-5">
        <div className="bg-white rounded-xl border border-[#ededf8] p-4 shadow-xs flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFF4FF] text-[#00163D] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">location_on</span>
            </div>
            <div className="flex-1">
              <span className="font-label-sm text-[#00163D] font-bold uppercase tracking-wider text-[11px]">
                Campus Address
              </span>
              <h3 className="font-title-md text-[#191b23] font-bold text-sm mt-0.5">
                Icon Academy of IT (IAIT)
              </h3>
              <p className="font-body-sm text-[#535E6B] text-xs mt-1 leading-relaxed">
                Near Kaliabor Post Office, Kuwaritol, Kaliabor, District: Nagaon, Assam – 782137.
              </p>
              <div className="mt-1 flex items-center gap-1 text-[11px] text-[#5e0f14] font-semibold">
                <span className="material-symbols-outlined text-[14px]">near_me</span>
                <span>Landmark: Near Kaliabor Head Post Office & State Bank Kiosk</span>
              </div>
            </div>
          </div>

          {/* Interactive Stylized Map Visualizer */}
          <div className="relative rounded-xl overflow-hidden border border-[#d9e2ff] bg-[#EFF4FF] h-44 flex items-center justify-center shadow-inner">
            {/* SVG stylized town map of Kaliabor */}
            <svg className="w-full h-full object-cover" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="180" fill="#f0f4fc" />
              {/* Roads */}
              <path d="M 0 90 Q 150 100 250 80 T 400 70" stroke="#cbd5e1" strokeWidth="18" fill="none" />
              <path d="M 180 0 L 190 180" stroke="#cbd5e1" strokeWidth="14" fill="none" />
              <path d="M 0 90 Q 150 100 250 80 T 400 70" stroke="#ffffff" strokeWidth="14" fill="none" />
              <path d="M 180 0 L 190 180" stroke="#ffffff" strokeWidth="10" fill="none" />
              {/* National Highway Label */}
              <text x="280" y="65" fill="#64748b" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                NH-715 (Kaliabor Tiniali Road)
              </text>
              <text x="195" y="160" fill="#64748b" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                To Kuwaritol Market
              </text>
              {/* Landmark points */}
              <circle cx="140" cy="85" r="5" fill="#475569" />
              <text x="95" y="75" fill="#334155" fontSize="8" fontWeight="600" fontFamily="sans-serif">
                Post Office
              </text>
              {/* IAIT Pin */}
              <g transform="translate(210, 65)">
                <circle cx="0" cy="0" r="16" fill="#7d2628" opacity="0.2">
                  <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="10" fill="#7d2628" />
                <circle cx="0" cy="0" r="4" fill="#ffffff" />
                <rect x="12" y="-12" width="130" height="24" rx="6" fill="#7d2628" />
                <text x="18" y="4" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                  IAIT Kaliabor Campus
                </text>
              </g>
            </svg>

            {/* Overlay directions button */}
            <a
              href="https://maps.google.com/?q=Kaliabor+Nagaon+Assam"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 px-3 py-1.5 rounded-lg bg-[#00163D] text-white font-label-md text-xs font-bold shadow-md flex items-center gap-1 hover:bg-[#031a41] transition-all"
            >
              <span className="material-symbols-outlined text-[14px] text-[#FEA619]">directions</span>
              <span>Open in Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Office & Lab Timings */}
      <section className="px-4 pt-5">
        <div className="bg-white rounded-xl border border-[#ededf8] p-4 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7d2628] text-[20px]">
              schedule
            </span>
            <h3 className="font-title-md text-[#191b23] font-bold text-sm">
              Operational Hours & Lab Timing
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <div className="p-2.5 rounded-lg bg-[#f2f3fe]">
              <span className="font-label-sm text-[#535E6B] text-[10px] block">Monday – Saturday</span>
              <span className="font-bold text-[#191b23] text-sm block mt-0.5">
                8:00 AM – 6:00 PM
              </span>
              <span className="text-[#535E6B] text-[10px]">Continuous Lab Shifts</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#f2f3fe]">
              <span className="font-label-sm text-[#535E6B] text-[10px] block">Sunday</span>
              <span className="font-bold text-[#191b23] text-sm block mt-0.5">
                9:00 AM – 1:00 PM
              </span>
              <span className="text-[#535E6B] text-[10px]">Counseling & Special Batches</span>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact / Query Form */}
      <section className="px-4 pt-5 pb-6">
        <div className="bg-white rounded-xl border border-[#ededf8] p-4 shadow-xs flex flex-col gap-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ededf8]">
            <span className="material-symbols-outlined text-[#7d2628] text-[20px]">
              mail
            </span>
            <h3 className="font-title-md text-[#191b23] font-bold text-sm">
              Send a Direct Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-[#535E6B] text-xs">Your Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Kaushik Baruah"
                className="w-full px-3 py-2 rounded-lg bg-[#f2f3fe] text-sm text-[#191b23] border border-transparent focus:border-[#7d2628] focus:bg-white focus:outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-[#535E6B] text-xs">Contact Mobile Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="98540 12345"
                className="w-full px-3 py-2 rounded-lg bg-[#f2f3fe] text-sm text-[#191b23] border border-transparent focus:border-[#7d2628] focus:bg-white focus:outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-[#535E6B] text-xs">Inquiry Topic</label>
              <select
                value={formData.queryType}
                onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#f2f3fe] text-sm text-[#191b23] border border-transparent focus:border-[#7d2628] focus:bg-white focus:outline-none transition-all"
              >
                <option value="Course Counseling & Fees">Course Counseling & Fees</option>
                <option value="AMTRON Certification Verification">AMTRON Certification Verification</option>
                <option value="NCVT ITI COPA Trade Admission">NCVT ITI COPA Trade Admission</option>
                <option value="Python & AI Weekend Batch">Python & AI Weekend Batch</option>
                <option value="Other Query">Other Question</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-[#535E6B] text-xs">Your Message (Optional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what you'd like to learn or inquire about..."
                rows={3}
                className="w-full px-3 py-2 rounded-lg bg-[#f2f3fe] text-sm text-[#191b23] border border-transparent focus:border-[#7d2628] focus:bg-white focus:outline-none resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full min-h-[44px] rounded-lg bg-[#7d2628] hover:bg-[#5e0f14] text-white font-label-md text-xs font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              {isSending ? (
                <>
                  <span className="material-symbols-outlined text-[16px] animate-spin">
                    progress_activity
                  </span>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  <span>Send Message to Admissions</span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
