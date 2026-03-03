import { APP_NAME } from "../config/constants.js";



export function Footer() {
    const currentYear = new Date().getFullYear();
    return `
    <footer class=" bg-gray-800 text-white py-6 mt-auto">
        <div class="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
            <p>&copy; ${currentYear} ${APP_NAME} - Tous droits réservés</p>
            <nav class="text-white/70 no-underline ml-4">
                <a href="/mentions-legales" data-link>Mentions Legales</a>
                <a href="/contact" data-link>Contact</a>
            </nav>
        </div>
    </footer>
    `;  
}