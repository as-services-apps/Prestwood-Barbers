import { motion, useInView } from 'framer-motion';
import { useRef, useCallback, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const reviews = [
  {
    name: 'ScottyP1991',
    rating: 5,
    text: 'Always a great service and experience. Our young boys love getting their hair cut here, and often wave hello after school. Always well looked after and time taken. Treat myself to the hot towel shave sometimes, cannot recommend it enough 🙌🙂',
    date: '2 months ago',
    badge: '3 reviews',
  },
  {
    name: 'Caroline Stratfull',
    rating: 5,
    text: 'Superb service, never seen a barber take so much care over my son\'s hair and really made an effort to make the style he wanted suit his head shape and hair texture. Will definitely use again.',
    date: '7 months ago',
    badge: 'Local Guide · 16 reviews',
  },
  {
    name: 'Samantha Davies',
    rating: 5,
    text: 'My son always comes here for his haircut, they always do a lovely job and he\'s super fussy but always leaves happy with his new trim. Would definitely recommend 🌟',
    date: '2 years ago',
    badge: '1 review',
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="reviews" className="py-24 mt-16 bg-background relative overflow-hidden">
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

        {/* Reviews Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-gradient-card gold-border flex items-center justify-center text-primary hover:bg-primary/10 transition-colors disabled:opacity-50 hidden md:flex"
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-gradient-card gold-border flex items-center justify-center text-primary hover:bg-primary/10 transition-colors disabled:opacity-50 hidden md:flex"
            disabled={!canScrollNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {reviews.map((review, index) => (
                <div
                  key={review.name}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="bg-gradient-card rounded-lg p-6 gold-border hover:shadow-gold transition-all duration-500 relative group h-full">
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
                          <span className="font-display text-primary font-semibold text-sm">
                            {review.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <span className="font-body text-foreground font-medium block">{review.name}</span>
                          <span className="text-muted-foreground/60 font-body text-xs">{review.badge}</span>
                        </div>
                      </div>
                      <span className="text-muted-foreground/60 font-body text-sm">{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary transition-colors"
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ReviewsSection;
