const Pet = require("./model");

const createPet = async (req, res) => {
    const petToCreate = {
        ...req.body
    };
    const response = await Pet().createPet(petToCreate, res)
    return res.json(response)
}

const getAllPets = async (req, res) => {
    const response = await Pet().getAllPets(res);
    return res.json(response)
}

const getPetById = async (req, res) => {
    const idToGet = req.params.id;
    const response = await Pet().getPetById(idToGet);
    return res.json(response)
}

module.exports = {
    createPet,
    getAllPets,
    getPetById
}