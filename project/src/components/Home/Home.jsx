import React from "react";
import GrowingPlants from "../growingPlants/GrowingPlants";
import "../growingPlants/GrowingPlants.css";
function Home() {
  const plantData = {
    name: "Rose",
    size: 50,
    icon: "🌹",
    aboutMe: [
      "I am a flower",
      "I am red",
      "I am beautiful",
      "I am a symbol of love",
    ],
  };

  const plantData2 = {
    name: "Tulip",
    size: 50,
    icon: "🌷",
    aboutMe: [
      "I am a flower",
      "I am pink",
      "I am beautiful",
      "I am a symbol of spring",
    ],
  };

  const plantData3 = {
    name: "Sunflower",
    size: 50,
    icon: "🌻",
    aboutMe: [
      "I am a flower",
      "I am yellow",
      "I am beautiful",
      "I am a symbol of happiness",
    ],
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <GrowingPlants plantData={plantData} />
      <GrowingPlants plantData={plantData2} />
      <GrowingPlants plantData={plantData3} />
    </div>
  );
}

export default Home;
