//функція яка повертає трейлер по id фільма
import axios from 'axios';
export { getKeyTrailerByID };
const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';

//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

async function getKeyTrailerByID(movie_id) {
  try {
    const response = await axios.get(
      `${BASE_URL}3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results[0].key;
  } catch (error) {
    return;
  }
}
