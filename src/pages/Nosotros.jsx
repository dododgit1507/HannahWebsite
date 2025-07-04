import MainLayout from '@/layouts/MainLayout'
import QuienesSomos from '@/components/QuienesSomos'
import Estructura from '@/components/Estructura'
import PilarSection from '@/components/PilarSection'
import MisionVisionVideo from '../components/MisionVisionIntro'

const Nosotros = () => {
    return (
        <MainLayout>
            <QuienesSomos />
            <MisionVisionVideo />
            <PilarSection />
            <Estructura />
        </MainLayout>
    )
}

export default Nosotros