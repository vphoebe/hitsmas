import * as React from "react";
import { MissionType } from "./types";
import data from "./data";
import { FaGlobe, FaAngleDown } from "react-icons/fa";

interface SelectPropTypes {
  selectedMission: MissionType;
  setSelectedMission: Function;
}

const Select = ({ selectedMission, setSelectedMission }: SelectPropTypes) => {
  return (
    <div className="px-8 py-4 bg-blue-300 rounded-t-lg flex justify-between items-center">
      <div className="flex flex-wrap items-center">
        <div className="font-bold text-2xl text-blue-800 mr-3 flex items-center">
          <FaGlobe className="mr-2" />
          {selectedMission.location}
        </div>
        <div className="font-mono text-lg text-blue-700 mt-1">
          {selectedMission.title}
        </div>
      </div>
      <FaAngleDown className="text-xl text-blue-800" />
    </div>
  );
};

export default Select;