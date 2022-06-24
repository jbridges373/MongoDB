const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms, removeFilm, editFilm } = require("./utils/index");

const app = async (yargsObj) => {
  const collection = await connection();
  if (yargsObj.add) {
    // add
    await addFilm(collection, {
      title: yargsObj.title,
      actor: yargsObj.actor,
    });
    console.log("success, entry added");
    // list
  } else if (yargsObj.list) {
    await listFilms(collection);
    // edit
  } else if (yargsObj.edit) {
    await editFilm(collection, yargsObj.edit, {
      title: yargsObj.title,
      actor: yargsObj.actor,
    });
    // remove
  } else if (yargsObj.delete) {
    await removeFilm(collection, {
      title: yargsObj.title,
      actor: yargsObj.actor,
    });
    console.log("success, entry removed");
  } else {
    console.log("Incorrect command");
  }
  await client.close();
};

app(yargs.argv);