/**
 * @param {object}
 * @param {string} id
 */

export function SpotDetailPage(params){
    const { id } = params;

    return `
    <div class="page page--spot-detail">
        <a href="/" data-link class="inline-block mb-4 text-gray-600 no-underline hover:text-gray-900">&larr; Retour à la liste</a>
        <h1>Détail du Spot #${id}</h1>
        <p>Contenu à implémenter...</p>
        </div>
    `;  
        
}