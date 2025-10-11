'use client';

import { Building2, Castle, Hotel, MapPin, Palmtree, Sunrise } from 'lucide-react';

const Destination = () => {
    const destinations = [
        {
            icon: Building2,
            name: 'Tirana',
            description: 'Vibrant capital with colorful buildings, cafes, and nightlife',
            highlight: 'Blloku District & Skanderbeg Square'
        },
        {
            icon: Palmtree,
            name: 'Durrës Beaches',
            description: 'Pristine sandy beaches just 30 minutes from the clinic',
            highlight: 'Perfect for post-treatment relaxation'
        },
        {
            icon: Sunrise,
            name: 'Saranda & Blue Eye',
            description: 'Crystal-clear waters and the stunning natural Blue Eye spring',
            highlight: 'Albanian Riviera at its finest'
        },
        {
            icon: Castle,
            name: 'Berat UNESCO Site',
            description: 'Ancient "City of a Thousand Windows" - Ottoman architecture',
            highlight: 'Historic charm & mountain views'
        },
        {
            icon: MapPin,
            name: 'Kruja Castle',
            description: 'Medieval fortress with panoramic views and traditional bazaar',
            highlight: 'Rich Albanian history & culture'
        },
        {
            icon: Hotel,
            name: 'Albanian Alps',
            description: 'Breathtaking mountain scenery for adventure seekers',
            highlight: 'Theth & Valbona valleys'
        }
    ];

    const itineraries = [
        {
            days: '3-4 Days',
            title: 'Quick Treatment Visit',
            activities: ['Day 1: Arrival & consultation', 'Day 2-3: Treatment sessions', 'Day 4: Final check & departure']
        },
        {
            days: '7 Days',
            title: 'Treatment + Beach Escape',
            activities: [
                'Day 1-3: Dental treatment',
                'Day 4-5: Relax in Durrës',
                'Day 6: Explore Tirana',
                'Day 7: Departure'
            ]
        },
        {
            days: '10-14 Days',
            title: 'Complete Albania Experience',
            activities: [
                'Week 1: Treatment + Tirana',
                'Day 8-10: Albanian Riviera',
                'Day 11-12: UNESCO sites',
                'Day 13-14: Final check & departure'
            ]
        }
    ];

    return (
        <section id='destination' className='bg-white py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <div className='mb-4 inline-flex items-center rounded-full bg-accent-100 px-4 py-2 text-sm font-semibold text-accent-700'>
                        <Palmtree className='mr-2 h-4 w-4' />
                        Combine Treatment with Mediterranean Holiday
                    </div>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                        Enjoy <span className='text-primary-600'>Albania</span> While You Heal
                    </h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Discover pristine beaches, ancient history, and stunning landscapes - all within easy reach of
                        our clinic
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className='mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className='group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all hover:border-primary-300 hover:shadow-xl'
                        >
                            {/* Image Placeholder */}
                            <div className='relative aspect-[16/10] bg-gradient-to-br from-primary-200 via-primary-300 to-accent-200'>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <dest.icon className='h-16 w-16 text-white/60' />
                                </div>
                                <div className='absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1.5 backdrop-blur-sm'>
                                    <MapPin className='inline h-4 w-4 text-primary-600' />
                                    <span className='ml-1 text-sm font-semibold text-gray-900'>{dest.name}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='p-6'>
                                <p className='mb-3 text-gray-700'>{dest.description}</p>
                                <div className='flex items-center text-sm font-medium text-primary-600'>
                                    <Sparkles className='mr-2 h-4 w-4' />
                                    {dest.highlight}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Suggested Itineraries */}
                <div className='rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12'>
                    <div className='mb-10 text-center'>
                        <h3 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>Suggested Itineraries</h3>
                        <p className='text-lg text-gray-600'>Flexible plans to match your treatment timeline</p>
                    </div>

                    <div className='grid gap-8 md:grid-cols-3'>
                        {itineraries.map((itinerary, index) => (
                            <div
                                key={index}
                                className='rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-lg'
                            >
                                <div className='mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700'>
                                    {itinerary.days}
                                </div>
                                <h4 className='mb-6 text-xl font-bold text-gray-900'>{itinerary.title}</h4>
                                <ul className='space-y-3'>
                                    {itinerary.activities.map((activity, actIndex) => (
                                        <li key={actIndex} className='flex items-start text-sm text-gray-700'>
                                            <span className='mr-3 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-600'>
                                                {actIndex + 1}
                                            </span>
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Accommodation & Services */}
                <div className='mt-16 rounded-3xl bg-gradient-to-r from-navy-600 to-navy-500 p-8 md:p-12'>
                    <div className='grid gap-8 lg:grid-cols-2 lg:items-center'>
                        <div>
                            <h3 className='mb-4 text-2xl font-bold text-white sm:text-3xl'>
                                We Take Care of Everything
                            </h3>
                            <ul className='space-y-4 text-navy-100'>
                                <li className='flex items-start'>
                                    <Hotel className='mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-300' />
                                    <div>
                                        <p className='font-semibold text-white'>Partner Hotels</p>
                                        <p className='text-sm'>
                                            Special rates at comfortable hotels near the clinic (€40-80/night)
                                        </p>
                                    </div>
                                </li>
                                <li className='flex items-start'>
                                    <MapPin className='mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-300' />
                                    <div>
                                        <p className='font-semibold text-white'>Airport Transfers</p>
                                        <p className='text-sm'>
                                            Complimentary pickup from Tirana Airport and transport to appointments
                                        </p>
                                    </div>
                                </li>
                                <li className='flex items-start'>
                                    <Palmtree className='mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-300' />
                                    <div>
                                        <p className='font-semibold text-white'>Local Guides</p>
                                        <p className='text-sm'>
                                            Recommendations for restaurants, tours, and activities during your stay
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='rounded-2xl bg-white/10 p-8 backdrop-blur-sm'>
                            <p className='mb-6 text-lg text-white'>
                                "Albania exceeded all our expectations. The beaches were stunning, the food was
                                delicious, and the people were incredibly welcoming. It truly felt like a dental
                                vacation!"
                            </p>
                            <div className='flex items-center gap-4'>
                                <div className='h-12 w-12 rounded-full bg-primary-300' />
                                <div>
                                    <p className='font-semibold text-white'>Sophie & Mark</p>
                                    <p className='text-sm text-navy-200'>Netherlands • 10-day visit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Import missing icon
import { Sparkles } from 'lucide-react';

export default Destination;
