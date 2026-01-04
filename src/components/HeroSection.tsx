import { motion } from 'framer-motion';
import { ChevronDown, Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-barbershop.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Prestwood Barbers luxury interior"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full gold-border bg-background/20 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground/90 font-body text-sm">5.0 Rating on Google</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Crafting
            <span className="text-gradient-gold block">Timeless Style</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-cream-muted text-xl font-body leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Experience the art of traditional barbering with a modern touch. 
            Where precision meets passion, and every cut tells a story.
          </motion.p>

          {/* Quick info */}
          <motion.div
            className="flex flex-wrap gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-body">Open until 5PM</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-body">Wolverhampton</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Button variant="default" size="lg" className="bg-gradient-gold text-primary-foreground font-body tracking-wide shadow-gold hover:shadow-glow transition-all duration-300" asChild>
              <a href="#services">View Services</a>
            </Button>
            <Button variant="outline" size="lg" className="gold-border text-foreground hover:bg-primary/10 font-body tracking-wide" asChild>
              <a href="#location">Get Directions</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.a
          href="#services"
          className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
