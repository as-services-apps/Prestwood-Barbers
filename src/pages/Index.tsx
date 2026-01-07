import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Prestwood Barbers | Premium Barbershop in Wolverhampton';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience premium barbering at Prestwood Barbers in Wolverhampton. Expert haircuts, hot towel shaves, and beard grooming. 5-star rated. Call +44 7863 611042.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experience premium barbering at Prestwood Barbers in Wolverhampton. Expert haircuts, hot towel shaves, and beard grooming. 5-star rated. Call +44 7863 611042.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
