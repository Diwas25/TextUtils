import React,{useState} from "react";

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
      // console.log("Uppercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
  };


  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = ' ';
    setText(newText);
};

const handleReadClick = () => {
  // console.log("Uppercase was clicked");
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
};

const CapFClick = () => {
      let CapitalizeWords = text[0].toUpperCase();
      for (let i = 1; i <= text.length - 1; i++) {
          let currentCharacter, previousCharacter = text[i - 1];
          if (previousCharacter && previousCharacter === ' ') {
              currentCharacter = text[i].toUpperCase();
          } else {
              currentCharacter = text[i];
          }
          CapitalizeWords = CapitalizeWords + currentCharacter;
      }
      setText(CapitalizeWords);
    }
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

  

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };
  return (
    <>
    <div class="container">
      <h2>{props.heading}</h2>  
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="10"
          onChange={handleOnChange}
        ></textarea>
       
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={CapFClick}>Capitalize</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleReadClick}>Read Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div class="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minute Read</p>
      <h2>Preview</h2>
      {text}
    </div>
    </>
  );
}
