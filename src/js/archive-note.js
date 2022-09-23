import { getBtns } from './get-btns';
import { renderSummaryTable } from './render-summary';
import { getArchiveTableData, trs } from './render-archive';

// архівування запису
export function archiveNote(callback) {
  const list = callback('.archieve__button');
  list.forEach(btn => {
    btn.addEventListener('click', event => {
      const parent = btn.parentNode.parentNode;
      parent.style.display = 'none';
      parent.dataset.status = 'archieved';
      renderSummaryTable();
      getArchiveTableData(trs);
    });
  });
}
archiveNote(getBtns);