
import React, {useState} from "react";
import "./styles.css"
function App() {
    // var count  =0;
    // var state = useState(666); // state variable contains an array which stores the initial value and a function to update thta value
    var [count, updateState] = useState(0);
    // var [count] = useState(0); // if we do this tehn only teh first value of array is stored 
    function increase(){
        count +=1
        updateState(count)
        // document.getElementById("count").innerHTML = count + 1;
    
    }
    function decrease(){
        count -=1
        updateState(count)
        // document.getElementById("count").innerHTML = count - 1;
    }


  return (
    <div className="container">
        <h1 id="count">{count}</h1>
        <button  onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
  );
}

export default App;

