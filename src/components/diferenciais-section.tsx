"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { WHATSAPP_CASUAL_LINK } from "./constants"

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">Por que é diferente</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
            Atendimento que entende o que você precisa.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10">
            Equipe treinada pra entender o seu gosto e te ajudar a escolher as peças certas, sem empurrar nada. Você experimenta, descobre o que funciona pro seu estilo, e sai com peça que vai usar de verdade.
          </p>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <a href={WHATSAPP_CASUAL_LINK} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg transition-all duration-300 overflow-hidden inline-flex items-center gap-3 text-base hover:bg-neutral-800 hover:text-white"
              >
                <span>Quero ajuda para escolher as peças certas</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </motion.button>
            </a>
            <p className="text-white/40 text-sm">A equipe monta opções de acordo com o seu estilo</p>
          </div>
        </motion.div>

        {/* Fotos de atendimento */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/casual-atendimento-1.jpeg"
              alt="Atendimento Emov"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
            <Image
              src="/casual-atendimento-2.jpeg"
              alt="Atendimento Emov"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
