import React, { useState } from "react";

export default function MainPage() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            value={toDo}
            placeholder="What your toDo"
          />
          <button>Add To Do</button>
        </form>
        <hr />
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
