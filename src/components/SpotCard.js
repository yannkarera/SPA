/**
 * @param {Object}
 * @param {number} id
 * @param {String} name
 * @param {String} type
 * @param {String} fish 
 * @param {number} rating
 * @param {String} image
 */

export function SpotCard({ id, name, type, fish, rating, image }) {
  const stars = '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));

  return `
    <article class="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      <div class="relative aspect-video">
        <img src="${image}" alt="${name}" class="w-full h-full object-cover" loading="lazy" />
        <span class="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs uppercase">
          ${type}
        </span>
      </div>

      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">${name}</h3>

        <div class="flex flex-wrap gap-1 mb-3">
          ${fish.map(f => `
            <span class="bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full text-xs">${f}</span>
          `).join('')}
        </div>

        <div class="flex items-center gap-2 mb-3">
          <span class="text-amber-400">${stars}</span>
          <span class="text-gray-500 text-sm">${rating.toFixed(1)}</span>
        </div>

        <a href="/spots/${id}" data-link class="text-blue-600 font-medium hover:underline">
          Voir le détail &rarr;
        </a>
      </div>
    </article>
  `;
}
