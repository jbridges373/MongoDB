const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { updateFilm, listFilms } = require("./utils");

// Update
const update = async (yargsObj) => {
    const collection = await connection();
    if (yargsObj.update) {
        await updateFilm(collection, {
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

update(yargs.argv);