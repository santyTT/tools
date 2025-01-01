import TargetsNote from "./tarjets-texts-notes";
import "../Styles/CalculadorApp.css";
import Calculator from "./calculator-app";
import React, { useState, useEffect } from "react";

function AsideNav() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "New Note",
      content: "Aquí va el contenido de la nueva nota.",
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const noteElements = document.querySelectorAll(".note");
    const noteElement = Array.from(noteElements).find(
      (note) => note.dataset.id === String(id)
    );

    if (noteElement) {
      noteElement.classList.add("note-exit");
      setTimeout(() => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
      }, 400);
    }
  };

  const updateNoteContent = (id, newContent) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, content: newContent } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="containerAll">
      <div className="aside-nav">
        {" "}
        <aside className="ad-container">
          <span className="mn-title">¡ Tools !</span>
          <ul className="mn-list">
            <li>
              <a href="#note">Note App</a>
              <a href="#calculator">Calculator App</a>
            </li>
          </ul>
        </aside>
        <div className="Scroll-container" >
          <div id="note"></div>
        <div className="mn-container" >
          <div className="mn-container-notes">
            <h2>
              <button className="add-bt" onClick={addNote}>
                +
              </button>
            </h2>
            <div className="notes-container">
              {notes.map((note) => (
                <TargetsNote
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  content={note.content}
                  deleteNote={deleteNote}
                  updateNoteContent={updateNoteContent}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="Cl-Container" id="calculator">
        <Calculator />
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default AsideNav;
