import refs from './refs';

refs.closeFormBtn.addEventListener('click', onCloseForm);

export function onCloseForm() {
  refs.lightbox.classList.remove('is-open');
  refs.addNoteForm.classList.add('visually-hidden');
  refs.archiveTableEl.classList.add('visually-hidden');
  refs.addBtn.style.display = '';
  refs.saveBtn.style.display = '';
}