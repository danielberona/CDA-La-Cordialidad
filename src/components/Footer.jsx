import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import logoCda from "../assets/logocda.PNG";
import { displayPhone, whatsappUrl } from "../App.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

const instagramUrl = "https://www.instagram.com/cdalacordialidad/";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#080808] py-16 text-left">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        
        {/* Brand Block */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white shrink-0">
              <img src={logoCda} alt="Logo CDA La Cordialidad" className="h-full w-full object-contain p-1" />
            </span>
            <div>
              <strong className="font-display block text-lg text-white uppercase tracking-wider">CDA La Cordialidad</strong>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FACC15]">Centro de Diagnóstico Automotor</span>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-xs leading-6 text-white/50 font-light">
            Infraestructura técnica homologada, personal altamente capacitado y procesos eficientes para garantizar la seguridad de tu vehículo en la vía.
          </p>
          
          {/* Social Icons (Squared boxes for industrial tech aesthetic) */}
          <div className="mt-6 flex gap-2">
            {[
              { label: "Facebook", href: "#", Icon: Facebook },
              { label: "Instagram", href: instagramUrl, Icon: Instagram },
              { label: "WhatsApp", href: whatsappUrl, Icon: WhatsAppIcon },
            ].map(({ label, href, Icon }) => (
              <a 
                key={label} 
                href={href} 
                target={href === "#" ? undefined : "_blank"} 
                rel="noreferrer" 
                aria-label={label} 
                className="grid h-10 w-10 place-items-center bg-white/[0.03] border border-white/10 text-white/70 transition-colors duration-200 hover:border-brand-yellow hover:text-[#FACC15] rounded-sm"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column 1 */}
        <FooterLinks title="Links rápidos" links={[
          ["Inicio", "#inicio"],
          ["Servicios", "#servicios"],
          ["Nosotros", "#nosotros"],
          ["Identidad", "#identidad"],
          ["Galería", "#galeria"],
          ["Contacto", "#contacto"],
        ]} />

        {/* Links Column 2 */}
        <FooterLinks title="Servicios" links={[
          ["SOAT", "#servicios"],
          ["Revisión técnico mecánica", "#servicios"],
          ["Diagnóstico preventivo", "#servicios"],
          ["Vehículos livianos", "#servicios"],
          ["Vehículos pesados", "#servicios"],
        ]} />

        {/* Contact info column */}
        <div>
          <h3 className="mb-6 text-xs font-black uppercase tracking-[0.18em] text-white">Ubicación &amp; Contacto</h3>
          <div className="space-y-4 text-xs text-white/50 leading-relaxed font-light">
            <p className="flex items-start gap-2">
              <MapPin className="text-[#FACC15] shrink-0" size={16} />
              <span>Cartagena, Transversal 54 #74-66</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-[#FACC15] shrink-0" size={16} />
              <a href={`tel:+57${displayPhone.replaceAll(" ", "")}`} className="hover:text-[#FACC15] transition-colors duration-200">
                {displayPhone}
              </a>
            </p>
            <div>
              <span className="block font-bold text-white/70 mb-1">Horarios:</span>
              <p className="space-y-0.5">
                <span>Lun-Sáb: 6:00 AM - 6:00 PM</span>
                <span className="block">Dom y festivos: 8:00 AM - 2:00 PM</span>
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="container-page mt-12 border-t border-white/[0.08] pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/30 font-semibold tracking-wider uppercase">
        <span>© 2026 CDA La Cordialidad. Todos los derechos reservados.</span>
        <span>Cartagena, Colombia</span>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="mb-6 text-xs font-black uppercase tracking-[0.18em] text-white">{title}</h3>
      <ul className="space-y-3 text-xs text-white/50 font-light">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="transition-colors duration-200 hover:text-[#FACC15]">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
