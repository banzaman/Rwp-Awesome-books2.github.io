import fromLS from './modules/localStorage.mjs';
import displayBook from './modules/displayBook.mjs';
import navLinks from './modules/nav.mjs';
import {
  bookSection, navlist, section, newBook, newBookEl, datePlace,
} from './modules/elements.mjs';
import { bookList } from './modules/books.mjs';
import addListener from './modules/addBtn.mjs';
import { DateTime } from './modules/luxon.js';

fromLS(bookList);
displayBook(bookList, bookSection);
addListener(newBook, newBookEl, bookList, bookSection);

const dt = DateTime.now();
datePlace.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);

navLinks(navlist, section);
