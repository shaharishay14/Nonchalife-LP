import Features from "@/components/landing/Features";
import GetSection from "@/components/landing/GetSection";
import Hero from "@/components/landing/Hero";
import Plus from "@/components/landing/Plus";
import Pricing from "@/components/landing/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Plus />
      <Pricing />
      <GetSection />
    </>
  );
}
