import PropTypes from 'prop-types'
import HeaderNavPanel from './HeaderNavPanel'

/**
 * Representa un item de navegación con soporte para menú simple o dropdown.
 *
 * @param {{ item: { label: string, type: string, items?: Array<string>, cards?: Array }, isOpen: boolean, onToggle: (label: string) => void, onCloseAll: () => void }} props
 */
export default function HeaderNavItem({ item, isOpen, onToggle, onCloseAll }) {
  return (
    <div className={`hb-nav-item ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="hb-nav-trigger"
        aria-expanded={isOpen}
        onClick={() => onToggle(item.label)}
      >
        {item.label}
        <svg className="hb-nav-caret" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <HeaderNavPanel item={item} onCloseAll={onCloseAll} />
    </div>
  )
}

HeaderNavItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string),
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onCloseAll: PropTypes.func.isRequired,
}
