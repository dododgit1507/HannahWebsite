import Hero from "./components/Hero";
import PilarSection from "./components/PilarSection";
import Estructura from "./components/Estructura";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--negro)] flex flex-col">
      <Toaster
        position="top-right"
        duration={5000}
        expand={true}
      />
      <Hero />
      <PilarSection />
      <Estructura />
      <Contact />
      <Footer />
      <WhatsAppButton phoneNumber="925757151" />
    </div>
  )
}

export default App