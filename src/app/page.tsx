import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/header/navbar";
import { HeroSection } from "../components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqsSection } from "@/components/landing/faqs-section";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl p-4 space-y-16">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <FaqsSection />
      </main>
      <Footer />
    </>
  );
}
