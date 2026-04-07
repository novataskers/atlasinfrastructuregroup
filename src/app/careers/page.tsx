import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="atlas-section py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="section-label">Careers</span>
          <div className="atlas-divider mt-3" />
          <h1 className="text-white text-shadow-heavy mt-8 text-[clamp(32px,5vw,56px)]">
            Build With Atlas
          </h1>
          <p className="text-[#8ba0b8] text-base leading-relaxed font-light mt-6 max-w-3xl">
            Explore roles across AI engineering, research, infrastructure, product, and operations. We build systems that ship.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
