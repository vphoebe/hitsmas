import * as React from "react";
import { MissionType } from "./types";
import data from "./data";

const SingleGameList = ({ version }: { version: number }) => {
  const matchedMissions = data.missions.filter((m) => m.version === version);
  return (
    <div className="flex flex-col w-full">
      {matchedMissions.map((m: MissionType) => {
        return (
          <div className="px-8 py-2 bg-gray-200 flex justify-between items-center border-b border-blue-400 last:rounded-b-lg">
            <div className="font-bold text-xl text-blue-800 mr-3 flex items-center">
              {m.location}
            </div>
            <div className="font-mono text-md text-blue-700 mt-1">
              {m.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const VersionSelect = () => {
  return (
    <div className="flex flex-grow font-mono font-bold text-lg">
      <div className="flex-grow text-center bg-gray-100 border-4 border-blue-300">
        1
      </div>
      <div className="flex-grow text-center bg-red-600 text-white border-4 border-blue-300">
        2
      </div>
      <div className="flex-grow text-center bg-gray-900 text-white border-4 border-blue-300">
        3
      </div>
    </div>
  );
};

const SelectList = ({ show }: { show: boolean }) => {
  return show ? (
    <div className="flex flex-row flex-wrap w-full">
      <VersionSelect />
      <SingleGameList version={1} />
    </div>
  ) : null;
};

export default SelectList;
