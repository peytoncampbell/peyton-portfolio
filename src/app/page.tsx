import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Process from "@/components/Process";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <SocialProof />
        <Pricing />
        <About />
        <Process />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
