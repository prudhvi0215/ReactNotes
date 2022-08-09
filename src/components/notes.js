import "../App.css";

import React, {useState} from "react";

// import NoteCard from "./noteCard";

function Notes() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [notes, setNotes] = useState('');
    // const [moveToNote, setMoveToNote] = useState(false);

    const handleTitleChange = (event)=>{
        let ttl = event.target.value;
        setTitle(ttl);
    };

    const handleDescriptionChange = (event)=>{
        let desc = event.target.value;
        setDescription(desc);
    };

    const handleAddNote = ()=>{

        const note = {
            title: title,
            description: description,
            date: Date(),
        }

        if(localStorage.getItem('notesData')==null){
            localStorage.setItem('notesData', JSON.stringify([]));
        }

        let data = JSON.parse(localStorage.getItem('notesData'));
        data.push(note);
        localStorage.setItem('notesData', JSON.stringify(data));
        console.log(data);            

        // console.log(note);

        // setMoveToNote(true);
        // setNotes(note);
    };


    return (
        <>
        <div className="notes">
            <input id="title" type="text" onChange={handleTitleChange} placeholder="Enter title.."/>
            <textarea
                id="description"
                placeholder="Enter description.."
                onChange={handleDescriptionChange}
                rows="7"
                cols="40"
            ></textarea>
            <button id="addNote" onClick={handleAddNote}>Add Note</button>
        </div>
        {/* {moveToNote?<NoteCard title={notes.title} description={notes.description} date={notes.date}/>:<NoteCard />} */}
        </>
    );
}

export default Notes;
