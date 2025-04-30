import React from "react";

function GrowingPlants(props) {
  // const plantname = "Rose";
  // const size = 30;
  console.log("props:", props);

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

  const { name, size, icon, aboutMe } = plantData;

  // const plantData={
  //   name: "Rose",
  //   size: 30,
  //   icon: "🌹",
  // };

  return (
    <div className="plant">
      <div> I'm {name}, I'm growing {"         "}

        {/* conditional rendering */}
        {name === "Rose" ? (
          <span>⭐</span>
        ) : (
          <span> 🌼</span>
        )}
        {/* end */}
      </div>

      <div>
        <span style={{ fontSize: `${size}px` }}>{icon}</span>
      </div>

      {aboutMe.map((data, index) => (<div>{index + 1}. {data}</div>))}
      <br></br>
    </div>
  );
}

export default GrowingPlants;
