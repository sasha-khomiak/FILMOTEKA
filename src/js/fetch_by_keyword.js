import axios from 'axios';
// import layOutListOfFilms from './js/'
import layOutListOfFilms from './layOutListOfFilms';

const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';
const searchInput = document.querySelector('.search-field-js');
const gallery = document.querySelector('.gallery');

searchInput.addEventListener('submit', onSubmitGetAndRender);

export default async function getDataFromAPI(queryName) {
  try {
    const data = await axios
      .get(`${BASE_URL}3/search/movie?api_key=${API_KEY}&query='${queryName}'`)
      .then(response => {
        console.log(response.data.results);
        return response.data.results;
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}
//  console.log(response.data.results);

function onSubmitGetAndRender(evt) {
  evt.preventDefault();
  const keyword = evt.currentTarget.elements.query.value;
  console.log(keyword);
  getDataFromAPI(keyword).then(data => {
    clearPage();
    layOutListOfFilms(data);
  });
}

function clearPage() {
  gallery.innerHTML = '';
}
