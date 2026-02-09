import { SpotCard } from "./SpotCard.js";

/**
 * @param {Object}
 * @param {Array} spots
 * 
 * */

export function SpotList(props) {
    const { spots = []} = props;

    if (spots.length === 0) {
        return `
            <div class="spot-list spot-list--empty">
                <p>Aucun spot trouvé.</p>
            </div>
        `;
    } else {
        return `
        <div class="spot-list">
            ${spots.map(spot => SpotCard(spot)).join('')}
        </div>
        `;}
}