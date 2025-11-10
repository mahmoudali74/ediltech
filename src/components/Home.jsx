import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// صور الخلفية مستوحاة من إيطاليا
const images = [
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1400",

  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
];

const services = [
  {
    title: "Ristrutturazioni Chiavi in Mano",
    desc: "Gestiamo tutto: progetto, permessi, lavori e finiture con massima cura e precisione.",
    icon: "🏗️",
  },
  {
    title: "Rifacimento Bagni e Cucine",
    desc: "Design moderno, impianti efficienti e materiali resistenti per ambienti eleganti.",
    icon: "🚿",
  },
  {
    title: "Impianti Idraulici ed Elettrici",
    desc: "Installazioni sicure e manutenzioni a norma di legge.",
    icon: "💡",
  },
  {
    title: "Cartongesso e Controsoffitti",
    desc: "Soluzioni estetiche e funzionali per ogni spazio.",
    icon: "🧱",
  },
  {
    title: "Tinteggiature e Decorazioni Interne",
    desc: "Finiture di pregio, effetti decorativi e colori su misura.",
    icon: "🎨",
  },

];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white font-[Poppins] overflow-hidden">
      {/* ====== Header ====== */}
      {/* ====== Header ====== */}
      <header className="fixed z-50 flex items-center justify-between w-full px-10 py-4 transition-all duration-500 bg-transparent backdrop-blur-sm">

        {/* Logo */}
        <img
  src="\assets\photo_5800903862616001287_y-removebg-preview.png"
  alt="EDIL TECH Logo"
  className="object-contain w-32 h-32"
/>

        {/* Navigation */}
        <nav className="hidden space-x-10 text-base tracking-wider text-gray-300 uppercase md:flex">
          <a href="/" className="transition-all duration-300 hover:text-red-500">Home</a>
          <a href="/about" className="transition-all duration-300 hover:text-red-500">Chi Siamo</a>
          <a href="/projects" className="transition-all duration-300 hover:text-red-500">Progetti</a>
        </nav>
      </header>


      {/* ====== Hero Slider ====== */}
      <section className="relative flex items-center justify-center h-screen">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="hero"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${current === index ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        <motion.div
          className="relative z-10 px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
    <h2 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
  Trasforma i tuoi spazi con <br />
  <span className="font-extrabold drop-shadow-lg">
  <span className="text-[#136dc2]">Edil</span>
  <span className="text-[#e63946]"> Tech</span>
</span>

</h2>
<p className="max-w-2xl mx-auto text-lg text-gray-300 md:text-xl">
  Strutture solide, design moderno e dettagli di lusso — costruiamo spazi che durano nel tempo.
</p>

          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-300 md:text-xl">
            Da oltre dieci anni realizziamo ristrutturazioni e progetti edilizi di alta qualità.
          </p>
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.1 }}
            className="px-10 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600"
          >
            Scopri i Nostri Progetti
          </motion.a>
        </motion.div>
      </section>

      {/* ====== Alternating Sections ====== */}
      <section className="px-6 py-24 space-y-24 md:px-16">
        {[
          {
            title: "Esperienza e Passione",
            desc: "Offriamo soluzioni moderne e funzionali, curando ogni dettaglio con attenzione artigianale.",
            img: "https://media.istockphoto.com/id/2128765936/photo/cozy-modern-kitchen-room-interior-design-with-dark-green-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=evBXH46TsmXtFiswX6_1z3IeNo0WyIlif7Gu7PnLP6Y=",
          },
          {
            title: "Qualità e Innovazione",
            desc: "Utilizziamo materiali certificati e tecniche costruttive all’avanguardia per garantire risultati duraturi.",
            img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full shadow-2xl md:w-1/2 rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-3xl font-semibold text-red-500">{item.title}</h3>
              <p className="text-lg leading-relaxed text-gray-300">{item.desc}</p>
            </motion.div>
          </div>
        ))}
      </section>

      {/* ====== Services ====== */}
      <section className="bg-[#111] py-24 px-6 md:px-16 text-center">
        <h3 className="text-4xl font-bold text-white mb-14">
          I Nostri <span className="text-red-500">Servizi</span>
        </h3>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl shadow-xl hover:shadow-red-600/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-5 text-5xl">{s.icon}</div>
              <h4 className="mb-3 text-2xl font-semibold text-white">{s.title}</h4>
              <p className="text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== Extra Sections ====== */}
      <section className="py-24 px-6 md:px-16 space-y-24 bg-[#0c0c0c]">
        {[
          {
            title: "Passione & Artigianalità",
            text: "Edil Tech nasce dalla passione per l’edilizia e il design italiano. Uniamo tecnologia moderna e tradizione per creare spazi unici.",
            img: "https://plus.unsplash.com/premium_photo-1700230213804-320273b12fc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGl0YWxpYW4lMjBidWlsZGluZyUyMGV4dGVyaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
          },
          {
            title: "Qualità e Dettagli",
            text: "Ogni progetto è seguito con cura: materiali italiani selezionati, precisione nei dettagli e rispetto dei tempi.",
            img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1400",
          },
        ].map((sec, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            <motion.img
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src={sec.img}
              alt={sec.title}
              className="object-cover w-full shadow-2xl rounded-3xl md:w-1/2 h-80"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h3 className="text-3xl font-bold text-[#d32f2f] mb-4">{sec.title}</h3>
              <p className="text-lg leading-relaxed text-gray-400">{sec.text}</p>
            </motion.div>
          </div>
        ))}
      </section>

      {/* ====== Footer ====== */}
      <footer className="px-6 text-gray-400 bg-black py-14 md:px-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-2xl font-bold text-red-500">Edil Tech</h4>
            <p className="text-sm leading-relaxed">
              Realizziamo ristrutturazioni complete con passione e professionalità,
              per ambienti moderni e confortevoli.
            </p>
          </div>
          <div>
            <h5 className="mb-3 font-semibold text-white">Pagine</h5>
            <ul className="space-y-2">
              {["Home", "Chi Siamo", "Progetti", "Contatti"].map((p, i) => (
                <li key={i}>
                  <a href="/" className="transition-all hover:text-red-500">{p}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-3 font-semibold text-white">Contatti</h5>
            <p>📍Via Raffaello Sanzio,4 20098 San Giuliano Milanese (MI)</p>
            <p>📞 +39 345 11 085 82</p>
            <p>📧 ediltech@gmail.com</p>
            <p>📧 ediltechismail@legalmail.it</p>
            <p className="mt-3 text-sm text-gray-400">EDIL TECH di Ismail Ashraf</p>
          </div>

        </div>
        <div className="pt-5 mt-10 text-sm text-center text-gray-600 border-t border-gray-700">
          © 2025 Edil Tech – Tutti i diritti riservati.
        </div>
      </footer>
    </div>
  );
}
