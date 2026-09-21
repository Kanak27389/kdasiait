import React from 'react';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToAdmissions: () => void;
  onGoToVerify: () => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  onGoToAdmissions,
  onGoToVerify
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#00163D]/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-3">
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl w-full max-w-sm flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-6 duration-200">
        <div className="flex items-center justify-between pb-2 border-b border-[#ededf8]">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#7d2628] text-white flex items-center justify-center font-bold text-lg">
              <span className="material-symbols-outlined text-[22px]">badge</span>
            </div>
            <div>
              <h3 className="font-title-md text-[#191b23] font-bold">Student Portal</h3>
              <span className="font-label-sm text-[#535E6B]">Icon Academy Kaliabor</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ededf8] flex items-center justify-center text-[#564241] hover:bg-[#e1e2ed] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-2.5 pt-1 text-xs">
          <div className="p-3 rounded-xl bg-[#FDF7F7] border border-[#dcc0be] flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[#7d2628] text-[20px] shrink-0 mt-0.5">
              verified
            </span>
            <div>
              <span className="font-bold text-[#7d2628] block text-sm">Credentials Check</span>
              <p className="text-[#564241] mt-0.5">
                Verify diplomas issued by IAIT Kaliabor under AMTRON, IAPS, or NCVT Central Registry.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onGoToVerify();
                }}
                className="mt-2 px-3 py-1.5 rounded-md bg-[#7d2628] text-white font-label-md text-xs font-bold inline-flex items-center gap-1 shadow-xs"
              >
                <span>Open Verification Desk</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#EFF4FF] border border-[#bcceff] flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[#00163D] text-[20px] shrink-0 mt-0.5">
              how_to_reg
            </span>
            <div>
              <span className="font-bold text-[#00163D] block text-sm">New Admission Registration</span>
              <p className="text-[#564241] mt-0.5">
                Apply online for upcoming batches (Morning, Mid-Day, Afternoon & Evening).
              </p>
              <button
                onClick={() => {
                  onClose();
                  onGoToAdmissions();
                }}
                className="mt-2 px-3 py-1.5 rounded-md bg-[#00163D] text-white font-label-md text-xs font-bold inline-flex items-center gap-1 shadow-xs"
              >
                <span>Fill Admission Form</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#FFF9E6] border border-[#FEA619]/40 flex flex-col gap-1">
            <div className="flex items-center justify-between font-bold text-[#442900]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#FEA619]">support_agent</span>
                Admissions Desk
              </span>
              <span>+91 94350-84221</span>
            </div>
            <span className="text-[#535E6B] text-[11px]">
              Office hours: Mon – Sat, 8:00 AM – 6:00 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
