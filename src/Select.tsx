import * as React from "react";
import { MissionType } from "./types";
import { FaGlobe, FaAngleDown, FaAngleUp } from "react-icons/fa";
import SelectList from "./SelectList";

interface SelectPropTypes {
  selectedMission: MissionType;
  setSelectedMission: Function;
}

const Select = ({ selectedMission, setSelectedMission }: SelectPropTypes) => {
  const [showSelectList, setShowSelectList] = React.useState(false);
  const [selectedVersion, setSelectedVersion] = React.useState(
    selectedMission.version
  );
  return (
    <>
      <div
        className="px-8 py-4 bg-blue-300 rounded-t-lg flex justify-between items-center"
        onClick={() => setShowSelectList(!showSelectList)}
      >
        <div className="flex flex-wrap items-center">
          <div className="font-bold text-2xl text-blue-800 mr-3 flex items-center">
            <FaGlobe className="mr-2" />
            {selectedMission.location}
          </div>
          <div className="font-mono text-lg text-blue-700 mt-1">
            {selectedMission.title}
          </div>
        </div>
        {showSelectList ? (
          <FaAngleUp className="text-xl text-blue-800" />
        ) : (
          <FaAngleDown className="text-xl text-blue-800" />
        )}
      </div>
      {showSelectList ? (
        <SelectList
          selectedVersion={selectedVersion}
          setSelectedVersion={setSelectedVersion}
          selectedMission={selectedMission}
          setSelectedMission={setSelectedMission}
          setShowSelectList={setShowSelectList}
        />
      ) : null}
    </>
  );
};

export default Select;
