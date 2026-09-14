import { methodologyPillars, methodologySteps } from '../constants/homeContent'

/**
 * Sección de metodología y pasos de proceso.
 */
export default function MethodologySection() {
  return (
    <section id="metodologia" className="methodology-section">
      <div className="pillars-card">
        {methodologyPillars.map((pillar) => (
          <div key={pillar.title} className="pillar-item">
            <div className="pillar-icon">{pillar.icon}</div>
            <div className="pillar-content">
              <h4>{pillar.value}</h4>
              <p className="pillar-title">{pillar.title}</p>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section-header">
        <span className="sub-label">NUESTRA PROPUESTA DE VALOR</span>
        <h2>Diseñado para Empresas que Buscan Escalar</h2>
        <p>Optimizamos tu estructura comercial, integramos tus datos y medimos lo que realmente impulsa tu crecimiento.</p>
      </div>

      <div className="steps-grid">
        {methodologySteps.map((step) => (
          <div key={step.number} className="step-card">
            <div className="step-header">
              <span className="step-num">{step.number}</span>
              <span className="step-arrow">→</span>
            </div>
            <h3>{step.title}</h3>
            <span className="step-tag">{step.tag}</span>
            <p className="step-desc">{step.description}</p>
            <ul className="step-list">
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="step-box">{step.box}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
