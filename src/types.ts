export type LocationType = {
  location: string;
  title: string;
  targets: string[];
  disguises: string[];
  weapons: {
    lethal: string[];
    nonLethal: string[];
  };
};
