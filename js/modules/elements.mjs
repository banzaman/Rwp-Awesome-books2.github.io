// Navigation
const navlist = document.querySelectorAll('.navlink');
const section = document.querySelectorAll('.section');
const bookSection = document.getElementById('bookList');
const newBook = document.getElementById('add');
const newBookEl = newBook.querySelectorAll('input');
const datePlace = document.querySelector('.date');

export {
  navlist, section, bookSection, newBook, newBookEl, datePlace,
};
