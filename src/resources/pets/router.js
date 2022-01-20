const express = require("express");

const router = express.Router();

const { createPet, getAllPets, getPetById } = require("./controller");

router.post("/", createPet);

router.get("/", getAllPets);

router.get("/:id", getPetById);

module.exports = router;