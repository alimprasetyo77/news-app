const fetchNews = async ( category? : Category | string, keyword? : string) => {
    let response 
    if(category !== undefined ) {
        response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=3c86b7d91891456c8029587b69c901c1`
        )
        if(keyword !== undefined) {
            response = await fetch(
                `https://newsapi.org/v2/everything?q=${keyword}&from=2023-02-05&sortBy=popularity&apiKey=3c86b7d91891456c8029587b69c901c1`
            )
        }
    }else {
        response = await fetch(
            'https://newsapi.org/v2/top-headlines?country=us&apiKey=3c86b7d91891456c8029587b69c901c1'
        )
    }
    return response.json()
}


export default fetchNews