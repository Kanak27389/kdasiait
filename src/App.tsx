/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavTab, Course } from './types';
import { COURSES_DATA } from './data/coursesData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { CoursesScreen } from './components/CoursesScreen';
import { AdmissionsScreen } from './components/AdmissionsScreen';
import { AboutScreen } from './components/AboutScreen';
import { ContactScreen } from './components/ContactScreen';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { SyllabusModal } from './components/SyllabusModal';
import { StudentProfileModal } from './components/StudentProfileModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedCourseForAdmission, setSelectedCourseForAdmission] = useState<string>('adca');
  const [admissionsInitialMode, setAdmissionsInitialMode] = useState<'admission' | 'verify'>('admission');

  // Modals state
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryCourseName, setInquiryCourseName] = useState('');
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState<Course | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Layout View mode: mobile frame or responsive view
  const [isShellView, setIsShellView] = useState(true);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Quick action handlers
  const handleQuickEnroll = (courseName: string) => {
    setInquiryCourseName(courseName);
    setIsInquiryModalOpen(true);
  };

  const handleApplyForCourse = (courseShortCode: string) => {
    setSelectedCourseForAdmission(courseShortCode.toLowerCase());
    setAdmissionsInitialMode('admission');
    setCurrentTab('admissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToVerify = () => {
    setAdmissionsInitialMode('verify');
    setCurrentTab('admissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSyllabusForCourse = (courseShortCode: string) => {
    const found = COURSES_DATA.find(
      (c) => c.shortCode.toLowerCase() === courseShortCode.toLowerCase()
    );
    if (found) {
      setSelectedSyllabusCourse(found);
    } else {
      setSelectedSyllabusCourse(COURSES_DATA[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#ecebf3] flex justify-center items-start selection:bg-[#7d2628] selection:text-white">
      {/* Outer Shell container */}
      <div
        className={`w-full bg-[#faf8ff] min-h-screen flex flex-col relative transition-all duration-300 shadow-2xl ${
          isShellView
            ? 'max-w-[460px] my-0 sm:my-3 sm:rounded-3xl border sm:border-[#d9e2ff] overflow-x-hidden'
            : 'max-w-2xl my-0 sm:my-3 sm:rounded-3xl border sm:border-[#d9e2ff] overflow-x-hidden'
        }`}
      >
        {/* Top Header */}
        <Header
          currentTab={currentTab}
          onNavigateToVerify={handleNavigateToVerify}
          onOpenProfile={() => setIsProfileModalOpen(true)}
          isShellView={isShellView}
          onToggleShellView={() => setIsShellView(!isShellView)}
        />

        {/* Main Content Area */}
        <main className="flex-1 pt-16 pb-20 overflow-y-auto">
          {currentTab === 'home' && (
            <HomeScreen
              onNavigate={(tab) => {
                setCurrentTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onQuickEnroll={handleQuickEnroll}
              onOpenSyllabusForCourse={handleOpenSyllabusForCourse}
              onShowToast={showToast}
            />
          )}

          {currentTab === 'courses' && (
            <CoursesScreen
              onNavigate={(tab) => {
                setCurrentTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onApplyForCourse={handleApplyForCourse}
              onOpenSyllabus={(course) => setSelectedSyllabusCourse(course)}
            />
          )}

          {currentTab === 'admissions' && (
            <AdmissionsScreen
              initialCourseCode={selectedCourseForAdmission}
              initialMode={admissionsInitialMode}
              onShowToast={showToast}
            />
          )}

          {currentTab === 'about' && (
            <AboutScreen
              onNavigate={(tab) => {
                setCurrentTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {currentTab === 'contact' && (
            <ContactScreen
              onNavigate={(tab) => {
                setCurrentTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onShowToast={showToast}
            />
          )}
        </main>

        {/* Fixed Bottom Navigation */}
        <BottomNav
          currentTab={currentTab}
          onSelectTab={(tab) => {
            if (tab === 'admissions') {
              setAdmissionsInitialMode('admission');
            }
            setCurrentTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Toast Notification Float */}
        {toastMessage && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-[#00163D] text-white font-label-md text-xs sm:text-sm shadow-xl flex items-center gap-2 border border-[#FEA619]/40 max-w-[90%] animate-in fade-in slide-in-from-bottom-3 duration-200">
            <span className="material-symbols-outlined text-[18px] text-[#FEA619]">
              notifications_active
            </span>
            <span className="leading-snug">{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="ml-1 text-white/70 hover:text-white"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        )}

        {/* Quick Inquiry Modal */}
        <QuickInquiryModal
          isOpen={isInquiryModalOpen}
          courseName={inquiryCourseName}
          onClose={() => setIsInquiryModalOpen(false)}
          onSubmitSuccess={(studentName, course) => {
            showToast(`Thank you ${studentName}! Inquiry submitted for ${course}.`);
          }}
        />

        {/* Syllabus & Curriculum Modal */}
        <SyllabusModal
          course={selectedSyllabusCourse}
          onClose={() => setSelectedSyllabusCourse(null)}
          onApplyForCourse={handleApplyForCourse}
          onShowToast={showToast}
        />

        {/* Student Helpdesk / Profile Modal */}
        <StudentProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          onGoToAdmissions={() => {
            setAdmissionsInitialMode('admission');
            setCurrentTab('admissions');
          }}
          onGoToVerify={() => {
            setAdmissionsInitialMode('verify');
            setCurrentTab('admissions');
          }}
        />
      </div>
    </div>
  );
}
