function appendTrendData() {
    let container = document.querySelector('#trend-section')
    let content = `
                <div class="trending-container">
                    <div class="trend-header">
                        <h2>Trending GIFOS</h2>
                        <p>Mira los últimos GIFO de nuestra comunidad</p>
                    </div>
                    <div class="carousel-container">
                        <div class="card-container"></div>
                        <img id="slide-left" src="assets/button-slider-left.svg" type="button" onclick="loadLeft()">
                        <img id="slide-rigth" src="assets/Button-Slider-right.svg" type="button" onclick="slideRigth()">
                    </div>
                </div>
                `
    container.innerHTML = content
}

window.loadTrendData = (data) => {
    let trendSection = document.querySelector('.card-container')
    let content = ''
    for (let i = 0; i < data.length; i++) {
        content += `
                <div class="card">
                    <img class="images"src="${data[i].images.downsized.url}">
                </div>`

    }
    trendSection.innerHTML = content
}

//Acceder a la data con trending gifs
export function getTrendData() {
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let trendUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=3`

    fetch(trendUrl)
        .then(response => response.json())
        .then(content => {
            appendTrendData()
            loadTrendData(content.data)
        })
}