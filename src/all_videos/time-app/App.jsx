import React, {useState} from "react";
import "./styles.css"

function App(){
    setInterval(getTime,1000)
    let currentTime = new Date().toLocaleTimeString();
    let [time, updateTime] = useState(currentTime);
    // console.log(time);
    
    function getTime(){
        let currentTime = new Date().toLocaleTimeString();
        updateTime(currentTime)
    }
  
    return (
        <div className="container">
        <h1>{time}</h1>
        <button onClick = {getTime}>Get Time</button>
        </div>
    );
   
}

export default App;