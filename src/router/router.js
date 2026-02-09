import { Layout }   from "../layouts/Layout.js";

class Router{
    constructor(){
        this.routes = {};
        this.notFoundHandler = () => '<h1>404 Not Found</h1>';

        window.addEventListener('popstate', () => {
            this.handleRoute(window.location.pathname); 
        });
    }
    /**
     * @param{string} path //- The URL path to register.
     * @param{function} handler //- The function to call when the path is matched.
     */
    addRoute(path, handler) {
        this.routes[path] = handler;
        return this;
    }

    setNotFound(handler) {
        this.notFoundHandler = handler;
        return this;
    }

    /**
     * @param{string} path //- The URL path to register.
     */
    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute(path);
    }

    /**
     * @param{string} path // Le chemin à afficher
     */
    handleRoute(path) {
        if(this.routes[path]){
            this.render(this.routes[path]());
            return;
        }

        for (const route in this.routes){
            const params = this.matchRoute(route, path);
            if(params){
                this.render(this.routes[route](params));
                return;
            }
        }

        this.render(this.notFoundHandler());
    }

    /**
     * @param {string} routePattern // Le modèle de route enregistré
     * @param {string} path // Le chemin actuel
     * @returns {object|null} // Les paramètres extraits ou null si pas de correspondance
     */
    matchRoute(routePattern, path) {
        const paramNames = [];
        const regexPattern = routePattern.replace(/:[^/]+/g, (_, paramName) => {
            paramNames.push(paramName);
            return '([^/]+)';
        });

        const regex = new RegExp(`^${regexPattern}$`);
        const match = path.match(regex);
        if(!match) return null;

        const params = {};
        paramNames.forEach((name, index) => {
            params[name] = match[index + 1];
        });

        return params;
    }

    /**
     *  @param {string} html 
     */
    render(html) {
        const app = document.getElementById('app');
        if (app){
            app.innerHTML = Layout({ content: html});
        }
    }

    start() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigate(e.target.getAttribute('href'));   
        }

    });
    this.handleRoute(window.location.pathname);
    }
}

export const router = new Router();

