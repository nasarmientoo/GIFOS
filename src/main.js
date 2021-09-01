document.addEventListener('DOMContentLoaded', init);

function init () {
    document.getElementById('btnSearch').addEventListener('click', e =>{
        e.preventDefault();
        let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
        let userInput = document.getElementById('search').value.trim()
        let url = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${apiKey}&limit=20&offset=5`
        
        fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log('[+]',content.data)
            console.log('[-]',content.meta)
            
        })
        .catch(e => console.log(e))
    })
}