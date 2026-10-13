export interface ClauseExample {
  id: string;
  category: string;
  title: string;
  clauseTitle: string;
  originalText: string;
  highlightWords: string[];
  simplifiedText: string;
  keyCommitment: string;
  whyItMatters: string;
  severity: 'high' | 'medium' | 'info';
}

export const SAMPLE_AGREEMENTS: ClauseExample[] = [
  {
    id: 'internship-ip',
    category: 'Internship Offer',
    title: 'Summer Software Internship Offer',
    clauseTitle: 'Section 4.2 - Assignment of Inventions & IP Ownership',
    originalText:
      'Employee hereby irrevocably grants, assigns, and transfers to Company all worldwide right, title, and interest in and to any and all ideas, works of authorship, software, algorithms, or inventions conceived, developed, or reduced to practice during the term of employment, whether or not developed on company premises, utilizing company equipment, or during normal working hours.',
    highlightWords: [
      'whether or not developed on company premises',
      'utilizing company equipment',
      'during normal working hours',
    ],
    simplifiedText:
      'The company is asserting full ownership over any software, code, or creative work you build during your internship—even weekend hackathon projects, personal apps, or school coursework built on your own personal computer.',
    keyCommitment:
      'Risk of losing rights to personal side-projects unless explicitly carved out in writing.',
    whyItMatters:
      'As a student developer or designer, you need your portfolio and side projects. LegalEasy advises requesting an "Exhibit A" exclusion listing prior inventions before signing.',
    severity: 'high',
  },
  {
    id: 'student-lease',
    category: 'Apartment Lease',
    title: 'University Off-Campus Residential Lease',
    clauseTitle: 'Section 11 - Joint & Several Liability and Notice to Vacate',
    originalText:
      'All co-tenants shall be held jointly and severally liable for all rent obligations, utility charges, and physical damages. Tenant must tender written notice of intent to vacate precisely ninety (90) days prior to lease termination; failure thereof shall constitute automatic renewal at a 20% premium over current prevailing market rental rates.',
    highlightWords: [
      'jointly and severally liable',
      'ninety (90) days prior to lease termination',
      'automatic renewal at a 20% premium',
    ],
    simplifiedText:
      'You are legally on the hook for 100% of the rent if your roommates leave or fail to pay. Additionally, you must notify the landlord 90 days before your lease ends, or your contract automatically renews with an immediate 20% price hike.',
    keyCommitment:
      'Shared financial liability for roommates + 90-day strict notice cutoff.',
    whyItMatters:
      'College leases frequently trap students with 30-day assumptions when the contract secretly requires 90 days notice, causing accidental security deposit forfeiture or summer rent charges.',
    severity: 'high',
  },
  {
    id: 'employment-noncompete',
    category: 'Employment Agreement',
    title: 'Full-Time Entry-Level Employment Contract',
    clauseTitle: 'Section 8.1 - Restrictive Covenant & Non-Competition',
    originalText:
      'For a duration of twelve (12) months following separation from Company for any reason whatsoever, Employee agrees not to directly or indirectly engage in, perform services for, consult with, or acquire an interest in any business entity operating within the broader sector of technology services within a 100-mile geographic radius.',
    highlightWords: [
      'For a duration of twelve (12) months following separation',
      'directly or indirectly engage in',
      'broader sector of technology services',
    ],
    simplifiedText:
      'If you leave this job—voluntarily or if laid off—you are barred for a full year from working for any tech or related company within 100 miles, significantly hindering your ability to switch jobs in your field.',
    keyCommitment:
      '1-year restriction on taking another job in your specialized industry nearby.',
    whyItMatters:
      'Many entry-level recruits sign non-competes without realizing how severely it limits their early career progression. Some jurisdictions restrict these, but understanding what you sign is vital.',
    severity: 'medium',
  },
  {
    id: 'freelance-nda',
    category: 'Non-Disclosure (NDA)',
    title: 'Consulting & Student Project NDA',
    clauseTitle: 'Section 3 - Indefinite Confidentiality & Non-Disparagement',
    originalText:
      'The obligations of non-disclosure shall survive indefinitely following termination of engagement. Recipient shall not disclose the existence of this engagement or publish any case study or reference to work performed without prior written authorization.',
    highlightWords: [
      'shall survive indefinitely',
      'not disclose the existence of this engagement',
      'publish any case study or reference',
    ],
    simplifiedText:
      'You can never publicly share or include the work you did in your design or engineering portfolio—forever—unless the company grants written approval each time.',
    keyCommitment:
      'Permanent block on portfolio showcases and public work references.',
    whyItMatters:
      'First-time freelancers and student interns rely heavily on portfolio proof to win future contracts and full-time job offers.',
    severity: 'medium',
  },
];

