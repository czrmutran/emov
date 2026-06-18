"use client"

import { motion, Variants } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_CASUAL_LINK } from "./constants"

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function ChamadaFinal() {
  return (
    <section id="chamada-final" className="relative overflow-hidden py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>

          <motion.p variants={itemVariants} className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-5">
            Quer ver antes de todo mundo?
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            As peças novas chegam toda semana. Manda mensagem agora.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Fotos das peças disponíveis, opções por estilo e tamanhos, direto no WhatsApp.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3">
            <motion.div
              whileInView={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0px rgba(255, 255, 255, 0.3)",
                  "0 0 0 15px rgba(255, 255, 255, 0)",
                  "0 0 0 0px rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
              className="rounded-full"
            >
              <a
                href={WHATSAPP_CASUAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Me manda as opções agora
                  <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </span>
              </a>
            </motion.div>
            <p className="text-white/40 text-sm">Chapecó, Concórdia, Arvoredo — SC</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
