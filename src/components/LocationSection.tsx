import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const hours = [
  { day: 'Monday', time: '9:00 AM - 5:00 PM' },
  { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
  { day: 'Wednesday', time: '9:00 AM - 5:00 PM' },
  { day: 'Thursday', time: '9:00 AM - 5:00 PM' },
  { day: 'Friday', time: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', time: 'Closed', closed: true },
  { day: 'Sunday', time: '10:00 AM - 5:00 PM' },
];

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const mapsUrl = 'https://www.google.com/maps/place/Prestwood+Barbers/@52.6113521,-2.0835228,21z/data=!4m6!3m5!1s0x48709f4eac6b17c3:0x4f8f737559e7b69b!8m2!3d52.6112116!4d-2.0834894!16s%2Fg%2F11rn790y4b';

  return (
    <section id="location" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
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
            <MapPin className="w-6 h-6 text-primary" />
            <div className="decorative-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Us
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Visit us in Wolverhampton for the ultimate grooming experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            className="relative aspect-[4/3] rounded-lg overflow-hidden gold-border shadow-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.8881453396821!2d-2.0835228!3d52.6113521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709f4eac6b17c3%3A0x4f8f737559e7b69b!2sPrestwood%20Barbers!5e0!3m2!1sen!2sus!4v1704326400000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Overlay with button */}
            <div className="absolute bottom-4 right-4">
              <Button 
                variant="default" 
                className="bg-gradient-gold text-primary-foreground shadow-gold font-body"
                asChild
              >
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <motion.div
              className="bg-gradient-card rounded-lg p-6 gold-border"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Our Address
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    82a Lower Prestwood Road<br />
                    Wolverhampton<br />
                    WV11 1JX<br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              className="bg-gradient-card rounded-lg p-6 gold-border"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Opening Hours
                  </h3>
                </div>
              </div>
              
              <div className="space-y-2 ml-16">
                {hours.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    className="flex justify-between items-center py-2 border-b border-border/30 last:border-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                  >
                    <span className="font-body text-foreground">{schedule.day}</span>
                    <span className={`font-body ${(schedule as any).closed ? 'text-destructive' : 'text-primary'}`}>
                      {schedule.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
