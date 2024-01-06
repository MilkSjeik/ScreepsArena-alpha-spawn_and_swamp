"use strict";

import { Creep, StructureSpawn } from "game/prototypes";
import { CARRY, MOVE } from "game/constants";
import SpawnQueue from "../SpawnQueue";
import { CreepBody, Role } from "../constants";
import BaseSquad from "squads/BaseSquad";

class BaseCreep {
  squadId: number;
  memberId: number;
  role: Role;
  body: CreepBody[] = [];
  creep: Creep | undefined;

  constructor(squadId: number, memberId: number, role: Role) {
    this.squadId = squadId;
    this.memberId = memberId;
    this.role = role;
  }

  spawn(spawn: StructureSpawn) {
    this.creep = spawn.spawnCreep(this.body).object;
  }

  queueSpawn(spawnQueue: SpawnQueue, squad: BaseSquad) {
    spawnQueue.add(squad, this.memberId, this.role, this.body);
  }

  /**
   * TODO
   */
  run() {
    console.log("[W] Implement run() in the child class!");
  }
}

export default BaseCreep;
