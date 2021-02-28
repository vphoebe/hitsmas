import * as React from "react";
import { LocationType } from "./types";

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

const Location = ({ location }: { location: LocationType }) => {
  const targets = location.targets;
  return (
    <>
      <h1>
        {location.location}: {location.title}
      </h1>
      {targets.map((trg) => (
        <Target
          target={trg}
          disguise={getRnd(location.disguises)}
          weapon={getRnd(location.weapons.lethal)}
        />
      ))}
    </>
  );
};

export default Location;
