"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Background Image/Video Container */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Placeholder para vídeo ou imagem de background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-pink-300/20" />

          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 sm:px-8 lg:px-16">
        <div className="max-w-6xl text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <Image
              src="/images/logo/94512fff-9abf-40fa-8b0a-de8a5f7383ad.png"
              alt="Alcina Logo"
              width={200}
              height={200}
              className="h-32 w-auto object-contain sm:h-40 lg:h-48"
              priority
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-7xl"
          >
            Beleza que{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              transforma
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl"
          >
            Operando as melhores marcas de cosméticos e beleza do Brasil,
            com origem em Alagoas e paixão por encantar nossos clientes.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#stores"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Conheça Nossas Lojas
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-sm font-medium">Role para descobrir</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
