import notesList from '../data/notes';
import { getDates } from './get-dates';
import refs from './refs';

// рендер таблиці
export const makeNotesTableRowMarkup = note => {
  let { name, created, category, content, dates } = note;
  dates = getDates(content);
  return `  
        <tr class="notes-row js-notes-row">
          <td class="js-name">${name}</td>
          <td class="js-created">${created}</td>
          <td class="js-categories">${category}</td>
          <td class="js-content">${content}</td>
          <td>${dates}</td>
          <td>
            <button type="button" class="edit__button">Edit</button>
            <button type="button" class="archieve__button">Archive</button>
            <button type="button" class="delete__button">Delete</button>
          </td>
        </tr>
  `;
};

const notesTableRowsMarkup = notesList.map(makeNotesTableRowMarkup).join('');

refs.tableEl.insertAdjacentHTML('beforeend', notesTableRowsMarkup);