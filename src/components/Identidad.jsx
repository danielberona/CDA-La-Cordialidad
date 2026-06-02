import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Telescope,
  BadgeCheck,
  ListChecks,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const tabs = [
  {
    id: "mision",
    icon: Target,
    label: "Misión",
    headline: "Nuestra Misión",
    accent: "bg-brand-yellow text-brand-black",
    body: "El CDA LA CORDIALIDAD S.A.S. presta el servicio de Revisión Técnico Mecánica y de Emisiones Contaminantes, para motocicletas, vehículos livianos y pesados según la normatividad vigente, para ello cuenta con personal competente, equipos de alta tecnología y adecuadas instalaciones buscando siempre la satisfacción de nuestros clientes, con el fin de contribuir a la disminución de la accidentalidad vial y la contaminación ambiental.",
    stat: null,
  },
  {
    id: "vision",
    icon: Telescope,
    label: "Visión",
    headline: "Nuestra Visión",
    accent: "bg-brand-yellow text-brand-black",
    body: "CDA LA CORDIALIDAD S.A.S, a mediano plazo ser reconocidos como uno de los mejores y más confiables Centros de Diagnóstico Automotor del país, apoyados en nuestra amplia experiencia, brindando un excelente servicio con los más altos estándares de calidad, logrando la mayor preferencia de nuestros clientes.",
    stat: null,
  },
  {
    id: "calidad",
    icon: BadgeCheck,
    label: "Política de Calidad",
    headline: "Política de Calidad",
    accent: "bg-brand-yellow text-brand-black",
    body: "El CDA LA CORDIALIDAD S.A.S comprometido con una excelente prestación del servicio de Revisión Técnico-mecánica y de Emisiones Contaminantes de manera confiable, según los requisitos establecidos en las normas vigentes, contando para ello tanto con personal competente, comprometido y a gusto con la labor que desempeña, con tecnología acorde con el proceso, actualizada y confiable, contribuyendo con la seguridad de nuestros clientes y la preservación del medio ambiente; busca el mejoramiento de los procesos de gestión y ser reconocidos por nuestros clientes como símbolo de garantía del buen estado de su vehículo; comprometidos con la competencia, imparcialidad, y operación consistente.",
    stat: null,
  },
  {
    id: "objetivos",
    icon: ListChecks,
    label: "Objetivos de Calidad",
    headline: "Objetivos de Calidad",
    accent: "bg-brand-yellow text-brand-black",
    items: [
      "Brindar un excelente servicio a nuestros clientes de manera confiable.",
      "Cumplir con los requisitos establecidos en las normas vigentes.",
      "Contribuir a la protección y conservación del medio ambiente y garantizar la seguridad de nuestros clientes.",
      "Mantener un personal competente, comprometido y motivado, enfocado al mejoramiento de los procesos y actualizado según marco normativo vigente.",
      "Tecnología acorde con el proceso, actualizada y confiable.",
      "Mejoramiento continuo de nuestros procesos de gestión.",
      "Ser reconocidos por nuestros clientes como símbolo de garantía del buen estado de su vehículo.",
      "Imparcialidad en cada uno de los procesos del sistema de gestión incluidos en el personal al momento de realizar la inspección.",
      "Operación consistente de acuerdo al alcance de la RTMYEC.",
    ],
  },
  {
    id: "formacion",
    icon: GraduationCap,
    label: "Política de Formación",
    headline: "Política de Formación",
    accent: "bg-brand-yellow text-brand-black",
    body: "Capacitar continuamente al personal responsable de la inspección y administrativo con el fin de contar con personal cada vez más competente en cada uno de los procesos del CDA, darle cumplimiento a la normatividad vigente y la satisfacción de los clientes.",
    stat: null,
  },
];

const panelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  }),
};

export default function Identidad() {
  const [active, setActive] = useState("mision");
  const current = tabs.find((t) => t.id === active);

  return (
    <section
      id="identidad"
      className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32 border-t border-white/[0.06]"
    >
      {/* Decorative background grid and ambient glows */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.03] z-0" />
      <div className="glow-yellow top-[-10%] right-[-5%] w-[450px] h-[450px]" />
      <div className="glow-yellow bottom-[-10%] left-[-5%] w-[350px] h-[350px]" />

      <div className="container-page relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16 max-w-2xl text-left"
        >
          <div className="mb-5 h-[2px] w-12 bg-brand-yellow" />
          <h2 className="font-display text-4xl font-black leading-tight text-white md:text-5xl uppercase tracking-wider">
            Identidad Corporativa
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 font-light">
            Los principios éticos y profesionales que guían cada inspección técnica, proceso interno y decisión comercial en el CDA La Cordialidad.
          </p>
        </motion.div>

        {/* Layout: Sidebar links + Content Panel */}
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          
          {/* Tab navigation */}
          <motion.nav
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-row gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-x-visible lg:pb-0"
            aria-label="Secciones de identidad corporativa"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  aria-selected={isActive}
                  role="tab"
                  className={`group relative flex shrink-0 items-center gap-3 rounded-lg px-4.5 py-4 text-left text-xs font-black uppercase tracking-wider transition-all duration-200 outline-none
                    ${
                      isActive
                        ? "bg-brand-yellow text-brand-black shadow-glow"
                        : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-brand-yellow/30 hover:bg-white/[0.06] hover:text-white"
                    }`}
                >
                  <Icon
                    size={16}
                    className={`shrink-0 ${isActive ? "text-brand-black" : "text-brand-yellow"}`}
                  />
                  <span className="whitespace-nowrap lg:whitespace-normal">{tab.label}</span>
                  {isActive && (
                    <ArrowRight
                      size={14}
                      className="ml-auto hidden shrink-0 lg:block"
                    />
                  )}
                </button>
              );
            })}
          </motion.nav>

          {/* Content panel */}
          <div className="relative min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="rounded-lg border border-white/10 bg-white/[0.03] p-8 md:p-10 text-left"
              >
                {/* Panel Header */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-yellow text-brand-black">
                    {(() => {
                      const Icon = current.icon;
                      return <Icon size={18} className="stroke-[2.5]" />;
                    })()}
                  </span>
                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-wider">
                    {current.headline}
                  </h3>
                </div>

                {/* Horizontal line divider */}
                <div className="mb-6 h-px bg-white/[0.08]" />

                {/* Body or items list */}
                {current.body && (
                  <p className="text-sm leading-8 text-white/60 max-w-[75ch] font-light">
                    {current.body}
                  </p>
                )}

                {current.items && (
                  <ul className="space-y-4">
                    {current.items.map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start gap-3"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-brand-yellow text-[9px] font-black text-brand-black"
                        >
                          {i + 1}
                        </span>
                        <span className="text-sm leading-6 text-white/60 font-light">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom stats metric grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { value: "ISO 17020", label: "Norma técnica" },
            { value: "3 clases", label: "Líneas de diagnóstico" },
            { value: "100%", label: "Técnicos calificados" },
            { value: "L – D", label: "Disponibilidad total" },
          ].map(({ value, label }, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/[0.02] px-5 py-5 text-left"
            >
              <p className="font-display text-2xl font-black text-brand-yellow uppercase">
                {value}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/35">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
