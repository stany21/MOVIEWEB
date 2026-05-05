const api_url='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=484fe397e2a3f23cbc3348ae48d3dc8b';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';

const api_search='https://api.themoviedb.org/3/search/movie?api_key=484fe397e2a3f23cbc3348ae48d3dc8b&query="';


getMovies(api_url);
const form=document.getElementById("form")
const search=document.getElementById("search");
const main=document.getElementById("main");


async function getMovies(url){
    const res=await fetch(url)
      const data=await res.json();
    showMovies(data.results);
}
function showMovies(movies){
    main.innerHTML='';
    movies.forEach(movie => {
    const {title,poster_path,vote_average,overview}=movie;
        const movieEl=document.createElement("div");
        movieEl.setAttribute('class','movie');
        movieEl.innerHTML=` 

            <img src="${IMG_PATH+poster_path}" alt="${title}" >
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassRate(vote_average)}">${vote_average}</span>

            </div>
            <div class="overview">
             <h3>overview</h3>
             ${overview}
          
`;

main.appendChild(movieEl);
        
    });
}

function getClassRate(vote){
    if(vote>=8){
        return 'green';

    }else if(vote>=5){
        return 'orange';
    } 
    else{
          
    }return 'red';
}


form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    const Term_search=search.value;
    if(Term_search && Term_search !== ''){
       getMovies(api_search +Term_search)
        search.value='';
    }else{
         window.location.reload();
    }

})