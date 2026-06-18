"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ShaderBackground from "@/components/shader-background"
import Colecoes from "@/components/colecoes-section"
import Diferenciais from "@/components/diferenciais-section"
import ProvaSocial from "@/components/provasocial-section"
import ChamadaFinal from "@/components/chamadafinal-section"

export default function EMOVLanding() {
  return (
    <ShaderBackground>
      <Header />
      <HeroSection />
      <Colecoes />
      <Diferenciais />
      <ProvaSocial />
      <ChamadaFinal />
    </ShaderBackground>
  )
}
