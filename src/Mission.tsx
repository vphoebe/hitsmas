import * as React from "react";
import { MissionType } from "./types";
import { IconType } from "react-icons";
import { FaSkullCrossbones, FaIdCard } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

interface TargetProps {
  target: string;
  disguise: string;
  weapon: string;
}

interface ObjectiveProps {
  Icon: IconType;
  text: string;
}

const getRnd = (array: string[]): string => {
  const idx = Math.floor(Math.random() * Math.floor(array.length));
  return array[idx];
};

const Objective = ({ Icon, text }: ObjectiveProps) => {
  return (
    <div className="flex items-center bg-gray-200 py-2 rounded-md mb-2">
      <Icon className="mx-3" /> {text}
    </div>
  );
};

const Target = ({ target, disguise, weapon }: TargetProps) => {
  return (
    <div className="my-6">
      <div className="text-4xl font-bold text-red-500 mb-4 flex items-center tracking-tight">
        <FiTarget className="mr-2" /> {target}
      </div>
      <div className="font-mono">
        <Objective Icon={FaSkullCrossbones} text={weapon} />
        <Objective Icon={FaIdCard} text={disguise} />
      </div>
    </div>
  );
};

const Mission = ({ mission }: { mission: MissionType }) => {
  const targets = mission.targets;
  return (
    <div className="flex flex-col">
      {targets.map((trg) => (
        <Target
          target={trg}
          disguise={getRnd(mission.disguises)}
          weapon={getRnd(mission.weapons.lethal)}
          key={trg.toLowerCase().trim()}
        />
      ))}
    </div>
  );
};

export default Mission;
