import { init } from './router.js';

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('hashchange', init);