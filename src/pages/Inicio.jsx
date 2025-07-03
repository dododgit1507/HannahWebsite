import Hero from "@/components/Hero";
import MainLayout from "@/layouts/MainLayout";
import Herramientas from "@/components/Herramientas";
import Colaboradores from "@/components/Colaboradores";
import Tecnologias from "@/components/Tecnologias";

const Inicio = () => {
    return (
        <MainLayout>
            <Hero />
            <Herramientas />
            <Tecnologias />
            {/* <Colaboradores /> */}
        </MainLayout>
    )
}

export default Inicio