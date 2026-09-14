import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

const kpis = [
  {
    icon: '👥',
    label: 'Clientes activos',
    value: '24',
    delta: '+14%',
    note: 'vs. mes anterior',
  },
  {
    icon: '🛒',
    label: 'Ventas cerradas por la web',
    value: '$1.280M',
    delta: '+32%',
    note: 'vs. mes anterior',
  },
  {
    icon: '🎯',
    label: 'Oportunidades trazadas',
    value: '482',
    delta: '+18%',
    note: 'vs. mes anterior',
  },
  {
    icon: '📈',
    label: 'Conversión comercial',
    value: '27%',
    delta: '+6 p.p.',
    note: 'vs. mes anterior',
  },
  {
    icon: '🪙',
    label: 'Recaudo conciliado',
    value: '94%',
    delta: '+4 p.p.',
    note: 'vs. mes anterior',
  },
]

const valueCards = [
  { icon: '🍱', badge: 'Fundacional', badgeClass: 'blue', title: 'Orden comercial', text: 'Embudo, seguimiento, responsables, próximas acciones y disciplina sobre oportunidades.' },
  { icon: '📊', badge: 'KPI', badgeClass: 'gray', title: 'Medición', text: 'Ventas proyectadas vs. reales, conversión, ticket, ciclo y desempeño por producto/servicio.' },
  { icon: '🛡️', badge: 'Trazabilidad', badgeClass: 'dark', title: 'Trazabilidad', text: 'Origen del lead, campaña, cotización, venta, recaudo y resultado con trazabilidad completa.' },
  { icon: '☀️', badge: 'Analytics', badgeClass: 'purple', title: 'Inteligencia', text: 'Ventas perdidas, potencial de productos, recurrencia, inactividad, tendencias y oportunidades ocultas.' },
  { icon: '👥', badge: 'Gerencial', badgeClass: 'green', title: 'Dirección', text: 'Reuniones de resultados, revisión gerencial, planes de acción y recomendaciones estratégicas.' },
  { icon: '📈', badge: 'Expansión', badgeClass: 'red', title: 'Crecimiento', text: 'Campañas, reactivación, captación y priorización basadas en información real y trazable.' },
]

