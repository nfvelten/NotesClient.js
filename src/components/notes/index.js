import React, { Fragment, useEffect, useState } from "react";
import "../../styles/notes.scss";
import { push as Menu } from "react-burger-menu";
import { Column, Button } from "rbx";
import List from "../notes/list";
import NoteService from "../../services/note";
import Editor from "../notes/editor";
import Search from "../notes/search";

function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({
    title: "",
    body: "",
    id: "",
  });

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NoteService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse());
      setCurrentNote(response.data[0]);
    } else {
      setNotes([]);
    }
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id === id;
    });
    setCurrentNote(note);
  };

  const createNote = async (params) => {
    const note = await NoteService.create();
    fetchNotes();
  };

  const searchNotes = async (query) => {
    const response = await NoteService.search(query);
    setNotes(response.data);
  };

  const deleteNote = async (note) => {
    await NoteService.delete(note._id);
    fetchNotes();
  };

  return (
    <Fragment>
      <Column.Group className="notes" id="notes">
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Column.Group>
            <Column size={10} offset={1}>
              <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
            </Column>
          </Column.Group>
          <List
            notes={notes}
            selectNote={selectNote}
            createNote={createNote}
            deleteNote={deleteNote}
            current_note={current_note}
          />
        </Menu>

        <Column size={12} className="notes-editor" id="notes-editor">
          <Editor note={current_note} updateNote={updateNote} />
        </Column>
      </Column.Group>
    </Fragment>
  );
}
export default Notes;
