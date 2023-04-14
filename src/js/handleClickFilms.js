export default function handleClickFilms() {
  const gallery = document.querySelector('.gallery');

  gallery.addEventListener('click', onClick);

  function onClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== 'IMG') {
      return;
    }
    console.log(evt.target.dataset.id);
  }
}
handleClickFilms();
