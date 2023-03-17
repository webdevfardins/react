import React, { useEffect, useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    //console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("convert to uppercase","success")

  };
  const handleloclick = () => {
    //console.log("Uppercase was clicked" + text);
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert("convert to lowercase","success")

  };
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };

  const handleCopy =()=>{
    var text= document.getElementById("myBox")
     text.select();
     
     navigator.clipboard.writeText(text.value)
     props.showAlert("copy to clipboard","success")

     
  }
 const handleExtraspaces=()=>{
  let newText= text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert("Remove All Spaces","success")

 }




  const [text, setText] = useState("");

  const [wordCount, setWordCount] = useState(0);

  const [charCount, setCharCount] = useState(0);

  useEffect(()=>{
    const word=text.split(' ');

    let wordCount=0;
    word.forEach((word)=>{
      if (word.trim()!==''){
        wordCount++;
      }
    });
    setWordCount(wordCount);
    setCharCount(text.length);

  },[text]);

  
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='light'?'white':'#080b4c',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>
          Convert to Lowercase
        </button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
  </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraspaces}>
         Remove Extra Space
        </button>

      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p className="word-count">word :{wordCount}</p>
        <p className="char-count">Charector :{charCount}</p>
          
        
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>priview</h2>
        <p>{text.length>0?text:"enter something to priview here..."}</p>
      </div>
    </>
  );
  }
