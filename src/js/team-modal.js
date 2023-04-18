const refs = {
  openTeamModal: document.querySelector('[data-action="open-team-modal"]'),
  closeTeamModal: document.querySelector('[data-action="close-team-modal"]'),
  backdropTeamModal: document.querySelector('.js-team-backdrop'),
};

refs.openTeamModal.addEventListener('click', onOpenTeamModal);
refs.closeTeamModal.addEventListener('click', onCloseTeamModal);
refs.backdropTeamModal.addEventListener('click', onBackdropClick);

function onOpenTeamModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-team-modal');
  document.querySelector('body').classList.add('fixed-body');
}

function onCloseTeamModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-team-modal');
  document.querySelector('body').classList.remove('fixed-body');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseTeamModal();
  }
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseTeamModal();
  }
}

