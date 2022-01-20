const Book = require("./model");

const createBook  = async (req, res) => {
    const bookToCreate = {
        ...req.body
    };
    const response = await Book().createBook(bookToCreate, res)
    return res.json(response)
}

const getAllBooks = async (req, res) => {
    const response = await Book().getAllBooks(res);
    return res.json(response)
}

const getBookById = async (req, res) => {
    const idToGet = req.params.id;
    const response = await Book().getBookById(idToGet);
    return res.json(response)
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById
}