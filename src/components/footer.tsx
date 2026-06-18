"use client"

import Image from "next/image"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { SmoothLink } from "./smooth-link"
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from "./constants"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 pt-8 px-6 md:px-8 pb-8">

      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto">

        {/* Mobile layout */}
        <div className="flex flex-col items-center gap-6 sm:hidden">

          {/* Logo */}
          <Image
            src="/logoemov.png"
            alt="EMOV Logo"
            width={140}
            height={47}
            className="h-12 w-auto select-none"
            loading="lazy"
          />

          {/* Social */}
          <ul className="flex items-center gap-5" aria-label="Redes sociais">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label, hoverColor }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`text-2xl text-white/80 ${hoverColor} transition-colors`}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* Nav compacto */}
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {NAV_LINKS.filter((link) => link.href !== "#contato").map(({ href, label }) => (
              <li key={href}>
                <SmoothLink href={href} className="text-xs text-white/60 hover:text-white transition-colors">
                  {label}
                </SmoothLink>
              </li>
            ))}
          </ul>

          {/* Contato */}
          <address className="not-italic text-xs text-white/50 text-center space-y-1">
            <p className="flex items-start justify-center gap-2">
              <FaMapMarkerAlt size={11} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{CONTACT_INFO.address}</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt size={11} aria-hidden="true" />
              <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </p>
          </address>

        </div>

        {/* Desktop layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-white mb-4">EMOV</h3>
            <Image
              src="/logoemov.png"
              alt="EMOV Logo"
              width={160}
              height={53}
              className="h-16 w-auto select-none"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              {NAV_LINKS.filter((link) => link.href !== "#contato").map(({ href, label }) => (
                <li key={href}>
                  <SmoothLink href={href} className="text-sm text-white/80 hover:text-red-500 transition-colors rounded">
                    {label}
                  </SmoothLink>
                </li>
              ))}
            </ul>
          </div>

          <div id="contato">
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <address className="space-y-2 not-italic text-sm text-white/80">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{CONTACT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt size={12} aria-hidden="true" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`} className="hover:text-red-500 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Siga-nos</h3>
            <ul className="flex items-center gap-4" aria-label="Redes sociais">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label, hoverColor }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`text-2xl text-white/90 ${hoverColor} transition-colors`}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 border-t border-white/20 pt-6 text-center text-xs text-white/40">
          <p>&copy; {currentYear} EMOV. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
