import PropTypes from 'prop-types'

/**
 * Card visual para un item dropdown de tipo cards.
 *
 * @param {{ card: { eyebrow: string, title: string, description: string, cta: string, image: string }, onCloseAll: () => void }} props
 */
export default function HeaderNavCard({ card, onCloseAll }) {
  return (
    <button type="button" className="hb-nav-card" onClick={onCloseAll}>
      <div className="hb-nav-card-media">
        <img src={card.image} alt={card.title} loading="eager" fetchPriority="high" />
      </div>

      <div className="hb-nav-card-content">
        <span className="hb-nav-card-eyebrow">{card.eyebrow}</span>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <span className="hb-nav-card-cta">
          {card.cta}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </button>
  )
}

HeaderNavCard.propTypes = {
  card: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onCloseAll: PropTypes.func.isRequired,
}
