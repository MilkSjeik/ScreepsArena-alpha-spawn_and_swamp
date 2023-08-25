"use strict";

import { getObjectsByPrototype } from "game/utils";
import { StructureSpawn } from "game/prototypes";
import _ from "./utils/lodash-4.17.21-es/lodash";

import Squad from "./squads/Squad";
import AssaultSquad from "./squads/AssaultSquad";
import { ASSAULT, MINING } from "./constants.mjs";
import { HAULER, SOLDIER, SNIPER, HEALER } from "./constants.mjs";

class SquadController {
  squadCounter = 1;
  #squads = [];

  constructor() {}

  // Getters

  // Setters

  // Create squad
  createSquad(spawnQueue, squadType) {
    let mySquad;

    switch (squadType) {
      case MINING:
        mySquad = new Squad(this.squadCounter, [HAULER, HAULER], spawnQueue);
        break;
      case ASSAULT:
        // TODO: implement healer and sniper
        //mySquad = new AssaultSquad(this.squadCounter, [SOLDIER, SOLDIER, SNIPER, HEALER], spawnQueue);
        mySquad = new AssaultSquad(
          this.squadCounter,
          [SOLDIER, SOLDIER],
          spawnQueue
        );
      default:
        break;
    }

    if (mySquad) {
      this.#squads.push(mySquad);
      this.squadCounter++;
    }
  }

  run(memory) {
    //console.log("[D] SquadController.run()");
    this.#squads.forEach((squad) => {
      squad.run(memory);
    });
  }
}

export default SquadController;
