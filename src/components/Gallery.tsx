'use client';

import { Play, Quote, Star } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Results' },
        { id: 'implants', label: 'Implants' },
        { id: 'veneers', label: 'Veneers' },
        { id: 'whitening', label: 'Whitening' },
        { id: 'restoration', label: 'Full Restoration' }
    ];

    const galleryItems = [
        { category: 'veneers', title: 'Porcelain Veneers Transformation' },
        { category: 'implants', title: 'Single Tooth Implant' },
        { category: 'whitening', title: 'Professional Whitening' },
        { category: 'restoration', title: 'Full Mouth Makeover' },
        { category: 'veneers', title: 'Smile Design with Veneers' },
        { category: 'implants', title: 'Multiple Implants' }
    ];

    const testimonials = [
        {
            name: 'Sarah Thompson',
            country: 'United Kingdom',
            countryCode: 'GB',
            rating: 5,
            treatment: 'Dental Implants',
            text: 'I was hesitant at first, but the entire experience exceeded my expectations. The clinic is modern, the staff is professional, and Dr. Krasniqi is simply amazing. I saved over £8,000 and got to enjoy a beach holiday!'
        },
        {
            name: 'Michael Weber',
            country: 'Germany',
            countryCode: 'DE',
            rating: 5,
            treatment: 'Porcelain Veneers',
            text: 'Outstanding service from start to finish. The digital smile design showed me exactly what to expect. My veneers look incredibly natural - nobody can tell they are not my real teeth. Highly recommend!'
        },
        {
            name: 'Laura Rossi',
            country: 'Italy',
            countryCode: 'IT',
            rating: 5,
            treatment: 'Full Mouth Restoration',
            text: 'After years of dental problems, I finally have a smile I am proud of. The team was patient, explained everything clearly in Italian, and the results are life-changing. Worth every penny and the trip!'
        },
        {
            name: 'James O\'Connor',
            country: 'Ireland',
            countryCode: 'IE',
            rating: 5,
            treatment: 'Crowns & Bridges',
            text: 'Professional, caring, and extremely competent. The clinic arranged everything - hotel, airport pickup, even restaurant recommendations. The quality of work is top-notch at a fraction of Irish prices.'
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
                        Real Results, <span className='text-primary-600'>Real Smiles</span>
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        See the transformations we've created for patients from around the world
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
                            <div className='relative'>
                                {/* Before/After Split Image Placeholder */}
                                <div className='flex aspect-[4/3]'>
                                    <div className='relative flex-1 bg-gradient-to-br from-gray-300 to-gray-400'>
                                        <div className='absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white'>
                                            Before
                                        </div>
                                    </div>
                                    <div className='relative flex-1 bg-gradient-to-br from-primary-200 to-primary-400'>
                                        <div className='absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white'>
                                            After
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-4'>
                                <h3 className='font-semibold text-gray-900'>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Testimonial Placeholder */}
                <div className='mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 shadow-2xl'>
                    <div className='grid lg:grid-cols-2'>
                        <div className='relative aspect-video bg-gradient-to-br from-navy-800 to-navy-600 lg:aspect-auto'>
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <button className='group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition-all hover:scale-110 hover:bg-white'>
                                    <Play className='ml-1 h-10 w-10 text-primary-600' />
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center p-8 md:p-12'>
                            <div>
                                <Quote className='mb-4 h-12 w-12 text-primary-400' />
                                <p className='mb-6 text-xl text-white md:text-2xl'>
                                    "The best decision I've made for my dental health. Professional, caring, and the
                                    results speak for themselves."
                                </p>
                                <div className='flex items-center gap-4'>
                                    <div className='h-16 w-16 rounded-full bg-primary-400' />
                                    <div>
                                        <p className='font-semibold text-white'>Watch Emma's Story</p>
                                        <p className='text-sm text-primary-200'>Full Mouth Restoration Patient</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Written Testimonials */}
                <div className='mb-12 text-center'>
                    <h3 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>
                        What Our Patients Say
                    </h3>
                    <p className='text-lg text-gray-600'>Trusted by patients from across Europe</p>
                </div>

                <div className='grid gap-8 md:grid-cols-2'>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className='rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all hover:border-primary-300 hover:shadow-lg'
                        >
                            {/* Rating */}
                            <div className='mb-4 flex items-center gap-1'>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className='h-5 w-5 fill-accent-500 text-accent-500' />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className='mb-6 text-gray-700'>{testimonial.text}</p>

                            {/* Patient Info */}
                            <div className='flex items-center gap-4 border-t border-gray-200 pt-6'>
                                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600'>
                                    {testimonial.countryCode}
                                </div>
                                <div>
                                    <p className='font-semibold text-gray-900'>{testimonial.name}</p>
                                    <p className='text-sm text-gray-600'>
                                        {testimonial.country} • {testimonial.treatment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
