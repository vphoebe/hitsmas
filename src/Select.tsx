import * as React from "react";
import { MissionType } from "./types";
import { FaGlobe, FaAngleDown, FaAngleUp, FaSyncAlt } from "react-icons/fa";
import SelectList from "./SelectList";

interface SelectPropTypes {
  selectedMission: MissionType;
  setSelectedMission: Function;
  setMissionKey: Function;
}

const Select = ({
  selectedMission,
  setSelectedMission,
  setMissionKey,
}: SelectPropTypes) => {
  const [showSelectList, setShowSelectList] = React.useState(false);
  const [selectedVersion, setSelectedVersion] = React.useState(
    selectedMission.version
  );
  return (
    <>
      <div className="px-8 py-4 bg-blue-400 rounded-t-lg flex justify-between items-center transition-colors w-full">
        <div className="flex flex-wrap items-center">
          <div className="font-bold text-2xl text-blue-800 mr-3 flex items-center">
            <FaGlobe className="mr-2" />
            {selectedMission.location}
          </div>
          <div className="font-mono text-lg text-blue-700 mt-1">
            {selectedMission.title}
          </div>
        </div>
        <div className="flex">
          <button
            className="mr-2 text-lg text-blue-800 hover:text-blue-700"
            onClick={() => setMissionKey(new Date().getTime())}
          >
            <FaSyncAlt />
          </button>
          <button onClick={() => setShowSelectList(!showSelectList)}>
            {showSelectList ? (
              <FaAngleUp className="text-3xl text-blue-800 hover:text-blue-700" />
            ) : (
              <FaAngleDown className="text-3xl text-blue-800 hover:text-blue-700" />
            )}
          </button>
        </div>
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
