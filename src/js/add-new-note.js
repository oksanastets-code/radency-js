import refs from './refs';
import { getCurrentDate } from './get-current-date';
import { getDates } from './get-dates';
import { getBtns } from './get-btns';
import { onCloseForm } from './close-form';
import { renderSummaryTable } from './render-summary';
import { deleteNote } from './delete-note';
import { editNote } from './edit-note';
import { archiveNote } from './archive-note';
import { editTarget, index } from './edit-note';
import { makeNotesTableRowMarkup } from './render-notes-table';
// додавання нового запису
refs.addNoteForm.addEventListener('submit', onSubmit);
console.log(refs.tbodyEl);
function onSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const name = formElements.name.value;
  const category = formElements.categ.value;
  const content = formElements.content.value;

  const created = '';
  renderNewNote(name, created, category, content);

  refs.addNoteForm.reset();
  onCloseForm();
  renderSummaryTable();
  deleteNote(getBtns);
  archiveNote(getBtns);
  editNote(getBtns);
}

// const tbodyEl = document.querySelector('tbody');
// export let editTarget = [];
// let index = -1;
function renderNewNote(name, created, category, content) {
  const newNote = {
    name,
    created,
    category,
    content,
  };

  if (!editTarget.length) {
    newNote.created = getCurrentDate();
  } else {
    editTarget.filter(item => {
      if (item.className === 'js-created') {
        newNote.created = item.textContent;
      }
    });
  }

  newNote.dates = getDates(content);
  // console.log(newNote);

  const newNoteRow = makeNotesTableRowMarkup(newNote);
  refs.tbodyEl.insertAdjacentHTML('beforeend', newNoteRow);

  if (editTarget.length) {
    const array = [...refs.tbodyEl.children];
    array[index].remove();
  }
}
