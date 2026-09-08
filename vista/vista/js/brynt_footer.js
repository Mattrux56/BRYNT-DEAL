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
                        <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('brynt-footer', BryntFooter);