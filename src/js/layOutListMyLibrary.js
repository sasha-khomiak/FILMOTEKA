export default async function layOutListOfMyLib(arrayFilms){
    const gallery = document.querySelector('.gallery')
    console.log("отримав", arrayFilms);
    let markup = arrayFilms.map(item => {
        const {
            poster_path,
            id,
            title,
            name,
            first_air_date,
            release_date,
          } = item;

          return `
      <div class="film-card" >
      <a href="#">
        <div class="thumb">
          <img src="${poster_path}" alt="film1" loading="lazy" data-id="${release_date}" />
        </div>
      </a>
      <div class="info">
        <div class="info-container"> 
        <p class="film-name">${title}</p>
        <p class="film-info">${tempGenresString} | ${id}</p>
        </div>
      </div>
    </div>`;
    }).join(' ')



console.log("tut", markup);
    gallery.insertAdjacentHTML('beforeend', markup);

}