import { APP_NAME } from "../config/constants.js";
import { SpotList} from "../components/SpotList.js";

function getMockSpots() {
    return [
        {
            id: 1,
            name: 'Lac de la Forêt',
            type: "Lac",
            fish: ['Carpe', 'Brochet'],
 
            rating: 4.5,
            image: 'https://picsum.photos/seed/lake1/400/300'
        },
        {
            id: 2,
            name: 'Rivière des Moulin',
            type: 'Rivière',
            fish: ['Truite', 'Perche'],
            rating: 4.2,
            image: 'https://picsum.photos/seed/river1/400/300'
        },
        {
            id: 3,
            name: 'Etang des Saules',
            type: 'Etang',
            fish: ['Carpe', 'Sandre'],
            rating: 3.8,
            image: 'https://picsum.photos/seed/pond2/400/300'
        },
        {
            id: 4,
            name: 'Canal Saint-Martin',
            type: 'Canal',
            fish: ['Silure', 'Perche'],
            rating: 3.5,
            image: 'https://picsum.photos/seed/canal1/400/300'
        }
    ];  
}   

export function HomePage() {
    return `
    <div class="page page--home">
    <section class="hero">
        <h1>Bienvenue sur ${APP_NAME} !</h1>
        <p>Découvrez les meilleurs spots de pêche près de chez vous.</p> 
    </section>
    <section class="spots">
        <h2>Les spots de pêche</h2>
        ${SpotList({ spots: getMockSpots()})}
    </section>
</div>
    `;
}

   