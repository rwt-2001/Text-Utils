import React ,{useState} from 'react'
import deepai from "deepai";

export default function Textform(props) {
    const [text,setText] = useState("");
    const [respText,setRespText] =useState("");
    const computeWord= (text)=>{
        
        const wordsArray = text.split(" ");
        let words_count = wordsArray.filter((word)=>word!=='').length;
        return words_count
    }
    const removeSpaces=()=>{
        let wordsArray = text.split(" ");
        wordsArray = wordsArray.filter((word)=>word!=='').filter((word)=>word!=='.');
        setText(wordsArray.join(" "))
    }
    
    const summarize=async(text)=>{
        deepai.setApiKey('APIKEY HERE');
        var resp = await deepai.callStandardApi("summarization", {
            text: text,
        });
        console.log(text)
        setRespText(resp.output);
        console.log(resp.output);
    }
    const computeCharaters=(text)=>{
        let charArray = text.split("");
        charArray = charArray.filter((word)=>word!==' ');
        return charArray.length;
    }
    const gen_Text=async(text)=>{
        deepai.setApiKey('APIKEY HERE');
        var resp = await deepai.callStandardApi("text-generator", {
            text: text,
        });
        console.log(text)
        setRespText(resp.output);
        console.log(resp.output);
    }
    const copyResponse = ()=>{
        navigator.clipboard.writeText(respText);

    }
    return (
        <>
        <div className="container" style={{color: props.mode==="light"?"black":"white" }}>   
            <h1>
                {props.heading} 
            </h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label" ></label>
                <textarea className="form-control"   style={{backgroundColor: props.mode==="light"?"white":"#212121",color: props.mode==="light"?"black":"white" }} id="myBox" rows="8" value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
                
            </div>
            
            <button type="button" className="btn btn-primary mx-2 my-3 " onClick={()=>{setText(text.toUpperCase())}}>Convert To Upper</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={()=>{setText(text.toLowerCase())}}>Convert To Lower</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={removeSpaces}>Remove Spaces</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={()=>{summarize(text)}}>Summarize</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={()=>{gen_Text(text)}}>Generate text</button>
            <button type="button" className="btn btn-danger mx-2 my-3" onClick={()=>{setText("")}}>Clear</button>
            <div className="container my-3">
              <h1>Text Info</h1>
              <p>Your text has {computeCharaters(text)} characters and {computeWord(text)} words</p>
              <h2>Preview</h2>
              <p>{respText.length>0?respText:(text.length>0?text:"Enter your text in text-box")}</p>
              <button type="button" style={{color: props.mode==="light"?"black":"white" }} className="btn btn-success mx-2 my-3" onClick={copyResponse}>Copy</button>
            </div>
        </div>
          
          </>
    )
}
Textform.defaultProps = {
    heading : "Enter Text Here"
}
