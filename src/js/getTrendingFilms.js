// Документація API відеотеки
// developers.themoviedb.org/3/getting-started/introduction

// підключаємо бібліотеку axios
import axios from 'axios';

const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';

// developers.themoviedb.org/3/trending/get-trending

export default async function getTrendingFilms(page) {
  try {
    const response = await axios.get(
      `${BASE_URL}3/movie/popular?api_key=${API_KEY}&page=${page}`
    );

    
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

// getTrendingFilms();
