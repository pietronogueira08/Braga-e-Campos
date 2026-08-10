import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import PracticeAreas from "@/components/PracticeAreas";
import Differentials from "@/components/Differentials";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <TrustMetrics />
        <PracticeAreas />
        <Differentials />
        <ConsultationForm />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
