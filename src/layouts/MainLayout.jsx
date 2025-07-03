import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import PageTransition from "@/components/ui/PageTransition"

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[var(--negro)] flex flex-col">
            <NavBar />
            <div className="flex-1 overflow-y-auto">
                <PageTransition type="fade" duration={0.3}>
                    {children}
                </PageTransition>
            </div>
            <Footer />
            <WhatsAppButton phoneNumber="925757151" />
        </div>
    )
}

export default MainLayout
