'use client';

import { Calendar, Car, ClipboardCheck, HeartPulse, Home, MessageSquare, Plane } from 'lucide-react';

const Journey = () => {
    const steps = [
        {
            number: 1,
            icon: MessageSquare,
            title: 'Free Online Consultation',
            description:
                'Share your dental concerns and X-rays. Meet your dentist via video call and receive a detailed treatment plan with transparent pricing.',
            color: 'primary'
        },
        {
            number: 2,
            icon: ClipboardCheck,
            title: 'Treatment Plan Approval',
            description:
                'Review your personalized treatment plan, timeline, and cost breakdown. Ask questions and make adjustments until you are completely satisfied.',
            color: 'navy'
        },
        {
            number: 3,
            icon: Calendar,
            title: 'Travel Arrangements',
            description:
                'We help you book flights and accommodation. Choose from our partner hotels near the clinic with special rates for dental patients.',
            color: 'accent'
        },
        {
            number: 4,
            icon: Car,
            title: 'Arrival & Airport Pickup',
            description:
                'Land in Tirana and we will pick you up from the airport. Transfer to your hotel and settle in. Your treatment begins the next day.',
            color: 'primary'
        },
        {
            number: 5,
            icon: HeartPulse,
            title: 'Treatment & Recovery',
            description:
                'Receive world-class dental care in our modern clinic. Between appointments, explore Tirana or relax at nearby beaches.',
            color: 'navy'
        },
        {
            number: 6,
            icon: Plane,
            title: 'Fly Home with Confidence',
            description:
                'Return home with your new smile and comprehensive aftercare instructions. We provide 24/7 support for any post-treatment questions.',
            color: 'accent'
        }
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'primary':
                return {
                    bg: 'bg-primary-100',
                    icon: 'text-primary-600',
                    number: 'bg-primary-600'
                };
            case 'navy':
                return {
                    bg: 'bg-navy-100',
                    icon: 'text-navy-600',
                    number: 'bg-navy-600'
                };
            case 'accent':
                return {
                    bg: 'bg-accent-100',
                    icon: 'text-accent-600',
                    number: 'bg-accent-600'
                };
            default:
                return {
                    bg: 'bg-primary-100',
                    icon: 'text-primary-600',
                    number: 'bg-primary-600'
                };
        }
    };

    return (
        <section id='journey' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Your <span className='text-primary-600'>Journey</span> to a Perfect Smile
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        From first consultation to flying home - we guide you every step of the way
                    </p>
                </div>

                {/* Timeline */}
                <div className='relative'>
                    {/* Connection Line - Hidden on mobile, visible on desktop */}
                    <div className='absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-200 via-navy-200 to-accent-200 lg:block' />

                    <div className='space-y-12'>
                        {steps.map((step, index) => {
                            const colors = getColorClasses(step.color);
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className='relative'>
                                    {/* Mobile & Tablet Layout */}
                                    <div className='lg:hidden'>
                                        <div className='flex gap-6'>
                                            {/* Left: Number & Icon */}
                                            <div className='flex flex-col items-center'>
                                                <div
                                                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${colors.number} text-lg font-bold text-white shadow-lg`}
                                                >
                                                    {step.number}
                                                </div>
                                                {index < steps.length - 1 && (
                                                    <div className='mt-4 h-full w-0.5 bg-gray-200' />
                                                )}
                                            </div>

                                            {/* Right: Content */}
                                            <div className='flex-1 pb-8'>
                                                <div
                                                    className={`rounded-2xl ${colors.bg} p-6 shadow-md transition-all hover:shadow-lg`}
                                                >
                                                    <div className='mb-4 flex items-center gap-4'>
                                                        <div className='rounded-xl bg-white p-3 shadow-sm'>
                                                            <step.icon className={`h-6 w-6 ${colors.icon}`} />
                                                        </div>
                                                        <h3 className='text-xl font-bold text-gray-900'>
                                                            {step.title}
                                                        </h3>
                                                    </div>
                                                    <p className='text-gray-700'>{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Layout */}
                                    <div className='hidden lg:block'>
                                        <div className='grid grid-cols-2 gap-8'>
                                            {/* Left Side */}
                                            <div
                                                className={`${isEven ? 'block' : 'invisible'} ${isEven ? 'text-right' : ''}`}
                                            >
                                                {isEven && (
                                                    <div
                                                        className={`rounded-2xl ${colors.bg} p-8 shadow-md transition-all hover:shadow-lg`}
                                                    >
                                                        <div className='mb-4 flex items-center justify-end gap-4'>
                                                            <h3 className='text-2xl font-bold text-gray-900'>
                                                                {step.title}
                                                            </h3>
                                                            <div className='rounded-xl bg-white p-3 shadow-sm'>
                                                                <step.icon className={`h-7 w-7 ${colors.icon}`} />
                                                            </div>
                                                        </div>
                                                        <p className='text-gray-700'>{step.description}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Center Number */}
                                            <div className='absolute left-1/2 -translate-x-1/2'>
                                                <div
                                                    className={`flex h-16 w-16 items-center justify-center rounded-full ${colors.number} text-2xl font-bold text-white shadow-xl ring-4 ring-white`}
                                                >
                                                    {step.number}
                                                </div>
                                            </div>

                                            {/* Right Side */}
                                            <div className={`${!isEven ? 'block' : 'invisible'}`}>
                                                {!isEven && (
                                                    <div
                                                        className={`rounded-2xl ${colors.bg} p-8 shadow-md transition-all hover:shadow-lg`}
                                                    >
                                                        <div className='mb-4 flex items-center gap-4'>
                                                            <div className='rounded-xl bg-white p-3 shadow-sm'>
                                                                <step.icon className={`h-7 w-7 ${colors.icon}`} />
                                                            </div>
                                                            <h3 className='text-2xl font-bold text-gray-900'>
                                                                {step.title}
                                                            </h3>
                                                        </div>
                                                        <p className='text-gray-700'>{step.description}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className='mt-16 text-center'>
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl'
                    >
                        Start Your Journey Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Journey;
