//Plantilla HTML página inicial Home
export const renderHome = (data) => {
    const html = `
    <h1>Inspírate, busca, guarda y crea los mejores GIFOS</h1>
    <img src="assets/ilustra_header.svg">
    <form>
        <label for="search">Busca GIFOS y más</label>
        <input id="search" type="search">
        <button id="btnSearch" type="button">Go</button>
        <div id="searched-gifs-container"></div>
    </form>`
    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = html

    return homeContainer
}

export function afterRenderHome() {
    document.getElementById('btnSearch').addEventListener('click', searchData)
        //Acceder a la data con los gifs buscados
    function searchData() {
        let userInput = document.getElementById('search').value.trim()
        let searchedGifContainer = document.getElementById('searched-gifs-container')
        let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
        let searchUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${apiKey}&limit=20&offset=5`

        fetch(searchUrl)
            .then(response => response.json())
            .then(content => content.data.forEach(element => {
                console.log(element.images.downsized.url)
            }))
    }
}