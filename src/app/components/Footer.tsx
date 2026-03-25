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
                    <a href="https://www.instagram.com/usdcconsulting/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/usdcconsulting/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCKLCrxogYHUD1qndS9joEkg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">YouTube</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/usdc-consulting/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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