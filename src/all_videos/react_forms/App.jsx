import React, {useState} from "react";
import "./styles.css";

function App() {
  var [userInput, updateUserInput] = useState("default-user");
  const [onSubmit, setOnSubmit] = useState("");

  function handleChange(){
    setOnSubmit(userInput);
    
  }

  function handleSubmit(event){
    setOnSubmit(userInput)
    event.preventDefault()
  }
  return (
    <div className="container">
      <h1>Hello, {onSubmit} </h1>
      {/* <input onChange={handleChange} */}
      {/* <form onSubmit={setButton} */}
     
        <input 
        type="text"
          placeholder="What's your name?" 
          value={userInput}
          onChange={(event) => updateUserInput(event.target.value)}
          />
       
           <button onClick={handleSubmit}>Submit</button>
     
    </div>
  );
}

export default App;
