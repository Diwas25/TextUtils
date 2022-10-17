import React,{useState} from "react";

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };
  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
