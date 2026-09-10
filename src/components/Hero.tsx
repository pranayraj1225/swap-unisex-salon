import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1920"
          alt="Modern salon interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center text-center mt-32 md:mt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-accent font-heading tracking-[0.3em] text-xs md:text-sm mb-6 block">
            JEEDIMETLA • HYDERABAD
          </span>
          
          <h1 className="text-secondary font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 text-balance">
            LOOK GOOD.<br />FEEL CONFIDENT.
          </h1>
          
          <p className="text-secondary/80 max-w-2xl text-base md:text-lg lg:text-xl font-light mb-10 text-balance">
            Professional hair and grooming services with personalized styling, skilled professionals and a comfortable salon experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-accent text-primary px-8 py-4 font-heading font-bold text-sm tracking-widest hover:bg-secondary transition-all flex items-center justify-center gap-2"
          >
            BOOK AN APPOINTMENT <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-transparent border border-secondary/30 text-secondary px-8 py-4 font-heading font-bold text-sm tracking-widest hover:bg-secondary/10 transition-all text-center"
          >
            EXPLORE SERVICES
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <div className="flex gap-1 text-accent">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-secondary font-heading tracking-widest text-xs uppercase">
            4.9 Google Rating • 23+ Reviews
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-secondary/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
