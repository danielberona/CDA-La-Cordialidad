import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import cdaMain from "../assets/cdalacordialidad.jpeg";
import cdaImage1 from "../assets/imagencda1.JPG";
import cdaImage4 from "../assets/imagencda4.JPG";
import cdaImage5 from "../assets/imagencda5.JPG";
import cdaImage6 from "../assets/imagencda6.JPG";
import cdaImage9 from "../assets/imagencda9.PNG";

const itemsRow1 = [
  { title: "CDA La Cordialidad", src: cdaMain },
  { title: "Instalaciones", src: cdaImage1 },
  { title: "Líneas de revisión", src: cdaImage6 },
];

const itemsRow2 = [
  { title: "Diagnóstico preventivo", src: cdaImage4, flexClass: "lg:col-span-4" },
  { title: "Vehículos en revisión", src: cdaImage9, flexClass: "lg:col-span-8" },
  { title: "Atención al cliente", src: cdaImage5, flexClass: "lg:col-span-12" } // Add as full width/taller on bottom or adjust splits
];

const allItems = [
  { title: "CDA La Cordialidad", src: cdaMain },
  { title: "Instalaciones", src: cdaImage1 },
  { title: "Líneas de revisión", src: cdaImage6 },
  { title: "Diagnóstico preventivo", src: cdaImage4, span: "lg:col-span-5" },
  { title: "Vehículos en revisión", src: cdaImage9, span: "lg:col-span-7" },
  { title: "Atención al cliente", src: cdaImage5, span: "lg:col-span-12" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="galeria" className="relative overflow-hidden bg-[#080808] py-24 md:py-32">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.04] z-0" />

      <div className="container-page relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.06] pb-8">
          <div>
            <div className="h-[2px] w-12 bg-[#FACC15] mb-5" />
            <h2 className="font-display text-4xl font-black tracking-tight text-white uppercase sm:text-5xl">
              Equipamiento &amp; Infraestructura
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 font-light">
              Nuestras instalaciones cuentan con tecnología de punta y amplias líneas de inspección certificadas para garantizar resultados de alta precisión.
            </p>
          </div>
          <span className="text-[6rem] leading-none font-display text-white/[0.02] select-none hidden md:block">
            VISUAL
          </span>
        </div>

        {/* Film-strip layout (Grid with sharp borders, no rounded corners) */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          
          {/* Top Row: 3 columns (16:9 ratios) */}
          {allItems.slice(0, 3).map((item) => (
            <motion.button
              type="button"
              key={item.title}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 group relative w-full overflow-hidden border border-white/[0.08] bg-[#0c0c0c] text-left outline-none cursor-pointer"
              style={{ aspectRatio: "16/10" }}
            >
              <div className="absolute inset-0 z-10 transition-all duration-300 group-hover:ring-2 group-hover:ring-brand-yellow/60" />
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
              
              {/* Content sliding up */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 z-20 translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FACC15] mb-1 block">CDA Cordialidad</span>
                  <h3 className="text-base font-black text-white uppercase tracking-wider">{item.title}</h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FACC15] text-brand-black">
                  <Maximize2 size={16} className="stroke-[2.5]" />
                </span>
              </div>
            </motion.button>
          ))}

          {/* Bottom Row: 40/60 split (5 cols and 7 cols) */}
          {allItems.slice(3, 5).map((item) => (
            <motion.button
              type="button"
              key={item.title}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${item.span} group relative w-full overflow-hidden border border-white/[0.08] bg-[#0c0c0c] text-left outline-none cursor-pointer`}
              style={{ aspectRatio: "18/10" }}
            >
              <div className="absolute inset-0 z-10 transition-all duration-300 group-hover:ring-2 group-hover:ring-brand-yellow/60" />
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
              
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 z-20 translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FACC15] mb-1 block">CDA Cordialidad</span>
                  <h3 className="text-base font-black text-white uppercase tracking-wider">{item.title}</h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FACC15] text-brand-black">
                  <Maximize2 size={16} className="stroke-[2.5]" />
                </span>
              </div>
            </motion.button>
          ))}

          {/* Full bleed bottom photo */}
          {allItems.slice(5, 6).map((item) => (
            <motion.button
              type="button"
              key={item.title}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${item.span} group relative w-full overflow-hidden border border-white/[0.08] bg-[#0c0c0c] text-left outline-none cursor-pointer`}
              style={{ aspectRatio: "24/8" }}
            >
              <div className="absolute inset-0 z-10 transition-all duration-300 group-hover:ring-2 group-hover:ring-brand-yellow/60" />
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
              
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 z-20 translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FACC15] mb-1 block">CDA Cordialidad</span>
                  <h3 className="text-base font-black text-white uppercase tracking-wider">{item.title}</h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FACC15] text-brand-black">
                  <Maximize2 size={16} className="stroke-[2.5]" />
                </span>
              </div>
            </motion.button>
          ))}

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/95 p-5 backdrop-blur-2xl"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              aria-label="Cerrar galería"
              className="absolute right-6 top-6 bg-white p-3 text-brand-black hover:bg-[#FACC15] transition-colors duration-200"
              onClick={() => setSelected(null)}
            >
              <X size={20} className="stroke-[2.5]" />
            </button>
            <motion.img
              src={selected.src}
              alt={selected.title}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="max-h-[85vh] max-w-5xl border border-white/10 object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
