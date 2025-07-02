import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[var(--negro)] flex flex-col">
            <NavBar />
            <div className="flex-1 overflow-y-auto max-w-7xl mx-auto">
                {children}
            </div>
            <Footer />
            <WhatsAppButton phoneNumber="925757151" />
        </div>
    )
}

export default MainLayout
