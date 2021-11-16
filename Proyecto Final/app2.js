//// THE MOVIE DATA BASE
const api_key = 'api_key=8b5a5c4fe095e0455afa8558ab3821c6';
// URL BASE
const base_url = 'https://api.themoviedb.org/3';
// API General
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&'+api_key;
// Imagenes
const img_url = 'https://image.tmdb.org/t/p/w500';
//////////////////////////////////////////////////////////
//Buscador API
const searchUrl = base_url + '/search/movie?'+api_key;
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');



/// Traer Peliculas


// Funcion Para Traer Peliculas
TraerPeliculas(api_url);
function TraerPeliculas(url){
    console.log(data,results);
    fetch(url).then(res => res.json()).then(data =>{
        MostrarPeliculas(data.results);
    })
}

function MostrarPeliculas(data){
    main.innerHTML = '';
    console.log(data.results);
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl =document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${img_url+poster_path}" alt="${title}">

        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
            ${overview}
        </div>
        `
        main.appendChild(movieEl);
    })
}