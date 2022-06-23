const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms, updateFilm, deleteFilm } = require("./utils");

// Create and Read
const app = async (yargsObj) => {
	try {
		if (yargsObj.add) {
			// pass to create function
			await addFilm({
				title: yargsObj.title,
				actor: yargsObj.actor,
				rating: yargsObj.rating,
			});
			console.log(await listFilms());
		} else if (yargsObj.list) {
			// Pass to read function
			console.log(await listFilms());
		} else if (yargsObj.update) {
			// Build Criteria
			const criteria = { title: yargsObj.update };

			// Build update fields
			let update = {};
			if (yargsObj.title) {
				Object.assign(update, { title: yargsObj.title });
			}
			if (yargsObj.actor) {
				Object.assign(update, { actor: yargsObj.actor });
			}
			if (yargsObj.rating) {
				Object.assign(update, { rating: yargsObj.rating });
			}

			// Pass to update function
			await updateFilm(criteria, update);

		} else if (yargsObj.delete) {
			//Build Criteria
			const criteria = { title: yargsObj.delete };

			// Pass to delete function
			await deleteFilm(criteria);
		} else {
			// list the available options
			console.log("incorrect command");
		}

	} catch (error) {
		console.log(error);
	}
};

app(yargs.argv);