"use strict";

import { Creep, StructureSpawn } from "game/prototypes";
import SpawnQueue from "../SpawnQueue";
import { Role } from "../constants";
import BaseSquad from "squads/BaseSquad";

class BaseCreep {
  squadId: number;
  memberId: number;
  role: Role;
  body = [];
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
}

export default BaseCreep;
