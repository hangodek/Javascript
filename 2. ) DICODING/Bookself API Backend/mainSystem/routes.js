import {
  addBook, getAllBooks, getBookById, editBookById, deleteBookById,
} from './handler.js';

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookById,
  },
  /* {
    method: 'GET',
    path: '/books/{name?}',
    handler: queryName,
  }, */
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

export default routes;
