const SEARCH_API='https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
let searchbar=document.querySelector("#search-bar");
let container=document.querySelector(".main-section");
let body=document.querySelector("body");


// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    for(let unit of data.results){
        createMovieElement(unit);
    }
}





searchbar.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        getMovive(searchbar.value);
    }
})


function createMovieElement(unit){

    // Create the 'movie' div container
const movieDiv = document.createElement('div');
movieDiv.classList.add('movie');

// Create the 'img' element
const imgElement = document.createElement('img');
imgElement.src = `${IMG_PATH}${unit.poster_path}`;
movieDiv.appendChild(imgElement);

// Create the 'details' div container
const detailsDiv = document.createElement('div');
detailsDiv.classList.add('details');

// Create the 'title' div inside 'details'
const titleDiv = document.createElement('div');
titleDiv.classList.add('title');
titleDiv.innerText=unit.title;
detailsDiv.appendChild(titleDiv); // Append title div to details

// Create the 'rating' div inside 'details'
const ratingDiv = document.createElement('div');
ratingDiv.classList.add('rating');
ratingDiv.innerText=unit.vote_average;
detailsDiv.appendChild(ratingDiv); // Append rating div to details

// Append the 'details' div to the 'movie' div
movieDiv.appendChild(detailsDiv);

// Create the 'overview' div container
const overviewDiv = document.createElement('div');
overviewDiv.classList.add('overview');

// Create the 'h3' element inside 'overview'
const h3Element = document.createElement('h3');
h3Element.innerText='Overview';
overviewDiv.innerText=unit.overview;
overviewDiv.appendChild(h3Element); // Append h3 to overview

// Append the 'overview' div to the 'movie' div
movieDiv.appendChild(overviewDiv);
container.append(movieDiv);

let movies=document.querySelectorAll(".movie");
// let overviews=document.querySelectorAll(".overview");

for(let movie of movies){
    movie.addEventListener('mouseover',()=>{
        movie.querySelector('.overview').classList.add('overview-active');
    })
    movie.addEventListener('mouseout',()=>{
        movie.querySelector('.overview').classList.remove('overview-active');
    })
}

}

function clearOldContent(){
    container.innerHTML='';
    if(document.querySelector(".not-found")){
        document.querySelector(".not-found").innerText='';
    } 
}
 function notFound(movieName){
    let el=document.createElement('div');
    el.innerText=`No Results Found for "${movieName}"`;
    el.classList.add('not-found');
    body.prepend(el);
 }

async function getMovive(movieName){
    let response=await fetch(SEARCH_API+movieName+'"');
    let data=await response.json();
    const movieData=data.results;

    console.log(response.status);
    console.log(data.results);

    if(response.status==200&&data.results.length!=0){
        clearOldContent();
        for(let unit of movieData){
            createMovieElement(unit);
            // console.log(unit);
        }
    }

    else{
        notFound(movieName);
    }
}

// getMovive();

