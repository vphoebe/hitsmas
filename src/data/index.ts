import globalWeapons from "./global/weapons";
import { DataType } from "../types";
import showstopper from "./hitman1/showstopper";
import finishLine from "./hitman2/finishLine";
import threeHeadedSerpent from "./hitman2/threeHeadedSerpent";
import apexPredator from "./hitman3/apexPredator";
import worldOfTomorrow from "./hitman1/worldOfTomorrow";
import gildedCage from "./hitman1/gildedCage";
import club27 from "./hitman1/club27";
import freedomFighters from "./hitman1/freedomFighters";
import situsInversus from "./hitman1/situsInversus";

const data: DataType = {
  global: {
    weapons: globalWeapons,
  },
  missions: [
    showstopper,
    worldOfTomorrow,
    gildedCage,
    club27,
    freedomFighters,
    situsInversus,
    finishLine,
    threeHeadedSerpent,
    apexPredator,
  ],
};

export default data;
