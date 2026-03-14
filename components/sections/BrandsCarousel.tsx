"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  {
    name: "O Boticário",
    logo: "/images/brands/OBoticario.png",
  },
  {
    name: "Eudora",
    logo: "/images/brands/Eudora.png",
  },
  {
    name: "Quem Disse Berenice",
    logo: "/images/brands/QDB.png",
  },
  {
    name: "Niina Secrets",
    logo: "/images/brands/Niinasecrets.png",
  },
  {
    name: "Intense",
    logo: "/images/brands/Intense.webp",
  },
  {
    name: "OUI",
    logo: "/images/brands/O.U.I.png",
  },
  {
    name: "Aumigos",
    logo: "/images/brands/Aumigos.png",
  },
];

export default function BrandsCarousel() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Nossas Marcas
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            As melhores marcas do{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              mercado
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Trabalhamos com as marcas mais reconhecidas e amadas pelos
            brasileiros
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-100 to-transparent" />

        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          {/* First set of logos */}
          <motion.div
            className="flex shrink-0 items-center gap-16 px-8"
            animate={{
              x: [0, -100 + "%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex h-32 w-48 shrink-0 items-center justify-center rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={180}
                  height={100}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Duplicate set for seamless loop */}
          <motion.div
            className="flex shrink-0 items-center gap-16 px-8"
            animate={{
              x: [0, -100 + "%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex h-32 w-48 shrink-0 items-center justify-center rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={180}
                  height={100}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Third set for extra smoothness */}
          <motion.div
            className="flex shrink-0 items-center gap-16 px-8"
            animate={{
              x: [0, -100 + "%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={`third-${index}`}
                className="flex h-32 w-48 shrink-0 items-center justify-center rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={180}
                  height={100}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="mt-12" />
    </section>
  );
}
