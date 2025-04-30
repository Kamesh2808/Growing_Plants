import React from "react";
import GrowingPlants from "../growingPlants/GrowingPlants";
import "../growingPlants/GrowingPlants.css";
function Home() {

  const plantData={
    name: "Rose",
    size: 50,
    icon: "🌹",
  };

  const plantData2={
    name: "Tulip",
    size: 50,
    icon: "🌷",
  };

  const plantData3={
  
    name: "Sunflower",
    size: 50,
    icon: "🌻",
  };


  return (
    <div>
      <h1>Welcome Home</h1>
      <GrowingPlants  plantData={plantData} />
      <GrowingPlants plantData={plantData2}  />
      <GrowingPlants plantData={plantData3}  />
    </div>
  );
}

export default Home;
