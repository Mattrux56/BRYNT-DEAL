import { useState } from 'react'
import Header from './features/header'
import Footer from './features/footer'
import ContactModal from './features/contact-modal'
import HomePage from './features/home'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const openModal = (plan = '') => {
    setSelectedPlan(plan)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedPlan('')
    setModalOpen(false)
  }

  return (
    <>
      <Header onOpenModal={() => openModal()} />
      <HomePage onOpenModal={openModal} />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={handleCloseModal} initialPlan={selectedPlan} />
    </>
  )
}
