import React, { useState } from 'react';
import { Course, NavTab } from '../types';
import { COURSES_DATA } from '../data/coursesData';

interface CoursesScreenProps {
  onNavigate: (tab: NavTab) => void;
  onApplyForCourse: (courseShortCode: string) => void;
  onOpenSyllabus: (course: Course) => void;
}

export const CoursesScreen: React.FC<CoursesScreenProps> = ({
  onNavigate,
  onApplyForCourse,
  onOpenSyllabus
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterButtons = [
    { id: 'all', label: 'All Courses (11)' },
    { id: '3-months', label: '3 Months Certificate' },
    { id: '6-months', label: '6 Months Diploma' },
    { id: '1-year', label: '1 Year Diploma / PG' },
    { id: 'amtron', label: 'AMTRON' },
    { id: 'iaps', label: 'IAPS' },
    { id: 'ncvt', label: 'NCVT ITI' }
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchQuery =
        course.name.toLowerCase().includes(q) ||
        course.shortCode.toLowerCase().includes(q) ||
        course.eligibility.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q);
      if (!matchQuery) return false;
    }

    // Category chips filter
    if (selectedFilter === 'all') return true;
    if (selectedFilter === '3-months') return course.durationCategory === '3-months';
    if (selectedFilter === '6-months') return course.durationCategory === '6-months';
    if (selectedFilter === '1-year') return course.durationCategory === '1-year';
    if (selectedFilter === 'amtron') return course.affiliations.includes('amtron');
    if (selectedFilter === 'iaps') return course.affiliations.includes('iaps');
    if (selectedFilter === 'ncvt') return course.affiliations.includes('ncvt');
    return true;
  });

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* Announcement & Important Notice */}
      <div className="px-4 pt-4">
        <div className="p-3.5 rounded-xl bg-[#FFF9E6] border border-[#FEA619]/40 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FEA619] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            <span
              className="material-symbols-outlined text-[#00163D] text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-label-md text-[11px] uppercase tracking-wider text-[#633d00] font-bold block mb-0.5">
              Fee Policy Update
            </span>
            <p className="font-body-md text-[#191b23] font-semibold italic text-xs leading-snug">
              N.B - Exam Fees Not Included with course fee.
            </p>
            <span className="font-body-sm text-[#535E6B] text-[11px] mt-1 block">
              Government-recognized certifications under AMTRON, IAPS & NCVT ITI.
            </span>
          </div>
        </div>
      </div>

      {/* Academic Banner Highlights */}
      <div className="px-4 pt-4">
        <div className="relative overflow-hidden rounded-xl bg-[#7d2628] p-4 text-white shadow-md">
          <div className="relative z-10 flex flex-col gap-1">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-white/15 backdrop-blur-md self-start">
              <span className="material-symbols-outlined text-[#FEA619] text-[15px]">
                workspace_premium
              </span>
              <span className="font-label-sm text-white font-semibold tracking-wide text-[11px]">
                Affiliated Training Hub
              </span>
            </div>
            <h2 className="font-headline-sm text-white tracking-tight font-bold text-lg">
              Official IT Course Catalog
            </h2>
            <p className="font-body-sm text-[#F4DCDD] text-xs leading-snug">
              Transform your digital future at Icon Academy Kaliabor with certified vocational and diploma certifications.
            </p>
          </div>
          <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
        </div>
      </div>

      {/* Search Input */}
      <div className="px-4 pt-3">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-[20px] text-[#535E6B]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search programs by name or eligibility..."
            className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-white border border-[#ededf8] text-[#191b23] font-body-md text-xs sm:text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#7d2628] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-[#535E6B] hover:text-[#191b23]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Chips Scrollable Navigation */}
      <div className="pt-3 pb-2 sticky top-16 z-40 bg-[#faf8ff]/95 backdrop-blur-md">
        <div className="px-4 flex gap-1.5 overflow-x-auto no-scrollbar py-1">
          {filterButtons.map((btn) => {
            const isSelected = selectedFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setSelectedFilter(btn.id)}
                className={`px-3 py-1.5 rounded-full font-label-md text-xs whitespace-nowrap transition-all shadow-xs active:scale-95 ${
                  isSelected
                    ? 'bg-[#7d2628] text-white font-bold'
                    : 'bg-[#ededf8] text-[#191b23] hover:bg-[#e7e7f3]'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Course Cards Matrix */}
      <div className="px-4 py-2 flex flex-col gap-3.5">
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center border border-[#ededf8] shadow-xs">
            <span className="material-symbols-outlined text-4xl text-[#535E6B] mb-2">
              search_off
            </span>
            <p className="font-body-md text-[#191b23] font-semibold">No courses match your filter</p>
            <p className="font-body-sm text-[#535E6B] text-xs mt-1">
              Try resetting the filter chips or search query above.
            </p>
            <button
              onClick={() => {
                setSelectedFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 px-3 py-1.5 rounded-lg bg-[#7d2628] text-white font-label-md text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCourses.map((course) => {
            const isCopa = course.shortCode === 'COPA';

            return (
              <article
                key={course.id}
                className={`course-card rounded-xl p-3.5 shadow-sm transition-all duration-200 border ${
                  isCopa
                    ? 'bg-[#FFF9E6] border-[#FEA619]/50 shadow-md'
                    : 'bg-white border-[#ededf8]'
                }`}
              >
                {/* Header Title & Badges */}
                <div className="flex items-start justify-between gap-2 pb-1">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span
                        className={`px-2 py-0.5 rounded font-label-sm text-[10px] font-semibold ${
                          isCopa
                            ? 'bg-[#FEA619] text-[#00163D] font-bold'
                            : 'bg-[#EFF4FF] text-[#00163D]'
                        }`}
                      >
                        {course.duration}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#e7e7f3] text-[#564241] font-label-sm text-[10px]">
                        Elig: {course.eligibility}
                      </span>
                      {course.badge && !isCopa && (
                        <span
                          className={`px-2 py-0.5 rounded font-label-sm text-[10px] font-semibold ${
                            course.badgeType === 'trending'
                              ? 'bg-[#FFF8EC] text-[#442900]'
                              : 'bg-[#EFF4FF] text-[#00163D]'
                          }`}
                        >
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-title-lg text-[#00163D] font-bold text-base leading-snug">
                      {course.name}
                    </h3>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                      isCopa
                        ? 'bg-[#FEA619] text-[#00163D]'
                        : 'bg-[#FDF7F7] text-[#7d2628]'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[24px]"
                      style={isCopa ? { fontVariationSettings: "'FILL' 1" } : undefined}
                    >
                      {course.icon}
                    </span>
                  </div>
                </div>

                {/* Fee Structure Breakdown Box */}
                <div className="mt-2.5 p-2.5 rounded-lg bg-[#f2f3fe] flex flex-col gap-1.5 border border-[#d9e2ff]/50">
                  <span className="font-label-sm text-[#535E6B] text-[10px] uppercase tracking-wider font-bold">
                    Fee Structure Breakdown
                  </span>

                  {isCopa ? (
                    <div className="p-2 rounded-lg bg-white shadow-xs flex items-center justify-between">
                      <div>
                        <div className="font-label-md text-[#00163D] font-bold text-xs">
                          Admission Fee: ₹7,000
                        </div>
                        <div className="font-body-sm text-[#535E6B] text-[11px]">
                          Tuition Fee: ₹9,000 (Installments available)
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-fee-numeric text-[#7d2628] text-base font-bold">
                          ₹16,000
                        </div>
                        <span className="font-label-sm text-[#535E6B] text-[10px]">Course Total</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {/* AMTRON */}
                      {course.amtronFee ? (
                        <div className="p-2 rounded-lg bg-white shadow-xs flex flex-col justify-between">
                          <div className="flex items-center gap-1 mb-0.5">
                            <span className="w-2 h-2 rounded-full bg-[#00163D]" />
                            <span className="font-label-sm text-[#00163D] font-bold text-[11px]">
                              AMTRON
                            </span>
                          </div>
                          <div className="font-fee-numeric text-[#00163D] text-[15px] font-bold">
                            ₹{course.amtronFee.total.toLocaleString('en-IN')}
                          </div>
                          <span className="font-body-sm text-[#535E6B] text-[10px]">
                            {course.amtronFee.breakdownNote || 'Total Package Fee'}
                          </span>
                        </div>
                      ) : null}

                      {/* IAPS */}
                      {course.iapsFee ? (
                        <div
                          className={`p-2 rounded-lg bg-white shadow-xs flex flex-col justify-between ${
                            !course.amtronFee ? 'col-span-2' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <div className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-[#7d2628]" />
                              <span className="font-label-sm text-[#7d2628] font-bold text-[11px]">
                                IAPS Affiliated
                              </span>
                            </div>
                            {!course.amtronFee && (
                              <span className="font-fee-numeric text-[#7d2628] text-[15px] font-bold">
                                ₹{course.iapsFee.total.toLocaleString('en-IN')}
                              </span>
                            )}
                          </div>
                          {course.amtronFee ? (
                            <div className="font-fee-numeric text-[#7d2628] text-[15px] font-bold">
                              ₹{course.iapsFee.total.toLocaleString('en-IN')}
                            </div>
                          ) : null}
                          <span className="font-body-sm text-[#535E6B] text-[10px]">
                            {course.iapsFee.breakdownNote}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>

                {/* Card Actions (Syllabus & Apply) */}
                <div className="mt-3 pt-1 flex items-center justify-between gap-2 border-t border-[#ededf8]">
                  <button
                    onClick={() => onOpenSyllabus(course)}
                    className="flex items-center gap-1 font-label-md text-xs text-[#4c5e88] hover:text-[#00163D] transition-colors py-1 font-bold"
                  >
                    <span className="material-symbols-outlined text-[17px]">download</span>
                    <span>{isCopa ? 'Official Syllabus' : 'Syllabus'}</span>
                  </button>

                  <button
                    onClick={() => onApplyForCourse(course.shortCode)}
                    className={`px-3 py-1.5 rounded-lg font-label-md text-xs font-bold shadow-xs active:scale-95 transition-transform flex items-center gap-1 ${
                      isCopa
                        ? 'bg-[#FEA619] text-[#00163D]'
                        : 'bg-[#7d2628] hover:bg-[#5e0f14] text-white'
                    }`}
                  >
                    <span>{isCopa ? 'Apply ITI Trade' : 'Apply Now'}</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Micro-Institutional Quick Facts Card */}
      <div className="px-4 pt-3 pb-6">
        <div className="p-4 rounded-xl bg-[#00163D] text-white shadow-sm flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FEA619] text-[22px]">
              verified_user
            </span>
            <h4 className="font-title-md text-white font-bold text-sm">
              Why Study at IAIT Kaliabor?
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="p-2.5 rounded-lg bg-white/10">
              <span className="font-fee-numeric text-[#FEA619] block font-bold text-sm">100%</span>
              <span className="font-body-sm text-[#e7e7f3] text-[11px] leading-tight">
                Practical Lab Training with Individual PC access
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/10">
              <span className="font-fee-numeric text-[#FEA619] block font-bold text-sm">AMTRON</span>
              <span className="font-body-sm text-[#e7e7f3] text-[11px] leading-tight">
                Govt of Assam recognized certification partner
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/10">
              <span className="font-fee-numeric text-[#FEA619] block font-bold text-sm">
                NCVT DGET
              </span>
              <span className="font-body-sm text-[#e7e7f3] text-[11px] leading-tight">
                National standard trade apprentice guidance
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/10">
              <span className="font-fee-numeric text-[#FEA619] block font-bold text-sm">
                Free Study
              </span>
              <span className="font-body-sm text-[#e7e7f3] text-[11px] leading-tight">
                Course book materials & mock test portal
              </span>
            </div>
          </div>

          <div className="pt-1 flex justify-between items-center text-[#F4DCDD] text-xs">
            <span className="font-label-sm text-[11px]">Need help choosing a course?</span>
            <button
              onClick={() => onNavigate('contact')}
              className="font-label-md text-[#FEA619] font-bold flex items-center gap-0.5 hover:underline"
            >
              <span>Speak to Counselor</span>
              <span className="material-symbols-outlined text-[15px]">call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
