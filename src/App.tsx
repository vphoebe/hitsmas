import * as React from "react";
import data from "./data";
import Mission from "./Mission";

function App() {
  const [selectedMission, setSelectedMission] = React.useState(
    data.missions[0]
  );
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-md bg-gray-300 p-8 rounded-lg">
        {/* <MissionSelect /> */}
        <Mission mission={selectedMission} />
      </div>
    </div>
  );
}

export default App;
