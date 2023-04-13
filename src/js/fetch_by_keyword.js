import axios from 'axios';

const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';
const searchInput = document.querySelector('.query-input');
searchInput.addEventListener('submit', getDataFromAPI);

export default async function getDataFromAPI(evt) {
  const keyword = evt.target.value;
  try {
    const data = await axios
      .get(`${BASE_URL}3/search/movie?api_key=${API_KEY}&query='${keyword}'`)
      .then(response => {
        console.log(response);
        response.data;
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}
