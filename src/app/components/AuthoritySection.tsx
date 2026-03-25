import { Award, Building, Users, TrendingUp, Check } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { ProjectCarousel } from "./ProjectCarousel";

/* ── Stat card with animated counter ── */
interface StatCardProps {
  icon: React.ElementType;
  color: string;
  borderColor: string;
  prefix?: string;
  suffix?: string;
  end: number;
  label: string;
  enabled: boolean;
  delay?: number;
  isText?: boolean;
  textValue?: string;
}

function StatCard({ icon: Icon, color, borderColor, prefix = "", suffix = "", end, label, enabled, delay = 0, isText, textValue }: StatCardProps) {
  const count = useCountUp({ end, duration: 1800, enabled: enabled && !isText });

  return (
    <motion.div
      className={`bg-white rounded-lg p-6 shadow-lg border-t-4 ${borderColor} text-center`}
      initial={{ opacity: 0, y: 36 }}
      animate={enabled ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Icon className={`h-10 w-10 ${color} mx-auto mb-3`} />
      <div className={`text-3xl font-bold text-gray-900 mb-1`}>
        {isText ? textValue : `${prefix}${count}${suffix}`}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}

export function AuthoritySection() {
  const { t } = useLanguage();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.authority.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">{t.authority.description}</p>

          {/* Checkmarks */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {t.authority.checkmarks.map((item: string, index: number) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-800 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectCarousel />
        </motion.div>

        {/* ── Stats with animated counters ── */}
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
        >
          <StatCard
            icon={Award}
            color="text-blue-600"
            borderColor="border-blue-600"
            isText
            textValue="P.E."
            end={0}
            label={t.authority.stats.licenses}
            enabled={statsInView}
            delay={0}
          />
          <StatCard
            icon={Building}
            color="text-green-600"
            borderColor="border-green-600"
            suffix="+"
            end={350}
            label={t.authority.stats.buildings}
            enabled={statsInView}
            delay={0.12}
          />
          <StatCard
            icon={Users}
            color="text-purple-600"
            borderColor="border-purple-600"
            suffix="+"
            end={7}
            label={t.authority.stats.experience}
            enabled={statsInView}
            delay={0.24}
          />
          <StatCard
            icon={TrendingUp}
            color="text-orange-600"
            borderColor="border-orange-600"
            suffix="%"
            end={100}
            label={t.authority.stats.approval}
            enabled={statsInView}
            delay={0.36}
          />
        </div>

        {/* Why trust us */}
        <motion.div
          className="max-w-4xl mx-auto bg-white border-2 border-blue-200 rounded-2xl p-8 sm:p-12 shadow-xl"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.authority.whyTrust}
          </h3>

          <div className="space-y-6">
            {[
              t.authority.reasons.item1,
              t.authority.reasons.item2,
              t.authority.reasons.item3,
              t.authority.reasons.item4,
            ].map((reason, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{reason.title}</h4>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
