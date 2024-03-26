import React from "react";
import Form from "./Form";
import "./styles.css"
var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered = {userIsRegistered}/>
    </div>
  );
}

export default App;

