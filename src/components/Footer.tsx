'use client';

import { Facebook, Instagram, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: "Perché l'Albania", href: '#why-albania' },
        { label: 'La Nostra Clinica', href: '#clinic' },
        { label: 'Incontra i Nostri Dottori', href: '#doctors' },
        { label: 'Trattamenti', href: '#treatments' },
        { label: 'Percorso del Paziente', href: '#journey' },
        { label: 'Galleria', href: '#gallery' },
        { label: 'Destinazione', href: '#destination' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contatti', href: '#contact' }
    ];

    const treatments = [
        'Impianti Dentali',
        'Faccette in Porcellana',
        'Sbiancamento Dentale',
        'Corone e Ponti',
        'Riabilitazione Completa del Cavo Orale',
        'Ortodonzia'
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
                                Smile<span className='text-primary-400'>Provider</span>
                            </h3>
                        </div>
                        <p className='mb-6 text-sm text-navy-200'>
                            Cure dentali premium nel cuore dell'Albania. Trasforma il tuo sorriso a metà prezzo con
                            standard europei.
                        </p>

                        {/* Address */}
                        <div className='mb-4 flex items-start'>
                            <MapPin className='mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-400' />
                            <div className='text-sm text-navy-200'>
                                <p>Rruga Martin Camaj 113</p>
                                <p>Tirane, Albania</p>
                            </div>
                        </div>

                        {/* Google Maps Link */}
                        <a
                            href='https://maps.google.com/?q=Rruga+Martin+Camaj+113+Tirane'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block text-sm font-medium text-primary-400 hover:text-primary-300'
                        >
                            Visualizza su Google Maps →
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='mb-6 text-lg font-bold'>Link Rapidi</h4>
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
                        <h4 className='mb-6 text-lg font-bold'>Trattamenti</h4>
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
                        <h4 className='mb-6 text-lg font-bold'>Mettiti in Contatto</h4>
                        <div className='space-y-4'>
                            <a
                                href='tel:+355698082222'
                                className='flex items-center text-sm text-navy-200 transition-colors hover:text-primary-400'
                            >
                                <Phone className='mr-3 h-5 w-5 text-primary-400' />
                                +355 69 808 2222
                            </a>

                            <a
                                href='https://wa.me/355698082222'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center text-sm text-navy-200 transition-colors hover:text-primary-400'
                            >
                                <MessageSquare className='mr-3 h-5 w-5 text-primary-400' />
                                Chat WhatsApp
                            </a>

                            <a
                                href='mailto:infosmileprovider@gmail.com'
                                className='flex items-center text-sm text-navy-200 transition-colors hover:text-primary-400'
                            >
                                <Mail className='mr-3 h-5 w-5 text-primary-400' />
                                infosmileprovider@gmail.com
                            </a>
                        </div>

                        {/* Social Media */}
                        <div className='mt-8'>
                            <h5 className='mb-4 text-sm font-semibold'>Seguici</h5>
                            <div className='flex gap-4'>
                                <a
                                    href='https://www.facebook.com/smileproviderdentistiinalbania/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 transition-colors hover:bg-primary-600'
                                    aria-label='Facebook'
                                >
                                    <Facebook className='h-5 w-5' />
                                </a>
                                <a
                                    href='https://www.instagram.com/smile_provider_dental_clinic/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 transition-colors hover:bg-primary-600'
                                    aria-label='Instagram'
                                >
                                    <Instagram className='h-5 w-5' />
                                </a>
                                <a
                                    href='https://wa.me/355698082222'
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
                            © {currentYear} SmileProvider. Tutti i diritti riservati.
                        </p>
                        <div className='flex gap-6 text-sm'>
                            <a href='#' className='text-navy-300 transition-colors hover:text-primary-400'>
                                Informativa sulla Privacy
                            </a>
                            <a href='#' className='text-navy-300 transition-colors hover:text-primary-400'>
                                Termini di Servizio
                            </a>
                            <a href='#' className='text-navy-300 transition-colors hover:text-primary-400'>
                                Politica sui Cookie
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
