'use client';

import { Calendar, Clock, Euro, Heart, Shield, Sparkles } from 'lucide-react';

const WhyAlbania = () => {
    const benefits = [
        {
            icon: Euro,
            title: 'Convenienza Imbattibile',
            description: 'Risparmia il 50-70% rispetto a Regno Unito, Germania o Italia senza compromettere la qualità.'
        },
        {
            icon: Shield,
            title: 'Standard Europei',
            description: 'Materiali certificati UE, accreditamento ISO e specialisti formati a livello internazionale.'
        },
        {
            icon: Clock,
            title: "Nessuna Lista d'Attesa",
            description: 'Ricevi il tuo trattamento in poche settimane, non mesi. Accelera la trasformazione del tuo sorriso.'
        },
        {
            icon: Heart,
            title: 'Bellezza Mediterranea',
            description: 'Recupera su spiagge incontaminate. Combina le tue cure dentali con una vacanza memorabile.'
        },
        {
            icon: Sparkles,
            title: 'Tecnologia Moderna',
            description: 'Scansione 3D, sistemi CAD/CAM e design digitale del sorriso per risultati perfetti.'
        },
        {
            icon: Calendar,
            title: 'Programmazione Flessibile',
            description: 'Lavoriamo secondo i tuoi orari con appuntamenti serali e nel fine settimana disponibili.'
        }
    ];

    return (
        <section id='why-albania' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Perche scegliere <span className='text-primary-600'>Smile Provider</span> per le tue cure dentali?
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Scopri perché migliaia di pazienti internazionali si affidano a noi per i loro sorrisi
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className='mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-primary-300 hover:shadow-lg ${index >= 3 ? 'hidden md:block' : ''}`}
                        >
                            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 transition-colors group-hover:bg-primary-600'>
                                <benefit.icon className='h-6 w-6 text-primary-600 transition-colors group-hover:text-white' />
                            </div>
                            <h3 className='mb-3 text-xl font-semibold text-gray-900'>{benefit.title}</h3>
                            <p className='text-gray-600'>{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className='text-center'>
                    <a
                        href='#contact'
                        className='inline-block rounded-full bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl'
                    >
                        Richiedi Consulenza Gratuita e Piano di Trattamento
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WhyAlbania;
