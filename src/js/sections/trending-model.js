import { capitalize } from "../pages/model/home-model.js";

//Sección de trending gifs y funcionalidad al flechas slider
function appendTrendData() {
    let container = document.querySelector('#trend-section')
    let content = `
                <div class="trending-container">
                    <div class="trend-header">
                        <h2>Trending GIFOS</h2>
                        <p>Mira los últimos GIFO de nuestra comunidad</p>
                    </div>
                    <div class="carousel-container">
                        <a id="hover-left"><img class="image_on" src="assets/images/button-slider-left.svg"><img id="slide-left" class="image_off" src="assets/images/button-slider-left-hover.svg" type="button" onclick="slide(-3)"></a>
                        <div class="card-container"></div>
                        <a id="hover-rigth"><img class="image_on" src="assets/images/Button-Slider-right.svg"><img id="slide-rigth" class="image_off" src="assets/images/Button-Slider-right-hover.svg" type="button" onclick="slide(3)"></a>
                    </div>
                </div>
                `
    container.innerHTML = content
}

//Agregar toda la data de la API a la sección creada en Append Data
window.loadTrendData = (data) => {
    let trendSection = document.querySelector('.card-container')
    let content = ''
    for (let i = 0; i < data.length; i++) {
        content += `
                <div class="cards content-area" >
                    <img class="image-card" src="${data[i].images.downsized.url}">
                    <div class="custom-overlay">
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
                </div>`
    }
    trendSection.innerHTML = content
}

//Funcionalidad flechas de slider
window.rev = 0;
window.slide = (n) => {
    rev = rev + n;
    carousel(rev);
}

//Función slideshow multi-item
window.carousel = (review) => {
    let cards = document.getElementsByClassName("cards");
    if (review >= cards.length - 2) {
        review = 0
        rev = 0
    }
    if (review < 0) {
        review = cards.length - 3;
        rev = cards.length - 3;
    }
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }

    for (let i = review; i <= review + 2; i++) {
        cards[i].style.display = "block";
    }
}

//Acceder a la data con trending gifs
export function getTrendData() {
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let trendUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=3`

    fetch(trendUrl)
        .then(response => response.json())
        .then(content => {
            console.log(content.data)
            appendTrendData()
            loadTrendData(content.data)
            carousel(rev)
        })
}