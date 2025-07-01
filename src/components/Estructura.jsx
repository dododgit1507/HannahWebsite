import React from 'react';
import ProfileCard from './ReactBits/components/ProfileCard';
import { teamMembers } from '@/utils/TeamData';

const Estructura = () => {
    return (
        <section className="py-20 bg-[var(--negro)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
                        Nuestro <span className="text-[var(--verde-limon)]">Equipo</span>
                    </h2>
                    <p className="text-lg text-[var(--gris-claro)] max-w-3xl mx-auto">
                        Conoce a los profesionales detrás de Hannah Produce. Un equipo multidisciplinario de expertos
                        comprometidos con la excelencia y la innovación en cada proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="h-[400px]">
                            <ProfileCard 
                                avatarUrl={member.avatarUrl}
                                name={member.name}
                                title={member.title}
                                handle={member.handle}
                                status={member.status}
                                contactText={member.contactText}
                                onContactClick={() => console.log(`Contactar a ${member.name}`)}
                                showUserInfo={true}
                                enableTilt={true}
                                behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(120,100%,90%,var(--card-opacity)) 4%,hsla(120,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(120,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(120,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#93ca0780 0%,#07ff3a00 100%),radial-gradient(100% 100% at 50% 50%,#93ca07 1%,#07ff3a00 76%),conic-gradient(from 124deg at 50% 50%,#93ca07 0%,#d6f576 40%,#d6f576 60%,#93ca07 100%)"
                                innerGradient="linear-gradient(145deg,#93ca0730 0%,#d6f57620 100%)"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-[var(--blanco)] max-w-3xl mx-auto mb-8">
                        Cada miembro de nuestro equipo aporta una perspectiva única y habilidades especializadas 
                        que nos permiten ofrecer soluciones integrales y personalizadas para cada cliente.
                    </p>
                    <button className="px-8 py-3 text-lg font-medium bg-[var(--verde)] text-[var(--negro)] rounded-md hover:bg-[var(--verde-limon)] transition-all duration-300">
                        Conoce más sobre nosotros
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Estructura;
