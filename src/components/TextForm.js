import React, { useState } from "react";
// Declare a new state variable, which we'll call "text"
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("OnChange was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); //correct way to change the state

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
