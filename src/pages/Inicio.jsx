import Hero from "@/components/Hero";
import PilarSection from "@/components/PilarSection";
import Estructura from "@/components/Estructura";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Inicio = () => {
    return (
        <div className="min-h-screen bg-[var(--negro)] flex flex-col">
            <Hero />
            <PilarSection />
            <Estructura />
            <Contact />
            <Footer />
            <WhatsAppButton phoneNumber="925757151" />
        </div>
    )
}

export default Inicio