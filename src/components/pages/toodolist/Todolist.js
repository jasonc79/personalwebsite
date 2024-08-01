import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";
import './TodoList.css';

function ToDoList() {
  const [notes, setNotes] = useState([]);
  
  function addNote(text) {
    setNotes((prevNotes) => {
      return [...prevNotes, text];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;
