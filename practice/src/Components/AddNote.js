import React, { useState, useContext } from "react";
import Notes from "../Components/Notes";
import NoteContext from "../context/notes/NoteContext";
import Alert from "./Alert"

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [alertMessage, setAlertMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });

    setAlertMessage("Data Submitted!!");

    setTimeout(() => {
      setAlertMessage("");
    }, 2000);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="dark-background ">
      {alertMessage && <Alert message={alertMessage} />}
      <h1 className="text-white text-center pt-3 text-5xl">Add Note</h1>
      <div className="mt-4">
        <form className="container ">
          <div className="mb-3 ">
            <label htmlFor="title" className="form-label ">
              Enter Note
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
      <Notes />
    </div>
  );
};

export default AddNote;
