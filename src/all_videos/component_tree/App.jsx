import React, { useState } from "react";
import ToDoItem from "./ToDoItem"
import "./styles.css"

function App() {
  const [inputText, setInputText] = useState({
    text: "",
    key: 0
  });
  const [key, updateKey] = useState(0);
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    var newKey = key 
    setInputText({
        text: newValue,
        key: newKey

    });
    updateKey(key+1)
    

    
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText.text} placeholder={inputText.text} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
           items.map(todoItem => (
            <ToDoItem todoItem={todoItem.text} key={todoItem.key} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
