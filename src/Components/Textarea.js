import React, {useState} from 'react'

function Textarea() {

  const toUpper = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const toLower = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  const removeSpace = () => {
    let newText = text.split(/[ ]+ /);
    setText(newText.join(" "))
  }
  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  const clear = () => {
    setText("")
  }

  const changeon = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("")
  return (
  <>
    <div  className='container my-5'>
      <div>
          <div><h2>Your Texts can be converted here.</h2></div>
          <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Type here..' value={text} onChange={changeon} required></textarea>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={toUpper}>Change to Uppercase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={toLower}>Change to Lowercase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={removeSpace}>Remove extra spaces</button>
        <button type="button" className="btn btn-primary my-3 mx-2"  onClick={copyText}>Copy Text</button>
        <button type="button" className="btn btn-danger my-3 mx-2 " onClick={clear}>Clear</button>
      </div>
      <div><h6>Characters used : {text.length} &nbsp; &nbsp; &nbsp; Words used: {text.split(" ").filter((element) => {return element.length !==0}).length } </h6></div>
    </div>

  </>
  )
}

export default Textarea