import * as React from "react";
import { MissionType } from "./types";
import data from "./data";

interface SelectPropTypes {
  selectedMission: MissionType;
  setSelectedMission: Function;
}

const Select = ({ selectedMission, setSelectedMission }: SelectPropTypes) => {
  return (
    <div className="px-8 py-6 bg-blue-300 rounded-t-lg">
      <div>
        <div className="font-bold text-3xl text-blue-800">
          {selectedMission.location}
        </div>
        <div className="font-mono text-xl text-blue-700">
          {selectedMission.title}
        </div>
      </div>
    </div>
  );
};

export default Select;
