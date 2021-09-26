import React ,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState("Enter Text");
   
    return (
        <div>   
            <h1>
                {props.heading} - {text}
            </h1>
                <div className="mb-3">
                <label htmlFor="myBox" className="form-label" ></label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
                {console.log(text)}
            </div>
            
            <button type="button" className="btn btn-primary" onClick={()=>{text.toUpperCase()}}>Convert To Upper</button>
        </div>
    )
}
Textform.defaultProps = {
    heading : "Enter Text Here"
}
