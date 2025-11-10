import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  // ضيف هنا صورك الـ 20
  "/assets/WhatsApp Image 2025-11-10 at 1.21.06 AM.jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 1.21.07 AM.jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.32.14 AM (2).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.32.13 AM (4).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 1.21.10 AM (3).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 1.21.10 AM.jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.32.15 AM.jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.32.13 AM (1).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.32.13 AM.jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.47.40 AM (1).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.47.40 AM.jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.32.14 AM.jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.47.41 AM (1).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 1.21.11 AM (1).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 1.21.09 AM (1).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 1.21.10 AM (1).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.47.42 AM.jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.32.15 AM.jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.32.15 AM (3).jpeg",
  "/assets/WhatsApp Image 2025-11-10 at 12.32.15 AM (2).jpeg",

];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  // سلايد شو تلقائي
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white font-[Poppins] overflow-hidden">
      {/* ===== Header ===== */}
<header className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/40 backdrop-blur-md">
  <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
    <img
      src="/assets/photo_5800903862616001287_y-removebg-preview.png"
      alt="EDIL TECH Logo"
      className="object-contain w-16 h-16" // ← تم تصغير اللوجو من 32 إلى 16
    />
  </div>
</header>


      {/* ===== Slider ===== */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-[1200ms] ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
/>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        <div className="relative z-10 text-center">
          <h2 className="mb-4 text-6xl font-extrabold">
            <span className="text-[#e63946]">Our</span>{" "}
            <span className="text-[#e63946]">Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Scopri i nostri migliori progetti e trasformazioni uniche.
          </p>
        </div>
      </section>

      {/* ===== Gallery Grid ===== */}
      <section className="py-20 px-6 md:px-16 bg-[#111]">
        <h3 className="text-4xl font-bold text-center mb-14">
          <span className="text-[#e63946]">Collezione</span>{" "}
          <span className="text-[#e63946]">Visiva</span>
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative rounded-3xl overflow-hidden bg-[#0b0b0d] shadow-lg hover:shadow-[#e63946]/40 transition-all group"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="object-cover w-full transition-all duration-500 h-72 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-end justify-center p-4 transition-all duration-500 opacity-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:opacity-100">
                <p className="text-lg font-semibold tracking-wide text-white">
                  Progetto #{i + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-10 mt-10 text-center text-gray-400 bg-black">
        <p className="text-sm">
          © 2025{" "}
          <span className="text-[#e63946] font-semibold">Edil</span>
          <span className="text-[#1e3a8a] font-semibold"> Tech</span> — Tutti i
          diritti riservati.
        </p>
      </footer>
    </div>
  );
}