let notes = [];

function addNote(content,id) {
  notes.push({content,id});
}


addNote('Call mom',1);
addNote('Paid staff meeting',2);
addNote('Buy ticket for travel back home',3);
addNote('Preparation study for js',4)
console.log(notes);



idType= typeof(1);


function getNoteFromId(id) {
  for(i=0; i<notes.length; i++){
    if (id == notes[i].id){
    let log = notes[i];
      return log
    } else if(id == ''|| typeof(id)!== idType){
      log = "Id suppose to be a number, it also can't be left empty, please choose a number"
      return log;

    } else {

    log = "There is not such an ID, please try a gain"
    }
  }
}

getNoteFromId(3);
console.log(log);

getNoteFromId(5);// There is not such an ID, please try a gain
console.log(log);

getNoteFromId();
console.log(log); //Id suppose to be a number, it also can't be left empty, please choose a number

let allNotes;
function getAllNotes(){

    allNotes = notes;
     return allNotes
  }


getAllNotes();
console.log(allNotes);


let logNotes;
 function logOutNotesFormatted(){
  for (let i=0; i<notes.length; i++){
    logNotes = console.log(`The note with Id ${notes[i].id} has the following note text: ${notes[i].content}`)
  }
  return logNotes

}

logOutNotesFormatted();
