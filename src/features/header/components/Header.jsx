import PropTypes from 'prop-types'
import { headerBrand } from '../constants/headerData'
import { useHeader } from '../hooks/useHeader'
import HeaderNavItem from './HeaderNavItem'

export default function Header({ onOpenModal }) {
  const {
    navItems,
    openDropdown,
    handleToggle,
    handleCloseAll,
    handleLogoClick,
    handleScrollToTop,
  } = useHeader()

  return (
    <header className="navbar hb-navbar">
      <a href={headerBrand.href} className="hb-logo-block" onClick={handleLogoClick}>
        <div className="logo-container">
          <img src={headerBrand.logoSrc} alt={headerBrand.alt} className="logo-icon" />
        </div>
        <span className="hb-logo-tagline">{headerBrand.tagline}</span>
      </a>

      <nav className="hb-nav" aria-label="Navegación principal">
        {navItems.map((item) => {
          if (item.type === 'simple') {
            return (
              <div key={item.label} className="hb-nav-link">
                <button
                  type="button"
                  className="hb-nav-trigger"
                  aria-expanded="false"
                  onClick={handleScrollToTop}
                >
                  {item.label}
                </button>
              </div>
            )
          }

          return (
            <HeaderNavItem
              key={item.label}
              item={item}
              isOpen={openDropdown === item.label}
              onToggle={handleToggle}
              onCloseAll={handleCloseAll}
            />
          )
        })}

        <button type="button" className="btn-contact hb-nav-cta" onClick={onOpenModal}>
          Contáctanos
        </button>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
}
