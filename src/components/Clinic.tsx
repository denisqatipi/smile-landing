'use client';

import { Camera, MapPin, Microscope, Scan, Shield } from 'lucide-react';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Clinic = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const technologies = [
        { icon: Scan, name: 'Scansione TC 3D', description: 'Diagnosi e pianificazione precise' },
        { icon: Camera, name: 'Camera Intraorale', description: 'Visualizzazione in tempo reale' },
        { icon: Microscope, name: 'Design Digitale del Sorriso', description: 'Anteprima del tuo nuovo sorriso' },
        { icon: Shield, name: 'Sistema CAD/CAM', description: 'Restauri in giornata' }
    ];

    const galleryImages = [
        { title: 'Area di Accoglienza Moderna', description: 'Accogliente e confortevole', image: '/images/clinic/clinic-1.jpg' },
        { title: 'Sala Trattamenti', description: 'Attrezzature all\'avanguardia', image: '/images/clinic/clinic-2.jpg' },
        { title: 'Sala di Sterilizzazione', description: 'Pulizia di livello medico', image: '/images/clinic/clinic-3.jpg' },
        { title: 'Sala di Recupero', description: 'Rilassati dopo il trattamento', image: '/images/clinic/clinic-4.jpg' },
        { title: 'Struttura Moderna', description: 'Ambiente professionale', image: '/images/clinic/clinic-5.jpg' },
        { title: 'Tecnologia Avanzata', description: 'Attrezzature di ultima generazione', image: '/images/clinic/clinic-6.jpg' }
    ];

    return (
        <section id='clinic' className='bg-gray-50 py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <div className='mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700'>
                        <MapPin className='mr-2 h-4 w-4' />
                        Situata nel cuore di Tirana
                    </div>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        La Nostra <span className='text-primary-600'>Clinica</span> Moderna
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Vivi cure dentali di livello mondiale in una struttura all'avanguardia progettata per il tuo comfort
                    </p>
                </div>

                {/* Clinic Gallery */}
                <div className='mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className='group relative cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl'
                            onClick={() => {
                                setLightboxIndex(index);
                                setLightboxOpen(true);
                            }}
                        >
                            <div className='aspect-[4/3] overflow-hidden'>
                                <img
                                    src={image.image}
                                    alt={image.title}
                                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                                />
                            </div>
                            <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6'>
                                <div>
                                    <h3 className='mb-1 text-lg font-semibold text-white'>{image.title}</h3>
                                    <p className='text-sm text-gray-200'>{image.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    index={lightboxIndex}
                    slides={galleryImages.map((img) => ({ src: img.image, alt: img.title }))}
                />

                {/* Technology Highlights */}
                <div className='rounded-3xl bg-gradient-to-br from-navy-50 to-primary-50 p-8 md:p-12'>
                    <div className='mb-10 text-center'>
                        <h3 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>
                            Tecnologia Dentale Avanzata
                        </h3>
                        <p className='text-lg text-gray-600'>
                            Attrezzature all'avanguardia per trattamenti precisi e confortevoli
                        </p>
                    </div>

                    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                        {technologies.map((tech, index) => (
                            <div key={index} className='flex flex-col items-center text-center'>
                                <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md'>
                                    <tech.icon className='h-8 w-8 text-navy-600' />
                                </div>
                                <h4 className='mb-2 text-lg font-semibold text-gray-900'>{tech.name}</h4>
                                <p className='text-sm text-gray-600'>{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clinic;
