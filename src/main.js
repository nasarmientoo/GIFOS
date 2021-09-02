function getAllUrls(urls) {
    return Promise.all(
        urls.map(url => fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log('[+]', content.data)
                console.log('[-]', content.meta)
            })
        )
    )
}

function init() {
    let apiKey = 'fWThAF0VpzbGsNMM8hag7y8u9OJjig7y';
    let urls = [
        `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20&offset=3`,
    ]

    document.getElementById('btnSearch').onclick = function() {
        let userInput = document.getElementById('search').value.trim()
        let searchUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}api_key=${apiKey}&limit=20&offset=5`
        return urls.push(searchUrl)
    }

    let responses = getAllUrls(urls)
}

init()