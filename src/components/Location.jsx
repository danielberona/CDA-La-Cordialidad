import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { displayPhone } from "../App.jsx";
import { motion } from "framer-motion";

const mapUrl = "https://www.google.com/maps?q=Transversal%2054%20%2374-66%20Cartagena%20Colombia&output=embed";
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Transversal+54+%2374-66+Cartagena+Colombia";

export default function Location() {
  return (
    <section id="contacto" className="relative overflow-hidden w-full bg-[#080808] border-t border-white/[0.06]">
      <div className="flex flex-col lg:flex-row min-h-[580px]">
        
        {/* LEFT PANEL: Map panel (60% on desktop, full width on mobile) */}
        <div className="relative w-full lg:w-[58%] min-h-[350px] lg:min-h-[580px] bg-[#111]">
          <iframe
            title="Mapa de CDA La Cordialidad"
            src={mapUrl}
            className="absolute inset-0 h-full w-full border-0"
            style={{
              filter: "grayscale(1) invert(0.92) contrast(0.95)",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* RIGHT PANEL: Info block (42% on desktop) */}
        <div className="flex flex-col justify-between bg-[#0f0f0f] w-full lg:w-[42%] p-8 sm:p-12 border-l border-white/[0.06]">
          
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FACC15]">Ubicación</span>
            <h2 className="font-display text-3xl font-black uppercase text-white mt-3 mb-8 tracking-wider">
              Ubicación &amp; Contacto
            </h2>

            <div className="space-y-6">
              
              {/* Address Item */}
              <div className="flex items-start gap-4 border-b border-white/[0.05] pb-6">
                <span className="flex h-7 w-7 items-center justify-center bg-[#FACC15] text-brand-black shrink-0">
                  <MapPin size={14} className="stroke-[2.5]" />
                </span>
                <div>
                  <strong className="block text-xs font-black uppercase tracking-wider text-white">Dirección</strong>
                  <span className="mt-1 block text-sm text-white/50">Cartagena, Transversal 54 #74-66</span>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4 border-b border-white/[0.05] pb-6">
                <a 
                  href={`tel:+57${displayPhone.replaceAll(" ", "")}`}
                  className="flex items-start gap-4 no-underline group"
                >
                  <span className="flex h-7 w-7 items-center justify-center bg-[#FACC15] text-brand-black shrink-0 transition-colors duration-200 group-hover:bg-yellow-300">
                    <Phone size={14} className="stroke-[2.5]" />
                  </span>
                  <div>
                    <strong className="block text-xs font-black uppercase tracking-wider text-white group-hover:text-[#FACC15] transition-colors duration-200">
                      Teléfono
                    </strong>
                    <span className="mt-1 block text-sm text-white/50 group-hover:text-white/80 transition-colors duration-200">
                      {displayPhone}
                    </span>
                  </div>
                </a>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 items-center justify-center bg-[#FACC15] text-brand-black shrink-0">
                  <Clock size={14} className="stroke-[2.5]" />
                </span>
                <div className="w-full">
                  <strong className="block text-xs font-black uppercase tracking-wider text-white mb-2">Horarios de atención</strong>
                  <div className="grid grid-cols-2 gap-2 text-xs text-white/50">
                    <div>
                      <span className="block font-bold text-white/70">Lunes a Sábado:</span>
                      <span className="block">6:00 AM - 6:00 PM</span>
                    </div>
                    <div>
                      <span className="block font-bold text-white/70">Domingos y Festivos:</span>
                      <span className="block">8:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Call to Action: Como Llegar */}
          <div className="mt-12">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-[#FACC15] text-[#0F0F0F] px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-yellow-300 transition duration-200"
            >
              <Navigation size={14} className="stroke-[2.5]" />
              Cómo Llegar
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
