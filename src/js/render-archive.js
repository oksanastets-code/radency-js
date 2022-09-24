import refs from './refs';
import { getUnarchiveBtns } from './unarchive-note';

// рендер архіву
refs.archiveLink.addEventListener('click', onaAchiveLinkClick);

function onaAchiveLinkClick(e) {
  e.preventDefault();
  refs.lightbox.classList.add('is-open');
  refs.archiveTableEl.classList.remove('visually-hidden');
  renderArchiveTable();
  getUnarchiveBtns();
}
const makeArchiveTableRowMarkup = data => {
  let { name, category, content } = data;
  return `  
        <tr class="archive-row">
          <td>${name}</td>
          <td>${category}</td>
          <td>${content}</td>
          <td>
            <button type="button" class="unarchieve__button">Unarchive</button>
          </td>
        </tr>
  `;
};
export let archiveData = [];

export function renderArchiveTable() {
  if ([...refs.archiveTableEl.children].length > 1) {
    refs.archiveTableEl.lastElementChild.remove();
  }
  const archiveTableRowsMarkup = archiveData.map(makeArchiveTableRowMarkup).join('');
  refs.archiveTableEl.insertAdjacentHTML('beforeend', archiveTableRowsMarkup);
}

export const trs = () => {
  const arrayOfTrs = [...document.querySelectorAll('.js-notes-row')];
  let archivedList = [];
  arrayOfTrs.filter(item => {
    if (item.hasAttribute('data-status')) {
      archivedList.push(item);
    }
  });
  return archivedList;
};

export function getArchiveTableData(foo) {
  const archivedArray = foo();
  archiveData = [];
  archivedArray.map(item => {
    let elName = item.querySelector('.js-name');
    let elCateg = item.querySelector('.js-categories');
    let elContent = item.querySelector('.js-content');
    const newArchiveRow = {};
    newArchiveRow.name = elName.textContent;
    newArchiveRow.category = elCateg.textContent;
    newArchiveRow.content = elContent.textContent;
    archiveData.push(newArchiveRow);
  });
  return archiveData;
}