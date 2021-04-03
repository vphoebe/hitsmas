import { MissionType } from "../../types";

const deathInTheFamily: MissionType = {
  location: "Dartmoor",
  title: "Death in the Family",
  version: 3,
  targets: ["Alexa Christine Carlisle"],
  disguises: [
    { name: "Classic Cut Long Coat Suit", outfit: false },
    { name: "Bodyguard" },
    { name: "Gardener" },
    { name: "Lawyer" },
    { name: "Mansion Guard" },
    { name: "Mansion Staff" },
    { name: "Photographer" },
    { name: "Private Investigator" },
    { name: "Undertaker" },
  ],
  weapons: [
    { name: "Barber Razor" },
    { name: "Cleaver" },
    { name: "Fire Poker" },
    { name: "Folding Knife" },
    { name: "Garden Fork" },
    { name: "Hatchet" },
    { name: "Kitchen Knife" },
    { name: "Letter Opener" },
    { name: "Saber" },
    { name: "Scissors" },
    { name: "Screwdriver" },
  ],
  wildcards: [
    {
      name: "The Butler Did It",
      description: "Eliminate the Butler",
    },
  ],
};

export default deathInTheFamily;
