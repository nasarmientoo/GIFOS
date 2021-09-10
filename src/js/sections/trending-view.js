//Renderizar tarjetas de trending gifs
function appendTrendData(data, container) {
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

//Acceder a la data con trending gifs
export function getTrendData() {
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let container = document.querySelector('.trend-container')
    let trendUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=3&offset=3`

    fetch(trendUrl)
        .then(response => response.json())
        .then(content => {
            appendTrendData(content.data, container)
        })
}