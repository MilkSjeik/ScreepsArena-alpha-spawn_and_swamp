"use strict";

import { getObjectsByPrototype } from "game/utils";
import { StructureSpawn } from "game/prototypes";
import SquadController from "./SquadController";
import { role } from "constants";
import _ from "./utils/lodash-4.17.21-es/lodash";

// TODO: move to seperate file?
type SpawnRequest = {
  squad: squad;
  memberId: number;
  role: role;
  body: body[];
};

class SpawnQueue {
  #mySpawn: StructureSpawn;
  #queue: SpawnRequest[] = [];

  constructor(spawn: StructureSpawn) {
    // try to find spawns
    this.#mySpawn = spawn;
  }

  // Getters
  get mySpawn() {
    return this.#mySpawn;
  }

  // Setters
  set mySpawn(spawn) {
    this.#mySpawn = spawn;
  }

  // Private methods

  // Public methods
  spawn() {
    //console.log("[D] SpawnQueue - Current spawn queue: " + JSON.stringify(this.#queue));
    // Check if something is in queue
    if (this.#queue.length > 0) {
      const firstInQueue = this.#queue[0];
      // if yes: try to spawn
      const creep = this.mySpawn.spawnCreep(firstInQueue.body).object;
      // check result:
      if (creep === undefined) {
        // undefined = already busy
      } else {
        // emtpy object = spawning creep
        // set creep properties
        creep.squadId = firstInQueue.squad.id;
        creep.memberId = firstInQueue.memberId;
        creep.role = firstInQueue.role;

        // remove first from queue
        this.#queue = _.drop(this.#queue);

        // add creep to squad
        firstInQueue.squad.updateMember(creep.memberId, creep);
      }
    }
  }

  add(squad, memberId, role, body) {
    this.#queue.push({
      squad: squad,
      memberId: memberId,
      role: role,
      body: body,
    } : SpawnRequest);
  }

  remove() {}
}

export default SpawnQueue;