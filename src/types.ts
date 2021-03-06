export type ObjectiveType = {
  name: string;
  outfit?: boolean; // append _(Outfit) to url
  link?: boolean; // link to wiki
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
