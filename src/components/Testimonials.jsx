import { Star } from "lucide-react";
import { fadeUp, motion, stagger } from "./Motion.jsx";

const testimonials = [
  [
    "Sadrax Martinez",
    "Usuario de Google",
    "CDA La Cordialidad es un sitio donde puedes adquirir tu SOAT y tecnomecanica pagando con Addi. Rapido, bueno y seguro.",
    "Hace 4 meses",
  ],
  [
    "Refrigeracion y Aislamientos Arnedo S.A.S.",
    "Local Guide",
    "Excelente servicio.",
    "Hace 4 años",
  ],
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32">
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.03] z-0" />

      <div className="container-page relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="h-[2px] w-12 bg-[#FACC15] mb-5" />
          <h2 className="font-display text-4xl font-black tracking-tight text-white uppercase sm:text-5xl">
            Opinión de Conductores
          </h2>
          <p className="mt-4 max-w-lg text-sm text-white/50 font-light">
            Nuestros clientes nos eligen por la agilidad y transparencia de nuestros técnicos. Opiniones reales publicadas en Google.
          </p>
        </div>

        {/* Large Cinematic Full-width Quotes */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 max-w-5xl"
        >
          {testimonials.map(([name, role, text, date], index) => (
            <motion.article
              key={name}
              variants={fadeUp}
              className="relative border-b border-white/[0.06] pb-16 last:border-0 last:pb-0"
            >
              {/* Giant decorative quotation mark */}
              <span className="absolute left-[-20px] top-[-50px] font-display text-[10rem] text-[#FACC15]/10 select-none pointer-events-none">
                “
              </span>

              <div className="relative z-10 pl-6 md:pl-10">
                {/* Stars and Date info row */}
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <div className="flex gap-0.5 text-brand-yellow">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} size={15} className="fill-brand-yellow stroke-[1.5]" />
                    ))}
                  </div>
                  <span className="inline-block border border-[#FACC15]/30 bg-[#FACC15]/[0.06] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#FACC15]">
                    {date}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90 max-w-4xl italic">
                  "{text}"
                </p>

                {/* Author Block */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center bg-[#FACC15] text-[#0f0f0f] text-sm font-black uppercase">
                    {name[0]}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-black tracking-wider text-white uppercase">{name}</h4>
                    <span className="text-xs text-white/40 uppercase tracking-widest font-semibold">{role}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
