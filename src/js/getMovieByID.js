//функція яка повертає фільм по id
import axios from 'axios';
export { getMovieByID };
const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

async function getMovieByID(movie_id) {
  try {
    const response = await axios.get(
      `${BASE_URL}3/movie/${movie_id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
