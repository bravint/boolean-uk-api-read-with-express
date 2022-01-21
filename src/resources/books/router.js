const express = require("express");

const router = express.Router();

const { createBook, getAllBooks, getBookById, getBookbyType } = require("./controller");

router.post("/", createBook);

router.get("/", getAllBooks);

router.get('/fiction', getBookbyType)

router.get("/non-fiction", getBookbyType)

router.get("/:id", getBookById);



//router.get("/non-fiction", getBookbyType)

module.exports = router;