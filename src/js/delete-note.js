import { getBtns } from './get-btns';
import { renderSummaryTable } from './render-summary';
// видалення запису
export function deleteNote(callback) {
  const list = callback('.delete__button');
  list.forEach(btn => {
    btn.addEventListener('click', event => {
      const parent = btn.parentNode.parentNode;
      parent.remove();
      renderSummaryTable();
    });
  });
}
deleteNote(getBtns);