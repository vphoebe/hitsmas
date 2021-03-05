import * as React from "react";
import data from "./data";
import Mission from "./Mission";
import Select from "./Select";
import Nav from "./Nav";
import { MissionType } from "./types";

function App() {
  const [missionKey, setMissionKey] = React.useState<number>(
    new Date().getTime()
  );
  const [selectedMission, setSelectedMission] = React.useState<MissionType>(
    () =>
      data.missions[Math.floor(Math.max(Math.random() * data.missions.length))]
  );
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col justify-center flex-grow p-4">
        <div className="container mx-auto max-w-md bg-gray-300 rounded-lg shadow-lg">
          <Select
            selectedMission={selectedMission}
            setSelectedMission={setSelectedMission}
            setMissionKey={setMissionKey}
          />
          <Mission mission={selectedMission} key={missionKey} />
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default App;
