import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/header/navbar";
import { HeroSection } from "../components/landing/hero-section";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="font-sans mx-auto max-w-6xl p-4">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
