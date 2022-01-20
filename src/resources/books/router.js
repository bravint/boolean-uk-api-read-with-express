const express = require("express");

const router = express.Router();

const { createBook, getAllBooks, getBookById } = require("./controller");

router.post("/", createBook);

router.get("/", getAllBooks);

router.get("/:id", getBookById);

//router.get("/fiction/", getBooksFiction)

//router.get("/fiction/", getBooksFiction)

module.exports = router;