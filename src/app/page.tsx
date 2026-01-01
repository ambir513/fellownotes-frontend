import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/header/navbar";
import { HeroSection } from "../components/landing/hero-section";
import { BenefitsSection } from "@/components/landing/benefits-section";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl p-4">
        <HeroSection />
        <BenefitsSection />
      </main>
      <Footer />
    </>
  );
}
