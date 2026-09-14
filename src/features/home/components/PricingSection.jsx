import PropTypes from 'prop-types'
import { bryntConfig } from '../../../data/config'
import { pricingComparisonRows } from '../constants/homeContent'

/**
 * Sección de planes y comparativa de precios.
 *
 * @param {{ onOpenModal: (plan?: string) => void }} props
 */
export default function PricingSection({ onOpenModal }) {
  const plans = Object.entries(bryntConfig.plans)

  return (
    <section id="planes" className="pricing-section">
      <span className="sub-label">PLANES</span>
      <h2>Dos planes con una lógica sencilla</h2>
      <p className="pricing-sub">PYMES ordena y controla. PREMIUM agrega inteligencia y crecimiento gerencial.</p>

      <div className="pricing-cards-grid">
        {plans.map(([key, plan]) => {
          const isFeatured = key === 'PREMIUM'
          const isPremium = key === 'PREMIUM'

          return (
            <div key={key} className={`plan-card ${isFeatured ? 'featured' : ''}`}>
              {isFeatured && <div className="badge-featured">👑 Preferido</div>}
              <h3>{plan.shortLabel}</h3>
              <div className="plan-price">
                {plan.price}
                <span>/mes</span>
              </div>
              <p className="plan-desc">
                {key === 'PYMES'
                  ? 'Orden comercial y trazabilidad base para iniciar con estructura.'
                  : 'Máxima profundidad analítica, gerencial y de campaña.'}
              </p>
              <button
                type="button"
                className={isPremium ? 'btn-plan-filled' : 'btn-plan-outline'}
                onClick={() => onOpenModal(key)}
              >
                Solicitar plan
              </button>
              <ul className="plan-checklist">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="comparison-table-wrapper">
        <h3>Comparación completa de características</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>CARACTERÍSTICA</th>
              <th>PYMES</th>
              <th>PREMIUM</th>
            </tr>
          </thead>
          <tbody>
            {pricingComparisonRows.map(([feature, pyme, premium]) => (
              <tr key={feature}>
                <td>{feature}</td>
                <td className={pyme === '✓' ? 'check' : 'cross'}>{pyme}</td>
                <td className={premium === '✓' ? 'check gold-text' : premium === '+ Gerencial' ? 'check gold-text' : 'cross'}>{premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="table-footnote">
          Honorario mensual pagado por adelantado. Comisiones solo después de conciliación y recaudo verificado. Aplica para Colombia. Precios en COP.
        </p>
      </div>
    </section>
  )
}

PricingSection.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
}
