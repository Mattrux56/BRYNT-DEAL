import { useEffect, useMemo, useState } from 'react'
import { bryntConfig } from '../../../data/config'

export function useContactModal({ isOpen, onClose, initialPlan = '' }) {
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

  return {
    plan,
    setPlan,
    isSuccess,
    handleSubmit,
    closeModal,
    whatsappNumber,
  }
}
