'use client';

import { Bed, Coffee, MapPin, Wifi } from 'lucide-react';
import { useState } from 'react';

const Accommodation = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const hotelImages = [
        {
            src: '/images/hotel/1.jpg',
            alt: 'Camera dell\'hotel con vista'
        },
        {
            src: '/images/hotel/2.jpg',
            alt: 'Area comune dell\'hotel'
        },
        {
            src: '/images/hotel/3.jpg',
            alt: 'Reception dell\'hotel'
        },
        {
            src: '/images/hotel/4.jpg',
            alt: 'Servizi dell\'hotel'
        }
    ];

    const amenities = [
        { icon: Wifi, label: 'WiFi Gratuito' },
        { icon: Coffee, label: 'Colazione Inclusa' },
        { icon: Bed, label: 'Camere Confortevoli' },
        { icon: MapPin, label: 'Vicino alla Clinica' }
    ];

    return (
        <section id='accommodation' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <div className='mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700'>
                        <Bed className='mr-2 h-4 w-4' />
                        Soggiorno Confortevole Durante il Trattamento
                    </div>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Hotel <span className='text-primary-600'>Partner</span>
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Collaboriamo con hotel selezionati per garantire il tuo comfort e relax durante il soggiorno
                    </p>
                </div>

                {/* Hotel Images Gallery */}
                <div className='mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                    {hotelImages.map((image, index) => (
                        <div
                            key={index}
                            className='group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl'
                            onClick={() => setSelectedImage(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100' />
                        </div>
                    ))}
                </div>

                {/* Amenities */}
                <div className='mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className='flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all hover:border-primary-300 hover:bg-primary-50'
                        >
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100'>
                                <amenity.icon className='h-6 w-6 text-primary-600' />
                            </div>
                            <span className='font-semibold text-gray-900'>{amenity.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox for full-size images */}
            {selectedImage !== null && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'
                    onClick={() => setSelectedImage(null)}
                >
                    <div className='relative max-h-[90vh] max-w-5xl'>
                        <img
                            src={hotelImages[selectedImage].src}
                            alt={hotelImages[selectedImage].alt}
                            className='h-full w-full rounded-lg object-contain'
                        />
                        <button
                            className='absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-900 backdrop-blur-sm hover:bg-white'
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Accommodation;
