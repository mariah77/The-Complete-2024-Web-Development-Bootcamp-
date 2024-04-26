import React from "react"

class ClassCounter extends React.Component{

constructor(){
    super()
    this.state = {
        count:0
    }
    this.increase = this.increase.bind(this);
}
/* to render code here we still need a render method */
increase(){
    this.setState({ count : this.state.count + 1})
}

render(){
    return (
        <div>
            return <h1>{this.state.count}</h1>
            <button onClick={this.increase}>+</button>
        </div>
     )
   }
}
export default ClassCounter;