"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { WHATSAPP_CASUAL_LINK } from "./constants"

const categorias = [
  { name: "Camisetas", image: "/casual-camiseta.jpeg" },
  { name: "Polos", image: "/casual-polo.jpeg" },
  { name: "Camisas", image: "/casual-camisa.jpeg" },
  { name: "Blazers", image: "/casual-blazer-arara.jpeg" },
  { name: "Calças", image: "/casual-calca.jpeg" },
  { name: "Tênis", image: "/casual-tenis.jpeg" },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Colecoes() {
  return (
    <section id="colecoes" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow + Head + Price */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-3">A linha</p>
          <h2 className="text-6xl lg:text-8xl font-extrabold text-white tracking-tight mb-4">CASUAL</h2>
          <p className="text-white/60 text-lg">A partir de R$ 89,90 até R$ 599</p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          {categorias.map((cat) => (
            <motion.div
              key={cat.name}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-sm">{cat.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pos-cards text */}
        <p className="text-center text-white/60 text-base mb-14">Tudo com tecido que você sente a diferença.</p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto text-center mb-16"
        >
          Marcas exclusivas. Tecidos com toque diferenciado. Caimento testado. Cada peça foi escolhida pra funcionar de verdade no guarda-roupa masculino, sem peça encalhada, sem compra errada.
        </motion.p>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
        >
          {/* Foto 1 */}
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden hidden md:block">
            <Image
              src="/casual-pullquote-1.jpeg"
              alt="Modelo com look casual Emov"
              fill
              className="object-cover object-top"
              sizes="33vw"
            />
          </div>

          {/* Quote text */}
          <div className="text-center px-4">
            <span className="text-6xl text-white/20 font-serif leading-none block mb-2">"</span>
            <p className="text-xl lg:text-2xl font-semibold text-white leading-snug italic">
              Tecido que você sente na primeira prova. Caimento que dispensa explicação.
            </p>
            <span className="text-6xl text-white/20 font-serif leading-none block mt-2 rotate-180 inline-block">"</span>
          </div>

          {/* Foto 2 */}
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden hidden md:block">
            <Image
              src="/casual-pullquote-2.jpeg"
              alt="Modelo com look casual Emov"
              fill
              className="object-cover object-top"
              sizes="33vw"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a href={WHATSAPP_CASUAL_LINK} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg transition-all duration-300 overflow-hidden inline-flex items-center gap-3 text-base hover:bg-neutral-800 hover:text-white"
            >
              <span>Quero ver as opções disponíveis</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </motion.button>
          </a>
          <p className="text-white/40 text-sm mt-3">Manda mensagem, a equipe te responde na hora</p>
        </div>

      </div>
    </section>
  )
}
