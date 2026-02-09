import { APP_NAME, ROUTES } from "../config/constants.js";

export function Header() {
    return `
    <header class="header">
        <div class="header__container">
            <a href="${ROUTES.HOME}" data-link class="header__logo">
                🎣 ${APP_NAME}
            </a>
            <nav class="header__nav">
                <a href="${ROUTES.HOME}" data-link class="nav__link">Accueil</a>
                <a href="${ROUTES.ADD_SPOT}" data-link class="nav__link">Ajouter</a>
                <a href="${ROUTES.FAVORITES}" data-link class="nav__link">Favoris</a>
                <a href="${ROUTES.SEARCH}" data-link class="nav__link">Recherche</a>
            </nav>
        </div>
    </header>
    `;
}