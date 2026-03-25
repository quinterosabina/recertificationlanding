import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { UrgencySection } from './components/UrgencySection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Phone, ArrowUp, Languages } from 'lucide-react';
import { Button } from './components/ui/button';
import logoImage from "@/assets/logo.png";
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 group"
            >
              <img 
                src={logoImage} 
                alt="USDC CONSULTING Logo" 
                className="h-6 w-6 sm:h-7 sm:w-7 transition-transform group-hover:scale-110"
              />
              <span className="text-xl font-bold text-gray-900 hidden sm:inline">USDC CONSULTING</span>
              <span className="text-lg font-bold text-gray-900 sm:hidden">USDC</span>
            </button>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Change language"
              >
                <Languages className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700 uppercase">{language}</span>
              </button>

              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex items-center gap-2"
                asChild
              >
                <a href="tel:+13051234567">
                  <Phone className="h-4 w-4" />
                  <span className="hidden md:inline">{t.nav.phone}</span>
                </a>
              </Button>
              
              <Button
                onClick={scrollToContact}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                {t.nav.cta}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16 sm:h-20"></div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProcessSection />
        <UrgencySection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* Floating Phone Button (Mobile) */}
      <a
        href="tel:+13051234567"
        className="sm:hidden fixed bottom-6 left-6 z-40 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Call now"
      >
        <Phone className="h-7 w-7" />
      </a>

      {/* WhatsApp Button with Chat Bubble */}
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
