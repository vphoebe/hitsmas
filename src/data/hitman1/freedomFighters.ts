import { MissionType } from "../../types";

const freedomFighters: MissionType = {
  location: "Colorado",
  title: "Freedom Fighters",
  version: 1,
  targets: ["Sean Rose", "Penelope Graves", "Ezra Berg", "Maya Parvati"],
  disguises: [
    { name: "Tactical Gear", outfit: false },
    { name: "Explosives Specialist" },
    { name: "Hacker" },
    { name: "Militia Cook" },
    { name: "Militia Elite" },
    { name: "Militia Spec Ops" },
    { name: "Militia Soldier" },
    { name: "Militia Technician" },
    { name: "Point Man" },
    { name: "Scarecrow" },
  ],
  weapons: [
    { name: "Cleaver" },
    { name: "Kitchen Knife" },
    { name: "Old Axe" },
    { name: "Screwdriver" },
  ],
};

export default freedomFighters;
