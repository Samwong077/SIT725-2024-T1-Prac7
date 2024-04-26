const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://wongfuksang:kIULkqxnLjlhZ7r3@cluster0.dgztchd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


client.connect();

module.exports = client;