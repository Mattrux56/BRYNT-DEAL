import PropTypes from 'prop-types'
import { valueCards } from '../constants/homeContent'

/**
 * Sección de valor propuesta con tarjetas descriptivas.
 */
export default function ValueSection() {
  return (
    <section className="value-section">
      <div className="value-container">
        <div className="value-header">
          <div>
            <span className="sub-label gold">PROPUESTA DE VALOR</span>
            <h2>Lo que realmente compran nuestros clientes</h2>
          </div>
          <p className="value-quote">"El valor está en la combinación de disciplina, datos y acompañamiento."</p>
        </div>

        <div className="value-grid">
          {valueCards.map((card) => (
            <div key={card.title} className="value-card">
              <div className="value-card-top">
                <span className="v-icon">{card.icon}</span>
                <span className={`v-badge ${card.badgeClass}`}>{card.badge}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="value-banner">
          "BRYNT genera valor desde el primer mes: ordena el proceso, muestra dónde se pierde dinero y prioriza oportunidades."
        </div>
      </div>
    </section>
  )
}

ValueSection.propTypes = {
  cards: PropTypes.array,
}
