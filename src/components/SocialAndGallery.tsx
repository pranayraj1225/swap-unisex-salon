import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Plus } from 'lucide-react';

const reviewsData = [
  {
    text: "The experience at this saloon was great. It is located near pipeline road. I had hair cut by Jaggi. It was a customized hair cut and he took my preference at every step. I would surely recommend this saloon.",
    author: "BM Ketan"
  },
  {
    text: "Very nice one. Not costly, very skilled professional staff. Its a cosy well equipped salon.",
    author: "Avishek Bera"
  },
  {
    text: "Got amazing haircut from VISHAL fully satisfaction. Good eco friendly staff and prices are so reasonable + amazing offers.",
    author: "The Momocha"
  },
  {
    text: "Good experience and receiving is so good nice work.",
    author: "Customer"
  },
  {
    text: "The response is very good and my haircut is awesome.",
    author: "Customer"
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-primary text-secondary">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center text-center">
        
        <div className="mb-16">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="flex flex-col items-center justify-center">
            <span className="font-heading text-5xl font-bold text-accent mb-2">4.9</span>
            <div className="flex text-accent mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-heading tracking-[0.2em] text-xs uppercase text-secondary/70">
              23+ Google Reviews
            </span>
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <Quote size={64} className="text-primary-light absolute -top-10 -left-6 md:-left-12 -z-10 rotate-180" />
          
          <div className="h-[250px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full px-4"
              >
                <p className="text-xl md:text-3xl font-light italic leading-relaxed mb-8">
                  "{reviewsData[currentIndex].text}"
                </p>
                <p className="font-heading font-bold text-accent tracking-widest text-sm uppercase">
                  — {reviewsData[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prev}
              className="p-3 border border-secondary/20 rounded-full hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-accent w-6' : 'bg-secondary/20'}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-3 border border-secondary/20 rounded-full hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800", alt: "Haircut and styling", category: "HAIR" },
  { src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800", alt: "Barber tools", category: "STYLING" },
  { src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800", alt: "Beard grooming", category: "GROOMING" },
  { src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800", alt: "Salon chair", category: "INTERIOR" },
  { src: "https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=800", alt: "Hair washing", category: "HAIR" },
  { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800", alt: "Professional styling", category: "STYLING" },
];

export function Gallery() {
  const [filter, setFilter] = useState('ALL');
  
  const categories = ['ALL', 'HAIR', 'GROOMING', 'STYLING', 'INTERIOR'];
  
  const filteredImages = filter === 'ALL' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
            THE SWAP EXPERIENCE
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-heading text-sm tracking-[0.2em] pb-1 border-b-2 transition-colors ${
                  filter === cat ? 'border-accent text-primary font-bold' : 'border-transparent text-primary/50 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.src}
                className="relative group overflow-hidden break-inside-avoid bg-primary/5 cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Plus size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