export const PROBLEM_POINTS = [
  {
    iconName: 'FileQuestion',
    title: 'Dense Legal Jargon & Obfuscation',
    description:
      'Agreements are packed with archaic phrasing, Latin phrases, and run-on sentences that make fundamental obligations almost impossible for non-lawyers to parse.',
    statLabel: 'Real Problem',
    statDetail: 'Key commitments remain buried in dense paragraphs of legal boilerplate.',
  },
  {
    iconName: 'Clock',
    title: 'High-Pressure Signing Deadlines',
    description:
      'Internship offers and lease renewals often arrive with tight 24- to 48-hour acceptance windows, forcing students to rush through signatures without thorough review.',
    statLabel: 'Common Trap',
    statDetail: 'Fear of losing an offer leads applicants to sign without reading.',
  },
  {
    iconName: 'ShieldAlert',
    title: 'Hidden Restrictions & Notice Traps',
    description:
      'Overly broad IP assignment clauses, unexpected 60-day resignation notices, and automatic lease rollovers catch first-time signers completely off-guard.',
    statLabel: 'Hidden Burden',
    statDetail: 'Signers unknowingly forfeit side-project rights or security deposits.',
  },
  {
    iconName: 'Scale',
    title: 'Severe Information & Legal Asymmetry',
    description:
      'Corporate employers and property managers retain experienced legal teams, while young applicants cannot afford private legal consultations ($300+/hr).',
    statLabel: 'Resource Gap',
    statDetail: 'Students face institutional legal documents without accessible guidance.',
  },
];

export const FEATURES_LIST = [
  {
    iconName: 'Highlighter',
    title: 'Important Clause Highlighting',
    tagline: 'Spot critical terms instantly',
    description:
      'Scans document structure to identify and spotlight critical clauses such as IP ownership, non-competes, indemnity clauses, and termination terms so you know exactly where to look.',
    benefit: 'Saves hours of reading boilerplate text and flags restrictive conditions.',
  },
  {
    iconName: 'Languages',
    title: 'Simple-Language Explanations',
    tagline: 'Legalese translated into plain English',
    description:
      'Breaks down complex legal syntax into straightforward, human-friendly explanations. Understand what each paragraph actually asks of you without needing a law degree.',
    benefit: 'Clear comprehension of legal rights and real-world duties.',
  },
  {
    iconName: 'FileCheck',
    title: 'Key-Term Summaries',
    tagline: 'Your essential commitments at a glance',
    description:
      'Generates an organized digest of your core parameters: exact compensation, notice periods, working hours, clawback clauses, and termination rights.',
    benefit: 'Executive reference sheet to review before any signature.',
  },
  {
    iconName: 'Layers',
    title: 'Easier Agreement Review',
    tagline: 'A stress-free review experience',
    description:
      'Provides a calm, step-by-step review interface. Walk through each section at your own pace with helpful context and prompt suggestions on what to ask HR or landlords.',
    benefit: 'Empowers self-advocacy and confident decision-making.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Upload or Select an Agreement',
    summary: 'Upload your PDF or document, or choose from standard student contract templates.',
    detail:
      'Users can submit employment offer letters, internship agreements, non-disclosure contracts, or apartment leases via a secure drag-and-drop interface.',
    status: 'Upcoming Feature Architecture',
  },
  {
    stepNumber: '02',
    title: 'Review Important Clauses & Explanations',
    summary: 'Our planned parsing engine breaks down the text clause by clause with plain-English insights.',
    detail:
      'Highlighted sections display side-by-side explanations, spotlighting commitments, potential pitfalls, and non-standard terms with zero legal jargon.',
    status: 'Milestone Parsing Pipeline',
  },
  {
    stepNumber: '03',
    title: 'Understand Key Terms Before You Decide',
    summary: 'Receive an executive summary and recommended clarification questions to ask before signing.',
    detail:
      'Walk into your conversation with your employer or landlord knowing precisely what you are agreeing to and what questions you have the right to ask.',
    status: 'Decision Empowerment Engine',
  },
];

