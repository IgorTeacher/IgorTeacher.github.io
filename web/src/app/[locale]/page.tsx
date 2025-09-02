import Hero from "@/components/Hero";
import Qualifications from "@/components/Qualifications";
import SocialProof from "@/components/SocialProof";
import TeachingStats from "@/components/TeachingStats";
import HowItWorks from "@/components/HowItWorks";
import Offer from "@/components/Offer";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BeyondClassroom from "@/components/BeyondClassroom";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Qualifications />
      <TeachingStats />
      <SocialProof />
      <HowItWorks />
      <Offer />
      <About />
      <Pricing />
      <FAQ />
      <BeyondClassroom />
      <FinalCTA />
    </main>
  );
}
