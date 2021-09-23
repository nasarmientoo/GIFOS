//Sección de gifs buscados y funcionalidad al botón 'ver más'
function appendData(input) {
    let container = document.querySelector('#search-container')
    let content = ` 
                <div class"searched-container gifs">
                    <h1 class="title">${input}</h1>
                    <div id="search-cards"></div>
                    <img id="show-more" src="assets/images/CTA-ver-mas.svg" type="button" onclick="loadMore()">
                </div>`
    container.innerHTML = content
}

//Agregar toda la data de la API a la sección creada en Append Data
window.loadData = (data) => {
    let cardSection = document.getElementById('search-cards')
    let content = ''
    for (let i = 0; i < data.length; i++) {
        content += `<img class="search-gifs hidden" src="${data[i].images.downsized.url}">`
    }
    cardSection.innerHTML = content
}

//Funcionalidad botón 'ver más'
window.loadMore = () => {
    let showMoreButton = document.getElementById('show-more')
    let list = [...document.querySelectorAll('.search-gifs.hidden')]

    list.splice(0, 12).forEach(
        elem => elem.classList.remove('hidden')
    );

    if (list.length == 0) {
        showMoreButton.classList.add('hidden');
    }
}

//Acceder a la data buscada y renderizarla 
export function getSearchData() {
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