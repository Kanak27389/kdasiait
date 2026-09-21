import React, { useState } from 'react';
import { Course, AdmissionApplication } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { SAMPLE_CERTIFICATES } from '../data/certificatesData';
import { FileUploadField, UploadedFileMeta } from './FileUploadField';

interface AdmissionsScreenProps {
  initialCourseCode?: string;
  initialMode?: 'admission' | 'verify';
  onShowToast: (message: string) => void;
}

export const AdmissionsScreen: React.FC<AdmissionsScreenProps> = ({
  initialCourseCode,
  initialMode = 'admission',
  onShowToast
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'admission' | 'verify'>(initialMode);

  // Admission Form State
  const [formData, setFormData] = useState({
    fullName: '',
    guardianName: '',
    dob: '',
    gender: 'Male',
    phone: '',
    email: '',
    address: '',
    qualification: 'HSLC / 10th Passed',
    courseId: initialCourseCode || 'adca',
    affiliation: 'AMTRON Affiliated',
    batch: 'Morning (8:00 AM – 10:00 AM)',
    agreedToTerms: false
  });

  // Document Uploads State
  const [photoFile, setPhotoFile] = useState<UploadedFileMeta | null>(null);
  const [qualificationDocFile, setQualificationDocFile] = useState<UploadedFileMeta | null>(null);
  const [addressProofFile, setAddressProofFile] = useState<UploadedFileMeta | null>(null);

  // Modal for previewing uploaded documents
  const [previewDocModal, setPreviewDocModal] = useState<{
    title: string;
    url: string;
    name: string;
    isPdf?: boolean;
  } | null>(null);

  const [submittedApplication, setSubmittedApplication] = useState<AdmissionApplication | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Certificate Verification State
  const [searchRegNo, setSearchRegNo] = useState('');
  const [searchedRecord, setSearchedRecord] = useState(SAMPLE_CERTIFICATES['IAIT/2024/ADCA/0412']);
  const [hasSearched, setHasSearched] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLoadDemoData = () => {
    setFormData({
      fullName: 'JITUMONI SAIKIA',
      guardianName: 'BIPUL SAIKIA',
      dob: '2004-06-15',
      gender: 'Male',
      phone: '9854084221',
      email: 'jitumoni.kaliabor@gmail.com',
      address: 'Vill: Kuwaritol, PO: Kaliabor, Dist: Nagaon, Assam - 782137',
      qualification: 'Higher Secondary (Arts/Sc/Com)',
      courseId: 'adca',
      affiliation: 'AMTRON Affiliated',
      batch: 'Morning (8:00 AM – 10:00 AM)',
      agreedToTerms: true
    });
    setPhotoFile({
      file: new File(['demo'], 'jitumoni_photo.jpg', { type: 'image/jpeg' }),
      previewUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
      name: 'jitumoni_passport_photo.jpg',
      size: '148 KB',
      isPdf: false
    });
    setQualificationDocFile({
      file: new File(['demo'], 'hs_marksheet.jpg', { type: 'image/jpeg' }),
      previewUrl: 'https://images.unsplash.com/photo-1589330694653-dad6d3240a2f?w=600&auto=format&fit=crop&q=80',
      name: 'ahsec_higher_secondary_marksheet.jpg',
      size: '520 KB',
      isPdf: false
    });
    setAddressProofFile({
      file: new File(['demo'], 'aadhaar_card.jpg', { type: 'image/jpeg' }),
      previewUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
      name: 'aadhaar_card_kaliabor.jpg',
      size: '340 KB',
      isPdf: false
    });
    onShowToast('Filled demo candidate details with photo & verification docs!');
  };

  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      onShowToast('Please fill out the candidate name and mobile number.');
      return;
    }
    if (!photoFile) {
      onShowToast('Please upload the candidate passport photograph.');
      return;
    }
    if (!qualificationDocFile) {
      onShowToast('Please upload your highest qualification marksheet / certificate.');
      return;
    }
    if (!addressProofFile) {
      onShowToast('Please upload your permanent address proof document.');
      return;
    }
    if (!formData.agreedToTerms) {
      onShowToast('Please accept the institutional declaration to proceed.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const selectedCourseObj = COURSES_DATA.find(
        (c) => c.id === formData.courseId || c.shortCode.toLowerCase() === formData.courseId.toLowerCase()
      );
      const courseName = selectedCourseObj ? selectedCourseObj.name : formData.courseId;

      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const year = new Date().getFullYear();
      const code = selectedCourseObj ? selectedCourseObj.shortCode : 'ADM';
      const enrollmentNo = `IAIT/${year}/${code}/${randomNum}`;

      const newApp: AdmissionApplication = {
        enrollmentNo,
        name: formData.fullName,
        guardian: formData.guardianName,
        dob: formData.dob || '01-01-2005',
        gender: formData.gender,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        qualification: formData.qualification,
        course: courseName,
        affiliation: formData.affiliation,
        batch: formData.batch,
        timestamp: new Date().toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }),
        photoUrl: photoFile.previewUrl,
        photoName: photoFile.name,
        qualificationDocName: qualificationDocFile.name,
        qualificationDocUrl: qualificationDocFile.previewUrl,
        qualificationDocIsPdf: qualificationDocFile.isPdf,
        addressProofName: addressProofFile.name,
        addressProofUrl: addressProofFile.previewUrl,
        addressProofIsPdf: addressProofFile.isPdf
      };

      setSubmittedApplication(newApp);
      onShowToast(`Admission Registration Successful! Reg No: ${enrollmentNo}`);
    }, 700);
  };

  const handleSearchCertificate = (regNumberToSearch?: string) => {
    const query = (regNumberToSearch || searchRegNo).trim().toUpperCase();
    if (!query) {
      onShowToast('Please enter a registration number.');
      return;
    }

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
      // Look up in database
      const found = Object.values(SAMPLE_CERTIFICATES).find(
        (item) => item.enrollmentNo.toUpperCase() === query
      );

      if (found) {
        setSearchedRecord(found);
        onShowToast('Certificate Record Verified & Found!');
      } else {
        // If searching an application submitted in current session
        if (submittedApplication && submittedApplication.enrollmentNo.toUpperCase() === query) {
          setSearchedRecord({
            enrollmentNo: submittedApplication.enrollmentNo,
            name: submittedApplication.name,
            guardian: `Guardian: ${submittedApplication.guardian || 'Verified'}`,
            course: submittedApplication.course,
            programName: submittedApplication.course,
            affiliation: submittedApplication.affiliation,
            score: 'Enrolled',
            grade: 'Current Student',
            duration: 'Active Session',
            examDate: 'Scheduled 2025',
            issueDate: 'Provisional Reg Issued',
            photoUrl: submittedApplication.photoUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnLHFROFHdPNsOEU1ON59b41RcDEDIyCxH9pyWOwbdUvaFlJZDs0t80XLMR2EDPH44TeJbHrTGmCx1eXqPjjd6x6vFJMZnUGjSnWIVpf4Wnbv6sVpIxoOqXPi_AJPsS_BhEMN5KWdmjlXFo16dWyHhiFUyto_tO4J0XalfNrnB3e0pwG7Erju1ORDwePloRj29a6C87_Jx54wE8Ls9oVbDx2QXCfaBLu40wPLWthZ-qWymF-GC7FY',
            status: 'Active & Validated'
          });
          onShowToast('Active Enrollee Record Verified!');
        } else {
          setSearchedRecord(null as unknown as typeof searchedRecord);
          onShowToast('No record found for this number.');
        }
      }
    }, 400);
  };

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* Subtabs Switcher */}
      <div className="p-4 bg-white border-b border-[#ededf8] sticky top-16 z-40">
        <div className="flex rounded-xl bg-[#f2f3fe] p-1 border border-[#d9e2ff]/50">
          <button
            onClick={() => setActiveSubTab('admission')}
            className={`flex-1 py-2 rounded-lg font-label-md text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'admission'
                ? 'bg-[#7d2628] text-white shadow-xs'
                : 'text-[#564241] hover:text-[#191b23]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px]">how_to_reg</span>
            <span>Online Admission</span>
          </button>

          <button
            onClick={() => setActiveSubTab('verify')}
            className={`flex-1 py-2 rounded-lg font-label-md text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'verify'
                ? 'bg-[#00163D] text-white shadow-xs'
                : 'text-[#564241] hover:text-[#191b23]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px] text-[#FEA619]">verified</span>
            <span>Verify Certificate</span>
          </button>
        </div>
      </div>

      {activeSubTab === 'admission' ? (
        <div className="px-4 py-4 flex flex-col gap-4">
          {/* Header Banner */}
          <div className="rounded-xl bg-gradient-to-r from-[#7d2628] to-[#5e0f14] text-white p-4 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <span className="px-2 py-0.5 rounded bg-white/20 font-label-sm text-[10px] font-bold uppercase tracking-wider">
                Academic Session 2025–26
              </span>
              <h2 className="font-headline-sm text-white font-bold text-lg mt-1">
                Student Admission Portal
              </h2>
              <p className="font-body-sm text-[#ffdad8] text-xs mt-0.5 leading-snug">
                Reserve your workstation at IAIT Kaliabor for AMTRON, IAPS, and NCVT ITI certified vocational computer diplomas.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-15 pointer-events-none">
              <span className="material-symbols-outlined text-[100px]">school</span>
            </div>
          </div>

          {/* If Application has been submitted, show the official acknowledgement receipt! */}
          {submittedApplication ? (
            <div className="bg-white rounded-2xl p-5 border-2 border-[#7d2628] shadow-lg flex flex-col gap-4 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-[#ededf8]">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#7d2628] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[#5e0f14] font-bold text-[11px] block">
                      Application Registered
                    </span>
                    <h3 className="font-title-md text-[#191b23] font-bold">
                      Admission Acknowledgement
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSubmittedApplication(null);
                    setPhotoFile(null);
                    setQualificationDocFile(null);
                    setAddressProofFile(null);
                    setFormData({
                      fullName: '',
                      guardianName: '',
                      dob: '',
                      gender: 'Male',
                      phone: '',
                      email: '',
                      address: '',
                      qualification: 'HSLC / 10th Passed',
                      courseId: initialCourseCode || 'adca',
                      affiliation: 'AMTRON Affiliated',
                      batch: 'Morning (8:00 AM – 10:00 AM)',
                      agreedToTerms: false
                    });
                  }}
                  className="px-2.5 py-1 rounded-md bg-[#ededf8] text-[#564241] font-label-sm text-xs hover:bg-[#e1e2ed]"
                >
                  New Form
                </button>
              </div>

              {/* Reg number & Candidate Photo highlight */}
              <div className="p-3.5 rounded-xl bg-[#FFF9E6] border border-[#FEA619] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {submittedApplication.photoUrl ? (
                    <img
                      src={submittedApplication.photoUrl}
                      alt={submittedApplication.name}
                      className="w-16 h-20 rounded-lg object-cover border-2 border-[#7d2628] shadow-sm bg-white shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-20 rounded-lg bg-white border border-[#c2c5dd] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-3xl text-[#535E6B]">person</span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <span className="font-label-sm text-[#633d00] text-[10px] uppercase font-bold block">
                      Temporary Registration / Enrollment ID
                    </span>
                    <span className="font-fee-numeric text-[#7d2628] text-base sm:text-lg font-bold block truncate">
                      {submittedApplication.enrollmentNo}
                    </span>
                    <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-[#DEF7EC] text-[#03543F] font-label-sm text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      <span>Documents Uploaded</span>
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-label-sm text-[#535E6B] text-[10px] block">Date</span>
                  <span className="font-body-sm text-[#191b23] font-bold text-xs">
                    {submittedApplication.timestamp}
                  </span>
                </div>
              </div>

              {/* Student info summary */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-[#f2f3fe]">
                  <span className="text-[#535E6B] text-[10px] block">Candidate Name</span>
                  <span className="font-bold text-[#191b23] text-sm block uppercase">
                    {submittedApplication.name}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#f2f3fe]">
                  <span className="text-[#535E6B] text-[10px] block">Father / Guardian</span>
                  <span className="font-bold text-[#191b23] text-sm block uppercase">
                    {submittedApplication.guardian || 'N/A'}
                  </span>
                </div>
                <div className="col-span-2 p-2.5 rounded-lg bg-[#f2f3fe]">
                  <span className="text-[#535E6B] text-[10px] block">Course Selected</span>
                  <span className="font-bold text-[#00163D] text-sm block">
                    {submittedApplication.course}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#f2f3fe]">
                  <span className="text-[#535E6B] text-[10px] block">Batch Timing</span>
                  <span className="font-semibold text-[#191b23] block">
                    {submittedApplication.batch}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#f2f3fe]">
                  <span className="text-[#535E6B] text-[10px] block">Contact Mobile</span>
                  <span className="font-semibold text-[#191b23] block">
                    +91 {submittedApplication.phone}
                  </span>
                </div>
                <div className="col-span-2 p-2.5 rounded-lg bg-[#f2f3fe]">
                  <span className="text-[#535E6B] text-[10px] block">Permanent Address</span>
                  <span className="font-semibold text-[#191b23] block">
                    {submittedApplication.address}
                  </span>
                </div>
              </div>

              {/* Attached Uploaded Documents Section on Receipt */}
              <div className="bg-[#FAF8FF] rounded-xl p-3.5 border border-[#d9e2ff] flex flex-col gap-2.5">
                <span className="font-label-sm text-[#00163D] font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#00163D]">attach_file</span>
                  <span>Uploaded & Verified Documents (3 Files)</span>
                </span>

                <div className="flex flex-col gap-2">
                  {/* Photo Item */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ededf8]">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="material-symbols-outlined text-[#7d2628] text-[18px]">account_box</span>
                      <div className="min-w-0">
                        <span className="font-bold text-xs text-[#191b23] block truncate">
                          Photo: {submittedApplication.photoName || 'candidate_passport_photo.jpg'}
                        </span>
                        <span className="text-[10px] text-[#03543F] font-semibold">Attached for Student Identity Card</span>
                      </div>
                    </div>
                    {submittedApplication.photoUrl && (
                      <button
                        type="button"
                        onClick={() => setPreviewDocModal({
                          title: 'Candidate Passport Photograph',
                          url: submittedApplication.photoUrl!,
                          name: submittedApplication.photoName || 'candidate_passport_photo.jpg'
                        })}
                        className="px-2.5 py-1 rounded bg-[#EFF4FF] hover:bg-[#d9e2ff] text-[#00163D] text-[11px] font-bold shrink-0 transition-colors"
                      >
                        View Photo
                      </button>
                    )}
                  </div>

                  {/* Qualification Item */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ededf8]">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="material-symbols-outlined text-[#00163D] text-[18px]">school</span>
                      <div className="min-w-0">
                        <span className="font-bold text-xs text-[#191b23] block truncate">
                          Qualification: {submittedApplication.qualificationDocName || 'highest_qualification.pdf'}
                        </span>
                        <span className="text-[10px] text-[#535E6B]">{submittedApplication.qualification}</span>
                      </div>
                    </div>
                    {submittedApplication.qualificationDocUrl && (
                      <button
                        type="button"
                        onClick={() => setPreviewDocModal({
                          title: 'Highest Qualification Document',
                          url: submittedApplication.qualificationDocUrl!,
                          name: submittedApplication.qualificationDocName || 'qualification_marksheet',
                          isPdf: submittedApplication.qualificationDocIsPdf
                        })}
                        className="px-2.5 py-1 rounded bg-[#EFF4FF] hover:bg-[#d9e2ff] text-[#00163D] text-[11px] font-bold shrink-0 transition-colors"
                      >
                        View Doc
                      </button>
                    )}
                  </div>

                  {/* Address Proof Item */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ededf8]">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="material-symbols-outlined text-[#FEA619] text-[18px]">home_pin</span>
                      <div className="min-w-0">
                        <span className="font-bold text-xs text-[#191b23] block truncate">
                          Address Proof: {submittedApplication.addressProofName || 'address_proof.pdf'}
                        </span>
                        <span className="text-[10px] text-[#03543F] font-semibold">Valid Proof Attached</span>
                      </div>
                    </div>
                    {submittedApplication.addressProofUrl && (
                      <button
                        type="button"
                        onClick={() => setPreviewDocModal({
                          title: 'Permanent Address Proof',
                          url: submittedApplication.addressProofUrl!,
                          name: submittedApplication.addressProofName || 'address_proof',
                          isPdf: submittedApplication.addressProofIsPdf
                        })}
                        className="px-2.5 py-1 rounded bg-[#EFF4FF] hover:bg-[#d9e2ff] text-[#00163D] text-[11px] font-bold shrink-0 transition-colors"
                      >
                        View Doc
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Instruction Note */}
              <div className="p-3 rounded-lg bg-[#FDF7F7] border border-[#dcc0be] text-xs text-[#564241] space-y-1">
                <p className="font-bold text-[#7d2628]">Next Steps:</p>
                <p>1. Your digital documents (Passport Photo, Marksheet, Address Proof) have been registered in the IAIT admissions desk.</p>
                <p>2. Please visit the IAIT Kaliabor Office (Near Post Office, Kaliabor, Nagaon) for original verification and seat allotment.</p>
                <p className="text-[11px] text-[#5e0f14] italic mt-1 font-semibold">
                  * Exam Fees are not included in the tuition fee and will be notified prior to semester boards.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onShowToast('Admission Receipt saved to device!');
                  }}
                  className="flex-1 min-h-[44px] rounded-lg bg-[#00163D] text-white font-label-md text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[16px]">print</span>
                  <span>Print Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSubTab('verify');
                    setSearchRegNo(submittedApplication.enrollmentNo);
                    handleSearchCertificate(submittedApplication.enrollmentNo);
                  }}
                  className="flex-1 min-h-[44px] rounded-lg bg-[#7d2628] text-white font-label-md text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Check Status</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Admission Form */
            <form onSubmit={handleAdmissionSubmit} className="flex flex-col gap-4">
              {/* Step 1: Candidate Personal Details */}
              <div className="bg-white rounded-xl p-4 border border-[#ededf8] shadow-xs flex flex-col gap-3">
                <div className="flex items-center gap-2 pb-2 border-b border-[#ededf8]">
                  <div className="w-6 h-6 rounded-full bg-[#7d2628] text-white font-bold text-xs flex items-center justify-center">
                    1
                  </div>
                  <h3 className="font-title-md text-[#191b23] font-bold text-sm">
                    Candidate Details
                  </h3>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-[#535E6B] text-xs">
                    Full Name (as in Matric / HSLC Certificate) *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. JYOTISHMOI BORA"
                    className="w-full px-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none transition-all uppercase"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-[#535E6B] text-xs">
                    Father's / Guardian's Name *
                  </label>
                  <input
                    type="text"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    placeholder="e.g. PRABIN BORA"
                    className="w-full px-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none transition-all uppercase"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-[#535E6B] text-xs">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-[#535E6B] text-xs">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none transition-all"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Contact & Address */}
              <div className="bg-white rounded-xl p-4 border border-[#ededf8] shadow-xs flex flex-col gap-3">
                <div className="flex items-center gap-2 pb-2 border-b border-[#ededf8]">
                  <div className="w-6 h-6 rounded-full bg-[#7d2628] text-white font-bold text-xs flex items-center justify-center">
                    2
                  </div>
                  <h3 className="font-title-md text-[#191b23] font-bold text-sm">
                    Contact & Communication
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-[#535E6B] text-xs">
                      WhatsApp Mobile Number *
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-xs font-bold text-[#535E6B]">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="98540 12345"
                        className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-[#535E6B] text-xs">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="student@example.com"
                      className="w-full px-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-[#535E6B] text-xs">
                    Permanent Address (Village / Town, PO, Dist, PIN) *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g. Vill: Kuwaritol, PO: Kaliabor, Dist: Nagaon, Assam - 782137"
                    rows={2}
                    className="w-full px-3 py-2 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none resize-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Step 3: Academic & Course Selection */}
              <div className="bg-white rounded-xl p-4 border border-[#ededf8] shadow-xs flex flex-col gap-3">
                <div className="flex items-center gap-2 pb-2 border-b border-[#ededf8]">
                  <div className="w-6 h-6 rounded-full bg-[#7d2628] text-white font-bold text-xs flex items-center justify-center">
                    3
                  </div>
                  <h3 className="font-title-md text-[#191b23] font-bold text-sm">
                    Academic Course Selection
                  </h3>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-[#535E6B] text-xs">
                    Highest Qualification *
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none"
                  >
                    <option value="HSLC / 10th Passed">HSLC / 10th Standard Passed</option>
                    <option value="Higher Secondary (Arts/Sc/Com)">Higher Secondary (10+2) Any Stream</option>
                    <option value="Graduate (BA / B.Sc / B.Com / BCA)">Graduate Degree (BA / B.Sc / B.Com / BCA)</option>
                    <option value="Post Graduate">Post Graduate / Professional</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-[#535E6B] text-xs">
                    Desired Computer Course *
                  </label>
                  <select
                    name="courseId"
                    value={formData.courseId}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] font-semibold focus:outline-none"
                  >
                    {COURSES_DATA.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-[#535E6B] text-xs">
                      Affiliation Board Preference
                    </label>
                    <select
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none"
                    >
                      <option value="AMTRON Affiliated">AMTRON (Govt of Assam Undertaking)</option>
                      <option value="IAPS Affiliated">IAPS Board Certified</option>
                      <option value="NCVT ITI Govt">NCVT ITI (DGT Govt of India - for COPA)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-[#535E6B] text-xs">
                      Preferred Batch Timing
                    </label>
                    <select
                      name="batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#7d2628] focus:bg-white text-sm text-[#191b23] focus:outline-none"
                    >
                      <option value="Morning (8:00 AM – 10:00 AM)">Morning: 8:00 AM – 10:00 AM</option>
                      <option value="Mid-Day (10:00 AM – 12:00 PM)">Mid-Day: 10:00 AM – 12:00 PM</option>
                      <option value="Afternoon (1:00 PM – 3:00 PM)">Afternoon: 1:00 PM – 3:00 PM</option>
                      <option value="Evening (3:00 PM – 5:00 PM)">Evening: 3:00 PM – 5:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Required Document Uploads */}
              <div className="bg-white rounded-xl p-4 border border-[#ededf8] shadow-xs flex flex-col gap-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#ededf8]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#7d2628] text-white font-bold text-xs flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-title-md text-[#191b23] font-bold text-sm">
                        Upload Required Documents
                      </h3>
                      <span className="text-[11px] text-[#535E6B] block">
                        Mandatory documents for online admission verification & student ID
                      </span>
                    </div>
                  </div>

                  {/* Demo Data Autofill Shortcut for testing convenience */}
                  <button
                    type="button"
                    id="btn-autofill-demo-admissions"
                    onClick={handleLoadDemoData}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#EFF4FF] hover:bg-[#d9e2ff] text-[#00163D] font-label-sm text-[11px] font-bold border border-[#bcceff] transition-colors active:scale-95"
                    title="Populate candidate info and mock documents for quick demonstration"
                  >
                    <span className="material-symbols-outlined text-[15px] text-[#FEA619]">magic_button</span>
                    <span>Demo Data</span>
                  </button>
                </div>

                {/* 1. Upload Photo */}
                <FileUploadField
                  id="upload-candidate-photo"
                  label="Upload Candidate Passport Photo"
                  sublabel="Recent passport-sized photo with white or clear background (JPG, PNG, WebP up to 5MB)"
                  required={true}
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  icon="account_box"
                  isPhoto={true}
                  value={photoFile}
                  onChange={setPhotoFile}
                  helperText="JPG, PNG, WebP (Max 5MB) • Required for official Student ID Card"
                />

                {/* 2. Upload Highest Qualification */}
                <FileUploadField
                  id="upload-highest-qualification"
                  label="Upload Highest Qualification"
                  sublabel="HSLC (10th), Higher Secondary (10+2), or Degree marksheet / pass certificate (PDF or Image up to 10MB)"
                  required={true}
                  accept="image/jpeg,image/png,image/webp,.pdf,application/pdf"
                  icon="school"
                  isPhoto={false}
                  value={qualificationDocFile}
                  onChange={setQualificationDocFile}
                  helperText="PDF, JPG, PNG (Max 10MB) • Self-attested copy or original scan"
                />

                {/* 3. Upload Address Proof */}
                <FileUploadField
                  id="upload-address-proof"
                  label="Upload Address Proof"
                  sublabel="Aadhaar Card, Voter ID, PRC, or Village Headman Certificate (PDF or Image up to 10MB)"
                  required={true}
                  accept="image/jpeg,image/png,image/webp,.pdf,application/pdf"
                  icon="home_pin"
                  isPhoto={false}
                  value={addressProofFile}
                  onChange={setAddressProofFile}
                  helperText="PDF, JPG, PNG (Max 10MB) • Valid government identity proof"
                />
              </div>

              {/* Declaration Checkbox */}
              <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#ededf8] cursor-pointer">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 rounded text-[#7d2628] focus:ring-[#7d2628] cursor-pointer"
                  required
                />
                <span className="font-body-sm text-[#564241] text-xs leading-snug">
                  I hereby declare that all particulars stated above are true and complete. I understand that <strong className="text-[#191b23]">Exam Fees are not included in the course tuition</strong> and agree to follow IAIT Kaliabor institutional guidelines.
                </span>
              </label>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] rounded-xl bg-[#7d2628] hover:bg-[#5e0f14] text-white font-label-lg font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">
                      progress_activity
                    </span>
                    <span>Generating Admission Record...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                    <span>Submit Admission Application</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      ) : (
        /* Certificate Verification Desk Subtab */
        <div className="px-4 py-4 flex flex-col gap-4">
          {/* Top Verification Explainer */}
          <div className="rounded-xl bg-[#00163D] text-white p-4 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FEA619] text-[#00163D] font-label-sm text-[10px] font-bold mb-1">
                Central Registry Validation
              </div>
              <h2 className="font-headline-sm text-white font-bold text-lg">
                Online Certificate Verification Desk
              </h2>
              <p className="font-body-sm text-[#d9e2ff] text-xs mt-0.5 leading-snug">
                Employers and students can verify genuine diploma certificates issued by IAIT Kaliabor across AMTRON, IAPS, and NCVT boards.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[100px]">verified</span>
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-xl p-4 border border-[#ededf8] shadow-xs flex flex-col gap-2.5">
            <label className="font-label-sm text-[#535E6B] font-bold text-xs uppercase tracking-wider">
              Enter Registration / Certificate Serial No.
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-3 text-[20px] text-[#535E6B]">
                  badge
                </span>
                <input
                  type="text"
                  value={searchRegNo}
                  onChange={(e) => setSearchRegNo(e.target.value)}
                  placeholder="e.g. IAIT/2024/ADCA/0412"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-[#f2f3fe] border border-transparent focus:border-[#00163D] focus:bg-white text-sm text-[#191b23] font-semibold uppercase focus:outline-none transition-all"
                />
              </div>
              <button
                onClick={() => handleSearchCertificate()}
                disabled={isSearching}
                className="min-h-[44px] px-4 rounded-lg bg-[#00163D] hover:bg-[#031a41] text-white font-label-md text-xs font-bold flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-all"
              >
                {isSearching ? (
                  <span className="material-symbols-outlined text-[18px] animate-spin">
                    progress_activity
                  </span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px] text-[#FEA619]">
                      search
                    </span>
                    <span>Verify</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick test sample pills */}
            <div className="pt-1 flex items-center gap-1.5 flex-wrap">
              <span className="font-label-sm text-[#535E6B] text-[10px]">Test Samples:</span>
              {Object.keys(SAMPLE_CERTIFICATES).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setSearchRegNo(key);
                    handleSearchCertificate(key);
                  }}
                  className="px-2 py-0.5 rounded bg-[#EFF4FF] hover:bg-[#d9e2ff] text-[#00163D] font-label-sm text-[10px] font-semibold transition-colors"
                >
                  {key.replace('IAIT/2024/', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Verification Result Card */}
          {hasSearched && searchedRecord ? (
            <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#FEA619] shadow-md flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
              {/* Top Seal & Status Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#ededf8]">
                <div className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-full bg-[#00163D] text-white flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[24px] text-[#FEA619]">
                      verified
                    </span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[#00163D] font-bold text-xs uppercase tracking-wider block">
                      Authentication Passed
                    </span>
                    <span className="font-body-sm text-[#535E6B] text-[11px]">
                      Government Recognized Database
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#DEF7EC] text-[#03543F] font-label-sm text-[11px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#03543F] animate-pulse" />
                  {searchedRecord.status}
                </span>
              </div>

              {/* Student Identification & Details */}
              <div className="flex items-start gap-3.5">
                <img
                  src={searchedRecord.photoUrl}
                  alt={searchedRecord.name}
                  className="w-20 h-24 rounded-lg object-cover border border-[#ededf8] shadow-xs shrink-0 bg-[#f2f3fe]"
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-label-sm text-[#535E6B] text-[10px] uppercase font-bold">
                    Registration No
                  </span>
                  <span className="font-fee-numeric text-[#7d2628] font-bold text-sm sm:text-base">
                    {searchedRecord.enrollmentNo}
                  </span>

                  <h3 className="font-headline-sm text-[#191b23] font-bold text-base sm:text-lg mt-0.5 truncate">
                    {searchedRecord.name}
                  </h3>
                  <span className="font-body-sm text-[#535E6B] text-xs">
                    {searchedRecord.guardian}
                  </span>

                  <div className="mt-2 inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded bg-[#FFF8EC] text-[#442900] font-label-sm text-[11px] font-bold border border-[#FEA619]/30">
                    <span className="material-symbols-outlined text-[14px] text-[#FEA619]">
                      workspace_premium
                    </span>
                    <span>{searchedRecord.affiliation}</span>
                  </div>
                </div>
              </div>

              {/* Academic Performance Matrix */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#f2f3fe] border border-[#d9e2ff]/50 text-center">
                <div>
                  <span className="font-label-sm text-[#535E6B] text-[10px] block">Course Code</span>
                  <span className="font-fee-numeric text-[#00163D] font-bold text-sm block mt-0.5">
                    {searchedRecord.course}
                  </span>
                </div>
                <div>
                  <span className="font-label-sm text-[#535E6B] text-[10px] block">Percentage</span>
                  <span className="font-fee-numeric text-[#7d2628] font-bold text-sm block mt-0.5">
                    {searchedRecord.score}
                  </span>
                </div>
                <div>
                  <span className="font-label-sm text-[#535E6B] text-[10px] block">Grade</span>
                  <span className="font-fee-numeric text-[#442900] font-bold text-sm block mt-0.5">
                    {searchedRecord.grade}
                  </span>
                </div>
              </div>

              {/* Timestamps & Security Details */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-white border border-[#ededf8]">
                  <span className="text-[#535E6B] text-[10px] block">Duration</span>
                  <span className="font-semibold text-[#191b23]">{searchedRecord.duration}</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-[#ededf8]">
                  <span className="text-[#535E6B] text-[10px] block">Exam Board Session</span>
                  <span className="font-semibold text-[#191b23]">{searchedRecord.examDate}</span>
                </div>
              </div>

              {/* Institutional Validation Stamp */}
              <div className="p-2.5 rounded-lg bg-[#FDF7F7] border border-[#C98E90]/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7d2628] text-[20px]">
                    gavel
                  </span>
                  <div>
                    <span className="font-bold text-[#7d2628] block">Icon Academy of IT</span>
                    <span className="text-[#564241] text-[10px]">
                      Kaliabor Branch • Seal of Verification
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[#535E6B]">
                  Issued: {searchedRecord.issueDate}
                </span>
              </div>
            </div>
          ) : hasSearched && !searchedRecord ? (
            <div className="bg-white rounded-xl p-8 text-center border border-[#ffdad6] shadow-xs">
              <span className="material-symbols-outlined text-4xl text-[#ba1a1a] mb-2">
                error
              </span>
              <p className="font-headline-sm text-[#ba1a1a] font-bold text-base">
                Record Not Found in Central Registry
              </p>
              <p className="font-body-sm text-[#535E6B] text-xs mt-1 max-w-xs mx-auto">
                Please double check the registration serial number format (e.g. IAIT/2024/ADCA/0412) or contact the Kaliabor administrative helpline.
              </p>
            </div>
          ) : null}
        </div>
      )}

      {/* Document Fullscreen Preview Modal */}
      {previewDocModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-[#ededf8] flex items-center justify-between bg-[#f8f9ff]">
              <div>
                <h4 className="font-title-md font-bold text-sm text-[#191b23]">
                  {previewDocModal.title}
                </h4>
                <span className="text-[11px] text-[#535E6B] font-mono block truncate max-w-xs">
                  {previewDocModal.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setPreviewDocModal(null)}
                className="w-8 h-8 rounded-full bg-white border border-[#ededf8] flex items-center justify-center text-[#564241] hover:bg-[#ededf8] transition-colors"
                title="Close document preview"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex items-center justify-center bg-[#191b23]/5 min-h-[300px]">
              {previewDocModal.isPdf ? (
                <div className="flex flex-col items-center justify-center p-6 text-center gap-3 bg-white rounded-xl border border-[#d9e2ff] w-full shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-[#EFF4FF] text-[#00163D] flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#191b23]">{previewDocModal.name}</p>
                    <p className="text-xs text-[#535E6B] mt-1">Portable Document Format (PDF) Attached</p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#DEF7EC] text-[#03543F] text-xs font-bold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    <span>Document Verified for Admission Record</span>
                  </span>
                </div>
              ) : (
                <img
                  src={previewDocModal.url}
                  alt={previewDocModal.title}
                  className="max-h-[60vh] w-auto max-w-full rounded-lg object-contain shadow-sm border border-[#ededf8]"
                />
              )}
            </div>

            <div className="p-3 border-t border-[#ededf8] bg-[#f8f9ff] flex items-center justify-end">
              <button
                type="button"
                onClick={() => setPreviewDocModal(null)}
                className="px-4 py-2 rounded-xl bg-[#00163D] text-white font-label-md text-xs font-bold hover:bg-[#002868] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
