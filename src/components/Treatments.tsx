'use client';

import { CheckCircle2, ChevronDown, Crown, Smile, Sparkles, Stethoscope, Zap } from 'lucide-react';
import { useState } from 'react';

const Treatments = () => {
    const [expandedTreatment, setExpandedTreatment] = useState<number | null>(null);

    const treatments = [
        {
            icon: Stethoscope,
            title: 'Dental Implants',
            price: 'from €600',
            description: 'Permanent tooth replacement solution',
            duration: '3-6 months',
            recovery: '1-2 weeks',
            warranty: '10 years',
            details: [
                'High-quality titanium implants from leading European manufacturers',
                'Includes surgical placement, healing abutment, and crown',
                'Computer-guided surgery for precision and safety',
                'Bone grafting available if needed',
                'Final restoration with premium ceramic crowns'
            ]
        },
        {
            icon: Sparkles,
            title: 'Porcelain Veneers',
            price: 'from €250',
            description: 'Transform your smile instantly',
            duration: '5-7 days',
            recovery: 'Immediate',
            warranty: '5 years',
            details: [
                'Ultra-thin, natural-looking porcelain shells',
                'Digital smile design preview before treatment',
                'Minimal tooth preparation required',
                'Custom-crafted in our on-site laboratory',
                'Color-matched to your natural teeth for seamless results'
            ]
        },
        {
            icon: Zap,
            title: 'Professional Teeth Whitening',
            price: 'from €150',
            description: 'Brighten your smile safely',
            duration: '1 hour',
            recovery: 'Immediate',
            warranty: 'N/A',
            details: [
                'Professional-grade whitening gel (35% hydrogen peroxide)',
                'LED light activation for enhanced results',
                'Up to 8 shades lighter in one session',
                'Take-home kit included for maintenance',
                'Safe for enamel with minimal sensitivity'
            ]
        },
        {
            icon: Smile,
            title: 'Orthodontics',
            price: 'from €1,200',
            description: 'Straighten teeth with braces or aligners',
            duration: '12-24 months',
            recovery: 'N/A',
            warranty: 'Treatment included',
            details: [
                'Traditional metal braces or clear ceramic options',
                'Invisible aligners (similar to Invisalign)',
                '3D treatment simulation and progress tracking',
                'Monthly check-ups during your stay or remotely',
                'Retainers included to maintain results'
            ]
        },
        {
            icon: CheckCircle2,
            title: 'Full Mouth Restoration',
            price: 'from €6,500',
            description: 'Complete smile transformation',
            duration: '7-14 days',
            recovery: '2-3 weeks',
            warranty: '10 years',
            details: [
                'Comprehensive treatment plan tailored to your needs',
                'Combination of implants, crowns, bridges, and veneers',
                'All-on-4 or All-on-6 implant solutions available',
                'Temporary teeth provided during healing',
                'Complete functional and aesthetic restoration'
            ]
        },
        {
            icon: Crown,
            title: 'Crowns & Bridges',
            price: 'from €300',
            description: 'Restore damaged or missing teeth',
            duration: '3-5 days',
            recovery: 'Immediate',
            warranty: '5 years',
            details: [
                'Premium ceramic (zirconia or e.max) materials',
                'Natural appearance that blends with existing teeth',
                'Precise digital impressions for perfect fit',
                'No metal showing through - completely aesthetic',
                'Durable and long-lasting restorations'
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
                        Popular <span className='text-primary-600'>Treatments</span>
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Comprehensive dental care with transparent pricing and guaranteed quality
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
                                        <span className='text-gray-600'>Duration:</span>
                                        <span className='font-medium text-gray-900'>{treatment.duration}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Recovery:</span>
                                        <span className='font-medium text-gray-900'>{treatment.recovery}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Warranty:</span>
                                        <span className='font-medium text-gray-900'>{treatment.warranty}</span>
                                    </div>
                                </div>

                                {/* Learn More Button */}
                                <button
                                    onClick={() => toggleDetails(index)}
                                    className='flex w-full items-center justify-between rounded-lg border border-primary-600 px-4 py-2.5 text-sm font-semibold text-primary-600 transition-all hover:bg-primary-50'
                                >
                                    <span>Learn More</span>
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform ${expandedTreatment === index ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Expanded Details */}
                                {expandedTreatment === index && (
                                    <div className='mt-4 space-y-3 rounded-xl bg-primary-50 p-4'>
                                        <p className='text-sm font-semibold text-primary-900'>What's included:</p>
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
                        Not sure which treatment is right for you?
                    </p>
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl'
                    >
                        Get Free Consultation & Treatment Plan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Treatments;
