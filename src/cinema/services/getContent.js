

export const getContent = async(search) => {
    
    if(search === 'undefined') return;
    const END_POINT = 'https://www.omdbapi.com/';
    const API_KEY = 'ffcd1475';
    const URL = `${END_POINT}?apikey=${API_KEY}&s=${search}`;
    const data = await fetch(URL);
    const resp = await data.json();

    return resp.Search.map((item)=>({
        title: item.Title,
        year: item.Year,
        id: item.imdbID,
        category: item.Type,
        url: item.Poster
    }))
}
