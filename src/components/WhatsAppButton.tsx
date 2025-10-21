'use client';

import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = '355698082222';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-2xl md:h-16 md:w-16'
            aria-label='Contact us on WhatsApp'
        >
            <MessageCircle className='h-7 w-7 md:h-8 md:w-8' />
        </a>
    );
};

export default WhatsAppButton;
