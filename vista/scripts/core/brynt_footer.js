/**
 * js/brynt-footer.js
 * Web Component Reutilizable para el Footer Corporativo de BRYNT DEAL S.A.S.
 */

class BryntFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #0c192c;
                    color: #94a3b8;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    font-size: 0.875rem;
                    line-height: 1.5;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 4rem 1.5rem 2rem 1.5rem;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .footer-column h4 {
                    color: #ffffff;
                    font-size: 0.95rem;
                    font-weight: 700;
                    margin-bottom: 1.25rem;
                    letter-spacing: -0.01em;
                }

                .footer-column ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-column li {
                    margin-bottom: 0.75rem;
                }

                .footer-column a {
                    color: #94a3b8;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .footer-column a:hover {
                    color: #c69214;
                }

                .external-icon {
                    font-size: 0.75rem;
                    margin-left: 0.2rem;
                }

                .footer-divider {
                    border: 0;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    margin-bottom: 2rem;
                }

                .footer-bottom {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1.5rem;
                    font-size: 0.8rem;
                }

                .legal-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.25rem;
                }

                .legal-links a {
                    color: #94a3b8;
                    text-decoration: none;
                }

                .legal-links a:hover {
                    color: #ffffff;
                }

                .social-icons {
                    display: flex;
                    gap: 1rem;
                }

                .social-icons svg {
                    width: 18px;
                    height: 18px;
                    fill: #94a3b8;
                    transition: fill 0.2s ease;
                    cursor: pointer;
                }

                .social-icons svg:hover {
                    fill: #c69214;
                }

                @media (max-width: 640px) {
                    .footer-container {
                        padding: 2.5rem 1.25rem 1.5rem 1.25rem;
                    }

                    .footer-grid {
                        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                        gap: 1.75rem;
                        margin-bottom: 2rem;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                        text-align: left;
                    }

                    .legal-links {
                        gap: 0.85rem 1rem;
                    }
                }
            </style>

            <footer class="footer-container">
                <div class="footer-grid">
                    <div class="footer-column">
                        <h4>Tecnología BRYNT</h4>
                        <ul>
                            <li><a href="#">TRACE Engine</a></li>
                            <li><a href="#">Integración Webhook</a></li>
                            <li><a href="#">Gestión de Lead ID</a></li>
                            <li><a href="#">Panel Analítico ↗</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>Objetivos</h4>
                        <ul>
                            <li><a href="#">Prospección B2B</a></li>
                            <li><a href="#">Captación Sectorial</a></li>
                            <li><a href="#">Optimización de Recaudo</a></li>
                            <li><a href="#">Auditoría de Embudo</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>Sectores</h4>
                        <ul>
                            <li><a href="#">Industria & Abastecimiento</a></li>
                            <li><a href="#">Servicios Técnicos</a></li>
                            <li><a href="#">Gestión Empresarial</a></li>
                            <li><a href="#">Salud & Bienestar</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="#">Sobre BRYNT DEAL</a></li>
                            <li><a href="#">Metodología CaaS</a></li>
                            <li><a href="#">Casos de Éxito</a></li>
                            <li><a href="#">Contacto Directo</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>Soporte & Legal</h4>
                        <ul>
                            <li><a href="#">Políticas Habeas Data</a></li>
                            <li><a href="#">Términos del Servicio</a></li>
                            <li><a href="#">Centro de Ayuda</a></li>
                        </ul>
                    </div>
                </div>

                <hr class="footer-divider">

                <div class="footer-bottom">
                    <div>© 2026 BRYNT DEAL S.A.S. — Commercial Growth as a Service</div>
                    
                    <div class="legal-links">
                        <a href="#">Privacidad</a>
                        <a href="#">Cookies</a>
                        <a href="#">Condiciones</a>
                        <a href="#">Mapa del sitio</a>
                    </div>

                    <div class="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
                            <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
                            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://wa.me/573000000000" target="_blank" rel="noopener" aria-label="WhatsApp">
                            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.148-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zM12.02 2.5C6.344 2.5 1.75 7.08 1.75 12.75c0 1.755.455 3.471 1.32 4.97L1.5 22.5l4.896-1.534c1.427.78 3.027 1.187 4.624 1.187 5.676 0 10.27-4.58 10.27-10.25S17.696 2.5 12.02 2.5zm0 18.25c-1.473 0-2.916-.394-4.174-1.137l-.299-.177-2.9.91.97-2.821-.195-.305A8.35 8.35 0 0 1 3.75 12.75C3.75 8.204 7.469 4.5 12.02 4.5c4.551 0 8.27 3.704 8.27 8.25s-3.719 8.25-8.27 8.25z"/></svg>
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('brynt-footer', BryntFooter);