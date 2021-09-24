import { getTrendData } from "../../sections/trending-model.js";
import { getSearchData, getAutocompleteData } from "../model/home-model.js";

//Plantilla HTML página inicial Home
export const renderHome = () => {
    const html = `
    <div class="search-section">
        <div class="search-header">
            <h1>Inspírate, busca, guarda y crea los mejores <span class="blue-text">GIFOS</span></h1>
            <img src="assets/images/ilustra_header.svg">
            <form class="search-input">
                <div class="search-f">
                    <input id="search" type="search" placeholder="Busca GIFOS y más"  autocomplete="off">
                    <img id="btnSearch" type="button" src="assets/images/icon-search.svg">
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
    //Activar función para acceder a las sugerencias
    document.getElementById('search').addEventListener('input', getAutocompleteData)

    //Activar función para acceder a las búsquedas
    const btn = document.getElementById('btnSearch')
    const textBox = document.getElementById('search')
    btn.addEventListener('click', getSearchData)
    textBox.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) getSearchData()
    })

    //Activar función para acceder a los trendings
    getTrendData()

}