// import React, {useState} from "react";
// import "./styles.css"

// function App() {
//   const [fname, setFname] = useState("")
//   const [lname, setLname] = useState("")

//   function updateFname(event){
    
//     setFname(event.target.value)
//   }
//   function updateLname(event){
    
//     setLname(event.target.value)
//   }
//   return (
//     <div className="container">
//       <h1>
//         Hello {fname} {lname}
//       </h1>
//       <form>
//         <input
//           name="fName"
//           placeholder="First Name"
//           value={fname}
//           onChange={updateFname}
//         />
//         <input
//           name="lName"
//           pplaceholder="Last Name"
//           value={lname}
//           onChange={updateLname}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, {useState} from "react"
import "./styles.css"

function App(){
    const [fullName, setFullName] = useState({
        fname: "",
        lname: ""
    })
    function handleChange(event){
        // const newValue = event.target.value
        // const inputName = event.target.name 
        const {value, name} = event.target
        // will log the name value given inisded the input tag
        // const [newValue, inputName] = event.target
        // console.log(newValue)
        // console.log(inputName)
        // if (inputName === "fName"){
        //     setFullName({fname : newValue});
        //     console.log(fullName.fname)
        //     // if we just let it be till here if fname is chnaged and later on lname is changed only lname will be dispalyed alongside hello and not fname
        // }
        // else if(inputName === "lName"){
        //     setFullName({lname : newValue})
        //     console.log(fullName.lname)
        // }
        setFullName(prevValue => {
            if( event.target.name === "fName"){
                return {
                    fname: value,
                    lname: prevValue.lname
                }
            }
            else if( name === "lName"){
                return {
                    fname: prevValue.fname,
                    lname: value
                }
            }
        })
    }
    return (
            <div className="container">
              <h1>
                Hello {fullName.fname} {fullName.lname}
              </h1>
              <form>
                <input
                  name="fName"
                  placeholder="First Name"
                  value={fullName.fname}
                  onChange={handleChange}
                />
                <input
                  name="lName"
                  placeholder="Last Name"
                //   value={fullName.lname} if commnet this out then turns into an uncontrolled component
                // however we do want a controlled component and want the value and state to be the same for the input element
                value={fullName.lname}
                  onChange={handleChange}
                />
                <button>Submit</button>
              </form>
            </div>
          );
}

export default App;
