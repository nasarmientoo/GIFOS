//Primer carácter en mayúscula
export const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

//Sección de gifs buscados y funcionalidad al botón 'ver más'
const appendData = (input) => {
    let container = document.querySelector('#search-container')
    let content = ` 
                <h1 class="title">${capitalize(input)}</h1>
                <div id="search-cards"></div>
                <div>
                    <img id="show-more" src="assets/images/CTA-ver-mas.svg" type="button" onclick="loadMore()">
                </div>`
    container.innerHTML = content
}

//Agregar toda la data de la API a la sección creada en Append Data
window.loadData = (data) => {
    let cardSection = document.getElementById('search-cards')
    let content = ''
    if (data.length == 0) {
        content += `
            <div class="no-result-search">
                <img src="assets/images/icon-busqueda-sin-resultado.svg">
                <p>Intenta con otra búsqueda<p>
            </div>`
    }
    for (let i = 0; i < data.length; i++) {
        content += `
            <div class="content-area hidden">
                <img class="search-gifs" src="${data[i].images.downsized.url}">
                <div class="custom-overlay-search">
                    <div class="custom-overlay-icons">
                        <a id="hover-fav"><img class="image_on" src="assets/images/icon-fav.svg"><img class="image_off" src="assets/images/icon-fav-hover.svg"></a>
                        <a id="hover-fav"><img class="image_on" src="assets/images/icon-download.svg"><img class="image_off" src="assets/images/icon-download-hover.svg"></a>
                        <a id="hover-fav"><img class="image_on" src="assets/images/icon-max-normal.svg"><img class="image_off" src="assets/images/icon-max-hover.svg"></a>
                    </div>
                    <div class="custom-overlay-text">
                        <p>${capitalize(data[i].username)}</p>
                        <p>${capitalize(data[i].title)}</p>
                    </div>
                </div>
            </div>
    `
    }
    cardSection.innerHTML = content
}

//Funcionalidad botón 'ver más'
window.loadMore = () => {
    let showMoreButton = document.getElementById('show-more')
    let list = [...document.querySelectorAll('.hidden')]

    list.splice(0, 12).forEach(
        elem => elem.classList.remove('hidden')
    );

    if (list.length === 0) {
        showMoreButton.classList.add('hidden');
    }
}

//Acceder a la data buscada y renderizarla 
export const getSearchData = () => {
    document.querySelector('#default-content').style.display = "none";
    let input = document.querySelector('#search').value.trim()
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let searchUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}&offset=12`

    fetch(searchUrl)
        .then(response => response.json())
        .then(content => {
            appendData(input)
            loadData(content.data)
            loadMore()
        })
}

/* Función de autocompletar ---------------------------------- */

//Agregar sugerencias 
const loadAutocompleteData = (data) => {
    let suggestContainer = document.getElementById('match-list')
    let content = ''
    for (let i = 0; i < data.length; i++) {
        content += ` 
                <li class="autocomplete-item" onclick="select('${data[i].name}')">${capitalize(data[i].name)}</li>`
    }
    suggestContainer.innerHTML = content
}

window.select = (element) => {
    let input = document.querySelector('#search')
    input.value = element
    getSearchData()
}

//Acceder a la data de sugerencias
export const getAutocompleteData = (data) => {
    document.querySelector('#match-list').style.display = "block";
    let input = document.querySelector('#search').value.trim()
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let searchUrl = `https://api.giphy.com/v1/gifs/search/tags?q=${input}&api_key=${apiKey}`

    fetch(searchUrl)
        .then(response => response.json())
        .then(content => {
            loadAutocompleteData(content.data)
        })
}