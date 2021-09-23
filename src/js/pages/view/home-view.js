import { getTrendData } from "../../sections/trending-model.js";
import { getSearchData } from "../model/home-model.js";

//Plantilla HTML página inicial Home
export const renderHome = () => {
    const html = `
    <div class="search-section">
        <div class="search-header">
            <h1>Inspírate, busca, guarda y crea los mejores <span class="blue-text">GIFOS</span></h1>
            <img src="assets/images/ilustra_header.svg">
            <form class="search-input">
                <input id="search" type="search" placeholder="Busca GIFOS y más">
                <img type="button" src="assets/images/icon-search.svg" id="btnSearch" >
            </form>
        </div>
        <div id="search-container"></div>
        <div id="default-content">
            <p>Trending:</p>
            <p> Reactions, Entertainment, Sports, Stickers, Artist </p>
        </div>
        <section id="trend-section"></section>
    </div>`
    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = html

    return homeContainer
}

//Funcionalidad después de cargada la página
export function afterRenderHome() {
    getTrendData()
    document.getElementById('btnSearch').addEventListener('click', getSearchData)
}