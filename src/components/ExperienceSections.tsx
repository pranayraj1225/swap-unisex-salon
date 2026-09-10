import { motion } from 'motion/react';
import { CheckCircle2, Award, Heart, Check, Users } from 'lucide-react';

export function CustomizedHaircut() {
  return (
    <section className="py-24 md:py-32 bg-primary text-secondary overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12">
            MADE FOR YOUR LOOK.
          </h2>
          
          <div className="pl-6 border-l-2 border-accent mb-12">
            <p className="text-xl md:text-2xl font-light italic text-secondary/90 leading-relaxed mb-6">
              "The experience at this saloon was great... It was a customized hair cut and he took my preference at every step. I would surely recommend this saloon."
            </p>
            <p className="font-heading font-bold text-accent tracking-widest text-sm">— BM KETAN</p>
          </div>

          <div className="space-y-8">
            {[
              { num: '01', title: 'TELL US WHAT YOU WANT' },
              { num: '02', title: 'WE REFINE THE STYLE' },
              { num: '03', title: 'LEAVE WITH YOUR LOOK' }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-6 bg-primary-light p-6">
                <span className="text-accent font-heading font-bold text-xl">{step.num}</span>
                <h3 className="font-heading font-bold tracking-widest text-sm">{step.title}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200" 
            alt="Barber styling hair" 
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}

export function ProfessionalStaff() {
  return (
    <section className="py-24 bg-secondary border-b border-primary/10">
      <div className="w-full max-w-5xl mx-auto px-6 text-center">
        <Users size={48} className="mx-auto text-accent mb-8" />
        <h2 className="text-primary font-bold text-4xl md:text-5xl leading-[1.1] mb-8">
          SKILLED HANDS.<br />PERSONAL ATTENTION.
        </h2>
        <p className="text-primary/80 font-light text-xl mb-12 max-w-2xl mx-auto text-balance">
          Customers describe the team as skilled, responsive and attentive to their preferences. Every service is focused on delivering a result you're comfortable with.
        </p>
        <p className="font-heading tracking-widest text-sm text-primary uppercase">
          Featuring skilled professionals like <span className="text-accent font-bold">Jaggi</span> & <span className="text-accent font-bold">Vishal</span>
        </p>
      </div>
    </section>
  );
}

export function PricingValue() {
  return (
    <section className="py-24 md:py-32 bg-[#E8DFD8]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
            PROFESSIONAL DOESN'T HAVE TO MEAN EXPENSIVE.
          </h2>
          <p className="text-primary/80 font-light text-lg mb-12">
            Customers consistently appreciate the salon's reasonable pricing while highlighting the quality of service and professional staff.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              'REASONABLE PRICING',
              'SKILLED SERVICE',
              'CUSTOMIZED STYLING',
              'CUSTOMER-FIRST EXPERIENCE'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-primary" />
                <span className="font-heading font-bold text-sm tracking-widest text-primary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary p-12 md:p-16 text-center"
        >
          <div className="inline-block p-4 bg-accent/20 rounded-full mb-6">
            <Award size={32} className="text-accent" />
          </div>
          <h3 className="font-heading text-secondary font-bold tracking-[0.2em] mb-4 text-xl">
            ASK ABOUT OUR CURRENT OFFERS
          </h3>
          <p className="text-secondary/70 font-light mb-10">
            Enjoy premium services with attractive promotions available directly at the salon.
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent text-primary px-8 py-4 font-heading font-bold text-sm tracking-widest hover:bg-secondary transition-colors w-full sm:w-auto"
          >
            CHECK CURRENT OFFERS
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function CustomerExperience() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-12 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <h2 className="text-primary font-bold text-4xl md:text-5xl leading-[1.1] mb-8 text-balance">
            COMFORTABLE FROM START TO FINISH.
          </h2>
          <p className="text-primary/80 font-light text-lg mb-12">
            From the moment you walk in to the final look, Swap Unisex Salon focuses on creating a comfortable and positive experience.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: <Heart size={20}/>, text: 'COZY ATMOSPHERE' },
              { icon: <Check size={20}/>, text: 'WELL-EQUIPPED' },
              { icon: <Heart size={20}/>, text: 'FRIENDLY SERVICE' },
              { icon: <Check size={20}/>, text: 'RESPONSIVE TEAM' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-primary/10 pb-4">
                <span className="text-accent">{item.icon}</span>
                <span className="font-heading font-bold tracking-widest text-sm text-primary">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 h-[500px] lg:h-[700px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200" 
            alt="Cozy well-equipped salon interior" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
