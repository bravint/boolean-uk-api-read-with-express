const db = require('../../utils/database');
const { buildBooksDatabase } = require('../../utils/mockData');

function Book() {
    function createTable() {
        const sql = `
      DROP TABLE IF EXISTS books;
      
      CREATE TABLE IF NOT EXISTS books (
        id              SERIAL        PRIMARY KEY,
        title           VARCHAR(255)   NOT NULL,
        type            VARCHAR(255)   NOT NULL,
        author          VARCHAR(255)   NOT NULL,
        topic           VARCHAR(255)   NOT NULL,
        publicationDate DATE           NOT NULL
      );
    `;

        return db
            .query(sql)
            .then(() => console.log('[DB] Book table ready.'))
            .catch(console.error);
    }

    function mockData() {
        const createBook = `
      INSERT INTO books
        (title, type, author, topic, publicationDate)
      VALUES
        ($1, $2, $3, $4, $5)
    `;

        const books = buildBooksDatabase();

        books.forEach((book) => {
            db.query(createBook, Object.values(book)).catch(console.error);
        });
    }

    const createBook = (book) => {
        const createBook = `
            INSERT INTO books (title, type, author, topic, publicationDate) VALUES ($1, $2, $3, $4, $5) RETURNING *
        `;

        return db
            .query(createBook, Object.values(book))
            .then((result) => result.rows[0])
            .catch(console.error);
    };

    const getBookById = (id) => {
        const getOneById = `
            SELECT *
            FROM books
            WHERE id = $1;
          `;

        return db
            .query(getOneById, [id])
            .then((result) => result.rows[0])
            .catch(console.error);
    };

    const getAllBooks = () => {
        const getAll = `
            SELECT *
            FROM books;
            `;

        return db
            .query(getAll)
            .then((result) => result.rows)
            .catch(console.error);
    }

    const init = () => {
      createTable().then(() => {
        console.log("\nCreating mock data for Books...\n");
        mockData();
      });
  }

    return {
      init,
      createBook,
      getBookById,
      getAllBooks,
  }
}

module.exports = Book;
