'use client';

import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Why Albania', href: '#why-albania' },
        { label: 'Clinic', href: '#clinic' },
        { label: 'Doctors', href: '#doctors' },
        { label: 'Treatments', href: '#treatments' },
        { label: 'Journey', href: '#journey' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Destination', href: '#destination' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='sticky top-0 z-50 bg-white shadow-md'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <a href='#home' className='text-2xl font-bold text-primary-600'>
                            Smile<span className='text-accent-500'>Dental</span>
                            <span className='ml-1 text-base text-navy-600'>Albania</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden lg:flex lg:items-center lg:space-x-6'>
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className='text-sm font-medium text-gray-700 transition-colors hover:text-primary-600'
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Contact Info & CTA */}
                    <div className='hidden items-center space-x-4 lg:flex'>
                        <a
                            href='tel:+355691234567'
                            className='flex items-center space-x-2 text-sm font-medium text-navy-600 hover:text-navy-700'
                        >
                            <Phone className='h-4 w-4' />
                            <span>+355 69 123 4567</span>
                        </a>
                        <a
                            href='#contact'
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#contact');
                            }}
                            className='rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md'
                        >
                            Get Free Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden'
                        aria-label='Toggle menu'
                    >
                        {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='border-t border-gray-200 py-4 lg:hidden'>
                        <nav className='flex flex-col space-y-4'>
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className='text-base font-medium text-gray-700 hover:text-primary-600'
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href='tel:+355691234567'
                                className='flex items-center space-x-2 text-base font-medium text-navy-600'
                            >
                                <Phone className='h-5 w-5' />
                                <span>+355 69 123 4567</span>
                            </a>
                            <a
                                href='#contact'
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('#contact');
                                }}
                                className='rounded-lg bg-primary-600 px-6 py-3 text-center text-base font-semibold text-white'
                            >
                                Get Free Quote
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
