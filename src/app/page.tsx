import Header from "@/components/sections/header";
import HeroVideo from "@/components/sections/hero-video";
import JumpContentSlider from "@/components/sections/jump-content-slider";
import StatementBlock from "@/components/sections/statement-block";
import ArticleCarousel from "@/components/sections/article-carousel";
import CareersBanner from "@/components/sections/careers-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroVideo />
      <JumpContentSlider />
      <StatementBlock />
      <ArticleCarousel />
      <CareersBanner />
      <Footer />
    </main>
  );
}
