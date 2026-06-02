import { motion } from "framer-motion";

/* ─── Shared easing ─────────────────────────────────────── */
export const EASE_OUT = [0.23, 1, 0.32, 1];
export const EASE_IN_OUT = [0.77, 0, 0.175, 1];

/* ─── Reusable variants ─────────────────────────────────── */
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

/* ─── Viewport defaults ─────────────────────────────────── */
export const VIEWPORT = { once: true, amount: 0.2 };
export const VIEWPORT_STRICT = { once: true, amount: 0.4 };

/* ─── Re-export motion ──────────────────────────────────── */
export { motion };
