import { useEffect, useState } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoCda from "../assets/logocda.PNG";
import { whatsappUrl } from "../App.jsx";

const links = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Nosotros", "#nosotros"],
  ["Identidad", "#identidad"],
  ["Galería", "#galeria"],
  ["Contacto", "#contacto"],
];

function NavLink({ label, href, onHover, isHovered }) {
  return (
    <a
      href={href}
      onMouseEnter={() => onHover(href)}
      onMouseLeave={() => onHover(null)}
      className="relative px-5 py-3 text-sm font-bold tracking-wider text-white/60 transition-colors duration-200 hover:text-white no-underline uppercase"
    >
      {label}
      {isHovered && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute inset-x-5 bottom-1 h-[2px] bg-[#FACC15]"
          initial={false}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
    </a>
  );
}

const mobileItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.23, 1, 0.32, 1] },
  }),
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-page flex items-center justify-between gap-6">
          {/* Logo brand */}
          <a
            href="#inicio"
            className="group flex items-center gap-2 no-underline"
            aria-label="CDA La Cordialidad"
          >
            <span
              className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white transition-all duration-300
                         group-hover:shadow-[0_0_18px_4px_rgba(250,204,21,0.45)]"
            >
              <img
                src={logoCda}
                alt="Logo CDA La Cordialidad"
                className="h-full w-full object-contain p-[2px]"
              />
            </span>
            <span className="min-w-0 leading-none">
              <span
                className="block whitespace-nowrap text-[13px] font-black tracking-[-0.08em] text-white sm:text-[15px] uppercase font-display"
              >
                CDA La Cordialidad
              </span>
              <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.11em] text-[#FACC15]/85">
                Centro de Diagnóstico Automotor
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map(([label, href]) => (
              <NavLink
                key={href}
                label={label}
                href={href}
                onHover={setHoveredHref}
                isHovered={hoveredHref === href}
              />
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-lg bg-[#FACC15] px-6 py-3 text-xs font-black tracking-widest text-[#0F0F0F] transition-all duration-200
                       hover:bg-yellow-300 active:scale-[0.97] lg:inline-flex no-underline uppercase"
          >
            <MessageCircle size={14} />
            Contáctanos
            <ArrowUpRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </a>

          {/* Mobile hamburger menu */}
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2.5 text-white transition-colors duration-200 hover:border-[#FACC15]/30 hover:bg-white/8 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col bg-[#080808]/98 backdrop-blur-2xl lg:hidden"
          >
            {/* Grid pattern texture */}
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
            
            {/* Glow shadow */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 380,
                height: 380,
                background: "radial-gradient(circle, rgba(250,204,21,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Header mirror spacer */}
            <div className="flex items-center justify-between px-6 py-5">
              <a
                href="#inicio"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 no-underline"
              >
                <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white">
                  <img
                    src={logoCda}
                    alt="Logo"
                    className="h-full w-full object-contain p-[2px]"
                  />
                </span>
                <span className="min-w-0 leading-none">
                  <span
                    className="block whitespace-nowrap text-[13px] font-black tracking-[-0.08em] text-white uppercase font-display"
                  >
                    CDA La Cordialidad
                  </span>
                  <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.11em] text-[#FACC15]/85">
                    Centro de Diagnóstico Automotor
                  </span>
                </span>
              </a>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2.5 text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="relative z-10 flex flex-1 flex-col justify-center px-8">
              <div className="flex flex-col gap-1">
                {links.map(([label, href], i) => (
                  <motion.a
                    key={href}
                    href={href}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-white/[0.05] py-4.5 no-underline"
                  >
                    <span className="text-2xl font-black tracking-tight text-white transition-colors duration-200 group-hover:text-[#FACC15] uppercase font-display">
                      {label}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-white/20 transition-all duration-200 group-hover:text-[#FACC15] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                custom={links.length}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setOpen(false)}
                className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-[#FACC15] px-6 py-4 text-sm font-black tracking-widest text-[#0F0F0F] active:scale-[0.97] no-underline uppercase"
              >
                <MessageCircle size={16} />
                Contáctanos
              </motion.a>
            </nav>

            <div className="relative z-10 px-8 pb-8 pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Cartagena, Colombia · Urb Portal de la terminal Mz A D 41H 74 66
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
