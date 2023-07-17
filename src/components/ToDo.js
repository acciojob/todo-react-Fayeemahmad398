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
          setObj({ ...Obj, todo: event.target.value });
        }}
      />

      <button
        onClick={() => {
          setInput("");
          setDetails([...details, Obj]);
        }}
      >
        Add Todo
      </button>
      {details &&
        details.map((obj, index) => (
          <div key={index}>
            <span>{obj.todo}</span>
            <button
              onClick={() => {
                details.splice(index, 1);
                setDetails([...details]);
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};
export default ToDo;
