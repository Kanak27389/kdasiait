import React, { useState } from 'react';
import { Course } from '../types';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onApplyForCourse: (courseShortCode: string) => void;
  onShowToast: (message: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  onClose,
  onApplyForCourse,
  onShowToast
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!course) return null;

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      onShowToast(`Official syllabus brochure for ${course.name} downloaded successfully!`);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#00163D]/65 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-3">
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-[#ededf8] shrink-0">
          <div className="flex items-start gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#FDF7F7] text-[#7d2628] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <span className="material-symbols-outlined text-[24px]">{course.icon}</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded bg-[#EFF4FF] text-[#00163D] font-label-sm text-[11px] font-bold">
                  {course.duration}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#e7e7f3] text-[#564241] font-label-sm text-[11px]">
                  Elig: {course.eligibility}
                </span>
                {course.badge && (
                  <span className="px-2 py-0.5 rounded bg-[#FFF8EC] text-[#442900] font-label-sm text-[11px] font-bold">
                    {course.badge}
                  </span>
                )}
              </div>
              <h3 className="font-title-lg text-[#00163D] font-bold mt-1 leading-snug">
                {course.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ededf8] flex items-center justify-center text-[#564241] hover:bg-[#e1e2ed] transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Curriculum Content */}
        <div className="overflow-y-auto no-scrollbar py-3 space-y-3 flex-1">
          <p className="font-body-md text-[#564241] text-xs sm:text-sm leading-relaxed">
            {course.description}
          </p>

          {/* Fee Structure Summary Box */}
          <div className="p-3 rounded-xl bg-[#f2f3fe] border border-[#d9e2ff] flex flex-col gap-2">
            <span className="font-label-sm text-[#535E6B] font-bold uppercase tracking-wider text-[10px]">
              Fee Structure (Excluding Exam Board Fees)
            </span>
            <div className="grid grid-cols-2 gap-2">
              {course.amtronFee && (
                <div className="p-2.5 rounded-lg bg-white shadow-xs">
                  <span className="font-label-sm text-[#00163D] font-bold block text-[11px]">
                    AMTRON Affiliated
                  </span>
                  <div className="font-fee-numeric text-[#00163D] text-[16px] font-bold mt-0.5">
                    ₹{course.amtronFee.total.toLocaleString('en-IN')}
                  </div>
                  <span className="font-body-sm text-[#535E6B] text-[10px] block mt-0.5">
                    {course.amtronFee.breakdownNote || 'Course Fee Package'}
                  </span>
                </div>
              )}
              {course.iapsFee && (
                <div className="p-2.5 rounded-lg bg-white shadow-xs">
                  <span className="font-label-sm text-[#7d2628] font-bold block text-[11px]">
                    IAPS Board Affiliated
                  </span>
                  <div className="font-fee-numeric text-[#7d2628] text-[16px] font-bold mt-0.5">
                    ₹{course.iapsFee.total.toLocaleString('en-IN')}
                  </div>
                  <span className="font-body-sm text-[#535E6B] text-[10px] block mt-0.5">
                    {course.iapsFee.breakdownNote}
                  </span>
                </div>
              )}
              {course.ncvtFee && (
                <div className="col-span-2 p-2.5 rounded-lg bg-[#FFF9E6] border border-[#FEA619]/40 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-[#442900] font-bold block text-[11px]">
                      NCVT / ITI (National Trade Certificate)
                    </span>
                    <span className="font-body-sm text-[#535E6B] text-[10px] block mt-0.5">
                      {course.ncvtFee.breakdownNote}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-fee-numeric text-[#7d2628] text-[18px] font-bold block">
                      ₹{course.ncvtFee.total.toLocaleString('en-IN')}
                    </span>
                    <span className="font-label-sm text-[#535E6B] text-[10px]">Total</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Detailed Syllabus Modules */}
          <div className="space-y-2">
            <h4 className="font-title-md text-[#191b23] font-bold flex items-center gap-1.5 text-sm">
              <span className="material-symbols-outlined text-[18px] text-[#7d2628]">menu_book</span>
              Detailed Curriculum & Topics
            </h4>
            {course.syllabusModules.map((mod, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white border border-[#ededf8] shadow-xs">
                <span className="font-label-md text-[#00163D] font-bold block text-xs">
                  {mod.title}
                </span>
                <ul className="mt-2 space-y-1">
                  {mod.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-1.5 font-body-sm text-[#564241] text-xs">
                      <span className="material-symbols-outlined text-[#7d2628] text-[14px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded-xl bg-[#FDF7F7] flex items-center gap-2 text-[#7d2628] font-body-sm text-xs">
            <span className="material-symbols-outlined text-[18px] shrink-0">workspace_premium</span>
            <span>100% Practical Lab Training with 1 Student : 1 PC allocation guaranteed at Kaliabor campus.</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-[#ededf8] flex items-center gap-2 shrink-0">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex-1 min-h-[44px] px-3 py-2 rounded-lg bg-[#00163D] hover:bg-[#031a41] text-white font-label-md text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
          >
            {isDownloading ? (
              <>
                <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
                <span>Generating Brochure...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[16px] text-[#FEA619]">download</span>
                <span>Download Syllabus PDF</span>
              </>
            )}
          </button>
          <button
            onClick={() => {
              onClose();
              onApplyForCourse(course.shortCode);
            }}
            className="flex-1 min-h-[44px] px-3 py-2 rounded-lg bg-[#7d2628] hover:bg-[#5e0f14] text-white font-label-md text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
          >
            <span>Apply for Admission</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
