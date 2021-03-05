import globalWeapons from "./global/weapons";
import showstopper from "./hitman1/showstopper";
import finishLine from "./hitman2/finishLine";

import { DataType } from "../types";

const data: DataType = {
  global: {
    weapons: globalWeapons,
  },
  missions: [showstopper, finishLine],
};

export default data;
