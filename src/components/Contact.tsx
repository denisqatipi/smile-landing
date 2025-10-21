'use client';

import { Check, Mail, MessageSquare, Phone, Upload } from 'lucide-react';
import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    country: string;
    treatment: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        country: '',
        treatment: '',
        message: ''
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitted, setSubmitted] = useState(false);
    const [fileName, setFileName] = useState('');

    const countries = [
        'Regno Unito',
        'Germania',
        'Italia',
        'Francia',
        'Paesi Bassi',
        'Belgio',
        'Austria',
        'Svizzera',
        'Irlanda',
        'Spagna',
        'Altro'
    ];

    const treatments = [
        'Impianti Dentali',
        'Faccette in Porcellana',
        'Sbiancamento Dentale',
        'Corone e Ponti',
        'Riabilitazione Completa del Cavo Orale',
        'Ortodonzia',
        'Consulenza Generale',
        'Altro'
    ];

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) newErrors.name = 'Il nome è obbligatorio';
        if (!formData.email.trim()) {
            newErrors.email = "L'email è obbligatoria";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Formato email non valido';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Il numero di telefono è obbligatorio';
        if (!formData.country) newErrors.country = 'Seleziona il tuo paese';
        if (!formData.treatment) newErrors.treatment = 'Seleziona un trattamento';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission (no backend)
            console.log('Form submitted:', formData);
            setSubmitted(true);

            // Reset form after 5 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    treatment: '',
                    message: ''
                });
                setFileName('');
                setSubmitted(false);
            }, 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    if (submitted) {
        return (
            <section id='contact' className='bg-white py-20'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100 p-12 text-center'>
                        <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-600'>
                            <Check className='h-10 w-10 text-white' />
                        </div>
                        <h3 className='mb-4 text-3xl font-bold text-gray-900'>Grazie!</h3>
                        <p className='mb-6 text-lg text-gray-700'>
                            Abbiamo ricevuto la tua richiesta e ti risponderemo entro 24 ore.
                        </p>
                        <div className='rounded-xl bg-white p-6 shadow-sm'>
                            <h4 className='mb-3 font-semibold text-gray-900'>Cosa succede dopo?</h4>
                            <ul className='space-y-2 text-left text-sm text-gray-600'>
                                <li className='flex items-start'>
                                    <Check className='mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600' />
                                    Il nostro coordinatore dentale esaminerà il tuo caso
                                </li>
                                <li className='flex items-start'>
                                    <Check className='mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600' />
                                    Riceverai un piano di trattamento personalizzato
                                </li>
                                <li className='flex items-start'>
                                    <Check className='mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600' />
                                    Programma una videoconferenza gratuita con il tuo dentista
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id='contact' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Richiedi il Tuo <span className='text-primary-600'>Preventivo Gratuito</span>
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Compila il modulo qui sotto e ricevi un piano di trattamento personalizzato entro 24 ore
                    </p>
                </div>

                <div className='grid gap-12 lg:grid-cols-3'>
                    {/* Contact Form */}
                    <div className='lg:col-span-2'>
                        <form onSubmit={handleSubmit} className='rounded-3xl bg-gray-50 p-8 md:p-10'>
                            <div className='grid gap-6 md:grid-cols-2'>
                                {/* Name */}
                                <div>
                                    <label htmlFor='name' className='mb-2 block text-sm font-semibold text-gray-900'>
                                        Nome Completo *
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
                                        placeholder='John Smith'
                                    />
                                    {errors.name && <p className='mt-1 text-sm text-red-600'>{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor='email' className='mb-2 block text-sm font-semibold text-gray-900'>
                                        Indirizzo Email *
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
                                        placeholder='john@example.com'
                                    />
                                    {errors.email && <p className='mt-1 text-sm text-red-600'>{errors.email}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor='phone' className='mb-2 block text-sm font-semibold text-gray-900'>
                                        Telefono / WhatsApp *
                                    </label>
                                    <input
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
                                        placeholder='+44 7700 900000'
                                    />
                                    {errors.phone && <p className='mt-1 text-sm text-red-600'>{errors.phone}</p>}
                                </div>

                                {/* Country */}
                                <div>
                                    <label htmlFor='country' className='mb-2 block text-sm font-semibold text-gray-900'>
                                        Paese *
                                    </label>
                                    <select
                                        id='country'
                                        name='country'
                                        value={formData.country}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg border ${errors.country ? 'border-red-500' : 'border-gray-300'} bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
                                    >
                                        <option value=''>Seleziona il tuo paese</option>
                                        {countries.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.country && <p className='mt-1 text-sm text-red-600'>{errors.country}</p>}
                                </div>

                                {/* Treatment */}
                                <div className='md:col-span-2'>
                                    <label
                                        htmlFor='treatment'
                                        className='mb-2 block text-sm font-semibold text-gray-900'
                                    >
                                        Trattamento di Interesse *
                                    </label>
                                    <select
                                        id='treatment'
                                        name='treatment'
                                        value={formData.treatment}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg border ${errors.treatment ? 'border-red-500' : 'border-gray-300'} bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
                                    >
                                        <option value=''>Seleziona un trattamento</option>
                                        {treatments.map((treatment) => (
                                            <option key={treatment} value={treatment}>
                                                {treatment}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.treatment && <p className='mt-1 text-sm text-red-600'>{errors.treatment}</p>}
                                </div>

                                {/* Message */}
                                <div className='md:col-span-2'>
                                    <label htmlFor='message' className='mb-2 block text-sm font-semibold text-gray-900'>
                                        Raccontaci le tue esigenze dentali
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                        placeholder='Descrivi le tue preoccupazioni dentali, eventuali dolori o obiettivi specifici che hai...'
                                    />
                                </div>

                                {/* File Upload */}
                                <div className='md:col-span-2'>
                                    <label className='mb-2 block text-sm font-semibold text-gray-900'>
                                        Carica Radiografie (opzionale)
                                    </label>
                                    <label
                                        htmlFor='file-upload'
                                        className='flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white px-6 py-4 transition-colors hover:border-primary-500 hover:bg-primary-50'
                                    >
                                        <Upload className='mr-3 h-6 w-6 text-gray-400' />
                                        <span className='text-sm text-gray-600'>
                                            {fileName || 'Clicca per caricare o trascina qui'}
                                        </span>
                                        <input
                                            id='file-upload'
                                            type='file'
                                            className='hidden'
                                            accept='image/*,.pdf'
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                    <p className='mt-2 text-xs text-gray-500'>
                                        Formati supportati: JPG, PNG, PDF (Max 10MB)
                                    </p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                className='mt-8 w-full rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl'
                            >
                                Richiedi il Mio Preventivo Gratuito
                            </button>
                            <p className='mt-4 text-center text-sm text-gray-500'>
                                Rispettiamo la tua privacy. Le tue informazioni sono sicure e non saranno mai condivise.
                            </p>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-6'>
                        <div className='rounded-2xl bg-gradient-to-br from-primary-600 to-primary-500 p-8 text-white shadow-lg'>
                            <h3 className='mb-6 text-2xl font-bold'>Informazioni di Contatto</h3>

                            <div className='space-y-6'>
                                <a
                                    href='https://wa.me/355698082222'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-start transition-transform hover:translate-x-1'
                                >
                                    <MessageSquare className='mr-4 mt-1 h-6 w-6 flex-shrink-0' />
                                    <div>
                                        <p className='mb-1 text-sm font-medium text-primary-100'>WhatsApp</p>
                                        <p className='font-semibold'>+355 69 808 2222</p>
                                        <p className='text-sm text-primary-100'>Clicca per chattare ora</p>
                                    </div>
                                </a>

                                <a
                                    href='tel:+355698082222'
                                    className='flex items-start transition-transform hover:translate-x-1'
                                >
                                    <Phone className='mr-4 mt-1 h-6 w-6 flex-shrink-0' />
                                    <div>
                                        <p className='mb-1 text-sm font-medium text-primary-100'>Telefono</p>
                                        <p className='font-semibold'>+355 69 808 2222</p>
                                        <p className='text-sm text-primary-100'>Lun-Ven: 9:00-18:00 CET</p>
                                    </div>
                                </a>

                                <a
                                    href='mailto:infosmileprovider@gmail.com'
                                    className='flex items-start transition-transform hover:translate-x-1'
                                >
                                    <Mail className='mr-4 mt-1 h-6 w-6 flex-shrink-0' />
                                    <div>
                                        <p className='mb-1 text-sm font-medium text-primary-100'>Email</p>
                                        <p className='font-semibold'>infosmileprovider@gmail.com</p>
                                        <p className='text-sm text-primary-100'>Risposta entro 24 ore</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className='rounded-2xl bg-accent-50 p-8'>
                            <h4 className='mb-4 text-lg font-bold text-gray-900'>Perché Richiedere un Preventivo Gratuito?</h4>
                            <ul className='space-y-3 text-sm text-gray-700'>
                                <li className='flex items-start'>
                                    <Check className='mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600' />
                                    Piano di trattamento personalizzato su misura per te
                                </li>
                                <li className='flex items-start'>
                                    <Check className='mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600' />
                                    Prezzi trasparenti senza costi nascosti
                                </li>
                                <li className='flex items-start'>
                                    <Check className='mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600' />
                                    Confronta i costi e scopri quanto risparmi
                                </li>
                                <li className='flex items-start'>
                                    <Check className='mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600' />
                                    Nessun obbligo - solo consigli onesti
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
