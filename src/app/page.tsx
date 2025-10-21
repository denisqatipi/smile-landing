import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyAlbania from '@/components/WhyAlbania';
import Clinic from '@/components/Clinic';
import Doctors from '@/components/Doctors';
import Treatments from '@/components/Treatments';
import Journey from '@/components/Journey';
import Gallery from '@/components/Gallery';
import Destination from '@/components/Destination';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Main landing page for SmileProvider - Dental Tourism
 *
 * @returns {JSX.Element} The complete dental tourism landing page
 */
const Page = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <WhyAlbania />
                <Clinic />
                <Doctors />
                <Treatments />
                <Journey />
                <Gallery />
                <Destination />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Page;
