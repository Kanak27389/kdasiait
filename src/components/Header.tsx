import React from 'react';
import { NavTab } from '../types';

interface HeaderProps {
  currentTab: NavTab;
  onNavigateToVerify: () => void;
  onOpenProfile: () => void;
  isShellView: boolean;
  onToggleShellView: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigateToVerify,
  onOpenProfile,
  isShellView,
  onToggleShellView
}) => {
  const getSubTitle = () => {
    switch (currentTab) {
      case 'home':
        return 'Home';
      case 'courses':
        return 'Courses';
      case 'admissions':
        return 'Admissions';
      case 'about':
        return 'About Us';
      case 'contact':
        return 'Contact';
      default:
        return 'Home';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#7d2628] shadow-[0_4px_20px_rgba(0,0,0,0.18)]">
      <div className="max-w-2xl mx-auto h-16 px-3 flex items-center justify-between gap-2">
        {/* Brand identity */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-sm shrink-0 flex items-center justify-center overflow-hidden">
            <img
              alt="IAIT Kaliabor Logo"
              className="h-9 w-9 object-contain shrink-0"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UGMaPWJEZncAHPIQLbTtN88GzrFQ4JZgzcKQtMizUjyHBsCoZwTECR_KAKvlqu7sUuFiybz511IU3Ab_hQqMD7doEs3KuPcPcgbvCYwuQhVQYWmQN6eHngjDlD6CwoNrTKuMZiSwfCI8m8momVUqk0W61nPsm0r8uKAdHtAoMGpz4Yl0bVAQKe0-a5S8m1i03641VQtjUK5Ih7KL50lkPgOp8n6pYSvupLm9y80nGW8Wo3-K7M5DChDD1MokBsy1L3C3GL3XA"
              onError={(e) => {
                // Fallback elegant shield badge if image takes time to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-title-md text-white font-bold truncate tracking-tight text-[16px]">
              IAIT Kaliabor
            </span>
            <span className="font-label-sm text-[#ff9491] truncate font-medium text-[11px]">
              {getSubTitle()}
            </span>
          </div>
        </div>

        {/* Quick action controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Quick Verify Certificate Shortcut */}
          <button
            onClick={onNavigateToVerify}
            className="min-h-[36px] px-2.5 py-1 rounded-lg bg-[#00163D] hover:bg-[#031a41] text-white flex items-center gap-1 font-label-md text-xs shadow-sm active:scale-95 transition-all"
            title="Online Certificate Verification"
          >
            <span className="material-symbols-outlined text-[16px] text-[#FEA619]">
              verified
            </span>
            <span className="font-semibold">Verify</span>
          </button>

          {/* Frame view toggle */}
          <button
            onClick={onToggleShellView}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs"
            title={isShellView ? 'Switch to Full Width View' : 'Switch to Mobile Frame'}
          >
            <span className="material-symbols-outlined text-[18px]">
              {isShellView ? 'smartphone' : 'laptop'}
            </span>
          </button>

          {/* Student Profile / Helpdesk modal trigger */}
          <button
            onClick={onOpenProfile}
            className="w-8 h-8 rounded-full bg-[#5e0f14] hover:bg-[#410006] flex items-center justify-center text-white shadow-xs active:scale-95 transition-all"
            title="Student Portal Info"
          >
            <span className="material-symbols-outlined text-[18px]">
              person
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
