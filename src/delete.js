const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { deleteFilm, listFilms } = require("./utils");

// Delete
const delete = async (yargsObj) => {
    const collection = await connection();
    if (yargsObj.delete) {
        await deleteFilm(collection, {
            title: yargsObj.title, 
            actor: yargsObj.actor,
            rating: yargsObj.rating
        });
        console.log("success, entry added");
    } else if(yargsObj.list) {
        await listFilms(collection);
    }else {
        console.log("Incorrect command");
    }
    await client.close();
       
}

delete(yargs.argv);