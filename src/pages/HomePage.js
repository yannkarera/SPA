import { APP_NAME } from "../config/constants.js";
import { SpotList } from "../components/SpotList.js";

async function fetchSpots() {
    const response = await fetch('/api/fishspots');
    const json = await response.json();
    return json.data; // ton API retourne { code: 200, data: [...] }
}

export async function HomePage() {
    const spots = await fetchSpots();

    return `
    <div class="animate-fadeIn">
        <section class="text-center p-12 bg-white rounded-lg mb-8 shadow-sm">
            <h1 class="text-[#1a5276] mb-2">Bienvenue sur ${APP_NAME} !</h1>
            <p>Découvrez les meilleurs spots de pêche près de chez vous.</p>
        </section>
        <section class="spots-section">
            <h1>Les spots de pêche</h1>
            ${SpotList({ spots })}
        </section>
    </div>
    `;
}