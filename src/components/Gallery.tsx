'use client';

import { Play, Quote, Star } from 'lucide-react';
import { useState } from 'react';
import {
    ReactCompareSlider,
    ReactCompareSliderImage
} from 'react-compare-slider';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'Tutti i Risultati' },
        { id: 'implants', label: 'Impianti' },
        { id: 'veneers', label: 'Faccette' },
        { id: 'whitening', label: 'Sbiancamento' },
        { id: 'restoration', label: 'Riabilitazione Completa' }
    ];

    const galleryItems = [
        {
            category: 'veneers',
            title: 'Trasformazione con Faccette in Porcellana',
            before: '/images/before-after/1-before.jpg',
            after: '/images/before-after/1-after.jpg'
        },
        {
            category: 'implants',
            title: 'Impianto Singolo',
            before: '/images/before-after/2-before.jpg',
            after: '/images/before-after/2-after.jpg'
        },
        {
            category: 'whitening',
            title: 'Sbiancamento Professionale',
            before: '/images/before-after/3-before.jpg',
            after: '/images/before-after/3-after.jpg'
        },
        {
            category: 'restoration',
            title: 'Trasformazione Completa del Sorriso',
            before: '/images/before-after/4-before.jpg',
            after: '/images/before-after/4-after.jpg'
        },
        {
            category: 'veneers',
            title: 'Design del Sorriso con Faccette',
            before: '/images/before-after/5-before.jpg',
            after: '/images/before-after/5-after.jpg'
        },
        {
            category: 'implants',
            title: 'Impianti Multipli',
            before: '/images/before-after/6-before.jpg',
            after: '/images/before-after/6-after.jpg'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Thompson',
            country: 'United Kingdom',
            countryCode: 'GB',
            rating: 5,
            treatment: 'Impianti Dentali',
            text: 'Ero titubante all\'inizio, ma l\'intera esperienza ha superato le mie aspettative. La clinica è moderna, il personale è professionale e il Dr. Krasniqi è semplicemente fantastico. Ho risparmiato oltre £8.000 e ho potuto godere di una vacanza al mare!'
        },
        {
            name: 'Michael Weber',
            country: 'Germany',
            countryCode: 'DE',
            rating: 5,
            treatment: 'Faccette in Porcellana',
            text: 'Servizio eccezionale dall\'inizio alla fine. Il design digitale del sorriso mi ha mostrato esattamente cosa aspettarmi. Le mie faccette hanno un aspetto incredibilmente naturale - nessuno può dire che non siano i miei denti veri. Altamente raccomandato!'
        },
        {
            name: 'Laura Rossi',
            country: 'Italy',
            countryCode: 'IT',
            rating: 5,
            treatment: 'Riabilitazione Completa del Cavo Orale',
            text: 'Dopo anni di problemi dentali, finalmente ho un sorriso di cui sono orgogliosa. Il team è stato paziente, ha spiegato tutto chiaramente in italiano e i risultati sono rivoluzionari. Vale ogni centesimo e il viaggio!'
        },
        {
            name: 'James O\'Connor',
            country: 'Ireland',
            countryCode: 'IE',
            rating: 5,
            treatment: 'Corone e Ponti',
            text: 'Professionali, attenti ed estremamente competenti. La clinica ha organizzato tutto - hotel, ritiro dall\'aeroporto, persino raccomandazioni sui ristoranti. La qualità del lavoro è eccellente a una frazione dei prezzi irlandesi.'
        }
    ];

    const filteredGallery =
        selectedCategory === 'all'
            ? galleryItems
            : galleryItems.filter((item) => item.category === selectedCategory);

    return (
        <section id='gallery' className='bg-gray-50 py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Risultati Reali, <span className='text-primary-600'>Sorrisi Reali</span>
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Guarda le trasformazioni che abbiamo creato per pazienti da tutto il mondo
                    </p>
                </div>

                {/* Category Filter */}
                <div className='mb-12 flex flex-wrap justify-center gap-3'>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                                selectedCategory === category.id
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 shadow-sm hover:bg-primary-50 hover:text-primary-600'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Before/After Gallery */}
                <div className='mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {filteredGallery.map((item, index) => (
                        <div
                            key={index}
                            className='group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl'
                        >
                            <div className='relative aspect-[4/3] overflow-hidden'>
                                <ReactCompareSlider
                                    itemOne={
                                        <ReactCompareSliderImage
                                            src={item.before}
                                            alt='Prima'
                                            style={{ objectFit: 'cover' }}
                                        />
                                    }
                                    itemTwo={
                                        <ReactCompareSliderImage
                                            src={item.after}
                                            alt='Dopo'
                                            style={{ objectFit: 'cover' }}
                                        />
                                    }
                                    position={50}
                                    className='h-full w-full'
                                />
                                {/* Labels */}
                                <div className='pointer-events-none absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white'>
                                    Prima
                                </div>
                                <div className='pointer-events-none absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white'>
                                    Dopo
                                </div>
                            </div>
                            <div className='p-4'>
                                <h3 className='font-semibold text-gray-900'>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Testimonial */}
                <div className='mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 shadow-2xl'>
                    <div className='grid lg:grid-cols-2'>
                        <div className='relative aspect-video bg-black lg:aspect-auto'>
                            <video
                                className='h-full w-full object-cover'
                                controls
                                preload='metadata'
                                poster='/videos/testimonial-poster.jpg'
                            >
                                <source src='/videos/testimonial.mp4' type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='flex items-center p-8 md:p-12'>
                            <div>
                                <Quote className='mb-4 h-12 w-12 text-primary-400' />
                                <p className='mb-6 text-xl text-white md:text-2xl'>
                                    "La migliore decisione che ho preso per la mia salute dentale. Professionali, attenti e i
                                    risultati parlano da soli."
                                </p>
                                <div className='flex items-center gap-4'>
                                    <div className='h-16 w-16 rounded-full bg-primary-400' />
                                    <div>
                                        <p className='font-semibold text-white'>Guarda la Storia di Bruno Cosimo</p>
                                        <p className='text-sm text-primary-200'>Paziente Riabilitazione Completa del Cavo Orale</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Written Testimonials */}
                <div className='mb-12 text-center'>
                    <h3 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>
                        Cosa Dicono i Nostri Pazienti
                    </h3>
                    <p className='text-lg text-gray-600'>Fidato da pazienti da tutta Europa</p>
                </div>

                <div className='grid gap-6 md:grid-cols-2'>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className='rounded-xl border border-gray-200 bg-white p-5 shadow-md transition-all hover:border-primary-300 hover:shadow-lg'
                        >
                            {/* Rating */}
                            <div className='mb-3 flex items-center gap-1'>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className='h-4 w-4 fill-accent-500 text-accent-500' />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className='mb-4 text-sm text-gray-700'>{testimonial.text}</p>

                            {/* Patient Info */}
                            <div className='flex items-center gap-3 border-t border-gray-200 pt-4'>
                                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-600'>
                                    {testimonial.countryCode}
                                </div>
                                <div>
                                    <p className='text-sm font-semibold text-gray-900'>{testimonial.name}</p>
                                    <p className='text-xs text-gray-600'>
                                        {testimonial.country} • {testimonial.treatment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Link to All Google Reviews */}
                <div className='mt-8 text-center'>
                    <a
                        href='https://share.google/HDOSpCxECQp446FLP'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-md transition-all hover:bg-primary-50 hover:shadow-lg'
                    >
                        <Star className='h-5 w-5 fill-accent-500 text-accent-500' />
                        Vedi Tutte le Recensioni Google
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
