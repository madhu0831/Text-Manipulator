import React, { useState } from 'react'

export default function TextForm() {
    
    const handlOnChange=(event)=>{
        setText(event.target.value)
    }
    const handlOnClick=()=>{
        let newText=text.toUpperCase();
        setText("You Clicked..");
        setText(newText);
    }
    const OnClick=()=>{
      let newText=text.toLowerCase();
      setText("You Clicked..");
      setText(newText);
  }


  const wordCount = (value) => {
    return value.replace(/\./g, '')
        .split(' ')
        .filter(str => { return str !== '' })
        .length;
};

const handleReplace = ()=>{
  let replace = prompt("Which word You Want To Replace?");
  let replaceWith = prompt("Replace With?");
  let newText = text.replaceAll(replace, replaceWith);
  setText(newText)
}
const handleBinaryClick = () => {
  let binaryText = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const binary = charCode.toString(2);
    binaryText += binary + ' ';
  }
  setText(binaryText.trim());
};



    const [text,setText]=useState("");
  return (


      <>
  
   
    <h3>Type Here..</h3>
     {/* <label for="textBox" className="form-label">textarea</label> */}
    <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handlOnChange} id="textBox" rows="8"></textarea>
        <button type='button' className='btn btn-primary' onClick={handlOnClick}>UpperCase</button>
        <button type='button' className='btn btn-primary' onClick={OnClick}>LowerCase</button>
        <button type='button' className='btn btn-primary' onClick={handleReplace}>ReplaceWord</button>
        <button type='button' className='btn btn-primary' onClick={handleBinaryClick}>TextToBinary</button>

        <p>{wordCount(text)} words and {text.length} characters.</p>
   </div>
    
 </>


  )
}
