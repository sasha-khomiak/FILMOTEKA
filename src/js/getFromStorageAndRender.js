
export {getFromStorageAndRender}
import { getFromStorage } from "./localStorage";
import { getMovieByID } from "./getMovieByID";
import layOutListOfMyLib from "./layOutListMyLibrary";

let key;
let keyWatched = 'idWatched';
let keyQueue = 'idQueue';
let arrMovies = [];

const btnWatch = document.querySelector('#watched')
const btnQueue = document.querySelector('#queue')

function getFromStorageAndRender(){
    if(btnWatch.classList.contains('btn-nav-active')){
        key = keyWatched;
    }
    if(btnQueue.classList.contains('btn-nav-active')){
        key = keyQueue;
    }
    getFromStorage(key).map(id => {
      getMovieByID(id)
        .then(movie => {
          arrMovies = [];
          arrMovies.push(movie);
          return arrMovies;
        })
        .then(layOutListOfMyLib);
    });
  }