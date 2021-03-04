export type MissionType = {
  location: string;
  title: string;
  version: number;
  targets: string[];
  disguises: string[];
  weapons: {
    lethal: string[];
    nonLethal: string[];
  };
};
