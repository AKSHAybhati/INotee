import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const { deleteNote } = useContext(NoteContext);
  const { note, updateNote } = props;

  return (
    <div className="card shadow-sm ">
      <div className="d-flex justify-content-end pt-2 px-2">
        <i
          className="fa-solid fa-trash me-3"
          onClick={() => deleteNote(note._id)}
          style={{ cursor: "pointer" }}
          title="Delete Note"
        ></i>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => updateNote(note)}
          style={{ cursor: "pointer" }}
          title="Edit Note"
        ></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-description">{note.description}</p>
        {note.tag && (
          <span className="badge bg-primary">{note.tag}</span>
        )}
      </div>
    </div>
  );
};

export default Noteitem;
