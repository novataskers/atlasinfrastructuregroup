import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="pt-28 pb-20 px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#d4af37]/70 font-mono block mb-4">
            [ legal ]
          </span>
          <h1 className="text-white text-[clamp(24px,3.5vw,40px)] font-bold tracking-tight leading-[1.15] mb-3">
            Privacy Notice
          </h1>
          <p className="text-[#555] text-xs mb-12">Last updated: April 2026</p>

          <div className="prose prose-invert max-w-none text-[#999] text-[14px] leading-[1.85] font-light space-y-8">
            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">1. Introduction</h2>
              <p>
                Atlas Infrastructure Group&trade; (&quot;Atlas,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Notice explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including platforms powered by the AIG Engine, HireMindX, and IxraAI.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following categories of information:</p>
              <ul className="list-disc list-inside space-y-1.5 text-[#888]">
                <li><strong className="text-white/70">Personal Information:</strong> Name, email address, phone number, and other contact details you provide through forms or communications.</li>
                <li><strong className="text-white/70">Professional Information:</strong> Resume/CV, area of expertise, and employment history submitted through our careers portal.</li>
                <li><strong className="text-white/70">Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and other diagnostic data collected automatically.</li>
                <li><strong className="text-white/70">Cookies:</strong> Small data files stored on your device to enhance functionality and analyze site performance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1.5 text-[#888]">
                <li>To provide, operate, and maintain our website and services.</li>
                <li>To process career applications and respond to inquiries.</li>
                <li>To improve our platforms, products, and user experience.</li>
                <li>To communicate with you about updates, opportunities, and relevant information.</li>
                <li>To comply with legal obligations and enforce our terms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">4. Data Sharing</h2>
              <p>
                We do not sell your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and services, subject to confidentiality agreements. We may also disclose information when required by law or to protect the rights and safety of Atlas Infrastructure Group and its users.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">6. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights regarding your personal data, including the right to access, correct, delete, or restrict processing of your information. To exercise these rights, please contact us at{" "}
                <a href="mailto:info@atlasinfrastructuregroup.com" className="text-[#d4af37] hover:underline">info@atlasinfrastructuregroup.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">7. Changes to This Notice</h2>
              <p>
                We may update this Privacy Notice from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this notice periodically.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-semibold tracking-wide uppercase mb-3">8. Contact</h2>
              <p>
                If you have any questions about this Privacy Notice, please contact us at{" "}
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
