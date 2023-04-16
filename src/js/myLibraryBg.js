const movieCardList = document.querySelector('.movie-card__list');

export default async function myLibraryBg() {
  movieCardList.innerHTML = `<div class="library">
       <div class="library-bg">
        <div class="library-bg__image"></div>
        <p class="library-bg__message">Oops! There is no film with a such name!</p>
        <p class="library-bg__message">But we have something more!</p>
        <p class="library-bg__message">Scroll down!</p>
      </div>
      </div>`;
  movieCardList.classList.add('library');
}

//   function onClickToWatched(e) {
//     const btnWatchedText = document.querySelector('.btn-add-watched');
//     let btnWatched = e.currentTarget;
//     if (arrayWatched.includes(movie_id)) {
//       btnWatchedText.innerText = 'Add to watch';
//       arrayWatched.splice(arrayWatched.indexOf(movie_id), 1);
//       console.log(arrayWatched);
//       return;
//     }

//     btnWatchedText.innerText = 'Added to watch';
//     arrayWatched.push(movie_id);
//     btnWatched.classList.toggle('card-btn-active');
//     console.log(arrayWatched);
//   }
//   function onClickToQueue(e) {
//     const btnQuequeText = document.querySelector('.btn-add-queue');
//     let btnQueue = e.currentTarget;
//     if (arrayQueue.includes(movie_id)) {
//       btnQuequeText.innerText = 'add to watch';

//       arrayQueue.splice(arrayQueue.indexOf(movie_id), 1);
//       console.log(arrayQueue);
//       return;
//     }
//     arrayQueue.push(movie_id);
//     btnQueue.classList.toggle('card-btn-active');
//     console.log(arrayQueue);
//   }
// }
