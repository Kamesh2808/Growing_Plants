import {  useEffect } from "react";
import React, { useState } from "react";


const Test = () =>
{
  return <h5>test</h5>
}

function GrowingPlants(props) {

// useEffect(() => {
//     console.log("component mounted");
//   }, []); //empty array means it will run only once when the component is mounted
// useEffect(
//   () => {
//     return () => console.log("component unmounted");
//   }
// )





  // const plantname = "Rose";
  // const size = 30;

  // console.log("props:", props);

  //props ->reusability

  //object destructuring ->  const { plantData = defaultdata } = props;

  /**
   * This component uses object destructuring to extract `plantData` from `props`.
   * If `plantData` is not provided, it defaults to `defaultdata`.
   */

  const defaultdata = {
    name: "no name provided",
    size: 30,
    icon: "no icon provided",
  };
  const { plantData = defaultdata } = props;

  let { name, size, icon, aboutMe } = plantData;
  // const [size, setSize] = useState(plantData.size);

  // const plantData={
  //   name: "Rose",
  //   size: 30,
  //   icon: "🌹",
  // };
  const [dynamicsize, setdynamicSize] = useState(size); //rerendering , UI change
  // console.log("dynamicsize:", dynamicsize);


  const func1=() =>{
    if(dynamicsize>100){
      alert("I am too big now, I need to be trimmed");
      setdynamicSize(30); //resetting the size to 30
    }
  }

  useEffect(() => {//which run after every render
    console.log("code");
  }, []);

  useEffect(func1, [dynamicsize]);// which run after every render and when dynamicsize changes it depeends on the dynamicsize

  const water = () => {
    setdynamicSize(dynamicsize + 10); //updating the state
    // console.log("Before", size);
    // size=size+10;
    // console.log("After", size);
  };

  return (
    <div className="plant">
      <div>
        {" "}
       <Test/>
        I'm {name}, I'm growing {"         "}
        {/* conditional rendering */}
        {name === "Rose" ? <span>⭐</span> : <span> 🌼</span>}
        {/* end */}
      </div>
      <br></br>

      <div>
        <span style={{ fontSize: `${dynamicsize}px` }}>{icon}</span>
      </div>
      <button onClick={water}>Give water</button>

      {aboutMe.map((data, index) => (
        <div key={index}>
          {index + 1}. {data}
        </div>
      ))}
      <br></br>
    </div>
  );
}

export default GrowingPlants;
