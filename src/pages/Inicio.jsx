import Hero from "@/components/Hero";
import MainLayout from "@/layouts/MainLayout";
import QuienesSomos from "@/components/QuienesSomos";
import Herramientas from "@/components/Herramientas";
import Colaboradores from "@/components/Colaboradores";

const Inicio = () => {
    return (
        <MainLayout>
            <Hero />
            <QuienesSomos />
            <Herramientas />
            <Colaboradores />
        </MainLayout>
    )
}

export default Inicio