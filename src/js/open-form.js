import refs from './refs';

refs.openFormBtn.addEventListener('click', onOpenForm);

function onOpenForm() {
  refs.lightbox.classList.add('is-open');
  refs.addNoteForm.classList.remove('visually-hidden');
  refs.saveBtn.style.display = 'none';
}