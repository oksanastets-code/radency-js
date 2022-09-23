import refs from './refs';
import { renderSummaryTable } from './render-summary';
import { renderArchiveTable } from './render-archive';
import { archiveData } from './render-archive';
// розархівування запису
let unarchiveBtns = [];
export function getUnarchiveBtns() {
  unarchiveBtns = [...refs.archiveTableEl.querySelectorAll('.unarchieve__button')];
  unarchiveBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const parent = btn.parentNode.parentNode;
      const identity = parent.firstElementChild.textContent;
      const index = unarchiveBtns.indexOf(btn);
      archiveData.splice(index, 1);
      const arrayOfNamesTds = document.querySelectorAll('.js-name');
      arrayOfNamesTds.forEach(td => {
        if (td.textContent === identity) {
          delete td.parentElement.dataset.status;
          td.parentElement.style.display = '';
          renderSummaryTable();
          renderArchiveTable();
          getUnarchiveBtns();
        }
      });
    });
  });
}