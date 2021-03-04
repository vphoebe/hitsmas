export type ObjectiveType = {
  name: string;
  url?: string;
  generic?: boolean;
};

export type MissionType = {
  location: string;
  title: string;
  version: number;
  targets: string[];
  disguises: ObjectiveType[];
  weapons: ObjectiveType[];
};

export type DataType = {
  global: {
    weapons: ObjectiveType[];
  };
  missions: MissionType[];
};
