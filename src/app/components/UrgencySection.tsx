import { AlertTriangle, FileWarning, Calendar, DollarSign } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function UrgencySection() {
  const { t } = useLanguage();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
            <AlertTriangle className="h-4 w-4" />
            {t.urgency.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.urgency.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            {t.urgency.description} <span className="font-bold text-red-600">{t.urgency.descriptionBold}</span>.
          </p>
        </motion.div>

        {/* Consequence cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {[
            {
              icon: FileWarning,
              title: t.urgency.laws.title,
              content: (
                <>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t.urgency.laws.description }}></p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>{t.urgency.laws.item1}</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: t.urgency.laws.item2 }}></p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>{t.urgency.laws.item3}</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: t.urgency.laws.item4 }}></p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>{t.urgency.laws.item5}</span>
                    </li>
                  </ul>
                </>
              ),
            },
            {
              icon: DollarSign,
              title: t.urgency.consequences.title,
              content: (
                <ul className="space-y-2 text-gray-700">
                  {t.urgency.consequences.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                className="bg-white border-2 border-red-200 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                    {card.content}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Countdown banner */}
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Calendar className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">{t.urgency.countdown.title}</h3>
          <p className="text-lg mb-4">{t.urgency.countdown.description}</p>
          <p className="text-red-100 font-semibold">{t.urgency.countdown.cta}</p>
        </motion.div>

      </div>
    </section>
  );
}
