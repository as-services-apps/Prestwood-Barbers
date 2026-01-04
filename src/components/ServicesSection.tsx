import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Clock } from 'lucide-react';
import haircutImage from '@/assets/haircut-service.jpg';
import shaveImage from '@/assets/shave-service.jpg';
import beardImage from '@/assets/beard-service.jpg';

const services = [
  {
    name: 'Classic Haircut',
    description: 'Precision cutting tailored to your style and face shape. Includes consultation, wash, cut, and styling.',
    price: 'From £15',
    duration: '30 min',
    image: haircutImage,
  },
  {
    name: 'Hot Towel Shave',
    description: 'Traditional straight razor shave with hot towels and premium products for the smoothest finish.',
    price: 'From £20',
    duration: '45 min',
    image: shaveImage,
  },
  {
    name: 'Beard Trim & Style',
    description: 'Expert beard shaping, trimming, and conditioning to keep your facial hair looking sharp.',
    price: 'From £12',
    duration: '20 min',
    image: beardImage,
  },
];

const moreServices = [
  { name: 'Skin Fade', price: 'From £18', duration: '40 min' },
  { name: 'Kids Cut (Under 12)', price: 'From £10', duration: '20 min' },
  { name: 'Senior Cut (65+)', price: 'From £12', duration: '25 min' },
  { name: 'Hair & Beard Combo', price: 'From £25', duration: '50 min' },
  { name: 'Head Shave', price: 'From £10', duration: '20 min' },
  { name: 'Eyebrow Trim', price: 'From £5', duration: '10 min' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="decorative-line" />
            <Scissors className="w-6 h-6 text-primary" />
            <div className="decorative-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            From classic cuts to modern styles, we offer a full range of barbering services
            crafted with precision and care.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="group relative bg-gradient-card rounded-lg overflow-hidden gold-border hover:shadow-gold transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <span className="text-primary font-body font-semibold">
                    {service.price}
                  </span>
                </div>
                <p className="text-muted-foreground font-body text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary/80 text-sm">
                  <Clock className="w-4 h-4" />
                  <span className="font-body">{service.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="bg-gradient-card rounded-lg p-8 gold-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreServices.map((service, index) => (
              <motion.div
                key={service.name}
                className="flex items-center justify-between p-4 rounded-md bg-background/50 hover:bg-primary/10 transition-colors duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              >
                <div>
                  <span className="font-body text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <Clock className="w-3 h-3" />
                    <span className="font-body">{service.duration}</span>
                  </div>
                </div>
                <span className="text-primary font-body font-semibold">
                  {service.price}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
