'use client';

import { Award, GraduationCap, Languages, Users } from 'lucide-react';

const Doctors = () => {
    const doctors = [
        {
            name: 'Dr. Arben Krasniqi',
            title: 'Lead Implantologist',
            experience: '15+ years',
            education: 'University of Vienna, Austria',
            specialization: 'Dental Implants & Full Mouth Restoration',
            languages: ['English', 'German', 'Italian', 'Albanian'],
            patients: '2000+'
        },
        {
            name: 'Dr. Elira Morina',
            title: 'Cosmetic Dentistry Specialist',
            experience: '12+ years',
            education: 'University of Florence, Italy',
            specialization: 'Veneers, Teeth Whitening & Smile Design',
            languages: ['English', 'Italian', 'Albanian'],
            patients: '1500+'
        },
        {
            name: 'Dr. Blerim Hoxha',
            title: 'Prosthodontist',
            experience: '18+ years',
            education: 'University of Athens, Greece',
            specialization: 'Crowns, Bridges & Dentures',
            languages: ['English', 'Greek', 'Albanian'],
            patients: '2500+'
        }
    ];

    return (
        <section id='doctors' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Meet Our <span className='text-primary-600'>Experienced Doctors</span>
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Internationally trained specialists dedicated to transforming your smile
                    </p>
                </div>

                {/* Doctors Grid */}
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className='group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all hover:border-primary-300 hover:shadow-2xl'
                        >
                            {/* Doctor Photo Placeholder */}
                            <div className='relative aspect-[3/4] bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300'>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <Users className='h-24 w-24 text-primary-600/40' />
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className='p-6'>
                                <h3 className='mb-1 text-2xl font-bold text-gray-900'>{doctor.name}</h3>
                                <p className='mb-4 text-sm font-medium text-primary-600'>{doctor.title}</p>

                                {/* Education */}
                                <div className='mb-4 flex items-start space-x-3'>
                                    <GraduationCap className='mt-1 h-5 w-5 flex-shrink-0 text-navy-600' />
                                    <div>
                                        <p className='text-sm font-semibold text-gray-900'>Education</p>
                                        <p className='text-sm text-gray-600'>{doctor.education}</p>
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className='mb-4 flex items-start space-x-3'>
                                    <Award className='mt-1 h-5 w-5 flex-shrink-0 text-accent-600' />
                                    <div>
                                        <p className='text-sm font-semibold text-gray-900'>Experience</p>
                                        <p className='text-sm text-gray-600'>
                                            {doctor.experience} • {doctor.patients} patients
                                        </p>
                                    </div>
                                </div>

                                {/* Specialization */}
                                <div className='mb-4 rounded-xl bg-primary-50 p-3'>
                                    <p className='text-xs font-semibold uppercase tracking-wide text-primary-600'>
                                        Specialization
                                    </p>
                                    <p className='mt-1 text-sm font-medium text-gray-900'>{doctor.specialization}</p>
                                </div>

                                {/* Languages */}
                                <div className='flex items-start space-x-3'>
                                    <Languages className='mt-1 h-5 w-5 flex-shrink-0 text-gray-600' />
                                    <div>
                                        <p className='text-sm font-semibold text-gray-900'>Languages</p>
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
                        Meet Your Doctor During Free Online Consultation
                    </h3>
                    <p className='mx-auto mb-6 max-w-2xl text-lg text-primary-100'>
                        Get to know our team, discuss your needs, and receive a personalized treatment plan before you
                        travel
                    </p>
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl'
                    >
                        Book Free Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Doctors;
