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

      <h1>{props.heading}</h1>
       <div className = "container my-3">
         <textarea className="form-control " value = {text} onChange={handleOnChange} 
          style={{backgroundColor: props.mode==='dark'?'#07365aff':'white' , color: props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1"  rows="10"></textarea>
       </div>
      <button disabled={text.length === 0} className="btn-primary mx-2 " onClick={handleUpclick}>Convert to Uppercase</button>
      <button  disabled={text.length === 0} className="btn-primary mx-2" onClick={handlelowclick}>Convert to Lowercase</button>
      <button  disabled={text.length === 0} className="btn-primary mx-2" onClick={handleClearclick}>Clear text</button>


    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>

      <h1>Your Text Summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{ return element.length !== 0 }).length} Words and {text.length} Characters</p>
      <p> {0.008*text.split(" ").filter((element)=>{ return element.length !== 0 }).length}  Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
   </>
   
   
  )
}
