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

exports.updateFilmList = async (collection, filmObj) => {
        try {            
            const updateEntry = await collection.insertOne(filmObj);
            console.log(updateEntry);
        } catch (error) {
            console.log(error);
        }
};

exports.deleteFilmList = async (collection) => {
    try {            
        const deleteEntry = await collection.insertOne(filmObj);
        console.log(deleteEntry);
    } catch (error) {
        console.log(error);
    }
};


// Create function for updating database entry

// Create function to delete one more database entries.