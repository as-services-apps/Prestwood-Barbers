import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team',
    value: '+44 7863 611042',
    href: 'tel:+447863611042',
    action: 'Call Now',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Message us on WhatsApp',
    value: '+44 7863 611042',
    href: 'https://wa.me/447863611042',
    action: 'Send Message',
  },
  {
    icon: Mail,
    title: 'Visit Us',
    description: 'Walk-ins welcome',
    value: '82a Lower Prestwood Rd',
    href: '#location',
    action: 'Get Directions',
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

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
            <Phone className="w-6 h-6 text-primary" />
            <div className="decorative-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Ready for a fresh look? Contact us today or simply walk in—we'd love to see you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-gradient-card rounded-lg p-8 gold-border text-center hover:shadow-gold transition-all duration-500 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <method.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-4">
                {method.description}
              </p>
              <p className="text-primary font-body font-semibold mb-6">
                {method.value}
              </p>
              
              <Button 
                variant="outline" 
                className="w-full gold-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-body transition-all duration-300"
                asChild
              >
                <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {method.action}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-muted-foreground font-body text-lg mb-6">
            No appointment needed—walk-ins are always welcome!
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-glow font-body tracking-wide transition-all duration-300"
            asChild
          >
            <a href="tel:+447863611042" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call +44 7863 611042
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
