import { getData } from "../model/home-model.js";

//Plantilla HTML página inicial Home
export const renderHome = () => {
    const html = `
    <h1>Inspírate, busca, guarda y crea los mejores GIFOS</h1>
    <img src="assets/ilustra_header.svg">
    <form>
        <label for="search">Busca GIFOS y más</label>
        <input id="search" type="search">
        <button id="btnSearch" type="button">Go</button>
        <div id="gifs-container"></div>
    </form>`
    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = html

    return homeContainer
}

export function afterRenderHome() {
    document.getElementById('btnSearch').addEventListener('click', getData)

}