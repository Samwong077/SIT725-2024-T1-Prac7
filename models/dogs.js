let client = require('../dbConnections');

let collection = client.db().collection('Dog');

function postDog(dog, callback) {
    collection.inserone(dog, callback);
}

function getAllDogs(callback) {
    collection.find({}).toArray(callback);
}

module.exports = { postDog, getAllDogs };