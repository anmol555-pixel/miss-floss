import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Miss Floss",
  description: "How Miss Floss collects, stores, and protects your data. PIPEDA compliant.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Miss Floss Inc. ("Miss Floss", "we", "our", or "us") operates an AI-powered voice receptionist service designed for Canadian dental clinics. Our registered office is in Toronto, Ontario, Canada. You can reach our Privacy Officer at hello@missfloss.ai.`,
  },
  {
    title: "2. Scope of This Policy",
    body: `This Privacy Policy applies to all personal information collected through (a) our website at missfloss.ai, (b) our AI voice receptionist platform, and (c) any associated mobile or web applications. It describes what data we collect, why we collect it, how we use and protect it, and the rights you have over it — in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation.`,
  },
  {
    title: "3. Information We Collect",
    body: `We collect only the information necessary to provide our service:

Clinic Information: Business name, address, phone number, operating hours, service offerings, staff roster, and billing information provided during onboarding and account management.

Patient Call Data: Inbound and outbound call recordings, transcripts, caller phone numbers, appointment requests, and conversational data generated when Miss Floss interacts with patients on behalf of your clinic. This data is collected for the sole purpose of completing the requested action (booking, rescheduling, confirming appointments, or answering FAQs).

Appointment and Scheduling Data: Appointment times, patient names, contact numbers, procedure types, and any scheduling notes relayed to your practice management system.

Website Usage Data: IP addresses, browser type, pages visited, referral URLs, and session duration collected via standard server logs and analytics tools. We do not use third-party advertising cookies.

Communications: Emails and messages you send to our support team.`,
  },
  {
    title: "4. How We Use Your Information",
    body: `We use collected information to:

— Operate, configure, and improve the Miss Floss AI receptionist for your clinic
— Book, confirm, reschedule, and cancel appointments on behalf of patients
— Send appointment reminder messages (SMS or voice) to patients at your direction
— Process subscription payments and manage your account
— Provide customer support and respond to inquiries
— Monitor system performance, detect errors, and prevent abuse
— Comply with applicable laws and regulatory requirements

We do not sell, rent, or trade personal information to any third party for marketing purposes. Ever.`,
  },
  {
    title: "5. Legal Basis for Processing",
    body: `Under PIPEDA, we collect and use personal information based on:

Consent: Patient callers interact with Miss Floss with the knowledge that an AI system is handling their call. Clinics are required to disclose AI-assisted call handling to patients. Consent is obtained at the point of interaction.

Contractual Necessity: Processing is necessary to fulfil our service agreement with the clinic (your subscription contract).

Legitimate Interests: System monitoring, security, and fraud prevention, balanced against your privacy rights.

Legal Obligation: Where required by Canadian federal or provincial law.`,
  },
  {
    title: "6. Data Storage and Security",
    body: `All data is stored exclusively in Canadian data centres located in Toronto, Ontario. We do not transfer personal information outside of Canada without explicit written consent except where strictly required by law.

We implement the following safeguards:

— End-to-end encryption for all data in transit (TLS 1.3) and at rest (AES-256)
— Role-based access controls with multi-factor authentication for all internal staff
— Regular third-party penetration testing and vulnerability assessments
— Audit logs for all access to patient call data
— Automatic deletion of raw call recordings after 90 days unless your clinic requires a longer retention period for compliance
— Business continuity and disaster recovery procedures tested semi-annually

Despite our robust controls, no method of transmission over the internet is completely secure. We encourage clinics to report any suspected security incidents to hello@missfloss.ai immediately.`,
  },
  {
    title: "7. Data Retention",
    body: `We retain personal information only as long as necessary for the purposes described above:

— Call recordings and transcripts: 90 days by default, configurable up to 7 years to meet provincial dental records legislation
— Appointment data synced to your practice management system: not retained by Miss Floss after synchronisation
— Account and billing data: duration of your subscription plus 7 years as required by Canadian tax law
— Website analytics: 26 months in aggregate, anonymised form

When retention periods expire, data is securely deleted or anonymised so it can no longer be linked to an individual.`,
  },
  {
    title: "8. Third-Party Services",
    body: `We work with a small number of trusted sub-processors to deliver our service:

Vercel Inc. (vercel.com): Hosts our marketing website and web application dashboard. Data processed by Vercel is governed by their Data Processing Agreement and is hosted in Canadian or US regions as configured. Vercel is GDPR and SOC 2 Type II certified.

Cal.com Inc. (cal.com): Powers our demo booking page. When you book a demo, Cal.com collects your name, email address, and selected time slot. This data is subject to Cal.com's own privacy policy.

Payment Processor: Subscription billing is handled by a PCI-DSS Level 1 certified payment processor. Miss Floss does not store raw credit card numbers.

Practice Management System Integrations (Dentrix, Eaglesoft, Curve Dental, ABELDent, etc.): Miss Floss reads and writes appointment data directly to your practice management system via secure API connections. This data never leaves your infrastructure except as explicitly required to complete a booking action.

We enter into Data Processing Agreements with all sub-processors and require them to maintain equivalent privacy and security standards.`,
  },
  {
    title: "9. Your Rights Under PIPEDA",
    body: `You — and patients whose data flows through our platform — have the following rights:

Right of Access: You may request a copy of all personal information we hold about you or your clinic.

Right to Correction: You may request that inaccurate or incomplete information be corrected.

Right to Withdrawal of Consent: You may withdraw consent for optional processing at any time without penalty, though this may limit certain features.

Right to Erasure: You may request deletion of personal information where we are not required by law to retain it.

Right to Lodge a Complaint: If you believe we have violated PIPEDA, you may file a complaint with the Office of the Privacy Commissioner of Canada at priv.gc.ca.

To exercise any of these rights, email our Privacy Officer at hello@missfloss.ai. We will respond within 30 days.`,
  },
  {
    title: "10. Cookies and Tracking",
    body: `Our marketing website uses a minimal number of cookies:

Essential Cookies: Required for the site to function (session management, security tokens). These cannot be disabled.

Analytics Cookies: We use privacy-respecting analytics to understand aggregate traffic patterns. No personally identifiable data is shared with third-party ad networks. You may opt out by enabling "Do Not Track" in your browser.

We do not use retargeting pixels, Facebook Pixel, Google Ads tags, or any cross-site tracking technology.`,
  },
  {
    title: "11. Children's Privacy",
    body: `Miss Floss is a business-to-business service intended for dental clinics and their adult staff. We do not knowingly collect personal information from individuals under the age of 18 except incidentally where a minor patient calls the clinic. Such call data is handled with the same security standards as all other patient data and is subject to parental/guardian consent requirements consistent with applicable law.`,
  },
  {
    title: "12. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify clinic administrators by email at least 14 days before material changes take effect. The "Last Updated" date at the top of this page reflects the most recent revision. Continued use of our service after the effective date of a change constitutes acceptance of the revised policy.`,
  },
  {
    title: "13. Contact Us",
    body: `If you have any questions, concerns, or requests relating to this Privacy Policy, please contact:

Privacy Officer
Miss Floss Inc.
Toronto, Ontario, Canada
hello@missfloss.ai

We are committed to resolving privacy concerns promptly and transparently.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-teal-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
                <path d="M12 2C9 2 6.5 4.5 6.5 7.5c0 2.2 1.3 4.1 3.2 5V21h4.6v-8.5c1.9-.9 3.2-2.8 3.2-5C17.5 4.5 15 2 12 2z" fill="white" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-slate-900">Miss Floss</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        {/* Title block */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">Last updated: May 2026</p>
          <div className="mt-6 p-4 rounded-xl bg-teal-50 border border-teal-100">
            <p className="text-sm text-teal-800 leading-relaxed">
              <span className="font-semibold">PIPEDA Compliant.</span> Miss Floss is designed for Canadian dental clinics and is fully compliant with the Personal Information Protection and Electronic Documents Act (PIPEDA). All patient data is stored exclusively in Canadian data centres.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{section.title}</h2>
              <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {section.body}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Miss Floss Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/terms" className="text-teal-600 hover:text-teal-700 transition-colors">Terms of Service</Link>
            <a href="mailto:hello@missfloss.ai" className="text-slate-400 hover:text-slate-600 transition-colors">hello@missfloss.ai</a>
          </div>
        </div>
      </div>
    </div>
  );
}
