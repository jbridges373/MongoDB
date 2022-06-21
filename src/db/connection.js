require("dotenv").config();

const { MongoClent, MongoClient } = require("mongodb");

const client = new MongoClient();

const connection = async () => {
    try {
        await client.connect();
        console.log("success")
        const db = client.db("Films");
        return db.collection("Films")
    } catch (error) {
        console.log(error);
    }
};

// use this fucntion to check the connection file
// connection();

module.exports = { connection, client };