import PropTypes from 'prop-types'
import { heroContent } from '../constants/homeContent'

/**
 * Sección hero principal de la landing page.
 *
 * @param {{ onOpenModal?: () => void }} props
 */
export default function HeroSection({ onOpenModal }) {
  return (
    <section id="inicio" className="hb-hero">
      <div className="hb-hero-bg">
        <img src={heroContent.backgroundImage} alt="Oficina BRYNT DEAL con vista panorámica de la ciudad" />
      </div>

      <div className="hb-hero-content">
        <span className="hb-eyebrow">{heroContent.eyebrow}</span>

        <h1 className="hb-hero-title">
          {heroContent.title.first} <span className="text-gold">{heroContent.title.accent}</span>
        </h1>

        <p className="hb-hero-subtitle">{heroContent.subtitle}</p>

        <div className="hb-hero-features">
          {heroContent.highlights.map((item) => (
            <span key={item.label} className="hb-feature">
              <span className="hb-feature-icon">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="hb-hero-overlay">
        <span className="hb-hero-overlay-rule"></span>
        <p>
          {heroContent.overlayText.map((line, index) => (
            <span key={line + index}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}

HeroSection.propTypes = {
  onOpenModal: PropTypes.func,
}
