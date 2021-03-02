import * as React from "react";
import data from "./data";
import Mission from "./Mission";
import Select from "./Select";
import Nav from "./Nav";

function App() {
  const [selectedMission, setSelectedMission] = React.useState(
    data.missions[0]
  );
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col justify-center flex-grow px-2">
        <div className="container mx-auto max-w-md bg-gray-300 rounded-lg shadow-lg">
          <Select
            selectedMission={selectedMission}
            setSelectedMission={setSelectedMission}
          />
          <Mission mission={selectedMission} />
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default App;
