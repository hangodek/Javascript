import { nanoid } from 'nanoid';
import bookshelves from './bookshelves.js';

function addBook(request, h) {
  // Manual payload

  const {
    name, year, author, summary, publisher,
    pageCount, readPage, reading,
  } = request.payload;

  if (!request.payload.name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });

    response.code(400);
    return response;
  } if (request.payload.readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });

    response.code(400);
    return response;
  }

  /// / Unique Value

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  bookshelves.push(newBook);

  const isSuccess = bookshelves.filter((temp) => temp.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
  });

  response.code(400);
  return response;
}

function getAllBooks(request, h) {
  const books = bookshelves.map(({ id, name, publisher }) => ({ id, name, publisher }));

  const tempName = request.query.name;
  const tempReading = request.query.reading;
  const tempFinished = request.query.finished;

  if (tempName) {
    const converter = tempName.toLowerCase();
    const filteredBooks = bookshelves.filter((temp) => temp.name.toLowerCase().includes(converter));

    const response = h.response({
      status: 'success',
      data: {
        books: filteredBooks.map(({ id, name, publisher }) => ({ id, name, publisher })),
      },
    });

    response.code(200);
    return response;
  }

  if (tempReading) {
    const tempReadingChecker = tempReading === '1';
    const readingBook = bookshelves.filter((temp) => temp.reading === tempReadingChecker);

    const response = h.response({
      status: 'success',
      data: {
        books: readingBook.map(({ id, name, publisher }) => ({ id, name, publisher })),
      },
    });

    response.code(200);
    return response;
  }

  if (tempFinished) {
    const tempFinishedChecker = tempFinished === '1';
    const finishedBook = bookshelves.filter((temp) => temp.finished === tempFinishedChecker);

    const response = h.response({
      status: 'success',
      data: {
        books: finishedBook.map(({ id, name, publisher }) => ({ id, name, publisher })),
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      books,
    },
  });

  response.code(200);
  return response;
}

function getBookById(request, h) {
  const { bookId } = request.params;
  const book = bookshelves.filter((temp) => temp.id === bookId)[0];

  if (book !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book,
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  response.code(404);
  return response;
}

function editBookById(request, h) {
  const { bookId } = request.params;
  const matcher = bookshelves.findIndex((index) => index.id === bookId);
  const matcherFail = bookshelves.filter((temp) => temp.id === bookId)[0];
  const updatedAt = new Date().toISOString();

  if (matcherFail === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });

    response.code(404);
    return response;
  }

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });

    response.code(400);
    return response;
  } if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });

    response.code(400);
    return response;
  } if (matcher !== -1) {
    bookshelves[matcher] = {
      ...bookshelves[matcher],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'error',
  });

  response.code(404);
  return response;
}

function deleteBookById(request, h) {
  const { bookId } = request.params;
  const matcher2 = bookshelves.findIndex((temp) => temp.id === bookId);

  if (matcher2 !== -1) {
    bookshelves.splice(matcher2, 1);

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });

  response.code(404);
  return response;
}

function queryName(request, h) {
  const { name } = request.params;
  const bookByName = bookshelves.filter((book) => book.name === name);

  if (bookByName.length > 0) {
    const response = h.response({
      status: 'success',
      data: {
        bookByName,
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'Buku tidak dapat ditemukan',
  });

  response.code(404);
  return response;
}

export {
  addBook, getAllBooks, getBookById, editBookById, deleteBookById,
};
