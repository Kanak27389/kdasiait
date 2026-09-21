export type NavTab = 'home' | 'courses' | 'admissions' | 'about' | 'contact';

export interface Course {
  id: string;
  name: string;
  shortCode: string;
  duration: string;
  durationCategory: '3-months' | '6-months' | '1-year';
  eligibility: string;
  badge?: string;
  badgeType?: 'trending' | 'popular' | 'govt';
  icon: string;
  amtronFee?: {
    admission?: number;
    tuition?: number;
    total: number;
    breakdownNote?: string;
  };
  iapsFee?: {
    admission: number;
    tuition: number;
    total: number;
    breakdownNote?: string;
  };
  ncvtFee?: {
    admission: number;
    tuition: number;
    total: number;
    breakdownNote?: string;
  };
  affiliations: ('amtron' | 'iaps' | 'ncvt')[];
  description: string;
  syllabusModules: {
    title: string;
    topics: string[];
  }[];
}

export interface CertificateRecord {
  enrollmentNo: string;
  name: string;
  guardian: string;
  course: string;
  programName: string;
  affiliation: string;
  score: string;
  grade: string;
  duration: string;
  examDate: string;
  issueDate: string;
  photoUrl: string;
  status: 'Active & Validated' | 'Provisional';
}

export interface AdmissionApplication {
  enrollmentNo: string;
  name: string;
  guardian: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  qualification: string;
  course: string;
  affiliation: string;
  batch: string;
  timestamp: string;
  photoUrl?: string;
  photoName?: string;
  qualificationDocName?: string;
  qualificationDocUrl?: string;
  qualificationDocIsPdf?: boolean;
  addressProofName?: string;
  addressProofUrl?: string;
  addressProofIsPdf?: boolean;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  course: string;
  message: string;
}
