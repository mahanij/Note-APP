import { useState } from "react";
import "./App.css";
import Note from "./components/Note";

function handleSubmit(e, title , setNotes) {
  e.preventDefault();
  let newNote = {
    id: Date.now(),
    name: title,
  };
  setNotes((prevNotes) => [...prevNotes , newNote])
}

function App() {
  const [notes , setNotes] = useState([])
  const [title, setTitle] = useState("");
  console.log(notes)
  return (
    <>
    <form
      onSubmit={(e) => {
        title === "" ? alert("invalid value") : handleSubmit(e, title , setNotes);
      }}
    >
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => {setTitle(e.target.value)
          console.log(e.target.value)
        }}
      />
      <input type="submit" />
    </form>
    {notes.map((item) => <Note title={item.name} key={item.id}></Note>)}
    </>
  );
}

export default App;
