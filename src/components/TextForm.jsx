import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  } 

  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Clear all messages", "success");
  }

  const handleOnChange = (event) => {
    //  console.log("Handle on change: " + text);
    setText(event.target.value);
    
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy messages", "success");

  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState("");
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state
  return (
    <>
      <div className="container " style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray': 'white' , color: props.mode==='dark'?'white': '#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extraspace</button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
};

export default TextForm;
