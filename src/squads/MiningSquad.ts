"use strict";

import BaseSquad from "./BaseSquad";
import SpawnQueue from "../SpawnQueue";
import GameMemory from "../GameMemory";
import { Role } from "../constants";
import { StructureContainer } from "game/prototypes";

class Squad extends BaseSquad {
  /**
   * Creates a squad of creeps
   * @constructor
   * @param {Array} roles - An array of creep roles
   * @param {SpawnQueue} spawnQueue - Squad spawn location
   */
  constructor(id: number, roles: Role[], spawnQueue: SpawnQueue) {
    super(id, roles, spawnQueue);
  }

  // Methods
  /**
   * TODO
   */
  run(memory: GameMemory) {
    //console.log("[D] Squad.run()");
    //console.log("[D] Squad members: " + JSON.stringify(this.members));

    // Verify if the squad is complete
    // If not, spawn member

    // Time for action
    //
    // TODO: filter on type of creep => type object correctly
    // - Via array filter
    // OR
    // - Via checking the member
    //
    // for each member in the squad
    this.members.forEach((member) => {
      //console.log("[D] Found member: " + JSON.stringify(member));
      // TODO: If hauler: set target to retrieve energy
      if (member.role === Role.HAULER) {
        //if (member.roles)
        if (member.creep) {
          // TODO: reimplement?
          const container: StructureContainer | null = memory.getCloseContainer(
            member.creep,
          );

          if (container !== null) {
            //console.log("[D] Setting container as source: " + JSON.stringify(container));
            member.source = container;
            //console.log("[D] Set container as source: " + JSON.stringify(member.source));
            member.target = memory.mySpawn;
          }
        }

        member.run();
      }
    });
  }

  #isSquadComplete() {
    // TODO
  }

  #spawnMember() {
    // TODO
  }
}

export default Squad;
