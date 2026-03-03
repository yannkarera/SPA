import { APP_NAME, ROUTES } from "../config/constants.js";

export function Header() {
    return `
    <header class="bg-gradient-to-br from-[#1a5276] to-[#2e86ab] text-white py-4 shadow">
        <div class="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
            <a href="${ROUTES.HOME}" data-link class="text-xl font-bold text-white no-underline">
                🎣 ${APP_NAME}
            </a>
            <nav class="flex gap-6">
                <a href="${ROUTES.HOME}" data-link class="text-white/90 no-underline transition-colors hover:text-white">Accueil</a>
                <a href="${ROUTES.ADD_SPOT}" data-link class="text-white/90 no-underline transition-colors hover:text-white">Ajouter</a>
                <a href="${ROUTES.FAVORITES}" data-link class="text-white/90 no-underline transition-colors hover:text-white">Favoris</a>
                <a href="${ROUTES.SEARCH}" data-link class="text-white/90 no-underline transition-colors hover:text-white">Recherche</a>
            </nav>
        </div>
    </header>
    `;
}