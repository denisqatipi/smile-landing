'use client';

import { Facebook, Instagram, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Why Albania', href: '#why-albania' },
        { label: 'Our Clinic', href: '#clinic' },
        { label: 'Meet Our Doctors', href: '#doctors' },
        { label: 'Treatments', href: '#treatments' },
        { label: 'Patient Journey', href: '#journey' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Destination', href: '#destination' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' }
    ];

    const treatments = [
        'Dental Implants',
        'Porcelain Veneers',
        'Teeth Whitening',
        'Crowns & Bridges',
        'Full Mouth Restoration',
        'Orthodontics'
    ];

    const handleScroll = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className='bg-gradient-to-br from-navy-900 to-navy-800 text-white'>
            <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
                    {/* Clinic Info */}
                    <div>
                        <div className='mb-6'>
                            <h3 className='text-2xl font-bold'>
                                Smile<span className='text-primary-400'>Dental</span>
                            </h3>
                            <p className='text-sm text-navy-300'>Albania</p>
                        </div>
                        <p className='mb-6 text-sm text-navy-200'>
                            Premium dental care in the heart of Albania. Transform your smile at half the price with
                            European standards.
                        </p>

                        {/* Address */}
                        <div className='mb-4 flex items-start'>
                            <MapPin className='mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-400' />
                            <div className='text-sm text-navy-200'>
                                <p>Rruga e Durresit</p>
                                <p>Tirana 1001, Albania</p>
                            </div>
                        </div>

                        {/* Google Maps Link */}
                        <a
                            href='https://maps.google.com/?q=Tirana+Albania'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block text-sm font-medium text-primary-400 hover:text-primary-300'
                        >
                            View on Google Maps →
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='mb-6 text-lg font-bold'>Quick Links</h4>
                        <ul className='space-y-3'>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleScroll(link.href);
                                        }}
                                        className='text-sm text-navy-200 transition-colors hover:text-primary-400'
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div>
                        <h4 className='mb-6 text-lg font-bold'>Treatments</h4>
                        <ul className='space-y-3'>
                            {treatments.map((treatment) => (
                                <li key={treatment}>
                                    <a
                                        href='#treatments'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleScroll('#treatments');
                                        }}
                                        className='text-sm text-navy-200 transition-colors hover:text-primary-400'
                                    >
                                        {treatment}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className='mb-6 text-lg font-bold'>Get in Touch</h4>
                        <div className='space-y-4'>
                            <a
                                href='tel:+355691234567'
                                className='flex items-center text-sm text-navy-200 transition-colors hover:text-primary-400'
                            >
                                <Phone className='mr-3 h-5 w-5 text-primary-400' />
                                +355 69 123 4567
                            </a>

                            <a
                                href='https://wa.me/355691234567'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center text-sm text-navy-200 transition-colors hover:text-primary-400'
                            >
                                <MessageSquare className='mr-3 h-5 w-5 text-primary-400' />
                                WhatsApp Chat
                            </a>

                            <a
                                href='mailto:info@smiledentalalba.com'
                                className='flex items-center text-sm text-navy-200 transition-colors hover:text-primary-400'
                            >
                                <Mail className='mr-3 h-5 w-5 text-primary-400' />
                                info@smiledentalalba.com
                            </a>
                        </div>

                        {/* Social Media */}
                        <div className='mt-8'>
                            <h5 className='mb-4 text-sm font-semibold'>Follow Us</h5>
                            <div className='flex gap-4'>
                                <a
                                    href='https://facebook.com/smiledentalalba'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 transition-colors hover:bg-primary-600'
                                    aria-label='Facebook'
                                >
                                    <Facebook className='h-5 w-5' />
                                </a>
                                <a
                                    href='https://instagram.com/smiledentalalba'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 transition-colors hover:bg-primary-600'
                                    aria-label='Instagram'
                                >
                                    <Instagram className='h-5 w-5' />
                                </a>
                                <a
                                    href='https://wa.me/355691234567'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 transition-colors hover:bg-primary-600'
                                    aria-label='WhatsApp'
                                >
                                    <MessageSquare className='h-5 w-5' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='mt-16 border-t border-navy-700 pt-8'>
                    <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                        <p className='text-sm text-navy-300'>
                            © {currentYear} Smile Dental Albania. All rights reserved.
                        </p>
                        <div className='flex gap-6 text-sm'>
                            <a href='#' className='text-navy-300 transition-colors hover:text-primary-400'>
                                Privacy Policy
                            </a>
                            <a href='#' className='text-navy-300 transition-colors hover:text-primary-400'>
                                Terms of Service
                            </a>
                            <a href='#' className='text-navy-300 transition-colors hover:text-primary-400'>
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
