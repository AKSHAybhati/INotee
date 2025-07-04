const express = require('express');
const router = express.Router();
const Note = require("../model/Note")
const fetchUser = require("../middleware/fetchUser")

// route   GET /api/notes
router.get('/fetchallNotes',fetchUser ,async (req, res) => {
  try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// route   POST /api/notes
router.post('/create', fetchUser ,async (req, res) => {
  const { title, description, tag} = req.body;
  const note = new Note({ title, description, tag ,user: req.user.id});
  await note.save();
  res.json(note);
}); 

//for editing 
// route   PUT /api/notes/update/:id
router.put('/update/:id', fetchUser,async (req, res) => {
  const { title, description, tag } = req.body;

  try {
    // Create a newNote object with the updated fields
    const newNote = {};
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tag) newNote.tag = tag;

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

      if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized" });
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true } // return the updated note
    );

    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//delete request////
router.delete('/delete/:id', fetchUser,async (req, res) => {
  try {
    // Find the note by ID
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

     if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized" });
    }

    // Delete the note
    await Note.findByIdAndDelete(req.params.id);
    res.json({ success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
