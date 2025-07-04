import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "../Components/Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [enote, setENote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    editNote(enote.id, enote.etitle, enote.edescription, enote.etag);
    refClose.current.click();
  };

  const onChange = (e) => {
    setENote({ ...enote, [e.target.name]: e.target.value });
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setENote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  return (
    <>
      <div className="text  ">
        <button
          type="button"
          ref={ref}
          className="d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content text-black">
              <div className="modal-header flex justify-between items-center">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="etitle"
                        className="form-label"
                        style={{ color: "black" }}
                      >
                        Enter Note
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="etitle"
                        name="etitle"
                        value={enote.etitle}
                        onChange={onChange}
                        style={{
                          border: "1px solid black",
                          color: "black",
                          outline: "none",
                          boxShadow: "none",
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="edescription"
                        className="form-label"
                        style={{ color: "black" }}
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="edescription"
                        name="edescription"
                        value={enote.edescription}
                        onChange={onChange}
                        style={{
                          border: "1px solid black",
                          color: "black",
                          outline: "none",
                          boxShadow: "none",
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="etag"
                        className="form-label"
                        style={{ color: "black" }}
                      >
                        Tag
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="etag"
                        name="etag"
                        value={enote.etag}
                        onChange={onChange}
                        style={{
                          border: "1px solid black",
                          color: "black",
                          outline: "none",
                          boxShadow: "none",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            {notes.length === 0 && "No Notes to display"}
            {notes.map((note) => (
              <div key={note._id} className="col-md-4 mb-3">
                <Noteitem key={note._id} note={note} updateNote={updateNote} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
