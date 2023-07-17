import React from "react";
import { useState } from "react";

const ToDo = () => {
  const [details, setDetails] = useState([]);
  const [Obj, setObj] = useState({});
  const [clearinput, setInput] = useState("");

  return (
    <div>
      <input
        value={clearinput}
        type="text"
        onChange={(event) => {
          setInput(event.target.value);
          setObj({ ...Obj, todo: clearinput });
        }}
      />

      <button
        onClick={() => {
          if (clearinput.trim()) {
            setDetails([...details, Obj]);
            setInput("");
          }
        }}
      >
        Add Todo
      </button>
      {details &&
        details.map((obj, index) => (
          <ul key={index}>
            <li>
              <span>{obj.todo}</span>
              <button
                onClick={() => {
                  details.splice(index, 1);
                  setDetails([...details]);
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
    </div>
  );
};
export default ToDo;
