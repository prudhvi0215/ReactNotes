import Notes from "./notes";
import NewNotes from "./noteCard";
import DeletedNotes from "./deletedNotes";

import React, {useState,useEffect} from "react";

function Body() {

  const [notes,setNotes] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('notesData')){
      let data = JSON.parse(localStorage.getItem('notesData'));
      setNotes(data); 
      console.log(notes);           
    }
  },[]);

  return( 
    <div className="body">
        <Notes />
        <h2>Your Notes...</h2>
        <hr/>
        <div className="notesBox">
          {notes.map((note)=>(
            <NewNotes title={note.title} description={note.description} date={note.date}/>
          ))
          }
        </div>
        {/* <NewNotes /> */}
        {/* <DeletedNotes />*/}
    </div>
  );
}

export default Body;
