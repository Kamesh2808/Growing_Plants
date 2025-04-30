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

  // const plantData={
  //   name: "Rose",
  //   size: 30,
  //   icon: "🌹",
  // };

  return (
    <div className="plant">
      <div> I'm {plantData.name}</div>
      <div>
        I'm growing
        <span style={{ fontSize: `${plantData.size}px` }}>
          {plantData.icon}
        </span>
      </div>
    </div>
  );
}

export default GrowingPlants;
