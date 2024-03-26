import React from "react";
import "./styles.css"
import Hello from "./Hello";
import Form from "./Form";



// function renderConditionally(form_properties){
//     if(isLoggedIn === true){
//         return <Hello />
//     }
//     else {
//         return <Form />
//     }
// }
function App() {
  const isLoggedIn = false;
  const currentTime = new Date().getHours();
  console.log(currentTime)
  return (
    <div className="container">
      { isLoggedIn  ? 
         <Hello /> 
        :
        <Form />
      }
      {
        // currentTime>12 ?
        // <h1> watcha doing?</h1>
        // :
        // <h1> null</h1>
        currentTime>12 && <h1> hello guys</h1> 
      }
    </div>
  );
}

export default App;
