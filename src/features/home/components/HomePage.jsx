import PropTypes from 'prop-types'
import MethodologySection from './MethodologySection'
import PricingSection from './PricingSection'
import FaqSection from './FaqSection'
import '../styles/home.css'

/**
 * Página principal modular de la aplicación.
 *
 * @param {{ onOpenModal?: (plan?: string) => void }} props
 */
export default function HomePage({ onOpenModal }) {
  return (
    <main>
      <MethodologySection />
      <PricingSection onOpenModal={onOpenModal} />
      <FaqSection />
    </main>
  )
}

HomePage.propTypes = {
  onOpenModal: PropTypes.func,
}
