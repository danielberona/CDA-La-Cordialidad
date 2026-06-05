import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Identidad from "./components/Identidad.jsx";
import Location from "./components/Location.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export const phone = "3003935597";
export const displayPhone = "300 393 5597";
export const whatsappUrl = `https://wa.me/57${phone}?text=${encodeURIComponent(
  "Hola, quiero cotizar mi revisión técnico mecánica, emisiones contaminantes o SOAT en CDA La Cordialidad",
)}`;

export default function App() {
  return (
    <div className="relative min-h-screen lg:min-h-[100dvh] overflow-x-hidden overflow-y-auto bg-[#080808] flex flex-col justify-between pt-0 lg:pt-24 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Identidad />
        <Location />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
