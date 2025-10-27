'use client';

import { Award, Shield } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        { name: 'ISO 9001:2015', description: 'Gestione della Qualità' },
        { name: 'European Dental Association', description: 'Membro dal 2018' },
        { name: 'CE Certified', description: 'Materiali e Attrezzature' },
        { name: 'Standard di Sterilizzazione', description: 'EN 13060 Class B' }
    ];

    return (
        <section id='certifications' className='bg-gray-50 py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Certifications & Standards */}
                <div className='rounded-3xl bg-white p-8 shadow-lg md:p-12'>
                    <div className='mb-10 text-center'>
                        <h3 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>
                            Eccellenza e Sicurezza Certificate
                        </h3>
                        <p className='text-lg text-gray-600'>
                            La tua sicurezza e soddisfazione sono le nostre massime priorità
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
                        <h4 className='mb-2 text-xl font-bold'>Sterilizzazione di Livello Medico</h4>
                        <p className='text-primary-100'>
                            Tutti gli strumenti subiscono la sterilizzazione in autoclave di Classe B secondo gli standard
                            europei. Monouso per la massima sicurezza.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
