import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Miss Floss",
  description: "Terms and conditions governing your use of the Miss Floss AI receptionist service.",
};

const sections = [
  {
    title: "1. Agreement to Terms",
    body: `These Terms of Service ("Terms") constitute a legally binding agreement between Miss Floss Inc. ("Miss Floss", "we", "our", or "us"), a corporation incorporated in Ontario, Canada, and the dental clinic or individual ("you", "your", or "Client") accessing or using our AI voice receptionist platform and associated services (collectively, the "Service").

By signing up for an account, clicking "I Agree," or using the Service in any way, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, do not use the Service.

If you are agreeing on behalf of a dental practice or organization, you represent and warrant that you have the authority to bind that entity to these Terms.`,
  },
  {
    title: "2. Description of Service",
    body: `Miss Floss provides an AI-powered voice receptionist that:

— Answers inbound patient calls on behalf of your dental clinic, 24 hours a day, 7 days a week
— Books, confirms, reschedules, and cancels appointments by integrating with your practice management system
— Responds to patient FAQs, clinic hours, location, and general inquiries
— Sends appointment reminders via SMS or automated voice message
— Escalates complex, urgent, or sensitive calls to designated clinic staff in real time
— Provides a web dashboard for monitoring call activity, managing settings, and reviewing transcripts

The Service is provided on a subscription basis. Features available to you depend on your selected plan.`,
  },
  {
    title: "3. Eligibility and Account Registration",
    body: `To use Miss Floss you must:

— Operate a licensed dental clinic or dental support organization (DSO) in Canada
— Be at least 18 years of age and legally capable of entering binding contracts
— Provide accurate, complete, and current information during registration and keep it updated

You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at hello@missfloss.ai if you suspect unauthorized access.

Miss Floss reserves the right to refuse registration or suspend accounts at its discretion if these eligibility requirements are not met.`,
  },
  {
    title: "4. Subscription Plans and Payment",
    body: `Pricing: Miss Floss is available at a flat monthly subscription fee based on your clinic's call volume and the number of locations. Pricing is confirmed in writing at the time of sign-up. We do not charge per-call fees or impose hidden charges.

Billing Cycle: Subscriptions are billed monthly in advance on the same calendar date each month, or annually if you elect an annual plan. All prices are in Canadian dollars (CAD) and are exclusive of applicable taxes.

Payment: You authorize Miss Floss to charge your designated payment method automatically on each billing date. If a payment fails, we will attempt to collect payment on three (3) successive days. If payment remains outstanding after that period, we may suspend your Service until the account is brought current.

Price Changes: We will provide at least 30 days' written notice before increasing subscription fees. Continued use of the Service after the effective date of a price change constitutes acceptance of the new price.

Taxes: You are responsible for all applicable federal and provincial taxes (including HST/GST) arising from your subscription. We will charge and remit applicable taxes where required by law.`,
  },
  {
    title: "5. Free Trials and Demos",
    body: `Where we offer a free trial period, you may use the Service at no charge for the trial duration. At the end of the trial, you will be automatically transitioned to a paid subscription unless you cancel before the trial expires. We will remind you by email before the trial ends.

Demo calls arranged through our website (cal.com) are subject to no obligation and are provided solely to allow prospective clients to evaluate the Service.`,
  },
  {
    title: "6. Cancellation Policy",
    body: `You may cancel your subscription at any time from your account dashboard or by emailing hello@missfloss.ai.

Monthly Plans: Cancellation takes effect at the end of the current billing cycle. You will retain full access to the Service until that date. We do not provide prorated refunds for partial months.

Annual Plans: Cancellation takes effect at the end of the annual term. We do not provide refunds for unused months of an annual subscription unless cancellation results from a material breach by Miss Floss.

Upon cancellation, your account and associated data will be retained for 90 days to allow you to export records, after which it will be permanently deleted in accordance with our Privacy Policy.

Miss Floss may terminate or suspend your account immediately without notice if you violate these Terms, engage in fraudulent activity, or fail to pay outstanding amounts.`,
  },
  {
    title: "7. Your Responsibilities",
    body: `As a Client, you agree to:

Disclose AI Use: Inform your patients that calls may be answered by an AI voice system before or at the commencement of the interaction. You are solely responsible for compliance with any disclosure obligations under provincial professional regulations governing dental practice.

Obtain Necessary Consents: Ensure you have obtained all consents required by applicable law (including PIPEDA and provincial privacy legislation) from your patients for the collection, use, and storage of their personal information through the Service.

Provide Accurate Configuration: Supply accurate clinic information, FAQs, operating hours, escalation contacts, and integration credentials during onboarding and keep this information current.

Appropriate Use: Use the Service only for lawful purposes and in a manner consistent with applicable laws and professional standards governing the practice of dentistry in Canada.

No Resale: You may not resell, sublicense, or provide the Service to third parties without our express written consent.`,
  },
  {
    title: "8. Data Ownership and Processing",
    body: `Your Data: All clinic data, patient data, and call records generated through your account remain your property. Miss Floss does not claim ownership over your data.

Our Licence: You grant Miss Floss a limited, non-exclusive, royalty-free licence to process, store, and use your data solely to provide and improve the Service. We will not use patient data to train general-purpose AI models without your explicit written consent.

Data Processing Agreement: To the extent required by PIPEDA or applicable law, Miss Floss acts as a service provider processing personal information on your behalf. Our Privacy Policy (available at missfloss.ai/privacy) sets out how we handle this data and forms part of these Terms by reference.

Anonymised Insights: We may compile and use aggregated, anonymised, non-identifiable data derived from the Service (such as call volume trends) to improve our platform and publish industry insights. Such data cannot be traced back to any individual clinic or patient.`,
  },
  {
    title: "9. Intellectual Property",
    body: `Miss Floss Platform: All software, AI models, interfaces, workflows, trademarks, and content comprising the Miss Floss platform are and remain the exclusive intellectual property of Miss Floss Inc. These Terms do not transfer any ownership rights to you.

Your Content: You retain all intellectual property rights in the content, data, and materials you provide to us (clinic FAQs, branding, configurations). You grant us a limited licence to use this content solely to configure and operate the Service for your account.

Feedback: Any suggestions, ideas, or feedback you provide regarding the Service may be used by Miss Floss without compensation or attribution to you.`,
  },
  {
    title: "10. Service Availability and Support",
    body: `Uptime: We target 99.9% monthly uptime for the voice receptionist infrastructure, excluding scheduled maintenance and circumstances beyond our reasonable control. We will endeavour to perform scheduled maintenance outside of peak clinic hours and provide advance notice.

Support: All subscription plans include email and live-chat support during Canadian business hours (Monday–Friday, 9:00 AM–6:00 PM ET). We aim to respond to support requests within 4 business hours.

Onboarding: We provide full technical onboarding, including integration with your practice management system and initial AI training, at no additional cost. Onboarding is typically completed within 48–72 hours of sign-up.

Changes to the Service: We reserve the right to modify, update, or discontinue features of the Service with reasonable notice. We will not materially reduce core functionality without providing at least 30 days' notice and the option to cancel without penalty.`,
  },
  {
    title: "11. Limitation of Liability",
    body: `To the maximum extent permitted by applicable law:

Miss Floss's total aggregate liability to you for any claim arising from or relating to these Terms or the Service shall not exceed the greater of (a) the total subscription fees paid by you in the three (3) months immediately preceding the event giving rise to the claim, or (b) CAD $500.

Miss Floss shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including lost profits, lost revenue, loss of data, or business interruption, even if Miss Floss has been advised of the possibility of such damages.

These limitations apply regardless of the theory of liability (contract, tort, negligence, strict liability, or otherwise).

Nothing in these Terms limits liability that cannot be excluded under applicable Canadian law, including liability for fraud, gross negligence, or willful misconduct.`,
  },
  {
    title: "12. Indemnification",
    body: `You agree to indemnify, defend, and hold harmless Miss Floss Inc. and its officers, directors, employees, and agents from any claims, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from:

— Your breach of these Terms
— Your violation of any applicable law or regulation, including provincial dental regulations
— Your failure to obtain required patient consents
— Any misuse of the Service by you or your staff
— Third-party claims arising from content or instructions you provide to us`,
  },
  {
    title: "13. Warranties and Disclaimers",
    body: `Miss Floss warrants that it will provide the Service with reasonable skill and care, consistent with industry standards.

THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT AS EXPRESSLY STATED IN THESE TERMS, MISS FLOSS MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.

Miss Floss does not warrant that the Service will be error-free, uninterrupted, or free from security vulnerabilities. Miss Floss is not responsible for telecommunications network failures, internet disruptions, or third-party service outages outside of its control.

The AI voice receptionist is not a substitute for professional clinical judgment. Miss Floss does not provide medical or dental advice, and any clinical questions must be directed to a qualified dental professional.`,
  },
  {
    title: "14. Governing Law and Dispute Resolution",
    body: `These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict-of-law principles.

Any dispute arising from these Terms or the Service that cannot be resolved through good-faith negotiation will be submitted to binding arbitration in Toronto, Ontario under the rules of the ADR Institute of Canada, unless either party seeks injunctive or other equitable relief in which case either party may apply to the courts of Ontario.

You and Miss Floss each waive any right to a jury trial or to participate in class-action proceedings.`,
  },
  {
    title: "15. General Provisions",
    body: `Entire Agreement: These Terms, together with our Privacy Policy and any order form or statement of work, constitute the entire agreement between you and Miss Floss regarding the Service and supersede all prior negotiations, representations, or agreements.

Severability: If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.

Waiver: Failure by Miss Floss to enforce any provision of these Terms does not constitute a waiver of our right to enforce it in the future.

Assignment: You may not assign or transfer your rights or obligations under these Terms without our prior written consent. Miss Floss may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets.

Notices: Notices to Miss Floss must be sent to hello@missfloss.ai. We will send notices to the email address on file for your account.

Force Majeure: Neither party will be liable for delays or failures in performance resulting from causes beyond their reasonable control, including natural disasters, pandemics, government actions, or internet infrastructure failures.`,
  },
  {
    title: "16. Contact",
    body: `For questions about these Terms of Service, please contact:

Miss Floss Inc.
Toronto, Ontario, Canada
hello@missfloss.ai

We're always happy to clarify anything before you sign up.`,
  },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400">Last updated: May 2026</p>
          <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-sm text-slate-600 leading-relaxed">
              Please read these Terms carefully before using Miss Floss. By using our service, you agree to these Terms. If you have questions, email us at{" "}
              <a href="mailto:hello@missfloss.ai" className="text-teal-600 hover:text-teal-700 transition-colors">hello@missfloss.ai</a>{" "}
              before signing up.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">Contents</p>
          <ol className="space-y-1.5">
            {sections.map((s) => (
              <li key={s.title}>
                <span className="text-sm text-slate-500 leading-relaxed">{s.title}</span>
              </li>
            ))}
          </ol>
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
            <Link href="/privacy" className="text-teal-600 hover:text-teal-700 transition-colors">Privacy Policy</Link>
            <a href="mailto:hello@missfloss.ai" className="text-slate-400 hover:text-slate-600 transition-colors">hello@missfloss.ai</a>
          </div>
        </div>
      </div>
    </div>
  );
}
