import PropTypes from 'prop-types'
import { footerColumns } from '../constants/footerData'

/**
 * Pie de página principal de la aplicación.
 *
 * @param {{ onOpenModal: () => void }} props
 */
export default function Footer({ onOpenModal }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h4>{column.title}</h4>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>© 2026 BRYNT DEAL S.A.S.</span>
          <span>Commercial Growth as a Service</span>
        </div>

        <div className="footer-bottom-right">
          <span>Privacidad</span>
          <span>Cookies</span>
          <span>Condiciones</span>
          <span>Mapa del sitio</span>
        </div>

        <div className="footer-socials" aria-label="Redes sociales">
          <button type="button" aria-label="Facebook">f</button>
          <button type="button" aria-label="Instagram">IG</button>
          <button type="button" aria-label="LinkedIn">in</button>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  onOpenModal: PropTypes.func,
}
