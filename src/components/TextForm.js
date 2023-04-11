import React, { useState } from "react";

export default function TextForm(props){

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handleLoClick = ()=>{
        console.log("Lowercase was clicked");
        let newtext1 = text.toLowerCase();
        setText(newtext1)
    }

    const handleClearClick = ()=>{
       if(text.length===0){
        alert("No text is written.")
       }
       else if (window.confirm("This will clear all the text! Are you sure?")){ ;
        console.log("Clear was clicked");
        let newtext2 = "";
        setText(newtext2)
       }
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
   }

   const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  function countWords(text){
    let wc = text.split(" ").length;
    text.split(" ").forEach((word) => {
        if(!word.length){
            wc -= 1;  
        }
    });

    return wc;
}

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white' , color:props.mode==='dark'?'white':'black' }} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-dark mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-dark mx-1" onClick={handleSpeak}>Dictate the text</button>
      <button className="btn btn-dark mx-1" onClick={handleCapitalize}>Capitalize the text</button>
      <button className="btn btn-dark mx-1" onClick={handleReverse}>Reverse the text</button>
      <button className="btn btn-dark mx-1" onClick={handleClearClick}>Clear the text</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black' }} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} letters</p>
        <p>{0.008 * text.split(" ").length} minutes to read this file.</p>
        <h2> Preview </h2>
        <p>{text.length>0?text:"Enter something to preview it here."}</p>
    </div>
    </>
  );
}
