import { faqItems } from '../constants/homeContent'

/**
 * Sección de preguntas frecuentes.
 */
export default function FaqSection() {
  return (
    <section id="faq" className="faq-section">
      <div className="section-header">
        <span className="sub-label">PREGUNTAS FRECUENTES</span>
        <h2>Antes de agendar, resolvamos lo básico</h2>
        <p>Si tu duda no está aquí, cuéntanosla directamente al agendar tu demo.</p>
      </div>

      <div className="faq-list">
        {faqItems.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
