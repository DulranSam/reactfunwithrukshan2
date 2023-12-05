import React, { useState, useEffect, useRef, createContext } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Secondary(props) {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    console.log(`The output is ${inputValue}`);
  }, [inputValue]);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <button onClick={props.awesome}>Awesome lol</button>
      <h1>Hello {props.veloxal}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
export default Secondary;
