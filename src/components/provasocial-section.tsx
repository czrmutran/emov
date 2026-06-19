"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"
import { WHATSAPP_CASUAL_LINK } from "./constants"

const numeros = [
  { valor: "4", label: "lojas em Santa Catarina" },
  { valor: "+20", label: "marcas disponíveis" },
  { valor: "R$ 89,90", label: "peças a partir de" },
]

const lojaImgs = [
  { src: "/loja_emov_2.jpg", alt: "Fachada EMOV Matriz 2.0" },
  { src: "/loja_emov_3.jpg", alt: "Interior da loja EMOV" },
  { src: "/loja_emov_4.jpg", alt: "Loja EMOV" },
  { src: "/loja_emov_5.jpg", alt: "Produtos EMOV" },
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
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    setActiveSlide(Math.round(scrollLeft / clientWidth))
  }

  return (
    <section id="numeros" className="relative py-24 md:py-32 px-8 md:px-12 lg:px-16 overflow-hidden">
      {/* subtle radial glow in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.03] rounded-full blur-3xl" />
      </div>
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
            <motion.div
              key={n.label}
              variants={itemVariants}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden group hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              {/* top accent line */}
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <span className="block text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight">{n.valor}</span>
              <span className="block w-8 h-px bg-white/20 mx-auto mb-3" />
              <span className="text-white/50 text-base uppercase tracking-widest">{n.label}</span>
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
        >
          {/* Mobile: carrossel centralizado */}
          <div className="md:hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-8"
            >
              {lojaImgs.map((img, i) => (
                <div key={i} className="relative shrink-0 w-screen h-[80vw] snap-center px-8">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      sizes="100vw"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4 mb-4">
              {lojaImgs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollRef.current?.scrollTo({ left: i * scrollRef.current.clientWidth, behavior: "smooth" })}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? "w-5 bg-white" : "w-1.5 bg-white/30"}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile: mapa embaixo, largura total */}
          <div className="md:hidden rounded-2xl overflow-hidden border border-white/8 h-56">
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

          {/* Desktop: grid layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-3 h-[500px]">
            {/* Fachada — portrait, coluna 1 */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/loja_emov_2.jpg"
                alt="Fachada EMOV Matriz 2.0"
                fill
                className="object-cover object-center"
                sizes="33vw"
              />
            </div>

            {/* Direita — colunas 2 e 3 */}
            <div className="col-span-2 flex flex-col gap-3">
              {/* Mapa */}
              <div className="rounded-2xl overflow-hidden border border-white/8 h-[60%]">
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
              {/* 3 fotos internas */}
              <div className="grid grid-cols-3 gap-3 flex-1">
                {["/loja_emov_3.jpg", "/loja_emov_4.jpg", "/loja_emov_5.jpg"].map((src, i) => (
                  <div key={i} className="relative rounded-2xl overflow-hidden group">
                    <Image
                      src={src}
                      alt={`Loja EMOV — foto ${i + 3}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="22vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

