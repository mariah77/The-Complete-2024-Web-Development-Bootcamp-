import React, {useState} from "react";

function ToDoItem(props){
    const [isTextStriked, updateIsTextStriked] = useState(false)
    var textDecoration = {
        textDecoration: "none"
    }
    function strikeText(){
        // if (isTextStriked === false){ 
        //     updateIsTextStriked(true)
        // }
        // else if(isTextStriked === true){
        //     updateIsTextStriked(false)
        // }
        // updateIsTextStriked(prevValue => {
        //     return !prevValue
        // })
        if (isTextStriked == false){
            textDecoration.textDecoration = "line-through"
            updateIsTextStriked(true)
        }
        else{
            textDecoration.textDecoration="none"
            updateIsTextStriked(false)
        }
    }
    
    return( 
        <div>
            <li onClick={ strikeText} className={textDecoration} >{props.todoItem}</li>
        </div>
       
)
}
export default ToDoItem;