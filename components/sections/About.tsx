"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-16 lg:grid-cols-2 lg:gap-24"
        >
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div variants={itemVariants}>
              <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
                Nossa História
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Beleza com{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                propósito
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-relaxed text-gray-700"
            >
              Nascemos em Alagoas com um sonho: levar beleza, autoestima e
              transformação para cada pessoa que passa por nossas lojas.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg leading-relaxed text-gray-700"
            >
              Hoje, somos uma rede consolidada de franquias, operando as
              marcas mais prestigiadas do mercado brasileiro de cosméticos
              e beleza. Nossa missão vai além de vender produtos: queremos
              criar experiências memoráveis e relacionamentos duradouros.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="text-4xl font-bold text-pink-600">15+</div>
                  <div className="mt-2 text-sm font-semibold text-gray-900">
                    Anos de experiência
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="text-4xl font-bold text-purple-600">7</div>
                  <div className="mt-2 text-sm font-semibold text-gray-900">
                    Marcas de prestígio
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200 to-purple-200 shadow-2xl">
              {/* Placeholder para imagem da equipe ou loja */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg
                    className="mx-auto h-24 w-24 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="mt-4 text-sm">
                    Adicione uma imagem em
                    <br />
                    /public/images/backgrounds/about.jpg
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                  <svg
                    className="h-6 w-6 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Compromisso com excelência
                  </div>
                  <div className="text-xs text-gray-600">
                    Atendimento de qualidade
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
