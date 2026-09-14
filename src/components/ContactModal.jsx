import { useEffect, useMemo, useState } from 'react'
import { bryntConfig } from '../data/config'

export default function ContactModal({ isOpen, onClose, initialPlan = '' }) {
  const [plan, setPlan] = useState(initialPlan)
  const [isSuccess, setIsSuccess] = useState(false)

  const whatsappNumber = useMemo(() => bryntConfig.whatsappNumber, [])

  useEffect(() => {
    setPlan(initialPlan)
  }, [initialPlan])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const nombre = String(formData.get('nombre') || '').trim()
    const empresa = String(formData.get('empresa') || '').trim()
    const telefono = String(formData.get('telefono') || '').trim()
    const selectedPlan = String(formData.get('plan') || 'No sé todavía').trim()

    const message = `Hola BRYNT DEAL, soy ${nombre} de ${empresa}. Quiero agendar una demo (plan de interés: ${selectedPlan}). Mi WhatsApp de contacto: ${telefono}.`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener')

    setIsSuccess(true)
    event.currentTarget.reset()
  }

  const closeModal = () => {
    setIsSuccess(false)
    onClose()
  }

  return (
    <div
      className="modal-overlay"
      hidden={!isOpen}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal()
      }}
    >
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button type="button" className="modal-close" onClick={closeModal} aria-label="Cerrar">
          &times;
        </button>

        {!isSuccess ? (
          <div className="modal-body" id="modal-form-view">
            <span className="sub-label">AGENDAR DEMO</span>
            <h3 id="modal-title">Cuéntanos de tu empresa</h3>
            <p className="modal-sub">Respondemos por WhatsApp en menos de 24h hábiles.</p>

            <form id="modal-form" onSubmit={handleSubmit}>
              <label>
                Nombre
                <input type="text" name="nombre" required placeholder="Tu nombre completo" />
              </label>
              <label>
                Empresa
                <input type="text" name="empresa" required placeholder="Nombre de tu empresa" />
              </label>
              <label>
                WhatsApp
                <input type="tel" name="telefono" required placeholder="Ej. 3001234567" />
              </label>
              <label>
                Plan de interés
                <select name="plan" id="modal-plan-select" value={plan} onChange={(event) => setPlan(event.target.value)}>
                  <option value="No sé todavía">No sé todavía</option>
                  {bryntConfig.planOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <button type="submit" className="btn-primary modal-submit">
                Agendar por WhatsApp
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-body" id="modal-success-view">
            <span className="sub-label">LISTO</span>
            <h3>Te esperamos en WhatsApp</h3>
            <p className="modal-sub">
              Abrimos WhatsApp con tu mensaje ya redactado. Si no se abrió automáticamente, escríbenos directamente.
            </p>
            <button type="button" className="btn-secondary" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
