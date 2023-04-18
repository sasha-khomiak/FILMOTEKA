
import { clearPage } from './fetch_by_keyword';
import { getFromStorageAndRender } from './getFromStorageAndRender';
export {renderBeforeCloseModalOnMyLib}

const btnLib = document.querySelector('.js-library')


function renderBeforeCloseModalOnMyLib() {
    if(btnLib.classList.contains('btn--current')){
        clearPage()
        getFromStorageAndRender();
    }
}