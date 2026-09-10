import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export function AppointmentCTA() {
  return (
    <section className="py-24 bg-accent">
      <div className="w-full max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
          READY FOR A FRESH LOOK?
        </h2>
        <p className="text-primary/80 font-light text-xl mb-12">
          Tell us the look you're after and let our team help you make it happen.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919000907791?text=Hi%20Swap%20Unisex%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20timings%20and%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-secondary px-8 py-4 font-heading font-bold text-sm tracking-widest hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
          >
            WHATSAPP US <ArrowRight size={16} />
          </a>
          <a
            href="tel:+919000907791"
            className="w-full sm:w-auto bg-transparent border border-primary text-primary px-8 py-4 font-heading font-bold text-sm tracking-widest hover:bg-primary hover:text-secondary transition-colors"
          >
            CALL NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary border-b border-primary/10">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div>
          <h2 className="text-primary font-bold text-4xl md:text-5xl leading-[1.1] mb-12">
            VISIT SWAP
          </h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-bold tracking-widest text-sm mb-2">ADDRESS</h3>
                <p className="text-primary/70 leading-relaxed font-light">
                  SWAP UNISEX SALON<br />
                  GF78+F7M, IDA Jeedimetla,<br />
                  Jeedimetla, Hyderabad,<br />
                  Telangana 500067
                </p>
                <a 
                  href="https://maps.google.com/maps?q=GF78%2BF7M%2C%20IDA%20Jeedimetla%2C%20Jeedimetla%2C%20Hyderabad%2C%20Telangana%20500067" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-heading font-bold text-accent tracking-widest hover:text-primary transition-colors underline underline-offset-4"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={24} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-bold tracking-widest text-sm mb-2">PHONE</h3>
                <p className="text-primary/70 leading-relaxed font-light mb-4">
                  090009 07791
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+919000907791"
                    className="text-xs font-heading font-bold tracking-widest bg-primary text-secondary px-6 py-3 hover:bg-primary-light transition-colors"
                  >
                    CALL
                  </a>
                  <a 
                    href="https://wa.me/919000907791"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading font-bold tracking-widest bg-[#25D366] text-white px-6 py-3 hover:bg-[#128C7E] transition-colors"
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={24} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-bold tracking-widest text-sm mb-2">HOURS</h3>
                <p className="text-primary/70 leading-relaxed font-light">
                  Open daily until 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] lg:h-auto min-h-[500px] bg-primary/5 w-full grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://maps.google.com/maps?q=GF78%2BF7M%2C%20IDA%20Jeedimetla%2C%20Jeedimetla%2C%20Hyderabad%2C%20Telangana%20500067&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Swap Unisex Salon Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-24 pb-12 lg:pb-24 pb-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl tracking-wider text-secondary">
              SWAP
            </span>
            <span className="font-heading text-xs tracking-[0.2em] mt-1 text-accent mb-6">
              UNISEX SALON
            </span>
            <p className="text-secondary/60 font-light italic text-lg max-w-sm">
              "YOUR STYLE. YOUR WAY."
            </p>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-heading font-bold tracking-widest text-sm mb-6 uppercase text-accent">Navigation</h4>
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-secondary/70 hover:text-secondary transition-colors font-light">
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-heading font-bold tracking-widest text-sm mb-6 uppercase text-accent">Contact</h4>
            <div className="space-y-4 text-secondary/70 font-light">
              <p>090009 07791</p>
              <p>Jeedimetla, Hyderabad</p>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-secondary/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-secondary/40 text-sm font-light">
          <p>© 2026 Swap Unisex Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary border-t border-secondary/10 z-50 lg:hidden flex">
      <a 
        href="tel:+919000907791"
        className="flex-1 py-4 flex items-center justify-center gap-2 text-secondary font-heading font-bold text-xs tracking-widest border-r border-secondary/10 hover:bg-primary-light"
      >
        <Phone size={16} className="text-accent" /> CALL
      </a>
      <a 
        href="https://wa.me/919000907791"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-4 flex items-center justify-center gap-2 text-secondary font-heading font-bold text-xs tracking-widest border-r border-secondary/10 hover:bg-primary-light"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg> 
        WHATSAPP
      </a>
      <a 
        href="#contact"
        className="flex-1 py-4 flex items-center justify-center gap-2 bg-accent text-primary font-heading font-bold text-xs tracking-widest"
      >
        BOOK
      </a>
    </div>
  );
}
