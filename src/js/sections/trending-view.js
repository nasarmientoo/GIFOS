/* document.addEventListener('DOMContentLoaded', trendingData)
    //Acceder a la data con los trending gifs
function trendingData() {
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let trendUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20&offset=3`

    fetch(trendUrl)
        .then(response => response.json())
        .then(content => {
            console.log('[*]', content.data)
            console.log('[-]', content.meta)
        })
} */