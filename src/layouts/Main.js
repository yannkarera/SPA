import '../index.css'
/**
 * @param {Object}
 * @param {String} content
 */

export function Main(props =  {}) {
    const { content = ''} = props;

    return `
    <main class="flex-1 py-8" id="main-content">
        <div class="max-w-[1200px] mx-auto px-4">
            ${content}
        </div>
    </main>
    `;  

} 