import { Car, ClipboardCheck, Headphones, ScanLine, ShieldCheck, Truck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── data ────────────────────────────────────────────────────────────────── */
const services = [
  [ShieldCheck,      "SOAT",                    "Tramitación rápida del Seguro Obligatorio de Accidentes de Tránsito con acompañamiento claro."],
  [ClipboardCheck,   "Revisión Técnico Mecánica","Proceso certificado para circular con tranquilidad y cumplir la normativa colombiana."],
  [ScanLine,         "Diagnóstico Preventivo",   "Detección temprana de fallas antes de que se conviertan en reparaciones costosas."],
  [Car,              "Vehículos Livianos",        "Atención especializada para autos particulares, camperos y vehículos de uso diario."],
  [Truck,            "Vehículos Pesados",         "Revisión para camiones, buses y vehículos de carga con equipos especializados."],
  [Headphones,       "Asesoría Técnica",          "Orientación experta para resolver dudas sobre el estado y documentación del vehículo."],
];

/* ─── animation variants ──────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

/* ─── bento layout config ─────────────────────────────────────────────────── */
// Each entry: [colSpan-class-md, colSpan-class-xl]
// Row 1: SOAT (wide) | RTM (normal) | Diagnóstico (normal)
// Row 2: Livianos (normal) | Pesados (wide) | Asesoría (normal)
const spanConfig = [
  "md:col-span-2 xl:col-span-2",   // SOAT — large
  "md:col-span-1 xl:col-span-1",   // RTM
  "md:col-span-1 xl:col-span-1",   // Diagnóstico
  "md:col-span-1 xl:col-span-1",   // Livianos
  "md:col-span-2 xl:col-span-2",   // Pesados — large
  "md:col-span-1 xl:col-span-1",   // Asesoría
];

/* ─── single card ─────────────────────────────────────────────────────────── */
function ServiceCard({ Icon, title, text, span, index }) {
  const isWide = span.includes("col-span-2");

  return (
    <motion.article
      variants={cardVariants}
      whileHover="hovered"
      initial="rest"
      animate="rest"
      className={`group relative flex flex-col overflow-hidden border border-white/[0.07] bg-[#111] p-7 ${span} transition-colors duration-300 hover:border-[#FACC15]/50`}
      style={{ minHeight: isWide ? "260px" : "220px" }}
    >
      {/* animated yellow top bar */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-[#FACC15]"
        variants={{
          rest:    { scaleX: 0, transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] } },
          hovered: { scaleX: 1, transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } },
        }}
      />

      {/* icon square */}
      <div
        className="mb-6 flex items-center justify-center bg-[#FACC15]"
        style={{ width: 48, height: 48, flexShrink: 0 }}
      >
        <Icon size={22} strokeWidth={2.4} color="#0F0F0F" />
      </div>

      {/* title */}
      <h3
        className="font-black text-white leading-tight"
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: isWide ? "1.5rem" : "1.2rem",
        }}
      >
        {title}
      </h3>

      {/* description */}
      <p className="mt-3 text-sm leading-relaxed text-white/55">{text}</p>

      {/* card index — decorative bottom-right */}
      <span
        className="absolute bottom-5 right-6 font-black tabular-nums text-white/[0.05] select-none"
        style={{ fontSize: "4rem", fontFamily: "'Archivo Black', sans-serif", lineHeight: 1 }}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.article>
  );
}

/* ─── main section ────────────────────────────────────────────────────────── */
export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "#0a0a0a",
        /* scan-line texture */
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)",
      }}
    >
      {/* decorative oversized number */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-black leading-none text-white/[0.03]"
        style={{
          fontSize: "20rem",
          fontFamily: "'Archivo Black', sans-serif",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        06
      </span>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">

        {/* ── section header — left-aligned ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16 max-w-2xl"
        >
          {/* thin yellow accent bar */}
          <div className="mb-6 h-[3px] w-12 bg-[#FACC15]" />

          <h2
            className="font-black text-white"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Soluciones automotrices<br />
            con precisión técnica
          </h2>

          <p className="mt-5 text-base leading-7 text-white/55 max-w-xl">
            Un ecosistema de servicios pensado para ahorrar tiempo, reducir riesgos y mantener tu
            vehículo listo para la vía.
          </p>
        </motion.div>

        {/* ── asymmetric bento grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-3 md:grid-cols-3 xl:grid-cols-3"
        >
          {services.map(([Icon, title, text], i) => (
            <ServiceCard
              key={title}
              Icon={Icon}
              title={title}
              text={text}
              span={spanConfig[i]}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
