import axios from 'axios';

const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';
const searchInput = document.querySelector('.search-field-js');
searchInput.addEventListener('submit', getDataFromAPI);

export default async function getDataFromAPI(evt) {
  evt.preventDefault();
  const keyword = evt.currentTarget.elements.query.value;
  try {
    const data = await axios
      .get(`${BASE_URL}3/search/movie?api_key=${API_KEY}&query='${keyword}'`)
      .then(response => {
        console.log(response.data.results);
        response.data.results;
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}
