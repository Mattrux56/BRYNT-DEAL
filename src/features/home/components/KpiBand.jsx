import PropTypes from 'prop-types'
import { kpis } from '../constants/homeContent'

/**
 * Banda de indicadores KPI.
 */
export default function KpiBand() {
  return (
    <section className="hb-kpi-band" aria-label="Indicadores en tiempo real">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="hb-kpi-card">
          <div className="hb-kpi-top">
            <span className="hb-kpi-icon">{kpi.icon}</span>
            <span className="hb-kpi-label">{kpi.label}</span>
          </div>
          <div className="hb-kpi-value">{kpi.value}</div>
          <div className="hb-kpi-delta-row">
            <div className="hb-kpi-delta">
              <span className="hb-kpi-delta-top">↗ {kpi.delta}</span>
              <span className="hb-kpi-delta-note">{kpi.note}</span>
            </div>
            <svg className="hb-kpi-spark" viewBox="0 0 78 34" fill="none">
              <path
                d="M2 26L14 22L26 24L38 15L50 17L62 6L76 3"
                stroke="#c69214"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M2 26L14 22L26 24L38 15L50 17L62 6L76 3V34H2Z"
                fill="#c69214"
                opacity="0.1"
              />
            </svg>
          </div>
        </div>
      ))}
    </section>
  )
}

KpiBand.propTypes = {
  items: PropTypes.array,
}
