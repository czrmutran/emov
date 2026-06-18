"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { WHATSAPP_CASUAL_LINK } from "./constants"

const numeros = [
  { valor: "4", label: "lojas em Santa Catarina" },
  { valor: "+20", label: "marcas disponíveis" },
  { valor: "R$ 89,90", label: "peças a partir de" },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function ProvaSocial() {
  return (
    <section id="numeros" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14 text-center"
        >
          {numeros.map((n) => (
            <motion.div key={n.label} variants={itemVariants} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <span className="block text-5xl lg:text-6xl font-extrabold text-white mb-2">{n.valor}</span>
              <span className="text-white/60 text-lg">{n.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <a href={WHATSAPP_CASUAL_LINK} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-3 text-base hover:bg-neutral-800 hover:text-white"
            >
              <span>Quero conhecer as coleções</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </motion.button>
          </a>
          <p className="text-white/40 text-sm mt-3">A equipe responde e já te manda as opções</p>
        </motion.div>

        {/* Foto + Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/loja_1.webp"
              alt="Loja Emov"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.443588267254!2d-52.6270217!3d-27.0793058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b5d1863ec7d3%3A0xcd4535d7bfea5bdb!2sEmov%20Oficial%20-%20Moda%20Masculina!5e0!3m2!1spt-BR!2sbr!4v1781794794523!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
