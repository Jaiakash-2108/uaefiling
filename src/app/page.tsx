import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Hero } from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import WhyUaeFiling from "@/components/sections/WhyUaeFiling";
import Services from "@/components/sections/Services";
import Professions from "@/components/sections/Professions";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <main className="flex min-h-screen flex-col items-center w-full">
        <Hero />
        <PainPoints />
        <WhyUaeFiling />
        <Services />
        <Professions />
        <Industries />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
