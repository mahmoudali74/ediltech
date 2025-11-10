// src/pages/ChiSiamo.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  FaWhatsapp } from "react-icons/fa";
import {  AnimatePresence } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ChiSiamo() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="bg-[#0a0a0a] text-gray-200 font-[Poppins] overflow-hidden">
      {/* ===== Header ===== */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/40 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          <img
            src="\assets\photo_5800903862616001287_y-removebg-preview.png"
            alt="EDIL TECH Logo"
            className="object-contain w-32 h-32"
          />

          <nav className="space-x-6 text-sm tracking-wide uppercase">
            <Link to="/" className="transition hover:text-red-500">Home</Link>
            <Link to="/about" className="text-red-500">Chi Siamo</Link>
            <Link to="/projects" className="transition hover:text-red-500">Progetti</Link>

          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative flex items-center justify-center h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-5xl font-light tracking-wide text-white md:text-6xl">
            Edil Tech — Passione e Innovazione
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Creiamo spazi che riflettono stile, funzionalità e qualità italiana.
          </p>
        </motion.div>
      </section>

      {/* ===== About Section ===== */}
      <section className="py-24 px-6 md:px-16 bg-[#0f0f0f]">
        <div className="grid items-center max-w-6xl gap-16 mx-auto md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h3 className="mb-6 text-3xl font-semibold text-white">
              Chi Siamo
            </h3>
            <p className="mb-4 leading-relaxed text-gray-400">
              Edil Tech è un’impresa edile con sede a San Giuliano Milanese (MI),
              specializzata in ristrutturazioni complete di appartamenti, ville e spazi commerciali.
              Grazie a un team di professionisti qualificati, seguiamo ogni fase del progetto – dalla progettazione alla realizzazione finale – garantendo un servizio “chiavi in mano”.
            </p>
            <p className="leading-relaxed text-gray-400">
              La nostra missione è trasformare ogni ambiente in uno spazio moderno, funzionale e confortevole,
              curando ogni dettaglio con attenzione artigianale e materiali di alta qualità.
            </p>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80"
            alt="Edil Tech Team"
            className="border border-gray-700 shadow-xl rounded-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          />
        </div>
      </section>

      {/* ===== Servizi Section ===== */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="px-6 mx-auto text-center max-w-7xl">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="mb-16 text-3xl font-semibold text-white"
          >
            I Nostri Servizi
          </motion.h3>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              "Ristrutturazione completa di appartamenti e ville",
              "Rifacimento bagni e cucine",
              "Impianti idraulici ed elettrici",
              "Controsoffitti e cartongesso",
              "Posa pavimenti e rivestimenti",
              "Serramenti, porte e finestre",
              "Tinteggiatura e decorazioni interne",
              "Progetti personalizzati e servizio chiavi in mano",
            ].map((servizio, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-b from-[#1a1a1a] to-[#111] p-10 rounded-2xl border border-gray-700 shadow-lg hover:shadow-red-500/20 transition"
              >
                <h4 className="mb-2 text-xl font-semibold text-white">
                  {servizio}
                </h4>
                <p className="text-sm text-gray-400">
                  Ogni intervento è seguito con cura e precisione, rispettando i tempi di consegna e il budget concordato.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Valori Section ===== */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h3 className="mb-16 text-3xl font-semibold text-white">
            I Nostri Valori
          </h3>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Affidabilità",
                desc: "Rispetto dei tempi e dei costi concordati.",
                icon: "🕒",
              },
              {
                title: "Qualità",
                desc: "Materiali selezionati e tecniche moderne.",
                icon: "🏗️",
              },
              {
                title: "Trasparenza",
                desc: "Comunicazione chiara e continua con il cliente.",
                icon: "💬",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="bg-gradient-to-b from-[#141414] to-[#0b0b0b] p-10 rounded-2xl border border-gray-700 shadow-lg hover:shadow-red-500/30 transition"
              >
                <div className="mb-4 text-4xl">{card.icon}</div>
                <h4 className="mb-2 text-xl font-semibold text-white">
                  {card.title}
                </h4>
                <p className="text-sm text-gray-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-black to-[#1a1a1a] text-center">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-3xl font-semibold text-white"
        >
          Vuoi collaborare con noi?
        </motion.h3>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 font-medium tracking-wide text-white transition bg-red-600 rounded-full hover:bg-red-700"
          onClick={() => setOpenForm(true)}
        >
          Contattaci Ora
        </motion.button>

        {/* ====== Modal ====== */}
        <AnimatePresence>
          {openForm && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#e9f9ff] text-gray-800 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative"
              >
                <button
                  onClick={() => setOpenForm(false)}
                  className="absolute text-xl text-gray-500 top-3 right-4 hover:text-red-600"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold text-center mb-6 text-[#0077b6]">
                  CONTATTACI
                </h2>

                <form className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-semibold">
                      Nome e Cognome (required)
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077b6] outline-none"
                      placeholder="Il tuo nome completo"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-semibold">
                      Email (required)
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077b6] outline-none"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-semibold">
                      Di cosa hai bisogno?
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077b6] outline-none"
                      placeholder="Ristrutturazioni Appartamenti"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-semibold">
                      Oggetto
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077b6] outline-none"
                      placeholder="Oggetto del messaggio"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-semibold">
                      Messaggio
                    </label>
                    <textarea
                      rows="4"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077b6] outline-none"
                      placeholder="Scrivi qui il tuo messaggio..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0077b6] hover:bg-[#005f8f] text-white px-6 py-3 rounded-lg w-full font-semibold tracking-wide"
                  >
                    INVIA
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-10 text-center bg-black border-t border-gray-800">
        <div className="flex justify-center mb-4 space-x-6 text-gray-400">
        
          <a href="https://wa.me/+39 345 11 085 82" className="text-xl hover:text-red-500"><FaWhatsapp /></a>
        </div>
        <p className="text-sm text-gray-500">
          © 2025 Edil Tech — Ristrutturazioni di Qualità e Design Italiano
        </p>
      </footer>
    </div>
  );
}
