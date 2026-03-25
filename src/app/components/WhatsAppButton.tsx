import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logoImage from "@/assets/logo.png";
import { useLanguage } from '../contexts/LanguageContext';

const WA_MESSAGES = {
  en: "🏢 Is your building due for recertification? Get a FREE quote in under 24h — before the deadline hits.",
  es: "🏢 ¿Tu edificio necesita recertificación? Obtén una cotización GRATIS en menos de 24h — antes de que venza el plazo.",
};

const WA_LINK = {
  en: "https://wa.me/13055707589?text=Hello!%20I%20need%20information%20about%20Building%20Recertification%20%2F%20Milestone%20Inspection.",
  es: "https://wa.me/13055707589?text=%C2%A1Hola!%20Necesito%20informaci%C3%B3n%20sobre%20Recertificaci%C3%B3n%20de%20Edificio%20%2F%20Milestone%20Inspection.",
};

export function WhatsAppButton() {
  const { language } = useLanguage();
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Auto-show bubble after 3 s, only once
  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBubble(false);
    setDismissed(true);
  };

  const handleWaClick = () => {
    setShowBubble(false);
  };

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">

      {/* Chat bubble */}
      {showBubble && (
        <div className="relative mb-1 w-72 sm:w-80 bg-white rounded-2xl rounded-br-sm shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 pt-3 pb-2 border-b border-gray-100">
            <div className="relative shrink-0">
              <img
                src={logoImage}
                alt="USDC Consulting"
                className="w-9 h-9 rounded-full object-contain bg-slate-100 p-0.5"
              />
              {/* Online dot */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 leading-tight">USDC Consulting</p>
              <p className="text-xs text-gray-500">Building Recertification Expert</p>
            </div>
            <button
              onClick={handleDismiss}
              className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Message body */}
          <div className="px-4 py-3">
            <div className="bg-green-50 border border-green-100 rounded-xl rounded-tl-sm px-3 py-2.5">
              <p className="text-sm text-gray-800 leading-snug">
                {WA_MESSAGES[language]}
              </p>
            </div>
            <p className="text-[10px] text-gray-400 mt-1.5 text-right">
              {language === 'es' ? 'Responde en minutos' : 'Replies in minutes'} ✓✓
            </p>
          </div>

          {/* CTA row */}
          <div className="px-4 pb-3">
            <a
              href={WA_LINK[language]}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWaClick}
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2 rounded-xl transition-colors"
            >
              {language === 'es' ? '💬 Escribir ahora' : '💬 Chat now'}
            </a>
          </div>

          {/* Tail triangle */}
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45 shadow-sm" />
        </div>
      )}

      {/* WhatsApp FAB */}
      <a
        href={WA_LINK[language]}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWaClick}
        aria-label="Contact via WhatsApp"
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />

        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 relative z-10" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Unread badge — hidden once bubble shown */}
        {!showBubble && !dismissed && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[9px] font-bold text-white flex items-center justify-center">
            1
          </span>
        )}
      </a>
    </div>
  );
}
