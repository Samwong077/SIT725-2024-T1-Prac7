let collection = require('../models/dogs');

const postDogs = (req, res) => {
    let dog = req.body;
    collection.postDogs(dog, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' })
        }
    });
}

const getAllDogs = (req, res) => {
    collection.getAllDogs((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get all card successfully.' })
        }
    });
}

module.exports = { postDogs, getAllDogs };