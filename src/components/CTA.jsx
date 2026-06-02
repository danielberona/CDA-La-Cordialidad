import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { displayPhone, whatsappUrl } from "../App.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

export default function CTA() {
  return (
    <section className="relative overflow-hidden w-full border-t border-b border-white/[0.08]">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        
        {/* Left Side: Dark background block */}
        <div className="flex flex-col justify-center bg-[#0a0a0a] lg:w-1/2 p-8 sm:p-12 lg:p-16">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FACC15]">Escríbenos o cotiza</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-[0.95] mt-4 tracking-tighter">
              Tu Revisión o SOAT
            </h2>
            <p className="mt-6 text-sm text-white/50 font-light leading-relaxed">
              Mantenemos tu documentación técnica al día y tu vehículo en condiciones seguras de circulación. Escríbenos para cotizar revisión técnico mecánica, emisiones contaminantes o SOAT.
            </p>
          </div>
        </div>

        {/* Right Side: Yellow background block */}
        <div className="relative flex flex-col justify-center bg-brand-yellow lg:w-1/2 p-8 sm:p-12 lg:p-16 text-brand-black">
          {/* Diagonal separator styling via absolute overlay */}
          <div 
            className="absolute top-0 bottom-0 left-[-30px] w-[60px] bg-brand-yellow hidden lg:block"
            style={{
              transform: "skewX(-6deg)",
              transformOrigin: "top left"
            }}
          />

          <div className="relative z-10 max-w-xl">
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-brand-black mb-4">
              ¿Listo para circular seguro?
            </h3>
            <p className="text-sm font-semibold text-brand-black/75 mb-8 max-w-md">
              Tu vehículo al día, tu documentación en regla y una atención clara para que todo sea más simple.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F0F0F] text-white px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition duration-200"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Escríbenos por WhatsApp
              </a>
              <a
                href={`tel:+57${displayPhone.replaceAll(" ", "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-black/20 bg-white/70 text-[#0F0F0F] px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition duration-200"
              >
                <Phone size={14} className="stroke-[2.5]" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
