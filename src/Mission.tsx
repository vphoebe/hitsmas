import * as React from "react";
import { MissionType } from "./types";

interface TargetProps {
  target: string;
  disguise: string;
  weapon: string;
}

const getRnd = (array: string[]): string => {
  const idx = Math.floor(Math.random() * Math.floor(array.length));
  return array[idx];
};

const Target = ({ target, disguise, weapon }: TargetProps) => {
  return (
    <div>
      <h2>Target: {target}</h2>
      <p>Disguise: {disguise}</p>
      <p>Weapon: {weapon}</p>
    </div>
  );
};

const Mission = ({ mission }: { mission: MissionType }) => {
  const targets = mission.targets;
  return (
    <>
      <h1>
        {mission.location}: {mission.title}
      </h1>
      {targets.map((trg) => (
        <Target
          target={trg}
          disguise={getRnd(mission.disguises)}
          weapon={getRnd(mission.weapons.lethal)}
        />
      ))}
    </>
  );
};

export default Mission;
