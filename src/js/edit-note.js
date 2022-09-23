import refs from './refs';
import { getBtns } from './get-btns';
import { renderSummaryTable } from './render-summary';
// import { editTarget } from './add-new-note';

export let editTarget = [];
export let index = -1;
export function editNote(callback) {
  const editBtns = callback('.edit__button');
  editBtns.forEach(btn => {
    const editNoteData = {};
    btn.addEventListener('click', event => {
      const parent = btn.parentNode.parentNode;
      editTarget = [...btn.parentNode.parentNode.children];
      refs.lightbox.classList.add('is-open');
      refs.addNoteForm.classList.remove('visually-hidden');
      refs.addBtn.style.display = 'none';

      // берем індекс цільової записки
      index = [...refs.tbodyEl.children].indexOf(parent);
      
      // берем дані цільової записки
      editTarget.map(item => {
        if (item.className === 'js-name') {
          editNoteData.name = item.textContent;
        }
        if (item.className === 'js-categories') {
          editNoteData.category = item.textContent;
        }
        if (item.className === 'js-content') {
          editNoteData.content = item.textContent;
        }
      });

      // заповнення форми даними для редагування
      const inputs = callback('input');
      inputs.forEach(input => {
        if (input.name === 'name') {
          input.value = editNoteData.name;
        }
        if (input.name === 'categ') {
          input.value = editNoteData.category;
        }
        if (input.name === 'content') {
          input.value = editNoteData.content;
        }
      });

      // console.log('new editNoteData', editNoteData);
      // console.log(editTarget);

      renderSummaryTable();

      return editTarget, index;
    });
  });
}
editNote(getBtns);