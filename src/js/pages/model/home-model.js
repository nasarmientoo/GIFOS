//Renderizar tarjetas de gifs buscados 
function appendSearchData(data, container) {
    let content = ''
    for (let i = 0; i < data.length; i++) {
        content += `
                    <div class="cards">
                        <img src="${data[i].images.downsized.url}">
                    </div>
                `
    }
    container.innerHTML = content
}

//Acceder a la data buscada
export function getSearchData() {
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let input = document.querySelector('#search').value.trim()
    let container = document.querySelector('#search-container')
    let searchUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}&limit=3&offset=3`

    fetch(searchUrl)
        .then(response => response.json())
        .then(content =>
            appendSearchData(content.data, container)
        )
}