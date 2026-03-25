import {
  FileText, ShieldCheck, CalendarCheck,
  CheckCircle2, Hammer, Search, ThermometerSun, Home
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function ServicesSection() {
  const { t } = useLanguage();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.08 });

  const services = [
    { icon: Hammer,         title: t.services.structural.title,          description: t.services.structural.description,          items: t.services.structural.items },
    { icon: Home,           title: t.services.threshold.title,           description: t.services.threshold.description,           items: t.services.threshold.items },
    { icon: Search,         title: t.services.electricalInspection.title, description: t.services.electricalInspection.description, items: t.services.electricalInspection.items },
    { icon: ThermometerSun, title: t.services.thermographic.title,       description: t.services.thermographic.description,       items: t.services.thermographic.items },
    { icon: ShieldCheck,    title: t.services.assessment.title,          description: t.services.assessment.description,          items: t.services.assessment.items },
    { icon: CalendarCheck,  title: t.services.compliance.title,          description: t.services.compliance.description,          items: t.services.compliance.items },
    { icon: FileText,       title: t.services.reports.title,             description: t.services.reports.description,             items: t.services.reports.items },
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">

        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 text-sm font-bold">
            {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.services.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">{t.services.description}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-400 bg-white group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
