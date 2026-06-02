import { ArrowRight, BadgeCheck, Car, Gauge, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/imagencda2.JPG";
import { whatsappUrl } from "../App.jsx";
import { fadeUp, staggerFast } from "./Motion.jsx";

const stats = [
  ["+4000", "clientes atendidos"],
  ["Línea", "livianos y pesados"],
  ["Certificación", "vigente de calidad"],
  ["Atención", "ágil y sin esperas"],
];

const highlights = [
  [BadgeCheck, "Proceso certificado", "Inspección técnica rigurosa con acompañamiento profesional y claro."],
  [Car, "Cobertura completa", "Equipamiento premium listo para vehículos livianos, pesados y motos."],
  [Gauge, "Flujo de revisión rápido", "Sistemas optimizados para minimizar tus tiempos de espera."],
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] overflow-hidden bg-[#080808] flex flex-col justify-between pt-24">
      {/* Decorative background grid and ambient glows */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.06] z-0" />
      <div className="glow-yellow top-[-10%] left-[-10%] w-[500px] h-[500px]" />
      <div className="glow-yellow bottom-[20%] right-[-5%] w-[400px] h-[400px]" />

      <div className="container-page relative z-10 grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        
        {/* Left Column: Content */}
        <motion.div 
          variants={staggerFast} 
          initial="hidden" 
          animate="visible" 
          className="flex flex-col items-start text-left"
        >
          {/* Badge pill */}
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 border border-brand-yellow/30 bg-brand-yellow/[0.06] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-brand-yellow"
          >
            <ShieldCheck size={14} className="stroke-[2.5]" />
            CDA Certificado
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={fadeUp}
            className="font-display mt-6 max-w-2xl text-5xl font-black leading-[0.9] text-white sm:text-6xl xl:text-7xl uppercase"
          >
            Tecnología &amp; Seguridad para tu Vehículo
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-7 text-white/60 font-light"
          >
            Especialistas en revisión técnico-mecánica y de emisiones contaminantes en Cartagena.
            Contamos con personal altamente calificado y tecnología de vanguardia para garantizar un proceso ágil, transparente y confiable.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary uppercase text-xs tracking-widest">
              Agendar por WhatsApp
              <ArrowRight size={14} />
            </a>
            <a href="#servicios" className="btn-dark uppercase text-xs tracking-widest">
              Ver servicios
            </a>
          </motion.div>

          {/* Highlights (Asymmetric row list instead of standard boxes) */}
          <motion.div 
            variants={staggerFast}
            className="mt-12 w-full max-w-lg space-y-6"
          >
            {highlights.map(([Icon, title, text]) => (
              <motion.div 
                key={title} 
                variants={fadeUp} 
                className="flex gap-4 border-l-2 border-brand-yellow/60 pl-4 py-1"
              >
                <div className="flex-shrink-0 mt-0.5 text-brand-yellow">
                  <Icon size={20} className="stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">{title}</h3>
                  <p className="mt-1 text-xs text-white/50 leading-relaxed font-light">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Dramatic clipped image panel */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.95, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          <div 
            className="absolute inset-0 bg-brand-black border-l border-white/[0.08] overflow-hidden"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <img
              src={heroImage}
              alt="Instalaciones del CDA La Cordialidad"
              className="h-full w-full object-cover object-center brightness-[0.85] contrast-[1.05]"
            />
            {/* Linear dark gradient overlay over image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Full-width Stats bar at the bottom */}
      <div className="relative z-10 w-full border-t border-white/[0.08] bg-[#0c0c0c]/80 backdrop-blur-xl py-6">
        <div className="container-page grid grid-cols-2 gap-y-4 gap-x-8 sm:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={`${value}-${label}`} className="flex flex-col justify-center border-r last:border-0 border-white/[0.06] pr-4">
              <strong className="text-2xl font-black text-brand-yellow font-display uppercase tracking-tight">{value}</strong>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
