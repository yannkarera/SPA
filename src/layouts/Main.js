import '../index.css'
/**
 * @param {Object}
 * @param {String} content
 */

export function Main(props =  {}) {
    const { content = ''} = props;

    return `
    <main class="main" id="main-content">
        <div class="main__container">
            ${content}
        </div>
    </main>
    `;  

}