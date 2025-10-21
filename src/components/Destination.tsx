'use client';

import { Building2, Castle, Hotel, MapPin, Palmtree, Sunrise } from 'lucide-react';

const Destination = () => {
    const destinations = [
        {
            icon: Building2,
            name: 'Tirana',
            description: 'Capitale vibrante con edifici colorati, caffè e vita notturna',
            highlight: 'Quartiere Blloku e Piazza Skanderbeg',
            image: '/images/albania/tirana.jpg'
        },
        {
            icon: Palmtree,
            name: 'Spiagge di Durazzo',
            description: 'Spiagge sabbiose incontaminate a soli 30 minuti dalla clinica',
            highlight: 'Perfette per il relax post-trattamento',
            image: '/images/albania/durres-beach.webp'
        },
        {
            icon: Sunrise,
            name: 'Saranda e Occhio Blu',
            description: 'Acque cristalline e la splendida sorgente naturale dell\'Occhio Blu',
            highlight: 'La Riviera Albanese al suo meglio',
            image: '/images/albania/saranda-beach.jpg'
        },
        {
            icon: Castle,
            name: 'Sito UNESCO di Berat',
            description: 'Antica "Città delle Mille Finestre" - architettura ottomana',
            highlight: 'Fascino storico e viste montane',
            image: '/images/albania/berat.jpg'
        },
        {
            icon: MapPin,
            name: 'Castello di Kruja',
            description: 'Fortezza medievale con viste panoramiche e bazar tradizionale',
            highlight: 'Ricca storia e cultura albanese',
            image: '/images/albania/kruja-castle.jpg'
        },
        {
            icon: Hotel,
            name: 'Alpi Albanesi',
            description: 'Paesaggi montani mozzafiato per gli amanti dell\'avventura',
            highlight: 'Valli di Theth e Valbona',
            image: '/images/albania/albanian-alps.webp'
        }
    ];

    const itineraries = [
        {
            days: '3-4 Giorni',
            title: 'Visita Veloce per Trattamento',
            activities: ['Giorno 1: Arrivo e consulenza', 'Giorno 2-3: Sessioni di trattamento', 'Giorno 4: Controllo finale e partenza']
        },
        {
            days: '7 Giorni',
            title: 'Trattamento + Fuga al Mare',
            activities: [
                'Giorno 1-3: Trattamento dentale',
                'Giorno 4-5: Relax a Durazzo',
                'Giorno 6: Esplora Tirana',
                'Giorno 7: Partenza'
            ]
        },
        {
            days: '10-14 Giorni',
            title: 'Esperienza Completa in Albania',
            activities: [
                'Settimana 1: Trattamento + Tirana',
                'Giorno 8-10: Riviera Albanese',
                'Giorno 11-12: Siti UNESCO',
                'Giorno 13-14: Controllo finale e partenza'
            ]
        }
    ];

    return (
        <section id='destination' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <div className='mb-4 inline-flex items-center rounded-full bg-accent-100 px-4 py-2 text-sm font-semibold text-accent-700'>
                        <Palmtree className='mr-2 h-4 w-4' />
                        Combina il Trattamento con una Vacanza Mediterranea
                    </div>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Goditi l'<span className='text-primary-600'>Albania</span> Mentre Guarisci
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Scopri spiagge incontaminate, storia antica e paesaggi mozzafiato - tutto a portata di mano
                        dalla nostra clinica
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className='mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className='group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all hover:border-primary-300 hover:shadow-xl'
                        >
                            {/* Image */}
                            <div className='relative aspect-[16/10] overflow-hidden bg-gray-200'>
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                                />
                                <div className='absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1.5 backdrop-blur-sm'>
                                    <MapPin className='inline h-4 w-4 text-primary-600' />
                                    <span className='ml-1 text-sm font-semibold text-gray-900'>{dest.name}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='p-6'>
                                <p className='mb-3 text-gray-700'>{dest.description}</p>
                                <div className='flex items-center text-sm font-medium text-primary-600'>
                                    <Sparkles className='mr-2 h-4 w-4' />
                                    {dest.highlight}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Suggested Itineraries */}
                <div className='rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12'>
                    <div className='mb-10 text-center'>
                        <h3 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>Itinerari Suggeriti</h3>
                        <p className='text-lg text-gray-600'>Piani flessibili per adattarsi alla tua tempistica di trattamento</p>
                    </div>

                    <div className='grid gap-8 md:grid-cols-3'>
                        {itineraries.map((itinerary, index) => (
                            <div
                                key={index}
                                className='rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-lg'
                            >
                                <div className='mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700'>
                                    {itinerary.days}
                                </div>
                                <h4 className='mb-6 text-xl font-bold text-gray-900'>{itinerary.title}</h4>
                                <ul className='space-y-3'>
                                    {itinerary.activities.map((activity, actIndex) => (
                                        <li key={actIndex} className='flex items-start text-sm text-gray-700'>
                                            <span className='mr-3 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-600'>
                                                {actIndex + 1}
                                            </span>
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Accommodation & Services */}
                <div className='mt-16 rounded-3xl bg-gradient-to-r from-navy-600 to-navy-500 p-8 md:p-12'>
                    <div className='grid gap-8 lg:grid-cols-2 lg:items-center'>
                        <div>
                            <h3 className='mb-4 text-2xl font-bold text-white sm:text-3xl'>
                                Ci Occupiamo di Tutto
                            </h3>
                            <ul className='space-y-4 text-navy-100'>
                                <li className='flex items-start'>
                                    <Hotel className='mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-300' />
                                    <div>
                                        <p className='font-semibold text-white'>Hotel Partner</p>
                                        <p className='text-sm'>
                                            Tariffe speciali in hotel confortevoli vicino alla clinica (€40-80/notte)
                                        </p>
                                    </div>
                                </li>
                                <li className='flex items-start'>
                                    <MapPin className='mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-300' />
                                    <div>
                                        <p className='font-semibold text-white'>Trasferimenti Aeroportuali</p>
                                        <p className='text-sm'>
                                            Ritiro gratuito dall'Aeroporto di Tirana e trasporto agli appuntamenti
                                        </p>
                                    </div>
                                </li>
                                <li className='flex items-start'>
                                    <Palmtree className='mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-300' />
                                    <div>
                                        <p className='font-semibold text-white'>Guide Locali</p>
                                        <p className='text-sm'>
                                            Raccomandazioni per ristoranti, tour e attività durante il tuo soggiorno
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='rounded-2xl bg-white/10 p-8 backdrop-blur-sm'>
                            <p className='mb-6 text-lg text-white'>
                                "L'Albania ha superato tutte le nostre aspettative. Le spiagge erano stupende, il cibo era
                                delizioso e le persone erano incredibilmente accoglienti. Si è davvero sentita come una vacanza
                                dentale!"
                            </p>
                            <div className='flex items-center gap-4'>
                                <div className='h-12 w-12 rounded-full bg-primary-300' />
                                <div>
                                    <p className='font-semibold text-white'>Sophie e Mark</p>
                                    <p className='text-sm text-navy-200'>Paesi Bassi • Visita di 10 giorni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Import missing icon
import { Sparkles } from 'lucide-react';

export default Destination;
