import React,{useState} from "react";


export default function TextForm(props) {

    const [text,setText] = useState("");

    const handleUpClick =()=>{
        // console.log("upper case")
        // setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(' Converted to Upper Case','success')
      }
      const handleLowClick =()=>{
        // console.log("upper case")
        // setText("You have clicked on handleUpClick")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(' Converted to Lower Case','success')
      }
      
      const handleClear =()=>{
        setText('');
        props.showAlert(' Text Cleared','success')
    }
    
    const handleOnChange =(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }


  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'white'}`}>
    <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-danger mx-1" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
    </div>
    <div className={`container text-${props.mode==='light'?'dark':'white'} my-3`}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <hr />
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  );
}