export const AUDIENCE_PERSONAS = [
  {
    id: 'college-students',
    title: 'College Students',
    badge: 'Campus & Off-Campus',
    subtitle: 'Navigating housing, campus jobs, and academic projects',
    iconName: 'GraduationCap',
    commonContracts: [
      'Off-campus apartment rental leases & sub-leases',
      'Student employment and work-study agreements',
      'University research IP releases & lab confidentiality forms',
    ],
    pitfalls: [
      'Joint liability for roommates failing to pay their share',
      'Hidden 90-day notice periods causing rent rollover fees',
      'Signing away rights to academic hackathon inventions',
    ],
  },
  {
    id: 'internship-applicants',
    title: 'Internship Applicants',
    badge: 'Early Career Exploration',
    subtitle: 'Evaluating summer offers and remote stipends',
    iconName: 'Briefcase',
    commonContracts: [
      'Summer software & marketing internship offer letters',
      'Pre-interview non-disclosure agreements (NDAs)',
      'Independent contractor / 1099 versus W-2 agreements',
    ],
    pitfalls: [
      'Sweeping IP assignment claiming ownership of weekend coding',
      'Unclear stipend versus hourly overtime expectations',
      'Indefinite non-disparagement blocking portfolio case studies',
    ],
  },
  {
    id: 'final-year-students',
    title: 'Final-Year Students',
    badge: 'Graduation Transition',
    subtitle: 'Reviewing full-time career offers and relocation bonuses',
    iconName: 'Award',
    commonContracts: [
      'Full-time post-graduate job offer letters & contracts',
      'Signing bonus agreements with clawback repayment clauses',
      'Relocation expense reimbursement covenants',
    ],
    pitfalls: [
      'Clawback terms requiring 100% bonus return if leaving in 18 months',
      'Non-solicitation clauses that prevent staying in touch with mentors',
      'Broad non-competes restricting opportunities if the company downsizes',
    ],
  },
  {
    id: 'first-time-employees',
    title: 'First-Time Employees',
    badge: 'Professional Workforce',
    subtitle: 'Understanding at-will terms, equity, and benefits',
    iconName: 'UserCheck',
    commonContracts: [
      'Standard corporate employment agreements & handbooks',
      'Stock option & equity vesting schedule documents',
      'Mutual non-disclosure and intellectual property agreements',
    ],
    pitfalls: [
      'Vague equity vesting cliff clauses without acceleration protections',
      'Extended notice periods (e.g., 60-90 days) exceeding industry norms',
      'Mandatory binding arbitration waivers eliminating trial rights',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Is LegalEasy a replacement for a licensed lawyer or law firm?',
    answer:
      'No. LegalEasy provides educational, informational clause explanations to help non-lawyers read and understand contract structure. It does not provide legal representation, formal legal advice, or attorney-client privilege. For binding legal disputes, always consult a qualified legal professional.',
  },
  {
    question: 'What is the current development status of LegalEasy?',
    answer:
      'LegalEasy is presented here as part of an early startup milestone evaluation. The document parsing and analysis backend is currently under design and technical planning. This landing page demonstrates our proposed user workflow, user interface architecture, and product mission.',
  },
  {
    question: 'How does LegalEasy plan to protect user privacy and confidentiality?',
    answer:
      'Privacy is our cornerstone requirement. When our document analysis backend is deployed, documents will be processed in isolated memory environments with encryption in transit and at rest, and agreements will never be used for public model training or shared with third parties.',
  },
  {
    question: 'Can I test an example of how clause explanations look?',
    answer:
      'Yes! Use the interactive agreement preview in the Hero and How It Works sections above to click through realistic student contract clauses and review our plain-English breakdown formatting.',
  },
];
