type Source = {
    id : any
    name : string
}

type Articles = {
    source : Source
    author :  string | null
    category : string 
    title : string 
    description : string 
    url : string
    urlToImage : string
    publishedAt : string
    content : string
}

type data = {
    status : string
    totalResults : number
    articles : Articles[]
}

type Category =
    |   "business"
    |   "entertainment"
    |   "general"
    |   "health"
    |   "science"
    |   "sports"
    |   "technology"