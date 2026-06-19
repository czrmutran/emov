"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden">

      {/* Imagem full-bleed — ocupa toda a seção */}
      <div className="relative h-[60vh] md:h-[75vh]">
        <Image
          src="/loja_emov_2.jpg"
          alt="Fachada da Loja EMOV Matriz 2.0"
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />

        {/* Gradiente escuro na base para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

        {/* Texto sobre a imagem */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-12 lg:px-16 pb-12 md:pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl lg:text-4xl font-extrabold text-white"
            >
              Moda que representa atitude.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="text-base md:text-lg text-white/75 leading-relaxed"
            >
              Crescemos com um único propósito: entregar peças modernas, de alta qualidade e com personalidade. A EMOV nasceu para quem valoriza presença, estilo e autenticidade. Aqui, cada peça carrega identidade. A EMOV é mais que roupa — é estilo em movimento.
            </motion.p>
          </div>
        </div>
      </div>

    </section>
  )
}
