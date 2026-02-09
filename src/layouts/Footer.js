import { APP_NAME } from "../config/constants.js";



export function Footer() {
    const currentYear = new Date().getFullYear();
    return `
    <footer class="footer">
        <div class="footer__container">
            <p>&copy; ${currentYear} ${APP_NAME} - Tous droits réservés</p>
            <nav class="footer__nav">
                <a href="/mentions-legales" data-link>Mentions Legales</a>
                <a href="/contact" data-link>Contact</a>
            </nav>
        </div>
    </footer>
    `;  
}