import PropTypes from 'prop-types'
import HeaderNavCard from './HeaderNavCard'

/**
 * Renderiza el contenido del panel desplegable para un item del menú.
 *
 * @param {{ item: { cards?: Array, items?: Array<string> }, onCloseAll: () => void }} props
 */
export default function HeaderNavPanel({ item, onCloseAll }) {
  if (item.cards) {
    return (
      <div className="hb-nav-panel hb-nav-panel--cards">
        {item.cards.map((card) => (
          <HeaderNavCard key={card.title} card={card} onCloseAll={onCloseAll} />
        ))}
      </div>
    )
  }

  return (
    <div className="hb-nav-panel">
      {item.items.map((subItem) => (
        <a
          key={subItem}
          href="#"
          onClick={(event) => {
            event.preventDefault()
            onCloseAll()
          }}
        >
          {subItem}
        </a>
      ))}
    </div>
  )
}

HeaderNavPanel.propTypes = {
  item: PropTypes.shape({
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    ),
    items: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onCloseAll: PropTypes.func.isRequired,
}
