import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="atlas-section py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="section-label">Our Story</span>
          <div className="atlas-divider mt-3" />
          <h1 className="text-white text-shadow-heavy mt-8 text-[clamp(32px,5vw,56px)]">
            Atlas Infrastructure Group
          </h1>
          <p className="text-[#8ba0b8] text-base leading-relaxed font-light mt-6 max-w-3xl">
            We build frontier-level AI systems and the infrastructure that powers them—designed for speed, reliability, and mission-critical deployments.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
