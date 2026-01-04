import { motion } from 'framer-motion';
import { Scissors, Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full gold-border flex items-center justify-center">
                <Scissors className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="font-display text-2xl font-semibold text-foreground block">
                  Prestwood Barbers
                </span>
              </div>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed max-w-md mb-6">
              Where tradition meets style. Experience the art of barbering at its finest 
              in the heart of Wolverhampton.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Location', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary font-body transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground font-body">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>82a Lower Prestwood Rd<br />Wolverhampton WV11 1JX</span>
              </li>
              <li>
                <a
                  href="tel:+447863611042"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary font-body transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  +44 7863 611042
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground font-body text-sm text-center md:text-left">
            © {currentYear} Prestwood Barbers. All rights reserved.
          </p>
          <p className="text-muted-foreground font-body text-sm">
            Made by <span className="text-primary font-semibold">AS Services</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
