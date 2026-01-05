import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Calendar, Heart } from 'lucide-react';
import customerKid from '@/assets/customer-kid.webp';
import customerSenior from '@/assets/customer-senior.webp';
import customerStyle from '@/assets/customer-style.webp';

const stats = [
  { icon: Users, value: '1000+', label: 'Happy Clients' },
  { icon: Calendar, value: '5+', label: 'Years Experience' },
  { icon: Award, value: '5.0', label: 'Google Rating' },
  { icon: Heart, value: '100%', label: 'Satisfaction' },
];

const galleryImages = [
  { src: customerStyle, alt: 'Modern textured haircut' },
  { src: customerKid, alt: 'Kids haircut specialist' },
  { src: customerSenior, alt: 'Senior grooming service' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--primary)) 35px, hsl(var(--primary)) 36px)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="decorative-line" />
              <span className="text-primary font-body tracking-widest uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Style
              <span className="text-gradient-gold block">Meets Precision</span>
            </h2>
            
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Welcome to Prestwood Barbers, where traditional craftsmanship meets contemporary style. 
              Located in the heart of Wolverhampton, we've been serving our community with pride, 
              delivering exceptional grooming experiences that leave our clients looking and feeling their best.
            </p>
            
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Our skilled barbers combine years of experience with a passion for their craft, 
              ensuring every visit is more than just a haircut—it's an experience. 
              From classic cuts to modern fades, hot towel shaves to beard grooming, 
              we take pride in our attention to detail and commitment to excellence.
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-4">
              {['Quality First', 'Attention to Detail', 'Customer Care', 'Classic Techniques'].map((value, index) => (
                <motion.span
                  key={value}
                  className="px-4 py-2 rounded-full gold-border text-foreground font-body text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-card rounded-lg p-8 gold-border text-center hover:shadow-gold transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-body text-sm tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Our Work
            </h3>
            <p className="text-muted-foreground font-body">Real results from real clients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.alt}
                className="relative aspect-[3/4] rounded-lg overflow-hidden gold-border group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-foreground font-body text-sm">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;