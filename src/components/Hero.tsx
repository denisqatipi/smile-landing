'use client';

import { Award, Globe, Users } from 'lucide-react';

const Hero = () => {
    const handleScroll = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id='home' className='relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 sm:py-28'>
            {/* Background decorative elements */}
            <div className='absolute inset-0 -z-10 opacity-30'>
                <div className='absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary-200 blur-3xl'></div>
                <div className='absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-accent-200 blur-3xl'></div>
            </div>

            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    {/* Savings Badge */}
                    <div className='mb-6 inline-flex items-center rounded-full bg-accent-100 px-4 py-2 text-sm font-semibold text-accent-700'>
                        <span className='mr-2 text-xl'>💰</span>
                        Risparmia fino al 70% sui Trattamenti Dentali
                    </div>

                    {/* Main Headline */}
                    <h1 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl'>
                        Trasforma il Tuo Sorriso in{' '}
                        <span className='bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent'>
                            Albania
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className='mx-auto mb-10 max-w-3xl text-lg text-gray-600 sm:text-xl md:text-2xl'>
                        Cure dentali premium a metà prezzo. Standard europei incontrano la bellezza mediterranea. Vivi
                        l'odontoiatria di classe mondiale godendoti una vacanza sulla costa.
                    </p>

                    {/* CTAs */}
                    <div className='mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                        <button
                            onClick={() => handleScroll('#contact')}
                            className='w-full rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl sm:w-auto'
                        >
                            Richiedi il Tuo Preventivo Gratuito
                        </button>
                        <button
                            onClick={() => handleScroll('#journey')}
                            className='w-full rounded-lg border-2 border-navy-600 px-8 py-4 text-lg font-semibold text-navy-600 transition-all hover:bg-navy-50 sm:w-auto'
                        >
                            Pianifica il Tuo Viaggio Dentale
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className='mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3'>
                        <div className='flex flex-col items-center rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg'>
                            <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100'>
                                <Users className='h-7 w-7 text-primary-600' />
                            </div>
                            <div className='text-3xl font-bold text-gray-900'>1000+</div>
                            <div className='text-sm text-gray-600'>Pazienti Internazionali</div>
                        </div>

                        <div className='flex flex-col items-center rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg'>
                            <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent-100'>
                                <Award className='h-7 w-7 text-accent-600' />
                            </div>
                            <div className='text-3xl font-bold text-gray-900'>EU</div>
                            <div className='text-sm text-gray-600'>Materiali Certificati</div>
                        </div>

                        <div className='flex flex-col items-center rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg'>
                            <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-navy-100'>
                                <Globe className='h-7 w-7 text-navy-600' />
                            </div>
                            <div className='text-3xl font-bold text-gray-900'>5</div>
                            <div className='text-sm text-gray-600'>Lingue Parlate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
