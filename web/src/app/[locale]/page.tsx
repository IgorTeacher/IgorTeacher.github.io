import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Offer from "@/components/Offer";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Offer />
      <About />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
