const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms } = require("./utils");

// Create and Read
const app = async (yargsObj) => {
    const collection = await connection();
    if (yargsObj.add) {
        await addFilm(collection, {
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

// Update
async function updateFilmList(yargsObj) {
    const result = await client.db("films").collection("listFilms")
                        .updateOne({ rating: yargsObj.rating }, { $set: updatedRating });

    console.log(`rating, ${set.changes} document(s) matched the query criteria.`);
    console.log(`rating, ${set.changes} document(s) was/were updated.`);

    await updateFilmList(client, "Batman", { rating: 4, rating: 5 });
}

// Delete
async function deleteFilmList(yargsObj) {
    const result = await client.db("film").collection("listFilms")
            .deleteOne({ title: yargsObj.title });
    console.log(`title, ${set.changes} document(s) was/were deleted.`);

    await deleteFilmList(client, "Kill Bill");
}

app(yargs.argv);