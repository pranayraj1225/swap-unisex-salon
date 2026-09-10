import { motion } from 'motion/react';
import { Star, Clock, Users, Scissors } from 'lucide-react';
import hairImage from '../assets/images/regenerated_image_1789031488971.jpg';
import beautyImage from '../assets/images/regenerated_image_1789031963279.jpg';

export function TrustStrip() {
  const items = [
    { icon: <Star size={24} className="text-accent" />, title: "4.9 ★", subtitle: "GOOGLE RATING" },
    { icon: <Star size={24} className="text-accent" />, title: "23+", subtitle: "REVIEWS" },
    { icon: <Users size={24} className="text-accent" />, title: "SKILLED", subtitle: "PROFESSIONALS" },
    { icon: <Clock size={24} className="text-accent" />, title: "OPEN UNTIL", subtitle: "9 PM" },
  ];

  return (
    <section className="bg-primary-light py-12 md:py-8 border-b border-primary/20">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center text-center">
        <p className="text-secondary/80 font-heading text-sm md:text-base tracking-widest uppercase mb-8 max-w-2xl text-balance">
          "Trusted for personalized haircuts, professional service and a comfortable salon experience."
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-secondary font-heading font-bold text-xl md:text-2xl mb-1">{item.title}</h3>
              <p className="text-secondary/60 text-xs tracking-[0.2em]">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-balance">
            YOUR STYLE STARTS WITH LISTENING.
          </h2>
          <div className="space-y-6 text-primary/80 font-light text-lg mb-12">
            <p>
              At Swap Unisex Salon, great styling starts with understanding what the customer wants. Our approach focuses on personalized service, professional execution and making every visit comfortable.
            </p>
            <p>
              Customers appreciate the salon for its customized haircuts, skilled professionals, friendly service and cozy, well-equipped environment.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              { num: '01', title: 'PERSONALIZED', desc: 'We listen to your preferences.' },
              { num: '02', title: 'PROFESSIONAL', desc: 'Skilled service focused on quality.' },
              { num: '03', title: 'COMFORTABLE', desc: 'A welcoming and relaxed salon experience.' },
            ].map((value, i) => (
              <div key={i} className="flex items-start gap-6 border-t border-primary/10 pt-6">
                <span className="text-accent font-heading font-bold text-xl">{value.num}</span>
                <div>
                  <h3 className="font-heading font-bold text-primary tracking-widest text-sm mb-1">{value.title}</h3>
                  <p className="text-primary/70">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] lg:h-[800px] w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1200" 
            alt="Salon interior styling" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturedExperience() {
  return (
    <section className="py-24 md:py-32 bg-primary text-secondary overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative z-10"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:ml-0">
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8"></div>
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1200" 
              alt="Customized haircut experience" 
              className="absolute inset-0 w-full h-full object-cover z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 lg:-ml-12 z-20 bg-primary/95 lg:bg-transparent lg:backdrop-blur-none p-6 lg:p-0"
        >
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-balance">
            A HAIRCUT THAT ACTUALLY FEELS LIKE YOURS.
          </h2>
          <p className="text-secondary/80 font-light text-lg mb-12">
            One of the things customers appreciate most is the attention given to their individual preferences. Rather than simply choosing a standard style, the experience is centered around understanding the look you want.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8">
            {['CUSTOMIZED STYLE', 'PERSONAL PREFERENCES', 'PROFESSIONAL FINISH'].map((tag, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span className="font-heading text-xs tracking-[0.15em]">{tag}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export function Services() {
  const categories = [
    {
      title: "HAIR",
      desc: "Personalized hair services designed around your preferred look.",
      items: ["Haircuts", "Customized Haircuts", "Hair Styling", "Hair Wash", "Hair Care"],
      image: hairImage
    },
    {
      title: "GROOMING",
      desc: "Clean, precise grooming for a sharp and confident finish.",
      items: ["Beard Grooming", "Beard Trimming", "Beard Styling", "Men's Grooming"],
      image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "BEAUTY",
      desc: "Professional beauty care in a comfortable salon environment.",
      items: ["Beauty Services", "Hair Care", "Personal Care", "Styling"],
      image: beautyImage
    },
    {
      title: "UNISEX",
      desc: "Professional salon services for everyone.",
      items: ["Women's Hair", "Men's Hair", "Hair Styling", "Grooming"],
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            OUR SERVICES
          </h2>
          <p className="text-primary/70 font-light text-lg uppercase tracking-widest font-heading max-w-2xl mx-auto">
            Professional grooming and styling for every kind of look.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white border border-primary/5 hover:border-accent transition-colors group overflow-hidden flex flex-col"
            >
              <div className="h-64 w-full overflow-hidden relative">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/20 transition-opacity duration-300 group-hover:opacity-0"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-heading font-bold text-2xl mb-4">{category.title}</h3>
                <p className="text-primary/70 mb-8 pb-8 border-b border-primary/10 flex-grow">{category.desc}</p>
                
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Scissors size={14} className="text-accent" />
                      <span className="text-primary font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block bg-primary text-secondary px-8 py-4 font-heading text-sm tracking-widest uppercase">
            ENQUIRE FOR PRICING
          </p>
        </div>
      </div>
    </section>
  );
}
