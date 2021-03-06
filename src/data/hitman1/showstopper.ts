import { MissionType } from "../../types";

const showstopper: MissionType = {
  location: "Paris",
  title: "The Showstopper",
  version: 1,
  targets: ["Viktor Novikov", "Dalia Margolis"],
  disguises: [
    { name: "Tuxedo", outfit: false },
    { name: "Auction Staff" },
    { name: "Chef" },
    { name: "CICADA Bodyguard" },
    { name: "Helmut Kruger" },
    { name: "Palace Staff" },
    { name: "Security Guard" },
    { name: "Stylist" },
    { name: "Sheikh" },
    { name: "Tech Crew" },
    { name: "Vampire Magician" },
  ],
  weapons: [
    { name: "Battle Axe" },
    { name: "Cleaver" },
    { name: "Crowbar" },
    { name: "Fire Axe" },
    { name: "Fire Poker" },
    { name: "Hatchet" },
    { name: "Kitchen Knife" },
    { name: "Letter Opener" },
    { name: "Saber" },
    { name: "Scissors" },
    { name: "Screwdriver" },
  ],
  wildcards: [
    {
      name: "Helmut Hair",
      description: "Become Helmut Kruger",
    },
    {
      name: "Drop the Bass",
      description: "Drop a speaker while both targets are still alive",
    },
  ],
};

export default showstopper;
