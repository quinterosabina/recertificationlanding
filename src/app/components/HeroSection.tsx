import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import heroBg from "@/assets/building.png";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export function HeroSection() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="hidden sm:block absolute inset-0">
        <img
          src={heroBg}
          alt="USDC Consulting building"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      {/* Mobile fallback background */}
      <div className="sm:hidden absolute inset-0 bg-slate-900" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-300"></span>
            </span>
            {t.hero.badge}
          </motion.div>

          {/* H1 */}
          <motion.h1 {...fadeUp(0.25)} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </motion.h1>

          {/* Description */}
          <motion.p {...fadeUp(0.4)} className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed">
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold w-full sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white px-8 py-6 text-lg font-bold w-full sm:w-auto"
              asChild
            >
              <a href="tel:+13055707589" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                {t.nav.phone}
              </a>
            </Button>
          </motion.div>

          {/* Firm description */}
          <motion.div {...fadeUp(0.72)} className="mt-12 max-w-3xl mx-auto">
            <p className="text-gray-200 text-sm leading-relaxed text-center">
              {t.hero.firmDescription}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
