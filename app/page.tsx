import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BrandsCarousel from "@/components/sections/BrandsCarousel";
import StoreGrid from "@/components/sections/StoreGrid";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <About />
        <BrandsCarousel />
        <StoreGrid />
      </main>
      <Footer />
    </>
  );
}
