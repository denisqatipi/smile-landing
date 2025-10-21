'use client';

import { Calendar, Car, ClipboardCheck, HeartPulse, Home, MessageSquare, Plane } from 'lucide-react';

const Journey = () => {
    const steps = [
        {
            number: 1,
            icon: MessageSquare,
            title: 'Consulenza Online Gratuita',
            description:
                'Condividi le tue preoccupazioni dentali e le radiografie. Incontra il tuo dentista tramite videochiamata e ricevi un piano di trattamento dettagliato con prezzi trasparenti.',
            color: 'primary'
        },
        {
            number: 2,
            icon: ClipboardCheck,
            title: 'Approvazione del Piano di Trattamento',
            description:
                'Esamina il tuo piano di trattamento personalizzato, la tempistica e la ripartizione dei costi. Fai domande e apporta modifiche fino a quando non sei completamente soddisfatto.',
            color: 'navy'
        },
        {
            number: 3,
            icon: Calendar,
            title: 'Organizzazione del Viaggio',
            description:
                'Ti aiutiamo a prenotare voli e alloggio. Scegli tra i nostri hotel partner vicino alla clinica con tariffe speciali per pazienti dentali.',
            color: 'accent'
        },
        {
            number: 4,
            icon: Car,
            title: 'Arrivo e Ritiro dall\'Aeroporto',
            description:
                'Atterra a Tirana e ti veniamo a prendere dall\'aeroporto. Trasferimento in hotel e sistemazione. Il trattamento inizia il giorno successivo.',
            color: 'primary'
        },
        {
            number: 5,
            icon: HeartPulse,
            title: 'Trattamento e Recupero',
            description:
                'Ricevi cure dentali di livello mondiale nella nostra clinica moderna. Tra un appuntamento e l\'altro, esplora Tirana o rilassati nelle spiagge vicine.',
            color: 'navy'
        },
        {
            number: 6,
            icon: Plane,
            title: 'Torna a Casa con Fiducia',
            description:
                'Torna a casa con il tuo nuovo sorriso e istruzioni complete per il post-trattamento. Forniamo supporto 24/7 per qualsiasi domanda post-trattamento.',
            color: 'accent'
        }
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'primary':
                return {
                    bg: 'bg-primary-100',
                    icon: 'text-primary-600',
                    number: 'bg-primary-600'
                };
            case 'navy':
                return {
                    bg: 'bg-navy-100',
                    icon: 'text-navy-600',
                    number: 'bg-navy-600'
                };
            case 'accent':
                return {
                    bg: 'bg-accent-100',
                    icon: 'text-accent-600',
                    number: 'bg-accent-600'
                };
            default:
                return {
                    bg: 'bg-primary-100',
                    icon: 'text-primary-600',
                    number: 'bg-primary-600'
                };
        }
    };

    return (
        <section id='journey' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Il Tuo <span className='text-primary-600'>Percorso</span> verso un Sorriso Perfetto
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Dalla prima consulenza al ritorno a casa - ti guidiamo in ogni passo del percorso
                    </p>
                </div>

                {/* Timeline */}
                <div className='relative'>
                    {/* Connection Line - Hidden on mobile, visible on desktop */}
                    <div className='absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-200 via-navy-200 to-accent-200 lg:block' />

                    <div className='space-y-12'>
                        {steps.map((step, index) => {
                            const colors = getColorClasses(step.color);
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className='relative'>
                                    {/* Mobile & Tablet Layout */}
                                    <div className='lg:hidden'>
                                        <div className='flex gap-6'>
                                            {/* Left: Number & Icon */}
                                            <div className='flex flex-col items-center'>
                                                <div
                                                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${colors.number} text-lg font-bold text-white shadow-lg`}
                                                >
                                                    {step.number}
                                                </div>
                                                {index < steps.length - 1 && (
                                                    <div className='mt-4 h-full w-0.5 bg-gray-200' />
                                                )}
                                            </div>

                                            {/* Right: Content */}
                                            <div className='flex-1 pb-8'>
                                                <div
                                                    className={`rounded-2xl ${colors.bg} p-6 shadow-md transition-all hover:shadow-lg`}
                                                >
                                                    <div className='mb-4 flex items-center gap-4'>
                                                        <div className='rounded-xl bg-white p-3 shadow-sm'>
                                                            <step.icon className={`h-6 w-6 ${colors.icon}`} />
                                                        </div>
                                                        <h3 className='text-xl font-bold text-gray-900'>
                                                            {step.title}
                                                        </h3>
                                                    </div>
                                                    <p className='text-gray-700'>{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Layout */}
                                    <div className='hidden lg:block'>
                                        <div className='grid grid-cols-2 gap-8'>
                                            {/* Left Side */}
                                            <div
                                                className={`${isEven ? 'block' : 'invisible'} ${isEven ? 'text-right' : ''}`}
                                            >
                                                {isEven && (
                                                    <div
                                                        className={`rounded-2xl ${colors.bg} p-8 shadow-md transition-all hover:shadow-lg`}
                                                    >
                                                        <div className='mb-4 flex items-center justify-end gap-4'>
                                                            <h3 className='text-2xl font-bold text-gray-900'>
                                                                {step.title}
                                                            </h3>
                                                            <div className='rounded-xl bg-white p-3 shadow-sm'>
                                                                <step.icon className={`h-7 w-7 ${colors.icon}`} />
                                                            </div>
                                                        </div>
                                                        <p className='text-gray-700'>{step.description}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Center Number */}
                                            <div className='absolute left-1/2 -translate-x-1/2'>
                                                <div
                                                    className={`flex h-16 w-16 items-center justify-center rounded-full ${colors.number} text-2xl font-bold text-white shadow-xl ring-4 ring-white`}
                                                >
                                                    {step.number}
                                                </div>
                                            </div>

                                            {/* Right Side */}
                                            <div className={`${!isEven ? 'block' : 'invisible'}`}>
                                                {!isEven && (
                                                    <div
                                                        className={`rounded-2xl ${colors.bg} p-8 shadow-md transition-all hover:shadow-lg`}
                                                    >
                                                        <div className='mb-4 flex items-center gap-4'>
                                                            <div className='rounded-xl bg-white p-3 shadow-sm'>
                                                                <step.icon className={`h-7 w-7 ${colors.icon}`} />
                                                            </div>
                                                            <h3 className='text-2xl font-bold text-gray-900'>
                                                                {step.title}
                                                            </h3>
                                                        </div>
                                                        <p className='text-gray-700'>{step.description}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className='mt-16 text-center'>
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl'
                    >
                        Inizia il Tuo Percorso Oggi
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Journey;
