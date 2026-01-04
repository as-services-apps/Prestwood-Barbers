import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'James Mitchell',
    rating: 5,
    text: 'Absolutely fantastic service! The attention to detail is incredible. Best barber I\'ve been to in years. The hot towel shave was an experience like no other.',
    date: '2 weeks ago',
  },
  {
    name: 'David Thompson',
    rating: 5,
    text: 'Professional, friendly, and genuinely skilled. My fade has never looked this clean. The atmosphere is relaxed and welcoming. Highly recommend!',
    date: '1 month ago',
  },
  {
    name: 'Marcus Williams',
    rating: 5,
    text: 'Been coming here for months now and wouldn\'t go anywhere else. They really listen to what you want and deliver every single time. True craftsmen.',
    date: '3 weeks ago',
  },
  {
    name: 'Ryan Parker',
    rating: 5,
    text: 'The beard trim service is exceptional. They take their time to get it perfect. Great conversation and a premium experience without the premium price.',
    date: '1 week ago',
  },
  {
    name: 'Chris Anderson',
    rating: 5,
    text: 'Found my new regular barber! Clean shop, skilled barbers, and they really know how to work with different hair types. Top quality service.',
    date: '2 months ago',
  },
  {
    name: 'Tom Harrison',
    rating: 5,
    text: 'Brought my son here for his first proper haircut. They were so patient and made it a great experience for him. We\'ll definitely be back!',
    date: '3 weeks ago',
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />

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
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="decorative-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the gentlemen who trust us with their style
          </p>
          
          {/* Overall rating */}
          <motion.div
            className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-full gold-border bg-gradient-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="font-display text-3xl font-bold text-primary">5.0</span>
            <div className="h-8 w-px bg-border" />
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground font-body text-sm">Based on Google Reviews</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="bg-gradient-card rounded-lg p-6 gold-border hover:shadow-gold transition-all duration-500 relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                "{review.text}"
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-primary font-semibold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="font-body text-foreground font-medium">{review.name}</span>
                </div>
                <span className="text-muted-foreground/60 font-body text-sm">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="https://www.google.com/maps/place/Prestwood+Barbers/@52.611271,-2.0835285,20.64z/data=!4m8!3m7!1s0x48709f4eac6b17c3:0x4f8f737559e7b69b!8m2!3d52.6112116!4d-2.0834894!9m1!1b1!16s%2Fg%2F11rn790y4b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body transition-colors"
          >
            <span>View all reviews on Google</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
