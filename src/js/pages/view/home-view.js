import { getTrendData } from "../../sections/trending-model.js";
import { getSearchData, getAutocompleteData } from "../model/home-model.js";

//Plantilla HTML página inicial Home
export const renderHome = () => {
    const html = `
    <div class="search-section">
        <div class="search-header">
            <h1>Inspírate, busca, guarda y crea los mejores <span class="blue-text">GIFOS</span></h1>
            <img src="assets/images/ilustra_header.svg">
            <form>
                <div class="search-input">
                    <input id="search" type="search" placeholder="Busca GIFOS y más"  autocomplete="off">
                    <img id="btnSearch" type="button" src="assets/images/icon-search.svg"></br>
                </div>
                <ul id="match-list"></ul>
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
    let input = document.getElementById('search')
    getTrendData()
    document.getElementById('btnSearch').addEventListener('click', getSearchData)
    input.addEventListener('input', getAutocompleteData)
}