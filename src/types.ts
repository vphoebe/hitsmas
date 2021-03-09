export type ObjectiveType = {
  name: string;
  outfit?: boolean; // append _(Outfit) to url
  link?: boolean; // link to wiki
};

export type WildcardType = {
  name: string;
  description: string;
};

export type MissionType = {
  location: string;
  title: string;
  version: number;
  targets: string[];
  disguises: ObjectiveType[];
  weapons: ObjectiveType[];
  wildcards?: WildcardType[];
};

export type DataType = {
  global: {
    weapons: ObjectiveType[];
    wildcards: WildcardType[];
  };
  missions: MissionType[];
};
