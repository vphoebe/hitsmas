import * as React from "react";
import { MissionType, ObjectiveType } from "./types";
import data from "./data/";
import { IconType } from "react-icons";
import { FaSkullCrossbones, FaIdCard } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

interface TargetProps {
  target: string;
  disguise: ObjectiveType;
  weapon: ObjectiveType;
}

interface ObjectiveProps {
  Icon: IconType;
  objective: ObjectiveType;
}

function shuffleArray(array: ObjectiveType[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Objective = ({ Icon, objective }: ObjectiveProps) => {
  if (objective.generic) {
    return (
      <div className="flex items-center bg-gray-200 py-2 rounded-md mb-2 shadow">
        <Icon className="mx-3" /> {objective.name}
      </div>
    );
  }
  return (
    <a
      href={
        objective.url ||
        `https://hitman.fandom.com/wiki/${objective.name.replace(" ", "_")}`
      }
      rel="noopenner"
      target="blank"
      className="flex items-center bg-gray-200 py-2 rounded-md mb-2 shadow hover:bg-white transition-colors"
    >
      <Icon className="mx-3" /> {objective.name}
    </a>
  );
};

const Target = ({ target, disguise, weapon }: TargetProps) => {
  return (
    <div className="my-6">
      <div className="text-2xl font-bold text-red-500 mb-4 flex items-center tracking-tight lg:text-4xl">
        <FiTarget className="mr-2" /> {target}
      </div>
      <div className="font-mono">
        <Objective Icon={FaSkullCrossbones} objective={weapon} />
        <Objective Icon={FaIdCard} objective={disguise} />
      </div>
    </div>
  );
};

const Mission = ({ mission }: { mission: MissionType }) => {
  const targets = mission.targets;
  const disguises = shuffleArray(mission.disguises);
  const weapons = shuffleArray([...mission.weapons, ...data.global.weapons]);
  console.log(disguises, weapons);
  return (
    <div className="flex flex-col p-8 pt-2">
      {targets.map((trg, i) => (
        <Target
          target={trg}
          disguise={disguises[i]}
          weapon={weapons[i]}
          key={trg.toLowerCase().trim()}
        />
      ))}
    </div>
  );
};

export default Mission;
