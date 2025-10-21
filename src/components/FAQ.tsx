'use client';

import { ChevronDown, HelpCircle, Shield, Clock, Euro, Plane, HeadphonesIcon } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            category: 'Sicurezza',
            icon: Shield,
            question: 'Il trattamento dentale in Albania è sicuro?',
            answer: 'Assolutamente. La nostra clinica soddisfa tutti gli standard dell\'Unione Europea per le cure dentali. Utilizziamo materiali certificati UE, seguiamo rigorosi protocolli di sterilizzazione (EN 13060 Classe B) e i nostri dentisti sono formati a livello internazionale con anni di esperienza nel trattamento di pazienti dall\'Europa occidentale. Manteniamo gli stessi standard che ti aspetteresti nel Regno Unito, Germania o Italia.'
        },
        {
            category: 'Costi',
            icon: Euro,
            question: 'Perché i trattamenti sono molto più economici in Albania?',
            answer: 'Il minor costo della vita in Albania ci consente di offrire gli stessi materiali e competenze di qualità a prezzi inferiori del 50-70%. I nostri dentisti utilizzano gli stessi materiali europei premium (impianti tedeschi, ceramiche italiane) delle cliniche occidentali, ma i nostri costi generali - affitto, stipendi del personale, spese operative - sono significativamente più bassi. Benefici di questi risparmi senza alcun compromesso sulla qualità.'
        },
        {
            category: 'Durata',
            icon: Clock,
            question: 'Quanto tempo devo rimanere in Albania?',
            answer: 'La durata del trattamento varia in base alla procedura: Trattamenti semplici come faccette o corone: 5-7 giorni, Impianti dentali: 3-6 mesi in totale (divisi in 2 brevi visite), Riabilitazione completa del cavo orale: 7-14 giorni, Sbiancamento dentale: 1 giorno. Ottimizziamo il tuo programma di trattamento per ridurre al minimo il tempo lontano da casa garantendo al contempo una corretta guarigione e risultati di qualità.'
        },
        {
            category: 'Garanzia',
            icon: Shield,
            question: 'E per quanto riguarda le garanzie e il follow-up?',
            answer: 'Tutto il nostro lavoro è coperto da garanzie complete: Impianti dentali: garanzia di 10 anni, Faccette e corone: garanzia di 5 anni, Ortodonzia: garanzia di completamento del trattamento. Forniamo supporto 24/7 dopo il tuo ritorno a casa. Per qualsiasi problema, offriamo consulenze gratuite e, se necessario, possiamo organizzare un trattamento di follow-up. Collaboriamo anche con dentisti nelle principali città europee per il supporto di emergenza.'
        },
        {
            category: 'Viaggio',
            icon: Plane,
            question: 'Aiutate con l\'organizzazione del viaggio?',
            answer: 'Sì! Forniamo supporto completo per il viaggio: Ritiro gratuito dall\'Aeroporto Internazionale di Tirana, Raccomandazioni di hotel partner con tariffe speciali (€40-80/notte), Coordinamento del programma di trattamento con i tuoi piani di viaggio, Raccomandazioni locali per ristoranti e attività, Assistenza con la programmazione degli appuntamenti per massimizzare il tuo tempo libero. Il nostro team ti guiderà in ogni fase del processo.'
        },
        {
            category: 'Supporto',
            icon: HeadphonesIcon,
            question: 'E se ho bisogno di aiuto dopo essere tornato a casa?',
            answer: 'Forniamo supporto post-trattamento completo: Linea di supporto WhatsApp 24/7 con i nostri dentisti, Istruzioni dettagliate per il post-trattamento nella tua lingua, Consulenze video se hai preoccupazioni, Rete di partner di emergenza nelle principali città europee, Consulenze digitali di follow-up gratuite. La maggior parte dei pazienti non ha problemi, ma siamo sempre disponibili se hai bisogno di noi.'
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className='bg-gray-50 py-20'>
            <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <div className='mb-4 inline-flex items-center justify-center rounded-full bg-primary-100 p-4'>
                        <HelpCircle className='h-8 w-8 text-primary-600' />
                    </div>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Domande <span className='text-primary-600'>Frequenti</span>
                    </h2>
                    <p className='text-lg text-gray-600'>Tutto quello che devi sapere sul turismo dentale in Albania</p>
                </div>

                {/* FAQ Accordion */}
                <div className='space-y-4'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-primary-300 hover:shadow-md'
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className='flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50'
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <div className='flex items-start gap-4 pr-4'>
                                    <div className='mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100'>
                                        <faq.icon className='h-5 w-5 text-primary-600' />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='mb-1 text-xs font-semibold uppercase tracking-wide text-primary-600'>
                                            {faq.category}
                                        </div>
                                        <h3 className='text-lg font-bold text-gray-900'>{faq.question}</h3>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`h-6 w-6 flex-shrink-0 text-gray-400 transition-transform ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className='border-t border-gray-200 bg-gray-50 px-6 py-6'>
                                    <p className='pl-14 text-gray-700'>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <div className='mt-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 p-8 text-center md:p-10'>
                    <h3 className='mb-3 text-2xl font-bold text-white'>Hai ancora domande?</h3>
                    <p className='mb-6 text-primary-100'>
                        Il nostro team è qui per aiutarti. Contattaci per una consulenza gratuita.
                    </p>
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary-600 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl'
                    >
                        Contattaci Ora
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
