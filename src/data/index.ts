import globalWeapons from "./global/weapons";
import { DataType } from "../types";
import showstopper from "./hitman1/showstopper";
import finishLine from "./hitman2/finishLine";
import threeHeadedSerpent from "./hitman2/threeHeadedSerpent";
import apexPredator from "./hitman3/apexPredator";

const data: DataType = {
  global: {
    weapons: globalWeapons,
  },
  missions: [showstopper, finishLine, threeHeadedSerpent, apexPredator],
};

export default data;
