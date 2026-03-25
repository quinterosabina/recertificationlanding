import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const { ref: footerRef, inView } = useInView({ threshold: 0.08 });

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div
        ref={footerRef as React.RefObject<HTMLDivElement>}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[0, 1, 2].map((col) => (
            <motion.div
              key={col}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: col * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {col === 0 && (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-8 w-8 text-blue-400" />
                    <div className="text-xl font-bold">{t.footer.company}</div>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{t.footer.tagline}</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </>
              )}
              {col === 1 && (
                <>
                  <h3 className="text-white font-bold mb-4">{t.footer.services}</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {[t.footer.service1, t.footer.service2, t.footer.service3, t.footer.service4, t.footer.service5].map((s, i) => (
                      <li key={i}>
                        <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">{s}</button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {col === 2 && (
                <>
                  <h3 className="text-white font-bold mb-4">{t.footer.contact}</h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">{t.footer.phoneLabel}</div>
                        <a href="tel:+13055707589" className="hover:text-white transition-colors">{t.footer.phone}</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">{t.footer.emailLabel}</div>
                        <a href={`mailto:${t.footer.email}`} className="hover:text-white transition-colors">{t.footer.email}</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">{t.footer.locationLabel}</div>
                        <p className="whitespace-pre-line">{t.footer.locationText}</p>
                      </div>
                    </li>
                  </ul>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-slate-800 border border-gray-700 rounded-lg p-6 mb-8">
            <h4 className="text-white font-bold mb-3 text-sm">{t.footer.legalDisclaimer}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">{t.footer.legalText}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>© {currentYear} {t.footer.copyright}</div>
            <div className="flex gap-6">
              {[t.footer.privacy, t.footer.terms, t.footer.licenses].map((link, i) => (
                <button key={i} onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">{link}</button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Emergency banner */}
      <div className="bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center text-sm">
          <strong>{t.footer.emergency}</strong> {t.footer.emergencyText}{" "}
          <a href="tel:+13055707589" className="underline font-bold hover:text-gray-200">{t.footer.phone}</a>
        </div>
      </div>
    </footer>
  );
}