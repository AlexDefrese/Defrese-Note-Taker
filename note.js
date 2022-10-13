const fs = require("fs");
const path = require("path");


function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    return writeFileAsync('../db/db.json',
        JSON.stringify(
            note
        )
    )

    // return note;
}

function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    // This loop re-writes the indexes for the remaining notes.
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileAsync(
        path.join('../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
}


module.exports = {
    createNewNote,
    deleteNote
};