import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="pt-28 pb-20 px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#d4af37]/70 font-mono block mb-4">
            [ legal ]
          </span>
          <h1 className="text-white text-[clamp(24px,3.5vw,40px)] font-bold tracking-tight leading-[1.15] mb-3">
            Terms of Use
          </h1>
          <p className="text-[#555] text-xs mb-12">Last updated: April 2026</p>

          <div className="prose prose-invert max-w-none text-[#999] text-[14px] leading-[1.85] font-light space-y-8">
            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Atlas Infrastructure Group&trade; website and services (&quot;Services&quot;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Services.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">2. Services Description</h2>
              <p>
                Atlas Infrastructure Group provides AI-driven digital solutions, including but not limited to the AIG Engine series, HireMindX, IxraAI, and related platforms and technologies. Our Services are designed to deliver advanced automation, data analysis, multimedia generation, and intelligent decision-making capabilities.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">3. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, software, and other intellectual property displayed on this website are the property of Atlas Infrastructure Group or its licensors. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent. The Atlas Infrastructure Group name, AIG Engine, HireMindX, and IxraAI are registered trademarks.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">4. User Conduct</h2>
              <p className="mb-3">When using our Services, you agree not to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-[#888]">
                <li>Use the Services for any unlawful purpose or in violation of any applicable regulations.</li>
                <li>Attempt to gain unauthorized access to any part of the Services or related systems.</li>
                <li>Interfere with or disrupt the integrity or performance of the Services.</li>
                <li>Upload or transmit any malicious code, viruses, or harmful content.</li>
                <li>Misrepresent your identity or affiliation with any person or entity.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">5. Submissions</h2>
              <p>
                Any materials, information, or communications you submit to Atlas Infrastructure Group through our website (including career applications, contact forms, and feedback) are considered non-confidential unless otherwise agreed in writing. By submitting content, you grant us a non-exclusive, royalty-free right to use such submissions for the purposes for which they were provided.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">6. Disclaimer of Warranties</h2>
              <p>
                Our Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. Atlas Infrastructure Group does not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Atlas Infrastructure Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party sites. We encourage you to review the terms and privacy policies of any third-party services you access.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">9. Modifications</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this page. Your continued use of the Services after any modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">10. Contact</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at{" "}
                <a href="mailto:info@atlasinfrastructuregroup.com" className="text-[#d4af37] hover:underline">info@atlasinfrastructuregroup.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
