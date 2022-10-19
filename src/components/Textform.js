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
          id="exampleFormControlTextarea1"
          rows="10"
          onChange={handleOnChange}
        ></textarea>
       
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
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
