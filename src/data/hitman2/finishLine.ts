import { MissionType } from "../../types";

const finishLine: MissionType = {
  location: "Miami",
  title: "The Finish Line",
  version: 2,
  targets: ["Sierra Knox", "Robert Knox"],
  disguises: [
    { name: "Florida Fit", outfit: false },
    { name: "Any racing driver", link: false },
    { name: "Any mechanic", link: false },
    { name: "Event Security" },
    { name: "Event Crew" },
    { name: "Florida Man" },
    { name: "Food Vendor" },
    { name: "Journalist" },
    { name: "Kitchen Staff" },
    { name: "Kronstadt Engineer" },
    { name: "Kronstadt Researcher" },
    { name: "Kronstadt Security" },
    { name: "Mascot" },
    { name: "Medic" },
    { name: "Moses Lee" },
    { name: "Pale Rider" },
    { name: "Race Coordinator" },
    { name: "Race Marshal" },
    { name: "Sheik" },
    { name: "Street Musician" },
    { name: "Ted Mendez" },
    { name: "Waiter" },
  ],
  weapons: [
    { name: "Amputation Knife" },
    { name: "Battle Axe" },
    { name: "Cleaver" },
    { name: "Crowbar" },
    { name: "Fire Axe" },
    { name: "Hatchet" },
    { name: "Kitchen Knife" },
    { name: "Old Axe" },
    { name: "Scissors" },
    { name: "Screwdriver" },
  ],
  wildcards: [
    {
      name: "Making Headlines",
      description: "Become Florida Man",
    },
  ],
};

export default finishLine;
