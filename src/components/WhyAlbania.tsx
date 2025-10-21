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

    const comparisons = [
        { treatment: 'Impianto Dentale', uk: '£2,500', albania: '€600', savings: '76%' },
        { treatment: 'Faccette in Porcellana (per dente)', uk: '£800', albania: '€250', savings: '69%' },
        { treatment: 'Corona', uk: '£1,200', albania: '€300', savings: '75%' },
        { treatment: 'Riabilitazione Completa del Cavo Orale', uk: '£25,000', albania: '€6,500', savings: '74%' }
    ];

    return (
        <section id='why-albania' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Perché Scegliere l'<span className='text-primary-600'>Albania</span> per le Tue Cure Dentali?
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Scopri perché migliaia di pazienti internazionali si affidano a noi per i loro sorrisi
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className='mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className='group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-primary-300 hover:shadow-lg'
                        >
                            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 transition-colors group-hover:bg-primary-600'>
                                <benefit.icon className='h-6 w-6 text-primary-600 transition-colors group-hover:text-white' />
                            </div>
                            <h3 className='mb-3 text-xl font-semibold text-gray-900'>{benefit.title}</h3>
                            <p className='text-gray-600'>{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Cost Comparison */}
                <div className='rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12'>
                    <div className='mb-10 text-center'>
                        <h3 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>
                            Scopri Quanto Puoi Risparmiare
                        </h3>
                        <p className='text-lg text-gray-600'>Confronto reale dei prezzi con l'Europa occidentale</p>
                    </div>

                    <div className='overflow-x-auto'>
                        <table className='w-full min-w-[600px]'>
                            <thead>
                                <tr className='border-b-2 border-primary-200'>
                                    <th className='pb-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:text-base'>
                                        Trattamento
                                    </th>
                                    <th className='pb-4 px-4 text-center text-sm font-semibold text-gray-900 sm:text-base'>
                                        UK/Germany
                                    </th>
                                    <th className='pb-4 px-4 text-center text-sm font-semibold text-primary-600 sm:text-base'>
                                        Albania
                                    </th>
                                    <th className='pb-4 pl-4 text-right text-sm font-semibold text-accent-600 sm:text-base'>
                                        Risparmi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((item, index) => (
                                    <tr key={index} className='border-b border-gray-200'>
                                        <td className='py-4 pr-4 text-sm font-medium text-gray-900 sm:text-base'>
                                            {item.treatment}
                                        </td>
                                        <td className='py-4 px-4 text-center text-sm text-gray-700 sm:text-base'>
                                            {item.uk}
                                        </td>
                                        <td className='py-4 px-4 text-center text-sm font-semibold text-primary-600 sm:text-base'>
                                            {item.albania}
                                        </td>
                                        <td className='py-4 pl-4 text-right text-sm font-bold text-accent-600 sm:text-base'>
                                            {item.savings}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-8 text-center'>
                        <p className='text-sm text-gray-600 sm:text-base'>
                            * I prezzi sono approssimativi e possono variare in base ai piani di trattamento individuali
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyAlbania;
