'use client';

import { ChevronDown, HelpCircle, Shield, Clock, Euro, Plane, HeadphonesIcon } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            category: 'Safety',
            icon: Shield,
            question: 'Is dental treatment in Albania safe?',
            answer: 'Absolutely. Our clinic meets all European Union standards for dental care. We use EU-certified materials, follow strict sterilization protocols (EN 13060 Class B), and our dentists are internationally trained with years of experience treating patients from Western Europe. We maintain the same standards you would expect in the UK, Germany, or Italy.'
        },
        {
            category: 'Cost',
            icon: Euro,
            question: 'Why are treatments so much cheaper in Albania?',
            answer: 'The lower cost of living in Albania allows us to offer the same quality materials and expertise at 50-70% lower prices. Our dentists use the same premium European materials (German implants, Italian ceramics) as Western clinics, but our overhead costs - rent, staff salaries, operational expenses - are significantly lower. You benefit from these savings without any compromise on quality.'
        },
        {
            category: 'Duration',
            icon: Clock,
            question: 'How long do I need to stay in Albania?',
            answer: 'Treatment duration varies by procedure: Simple treatments like veneers or crowns: 5-7 days, Dental implants: 3-6 months total (split into 2 short visits), Full mouth restoration: 7-14 days, Teeth whitening: 1 day. We optimize your treatment schedule to minimize your time away from home while ensuring proper healing and quality results.'
        },
        {
            category: 'Warranty',
            icon: Shield,
            question: 'What about warranties and follow-up care?',
            answer: 'All our work comes with comprehensive warranties: Dental implants: 10-year warranty, Veneers and crowns: 5-year warranty, Orthodontics: Treatment completion guarantee. We provide 24/7 support after you return home. For any issues, we offer free consultations and if needed, we can arrange follow-up treatment. We also partner with dentists in major European cities for emergency support.'
        },
        {
            category: 'Travel',
            icon: Plane,
            question: 'Do you help with travel arrangements?',
            answer: 'Yes! We provide comprehensive travel support: Free airport pickup from Tirana International Airport, Partner hotel recommendations with special rates (€40-80/night), Treatment schedule coordination with your travel plans, Local recommendations for restaurants and activities, Assistance with appointment scheduling to maximize your free time. Our team will guide you through every step of the process.'
        },
        {
            category: 'Support',
            icon: HeadphonesIcon,
            question: 'What if I need help after returning home?',
            answer: 'We provide comprehensive aftercare support: 24/7 WhatsApp support line with our dentists, Detailed aftercare instructions in your language, Video consultations if you have concerns, Emergency partner network in major European cities, Free follow-up digital consultations. Most patients have zero issues, but we are always available if you need us.'
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className='bg-gray-50 py-20'>
            <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <div className='mb-4 inline-flex items-center justify-center rounded-full bg-primary-100 p-4'>
                        <HelpCircle className='h-8 w-8 text-primary-600' />
                    </div>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Frequently Asked <span className='text-primary-600'>Questions</span>
                    </h2>
                    <p className='text-lg text-gray-600'>Everything you need to know about dental tourism in Albania</p>
                </div>

                {/* FAQ Accordion */}
                <div className='space-y-4'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-primary-300 hover:shadow-md'
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className='flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50'
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <div className='flex items-start gap-4 pr-4'>
                                    <div className='mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100'>
                                        <faq.icon className='h-5 w-5 text-primary-600' />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='mb-1 text-xs font-semibold uppercase tracking-wide text-primary-600'>
                                            {faq.category}
                                        </div>
                                        <h3 className='text-lg font-bold text-gray-900'>{faq.question}</h3>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`h-6 w-6 flex-shrink-0 text-gray-400 transition-transform ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className='border-t border-gray-200 bg-gray-50 px-6 py-6'>
                                    <p className='pl-14 text-gray-700'>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <div className='mt-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 p-8 text-center md:p-10'>
                    <h3 className='mb-3 text-2xl font-bold text-white'>Still have questions?</h3>
                    <p className='mb-6 text-primary-100'>
                        Our team is here to help. Get in touch for a free consultation.
                    </p>
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary-600 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl'
                    >
                        Contact Us Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
