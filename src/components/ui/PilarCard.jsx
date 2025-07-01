const PilarCard = ({ pillar }) => {
    return (
        <div className="bg-[#0a0a0a] border border-[var(--gris)] rounded-lg overflow-hidden transition-all duration-300 hover:border-[var(--verde)] hover:shadow-lg hover:shadow-[var(--verde-limon)]/10 h-full flex flex-col">
            <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-[var(--verde-limon)] mb-3">{pillar.title}</h3>
                <p className="text-[var(--blanco)] mb-6">{pillar.description}</p>
                <ul className="space-y-2 mb-6">
                    {pillar.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-[var(--verde)] flex items-center justify-center mr-3">
                                <svg className="w-3 h-3 text-[var(--negro)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="text-[var(--gris-claro)]">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="px-6 pb-6">
                <button className="flex items-center text-[var(--verde)] hover:text-[var(--verde-limon)] transition-colors duration-300">
                    <span>{pillar.cta}</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PilarCard;
