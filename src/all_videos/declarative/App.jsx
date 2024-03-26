import React from "react";
import "./styles.css"

var isDone = false; //declarative

function strike(){
  isDone = true;//declarative
  // document.getElementById("root").style.textDecoration = "line-through"; // imperative
}
function unStrike(){
  isDone = false; //declarative
  // document.getElementById("root").style.textDecoration = null; // imperative

}
function App() {
 const strikeThrough = { textDecoration : "line-through"};  //declarative

  return (
    <div>
      <p style={isDone ? strikeThrough : null}>Buy milk</p> { /*declarative*/}
      {/* <p>Buy milk</p> imperative */}
      <button onClick = {strike}>Task done</button>
      <button onClick={unStrike}>Task not done</button>
    </div>
  );
}

export default App;
