import React from "react";
import Button from "./Button";
import "./styles.css"

function Form(props) {
  return (
    <form className="form">
    
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      { !props.userIsRegistered && <input type="password" placeholder="Confirm Password" />}
      {
        props.userIsRegistered ?
        <Button text="Login" /> 
        :
        <Button text="Register" />      
      }
    </form>
  );
}

export default Form;
