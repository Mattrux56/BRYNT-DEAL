import { useMemo, useState } from 'react'
import logoHeaderImg from '../assets/logos_img/Logo_header.jpg'
import paraEmpresasImg from '../assets/header_img/ParaEmpresas.png'
import paraCompradoresImg from '../assets/header_img/ParaCompradores.png'

const navGroups = [
  { label: 'Inicio', type: 'simple' },
  {
    label: 'Quienes somos',
    type: 'dropdown',
    items: ['Nuestra historia', 'Misión y visión', 'Valores', 'Equipo'],
  },
  {
    label: 'Commercial Growth',
    type: 'dropdown',
    cards: [
      {
        eyebrow: 'PARA EMPRESAS',
        title: 'Quiero hacer crecer mi empresa',
        description:
          'Conecta con aliados, accede a asesoría especializada y acelera tu crecimiento comercial.',
        cta: 'Conocer más',
        image: paraEmpresasImg,
      },
      {
        eyebrow: 'PARA COMPRADORES',
        title: 'Busco una solución',
        description:
          'Encuentra productos y servicios confiables para llevar tus proyectos al siguiente nivel.',
        cta: 'Explorar soluciones',
        image: paraCompradoresImg,
      },
    ],
  },
  {
    label: 'Talleres',
    type: 'dropdown',
    items: ['Agenda', 'Formatos', 'Inscripción', 'Certificaciones'],
  },
  {
    label: 'Linea etica',
    type: 'dropdown',
    items: ['Código', 'Política', 'Procedimientos', 'Canales de contacto'],
  },
  {
    label: 'Propuesta de valor',
    type: 'dropdown',
    items: ['Beneficios', 'Diferenciadores', 'Casos', 'Planes'],
  },
]

export default function Header({ onOpenModal }) {
  const [openDropdown, setOpenDropdown] = useState(null)

  const navItems = useMemo(() => navGroups, [])

  const handleToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  const handleCloseAll = () => setOpenDropdown(null)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="navbar hb-navbar">
      <a href="#inicio" className="hb-logo-block" onClick={(event) => {
        event.preventDefault()
        handleScrollToTop()
      }}>
        <div className="logo-container">
          <img src={logoHeaderImg} alt="BRYNT DEAL" className="logo-icon" />
        </div>
        <span className="hb-logo-tagline">Commercial Growth as a Service</span>
      </a>

      <nav className="hb-nav" aria-label="Navegación principal">
        {navItems.map((item) => {
          if (item.type === 'simple') {
            return (
              <div key={item.label} className="hb-nav-link">
                <button
                  type="button"
                  className="hb-nav-trigger"
                  aria-expanded="false"
                  onClick={handleScrollToTop}
                >
                  {item.label}
                </button>
              </div>
            )
          }

          const isOpen = openDropdown === item.label

          return (
            <div key={item.label} className={`hb-nav-item ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="hb-nav-trigger"
                aria-expanded={isOpen}
                onClick={() => handleToggle(item.label)}
              >
                {item.label}
                <svg className="hb-nav-caret" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={`hb-nav-panel ${item.cards ? 'hb-nav-panel--cards' : ''}`}>
                {item.cards
                  ? item.cards.map((card) => (
                      <button
                        key={card.title}
                        type="button"
                        className="hb-nav-card"
                        onClick={handleCloseAll}
                      >
                        <div className="hb-nav-card-media">
                          <img src={card.image} alt={card.title} loading="eager" fetchPriority="high" />
                        </div>

                        <div className="hb-nav-card-content">
                          <span className="hb-nav-card-eyebrow">{card.eyebrow}</span>
                          <h3>{card.title}</h3>
                          <p>{card.description}</p>
                          <span className="hb-nav-card-cta">
                            {card.cta}
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </button>
                    ))
                  : item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        onClick={(event) => {
                          event.preventDefault()
                          handleCloseAll()
                        }}
                      >
                        {subItem}
                      </a>
                    ))}
              </div>
            </div>
          )
        })}

        <button type="button" className="btn-contact hb-nav-cta" onClick={onOpenModal}>
          Contáctanos
        </button>
      </nav>
    </header>
  )
}
