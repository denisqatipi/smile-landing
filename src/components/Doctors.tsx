'use client';

import { Award, GraduationCap, Languages, Users } from 'lucide-react';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Doctors = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const doctors = [
        {
            name: 'Dr. Donatela Laska',
            title: 'Implantologo Capo',
            experience: '15+ anni',
            education: 'Università di Vienna, Austria',
            specialization: 'Impianti Dentali e Riabilitazione Completa del Cavo Orale',
            languages: ['Inglese', 'Tedesco', 'Italiano', 'Albanese'],
            patients: '2000+',
            image: '/images/doctors/doctor-1.jpg'
        },
        {
            name: 'Dr. Denisa Hazballa',
            title: 'Specialista in Odontoiatria Estetica',
            experience: '12+ anni',
            education: 'Università di Firenze, Italia',
            specialization: 'Faccette, Sbiancamento Dentale e Design del Sorriso',
            languages: ['Inglese', 'Italiano', 'Albanese'],
            patients: '1500+',
            image: '/images/doctors/doctor-2.jpg'
        },
        {
            name: 'Dr. Kostika Vera',
            title: 'Prostodontista',
            experience: '18+ anni',
            education: 'Università di Atene, Grecia',
            specialization: 'Corone, Ponti e Protesi',
            languages: ['Inglese', 'Greco', 'Albanese'],
            patients: '2500+',
            image: '/images/doctors/doctor-3.jpg'
        }
    ];

    return (
        <section id='doctors' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Incontra i Nostri <span className='text-primary-600'>Dottori Esperti</span>
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Specialisti formati a livello internazionale dedicati a trasformare il tuo sorriso
                    </p>
                </div>

                {/* Doctors Grid */}
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className='group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all hover:border-primary-300 hover:shadow-2xl'
                        >
                            {/* Doctor Photo */}
                            <div
                                className='relative aspect-[3/4] cursor-pointer overflow-hidden bg-gray-100'
                                onClick={() => {
                                    setLightboxIndex(index);
                                    setLightboxOpen(true);
                                }}
                            >
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                            </div>

                            {/* Doctor Info */}
                            <div className='p-6'>
                                <h3 className='mb-1 text-2xl font-bold text-gray-900'>{doctor.name}</h3>
                                <p className='mb-4 text-sm font-medium text-primary-600'>{doctor.title}</p>

                                {/* Education */}
                                <div className='mb-4 flex items-start space-x-3'>
                                    <GraduationCap className='mt-1 h-5 w-5 flex-shrink-0 text-navy-600' />
                                    <div>
                                        <p className='text-sm font-semibold text-gray-900'>Istruzione</p>
                                        <p className='text-sm text-gray-600'>{doctor.education}</p>
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className='mb-4 flex items-start space-x-3'>
                                    <Award className='mt-1 h-5 w-5 flex-shrink-0 text-accent-600' />
                                    <div>
                                        <p className='text-sm font-semibold text-gray-900'>Esperienza</p>
                                        <p className='text-sm text-gray-600'>
                                            {doctor.experience} • {doctor.patients} pazienti
                                        </p>
                                    </div>
                                </div>

                                {/* Specialization */}
                                <div className='mb-4 rounded-xl bg-primary-50 p-3'>
                                    <p className='text-xs font-semibold uppercase tracking-wide text-primary-600'>
                                        Specializzazione
                                    </p>
                                    <p className='mt-1 text-sm font-medium text-gray-900'>{doctor.specialization}</p>
                                </div>

                                {/* Languages */}
                                <div className='flex items-start space-x-3'>
                                    <Languages className='mt-1 h-5 w-5 flex-shrink-0 text-gray-600' />
                                    <div>
                                        <p className='text-sm font-semibold text-gray-900'>Lingue</p>
                                        <div className='mt-2 flex flex-wrap gap-2'>
                                            {doctor.languages.map((lang, langIndex) => (
                                                <span
                                                    key={langIndex}
                                                    className='rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700'
                                                >
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className='mt-16 rounded-3xl bg-gradient-to-r from-primary-600 to-primary-500 p-8 text-center md:p-12'>
                    <h3 className='mb-4 text-2xl font-bold text-white sm:text-3xl'>
                        Incontra il Tuo Dottore Durante una Consulenza Online Gratuita
                    </h3>
                    <p className='mx-auto mb-6 max-w-2xl text-lg text-primary-100'>
                        Conosci il nostro team, discuti le tue esigenze e ricevi un piano di trattamento personalizzato prima di viaggiare
                    </p>
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl'
                    >
                        Prenota Consulenza Gratuita
                    </button>
                </div>

                {/* Lightbox */}
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    index={lightboxIndex}
                    slides={doctors.map((doctor) => ({ src: doctor.image, alt: doctor.name }))}
                />
            </div>
        </section>
    );
};

export default Doctors;
