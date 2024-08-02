import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = ()=>{
        // console.log("upper case was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
        
      }
      const handleClearText = ()=>{
        setText("");
        props.showAlert("Text is cleared", "success")
      }
      
      
      const handleAltText = ()=>{
        let altStirng ="";
        
        for(let i=0;i<text.length;i++){
          if(i%2 === 0){
            altStirng += text.charAt(i).toLowerCase();
          }
          else{
            altStirng += text.charAt(i).toUpperCase();
          }
        }
        setText(altStirng);
        props.showAlert("The text characters are alterated", "success")
      }
      const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value);   
      }
      const handleRemoveExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("The extra space is removed", "success")
      }
      const handleCopyText =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
      }

    const [text, setText] = useState(""); // here text value is by default "" which we have set inside useState 
    // text = "new text"; // Wrong way to set text
    // setText("new text"); //Right way to set text
  return (
    <>
    <div style={{color :props.mode==='dark'? 'white':'#152248bf'}}>
    <div className="container">
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? '#152248bf':'white', color:props.mode==='dark'? 'white':'#152248bf'}} value={text} rows="10"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
  <button className="btn btn-primary mx-1" onClick={handleAltText}>AlTeRnAtE tExT</button>  
  <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace}>remove extra space</button>  
  <button className="btn btn-primary mx-1" onClick={handleCopyText}>copy text</button>  
  </div>
    <div className="container my-4">
    <p>{parseInt(0.008 * text.split(" ").length)} min read.</p>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length-1} Words</p>
    <p>{text.trim().length} Characters</p>
    <p>{text.split(".").length-1} No. of Sentences</p>
    <h2>Preview Text</h2>
    <p>{text}</p>
    {/* {console.log("this is demo")} */}
    </div>
    </div>
  </>
  )
}
 
// Notes ->
// useState is a hook, used to make set variable 
