import { Phone, Eye, FileText, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export function ProcessSection() {
  const { t } = useLanguage();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1 });

  const steps = [
    { number: 1, icon: Phone,         title: t.process.step1.title, description: t.process.step1.description, timeline: t.process.timelines.step1, completed: false },
    { number: 2, icon: Eye,           title: t.process.step2.title, description: t.process.step2.description, timeline: t.process.timelines.step2, completed: false },
    { number: 3, icon: FileText,      title: t.process.step3.title, description: t.process.step3.description, timeline: t.process.timelines.step3, completed: false },
    { number: 4, icon: CheckCircle2,  title: t.process.step4.title, description: t.process.step4.description, timeline: t.process.timelines.step4, completed: true  },
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 text-sm font-bold">
            {t.process.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.process.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">{t.process.description}</p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">

          {/* Mobile / tablet – vertical */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = step.completed;
              return (
                <motion.div
                  key={index}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {index < steps.length - 1 && (
                    <div className={`absolute left-6 top-14 bottom-0 w-0.5 ${isCompleted ? "bg-green-200" : "bg-blue-200"}`} />
                  )}
                  <div className={`absolute left-0 top-0 w-12 h-12 ${isCompleted ? "bg-green-500" : "bg-blue-600"} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                    {step.number}
                  </div>
                  <div className={`bg-white border-2 ${isCompleted ? "border-green-200 bg-green-50/30" : "border-blue-200"} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`h-6 w-6 ${isCompleted ? "text-green-600" : "text-blue-600"}`} />
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium text-sm">
                      ⚡ {step.timeline}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop – horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-blue-200" />
              <div className="grid grid-cols-4 gap-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = step.completed;
                  return (
                    <motion.div
                      key={index}
                      className="relative flex flex-col"
                      initial={{ opacity: 0, y: 40 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.15 + index * 0.13, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className={`relative z-10 mx-auto w-16 h-16 ${isCompleted ? "bg-green-500" : "bg-blue-600"} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-6 shrink-0`}>
                        {step.number}
                      </div>
                      <div className={`bg-white border-2 ${isCompleted ? "border-green-200 bg-green-50/30" : "border-blue-200"} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow flex-1 flex flex-col`}>
                        <Icon className={`h-8 w-8 ${isCompleted ? "text-green-600" : "text-blue-600"} mb-3`} />
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-700 mb-4 flex-1">{step.description}</p>
                        <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium text-xs self-start">
                          ⚡ {step.timeline}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Speed Banner */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-xl p-4 sm:p-5 text-white shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500 rounded-full opacity-10 transform translate-x-24 -translate-y-24 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400 rounded-full opacity-10 transform -translate-x-20 translate-y-20 pointer-events-none" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
              <div className="flex items-center gap-3 sm:justify-start justify-center">
                <Zap className="h-4 w-4 text-orange-400 shrink-0" fill="currentColor" />
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-wider block mb-0.5">{t.process.speedBadge}</span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{t.process.speedTitle}</h3>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-center min-w-[68px]">
                  <div className="text-xl font-black text-white">24h</div>
                  <div className="text-[10px] text-blue-300 uppercase tracking-wide">{t.process.quoteLabel}</div>
                </div>
                <span className="text-blue-400 font-bold text-sm">+</span>
                <div className="bg-gradient-to-br from-yellow-400/50 to-orange-500/40 border-2 border-yellow-400/80 shadow-xl shadow-orange-500/40 rounded-lg px-4 py-3 text-center min-w-[80px] transform scale-105 animate-glow-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent animate-shimmer"></div>
                  <div className="text-2xl font-black text-yellow-200 drop-shadow-md relative z-10">3–5</div>
                  <div className="text-[10px] text-yellow-100 uppercase tracking-wide font-semibold relative z-10">{t.process.totalDaysLabel}</div>
                </div>
                <span className="text-blue-400/50 font-bold text-sm">vs</span>
                <div className="bg-red-500/10 border border-red-400/20 rounded-lg px-3 py-2 text-center min-w-[80px]">
                  <div className="text-[10px] text-red-300 uppercase tracking-wide mb-0.5">{t.process.industryLabel}</div>
                  <div className="text-lg font-black text-white/40 line-through decoration-red-400 decoration-2">{t.process.industryTime}</div>
                </div>
              </div>

              <div className="flex sm:justify-end justify-center">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-4 py-2.5 rounded-lg font-bold text-sm shadow-lg transition-all hover:scale-105 whitespace-nowrap"
                >
                  {t.process.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-center">
              <span className="hidden sm:block text-white/20">·</span>
              <p className="text-[11px] text-white/40">
                ⚠ {t.process.importantNote} {t.process.disclaimer}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
