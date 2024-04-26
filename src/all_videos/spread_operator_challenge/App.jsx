import React, {useState} from "react";

import "./styles.css"
function App() {
  const [todo, updateToDo] = useState([])
  const [todoItem, updateToDoItem] = useState("")
  function handleChange(event){
    updateToDoItem(event.target.value)
  }
  function addItem(event){
    // const newArray = [...todo, todoItem]
    // updateToDo(newArray)
    updateToDo( prevValue =>{
        return [ ...prevValue, todoItem  ]
        }
    )
    updateToDo("")
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text"
         value={todoItem} 
         onChange={handleChange}
         />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {
            todo.map(
                todoItem =>  { return (
                    
                        <li>{todoItem}</li>
                    
                   )
                  
                }
            )
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
