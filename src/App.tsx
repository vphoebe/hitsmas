import * as React from "react";
import data from "./data";
import Mission from "./Mission";

function App() {
  return (
    <>
      <h1>Hitsmas Generator</h1>
      {data.missions.map((loc) => (
        <Mission mission={loc} />
      ))}
    </>
  );
}

export default App;
