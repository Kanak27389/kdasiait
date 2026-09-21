import React, { useState } from 'react';

interface QuickInquiryModalProps {
  isOpen: boolean;
  courseName: string;
  onClose: () => void;
  onSubmitSuccess: (studentName: string, course: string) => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({
  isOpen,
  courseName,
  onClose,
  onSubmitSuccess
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your full name and 10-digit mobile number.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(name, courseName || 'General Inquiry');
      setName('');
      setPhone('');
      setMessage('');
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#00163D]/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-3">
      <div className="bg-white rounded-2xl p-4 shadow-2xl w-full max-w-md flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-6 duration-200">
        <div className="flex items-center justify-between pb-1 border-b border-[#ededf8]">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#7d2628] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
            </div>
            <div>
              <h3 className="font-title-md text-[#191b23] font-bold">Quick Admission Inquiry</h3>
              <span className="font-label-sm text-[#5e0f14] font-semibold block truncate max-w-[220px]">
                {courseName || 'Icon Academy of IT'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ededf8] flex items-center justify-center text-[#564241] hover:bg-[#e1e2ed] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 pt-1">
          {error && (
            <div className="p-2 rounded-lg bg-[#ffdad6] text-[#ba1a1a] font-label-sm text-xs flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">error</span>
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="font-label-sm text-[#535E6B]">Student Full Name *</label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-[18px] text-[#535E6B]">person</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priyam Saikia"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#f2f3fe] text-[#191b23] font-body-md text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7d2628] transition-all"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-sm text-[#535E6B]">WhatsApp / Contact Number *</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-xs font-bold text-[#535E6B]">+91</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="98540 12345"
                className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-[#f2f3fe] text-[#191b23] font-body-md text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7d2628] transition-all"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-sm text-[#535E6B]">Message / Timing Preference (Optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Morning batch timing or fee installment inquiry..."
              rows={2}
              className="w-full p-2.5 rounded-lg bg-[#f2f3fe] text-[#191b23] font-body-md text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7d2628] resize-none transition-all"
            />
          </div>

          <div className="p-2 rounded-lg bg-[#FFF8EC] text-[#633d00] font-label-sm text-[11px] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#FEA619]">verified_user</span>
            <span>Your information is secured with IAIT Kaliabor Admissions Desk.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[44px] rounded-lg bg-[#7d2628] hover:bg-[#5e0f14] text-white font-label-lg font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                <span>Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Submit Inquiry</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
