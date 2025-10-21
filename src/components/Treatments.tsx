'use client';

import { CheckCircle2, ChevronDown, Crown, Smile, Sparkles, Stethoscope, Zap } from 'lucide-react';
import { useState } from 'react';

const Treatments = () => {
    const [expandedTreatment, setExpandedTreatment] = useState<number | null>(null);

    const treatments = [
        {
            icon: Stethoscope,
            title: 'Impianti Dentali',
            price: 'da €600',
            description: 'Soluzione permanente per la sostituzione dei denti',
            duration: '3-6 mesi',
            recovery: '1-2 settimane',
            warranty: '10 anni',
            details: [
                'Impianti in titanio di alta qualità da produttori europei leader',
                'Include posizionamento chirurgico, abutment di guarigione e corona',
                'Chirurgia guidata dal computer per precisione e sicurezza',
                'Innesto osseo disponibile se necessario',
                'Restauro finale con corone in ceramica premium'
            ]
        },
        {
            icon: Sparkles,
            title: 'Faccette in Porcellana',
            price: 'da €250',
            description: 'Trasforma il tuo sorriso istantaneamente',
            duration: '5-7 giorni',
            recovery: 'Immediato',
            warranty: '5 anni',
            details: [
                'Gusci in porcellana ultra-sottili dall\'aspetto naturale',
                'Anteprima del design digitale del sorriso prima del trattamento',
                'Preparazione minima del dente richiesta',
                'Realizzate su misura nel nostro laboratorio interno',
                'Abbinate al colore dei tuoi denti naturali per risultati impeccabili'
            ]
        },
        {
            icon: Zap,
            title: 'Sbiancamento Dentale Professionale',
            price: 'da €150',
            description: 'Illumina il tuo sorriso in sicurezza',
            duration: '1 ora',
            recovery: 'Immediato',
            warranty: 'N/D',
            details: [
                'Gel sbiancante di livello professionale (perossido di idrogeno al 35%)',
                'Attivazione con luce LED per risultati migliori',
                'Fino a 8 tonalità più chiare in una sessione',
                'Kit da portare a casa incluso per il mantenimento',
                'Sicuro per lo smalto con sensibilità minima'
            ]
        },
        {
            icon: Smile,
            title: 'Ortodonzia',
            price: 'da €1.200',
            description: 'Raddrizza i denti con apparecchi o allineatori',
            duration: '12-24 mesi',
            recovery: 'N/D',
            warranty: 'Trattamento incluso',
            details: [
                'Apparecchi metallici tradizionali o opzioni in ceramica trasparente',
                'Allineatori invisibili (simili a Invisalign)',
                'Simulazione del trattamento 3D e monitoraggio dei progressi',
                'Controlli mensili durante il soggiorno o da remoto',
                'Contenitori inclusi per mantenere i risultati'
            ]
        },
        {
            icon: CheckCircle2,
            title: 'Riabilitazione Completa del Cavo Orale',
            price: 'da €6.500',
            description: 'Trasformazione completa del sorriso',
            duration: '7-14 giorni',
            recovery: '2-3 settimane',
            warranty: '10 anni',
            details: [
                'Piano di trattamento completo su misura per le tue esigenze',
                'Combinazione di impianti, corone, ponti e faccette',
                'Soluzioni implantari All-on-4 o All-on-6 disponibili',
                'Denti temporanei forniti durante la guarigione',
                'Restauro funzionale ed estetico completo'
            ]
        },
        {
            icon: Crown,
            title: 'Corone e Ponti',
            price: 'da €300',
            description: 'Ripristina i denti danneggiati o mancanti',
            duration: '3-5 giorni',
            recovery: 'Immediato',
            warranty: '5 anni',
            details: [
                'Materiali in ceramica premium (zirconia o e.max)',
                'Aspetto naturale che si fonde con i denti esistenti',
                'Impronte digitali precise per una vestibilità perfetta',
                'Nessun metallo visibile - completamente estetico',
                'Restauri durevoli e duraturi'
            ]
        }
    ];

    const toggleDetails = (index: number) => {
        setExpandedTreatment(expandedTreatment === index ? null : index);
    };

    return (
        <section id='treatments' className='bg-gray-50 py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        <span className='text-primary-600'>Trattamenti</span> Popolari
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Cure dentali complete con prezzi trasparenti e qualità garantita
                    </p>
                </div>

                {/* Treatments Grid */}
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {treatments.map((treatment, index) => (
                        <div
                            key={index}
                            className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all hover:border-primary-300 hover:shadow-xl'
                        >
                            <div className='p-6'>
                                {/* Icon & Title */}
                                <div className='mb-4 flex items-start justify-between'>
                                    <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100'>
                                        <treatment.icon className='h-7 w-7 text-primary-600' />
                                    </div>
                                    <div className='rounded-full bg-accent-100 px-4 py-1.5 text-sm font-bold text-accent-700'>
                                        {treatment.price}
                                    </div>
                                </div>

                                <h3 className='mb-2 text-xl font-bold text-gray-900'>{treatment.title}</h3>
                                <p className='mb-4 text-sm text-gray-600'>{treatment.description}</p>

                                {/* Treatment Info */}
                                <div className='mb-4 space-y-2 rounded-xl bg-gray-50 p-4 text-sm'>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Durata:</span>
                                        <span className='font-medium text-gray-900'>{treatment.duration}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Recupero:</span>
                                        <span className='font-medium text-gray-900'>{treatment.recovery}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Garanzia:</span>
                                        <span className='font-medium text-gray-900'>{treatment.warranty}</span>
                                    </div>
                                </div>

                                {/* Learn More Button */}
                                <button
                                    onClick={() => toggleDetails(index)}
                                    className='flex w-full items-center justify-between rounded-lg border border-primary-600 px-4 py-2.5 text-sm font-semibold text-primary-600 transition-all hover:bg-primary-50'
                                >
                                    <span>Scopri di Più</span>
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform ${expandedTreatment === index ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Expanded Details */}
                                {expandedTreatment === index && (
                                    <div className='mt-4 space-y-3 rounded-xl bg-primary-50 p-4'>
                                        <p className='text-sm font-semibold text-primary-900'>Cosa è incluso:</p>
                                        <ul className='space-y-2'>
                                            {treatment.details.map((detail, detailIndex) => (
                                                <li key={detailIndex} className='flex items-start text-sm text-gray-700'>
                                                    <CheckCircle2 className='mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600' />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className='mt-16 text-center'>
                    <p className='mb-6 text-lg text-gray-600'>
                        Non sei sicuro di quale trattamento sia giusto per te?
                    </p>
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl'
                    >
                        Richiedi Consulenza Gratuita e Piano di Trattamento
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Treatments;
