import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Main } from "./Main.js";

/** 
 * @param {Object}
 * @param {String} content
 */

export function Layout(props = []){
    const { content = ''} = props;

    return `
    <div class="min-h-screen flex flex-col">
        ${Header()}
        ${Main({ content })}
        ${Footer()}
    </div>
    `;
}