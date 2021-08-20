/* eslint-disable import/no-anonymous-default-export */
/*
Usando API https://developers.themoviedb.org/3/getting-started/introduction para dados
CHAVE: c96ca97f64e72908cf91d39ab92e04fa
EXEMPLO: https://api.themoviedb.org/3/movie/550?api_key=c96ca97f64e72908cf91d39ab92e04fa
*/

const API_KEY = "c96ca97f64e72908cf91d39ab92e04fa";
const API_BASE = "https://api.themoviedb.org/3";
 
/*  
- Originais Netflix
- Remomendados
- Em alta 
- Ação
- Comédia
- Terror
- Romance 
- Documentário
*/

//Fetch na url com JSON 
const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json; 
}

export default{ 
    getHomeList: async () =>{ //Async await ==> espera a resposta da API 
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia', 
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}