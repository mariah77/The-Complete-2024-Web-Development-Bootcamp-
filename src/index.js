// 


// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";
// import cars from "./all_videos/destructure/practice";
// import animals from "./all_videos/destructure/data";

// // const [honda : {model:hondaModel, coloursByPopularity : hondaTopColour, speedStats: {topSpeed : hondaTopSpeed}}, tesla : {model , coloursByPopularity : teslaTopColour,speedStats : {topSpeed : teslaTopSpeed}}] = cars
// const [cat, dog] = animals;
// // const {name = "boba cat", sound = "prrrr"} = cat; // if name is not defined then use the value boba cat
// const {name, sound, feedingrequirements : {food, water}} = cat 
// // const {food, water} = feedingrequirements;

// const [honda, tesla] = cars
// const {coloursByPopularity: hondacolor, speedStats: {topSpeed: hondaTopSpeed}} = honda
// const {coloursByPopularity: teslacolor, speedStats: {topSpeed: teslaTopSpeed} } = tesla
// const [hondaTopColour] = hondacolor
// const [teslaTopColour] = teslacolor
// ReactDOM.render(
//   <div>
//     {/* {/* <h1>{name}</h1> */}
//     <h1>{food}</h1>
//     <h1>{water}</h1> 
//     {/* <h1>{dog.name}</h1> */}
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>
//   </div>
//   ,
//   document.getElementById("root")
// );

import React from "react";
import App from "./all_videos/event_handling/App";
import ReactDOM from "react-dom";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);