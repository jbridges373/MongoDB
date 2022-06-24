exports.addFilm = async (collection, filmObj) => {
    try {
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
  
  // create function for updating db entry
  exports.editFilm = async (collection, theTitle, theEdits) => {
    try {
      const filmTitle = { title: theTitle };
      const newData = { $set: { title: theEdits.title, actor: theEdits.actor } };
      const editEntry = await collection.updateOne(filmTitle, newData);
      console.log(editEntry);
    } catch (error) {
      console.log(error);
    }
  };
  
  // create function to delete one or more db entries
  exports.removeFilm = async (collection, filmObj) => {
    try {
      const deleteEntry = await collection.deleteOne(filmObj);
      console.log(deleteEntry);
    } catch (error) {
      console.log(error);
    }
  };