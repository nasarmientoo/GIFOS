import { getTrendData } from "../../sections/trending-model.js";
import { getSearchData } from "../model/home-model.js";

//Plantilla HTML página inicial Home
export const renderHome = () => {
    const html = `
    <h1>Inspírate, busca, guarda y crea los mejores GIFOS</h1>
    <img src="assets/images/ilustra_header.svg">
    <form>
        <label for="search">Busca GIFOS y más</label>
        <input id="search" type="search">
        <button id="btnSearch" type="button">Go</button>
        <div id="search-container"></div>
        <section id="trend-section"></section>
    </form>`
    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = html

    return homeContainer
}

//Funcionalidad después de cargada la página
export function afterRenderHome() {
    getTrendData()
    document.getElementById('btnSearch').addEventListener('click', getSearchData)
}