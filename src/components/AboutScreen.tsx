import React from 'react';
import { NavTab } from '../types';

interface AboutScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* Hero / Header */}
      <section className="relative w-full overflow-hidden bg-[#7d2628] text-white px-4 pt-5 pb-6 shadow-md">
        <div className="relative z-10 flex flex-col gap-2">
          <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-white/15 text-[#FEA619] backdrop-blur-sm shadow-xs">
            <span className="material-symbols-outlined text-[15px]">school</span>
            <span className="font-label-sm tracking-wide text-[11px] font-semibold">
              तमसो मा ज्योतिर्गमय • Lead us to Light
            </span>
          </div>

          <h1 className="font-display-lg-mobile text-[28px] sm:text-[32px] tracking-tight font-bold text-white leading-tight">
            About Icon Academy of IT
          </h1>
          <p className="font-body-md text-[#ffdad8] text-xs sm:text-sm leading-snug">
            Empowering Kaliabor and the Brahmaputra Valley with industry-aligned digital literacy, vocational certifications, and career skills since 2008.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#FEA619]">verified</span>
              <span>15+ Years Heritage</span>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#FEA619]">groups</span>
              <span>5,000+ Alumni</span>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#FEA619]">computer</span>
              <span>100% Practical Labs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Mission & Vision */}
      <section className="px-4 pt-5">
        <div className="bg-white rounded-xl p-4 border border-[#ededf8] shadow-xs flex flex-col gap-2.5">
          <span className="font-label-sm text-[#5e0f14] font-bold uppercase tracking-wider text-[11px]">
            Our Educational Mission
          </span>
          <h2 className="font-headline-sm text-[#191b23] font-bold text-base leading-snug">
            Bridging the Rural-Urban Technology Gap
          </h2>
          <p className="font-body-md text-[#564241] text-xs sm:text-sm leading-relaxed">
            Icon Academy of IT (IAIT), Kaliabor was founded with a singular conviction: that rural and suburban youth in Assam deserve access to world-class computer education without having to migrate to distant metropolitan hubs.
          </p>
          <p className="font-body-md text-[#564241] text-xs sm:text-sm leading-relaxed">
            Through certified curricula, personalized one-to-one computer access, and disciplined practical lab sessions, we mold students into confident IT professionals ready for competitive government exams, banking posts, and corporate roles.
          </p>
        </div>
      </section>

      {/* Institutional Accreditations & Affiliations */}
      <section className="px-4 pt-5">
        <div className="flex flex-col mb-3">
          <span className="font-label-sm text-[#5e0f14] font-bold tracking-wider uppercase text-[11px]">
            Recognition & Affiliations
          </span>
          <h2 className="font-headline-sm text-[#191b23] font-bold text-lg">
            Certified Training Partner
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {/* AMTRON */}
          <div className="bg-white rounded-xl p-3.5 border border-[#ededf8] shadow-xs flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#EFF4FF] text-[#00163D] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">account_balance</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-title-md text-[#00163D] font-bold text-sm">
                  AMTRON (Govt. of Assam)
                </h3>
                <span className="px-2 py-0.5 rounded bg-[#EFF4FF] text-[#00163D] font-label-sm text-[10px] font-bold">
                  State Partner
                </span>
              </div>
              <p className="font-body-sm text-[#535E6B] text-xs mt-1 leading-snug">
                Assam Electronics Development Corporation Ltd. Diplomas issued through AMTRON are accepted across Assam state government employment departments and administrative offices.
              </p>
            </div>
          </div>

          {/* IAPS */}
          <div className="bg-white rounded-xl p-3.5 border border-[#ededf8] shadow-xs flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#FDF7F7] text-[#7d2628] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-title-md text-[#7d2628] font-bold text-sm">
                  IAPS Vocational Board
                </h3>
                <span className="px-2 py-0.5 rounded bg-[#FDF7F7] text-[#7d2628] font-label-sm text-[10px] font-bold">
                  National Skill
                </span>
              </div>
              <p className="font-body-sm text-[#535E6B] text-xs mt-1 leading-snug">
                Institute of Applied Professional Studies provides career-oriented certifications in office automation, Tally Prime accounting, and desktop publishing with nationwide validity.
              </p>
            </div>
          </div>

          {/* NCVT ITI */}
          <div className="bg-[#FFF9E6] rounded-xl p-3.5 border border-[#FEA619]/50 shadow-xs flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#FEA619] text-[#00163D] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">military_tech</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-title-md text-[#191b23] font-bold text-sm">
                  NCVT / DGT Govt. of India
                </h3>
                <span className="px-2 py-0.5 rounded bg-[#FEA619] text-[#00163D] font-label-sm text-[10px] font-bold">
                  Central ITI
                </span>
              </div>
              <p className="font-body-sm text-[#535E6B] text-xs mt-1 leading-snug">
                National Trade Certificate in Computer Operator & Programming Assistant (COPA) under the Craftsman Training Scheme (CTS), Ministry of Skill Development & Entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Infrastructure & Labs */}
      <section className="px-4 pt-5">
        <div className="flex flex-col mb-3">
          <span className="font-label-sm text-[#5e0f14] font-bold tracking-wider uppercase text-[11px]">
            Campus Life
          </span>
          <h2 className="font-headline-sm text-[#191b23] font-bold text-lg">
            Modern Lab Infrastructure
          </h2>
        </div>

        <div className="bg-white rounded-xl border border-[#ededf8] overflow-hidden shadow-sm">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsCFIZV7Hg3g4m_ZOQNiOodtd8DSK_qu-JkN7CQijk6E_NFjMy2k9QLwZE-c2ca97T-vNnaf7MWZCvySmKqXDNUdvinrSrYLkNq96geP4L7GYXuwPt6EhloaDCDmpYW7aFhB_lDfOtNCFYihe45iGj3XVBzjffj_LO3EeOrsMxxbZZvgUvLugq5n_TK12KSr-vFuWCH0yt-1aUcL5WUp_pvFIGCX1f_bWrWUK98LNMiXyuOu_gDVM"
            alt="Computer Lab at IAIT Kaliabor"
            className="w-full h-44 object-cover"
          />
          <div className="p-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f2f3fe]">
              <span className="material-symbols-outlined text-[#00163D] text-[18px]">wifi</span>
              <span className="font-semibold text-[#191b23]">High-Speed Fiber</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f2f3fe]">
              <span className="material-symbols-outlined text-[#7d2628] text-[18px]">person</span>
              <span className="font-semibold text-[#191b23]">1 Student : 1 PC</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f2f3fe]">
              <span className="material-symbols-outlined text-[#FEA619] text-[18px]">bolt</span>
              <span className="font-semibold text-[#191b23]">Full Power Backup</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f2f3fe]">
              <span className="material-symbols-outlined text-[#00163D] text-[18px]">ac_unit</span>
              <span className="font-semibold text-[#191b23]">Air Conditioned Lab</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Faculty */}
      <section className="px-4 pt-5">
        <div className="flex flex-col mb-3">
          <span className="font-label-sm text-[#5e0f14] font-bold tracking-wider uppercase text-[11px]">
            Mentorship
          </span>
          <h2 className="font-headline-sm text-[#191b23] font-bold text-lg">
            Experienced Academic Faculty
          </h2>
        </div>

        <div className="bg-white rounded-xl p-4 border border-[#ededf8] shadow-xs flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnLHFROFHdPNsOEU1ON59b41RcDEDIyCxH9pyWOwbdUvaFlJZDs0t80XLMR2EDPH44TeJbHrTGmCx1eXqPjjd6x6vFJMZnUGjSnWIVpf4Wnbv6sVpIxoOqXPi_AJPsS_BhEMN5KWdmjlXFo16dWyHhiFUyto_tO4J0XalfNrnB3e0pwG7Erju1ORDwePloRj29a6C87_Jx54wE8Ls9oVbDx2QXCfaBLu40wPLWthZ-qWymF-GC7FY"
              alt="Director Pranjal Sharma"
              className="w-14 h-14 rounded-full object-cover border-2 border-[#7d2628]/30 shadow-xs shrink-0"
            />
            <div>
              <h3 className="font-title-md text-[#191b23] font-bold text-base">
                Pranjal Sharma
              </h3>
              <span className="font-label-sm text-[#5e0f14] font-bold text-xs block">
                Director & Chief Academic Mentor
              </span>
              <span className="font-body-sm text-[#535E6B] text-[11px]">
                M.Sc. IT • 18+ Years Pedagogy in Computer Science
              </span>
            </div>
          </div>

          <p className="font-body-sm text-[#564241] text-xs leading-relaxed border-t border-[#ededf8] pt-2">
            Supervising comprehensive curricula in Software Engineering, TallyPrime Taxation, Regional Language DTP, and State Board Examinations for over 15 years in Nagaon district.
          </p>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="px-4 pt-5 pb-6">
        <div className="flex flex-col mb-3">
          <span className="font-label-sm text-[#5e0f14] font-bold tracking-wider uppercase text-[11px]">
            Heritage
          </span>
          <h2 className="font-headline-sm text-[#191b23] font-bold text-lg">
            Our Journey in Kaliabor
          </h2>
        </div>

        <div className="border-l-2 border-[#7d2628] ml-3 pl-4 space-y-4 text-xs">
          <div className="relative">
            <span className="w-3 h-3 rounded-full bg-[#7d2628] absolute -left-[23px] top-1 border-2 border-white" />
            <span className="font-bold text-[#7d2628] block">2008</span>
            <p className="text-[#191b23] font-semibold mt-0.5">Inauguration of Icon Academy of IT</p>
            <p className="text-[#535E6B]">Established with 8 workstations to promote foundational computer literacy in Kaliabor.</p>
          </div>

          <div className="relative">
            <span className="w-3 h-3 rounded-full bg-[#00163D] absolute -left-[23px] top-1 border-2 border-white" />
            <span className="font-bold text-[#00163D] block">2012</span>
            <p className="text-[#191b23] font-semibold mt-0.5">AMTRON Authorization</p>
            <p className="text-[#535E6B]">Accredited as official training partner under Assam Electronics Development Corporation.</p>
          </div>

          <div className="relative">
            <span className="w-3 h-3 rounded-full bg-[#FEA619] absolute -left-[23px] top-1 border-2 border-white" />
            <span className="font-bold text-[#FEA619] block">2018</span>
            <p className="text-[#191b23] font-semibold mt-0.5">NCVT ITI Affiliation</p>
            <p className="text-[#535E6B]">Approved for National Trade Certificate in COPA under Ministry of Skill Development.</p>
          </div>

          <div className="relative">
            <span className="w-3 h-3 rounded-full bg-[#7d2628] absolute -left-[23px] top-1 border-2 border-white" />
            <span className="font-bold text-[#7d2628] block">2024–2025</span>
            <p className="text-[#191b23] font-semibold mt-0.5">AI, Python & Cloud Computing Wing</p>
            <p className="text-[#535E6B]">Upgraded workstations with modern AI programming toolkits and automated student portal.</p>
          </div>
        </div>

        {/* CTA Banner to Visit Campus */}
        <div className="mt-5 p-4 rounded-xl bg-[#EFF4FF] border border-[#bcceff] flex items-center justify-between">
          <div>
            <span className="font-title-md text-[#00163D] font-bold text-sm block">
              Want to visit our campus?
            </span>
            <span className="font-body-sm text-[#535E6B] text-xs">
              Take a walk-in tour of our computer lab today.
            </span>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-3.5 py-2 rounded-lg bg-[#00163D] hover:bg-[#031a41] text-white font-label-md text-xs font-bold shadow-xs active:scale-95 transition-transform"
          >
            Find Campus
          </button>
        </div>
      </section>
    </div>
  );
};
