import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video.mp4';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-32">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full gold-border bg-background/40 backdrop-blur-sm mb-6"
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
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Prestwood
            <span className="text-gradient-gold block">Barbers</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-cream-muted text-lg md:text-xl font-body leading-relaxed mb-6 max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Premium grooming experience in Wolverhampton. 
            Traditional craftsmanship meets modern style.
          </motion.p>

          {/* Quick info */}
          <motion.div
            className="flex flex-wrap gap-4 md:gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-body text-sm md:text-base">Mon-Fri 9-5</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-body text-sm md:text-base">Wolverhampton</span>
            </div>
            <a href="tel:+447863611042" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-body text-sm md:text-base">07863 611042</span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Button variant="default" size="lg" className="bg-gradient-gold text-primary-foreground font-body tracking-wide shadow-gold hover:shadow-glow transition-all duration-300" asChild>
              <a href="tel:+447863611042">Call Now</a>
            </Button>
            <Button variant="outline" size="lg" className="gold-border text-foreground hover:bg-primary/10 font-body tracking-wide" asChild>
              <a href="#services">View Services</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;