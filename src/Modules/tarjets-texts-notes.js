import React from "react";

/* eslint-disable no-undef */

const TargetsNote = ({id, title, content, deleteNote, updateNoteContent }) => {
  const handleContentChange = (e) => {
    updateNoteContent(id, e.target.value);
  };
  return (
    <div>
      <div className="note" data-id={id}>
      <div className="box-text-content">
        <span className="nv-target">
          <span className="nv-target-name">{title}</span>
          <div className="accions-bt-nav">
            <button className="min"></button>
            <button className="windows"></button>
            <button className="close" onClick={() => deleteNote(id)}></button>
          </div>
        </span>
        <textarea 
        className="text-target"
        onChange={handleContentChange}  
        >{content}</textarea>
      </div>
    </div>
    </div>
  );
};

export default TargetsNote;
