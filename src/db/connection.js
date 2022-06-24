require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
    try {
        await client.connect();
        console.log("success")
        const db = client.db("Films");
        return db.collection("Films");
    } catch (error) {
        console.log(error);
    }
};

// use this functon to check connection to db connection();

// connection();
module.exports = { connection, client };