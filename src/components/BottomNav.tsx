import React from 'react';
import { NavTab } from '../types';

interface BottomNavProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs: { id: NavTab; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'account_balance' },
    { id: 'courses', label: 'Courses', icon: 'menu_book' },
    { id: 'admissions', label: 'Admissions', icon: 'how_to_reg' },
    { id: 'about', label: 'About', icon: 'school' },
    { id: 'contact', label: 'Contact', icon: 'call' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-xl border-t border-[#ededf8] shadow-[0_-2px_12px_rgba(0,22,61,0.08)]">
      <div className="max-w-2xl mx-auto flex justify-around items-center h-16 px-1">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] flex-1 transition-all active:scale-95 ${
                isActive
                  ? 'text-[#7d2628] font-bold'
                  : 'text-[#564241] hover:text-[#7d2628]'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {tab.icon}
              </span>
              <span className="font-label-sm text-[11px] mt-0.5 tracking-tight">
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#7d2628] mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
