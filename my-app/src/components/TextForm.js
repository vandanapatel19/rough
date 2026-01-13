import React, {useState} from 'react'


export default function TextForm(props) {

     const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!", "success");
        };

        const handlelowclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!", "success");
        };

        const handleClearclick = ()=>{
        let newText = "";
        setText(newText);
         props.showAlert("Text is cleared!", "success");
        };


     const handleOnChange = (event)=>{
        setText(event.target.value);
        };


  const [text, setText] = useState('');

  return (
   <>
    <div className = "container" style={{color: props.mode==='dark'?'white':'#042743'}}>

      <h1>{props.heading}</h1>``
       <div className=" container my-3">
         <textarea className="form-control" value = {text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
       </div>
      <button className="btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn-primary mx-2" onClick={handlelowclick}>Convert to Lowercase</button>
      <button className="btn-primary mx-2" onClick={handleClearclick}>Clear text</button>


    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>

      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} Words and {text.length} Characters</p>
      <p> {0.008*text.split(" ").length}  Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
   </>
   
   
  )
}
