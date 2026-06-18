"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { WHATSAPP_CASUAL_LINK } from "./constants"

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-end md:flex-row md:items-center md:justify-start px-6 md:px-8 overflow-hidden min-h-dvh md:min-h-screen pb-14 md:pb-0 md:pt-40 lg:pt-48">
      <Image
        src="/hero.png"
        alt="Modelo vestindo look da linha casual Emov"
        fill
        priority
        className="absolute inset-0 object-cover object-top opacity-80"
        sizes="100vw"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Overlay mobile: forte de baixo pra cima */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-[1]" />
      {/* Overlay desktop: lateral esquerda */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/60 via-black/20 to-transparent z-[1]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full z-10"
      >
        {/* Desktop */}
        <div className="hidden md:flex md:justify-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-white/35 uppercase mb-5">
              Linha Casual — Emov
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white/85 mb-6 leading-tight tracking-tight text-left">
              Malha exclusiva. Caimento impecável. Casual do jeito certo.
            </h1>
            <p className="text-lg lg:text-xl text-white/55 mb-10 leading-relaxed text-left">
              Uma linha completa de roupas masculinas com tecidos de toque diferenciado, pensada pra quem quer estar bem vestido no dia a dia sem forçar.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-start gap-3"
            >
              <a href={WHATSAPP_CASUAL_LINK} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-white/10 text-white font-semibold rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 overflow-hidden flex items-center gap-3 text-base"
                >
                  <span className="relative z-10">Quero conhecer a linha casual</span>
                  <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </motion.button>
              </a>
              <p className="text-white/40 text-sm pl-2">Receba as opções direto no WhatsApp</p>
            </motion.div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">
            Linha Casual — Emov
          </p>
          <h1 className="text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Malha exclusiva. Caimento impecável. Casual do jeito certo.
          </h1>
          <p className="text-sm text-white/65 mb-8 leading-relaxed">
            Uma linha completa de roupas masculinas com tecidos de toque diferenciado, pensada pra quem quer estar bem vestido no dia a dia sem forçar.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-start gap-3"
          >
            <a href={WHATSAPP_CASUAL_LINK} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="group relative px-7 py-3.5 bg-white/15 text-white font-semibold rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 overflow-hidden flex items-center gap-3 text-sm"
              >
                <span className="relative z-10">Quero conhecer a linha casual</span>
                <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </motion.button>
            </a>
            <p className="text-white/35 text-xs pl-1">Receba as opções direto no WhatsApp</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
