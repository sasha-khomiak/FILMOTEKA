export default async function layOutListOfFilms(arrayOfFilms) {
  const gallery = document.querySelector('.gallery'); // галерея
  let date = ``;
  let markup = arrayOfFilms
    .map(item => {
      const { poster_path, title, first_air_date, release_data } = item;
        
      // checkDate(first_air_date, release_data)
     
      if (first_air_date !== undefined) {
        date = first_air_date;
        console.log('f',date);
      }
      if (release_data !== undefined) {
        date = release_data;
        console.log('r', date);
      }
      // if(date === ``){
      //   return;
      // }
      date = date.substring(0,4);
      return `
      <div class="film-card">
      <a href="#">
        <div class="thumb">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="film1" loading="lazy" />
        </div>
      </a>
      <div class="info">
        <p class="film-name">${title}</p>
        <p class="film-info">Drama, Action | ${date}</p>
      </div>
    </div>`}
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
//  function checkDate(first_air_date, release_data){
//    if (first_air_date !== undefined) {
//     date = first_air_date;
//     console.log('f',date);
//   }
//   if (release_data !== undefined) {
//     date =  release_data;
//     console.log('r',date);
//   }
// }