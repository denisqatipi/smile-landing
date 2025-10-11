'use client';

import { Award, Camera, MapPin, Microscope, Scan, Shield } from 'lucide-react';

const Clinic = () => {
    const certifications = [
        { name: 'ISO 9001:2015', description: 'Quality Management' },
        { name: 'European Dental Association', description: 'Member Since 2018' },
        { name: 'CE Certified', description: 'Materials & Equipment' },
        { name: 'Sterilization Standards', description: 'EN 13060 Class B' }
    ];

    const technologies = [
        { icon: Scan, name: '3D CT Scanning', description: 'Precise diagnosis and planning' },
        { icon: Camera, name: 'Intraoral Camera', description: 'Real-time visualization' },
        { icon: Microscope, name: 'Digital Smile Design', description: 'Preview your new smile' },
        { icon: Shield, name: 'CAD/CAM System', description: 'Same-day restorations' }
    ];

    const galleryImages = [
        { title: 'Modern Reception Area', description: 'Welcoming and comfortable' },
        { title: 'Treatment Room', description: 'State-of-the-art equipment' },
        { title: 'Sterilization Room', description: 'Medical-grade cleanliness' },
        { title: 'Recovery Lounge', description: 'Relax after treatment' }
    ];

    return (
        <section id='clinic' className='bg-gray-50 py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <div className='mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700'>
                        <MapPin className='mr-2 h-4 w-4' />
                        Located in the heart of Tirana
                    </div>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Our Modern <span className='text-primary-600'>Clinic</span>
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Experience world-class dental care in a state-of-the-art facility designed for your comfort
                    </p>
                </div>

                {/* Clinic Gallery */}
                <div className='mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 shadow-md transition-all hover:shadow-xl'
                        >
                            <div className='aspect-[4/3] bg-gradient-to-br from-primary-200 to-primary-300' />
                            <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6'>
                                <div>
                                    <h3 className='mb-1 text-lg font-semibold text-white'>{image.title}</h3>
                                    <p className='text-sm text-gray-200'>{image.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications & Standards */}
                <div className='mb-16 rounded-3xl bg-white p-8 shadow-lg md:p-12'>
                    <div className='mb-10 text-center'>
                        <h3 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>
                            Certified Excellence & Safety
                        </h3>
                        <p className='text-lg text-gray-600'>
                            Your safety and satisfaction are our top priorities
                        </p>
                    </div>

                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className='flex flex-col items-center rounded-xl border-2 border-primary-200 bg-primary-50 p-6 text-center transition-all hover:border-primary-400 hover:shadow-md'
                            >
                                <Award className='mb-4 h-12 w-12 text-primary-600' />
                                <h4 className='mb-2 text-base font-bold text-gray-900'>{cert.name}</h4>
                                <p className='text-sm text-gray-600'>{cert.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className='mt-10 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 p-8 text-center text-white'>
                        <Shield className='mx-auto mb-4 h-16 w-16' />
                        <h4 className='mb-2 text-xl font-bold'>Medical-Grade Sterilization</h4>
                        <p className='text-primary-100'>
                            All instruments undergo Class B autoclave sterilization following European standards.
                            Single-use disposables for maximum safety.
                        </p>
                    </div>
                </div>

                {/* Technology Highlights */}
                <div className='rounded-3xl bg-gradient-to-br from-navy-50 to-primary-50 p-8 md:p-12'>
                    <div className='mb-10 text-center'>
                        <h3 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>
                            Advanced Dental Technology
                        </h3>
                        <p className='text-lg text-gray-600'>
                            Cutting-edge equipment for precise, comfortable treatments
                        </p>
                    </div>

                    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                        {technologies.map((tech, index) => (
                            <div key={index} className='flex flex-col items-center text-center'>
                                <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md'>
                                    <tech.icon className='h-8 w-8 text-navy-600' />
                                </div>
                                <h4 className='mb-2 text-lg font-semibold text-gray-900'>{tech.name}</h4>
                                <p className='text-sm text-gray-600'>{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clinic;
