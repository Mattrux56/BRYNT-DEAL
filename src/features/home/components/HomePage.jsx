import PropTypes from 'prop-types'
import HeroSection from './HeroSection'
import KpiBand from './KpiBand'
import MethodologySection from './MethodologySection'
import ValueSection from './ValueSection'
import PricingSection from './PricingSection'
import { TestimonialsSection } from '../../testimonials'
import FaqSection from './FaqSection'

/**
 * Página principal modular de la aplicación.
 *
 * @param {{ onOpenModal?: (plan?: string) => void }} props
 */
export default function HomePage({ onOpenModal }) {
  return (
    <main>
      <HeroSection />
      <KpiBand />
      <MethodologySection />
      <ValueSection />
      <PricingSection onOpenModal={onOpenModal} />
      <TestimonialsSection />
      <FaqSection />
    </main>
  )
}

HomePage.propTypes = {
  onOpenModal: PropTypes.func,
}
