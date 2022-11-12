import React,{useState} from "react";

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    };

    const handleLoClick = () => {
      // console.log("Uppercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
  };


  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = ' ';
    setText(newText);
    props.showAlert("Text Cleared","success");
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
      props.showAlert("Text Capitalized","success");
      setText(CapitalizeWords);
    }
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space removed","success");
    }

  

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };
  return (
    <>
    <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
      <h2>{props.heading}</h2>  
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="10"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'light'?'white':'#13466e',color: props.mode === 'light'?'black':'white'}}
        ></textarea>
       
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={CapFClick}>Capitalize</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReadClick}>Read Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{ return element.length!== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!== 0}).length} Minute Read</p>
      <h2>Preview</h2>
      {text.length > 0 ? text:"Nothing to Preview"}
    </div>
    </>
  );
}
