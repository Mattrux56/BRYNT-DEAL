import PropTypes from 'prop-types'
import { bryntConfig } from '../../../data/config'
import { contactModalDefaults } from '../constants/contactModalData'
import { useContactModal } from '../hooks/useContactModal'

/**
 * Modal de contacto que abre una conversación de WhatsApp.
 *
 * @param {{ isOpen: boolean, onClose: () => void, initialPlan?: string }} props
 */
export default function ContactModal({ isOpen, onClose, initialPlan = '' }) {
  const { plan, setPlan, isSuccess, handleSubmit, closeModal } = useContactModal({
    isOpen,
    onClose,
    initialPlan,
  })

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
                <select
                  name="plan"
                  id="modal-plan-select"
                  value={plan}
                  onChange={(event) => setPlan(event.target.value)}
                >
                  <option value={contactModalDefaults.defaultPlan}>No sé todavía</option>
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
            <h3>{contactModalDefaults.successTitle}</h3>
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

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialPlan: PropTypes.string,
}
