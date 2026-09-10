/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import { TrustStrip, About, FeaturedExperience, Services } from './components/CoreSections';
import { CustomizedHaircut, ProfessionalStaff, PricingValue, CustomerExperience } from './components/ExperienceSections';
import { Reviews, Gallery } from './components/SocialAndGallery';
import { AppointmentCTA, Contact, Footer, MobileBottomCTA } from './components/ContactAndFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-secondary w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <FeaturedExperience />
        <Services />
        <CustomizedHaircut />
        <ProfessionalStaff />
        <PricingValue />
        <CustomerExperience />
        <Reviews />
        <Gallery />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
      <MobileBottomCTA />
    </div>
  );
}
