import * as React from "react";
import { MissionType } from "./types";
import data from "./data";

const SingleGameList = ({
  selectedVersion,
  setSelectedMission,
  setShowSelectList,
}: {
  selectedVersion: number;
  setSelectedMission: Function;
  setShowSelectList: Function;
}) => {
  const matchedMissions = data.missions.filter(
    (m) => m.version === selectedVersion
  );
  return (
    <div className="flex flex-col w-full">
      {matchedMissions.map((m: MissionType) => {
        return (
          <button
            className="px-4 py-2 bg-gray-200 flex justify-between items-center border-b border-blue-400 last:rounded-b-lg"
            onClick={() => {
              setSelectedMission(m);
              setShowSelectList(false);
            }}
          >
            <div className="font-bold text-md text-blue-800 mr-3 flex items-center lg:text-xl">
              {m.location}
            </div>
            <div className="font-mono text-sm text-blue-700 mt-1">
              {m.title}
            </div>
          </button>
        );
      })}
    </div>
  );
};

const VersionTab = ({
  selected,
  colorClass,
  textColorClass = "text-black",
  version,
  setSelectedVersion,
}: {
  selected: boolean;
  colorClass: string;
  textColorClass?: string;
  version: number;
  setSelectedVersion: Function;
}) => {
  const selectedClass = selected ? "border-gray-200" : "border-blue-300";
  return (
    <button
      className={`font-mono font-bold text-lg flex-grow text-center border-8 ${colorClass} ${selectedClass} ${textColorClass}`}
      onClick={() => setSelectedVersion(version)}
    >
      {version}
    </button>
  );
};

const VersionSelect = ({
  selectedVersion,
  setSelectedVersion,
}: {
  selectedVersion: number;
  setSelectedVersion: Function;
}) => {
  return (
    <div className="flex flex-grow">
      <VersionTab
        selected={selectedVersion === 1}
        colorClass="bg-white"
        version={1}
        setSelectedVersion={setSelectedVersion}
      />
      <VersionTab
        selected={selectedVersion === 2}
        colorClass="bg-red-600"
        version={2}
        setSelectedVersion={setSelectedVersion}
      />
      <VersionTab
        selected={selectedVersion === 3}
        colorClass="bg-gray-900"
        textColorClass="text-white"
        version={3}
        setSelectedVersion={setSelectedVersion}
      />
    </div>
  );
};

const SelectList = ({
  selectedVersion,
  setSelectedVersion,
  selectedMission,
  setSelectedMission,
  setShowSelectList,
}: {
  selectedVersion: number;
  setSelectedVersion: Function;
  selectedMission: MissionType;
  setSelectedMission: Function;
  setShowSelectList: Function;
}) => {
  return (
    <div className="flex flex-row flex-wrap w-full">
      <VersionSelect
        selectedVersion={selectedVersion}
        setSelectedVersion={setSelectedVersion}
      />
      <SingleGameList
        selectedVersion={selectedVersion}
        setSelectedMission={setSelectedMission}
        setShowSelectList={setShowSelectList}
      />
    </div>
  );
};

export default SelectList;
