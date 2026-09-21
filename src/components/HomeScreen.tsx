import React from 'react';
import { NavTab } from '../types';

interface HomeScreenProps {
  onNavigate: (tab: NavTab) => void;
  onQuickEnroll: (courseName: string) => void;
  onOpenSyllabusForCourse: (courseShortCode: string) => void;
  onShowToast: (message: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onQuickEnroll,
  onOpenSyllabusForCourse,
  onShowToast
}) => {
  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#7d2628] text-white px-4 pt-5 pb-6 shadow-md">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#FEA619]/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-10 bottom-0 w-36 h-36 bg-[#00163D]/30 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-2">
          {/* Sanskrit Vedic Motto Pill */}
          <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#FFF8EC]/15 text-[#FEA619] backdrop-blur-sm shadow-xs">
            <span className="material-symbols-outlined text-[15px]">school</span>
            <span className="font-label-sm tracking-wide text-[11px] font-semibold">
              तमसो मा ज्योतिर्गमय • Lead us to Light
            </span>
          </div>

          <div>
            <h1 className="font-display-lg-mobile text-[30px] sm:text-[34px] tracking-tight text-white font-bold leading-tight">
              Icon Academy of IT
            </h1>
            <p className="font-body-md text-[#ffdad8] mt-1 leading-snug text-sm sm:text-base">
              Premier Computer Training Center in Kaliabor, Assam
            </p>
          </div>

          {/* Affiliation Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="px-2.5 py-0.5 rounded bg-white/15 text-white font-label-sm text-[11px] font-semibold">
              AMTRON
            </span>
            <span className="text-white/60 text-xs">•</span>
            <span className="px-2.5 py-0.5 rounded bg-white/15 text-white font-label-sm text-[11px] font-semibold">
              IAPS
            </span>
            <span className="text-white/60 text-xs">•</span>
            <span className="px-2.5 py-0.5 rounded bg-[#FEA619] text-[#00163D] font-label-sm text-[11px] font-bold">
              NCVT Affiliated
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => onNavigate('admissions')}
              className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 rounded-lg bg-[#FEA619] text-[#00163D] font-label-lg font-bold shadow-sm active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
              <span>Apply Online</span>
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 rounded-lg bg-[#00163D] text-white font-label-lg font-bold shadow-sm active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              <span>Explore Courses</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Utility Strip */}
      <section className="px-4 -mt-3.5 relative z-20">
        <div className="grid grid-cols-4 gap-2 bg-white rounded-xl shadow-md p-2.5 border border-[#ededf8]">
          <button
            onClick={() => onNavigate('admissions')}
            className="flex flex-col items-center text-center p-1 rounded-lg hover:bg-[#f2f3fe] transition-all group active:scale-95"
          >
            <div className="w-10 h-10 rounded-full bg-[#FDF7F7] flex items-center justify-center text-[#7d2628] group-hover:scale-105 transition-transform shadow-xs">
              <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
            </div>
            <span className="font-label-sm text-[#191b23] mt-1.5 font-semibold leading-tight text-[11px]">
              Online Form
            </span>
          </button>

          <button
            onClick={() => onNavigate('courses')}
            className="flex flex-col items-center text-center p-1 rounded-lg hover:bg-[#f2f3fe] transition-all group active:scale-95"
          >
            <div className="w-10 h-10 rounded-full bg-[#EFF4FF] flex items-center justify-center text-[#00163D] group-hover:scale-105 transition-transform shadow-xs">
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </div>
            <span className="font-label-sm text-[#191b23] mt-1.5 font-semibold leading-tight text-[11px]">
              Fee Matrix
            </span>
          </button>

          <button
            onClick={() => onNavigate('admissions')}
            className="flex flex-col items-center text-center p-1 rounded-lg hover:bg-[#f2f3fe] transition-all group active:scale-95"
          >
            <div className="w-10 h-10 rounded-full bg-[#FFF8EC] flex items-center justify-center text-[#633d00] group-hover:scale-105 transition-transform shadow-xs">
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
            </div>
            <span className="font-label-sm text-[#191b23] mt-1.5 font-semibold leading-tight text-[11px]">
              Verify Cert
            </span>
          </button>

          <button
            onClick={() => onOpenSyllabusForCourse('DCA')}
            className="flex flex-col items-center text-center p-1 rounded-lg hover:bg-[#f2f3fe] transition-all group active:scale-95"
          >
            <div className="w-10 h-10 rounded-full bg-[#FDF7F7] flex items-center justify-center text-[#7d2628] group-hover:scale-105 transition-transform shadow-xs">
              <span className="material-symbols-outlined text-[20px]">download</span>
            </div>
            <span className="font-label-sm text-[#191b23] mt-1.5 font-semibold leading-tight text-[11px]">
              Syllabus
            </span>
          </button>
        </div>
      </section>

      {/* Key Achievement Stats (Tactile Milestone Badges) */}
      <section className="px-4 pt-5">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white rounded-xl p-2.5 shadow-sm border border-[#ededf8] text-center flex flex-col items-center">
            <span className="font-headline-md text-[#7d2628] font-bold text-lg sm:text-xl">
              5,000+
            </span>
            <span className="font-label-sm text-[#535E6B] mt-0.5 text-[11px]">
              Certified Alumni
            </span>
          </div>
          <div className="bg-white rounded-xl p-2.5 shadow-sm border border-[#ededf8] text-center flex flex-col items-center">
            <span className="font-headline-md text-[#00163D] font-bold text-lg sm:text-xl">
              15+ Yrs
            </span>
            <span className="font-label-sm text-[#535E6B] mt-0.5 text-[11px]">
              Kaliabor Heritage
            </span>
          </div>
          <div className="bg-white rounded-xl p-2.5 shadow-sm border border-[#ededf8] text-center flex flex-col items-center">
            <span className="font-headline-md text-[#442900] font-bold text-lg sm:text-xl">
              100%
            </span>
            <span className="font-label-sm text-[#535E6B] mt-0.5 text-[11px]">
              Practical Labs
            </span>
          </div>
        </div>
      </section>

      {/* Featured Course Programs Matrix */}
      <section className="px-4 pt-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="font-label-sm text-[#5e0f14] font-bold tracking-wider uppercase text-[11px]">
              Career Pathways
            </span>
            <h2 className="font-headline-sm text-[#191b23] font-bold text-lg">
              Popular Courses
            </h2>
          </div>
          <button
            onClick={() => onNavigate('courses')}
            className="text-[#5e0f14] font-label-md text-xs flex items-center gap-0.5 font-bold hover:underline"
          >
            <span>View all (11)</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Course Cards Stack */}
        <div className="flex flex-col gap-3">
          {/* Course 1: COPA ITI NCVT (Featured Spotlight) */}
          <div className="bg-[#FFF9E6] border border-[#FEA619]/50 rounded-xl p-3 shadow-sm relative overflow-hidden">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-[#FEA619] text-[#00163D] font-label-sm text-[10px] font-bold">
                    Govt ITI (NCVT)
                  </span>
                  <span className="font-label-sm text-[#442900] text-[11px] font-medium">
                    1 Year Regular
                  </span>
                </div>
                <h3 className="font-title-lg text-[#191b23] font-bold mt-1 text-base leading-snug">
                  COPA (Computer Operator & Prog. Asst.)
                </h3>
                <p className="font-body-sm text-[#535E6B] mt-0.5 text-xs">
                  Eligibility: HSLC / 10th Standard Passed
                </p>
              </div>
            </div>

            <div className="mt-3 pt-1 flex items-center justify-between bg-white/90 rounded-lg p-2.5 border border-[#FEA619]/20">
              <div className="flex flex-col">
                <span className="font-label-sm text-[#535E6B] text-[10px]">Govt. Certified Fee</span>
                <span className="font-fee-numeric text-[#7d2628] text-base font-bold">
                  ₹16,000{' '}
                  <span className="font-body-sm text-[#535E6B] font-normal text-xs">
                    / installment opt
                  </span>
                </span>
              </div>
              <button
                onClick={() => onQuickEnroll('COPA (ITI NCVT)')}
                className="min-h-[40px] px-3.5 rounded-lg bg-[#7d2628] hover:bg-[#5e0f14] text-white font-label-md text-xs font-bold shadow-xs active:scale-95 transition-transform flex items-center gap-1"
              >
                <span>Apply Now</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Course 2: ADCA */}
          <div className="bg-white border border-[#ededf8] rounded-xl p-3 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-[#EFF4FF] text-[#00163D] font-label-sm text-[10px] font-bold">
                    AMTRON / IAPS
                  </span>
                  <span className="font-label-sm text-[#535E6B] text-[11px]">12 Months</span>
                </div>
                <h3 className="font-title-lg text-[#191b23] font-bold mt-1 text-base leading-snug">
                  ADCA (Adv. Diploma in Comp. App.)
                </h3>
                <p className="font-body-sm text-[#535E6B] mt-0.5 text-xs">
                  Eligibility: 10+2 / HSSLC any stream
                </p>
              </div>
            </div>

            <div className="mt-3 pt-1 flex items-center justify-between bg-[#f2f3fe] rounded-lg p-2.5">
              <div className="flex flex-col">
                <span className="font-label-sm text-[#535E6B] text-[10px]">Complete Course Fee</span>
                <span className="font-fee-numeric text-[#00163D] text-base font-bold">
                  ₹12,000{' '}
                  <span className="font-body-sm text-[#535E6B] font-normal text-xs">
                    (Monthly EMI)
                  </span>
                </span>
              </div>
              <button
                onClick={() => onQuickEnroll('ADCA (1 Year)')}
                className="min-h-[40px] px-3.5 rounded-lg bg-[#00163D] hover:bg-[#031a41] text-white font-label-md text-xs font-bold shadow-xs active:scale-95 transition-transform flex items-center gap-1"
              >
                <span>Enroll</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Course 3: Python Programming & AI */}
          <div className="bg-white border border-[#ededf8] rounded-xl p-3 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-[#FDF7F7] text-[#7d2628] font-label-sm text-[10px] font-bold">
                    Industry Track
                  </span>
                  <span className="font-label-sm text-[#535E6B] text-[11px]">3 Months</span>
                </div>
                <h3 className="font-title-lg text-[#191b23] font-bold mt-1 text-base leading-snug">
                  Python Programming & AI Basics
                </h3>
                <p className="font-body-sm text-[#535E6B] mt-0.5 text-xs">
                  Eligibility: High school or basic programming curiosity
                </p>
              </div>
            </div>

            <div className="mt-3 pt-1 flex items-center justify-between bg-[#f2f3fe] rounded-lg p-2.5">
              <div className="flex flex-col">
                <span className="font-label-sm text-[#535E6B] text-[10px]">Total Package Fee</span>
                <span className="font-fee-numeric text-[#7d2628] text-base font-bold">
                  ₹5,000{' '}
                  <span className="font-body-sm text-[#535E6B] font-normal text-xs">
                    all inc.
                  </span>
                </span>
              </div>
              <button
                onClick={() => onQuickEnroll('Python & AI')}
                className="min-h-[40px] px-3.5 rounded-lg bg-[#5e0f14] hover:bg-[#410006] text-white font-label-md text-xs font-bold shadow-xs active:scale-95 transition-transform flex items-center gap-1"
              >
                <span>Enroll</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Course 4: Tally Prime with GST */}
          <div className="bg-white border border-[#ededf8] rounded-xl p-3 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-[#ededf8] text-[#191b23] font-label-sm text-[10px] font-bold">
                    Accounting
                  </span>
                  <span className="font-label-sm text-[#535E6B] text-[11px]">3 Months</span>
                </div>
                <h3 className="font-title-lg text-[#191b23] font-bold mt-1 text-base leading-snug">
                  Certificate in Accounting With Tally
                </h3>
                <p className="font-body-sm text-[#535E6B] mt-0.5 text-xs">
                  Eligibility: HS (Commerce) / HSLC
                </p>
              </div>
            </div>

            <div className="mt-3 pt-1 flex items-center justify-between bg-[#f2f3fe] rounded-lg p-2.5">
              <div className="flex flex-col">
                <span className="font-label-sm text-[#535E6B] text-[10px]">Package Fee</span>
                <span className="font-fee-numeric text-[#00163D] text-base font-bold">
                  ₹4,000{' '}
                  <span className="font-body-sm text-[#535E6B] font-normal text-xs">
                    (AMTRON / IAPS)
                  </span>
                </span>
              </div>
              <button
                onClick={() => onQuickEnroll('Accounting With Tally')}
                className="min-h-[40px] px-3.5 rounded-lg bg-[#00163D] hover:bg-[#031a41] text-white font-label-md text-xs font-bold shadow-xs active:scale-95 transition-transform flex items-center gap-1"
              >
                <span>Enroll</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Exam Fee Notice Banner */}
        <div className="mt-3 bg-[#FFF9E6] border border-[#FEA619]/40 rounded-xl p-3 flex items-start gap-2 shadow-xs">
          <span className="material-symbols-outlined text-[#FEA619] text-[20px] shrink-0 mt-0.5">
            info
          </span>
          <p className="font-body-sm text-[#442900] text-xs leading-snug">
            <strong className="font-bold">N.B:</strong> Government examination registration and assessment fees are paid separately per semester guidelines.
          </p>
        </div>
      </section>

      {/* Campus Life / Infrastructure Banner */}
      <section className="px-4 pt-6">
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            alt="Dedicated hands-on computer workstations at IAIT Kaliabor"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsCFIZV7Hg3g4m_ZOQNiOodtd8DSK_qu-JkN7CQijk6E_NFjMy2k9QLwZE-c2ca97T-vNnaf7MWZCvySmKqXDNUdvinrSrYLkNq96geP4L7GYXuwPt6EhloaDCDmpYW7aFhB_lDfOtNCFYihe45iGj3XVBzjffj_LO3EeOrsMxxbZZvgUvLugq5n_TK12KSr-vFuWCH0yt-1aUcL5WUp_pvFIGCX1f_bWrWUK98LNMiXyuOu_gDVM"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00163D]/95 via-[#00163D]/45 to-transparent p-4 flex flex-col justify-end">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FEA619] text-[#00163D] font-label-sm text-[10px] font-bold self-start mb-1">
              High-Tech Infrastructure
            </span>
            <h4 className="font-headline-sm text-white font-bold text-lg leading-tight">
              Dedicated Hands-on Workstations
            </h4>
            <p className="font-body-sm text-[#d9e2ff] mt-0.5 text-xs leading-snug">
              1 Student : 1 PC policy ensuring genuine skill mastery for every enrollee.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose IAIT Kaliabor (Institutional Pillars) */}
      <section className="px-4 pt-6">
        <div className="flex flex-col mb-3">
          <span className="font-label-sm text-[#5e0f14] font-bold tracking-wider uppercase text-[11px]">
            Our Edge
          </span>
          <h2 className="font-headline-sm text-[#191b23] font-bold text-lg">
            Why Choose IAIT?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          <div className="bg-white border border-[#ededf8] rounded-xl p-3 shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFF4FF] text-[#00163D] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">laptop_mac</span>
            </div>
            <div>
              <h3 className="font-title-md text-[#191b23] font-bold text-sm">
                100% Practical Lab Sessions
              </h3>
              <p className="font-body-sm text-[#535E6B] mt-0.5 text-xs">
                Emphasis on real software implementation, programming sprints, and live project work.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#ededf8] rounded-xl p-3 shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDF7F7] text-[#7d2628] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">verified</span>
            </div>
            <div>
              <h3 className="font-title-md text-[#191b23] font-bold text-sm">
                Govt. Recognized Certification
              </h3>
              <p className="font-body-sm text-[#535E6B] mt-0.5 text-xs">
                Valid for state and central government employment recruitments across India.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#ededf8] rounded-xl p-3 shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF8EC] text-[#633d00] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">work_history</span>
            </div>
            <div>
              <h3 className="font-title-md text-[#191b23] font-bold text-sm">
                Job Placement Support
              </h3>
              <p className="font-body-sm text-[#535E6B] mt-0.5 text-xs">
                Resume writing, mock technical interviews, and direct referrals to Nagaon and Guwahati firms.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#ededf8] rounded-xl p-3 shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ededf8] text-[#564241] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">savings</span>
            </div>
            <div>
              <h3 className="font-title-md text-[#191b23] font-bold text-sm">
                Affordable Installment System
              </h3>
              <p className="font-body-sm text-[#535E6B] mt-0.5 text-xs">
                Zero-burden monthly installment schedule with scholarship exemptions for merit candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Welcome Note */}
      <section className="px-4 pt-6">
        <div className="bg-white border border-[#ededf8] rounded-2xl p-4 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover shadow-xs shrink-0 border-2 border-[#7d2628]/20"
              alt="Director Pranjal Sharma"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnLHFROFHdPNsOEU1ON59b41RcDEDIyCxH9pyWOwbdUvaFlJZDs0t80XLMR2EDPH44TeJbHrTGmCx1eXqPjjd6x6vFJMZnUGjSnWIVpf4Wnbv6sVpIxoOqXPi_AJPsS_BhEMN5KWdmjlXFo16dWyHhiFUyto_tO4J0XalfNrnB3e0pwG7Erju1ORDwePloRj29a6C87_Jx54wE8Ls9oVbDx2QXCfaBLu40wPLWthZ-qWymF-GC7FY"
            />
            <div className="flex flex-col min-w-0">
              <h3 className="font-title-md text-[#191b23] font-bold truncate text-base">
                Director's Welcome Note
              </h3>
              <span className="font-label-sm text-[#5e0f14] font-semibold text-xs">
                Icon Academy of IT, Kaliabor
              </span>
            </div>
          </div>

          <blockquote className="font-body-md text-[#564241] italic mt-3 pl-2 border-l-2 border-[#7d2628] text-xs sm:text-sm leading-relaxed">
            "Our mission in Kaliabor has always been clear: to empower our youth with authentic technological competence. In the era of Artificial Intelligence and digital administration, we bridge the divide between classroom theory and real industrial capability."
          </blockquote>

          <div className="mt-3 pt-2 border-t border-[#ededf8] flex items-center justify-between">
            <div className="flex items-center gap-0.5 text-[#FEA619]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <span className="font-label-sm text-[#535E6B] text-[11px]">
              Dedicated to Academic Excellence
            </span>
          </div>
        </div>
      </section>

      {/* Student Success Stories / Testimonials */}
      <section className="px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="font-label-sm text-[#5e0f14] font-bold tracking-wider uppercase text-[11px]">
              Alumni Voices
            </span>
            <h2 className="font-headline-sm text-[#191b23] font-bold text-lg">
              Student Journeys
            </h2>
          </div>
          <span className="font-label-sm text-[#535E6B] text-xs font-semibold">
            Verified Placements
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {/* Testimonial 1 */}
          <div className="bg-white border border-[#ededf8] rounded-xl p-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FDF7F7] text-[#7d2628] font-bold flex items-center justify-center text-sm">
                  P
                </div>
                <div>
                  <h3 className="font-title-md text-[#191b23] font-semibold text-sm">
                    Pallabi Saikia
                  </h3>
                  <p className="font-label-sm text-[#535E6B] text-[10px]">
                    COPA Batch 2023 • District Office Assistant
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ededf8] text-[#191b23] font-label-sm text-[10px] font-bold">
                NCVT Cert
              </span>
            </div>
            <p className="font-body-sm text-[#564241] mt-2 text-xs leading-relaxed">
              "The regular computer lab practice at IAIT Kaliabor gave me the confidence to crack the practical exam for Assam State Government office recruitment. The instructors guided me at every step."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-[#ededf8] rounded-xl p-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#EFF4FF] text-[#00163D] font-bold flex items-center justify-center text-sm">
                  R
                </div>
                <div>
                  <h3 className="font-title-md text-[#191b23] font-semibold text-sm">
                    Rupam Bora
                  </h3>
                  <p className="font-label-sm text-[#535E6B] text-[10px]">
                    ADCA Batch 2024 • Junior Web Designer
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#EFF4FF] text-[#00163D] font-label-sm text-[10px] font-bold">
                AMTRON Cert
              </span>
            </div>
            <p className="font-body-sm text-[#564241] mt-2 text-xs leading-relaxed">
              "I learned Python, Database Management, and Web Basics here. Affordable installment fees made it possible for me to complete my dream course without straining my family."
            </p>
          </div>
        </div>

        {/* Callout Banner to Apply */}
        <div className="mt-5 p-5 rounded-2xl bg-gradient-to-br from-[#7d2628] to-[#00163D] text-white shadow-lg flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#FEA619] text-[#00163D] flex items-center justify-center mb-2 shadow-sm">
            <span className="material-symbols-outlined text-[26px]">edit_calendar</span>
          </div>
          <h3 className="font-headline-sm font-bold text-lg">Admissions Open for 2025</h3>
          <p className="font-body-sm text-[#ffdad8] mt-1 max-w-xs text-xs leading-snug">
            Limited seats per batch to preserve our 1-to-1 workstation guidance policy.
          </p>
          <button
            onClick={() => onNavigate('admissions')}
            className="mt-3 min-h-[44px] px-6 rounded-lg bg-[#FEA619] hover:bg-[#ffb95e] text-[#00163D] font-label-lg font-bold shadow-sm active:scale-95 transition-transform flex items-center gap-2"
          >
            <span>Fill Registration Form</span>
            <span className="material-symbols-outlined text-[18px]">touch_app</span>
          </button>
        </div>
      </section>
    </div>
  );
};
