exports.addFilm = async (collection, filmObj) => {
    try {
        // add database entry using built in method of insertOne
        // and passing the filmObj entered by the user
        const addEntry = await collection.insertOne(filmObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listFilms = async (collection) => {
    try {
        const filmList = await collection.find().toArray();
        console.log(filmList);
    } catch (error) {
        console.log(error);
    }
};

exports.updateFilm = async (collection, criteria, changes) => {
    try {        
        await collection.updateOne(criteria, { $set: changes });
        console.log(updateFilmList);
    } catch (error) {
        console.log(error);
    }
};

exports.deteleFilm = async (collection, criteria, changes) => {
    try {        
        await collection.deleteOne(criteria, { $set: changes });
        console.log(updateFilmList);
    } catch (error) {
        console.log(error);
    }
};


// Create function for updating database entry

// Create function to delete one more database entries.