import globalWeapons from "./global/weapons";
import globalWildcards from "./global/wildcard";
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
import chasingAGhost from "./hitman2/chasingAGhost";
import anotherLife from "./hitman2/anotherLife";
import arkSociety from "./hitman2/arkSociety";
import nightcall from "./hitman2/nightcall";
import goldenHandshake from "./hitman2/goldenHandshake";
import lastResort from "./hitman2/lastResort";
import onTopOfTheWorld from "./hitman3/onTopOfTheWorld";
import deathInTheFamily from "./hitman3/deathInTheFamily";
import endOfAnEra from "./hitman3/endOfAnEra";
import farewell from "./hitman3/farewell";

const data: DataType = {
  global: {
    weapons: globalWeapons,
    wildcards: globalWildcards,
  },
  missions: [
    showstopper,
    worldOfTomorrow,
    gildedCage,
    club27,
    freedomFighters,
    situsInversus,
    nightcall,
    finishLine,
    threeHeadedSerpent,
    chasingAGhost,
    anotherLife,
    arkSociety,
    goldenHandshake,
    lastResort,
    onTopOfTheWorld,
    deathInTheFamily,
    apexPredator,
    endOfAnEra,
    farewell,
  ],
};

export default data;
