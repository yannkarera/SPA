/**
 * @param {Object}  - The properties object.
 * @param {string} label - The label for the counter.
 * @param {number} initialValue - The initial value of the counter.
 * @param {string} targetId - The ID of the target element to update.
 */
const state = {
    count: 0
};

/**
 * Initializes the counter with a given initial value.
 * @param {number} initialValue - The initial value for the counter.
 */
export function initCounter(initialValue = 0) {
    state.count = initialValue;
}

/**
 * Increments the counter and updates the target element.
 * @param {string} targetId - The ID of the target element to update.
 */
export function IncrementCounter(targetId) {
    state.count++;
    render(targetId);
}

/**
 * Decrements the counter and updates the target element.
 * @param {string} targetId - The ID of the target element to update.
 */
export function DecrementCounter(targetId) {
    state.count--;
    render(targetId);
}

/**
 * Resets the counter to the initial value and updates the target element.
 * @param {string} targetId - The ID of the target element to update.
 * @param {number} initialValue - The initial value for the counter.
 */
export function resetCounter(targetId, initialValue) {
    state.count = initialValue;
    render(targetId);
}

/**
 * Renders the current count to the target element.
 * @param {string} targetId - The ID of the target element to update.
 */
function render(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.textContent = state.count;
    }
}

function attachEvents(targetId) {
  const container = document.getElementById(targetId);
  const initialValue = parseInt(container.dataset.initial) || 0;

  container.querySelector('.btn-decrement')?.addEventListener('click', () => decrement(targetId));
  container.querySelector('.btn-increment')?.addEventListener('click', () => increment(targetId));
  container.querySelector('.btn-reset')?.addEventListener('click', () => reset(targetId, initialValue));
}

/**
 * Le composant Counter
 */
export function Counter(props) {
  const { label = 'Compteur', targetId } = props;

  return `
    <div class="flex flex-col items-center gap-4 p-8 border border-gray-300 rounded max-w-xs mx-auto my-8">
      <h3 class="m-0 text-gray-800">${label}</h3>
      <div class="text-3xl font-bold text-blue-500">
        <span class="counter__value">${state.count}</span>
      </div>
      <div class="flex gap-2">
        <button class="px-4 py-2 text-lg rounded cursor-pointer transition-opacity hover:opacity-90" type="button">-</button>
        <button class="px-4 py-2 text-lg rounded cursor-pointer transition-opacity hover:opacity-90 bg-gray-400 text-white" type="button">Reset</button>
        <button class="px-4 py-2 text-lg rounded cursor-pointer transition-opacity hover:opacity-90  bg-green-500 text-white" type="button">+</button>
      </div>
    </div>
  `;
}

/**
 * Monte le composant dans le DOM
 */
export function mountCounter(targetId, props = {}) {
  const { label = 'Compteur', initialValue = 0 } = props;

  // Stocker les props dans les data attributes pour les retrouver au re-render
  const container = document.getElementById(targetId);
  if (container) {
    container.dataset.label = label;
    container.dataset.initial = initialValue;
    initCounter(initialValue);
    render(targetId);
  }
}