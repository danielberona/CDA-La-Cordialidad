import { motion } from "framer-motion";
import { whatsappUrl } from "../App.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-lg bg-[#25D366] text-white shadow-[0_0_24px_rgba(37,211,102,.45)] border border-white/20 transition hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_0_32px_rgba(37,211,102,.65)]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
