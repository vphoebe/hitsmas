import globalWeapons from "./global/weapons";
import showstopper from "./hitman1/showstopper";
import { DataType } from "../types";

const data: DataType = {
  global: {
    weapons: globalWeapons,
  },
  missions: [showstopper],
};

export default data;
