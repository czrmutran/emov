import { FaInstagram } from "react-icons/fa"

const phoneNumber = "5549999620725"
const message = "Olá! Quero conhecer a coleção da EMOV 👕🔥"
const encodedMessage = encodeURIComponent(message)

export const WHATSAPP_LINK = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

const casualMessage = "Olá! Quero ver as peças da linha casual da Emov"
export const WHATSAPP_CASUAL_LINK = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(casualMessage)}`

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#colecoes", label: "Coleções" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
]

export const CONTACT_INFO = {
  address: "Rua Marcilio Dias, n300, Edificio Atlanta, Sala Central, Chapecó 89804161",
  phone: "(49) 99962-0725",
}

export const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/emov_oficial",
    icon: FaInstagram,
    label: "Instagram",
    hoverColor: "hover:text-[#E1306C]",
  },
]