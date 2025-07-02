import MainLayout from '@/layouts/MainLayout'
import QuienesSomos from '@/components/QuienesSomos'
import Estructura from '@/components/Estructura'
import PilarSection from '@/components/PilarSection'

const Nosotros = () => {
    return (
        <MainLayout>
            <QuienesSomos />
            <PilarSection />
            <Estructura />
        </MainLayout>
    )
}

export default Nosotros