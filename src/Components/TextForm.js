import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppwercase was clicked");
    // uppercase me convert kar dega
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppwercase was clicked");
    // uppercase me convert kar dega
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (eve) => {
    // console.log("On change");
    // type kar pae isliye ye hai
    setText(eve.target.value);
  };

  // to text jo value hamne di hai vo hai or setText hogi jo hamne aage denge. settext text ko replace kar degi
  const [text, setText] = useState("");
  // // text = "new text"; // Wrong way to change the state
  // // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container my-3 mx-6">
        <h2 style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading} </h2>
        <div className="mb-3 txa">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button className={`btn btn-${props.typo} my-1`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.typo} mx-3 my-1`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>


        <p>{Math.floor(0.008 * text.split(" ").length)} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
