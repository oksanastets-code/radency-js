import refs from './refs';
// рендер підсумкової таблиці

const tds = () => {
  return [...document.querySelectorAll('.js-categories')];
};

const makeSummaryTableRowMarkup = data => {
  let { option, active, archieved } = data;
  return `  
        <tr class="summary-row">
          <td>${option}</td>
          <td>${active}</td>
          <td>${archieved}</td>
        </tr>
  `;
};

const optionsArray = [...document.getElementById('categories').children].map(
  option => option.value,
);

function makeSummaryTableRowData() {
  optionsArray.map(item => {
    countNotesByCategoryAndStatus(tds, item);
  });
}

function countNotesByCategoryAndStatus(callback, option) {
  const array = callback();
  const arrayByCategory = array.filter(td => {
    return td.textContent === option;
  });
  let activeArray = [];
  let archivedArray = [];

  arrayByCategory.filter(item => {
    if (item.parentElement.hasAttribute('data-status')) {
      archivedArray.push(item.parentElement);
    }
    if (!item.parentElement.hasAttribute('data-status')) {
      activeArray.push(item.parentElement);
    }
  });

  const newSummaryRowData = {};
  newSummaryRowData.option = option;
  newSummaryRowData.active = activeArray.length;
  newSummaryRowData.archieved = archivedArray.length;
  summaryData.push(newSummaryRowData);
  return summaryData;
}

let summaryData = [];
export function renderSummaryTable() {
  summaryData = [];
  makeSummaryTableRowData();
  const summaryTableRowsMarkup = summaryData.map(makeSummaryTableRowMarkup).join('');
  if ([...refs.summaryTableEl.children].length > 1) {
    refs.summaryTableEl.lastElementChild.remove();
  }
  refs.summaryTableEl.insertAdjacentHTML('beforeend', summaryTableRowsMarkup);
}
renderSummaryTable();
