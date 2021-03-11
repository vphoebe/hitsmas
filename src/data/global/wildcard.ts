import { WildcardType } from "../../types";

const globalWildcards: WildcardType[] = [
  {
    name: "Up Close and Personal",
    description: "No thrown object knockouts or kills",
  },
  {
    name: "You Should See the Other Guy",
    description: "Kill an NPC in front of a target",
  },
  {
    name: "Minimalist",
    description:
      "All items must be dropped (and not retrieved) immediately after starting level",
  },
  {
    name: "Get Down, Mr. President",
    description: "Invoke Target Lockdown (while all targets are alive)",
  },
  {
    name: "Put Up Yer Dukes",
    description: "Engage in combat",
  },
  {
    name: "On Your Marks",
    description: "Fire a pistol into the air",
  },
  {
    name: "First-person Shooter",
    description: "Kill the first person you see in the level",
  },
  {
    name: "Say Cheese",
    description: "Drag a body into view of a security camera",
  },
];

export default globalWildcards;