const faqItems = [
  { q: '¿Cuánto tiempo toma implementar BRYNT TRACE?', a: 'Entre 2 y 4 semanas para dejar el flujo lead → TRACE ID → Power BI funcionando de extremo a extremo, según el número de canales de entrada.' },
  { q: '¿Es compatible con mi CRM (HubSpot, Salesforce, etc.)?', a: 'En Fase 1 trabajamos sobre Microsoft 365 / SharePoint como fuente maestra. Si ya usas HubSpot o Salesforce, evaluamos una integración o sincronización puntual sin duplicar tu operación.' },
  { q: '¿Qué acceso a datos necesita BRYNT para operar?', a: 'Solo lectura y escritura sobre los campos comerciales del embudo (leads, cotizaciones, estados y resultados). No accedemos a tu contabilidad ni a datos técnicos u operativos internos.' },
  { q: '¿Reemplaza mi equipo comercial actual?', a: 'No. BRYNT no sustituye tu operación técnica ni comercial; ordena, mide y acompaña. Tu equipo sigue vendiendo, facturando y recaudando.' },
  { q: '¿Cómo se calculan las comisiones?', a: 'Solo sobre operaciones atribuibles a un Lead ID de BRYNT, conciliadas contra venta y recaudo verificado. Nunca sobre ventas que no pasaron por el sistema.' },
  { q: '¿Puedo cambiar de plan más adelante?', a: 'Sí. Puedes subir de PYMES a PREMIUM sin perder el historial de trazabilidad ya construido en BRYNT TRACE.' },
]

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const openModal = (plan = '') => {
    setSelectedPlan(plan)
    setModalOpen(true)
  }

  const handleCloseModal = () => setModalOpen(false)

  return (
    <>
      <Header onOpenModal={() => openModal()} />

      <main>
        <section id="inicio" className="hb-hero">
          <div className="hb-hero-bg">
            <img src="/src/assets/images/fondo_inicio.jpg" alt="Oficina BRYNT DEAL con vista panorámica de la ciudad" />
          </div>

          <div className="hb-hero-content">
            <span className="hb-eyebrow">Datos que impulsan negocios</span>

            <h1 className="hb-hero-title">
              Indicadores que demuestran <span className="text-gold">crecimiento real</span>
            </h1>

            <p className="hb-hero-subtitle">
              Trazabilidad, conversión y recaudo en un solo lugar. Datos reales para decisiones más grandes.
            </p>

            <div className="hb-hero-features">
              <span className="hb-feature"><span className="hb-feature-icon">📊</span>Más visibilidad</span>
              <span className="hb-divider">|</span>
              <span className="hb-feature"><span className="hb-feature-icon">🎯</span>Más conversión</span>
              <span className="hb-divider">|</span>
              <span className="hb-feature"><span className="hb-feature-icon">👥</span>Más crecimiento</span>
            </div>
          </div>

          <div className="hb-hero-overlay">
            <span className="hb-hero-overlay-rule"></span>
            <p>
              Empresas<br />
              que avanzan<br />
              con datos,<br />
              <strong>llegan más lejos.</strong>
            </p>
          </div>
        </section>

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
                  <path d="M2 26L14 22L26 24L38 15L50 17L62 6L76 3" stroke="#c69214" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M2 26L14 22L26 24L38 15L50 17L62 6L76 3V34H2Z" fill="#c69214" opacity="0.1" />
                </svg>
              </div>
            </div>
          ))}
        </section>

        <section id="metodologia" className="methodology-section">
          <div className="pillars-card">
            <div className="pillar-item">
              <div className="pillar-icon">🛡️</div>
              <div className="pillar-content">
                <h4>100%</h4>
                <p className="pillar-title">Trazabilidad y seguimiento</p>
                <p className="pillar-desc">Cada oportunidad identificada con GUID único</p>
              </div>
            </div>
            <div className="pillar-item">
              <div className="pillar-icon">⚡</div>
              <div className="pillar-content">
                <h4>Auto</h4>
                <p className="pillar-title">Sincronización con Power Automate</p>
                <p className="pillar-desc">SharePoint + Power BI en tiempo real</p>
              </div>
            </div>
            <div className="pillar-item">
              <div className="pillar-icon">💰</div>
              <div className="pillar-content">
                <h4>CaaS</h4>
                <p className="pillar-title">Modelo Enfocado en Recaudo</p>
                <p className="pillar-desc">Comisiones solo sobre ventas atribuibles y recaudadas</p>
              </div>
            </div>
          </div>

          <div className="section-header">
            <span className="sub-label">NUESTRA PROPUESTA DE VALOR</span>
            <h2>Diseñado para Empresas que Buscan Escalar</h2>
            <p>Optimizamos tu estructura comercial, integramos tus datos y medimos lo que realmente impulsa tu crecimiento.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-header">
                <span className="step-num">01</span>
                <span className="step-arrow">→</span>
              </div>
              <h3>Estructura y Control</h3>
              <span className="step-tag">VISIBILIDAD TOTAL DEL EMBUDO</span>
              <p className="step-desc">Le damos a tu equipo la estructura necesaria para dar seguimiento puntual a cada cliente y asegurar que no se escape ninguna oportunidad.</p>
              <ul className="step-list">
                <li>✓ Segregación y trazabilidad de cada cotización</li>
                <li>✓ Seguimiento claro a clientes recurrentes y nuevos</li>
                <li>✓ Alerta temprana sobre brechas frente a la meta</li>
              </ul>
              <div className="step-box">0% cotizaciones en el olvido o sin seguimiento</div>
            </div>

            <div className="step-card">
              <div className="step-header">
                <span className="step-num">02</span>
                <span className="step-arrow">→</span>
              </div>
              <h3>Inteligencia de Datos</h3>
              <span className="step-tag">DE INFORMACIÓN A DECISIONES</span>
              <p className="step-desc">Conectamos la información dispersa de tus canales (WhatsApp, Excel, facturación) en tableros estratégicos para decidir con certeza.</p>
              <ul className="step-list">
                <li>✓ Integración de fuentes dispersas en una sola vista</li>
                <li>✓ Tableros interactivos en Power BI en tiempo real</li>
                <li>✓ Análisis de causalidad en ventas ganadas y perdidas</li>
              </ul>
              <div className="step-box">1 solo tablero centralizado para gerencia</div>
            </div>

            <div className="step-card">
              <div className="step-header">
                <span className="step-num">03</span>
                <span className="step-arrow">→</span>
              </div>
              <h3>Trazabilidad y Retorno</h3>
              <span className="step-tag">MEDICIÓN EFECTIVA DE CANALES</span>
              <p className="step-desc">Trazamos el recorrido completo desde la primera interacción hasta el recaudo final para saber qué acciones realmente venden.</p>
              <ul className="step-list">
                <li>✓ Identificación exacta del canal que produjo la venta</li>
                <li>✓ Medición real del retorno en campañas comerciales</li>
                <li>✓ Conciliación y seguimiento enfocado en recaudo</li>
              </ul>
              <div className="step-box">100% visibilidad del origen de tus ingresos</div>
            </div>
          </div>
        </section>

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

        <section id="planes" className="pricing-section">
          <span className="sub-label">PLANES</span>
          <h2>Dos planes con una lógica sencilla</h2>
          <p className="pricing-sub">PYMES ordena y controla. PREMIUM agrega inteligencia y crecimiento gerencial.</p>

          <div className="pricing-cards-grid">
            <div className="plan-card">
              <h3>PYMES</h3>
              <div className="plan-price">$850.000<span>/mes</span></div>
              <p className="plan-desc">Orden comercial y trazabilidad base para iniciar con estructura.</p>
              <button type="button" className="btn-plan-outline" onClick={() => openModal('PYMES')}>Solicitar plan</button>
              <ul className="plan-checklist">
                <li>✓ Seguimiento comercial</li>
                <li>✓ Power BI / KPI</li>
                <li>✓ Reunión mensual de resultados</li>
                <li>✓ Gestión clientes nuevos, activos y recurrentes</li>
                <li>✓ BRYNT TRACE (trazabilidad)</li>
                <li className="disabled">✕ Inteligencia comercial avanzada</li>
                <li className="disabled">✕ Segmentación ampliada / reactivación</li>
              </ul>
            </div>

            <div className="plan-card featured">
              <div className="badge-featured">👑 Preferido</div>
              <h3>PREMIUM</h3>
              <div className="plan-price">$3.200.000<span>/mes</span></div>
              <p className="plan-desc">Máxima profundidad analítica, gerencial y de campaña.</p>
              <button type="button" className="btn-plan-filled" onClick={() => openModal('PREMIUM')}>Solicitar plan</button>
              <ul className="plan-checklist">
                <li>✓ Seguimiento comercial</li>
                <li>✓ Power BI / KPI</li>
                <li>✓ Reunión mensual de resultados</li>
                <li>✓ Gestión clientes nuevos, activos y recurrentes</li>
                <li>✓ BRYNT TRACE (trazabilidad)</li>
                <li>✓ Inteligencia comercial avanzada</li>
                <li>✓ Segmentación ampliada / reactivación</li>
              </ul>
            </div>
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
                <tr>
                  <td>Seguimiento comercial</td>
                  <td className="check">✓</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>Power BI / KPI</td>
                  <td className="check">✓</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>Reunión mensual de resultados</td>
                  <td className="check">✓</td><td className="check gold-text">+ Gerencial</td>
                </tr>
                <tr>
                  <td>Gestión clientes nuevos, activos y recurrentes</td>
                  <td className="check">✓</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>BRYNT TRACE (trazabilidad)</td>
                  <td className="check">✓</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>Inteligencia comercial avanzada</td>
                  <td className="cross">✕</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>Segmentación ampliada / reactivación</td>
                  <td className="cross">✕</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>Ventas perdidas — causalidad e ingresos potenciales</td>
                  <td className="cross">✕</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>Potencial / tendencia por producto-servicio</td>
                  <td className="cross">✕</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>Análisis PQRS</td>
                  <td className="cross">✕</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>Campañas con diseño y seguimiento profundo</td>
                  <td className="cross">✕</td><td className="check">✓</td>
                </tr>
                <tr>
                  <td>Revisión Gerencial de Crecimiento</td>
                  <td className="cross">✕</td><td className="check">✓</td>
                </tr>
              </tbody>
            </table>
            <p className="table-footnote">Honorario mensual pagado por adelantado. Comisiones solo después de conciliación y recaudo verificado. Aplica para Colombia. Precios en COP.</p>
          </div>
        </section>

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
      </main>

      <Footer onOpenModal={() => openModal()} />

      <ContactModal isOpen={modalOpen} onClose={handleCloseModal} initialPlan={selectedPlan} />
    </>
  )
}
