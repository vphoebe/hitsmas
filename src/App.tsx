import * as React from "react";
import data from "./data";
import Location from "./Location";

function App() {
  return (
    <>
      <h1>Hitsmas Generator</h1>
      {data.locations.map((loc) => (
        <Location location={loc} />
      ))}
    </>
  );
}

export default App;
