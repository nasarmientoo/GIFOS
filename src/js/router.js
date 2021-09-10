import { renderHome, afterRenderHome } from "./pages/view/home-view.js";

const container = document.getElementById('root');

export const init = () => {
    const url = window.location.hash;
    container.innerHTML = '';

    switch (url) {
        case '#/home':
            container.appendChild(renderHome());
            afterRenderHome()
            break;
        default:
            window.location.assign('#/home');
            break;
    }
}