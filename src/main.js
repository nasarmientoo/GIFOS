document.addEventListener('DOMContentLoaded', init)
document.getElementById('btnSearch').addEventListener('click', search)

//Acceder a la data con los trending gifs
function init() {
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let trendUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20&offset=3`

    fetch(trendUrl)
        .then(response => response.json())
        .then(content => {
            console.log('[*]', content.data)
            console.log('[-]', content.meta)
        })
}

//Acceder a la data con los gifs buscados
function search() {
    let userInput = document.getElementById('search').value.trim()
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let searchUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${apiKey}&limit=20&offset=5`

    fetch(searchUrl)
        .then(response => response.json())
        .then(content => {
            console.log('[+]', content.data)
            console.log('[-]', content.meta)
        })
}