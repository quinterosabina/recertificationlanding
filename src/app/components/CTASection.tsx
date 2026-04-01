import { useState } from "react";
import { Phone, Mail, Building, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function CTASection() {
  const { t } = useLanguage();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", buildingAddress: "", message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.us2.make.com/pxqlunbva6m96ntmwn5n83s5b2qe7ubp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.buildingAddress,
          details: formData.message
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "", buildingAddress: "", message: "" });
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could add error handling here, like showing an error message
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={sectionRef as React.RefObject<HTMLElement>} className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4 text-sm font-bold">
              <CheckCircle2 className="h-4 w-4" />
              {t.cta.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.cta.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              {t.cta.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-900 font-medium mb-2 block">{t.cta.formName} *</Label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-900 font-medium mb-2 block">{t.cta.formEmail} *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 font-medium mb-2 block">{t.cta.formPhone} *</Label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="(305) 123-4567" className="w-full" />
                  </div>
                  <div>
                    <Label htmlFor="buildingAddress" className="text-gray-900 font-medium mb-2 block">{t.cta.formBuilding} *</Label>
                    <Input id="buildingAddress" name="buildingAddress" type="text" required value={formData.buildingAddress} onChange={handleChange} placeholder="123 Ocean Drive, Miami Beach, FL 33139" className="w-full" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-900 font-medium mb-2 block">{t.cta.formMessage}</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Describa brevemente su situación, edad del edificio, número de pisos, etc." rows={4} className="w-full resize-none" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-bold">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.cta.formSubmitting}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 justify-center">
                        <Send className="h-5 w-5" />
                        {t.cta.formSubmit}
                      </span>
                    )}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">{t.cta.formDisclaimer}</p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.cta.successTitle}</h3>
                  <p className="text-gray-700 mb-2">{t.cta.successMessage}</p>
                  <p className="text-sm text-blue-600">{t.cta.successEmail}</p>
                </div>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Call block */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                <Phone className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t.cta.phoneTitle}</h3>
                <p className="text-blue-50 mb-6">{t.cta.phoneDescription}</p>
                <Button size="lg" variant="outline" className="w-full bg-white text-blue-600 hover:bg-blue-50 border-white font-bold text-lg py-6" asChild>
                  <a href="tel:+13055707589" className="flex items-center gap-3 justify-center">
                    <Phone className="h-6 w-6" />
                    {t.nav.phone}
                  </a>
                </Button>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg text-center relative overflow-hidden">
                {/* subtle background */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top_right,_#2563eb_0%,_transparent_70%)]" />

                {/* Badges row */}
                <div className="flex items-center justify-center gap-6 mb-6">
                  {/* Badge 1 – Customer Satisfaction */}
                  <div className="flex items-center justify-center w-28 h-28">
                    <img
                      src="https://drive.google.com/thumbnail?id=1fp0t2zdfaEoqUGHKiLN_2tqpH8-Z0TxW&sz=w300"
                      alt="Customer Satisfaction 100% Guarantee"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>

                  {/* Badge 2 – Approved */}
                  <div className="flex items-center justify-center w-28 h-28">
                    <img
                      src="https://drive.google.com/thumbnail?id=1kB8fJ_N4rBBAqtPUwtqME7fT0Z8II9d9&sz=w300"
                      alt="Approved Certification Badge"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-2xl font-black text-amber-700 uppercase leading-tight mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {t.authority.badgeHeadline}
                </h3>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-amber-200" />
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="flex-1 h-px bg-amber-200" />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.authority.badgeDescription}
                </p>
              </div>

              {/* Urgency note */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{t.cta.urgencyTitle}</h4>
                    <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: t.cta.urgencyText }} />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}