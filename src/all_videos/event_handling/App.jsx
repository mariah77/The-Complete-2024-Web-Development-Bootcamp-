import React, {useState} from "react";
import "./styles.css";

function App() {
    const [headingText, setHeadingText] = useState("Hello")
    const [colorButton , changeColor] = useState("white");
    const [isMouseOver, updateIsMouseOver] = useState(false)
    // const color = {
    //   backgroundColor: "white"
    // }
    function handleClick(){
      setHeadingText("The end")
    }
    function hoverOver(){
      // color.backgroundColor = "black"
      changeColor("black")
    }
    function moveOn(){
      // color.backgroundColor = "white"
      changeColor("white")


    }
    function onMouseOver(){
      updateIsMouseOver(true)
    }
    function onMouseOut(){
      updateIsMouseOver(false)
    }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      {/* <button style={{backgroundColor: colorButton }} onClick={handleClick} onMouseOver={hoverOver} onMouseOut={moveOn}>Submit</button> */}
      <button style={{backgroundColor: isMouseOver ? "black" : "white" }} onClick={handleClick} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>Submit</button>
    </div>
  );
}

export default App;
