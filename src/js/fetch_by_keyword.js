import axios from 'axios';
import { Notify } from 'notiflix';
import layOutListOfFilms from './layOutListOfFilms';
import { showTrendingFilms } from '../index';
import myLibraryBg from './myLibraryBg';

const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';
const searchInput = document.querySelector('.search-field-js');
const gallery = document.querySelector('.gallery');
let keyword = ``;
let page = 1;


export { getDataFromAPI, keyword, getMoreDataFromAPI, page, clearPage};

searchInput.addEventListener('submit', onSubmitGetAndRender);

async function getDataFromAPI(keyword) {
  try {
    page = 1;
    const data = await axios

      .get(`${BASE_URL}3/search/movie?api_key=${API_KEY}&query='${keyword}`)

      .then(response => {
        return response.data;
      });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMoreDataFromAPI() {
  try {
    page += 1;
    const data = await axios
      .get(
        `${BASE_URL}3/search/movie?api_key=${API_KEY}&query='${keyword}&page=${page}'`
      )
      .then(response => {
        return response.data;
      });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function onSubmitGetAndRender(evt) {
  evt.preventDefault();
  keyword = evt.currentTarget.elements.query.value;

  // console.log(keyword);
  getDataFromAPI(keyword).then(data => {
    if (data.results.length === 0) {
      Notify.failure(
        'Whoops... We did not found any movie, watch a movie from trends'
      );
      clearPage();
      searchInput.reset();
      myLibraryBg();
      showTrendingFilms();
      return;
    }
    Notify.success(
      `Congrats! We have found ${data.total_results} movies according to your request `
    );
    // console.log(data);
    clearPage();
    layOutListOfFilms(data.results);
    searchInput.reset();
  });
}

function clearPage() {
  gallery.innerHTML = '';
  const movieCardList = document.querySelector('.movie-card__list');
  movieCardList.innerHTML = '';
}
