
import layOutListOfMyLib from "./layOutListMyLibrary";
import { clearPage } from './fetch_by_keyword';
import { getFromStorage } from "./localStorage";
import { getMovieByID } from "./getMovieByID";
export {renderBeforeCloseModalOnMyLib}
let arrMovies = []
let key;
let keyWatched = 'idWatched';
let keyQueue = 'idQueue';

const btnLib = document.querySelector('.js-library')
const btnWatch = document.querySelector('#watched')
const btnQueue = document.querySelector('#queue')

function renderBeforeCloseModalOnMyLib() {
    if(btnWatch.classList.contains('btn-nav-active')){
        key = keyWatched;
    }
    if(btnQueue.classList.contains('btn-nav-active')){
        key = keyQueue;
    }
    if(btnLib.classList.contains('btn--current')){
        clearPage()
        getFromStorage(key).map(id => {
          getMovieByID(id)
            .then(movie => {
              arrMovies.push(movie);
              return arrMovies;
            })
            .then(result => {
              
              layOutListOfMyLib(result)
            });
        });
    }
}