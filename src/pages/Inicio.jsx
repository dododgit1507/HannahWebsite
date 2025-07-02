import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Inicio = () => {
    return (
        <div className="min-h-screen bg-[var(--negro)] flex flex-col">
            <Hero />
            <Footer />
            <WhatsAppButton phoneNumber="925757151" />
        </div>
    )
}

export default Inicio