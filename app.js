import {
    LitElement,
    html
} from 'lit-element';
import {
    Router
} from '@vaadin/router';

class MyApp extends(LitElement) {
    render() {
        return html `
        <div id="mainApp"></div>
    `;
    }

    firstUpdated() {
        super.firstUpdated();
        this.generateRouter();
    }

    generateRouter() {
        const containerElement = this.renderRoot.querySelector("#mainApp");
        const router = new Router(containerElement);
        router.setRoutes([{
                path: '/',
                action: () => import('./src/component/login-element.js'),
                component: 'login-element',
            },
            {
                name: 'dash',
                path: '/dasbhboard',
                action: () => import('./src/component/dashboard-element.js'),
                component: 'dashboard-element',
            },
            {
                path: '(.*)',
                action: () => import('./src/component/not-found-element.js'),
                component: 'not-found-element',
            },
        ]);
    }


}

export default MyApp;
