import { Award, CalendarDays, Cpu, MapPinned, ShieldCheck, Timer, Wrench } from "lucide-react";
import aboutImage from "../assets/imagencda8.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── data ────────────────────────────────────────────────────────────────── */
const benefits = [
  [Timer,       "Atención rápida",       "Flujo de revisión optimizado para reducir tiempos de espera."],
  [Award,       "Técnicos certificados", "Equipo capacitado para revisión, diagnóstico y asesoría."],
  [Cpu,         "Tecnología moderna",    "Equipos de medición y diagnóstico para resultados confiables."],
  [Wrench,      "Equipos especializados","Infraestructura preparada para vehículos livianos y pesados."],
  [MapPinned,   "Excelente ubicación",   "Cartagena, Transversal 54 #74-66, con acceso conveniente."],
  [CalendarDays,"Lunes a domingo",       "Horario amplio incluyendo domingos y festivos."],
];

/* ─── animation variants ──────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

/* ─── benefit row ─────────────────────────────────────────────────────────── */
function BenefitRow({ Icon, title, text, isLast }) {
  return (
    <motion.div
      variants={itemVariants}
      className={`flex items-start gap-4 py-4 ${!isLast ? "border-b border-black/[0.07]" : ""}`}
    >
      {/* yellow square icon — sharp corners */}
      <div
        className="flex shrink-0 items-center justify-center bg-[#FACC15]"
        style={{ width: 32, height: 32 }}
      >
        <Icon size={16} strokeWidth={2.5} color="#0F0F0F" />
      </div>

      <div className="min-w-0">
        <strong
          className="block font-black text-[#0F0F0F] text-sm leading-snug"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          {title}
        </strong>
        <span className="mt-0.5 block text-xs leading-5 text-zinc-500">{text}</span>
      </div>
    </motion.div>
  );
}

/* ─── main section ────────────────────────────────────────────────────────── */
export default function About() {
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, margin: "-80px" });

  // split 6 benefits into two columns of 3
  const col1 = benefits.slice(0, 3);
  const col2 = benefits.slice(3, 6);

  return (
    <section
      id="nosotros"
      ref={ref}
      className="overflow-hidden"
      style={{ background: "#f5f5f5", color: "#0a0a0a" }}
    >
      {/* ── outer flex: image bleeds left, content right ── */}
      <div className="flex flex-col lg:flex-row lg:min-h-[640px]">

        {/* ── LEFT: image column, bleeds to edge ── */}
        <motion.div
          className="relative lg:w-[45%] shrink-0"
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* image fills full column height */}
          <img
            src={aboutImage}
            alt="Instalaciones de CDA La Cordialidad"
            loading="lazy"
            className="h-72 w-full object-cover lg:h-full"
            style={{ display: "block" }}
          />

          {/* certification badge — bottom-left overlay */}
          <div
            className="absolute bottom-6 left-6 bg-[#FACC15] px-4 py-3 shadow-lg"
            style={{ boxShadow: "0 8px 32px rgba(250,204,21,0.35)" }}
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={24} color="#0F0F0F" strokeWidth={2.5} />
              <span>
                <strong
                  className="block text-sm font-black text-[#0F0F0F]"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  Certificación
                </strong>
                <span className="text-xs font-bold text-[#0F0F0F]/80">
                  Servicio garantizado
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: content column ── */}
        <div className="flex flex-col justify-center px-8 py-16 lg:w-[55%] lg:px-14 lg:py-20">

          {/* eyebrow tag */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="inline-block self-start rounded-full bg-[#0F0F0F] px-4 py-1.5 text-xs font-bold tracking-widest text-[#FACC15] uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            ¿Por qué elegirnos?
          </motion.span>

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="mt-5 font-black text-[#0a0a0a]"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            Confianza y tecnología al servicio de tu vehículo
          </motion.h2>

          {/* sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.23, 1, 0.32, 1] }}
            className="mt-5 text-sm leading-7 text-zinc-500 max-w-lg"
          >
            CDA La Cordialidad combina procesos ágiles, personal certificado y una experiencia de
            atención clara para que cada conductor salga con seguridad.
          </motion.p>

          {/* thin yellow divider */}
          <motion.div
            className="mt-8 mb-2 h-[2px] w-10 bg-[#FACC15]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          />

          {/* benefits: 2-column list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-2 grid grid-cols-1 gap-x-10 sm:grid-cols-2"
          >
            {/* column 1 */}
            <div>
              {col1.map(([Icon, title, text], i) => (
                <BenefitRow
                  key={title}
                  Icon={Icon}
                  title={title}
                  text={text}
                  isLast={i === col1.length - 1}
                />
              ))}
            </div>

            {/* column 2 */}
            <div>
              {col2.map(([Icon, title, text], i) => (
                <BenefitRow
                  key={title}
                  Icon={Icon}
                  title={title}
                  text={text}
                  isLast={i === col2.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
