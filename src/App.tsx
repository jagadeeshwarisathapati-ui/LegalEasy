import React, { useState, useEffect } from 'react';
import {
  Scale,
  FileText,
  Shield,
  Highlighter,
  Languages,
  FileCheck,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Menu,
  X,
  Mail,
  Copy,
  Check,
  Send,
  GraduationCap,
  Briefcase,
  Award,
  UserCheck,
  Sparkles,
  Info,
  ChevronDown,
  Upload,
  Eye,
  Search,
  BookOpen,
  ArrowUpRight,
  Lock,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import {
  SAMPLE_AGREEMENTS,
  PROBLEM_POINTS,
  FEATURES_LIST,
  HOW_IT_WORKS_STEPS,
  AUDIENCE_PERSONAS,
  FAQ_ITEMS,
  ClauseExample,
} from './data/content';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedClause, setSelectedClause] = useState<ClauseExample>(SAMPLE_AGREEMENTS[0]);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(1);
  const [activePersonaId, setActivePersonaId] = useState<string>('college-students');
  const [emailCopied, setEmailCopied] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactRole, setContactRole] = useState('College Student');
  const [contactAgreementType, setContactAgreementType] = useState('Internship Offer');
  const [contactMessage, setContactMessage] = useState('');
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@legaleasy.dev');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const validateAndSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!contactName.trim()) {
      errors.name = 'Please enter your full name.';
    }

    if (!contactEmail.trim()) {
      errors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.trim())) {
      errors.email = 'Please provide a valid email format (e.g. name@university.edu).';
    }

    if (!contactMessage.trim()) {
      errors.message = 'Please include a message or inquiry details.';
    } else if (contactMessage.trim().length < 12) {
      errors.message = 'Your message must be at least 12 characters long.';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmissionSuccess(true);
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activePersona = AUDIENCE_PERSONAS.find((p) => p.id === activePersonaId) || AUDIENCE_PERSONAS[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-950">
      {/* Top Milestone Banner */}
      <div className="bg-[#0B192C] text-slate-200 border-b border-sky-950/80 px-4 py-2.5 text-xs text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="font-semibold text-sky-300 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" />
            Startup Milestone Evaluation Preview:
          </span>
          <span>
            Document analysis engine is in planned development. This page presents LegalEasy’s core mission, user workflow, and product architecture.
          </span>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sky-400 hover:text-sky-300 underline font-medium cursor-pointer ml-1"
          >
            Read Roadmap
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-[#0B192C] flex items-center justify-center text-white shadow-md shadow-sky-950/10 group-hover:bg-[#122B4D] transition-colors">
              <Scale className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-[#0B192C]">LegalEasy</span>
              </div>
              <p className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                Understand Before You Sign
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-[#0B192C] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className="hover:text-[#0B192C] transition-colors cursor-pointer"
            >
              The Problem
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-[#0B192C] transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-[#0B192C] transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('who-benefits')}
              className="hover:text-[#0B192C] transition-colors cursor-pointer"
            >
              Who It's For
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#0B192C] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#0B192C] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('demo-preview')}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0B192C] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Interactive Preview
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#152e4d] rounded-lg shadow-sm shadow-slate-900/10 hover:shadow transition-all cursor-pointer flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0B192C] rounded-lg"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3 text-base font-medium text-slate-700">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left py-2 px-3 rounded-md hover:bg-slate-50 hover:text-[#0B192C]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('problem')}
                className="text-left py-2 px-3 rounded-md hover:bg-slate-50 hover:text-[#0B192C]"
              >
                The Problem
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left py-2 px-3 rounded-md hover:bg-slate-50 hover:text-[#0B192C]"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left py-2 px-3 rounded-md hover:bg-slate-50 hover:text-[#0B192C]"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('who-benefits')}
                className="text-left py-2 px-3 rounded-md hover:bg-slate-50 hover:text-[#0B192C]"
              >
                Who Can Benefit?
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 px-3 rounded-md hover:bg-slate-50 hover:text-[#0B192C]"
              >
                About LegalEasy
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 px-3 rounded-md hover:bg-slate-50 hover:text-[#0B192C]"
              >
                Contact & Early Access
              </button>
            </nav>
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="w-full py-3 text-center font-semibold text-white bg-[#0B192C] hover:bg-[#152e4d] rounded-lg shadow-sm"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection('demo-preview')}
                className="w-full py-2.5 text-center text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                View Clause Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-sky-50/60 via-white to-white overflow-hidden border-b border-slate-100"
      >
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0B192C 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Unboxed Metadata / Project Milestone */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B192C] bg-sky-100/70 border border-sky-200/80 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
                <span>Startup Milestone Prototype</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">Pre-launch Evaluation</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B192C] leading-[1.12]">
                Understand Before You Sign.
              </h1>

              {/* Subheading / Description */}
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Understand agreements in simple language, identify important clauses, and review key commitments with greater confidence.
              </p>

              {/* Clarification Notice */}
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto lg:mx-0 bg-slate-50 border border-slate-200/70 rounded-lg p-3">
                Built specifically for college students, internship applicants, and first-time employees who are faced with complex leases, offer letters, and non-disclosure agreements.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-[#0B192C] hover:bg-[#122B4D] active:scale-[0.99] rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="w-full sm:w-auto px-6 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4 text-sky-600" />
                  Explore Features
                </button>
              </div>

              {/* Trust & Transparency Line */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-sky-700" />
                  <span>No account or payment required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-sky-700" />
                  <span>Privacy-first architecture</span>
                </div>
              </div>
            </div>

            {/* Right: Modern Vector / SVG Illustration & Interactive Preview Card */}
            <div className="lg:col-span-5 relative" id="demo-preview">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400/20 via-blue-500/10 to-indigo-500/20 rounded-2xl blur-xl opacity-75"></div>

                {/* Main Card Container */}
                <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-sky-950/10 overflow-hidden">
                  {/* Mock Window Top Bar */}
                  <div className="bg-[#0B192C] text-white px-4 py-3 flex items-center justify-between border-b border-sky-950">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      <span className="text-xs font-mono text-slate-300 ml-2">legaleasy_preview.pdf</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                      Clause Inspector
                    </span>
                  </div>

                  {/* Sample Selector Tabs */}
                  <div className="bg-slate-50 p-2 border-b border-slate-200 flex gap-1 overflow-x-auto text-xs">
                    {SAMPLE_AGREEMENTS.slice(0, 3).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedClause(item)}
                        className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer text-xs ${
                          selectedClause.id === item.id
                            ? 'bg-[#0B192C] text-white shadow-xs'
                            : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                        }`}
                      >
                        {item.category}
                      </button>
                    ))}
                  </div>

                  {/* Document & Plain-English Inspection View */}
                  <div className="p-5 space-y-4">
                    {/* Original Clause with Highlighting */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          Original Legal Agreement
                        </span>
                        <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          Requires Attention
                        </span>
                      </div>
                      <div className="p-3 bg-amber-50/50 border border-amber-200/70 rounded-xl text-xs text-slate-800 leading-relaxed font-serif">
                        <p className="font-semibold text-slate-900 mb-1 font-sans">
                          {selectedClause.clauseTitle}
                        </p>
                        <p className="italic">
                          "{selectedClause.originalText}"
                        </p>
                      </div>
                    </div>

                    {/* Vector Arrow Graphic Indicator */}
                    <div className="flex items-center justify-center gap-2 text-sky-700 font-medium text-xs py-0.5">
                      <div className="h-px bg-sky-200 flex-1"></div>
                      <span className="bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 flex items-center gap-1.5 text-sky-800 font-semibold text-[11px]">
                        <Languages className="w-3.5 h-3.5 text-sky-600" />
                        LegalEasy Plain-English Translation
                      </span>
                      <div className="h-px bg-sky-200 flex-1"></div>
                    </div>

                    {/* Simplified Meaning Card */}
                    <div className="p-3.5 bg-sky-50/90 border border-sky-200 rounded-xl space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-sky-950">
                            What this actually means:
                          </p>
                          <p className="text-xs text-slate-700 leading-relaxed mt-0.5">
                            {selectedClause.simplifiedText}
                          </p>
                        </div>
                      </div>

                      {/* Key Commitment Callout */}
                      <div className="mt-2 pt-2 border-t border-sky-200/80 flex items-start gap-1.5 text-[11px] text-sky-900">
                        <span className="font-semibold text-sky-950 shrink-0">Key Commitment:</span>
                        <span>{selectedClause.keyCommitment}</span>
                      </div>
                    </div>

                    {/* Interactive Prompt / Tip */}
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-[11px] text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
                        Recommended action: Request written exclusion
                      </span>
                      <button
                        onClick={() => scrollToSection('how-it-works')}
                        className="text-sky-700 font-semibold hover:text-sky-900 flex items-center gap-0.5 cursor-pointer"
                      >
                        Learn workflow <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Vector Badge */}
                <div className="absolute -bottom-4 -right-3 bg-[#0B192C] text-white px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 border border-sky-800 text-xs font-medium">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <span>3 Important Clauses Identified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem" className="py-20 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              The Real Problem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Why First-Time Signers Struggle With Agreements
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Agreements are authored by corporate attorneys to protect organizations—leaving students, internship candidates, and recent graduates vulnerable to surprise restrictions.
            </p>
          </div>

          {/* 4 Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEM_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0B192C] mb-5 group-hover:bg-[#0B192C] group-hover:text-white transition-colors">
                    {idx === 0 && <FileText className="w-6 h-6 text-sky-600 group-hover:text-sky-300" />}
                    {idx === 1 && <Clock className="w-6 h-6 text-sky-600 group-hover:text-sky-300" />}
                    {idx === 2 && <ShieldAlert className="w-6 h-6 text-sky-600 group-hover:text-sky-300" />}
                    {idx === 3 && <Scale className="w-6 h-6 text-sky-600 group-hover:text-sky-300" />}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B192C] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-rose-700 block mb-0.5">{item.statLabel}</span>
                  <span>{item.statDetail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Real-World Dilemmas Box */}
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                  Real Scenarios You Might Face
                </span>
                <h4 className="text-xl font-bold text-[#0B192C]">
                  Have you ever hesitated before signing any of these?
                </h4>
                <p className="text-sm text-slate-600 max-w-2xl">
                  "Does my company own my weekend hobby app?" "Can I talk about my internship projects in future interviews?" "Why is my security deposit tied to my roommate's lease payments?"
                </p>
              </div>
              <button
                onClick={() => scrollToSection('features')}
                className="shrink-0 px-5 py-3 rounded-xl bg-[#0B192C] hover:bg-[#122B4D] text-white text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                See How LegalEasy Helps
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Designed to Give You Total Contract Clarity
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Legal agreements shouldn't feel like a test you weren't prepared for. Here is how LegalEasy breaks through the confusion.
            </p>
          </div>

          {/* Grid of 4 Feature Cards with Clean Zero-Pill Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES_LIST.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0B192C] mb-5 shadow-xs group-hover:bg-[#0B192C] group-hover:text-white transition-colors">
                    {idx === 0 && <Highlighter className="w-6 h-6 text-sky-600 group-hover:text-sky-300" />}
                    {idx === 1 && <Languages className="w-6 h-6 text-sky-600 group-hover:text-sky-300" />}
                    {idx === 2 && <FileCheck className="w-6 h-6 text-sky-600 group-hover:text-sky-300" />}
                    {idx === 3 && <Layers className="w-6 h-6 text-sky-600 group-hover:text-sky-300" />}
                  </div>

                  <div className="text-xs font-semibold text-sky-800 mb-1">
                    {feature.tagline}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B192C] mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 text-xs text-slate-500">
                  <span className="font-semibold text-slate-900 block mb-0.5">Primary Benefit:</span>
                  <span>{feature.benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Feature Demo Showcase */}
          <div className="mt-14 bg-gradient-to-br from-slate-900 to-[#0B192C] text-white rounded-2xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-sky-500/5 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                  Interactive Prototype Showcase
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  See a Real Clause Translated
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Select any agreement category to inspect how LegalEasy’s planned engine extracts critical clauses and provides readable summaries.
                </p>

                <div className="space-y-2 pt-2">
                  {SAMPLE_AGREEMENTS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedClause(item)}
                      className={`w-full text-left p-3 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                        selectedClause.id === item.id
                          ? 'bg-sky-500/20 border border-sky-400/50 text-white shadow-xs'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-transparent'
                      }`}
                    >
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-sky-300 text-[11px]">{item.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Translation Output Box */}
              <div className="lg:col-span-7 bg-white text-slate-900 rounded-xl p-5 sm:p-6 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Sample Clause Analysis
                    </span>
                    <h4 className="text-sm font-bold text-[#0B192C]">
                      {selectedClause.clauseTitle}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                    Important Notice
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                      Raw Legal Language:
                    </span>
                    <p className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 italic font-serif leading-relaxed">
                      "{selectedClause.originalText}"
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-sky-900 block text-[11px] uppercase tracking-wider mb-1">
                      Simple-Language Explanation:
                    </span>
                    <p className="p-3 bg-sky-50 border border-sky-200/80 rounded-lg text-slate-900 leading-relaxed font-sans">
                      {selectedClause.simplifiedText}
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-950 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[11px] uppercase block">
                        Why It Matters to You:
                      </span>
                      <p className="mt-0.5 text-emerald-900">
                        {selectedClause.whyItMatters}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (3-STEP WORKFLOW) */}
      <section id="how-it-works" className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              The Intended Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              How LegalEasy Works in 3 Simple Steps
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Designed from the ground up for maximum simplicity. Here is the planned workflow for our upcoming solution.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
              <Info className="w-3.5 h-3.5 text-sky-600" />
              <span>Framed as the upcoming system architecture for milestone evaluation</span>
            </div>
          </div>

          {/* 3 Step Interactive Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const stepNum = idx + 1;
              const isActive = activeWorkflowStep === stepNum;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveWorkflowStep(stepNum)}
                  className={`relative rounded-2xl p-7 border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#0B192C] shadow-lg ring-2 ring-sky-500/20'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Step Number Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-2xl font-black font-mono tracking-tight ${
                        isActive ? 'text-sky-600' : 'text-slate-300'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {step.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B192C] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-700 mb-3">
                    {step.summary}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {step.detail}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className={isActive ? 'text-[#0B192C]' : 'text-slate-400'}>
                      {isActive ? 'Step active in preview below' : 'Click to inspect step'}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-sky-600 translate-x-1' : 'text-slate-300'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Detail Walkthrough Visualizer */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0B192C] text-white flex items-center justify-center font-bold text-sm">
                  {activeWorkflowStep}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B192C]">
                    {HOW_IT_WORKS_STEPS[activeWorkflowStep - 1].title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Planned product interface simulation
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((step) => (
                  <button
                    key={step}
                    onClick={() => setActiveWorkflowStep(step)}
                    className={`w-7 h-7 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                      activeWorkflowStep === step
                        ? 'bg-[#0B192C] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {step}
                  </button>
                ))}
              </div>
            </div>

            {/* Visualizer Step Content */}
            {activeWorkflowStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <h5 className="text-lg font-bold text-[#0B192C]">
                    Seamless Document Ingestion
                  </h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Simply drop your PDF or document file into the upload dropzone. Our intended engine will support PDF, DOCX, and high-resolution scanned agreement images.
                  </p>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Instant OCR & text parsing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Automatic document classification (Offer letter, Lease, NDA)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Zero permanent server caching for student privacy</span>
                    </div>
                  </div>
                </div>

                {/* Mock Upload Box */}
                <div className="border-2 border-dashed border-sky-300 bg-sky-50/50 rounded-2xl p-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-sky-100 flex items-center justify-center mx-auto text-sky-700">
                    <Upload className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Upload agreement document (.pdf or .docx)
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Drag and drop here, or browse files on your device
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-md">
                      Maximum file size: 25MB · Encrypted in memory
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflowStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <h5 className="text-lg font-bold text-[#0B192C]">
                    Deep Structural Clause Analysis
                  </h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our AI models parse sentence structure, identifies boilerplate clauses versus non-standard liabilities, and scores each clause for potential restriction levels.
                  </p>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Side-by-side split screen view with synced scrolling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Risk categorization (Non-compete, IP assignment, Penalty fees)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Contextual definitions for confusing legal terminology</span>
                    </div>
                  </div>
                </div>

                {/* Mock Review Box */}
                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 font-mono text-xs space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                    <span>ANALYSIS_RUNNER_V1</span>
                    <span className="text-emerald-400">● 100% PARSED</span>
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="text-sky-300 font-semibold">[01] Intellectual Property Clause: Broad Assignment Detected</div>
                    <div className="text-amber-300 font-semibold">[02] Non-Compete: 12-Month Geographic Scope (Flagged)</div>
                    <div className="text-emerald-300 font-semibold">[03] Notice Period: Standard 2-Week Requirement</div>
                  </div>
                  <div className="p-2.5 bg-slate-800/80 rounded-lg text-slate-300 font-sans text-xs border border-slate-700">
                    <span className="font-semibold text-white">Summary Insight:</span> 2 clauses deviate from standard university student norms and warrant clarifying questions.
                  </div>
                </div>
              </div>
            )}

            {activeWorkflowStep === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <h5 className="text-lg font-bold text-[#0B192C]">
                    Confidently Make Your Decision
                  </h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Leave confusion behind. Enter meetings with landlords, HR recruiters, or employers armed with precise knowledge of what you are signing and what changes you can ask for.
                  </p>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Exportable 1-page agreement digest</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Custom email templates to respectfully ask HR for clause adjustments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Peace of mind before putting pen to paper</span>
                    </div>
                  </div>
                </div>

                {/* Mock Summary Checklist */}
                <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sky-950 font-bold text-sm">
                    <FileCheck className="w-5 h-5 text-sky-700" />
                    <span>Your Pre-Signature Checklist</span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="p-2 bg-white rounded-lg border border-sky-100 flex items-center justify-between">
                      <span>✓ Compensation & Pay Schedule verified</span>
                      <span className="text-emerald-700 font-semibold">Clear</span>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-sky-100 flex items-center justify-between">
                      <span>✓ IP Exclusion Exhibit requested for side projects</span>
                      <span className="text-amber-700 font-semibold">Action Item</span>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-sky-100 flex items-center justify-between">
                      <span>✓ Notice period verified (14 days standard)</span>
                      <span className="text-emerald-700 font-semibold">Confirmed</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHO CAN BENEFIT? SECTION */}
      <section id="who-benefits" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Tailored For Emerging Signers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Who Can Benefit From LegalEasy?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Different stages of education and career bring distinct legal commitments. Discover how LegalEasy protects each group.
            </p>
          </div>

          {/* Interactive Persona Selector Bar */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {AUDIENCE_PERSONAS.map((persona) => {
              const isSelected = activePersonaId === persona.id;
              return (
                <button
                  key={persona.id}
                  onClick={() => setActivePersonaId(persona.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#0B192C] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {persona.id === 'college-students' && <GraduationCap className="w-4 h-4" />}
                  {persona.id === 'internship-applicants' && <Briefcase className="w-4 h-4" />}
                  {persona.id === 'final-year-students' && <Award className="w-4 h-4" />}
                  {persona.id === 'first-time-employees' && <UserCheck className="w-4 h-4" />}
                  <span>{persona.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Persona Deep-Dive Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-100 px-3 py-1 rounded-md">
                  {activePersona.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                  {activePersona.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {activePersona.subtitle}
                </p>

                <div className="pt-2 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Agreements Commonly Encountered:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {activePersona.commonContracts.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Common Pitfalls & What LegalEasy Prevents */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wide flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Frequent Pitfalls & Blind Spots
                  </h4>
                  <div className="space-y-3">
                    {activePersona.pitfalls.map((pitfall, i) => (
                      <div
                        key={i}
                        className="p-3.5 bg-rose-50/60 border border-rose-100 rounded-xl text-xs sm:text-sm text-slate-800 flex items-start gap-3"
                      >
                        <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          !
                        </span>
                        <span>{pitfall}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-sky-50/60 p-4 rounded-xl border border-sky-100 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-sky-950">
                    <span className="font-bold">The LegalEasy Advantage: </span>
                    We scan for these specific pitfalls automatically and provide actionable clarification templates tailored to your situation.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick 4-Persona Grid Overview for Mobile/Glance */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {AUDIENCE_PERSONAS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePersonaId(p.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activePersonaId === p.id
                    ? 'border-[#0B192C] bg-sky-50/50'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="text-xs font-bold text-[#0B192C] truncate">{p.title}</div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">{p.subtitle}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION (CTA) SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#0B192C] via-[#0F223D] to-[#0B192C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-sky-300 bg-sky-900/60 border border-sky-700/80 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Milestone Early Interest & Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Make Every Agreement Easier to Understand.
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Take a step toward understanding your commitments before signing.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Help shape the future of student legal literacy. Share feedback on agreements you find confusing, or join our early notification circle.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-[#0B192C] bg-white hover:bg-sky-50 active:scale-95 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              Get in Touch with Our Team
              <ArrowRight className="w-5 h-5 text-sky-600 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto px-6 py-4 text-base font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all cursor-pointer"
            >
              Learn About Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT LEGALEASY SECTION */}
      <section id="about" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                About The Startup
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                Democratizing Contract Literacy for the Next Generation
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Legal agreements govern pivotal transitions in life: renting your first off-campus apartment, signing a summer internship offer, or entering your first corporate role. Yet, these documents remain intentionally written in convoluted language that discourages understanding.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                <strong>LegalEasy was founded with one clear mission:</strong> to bridge the severe legal information asymmetry between large organizations and emerging signers. We believe every student and young professional deserves to know exactly what commitments, liabilities, and intellectual property rights they are agreeing to.
              </p>

              {/* Guiding Principles */}
              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Radical Clarity Over Legalese
                    </h4>
                    <p className="text-xs text-slate-600">
                      We never substitute legal jargon with more jargon. Explanations are written in direct, unambiguous plain English.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Privacy-First Document Safety
                    </h4>
                    <p className="text-xs text-slate-600">
                      Documents uploaded for analysis are held only in temporary working memory and never used to train public models or shared with outside brokers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Empowering Self-Advocacy
                    </h4>
                    <p className="text-xs text-slate-600">
                      We do not replace licensed attorneys; instead, we equip signers with clear comprehension and informed questions to advocate for themselves.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Milestone Architecture & Roadmap Card */}
            <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Milestone Status & Roadmap
                </span>
                <span className="text-xs font-bold text-sky-800 bg-sky-100 px-2.5 py-1 rounded-md">
                  Phase 1 Evaluation
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B192C]">
                      Milestone 1: Concept & UX Validation
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Completed
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    User journey definition, target student audience interviews, and interactive UI architecture validation.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-sky-300 ring-2 ring-sky-500/10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B192C]">
                      Milestone 2: Prototype Landing & Pitch
                    </span>
                    <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                      Current Milestone
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Transparent milestone presentation of LegalEasy's value proposition, workflow, and user onboarding.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 opacity-80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B192C]">
                      Milestone 3: Parsing Engine & OCR Pipeline
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Upcoming
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Integration of secure server-side document parsing pipelines, clause segmentation, and automated risk scoring.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Evaluator Note:</strong> As required for this milestone stage, document parsing backend endpoints are not live yet. This page strictly demonstrates user experience, problem-solution alignment, and interactive simulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Clarifications & Details
            </div>
            <h2 className="text-3xl font-extrabold text-[#0B192C] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear answers regarding our approach, legal scope, and development roadmap.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#0B192C] flex items-center justify-between gap-4 hover:bg-slate-50/50 cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-sky-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Info & Inquiries */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Connect With Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                Get In Touch With the LegalEasy Team
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether you are a student evaluator, prospective intern, university advisor, or early supporter, we want to hear from you.
              </p>

              {/* Contact Information Box */}
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Official Project Email
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#0B192C] select-all">
                      contact@legaleasy.dev
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-slate-200 text-slate-700 hover:text-[#0B192C] hover:border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      title="Copy email to clipboard"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Configurable placeholder for early milestone communication.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Office & Incubation Hub
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    Student Venture Incubator, Room 402
                  </p>
                  <p className="text-xs text-slate-500">
                    Campus Innovation Complex · Inquiries answered within 24-48 business hours
                  </p>
                </div>
              </div>

              {/* Milestone Transparency Note */}
              <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl text-xs text-sky-950 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">Form Integration Notice:</span>
                  This contact form includes complete client-side validation. Because the backend is scheduled for a future milestone, submissions are handled and validated locally on this page.
                </div>
              </div>
            </div>

            {/* Interactive Contact Form with Client-Side Validation */}
            <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative">
              {submissionSuccess ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B192C]">
                    Thank You, {contactName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry for <strong>{contactAgreementType}</strong> has been validated and recorded for this milestone session.
                  </p>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl max-w-md mx-auto text-xs text-slate-600 text-left space-y-1 font-mono">
                    <div><strong>Email:</strong> {contactEmail}</div>
                    <div><strong>Role:</strong> {contactRole}</div>
                    <div><strong>Message excerpt:</strong> "{contactMessage.slice(0, 60)}..."</div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmissionSuccess(false);
                        setContactMessage('');
                      }}
                      className="px-6 py-2.5 rounded-xl bg-[#0B192C] text-white text-xs font-semibold hover:bg-[#122B4D] cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={validateAndSubmitContact} noValidate className="space-y-5">
                  <h3 className="text-xl font-bold text-[#0B192C] mb-1">
                    Send a Message or Join Early Access
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    All fields below are validated on your device in real-time.
                  </p>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={contactName}
                      onChange={(e) => {
                        setContactName(e.target.value);
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                        formErrors.name
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={contactEmail}
                      onChange={(e) => {
                        setContactEmail(e.target.value);
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                      }}
                      placeholder="e.g. alex@university.edu"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                        formErrors.email
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Role & Agreement Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-role" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Background
                      </label>
                      <select
                        id="contact-role"
                        value={contactRole}
                        onChange={(e) => setContactRole(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                      >
                        <option value="College Student">College Student</option>
                        <option value="Internship Applicant">Internship Applicant</option>
                        <option value="Final-Year Student">Final-Year Student</option>
                        <option value="First-Time Employee">First-Time Employee</option>
                        <option value="Evaluator / Advisor">Milestone Evaluator / Advisor</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-agreement-type" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Agreement of Interest
                      </label>
                      <select
                        id="contact-agreement-type"
                        value={contactAgreementType}
                        onChange={(e) => setContactAgreementType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                      >
                        <option value="Internship Offer">Internship Offer Letter</option>
                        <option value="Apartment Lease">Off-Campus Apartment Lease</option>
                        <option value="Employment Contract">Full-Time Employment Contract</option>
                        <option value="Non-Disclosure Agreement">Non-Disclosure Agreement (NDA)</option>
                        <option value="Freelance Contract">Freelance / Project Agreement</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message / Questions / Pain Points <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => {
                        setContactMessage(e.target.value);
                        if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                      }}
                      placeholder="Tell us what clauses or agreements you've found confusing, or share your feedback for this milestone evaluation..."
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                        formErrors.message
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
                      }`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#0B192C] hover:bg-[#122B4D] active:scale-[0.99] shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
                      Submit Milestone Feedback
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Validated client-side · No spam, guaranteed privacy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B192C] text-slate-300 pt-16 pb-12 border-t border-sky-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Scale className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  LegalEasy
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm font-normal leading-relaxed">
                Understand Before You Sign. Empowering college students, interns, and early-career hires to read and navigate complex legal agreements with confidence.
              </p>
              <div className="text-xs text-slate-500 font-mono">
                Milestone Evaluation Build · Version 0.1-preview
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('problem')}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    The Problem
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('how-it-works')}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('who-benefits')}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    Who Can Benefit?
                  </button>
                </li>
              </ul>
            </div>

            {/* Target Personas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Audience
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button
                    onClick={() => {
                      setActivePersonaId('college-students');
                      scrollToSection('who-benefits');
                    }}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    College Students
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActivePersonaId('internship-applicants');
                      scrollToSection('who-benefits');
                    }}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    Internship Applicants
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActivePersonaId('final-year-students');
                      scrollToSection('who-benefits');
                    }}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    Final-Year Students
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActivePersonaId('first-time-employees');
                      scrollToSection('who-benefits');
                    }}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    First-Time Employees
                  </button>
                </li>
              </ul>
            </div>

            {/* Milestone & Legal Notice */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Project Info
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    Startup Mission
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    Roadmap & Status
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    Inquiries & Feedback
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Mandatory Legal Disclaimer Banner */}
          <div className="bg-[#07111E] border border-sky-900/70 rounded-2xl p-5 mb-8 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-bold uppercase tracking-wide text-[11px]">
              <Shield className="w-4 h-4" />
              <span>Mandatory Legal & Informational Disclaimer</span>
            </div>
            <p className="leading-relaxed text-slate-300">
              "LegalEasy provides informational explanations and is not a substitute for advice from a qualified legal professional."
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              LegalEasy is an educational contract literacy tool created to help non-lawyers recognize clauses and commitments. Nothing on this page or within LegalEasy constitutes legal representation, formal legal advice, an attorney-client relationship, or a substitute for review by a licensed attorney.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2026 LegalEasy Startup Milestone Project. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Privacy-First Design</span>
              <span>·</span>
              <span>Zero Document Retention in Milestone</span>
              <span>·</span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="hover:text-white underline"
              >
                Feedback
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
