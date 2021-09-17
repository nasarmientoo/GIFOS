//Renderizar tarjetas de gifs buscados
function appendData(data, container, input) {
    let content = ` 
                <div class"gifs-container">
                    <h1 class="title">${input}</h1>
                    <img id="show-more" src="assets/CTA-ver-mas.svg" type="button" onclick="loadData(${JSON.stringify(data).split('"').join("&quot;")})">
                </div>`
    container.innerHTML = content
}

window.loadData = (data) => {
    /* for (let i = 0; i < data.length; i++) {
        content += `
                    <div class="section-cards">
                        <img src="${data[i].images.downsized.url}">
                    </div>
                `
    } */
    console.log(data)
}

//Acceder a la data buscada
export function getSearchData() {
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let input = document.querySelector('#search').value.trim()
    let container = document.querySelector('#search-container')
    let searchUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}&offset=12`

    fetch(searchUrl)
        .then(response => response.json())
        .then(content => {
            appendData(content.data, container, input)
        })
}